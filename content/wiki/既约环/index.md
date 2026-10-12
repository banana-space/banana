---
title: 既约环
aliases: [既约化]
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

[[交换代数]]中，**既约环**指没有非零[[幂零元]]的环。
它在代数几何中对应于没有加厚，或者说没有无穷小延伸的对象。

## 定义

::: definition
$R$ 是环。称 $R$ **既约**，指的是其没有非零幂零元，
即只要 $r\in R$ 和 $n\in\mathbb{N}$ 满足 $r^n=0$，就有 $r=0$。
:::

## 例子

以下 $k$ 是随便一个[[域]]。

- [[整环]]是既约环。

- $k[x]/(x^2)$ 不是既约环。

- $k[x,y]/(x^2,xy)$ 不是既约环。

## 性质

::: proposition
既约环的子环、乘积、局部化都还是既约环。
:::

::: proof
只有局部化没那么显然。设 $R$ 是既约环，$S$ 是其乘性子集。
如 $r/s\in S^{-1}R$ 幂零，设其 $n$ 次方为 $0$。
则依定义存在 $t\in S$ 使得在 $R$ 中 $tr^n=0$。
这样有 $(tr)^n=0$，由 $R$ 既约得到 $tr=0$。
于是在 $S^{-1}R$ 中 $r/s=tr/ts=0$。
:::

每个环都能通过商去[[幂零根]]得到既约环：

::: theorem
既约环的范畴到所有环的范畴的含入函子有左伴随，即商去幂零根。
这一操作称为**既约化**。
:::

::: proof
如 $R$ 是环，$I$ 是其幂零根，则 $R/I$ 既约：因为如果其中元素
$\bar{r}$ 幂零，任取其原像 $r$，则存在 $n\in\mathbb{N}$ 使得 $r^n\in I$；
这说明 $r^n$ 幂零，即存在 $m\in\mathbb{N}$ 使得 $r^{nm}=0$；
于是 $r$ 也幂零，$r\in I$，$\bar{r}=0$。

商去幂零根这一操作显然具有函子性。要说明它是左伴随，需要对既约环
$S$ 说明 $\operatorname{Hom}(R,S)=\operatorname{Hom}(R/I,S)$。
这是显然的：由于 $S$ 既约，同态将幂零元映射到幂零元，
$R$ 到 $S$ 的同态都把幂零根 $I$ 映射到 $0$，也就相当于
$R/I$ 到 $S$ 的同态。
:::

既约相当于一种很弱的同调正则性。以下定理是既约环的 $\text{R}_0\text{S}_1$ 判别法；
[[正规环]]的 $\text{R}_1\text{S}_2$ 判别法也属此类。

::: theorem
环 $R$ 既约当且仅当以下两条件成立：

- $(\text{R}_0)$ 对 $R$ 的任一极小素理想 $\mathfrak{p}$，
  $R_\mathfrak{p}$ 是域。

- $(\text{S}_1)$ 对任一非零元 $r\in R$，理想 $\operatorname{Ann}(r)$
  上极小的素理想都是 $R$ 的极小素理想。换言之，
  $R$ 的[[弱结合素理想]]都极小。

:::

::: proof
先从既约证 $\text{R}_0\text{S}_1$。只需对任一非零元 $r\in R$ 以及
$I=\operatorname{Ann}(r)$ 上任一极小素理想 $\mathfrak{p}$
证明 $R_\mathfrak{p}$ 是域：这样取 $r=1$ 便得到 $\text{R}_0$，
对一般的 $r$ 即得到 $\text{S}_1$。由于 $\mathfrak{p}$ 在 $I$ 上极小，
$\mathfrak{p}R_\mathfrak{p}$ 也在 $IR_\mathfrak{p}$ 上极小，
从而 $\mathfrak{p}R_\mathfrak{p}=\sqrt{IR_\mathfrak{p}}$。
现如果 $r\in\mathfrak{p}R_\mathfrak{p}$，则存在 $n\in\mathbb{N}$
使得 $r^n\in IR_\mathfrak{p}$；而 $I=\operatorname{Ann}(r)$，
从而 $r^{n+1}=0$。由于 $R$ 既约，$R_\mathfrak{p}$ 也既约，
所以在 $R_\mathfrak{p}$ 中 $r=0$。
而这导致 $IR_\mathfrak{p}=\operatorname{Ann}_{R_\mathfrak{p}}(r)=1$，
与 $\mathfrak{p}\supseteq I$ 矛盾！故 $r\notin\mathfrak{p}R_\mathfrak{p}$。
这样一来 $r\in R_\mathfrak{p}$ 就可逆，$IR_\mathfrak{p}=0$。
于是 $\mathfrak{p}R_\mathfrak{p}=\sqrt{IR_\mathfrak{p}}=\sqrt{0}$，
这样由既约得 $\mathfrak{p}R_\mathfrak{p}=0$，$R_\mathfrak{p}$ 是域。

