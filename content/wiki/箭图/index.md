---
title: 箭图
categories: [表示论]
navboxes: [非交换代数]
---

在[[非交换代数]]和[[表示论]]中，
**箭图**是一种基本概念，
是[[有向图]]的同义词。
它由一些顶点和其间的一些箭头构成。
例如，下图就是一个箭图：
\[
\begin{tikzcd}[
    column sep={2em,between origins},
    row sep={2em,between origins},
    nodes={inner sep=.2em}
  ]
  & \bullet \ar[dr] & {} \\
  \bullet \ar[loop, out=150, in=210, looseness=6]
  \ar[ur] \ar[dr] && \bullet \\
  & \bullet \ar[ur, bend left] \ar[ur, bend right]
\end{tikzcd}
\]

[[箭图表示]]是表示论中的重要概念。
箭图表示给箭图的每个顶点赋予一个[[向量空间]]，
给每个箭头赋予一个相应向量空间之间的[[线性映射]]。
由于箭图表示等价于该箭图的[[箭图代数]]的表示，
常常可以通过箭图而研究[[结合代数]]的表示论。
另一方面，[[箭图表示模空间]]是[[代数几何]]研究中的重要对象，
是模空间理论的基本例子。

## 定义

::: definition [箭图] {@箭图}
**箭图**是指四元组 $Q = (V, E, s, t)$，其中

- $V$ 是[[集合]]，其元素称为 $Q$ 的**顶点**。

- $E$ 是[[集合]]，其元素称为 $Q$ 的**边**或**箭头**。

- $s, t \colon E \to V$ 是两个[[映射 (集合论)|映射]]，
  分别将每个箭头映到其**起点**、**终点**。

:::

## 相关构造

### 箭图表示

我们选定[[域]] $k$。

::: definition [箭图表示]
箭图 $Q = (V, E, s, t)$ 的 **[[箭图表示]]**
由以下信息构成：

- 对每个顶点 $v \in V$，
  有一个 $k$-[[向量空间]] $W_v$。

- 对每个箭头 $e \in E$，
  有一个[[线性映射]] $f_e \colon W_{s(e)} \to W_{t(e)}$。

等价地说，箭图表示是从箭图的生成范畴到[[向量空间]]范畴的[[函子]]。
:::

### 箭图代数

::: definition [路径]
箭图 $Q = (V, E, s, t)$ 的**路径**是形如
\[
v_0 \overset{e_1}{\longrightarrow}
v_1 \overset{e_2}{\longrightarrow}
\cdots \overset{e_n}{\longrightarrow}
v_n
\]
的一列箭头，其中 $n \geq 0$，并且 $v_i \in V$，$e_i \in E$。
:::

::: definition
箭图 $Q$ 在域 $k$ 上的 **[[箭图代数]]** 是以下定义的 $k$-[[结合代数]] $k [Q]$。
作为 $k$-[[向量空间]]，有
\[
k [Q] = \bigoplus_{\text{路径 } p} k \cdot x_p,
\]
这里 $k \cdot x_p$ 是由元素 $x_p$ 生成的一维向量空间。
其乘法定义为
\[
x_p \cdot x_q = \begin{cases}
  x_{p q}, & p, q \text{ 可复合}, \\
  0, & p, q \text{ 不可复合}.
\end{cases}
\]
这里，$p, q$ 可复合的意思是，$p$ 的最后一个顶点与 $q$ 的第一个顶点相同。
此时，$p q$ 表示将两条路径接起来得到的新路径。
:::

::: proposition
箭图 $Q$ 的[[箭图表示]]与箭图代数 $k [Q]$ 的[[右模]]一一对应。
:::

### 与范畴的联系

每个[[小范畴]] $\mathcal{C}$ 都可视为一个箭图，
其顶点为所有对象，而箭头为所有态射。
这一对应构造了从[[范畴的范畴|范畴的 $1$-范畴]] $\mathsf{Cat}$
到[[箭图范畴]] $\mathsf{Quiv}$ 的[[遗忘函子]]。

该遗忘函子有[[伴随函子|左伴随]] $F \colon \mathsf{Quiv} \to \mathsf{Cat}$。
对箭图 $Q$，称范畴 $F (Q)$ 为 $Q$ 生成的 **[[自由范畴]]**。

```terms
箭图:
  en: quiver
  de: Köcher :m
  fr: carquois :m
  ja: 箙<えびら>
  ko: 화살집
```
