---
title: 筛余极限
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，**筛余极限**是筛范畴（@def-sifted）
上的[[余极限]]，是[[滤余极限]]的推广。

正如滤余极限常与有限[[极限]]交换，筛余极限常与有限[[积]]交换。

## 定义

::: definition [筛范畴] {@def-sifted}
**筛范畴** 是指一个非空[[范畴]] $\mathcal{C}$，
满足对任意[[对象]] $x, y \in \mathcal{C}$，[[拉回]]
$\mathcal{C}_{x/} \times_\mathcal{C} \mathcal{C}_{y/}$
是[[连通]]的。
:::

## 例子

- [[滤范畴]]都是筛范畴，因此[[滤余极限]]都是筛余极限。

- [[反射余等化子]]是筛余极限。

- 筛余极限本质上仅包含以上两类。

## 性质

::: proposition
设 $\mathcal{C}$ 是小范畴，则 $\mathcal{C}$ 是筛范畴
当且仅当对任意有限集 $\mathcal{D}$（看成离散范畴）和任意函子
$F \colon \mathcal{C} \times \mathcal{D} \to \mathsf{Set}$，
自然的比较映射
\[
\lambda: \mathop{\underset{\mathcal{C}}{\mathrm{colim}}} \prod_\mathcal{D} F
\to \prod_\mathcal{D} \mathop{\underset{\mathcal{C}}{\mathrm{colim}}} F
\]
都是同构。
:::

::: remark
如果将 $\mathsf{Set}$ 换成别的范畴，
则以上命题的两个方向都不一定对。
:::

```terms
筛余极限:
  en: sifted colimit
```
