---
title: 万有余极限
categories: [范畴论]
navboxes: [范畴论]
---

<disambiguation>
注意与[[绝对余极限]]区分。
</disambiguation>

[[范畴论]]中，称一个[[余极限]]图表**万有**，
意思是其任意[[拉回 (范畴论)|基变换]]仍是余极限图表
（@def）。

## 定义

::: definition {@def}
设 $\mathcal{C}$ 是有任意[[拉回 (范畴论)|拉回]]的[[范畴]]，
$I$ 是范畴，$F\colon I\to\mathcal{C}$ 是[[函子]]，
有[[余极限]] $X\in\mathcal{C}$，构成余极限图表
$F^\triangleright\colon I^\triangleright\to\mathcal{C}$。
称此余极限图表**万有**，指的是对任意态射 $Y\to X$，图表
$F^\triangleright\times_XY\colon I^\triangleright\to\mathcal{C}$
仍是余极限图表，换言之
$$
Y=\operatornamewithlimits{colim}_{i\in I}(F(i)\times_XY).
$$
:::

## 例子

- [[意象]]中所有的余极限都万有。

- 设 $I$ 为 [[$(\infty,1)$-范畴]]，满足 $|I|$ 可缩。
则[[稳定 $(\infty,1)$-范畴]]中以 $I$ 为指标范畴的余极限都万有。
特别地，稳定 $(\infty,1)$-范畴中的[[推出]]图表都万有。

```terms
万有余极限:
  en: universal colimit
```
