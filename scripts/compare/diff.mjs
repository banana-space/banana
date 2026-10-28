import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { gunzipSync } from 'node:zlib';

/**
 * Compares two built sites file by file (see docs/compare.md).
 *
 * Text files are split into lines (HTML into one tag or one run of text per line) and diffed; the differing
 * files are then grouped by the shape of their changes, so that one cause showing up on 2000 pages is reported
 * once. The search index is compared through what Pagefind was given: each page's decoded fragment.
 */

const textTypes = /\.(?:html?|css|js|mjs|json|txt|xml|svg|map|md)$/i;
// Pagefind's other files (the index chunks, the entry, the wasm) follow from the fragments.
const pagefindFragment = /^pagefind\/fragment\/[^/]+\.pf_fragment$/;
const pagefindOther = /^pagefind\//;

async function filesOf(root, directory = '', files = new Map()) {
  for (const entry of await readdir(join(root, directory), { withFileTypes: true })) {
    const path = directory ? `${directory}/${entry.name}` : entry.name;
    if (entry.isDirectory()) await filesOf(root, path, files);
    else if (entry.isFile() || entry.isSymbolicLink()) files.set(path, join(root, path));
  }
  return files;
}

/** A Pagefind fragment: gzip of "pagefind_dcd" followed by the page's JSON. */
export function decodeFragment(buffer) {
  const text = gunzipSync(buffer).toString('utf8');
  return JSON.parse(text.startsWith('pagefind_dcd') ? text.slice('pagefind_dcd'.length) : text);
}

const sorted = value => Array.isArray(value) ? value.map(sorted)
  : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(key => [key, sorted(value[key])]))
  : value;

/** The search documents of a site, keyed by "search:<url>", as lines: the fields, then the content by sentence. */
async function searchDocuments(files) {
  const documents = new Map();
  for (const [path, file] of files) {
    if (!pagefindFragment.test(path)) continue;
    const { content = '', ...rest } = decodeFragment(await readFile(file));
    const lines = [JSON.stringify(sorted({ ...rest, word_count: undefined })), ...content.split(/(?<=[。．.!?！？；;\n])/)];
    documents.set(`search:${rest.url}`, lines.map(line => line.trim()).filter(Boolean));
  }
  return documents;
}

