---
title: 平坦模
categories: [同调代数, 模论]
---

**平坦模**是使得[[函子]] $-\otimes_A N$
[[正合函子|正合]]的 $A$-模 $N$。

## 定义

::: definition [平坦模]
对[[环]] $A$，
$A$-左[[模]] $N$ 称为**平坦模**，
如果[[函子]] $-\otimes_A N$ [[正合函子|正合]]。
即对任意（$A$-右模）[[正合列]] $0 \to M' \to M \to M'' \to 0$，
有正合列
\[
0 \to M' \otimes_A N \to
M \otimes_A N \to
M'' \otimes_A N \to 0.
\]
:::

::: remark
由于对任意 $A$-模 $M$，[[函子]] $-\otimes_A M$
是右正合的，因此平坦模定义等价于此函子保持单射。
:::

::: remark {@张量积}
由定义以及[[张量积]]的结合律容易发现，如
$N$ 为平坦 $A$-左模，$M$ 为 $(B,A)$-双模，作为
$B$-左模平坦，则 $M\otimes_AN$ 为平坦 $B$-左模。于是：

- 如 $A\to B$ 为[[环同态]]，取 $M=B$ 知
  $B\otimes_AN$ 为平坦 $B$-左模。

- 如 $B\to A$ 为环同态，$A$ 作为 $B$-左模平坦，
  取 $M=A$ 知 $N$ 为平坦 $B$-左模。

:::

## 性质

### 一般性质

::: proposition [条件简化]
$A$ 是环，$N$ 是左 $A$-模。以下二者等价：

- $N$ 是平坦模。

- 对 $A$ 的任意右[[理想]] $\mathfrak{a}$，
  $\mathfrak{a} \otimes_A N \to N$ 是[[单射]]，
  即 $\mathfrak{a}\otimes_AN=\mathfrak{a}N$。

:::

::: proof
只需证后推前。设 $N$ 满足后一条性质，要对右 $A$-模含入 $M'\subseteq M$
证明 $M'\otimes_AN\to M\otimes_AN$ 单。考虑集合
$$
\{X\subseteq M\mid M'\subseteq X,\,M'\otimes_AN\to X\otimes_AN\,是单射\},
$$
附带包含偏序。它非空，因为 $M'$ 在其中；它每条链都有上界即并起来，
因为滤余极限和张量积交换且保持单射。故由 Zorn 引理它有极大元，
设为 $M''$，要证 $M''=M$。用反证法。如果 $M''\subsetneqq M$，
取 $m\in M\setminus M''$，得映射 $f\colon A\to M$，$1\mapsto m$，
不穿过 $M''$。令 $\mathfrak{a}=f^{-1}(M'')\subsetneqq A$
为右理想，则不难发现
\[
\begin{tikzcd}
  \mathfrak{a}\ar[r]\ar[d]&A\ar[d]\\
  M''\ar[r]&M''+mA
\end{tikzcd}
\]
是推出图表。由于推出与张量积交换且保持单射，
$M''\otimes_AN\to(M''+mA)\otimes_AN$ 是单射，复合上
$M'\otimes_AN\to M''\otimes_AN$ 之后还是单射，这便与
$M''$ 的极大性矛盾。所以 $M''=M$，即 $M'\otimes_AN\to M\otimes_AN$
是单射。
:::

::: proposition [$\operatorname{Tor}$ 函子判别] {@tor}
$A$ 是环，$N$ 是左 $A$-模。以下几条等价：

1. $N$ 是平坦模。

2. 对任意右 $A$-模 $M$ 及任意正整数 $i$，
   $\operatorname{Tor}_i^A(M,N)=0$。

3. 对 $A$ 的任意右理想 $\mathfrak{a}$，
   $\operatorname{Tor}_1^A(A/\mathfrak{a},N)=0$。

4. 对 $A$ 的任意有限生成右理想 $\mathfrak{a}$，
   $\operatorname{Tor}_1^A(A/\mathfrak{a},N)=0$。

:::

