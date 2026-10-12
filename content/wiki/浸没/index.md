---
title: 浸没
categories: [微分几何]
navboxes: [微分几何]
---

在[[微分几何]]中，**浸没**是[[光滑流形]]间的一类[[光滑映射]]，
其[[切映射]]是[[满射]]。

浸没的概念类似[[纤维丛]]，但更弱一些，因为浸没的不同[[纤维]]可以不同。
但 [[Ehresmann 纤维化定理]]说明，如果该浸没是[[紧合映射]]，
则这些纤维无法变化，故确实能得到纤维丛。

## 定义

::: definition [浸没]
设 $X,Y$ 为[[光滑流形]]，
$f\colon X\rightarrow Y$ 为[[光滑映射]]。
称 $f$ 为**浸没**，若对任意 $x \in X$，[[切映射]]
$d f_x \colon \mathrm{T}_x X \to \mathrm{T}_{f (x)} Y$
是[[满射]]。

:::

## 例子

- [[光滑流形]]间的所有[[局部微分同胚]]都是浸没。

## 性质

### 基本性质

::: proposition [局部形式]
设 $f \colon X\rightarrow Y$ 是浸没，则
对任意 $x\in X$，存在 $x$ 的开邻域 $U$ 和其上的[[局部坐标]] $x^1,\dots,x^m$，
以及 $f(x)$ 的开邻域 $V$ 和其上局部坐标 $y^1,\dots y^n$，
使得 $f$ 在这些局部坐标下可以写为
\[
(x^1,\dots,x^m) \mapsto (x^1,\dots,x^n)
\]
的形式，这里 $n \leq m$。
:::

::: proof
这是[[常秩定理]]的特例。
:::

## 参考文献

```bibliography
Lee12:
  type: book
  author: J. Lee
  year: 2012
  title: Introduction to Smooth Manifolds
  edition: 2
  series: Graduate Texts in Mathematics
  number: 218
  publisher: Springer
```

```terms
浸没:
  en: submersion
  fr: submersion
```
