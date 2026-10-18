---
title: Nisnevich 覆盖
aliases: [Nisnevich 态射]
categories: [概形论]
---

在[[代数几何]]中，
**Nisnevich 覆盖**是满足额外条件的[[平展景|平展覆盖]]。
直观而言，平展态射类似于[[微分几何]]中的[[局部微分同胚]]；
看起来像[[覆叠映射]]的态射都构成平展覆盖。
但 Nisnevich 覆盖要求更强的性质，
大致而言，它不允许非平凡的 $n > 1$ 重覆叠。
例如，当基域[[特征 (代数)|特征]]不是 $2$ 时，态射
\[
\begin{aligned}
  f \colon \mathbb{A}^1 \setminus \{ 0 \}
  & \longrightarrow \mathbb{A}^1 \setminus \{ 0 \} , \\
  x & \longmapsto x^2
\end{aligned}
\]
是平展覆盖，但不是 Nisnevich 覆盖，因为它是非平凡的二重覆叠。
又例如，态射
\[
\begin{aligned}
  f \colon \{ (x, y) \in \mathbb{A}^2 \mid x y = 0 \}
  & \longrightarrow \mathbb{P}^1 / \{ 0, \infty \} , \\
  (x, 0) & \longmapsto x, \\
  (0, y) & \longmapsto 1 / y
\end{aligned}
\]
是 Nisnevich 覆盖，这里右边是将[[射影直线]]中两点粘起来所得的[[结点]]曲线。
虽然该态射也是某种二重覆叠，但它限制在定义域的各[[不可约分支]]上都是一重覆叠，
因此是允许的。

Nisnevich 覆盖的概念定义了概形范畴上的 [[Grothendieck 拓扑]]，称为 [[Nisnevich 拓扑]]，
其粗细程度介于 [[Zariski 景|Zariski 拓扑]]与[[平展景|平展拓扑]]之间。

## 定义

::: definition {@有理点定义}
称一族[[概形态射]] $(f_i \colon U_i \to X)_{i\in I}$ 为
**Nisnevich 覆盖**，若其满足以下条件：

- 诸 $f_i$ 是[[平展态射]]。

- 对每个点 $x \in X$，存在 $i\in I$ 及 $u \in U_i$，使得
  $f_i(u) = x$，且 $f_i$ 诱导 $u$、$x$ 处[[剩余域]]的[[同构]]。

:::

## 例子

- [[Zariski 景|Zariski 覆盖]]是 Nisnevich 覆盖。

- 考虑[[域]] $k$ 上的概形 $\mathbb{A}^1$ 及态射
  \[
  \begin{aligned}
    f \colon \bigl( \mathbb{A}^1 \setminus \{ a \} \bigr)
    \sqcup \bigl( \mathbb{A}^1 \setminus \{ 0 \} \bigr)
    & \longrightarrow \mathbb{A}^1 , \\
    \mathbb{A}^1 \setminus \{ a \} \text{ 中} \quad
    x & \longmapsto x, \\
    \mathbb{A}^1 \setminus \{ 0 \} \text{ 中} \quad
    y & \longmapsto y^m ,
  \end{aligned}
  \]
  其中 $a \in k \setminus \{ 0 \}$，且 $\operatorname{char}k\nmid m$。
  则 $f$ 是 Nisnevich 覆盖当且仅当 $y^m = a$ 在 $k$ 中有解。

## 性质

@有理点定义 易于检查而不易操作，
但对[[拟紧概形|拟紧]][[拟分离概形|拟分离]]概形，
我们可以用形状比较简单的覆盖加细它。

::: theorem
设 $X$ 是拟紧拟分离概形，$(f_i\colon U_i\to X)_{i\in I}$
是一族平展态射。则以下几条等价：

1. {@有理点} $(f_i\colon U_i\to X)_{i\in I}$ 是
   Nisnevich 覆盖。

2. {@截面} 存在 $X$ 的[[有限表现态射|有限表现]][[闭子概形]]链
   \[
   \varnothing=Z_0\subset Z_1\subset\cdots\subset Z_n=X
   \]
   满足对每个 $j=1,\ldots,n$，都存在 $i\in I$ 使得
   $f_i\colon U_i\to X$ 在 $Y_j=Z_j\setminus Z_{j-1}$
   上有[[截面]]，即存在 $s_j\colon Y_j\to(U_i)_{Y_j}$，
   使得 $(f_i)_{Y_j}\circ s_j=\operatorname{id}_{Y_j}$。

