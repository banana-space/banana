---
title: 余端
navboxes: [范畴论]
---

::: convention
在本文中，

- [[范畴]]均指 [[$(\infty,1)$-范畴]]。

:::

**余端**是形如
$F\colon\mathcal C^{\operatorname{op}}\times\mathcal C\to\mathcal D$
的函子的余极限。它是[[端]]的对偶概念，并同样具有一些与[[积分]]类似的性质，因此使用上标积分符号
\[
\int^{c\in\mathcal C}F(c,c)
\]
指代$F$的余端。

## 定义

::: definition
令 $\mathcal C$ 为范畴，考虑函子
$F\colon\mathcal C^{\operatorname{op}}\times\mathcal C\to\mathcal D$。
那么 $F$ 的**余端**是指余极限
\[
\int^{c\in\mathcal C}F
\coloneqq
\operatorname{colim}\left(
  \mathsf{TwAr}(\mathcal C)^{\operatorname{op}}
  \xrightarrow{(t,s)}
  \mathcal C^{\operatorname{op}}\times\mathcal C
  \xrightarrow{F}
  \mathcal D
\right),
\]
其中 $\mathsf{TwAr}(\mathcal C)$ 为[[扭箭头范畴]]。

具体而言，$\mathsf{TwAr}(\mathcal C)^{\operatorname{op}}$ 中由态射
$f\colon c\to d$ 确定的对象经 $(t,s)$ 被送到 $(d,c)$，因而再经 $F$
被送到 $F(d,c)$。
:::

## 显式描述

上述定义可以显式地描述。设 $X\in\mathcal D$，并且对每个
$c\in\mathcal C$ 都给定一个态射
\[
\lambda_c\colon F(c,c)\to X.
\]
称这族态射是**相容的**，如果对每个态射 $f\colon c\to d$ 都有
\[
\lambda_c\circ F(f,c)
=
\lambda_d\circ F(d,f),
\]
其中
\[
F(f,c)\coloneqq F(f,\operatorname{id}_c)
\colon F(d,c)\to F(c,c)
\]
以及
\[
F(d,f)\coloneqq F(\operatorname{id}_d,f)
\colon F(d,c)\to F(d,d).
\]

余端是所有带有这种相容族的对象 $X$ 中初始的那个。因此余端带有一族典范态射
\[
\iota_c\colon
F(c,c)\to\int^{a\in\mathcal C}F(a,a),
\]
并且对每个 $f\colon c\to d$ 都满足
\[
\iota_c\circ F(f,c)
=
\iota_d\circ F(d,f).
\]

泛性质要求对于任意相容族
$\lambda_c\colon F(c,c)\to X$，存在唯一的态射
\[
u\colon\int^{a\in\mathcal C}F(a,a)\to X
\]
使得
\[
u\circ\iota_c=\lambda_c
\]
对所有 $c\in\mathcal C$ 成立。对于一个固定的态射
$f\colon c\to d$，这一泛性质可由下面的交换图表示：
\[
\begin{tikzcd}
X && \\
& {\int^{x\in\mathcal C}F(x,x)} & {F(c,c)} \\
& {F(d,d)} & {F(d,c)}
\arrow["{\exists!u}"', dashed, from=2-2, to=1-1]
\arrow["{\lambda_c}"', from=2-3, to=1-1]
\arrow["{\lambda_d}", from=3-2, to=1-1]
\arrow["{\iota_c}"', from=2-3, to=2-2]
\arrow["{\iota_d}", from=3-2, to=2-2]
\arrow["{F(f,c)}"', from=3-3, to=2-3]
\arrow["{F(d,f)}", from=3-3, to=3-2]
\end{tikzcd}
\]

```terms
余端:
  en: coend
```
