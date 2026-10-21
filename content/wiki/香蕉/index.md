---
title: 香蕉
categories: [微扰量子场论]
navboxes: [量子场论]
---

**香蕉**是一种 [[Feynman 图]]，
它有两个顶点，有 $n \geq 1$ 条边，
并且所有边都连接这两个顶点：

```tikz
\begin{tikzpicture}
  \fill (-2, 0) circle (.08);
  \fill (2, 0) circle (.08);
  \draw plot [smooth, tension = 1.4] coordinates {(-2, 0) (0,   1) (2, 0)};
  \draw plot [smooth, tension = 1]   coordinates {(-2, 0) (0,  .5) (2, 0)};
  \draw plot [smooth, tension = 1]   coordinates {(-2, 0) (0, -.5) (2, 0)};
  \draw plot [smooth, tension = 1.4] coordinates {(-2, 0) (0,  -1) (2, 0)};
  \node at (0, .1) {$\vdots$};
\end{tikzpicture}
```
