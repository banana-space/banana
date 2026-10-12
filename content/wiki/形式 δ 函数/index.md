---
title: '形式 $\delta$ 函数'
aliases: [形式 delta 函数]
categories: [初等代数]
notices:
  - name: 问题
    items:
      - '“三变量形式 delta 恒等式”一节中推论的左边似乎有误：按“三变量的留数取值公式”，左边等于 $\iota_{x_1, x_2}p(x_1 - x_2)$（例如取 $p = 1$ 时左边为 $1$，右边为 $0$）；按证明，左边似乎应为三变量形式 delta 恒等式中左边两个核之差（或右边的核 $x_2^{-1} \delta\left(\frac{x_1 - x_0}{x_2}\right)$）乘以 $p(x_0)$ 后的留数。'
---

**形式 $\delta$ 函数**是一种特殊的[[形式分布]]，
是 [[$\delta$ 函数]]在形式计算中的对应物。

直观地说，与形式 $\delta$ 函数相乘后，乘子中的变量可以按指定关系替换。
例如，对 [[Laurent 多项式]] $p(x)$，有
\[
p(x) \delta(x) = p(1) \delta(x).
\]

类似地，可以定义两变量和三变量的形式 $\delta$ 函数，满足类似的取值性质，例如在两变量的情况下，
对任意形式分布 $f(x)$，有
\[
f(x)x^{-1}\delta\left(\frac{y}{x}\right)
= f(y)x^{-1}\delta\left(\frac{y}{x}\right)
\]

重要的是，[[形式留数]]将形式 $\delta$ 函数映射为 Laurent 多项式空间上的单位线性泛函。
因此复杂的变量代换和展开约定可以通过形式 $\delta$ 函数的乘法和留数来统一处理。

## 定义

以下固定一个[[域]] $k$。
记号 $k[[x, x^{-1}]]$ 表示所有以整数为指数的[[形式分布]]组成的空间，
其中的系数无需满足截断条件；多变量的记号含义类似。

::: definition [形式 $\delta$ 函数] {@def-formal-delta}
**形式 $\delta$ 函数**定义为
\[
\delta(x) := \sum_{n \in \mathbb Z}x^n
\in k[[x, x^{-1}]].
\]
:::

这个表达式的每一项系数都是 $1$。
它不属于[[形式 Laurent 级数]]空间 $k((x))$，因为其非零项的指数没有下界。
这里也不考虑解析意义上的收敛性。

::: definition [两变量形式 $\delta$ 函数] {@def-bivariable-formal-delta}
关于独立形式变量 $x, y$ 的**两变量形式 $\delta$ 函数**定义为
\[
x^{-1} \delta\left(\frac{y}{x}\right) :=
\sum_{n \in \mathbb Z}x^{-n - 1}y^n.
\]
它属于两变量形式分布空间
\[
k[[x, x^{-1}, y, y^{-1}]].
\]
这里的记号表示在 $\delta(t) = \sum_{n \in \mathbb Z}t^n$ 中，
逐项将 $t^n$ 替换为 $x^{-n}y^n$，再乘以 $x^{-1}$。
:::

::: definition [三变量形式 $\delta$ 函数] {@def-three-variable-delta}
关于独立形式变量 $x_0, x_1, x_2$ 的**三变量形式 $\delta$ 函数**定义为
\[
x_0^{-1} \delta\left(\frac{x_1 - x_2}{x_0}\right) :=
\sum_{n \in \mathbb Z} \sum_{j \geq 0}
\binom{n}{j}(-1)^j
x_0^{-n - 1}x_1^{n - j}x_2^j.
\]
它属于三变量形式分布空间
\[
k[[x_0, x_0^{-1}, x_1, x_1^{-1}, x_2, x_2^{-1}]].
\]
三变量表达式中的二项式都按[[形式分布|二项式展开约定]]
展开为书写顺序中第二个变量的非负幂。
:::

## 变量交换对称性

保持二项式的展开变量不变时，可以交换另外两个变量的位置。

