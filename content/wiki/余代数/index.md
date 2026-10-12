---
title: 余代数
notices:
  - name: 问题
    items:
      - “例子”一节需要扩充。
categories: [代数论]
navboxes: [代数结构]
---

**余代数**是一种[[代数结构]]，它是[[结合代数]]的一种对偶。
大致来说，余代数的公理是通过将结合代数的公理进行范畴论意义的[[对偶]]得到的。
例如说，域上的有限维结合代数的[[对偶向量空间]]总是余代数；反之，余代数的对偶空间总是结合代数。

## 定义

::: definition
域 $k$ 上的**余代数**是三元组 $(C, \Delta, \epsilon)$，其中

- $C$ 是 $k$-向量空间，
- $\Delta$ 是 $C \to C \otimes C$ 的线性映射，称为**余乘**，
- $\epsilon$ 是 $C \to k$ 的线性映射，称为**余单位**。

它们满足如下两条公理：

- 余结合律，即
  \[
  (\mathrm{id}_C \otimes \Delta) \circ \Delta = (\Delta \otimes \mathrm{id}_C) \circ \Delta,
  \]
- 余单位律，即
  \[
  (\mathrm{id}_C \otimes \epsilon) \circ \Delta = (\epsilon \otimes \mathrm{id}_C) \circ \Delta = \mathrm{id}_C.
  \]

以交换图表示，即为如下图表交换
\[
\begin{tikzcd}
  C \ar[r, "\Delta"] \ar[d, "\Delta"] & C \otimes C \ar[d, "\mathrm{id} \otimes \Delta"] \\
  C \otimes C \ar[r, "\Delta \otimes \mathrm{id}"] & C \otimes C \otimes C
\end{tikzcd}
\]
\[
\begin{tikzcd}
  C \ar[r, "\Delta"] \ar[d, "\Delta"] \ar[dr, "\mathrm{id}"] & C \otimes C \ar[d, "\mathrm{id} \otimes \epsilon"] \\
  C \otimes C \ar[r, "\epsilon \otimes \mathrm{id}"] & C
\end{tikzcd}
\]
:::

::: remark
这些公理恰好是域 $k$ 上[[结合代数]]的公理的对偶；
例如，结合代数 $A$ 上的乘法就是线性映射 $A \otimes A \to A$，
其结合律和上述余结合律互为对偶。
:::

::: definition
若 $C, D$ 是 $k$ 上的余代数，$C$ 到 $D$ 的**同态**是一个 $k$ 线性映射
$f: C \to D$，满足

- $\epsilon_D \circ f = \epsilon_C$，且
- $\Delta_D \circ f = (f \otimes f) \circ \Delta_C$。
:::

## 例子

## Sweedler 记号

由于 $\Delta$ 的值域 $C \otimes C$ 书写时不便，实践上常用一种简化写法的记号。
对每个 $c \in C$，有 $\Delta(c) \in C \otimes C$，
因此存在有限多对 $(c_{(1)}^i, c_{(2)}^i)$，使得
\[
\Delta(c) = \sum_i c_{(1)}^i \otimes c_{(2)}^i.
\]
在 **Sweedler 记号** 中，上述和式记作
\[
\Delta(c) = \sum_{(c)} c_{(1)} \otimes c_{(2)}.
\]
当不会导致歧义时，也可以省略求和指标 $(c)$ 不写（类似于 [[Einstein 求和约定]]）。

以 Sweedler 记号，余结合律写作
\[
\sum_{(c)} c_{(1)} \otimes \bigl(\sum_{(c_(2))} (c_{(2)})_{(1)} \otimes (c_{(2)})_{(2)}\bigr)
=
\sum_{(c)} \bigl(\sum_{(c_(1))} (c_{(1)})_{(1)} \otimes (c_{(1)})_{(2)}\bigr) \otimes c_{(2)}.
\]
此时也将此 $C \otimes C \otimes C$ 的元素记作
\[
\sum_{(c)} c_{(1)} \otimes c_{(2)} \otimes c_{(3)}.
\]

而余单位律写作
\[
\sum_{(c)} \epsilon(c_{(1)}) c_{(2)} = \sum_{(c)} \epsilon(c_{(2)}) c_{(1)} = c.
\]

## 对偶

::: proposition
若 $C$ 是 $k$ 上的余代数，则 $C^*$（$C$ 作为 $k$ 向量空间的对偶）
自然地是 $k$ 上的结合代数，其乘法定义为
\[
(f \cdot g)(x) = (f \otimes g) (\Delta(x)) = \sum f(x_{(1)}) g(x_{(2)}).
\]
$C^*$ 的单位元即为 $\epsilon \colon C \to k$。

若 $A$ 是 $k$ 上的有限维结合代数，则 $A^*$ 自然地是 $k$ 上的余代数，
其余乘定义为
\[
\begin{aligned}
  \Delta\colon A^* &\to (A \otimes A)^* \cong A^* \otimes A^* \\
  \Delta(f) &= (x \otimes y \mapsto f(x \cdot y)).
\end{aligned}
\]
余单位定义为 $\epsilon: A^* \to k, \epsilon(f) = f(1)$。
:::

::: remark
若 $A$ 是一般的结合代数，则 $A^*$ 没有自然的余代数结构。
这是因为仅在有限维时有同构 $(A \otimes A)^* \cong A^* \otimes A^*$。
:::

```terms
余代数:
  en: Coalgebra
  de: Koalgebra :f
  fr: Coalgèbre :f
```
