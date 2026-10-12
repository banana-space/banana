---
title: Nisnevich 景
aliases: [Nisnevich 拓扑, Nisnevich 下降]
categories: [概形论, 母题论]
---

在[[代数几何]]中，**Nisnevich 景**是
[[概形]][[范畴]]配以 **Nisnevich 拓扑**而得到的[[景]]。
该拓扑由 [[Nisnevich 覆盖]]定义，
其粗细程度介于 [[Zariski 景|Zariski 拓扑]]和[[平展景|平展拓扑]]之间，
主要在[[母题论]]中使用。
Nisnevich 拓扑比平展拓扑粗，因为它只允许有理点能提升的平展覆盖。
其[[局部环]]也就是 [[Hensel 环]]而非[[严格 Hensel 环]]。

概形范畴上的一些常用拓扑列举如下，
按由粗到细排列：

[[Zariski 景|Zariski]] $<$
**Nisnevich** $<$
[[平展景|平展]] $<$
[[光滑景|光滑]] $<$
[[合割景|合割]] $<$
[[平坦景|fppf]] $<$
[[平坦景|fpqc]]

## 定义

以 $\mathsf{Sch}$ 记[[概形]]的范畴。

::: definition {@有理点定义}
设 $X$ 为概形。

- $X$ 上的**大 Nisnevich 景**
  $\mathsf{Sch}_{/X,\,\mathrm{Nis}}$ 定义为[[俯范畴]]
  $\mathsf{Sch}_{/X}$，其中开覆盖为 [[Nisnevich 覆盖]]。

- $X$ 上的**小 Nisnevich 景**
  $X_{\mathrm{Nis}}$ 定义为 $X$
  上[[平展态射|平展]]的概形构成的范畴，
  其中开覆盖为 Nisnevich 覆盖。

:::

特别地，大、小 Nisnevich 景和大、小[[平展景]]的范畴是一样的，只是覆盖不同。

文献中 Nisnevich 景还有另一种定义，使用以下概念。

