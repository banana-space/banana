---
title: 几何实现（单纯对象）
categories: [同伦代数, 高阶范畴论]
navboxes: [高阶范畴论, 同伦代数]
---

<disambiguation>
关于其他含义，请参见[[几何实现]]。
</disambiguation>

**几何实现（单纯对象）** 是[[几何实现 (单纯集)]]在[[高阶范畴论]]中的一种推广方式
（[[实现–脉伴随]]中记载了另一种推广方式），
同时它也是[[自反余等子]]在高阶范畴论中的对应版本。

## 定义

::: definition [几何实现]
令 $\mathcal{C}$ 为 [[$(\infty,1)$-范畴]]，
$X_{\bullet}\colon \operatorname{N}(\mathbb{\Delta}^{\operatorname{op}})\to \mathcal{C}$
为[[单纯对象]]。
则称 $X\in \mathcal{C}$ 为 $X_{\bullet}$ 的**几何实现**是指 $X$ 为 $X_{\bullet}$ 的[[余极限]]。
将 $X_{\bullet}$ 的几何实现简记为 $|X_{\bullet}|$。
:::

此外有其变体：

::: definition (变体) [整体化]
令 $\mathcal{C}$ 为 $(\infty,1)$-范畴，
$X^{\bullet}\colon \operatorname{N}(\mathbb{\Delta})\to \mathcal{C}$ 为余单纯对象，
则称 $X\in \mathcal{C}$ 为 $X^{\bullet}$ 的**整体化**是指 $X$ 为 $X^{\bullet}$ 的[[极限]]。
将 $X^{\bullet}$ 的整体化记为 $\operatorname{Tot}(X)$。
:::

在实际使用中，
给定 $(\infty,1)$-范畴 $\mathcal{C}$ 中的单纯对象 $X_{\bullet}$，
其几何实现一般不视为 $\mathcal{C}$ 中的对象而视为[[仰范畴]] $\mathcal{C}_{X_{\bullet}/}$ 中的对象。
为明确说明这一点，需要使用增广单纯对象的语言进行描述。

::: definition
令 $\mathcal{C}$ 为 $(\infty,1)$-范畴且带有对象 $X$，
且 $\overline{X}_{\bullet}$ 为 $\mathcal{C}$ 上使得 $\overline{X}_{-1} = X$
且
$X_{\bullet} = \overline{X}_{\bullet}\mid_{\operatorname{N}(\mathbb{\Delta}^{\operatorname{op}})}$
的增广单纯对象。
称 $\overline{X}_{\bullet}$ 使得 $X$ 为 $X_{\bullet}$ 的几何实现，
是指其为 $\mathcal{C}$ 中的余极限图表。
:::

::: definition (变体)
令 $\mathcal{C}$ 为 $(\infty,1)$-范畴且带有对象 $X$，
且 $\overline{X}^{\bullet}$ 为 $\mathcal{C}$ 上使得 $\overline{X}^{-1} = X$
且 $X^{\bullet} = \overline{X}^{\bullet}\mid_{\operatorname{N}(\mathbb{\Delta})}$ 的余增广单纯对象。
称 $\overline{X}^{\bullet}$ 使得 $X$ 为 $X^{\bullet}$ 的整体化，
是指其为 $\mathcal{C}$ 中的极限图表。
:::

## 性质

::: proposition
令 $\mathcal{C}$ 为带有有限余积以及单纯对象的几何实现的 $(\infty,1)$-范畴，
则 $\mathcal{C}$ 有有限余极限。
:::