::: proposition [幂零理想判别] {@幂零}
$A$ 是环，$N$ 是左 $A$-模，$I$ 是双边理想，$r\in\mathbb{N}$，满足 $I^r=0$。
则以下几条等价：

1. $N$ 是平坦 $A$-模。

2. $N/IN$ 是平坦 $A/I$-模，且 $\operatorname{Tor}_1(A/I,N)=0$。

3. $N/IN$ 是平坦 $A/I$-模，且自然映射
   $N/IN\otimes_{A/I}\bigoplus_{n=0}^{r-1} I^n/I^{n+1}\to
   \bigoplus_{n=0}^{r-1} I^nN/I^{n+1}N$ 是同构。

:::

::: proposition [方程判别法]
以下二者等价：

- $N$ 是平坦模。

- 对[[链复形]] $A^n \to A^m \to N$，
  其第二个箭头可以分解为 $A^m \to A^p \to N$，使得复合 $A^n \to A^m \to A^p$ 已经为 $0$
  （$m,n,p$ 为自然数）。换言之，有限表现模到 $N$ 的映射穿过有限秩自由模。

第二个条件的等价表述为：

- 对 $N$ 中元素 $x_1, \dots, x_m$ 以及等式
  $\sum r_i x_i = 0$，
  存在 $\{a_{ij}\} \subset A$ 和
  $y_1, \dots, y_p \in N$，
  使得 $\sum r_i a_{ij} = 0$，
  $\sum a_{ij} y_j = x_i$。

粗略地说，这是说 $N$ 中没有非平凡的关系。
:::

::: proof
先证前推后。以 $K$ 记链复形 $0\to A^n\to A^m\to 0$，其中
$A^m$ 放在 $0$ 处，则相当于要证每个 $f\colon K\to N$
都能分解为 $K\to A^p\to N$。取对偶 $K^\vee=R{\operatorname{Hom}}_A(K,A)$，
则 $R{\operatorname{Hom}}_A(K,-)=K^\vee\otimes^L_A-$，故
$f\in\operatorname{Hom}_A(K,N)=H^0(R{\operatorname{Hom}}_A(K,N))$
可视为是 $H^0(K^\vee\otimes^L_AN)=H^0(K^\vee)\otimes_AN$
的元素，其中等号是因为 $N$ 平坦。由张量积的定义，$H^0(K^\vee)\otimes_AN$
的元素是有限个 $x\otimes y$，$x\in H^0(K^\vee)$，$y\in N$
之和，所以存在 $g\colon A^p\to N$，使得存在
$\tilde{f}\in H^0(K^\vee)\otimes_AA^p$ 被 $g$ 打到 $f$。
而 $H^0(K^\vee)\otimes_AA^p=H^0(K^\vee\otimes_AA^p)=\operatorname{Hom}(K,A^p)$，
于是 $\tilde{f}\colon K\to A^p$ 与 $g\colon A^p\to N$
即所求的分解。

再证后推前。后一条性质无非是说 $\{有限秩自由模到\,N\,的映射\}$
在滤相系 $\{有限表现模到\,N\,的映射\}$ 中共尾。由于
$$
N=\operatornamewithlimits{colim}_{M\to N,\,M有限表现}M,
$$
这就给出
$$
N=\operatornamewithlimits{colim}_{M\to N,\,M有限秩自由}M,
$$
即 $N$ 是有限秩自由模的滤余极限；有限秩自由模显然平坦，平坦模的滤余极限平坦，
所以 $N$ 平坦。
:::

由以上证明过程可得

::: theorem [Lazard]
平坦模恰为可写成有限秩自由模之滤余极限的模。
:::

方程判别法还有推论

::: proposition
局部环上有限生成平坦模自由。
:::

