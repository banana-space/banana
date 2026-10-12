---
title: Lindelöf 空间
aliases: [Lindelof 空间]
categories: [一般拓扑]
navboxes: [一般拓扑]
---

**Lindelöf 空间**是一类[[拓扑空间]]，
其每个[[开覆盖]]都有可数子覆盖。它既是一种紧性，
又是一种可数性。

## 定义

::: definition
称[[拓扑空间]] $X$ 为 **Lindelöf 空间**，
指其每个开覆盖都有可数子覆盖。换言之，对任意开覆盖
$\mathcal{U}=\{U_i\subseteq X\}_{i\in I}$，
存在子集 $J\subseteq I$ 至多可数，使得
$$
\bigcup_{i\in J}U_i=X.
$$
:::

## 性质

::: proposition {@闭子集}
Lindelöf 空间的闭子空间 Lindelöf。
:::

::: proof
与紧集的闭子集紧证明一样。设 $X$ 是 Lindelöf 空间，
$Y\subseteq X$ 是其闭子空间。$\mathcal{V}=
  \{V_i\subseteq Y\}_{i\in I}$
是 $Y$ 的开覆盖。取开子集 $U_i\subseteq X$ 使得
$U_i\cap Y=V_i$，则所有的 $U_i$ 连同 $X\setminus Y$
构成 $X$ 的开覆盖。它的可数子覆盖给出 $\mathcal{V}$
的可数子覆盖，因为 $X\setminus Y$ 不参与覆盖 $Y$。
:::

::: proposition
Lindelöf 空间在[[连续映射]]下的像 Lindelöf。
:::

::: proof
与紧集的像集紧证明一样。
:::

::: proposition
设 $X$ 是拓扑空间，$\mathcal{B}$ 是其[[开集基]]。
如 $\mathcal{B}$ 中开集组成的开覆盖
$\mathcal{U}\subseteq\mathcal{B}$ 都有可数子覆盖，
则 $X$ 是 Lindelöf 空间。
:::

::: theorem
[[正则空间|正则]] Lindelöf 空间[[正规空间|正规]]。
:::

::: proof
设 $X$ 是正则 Lindelöf 空间，$Y,Z\subseteq X$
为不交的闭子集。用正则性，对每个 $y\in Y$ 取不交开集
$U_y\ni y$ 和 $T_y\supseteq Z$。由 @闭子集，
$U_y$ 之中的可数个足以覆盖 $Y$，设为 $U_1,U_2,\ldots$，
对应于 $T_1,T_2,\ldots\supseteq Z$。对每个正整数 $n$，
把 $T_n$ 换成 $\bigcap_{i=1}^nT_i$，可设
$T_1\supseteq T_2\supseteq\cdots\supseteq Z$。
把 $Y$ 和 $Z$ 换过来，可同样地取开集 $V_1,V_2,\ldots$
覆盖 $Z$ 以及 $S_1\supseteq S_2\supseteq\cdots\supseteq Y$，
满足对任意正整数 $i$，$V_i\cap S_i=\varnothing$。令
$$
A=\bigcup_{i=1}^\infty (U_i\cap S_i),\,
B=\bigcup_{j=1}^\infty (V_j\cap T_j),
$$
则 $A$、$B$ 都是开集，且 $A\supseteq Y$，$B\supseteq Z$。
下证 $A\cap B=\varnothing$。为此只需对任意 $i,j\in\mathbb{Z}_+$
证明 $U_i\cap S_i\cap V_j\cap T_j=\varnothing$。
我们分两种情况：如 $i\le j$，则 $T_j\subseteq T_i$，故
$U_i\cap T_j\subseteq U_i\cap T_i=\varnothing$；
如 $i\ge j$，则 $S_i\subseteq S_j$，故
$S_i\cap V_j\subseteq S_j\cap V_j=\varnothing$。
不论如何都有 $U_i\cap S_i\cap V_j\cap T_j=\varnothing$。
:::

::: theorem
对[[度量空间]]，[[可分空间|可分]]、Lindelöf、
[[第二可数空间|第二可数]]等价。
:::

## 例子

- 显然[[紧空间]]都 Lindelöf。更一般地，
  [[$\sigma$-紧空间]]都 Lindelöf。

- [[第二可数空间]]都 Lindelöf。

- 不可数的[[离散空间]]不 Lindelöf。

::: example
考虑[[左闭直线]] $\mathbb{R}_\ell$，即[[实数]]集 $\mathbb{R}$
上由开集基
$$
\{[a,b)\mid a,b\in\mathbb{R},\,a<b\}
$$
生成的拓扑。

- $\mathbb{R}_\ell$ 是 Lindelöf 空间。取其开覆盖
  $\mathcal{U}=\{U_i\subseteq \mathbb{R}_\ell\}_{i\in I}$，
  我们来证明它有可数子覆盖。由于
  $\mathbb{R}=\bigcup_{n,m\in\mathbb{Z}}[n,m)$，
  只需对任意 $a,d\in\mathbb{R}$ 证明 $[a,d)$
  被 $\mathcal{U}$ 中的可数个开集覆盖。为此考虑集合
  $$
  S=\{b\in\mathbb{R}\mid\text{$[a,b)$
  被 $\mathcal{U}$ 中的可数个开集覆盖}\}.
  $$

  - 如 $b\le a$，则 $b\in S$，因为此时
    $[a,b)=\varnothing$。

  - 如一列实数 $b_1,b_2,\ldots$ 都属于 $S$，
    则 $b=\sup_{n\in\mathbb{Z}_+}b_n$ 属于 $S$，因为此时
    $$
    [a,b)=\bigcup_{n\in\mathbb{Z}_+}[a,b_n).
    $$

  - 如 $b\in S$，则存在 $c>b$ 使得
    $[b,c)\subseteq S$。这是因为 $\mathcal{U}$
    是开覆盖，从而存在 $i\in I$ 使得 $b\in U_i$；
    又因为 $U_i\subseteq\mathbb{R}_\ell$ 是开集，
    存在 $c>b$ 使得 $[b,c)\subseteq U_i$；
    这样，覆盖 $[a,b)$ 的可数个开集连同 $U_i$ 便覆盖
    $[a,c)$。

  所以 $S=\mathbb{R}$，命题得证。

- [[积空间]] $\mathbb{R}_\ell^2$ 不是 Lindelöf 空间。
  这是因为其闭子空间
  $$
  \{(x,y)\in\mathbb{R}_\ell^2\mid x+y=0\}
  $$
  是不可数的离散空间，不 Lindelöf。故 Lindelöf
  空间的积空间未必 Lindelöf。
  本例也说明[[可分空间]]未必 Lindelöf，因为
  $\mathbb{R}_\ell^2$ 可分，具有稠密子集 $\mathbb{Q}^2$。

:::

```terms
Lindelöf 空间:
  en: Lindelöf space
```
