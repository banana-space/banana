---
title: 幺半函子
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，给定两个[[幺半范畴]]，我们可以定义它们之间的具有额外结构的[[函子]]，
使对应范畴的幺半结构被保持。

一个幺半函子包含一个函子和两个自然同构。并满足类似幺半范畴中的五边形公理和三角形公理的相容性条件。

## 想法

保持群结构的映射称为群同态。
幺半范畴作为幺半群的[[范畴化]]，也要定义保持幺半结构的函子。
给定两个幺半范畴 $(\mathcal C, \otimes,\mathbb{1},\alpha,l, r)$ 和
$(\mathcal D, \odot,\mathbf{1},\beta, l', r')$，
直觉上，保持幺半结构似乎意味着
\[
F(X)\otimes F(Y) = F(X \otimes Y),\quad F(\mathbb{1}) = \mathbf{1}.
\]
然而，范畴学允许将严格相等放松为自然同构。且类似幺半范畴与幺半群的关系，相容性条件也变得更复杂。

## 定义

::: definition [幺半函子]
给定两个幺半范畴 $(\mathcal C, \otimes,\mathbb{1},\alpha,l, r)$ 和
$(\mathcal D, \odot,\mathbf{1},\beta, l', r')$，
一个幺半函子是一个三元组$(F, \eta, \iota)$，其中
- $F:\mathcal{C}\rightarrow\mathcal{D}$是一个函子。
- $\eta_{X, Y}:F(X)\odot F(Y) \simeq F(X\otimes Y)$是对$\mathcal C$中$X$和$Y$的自然同构，
- $\iota:\mathbf{1}\simeq F(\mathbb{1})$

且对任意$\mathcal{C}$中的$X, Y, Z$，满足相容性条件
\[
\begin{tikzcd}
  {(F(X)\odot F(Y)) \odot F(Z)} & {F(X)\odot (F(Y) \odot F(Z))} \\
  {F(X\otimes Y) \odot F(Z)} & {F(X)\odot F(Y\otimes Z)} \\
  {F((X\otimes Y)\otimes Z)} & {F(X\otimes (Y\otimes Z))}
  \arrow["{\beta_{F(X), F(Y), F(Z)}}", from=1-1, to=1-2]
  \arrow["{\eta_{X, Y}\otimes \mathrm{id}_{FZ}}"', from=1-1, to=2-1]
  \arrow["{\mathrm{id}_{FX}\otimes \eta_{Y,Z}}", from=1-2, to=2-2]
  \arrow["{\eta_{X\otimes Y, Z}}"', from=2-1, to=3-1]
  \arrow["{\eta_{X, Y\otimes Z}}", from=2-2, to=3-2]
  \arrow["{F(\alpha_{X, Y, Z})}"', from=3-1, to=3-2]
\end{tikzcd}
\]
\[
\begin{tikzcd}
  {F(1)\odot F(X)} & {F( 1 \otimes X)} \\
  {\mathbf{1}\odot F(X)} & {F(X)}
  \arrow["{\eta_{1, X}}", from=1-1, to=1-2]
  \arrow["{F(l_X)}", from=1-2, to=2-2]
  \arrow["{\iota \odot F(X)}", from=2-1, to=1-1]
  \arrow["{l'_{F(X)}}"', from=2-1, to=2-2]
\end{tikzcd}
\]
与
\[
  \begin{tikzcd}
  {F(X) \odot F(1)} & {F(X\otimes 1)} \\
  {F(X) \odot \mathbf{1}} & {F(X)}
  \arrow["{\eta_{X, 1}}", from=1-1, to=1-2]
  \arrow["{F(r_X)}", from=1-2, to=2-2]
  \arrow["{  F(X)\odot\iota}", from=2-1, to=1-1]
  \arrow["{r'_{F(X)}}"', from=2-1, to=2-2]
\end{tikzcd}.
\]
:::

## 例子

- $G$是群，
  由[[群表示范畴]]$\mathsf{Rep}(G)$到[[向量空间|向量空间范畴]]$\mathsf{Vect}$
  的[[遗忘函子]]是幺半函子，它进一步是[[对称幺半函子]]。
- 由群同态$H\rightarrow G$诱导的[[群表示|限制函子]]$\mathrm{Res}^H_G$是幺半函子。
- $H$是[[Hopf 代数]]，
  由$H$的[[表示范畴]]到[[向量空间|向量空间范畴]]$\mathsf{Vect}$的[[遗忘函子]]是幺半函子。
- 取值为$\mathcal{C}$的$n$维拓扑场论$Z:\mathsf{Cob}_n\rightarrow \mathcal{C}$是**幺半函子**，
  它进一步是[[对称幺半函子]]。

```terms
幺半函子:
  en: monoidal functor
```