::: proof
设 $(A,\mathfrak{m},k)$ 为局部环，$M$ 为有限生成平坦 $A$-模。
记 $n=\dim_kM/\mathfrak{m}M$，并取映射 $f\colon A^n\to M$
使其商 $\mathfrak{m}$ 之后是同构。由 [[Nakayama 引理]]，$f$
是满射。只需证 $f$ 是单射。用反证法。如 $f$ 不单，则存在非零映射
$h\colon A\to A^n$ 复合 $f$ 之后为 $0$。由方程判别法，$f$ 可分解为
$\tilde{f}\colon A^n\to A^p$ 与 $g\colon A^p\to M$ 使得
$\tilde{f}\circ h=0$。这说明 $\ker(\tilde{f})\ne0$。
而由于 $A^p$ 自由，$g$ 可沿满射 $f$ 提升成映射 $\tilde{g}\colon A^p\to A^n$。
现在由这些映射的构造，$\tilde{g}\circ\tilde{f}$ 在商 $\mathfrak{m}$
之后是同构，于是再由 [[Nakayama 引理]]即知 $\tilde{g}\circ\tilde{f}$
是同构，与 $\ker(\tilde{f})\ne0$ 矛盾！故 $f$ 为单，
即 $M\cong A^n$。
:::

::: proposition [与投射模的关系]
[[投射模]]是平坦模（特别地，[[自由模]]是平坦模）；
[[有限表现模|有限表现]]平坦模与有限生成投射模二者等价。
:::

::: proof
只有“有限表现平坦模投射”不那么显然。设 $M$ 是有限表现平坦模。
则由方程判别法，$\operatorname{id}_M$ 穿过有限秩自由模，
所以 $M$ 投射。
:::

::: proposition [与内射模的关系]
对一般的环 $A$，左 $A$-模 $M$ 平坦当且仅当右 $A$-模
$\operatorname{Hom}_\mathbb{Z}(M,\mathbb{Q}/\mathbb{Z})$ 内射。
:::

### 交换代数性质

[[交换代数]]中，平坦模有些特有的性质。以下固定[[交换环]] $A$
及其模 $M$。

::: proposition [局部性]
以下几条等价：

1. $M$ 为平坦 $A$-模。

2. 对 $A$ 的任一[[素理想]] $\mathfrak{p}$，
   $M_\mathfrak{p}$ 为平坦 $A_\mathfrak{p}$-模。

3. 对 $A$ 的任一[[极大理想]] $\mathfrak{m}$，
   $M_\mathfrak{m}$ 为平坦 $A_\mathfrak{m}$-模。

:::

::: proof
1 推 2 是 @张量积。2 推 3 是显然的。3 推 1
是因为局部化与张量积交换，
且交换环上的模同态是单射当且仅当其在各个极大理想处[[局部化]]是单射。
:::

::: proposition [与无挠模的关系]
在[[整环]]上，平坦模是[[无挠模]]。
[[主理想整环]]（一般地，[[Dedekind 整环]]）上，
二者等价。
:::

以下判别法十分强大，证明过程中应用了 [[Artin–Rees 引理]]。

::: theorem [局部判别法]
设 $I$ 是 $A$ 的理想。考虑以下几个条件：

1. $M$ 是平坦 $A$-模。

2. $M/IM$ 是平坦 $A/I$-模，且
   $\operatorname{Tor}_1^A(M,A/I)=0$。

3. $M/IM$ 是平坦 $A/I$-模，且自然映射
   $M/IM\otimes_{A/I}\bigoplus_{n=0}^\infty I^n/I^{n+1}\to
   \bigoplus_{n=0}^\infty I^nM/I^{n+1}M$ 是同构。

4. 对任意 $n\in\mathbb{N}$，$M/I^nM$
   是平坦 $A/I^n$-模。

则有 1 推 2 推 3 推 4。如 $A$ 为 [[Noether 环]]，
且对任意有限生成 $A$-模 $N$，$M\otimes_AN$ 都是 $I$-分离的，
即 $\bigcap_{n=0}^\infty I^n(M\otimes_AN)=0$，
就有 4 推 1。
:::

::: proof
1 推 2：这是 @张量积 和 @tor。

