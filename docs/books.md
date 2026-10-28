# 讲义与指南：内容结构和开发说明

用户界面使用“指南”和“讲义”；构建诊断中的“书册”指由 `book.yaml` 管理的一组有序页面。它们与 wiki 共用 Markdown、数学、定理、引用、参考文献、提示、导航、术语及排版实现。没有 `book.yaml` 的普通页面也支持这些语法，但 `@` 标签只在本页共享。

## 发现与文件结构

构建递归扫描 `content/`，跳过根目录的 `wiki`、`missing`、`navboxes`。其他目录中只要存在 `book.yaml`，便成为一组指南或讲义的根目录，不局限于 `help` 或 `books`。根目录下不允许再嵌套另一份 `book.yaml`。

```text
content/books/讲义标题/
├── book.yaml
├── index.md                     # 可省略
├── chapter/
│   ├── index.md                 # 可省略
│   └── section/index.md
└── appendix/index.md
```

每个页面是自己目录中的 `index.md`（叶子也可以写成 `page.md`，但有子页面的节点必须是目录中的 `index.md`）。一个页面之下有其他页面时，它就是这些页面的上级（书、章）；图片等附件放在页面的目录中，有子页面的页面只拥有直接放在自己目录中的文件。根目录和 `contents` 声明的父节点缺少 `index.md` 时，仅在 `.build/content/` 中生成一份无正文的目录页，不修改作者源码。自动页的标题采用目录名；根目录可通过 `book.yaml` 的 `title` 设置标题、`sort` 设置排序读音、`search: false` 将整组排除在搜索之外。根页面 Markdown 中的同名字段优先。

页面不存在、路径有多种匹配、重复引用页面、遗漏页面、配置未知字段和嵌套书册都会使构建失败。缺失叶子页面不会自动创建，以免隐藏路径拼写错误。

## 章节配置

```yaml
title: 代数学讲义
contents:
  - page: preface
    number: false
  - page: groups
    children:
      - page: definition
      - page: groups/homomorphisms
  - page: appendix
    number: A
```

章节只有 `page`、可选 `number` 和可选 `children`；没有 `level`、`weight` 或重复的标题。树的嵌套关系定义层级，列表顺序定义阅读顺序，页面标题取 Markdown 的 `title`。

`page` 有三种写法：

- 只有一个目录名，例如 `definition`：相对于当前父节点目录。
- 多段路径，例如 `groups/homomorphisms`：相对于本组根目录。
- 包含本组根目录的完整内容路径，例如 `books/代数学讲义/groups/homomorphisms`：相对于 `content/`。也可加开头的 `/`。

路径不带 `index.md` 或 `.md` 后缀，不允许 `.`、`..`、反斜杠、查询参数或 fragment。章节树可以与文件目录的层级不同：需要在不同父节点之下引用现有页面时，用完整路径明确指定。

`number: false` 不占用序号；`number: A` 设置本级字母分量；`number: "7"` 设置本级数字并使下一项接续为 8。字母编号不推动数字计数器。自定义编号支持正整数和以字母或汉字开头的单个编号分量。

## 讲义列表

`/books/` 在 `content/books/index.md` 的导言之后，按分组列出各组讲义，每项三行：标题；作者，以及构建生成的页面数（不含首页的可见页面数）与字数；简介。作者和简介来自 `book.yaml` 中的可选字段（指南也可填写，但目前不显示）：

```yaml
authors: [唐珑珂, 李一笑]     # 字符串或字符串列表
description: 2021 年春季学期北京大学凝聚态数学讨论班讲义。
```

`description` 与标题一样只能有一行，可以包含行内公式 `$…$`；公式在列表中由 KaTeX 渲染，在根页面的页面描述中转为文字（例如 `$\infty$` 为 ∞）。根页面 front matter 中的 `description` 优先，但不渲染公式。

字数按中文字处理软件的习惯统计全组可见页面的正文：每个汉字、假名、谚文字符或全角标点算一字，每个西文单词或数字算一字，每个行内公式算一字；代码块（含文献与 TikZ）、行间公式、标签、环境围栏、链接地址和 HTML 标签不计。不足 9500 字时四舍五入到千字（至少 1 千字），否则四舍五入到万字。

