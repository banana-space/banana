---
title: 介值定理
categories: [实分析]
notices:
  - name: 区分
    pages:
      - 中值定理
navboxes: [微积分学]
---

在[[微积分学]]中，
**介值定理**是指如下定理：
若有[[连续映射|连续函数]] $f \colon [a, b] \to \mathbb{R}$，
则介于 $f (a)$ 与 $f (b)$ 之间的所有实数都能被 $f$ 取到。

例如，基于此性质，我们可以寻找函数的零点：
如果我们发现 $f (a) < 0$ 且 $f (b) > 0$，
则一定有 $x \in [a, b]$ 使 $f (x) = 0$。
我们可以进一步将 $[a, b]$ 划分成更小的区间，以更精确地计算 $x$ 的值。
这也称为[[二分法]]。

## 叙述与证明

::: theorem [介值定理]
设 $a < b$ 为[[实数]]，
$f \colon [a, b] \to \mathbb{R}$ 为[[连续映射|连续函数]]。
则 $f$ 的值域 $f ([a, b]) \subset \mathbb{R}$
一定是[[区间|闭区间]]（包括[[单点集]]）。

特别地，介于 $f (a)$ 与 $f (b)$ 之间的所有实数都能被 $f$ 取到。
:::

::: proof
由于闭区间 $[a, b]$ 是[[紧空间|紧]]、[[连通空间|连通]]的，
其像 $f ([a, b])$ 也如此。
但 $\mathbb{R}$ 的连通子集只能是区间（包括单点集）；
由 [[Heine–Borel 定理]]，紧的区间一定是闭区间。
:::

```terms
介值定理:
  en: intermediate value theorem
  fr: théorème des valeurs intermédiaires :m
  de: Zwischenwertsatz :m
```
