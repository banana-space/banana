---
title: 闭图像定理
categories: [泛函分析]
navboxes: [泛函分析]
---

在[[泛函分析]]中，
**闭图像定理**是对 [[Banach 空间]]的[[完备空间|完备性]]的一种刻画，
是 [[Baire 纲定理]]的直接推论之一。
该定理表明，Banach 空间之间的闭算子都是连续的。

## 陈述

::: theorem
设 $ X , Y $ 是Banach空间，$T \colon X \to Y$是线性算子，
它的图像定义为$X\times Y$的子空间
$$
G(T):=\{(x, y)\in X \times Y \mid y=Tx\},
$$
其中$X\times Y$上的范数取
$$
\|(x, y)\|_{X\times Y}:=\|x\|_X+\|y\|_Y.
$$
那么$T$连续当且仅当$T$是闭算子，亦即$G(T)$是闭的。
:::

::: proof
由定义连续算子必然是闭的。反之，我们假设$T$是一个闭算子。
由于$X \times Y$是Banach空间，它的闭子空间$G(T)$也是Banach空间，
从而我们可以考虑映射$(x, y) \mapsto x$。
显然它是一个由$G(T)$到$X$的连续双射，由[[开映射定理|Banach 逆算子定理]]可以知道它的逆也连续。
这意味着对$\forall x\in X$
$$
\|Tx\|_Y \leq \|(x, Tx)\|_{X\times Y} \leq C\|x\|_X.
$$
:::

::: remark
此时的闭性也可以表述为对于任意的序列$x_n\to x$，$Tx_n\to y$，
我们都有$y=Tx$。这在闭性的验证中非常常见。
:::

::: remark
此处$Y$完备性是无关紧要的，因为我们总可以对它做完备化，
但是$X$的完备性是至关重要的。考虑求导算子
$\frac{\text{d}}{\text{d}x} \colon (H^1(\mathbb{R}),
  \|\cdot\|_{L^2}) \to L^2(\mathbb{R})$，
它作为一个原空间不完备的闭算子是不连续的。
:::

## 应用

作为该定理的一个直接推论，Hellinger–Toeplitz定理指出Hilbert空间中
处处有定义的对称线性算子是有界的：

::: theorem [Hellinger–Toeplitz]
设 $T$ 是Hilbert空间$X$到自身的对称线性算子。这里的对称性
是指它满足如下关系：
$$
\forall x, y\in X, \quad
\langle Tx, y\rangle=\langle x, Ty\rangle.
$$
那么$T$有界。
:::

::: proof
由闭图像定理，只需要验证$T$的闭性。考虑序列$x_n\to x$，$Tx_n\to y$，
对于任意的$w\in X$我们有
$$
\langle w, y\rangle=\lim_{n\to\infty} \langle w, Tx_n\rangle
=\lim_{n\to\infty}\langle Tw, x_n \rangle
=\langle Tw, x \rangle=\langle w, Tx \rangle.
$$
从而有$y=Tx$。
:::

该定理告诉我们无法在Hilbert空间中讨论处处有定义的无界算子。
但 Hilbert空间与无界算子在物理中是极其重要的对象：
在[[量子力学]]中，[[波函数]]定义为 Hilbert
空间中的元素，而[[动量算子]]、[[Hamilton 量算子]]等物理对象都是无界的。
因此如果希望在 Hilbert 空间中讨论无界算子，我们必须缩小它们的定义域。
而在定义域发生改变后，对称条件就不再蕴含自伴，
加大了我们讨论算子谱时的难度。

```terms
闭图像定理:
  en: closed graph theorem
  de: Satz vom abgeschlossenen Graphen
  fr: théorème du graphe fermé
```
