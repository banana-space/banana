---
title: Virasoro 代数
categories: [Lie 理论, 共形场论]
navboxes: [共形场论]
notices:
  - name: 问题
    items:
      - “有序后裔与商模关系”一节需要扩充。
---

**[[Miguel Virasoro|Virasoro]] 代数**是一个 [[Lie 代数]]，
是[[二维共形场论]]和[[弦论]]中的基本构造。

Virasoro 代数是 [[Witt 代数]]唯一的非平凡[[中心扩张]]。
由于 Witt 代数是[[圆环半群]]的 Lie 代数的多项式版本，
而其中心扩张的表示可以看成是 Witt 代数的[[射影表示]]，
故 Virasoro 代数的表示可以看成圆环半群的无穷小射影表示，
而圆环半群的射影表示是[[二维共形场论]]的一个基本信息。

## 定义

::: definition [Virasoro 代数]
设 $c \in \mathbb{C}$。
**中心荷**为 $c$ 的 **Virasoro 代数**
为[[复数|复]] [[Lie 代数]] $\mathrm{Vir}_c$，定义如下。

- 作为向量空间，定义
  \[
  \mathrm{Vir}_c =
  \langle L_n \mid n \in \mathbb{Z} \rangle_{\mathbb{C}} \oplus
  \langle \mathbb{1} \rangle_{\mathbb{C}} ,
  \]
  其中 $\langle {\cdots} \rangle_{\mathbb{C}}$ 表示[[线性生成空间]]。

- $\mathrm{Vir}_c$ 的 Lie 括号定义为
  \[
  \begin{aligned}
    [L_m, L_n] & =
    (m - n) \, L_{m+n} +
    \frac{c}{12} (m^3 - m) \, \delta_{m,-n} \, \mathbb{1}, \\
    [\mathbb{1}, -] & = 0,
  \end{aligned}
  \]
  其中 $\delta_{m,-n}$ 是 [[Kronecker $\delta$ 记号]]。

:::

$\mathrm{Vir}_c$ 是 [[Witt 代数]] $W$ 的[[中心扩张]]：
\[
0 \to \mathbb{C} \to \mathrm{Vir}_c \to W \to 0.
\]
在 Lie 括号的定义中，$(m - n) \, L_{m+n}$ 是 [[Witt 代数]]的 Lie 括号，
后面那一项是中心扩张的不平凡部分。

只要 $c \neq 0$，得到的 $\mathrm{Vir}_c$ 都是互相同构的。
系数 $1/12$ 是物理中的习惯约定。

## 性质

### 表示论

#### 最高权表示

本节考虑 $\mathrm{Vir}_c$ 的[[Lie 代数的表示|表示]]
$\rho\colon\mathrm{Vir}_c\to\operatorname{End}(M)$，
并要求 $\rho(\mathbb{1})=\operatorname{id}_M$。
仍用 $L_n$ 表示其在 $M$ 上的作用算子。
在这个约定下，交换关系的中心项为
$\frac{c}{12}(m^3-m)\delta_{m,-n}\operatorname{id}_M$，
所以表示的中心荷是 $c$。

由 $[L_0,L_n]=-nL_n$，若 $L_0v=hv$，则
\[
L_0(L_nv)=(h-n)L_nv.
\]
因此正模式降低权，负模式提高权。
一个自然的出发点是寻找被所有正模式消去的权向量，
再用负模式构造它的后裔。

::: definition [最高权向量与最高权表示] {@def-vir-highest-weight}
在上述表示 $M$ 中，若非零向量 $v$ 满足
\[
L_0v=hv,\qquad L_nv=0\quad(n>0),
\]
则称 $v$ 为权为 $h\in\mathbb C$ 的**最高权向量**。
若 $M$ 由这样的 $v$ 作为 $\mathrm{Vir}_c$-模生成，
则称 $M$ 为中心荷 $c$、最高权 $h$ 的**最高权表示**。
:::

对于整数 $n_1,\ldots,n_k\geq1$，向量
$L_{-n_1}\cdots L_{-n_k}v$ 称为 $v$ 的**后裔**。

::: proposition [后裔的权] {@prop-vir-descendant-weight}
若 $L_0v=hv$，则
\[
L_0L_{-n_1}\cdots L_{-n_k}v
=(h+n_1+\cdots+n_k)L_{-n_1}\cdots L_{-n_k}v.
\]
因而该后裔若非零，其权为 $h+n_1+\cdots+n_k$。
:::

::: proof
由 $[L_0,L_{-n}]=nL_{-n}$，每次将 $L_0$ 移过一个负模式，
就增加相应的 $n$ 倍后裔。最后使用 $L_0v=hv$，即得结论。
:::

在[[顶点算子代数]]中，
上述最高权向量称为初级态。

#### 有序后裔与商模关系

```terms
Virasoro 代数:
  en: Virasoro algebra
  fr: algèbre de Virasoro :f
  de: Virasoro-Algebra :f
```
