---
title: 线性方程组
categories: [线性代数]
notices:
  - name: 问题
    items:
      - “解法”一节需要扩充。
navboxes: [线性代数]
---

在[[线性代数]]中，**线性方程组**是指形如
\[
\left\{
\begin{alignedat}{4}
  a_{1, 1} x_1
  & {} + {}
  & a_{1, 2} x_2
  & {} + {}
  & \cdots
  & {} + {}
  & a_{1, n} x_n
  & = b_1 ,
  \\
  a_{2, 1} x_1
  & {} + {}
  & a_{2, 2} x_2
  & {} + {}
  & \cdots
  & {} + {}
  & a_{2, n} x_n
  & = b_2 ,
  \\
  \rlap{\hspace{-2em}$\dotsc {} \dotsc$,}
  \\
  a_{m, 1} x_1
  & {} + {}
  & a_{m, 2} x_2
  & {} + {}
  & \cdots
  & {} + {}
  & a_{m, n} x_n
  & = b_m
\end{alignedat}
\right.
\]
的[[方程组]]，其中 $x_1, \dotsc, x_n$ 是未知量，
而 $a_{i, j}$ 和 $b_i$ 是已知量。

上述方程组也可以用[[矩阵乘法]]表示为
\[
A \vec{x} = \vec{b} ,
\]
其中
\[
A = \begin{bmatrix}
  a_{1, 1} & a_{1, 2} & \cdots & a_{1, n} \\
  a_{2, 1} & a_{2, 2} & \cdots & a_{2, n} \\
  \vdots & \vdots & \ddots & \vdots \\
  a_{m, 1} & a_{m, 2} & \cdots & a_{m, n}
\end{bmatrix} ,
\qquad
\vec{x} = \begin{bmatrix}
  x_1 \\ x_2 \\ \vdots \\ x_n
\end{bmatrix} ,
\qquad
\vec{b} = \begin{bmatrix}
  b_1 \\ b_2 \\ \vdots \\ b_m
\end{bmatrix} .
\]

## 解法

（暂时参见：[线性方程组](/books/线性代数/矩阵与线性方程组/线性方程组/)）

```terms
线性方程组:
  en: system of linear equations
  fr: système d'équations linéaires :f
  de: lineares Gleichungssystem :n
  ja: 線<せん>型<けい>方<ほう>程<てい>式<しき>系<けい>
  ko: 선형 방정식계 (線形方程式系)
```
