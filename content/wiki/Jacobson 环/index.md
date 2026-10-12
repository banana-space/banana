---
title: Jacobson 环
categories: [交换代数]
navboxes: [交换代数]
---

**Jacobson 环**指的是任一商环都满足 [[Jacobson 根]]等于[[幂零根]]这一性质的[[交换环]]。
它的理论推广了 [[Hilbert 零点定理]]。

## 定义

::: definition
交换环 $A$ 称为 Jacobson 环，指对其每个理想 $I$，
$A/I$ 的 [[Jacobson 根]]等于[[幂零根]]。
:::

::: remark
由于 Jacobson 根是所有极大理想的交，幂零根是所有素理想的交，
故以上定义也等价于对 $A$ 的每个素理想 $\mathfrak{p}$ 都有
$$
\mathfrak{p}=\bigcap_{\mathfrak{p}\subseteq\mathfrak{m}极大理想}\mathfrak{m}.
$$
:::

::: remark
定义中不能只要求 $A$ 自己的 Jacobson 根等于幂零根。
由于任一交换环上的一元多项式环的 Jacobson 根都等于幂零根，
只要求自己得到的概念意义不大。
:::

## 例子

- 由 [[Hilbert 零点定理]]，域上有限生成的环是 Jacobson 环。

- 显然 $\mathbb{Z}$ 是 Jacobson 环。故
  $\mathbb{Z}$ 上有限生成的环也是 Jacobson 环。

- 零维环的素理想和极大理想是一回事，故零维环都是 Jacobson 环。

- [[Krull 维数|维数]]大于 $0$ 的[[局部环]]不是 Jacobson 环。
  但对 Noether 局部环 $(R,\mathfrak{m})$ 以及 $f\in\mathfrak{m}$，
  [[局部化]] $R_f$ 是 Jacobson 环。

## 性质

不 Jacobson 的环有如下刻画：

::: lemma {@反向刻画}
环 $A$ 不 Jacobson，当且仅当存在元素 $f$ 以及不极大的素理想
$\mathfrak{p}$，使得 $(A/\mathfrak{p})_f$ 是域。
:::

::: proof
如存在这样的 $f$ 和 $\mathfrak{p}$，则由于 $A/\mathfrak{p}$ 不是域但
$(A/\mathfrak{p})_f$ 是域，有 $f$ 属于 $A/\mathfrak{p}$
的每个极大理想，否则该极大理想将成为 $(A/\mathfrak{p})_f$
的非零素理想；但 $f\notin\mathfrak{p}$，于是
$\mathfrak{p}$ 不等于包含它的所有极大理想之交，$A$ 不 Jacobson。

反过来如 $A$ 不 Jacobson，设理想 $I\subseteq A$ 满足 $A/I$ 的 Jacobson 根大于幂零根。
取 $f\in A$，在 $A/I$ 中的像在其 Jacobson 根中但不在幂零根中，
则 $(A/I)_f\ne0$。取 $(A/I)_f$ 的极大理想 $\mathfrak{p}$，
视为 $A$ 的理想，则 $(A/\mathfrak{p})_f$ 是域。
由于 $f\notin\mathfrak{p}$ 但 $f$ 在 $A/I$ 的
Jacobson 根中，$\mathfrak{p}$ 不可能极大。
:::

以下推论虽被后面的定理覆盖，但在定理证明过程中需要用到。

::: corollary {@主局部化}
$A$ 是 Jacobson 环，$f\in A$，则 $A_f$ 也是 Jacobson 环，
且其中极大理想交 $A$ 仍极大。特别地，如果 $A$ 是 Jacobson 整环而不是域，
那么 $A_f$ 也是 Jacobson 整环而不是域。
:::

::: proof
如 $A_f$ 中极大理想 $\mathfrak{m}$ 满足 $\mathfrak{p}=\mathfrak{m}\cap A$
不极大，则 $(A/\mathfrak{p})_f=A_f/\mathfrak{m}$ 是域，
与 @反向刻画 矛盾。

如 $A_f$ 不 Jacobson，取元素 $g\in A_f$ 以及不极大的素理想
$\mathfrak{q}\subseteq A_f$ 使得 $(A_f/\mathfrak{q})_g$
是域。写 $g=\frac{h}{f^n}$，$n\in\mathbb{N}$，$h\in A$。令 $\mathfrak{p}=\mathfrak{q}\cap A$。
则 $\mathfrak{p}$ 在 $A$ 中不极大，且 $(A/\mathfrak{p})_{fh}=(A_f/\mathfrak{q})_g$
是域，于是 $A$ 不 Jacobson。
:::

以下定理是 Hilbert 零点定理的推广，是 Jacobson 环最重要的性质。

::: theorem
设 $A$ 是 Jacobson 环，环 $B$ 在 $A$ 上[[有限生成代数|有限生成]]，
则 $B$ 也是 Jacobson 环。此外，对 $B$ 的极大理想 $\mathfrak{n}$，
如令 $\mathfrak{m}=\mathfrak{n}\cap A$，则 $\mathfrak{m}$
是 $A$ 的极大理想，且 $B/\mathfrak{n}$
在 $A/\mathfrak{m}$ 上[[有限扩张|有限]]。
:::

::: proof
注意定理如对同态 $A\to B$ 与 $B\to C$ 成立，
则它对 $A\to C$ 也成立。由于有限生成同态是形如 $A\to A[x]$
的同态以及满射的复合，而对满射即 $B$ 是 $A$ 的商环情形定理显然，
故只需证 $B=A[x]$ 情形。

