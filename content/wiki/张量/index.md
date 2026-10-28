---
title: 张量
categories: [线性代数]
navboxes: [线性代数]
---

<disambiguation>
本条目介绍的是线性代数中的张量。关于微分几何中的张量，请参见[[张量场]]。
</disambiguation>

<problems>
- “性质”一节中基变换下张量分量的变换公式似乎有误：左边的指标 $i_1, \dots, i_p, j_1, \dots, j_q$ 在右边又被求和，$A$、$B$ 的下标 $1, \dots, p$ 与 $1, \dots, q$ 似乎应为一组被求和的指标与左边指标的配对。
</problems>

**张量**是[[向量]]的推广。
在 $n$ 维[[向量空间|空间]]中，
一个向量 $v$ 由 $n$ 个分量 $v^1, \dotsc, v^n$ 构成，
而一个 **$(p, q)$-张量** $a$ 则由 $n^{p+q}$ 个分量构成
（@represent-vector-space），
这些分量通常记为
\[
a _{i_1, \dotsc, i_p} ^{j_1, \dotsc, j_q} \quad
(i_1, \dotsc, i_p, j_1, \dotsc, j_q \in \{ 1, \dotsc, n \}).
\]
特别地，向量也就是 $(0, 1)$-张量。

严格地说，张量是指某些特定的[[张量积]]中的元素。
例如，[[向量空间]] $V$ 上的 $(p,q)$-张量就是张量积
$(V^*)^{\otimes p} \otimes V^{\otimes q}$
中的元素（@def-tensor-vector-space）。
换言之，$(p, q)$-张量大致就是“吃掉 $p$ 个向量，就能吐出 $q$ 个向量”的对象
（@tensor-multilinear-vector-space）。

## 定义

### 对向量空间

::: definition {@def-tensor-vector-space}
对[[域]] $\Bbbk$ 上的[[向量空间]] $V$，自然数 $p, q$，
$V$ 上的 **$(p,q)$-张量**是[[张量积]]
\[
(V^*)^{\otimes p} \otimes V^{\otimes q} =
\underbrace{V^* \otimes_{\Bbbk} \dots \otimes_{\Bbbk} V^*}_{p\ \text{个}}
\otimes_{\Bbbk} \underbrace{V \otimes_{\Bbbk} \dots \otimes_{\Bbbk} V}_{q\ \text{个}}
\]
中的一个元素。
:::

::: remark
对交换环 $A$ 上的[[有限生成模|有限生成]][[投射模]] $M$，
也可以类似地定义其上 $(p, q)$-张量，
且本文中所述结论也都成立。
:::

由[[张量积]]的性质，张量与[[多重线性映射]]具有一一对应关系，
见 @tensor-multilinear-vector-space。

有时会给张量加上一些要求，例如对称、交错等。

::: definition
由定义，有自然的商映射
\[
\begin{gathered}
  V^{\otimes p} \twoheadrightarrow \operatorname{Sym}^p(V) \\
  V^{\otimes p} \twoheadrightarrow \wedge^p(V).
\end{gathered}
\]
称 $(p, 0)$-张量 $T$ 为 **$p$ 次对称张量**，如果
$T$ 穿过 $\operatorname{Sym}^p(V)$；
称 $(p, 0)$-张量 $T$ 为 **$p$ 次交错张量**，如果
$T$ 穿过 $\wedge^p(V)$。
:::

可以由定义看出对称就是说交换两个分量后张量不变；
交错就是说只要一个向量组的两个分量相同，则张量在此处取值为 $0$。

## 例子

在给定的[[向量空间]]上，
- $(0, 0)$-张量是它的基域 $\Bbbk$ 中元素，也称为标量；
- $(0, 1)$-张量是它的向量；
- $(1, 0)$-张量对应于它上面的线性函数；
- $(1, 1)$-张量对应于它到自身的[[线性映射]]；
- $(2, 0)$-张量对应于上面的[[双线性型]]。

## 性质

::: proposition [与多重线性映射的关系] {@tensor-multilinear-vector-space}
域 $\Bbbk$ 上的向量空间 $V$ 上的
$(p, q)$-张量 $T$ 与[[多重线性映射]]
\[
\underbrace{V \times \cdots \times V}_{p\ \text{个}} \times
\underbrace{V^* \times \cdots \times V^*}_{q\ \text{个}} \to \Bbbk
\]
一一对应。
:::

通过此一对应，可以将张量写成分量形式。

::: proposition [分量表示] {@represent-vector-space}
固定 $V$ 的一组[[基]] $\{ e_1, \dots, e_n \}$，它给出
$V^*$ 的对偶基 $\{ e^1, \dots, e^n \}$。
对 $(p, q)$-张量 $T$，将它对应于相应的多重线性映射，定义
\[
T_{i_1 \dots i_p}^{j_1 \dots j_q} = T(e_{i_1}, \dots, e_{i_p}, e^{j_1}, \dots e^{j_q}), \quad
i_1, \dots, i_p, j_1, \dots, j_q \in \{ 1, \dots, n \}
\]
则对任意向量
\[
v_j = \sum \alpha^{i}_j e_i, \quad u^j = \sum \beta_{i}^j e^i
\]
可以计算出张量作用在其上的取值：
\[
T(v_1, \dots v_p, u^1, \cdots, u^q) =
\sum_{i, j} \alpha^{i_1}_1 \cdots \alpha^{i_p}_p \beta_{j_1}^1 \cdots \beta_{j_q}^q
T_{i_1 \dots i_p}^{j_1 \dots j_q}
\]
因此张量的性质完全被其分量所体现，可以将张量记为（在固定一组基后）
\[
T = (T_{i_1 \dots i_p}^{j_1 \dots j_q}).
\]
:::

张量的表现形式在向量空间的基的变换下具有等变性。

::: proposition {@equivariant}
对向量空间 $V$ 的两组基 $\{ e_1, \cdots, e_n \}$，
$\{ e_1', \cdots, e_n' \}$，
设相应的张量分量为 $T_{i_1 \dots i_p}^{j_1 \dots j_q}$ 和
${T'}_{i_1 \dots i_p}^{j_1 \dots j_q}$
设相应的变换矩阵为 $A$，即 $e_i' = \sum A_i^j e_j$，$B = A^{-1}$，
则有
\[
{T'}_{i_1 \dots i_p}^{j_1 \dots j_q} =
\sum_{i,j} T_{i_1 \dots i_p}^{j_1 \dots j_q}
A^{i_1}_1 \cdots A^{i_p}_p B_{j_1}^1 \cdots B_{j_q}^q.
\]
:::

张量的对称与交错也在分量形式中被体现。

::: proposition
固定一组 $V$ 的基 $\{ e_1 \cdots e_n \}$，
$(p, 0)$-张量 $T$ 是对称的，当且仅当对任意[[置换]] $\sigma \in \mathfrak{S}_p$，
\[
T_{i_1 \dots i_p} = T_{\sigma(i_1) \dots \sigma(i_p)}.
\]
$(p, 0)$-张量 $T$ 是交错的，
当且仅当对任意[[置换]] $\sigma \in \mathfrak{S}_p$，
\[
T_{i_1 \dots i_p} = \operatorname{sgn}(\sigma) T_{\sigma(i_1) \dots \sigma(i_p)}.
\]
（$\operatorname{sgn}$ 表示置换的符号），
且只要 $i_1, \dots, i_p$ 中有两个相同，
则 $T_{i_1,\dots,i_p}$ 是 $0$。
:::

```terms
张量:
  en: tensor
  de: Tensor :m
  fr: tenseur :m
  grc: τανυστής :m
  la: tensor :m
```
