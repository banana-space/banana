---
title: 形式分布
categories: [初等代数]
---

**形式分布**是允许正、负两个方向都有无穷多项的[[形式级数]]。
与[[形式 Laurent 级数]]不同，
形式分布不要求非零项的指数有下界。

形式分布只记录各项的系数，不涉及收敛性。
它是[[顶点代数]]中描述场及其运算的基本工具。

## 定义

::: definition [形式分布] {@def-formal-distribution}
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]。
取值于 $V$ 的**形式分布**是形如
\[
a(x)=\sum_{n\in\mathbb Z}a_nx^n
\]
的表达式，其中 $a_n\in V$。
所有这样的表达式构成的空间记为
\[
V[[x,x^{-1}]].
\]
:::

::: remark
严格地说，一个形式分布就是一个系数族 $(a_n)_{n\in\mathbb Z}$；
这里的求和符号用来记录这个系数族，不要求在 $V$ 中进行无穷求和。
:::

::: definition
两个形式分布相等，当且仅当它们的对应系数相等。
:::

对于单变量形式分布 $a(x)=\sum_{n\in\mathbb Z}a_nx^n$，
所谓**下截断**，是指充分小的指数对应的系数为零；
**上截断**则指充分大的指数对应的系数为零。

形式分布可以逐项相加和数乘，
因此 $V[[x,x^{-1}]]$ 是 $k$-向量空间。
其中有自然的子空间
\[
V[[x]]\subseteq V((x))\subseteq V[[x,x^{-1}]].
\]

::: definition [多变量形式分布] {@def-multivariable-formal-distribution}
设 $V$ 是 $k$-[[向量空间]]，
$x_1,\dotsc,x_r$ 是形式变量，其中 $r\geq1$。
取值于 $V$ 的**多变量形式分布**是形如
\[
a(x_1,\dotsc,x_r)
=\sum_{(n_1,\dotsc,n_r)\in\mathbb Z^r}
a_{n_1,\dotsc,n_r}x_1^{n_1}\cdots x_r^{n_r}
\]
的表达式，其中 $a_{n_1,\dotsc,n_r}\in V$。
所有这样的表达式构成的空间记为
\[
V[[x_1,x_1^{-1},\dotsc,x_r,x_r^{-1}]].
\]
两个多变量形式分布相等，
当且仅当它们的对应系数相等。
因此，它同样可以理解为一个以 $\mathbb Z^r$ 为指标集的系数族。
:::

与单变量情形一样，这里不限制各个指数的上下界，
也不要求收敛性。
多变量形式分布可以逐项相加和数乘，从而构成 $k$-向量空间。
为简化记号，也写

```math {@eq-formal-distribution-multi-index}
\underline{x}=(x_1,\dotsc,x_r),
\qquad
\underline{x}^{\alpha}=x_1^{\alpha_1}\cdots x_r^{\alpha_r}
\quad(\alpha\in\mathbb Z^r).
```

于是多变量形式分布可简写为
\[
a(\underline{x})=\sum_{\alpha\in\mathbb Z^r}a_{\alpha}\underline{x}^{\alpha}.
\]

## 例子

::: example [形式 Laurent 级数]
每个形式 Laurent 级数都是形式分布。例如，
\[
x^{-2}+1+x+x^2+\cdots
\]
同时属于 $k((x))$ 和 $k[[x,x^{-1}]]$。
:::

::: example [形式 delta 函数] {@ex-formal-delta}
形式分布
\[
\delta(x):=\sum_{n\in\mathbb Z}x^n
=\cdots+x^{-2}+x^{-1}+1+x+x^2+\cdots
\]
称为 **[[形式 $\delta$ 函数]]**。
:::

::: example [双变量形式分布] {@ex-bivariable-formal-delta}
两变量形式分布
\[
x^{-1}\delta\left(\frac{y}{x}\right)=\sum_{n\in\mathbb Z}x^{-n-1}y^n
\]
的 $x^i y^j$ 项系数为
\[
\begin{cases}
  1,&i+j=-1,\\
  0,&i+j\neq-1.
\end{cases}
\]
这里的记号表示将
$\delta(t)=\sum_{n\in\mathbb Z}t^n$
中的每一项 $t^n$ 替换为 $x^{-n}y^n$，
再乘以 $x^{-1}$。
:::

