---
title: 滤余极限
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，**滤余极限**是以[[滤范畴]]为指标的[[余极限]]，是[[正向余极限]]的推广。

许多范畴中的滤余极限与有限[[极限]]交换，例如集合范畴和阿贝尔群范畴。

最熟悉的例子是递增集合的并：
\[
A_0\subseteq A_1\subseteq A_2\subseteq\cdots
\qquad\Longrightarrow\qquad
\mathop{\mathrm{colim}}_n A_n=\bigcup_n A_n.
\]

## 定义

::: definition [概念]
设 $\kappa$ 是[[正则基数]]。
（$\kappa$-）**滤余极限**
是指以（$\kappa$-）[[滤范畴]]为指标的余极限。
:::

## 例子

::: example [递增集合的并]
在[[集合范畴]]中，考虑递增集合序列
\[
A_0\subseteq A_1\subseteq A_2\subseteq\cdots.
\]
它的滤余极限是
\[
L=\bigcup_{n\in\mathbb N}A_n.
\]
:::

::: example [向量空间]
设 $V$ 是向量空间。
在[[向量空间范畴]]中，
\[
V\simeq
\mathop{\mathrm{colim}}_{\substack{W\subseteq V\\\dim_kW<\infty}}W.
\]
因此，每个向量空间都是有限维向量空间的滤余极限。
:::

::: example
[[正向集]]都是滤范畴，因此[[正向余极限]]都是滤余极限。
:::

::: example
由于（$\kappa$-）滤的小范畴总与（$\kappa$-）滤的
[[偏序集]][[共尾]]（见[[滤范畴]]），滤余极限总能化为正向余极限。
:::

## 性质

::: proposition
设 $\mathcal{C}$ 是小范畴，则 $\mathcal{C}$ 是滤的
当且仅当对任意有限范畴 $\mathcal{D}$ 和任意函子
$F \colon \mathcal{C} \times \mathcal{D} \to \mathsf{Set}$，
自然的比较映射
\[
\lambda: \mathop{\underset{\mathcal{C}}{\mathrm{colim}}} \lim_\mathcal{D} F
\to \lim_\mathcal{D} \mathop{\underset{\mathcal{C}}{\mathrm{colim}}} F
\]
都是同构。

类似地，$\mathcal{C}$ 是 $\kappa$-滤的当且仅当
对任意 [[$\kappa$-小范畴]] $\mathcal{D}$ 和任意函子
$F \colon \mathcal{C} \times \mathcal{D} \to \mathsf{Set}$，
自然的比较映射
\[
\lambda: \mathop{\underset{\mathcal{C}}{\mathrm{colim}}} \lim_\mathcal{D} F
\to \lim_\mathcal{D} \mathop{\underset{\mathcal{C}}{\mathrm{colim}}} F
\]
都是同构。
:::

::: remark
如果将 $\mathsf{Set}$ 换成别的范畴，
则以上命题的两个方向都不一定对。
:::

```terms
滤余极限:
  en: filtered colimit
```
