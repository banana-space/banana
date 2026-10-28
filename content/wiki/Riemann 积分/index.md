---
title: Riemann 积分
aliases: [黎曼积分, Riemann 可积]
categories: [实分析]
---

<problems>
- “性质”“可积的条件”各节需要扩充。
</problems>

**Riemann 积分**是定义[[函数]]的[[积分]]的一种方法。
直观地说，如果把积分看作函数的[[图像]]与坐标轴围成的[[面积]]，
那么 Riemann 积分的定义方法是，
将这个围成的区域分割成很窄的纵向细条，
用[[矩形]]的面积来代替这些细条的面积，
再把这些矩形的面积加起来。

函数 $f \colon [a, b] \to \mathbb{R}$
的 Riemann 积分通常记作
\[
\int _a ^b f (x) \, \mathrm{d}x \enspace \in \mathbb{R} .
\]

## 定义

在这一节中，
我们对函数 $f \colon [a, b] \to \mathbb{R}$
定义其 Riemann 积分 $\int _a ^b f (x) \, \mathrm{d}x$。

::: definition [一般集合的分割] {@def-partition-of-set}
对任一[[集合]]$A$，和一个指标集$I$，若存在一列集合$\{A_{\alpha}\}_{\alpha\in I}$满足：

(i) $\forall \alpha,\beta\in I, A_{\alpha}\cap A_{\beta}=\varnothing$，即它们两两不交；

(ii) $\displaystyle\bigcup_{\alpha\in I}A_{\alpha}=A$。

那么我们称集类$\mathscr{A}=\{A_{\alpha}:\alpha\in I\}$为集合$A$的一个**分割**。
:::

::: definition [区间的分割] {@def-partition}
[[区间]] $[a, b]$ 的一个**分割**是指一列实数
\[
a = x_0 < x_1 < \cdots < x_n = b,
\]
这些实数将区间 $[a, b]$ 分成 $n$ 段。
如果将这个分割记为 $\mathscr{P}=\{[x_i,x_{i+1}]:0\leq i\leq n-1\}$，那么我们也记
\[
\| \mathscr{P} \| =
\max _{1 \leq i \leq n}
(x_i - x_{i - 1}),
\]
即分割出的 $n$ 段区间中最长的一段的长度。
:::

::: definition [带标记点的分割] {@def-partition-with-markings}
区间 $[a, b]$ 的一个**带标记点的分割**由以下信息组成：

- $[a, b]$ 的一个分割
  $a = x_0 < x_1 < \cdots < x_n = b$
  （@def-partition）。

- 对每个 $1 \leq i \leq n$，有一个实数
  $\xi_i \in [x_{i-1}, x_i]$，
  称为**标记点**。

如果将这个带标记点的分割记为 $\mathscr{P}$，那么我们也记
\[
\| \mathscr{P} \| =
\max _{1 \leq i \leq n}
(x_i - x_{i - 1}).
\]
:::

::: definition [Riemann 和] {@def-riemann-sum}
设 $f \colon [a, b] \to \mathbb{R}$ 是一个[[函数]]，
$\mathscr{P}$ 是 $[a, b]$ 的一个带标记点的分割
（@def-partition-with-markings）。
则 $f$ 关于 $\mathscr{P}$ 的 **Riemann 和**定义为
\[
S (f, \mathscr{P}) =
\sum _{i = 1} ^n
f (\xi_i) \,
(x_i - x_{i - 1}),
\]
其中 $\xi_i$ 是 $\mathscr{P}$ 的标记点。
:::

::: definition [Riemann 积分] {@def-riemann-integral}
设 $f \colon [a, b] \to \mathbb{R}$ 是一个[[函数]]。
则 $f$ 的 **Riemann 积分**定义为下面的[[极限]]（如果存在）：
\[
\int _a ^b f (x) \, \mathrm{d}x
=\int_{[a,b]}f(x)\,\mathrm{d}x=\int_{[a,b]}f=
\lim _{\| \mathscr{P} \| \to 0}
S (f, \mathscr{P}),
\]
其中 $\mathscr{P}$ 取遍 $[a, b]$ 的所有带标记点的分割
（@def-partition-with-markings），
$S (f, \mathscr{P})$ 是 Riemann 和
（@def-riemann-sum）。
另外，若$f$在区间$[a,b]$上的Riemann积分存在，则称$f$在区间$[a,b]$上**Riemann可积**，
记作$f\in R[a,b]$。
:::

