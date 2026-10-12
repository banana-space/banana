---
title: 同伦等价
categories: [同伦论]
navboxes: [代数拓扑]
---

在[[代数拓扑]]中，
**同伦等价**是[[拓扑空间]]的一种[[等价关系]]，弱于[[同胚]]。
说两个[[拓扑空间]]同伦等价，大致是说它们具有类似的形状，
例如具有相同的“洞的个数”等等。
例如，以下几个拓扑空间互不同胚，但它们同伦等价：

```tikz
\begin{tikzpicture}[line width=1.5]
    \begin{scope}
        \draw (-.6, 0) circle (.3);
        \draw (.6, 0) circle (.3);
        \draw (-.3, 0) -- (.3, 0);
    \end{scope}
    \begin{scope}[shift={(2.5, 0)}]
        \draw (-1, 0) -- (-.5, .4) -- (.5, -.4) -- (1, 0) -- (.5, .4) -- (-.5, -.4) -- cycle;
    \end{scope}
    \begin{scope}[shift={(5, 0)}, line width=1]
        \draw [fill=black!10] (0, 0) circle (.8);
        \draw [fill=white] (-.4, 0) circle (.2);
        \draw [fill=white] (.4, 0) circle (.2);
    \end{scope}
\end{tikzpicture}
```

代数拓扑中的大多数构造都被同伦等价保持。
也就是说，从代数拓扑的角度看，
同伦等价的空间几乎具有完全相同的性质。
例如，它们有相同的[[同伦群]]、[[同调群]]，等等。

## 定义

::: definition
设 $X, Y$ 为[[拓扑空间]]。
称[[连续映射]] $f \colon X \to Y$ 为**同伦等价**，
如果存在连续映射 $g \colon Y \to X$，使得有[[同伦]]
\[
g \circ f \simeq \mathbb{1}_X, \qquad
f \circ g \simeq \mathbb{1}_Y,
\]
其中 $\mathbb{1}_X$ 与 $\mathbb{1}_Y$ 为[[恒同映射]]。

此时，称 $f$ 与 $g$ 互为**同伦逆**，
并称空间 $X$ 与 $Y$ **同伦等价**。
:::

```terms
同伦等价:
  en: [homotopy equivalence, homotopy equivalent]
  fr: [équivalence homotopique :f, homotopiquement équivalent]
  de: [Homotopieäquivalenz :f, homotopieäquivalent]
  ja: ホモトピー同<どう>値<ち>
  ko: 호모토피 동치
```
