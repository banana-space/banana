---
title: Hodge 结构
categories: [复代数几何]
notices:
  - name: 问题
    items:
      - “定义”一节中，纯 Hodge 结构定义里的等式 $H^{p,q} = \bar{H}^{p,q}$ 似乎应为 $H^{p,q} = \overline{H^{q,p}}$。
      - “性质”一节需要扩充。
---

**Hodge 结构**是用来模拟复代数簇的上同调的[[代数结构]]：
[[纯 Hodge 结构]]用来模拟[[射影簇|射影]][[光滑概形|光滑]]复[[代数簇]]的[[奇异上同调]]与 [[Dolbeault 上同调]]，
以及 [[Hodge 分解]]给出的二者的关系；
而未必射影或光滑的复代数簇的上同调理论则由[[混 Hodge 结构]]来模拟。
可以认为混 Hodge 结构是一些纯 Hodge 结构的“结合”，
正如一般代数簇可以实现为射影光滑代数簇挖去或收缩它的子簇。

复代数簇对应的 Hodge 结构是复代数几何的重要研究对象，
包括形变在内的许多现象都可以通过 Hodge 结构来反映。
[[Hodge 理论]]即是使用 Hodge 结构研究复代数几何的理论。

某种意义上 Hodge 结构已经挖掘了复代数簇上同调的全部信息，
因为 [[Hodge 猜想]]说明[[母题]]到 Hodge 结构的实现为[[全函子]]。

本页面仅给出基本定义，更详尽的讨论参见相应主条目。

## 定义

### 纯 Hodge 结构

<see>[[纯 Hodge 结构]]</see>

::: definition [纯 Hodge 结构]
**权为 $n$ 的纯 Hodge 结构**是二元组 $(H_{\mathbb{Z}}, \{H^{p,q}\})$，
其中 $H_{\mathbb{Z}}$ 是有限生成 [[Abel 群]]，
$H^{p,q}$ 是 $H_{\mathbb{C}}:=H_{\mathbb{Z}} \otimes_{\mathbb{Z}} \mathbb{C}$
的 $\mathbb{C}$-[[线性子空间]]，
满足指标 $p, q \in \mathbb{Z}$，$p+q=n$，
\[
H_{\mathbb{C}} = \bigoplus_{p+q=n}H^{p,q},\quad
H^{p,q} = \bar{H}^{p,q}.
\]
:::

::: definition [代数簇对应的纯 Hodge 结构]
紧合光滑代数簇 $X$
对应的**权为 $n$ 的纯 Hodge 结构**是二元组
$(H^n(X,\mathbb{Z}), \{H^{p,q}(X)\}_{p+q=n})$，
前者是[[奇异上同调]]，后者是 [[Dolbeault 上同调]]，
[[Hodge 分解]]将后者自然地视为前者的线性子空间，
并给出上述等式。
:::

### 混 Hodge 结构

<see>[[混 Hodge 结构]]</see>

## 例子

- $(\mathbb{Z}, H^{0,0}=\mathbb{C})$ 称为平凡的纯 Hodge 结构。
- $(2\pi\mathrm{i}\mathbb{Z}, H^{-1,-1}=\mathbb{C})$ 是权为 $-2$ 的纯 Hodge 结构，
  称为 [[Tate 扭]] $\mathbb{Z}(1)$。
  它的对偶是射影空间 $\mathbb{P}^1$ 对应的权为 $2$ 的纯 Hodge 结构。

## 性质

```terms
Hodge 结构:
  en: Hodge structure
  de: Hodge-Struktur
  fr: structure de Hodge
```
