---
title: 开覆盖
categories: [一般拓扑]
navboxes: [一般拓扑]
---

[[拓扑学]]中，**开覆盖**指[[拓扑空间]]的一族[[开子集]]，
其[[并集]]是全空间。

[[层论]]中使用拓扑空间时其实只使用开覆盖的信息；
故作为拓扑空间概念的抽象，
[[Grothendieck 拓扑]]保留开覆盖而放弃了所有其它结构。

## 定义

::: definition {@def-open-cover}
设 $X$ 是[[拓扑空间]]。
$X$ 的 **开覆盖** 指其[[开子集]]族
$\mathcal{U} = \{ U_i \subseteq X \}_{i \in I}$，其中 $I$ 是集合，
满足
\[
X = \bigcup_{i \in I} U_i .
\]
:::

::: definition [子覆盖、加细]
设 $\mathcal{U}= \{ U_i \subseteq X \}_{i \in I}$
为开覆盖。

- 如子集 $J \subseteq I$
  给出的子族 $\{ U_i \subseteq X \}_{i \in J}$
  仍是开覆盖，即
  \[
  X = \bigcup_{i \in J} U_i ,
  \]
  则称 $\{U_i\subseteq X\}_{i\in J}$ 为 $\mathcal{U}$
  的**子覆盖**。

- 如开覆盖 $\mathcal{V}=
  \{V_j\subseteq X\}_{j\in J}$ 和映射
  $\varphi\colon J\to I$ 满足对任意 $j\in J$，
  $V_j\subseteq U_{\varphi(j)}$，则称
  $(\mathcal{V},\varphi)$ 为 $\mathcal{U}$
  的**加细**，也称 $\mathcal{V}$
  **加细** $\mathcal{U}$。

显然，子覆盖都是加细。
:::

::: definition [有限性]
设 $\mathcal{U}= \{ U_i \subseteq X \}_{i \in I}$
为开覆盖。

- 称 $\mathcal{U}$ **有限**、**可数**，
  分别指 $\mathcal{U}$ [[有限集|有限]]、至多[[可数集|可数]]，
  当然也就是 $I$ 有限、至多可数。

- 称 $\mathcal{U}$ **局部有限**，
  指对任意 $x\in X$，存在开集 $U\ni x$，使得
  $$
  \{i\in I\mid U\cap U_i\ne\varnothing\}
  $$
  有限，即 $\mathcal{U}$ 中只有有限个开集与
  $U$ 交集非空。

:::

```terms
开覆盖:
  en: open cover
子覆盖:
  en: subcover
加细 (名词):
  en: refinement
加细 (动词):
  en: refine
```
