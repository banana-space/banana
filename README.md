# 香蕉空间

香蕉空间是一个中文数学百科网站。网站基于 [Hugo](https://gohugo.io/)，由 Markdown 源文件经 Node.js 预处理、Hugo 渲染生成，编辑通过 GitHub 的 pull request 提交与审阅。

- 写作指南（给编辑者）：`content/help/`，即网站上的“写作指南”。
- 开发文档：`docs/`。

以下是本地部署的步骤说明。

## 准备

- [Node.js](https://nodejs.org/) 22 或更新版本
- [Git](https://git-scm.com/)
- [Hugo Extended](https://gohugo.io/installation/) 0.167.0。公式由 Hugo 内置的 KaTeX 渲染，其他版本的 Hugo 内置的 KaTeX 版本可能不同。

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
| 新建、删除、改名页面；附件；`collection.yaml`、提示与导航框、分类树（`data/categories.yaml`）；Git 提交 | 重新预处理全站，只渲染变化和受影响的页面 | 约 5 秒 |
| 模板、样式、脚本、配置、其他 `data/` 文件 | 完整重建全站 | 20–30 秒 |

更新期间，浏览器继续显示上一版页面，完成后自动刷新。搜索索引与 `sitemap.xml` 只在完整重建时更新（页面刷新之后再写入，此前搜索使用上一版索引）。出错时终端显示错误，页面保持上一次成功的结果。


## 本地预览：在线编辑器与编辑接口

网站的 `/edit/` 页面是在线编辑器，由编辑接口（`editor-api`）提供预览。在编辑器中预览**任何**修改（包括 front matter 和新条目）都只需约 0.5 秒，不会触发完整重建：稿件不写入 `content/`，只在接口的内存中渲染。

开两个终端，先启动编辑接口：

```sh
npm run editor-api -- --dev-user 你的名字 --base-url http://127.0.0.1:1414/ --environment development
```

等它打印 `listening on http://127.0.0.1:8787/api/`（约 10 秒），再在另一个终端启动主服务器，并把 `/api/` 转发给它：

```sh
npm run serve -- --port 1414 --api http://127.0.0.1:8787
```

然后打开 <http://127.0.0.1:1414/edit/>，或在任一条目页脚点“编辑本页”。

说明：

- `--dev-user` 跳过 GitHub 登录，以给定的名字直接登录，只能在本机使用。
- 这样启动的编辑器只能预览，不能提交：提交会以你的 GitHub 账号在仓库中开 PR，需要先按 [在线编辑的 GitHub 设置](docs/editor-setup.md) 配置。要把修改保存到本地文件，请在编辑器中预览满意后复制到源文件，或直接用文本编辑器修改 `content/` 中的文件。
- 编辑接口启动时读取一次全站内容。之后在磁盘上修改了其他页面（例如新建条目、改标题），需要重启编辑接口，预览中的链接与分类才会反映这些修改。

## 其他命令

```sh
npm run build                          # 正式构建，输出到 public/
npm test                               # 测试
npm run format                         # 统一源文件的换行与缩进（--check 只检查）
npm run preview -- content/wiki/条目名  # 只构建指定页面，输出可直接用浏览器打开
npm run check -- content/wiki/条目名    # 只检查语法与链接，不渲染
```

请总是使用这些 npm 命令，不要直接运行 `hugo`：构建先对源文件做预处理，渲染后还要排版，直接运行 Hugo 会跳过这些步骤。

## 目录

| 路径 | 内容 |
| --- | --- |
| `content/wiki/` | 百科条目，每个条目一个目录（`条目名/index.md`） |
| `content/books/`、`content/help/` | 讲义与指南，章节顺序由各自的 `collection.yaml` 指定 |
| `data/categories.yaml` | 分类树 |
| `layouts/`、`assets/`、`static/` | 模板、样式、浏览器脚本与字体 |
| `scripts/` | 构建、预览服务与编辑接口 |
| `tests/` | 测试；`tests/fixtures/` 中有语法示例页面 |
| `deploy/` | 部署脚本与 systemd 单元，见 [服务器部署](docs/deploy.md) |

`.build/` 与 `public/` 是构建输出，不提交。

## 许可

源代码采用 [MIT 许可](LICENSE)；网站内容的许可见页面页脚。
