# 开发文档

开发环境的搭建与启动见仓库根目录的 [README](../README.md)。写给编辑者的写作指南在 `content/help/`；修改语法时请同时更新这里的说明与写作指南。

## 站点与三个包

页面的语法与渲染、编辑器的语言支持、TikZ 的编译是三个独立的 npm 包（`packages/`，文档为英文），站点使用它们，并加上自己的部分：

| 部分 | 在哪里 | 文档 |
| --- | --- | --- |
| 方言：语法层（公式、节与定理类环境的编号、引用、标签列表、参考文献、百科链接、HTML 式标签与数据块）、渲染为 HTML、中文排版、代码高亮、书册的共同编号与引用 | `packages/bananamark/` | [README](../packages/bananamark/README.md)；逐项的示例与规范在 `packages/bananamark/test/spec/` |
| 编辑器（CodeMirror 6）中的高亮、补全、编辑公式与检查 | `packages/bananamark-codemirror/` | [README](../packages/bananamark-codemirror/README.md) |
| TikZ 图形编译成 SVG、缓存 | `packages/bananamark-tikz/` | [README](../packages/bananamark-tikz/README.md) |
| 三个包的测试、一致性测试的更新、发布 | `packages/` | [包的开发](../packages/CONTRIBUTING.md) |
| 站点对方言的设置（打开的功能、定理类环境、站点的标签与数据块、公式的改写、排版的设置）与钩子（链接与图片的地址、人名链接） | `scripts/shared/syntax.mjs` 及其引用的模块、`scripts/prebuild/render.mjs` | [页面的写法](syntax.md) |
| front matter、名称与别名、读音、分类、指南与讲义、学科导航、术语翻译、页面提示 | `scripts/prebuild/`、`scripts/shared/` | [页面的写法](syntax.md)、[指南与讲义](books.md)、[分类](categories.md) |
| 模板、样式、浏览器中的脚本、搜索、预览与 API、在线编辑器的页面、部署 | `scripts/site/`、`assets/`、`static/`、`scripts/`、`deploy/` | 下表 |

包写出的类名都以 `bm-` 开头（见 bananamark README 的 Output HTML），站点的模板、样式与浏览器脚本按它们使用。站点还直接用到包的几个内部模块（`bananamark/internal/*`：名称与公式的读取、编号、排版的底层函数，如 `scripts/shared/names.mjs`、`scripts/shared/internals.mjs`、`scripts/format/markdown.mjs`、`scripts/search/document.mjs`），它们不属于包的接口，升级包时要随之检查。

## 文档

| 文档 | 内容 |
| --- | --- |
| [页面的写法](syntax.md) | 站点对方言的设置、站点加上的写法（页面信息、名称与别名、读音、页面提示、人名、学科导航、术语翻译）与钩子 |
| [讲义与指南](books.md) | `book.yaml`、章节编号、整组引用与修改时间 |
| [分类](categories.md) | 分类树与分类页 |
| [中文排版](typography.md) | 站点的排版设置、模板中的文字、字体，公式与图标之后的标点 |
| [TikZ 图形](tikz.md) | 站点怎样使用 bananamark-tikz：缓存、构建与预览 |
| [搜索](search.md) | Pagefind 索引、中文检索与搜索界面 |
| [预览与检查](preview.md) | 检查、`serve` 增量更新、常驻预览服务、API 与编辑器页面 |
| [在线编辑的 GitHub 设置](editor-setup.md) | 登录、提交 PR 所需的 OAuth App、token 与密钥 |
| [服务器部署](deploy.md) | 定时拉取与构建、API 的 systemd 单元、Apache 与旧站 |
| [对照检查](compare.md) | 比较两个提交构建出的站点 |

## 构建流程

`npm run build`（`scripts/build.mjs`）依次执行：

1. **预处理**（`scripts/prebuild.mjs`、`scripts/prebuild/`）：读取 `content/`，检查页面信息，解析名称与别名、分类、书册，用 bananamark 把正文渲染成 HTML（公式由 KaTeX 渲染），写出生成目录 `.build/content/`。源文件不会被修改。
2. **站点生成**（`scripts/site.mjs`、`scripts/site/`）：用模板函数（`scripts/site/templates/`）生成全部页面，在 worker 线程中完成模板文字的中文排版与搜索文档（`scripts/site/finish.mjs`），再用 bananamark-tikz 放入 TikZ 图形，写入 `public/`，最后建立搜索索引。样式与脚本由 esbuild 和 sass 生成，KaTeX 的样式和字体来自 npm 包，发布到 `/katex/`，不依赖外部 CDN。

## 其他约定

