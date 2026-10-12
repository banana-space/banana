---
title: 商半群作用
aliases: [商 S-系]
categories: [半群论]
navboxes: [半群论]
---

**商$S$-系**类似于[[商群]]或[[商环]]，是由[[半群作用同余|$S$-同余]]诱导的
[[半群作用|$S$-系]]。

## 定义

::: definition
设$\lambda$是左$S$-系$A$上的同余。若在[[商集]]$A/\lambda$上定义
\[
s[a]_\lambda=[sa]_\lambda,\quad\forall s\in S, a\in A,
\]
则$A/\lambda$成为左$S$-系，称为$A$关于$\lambda$的商系。
:::

## 性质

::: theorem [同态基本定理]
设$f \colon A\to B$是$S$-同态，$\lambda$是$A$上的同余且满足
\[
(a,b)\in\lambda \implies f(a)=f(b),
\]
那么存在唯一的$S$-同态$g$使下图交换
\[
\begin{tikzcd}
  &
  B\\
  A
  \ar[ur, "f"]
  \ar[r, "i"]&
  A/\lambda \rlap{ ,}
  \ar[u, "g"']
\end{tikzcd}
\]
其中$i$是自然同态。

若定义
\[
\operatorname{Ker} f=\{(a,a')\in A\times A|f(a)=f(a')\},
\]
则当$f$为满同态时还有
\[
A/\operatorname{Ker} f\cong B.
\]
:::

::: proof
定义$g \colon A/\lambda \to B$为
\[
g([a]_\lambda) = f(a),
\]
可以验证$g$确实是一个映射且是一个$S$-同态，还使上面的图交换。

假如$g' \colon A/\lambda \to B$也满足$g'i=f$，则对任意$a\in A$，有
\[
g'([a])=g'i(a)=f(a)=gi(a)=g([a]),
\]
这给出$g'=g$。

当$\lambda=\operatorname{Ker} f$时，我们可以证明$g$是单射，因为
\[
g([a])=g([a']) \implies f(a)=f(a')\implies [a]=[a'].
\]

另外显然当$f$是满同态时$g$还是满同态，
从而$g$是$A/\operatorname{Ker} f$到$B$的一个同构。
:::