::: proposition [交换对称性] {@prop-exchange-symmetry}
设 $x_0, x_1, x_2$ 是独立的形式变量，则
\[
x_2^{-1} \delta\left(\frac{x_1 - x_0}{x_2}\right)
= x_1^{-1} \delta\left(\frac{x_2 + x_0}{x_1}\right).
\]
两边的二项式都展开为 $x_0$ 的非负整数次幂。
:::

::: proof
按 @def-three-variable-delta 展开两边。
对任意 $n \in \mathbb Z$ 和 $j \geq 0$，
单项式 $x_1^{-n - 1}x_2^{n - j}x_0^j$ 在两边的系数分别为
\[
(-1)^j \binom{j - n - 1}{j},
\qquad \binom{n}{j}.
\]
由整数二项式系数恒等式，这两个系数相等。
:::

## 取值性质

形式分布的乘法要求每个系数都由有限项求和得到，
见[[形式乘法]]。
以下取值性质都包含相应乘积有意义的断言。

### 单变量的取值性质

@def-formal-delta 中的所有系数都相同，
所以乘以 $x$ 只会平移求和指标，不会改变这个形式分布。

::: proposition [单变量的取值性质] {@prop-delta-evaluation-at-one}
设 $V$ 是 $k$-[[向量空间]]，则对任意 $p(x) \in V[x, x^{-1}]$，有
\[
p(x) \delta(x) = p(1) \delta(x),
\qquad
\operatorname{Res}_x\bigl(p(x) \delta(x)\bigr) = p(1).
\]
:::

::: proof
取任意 $p(x) = \sum_{m = -N}^{M} p_m x^m \in V[x, x^{-1}]$，
有
\[
p(x)\delta(x) = \sum_{m = -N}^{M} \sum_{n \in \mathbb Z} p_m x^{n + m} = \sum_{m = -N}^{M}\sum_{n \in \mathbb Z} p_m x^n = p(1) \delta(x).
\]
再由 $\operatorname{Res}_x\delta(x) = 1$，取留数得到第二式。
:::

因此，单变量形式 $\delta$ 函数通过留数配对表示在 $1$ 处取值的[[线性泛函]]。

::: example
取 $p(x) = x^{-1} + 2 + x$，由 @prop-delta-evaluation-at-one，有
\[
(x^{-1} + 2 + x) \delta(x) = 4 \delta(x).
\]
取 $p(x) = x - 1$，则得到 $(x - 1) \delta(x) = 0$。
因而非零多项式与非零形式分布的乘积可以为零。
:::

### 两变量的取值性质

对于 @def-bivariable-formal-delta 中的两变量形式 $\delta$ 函数，
相应的替换关系是 $x = y$。
这里的乘子可以是任意单变量形式分布。

::: proposition [两变量的取值性质] {@prop:delta-as-kernel}
设 $V$ 是 $k$-[[向量空间]]，则
对任意单变量形式**分布** $f(x) \in V[[x, x^{-1}]]$，
以下两个乘积均有意义，并且
\[
f(x)x^{-1} \delta\left(\frac{y}{x}\right)
= f(y)x^{-1} \delta\left(\frac{y}{x}\right).
\]
等式成立于两变量形式分布空间 $V[[x, x^{-1}, y, y^{-1}]]$。
特别地，取 $x$ 的留数得到
\[
\operatorname{Res}_x\left(f(x)x^{-1}
\delta\left(\frac{y}{x}\right)\right) = f(y).
\]
等式两边均属于 $V[[y, y^{-1}]]$。
:::

::: proof
将 $f$ 展开为
\[
f(x) = \sum_{m \in \mathbb Z} f_m x^m.
\]
展开乘积得到
\[
f(x) x^{-1} \delta\left(\frac{y}{x}\right) = \sum_{m, n \in \mathbb Z}f_mx^{m - n - 1}y^n.
\]
对每个固定的单项式 $x^i y^j$，
只有 $n = j$，$m = i + j + 1$ 这一对指标有贡献。
因此该乘积[[形式可求和性|形式可求和]]，对应系数为 $f_{i + j + 1}$。
另一方面，$f(y)x^{-1} \delta(y/x)$ 展开为
\[
\sum_{m, n \in \mathbb Z}f_mx^{-n - 1}y^{m + n}.
\]
对固定的 $x^i y^j$，只有 $n = -i - 1$，$m = i + j + 1$ 有贡献。
两个乘积的对应系数相同，故乘法取值恒等式成立。

