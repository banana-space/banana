---
title: Ehresmann 纤维化定理
categories: [微分几何]
---

**Ehresmann 纤维化定理**，或称 **Ehresmann 引理**，
说的是[[光滑流形]]的[[紧合映射|紧合]][[浸没]]是光滑[[纤维丛]]。

## 定理与证明

::: theorem {@thm}
$f\colon M\to N$ 是光滑流形的紧合浸没，则它是光滑纤维丛。
换言之，对任一 $p\in N$，都存在邻域 $U\ni p$ 以及紧光滑流形 $F$，
使得存在交换图表
$$
\begin{tikzcd}
  f^{-1}(U)\ar[rr,"\sim"]\ar[rd,"f"']&&U\times F\ar[ld,"\pi"]\\
  &U&
\end{tikzcd}
$$
其中 $\pi\colon U\times F\to U$ 是投影映射，水平箭头是[[微分同胚]]。
:::

定理的证明需要以下几个引理。

::: lemma {@向量场提升}
$f\colon M\to N$ 是浸没，$Y$ 是 $N$ 上向量场。则存在 $M$
上向量场 $X$ 使得 $f_*X=Y$，也就是对每个 $p\in M$，
$f_*X_p=Y_{f(p)}$。
:::

::: proof
由[[秩定理]]，存在 $M$ 的坐标图册 $\{U_i\}_{i\in I}$ 使得
$f$ 在每张坐标卡上形如标准投影 $\mathbb{R}^{n+m}\to\mathbb{R}^n$。
这样在 $U_i$ 上显然存在满足要求的向量场，记作 $X_i$。
取关于 $\{U_i\}_{i\in I}$ 的光滑[[单位分解]] $\{\varphi_i\}_{i\in I}$
并令 $X=\sum_{i\in I}\varphi_iX_i$ 即足。
:::

::: lemma {@逃逸}
设$M$是光滑流形，$X$是$M$上的向量场。
设过$M$上一点$p$的积分曲线$\varphi^t_{X}(p)$的最大定义区间为$J$。
若$\varphi^J_{X}(p)$包含在一个紧集$K$中，则$J=\mathbb{R}$。
:::

::: proof
反证法，不妨设$J$的右端点$b$有限，则$b\notin J$。取$J$中一点列$\{b_n\}$满足$b_n\rightarrow b$。
则由$K$紧，$\varphi^{b_n}_{X}(p)$在$K$中具有收敛子列，
不妨设$\varphi^{b_n}_{X}(p)$本身收敛到$q\in K$。
由于过$q$点存在积分曲线，当$n$充分大时，$\varphi^{b_n}_{X}(p)$将落在此积分曲线上，
由积分曲线的唯一性，这就意味着$\varphi^{t}_{X}(p)$延拓过了$b$，与$J$是最大定义区间矛盾。
:::

::: lemma {@定义域}
设 $f\colon M\to N$ 为光滑流形的紧合映射，$M$ 上向量场
$X$ 与 $N$ 上向量场 $Y$ 满足 $f_*X=Y$。将 $X$ 与 $Y$
生成的单参数微分同胚分别记作 $\varphi_X^t$ 与 $\varphi_Y^t$。
对 $M$ 上一点 $p$ 以及 $a<0<b$，如果 $\varphi_Y^t(f(p))$
对 $t\in(a,b)$ 有定义，则 $\varphi_X^t(p)$ 亦然。
:::

::: proof
设 $\varphi_X^t(p)$ 的定义域为 $(a',b')$，要证 $a'\le a$，$b'\ge b$。
反证法，不妨设 $b'<b$。
令 $K=f^{-1}(\varphi_Y^{[0,b']}(f(p)))\subseteq M$，
则由 $f$ 紧合，$K$ 为紧集。
注意到$\varphi_X^{[0,b')}(p)\subseteq K$，除非$b'=+\infty$，否则这与 @逃逸 矛盾，
而这又与最初的假设矛盾。
引理得证。
:::

::: proof [@thm 的证明]
取 $p\in N$，并取其坐标邻域 $U\cong\mathbb{R}^n$，坐标为 $y_1,\ldots,y_n$。
记 $Y_i=\frac{\partial}{\partial y_i}$ 为 $U$ 上向量场。
由 @向量场提升，存在 $f^{-1}(U)$ 上向量场
$X_1,\ldots,X_n$ 使得 $f_*X_i=Y_i$。以 $\varphi_i^t$ 表示
$X_i$ 生成的单参数微分同胚，则由 @定义域，
它对 $t\in\mathbb{R}$ 都有定义。于是令 $F=f^{-1}(p)$，映射
$f^{-1}(U)\to U\times F$ 取为
$$
q\mapsto(f(q),\varphi_n^{-t_n}\cdots\varphi_1^{-t_1}(q)),
$$
其中 $(t_1,\ldots,t_n)$ 是 $f(q)$ 的坐标，则它是微分同胚，
因为有逆
$$
((t_1,\ldots,t_n),q_0)\mapsto\varphi_1^{t_1}\cdots\varphi_n^{t_n}(q_0);
$$
又它显然使得定理中图表交换；于是 $f$ 是纤维丛。
:::

## 推论

::: corollary
$f\colon M\to N$ 为光滑流形的紧合浸没，$\mathcal{L}$
为 $M$ 上[[局部系]]。则 $f_*\mathcal{L}$ 为 $N$
上局部系。
:::

此结论在发展相对 [[Hodge 理论]]，或者说 Hodge 结构形变时，十分重要。

```terms
Ehresmann 纤维化定理:
  en: Ehresmann's fibration theorem
  de: Faserungsatz von Ehresmann
  fr: théorème de fibration d'Ehresmann
  la: theorema Ehresmann de fibratione
```
