---
title: 链复形同伦范畴
aliases: [同伦链复形范畴]
categories: [同调代数]
navboxes: [同调代数]
---

**链复形同伦范畴**是从[[链复形]][[范畴]]出发，
把[[链同伦]]的链映射等同，获得的范畴。
如在[[高阶范畴论]]意义下解释“等同”，将给出
[[链复形 $(\infty,1)$-范畴]]，链复形同伦范畴是其同伦范畴。

## 定义

::: definition
设 $\mathcal{A}$ 是[[加性范畴]]，$\mathsf{Ch}(\mathcal{A})$
是其[[链复形]]范畴。$\mathcal{A}$
的**链复形同伦范畴**，通常记作 $\mathsf{K}(\mathcal{A})$，
指以下范畴：

- 其对象是 $\mathcal{A}$ 的链复形，
  即 $\mathsf{K}(\mathcal{A})$ 与 $\mathsf{Ch}(\mathcal{A})$ 有同样的对象。

- 对链复形 $C$，$D$，
  $$
  \operatorname{Hom}_{\mathsf{K}(\mathcal{A})}(C,D):=
  \operatorname{Hom}_{\mathsf{Ch}(\mathcal{A})}(C,D)/\simeq,
  $$
  即 $\mathsf{K}(\mathcal{A})$ 的态射定义为链映射商去链同伦。

:::

## 性质

::: theorem
令 $\mathsf{W}\subseteq\mathsf{Ch}(\mathcal{A})$
为[[链同伦等价]]构成的[[宽子范畴]]。则 $\mathsf{K}(\mathcal{A})
  =\mathsf{Ch}(\mathcal{A})[\mathsf{W}^{-1}]$ 为
$\mathsf{Ch}(\mathcal{A})$ 沿 $\mathsf{W}$ 的[[局部化 (范畴论)|局部化]]。
:::

::: theorem
$\mathsf{K}(\mathcal{A})$ 是[[三角范畴]]，
其映射锥由链复形映射锥计算。
:::

```terms
链复形同伦范畴:
  en: homotopy category of chain complexes
```
