# TikZ 图形

交换图与 TikZ 图形由 bananamark 的插件 [bananamark-tikz](../packages/bananamark-tikz/README.md) 编译成内联 SVG：写法（`tikz` 围栏、公式中的 `tikzcd` 与 `tikzpicture`）、可用的宏包与命令、中文的处理与限制、缓存的键与错误，都见包的 README（英文）。写给编辑者的说明在帮助“公式与图形”（`content/help/格式手册/公式与图形/`）。示例页：[`tests/fixtures/content/wiki/tikz-example/index.md`](../tests/fixtures/content/wiki/tikz-example/index.md)。

本文只写站点怎样使用它。

## 站点的设置

- 站点的方言打开 TikZ（`scripts/shared/syntax.mjs` 的 `tikz: true`）：bananamark 把含图的公式与 `tikz` 围栏写成占位的空元素（`bm-tikz-source`），站点生成器在页面完成之后用插件把 SVG 放回原处（`scripts/service/generator.mjs` 的 `publishPages`、`publishShared`）。模板中的公式（标题等）也一样：`scripts/site/templates/layout.mjs` 写出同样的占位元素。
- 插件由 `scripts/shared/diagrams.mjs` 的 `siteDiagrams(output)` 创建：缓存在 `.build/tikz-cache/`（同一个检出中的所有构建共用），字体复制到输出目录的 `fonts/tikzjax/`，页面按自己的路径引用（支持站点子目录），错误为中文。
- 样式在 `site/styles/_tikz.scss`：图为 1.1em（与公式相同），汉字（`bm-tikz-cjk`）用 `$font-family-western` 的字体，图中的文字可以选中；独立的图居中，带编号的图把编号放在右侧（`bm-tikz-layout`）。
- 图中用页面字体画的字形（插件的 `glyphs`，见包的 README 的 Page glyphs）是 `scripts/shared/diagrams.mjs` 的 `siteGlyphs`，与公式一致（`site/styles/_katex.scss`）：`\mathscr` 用 KaTeX_Script（插件的默认），`\mathbb` 的大写字母与 k 用 Banana Math，𝟙（`\mathbb{1}`）用 KaTeX_Main，后两者是 BananaMath 的字形，尺寸由 `scripts/fonts/banana-math.py` 写在 `scripts/shared/banana-math-metrics.mjs`。其余的 `\mathbb` 字母仍用 TeX 的 msbm。改动它们只重新编译用到的图。
- `\mathreflectbox`（KaTeX 的命令，TeX 中没有）由插件的导言区用 graphicx 的 `\reflectbox` 定义，随所在的字号缩放，与公式中一致（见 [页面的写法](syntax.md#站点的方言)）。

## 缓存与构建时间

没有缓存时编译全站的图很慢：本地约 10–20 分钟，服务器上约 1 小时。缓存的格式与键不能随意改变（键包括 `packages/bananamark-tikz/src/compiler.mjs`、`worker.mjs` 与引擎的版本，改动它们会重新编译全部的图）；新的检出要先复制 `.build/tikz-cache/`。

- 完整构建（`npm run build`）结束时调用插件的 `prune()`：删去本次没有用到、并且一周内没有用过的缓存文件（已修改的图的旧版本、已删除页面的图）。读取缓存会更新文件的修改时间，所以在线编辑中的稿件的图在部署之后仍然保留。`serve` 与预览不清理。
- 部署时 `deploy/deploy.sh` 把缓存复制到 API 的检出（见 [服务器部署](deploy.md)），预览不必重新编译已有的图。
- 完整构建中每张图最多编译 60 s（`--tikz-timeout <秒>`），超过则构建失败，此后的合并都不能部署，直到修好这张图。比预览的 15 s 宽：服务器编译比编写图形的电脑慢三倍以上，一张本地 4 s 的图在服务器上可能超过 15 s。超时不在缓存的键中，改变它不会重新编译。
- 对照检查（`npm run compare`）把缓存复制到基准的检出。

## 预览中的编译

完整构建每次用一个 worker。预览服务（`scripts/service/preview.mjs`）让各次预览共用一个 worker（`tikzIdle`，默认 60 s：最后一次使用之后空闲这么久才停止；插件的 `workerIdleTimeout`），编辑时每张新图只需编译的时间（约 0.15–0.3 s）。每张图最多 15 s（插件的 `timeout`），一次预览共 20 s（`totalTimeout`），图很多的稿件不会占住队列。超时的图十分钟内不再编译（插件记住它，与 TeX 出错的图一样），稿件其他地方的修改不会每次预览都让它再占 15 s。失败的图不发布不完整的页面，错误显示在编辑器的预览上。

页面中只放图形：编译出的 SVG 若含有 TikZ 作图不用的元素（链接、脚本、动画、嵌入的内容）、事件属性、指向图外的引用或标记声明，这张图报错（插件的错误 `tikz_unsafe`），不论 TeX 怎样写出它。插件不删改 SVG，只检查；检查在每次使用时进行，缓存中的图也一样，所以修改检查不必重新编译。图的源码中的 `\special`（把文字原样写进 SVG）另外直接报错（`tikz_command`，注释中也不行），编译器与导言区自己的 `\special` 不受影响。

## 测试

`npm test` 中的 `packages/bananamark-tikz/test/tikz.mjs` 测试编译本身（中文、扩展区汉字、字距、字号、粗体、括号、多个图、编号与引用、重复的渐变 ID、失败恢复与超时）；`tests/tikz.mjs` 测试构建中的图：中文与字号、括号与多个图、编号与引用、子目录中的字体地址、重复的 SVG ID、结果与线程数无关、缓存的清理。