::: proof
[@HA, [Lemma 1.3.3.10](https://www.math.ias.edu/~lurie/papers/HA.pdf#theorem.1.3.3.9)]。
:::

::: proposition
令 $\mathcal{C}$ 为 $(\infty,1)$-范畴，
则 $\mathcal{C}$ 中对象 $X$ 为某个单纯对象 $X_{\bullet}$ 的几何实现当且仅当其为图表
\[
\begin{tikzcd}
  \operatorname{N}(\mathbb{\Delta}_{单}^{\operatorname{op}}) \ar[r,phantom,"\subseteq"]& \operatorname{N}(\mathbb{\Delta}^{\operatorname{op}}) \ar[r,"X_{\bullet}"] &\mathcal{C}.
\end{tikzcd}
\]
的余极限。
:::

::: proof
由[[单纯对象]]词条中
$\operatorname{N}(\mathbb{\Delta}_{单}) \subseteq \operatorname{N}(\mathbb{\Delta})$
为[[共尾函子|共始函子]]可知。
:::

::: proposition
令 $\mathcal{C}$ 为 $(\infty,1)$-范畴且令 $X$ 为其上[[预层]]。
则存在单纯对象
$Y_{\bullet} \colon \operatorname{N}(\mathbb{\Delta}^{\operatorname{op}}) \to \mathsf{PSh}(\mathcal{C})$，
满足以下条件：

1. $X \simeq |Y_{\bullet}|$。

2. 对于任意 $n \geq 0$，$Y_n \in \mathsf{PSh}(\mathcal{C})$
   同构于 $\mathcal{C}$ 中若干对象在
   [[Yoneda 嵌入]] $y \colon \mathcal{C}\hookrightarrow\mathsf{PSh}(\mathcal{C})$ 后的像的余积。

:::

::: proof
[@HTT, [Lemma 5.5.8.13](https://www.math.ias.edu/~lurie/papers/HTT.pdf#theorem.5.5.8.13)]
:::

### 与其它的几何实现的关联

::: proposition
令 $S$ 为单纯集，则其几何实现 $|S|$ 为以下图表
\[
\operatorname{N}(\mathbb{\Delta}^{\operatorname{op}})
\xrightarrow{S} \operatorname{N}(\mathsf{Set})
\subseteq \mathfrak{N}(\mathsf{Top})\simeq \mathsf{Ani}.
\]
的余极限。
:::

::: proof
[@Kerodon, [04QR](https://kerodon.net/tag/04QR)]
:::

::: remark (警告)
只有在将 $S$ 视为 $\mathfrak{N}(\mathsf{Top})$ 时可以这么看，
一般情况下不能将几何实现（单纯对象）与几何实现（单纯集）混为一谈，
比如说将 $S$ 视为 $\operatorname{N}(\mathsf{Set})$ 中的单纯对象时，
此时 $|S_{\bullet}|$ 为图表 $\mathbb{\Delta}^{\operatorname{op}}\to \mathsf{Set}$ 的余极限，
即为连通分支 $\pi_0(S)$。
:::

此外，
我们可以讨论单纯对象的几何实现
与 $\mathsf{Ani} \hookrightarrow \mathsf{Cat}_{\infty}$ 的左伴随
$|-| \colon \mathsf{Cat}_{\infty} \to \mathsf{Ani}$ 之间的关系。

这只需要利用 [[Rezk 脉]]
将 $(\infty,1)$-范畴 $\mathcal{C}$ 视为[[完备 Segal 空间|完备 Segal 生象]]
$\mathrm{N}^r(\mathcal{C})$。
而后对于 $\mathrm{N}^r(\mathcal{C})$ 进行单纯对象的几何实现即可得到 $|\mathcal{C}|$。

### 与自反余等子的关联

取单纯对象
$X_{\bullet}\colon \operatorname{N}(\mathbb{\Delta}^{\operatorname{op}})\to \mathcal{C}$，
不难发现其 $1$-[[骨架]]即为图表
\[
\begin{tikzcd}
  X_1 \ar[r,shift left = 3,"d_0"]\ar[r,shift right = 3,"d_1"']& X_0 \ar[l,"s_0"{description}]
\end{tikzcd}
\]
此时其余极限自然为自反余等子。

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
  year: 2016
  url: https://www.math.ias.edu/~lurie/papers/HA.pdf
```

```terms
整体化:
  en: totalization
```
