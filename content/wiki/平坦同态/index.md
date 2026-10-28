---
title: 平坦同态
aliases: [忠实平坦同态]
categories: [交换代数]
navboxes: [交换代数]
---

<problems>
- “性质”一节中命题 2.7（忠实平坦等价于平坦且素谱映射满）的证明称“每个 $A$-模都以某个 $k(\mathfrak{p})$ 为子商”，这似乎一般不成立（例如 $\mathbb{Z}$ 的子商中没有 $\mathbb{Q}$）；可改为非零模以某个 $A/\mathfrak{p}$ 为子商，再在 $\mathfrak{p}$ 处局部化。
</problems>

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

[[交换代数]]中，**平坦同态**指的是[[环同态]] $A\to B$，
满足 $B$ 作为 $A$-模[[平坦模|平坦]]。这一概念由 [[Jean-Pierre Serre]]
引入，在几何上表示一种行为比较好的族，又比[[纤维丛]]弱得多。
它虽然几何意义不甚明显，但是在交换代数和[[代数几何]]中十分重要。

## 定义

::: definition
称环同态 $A\to B$ **平坦**，或称 **$B$
在 $A$ 上平坦**，意思是 $B$ 作为 $A$-模是[[平坦模]]，即函子
$$
-\otimes_AB\colon A\text{-}\mathsf{Mod}\to B\text{-}\mathsf{Mod}
$$
是[[正合函子]]。
:::

::: remark {@延拓}
由[[平坦模]]的性质，这等价于对每个理想 $I\subseteq A$，
乘法映射 $I\otimes_AB\to B$ 为单射，即
$I\otimes_AB=IB$。
:::

::: definition
称环同态 $A\to B$ **忠实平坦**，或称 **$B$
在 $A$ 上忠实平坦**，意思是 $B$ 作为 $A$-模是[[忠实平坦模]]，即函子
$$
-\otimes_AB\colon A\text{-}\mathsf{Mod}\to B\text{-}\mathsf{Mod}
$$
是[[忠实函子|忠实]]正合函子。
:::

## 性质

::: proposition [基变换]
对（忠实）平坦环同态 $A\to B$ 以及任意环同态 $A\to A'$，
令 $B'=B\otimes_AA'$，则 $A'\to B'$ 对应地（忠实）平坦。
:::

::: proof
这是[[平坦模]]和[[忠实平坦模]]对应性质的立即推论。
:::

::: proposition
（忠实）平坦同态的复合还是（忠实）平坦同态。更一般地，对环同态
$f\colon A\to B$ 与 $B$-模 $M$，有：

- 如 $f$ 平坦，$M$ 是平坦 $B$-模，则 $M$ 是平坦 $A$-模。

- 如 $M$ 是忠实平坦 $B$-模，则 $f$（忠实）平坦等价于
  $M$ 作为 $A$-模（忠实）平坦。

:::

::: proof
如 $f$ 平坦，$M$ 在 $B$ 上平坦，则由
$$
-\otimes_AM=(-\otimes_AB)\otimes_BM
$$
知此函子正合，所以 $M$ 在 $A$ 上平坦。现如 $M$ 在 $B$
上忠实平坦，则 $-\otimes_BM$ 忠实、正合，所以
$-\otimes_AM$（忠实）正合当且仅当 $-\otimes_AB$（忠实）正合，
即 $f$（忠实）平坦当且仅当 $M$ 在 $A$ 上（忠实）平坦。
:::

::: remark
如只有 $f$ 的平坦条件以及 $M$ 作为 $A$-模的平坦条件，
并不能得到 $M$ 作为 $B$-模的任何信息。取 $A$ 是[[域]]即可发现这一点。
:::

::: proposition {@下降平坦}
对忠实平坦环同态 $A\to B$ 以及 $A$-模 $M$，$M$ 是（忠实）平坦
$A$-模，当且仅当 $M\otimes_AB$ 是（忠实）平坦 $B$-模。
:::

::: proof
由
$$
(-\otimes_AB)\otimes_B(M\otimes_AB)=(-\otimes_AM)\otimes_AB
$$
知 $M\otimes_AB$ 在 $B$ 上（忠实）平坦等价于等号右边的函子
（忠实）正合。现由 $-\otimes_AB$ 忠实、正合便知这等价于
$-\otimes_AM$（忠实）正合，即 $M$ 在 $A$ 上（忠实）平坦。
:::

::: remark {@下降注}
这一命题是一种[[忠实平坦下降]]，即一个性质在忠实平坦基变换之后成立，
便在基变换之前也成立。更显然的忠实平坦下降有如下命题：
$A\to B$ 是忠实平坦同态，$f\colon M\to N$ 是 $A$-模同态。
则 $f$ 单、满，分别等价于 $f\otimes_AB\colon M\otimes_AB\to N\otimes_AB$
单、满。这是因为首先 $-\otimes_AB$ 正合，保持核与余核；
其次它忠实，故原先的（余）核为零等价于作用之后的（余）核为零。
:::

