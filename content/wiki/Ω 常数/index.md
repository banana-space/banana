---
title: '$\Omega$ 常数'
aliases: [Omega 常数]
categories: [复分析, 常数]
---

常数$\Omega \in \mathbb{R}$（称为 $\Omega$ 常数）是[[Lambert W 函数]] $W(x)$ 在取 $1$ 时候的值。
其近似值为：
\[
\Omega = 0.56714 \, 32904 \, 09783 \, 87299 \, 99686 \, 622\dotsc
\]

## 定义

::: definition
$\Omega$ 是[[方程]] $x \exp x = 1$ 的实数解，也即 $W(1)$。
:::

## 性质

### 无理性

::: proposition
$\Omega$ 是[[无理数]]。
:::

::: proof
假设 $\Omega$ 是[[有理数]]，
则 $\Omega=\frac{p}{q}\,(p,q\in \mathbb{Z} , (p,q)=1)$，
由定义得 $1=\frac{p\exp \frac{p}{q}}{q}$，
得到 $e=\sqrt[p]{\frac{q^{q}}{p^{q}}}$，
这与 $e$ 是[[超越数]]相悖，于是$\Omega$ 是无理数。
:::

### 超越性

::: proposition
$\Omega$ 是超越数。
:::

::: proof
假设 $\Omega$ 是[[代数数]]，
由[[Lindemann–Weierstraß 定理]]得出 $\exp \Omega$ 是超越数，
但$\exp \Omega = \frac{1}{\Omega}$，这与假设是相悖的，于是 $\Omega$ 是超越数。
:::

::: proposition
\[
\exp(-\Omega)=\Omega
\]
:::

::: proposition
\[
\frac{1}{1+\Omega} = \int^{+\infty}_{-\infty}\frac{{\rm d}x}{(\exp x-x)^{2}+\pi^{2}}
\]
:::

::: proposition
\[
\pi\,\Omega = \mathrm{Re}\left(\int_{0}^{\pi}\log\left(\frac{\exp(\exp{ix})-\exp(-ix)}{\exp(\exp{ix})-\exp(ix)}\right){\rm d}x\right)
\]
:::

::: proposition
\[
\pi\,\Omega = \int_{0}^{\pi}\log\left(1+\frac{\sin x}{x}\exp(x\cos x)  \right){\rm d}x
\]
:::
