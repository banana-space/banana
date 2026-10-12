---
title: 共鸣定理
categories: [泛函分析]
navboxes: [泛函分析]
---

在[[泛函分析]]中，
**共鸣定理**，也称为**一致有界定理**，
说的是如果 [[Banach 空间]] 之间的一族有界线性算子在每一点处都是有界的，
则这族算子是[[一致有界]]的。

## 叙述与证明

::: theorem [共鸣定理]
设 $X,Y$ 分别是 [[Banach 空间]]和[[赋范线性空间]]，
它们之间的连续[[线性算子]] 构成集合 $\mathscr L(X,Y)$。
如果 $W\subset \mathscr L(X,Y)$ 满足对任意 $x\in X$
都有 $\sup\limits_{A\in W}\|Ax\|<\infty$，则
存在 $M>0$ 使得 $\|A\|\leq M,\forall A\in W$。
:::

可以用 [[Baire 纲定理]]或范数的等价性证明定理。

::: proof
（用范数等价）定义
\[
\|x\|_W=\|x\|+\sup_{A\in W}\|Ax\|
\]
显然 $\|\cdot\|_W$ 是范数，且比 $\|\cdot\|$ 强。
接下来证明 $(X,\|\cdot\|_W)$ 是[[完备空间|完备]]的。

如果 $\|x_m-x_n\|_W\to 0,m,n\to\infty$，
则显然 $\{x_n\}$ 对 $\|\cdot\|$ 而言是
[[Cauchy 列]]，从而 $x_n\to x,n\to\infty$。
而对任意 $\varepsilon>0$，存在 $N$ 使得
\[
\sup_{A\in W}\|Ax_m-Ax_n\|<\varepsilon,\quad
\forall m,n\geq N
\]
对 $m$ 取极限，得
\[
\sup_{A\in W}\|Ax_n-Ax\|<\varepsilon, \quad
\forall n\geq N
\]
所以 $\|x_n-x\|_W\to 0,n\to\infty$。这就
证明了完备性。根据[[等价范数定理]]，
$\|\cdot\|_W,\|\cdot\|$ 等价，从而存在常数
$M$ 使得
$\sup\limits_{A\in W}\|Ax\|\leq M\|x\|,\forall x\in X$，
所以 $\|A\|\leq M,\forall A\in W$。
:::

::: proof
（用 [[Baire 纲定理]]）记[[闭集]]
\[
X_n=\left\{x\in X \mid \sup_{A\in W}\|Ax\|\leq n\right\}
\]
则 $X=\bigcup_{n=1}^\infty X_n$。因为 $X$
是完备的，由 Baire 纲定理知它是第二纲集，即存在一个
$X_n$ 不是无处稠密的。这样，存在 $x_0\in X_n$
和 $\varepsilon>0$ 使得
\[
B(x_0,2\varepsilon)\subset X_n
\]
设 $A\in W,u\in X$ 满足 $\|u\|=1$，则
\[
\begin{aligned}
  \|Au\|&=\varepsilon^{-1}\|A(x_0+\varepsilon u)-Ax_0\|\\
      &\leq\varepsilon^{-1}(\|A(x_0+\varepsilon u)\|+\|Ax_0\|)\\
      &\leq 2n\varepsilon^{-1}
\end{aligned}
\]
其中最后一个不等号是因为
$x_0+\varepsilon u,x_0\in B(x_0,2\varepsilon)\subset X_n$。
这就证明了 $\|A\|\leq 2n\varepsilon^{-1},\forall A\in W$。
:::

## 应用

可以用共鸣定理证明下面的 [[Banach–Steinhaus 定理]]。

::: theorem [Banach–Steinhaus 定理]
设 $X,Y$ 分别是 [[Banach 空间]]和[[赋范线性空间]]，
$M$ 是 $X$ 的一个稠密子集，考虑一族算子
$(A_n \in \mathscr{L} (X, Y))_{n \in \mathbb{N}}$
以及 $A\in \mathscr L(X,Y)$。则它们满足
\[
\lim_{n\to\infty} A_n x=Ax,\quad
\forall x\in X
\]
当且仅当满足以下条件：

- $\{\|A_n\|\}$ 有界。

- 上式对任何 $x\in M$（而无需对任何 $x \in X$）成立。

:::

此外，还可以用共鸣定理证明[[数值分析]]中的
[[Lax 等价定理]]。在[[泛函分析]]的其他证明
中共鸣定理也时有出现。

```terms
共鸣定理:
  en: uniform boundedness principle
```
