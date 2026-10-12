---
title: 伴随函子
aliases: [左伴随, 右伴随, 伴随对]
categories: [范畴论]
navboxes: [范畴论]
---

**伴随函子**是[[范畴论]]中无处不在的概念。
粗略地说，一对伴随函子由两个[[函子]]
$F \colon \mathcal{C} \to \mathcal{D}$ 与
$G \colon \mathcal{D} \to \mathcal{C}$ 构成，
满足对任意对象 $x \in \mathcal{C}$ 和 $y \in \mathcal{D}$，有
\[
\mathcal{D} (F x, y) \simeq \mathcal{C} (x, G y).
\]
此时，我们记 $F \dashv G$，并称 $F$ 为**左伴随**，称 $G$ 为**右伴随**。

范畴论中的诸多[[万有构造]]，包括[[极限 (范畴论)|极限]]与[[余极限]]、[[Kan 扩张]]，
都可视为伴随函子的特例。

## 定义

::: definition [伴随函子]
设 $\mathcal{C}, \mathcal{D}$ 是[[范畴]]，
设有[[函子]] $F \colon \mathcal{C} \to \mathcal{D}$ 与
$G \colon \mathcal{D} \to \mathcal{C}$。
我们说 $F$ 与 $G$ 构成一对**伴随函子**，
如果对 $x \in \mathcal{C}$ 与 $y \in \mathcal{D}$，
有[[自然同构]]
\[
\mathcal{D} (F x, y) \simeq \mathcal{C} (x, G y),
\]
这里，我们将两边都看作
$\mathcal{C}^{\mathrm{op}} \times \mathcal{D} \to \mathsf{Set}$ 的函子。

此时，我们说 $F$ 是 $G$ 的**左伴随**，
$G$ 是 $F$ 的**右伴随**，并记 $F \dashv G$。
:::

## 例子

- **[[自由–遗忘伴随]]** 是伴随函子的一类基本例子。
  例如，设 $\mathbb{k}$ 是[[域]]。
  自由函子 $F \colon \mathsf{Set} \to \mathbb{k}\text{-}\mathsf{Vect}$
  将集合 $X$ 映到其生成的自由向量空间 $\bigoplus_{x \in X} \mathbb{k}$，
  而遗忘函子 $G \colon \mathbb{k}\text{-}\mathsf{Vect} \to \mathsf{Set}$
  将向量空间 $V$ 映到其所有元素的集合。则等式
  \[
  \mathbb{k}\text{-}\mathsf{Vect} (FX, V) \simeq
  \mathsf{Set} (X, GV)
  \]
  说明，从集合 $X$ 到向量空间 $V$ 的映射等价于从 $X$ 生成的向量空间到 $V$ 的线性映射。

- **[[代数–几何对偶]]** 给出了一类伴随函子。
  例如，记 $\mathsf{Sch}$ 为[[概形]]（几何对象）的范畴，
  记 $\mathsf{CRing}$ 为[[交换环]]（代数对象）的范畴。
  函子 $F \colon \mathsf{Sch} \to \mathsf{CRing}^{\mathrm{op}}$
  将概形 $X$ 映到其函数环 $\mathcal{O}_X (X)$，
  函子 $G \colon \mathsf{CRing}^{\mathrm{op}} \to \mathsf{Sch}$
  将环 $A$ 映到它的[[素谱|谱]] $\operatorname{Spec} A$。
  我们有等式
  \[
  \mathsf{CRing} (A, \mathcal{O}_X (X)) \simeq
  \mathsf{Sch} (X, \operatorname{Spec} A),
  \]
  也就是 $F \dashv G$。

- **[[余极限]]** 是常值函子的左伴随。
  范畴 $\mathcal{C}$ 中的[[交换图|图表]]可以看成某个[[小范畴]] $I$ 到 $\mathcal{C}$
  的函子，其中 $I$ 是由该图表的顶点和箭头构成的范畴。
  假设 $\mathcal{C}$ 具有函子性的余极限。
  则有函子 $F \colon \mathsf{Fun} (I, \mathcal{C}) \to \mathcal{C}$，
  它将一个图表映到它的余极限。
  另外有常值函子 $G \colon \mathcal{C} \to \mathsf{Fun} (I, \mathcal{C})$，
  它将对象 $x \in \mathcal{C}$ 映到取值 $x$ 的常值函子。
  则 $F$ 是 $G$ 的左伴随。

- 类似地，**[[极限 (范畴论)|极限]]** 是常值函子的右伴随。

## 性质

### 唯一性

如 $G,G'$ 都是 $F$ 的右伴随，则有[[自然同构]] $G\simeq G'$。
这是因为 $\mathcal{C}(x,Gy)\simeq\mathcal{D}(Fx,y)
\simeq\mathcal{C}(x,G'y)$，然后由 [[Yoneda 引理]]即得。

### 连续性

如 $F\colon\mathcal{C}\to\mathcal{D}$ 与
$G\colon\mathcal{D}\to\mathcal{C}$ 伴随，
则 $F$ [[余连续]]，$G$ [[连续 (范畴论)|连续]]，
即 $F$ 保持[[余极限]]，$G$ 保持[[极限 (范畴论)|极限]]。
两件事的证明是一样的，在此示范一边。

::: theorem
$F$ 保持余极限。具体来说，对 $\mathcal{C}$ 中图表 $c\colon
I\to\mathcal{C}$，如下式左边的余极限存在，则右边的也存在，
且两边自然同构。
$$
F\operatornamewithlimits{colim}_{i\in I}c_i\simeq
\operatornamewithlimits{colim}_{i\in I}Fc_i.
$$
:::

::: proof
要证明式子左边是 $Fc_i$ 的余极限。这是因为
$$
\mathcal{D}(F\operatornamewithlimits{colim}_{i\in I}
c_i,-)\simeq
\mathcal{C}(\operatornamewithlimits{colim}_{i\in I}
c_i,G-)\simeq
\lim_{i\in I}\mathcal{C}(c_i,G-)\simeq
\lim_{i\in I}\mathcal{D}(Fc_i,-)
$$
以及余极限的定义。
:::

### 伴随函子定理

如果 $\mathcal{C}$ 有所有余极限，
$F\colon\mathcal{C}\to\mathcal{D}$ 保持余极限，
则读者可能幻想通过对 $y\in\mathcal{D}$ 定义
$$
Gy=\operatornamewithlimits{colim}_{\{(x,f)\mid
x\in\mathcal{C},\,f\colon Fx\to y\}}x
$$
取出 $F$ 的右伴随 $G$。这不太可能行得通，
因为范畴不太可能具有指标范畴和自身一样大或比自身还大的余极限。
但这在特定的小生成条件下行得通，这就是[[伴随函子定理]]。
证明见主条目。

::: theorem
$F\colon\mathcal{C}\to\mathcal{D}$ 是[[可表现范畴]]之间的函子。则

- $F$ 有右伴随当且仅当其保持余极限。

- $F$ 有左伴随当且仅当其[[可达函子|可达]]且保持极限。

:::

这里的结论不对偶是因为可表现范畴这个概念就不对偶。
它表达的是范畴可由其一个小子范畴用余极限来生成。

```terms
伴随函子:
  en: adjoint functor
  de: adjungierter Funktor
  fr: foncteur adjoint
  la: functor adjunctus
```