再取 $i = -1$，便得到
\[
\operatorname{Res}_x\bigl(f(x)x^{-1}
\delta\left(\frac{y}{x}\right)\bigr)
= \sum_{j \in \mathbb Z}f_jy^j = f(y).
\]
:::

### 三变量的取值性质

@def-three-variable-delta 中的三变量形式 $\delta$ 函数
对应替换关系 $x_0 = x_1 - x_2$。
由于负整数次幂需要作二项式展开，代入时还须指定展开方向。
乘子各变量的指数分别有统一下界，是保证下面的乘积有意义的一个充分条件。

::: proposition [三变量的取值性质] {@prop-three-variable-delta-substitution}
设 $V$ 是 $k$-[[向量空间]]，且
\[
H(x_0, x_1, x_2) = \frac{G(x_0, x_1, x_2)}{x_0^a x_1^b x_2^c},
\qquad G \in V[[x_0, x_1, x_2]], \quad a, b, c \geq 0.
\]
则有
\[
\begin{aligned}
  & x_0^{-1} \delta\left(\frac{x_1 - x_2}{x_0}\right)
    H(x_0, x_1, x_2) \\
  & \qquad = x_0^{-1} \delta\left(\frac{x_1 - x_2}{x_0}\right)
    \iota_{x_1, x_2}H(x_1 - x_2, x_1, x_2).
\end{aligned}
\]
其中分子 $G$ 使用[[形式分布|形式幂级数的代入]]，
$\iota_{x_1, x_2}$ 将分母中的 $(x_1 - x_2)^{-a}$
按 $x_2$ 的非负幂展开，见[[形式分布|二项式展开约定]]。
两边的乘积均形式可求和，等式成立于取值于 $V$ 的三变量形式分布空间。
:::

::: proof
三变量形式 $\delta$ 函数中的每个单项式总次数都是 $-1$。
固定乘积中的一个单项式，就固定了 $H$ 中参与计算的单项式的总次数。
由于 $H$ 的各变量指数分别有下界，这样的单项式只有有限个，
所以左边的乘积[[形式可求和性|形式可求和]]。

代入后的乘子属于 $V((x_1))((x_2))$。
右边固定 $x_0$ 的指数后，核的系数按 $x_2$ 的非负幂展开，
而乘子的 $x_2$ 指数有下界，因而每个系数只涉及有限项。
所以右边的乘积也形式可求和。

其余证明与两变量情况类似，只需将 $x_0$ 替换为 $x_1 - x_2$。
:::

交换变量并变号，或使用 @prop-exchange-symmetry，
即可得到其他展开方向和其他变量的取值公式。

::: corollary [三变量的留数取值公式] {@prop-three-variable-delta-action}
设 $H$ 满足 @prop-three-variable-delta-substitution 的条件，则
\[
\begin{aligned}
  & \operatorname{Res}_{x_0} \left(
    x_0^{-1} \delta\left(\frac{x_1 - x_2}{x_0}\right)
    H(x_0, x_1, x_2)
  \right) \\
  & \qquad = \iota_{x_1, x_2}H(x_1 - x_2, x_1, x_2).
\end{aligned}
\]
等式两边均属于 $V((x_1))((x_2))$。
:::

## 与 Cauchy 积分公式的联系

### 恒等算子与正、负幂投影

在[[形式留数|形式核]]的定义下，@prop:delta-as-kernel 表明：
$x^{-1} \delta\left(\frac{y}{x}\right)$ 是 Laurent 多项式空间上[[恒等映射|恒等算子]]的核。

Laurent 多项式空间有自然的[[直和]]分解
\[
k[x, x^{-1}] = k[x] \oplus x^{-1}k[x^{-1}].
\]
因此恒等算子是两个[[投影算子|投影]]之和：
先分别提取非负幂部分与负幂部分，再将它们相加。
所以，要直观理解 $x^{-1} \delta\left(\frac{y}{x}\right)$ 的定义动机，可以先找这两个投影的核。

### 正、负幂投影的留数表示

