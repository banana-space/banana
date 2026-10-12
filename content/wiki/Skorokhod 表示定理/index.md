---
title: Skorokhod 表示定理
categories: [概率论]
notices:
  - name: 问题
    items:
      - '“叙述与证明”一节的引理 2 中，$a_x$、$b_x$ 定义里的不等号似乎写反了：按引理的证明与定理证明中 $Y(x)= a_x$ 的用法，似乎应为 $a_x= \sup\{y: F(y)<x\}$、$b_x= \inf\{y: F(y)>x\}$。相应地，引理 2 证明末段的“由 $y>a_x$ 知 $F(y)\le x$，而由 $y<b_x$ 知 $F(y)\ge x$”似乎应为 $F(y)\ge x$ 与 $F(y)\le x$，定理证明中 $a_x$、$b_x$ 的定义（包括 $b_x= \inf\{y_0: F(y_0)<x\}$ 一处）似乎也应相应改正。'
navboxes: [概率论]
---

::: convention
在本文中，

- 分布函数定义为 $F_X(x)= P(X\le x)$。
  特别地，它是右连续的。

:::

**Skorokhod 表示定理** 是[[概率论]]中的一个定理。
它指出，对任意一个[[依分布收敛|弱收敛]]的[[累积分布函数|分布函数]]序列，
存在一列几乎必然收敛的[[随机变量]]，
其极限的分布函数亦是这个分布函数列弱收敛下的极限。

## 叙述与证明

::: theorem [Skorokhod 表示定理]
若分布函数列 $(F_n)$ 弱收敛至分布函数 $F$，
则存在概率空间 $(\Omega,\mathcal F, P)$ 及其上随机变量 $(Y_n)$、$Y$，
使得 $Y_n$（$Y$）的分布函数是 $F_n$（$F$），且 $Y_n$ 几乎必然收敛到 $Y$。
:::

在给出证明前，我们给出两个引理。

::: lemma {@r.v.-with-distribution-F}
$F$ 为某个分布函数，
则概率空间 $((0,1),\mathcal B_{(0,1)}, m)$ 上随机变量 $Y(x)= \sup\{y: F(y)<x\}$ 的分布函数恰为 $F$。
这里 $(0,1)$ 是单位开区间，$\mathcal B_{(0,1)}$ 是其上 Borel 集，$m$ 是 Lebesgue 测度。
:::

::: proof
我们断言 $Y(x)\le y\iff x\le F(y)$。其实，$(\impliedby)$ 一端明显，
对于 $(\implies)$ 一端，注意若 $x>F(y)$，
则根据 $F$ 右连续知 $x>F(y+\epsilon)$ 对某一 $\epsilon>0$ 成立，
于是 $Y(x)\ge y+\epsilon>y$。

从而，$m(Y\le y)= m((0, F(y)])= F(y)$。
:::

::: lemma {@property-of-a_x,-b_x}
$F$ 为某个分布函数。定义 $a_x= \sup\{y: F(y)>x\}$，$b_x= \inf\{y: F(y)<x\}$，
则 $a_x\le b_x$，且对不同的 $x$，开区间 $(a_x, b_x)$ 不交（注意有可能 $(a_x, b_x)$ 本身就是空集）。
:::

::: proof
任取 $y_1, y_2$ 使得 $F(y_1)< x< F(y_2)$。则 $y_1<y_2$。
先对所有 $y_1$ 取上确界可得 $a_x\le y_2$，再对 $y_2$ 取下确界知 $a_x\le b_x$。

为了证明对不同的 $x$，$(a_x, b_x)$ 不交，我们只须证明对 $y\in (a_x, b_x)$，则 $F(y)=x$。
其实，由 $y>a_x$ 知 $F(y)\le x$，而由 $y<b_x$ 知 $F(y)\ge x$。所以 $F(y)=x$。
:::

我们回到 Skorokhod 表示定理的证明。

::: proof [Skorokhod 表示定理的证明]
如同 @r.v.-with-distribution-F 那样，取 $(\Omega,\mathcal F, P)= ((0,1),\mathcal B_{(0,1)}, m)$，
$Y_n(x)= \sup\{y: F_n(y)<x\}$，$Y(x)= \sup\{y: F(y)<x\}$。
我们断言 $Y_n\overset{\text{a.s.}}{\to} Y$。

设 $a_x= \sup\{y: F(y)>x\}$，$b_x= \inf\{y: F(y)<x\}$，
$\Omega_0= \{x: (a_x, b_x)\ne \varnothing\}$。
$\Omega_0$ 是至多可数的：对每个 $x\in\Omega_0$，我们可以取一个有理数 $q_x\in (a_x,b_x)$。
因为 $(a_x,b_x)$ 两两不交，所以这给出了 $\Omega_0$ 到 $\mathbb Q$ 的单射。
这证明了 $\Omega_0$ 是至多可数的这一断言。

我们断言，对任意 $x\in [0,1]-\Omega_0$，$Y_n(x)$ 收敛到 $Y(x)$。
一方面，取 $y<Y(x)$ 使得 $F$ 在 $y$ 处连续。因为
\[
y< Y(x)\overset{\text{def}}{=} \sup\{y_0: F(y_0)<x \},
\]
所以存在 $y_0>y$ 使得 $F(y_0)< x$。从而 $F(y)< F(y_0)< x$。
因为 $\lim_{n\to +\infty} F_n(y)= F(y)$，所以 $F_n(y)<x $ 当 $n$ 充分大时成立。
即 $Y_n(x) \overset{\text{def}}{=} \sup\{y_0: F_n(y_0)<x \}\ge y$ 当 $n$ 充分大时成立。
所以 $\liminf_{n\to+\infty} Y_n(x)\ge y $。$F$ 的不连续点至多可数，$y$ 可以任意靠近 $Y(x)$。
所以 $\liminf_{n\to+\infty} Y_n(x)\ge Y(x)$
（实际上，在证明这一端的不等式时，我们并未用到 $x\notin\Omega_0$）。

另一方面，取 $y>Y(x)$ 使 $F$ 在 $y$ 处连续。
因为 $y> Y(x)= a_x \overset{x\notin\Omega_0}{=} b_x= \inf\{y_0: F(y_0)<x\}$，所以 $F(y)>x$，
$F_n(y)>x$ 当 $n$ 充分大时成立。
所以 $y\ge Y_n(x)$。如同上一段的论证一样，我们得到 $\limsup_{n\to+\infty} Y_n(x)\le Y(x)$。

因此，对任意 $x\in [0,1]-\Omega_0$，$Y_n(x)$ 收敛到 $Y(x)$。定理获证。
:::
