---
title: Zorn 引理
categories: [序论]
navboxes: [集合论, 序论]
---

**Zorn 引理**是说，
如果一个[[偏序集]]的每个[[全序集|全序]][[子集]]都有上界，
那么这个偏序集就有[[极大元]]。

Zorn 引理常常用来说明极大对象的存在性。
例如，[[向量空间]]的[[基]]是极大的[[线性无关]]子集，
Zorn 引理可以说明每个向量空间都有基。
再例如，Zorn 引理可以用来证明 [[Krull 定理]]：
一个[[环]]的任何真[[理想]]都包含于一个[[极大理想]]。

在 [[ZF 集合论]]中，Zorn 引理与[[选择公理]]等价。
因此，在主流数学所使用的 [[ZFC 集合论]]中，
Zorn 引理是真命题。

在[[构造主义]]数学中，
选择公理蕴涵 Zorn 引理，
而 Zorn 引理需要加上[[排中律]]才能推出选择公理。

## 叙述与证明

::: definition [链、上界、极大元] {@def-chain}
设 $(X, {\leq})$ 是[[偏序集]]。

- $X$ 中的**链**是指子集 $Y \subset X$，
  使得 $(Y, {\leq})$ 是[[全序集]]。

- 子集 $Y \subset X$ 的**上界**是指元素 $x \in X$，
  使得对任意 $y \in Y$，都有 $y \leq x$。

- $X$ 的**极大元**是指元素 $x \in X$，
  使得如果 $y \in X$ 且 $x \leq y$，那么 $y = x$。

:::

::: definition [Zorn 引理] {@def-zorn}
**Zorn 引理**是指下面的命题：

- 设 $X$ 是[[偏序集]]。
  假设 $X$ 的每个链（@def-chain）
  都有[[上界]]（@def-chain）。
  则 $X$ 有[[极大元]]（@def-chain）。

:::

::: theorem
假设[[选择公理]]成立。则 Zorn 引理（@def-zorn）成立。
:::

::: proof
因为选择公理成立，所以[[良序定理]]成立（证明见该条目）。
因此，在 $X$ 上存在一个[[良序]]
\[
X = \{ x_\xi \mid \xi < \alpha \},
\]
其中 $\alpha$ 是某个[[序数]]。
我们用[[超限归纳法]]，归纳定义序列 $\{ A_\xi \} _{\xi \leq \alpha}$ 如下：
\[
\begin{aligned}
  A_0
  & = \varnothing, \\
  A_{\xi + 1}
  & = \begin{cases}
    A_\xi \cup \{ x_{\xi} \}, &
    \text{\small 若 }
    A_\xi \cup \{ x_{\xi} \}
    \text{\small\ 是链}, \\
    A_\xi, &
    \text{\small 若不然},
  \end{cases} \\
  A_{\lambda}
  & \textstyle = \bigcup_{\xi < \lambda} A_\xi, \quad
  \text{\small 若 } \lambda \text{\small\ 是极限序数}.
\end{aligned}
\]
则 $A_{\alpha}$ 是 $X$ 中的一个极大的链。
因此，它的上界是 $X$ 的极大元。
:::

::: theorem
假设 Zorn 引理（@def-zorn）成立。
则[[选择公理]]成立：

- 给定一族非空集合 $\{ X_i \mid i \in I \}$，
  存在一个映射 $f \colon I \to \bigcup_{i \in I} X_i$，
  使得对任意 $i \in I$，有 $f (i) \in X_i$。

:::

::: proof
记 $X$ 是所有二元组 $(J, f)$ 构成的偏序集，
其中 $J \subset I$，
而 $f \colon J \to \bigcup_{i \in I} X_i$ 是一个映射，
使得对任意 $i \in J$，有 $f (i) \in X_i$。
定义 $(J, f) \leq (J', f')$ 当且仅当
$J \subset J'$ 且 $f = f'|_J$。
则 $X$ 的每个链都有上界。

由 Zorn 引理，
$X$ 有一个极大元 $(J, f)$。
如果存在 $i_0 \in I \setminus J$，
那么令 $J' = J \cup \{ i_0 \}$，
并令 $f' \colon J' \to \bigcup_{i \in I} X_i$，
使得 $f'|_J = f$，并且 $f' (i_0) \in X_{i_0}$。
则 $(J, f) \leq (J', f')$，这与 $(J, f)$ 的极大性矛盾。
由反证法（这使用了[[排中律]]），知 $J = I$，从而 $f$ 就是我们要的映射。
:::

## 推论

- [[基存在定理]]
- [[Krull 定理]]
- [[Tikhonov 定理]]
- [[Hahn–Banach 定理]]
- [[代数闭包]]的存在性

```terms
Zorn 引理:
  en: Zorn's lemma
  de: Lemma von Zorn
  fr: lemme de Zorn
```
