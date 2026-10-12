---
title: 环路空间
aliases: [环路函子]
categories: [一般拓扑, 同伦论]
notices:
  - name: 问题
    items:
      - “群结构”一节需要扩充。
navboxes: [代数拓扑]
---

[[带点拓扑空间]] $X$ 的**环路空间** $\Omega X$
是 $X$ 中所有从基点出发的[[环路]]构成的空间，
也就是从[[圆周]] $S^1$ 到 $X$ 的所有保持基点的[[连续映射]]构成的空间。

另一种环路空间是[[拓扑空间]] $X$ 的**自由环路空间**
$L X = X^{S^1}$，也就是 $S^1$ 到 $X$ 的所有连续映射构成的空间。

环路空间的[[同伦群]]满足 $\pi_n (\Omega X) \simeq \pi_{n+1} (X)$，
因此 $X$ 的环路空间可以看成是在同伦意义下，
将 $X$ 降低一维得到的空间。
环路函子 $\Omega$ 的[[左伴随]]是[[纬悬]]函子 $\Sigma$，
这一对伴随函子称为 **[[纬悬–环路伴随]]**。
这些性质在环路空间使用 [[$\infty$-范畴]]语言的定义
（@无穷）中更为明显。

在环路空间 $\Omega X$ 上，环路的复合定义了一种同伦结合的乘法运算。
这赋予它 [[$\mathbb{A}_\infty$ 群]]的结构，
也就是 [[$\mathbb{E}_1$ 群]]的结构。
特别地，环路空间是 [[$H$ 空间]]。
一般地，[[多重环路空间]] $\Omega^n X$
是 [[$\mathbb{E}_n$ 群]]的典型例子。

## 定义

::: definition [环路空间]
[[带点拓扑空间]] $(X, x)$ 的**环路空间**是带点拓扑空间 $\Omega X$，
定义为态射集
\[
\Omega X = \mathsf{Top}_* \bigl(
  (S^1, *) , \ (X, x)
\bigr),
\]
也就是保持基点的映射的集合，
带有[[紧开拓扑]]。
其基点为 $x$ 处常值映射。
:::

::: definition [自由环路空间]
[[拓扑空间]] $X$ 的**自由环路空间**是拓扑空间 $L X$，
定义为态射集
\[
L X = \mathsf{Top} (S^1, X)
= X^{S^1},
\]
带有[[紧开拓扑]]。
:::

## 性质

### 在 $\infty$-范畴中

在 [[$\infty$-范畴]]的语言中，
环路空间有着非常简洁的描述。

::: proposition {@无穷}
对带点拓扑空间 $(X,x)$，
在带点[[空间 $\infty$-范畴]] $\mathsf{S}$ 中，
以下图表
\[
\begin{tikzcd}
  \Omega X \ar[d] \ar[r] \ar[dr, phantom, pos=.2, "\ulcorner"]
  & * \ar[d]
  \\ * \ar[r]
  & X,
\end{tikzcd}
\]
是（同伦）[[拉回图表]]。

普通的[[拓扑空间范畴]]中，
此命题也可以转述如下：
以下图表
\[
\begin{tikzcd}
  \Omega X \ar[d] \ar[r] \ar[dr, phantom, pos=.2, "\ulcorner"]
  & \mathrm{P}X \ar[d]
  \\ * \ar[r]
  & X,
\end{tikzcd}
\]
是拉回图表，
这里 $\mathrm{P}X$ 是[[道路空间]]。
:::

### 群结构

```terms
环路空间:
  en: loop space
  fr: espace des lacets :m
  de: Schleifenraum :m
```
