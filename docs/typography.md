# 中文排版

中西文间距、括号与标点旁的空白、句号的转换等规则由 bananamark 实现（README 的 [Typography](../packages/bananamark/README.md#typography)，英文；示例在 `packages/bananamark/test/spec/14-typography.md`；规则在 `packages/bananamark/src/syntax/typography.mjs`，在 HTML 上的应用在 `src/typography.mjs`）。写给编辑者的说明在帮助“正文排版”。本文写站点的设置、模板中的文字、字体，以及在浏览器中做的一件事。

## 站点的设置

- `scripts/shared/typography.mjs`：句号转换（`convertFullStop`，`。` 写成 `．`）与引号旁的空格（`spaceQuotes`：本站的弯引号 `‘’“”` 是 Inter 的西文字形，与汉字之间补空格）都打开；bananamark 默认两者都不开。
- 页面可以在 front matter 中只关闭句号转换（其他规则照常）：

  ```yaml
  typography:
    convertChineseFullStop: false
  ```

  渲染器按页面的设置排版（`pageTypography`）；模板在 `<html>` 上写 `data-typography-full-stop="off"`，模板中的文字也不转换。
- 整篇外文页面设 `lang: en` 或 `lang: ko`；外文片段用 `<lang>` 标签。韩文区域用浏览器的 `text-autospace: normal`，不增删空格。
- 用 CSS 留出间距的分隔元素标 `data-typography="boundary"`，排版不跨过它补空格：术语翻译的分隔点与语言名、人名标注的标签（`scripts/site/templates/page.mjs`、`scripts/shared/tags.mjs`）。

## 模板中的文字

正文与 front matter 中的文字（导航框、目录中的标题）在渲染时由 bananamark 排好。模板中其余的文字（文章的主标题、分类、面包屑等）在站点生成器完成页面时排版（`scripts/site/finish.mjs` 的 `finishPage`，bananamark 的 `typesetTree`）：已排好的正文标为 `data-typeset-body`，跳过不再处理（编辑器的预览除外：正文带着源码行号标记，见 [预览](preview.md)）。公式的 KaTeX HTML 先取出，排好后放回。

名称的匹配（条目名、别名、分类、标题锚点）也按同样的空白规则读取，所以 `[[维数(向量空间)]]`、`[[维数 (向量空间)]]`、`[[维数（向量空间）]]` 是同一个条目，显示保留作者写的括号（见 [页面的写法](syntax.md#名称别名与地址)）。

## 字体

- 标点字体 `Banana Punctuation`：普通字重 `static/fonts/BananaPunctuation-Regular.woff2`，500 与 600 为 `-Medium`、`-SemiBold`。字符范围在 `_base.scss` 的 `@font-face` 中声明，只有中文标点与弯引号 `‘’“”`，不含 ASCII 句点、逗号与数学符号。
- 字体用 `kern` 收紧相邻的标点（如 `），`）；正文设 `font-kerning: normal`，因为 Firefox 的 `auto` 对 CJK 文字不做 kerning。`scripts/fonts/banana-punctuation.py` 给字体加上 `halt`（标点的半宽）与 `chws`（与 `kern` 共用同一个查找表）：中文正文设 `text-spacing-trim: trim-start`，Chromium 据此把行首的开括号压成半宽，并在字体切换处（如加粗的边界 `**文）**（`）收紧括号；同一字体内的相邻标点仍由 `kern` 处理，不会重复收紧。Chromium 把 `、。，．` 视作一组，要求它们宽度相同且字形不超过半宽，本字体不满足，所以字体切换处的逗号、句号（如 `**（文）**，`）不收紧。Firefox 不支持 `text-spacing-trim`。代码块恢复 `text-spacing-trim: normal`。
- 代码字体为 Commit Mono。它没有西里尔字母，希腊字母也不全；缺少的字母用 JetBrains Mono 的子集 `JetBrains Mono Cyrillic`（普通代码用字重 350 的固定字重文件 `-350`，与 Commit Mono 的粗细相近；粗体用可变字重文件 `-Variable`；`static/fonts/JetBrainsMono-Cyrillic*.woff2`，由 `scripts/fonts/jetbrains-mono-cyrillic.py` 生成，OFL）。两者字宽同为 600/1000，代码对齐不变；只有代码中出现这些字母的页面才下载它。
- KaTeX 缺少的几个字形（𝟙、镜像字母 ꓘ ꓷ）由 BananaMath 补足（`assets/scss/_katex.scss`）。

## 公式、图标之后的标点

行内公式、行内的 TikZ 图与外部链接的图标之后紧接的收尾标点（`，。．；：！？、` 与右括号、右引号等）不与它们分在两行：

- 行内公式：由 bananamark 在渲染时处理（README 的 [KaTeX](../packages/bananamark/README.md#katex)）。KaTeX 把公式排成几个 inline-block（`.katex-base`），在关系符与运算符之后可以断行；bananamark 把最后一个盒子与标点放进 `span.bm-math-end`（紧接公式的连字符也是，如 `$A$-模`、`$p$-adic`：在连字符之后断行，而不是之前）（站点的样式在 `assets/scss/_katex.scss`：`inline-block`、`nowrap`），公式内部照常断行，标点在外面文字的字体中，读屏软件与复制都照常。搜索文档把其中的标点当作公式之后的文字（`scripts/search/document.mjs`）。
- TikZ 图与外部链接：浏览器中的 `static/js/inline-punctuation.js` 把它们与标点放进一个 `white-space: nowrap` 的组，链接的文字在组内仍可断行（最后一个词与图标在一起）。

公式不能用后一种做法：按 CSS 的规定，两个盒子之间能否断行由它们最近的共同祖先的 `white-space` 决定，所以在 nowrap 的组中恢复公式内的 `white-space: normal`，应当既能保留公式内的断行，又能挡住公式与标点之间的断行。但只有 Safari 这样做；Chromium 与 Firefox 仍在公式的最后一个盒子与标点之间断行（2026-10-27 在 Chromium 152、Firefox 158 与 macOS 的 WebKit 中逐像素改变宽度验证；在标点之前加 U+2060 也无效）。TikZ 图与链接图标的情形三者都不断开，因为挡住断行的是盒子所在的 nowrap 元素本身。测试：bananamark 的 `test/render.mjs` 与 spec 的 `02-formulas.md`，站点的 `tests/inline-punctuation.mjs`。
