---
title: Baire 纲定理
categories: [泛函分析]
navboxes: [泛函分析]
---

**Baire 纲定理**大概是说，一个[[完备空间|完备]]
的[[度量空间]]不能太稀疏。
这里的“稀疏”是用所谓[[第一纲集]]的概念
来刻画的。历史上，[[René-Louis Baire|Baire]]
用它来研究函数的分类。

## 陈述与证明

### 第一纲集和第二纲集

我们从无处稠密的概念开始。

::: definition
设 $X$ 是[[拓扑空间]]。称[[子集]] $E\subset X$
**无处稠密**，如果 $E$ 的[[闭包]]的[[内部]]
$(\bar{E})^\circ = \varnothing$。
:::

一些简单的例子是：$\mathbb R$ 的有限子集都是无处稠密的；
[[Cantor 集]]也是无处稠密的。

::: lemma {@引理}
设 $(X,\rho)$ 是度量空间，则 $E\subset X$ 是
无处稠密的，当且仅当对任意的球 $B(x_0,r_0)$，
总是存在球 $B(x_1,r_1)\subset B(x_0,r_0)$，
使得 $\bar E\cap\bar B(x_1,r_1)=\varnothing$。
:::

::: proof [证明概要]
必要性：因为 $\bar E$
没有内点，故不能包含任意球，取
$x_1\in B(x_0,r_0)\setminus\bar E$，
然后以 $x_1$ 为中心作足够小的球。

充分性：用反证法，如果 $\bar E$
有内点，则可以取球使得 $B(x_0,r_0)\subset\bar E$，
从而包含于它的球都包含于 $\bar E$，与条件矛盾。
:::

::: definition
拓扑空间 $X$ 的子集 $E$ 被称为是**第一纲集**，
如果它是可数个无处稠密集的并集。不是第一纲集的集合
叫做**第二纲集**。
:::

显然，可数个第一纲集的并集是第一纲集。

### Baire 纲定理

::: theorem [Baire 纲定理] {@Baire}
完备的度量空间是第二纲集。
:::

::: proof
设 $(X,\rho)$ 是完备的度量空间。用反证法，
如果 $X$ 是第一纲集，则存在一列无处稠密集 $\{E_n\}$
使得
\[
X=\bigcup_{n=1}^\infty E_n
\]
接下来反复应用 @引理。对任意的球 $B(x_0,r_0)$，
存在球 $B(x_1,r_1)\subset B(x_0,r_0)$，且$r_1<1$，
使得
\[
\bar B(x_1,r_1)\cap\bar E_1=\varnothing
\]
存在球 $B(x_2,r_2)\subset B(x_1,r_1)$，且$r_2<1/2$，
使得
\[
\bar B(x_2,r_2)\cap(\bar E_1\cup \bar E_2)=\varnothing
\]
如此继续，得到一列球 $\{B(x_n,r_n)\}$，
满足 $B(x_n,r_n)\subset B(x_{n-1},r_{n-1})$，且$r_n<1/n$，满足
\[
\bar B(x_n,r_n)\cap\left(\bigcup_{i=1}^n \bar E_i\right)=\varnothing
\]
注意到$\rho(x_{n+p},x_n)\leq r_n<1/n, p\in\mathbb N$，
有 $\{x_n\}$ 是 [[Cauchy 列]]。根据完备性，
$\{x_n\}$ 收敛于一点 $x\in X$。
如此在上式中令 $p\to\infty$ 得$\rho(x,x_n)\leq r_n$，
从而 $x\in\bar B(x_n,r_n),\forall n\in \mathbb N$。
根据 $B(x_n,r_n)$ 的定义，有
$x\notin\bigcup_{n=1}^\infty E_n$，矛盾。
:::

::: theorem [加强的Baire 纲定理]
完备的度量空间中，

- 第一纲集的补集是稠密的第二纲集。

- 可数个稠密开集的交是稠密的第二纲集。

:::

::: proof
设 $X$ 是完备的度量空间，$\{E_n\}$是一列无处稠密集。

上面实际上已证明了这一结果：对任意的球 $B(x_0,r_0)$，
存在其中的点$x\notin\bigcup_{n=1}^\infty E_n$。
故$X\backslash\bigcup_{n=1}^\infty E_n$不止非空，而且稠密。

此外，$X\backslash\bigcup_{n=1}^\infty E_n$也是第二纲集，
这是因为假如它是第一纲集，$X$就是两个第一纲集的并，故是第一纲集，
与Baire纲定理矛盾。前一结论成立。

稠密的开集是无处稠密的闭集的补集，记为$X\backslash E_n$，
其交集是$X\backslash\bigcup_{n=1}^\infty E_n$，故后一结论是其推论。
:::

## 应用

下面给出Baire 纲定理若干个简单的应用。

::: proposition
$\mathbb R$ 是不可数的。
:::

