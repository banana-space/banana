---
title: 微积分基本定理
aliases: [Newton–Leibniz 公式, Newton-Leibniz 公式]
categories: [实分析]
---

**微积分基本定理**说明，
对单变量函数而言，
[[微分]]与[[积分]]互为[[逆运算]]。

## 陈述与证明

微积分基本定理分为两部分，分别称为第一、第二基本定理。

### 微积分第一基本定理

::: theorem [微积分第一基本定理] {@第一基本定理}
设 $f \colon [a, b] \to \mathbb{R}$ 是[[连续函数]]。
则对 $x \in (a,b)$，有
\[
\frac{\mathrm{d}}{\mathrm{d} x} \int_a^x f (t) \mathrm{d} t
= f (x).
\]
:::

::: proof
对任意 $\delta > 0$，
存在 $\varepsilon > 0$，
使得 $|h| < \varepsilon$ 时 $|f (x + h) - f (x)| < \delta$，
从而
\[
\biggl| \frac{1}{h} \int_x^{x+h} f (t) \mathrm{d} t - f (x) \biggr|
< \delta.
\]
因此，由[[极限 (拓扑学)|极限]]的定义，
\[
\lim_{h \to 0}
\frac{1}{h} \int_x^{x+h} f (t) \mathrm{d} t
= f (x),
\]
而这等价于要证的等式。
:::

### 微积分第二基本定理

这一定理也称为 **Newton–Leibniz 公式**，
也是 [[Stokes 定理]]的一维情形。

::: theorem [微积分第二基本定理]
设 $F \colon [a, b] \to \mathbb{R}$ 具有连续[[导数]] $F'$。
则
\[
\int_a^b F' (t) \mathrm{d} t = F (b) - F (a).
\]
:::

::: proof
对 $F'$ 使用 @第一基本定理，
我们得到
\[
\frac{\mathrm{d}}{\mathrm{d} x} \int_a^x F'(t) \mathrm{d} t
= F' (x).
\]
换言之，函数 $G (x) = \int_a^x F'(t) \mathrm{d} t - F (x)$
的导数恒为 $0$，故恒为常数，这个常数是 $G (a) = - F (a)$。
因此，定理中的积分等于
$G(b) + F(b) = F(b) - F(a)$。
:::

## 推广

上述结论有以下几个推广，它们减弱了对 $f$ 或 $F'$ 的假设，
把连续减弱为可积。

::: theorem [第一基本定理，Lebesgue 版本] {@Leb1}
设 $f\colon[a,b]\to\mathbb{R}$ 为 [[Lebesgue 可积]]。
则只要 $x\in[a,b]$ 是 $f$ 的 [[Lebesgue 点]]，就有
\[
\frac{\mathrm{d}}{\mathrm{d} x} \int_a^x f (t) \mathrm{d} t
= f (x).
\]
特别地，上式对[[几乎处处]]的 $x\in[a,b]$ 成立。
:::

::: proof
回顾 Lebesgue 点的定义：$x$ 是 $f$ 的 Lebesgue 点，指的是
$$
\lim_{r\to0^+}\frac{1}{2r}\int_{x-r}^{x+r}
|f(t)-f(x)|\mathrm{d} t=0.
$$
这显然推出
$$
\lim_{r\to0^+}\frac{1}{r}\int_x^{x+r}|f(t)-f(x)|\mathrm{d} t
=\lim_{r\to0^+}\frac{1}{r}\int_{x-r}^x|f(t)-f(x)|\mathrm{d} t=0,
$$
从而
$$
\lim_{r\to0^+}\frac{1}{r}\int_x^{x+r}f(t)\mathrm{d} t
=\lim_{r\to0^+}\frac{1}{r}\int_{x-r}^xf(t)\mathrm{d} t=f(x),
$$
也就是
\[
\frac{\mathrm{d}}{\mathrm{d} x} \int_a^x f (t) \mathrm{d} t
= f (x).
\]
:::

