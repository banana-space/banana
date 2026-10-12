---
title: Hilbert 第三问题
categories: [组合几何]
---

Hilbert 第三问题是 [[Hilbert 的 23 个问题]]之一，
问的是同[[体积]]的[[多面体]]是否总能通过剪切、粘贴而互相得到。
该问题于 1900 年被 [[Max Dehn]] 用其[[Dehn 不变量|不变量]]解决，
是 Hilbert 问题当中最快得到解决者。

## 问题及其背景

不难发现，对于[[欧氏平面]]中任两个同[[面积]]的[[多边形]]，
我们都能将其中一个剪切为有限多块，然后拼成另一个。这称为
[[Wallace–Bolyai–Gerwien 定理]]。有鉴于此，[[David Hilbert]]
便好奇在三维[[欧氏空间]]中是否能做类似的事，这便是 Hilbert 第三问题。
Hilbert 本人猜测此问题结论为否定，尔后被其学生 Dehn 证明。

::: theorem [Dehn]
存在两个体积相等的多面体，不能将一个剪切然后粘贴成另一个。
:::

## 解决

Dehn 巧妙定义如下不变量以解决问题。

::: definition
设 $\mathbb{R}^3$ 中多面体 $X$ 各棱长度为 $\ell_1,\ldots,\ell_e$，
对应的[[二面角]]角度分别为 $\theta_1,\ldots,\theta_e$，则其
**Dehn 不变量**定义为 $\mathbb{R}\otimes_\mathbb{Z}\mathbb{R}/\mathbb{Z}\pi$ 中的元素
$$
\sum_{i=1}^e\ell_i\otimes\theta_i.
$$
:::

容易算出，标准[[正八面体]]的 Dehn 不变量为 $24\sqrt2\otimes\arctan\sqrt2\ne0$，
而任意[[长方体]]的 Dehn 不变量都为 $0$。取体积与标准正八面体相等的长方体，
即得结论。更详细的论述参见主条目 [[Dehn 不变量]]。

## 后续

有了以上定理，我们可以继续追问，什么样的两个多面体能通过剪切、粘贴互相得到？
[[Jean-Pierre Sydler]] 于 1965 年证明，只要两个多面体体积和 Dehn 不变量都相等，
就没问题。尔后 [[Børge Jessen]] 又证明了四维情形的类似结论。
Dupont 和 Sah 于 1990 年又用[[典型群]]的[[群同调|同调]]重新解释这一现象。

还可以在[[球面几何]]和[[双曲几何]]中问类似问题，而类似地定义 Dehn
不变量仍能给出否定的结论。但这些几何中是否有类似于上述 Sydler 的结果，
至今仍是未解之谜。

```terms
Hilbert 第三问题:
  en: Hilbert's third problem
```
