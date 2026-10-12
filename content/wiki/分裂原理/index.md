---
title: 分裂原理
categories: [纤维丛论]
notices:
  - name: 问题
    items:
      - “陈述与证明”一节缺少分裂原理的证明。
      - “应用”一节需要扩充。
---

**分裂原理**是[[代数拓扑]]中的定理，
它可以把有关一般[[向量丛]]的计算转化为对[[线丛]]的计算。

## 陈述与证明

::: theorem [分裂原理]
对拓扑空间 $X$ 和（实或复）向量丛 $E \to X$，
存在映射 $u \colon \tilde{X} \to X$，
使得 $u^*E$ 是 $\tilde{X}$ 上（实或复）[[线丛]]的直和，
并且上同调环间映射
$u^* \colon H^\bullet(X) \to H^\bullet(\tilde{X})$ 是单射。
:::

## 应用

::: example [张量积的示性类]
对向量丛 $E$、$F$，设其分别为 $m$、$n$ 维，
有[[示性类]]等式
\[
c(E \otimes F) = \Pi_{i, j} (1 + x_i + y_j)
\]
其中 $x_i$、$y_j$ 分别形式地视为方程
$\sum_{k \in \mathbb{N}} (-1)^kc_k(E) x^{m-k}$ 和
$\sum_{k \in \mathbb{N}} (-1)^kc_k(F) y^{n-k}$ 的根，
并利用 [[Vieta 公式]]做形式计算。
:::

```terms
分裂原理:
  en: splitting principle
  fr: principe de scindement
```
