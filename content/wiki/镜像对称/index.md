---
title: 镜像对称
aliases: [镜对称]
categories: [弦论, 复代数几何, 辛几何]
---

**镜像对称**是一系列基于[[弦论]]的想法而提出的数学猜想。
其主要内容为，对 $3$ 维 [[Calabi–丘流形]] $X$，
可以构造其“镜像”的 $3$ 维 [[Calabi–丘流形]] $\check{X}$，
使得 $X$ 的[[辛几何]]对应于 $\check{X}$ 的[[复几何]]，或者说[[代数几何]]，
而 $X$ 的复几何对应于 $\check{X}$ 的辛几何。
这里辛几何和复几何又分别称为镜像对称的 [[A 模型]]和 [[B 模型]]。
二者的对应关系并不是某种直接的转换，
而是由一些复杂的关系给出。
例如，[[Maxim Kontsevich]] 于 1994 年提出[[同调镜像对称]]猜想，
说明 $X$ 的 [[Fukaya 范畴]]（辛几何）
与 $\check{X}$ 的[[凝聚导出范畴]]（复几何）
是等价的 [[$\mathbb{A}_\infty$ 范畴]]：
\[
\mathsf{Fuk} (X) \simeq \mathsf{D}^{\mathrm{b}} \mathsf{Coh} (\check{X}).
\]

镜像对称还预言，
$X$ 与 $\check{X}$ 的 [[Hodge 菱形]]沿对角线对称。
例如，对于[[五次三维流形]]而言，它与其镜像的 Hodge 菱形分别为
\[
\begin{matrix}
  &&& 1 \\
  && 0 && 0 \\
  & 0 && 1 && 0 \\
  1 && \clap{101} && \clap{101} && 1 \\
  & 0 && 1 && 0 \\
  && 0 && 0 \\
  &&& 1
\end{matrix}
\hspace{2em} , \hspace{2em}
\begin{matrix}
  &&& 1 \\
  && 0 && 0 \\
  & 0 && \clap{101} && 0 \\
  1 && 1 && 1 && 1 \\
  & 0 && \clap{101} && 0 \\
  && 0 && 0 \\
  &&& 1
\end{matrix}
\]
这也是“镜像对称”的一种形象的诠释。

```terms
镜像对称:
  en: mirror symmetry
  fr: symétrie miroir :f
```
