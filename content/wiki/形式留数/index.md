---
title: 形式留数
categories: [初等代数]
---

**形式留数**是[[复分析]]中[[留数]]的代数推广。

## 从留数到形式留数

先回忆复分析中的留数。
设复函数 $f$ 在去心圆盘 $0<|x|<R$ 上[[全纯]]，
取 $0<\rho<R$，则 $f$ 在 $0$ 处的留数可以定义为
\[
\operatorname{Res}_{x=0}f(x)
:=\frac{1}{2\pi\mathrm i}\oint_{|x|=\rho}f(x)\,dx,
\]
其中圆周取逆时针方向。
由 [[Cauchy 积分定理]]，这个值不依赖于 $\rho$ 的选择。

将 $f$ 在去心圆盘上展开为收敛的 [[Laurent 级数]]
\[
f(x)=\sum_{n\in\mathbb Z}a_nx^n.
\]
由于这个展开在圆周 $|x|=\rho$ 上[[一致收敛]]，可以[[逐项积分]]。
而
\[
\frac{1}{2\pi\mathrm i}\oint_{|x|=\rho}x^n\,dx
=\begin{cases}
  1,&n=-1,\\
  0,&n\neq-1,
\end{cases}
\]
所以
\[
\operatorname{Res}_{x=0}f(x)=a_{-1}.
\]
也就是说，求留数就是提取 Laurent 展开中 $x^{-1}$ 项的系数。

提取一个系数本身是纯代数的运算：
即使级数不收敛，或者系数取自一般[[域]]上的[[向量空间]]，仍然可以这样做。
这就引出了**形式留数**的定义。

## 定义

::: definition [形式留数] {@def-formal-residue}
设 $k$ 是域，$V$ 是 $k$-向量空间。
对[[形式分布]]
\[
a(x)=\sum_{n\in\mathbb Z}a_nx^n\in V[[x,x^{-1}]],
\]
定义其关于 $x$ 的**形式留数**为
\[
\operatorname{Res}_x a(x):=a_{-1}.
\]
这一运算是从 $V[[x,x^{-1}]]$ 到 $V$ 的[[线性映射]]。
:::

::: definition [多变量形式分布的留数] {@def-multivariable-formal-residue}
对两变量形式分布
\[
a(x,y)=\sum_{m,n\in\mathbb Z}a_{m,n}x^my^n,
\]
定义
\[
\operatorname{Res}_x a(x,y)
:=\sum_{n\in\mathbb Z}a_{-1,n}y^n.
\]
即提取 $x^{-1}$ 的系数，保留变量 $y$。
对更多变量，同样只提取指定变量的 $-1$ 次幂的系数，保留其余变量。
:::

例如，对 @def-multivariable-formal-residue 中的 $a(x,y)$，有
\[
\operatorname{Res}_y\operatorname{Res}_x a(x,y)
=a_{-1,-1}
=\operatorname{Res}_x\operatorname{Res}_y a(x,y).
\]
这里只是在选取系数，不涉及交换无穷求和的次序。

将形式留数用于有理函数在不同点的展开，就得到各点的留数。

::: definition [有理函数在有限点与无穷远点的留数] {@def-rational-residue}
设 $k$ 是域，$f(x)\in k(x)$。
对 $a\in k$，将 $f(a+t)$ 在 $t=0$ 处展开为形式 Laurent 级数，
定义 $f$ 在 $a$ 处的**留数**为
\[
\operatorname{Res}_{x=a}f(x)
:=\operatorname{Res}_t f(a+t).
\]
即提取 $f$ 在 $a$ 处展开的 $(x-a)^{-1}$ 项系数。

$f$ 在[[无穷远点]]的**留数**定义为
\[
\operatorname{Res}_{x=\infty}f(x)
:=-\operatorname{Res}_t\bigl(t^{-2}f(t^{-1})\bigr),
\]
其中右边也在 $t=0$ 处展开。
等价地，将 $f(x)$ 按 $x^{-1}$ 展开后，
无穷远点的留数是 $x^{-1}$ 项系数的负值。
:::

