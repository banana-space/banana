---
title: 可分代数
categories: [一般代数]
navboxes: [代数结构]
---

在[[范畴论]]中，**可分代数**是[[幺半范畴]]中的一类特殊[[结合代数|代数]]，
常用来从旧幺半范畴构造它的[[模范畴(代数)|双模范畴]]。

## 定义

::: definition [可分代数]
设$\cal C$是幺半范畴，$(A, m, \iota)$是$\cal C$中的[[代数]]。如果
\[
m: A\otimes A \rightarrow A
\]
在$A$-$A$双模范畴中[[分裂态射|分裂]]，称$A$**可分**。
即存在双模映射
\[
\Delta: A \rightarrow A \otimes A
\]
使$m \circ \Delta = \mathrm{id}_{A}$。
:::

这里 $A\otimes A$ 上的 $A$-$A$ 双模结构是外侧作用：
$A$ 在第一个张量因子上左作用，在第二个张量因子上右作用。
以下省略幺半范畴的结合约束和单位约束。

## 可分幂等元

::: proposition
设 $(A,m,\iota)$ 是幺半范畴 $\mathcal C$ 中的代数。
则 $A$ 可分当且仅当存在态射
\[
e:\mathbb 1\longrightarrow A\otimes A
\]
满足
\[
m\circ e=\iota
\]
以及
\[
(m\otimes\operatorname{id}_A)
\circ(\operatorname{id}_A\otimes e)
=
(\operatorname{id}_A\otimes m)
\circ(e\otimes\operatorname{id}_A).
\]
这样的态射 $e$ 称为 $A$ 的**可分幂等元**。
:::

::: proof
若
\[
\Delta:A\longrightarrow A\otimes A
\]
是乘法 $m$ 的 $A$-$A$ 双模右逆，令
\[
e=\Delta\circ\iota.
\]
则 $m\circ e=\iota$，而第二个等式正是 $\Delta$ 为双模映射的条件。

反之，给定满足上述条件的 $e$，定义
\[
\Delta
=
(m\otimes\operatorname{id}_A)
\circ(\operatorname{id}_A\otimes e)
=
(\operatorname{id}_A\otimes m)
\circ(e\otimes\operatorname{id}_A).
\]
则 $\Delta$ 是 $A$-$A$ 双模映射，并且
$m\circ\Delta=\operatorname{id}_A$。
:::

## 例子

::: example
任意幺半范畴的幺半单位 $\mathbb 1$ 都是可分代数。
事实上，其乘法
\[
\mathbb 1\otimes\mathbb 1\longrightarrow\mathbb 1
\]
是同构。
:::

::: example [有限可分域扩张]
设 $k\subseteq K$ 为有限[[域扩张]]。把 $K$ 看作
$\mathbf{Vect}_k$ 中的交换代数对象，则扩张$K/k$[[可分扩张|可分]]等价于
$K$是可分代数。
:::

::: example [矩阵代数]
对任意域 $k$，矩阵代数 $M_n(k)$ 是可分 $k$-代数。
设 $E_{ij}$ 是矩阵单位，则
\[
e=\frac1n\sum_{i,j=1}^n E_{ij}\otimes E_{ji}
\]
是可分幂等元。
:::

::: example [有限群的群代数]
设 $G$ 是有限群，$k$ 是域。如果
$\operatorname{char}k$ 不整除 $|G|$，则[[群代数]] $k[G]$
是 [[分次向量空间|$G$-分次向量空间范畴]]中的可分 $k$-代数。可分幂等元是
\[
e=\frac{1}{|G|}
\sum_{g\in G}g\otimes g^{-1}.
\]
:::

## 模范畴与相对张量积

可分代数的一个主要用途是构造模范畴中的[[相对张量积]]。

设 $M$ 是右 $A$-模，$N$ 是左 $A$-模，$e$ 是 $A$ 的可分幂等元。
记两个模作用分别为
\[
\rho_M:M\otimes A\longrightarrow M,
\qquad
\lambda_N:A\otimes N\longrightarrow N.
\]
则复合
\[
p_{M,N}
=
(\rho_M\otimes\lambda_N)
\circ
(\operatorname{id}_M\otimes e\otimes\operatorname{id}_N)
:
M\otimes N\longrightarrow M\otimes N
\]
是幂等态射。

如果 $\mathcal C$ 是[[幂等完备范畴|幂等完备]]的，
可以把 $M\otimes_A N$ 实现为 $p_{M,N}$ 的像。
在适当条件下，$A$-$A$ 双模范畴因此关于
$\otimes_A$ 成为幺半范畴。

这也是可分代数经常用于从原幺半范畴构造新范畴的原因。
