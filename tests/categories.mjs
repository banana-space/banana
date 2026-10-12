import { createProject, buildProject } from './helpers/project.mjs';
import { mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import assert from 'node:assert/strict';
const root = await createProject('categories');
try {
  const originalConfig = await readFile(join(root, 'hugo.toml'), 'utf8');
  assert.doesNotMatch(originalConfig, /categoryDepth/);
  await writeFile(join(root, 'hugo.toml'), originalConfig.replace('[params]', '[params]\ncategoryDepth = 2'));
  await rm(join(root, 'content'), { recursive: true, force: true });
  await mkdir(join(root, 'content/wiki/example'), { recursive: true });
  await writeFile(join(root, 'content/wiki/example/index.md'), '---\ntitle: 示例\ncategories: [示例分类]\n---\n');
  await mkdir(join(root, 'content/wiki/category-test'), { recursive: true });
  const source = '---\ntitle: 分类测试条目\ncategories: [顶点代数, 代数学]\n---\n分类测试正文\n';
  await writeFile(join(root, 'content/wiki/category-test/index.md'), source);
  const build = () => buildProject(root);
  await writeFile(join(root, 'data/categories.yaml'), '数学: {}\n代数学:\n  parent: 数学\n顶点代数:\n  parent: 代数学\n深层分类:\n  parent: 顶点代数\n更深分类:\n  parent: 深层分类\n');
  build();
  const overview = await readFile(join(root, 'public/categories/index.html'), 'utf8');
  assert.match(overview, />数学<\/a>/);
  assert.match(overview, />代数学<\/a>/);
  assert.match(overview, />顶点代数<\/a>/);
  assert.doesNotMatch(overview, />深层分类<\/a>/);
  assert.match(overview, />示例分类<\/a>/);
  for (const [name, child] of [['数学', '代数学'], ['代数学', '顶点代数'], ['顶点代数', '深层分类']]) {
    const html = await readFile(join(root, `public/categories/${name}/index.html`), 'utf8');
    assert.equal((html.match(/<span class="title">分类测试条目<\/span>/g) ?? []).length, name === '数学' ? 0 : 1);
    if (child) assert.ok(html.includes(`>${child}</a>`));
    else assert.ok(!html.includes('<h2>子分类</h2>'));
  }
  const math = await readFile(join(root, 'public/categories/数学/index.html'), 'utf8');
  assert.match(math, />顶点代数<\/a>/);
  assert.ok(!math.includes("<h2>条目</h2>"));
  assert.doesNotMatch(math, />深层分类<\/a>/);
  const algebra = await readFile(join(root, 'public/categories/代数学/index.html'), 'utf8');
  assert.match(algebra, />深层分类<\/a>/);
  assert.doesNotMatch(algebra, />更深分类<\/a>/);
  const deep = await readFile(join(root, 'public/categories/深层分类/index.html'), 'utf8');
  const breadcrumb = deep.match(/<nav aria-label="祖先分类"[\s\S]*?<\/nav>/)[0];
  assert.match(breadcrumb, />数学<\/a>[\s\S]*>代数学<\/a>[\s\S]*>顶点代数<\/a>[\s\S]*>深层分类<\/span>/);
  assert.equal((breadcrumb.match(/icon-folder/g) ?? []).length, 1);
  assert.match(overview, />数学<\/a><sup>1<\/sup>/);
  assert.match(overview, />代数学<\/a><sup>1<\/sup>/);
  assert.match(overview, />顶点代数<\/a><sup>1<\/sup>/);
  await mkdir(join(root, 'content/wiki/leaf-only'), { recursive: true });
  await writeFile(join(root, 'content/wiki/leaf-only/index.md'), '---\ntitle: 仅属叶子条目\ncategories: [顶点代数]\n---\n');
  build();
  const parentPage = await readFile(join(root, 'public/categories/代数学/index.html'), 'utf8');
  assert.doesNotMatch(parentPage, /仅属叶子条目/);
  assert.match(parentPage, /分类测试条目/);
  assert.ok(parentPage.includes("<h2>条目</h2>"));
  assert.match(parentPage, />顶点代数<\/a><sup>2<\/sup>/);
  const updatedOverview = await readFile(join(root, "public/categories/index.html"), "utf8");
  assert.match(updatedOverview, />数学<\/a><sup>2<\/sup>/);
  assert.match(updatedOverview, />代数学<\/a><sup>2<\/sup>/);
  const leafPage = await readFile(join(root, 'public/categories/顶点代数/index.html'), 'utf8');
  assert.match(leafPage, /仅属叶子条目/);
  assert.match(leafPage, /分类测试条目/);
  const config = await readFile(join(root, 'hugo.toml'), 'utf8');
  // Without categoryDepth the tree shows one level below the top or the current category.
  for (const depth of [0, 1, undefined]) {
    await writeFile(join(root, 'hugo.toml'), depth === undefined ? originalConfig : config.replace('categoryDepth = 2', `categoryDepth = ${depth}`));
    build();
    const overview = await readFile(join(root, 'public/categories/index.html'), 'utf8');
    assert.doesNotMatch(overview, />顶点代数<\/a>/);
    if (depth === 0) assert.doesNotMatch(overview, />代数学<\/a>/);
    else assert.match(overview, />代数学<\/a>/);
    const page = await readFile(join(root, 'public/categories/数学/index.html'), 'utf8');
    if (depth === 0) assert.ok(!page.includes('<h2>子分类</h2>'));
    else { assert.match(page, />代数学<\/a>/); assert.doesNotMatch(page, />顶点代数<\/a>/); }
    assert.doesNotMatch(page, /分类测试条目/);
  }
  await writeFile(join(root, 'hugo.toml'), config);
  assert.equal(await readFile(join(root, 'content/wiki/category-test/index.md'), 'utf8'), source);
  const article = await readFile(join(root, 'public/wiki/category-test/index.html'), 'utf8');
  assert.ok(!article.includes('>数学</a>'));
  const articleFooter = article.match(/<footer class="article-footer">[\s\S]*?<\/footer>/)[0];
  const categoryLinks = articleFooter.match(/<nav class="article-categories"[\s\S]*?<\/nav>/)[0];
  assert.equal((categoryLinks.match(/icon-folder/g) ?? []).length, 2);
  assert.doesNotMatch(categoryLinks, /分类：|、|·|•/);
  assert.doesNotMatch(articleFooter, /last-modified/);
  assert.match(article, /<\/main>\s*<footer class="site-footer">/);
  assert.doesNotMatch(overview, /article-footer/);
  assert.doesNotMatch(await readFile(join(root, 'public/index.html'), 'utf8'), /article-footer/);
  // Letter groups: `#` first, Western before Han within a letter, letter bar only with several pages.
  const letterTitles = ['! 模态', '2-范畴', '阿贝尔群', 'Abel 群', ...Array.from({ length: 56 }, (_, i) => `条目 ${String(i + 1).padStart(2, '0')}`)];
  for (const [i, title] of letterTitles.entries()) {
    await mkdir(join(root, `content/wiki/letter-${i}`), { recursive: true });
    await writeFile(join(root, `content/wiki/letter-${i}/index.md`), `---\ntitle: '${title}'\ncategories: [${i < 3 ? '字母分类, 小分类' : '字母分类'}]\n---\n`);
  }
  build();
  const titles = html => [...html.matchAll(/<span class="title">([^<]*)<\/span>/g)].map(match => match[1]);
  const headings = html => [...html.matchAll(/class="letter-heading" id="([^"]+)">([^<]*)</g)].map(match => `${match[1]} ${match[2]}`);
  const first = await readFile(join(root, 'public/categories/字母分类/index.html'), 'utf8');
  assert.deepEqual(titles(first).slice(0, 5), ['2-范畴', '! 模态', 'Abel 群', '阿贝尔群', '条目 01']);
  assert.deepEqual(headings(first), ['letter-other #', 'letter-a A', 'letter-t T']);
  assert.match(first, /<h3 class="letter-heading"/);
  const bar = first.match(/<nav class="letter-nav"[\s\S]*?<\/nav>/)[0];
  assert.match(bar, /<li class="current current-first"><a href="\/categories\/%E5%AD%97%E6%AF%8D%E5%88%86%E7%B1%BB\/#letter-other" title="第 1 页">#</);
  // Letters between this page's first and last ones join the band even without entries.
  assert.match(bar, /<li class="current"><span>B<\/span><\/li>/);
  assert.match(bar, /<li class="current current-last"><a [^>]*>T</);
  assert.match(bar, /<li><span>U<\/span><\/li>/);
  const second = await readFile(join(root, 'public/categories/字母分类/page/2/index.html'), 'utf8');
  assert.deepEqual(headings(second), ['letter-t T（续）']);
  assert.deepEqual(titles(second), ['条目 47', '条目 48', '条目 49', '条目 50', '条目 51', '条目 52', '条目 53', '条目 54', '条目 55', '条目 56']);
  const small = await readFile(join(root, 'public/categories/小分类/index.html'), 'utf8');
  assert.doesNotMatch(small, /letter-groups|letter-nav/);
  const wiki = await readFile(join(root, 'public/wiki/index.html'), 'utf8');
  assert.match(wiki, /<h2 class="letter-heading" id="letter-other">#<\/h2>/);
  for (const i of letterTitles.keys()) await rm(join(root, `content/wiki/letter-${i}`), { recursive: true });
  await writeFile(join(root, 'data/categories.yaml'), '数学: {}\n空分类:\n  parent: 数学\n');
  build();
  assert.ok((await readFile(join(root, 'public/categories/数学/index.html'), 'utf8')).includes('>空分类</a>'));
  const emptyPage = await readFile(join(root, 'public/categories/空分类/index.html'), 'utf8');
  assert.ok(!emptyPage.includes('<h2>条目</h2>'));
  await writeFile(join(root, 'data/categories.yaml'), '甲:\n  parent: 乙\n乙:\n  parent: 甲\n');
  assert.throws(() => execFileSync(process.execPath, ['scripts/prebuild.mjs'], { cwd: root, stdio: 'pipe' }), /分类存在循环/);
  await writeFile(join(root, 'data/categories.yaml'), '甲:\n  parent: 不存在\n');
  assert.throws(() => execFileSync(process.execPath, ['scripts/prebuild.mjs'], { cwd: root, stdio: 'pipe' }), /分类不存在/);
  console.log('分类层数 0/1/2、完整祖先导航、直接归属筛选、后代汇总计数、空条目标题、去重、空分类、字母分组与无效配置验证通过');
} finally { await rm(root, { recursive: true, force: true }); }
