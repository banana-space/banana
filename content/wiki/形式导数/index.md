---
title: 形式导数
categories: [一般代数]
---

在分析学中，我们可以通过计算[[导数]]来研究曲线 $y=f(x)$ 的局部情况。如果 $f(\alpha)=f'(\alpha)=0$，
则我们知道 $f(x)$ 在 $\alpha$ 处有一“高阶零点”，即它在 $\alpha$ 点处的 [[Taylor 展开]]没有常数项
和一次项。如果 $f(x)$ 是多项式，这就意味着 $f(x)$ 在 $\alpha$ 处有重根。

为了把上面的方法推广到一般多项式环 $R[X]$ 上去，我们需要一个不依赖于[[极限]]概念定义的导数，
这就是**形式导数**。

## 定义

::: definition
在多项式环 $R[X]$ 上，按如下规则可定义一个 $R$-线性映射：
\[
\begin{aligned}
  \partial\colon  R[X] & \to  R[X]\\
   f(X)=\sum_{k=0}^n a_k X^k & \mapsto  f'(X)=\sum_{k=1}^{n} ka_kX^{k-1}.
\end{aligned}
\]
它满足 [[Leibniz 法则]] $(fg)'=f'g+fg'$。$f'$ 称为 $f$ 的形式导数。
:::

::: remark
如果 $R=\mathbb{R}$，则 $f'$ 所定义的函数就是 $f$ 定义的函数的[[导数]]。
:::

## 性质

<see>[[可分扩张]]</see>

::: proposition
域 $K$ 上非零多项式 $f(x)\in K[x]$ 在其分裂域中没有重根当且仅当它和它的形式导数互素。
:::