设 $p \in k[x, x^{-1}]$，$y$ 为独立形式变量。
由[[形式留数|Cauchy 积分公式的形式版本]]，有
\[
\operatorname{Res}_{x = y} \frac{p(x)}{x - y} = p(y).
\]
这里将 $y$ 保留为参数，在系数域 $k(y)$ 上对 $x$ 取留数。

有理函数 $p(x)/(x - y)$ 的有限极点只能是 $0$ 和 $y$。
由[[形式留数|两变量有理函数的留数关系]]，得到
\[
p(y) = -\operatorname{Res}_{x = \infty} \frac{p(x)}{x - y}
  - \operatorname{Res}_{x = 0} \frac{p(x)}{x - y}.
\]
这两个留数恰好分别给出 $p$ 的非负幂部分与负幂部分。

::: proposition [正、负幂投影的留数表示] {@prop-delta-cauchy-projections}
设 $p \in k[x, x^{-1}]$，则存在唯一的分解
\[
p(x) = p_+(x) + p_-(x),
\qquad p_+ \in k[x], \quad p_- \in x^{-1}k[x^{-1}].
\]
则
\[
\begin{aligned}
  p_+(y)
  & = -\operatorname{Res}_{x = \infty} \frac{p(x)}{x - y}
  = \operatorname{Res}_x\left(
    p(x)\, \iota_{x, y} \frac1{x - y}\right), \\
  p_-(y)
  & = -\operatorname{Res}_{x = 0} \frac{p(x)}{x - y}
  = -\operatorname{Res}_x\left(
    p(x)\, \iota_{y, x} \frac1{x - y}\right).
\end{aligned}
\]
其中 $\iota$ 使用[[形式分布|二项式展开约定]]：
$\iota_{x, y}$ 按 $y$ 的非负幂展开，$\iota_{y, x}$ 按 $x$ 的非负幂展开。
:::

::: proof
记 $p(x) = \sum_{m \in \mathbb Z}a_mx^m$，其中只有有限个 $a_m$ 非零。
在 $x = \infty$ 处，Cauchy 核的展开为
\[
\iota_{x, y} \frac1{x - y} = \sum_{n \geq 0}x^{-n - 1}y^n.
\]
无穷远留数是展开中 $x^{-1}$ 项系数的负值，
所以负号抵消，得到
\[
-\operatorname{Res}_{x = \infty} \frac{p(x)}{x - y}
= \operatorname{Res}_x\left(p(x)\, \iota_{x, y} \frac1{x - y}\right)
= \sum_{n \geq 0}a_ny^n = p_+(y).
\]
这证明了第一行的连续等式。

在 $x = 0$ 处的展开是
\[
\iota_{y, x} \frac1{x - y} = -\sum_{n \geq 0}x^ny^{-n - 1}.
\]
此处的留数就是展开中 $x^{-1}$ 项的系数，因而
\[
\begin{aligned}
  -\operatorname{Res}_{x = 0} \frac{p(x)}{x - y}
  & = -\operatorname{Res}_x\left(
    p(x)\, \iota_{y, x} \frac1{x - y}\right) \\
  & = \sum_{n \geq 0}a_{-n - 1}y^{-n - 1} = p_-(y).
\end{aligned}
\]
这证明了第二行的连续等式。

两次提取系数都只涉及有限个非零 $a_m$，所以所有乘积和留数都有意义。
:::

@prop-delta-cauchy-projections 同时给出了两个投影的形式核：
\[
\iota_{x, y} \frac1{x - y},
\qquad
-\iota_{y, x} \frac1{x - y}.
\]
两个投影之和是恒等算子。
由 @prop:delta-as-kernel，恒等算子的核是
$x^{-1} \delta\left(\frac{y}{x}\right)$，因而
\[
x^{-1} \delta\left(\frac{y}{x}\right)
= \iota_{x, y} \frac1{x - y} - \iota_{y, x} \frac1{x - y}.
\]

## 三变量形式 delta 恒等式

