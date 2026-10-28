---
title: Hilbert 多项式
aliases: [Hilbert 函数, Hilbert 级数]
categories: [交换代数, 代数几何]
navboxes: [交换代数]
---

<problems>
- “应用”一节需要扩充。
</problems>

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Hilbert 多项式**是[[交换代数]]和[[代数几何]]中的重要数值不变量，
反映[[分次环]]上[[分次模]]或[[射影概形]]上[[凝聚层]]的信息。
其在发展[[维数理论 (交换代数)|维数理论]]以及定义 [[Hilbert 概形]]、
[[Quot 概形]]时都有作用。

## 代数定义

::: definition [Hilbert 多项式] {@代数}
设 $S=\bigoplus_{n\in\mathbb{N}}S_n$ 为[[分次环]]，
满足 $S_0$ [[Artin 环|Artin]]，$S_1$ 为有限生成 $S_0$-模，
且其在 $S$ 中生成理想 $S_+=\bigoplus_{n\in\mathbb{Z}_+}S_n$。设 $N=\bigoplus_{n\in\mathbb{N}}N_n$
为[[有限生成模|有限生成]][[分次模|分次]] $S$-模。则 $N$ 的
**Hilbert 函数**定义为 $\mathbb{N}$ 到自身的函数
$$
\varphi_N(n)=\ell_{S_0}(N_n),
$$
其中 $\ell$ 表示[[长度 (模论)|长度]]。由条件不难发现 $N_n$
为有限长，故它良定义。下面将会看到，当 $n$ 充分大时，
$\varphi_N$ 是关于 $n$ 的多项式，称其为 **Hilbert 多项式**。

分次环作为自己的模的 Hilbert 多项式也称为该分次环的
Hilbert 多项式。
:::

::: remark
由 [[Hilbert 基定理]]，$S$ 为 [[Noether 环]]。
:::

::: definition [Hilbert 级数] {@级数}
记号同上。$N$ 的 **Hilbert 级数**定义为整系数[[形式幂级数]]
$$
P_N(t)=\sum_{n=0}^\infty\varphi_N(n)t^n\in\mathbb{Z}[[t]].
$$
:::

