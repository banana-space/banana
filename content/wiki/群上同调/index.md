---
title: 群上同调
categories: [群论]
notices:
  - name: 问题
    items:
      - 引言需要扩充。
      - “幺半结构”一节需要扩充。
---

**群上同调**是对[[群]]赋予的 Abel 群不变量，
以反映（结构可能复杂）的群的性质。

## 定义

- 以下约定 $G$ 是群，$M$ 是 $\mathbb{Z}[G]$-模，
  这等价于 $G$-模，即带有 $G$-[[群作用|作用]]的 [[Abel 群]]。

::: definition [$G$-不动点]
$M$ 中 **$G$-不动点**为
$M^{G}=\{m\in M\mid gm=m,\text{ 对任意 }g\in G\}$。
$M \mapsto M^G$ 给出了 $\mathbb{Z}[G]$-[[模范畴]]
到 [[Abel 群范畴]]的[[左正合]][[函子]]，
因为它等价于函子 $\operatorname{Hom}_{\mathbb{Z}[G]}(\mathbb{Z},-)$
（其中 $\mathbb{Z}$ 赋予平凡 $G$ 作用）。
:::

::: definition [群上同调]
**群 $G$ 的 $M$-系数的上同调**为
$M$ 在上述 $G$-不动点函子 $(-)^G$ 的[[导出函子]]下的像。
如此，它的 $r$ 阶上同调群是
\[
H^{r}(G,M) = \operatorname{Ext}^r_{\mathbb{Z}[G]}(\mathbb{Z}, M).
\]
:::

::: remark
在 [[$\infty$-范畴]]的语言中，
$M$ 可以视为 Abel 群的[[导出 $\infty$-范畴]]
$\mathcal{D}(\mathbb{Z})$ 中的对象，带有 $G$-[[群作用|作用]]。
此时群上同调即是在 $\mathcal{D}(\mathbb{Z})$ 中，
$M$ 的[[同伦不动点|同伦 $G$-不动点]] $M^{hG}$。
:::

在一些理论中会用到下面的群上同调理论，把群上同调和[[群同调]]拼起来，
称为 [[Tate 上同调]]。

::: definition [Tate 上同调]
对有限群 $G$ 和 $G$-模 $M$，
**[[Tate 上同调]]** $\hat{H}^0(G, M)$ 是下述映射的[[余核]]：
\[
M \to M^G, \quad m \mapsto \sum_{g \in G} gm.
\]
对正整数 $k$，Tate 上同调 $\hat{H}^k(G, M)$
定义为上同调本身 $H^k(G, M)$。
对负整数 $k$，它则基本上是群同调。
:::

## 性质

### 具体计算

假设 $P_{r}$ 是由所有 $r+1$-元组 $(g_0,\cdots,g_{r})$（其中
$g_{i}\in G$）生成的[[自由模|自由 $\mathbb{Z}$-模]]。
$P_{r}$ 可以赋予 $G$-模结构，其上的 $G$-作用是
\[
g\cdot (g_0,\cdots ,g_{r})=(g\cdot g_0,\cdots ,g\cdot g_{r}).
\]
从 $P_r$ 到 $P_{r-1}$ 有线性算子 $d_{r}:P_{r}\rightarrow P_{r-1}$，在其基上满足：
\[
d_{r}(g_0,\cdots ,g_{r})=\sum_{i=0}^{r}(-1)^{i}(\cdots,\hat{g}_{i},\cdots).
\]
其中 $\hat{\cdot}$ 表示从 $r+1$-元组去掉一个元素变为 $r$-元组。

::: proposition
$P_{\bullet}\rightarrow \mathbb{Z}$ 是 $\mathsf{Mod}_{G}$ 里的[[投射消解]]。
:::

::: proposition
$H^{r}(G,M)\simeq H^{r}(\operatorname{Hom}_{G}(P_{\bullet},M))$（右边的上同调群指的是[[链上同调]]）。
:::

::: remark
事实上，这是范畴 $\mathsf{Mod}_{G}$ 中 [[Ext|$\operatorname{Ext}_{G}^{r}(\mathbb{Z},M)$]] 的两种
等价描述方式。
:::