分组与顺序写在 `content/books/books.yaml`，按目录名列出讲义；`books` 下的每组讲义须恰好列出一次，否则构建失败。该文件不发布。没有此文件时，所有讲义不分组，按标题排序。

```yaml
groups:
  - title: 课程讲义
    books: [数学分析, 线性代数]
  - title: 专题讲义
    books: [示性类]
```

## 编号参数

编号的设置是 bananamark 的 `numbering`（README 的 [Numbering](../packages/bananamark/README.md#numbering)，英文），其中的 `pages`（页面是否编号）由站点按章节树处理。所有参数可省略。整组默认等价于：

```yaml
numbering:
  pages: true
  headings:
    depth: 1
    prefix: true
    removeZeroes: true
  theorems:
    depth: 1
    prefix: true
    removeZeroes: true
  equations:
    depth: 1
    prefix: true
    removeZeroes: true
```

页面的 front matter 可通过 `numbering` 覆盖整组默认值，仅影响当前页；章节节点上的显式 `number` 优先于 `pages`。一般不编号的指南可使用：

```yaml
numbering:
  pages: false
  headings: false
```

所有定理类环境共用一个计数器，公式使用另一个计数器；不编号的 `theorem*` 等环境不占序号。编号结构包含页面编号向量、页面内标题向量以及对象的最后一个序号。

### 标题

`headings.depth` 从正文 `##` 开始计数，默认 1，因此默认只编号二级标题。2 会同时编号 `##` 和 `###`，最多支持 5（至 `######`）。`headings: false` 或 `depth: 0` 关闭标题编号。

页面 2.3 内的 `##` 编号为 2.3.1，其 `###` 在启用深度 2 时编号为 2.3.1.1。标题编号不写入自动 HTML ID，改编号不会改变标题锚点。本页目录默认显示 `##`、`###`，可在 front matter 中用 `tocDepth: 3` 扩大至 `####`；取值为 0 至 5，独立于编号深度。

正文中的第一层编号标题与章节树的直属子页面共用一个序列，正文在先，子页面在后。例如第 2 章已有正文节 2.1，它的第一个子页面将编号为 2.2。显式章节编号不得与正文节编号冲突。父页面通常适合只写导言，或者使用不编号的小标题。

仍支持现有星号语法，并可自定义本级编号：

```markdown
## 阅读建议* {@sec:reading}

## 补充 {@sec:extra number="A"}

## 接续 {@sec:later number="7"}
```

星号标题不改变当前编号范围，不重置定理或公式计数器。星号与显式 `number` 不能同时设置。显式编号的标题必须处于 `headings.depth` 覆盖的层级内；完全关闭标题编号时，不应填写 `number`。

### 定理与公式

`depth` 和 `absoluteDepth` 互斥，数字都不包含最后的对象序号：

| 设置 | 在页面 2.3 内的行为 |
| --- | --- |
| `depth: 0` | 2.3.1、2.3.2，整页连续 |
| `depth: 1` | 第一节内 2.3.1.1、2.3.1.2；第二节从 2.3.2.1 开始 |
| `depth: 2` | 再加入一个小节分量，例如 2.3.1.2.1 |
| `absoluteDepth: 1` | 2.1、2.2……，所有页面前缀以 2 开头的页面共同连续计数 |
| `absoluteDepth: 2` | 2.3.1、2.3.2……，按前两个结构分量分组连续计数 |
| `absoluteDepth: 0` | 全组连续整数编号 |

相对 `depth` 的计数范围包含源页面身份，跨到另一页会使用该页的计数范围；绝对深度的计数范围只由选中的完整编号前缀决定，可以跨页面连续。阅读顺序为当前页面的正文，再递归读取子页面。

缺失的编号层级用 0 填充。例如页面 2.3 在首个节之前的定理原始编号为 2.3.0.1。`removeZeroes` 默认打开，因此显示为 2.3.1。关闭后保留全部 0。0 只在显示时移除，内部计数范围仍保留完整结构，避免将导言与实际节混在一起。

`prefix: true` 保留页面编号；`false` 在相对深度模式省略页面编号；字符串（例如 `prefix: T`）替换页面编号。绝对深度模式已经包含页面分量：`true` 保留选定分量，`false` 只显示对象序号，字符串则加在选定分量之前。显示方式不会改变内部计数范围。

## 标签与引用

front matter 后、正文开始前，可以写一行页面标签：

```markdown
---
title: 群与同态
---

{@sec:groups}

正文……
```

只有正文开头的独立标签行是页面声明；其他位置的 `{@…}` 是引用。该标签指向生成的主标题 `#page-title`。所有正文页面（百科、指南、讲义）的主标题都使用此 ID，它保留给模板；正文对象不能使用它，重名标题的自动锚点会加后缀。

默认引用文字仅为数字，如 `1` 或 `1.2`。可以在 `book.yaml` 设置统一格式：

```yaml
referenceFormat: '§{number}'
```

也可以显式指定结构深度，得到“第 1 章”“第 1.2 节”等引用文字：

```yaml
referenceFormat:
  1: '第 {number} 章'
  2: '第 {number} 节'
  3: '第 {number} 小节'
  default: '{number}'
```

键是正整数层级；`default` 可省略，未指定层级默认只显示数字。根目录下页面为第 1 层，其子页面为第 2 层；正文标题继续增加层级。格式只影响页面和标题的 `@` 引用，不改变目录、页面标题、定理或公式的编号。

也兼容按结构深度排列的列表：

```yaml
referenceFormat:
  - '第 {number} 章'
  - '第 {number} 节'
  - '第 {number} 小节'
```

列表第一项对应根目录下第一层页面，第二项对应第二层，以此类推；页面内的标题继续增加深度。超出列表的层级回退到 `{number}`。格式按普通文字处理，不展开 HTML 或 Markdown。无编号的页面/标题使用其标题文字。`[自定义文字](@标签)` 始终可以覆盖显示文字。

正文标签、页面标签、定理、公式、列表项目与文献 key 在整组页面内必须唯一；允许前向引用和跨页面引用。不同组、不同 wiki 条目之间可以重用标签。标题引用显示文字中的循环也会跨页检查。

同页引用生成 fragment，跨页引用在渲染时通过源页面身份查找实际地址，兼容 `slug`、`url` 和站点子路径。`[[…]]` 始终查询 wiki 名称索引；`[[页面@标签]]` 仍是保留语法，跨组引用请使用普通 Markdown 链接。

文献只需声明一次，在任何同组页面中都可引用。可以集中到参考文献页，也可以分散声明。全组按阅读顺序统一分配作者年份和自定义 label 的消歧后缀；文献实际列表仍保留在原声明位置。

## 页面与导航

- 1320px 及以上左侧显示全组目录，以根页面标题为目录标题；右侧正文目录仍叫“目录”。1100–1319px 只保留右侧目录；低于 1100px 时两侧目录均收起，正文目录使用页内/导航栏入口。百科等普通页面同样从 1100px 起在右侧显示正文目录。
- 非根页面的主导航栏包含章节面包屑；低于 1320px 时左侧显示侧栏图标，展开章节目录。760px 及以下使用全屏侧栏。根页面省略这行副导航。
- 当前页面及其祖先在章节树中自动展开；其他节点使用原生 `details` 折叠，V 形图标旋转表示展开状态，减少动态效果偏好会关闭动画。无 JavaScript 仍可打开目录。章节目录与本页目录共用目录树样式，同级编号和标题通过 CSS subgrid 分别对齐，并按首行 baseline 对齐，无编号的标题从编号列起始；不支持 subgrid 时退化为行首对齐，展开图标始终位于行首左侧。
- 两侧目录的当前项使用蓝色文字和左侧蓝色竖线。本页目录的子节默认展开，V 形控制可以独立折叠；阅读进入子节后会自动展开当前项的祖先，滚动高亮不变时保留手动折叠状态。页内目录和导航浮层共用这棵树，折叠状态随目录移动保留。
- 两侧栏的目录标题与第一级条目行首对齐；宽屏左栏的行首与主导航左端对齐，展开图标及高亮竖线放在其左侧的预留空间内。
- 网站页脚与文章页脚沿正文左端对齐，包含只显示右栏的中间宽度和同时显示双侧栏的宽屏布局。
- 没有显示左栏时，正文和网站页脚在所有宽度下都与主导航左端对齐；wiki、分类、普通页面及书册首页共用这一规则，手机端使用与导航相同的左右留白。
- 手机侧栏启用时锁定背景滚动和背景焦点，支持 Escape、焦点循环以及关闭后恢复焦点；切换到其他目录或搜索时关闭。
- 根页面的自动目录标题为“目录”，显示全组章节树并省略重复的左栏；设置 `childrenToc: false` 关闭自动目录后恢复宽屏左栏。根页面始终省略副导航及其侧栏按钮。父页面在正文末尾显示默认两层子目录，可设置 `childrenToc: {depth: 3}` 或 `childrenToc: false`。
- `toc: false` 只影响右侧/页内正文目录；自动章节目录不占正文标题编号，也不进入本页目录。
- 前后篇按章节树深度优先顺序排列，包含首页和章介绍页。

`/books/` 只列出 `books` 目录下的各组讲义首页（见下文“讲义列表”）。其他路径的指南不会混入讲义列表。全部条目与分类只包含 wiki，其他页面填写 `categories` 会报错；`aliases` 仍只用于 wiki 的名称别名。

## 发布与修改时间

`npm run build -- --buildDrafts` 等参数通过 `scripts/build.mjs` 同时传给预处理与站点生成器；开发预览也使用同一组参数。支持 `--buildDrafts`、`--buildFuture`、`--buildExpired`。未发布的父节点会隐藏整个分支，其目标不会注册到引用表；引用隐藏目标会报错。编号、目录和前后篇按当前构建可见的内容计算。

普通页面与 wiki 的最后修改日期仍取自身 Markdown 的最后一次 Git 提交者日期。指南和讲义的目录、编号、引用与文献消歧共享依赖，因此组内所有页面（包含自动生成的目录页）统一使用以下日期的最大值：

1. `book.yaml` 最近提交的提交者日期；
2. 所有声明页面最近提交的提交者日期；
3. 整组源目录最近一次提交的提交者日期，包括附件、删除和重命名。

第三项查询目录历史，避免被删除的文件已经不在当前扫描结果中，从而漏掉结构或资源变动。已有的手写目录页（有子页面的 `index.md`）也作为声明页面参与。尚未提交的编辑不影响日期；没有相关 Git 历史时不显示修改时间，绝不使用构建时间或文件 mtime。日期查询在单次构建中缓存。

## 实现边界与开发入口

- `scripts/prebuild/collections.mjs`：发现、路径解析、章节树、可见性、自动页、共享依赖日期和导航元数据。
- `packages/bananamark/src/syntax/numbering.mjs`：配置合并与验证、编号向量、零的显示处理及共享计数器。
- `packages/bananamark/src/syntax/structure.mjs`：共同 Markdown 结构扫描；`prepareOnly` 返回延迟渲染函数。
- `scripts/prebuild.mjs`：先加载所有内容，再扫描整组标签与文献，最后统一渲染；源文件不被改写。
- `scripts/site/templates/collections.mjs`、`assets/scss/_collections.scss`、`static/js/collections.js`：目录、面包屑、响应式侧栏及键盘交互。
- `assets/scss/_directory-tree.scss`：左右目录共用的网格、基线、折叠图标与高亮竖线；`scripts/site/templates/page.mjs` 和 `static/js/site.js` 负责本页目录结构与阅读位置展开。
- `scripts/build.mjs`：完整构建入口。
- `tests/collections.mjs`：整组构建、普通页面、跨页目标/文献、编号、发布、侧栏、配置错误及真实 Git 历史测试。

`collectionRoot`、`collectionContents`、`collectionChildren`、`collectionNumber`、`collectionAncestors`、`collectionPrevious`、`collectionNext`、`structuredPage` 等元数据由构建生成，不应手写。完整扫描和引用解析成功后，才通过已有的发布流程同步 `.build/content/`；开发预览只在所有构建阶段成功后更新浏览器快照。

验证：

```sh
node tests/collections.mjs
npm test
npm run build
npm run serve -- --port 1414
```

测试讲义为 `tests/fixtures/content/books/线性代数拾遗/`，刻意省略根 `index.md`，展示自动首页、父章节、跨页前向引用、默认零省略以及附录字母编号。`content/help/` 是写给编辑者的写作指南（风格指引与格式），也是一组不编号的指南。
