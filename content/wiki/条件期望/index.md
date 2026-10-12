---
title: 条件期望
categories: [概率论]
notices:
  - name: 问题
    items:
      - “性质”一节中正交分解命题缺少证明。
navboxes: [概率论]
---

**条件期望**是[[随机变量]]在某种限制条件下的[[期望]]。

例如，掷一枚均匀的骰子，设其结果为 $X$。
若已知 $X$ 为偶数，则该条件下 $X$ 的条件期望为
\[
\mathbb{E} (X \mid X \text{\ 是偶数})
= \frac{1}{3}(2 + 4 + 6)
= 4.
\]

一般地说，对随机变量 $X, Y$ 而言，
可以谈论已知 $Y$ 的取值时 $X$ 的条件期望 $\mathbb{E} (X \mid Y)$。
从[[测度]]的角度看，
它也就是[[概率空间]]中[[水平集]] $Y = y$ 上 $X$ 的平均值。

## 定义

::: definition {@definition}
设 $(\Omega,\mathcal{F},\mathbb{P})$ 为[[概率空间]]，
$X$ 为其上的[[随机变量]]。
设 $\mathcal{F_0} \subseteq \mathcal{F}$ 是子 [[$\sigma$-代数]]。
设 $\mathbb{E}(X) < \infty$。
则 $X$在给定$\mathcal{F_0}$下的**条件期望**
$\mathbb{E}(X \mid \mathcal{F_0})$ 是一个[[随机变量]] $Y$，满足以下两个条件：

1. $Y$ 是 $\mathcal{F_0}$-可测的。

2. {@second-condition} 对任何 $A \in \mathcal{F_0}$，都有
   $\mathbb{E}(X \mathbf{1}_A) = \mathbb{E}(Y \mathbf{1}_A)$。
   此处 $\mathbf{1}_A$ 是集合 $A$ 的[[指示函数]]。

另外，如果 $Z$ 是另一个随机变量，$\mathcal F_0$ 是
$Z$ 生成的子 $\sigma$-代数，即所有 $Z^{-1}(B)$（$B$ 为 [[Borel 测度|Borel]] [[可测集]]）
生成的子 $\sigma$-代数，则记 $\mathbb{E}(X \mid Z)=\mathbb{E}(X \mid \mathcal F_0)$。
:::

条件期望存在，且在几乎必然意义下唯一：
当 $X$ 非负时，
在 $\mathcal F_0$ 上定义测度 $A\mapsto \mathbb{E}(X \mathbf{1}_A)$，
这个测度关于 $\mathbb P$ [[绝对连续测度|绝对连续]]。
所以，根据 [[Radon-Nikodym 定理]]不难得知条件期望是存在的，且在几乎必然意义下
是唯一的。
对于一般的随机变量 $X$，将 $X$ 分成正部与负部即可看出条件期望的存在性与几乎必然意义下的唯一性。

## 例子

- 对[[随机事件]] $A$，
  如果[[随机变量]] $X = \mathbf{1}_A$，
  那么 $X$ 在给定 $\mathcal{F_0}$ 下的条件期望是
  $\mathbb{E}(\mathbf{1}_A \mid \mathcal{F_0}) = \mathbb{P}(A \mid \mathcal{F_0})$
  （几乎必然），
  也就是事件 $A$ 在给定 $\mathcal{F_0}$ 下的[[条件概率]]。

## 性质

在下述性质中，我们谈论的随机变量都是有有限期望的。

::: proposition {@basic-propositions-of-conditional-expectation}
设 $(\Omega,\mathcal{F},\mathbb{P})$ 为[[概率空间]]。$X$ 为其上随机变量。
$\mathcal{G} \subseteq \mathcal{F}$ 为子 $\sigma$-代数。

1. {@prop:expectation-of-conditional-distribution} 如果 $Y = \mathbb{E}(X \mid \mathcal{G})$，
   那么$\mathbb{E}(Y) = \mathbb{E}(X)$。

2. 对于常数 $a_1, a_2$ 和随机变量 $X_1, X_2$，
   我们有
   $\mathbb{E}(a_1 X_1+a_2 X_2 \mid \mathcal{G}) =
		a_1 \mathbb{E}(X_1 \mid \mathcal{G}) +
		a_2 \mathbb{E}(X_2 \mid \mathcal{G})$。

3. {@conditional-expectation-is-monotone} 如果 $X, Y$ 是随机变量且 $X\le Y$ 几乎必然成立，
   则 $\mathbb E(X|\mathcal G)\le \mathbb E(Y|\mathcal G)$ 几乎必然成立。

