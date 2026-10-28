---
title: 代数数
categories: [代数数论]
navboxes: [域论, 数系]
---

<problems>
- “性质”一节需要扩充。
</problems>

**代数数**是[[代数数论]]的主要研究对象。它是[[有理数]]的扩充，
在研究[[整数不定方程]]时自然出现。

## 定义

::: definition
说复数 $a$ 是代数数，意思是存在有理系数首一多项式 $f$
使 $f(a)=0$，即存在正整数 $n$ 以及有理数 $c_1,\ldots,c_n$
满足
$$
a^n+c_1a^{n-1}+\cdots+c_n=0.
$$
:::

## 性质

::: proposition
所有的代数数构成[[代数闭域]]，为 $\mathbb{Q}$ 在 $\mathbb{C}$
中的代数闭包。
:::

## 例子

::: example [有理数]
有理数是代数数。
:::

::: example [有理数的方根]
若 $r\in\mathbb{Q}$，$n$ 是正整数，并在 $\mathbb{C}$
中选取一个满足 $a^n=r$ 的数 $a$，则 $a$ 是代数数，
因为它是多项式 $x^n-r$ 的根。
例如，
\[
\sqrt{2},\qquad
\sqrt[3]{2},\qquad
\sqrt{-1}=i
\]
都是代数数。它们分别满足
\[
x^2-2=0,\qquad
x^3-2=0,\qquad
x^2+1=0.
\]
:::

::: example
数 $a=\sqrt{2}+\sqrt{3}$ 是代数数。
事实上，
\[
a^2=5+2\sqrt{6},
\]
从而
\[
(a^2-5)^2=24.
\]
因此 $a$ 满足
\[
a^4-10a^2+1=0.
\]
:::

::: example [单位根]
若正整数 $n$ 满足 $\zeta^n=1$，
则 $\zeta$ 是代数数，因为它是多项式 $x^n-1$ 的根。
这样的数称为 $n$ 次[[单位根]]。
特别地，本原 $n$ 次单位根
\[
\zeta_n=e^{2\pi i/n}
\]
是代数数。
:::

::: example
对任意有理数 $r$，数 $e^{2\pi i r}$ 是单位根，因而是代数数。
由
\[
2\cos(2\pi r)
=
e^{2\pi i r}+e^{-2\pi i r}
\]
可知 $\cos(2\pi r)$ 也是代数数。
类似地，$\sin(2\pi r)$ 也是代数数。
:::

```terms
代数数:
  en: algebraic number
  de: algebraische Zahl
  fr: nombre algébrique
  la: numerus algebraicus
```
