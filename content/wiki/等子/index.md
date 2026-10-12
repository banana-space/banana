---
title: 等子
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，**等子**（或**左等子**）是一种[[万有构造]]，
是[[核 (代数)|核]]的推广。
在某个[[范畴]]中，给定图表
\[
\begin{tikzcd}
  X \ar[r, shift left, "f"] \ar[r, shift right, "g"'] & Y \rlap{ ,}
\end{tikzcd}
\]
则大致来说，[[态射]] $f, g$ 的等子是指 $X$ 中被 $f, g$ 映到相同元素的部分。
若将 $X, Y$ 视为[[集合]]或[[空间]]，则 $f, g$ 的等子大致能写成
\[
E = \{ x \in X \mid f (x) = g (x) \}.
\]
例如，态射的核就是该态射与零态射的等子。

等子的[[对偶]]是[[余等子]]。

## 定义

::: definition
在[[范畴]] $\mathcal C$ 中，给定图表
\[
\begin{tikzcd}
  X \ar[r, shift left=1, "f"] \ar[r, shift right=1, "g"'] & Y \rlap{ .}
\end{tikzcd}
\]
若该图表存在[[极限 (范畴论)|极限]]，
则该极限称为 $f, g$ 的**等子**。

具体来说，$f, g$ 的等子是 $\mathcal{C}$ 中对象 $E$，
带有态射 $e \colon E \to X$，从而有图表
\[
\begin{tikzcd}
  E \ar[r, "e"] &
  X \ar[r, shift left=1, "f"] \ar[r, shift right=1, "g"'] & Y \rlap{ ,}
\end{tikzcd}
\]
使得 $f \circ e = g \circ e$。并且，
对于任意对象 $E'$ 及任意态射 $e' \colon E' \to X$，考虑图表
\[
\begin{tikzcd}
  E' \ar[r, "e'"] &
  X \ar[r, shift left=1, "f"] \ar[r, shift right=1, "g"'] & Y \rlap{ ,}
\end{tikzcd}
\]
若 $f \circ e' = g \circ e'$，
那么存在唯一态射 $h \colon E' \to E$，使得 $e' = e \circ h$，即有交换图
\[
\begin{tikzcd}
  E' \ar[d, "h"] \ar[dr, "e'"] & \\
  E \ar[r, "e"] &
  X \ar[r, shift left=1, "f"] \ar[r, shift right=1, "g"']
  & Y \rlap{ .}
\end{tikzcd}
\]
:::

## 例子

沿用上述记号。

- 若 $f = g$，则 $f, g$ 的等子就是 $X$ 自身。

- 若 $\mathcal{C}$ 中具有[[零对象]]，且 $g$ 是[[零态射]]，
  则 $f, g$ 的等子就是 $f$ 的[[核 (代数)|核]]。

## 性质

- 等子可以写成如下[[拉回 (范畴论)|拉回]]：
  \[
  \begin{tikzcd}
    E \ar[r, "e"] \ar[d] \ar[dr, phantom, pos=.2, "\ulcorner"] &
    X \ar[d, "f \times g"] \\
    Y \ar[r, "\Delta"] & Y \times Y
  \end{tikzcd}
  \]
  其中 $\Delta$ 是[[对角态射]]。

```terms
等子:
  en: equalizer
  fr: égaliseur :m
  de: Differenzkern :m
```
