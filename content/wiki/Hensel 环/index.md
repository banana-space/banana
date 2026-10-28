---
title: Hensel 环
aliases: [严格 Hensel 局部环, 严格 Hensel 环, Hensel 局部环, Hensel 化]
categories: [交换代数]
navboxes: [交换代数]
---

<problems>
- “提升性质”一节需要扩充。
</problems>

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Hensel 环**指满足首一多项式在剩余域的单根都能提升的[[局部环]]，
换言之即满足 [[Hensel 引理]]的环。
许多关于完备局部环的命题只需要 Hensel 性而不需要完备性，
定义 Hensel 环能将其推广。

此外，Hensel 环和严格 Hensel 环分别是[[局部环]]在
[[Nisnevich 拓扑]]和[[平展拓扑]]的类比。

## 定义

以下对[[局部环]] $(R,\mathfrak{m},k)$ 以及 $R$ 上的对象 $f$，
用 $\bar{f}$ 表示 $f$ 在 $k$ 上的像。

::: definition
**Hensel 环**指的是满足如下条件的[[局部环]]
$(R,\mathfrak{m},k)$：
对任意首一多项式 $f(x)\in R[x]$ 及其模 $\mathfrak{m}$
的分解 $\bar{f}=g_0h_0$，其中 $g_0,h_0\in k[x]$ 首一互素，
都存在分解 $f=gh$ 提升之，其中 $g,h\in R[x]$ 首一。

**严格 Hensel 环**指的是剩余域[[可分闭]]的 Hensel 环。
:::

## 性质

Hensel 环和严格 Hensel 环各有许多等价刻画。

::: lemma {@幂等元}
$R$ 是[[环]]，$S$ 是[[有限同态|有限]][[投射模|投射]] $R$-代数。
则 $R$-代数范畴到集合范畴的函子
$$
\operatorname{Idem}_{S/R}(A):=
\operatorname{Idem}(A\otimes_RS),
$$
其中 $\operatorname{Idem}(-)$ 表示环的[[幂等元]]集，
被 $R$ 上[[平展代数]]表示。
:::

::: proof
将 $S$ 表为 $R^N$ 的 $R$-模直和项，将 $S$ 中乘法的各系数具体写出，
知 $\operatorname{Idem}_{S/R}$ 是 $\mathbb{A}^N_R$
中被有限个方程定义的[[闭子概形]]，即知其被有限表现 $R$-代数表示。
故欲证平展，只需证[[形式平展]]，即对任一 $A$ 及其平方为零的理想
$I$，证明映射 $\operatorname{Idem}_{S/R}(A)\to
  \operatorname{Idem}_{S/R}(A/I)$ 为双射。此为显然，
因为 $A\otimes_RS\to A/I\otimes_RS$ 在谱上是同胚，
幂等元当然一一对应。
:::

::: proposition {@Hensel}
对局部环 $(R,\mathfrak{m},k)$，下列条件等价：

1. $R$ 为 Hensel 环。

2. 每个[[有限同态|有限]] $R$-代数都是有限个局部 $R$-代数之积。

3. 对任意[[整同态]] $R\to S$，$S/\mathfrak{m}S$
   的[[幂等元]]都能提升到 $S$。

4. 对 $R$ 上[[平展代数]] $T$ 及 $R$-同态
   $a_0\colon T\to k$，存在同态 $a\colon T\to R$
   提升 $a_0$。

5. $R$ 上[[分离态射|分离]][[有限型概形]] $X$ 都能写成
   $X'\sqcup\bigsqcup_{i=1}^nX_i$，其中各 $X_i$
   在 $R$ 上有限，特殊纤维为单点，即为有限局部 $R$-代数的谱，
   而 $X'$ 的特殊纤维各连通分支都不是单点。

且这些存在性条件只要满足，就会自动有唯一性。
:::

::: proof
首先注意 2 和 5 自带唯一性。3 的唯一性也不困难，
只需证 $S$ 的幂等元打到 $S/\mathfrak{m}S$
中是 $0$ 它就是 $0$。这是因为整同态素理想上行，$S$
的每个极大理想都包含 $\mathfrak{m}S$，
而在每个极大理想中的幂等元是 $0$。

