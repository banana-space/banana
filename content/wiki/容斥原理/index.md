---
title: 容斥原理
categories: [计数组合]
notices:
  - name: 问题
    items:
      - “在测度论中”一节的定理似乎需要假设 $\mu (E) < \infty$，否则右边可能出现 $\infty - \infty$。
      - “例子”一节需要扩充。
navboxes: [计数组合]
---

**容斥原理**是[[组合学]]中的一个基本结论，
用于计算一些[[有限集]]的[[并集]]的元素个数。
例如，对有限集 $A, B$ 而言，容斥原理说明
\[
|A \cup B| = |A| + |B| - |A \cap B|.
\]
也就是说，为计算 $A \cup B$ 的元素个数，
只需先把 $A, B$ 各自的元素个数加起来，再减去重复的部分，即 $A \cap B$ 的元素个数。
又例如，当我们有三个集合 $A, B, C$ 时，容斥原理说明
\[
\begin{aligned}
  |A \cup B \cup C| = {} & |A| + |B| + |C|
  \\ & \quad - |A \cap B| - |B \cap C| - |C \cap A|
  \\ & \quad + |A \cap B \cap C|.
\end{aligned}
\]
也就是说，为计算 $A \cup B \cup C$ 的元素个数，
我们首先把 $A, B, C$ 各自的元素个数加起来，
再减去重复的部分，两两交集的元素个数。
但这样就多减去了 $A \cap B \cap C$ 中的元素，
因此还需再把这部分加回来。

一般地，我们可以考虑 $n$ 个集合的并，
则为了计算其元素个数，只需先将每个集合各自的元素个数加起来，
再减去它们两两相交的元素个数，
再加上它们任意三个相交的元素个数，
再减去它们任意四个相交的元素个数，如此等等。

## 陈述

### 在计数中

::: theorem [容斥原理]
设 $n \geq 0$ 为[[自然数]]，$X$ 为[[有限集]]，
并且 $X = X_1 \cup \cdots \cup X_n$，其中每个 $X_i$ 为 $X$ 的[[子集]]。则
\[
|X| = \sum_{k=1}^{n} {} (-1)^{k-1} \cdot \biggl(
  \sum_{1 \leq i_1 < \cdots < i_k \leq n}
  |X_{i_1} \cap \cdots \cap X_{i_k}|
\biggr).
\]
:::

### 在测度论中

容斥原理也可以推广到一般的[[测度空间]]上。

::: theorem [容斥原理]
设 $(X, \mathcal{A}, \mu)$ 为[[测度空间]]。
设 $n \geq 0$ 为[[自然数]]，$E \subset X$ 为[[可测集]]，
并且 $E = E_1 \cup \cdots \cup E_n$，其中每个 $E_i$ 为 $E$ 的可测子集。则
\[
\mu (E) = \sum_{k=1}^{n} {} (-1)^{k-1} \cdot \biggl(
  \sum_{1 \leq i_1 < \cdots < i_k \leq n}
  \mu (E_{i_1} \cap \cdots \cap E_{i_k})
\biggr).
\]
:::

特别地，在[[概率空间]]中，可将上述 $E$ 与 $E_i$ 视为[[事件]]，
而将 $\mu$ 视为[[概率]]，从而得到关于这些事件的概率的等式。

## 例子

```terms
容斥原理:
  en: inclusion–exclusion principle
  fr: principe d'inclusion–exclusion :m
  de: Prinzip von Inklusion und Exklusion :n
  ja: 包<ほう>除<じょ>原<げん>理<り>
```
