---
title: 球面同伦群
categories: [同伦论]
navboxes: [代数拓扑]
---

在[[代数拓扑]]中，
**球面同伦群**也就是[[球面]] $S^n$ 的[[同伦群]] $\pi_k (S^n)$。
这些同伦群是十分基本的对象，但计算起来非常困难。

下表展示了一部分球面同伦群。
其中灰色的部分较容易得出为 $0$，
用线连起来的部分是 [[Freudenthal 纬悬定理]]给出的同构，
它们也给出了球面的[[稳定同伦群]]。
其余部分则杂乱无章，难以计算。

```tikz
\begin{tikzpicture}[scale=.6]
    \fill[black!8] (0, -1) -- (1, -1) -- (1, -2) -- (2, -2) -- (2, -3) -- (3, -3) -- (3, -4) -- (4, -4) -- (4, -5) -- (5, -5)
        -- (5, -6) -- (6, -6) -- (6, -7) -- (7, -7) -- (7, -8) -- (8, -8) -- (8, -9) -- (9, -9) -- (9, -10) -- (0, -10) -- cycle;
    \fill[black!8] (1, 0) -- (1, -1) -- (2, -1) -- (2, -2) -- (10, -2) -- (10, 0) -- cycle;
    \foreach \i in {1, ..., 9} \draw[black!20] (-2, -\i) -- (10, -\i);
    \foreach \i in {1, ..., 9} \draw[black!20] (\i, 2) -- (\i, -10);
    \draw (-2, 0) -- (10, 0) (0, 2) -- (0, -10);
    \draw (0, -1) -- (1, -1) -- (1, -2) -- (3, -2) -- (3, -3) -- (5, -3) -- (5, -4) -- (7, -4) -- (7, -5) -- (9, -5) -- (9, -6) -- (10, -6);
    \foreach \i in {0, ..., 9} \node at (-1, -\i-.5) {$S^{\i}$};
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

## 性质

### 基本性质

::: proposition
对[[自然数]] $m < n$，同伦群 $\pi_m(S^n) = 0$。
:::

::: proof
由 [[Whitney 逼近定理]]，
任意[[连续映射]] $S^m \to S^n$ 均同伦于光滑映射。
低维流形到高维流形的光滑映射必然不满
（例如由 [[Sard 定理]]），
任意光滑映射 $S^m \to S^n$ 均[[穿过]] $\mathbb{R}^n$，因此[[零伦映射|零伦]]。
由此任意映射 $S^m \to S^n$ 零伦，定理得证。
:::

::: proposition
对正整数 $n$，$\pi_n(S^n) = \mathbb{Z}$。
:::

::: proof
由 [[Hurewicz 定理]]，$\pi_n(S^n) = H_n(S^n) = \mathbb{Z}$。
:::

::: proposition
对正整数 $n \geq 2$，$\pi_n(S^1) = 0$。
:::

::: proof
注意到 $\mathbb{R} \to S^1$ 是万有覆叠，
$\mathbb{R} \to S^1$ 诱导了高于一阶的同伦群同构。
而 $\mathbb{R}$ 可缩，因此结论成立。
:::

```terms
球面同伦群:
  en: homotopy groups of spheres
  fr: groupes d'homotopie des sphères
```
