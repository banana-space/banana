---
title: 分布（泛函分析）
aliases: [Schwartz 分布, 分布（数学分析）]
categories: [泛函分析]
notices:
  - name: 消歧义
    see:
      - page: 分布
  - name: 问题
    items:
      - “定义”一节缺少流形上的分布的定义。
      - “拉回”一节需要扩充。
navboxes: [泛函分析]
---

**分布**（也称为 **Schwartz 分布**或**广义函数**）
是[[函数]]的推广。
直观地说，它允许函数取无穷的值，
但需要指定函数在这些无穷值处的[[积分]]。

例如，$\mathbb{R}$ 上的 [[$\delta$ 函数]]是最有名的分布。直观地说，我们有
\[
\delta (x) = \begin{cases}
  0, & x \neq 0, \\
  \infty, & x = 0,
\end{cases}
\]
并且 $\delta$ 函数在 $0$ 附近的积分指定为 $1$。

在分布的意义下，任何函数都可以求任意阶[[导数]]。
借助这一类良好的性质，
分布在[[偏微分方程]]的理论中有关键的应用。
例如，在[[初值问题]]中，
以 $\delta$ 函数为初值的解被称为[[基本解]]，
而基本解可以用来构造一般问题的解。

## 定义

::: definition [测试函数] {@def-test-function}
设 $U \subset \mathbb{R}^n$ 是[[开集]]。
则 $U$ 上**测试函数**的空间是 $U$ 上所有[[鼓包函数]]，
即实值[[紧支]]、[[光滑函数]]，构成的空间
\[
\mathscr{D} (U) = C_{\mathrm{c}}^\infty (U).
\]
它作为[[拓扑向量空间]]，
带有由以下一族[[半范数]]诱导的拓扑：
\[
|f|_{k, K} = \sup_{x \in K, |\alpha| \leq k} |\partial^\alpha f (x)|,
\]
其中 $k$ 取遍所有[[自然数]]，$K \subset U$ 取遍所有[[紧空间|紧集]]，
$\alpha$ 表示[[多重指标]]。
:::

在 @def-test-function 中，
如果 $f \colon U \to \mathbb{R}$ 是[[连续映射|连续函数]]
（或更一般地，[[局部可积函数]]），
那么 $f$ 可以与测试函数相乘并积分，这给出了[[线性泛函]]
\[
\begin{aligned}
  \mathscr{D} (U) & \to \mathbb{R}, \\
  \varphi & \mapsto \int_U f(x) \, \varphi (x) \, d x.
\end{aligned}
\]
我们将分布定义为这样的线性泛函。

::: definition [分布]
设 $U \subset \mathbb{R}^n$ 是开集。
则 $U$ 上的**分布**是[[连续线性泛函]]
\[
\mathscr{D} (U) \to \mathbb{R},
\]
其中 $\mathscr{D} (U)$ 是测试函数的空间（@def-test-function）。
换言之，分布的空间是 $\mathscr{D} (U)$ 的[[连续线性对偶]]，记为 $\mathscr{D}(U)'$。
:::

## 例子

- 任意[[局部可积函数]] $f \in L^1_\mathrm{loc} (U)$ 都是 $U$ 上的分布。

- 任意 [[Radon 测度]]都是分布。

- 定义 [[$\delta$ 函数]] $\delta_0 \colon \mathscr{D}(U)\to \mathbb{R}$ 为
  \[
  \delta_0 (\varphi) = \varphi (0).
  \]
  则 $\delta_0$ 是分布，但不是 $U$ 上的函数。

## 性质

::: proposition [分布的等价定义] {@分布等价定义}
线性算子$T:\mathscr{D}(U)\to \mathbb{R}$是一个分布，
当且仅当对任意的紧子集$K\subset U$，
存在$m(K)\in \mathbb{N}$，$C(K)$是一个常数。有如下控制：
\[
T(\varphi) \le C(K) |\varphi|_{m,K} \quad
\forall \varphi \in \mathscr{D}(K)
\]
这是判断一个线性映射是否在$\mathscr{D}(U)$的拓扑上连续的等价定义。
:::

