---
title: 卝
aliases: [丱]
categories: [一般代数]
navboxes: [代数结构]
---

**卝**（guàn），或作**丱**，是一种[[代数结构]]，
刻画[[群]]元素互相之间的共轭作用，在[[纽结论]]中亦有应用。

## 定义

::: definition {@def}
**卝**是[[集合]] $Q$ 附带两个[[二元运算]]
$\triangleleft$、$\triangleright$，
满足对任意 $a,b,c\in Q$：

- $a\triangleleft(b\triangleleft c)
  =(a\triangleleft b)\triangleleft(a\triangleleft c)$；

- $a\triangleleft a=a$；

- $a\triangleleft(b\triangleright a)=
  (a\triangleleft b)\triangleright a=b$。
:::

::: remark
记号承 @def。注意 $\triangleright$ 和
$\triangleleft$ 互相决定，因为映射 $a\triangleleft -$
与 $-\triangleright a$ 互逆。由此不难发现

- $(a\triangleright b)\triangleright c
  =(a\triangleright c)\triangleright(b\triangleright c)$；

- $a\triangleright a=a$。
:::

::: remark
在 @def 中，如对任意 $a,b\in Q$ 都有
$a\triangleleft b=b\triangleright a$，则
$Q$ 关于 $\triangleleft$ 构成[[圭]]。
:::

## 例子

::: example
如 $G$ 是[[群]]，子集 $Q\subseteq G$ 关于共轭封闭，
则它关于二元运算 $a\triangleleft b=
aba^{-1}$、$b\triangleright a=a^{-1}ba$ 构成卝。
当 $G$ 是[[纽结]]补空间的[[基本群]]，$Q$
是正向环绕纽结的小圈对应的共轭类时，这给出纽结的卝。
:::

::: example
上例中[[纽结]]的卝也可描述如下：首先把纽结定向，并画在平面上。
则纽结的卝就是纽结图示中所有线段的集合，运算如下图。

```tikz
\begin{tikzpicture}[yscale=2]
    \draw[thick,shorten <=2mm] (1,1) -- (2,0) node[above right] {$x\triangleright y$};
    \draw[thick,shorten <=2mm] (1,1) -- (0,2) node[left] {$x$};
    \draw[thick,-latex] (2,2) -- (0,0) node[above left] {$y$};
\end{tikzpicture}
```

译名“卝”除了谐音之外便是考虑到这个直观：
其字形可视为横向细线从纵向粗条带底下通过，
是纽结平面图示的一个局部。
:::

```terms
卝:
  en: quandle
  ja: カンドル
```
