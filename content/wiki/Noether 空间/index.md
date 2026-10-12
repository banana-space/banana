---
title: Noether 空间
aliases: [Noether 拓扑空间]
categories: [一般拓扑]
---

如果一个[[拓扑空间]]中任何[[闭集|闭子集]]按真[[包含]]关系构成的降链都是有限的，
就说它是 **Noether 空间**。
等价地，Noether 性也可以表述为[[开集|开子集]]按真包含关系构成的升链都是有限的。

拓扑空间的 Noether 性可以视为一种强的[[紧空间|紧性]]：
实际上 Noether 性等价于所有子集均是紧集（@所有子集都紧）。

## 定义

::: definition [Noether 空间]
一个拓扑空间 $X$ 如果满足闭子集的降链条件，即对任何闭子集 $Z_i\subset X, i=0,1,\ldots$ 构成的
降链
\[
X\supsetneq Z_0\supsetneq Z_1\supsetneq Z_2\supsetneq \cdots
\]
必是有限长的，即存在 $n$ 使 $Z_n=\varnothing$，等价地，
对任何开子集 $U_i\subset X,i=0,1,\ldots$ 构成的
升链
\[
U_0\subsetneq U_1 \subsetneq \cdots
\]
也是有限长的，即存在 $n$ 使 $U_n=X$，那么就说 $X$ 是一个 **Noether 空间**。
:::

## 性质

::: proposition
一个拓扑空间 $X$ 是 Noether 的，当且仅当 $X$ 的任意开子集是紧集。
:::

::: proof
如果 $X$ 是 Noether 的，设 $A\subset X$ 是开子集，假设它不紧。取 $\{U_\alpha\}_{\alpha\in I}$
构成 $A$ 的无穷开覆盖，使其没有有限的子覆盖，作闭集 $Z_\alpha=U_\alpha^c$，
于是 $\bigcap_{\alpha\in I} Z_\alpha\subset A^c$。

我们构造闭子集的降链如下：任取 $Z_1'=Z_\alpha, \alpha\in I$，它是 $\{Z_\alpha\}$ 中一个集合的交集。
假设已经取到 $Z_i'$，为 $\{Z_\alpha\}$ 中 $i$ 个集合的交集，则 $Z_i'\nsubseteq A^c$，否则 $Z_i'^c$
是 $\{U_\alpha\}$ 中有限个开集的并而 $A\subset Z_i'^c$，与假设矛盾。
这时一定存在 $Z_\alpha\in \{Z_\alpha\}$，
使 $Z_i'\not\subset Z_\alpha$，否则 $Z_i'=\bigcap_{\alpha\in I} Z_\alpha\subset A^c$ 矛盾。这时，
$Z_i'\cap Z_\alpha$ 是 $Z_i'$ 的真子集。我们就取 $Z_{i+1}'=Z_i'\cap Z_\alpha$。由于 $I$ 是无穷集，
我们可以构造无穷长的闭子集的降链，这和 Noether 性矛盾。所以 $A$ 是紧集。

现在反过来，假设 $X$ 的任意开子集均紧。
设有无穷长的闭子集的降链 $Z_1\supsetneq Z_2\supsetneq \cdots$，
则开集 $Z_1^c, Z_2^c,\ldots$ 构成开集 $A=\bigcup_{i=1}^\infty Z_i^c$ 的开覆盖。
于是它存在有限子覆盖，即
$i_1<i_2<\cdots <i_n$，$A\subset \bigcup_{j=1}^n Z_{i_j}^c=Z_{i_n}^c$。于是对于 $i>i_n$，
$A=Z_{i_n}^c\subsetneq Z_i^c\subset A$，矛盾。所以 $X$ 是 Noether 的。
:::

::: proposition {@所有子集都紧}
一个拓扑空间 $X$ 是 Noether 的，当且仅当 $X$ 的任意子集是紧集。
:::

::: proof
我们只要证明所有开子集紧可以推出所有子集紧。现在设 $A\subset X$ 有开覆盖 $\{U_i\}_{i\in I}$，
那么 $\bigcup_{i\in I}U_i$ 也是开集而且 $\{U_i\}$ 也构成其开覆盖，因此存在有限子覆盖，
它自然也是 $A$ 的有限开覆盖。
:::

::: proposition
Noether 空间的任何子空间也是 Noether 的。
:::

::: proposition
Hausdorff 的 Noether 空间是带[[离散拓扑]]的有限空间。
:::

::: proposition
任何 Noether 空间都是它的一些[[不可约空间|不可约]]闭子集的并。
:::

```terms
Noether 空间:
  en: Noetherian space
  de: Noetherscher Raum
  fr: espace noethérien
```
