# 香蕉空间

香蕉空间是一个中文数学百科网站。网站由 Markdown 源文件经 Node.js 生成：渲染器 bananamark（`packages/bananamark/`）渲染正文，本仓库的站点生成器（`scripts/site/`）生成页面，编辑通过 GitHub 的 pull request 提交与审阅。

- 写作指南（给编辑者）：`content/help/`，即网站上的“写作指南”。
- 开发文档：`docs/`。

以下是本地部署的步骤说明。

## 准备

- [Node.js](https://nodejs.org/) 22.15 或更新版本
- [Git](https://git-scm.com/)

不需要安装 LaTeX：交换图与 TikZ 图形由 npm 包中的 TeX 引擎编译。

```sh
git clone https://github.com/banana-space/banana
cd banana
npm install
```

## 本地预览：主服务器

```sh
npm run serve -- --port 1414
```

打开 <http://127.0.0.1:1414/>。第一次启动要完整构建全站，需要几分钟（TikZ 图形的编译结果随后缓存在 `.build/` 中，之后快得多）。

`serve` 监视源文件，保存后自动更新浏览器中的页面：

| 修改 | 更新方式 | 耗时 |
| --- | --- | --- |
| 只改已有页面的**正文** | 只重新渲染这一页（讲义、指南页面重新渲染整组） | 约 1 秒 |
| 改 **front matter**（`---` 之间的 `title`、`aliases`、`categories` 等） | 重新渲染这一页和受影响的页面：链接到它的页面、分类页、列表、同一讲义的其他页面 | 1–5 秒（链接到它的页面越多越慢） |
| 新建、删除、改名页面；附件；`book.yaml`、学科导航（`content/navboxes/`）、分类树（`data/categories.yaml`）；Git 提交 | 重新预处理全站，只渲染变化和受影响的页面 | 约 5 秒 |
| 模板、样式、脚本、配置、其他 `data/` 文件 | 完整重建全站 | 20–30 秒 |

更新期间，浏览器继续显示上一版页面，完成后自动刷新。搜索索引在页面刷新之后于后台重写（约 5 秒，写好前搜索使用上一版索引）。出错时终端显示错误，页面保持上一次成功的结果。


## 本地预览：在线编辑器与 API

网站的 `/edit/` 页面是在线编辑器，由 API（`scripts/api.mjs`）提供预览。在编辑器中预览**任何**修改（包括 front matter 和新条目）条目约 50 毫秒，书册页面约 0.2 秒，不会触发完整重建：稿件不写入 `content/`，只在接口的内存中渲染。

开两个终端，先启动 API：

```sh
npm run api -- --dev-user 你的名字 --base-url http://127.0.0.1:1414/ --environment development
```

等它打印 `listening on http://127.0.0.1:8787/api/`（约 10 秒），再在另一个终端启动主服务器，并把 `/api/` 转发给它：

```sh
npm run serve -- --port 1414 --api http://127.0.0.1:8787
```

然后打开 <http://127.0.0.1:1414/edit/>，或在任一条目页脚点“编辑本页”。

说明：

- `--dev-user` 跳过 GitHub 登录，以给定的名字直接登录，只能在本机使用。
- 这样启动的编辑器只能预览，不能提交：提交会以你的 GitHub 账号在仓库中开 PR，需要先按 [在线编辑的 GitHub 设置](docs/editor-setup.md) 配置。要把修改保存到本地文件，请在编辑器中预览满意后复制到源文件，或直接用文本编辑器修改 `content/` 中的文件。
- API 启动时读取一次全站内容。之后在磁盘上修改了其他页面（例如新建条目、改标题），需要重启 API，预览中的链接与分类才会反映这些修改。

## 其他命令

```sh
npm run build                          # 正式构建，输出到 public/
npm test                               # 测试
npm run format                         # 统一源文件的换行与缩进（--check 只检查）
npm run check -- content/wiki/条目名    # 只检查语法与链接，不渲染
```

## 目录

| 路径 | 内容 |
| --- | --- |
| `content/wiki/` | 百科条目，每个条目一个目录（`条目名/index.md`） |
| `content/books/`、`content/help/` | 讲义与指南，章节顺序由各自的 `book.yaml` 指定 |
| `data/categories.yaml` | 分类树 |
| `assets/`、`static/` | 样式、浏览器脚本与字体 |
| `scripts/` | 构建（模板在 `scripts/site/templates/`）、预览服务与 API |
| `packages/` | bananamark、bananamark-codemirror、bananamark-tikz 三个包，见 [开发文档](docs/README.md) |
| `tests/` | 测试；`tests/fixtures/` 中有语法示例页面 |
| `deploy/` | 部署脚本与 systemd 单元，见 [服务器部署](docs/deploy.md) |

`.build/` 与 `public/` 是构建输出，不提交。

## 小修改标记

只改了格式、链接、错别字等细节的页面，可以标为小修改，首页的“最近更改”不列出它们。在提交说明的末尾写上标记，每行一个：

```text
统一术语的写法

Minor-edit: all
Major-edit: wiki/群
```

`Minor-edit: all` 把这个 PR 修改的全部页面标为小修改，`Major-edit: wiki/群` 把其中的一个页面（写 `content/` 之下的路径，可以省略 `index.md`）标回主要修改；没有标记的页面都是主要修改。PR 中后来的提交的标记优先。在线编辑器的提交对话框中有“小修改”勾选框，写的是同样的标记。

## 许可

源代码采用 [MIT 许可](LICENSE)；网站内容的许可见页面页脚。
