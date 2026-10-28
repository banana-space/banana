---
title: 收敛（随机变量）
aliases: [随机变量的收敛性]
categories: [概率论]
---

<problems>
- “定义”一节中实值随机变量依分布收敛的定义似乎应只要求在 $X$ 的累积分布函数的连续点 $x$ 处成立；其后所说“依分布收敛是指累积分布函数的处处收敛”“等价于累积分布函数的一致收敛”在极限分布函数不连续时似乎不成立（例如 $X_n = 1/n$、$X = 0$）。
- “性质”一节的 Portemanteau 定理中，条件 (3) 与 (4) 的不等式似乎写反了：通常的形式是对开集 $O$ 有 $\liminf_{n\to\infty}\mathbb{P}(X_n\in O)\geq\mathbb{P}(X\in O)$，对闭集 $F$ 有 $\limsup_{n\to\infty}\mathbb{P}(X_n\in F)\leq\mathbb{P}(X\in F)$。
- “性质”一节的 Prokhorov 定理中，与一致胎紧等价的似乎应是在依分布收敛意义下“相对紧”，而不是“紧集”。
</problems>

在概率论中，随机变量的**收敛性**有诸多刻画，
例如在分析学中常见的几种收敛方式（几乎处处收敛、依 $L^p$ 范数收敛等），
以及在概率中应用广泛的[[依分布收敛]]。

本文总结了常见的有关随机变量的收敛性概念，以及它们之间的关系。

## 定义

在以下的讨论中，为了记号的一致性，如无特殊声明，我们只考虑实值随机变量的情形。

::: definition [依概率$1$收敛]
设 $(X_n)_{n\in\mathbb{N}}$ 是[[概率空间]]
$(\Omega,\mathscr{F},\mathbb{P})$ 中的随机变量列。
则$X_n$**依概率$1$收敛**于$X$是指
$$
\mathbb{P}(\lim_{n\to\infty}X_n(\omega)=X(\omega))=1.
$$
记作 $X_n\stackrel{a.s.}{\longrightarrow}X$。
:::

这即是分析学中所说[[几乎处处收敛]]。

::: definition [依概率收敛]
设 $(X_n)_{n\in\mathbb{N}}$ 是概率空间
$(\Omega,\mathscr{F},\mathbb{P})$ 中的随机变量列。
则$X_n$**依概率收敛**于$X$是指
$$
\forall\epsilon>0\quad \lim_{n\to\infty}
\mathbb{P}(|X_n(\omega)-X(\omega)|>\epsilon)=0.
$$
记作 $X_n\stackrel{\mathbb{P}}{\longrightarrow}X$。
:::

这即是分析学中所说[[依测度收敛]]。

::: definition [$L^p$收敛]
设 $(X_n)_{n\in\mathbb{N}}$ 是
$L^p(\Omega,\mathscr{F},\mathbb{P})$ 中的随机变量列。
则$X_n$**依$L^p$收敛**于$X$是指
$$
\lim_{n\to\infty}\mathbb{E}[|X_n-X|^p]=0.
$$
记作 $X_n\stackrel{L^p}{\longrightarrow}X$。
:::

这即是说它在 [[$L^p$ 空间]]中[[依范数收敛]]。

::: definition [依分布收敛]
设 $(X_n)_{n\in\mathbb{N}}$ 是概率空间
$(\Omega,\mathscr{F},\mathbb{P})$ 中的随机变量列。
则$X_n$**依分布收敛**于$X$是指
$$
\lim_{n\to\infty}\mathbb{P}(X_n\leq x)=\mathbb{P}(X\leq x).
$$
记作 $X_n\stackrel{d}{\longrightarrow}X$。
:::

在这种情况下，依分布收敛是指累积分布函数的处处收敛。
（事实上其等价于累积分布函数的一致收敛）

在更一般的情况下，我们可以考虑取值在[[波兰空间]]$\mathscr{P}$
（可分完备的度量空间）中的随机变量列并取度量诱导的拓扑。我们有：

::: definition [依分布收敛]
设 $(X_n)_{n\in\mathbb{N}}$ 是概率空间
$(\Omega,\mathscr{F},\mathbb{P})$ 中的 $\mathscr{P}$ 值随机变
量列，$(\mu_n)_{n\in\mathbb{N}}$是它在$\mathscr{P}$上诱导的测度。
则$X_n$依分布收敛于$X$是指$\mu_n$弱收敛于$\mu$，亦即对于一切
$\mathscr{P}$上有界连续函数$\varphi$有
$$
\lim_{n\to\infty}\mathbb{E}[\varphi(X_n)]=
\mathbb{E}[\varphi(X)].
$$
:::

依概率$1$收敛与依概率收敛可以毫无难度地推广到波兰空间中去。

## 性质