为了描述 $\operatorname{Hom}_{G}(P_{\bullet},M)$，需要引入[[杠消解]]。

对于 $G$-同态 $P_r\rightarrow M$，它完全由映射 $\varphi:G^{r+1}\rightarrow M$ 决定。
由于 $\varphi$ 与 $G$-
作用相容，即 $g\cdot \varphi(g_0,\cdots ,g_{r})=\varphi(gg_0,\cdots ,gg_{r})$，因此 $\varphi$
完全由 $(1,g_1,g_1 g_2,\cdots, g_1 \cdots g_{r})$ 决定。

::: definition [非齐次 $r$-上链]
令 $C^{r}(G,M)=\{\text{所有 } \varphi:G^{r}\rightarrow M\}$，规定 $G^{0}=\{1\}$ 则有 $C^0(G,M)=M$。
定义
\[
d^r:C^{r}(G,M)\rightarrow C^{r+1}(G,M).
\]
映射由 $(d^{r}\varphi)(g_1,\cdots,g_{r+1})=$
\[
g_1\varphi(g_2,\cdots,g_{r+1})+\sum_{j=1}^{r}(-1)^{j}\varphi(g_1,\cdots,g_{j}g_{j+1},\cdots,g_{r+1})+(-1)^{r+1}\varphi(g_1,\cdots,g_{r})
\]
给出。
:::

::: proposition
$C^0(G,M)\rightarrow C^1(G,M)\rightarrow \cdots$ 是上链复形，并且有典范同构
\[
H^{r}(G,M)\simeq \operatorname{Ker}(d^{r})/\operatorname{Im}(d^{r-1}).
\]
:::

### 上同调函子间的态射

