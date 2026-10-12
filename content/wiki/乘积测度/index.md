---
title: 乘积测度
categories: [测度论]
notices:
  - name: 问题
    items:
      - “定义”一节缺少可数个概率空间的乘积测度的定义。
      - “存在唯一性”一节第二个引理的证明中，关于 $F\setminus E$ 的一句似乎缺少等式 $\nu\big((F\setminus E)_{x}\big)=\nu(F_{x})-\nu(E_{x})$。
navboxes: [测度论]
---

在[[测度论]]中，
**乘积测度**指的是在两个[[测度空间]] $(X, \mathscr{A},\mu)$
和 $(Y, \mathscr{B}, \nu)$ 的[[积集]] $X \times Y$ 上的测度空间结构
$(X\times Y, \mathscr{A}\otimes \mathscr{B}, \mu\times \nu)$，
使两个可测集的积集（“矩形”）可测，
且测度是它们测度的乘积，所有可测集构成的 $\sigma$-代数由这类“矩形”生成。
如果 $X, Y$ 均 [[$\sigma$-有限]]，可以证明乘积测度存在且唯一。

通过归纳，乘积测度也可以自然的定义在有限个 $\sigma$-有限可测空间的积集上。
例如 $\mathbb{R}^n$ 上的 [[Lebesgue 测度]]（视为 [[Borel 测度]]）就是 $n$ 个 $\mathbb{R}$
上的 Lebesgue 测度的乘积。
对无穷多的测度空间，如果它们都是[[概率空间]]，也可以定义它们的乘积测度。

## 定义

::: definition [$X×Y$ 上的乘积测度]
对测度空间 $(X,\mathscr{A},\mu)$ 和 $(Y,\mathscr{B},\nu)$，
所有形如 $A\times B$（其中 $A \in \mathscr{A}, B \in \mathscr{B}$）
的集合生成的 $\sigma$-代数记作 $\mathscr{A}\otimes\mathscr{B}$，称为 $\sigma$-代数
$\mathscr{A}$ 和 $\mathscr{B}$ 的**乘积**。

下面的定理表明，
若 $\mu,\nu$ 都是 $\sigma$-有限的，那么在[[可测空间]]
$(X\times Y,\mathscr{A}\otimes\mathscr{B})$
上，存在唯一的测度 $\mu\times\nu$ 使得
$(\mu\times \nu)(A\times B)=\mu(A)\nu(B)$ 对每个
$A\in\mathscr{A},B\in\mathscr{B}$ 都成立，
称为**乘积测度**。
:::

## 性质

### 存在唯一性

::: theorem
对任意两个 $\sigma$-有限的测度空间 $(X,\mathscr{A},\mu)$ 和 $(Y,\mathscr{B},\nu)$，可测
空间 $(X\times Y,\mathscr{A}\otimes\mathscr{B})$ 上存在唯一的测度 $\mu\times \nu$ 使得
对任意的 $A\in\mathscr{A},B\in\mathscr{B}$，有
\[
(\mu\times\nu)(A\times B)=\mu(A)\nu(B).
\]
具体来说，对任意 $E\in\mathscr{A}\otimes\mathscr{B}$，$(\mu\times\nu)(E)$
由下式给出
\[
(\mu\times\nu)(E)=\int_{X}\nu(E_{x})\mu(\mathrm{d}x)=\int_{Y}\mu(E^{y})\nu(\mathrm{d}y),
\]
其中
\[
E_{x}=\{y\in Y\colon (x,y)\in E\},\quad
E^{y}=\{x\in X\colon (x,y)\in E\}.
\]
:::

首先注意到一个简单的事实，若 $f$ 是 $X\times Y$ 上的函数，
那么对任意的 $x_{0}\in X$ 和 $y_{0}\in Y$，
$f_{x}$ 和 $f^{y}$ 分别是 $Y$ 和 $X$ 上的函数，并且恒等式
\[
f_{x_{0}}(y)=f(x_{0},y), f^{y_{0}}(x)=f(x,y_{0})
\]
成立，其中 $x\in X,y\in Y$。

::: lemma
设 $(X,\mathscr{A})$ 和 $(Y,\mathscr{B})$ 是可测空间。

- (a) 若 $E\in \mathscr{A}\otimes\mathscr{B}$，那么对任意的 $x\in X,y\in Y$，
  $E_{x}\in\mathscr{B}$，$E^{y}\in\mathscr{A}$。

- (b) 若函数 $f$ 是 $\mathscr{A}\otimes\mathscr{B}$-可测的广义实值（或者复值）函数，那么对任意的
  $x\in X,y\in Y$，$f_{x}$ 是 $\mathscr{B}$-可测的，$f^{y}$ 是 $\mathscr{A}$-可测的。
:::

::: remark
引理 (b) 部分中“$\mathscr{A}\otimes\mathscr{B}$-可测”指的是 $\overline{\mathbb{R}}$ 上开集的原像属于
$\mathscr{A}\otimes\mathscr{B}$，剩下的同理。
:::

::: proof
设 $x\in X$，定义集合 $\mathscr{F}=\{E\subseteq X\times Y\colon E_{x}\in\mathscr{B}\}$，
由于带可测边的矩形 $A\times B$ 在点 $x$ 处的 $(A\times B)_{x}$ 要么等于 $B$ 要么为空集，
$\mathscr{F}$ 会包含全体带可测边的矩形；特别地，$X\times Y\in\mathscr{F}$。恒等式
$(E^{c})_{x}=(E_{x})^{c}$ 和 $(\bigcup_{n}E_{n})_{x}=\bigcup_{n}((E_{n})_{x})$ 告诉我们
$\mathscr{F}$ 对补运算和可数并运算封闭，从而 $\mathscr{F}$ 是一个 $\sigma$-代数，从而
$\mathscr{A}\otimes\mathscr{B}\subseteq\mathscr{F}$，这就证明了 (a) 的前半部分，后半部分
同理可得。

