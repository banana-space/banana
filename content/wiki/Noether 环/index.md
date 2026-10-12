---
title: Noether 环
aliases: [诺特环]
categories: [一般环论, 交换代数]
navboxes: [交换代数]
---

**Noether 环**是具有一定有限性质的环，
满足任意理想族都有极大元（@def-noe-ring）。

## 定义

::: definition {@def-noe-ring}
称一个[[环]]为

- **左 Noether 环**，
  意思是其任一族左[[理想]]在包含偏序下都有[[极大元]]。

- **右 Noether 环**，
  意思是其任一族右理想在包含偏序下都有极大元。

- **Noether 环**，
  意思是其既是左 Noether 环也是右 Noether 环。

显然对于交换环，这些概念都是一样的。
:::

::: remark [理想链定义]
左 Noether 的一个等价定义是左理想升链都终止，即对任意左理想升链
\[
I_1 \subset I_2 \subset \cdots,
\]
都存在 $n$ 使得 $I_n=I_{n+1}=\cdots$。

左 Noether 显然推出升链终止，因为上面的升链必须终止于理想族
$\{I_n\}_{n\in\mathbb{Z}_+}$ 的极大元。反过来如不左 Noether，
则存在一族左理想没有极大元，便可归纳取出严格上升的左理想链。

对右 Noether 与 Noether 亦有完全一样的事情。
:::

::: remark [有限生成定义]
左 Noether 的另一等价定义是每个左理想都有限生成。

如左 Noether，则对任一左理想 $I$，考虑左理想族
$$
\{J\subseteq I\mid J\,有限生成\}.
$$
其中有极大元。不难发现此极大元必须为 $I$，故 $I$ 有限生成。
反过来如不左 Noether，则存在严格上升的左理想链
\[
I_1 \subsetneqq I_2 \subsetneqq \cdots,
\]
取 $a_n\in I_{n+1}\setminus I_n$，则易知这一列 $a_n$
生成的左理想不可能有限生成。
:::

## 性质

### 一般性质

为简明起见，以下仅对左 Noether 环陈述性质。右边的情况完全一样。

::: proposition
左 Noether 环的[[商环]]左 Noether。
:::

::: proof
这是因为[[同构定理]]，$A/I$ 的左理想与 $A$ 中包含 $I$
的左理想一一对应。
:::

::: proposition
一个环左 Noether，等价于其上所有[[有限生成左模]]为左
[[Noether 模]]，即等价于其上有限生成左模的子模也有限生成。
:::

### 交换代数性质

本小节中的环都是交换环。

::: proposition
Noether环的[[局部化]]是Noether环。
:::

::: proof
设$A$为Noether环，$S$为$A$的任一乘性子集，要证
$S^{-1}A$为 Noether 环，只需证它的任意理想升链终止。
对任意 $S^{-1}A$ 的理想升链
\[
J_1 \subset J_2 \subset \cdots ,
\]
\[
J_1 \cap A \subset J_2 \cap A \subset \cdots
\]
是 $A$ 的理想升链，它终止。
注意到对任意 $S^{-1}A$ 的理想 $J$，$S^{-1}(J \cap A) = J$，
因此上述 $S^{-1}A$ 的理想升链也终止。
:::

以下定理是基本的，证明见主条目
[[Hilbert 基定理]]。

::: theorem [Hilbert 基定理]
对 Noether 环 $A$，
其上[[多项式环]] $A[X]$ 也 Noether。
:::

由此，Noether 环上的有限生成代数都 Noether。

此外还有个奇妙刻画。

::: proposition
环 $A$ 是 Noether 环，当且仅当其每个[[素理想]]都有限生成。
:::

::: proof
用反证法，设 $A$ 不 Noether，则它有不有限生成的理想。
先用 [[Zorn 引理]]证明其中有极大者。
为此只需证每一链不有限生成的理想 $\{I_\lambda\}_{\lambda\in\Lambda}$
之并 $I$ 仍不有限生成。如 $I$ 有限生成，取其生成元
$i_1,\ldots,i_n$。则存在 $\lambda\in\Lambda$，
$i_1,\ldots,i_n\in I_\lambda$。这样便有 $I=I_\lambda$，
与 $I_\lambda$ 不有限生成矛盾！

所以不有限生成的理想中有极大元，将其取出，设为 $I$。
由条件它不是素理想，故存在 $a,b\in A$，$ab\in I$
但 $a,b\notin I$。考虑理想
$$
J=(I:a)=\{x\in A\mid ax\in I\},
$$
则 $I\subseteq J$。由 $b\in J$，$b\notin I$，
有 $I\subsetneqq J$。于是 $J$ 有限生成，设其为
$(j_1,\ldots,j_m)$。另外 $I+(a)\supsetneqq I$
也有限生成，设其为 $(i_1+c_1a,\ldots,i_n+c_na)$，
$i_1,\ldots,i_n\in I$，$c_1,\ldots,c_n\in A$。
由此不难发现
$$
I=(i_1,\ldots,i_n,j_1a,\ldots,j_ma),
$$
为有限生成，矛盾。
:::

## 例子

- [[域]]（一般地，[[除环]]）是 Noether 环。

- 域上[[有限型]]的环是 Noether 环。

- 对 [[Lie 代数]] $\mathfrak{g}$，
  其[[泛包络代数]] $U(\mathfrak{g})$ 是 Noether 环。

- 任取域 $k$。其上无穷多个变元的多项式环
  $k[X_1,X_2,X_3,\ldots]$ 不是 Noether 环，因为有理想升链
  $$
  (X_1)\subsetneqq(X_1,X_2)\subsetneqq(X_1,X_2,X_3)\subsetneqq\cdots
  $$

- Noether 环的[[子环]]未必 Noether。任取一不 Noether
  的[[整环]]，如上例；它总是它的[[分式域]]的子环，
  域总是 Noether 环。

```terms
Noether 环:
  en: Noetherian ring
  de: noetherscher Ring
  fr: anneau noethérien
```
