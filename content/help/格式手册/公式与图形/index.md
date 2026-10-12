---
title: 公式与图形
---

{@help:math}

本文介绍数学公式、交换图与 TikZ 图形的写法。

## 公式

公式使用 LaTeX 语法，由 [KaTeX](https://katex.org/docs/supported.html) 显示。

| 写法 | 用途 |
| --- | --- |
| `$...$`、`\(...\)` | 行内公式 |
| `\[...\]`、`$$...$$` | 行间公式，不编号 |
| ```` ```math ```` 代码块 | 行间公式，带编号 |

行间公式的分隔符各占一行，内容不缩进：

```latex
\[
\int_0^1 x^2 \, dx = \frac{1}{3} .
\]
```

多行公式用 `aligned`、`gathered` 等环境，写在 `\[...\]` 中：

```latex
\[
\begin{aligned}
  (a + b)^2
  &= a^2 + 2ab + b^2 \\
  &\geq 4ab .
\end{aligned}
\]
```

`align*`、`equation*` 等环境不能直接写在正文中，请改用上面的写法。

公式中不能有空行：空行会结束段落，把公式截成两半而无法显示。

在公式中，**不能**自定义命令：`\newcommand`、`\def` 等都不可用。
请直接写出完整的写法，例如 `\operatorname{Hom}`。

### 带编号的公式

需要编号并在别处引用的公式，写在 `math` 代码块中，标签写在第一行：

````markdown
```math {@eq:cauchy}
f (a) = \frac{1}{2 \pi \mathrm{i}} \oint_\gamma \frac{f (z)}{z - a} \, dz
```

由 @eq:cauchy 可知...
````

另见 @help:references。

## 交换图

交换图使用 [tikz-cd](https://ctan.org/pkg/tikz-cd) 的语法，写在公式中：

```latex
\[
\begin{tikzcd}
  A \ar[r, "f"] \ar[d, "g"']
  & B \ar[d, "h"] \\
  C \ar[r, "k"']
  & D
\end{tikzcd}
\]
```

含有交换图的公式由真正的 LaTeX 编译，不是 KaTeX，
因此整个公式的行为可能都与其他公式略微不同。
香蕉空间尽力让两者的体验一致。
例如，在交换图里也可以使用中文。


## TikZ 图形

TikZ 图形可用 `tikz` 代码块绘制：

````markdown
```tikz {caption="映射 $f$ 的示意"}
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}
    \node[draw] (a) at (0, 0) {$X$};
    \node[draw] (b) at (3, 0) {$Y$};
    \draw[-Stealth] (a) -- node[above] {$f$} (b);
\end{tikzpicture}
```
````

图形居中显示，`caption` 中的文字显示在图下，作为图片标题，可以省略。

用到的 TikZ 库可以直接用 `\usetikzlibrary` 写在代码块中，
如上例所示。
