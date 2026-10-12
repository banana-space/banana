---
title: 子群
categories: [群论]
navboxes: [群论]
---

[[群]]的**子群**是包含在其中的群，
即由其中一部分元素构成的群。

## 定义

::: definition
[[群]] $G$ 的**子群**是指[[子集]] $H \subset G$，满足以下条件：

- 对任意 $h_1, h_2 \in H$，都有 $h_1 h_2 \in H$。

- $G$ 的单位元 $1 \in H$。

- 对任意 $h \in H$，都有 $h^{-1} \in H$。

此时，集合 $H$ 带上 $G$ 中的乘法、单位元也构成一个群。
:::

等价地说，$G$ 的子群也可以定义为群 $H$，
带有[[单射|单]]的[[群同态]] $H \hookrightarrow G$。

## 例子

- 任何群都是自身的子群。

- [[平凡群]]是任何群的子群，即由该群 $G$ 的单位元自身构成的群 $\{ 1 \}$。

- 对[[整数]] $n$，被 $n$ 整除的整数构成的子集
  $n \mathbb{Z} \subset \mathbb{Z}$ 是 $\mathbb{Z}$ 的子群，
  这里群运算是加法。

```terms
子群:
  en: subgroup
  de: Untergruppe :f
  fr: sous-groupe :m
```
