---
title: Einstein 求和约定
categories: [记号]
---

**Einstein 求和约定**是[[线性代数]]和[[微分几何]]中的约定。
它与[[指标约定]]一起有助于理清概念、简化计算。
它的具体陈述是：

::: convention
在对一些指标的求和式中，
如其中每个指标在求和项的上下指标各出现一次，
则可以省略求和符号。
:::

## 例子

以下给定[[线性空间]]的一组[[基]]或[[微分流形]]的一组[[坐标卡]]，
其中涉及的指标满足[[指标约定]]。

- 张量的分量形式可以简化：
  \[
  \begin{aligned}
    T &= \sum_{i_1, \dots, i_p, j_1, \cdots, j_q}
    T_{i_1, \dots, i_p}^{j_1, \cdots, j_q} \,
    e_{j_1} \otimes \cdots \otimes e_{j_q}
    \otimes f^{i_1} \otimes \cdots \otimes f^{i_p} \\
    &=: T_{i_1, \dots, i_p}^{j_1, \cdots, j_q} \,
    e_{j_1} \otimes \cdots \otimes e_{j_q}
    \otimes f^{i_1} \otimes \cdots \otimes f^{i_p}
  \end{aligned}
  \]

- 对 [[Riemann 度量]] $g$ 和[[向量场]] $X$、$Y$，
$g(X, Y) = \sum_{i,j} g_{ij} X^i Y^j$。
此式可简化为 $g_{ij} X^i Y^j$。

- 矩阵乘积公式 $(AB)^i_j = \sum_k A^i_k B^k_j$
的右式可简化为 $A^i_k B^k_j$。

- 在 Einstein 求和约定下 $\delta_i^i$ 是向量空间（或流形）
的维数而不是 $1$。

```terms
Einstein 求和约定:
  en: Einstein summation convention
  de: Einsteinsche Summenkonvention
  fr: convention de sommation d'Einstein
```
