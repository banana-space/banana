---
title: 可分扩张
aliases: [可分元]
categories: [域论]
navboxes: [域论]
---

**可分扩张**是一类重要的[[域扩张]]，
其中扩域的元素都能写成可分多项式的根。

## 定义

::: definition
$k$ 是域，$\bar k$ 是 $k$ 的代数闭包，
$f(x)\in k[x]$ 称为**可分多项式**若它的每个不可约因子在
$\bar k$ 中没有重根。
:::

[[判别式]]或者[[形式导数]]能不借助代数闭包来判断一个多项式是否可分（@prop）。

::: definition [可分元]
$K/k$ 是域扩张，$a \in K$ 在$k$上代数，如果 $a$ 在 $k$ 上的[[极小多项式]]是可分多项式，
则称$a$是$k$上的**可分元**。
:::

::: definition [可分扩张]
$K/k$ 是[[代数扩张]]，若任意 $a\in K$ 都是可分元，则称 $K/k$ 为**可分扩张**。
:::

根据 @prop，特征零的域上的不可约多项式一定是可分的，从而特征零的域的代数扩张一定是可分扩张。
因此可分扩张只对特征$p$的域有意义。

::: definition
如果对 $k$ 的任意[[代数扩张]]都是可分扩张，则 $k$ 称为[[完全域]]。
:::

## 性质

::: proposition [可分多项式等价定义] {@prop}
假设 $f\in k[x]$ 是不可约多项式，则下述条件等价：

- $f$ 是可分多项式。

- $f$ 的判别式 $\Delta (f)$ 不为零。

- $f$ 与它的形式导数 $f'$ 互素。

:::

## 可分次数

::: definition
对于有限域扩张 $k\subseteq K$，称 $k$-同态 $K\to \bar k$（$\bar k$ 是 $k$ 的代数闭包）
的个数为域扩张 $k\subseteq K$ 的**可分次数**，记作 $[K:k]_s$。
:::

可分次数和可分性密切相关。我们将证明，对于有限域扩张 $k\subseteq K$，
\[
S= \{u\in K: u\text{在 $k$ 上可分} \}
\]
成一域，且 $[K:k]_s= [S: k]$。

::: proposition {@prop:tower-property-of-separability-degree}
对有限扩张塔 $K \subseteq E \subseteq F$，$[F:E]_s [E:K]_s= [F:K]_s$。
:::

::: proof
设 $\sigma_i: E\to \bar K$（$1\le i\le t$）是所有 $t$ 个 $K$-同态，
$\tau_j: F\to \bar K$（$1\le j\le s$）是所有 $s$ 个 $E$-同态。
每个 $\sigma_i$ 都可以延拓成 $\bar K$ 的 $K$-自同构，为方便计，仍将这个自同构记作 $\sigma_i$。
我们断言 $\sigma_i\circ \tau_j$ 是所有 $F\to \bar K$ 的 $st$ 个不同 $K$-同态，
从而 $[F:E]_s [E:K]_s= st= [F:K]_s$。
一方面，若有 $\sigma_i\circ \tau_j= \sigma_a\circ \tau_b$，
则 $\sigma_a^{-1} \sigma_i\circ \tau_j= \tau_b$，
$\sigma_a^{-1} \sigma_i$ 在 $E$ 上限制为恒等映射，$\sigma_a= \sigma_i$。
从而 $\tau_j= \tau_b$，这证明了 $\sigma_i\circ \tau_j$ 两两不同。
另一方面，对于 $K$-同态 $\sigma: F\to \bar K$，$\sigma$ 在 $E$ 上的限制必为某个 $\sigma_i$，
$\sigma_i^{-1} \circ \sigma$ 是一个 $F\to \bar K$ 的 $E$-同态，
设 $\sigma_i^{-1} \circ \sigma= \tau_j$，则 $\sigma= \sigma_i\circ \tau_j$。
所以 $\sigma_i\circ \tau_j$ 确实是所有 $F\to \bar K$ 的 $st$ 个不同 $K$-同态。
:::

::: proposition {@prop:equivalent-characterizations-of-separable-extension}
对有限域扩张 $k\subseteq K$，下述断言等价：

(1) $k\subseteq K$ 是可分扩张

(2) $K= k(S)$，$S$ 为一个有限集且其中每个元素都在 $k$ 上可分。

(3) $[K:k]_s= [K:k]$。
:::

::: proof
首先我们注意到，对于单代数扩张 $k\subseteq k(u)$，
$[k(u): k]_s$ 与 $[k(u): k]$ 分别是 $u$ 极小多项式不同根的个数和次数
（因为 $k(u)\to \bar k$ 的所有 $k$-同态由 $u$ 的像确定，而 $u$ 的像能且仅能是 $u$ 极小多项式的根），
所以 $[k(u): k]_s\le [k(u): k]$
且等号成立当且仅当 $u$ 极小多项式不同根的个数等于极小多项式次数，即 $u$ 极小多项式无重根，
即 $u$ 可分。
对于有限扩张 $k\subseteq K= k(u_1,\cdots, u_n)$，考虑
\[
k\subseteq k(u_1)\subseteq k(u_1, u_2)\subseteq\cdots \subseteq k(u_1,\cdots, u_n)= K,
\]
知 $[K: k]_s\le [K:k]$（@prop:tower-property-of-separability-degree），
且等号成立当且仅当每个 $u_i$ 可分。这证明了 $(2)\iff (3)$。