/** HTML as lines: each tag on its own line, each run of text between tags on its own. */
export function htmlLines(html) {
  // A tag ends at the first > outside its quoted attribute values (which may hold < and >: parse5 does not escape them).
  return html.split(/(<(?:[^>"']|"[^"]*"|'[^']*')*>)/).map(part => part.trim()).filter(Boolean);
}

export function linesOf(path, text) {
  return /\.html?$/i.test(path) ? htmlLines(text) : text.split('\n');
}

/**
 * Myers' diff of two line arrays. Returns hunks { a, b, removed, added } (a and b: the 0-based start in each),
 * or undefined when the arrays differ in more than maxEdits lines (then they are reported as rewritten).
 */
export function diffLines(a, b, maxEdits = 2000) {
  let start = 0;
  while (start < a.length && start < b.length && a[start] === b[start]) start++;
  let endA = a.length, endB = b.length;
  while (endA > start && endB > start && a[endA - 1] === b[endB - 1]) { endA--; endB--; }
  const x0 = a.slice(start, endA), y0 = b.slice(start, endB);
  const n = x0.length, m = y0.length, max = n + m;
  if (max === 0) return [];
  const offset = max + 1, v = new Int32Array(2 * max + 3), trace = [];
  let found = -1;
  for (let d = 0; d <= Math.min(max, maxEdits) && found < 0; d++) {
    // Only v[k ± 1] for |k| ≤ d is read back: keep that window (memory grows as d², not d · (n + m)).
    trace.push(v.slice(offset - d - 1, offset + d + 2));
    for (let k = -d; k <= d; k += 2) {
      let x = k === -d || (k !== d && v[offset + k - 1] < v[offset + k + 1]) ? v[offset + k + 1] : v[offset + k - 1] + 1;
      let y = x - k;
      while (x < n && y < m && x0[x] === y0[y]) { x++; y++; }
      v[offset + k] = x;
      if (x >= n && y >= m) { found = d; break; }
    }
  }
  if (found < 0) return;
  // Walk back through the trace to recover the edit script.
  const edits = [];
  let x = n, y = m;
  for (let d = found; d > 0; d--) {
    const window = trace[d], at = k => window[k + d + 1], k = x - y;
    const down = k === -d || (k !== d && at(k - 1) < at(k + 1));
    const prevK = down ? k + 1 : k - 1, prevX = at(prevK), prevY = prevX - prevK;
    while (x > prevX && y > prevY) { x--; y--; }
    if (down) edits.push({ type: 'add', b: --y }); else edits.push({ type: 'remove', a: --x });
  }
  edits.reverse();
  // Merge adjacent edits into hunks.
  const hunks = [];
  let ai = 0, bi = 0, hunk;
  for (const edit of edits) {
    const at = edit.type === 'remove' ? edit.a : edit.b;
    // Advance over equal lines up to this edit.
    while ((edit.type === 'remove' ? ai < edit.a : bi < edit.b)) { ai++; bi++; hunk = undefined; }
    if (!hunk) hunks.push(hunk = { a: start + ai, b: start + bi, removed: [], added: [] });
    if (edit.type === 'remove') { hunk.removed.push(x0[at]); ai++; }
    else { hunk.added.push(y0[at]); bi++; }
  }
  return hunks;
}

/** The shape of a line: a tag's name and classes, or "…" for text; other lines as they are, digits as 0. */
function shapeOf(line) {
  const tag = line.match(/^<(\/?[a-zA-Z][\w-]*)([^>]*)>$/);
  if (tag) {
    const classes = tag[2].match(/\bclass="([^"]*)"/)?.[1];
    return `<${tag[1]}${classes ? `.${classes.trim().split(/\s+/).join('.')}` : ''}>`;
  }
  return line.startsWith('<') ? line.replace(/\d+/g, '0') : '…';
}

/**
 * A signature for a hunk: what kind of lines were removed and added, independent of the page's own text, after
 * which line (its shape: changed text inside <p> and inside <h2> are different kinds), and in what kind of file.
 */
function hunkSignature(path, lines, hunk) {
  const shape = lines => [...new Set(lines.map(shapeOf))].join(' ');
  const kind = path.startsWith('search:') ? 'search' : path.match(/\.(\w+)$/)?.[1] ?? '';
  return `${kind} after ${hunk.a ? shapeOf(lines[hunk.a - 1]) : 'start'}\n- ${shape(hunk.removed)}\n+ ${shape(hunk.added)}`;
}

const hash = value => createHash('sha256').update(value).digest('hex').slice(0, 12);

/**
 * Compares the sites at base and result. normalizers (see allowed.mjs) are applied to both sides' text first;
 * include(path), when given, limits the comparison to the files it accepts; paths(path), when given, gives the
 * name a file is compared under (both sides: a fingerprinted asset under one name).
 * Returns { onlyBase, onlyResult, changed, groups, compared }: changed lists { path, hunks } (hunks undefined
 * when the file was rewritten or is binary); groups gathers the changed paths by the signatures of their hunks.
 */
export async function compareSites(base, result, { normalizers = [], onProgress, include, paths = path => path } = {}) {
  const renamed = files => new Map([...files].map(([path, file]) => [paths(path), file]));
  const [baseFiles, resultFiles] = (await Promise.all([filesOf(base), filesOf(result)])).map(renamed);
  const relevant = path => !pagefindOther.test(path) && (!include || include(path));
  const onlyBase = [...baseFiles.keys()].filter(path => relevant(path) && !resultFiles.has(path)).sort();
  const onlyResult = [...resultFiles.keys()].filter(path => relevant(path) && !baseFiles.has(path)).sort();
  const normalize = (path, text) => normalizers.reduce((value, { normalize }) => normalize(path, value), text);

  const changed = [];
  const common = [...baseFiles.keys()].filter(path => relevant(path) && resultFiles.has(path)).sort();
  let done = 0;
  for (const path of common) {
    if (++done % 500 === 0) onProgress?.(done, common.length);
    const [left, right] = await Promise.all([readFile(baseFiles.get(path)), readFile(resultFiles.get(path))]);
    if (left.equals(right)) continue;
    if (!textTypes.test(path)) { changed.push({ path }); continue; }
    const a = normalize(path, left.toString('utf8')), b = normalize(path, right.toString('utf8'));
    if (a === b) continue;
    const lines = linesOf(path, a);
    changed.push({ path, lines, hunks: diffLines(lines, linesOf(path, b)) });
  }

  const [baseSearch, resultSearch] = await Promise.all([searchDocuments(baseFiles), searchDocuments(resultFiles)]);
  for (const key of [...baseSearch.keys()].sort()) if (!resultSearch.has(key)) onlyBase.push(key);
  for (const key of [...resultSearch.keys()].sort()) if (!baseSearch.has(key)) onlyResult.push(key);
  for (const [key, lines] of [...baseSearch].sort(([a], [b]) => a < b ? -1 : 1)) {
    const other = resultSearch.get(key);
    if (!other) continue;
    const a = normalize(key, lines.join('\n')), b = normalize(key, other.join('\n'));
    if (a !== b) changed.push({ path: key, lines: a.split('\n'), hunks: diffLines(a.split('\n'), b.split('\n')) });
  }

  const groups = new Map();
  for (const file of changed) {
    const signatures = file.hunks ? [...new Set(file.hunks.map(hunk => hunkSignature(file.path, file.lines, hunk)))].sort() : [file.path.startsWith('search:') ? 'search' : 'rewritten or binary'];
    const key = hash(signatures.join('\n\n'));
    if (!groups.has(key)) groups.set(key, { key, signatures, paths: [] });
    groups.get(key).paths.push(file.path);
  }
  for (const file of changed) delete file.lines;
  return {
    onlyBase, onlyResult, changed,
    groups: [...groups.values()].sort((a, b) => b.paths.length - a.paths.length),
    compared: common.length + baseSearch.size,
  };
}

const fence = lines => `\`\`\`diff\n${lines.join('\n')}\n\`\`\``;

/** A Markdown report of a comparison: a summary, then each group with an example. */
export function formatReport(comparison, { title = '对照检查', notes = [], examples = 3, lines = 40 } = {}) {
  const { onlyBase, onlyResult, changed, groups, compared } = comparison;
  const out = [`# ${title}`, '', ...notes.map(note => `- ${note}`), ...(notes.length ? [''] : [])];
  out.push(`比较了 ${compared} 个文件与搜索文档：${changed.length} 个不同，${onlyBase.length} 个只在基准中，${onlyResult.length} 个只在结果中。`, '');
  const list = (heading, paths) => {
    if (!paths.length) return;
    out.push(`## ${heading}（${paths.length}）`, '', ...paths.slice(0, 50).map(path => `- \`${path}\``));
    if (paths.length > 50) out.push(`- ……另有 ${paths.length - 50} 个`);
    out.push('');
  };
  list('只在基准中', onlyBase);
  list('只在结果中', onlyResult);
  const byPath = new Map(changed.map(file => [file.path, file]));
  groups.forEach((group, index) => {
    out.push(`## 差异 ${index + 1}：${group.paths.length} 个文件（${group.key}）`, '');
    out.push(...group.paths.slice(0, examples).map(path => `- \`${path}\``));
    if (group.paths.length > examples) out.push(`- ……另有 ${group.paths.length - examples} 个`);
    out.push('');
    const example = byPath.get(group.paths[0]);
    if (!example.hunks) { out.push(example.path.startsWith('search:') ? '（搜索文档不同）' : '（整个文件不同，或不是文本文件）', ''); return; }
    const shown = [];
    for (const hunk of example.hunks) {
      shown.push(`@@ -${hunk.a + 1} +${hunk.b + 1} @@`, ...hunk.removed.map(line => `- ${line}`), ...hunk.added.map(line => `+ ${line}`));
      if (shown.length >= lines) break;
    }
    out.push(fence(shown.length > lines ? [...shown.slice(0, lines), '…'] : shown), '');
  });
  return out.join('\n');
}
