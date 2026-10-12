---
title: Catalan 数
categories: [组合函数]
notices:
  - name: 问题
    items:
      - “计数结果”一节中括号序列的条件“对任何 $0 \leq i \leq n$”似乎应为 $0 \leq i \leq 2n$（序列共有 $2n$ 个符号）。
navboxes: [计数组合]
---

**Catalan 数**
是[[计数组合]]中的一个计数序列，记为 $C_n$，其前几项为
\[
C_0 = 1, \quad
C_1 = 1, \quad
C_2 = 2, \quad
C_3 = 5, \quad
C_4 = 14, \quad \ldots
\]

Catalan 数见于许多计数结果，包括凸多边形的三角剖分数目、二叉树的数目、括号序列的数目等。

## 定义

::: definition [Catalan 数]
对[[自然数]] $n$，
**Catalan 数** $C_n$ 定义为自然数
\[
C_n = \frac{1}{n + 1}\binom{2n}{n},
\]
其中 $\binom{2n}{n}$ 是[[二项式系数]]。
:::

## 性质

### 基本性质

- Catalan 数满足如下递推公式：$C_0 = 1$，且当 $n \geq 1$ 时，
  \[
  C_n = \sum_{k = 0}^{n-1} C_{k} C_{n-1-k} \, .
  \]

- Catalan 数的[[生成函数]]为
  \[
  C(x) = \frac{1 - \sqrt{1 - 4x}}{2x} \, .
  \]

::: proof
由二项式级数
\[
\frac{1}{\sqrt{1-4 x}}=
\sum_{k=0}^{\infty}\binom{2 k}{k}x^k,
\quad|x|<\frac{1}{4}
\]
从$0$到$x$积分，得
\[
\frac{1-\sqrt{1-4 x}}{2}=
\sum_{k=0}^{\infty}\frac1{k+1}\binom{2 k}{k}x^{k+1}
\]
除以$x$，得
\[
\frac{1-\sqrt{1-4 x}}{2x}=
\sum_{k=0}^{\infty}\frac1{k+1}\binom{2 k}{k}x^k
\]
:::

### 计数结果

- 对整数 $n \geq 3$，凸 $n$ 边形的三角剖分的数目是 $C_{n-2}$。
  这里，三角剖分是指选取该 $n$ 边形的 $(n - 3)$ 条两两不相交的对角线的方法，
  从而这些对角线将 $n$ 边形划分为 $(n - 2)$ 个三角形。

```tikz
\begin{tikzpicture}\catcode`|=0
 |usetikzlibrary{shapes.geometric}
 |def|cat#1#2#3#4#5#6{|node[regular polygon, regular polygon sides=6, minimum size=1cm,draw](s){};
 |draw(s.corner #1)--(s.corner #2)(s.corner #3)--(s.corner #4)(s.corner #5)--(s.corner #6);}
  |matrix[row sep=1mm,column sep=1mm,
  execute at begin cell=|cat,
  execute at empty cell={|node[minimum size=1cm]{};}](a)
  {
    515253&414246&313536&626364&131415\\
    &&\\
    133664&266335&622553&511442&155224\\
  };
  |matrix[execute at begin cell=|cat,column sep=1mm]at(a)
  {
    242526&133551&244662&311446\\
  };
\end{tikzpicture}
```

- 对 $n \geq 0$，具有 $n$ 个元素的二叉树的数目是 $C_n$。
  这里，二叉树是指由形如 $(a_1, \dotsc, a_n)$ 的序列构成的集合 $T$，
  其中 $n \geq 0$，且每个 $a_i \in \{ 0, 1 \}$，
  使得若 $n \geq 1$ 且 $(a_1, \dotsc, a_n) \in T$，
  则 $(a_1, \dotsc, a_{n-1}) \in T$。
  例如，具有 $2$ 个元素的二叉树有 $\{ (), (0) \}$ 和 $\{ (), (1) \}$。

```tikz
\begin{tikzpicture}[scale=.5,very thick,level/.style={sibling distance=60mm/#1}]
\tikzstyle{vertex}=[draw,fill=black!15,circle,minimum size=10pt,inner sep=0pt]
\node [vertex] (r){}
  child {
    node [vertex] (a) {}
    child {
      node [vertex] {}
      child {
        node [vertex] {}
        child {node [vertex] {}}
        child {node [vertex] {}}
      }
      child {node [vertex] {}}
    }
    child {
      node [vertex] {}
      child {node [vertex] {}}
      child {node [vertex] {}}
    }
  }
  child {
    node [vertex] {}
    child {
      node [vertex] {}
      child {node [vertex] {}}
    }
    child {
      node [vertex] {}
      child {node [vertex] {}}
      child {node [vertex] {}}
    }
  };
\end{tikzpicture}
```

- 对 $n \geq 0$，具有 $n$ 对括号的括号序列的数目是 $C_n$。
  这里，括号序列是指形如 `(()())()` 的序列，
  其中要求括号能正确地配对，也就是对任何 $0 \leq i \leq n$，
  其前 $i$ 个符号中左括号的数量不少于右括号的数量。
  例如，具有 $2$ 对括号的括号序列有 `(())` 和 `()()`。
- 在$\mathbb{N}^2$中，由 $(0,0)$ 到 $(m,n)$ 的最短路径共有 $\binom{m+n}m$ 条。
  由 $(0,0)$ 到 $(n,n)$ 且恒满足 $y\leqslant x$ 的最短路径的数目为 $C_n$。

```terms
Catalan 数:
  en: Catalan number
  fr: nombre de Catalan :m
  de: Catalan-Zahl :f
  ja: Catalan 数<すう>
  ko: Catalan 수
```