有限点的定义使用坐标 $t=x-a$；
无穷远点使用坐标 $t=1/x$，因而出现换元因子 $-t^{-2}$。
这些定义只使用有理函数的形式展开，不要求 $k=\mathbb C$。

::: remark [带参数的留数] {@rem-parameter-residue}
若有理函数还含有独立形式变量 $y$，可以将 $y$ 留作参数，
把系数域由 $k$ 换成 $k(y)$。
具体地，将 $f(x,y)\in k(x,y)$ 视为 $k(y)$ 上关于 $x$ 的有理函数。
因为 $y\in k(y)$，@def-rational-residue 也适用于点 $x=y$：
\[
\operatorname{Res}_{x=y}f(x,y)
:=\operatorname{Res}_t f(y+t,y).
\]
右边先按 $t$ 在 $0$ 处展开，再提取 $t^{-1}$ 项的系数，
结果属于 $k(y)$，仍可以依赖于 $y$。
这里的 $x=y$ 指定展开点，并不是直接将 $x$ 替换为 $y$。
:::

## 例子

::: example [提取任意一项的系数]
设 $a(x)=\sum_{n\in\mathbb Z}a_nx^n$ 是形式分布。
对任意整数 $m$，有
\[
\operatorname{Res}_x\bigl(x^{-m-1}a(x)\bigr)=a_m.
\]
因为乘以 $x^{-m-1}$ 后，原来的 $x^m$ 项恰好变成 $x^{-1}$ 项。
因而形式留数也可以用来提取常数项、正幂项或负幂项的系数。
:::

::: example [[[二项式系数]]]
设 $m\geq0$，$r\geq1$ 是整数。
将 $(1-x)^{-r}$ 在 $x=0$ 处展开，有
\[
(1-x)^{-r}=\sum_{n\geq0}\binom{n+r-1}{r-1}x^n.
\]
因此
\[
\operatorname{Res}_x\frac{1}{x^{m+1}(1-x)^r}
=\binom{m+r-1}{r-1}.
\]
左边指这个[[有理函数]]在 $x=0$ 处的[[形式 Laurent 级数|形式 Laurent 展开]]的留数。
二项式系数先取为整数，再视为 $k$ 的元素。
:::

::: example [Cauchy 积分公式的形式版本] {@ex-formal-cauchy-formula}
[[Cauchy 积分公式]]用核 $1/(x-y)$ 从函数恢复其在 $y$ 处的值。
在形式计算中，取 $p\in k[x,x^{-1}]$，$y$ 为独立形式变量，则
\[
\operatorname{Res}_{x=y}\frac{p(x)}{x-y}=p(y).
\]
按 @rem-parameter-residue，将 $y$ 留作参数，
在系数域 $k(y)$ 上计算关于 $x$ 的留数。
具体地，令 $x=y+t$，有
\[
\operatorname{Res}_{x=y}\frac{p(x)}{x-y}
=\operatorname{Res}_t\frac{p(y+t)}{t}.
\]
由于对任意整数 $m$，$(y+t)^m$ 的展开都只含 $t$ 的非负幂，
Laurent 多项式 $p$ 是这些单项式的有限线性组合，
所以 $p(y+t)$ 的展开也只含 $t$ 的非负幂，常数项为 $p(y)$。
除以 $t$ 后，$t^{-1}$ 项的系数就是这个常数项，所以留数为 $p(y)$。
:::

## 性质

### 有理函数的留数

@def-rational-residue 给出了有理函数在有限点和无穷远点的留数。
这些留数之间的关系可以用纯代数的方法证明。

::: example
对 $a\in k$，有
\[
\operatorname{Res}_{x=a}\frac1{x-a}=1,
\qquad
\operatorname{Res}_{x=\infty}\frac1{x-a}=-1.
\]
第二式可由无穷远处的展开直接看出：
\[
\frac1{x-a}=x^{-1}+a x^{-2}+a^2x^{-3}+\cdots.
\]
:::

