---
title: 加权余极限
categories: [范畴论]
navboxes: [范畴论]
---

**加权余极限**是[[余极限]]的推广，
它之于余极限就如同[[加权平均]]之于[[平均数]]。

## 定义

本节中固定小范畴 $J$ 作为图表的指标范畴。

### 普通范畴中

::: definition {@集合}
$\mathcal{C}$ 是[[范畴]]，$F\colon J\to\mathcal{C}$、
$W\colon J^\mathrm{op}\to\mathsf{Set}$ 是两个[[函子]]。则 $F$ 关于 $W$
的**加权余极限**指对象 $W\cdot F\in\mathcal{C}$
附带关于 $c\in\mathcal{C}$ [[自然同构|自然]]的同构
$$
\mathcal{C}(W\cdot F,c)\cong
\operatorname{Hom}_{\mathsf{Set}^{J^\mathrm{op}}}(W,\mathcal{C}(F(-),c)).
$$
称 $F$ 为此加权余极限的**图表**，称 $W$ 为其**权**。
:::

### 充实范畴中

::: definition {@充实}
$\mathcal{V}$ 是有内 $\operatorname{Hom}$ 函子的[[幺半范畴]]，
$\mathcal{C}$ 是
$\mathcal{V}$-[[充实范畴]]，$F\colon J\to\mathcal{C}$、
$W\colon J^\mathrm{op}\to\mathcal{V}$ 是两个[[函子]]。则 $F$ 关于 $W$
的**加权余极限**指对象 $W\cdot F\in\mathcal{C}$
附带关于 $c\in\mathcal{C}$ 自然的同构
$$
\mathcal{C}(W\cdot F,c)\cong\operatorname{\underline{Hom}}_
{\mathcal{V}^{J^\mathrm{op}}}(W,\mathcal{C}(F(-),c)),
$$
其中 $\operatorname{\underline{Hom}}$ 表示内 $\operatorname{Hom}$。
称 $F$ 为此加权余极限的**图表**，称 $W$
为其**权**。

显然当 $\mathcal{V}=(\mathsf{Set},\times)$ 时，@充实 退化到 @集合。
:::

## 例子

::: example
在 @集合 中取 $J=*$ 为[[单点范畴]]，则
$F$ 相当于 $\mathcal{C}$ 中一个对象，
$W$ 相当于一个集合。此时
$$
\mathsf{Set}(W,\mathcal{C}(F,c))=\mathcal{C}(F,c)^W,
$$
所以 $W\cdot F=\coprod_{w\in W}F$，是 $W$ 个 $F$
的余积。
:::

::: example
在 @充实 中取 $J$ 为单点范畴，此时
$W\cdot F$ 常被记为 $W\otimes F$，称为[[余幂]]。
:::

::: example
在 @集合 中取 $W$ 为取值为[[单点集]]的常函子。则
$$
\mathsf{Set}^{J^\mathrm{op}}(W,\mathcal{C}(F(-),c))=
\mathcal{C}^J(F(-),c),
$$
这里 $c$ 表示取值为 $c$ 的常函子 $J\to\mathcal{C}$。
所以此时 $W\cdot F=\operatornamewithlimits{colim} F$。
:::

```terms
加权余极限:
  en: weighted colimit
```
