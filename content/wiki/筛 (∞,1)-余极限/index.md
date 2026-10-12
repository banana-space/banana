---
title: '筛 $(\infty,1)$-余极限'
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

**筛 $(\infty,1)$-余极限**是[[滤 $(\infty,1)$-余极限]]的推广，
粗略来说，它是滤 $(\infty,1)$-余极限在有限、离散时的情况。
其动机大致可以通过下例说明：
对于[[群]]范畴 $\mathsf{Grp}$，
其[[余极限]]一般难以研究，
我们知道群范畴中的[[余积]]是[[融合积]] $G \star H$。
但是即便 $G$ 和 $H$ 的结构相对简单，
$G \star H$ 仍然难以研究。
例如，$G = \mathbb{Z}/2\mathbb{Z}$ 而 $H = \mathbb{Z}/3\mathbb{Z}$ 时，
有 $\mathbb{Z}/2\mathbb{Z} \star \mathbb{Z}/3\mathbb{Z}$ 同构于[[模群]]
$\operatorname{PSL}(2,\mathbb{Z})$。
一般情况下，$G \star H$ 将远大于 $G$ 和 $H$ 作为[[集合]]的余积 $G \sqcup H$。
换句话说，[[遗忘函子]]这一右伴随 $U\colon \mathsf{Grp} \to \mathsf{Set}$ 并不保余积。
然而 $U$ 却保持一些别的余极限，比如对于一列群同态
\[
G_0 \to G_1 \to \cdots
\]
其余极限可以写为其对应集合的余极限配上合适的群结构。
此外遗忘函子还保持[[商群]]。

上述两类余极限都可以进行一般化：
一列群同态的余极限即为[[滤范畴|滤余极限]]，
而商群是[[自反余等子]]的例子。
换句话说，
遗忘函子 $U$ 保持滤过余极限以及自反余等子。
此外，这一事实可以被推广到一般的在集合上带有（有限余完备的）代数结构的范畴。
我们将滤余极限与自反余等子的共同推广称为筛余极限。
而在 $(\infty,1)$-范畴中，
自反余等子的高阶版本是[[几何实现 (单纯对象)]]。
因此可以给出筛 $(\infty,1)$-余极限的刻画。

## 定义

::: definition [筛 $(\infty,1)$-范畴]
称 [[$(\infty,1)$-范畴]] $K$ 为**筛 $(\infty,1)$-范畴**，
是指对于任意[[有限集]] $I$，
[[对角态射|对角函子]] $K \to K^I$ 都是[[$(\infty,1)$-共尾函子]]。
:::

不难发现其有以下变体：

::: remark [变体]
称 $(\infty,1)$-范畴 $K$ 为**余筛 $(\infty,1)$-范畴**，
是指对于任意有限集 $I$，
对角函子 $K \to K^I$ 都是共始函子。
因此，$K$ 为筛 $(\infty,1)$-范畴当且仅当其[[反范畴]]是余筛 $(\infty,1)$-范畴。
:::

::: definition [筛 $(\infty,1)$-余极限]
**筛 $(\infty,1)$-余极限**是以筛 $(\infty,1)$-范畴为图表的余极限。
:::

## 性质

::: proposition
筛 $(\infty,1)$-范畴均[[弱可缩]]。
:::

::: proof
只需取 $I = \varnothing$ 可知 $K \to \Delta[0]$ $(\infty,1)$-共尾。
从而根据$(\infty,1)$-共尾函子为[[弱同伦等价]]可知其弱可缩。
:::

::: proposition
滤过 $(\infty,1)$-范畴均为筛 $(\infty,1)$-范畴。
:::

::: proof
由滤过 $(\infty,1)$-范畴刻画可知对于任意有限单纯集 $I$，
对角函子 $K \to \mathsf{Fun}(I,K)$ 均 $(\infty,1)$-共尾。
因此取 $I$ 为离散单纯集即可。
:::

::: proposition
以下条件等价：

1. $(\infty,1)$-范畴 $K$ 是筛 $(\infty,1)$-范畴。

