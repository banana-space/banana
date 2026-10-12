---
title: Krull 交定理
categories: [交换代数]
navboxes: [交换代数]
---

**Krull 交定理**是个[[交换代数]]定理，说的是
[[Noether 环|Noether]] [[局部环]] $(A,\mathfrak{m})$
上的[[有限生成模]]都是 $\mathfrak{m}$-分离的。

## 定理与证明

::: theorem
$A$ 是 [[Noether 环]]，$J$ 是其 [[Jacobson 根]]，
$M$ 是有限生成 $A$-模。则 $\bigcap_{n=0}^\infty J^nM=0$。
:::

::: proof
记 $N=\bigcap_{n=0}^\infty J^nM\subseteq M$。
由 [[Artin–Rees 引理]]，存在 $c\in\mathbb{N}$ 使得对任意 $n\in\mathbb{N}$，
$J^{n+c}M\cap N\subseteq J^nN$。特别地，取 $n=1$，由 $N$ 的定义有
$JN\supseteq J^{c+1}M\cap N=N$。于是由 [[Nakayama 引理]]，$N=0$。
:::

```terms
Krull 交定理:
  en: Krull intersection theorem
  de: Durchschnittssatz von Krull
  fr: théorème d'intersection de Krull
```