::: proposition [有理函数的留数关系] {@prop-rational-residue-sum}
设 $f(x)\in k(x)$，且约分后的分母在 $k$ 上分解为一次因子的乘积。
记其互不相同的有限[[极点]]为 $a_1,\dotsc,a_r\in k$。
则
\[
\sum_{i=1}^r\operatorname{Res}_{x=a_i}f(x)
+\operatorname{Res}_{x=\infty}f(x)=0.
\]
如果 $f$ 是多项式，则取 $r=0$，上式中的和为空和。
:::

::: proof
由[[部分分式分解]]，可以写成
\[
f(x)=q(x)+\sum_{i=1}^r\sum_{j=1}^{N_i}
  \frac{c_{i,j}}{(x-a_i)^j},
\qquad q(x)\in k[x].
\]
在 $a_i$ 处，只有 $c_{i,1}/(x-a_i)$ 对留数有贡献，
因而 $\operatorname{Res}_{x=a_i}f(x)=c_{i,1}$。

在无穷远处，$q(x)$ 没有 $x^{-1}$ 项；
$(x-a_i)^{-j}$ 的展开从 $x^{-j}$ 开始，
因此也只有 $j=1$ 时对 $x^{-1}$ 项有贡献，其系数为 $1$。
由 @def-rational-residue，得到
\[
\operatorname{Res}_{x=\infty}f(x)=-\sum_{i=1}^r c_{i,1}.
\]
所以全部留数之和为零。
:::

### 带参数的留数关系

对两变量有理函数，可以只对 $x$ 取留数，将 $y$ 保留为参数。
此时展开点也可以依赖于 $y$，留数的结果是关于 $y$ 的有理函数。

::: proposition [两变量有理函数的留数关系] {@prop-parameter-rational-residue-sum}
设 $f(x,y)\in k(x,y)$。
将它视为 $k(y)$ 上关于 $x$ 的有理函数，
假设约分后的分母在 $k(y)$ 上分解为关于 $x$ 的一次因子的乘积。
记其互不相同的有限极点为 $a_1(y),\dotsc,a_r(y)\in k(y)$。
则在 $k(y)$ 中有
\[
\sum_{i=1}^r\operatorname{Res}_{x=a_i(y)}f(x,y)
+\operatorname{Res}_{x=\infty}f(x,y)=0.
\]
其中各处的留数分别按下式计算：
\[
\operatorname{Res}_{x=a_i(y)}f(x,y)
=\operatorname{Res}_t f(a_i(y)+t,y),
\]
\[
\operatorname{Res}_{x=\infty}f(x,y)
=-\operatorname{Res}_t\bigl(t^{-2}f(t^{-1},y)\bigr).
\]
右边均按 $t$ 在 $0$ 处展开，并将 $y$ 保留在系数中。
:::

::: proof
$k(y)$ 本身是域，且 $k(x,y)=k(y)(x)$。
因而可以在 @prop-rational-residue-sum 中
将系数域 $k$ 换成 $k(y)$，将展开点 $a_i$ 换成 $a_i(y)$。
按 @def-rational-residue 计算各处的留数，就得到上述等式。
:::

::: example [有限极点只能是 $0$ 和 $y$ 的情形]
若
\[
f(x,y)\in k[x,x^{-1},y,y^{-1},(x-y)^{-1}],
\]
即 $f$ 可以写成分母为 $x^m y^n(x-y)^r$ 的分式，
其中 $m,n,r$ 为非负整数，分子为多项式，
则它关于 $x$ 的有限极点只能是 $0$ 和 $y$。
由 @prop-parameter-rational-residue-sum，有
\[
\operatorname{Res}_{x=0}f(x,y)
+\operatorname{Res}_{x=y}f(x,y)
+\operatorname{Res}_{x=\infty}f(x,y)=0.
\]
如果 $0$ 或 $y$ 不是极点，相应的留数就是零。

例如 $p(x)/(x-y)$，其中 $p$ 是 Laurent 多项式，就满足这个条件。
更一般地，对任意两变量 Laurent 多项式
$p(u,v)\in k[u^{\pm1},v^{\pm1}]$，
有理函数 $p(x-y,x)$ 也满足这个条件。
:::

### 与形式求和相容