- **界面文字**：`i18n/zh-cn.yaml`，模板、构建与浏览器脚本共用（`scripts/shared/i18n.mjs`）。参数写成 `{{ .Name }}`，数字与单个值写成 `{{ . }}`，另有 `{{ with .Name }}…{{ end }}`。
- **修改时间**：取源文件最近一次 Git 提交的提交者日期，未提交的修改不影响它；部署时须保留 Git 历史。指南与讲义使用整组的日期，见 [指南与讲义](books.md#发布与修改时间)。
- **页面历史**（`/history/?path=<页面>`，页面底部“页面历史”）：prebuild 从 Git 历史（`git log --first-parent`，跟随改名）读出修改每个页面的 PR 与提交，写到 `.build/history/<页面>.json`，由站点生成器发布为 `/history/data/`（`scripts/prebuild/page-history.mjs`）；尚未出现在网站上的 PR 由页面从 `GET /api/page-history` 读取。每次显示 30 项，旧站的修订默认折叠；从页面历史打开的差异页面（`/diff/?…&history=<页面>`）返回页面历史。从旧站迁移来的页面另列出旧站的修订：`legacy/history.json` 以页面导入时的路径为键，记录每次修订的时间、用户、增删的行数与去掉 wiki 标记的编辑摘要（不含正文），由 MediaWiki 数据库导出；之后改名的页面沿 Git 历史找回导入时的路径。页面须不晚于它的键首次出现在该文件中的那次变化加入（网站的首次导入，以及之后迁移的讲义：页面与旧站历史在同一 PR 中加入），因此此后以旧站用过的名字新建的页面不带旧站的历史。导入时合并的页面（如《行列式入门》附录 C 的“杂例”）与指南不带旧站的历史。
- **小修改**：提交说明中的 `Minor-edit: all`、`Major-edit: wiki/群` 等行（通常写成 Git trailer）把一次修改（PR 或直接提交）中的页面标为小修改或主要修改，没有标记的页面是主要修改（`scripts/shared/minor-edits.mjs`，写法见仓库的 [README](../README.md#小修改标记)）。一次修改的说明按时间读：PR 的各个提交，再是合并提交的说明；后来的标记优先，所以审阅者的提交（可以是空提交）与合并说明可以改变作者的标记。在线编辑器的提交对话框有“小修改”勾选框，从 PR 中这个页面现在的标记开始，API 在提交中写上这个页面的标记。小修改不出现在首页的最近更改中；页面历史（`scripts/prebuild/page-history.mjs` 读本地 Git 历史）与最近更改页面（`scripts/api/recent-changes.mjs` 读 GitHub 上 PR 的提交与合并提交）在它旁边标“小”；页面的修改时间照常更新。
- **首页的最近更改**：同一份 Git 历史中最近的 5 次修改（PR 或直接提交，不含首次导入），只算条目与讲义、指南中的页面，不算小修改（`scripts/prebuild/recent-changes.mjs`），写入首页的 front matter（`recentChanges`），由首页的模板显示（`scripts/site/templates/home.mjs`）。每次修改一行：页面名称链接到页面本身，新页面后标一个上标的加号；涉及多个页面时按读音列出前 3 个（新建与改名的页面在前，讲义中的页面以讲义名代表），其余写作“等 N 个页面”；全在一部讲义中的修改只写讲义名，如“数学分析 中的 23 个页面”。修改了不止一个页面时，下面另起一行写 PR 的标题（直接提交为提交的标题），说明改了什么；页数与标题用小一号的字。日期与时间在右，由 `static/js/local-time.js` 换成读者的时区，今天、昨天写作“今天”“昨天”。列表下面是到最近更改页面的链接“全部更改”。没有 Git 历史时这一节不显示，链接一行改为链接到最近更改页面。
- **书的图标**：讲义名前加书的图标（模板的 `icon('book')`），与分类名前的文件夹图标相同：讲义页面的面包屑、搜索结果（面包屑与讲义首页的标题）、最近更改页面、差异页面与首页的最近更改中的讲义名（有图标就不再加书名号）；正文中的链接不加。
- **站点设置**：`site.yaml`（站点地址 `baseURL`，支持子目录；标题、说明、语言与仓库）。**部署**：服务器上的部署见 [服务器部署](deploy.md)。
- **示例页面**：`tests/fixtures/content/wiki/` 中的 [奇异上同调](../tests/fixtures/content/wiki/奇异上同调/index.md)、[组件示例](../tests/fixtures/content/wiki/components-example/index.md) 与 [TikZ 示例](../tests/fixtures/content/wiki/tikz-example/index.md)。
