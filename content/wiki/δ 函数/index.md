---
title: '$\delta$ 函数'
aliases: [Delta 函数]
categories: [泛函分析]
navboxes: [泛函分析]
---

**$\delta$ 函数**是对测试函数在指定点取值的[[分布]]。
直观地说，它表示集中在一点的单位质量。
位于 $a$ 的 Dirac $\delta$ 函数记为 $\delta_a$，
它对测试函数 $\varphi$ 的作用为 $\delta_a(\varphi)=\varphi(a)$。

## 定义

设 $n\geq1$，$U\subseteq\mathbb{R}^n$ 是开集。
沿用[[分布|分布的定义]]中的记号，
$\mathscr D(U)=C_{\mathrm c}^\infty(U)$ 是实值[[紧支函数|紧支]]、[[光滑函数]]构成的
[[分布|测试函数]]空间，$\mathscr D(U)'$ 是其连续线性对偶。
分布 $T$ 对测试函数 $\varphi$ 的作用记为
$T(\varphi)$ 或 $\langle T,\varphi\rangle$。

::: definition [Dirac $\delta$ 函数] {@def-dirac-delta}
设 $a\in U$。
定义位于 $a$ 的 **Dirac $\delta$ 函数**为线性泛函
\[
\delta_a\colon\mathscr D(U)\longrightarrow\mathbb{R},
\qquad \delta_a(\varphi)=\varphi(a).
\]
当 $0\in U$ 时，位于原点的 $\delta$ 函数记为 $\delta_0$，也简记为 $\delta$。
:::

## 积分记号

以下取 $U=\mathbb{R}^n$。
称实值可测函数 $f$ 为[[局部可积函数]]，如果对每个紧集 $K\subseteq\mathbb{R}^n$，均有
\[
\int_K|f(x)|\,dx<\infty.
\]
将这类函数按几乎处处相等归为同一等价类，所得空间记为
$L^1_{\mathrm{loc}}(\mathbb{R}^n)$。
按[[分布|局部可积函数定义分布的方式]]，有线性映射
\[
\begin{aligned}
  J\colon L^1_{\mathrm{loc}}(\mathbb{R}^n)&\longrightarrow\mathscr D(\mathbb{R}^n)',\\
  f&\longmapsto T_f,
  \qquad T_f(\varphi)=\int_{\mathbb{R}^n}f(x)\varphi(x)\,dx.
\end{aligned}
\]
测试函数与局部可积函数在这个式子中分别记为 $\varphi$ 和 $f$。
若 $T_f=T_g$，则 $f=g$ 几乎处处，所以 $J$ 是单射。
这一结论是测试函数确定局部可积函数的基本性质，参见 [@Dyatlov2021, 第 1 节]。
通过 $J$，可以将局部可积函数空间视为分布空间的线性子空间。

Dirac $\delta$ 函数也常记为 $\delta(x-a)$。
沿用局部可积函数的积分记号，将它对测试函数的作用表示为
\[
\int_{\mathbb{R}^n}\delta(x-a)\varphi(x)\,dx=\varphi(a).
\]
对每个 $\varphi\in\mathscr D(\mathbb{R}^n)$，此式都成立。
这里的积分符号表示 $\langle\delta_a,\varphi\rangle$，
即 @def-dirac-delta 中的取值运算。

::: remark [分布记号与函数值]
$\delta(x-a)$ 表示分布 $\delta_a$，其中的 $x$ 用来标明配对中的积分变量。
定义赋予它对测试函数的作用 $\varphi\mapsto\varphi(a)$，
并未赋予它逐点的函数值。
更精确地，$\delta_a$ 不属于嵌入 $J$ 的像，如下面的命题所示。
:::

::: proposition {@prop-dirac-not-regular}
不存在 $f\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$ 使得 $T_f=\delta_a$。
:::

::: proof
取 $\chi\in C_{\mathrm c}^\infty(\mathbb{R}^n)$，满足
$0\leq\chi\leq1$，$\chi(0)=1$，且支撑包含于单位闭球。
这样的函数可由[[紧支函数|光滑鼓包函数]]构造。
对 $\varepsilon>0$，令
$\chi_\varepsilon(x)=\chi((x-a)/\varepsilon)$。
若 $T_f=\delta_a$，则
\[
1=|\langle\delta_a,\chi_\varepsilon\rangle|
=\left|\int f(x)\chi_\varepsilon(x)\,dx\right|
\leq\int_{|x-a|\leq\varepsilon}|f(x)|\,dx.
\]
由 Lebesgue 积分的绝对连续性，右边在 $\varepsilon\to0^+$ 时趋于零，
得到矛盾。
:::

