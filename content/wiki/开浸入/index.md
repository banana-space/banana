---
title: 开浸入
aliases: [开子概形]
categories: [概形论]
navboxes: [态射性质]
---

在[[代数几何]]中，
**开浸入**是一类[[概形态射]]，用来定义**开子概形**的概念，
即开浸入是开子概形向大概形的含入。
概形 $X$ 的开子概形也就是 $X$ 中的[[开集]]，
这样的开集都具有自然继承自 $X$ 的概形结构。

## 定义

::: definition [开浸入]
称[[环化空间]]态射 $j \colon (U, \mathcal{O}_U) \to
(X, \mathcal{O}_X)$ 为**开浸入**，是指它满足以下条件：

- [[拓扑空间]]的映射 $j \colon U \to X$ 是[[开嵌入]]，
  即从 $U$ 到 $X$ 的开子空间的同胚。

- 结构层的映射 $j^\sharp \colon \mathcal{O}_U \simeq j^{-1} (\mathcal{O}_X)$
  是[[同构]]。

此时亦称 $U$ 是 $X$ 的**开子空间**。

若 $j \colon U \to X$ 是[[概形态射]]，且是开浸入，
则称 $U$ 是 $X$ 的**开子概形**。

类似地，若 $j \colon U \to X$ 是[[代数簇]]态射，且是开浸入，
则称 $U$ 是 $X$ 的**开子簇**。
:::

由定义，环化空间的开子空间由相应拓扑空间中的[[开集]]确定，
因其结构层由定义确定。
特别地，概形的开子概形由其拓扑空间中的开集确定。

## 例子

- 对环 $A$ 以及 $f\in A$，自然态射
  $\operatorname{Spec}A_f\to\operatorname{Spec}A$
  是开浸入，对应 $\operatorname{Spec}A$ 的开子集 $D(f)$。
  需要注意的是，[[仿射概形]]间开浸入并不都如此。

- 一般地，对环 $A$ 及其[[乘性子集]] $S$，自然态射
  $\operatorname{Spec}S^{-1}A\to\operatorname{Spec}A$
  未必是开浸入。比如
  $\operatorname{Spec}\mathbb{Q}\to\operatorname{Spec}\mathbb{Z}$
  就不是开浸入，因其像不是开集。

## 性质

开浸入是平凡程度仅次于同构的概形态射。

::: proposition
开浸入在复合和基变换下封闭，且是：

- [[概形]][[范畴]]单态射。

- [[局部有限表现态射]]。

- [[平坦态射]]。

- [[平展态射]]。

:::

::: proposition
一个态射是开浸入当且仅当它是平坦、局部有限表现的单态射。
:::

```terms
开浸入:
  en: open immersion
  de: offene Immersion
  fr: immersion ouverte
  la: immersio aperta
  grc: ἀνοικτὴ ἐμβάθυσις
开子概形:
  en: open subscheme
  de: offenes Unterschema
  fr: sous-schéma ouvert
  la: subschema apertum
  grc: ἀνοικτὸν ὑπόσχημα
```
