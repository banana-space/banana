---
title: 奇异基数假设
categories: [集合论]
navboxes: [集合论]
---

<problems>
- “动机”一节中命题的证明不完整：由前文似乎推不出 $\kappa^{\operatorname{cf}(\kappa)}=\omega^{\operatorname{cf}(\kappa)}$ 这一步。
</problems>

**奇异基数假设**指如下命题：

- 对奇异基数$\kappa$，
  $2^{\operatorname{cf}(\kappa)}<\kappa\rightarrow\kappa^{\operatorname{cf}(\kappa)}=\kappa^+$。

## 动机

对于[[奇异基数]]$\kappa$来说，$\kappa^{\operatorname{cf}(\kappa)}$的值有下列估计。

::: proposition
对奇异基数$\kappa$，若$2^{\operatorname{cf}(\kappa)}\ge\kappa$，
则$\kappa ^{\operatorname{cf}(\kappa )}=2^{\operatorname{cf}(\kappa)}$，
若$2^{\operatorname{cf}(\kappa)}<\kappa$，
则$\kappa ^{\operatorname{cf}(\kappa )}\ge\kappa^+$。
:::

::: proof
由[[Kőnig 定理]]的推论有
$$
\kappa^{\operatorname{cf}(\kappa)}>\kappa
$$
于是
$$
\kappa^{\operatorname{cf}(\kappa)}\ge\kappa^+
$$
当$2^{\operatorname{cf}(\kappa)}\ge\kappa$时，由$\kappa$的奇异性有，
$$
\kappa>\operatorname{cf}(\kappa)\ge\omega
$$
由[[基数]]的指数运算法则可以得到

因为
$$
\forall \alpha, \omega\le\alpha\le\operatorname{cf}(\kappa)
$$
有
$$
\alpha^{\operatorname{cf}(\kappa)}=2^{\operatorname{cf}(\kappa)}\ge\kappa
$$
所以
$$
\kappa^{\operatorname{cf}(\kappa)}=\omega^{\operatorname{cf}(\kappa)}=2^{\operatorname{cf}(\kappa)}
$$
:::

可见奇异基数假设的目的在于约束$\kappa^{\operatorname{cf}(\kappa)}$的值，以便于确定基数幂的具体大小。

## 与强连续统假设的关系

[[强连续统假设]]强于奇异基数假设。

::: theorem
$$
\operatorname{ZFC+GCH}\vdash \operatorname{SCH}
$$
:::

::: proof
由于$\kappa$是奇异基数，因此是极限基数。

由[[基数]]页面的指数部分的结论得到$2^\kappa=(2^{<\kappa})^{\operatorname{cf}(\kappa)}$。

又由强连续统假设得到
$$
2^{<\kappa}=\sup\{2^{|\alpha|}\mid\alpha<\kappa\}=\sup\{|\alpha|^+\mid\alpha<\kappa\}=\kappa
$$
所以
$$
2^\kappa=(2^{<\kappa})^{\operatorname{cf}(\kappa)}=\kappa^{\operatorname{cf}(\kappa)}
$$
:::

```terms
奇异基数假设:
  en: singular cardinal hypothesis (SCH)
```
