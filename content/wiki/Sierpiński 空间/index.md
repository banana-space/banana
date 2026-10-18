---
title: Sierpiński 空间
aliases: [Sierpinski 空间]
categories: [一般拓扑]
---

**Sierpiński 空间**是一个[[拓扑空间]]，
它只有两个点，其中一个点是[[开集]]，而另一个点不是。

## 定义

::: definition [Sierpiński 空间]
**Sierpiński 空间**是[[拓扑空间]] $S = \{ 0, 1 \}$，
其所有[[开集]]是 $\varnothing, \{ 1 \}, \{ 0, 1 \}$。
:::

Sierpiński 空间可以画成如下的样子：

```tikz
\begin{tikzpicture}
    \shade [shading = radial, inner color = black!25] (0, 0) circle (2);
    \fill (0, 0) circle (.06);
    \node at (.2, -.2) {$0$};
    \node at (1, 1) {$1$};
\end{tikzpicture}
```

其中，点 $0$ 画得比较清晰，因为它是[[闭点]]；
点 $1$ 画得比较模糊，因为它是[[普遍点]]。

## 例子

- 任何[[离散赋值环]]的[[谱 (交换代数)|谱]]都同胚于 Sierpiński 空间。

## 性质

::: proposition
设 $X$ 是[[拓扑空间]]，$U \subset X$ 是其子集。
则 $U$ 是[[开集]]当且仅当映射
\[
\begin{aligned}
  \chi_U \colon X & \to S, \\
  x & \mapsto
  \begin{cases}
    1, & x \in U, \\
    0, & x \notin U
  \end{cases}
\end{aligned}
\]
是[[连续映射]]，其中 $S$ 是 Sierpiński 空间。
从而，对任意拓扑空间 $X$，有[[一一对应]]
\[
\begin{aligned}
  \{ X \text{\small\ 中的开集} \}
  & \simeq \mathsf{Top} (X, S), \\
  U & \leftrightarrow \chi_U.
\end{aligned}
\]
:::

::: proposition
Sierpiński 空间上取值于[[范畴]] $\mathcal{C}$ 的[[层]]
其实就是 $\mathcal{C}$ 的一个[[态射]]。
:::

```terms
Sierpiński 空间:
  en: Sierpiński space
  de: Sierpiński-Raum
  fr: espace de Sierpiński
```
