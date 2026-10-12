---
title: 缩积（范畴论）
categories: [范畴论]
---

[[范畴论]]中的**缩积**是[[拓扑学]]中[[缩积空间]]的推广。

## 定义

::: definition
设[[范畴]] $\mathcal{C}$ 有有限[[积 (范畴论)|积]]和[[推出]]。
则**缩积**指[[带点对象范畴]] $\mathcal{C}_*$
的如下[[对称幺半范畴|对称幺半]]结构：
$$
(X,x)\wedge(Y,y)=
\frac{X\times Y}{x\times Y\cup X\times y},
$$
其中 $x\colon*\to X$，$y\colon*\to Y$ 为带点对象的基点，
$x\times Y\cup X\times y$ 指推出
\[
\begin{tikzcd}
  *\times*\ar[r,"\operatorname{id}_*\times y"]\ar[d,"x\times\operatorname{id}_*"']&*\times Y\ar[d]\ar[rdd,"x\times\operatorname{id}_Y"]&\\
  X\times*\ar[r]\ar[rrd,"\operatorname{id}_X\times y"']&x\times Y\cup X\times y\ar[rd,dashed]&\\
  &&X\times Y
\end{tikzcd}
\]
而对映射 $A\to B$，$B/A$ 指推出
\[
\begin{tikzcd}
  A\ar[r]\ar[d]&B\ar[d]\\
  *\ar[r]&B/A
\end{tikzcd}
\]
自然视为带点对象。
:::

```terms
缩积:
  en: smash product
```