::: proposition {@prop-residue-summable}
设 $(a_i(x,y))_{i\in I}$ 是取值于 $V$ 的[[形式可求和性|形式可求和]]的
两变量形式分布族。则 $(\operatorname{Res}_x a_i(x,y))_{i\in I}$
也是形式可求和的，并且
\[
\operatorname{Res}_x\left(\sum_{i\in I}a_i(x,y)\right)
=\sum_{i\in I}\operatorname{Res}_x a_i(x,y).
\]
对任意有限个变量，同样的结论成立。
在单变量情形，右边只有有限多个非零项。
:::

### 导数与原函数

::: proposition {@prop-residue-derivative}
对任意取值于 $V$ 的形式分布 $a(x)$，有
\[
\operatorname{Res}_x\frac{d}{dx}a(x)=0.
\]
若 $k$ 的[[特征]]为 $0$，则反过来，
$\operatorname{Res}_x a(x)=0$ 当且仅当存在形式分布 $b(x)$，使得 $b'(x)=a(x)$。
:::

::: proof
写 $a(x)=\sum_{n\in\mathbb Z}a_nx^n$。
在逐项[[形式分布|形式导数]] $\sum_n n a_nx^{n-1}$ 中，
唯一可能产生 $x^{-1}$ 项的指标是 $n=0$，但它的系数为零。
因而导数的留数为零。

若 $k$ 的特征为 $0$ 且 $a_{-1}=0$，定义
\[
b(x)=\sum_{n\neq-1}\frac{a_n}{n+1}x^{n+1}.
\]
每个非零整数 $n+1$ 在 $k$ 中可逆，且不同的 $n$ 给出不同次幂，
因此 $b(x)$ 是有意义的形式分布，并满足 $b'(x)=a(x)$。
:::

因此，在特征为 $0$ 时，留数是形式分布具有形式[[原函数]]的唯一障碍。

::: example [留数与形式原函数]
在 $\mathbb C((x))$ 中，
\[
x^{-2}+1+x
=\frac{d}{dx}\left(-x^{-1}+x+\frac{x^2}{2}\right).
\]
但 $x^{-1}$ 不是任何形式 Laurent 级数的形式导数，
因为它的形式留数为 $1$。
解析中的原函数 $\log x$ 不属于 $\mathbb C((x))$。
:::

### 分部积分

