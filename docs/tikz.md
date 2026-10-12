# TikZ 和中文交换图

含 `tikzcd` 或 `tikzpicture` 的公式使用 Node-TikZJax 1.0.5，执行其随包提供的 WebAssembly TeX 引擎。普通公式仍使用 Hugo 的 KaTeX。最终网站只包含内联 SVG、样式和字体，读者端不执行 TeX、测量单元格或重新定位箭头，关闭 JavaScript 也能显示。

## 写法

在普通公式里直接写标准 tikzcd：

```latex
$$
\begin{tikzcd}
  \text{群} \arrow[r, "\text{同态}"] \arrow[d, "\text{取商}"']
    & \text{环} \arrow[d] \\
  \text{商群} \arrow[r, dashed] & \text{商环}
\end{tikzcd}
$$
```

支持 `$…$`、`$$…$$`、`\(…\)`、`\[…\]` 以及自动编号的 `math` 围栏。含图公式整体交给 TeX，因此可以在同一公式中放多个图表、使用 `\left/\right` 或嵌入分数、上下标等。普通数学内容此时遵循真实 LaTeX 的语法，而非 KaTeX 的额外命令。公式外层的 `\tag` 或 `\tag*` 单独编译并放在右侧，自动编号与页内引用保留。

TikZ 图形可以使用 `tikz` 围栏，正文不包数学分隔符：

````markdown
```tikz
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}
  \node[draw] (a) {输入 $x$};
  \node[draw, right=2cm of a] (b) {输出 $f(x)$};
  \draw[->] (a) -- node[above] {映射} (b);
\end{tikzpicture}
```
````

图形下方的说明写在围栏的 `caption` 属性中，如 ` ```tikz {caption="映射 $f$ 的示意"} `：图居中，说明写在图下，可含公式和链接，与单独成段的图片相同。

`tikzpicture` 也可直接出现在数学公式中。开始和结束环境、宏及箭头选项按真实 TikZ 解释，不需要转换成项目自定义的交换图语法。示例页：[`tests/fixtures/content/wiki/tikz-example/index.md`](../tests/fixtures/content/wiki/tikz-example/index.md)。

行内单行 `tikzcd` 自动按单元格文字的基线对齐正文；多行交换图保留原生居中方式。构建器修正上游 SVG 转换器在 TeX 点与坐标原点之间的 0.27 点误差，使绘制位置与公式字框一致。一般的 `tikzpicture` 可用标准 `baseline=(节点名.base)` 选项指定文字基线。

## 中文如何工作

随包提供的 LaTeX 已能识别 UTF-8，但没有中文字库。构建器为源公式中的汉字和全角标点添加 `\DeclareUnicodeCharacter` 声明：

1. 中文字号按当前 TeX 字号除以 1.1，抵消外层数学公式的放大，使普通中文与正文等大。每字占对应字号的一字宽，预留字号的 85% 高度和 15% 深度。
2. TeX 正常计算节点尺寸、标签位置、箭头和外层公式。
3. 通过驱动支持的 `dvisvgm:raw` special，在最终 DVI 坐标输出 SVG `<text>`。
4. 构建器把内部字符标记恢复成真正的 Unicode 汉字，合并同一行相邻的中文文字，避免复制一个词时逐字换行。

带重音的拉丁字母（如 `\mathsf{Ét}`、`\text{Möbius}`）声明为 TeX 重音：正文中用 `\'E`，公式中用 `\acute{E}`，因此可以直接输入。

字号随数学样式变化，粗体和斜体随 TeX 字体设置变化，颜色及旋转继承 TikZ 的 SVG 分组。中文使用本站的系统字体回退链。SVG 的 `textLength` 保持字宽与 TeX 预留尺寸一致。

这是中文标签适配，不是完整的 CTeX 或 xeCJK 环境。当前按固定字宽和字框估计字体尺寸，不读取读者设备的真实中文字体度量；少见字是否有字形取决于设备字体。暂不实现中文段落的自动断行、标点禁则、竖排或通过 TeX 选择中文字体。节点标识符和程序性键名建议使用 ASCII；中文用于显示内容。

中文选择和复制保留真实字符。西文数学部分仍采用上游 BaKoMa 字体编码，希腊字母、符号、组合括号等可能复制成其他字符；当前未统一修复这些编码，也没有给图表生成等价的 MathML。

## 构建和维护

- `layouts/partials/math.html` 把含图公式交给 postbuild；普通公式直接调用 Hugo。
- `scripts/tikz/compiler.mjs` 负责真实 TeX 编译、中文适配、公式基线和 SVG 输出。
- `scripts/tikz/preamble.mjs` 是 TeX 导言区：中文与 Unicode 字符声明、网页字形、补充命令（`\braket`、`\set` 等）。
- `scripts/tikz/worker.mjs` 隔离引擎状态并收集 TeX 错误。
- `scripts/postbuild/tikz.mjs` 负责缓存、页面替换、重复 SVG 的唯一 ID（按页编号，页面的输出与其他页面无关）、字体复制和字体许可。postbuild 的页面 worker 把图形交给主线程的渲染器编译；同一时间只有一个 TeX 进程，编译依次进行，同时请求的同一图形只编译一次。

默认加载 `tikz-cd`、`amsmath`、`amssymb` 和 `array`。可在 `tikz` 围栏中使用随包提供的 `\usetikzlibrary`，但不能假定任意 TeX 宏包都存在；不支持依赖外部工具、文件或 shell 的 TikZ 功能。不要在围栏中放 `\documentclass`、`\begin{document}` 或 `\usepackage`。

编译按顺序执行，复用一个 Worker 中的引擎资源。每次编译的超时为 15 秒；Worker 可以终止同步死循环，错误后下一次编译使用新 Worker。预览使用原有的成功快照机制，失败不发布不完整页面。

缓存位于 `.build/tikz-cache/`，键包括源 TeX、显示模式、编译器代码、引擎包信息，以及该图实际得到的导言区：`\providecommand` 和 Unicode 字符声明只在图中用到该命令或字符时才加入，因此在导言区增加或修改一条补充命令只会重新编译用到它的图；修改 `compiler.mjs` 则会重新编译全部图（全站约 1.5 分钟）。完整构建（`npm run build` 与 `serve` 的完整重建）结束后删除本次没有用到、并且一周内没有用过的缓存文件，例如已修改的图的旧版本和已删除页面的图；读取缓存时更新文件的修改时间，所以在线编辑中的稿件的图在部署之后仍然保留；单页预览不清理。缓存与 Hugo 无关，没有时间限制：同一张图（同样的 TeX）在预览中只编译一次。

编译在 worker 线程中进行，启动一次约 0.5 s，运行时约占 370 MB。完整构建每次使用一个 worker；预览服务（`tikzIdle`，默认 60 s）让各次预览共用一个 worker，最后一次使用之后空闲这么久才停止，所以编辑时每张新图只需编译时间（约 0.15–0.3 s）。TeX 错误不使 worker 停止；出错的图（最近 200 个）在进程内记住，同一张图不再重新编译，稿件中有一张错误的图时不必每次预览都重新编译它；超时与 worker 异常退出可能是暂时的，不记住。静态字体按页面需要复制到 `fonts/tikzjax/`，页面中的字体路径相对于当前 HTML 文件，支持站点子目录。字体的 BaKoMa 许可一并复制；Node-TikZJax 采用 LPPL-1.3c。

`npm test` 包含实际 TeX 编译的测试，覆盖中文、扩展区汉字、字距、字号、粗体、括号、多图表、编号引用、重复渐变 ID、字体路径、失败恢复与超时。
