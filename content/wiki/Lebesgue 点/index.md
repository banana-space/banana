---
title: Lebesgue 点
categories: [实分析]
---

**Lebesgue 点**是个[[实分析]]概念。$\mathbb{R}^d$
上[[Lebesgue 可积]]函数的 Lebesgue
点指的是函数值与周围函数值平均而言差不多的点（@thm:定义）。

## 定义

::: definition {@thm:定义}
设函数 $f\colon\mathbb{R}^d\to\mathbb{R}$ 为 [[Lebesgue 可测]]。
称 $x\in\mathbb{R}^d$ 是 $f$ 的 **Lebesgue 点**，指的是
$$
\lim_{r\to0^+}\frac{1}{m(B_r(x))}\int_{B_r(x)}
|f(y)-f(x)|\mathrm{d} y=0,
$$
其中 $m$ 表示 [[Lebesgue 测度]]，
$B_r(x)=\{y\in\mathbb{R}^d\mid|y-x|<r\}$。
:::

## 性质

Lebesgue 点最重要的性质如下：

::: theorem
设函数 $f\colon\mathbb{R}^d\to\mathbb{R}$ 为[[局部可积函数|局部可积]]，即限制在
$\mathbb{R}^d$ 的任一有界开集上都是 [[Lebesgue 可积]]。则 $f$
的 Lebesgue 点为几乎处处，即 Lebesgue 点集的补集
Lebesgue 零测。
:::

::: proof
由于一个点是不是 Lebesgue 点只依赖于其附近的函数值，
而 $\mathbb{R}^d$ 被可数个有界开集覆盖，故把 $f$
在一个有界开集之外截成 $0$，可设 $f$ 本身 Lebesgue 可积。

为简明起见，暂记
$$
Lf(x)=\limsup_{r\to0^+}\frac{1}{m(B_r(x))}
\int_{B_r(x)}|f(y)-f(x)|\mathrm{d} y,
$$
则需证明 $Lf$ 几乎处处为 $0$。为此，只需对任一
$\varepsilon>0$ 证明 $m\{Lf>\varepsilon\}=0$，
其中 $\{Lf>\varepsilon\}$ 是 $\{x\in\mathbb{R}^d\mid
  Lf(x)>\varepsilon\}$ 的简写。现对 $\delta>0$，
写 $f=g+h$，其中 $g$ 紧支连续，$\|h\|_{L^1}<\delta$。
则显然 $Lf\le Lg+Lh$，且由连续性 $Lg=0$。接下来用
[[Hardy–Littlewood 极大函数]]估计 $Lh$。回忆极大函数的定义
$$
Mh(x)=\sup_{r>0}\frac{1}{m(B_r(x))}
\int_{B_r(x)}|h(y)|\mathrm{d} y,
$$
及其性质 $m\{Mh>\varepsilon\}\le3^d\varepsilon^{-1}
  \|h\|_{L^1}$。又注意 $Lh\le Mh+|h|$，而
$m\{|h|>\varepsilon\}\le\varepsilon^{-1}\|h\|_{L^1}$。
于是
$$
m^*\{Lf>2\varepsilon\}\le m^*\{Lh>2\varepsilon\}
\le m\{Mh>\varepsilon\}+m\{|h|>\varepsilon\}
\le(3^d+1)\varepsilon^{-1}\|h\|_{L^1}<
(3^d+1)\varepsilon^{-1}\delta,
$$
故由 $\delta$ 的任意性，$m\{Lf>2\varepsilon\}=0$。
定理得证。
:::

## 应用

Lebesgue 点有各种应用，在此展示几例。

::: proposition
设 $E\subseteq\mathbb{R}^d$ 为 Lebesgue 可测，$m(E)>0$。
则 $E-E=\{x-y\mid x,y\in E\}$ 包含 $0$ 的邻域。
:::

::: proof
考虑 $E$ 的示性函数 $1_E$，即在 $E$ 中取值 $1$ 在 $E$
外取值 $0$ 的函数。显然其局部可积，故其 Lebesgue 点几乎处处。
而 $m(E)>0$，所以可取 $a\in E$，是 $1_E$ 的 Lebesgue 点。
由 Lebesgue 点的定义不难得到
$$
\lim_{r\to0^+}\frac{m(E\cap B_r(a))}{m(B_r(a))}=1.
$$
于是可取 $r>0$，使得
$m(E\cap B_r(a))>(1-2^{-d-1})m(B_r(a))$。我们来证明此时
$E-E\supseteq B_r(0)$。记 $B=B_r(a)$，$F=E\cap B$。
对任一 $z\in B_r(0)$，由 $B\cap(B+z)
  \supseteq B_{r/2}(a+z/2)$ 知 $m(B\cap(B+z))
  \ge m(B_{r/2}(a+z/2))=2^{-d}m(B)$，从而
$m(B\cup(B+z))\le(2-2^{-d})m(B)$。这样一来，由于
$F$ 和 $F+z$ 都是 $B\cup(B+z)$ 的子集，而
$m(F)=m(F+z)>(1-2^{-d-1})m(B)$，所以
$F\cap(F+z)\ne\varnothing$。取 $x\in F\cap(F+z)$，
则 $x,x-z\in F\subseteq E$，即 $z=x-(x-z)\in E-E$。
:::

::: proposition
设 $E\subseteq\mathbb{R}^d$，$\rho\in\mathbb{R}_+$。则集合
$\{x\in\mathbb{R}^d\mid d(x,E)=\rho\}$ 为 Lebesgue 零测，其中
$d(x,E)=\inf_{y\in E}|x-y|$。
:::

::: proof
把 $E$ 换成其闭包不改变 $d(x,E)$，故可设 $E$ 为闭集。
这样的好处是 $d(x,E)$ 定义中的 $\inf$ 总能在某个
$y\in E$ 取到。考虑集合
$$
U=\{x\in\mathbb{R}^d\mid d(x,E)<\rho\},
$$
则它显然为开集，特别地其示性函数 $1_U$ 为局部可积。
现对满足 $d(x,E)=\rho$ 的点 $x$，取 $y\in E$ 使得
$|x-y|=\rho$。则 $U\supseteq B_\rho(y)$，从而
$$
\liminf_{r\to0^+}\frac{m(U\cap B_r(x))}{m(B_r(x))}
\ge\lim_{r\to0^+}\frac{m(B_\rho(y)\cap B_r(x))}
{m(B_r(x))}=\frac{1}{2}.
$$
而 $x\notin U$，$1_U(x)=0$，所以 $x$ 不是 $1_U$
的 Lebesgue 点。集合 $\{x\in\mathbb{R}^d\mid d(x,E)=\rho\}$
中的元素都不是 $1_U$ 的 Lebesgue 点，所以它零测。
:::

```terms
Lebesgue 点:
  en: Lebesgue point
  fr: point de Lebesgue
```
