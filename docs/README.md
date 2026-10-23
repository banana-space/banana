# 开发文档

开发环境的搭建与启动见仓库根目录的 [README](../README.md)。写给编辑者的写作指南在 `content/help/`；修改语法时请同时更新这里的说明与写作指南。

| 文档 | 内容 |
| --- | --- |
| [语法说明](syntax.md) | 百科 Markdown 语法的完整参考，含实现细节 |
| [指南与讲义](collections.md) | `collection.yaml`、章节编号、整组引用与修改时间 |
| [分类](categories.md) | 分类树与分类页 |
| [排版](typography.md) | 中西文间距、标点与标点字体 |
| [TikZ](tikz.md) | 交换图与 TikZ 图形的编译、中文适配与缓存 |
| [搜索](search.md) | Pagefind 索引、中文检索与搜索界面 |
| [预览与检查](preview.md) | 单页预览、`serve` 增量更新、常驻预览服务、编辑接口与编辑器页面 |
| [在线编辑的 GitHub 设置](editor-setup.md) | 登录、提交 PR 所需的 OAuth App、token 与密钥 |
| [服务器部署](deploy.md) | 定时拉取与构建、编辑接口的 systemd 单元、Apache 与旧站 |

## 构建流程

`npm run build`（`scripts/build.mjs`）依次执行：

1. **预处理**（`scripts/prebuild.mjs`、`scripts/prebuild/`）：读取 `content/`，检查语法，解析百科链接、分类、编号与引用，写出 Hugo 使用的副本 `.build/content/`。源文件不会被修改。
2. **Hugo** 渲染到 `public/`。普通公式由 Hugo 内置的 KaTeX 在构建时渲染；KaTeX 的样式和字体来自 npm 包 `katex`，由 `hugo.toml` 的模块挂载发布到 `/katex/`，不依赖外部 CDN。升级 Hugo 时须核对其内置 KaTeX 与 npm 包的版本一致。
3. **后处理**（`scripts/postbuild.mjs`、`scripts/postbuild/`）：编译 TikZ、中文排版、建立搜索索引。

直接运行 `hugo` 会跳过第 1、3 步。

## 其他约定

- **界面文字**：`i18n/zh-cn.yaml`，由 Hugo 与 Node 共用。`build_`、`serve_` 开头的键用于构建提示，使用简单的 `{{ .Name }}` 参数；界面键可以使用 Hugo 的模板语法。
- **修改时间**：取源文件最近一次 Git 提交的提交者日期，未提交的修改不影响它；部署时须保留 Git 历史。指南与讲义使用整组的日期，见 [指南与讲义](collections.md#发布与修改时间)。
- **页面历史**（`/history/?path=<页面>`，页面底部“页面历史”）：prebuild 从 Git 历史（`git log --first-parent`，跟随改名）读出修改每个页面的 PR 与提交，写到 `.build/history/<页面>.json`，由 Hugo 发布为 `/history/data/`（`scripts/prebuild/page-history.mjs`）；尚未出现在网站上的 PR 由页面从 `GET /api/page-history` 读取。每次显示 30 项，旧站的修订默认折叠；从页面历史打开的差异页面（`/diff/?…&history=<页面>`）返回页面历史。从旧站迁移来的页面另列出旧站的修订：`legacy/history.json` 以页面导入时的路径为键，记录每次修订的时间、用户、增删的行数与去掉 wiki 标记的编辑摘要（不含正文），由 MediaWiki 数据库导出；之后改名的页面沿 Git 历史找回导入时的路径。页面须不晚于它的键首次出现在该文件中的那次变化加入（网站的首次导入，以及之后迁移的讲义：页面与旧站历史在同一 PR 中加入），因此此后以旧站用过的名字新建的页面不带旧站的历史。导入时合并的页面（如《行列式入门》附录 C 的“杂例”）与指南不带旧站的历史。
- **首页的最近更改**：同一份 Git 历史中最近的 5 次修改（PR 或直接提交，不含首次导入），只算条目与讲义、指南中的页面（`scripts/prebuild/recent-changes.mjs`），写入首页的 front matter（`recentChanges`），由 `layouts/partials/home/recent-changes.html` 显示。每次修改一行：页面名称链接到页面本身，新页面后标一个上标的加号；涉及多个页面时按读音列出前 3 个（新建与改名的页面在前，讲义中的页面以讲义名代表），其余写作“等 N 个页面”；全在一部讲义中的修改只写讲义名，如“数学分析 中的 23 个页面”。修改了不止一个页面时，下面另起一行写 PR 的标题（直接提交为提交的标题），说明改了什么；页数与标题用小一号的字。日期与时间在右，由 `static/js/local-time.js` 换成读者的时区，今天、昨天写作“今天”“昨天”。列表下面是到最近更改页面的链接“全部更改”。没有 Git 历史时这一节不显示，链接一行改为链接到最近更改页面。
- **书的图标**：讲义名前加书的图标（`ui-icon.html` 的 `book`），与分类名前的文件夹图标相同：讲义页面的面包屑、搜索结果（面包屑与讲义首页的标题）、最近更改页面、差异页面与首页的最近更改中的讲义名（有图标就不再加书名号）；正文中的链接不加。
- **部署**：`hugo.toml` 的 `baseURL` 是站点地址（支持子目录）。服务器上的部署见 [服务器部署](deploy.md)。
- **示例页面**：`tests/fixtures/content/wiki/` 中的 [奇异上同调](../tests/fixtures/content/wiki/奇异上同调/index.md)、[组件示例](../tests/fixtures/content/wiki/components-example/index.md) 与 [TikZ 示例](../tests/fixtures/content/wiki/tikz-example/index.md)。
