---
title: 链复形
aliases: [上链复形]
categories: [同调代数]
notices:
  - name: 问题
    items:
      - “例子”“同伦论”“Dold–Kan 对应”各节需要扩充。
navboxes: [同调代数]
---

**链复形**是指由 [[Abel 群]]（或[[模]]、[[向量空间]]等）构成的形如
\[
\cdots \to C_{n+1}
\overset{\partial_{n+1}}{\longrightarrow} C_n
\overset{\partial_n}{\longrightarrow} C_{n-1}
\to \cdots
\]
的无穷长序列，其中任两个相邻映射的复合为 $0$。
链复形也可以记作
\[
\cdots \to C^{n-1}
\overset{d^{n-1}}{\longrightarrow} C^n
\overset{d^n}{\longrightarrow} C^{n+1}
\to \cdots ,
\]
这种指标写成上标的链复形也被称为**上链复形**。

链复形是[[同调代数]]的研究对象。
通过与[[拓扑空间]]的[[奇异链复形]]进行类比，
我们可以将链复形视为[[空间]]的一种代数形式。
这种观点也称为[[代数拓扑–同调代数类比]]。

## 定义

### 链复形

::: definition [链复形] {@thm:链复形}
设 $\mathcal{A}$ 是[[加性范畴]]。
则 $\mathcal{A}$ 中的**链复形** $(C_\bullet, \partial)$ 由以下信息构成：

- 对每个 $n \in \mathbb{Z}$，
  有一个[[对象]] $C_n \in \mathcal{A}$。

- 对每个 $n \in \mathbb{Z}$，
  有一个[[态射]] $\partial_n \colon C_n \to C_{n-1}$，称为**微分**。

它们满足：

- 对任意 $n \in \mathbb{Z}$，复合态射 $\partial_n \circ \partial_{n+1} = 0$。
  这一条件常常简记为 $\partial^2 = 0$。

:::

以下术语是[[拓扑空间]]的[[奇异链复形]]中相应概念的类比。

::: definition [链、圈、边界]
@thm:链复形 中，

- $C_n$ 也称为 **$n$-链**构成的对象。

若 $\mathcal{A}$ 中还有[[核 (代数)|核]]、[[像 (范畴论)|像]]的概念，
例如若 $\mathcal{A}$ 是 [[Abel 范畴]]，则

- $Z_n = \ker (\partial_n \colon C_n \to C_{n-1})$
  称为 **$n$-圈**构成的对象。

- $B_n = \operatorname{im} (\partial_{n+1} \colon C_{n+1} \to C_n)$
  称为 **$n$-边界**构成的对象。

:::

::: definition [链映射] {@链映射}
链复形 $(C_\bullet, \partial^C)$ 和 $(D_\bullet, \partial^D)$
间的**链映射** $f \colon C \rightarrow D$ 是指一[[族]]态射
$(f_n \colon C_n \rightarrow D_n)_{n \in \mathbb{Z}}$，
使得对每个 $n \in \mathbb{Z}$，
都有 $f_{n-1} \circ \partial^C_n = \partial^D_n \circ f_n$。
换言之，下述图表[[交换图|交换]]：
\[
\begin{tikzcd}
  \cdots \ar[r] & C_n \ar[r, "\partial^C_n"] \ar[d, "f_n"] & C_{n-1} \ar[r] \ar[d, "f_{n-1}"] & \cdots \\
  \cdots \ar[r] & D_n \ar[r, "\partial^D_n"'] & D_{n-1} \ar[r] & \cdots
\end{tikzcd}
\]
:::

::: definition [链复形范畴]
设 $\mathcal{A}$ 是[[加性范畴]]。
则 $\mathcal{A}$ 中所有链复形（@thm:链复形）
和它们之间的链映射（@链映射）构成的[[范畴]]称为
$\mathcal{A}$ 上的**链复形范畴**，
记作 $\mathsf{Ch}_\bullet (\mathcal{A})$。
:::

### 上链复形

上链复形的概念与链复形（@thm:链复形）是等价的，
只不过记号有微小的差别。

::: definition [上链复形] {@thm:上链复形}
设 $\mathcal{A}$ 是[[加性范畴]]。
则 $\mathcal{A}$ 中的**上链复形**（有时也称为**链复形**）
$(C^\bullet, d)$ 由以下信息构成：

- 对每个 $n \in \mathbb{Z}$，
  有一个[[对象]] $C^n \in \mathcal{A}$。

- 对每个 $n \in \mathbb{Z}$，
  有一个[[态射]] $d^n \colon C^n \to C^{n+1}$，称为**微分**。

它们满足：

- 对任意 $n \in \mathbb{Z}$，复合态射 $d^{n+1} \circ d^n = 0$。

:::

以下术语是[[拓扑空间]]的[[奇异上链复形]]中相应概念的类比。

::: definition [上链、上圈、上边界]
@thm:上链复形 中，

- $C^n$ 也称为 **$n$-上链**构成的对象。

若 $\mathcal{A}$ 中还有[[核 (代数)|核]]、[[像 (范畴论)|像]]的概念，
例如若 $\mathcal{A}$ 是 [[Abel 范畴]]，则

- $Z^n = \ker (d^n \colon C^n \to C^{n+1})$
  称为 **$n$-上圈**构成的对象。

- $B^n = \operatorname{im} (d^{n-1} \colon C^{n-1} \to C^n)$
  称为 **$n$-上边界**构成的对象。

:::

与 @链映射 类似，上链复形间也有**链映射**的概念。

::: definition [上链复形范畴]
设 $\mathcal{A}$ 是[[加性范畴]]。
则 $\mathcal{A}$ 中所有上链复形（@thm:上链复形）
和它们之间的链映射构成的[[范畴]]称为
$\mathcal{A}$ 上的**上链复形范畴**（有时也称为**链复形范畴**），
记作 $\mathsf{Ch}^\bullet (\mathcal{A})$。
:::

链复形（@thm:链复形）
与上链复形（@thm:上链复形）
可以通过记号互换
\[
C_n \longleftrightarrow C^{-n}
\]
来相互转换。这说明[[范畴等价]]
\[
\mathsf{Ch}_\bullet (\mathcal{A}) \simeq
\mathsf{Ch}^\bullet (\mathcal{A}).
\]
我们有时也用 $\mathsf{Ch} (\mathcal{A})$
来表示这两个范畴中的任一个。链复形范畴也是加性范畴。

## 例子

## 性质

### 链同调

<see>[[链同调]]</see>

在定义中的记号下，假设 $\mathcal{A}$ 具有核、像、[[商对象]]的概念，
例如假设 $\mathcal{A}$ 为 [[Abel 范畴]]。
在链复形 $(C_\bullet, \partial)$ 中，
微分映射 $\partial$ 满足 $\partial^2 = 0$，因此有 $B_n \subset Z_n$，
商对象 $H_n (C_\bullet) = Z_n / B_n$ 称为 $(C_\bullet, \partial)$ 的 $n$ 阶**同调**。
类似地，上链复形 $(C^\bullet, d)$ 中，
商对象 $Z^n / B^n$ 称为其 $n$ 阶**上同调**，
记为 $H^n (C^\bullet)$。

### 同伦论

### Dold–Kan 对应

```terms
链复形:
  en: chain complex
  de: Kettenkomplex :m
  fr: complexe de chaines :m
上链复形:
  en: cochain complex
  de: Kokettenkomplex :m
  fr: complexe de cochaines :m
```