::: remark
@def-riemann-integral 中要求$a<b$，当$a\geq b$时，定义其Riemann积分值为：
\[
\begin{aligned}
  \int_a^b f:=-\int_b^a f
\end{aligned}
\]
同时由此可得：$\forall a\in\mathbb{R},\displaystyle\int_a^a f=0$。
:::

::: remark
@def-riemann-integral
中的极限虽然不一定存在，但它的[[上极限|上]]、[[下极限]]一定存在
（可能为 $\pm \infty$），
称为 $f$ 的 **Darboux 上积分**与 **Darboux 下积分**：
\[
\begin{aligned}
  \mathop{\overline{\mkern{-6mu} \int \mkern{2mu}}}
  _{\mkern{-12mu} a}
  ^{\mkern{2mu} b}
  f (x) \, \mathrm{d} x
  & =
  \mathop{\overline{\lim}} \limits
  _{\| \mathscr{P} \| \to 0}
  S (f, \mathscr{P}), \\
  \mathop{\underline{\mkern{2mu} \int \mkern{-6mu}} \mkern{8mu}}
  _{\mkern{-8mu} a}
  ^{\mkern{2mu} b}
  f (x) \, \mathrm{d} x
  & =
  \mathop{\underline{\lim}} \limits
  _{\| \mathscr{P} \| \to 0}
  S (f, \mathscr{P}).
\end{aligned}
\]
:::

## 性质

在以下性质叙述中，我们默认给定函数在给定区间上是Riemann可积的。

::: theorem [线性性]
$\forall \alpha,\beta\in\mathbb{R}$，
$\displaystyle\int_{I}(\alpha f+\beta g)=\alpha\int_{I}f+\beta\int_{I}g$。
:::

::: proof
由求和与极限的线性性可知，对于区间$I$的任意划分$\mathscr{P}$，当$\|\mathscr{P}\|\to0$时，有：
\[
\begin{aligned}
  \int_{I}(\alpha f+\beta g)=\lim\limits_{\|\mathscr{P}\|\to0}S(\alpha f+\beta g,\mathscr{P})=\lim\limits_{\|\mathscr{P}\|\to0}[\alpha S(f,\mathscr{P})+\beta S(g,\mathscr{P})]=\alpha\lim\limits_{\|\mathscr{P}\|\to0}S(f,\mathscr{P})+\beta\lim\limits_{\|\mathscr{P}\|\to0}S(g,\mathscr{P})=\alpha\int_{I}f+\beta\int_{I}g
\end{aligned}
\]
:::

::: theorem [区间可加性]
$\forall c\in\mathbb{R}$，$\displaystyle\int_a^b f=\int_a^c f+\int_c^b f$。
:::

::: proof
当点$c\in [a,b]$时，不妨假定$c$即为其中一个分点，
并设此时对应区间$[a,c]$和$[c,b]$的分割分别为$\mathscr{P}_1$和$\mathscr{P}_2$，则有：
$\mathscr{P}_1\cap\mathscr{P}_2=\varnothing$且$\mathscr{P}_1\cup\mathscr{P}_2=\mathscr{P}$。
同时注意到$\|\mathscr{P}\|\to 0\Rightarrow \|\mathscr{P}_1\|\to 0$且$\|\mathscr{P}_2\|\to 0$，则有：
\[
\begin{aligned}
  \int_a^b f=\lim\limits_{\|\mathscr{P}\|\to0}S(f,\mathscr{P})=\lim\limits_{\|\mathscr{P}\|\to0}S(f,\mathscr{P}_1\cup\mathscr{P}_2)=\lim\limits_{\|\mathscr{P}\|\to0}[S(f,\mathscr{P}_1)+S(f,\mathscr{P}_2)]=\lim\limits_{\|\mathscr{P}_1\|\to0}S(f,\mathscr{P}_1)+\lim\limits_{\|\mathscr{P}_2\|\to0}S(f,\mathscr{P}_2)=\int_a^c f+\int_c^b f
\end{aligned}
\]
当$c\notin [a,b]$时，不妨设$c<a$，则由上述讨论可知：
\[
\begin{aligned}
  \int_c^b f=\int_c^a f+\int_a^b f\Rightarrow \int_a^b f=\int_c^b f-\int_c^a f=\int_a^c f+\int_c^b f
\end{aligned}
\]
综上所述，$\forall c\in \mathbb{R}$，区间可加性成立。
:::

## 可积的条件

```terms
Riemann 积分:
  en: Riemann integral
  fr: intégrale de Riemann
```
