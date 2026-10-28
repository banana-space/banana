---
title: 正则环
aliases: [正则局部环, '$(\mathrm{R}_k)$']
categories: [交换代数]
navboxes: [交换代数]
---

<problems>
- “例子”一节需要扩充。
</problems>

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**正则环**是[[交换代数]]中对[[光滑流形]]的一种模拟，
指的是切空间维数总等于环本身维数这样的环。

## 定义

::: definition
**正则局部环**指的是 [[Noether 环|Noether]] [[局部环]]
$(R,\mathfrak{m},k)$，满足 $\dim_k(\mathfrak{m}/\mathfrak{m}^2)=\dim R$。
**正则环**指的是在每个素理想处局部化都是正则局部环的 Noether 环。
:::

::: remark
由[[维数理论 (交换代数)|维数理论]]，$\dim_k(\mathfrak{m}/\mathfrak{m}^2)\ge\dim R$。
:::

::: remark
从定义并不能立即看出正则局部环都是正则环。我们会在下面证明此事。
:::

对不 Noether 的环也有个合理的定义，不过目前尚且难以研究其性质。

::: definition
说环 $A$ 是**凝聚正则环**，指的是任一[[有限表现模|有限表现]]
$A$-模都有由有限生成投射模组成的有限长度[[投射消解]]。
:::

::: remark
从定义不难看出凝聚正则环都是[[凝聚环]]，
但不能立即看出凝聚正则 Noether 环和正则环是一回事。
有了下面一些命题之后就容易看出了。
:::

## 初等性质

这里“初等”指的是不需要同调代数。

::: proposition [分次环判别] {@分次环}
Noether 局部环 $(R,\mathfrak{m},k)$ 正则当且仅当其[[分次环]]
$\bigoplus_{n=0}^\infty\mathfrak{m}^n/\mathfrak{m}^{n+1}$
为 $k$ 上多项式环。此时 $R$ 的维数等于该多项式环的变元个数。
:::

::: proof
记 $S=\bigoplus_{n=0}^\infty\mathfrak{m}^n/\mathfrak{m}^{n+1}$
为 $(R,\mathfrak{m})$ 的分次环，
$P=\operatorname{Sym}(\mathfrak{m}/\mathfrak{m}^2)
  =\bigoplus_{n=0}^\infty\operatorname{Sym}^n(\mathfrak{m}/\mathfrak{m}^2)$
为多项式环。则 $\operatorname{Sym}^n(\mathfrak{m}/\mathfrak{m}^2)$
到 $\mathfrak{m}^n/\mathfrak{m}^{n+1}$ 的自然映射给出环满射
$P\to S$，命题相当于说 $R$ 正则当且仅当这是同构。
记 $d=\dim_k(\mathfrak{m}/\mathfrak{m}^2)$，
则 $\dim P=d$。由 $P\twoheadrightarrow S$，有 $\dim S\le d$。
由 $P$ 是整环知 $P\cong S$ 当且仅当 $\dim S=d$。

考虑 $S$ 的理想
$S_+=\bigoplus_{n=1}^\infty\mathfrak{m}^n/\mathfrak{m}^{n+1}$，
则不难发现 $S$ 关于 $S_+$ 的 [[Hilbert–Samuel 多项式]]
等于 $R$ 的 Hilbert–Samuel 多项式。
所以如 $R$ 正则，由[[维数理论 (交换代数)|维数理论]]便知 $\dim S\ge d$，
故 $P\cong S$。反过来如 $P\cong S$，则可具体算出此
Hilbert–Samuel 多项式，为 $\binom{n+d-1}{d}$，
为 $d$ 次，故 $\dim R=d$，$R$ 为正则。
:::

::: corollary {@整环}
正则局部环是整环。
:::

::: proof
记号同上。如 $a,b\in R$ 为非零元，由 [[Krull 交定理]]可设
$a\in\mathfrak{m}^n\setminus\mathfrak{m}^{n+1}$，
$b\in\mathfrak{m}^m\setminus\mathfrak{m}^{m+1}$。
于是由 @分次环，$ab\in\mathfrak{m}^{m+n}\setminus\mathfrak{m}^{m+n+1}$，
特别地 $ab\ne0$。
:::

