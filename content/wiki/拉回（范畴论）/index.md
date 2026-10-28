---
title: 拉回（范畴论）
aliases: [纤维积, Descartes 方块, 拉回图表, 拉回方块]
categories: [范畴论]
navboxes: [范畴论]
---

<disambiguation>
关于其他含义，请参见[[拉回]]。
</disambiguation>

在[[范畴论]]中，**拉回**
（或称**纤维积**、**Descartes 方块**）
是一种[[万有构造]]，
描述的大概是下述情形：

- 在某个[[范畴]]中，我们把对象视为[[空间]]。
  假设有两个[[态射]] $f \colon B \to D$ 与 $g \colon C \to D$，
  这里 $B, C, D$ 都是空间。
  那么，对每个“[[点]]”$d \in D$，
  考虑态射 $f, g$ 的[[纤维]]，即点 $d$ 的原像，我们将其记为 $B_d$ 与 $C_d$。
  我们将 $B$ 视为所有纤维 $B_d$ 拼起来得到的空间，
  而将 $C$ 视为所有 $C_d$ 拼起来得到的空间。
  我们把这两个纤维乘起来，得到 $B_d \times C_d$。
  最后，把所有的乘积 $B_d \times C_d$ 拼起来，得到一个大空间 $B \times_D C$，
  这就是 $B$ 与 $C$ 沿 $D$ 的纤维积。
  我们也有一个态射 $B \times_D C \to D$，
  其在点 $d$ 的纤维就是 $B_d \times C_d$。

  ```tikz
  \begin{tikzpicture}[scale=.9]
          \draw [line width=2] (0, 0) -- (-.4, -2);
          \fill [cyan!7]
              (-2, 1.2) -- (-2.4, -.8) -- (-3.9, .1) -- (-3.5, 2.1);
          \fill [cyan!7]
              (2, 1.2) -- (1.6, -.8) -- (3.1, .1) -- (3.5, 2.1);
          \foreach \i in {1, ..., 3} {
              \draw [thick, cyan!80]
                  (-3.5 - .1 * \i, 2.1 - .5 * \i) -- (-2 - .1 * \i, 1.2 - .5 * \i)
                  (3.5 - .1 * \i, 2.1 - .5 * \i) -- (2 - .1 * \i, 1.2 - .5 * \i);
          }
          \foreach \i in {1, ..., 3} {
              \draw [thick, cyan!80, fill=cyan!10, fill opacity=.75]
                  (-.1 * \i, 4.2 - .5 * \i) -- (1.5 - .1 * \i, 3.3 - .5 * \i) --
                  (-.1 * \i, 2.4 - .5 * \i) -- (-1.5 - .1 * \i, 3.3 - .5 * \i) -- cycle;
          }
          \draw [thick, cyan!80, loosely dashed]
              (-2.2, .2) -- (-.2, -1) -- (1.8, .2) -- (-.2, 1.4) -- cycle
              (-3.7, 1.1) -- (-1.7, 2.3)
              (3.3, 1.1) -- (1.3, 2.3);
          \fill [cyan!80] (-.2, -1) circle (.1);
          \draw [line width=1.2, -stealth] (-2.1, -.9) -- (-1.1, -1.5);
          \draw [line width=1.2, -stealth] (1.5, -.9) -- (.5, -1.5);
          \node [cyan!75!black] at (-.35, -.6) {$d$};
          \node [scale=1.2] at (-.2, -2.5) {$D$};
          \node [scale=1.2] at (-3.4, -.8) {$B$};
          \node [scale=1.2] at (2.7, -.8) {$C$};
          \node [scale=1.2] at (-1.8, -1.5) {$f$};
          \node [scale=1.2] at (1.2, -1.5) {$g$};
          \node [scale=1.2] at (0, 4.1) {$B \times_D C$};
          \node [cyan!75!black] at (-4.05, 1.2) {$B_d$};
          \node [cyan!75!black] at (3.65, 1.1) {$C_d$};
          \node [cyan!75!black] at (2.4, 3.4) {$B_d \times C_d$};
          \draw [cyan!75!black] (1.6, 3.3) -- (.6, 2.8);
      \end{tikzpicture}
  ```

