---
title: 度量空间
categories: [一般拓扑]
---

**度量空间**是一种[[拓扑空间]]，
其中点的位置关系由它们之间的[[距离]]所描述。

## 定义

::: definition [度量]
一个集合 \(X\) 上的**度量**是一个映射
\(d\colon X \times X \to \mathbb{R}\)，满足以下性质：

1. 对任何 \(x,y \in X\)，有 \(d(x,y) = d(y,x)\)；

2. 对任何 \(x,y \in X\)，有 \(d(x,y) \geq 0\)，且 \(d(x,y)=0\) 的必要且充分条件是 \(x=y\)；

3. {@item:triangle-ineq} 对任何 \(x,y,z \in X\)，成立“三角不等式”：
   \(d(x,z) \leq d(x,y) + d(y,z)\)。

:::

::: definition [度量空间]
一个**度量空间**是一个偶对 \((X,d)\)，其中 \(X\) 是一个集合，
\(d\) 是 \(X\) 上的一个度量。
:::

## 度量诱导的拓扑

令 \((X,d)\) 为一个度量空间，\(x \in X\)，\(\varepsilon > 0\) 为实数。
则 \(X\) 中以 \(x\) 为心的\(\varepsilon\)-开球是指
\[
B(x;\varepsilon) = \{y \in X \colon d(y,x) < \varepsilon\}.
\]
我们称 \(U \subset X\) 为度量空间 \(X\) 的一个开集，如果
对任意 \(x \in U\)，存在 \(\varepsilon > 0\)，使得
\(B(x;\varepsilon)\subset U\)。

上面的开集的定义的确给出了一个集合 \(X\) 上的[[拓扑空间|拓扑]]。
在这个拓扑中，开球
\(\{B(x;\varepsilon)\}_{x\in X, \varepsilon\in \mathbb{R}_{+}}\)
构成了一个[[拓扑基]]。

```terms
度量空间:
  en: metric space
  de: Metrischer Raum
  fr: espace métrique
  grc: μετρικὸς χῶρος
  la: spatium metricum
度量:
  en: metric
  de: Metrik :f
  fr: distance :f
  grc: μετρική :f
  la: metrica :f
```