::: proposition [切片判别] {@切片}
设 $(R,\mathfrak{m},k)$ 是 Noether 局部环，$r\in\mathfrak{m}$
不在任一极小素理想中（比如它是非零因子）。如果 $R/r$ 正则，
那么 $R$ 也正则，且 $r\notin\mathfrak{m}^2$，
$\dim R=\dim R/r+1$。反过来如果 $R$ 正则，$r\in\mathfrak{m}\setminus\mathfrak{m}^2$，
那么 $R/r$ 也正则。
:::

::: proof
以 $\bar{\mathfrak{m}}$ 记 $R/r$ 的极大理想，则由同构定理
$\bar{\mathfrak{m}}/\bar{\mathfrak{m}}^2=\mathfrak{m}/(\mathfrak{m}^2+(r))$
维数至少是 $\dim_k(\mathfrak{m}/\mathfrak{m}^2)-1$，
取等当且仅当 $r\notin\mathfrak{m}^2$。而由 $r$ 不在任一极小素理想中，由
[[Krull 高度定理]]知 $\dim R/r=\dim R-1$。于是如果 $R/r$ 正则，就有
$$
\dim R=\dim R/r+1=
\dim_k(\bar{\mathfrak{m}}/\bar{\mathfrak{m}}^2)+1\ge
\dim_k(\mathfrak{m}/\mathfrak{m}^2),
$$
故 $R$ 正则且以上不等号取等，即 $r\notin\mathfrak{m}^2$。
反过来如果 $R$ 正则且 $r\notin\mathfrak{m}^2$，
同样的计算得到 $\dim_k(\bar{\mathfrak{m}}/\bar{\mathfrak{m}}^2)=\dim R/r$，
故 $R/r$ 正则。
:::

::: corollary {@正则序列}
Noether 局部环 $(R,\mathfrak{m},k)$ 正则当且仅当
$\mathfrak{m}$ 被[[正则序列]]生成。此时如 $x_1,\ldots,x_m\in\mathfrak{m}$ 在
$\mathfrak{m}/\mathfrak{m}^2$ 的像 $k$-线性无关，
则它是正则序列。
:::

::: proof
只需证后一句话，因为这样的话取 $\mathfrak{m}/\mathfrak{m}^2$
的一组基，由 [[Nakayama 引理]]便知前一句话。对 $m$ 归纳。
$m=1$ 时是因为 @整环，一般情况是因为 @切片。
:::

::: corollary
正则环是 [[Cohen–Macaulay 环]]。
:::

::: proof
由定义及上一个推论显然。
:::

::: proposition [纤维判别]
$(R,\mathfrak{m},k)\to(S,\mathfrak{n},\ell)$ 是 Noether 局部环的平坦局部同态。
如 $R$ 和 $S/\mathfrak{m}S$ 都正则，$S$ 就也正则。
:::

::: proof
对 $d=\dim R$ 归纳。$d=0$ 时 $\mathfrak{m}=0$，
$S/\mathfrak{m}S=S$，命题显然。$d>0$ 时取 $r\in\mathfrak{m}\setminus\mathfrak{m}^2$，
考虑映射 $R/r\to S/rS$。由 @切片 及归纳假设知
$S/rS$ 正则。由于 $R\to S$ 平坦，$r$ 不是 $R$ 的零因子
（因 $R$ 为整环），有 $r$ 不是 $S$ 的零因子。所以由 @切片 的另一个方向知 $S$ 正则。
:::

::: proposition [滤余极限]
设 $\{(R_i,\mathfrak{m}_i)\}_{i\in I}$ 是正则局部环沿局部同态组成的[[滤相系]]。
只要滤余极限 $R=\operatornamewithlimits{colim}_{i\in I}R_i$
是 Noether 环，它就是正则局部环。
:::

::: proof
利用局部环的元素刻画“对任意 $r\in R$ 都有 $r\in R^\times$
或 $1-r\in R^\times$”，容易验证 $R$ 是局部环。记其极大理想为
$\mathfrak{m}$，剩余域为 $k$，我们对 $\mathfrak{m}$ 的生成元个数即
$\dim_k(\mathfrak{m}/\mathfrak{m}^2)$ 归纳。取
$r\in\mathfrak{m}\setminus\mathfrak{m}^2$，并取 $i\in I$
使其被 $R_i$ 中的 $r_i\in\mathfrak{m}_i$
代表。则由 $r\notin\mathfrak{m}^2$，
对每个 $j\ge i$，$r_i$ 在 $R_j$ 的像 $r_j$ 也都不属于
$\mathfrak{m}_j^2$。不难发现 $R$ 是整环，所以 $r$ 不是零因子。而由归纳假设
$R/r=\operatornamewithlimits{colim}_{j\ge i}R_j/r_j$
是正则局部环。故由 @切片 知 $R$ 也是正则局部环。
:::

