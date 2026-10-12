---
title: 算畴代数
categories: [范畴代数]
navboxes: [范畴论]
---

**算畴代数**是利用[[算畴]]或[[多元范畴]]描述的[[代数结构]]，
它给出了一般的代数结构在任意[[对称幺半范畴]]中的推广，
其中算畴描述了此代数结构上的多元运算。
例如，

- [[结合算畴]] $\textsf{Assoc}$ 的算畴代数即为[[代数对象|结合代数]]，

- [[交换算畴]] $\textsf{Comm}$ 的算畴代数即为[[代数对象|交换代数]]。

## 定义

::: definition [算畴代数]
设 $\mathcal{O}$ 为[[算畴]]，
$\mathcal{C}$ 为[[对称幺半范畴]]。
$\mathcal{C}$ 中的 **$\mathcal{O}$-代数**由以下信息构成：

- 对象 $X \in \mathcal{C}$。

- 对任意自然数 $n$，任意 $n$ 元运算 $f \in \mathcal{O}(n)$，
  有 $\mathcal{C}$ 中的映射 $X(f) \colon X^{\otimes n} \to X$。

- $X(\mathbb{1}) = \mathrm{id}_X$，
  且 $X(f)$ 与 $\mathcal{O}$ 中的复合运算 $\circ$ 相容。

:::

若将算畴换成[[多元范畴]]，有同样的描述：

::: definition [多元范畴代数]
设 $\mathcal{O}$ 为多元范畴，$\mathcal{C}$ 为[[对称幺半范畴]]。
$\mathcal{C}$ 中的 **$\mathcal{O}$-代数** $F$ 由以下信息构成：

- 对 $\mathcal{O}$ 中任意对象 $X$，有对象 $F(X) \in \mathcal{C}$。

- 对 $\mathcal{O}$ 中任意有限族对象 $(X_i)_{i \in I}$，任意对象 $Y$，
  及 $f \in \mathcal{O}((X_i)_{i \in I}, Y)$，
  有 $F(f) \colon \bigotimes_{i \in I} F(X_i) \to F(Y)$。

- $F(\mathbb{1}_X) = \mathrm{id}_{F(X)}$，
  且 $F(f)$ 与 $\mathcal{O}$ 中的复合运算相容。

:::

利用多元范畴函子的概念，可以将上述定义简化如下：

::: definition [多元范畴代数] {@函子定义}
设 $\mathcal{O}$ 为多元范畴，$\mathcal{C}$ 为对称幺半范畴。
将 $\mathcal{C}$ 视为多元范畴，其中多元运算由下式给出：
\[
\mathcal{C}((X_i)_{i \in I}, Y)
=
\mathcal{C} \Bigl( \bigotimes_{i \in I} X_i, Y \Bigr).
\]
$\mathcal{C}$ 中的 **$\mathcal{O}$-代数** $F$
即为 $\mathcal{O}$ 到 $\mathcal{C}$ 的多元范畴函子。
:::

在多元范畴中只有一个对象时，上述定义也给出了算畴代数的等价定义。

::: definition
设 $\mathcal{O}$ 为算畴或多元范畴，$\mathcal{C}$ 为对称幺半范畴。
则 $\mathcal{C}$ 中的 $\mathcal{O}$-代数间可以自然地定义态射，
从而所有 $\mathcal{O}$-代数构成范畴
$\mathcal{O}\text{-}\mathsf{Alg} (\mathcal{C})$。

在 @函子定义 意义下，此范畴也就是多元函子范畴
$\mathsf{Fun} (\mathcal{O}, \mathcal{C})$。
:::

## 例子

设 $\mathcal{C}$ 为[[对称幺半范畴]]。

- $\mathsf{Comm}\text{-}\mathsf{Alg} (\mathcal{C})$
  等价于 $\mathcal{C}$ 中的[[代数对象|交换幺半对象]]的范畴。
  若 $F \in \mathsf{Comm}\text{-}\mathsf{Alg} (\mathcal{C})$，
  则 $F(*) \in \mathcal{C}$ 即为对应的幺半对象，
  $F(() \to *)$、$F((*, *) \to *)$ 给出了幺半对象的单位与乘法。

- 类似地，$\mathsf{Assoc}\text{-}\mathsf{Alg} (\mathcal{C})$
  等价于 $\mathcal{C}$ 中的[[代数对象|幺半对象]]的范畴。
  $\mathsf{Assoc}((*)_{i \in I}, *)$
  给出了其上所有 $|I|!$ 种不同顺序的乘法。

- $\mathsf{Triv}\text{-}\mathsf{Alg} (\mathcal{C})$
  范畴等价于 $\mathcal{C}$。
