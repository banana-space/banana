---
title: 余核
categories: [一般代数, 范畴论]
navboxes: [范畴论]
---

在[[代数学]]和[[范畴论]]中，
[[映射]] $f \colon X \to Y$ 的**余核**
指 $Y$ 模去 $f$ 的[[像]]所得的[[商对象]]，
通常记为
\[
\operatorname{coker} f.
\]
其具体定义取决于具体考虑的代数结构。它是[[核]]的[[对偶]]概念。

## 例子

### 对群同态

::: definition [群同态的余核] {@def-cokernel-groups}
设 $f \colon G \to H$ 是[[群]]同态。
则 $f$ 的**余核**定义为
\[
\operatorname{coker} f
= H / N,
\]
其中 $N$ 是 $f$ 的像 $f (G)$
在 $H$ 中的[[正规子群|正规闭包]]。
:::

当 $G$ 和 $H$ 是 [[Abel 群]]时，像 $f (G)$ 已经是正规子群，
余核简化为 $H / f (G)$。

### 对模同态

[[模]]同态的余核的定义最为直接。

::: definition [模同态的余核] {@def-cokernel-modules}
设 $A$ 是环，
$f \colon M \to N$ 是 $A$-左[[模]]之间的同态。
则 $f$ 的**余核**定义为
\[
\operatorname{coker} f = N / \operatorname{im} f.
\]
:::

模同态 $f \colon M \to N$ 的余核是 $N$ 的[[商模]]。

### 对环同态

[[环]]同态的余核需要区分加法群层面和环层面。

::: definition [环同态的余核] {@def-cokernel-rings}
设 $f \colon A \to B$ 是[[环]]同态。
将环视为 $\mathbb{Z}$-模，
$f$ 作为加法群同态的余核是
$B / f (A)$（@def-cokernel-modules）。
但 $f (A)$ 不一定是 $B$ 的[[理想]]，
故 $f$ 作为环同态的**余核**定义为
\[
\operatorname{coker} f
= B / \langle f (A) \rangle,
\]
其中 $\langle f (A) \rangle$ 是 $f (A)$ 在 $B$ 中
生成的[[双边理想]]。
:::

### 对线性映射

在 @def-cokernel-modules 中，
如果 $A$ 是[[域]]，那么 $A$-模就是 $A$-[[向量空间]]，
其定义可以重新叙述如下。

::: definition [线性映射的余核] {@def-cokernel-vector-spaces}
设 $\mathbb{k}$ 是[[域]]，
$f \colon V \to W$ 是 $\mathbb{k}$-[[线性映射]]。
则 $f$ 的**余核**定义为
\[
\operatorname{coker} f = W / \operatorname{im} f.
\]
:::

线性映射 $f \colon V \to W$ 的余核是 $W$ 的[[商向量空间]]。

## 一般定义

::: definition [余核] {@def-cokernel-as-pushout}
设 $\mathcal{C}$ 是[[范畴]]，
带有[[零对象]] $0 \in \mathcal{C}$。
设 $f \colon X \to Y$ 是 $\mathcal{C}$ 中的态射。
则 $f$ 的**余核**（如果存在）定义为以下[[推出]]：
\[
\begin{tikzcd}
  X \ar[r, "f"] \ar[d] \ar[dr, phantom, pos=.8, "\lrcorner"] &
  Y \ar[d] \\
  0 \ar[r] &
  \operatorname{coker} f \rlap{.}
\end{tikzcd}
\]
有时，我们也将上述图表中的态射
$Y \to \operatorname{coker} f$
称为 $f$ 的**余核**。
:::

::: remark
@def-cokernel-as-pushout 中的推出可以等价地表述为下面的[[泛性质]]：
对任意态射 $g \colon Y \to Z$，
如果 $g \circ f = 0$，
那么存在唯一态射
$\operatorname{coker} f \to Z$，
使得复合态射
$Y \to \operatorname{coker} f \to Z$
等于 $g$。
:::

```terms
余核:
  en: cokernel
```
