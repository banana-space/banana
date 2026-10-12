---
title: 整体维数
categories: [同调代数, 一般环论]
---

[[环]]的**整体维数**是其同调复杂性的一个度量，
指的是其模范畴中 [[Ext|$\operatorname{Ext}$]] 函子的最远延伸，
也即其中“本质不分裂”的[[正合列]]的最大长度。

## 定义

::: definition
环 $R$ 的**左（右）整体维数**，
记作 $\operatorname{l.\,gl.\,dim}R$（$\operatorname{r.\,gl.\,dim}R$），
指的是左（右）$R$-模范畴的[[同调维数]]，即
$$
\operatorname{l.\,gl.\,dim}R=\sup\{n\in\mathbb{N}\mid\exists M,N\in R\text{-}\mathsf{Mod},\,\operatorname{Ext}^n(M,N)\ne0\}.
$$
无歧义时常常省去名称和记号中的左（右）。
:::

通常不讨论零环的整体维数，或将其约定为 $-1$ 或 $-\infty$。
依以上定义，非零环的同调维数取值在 $\mathbb{N}\cup\{\infty\}$。

## 性质

::: proposition {@关系}
环 $R$ 的左整体维数是其各左模[[投射维数]]的上确界，
也是它们[[内射维数]]的上确界，即
$$
\operatorname{l.\,gl.\,dim}R
=\sup\{\operatorname{pd}_R(M)\mid M\in R\text{-}\mathsf{Mod}\}
=\sup\{\operatorname{id}_R(M)\mid M\in R\text{-}\mathsf{Mod}\}.
$$
:::

::: proof
依定义显然。
:::

::: proposition
$$
\operatorname{gl.\,dim}R=\inf\{n\in\mathbb{N}\mid\operatorname{Ext}^{n+1}(-,-)=0\}.
$$
特别地，$\operatorname{gl.\,dim}R=0$ 等价于所有左 $R$-模[[短正合列]]分裂，
即 $R$ [[半单环|半单]]。
:::

::: proof
由 @关系，这是[[投射维数]]或[[内射维数]]对应命题的直接推论。
:::

以下命题说明算整体维数时只需检查很少一部分模。

::: proposition {@弱化}
环 $R$ 的左整体维数等于其单生成左模投射维数的上确界，即
$$
\operatorname{l.\,gl.\,dim}R=\sup\{\operatorname{pd}(R/J)\mid J\subseteq R\,左理想\}
=\inf\{n\in\mathbb{N}\mid\forall J\subseteq R\,左理想,\,
\operatorname{Ext}^{n+1}(R/J,-)=0\}.
$$
:::

::: proof
这是[[内射维数]]对应命题的立即推论。
:::

::: proposition
环的左整体维数大于等于其
[[$\operatorname{Tor}$-维数]]。
对左 [[Noether 环]]此二维数相等。特别地，双边 Noether 环的左右整体维数相等，
都等于 $\operatorname{Tor}$-维数。
:::

::: proof
第一句话是因为模的[[投射维数]]大于等于[[平坦维数]]。
第二句话是因为由 @弱化 我们只需检查单生成左模的投射维数；
而它们的投射维数等于平坦维数。
:::

## 例子

- 上面命题中已经指出，左整体维数为 $0$ 的环恰是[[半单环]]。特别地，
  左整体维数为 $0$ 和右整体维数为 $0$ 等价。

- $\mathbb{Z}$ 的整体维数是 $1$。$\mathbb{Z}/4$ 的整体维数是 $\infty$，
  因为它的模 $\mathbb{Z}/2$ 显然没有有限投射消解。

- [[Serre]] 证明了 Noether 局部交换环的整体维数有限当且仅当其是[[正则环]]。
  这是以同调方法研究[[交换代数]]的开端。

- 一般情况下左右整体维数未必相等。上三角矩阵环
  $\left[\begin{matrix}\mathbb{Z}&\mathbb{Q}\\0&\mathbb{Q}\end{matrix}\right]$
  左整体维数是 $2$，右整体维数和 $\operatorname{Tor}$-维数一样是 $1$。

- 左右整体维数也可以都大于 $\operatorname{Tor}$ 维数。
  [[赋值环]]的 $\operatorname{Tor}$ 维数总是 $1$，
  但其中不离散者整体维数常大于 $1$，例如 $\mathbb{Z}_p$ 在 $\mathbb{Q}_p$
  代数闭包中的整闭包。

```terms
整体维数:
  en: global dimension
  de: globale Dimension
  fr: dimension globale
```
