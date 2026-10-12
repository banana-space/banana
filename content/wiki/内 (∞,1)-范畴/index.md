---
title: '内 $(\infty, 1)$-范畴'
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

**内 $(\infty, 1)$-范畴**是[[内范畴]]向 [[$(\infty, 1)$-范畴]]的推广，
即 $(\infty, 1)$-范畴中的内范畴。

通过内 $(\infty, 1)$-范畴，可以写下 [[$(\infty, n)$-范畴]]的一种严格定义，
即通过 [[$n$ 重完备 Segal 空间]]定义之。

## 定义

::: definition
设 $\mathcal{C}$ 是 [[$(\infty, 1)$-范畴]]。
$\mathcal{C}$ 的**内范畴**是指 [[$(\infty, 1)$-函子]]
\[
X \colon \mathbb{\Delta}^{\mathrm{op}}
\longrightarrow \mathcal{C},
\]
即 $\mathcal{C}$ 中的[[单纯对象]]，其中 $\mathbb{\Delta}$ 是[[单形范畴]]，
使得对任意自然数 $n$，诱导的态射
\[
X_n \longrightarrow
\underbrace{
  X_1 \underset{X_0}{\times}
  \cdots \underset{X_0}{\times} X_1
} _{n \text{ 个 } X_1}
\]
是 $\mathcal{C}$ 中的同构，其中 $X_n$ 代表 $X (n)$。
这里，我们假设 $\mathcal{C}$ 中具有上式右边的 [[$(\infty, 1)$-极限]]。
:::

在定义中，$X_n$ 可以视为内 $(\infty, 1)$-范畴的所有 [[$n$-态射]]的空间，
作为 $\mathcal{C}$ 的对象。要求态射
\[
X_n \longrightarrow
X_1 \underset{X_0}{\times}
\cdots \underset{X_0}{\times} X_1
\]
可逆，是在说 $X$ 中任何 $n$ 个可复合的 $1$-态射都可以在同伦意义下唯一地复合。
换言之，$X$ 作为单纯对象，具有从[[脊]]
$\mathrm{Sp}^n$ 到[[单形]] $\Delta [n]$ 的提升性质。

## 参考文献

以下文献 §1.1 详述了内 $(\infty, 1)$-范畴的定义和性质：

```bibliography
Lurie2009:
  type: preprint
  author: Jacob Lurie
  year: 2009
  title: '$(\infty, 2)$-categories and the Goodwillie Calculus I'
  arxiv: '0905.0462'
```

```terms
'内 $(\infty, 1)$-范畴':
  en: 'internal $(\infty, 1)$-category'
```
