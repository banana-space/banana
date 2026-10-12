---
title: Poincaré 对偶
aliases: [庞加莱对偶, Poincare 对偶]
categories: [同调论]
notices:
  - name: 问题
    items:
      - “对带边流形”“通过三角剖分”“通过 Thom 同构”“通过微分几何”“推广”各节需要扩充。
---

**[[Henri Poincaré|Poincaré]] 对偶**
描述了[[流形]]的[[普通同调|同调]]、[[普通上同调|上同调]]的一种对称的结构。
它说明对[[紧空间|紧]][[定向|可定向]] $n$ 维[[流形]] $X$ 而言，有[[同构]]
\[
H^k (X) \simeq H_{n-k} (X).
\]
由此及[[万有系数定理]]，对域系数的（上）同调而言，有自然的同构
\[
\begin{aligned}
  H^k (X) & \simeq H^{n-k} (X) ^\vee, \\
  H_k (X) & \simeq H_{n-k} (X) ^\vee,
\end{aligned}
\]
其中 $^\vee$ 表示[[向量空间]]的[[对偶空间]]。

## 陈述

### 对紧流形

::: theorem [Poincaré 对偶]
设 $X$ 是[[紧空间|紧]][[定向]] $n$ 维[[拓扑流形]]，
$G$ 是 [[Abel 群]]。则有同构
\[
(-) \smallfrown [X] \colon \
H^k (X; G) \simeq H_{n-k} (X; G),
\]
其中 $\smallfrown$ 是[[帽积]]，
$[X] \in H_n (X)$ 是 $X$ 的[[基本类]]。
:::

由[[万有系数定理]]，对域系数的（上）同调而言，
Poincaré 对偶有以下等价表述。

::: corollary [等价表述]
设 $X$ 是紧定向 $n$ 维流形，$\mathbb{k}$ 是[[域]]。则

- 有[[完美配对]]
  \[
  (-) \smallsmile (-) \colon \
  H^k (X; \mathbb{k}) \otimes
  H^{n-k} (X; \mathbb{k})
  \to H^n (X; \mathbb{k})
  \simeq \mathbb{k},
  \]
  其中 $\smallsmile$ 是[[杯积]]。换言之，有[[向量空间]]同构
  \[
  H^k (X; \mathbb{k}) \simeq
  H^{n-k} (X; \mathbb{k}) ^\vee.
  \]

- 有完美配对
  \[
  (-) \cdot (-) \colon \
  H_k (X; \mathbb{k}) \otimes
  H_{n-k} (X; \mathbb{k})
  \to H_0 (X; \mathbb{k})
  \simeq \mathbb{k},
  \]
  其中 $\cdot$ 是[[相交积]]。换言之，有向量空间同构
  \[
  H_k (X; \mathbb{k}) \simeq
  H_{n-k} (X; \mathbb{k}) ^\vee.
  \]

- 若 $X$ 还是[[光滑流形]]，
  则有 [[de Rham 上同调]]的完美配对
  \[
  \int_X {} (-) \wedge (-) \colon \
  H^k_{\mathrm{dR}} (X) \otimes
  H^{n-k}_{\mathrm{dR}} (X)
  \to \mathbb{R}.
  \]

:::

### 对非紧流形

::: theorem [Poincaré 对偶，非紧版本]
设 $X$ 是[[定向]] $n$ 维[[拓扑流形]]，
$G$ 是 [[Abel 群]]。则有同构
\[
\begin{aligned}
  (-) \smallfrown [X] \colon \ &
  H^k_{\mathrm{c}} (X; G) \simeq H_{n-k} (X; G), \\
  (-) \smallfrown [X] \colon \ &
  H^k (X; G) \simeq H_{n-k}^{\mathrm{BM}} (X; G), \\
\end{aligned}
\]
其中 $H^\bullet_{\mathrm{c}}$ 是[[紧支上同调]]，
$H_\bullet^{\mathrm{BM}}$ 是 [[Borel–Moore 同调]]，
$[X] \in H_n^{\mathrm{BM}} (X)$ 是基本类。
:::

### 对带边流形

## 证明

### 通过三角剖分

### 通过 Thom 同构

### 通过微分几何

## 推广

```terms
Poincaré 对偶:
  en: Poincaré duality
  fr: dualité de Poincaré :f
  de: Poincaré-Dualität :f
```
