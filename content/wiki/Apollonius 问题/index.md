---
title: Apollonius 问题
categories: [计数几何, 初等几何]
notices:
  - name: 问题
    items:
      - 缺少插图。
      - “严格证明”一节需要扩充。
navboxes: [计数几何]
---

**Apollonius 问题**是[[计数几何]]中的一个经典结论，是说在
[[Euclid 平面]]上，与 $3$ 个给定一般位置的[[圆]]相切的圆的数目为 $8$。
直观上来说，这是因为原来三个圆中，每个都可以选择内切或外切于新的圆，
一共得到 $8$ 种选择。
注意这里需要把虚圆也考虑进来，否则三个圆套起来的情况下就没有和它们相切的圆了。

此结论首先由古希腊数学家 [[Apollonius]] 发现并证明，但证明已经不可考。这是
历史上第一个计数几何问题，也可以视作计数几何的开端。

## 定理与证明

### 思路

在 $\mathbb{C}$ 上的[[射影平面]] $\mathbb{P}^2$ 中，
所有[[二次曲线]]的[[模空间]]是 $\mathbb{P}^5$。
其中，圆（以及其退化情形）等价于包含 $[1,\pm \mathrm{i},0]$ 这两点的二次曲线。
因此圆的模空间是 $\mathbb{P}^3$。

通过具体列方程可以算出，“与给定圆相切”的圆构成 $\mathbb{P}^3$ 中的二次曲面。
因此与三个圆相切的圆是三个二次曲面的交点。
由 [[Bézout 定理]]，在一般位置下有 $8$ 个这样的交点，
且可以计算得知这些交点均不对应退化情形的圆，也就得到了 $8$ 个与原来三个圆相切的圆。

此外，也可以不限于与圆相切，而考虑其他约束条件，例如：

- 过一个固定点的圆构成模空间中的超平面。

- 与一条直线相切的圆构成模空间中的二次曲面。

由 Bézout 定理，也可以算出其他约束条件下圆的数目。
例如过两个点且与一条直线相切的圆在一般位置下有 $2$ 个，
与经典结论相同。

### 严格证明

## 参考文献

```bibliography
3264andallthat:
  type: book
  author: ['Eisenbud, David', 'Harris, Joe']
  year: 2016
  title: '3264 and All That: A Second Course in Algebraic Geometry'
  publisher: Cambridge University Press
```

```terms
Apollonius 问题:
  en: Apollonius' Problem
  de: Das Apolonius-Problem
  fr: Le problème d’Apolonius
```
