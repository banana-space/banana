---
title: '$\aleph$ 数'
aliases: [Aleph 数]
categories: [集合论]
---

**$\bm\aleph$ 数**是一列无限[[基数]]：
\[
\aleph_0, \aleph_1, \aleph_2, \dotsc,
\aleph_\alpha, \dotsc,
\]
其中 $\alpha$ 取遍所有[[序数]]。
如果假定[[选择公理]]，
那么这一列基数就是
将所有无限基数从小到大排列，
而得到的序列。

记号 [[ℵ|$\aleph$]]（aleph）
是希伯来文的第一个字母。

## 定义

::: definition [$\aleph$ 数]
我们使用[[超限归纳法]]，定义[[基数]]序列 $\{ \aleph_\alpha \}$ 如下：
\[
\begin{aligned}
  \aleph_0 & = |\mathbb{N}|, \\
  \aleph_{\alpha + 1} & = \aleph_\alpha^+, \\
  \aleph_{\lambda} & =
  \sup_{\alpha < \lambda} \aleph_{\alpha} \quad
  (\text{$\lambda$ 为极限序数}),
\end{aligned}
\]
其中

- 对[[集合]] $X$，以 $|X|$ 表示 $X$ 的[[势]]。

- 对基数 $\kappa$，
  以 $\kappa^+$ 表示严格大于 $\kappa$ 的最小基数。
  其存在性由[[良序定理]]得到。

这样定义的 $\aleph_\alpha$ 称为第 $\alpha$ 个 **$\bm\aleph$ 数**。
:::

::: definition [$\omega$ 数]
基数 $\aleph_\alpha$ 对应的最小[[序数]]记为 $\omega_\alpha$，
称为第 $\alpha$ 个 **$\bm\omega$ 数**。
:::

## 例子

- $\aleph_0$ 是最小的无限基数，
  [[势]]等于它的集合称为[[可数集]]。
  对应的序数 $\omega_0$ 通常记为 $\omega$，
  它是最小的无限序数，
  它作为[[良序集]]与[[自然数]]集 $\mathbb{N}$ 同构。

- $\aleph_1$ 是第二小的无限基数，
  也是最小的不可数基数。
  对应的序数 $\omega_1$ 是最小的不可数序数，
  它同构于所有至多可数的序数构成的良序集。

- [[连续统假设]]说的就是 $2^{\aleph_0}=\aleph_1$。
  这相容且独立于 [[ZFC 公理]]。由 [[Kőnig 定理]]以及[[力迫法]]可以说明，
  只要 $\aleph_\alpha$ 的[[共尾类]]大于 $\omega$，
  $2^{\aleph_0}=\aleph_\alpha$ 就与 ZFC 相容。

```terms
'$\aleph$ 数':
  en: aleph number
```