$(1) \implies (2)$：取 $S$ 为 $K$ 作为 $k$ 上线性空间的一组基即可。

$(3)\implies (1)$：任取 $u\in K$，
$[K: k(u)]_s\cdot [k(u): k]_s= [K: k]_s= [K:k]= [K: k(u)]\cdot [k(u): k]$，
其中第一个等号是 @prop:tower-property-of-separability-degree，第二个等号是假设。
回忆我们第一段证明了可分次数总小于次数，所以 $[k(u): k]_s= [k(u): k]$，$[K: k(u)]_s= [K: k(u)]$，
由第一段和 $[k(u): k]_s= [k(u): k]$ 知 $u$ 在 $k$ 上可分。
由 $u$ 的任意性，$k\subseteq K$ 可分。
:::

::: corollary {@cor:some-corollaries-on-separable-extension}
(1) 若 $k\subseteq K$ 为代数扩张且 $K= k(S)$，$S$ 中每个元素都在 $k$ 上可分，
则 $k\subseteq K$ 是可分扩张。

(2) 若 $k\subseteq K$ 为代数扩张，$S= \{u\in K: u\text{在 $k$ 上可分}\}$，
则 $S$ 为一域。

(3) $k\subseteq E\subseteq F$，$k\subseteq E$ 与 $E\subseteq F$ 是可分扩张。
则 $k\subseteq F$ 是可分扩张。
:::

::: proof
(1) 对任意 $u\in K$，存在 $S$ 的有限子集 $S_0$ 使得 $u\in k(S_0)$，由
@prop:equivalent-characterizations-of-separable-extension 的 $(2)\implies (1)$
知 $k\subseteq k(S_0)$ 是可分扩张，于是 $u\in k(S_0)$ 在 $k$ 上可分。

(2) 由 @prop:equivalent-characterizations-of-separable-extension 的 $(2)\implies (1)$
知，若 $a, b$ 在 $k$ 上可分，则 $a+b, -a, ab, a^{-1}\in k(a, b)$ 也可分，从而可分元素成一域。

(3) 任取 $u\in F$，设 $u$ 在 $E$ 上极小多项式是 $f(x)= x^n+ a_{n-1} x^{n-1}+\cdots +a_1 x+a_0$，
$a_i\in E$。考虑域扩张
\[
k\subseteq k(a_0, a_1,\cdots, a_n)\subseteq k(a_0, a_1,\cdots, a_n, u).
\]
$f\in k(a_0, a_1,\cdots, a_n)[x]$，$u$ 在 $k(a_0, a_1,\cdots, a_n)$ 上极小多项式是 $f$ 的因式
（实际上$u$ 在 $k(a_0, a_1,\cdots, a_n)$ 上极小多项式就是 $f$），从而无重根，
所以 $k\subseteq k(a_0, a_1,\cdots, a_n)$ 和
$k(a_0, a_1,\cdots, a_n)\subseteq k(a_0, a_1,\cdots, a_n, u)$
都是可分扩张（@prop:equivalent-characterizations-of-separable-extension）。
我们把命题转化成了 $[E:k], [F:E]$ 均有限的情形，
而此时命题成立是因为 @prop:equivalent-characterizations-of-separable-extension 的 $(3)\iff (1)$。
:::

::: proposition
对于有限域扩张 $k\subseteq K$，$[K:k]_s= [S: k]$，其中 $S$ 是 $K$ 中 $k$ 上可分元成的域。
:::

::: proof
$k$ 的特征是 $0$ 时 $k\subseteq K$ 可分，从而 $S= k$，
由 @prop:equivalent-characterizations-of-separable-extension 知命题成立。下面假设 $k$ 特征 $p$。

若 $\sigma: S\to \bar k$ 为 $k$-同态，它可以延拓成 $\bar k$ 的 $k$ 自同构，
这一自同构限制在 $K$ 上就给出 $K\to \bar k$ 的 $k$-同态 $\tau$。
我们断言 $\theta: \sigma\mapsto \tau$ 给出 $S\to \bar k$ 的 $k$-同态所成之集与
$K\to \bar k$ 的 $k$-同态所成之集的双射。
首先如果 $\sigma: S\to \bar k$ 有两个延拓 $f_1, f_2\in \text{Aut}_k \bar k$，
由 @cor:some-corollaries-on-separable-extension 的 (3)
知每个 $x\in K-S$ 在 $S$ 上不可分，从而完全不可分（见页面 [[完全不可分元]]），所以存在 $n$，
$x^{p^n}= s\in S$。
$f_1(x)^{p^n}= f_1(s)= \sigma (s)= f_2(s)= f_2(x)^{p^n}$，所以 $f_1(x)= f_2(x)$，
即 $\theta$ 是良定的。对于 $\tau: K\to \bar k$，$\tau\mapsto \tau|_S$ 显然是 $\theta$ 的逆映射，
故 $\theta$ 是双射，
$[K:k]_s= [S:k]_s= [S:k]$（最后一个等号是 @prop:equivalent-characterizations-of-separable-extension），
命题获证。
:::

```terms
可分扩张:
  en: separable extension
```