恒等式 $(f_{x})^{-1}(D)=\big(f^{-1}(D)\big)_{x}$ 和 $(f^{y})^{-1}(D)=\big(f^{-1}(D)\big)^{y}$
告诉我们 (b) 是对的，和 (a) 一起。
:::

::: lemma
设 $(X,\mathscr{A},\mu)$ 和 $(Y,\mathscr{B},\nu)$ 是 $\sigma$-有限的测度空间，若
$E\in\mathscr{A}\otimes\mathscr{B}$，那么函数 $x\mapsto\nu(E_{x})$ 是
$\mathscr{A}$-可测的，$y\mapsto\mu(E^{y})$ 是 $\mathscr{B}$-可测的。
:::

::: proof
不妨假设 $\nu$ 是有限测度，定义集合
$\mathscr{F}=\{E\in\mathscr{A}\otimes\mathscr{B}\colon x\mapsto \nu(E_{x}) \text{是}
\mathscr{A}-\text{可测的}\}$，引理告诉我们 $E_{x}\in\mathscr{B}$，从而这个函数是有意义的。
若 $A\in\mathscr{A},B\in\mathscr{B}$，那么 $\nu\big((A\times B)_{x}\big)=\nu(B)\chi_{A}(x)$，
从而 $\mathscr{F}$ 包含了所有带可测边的矩形；特别地，$X\times Y\in\mathscr{F}$。接着对
$E,F\in\mathscr{A}\otimes\mathscr{B},E\subseteq F$，$\nu\big((F\setminus E)_{x}\big)$，于是
$F\setminus E\in\mathscr{F}$；对一递增的集列 $\{E_{n}\},E_{n}\in\mathscr{A}\otimes\mathscr{B}$，
有 $\nu\big((\bigcup_{n}E_{n})_{x}\big)=\lim_{n}\nu\big((E_{n})_{x}\big)$，也就是说
$\bigcup_{n}E_{n}\in\mathscr{F}$，综上 $\mathscr{F}$ 是一个 [[Dynkin-类]]。因为全体带可测边的矩形
对有限交封闭，
即 $(A_{1}\times B_{1})\cap(A_{2}\times B_{2})=(A_{1}\cap A_{2})\times(B_{1}\cap B_{2})$，
所以 $\mathscr{F}$ 是包含全体带可测边的矩形的最小 $\sigma$-代数，
于是 $\mathscr{F}=\mathscr{A}\otimes\mathscr{B}$。

现在假设 $\nu$ 是 $\sigma$-有限的，设 $D_{n}\in\mathscr{B},\bigcup_{n}D_{n}=Y,\nu(D_{n})<+\infty$，
对每个 $n\in\mathbb{N}$ 定义 $\mathscr{B}$ 上的有限测度 $\nu_{n}(B)=\nu(B\cap D_{n})$，由前证
函数 $x\mapsto\nu_{n}(E_{x})$ 是 $\mathscr{A}$-可测的，而 $\nu(E_{x})=\sum_{n}\nu_{n}(E_{x})$
对任意的 $x\in X$ 都成立，于是 $x\mapsto\nu(E_{x})$ 是 $\mathscr{A}$-可测的。$y\mapsto\mu(E^{y})$
的情况类此。
:::

接下来开始定理的证明：

::: proof
定义$\mathscr{A}\otimes\mathscr{B}$ 上的函数 $(\mu\times\nu)_{1}$ 和 $(\mu\times\nu)_{2}$：
$(\mu\times\nu)_{1}(E)=\int_{X}\nu(E_{x})\mu(\mathrm{d}x),
(\mu\times\nu)_{2}(E)=\int_{Y}\mu(E^{y})\nu(\mathrm{d}y)$。

显然 $(\mu\times\nu)_{1}(\varnothing)=(\mu\times\nu)_{2}(\varnothing)=0$；对
$\mathscr{A}\otimes\mathscr{B}$ 中一列不交的集合 $\{E_{n}\}$，令 $E=\bigcup_{n}E_{n}$，
那么 $\{(E_{n})_{x}\}$ 在 $\mathscr{B}$ 中同样是不交的，且有
$E_{x}=\bigcup_{n}\big((E_{n})_{x}\big)$，于是 $\nu(E_{x})=\sum_{n}\nu\big((E_{n})_{x}\big)$。
根据[[Beppo Levi 定理]]，有
\[
(\mu\times\nu)_{1}(E)=\int_{X}\nu(E_{x})\mu(\mathrm{d}x)
=\sum_{n}\int_{X}\nu\big((E_{n})_{x}\big)\mu(\mathrm{d}x)=\sum_{n}(\mu\times\nu)_{1}(E_{n})
\]
这就证明了 $(\mu\times\nu)_{1}$ 是可数加性的。同理可证 $(\mu\times\nu)_{2}$ 是可数加性的，唯一性由
\[
(\mu\times\nu)_{1}(A\times B)=\mu(A)\nu(B)=(\mu\times\nu)_{2}(A\times B)
\]
与 [[$\pi$-类]]的性质一起保证。
:::

## 例子

- 作为 Borel 测度，
  $\mathbb{R}^n$ 上的 [[Lebesgue 测度]]就是 $n$ 个 $\mathbb{R}$ 上的 Lebesgue 测度的乘积。

```terms
乘积测度:
  en: product measure
```
