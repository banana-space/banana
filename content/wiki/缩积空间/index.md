---
title: 缩积空间
aliases: [Smash product, 缩积]
categories: [一般拓扑]
navboxes: [一般拓扑]
---

<disambiguation>
关于[[范畴论]]中的缩积，请参见[[缩积（范畴论）]]。
</disambiguation>

[[带点拓扑空间]] $(X, x_0)$ 与 $(Y, y_0)$ 的**缩积空间**
$X \wedge Y$ 是一个新的带点拓扑空间，
是在[[积空间]] $X \times Y$ 中，将 $\{ x_0 \} \times Y$ 与 $X \times \{ y_0 \}$
都缩成一个点，而得到的[[商空间]]，这里该点视为新的基点。
在下图中，被缩成点的部分用粗线标出。

```tikz
\begin{tikzpicture}
  \draw (-2, -2) rectangle (2, 2);
  \draw [line width=1.2] (2, -.5) -- (-2, -.5) node [left] {$y_0$};
  \draw [line width=1.2] (-.9, 2) -- (-.9, -2) node [below] {$x_0$};
  \node at (0, -2.5) {$X$};
  \node at (-2.7, 0) {$Y$};
\end{tikzpicture}
```

缩积也可以对任意一族带点拓扑空间定义。

## 定义

::: definition [缩积空间]
设 $(X, x_0)$ 与 $(Y, y_0)$ 是[[带点拓扑空间]]。
则其**缩积空间**，简称**缩积**，定义为[[商空间]]
\[
X \wedge Y = (X \times Y) \big/
\bigl( (\{ x_0 \} \times Y) \cup (X \times \{ y_0 \}) \bigr).
\]
这里，被缩成点的部分视为 $X \wedge Y$ 的基点，
从而 $X \wedge Y$ 也是带点拓扑空间。

更一般地，设 $I$ 是非空[[集合]]，
$(X_i, x_i)_{i \in I}$ 是一[[族]][[带点拓扑空间]]。
则其**缩积**定义为[[商空间]]
\[
\bigwedge_{i \in I} X_i =
\biggl( \prod_{i \in I} X_i \biggr) \bigg/
\biggl( \bigcup_{i \in I} p_i^{-1} (x_i) \biggr),
\]
这里 $p_i \colon {\prod_{j \in I} X_j} \to X_i$ 是投影。
在缩积中，被缩成点的部分视为其基点，
从而该缩积也是带点拓扑空间。

我们约定，$0$ 个空间的缩积是[[双点空间]] $S^0$。
:::

## 例子

- [[单点空间]]与任何空间 $X$ 的缩积是单点空间。
  [[双点空间]] $S^0$ 与任何空间 $X$ 的缩积是 $X$ 自身。

- [[球面]] $S^n$ 之间的缩积满足 $S^n \wedge S^m \simeq S^{n+m}$。
  特别地，$S^n$ 是 $S^1$ 与自身的 $n$ 重缩积。

```terms
缩积:
  en: smash product
  fr: smash-produit :m
  de: Smash-Produkt :n
```
