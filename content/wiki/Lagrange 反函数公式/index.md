---
title: Lagrange 反函数公式
aliases: [Lagrange 展开, Lagrange–Bürmann 公式, Lagrange 反演公式, Lagrange-Bürmann 公式]
categories: [初等代数]
navboxes: [初等代数]
---

::: convention
在本文中，

- 对 [[Laurent 级数]] $f(z)$ 和[[整数]] $n$，
  以 $[z^n]f(z)$ 表示 $f(z)$ 的 $n$ 次项系数。

:::

**Lagrange 反函数公式**是一元[[反函数定理]]的具体形式，
用[[形式幂级数]]各项系数表示其[[反函数]]各项系数。

## 陈述

::: theorem [Lagrange 反函数公式] {@全纯}
设 $f(z)$，$g(z)$ 为[[交换环]]上[[形式幂级数]]，
满足其常数项为 $0$ 且互为[[反函数]]，
则对任意 $m,n\in\mathbb{Z}$，都有
$$
n[z^n]f(z)^{-m}+m[z^m]g(z)^{-n}=0.
$$
特别地，取 $n=-1$，令 $\phi(z)=\frac{z}{f(z)}$，知
$$
[z^m]g(z)=\frac{1}{m}[z^{-1}]f(z)^{-m}
=\frac{1}{m}[z^{m-1}]\phi(z)^m.
$$
:::

::: proof
使用[[形式留数]]。
记 $w=f(z)$，则 $z=g(w)$。
记 $\operatorname{Res}(\psi(z)\mathrm{d} z)=[z^{-1}]\psi(z)$
则由全微分的留数是 $0$ 知
\[
\begin{aligned}
  0&=-\operatorname{Res}(\mathrm{d}(z^{-n}w^{-m}))
  =-\operatorname{Res}(w^{-m}\mathrm{d}(z^{-n})+z^{-n}\mathrm{d}(w^{-m}))\\
  &=n\operatorname{Res}(w^{-m}z^{-n-1}\mathrm{d} z)
  +m\operatorname{Res}(z^{-n}w^{-m-1}\mathrm{d} w)\\
  &=n\operatorname{Res}(f(z)^{-m}z^{-n-1}\mathrm{d} z)
  +m\operatorname{Res}(g(w)^{-n}w^{-m-1}\mathrm{d} w)\\
  &=n[z^n]f(z)^{-m}+m[w^m]g(w)^{-n},
\end{aligned}
\]
这里用到了形式留数在换元下的不变性。
:::

## 推论

::: corollary [Lagrange–Bürmann 公式]
记号承 @全纯，
并设 $h(z)$ 是[[形式 Laurent 级数]]。则
$$
[w^m]h(g(w))=\frac{1}{m}[z^{m-1}](h'(z)\phi(z)^m).
$$
:::

::: proof
由于命题关于 $h$ 线性，只需对 $h(z)=z^{-n}$，$n\in\mathbb{Z}$ 证明，
而这就是 @全纯。
:::

```terms
Lagrange 反函数公式:
  en: Lagrange inversion formula
```
