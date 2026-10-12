---
title: 心结构
categories: [同调代数, $K$ 理论]
notices:
  - name: 问题
    items:
      - “定义”一节的定义“有界性”与“心”中的“衡结构”没有定义，似乎指本条目的心结构。
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**心结构**是[[权结构]]的推广，
总结了从[[正合范畴]]的有界导出范畴恢复出正合范畴所需的信息。

## 定义

::: definition
设 $\mathcal{C}$ 是[[稳定范畴]]。$\mathcal{C}$ 的**心结构**，
指的是二元组 $(\mathcal{C}_{\ge0},\mathcal{C}_{\le0})$ 满足：

1. $\mathcal{C}_{\ge0}$ 和 $\mathcal{C}_{\le0}$ 都是 $\mathcal{C}$
   的[[满子范畴]]，且对扩张封闭。

2. 对 $n\in\mathbb{Z}$，记 $\mathcal{C}_{\ge n}=\mathcal{C}_{\ge 0}[n]$，
   $\mathcal{C}_{\le n}=\mathcal{C}_{\le0}[n]$，则 $\mathcal{C}_{\ge1}\subseteq\mathcal{C}_{\ge0}$，
   $\mathcal{C}_{\le0}\subseteq\mathcal{C}_{\le1}$。

3. 对任意 $x\in\mathcal{C}$，存在纤维列 $x'\to x\to x''$，
   其中 $x'\in\mathcal{C}_{\le0}$，$x''\in\mathcal{C}_{\ge1}$。

保持心结构的正合函子称为**心正合函子**。
带心结构的稳定小范畴关于心正合函子构成范畴，记作
$\mathsf{Cat}^\mathrm{heart}$。
:::

::: definition [有界性]
称稳定范畴 $\mathcal{C}$ 的衡结构 $(\mathcal{C}_{\ge0},\mathcal{C}_{\le0})$ 为：

- **左有界**，指 $\mathcal{C}=\bigcup_{n\in\mathbb{Z}}\mathcal{C}_{\le n}$。

- **右有界**，指 $\mathcal{C}=\bigcup_{n\in\mathbb{Z}}\mathcal{C}_{\ge n}$。

- **有界**，指它左有界且右有界。

:::

::: definition [心]
稳定范畴 $\mathcal{C}$ 的衡结构 $(\mathcal{C}_{\ge0},\mathcal{C}_{\le0})$
的**心**指[[满子范畴]] $\mathcal{C}_{\ge0}\cap\mathcal{C}_{\le0}$，
记作 $\mathcal{C}^\heartsuit$，自带[[正合范畴]]结构如下：

- 称 $\mathcal{C}^\heartsuit$ 中映射 $f$ 是余纤维化，
  指其在 $\mathcal{C}$ 中的余纤维仍处于 $\mathcal{C}^\heartsuit$ 中，
  即 $\operatorname{cofib}(f)\in\mathcal{C}_{\le0}$。

- 称 $\mathcal{C}^\heartsuit$ 中映射 $f$ 是纤维化，
  指其在 $\mathcal{C}$ 中的纤维仍处于 $\mathcal{C}^\heartsuit$ 中，
  即 $\operatorname{fib}(f)\in\mathcal{C}_{\ge0}$。

:::

## 性质

::: theorem
我们有自然的伴随对
$$
\mathsf{D}^\mathrm{b}\colon\mathsf{Exact}\rightleftarrows\mathsf{Cat}^\mathrm{heart}:\!(-)^\heartsuit
$$
其中 $(-)^\heartsuit$ 限制在有界心结构上为满忠实。
:::

## 参考文献

```bibliography
saunier2023theorem:
  type: preprint
  title: A Theorem of the Heart for K-theory of Endomorphisms
  author: Victor Saunier
  year: 2023
  arxiv: '2311.13836'
```

```terms
心结构:
  en: heart structure
```
