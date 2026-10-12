---
title: 形式 Laurent 级数
categories: [初等代数]
navboxes: [交换代数, 域论]
---

**形式 Laurent 级数**是[[形式幂级数]]的推广，
允许出现有限多个负次幂项。
例如，
\[
x^{-2}+3x^{-1}+1+x+x^2+\cdots
\]
是形式 Laurent 级数。

与形式幂级数一样，这里不要求级数收敛，
而是将它视为记录各次幂系数的代数表达式。

## 定义

::: definition [形式 Laurent 级数] {@def-formal-laurent-series}
设 $A$ 是[[交换环]]。
$A$ 上关于形式变量 $x$ 的**形式 Laurent 级数**
是形如
\[
f(x)=\sum_{n\geq N}a_nx^n
\]
的表达式，其中 $a_n\in A$，$N\in\mathbb Z$。
所有这样的级数构成的集合记为 $A((x))$。
:::

这里的下界 $N$ 可以随级数改变。
也就是说，形式 Laurent 级数是[[形式分布|下截断]]的形式分布：
每个级数的非零项次数都有一个整数下界。

::: definition [向量空间值的形式 Laurent 级数] {@def-vector-valued-laurent-series}
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]。
取值于 $V$ 的形式 Laurent 级数是形如
\[
\sum_{n\geq N}v_nx^n,\qquad v_n\in V,\quad N\in\mathbb Z
\]
的表达式。
它们构成[[形式分布]]空间 $V[[x,x^{-1}]]$ 中下截断的子空间，
记为 $V((x))$。
:::

::: example
[[形式 $\delta$ 函数]]
\[
\delta(x)=\sum_{n\in\mathbb Z}x^n
=\cdots+x^{-2}+x^{-1}+1+x+x^2+\cdots
\]
的非零项次数没有下界，
所以它属于 $k[[x,x^{-1}]]$，但不属于 $k((x))$。
:::

## 运算

形式 Laurent 级数的加法和乘法是[[形式分布|形式分布的运算]]
在下截断情形的特例。

::: definition [加法与乘法] {@def-laurent-series-operations}
设
\[
f(x)=\sum_{n\geq N}a_nx^n,
\qquad
g(x)=\sum_{n\geq M}b_nx^n
\]
是 $A((x))$ 中的形式 Laurent 级数。
将未出现的系数视为零，定义加法
\[
f(x)+g(x)
=\sum_{n\geq\min(N,M)}(a_n+b_n)x^n,
\]
以及乘法
\[
f(x)g(x)
=\sum_{n\geq N+M}
  \left(\sum_{j=N}^{n-M}a_jb_{n-j}\right)x^n.
\]
:::

在 @def-laurent-series-operations 的乘法公式中，
固定次数 $n$ 后，可能贡献到 $x^n$ 的项必须满足
\[
j\geq N,\qquad n-j\geq M.
\]
因此只有有限多个 $j$ 需要考虑，乘积的各项族[[形式可求和性|形式可求和]]。
乘积的次数下界为 $N+M$，所以结果仍是形式 Laurent 级数。

::: proposition {@prop-laurent-series-localization}
@def-laurent-series-operations 的运算使 $A((x))$ 成为交换环，
称为**形式 Laurent 级数环**。
它包含形式幂级数环 $A[[x]]$，
且其中的元素 $x$ 可逆，逆元为 $x^{-1}$。
更准确地说，
\[
A((x))=A[[x]][x^{-1}]
\]
是将 $A[[x]]$ 中的 $x$ 变为可逆元素得到的[[局部化]]。
:::

## 性质

### 域结构

::: proposition {@prop-laurent-series-field}
设 $k$ 是域。则形式 Laurent 级数环 $k((x))$ 也是域。
:::

::: proof
设 $f(x)\in k((x))$ 非零，最低非零项的次数为 $m$。
则可以写成
\[
f(x)=x^m u(x),
\qquad u(x)\in k[[x]],\quad u(0)\neq0.
\]
由[[形式幂级数|形式幂级数的可逆性判据]]，
$u(x)$ 在 $k[[x]]$ 中可逆，因而
\[
f(x)^{-1}=x^{-m}u(x)^{-1}\in k((x)).
\]
所以每个非零元素都有逆元。
:::

::: example
形式 Laurent 级数 $x^2(1-x)$ 的逆元为
\[
\frac{1}{x^2(1-x)}
=x^{-2}\sum_{n\geq0}x^n
=x^{-2}+x^{-1}+1+x+x^2+\cdots.
\]
这里的等式是形式级数的代数恒等式，不需要假设 $|x|<1$。
:::

::: proposition [只需逆转一个元素] {@prop-laurent-series-fraction-field}
设 $k$ 是域。则
\[
\operatorname{Frac}(k[[x]])
=k[[x]][x^{-1}]
=k((x)).
\]
换言之，将形式幂级数环中的 $x$ 变为可逆元素，
就得到了整个[[分式域]]。
:::