::: proposition [三变量形式 delta 恒等式] {@prop-three-variable-formal-delta}
设 $x_0, x_1, x_2$ 是独立的形式变量，则
\[
\begin{aligned}
  & x_0^{-1} \delta\left(\frac{x_1 - x_2}{x_0}\right)
  -x_0^{-1} \delta\left(\frac{x_2 - x_1}{-x_0}\right) \\
  & \qquad = x_2^{-1} \delta\left(\frac{x_1 - x_0}{x_2}\right).
\end{aligned}
\]
三个表达式中的二项式分别展开为
$x_2$、$x_1$、$x_0$ 的非负整数次幂。
等式成立于三变量形式分布空间
$k[[x_0, x_0^{-1}, x_1, x_1^{-1}, x_2, x_2^{-1}]]$。
:::

::: proof
任取 Laurent 多项式 $p(x_0, x_1) \in k[x_0^{\pm1}, x_1^{\pm1}]$。

将三个核分别乘以 $p(x_0, x_1)$，再对 $x_0, x_1$ 取留数。
由[[形式留数]]中多变量留数的定义，这两次取留数可以交换次序。
@prop-three-variable-delta-action 的代入公式可以直接用于乘子 $p(x_0, x_1)$。

对第一个核，先取 $x_0$ 的留数，得到
\[
\operatorname{Res}_{x_1}\operatorname{Res}_{x_0} \left(
  x_0^{-1} \delta\left(\frac{x_1 - x_2}{x_0}\right)p(x_0, x_1)
\right)
= \operatorname{Res}_{x_1}
  \iota_{x_1, x_2}p(x_1 - x_2, x_1).
\]

对第二个核，同样先取 $x_0$ 的留数，得到
\[
\operatorname{Res}_{x_1}\operatorname{Res}_{x_0} \left(
  x_0^{-1} \delta\left(\frac{x_2 - x_1}{-x_0}\right)p(x_0, x_1)
\right)
= \operatorname{Res}_{x_1}
  \iota_{x_2, x_1}p(x_1 - x_2, x_1).
\]

对右边的核，由 @prop-exchange-symmetry，
改为先取 $x_1$ 的留数，得到
\[
\operatorname{Res}_{x_0}\operatorname{Res}_{x_1} \left(
  x_1^{-1} \delta\left(\frac{x_2 + x_0}{x_1}\right)p(x_0, x_1)
\right)
= \operatorname{Res}_{x_0}
  \iota_{x_2, x_0}p(x_0, x_2 + x_0).
\]

现在将 $x_2$ 保留为参数，考虑 $k(x_2)$ 上的有理函数
\[
F(t) = p(t - x_2, t).
\]
因为 $p$ 是 Laurent 多项式，$F$ 的分母只含 $t$ 和 $t - x_2$ 的幂，
所以有限极点只能是 $0$ 和 $x_2$。

第一个结果中的 $\iota_{x_1, x_2}$ 将 $x_1 - x_2$ 的负幂写成
$x_1$ 的负幂与 $x_2/x_1$ 的幂级数之积。
这正是 $F(t)$ 在 $t = \infty$ 处按 $t^{-1}$ 的展开。
无穷远点的留数是该展开中 $t^{-1}$ 项系数的负值，因而
\[
\operatorname{Res}_{x_1}
  \iota_{x_1, x_2}p(x_1 - x_2, x_1)
= -\operatorname{Res}_{t = \infty}F(t).
\]
第二个结果中的 $\iota_{x_2, x_1}$ 按 $x_1$ 展开，
对应 $F(t)$ 在 $t = 0$ 处的展开，所以
\[
\operatorname{Res}_{x_1}
  \iota_{x_2, x_1}p(x_1 - x_2, x_1)
= \operatorname{Res}_{t = 0}F(t).
\]
最后，$F(x_2 + x_0) = p(x_0, x_2 + x_0)$，
其中 $x_0 = t - x_2$ 是点 $t = x_2$ 处的局部变量。
因此第三个结果为
\[
\operatorname{Res}_{x_0}
  \iota_{x_2, x_0}p(x_0, x_2 + x_0)
= \operatorname{Res}_{t = x_2}F(t).
\]
在 $k(x_2)$ 中，由[[形式留数|有理函数的留数关系]]，
\[
-\operatorname{Res}_{t = \infty}F(t)
-\operatorname{Res}_{t = 0}F(t)
= \operatorname{Res}_{t = x_2}F(t).
\]
故待证等式两边乘以任意 $p$ 后，对 $x_0, x_1$ 的双重留数相等。
:::

