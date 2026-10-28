---
title: '伴随 $(\infty,1)$-函子'
navboxes: [高阶范畴论]
---

<problems>
- “性质”一节中的同构 $\mathsf{Fun}^L(\mathcal{C},\mathcal{D})\simeq \mathsf{Fun}^R(\mathcal{C},\mathcal{D})$ 似乎应为 $\mathsf{Fun}^L(\mathcal{C},\mathcal{D})\simeq \mathsf{Fun}^R(\mathcal{D},\mathcal{C})^{\operatorname{op}}$。
</problems>

**伴随 $(\infty,1)$-函子**是[[伴随函子]]这一概念在 [[$(\infty,1)$-范畴]]中的推广。

## 定义

::: definition
令 $F \colon \mathcal{C}\to\mathcal{D}$ 为 $(\infty,1)$-范畴之间函子，则

1. 对于 $y \in \mathcal{D}$，
   称 $\mathcal{C}$ 中对象 $x$ **在 $F$ 下为 $y$ 的右伴随对象**是指
   存在函子范畴 $\mathsf{Fun}(\mathcal{C}^{\operatorname{op}},\mathsf{Ani})$ 中的[[同构]]
   \[
   \mathcal{C}(-,x)\simeq \mathcal{D}(F(-),y).
   \]

2. 称函子 $G \colon \mathcal{D}\to\mathcal{C}$ 为 $F$ 的右伴随是指
   存在函子范畴 $\mathsf{Fun}(\mathcal{C}^{\operatorname{op}}\times \mathcal{D},\mathsf{Ani})$
   中的同构
   \[
   \mathcal{C}(-,G(-))\simeq \mathcal{D}(F(-),-).
   \]
   此时记为 $F \dashv G$。
   此时也称 $F$ 与 $G$ 构成一对**伴随 $(\infty,1)$-函子**。

:::

::: definition
令 $F \dashv G$ 为伴随 $(\infty,1)$-函子，则

- [[自然变换]]的复合
  $\mathcal{C}(-,-) \Rightarrow \mathcal{D}(F(-),F(-))\simeq \mathcal{C}(-,GF(-))$
  给出自然变换 $y \Rightarrow y\circ GF$，
  此处 $y \colon \mathcal{C}\to\mathsf{Fun}(\mathcal{C}^{\operatorname{op}},\mathsf{Ani})$
  为 [[Yoneda 嵌入]]。
  而由 Yoneda 嵌入的全忠实性，
  可知这给出自然变换 $u \colon \operatorname{id}_{\mathcal{C}}\Rightarrow GF$，
  称为**单位**。

- 对偶地，可以定义**余单位** $c \colon FG \Rightarrow \operatorname{id}_{\mathcal{D}}$。

:::

::: definition
令 $\mathcal{C}$ 以及 $\mathcal{D}$ 均为 $(\infty,1)$-范畴，
考虑函子范畴 $\mathsf{Fun}(\mathcal{C},\mathcal{D})$，
记 $\mathsf{Fun}^L(\mathcal{C},\mathcal{D})$ 为 $\mathsf{Fun}(\mathcal{C},\mathcal{D})$ 中
作为左伴随的 $F \colon \mathcal{C} \to \mathcal{D}$ 所构成的全子范畴。
而 $\mathsf{Fun}^R(\mathcal{C},\mathcal{D})$ 为 $\mathsf{Fun}(\mathcal{C},\mathcal{D})$ 中
作为右伴随的函子所构成的全子范畴。
:::

## 性质

::: lemma [伴随可以逐点构造]
函子 $F \colon \mathcal{C}\to\mathcal{D}$ 有右伴随当且仅当
对于任意 $d \in \mathcal{D}$ 都存在其右伴随对象 $c\in \mathcal{C}$。
:::

::: proof
“仅当”的方向是显然的，接下来说明“当”的方向。
考虑函子
$\mathcal{D}(F(-),-)\colon \mathcal{C}^{\operatorname{op}}\times \mathcal{D}\to\mathsf{Ani}$。
根据指数律可以将其转为函子
$\overline{G}\colon \mathcal{D}\to\mathsf{Fun}(\mathcal{C}^{\operatorname{op}},\mathsf{Ani})$。
由于对于任意 $d$，都存在其右伴随对象 $c$，
因此 $\overline{G}(d) \simeq \mathcal{C}(-,c) = y(c)$，
此处 $y\colon \mathcal{C}\to\mathsf{Fun}(\mathcal{C}^{\operatorname{op}},\mathsf{Ani})$
为 Yoneda 嵌入，
因此 $\overline{G}$ 穿过 Yoneda 嵌入的本质像。
而 Yoneda 嵌入全忠实，考虑其本质像所构成的子范畴即为范畴等价，
从而复合上在其本质像上的逆给出函子 $G\colon \mathcal{D}\to\mathcal{C}$，
不难发现这就是所需的右伴随。
:::

