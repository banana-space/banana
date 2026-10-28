---
title: 'Lefschetz $(1, 1)$ 定理'
aliases: ['Lefschetz (1, 1) 定理']
categories: [复几何]
---

<problems>
- 引言中称这是 Hodge 猜想“唯一已证明的非平凡情况”，似乎不准确：由硬 Lefschetz 定理，$(n-1, n-1)$-类的情形也随之成立。
</problems>

在[[复几何]]中，
**[[Solomon Lefschetz|Lefschetz]] $\bm{(1, 1)}$ 定理**
说明，[[紧空间|紧]] [[Kähler 流形]]的任何整 [[Dolbeault 上同调|$(1, 1)$-类]]
都能写成某个[[全纯向量丛|全纯]][[线丛]]的第一[[陈类]]。
这一结论蕴涵 $(1, 1)$-类的 [[Hodge 猜想]]，
而这是该猜想唯一已证明的非平凡情况。

## 陈述与证明

::: theorem [Lefschetz $(1, 1)$ 定理]
设 $X$ 为[[紧空间|紧]] [[Kähler 流形]]。
考虑第一[[陈类]]给出的映射
\[
c_1 \colon \operatorname{Pic} (X) \to H^2 (X; \mathbb{Z}),
\]
其中 $\operatorname{Pic} (X)$
是 $X$ 的 [[Picard 群]]。
则该映射的像是
\[
H^2 (X; \mathbb{Z}) \cap H^{1, 1} (X; \mathbb{C}).
\]
确切地说，这里的交其实是指 $H^{1, 1} (X; \mathbb{C})$
在映射 $H^2 (X; \mathbb{Z}) \to H^2 (X; \mathbb{C})$ 下的[[原像]]。
:::

::: proof
由[[陈联络]]的存在性，
知全纯线丛的第一陈类是 $(1, 1)$-类。
只需再证明任何整 $(1, 1)$-类都能写成全纯线丛的陈类。

考虑[[指数正合列]]
\[
0 \to \mathbb{Z}
\xrightarrow{2 \pi \mathrm{i}} \mathcal{O}_X
\xrightarrow{\exp} \mathcal{O}_X^\times
\to 0,
\]
它诱导[[层上同调]]的[[长正合列]]
\[
\cdots
\to H^1 (X, \mathcal{O}_X^\times)
\xrightarrow{c_1} H^2 (X, \mathbb{Z})
\xrightarrow{i_*} H^2 (X, \mathcal{O}_X)
\to \cdots,
\]
其中 $H^1 (X, \mathcal{O}_X^\times) \simeq \operatorname{Pic} (X)$。
而由 [[Hodge 理论]]有
$H^2 (X, \mathcal{O}_X) \simeq H^{0,2} (X; \mathbb{C})$，
这一同构与映射 $i_*$ 相容。
这说明任何整 $(1, 1)$-类在 $i_*$ 下的像为零，从而是某个线丛的 $c_1$ 类。
:::

```terms
'Lefschetz $(1, 1)$ 定理':
  en: 'Lefschetz theorem on $(1, 1)$-classes'
```
