---
title: Banach–Alaoglu 定理
categories: [泛函分析]
notices:
  - name: 问题
    items:
      - “推广”一节需要扩充。
navboxes: [泛函分析]
---

**Banach–Alaoglu 定理**是[[泛函分析]]中的重要定理，
说的是 [[Banach 空间]]对偶空间的闭单位球在[[弱 * 拓扑]]下[[紧]]。

## 陈述与证明

::: theorem
设[[赋范域]] $\mathbb{k}$ 的闭单位球
$\{a\in\mathbb{k}:|a|\le1\}$ 为[[紧集]]，
如 $\mathbb{k}=\mathbb{R},\mathbb{C}$。设 $X$ 为
$\mathbb{k}$ 上 [[Banach 空间]]，$X^*$ 为其对偶空间，
带算子范数。则 $X^*$ 的闭单位球
$$
B^*=\{f\in X^*:\|f\|\le1\}
$$
在[[弱 * 拓扑]]下紧。
:::

::: proof
依定义，弱 * 拓扑是 $X^*$ 作为[[积空间]]
$\mathbb{k}^X$ 的子集继承的[[子空间拓扑]]。注意
$B^*\subset X^*\subset\mathbb{k}^X$ 实际上是更小的积空间
$$
\prod_{x\in X}\{a\in\mathbb{k}:|a|\le\|x\|\}
$$
的闭子集，而由条件，每一个乘积分量都紧，故由
[[Tikhonov 定理]]即得欲证。
:::

## 推广

```terms
Banach–Alaoglu 定理:
  en: Banach–Alaoglu theorem
```
