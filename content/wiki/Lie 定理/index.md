---
title: Lie 定理
categories: [Lie 理论]
navboxes: [Lie 理论]
---

<problems>
- “证明”一节中 Lie 定理的证明最后一步断言对 $v\in V_i$ 有 $\rho(X)v-v\in V_1$，这似乎不成立；论证所需的似乎是 $\rho(X)v\in V_i$（由 $\overline{V_i}$ 的不变性及 $V_1\subset V_i$ 得到）。
</problems>

在 [[Lie 理论]]中，**Lie 定理**说的是，
对于零[[特征 (代数)|特征]][[代数闭域]]上的有限维[[可解 Lie 代数]]的有限维[[线性表示]]，
总可找一组[[基]]，使表示的矩阵均成为上三角矩阵。

## 叙述

::: theorem [Lie]
设 $\mathfrak{g}$ 是零特征代数闭域 $K$ 上的有限维可解 Lie 代数，$\rho : \mathfrak{g}\to
\operatorname{End}(V)$ 是它的一个 $n$ 维表示，那么存在 $V$ 的一组基，使得对于任意
$X\in\mathfrak{g}$，$\rho(X)$ 在这组基下的矩阵均是上三角的。具体地说，存在 $n$ 个线性函数
$\lambda_i\in \mathfrak{g}^*$ 和 $V$ 的一组基 $v_1,\ldots,v_n\in V$，使得
\[
\rho(X)v_i=\lambda_i(X)v_i\pmod{\langle v_1,\ldots,v_{i-1} \rangle},
\quad 1\le i\le n.
\]

换句话说，存在
$V$ 的一个[[旗|完备旗]] $V=V_n\supset V_{n-1}\supset \cdots \supset V_1$，
使得对 $1\le i \le n$，$\dim V_i=i$ 而每个 $V_i$ 均是 $V$ 的子表示。
:::

::: remark
如果 $\mathfrak{g}$ 选为 $\mathbb{C}$ 上交换的矩阵 Lie 代数，
则这个定理蕴含了线性代数中的一个基本结果，
即 $\mathbb{C}$ 上两两交换的方阵可以同时上三角化。
:::

::: corollary
零特征代数闭域上有限维可解 Lie 代数的有限维不可约线性表示一定是一维的。
:::

Lie 代数的幂零性和可解性在域扩张下并不改变。将 Lie 定理用于伴随表示，就得到：

::: corollary
零特征域上有限维 Lie 代数 $\mathfrak{g}$ 可解等价于它的导出 Lie 代数 $[\mathfrak{g},\mathfrak{g}]$
幂零。
:::

## 证明

::: lemma
条件同前，则存在 $\mathfrak{g}$ 中所有元的公共特征向量 $w\in V$，
也就是说存在线性函数 $\lambda\in \mathfrak{g}^*$ 使
对所有 $X\in\mathfrak{g}$ 都有
\[
\rho(X)w=\lambda(X)w.
\]
:::

::: proof [引理的证明]
对 $\mathfrak{g}$ 的维数归纳，一维的情形是显然的。
因为 $\mathfrak{g}$ 可解，所以 $[\mathfrak{g},\mathfrak{g}]
\subsetneq \mathfrak{g}$。$\mathfrak{g}$ 的任何含有 $[\mathfrak{g},\mathfrak{g}]$
的子空间都是理想。于是可以取余维数为 $1$ 的理想 $\mathfrak{h}\subsetneq \mathfrak{g}$。
由归纳假设，存在 $\lambda\in\mathfrak{h}^*$ 和 $w_0\in V$，$w_0\ne 0$，
使对于任何 $Y\in \mathfrak{h}$，
$\rho(Y)w_0=\lambda(Y)w_0$。任取 $X_0\in \mathfrak{g}\setminus \mathfrak{h}$，
于是 $\mathfrak{g}=\mathfrak{h}\oplus KX_0$。

**目标**：用 $w_0$ 构造一个 $X_0$ 作用不变的
$\mathfrak{h}$ 公共特征子空间，从而在其中找到 $X_0$ 和 $\mathfrak{h}$ 的公共特征向量。