4. {@pulling-out-the-known} 如果 $X,Y$ 是随机变量，$Y$ 是 $\mathcal G$-可测的，
   那么 $\mathbb{E}(XY \mid \mathcal G)=Y\mathbb E(X \mid \mathcal G)$
   （几乎必然）。

5. 如果 $\mathcal H\subseteq\mathcal G$ 是 $\sigma$-代数，则
   $\mathbb{E}(E(X \mid \mathcal G) \mid \mathcal H)
		=\mathbb{E}(X \mid \mathcal H)$。

:::

::: proof
@prop:expectation-of-conditional-distribution：
在 @definition 的 [条件 2](@second-condition) 中令 $A=\Omega$ 即可。

@conditional-expectation-is-monotone：
$\mathbb E(X|\mathcal G), \mathbb E(Y|\mathcal G)$ 都是 $\mathcal G$ 可测的，
所以事件 $A=(\mathbb E(X|\mathcal G)> \mathbb E(Y|\mathcal G))$ 在 $\mathcal G$ 中。
熟知如果 $P(A)> 0$，则 $\int_A \mathbb E(X|\mathcal G)> \int_A \mathbb E(Y|\mathcal G)$。
从而 $\int_A X> \int_A Y$，与 $X\le Y$ a.s. 矛盾。

@pulling-out-the-known：显然右式是 $\mathcal G$-可测的，
所以只需验证右式与 $XY$ 在每个 $\mathcal G$-可测集上的积分相等。
我们使用测度论中的常用论证方法：先证明示性函数的情形，再过渡到简单函数、非负可测函数和一般情形。

设 $Y= 1_B$，$B\in\mathcal{G}$。则对任意 $A\in\mathcal G$，
\[
\int_A 1_B E(X|\mathcal G)= \int_{A\cap B} E(X|\mathcal G) \overset{A\cap B\in\mathcal G}{=}\int_{A\cap B} X =\int_A 1_B X.
\]
即 $\int_A Y E(X|\mathcal G)= \int_{A} XY$ 在 $Y$ 是示性函数时成立。
从而当 $Y$ 是简单函数时上式也成立。
如果 $X, Y$ 是非负随机变量，取一列简单随机变量 $(Y_n)$ 使得其逐点递增地收敛到 $Y$。
由 Levi 的单调收敛引理与 $\int_A Y_n E(X|\mathcal G)= \int_{A} XY_n$ 知
$\int_A Y E(X|\mathcal G)= \int_{A} XY$。
最后，对一般的随机变量 $X, Y$，分别考虑其正部和负部即可。
:::

条件期望也有 Levi 引理、Fatou 引理与控制收敛定理。

::: proposition
设 $(\Omega,\mathcal{F},\mathbb{P})$ 为概率空间。$(X_n)$ 为其上一列非负随机变量。
$\mathcal{G} \subseteq \mathcal{F}$ 为子 $\sigma$-代数。

1. （Levi 引理）若 $X_n\ge 0$ 且 $X_n\le X_{n+1}$，
   $X_n\overset{\text{a.s.}}{\to} X$ 且 $E(X)$ 有限，
   则 $\lim_{n\to +\infty} E(X_n|\mathcal G) \overset{\text{a.s.}}{=} E(X|\mathcal G)$。

2. （Fatou 引理）若 $X_n\ge 0$，
   则 $E(\liminf_{n\to+\infty} X_n|\mathcal G)\le \liminf_{n\to+\infty} E(X_n|\mathcal G)$
   几乎必然成立。

3. （控制收敛定理）如果 $X_n\to X$，$|X_n|\le Y$ 且 $E(Y)$ 有限，
   则 $\lim_{n\to +\infty} E(X_n|\mathcal G) \overset{\text{a.s.}}{=} E(X|\mathcal G)$。

:::

::: proof
Levi 引理：记 $Z_n= E(X-X_n|\mathcal G)$，
由条件期望的单调性知道 $Z_{n+1}\le Z_{n}$ 且 $Z_n\ge 0$ 几乎必然成立，
所以 $Z_n\overset{\text{a.s.}}{\to} Z$ 对某个随机变量 $Z$ 成立。
由条件期望的线性性，$Z_n= E(X-X_n|\mathcal G)= E(X|\mathcal G)- E(X_n|\mathcal G)$，
所以只需证 $Z\overset{\text{a.s.}}{=} 0$。事实上，这可以由 $Z$ 几乎处处非负和
\[
\int_{\Omega} Z_n= \int_{\Omega} (X- X_n)\to 0, n\to +\infty\Rightarrow \int_{\Omega} Z= \int_{\Omega} \lim_{n\to +\infty} Z_n= \lim_{n\to +\infty} \int_{\Omega} Z_n=0
\]
得到，其中我们使用了 @basic-propositions-of-conditional-expectation 的
@prop:expectation-of-conditional-distribution 和控制收敛定理。

