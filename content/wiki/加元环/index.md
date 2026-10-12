---
title: 加元环
aliases: [Adele 环]
categories: [代数数论]
---

[[整体域]] $K$ 的**加元环**
$\mathbb A_K$ 是其所有完备化的[[限制乘积]]。

## 动机

在经典[[代数数论]]中，
人们把数域嵌入到了它的所有 [[Archimedes 赋值]]的[[直积]]中。
比如
\[
\mathbb Q(i) \to \mathbb C \times \mathbb C, \
a + bi \mapsto (a + bi ,a - bi).
\]
这种嵌入把[[代数整数]]映到了一个离散余紧的子群，
即一个[[格]]。
这种嵌入用来证明 [[Dirichlet 单位定理]]、类数有限等定理。

后来 Claude Chevalley 和 André Weil
将[[非 Archimedes 赋值]]也考虑进来，
以使其发挥出更强大的威力。

## 定义

::: definition
假设 $K$ 是整体域，令 $|K|$ 表示 $K$ 的所有[[赋值]]
的等价类。$K_v$ 是 $K$ 对于赋值 $v$ 的[[完备化]]，
$\mathcal{O}_v$ 是 $K_v$ 的整数环（对非 Archimedes 赋值 $v$）。
$K$ 的**加元环**定义为 $K_v$ 相对 $\mathcal{O}_v$ 的
[[限制乘积]]，
\[
\mathbb{A}_K = {\prod_{v \in |K|}} ' K_v.
\]
其中元素称为**加元**，形如 $(a_v)_{v \in |K|}$，
满足对其中的[[非 Archimedes 赋值]] $v$，
除了有限个外，$a_v$ 的绝对值都小于等于 $1$。
:::

::: definition [加元环的拓扑]
每个赋值 $v$ 诱导了 $K_v$ 上的[[拓扑空间|拓扑]]，
$K$ 的加元环 $\mathbb{A}_K$ 的拓扑由相应的限制乘积拓扑
（即乘积拓扑在限制乘积上的限制）给出。
因此，其中开集形如
\[
\prod_{v \in |K|-S} \mathcal{O}_v \times
\prod_{v \in S} W_v,
\]
其中 $W_v$ 为 $K_v$ 的开集，$S$ 为有限集。
:::

## 性质

::: proposition
$K$ 到 $\mathbb{A}_K$ 有自然的嵌入（即单[[环同态]]），由
$a \mapsto (a)_{v \in |K|}$ 给出。
:::

::: proof
$(a)_{v \in |K|}$ 确实在 $\mathbb{A}_K$ 中，
这是由于 $K$ 中非零元素只在有限个赋值的等价类中赋值不为 $1$。
此映射显然为单射和环同态。
:::

::: theorem [强逼近定理]
取任一赋值 $v_0$，
并取赋值的分划 $|K|=S\cup T\cup \{v_0\}$，
其中 $S$ 是有限集。
那么对任意 $a_v\in K_v,\epsilon_v>0,\,v\in S$，
存在 $x\in K$ 使得
\[
\begin{cases}
  |x-a_v|_v<\epsilon_v,&v\in S;\\
  |x|_v\le 1,&v\in T.
\end{cases}
\]
换句话说，
$K$ 在 ${\prod'_{v \ne v_0}} K_v$ 中稠密。
:::

::: corollary
有如下同构：
\[
K\bigg\backslash\mathbb{A}_K
\bigg/\prod_{v\in|K|_f}\mathcal{O}_{K_v}\cong
\mathcal{O}_K\bigg\backslash
\prod_{v\in|K|_{\infty}}K_v.
\]
特别地，
$K$ 在 $\mathbb{A}_K$ 中[[离散]]且[[余紧]]。
:::

## 测度与积分

由于 $\mathbb{A}_K$ 是局部紧 Abel 群，
在上面有[[Haar 测度]]，
从而可以研究积分理论。

::: definition
定义归一化后的 $\mathbb{A}_K$ 上的 Haar 测度如下：

1. 在实赋值处，
   取 [[Lebesgue 测度]] $dx_v=dx$。

2. 在复赋值处，
   取测度 $dx_v=|dz\wedge d\overline{z}|=2|dx\wedge dy|$。

3. 在[[非 Archimedes 赋值]]处，
   取 Haar 测度 $dx_v$ 使得 $dx_v(\mathcal{O}_{K_v})=1$。

然后取 $dx_{\mathbb{A}_K}=\prod_{v\in|K|}dx_v$，
简记为 $dx$。
:::

::: proposition
注意到 $dx$ 可以作商定义在 $\mathbb{A}_K/K$ 上。
我们有
\[
\int_{\mathbb{A}_K/K}dx=
|\mathfrak{d}_{K/\mathbb{Q}}|^{\frac1{2}}.
\]
其中 $\mathfrak{d}_{K/\mathbb{Q}}$ 是 $K/\mathbb{Q}$ 的[[判别式]]。
:::

## 相关构造

$\mathbb{A}_K$ 上的[[一般线性群]]是[[代数数论]]中的重要研究对象。
特别地，$\mathbb{I}_K := \operatorname{GL}_1 (\mathbb{A}_K)$
即[[理元群]]。

```terms
加元环:
  en: adele ring
  fr: anneau adélique
```
