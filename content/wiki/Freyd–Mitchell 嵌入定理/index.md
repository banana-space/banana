---
title: Freyd–Mitchell 嵌入定理
aliases: [Mitchell 嵌入定理, Freyd-Mitchell 嵌入定理]
categories: [同调代数]
---

**Freyd–Mitchell 嵌入定理**是说，
每个小 [[Abel 范畴]]都是某个[[环]]上的[[模]]范畴的[[满子范畴]]，
使得含入函子正合。

这一结论常常可以简化关于 Abel 范畴的结论的证明，
因为可以假设其对象都是某个环上的模，从而可以谈论这些模的元素等概念。

## 定理和证明

::: theorem [Freyd–Mitchell 嵌入定理]
设 $\mathcal{C}$ 是[[小范畴|小]] [[Abel 范畴]]。
则存在[[环]] $R$（不一定[[交换环|交换]]），
使得有一个[[全忠实函子|全忠实]]、[[正合函子|正合]][[函子]]
\[
\mathcal{C} \to R\text{-}\mathsf{Mod},
\]
其中 $R\text{-}\mathsf{Mod}$
是 $R$ 上所有[[模|左模]]构成的 Abel 范畴。
:::

::: proof
由以下引理（之对偶），只需证明每个小 Abel 范畴都能全忠实、
正合地嵌入一个[[完备]]且有[[内射]][[余生成元]]的范畴。
以下我们要将其嵌入一个 [[Grothendieck Abel 范畴]]，
然后用 Grothendieck Abel 范畴的性质推出结论。
为此使用[[层]]论。定义
$$
\operatorname{Cov}(\mathcal{C})=\{\{V\twoheadrightarrow U\}\}_{U\in\mathcal{C}},
$$
即令单个满射为覆盖，容易发现 $(\mathcal{C},
  \operatorname{Cov}(\mathcal{C}))$ 是[[景]]。
由 $\operatorname{Hom}_\mathcal{C}(-,c)\colon
  \mathcal{C}^\mathrm{op}\to\mathsf{Ab}$ 左正合，
立得可表预层 $h_c$ 是该景的[[层]]。因而 [[Yoneda 引理]]给出全忠实嵌入
$h\colon\mathcal{C}\to\mathsf{Sh}(\mathcal{C})$。
$h$ 显然左正合，只需证它保持满射。考虑满射 $c\twoheadrightarrow d$，
要证 $h_c\to h_d$ 是层满射，也就是对任意 $U\in\mathcal{C}$，
$f\in h_d(U)$，证明存在 $V\twoheadrightarrow U$，$f$
拉回到 $V$ 之后来自 $h_c(V)\to h_d(V)$。
事实上取 $V=c\times_dU$ 即足，因为 $f$ 拉回到 $V$
之后就是自然映射 $V\to d$，由 $V$ 的构造这来自 $V\to c$。
这样由 Abel 群[[层]]范畴都是 Grothendieck Abel 范畴即得结论。
:::

::: lemma
设小范畴 $\mathcal{C}$ 是[[余完备]]且有[[投射]][[生成元]]的 Abel 范畴
$\mathcal{A}$ 的满 Abel 子范畴。则 $\mathcal{C}$
可全忠实、正合地嵌入模范畴。
:::

::: proof
取 $\mathcal{A}$ 的投射生成元 $Q$，并令
$P=\bigoplus_{c\in\mathcal{C}}Q^{\oplus
  {\operatorname{Hom}_\mathcal{A}(Q,c)}}$，则 $P$
也是投射生成元，且有满射 $P\twoheadrightarrow
  \bigoplus_{c\in\mathcal{C}}c$。令 $R=
  \operatorname{End}_\mathcal{A}(P)$，则对任意 $a\in\mathcal{A}$，$R$ 通过复合右作用在
$\operatorname{Hom}_\mathcal{A}(P,a)$ 上。我们来证明正合函子
$H=\operatorname{Hom}_\mathcal{A}(P,-)$ 是
$\mathcal{C}$ 到右 $R$ 模范畴的全忠实函子。

