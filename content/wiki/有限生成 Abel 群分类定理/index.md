---
title: 有限生成 Abel 群分类定理
aliases: [有限 Abel 群分类定理]
categories: [群论]
---

<problems>
- 定理与推论的不变因子分解中，只要求 $d_i > 0$ 时分解似乎不唯一（可以添加任意多个 $\mathbb{Z} / 1 \mathbb{Z}$），条件似乎应为 $d_i > 1$。
</problems>

**有限生成 Abel 群分类定理**说明，
[[有限生成群|有限生成]] [[Abel 群]]一定能写成一些[[循环群]]的[[直和]]。

有限生成 Abel 群分类定理是[[主理想整环上有限生成模的结构定理]]对于
$\mathbb{Z}$-[[模]]的特例。

## 定理与证明

::: theorem [有限生成 Abel 群分类定理]
设 $A$ 是[[有限生成群|有限生成]] [[Abel 群]]。

- （**准素分解**）$A$ 能唯一地写成
  \[
  A \simeq \mathbb{Z}^f \oplus \bigoplus_{i = 1}^{n} \mathbb{Z} / q_i \mathbb{Z},
  \]
  其中 $f \geq 0$ 是整数，
  每个 $q_i$ 都是[[素数幂]]，
  这里的唯一性不计次序。

- （**不变因子分解**）$A$ 能唯一地写成
  \[
  A \simeq \mathbb{Z}^f \oplus \bigoplus_{i = 1}^{r} \mathbb{Z} / d_i \mathbb{Z},
  \]
  其中 $f \geq 0$ 是整数，$d_i > 0$，
  并且对每个 $i$ 有 $d_i \mid d_{i + 1}$。
  这些 $d_i$ 称为 $A$ 的**不变因子**。

:::

::: proof
这是[[主理想整环上有限生成模的结构定理]]对 $\mathbb{Z}$-模的特例。
:::

我们立即得到如下推论。

::: corollary [有限 Abel 群分类定理]
设 $A$ 是[[有限群|有限]] [[Abel 群]]。

- （**准素分解**）$A$ 能唯一地写成
  \[
  A \simeq \bigoplus_{i = 1}^{n} \mathbb{Z} / q_i \mathbb{Z},
  \]
  其中每个 $q_i$ 都是[[素数幂]]，
  这里的唯一性不计次序。

- （**不变因子分解**）$A$ 能唯一地写成
  \[
  A \simeq \bigoplus_{i = 1}^{r} \mathbb{Z} / d_i \mathbb{Z},
  \]
  其中 $d_i > 0$，
  并且对每个 $i$ 有 $d_i \mid d_{i + 1}$。

:::