::: corollary {@cor-delta-negative-part-action}
设 $p(x) \in k[x, x^{-1}]$，将其分解为
\[
p(x) = p_+(x) + p_-(x),
\qquad p_+ \in k[x], \quad p_- \in x^{-1}k[x^{-1}].
\]
则
\[
\begin{aligned}
  & \operatorname{Res}_{x_0} \left(
    x_0^{-1} \delta\left(\frac{x_1 - x_2}{x_0}\right)p(x_0)
  \right) \\
  & \qquad = \iota_{x_1, x_2}p_-(x_1 - x_2)
    -\iota_{x_2, x_1}p_-(x_1 - x_2).
\end{aligned}
\]
:::

::: proof
将 @prop-three-variable-formal-delta 的两边乘以 $p(x_0)$，
再取 $x_0$ 的留数。
由 @prop-three-variable-delta-action 及交换变量后的版本，
得到
\[
\iota_{x_1, x_2}p(x_1 - x_2) - \iota_{x_2, x_1}p(x_1 - x_2).
\]
因为 $p_+$ 是多项式，$p_+(x_1 - x_2)$ 的两种展开相同，这部分相消。
剩下的就是所需等式。
:::

## 与 $\delta$ 函数的联系

形式 $\delta$ 函数与 [[$\delta$ 函数]]都通过取值性质发挥作用。
在形式计算中，将它乘以 Laurent 多项式再取留数，就得到多项式在指定点的值。
在分析中，将 $\delta$ 与测试函数配对，同样得到指定点的函数值。

### 形式计算与分析的对照

下表按各个对象在计算中的作用列出对应关系。
分析中的测试函数取为实线上的紧支撑光滑函数，
记其空间为 $C_c^\infty(\mathbb R)$。
紧支撑性控制积分涉及的范围，Laurent 多项式的有限项性则保证留数配对只涉及有限项。
为简化表中的记号，写 $\langle A,p\rangle_{\mathrm f}
=\operatorname{Res}_z A(z)p(z)$。

| 作用 | 形式计算 | 分析 |
| --- | --- | --- |
| 测试函数 | Laurent 多项式 $p(z)\in\mathbb C[z,z^{-1}]$ | 紧支撑光滑函数 $\varphi\in C_c^\infty(\mathbb R)$ |
| 广义函数 | 形式分布 $A(z)$ | 分布 $u$ |
| 点取值泛函 | 形式 $\delta$ 函数 $\delta(z)$ | $\delta$ 函数 $\delta_a$ |
| 配对 | $\operatorname{Res}_z A(z)p(z)$ | $\langle u,\varphi\rangle$ |
| 提取留数 | $\operatorname{Res}_z F(z)$ | $\displaystyle\frac{1}{2\pi i}\oint_\gamma F(z)\,dz$ |
| 在一点取值 | $\operatorname{Res}_z\delta(z)p(z)=p(1)$ | $\langle\delta_a,\varphi\rangle=\varphi(a)$ |
| 乘法取值 | $p(z)\delta(z)=p(1)\delta(z)$ | $\varphi\delta_a=\varphi(a)\delta_a$ |
| 恒等算子的核 | $z^{-1}\delta(w/z)$ | $\delta_{\mathrm D}(x-y)$ |
| 导数的配对 | $\langle A',p\rangle_{\mathrm f}=-\langle A,p'\rangle_{\mathrm f}$ | $\langle u',\varphi\rangle=-\langle u,\varphi'\rangle$ |

表中的围道积分适用于在圆环上收敛的 Laurent 级数 $F$，
$\gamma$ 是圆环内绕原点一周的正向圆周。
它通过积分提取 $z^{-1}$ 的系数，与形式留数一致。
表中的核则分别满足
\[
\operatorname{Res}_z\left(z^{-1}\delta(w/z)p(z)\right)=p(w),
\qquad
\int_{\mathbb R}\delta_{\mathrm D}(x-y)\varphi(x)\,dx=\varphi(y).
\]