2. $K$ 非空且对角函子 $K \to K\times K$ 是 $(\infty,1)$-共尾函子。

:::

::: proof
[@Kerodon, [02QM](https://kerodon.net/tag/02QM)]
:::

结合 [[Quillen 定理 A]]立刻得到

::: corollary
令 $\mathcal{C}$ 为 $(\infty,1)$-范畴，
则 $\mathcal{C}$ 为筛 $(\infty,1)$-范畴当且仅当对于任意 $X,Y \in \mathcal{C}$，
都有 $\mathcal{C}_{/X}\times_{\mathcal{C}} \mathcal{C}_{/Y}$ 弱可缩。
:::

::: proposition
范畴等价保持筛 $(\infty,1)$-范畴。
:::

::: proof
[@Kerodon, [02QK](https://kerodon.net/tag/02QK)]。
:::

::: proposition
令 $F \colon \mathcal{C} \to \mathcal{D}$ 为 $(\infty,1)$-范畴间的函子，
且 $\mathcal{C}$ 是[[余完备]]范畴，
则 $F$ 保筛 $(\infty,1)$-余极限当且仅当其保持滤 $(\infty,1)$-余极限以及单纯对象的几何实现。
:::

::: proof
[@HTT, [Corollary 5.5.8.17](https://www.math.ias.edu/~lurie/papers/HTT.pdf#theorem.5.5.8.17)]
:::

::: proposition
令 $\mathcal{C}$ 为 $(\infty,1)$-范畴，
则其具有余极限当且仅当其具有筛余极限以及有限余积。
:::

::: proof
结合 [@HA, [Lemma 1.3.3.10](https://www.math.ias.edu/~lurie/papers/HA.pdf#theorem.1.3.3.9)]
以及[@HTT, [Corollary 4.2.3.11](https://www.math.ias.edu/~lurie/papers/HTT.pdf#theorem.4.2.3.11)]立刻得知。
:::

::: proposition
令 $K$ 为筛 $(\infty,1)$-范畴，
$\mathcal{C}$ 为带有有限积以及 $K$-余极限的 $(\infty,1)$-范畴，
且在 $\mathcal{C}$ 中乘积保持筛 $(\infty,1)$-余极限，
则余极限函子 $\operatorname{colim} \colon \mathsf{Fun}(K,\mathcal{C})\to \mathcal{C}$
与有限乘积交换。
:::

一般情况下要求上述 $\mathcal{C}$ 为 [[$(\infty,1)$-意象]]。

::: proof
[@HTT, [Lemma 5.5.8.11](https://www.math.ias.edu/~lurie/papers/HTT.pdf#theorem.5.5.8.11)]
:::

::: proposition
$\Omega^{\infty}\colon \mathsf{Sp}_{\geq 0}\to \mathsf{Ani}$ 与筛余极限交换。
:::

::: proof
[@HA, [Proposition 1.4.3.9](https://www.math.ias.edu/~lurie/papers/HA.pdf#theorem.1.4.3.9)]
:::

## 例子

- [[单纯集|单形范畴]]的脉 $\mathrm{N}(\mathbb{\Delta})$ 是余筛
  $(\infty,1)$-范畴（证明见[@Kerodon, [02QP](https://kerodon.net/tag/02QP)]），
  从而几何实现均为筛 $(\infty,1)$-余极限。

## 参考文献

```bibliography
Kerodon:
  type: book
  title: Kerodon
  author: Jacob Lurie
  year: 2018
  url: https://kerodon.net
HTT:
  type: book
  title: Higher Topos Theory
  author: Jacob Lurie
  year: 2009
  publisher: Princeton University Press
  url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
HA:
  type: book
  title: Higher Algebra
  author: Jacob Lurie
  year: 2017
  url: https://www.math.ias.edu/~lurie/papers/HA.pdf
```

```terms
'筛 $(\infty,1)$-范畴':
  en: 'sifted $(\infty,1)$-category'
'筛 $(\infty,1)$-余极限':
  en: 'sifted $(\infty,1)$-colimit'
```
