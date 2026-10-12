---
title: 向量空间范畴
categories: [线性代数]
navboxes: [线性代数]
---

**向量空间范畴**是以[[向量空间]]为对象、以[[线性映射]]为态射的[[范畴]]。
对于给定的[[域]] $k$，所有 $k$-向量空间及其间的线性映射构成的范畴记为 $\mathsf{Vect}_k$。

向量空间范畴是[[线性代数]]的范畴论表述。
选定有限维向量空间的基后，线性映射可以用[[矩阵]]表示，
而态射的复合对应矩阵的乘法。

## 定义

::: definition [向量空间范畴] {@def-vector-space-category}
设 $k$ 是[[域]]。
$k$-**向量空间范畴** $\mathsf{Vect}_k$ 由以下资料组成：

- 对象是所有 $k$-[[向量空间]]。

- 对任意对象 $V, W$，从 $V$ 到 $W$ 的态射是所有
  $k$-[[线性映射]]，其集合记为
  \[
  \operatorname{Hom}_k(V, W).
  \]

- 态射的复合是映射的复合。
  具体地说，对线性映射 $f \colon U \to V$ 和
  $g \colon V \to W$，其复合为
  \[
  g \circ f \colon U \to W, \qquad
  u \mapsto g(f(u)).
  \]

- 每个对象 $V$ 的恒等态射是[[恒等映射]]
  \[
  \operatorname{id}_V \colon V \to V, \qquad
  v \mapsto v.
  \]

线性映射的复合仍然是线性映射，恒等映射也是线性映射。
映射的复合满足[[结合律]]和[[单位律]]，
因此这些资料确实构成范畴。
:::

::: definition [有限维向量空间范畴]
$\mathsf{Vect}_k$ 中所有有限维向量空间构成的[[全子范畴]]
称为 $k$-**有限维向量空间范畴**，记为 $\mathsf{Vect}_k^{\mathrm{fd}}$。
:::

## 性质

### 态射空间

对任意 $k$-向量空间 $V, W$，
态射集合 $\operatorname{Hom}_k(V, W)$ 本身也是 $k$-向量空间。
其加法和数乘逐点定义为
\[
\begin{aligned}
  (f + g)(v) & = f(v) + g(v), \\
  (c f)(v) & = c f(v),
\end{aligned}
\]
其中 $f, g \colon V \to W$，$c \in k$，$v \in V$。

态射的复合对两个变量分别是线性的。
因此，$\mathsf{Vect}_k$ 是一个 $k$-[[线性范畴]]。

### 零对象、直和与直积

零向量空间 $0$ 同时是 $\mathsf{Vect}_k$ 的[[始对象]]和[[终对象]]，
因而是[[零对象]]。

两个向量空间 $V, W$ 的[[直和]] $V \oplus W$
同时给出它们在 $\mathsf{Vect}_k$ 中的[[积 (范畴论)|积]]和[[余积]]，
因而是它们的[[双积]]。

对于无限多个向量空间，积与余积则一般不同。
设 $(V_i)_{i \in I}$ 是一族 $k$-向量空间，则它们的积为
\[
\prod_{i \in I} V_i,
\]
而余积为直和
\[
\bigoplus_{i \in I} V_i.
\]
直积允许任意多个分量非零，
直和则只允许有限多个分量非零。

### 核与余核

对任意线性映射 $f \colon V \to W$，其[[核]]
\[
\ker f = \set{v \in V | f(v) = 0}
\]
连同自然的包含映射 $\ker f \to V$，
给出 $f$ 在范畴论意义下的核。

其[[余核]]由[[商空间]]
\[
\operatorname{coker} f = W / \operatorname{im} f
\]
及自然的商映射 $W \to W / \operatorname{im} f$ 给出。

在 $\mathsf{Vect}_k$ 中，[[单态射]]恰好是单射的线性映射，
[[满态射]]恰好是满射的线性映射。
向量空间范畴是[[Abel 范畴]]的基本例子。

### 张量积

向量空间的[[张量积]]给出二元函子
\[
{\otimes_k} \colon \mathsf{Vect}_k \times \mathsf{Vect}_k \to \mathsf{Vect}_k.
\]
对于线性映射 $f \colon V \to V'$ 和 $g \colon W \to W'$，
相应的线性映射
\[
f \otimes g \colon V \otimes_k W \to V' \otimes_k W'
\]
由
\[
(f \otimes g)(v \otimes w) = f(v) \otimes g(w)
\]
确定。

以 $k$ 为单位对象，并配备通常的结合子和单位子，
$(\mathsf{Vect}_k, \otimes_k, k)$ 构成[[幺半范畴]]。
交换两个张量因子的自然同构
\[
V \otimes_k W \to W \otimes_k V, \qquad
v \otimes w \mapsto w \otimes v
\]
进一步使它成为[[对称幺半范畴]]。

此外，直和也给出对称幺半结构 $(\mathsf{Vect}_k, \oplus, 0)$。

```terms
向量空间范畴:
  en: category of vector spaces
  de: Kategorie der Vektorräume
  fr: catégorie des espaces vectoriels
```