::: proof
熟知 $\mathbb R$ 是完备度量空间。如果它是可数的，
则可以写成一列：$\mathbb R=\{x_1,x_2,\cdots\}$。
注意到单点集 $\{x\}$ 总是 $\mathbb R$ 的
无处稠密集，且
\[
\mathbb R=\bigcup_{n=1}^\infty\{x_n\}
\]
故 $\mathbb R$ 是第一纲集，这与 Baire 纲定理矛盾。
:::

::: proposition
设$X$是无孤立点的完备度量空间，$E$是可数的稠密集，则$E$不是$G_\delta$集。
:::

::: proof
$E$是可数个单点集的并，是第一纲集。
然而假设$E=\bigcap_{n=1}^\infty U_n$，$U_n$是开集，由于$U_n\supset E$是稠密的，
交集$E$是第二纲集，矛盾。
:::

特别地，有理数集$\mathbb Q$不是$\mathbb{R}$的$G_\delta$集。

::: proposition
无穷维Banach空间作为线性空间，是不可数维的。
:::

::: proof
注意到可数维子空间$M$能表示成一列有限维子空间$M_1\subset M_2\subset\cdots$
的并集$\bigcup_{n=1}^\infty M_n$，各个$M_n$是无处稠密的，故$M$不是完备的空间。
:::

Baire 纲定理还可以用于证明[[开映射定理]]、[[闭图像定理]]
等[[泛函分析]]的重要定理，可参见对应条目。

历史上纲和 Baire 纲定理被用于研究函数的分类和性质，下面的惊人
结论就是其中一个结果，它说明处处连续处处不可微的函数是相当多的。

::: proposition
用 $E$ 表示在 $C[0,1]$ 中处处不可微的函数集合，
则 $E$ 是第二纲集。
:::

::: proof
$X=C[0,1]$ 是完备度量空间，由 Baire 纲定理知
$X$ 是第二纲集。如果$X\setminus E$是第一纲集，
则命题得证。下面证明这一点。
用 $A_n$ 表示 $X$ 中如下函数 $f$ 的集合：存在
$s\in [0,1]$，使得对任意满足 $0\leq s+h\leq 1$
和 $|h|\leq 1/n$ 的 $h$，都有
\[
\left|\frac{f(s+h)-f(s)}{h}\right|\leq n
\]
如果 $f$ 在点 $s$ 可微，则必有 $n\in\mathbb N$
使得 $f\in A_n$。如此
\[
X\setminus E\subset \bigcup_{n=1}^\infty A_n
\]
只需证明 $A_n$ 都是无处稠密的。接下来分两步。

- 先证明 $A_n$ 是闭集。如果 $f\in X\setminus A_n$，
  则对所有的 $s\in [0,1]$，存在 $h_s$ 使得
  \[
  |h_s|\leq 1/n,\quad |f(s+h_s)-f(s)|>n|h_s|
  \]
  由连续性，不难证明，存在 $\varepsilon_s>0$，和 $s$ 的
  一个邻域 $J_s$，使得
  \[
  |f(\sigma+h_s)-f(\sigma)|>n|h_s|+2\varepsilon_s,\forall \sigma\in J_s
  \]
  由 [[Heine–Borel 定理]]，可设 $J_{s_1},\cdots, J_{s_m}$
  覆盖区间 $[0,1]$，并设$\varepsilon=\min\{\varepsilon_{s_1},\cdots, \varepsilon_{s_m}\}$。
  现在，设 $g\in X$ 满足 $\|g-f\|<\varepsilon$，则
  对任意$\sigma\in J_{s_k},1\leq k\leq m$，有
  \[
  |g(\sigma+h_{s_k})-g(\sigma)|\geq
  |f(\sigma+h_{s_k})-f(\sigma)|-2\varepsilon
  >n|h_{s_k}|
  \]
  如此可得 $g\in X\setminus A_n$，即
  $X\setminus A_n$ 是开集。故 $A_n$ 是闭集。

- 再证明 $A_n$ 没有内点。对任何 $f\in A_n,\varepsilon>0$，
  由 [[Stone–Weierstraß 定理]]得：存在多项式 $p$
  使得
  \[
  \|f-p\|<\varepsilon/2
  \]
  因为 $p$ 的导数在 $[0,1]$ 上有界，根据[[中值定理]]，
  存在 $M>0$ 使得对任意 $s\in [0,1]$ 和
  $|h|<1/n$ 成立
  \[
  |p(s+h)-p(s)|\leq M|h|
  \]
  令 $g\in C[0,1]$ 为一个分段线性函数，满足其每个线性
  部分的斜率绝对值都大于 $M+n$，且 $\|g\|<\varepsilon/2$。
  如此令 $\varphi=p+g$，则 $\|\varphi-f\|<\varepsilon$，
  且 $\varphi\notin A_n$。这表明以 $A_n$ 元素
  为中心的任何开球都不包含于 $A_n$，即没有内点。

综上所述，证明了 $A_n$ 是无处稠密集，从而定理成立。
:::

```terms
Baire 纲定理:
  en: Baire category theorem
```