- 2推1 $R[x]/f(x)$ 是有限 $R$-代数，
  将其写成有限个局部 $R$-代数之积。把这个直积分解模
  $\mathfrak{m}$，可知这有限个 $R$-代数一一对应于
  $\operatorname{Spec}k[x]/\bar{f}(x)$ 的有限个点。
  $\bar{f}=g_0h_0$ 给出
  $\operatorname{Spec}k[x]/\bar{f}(x)=
      \operatorname{Spec}k[x]/g_0(x)\times
      \operatorname{Spec}k[x]/h_0(x)$，对应于这些点的一个分划。
  取直积分解的对应分划，得到分解 $R[x]/f(x)=S_1\times S_2$，
  其中 $S_1/\mathfrak{m}S_1=k[x]/g_0(x)$，
  $S_2/\mathfrak{m}S_2=k[x]/h_0(x)$。
  由 $R[x]/f(x)$ 作为 $R$-模有限秩自由，不难得到 $S_1$ 和 $S_2$
  也有限秩自由。记 $n=\deg g_0$，$m=\deg h_0$，以
  $x$ 记 $x\in S$ 投影到 $S_1$ 和 $S_2$ 的像，则
  $1,x,\ldots,x^{n-1}$ 与 $1,x,\ldots,x^{m-1}$ 模
  $\mathfrak{m}$ 之后分别是 $S_1/\mathfrak{m}S_1$
  与 $S_2/\mathfrak{m}S_2$ 在 $k$ 上的基，于是由
  [[Nakayama 引理]]它们本身分别是 $S_1$ 和 $S_2$ 的基。
  将 $x^n$ 和 $x^m$ 分别在 $S_1$ 和 $S_2$
  中关于对应的基展开，得 $n$ 次首一多项式 $g$ 和 $m$
  次首一多项式 $h$，分别提升 $g_0$ 和 $h_0$，且
  $S_1=R[x]/g(x)$，$S_2=R[x]/h(x)$。由此及
  $R[x]/f(x)=S_1\times S_2$ 知 $f\mid gh$，
  由次数原因知 $f=gh$。

- 3推2 我们来证明 3 的有限情形足以推出 2。任取有限
  $R$-代数 $S$，则 $S/\mathfrak{m}S$ 是有限 $k$-代数，
  是 [[Artin 环]]，故由结构定理是 Artin 局部环之积，写出来即
  $S/\mathfrak{m}S=\prod_{i=1}^n\overline{S_i}$。
  取 $\overline{e_i}\in S/\mathfrak{m}S$ 为在上述乘积分解中第
  $i$ 个分量是 $1$ 其余分量是 $0$ 的元素，是幂等元，满足
  $\sum_{i=1}^n\overline{e_i}=1$。由 3 及其唯一性，
  它们能提升为 $e_i\in S$，满足 $\sum_{i=1}^ne_i=1$。
  这些 $e_i$ 便给出直积分解 $S=\prod_{i=1}^nS_i$，满足
  $S_i/\mathfrak{m}S_i=\overline{S_i}$。而由整同态素理想上行，
  $S_i$ 的极大理想都包含 $\mathfrak{m}S_i$，对应于 $\overline{S_i}$
  的极大理想，所以只有一个，即各 $S_i$ 为局部 $R$-代数。