::: proposition [局部性]
对环同态 $A\to B$，以下几条等价：

1. $A\to B$ 平坦。

2. 对 $A$ 的每个素理想 $\mathfrak{p}$，都有
   $A_\mathfrak{p}\to B_\mathfrak{p}$ 平坦。

3. 对 $B$ 的每个素理想 $\mathfrak{P}$，记
   $\mathfrak{p}=\mathfrak{P}\cap A$，都有
   $A_\mathfrak{p}\to B_\mathfrak{P}$ 平坦。

:::

::: proof
前两条等价是[[平坦模]]的局部性。2 推 3 是因为 $B_\mathfrak{P}$
是 $B_\mathfrak{p}$ 的[[局部化]]，局部化平坦，平坦同态的复合平坦。
下证 3 推 1。要对 $A$-模正合列
$$
0\to M\to N\to Q\to0
$$
证 $B$-模映射列
$$
0\to M\otimes_AB\to N\otimes_AB\to Q\otimes_AB\to0
$$
正合。由正合的局部性，这等价于对 $B$ 的每个素理想 $\mathfrak{P}$，
上列在 $\mathfrak{P}$ 处局部化
$$
0\to M\otimes_AB_\mathfrak{P}\to N\otimes_AB_\mathfrak{P}\to Q\otimes_AB_\mathfrak{P}\to0
$$
正合。而由条件 $A_\mathfrak{p}\to B_\mathfrak{P}$ 平坦，
$A\to A_\mathfrak{p}$ 是局部化，也平坦，所以 $A\to B_\mathfrak{P}$
平坦，所以上列正合。
:::

::: proposition {@谱}
环同态忠实平坦等价于平坦且在[[素谱]]上是满射。
:::

::: proof
回忆对环同态 $A\to B$ 以及 $\mathfrak{p}\in\operatorname{Spec}A$，
$\mathfrak{p}$ 在素谱映射下的原像是
$\operatorname{Spec}(B\otimes_Ak(\mathfrak{p}))$，
其中 $k(\mathfrak{p})=A_\mathfrak{p}/\mathfrak{p}A_\mathfrak{p}$
是 $\mathfrak{p}$ 的剩余域。故 $A\to B$ 在素谱上是满射等价于对每个
$\mathfrak{p}\in\operatorname{Spec}A$ 都有
$B\otimes_Ak(\mathfrak{p})\ne0$。当 $A\to B$
忠实平坦时这当然成立，因为和忠实平坦模张量积是忠实函子，
不会把非零模变成 $0$。反过来如 $A\to B$ 平坦且在素谱上是满射，
要证它忠实平坦，即要证对非零 $A$-模 $M$，$M\otimes_AB$ 也非零。
注意到每个 $A$-模都以某个 $k(\mathfrak{p})$ 为子商，
故由 $-\otimes_AB$ 的正合性，$M\otimes_AB$ 以
$k(\mathfrak{p})\otimes_AB$ 为子商。而由条件后者为非零，
从而 $M\otimes_AB$ 也非零。更详细的论证见[[忠实平坦模]]条目的相关命题。
:::

::: proposition {@局部同态}
[[局部环]]局部同态只要平坦就忠实平坦。
:::

::: proof
回忆局部环 $(A,\mathfrak{m})$ 的平坦模 $M$ [[忠实平坦模|忠实平坦]]等价于
$\mathfrak{m}M\subsetneqq M$。而对局部同态
$(A,\mathfrak{m})\to(B,\mathfrak{n})$ 显然有
$\mathfrak{m}B\subseteq\mathfrak{n}\subsetneqq B$，
所以它只要平坦就忠实平坦。
:::

以下性质常称为素理想“下行”。

::: proposition
$A\to B$ 是平坦同态，$\mathfrak{p}\supseteq\mathfrak{q}$
是 $A$ 的素理想，$\mathfrak{P}$ 是 $B$ 的素理想，满足
$\mathfrak{P}\cap A=\mathfrak{p}$。则 $B$ 有素理想
$\mathfrak{Q}\subseteq\mathfrak{P}$，使得
$\mathfrak{Q}\cap A=\mathfrak{q}$。
:::

::: proof
把 $A$ 换成 $A_\mathfrak{p}$，$B$ 换成 $B_\mathfrak{P}$，
可设 $(A,\mathfrak{p})$ 和 $(B,\mathfrak{P})$ 都是局部环。
现由 @局部同态 知 $A\to B$ 忠实平坦，由 @谱 知 $A\to B$ 在素谱上是满射。取 $\mathfrak{q}$
沿素谱映射的原像，即得所求的 $\mathfrak{Q}$。
:::

