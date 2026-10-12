---
title: 张量积
categories: [线性代数, 模论]
notices:
  - name: 消歧义
    see:
      - page: 张量积（多义词）
navboxes: [线性代数, 模论]
---

**张量积**是[[线性代数]]中的一种构造，常用 $\otimes$ 表示。
两个[[向量空间]]（或更一般地，两个[[模]]）$V, W$ 的张量积 $V \otimes W$
是一个向量空间（或模），它由形如
\[
v \otimes w \quad (v \in V, \ w \in W)
\]
的元素张成，并且满足[[双线性]]关系
\[
\begin{aligned}
  (a_1 v_1 + a_2 v_2) \otimes w &
  = a_1 (v_1 \otimes w) + a_2 (v_2 \otimes w), \\
  v \otimes (a_1 w_1 + a_2 w_2) &
  = a_1 (v \otimes w_1) + a_2 (v \otimes w_2), \\
\end{aligned}
\]
其中 $a_1, a_2$ 是标量。
这种构造使得 $V \times W$ 上的[[双线性函数]]可以等价地看成
$V \otimes W$ 上的[[线性函数]]。

这种构造也可以推广到多个向量空间。
这样，[[多重线性函数]]可以看成是多个向量空间的张量积上的线性函数。
例如，[[内积]]、[[外积]]、[[光滑流形|流形]]上的[[张量]]都是这样的多重线性函数。

张量积是[[乘法]]的[[范畴化]]。
具体地说，[[模]]的[[直和]]可以视为模之间的[[加法]]，可以想象乘法也应有一类似物，即为张量积，
并在适当条件下满足乘法应有的性质，例如结合律、交换律、分配律。

## 定义

::: definition [向量空间的张量积]
设 $\mathbb{k}$ 是[[域]]，
$V, W$ 是 $\mathbb{k}$-[[向量空间]]。
它们的**张量积**是向量空间
\[
V \otimes_{\mathbb{k}} W = \biggl(
  \bigoplus _{ \substack { v \in V \\ w \in W } }
  \mathbb{k} \cdot (v \otimes w)
\biggr) \bigg/ {\sim},
\]
其中[[等价关系]] $\sim$ 由以下关系生成：
\[
\begin{gathered}
  (av) \otimes w
  \sim a(v \otimes w)
  \sim v \otimes (aw), \\
  (v_1 + v_2) \otimes w
  \sim v_1 \otimes w + v_2 \otimes w, \\
  v \otimes (w_1 + w_2)
  \sim v \otimes w_1 + v \otimes w_2,
\end{gathered}
\]
其中 $a \in \mathbb{k}, $
$v, v_1, v_2 \in V, $
$w, w_1, w_2 \in W$。
在无歧义时，张量积也被直接记为 $V \otimes W$。
:::

这一定义也可以推广到[[模]]。

::: definition [模的张量积] {@def-tensor-product-modules}
设 $A$ 是[[环]]，
设 $M_1$ 是 $A$-右[[模]]，$M_2$ 是 $A$-左模。
它们的**张量积** $M_1 \otimes_A M_2$
是一 [[Abel 群]]，其定义如下：

- 首先取形如 $m_1 \otimes m_2\ (m_1 \in M_1, m_2 \in M_2)$ 的元素生成的[[自由 Abel 群]]。

