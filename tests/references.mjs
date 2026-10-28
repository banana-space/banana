import { createProject, buildProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

import { transformDocument as transform } from 'bananamark/internal/structure.mjs';
import { inspectDocument } from 'bananamark/internal/nodes.mjs';
import { normalizeNames, prepareBibliography } from 'bananamark/internal/bibliography.mjs';
import { personIndex } from '../scripts/prebuild/people.mjs';
import { siteSyntax } from '../scripts/shared/syntax.mjs';
import { validReferenceName } from 'bananamark/internal/markup.mjs';
import { bibliographyBlock as block, firstBibliography as first, referenceFixture as fixture } from '../packages/bananamark/test/fixtures.mjs';

// The document written out (inspectDocument): nodes as ⟦type field="…"⟧.
// A Chinese page, as the site's are.
const transformDocument = (source, options) => inspectDocument(transform(source, { ...siteSyntax, lang: 'zh-cn', ...options }));
const fail = message => { throw new Error(message); };
// Authors link to biographies: the full name, or the family name with compatible given names, when one page fits.
const people = personIndex([
  { key: 'Armand Borel', names: ['Armand Borel'] }, { key: 'Émile Borel', names: ['Émile Borel'] },
  { key: 'Jean-Pierre Serre', names: ['Jean-Pierre Serre', 'Serre'] }, { key: 'Peter Dirichlet', names: ['Peter Dirichlet', 'Johann Peter Gustav Lejeune Dirichlet'] },
  { key: 'Georges de Rham', names: ['Georges de Rham'] }, { key: '丘成桐', names: ['丘成桐', 'Shing-Tung Yau'] },
]);
// The site's resolvePersonLink (scripts/prebuild/run.mjs): a biography, not on the article itself (self).
const resolvePersonLink = (self) => name => { const key = people.match(name); return key && key !== self ? { target: key } : undefined; };
const match = name => people.match(normalizeNames(name, fail)[0]);
assert.equal(match('A. Borel'), 'Armand Borel');
assert.equal(match('E. Borel'), 'Émile Borel');
assert.equal(match('Borel'), undefined, 'Two pages fit: no link');
assert.equal(match('J.-P. Serre'), 'Jean-Pierre Serre');
assert.equal(match('Jean-Pierre H. Serre'), 'Jean-Pierre Serre', 'A middle initial may be missing from the page');
assert.equal(match('Pierre Serre'), undefined, 'The first given name must fit');
assert.equal(match('P. G. L. Dirichlet'), 'Peter Dirichlet');
assert.equal(match({ family: 'de Rham', given: 'G.' }), 'Georges de Rham');
assert.equal(match('Yau, Shing-Tung'), '丘成桐');
assert.equal(match('丘成桐'), '丘成桐');
assert.equal(match('Alice Borel'), undefined);
const linked = transformDocument('@a\n\n' + block(`a:
  type: book
  title: T
  author: ["Serre, J.-P.", {family: Borel, page: Armand Borel}, {family: Serre, given: Jean-Pierre, page: false}]
  editor: A. Borel`), { resolvePersonLink: resolvePersonLink() });
// Bold inside the link: ** between the names' marker and [ would not open emphasis (shown as **).
assert.match(linked, /⟦bibliographySpan class="names"⟧\[\*\*Serre\*\*\]\(⟦wiki target="Jean-Pierre Serre" name="Jean-Pierre Serre"⟧\), J\.-P\.; \[\*\*Borel\*\*\]\(⟦wiki target="Armand Borel"[^)]*\); \*\*Serre\*\*, Jean-Pierre/);
assert.match(linked, /编者：⟦bibliographySpanEnd⟧\[A\. Borel\]\(⟦wiki target="Armand Borel"/);
// An article's bibliography does not link its own subject to it.
const own = transformDocument('@a\n\n' + block('a: {type: book, title: T, author: J.-P. Serre, editor: A. Borel}'), { resolvePersonLink: resolvePersonLink('Jean-Pierre Serre') });
assert.match(own, /names"⟧\*\*Serre\*\*, J\.-P\./);
assert.match(own, /\[A\. Borel\]\(⟦wiki /);

const root = await createProject('references');
try {
  const directory = join(root, 'content/wiki/reference-test');
  await mkdir(directory, { recursive: true });
  const original = `---\ntitle: 引用测试\n---\n${fixture}`;
  await writeFile(join(directory, 'index.md'), original);
  const build = () => buildProject(root);
  build();
  const html = await readFile(join(root, 'public/wiki/reference-test/index.html'), 'utf8');
  assert.match(html, /href="#thm:main">定理 1\.1<\/a>,/);
  assert.match(html, /data-reference="online:a">nLab a<\/a>/);
  assert.match(html, /data-reference="online:b">nLab b<\/a>/);
  assert.match(html, /<strong>nLab<\/strong> \(a\)/);
  assert.match(html, /<strong>nLab<\/strong> \(b\)/);
  assert.match(html, /href="#thm:main">上述<strong>定理<\/strong><\/a>/);
  assert.match(html, /<div class="bm-bibliography-entry" id="bib-book" lang="en">\s*<p><span class="bm-bibliography-names"><strong>Smith<\/strong>, Alice<\/span> \(2020a\)/);
  assert.ok(html.indexOf('id="bib-online:a"') < html.indexOf('<p>这段简介'));
  assert.ok(html.indexOf('<p>这段简介') < html.indexOf('id="bib-online:b"'));
  assert.doesNotMatch(html, /raw HTML omitted|citation:\?|reference:\?|```bibliography/);
  assert.equal(await readFile(join(directory, 'index.md'), 'utf8'), original);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size);
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(decodeURIComponent(match[1])), `缺失引用锚点：${match[1]}`);
  const generated = await readFile(join(root, '.build/content/wiki/reference-test/index.md'), 'utf8');
  assert.match(generated, /bibliographyEntries:/);
  assert.match(generated, /citationAuthor: nLab/);
  // 目录复用正文解析后的引用；未编号标题与自定义文字的嵌套引用只能生成一层链接。
  const nested = `## 目标 {@sec:target}

## 参见 @sec:target 与 @named {@sec:references}

### **子节** @sec:target 与 $A$ {@sub}

@sub
[见 @sec:target 和 @sub](@sec:references)
[[顶点代数|参见 @sec:target]]

${block('named: {type: book, label: "EGA I", title: Example, author: "Grothendieck, A.", year: 1960}')}`;
  await writeFile(join(directory, 'index.md'), `---\ntitle: 嵌套引用\n---\n${nested}`);
  build();
  const nestedHtml = await readFile(join(root, 'public/wiki/reference-test/index.html'), 'utf8');
  const toc = nestedHtml.match(/<nav id="TableOfContents"[^>]*>([\s\S]*?)<\/nav>/)[1];
  assert.match(toc, /<span class="toc-section-number directory-number">2<\/span> <span class="toc-item-title directory-item-title">参见第 1 节与 EGA I/);
  assert.equal((toc.match(/<a /g) ?? []).length, 3);
  assert.doesNotMatch(toc, /reference_section|reference:\?|citation:\?/);
  assert.match(nestedHtml, /href="#[^"]+"><span class="toc-item-title directory-item-title"><strong>子节<\/strong>第 1 节与 <span class="bm-math-rendered"/);
  assert.match(nestedHtml, /href="#[^"]+">见第 1 节和<strong>子节<\/strong>第 1 节与/);
  assert.match(nestedHtml, /href="\/wiki\/[^\"]+" class="bm-wiki-link">参见第 1 节<\/a>/);
  assert.doesNotMatch(nestedHtml, /<a\b[^>]*>(?:(?!<\/a>)[\s\S])*<a\b/);
  assert.match(nestedHtml, /<span class="bm-bibliography-label" data-typography="boundary">EGA I<\/span><span class="bm-bibliography-names">Grothendieck, A\.<\/span> \(1960\)/);
  assert.throws(() => transformDocument('### A @b {@a}\n\n### B @a {@b}'), /循环引用/);
  // 文献锚点参与现有 Hugo 标题冲突检查。
  await writeFile(join(directory, 'index.md'), `---\ntitle: 引用测试\n---\n## bib-book\n\n${first}`);
  assert.throws(build, /引用标签与标题自动锚点重复/);
  // 脚注定义中的引用与百科链接照常转换；引用式链接定义保持原样。
  const footnote = transformDocument('正文[^1]。\n\n[^1]: 见 [@fn, 命题 1] 与 [[群]]。\n\n[x]: https://example.com/[[群]]\n\n' + block('fn: {type: book, title: Footnote book, author: Ann Lee, year: 2017}'));
  assert.match(footnote, /^\[\^1\]: 见 \[\[Lee 2017\]\(⟦citation id="bib-fn" key="fn"⟧\), 命题 1\] 与 \[群\]\(⟦wiki /m);
  assert.match(footnote, /^\[x\]: https:\/\/example\.com\/\[\[群\]\]$/m);
  console.log('统一 @ 引用、作者排版与作者链接、文献版本与附注、自定义文献标签、多块消歧、代码保护、脚注内引用、目录及嵌套引用验证通过');
} finally { await rm(root, { recursive: true, force: true }); }
