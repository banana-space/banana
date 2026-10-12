---
title: 顶点代数模
categories: [共形场论]
---

**顶点代数模**描述[[顶点代数]]在向量空间上的作用。
对结合代数而言，模的作用满足 $(ab)m=a(bm)$，
从而把代数中的乘法转化为算子的复合。
顶点代数的乘法由场 $Y(a,z)b$ 给出。
为了让这些场作用于另一个空间 $M$，需要指定场 $Y_M(a,z)$，
并要求它们的复合与 $V$ 中的乘法相容。

## 定义

设 $(V,Y,T,\ket{0})$ 为复数域上的顶点代数。

::: definition [顶点代数模]
一个 **$V$-模**是复向量空间 $M$ 连同线性映射
\[
Y_M \colon V \longrightarrow \operatorname{End}(M)[[z,z^{-1}]],
\qquad
a \longmapsto Y_M(a,z)=\sum_{n\in\mathbb{Z}}a^M_{(n)}z^{-n-1},
\]
满足下列条件。

- （**下截断**）对任意 $a\in V$ 和 $m\in M$，有
  \[
  a^M_{(n)}m=0 \quad (n\gg0).
  \]
  等价地，$Y_M(a,z)m\in M((z))$。
  截断阶数可以依赖于 $a$ 和 $m$。

- （**真空**）真空态的作用为恒等算子，即
  \[
  Y_M(\ket{0},z)=\operatorname{id}_M.
  \]

- （**Jacobi 恒等式**）对任意 $a,b\in V$ 和 $m\in M$，有
  \[
  \begin{aligned}
    &x_0^{-1}\delta\left(\frac{x_1-x_2}{x_0}\right)
      Y_M(a,x_1)Y_M(b,x_2)m \\
    &\quad -x_0^{-1}\delta\left(\frac{x_2-x_1}{-x_0}\right)
      Y_M(b,x_2)Y_M(a,x_1)m \\
    &=x_2^{-1}\delta\left(\frac{x_1-x_0}{x_2}\right)
      Y_M(Y(a,x_0)b,x_2)m.
  \end{aligned}
  \]
  这里 $x_0,x_1,x_2$ 是独立的形式变量，
  $\delta(t)=\sum_{r\in\mathbb{Z}}t^r$ 为[[形式 $\delta$ 函数]]。
  三个 delta 核中的差的整数次幂依次按 $x_2$、$x_1$、$x_0$
  的非负幂展开。

:::

右端先在 $V$ 中求 $Y(a,x_0)b$，再将各系数通过 $Y_M$ 作用于 $M$。
具体地，
\[
Y_M(Y(a,x_0)b,x_2)
=\sum_{n\in\mathbb{Z}}Y_M(a_{(n)}b,x_2)x_0^{-n-1}.
\]
模 $M$ 不定义真空向量或平移算子。

## 基本例子

取 $M=V$ 及 $Y_M=Y$，则 $V$ 成为自身的模，称为**伴随模**。
下截断条件与真空条件直接来自顶点代数的公理，
模的 Jacobi 恒等式则是[[顶点代数|顶点代数的 Jacobi 恒等式]]。

## 模同态

设 $M,N$ 为 $V$-模。
若线性映射 $f\colon M\to N$ 满足
\[
f\bigl(Y_M(a,z)m\bigr)=Y_N(a,z)f(m)
\qquad (a\in V,\ m\in M),
\]
则称 $f$ 为 **$V$-模同态**，其中左端的 $f$ 逐系数作用。
比较 $z$ 的各次幂可知，这一条件等价于
\[
f\circ a^M_{(n)}=a^N_{(n)}\circ f
\qquad (a\in V,\ n\in\mathbb{Z}).
\]

## 参考文献

```bibliography
Keller:
  type: preprint
  author: C. A. Keller
  title: Introduction to Vertex Operator Algebras
  note: 第 6 节，定义 6.1
  url: https://archive.math.arizona.edu/cakeller/VertexOperatorAlgebras.pdf
```
