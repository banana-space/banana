---
title: Cantor 定理
categories: [集合论]
---

**Cantor 定理**是[[集合论]]的基本结论，
指的是一个集合的[[幂集]]，即其所有[[子集]]组成之集，
总是含有比其自身更多的元素。这是人们第一次发现无穷集也有大小之别。

## 陈述与证明

::: theorem
任一集合 $A$ 到其[[幂集]] $\mathcal{P}(A)$
的任一映射 $f$ 都不是[[满射]]。换言之，
$|A|<|\mathcal{P}(A)|$。
:::

::: proof
考虑 $A$ 的子集 $X=\{a\in A\mid a\notin f(a)\}$，
我们来证明 $X$ 不在 $f$ 的[[像]]中。反设 $x\in A$ 满足
$f(x)=X$，则

- 如 $x\in X$，依定义 $x\notin X$；

- 如 $x\notin X$，依定义 $x\in X$；

不论如何都会矛盾。从而不存在 $x\in A$ 满足 $f(x)=X$。
:::

## 历史

[[Cantor]] 在其 1891 年的原始论文
*Über eine elementare Frage der Mannigfaltigkeitslehre*
（《论集合论的一个基本问题》）
中证明的命题是“[[实数]][[不可数]]”，证明方法本质上就是上面所述。
[[Russell]] 在其 1903 年的书 *Principles of Mathematics*
（《数学原理》）中写的证明也差不多，但他把命题陈述为“[[谓词]]总比[[元素]]多”。
而“Cantor 定理”这个名称，以及上面这个形式的陈述与证明，
则是 [[Zermelo]]在其 1908 年的论文
*Untersuchungen über die Grundlagen der Mengenlehre I*
（《集合论基础研究I》）中所提出。

```terms
Cantor 定理:
  en: Cantor's theorem
  de: Satz von Cantor
  fr: théorème de Cantor
```
