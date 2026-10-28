---
title: 极小多项式
categories: [域论]
navboxes: [域论]
---

<disambiguation>
本条目介绍的是[[域论]]中的概念。关于[[线性代数]]中的同名概念，请参见[[极小多项式（线性代数）]]。
</disambiguation>

在[[域论]]中，对[[域扩张]] $K \subset L$，
域 $K$ 上的[[代数元]] $\alpha \in L$ 的**极小多项式**是 $K$ 上满足
$f(\alpha)=0$ 的最低次[[首一多项式]] $f \in K [x]$。
此多项式 $f$ 可以整除任意满足 $g(\alpha)=0$ 的多项式 $g \in K [x]$。

## 定义

::: definition [极小多项式]
令$K \subset L$为[[域扩张]]，令 $\alpha\in L$ 为 $K$ 上的[[代数元]]。考虑[[理想]]
$$
I=\{f(x)\in K[x]\mid f(\alpha)=0\}.
$$
因为 $K [x]$ 是[[主理想整环]]且 $I \neq 0$，
所以有唯一的[[首一多项式]] $m_{\alpha,K}(x) \in K [x]$ 使得 $I = (m_{\alpha, K} (x))$。
该多项式称为 $\alpha$ 在 $K$ 上的**极小多项式**。
:::

## 例子

::: example
若 $\alpha\in K$，则 $\alpha$ 在 $K$ 上的极小多项式为
\[
m_{\alpha,K}(x)=x-\alpha.
\]
:::

::: example
复数 $\mathrm{i}$ 在 $\mathbb{R}$ 上的极小多项式是
\[
m_{\mathrm{i},\mathbb{R}}(x)=x^2+1.
\]
:::

::: example
$\sqrt{2}$ 在 $\mathbb{Q}$ 上的极小多项式是
\[
m_{\sqrt{2},\mathbb{Q}}(x)=x^2-2.
\]
:::

::: example
$\sqrt[3]{2}$ 在 $\mathbb{Q}$ 上的极小多项式是
\[
m_{\sqrt[3]{2},\mathbb{Q}}(x)=x^3-2.
\]
:::

::: example [单位根]
设
\[
\zeta_5=e^{2\pi\mathrm{i}/5}
\]
是本原 $5$ 次[[单位根]]。它在 $\mathbb{Q}$ 上的极小多项式
是第 $5$ 个[[分圆多项式]]
\[
m_{\zeta_5,\mathbb{Q}}(x)
=
\Phi_5(x)
=
x^4+x^3+x^2+x+1.
\]
:::

::: example
$\alpha=\sqrt{2}+\sqrt{3}$在$\Bbb Q$上的极小多项式是
\[
m_{\alpha,\mathbb{Q}}(x)
=
x^4-10x^2+1.
\]
:::

## 性质

### 基本性质

- 极小多项式[[不可约多项式|不可约]]。

```terms
极小多项式:
  en: minimal polynomial
  de: Minimalpolynom :n
  fr: polynôme minimal :m
  grc: ἐλάχιστον πολυώνυμον :n
```
