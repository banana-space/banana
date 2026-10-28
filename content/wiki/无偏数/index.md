---
title: 无偏数
aliases: [Nim 数]
categories: [组合博弈论]
---

<problems>
- “扩张性质”“$\omega^{\omega^{\omega}}$ 以内的序数与 $\alpha_p$ 的性质”“$\omega^{\omega^{\omega}}$ 以外的性质”各节需要扩充。
</problems>

在[[组合博弈论]]中，**无偏数**（也称 **Nim 数**）
是用来描述[[正常无偏博弈]]（例如取石子游戏）的数。
大致来说，无偏数形如 $*n$，其中 $n$ 是[[序数]]（称为它的编号），
它在取石子游戏中对应于由 $n$ 个石子构成的一堆（如 $n$ 有限）。
如写成游戏[[局面]]的形式，则可以归纳地写为
（竖线的两边表示双方行动后的所有可能状态）
\[
*n = \{*0, \cdots, *(n-1)\mid *0, \cdots, *(n-1)\},
\]
也就是说任意一方取石子后，局面会变成有更少石子的一堆。$*0 = \{\mid\}$
则是无人可动，先行动者输的局面。
与此同时，
任意正常无偏博弈的局面均等价于某个无偏数 $*n$。

无偏数可以用类似于[[超现实数]]的方法定义加法和乘法。
无偏数的加法对应于局面的和，且可以显式地写为它对应编号的[[异或和]]。
无偏数的乘法不太直观，且伴有一些奇特的现象
（例如可以证明 $(*\omega)^3 = *2$）。
由此，全体无偏数构成[[特征 (代数)|特征]]为 $2$ 的[[域]]，记作 $\mathbf{On}_2$，
且编号小于某些序数的数会构成它的子域。
例如对每个自然数 $n$，编号小于 $2^{2^n}$ 的无偏数构成[[有限域]]，
每一个都是前一个的二次扩张；
编号小于 $\omega$ 的无偏数构成对二次扩张封闭的域；
编号小于 $\omega^{\omega^\omega}$ 的无偏数构成
$\mathbb{F}_2$ 的[[代数闭包]]。

## 定义

### 显式定义

我们首先给出无偏数和它的加法、乘法的显式定义。

::: definition [无偏数]
**无偏数**指的是形如 $*n$ 的数，其中 $n$ 是[[序数]]，
称为它的**编号**。
:::

为定义加法与乘法，我们引入以下记号。

::: definition [最小排除]
对由无偏数构成的类 $X$，记
$\operatorname{mex}(X)$ 为编号最小的无偏数 $*k$，
使得 $*k \notin X$。
特别地，$\operatorname{mex}(\varnothing) = *0$。
:::

::: definition [加法]
使用[[超限归纳法]]定义
\[
*m + *n = \operatorname{mex}(\{*m'+*n, *m+*n'\mid m'<m, n'<n\}).
\]
:::

::: definition [乘法]
使用[[超限归纳法]]定义
\[
*m \cdot *n =
\operatorname{mex}(\{*m'\cdot *n+*m\cdot *n'-*m'\cdot *n'
\mid m'<m, n'<n \}).
\]
:::

### 使用局面

显式定义虽然简洁却不太直观，以下给出使用[[局面]]的定义，
可以由此看出与[[超现实数]]的相似性。

::: definition [无偏数]
**无偏数**是通过以下归纳构造可构造出的数。

- 如集合 $X$ 中的所有元素都是无偏数，
  则局面 $\{X\mid X\}$ 是无偏数。
- 如果两个无偏数对应的局面等价，则它们视为相等的。
:::

一类特殊的局面记为 $*n$。

::: definition [$*n$]
对序数 $n>0$，归纳定义局面 $*n$ 为
\[
\Bigl\{ \{*n'\mid n'<n\} \mid  \{*n'\mid n'<n\} \Bigr\}.
\]
:::

以下的“最小排除原理”保证了所有无偏数必与某 $*n$ 相等。

::: theorem [最小排除原理]
如集合 $X$ 中只含有形如 $*n$ 的无偏数，
则 $\{X\mid X\} = \operatorname{mex}(X)$。
:::

无偏数的加法与乘法即是[[局面]]的加法与乘法。

::: definition [加法与乘法]
记 $x = \{X\mid X\}$，$y = \{Y\mid Y\}$，则

- $x + y := \bigl\{\{x'+y, x+y'\} \mid \{x'+y, x+y'\}\bigr\}$；
- $x \cdot y :=
  \bigl\{\{x'y + xy' - x'y'\} \mid \{x'y+xy'-x'y'\}\bigr\}$。

其中 $x'$ 取遍 $X$，$y'$ 取遍 $Y$。
:::

由以上的最小排除原理可以看出，两种定义的加法与乘法是相同的。

## 性质

### 域论性质

::: proposition [加法的描述]
任何序数均可以唯一地写成 $2^{\alpha_1} + 2^{\alpha_2} + \dots + 2^{\alpha_n}$ 的形式，
其中 $\alpha_1 > \dots > \alpha_n$，$n$ 有限。
以此建立序数与序数的有限子集之间的对应。
我们断言：$*\alpha + *\beta$ 的编号为 $\alpha$、$\beta$ 所对应的集合的对称差所对应的序数。
:::

::: proposition [$\mathbf{On}_2$ 是域]
$\mathbf{On}_2$ 是一个域。
:::

::: proof
可以直接验证除了逆元存在以外的其它性质，
这里着重说明逆元的存在性。

固定无偏数 $*\alpha$。定义 $T$ 为满足如下性质的最小集合：

- $*0 \in T$；
- 若 $*\beta \in T$，$\gamma < \alpha$，
  则 $*\gamma^{-1} \cdot (*1+(*\alpha + *\gamma) *\beta) \in T$。

此时，我们断言 $*\alpha^{-1} = \operatorname{mex}(T)$。
断言的证明可以通过直接验证乘法定义中构建的集合包含 $0$ 而不含 $1$ 来实现。
:::

::: proposition [$\mathbf{On}_2$ 中的平方根]
每一个无偏数都有其平方根。
:::

::: proof
固定无偏数 $*\alpha$。定义 $T$ 为满足如下性质的最小集合：

- 对于 $\beta < \alpha$，$\sqrt {*\beta} \in T$；
- 对于 $*\gamma_1 \ne *\gamma_2 \in T$，
  $\dfrac{*\gamma_1 *\gamma_2 + *\alpha}{*\gamma_1 + *\gamma_2} \in T$。

此时，我们断言 $\sqrt{*\alpha} = \operatorname{mex}(T)$，
其证明可以类似地验证。
:::

::: proposition [$\mathbf{On}_2$ 的代数闭性]
$\mathbf{On}_2$ 是代数闭域。
:::

::: proposition [$\mathbf{On}_2$ 的万有性]
任意集合层面的 $2$ 特征[[域]]均同构于 $\mathbf{On}_2$ 的子域。
:::

### 扩张性质

### $\omega^{\omega^{\omega}}$ 以内的序数与 $\alpha_p$ 的性质

::: theorem
在 $\mathbf{On}_2$ 中，编号最小的，
与编号小于之的无偏数代数无关的无偏数是 $\omega^{\omega^{\omega}}$。
:::

### $\omega^{\omega^{\omega}}$ 以外的性质

::: conjecture
在 $\mathbf{On}_2$ 中，编号次小的，
与编号小于之的无偏数代数无关的无偏数是 $\varphi(\omega, 0)$。
其中 $\varphi$ 是 [[Veblen $\varphi$ 记号]]。
:::

```terms
无偏数:
  en: 'impartial number, nimber'
```