对映射$G'\to G$以及$G$-模$M$，我们有函子
\[
f^*\colon \mathsf{Mod}_{G} \to \mathsf{Mod}_{G'},\quad M\to M|_{G'}.
\]
这是正合函子，因此$H^i(G',f^*)$为上同调$\delta$函子。根据导出函子的万有性我们有自然的态射
\[
H^i(G,M) \to H^i(G',M)
\]
延拓了${M}^{G}\hookrightarrow {M}^{G'}$。

若$M'$为$G'$-模，则$\mathsf{Mod}_{G'}$中的同态$M\to M'$将
诱导出上同调群之间的映射$H^i(G,M) \to H^i(G',M')$，
\[
H^i(G,M) \to H^i(G',M) \to H^i(G',M').
\]

::: definition [限制映射]
对映射 $H \to G$，
存在$\delta$函子的态射
$H^\bullet(G, -) \to H^\bullet(H, -)$，
在$0$次部分为
\[
M^G \hookrightarrow M^H,
\]
称为**限制映射**。
:::

::: definition [转移映射]
如 $H$ 是 $G$ 的有限指数子群，
存在$\delta$函子间的态射
$H^\bullet(H, -) \to H^\bullet(G, -)$，
在$0$次部分为
\[
M^H \to M^G, \quad m \mapsto \sum_{g \in G/H} gm,
\]
称为**转移映射**或**余限制映射**。
:::

::: definition [膨胀映射]
对 $G$ 的[[正规子群]] $H$，
存在自然变换
$H^\bullet(G/H, (-)^H) \to H^\bullet(G, -)$，
在$0$次部分为恒等映射
\[
(M^H)^{G/H} = M^G,
\]
称为**膨胀映射**。
:::

::: remark
以上这些构造在[[群同调]]理论中也有类似版本，
且二者是相容的。
:::

::: proposition [Hochschild–Serre谱序列]
设$H$为$G$的正规子群，则存在第一象限谱序列
\[
E_{2}^{p,q} = H^p(G/H,H^q(H,M)) \Rightarrow H^{p+q}(G,M).
\]
:::

::: corollary [膨胀-限制正合列]
对正整数$r$，若对$0< j < r$，$H^j(H,M) = 0$（当$r=1$时此为空条件），
则有正合列
\[
\begin{tikzcd}
  0 \ar[r]
  & H^r(G/H,M^H) \ar[r,"\operatorname{Inf}"]
  & H^r(G,M) \ar[r,"\operatorname{Res}"]
  & H^r(H,M)
\end{tikzcd}.
\]
:::

### 幺半结构

## 例子

### 低阶上同调

::: proposition
- $H^0(G, M) = M^G$。

- $G$ 在 $M$ 上平凡作用时，
  $H^1(G, M)$ 是群同态 $\operatorname{Hom}(G, M)$。
:::

### 循环群上同调

::: proposition
当 $G$ 是有限[[循环群]]时，存在如下消解：
（$g$ 是 $G$ 的生成元）
\[
\begin{tikzcd}
  \cdots \ar[r] & \mathbb{Z}[G] \ar[r, "\sum_{g \in G} g"]
  & \mathbb{Z}[G] \ar[r, "g-1"] & \mathbb{Z}[G]
  \ar[r, "g \mapsto 1"] & \mathbb{Z} \ar[r] & 0.
\end{tikzcd}
\]
:::

由此可以计算有限循环群上同调为

::: proposition
\[
\hat{H}^k(G, M) = \left\{
\begin{array}{cc}
  \hat{H}^0(G, M) & k\ \text{为偶数} \\
  \hat{H}_0(G, M) & k\ \text{为奇数}.
\end{array}
\right.
\]
:::

### Galois 上同调

上同调群反映了群的性质，在[[数论]]中经常用上同调研究 [[Galois 群]]的性质。

::: proposition [Hilbert 定理 90]
设 $L/K$ 是有限 Galois 扩张，用 $G$ 表示 Galois 群。则有 $L^{\times}$ 和 $L$ 都是 $G$-模，并且
$H^{1}(G,L^{\times})=0$ 以及 $H^{r}(G,L)=0$ 对任意 $r>0$。
:::

::: proposition
$K$ 是[[局部域]]，$L/K$ 是有限 Galois 扩张且 $G$ 是 Galois 群。
有 $H^2(G,L^{\times})$ 是 $[L\colon K]$
阶循环群。
:::

通过以上两个命题以及 [[Tate 定理]] 可以得到局部域的[[局部类域论|互反映射]]。

上面的都是有限 Galois 扩张，对于无穷 Galois 扩张，
上述上同调对于 Galois 群的刻画并不好。
事实上，我们可以对一般
的[[射有限群]]定义由连续上链决定的上同调群，
通过这种方法对 Galois 群的研究也就是一般的 [[Galois 上同调]]理论。

### 与拓扑上同调的联系

::: proposition
设 $BG$ 是群 $G$（赋予离散拓扑成为拓扑群）的[[分类空间]]。那么有
\[
H^{k}(G,\mathbb{Z})=H^{k}(BG,\mathbb{Z}).
\]
:::

例如 $n$ 个文字的自由群 $\mathbb{Z}*\cdots *\mathbb{Z}$，可以通过
考虑圆束 $\mathbb{S}^1\vee\cdots \vee \mathbb{S}^1$ 的上同调群计算。
则有

::: proposition
\[
H^k(\mathbb{Z}^{*n}) = H^k((\mathbb{S}^1)^{\vee n}) = \left\{
\begin{array}{cc}
  \mathbb{Z} & k = 0 \\
  \mathbb{Z}^{\oplus n} & k = 1 \\
  0 & k > 1.
\end{array}
\right.
\]
:::

## 历史注记

1936 年，
Hurewicz 证明了对于一类特殊的空间（大于一阶的[[同伦群]]都为 $0$），
它的[[同调群]]由[[基本群]]完全决定。
因此，想要直接对基本群定义同调群，来反映整个空间的同调性质。
1942 年，
Eilenberg 和 Mac Lane 使用纯代数的方法定义了群的同调和上同调。

```terms
群上同调:
  en: group cohomology
  de: Gruppenkohomologie
  fr: cohomologie des groupes
  la: cohomologia catervarum
  grc: συνομολογία ὁμαδῶν
```