## 同调性质

以下定理常称为“同调判别法”，由 [[Jean-Pierre Serre]] 发现并证明。
这开启了[[交换代数]]研究中的同调方法。

::: theorem [Serre]
对 Noether 局部环 $(R,\mathfrak{m},k)$，以下条件等价：

- $R$ 是正则局部环。

- $R$ 的[[整体维数]]等于 $\dim R$。

- $R$ 的整体维数有限。

此外，Noether 环的整体维数有限当且仅当它 [[Krull 维数]]有限且为正则环。
:::

注意 Noether 环整体维数和 [[$\operatorname{Tor}$-维数]]一样，
故定理中的整体维数也可改成 $\operatorname{Tor}$-维数。

::: proof
- 如 $R$ 正则，由 @正则序列 知 $\mathfrak{m}$
  由正则序列生成。于是 [[Koszul 复形]]就是 $k$ 的 $\dim R$ 项自由消解。
  由构造易知它就是 $k$ 的极小消解，于是由[[极小复形]]的理论，
  $$
  \operatorname{gl.\,dim}R=\operatorname{fd}_R(k)=\dim R.
  $$

- 如 $R$ 整体维数有限，我们对 $e=\dim_k(\mathfrak{m}/\mathfrak{m}^2)$
  归纳证明 $R$ 正则。$e=0$ 时 $R$ 是域，当然正则。
  设 $e>0$ 且命题对小于 $e$ 的数成立。现如果 $\mathfrak{m}\in\operatorname{Ass}(R)$，
  取非零的 $a\in R$ 使得 $\mathfrak{m}a=0$。由
  $R$ 整体维数有限，$k$ 有有限项极小消解
  $$
  0\to F_n\to\cdots\to F_0\to k\to0,
  $$
  从中可看出 $F_n\subseteq\mathfrak{m}F_{n-1}$。
  这样一来 $aF_n=0$，与 $F_n$ 自由矛盾！故 $\mathfrak{m}\notin\operatorname{Ass}(R)$。
  而[[结合素理想]]只有有限个，故用[[素理想回避]]可取出元素
  $r\in\mathfrak{m}$，使得 $r$ 不在 $\mathfrak{m}^2$ 及任一结合素理想中，
  即 $r$ 不是零因子。现只需证 $R/r$ 整体维数有限，这样用归纳假设和切片判别就会得到结论。

  由极小复形的理论 $\operatorname{gl.\,dim}R/r=\operatorname{fd}_{R/r}(k)$，
  故只需证 $\operatorname{fd}_{R/r}(k)<\infty$。取一步消解
  $$
  0\to\mathfrak{m}/(r)\to R/r\to R/\mathfrak{m}=k\to0,
  $$
  只需证 $\operatorname{fd}_{R/r}(\mathfrak{m}/(r))<\infty$。
  为此，首先注意 $\operatorname{fd}_{R/r}(\mathfrak{m}/r\mathfrak{m})<\infty$，
  因为由 $R$ 整体维数有限，$\mathfrak{m}$ 有有限项 $R$-自由消解
  $$
  0\to G_n\to\cdots\to G_0\to\mathfrak{m}\to0;
  $$
  然后由于 $r$ 不是零因子，乘以 $r$ 在各项上都是单射，
  故上面的链复形各项商 $r$ 仍然正合，就得到 $\mathfrak{m}/r\mathfrak{m}$ 有有限项 $R/r$-自由消解，
  即 $\operatorname{fd}_{R/r}(\mathfrak{m}/r\mathfrak{m})<\infty$。
  其次注意 $\mathfrak{m}/(r)$ 是 $\mathfrak{m}/r\mathfrak{m}$
  的直和项：取 $r_2,\ldots,r_e\in\mathfrak{m}$ 使得
  $r,r_2,\ldots,r_e$ 在 $\mathfrak{m}/\mathfrak{m}^2$
  的像构成其一组 $k$-基，令 $\mathfrak{r}=(r_2,\ldots,r_e)$，
  则 $\mathfrak{m}=\mathfrak{r}+(r)$。
  模 $\mathfrak{m}^2$ 易知 $\mathfrak{r}\cap(r)\subsetneqq(r)$，
  于是 $\mathfrak{r}\cap(r)\subseteq r\mathfrak{m}$，
  从而有映射
  $$
  \mathfrak{m}/(r)=\frac{\mathfrak{r}+(r)}{(r)}
  =\frac{\mathfrak{r}}{\mathfrak{r}\cap(r)}\to\mathfrak{m}/r\mathfrak{m}.
  $$
  对 $\mathfrak{m}$ 的生成元 $r,r_2,\ldots,r_e$
  分别检查，不难发现此映射复合 $\mathfrak{m}/r\mathfrak{m}\to\mathfrak{m}/(r)$
  的自然映射之后为 $\operatorname{id}$，即 $\mathfrak{m}/(r)$
  是 $\mathfrak{m}/r\mathfrak{m}$ 的直和项，故
  $$
  \operatorname{fd}_{R/r}(\mathfrak{m}/(r))\le\operatorname{fd}_{R/r}(\mathfrak{m}/r\mathfrak{m})<\infty,
  $$
  命题得证。

