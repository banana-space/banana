---
title: Stone–Weierstraß 定理
aliases: [Stone–Weierstrass 定理, Weierstraß–Stone 定理, Weierstrass–Stone 定理, Stone–Weierstraß 逼近定理, Stone–Weierstrass 逼近定理, Weierstrass 逼近定理, Weierstraß 逼近定理, Stone-Weierstrass 定理, Stone-Weierstrass 逼近定理, Stone-Weierstraß 定理, Stone-Weierstraß 逼近定理, Weierstrass-Stone 定理, Weierstraß-Stone 定理]
categories: [实分析]
---

**Stone–Weierstraß 定理**是个[[实分析]]定理，
给出[[紧空间|紧]] [[Hausdorff 空间]]上[[连续映射|连续函数]]族能一致逼近任意连续函数的充分条件。
[[Karl Weierstraß]] 首先于 1885 年证明了其在[[区间|闭区间]]上的版本，
尔后 [[Marshall Stone]] 于 1937 年证明了一般情形。

## 定理与证明

为方便陈述，先引入一个概念。

::: definition
称集合 $X$ 上的函数族 $A$ **区分点**，
指的是对互异两点 $x,y\in X$，存在 $a\in A$ 使得
$a(x)\ne a(y)$。
:::

Stone–Weierstraß 定理有好几个版本。

::: theorem [格版本] {@格}
$X$ 是[[紧空间|紧]] [[Hausdorff 空间]]，$\mathbb{R}(X)$
指其实值连续函数环。设 $\mathbb{R}$-线性子空间 $A\subseteq\mathbb{R}(X)$ 满足：

- 区分点；

- $1\in A$；

- 对任意 $a,b\in A$ 都有
  $\max\{a,b\},\min\{a,b\}\in A$；

则 $A$ 能一致逼近任意连续函数。换言之，对任意 $f\in\mathbb{R}(X)$
以及 $\varepsilon\in\mathbb{R}_+$，存在 $a\in A$ 使得
$\|f-a\|=\sup_{x\in X}|f(x)-a(x)|<\varepsilon$。
:::

::: proof
取定 $f\in\mathbb{R}(X)$ 以及 $\varepsilon\in\mathbb{R}_+$，
我们来找逼近 $f$ 的 $a\in A$。

先证对任意互异两点 $x,y\in X$ 以及任意 $r,s\in\mathbb{R}$，
存在 $a\in A$ 使得 $a(x)=r$，$a(y)=s$。为此考虑
$\mathbb{R}^2$ 的子集
$$
\{(a(x),a(y))\in\mathbb{R}^2\mid a\in A\}.
$$
由 $A$ 是线性空间知它是线性空间；由 $A$ 区分点以及 $1\in A$
知它里面有两个元素线性无关；所以它就是 $\mathbb{R}^2$，得所欲证。

现对每个 $x\in X$ 记
$K_x=\{z\in X\mid f(z)\ge f(x)+\varepsilon\}$，
则它是与 $x$ 无交的紧集。再对每个 $y\in K_x$ 取函数
$a_{x,y}\in A$，使得 $a_{x,y}(x)=f(x)$，$a_{x,y}(y)>f(y)$。
记 $U_y=\{z\in X\mid a_{x,y}(z)>f(z)\}$
为 $y$ 的邻域，则 $U_y$ 中的有限个覆盖 $K_x$。把常函数
$f(x)$ 和这有限覆盖中每个对应的 $a_{x,y}$ 一块取 $\max$，
所得函数记作 $a_x\in A$。现在：

- 对 $z\in K_x$，依 $a_x$ 的取法，存在 $y\in K_x$
  使得 $z\in U_y$ 且 $a_x(z)\ge a_{x,y}(z)>f(z)$。

- 对 $z\notin K_x$，有 $a_x(z)\ge f(x)>f(z)-\varepsilon$。

所以不论如何总有 $a_x(z)>f(z)-\varepsilon$。再记
$V_x=\{z\in X\mid a_x(z)<f(z)+\varepsilon\}$ 为
$x$ 的邻域，则 $V_x$ 中的有限个覆盖全空间 $X$，把它们对应的
$a_x$ 取 $\min$，所得函数 $a\in A$ 即为所求。
:::

::: lemma {@绝对值}
设 $M$ 为正实数。则在 $[-M,M]$ 中，多项式函数能逼近绝对值函数。
换言之，对任意 $\varepsilon>0$，存在实系数多项式 $f$，
使得 $\sup_{x\in[-M,M]}|f(x)-|x||<\varepsilon$。
:::

::: proof
缩放坐标不妨设 $M=1/2$。以 $k_n(x)$ 记多项式 $c_n(1-x^2)^n$，
其中常数 $c_n\in\mathbb{R}_+$ 适当选取使其在 $[-1,1]$ 积分是 $1$。令
$$
f_n(x)=\frac12-\int_{-1/2}^{1/2}k_n(x-y)\left(\frac12-|y|\right)\mathrm{d} y,
$$
则它是一族 $2n$ 次多项式的积分，所以也是 $2n$ 次多项式。
由于积分式实际上是 $k_n(x)$ 在 $[-1,1]$ 之外零延拓与
$1/2-|x|$ 在 $[-1/2,1/2]$ 之外零延拓的[[卷积]]，
由[[单位逼近]]的一般道理容易发现 $n\to\infty$
时 $f_n(x)$ 在 $[-1/2,1/2]$ 上[[一致收敛]]到 $|x|$。
此即欲证。
:::

注意下面的代数都默认含幺。

::: theorem [实版本] {@实}
$X$ 是[[紧空间|紧]] [[Hausdorff 空间]]，$\mathbb{R}(X)$
指其实值连续函数环。设 $\mathbb{R}$-子代数 $A\subseteq\mathbb{R}(X)$
区分点，则 $A$ 能一致逼近任意连续函数。
:::

::: proof
要证明 $A$ 在[[一致范数]]下的闭包 $C$ 为 $\mathbb{R}(X)$。
由加减法、乘法对两个分量的一致范数连续知 $C$ 仍是子代数。
由 @绝对值 知 $C$ 对取绝对值封闭。
由 $\max\{a,b\}=a+\max\{0,b-a\}$，$\max\{0,c\}=
  \frac{c+|c|}{2}$ 知 $C$ 对二元 $\max$ 封闭，$\min$ 类似。
故由 @格 即得结论。
:::

::: theorem [复版本]
$X$ 是[[紧空间|紧]] [[Hausdorff 空间]]，$\mathbb{C}(X)$
指其复值连续函数环。设 $\mathbb{C}$-子代数
$A\subseteq\mathbb{C}(X)$ 区分点、对共轭封闭，
则 $A$ 能一致逼近任意连续函数。
:::

::: proof
由 $\operatorname{Re} a=\frac{a+\bar{a}}{2}$，$\operatorname{Im} a=
  \frac{a-\bar{a}}{2\mathrm{i}}$ 不难得知 $A\cap\mathbb{R}(X)$
区分点。故由 @实 知 $A\cap\mathbb{R}(X)$ 能一致逼近
$\mathbb{R}(X)$。由 $A$ 是 $\mathbb{C}$-线性空间立得它能一致逼近
$\mathbb{C}(X)$。
:::

```terms
Stone–Weierstraß 定理:
  en: Stone–Weierstraß theorem
  de: Satz von Stone–Weierstraß
  fr: théorème de Stone–Weierstraß
```
