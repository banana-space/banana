---
title: 纬悬
aliases: [悬挂, Suspension]
categories: [一般拓扑, 同伦论]
navboxes: [代数拓扑]
---

<problems>
- “纬悬–环路伴随”“与同调的联系”“Freudenthal 纬悬定理”“余群结构”各节需要扩充。
</problems>

[[拓扑空间]] $X$ 的**纬悬** $S X$ 是以 $X$ 为底的双锥，
也就是将柱体 $X \times I$ 的两个底面各压缩成一个点，而得到的空间。

\[
\begin{tikzpicture}
  \draw [line width = .5] (-1.47, .12) -- (0, 2) -- (1.47, .12) (-1.47, -.12) -- (0, -2) -- (1.47, -.12);
  \draw [line width = 1, cyan, dashed] (20:1.5 and .5) arc (20:160:1.5 and .5);
  \draw [line width = 1, cyan] (160:1.5 and .5) arc (160:380:1.5 and .5);
  \draw [line width = .5, dashed] (0, 1) + (20:.75 and .25) arc (20:160:.75 and .25);
  \draw [line width = .5] (0, 1) + (160:.75 and .25) arc (160:380:.75 and .25);
  \draw [line width = .5, dashed] (0, -1) + (-20:.75 and .25) arc (-20:200:.75 and .25);
  \draw [line width = .5] (0, -1) + (200:.75 and .25) arc (200:340:.75 and .25);
  \node [cyan] at (1.8, 0) {$X$};
  \node at (1, -1.4) {$S X$};
\end{tikzpicture}
\]

另一种纬悬是[[带点拓扑空间]] $(X, x)$ 的**约化纬悬** $\Sigma X$，
也常直接称为**纬悬**，是在双锥 $S X$ 中，
将基点 $x$ 对应的母线压缩成一个点，以作为新的基点，
而得到的带点空间。

\[
\begin{tikzpicture}
  \draw [line width = .5] (-1.47, .12) -- (0, 2) -- (1.47, .12) (-1.47, -.12) -- (0, -2) -- (1.47, -.12);
  \draw [line width = 1, cyan, dashed] (20:1.5 and .5) arc (20:160:1.5 and .5);
  \draw [line width = 1, cyan] (160:1.5 and .5) arc (160:380:1.5 and .5);
  \draw [line width = .5, dashed] (0, 1) + (20:.75 and .25) arc (20:160:.75 and .25);
  \draw [line width = .5] (0, 1) + (160:.75 and .25) arc (160:380:.75 and .25);
  \draw [line width = .5, dashed] (0, -1) + (-20:.75 and .25) arc (-20:200:.75 and .25);
  \draw [line width = .5] (0, -1) + (200:.75 and .25) arc (200:340:.75 and .25);
  \draw [line width = 1.5] (0, 2) -- (.9, -.4) -- (0, -2);
  \fill [cyan] (.88, -.4) circle (.1);
  \node [cyan] at (1.8, 0) {$X$};
  \node [cyan] at (.6, -.25) {$x$};
  \node at (1, -1.4) {$\Sigma X$};
\end{tikzpicture}
\]

纬悬是一种自然的将空间提高一维的方法。
例如，[[球面]] $S^n$ 的纬悬就是高一维的球面 $S^{n+1}$。
纬悬函子 $\Sigma$ 是[[环路函子]] $\Omega$ 的[[左伴随]]，
后者是在同伦意义上将空间降低一维的方法。
这一对伴随称为 **[[纬悬–环路伴随]]**，
是[[代数拓扑]]中，特别是[[稳定同伦论]]中的重要工具。
这些性质在纬悬用 [[$\infty$-范畴]]语言的定义
（@无穷）中更为清晰。

## 定义

::: definition [纬悬]
[[拓扑空间]] $X$ 的**纬悬**定义为[[商空间]]
\[
S X = (X \times I) / {\sim},
\]
其中[[等价关系]] $\sim$ 定义为对 $x, y \in X$，有
$(x, 0) \sim (y, 0)$ 以及 $(x, 1) \sim (y, 1)$。
:::

::: definition [约化纬悬]
[[带点拓扑空间]] $(X, x)$ 的**约化纬悬**（也直接称**纬悬**）
定义为[[商空间]]
\[
\Sigma X = S X / (x \times I),
\]
其基点为 $x \times I$ 对应的点。
:::

## 例子

- [[球面]] $S^n$ 的纬悬为 $S S^n \simeq S^{n+1}$（$n \geq -1$）；
  其约化纬悬为 $\Sigma S^n \simeq S^{n+1}$（$n \geq 0$）。

## 性质

### 在 $\infty$-范畴中

纬悬在 [[$\infty$-范畴]]的语言中有着简洁的描述：

::: proposition {@无穷}
对带点拓扑空间 $(X,x)$，
在带点[[空间 $\infty$-范畴]] $\mathsf{S}$ 中，
以下图表
\[
\begin{tikzcd}
  X \ar[r] \ar[d] \ar[dr, phantom, pos=.8, "\lrcorner"] &
  {*} \ar[d] \\
  {*} \ar[r] &
  \Sigma X
\end{tikzcd}
\]
是（同伦）[[推出图表]]。

普通的[[拓扑空间范畴]]中，
此命题也可以转述如下：
以下图表
\[
\begin{tikzcd}
  X \ar[r] \ar[d] \ar[dr, phantom, pos=.8, "\lrcorner"] &
  \mathrm{C}X \ar[d] \\
  {*} \ar[r] &
  \Sigma X
\end{tikzcd}
\]
是推出图表，
这里 $\mathrm{C}X$ 是[[锥空间]]。
:::

### 纬悬–环路伴随

### 与同调的联系

### Freudenthal 纬悬定理

### 余群结构

```terms
纬悬:
  en: suspension
  de: Einhängung :f
  fr: suspension :f
  ja: 懸<けん>垂<すい>
约化纬悬:
  en: reduced suspension
  de: reduzierte Einhängung :f
  fr: suspension réduite :f
  ja: 約<やく>懸<けん>垂<すい>
```
