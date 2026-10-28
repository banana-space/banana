import { normalizeWhitespace } from './whitespace.mjs';

/**
 * Differences between the Hugo build (main) and the new build that are allowed, each with its reason
 * (docs/compare.md). Each entry rewrites both sides' text before they are compared,
 * so that only this difference disappears; it should be as narrow as it can be.
 *
 * { reason: '为什么允许这个差异', normalize: (path, text) => text }
 *
 * path is the file's path in public/, or "search:<url>" for a page's search document.
 */
export const allowed = [
  {
    reason: '内容语言的默认值由 zh 改为 zh-cn（将来可能区分简繁），参考文献等处的 lang="zh" 随之改变',
    normalize: (path, text) => text.replace(/lang="zh"/g, 'lang="zh-cn"'),
  },
  {
    reason: '样式与脚本由 esbuild 与 sass 生成（不再经 Hugo）：文件名中的指纹与完整性校验值随之改变；样式表的压缩方式不同（字体名的大小写、transparent 写作 0 0、dart-sass 拆开声明与嵌套规则混排的规则），内容另行核对为等价，不逐字比较',
    normalize: (path, text) => /\.(?:css)$/.test(path) && path.includes('FINGERPRINT') ? ''
      : text.replace(/\.[0-9a-f]{64}\.(css|js|json)/g, '.FINGERPRINT.$1').replace(/integrity="sha256-[^"]*"/g, 'integrity="sha256-"'),
  },
  {
    reason: '页面最后修改时间（article:modified_time）写成 ISO 8601；Hugo 用 Go 的时间格式（2026-10-12 16:50:47 +0100 BST）',
    normalize: (path, text) => text.replace(/(article:modified_time" content=")(\d{4}-\d\d-\d\d) (\d\d:\d\d:\d\d) (\+|&#43;|-)(\d\d)(\d\d) [^"]+"/g, (_, start, date, time, sign, hours, minutes) => `${start}${date}T${time}${sign === '-' ? '-' : '+'}${hours}:${minutes}"`),
  },
  {
    reason: '首页不再有 Hugo 的 generator meta',
    normalize: (path, text) => path === 'index.html' ? text.replace(/<meta name="generator"[^>]*>\n?/, '') : text,
  },
  {
    reason: '页面由生成器写出（不再经 Hugo 的模板）：块之间的空白（换行与缩进）不同，行内元素之间只有空白处算一个空格（compare/whitespace.mjs）',
    normalize: (path, text) => path.endsWith('.html') ? normalizeWhitespace(text) : text,
  },
  {
    reason: '别名跳转表与编辑器名称数据中页面的先后：Hugo 的默认顺序把拉丁字母排在汉字之前，生成器用的 ICU 排序相反；只影响重复地址（别名跳转以第一行为准，实际没有）与补全列表的顺序',
    normalize: (path, text) => {
      if (path === 'alias-redirects.txt') return text.split('\n').sort().join('\n');
      if (!/^js\/editor-names\.FINGERPRINT\.json$/.test(path)) return text;
      const names = JSON.parse(text);
      names.entries.sort((x, y) => x.title < y.title ? -1 : x.title > y.title ? 1 : 0);
      return JSON.stringify(names);
    },
  },
  {
    reason: '读音相同的条目（基、迹）在列表中的先后：Hugo 的 sort 对它们不保持顺序，生成器按标题排',
    normalize: (path, text) => text,
  },
];

/** The name a file is compared under: fingerprinted assets under one name each. */
export const allowedPath = path => path.replace(/\.[0-9a-f]{64}\.(css|js|json)$/, '.FINGERPRINT.$1');
