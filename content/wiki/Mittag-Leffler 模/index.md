---
title: Mittag-Leffler 模
categories: [模论, 同调代数]
---

<problems>
- “性质”一节命题的第 3 条中 $j$ 没有引入；按通常的表述，这一条似乎应为“存在 $k\ge i$，使得对任意 $R$-右模 $K$ 都有 $\ker(K\otimes_RM_i\to K\otimes_RM)=\ker(K\otimes_RM_i\to K\otimes_RM_k)$”。
</problems>

**Mittag-Leffler 模**是一类特殊的[[模]]，
指其写成[[有限表现模]]的[[正向极限]]之后，
这些有限表现模[[可表函子|余表出]]的函子构成的[[反向系]]
[[Mittag-Leffler 系|Mittag-Leffler]]。

## 定义

::: definition {@def}
设 $R$ 是[[环]]，$M$ 是 $R$-左[[模]]。称 $M$
**Mittag-Leffler**，指如 $M=\operatornamewithlimits{colim}_{i\in I}M_i$，
其中 $I$ 是[[正向集]]，各 $M_i$ 是[[有限表现模|有限表现]]
$R$-左模，则对任意 $R$-左模 $N$，反向系
$(\operatorname{Hom}_R(M_i,N))_{i\in I^\mathrm{op}}$ 是 [[Mittag-Leffler 系]]。
:::

::: remark
由于每个模都能写成有限表现模的正向极限，且不同的写法都共尾，
由 [[Mittag-Leffler 系]]的相关性质即知 @def
不依赖于正向系 $(M_i)_{i\in I}$ 的选取。另见 @equiv-def。
:::

## 性质

::: proposition {@equiv-def}
设 $R$ 是[[环]]，$(M_i)_{i\in I}$ 是有限表现
$R$-左[[模]]的正向系，$M=\operatornamewithlimits{colim}_{i\in I}M_i$。
以下几条等价：

1. $M$ 是 Mittag-Leffler 模。

2. 对任意有限表现 $R$-左模 $P$ 以及映射
   $f\colon P\to M$，存在有限表现 $R$-左模 $Q$
   以及同态 $g\colon P\to Q$，使得对任意 $R$-右模
   $K$ 都有 $\ker(K\otimes_Rf)=\ker(K\otimes_Rg)$。

3. 对任意 $i\in I$，存在 $k\ge i$，使得对任意
   $R$-右模 $K$ 都有
   $\ker(K\otimes_RM_k\to K\otimes_RM)=
   \ker(K\otimes_RM_k\to K\otimes_RM_j)$。

4. {@factor-through} 对任意 $i\in I$，
   存在 $k\ge i$，使得对任意
   $j\ge i$，$M_i\to M_k$ 穿过 $M_i\to M_j$。

:::

::: theorem
投射模都 Mittag-Leffler。可数生成的[[平坦模|平坦]]
Mittag-Leffler 模投射。
:::

::: proof
设 $R$ 是环。显然 Mittag-Leffler 模的直和项仍是
Mittag-Leffler 模，故欲证投射模 Mittag-Leffler，
只需证自由模 Mittag-Leffler。考虑自由 $R$-左模
$M=R^{\oplus J}$。令 $I$ 为 $J$
的所有有限子集在包含偏序下构成的正向集，并取正向系
$(M_i)_{i\in I}$ 为 $M_i=R^{\oplus i}$，映射显然，
则 $M=\operatornamewithlimits{colim}_{i\in I}M_i$。
用 @equiv-def 的[条件 4](@factor-through) 即得 $M$
Mittag-Leffler；这里甚至可取 $k=i$，因为对任意 $j\ge i$，
$M_i\to M_j$ 都是直和含入，当然被 $\operatorname{id}_{M_i}$ 穿过。

反过来设 $M$ 是可数生成平坦 $R$-左模。则由平坦模的 Lazard 定理，
可写 $M=\operatornamewithlimits{colim}_{i\in I}M_i$，其中 $I$ 是可数正向集，各
$M_i$ 是有限生成自由 $R$-左模。为证 $M$ 投射，取 $R$-左模短正合列
$$
0\to A\to B\to C\to0
$$
来证明它作用 $\operatorname{Hom}_R(M,-)$ 之后仍然正合，也即证明
$$
0\to\lim_{i\in I^\mathrm{op}}\operatorname{Hom}_R(M_i,A)
\to\lim_{i\in I^\mathrm{op}}\operatorname{Hom}_R(M_i,B)
\to\lim_{i\in I^\mathrm{op}}\operatorname{Hom}_R(M_i,C)\to0
$$
正合。由于各 $M_i$ 自由，上列在取极限之前正合。
取极限总是左正合，故只需证 $\lim_{i\in I^\mathrm{op}}\operatorname{Hom}_R(M_i,B)
  \to\lim_{i\in I^\mathrm{op}}\operatorname{Hom}_R(M_i,C)$ 满射。
由 Mittag-Leffler 模的定义，
$(\operatorname{Hom}_R(M_i,A))_{i\in I^\mathrm{op}}$ 是 Mittag-Leffler 系，
而 $I$ 可数，故由 [[Mittag-Leffler 系]]的性质即得欲证。
:::

```terms
Mittag-Leffler 模:
  en: Mittag-Leffler module
```
