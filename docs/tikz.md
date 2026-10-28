# TikZ 图形

交换图与 TikZ 图形由 bananamark 的插件 [bananamark-tikz](../packages/bananamark-tikz/README.md) 编译成内联 SVG：写法（`tikz` 围栏、公式中的 `tikzcd` 与 `tikzpicture`）、可用的宏包与命令、中文的处理与限制、缓存的键与错误，都见包的 README（英文）。写给编辑者的说明在帮助“公式与图形”（`content/help/格式手册/公式与图形/`）。示例页：[`tests/fixtures/content/wiki/tikz-example/index.md`](../tests/fixtures/content/wiki/tikz-example/index.md)。

本文只写站点怎样使用它。

## 站点的设置

- 站点的方言打开 TikZ（`scripts/shared/syntax.mjs` 的 `tikz: true`）：bananamark 把含图的公式与 `tikz` 围栏写成占位的空元素（`bm-tikz-source`），站点生成器在页面完成之后用插件把 SVG 放回原处（`scripts/generator.mjs` 的 `publishPages`、`publishShared`）。模板中的公式（标题等）也一样：`scripts/site/templates/layout.mjs` 写出同样的占位元素。
- 插件由 `scripts/shared/diagrams.mjs` 的 `siteDiagrams(output)` 创建：缓存在 `.build/tikz-cache/`（同一个检出中的所有构建共用），字体复制到输出目录的 `fonts/tikzjax/`，页面按自己的路径引用（支持站点子目录），错误为中文。
- 样式在 `assets/scss/_tikz.scss`：图为 1.1em（与公式相同），汉字（`bm-tikz-cjk`）用 `$font-family-western` 的字体，图中的文字可以选中；独立的图居中，带编号的图把编号放在右侧（`bm-tikz-layout`）。
- 镜像的字母 `ꓘ`、`ꓷ` 在图中由插件的导言区翻转普通字母画出（`packages/bananamark-tikz/src/preamble.mjs` 的 `\BananaMirror`），与公式中 BananaMath 的字形一致（见 [页面的写法](syntax.md#站点的方言)）。

## 缓存与构建时间

没有缓存时编译全站的图很慢：本地约 10–20 分钟，服务器上约 1 小时。缓存的格式与键不能随意改变（键包括 `packages/bananamark-tikz/src/compiler.mjs`、`worker.mjs` 与引擎的版本，改动它们会重新编译全部的图）；新的检出要先复制 `.build/tikz-cache/`。

- 完整构建（`npm run build`，即 `scripts/site.mjs --prune-cache`）结束时调用插件的 `prune()`：删去本次没有用到、并且一周内没有用过的缓存文件（已修改的图的旧版本、已删除页面的图）。读取缓存会更新文件的修改时间，所以在线编辑中的稿件的图在部署之后仍然保留。`serve` 与预览不清理。
- 部署时 `deploy/deploy.sh` 把缓存复制到 API 的检出（见 [服务器部署](deploy.md)），预览不必重新编译已有的图。
- 对照检查（`npm run compare`）把缓存复制到基准的检出。

## 预览中的编译

完整构建每次用一个 worker。预览服务（`scripts/preview-service.mjs`）让各次预览共用一个 worker（`tikzIdle`，默认 60 s：最后一次使用之后空闲这么久才停止；插件的 `workerIdleTimeout`），编辑时每张新图只需编译的时间（约 0.15–0.3 s）。一次预览的编译有总的时间限制（插件的 `totalTimeout`），图很多的稿件不会占住队列。失败的图不发布不完整的页面，错误显示在编辑器的预览上。

## 测试

`npm test` 中的 `packages/bananamark-tikz/test/tikz.mjs` 测试编译本身（中文、扩展区汉字、字距、字号、粗体、括号、多个图、编号与引用、重复的渐变 ID、失败恢复与超时）；`tests/tikz.mjs` 测试构建中的图：中文与字号、括号与多个图、编号与引用、子目录中的字体地址、重复的 SVG ID、结果与线程数无关、缓存的清理。
