---
title: '$\pi$'
aliases: [Pi, 圆周率, Π]
categories: [实分析, 复分析, 常数]
---

<problems>
- “有理逼近”一节需要扩充。
</problems>

[[实数]] $\pi \in \mathbb{R}$（称为**圆周率**，又称 **Archimedes 常数**）
是[[圆]]的[[周长]]和其直径的比值，
也是圆的[[面积]]和其半径平方的比值，
其近似值为
\[
\pi = 3.14159 \, 26535 \, 89793 \, 23846 \ldots
\]

$\pi$ 不仅是[[无理数]]，也是[[超越数]]。

记号 $\pi$ 起源于 18 世纪，
来自古希腊文
<lang grc>περιφέρεια</lang>
（*<lang grc-Latn>periphéreia</lang>*，周长）
的首字母。

## 定义

### 原始定义

::: definition {@def-pi}
$\pi$ 定义为单位圆周的长度的一半。
这个长度的表达式是
\[
\pi = \int_{-1}^1 \frac{dx}{\sqrt{1 - x^2}}.
\]
:::

### 通过三角函数

$\pi$ 也可以通过[[正弦函数]]的零点来定义。
正弦函数 $\sin \colon \mathbb{R} \to \mathbb{R}$ 定义为以下[[常微分方程]]的[[初值问题]]的解：
\[
\begin{cases}
  \sin'' (x) + \sin (x) = 0, & x \in \mathbb{R}, \\
  \sin (0) = 0, \\
  \sin' (0) = 1.
\end{cases}
\]
正弦函数也可以由如下的[[幂级数]]给出：
\[
\sin x =
\sum_{n=0}^{\infty}
\frac{(-1)^n}{(2n+1)!} \, x^{2n+1}.
\]

::: definition {@def-pi-via-sin}
$\pi$ 是使得 $\sin x = 0$ 的最小的正实数 $x$。
:::

::: remark
@def-pi-via-sin 等价于 $\pi$ 的原始意义（@def-pi），
因为函数 $1/\sqrt{1-x^2}$ 的[[不定积分]]是[[反正弦函数]] $\arcsin$。
:::

## 性质

### 无理性

::: proof
假设写成 $\pi = a/b; a,b\in\mathbb Z$。对正整数$n$定义

\[
\begin{aligned}
&f_n(x):=\frac{x^n(a-bx)^n}{n!},\\
&F_n(x):= f_n(x) - f^{(2)}_n(x) + f^{(4)}_n(x) - \cdots + (-1)^n f^{(2n)}_n(x).
\end{aligned}
\]

简单计算得出

\[
\frac{d}{d{x}}(F'_n(x)\sin x - F_n(x) \cos x) = (F''_n(x) + F_n(x)) \sin x = f_n(x) \sin x.
\]

注意$f_n$的不超$n-1$次之导数在$x=0$取$0$，$n$次开始导数都是整系数多项式，因此$F_n$在$x=0$整值，
$x=\pi$由对称性亦然。

\[
\int^{\pi}_{0} f_n(x) \sin x dx = F'_n(x) \sin x - F_n(x) \cos x|^\pi_0 = F_n(\pi) + F_n(0) \in \mathbb{Z}.
\]

但是$0<x<\pi$时有

\[
0 < f_n(x) \sin x < \frac{\pi^n a^n}{n!}.
\]

这样构造了一列正值趋于$0$的整数而矛盾。
:::

### 超越性

由[[Lindemann–Weierstraß 定理]]得出 $\pi$ 是超越数。

### 有理逼近
