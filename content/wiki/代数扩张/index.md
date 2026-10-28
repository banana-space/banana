---
title: 代数扩张
categories: [域论]
navboxes: [域论]
---

<problems>
- “代数扩张具有传递性”的证明中，$M_i$ 的定义似乎应为 $K(a_1,a_2,\cdots,a_i)$ 而不是 $F(a_1,a_2,\cdots,a_i)$。
</problems>

**代数扩张**是一类[[域扩张]]，
其中扩域所有元素都能写成原来的域中[[多项式]]的根。

对于任意域扩张 $K/k$，存在唯一中间域
$k\subseteq k^\mathrm{a}_K\subseteq K$，
使得 $k^\mathrm{a}_K/k$ 是代数扩张，
$K/k^\mathrm{a}_K$ 没有代数的子扩张（@相对代数闭包）。
$k^\mathrm{a}_K$ 称作 $k$ 在 $K$ 中的代数闭包。

## 定义

::: definition [代数扩张]
设 $K/k$ 是[[域扩张]]。
称 $K/k$ 为**代数扩张**，
如果任意 $a\in K$ 都是 $k$ 上的**代数元**，
即存在非零 $k$ 系数的[[多项式]] $f$ 使得 $f(a)=0$。
:::

## 性质

::: proposition
$K/k$ 是域扩张，$a\in K$ 是 $k$ 上的代数元。
假设 $f(x)$ 是 $a$ 在 $k$ 上的[[极小多项式]]，那么有同构
\[
k[x]/(f(x))\cong k(a).
\]
特别地，假设 $n$ 是 $a$ 的极小多项式的次数，
那么 $[k(a): k]=n$。
:::

::: proof
考虑映射
\[
F \colon k[x]\to k(a), \quad
g(x)\mapsto g(a).
\]
容易验证 $F$ 是[[环同态]]。由[[环同构定理]]，只用证 $F$ 的核是 $(f)$ 以及 $F$ 是满射。

先证明 $F$ 的核是 $(f)$。假设 $g(a)=0$，$g(x)\ne 0$，
若 $g\notin (f)$，
由[[多项式带余除法定理]]，存在 $q(x)\in k[x]$ 和次数小于 $f$ 的多项式
$r\in k[x]$，使得
\[
g(x)=f(x)q(x)+r(x).
\]
将 $a$ 代入得 $r(a)=0$，与 $f$ 的最小性矛盾。
因此 $F$ 的核是 $(f)$。

再证 $F$ 是满射。
$f$ 是 $a$ 在 $k$ 上的[[极小多项式]]，
即以 $a$ 为根，系数在 $k$ 中，次数最小的多项式。
假设 $f(x)$ 能写成两个次数大于 $0$ 的多项式 $s(x),t(x)$ 的积，
那么 $s(a)t(a)=0$，则 $s(a)=0$ 或者 $t(a)=0$，
与 $f$ 的取法矛盾。因此 $f$ 是[[不可约多项式]]。
取 $b\in k(a)$，则 $b =g(a)/h(a)$，其中 $g,h\in k[x]$，$h(a)\ne 0$。
由于 $f$ 不可约，所以 $f$ 与 $h$ [[互素]]。
由 [[Bézout 引理]]，存在 $f_1,h_1\in k[x]$ 使得
\[
f_1(x)f(x)+h_1(x)h(x)=1.
\]
将 $a$ 代入 $x$，再利用 $f(a)=0$ 得 $b=g(a)h_1(a)$。
因此 $b$ 在 $F$ 的像中，$F$ 是满射。
:::

::: proposition
有限扩张一定是代数扩张。
:::

::: proof
假设 $K/k$ 是有限扩张，任取 $a\in K$。
则由定义，当 $n$ 充分大时，$1,a,\cdots ,a^n$ 在 $k$ 上线性相关。
于是 $a$ 在 $k$ 上代数。
:::

::: remark
代数扩张不一定是有限扩张。
:::

结合上述两条命题我们有以下推论。

::: corollary
$K/k$ 是域扩张，$a\in K$ 是 $k$ 上的代数元当且仅当 $[k(a): k]$ 有限。
:::

::: corollary {@cor}
$K/k$ 是域扩张，设 $a, b \in K$ 是代数元，则 $k(a,b)/k$ 是代数扩张。
特别地，代数元在加减乘除下封闭。
:::

::: proof
由于
\[
[k(a,b): k]\le [k(a,b): k(a)] [k(a): k]
\]
有限，所以推论成立。
:::

::: proposition [代数扩张具有传递性] {@prop}
假设 $L/F, F/K$ 均是代数扩张，那么 $L/K$ 也是代数扩张。
:::

::: proof
任取 $a\in L$，设非零多项式 $f\in F[x]$
满足 $f(a)=0$。
设 $a_i, 1\le i\le n$ 是 $f$ 的所有系数。
令
\[
M_i=F(a_1,a_2,\cdots,a_i), M_0=K,
\]
那么 $a$ 是 $M_n$ 上的代数元。因此 $[M_n(a): M_n]$ 有限。
注意到
\[
[K(a):K]\le [M_n(a):M_n]\prod_i [M_i: M_{i-1}],
\]
因此 $[K(a):K]$ 有限，$a$ 是 $K$ 上代数元。故 $L/K$ 是代数扩张。
:::

::: proposition [相对代数闭包] {@相对代数闭包}
对于任意域扩张 $K/k$，存在唯一中间域
$k\subseteq k^\mathrm{a}_K\subseteq K$，
使得 $k^\mathrm{a}_K/k$ 是代数扩张，
$K/k^\mathrm{a}_K$ 没有代数的子扩张。

$k^\mathrm{a}_K$ 称作 $k$ 在 $K$ 中的代数闭包。
当 $K$ [[代数闭域|代数闭]]时，$k^\mathrm{a}_K$ 为 $k$
的代数闭包。
:::

::: proof
令 $k^\mathrm{a}_K$ 是 $K$ 中所有代数元构成的子集，
由 @cor 知 $k^\mathrm{a}_K$ 是 $K$ 的子域。
这样的构造显然满足 $k^\mathrm{a}_K/k$ 是代数扩张。

假设 $a\in K\backslash k^\mathrm{a}_K$ 是
$k^\mathrm{a}_K$ 上的代数元，
那么由 @prop 知 $a$ 也是 $k$ 上代数元，
与 $k^\mathrm{a}_K$ 构造矛盾。
因此 $K/k^\mathrm{a}_K$ 没有代数的子扩张。唯一性显然。

如 $K$ 代数闭，则 $k^\mathrm{a}_K$ 上的非常值多项式在 $K$
中都有根。从上一段可以看出此根在 $k^\mathrm{a}_K$ 中，
故 $k^\mathrm{a}_K$ 代数闭。它又是 $k$ 的代数扩张，
所以为 $k$ 的代数闭包。
:::

```terms
代数扩张:
  en: algebraic extension
  de: algebraische Erweiterung
  fr: extension algébrique
  grc: μεταριθμικὴ ἐπέκτασις
  la: extensio algebraica
```
