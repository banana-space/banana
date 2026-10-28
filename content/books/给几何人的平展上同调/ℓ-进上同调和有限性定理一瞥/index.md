---
title: '$\ell$-进上同调和有限性定理一瞥'
---

<problems>
- 有限性定理的证明中，同构 $H^i_{\operatorname{ét}}(X,\mathbb{Z}_{\ell})\cong\varprojlim_nH^i_{\operatorname{ét}}(X,\ell^{n-1}\ell\mathbb{Z}/\ell^n\mathbb{Z})$ 右端的系数似乎应为 $\ell\mathbb{Z}/\ell^n\mathbb{Z}$；图表中竖直方向的序列（含乘 $\ell$ 映射）似乎也不构成短正合列。
</problems>

我们来定义非挠层的上同调！

::: definition
设$X$是概形且$\ell$是（异于概形点剩余类域特征的）素数，定义$\ell$-进上同调为$\mathbb{Z}_{\ell}$-模
\[
H^i_{\operatorname{ét}}(X,\mathbb{Z}_{\ell}):=\varprojlim_nH^i_{\operatorname{ét}}(X,\mathbb{Z}/\ell^n\mathbb{Z}).
\]
可以扩展到
$H^i_{\operatorname{ét}}(X,\mathbb{Q}_{\ell}):=H^i_{\operatorname{ét}}(X,\mathbb{Z}_{\ell})\otimes_{\mathbb{Z}_{\ell}}\mathbb{Q}_{\ell}$。
:::

::: lemma
设$M=\varprojlim_nM_n$其中$M_n$是有限$\mathbb{Z}/\ell^n\mathbb{Z}$-模，
则$M$为有限生成$\mathbb{Z}_{\ell}$-模当且仅当$M/\ell M$有限。
:::

::: proof
如果$M$为有限生成$\mathbb{Z}_{\ell}$-模则显然$M/\ell M$有限。
反之假设$M/\ell M$有限，要证明$M$为有限生成$\mathbb{Z}_{\ell}$-模。
我们断言典范映射$\gamma:M\to \widehat{M}:=\varprojlim_nM/\ell^nM$是同构。

因为$\ell^nM$在Hausdorff空间$M$内紧，故闭集。
而$\gamma(M)$在$\widehat{M}$内稠密且为紧集的像，故$\gamma$是满射，因此只需要
证明$\gamma$是单的。注意到$\ker\gamma=\bigcap_{n=0}^{\infty}\ell^nM$，故单射是显然的，因此断言成立。

取连续$\mathbb{Z}_{\ell}$-线性满射
$\mathbb{Z}_{\ell}^{\oplus r}\twoheadrightarrow(\mathbb{Z}/\ell\mathbb{Z})^{\oplus r}\twoheadrightarrow M/\ell M$，
根据Nakayama引理不难提升到满射
\[
\mathbb{Z}_{\ell}^{\oplus r}\twoheadrightarrow(\mathbb{Z}/\ell^n\mathbb{Z})^{\oplus r}
\twoheadrightarrow M/\ell^nM.
\]
故类似断言证明的拓扑叙述得到连续满射$\mathbb{Z}_{\ell}^{\oplus r}\twoheadrightarrow\widehat{M}$，
因此成立。
:::

::: theorem [有限性定理] {@ell-adic-fg}
设$X$是可分闭域$k$上的紧合概形，
则对于任何$i$都有$H^i_{\operatorname{ét}}(X,\mathbb{Z}_{\ell})$是有限生成$\mathbb{Z}_{\ell}$-模。
:::

::: proof
根据上述引理，只需证明有正合列
\[
H^i_{\operatorname{ét}}(X,\mathbb{Z}_{\ell})\stackrel{\ell}{\longrightarrow} H^i_{\operatorname{ét}}(X,\mathbb{Z}_{\ell})
\to H^i_{\operatorname{ét}}(X,\mathbb{Z}/\ell\mathbb{Z}).
\]
考虑图表
\[
\begin{tikzcd}
  && 0 \\
  0 & {\ell\mathbb{Z}/\ell^n\mathbb{Z}} & {\mathbb{Z}/\ell^n\mathbb{Z}} & {\mathbb{Z}/\ell\mathbb{Z}} & 0 \\
  0 & {\ell^{n-1}\mathbb{Z}/\ell^n\mathbb{Z}} & {\mathbb{Z}/\ell^n\mathbb{Z}}
  \arrow[from=2-1, to=2-2]
  \arrow[from=2-2, to=2-3]
  \arrow[from=2-3, to=2-4]
  \arrow[from=2-4, to=2-5]
  \arrow["\ell", from=3-3, to=2-3]
  \arrow[from=3-1, to=3-2]
  \arrow[from=3-2, to=3-3]
  \arrow[from=2-3, to=1-3]
\end{tikzcd}
\]
为两个短正合列。我们记上下的短正合列为(1)而左右走向的正合列为(2)。
首先注意到
$\varprojlim_nH^i_{\operatorname{ét}}(X,\ell^{n-1}\mathbb{Z}/\ell^n\mathbb{Z})=0$（因为转移映射全是
$0$），
根据短正合列(1)得到
\[
H^i_{\operatorname{ét}}(X,\mathbb{Z}_{\ell})\cong\varprojlim_nH^i_{\operatorname{ét}}(X,\ell^{n-1}\ell\mathbb{Z}/\ell^n\mathbb{Z}).
\]
再根据正合列(2)得到
\[
\cdots\to H^i_{\operatorname{ét}}(X,\ell\mathbb{Z}/\ell^n\mathbb{Z})\stackrel{\ell}{\longrightarrow} H^i_{\operatorname{ét}}(X,\mathbb{Z}/\ell^n\mathbb{Z})
\to H^i_{\operatorname{ét}}(X,\mathbb{Z}/\ell\mathbb{Z})\to\cdots.
\]
取极限即可（不难验证，见[@Ful15, 引理 10.1.3]）。
:::
