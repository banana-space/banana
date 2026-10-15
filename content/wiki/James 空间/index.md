---
title: James 空间
---

**James 空间**是数学家 Robert James 发现的一个实 [[Banach 空间]]。
它与其二重对偶空间存在等距同构，但前者到后者的自然嵌入不是满射：在自然嵌入下，
前者的像是后者的余 $1$ 维子空间。
特别地，James 空间是一个与二重对偶空间等距同构但不[[自反 Banach 空间|自反]]的 Banach 空间的例子。

## 构造

James 空间 $J$ 是
\[
c_0= \{ (a_n)\in \mathbb R^{\mathbb Z_+} : \lim_{n\to +\infty} a_n=0 \}
\]
的一个子空间（但范数另作定义）。
记 $\mathbb Z_+$ 的至少有两个元素的有限子集的全体为 $P$。
对于 $\mathbf p\in P$，设 $\mathbf p= \{p_1,p_2,\cdots, p_n \}$（$p_i< p_{i+1}$）。
对于 $x\in c_0$，记
\[
\|x\|_{\mathbf p}= \sqrt{ \sum_{i=1}^{n-1} (x_{p_{i+1}} - x_{p_i} )^2 + (x_{p_n} - x_{p_1} )^2   } .
\]
则 James 空间定义为
\[
J= \{ x\in c_0: \sup_{\mathbf p\in P} \|x\|_{\mathbf p} < +\infty \},
\]
范数就是
\[
\|x\|_J = \sup_{\mathbf p\in P} \|x\|_{\mathbf p} .
\]

::: proposition (观察)
在 $\|\cdot \|_J$ 下，$J$ 确实是一个赋范线性空间。
:::

::: proof
对  $\mathbf p= \{p_1,p_2,\cdots, p_n \} \in P$，
考虑 $\mathbb R^n$ 上的三角不等式知
$\|x_1+ x_2\|_{\mathbf p}\le \|x_1\|_{\mathbf p} + \|x_2\|_{\mathbf p}$。
先对右边关于 $\mathbf p\in P$ 取上确界再对左边关于 $\mathbf p\in P$ 取上确界，
知 $\|x_1 +x_2\|_J \le \|x_1\|_J + \|x_2\|_J$。
这亦证明了 $J$ 对于加法封闭。余下性质的验证是容易的。
:::
