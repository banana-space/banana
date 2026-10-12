---
title: 完全图
categories: [图论]
navboxes: [图论]
---

**完全图**是指所有顶点都两两连接的[[图]]。
有 $n$ 个顶点的完全图记为 $K_n$，
它有 $\binom{n}{2} = n (n - 1) / 2$ 条边。
下图展示了几个完全图的例子。

```tikz
\begin{tikzpicture}[line width=1]
    \begin{scope}[shift={(0, -.2)}]
        \draw (90:.8) -- (-150:.8) -- (-30:.8) -- cycle;
        \fill[white, draw=black] (90:.8) circle (.08);
        \fill[white, draw=black] (-150:.8) circle (.08);
        \fill[white, draw=black] (-30:.8) circle (.08);
        \node at (0, -1) {$K_3$};
    \end{scope}
    \begin{scope}[shift={(2.5, 0)}]
        \draw (45:1) -- (135:1) -- (-135:1) -- (-45:1) -- cycle
            (45:1) -- (-135:1) (135:1) -- (-45:1);
        \fill[white, draw=black] (45:1) circle (.08);
        \fill[white, draw=black] (135:1) circle (.08);
        \fill[white, draw=black] (-135:1) circle (.08);
        \fill[white, draw=black] (-45:1) circle (.08);
        \node at (0, -1.2) {$K_4$};
    \end{scope}
    \begin{scope}[shift={(5, 0)}]
        \draw (90:.9) -- (162:.9) -- (-126:.9) -- (-54:.9) -- (18:.9) -- cycle
            (90:.9) -- (-126:.9) -- (18:.9) -- (162:.9) -- (-54:.9) -- cycle;
        \fill[white, draw=black] (90:.9) circle (.08);
        \fill[white, draw=black] (162:.9) circle (.08);
        \fill[white, draw=black] (-126:.9) circle (.08);
        \fill[white, draw=black] (-54:.9) circle (.08);
        \fill[white, draw=black] (18:.9) circle (.08);
        \node at (0, -1.2) {$K_5$};
    \end{scope}
\end{tikzpicture}
```

## 定义

::: definition [完全图]
称[[有限图]] \( G = (V, E, d) \) 为**完全图**，如果满足以下条件：

- 映射 $d \colon E \to \bigl< {V \atop 2} \bigr>$
  是[[单射]]，其[[像]]为
  \[
  \Set{ [(x, y)] \in \Bigl< {V \atop 2} \Bigr> | x \neq y }.
  \]
  换言之，$G$ 的每一对顶点之间恰有一条边相连。

对[[自然数]] $n$，将有 $n$ 个顶点的完全图记为 $K_n$。
:::

## 例子

- $K_0$ 是[[空图]]。

- 对 $n \geq 1$，完全图 $K_n$ 是 $(n-1)$ 维[[单形]]的边构成的图。
  例如，\( K_1 \) 只有一个顶点且没有边；
  \( K_2 \) 有两个顶点和一条边，形成一条线段；
  \( K_3 \) 有三个顶点和三条边，形成一个三角形；
  \( K_4 \) 有四个顶点和六条边，形成一个四面体。

## 性质

- 完全图 $K_n$ 有 $n$ 个顶点和 $n (n-1) / 2$ 条边。

- 当 $n \geq 1$ 时，$K_n$ 是[[连通图]]。

- 完全图 $K_n$ 是[[平面图]]当且仅当 $n \leq 4$。

```terms
完全图:
  en: complete graph
```
