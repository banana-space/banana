import { createHash } from 'node:crypto';
import { cp, mkdir, readFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as esbuild from 'esbuild';
import * as sass from 'sass';
import { relURL } from '../shared/urls.mjs';

/**
 * The site's assets, as Hugo's pipes made them: the stylesheets (KaTeX's, and the site's from assets/scss/ by
 * Sass), the scripts bundled by esbuild (assets/js/: the diff page, the editor, the editor's instant checks), each
 * minified and named by its fingerprint with its integrity (unminified and unnamed in development); and the files
 * copied as they are (static/, KaTeX's fonts and licence, the pages' history data).
 */

const root = fileURLToPath(new URL('../../', import.meta.url));

/** A file named by its content: path with .<sha256> before its extension, and its integrity. */
function fingerprinted(path, content) {
  const hash = createHash('sha256').update(content);
  const digest = hash.digest();
  return { path: path.replace(/(\.[a-z]+)$/, `.${digest.toString('hex')}$1`), integrity: `sha256-${digest.toString('base64')}` };
}

/**
 * esbuild's resolution for assets/js/: "../scripts/…" is the repository's scripts/ (once mounted under
 * assets/js/scripts/), and "@params" the data given (js.Build's params).
 */
function sitePlugin(params) {
  return {
    name: 'site',
    setup(build) {
      build.onResolve({ filter: /^\.\.\/scripts\// }, args => ({ path: join(root, args.path.slice(3)) }));
      build.onResolve({ filter: /^@params$/ }, () => ({ path: 'params', namespace: 'params' }));
      build.onLoad({ filter: /.*/, namespace: 'params' }, () => ({ contents: JSON.stringify(params ?? {}), loader: 'json' }));
    },
  };
}

async function bundle(entry, { development, alias = {}, define = {}, params } = {}) {
  const result = await esbuild.build({
    entryPoints: [join(root, entry)], bundle: true, write: false, format: 'esm', target: 'es2020', minify: !development,
    alias, define, plugins: [sitePlugin(params)], logLevel: 'error',
  });
  return Buffer.from(result.outputFiles[0].contents);
}

/** An asset: in production named by its fingerprint, with its integrity; in development by path. */
function asset(files, path, content, development) {
  const named = development ? { path } : fingerprinted(path, content);
  files.set(named.path, content);
  return { path: named.path, href: relURL(named.path), integrity: named.integrity };
}

/**
 * The assets: { files (path → content), assets } (assets: { katex, styles, diff, editor, editorCheck }, each
 * { path, href, integrity }). development: unminified, unnamed (for serve).
 */
export async function buildAssets({ development = false } = {}) {
  const files = new Map(), assets = {};
  const minifyCSS = async css => development ? Buffer.from(css) : Buffer.from((await esbuild.transform(css, { loader: 'css', minify: true, charset: 'utf8' })).code);
  const katex = await readFile(join(root, 'node_modules/katex/dist/katex.css'), 'utf8');
  assets.katex = asset(files, development ? 'katex/katex.css' : 'katex/katex.min.css', await minifyCSS(katex), development);
  // The site's stylesheet: its one template expression, the fonts' address.
  const scss = (await readFile(join(root, 'assets/scss/site.scss'), 'utf8')).replace(/\{\{\s*"fonts\/"\s*\|\s*relURL\s*\}\}/, relURL('fonts/'));
  // Colour functions (desaturate, mix…) give channels with fractions, which dart-sass writes as rgb() percentages:
  // written in hex, rounded to 8 bits as Hugo's Sass did.
  const hex = value => Math.round(Number(value) * 2.55).toString(16).padStart(2, '0');
  const compiled = sass.compileString(scss, {
    url: pathToFileURL(join(root, 'assets/scss/site.scss')), loadPaths: [join(root, 'assets/scss')], style: 'expanded',
    quietDeps: true, logger: sass.Logger.silent, sourceMap: development,
  });
  let css = compiled.css.replace(/rgb\(([\d.]+)%, ([\d.]+)%, ([\d.]+)%\)/g, (_, red, green, blue) => `#${hex(red)}${hex(green)}${hex(blue)}`);
  // In development with its source map, as Hugo's.
  if (development) {
    files.set('css/site.css.map', Buffer.from(JSON.stringify(compiled.sourceMap)));
    css += '\n\n/*# sourceMappingURL=site.css.map */';
  }
  assets.styles = asset(files, development ? 'css/site.css' : 'css/site.min.css', await minifyCSS(css), development);
  assets.diff = asset(files, 'js/diff.js', await bundle('assets/js/diff/main.js', { development }), development);
  assets.editor = asset(files, 'js/editor.js', await bundle('assets/js/editor/main.js', { development }), development);
  // The instant checks: the preprocessing's parsing in the browser, node:fs reading the data files embedded here.
  const embedded = Object.fromEntries(await Promise.all(['i18n/zh-cn.yaml', 'data/theorems.yaml'].map(async file => [file, await readFile(join(root, file), 'utf8')])));
  assets.editorCheck = asset(files, 'js/editor-check.js', await bundle('assets/js/editor/check.js', {
    development, alias: { 'node:fs': join(root, 'assets/js/editor/shims/fs.js') }, params: { files: embedded },
    define: { 'import.meta.url': JSON.stringify('https://banana.invalid/scripts/prebuild/check.js') },
  }), development);
  // esbuild's service process (about 100 MB) would otherwise stay for the life of a long-running process; the
  // next build starts it again.
  await esbuild.stop();
  return { files, assets };
}

/** A named data file of the site (the editor's names): { path, href }, added to files. */
export const dataAsset = (files, path, content, development) => asset(files, path, Buffer.from(content), development);

/**
 * Copies a directory's files (those filter takes) into another, with their times: a file already there with the same
 * size and time is left alone (serve starts again over its last output).
 */
async function copyTree(from, to, filter = () => true) {
  const info = await stat(from).catch(() => undefined);
  if (!info) return;
  await mkdir(to, { recursive: true });
  await Promise.all((await readdir(from, { withFileTypes: true })).map(async entry => {
    const source = join(from, entry.name), target = join(to, entry.name);
    if (entry.isDirectory()) return copyTree(source, target, filter);
    if (filter(entry.name)) await copyChanged(source, target);
  }));
}

/** Copies a file with its time, unless a file with the same size and time is there already. */
async function copyChanged(source, target) {
  const [given, present] = await Promise.all([stat(source), stat(target).catch(() => undefined)]);
  if (present?.size === given.size && present.mtimeMs === given.mtimeMs) return;
  await cp(source, target, { preserveTimestamps: true });
}

/**
 * Copies the files published as they are into output: static/, KaTeX's fonts and licence, and (history) the
 * pages' history data.
 */
export async function copyStatic(output, { history = true } = {}) {
  await copyTree(join(root, 'static'), output);
  await copyTree(join(root, 'node_modules/katex/dist/fonts'), join(output, 'katex/fonts'), name => name.endsWith('.woff2'));
  await mkdir(join(output, 'katex'), { recursive: true });
  await copyChanged(join(root, 'node_modules/katex/LICENSE'), join(output, 'katex/LICENSE'));
  if (history) await copyTree(join(root, '.build/history'), join(output, 'history/data'));
}

