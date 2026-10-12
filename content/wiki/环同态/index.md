---
title: 环同态
categories: [一般环论]
navboxes: [非交换代数]
---

**环同态**即[[环]]之间的[[同态]]。

## 定义

::: definition
环 $R$ 到环 $S$ 的**环同态**指的是保持加法、乘法、幺元的映射
$\varphi\colon R\to S$，即其满足 $\varphi(1_R)=1_S$，
且对任意 $a,b\in R$，
$$
\varphi(a+b)=\varphi(a)+\varphi(b),
$$
$$
\varphi(ab)=\varphi(a)\varphi(b).
$$
:::

## 相关函子

给定环同态 $\varphi\colon R\to S$，则左 $R$-模范畴和左
$S$-模范畴之间通常有三个由 $\varphi$ 诱导的函子。
其中最平凡者是 $S\text{-}\mathsf{Mod}\to R\text{-}\mathsf{Mod}$
的**标量限制**，指的是将 $S$-模沿 $\varphi$ 视为 $R$-模，
即对 $S$-模 $N$，定义其 $R$-模结构为 $rn=\varphi(r)n$。
不难看出该函子保持[[极限 (范畴论)|极限]]、[[余极限]]。

标量限制函子有两边的[[伴随函子]]。其左伴随为[[张量积]]
$S\otimes_R-$，通常称为**标量延拓**；其右伴随为
$\operatorname{Hom}_R(S,-)$，通常称为**诱导模**。
这里对 $R$-模 $M$，$\operatorname{Hom}_R(S,M)$ 的 $S$-模结构定义为
$(sf)(t)=f(ts)$。此二函子通常不同，只在一些特殊情况同构。

::: proposition
设有 $R$-[[双模]]同态 $\operatorname{Tr}\colon S\to R$，
则可定义对 $R$-模 $M$ 自然的 $S$-模同态
$$
S\otimes_RM\to\operatorname{Hom}_R(S,M).
$$
$$
s\otimes m\mapsto(t\mapsto\operatorname{Tr}(ts)m)
$$
只要 $(s,t)\mapsto\operatorname{Tr}(ts)$
是 $S$ 作为 $R$-模的完美配对，即 $M=R$ 时该同态是同构，
那么对任意 $M$，该同态都是同构。此时标量延拓与诱导模二函子[[自然同构]]。
:::

::: example
对[[群]] $G$ 及其有限指数子群 $H$ 还有[[交换环]] $k$，
取 $R=k[H]$，$S=k[G]$ 为[[群环]]。定义
$\operatorname{Tr}\colon k[G]\to k[H]$
为把 $k[G]$ 中元素的 $H$ 以外分量全部舍去，则它满足以上条件。
从而在[[群表示论]]中，从有限指数子群往大群作标量延拓和诱导表示两操作，
其效果是一样的。
:::

::: example
取 $R$ 为交换环，设 $S$ 作为 $R$-模[[有限生成模|有限]][[投射模|投射]]。
定义 $\operatorname{Tr}\colon S\to R$ 为把 $s\in S$
映射到“左乘 $s$”作为 $R$-模同态的[[迹]]。它通常未必是同构，
是同构时就有标量延拓与诱导模一致。满足这一点的交换 $R$-代数
$S$ 称为[[有限同态|有限]][[平展态射|平展]]。
:::

## 相对观点

[[Grothendieck]] 提出，相比于研究单个的环、[[代数簇]]（或[[概形]]），
我们更应该研究环同态与代数簇之间的[[态射]]。这一观点影响深远，
从根本上改变了[[交换代数]]、[[代数几何]]的研究方式。
几何地看，概形态射 $X\to Y$ 可认为是被概形 $Y$ 参数化的一个概形族，
$X$ 是该族的全空间。

```terms
环同态:
  en: ring homomorphism
  de: Ringhomomorphismus
  fr: homomorphisme d'anneaux
  grc: ὁμομορφισμός δακτυλίων
  la: homomorphismus anellorum
```
