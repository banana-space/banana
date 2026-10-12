---
title: 推出
aliases: [粘连和, 余纤维积, 余 Descartes 方块, Pushout]
categories: [范畴论]
notices:
  - name: 区分
    pages:
      - 前推
navboxes: [范畴论]
---

在[[范畴论]]中，**推出**
（或称**粘连和**、**余纤维积**、**余 Descartes 方块**）
是一种[[万有构造]]，
描述在[[范畴]]中，
将两个[[对象]]沿着它们的某个部分“粘贴”起来，
得到一个新对象的操作。

例如，若 $X$ 是[[拓扑空间]]，$U, V \subset X$ 为[[开集]]，
满足 $X = U \cup V$，
则 $X$ 可以视为由 $U$ 和 $V$ 沿它们各自的开子集 $U \cap V$ 粘起来得到的空间。
此时，我们说 $X$ 是 $U$ 和 $V$ 沿 $U \cap V$ 的推出。

推出常常用[[交换图|图表]]
\[
\begin{tikzcd}
  A \ar[r] \ar[d] \ar[dr, phantom, pos=.8, "\lrcorner"] &
  B \ar[d] \\
  C \ar[r] &
  D
\end{tikzcd}
\]
来表示，这里 $D$ 是 $B, C$ 沿 $A$ 粘起来得到的对象，常常记为
\[
D = B \underset{A}{\sqcup} C.
\]

推出是[[拉回 (范畴论)|拉回]]的[[对偶]]。

## 定义

::: definition [推出] {@def-pushout}
设 $\mathcal{C}$ 是[[范畴]]。
对于 $\mathcal{C}$ 中的[[交换图|图表]]
\[
\begin{tikzcd}
  A \ar[r, "f"] \ar[d, "g"'] &
  B \\
  C
\end{tikzcd}
\]
而言，如果这个图表具有[[余极限]]，
就把这个余极限叫做 $B, C$ 关于 $A$ 沿着映射 $f, g$ 的**推出**。

具体地说，该推出是指交换图表
\[
\begin{tikzcd}
  A \ar[r, "f"] \ar[d, "g"'] &
  B \ar[d, "g'"] \\
  C \ar[r, "f'"] &
  D \rlap{\ ,}
\end{tikzcd}
\]
它满足以下[[万有性质]]：
对任意对象 $D' \in \mathcal{C}$，如果有交换图表
\[
\begin{tikzcd}
  A \ar[r, "f"] \ar[d, "g"'] &
  B \ar[d, "g''"] \\
  C \ar[r, "f''"] &
  D' \rlap{\ ,}
\end{tikzcd}
\]
则存在唯一的态射 $h \colon D \to D'$，使得以下图表交换：
\[
\begin{tikzcd}
  A \ar[r, "f"] \ar[d, "g"'] &
  B \ar[d, "g'"] \ar[ddr, bend left = 20, "g''"] \\
  C \ar[r, "f'"] \ar[drr, bend right = 20, "f''"'] &
  D \ar[dr, pos=.3, "{\exists ! \, h}"] \\
  && D' \ .
\end{tikzcd}
\]
:::

推出常常用图表
\[
\begin{tikzcd}
  A \ar[r] \ar[d] \ar[dr, phantom, pos=.8, "\lrcorner"] &
  B \ar[d] \\
  C \ar[r] &
  D
\end{tikzcd}
\]
表示，有时也用
\[
\begin{tikzcd}
  A \ar[r] \ar[d] \ar[dr, phantom, pos=.8, "\ulcorner"] &
  B \ar[d] &
  A \ar[r] \ar[d] \ar[dr, phantom, "\mathrm{(PO)}"] &
  B \ar[d] \\
  C \ar[r] &
  D &
  C \ar[r] &
  D
\end{tikzcd}
\]
来表示，此图表称为**推出图表**或**推出方块**。

推出得到的对象 $D$ 常常记为
\[
D = B \underset{f, \, A, \, g}{\sqcup} C \quad \text{或} \quad
D = B \underset{A}{\sqcup} C,
\]
其中 $f, g$ 是上述定义中的态射。
有时也使用以下记号：
\[
D = B \cup_A C, \quad
D = B \underset{A}{\amalg} C.
\]

::: remark
在 @def-pushout 中，
如果 $A$ 是范畴 $\mathcal{C}$ 的[[始对象]]，
那么推出 $B \sqcup_A C$ 就是范畴 $\mathcal{C}$ 中的[[余积]] $B \sqcup C$。
:::

## 例子

- [[集合]]的推出可以如下描述。
  设 $f \colon A \to B$ 与 $g \colon A \to C$ 为集合映射。则
  \[
  B \underset{A}{\sqcup} C =
  (B \sqcup C) / {\sim},
  \]
  其中 $B \sqcup C$ 为[[无交并]]；
  [[等价关系]] $\sim$ 由以下关系生成：
  对任何 $a \in A$，有 $f (a) \sim g (a)$。

- [[拓扑空间]]的推出是[[粘连空间]]。

- [[群]]的推出是[[粘连自由积]]。

- [[群胚]]、[[范畴]]的推出是[[粘连范畴]]。
  但需注意，这里的推出实际上是 [[$2$-推出]]，
  故并不严格符合本文的定义。

```terms
推出:
  en: pushout
  de: Pushout :n
  fr: pushout :m
粘连和:
  en: amalgamated sum
  de: amalgamierte Summe :f
  fr: somme amalgamée :f
余纤维积:
  en: fibre(d) coproduct
  en-us: fiber(ed) coproduct
  de: Kofaserprodukt :n
余 Descartes 方块:
  en: cocartesian square
  de: kokartesisches Quadrat :n
```
