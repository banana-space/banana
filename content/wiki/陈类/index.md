---
title: 陈类
aliases: [Chern 类]
categories: [示性类]
navboxes: [向量丛与 K 理论]
---

<disambiguation>
本条目介绍的是[[拓扑学]]里的概念。关于[[代数几何]]里的概念，请参见[[陈类（代数几何）]]。
</disambiguation>

<problems>
- “几何性质”一节需要扩充（陈–Weil 理论与层论的定义）。
</problems>

在[[代数拓扑]]中，
**陈类**是对[[复数|复]][[向量丛]]定义的[[示性类]]，
以[[陈省身]]命名。
对秩 $n$ 的复向量丛 $E \to X$ 而言，其 $n$ 个陈类为[[普通上同调]]类
\[
c_k (E) \in H^{2k} (X; \mathbb{Z}),
\]
其中 $k = 1, \dotsc, n$。
这些示性类反映了向量丛 $E$ 的性质。
从某种意义上说，它们反映了 $E$ 的“扭曲程度”。
例如，若 $E$ 是[[平凡丛]]，则其所有陈类均为 $0$。

## 定义

我们叙述一种简洁而典范的定义，它用到了[[分类空间]]。

[[酉群]] $\mathrm{U} (n)$ 的[[分类空间]] $\mathrm{BU} (n)$ 可以视为
秩 $n$ 的[[复数|复]][[向量丛]]的分类空间。
也就是说，存在万有的复向量丛 $U \to \mathrm{BU} (n)$，
使得任何秩 $n$ 的复向量丛 $E \to X$
都是 $U$ 关于某个映射 $X \to \mathrm{BU} (n)$ 的拉回。
并且，这一构造给出了[[双射]]
\[
\mathrm{Vect}_n (X) \simeq [X, \mathrm{BU} (n)],
\]
其中左边是 $X$ 上秩 $n$ 的复向量丛的同构类的集合，
右边是 $X$ 到 $\mathrm{BU} (n)$ 的[[连续映射]]的[[同伦]]类的集合。

上述事实可以解释如下。
通过[[向量丛]]的[[标架丛]]的构造，
我们可以将复向量丛与 $\mathrm{GL} (n; \mathbb{C})$-[[主丛]]等同起来。
因此，[[拓扑空间]] $X$ 上秩 $n$ 的复向量丛等同于
$X$ 到[[分类空间]] $\mathrm{BGL} (n; \mathbb{C})$ 的映射的同伦类。
而 $\mathrm{BGL} (n; \mathbb{C})$ [[同伦等价]]于 $\mathrm{BU} (n)$，
在文献中习惯使用后者。

可以证明，[[分类空间]] $\mathrm{BU} (n)$ 的[[普通上同调|上同调环]]为
\[
H^\bullet (\mathrm{BU} (n); \mathbb{Z}) \simeq \mathbb{Z} [c_1, \dots, c_n],
\]
其证明可以暂时参见[讲义：示性类](/books/示性类/Graßmann_流形的上同调/)。
这里，元素 $c_k$ 就称为第 $k$ 陈类，
它是一种[[示性类]]，也就是说，
对于任何复向量丛 $E \to X$，若 $f_E \colon X \to \mathrm{BU} (n)$
是上述对应关系下 $E$ 所对应的映射，
则可定义 $c_k (E) = f_E^* (c_k)$ 为 $E$ 的第 $k$ 陈类。
上述同构也说明，陈类及其多项式给出了复向量丛所有可能的示性类。

::: definition [陈类]
对[[自然数]] $n, k$，定义**陈类**
\[
c_k \in H^{2k} (\mathrm{BU} (n); \mathbb{Z})
\]
为以下性质决定的[[普通上同调|上同调]]类。

- $c_0 = 1$，且若 $k > n$，则 $c_k = 0$。

- 若 $n = k = 1$，则元素 $c_1 \in H^2 (\mathrm{BU} (1); \mathbb{Z})$
  是其自然的生成元，
  由[[普通上同调]]的可表性及[[同伦等价]]
  $\mathrm{BU} (1) \simeq K (\mathbb{Z}, 2)$ 给出。

- 若 $\oplus \colon \mathrm{BU} (m) \times \mathrm{BU} (n) \to \mathrm{BU} (m+n)$
  是直和映射，则 $\oplus^* (c_k) = \sum_{j=0}^{k} c_j \boxtimes c_{k-j}$。

定义**全陈类**
\[
c = 1 + c_1 + \cdots + c_n \in H^\bullet (\mathrm{BU} (n); \mathbb{Z}).
\]
:::

::: definition [向量丛的陈类]
设 $X$ 为[[仿紧空间]]，
$p \colon E \to X$ 为秩 $n$ 的[[复数|复]][[向量丛]]。
记 $f_E \colon X \to \mathrm{BU} (n)$ 为其对应的映射。
对 $k = 1, \dotsc, n$，定义 $E$ 的**第 $k$ 陈类**为
\[
c_k (E) = f_E^* (c_k) \in H^{2k} (X; \mathbb{Z}),
\]
并定义 $E$ 的**全陈类**为
\[
c(E) = f_E^* (c) = 1 + c_1 (E) + \cdots + c_n (E)
\in H^{\bullet} (X; \mathbb{Z}).
\]
:::

## 例子 {@例子}

- 对正整数 $n$，
  [[复射影空间]] $\mathbb{C}\mathrm{P}^n$ 上的[[重言线丛]]
  $\mathcal{O}(-1)$ 之全陈类为 $1 - H$，
  其中 $H$ 为[[超平面类]]，即子复流形 $\mathbb{C}\mathrm{P}^{n - 1}$
  在 [[Poincaré 对偶]]下对应的上同调类。

## 性质

### 基本性质

以下性质是定义的直接推论。

- 对拓扑空间的连续映射 $f \colon Y \to X$ 和 $X$ 上的复向量丛 $E$，
  有 $f^*(c(E)) = c(f^*(E))$。

- （[[Whitney 乘积公式]]）对 $X$ 上的复向量丛 $E$、$F$，
  有 $c (E \oplus F) = c(E) \, c(F)$。

下面的命题描述了陈类与[[张量积]]的联系。

::: proposition [张量积]
对 $X$ 上的复线丛 $L_1, L_2$，
有 $c_1 (L_1 \otimes L_2) = c_1(L_1) + c_1(L_2)$。

通过[[分裂原理]]，可以由此得到一般向量丛张量积的陈类的公式。
:::

### 几何性质

## 推广

- [[色谱同伦论]]

```terms
陈类:
  en: Chern class
  de: Chernklasse
  fr: classe de Chern
全陈类:
  en: total Chern class
  de: totale Chernklasse
  fr: classe de Chern totale
```