::: lemma [三角等式]
令 $F \dashv G$ 为 $(\infty,1)$-范畴之间的伴随函子。
则有交换图表
\[
\begin{tikzcd}
  F \ar[r,Rightarrow,"Fu"]\ar[dr,Rightarrow,"i_F"'] &FGF\ar[d,Rightarrow,"cF"]\\
  & F
\end{tikzcd}\,\text{以及}\,\begin{tikzcd}
   G \ar[r,Rightarrow,"uG"]\ar[dr,Rightarrow,"i_G"'] &GFG\ar[d,Rightarrow,"Gc"]\\
  & G
\end{tikzcd}
\]
此处 $i_F$ 和 $i_G$ 为逐点的恒等态射。
反过来，若上述图表交换，则有 $F \dashv G$。
:::

::: proof
与 $1$-范畴的证明是一致的。
:::

::: proposition
令 $F \colon \mathcal{C}\to\mathcal{D}$，
$G \colon \mathcal{D}\to\mathcal{C}$ 且
$F\dashv G$ 为伴随函子，
令 $\mathcal{I}$ 为任意 $(\infty,1)$-范畴，
则有以下伴随对
\[
\begin{tikzcd}
  \mathsf{Fun}(\mathcal{I},\mathcal{C})\ar[r,bend left, "F\circ -"]\ar[r,phantom,"\bot"]& \mathsf{Fun}(\mathcal{I},\mathcal{D})\ar[l,bend left,"G\circ -"]\\\,\\
  \mathsf{Fun}(\mathcal{C},\mathcal{I})\ar[r,bend left, "-\circ G"]\ar[r,phantom,"\bot"]& \mathsf{Fun}(\mathcal{D},\mathcal{I})\ar[l,bend left,"-\circ F"]
\end{tikzcd}
\]
:::

::: proof
与 $1$-范畴的证明是一致的。
:::

::: lemma
令 $F \colon \mathcal{C}\to\mathcal{D}$ 为 $(\infty,1)$-范畴之间的函子，
将其转化为 $\mathsf{Cat}_{\infty}$ 中的 $1$-态射 $\Delta[1] \to \mathsf{Cat}_{\infty}$。
根据[[直化定理]]可知其对应于[[推出纤维化]] $p\colon \mathcal{U} \to \Delta[1]$。
则以下条件等价：

1. $F$ 有右伴随 $G \colon \mathcal{D}\to\mathcal{C}$。

2. 推出纤维化 $p$ 同时为拉回纤维化。

更进一步，
此时 $G$ 即为直化
$\operatorname{St}^{\operatorname{Cart}}(p) \colon \Delta[1]^{\operatorname{op}} \to \mathsf{Cat}_{\infty}$。
:::

::: proposition
有典范同构 $\mathsf{Fun}^L(\mathcal{C},\mathcal{D})\simeq \mathsf{Fun}^R(\mathcal{C},\mathcal{D})$。
:::

::: proof
[@HTT, [Proposition 5.2.6.2](https://www.math.ias.edu/~lurie/papers/HTT.pdf#theorem.5.2.6.2)]
:::

::: proposition
左伴随保余极限而右伴随保极限。
:::

::: proof
[@Kerodon, [02KE](https://kerodon.net/tag/02KE)]。
:::

## 例子

- 考虑嵌入 $\mathsf{Ani}\subseteq \mathsf{Cat}_{\infty}$，
它既有左伴随又有右伴随，分别对应两种从 $(\infty,1)$-范畴中得到[[生象]]的方式。
其左伴随为 $|-| \colon \mathsf{Cat}_{\infty} \to \mathsf{Ani}$，
称为几何实现，具体构造为对于全体同构进行局部化。
其右伴随为 $(-)^{\simeq} \colon \mathsf{Cat}_{\infty} \to \mathsf{Ani}$，
具体构造为去掉不可逆的态射。

- $\operatorname{N}(\mathsf{Set}) \subset \mathsf{Ani}$ 也具有左伴随（即为[[道路连通分支]]）。

上述两个伴随汇成一图得到
\[
\begin{tikzcd}
  \operatorname{N}(\mathsf{Set}) \ar[r,phantom,"\subseteq"] & \mathsf{Ani}\ar[l,bend right = 50pt, dashed,"\pi_0"'] \ar[r,phantom,"\subseteq"]& \mathsf{Cat}_{\infty} \ar[l,bend right = 50pt, dashed,"|-|"']\ar[l,bend left= 50pt, dashed,"(-)^{\simeq}"]
\end{tikzcd}
\]

- 令 $\mathcal{I}$ 为任意 $(\infty,1)$-范畴，
考虑[[对角态射|对角函子]]
$\operatorname{const}\colon \mathcal{C}\to \mathsf{Fun}(\mathcal{I},\mathcal{C})$。
给定函子 $F \colon \mathcal{I}\to\mathcal{C}$，
则其关于 $\operatorname{const}$ 的左伴随对象若存在则称为 $F$ 的**余极限**。
其关于 $\operatorname{const}$ 的右伴随对象若存在则称为 $F$ 的**极限**。

- （指数律）令 $\mathcal{C}$ 为 $(\infty,1)$-范畴，
考虑 $(\infty,1)$-范畴间的函子
$-\times \mathcal{C}\colon \mathsf{Cat}_{\infty}\to \mathsf{Cat}_{\infty}$，
其有右伴随，记为 $\mathsf{Fun}(\mathcal{C},-)$，
它将 $\mathcal{D}$ 映为 $\mathsf{Fun}(\mathcal{C},\mathcal{D})$。

## $(\infty,1)$-伴随函子定理

::: theorem [伴随函子定理]
令 $F\colon \mathcal{C} \to \mathcal{D}$ 为[[可表现 $(\infty,1)$-范畴]]之间的函子，
则

1. $F$ 有右伴随当且仅当其保持小余极限。

2. $F$ 有左伴随当且仅当其[[可达范畴|可达]]且保持小极限。

:::

::: proof
[@HTT, [Corollary 5.5.2.9](https://www.math.ias.edu/~lurie/papers/HTT.pdf#theorem.5.5.2.9)]
:::

## 推荐阅读

- [同伦代数与同调代数](/books/同伦代数与同调代数/)

```bibliography
Kerodon:
  type: online
  site: Kerodon
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
```