::: proof
任意非零形式幂级数 $g(x)$ 都可以唯一写成
\[
g(x)=x^m u(x),
\]
其中 $m\geq0$，$u(0)\neq0$。
由[[形式幂级数|形式幂级数的可逆性判据]]，
$u(x)$ 在 $k[[x]]$ 中可逆。
于是，对 $f(x)\in k[[x]]$，有
\[
\frac{f(x)}{g(x)}=x^{-m}f(x)u(x)^{-1}\in k[[x]][x^{-1}].
\]
反过来，该局部化中的每个元素都是形如 $f(x)/x^r$ 的分式，
其中 $f(x)\in k[[x]]$，$r\geq0$，因而属于分式域。
:::

### 有理函数的展开

::: proposition {@prop-rational-laurent-expansion}
设 $k$ 是域。多项式环的包含映射
\[
k[x]\hookrightarrow k((x))
\]
唯一延拓为域的嵌入
\[
k(x)\hookrightarrow k((x)).
\]
因此，每个[[分式|有理函数]]都具有唯一的在 $x=0$ 处的形式 Laurent 展开。
:::

::: proof
由 @prop-laurent-series-field，每个非零多项式在 $k((x))$ 中都可逆。
因此，可以将有理函数 $P(x)/Q(x)$ 映到
\[
P(x)\,Q(x)^{-1}\in k((x)).
\]
这个定义与分式的表示无关，并给出所需的域嵌入。
任何延拓都必须将 $Q(x)^{-1}$ 映到 $Q(x)$ 的逆元，因而延拓唯一。
:::

::: example [在零点附近展开]
在 $k((x))$ 中，有
\[
\frac{1}{1-x}=\sum_{n\geq0}x^n.
\]
这个等式表示右边与 $1-x$ 的乘积为 $1$，
不涉及解析意义上的收敛。
类似地，
\[
\frac{1}{x(1-x)}=x^{-1}+1+x+x^2+\cdots.
\]
:::

同一个有理函数也可以改用 $x^{-1}$ 作为形式变量，
得到在无穷远处的展开。
相应的级数属于 $k((x^{-1}))$，
其中非零项的 $x$ 次数有上界，但可以没有下界。

::: example [不同方向的展开]
在 $k((x^{-1}))$ 中，
\[
\frac{1}{1-x}
=-\frac{x^{-1}}{1-x^{-1}}
=-\sum_{n\geq1}x^{-n}.
\]
因此，同一个有理函数 $1/(1-x)$ 在两个方向上分别展开为
\[
1+x+x^2+\cdots
\qquad\text{和}\qquad
-x^{-1}-x^{-2}-x^{-3}-\cdots.
\]
它们对应同一个有理函数，但并不是逐项相等的形式级数。
:::

因此，将有理函数写成形式级数时，
必须明确采用哪个变量以及哪个展开方向。

## 多变量情形

### 迭代形式 Laurent 级数

设 $k$ 是域。由 @prop-laurent-series-field，$k((x))$ 也是域，
可以继续以它为系数域，构造关于另一个变量 $y$ 的形式 Laurent 级数域
\[
k((x))((y)).
\]

::: definition [迭代形式 Laurent 级数] {@def-iterated-laurent-series}
$k((x))((y))$ 中的元素是形如
\[
f(x,y)=\sum_{n\geq N}f_n(x)y^n
\]
的表达式，其中 $N\in\mathbb Z$，且每个 $f_n(x)\in k((x))$。
这样的表达式称为**迭代形式 Laurent 级数**。
:::

这里，$y$ 的指数有统一的下界 $N$。
每个系数 $f_n(x)$ 中的 $x$ 指数也有下界，
但这个下界可以随 $n$ 改变。

### 同时展开与迭代展开

::: definition [各变量的指数都有统一下界的级数] {@def-simultaneous-laurent-series}
设 $k$ 是域。记
\[
k((x,y)):=k[[x,y]][x^{-1},y^{-1}].
\]
其中的元素是形如
\[
\sum_{\substack{i\geq M\\j\geq N}}a_{ij}x^iy^j
\]
的形式级数，其中 $M,N\in\mathbb Z$，$a_{ij}\in k$。
也就是说，两个变量的指数分别具有统一的下界。
:::

@def-simultaneous-laurent-series 明确约定了 $k((x,y))$ 的含义，
不同文献的记号可能不同。
这样的级数可以按 $y$ 的次数整理，也可以按 $x$ 的次数整理，
因而有自然的包含映射
\[
k((x,y))\hookrightarrow k((x))((y)),
\qquad
k((x,y))\hookrightarrow k((y))((x)).
\]

与 @prop-rational-laurent-expansion 的单变量情形一样，
有理函数域 $k(x,y)$ 分别嵌入 $k((x))((y))$ 和 $k((y))((x))$。
不过，同一个有理函数在这两个域中的展开可以不同。