反证法，如 $A[x]$ 不 Jacobson，用 @反向刻画
取出 $\mathfrak{p}\subseteq A[x]$ 不极大以及 $f(x)\notin\mathfrak{p}$
使得 $(A[x]/\mathfrak{p})_f$ 是域。以 $A/(\mathfrak{p}\cap A)$ 代替 $A$，不妨设 $A$
是整环，分式域为 $K$，且 $\mathfrak{p}\cap A=0$。
换言之 $\mathfrak{p}$ 与乘性子集 $A\setminus0\subseteq A[x]$ 无交，故
$\mathfrak{p}$ 是 $(A\setminus0)^{-1}A[x]=K[x]$ 的素理想与 $A[x]$
的交。由于 $K[x]$ 是[[主理想整环]]，现在只有两种情况：

- $\mathfrak{p}=0$。

- $\mathfrak{p}=p(x)K[x]\cap A[x]$，其中
  $p(x)\in K[x]$ 首一不可约。

由于 $K[x]_{f(x)}$ 尚不是域，$A[x]_{f(x)}$ 更不会是域，
故第一种情况不可能，只有第二种情况。此时如 $A=K$ 是域则
$\mathfrak{p}$ 就是极大理想，所以 $A$ 不是域。
由于 $f(x)\notin\mathfrak{p}=p(x)K[x]\cap A[x]$，
在 $K[x]$ 中有 $(p(x),f(x))=1$，故可取 $g(x),h(x)\in K[x]$ 使得
$$
g(x)p(x)+h(x)f(x)=1.
$$
现在令 $a\in A$ 为上式左边四个多项式各系数分母之积。
于是 $p(x)\in A_a[x]$ 首一，从而 $\mathfrak{p}A_a[x]=p(x)K[x]\cap A_a[x]=p(x)A_a[x]$；
又 $f(x)\in(A_a[x]/p(x))^\times$，从而
$A_a[x]/p(x)=(A_a[x]/p(x))_{f(x)}=(A[x]/\mathfrak{p})_{af}$ 是域，
即 $A_a[x]/p(x)=K[x]/p(x)$。但两边分别是 $A_a$ 与 $K$ 上秩为 $\deg p$ 的自由模，
于是 $A_a=K$ 是域，这与 @主局部化 矛盾！故 $A[x]$ Jacobson。

考虑 $A[x]$ 的极大理想 $\mathfrak{n}$，令 $\mathfrak{m}=\mathfrak{n}\cap A$。
商去 $\mathfrak{m}$ 可设 $\mathfrak{m}=0$。和上面类似，不难得到
$\mathfrak{n}=p(x)K[x]\cap A[x]$，其中 $p(x)\in K[x]$ 首一不可约。
令 $a$ 为 $p(x)$ 各系数分母之积，则同样
$\mathfrak{n}A_a[x]=p(x)A_a[x]$。于是 $A_a[x]/p(x)$ 是域，
和上面一样地，$A_a$ 是域，从而由 @主局部化 知 $A$ 是域，
从而 $\mathfrak{m}=0$ 极大。现在 $A_a=A$，
$B/\mathfrak{n}$ 无非就是 $A[x]/p(x)$，自然在 $A/\mathfrak{m}=A$ 上有限。
:::

该定理有以下显然而重要的推论，常用来将一些问题化归到有限域上。

::: corollary
$\mathbb{Z}$ 上有限生成环 Jacobson，且极大理想的剩余域都是有限域。
:::

以下命题比较漂亮。

::: proposition
设 $(R,\mathfrak{m})$ 是 Noether 局部环，
$f\in\mathfrak{m}$。则 $R_f$ 是 Jacobson 环。
:::

::: proof
反证法，仍用 @反向刻画 取出不极大的 $\mathfrak{p}$
以及元素 $g$ 使得 $(R_f/\mathfrak{p})_g$ 是域。
把 $R$ 换成 $R/\mathfrak{p}$，可设 $\mathfrak{p}=0$。
现在 $(R,\mathfrak{m})$ 是 Noether 局部整环，
维数至少是 $2$（由于 $0$ 在 $R_f$ 中不是极大理想，所以尚有理想严格在 $0$ 和 $\mathfrak{m}$ 之间），
存在元素 $r\in\mathfrak{m}$ 使得 $R_r$ 是域（写 $g=\frac{h}{f^N}$，取 $r=fh$），
要推矛盾。

由[[结合素理想]]的理论，包含 $r$ 的极小素理想只有有限个，
设为 $\mathfrak{p}_1,\ldots,\mathfrak{p}_n$。
由 [[Krull 高度定理]]，这些素理想的[[高度]]都是 $1$，都不是极大理想。
由[[素理想回避]]，存在元素 $s\in\mathfrak{m}$，不在任一 $\mathfrak{p}_i$ 中。
取包含 $s$ 的极小素理想 $\mathfrak{q}$，则它不是任一个 $\mathfrak{p}_i$，
而高度又是 $1$，故它不包含 $r$。我们找到了不包含 $r$ 的非零素理想，
与 $R_r$ 是域矛盾！命题得证。
:::

```terms
Jacobson 环:
  en: Jacobson ring
  de: Jacobsonring
  fr: anneau de Jacobson
```