## 运算

形式分布的无穷求和与乘法需要检查每个系数是否有意义。
下面的定义同时适用于单变量和多变量情形。

### 形式可求和性

形式可求和性保证形式分布的每个系数只需要进行有限次求和。

::: definition [形式可求和性] {@def-formal-summability}
取 @def-multivariable-formal-distribution 中的 $k,V,x_1,\dotsc,x_r$，
使用式 @eq-formal-distribution-multi-index 的多重指标记号，设 $I$ 是集合。
对每个 $i\in I$，给定多变量**形式分布**
\[
a_i(\underline{x})
=\sum_{\alpha\in\mathbb Z^r}a_{i,\alpha}\underline{x}^{\alpha}.
\]
称族 $(a_i(\underline{x}))_{i\in I}$ 是**形式可求和的**，
如果对每个固定的 $\alpha\in\mathbb Z^r$，集合
\[
\{i\in I\mid a_{i,\alpha}\neq0\}
\]
都是有限集。此时定义
\[
\sum_{i\in I}a_i(\underline{x})
:=\sum_{\alpha\in\mathbb Z^r}
\left(\sum_{i\in I}a_{i,\alpha}\right)\underline{x}^{\alpha}.
\]
每个括号内只有有限多个非零项，因而定义了 $V$ 中的元素。
当 $r=1$ 时，就得到单变量形式分布的可求和性。
:::

::: example [逐系数有限的求和]
@ex-formal-delta 中的 $\delta(x)$
与 @ex-bivariable-formal-delta 中的 $x^{-1}\delta\left(\frac{y}{x}\right)$
都是形式可求和的族的和：
在族 $(x^n)_{n\in\mathbb Z}$ 中，
每个固定的单项式恰好出现一次；
在族 $(x^{-n-1}y^n)_{n\in\mathbb Z}$ 中，
每个固定的单项式 $x^p y^q$ 至多出现一次。
:::

::: example [不可形式求和的族]
对每个 $i\geq0$，令 $a_i(x)=1+x+\cdots+x^i$。
每个 $a_i(x)$ 都是多项式，但族 $(a_i(x))_{i\geq0}$
不可形式求和，因为每个 $a_i(x)$ 的常数项都是 $1$。
:::

### 形式乘法

#### 定义与可乘条件

两个**形式分布**的乘法是否有意义，
取决于展开后的各项是否形式可求和。

::: definition [形式分布的乘法] {@def-formal-distribution-product}
设 $k$ 是[[域]]，$A$ 是 $k$ 上的[[结合代数]]，
$x_1,\dotsc,x_r$ 是与系数交换的形式变量，其中 $r\geq1$。
使用式 @eq-formal-distribution-multi-index 的多重指标记号。
给定多变量形式分布
\[
a(\underline{x})=\sum_{\alpha\in\mathbb Z^r}a_{\alpha}\underline{x}^{\alpha},
\qquad
b(\underline{x})=\sum_{\beta\in\mathbb Z^r}b_{\beta}\underline{x}^{\beta}.
\]
如果对每个 $\gamma\in\mathbb Z^r$，
只有有限多个 $\alpha\in\mathbb Z^r$ 满足
\[
a_{\alpha}b_{\gamma-\alpha}\neq0,
\]
则定义它们的**乘积**为
\[
a(\underline{x})b(\underline{x})
:=\sum_{\gamma\in\mathbb Z^r}
\left(\sum_{\alpha\in\mathbb Z^r}
a_{\alpha}b_{\gamma-\alpha}\right)\underline{x}^{\gamma}.
\]
这里每个系数都是有限和。
当 $r=1$ 时，这就是单变量的乘法公式
\[
a(x)b(x)=\sum_{n\in\mathbb Z}
\left(\sum_{i\in\mathbb Z}a_i b_{n-i}\right)x^n.
\]
:::

::: example [与 Laurent 多项式相乘] {@ex-laurent-polynomial-product}
若 $p(\underline{x})$ 是关于 $x_1,\dotsc,x_r$ 的
$A$-值 [[Laurent 多项式]]，
则对任意 $A$-值形式分布 $a(\underline{x})$，
乘积 $p(\underline{x})a(\underline{x})$
与 $a(\underline{x})p(\underline{x})$ 都有意义，
因为 $p(\underline{x})$ 只有有限多个非零项。
:::