在实值随机变量的情况下，或以上收敛都可以定义的情况下，我们有各收敛的强弱性
$$
（X_n\stackrel{a.s.}{\longrightarrow}X）\Longrightarrow
（X_n\stackrel{\mathbb{P}}{\longrightarrow}X）\Longrightarrow
（X_n\stackrel{d}{\longrightarrow}X）
$$
$$
（X_n\stackrel{L^p}{\longrightarrow}X）\Longrightarrow
（X_n\stackrel{\mathbb{P}}{\longrightarrow}X）
$$
通常我们没有几乎处处收敛与$L^p$收敛之间的关系，也没有反向的强弱关系。
但是正如我们熟悉的那样，对于依概率收敛和依$L^p$收敛的随机变量列，我们
可以找到一个几乎处处收敛的子列。

另外，我们有与 $L^p$ 收敛息息相关的概念：

::: definition [一致可积]
一族$L^1$中的随机变量$(X_i)_{i\in I}$一致可积是指：
$$
\lim_{M\to+\infty}\sup_{i\in I}
\mathbb{E}[|X_i|\textbf{1}_{|X_i|>M}]=0
$$
:::

从而我们有如下的结论：

::: proposition
设 $(X_n)_{n\in\mathbb{N}}$ 是
$L^1(\Omega,\mathscr{F},\mathbb{P})$ 中的随机变量列，
且$X_n\stackrel{\mathbb{P}}{\longrightarrow}X$。则以下条件等价：

1. $X_n\stackrel{L^1}{\longrightarrow}X$；

1. $(X_n)_{n\in\mathbb{N}}$ 一致可积；

1. $\mathbb{E}[|X_n|]\to\mathbb{E}[|X|]<+\infty$。

:::

这个结论可以容易地推广到$L^p$中去，因而我们有在（$L^p$）一致可积的条件下依概率收敛
与依$L^p$收敛的等价关系。

对于依分布收敛，由于它所描述的收敛性与之前的收敛差别太大，所以一般没有
任何可以提供反向包含关系的条件，但是我们仍然有：

::: proposition
$$
（X_n\stackrel{\mathbb{P}}{\longrightarrow}0）\Longleftrightarrow
（X_n\stackrel{d}{\longrightarrow}0).
$$
:::

同时，我们可以用特征函数刻画依分布收敛的等价条件：

::: theorem [连续性定理]
设 $(X_n)_{n\in\mathbb{N}}$ 和 $X$ 是概率空间
$(\Omega,\mathscr{F},\mathbb{P})$ 中的随机变量，
$\varphi_n(t)\colon=\mathbb{E}[e^{itX_n}]$ 为 $X_n$ 的特征函数，$\varphi$ 为 $X$ 的特征函数。
则 $X_n\stackrel{d}{\longrightarrow}X$ 等价于
$\varphi_n(t)\to\varphi(t)$在所有$\varphi$的连续点上成立。
:::

进一步地，我们有依分布收敛的等价刻画：

::: theorem [Portemanteau]
设 $(X_n)_{n\in\mathbb{N}}$ 是概率空间
$(\Omega,\mathscr{F},\mathbb{P})$ 中的 $\mathscr{P}$ 值随机变量，
则以下条件等价：

(1) $X_n\stackrel{d}{\longrightarrow} X$；

(2) 对于任意$\mathscr{P}$上的有界一致连续函数$\varphi$，
    $$
    \lim_{n\to\infty}\mathbb{E}[\varphi(X_n)]
    = \mathbb{E}[\varphi(X)];
    $$

(3) 对于任意$\mathscr{P}$中开集$O$，
    $$
    \limsup_{n\to\infty}\mathbb{P}(X_n\in O)\leq
    \mathbb{P}(X\in O) ;
    $$

(4) 对于任意$\mathscr{P}$中闭集$F$，
    $$
    \liminf_{n\to\infty}\mathbb{P}(X_n\in F)\geq
    \mathbb{P}(X\in F) ;
    $$

(5) 对于任意$\mathscr{P}$中满足$\mathbb{P}(X\in\partial G)=0$的 Borel 集 $G$，
    $$
    \lim_{n\to\infty}\mathbb{P}(X_n\in G)=
    \mathbb{P}(X\in G) ;
    $$
:::

这一定理是对依分布收敛的泛函刻画，它指出依分布收敛是在“值域上的”收敛。

此外，我们有对依分布收敛下紧性的刻画：

::: theorem [Prokhorov]
一族$(\Omega,\mathscr{F},\mathbb{P})$中的$\mathscr{P}$
值随机变量$(X_i)_{i\in I}$在依分布收敛意义下是紧集当且仅当
这族随机变量一致胎紧，亦即：
对于任意$\epsilon>0$，存在一个紧集$K\subset\mathscr{P}$，
$$
\sup_{i\in I}\mathbb{P}(X_i\notin K)\leq\epsilon
$$
:::

类似于 Portemanteau 定理，它告诉我们当一族随机变量在值域上分布得足够集中
的情况下，它们就是依分布收敛下的紧集。

```terms
随机变量的收敛:
  en: convergence of random variables
  de: Konvergenz von Zufallsvariablen
  fr: convergence de variables aléatoires
```
