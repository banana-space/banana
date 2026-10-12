---
title: 半群作用同余
aliases: [S-同余]
categories: [半群论]
navboxes: [半群论]
---

**$S$-同余**是$S$-系上在[[幺半群]]$S$作用下不变的[[等价关系]]，
用来诱导[[商半群作用|商 $S$-系]]。

$S$-同余可以视为[[同余]]概念的推广。

## 定义

::: definition [$S$-同余]
设$\lambda$是左$S$-系$A$上的等价关系，倘若对任意$s\in S$，有
\[
(a,b)\in\lambda\implies(sa,sb)\in\lambda,\quad\forall a,b\in A
\]
那么称$\lambda$为$A$上的同余。

同样地可以对右$S$-系定义同余。
:::

## 性质

利用$S$-同余可以诱导[[商半群作用|商 $S$-系]]。可以通过直接验证得到：

::: proposition
$\lambda$是左$S$-系$A$上的同余。若在[[商集]]$A/\lambda$上定义
\[
s(a\lambda)=(sa)\lambda,\quad\forall s\in S, a\in A,
\]
则$A/\lambda$成为左$S$-系，称为$A$关于$\lambda$的商系。其中
$a\lambda$表示$a$在等价关系$\lambda$下的[[等价类]]$[a]_\lambda$。
:::

## 例子

- 自然数集$\mathbb{N}$关于普通乘法构成一幺半群，自然是
  一个$\mathbb{N}$-系。现在对[[自然数]]$m$定义等价关系$\lambda_m$为
  \[
  (a,b)\in\lambda_m\Longleftrightarrow a\equiv b\pmod{m},
  \]
  则$\lambda_m$是一个$\mathbb{N}$-同余。
  这说明$S$-同余确实是同余概念的推广。