最后一句话则是因为 Noether 环整体维数等于 $\operatorname{Tor}$-维数，
而我们有
$$
\dim A=\sup\{\dim A_\mathfrak{p}\mid\mathfrak{p}\in\operatorname{Spec}A\},
$$
$$
\operatorname{tor-dim}A=\sup\{\operatorname{tor-dim}A_\mathfrak{p}\mid\mathfrak{p}\in\operatorname{Spec}A\},
$$
故要 $\operatorname{tor-dim}A<\infty$，只有各个 $A_\mathfrak{p}$
都正则，并且 $\dim A<\infty$。
:::

::: corollary
正则局部环的局部化还是正则局部环。
:::

::: proof
由于[[平坦模]]的局部化仍平坦，有
$$
\operatorname{tor-dim}R_\mathfrak{p}\le\operatorname{tor-dim}R,
$$
由此立得结论。
:::

::: corollary [忠实平坦下降]
$R\to S$ 是[[忠实平坦同态]]，$S$ 是正则环，
则 $R$ 也是正则环，维数不超过 $S$ 的维数。
:::

::: proof
只需证局部环局部同态情形。此时只需证
$\operatorname{tor\text{-}dim}R\le\operatorname{tor\text{-}dim}S$。
这是因为对 $R$-模 $M,N$，由平坦性有
$$
\operatorname{Tor}_i^R(M,N)\otimes_RS=\operatorname{Tor}_i^S(M\otimes_RS,N\otimes_RS),
$$
在 $i>\operatorname{tor\text{-}dim}S$ 时为 $0$；
由忠实平坦，这说明 $\operatorname{Tor}_i^R(M,N)$
在 $i>\operatorname{tor\text{-}dim}S$ 时为 $0$，
即 $\operatorname{tor\text{-}dim}R\le\operatorname{tor\text{-}dim}S$。
:::

用同调判别法加上[[唯一分解整环]]的一些刻画，可以得到正则局部环唯一分解。

::: theorem
正则局部环都是唯一分解整环。
:::

## 例子

## $(\mathrm{R}_k)$ 条件

$(\mathrm{R}_k)$ 条件指的是在高度 $k$ 或者说余维 $k$ 正则。
它几何意义明确，有时会给 Noether 环的研究带来方便。

::: definition
称 Noether 环 $A$ 满足 $(\mathrm{R}_k)$ 条件，意思是对其中高度不大于 $k$
的素理想 $\mathfrak{p}$，都有 $A_\mathfrak{p}$ 正则。
:::

::: example
依定义，正则环即为对任意自然数 $k$ 都满足 $(\mathrm{R}_k)$ 条件的环。
由于一维局部环正规和正则是一回事，都是[[离散赋值环]]，
有[[正规环]]满足 $(\text{R}_1)$。
:::

```terms
正则环:
  en: regular ring
  de: regulärer Ring
  fr: anneau régulier
  grc: κανονικὸς δακτύλιος
  la: anellus regularis
```
