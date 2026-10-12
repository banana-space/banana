---
title: 超越数
categories: [数系]
notices:
  - name: 问题
    items:
      - “例子”一节需要扩充。
      - “Liouville 定理”中的条件似乎还需要要求 $p/q\neq\alpha$，否则有理数 $\alpha$ 也满足这一条件。
---

**超越数**指不是[[代数数]]的[[复数]]。
换言之，如果一个数不是任何一个整系数[[代数方程]]的[[根]]，
它即是超越数。比较常见的超越数是 [[$\mathrm{e}$]] 以及 [[$\pi$]]。

## 定义

::: definition
称[[复数]] $x$ 是**超越数**，如果对任何[[整数]]
$a_n, a_{n-1}, \cdots, a_1, a_0$，其中 $a_n \neq 0$，
都有
\[
a_nx^n + a_{n-1}x^{n-1} + \cdots + a_1x + a_0 \neq 0.
\]
:::

## 性质

### Liouville 定理

::: theorem [Liouville 定理]
设 $\alpha$ 为[[实数]]。
如果对于所有的正实数 $c$ 和正整数 $d$，
都存在一个[[有理数]] $p/q$，使得
\[
\left|\alpha - \frac{p}{q}\right| \le \frac{c}{q^d},
\]
那么 $\alpha$ 为超越数。
:::

满足 Liouville 定理的数被称为 Liouville 数。
Liouville 数是第一类被证明为超越数的数。
然而，$\pi$ 和 $e$ 都不是 Liouville 数。

### Hilbert 第七问题

::: theorem [Gelfond–Schneider]
对于非零、非一的[[代数数]] $a$ 和[[无理数|无理]][[代数数]] $b$，
$a^b$ 一定为超越数。
:::

此问题由 Hilbert 在1900年提出，
称为 Hilbert 第七问题，属于[[Hilbert 的 23 个问题]]。
在 1934 年被 Gelfond 和 Schneider 解决了，
称为 [[Gelfond–Schneider 定理]]，
并且在 20 世纪 60 年代被 Alan Baker 拓广了。

## 例子

- [[$\mathrm{e}$]] 和 [[$\pi$]] 是超越数。

- $\sum_{n = 0}^\infty 1/10^{n!}$ 是超越数，
  由上述 Liouville 定理。

- $\mathrm{e}^\pi = (-1)^{-\mathrm{i}}$ 是超越数，
  由上述 Hilbert 第七问题。

```terms
超越数:
  en: transcendental number
  de: transzendente Zahl
  fr: nombre transcendant
  grc: ὑπερβατικὸς ἀριθμός
  la: numerus transcendens
```
