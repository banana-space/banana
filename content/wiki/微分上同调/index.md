---
title: 微分上同调
categories: [同调论]
notices:
  - name: 问题
    items:
      - '第二段中“普通上同调 $H^1 (X; \mathbb{R} / \mathbb{Z})$ 是 $X$ 上圆周主丛的同构类之集”似乎不成立：常系数的 $H^1 (X; \mathbb{R} / \mathbb{Z})$ 对应平坦圆周主丛，圆周主丛的同构类由 $H^2 (X; \mathbb{Z})$ 分类。'
navboxes: [同调与上同调]
---

**微分上同调**是一类对[[光滑流形]]定义的[[上同调|上同调理论]]，
包括[[普通微分上同调]]。
这类理论利用流形的光滑结构，得出比普通上同调理论更丰富的信息。

由[[普通上同调]]向微分上同调之推广正如由[[主丛]]向带[[联络]]的主丛之推广。
例如，对[[拓扑空间]] $X$，考虑[[圆周]] $\mathbb{R} / \mathbb{Z}$。
则普通上同调 $H^1 (X; \mathbb{R} / \mathbb{Z})$ 是 $X$ 上圆周主丛的同构类之集，
而对应的[[普通微分上同调]] $\hat{H}^2 (X; \mathbb{Z})$
则是 $X$ 上带[[联络]]的圆周主丛的同构类之集。
一般而言，$\hat{H}^{k+1} (X; \mathbb{Z})$ 是 $X$ 上“带联络的[[圆周 n-丛|圆周 $k$-丛]]”的同构类之集。
普通微分上同调满足以下六边形图表：
\[
\begin{tikzcd}[column sep={6em,between origins}, row sep={4em,between origins}]
  & \dfrac{\Omega^k (X)}{d \Omega^{k-1} (X)} \ar[rr, "d"] \ar[dr, "\llap{\scriptsize 带联络平凡丛\hspace{1.5em}}", pos=.9]
  && \Omega^{k+1} (X) \ar[dr]
  \\ H^k (X; \mathbb{R}) \ar[ur] \ar[dr]
  && \hat{H}^{k+1} (X; \mathbb{Z}) \ar[ur, "\rlap{\scriptsize\hspace{-.6em}曲率}"', pos=.62] \ar[dr, "\rlap{\scriptsize 示性类}"]
  && H^{k+1} (X; \mathbb{R})
  \\ & H^k (X; \mathbb{R} / \mathbb{Z}) \ar[rr, "\delta"'] \ar[ur, "\llap{\scriptsize 平坦联络}"]
  && H^{k+1} (X; \mathbb{Z}) \ar[ur]
\end{tikzcd}
\]
其中中间是普通微分上同调，两条对角线为[[短正合列]]，上、下两条折线都是四项的正合列。
准确地说，$\Omega^k (X)$ 是满足某种积分整性的[[微分形式]]之集。
光滑流形上的任何上同调理论都满足类似的六边形图表。

微分上同调可以进一步由[[光滑流形]]推广到一般的[[连贯 $(\infty, 1)$-意象]]。

## 例子

- [[普通微分上同调]]
- [[广义微分上同调]]

```terms
微分上同调:
  en: differential cohomology
  fr: cohomologie différentielle :f
  de: Differentialkohomologie :f
```
