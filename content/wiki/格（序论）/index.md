---
title: 格（序论）
categories: [序论]
navboxes: [序论, 代数结构]
---

<disambiguation>
关于其他含义，请参见[[格]]。
</disambiguation>

**格**是一类[[偏序集]]，其中任意两个元素都有[[上、下确界]]，
即[[并、交 (序论)|并、交]]。

例如，一个[[集合]]的所有[[子集]]在包含关系下构成的偏序集是格，
其中的上、下确界即为子集的[[并集]]、[[交集]]。

## 定义

格有以下两种等价的定义方式。
第一种将其定义为满足额外条件的[[偏序集]]，
而第二种将其定义为一种[[代数结构]]。

### 作为偏序集

::: definition
**格**是指[[偏序集]] $(X, \leq)$，
其中任意两个元素都有[[并、交 (序论)|并、交]]，即[[上、下确界]]。
:::

### 作为代数结构

::: definition
**格**是指三元组 $(X, \vee, \wedge)$，其中 $X$ 是[[集合]]，
$\vee, \wedge$ 为 $X$ 上的[[二元运算]]，分别称为**并**、**交**，
满足以下条件：

- （**[[结合运算|结合律]]**）对任意 $x, y, z \in X$，有
  \[
  \begin{aligned}
    x \vee (y \vee z) & = (x \vee y) \vee z, \\
    x \wedge (y \wedge z) & = (x \wedge y) \wedge z.
  \end{aligned}
  \]

- （**[[交换运算|交换律]]**）对任意 $x, y \in X$，有
  \[
  \begin{aligned}
    x \vee y = y \vee x, \\
    x \wedge y = y \wedge x.
  \end{aligned}
  \]

- （**[[吸收律]]**）对任意 $x, y \in X$，有
  \[
  \begin{aligned}
    x \vee (x \wedge y) & = x, \\
    x \wedge (x \vee y) & = x.
  \end{aligned}
  \]

:::

此时，运算 $\vee, \wedge$ 也满足[[幂等律]]，即对任意 $x \in X$，有
\[
\begin{aligned}
  x \vee x  = x, \\
  x \wedge x  = x.
\end{aligned}
\]
这能通过同时使用两条吸收律而得出。
在有的定义中也将此性质作为一条公理，但这是多余的。

```terms
格:
  en: lattice
  fr: treillis :m
  de: Verband :m
```
