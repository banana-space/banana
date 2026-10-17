---
title: Euclid 整环
categories: [交换代数]
navboxes: [交换代数]
---

在[[交换代数]]中，
**Euclid 整环**是一类[[整环]]，
大致是指可以像在[[整数]]环中一样做[[带余除法]]的整环。

## 定义

::: definition [Euclid 整环]
设 \(R\) 是[[整环]]。
称 \(R\) 为 **Euclid 整环**，是指其满足以下性质：

- 存在[[函数]]
  \[
  d \colon R \setminus \{ 0 \} \to \mathbb{N},
  \]
  使得对任意 \(a, b \in R\)，其中 \(b \neq 0\)，
  都存在 \(q, r \in R\)，使得 \(a = bq + r\)，其中 \(r = 0\) 或者 \(d(r) < d(b)\)。

:::

在上述定义中，有时也称函数 \(d\) 为 Euclid 函数。
当我们说 $R$ 是 Euclid 整环时，只要求这样的函数存在，而不要求指定一个具体的函数。

## 例子

- 整数环 \(\mathbb{Z}\) 是 Euclid 整环。
  对整数 $0 \neq n \in \mathbb{Z}$，
  可以取 \(d(n)=|n|\)，而整数的带余除法说明其满足 Euclid 整环的定义。

- 域 \(F\) 上的[[多项式环|一元多项式环]] \(F[x]\) 也是 Euclid 整环。
  对多项式 $0 \neq f \in F[x]$，
  可以取 \(d(f) = \deg (f)\)，即取多项式的次数。
  一元多项式的带余除法说明其满足 Euclid 整环的定义。

## 性质

### 基本性质

- Euclid 整环是[[主理想整环]]；证明见该文。特别地，Euclid 整环是[[唯一分解整环]]。

```terms
Euclid 整环:
  en: Euclidean domain
```