这些对应说明了两套计算的共同结构。
形式分布给出 Laurent 多项式空间上的代数线性泛函；
分析中的分布还须满足测试函数空间上的连续性条件。

### 单位圆上的解释

取 $k=\mathbb C$，令 $z=e^{i\theta}$，
Laurent 多项式 $p(z)$ 就成为圆周上的三角多项式 $p(e^{i\theta})$。
圆周本身紧致，因而圆周上的光滑函数都具有紧支撑，
可以用作测试函数。
在这个意义下，形式 delta 对应于圆周上集中在 $z=1$ 处的点质量。

具体地，记 $\delta_{\mathrm D}$ 为实线上的 $\delta$，则在分布意义下有
\[
\sum_{n\in\mathbb Z}e^{in\theta}
=2\pi\sum_{j\in\mathbb Z}\delta_{\mathrm D}(\theta-2\pi j).
\]
右边在实线上是周期重复的点质量，在圆周上则集中在同一个点 $z=1$。
这是 $\delta$ 的[[Fourier 级数]]表示，
参见 [DLMF，第 1.17(iii) 节](https://dlmf.nist.gov/1.17.iii)。

::: proposition [单位圆上的分布解释] {@prop-delta-circle-distribution}
令 $D_N(\theta)=\sum_{n=-N}^{N}e^{in\theta}$。
对任意光滑的 $2\pi$-周期函数 $\varphi$，有
\[
\lim_{N\to\infty}\frac{1}{2\pi}
\int_{-\pi}^{\pi}D_N(\theta)\varphi(\theta)\,d\theta
=\varphi(0).
\]
因此，相对于归一化测度 $d\theta/(2\pi)$，
这个级数表示在 $0$ 处取值的泛函。
:::

::: proof
记
\[
\widehat\varphi(n)=\frac{1}{2\pi}
\int_{-\pi}^{\pi}\varphi(\theta)e^{-in\theta}\,d\theta.
\]
命题左边在取极限前等于
$\sum_{n=-N}^{N}\widehat\varphi(-n)$。
由于 $\varphi$ 光滑，其 Fourier 级数绝对收敛且表示 $\varphi$，
故此和趋于 $\sum_{n\in\mathbb Z}\widehat\varphi(n)=\varphi(0)$。
:::

由于 $dz/(2\pi i z)=d\theta/(2\pi)$，
取 $\varphi(\theta)=p(e^{i\theta})$ 后，上述积分取值公式对应于
\[
\operatorname{Res}_z\left(z^{-1}p(z)\delta(z)\right)=p(1).
\]
因 $z^{-1}\delta(z)=\delta(z)$，
此式也就是 @prop-delta-evaluation-at-one 中的留数取值公式。

对于任何非零复数 $z$，原级数 $\sum_{n\in\mathbb Z}z^n$
至少有一个方向的项不趋于零，因而通常的级数求和无法给出函数值。
在单位圆上加入衰减因子 $r^{|n|}$ 后，则得到一族收敛的级数。
对 $0<r<1$，几何级数公式给出
\[
P_r(\theta):=\sum_{n\in\mathbb Z}r^{|n|}e^{in\theta}
=\frac{1-r^2}{1-2r\cos\theta+r^2}.
\]
这就是单位圆盘的 [[Poisson 核]]。它非负，满足
\[
\frac{1}{2\pi}\int_{-\pi}^{\pi}P_r(\theta)\,d\theta=1,
\]
并且当 $r\uparrow1$ 时，在远离 $0$ 的闭子区间上一致趋于零。
由 $\varphi$ 在 $0$ 处的连续性，将积分分成 $0$ 的小邻域与其补集，
便得
\[
\lim_{r\uparrow1}\frac{1}{2\pi}
\int_{-\pi}^{\pi}P_r(\theta)\varphi(\theta)\,d\theta=\varphi(0).
\]
因此这些函数的质量逐渐集中到 $z=1$，给出圆周上的一维 delta 分布。
形式计算保留了相应的取值与微分规则，并将它们推广到任意系数域。

```terms
'形式 $\delta$ 函数':
  en: formal delta function
```