::: example [与所有单变量形式分布都可乘]
对标量值形式分布 $f(x)\in k[[x,x^{-1}]]$，
要求它与每一个 $k$-值单变量形式分布都可乘，
等价于要求 $f(x)$ 是 Laurent 多项式。

充分性由 @ex-laurent-polynomial-product 得到。反过来，写
\[
f(x)=\sum_{m\in\mathbb Z}f_mx^m.
\]
仅要求 $f(x)\delta(x)$ 有意义，
就已经要求其常数项的计算
\[
\sum_{m\in\mathbb Z}f_m
\]
只含有限多个非零项。
因而只有有限多个 $f_m$ 非零，即 $f(x)$ 是 Laurent 多项式。

不过，对于给定的一对形式分布，
可乘性并不要求其中任何一个只有有限项。
:::

::: example [同方向截断的级数]
在单变量情形下，若 $a(x),b(x)$ 都下截断，设
\[
a_i=0\quad(i<p),
\qquad
b_j=0\quad(j<q).
\]
对于 $x^n$ 的系数，
只有满足
\[
p\leq i\leq n-q
\]
的指标可能有非零贡献。
因而乘积有意义，且结果仍然下截断。
这就是[[形式 Laurent 级数]]的通常乘法。

同理，两个都上截断的形式分布也可以相乘，
且乘积仍然上截断。
:::

::: example [截断方向相反时]
考虑 $k$-值形式分布
\[
a(x)=\sum_{i\geq0}x^i,
\qquad
b(x)=\sum_{j\geq0}x^{-j}.
\]
前者下截断，后者上截断。
但在它们的乘积中，
每一对 $x^i$ 与 $x^{-i}$ 都对常数项贡献 $1$。
因此乘积不满足 @def-formal-distribution-product 的可求和条件。
:::

#### 双变量乘法与变量代入

不同变量的乘法则没有这一障碍。

::: proposition [不同变量的乘法]
设
\[
a(x)=\sum_{i\in\mathbb Z}a_i x^i,
\qquad
b(y)=\sum_{j\in\mathbb Z}b_j y^j
\]
是取值于 $A$ 的形式分布，其中 $x,y$ 是独立变量。
则乘积
\[
a(x)b(y)
:=\sum_{(i,j)\in\mathbb Z^2}a_i b_j x^i y^j
\]
总有意义，是一个双变量形式分布。
:::

::: proof
对每个固定的单项式 $x^i y^j$，
其系数就是单个乘积 $a_i b_j$，
无需进行无穷求和。
:::

::: example [双变量 delta 分布与任意单变量形式分布相乘]
取 @ex-bivariable-formal-delta 中的
\[
x^{-1}\delta\left(\frac{y}{x}\right)=\sum_{n\in\mathbb Z}x^{-n-1}y^n.
\]
对任意 $k$-值形式分布
\[
f(x)=\sum_{m\in\mathbb Z}f_mx^m,
\]
乘积 $f(x)x^{-1}\delta\left(\frac{y}{x}\right)$ 都有意义。
事实上，展开得到
\[
\sum_{m,n\in\mathbb Z}f_mx^{m-n-1}y^n.
\]
对每个固定的单项式 $x^i y^j$，
只有 $n=j$，$m=i+j+1$ 这一对指标有贡献，
因而其系数为 $f_{i+j+1}$。

类似地，乘积 $f(y)x^{-1}\delta\left(\frac{y}{x}\right)$ 的展开为
\[
\sum_{m,n\in\mathbb Z}f_mx^{-n-1}y^{m+n}.
\]
对 $x^i y^j$，只有 $n=-i-1$，$m=i+j+1$ 有贡献，
因而该乘积同样有意义，且对应系数仍为 $f_{i+j+1}$。
逐系数比较便得到
\[
f(x)x^{-1}\delta\left(\frac{y}{x}\right)=f(y)x^{-1}\delta\left(\frac{y}{x}\right).
\]
这里 $f$ 不需要上截断或下截断。
虽然两个因子含有共同的变量，
它们的乘积仍然可以逐系数计算。
:::

