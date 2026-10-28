import assert from 'node:assert/strict';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { parse, stringify } from 'yaml';
import { createProject, buildProject } from './helpers/project.mjs';
import { parse as parseHTML, serialize } from 'parse5';
import { typesetTree } from 'bananamark/typography';
import { typography } from '../scripts/shared/typography.mjs';

// A page typeset as postbuild does.
const normalizeHTML = html => serialize(typesetTree(parseHTML(html), { lang: 'zh-cn', typography }));
import { t } from '../scripts/shared/i18n.mjs';

assert.match(t('missing_article_link', { Name: '$& <name>' }), /\$& <name>/);
assert.throws(() => t('missing_key'), /Missing translation/);
assert.throws(() => t('missing_article_link'), /Missing translation value/);

const root = await createProject('i18n');
try {
  const path = join(root, 'i18n/zh-cn.yaml');
  const table = parse(await readFile(path, 'utf8'));
  for (const [key, other] of Object.entries({
    search_placeholder: 'Find {{ .Site }}', search_no_results: 'Nothing for {{ .Query }}',
    term_translations: 'Translations', gender_m: 'Masculine',
    navbox_expand: 'Expand', navbox_collapse: 'Collapse',
    missing_content: '{{ .Name }} has no content.', missing_quoted_name: '[{{ .Name }}]',
    missing_page_title: 'Missing: {{ .Name }}',
  })) table[key] = { other };
  await writeFile(path, stringify(table));
  const directory = join(root, 'content/wiki/i18n-test');
  await mkdir(directory, { recursive: true });
  const source = `---\ntitle: Translation test\nnavboxes: [代数拓扑]\n---\n\n::: proof\n正文\n:::\n\n\`\`\`terms\n群: {de: 'Gruppe :m'}\n\`\`\`\n\n\`\`\`bibliography\nbook: {type: book, title: Book, url: 'https://example.com/book.pdf'}\nweb: {type: online, title: Web, site: Test, url: 'https://example.com', urldate: '2024-06-01'}\n\`\`\`\n`;
  await writeFile(join(directory, 'index.md'), source);
  const output = execFileSync(process.execPath, ['scripts/prebuild.mjs'], { cwd: root, encoding: 'utf8' });
  assert.match(output, /^prebuild: \d+ pages -> \.build\/content \(\d+ ms\)$/m, 'Build progress is in English with timings');
  const generated = await readFile(join(root, '.build/content/wiki/i18n-test/index.md'), 'utf8');
  // The bibliography's words are bananamark's (its messages), not the site's.
  assert.match(generated, /无日期/);
  assert.match(generated, /访问于 2024-06-01/);
  assert.match(generated, /<a href="https:\/\/example.com\/book\.pdf"[^>]*>pdf/);
  buildProject(root);
  const html = normalizeHTML(await readFile(join(root, 'public/wiki/i18n-test/index.html'), 'utf8'));
  assert.match(html, /placeholder="Find 香蕉空间"/);
  assert.match(html, /"noResults":"Nothing for \{query\}"/);
  assert.match(html, /terms-title">Translations/);
  assert.match(html, /title="Masculine"/);
  assert.match(html, /data-expand="Expand" data-collapse="Collapse"/);
  assert.match(html, /bm-envtitle">证明\u3000<\/span>/);
  assert.match(html, /bm-envtitle">证明\u3000<\/span><div class="bm-envcontent"><p>正文<\/p>/);
  const missing = normalizeHTML(await readFile(join(root, 'public/missing/index.html'), 'utf8'));
  assert.match(missing, /data-title-format="Missing: \{name\}"/);
  assert.match(missing, /data-name-format="\[\{name\}\]"/);
  assert.match(missing, /<\/span> has no content/);
  await writeFile(join(directory, 'index.md'), '---\ntitle: Translation test\n---\n@missing\n');
  assert.throws(() => buildProject(root), /index.md:4: 引用标签不存在：missing/);
  console.log('统一语言文件、预处理输出与错误定位、界面和脚本文字、证明间隔验证通过');
} finally { await rm(root, { recursive: true, force: true }); }
