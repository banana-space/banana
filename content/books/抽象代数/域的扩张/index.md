---
title: 域的扩张
---

除了常见的域${\mathbb{Q}},{\mathbb{R}},{\mathbb{C}}$或者${\mathbb{F}_p}$，
在后面的章节中我们还会研究**函数域**。给定域$K$，$K[X]$是$K$上的多项式环，我们定义
\[
K(X)={\rm Frac}\big(K[X]\big)=\left\{\frac{P(X)}{Q(X)}\big| P,Q\in K[X], Q\neq 0\right\}.
\]
按照定义，$\frac{P_1}{Q_1}= \frac{P_2}{Q_2}$，其中，$P_1 Q_2=P_2Q_1$。
我们把$K(X)$称作是$K$上的 **（一元）函数域**。

首先引入域的特征的概念。对任意域$K$，有自然的环同态
\[
\iota\colon\mathbb{Z}\rightarrow K,
\]
其中，$\iota(n)=n\cdot 1_{K}$，这里$1_K$为$K$的单位元。
若$\iota$为单射，则称$K$的**特征为零**并记作${\rm Char}(K)=0$；
否则，存在唯一的素数$p$，使得${\rm Ker}(\iota)=p\mathbb{Z}$，
即$p\cdot 1_K=0$，此时称$K$的**特征为$p$** 并记作${\rm Char}(K)=p$。
很明显，$\mathbb{Q},\mathbb{R},\mathbb{C}$是特征为零的域而$
  {\mathbb{Z}/p\mathbb{Z}}
$的特征为$p$。

- 如果${\rm Char}(K)=0$，环同态$\iota\colon\mathbb{Z}\rightarrow K$可以延拓到${\mathbb{Q}}$上，
  即$\iota\big(\frac{m}{n}\big)=\frac{\iota(m)}{\iota(n)}$，其中，$m,n \in {\mathbb{Z}}$，
  即有自然的域同态：
  \[
  {\mathbb{Q}}\longrightarrow K.
  \]

  所以，$K$总（以唯一的方式）包含${\mathbb{Q}}$作为其子域。

- 如果${\rm Char}(K)=p$，环同态$\iota\colon\mathbb{Z}\rightarrow K$给出了域同态
  \[
  \overline{\iota}\colon{\mathbb{F}_p}={
    {\mathbb{Z}/p\mathbb{Z}}
  } \rightarrow K,
  \]
  此时$K$总（以唯一的方式）包含${\mathbb{F}_p}$作为其子域。

我们称${\mathbb{Q}}$和${\mathbb{F}_p}$分别为以上两种情形下$K$的**本原域**。本原域在域扩张下不变：

::: lemma
给定域扩张$
  {L/K}
$，则${\rm Char}(K)={\rm Char}(L)$。
:::

::: proof
考虑环同态的交换图表：
\[
\begin{tikzcd}
 {\mathbb{Z}} \arrow[r, "\iota"] \arrow[rd, "\iota'",swap] & L\\
&K  \arrow[u]    \end{tikzcd}
\]
因为域扩张映射$K\rightarrow L$是单射，所以${\rm Ker}(\iota)={\rm Ker}(\iota')$。命题得证。
:::

::: example
域$K$的特征为$p$，所谓的Frobenius映射定义如下：
\[
{\rm Frob}\colon K\longrightarrow K,  \ \ x\mapsto x^p.
\]
那么，${\rm Frob}$是域同态。

实际上，对任意的$x,y\in K$，我们有
\[
\begin{aligned}
{\rm Frob}(x+y)=(x+y)^p=x^p+y^p+\sum_{k=1}^{p-1}{p \choose k} x^ky^{p-k}.
\end{aligned}
\]
当$1\leqslant k\leqslant p-1$时，$p\mid {p \choose k} $，所以上述求和中的项均为$0$。从而，
\[
\begin{aligned}
{\rm Frob}(x+y)=x^p+y^p={\rm Frob}(x)+{\rm Frob}(y).
\end{aligned}
\]
这说明${\rm Frob}$是域同态。
:::
