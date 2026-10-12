---
title: 泛闭态射
categories: [概形论]
navboxes: [态射性质]
---

[[代数几何]]中，**泛闭态射**指的是[[概形]][[态射]]，
满足其所有的[[基变换]]都是[[闭映射]]。此概念比较抽象，
大致可以理解为拓扑中紧而未必 Hausdorff 的空间的类比。

## 定义

::: definition
[[概形]][[态射]] $X \to S$ 称为**泛闭态射**，
意思是对任一概形 $T\to S$，[[基变换]] $X\times_ST\to T$
在拓扑空间上为闭映射，即闭集的像都是闭集。
:::

## 性质

::: proposition
- 泛闭态射是局部的。

- 泛闭态射的复合还是泛闭态射。

- 泛闭态射的[[基变换]]还是泛闭态射。

- 泛闭态射的乘积还是泛闭态射。

:::

::: proposition {@像集}
设 $f\colon X\to Y$，$g\colon Y\to S$ 是概形态射，
满足复合 $gf$ 泛闭，而 $g$ 分离。则 $f$ 泛闭，
且从[[概像]] $f(X)$ 到 $S$ 的自然映射亦泛闭。
:::

::: theorem
泛闭态射都[[拟紧态射|拟紧]]。
:::

::: proof
设 $f\colon X\to Y$ 不为拟紧，来证其不泛闭。
由于二者都是[[局部性质]]，可设 $Y=\operatorname{Spec}R$
仿射。取仿射开覆盖 $X=\bigcup_{i\in I}X_i$，
并令 $T=\operatorname{Spec}(R[t_i]_{i\in I})$
为 $Y$ 上概形，$T_i=D(t_i)$ 为其开子集。则对每个 $i\in I$，
$X_i\times_YT_i\subseteq X\times_YT$ 为开子集。
以 $Z$ 记它们全部并起来之补，为 $X\times_YT$ 的闭子集。
我们来证明 $f_T\colon X\times_YT\to T$ 不把 $Z$
映射到闭集，从而得到 $f$ 不泛闭。

首先存在 $y\in Y$，使得对任一邻域 $U\ni y$，态射
$f^{-1}(U)\to U$ 都不拟紧，否则由拟紧的局部性，
$f$ 将会拟紧。

考虑 $T_y=\operatorname{Spec}(k(y)[t_i]_{i\in I})$
中每个 $t_i$ 都等于 $1$ 的点，记为 $t$。它属于每个 $T_i$；
而对 $z\in Z$，如 $z$ 在 $X$ 的像属于 $X_i$，则依 $Z$
的定义，$z$ 在 $T$ 的像不属于 $T_i$；所以 $f_T(Z)\notni t$。
现假设 $f_T(Z)$ 为闭集。则存在多项式 $g\in R[t_i]_{i\in I}$
使得 $t\in D(g)$ 且 $D(g)\cap f_T(Z)=\varnothing$。
取有限子集 $J\subseteq I$
使得 $g$ 中只出现 $t_j$，$j\in J$。
以 $g(1)\in R$ 记代入每个 $t_i=1$ 之后
$g$ 的值，则它在 $k(y)$ 的像非零。把 $Y$ 换成 $Y_{g(1)}$，
可设 $g(1)$ 可逆。由上一段，换完之后 $X$ 仍不拟紧，
故可取 $x\in X$ 使得对 $j\in J$ 都有 $x\notin X_j$。
记 $y'=f(x)$。考虑 $T_{y'}=
\operatorname{Spec}(k(y')[t_i]_{i\in I})$ 中每个
$t_j$，$j\in J$ 都等于 $1$，其余变量都等于 $0$ 的点，
记为 $t'$。则由 $J$ 的取法以及 $g(1)$ 可逆便知
$t'\in D(g)$。现取 $z\in X\times_YT$，在 $X$ 中的像是
$x$，在 $T$ 中的像是 $t'$。则由于对 $j\in J$ 都有
$x\notin X_j$，对 $i\notin J$ 都有 $t'\notin T_i$，
可知 $z\in Z$。而 $f_T(z)=t'\in D(g)$，与
$D(g)\cap f_T(Z)=\varnothing$ 矛盾！从而 $f_T(Z)$
不是闭集，$f$ 不泛闭。
:::

::: proposition [赋值判别法]
态射 $X\to Y$ 泛闭，当且仅当其[[拟紧态射|拟紧]]，
且对任意[[赋值环]] $R$ 以及任意如下图表（其中 $K$ 是 $R$
的分式域，$\operatorname{Spec}K\to\operatorname{Spec}R$
为自然映射），
\[
\begin{tikzcd}
  \operatorname{Spec}K\ar[r]\ar[d]&X\ar[d]\\
  \operatorname{Spec}R\ar[r]\ar[ur,dashed]&Y
\end{tikzcd}
\]
存在虚线箭头使图表交换。
:::

证明见条目[[赋值判别法]]。

::: theorem
[[仿射态射|仿射]]泛闭态射和[[整态射]]是一回事。
:::

::: proof
整态射仿射泛闭比较容易。首先它依定义就是仿射的。
其次由[[整同态]]的素理想上行不难得知整态射都是闭的，
见主条目。于是由整态射在基变换下保持就知道泛闭。

另一边就比较麻烦。显然只需考虑仿射情形。设环同态
$A\to B$ 在谱上泛闭，任取 $b\in B$，要证明 $b$ 在
$A$ 上整。基变换到 $A[b^{-1}]$，由于
$A[b^{-1}]\to A[b^{-1}]\otimes_A B\to B_b$
的第二个箭头即乘法映射是环满射，复合映射 $A[b^{-1}]\to B_b$ 也在谱上泛闭。
于是由以下引理可设 $b^{-1}\in A$。由 @像集，可设 $B=A[b]$。
这样 $B=A_{b^{-1}}$ 是[[局部化]]，
$\operatorname{Spec}B=D(b^{-1})$ 是 $A$ 中主开集。
但它又闭，所以是开闭集含入，那么当然整。
:::

::: lemma
$A\to B$ 是[[环同态]]，$b\in B$。考虑[[局部化]]
$B_b$ 的子环 $A[b^{-1}]$。如 $b\in B_b$ 在 $A[b^{-1}]$
上整，$b$ 就在 $A$ 上整。
:::

::: proof
写出 $B_b$ 中等式
$$
b^n+c_1b^{n-1}+\cdots+c_n=0,\qquad
c_1,\ldots,c_n\in A[b^{-1}].
$$
把 $c_1,\ldots,c_n$ 具体写成 $b^{-1}$ 的 $A$
系数多项式，再展开，可得 $B_b$ 中等式
$$
b^n+a_1b^{n-1}+\cdots+a_Nb^{n-N}=0,\qquad
a_1,\ldots,a_N\in A.
$$
由局部化的具体定义便知存在自然数 $M\ge N-n$ 使得上式两边乘以
$b^M$ 之后是 $B$ 中等式，于是 $b$ 在 $A$ 上整。
:::

## 例子

- [[闭浸入]]是泛闭态射。

- [[射影态射]]是泛闭态射，例如射影空间 $\mathbb{P}^n_S \to S$
  是泛闭态射。

- 仿射空间 $\mathbb{A}^n_S \to S$ （$n \geq 1$）
  不是泛闭态射。

```terms
泛闭态射:
  en: universally closed morphism
  de: universal abgeschlossener Morphismus
  fr: morphisme universellement fermé
  grc: καθολικῶς κλειστὸς μορφισμός
  la: morphismus universaliter clausus
```