同态的忠实平坦和模的平坦有如下关系：

::: theorem
环同态 $f\colon A\to B$ 忠实平坦，当且仅当
$f$ 是单射，且 $\operatorname{coker}(f)$ 是平坦 $A$-模。
:::

::: proof
先证“仅当”。首先证明 $f$ 有截面，即存在环同态 $g\colon B\to A$
满足 $gf=\operatorname{id}_A$ 的情形。此时 $f$ 当然是单射；
$g$ 又给出 $A$-模直和分解 $B=A\oplus\operatorname{coker}(f)$，
由 $B$ 平坦有 $\operatorname{coker}(f)$ 平坦。
再将一般情形化归到有截面情形。注意对忠实平坦同态 $A\to A'$，
如记 $B'=B\otimes_AA'$，$f'\colon A'\to B'$，则由 @下降平坦 与 @下降注，
$f$ 是单射与 $\operatorname{coker}(f)$
在 $A$ 上平坦，分别等价于 $f'$ 是单射与 $\operatorname{coker}(f')$
在 $A'$ 上平坦。这样，$A'$ 上的对应命题就推出原命题。
现取 $A'=B$，则 $B'=B\otimes_AB$，$f'\colon B\to B'$
有截面，即 $B\otimes_AB$ 到 $B$ 的乘法映射。这样便化归到了有截面情形。

再证“当”。如 $f$ 是单射且 $\operatorname{coker}(f)$ 是平坦 $A$-模，
则对任意 $A$-模 $M$，写 $A$-模短正合列
$$
0\to A\to B\to\operatorname{coker}(f)\to0
$$
的 $\operatorname{Tor}_i^A(M,-)$ 长正合列，由 $A$ 与
$\operatorname{coker}(f)$ 都平坦知 $i>0$
时 $\operatorname{Tor}_i^A(M,B)=0$，$i=0$ 时有短正合列
$$
0\to M\to M\otimes_AB\to M\otimes_A\operatorname{coker}(f)\to0
$$
于是 $B$ 平坦，且 $M\ne0$ 时 $M\otimes_AB\ne0$，
故 $B$ 忠实平坦。
:::

上面证明的第一段体现了忠实平坦下降的思想方法。

::: corollary
设环同态 $f\colon A\to B$ 忠实平坦、[[有限同态|有限]]、[[有限表现同态|有限表现]]。
则 $f$ 作为 $A$-模映射分裂，即 $A$ 是 $B$ 的 $A$-模直和项。
:::

::: proof
定理给出短正合列
$$
0\to A\to B\to\operatorname{coker}(f)\to0
$$
且 $\operatorname{coker}(f)$ 是平坦 $A$-模。由条件，
$\operatorname{coker}(f)$ 是[[有限表现模|有限表现]] $A$-模。
于是由[[平坦模]]的性质知 $\operatorname{coker}(f)$
是[[投射模]]。所以上述正合列分裂，即 $f$ 作为 $A$-模映射分裂。
:::

下面的命题也是一种[[忠实平坦下降]]。

::: proposition
$A\to B$ 是忠实平坦同态，$I\subseteq A$ 是理想。
则 $IB\cap A=I$。
:::

::: proof
令 $J=IB\cap A$，则 $J\supseteq I$，$JB=IB$。要证 $J=I$。
由 @延拓，含入映射 $I\to J$ 张量积 $B$ 之后是同构，
故由 @下降注，其本身就是同构，即 $I=J$。
:::

由[[平坦模]]的纤维判别法可得以下平坦同态判别：

::: theorem
$(A,\mathfrak{m},k)\to (B,\mathfrak{n},\ell)$ 是 [[Noether 环|Noether]]
[[局部环]]的局部同态。则它平坦当且仅当
$\operatorname{Tor}_1^A(B,k)=0$。
:::

## 例子

以下例子和[[平坦模]]与[[忠实平坦模]]的差不多。

- [[域]]上的代数都平坦，且只要非零就忠实平坦。

- 设 $A$ 是[[主理想整环]]或 [[Dedekind 整环]]，
  $B$ 是整环，$f\colon A\to B$ 是单射。由于 $A$ 上无挠模都是平坦模，
  容易发现 $f$ 是平坦同态。

- 对任意环 $A$，[[多项式环]] $A[x_1,\ldots,x_n]$
  都在 $A$ 上平坦，因为它作为 $A$-模是[[自由模]]。

- [[局部化]]都是平坦同态。

```terms
平坦同态:
  en: flat homomorphism
  de: flacher Homomorphismus
  fr: homomorphisme plat
忠实平坦同态:
  en: faithfully flat homomorphism
  de: treu flacher Homomorphismus
  fr: homomorphisme fidèlement plat
```