::: remark
不同变量的乘积有意义，
并不保证可以进一步令两个变量相等。

例如，$\delta(x)\delta(y)$ 是有意义的双变量形式分布。
但若令 $y=x$，每个 $x^n$ 的系数
都会收到无穷多个非零贡献。
因此 $\delta(x)^2$ 不满足 @def-formal-distribution-product 的可求和条件。
:::

#### Laurent 多项式环上的模结构

对于 $k$-值 Laurent 多项式与 $V$-值形式分布，
可以定义类似的乘法公式，并将系数乘法理解为 $k$ 对 $V$ 的数乘。
由于 Laurent 多项式只有有限项，这种乘法总有意义。
因此，$V[[x,x^{-1}]]$ 自然是 $k[x,x^{-1}]$ 上的[[模]]；
多变量形式分布空间同样是相应的 Laurent 多项式环上的模。

::: example
对形式 delta 函数，有
\[
x\delta(x)=\sum_{n\in\mathbb Z}x^{n+1}=\delta(x),
\]
所以
\[
(1-x)\delta(x)=0.
\]
这表明虽然 $\delta(x)\neq0$，它仍可被非零多项式 $1-x$ 零化。
:::

#### 结合律与换括号

::: remark [换括号的条件]
系数代数 $A$ 满足结合律，
并不保证形式分布的乘法可以任意换括号。
即使 $(ab)c$ 与 $a(bc)$ 都有定义，两者也可能不同。

一个保证它们相等的充分条件是：
除了计算 $(ab)c$ 与 $a(bc)$ 所需的各步乘法都有定义之外，
完整展开中的族
\[
\left(
  a_{\alpha}b_{\beta}c_{\gamma}
  \underline{x}^{\alpha+\beta+\gamma}
\right)_{(\alpha,\beta,\gamma)\in(\mathbb Z^r)^3}
\]
也形式可求和，其中 $a_{\alpha},b_{\beta},c_{\gamma}$
分别是 $a,b,c$ 的系数。
也就是说，对每个固定的 $\eta\in\mathbb Z^r$，
只有有限多个满足 $\alpha+\beta+\gamma=\eta$ 的三元组
对应于非零乘积 $a_{\alpha}b_{\beta}c_{\gamma}$。
此时，每个输出系数都可以用有限求和来计算，
因而由 $A$ 的结合律得到 $(ab)c=a(bc)$。
:::

::: example [两种括号给出不同结果]
考虑 $k$-值形式分布
\[
f(x)=\sum_{n\geq0}x^n,
\qquad p(x)=1-x,
\qquad d(x)=\delta(x).
\]
逐项计算给出
\[
f(x)p(x)=1,
\qquad p(x)d(x)=0.
\]
因而两种括号下的运算都有定义，但
\[
(fp)d=d\neq0=f(pd).
\]
这里，完整的三重展开并不形式可求和：
对每个 $n\geq0$，项 $x^n\cdot1\cdot x^{-n}$
都对常数项贡献 $1$。
:::

### 二项式展开约定

涉及变量之差的负次幂时，必须指定展开方式。

::: definition [二项式展开约定] {@def-formal-binomial-expansion}
对整数 $n$ 和独立形式变量 $u,v$，记
\[
\iota_{u,v}(u-v)^n
:=\sum_{j\geq0}\binom{n}{j}(-1)^j u^{n-j}v^j.
\]
下标 $u,v$ 表示按第二个变量 $v$ 的非负整数次幂展开，
结果属于 $k((u))[[v]]$。
对 $u+v$ 则使用相同公式将 $v$ 换成 $-v$。

对一般的域 $k$，[[二项式系数]]先取为整数，再经自然映射 $\mathbb Z\to k$ 视为 $k$ 的元素。
:::

