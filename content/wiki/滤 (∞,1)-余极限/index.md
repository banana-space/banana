---
title: '滤 $(\infty,1)$-余极限'
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

<problems>
- “性质”一节命题的第二部分中，函子的目标 $\mathsf{Set}$ 似乎应为空间 $(\infty,1)$-范畴 $\mathsf{S}$。
</problems>

滤 $(\infty,1)$-余极限是[[滤余极限]]的 $(\infty,1)$-版本。

## 定义

::: definition
设 $\kappa$ 是[[正则基数]]。
（$\kappa$-）**滤 $(\infty,1)$-余极限**
是指（$\kappa$-）[[滤 $(\infty,1)$-范畴]]上的 [[$(\infty,1)$-余极限]]。
:::

## 例子

- （$\kappa$）-[[滤范畴]]总是（$\kappa$）-[[滤 $(\infty,1)$-范畴]]，因此
  （$\kappa$）-滤余极限总是（$\kappa$）-滤 $(\infty,1)$-余极限。

- （$\kappa$-）滤 $(\infty,1)$-小范畴总与（$\kappa$-）滤的
  [[偏序集]] [[$(\infty,1)$-共尾]]，因此滤 $(\infty,1)$-余极限总能化为
  [[正向 $(\infty,1)$-余极限]]。

## 性质

::: proposition
设 $\mathcal{C}$ 是 $(\infty,1)$-小范畴，则 $\mathcal{C}$
是滤 $(\infty,1)$-范畴当且仅当对任意有限 $(\infty,1)$-范畴 $\mathcal{D}$
和任意到[[空间 $(\infty,1)$-范畴]]的 $(\infty,1)$-函子
$F \colon \mathcal{C} \times \mathcal{D} \to \mathsf{S}$，
自然的比较映射
\[
\lambda: \mathop{\underset{\mathcal{C}}{\mathrm{colim}}} \lim_\mathcal{D} F
\to \lim_\mathcal{D} \mathop{\underset{\mathcal{C}}{\mathrm{colim}}} F
\]
都是同构。

类似地，$\mathcal{C}$ 是 $\kappa$-滤 $(\infty,1)$-范畴当且仅当
对任意 [[$\kappa$-小 $(\infty,1)$-范畴]] $\mathcal{D}$ 和任意 $(\infty,1)$-函子
$F \colon \mathcal{C} \times \mathcal{D} \to \mathsf{Set}$，
自然的比较映射
\[
\lambda: \mathop{\underset{\mathcal{C}}{\mathrm{colim}}} \lim_\mathcal{D} F
\to \lim_\mathcal{D} \mathop{\underset{\mathcal{C}}{\mathrm{colim}}} F
\]
都是同构。
:::

::: remark
如果将 $\mathsf{S}$ 换成别的范畴，
则以上命题的两个方向都不一定对。
:::

```terms
'滤$(\infty,1)$-余极限':
  en: 'filtered $(\infty,1)$-colimit'
```
