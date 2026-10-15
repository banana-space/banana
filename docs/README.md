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
- **部署**：`hugo.toml` 的 `baseURL` 是站点地址（支持子目录）。服务器上的部署见 [服务器部署](deploy.md)。
- **示例页面**：`tests/fixtures/content/wiki/` 中的 [奇异上同调](../tests/fixtures/content/wiki/奇异上同调/index.md)、[组件示例](../tests/fixtures/content/wiki/components-example/index.md) 与 [TikZ 示例](../tests/fixtures/content/wiki/tikz-example/index.md)。