3. {@nis方} 存在 $X$ 的[[有限表现态射|有限表现]][[闭子概形]]链
   \[
   \varnothing=Z_0\subset Z_1\subset\cdots\subset Z_n=X
   \]
   以及相应的一族有限表现平展态射
   $(g_j\colon V_j\to X)_{j=1}^n$ [[加细]]
   $(f_i\colon U_i\to X)_{i\in I}$，
   使得 $g_j$ 在 $Y_j=Z_j\setminus Z_{j-1}$ 上是同构。

:::

::: proof
{@nis方}推{@截面}推{@有理点}为显然。下证
{@有理点}推{@nis方}。把诸 $U_i$ 换成其仿射开覆盖，
可设它们[[拟紧概形|拟紧]]、[[分离概形|分离]]，于是诸 $f_i$
[[拟紧态射|拟紧]]、[[分离态射|分离]]，特别地，它们有限表现。
考虑使{@nis方}在 $Y$ 上不成立的闭子概形
$Y\subseteq X$ 的集合，我们希望证明它是空集。
先证其中每个链都有下界：对一链闭子概形
$(Y_\alpha)_{\alpha\in\Alpha}$，设{@nis方}在
$Y=\bigcap_{\alpha\in\Alpha}Y_\alpha$ 上成立；
则由于{@nis方}涉及的态射都有限表现，
由[[过渡到极限]]知{@nis方}对某个 $Y_\alpha$ 成立。
所以由 [[Zorn 引理]]，如{@nis方}不成立，
则存在极小的使之不成立的闭子概形 $Y\subseteq X$。把 $X$
换成 $Y$，可设{@nis方}对 $X$ 不成立，但对 $X$
的真闭子概形都成立。显然 $X\ne\varnothing$。在其中取[[普遍点]]
$x$，即没有非平凡一般化的点。由[[极小素理想]]的存在性这可以取到。
于是 $\mathcal{O}_{X,x}^\mathrm{red}=k(x)$。由
{@有理点}，对某个 $i\in I$ 存在态射
$\operatorname{Spec}(k(x))\to U_i$ 提升自然态射
$\operatorname{Spec}(k(x))\to X$。由平展态射的幂零提升性质，
这给出态射 $\operatorname{Spec}(\mathcal{O}_{X,x})\to U_i$
提升自然态射 $\operatorname{Spec}(\mathcal{O}_{X,x})\to X$。
于是由过渡到极限，存在 $x$ 的拟紧开邻域 $V\subseteq X$
以及 $f_i$ 在 $V$ 上的截面 $s\colon V\to U_i$。取有限表现闭子概形
$Z\subset X$ 使得 $V=X\setminus Z$，则{@nis方}
在 $Z$ 上成立。取 $Z$ 的有限表现闭子概形链
$$
\varnothing=Z_0\subset Z_1\subset\cdots\subset Z_n=Z
$$
以及相应的一族有限表现平展态射 $(h_j\colon W_j\to Z)_{j=1}^n$
[[加细]] $((f_i)_Z\colon(U_i)_Z\to Z)_{i\in I}$，
使得 $h_j$ 在 $Y_j=Z_j\setminus Z_{j-1}$ 上是同构。
考虑加细给出的映射 $s_j\colon W_j\to(U_{i_j})_Z$。
它是有限表现平展态射，像是拟紧开集，所以存在有限表现闭子概形
$T_j\subset(U_{i_j})_Z$ 使得 $s_j(W_j)=(U_{i_j})_Z\setminus T_j$。
令 $V_j=U_{i_j}\setminus T_j$，$g_j\colon V_j\to X$
为自然态射，则它在 $X$ 上有限表现平展，且在 $Y_j$ 上是同构。
考虑 $X$ 的有限表现闭子概形链
$$
\varnothing=Z_0\subset Z_1\subset\cdots\subset Z_n\subset Z_{n+1}=X
$$
以及有限表现平展态射族 $(g_j\colon V_j\to X)_{j=1}^{n+1}$，
其中 $V_{n+1}=V$，$g_{n+1}=f_i\circ s$。容易发现这满足
{@nis方}，与反证法假设矛盾。
:::

```terms
Nisnevich 覆盖:
  en: Nisnevich cover
  fr: recouvrement de Nisnevich :m
```
