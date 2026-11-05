import { cp, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

export const projectRoot = fileURLToPath(new URL('../../', import.meta.url));
const defaults = ['scripts', 'site', 'data', 'content'];

// 测试使用固定的示例内容和分类树，不依赖、也不复制项目中的真实条目。
const fixtures = join(projectRoot, 'tests/fixtures');

export async function createProject(name, paths = defaults) {
  const root = await mkdtemp(join(tmpdir(), `banana-${name}-`));
  try {
    for (const path of paths) {
      const source = path === 'content' || path.startsWith('content/') ? join(fixtures, path) : join(projectRoot, path);
      // Not the real site's legacy revisions, which would attach to fixture pages of the same names.
      await cp(source, join(root, path), { recursive: true, filter: file => !file.endsWith('/data/legacy_history.json') });
    }
    if (paths.includes('data')) await cp(join(fixtures, 'data'), join(root, 'data'), { recursive: true });
    await symlink(join(projectRoot, 'node_modules'), join(root, 'node_modules'));
    if (paths.includes('data')) {
      // Tests use example.org rather than the production address.
      const config = (await readFile(join(root, 'data/site.yaml'), 'utf8')).replace(/^baseURL: .*$/m, 'baseURL: https://example.org/');
      await writeFile(join(root, 'data/site.yaml'), config);
    }
    return root;
  } catch (error) { await rm(root, { recursive: true, force: true }); throw error; }
}


export function buildProject(root, extra = []) {
  execFileSync(process.execPath, ['scripts/build.mjs', ...extra], { cwd: root, stdio: 'pipe', env: buildEnvironment() });
}

/**
 * The environment of a test's build: without the GitHub token a developer may have set, so that a fixture's history
 * never asks the real GitHub about pull requests of the same numbers (scripts/prebuild/github-authors.mjs).
 */
export const buildEnvironment = (extra = {}) => {
  const { BANANA_GITHUB_TOKEN, BANANA_GITHUB_API, ...rest } = process.env;
  return { ...rest, ...extra };
};

/** The prebuild alone: Map of a page's relative path → { metadata, html }. Its errors are thrown. */
export function generatedPages(root, extra = []) {
  const output = execFileSync(process.execPath, [join(projectRoot, 'tests/helpers/generated-pages.mjs'), ...extra], { cwd: root, encoding: 'utf8', stdio: 'pipe', maxBuffer: 2 ** 30 });
  return new Map(JSON.parse(output));
}
