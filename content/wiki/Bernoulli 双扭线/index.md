---
title: Bernoulli 双扭线
categories: [初等几何, 代数曲线论]
---

**[[Jakob Bernoulli|Bernoulli]] 双扭线**是如下的平面曲线：

```tikz
\begin{tikzpicture}
    \draw[black!40, ->, >=stealth] (-4, 0) -- (4, 0) node[right] {$x$};
    \draw[black!40, ->, >=stealth] (0, -2) -- (0, 2) node[above] {$y$};
    \draw[domain=0:360,thick,smooth,samples=200] plot ({2*sqrt(2)*cos(\x)/(1+sin(\x)^2)},{2*sqrt(2)*sin(\x)*cos(\x)/(1+sin(\x)^2)});
    \fill (-2, 0) circle (.05) node[below] {$F_1$};
    \fill (2, 0) circle (.05) node[below] {$F_2$};
    \node at (0, -.3) {$O$};
\end{tikzpicture}
```

它有两个关于原点对称的焦点 $F_1$、$F_2$，
由平面上所有满足
\[
|F_1 A| \cdot |F_2 A| = c^2
\]
的点 $A$ 构成，其中 $c = |OF_1|$ 为焦距的一半。
与 $x$ 轴的交点是 $(\pm a, 0)$，其中
\[
a = \sqrt{2} \, c.
\]
在 [[Descartes 坐标系]]中，其方程为
\[
(x^2 + y^2)^2 - a^2 (x^2 - y^2) = 0.
\]
因此，它是平面上的四次[[代数曲线]]。

## 性质

### 初等性质

- Bernoulli 双扭线在[[平面反演]]下变成[[双曲线]] $x^2 - y^2 = 1/a^2$。

- Bernoulli 双扭线的[[周长]]是
  \[
  L = \frac{2 \pi}{\mathrm{agm} (1, \sqrt{2})} \, a,
  \]
  其中 $\mathrm{agm}$ 表示[[算术–几何平均]]。

- Bernoulli 双扭线围成的[[面积]]是 $a^2$。

### 代数几何性质

- Bernoulli 双扭线是[[有理代数曲线]]。
  其[[亏格]]为 $0$，具有 $3$ 个[[结点 (代数几何)|结点]]。

```terms
Bernoulli 双扭线:
  en: lemniscate of Bernoulli
  de: Lemniskate von Bernoulli :f
  fr: lemniscate de Bernoulli :f
```
