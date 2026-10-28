---
title: 素理想回避
categories: [交换代数]
navboxes: [交换代数]
---

<problems>
- 开头一段对引理的概述似乎与定理不符：定理的条件是理想不包含于其中任一个素理想，结论是它不包含于这些素理想的并。
</problems>

**素理想回避**是[[交换代数]]中的重要引理，
常与[[结合素理想]]一起使用，以获得非零因子。
它大体说的是，如一个理想不包含于有限个素理想的并，
则可从中取出元素，避开任一个素理想。

## 定理与证明

::: theorem
$A$ 为交换环，$I$ 是 $A$ 的理想。
$\mathfrak{p}_1,\ldots,\mathfrak{p}_n$ 也是 $A$
的理想，满足对 $i > 2$，$\mathfrak{p}_i$ 都是素理想。
如对每个 $i$，均有 $I\nsubseteq \mathfrak{p}_i$，
则存在 $a\in I$，满足对每个 $i$，$a\notin\mathfrak{p}_i$。
:::

::: proof
用归纳法。$n=1$ 时平凡。假设定理对 $n-1$ 成立，对每个 $i$，
将归纳假设用在 $\mathfrak{p}_i$ 之外的 $n-1$ 个理想上，
得到 $a_i\in I$，满足对每个 $j\ne i$，$a_i\notin\mathfrak{p}_j$。
如有某个 $a_i$ 满足 $a_i\notin\mathfrak{p}_i$，则取 $a=a_i$ 即足。
而如对每个 $i$ 都有 $a_i\in\mathfrak{p}_i$，
取 $a=a_1\cdots a_{n-1}+a_n$，容易验证对每个 $i$ 都有 $a\notin\mathfrak{p}_i$。
:::

::: remark
这里其实并未用到 $I$ 是理想，只用到它对加法、乘法封闭。但不知这样减弱条件有什么意义。
此外这里允许 $\mathfrak{p}_1,\ldots,\mathfrak{p}_n$ 中有两个非素理想，
但实践中非素理想基本上至多一个。
:::

```terms
素理想回避:
  en: prime avoidance
  de: Primideal-Vermeidung
  fr: évitement des idéaux premiers
```
