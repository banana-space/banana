---
title: Eckmann–Hilton 论证
aliases: [Eckmann–Hilton 技巧, Eckmann–Hilton 原理, Eckmann–Hilton 论断, Eckmann-Hilton 原理, Eckmann-Hilton 技巧, Eckmann-Hilton 论断, Eckmann-Hilton 论证]
categories: [同伦论, 一般代数]
---

**Eckmann–Hilton 论证**，或称 **Eckmann–Hilton 技巧**、
**Eckmann–Hilton 原理**，阐述的道理是，
一个集合上如有两个相容的含幺[[原群]]结构，那么它们相同，且为交换[[幺半群]]。

## 命题与论证

::: proposition [Eckmann–Hilton]
集合 $G$ 上有两种二元运算 $\cdot,\ast$，分别具有[[幺元]]
$1_\cdot,1_\ast$，且满足对任意 $a,b,c,d\in G$，
$$
(a\ast b)\cdot(c\ast d)=(a\cdot c)\ast(b\cdot d).
$$
则 $1_\cdot=1_\ast$，$\cdot=\ast$，且它交换、结合。
:::

::: proof
- 取 $a=d=1_\cdot$，$b=c=1_\ast$，即知 $1_\cdot=1_\ast$。将其统一记作 $1$。

- 然后取 $b=c=1$，即知 $\cdot=\ast$。

- 最后取 $a=d=1$ 知交换，取 $b=1$ 知结合。

:::

## 应用

该论证虽然简单，但在代数拓扑中有些不平凡应用。

- 对[[拓扑群]] $(G,\cdot,1)$，考虑其[[基本群]] $\pi_1(G,1)$。
  把 $\ast$ 取为基本群乘法，$\cdot$ 利用 $G$ 的运算取为
  $$
  (\alpha\cdot\beta)(t)=\alpha(t)\cdot\beta(t),
  $$
  由 Eckmann–Hilton 论证即知 $\pi_1(G,1)$ 交换。

- 取定整数 $n\ge2$，将[[同伦群]] $\pi_n(X,x)$ 视为
  $(I^n,\partial I^n)$ 到 $(X,x)$ 的映射同伦类，
  把 $\cdot$ 和 $\ast$ 取为沿立方体 $I^n$ 的不同方向并置，
  由 Eckmann–Hilton 论证即知 $\pi_n(X,x)$ 交换。类似地，
  $n\ge3$ 时相对同伦群交换。

- 有个经典的抽象代数习题：群范畴中的群对象是交换群。
  它也是这么个道理。对群范畴中的群对象 $G\times G\to G$，
  把 $\cdot$ 取为 $G$ 本身的乘法，$\ast$ 取为群对象结构，
  立得 $G$ 是交换群，群对象结构必须是 $G$ 本身的乘法。

## 二维展示与评注

把 $a\cdot b$ 写作 $\left(\begin{matrix}a\\b\end{matrix}\right)$，
$a\ast b$ 写作 $\left(\begin{matrix}a&b\end{matrix}\right)$，则条件保证记号
$\left(\begin{matrix}a&b\\c&d\end{matrix}\right)$ 无歧义。以符号 $\cdot$ 和 $\ast$
本身分别表示两个运算的幺元，则 Eckmann–Hilton 论证可以写成

- $$
  \cdot=\left(\begin{matrix}\cdot\\\cdot\end{matrix}\right)
  =\left(\begin{matrix}\cdot&\ast\\\ast&\cdot\end{matrix}\right)
  =\left(\begin{matrix}\ast&\ast\end{matrix}\right)=\ast
  $$

- 于是幺元相同，以下以空位表示幺元。由
  $$
  \left(\begin{matrix}a&b\end{matrix}\right)
  =\left(\begin{matrix}a&\\&b\end{matrix}\right)
  =\left(\begin{matrix}a\\b\end{matrix}\right)
  =\left(\begin{matrix}&a\\b&\end{matrix}\right)
  =\left(\begin{matrix}b&a\end{matrix}\right)
  =\left(\begin{matrix}b&\\&a\end{matrix}\right)
  =\left(\begin{matrix}b\\a\end{matrix}\right)
  =\left(\begin{matrix}&b\\a&\end{matrix}\right)
  =\left(\begin{matrix}a&b\end{matrix}\right)
  $$
  知 $\cdot=\ast$ 且交换，由
  $$
  \left(\begin{matrix}a&\left(\begin{matrix}b&c\end{matrix}\right)\end{matrix}\right)
  =\left(\begin{matrix}a&\left(\begin{matrix}b\\c\end{matrix}\right)\end{matrix}\right)
  =\left(\begin{matrix}a&b\\&c\end{matrix}\right)
  =\left(\begin{matrix}\left(\begin{matrix}a&b\end{matrix}\right)\\c\end{matrix}\right)
  =\left(\begin{matrix}\left(\begin{matrix}a&b\end{matrix}\right)&c\end{matrix}\right)
  $$
  知结合。

此种写法与二阶同伦群交换的拓扑证明异曲同工。

Eckmann–Hilton 论证中，条件实际上是个“$\mathbb{E}_2$-代数”
结构。能得到如此强的结论，原因大体在于，在 $1$-范畴中工作时，
$\mathbb{E}_2$ 直至 $\mathbb{E}_\infty$ 都和严格交换无异。
但在 $\infty$-范畴中则并非如此：注意在以上展示中，$\cdot=\ast$
且交换这一步的证明“成环”了，表明虽然 $\cdot=\ast$，
但这个“$=$”并非唯一、典范，故在 $\infty$-范畴中会出现微妙之处。

```terms
Eckmann–Hilton 论证:
  en: Eckmann–Hilton argument
```
