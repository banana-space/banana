---
title: 仿射子空间
categories: [线性代数]
notices:
  - name: 问题
    items:
      - “定义”一节中两个条件的等价性似乎在 $k = \mathbb{F}_2$ 时不成立：此时第二个条件对任意非空子集都成立。
navboxes: [线性代数]
---

[[向量空间]]的**仿射子空间**（或**仿射子集**）
是指由某个[[子向量空间]]平移而得到的子集。

## 定义

::: definition {@thm:定义}
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]。
称子集 $W \subset V$ 是**仿射子空间**，如果满足以下等价条件：

- 存在[[子向量空间]] $W_0 \subset V$ 及[[向量]] $v \in V$，使得
  \[
  W = W_0 + v = \{ w + v \mid w \in W_0 \}.
  \]

- $W$ 非空，且对任意 $x, y \in W$ 和 $a, b \in k$，若 $a + b = 1$，则
  $a x + b y \in W$。

更一般地，设 $V$ 是 $k$-向量空间 $V_0$ 上的[[仿射空间]]。
称子集 $W \subset V$ 是**仿射子空间**，如果满足以下条件：

- 存在[[子向量空间]] $W_0 \subset V_0$ 及元素 $v \in V$，使得
  \[
  W = W_0 + v = \{ w + v \mid w \in W_0 \},
  \]
  这里 $w + v$ 表示 $v$ 沿 $w$ 的平移。

:::

## 性质

- 若 $V$ 是向量空间，$W \subset V$ 是仿射子空间，
  则对任意 $x_1, \dotsc, x_n \in W$ 和 $a_1, \dotsc, a_n \in k$，
  若 $a_1 + \cdots + a_n = 1$，则
  \[
  a_1 x_1 + \cdots + a_n x_n \in W.
  \]

```terms
仿射子空间:
  en: affine subspace
  fr: sous-espace affine :m
  la: subspatium affine :n
```
