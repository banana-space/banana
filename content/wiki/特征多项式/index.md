---
title: 特征多项式
categories: [线性代数]
navboxes: [线性代数]
---

在[[线性代数]]中，[[方阵]] $A$ 的**特征多项式**
是[[多项式]]
\[
p_{A}(\lambda) = \det(\lambda I - A).
\]
特征多项式的[[根]]是方阵的所有[[特征值]]。特别地，在[[代数闭域]]上，有
\[
p_A (\lambda) = (\lambda - \lambda_1) \cdots (\lambda - \lambda_n),
\]
这里 $\lambda_1, \dotsc, \lambda_n$ 为 $A$ 的全部特征值（可能重复）。

## 定义

::: definition [特征多项式]
设 $A$ 为[[交换环]] $R$ 上的 $n \times n$ 方阵，
其特征多项式是指

\[
p_{A}(\lambda) = \det( \lambda I - A ),
\]
其中 $I$ 是 $n \times n$ [[单位矩阵]]。
:::

::: remark
部分资料将特征多项式定义为 $\det( A - \lambda I )$，
根据[[行列式]]的性质，这与此处的定义仅相差系数 $(-1)^{n}$。
此处定义的好处是特征多项式的首项系数一定是 $1$。
:::

## 性质

设 $A, B$ 为[[交换环]] $R$ 上的 $n \times n$ 方阵，
$P$ 为 $n \times n$ [[可逆方阵]]，则

- $p_{A}(\lambda)$ 是 $n$ 次[[首一多项式]]。

- 若 $R$ 是[[域]]，则 $p_{A}(\lambda)$ 的根恰是 $A$ 的所有[[特征值]]。

- $p_{A}(\lambda) = p_{A^\mathrm{t}}(\lambda)$，
  其中 $A^\mathrm{t}$ 是 $A$ 的[[转置]]。

- $p_{AB}(\lambda) = p_{BA}(\lambda)$。
  特别地，我们有
  \[
  p_{A}(\lambda) = p_{PAP^{-1}}(\lambda).
  \]
  所以，[[相似矩阵]]的特征多项式相同。
  但具有相同特征多项式的矩阵未必相似。

- [[极小多项式 (线性代数)|极小多项式]][[整除]] $p_{A}(\lambda)$。

```terms
特征多项式:
  en: characteristic polynomial
```