## 积分逼近

$\delta$ 函数可以由普通函数在积分意义下的极限定义。
这里先将普通函数与测试函数相乘并积分，再取极限。

::: definition [积分意义下的 $\delta$ 逼近] {@def-delta-approximation}
设 $a\in\mathbb{R}^n$，对每个 $\varepsilon>0$，
给定 $\rho_{\varepsilon,a}\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$。
若对每个 $\varphi\in\mathscr D(\mathbb{R}^n)$，均有
\[
\lim_{\varepsilon\to0^+}
\int_{\mathbb{R}^n}\rho_{\varepsilon,a}(x)\varphi(x)\,dx
=\varphi(a),
\]
则称 $\rho_{\varepsilon,a}$ 在**分布意义下收敛于 $\delta_a$**。
:::

由[[分布|分布的弱星收敛]]，这正是
$T_{\rho_{\varepsilon,a}}\to\delta_a$ 的含义。
极限对每个测试函数的作用均为 $\varphi(a)$，
所以它与 @def-dirac-delta 给出同一个分布。

::: remark [嵌入与闭包] {@rem-delta-closure}
积分逼近是在分布空间中考察 $J(f)=T_f$ 的极限。
下面的例子将说明
\[
\delta_a\in
\overline{J\bigl(L^1_{\mathrm{loc}}(\mathbb{R}^n)\bigr)}
\setminus J\bigl(L^1_{\mathrm{loc}}(\mathbb{R}^n)\bigr),
\]
其中闭包取在 $\mathscr D(\mathbb{R}^n)'$ 的弱星拓扑中。
因此，将普通函数嵌入分布空间后取极限，可以得到原空间中没有的对象。
:::

::: example [矩形脉冲]
在实线上，设
\[
\rho_{\varepsilon,a}(x)=
\begin{cases}
  \dfrac1{2\varepsilon},&|x-a|\leq\varepsilon,\\
  0,&|x-a|>\varepsilon.
\end{cases}
\]
它的积分为 $1$，非零部分随 $\varepsilon\to0^+$ 收缩到 $a$。
对任意测试函数 $\varphi$，有
\[
\int_{\mathbb{R}}\rho_{\varepsilon,a}(x)\varphi(x)\,dx
=\frac1{2\varepsilon}
  \int_{a-\varepsilon}^{a+\varepsilon}\varphi(x)\,dx.
\]
由 $\varphi$ 在 $a$ 处连续，右边的平均值趋于 $\varphi(a)$。
因而这族矩形脉冲在分布意义下收敛于 $\delta_a$。
:::

也可以用光滑函数实现这种逼近。
取非负函数 $\rho\in C_{\mathrm c}^\infty(\mathbb{R}^n)$，
满足 $\int_{\mathbb{R}^n}\rho(x)\,dx=1$。
这样的函数可由非零的非负[[紧支函数|鼓包函数]]
除以其积分得到。定义
\[
\rho_{\varepsilon,a}(x)
=\varepsilon^{-n}\rho\left(\frac{x-a}{\varepsilon}\right).
\]
作代换 $x=a+\varepsilon y$，得到
\[
\int_{\mathbb{R}^n}\rho_{\varepsilon,a}(x)\varphi(x)\,dx
=\int_{\mathbb{R}^n}\rho(y)\varphi(a+\varepsilon y)\,dy
\longrightarrow\varphi(a).
\]
最后一步利用 $\varphi(a+\varepsilon y)$ 在 $\rho$ 的紧支撑上一致趋于
$\varphi(a)$，以及 $\int\rho=1$。
因此不同形状的逼近函数可以给出同一个 $\delta$ 分布，
这也证明了 @rem-delta-closure 中的闭包关系。

## 导数与阶梯函数

这一节在实线 $\mathbb{R}$ 上讨论。
按[[分布|分布导数]]的定义，
分布 $T$ 的导数满足
\[
\langle T',\varphi\rangle=-\langle T,\varphi'\rangle,
\qquad\varphi\in\mathscr D(\mathbb{R}).
\]
对 $T=\delta_a$，由取值定义得到
\[
\langle\delta_a',\varphi\rangle=-\varphi'(a).
\]
逐次求导可得，对任意非负整数 $k$，有
\[
\langle\delta_a^{(k)},\varphi\rangle=(-1)^k\varphi^{(k)}(a).
\]
因此 $\delta$ 函数的各阶导数也由它们对测试函数的作用确定。

