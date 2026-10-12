---
title: 单位律
aliases: [右单位律, 左单位律]
categories: [一般代数]
navboxes: [初等代数]
---

对于[[集合]] $X$ 及其上[[二元运算]] $*$，
固定元素 $e \in X$，称为[[单位元]]。
称 $*$ 关于 $e$ 满足**单位律**，是指等式
\[
e * a = a = a * e,
\]
其中左侧等号称为**左单位律**，
右侧等号称为**右单位律**。

一般地，$X$ 不一定是集合，$*$ 也不一定是二元运算，
它们可以是类似的数学对象。
我们将类似的关系也称为单位律。

在[[范畴代数]]中，单位律可以表现为交换图
\[
\begin{tikzcd}
  & X \ar[d, equals]
  \ar[dl, "{(e, \, \mathbb{1}_X)}"']
  \ar[dr, "{(\mathbb{1}_X, \, e)}"] \\
  X \times X \ar[r, "*"] &
  X &
  X \times X \rlap{\ .} \ar[l, "*"']
\end{tikzcd}
\]

```terms
单位律:
  en: unit law
```