::: definition [Nisnevich 方块] {@nis方}
称[[拟紧概形|拟紧]][[拟分离概形|拟分离]]概形的拉回方块
\[
\begin{tikzcd}
  W\ar[r]\ar[d]&V\ar[d,"f"]\\
  U\ar[r,"j"']&Y
\end{tikzcd}
\]
为 **Nisnevich 方块**，指：

- $j$ 是[[开浸入]]；

- $f$ 是[[平展态射]]；

- $f$ 在 $Y\setminus U$ 上是同构；

拟紧拟分离概形 $X$ 上的大、小 Nisnevich 景分别定义为 $X$
上所有拟紧拟分离概形、$X$ 上平展的拟紧拟分离概形构成的范畴，
其 [[Grothendieck 拓扑]]由空概形的空覆盖和所有
Nisnevich 方块的二元族 $(j,f)$ 生成。
:::

下面将会看到这和 @有理点定义 等价。
这个定义在检查[[层公理]]时比较方便。

## 性质

::: theorem {@定义等价}
@nis方 和 @有理点定义 等价。
:::

::: proof
@nis方 列举的生成元显然都是 [[Nisnevich 覆盖]]，
故只需对任意拟紧拟分离概形 $X$ 证明其任意 Nisnevich
覆盖 $(f_i\colon U_i\to X)_{i\in I}$
都可被 @nis方 中生成元的有限复合[[加细]]。
由 [[Nisnevich 覆盖]]条目中的相关定理，存在有限表现闭子概形链
$$
\varnothing=Z_0\subset Z_1\subset\cdots\subset Z_n=X
$$
以及相应的一族有限表现平展态射 $(g_j\colon V_j\to X)_{j=1}^n$
加细 $(f_i\colon U_i\to X)_{i\in I}$，使得 $g_j$
在 $Y_j=Z_j\setminus Z_{j-1}$ 上是同构。于是只需证
$(g_j\colon V_j\to X)_{j=1}^n$ 被 @nis方
中生成元的有限复合加细。我们对 $n$ 归纳。$n=0$
时它是空概形的空覆盖。$n>0$ 时考虑 Nisnevich 方块
\[
\begin{tikzcd}
  (V_1)_{X\setminus Z_1}\ar[r]\ar[d]&V_1\ar[d,"g_1"]\\
  X\setminus Z_1\ar[r]&X
\end{tikzcd}
\]
然后对 $X\setminus Z_1$ 上的态射族 $((g_j)_{X\setminus Z_1}
  \colon(V_j)_{X\setminus Z_1}\to X\setminus Z_1)_{j=2}^n$
用归纳假设，即得欲证。
:::

::: corollary {@切除}
设 $X$ 是拟紧拟分离概形，$\mathcal{D}$ 是[[完备范畴]]，
$F$ 是从 $X$ 上所有拟紧拟分离概形或者平展拟紧拟分离概形范畴出发，
取值在 $\mathcal{D}$ 上的[[预层]]。则 $F$ 是
Nisnevich 层当且仅当：

- $F$ 把空概形打到终对象；

- $F$ 把 Nisnevich 方块打到拉回方块；

其中第二个条件常称为 $F$ 满足 **Nisnevich 切除**。
:::

::: proof
这是 @定义等价 和 [[cd 结构]]理论的立即推论。
:::

此推论在检查层公理时很有用。

::: proposition
Nisnevich 拓扑的局部环是 [[Hensel 环]]。
:::

::: proof
回忆 $R$ 是 Nisnevich 拓扑的局部环指
$\operatorname{Spec}(R)$ 的任一 Nisnevich 覆盖都有截面。
由于 $\operatorname{Spec}(R)$ 拟紧，
把覆盖中的每个概形换成仿射开覆盖，可只讨论仿射的有限覆盖；
由于仿射概形的无交并仍仿射，可只讨论仿射的一元覆盖。
此时这就是 Hensel 环的若干等价条件之一，参见
[[Hensel 环]]条目的相关命题。
:::

::: theorem
设 $X$ 为概形。则 $X$ 的小 Nisnevich 景有足够的点，
由 $X$ 在每个点处的 Hensel 化给出。$X$ 的大 Nisnevich
景也有足够的点，由 $X$ 上的所有 Hensel 环给出。
:::

## 例子

::: example
[[代数 $K$ 理论]]，准确地说[[不连合 $K$ 理论]]，
是 Nisnevich 层，但不是平展层。为验证它是 Nisnevich 层，
由 @切除 只需验证它满足 Nisnevich 切除，因为
$K(\varnothing)=0$ 是显然的。任取 Nisnevich 方块
\[
\begin{tikzcd}
  W\ar[r]\ar[d]&V\ar[d]\\
  U\ar[r,"j"']&Y
\end{tikzcd}
\]
需要验证其代数 $K$ 理论是拉回方块。由于[[完美复形]]可以
Nisnevich 下降（甚至可以[[平坦下降]]），由 @切除
它满足 Nisnevich 切除，也就是说
\[
\begin{tikzcd}
  \mathsf{Perf}(W)&\mathsf{Perf}(V)\ar[l]\\
  \mathsf{Perf}(U)\ar[u]&\mathsf{Perf}(Y)\ar[l]\ar[u]
\end{tikzcd}
\]
是[[稳定 $(\infty,1)$-范畴]]的拉回方块。记
$Z=Y\setminus U=V\setminus W$，取横向纤维得
\[
\begin{tikzcd}
  \mathsf{Perf}(W)&\mathsf{Perf}(V)\ar[l]&\mathsf{Perf}_Z(V)\ar[l]\\
  \mathsf{Perf}(U)\ar[u]&\mathsf{Perf}(Y)\ar[l]\ar[u]&\mathsf{Perf}_Z(Y)\ar[l]\ar[u,equal]
\end{tikzcd}
\]
而由 $j_*\colon\mathsf{D}(U)\to\mathsf{D}(Y)$ 和
$(j_V)_*\colon\mathsf{D}(W)\to\mathsf{D}(V)$
[[满忠实函子|满忠实]]，不难得知横向的纤维列是 [[Karoubi 列]]，
被代数 $K$ 理论打到[[谱 (拓扑学)|谱]]的纤维列。所以
\[
\begin{tikzcd}
  K(W)&K(V)\ar[l]\\
  K(U)\ar[u]&K(Y)\ar[l]\ar[u]
\end{tikzcd}
\]
也是拉回方块。
:::

```terms
Nisnevich 景:
  en: Nisnevich site
```
