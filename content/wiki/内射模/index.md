---
title: 内射模
categories: [同调代数, 模论]
---

**内射模**是[[模范畴]]中的[[内射对象]]，
即使得[[函子]] $\operatorname{Hom}_A (-, I)$
[[正合函子|正合]]的 $A$-模 $I$。

## 定义

::: definition [内射模]
对[[环]] $A$，
$A$-[[模]] $I$ 称为内射模，
如果[[函子]] $\operatorname{Hom}_A (-, I)$ [[正合函子|正合]]。
即对任意[[正合列]] $0 \to M' \to M \to M'' \to 0$，
有正合列
\[
0 \to \operatorname{Hom}_A (M'', I) \to
\operatorname{Hom}_A (M, I) \to
\operatorname{Hom}_A (M', I) \to 0.
\]
:::

::: remark
由于对任意 $A$-模 $M$，[[函子]] $\operatorname{Hom}_A(-, M)$
是左正合的，因此内射模定义等价于此函子把单射映至满射。
:::

## 性质

::: proposition [Baer 判别法]
以下二者等价：

- $I$ 是内射模。

- 对 $A$ 的任意[[理想]] $\mathfrak{a}$ 以及[[同态]]
  $f \colon \mathfrak{a} \to I$，
  存在[[同态]] $\tilde{f} \colon A \to I$
  在 $\mathfrak{a}$ 上限制为 $f$。

:::

::: proposition [足够内射对象]
对任意模 $M$，存在内射模 $I$ 与[[单射]] $M \to I$。
:::

上面两个命题的证明参见条目 [[Grothendieck Abel 范畴]]。

::: proposition [直积、直和]
内射模的直积内射。$A$ 是左 [[Noether 环]]$\iff$
内射左 $A$-模的直和内射。
:::

::: proof
前一句话是因为 $\operatorname{Hom}$ 和第二个分量的直积交换，
而满射的直积还是满射。后一句话$(\implies)$是因为 Baer 判别法：左 Noether
环的左理想都有限生成，有限生成理想到一个直和的映射总穿过其中有限个分量的直和，
而有限直和等于有限直积，然后用前一句话即可。
反之，设环 $A$ 上内射左 $A$-模的直和仍然内射。
设 $(L_n)_{n\in\mathbb Z_+}$ 是一个左理想升链，$L= \cup_{n\in\mathbb Z_+} L_n$。
对每个 $L_n$，存在内射模 $J_n$ 与单射的模同态 $\phi_n: A/L_n\to J_n$。
考虑 $\phi: L\to \oplus_{n\in\mathbb Z_+} J_n$，$x\mapsto (\phi_1(x+L_1),\phi_2(x+L_2),\cdots )$
（注意对于 $x\in L$ 确有 $(\phi_1(x+L_1),\phi_2(x+L_2),\cdots )$ 只有有限个分量不是 $0$）。
由假设 $\oplus_{n\in\mathbb Z_+} J_n$ 内射，
所以 $\phi$ 可以延拓成模同态 $\psi: A\to \oplus_{n\in\mathbb Z_+} J_n$。
假设 $n>N$ 时 $\psi(1)$ 第 $n$ 分量是 $0$，则对于 $x\in L$，
$\phi(x)=\psi(x)= x\psi(1)$ 的 $n>N$ 分量都是 $0$。
因为 $\phi_n$ 是单射，所以当 $n>N$ 时 $x\in L_n$，即升链 $(L_n)_{n\in\mathbb Z_+}$ 最终稳定。
:::

::: proposition [与投射模的关系]
如 $A$ 是[[域]] $k$ 上代数，
$M$ 是左 $A$-模且是有限维 $k$-向量空间，
则 $M$ 是投射左 $A$-模当且仅当 $\operatorname{Hom}_k(M, k)$
是内射右 $A$-模，反之亦然。
:::

::: proposition [与平坦模的关系]
对一般的环 $A$，左 $A$-模 $M$ 平坦当且仅当右 $A$-模
$\operatorname{Hom}_\mathbb{Z}(M,\mathbb{Q}/\mathbb{Z})$ 内射。
:::

::: proof
左 $A$-模 $M$ 平坦等价于对任意右 $A$-模单射 $N'\to N$
有 $N'\otimes_AM\to N\otimes_AM$ 单。由函子
$\operatorname{Hom}_\mathbb{Z}(-,\mathbb{Q}/\mathbb{Z})$
[[忠实函子|忠实]]、[[正合函子|正合]]，这等价于
$\operatorname{Hom}_\mathbb{Z}(N\otimes_AM,\mathbb{Q}/\mathbb{Z})\to
  \operatorname{Hom}_\mathbb{Z}(N'\otimes_AM,\mathbb{Q}/\mathbb{Z})$ 满，
亦即 $\operatorname{Hom}_A(N,\operatorname{Hom}_\mathbb{Z}(M,
  \mathbb{Q}/\mathbb{Z}))\to\operatorname{Hom}_A(N',
  \operatorname{Hom}_\mathbb{Z}(M,\mathbb{Q}/\mathbb{Z}))$ 满，即右 $A$-模
$\operatorname{Hom}_\mathbb{Z}(M,\mathbb{Q}/\mathbb{Z})$ 内射。
:::

::: proposition [与可除模的关系]
如 $A$ 是[[整环]]，其上内射模为[[可除模]]。
如 $A$ 是[[主理想整环]]，内射模与[[可除模]]二者等价。
:::

::: proof
这是 Baer 判别法的立即推论。
:::

## 例子

- $\mathbb{Q}/\mathbb{Z}$ 是 $\mathbb{Z}$ 上内射模。

```terms
内射模:
  en: injective module
  de: Injektiver Modul
  fr: module injectif
  grc: ἑνιετικὸν πρότυπον
  la: modulus injectivus
```
