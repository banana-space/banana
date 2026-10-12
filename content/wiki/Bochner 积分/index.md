---
title: Bochner 积分
categories: [泛函分析]
notices:
  - name: 问题
    items:
      - “控制收敛”一节第一段中，仅由 $f_n$ 几乎处处收敛到 $f$ 似乎不能推出 $f$ Bochner 可积（Fatou 引理只给出 $\int_X\Vert f\Vert\ d\mu\leq\liminf_n\int_X\Vert f_n\Vert\ d\mu$，右端可能为无穷），需要命题中的控制条件。
      - “对偶空间”一节所引用的“命题2.3”所指不明确。
---

**Bochner 积分**
是 [[Lebesgue 积分]]的推广，
由 [[Salomon Bochner]] 引入，
可以对取值于 [[Banach 空间]]的函数定义积分。
例如，在处理演化方程，如 [[Schrödinger 方程]]、[[波方程]]时，
[[Duhamel 公式]]的非齐次项会自然出现向量值的积分。

## 定义

设 $(X, \mathcal{M}, \mu)$ 是[[完备]]的 $\sigma$-有限[[测度空间]]，
$(B, \Vert\cdot\Vert)$ 是 Banach 空间，
配备拓扑诱导的 [[Borel 代数]]。
设 $f\colon X\to B$ 是可测映射。

首先，对简单函数，即示性函数的有限和
$$
f=\sum_{i=1}^N \mathbb{1}_{E_i}\ b_i
$$
定义 Bochner 积分如下
$$
\int_X f(x)\ d\mu := \sum_{i=1}^N \mu(E_i)b_i.
$$

::: definition
可测函数 $f\colon X\to B$
称为**Bochner可积**的，
若存在一列简单函数 $\{f_n\}$，
使得
$$
\lim_{n\to \infty}\int_X\Vert f-f_n\Vert\ d\mu=0.
$$
:::

对 Bochner 可积的函数，
定义其 **Bochner 积分**为
$$
\int_X f\ d\mu := \lim_{n} \int_X f_n(x)\ d\mu.
$$

模去几乎处处为消失的函数，
我们记 Bochner 可积的函数空间为 $L^1(X,B)$。

## 性质

容易看出 Bochner 积分是良好定义的，
满足线性、三角不等式等基本性质。
进一步，两个几乎处处相等的函数的 Bochner 积分相同。

### 可积性的刻画

::: theorem [Bochner准则]
可测函数 $f\colon X\to B$ 是 Bochner 可积的，
当且仅当可以在零测集上修改 $f$，使其值域是可分的，
且
$$
\int_X\Vert f\Vert\ d\mu < \infty.
$$
:::

::: proof
假设 $f$ 是 Bochner 可积的，
则存在简单函数 $f_n$ 使得
$\int\Vert f-f_n\Vert\ d\mu\to 0$。
因此 $f_n$ 几乎处处收敛到 $f$。
而所有 $f_n$ 值域的并集是可数集，
故可以在零测集上调整 $f$ 使其值域可分。

另一方面，
假设 $f$ 的值域可分，
且 $\Vert f\Vert\in L^1(X)$。
取 $\{e_i\}_{i\geq 0}$ 在 $\operatorname{Im}\ f$ 中稠密。
对 $\epsilon>0$，
构造 $X$ 的一个分划：
$$
E_1=f^{-1}(B(e_1,\epsilon)),\
E_i=f^{-1}(B(e_i,\epsilon))-\bigcup_{j=1}^{i-1}E_j
$$
则可测函数
$f_{\epsilon}=\sum_{i=1}^{\infty} \mathbb{1}_{E_i}\ e_i$
满足 $\Vert f_{\epsilon}-f\Vert_{\infty}<\epsilon$。
取简单函数 $f_{\epsilon,N}$ 为级数
$f_{\epsilon}$ 的前 $N$ 项之和。
则 $f_{\epsilon,N}\uparrow f_{\epsilon}$ 逐点成立。

