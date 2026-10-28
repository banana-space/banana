---
title: 算术–几何平均
categories: [特殊函数]
---

<disambiguation>
注意与[[算术–几何平均值不等式]]区分。
</disambiguation>

[[正数|正]][[实数]] $x$、$y$ 的**算术–几何平均**，
记为 $\mathrm{agm} (x, y)$，
是一个介于其[[算术平均]] $(x + y)/2$ 与[[几何平均]] $\sqrt{x y}$ 之间的实数，
通过不断迭代地求算术平均与几何平均而得。

```tikz
\begin{tikzpicture}
    \draw[black!40, ->, >=stealth] (0, 0) -- (7, 0) node[right] {$x$};
    \draw[black!40, ->, >=stealth] (0, 0) -- (0, 4) node[above] {$y$};
    \draw[black!40, dashed] (1.5, 1.5) -- (0, 1.5) node[left] {$1$};
    \draw[black!40, dashed] (1.5, 1.5) -- (1.5, 0) node[below] {$1$};
    \draw[cyan!70!black, thick] (0, .75) -- (6, 3.75);
    \draw[orange!90!black, domain=0:2, thick, smooth] plot ({1.5*\x*\x},{1.5*\x});
    \draw[domain=0:2, thick, smooth, samples=100] plot ({1.5*\x*\x},{1.5*sqrt(sqrt(\x*(1+\x*\x)/2))*(\x+1)/2});
    \node[cyan!70!black, anchor=west] at (6.2, 4.1) {$y = \dfrac{1+x}{2}$};
    \node[anchor=west] at (6.2, 3.5) {$y = \mathrm{agm}(1,x)$};
    \node[orange!90!black, anchor=west] at (6.2, 3) {$y = \sqrt{1 \cdot x}$};
\end{tikzpicture}
```

由于算术–几何平均与[[椭圆积分]]有密切联系，
且前者的数值计算收敛极快，
故常常通过算术–几何平均来数值计算椭圆积分。

## 定义

设 $x$、$y$ 为正实数。
记 $g_0 = \min \{ x, y \}$，$a_0 = \max \{ x, y \}$。
对 $n = 0, 1, 2, \dotsc$，定义
\[
a_{n+1} = \frac{a_n + g_n}{2}, \quad
g_{n+1} = \sqrt{a_n g_n} \, .
\]
则数列 $\{ a_n \}$ 递减地收敛、数列 $\{ g_n \}$ 递增地收敛于同一实数，
这就定义为 $x$、$y$ 的**算术–几何平均**，
记为 $\mathrm{agm} (x, y)$。

```terms
算术–几何平均:
  en: arithmetic–geometric mean
  fr: moyenne arithmético-géométrique :f
  de: arithmetisch-geometrisches Mittel :n
```
