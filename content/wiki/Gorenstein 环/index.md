---
title: Gorenstein 环
categories: [交换代数]
notices:
  - name: 问题
    items:
      - “例子”一节需要扩充。
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Gorenstein 环**是一类特殊的[[Cohen–Macaulay 环]]。局部上看，它的[[内射维数]]有限。

## 定义

::: definition
称 [[Noether 环|Noether]] [[局部环]] $A$ 为 **Gorenstein 局部环**，
如果作为其自身上的模，其[[内射维数]]有限：
\[
\operatorname{id} (A) < \infty.
\]

称 [[Noether 环]] $A$ 为 **Gorenstein 环**，
若其在任意[[素理想]]处的[[局部化]]都是 Gorenstein 局部环。
:::

## 性质

### 等价刻画

::: proposition
记 Noether 局部环$A$的[[极大理想]]为$\mathfrak{m}$，[[剩余域]]为$k$，
[[Krull 维数|维数]] $\dim A=n$。
则下列条件等价：

- $A$是Gorenstein 局部环，即其[[内射维数]]$\operatorname{id}(A)<\infty$。

- 其[[内射维数]]$\operatorname{id}(A)=n$。

- 对任意 $i\neq n$，都有 $\operatorname{Ext}^{i}_A(k,A)=0$，
  而 $\operatorname{Ext}^{n}_A(k,A)\cong k$。

- 存在 $i>n$，使得 $\operatorname{Ext}^{i}_A(k,A)=0$。

- 对任意 $i<n$，都有 $\operatorname{Ext}^{i}_A(k,A)=0$，
  而 $\operatorname{Ext}^{n}_A(k,A)\cong k$。

- $A$是[[Cohen–Macaulay 环]]
  且 $\operatorname{Ext}^{n}_A(k,A)\cong k$。

- $A$是[[Cohen–Macaulay 环]]
  且$A$的任何[[参数系]]$a_1,\ldots,a_n$生成的理想$(a_1,\ldots,a_n)$都[[不可约理想|不可约]]。

- $A$是[[Cohen–Macaulay 环]]
  且存在$A$的[[参数系]]$a_1,\ldots,a_n$使得其生成的理想$(a_1,\ldots,a_n)$是[[不可约理想|不可约]]的。

这里理想$I$[[不可约理想|不可约]]是指不存在别的理想$I_1,I_2$使得$I\subsetneqq I_1, I\subsetneqq I_2$
且$I_1\cap I_2=I.$
:::

### 一般性质

::: proposition
- Gorenstein 局部环在素理想处的局部化仍是
  Gorenstein 局部环。

- Gorenstein 环上的多项式环也是 Gorenstein 环。

:::

::: proposition {@完备化}
Noether 局部环$A$是 Gorenstein 局部环，
当且仅当其完备化$\hat{A}$是 Gorenstein 局部环。
:::

::: proposition {@判定定理}
Noether 局部环$A$是Gorenstein 局部环等价于
其极小[[消解 (同调代数)|内射消解]]
\[
0 \to A \to I^0 \to I^1 \to \cdots
\]
满足
\[
I^i\cong \bigoplus_{\operatorname{ht} \mathfrak{p} = i}
E(A/\mathfrak{p}),
\]
这里$E(-)$指[[内射包]]。
:::

## 例子

- [[完全交环]]是Gorenstein 环。

```terms
Gorenstein 环:
  ja: Gorenstein 環<かん>
  en: Gorenstein ring
```