分布求导与这种极限相容。
若 $T_j\to T$，则对每个测试函数 $\varphi$，有
\[
\langle T_j',\varphi\rangle
=-\langle T_j,\varphi'\rangle
\longrightarrow-\langle T,\varphi'\rangle
=\langle T',\varphi\rangle.
\]
这里 $\varphi'$ 仍是测试函数。
特别地，光滑逼近函数满足
$T_{\rho_{\varepsilon,a}'}\to\delta_a'$。

::: example [阶梯函数的导数]
设 [[Heaviside 函数|Heaviside 阶梯函数]]为
\[
H(x)=
\begin{cases}
  0,&x<0,\\
  1,&x\geq0.
\end{cases}
\]
它局部可积，因而定义了分布 $T_H$。
对任意 $\varphi\in\mathscr D(\mathbb{R})$，有
\[
\langle T_H',\varphi\rangle
=-\int_0^\infty\varphi'(x)\,dx
=\varphi(0)=\langle\delta_0,\varphi\rangle.
\]
这里用到 $\varphi$ 有紧支撑，在充分大的 $x$ 处为零。
因而 $T_H'=\delta_0$，通常简记为 $H'=\delta_0$。
改变 $H(0)$ 的值不影响它定义的分布，也不影响这一等式。
:::

从积分看，$H$ 是 $\delta_0$ 的一个分布原函数。
例如对上一节位于原点的矩形脉冲，令
\[
H_\varepsilon(x)=\int_{-\infty}^x\rho_{\varepsilon,0}(t)\,dt
=\begin{cases}
  0,&x\leq-\varepsilon,\\
  \dfrac{x+\varepsilon}{2\varepsilon},&-\varepsilon<x<\varepsilon,\\
  1,&x\geq\varepsilon.
\end{cases}
\]
这个连续函数将高度为 $1$ 的跳跃替换为一小段斜坡，
其分布导数为 $T_{\rho_{\varepsilon,0}}$。
由于 $0\leq H_\varepsilon\leq1$，且在每个 $x\neq0$ 处趋于 $H(x)$，
由[[控制收敛定理]]可知 $T_{H_\varepsilon}\to T_H$。
对这个收敛取分布导数，就得到
$T_{\rho_{\varepsilon,0}}\to\delta_0$。
这将斜坡逼近阶梯与脉冲逼近点质量联系起来。

更一般地，在 $a$ 处高度为 $c$ 的阶梯 $cH(x-a)$
具有分布导数 $c\delta_a$。
其普通导数在 $x\neq a$ 处为零，分布导数中的点质量记录了跳跃的大小。

## 与 Dirac 测度的关系

也可以用[[测度]]表达点质量。
对 Borel 集 $E\subseteq\mathbb{R}^n$，定义 **Dirac 测度**
\[
\delta_a(E)=
\begin{cases}
  1,&a\in E,\\
  0,&a\notin E.
\end{cases}
\]
它是总质量为 $1$ 的正测度，并且对任意有界 Borel 函数 $f$，有
\[
\int_{\mathbb{R}^n}f(x)\,d\delta_a(x)=f(a).
\]
将这个积分限制到测试函数上，就得到 @def-dirac-delta 中的分布。
因此，Dirac 测度与对应的分布使用相同记号。

## 参考文献

```bibliography
Dyatlov2021:
  type: article
  author: Semyon Dyatlov
  title: 'Lecture Notes for 18.155, Section 1'
  year: 2021
  note: 关于测试函数的积分如何确定局部可积函数
  url: https://math.mit.edu/~dyatlov/18.155-F21/Lecture1.pdf
Guth2008:
  type: article
  author: Alan Guth
  title: Dirac Delta Function as a Distribution
  year: 2008
  note: 'MIT 8.323 课程讲义 4, 第 2 页介绍取值定义与积分记号, 第 4 页讨论分布导数'
  url: https://web.mit.edu/8.323/spring08/notes/ft1ln04-08.pdf
```

```terms
Dirac delta 函数:
  en: Dirac delta function
```