::: proposition [形式[[分部积分]]] {@prop-residue-integration-by-parts}
设 $a(x),b(x)\in k[[x,x^{-1}]]$，
且定义乘积 $a(x)b(x)$ 的各项族形式可求和。
则乘积 $a'(x)b(x)$ 与 $a(x)b'(x)$ 也形式可求和，并且
\[
\operatorname{Res}_x\bigl(a'(x)b(x)\bigr)
=-\operatorname{Res}_x\bigl(a(x)b'(x)\bigr).
\]
特别地，这适用于两个形式 Laurent 级数，
也适用于一个 [[Laurent 多项式]]与任意形式分布。
:::

::: proof
写 $a(x)=\sum_i a_ix^i$，$b(x)=\sum_j b_jx^j$。
在两个导数乘积中，$x^n$ 项都只涉及满足 $i+j=n+1$ 的指标。
由乘积 $ab$ 的形式可求和性，其中 $a_i b_j\neq0$ 的指标对只有有限个。
因而两个乘积都有意义，可以逐系数使用 [[Leibniz 法则]]：
\[
(ab)'=a'b+ab'.
\]
对等式取留数，由 @prop-residue-derivative 即得结论。
:::

### 换元公式

::: proposition [形式留数的换元公式] {@prop-residue-change-of-variable}
设 $k$ 的特征为 $0$，$f(x)\in k((x))$，
且
\[
\phi(t)=c_1t+c_2t^2+\cdots\in tk[[t]],
\qquad c_1\neq0.
\]
则 $f(\phi(t))$ 是有意义的形式 Laurent 级数，并且
\[
\operatorname{Res}_t\bigl(f(\phi(t))\phi'(t)\bigr)
=\operatorname{Res}_x f(x).
\]
:::

::: proof
写 $f(x)=\sum_{n\geq N}a_nx^n$。
因为 $\phi(t)$ 的最低次幂是 $t$，$\phi(t)^n$ 的最低次幂为 $t^n$。
对每个固定的 $t$ 次幂，只有有限个 $n\geq N$ 可能贡献非零系数。
因此代入以及随后乘以 $\phi'(t)$ 都形式可求和，
可以按 @prop-residue-summable 逐项取留数。

当 $n\neq-1$ 时，
\[
\phi(t)^n\phi'(t)
=\frac{1}{n+1}\frac{d}{dt}\phi(t)^{n+1},
\]
由 @prop-residue-derivative，其留数为零。
当 $n=-1$ 时，写 $\phi(t)=t u(t)$，其中 $u(0)=c_1\neq0$。
则
\[
\frac{\phi'(t)}{\phi(t)}
=\frac1t+\frac{u'(t)}{u(t)}.
\]
因为 $u'/u\in k[[t]]$，这一式的留数为 $1$。
所以换元后只有 $a_{-1}$ 对留数有贡献，结果仍为 $a_{-1}$。
:::

因子 $\phi'(t)$ 对应于通常[[换元积分法|换元公式]]中的 $dx=\phi'(t)\,dt$。
这里要求 $f$ 是形式 Laurent 级数；对任意形式分布，
这样的代入不一定有意义。

## 线性算子的核

在分析中，一个[[线性算子]]可以通过对输入函数积分来给出。
例如，设 $K(x,y)$ 是 $[0,1]^2$ 上的[[连续函数]]，则
\[
f(x)\longmapsto\int_0^1 K(x,y)f(x)\,dx
\]
给出从 $C([0,1])$ 到自身的线性映射。
这里对输入变量 $x$ 积分，保留输出变量 $y$；
函数 $K(x,y)$ 称为这个算子的[[积分核]]。
这里的“核”指表示算子的核，而非线性映射的[[核 (代数)|零空间]]。

在复分析中，也可以沿[[围道积分]]来表示算子。
例如，设 $\gamma$ 是以 $0$ 为圆心、逆时针方向的圆周，
当 $f(x)$ 及每个固定 $y$ 对应的 $K(x,y)$ 在 $\gamma$ 上连续时，
可以考虑
\[
f(x)\longmapsto\frac{1}{2\pi\mathrm i}
\oint_\gamma K(x,y)f(x)\,dx.
\]
当被积函数在包含 $\gamma$ 的圆环上具有收敛的 Laurent 展开时，
这个积分就是提取 $x^{-1}$ 项的系数。
因此，用形式留数代替归一化的围道积分，就得到形式计算中的核。

::: definition [形式核] {@def-formal-kernel}
设 $k$ 是域，$K(x,y)\in k[[x,x^{-1},y,y^{-1}]]$。
称 $K(x,y)$ 为线性映射
\[
\begin{aligned}
  k[x,x^{-1}]&\longrightarrow k[[y,y^{-1}]],\\
  p(x)&\longmapsto\operatorname{Res}_x\bigl(K(x,y)p(x)\bigr)
\end{aligned}
\]
的**形式核**。
因为 $p$ 只有有限项，乘积与留数都有意义。
:::

这与积分核的用法相同：消去输入变量 $x$，得到关于输出变量 $y$ 的表达式。

::: example [[[Euler 算子]]的核]
取
\[
K(x,y)=\sum_{n\in\mathbb Z}n x^{-n-1}y^n.
\]
对 Laurent 多项式 $p(x)=\sum_m a_mx^m$，有
\[
\operatorname{Res}_x\bigl(K(x,y)p(x)\bigr)
=\sum_m m a_my^m
=y\frac{d}{dy}p(y).
\]
因此，在 @def-formal-kernel 的意义下，
$K$ 表示按次数作用的 Euler 算子 $x\,d/dx$。
:::

[[恒等映射|恒等算子]]的核以及它与 [[Cauchy 积分公式]]的联系，见[[形式 $\delta$ 函数]]。

```terms
形式留数:
  en: formal residue
```
