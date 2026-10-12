---
title: 链同伦
aliases: [链同伦等价]
categories: [同调代数]
notices:
  - name: 问题
    items:
      - “几何直观”一节需要扩充。
      - '“推广”一节中高阶链同伦的定义似乎缺少符号：当 $d=2$ 时，$G^1-F^1$ 满足 $\partial\circ(G^1-F^1)+(G^1-F^1)\circ\partial=0$，而 $H^2\circ\partial+\partial\circ H^2$ 一般不满足这一点，通常的定义中两项之间带有符号 $(-1)^d$。'
navboxes: [同调代数]
---

**链同伦**是[[链复形]]的映射之间的[[等价关系]]，
是[[拓扑学]]中[[同伦]]概念在[[同调代数]]中的类比。

## 定义

设 $\mathcal{A}$ 是[[加性范畴]]，$\mathsf{Ch}(\mathcal{A})$
是其[[链复形]]范畴，采用同调记号。

::: definition {@def}
对链复形 $(C,\partial^C),(D,\partial^D)\in
  \mathsf{Ch}(\mathcal{A})$ 及链映射 $f,g\colon C\to D$，
**$f$ 到 $g$ 的链同伦**指映射族
$$
H=(H_n\colon C_n\to D_{n+1})_{n\in\mathbb{Z}},
$$
满足
$$
f+H\circ\partial^C+\partial^D\circ H=g,
$$
也就是对所有整数 $n$，
$$
f_n+H_{n-1}\circ\partial^C_n+\partial^D_{n+1}\circ H_n=g_n.
$$
我们用记号 $H\colon f\to g$ 或 $H\colon f\simeq g$ 表示
$H$ 是 $f$ 到 $g$ 的链同伦，即它们满足上述等式。称链映射
$f$ 和 $g$ **链同伦**，记作 $f\simeq g$，
指存在 $f$ 到 $g$ 的链同伦。称 $0$ 到 $g$ 的链同伦为
$g$ 的**零伦**。如这样的链同伦存在，则称链映射 $g$
**零伦**。
:::

::: definition [同伦等价]
对链复形 $C,D\in\mathsf{Ch}(\mathcal{A})$，称链映射
$f\colon C\to D$ 为**链同伦等价**或无歧义时**同伦等价**，
指存在链映射 $g,h\colon D\to C$ 以及链同伦
$G\colon\operatorname{id}_C\simeq g\circ f$，
$H\colon\operatorname{id}_D\simeq f\circ h$。存在这样的 $f$ 时，
称 $C$ 和 $D$ **同伦等价**。
:::

::: remark
当然也可以用上同调记号，这里就不再写一遍了。
:::

## 性质

本节中设 $\mathcal{A}$ 是加性范畴，$\mathsf{Ch}(\mathcal{A})$
是其链复形范畴，$C,D\in\mathsf{Ch}(\mathcal{A})$。

::: proposition
设 $r\in\mathbb{N}$，$f_0,f_1,\ldots,f_r\colon C\to D$
是链映射，$H_i$ 是 $f_{i-1}$ 到 $f_i$ 的链同伦，
对 $i=1,\ldots,r$。则 $H_1+\cdots+H_r$ 是
$f_0$ 到 $f_r$ 的链同伦。
:::

::: proposition
设 $f,g\colon C\to D$ 是链映射，$H$ 是 $f$ 到 $g$
的链同伦。则 $-H$ 是 $g$ 到 $f$ 的链同伦。
:::

::: proposition
设 $f,g,h\colon C\to D$ 是链映射，$H$ 是 $f$ 到 $g$
的链同伦。则 $H$ 也是 $f+h$ 到 $g+h$ 的链同伦。特别地，
$f$ 到 $g$ 的链同伦就是 $g-f$ 的零伦。
:::

::: proposition
设 $f,g\colon C\to D$ 是链映射，$H_0,H_1$ 是 $f$ 到 $g$
的链同伦。则 $H_1-H_0$ 是 $C[1]$ 到 $D$ 的链映射。
:::

::: proposition
设 $\mathcal{A}$ 是 [[Abel 范畴]]。
则链同伦的链映射在同调上给出的同态相同。
:::

## 几何直观

## 推广

::: definition [高阶同伦]
@def 可推广到高阶。设 $\mathcal{A}$ 是加性范畴，
$C,D\in\mathsf{Ch}(\mathcal{A})$ 是链复形。对自然数 $d$，
归纳定义 **$d$ 阶链同伦**如下：

- $0$ 阶链同伦是链映射 $C\to D$。

- 设对每个自然数 $i<d$ 给定两族映射
  $(F^i_n,G^i_n\colon C_n\to D_{n+i})_{n\in\mathbb{Z}}$，
  使得 $F^i,G^i$ 是 $F^{i-1}$ 到 $G^{i-1}$
  的 $i$ 阶链同伦。则 **$F^{d-1}$ 到 $G^{d-1}$
  的 $d$ 阶链同伦**指映射族
  $$
  H^d=(H^d_n\colon C_n\to D_{n+d})_{n\in\mathbb{Z}},
  $$
  满足
  $$
  F^{d-1}+H^d\circ\partial^C+\partial^D\circ H^d=G^{d-1},
  $$
  此时记 $H^d\colon F^{d-1}\to G^{d-1}$ 或
  $H^d\colon F^{d-1}\simeq G^{d-1}$。

:::

::: remark
$\mathsf{Ch}(\mathcal{A})$ 的所有高阶链同伦构成
[[Rezk $\Theta$-空间]]，它给出的 [[$\infty$-范畴]]就是
$\mathcal{A}$ 的[[链复形同伦 $\infty$-范畴]]，
通常记作 $\mathsf{K}(\mathcal{A})$。
:::

```terms
链同伦:
  en: chain homotopy
```