::: theorem [第二基本定理，Lebesgue 版本]
设函数 $F\colon[a,b]\to\mathbb{R}$ [[绝对连续]]。则
$F$ 几乎处处可导，导数 [[Lebesgue 可积]]，且
$$
\int_a^bF'(t)\mathrm{d} t=F(b)-F(a).
$$
:::

::: proof
由于绝对连续函数都[[有界变差]]，故可对任意
$[c,d]\subseteq[a,b]$ 定义
$$
\mu([c,d])=F(d)-F(c),
$$
给出 $[a,b]$ 上[[符号测度]]。由绝对连续函数的定义容易发现
$\mu$ 关于 Lebesgue 测度 $m$ 绝对连续，故由
[[Radon–Nikodym 定理]]，存在 $f\in L^1(m)$ 使得
$\mu=fm$，即 $\mathrm{d}\mu=f\mathrm{d} t$，换言之对任一 $x\in[a,b]$ 都有
$$
F(x)-F(a)=\mu([a,x])=\int_a^xf(t)\mathrm{d} t.
$$
由 @Leb1，这推出 $F'$ 几乎处处等于 $f$，
特别地，$F$ 几乎处处可导，且
$$
F(b)-F(a)=\int_a^bF'(t)\mathrm{d} t.
$$
:::

::: theorem [第二基本定理，另一个 Lebesgue 版本]
设函数 $F \colon [a, b] \to \mathbb{R}$ 处处可导，
且其导数 $F'$ [[Lebesgue 积分|Lebesgue 可积]]。
则
\[
\int_a^b F' (t) \mathrm{d} t = F (b) - F (a).
\]
:::

::: proof
只需证 $\ge$，因为再对 $-F$ 用即得 $\le$。任取
$\varepsilon>0$。由 [[Vitali–Carathéodory 定理]]，
存在[[下半连续]]、Lebesgue 可积函数 $g\ge F'$ 使得
$$
\int_a^b(g(t)-F'(t))\mathrm{d} t<\varepsilon.
$$
由 $\varepsilon$ 的任意性，只需证更弱的命题
$$
\int_a^bg(t)\mathrm{d} t\ge F(b)-F(a)-2\varepsilon(b-a).
$$
为此考察关于 $x\in[a,b]$ 的命题
$$
\int_a^xg(t)\mathrm{d} t\ge F(x)-F(a)-2\varepsilon(x-a).
$$
由于两边关于 $x$ 连续，它成立的集合是闭集。此外它对 $x=a$
显然成立。这样就只需证明，只要它对 $x_0\in[a,b)$ 成立，
就存在 $\delta>0$ 使得它对 $x\in(x_0,x_0+\delta)$ 成立。
下证之。

首先由 $g$ 下半连续，存在 $\delta>0$ 使得当
$t\in(x_0,x_0+\delta)$ 时 $g(t)>g(x_0)-\varepsilon$。
其次由导数的定义，缩小 $\delta$ 可设当
$x\in(x_0,x_0+\delta)$ 时
$|F(x)-F(x_0)-F'(x_0)(x-x_0)|<\varepsilon(x-x_0)$。
于是对 $x\in(x_0,x_0+\delta)$ 便有
$$
\int_{x_0}^xg(t)\mathrm{d} t
\ge g(x_0)(x-x_0)-\varepsilon(x-x_0)
\ge F'(x_0)(x-x_0)-\varepsilon(x-x_0)
\ge F(x)-F(x_0)-2\varepsilon(x-x_0).
$$
所以只要命题对 $x_0$ 成立，把它和上式相加即得命题对
$x\in(x_0,x_0+\delta)$ 成立。定理得证。
:::

```terms
微积分基本定理:
  en: fundamental theorem of calculus
  de: Fundamentalsatz der Analysis :m
  fr: théorème fondamental de l'analyse :m
  grc: θεμελιῶδες θεώρημα ἀναλύσεως :n
  la: theorema fundamentale analyseos :n
```
