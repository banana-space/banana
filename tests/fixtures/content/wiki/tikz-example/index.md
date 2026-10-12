---
title: TikZ 示例
---

本页展示构建时生成的交换图和 TikZ 图形。图中文字可以选择；中文保留为 Unicode 文字。

## 中文交换图

$$
\begin{tikzcd}[row sep=large, column sep=large]
  \text{群} \arrow[r, "\varphi", bend left] \arrow[d, "\text{取商}"']
    & \text{环} \arrow[l, "\psi", bend left] \arrow[d, "\text{取商}"] \\
  \text{商群} \arrow[r, "\text{诱导同态}"', dashed]
    & \text{商环}
\end{tikzcd}
$$

## 括号、多个图表和公式编号

```math {@eq:tikz}
\left(
  \begin{tikzcd}
    A \arrow[r, "\text{同态}"] \arrow[d, hook] & B \arrow[d, two heads] \\
    C \arrow[r, "g"'] & D
  \end{tikzcd}
\right)
\quad\cong\quad
\begin{tikzcd}
  X \arrow[r, "f"] & Y
\end{tikzcd}
```

可以引用 @eq:tikz。行内也可以写 $\begin{tikzcd}[column sep=small] \text{群} \arrow[r] & \text{环} \end{tikzcd}$，公式之后的标点与图表一起换行。

## TikZ 图形

```tikz
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[>=Stealth]
  \node[draw, rounded corners] (source) {输入 $x$};
  \node[draw, rounded corners, right=2cm of source] (target) {输出 $f(x)$};
  \draw[->, blue, thick] (source) -- node[above] {映射} (target);
  \node[below=1cm of source, rotate=15, text=red] {\bfseries 旋转中文};
\end{tikzpicture}
```

## 中文字号和标点

$$
\begin{tikzcd}
  {H_{\text{群}}^{\text{环}}} \arrow[r, "\text{自然映射}"]
    & \text{对象（中文）} \arrow[r, "\text{第二步}"]
    & \text{结果。}
\end{tikzcd}
$$

$A$，
$\begin{tikzcd}[column sep=small] A \arrow[r, "A"] & A \end{tikzcd}$，
$\begin{tikzcd}[column sep=small] A \ar[d, "A"] \\ A \end{tikzcd}$，
$中$，
$\begin{tikzcd}[column sep=small] 中 \arrow[r, "中"] & 中 \end{tikzcd}$，
$\begin{tikzcd}[column sep=small] 中 \ar[d, "中"] \\ 中 \end{tikzcd}$，
