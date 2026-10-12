---
title: 既约概形
aliases: [约化概形]
categories: [概形论]
navboxes: [概形论]
---

在[[代数几何]]中，
**既约概形**是一类[[概形]]。
这类概形中不存在“模糊的”部分。
例如，在下面四条平面曲线中，
左边两条是既约的，而右边两条不是既约的。
\[
\begin{tikzpicture}
  \begin{scope}
    \draw[scale=0.75, domain=-1.4:1.4, smooth, thick] plot ({\x}, {\x*\x});
    \node at (0, -.6) {$y-x^2 = 0$};
    \node at (0, -1.1) {$\operatorname{Spec} k[x,y]/(y-x^2)$};
  \end{scope}
  \begin{scope}[shift={(4,0)}]
    \draw[scale=0.75, domain=-1.4:1.4, smooth, line width=5, black!25] plot ({\x}, {\x*\x});
    \draw[scale=0.75, domain=-1.4:1.4, smooth, thick] plot ({\x}, {\x*\x});
    \node at (0, -.6) {$(y-x^2)^2 = 0$};
    \node at (0, -1.1) {$\operatorname{Spec} k[x,y]/((y-x^2)^2)$};
  \end{scope}
  \begin{scope}[shift={(0,-3.6)}]
    \draw[thick] (-1.5, 0) -- (1.5, 0) (0, -1.5) -- (0, 1.5);
    \node at (0, -2) {$x y = 0$};
    \node at (0, -2.5) {$\operatorname{Spec} k[x,y]/(xy)$};
  \end{scope}
  \begin{scope}[shift={(4,-3.6)}]
    \draw[line width=12, black!8] (-1.5, 0) -- (1.5, 0);
    \draw[line width=5, black!25] (-1.5, 0) -- (1.5, 0);
    \draw[thick] (-1.5, 0) -- (1.5, 0) (0, -1.5) -- (0, 1.5);
    \node at (0, -2) {$x y^3 = 0$};
    \node at (0, -2.5) {$\operatorname{Spec} k[x,y]/(xy^3)$};
  \end{scope}
\end{tikzpicture}
\]

考虑未必既约的概形是现代代数几何有别于古典代数几何的重要特征。
古典代数几何中只考虑方程的零点集，
故并不区分上图的每行中左边和右边的概形。
换言之，即只考虑多项式零点集上的既约子概形结构
（@既约闭子概形）。

概形中模糊的部分可以看作对应的“清晰”部分的无穷小邻域。
因此，未必既约的概形可以用于描述概形的[[形变理论]]。

既约概形是[[既约环]]的整体版本，
也就是说它在局部上是既约环的[[素谱|谱]]，
并且满足此一性质的概形都是既约概形。

## 定义

::: definition
称 [[概形]] $(X, \mathcal{O}_X)$ 为**既约概形**，
如果下列等价条件成立：

- 对每点 $x \in X$，[[茎]] $\mathcal{O}_{X,x}$ 是[[既约环]]。

- 存在仿射开覆盖 $\{ \operatorname{Spec} A_i \to X \}_{i \in I}$，
  其中每个 $A_i$ 都是既约环。

- 对任意开集 $U \subset X$，
  都有 $\mathcal{O}_X (U)$ 是既约环。

:::

## 性质

::: proposition [诱导既约闭子概形] {@既约闭子概形}
对任何概形$X$及其闭子集$T \subset X$，
均存在唯一的[[闭子概形]] $Z \subset X$ 满足：

- $Z$的底空间为$T$。

- $Z$是既约概形。

称 $Z$ 为子集 $T$ 对应的**诱导既约闭子概形**，
其概形结构称为 $T$ 上的**诱导既约概形结构**。

这个构造是典范的。具体而言，即对任何从既约概形$Y$到$X$的态射$f$，若作为集合有$f(Y)\subseteq T$，
则存在$g:Y\to Z$使得$f$可以分解为$g$与[[闭浸入]]$Z\to X$的复合。
:::

令$T$为整个$X$，可以定义概形的约化：

::: definition [既约化]
对概形$X$，定义其**既约化**$X_\mathrm{red}$为于（@既约闭子概形）中
令$T$为整个$X$得到的诱导既约闭子概形。
:::

不难发现$X_\mathrm{red}=(X, \mathcal{O}_X/\operatorname{nil}\mathcal{O}_X)$，且它
具有泛性质：对任何从既约概形$Y$到$X$的态射$f$，
存在$g:Y\to X_\mathrm{red}$使得$f$可以分解为$g$与[[闭浸入]]$X_\mathrm{red}\to X$的复合。

类似流形上的函数，既约概形的任何截面均由其于各点的取值决定：

::: proposition [取值决定截面] {@取值决定截面}
若既约概形$X$的局部截面 $f,g\in \mathcal{O}_X(U)$满足对
任意$p\in U$，$f$ 与 $g$ 在剩余类域 $\kappa(p)$ 的像相等，
则$f=g$。
:::

```terms
既约概形:
  en: reduced scheme
  fr: schéma réduit
诱导既约概形结构:
  en: reduced induced scheme structure
  fr: structure réduite induite
```
