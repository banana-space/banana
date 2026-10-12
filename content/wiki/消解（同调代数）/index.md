---
title: 消解（同调代数）
aliases: [内射消解, 投射消解, 无圈消解]
categories: [同调代数]
---

在同调代数中，
**消解**是将一个
[[Abel 范畴]]中的对象换为由较好性质的对象构成的[[链复形]]的过程，
例如**投射消解**、**内射消解**等。

直接把[[函子]]作用于某些对象上会导致丢失信息
（例如扭模到无扭模的同态必为 $0$，
而无法看出模本身的更多结构）。
而将对象换为在函子下表现良好的对象构成的[[链复形]]，
并令函子作用于相应的链复形上则避免了这一问题。
这也是[[导出函子]]的构造与动机。

在[[模型范畴]]理论中，
消解被抽象为（余）纤维性替换。

## 定义

### 投射消解与内射消解

::: definition [投射消解]
设 $\mathcal{A}$ 是 Abel 范畴，
$A\in \operatorname{Ob}\mathcal{A}$。
$A$ 的投射消解是[[复形]]
$P_\bullet : \cdots \to P_1 \to P_0$ 和态射
$P_\bullet \to A$，满足以下条件：

- $P_\bullet \to A \to 0$ 是[[正合列]]，

- $P_n \ (\forall n\geq 0)$ 是
  $\mathcal{A}$ 中的[[投射对象]]。

:::

::: definition [内射消解]
设 $\mathcal{A}$ 是 Abel 范畴，
$A \in \operatorname{Ob}\mathcal{A}$。
$A$ 的内射消解是[[链复形]]
$I^\bullet : I^0 \to I^1 \to \cdots$ 和态射 $A \to I^{0}$，满足以下条件：

- $0 \to A \to I^{\bullet}$ 是[[正合列]]，

- $I^n~(\forall n\geq 0)$ 是
  $\mathcal{A}$ 中的[[内射对象]]。

:::

### 无圈消解

在许多情况下投射消解和内射消解不好构造或不存在，
会使用无圈消解来代替之。

::: definition [无圈消解]
设 $\mathcal{A}$ 是 Abel 范畴，
$F \colon \mathcal{A} \to \mathcal{B}$
是右[[正合函子]]，
$A\in \operatorname{Ob}\mathcal{A}$。
$A$ 的无圈消解是[[复形]]
$C_\bullet : \cdots \to C_1 \to C_0$ 和态射
$C_\bullet \to A$，满足以下条件：

- $C_\bullet \to A \to 0$ 是[[正合列]]，

- $C_n \ (\forall n\geq 0)$ 是
  $\mathcal{A}$ 中的 $F$-[[无圈对象]]。

:::

类似地对左正合函子也有类似定义。
无圈消解同样可以计算相应函子的导出函子。

::: remark
无圈消解在许多场合中出现，
例如 [[Godement 消解]]、[[细消解]]等。
:::

## 性质

::: proposition
若 $\mathcal{A}$ 有足够多的内射对象，
即任意 $A\in \operatorname{Ob}(\mathcal{A})$，
存在内射对象 $I$ 及
[[单射 (范畴论)|单射]] $A \to I$。
那么对任意 $A\in \operatorname{Ob}(\mathcal{A})$，
$A$ 存在内射消解。
:::

::: proposition
对偶地，对投射消解或无圈消解，相应结论也成立。
:::

::: remark
[[Grothendieck Abel 范畴]] 有足够多内射对象，
任意[[环]]上的[[模范畴]]有足够多投射对象和内射对象。
:::

::: proposition
假设有内射消解
$A\to I^{\bullet}$ 和 $B\to J^{\bullet}$。
如果有态射 $\alpha \colon A \to B$，
则有链复形态射
$\varphi \colon (A\to I^{\bullet})\to
  (B\to J^{\bullet})$。
:::

::: proposition
对偶地，对投射消解，相应结论也成立。
:::

## 例子

- [[杠消解]]
- [[Godement 消解]]

```terms
消解:
  en: resolution
  de: Auflösung :f
  fr: résolution :f
  grc: ἀνάλυσις :f
  la: resolutio :f
```
