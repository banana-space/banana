---
title: 第一可数空间
categories: [一般拓扑]
navboxes: [一般拓扑]
---

<problems>
- “定义”一节中邻域基的定义似乎缺少各 $U_i$ 包含 $x$ 的条件。
</problems>

**第一可数空间**指每个点都有可数[[邻域基]]的[[拓扑空间]]。

## 定义

::: definition [[[邻域基]]]
设 $X$ 是[[拓扑空间]]，$x$ 是其中的点。$x$
的邻域基指[[开集]]族 $\{U_i\subseteq X\}_{i\in I}$，
满足对任一开集 $U\ni x$，存在 $i\in I$ 使得
$U_i\subseteq U$。
:::

::: definition {@thm:定义}
设 $X$ 是[[拓扑空间]]。称 $X$ **第一可数**，
指其中每个点都有可数邻域基。换言之，对任意 $x\in X$，
存在一列包含 $x$ 的开集 $U_1,U_2,\ldots$，使得对任一开集
$U\ni x$，都存在正整数 $n$ 使得 $U_n\subseteq U$。
:::

::: remark
@thm:定义 中可设 $U_1\supseteq U_2\supseteq\cdots$，
因为可把 $U_n$ 换成 $\bigcap_{i=1}^nU_i$。
:::

```terms
第一可数空间:
  en: first countable space
```