::: remark
在 @分布等价定义 中，我们先选取任意的紧子集$K$，随后选取依赖于
$K$的参数$m,C$。
:::

::: proposition [分布空间的拓扑]
$\mathscr{D}(U)'$作为对偶空间自然配备[[弱星拓扑]]，
即一列分布$T_n$收敛于分布$T$当且仅当
\[
\langle T_n, \varphi \rangle \to \langle T, \varphi \rangle
\quad for \ \forall \varphi \in \mathscr{D}(U)
\]
:::

## 运算

### 求导

分布作为函数的推广，我们希望其具有和函数类似的性质。我们首先观察$f\in C^1(U)$
作为一个分布时，通过[[分部积分]]，我们有
\[
\int_U \partial_{x_i} f(x) \cdot \varphi(x) dx =
- \int_U f(x) \cdot \partial_{x_i} \varphi(x) dx
\]
此时，作为$\mathscr{D}(U)$上的线性映射
\[
T_i: \varphi \to  \int_U f(x) \cdot \partial_{x_i} \varphi(x) dx
\]
也是连续的，因此$T_i$成为了一个分布。且有
\[
\langle \partial_{x_i}f,\varphi\rangle = - \langle T_i,\varphi \rangle \quad
\forall \varphi \in \mathscr{D}(U)
\]
我们不妨称$\partial_{x_i}f$作为分布是等同于$-T_i$的。
将这一想法推广到整个分布空间上，我们定义分布导数如下

::: definition [分布导数]
$U\subset \mathbb{R}^n$是一个开子集，对于任意的分布$T\in \mathscr{D}(U)'$，
多重指标$\alpha \in \mathbb{N}^n$，我们定义$T$的分布导数$\partial^\alpha T$为一个分布$L$，使得
\[
\langle T, \partial^\alpha \varphi \rangle
= (-1)^{|\alpha|} \langle L,\varphi\rangle
\]
对任意的$\varphi\in \mathscr{D}(U)$均成立。我们形式上记$\partial^\alpha T = L$。
这里回忆一下多重指标$\alpha = (\alpha_1,\dots,\alpha_n)$，其中$\alpha_i \in \mathbb{N}$。
$|\alpha|\coloneqq \sum_i \alpha_i$，
偏微分定义为$\partial^\alpha \coloneqq
  \partial^{\alpha_1}_{x_1}\dots\partial^{\alpha_n}_{x_n}$
:::

::: remark
$C^1$函数的常规导数总是等于分布导数的。但是对于其他的函数并非如此，
即使是几乎处处可微的函数，也有如下反例：在$\mathbb{R}$中，考虑函数
\[
f(x)\coloneqq \mathbb{1}_{x>0}
\]
容易看出$f(x)$是几乎处处可微且导数为0的。但是当我们计算其分布导数：
\[
\begin{aligned}
  \langle f, \varphi ' \rangle
  & = \int_{\mathbb{R}} f(x) \varphi'(x) dx  \\
  & = \int_{\{x>0\}} \varphi'(x)dx\\
  & = - \varphi(0) = - \langle \delta_0, \varphi \rangle
\end{aligned}
\]
因此$f$作为分布的分布导数是$\delta_0$。
:::

### 拉回

### 乘积

::: definition
对于光滑函数$f \in C^\infty(U)$和分布$L\in \mathscr{D}(U)'$，
定义乘积$f\cdot L$为一个分布：
\[
\langle f\cdot L, \varphi \rangle = \langle L, f\cdot \varphi \rangle
\]
读者可以自行验证$f\cdot L$ 仍是一个分布。
:::

```terms
分布:
  en: distribution
  de: Distribution :f
  fr: distribution :f
```