存在有限可测集 $X_n\uparrow X$。
由 [[Egorov 定理]]，
存在 $C_n\subset X_n$ 测度小于 $2^{-n}$，
使得 $\{f_{1/n,N}\}_N$ 在 $X_n-C_n$ 上一致收敛到 $f_{1/n}$。
取 $N_n$ 使得
$$
\sup_{X_n-C_n}|f_{1/n,N_n}-f_{1/n}|<\frac{1}{n}\ .
$$
令 $F=\{C_n\ \text{出现无限次}\}$，
则 $F$ 是零测集，
且简单函数 $g_n=f_{1/n,N_n}$ 在 $F$ 外趋向于 $f$。

再取非负的简单函数 $s_n\uparrow \Vert f\Vert$。
考虑简单函数
$$
f_n=s_n\frac{g_n}{\Vert g_n\Vert+1/n}
$$
则 $f_n$ 几乎处处收敛到 $f$，
$\Vert f-f_n\Vert\leq 2\Vert f\Vert$。
由 Lebesgue 控制收敛知 $f$ Bochner 可积。
:::

::: definition
可测函数 $f\colon X\to B$ 称为 **Bochner 可测**的，
若存在简单函数列 $f_n$ 几乎处处收敛到 $f$。
:::

从上述证明可以看出，Bochner 可积性等价于 Bochner 可测与范数可积。
我们还有如下推论：

::: corollary
映射 $f\colon X\to B$ 是 Bochner 可测的当且仅当
$f$ 可测，且在差零测集的意义下值域可分。
:::

### 控制收敛

设 $f_n\in L^1(X,B)$ 几乎处处收敛到 $f$。
由 Bochner 准则和 Fatou 不等式知 $f$ 也 Bochner 可积。
类比 Lebesgue 控制收敛定理，
我们有

::: proposition
假设存在非负可积函数 $F$，
使得 $\Vert f_n\Vert\leq F$ 几乎处处成立。
我们有
$$
\lim_{n\to \infty}\int_X \Vert f_n-f\Vert\ d\mu=0.
$$
特别地，
$$
\int_X f_n\ d\mu\stackrel{B}{\longrightarrow}
\int_X f\ d\mu.
$$
:::

### 线性算子

设 $\Lambda\colon B_1\to B_2$
是 Banach 空间之间的有界线性映射。

::: proposition
对 $f\in L^1(X, B_1)$，有 $\Lambda f\in L^1(X,B_2)$，
且
$$
\Lambda\left(\int_X f\ d\mu\right)=\int_X \Lambda f\ d\mu
$$
:::

## 其它定义方式

### Riemann 和

设 $I\subset \mathbb{R}$ 是有界闭区间，
$f\colon I\to B$ 是连续函数。
我们可以用 Riemann 和的方式定义 $\int_I f\ d\mu$。

利用一致连续性，
可以证明此时 $f$ 是 Bochner 可积的，
且 Bochner 积分与 Riemann 积分一致。

### 对偶空间

假设 $f\colon X\to B$ 可测，且 $\Vert f\Vert\in L^1(X)$。
则对 $B$ 上的有界线性泛函 $\Lambda$，
$\Lambda f$ 是可积函数，且
$$
I\colon \Lambda\mapsto \int_X\Lambda f\ d\mu
$$
给出 $B^*$ 上的有界线性泛函，即 $B^{**}$ 中的元素。
若 $I$ 落在嵌入 $B\hookrightarrow B^{**}$ 的像中，
则 $I\in B$ 给出了命题2.3意义下的积分。

::: remark
当 $B$ 是自反空间时，该意义下的积分一定可定义。
:::

::: remark
当 $B$ 可分时，
由 Bochner 准则，$f$ Bochner 可积，
此时 $I$ 一定落在 $B$ 中且恰好为 $f$ 的 Bochner 积分。
:::

```terms
Bochner 积分:
  en: Bochner integral
  de: Bochner-Integral
  fr: intégrale de Bochner
```
