---
title: 对称幺半范畴
categories: [范畴代数]
navboxes: [范畴论]
---

<problems>
- “性质”一节中的命题缺少证明。
</problems>

在[[范畴论]]中，**对称幺半范畴**是满足对称条件的[[辫范畴]]。
大致来说，它是交换次序与交换路径无关的辫范畴。
因此，对称幺半范畴上可以定义没有歧义的交换作用。

## 定义

### 显式定义

::: definition [对称幺半范畴] {@thm:显式定义}
一个辫范畴$(\mathcal{C}, \otimes, c)$称为是**对称的**，如果复合态射
\[
c_{Y,X} \circ c_{X,Y} \colon
X \otimes Y \to Y \otimes X \to X \otimes Y
\]
是[[恒等态射]]。这个条件被称为**对称条件**。对称幺半范畴是对称的辫范畴。
:::

::: remark
对称幺半范畴是辫范畴的[[性质]]而非[[结构]]。它没有引入新的数据。
:::

### 利用算畴

使用算畴可以得到对称幺半范畴更为典范的定义，
这种定义无需提及[[幺半范畴|五边形公理]]和[[辫幺半范畴|六边形公理]]。

首先回顾以下[[交换算畴]]相关的记号。
记 $\mathsf{Comm}^\otimes$ 为交换算畴的全范畴，
即[[带点范畴|带点]]有限集范畴 $\mathsf{Fin}_*$。
令 $[n]$ 表示集合 $\{1, \cdots, n, *\}$，
$p_{i,n}$ 表示其中的态射
\[
[n] \to [1],
\quad j \mapsto
\begin{cases}
  1  &  i=j \\
  {*}  &  i \neq j.
\end{cases}
\]

::: definition [对称幺半算畴] {@算畴定义}
**全对称幺半范畴**是[[异纤维范畴]]
$p \colon \mathcal{C}^{\otimes} \to \mathsf{Comm}^\otimes$，
满足以下[[前推]]函子之积
\[
p_{1,n,*} \times \cdots \times p_{n,n,*}
\colon p^{-1}([n]) \to
p^{-1}([1]) \times \cdots \times p^{-1}([1])
\]
为[[范畴等价]]。这里 $p^{-1}$ 表示对象的纤维。

**对称幺半范畴**是四元组
$(\mathcal{C}, \mathcal{C}^\otimes, p, q)$，
其中
$p \colon \mathcal{C}^\otimes \to \mathsf{Comm}^\otimes$
是全对称幺半范畴，
\[
q \colon \mathcal{C} \simeq p^{-1}([1])
\]
是[[范畴等价]]。
:::

这种定义也可以自然地推广到 [[$\infty$-范畴]]论中，
成为[[对称幺半 $\infty$-范畴]]。

## 性质

::: proposition
@thm:显式定义 和 @算畴定义 等价。
:::

## 例子

- [[集合范畴]]$\mathsf{Set}$以笛卡尔积为幺半结构，是对称范畴，其对称性来自笛卡尔积的对称性。
- $k$是域，$k$-[[向量空间|向量空间范畴]]$\mathsf{Vect}_k$是对称幺半范畴，
  其对称性来自张量积的[[泛性质]]。
- $k$是域，$G$是群，$k$-线性空间上的[[群表示范畴|$G$-表示范畴]]$\mathsf{Rep}(G)$是一个对称幺半范畴。
- $k$是域，$G$是群，其中$\mathbb{Z}_2 \subset Z(G)$，
  则[[超群表示范畴]]$\mathsf{sRep}(G)$是一个对称幺半范畴。

```terms
对称幺半范畴:
  en: symmetric monoidal category
  de: symmetrische monoidale Kategorie
  fr: catégorie monoïdale symétrique
  la: categoria monoides symmetrica
  grc: συμμέτρα μονοειδὴς κατηγορία
```
