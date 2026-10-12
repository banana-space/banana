---
title: Tikhonov 定理
aliases: [Tychonoff 定理, Tíhonov 定理]
categories: [一般拓扑]
---

**Tikhonov 定理**是[[点集拓扑]]的重要定理，
说的是[[紧空间]]的[[积拓扑|乘积]]紧。它与[[选择公理]]等价。

## 陈述

::: theorem
设 $\{X_i\}_{i\in I}$ 是一族[[紧空间]]。
则它们的[[积拓扑|乘积]] $X=\prod_{i\in I}X_i$ 也紧。
:::

## 证明

Tikhonov 定理有几种证明方法，从中都可看出[[选择公理]]的使用。
下面以 $\pi_i$ 记 $X=\prod_{i\in I}X_i$ 往 $i\in I$
分量的投影映射 $X\to X_i$。

### 用 Alexander 亚基定理

则由[[积拓扑]]的定义，形如 $\pi_j^{-1}(U_j)$
的集合生成 $X=\prod_{i\in I}X_i$ 的积拓扑，其中 $j$ 取遍 $I$
中元素，$U_j$ 取遍 $X_j$ 中开集。换言之，这样的集合构成 $X$
的[[亚基]]。于是由 [[Alexander 亚基定理]]，
只需证由这样的集合构成的覆盖
$X=\bigcup_{\lambda\in\Lambda}V_\lambda$ 有有限子覆盖。
如果某个 $V_\lambda$ 是全集，则它自己就构成有限子覆盖。
否则每个 $V_\lambda$ 都是一个分量 $j(\lambda)\in I$
的开真子集 $U_\lambda$ 与其它分量的全集相乘。对 $i\in I$，记
$$
\Lambda_i=\{\lambda\in\Lambda\mid j(\lambda)=i\}.
$$
如存在 $i\in I$ 使得 $X_i=\bigcup_{\lambda\in\Lambda_i}U_\lambda$，
则由 $X_i$ 的紧性，$U_\lambda$ 中有限个覆盖 $X_i$，
于是对应的 $V_\lambda$ 覆盖 $X$，这样就得到了有限子覆盖。
如对每个 $i\in I$ 都有 $X_i\ne\bigcup_{\lambda\in\Lambda_i}U_\lambda$，
则取 $x_i\in X_i$，$x_i\notin\bigcup_{\lambda\in\Lambda_i}U_\lambda$，
不难发现 $(x_i)_{i\in I}\in X$ 不在各个 $V_\lambda$ 中，
与 $X=\bigcup_{\lambda\in\Lambda}V_\lambda$ 矛盾！
所以这种情况不发生，开覆盖
$X=\bigcup_{\lambda\in\Lambda}V_\lambda$ 总有有限子覆盖。

### 用超滤子 {@用超滤子}

回忆[[拓扑空间]]紧当且仅当其每个[[超滤子]]都[[收敛]]。
故为证明 $X$ 紧，任取其超滤子 $\mathcal{U}$。令
$\mathcal{U}_i={\pi_i}_*\mathcal{U}$ 为超滤子前推，
则由于 $X_i$ 紧，$\mathcal{U}_i$ 收敛，设 $x_i\in X_i$
是其极限。令 $x=(x_i)_{i\in I}\in X$，我们来说明 $x$
是 $\mathcal{U}$ 的极限。为此只需证 $x$ 的任一邻域都属于
$\mathcal{U}$。由于[[滤子]]对有限交封闭，只需证 $x$
的任一形如 $\pi_i^{-1}(U_i)$ 的邻域都属于 $\mathcal{U}$，
其中 $U_i$ 是 $x_i\in X_i$ 的邻域。这自然是因为 $x_i$
是 $\mathcal{U}_i={\pi_i}_*\mathcal{U}$ 的极限，
$U_i\in\mathcal{U}_i={\pi_i}_*\mathcal{U}$，
从而由前推的定义 $\pi_i^{-1}(U_i)\in\mathcal{U}$。

## 推论

上面证明 Tikhonov 定理时用到了[[选择公理]]。反过来可用 Tikhonov
定理推出选择公理：

::: theorem
在 [[ZF 公理]]下，Tikhonov 定理推出选择公理。
:::

::: proof
设 $\{A_i\}_{i\in I}$ 是一族非空集合，我们来用
Tikhonov 定理推出其乘积 $\prod_{i\in I}A_i$ 非空。
为此作空间 $X_i=A_i\sqcup*$，其中 $A_i$ 赋[[余有限拓扑]]，
$*$ 为单点。由于余有限拓扑紧，两个紧空间的无交并紧，
各 $X_i$ 都紧。于是由 Tikhonov 定理，
$X=\prod_{i\in I}X_i$ 紧。对 $j\in I$ 令
$V_j=\pi_j^{-1}(A_j)$，为 $X$ 中闭集。由于在有限个
$A_j$ 中各选一个元素不需要选择公理，知对任意有限子集
$J\subseteq I$ 都有 $\bigcap_{j\in J}V_j\ne\varnothing$。
这样由 $X$ 的紧性，$\prod_{i\in I}A_i=
\bigcap_{i\in I}V_i\ne\varnothing$，得所欲证。
:::

::: remark
上面的证明用到了不 [[Hausdorff 空间|Hausdorff]] 的紧空间：
余有限拓扑。事实上这是必须的，也就是说 Hausdorff 空间的
Tikhonov 定理无法推出选择公理。这是因为 Hausdorff
空间中超滤子只能收敛到至多一个点，
从而在上面[用超滤子](@用超滤子)的证明中，如各 $X_i$ 都 Hausdorff，
选择各 $x_i$ 这一步就不需要选择公理，
于是可能用到选择公理的只剩“紧当且仅当每个超滤子都收敛”
这一命题，而它只需要[[超滤引理]]便可推出。
由于超滤引理严格弱于选择公理，用它推出的 Hausdorff 空间
Tikhonov 定理自然也会严格弱于选择公理。
:::

::: proposition
紧 [[Hausdorff 空间]]的任意[[极限 (范畴论)|极限]]还是紧
Hausdorff 空间，且只要其中任意有限极限非空，整个极限就非空。
:::

此外 [[Banach–Alaoglu 定理]]以及
[[Stone–Cech 紧化]]的存在性都是 Tikhonov 定理的推论，
详见对应主条目。

```terms
Tikhonov 定理:
  en: Tikhonov's theorem
  de: Satz von Tikhonov
  fr: théorème de Tikhonov
```
