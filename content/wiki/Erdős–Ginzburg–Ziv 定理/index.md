---
title: Erdős–Ginzburg–Ziv 定理
categories: [初等数论]
---

<problems>
- “证明”一节第一个证明中，展开后对 $a_1,\cdots,a_k$ 求和的条件 $a_1+\cdots+a_k=p$ 似乎应为 $a_1+\cdots+a_k=p-1$；另外记号 $a_i$ 同时表示序列中的数与指数，$x_i$ 未作说明。
</problems>

**Erdős–Ginzburg–Ziv 定理**，简写作**EGZ 定理**，是[[加性数论]]中的重要定理，
它刻画了有限[[循环群]] $\mathbb Z_m$中至少多长的序列才能保证其中存在$m$元子序列零和。
在组合数学中我们也把研究这类问题的理论称作**零和 Ramsey 理论**。

## 陈述

组合数学中，我们一般用$\mathbb Z_m$记循环群$\mathbb Z/m\mathbb Z$，
用$|S|$记一个有限集$S$的元素数量。

::: theorem [Erdős–Ginzburg–Ziv] {@EGZ-定理}
设$m$是正整数，那么任意$a_1,\cdots,a_{2m-1}\in \mathbb Z_m$，
总能找到$I\subset\{1,\cdots,2m-1\}$满足$|I|=m$且
\[
\sum_{i\in I}a_i=0.
\]
:::

更加一般地，对一个Abel 群$G$，我们用${\rm EGZ}(G)$表示最小的正整数$e$使得任意$a_1,\cdots,a_e\in G$
都存在其中$|G|$个使得它们在$G$的加和为$0$。
注意到$m-1$个$0$和$m-1$个$1$中不能找到$m$者加和为$m$的倍数，
因此我们也可以将上述定理重新陈述为${\rm EGZ}(\mathbb Z_m)=2m-1$。

作为推论，关于一般的${\rm EGZ}(G)$，我们有一个直接的界：

::: corollary
对任意有限Abel 群$G$，有${\rm EGZ}(G)\le 2|G|-1$。
:::

::: proof
使用归纳法，根据有限生成Abel 群的结构定理设$G$可以写成循环群$C_k$的直和$\bigoplus_{k=1}^s C_k$，
我们对直和项的数量$s$归纳。奠基$s=1$是 @EGZ-定理，不妨设$s\ge 2$并记$G=C_1\oplus G_1$，
现在对$2|C_1|\cdot|G_1|-1$长度的序列，可以每次取出$|C_1|$个元素在第一个分量上求和为$0$，注意到
\[
2|C_1|\cdot|G_1|-1=|C_1|\cdot(2|G_1|-2)+2|C_1|-1,
\]
所以这个操作可以进行$2|G_1|-1$次，于是将每次取出的部分作为一组，将每一组的和作为$G_1$上的元素，
于是立刻化为$s-1$时$G_1$的归纳假设，从而命题得证。
:::

## 证明

所有的证明都用上面推广一样的技巧化归为$m=p$是素数的情况，对$m$归纳然后不断取出素因子。
接下来才出现各种花样。首先我们来看第一个证明，它利用反证和精妙的有限域变换。

::: proof [第一个证明]
假设定理不成立，这说明$2p-1$个数$a_1,\cdots,a_{2p-1}$的一切$p$元子序列的和都不是$p$的倍数，考虑
\[
S:=\sum_{1\le i_1<\cdots<i_p\le 2p-1}(x_{i_1}+\cdots+x_{i_p})^{p-1}.
\]
一方面它依反证假设以及[[Fermat 小定理]]，求和的每项都是$1$，于是这个和同余$\binom{2p-1}{p-1}$模$p$，
即
\[
S\equiv\binom{2p-1}{p-1}=\frac{(2p-1)(2p-2)\cdots(p+1)}{(p-1)(p-2)\cdots 1}\equiv 1\pmod p.
\]
另一方面，我们可以依定义将$S$展开，得到
\[
S=\sum_{\small\begin{matrix}1\le i_1<\cdots<i_p\le 2p-1\\ a_1+\cdots+a_p=p-1\\ a_1,\cdots,a_p\in\mathbb Z_{\ge 0}\end{matrix}}x_{i_1}^{a_1}\cdots x_{i_p}^{a_p}\cdot\frac{(p-1)!}{a_1!\cdots a_p!}.
\]
然后注意到$p$个数求和为$p-1$，于是自然只考察其中正的项，
假设$a_i$为正者对应的下标为$j_1<\cdots<j_k$。于是求和写作
\[
S=\sum_{1\le i_1<\cdots<i_p\le 2p-1}\sum_{1\le j_1<\cdots<j_k\le p}\sum_{a_1+\cdots+a_k=p,a_l\in\mathbb Z_+}x_{i_{j_1}}^{a_1}\cdots x_{i_{j_k}}^{a_k}\cdot\frac{(p-1)!}{a_1!\cdots a_k!}.
\]
改变求和顺序，先固定下集合$\{i_{j_1},\cdots,i_{j_k}\}$，在这种视角下每项因为其他$i_s$的选取，
被求和了$\binom{2p-1-k}{p-k}$次，于是
\[
S=\sum_{1\le i_1<\cdots<i_k}\sum_{a_1+\cdots+a_k=p,a_l\in\mathbb Z_+}x_{i_1}^{a_1}\cdots x_{i_k}^{a_k}\cdot\frac{(p-1)!}{a_1!\cdots a_k!}\cdot\binom{2p-1-k}{p-k}.
\]
但是注意到对$k=1,\cdots,p-1$总有$\binom{2p-1-k}{p-k}$是$p$的倍数，因此$p|S$，
与前面所得$S\equiv 1\pmod p$矛盾。
:::