为此，
对 $i\in\mathbb{N}$ 归纳定义 $w_{i+1}=\rho(X_0)w_i$ 并令 $W_i=\langle w_0,\ldots, w_i\rangle$。
当 $i$ 充分大时，$w_0,\ldots,w_i$ 将线性相关。取使 $w_0,\ldots,w_i$ 线性无关的最大的 $i$，记为 $p$。
于是 $W_p$ 是一个 $X_0$-不变的子空间。

记 $W_{-1}=\{0\}$。我们断言对任何 $Y\in \mathfrak{h}$ 有等式

```math {@invariant-subspace}
\rho(Y)w_i=\lambda(Y)w_i\pmod{W_{i-1}},\quad i=0,1,2,\ldots,p.
```

当 $i=0$ 时，这由 $w_0$ 的选取保证。当 $i>0$ 时，

```math {@invariant-subspace-proof}
\rho(Y)w_i=\rho(Y)\rho(X_0)w_{i-1}
=\rho(X_0)\rho(Y)w_{i-1}+\rho([Y,X_0])w_{i-1},
```

注意 $[Y,X_0]\in \mathfrak{h}$，故可用数学归纳法证明 @invariant-subspace
对
$i=1,2,\ldots,p$ 成立。
这样，$W_p$ 也是 $\mathfrak{h}$ 不变的子空间，下面再证明它其实是其公共特征子空间。

因为 $W_p$ 是 $\mathfrak{g}$ 不变的子空间，对于 $X,Y\in \mathfrak{g}$，
应有 $\operatorname{Tr}([X,Y]|_{W_p})=0$，另一方面
$[X,Y]\in\mathfrak{h}$，于是 $\operatorname{Tr}([X,Y]|_{W_p})=\dim W_p\cdot \lambda([X,Y])
=(p+1)\lambda([X,Y])$。因为 $K$ 是特征 $0$ 的，所以 $\lambda([X,Y])=0$。
现在回过来看 @invariant-subspace-proof，再次使用数学归纳法，
我们发现 @invariant-subspace 中的 $\bmod$ 可以去掉，从而 $W_p$ 是
$\mathfrak{h}$ 的公共特征子空间。

因为 $K$ 是代数闭域，$X_0$ 在 $W_p$ 中有非零的特征向量 $w$，对应的特征值为 $\lambda_w$。
我们将 $\lambda$ 延拓到 $\mathfrak{g}$ 使 $\lambda(X_0)=\lambda_w$ 并取这个 $w$ 为所要的 $w$，
就证明了引理。
:::

::: proof [Lie 定理的证明]
对 $n$ 归纳，$n=1$ 时定理显然。$n>1$ 时，
取引理中的 $w$，令 $V_1=\langle w\rangle$，则
$V/V_1$ 是 $\mathfrak{g}$ 的一个 $(n-1)$ 维表示，由归纳假设可找到一个完备旗
$\overline{V_2}\subset \cdots \subset \overline{V_n}=V/V_1,\dim \overline{V_i}=i-1$，
每个 $\overline{V_i}$
均是 $\mathfrak{g}$ 不变的。
取 $V$ 中对应的旗 $V_2\subset \cdots \subset V_n, \dim V_i=i$，则
$V_1\subset V_2$，且因为对于任取的 $X\in\mathfrak{g}$ 和向量 $v\in V_i\quad(1<i\le n)$，
都有 $\rho(X)v-v\in
V_1\subset V_i$，从而 $V_i$ 也均是 $\mathfrak{g}$ 不变的。这就证明了定理。
:::

## 正特征的反例

细究上面的证明，我们发现当 $W_p$ 的维数等于特征时证明会失效。也就是说，在正特征的情形，
如果 $V$ 的维数小于特征，证明仍然适用。下面我们举一个 $V$ 的维数等于特征的反例。

::: example
对于特征为 $p>0$ 的域 $K$ 和 $p$ 维向量空间 $K[x]/(x^p)$，考虑由 $1$、$x$、$\frac{d}{dx}$
三种左作用生成的 Lie 代数。通过计算可以验证它是幂零 Lie 代数，但是没有特征向量。

注：如果 $p=2$，这个 Lie 代数其实就是 $\mathfrak{sl}(2,K)$。
:::