::: example [展开次序与指数下界] {@ex-laurent-expansion-order}
用[[形式分布|二项式展开约定]]中的记号，有
\[
\iota_{x,y}\frac{1}{x-y}
=\sum_{n\geq0}x^{-n-1}y^n
=x^{-1}+x^{-2}y+x^{-3}y^2+\cdots.
\]
这是关于 $y$ 的形式幂级数，每个系数 $x^{-n-1}$ 都属于 $k((x))$，
因而它属于 $k((x))((y))$。
但它不属于 $k((y))((x))$，也不属于 $k((x,y))$，
因为它的 $x$ 指数没有统一的下界。

改为按 $x$ 的非负幂展开，则有
\[
\iota_{y,x}\frac{1}{x-y}
=-\sum_{n\geq0}y^{-n-1}x^n
\in k((y))((x)).
\]
这两个级数分别在各自的域中与 $x-y$ 相乘得到 $1$，
但它们的系数并不相同。
:::

因此，多变量有理函数的形式展开需要指定展开次序。
这也是[[顶点代数]]中处理 $1/(x-y)$ 等表达式时，
必须区分不同形式展开的原因。

单变量的 $k((x))$ 是域，但 $k((x,y))$ 不是域。

::: proposition {@prop-simultaneous-laurent-not-field}
$x-y$ 在 $k((x,y))$ 中不可逆。
特别地，$k((x,y))$ 不是域。
:::

::: proof
将 $x,y$ 都代入同一个形式变量 $t$，得到环同态
\[
\varphi\colon k((x,y))\longrightarrow k((t)),
\qquad f(x,y)\longmapsto f(t,t).
\]
这个代入是良定义的：
若 $i\geq M$，$j\geq N$，则对于每个固定的整数 $r$，
满足 $i+j=r$ 的指标 $(i,j)$ 只有有限多个，
所以 $t^r$ 的系数是有限和。
代入后指数仍有下界 $M+N$，并且代入保持加法与乘法。

由于 $\varphi(x-y)=0$，而环同态将可逆元映到可逆元，
$x-y$ 不可能可逆。
:::

相比之下，$x-y$ 在两个迭代形式 Laurent 级数域中都可逆，
其逆元正是 @ex-laurent-expansion-order 中的两种展开。

### 向量值形式分式的展开

上述两种展开也适用于向量值的分子。
设 $k$ 是域，$V$ 是 $k$-向量空间，$x,y$ 是独立形式变量。
记 $V((x))$ 为指数有下界的 $V$-值形式 Laurent 级数空间，
$V((x))((y))$ 则是关于 $y$ 指数有下界、
每个系数属于 $V((x))$ 的级数空间。
标量域 $k((x))((y))$ 通过形式乘法作用于这个空间。

::: definition [形式分式与展开映射] {@def-laurent-fraction-expansion}
记
\[
V[[x,y]][x^{-1},y^{-1},(x-y)^{-1}]
\]
为由下列形式分式构成的向量空间：
\[
F = \frac{P}{d},
\qquad P \in V[[x,y]],
\qquad d = x^r y^s(x-y)^N,\quad r,s,N \geq 0.
\]
其中 $P/d$ 与 $Q/e$ 表示同一个元素，当且仅当 $eP=dQ$；
加法通过通分定义，数乘作用于分子。

按[[形式分布|二项式展开约定]]，定义
\[
\iota_{x,y}F
:= x^{-r}y^{-s}P
\sum_{j\geq0}\binom{-N}{j}(-1)^j x^{-N-j}y^j
\in V((x))((y)).
\]
这里分子的非负幂级数保持不变，只展开分母的逆。
反向展开 $\iota_{y,x}F$ 同理定义，但将分母中的因子写成
\[
(x-y)^{-N} = (-1)^N(y-x)^{-N},
\]
再按 $x$ 的非负幂展开，结果属于 $V((y))((x))$。
:::

::: lemma [展开映射的单射性] {@lem-laurent-expansion-injective}
@def-laurent-fraction-expansion 中的两个展开映射
都是良定义的线性单射。
:::

::: proof
先考虑 $\iota_{x,y}$。
分子 $P$ 自然嵌入 $V((x))((y))$。
上述二项式级数是标量域 $k((x))((y))$ 中
$(x-y)^N$ 的逆，因而定义中的乘积有意义。
具体地，固定 $y$ 的次数后，求和指标 $j$ 只有有限种可能；
再固定 $x$ 的次数，每项也只涉及有限个分子系数。

在这个迭代级数空间中，每个允许的标量分母 $d$ 的作用都可逆。
若 $P/d=Q/e$，则 $eP=dQ$；
将此等式嵌入该空间并乘以 $d^{-1}e^{-1}$，
得到 $d^{-1}P=e^{-1}Q$。
所以展开不依赖分式的表示，并且与通分加法及数乘相容。

若 $\iota_{x,y}(P/d)=0$，在同一空间中乘以 $d$ 得到 $P=0$，
故原分式为零。这就证明了单射性。
对另一个展开次序，证明相同。
:::

```terms
形式 Laurent 级数:
  en: formal Laurent series
  de: formale Laurentreihe
  fr: série de Laurent formelle
```