$P$ 的构造自动对每个 $c\in\mathcal{C}$
给出了满射 $\gamma\colon P\twoheadrightarrow c$。所以对于
$0\ne f\colon c\to d$，有 $0\ne (Hf)(\gamma)=f\circ\gamma\in
  \operatorname{Hom}_\mathcal{A}(P,d)$，所以 $H$ 忠实。
为证 $H$ 满，需要对 $\varphi\colon Hc\to Hd$ 找到
$f\colon c\to d$ 使得 $Hf=\varphi$。为此仍考虑以上满射
$\gamma\in Hc$，我们想证明 $\varphi(\gamma)\in Hd$
是某个 $f\circ\gamma$，也就是 $\varphi(\gamma)\colon
  P\to d$ 穿过 $\gamma\colon P\twoheadrightarrow c$。记
$I=\operatorname{Hom}_\mathcal{A}(P,\ker(\gamma))
  \subseteq R$，则 $I$ 是 $R$ 的右理想，且 $\gamma I=0$。
因 $\varphi$ 是右模同态，所以 $\varphi(\gamma)I=0$。
也就是说，$P$ 到 $\ker(\gamma)\hookrightarrow P$
的每个映射在复合 $\varphi(\gamma)$ 之后都得 $0$。
由于 $P$ 是生成元，这就推出 $\ker(\gamma)\hookrightarrow P$
本身复合 $\varphi(\gamma)$ 之后得 $0$，即 $\varphi(\gamma)$
穿过 $\gamma$。
:::

同样的构造给出下面的定理。

::: theorem
设 $\mathcal{A}$ 是 Abel 范畴。则下列等价：

- 存在环 $R$ 及[[范畴等价]]
  $\mathcal{A} \simeq R\text{-}\mathsf{Mod}$。

- $\mathcal{A}$ 有无穷[[直和]]，
  且有[[紧对象|紧]][[投射]][[生成元]]。

:::

::: proof
上面推下面是显然的，因为 $R\text{-}\mathsf{Mod}$ 当然有无穷直和，
而 $R$ 是其紧投射生成元。下证另一个方向，即证满足下面一个条件的
$\mathcal{A}$ 等价于模范畴。和上面一样，这里要用右模。
由于 $\mathsf{Mod}\text{-}R\simeq
  R^\mathrm{op}\text{-}\mathsf{Mod}$，这无伤大雅。

取紧投射生成元 $P$ 并令
$R=\operatorname{End}_\mathcal{A}(P)$，
于是 $H=\operatorname{Hom}_\mathcal{A}(P,-)$
是 $\mathcal{A}$ 到右 $R$ 模范畴的正合函子。
要证它是范畴等价。由于 $P$ 紧，$H$ 保持[[滤余极限]]。
所以因为 $H$ 已经正合，便得到它保持任意余极限。

先证 $H$ 全忠实，即证对任意 $a,b\in\mathcal{A}$，
$$
\operatorname{Hom}_\mathcal{A}(a,b)=
\operatorname{Hom}_R(Ha,Hb).
$$
由于 $\operatorname{End}_\mathcal{A}(P)=R=
  \operatorname{End}_{\mathsf{Mod}\text{-}R}(R)$，当 $a=b=P$ 时等号成立。
由于 $P$ 紧投射，$R$ 作为右 $R$ 模亦紧投射，
故照抄上一段中的观察即可发现，当 $a=P$ 时，
等号两边作为 $b$ 的函子与所有余极限交换。由于 $P$
生成 $\mathcal{A}$，$\mathcal{A}$ 中所有对象都是 $P$
的直和之间映射的余核，由此即得对 $a=P$ 以及任意
$b\in\mathcal{A}$ 都有上面等号成立。
再用一遍此事，由于 $\operatorname{Hom}$ 把第一个分量的余极限变成极限，
立得对任意 $a,b\in\mathcal{A}$ 都有上面等号成立。

再证 $H$ 本质满。这只需注意到右 $R$ 模 $M$ 都是 $R$
的直和之间映射的余核，而 $H$ 全忠实又保持余极限，从而对应的
$P$ 的直和之间映射的余核在 $H$ 下的像便同构于 $M$。
这样就得到 $H$ 是范畴等价。
:::
