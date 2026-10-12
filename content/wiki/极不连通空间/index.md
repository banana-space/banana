---
title: 极不连通空间
categories: [一般拓扑]
---

**极不连通空间**是比[[完全不连通空间]]更加不连通的一类[[拓扑空间]]。
[[紧空间|紧]]的极不连通空间是紧 [[Hausdorff 空间]]范畴的[[投射对象]]，
在 [[Stone 对偶]]下对应于[[完备 Boole 代数]]。

## 定义

::: definition
称[[拓扑空间]] $X$ 为**极不连通空间**，意思是 $X$
[[Hausdorff 空间|Hausdorff]]，且 $X$ 中开集的闭包仍是开集。
也称[[紧空间|紧]]的极不连通空间为**极不连通集**。
:::

## 性质

::: proposition {@不交}
设 $X$ 是极不连通空间，$U,V$ 是其不交开子集。则
$\overline{U},\overline{V}$ 也不交。特别地，
极不连通空间[[完全不连通空间|完全不连通]]。
:::

::: proof
由开性自然有 $\overline{U}$ 和 $V$ 不交。由极不连通，
$\overline{U}$ 也开，所以 $\overline{U}$ 和
$\overline{V}$ 不交。

现用反证法证 $X$ 完全不连通。反设相异两点 $u,v\in X$
处于一个连通分支，并取不交邻域 $U,V$。令 $W=X\setminus
  \overline{U}$，则它是包含 $V$ 的开集，而且
$\overline{U}\cup\overline{W}=X$。于是闭集
$\overline{U}$ 和 $\overline{W}$ 在 $u,v$
所处的连通分支内有交，与上一段矛盾。
:::

::: lemma {@包含}
设 $f\colon Y\to X$ 是拓扑空间的[[连续映射|连续]][[满射]]，
满足对任意闭子集 $T\subsetneqq Y$ 都有 $f(T)\subsetneqq X$。
则对任意开子集 $U\subseteq Y$ 都有
$f(U)\subseteq\overline{X\setminus f(Y\setminus U)}$。
:::

::: proof
取 $x\in f(U)$ 并取其邻域 $W$，我们来证明 $W$ 与
$X\setminus f(Y\setminus U)$ 有交。注意
$V=U\cap f^{-1}(W)$ 是 $Y$ 中非空开集，故由条件
$X\setminus f(Y\setminus V)$ 非空。它一方面包含于 $W$，
因为 $V\subseteq f^{-1}(W)$；另一方面又包含于
$X\setminus f(Y\setminus U)$，因为 $V\subseteq U$。
所以 $W$ 与 $X\setminus f(Y\setminus U)$ 有交，
引理得证。
:::

::: lemma {@同胚}
设 $f\colon Y\to X$ 是紧 Hausdorff
空间的连续满射，且 $X$ 极不连通。又设对任意闭子集
$T\subsetneqq Y$ 都有 $f(T)\subsetneqq X$。
则 $f$ 是[[同胚]]。
:::

::: proof
由于紧 Hausdorff 空间之间的连续双射是同胚，只需证 $f$
是单射。反设相异两点 $u,v\in Y$ 满足 $f(u)=f(v)=x$，
并取不交邻域 $U\ni u$，$V\ni v$。则由紧 Hausdorff 以及条件，
$Z=f(Y\setminus U)$，$W=f(Y\setminus V)$ 都是 $X$
中闭的真子集，且由 $U,V$ 不交知 $Z\cup W=X$。于是由
@不交，$\overline{X\setminus Z}$ 和
$\overline{X\setminus W}$ 不交；又由 @包含，
$x\in f(U)\subseteq\overline{X\setminus Z}$，
$x\in f(V)\subseteq\overline{X\setminus W}$，
矛盾！引理得证。
:::

以下[[投射对象|投射]]性最为重要。

::: theorem
设 $X$ 是紧 Hausdorff 空间。以下几条等价：

1. $X$ 极不连通。

2. 对任意紧 Hausdorff 空间 $Y$ 以及连续满射
   $f\colon Y\to X$，$f$ 都有[[截面]]，即存在连续映射
   $s\colon X\to Y$，$f\circ s=\operatorname{id}_X$。

3. 对紧 Hausdorff 空间的任意连续满射
   $g\colon W\to Z$ 以及连续映射 $t\colon X\to Z$，
   $t$ 都能提升到 $W$，即存在连续映射
   $\tilde{t}\colon X\to W$，$g\circ\tilde{t}=t$。

:::

::: proof
- 3推2 取 $Z=X$，$t=\operatorname{id}_X$ 即可。

- 2推3 取 $Y=W\times_ZX$，$f=g\times_ZX$ 即可。

- 2推1 设 $U$ 是 $X$ 的开集。则自然映射
  $f\colon\overline{U}\sqcup(X\setminus U)\to X$
  是满射。取其截面 $s$，则 $\overline{U}=
      s^{-1}(\overline{U})$ 是开集。所以 $X$ 极不连通。

- 1推2 设 $Y$ 是紧 Hausdorff 空间，
  $f\colon Y\to X$ 是连续满射。由紧性，可用
  [[Zorn 引理]]取出极小的闭子集 $E\subseteq Y$
  满足 $f(E)=X$。于是 $f|_E$ 满足 @同胚
  的条件，故它是同胚。这样它的逆就是所求的截面。

:::

由 @不交，紧的极不连通空间是 [[Stone 空间]]。
下面描述它在 [[Stone 对偶]]下的对应物。

::: theorem {@stone}
紧的极不连通空间在 Stone 对偶下对应于[[完备 Boole 代数]]。
:::

::: proof
先证极不连通空间的 Stone 对偶完备。
由 Stone 对偶的定义，这相当于证明对任一族开闭集
$\{A_i\}_{i\in I}$，都存在开闭集 $A$ 包含每个 $A_i$，
使得只要开闭集 $B$ 包含每个 $A_i$，它就包含 $A$。
由极不连通空间的定义，取 $A=\overline{\bigcup_{i\in I}A_i}$
即满足要求。

再证完备 Boole 代数的对偶极不连通。任取其开集 $U$，由于
Stone 空间的开闭集构成拓扑基，$U$ 是一些开闭集
$\{A_i\}_{i\in I}$ 的并。由完备性，存在开闭集 $A$，
是各 $A_i$ 的上确界，只需证 $A=\overline{U}$。
这是因为如果 $A\setminus\overline{U}$ 非空，
取其中非空开闭子集 $B$，$A\setminus B$ 就会是各 $A_i$
的更小上界，与 $A$ 是上确界矛盾。
:::

::: remark
@stone 能给出很多极不连通空间的例子，
因为写出[[完备 Boole 代数]]通常比写出极不连通空间容易得多。
比如[[幂集]] Boole 代数 $\mathcal{P}(X)$ 的 Stone 对偶就是
$X$ 视为离散空间的 [[Stone–Čech 紧化]]，是个极不连通空间。
:::

```terms
极不连通空间:
  en: extremally disconnected space
  fr: espace extrêmement discontinu
  la: spatium extreme discontinuum
```