2 推 3：由 @幂零，条件 2 推出对任意 $n\in\mathbb{N}$，$M/I^{n+1}M$
都是平坦 $A/I^{n+1}$-模，于是
$$
M\otimes_AI^n/I^{n+1}=M/I^{n+1}M\otimes_{A/I^{n+1}}I^n/I^{n+1}=I^nM/I^{n+1}M,
$$
对所有 $n$ 直和起来即得 3。

3 推 4：这也是 @幂零。

4 推 1：欲证 $M$ 平坦，只需对任意有限生成模 $N$ 及其子模 $N'$
证明映射 $M\otimes_AN'\to M\otimes_AN$ 是单射。由于
$N/I^nN$ 是 $A/I^n$-模，$\frac{N'}{N'\cap I^nN}$ 是其子模，条件 4
至少推出，对任意 $n\in\mathbb{N}$，映射
$$
M\otimes_A\frac{N'}{N'\cap I^nN}\to M\otimes_AN/I^nN
$$
是单射。现在交换图表
\[
\begin{tikzcd}
  M\otimes_AN'\ar[r]\ar[d]&M\otimes_AN\ar[d]\\
  M\otimes_A\frac{N'}{N'\cap I^nN}\ar[r,hook]&M\otimes_AN/I^nN
\end{tikzcd}
\]
给出
$$
\ker(M\otimes_AN'\to M\otimes_AN)\subseteq\ker(M\otimes_AN'\to M\otimes_AN/I^nN)=\ker\left(M\otimes_AN'\to M\otimes_A\frac{N'}{N'\cap I^nN}\right).
$$
由 [[Artin–Rees 引理]]，$N'$ 的两列子模
$(N'\cap I^nN)_{n\in\mathbb{N}}$ 与 $(I^nN')_{n\in\mathbb{N}}$ 共尾，
于是也有对任意 $n\in\mathbb{N}$，
$$
\ker(M\otimes_AN'\to M\otimes_AN)\subseteq\ker(M\otimes_AN'\to M\otimes_AN'/I^nN').
$$
而 $M\otimes_AN'/I^nN'=M\otimes_AN'\otimes_AA/I^n$，故
上式右边等于 $I^n(M\otimes_AN')$。由条件，
$\bigcap_{n=0}^\infty I^n(M\otimes_AN')=0$，故
$\ker(M\otimes_AN'\to M\otimes_AN)=0$，命题得证。
:::

::: corollary [纤维判别法] {@纤维判别法}
如 $(A,\mathfrak{m},k)$ 是 Noether [[局部环]]，$M$
对 $\mathfrak{m}$ 满足定理中的分离性条件，则 $M$ 平坦当且仅当
$\operatorname{Tor}_1(M,k)=0$。
:::

::: proof
在定理中取 $I=\mathfrak{m}$，这就是 1 等价于 2，因为此时
$A/I=k$ 是域，域的模都自由，从而平坦。
:::

::: corollary
设 $(A,\mathfrak{m},k)\to(B,\mathfrak{n},\ell)$
是 Noether 局部环的局部同态，$u\colon M'\to M$ 是有限生成
$B$-模的同态，$M$ 在 $A$ 上平坦。则 $u\otimes_Ak$
是单射当且仅当 $u$ 是单射且 $\operatorname{coker}(u)$
在 $A$ 上平坦。
:::

::: proof
“当”是显然的，下证“仅当”。考虑 $u$ 诱导的交换图
\[
\begin{tikzcd}
  M'/\mathfrak{m}M'\otimes_k\bigoplus_{n=0}^\infty
  \mathfrak{m}^n/\mathfrak{m}^{n+1}\ar[r]\ar[d]&
  M/\mathfrak{m}M\otimes_k\bigoplus_{n=0}^\infty
  \mathfrak{m}^n/\mathfrak{m}^{n+1}\ar[d]\\
  \bigoplus_{n=0}^\infty
  \mathfrak{m}^nM'/\mathfrak{m}^{n+1}M'\ar[r]&
  \bigoplus_{n=0}^\infty
  \mathfrak{m}^nM/\mathfrak{m}^{n+1}M
\end{tikzcd}
\]
由于 $M$ 平坦，右边的箭头是同构。显然左边的箭头是满射。
如果 $u\otimes_Ak$ 是单射，上边的箭头就是单射，
所以下边的箭头也是单射。由于条件保证 $M'$ 为
$\mathfrak{m}$-分离，这就推出 $u$ 本身是单射。
接下来用短正合列
$$
0\to M'\to M\to\operatorname{coker}(u)\to0
$$
计算 $\operatorname{Tor}_1(\operatorname{coker}(u),k)$ 容易发现它是 $0$，
用 @纤维判别法 即知 $\operatorname{coker}(u)$ 在 $A$ 上平坦。
:::

::: corollary [切片判别法]
设 $A$ 是 Noether 环，$a\in A$ 是非零因子，$M$ 对 $(a)$ 满足定理中的分离性条件。
则 $M$ 是平坦 $A$-模，当且仅当
$a\colon M\to M$ 是单射，且 $M/aM$ 是平坦 $A/a$-模。
:::

::: proof
注意 $A/a$ 有两项消解 $0\to A\to A\to0$，中间的映射是乘以 $a$。
由此即知 $\operatorname{Tor}_1(M,A/a)=\ker(a\colon M\to M)$。
于是在定理中取 $I=(a)$，这就是 1 等价于 2。
:::

::: corollary
设 $(A,\mathfrak{m})\to(B,\mathfrak{n})$ 是 Noether 局部环的[[平坦同态|平坦]]局部同态，
$N$ 是 $B$-模，对 $\mathfrak{m}B$ 满足定理中的分离性条件。
则 $N$ 是平坦 $B$-模当且仅当它是平坦 $A$-模并且
$N/\mathfrak{m}N$ 是平坦 $B/\mathfrak{m}B$-模。
:::

::: proof
“仅当”是 @张量积。至于“当”，我们使用定理中的 1 等价于 3。
由于 $N/\mathfrak{m}N$ 是平坦 $B/\mathfrak{m}B$-模，
要证 $N$ 是平坦 $B$-模，只需证
$$
N/\mathfrak{m}N\otimes_{B/\mathfrak{m}B}\bigoplus_{n=0}^\infty\mathfrak{m}^nB/\mathfrak{m}^{n+1}B\cong\bigoplus_{n=0}^\infty\mathfrak{m}^nN/\mathfrak{m}^{n+1}N.
$$
现由 $B$ 是平坦 $A$-模，
$$
B/\mathfrak{m}B\otimes_{A/\mathfrak{m}}\bigoplus_{n=0}^\infty\mathfrak{m}^n/\mathfrak{m}^{n+1}\cong\bigoplus_{n=0}^\infty\mathfrak{m}^nB/\mathfrak{m}^{n+1}B.
$$
由 $N$ 是平坦 $A$-模，
$$
N/\mathfrak{m}N\otimes_{A/\mathfrak{m}}\bigoplus_{n=0}^\infty\mathfrak{m}^n/\mathfrak{m}^{n+1}\cong\bigoplus_{n=0}^\infty\mathfrak{m}^nN/\mathfrak{m}^{n+1}N.
$$
综合以上两式即得结论。
:::

::: remark
设 $A$ 为 Noether 局部环，$I$ 为其真理想。由 [[Krull 交定理]]，
这个分离性条件可以覆盖以下几种情形：

- $M$ 是有限生成模。

- $M=B$ 是局部环，$A\to B$ 是局部同态。

- 以上两种的结合，即 $A\to B$ 是局部同态，$M$ 是
  $B$ 上有限生成模。

:::

## 例子

- [[交换环]]的[[局部化]]是其上的平坦模。

- $\mathbb{Q}$ 是 $\mathbb{Z}$ 上平坦模，但不是[[投射模]]。

```terms
平坦模:
  en: flat module
  de: flacher Modul
  fr: module plat
  grc: ἐπίπεδον πρότυπον
  la: modulus planus
```
