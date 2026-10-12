---
title: 进制谱
categories: [$p$ 进几何]
notices:
  - name: 问题
    items:
      - “定义”一节缺少进制谱作为环化空间（结构层）的定义。
      - “例子”“性质”各节需要扩充。
navboxes: [P 进几何]
---

**进制谱**是 [[$p$ 进几何]]中常用的空间局部模型，
大致来说，它为每个 [[Huber 对]] $(A, A^+)$ 赋予一个[[环化空间]]
$\operatorname{Spa}(A, A^+)$。
其中，空间的点是环的“进制”，即[[赋值]]，
而空间的开集则由赋值的大小来决定。

进制谱统一了[[形式谱]]、[[仿射胚空间]]等概念，
且相比以上二者更易操作，也能推广到更一般的环上。
例如，形式谱 $\operatorname{Spf}(\mathbb{Z}_p[[T]])$
（在 $(p,T)$ 进拓扑下）仅含有一个点，
而相应的进制谱 $\operatorname{Spa}(\mathbb{Z}_p[[T]])$
则有很丰富的结构；
又如，
由于不存在 $\operatorname{Spf}(\mathbb{Q}_p)$，
形式谱的[[一般纤维]]需要手动定义。
但在进制谱的语境下，一般纤维则有简洁定义：
[[进制空间]] $X \to \operatorname{Spa}(\mathbb{Z}_p)$
的一般纤维就是纤维积
$X \times_{\operatorname{Spa}(\mathbb{Z}_p)}
\operatorname{Spa}(\mathbb{Q}_p)$。

## 定义

::: definition [进制谱，作为集合]
[[Huber 对]] $(A, A^+)$
的**进制谱** $\operatorname{Spa}(A, A^+)$ 的元素是 $A$
的所有满足 $|A^+| \leq 1$ 的连续[[赋值]] $|\cdot|$ 的同构类。

当 $A^+ = A^\circ$ 为 $A$ 中有界元之集时，
$\operatorname{Spa}(A, A^+)$ 通常简记为 $\operatorname{Spa}(A)$。
:::

::: definition [进制谱，作为拓扑空间]
$\operatorname{Spa}(A, A^+)$ 的拓扑由形如下式的开集生成：
\[
\{x \in \operatorname{Spa}(A, A^+)
\mid f(x) \leq g(x) \neq 0\}.
\]
这里 $f, g \in A$，$f(x)$ 表示 $f$ 在赋值 $x$ 下的取值。
:::

## 例子

## 性质

```terms
进制谱:
  en: adic spectrum
  fr: spectre adique
  la: spectrum adicum
  grc: ἀδικὸν φάσμα
```
