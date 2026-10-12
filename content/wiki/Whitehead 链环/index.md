---
title: Whitehead 链环
categories: [纽结论]
---

**[[Henry Whitehead|Whitehead]] 链环**
是一种[[链环]]，由 $2$ 个圆周构成：

```tikz
\begin{tikzpicture}
    \draw [line width = 5, blue!75!green] (0, 0) circle (1);
    \draw [line width = 15, white] (.6, -.6) -- (.8, -.8) (-.6, .6) -- (-.8, .8);
    \draw [line width = 5, red] (135:.3) -- (135:1) arc (45:315:1) -- (45:1) arc (135:-135:1) -- (-45:.3);
    \draw [line width = 15, white] (36:1) arc (36:54:1) (-126:1) arc (-126:-144:1);
    \draw [line width = 5, blue!75!green] (36:1) arc (36:54:1) (-126:1) arc (-126:-144:1);
\end{tikzpicture}
```

这两个圆周自身都没有打结，且它们的[[环绕数 (纽结论)|环绕数]]为 $0$，
但它们却无法解开。