- [[商群|商]]去形如以下三类的元素生成的子群：
  \[
  \begin{aligned}
    (m_1 + m_1') \otimes m_2 & - m_1 \otimes m_2 - m_1' \otimes m_2 \\
    m_1 \otimes (m_2 + m_2') & - m_1 \otimes m_2 - m_1 \otimes m_2' \\
    m_1 a \otimes m_2 & - m_1 \otimes a m_2.
  \end{aligned}
  \]
  其中 $m_1, m_1' \in M_1$，$m_2, m_2' \in M_2$，$a \in A$。

在不引起歧义的情况下，此张量积也简记为 $M_1 \otimes M_2$。
:::

::: remark
在 @def-tensor-product-modules 中，

- 如 $M_1$ 是 $(B, A)$-双模，则 $M_1 \otimes_A M_2$
  带有自然的 $B$-左模结构，由
  $b (m_1 \otimes m_2) = (b m_1) \otimes m_2$ 给出。

- 如 $M_2$ 是 $(A, C)$-双模，则 $M_1 \otimes_A M_2$
  带有自然的 $C$-右模结构，由
  $(m_1 \otimes m_2) c = m_1 \otimes (m_2 c)$ 给出。

特别地，如 $A$ 是[[交换环]]，则 $A$ 上模的张量积仍为 $A$-模。
:::

::: remark [张量表示]
在[[表示论]]中，我们把代数结构的表示视为某个
$k$-[[结合代数|代数]] $A$ 上的模。
但[[张量表示]]一词通常并非指作为模的张量积，
而是指作为 $k$-向量空间的张量积通过
$A$ 的 [[Hopf 代数]]结构（如果有）视为 $A$-模。
:::

## 性质

### 伴随性

::: proposition
对 $A$-右模 $M_1$，$A$-左模 $M_2$，Abel 群 $N$，有下述 Abel 群同构：
\[
\operatorname{Hom}_A (M_1, \operatorname{Hom}_{\mathbb{Z}} (M_2, N))
\simeq \operatorname{Hom}_{\mathbb{Z}} (M_1 \otimes_A M_2, N).
\]
如 $M_1$、$M_2$、$N$ 带有其它结构（例如 $M_1$ 是 $(B, A)$-双模，
$N$ 是 $B$-左模），此一同构也与这些结构相容。

特别地，如 $A$ 是交换环，$N$ 是 $A$-模，有下述 $A$-模同构：
\[
\operatorname{Hom}_A (M_1, \operatorname{Hom}_A(M_2, N))
\simeq \operatorname{Hom}_A (M_1 \otimes_A M_2, N).
\]
:::

::: remark
上述命题在范畴论的语言之下可以表述为：
\[
(- \otimes_A M)\ \dashv \ \operatorname{Hom}_{\mathbb{Z}}(M, -) \quad
\mathsf{Mod}_A \rightleftarrows \mathsf{Ab}
\]
为 Abel 群范畴与 $A$-右模范畴之间的伴随函子。
如具有上述其它结构，也有类似伴随性。例如对交换环 $A$，
\[
(- \otimes_A M)\ \dashv \ \operatorname{Hom}_A(M, -) \quad
\mathsf{Mod}_A \rightleftarrows \mathsf{Mod}_A
\]
为 $A$-模范畴到其自身的伴随函子。
:::

::: remark
对域 $k$ 上[[向量空间]] $V_1, V_2$，上述同构即为
\[
\operatorname{Hom}_k (V_1, \operatorname{Hom}_k(V_2, k))
\simeq \operatorname{Hom}_k (V_1 \otimes V_2, k).
\]
左式即为 $V_1, V_2$ 上的[[多重线性函数]]，右式即为 $V_1 \otimes_k V_2$ 上的线性函数。
这即说明了张量积的定义确实符合其动机。
:::

### 零元与单位元

::: proposition [零元]
对任意 $A$-左模 $M$，$A$-右模 $N$，有如下同构：
\[
\begin{aligned}
  0 \otimes_A M \simeq 0, & \quad 0 \otimes m \mapsto 0,\\
  N \otimes_A 0 \simeq 0, & \quad n \otimes 0 \mapsto 0.
\end{aligned}
\]
其中 $0$ 表示[[零模]]。
:::

::: proposition [单位元]
对任意 $A$-左模 $M$，$A$-右模 $N$，有如下同构：
\[
\begin{aligned}
  A \otimes_A M \simeq M, & \quad a \otimes m \mapsto am,\\
  N \otimes_A A \simeq N, & \quad n \otimes a \mapsto na.
\end{aligned}
\]
:::

### 结合律

::: proposition
对 $A$-右模 $M_1$，$(A, B)$-双模 $M_2$，$B$-模 $M_3$，
有自然同构，即 **[[范畴化]]的结合律**，与所有附加结构相容：
\[
(M_1 \otimes_A M_2) \otimes_B M_3 \simeq M_1 \otimes_A (M_2 \otimes_B M_3)
\]
由 $(m_1 \otimes m_2) \otimes m_3 \mapsto m_1 \otimes (m_2 \otimes m_3)$ 给出。

此同构满足[[五边形公理]]。因此，可以无歧义地将这个张量积写成
\[
M_1 \otimes_A M_2 \otimes_B M_3.
\]
:::

::: remark
上述命题表明所有 $A$-双模构成[[幺半范畴]]。
:::

### 交换律

::: proposition
对交换环 $A$ 与 $A$-模 $M_1, M_2$，有自然同构，
即 **[[范畴化]]的交换律**，与所有附加结构相容。
\[
M_1 \otimes_A M_2 \simeq M_2 \otimes_A M_1,
\]
由 $m_1 \otimes m_2 \mapsto m_2 \otimes m_1$ 给出。
此一同构以及之前所述“结合律”满足[[六边形公理]]。
:::

::: remark
上述命题表明交换环 $A$ 上的所有模构成[[对称幺半范畴]]。
:::

### 分配律

::: proposition
对环 $A$ 上的右模 $M_1, M_1'$ 与左模 $M_2, M_2'$ 有自然同构，
即 **[[范畴化]]的分配律**，与所有附加结构相容：
\[
\begin{aligned}
  (M_1 \oplus M_1') \otimes M_2 \simeq (M_1 \otimes M_2) \oplus (M_1' \otimes M_2) \\
  M_1 \otimes (M_2 \oplus M_2') \simeq (M_1 \otimes M_2) \oplus (M_1 \otimes M_2').
\end{aligned}
\]
这里 $\oplus$ 表示直和。
:::

::: remark
上述命题表明所有 $A$-双模范畴上的[[幺半范畴]]
（或交换环 $A$ 模范畴上[[对称幺半范畴]]）结构与[[加性范畴]]结构相容。
:::

::: remark
张量积**不**与模范畴上的 [[Abel 范畴]]结构相容。
:::

```terms
张量积:
  en: tensor product
  de: Tensorprodukt
  fr: produit tensoriel
  grc: τανυστικὸν γενόμενον
  la: productum tensoriale
```
