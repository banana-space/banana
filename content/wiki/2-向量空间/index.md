---
title: $2$-向量空间
categories: [高阶范畴论]
navboxes: [2-范畴论]
---

**$2$-向量空间**是[[向量空间]]这一概念的[[范畴化]]。
大致地说，范畴化的过程在对象之间引入态射；
特别地，每个对象可能有非平凡的[[自同构]]。
因此，我们将期待 $2$-向量空间是一个[[范畴]]，
其中的对象，即 **$2$-向量**，
满足与[[向量]]类似的性质，
但会有非平凡的自同构。

这种范畴化的方法并不是唯一的，
因为这取决于如何诠释上文中“与向量类似的性质”。
这导致文献中有若干种不同的概念，都称为 $2$-向量空间。
其中应用最广的有 Kapranov–Voevodsky 和 Baez–Crans 两种。
很难说这两种定义孰优孰劣。
例如，从前者出发，可以发展一套丰富的 [[$2$-线性代数]]理论，
也可以定义 [[$2$-箭图]]等概念。
而后者与[[导出几何]]关系更密切，也是 [[$n$-Lie 理论]]的基础。

## 定义

### Kapranov–Voevodsky 定义

下面的定义来自 [@KapranovVoevodsky1994]。

固定[[域]] $k$，记 $\mathsf{Vect}$ 为 $k$-[[向量空间]]的范畴，
通过向量空间的[[张量积]]视为[[幺半范畴]]。

::: definition
**Kapranov–Voevodsky $2$-向量空间**是同构于
$\mathsf{Vect}^n$ 的 $\mathsf{Vect}$-[[范畴模|模]]，
其中 $n$ 为[[自然数]]。
:::

这样，正如[[向量]]是一列数，$2$-向量则是一列[[向量空间]]。

### Baez–Crans 定义

下面的定义来自 [@BaezCrans2004]。

::: definition
**Baez–Crans $2$-向量空间**由以下等价的信息给出：

- $\mathsf{Vect}$ 中的[[内部范畴]]。

- 只有两项的[[链复形]] $(E^{-1} \to E^0)$，
  其中 $E^{-1}$、$E^0$ 为[[向量空间]]。

- 形如 $[E^0/E^{-1}]$ 的[[商叠]]，其中 $E^{-1}$、$E^0$ 同上。

:::

注意该定义与 [[$2$-群]]的相似性。事实上，正如我们所期待，
Baez–Crans $2$-向量空间确实是交换 $2$-群。

这样，$2$-向量就是带有自同构的普通向量，
且该自同构群也是向量空间。

## 参考文献

原始文献：

```bibliography
BaezCrans2004:
  type: article
  author: ['Baez, John', 'Crans, Alissa']
  title: Higher-dimensional algebra. VI. Lie $2$-algebras
  journaltitle: Theory Appl. Categ.
  volume: 12
  number: 15
  pages: '492-538'
  year: 2004
  arxiv: math/0307263
  zbmath: '1057.17011'
KapranovVoevodsky1994:
  type: article
  author: [Mikhail Kapranov, Vladimir Voevodsky]
  title: $2$-categories and Zamolodchikov tetrahedra equations
  journaltitle: Proc. Symp. Pure Math.
  volume: 56
  number: 2
  pages: '177-259'
  year: 1994
  zbmath: '0809.18006'
  url: https://www.math.ias.edu/vladimir/sites/math.ias.edu.vladimir/files/1994_Kapranov_Voevodsky.pdf
```

```terms
$2$-向量空间:
  en: $2$-vector space
  fr: $2$-espace vectoriel :m
```