::: remark [加性] {@加性}
考虑分次模短正合列
$$
0\to N'\to N\to N''\to0
$$
则 $\varphi_N=\varphi_{N'}+\varphi_{N''}$，
$P_N=P_{N'}+P_{N''}$。这是因为长度具有加性。
:::

::: remark [平移] {@平移}
回忆对分次模 $N$ 以及整数 $c$，$N$ 的 $c$ 次平移指的是分次模
$N(c)$，定义为 $N(c)_n=N_{n+c}$。于是
$\varphi_{N(c)}(n)=\varphi_N(n+c)$，
$P_{N(c)}(t)$ 则为 $t^{-c}P_N(t)$ 舍去负次数项。
:::

### 例子

- 设 $k$ 是[[域]]。考虑其上 $d+1$
  元多项式环 $S=k[x_0,\ldots,x_d]$，
  按照多项式的次数视为分次环。则 $\varphi_S(n)$
  就是齐 $n$ 次多项式空间的维数，即 $\binom{n+d}{d}$，
  是关于 $n$ 的 $d$ 次多项式。其 Hilbert 级数为
  $$
  \sum_{n=0}^\infty\binom{n+d}{d}t^n=\frac{1}{(1-t)^{d+1}}.
  $$

### 性质

::: theorem
记号同 @代数、@级数。设 $S_1$ 作为
$S_0$-模由 $d$ 个元素生成。则 $(1-t)^dP_N(t)\in\mathbb{Z}[t]$。
:::

::: proof
对 $d$ 归纳。$d=0$ 时 $S=S_0$。由 $N$ 有限生成，
其只在有限个次数上非零，故此时 $P_N(t)\in\mathbb{Z}[t]$。
现设命题对 $d$ 成立，来证明 $d+1$ 的情形。取生成元组
$s_0,\ldots,s_d\in S_1$。

注意“乘以 $s_0$”是 $N(-1)$ 到 $N$ 的分次模同态。
取其核、余核，写出正合列
$$
0\to N'\to N(-1)\to N\to N''\to0
$$
依定义，$N'$ 与 $N''$ 被 $s_0$ 零化。这样它们都是分次环
$S'=S/s_0$ 的分次模，而 $S'_1=S_1/S_0s_0$ 由 $d$
个元素生成，故由归纳假设 $(1-t)^dP_{N'}(t),
  (1-t)^dP_{N''}(t)\in\mathbb{Z}[t]$。而由 @加性、@平移，
以上正合列给出
$$
P_{N'}(t)-tP_N(t)+P_N(t)-P_{N''}(t)=0;
$$
于是
$$
(1-t)^{d+1}P_N(t)=(1-t)^d(P_{N''}(t)-P_{N'}(t))\in\mathbb{Z}[t].
$$
:::

::: corollary [良定义]
记号同上。$n$ 充分大时，$\varphi_N(n)$ 是关于
$n$ 的至多 $d-1$ 次多项式，首项为正。
:::

::: proof
设 $(1-t)^dP_N(t)\in\mathbb{Z}[t]$ 的次数为 $c$，则在 $n>c$
时 $\varphi_N(n)$ 的 $d$ 次差分为 $0$。所以 $n>c$
时 $\varphi_N(n)$ 是至多 $d-1$ 次多项式。
首项为正是因为 $\varphi_N(n)$ 总取非负数值。
:::

## 几何定义

::: definition {@几何}
设 $S_0$ 为 [[Artin 环]]，$X\to\operatorname{Spec}S_0$
为其上[[有限型态射|有限型]][[概形]]，$\mathcal{L}$ 为 $X$
上[[线丛]]，$\mathcal{F}$ 为 $X$ 上[[凝聚层]]，满足
$\operatorname{Supp}\mathcal{F}\subseteq X$ 在 $\operatorname{Spec}S_0$
上[[紧合态射|紧合]]。考虑 $\mathbb{Z}$ 到自身的函数
$$
n\mapsto\chi(X,\mathcal{F}\otimes\mathcal{L}^n)=
\sum_{i=0}^\infty(-1)^i\ell_{S_0}(H^i(X,\mathcal{F}\otimes\mathcal{L}^n)),
$$
其中 $\chi$ 表示 [[Euler 示性数]]，$\ell$ 表示[[长度 (模论)|长度]]。
由 [[Grothendieck 凝聚性]]，上式右边各项是有限的，且只有有限项非零，
故它良定义。下面将会看到，
该函数是关于 $n$ 的多项式，称其为 **Hilbert 多项式**。

如 $X$ 本身紧合，也称 $\mathcal{O}_X$ 的 Hilbert 多项式
为 $X$ 的 Hilbert 多项式。
:::

### 例子

- 设 $S_0=k$ 是[[域]]，$X=\mathbf{P}^d_k$ 为其上[[射影空间]]，
  $\mathcal{L}=\mathcal{O}(1)$。对 $n\in\mathbb{Z}$，有
  $$
  H^i(\mathbf{P}^d_k,\mathcal{O}(n))=\begin{cases}
    k[x_0,\ldots,x_d]_n,&i=0;\\
    0,&1\le i\le d-1;\\
    ((x_0\cdots x_d)^{-1}k[x_0^{-1},\ldots,x_d^{-1}])_n,&i=d;
  \end{cases}
  $$
  这里下标 $n$ 表示 $n$ 次部分，其中各个变元 $x_j$ 均视为一次。所以
  $\mathbf{P}^d_k$ 的 Hilbert 多项式为 $d$ 次多项式
  $\binom{n+d}{d}$。

### 性质

::: theorem [良定义]
记号同 @几何。$\mathbb{Z}$ 到自身的函数
$n\mapsto\chi(X,\mathcal{F}\otimes\mathcal{L}^n)$
是个[[整值多项式]]。
:::

::: proposition [与代数定义的关系]
记号同 @代数。令 $X=\operatorname{Proj}S$，
$\mathcal{L}=\mathcal{O}_X(1)$，
$\mathcal{F}$ 为 $N$ 定义的凝聚层，即对齐次元 $s\in S_+$，
$\mathcal{F}(D(s))=(N_s)_0$。则对 $n$ 充分大，
$$
\chi(X,\mathcal{F}(n))=\varphi_N(n).
$$
即 $\mathcal{F}$ 关于 $\mathcal{L}$ 的 Hilbert 多项式等于
$N$ 的 Hilbert 多项式。
:::

::: proposition [在平坦族下不变]
设 $X \to S$ 是[[有限型态射]]，
$\mathcal{F}$ 是 $X$ 上[[凝聚层]]，在 $S$ 上[[平坦层|平坦]]，
且其支集在 $S$ 上[[紧合态射|紧合]]；
$\mathcal{L}$ 为 $X$ 上[[线丛]]。
则对固定的 $n$，函数
\[
s \mapsto \chi(X_s, \mathcal{F}_s \otimes \mathcal{L}_s^n)
\]
在 $S$ 上为局部常值，这里下标 $s$ 表示在 $s$ 上的拉回。
因此 $\mathcal{F}$ 关于 $\mathcal{L}$ 的 Hilbert 多项式为局部常值。
:::

## 应用

## 推广

对于基概形未必 Artin 的情形，可不取长度而直接取 [[K 群]]代表元，
得到一个推广。以下对 [[Noether 概形]] $X$，以 $K'_0(X)$ 表示由
$\operatorname{Coh}(X)$ 中的元素生成，对每个短正合列
$$
0\to\mathcal{F}\to\mathcal{G}\to\mathcal{H}\to0
$$
有关系 $[\mathcal{F}]-[\mathcal{G}]+[\mathcal{H}]=0$，
所得的 [[Abel 群]]。

::: theorem
设 $f\colon X\to Y$ 是 Noether 概形的[[紧合态射]]。则
$\operatorname{Coh}(X)$ 到 $K'_0(Y)$ 的映射
$$
\mathcal{F}\mapsto\sum_{i=0}^\infty(-1)^i[R^if_*\mathcal{F}]
$$
给出群同态 $f_*\colon K'_0(X)\to K'_0(Y)$。
如 $\mathcal{F}\in\operatorname{Coh}(X)$，
$\mathcal{L}_1,\ldots,\mathcal{L}_r\in\operatorname{Pic}(X)$，
则 $\mathbb{Z}^r$ 到 $K'_0(Y)$ 的映射
$$
(n_1,\ldots,n_r)\mapsto f_*[\mathcal{F}\otimes\mathcal{L}_1^{n_1}\otimes\cdots\otimes\mathcal{L}_r^{n_r}]
$$
是[[多项式映射]]。
:::

```terms
Hilbert 多项式:
  en: Hilbert polynomial
  de: Hilbert-Polynom
  fr: polynôme de Hilbert
Hilbert 级数:
  en: Hilbert series
  de: Hilbert-Reihe
  fr: série de Hilbert
```
