---
title: '$\operatorname{Tor}$-维数'
categories: [同调代数, 一般环论]
---

[[环]]的 **$\operatorname{Tor}$-维数**是其同调复杂性的一个度量，
指的是其模范畴中 [[Tor|$\operatorname{Tor}$]] 函子的最远延伸。

## 定义

::: definition
环 $R$ 的 **$\operatorname{Tor}$-维数**，记作
$\operatorname{tor-dim}R$，定义为
$$
\operatorname{tor-dim}R=\sup\{n\in\mathbb{N}\mid\exists M\in\mathsf{Mod}\text{-}R,N\in R\text{-}\mathsf{Mod},\,\operatorname{Tor}_n(M,N)\ne0\}.
$$
:::

通常不讨论零环的 $\operatorname{Tor}$-维数，或将其约定为 $-1$ 或 $-\infty$。
依以上定义，非零环的同调维数取值在 $\mathbb{N}\cup\{\infty\}$。

## 性质

::: proposition {@关系}
环 $R$ 的 $\operatorname{Tor}$-维数是其各左模[[平坦维数]]的上确界，
也是各右模平坦维数的上确界，即
$$
\operatorname{tor-dim}R
=\sup\{\operatorname{fd}_R(M)\mid M\in \mathsf{Mod}\text{-}R\}
=\sup\{\operatorname{fd}_R(N)\mid N\in R\text{-}\mathsf{Mod}\}.
$$
:::

::: proof
依定义显然。
:::

::: proposition
$$
\operatorname{tor-dim}R=\inf\{n\in\mathbb{N}\mid\operatorname{Tor}_{n+1}(-,-)=0\}.
$$
特别地，$\operatorname{tor-dim}R=0$ 等价于所有左 $R$-模都[[平坦模|平坦]]。
:::

::: proof
由 @关系，这是[[平坦维数]]对应命题的直接推论。
:::

以下命题说明算 $\operatorname{Tor}$-维数时只需检查很少一部分模。

::: proposition {@弱化}
$$
\operatorname{tor-dim}R
=\inf\{n\in\mathbb{N}\mid\forall I\subseteq R\,有限生成左理想,\,
J\subseteq R\,有限生成右理想,\,
\operatorname{Tor}_{n+1}(R/J,R/I)=0\}.
$$
:::

::: proof
这是[[平坦维数]]对应命题的立即推论。
:::

::: proposition
环的 $\operatorname{Tor}$-维数小于等于其左[[整体维数]]。
对左 [[Noether 环]]此二维数相等。
:::

::: proof
见条目[[整体维数]]。
:::

由于交换环上模的[[平坦模|平坦]]性可以局部检查，其 $\operatorname{Tor}$-维数也可以局部计算。

::: proposition
对交换环 $A$，
$$
\operatorname{tor-dim}A=\sup\{\operatorname{tor-dim}A_\mathfrak{p}\mid\mathfrak{p}\in\operatorname{Spec}A\}.
$$
:::

::: proof
这是[[平坦维数]]对应命题的立即推论。
:::

## 例子

- [[半单环]]的整体维数为 $0$，从而  $\operatorname{Tor}$-维数也是 $0$。

- 如一交换环在每个素理想处的[[局部化]]都是域，则由于平坦可以局部验证，
  我们知道它上面所有的模都平坦，于是平坦维数是 $0$。此种环未必半单：
  比如无穷多个域的乘积就是此种环，但显然不 [[Artin 环|Artin]] 故不可能半单。
  所以 $\operatorname{Tor}$-维数可以严格小于[[整体维数]]。

- $\mathbb{Z}$ 的 $\operatorname{Tor}$-维数是 $1$。
  $\mathbb{Z}/4$ 的 $\operatorname{Tor}$-维数是 $\infty$，
  因为它的模 $\mathbb{Z}/2$ 显然没有有限平坦消解。

- [[Jean-Pierre Serre|Serre]] 证明了 Noether 局部交换环的
  $\operatorname{Tor}$-维数有限当且仅当其是[[正则环]]。
  这是以同调方法研究[[交换代数]]的开端。

```terms
'$\operatorname{Tor}$-维数':
  en: '$\operatorname{Tor}$-dimension'
  de: '$\operatorname{Tor}$-Dimension'
  fr: '$\operatorname{Tor}$-dimension'
```
