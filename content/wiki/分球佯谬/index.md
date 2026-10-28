---
title: 分球佯谬
aliases: [Banach-Tarski 定理, Banach–Tarski 佯谬, Banach–Tarski 定理]
categories: [组合几何, 集合论]
---

<problems>
- “证明”一节的三个小节“在 $\operatorname{SO}(3)$ 中找 $F_2$”“划分球面”“划分球体”以及“后续影响”一节需要扩充。
</problems>

**Banach–Tarski 定理**，又称**分球怪论**、
**分球佯谬**，指的是能将 $\mathbb{R}^3$ 中的一个球分为有限多块，
然后平移、旋转、重新组合，得到两个与原球全等的球。这并不是悖论，
因为分出的块是[[不可测集]]，不能对其计算[[测度]]而导出矛盾。

## 陈述

::: theorem
令 $D=\{(x,y,z)\in\mathbb{R}^3\mid x^2+y^2+z^2\le1\}$
为 $\mathbb{R}^3$ 中的标准球。则存在 $n\in\mathbb{N}$，划分
$$
D=\bigsqcup_{i=1}^nA_i\sqcup\bigsqcup_{i=1}^nB_i,
$$
以及 $\mathbb{R}^3$ 的保向等距变换 $\alpha_1,\ldots,\alpha_n$，
$\beta_1,\ldots,\beta_n$，使得如记 $A'_i=\alpha_i(A_i)$，
$B'_i=\beta_i(B_i)$，则
$$
D=\bigsqcup_{i=1}^nA'_i=\bigsqcup_{i=1}^nB'_i.
$$
:::

## 证明

证明主要使用[[特殊正交群]] $\operatorname{SO}(3)$ 中有二元[[自由群]]
$F_2$ 作为[[子群]]，以此来作划分。需分为以下几步。

### 在 $\operatorname{SO}(3)$ 中找 $F_2$

### 划分球面

### 划分球体

## 后续影响

```terms
Banach–Tarski 定理:
  en: Banach–Tarski theorem
```
