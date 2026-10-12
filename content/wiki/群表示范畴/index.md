---
title: 群表示范畴
categories: [范畴论]
notices:
  - name: 问题
    items:
      - 应区分离散群、Lie 群、代数群等的表示，及有限维、无限维表示等概念。目前似乎所有概念混为一谈。
      - “其他结构”一节需要扩充。
navboxes: [群表示论]
---

在[[表示论]]中，**群表示范畴**是由某个给定[[群]]的所有[[群表示|表示]]构成的[[范畴]]。
群表示范畴具有[[对称幺半范畴]]的结构。

当$G$上有其他结构时，群表示范畴通常是保持这些结构的所有表示所构成的范畴。

在[[量子力学]]中，群表示范畴描述了[[对称性]]对相互作用的约束。
例如，当对称群是$\mathrm{U}(1)$时，群在$\mathbb{C}$-空间上的所有不可约表示可以由$\mathbb{Z}$标记，
代表量子化的[[电荷]]。
保持$\mathrm{U}(1)$对称性意味着电荷守恒被保持。

## 定义

### 一般定义

给定群$G$，域$k$，$G$在$\mathsf{Vect}_k$上的群表示范畴可以抽象地被定义为[[函子范畴]]
\[
\mathsf{Rep}_k(G) := \mathsf{Fun}(\mathrm{B}G, \mathsf{Vect}_k),
\]
其中$\mathrm{B}G$是$G$的[[解环]]。将这个定义展开，有

::: definition [群表示范畴]
$G$是群，$k$是域，$G$在$k$-空间上的**群表示范畴**，记作$\mathsf{Rep}_{k}(G)$，包含下面的数据

- 对象是二元组$(V,\rho_V)$，其中$V$是$k$-空间，
  $\rho_V:G\rightarrow \mathrm{GL}(V)$是$V$上的$G$-表示。
- 从 $(V,\rho_V)$ 到 $(W,\rho_W)$ 的态射 $f$ 是从 $V$ 到 $W$ 的线性映射，并满足下面的相容性条件
  \[
  f\rho_V = \rho_W f.
  \]
  这个条件有时称作**交织条件**。
- 态射之间的复合是作为线性映射的复合。
- $(V,\rho_V)$上的单位态射是$V$上的单位线性映射。

:::

可以给群表示范畴加上幺半结构。

::: definition
给定$\mathsf{Rep}_{k}(G)$中的两个对象$(V,\rho_V)$ 和 $(W,\rho_W)$，定义

- $(V,\rho_V)$与$(W,\rho_W)$的张量积为$(V \otimes W, \rho_V \otimes \rho_W)$，
  这里$(\rho_V\otimes\rho_W)(g) := \rho_V(g) \otimes \rho_W(g)$。
- 单位元$\mathbb{1}$是$(k,\epsilon)$，其中$\epsilon$是$G$在$k$上的平凡表示。
- 结合子是$k$空间上的单位映射。

$(\mathsf{Rep}_{k}(G),\otimes, \mathbb{1})$构成了幺半范畴。
:::

进一步地，可以给群表示范畴加上辫结构。

::: definition
作为幺半范畴，$\mathsf{Rep}_{k}(G)$上可以定义交换映射
\[
c_{(V,\rho_V) \otimes (W,\rho_W)} \colon (V,\rho_V) \otimes (W,\rho_W) \rightarrow (W,\rho_W) \otimes (V,\rho_V)
\]
为$k$-空间上正则的交换映射：$V\otimes W \rightarrow W\otimes V$。这个映射自动满足交织条件。

因此$c$赋予了$\mathsf{Rep}_{k}(G)$辫幺半范畴的结构。
:::

### 其他结构

## 性质

作为辫幺半范畴，$\mathsf{Rep}_{k}(G)$是[[对称幺半范畴|对称的]]。

```terms
群表示范畴:
  en: group representation category
```
