---
title: Tate 论题
categories: [代数数论]
notices:
  - name: 问题
    items:
      - '“局部理论”一节例子的证明和“整体化”一节的记号用到 $\int_{\mathcal O^\times} d^\times a$ 的计算，但本条目没有给出这一引理。'
      - “整体化”一节需要扩充。
navboxes: [代数数论]
---

**Tate 论题**指 [[John Tate]] 于 1950 年在普林斯顿大学完成的博士论文，
由 [[Emil Artin]] 指导。
文中 Tate 将 [[Hecke $L$ 函数]]写成[[理元群]]上的积分，以此研究其性质；他用[[抽象调和分析]]中的
[[Poisson 求和公式]]证明了 Hecke $L$ 函数的函数方程，对其作[[解析延拓]]，
并确定其极点。Tate 论题可视为对 [[Erich Hecke]] 自己的函数方程证明的有力重写。

## 论题

### 局部理论

设 $k$ 是[[局部域]]，Tate 指出 $\zeta$ 积分 $Z(f,\chi ,s)$（具体定义见 @definition-1）
在加法群的 [[Fourier 变换]]下具有对称性，见 @theorem-1。

另外，$L$ 因子 $L(\chi ,s)$ 也可视作 $Z(f,\chi ,s)$ 的“公因子”，因此给了定义一般 $L$ 因子的方法。

#### 记号

下面我们固定这些记号。
对 $k=\mathbb R$ 我们规定：

::: notation*
- $|\cdot |$ 为绝对值；

- $\psi(x)=e^{-2\pi ix}$ 为标准[[加法特征]]；

- $dx$ 为通常 [[Lebesgue 测度]]；

- $d^*x= dx/ |x|$ 为乘法群上 Haar 测度；

- $S(k)$ 为 [[Schwartz 函数]]空间。

:::

对 $k=\mathbb C$ 我们规定：

::: notation*
- $|x|= x\bar x$ 为通常模长的平方；

- $\psi(x)= e^{-2\pi i(x+ \bar x)}$ 为加法特征；

- $dx$ 为通常 Lebesgue 测度的两倍；

- $S(k)$ 为 [[Schwartz 函数]]空间。

:::

对 $k$ 为 $k_0 =\mathbb Q_p$ 的有限扩张或者 $k_0 = \mathbb F_q ((t))$ 的可分有限扩张时：

::: notation*
- $\mathfrak o$ 为 $k$ 的整数环；

- $\mathfrak p$ 为 $\mathfrak o$ 的[[极大理想]]；

- $\varpi\in \mathfrak p$ 为生成元；

- $\mathfrak d$ 为 $k$ 的[[判别式]]；

- $|x|= N(\mathfrak p)^{- \mathop{\mathrm {ord}}(x)}$；

- $\psi (x) =
  e^{2 \pi i \lambda {\mathop{\mathrm{Tr}}_{k/k_0}(x)}} $ 为加法特征；

- $dx$ 为满足 $\int _ {\mathfrak o} dx = N(\mathfrak d)^{-1/2}$ 的 [[Haar 测度]]；

- $d^\times x= \frac {N \mathfrak p } { N \mathfrak p -1 } dx/|x|$；

- $S(k)$ 为 $k$ 上紧支局部常值函数空间。

:::

#### 结论

::: definition {@definition-1}
令 $k$ 是局部域，$f\in S(k)$，$\chi \colon k^\times \to U(1)$ 是乘法群的酉特征，$s$ 是一复数。定义
$$
Z(f, \chi,s) = \int _{k^\times } f(x) \chi(x) |x|^s d^\times x.
$$
:::

注意我们并不要求 $f(0) =0$，因此上面积分并不是在紧集上积分，故需要考虑收敛性。

::: lemma
当 $f\in S(k)$ 时，$Z(f,\chi , s)$ 在半平面
$\mathop { \mathrm {Re}} s >0$ 的任意紧集上一致可积。
:::

上面引理基本可通过下面例子看出，此例子表明 Hecke $L$ 因子可以写为 $\zeta$ 积分。

::: example {@example-1}
假设 $k$ 是非 Archimedes 局部域。若 $\chi$ 是非分歧特征，即在 $\mathcal O^\times$ 上平凡，
则我们有
$$
Z( \mathbb 1_ {\mathcal O}, \chi ,s ) = \frac {N(\mathfrak d)^{-\frac 1 2}} { 1 - \chi (\varpi) N (\mathfrak p)^{-s}}.
$$
否则
$$
Z( \mathbb 1_ {\mathcal O}, \chi ,s ) = 0;
$$
:::

::: proof
按定义，
\[
Z( \mathbb 1_ {\mathcal O}, \chi ,s )
= \int _ {\mathcal O-\{ 0\}} \chi (a)|a|^s d^\times a \\
= \sum _{n = 0} ^ \infty \int _{\varpi ^ n \mathcal O^\times } \chi (a)|a|^s d^\times a. \\
\]
由于 $d^\times  a$ 是乘法群上 Haar 测度，因此
\[
\int _{\varpi ^ n \mathcal O^\times } \chi (a)|a|^s d^\times a
= \int _{\mathcal O^\times } \chi (\varpi^n a) |\varpi ^ n a |^s d^\times a \\
= (\chi (\varpi) N(\mathfrak p)^{-s})^n \int _ {\mathcal O^\times } \chi (a)d^\times a.
\]
而 $\int _ {\mathcal O^\times } d^\times a =N(\mathfrak d)^{-\frac 1 2}$。
因此由 [[Schur 引理]]知命题成立。
:::

