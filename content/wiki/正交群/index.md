---
title: 正交群
categories: [群论, 线性代数, Lie 理论, 代数群理论]
notices:
  - name: 问题
    items:
      - “表示论”“例子”各节需要扩充。
      - “Lie 群结构”一节的命题中，“二者均是半单 Lie 群”似乎在 $n \le 2$ 时不成立（例如 $\operatorname{SO}(2,\mathbb{R})$ 是交换的）。
navboxes: [Lie 群]
---

[[交换环]] $A$ 上的**正交群**是其上所有同阶[[正交矩阵]]
（即转置等于逆的[[方阵]]）构成的群，
更一般地说，给定一个[[二次型]] $q$，
它是所有保持此二次型的自同态构成的群。
正交群是 [[Lie 群]]、[[代数群]]的重要例子。
给定 $\mathbb{R}^n$ 上的标准[[度量]]后，正交群是保持原点的[[等距同构群]]。

正交群通常记作 $\operatorname{O}(n,A)$、$\operatorname{O}_n(A)$ 或 $\operatorname{O}(V)$，
在一般情形则记作 $\operatorname{O}(q, V)$。

## 定义

::: definition {@对角}
设 $A$ 是[[交换环]]，且 $2$ 在 $A$ 中可逆。
定义**正交群** $\operatorname{O}(n,A)$ 为集合
\[
\{ X \in \operatorname{M}_n(A) \mid X^t X = 1 \}
\]
配备矩阵乘法得到的群。
:::

::: definition {@一般}
对 $A$ 上的[[投射模]] $V$，
定义**正交群** $\operatorname{O}(q,V)$ 为集合
\[
\{ g \in \operatorname{End}_A(V) \mid
\forall x\in V, q(x) = q(g(x)) \}，
\]
配备映射复合作为乘法得到的群。
:::

此时，$O(n, A)$ 是 $A^n$ 上二次型
\[
q(x_1, \cdots, x_n)=x_1^2 + \cdots + x_n^2
\]
对应的特例。如果此和式中有 $p$ 个正号，$q$ 个负号，
则得到[[不定正交群]] $O(p,q,A)$。

::: remark
对非交换环无法定义正交群，其原因在于其上没有二次型理论。
不过在环有个[[反对合]]时，可以有[[半双线性型]]理论，
从而定义[[酉群]]的类似物。
例如可以基于[[四元数]]定义[[紧辛群]]。
:::

## 性质

### Lie 群结构

当 $A$ 是 $\mathbb{R}$ 或 $\mathbb C$ 时，可以为 $\operatorname{O}(n,A)$ 赋予 [[Lie 群]]结构。
这是 [[Lie 群]]的重要例子。

::: proposition [Lie 群结构]
$\operatorname{O}(n,\mathbb R)$ 和 $\operatorname{O}(n,\mathbb C)$
由 $\mathbb{R}^{n^2}$ 或 $\mathbb C^{n^2}$ 中方程的零点集定义。
这为 $\operatorname{O}(n,\mathbb R)$ 赋予了[[光滑流形]]结构，
并为 $\operatorname{O}(n,\mathbb C)$ 赋予了[[复流形]]结构。
此时，$\operatorname{O}(n,\mathbb R)$ 是实 Lie 群，
$\operatorname{O}(n,\mathbb C)$ 是复 [[Lie 群]]。
此时，二者均是[[半单 Lie 群]]。
:::

作为 Lie 群，正交群有对应的 [[Lie 代数]]。

::: proposition [Lie 代数]
正交群 $\operatorname{O}(n, \Bbbk)$（$\Bbbk = \mathbb{R}$ 或 $\mathbb C$）
的 Lie 代数是向量空间
\[
\mathfrak{o}(n, \Bbbk) =
\{ X \in \operatorname{M}(n, \Bbbk) \mid X + X^t = 0 \},
\]
配有 [[Lie 括号]] $[X, Y] = XY - YX$。
:::

此外，它还有下述拓扑性质。

::: proposition [紧性]
$\operatorname{O}(n,\mathbb{R})$ 紧，但 $\operatorname{O}(n,\mathbb C)$ 不[[紧]]，
后者的[[极大紧子群]]是前者。
:::

::: proposition [连通性]
$\operatorname{O}(n,\mathbb R)$ 和 $\operatorname{O}(n,\mathbb C)$ 均不连通：
两个连通分支分别由行列式为 $1$ 和为 $-1$ 的矩阵构成
（事实上，前者是后者的[[强形变收缩]]）。
它们原点所在的连通分支即是相应的[[特殊正交群]]。
:::

::: proposition [基本群]
$\operatorname{O}(n,\mathbb R)$ 和 $\operatorname{O}(n,\mathbb C)$ 的[[基本群]]，
在 $n = 1$ 时是 $0$，$n = 2$ 时是 $\mathbb Z$，
$n \geq 3$ 时是 $\mathbb Z / 2$。
:::

## 推广

可以将正交群推广到一般[[概形]]上，成为[[群概形]]。

::: definition
设 $S$ 是概形，$V$ 是其上[[代数向量丛|向量丛]]，
$L$ 是其上[[代数线丛|线丛]]，$q\colon V\to L$
是集合值函子的自然变换，满足 $q$ 在 $S$
的仿射局部上是非退化[[二次型]]。定义 $q$
的**正交群**为 $S$ 上群概形
\[
\mathsf{Sch}_S^{\text{op}} \to \mathsf{Grp},
\quad X \mapsto \{\varphi\in\operatorname{Aut}
_{\mathcal{O}_X}(V_X)\mid q\circ\varphi=q\},
\]
记作 $\operatorname{O}(q)$ 或 $\operatorname{O}(q,S)$。它是[[约化群概形]]。
:::

::: example
对偶数 $n$，考虑 $S=\operatorname{Spec}\mathbb{Z}$，$V=\mathbb{Z}^n$，
$L=\mathbb{Z}$，$q(x_1,\ldots,x_n)=x_1x_2+\cdots+x_{n-1}x_n$。
此时 $\operatorname{O}(q)$ 称为**标准分裂正交群**，记作 $\operatorname{O}_n$
或 $\operatorname{O}_{n,\mathbb{Z}}$。注意这并不是 @对角 中 $\operatorname{O}(n,A)$。
:::

::: example
对奇数 $n$，考虑 $S=\operatorname{Spec}\mathbb{Z}$，$V=\mathbb{Z}^n$，
$L=\mathbb{Z}$，$q(x_1,\ldots,x_n)=x_1x_2+\cdots+x_{n-2}x_{n-1}+x_n^2$。
此时 $\operatorname{O}(q)$ 称为**标准分裂正交群**，记作 $\operatorname{O}_n$
或 $\operatorname{O}_{n,\mathbb{Z}}$。注意这并不是 @对角 中 $\operatorname{O}(n,A)$。
:::

## 表示论

## 例子

```terms
正交群:
  en: orthogonal group
  de: orthogonale Gruppe
  fr: groupe orthogonale
  grc: ὀρθογωνία ὁμάς
  la: caterva orthogonalis
```
