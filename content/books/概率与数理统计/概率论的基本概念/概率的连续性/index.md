---
title: '（${}^\star$）概率的连续性'
---

概率的连续性是证明概率论中许多重要结论的基本工具，本节对其进行简要介绍。

::: definition
设$E_1,E_2,E_3,\ldots$为一列事件。

1. 我们称事件列$E_1,E_2,E_3,\ldots$是递增的，
   若对任意正整数$n$，均有$E_n\subseteq E_{n+1}$。

   对于递增的事件列$E_1,E_2,E_3,\ldots$，我们定义其极限为
   \[
   \lim_{n\rightarrow\infty} E_n
   =\bigcup_{n=1}^\infty E_n.
   \]

2. 我们称事件列$E_1,E_2,E_3,\ldots$是递减的，
   若对任意正整数$n$，均有$E_{n+1}\subseteq E_{n}$。

   对于递减的事件列$E_1,E_2,E_3,\ldots$，我们定义其极限为
   \[
   \lim_{n\rightarrow\infty} E_n
   =\bigcap_{n=1}^\infty E_n.
   \]

:::

::: theorem
设$(\Omega,\mathcal{F},\mathbb{P})$为一概率空间，
$E_1,E_2,E_3,\ldots$为$\mathcal{F}$中一列递增或递减的事件，则
\[
\mathbb{P}\!\left(
\lim_{n\rightarrow\infty} E_n
\right)
=\lim_{n\rightarrow\infty} \mathbb{P}(E_n).
\]
:::

::: proof
首先考虑$E_1,E_2,E_3,\ldots$递增的情形。令
\[
F_n = E_n\backslash\bigcup_{i=1}^{n-1} F_i,\qquad n=1,2,\ldots
\]
（当$n=1$时我们取$\bigcup_{i=1}^{n-1} F_i=\varnothing$），
则不难看出对任意正整数$n$，有
\[
\bigcup_{i=1}^n F_i
= F_n\cup \bigcup_{i=1}^{n-1} F_i
= \left(E_n\backslash\bigcup_{i=1}^{n-1} F_i\right)\cup \bigcup_{i=1}^{n-1} F_i
=E_n
\]
以及$F_{n}=E_{n}\backslash E_{n-1}$（这里取$E_0=\varnothing$）。
从而对于任意正整数$i<j$，有
\[
\begin{aligned}
F_i\cap F_j
={} & \left(E_i\backslash E_{i-1}\right)\cap
\left(E_j\backslash E_{j-1}\right) \\
={} &
\left(E_i\cap E_{i-1}^c\right)\cap
\left(E_j\cap E_{j-1}^c\right) \\
\subseteq{} &
E_i\cap E_{j-1}^c
=\varnothing,
\end{aligned}
\]
其中最后一步用到了$E_i\subseteq E_{j-1}$，
因此$F_1,F_2,F_3,\ldots$两两互斥。此外，
\[
\begin{aligned}
\bigcup_{n=1}^\infty F_n
={} &
\left\{\omega\in \Omega \mid
\text{存在正整数 $n$ 使得 $\omega\in E_n\backslash E_{n-1}$}
\right\} \\
={} &
\left\{\omega\in \Omega \mid
\text{存在正整数 $n$ 使得 $\omega\in E_n$} \right\} \\
={} &
\bigcup_{n=1}^\infty E_n
=\lim_{n\rightarrow\infty} E_n.
\end{aligned}
\]
故由概率的可数可加性得
\[
\begin{aligned}
\mathbb{P}\!\left(
\lim_{n\rightarrow\infty} E_n
\right)
={} &
\mathbb{P}\!\left(\bigcup_{n=1}^\infty F_n\right)
=
\sum_{n=1}^\infty \mathbb{P}(F_n) \\
={} &
\lim_{n\rightarrow\infty} \sum_{i=1}^n \mathbb{P}(F_i)
=
\lim_{n\rightarrow\infty}
\mathbb{P}\!\left(
\bigcup_{i=1}^n F_i
\right)
=\lim_{n\rightarrow\infty}
\mathbb{P}(E_n).
\end{aligned}
\]

而若$E_1,E_2,E_3,\ldots$为递减的事件列，
则不难看出$E_1^c,E_2^c,E_3^c,\ldots$递增，且
\[
\lim_{n\rightarrow\infty} E_n
=\bigcap_{n=1}^\infty E_n
=\left(\bigcup_{n=1}^\infty E_n^c\right)^{\!c}
=\left(\lim_{n\rightarrow\infty} E_n^c\right)^{\!c},
\]
故由递增情形的结论可得
\[
\mathbb{P}\!\left(\lim_{n\rightarrow\infty} E_n\right)
=1-\mathbb{P}\left(\lim_{n\rightarrow\infty} E_n^c\right)
=1-\lim_{n\rightarrow\infty}
\mathbb{P}(E_n^c)
=\lim_{n\rightarrow\infty}\mathbb{P}(E_n).
\]
定理得证。
:::
