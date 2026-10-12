---
title: Riemann 度量
categories: [Riemann 几何]
navboxes: [Riemann 几何]
---

**Riemann 度量**是一种在[[光滑流形|流形]]上定义[[距离]]的方法。
它通过定义[[切向量]]的长度（“无穷近”的点之间的距离），
来定义流形上曲线的长度，进而定义两个点的距离。

事实上，Riemann 度量不仅能给出距离，
还能给出[[曲率]]等几何量，以及[[协变导数]]、[[Laplace 算子]]等几何构造。
研究这些内容的学科称为 [[Riemann 几何]]。

在[[广义相对论]]中，Riemann 度量
（确切地说，[[Lorentz 流形]]的[[伪 Riemann 度量]]）对应于[[引力]]。
这也是 Riemann 度量的通用记号 $g$ 的来源（英文 <lang en>gravity</lang>）。

## 定义

::: definition [Riemann 度量] {@def-riemannian-metric}
设 $X$ 是[[光滑流形]]。
$X$ 上的 **Riemann 度量**是指
$X$ 上的[[对称二次型|对称]]、[[正定二次型|正定]]的 $(2,0)$-[[张量]]。

换言之，对每个[[切空间]] $T_x X$，
Riemann 度量给出了切空间上的[[内积]]
\[
g(-, -) \colon T_x X \otimes T_x X \to \mathbb{R},
\]
并且这个内积光滑地取决于 $x$。

带有 Riemann 度量的光滑流形称为 **[[Riemann 流形]]**。
:::

通过 Riemann 度量，可以定义流形上曲线的长度。

::: definition [曲线的长度]
设 $X$ 是 Riemann 流形（@def-riemannian-metric），
设 $\gamma \colon [a, b] \to X$ 是[[分段光滑曲线]]。
则 $\gamma$ 的**长度**定义为
\[
\ell (\gamma) = \int_a^b |\gamma'(t)|_g \, dt,
\]
其中 $| \gamma'(t) |_g$ 定义为 $g( \gamma'(t), \gamma'(t) )^{1/2}$。
:::

这样，我们能定义流形上两个点的距离。

::: definition [距离]
设 $X$ 是[[连通]]的 Riemann 流形（@def-riemannian-metric）。
两个点 $x, y \in X$ 的**距离**定义为
\[
d (x, y) = \inf_{\gamma} \ell(\gamma),
\]
其中 $\gamma$ 取遍所有连接 $x$ 与 $y$ 的分段光滑曲线。
这个距离赋予 $X$ [[度量空间]]的结构。
:::

## 例子

- [[Euclid 度量]]
- [[Fubini–Study 度量]]

```terms
Riemann 度量:
  en: Riemannian metric
```
