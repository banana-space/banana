---
title: Tits 系
aliases: [Tits 系统, '$(B,N)$ 对']
categories: [代数群理论]
navboxes: [代数群理论]
---

**Tits 系**是[[约化代数群]]的抽象，
它包含了代数群的 [[Borel 子群]]和 [[Weyl 群]]的信息。

## 定义

::: definition
**Tits 系**是四元组 $(G, B, N, S)$，
其中 $G$ 是[[群]]，$B, N$ 是 $G$ 的子群，
$S$ 是 $N / (B \cap N)$ 的子集，
满足下述条件：

1. $B \cup N$ 生成群 $G$，
   $B \cap N$ 是 $N$ 的[[正规子群]]。

2. $S$ 生成群 $W := N / (B \cap N)$，
   且其所有元素阶均为 2。

3. 对任意 $s \in S$，$w \in W$，$sBw \subset BwB \cup BswB$。

4. 对任意 $s \in S$，$sBs \nsubseteq B$。

:::

## 例子

::: example
对任意域 $K$ 上的一般线性群
$G = \mathrm{GL}_n(K)$，令 $B$ 为其中所有上三角矩阵，
$N$ 为其中所有每行只有一个数非 $0$ 的矩阵，
$S$ 为所有对换 $(i, i+1)$ 相应的矩阵，
则 $(G, B, N, S)$ 构成 Tits 系。
:::

::: example
一般地，对域 $k$ 上（未必分裂的）[[约化代数群]] $G$，
设 $P$ 为其极小[[抛物子群]]，
$T_0 \subset P$ 为极大分裂[[代数环面|环面]]，
$N$ 为 $T_0$ 的[[正规化子]]，
$S$ 为单根对应的元素，则
$(G(k), P(k), N(k), S(k))$ 构成 Tits 系。
:::

在“仿射”情形下也有类似构造：

::: example
令 $K$ 是[[离散赋值域]]，
$G$ 为 $K$ 上半单代数群，$B$ 为其 [[Iwahori 子群]]，
$N$ 为相应环子群的正规化子，则 $W$ 为相应的[[仿射 Weyl 群]]，
$S$ 为它的所有单根构成的集合，则 $(G, B, N, S)$ 为 Tits 系。
:::

## 性质

::: proposition [Bruhat 分解]
记 $C(w) = BwB$，则 $w \mapsto C(w)$ 定义了双射
\[
W \to B \backslash G / B.
\]
:::

Tits 系和 Coxeter 群有密切关系：

::: proposition
如 $(G, B, N, S)$ 是 Tits 系，
则 $(W, S)$ 是 [[Coxeter 群]]，
其中 $W = N / (B \cap N)$。
:::

::: proposition
记号同上，如下等式成立
\[
C(s)C(w) = \left\{
\begin{array}{cc}
  C(sw) & \ell(sw) > \ell(w) \\
  C(sw) \cup C(w) & \ell(sw) < \ell(w).
\end{array}
\right.
\]
:::

$G$ 中包含 $B$ 的子群也有好的描述：

::: proposition
对任意的子集 $X \subset S$，
记 $W_X$ 为 $W$ 中由 $X$ 生成的子群，
则 $X \mapsto B W_X B$ 建立了 $S$ 的子集和 $G$ 中包含
$B$ 的子群的双射，且具有相同的包含关系。
:::

```terms
Tits 系:
  en: Tits system
  de: Tits-System :n
  fr: système de Tits :m
```
