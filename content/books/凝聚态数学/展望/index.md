---
title: 展望
---

至此我们发展了解析几何中概形的对应物——解析空间，观察了其离散情形的实例。
有了这些，我们能做什么呢？起初我认为解析空间的底位象太大、难以操作，
在概形、刚性解析几何、复解析几何等各种具体情形，都要用具体的“底空间”来做几何，
来发展六函子；于是本节原名“离散进制空间、整体六函子”，
大致讲述 [@condensed] 第 9、10、11 讲的内容，以展示概形情形的具体发展。
但在用解析空间重述这些时，我看到了统一的希望。
我似乎能直接对解析空间定义“紧合”概念，以统一的方法做出六函子。
以下定义是一种尝试，
也参见 [Mathoverflow 相应讨论](https://mathoverflow.net/questions/402611/an-attempt-to-define-partial-properness-and-compactification-for-some-maps-betwe)。
注意此处的紧合和 [@diamond] 中一样，并没有有限型条件。

::: definition
称解析环同态 $\mathcal{A}\to\mathcal{B}$ **紧合**，指它稳态，且
$\mathcal{B}=\mathcal{A}\otimes_{\underline{\mathcal{A}}}\underline{\mathcal{B}}$。
这显然在基变换下保持。称解析空间映射 $f\colon X\to Y$ **部分紧合**，
指对仿射开集 $V\subseteq Y$，$f^{-1}(V)$ 能被在 $V$
上紧合的仿射开集所覆盖。如一映射部分紧合且拟紧拟分离，
则称其**紧合**。（也许应该要求分离性，但我不知道怎么定义分离。）
容易看出，对紧合的 $f$，$f_*\colon\mathsf{D}(X)\to\mathsf{D}(Y)$
与两边的 $\mathsf{CondAni}$-余幂结构交换，于是可以叫它 $f_!$
并合理地取右伴随 $f^!$。对部分紧合映射 $f\colon X\to Y$，其中
$Y$ 仿射，也许可以把 $f_!$ 定义为将 $f_*$ 从
$\bigcup_{U\subseteq X 仿射}{j_U}_*\mathsf{D}(U)$
在 $\mathsf{D}(X)$ 中生成的子范畴中左 Kan 延拓到 $\mathsf{D}(X)$。
至少在复解析几何的情形，可以验证这与 Clausen 在 [@copenhagen]
最后一讲中所定义的一致。
:::

第 @仿射六函子 节中有典范紧化，一般情况应当也有。
以下概念至少在概形、刚性解析几何、复解析几何这几种情况都是“正确的”：

::: definition
考虑稳态解析环同态 $\mathcal{A}\to\mathcal{B}$，
满足 $\underline{\mathcal{B}}\in\mathsf{D}(\mathcal{A})$
是核的 [@analytic, 13.10–14]。定义**相对紧化**
$\overline{\mathcal{B}}^{/\mathcal{A}}=\mathcal{A}\otimes_{\underline{\mathcal{A}}}\underline{\mathcal{B}}$。
不难验证自然映射 $\overline{\mathcal{B}}^{/\mathcal{A}}\to\mathcal{B}$ 是稳态局部化，
且稳态局部化的相对紧化仍是稳态局部化。于是便可整体化到满足核条件的解析空间映射，
对其定义相对紧化。

称解析空间映射 $f\colon X\to Y$ **可紧化**，指它局部上是解析环同态
$\mathcal{A}\to\mathcal{B}$ 满足 $\underline{\mathcal{B}}\in\mathsf{D}(\mathcal{A})$
是核模，并且稳态开含入 $j\colon X\to\overline{X}^{/Y}$ 满足
$j^*$ 有左伴随，记为 $j_!$。此时定义 $f_!=\bar{f}_!j_!$，
$f^!$ 为其右伴随，便得到全套六函子。
:::

这些术语，特别是“部分紧合”，实际来自 [@diamond]。
那里对完美胚空间范畴的 v 层之间映射定义了这些概念，
于是特别地，$\mathbb{Z}_p$ 上的解析进制空间之间映射就也有这些概念。

::: conjecture
对 $\mathbb{Z}_p$ 上的解析进制空间之间的分离映射 $f\colon X\to Y$，
其作为解析空间映射（部分）紧合，当且仅当其作为钻石之间的映射
（部分）紧合。
:::

这里说进制空间“解析”指的是其由 Tate Huber 对粘成。
要求分离是因为 [@diamond] 中的紧合要求分离。

关于拟凝聚层我目前也只能说到这里。该不该指望较统一的平展层理论，
我也不知道。起初我根本不敢想，但 [@diamond] 似乎令我感觉有点希望。

```terms
核:
  en: nuclear
部分紧合:
  en: partially proper
```
