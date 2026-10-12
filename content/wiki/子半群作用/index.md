---
title: 子半群作用
aliases: [子 S-系]
categories: [半群论]
navboxes: [半群论]
---

**子 $S$-系**类似[[子模]]或[[子群]]，是在$S$作用下稳定的$S$-系的
子集。

## 定义

::: definition
左$S$-系$A$的一个非空子集$B$如果满足
\[
sb \in B,\quad\forall s\in S, b\in B,
\]
那么称$B$是$A$的一个子系，记作$B\leqslant A$。
子系的$S$的作用继承自$A$。

同样地可以定义右$S$-系的子系。
:::

## 性质

下述性质是不证自明的。

::: proposition
$S$-系的任意个子系的交若非空，则仍为子系。
:::

## 例子

- 对于$S$-系$A$和它的非空子集$M$，包含$M$的所有子系的交仍是$A$
  的子系，称为由$M$生成的子系，可以记为
  \[
  \langle M\rangle = \bigcap_{M\subseteq B\leqslant A}B.
  \]
  特别地，当$M$为单元素集时所生成的子系称为循环子系。