拉回常常用[[交换图|图表]]
\[
\begin{tikzcd}
  A \ar[r] \ar[d] \ar[dr, phantom, pos=.2, "\ulcorner"] &
  B \ar[d] \\
  C \ar[r] &
  D
\end{tikzcd}
\]
来表示，这里 $A = B \times_D C$ 是 $B$ 与 $C$ 沿 $D$ 的纤维积。

拉回是[[推出]]的[[对偶]]。

## 定义

::: definition [拉回] {@拉回}
设 $\mathcal{C}$ 是[[范畴]]。
对于 $\mathcal{C}$ 中的[[交换图|图表]]
\[
\begin{tikzcd}
  & B \ar[d, "f"]
  \\ C \ar[r, "g"]
  & D \rlap{, }
\end{tikzcd}
\]
如果这个图表具有[[极限 (范畴论)|极限]]，
就把这个极限叫做 $B, C$ 关于 $D$ 沿映射 $f, g$ 的**拉回**。

具体地说，该拉回是指交换图表
\[
\begin{tikzcd}
  A \ar[r, "g'"] \ar[d, "f'"'] &
  B \ar[d, "f"] \\
  C \ar[r, "g"] &
  D \rlap{ ,}
\end{tikzcd}
\]
它满足以下[[万有性质]]：
对任意对象 $A' \in \mathcal{C}$，如果有交换图表
\[
\begin{tikzcd}
  A' \ar[r, "g''"] \ar[d, "f''"'] &
  B \ar[d, "f"] \\
  C \ar[r, "g"] &
  D \rlap{ ,}
\end{tikzcd}
\]
则存在唯一的态射 $h \colon A' \to A$，使得以下图表交换：
\[
\begin{tikzcd}
  A' \ar[ddr, bend right, "f''"']
  \ar[drr, bend left, "g''"]
  \ar[dr, pos=.6, "{\exists ! \, h}"]
  \\ & A \ar[r, "g'"] \ar[d, "f'"']
  & B \ar[d, "f"]
  \\ & C \ar[r, "g"]
  & D \rlap{ .}
\end{tikzcd}
\]
:::

拉回常常用图表
\[
\begin{tikzcd}
  A \ar[r] \ar[d] \ar[dr, phantom, pos=.2, "\ulcorner"] &
  B \ar[d] \\
  C \ar[r] &
  D
\end{tikzcd}
\]
表示，有时也用
\[
\begin{tikzcd}
  A \ar[r] \ar[d] \ar[dr, phantom, pos=.2, "\lrcorner"] &
  B \ar[d] &
  A \ar[r] \ar[d] \ar[dr, phantom, "\Box"] &
  B \ar[d] \\
  C \ar[r] &
  D &
  C \ar[r] &
  D
\end{tikzcd}
\]
来表示。此图表称为**拉回图表**或**拉回方块**。

拉回得到的对象 $A$ 常常记为
\[
A = B \underset{f, \, D, \, g}{\times} C \quad \text{或} \quad
A = B \underset{D}{\times} C,
\]
其中 $f, g$ 是上述定义中的态射。

## 例子

- [[集合]]的纤维积可以如下描述。
  设 $f \colon B \to D$ 与 $g \colon C \to D$ 为集合映射。则
  \[
  B \underset{D}{\times} C =
  \{ (b, c) \in B \times C \mid f (b) = g (c) \},
  \]
  其中 $B \times C$ 为 [[Descartes 积]]。
  这也等价于说
  \[
  B \underset{D}{\times} C =
  \coprod_{d \in D} f^{-1} (d) \times g^{-1} (d),
  \]
  不过前一种描述更加自然。

- [[拓扑空间]]的纤维积是[[纤维积空间]]。

- [[概形]]的纤维积是[[纤维积概形]]。

- [[群胚]]、[[范畴]]的纤维积是[[纤维积范畴]]。
  但需注意，这里的拉回实际上是 [[$2$-拉回]]，
  故并不严格符合本文的定义。

## 注释

- 称拉回为“Descartes 方块”是由于拉回是 [[Descartes 积]]的推广；
  显然在 [[René Descartes|Descartes]] 的年代并没有范畴论。
  在汉语文献中鲜见此称谓。

```terms
拉回:
  en: pullback
  de: Pullback :n
  fr: pullback :m
纤维积:
  en: fibre(d) product
  en-us: fiber(ed) product
  de: Faserprodukt :n
  fr: produit fibré :m
Descartes 方块:
  en: cartesian square
  de: kartesisches Quadrat :n
```
