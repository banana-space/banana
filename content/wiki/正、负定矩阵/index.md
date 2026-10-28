---
title: 正、负定矩阵
aliases: [半正定矩阵, 正定矩阵, 负定矩阵, 半负定矩阵]
categories: [线性代数]
navboxes: [线性代数]
---

<problems>
- “对 Hermite 矩阵”一节需要扩充。
</problems>

在[[线性代数]]中，**正定矩阵**、**负定矩阵**是两类[[实数|实]][[对称矩阵]]，
其对应的[[对称双线性型]]在非零向量上总是取正值、负值。
换言之，其对应的双线性型是[[正、负定双线性型]]。

也有**半正定矩阵**、**半负定矩阵**的概念，
是指对应的对称双线性型总是取非负值、非正值。

## 定义

### 对实对称矩阵

::: definition
设 $n$ 是[[自然数]]，$A$ 为 $n \times n$ [[实数|实]][[对称矩阵]]。

- 称 $A$ 为**正定矩阵**，
  若对任意[[列向量]] $v \in \mathbb{R}^n$，若 $v \neq 0$，则 $v^\top A v > 0$。

- 称 $A$ 为**半正定矩阵**，
  若对任意列向量 $v \in \mathbb{R}^n$，有 $v^\top A v \geq 0$。

- 称 $A$ 为**负定矩阵**，
  若对任意列向量 $v \in \mathbb{R}^n$，若 $v \neq 0$，则 $v^\top A v < 0$。

- 称 $A$ 为**半负定矩阵**，
  若对任意列向量 $v \in \mathbb{R}^n$，有 $v^\top A v \leq 0$。

:::

### 对 Hermite 矩阵

## 性质

### 特征值

::: proposition
设 $n$ 是[[自然数]]，$A$ 为 $n \times n$
[[实数|实]][[对称矩阵]]或 [[Hermite 矩阵]]。

- $A$ 正定，当且仅当其特征值全为正实数。

- $A$ 半正定，当且仅当其特征值全为非负实数。

- $A$ 负定，当且仅当其特征值全为负实数。

- $A$ 半负定，当且仅当其特征值全为非正实数。

:::

```terms
正定矩阵:
  en: positive definite matrix
半正定矩阵:
  en: positive semidefinite matrix
负定矩阵:
  en: negative definite matrix
半负定矩阵:
  en: negative semidefinite matrix
```
