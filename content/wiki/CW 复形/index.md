---
title: CW 复形
categories: [代数拓扑]
navboxes: [代数拓扑]
---

**CW 复形**是一类[[拓扑空间]]，
指通过不断将 $n$ 维[[圆盘]] $D^n$ 沿着其[[边界]] $S^{n-1}$ 粘到空间上，
而最终粘出的空间。

CW 复形是[[代数拓扑]]中的一类重要的空间。
这类空间具有很强的一般性：例如，每个拓扑空间都[[弱同伦等价]]于一个 CW 复形，
这个结论称为 [[CW 逼近]]。
另一方面，这类空间也具有良好的性质。
从[[同伦代数]]的观点看，
CW 复形是拓扑空间的 [[Quillen 模型结构]]中的[[双纤维性对象]]，
这意味着它们是[[同伦型]]的一类最佳的代表元。

## 定义

对 $n = 0, 1, 2, \dotsc$，
记 $D^n$ 为 $n$ 维[[圆盘]]，
记 $S^{n-1}$ 为 $(n-1)$ 维[[球面]]，它是 $D^n$ 的[[边界]]。
注意到 $S^{-1} = \varnothing$ 是[[空空间]]，
$S^0 = {*} \sqcup {*}$ 是两个点构成的[[离散空间]]。

::: definition [粘贴一个胞腔] {@粘贴一个胞腔}
设 $X$ 是[[拓扑空间]]，$n$ 是[[自然数]]。
向 $X$ **粘贴一个 $n$ 维胞腔**的操作是指将 $n$ 维[[圆盘]] $D^n$
沿着其边界 $S^{n-1}$ [[粘贴空间|粘贴]]到 $X$ 上的操作。

具体地说，设
\[
\varphi \colon S^{n-1} \to X
\]
是[[连续映射]]，称为**粘贴映射**。
考虑[[粘贴空间]] $X \sqcup_{\varphi} D^n$，
它是[[拓扑空间范畴]]中的[[推出]]
\[
\begin{tikzcd}
  S^{n-1} \ar[d, hook, "i"'] \ar[r, "\varphi"]
    \ar[dr, phantom, pos=.8, "\lrcorner"] &
  X \ar[d] \\
  D^n \ar[r] &
  X \sqcup_{\varphi} D^n ,
\end{tikzcd}
\]
其中 $i \colon S^{n-1} \hookrightarrow D^n$
是作为边界的含入映射。
则空间 $X \sqcup_{\varphi} D^n$ 就叫做向 $X$ 沿着映射 $\varphi$
**粘贴一个 $n$ 维胞腔**得到的空间。
:::

::: example
球面 $S^n$ 可以视为向[[单点空间]] $*$ 粘贴一个 $n$ 维胞腔（@粘贴一个胞腔）
得到的空间。换言之，我们有[[同胚]]
\[
S^n \simeq {*} \sqcup_{\varphi} D^n,
\]
其中 $\varphi \colon S^{n-1} \to {*}$ 是唯一可能的映射，即[[常值映射]]。
:::

一般地，我们需要考虑粘贴一族（可能无穷多个）胞腔的操作。

::: definition [粘贴一族胞腔] {@粘贴一族胞腔}
设 $X$ 是拓扑空间，$n$ 是自然数。设
\[
( \varphi_i \colon S^{n-1} \to X )_{i \in I}
\]
是一[[族]]连续映射，称为**粘贴映射**。
它们也可以看作一个映射
\[
(\varphi_i)_{i \in I} \colon \coprod_{i \in I} S^{n-1} \to X,
\]
其中 $\coprod$ 表示[[无交并空间]]。
考虑[[粘贴空间]] $X \sqcup_{(\varphi_i)_{i \in I}} \coprod_{i \in I} D^n$，
它是[[拓扑空间范畴]]中的[[推出]]
\[
\begin{tikzcd}
  \coprod_{i \in I} S^{n-1} \ar[d, hook, "j"'] \ar[r, "(\varphi_i)_{i \in I}"]
    \ar[dr, phantom, pos=.8, "\lrcorner"] &
  X \ar[d] \\
  \coprod_{i \in I} D^n \ar[r] &
  X \sqcup_{(\varphi_i)_{i \in I}} \coprod_{i \in I} D^n ,
\end{tikzcd}
\]
其中 $j \colon \coprod_{i \in I} S^{n-1} \hookrightarrow \coprod_{i \in I} D^n$
是作为边界的含入映射。
则空间 $X \sqcup_{\varphi} \coprod_{i \in I} D^n$ 就叫做向 $X$ 沿着映射 $\varphi_i$
**粘贴一族 $n$ 维胞腔**得到的空间。
:::

例如，向空间粘贴一族 $0$ 维胞腔（@粘贴一族胞腔）
等价于向空间添加一族离散的点。

::: definition [CW 复形] {@CW-复形}
**CW 复形**是指拓扑空间 $X$，
它能写成一列子空间
\[
\varnothing = X_{-1}
\subset X_0 \subset X_1 \subset X_2 \subset \cdots
\]
的[[余极限拓扑|余极限]]（即[[并集]]），
其中对每个 $n \geq 0$，
空间 $X_n$ 都是由 $X_{n-1}$ 粘贴一族 $n$ 维胞腔
（@粘贴一族胞腔）
所得到的空间。
此时，空间 $X_n$ 称为 $X$ 的 **$n$ 维骨架**。

如果对某个自然数 $n$，有 $X_n = X$，则称 $X$ 为 **$n$ 维 CW 复形**。
:::

::: remark
在 @CW-复形 中，
空间 $X$ 作为余极限，带有[[余极限拓扑]]，
也就是使得所有含入映射 $X_n \hookrightarrow X$
都连续的最强（或最细）的拓扑。

在历史上，拓扑的“强弱”的概念曾经与现在相反。
因此，在历史文献中，这种拓扑通常被称为**弱拓扑**，
这个名字也被一些人沿用至今。
:::

## 例子

- [[图]]能视为 $1$ 维 CW 复形。

- [[光滑流形]]因具有[[三角剖分]]，而具有 CW 复形结构。

- [[单纯集]]的[[几何实现]]是 CW 复形。

```terms
CW 复形:
  en: CW complex
  de: CW-Komplex :m
  fr: CW-complexe :m
$n$ 维胞腔:
  en: $n$-cell
  de: $n$-Zelle :f
  fr: $n$-cellule :f
$n$ 维骨架:
  en: $n$-skeleton
  de: $n$-Gerüst :n
  fr: $n$-squelette :m
```
