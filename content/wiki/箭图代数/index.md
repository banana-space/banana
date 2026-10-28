---
title: 箭图代数
categories: [代数论]
navboxes: [非交换代数]
---

<problems>
- “模论”一节最后一个命题中的 $A$、$e_i$、$x_\gamma$ 没有说明（$V$ 同时用作模与顶点集）。
</problems>

在[[表示论]]中，
[[箭图]]的**箭图代数**是一个[[结合代数]]，
它的[[模]]一一对应于该箭图的[[箭图表示]]。

## 定义

::: definition [路径]
[[箭图]] $Q = (V, E, s, t)$ 的**路径**是形如
\[
v_0 \overset{e_1}{\longrightarrow}
v_1 \overset{e_2}{\longrightarrow}
\cdots \overset{e_n}{\longrightarrow}
v_n
\]
的一列箭头，其中 $n \geq 0$，并且 $v_i \in V$，$e_i \in E$。
:::

::: definition [箭图代数]
[[箭图]] $Q$ 在[[域]] $k$ 上的**箭图代数**是以下定义的 $k$-[[结合代数]] $k [Q]$。
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

## 例子

- 箭图
  \[
  \bullet \longrightarrow
  \bullet \longrightarrow
  \cdots \longrightarrow \bullet
  \]
  的箭图代数是 $n \times n$ [[上三角阵]]构成的[[结合代数]]，
  其中 $n$ 是该箭图的顶点个数。

## 性质

### 一般性质

::: proposition
箭图 $Q$ 的箭图代数 $k [Q]$ 是有限维 $k$-向量空间，
当且仅当相应箭图仅有有限个顶点、箭头，且无回路，
即一个顶点到自身的长度大于 $0$ 的路径。
:::

### 模论

为简便起见，在下面的讨论中假设箭图代数是有限维的。

::: proposition
箭图代数的右模构成的范畴和相应[[箭图表示]]构成的范畴等价。
:::

::: proposition
在上述对应下，箭图代数的单模对应于只在某个点取 $k$，
其余点取 $0$，且所有映射取 $0$ 的表示。
:::

::: proposition
对 $k[Q]$ 的任意右模 $V$，
存在正合列
\[
0 \to \bigoplus_{\gamma \in E} Ve_{s(\gamma)} \otimes e_{t(\gamma)} A
\to \bigoplus_{i \in V} Ve_i \otimes e_i A
\to V \to 0.
\]
其中第二个映射由
\[
v \otimes a \mapsto v x_\gamma \otimes a -
v \otimes x_{\gamma} a
\]
给出，第三个映射由
\[
v \otimes a \mapsto va
\]
给出。
:::

::: corollary
箭图代数的同调维数是 $1$。
:::

```terms
箭图代数:
  en: path algebra
  fr: algèbre de carquois
```
