---
title: Todd 类
categories: [示性类]
navboxes: [向量丛与 K 理论]
---

<problems>
- “定义”一节中 Todd 类的系数含分数，其各次部分似乎应落在有理系数上同调 $H^{2k} (X; \mathbb{Q})$ 中，而不是 $H^{2k} (X; \mathbb{Z})$ 中。
</problems>

在[[代数拓扑]]中，
**Todd 类**是对[[复数|复]][[向量丛]]定义的[[示性类]]，
可以由[[陈类]]表示出来。
Todd 类最常见的应用是在 [[Hirzebruch–Riemann–Roch 定理]]、[[Atiyah–Singer 指标定理]]中。

## 定义

::: definition
设 $X$ 为[[仿紧空间]]，$E$ 为 $X$ 上的复向量丛。
定义 $E$ 的 **Todd 类**为以下表达式：
\[
\mathrm{td} (E) =
1 + \frac{1}{2} c_1 (E)
+ \frac{1}{12} (c_1 (E)^2 + c_2 (E))
+ \frac{1}{24} c_1 (E) \, c_2 (E)
+ \cdots,
\]
其中 $c_i$ 是[[陈类]]。
这是个无限求和，但落在每个 $H^{2k} (X; \mathbb{Z})$ 中的部分是有限的，
其中 $k$ 是[[自然数]]；
该部分也记为 $\mathrm{td}_k (E)$。
这个无限的表达式由下列性质唯一确定：

- 对任何空间 $X$ 上的复向量丛 $E, F$，Todd 类满足**乘性**：
  \[
  \mathrm{td} (E \oplus F) = \mathrm{td} (E) \cdot \mathrm{td} (F) .
  \]

- 对任何空间 $X$ 上的复[[线丛]] $L$，其 Todd 类由以下表达式给出：
  \[
  \begin{aligned}
    \mathrm{td} (L) & = Q (c_1 (L)), \\
    Q (x) & = \frac{x}{1 - \mathrm{e}^{-x}}
    = 1 + \frac{1}{2} x + \frac{1}{12} x^2 + \cdots .
  \end{aligned}
  \]
  这里，[[形式幂级数]] $Q (x)$ 也是定义 [[Bernoulli 数]]的级数。

:::