::: theorem {@theorem-1}
存在与 $f$ 无关的因子 $\gamma (\chi ,s)$ 使得 $1>\mathop { \mathrm {Re}} s >0$ 时
$$
Z(f,\chi ,s) = \gamma(\chi,s) Z(\hat f , \chi^{-1}, 1-s).
$$
这里
$$
\hat f(\xi) = \int _ k f(x) \psi (x\xi) dx.
$$

- 当 $k$ 为实数域时，$\chi = 1$ 或者 $\mathop \mathrm {sgn}$，
  我们有
  $$
  \gamma (1 ,s) = 2^{1-s} \pi ^{-s} \cos (\frac { \pi s} 2) \Gamma (s), \
  \gamma(\mathop \mathrm {sgn},s) =i 2^{1-s} \pi ^{-s} \sin (\frac { \pi s} 2) \Gamma (s);
  $$

- 当 $k$ 为复数域时，$\chi = \chi_n$，$\chi_n(re^{i\theta} ) = e^{in\theta}$，
  我们有
  $$
  \gamma(\chi_n ,s) = i^{|n|} \frac {( 2\pi)^{1-s} \Gamma(s+ \frac {|n|} 2)}
  {(2 \pi )^s \Gamma (1 -s + \frac {|n|} 2 ) };
  $$

- 当 $k$ 非 Archimedes 时，不妨设 $\chi (\varpi) =1$，若 $\chi$ [[非分歧特征|非分歧]]，
  则 $\chi$ 平凡，
  我们有
  $$
  \gamma (1,s) = (N \mathfrak d )^{s-\frac 1 2}
  \frac {1 - (N \mathfrak p )^{s-1}}{1 - (N \mathfrak p )^{-s}};
  $$
  若 $\chi$ [[分歧特征|分歧]]，令 $\mathfrak f_ \chi$ 为 $\chi$ 的[[导子]]，我们有
  $$
  \gamma(\chi , s) = (N \mathfrak d) ^{s- \frac 1 2} (N \mathfrak f _ \chi) ^{s-1}
  \sum _ { x\in \mathfrak o ^ \times / 1 + \mathfrak f _ \chi } \chi (- x)
  \psi( \frac x { \varpi ^ { \mathop \mathrm {ord} (\mathfrak d \mathfrak f _\chi)}}).
  $$

:::

::: remark
$\hat f$ 实际上是 Fourier 变换，且 $\hat f\in S(k)$，因为对任意非平凡加法群的特征 $\psi$，
$\xi \mapsto \psi(\cdot\xi)$ 给出了同构 $k\cong \hat k$。
:::

### 整体化

令 $K$ 是整体域，Tate 指出理元群上的积分 $Z(f,\chi,s)$ 在加元环的 Fourier 变换下具有对称性。
而当我们将 $f$ 取为局部的测试函数的乘积时，就能得到 Hecke $L$ 函数的函数方程。

#### 记号

::: notation*
- 令 $|K|$ 表示 $K$ 的所有[[赋值]]的等价类；

- 对任意 $v\in |K|$，$K_v$ 是 $K$ 对于赋值 $v$ 的完备化；

- 局部上的记号都同局部理论，不过在此用下标 $v$ 加以区别；

- $\mathbb A_K$ 为加元环；

- $\mathbb I_K$ 为理元群；

- 对任意 $a=(a_v)_v \in \mathbb I_K$，令 $|a| = \prod_v |a_v|_v$；

- $dx = \prod ' _v dx_v$ 为 $\mathbb A_K$ 上[[限制乘积|限制乘积测度]]；

- $d^\times a = \prod ' _v d ^ \times a _v$ 为 $\mathbb I_K$ 上限制乘积测度。
  此时需要验证 $\int _{\mathfrak {o _v} ^ \times } d ^ \times a_v =1$ 对几乎所有 $v$ 成立；

- 令 $\psi( (x_v)_v) = \prod _v \psi(x_v) $，此时 $\psi$ 是 $\mathbb A_K$ 上连续特征。

:::

#### 结论

这里我们需要[[Fourier 变换|加元环上 Fourier 变换]]。

::: definition
$S(\mathbb A_K)$ 为 $\mathbb A_K$ 上形如 $\bigotimes _v f_v$ 的函数的线性组合，
其中 $\bigotimes f_v ((x_v)_v) = \prod_v f_v(x_v)$，$f_v \in S(K_v)$，且对几乎所有 $v< \infty$，
$f_v =  \mathbb 1_{\mathcal O_v }$。
:::

::: proposition
令 $f\in S(\mathbb A_K)$，则
$$
\hat f (\xi ) = \int _{\mathbb A_K} f(x) \overline {\psi (\xi x)} dx \in S(\mathbb A_K),
$$
且若 $f= \bigotimes _v f_v$，则 $\hat f = \bigotimes _v \widehat {f_v}$。
:::

::: definition
令 $\chi \colon \mathbb I _ K \to U(1)$ 是 $\mathbb I_K$ 上酉特征，且在 $K^\times$ 上平凡。
$f\in S(\mathbb A_K)$，$s\in \mathbb C$。
定义
$$
Z(f,\chi ,s) = \int _{\mathbb I_K} f(a)\chi (a) |a|^s d^\times a .
$$
:::

## 推广尝试

观察 @example-1，我们不难发现以下命题：

::: proposition
对非 Archimedes 局部域 $k$ 和乘法特征 $\chi$，
我们规定 $L(\chi ,s) =\frac 1 {1- \chi (\varpi ) N(\mathfrak p)^{-s}}$ 若 $\chi$ 非分歧。
否则令 $L(\chi ,s ) =1$。
则
$$
\{ Z(f, \chi ,s ); f\in S(k) \} = L(\chi ,s) \mathbb C [N(\mathfrak p)^s, N(\mathfrak p)^{-s}].
$$
:::

```terms
Tate 论题:
  en: Tate's thesis
```
