---
title: Borromeo 环
categories: [纽结论]
---

**Borromeo 环**是一种[[链环]]，
由三维空间中的 $3$ 个圆周构成：

```tikz
\begin{tikzpicture}
    \draw [line width = 5, green!80!black] (30:1) circle (1.25);
    \draw [line width = 15, white] (150:1) + (40:1.25) arc (40:51:1.25);
    \draw [line width = 15, white] (150:1) + (-40:1.25) arc (-40:-51:1.25);
    \draw [line width = 5, red] (150:1) circle (1.25);
    \draw [line width = 15, white] (-90:1) + (69:1.25) arc (69:80:1.25);
    \draw [line width = 15, white] (-90:1) + (160:1.25) arc (160:171:1.25);
    \draw [line width = 5, blue!75!green] (-90:1) circle (1.25);
    \draw [line width = 15, white] (30:1) + (-69:1.25) arc (-69:-80:1.25);
    \draw [line width = 15, white] (30:1) + (-160:1.25) arc (-160:-171:1.25);
    \draw [line width = 5, green!80!black] (30:1) + (-69:1.25) arc (-69:-80:1.25);
    \draw [line width = 5, green!80!black] (30:1) + (-160:1.25) arc (-160:-171:1.25);
\end{tikzpicture}
```

这 $3$ 个圆周无法被分开，
但如果任意去掉一个，剩下两个就能被分开。
满足这一性质的链环称为 **[[Brunn 链环]]**，即如果移除任何一个圆，它就会变成一组未链接的圆。

## 性质

- Borromeo 环的多元 [[Alexander 多项式]]为 $(t_1 - 1)(t_2 - 1)(t_3 - 1)$。

```terms
Borromeo 环:
  en: Borromean rings
```