- 1推3 取幂等元 $e_0\in S/\mathfrak{m}S$ 及其任一原像
  $e'\in S$。由 $S$ 为 $R$ 上整，存在首一多项式 $f(x)\in R[x]$
  使得 $f(e')=0$，于是 $e'$ 给出同态 $R[x]/f(x)\to S$。
  该同态基变换到 $k$ 上为 $k[x]/\bar f(x)\to S/\mathfrak{m}S$，
  $x\mapsto e_0$；考虑谱上映射 $\operatorname{Spec}
      (S/\mathfrak{m}S)\to\operatorname{Spec}(k[x]/\bar f(x))$ 下
  $e_0$ 对应的开闭子集的像，记其对应的 $k[x]/\bar f(x)$ 中幂等元为
  $\widetilde{e_0}$，则 $\widetilde{e_0}$ 就打到 $e_0$。
  所以只要幂等元 $\widetilde{e_0}$ 在 $R[x]/f(x)$ 中有提升
  $\tilde{e}$，它在 $S$ 的像就是 $e_0$ 的提升。
  这样就把问题化归到 $S=R[x]/f(x)$ 情形。此时幂等元
  $e_0\in S/\mathfrak{m}S$ 对应于 $k$-代数
  $S/\mathfrak{m}S$ 的直积分解 $\bar{f}=g_0h_0$，
  其中 $g_0,h_0$ 首一互素。由 1 它能提升为 $f=gh$，
  而这对应于有限 $R$-代数同态 $S\to R[x]/g(x)\times
      R[x]/h(x)$，由于两边皆为平坦，模 $\mathfrak{m}$
  之后同构，即知它是同构，于是它对应的幂等元给出 $e_0$
  的提升。这样也得到 1 的唯一性。

- 4推1 令 $S=R[x]/f(x)$，则 1 中的分解
  $\bar{f}=g_0h_0$ 相当于给出直积分解
  $S/\mathfrak{m}S=k[x]/g_0(x)\times k[x]/h_0(x)$，
  记其对应幂等元为 $e_0$。由 @幂等元，
  存在平展 $R$-代数 $T$ 使得
  $\operatorname{Idem}(-\otimes_RS)\cong
      \operatorname{Hom}_R(T,-)$。这样 $e_0$ 相当于同态
  $e_0\colon T\to k$，由 4 它能提升为 $e\colon T\to R$，
  即 $e_0$ 能提升到 $S$，给出分解 $S=S_1\times S_2$；
  和 2 推 1 的证明中一样，这给出分解 $f=gh$，提升分解
  $\bar{f}=g_0h_0$。

- 3推5 先证 $X$ [[紧合态射|紧合]]情形。令
  $S=\Gamma(X,\mathcal{O}_X)$，则自然态射 $X\to
      \operatorname{Spec}S$ 显然为[[概形论稠]]。
  又由[[对角态射]]论证知它紧合，故它是紧合满射。
  于是 $\operatorname{Spec}S\to\operatorname{Spec}R$
  泛闭，故由[[仿射态射|仿射]][[泛闭态射]]整知 $S$ 在
  $R$ 上整。特殊纤维 $X_k$ 为 $k$ 上有限型，
  取其各个单点连通分支 $Y_1,\ldots,Y_n$，则它们有限，且
  $X_k=Y'\sqcup\bigsqcup_{i=1}^nY_i$，其中
  $Y'$ 各连通分支都不是单点。由 [[Zariski 连通性定理]]，
  $X\to\operatorname{Spec}S$ 纤维连通，从而
  $Y',Y_1,\ldots,Y_n$ 打到 $\operatorname{Spec}S$
  之后仍是不交闭集。这样它们就给出 $\operatorname{Spec}S$
  特殊纤维的分解 $\operatorname{Spec}(S/\mathfrak{m}S)=
      Z'\sqcup\bigsqcup_{i=1}^nZ_i$。这对应于
  $S/\mathfrak{m}S$ 的若干幂等元；由 3 知它们可提升为
  $S$ 的幂等元。回忆 $S=\Gamma(X,\mathcal{O}_X)$，
  知有分解 $X=X'\sqcup\bigsqcup_{i=1}^nX_i$，
  且由构造有 $X'_k=Y'$。只剩证明各 $X_i$ 在 $R$ 上有限。
  注意 $(X_i)_k=Y_i$ 是单点。取其仿射邻域 $U_i$，
  则 $X_i\setminus U_i$ 在 $\operatorname{Spec}R$
  的像为闭集，但不包含唯一的闭点 $\mathfrak{m}$，故为空集，
  即 $U_i=X_i$。于是 $X_i$ 在 $R$ 上紧合、仿射，故为有限。

  再证 $X$ 仿射情形。此时由有限型，有闭浸入 $X\to\mathbb{A}^N_R$。
  取其在 $\mathbb{P}^N_R$ 中的闭包 $V$，则 $X$ 是 $V$
  的[[开子概形]]。用紧合情形写 $V=V'\sqcup
      \bigsqcup_{i=1}^nV_i$，其中各 $V_i$ 在 $R$ 上有限，
  特殊纤维为单点，而 $V'$ 的特殊纤维连通分支都不是单点。
  把该分解与 $X$ 相交，并把 $(V_i\cap X)_k=\varnothing$
  的那些部分和 $V'$ 一同归到 $X'$，则显然 $X'$ 满足要求。
  而如 $(V_i\cap X)_k\ne\varnothing$，则
  $(V_i\cap X)_k=(V_i)_k$，即开子概形 $V_i\cap X$
  包含 $V_i$ 唯一的闭点，于是它就等于 $V_i$，亦满足要求。

  最后证一般情形。仍如紧合情形一样作特殊纤维的分解 $X_k=
      Y'\sqcup\bigsqcup_{i=1}^nY_i$，其中 $Y'$
  各连通分支都不是单点，而各 $Y_i$ 是单点。取 $Y_i$
  在 $X$ 中的仿射邻域 $U_i$，则由仿射情形，$U_i$
  有唯一的连通分支特殊纤维非空，将其记为 $X_i$，
  它是 $X$ 的开子概形，在 $R$ 上有限。这样由 $X$ 分离，
  用[[对角态射]]论证便知 $X_i$ 也是 $X$ 的闭子概形。
  则 $X_i$ 是 $X$ 的连通分支，这样不同的 $X_i$ 自动不交。
  令 $X'$ 为 $\bigsqcup_{i=1}^nX_i$ 之补，不难发现
  $X=X'\sqcup\bigsqcup_{i=1}^nX_i$ 满足要求。

- 5推4 设 $T$ 是 $R$ 上平展代数，$a_0\colon
      T\to k$ 是 $R$-同态。取 $X=\operatorname{Spec}T$，
  则 $a_0$ 相当于是 $X_k$ 的有理点。作 5 中分解
  $X=X'\sqcup\bigsqcup_{i=1}^nX_i$，则由于 $X$
  为平展，$X_k$ 为 $k$ 上平展，特别地 $k$ 上有限，
  便知 $X'_k=\varnothing$，故 $a_0$ 正是某个 $(X_i)_k$。
  记该 $X_i$ 为 $\operatorname{Spec}S$，则由条件
  $S$ 在 $R$ 上有限平展，特别地作为 $R$-模有限表现平坦。
  而 $S/\mathfrak{m}S=k$，故由 [[Nakayama 引理]]
  $S=R$，那么这就是提升 $a_0$ 的 $R$-点。由这段证明易得
  4 的唯一性。

:::

::: remark
以上命题的 3 推 5 如此复杂，是因为 [[Zariski 主定理]]蕴藏其中。
:::

本条目中的定义看似比传统的提升单根定义强，
但用[[平展代数]]的结构定理可以得到它们等价。

::: proposition
局部环 $(R,\mathfrak{m},k)$ 为 Hensel 环，
当且仅当对首一多项式 $f\in R[x]$ 及 $a_0\in k$，
只要 $\bar{f}(a_0)=0$，$\bar{f}'(a_0)\ne0$，
就存在 $a\in R$，满足 $\bar{a}=a_0$ 且 $f(a)=0$。
:::

::: proof
“仅当”为显然，只需证“当”。为此我们来证明 @Hensel 的条件 4，即对平展 $R$-代数 $T$ 及其
$k$-点 $a_0\colon T\to k$，证明它能提升为 $R$-点
$a\colon T\to R$。由[[平展代数]]的局部结构定理，
适当局部化 $T$，可设 $T=(R[x]/f(x))_{g(x)}$，其中
$f$ 首一，$f'\mid g$。那么 $a_0$ 就对应于 $\bar{f}$
的根，满足 $\bar{g}(a_0)\ne0$，因而也满足
$\bar{f}'(a_0)\ne0$。于是存在 $a\in R$ 满足
$\bar{a}=a_0$ 且 $f(a)=0$。由 $\overline{g(a)}=
  \bar{g}(a_0)$ 可逆，$R$ 又是局部环，有 $g(a)\in R$
可逆，所以 $a$ 给出 $T$ 的 $R$-点，提升 $a_0$。
:::

::: proposition
对局部环 $(R,\mathfrak{m},k)$，下列条件等价：

1. $R$ 为严格 Hensel 环。

2. 从 $R$ 出发的平展局部同态是同构。

3. 平展 $R$-概形 $X$ 都能唯一写成 $X_0\sqcup X'$，
   其中 $X_0$ 是有限个 $\operatorname{Spec}R$ 的无交并，
   $X'_k=\varnothing$。

4. 光滑 $R$-概形只要有 $k$-点都有 $R$-点。

:::

::: proposition
（严格）Hensel 环的[[滤余极限]]（严格）Hensel。
:::

::: proposition
（严格）Hensel 环的非零[[商环]]（严格）Hensel。
:::

以下命题实际上来自 [[Hensel 对]]的性质。

::: proposition
如 $(R,I)$ 是 Hensel 对，则
$R$（严格）Hensel 当且仅当 $R/I$（严格）Hensel。
:::

::: corollary {@既约化}
$R$（严格）Hensel 当且仅当[[既约化]] $R_\text{red}$
（严格）Hensel。
:::

### Hensel 化

可以典范地把局部环变得 Hensel。

::: theorem
从 Hensel 局部环范畴到局部环范畴的含入函子有[[左伴随]]，
称为 **Hensel 化**。局部环 $(R,\mathfrak{m},k)$
的 Hensel 化常记为 $R^\text{h}$。它是平展
$R$-代数的[[滤余极限]]，极大理想是 $\mathfrak{m}R^\text{h}$，
剩余域是 $k$。
:::

也有严格 Hensel 化，但不是典范的，因[[可分闭包]]有很多自同构。
不过这是它不典范的唯一原因。

::: theorem
考虑范畴
$$
\{(R,\mathfrak{m},k,k^\text{s})\mid
(R,\mathfrak{m},k)\,是局部环,\,k\to k^\text{s}\,
是可分闭包\}.
$$
严格 Hensel 局部环的范畴显然到它有自然的含入函子。
该函子有[[左伴随]]，称为**严格 Hensel 化**。
局部环 $(R,\mathfrak{m},k)$ 的严格 Hensel 化常记为
$R^\text{sh}$。它是平展 $R$-代数的滤余极限，
极大理想是 $\mathfrak{m}R^\text{sh}$，
剩余域是 $k^\text{s}$。自然同态
$R^\text{h}\to R^\text{sh}$
是有限平展同态的滤余极限。
:::

这两个操作保持很多性质。

::: proposition {@保持}
局部环 $(R,\mathfrak{m},k)$ [[Noether 环|Noether]] 等价于
$R^\text{h}$ Noether，也等价于 $R^\text{sh}$ Noether。
此时对 $d\in\mathbb{N}$ 以及条件

- [[Krull 维数|$d$ 维]]；

- [[正则环|$(\mathrm{R}_d)$]]；

- [[CM 环|$(\mathrm{S}_d)$]]；

$R$、$R^\text{h}$、$R^\text{sh}$
三者中一个满足能推出其余两个满足。
:::

### 提升性质

### 平展景

Hensel 环的[[平展上同调]]相对简单，严格 Hensel 环则更加简单。

## 例子

- [[域]]是 Hensel 环；[[可分闭域]]是严格 Hensel 环。

- 于是由 @既约化，零维局部环都是 Hensel 环。

- 完备局部环都是 Hensel 环。所以 $\mathbb{Z}_p$ 和
  $k[[x_1,\ldots,x_n]]$ 这种就都是 Hensel 环。

- 由 @保持，Noether 局部环的（严格）
  Hensel 化保持环的既约性和正规性。但整环的（严格）
  Hensel 化未必是整环，$\mathbb{C}[x,y]/(xy+x^3+y^3)$
  在 $(0,0)$ 处的局部化便是一例。

```terms
Hensel 环:
  en: Henselian ring
  de: henselscher Ring
  fr: anneau Henselien
Hensel 化:
  en: [Henselization, Henselize]
  de: [Henselisierung, henselisieren]
  fr: [Henselisation, Henseliser]
```
