# 页面的写法

页面的正文是 bananamark 的方言：CommonMark 加上公式、自动编号的节与定理类环境、统一的引用、标签列表、参考文献、百科链接与 TikZ 图形。方言的完整说明在 bananamark 的 [README](../packages/bananamark/README.md)（英文；[Syntax](../packages/bananamark/README.md#syntax) 一览，[Reference](../packages/bananamark/README.md#reference) 逐项说明），逐个功能的示例与输出在 `packages/bananamark/test/spec/`（它们也是方言的规范与测试）。写给编辑者的说明在网站的帮助（`content/help/格式手册/`）；修改语法时请同时更新帮助。

本文只写站点自己的部分：站点怎样设置方言、站点加上的写法（页面信息、名称与别名、读音、页面提示、人名、学科导航、术语翻译），以及站点回答 bananamark 的问题的方式（钩子）。指南与讲义的文件结构、整组的编号与引用见 [指南与讲义](books.md)，分类见 [分类](categories.md)，TikZ 见 [TikZ 图形](tikz.md)，排版见 [中文排版](typography.md)。完整的实例见 [奇异上同调](../tests/fixtures/content/wiki/奇异上同调/index.md) 与 [组件示例](../tests/fixtures/content/wiki/components-example/index.md)。

## 站点的方言

站点对 bananamark 的设置集中在 `scripts/shared/syntax.mjs` 的 `siteDialect`（bananamark 的 `defineDialect`），预处理、渲染器与浏览器中编辑器的检查都用它；错误为中文（`locale: 'zh-cn'`），页面中 bananamark 写出的文字（引用文字、环境名称、参考文献中的词）随页面的语言。

| 设置 | 站点的取值 |
| --- | --- |
| `wikiLinks`、`bibliography`、`tikz` | 都打开 |
| `environments` | `data/theorems.yaml` 中的环境，只有这些（bananamark 其余的默认环境去掉，`scripts/shared/environments.mjs`），见下表 |
| `dataBlocks` | ```` ```terms ````（[术语翻译](#术语翻译)，`scripts/shared/terms.mjs`） |
| `tags` | bananamark 的 `<lang>`、`<align>`、`<spoiler>`，以及站点的页面提示、`<see>`、`<person>`（`scripts/shared/tags.mjs`；给编辑器的规则在 `scripts/shared/syntax-rules.mjs`） |
| `messages` | 站点标签的文字，以及一级标题的错误的说法（百科条目的标题写在 front matter 中） |
| `codeLanguages` | `terms` 按 YAML 高亮（`scripts/shared/dialect.mjs`）；渲染时另加 `bananamark/languages` 的约 35 种语言 |
| `rewriteMath` | `\mathbb{1}` 写成 𝟙，没有双线字形的大写希腊字母（`\mathbb{\Delta}` 等）写成粗体（`scripts/shared/math.mjs`） |
| `typography` | 句号转换与引号旁的空格都打开（`scripts/shared/typography.mjs`，见 [中文排版](typography.md)） |
| `allowH1` | 百科条目中为否：`# 标题` 与 Setext 一级标题报错；首页等其他页面可以使用 |

KaTeX 的 `trust` 不打开，所以不能使用 `\htmlStyle`、`\href` 等扩展命令。几个特殊字形由站点的字体给出：`\mathbb{1}` 显示为 𝟙（交换图中也是），镜像字母 `ꓘ`（U+A4D8）、`ꓷ`（U+A4F7）显示为左右翻转的 K、D（如 `\mathrm{ꓘꓷ}` 是镜像的 DK），由 KaTeX_Main 改成的 BananaMath 补足（`assets/scss/_katex.scss`；TikZ 中见 [TikZ 图形](tikz.md)）。

### 定理类环境

环境在 `data/theorems.yaml` 中配置：每项的 `name`（显示名称，可按语言写成 `zh-cn`、`en`；页面 `lang: en` 时用英文）、`group`（颜色组）与可选的 `numbered`（默认 `true`）。站点的环境与颜色（`assets/scss/_theorems.scss`；四组只有左边框，标题用对应的颜色，证明没有边框）：

| 类型 | 显示名称 | 颜色组 | 颜色 |
| --- | --- | --- | --- |
| `definition` | 定义 | `definition` | 橙色 |
| `theorem`、`lemma`、`proposition`、`corollary`、`conjecture` | 定理、引理、命题、推论、猜想 | `theorem` | 蓝色 |
| `example`、`exercise` | 例、习题 | `example` | 紫色 |
| `remark` | 注 | `remark` | 绿色 |
| `notation` | 记号 | `definition` | 橙色 |
| `convention` | 约定（不编号） | `remark` | 绿色 |
| `proof` | 证明 | — | 无边框 |

环境的写法（标题、自定的名称、`*`、嵌套、证明）见 bananamark 的 README。

## 源文件的格式

源文件的排版由 `npm run format` 统一（`scripts/format/markdown.mjs`；`npm run format -- --check` 只检查，`tests/format.mjs` 要求 `content/` 已排版）。它只改换行与缩进，不改变构建出的页面：导言区与正文之间空一行；行间公式（`\[ … \]`、`$$ … $$`）的分隔符各占一行，公式各行与开始的那一行同样缩进（公式内部的相对缩进保留，紧挨分隔符的强调标记 `*` 留在分隔符旁）；段落的行不超过 100 列（中日韩字符算 2 列），依次优先在“。”之后、“，、；：”之后、文字与公式之间（已有空格，或与汉字相邻、排版会加空格之处）、`<person />` 之前断行，续行保持所在列表项、引用或脚注的缩进。不在这些地方断行：链接、公式、代码、标签之内，强调标记旁没有空格之处，会成为新块（列表、引用、标题等）的行首，行末反斜杠（硬换行）之后，标点之后紧接代码或图片之处（排版不会去掉那里的空白）。标题、表格、环境围栏、代码、注释和导言区不变；无法断到 100 列以内的行尽量短。预处理把行间公式的 TeX 去掉各行行首空白与首尾空白后再渲染，所以排版不改变 `data-tex` 与 TikZ 缓存。

缩进以 2 个空格为单位（与 YAML 和编辑器的 Tab 一致）。`npm run format` 统一列表：无序列表用 `-`，标记后一个空格，列表项的续行与项目的文字对齐（更深的缩进保留多出的部分，代码保留自己的缩进）（`- ` 之后 2 格，`1. ` 之后 3 格，`10. ` 之后 4 格，`(a) ` 之后 4 格，标签列表最多 14 格），嵌套列表写在上一层项目的文字处；公式内部的缩进每层 2 格。脚注的续行仍缩进 4 格。续行的缩进与编辑器的回车共用 `packages/bananamark/src/syntax/scan.mjs` 的 `continuation`。

## 页面信息

```yaml
---
title: 奇异上同调
categories: [代数拓扑]
---
```

| 字段 | 用途 |
| --- | --- |
| `title` | 页面标题（可含行内公式，见下文）；完整构建中缺少时取目录名，在线编辑要求填写 |
| `aliases` | 百科条目的别名（见下文） |
| `categories` | 百科条目直接归属的分类，预处理补齐祖先分类（`data/categories.yaml`，见 [分类](categories.md)）；只用于百科条目 |
| `navboxes` | [学科导航](#学科导航) |
| `sort` | [排序读音](#排序读音) |
| `lang` | 页面的语言（`en`、`ko` 等）：bananamark 写出的文字、排版与环境名称随之改变 |
| `typography` | `convertChineseFullStop: false` 只关闭句号转换 |
| `toc`、`tocDepth` | `toc: false` 关闭本页目录；`tocDepth` 为目录显示的标题层数（从二级标题起，默认 2，0 至 5）。少于两个目录项的页面不显示目录 |
| `search` | 只能写 `false`：页面不进入站内搜索（见 [搜索](#搜索)） |
| `numbering` | 指南与讲义中的编号设置（见 [指南与讲义](books.md)） |
| `description` | 页面的描述（`og:description`），默认取正文的开头（不含页面提示） |
| `url`、`slug` | 页面的地址（见下文） |

在线编辑只接受这些字段中作者使用的部分（`scripts/prebuild/front-matter-rules.mjs` 的 `authorKeys`）；完整构建不检查未知字段，但以下写法报错：手写的 `lastmod` 或 `gitLastmod`（修改时间取源文件最近一次 Git 提交的提交者日期，尚未提交的页面不显示修改时间）、旧的 `notices`（见 [页面提示](#页面提示)）、旧的 `urlAliases`。正文中图片地址里旧的 `?width=` 也报错（宽度写成图片之后的 `{width=…}`）。

## 名称、别名与地址

百科主标题与分类名称可以有普通文字和 `$…$`、`\(…\)` 行内公式，不展开其他 Markdown、链接或引用；独立公式、多行名称和未闭合的公式分隔符报错。文章标题、列表、分类卡片、祖先导航和分类页脚保留公式的显示，不自动大写；浏览器标签、分享标题和名称索引用纯文本名称，列表按 [读音](#排序读音) 排序。讲义和指南中除首页外的页面，浏览器标签写作“页面标题 - 书册标题 - 香蕉空间”。标题与正文中的公式都在构建时渲染，关闭 JavaScript 也能显示。

在百科条目的 `aliases` 中声明别名：

```yaml
title: '$\infty$-范畴'
aliases:
  - 无穷范畴
  - 无穷大范畴
categories:
  - '$p$ 进几何'
```

主标题和别名都按下文的规则、Unicode NFC 与首尾空白处理后匹配。同一条目内重复的名称自动去重；不同条目之间的主标题或别名冲突使构建失败，错误列出名称与两个源文件。改名后可将旧标题加入 `aliases`。

### 名称中的公式

标题、别名、分类名称和百科链接的目标中的公式，由 KaTeX 渲染为 MathML 后转成线性文字（bananamark 的 `math-name.mjs`，站点的名称处理在 `scripts/shared/names.mjs`）。同一个名称有两种形式：

| 用途 | 规则 | `$H^1(X;\mathbb Z)$ 的计算` |
| --- | --- | --- |
| 显示：浏览器标签、分享标题、书册标题、缺失条目的名称 | 线性文字，`\mathbb` 的常用字母（ℂ ℍ ℕ ℙ ℚ ℝ ℤ）写作对应字符 | `H^1(X; ℤ) 的计算` |
| 匹配：条目名与别名、链接目标、分类、标题锚点 | 显示形式再做 Unicode NFKC（ℤ 与 Z 相同），去掉公式内部的空白 | `H^1(X;Z) 的计算` |

上下标保留为 `^`、`_`，所以 `$L^p$` 和 `$L_p$` 是两个名称。等价写法得到相同的结果：`\mathbb Z` 与 `\mathbb{Z}`，`\operatorname{Hom}`、`\mathrm{Hom}` 与 `\text{Hom}`，`a_{2}` 与 `a_2`，以及公式内多写或少写的空格。直立字母的标准写法是 `\mathrm{…}`。简单情形下，链接也可直接写成匹配形式的纯文本，例如 `[[a_2 的性质]]` 链接到标题为 `$a_2$ 的性质` 的条目。名称中的 TeX 有误时，预处理报错并给出公式。

### 匹配的规则

名称与链接的目标按相同的规则读取：

- 空白按排版规则处理，括号不区分全角与半角：`[[维数(向量空间)]]`、`[[维数 (向量空间)]]`、`[[维数（向量空间）]]` 都能匹配同一个条目，不必另设别名；显示保留作者写的括号。
- 与正文一样做排版替换：`--` 为 `–`，`---` 为 `—`，`...` 为 `…`，直引号与弯引号相同。所以 `[[Auslander--Buchsbaum 公式]]` 链接到 `Auslander–Buchsbaum 公式`，`[[Guillaume de l'Hôpital]]` 与 `[[Guillaume de l’Hôpital]]` 相同；`title: l'Hôpital 法则` 显示为 l’Hôpital 法则（公式与日语标题除外）。分类名称、`book.yaml` 的 `title` 以及取自目录名的标题不做替换。连字符 `-` 与连接号 `–` 仍是不同的字符，需要时另设别名。
- 区分大小写。

### 链接与地址

- `[[无穷范畴]]` 直接链接到目标页，通过别名时地址带 `?from=无穷范畴`，目标页显示“跳转自：无穷范畴”（只在来源确是它的别名时；关闭 JavaScript 时不显示）。没有参与当前构建的草稿或未来发布的条目，其主标题与别名都视为缺失。别名不另外生成页面或列表项，旧网址不重定向；`aliases` 只用于百科条目的名称。
- 缺失的条目显示为红色链接，指向 `/missing/?title=<链接的文字>`（目标含公式时另带 `source=<写下的目标>`），那里有“创建条目”的链接。
- 百科条目和讲义页面的网址默认取目录路径，保留大小写和标点，空格改为下划线：`content/wiki/Riemann ζ 函数/` 的网址是 `/wiki/Riemann_ζ_函数/`；目录名中代替 `*` 的全角 `＊` 在网址中还原为 `*`。页面设置了 `url` 或 `slug` 时以其为准，它们必须是站内地址：不含空白、引号、尖括号、`\`、`?`、`#`、`.`/`..` 段或 `//`。其他页面的网址取路径的小写，空格改为连字符。

## 排序读音

条目、分类、讲义和指南页面都有一个读音，用于列表排序、按字母分组，以及搜索中的拼音匹配。读音默认由标题自动生成：汉字按词语转换为不带声调的拼音，西文去掉变音符号后转为小写，希腊字母与 KaTeX 的希伯来字母（ℵ ℶ ℷ ℸ）写作字母名，其余符号忽略（`scripts/prebuild/reading.mjs`）。例如：

| 标题 | 自动读音 |
| --- | --- |
| 奇异上同调 | `qi yi shang tong diao` |
| Künneth 公式 | `kunneth gong shi` |
| `$\infty$`-范畴 | `infinity fan chou` |
| `$E_8$` 格 | `e8 ge` |

自动读音不合适时，在 front matter 中用 `sort` 指定完整读音：

```yaml
title: Jean-Pierre Serre
sort: serre jean pierre
```

读音由小写字母和数字组成的词构成，词之间用一个空格分隔，不标声调；`ü` 写作 `v`（如 `lv`），也接受 `ü` 和 `u:`。大小写和多余空白会被规范化，其他字符报错。列表按首字母分组：标题以数字或符号（如 `2-范畴`、`$\infty$-范畴`）开头的条目归入 `#` 组并排在最前，其余按读音首字母归组；同一字母内西文开头的标题在前、汉字开头的在后，再按读音排序，读音相同时按标题排序。西文人名按姓氏排序时需要手动指定，多音字通常不需要：

- 常见多音字由拼音库按词语判断，例如“调和”读 `tiao he`，“同调”读 `tong diao`。
- 拼音库读错的数学词语统一写进 `data/readings.yaml`，对所有标题生效，例如 `重数: chong shu` 也作用于“代数重数”。词表的键只含汉字，读音为每个字一个音节。

搜索同时收录手动读音、自动读音和别名的读音，以及它们连写和取首字母的形式，所以 `qi yi shang`、`qiyishang`、`qystd` 都能找到“奇异上同调”。分类在 `data/categories.yaml` 中用同名字段指定读音，讲义和指南的根页面也可在 `book.yaml` 中设置 `sort`。

## 搜索

所有条目、讲义、指南页面和分类页默认进入站内搜索。front matter 中设 `search: false` 的页面不进入搜索，仍出现在列表、分类和导航中；讲义或指南的根页面（或 `book.yaml`）设置后，整组页面都不进入搜索。实现见 [搜索](search.md)。

## 页面提示

页面顶部的提示框是站点的三个成对标签（`scripts/shared/tags.mjs`），写在正文开头：

```markdown
<problems>
- 第 2 节的命题缺少证明。
- @prop:main 的证明不完整。
</problems>

<disambiguation>
本条目介绍的是代数拓扑中的上同调。关于层的上同调，请参见[[层上同调]]。
</disambiguation>
```

| 标签 | 显示 |
| --- | --- |
| `<problems>` | 警告样式（`notice-warning`，问题图标）：“本条目存在以下问题：”（百科条目以外的页面中为“本页面”）及其中的内容 |
| `<disambiguation>` | 消歧义与区分（`notice-info`，分支箭头图标）：其中的文字 |
| `<tip>` | 其他提示（`notice-info`，信息图标）：其中的文字 |

其中的内容是页面的正文：公式、百科链接、`@` 引用都可以使用，错误报在源文件的行列上。内容为空时报错。`<problems>` 也可以写在它涉及的一节中。提示框写成 `<aside class="notice …">`（样式在 `assets/scss/_notice.scss`），不进入页面的描述（`og:description`）与搜索文档。front matter 中旧的 `notices` 字段报错。

## 参见

节首可用 `<see>` 指向相关条目，显示为“参见：……”：

```markdown
<see>[[Galois 理论]]、[[Galois 上同调]]</see>
```

内容为行内 Markdown，不接受参数。

## 人名标注

首次出现时在姓名之后写 `<person … />`，后文可直接写姓名：

```markdown
这一结果由中文姓名 <person original="原文姓名" lang="ru" translit="拉丁转写" ipa="/…/" years="1900--1980" /> 证明。
```

标签只输出姓名之后的注释，姓名本身照常书写（可以加粗），两者之间的空格由排版去掉（标签的 `attachToPrevious`）。`original`、`lang`、`translit`、`ipa`、`years` 都可省略，但至少要有 `original`、`translit`、`ipa`、`years` 之一。`lang` 标记原文姓名的语言。`years` 按行内 Markdown 渲染（`--` 成为短横线）。IPA 保留作者写的 `/…/` 或 `[…]`。输出“中文姓名（俄语 原文姓名，拉丁转写 *拉丁转写*，IPA /…/，1900–1980）”，省略未填写的部分；最前面的语言名称取自 `lang`（名称表在 `data/language_names.yaml`，与术语翻译一致），“俄语”“拉丁转写”“IPA”等标注字号较小，转写用斜体。日语原名可用与术语翻译相同的注音写法，如 `original="[米田]<よねだ> [信夫]<のぶお>"`、`original="米<よね>田<だ>"`，显示为 ruby。字段按普通文字输出，不展开 Markdown、公式或百科链接。

## 学科导航

百科条目的 front matter 可声明底部的导航：

```yaml
navboxes: [代数拓扑]
```

多个导航按声明顺序显示，位于正文之后、术语翻译、分类与最后修改时间之前，不参与目录、节号、定理编号或页内引用。

导航在 `content/navboxes/名称.yaml` 中维护。这个目录由预处理单独读取（`scripts/prebuild/components.mjs`），不复制到 `.build/content/`，也不生成页面；只有源内容根目录下的这个目录有此用途，页面包里的同名目录仍按原样复制。例如：

```yaml
title: [[代数拓扑]]
groups:
  - title: 同调论
    subgroups:
      - title: 同调
        items:
          - [[奇异同调]]
          - [[胞腔同调]]
      - title: 上同调
        items:
          - [[奇异上同调]]
          - [[de Rham 上同调]]
  - title: 同伦论
    items:
      - [[基本群]]
      - [[同伦群]]
```

每个分组填写 `title`，并在 `items` 与 `subgroups` 中选择一个非空列表。分组最多四层。程序按树计算 `rowspan` 和 `colspan`，输出 HTML 导航表。标题与项目支持行内 Markdown、百科链接和公式，按页面的正文转换。项目用淡色细竖线分隔，允许换行。默认展开，文件顶层设置 `collapsed: true` 可默认收起；标题栏右侧的“展开／收起”切换，无需 JavaScript。直接指向当前条目的链接显示为黑色加粗文字，保留自定义的显示文字和公式。

标题、分组标题和项目允许整项裸写 `[[条目]]` 或 `[[条目|文字]]`：程序读取 YAML 节点保留的源文字（`scripts/shared/yaml.mjs`），仅识别整项的百科链接。与其他文字混排时仍写成字符串，如 `"参见 [[基本群]]"`；名称或公式含有使 YAML 无法解析的字符时也应加引号，TeX 建议用单引号，如 `'[[基本群|$\pi_1$]]'`。

## 术语翻译

在百科正文任意位置使用 `terms` 数据块（站点给 bananamark 的数据块，读取在 `scripts/shared/terms.mjs`），声明一项或多项术语的译名。构建时按声明顺序汇总所有数据块，显示在全部学科导航下方、分类与最后修改时间之前；没有导航时显示在正文末尾。每个术语是一段文字，标题与各语言译名接在同一行，窄屏自然换行。不同语言之间用圆点分隔，同一语言的多个译名用顿号分隔：

````markdown
```terms
群:
  en: group
  ja: 群<ぐん>
  fr: groupe :m
  de: Gruppe :f
位相空间:
  en: topological space
  ja: 位<い>相<そう>空<くう>間<かん>
```
````

语言使用代码，如 `en`、`ja`、`fr`、`de`、`ru`，显示时使用中文的语言名称。保留字段 `lang` 不是译名，而是标注术语本身的语言，例如人名原文 `米田 信夫:` 下写 `lang: ja`。人物条目（属于“人物”分类及其子分类）的这一块标题为“译名”，其他条目为“术语翻译”。普通译名直接写字符串。末尾的空格加 `:m` 表示阳性，`:f` 阴性，`:n` 中性，`:mf` 通性，`:pl` 复数。含冒号等 YAML 特殊字符时应给整个字符串加引号。

日语的 `字<假名>` 只给紧邻的一个 Unicode 字符注音，如 `群<ぐん>`、`位<い>相<そう>`。词组须写成 `[词组]<假名>`，如 `'[位相]<いそう>'`；方括号只界定注音范围，不显示。`位相<いそう>` 只给“相”注音。未标注的汉字、假名、标点和空格原样保留，如 `埋<う>め込<こ>み` 只标注“埋”和“込”。输出 HTML ruby，不支持 ruby 的阅读器以括号显示读音。以方括号开头的 YAML 字符串需加引号。

简写与字段格式可以混用。字段格式不解析简写，适用于复杂数据或需要保留字面文字的情况：

```yaml
群:
  fr: {text: groupe, gender: m}
位相:
  ja:
    text: 位相
    reading: [い, そう]
嵌入:
  ja:
    text: 埋め込み
    reading: [う, null, こ, null]
位相空间:
  ja:
    text: 位相空間
    ruby:
      - {text: 位相, reading: いそう}
      - {text: 空, reading: くう}
      - {text: 間, reading: かん}
```

`reading` 为列表时与 `text` 的 Unicode 字符逐字对应，不注音的字符填 `null`；为字符串时给整个词注音。`ruby` 是可选的分段列表，分段合并后须与 `text` 完全一致。`reading` 与 `ruby` 不能同时填写，二者只用于日语。可选 `note` 添加附注。同一语言有多个译名时用列表，如 `en: [first term, second term]`，可以混合字符串与字段对象。

术语、译名、假名和附注按普通文字输出，不展开 Markdown、HTML 或百科链接，但与正文一样做排版替换（公式与日语译名除外）：直引号成为弯引号，`--` 为 `–`，`...` 为 `…`；术语和译名中的行内公式（如 `$\infty$-范畴:`、`en: $\infty$-category`）照常渲染。带注音的日语译名中，公式写在注音之外，如 `$L^p$ 空<くう>間<かん>`。`terms` 不能放在定理类环境中（数据块的 `outsideEnvironments`）。重复键、未知字段、空译名、无效的性别或注音不对应报出源文件与行号。

## 站点的钩子

bananamark 在渲染时向站点询问的事，由 `scripts/prebuild/render.mjs` 的 `siteRenderer` 回答（全站的 front matter 先由预处理读入）：

- `resolveWikiLink`：条目名与别名 → 页面的地址（通过别名时带 `?from=`）；缺失的条目 → `/missing/` 的地址（见上文）。
- `resolvePageLink`：书册中其他页面的地址（指南与讲义的跨页引用）。
- `decorateLink`：其他主机的链接在新标签页打开，后面加外部链接的图标（`external-link`）；指向分类页的链接前面加文件夹图标（`category-link`）。
- `resolveImage`：页面包中的图片的地址。图片的宽度写成图片之后的 `{width=…}`，不超过正文宽度。
- `resolvePersonLink`（预处理中，`transformDocument` 的选项）：参考文献的作者链接到人物分类（`人物` 及其下级分类）中已发布的条目：全名与条目标题或别名相同；或者姓相同、名字依次相符（`J.-P.` 对应 `Jean-Pierre`，`P. G. L.` 对应 `Peter Gustav Lejeune`，第一个名字必须相符，作者名中的中间名缩写可以在条目中缺少），且恰好一个条目相符；忽略大小写与变音符号。条目自己的参考文献不链接到条目本身。实现在 `scripts/prebuild/people.mjs` 的 `personIndex`，由全站的 front matter 建立；常驻预览只为转换的页面重建，其他页面的链接在完整构建时更新。作者的 `page` 字段由 bananamark 自己写成百科链接，不经过这个钩子。

渲染结果按这些回答缓存（`scripts/prebuild/render-cache.mjs`）：回答都不变时，页面不重新渲染。

参考文献的样式在 `assets/scss/_bibliography.scss`。从正文的引用跳转到的条目（`:target`）以浅橙色底色和边框标出（框伸出文字之外，负的外边距抵消，条目的位置不变），约 2.5 秒后淡出；再次点击同一引用时，`static/js/site.js` 让它重新标出。页内锚点跳转避开顶部导航栏：`site.js` 按导航栏的实际高度设置滚动偏移，系统设置“减少动态效果”时不用平滑滚动。

## 构建与验证

```sh
npm run build
npm run serve
npm run check -- content/wiki/条目
npm test
```

`npm run serve` 启动时完整构建一次，再提供本地预览；修改 `content/` 中的页面、附件与导航定义，或 `data/categories.yaml`，会重新处理并刷新浏览器中变化的页面；修改模板、样式、脚本或 `site.yaml` 时完整构建。详见 [预览与检查](preview.md)。发布参数可以透传，例如 `npm run serve -- --port 1414 --buildDrafts`。

`npm test` 运行站点的测试（`tests/`）与三个包的测试；方言本身的测试与规范在 `packages/bananamark/test/`（见 [包的开发](../packages/CONTRIBUTING.md)）。
