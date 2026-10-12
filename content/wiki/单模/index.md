---
title: 单模
categories: [模论]
---

**单模**是模论中（除平凡对象外）最简单的对象，
也称为**不可约模**，
在[[表示论]]中称为[[不可约表示]]，
即那些没有非平凡[[子模]]的非零[[模]]。

## 定义

::: definition
环 $A$ 上的（左、右、双）模 $M$ 称为**单模**，
如果它不是[[零模]]，且不含有非平凡的[[子模]]，
即其仅有的子模为[[零模]]和它本身。
:::

::: remark
在[[范畴论]]的语言中，上述定义转述为：
单模是模范畴中的单对象。
:::

## 性质

::: proposition [Schur]
如果环 $A$ 上两个单模 $M$，$N$ 之间有非零同态 $f$，
则 $f$ 为同构。
特别地，单模 $M$ 的[[自同态环]]为[[除环]]。
:::

::: proof
$f$ 的[[核 (代数)|核]]是 $M$ 的子模，
由 $f$ 的非零性不为 $M$ 本身，因此为 $0$，即 $f$ 为单射。
$f$ 的[[像]]是 $N$ 的子模，
由 $f$ 的非零性不为 $0$，因此为 $N$ 本身，即 $f$ 为满射。
因此 $f$ 为同构。
:::

::: proposition {@sim-max}
环 $A$ 上（左、右）单模
同构于环 $A$ 对其某个极大（左、右）理想的[[商模]]。
反之，
环 $A$ 对其某个极大（左、右）理想的[[商模]]是单模。
:::

::: proposition
单模是[[不可分解模]]。
:::

::: proposition
单模是[[半单模]]。
:::

## 例子

- [[整数]] $\mathbb{Z}$ 上的模 $\mathbb{Z} / p \mathbb{Z}$，
  其中 $p$ 为素数，是单模。

- 设$k$ 为域，则[[矩阵环]] $\mathrm{M}_n(k)$ 上的单模是线性空间 $k^n$，
  其中环的作用以矩阵乘法给出。

```terms
单模:
  en: simple module
  de: einfacher Modul
  fr: module simple
  grc: ἀπλοῦν πρότυπον
  la: modulus simplex
单:
  en: simple
  de: einfach
  fr: simple
  grc: ἀπλοῦς
  la: simplex
不可约:
  en: irreducible
  de: irreduzibel
  fr: irréductible
  la: irreductibilis
```
