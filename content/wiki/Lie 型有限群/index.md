---
title: Lie 型有限群
aliases: [约化有限群, 李型单群, Lie 型单群]
categories: [有限群论]
navboxes: [群论, 几何表示论]
---

<problems>
- “Lie 型单群”的定义中没有列举不给出单群的例外情况。
- “Suzuki 群”“Ree 群”各节需要扩充。
</problems>

::: convention
在本文中，

- $p$ 是[[素数]]，$\mathbb{F}$ 是 $\mathbb{F}_p$
  的[[代数闭包]]。
- 对[[有限群]] $G$，以 $\operatorname{O}_{p'}(G)$
  表示 $G$ 中最大的、阶与 $p$ 互素的[[正规子群]]，以
  $\operatorname{O}^{p'}(G)$ 表示 $G$ 中最小的、
  [[指数 (群论)|指数]]与 $p$ 互素的正规子群。

:::

**Lie 型有限群**，有时简称 **Lie 型群**，
指一类来源于[[约化群]]（[[半单 Lie 群]]的[[代数群]]类比与推广）、
行为类似约化群的有限群。在[[有限单群分类]]中，除素数阶[[循环群]]、[[交错群]]以外，
所有的无限族都是 Lie 型群。

## 定义

::: definition [约化有限群] {@red}
称[[有限群]] $G$ 为**约化有限群**，指其形如
$\mathbf{G}^F$，其中 $\mathbf{G}$ 是
$\mathbb{F}$ 上[[约化群]]，$F$ 是其 [[Steinberg 自同态]]，
$\mathbf{G}^F$ 表示 $F$ 在 $\mathbf{G}(\mathbb{F})$
中的不动点集。常将 $\mathbf{G}$、$F$ 视为约化有限群
$G$ 的数据的一部分，并称 $p=\operatorname{char}
  (\mathbb{F})$ 为 $G$ 的**自然特征**。
:::

::: definition [Lie 型有限群] {@lie}
称有限群 $H$ 为 **Lie 型有限群**，指其形如
$N/K$，其中 $K\subseteq N$ 是约化有限群 $G$ 的子群，
满足 $K\subseteq\operatorname{O}_{p'}(G)$，
$N\supseteq\operatorname{O}^{p'}(G)$。这里 $p$
是 $G$ 的自然特征，我们也把它称为 $H$ 的**自然特征**。
:::

::: remark
Lie 型有限群在不同的文献中有不同的定义，
这里采用一个比较广泛的。有的文献把这里的约化有限群称为
Lie 型有限群，有的文献要求 @red 中 $\mathbf{G}$
是半单代数群甚至单代数群，还有的文献要求 @lie
中 $K=\operatorname{O}_{p'}(G)$，
$N=\operatorname{O}^{p'}(G)$。
:::

::: remark
这里的定义让 [[Tits 群]]不是 Lie 型有限群，但会使理论比较统一。
一个道理是 Tits 群没有 [[$(B,N)$ 对]]。
:::

::: definition [Lie 型单群]
设 $G=\mathbf{G}^F$ 是约化有限群，其中 $\mathbf{G}$
是[[单代数群]]。则除了 $G$ 很小的有限多种情况之外，
$\operatorname{O}^{p'}(G)/\operatorname{O}_{p'}(G)$
都是[[单群]]，此构造给出的单群称为 **Lie 型单群**。
:::

::: example
当 $G = \mathrm{SL}_n(\mathbb{F}_q)$
为[[根系]] $A_{n-1}$ 对应的单代数群的 $\mathbb{F}_q$-点集时，
相应的 Lie 型单群为 $\mathrm{PSL}_n(\mathbb{F}_q)$。
它在下面的记号中也记为 $A_{n-1}(q)$。
:::

## 性质

::: theorem
Lie 型有限群都有 [[$(B,N)$ 对]]。
:::

::: theorem
设 $G$ 是 Lie 型单群，其它记号同上。
分别以 $\mathbf{G}^{\mathrm{sc}}$ 和
$\mathbf{G}^{\mathrm{ad}}$ 记 $\mathbf{G}$
的万有覆叠及伴随形式，以 $G^{\mathrm{sc}}$ 和
$G^{\mathrm{ad}}$ 记相应的 Steinberg 不动点，则
$$
\operatorname{O}^{p'}(G)/\operatorname{O}_{p'}(G)
=\operatorname{im}(G^{\mathrm{sc}}\to G^{\mathrm{ad}}).
$$
:::

## 分类

以下列出 Lie 型单群的分类。

### Chevalley 群

Chevalley 群大致是[[分裂约化群|分裂]]单群的 $\mathbb{F}_q$-点之集。

::: definition [Chevalley 群]
当 $G = \mathbf{G}_0(\mathbb{F}_q)$
为 $\mathbb{F}_q$ 上[[分裂约化群|分裂]]单群 $\mathbf{G}_0$ 的 $\mathbb{F}_q$-点之集，
$\mathbf{G} = \mathbf{G}_0 \times_{\mathbb{F}_q} \mathbb{F}$ 为其基变换，
$F$ 为相应的[[Frobenius 态射|几何 Frobenius 态射]]时，相应的单群称为 Chevalley 群。
根系 $R$ 在 $\mathbb{F}_q$ 上对应的单群记为 $R(q)$。
:::

Chevalley 群列表如下：

| 名称 | 记号 | 阶数 | 重复 |
| --- | --- | --- | --- |
| $A_n$根系典型 Chevalley 群 | $\begin{matrix}A_n(q),\ n\gt0\\ (n,q)\ne(1,2),(1,3)\end{matrix}$ | $\frac{q^{\frac 12n(n+1)}}{(n+1,q-1)}\prod_{i=1}^n\left(q^{i+1}-1\right)$ | $\begin{matrix}A_1(4)\cong A_1(5)\\A_1(7)\cong A_2(2)\end{matrix}$ |
| $B_n$根系典型 Chevalley 群 | $\begin{matrix}B_n(q),\ n\gt1\\ (n,q)\ne(2,2)\end{matrix}$ | $\frac{q^{n^2}}{(2,q-1)}\prod_{i=1}^n\left(q^{2i}-1\right)$ | $\begin{matrix}B_n(2^m)\cong C_n(2^m)\\ B_2(3)\cong{}^2A_3(2^2)\end{matrix}$ |
| $C_n$根系典型 Chevalley 群 | $\begin{matrix}C_n(q),\ n\gt2\end{matrix}$ | $\frac{q^{n^2}}{(2,q-1)}\prod_{i=1}^n\left(q^{2i}-1\right)$ | $C_n(2^m)\cong B_n(2^m)$ |
| $D_n$根系典型 Chevalley 群 | $\begin{matrix}D_n(q),\ n\gt3\end{matrix}$ | $\frac{q^{n(n-1)}(q^n-1)}{(4,q^n-1)}\prod_{i=1}^{n-1}\left(q^{2i}-1\right)$ | 无 |
| [[E6\|$E_6$]] 根系例外 Chevalley 群 | $E_6(q)$ | $\frac{q^{36}}{(3,q-1)}\prod_{\tiny\begin{matrix}i\in\{2,5,\\ 6,8,9,12 \}\end{matrix}}\left(q^i-1\right)$ | 无 |
| [[E7\|$E_7$]] 根系例外 Chevalley 群 | $E_7(q)$ | $\frac{q^{63}}{(2,q-1)}\prod_{\tiny\begin{matrix}i\in\{2,6,8,\\ 10,12,14,18 \}\end{matrix}}\left(q^i-1\right)$ | 无 |
| [[E8\|$E_8$]] 根系例外 Chevalley 群 | $E_8(q)$ | $q^{120}\prod_{\tiny\begin{matrix}i\in\{2,8,12,\\ 14,18,20,24,30 \}\end{matrix}}\left(q^i-1\right)$ | 无 |
| [[F4\|$F_4$]] 根系例外 Chevalley 群 | $F_4(q)$ | $q^{24}\prod_{\tiny\begin{matrix}i\in\{2,6,8,12 \}\end{matrix}}\left(q^i-1\right)$ | 无 |
| [[$\mathrm{G}_2$]] 根系例外 Chevalley 群 | $\begin{matrix}G_2(q)\\q\ne 2\end{matrix}$ | $q^{6}\prod_{\tiny\begin{matrix}i\in\{2,6\}\end{matrix}}\left(q^i-1\right)$ | 无 |

### Steinberg 群

Steinberg 群大致是 Chevalley 群在 [[Dynkin 图自同构]]与 Galois 作用之复合下的不动点，
也大致是不分裂的单群的 $\mathbb{F}_q$-点。具体来说：

::: definition [Steinberg 群]
当 $(\mathbf{G}, F)$ 为以下情况时：

- $\mathbf{G}_0$ 为 $A_n$、$D_n$、$E_6$ 对应的
  $\mathbb{F}_q$ 上分裂单群，$\mathbf{G}$ 为其基变换，
  $F = \operatorname{Frob}\circ \sigma$
  为几何 Frobenius 态射复合阶为 $2$ 的 [[Dynkin 图自同构]]。

- $\mathbf{G}_0$ 为 $D_4$ 对应的
  $\mathbb{F}_q$ 上分裂单群，$\mathbf{G}$ 为其基变换，
  $F = \operatorname{Frob}\circ \sigma$
  为几何 Frobenius 态射复合阶为 $3$ 的 [[Dynkin 图自同构]]。

相应的 $G$ 称为 **Steinberg 群**，记为 $^m R(q^m)$。
:::

Steinberg 群列表如下：

| 名称 | 记号 | 阶数 | 重复 |
| --- | --- | --- | --- |
| $A_n$根系典型 Steinberg 群 | $\begin{matrix}{}^2A_n(q^2),\ n\gt0\\n\ne 1,\ (n,q)\ne(2,2)\end{matrix}$ | $\frac{q^{\frac12n(n+1)}}{(n+1,q+1)}\prod_{i=1}^n\left(q^{i+1}-(-1)^{i+1}\right)$ | ${}^2A_3(2^2)\cong B_2(3)$ |
| $D_n$根系典型 Steinberg 群 | $\begin{matrix}{}^2D_n(q^2),\ n\gt3\end{matrix}$ | $\frac{q^{n(n-1)}}{(4,q^n+1)}(q^n+1)\prod_{i=1}^{n-1}\left(q^{2i}-1\right)$ | 无 |
| $E_6$根系例外 Steinberg 群 | ${}^2E_6(q^2)$ | $\frac{q^{36}}{(3,q+1)}\prod_{\tiny\begin{matrix}i\in\{2,5,\\ 6,8,9,12 \}\end{matrix}}\left(q^i-(-1)^i\right)$ | 无 |
| $D_4$根系例外 Steinberg 群 | ${}^3D_4(q^3)$ | $\footnotesize q^{12}(q^8+q^4+1)(q^6-1)(q^2-1)$ | 无 |

### Suzuki 群

### Ree 群

## 参考文献

```bibliography
MR2850737:
  type: book
  author: ['Malle, Gunter', 'Testerman, Donna']
  title: Linear algebraic groups and finite groups of Lie type
  series: Cambridge Studies in Advanced Mathematics
  number: 133
  publisher: 'Cambridge University Press, Cambridge'
  year: 2011
  pages: xiv+309
  doi: 10.1017/CBO9780511994777
MR4211777:
  type: book
  author: ['Digne, François', 'Michel, Jean']
  title: Representations of finite groups of Lie type
  series: London Mathematical Society Student Texts
  number: 95
  edition: Second
  publisher: 'Cambridge University Press, Cambridge'
  year: 2020
  pages: vii+257
MR2057756:
  type: book
  author: ['Cabanes, Marc', 'Enguehard, Michel']
  title: Representation theory of finite reductive groups
  series: New Mathematical Monographs
  number: 1
  publisher: 'Cambridge University Press, Cambridge'
  year: 2004
  pages: xviii+436
  doi: 10.1017/CBO9780511542763
```

```terms
Lie 型有限群:
  en: finite group of Lie type
约化有限群:
  en: finite reductive group
自然特征:
  en: natural characteristic
```
