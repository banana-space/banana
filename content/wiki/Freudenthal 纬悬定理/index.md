---
title: Freudenthal 纬悬定理
categories: [同伦论]
navboxes: [代数拓扑]
---

在[[代数拓扑]]中，
**Freudenthal 纬悬定理**是关于[[球面同伦群]]的结论，
它说明对任何 $n$，有
\[
\pi_{2n+2} (S^{n+2}) \simeq
\pi_{2n+3} (S^{n+3}) \simeq
\pi_{2n+4} (S^{n+4}) \simeq \cdots .
\]
这给出了球面的第 $n$ 个[[稳定同伦群]] $\pi_n (\mathbb{S})$，
其中 $\mathbb{S}$ 是[[球谱]]。

下图给出了一些球面的同伦群，其中斜线连起来的点是由 Freudenthal 纬悬定理给出的同构。
灰色代表容易得出为 $0$ 的那部分同伦群，而其余部分则杂乱无章，难以计算。

```tikz
\begin{tikzpicture}[scale=.6]
    \fill[black!8] (0, -1) -- (1, -1) -- (1, -2) -- (2, -2) -- (2, -3) -- (3, -3) -- (3, -4) -- (4, -4) -- (4, -5) -- (5, -5)
        -- (5, -6) -- (6, -6) -- (6, -7) -- (7, -7) -- (7, -8) -- (8, -8) -- (8, -9) -- (9, -9) -- (9, -10) -- (0, -10) -- cycle;
    \fill[black!8] (1, 0) -- (1, -1) -- (2, -1) -- (2, -2) -- (10, -2) -- (10, 0) -- cycle;
    \foreach \i in {1, ..., 9} \draw[black!20] (-2, -\i) -- (10, -\i);
    \foreach \i in {1, ..., 9} \draw[black!20] (\i, 2) -- (\i, -10);
    \draw (-2, 0) -- (10, 0) (0, 2) -- (0, -10);
    \draw (0, -1) -- (1, -1) -- (1, -2) -- (3, -2) -- (3, -3) -- (5, -3) -- (5, -4) -- (7, -4) -- (7, -5) -- (9, -5) -- (9, -6) -- (10, -6);
    \foreach \i in {0, ..., 9} \node at (-1, -\i-.55) {$S^{\i}$};
    \foreach \i in {0, ..., 9} \node at (\i+.5, 1.1) {$\pi_{\i}$};
    \foreach \i in {0, ..., 3} {
        \pgfmathsetmacro{\z}{7-\i}
        \draw[thick] (2.5 + 2*\i, -2.5 - \i) -- (10.2, -10.2 + \i);
        \foreach \j in {\i, ..., \z} \fill (2.5 + \i + \j, -2.5 - \j) circle (.1);
    }
    \node[anchor=west] at (10.3, -10.5) {$\mathbb{Z}$};
    \node[anchor=west] at (10.3, -9.5) {$\mathbb{Z}_2$};
    \node[anchor=west] at (10.3, -8.5) {$\mathbb{Z}_2$};
    \node[anchor=west] at (10.3, -7.5) {$\mathbb{Z}_{24}$};
    \node[black!30, scale=3] at (2.5, -7.5) {$0$};
    \node[black!30, scale=2] at (5.5, -1) {$0$};
    \node[scale=.6] at (.5, -.5) {$\{*,*\}$};
    \node at (1.5, -1.5) {$\mathbb{Z}$};
    \node at (3.5, -2.5) {$\mathbb{Z}$};
    \node at (4.5, -2.5) {$\mathbb{Z}_2$};
    \node at (5.5, -2.5) {$\mathbb{Z}_2$};
    \node at (6.5, -2.5) {$\mathbb{Z}_{12}$};
    \node at (7.5, -2.5) {$\mathbb{Z}_2$};
    \node at (8.5, -2.5) {$\mathbb{Z}_2$};
    \node at (9.5, -2.5) {$\mathbb{Z}_3$};
    \node at (5.5, -3.5) {$\mathbb{Z}_2$};
    \node at (6.5, -3.5) {$\mathbb{Z}_{12}$};
    \node at (7.5, -3.5) {$\mathbb{Z}_2$};
    \node at (8.5, -3.5) {$\mathbb{Z}_2$};
    \node at (9.5, -3.5) {$\mathbb{Z}_3$};
    \node[scale=.6] at (7.5, -4.5) {$\mathbb{Z} {\times} \mathbb{Z}_{12}$};
    \node at (8.5, -4.5) {$\mathbb{Z}_2^2$};
    \node at (9.5, -4.5) {$\mathbb{Z}_2^2$};
    \node at (9.5, -5.5) {$\mathbb{Z}_2$};
\end{tikzpicture}
```

## 定理及证明

::: theorem [Freudenthal]
设 $X$ 为 [[$n$-连通空间|$n$-连通]]的[[带点拓扑空间|带点]] [[CW 复形]]。
考虑[[纬悬–环路伴随]]的[[伴随单位]] $X \to \Omega \Sigma X$。
则它诱导的[[同伦群]]的映射
\[
\pi_k (X) \longrightarrow
\pi_k (\Omega \Sigma X) \simeq \pi_{k+1} (\Sigma X)
\]
当 $k \leq 2n$ 时为[[同构]]，当 $k = 2n + 1$ 时为[[满射]]。

特别地，取 $X = S^{n+1}$，知 $k \leq 2n$ 时，
[[纬悬]]映射诱导同构
\[
\pi_k (S^{n+1}) \simeq \pi_{k+1} (S^{n+2})
\simeq \pi_{k+2} (S^{n+3}) \simeq \cdots.
\]
:::

::: proof
对同伦推出方块
\[
\begin{tikzcd}
  X\ar[r]\ar[d] \ar[dr, phantom, pos=.8, "\lrcorner"] &*\ar[d]\\
  *\ar[r]&\Sigma X
\end{tikzcd}
\]
使用 [[Blakers–Massey 定理]]即可。
:::

## 参考文献

原始文献：

```bibliography
Freudenthal1937:
  type: article
  author: Hans Freudenthal
  title: Über die Klassen der Sphärenabbildungen. I. Große Dimensionen
  year: 1937
  journaltitle: Compos. Math.
  volume: 5
  pages: '299-314'
  url: http://archive.numdam.org/article/CM_1938__5__299_0.pdf
  zbmath: '63.1161.02'
```

```terms
Freudenthal 纬悬定理:
  en: Freudenthal suspension theorem
  de: Freudenthalscher Einhängungssatz :m
  fr: théorème de suspension de Freudenthal :m
```