再从 $\text{R}_0\text{S}_1$ 证既约。用反证法，设 $r\in R$ 是非零幂零元，
则首先 $r$ 在每个素理想中。仍记 $I=\operatorname{Ann}(r)$
并取其上极小的素理想 $\mathfrak{p}$。则由 $\text{S}_1$，
$\mathfrak{p}$ 在 $R$ 中极小；再由 $\text{R}_0$，$R_\mathfrak{p}$
是域，$\mathfrak{p}R_\mathfrak{p}=0$。这样由 $r\in\mathfrak{p}$，
$r$ 在 $R_\mathfrak{p}$ 中等于 $0$，于是
$IR_\mathfrak{p}=\operatorname{Ann}_{R_\mathfrak{p}}(r)=1$，
与 $I\subseteq\mathfrak{p}$ 矛盾！故 $R$ 没有非零幂零元，它既约。
:::

::: remark {@嵌入}
上面证明的第一段说明，对既约环 $R$ 及其非零元 $r$，
总有极小素理想 $\mathfrak{p}$ 使得其在 $R_\mathfrak{p}$ 的像非零。
于是对既约环 $R$，映射
$$
R\to\prod_{\mathfrak{p}\in\operatorname{Spec}R\,极小}R_\mathfrak{p}
$$
总是单射。特别地，既约环总是一些域乘积的子环。
:::

对既约环上有限生成模，平坦和投射有如下纤维判别法：

::: theorem
$R$ 是既约环，$M$ 是有限生成 $R$-模。考虑函数
$\rho\colon\operatorname{Spec}R\to\mathbb{N}$，
$$
\rho(\mathfrak{p})=\dim_{k(\mathfrak{p})}(M\otimes_Rk(\mathfrak{p})).
$$
则 $M$ [[平坦模|平坦]]当且仅当对任意素理想
$\mathfrak{p}\supseteq\mathfrak{q}$，$\rho(\mathfrak{p})=\rho(\mathfrak{q})$；
$M$ [[投射模|投射]]当且仅当 $\rho$ 为局部常。
:::

::: proof
如果 $M$ 平坦，则由于平坦是局部性质，且局部环上有限生成平坦模自由，
有 $M_\mathfrak{p}$ 是有限秩自由 $R_\mathfrak{p}$-模。
这样对 $\mathfrak{q}\subseteq\mathfrak{p}$ 当然有 $\rho(\mathfrak{q})=\rho(\mathfrak{p})$。
反过来，设有此条件，要证 $M$ 平坦。只需对任意素理想 $\mathfrak{p}$
证明 $M_\mathfrak{p}$ 作为 $R_\mathfrak{p}$-模平坦。
对 $\mathfrak{p}$ 局部化不改变条件，故可假设 $(R,\mathfrak{p})$ 是局部环，
这样条件表明 $\rho$ 是常值。取 $x_1,\ldots,x_\rho\in M$
使其在 $M/\mathfrak{p}M$ 的像是一组基。
则由 [[Nakayama 引理]]，这些元素给出的映射
$R^\rho\to M$ 满。以 $K$ 记其核，则有短正合列
$$
0\to K\to R^\rho\to M\to0.
$$
对 $R$ 的任一极小素理想 $\mathfrak{q}$，将以上正合列对 $\mathfrak{q}$
局部化。由 $R$ 既约，$R_\mathfrak{q}$ 是域，从而条件说明
$M_\mathfrak{q}$ 是 $R_\mathfrak{q}$ 上的 $\rho$ 维线性空间。
现在 $R_\mathfrak{q}^\rho\to M_\mathfrak{q}$ 是满射，
所以也是单射，$K_\mathfrak{q}=0$。而由 @嵌入，
$R\hookrightarrow\prod_{\mathfrak{q}\,极小}R_\mathfrak{q}$，
$K\subseteq R^\rho$，故
$$
K\hookrightarrow\prod_{\mathfrak{q}\,极小}K_\mathfrak{q},
$$
所以 $K=0$。这样 $M\cong R^\rho$ 为平坦。

如果 $M$ 投射，则其在一个 [[Zariski 拓扑|Zariski]] 开覆盖上自由；
对自由模，函数 $\rho$ 显然为常值；故对投射模其为局部常值。
反过来如 $\rho$ 局部常，需要证 $M$ 在一个 Zariski 开覆盖上自由，
即对任一素理想 $\mathfrak{p}$，要证明存在 $r\notin\mathfrak{p}$
使得 $M_r$ 是自由 $R_r$-模。注意在证明过程中，我们可以把 $R$
换成其局部化 $\mathfrak{p}$ 之外的任一元素。首先由 $\rho$ 局部常，
局部化适当的 $r\notin\mathfrak{p}$，
可设 $\rho$ 为常值。取 $x_1,\ldots,x_\rho\in M_\mathfrak{p}$
使其在 $M_\mathfrak{p}/\mathfrak{p}M_\mathfrak{p}$ 的像是一组基。
局部化这些元素的公分母，可设它们属于 $M$。于是它们给出映射
$R^\rho\to M$，其余核在 $\mathfrak{p}$ 处局部化为 $0$。
由于此余核有限生成，局部化一个零化这些生成元的元素，可设它就是 $0$，
即 $R^\rho\twoheadrightarrow M$。现取其核 $K$，作短正合列
$$
0\to K\to R^\rho\to M\to0,
$$
并作上一段中论证，便知 $K=0$，$M\cong R^\rho$ 自由。
:::

```terms
既约环:
  en: reduced ring
  de: reduzierter Ring
  fr: anneau réduit
既约化:
  en: reduce
  de: reduzieren
  fr: réduire
```