::: definition [单变量Laurent多项式的展开] {@def-laurent-polynomial-expansion}
设 $p(t)=\sum_{n\in\mathbb Z}a_nt^n\in k[t,t^{-1}]$，
$u,v$ 是独立形式变量。定义
\[
\iota_{u,v}p(u-v)
:=\sum_{n\in\mathbb Z}a_n\iota_{u,v}(u-v)^n
\in k((u))[[v]],
\]
其中每个二项式按 @def-formal-binomial-expansion 展开。
由于只有有限个 $a_n$ 非零，外层求和是有限和。
对相反的展开次序，定义
\[
\iota_{v,u}p(u-v)
:=\sum_{n\in\mathbb Z}a_n(-1)^n\iota_{v,u}(v-u)^n
\in k((v))[[u]].
\]
也就是说，先将 $(u-v)^n$ 写成 $(-1)^n(v-u)^n$，
再按 $u$ 的非负幂展开。
类似地，令
\[
\iota_{u,v}p(u+v)
:=\sum_{n\in\mathbb Z}a_n\sum_{j\geq0}\binom{n}{j}u^{n-j}v^j.
\]
在这些记号中，$\iota$ 的第二个下标指定按哪个变量的非负幂展开。
:::

## 作为线性泛函的形式分布

给定形式分布 $a(x)\in k[[x,x^{-1}]]$，
可以定义一个作用在 [[Laurent 多项式]]上的[[线性泛函]]
\[
p(x)\longmapsto
\operatorname{Res}_x\bigl(a(x)p(x)\bigr).
\]
这里的形式留数仍指 $x^{-1}$ 项的系数。
由于 $p(x)$ 只有有限项，这个表达式总有意义。

这样，可以将 Laurent 多项式视为 $\mathbb Z$ 上的“紧支撑函数”，
将形式分布视为作用在紧支撑函数上的线性泛函。
这与[[分布]]的观点相似，
但这里不需要拓扑或连续性条件。

::: proposition
上述对应给出向量空间的自然同构
\[
k[[x,x^{-1}]]
\simeq\operatorname{Hom}_k(k[x,x^{-1}],k).
\]
:::

::: proof
若 $a(x)=\sum_{n\in\mathbb Z}a_nx^n$，则
\[
\operatorname{Res}_x\bigl(a(x)x^m\bigr)=a_{-m-1}.
\]
因此，对应的线性泛函确定了 $a(x)$ 的每一个系数。

反过来，给定线性泛函 $\ell$，令
\[
a(x)=\sum_{n\in\mathbb Z}\ell(x^{-n-1})x^n.
\]
便有
\[
\operatorname{Res}_x\bigl(a(x)p(x)\bigr)=\ell(p(x))
\]
对任意 Laurent 多项式 $p(x)$ 成立。
:::

::: example [形式 delta 函数的取值性质]
对于任意 $p(x)\in k[x,x^{-1}]$，有
\[
\operatorname{Res}_x\bigl(\delta(x)p(x)\bigr)=p(1).
\]
事实上，对每个整数 $m$，
$\delta(x)x^m$ 的 $x^{-1}$ 项系数都是 $1$。
再由线性性便得到上述等式。

因此，在这一对应下，
$\delta(x)$ 表示在 $x=1$ 处取值的线性泛函。
:::

## 与其他形式表达式的比较

以下设 $k$ 是[[域]]。单变量情形下，各种表达式的区别如下：

| 对象 | 符号 | 指数限制 | 代数结构 |
| :-: | :-: | :-: | :-: |
| 多项式 | $k[x]$ | 非负指数，且上截断 | 整环 |
| Laurent 多项式 | $k[x,x^{-1}]$ | 上、下都截断 | 整环；$x$ 可逆 |
| 形式幂级数 | $k[[x]]$ | 非负指数，不要求上截断 | 整环；常数项非零者可逆 |
| 形式 Laurent 级数 | $k((x))$ | 下截断，不要求上截断 | 域 |
| 有理函数 | $k(x)$ | 在 $x=0$ 处展开后下截断 | 域 |
| 形式分布 | $k[[x,x^{-1}]]$ | 不要求上截断或下截断 | 向量空间；一般不能相乘 |

这里的截断条件均针对每一个表达式而言，
并不要求整个空间中的所有元素具有共同的指数界。

### 包含关系

将有理函数视为其在 $x=0$ 处的形式展开后，有
\[
k[x]\subseteq k[x,x^{-1}]\subseteq k(x)
\subseteq k((x))\subseteq k[[x,x^{-1}]],
\]
以及
\[
k[x]\subseteq k[[x]]\subseteq k((x)).
\]

其中，形式分布空间的最后一个包含关系
是向量空间的包含，不是环的包含。

```terms
形式分布:
  en: formal distribution
```