Fatou 引理：设 $Y_n= \inf_{k\ge n} X_k$，则 $Y_n$ 逐点递增地收敛到 $\liminf_{n\to+\infty} X_n$，
由 Levi 引理 $\lim_{n\to +\infty} E(Y_n|\mathcal G)= E(\liminf_{n\to+\infty} X_n|\mathcal G)$。
另一方面，$Y_n= \inf_{k\ge n} X_k$，所以对每个固定的 $k$，$E(Y_n|\mathcal G)\le E(X_k|\mathcal G)$
几乎必然成立，从而 $E(Y_n|\mathcal G)\le\inf_{k\ge n} E(X_k |\mathcal G)$ 几乎必然成立。
右式当 $n\to +\infty$ 时极限正是 $\liminf_{n\to+\infty} E(X_n|\mathcal G)$。

控制收敛定理：分别对 $E(Y- X_n|\mathcal G)$ 和 $E(Y+ X_n|\mathcal G)$ 使用 Fatou 引理即可。
:::

设 $X$ 是概率空间 $(\Omega,\mathcal F, P)$ 上的随机变量，
$Y:(\Omega,\mathcal F)\to (\Lambda,\mathcal G)$ 是一个可测映射。
如果 $y\in \Lambda$ 的完全原像 $Y^{-1}(y)$ 非空，
我们定义 $E(X|Y=y)\overset{\text{def}}{=} E(X|Y)(\omega)$，
其中 $\omega\in Y^{-1}(y)$。
这个定义的良定性由下面的引理保证。

::: lemma
设 $\mathcal{F}$ 是 $\Omega$ 上的一个 $\sigma$-代数，
$\mathcal G$ 是 $\Lambda$ 上的一个 $\sigma$-代数。
若 $Y:\Omega\to \Lambda$ 与 $Z:\Omega\to\mathbb R$ 为可测映射，
则 $Z$ 关于 $\sigma(Y)$ 可测 $\iff$ 存在一个可测函数 $h:\Lambda\to\mathbb R$ 使得 $Z=h\circ Y$。
:::

::: proof
（$\impliedby$）是显然的。
对于（$\implies$）方向，
我们首先回忆 $\sigma(Y)$ 是由 $\mathcal G$ 中的集合在 $Y$ 下的原像构成的集族。
因此，对于每个 $A\in\sigma(Y)$，存在 $A'\in\mathcal G$ 使得 $A= Y^{-1}(A')$。
若 $Z=1_{A}$，$A$ 的示性函数，则令 $h= 1_{A'}$ 即可满足条件。
进而 $Z$ 是一个简单函数时，命题成立。
对于一般情形，可取一列简单函数 $(Z_n)$ 逐点收敛于 $Z$，若 $Z_n= h_n\circ Y$，
则 $h_n$ 在 $Y(\Omega)$ 上收敛且 $Z= (\lim_{n\to +\infty} h_n)\circ Y$。
:::

另外，如果我们令
\[
L^2(\Omega,\mathcal F,\mathbb P) = \{X \mid X:\Omega\to\mathbb R是随机变量, 满足\mathbb{E}(X^2)<\infty\}
\]
并定义内积
\[
\langle X,Y \rangle = \mathbb{E}(XY)
\]
则 $L^2(\Omega,\mathcal F,\mathbb P)$ 是 [[Hilbert空间]]。
在这样的空间中可以进行正交分解：

::: proposition [正交分解]
设 $X\in L^2(\Omega,\mathcal F,\mathbb P)$，
$\mathcal G\subseteq\mathcal F$ 为子 $\sigma$-代数。
则
$Y=\mathbb{E}(X \mid \mathcal G)\in L^2(\Omega,\mathcal G,\mathbb P)$，
且有正交分解
\[
X = Y + Z
\]
其中 $\langle Y,Z \rangle=0$。

另外，$Y$ 还是最佳逼近元，即
\[
\mathbb{E}(X-Y)^2 = \inf_{y\in L^2(\Omega,\mathcal G,\mathbb P)} \mathbb{E}(X-y)^2
\]
:::

```terms
条件期望:
  en: conditional expectation
```
