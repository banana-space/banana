---
title: 二次型
categories: [线性代数]
notices:
  - name: 问题
    items:
      - “分类”一节需要扩充。
---

::: convention
在本文中，

- 所有[[环]]都是[[交换环]]。

:::

**二次型**是线性代数中的概念，
是[[向量空间]]上二次齐次多项式函数的更典范（即不依赖于基的选取）的说法。
如函数
\[
V \to k, \quad (x, y) \mapsto 4x^2 - 2xy + 3y^2
\]
可以视为 $k^2$ 上的二次型。

## 定义

::: definition
域 $k$ 的线性空间 $V$ 上**二次型**指的是函数
$q \colon V  \to k$，满足对任意 $v\in V$，$a \in k$ 有
$q(av)= a^2 q(v)$，且 $B_q(u,v)=q(u+v) - q(u) - q(v)$
是 $V$ 上[[双线性型]]。也称 $(V,q)$ 为**二次空间**。
于是可定义二次空间之间的**同态**为保持二次型的[[线性映射]]。
:::

::: definition
设 $V$ 为有限维 $k$-线性空间。称 $V$ 上二次型 $q$
为**非退化**，指的是：
$$
\begin{cases}
  B_q\ 为非退化,
  & \operatorname{char}k\ne2\ 或\ 2\mid\dim V;\\
  B_q\ 的根为一维,\ 且\ q\ 限制在其上非零,
  & \operatorname{char}k=2\ 且\ 2\nmid\dim V.
\end{cases}
$$
:::

::: definition
设 $(V,q)$ 是二次空间。若 $q(v) = 0$，
则称 $v$ 为**迷向向量**。如子空间 $W\subseteq V$
中向量都是迷向向量，则称 $W$ 为**迷向子空间**。
:::

## 性质

当 $k$ 的[[特征 (代数)|特征]]非 $2$ 时，
二次型与[[对称双线性型]]一一对应。

::: proposition {@极化}
$k$ 是域，$\operatorname{char}k\ne2$，
$V$ 是 $k$-线性空间。则有一一对应
$$
\{V\,上二次型\,q\}\leftrightarrow
\{V\,上对称双线性型\,B\},
$$
两个方向映射分别为
$q\mapsto B_q(u,v)=q(u+v)-q(u)-q(v)$ 与
$B\mapsto q_B(v)=\frac{1}{2}B(v,v)$。
:::

因此这时谈论二次型和谈论对称双线性型是完全相同的，
一些[[双线性型]]的理论也可以移植过来。
例如二次空间中的向量也有正交的概念，
也可以谈论正交补、核等概念。
相应理论是完全平行的：二次型非退化等价于相应的双线性型核为 $0$；
迷向等价于正交补包含本身。

## 分类

## 推广

::: definition
环 $R$ 的[[模]] $M$ 上**二次型**指的是函数 $q\colon M\to R$，
满足对任意 $m\in M$，$r\in R$ 有 $q(rm)=r^2q(m)$，且
$B_q(m,n)=q(m+n)-q(m)-q(n)$ 是 $M$ 上[[双线性型]]。
当 $M$ 为[[有限生成模|有限生成]][[投射模]]时，称 $q$ 为**非退化**，
指的是其在环 $R$ 各个[[素理想]]的[[剩余域]]处非退化。
:::

::: proposition
$R$-模 $M$ 上的二次型相当于 $\Gamma^2M$ 到 $R$ 的映射，
其中 $\Gamma$ 指[[除幂积]]。
:::

::: remark
于是 @极化 便可解释为，当 $2\in R^\times$ 时，
自然映射 $\operatorname{Sym}^2M\to\Gamma^2M$ 是同构。
:::

```terms
二次型:
  en: quadratic form
  de: quadratische Form
  fr: forme quadratique
  la: forma quadratica
非退化:
  en: nondegenerate
  de: nicht ausgeartet
  fr: non dégénéré
  la: non degeneratus
迷向:
  en: isotropic
  de: isotrop
  fr: isotropique
  la: isotropicus
```
