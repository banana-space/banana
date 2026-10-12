---
title: 上半连续函数
aliases: [上半连续, 上半连续性]
categories: [一般拓扑]
notices:
  - name: 问题
    items:
      - “基本性质”一节中命题“通过极限的刻画”的证明不完整。
---

**上半连续**是[[拓扑空间]]上函数的一个较弱的连续性条件，
大致来说，连续是说自变量小幅变化时函数值也小幅变化；
上半连续则是说自变量小幅变化时函数值不会大幅增大（见 @极限刻画），
不过可能大幅减小。

## 定义

::: definition [上半连续函数]
设$X$为一拓扑空间，如果函数$u : X\to [-\infty,\infty)$满足：
\[
对任意的a\in \mathbb{R}, u^{-1}([-\infty,a)) 是开集,
\]
则称$u$为**上半连续函数**。
:::

::: remark
由定义可知，将上半连续限制在子空间上可得到子空间上的上半连续函数。
:::

::: remark
如果函数 $u: X\to (-\infty,\infty]$满足$-u$ 是上半连续函数，
那么我们称 $u$ 为下半连续函数。
:::

## 基本性质

::: proposition [通过极限的刻画] {@极限刻画}
$u$ 为拓扑空间 $X$ 上的上半连续函数当且仅当对于任意的$x\in X$，我们有
\[
\limsup_{y\to x} u(y):=\inf_{U_x\in \mathcal{U}} \sup_{y\in U_x}
u(y)=u(x)
\]
这里的$\mathcal{U}$表示$x$的所有开邻域。
:::

::: proof
由定义可知
\[
\limsup_{y\to x} u(y)=\inf_{U_x\in \mathcal{U}} \sup_{y\in U_x}
 u(y)\geq u(x)
\]
故只需证不等式的另一边，
:::

::: proposition [紧集上的上半连续函数]
设$u$ 为拓扑空间 $X$ 上的上半连续函数，$K$为$X$中的紧子集。那么$u$可在$K$
上取到（$K$上的）极大值，即存在 $x\in K$，使得
\[
u(x)=\sup_{y\in K} u(y)<\infty
\]
:::

::: proposition
设$u$ 为拓扑空间 $X$ 上的上半连续函数

1. 上半连续函数的有限正线性组合是上半连续的

2. 设 $\chi:I\to \mathbb{R}$ 为$\mathbb{R}$ 的一个区间 $I$上的递增、凸函数，
   且 $u(X)\subset I$。那么 $\chi\circ u$ 是上半连续函数。

3. 设 $(u_\alpha)_{\alpha\in A}$ 为一族上半连续函数，那么
   $u=\inf_{\alpha\in A}u_\alpha$ 是上半连续函数。

:::

如果$X=(X,d)$是度量空间，那么$X$上的上半连续函数将有更好的性质：

::: proposition [度量空间上的上半连续函数]
设$u$ 为度量空间 $(X,d)$ 上的上半连续函数，那么存在一列单调下降的连续函数
$u_1\geq u_2\geq \cdots$ 使得
\[
\lim_{n\to \infty} u_n=u
\]
:::

## 上半连续正规化

在此节中我们假设$X$是度量空间$(X,d)$。

::: definition [上半连续正规化]
设$X$为一个度量空间，$Y$为$X$的一个子空间。对$u:Y\to [-\infty,\infty)$
为$Y$上的函数，我们定义 $u$的**上半连续正规化**为$\overline{Y}$上的函数
$u^*:\overline{Y}\to [-\infty,\infty)$，对于$\overline{Y}$上的每一
点$x\in \overline{Y}$，我们有
\[
u^*(x)=\limsup_{y\to x}u(y)=\inf_{\epsilon>0}
\sup_{y\in B_\epsilon(x)\cap Y} u(y)
\]
:::

::: remark
我们定义$u:Y\to (-\infty,\infty]$的**下半连续正规化**为$u_*:=-(-u)^*$。
:::

::: proposition
1. $u^*:\overline{Y}\to [-\infty,\infty)$ 是上半连续函数

2. 若 $u\leq v$，则 $u^*\leq v^*$

:::

::: theorem [Choquet 定理]
设$(X,d)$是可分度量空间，$(u_\alpha)_{\alpha\in A}$为一族$X$上的函数，
$u_\alpha:X\to [-\infty,\infty)$

1. 若 $(u_\alpha)_{\alpha\in A}$上半连续，则$u=\inf_{\alpha\in A}
      u_\alpha$上半连续。且存在$A$的可数子集$A'$使得
   $u=\inf_{\alpha\in A'} u_\alpha$。

2. 若 $(u_\alpha)_{\alpha\in A}$局部有上界，则$u=
      (\sup_{\alpha\in A} u_\alpha)^*$上半连续。且存在$A$的可数子集$A'$使得
   $(\sup_{\alpha\in A} u_\alpha)^*=
      (\sup_{\alpha\in A'} u_\alpha)^*$

:::

```terms
上半连续函数:
  en: upper semi-continuous function
  de: oberhalbstetige Funktion
  fr: fonction supérieurement semicontinue
  la: functio super semicontinua
上半连续性:
  en: upper semi-continuity
  de: oberhalbstetigkeit
  fr: semicontinuité supérieure
  la: semicontinuitas superior
上半连续正规化:
  en: upper semi-continuous regularization
```
