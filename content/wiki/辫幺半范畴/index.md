---
title: 辫幺半范畴
aliases: [辫范畴]
categories: [范畴代数]
notices:
  - name: 问题
    items:
      - “杨–Baxter 方程”一节需要扩充。
navboxes: [范畴论]
---

在[[范畴论]]中，**辫幺半范畴**是满足一种较弱的交换性的[[幺半范畴]]，
弱于[[对称幺半范畴]]。
在辫幺半范畴中，交换关系
\[
x \otimes y \simeq y \otimes x
\]
如同交换辫子的两束，以同一方向交换两次并不能回到原来的状态，而是将辫子打了一个结。

在[[高阶代数]]的观点下，
幺半范畴是[[范畴的范畴]]中的 [[$\mathbb{E}_1$-代数]]，即结合代数；
辫幺半范畴则是 [[$\mathbb{E}_2$-代数]]，也即大致满足在平面 $\mathbb{R}^2$ 上的交换关系的代数。
此时上述交换关系对应于 $\mathbb{R}^2$ 中的两个点互相交换位置，
而以同样的路径再交换一次则会造成两个点绕对方旋转一周。
当 $n \geq 3$ 时，[[$\mathbb{E}_n$-代数]]都对应于[[对称幺半范畴]]，
也就是范畴的范畴中的 [[$\mathbb{E}_\infty$-代数]]，即交换代数。

## 定义

::: definition [辫幺半范畴] {@显式定义}
**辫幺半范畴**是三元组 $(\mathcal{C}, \otimes, c)$，
其中

- $(\mathcal{C}, \otimes)$ 是[[幺半范畴]]，

- $c$ 是[[自然同构]]
  \[
  X \otimes Y \simeq Y \otimes X,
  \]

使得以下图表交换：
\[
\begin{tikzcd}
  {(X\otimes Y)\otimes Z} & {X\otimes (Y\otimes Z)} \\
  {(Y\otimes X)\otimes Z} & {(Y\otimes Z)\otimes X} \\
  {Y\otimes (X\otimes Z)} & {Y\otimes (Z\otimes X)}
  \arrow["{\alpha_{X, Y, Z}}", from=1-1, to=1-2]
  \arrow["{c_{X, Y}\otimes \mathrm{id}_Z}"', from=1-1, to=2-1]
  \arrow["{c_{X, Y\otimes Z}}", from=1-2, to=2-2]
  \arrow["{\alpha_{Y, X, Z}}"', from=2-1, to=3-1]
  \arrow["{\alpha_{Y,Z,X}}", from=2-2, to=3-2]
  \arrow["{\mathrm{id}_Y\otimes c_{X, Z}}"', from=3-1, to=3-2]
\end{tikzcd}
\]
与
\[
\begin{tikzcd}
  {X\otimes (Y\otimes Z)} & {X\otimes (Z\otimes Y)} \\
  {(X\otimes Y)\otimes Z} & {(X\otimes Z)\otimes Y} \\
  {Z\otimes (X\otimes Y)} & {(Z\otimes X)\otimes Y}
  \arrow["{\mathrm{id}_X\otimes c_{Y, Z}}", from=1-1, to=1-2]
  \arrow["{\alpha_{X, Y, Z}^{-1}}"', from=1-1, to=2-1]
  \arrow["{\alpha_{X, Z, Y}^{-1}}", from=1-2, to=2-2]
  \arrow["{c_{X\otimes Y, Z}}"', from=2-1, to=3-1]
  \arrow["{c_{X,Z}\otimes \mathrm{id}_Y}", from=2-2, to=3-2]
  \arrow["{\alpha_{Z, X, Y}^{-1}}"', from=3-1, to=3-2]
\end{tikzcd}.
\]
这两个相容性条件又被称为**六边形公理**。

:::

## 性质

### 杨–Baxter 方程

```terms
辫幺半范畴:
  en: braided monoidal category
```
