---
title: 顶点代数
categories: [共形场论]
navboxes: [共形场论]
---

**顶点代数**
是一种[[代数结构]]。
这种结构来自于[[物理学]]中的二维[[共形场论]]，
但在一些数学领域，
包括[[月光理论]]与[[几何 Langlands 纲领]]中，
也具有重要的应用。

大致来说，顶点代数是[[向量空间]] $V$，
并且对元素 $a_1, \dotsc, a_n \in V$，可以做乘法
\[
a_1 (z_1) \cdots a_n (z_n),
\]
这可以视为 $V$ 上的一族乘法运算，
这族运算[[亚纯函数|亚纯]]地依赖于[[变量]] $z_1, \dotsc, z_n \in \mathbb{C}$，
并且在 $z_i = z_j$（$i \neq j$）时可能出现[[奇性]]，
也就是乘法的结果可能趋于无穷。
并且，这族运算满足[[单位律]]、[[结合律]]、[[交换律]]，
其单位元常常按照物理学的术语而称为[[真空态]]。
另外，这族乘法与[[平移]]相容，也就是若将每个 $z_i$ 同时平移 $y \in \mathbb{C}$，
则乘法的结果也由原来的结果中将每个 $z_i$ 平移 $y$ 得到。

在上述记号下，空间 $V$ 刻画二维[[共形场论]]中的[[态空间]]，
其中每个元素 $a \in V$ 通过[[态场对应]]而对应于场 $a (z)$，
这也是场论中的[[可观测量]]。
关于 $n$ 个场的 [[$n$ 点函数]]
在其中两点相撞时具有[[奇性]]，
这种奇性能完全通过另一些形如 $a (z)$ 的场来描述，
这一现象称为[[算子乘积展开]]，
而顶点代数描述的正是这一结构。

## 定义

在顶点代数通常的定义中，引言中的直观想法常常被隐藏起来，
并翻译成以下信息：

- 乘积 $a (z) \cdot b (0)$ 记作 $Y (a, z) \, b$。

- 平移运算由[[线性算子]] $T \colon V \to V$ 给出，
  它的作用是刻画求导数的操作 $d / d z$，
  也就是说，它应满足
  \[
  (T a) (z) = \frac{d}{d z} a (z).
  \]
  这样，对任何 $a \in V$ 及变量 $y, z$，我们期望有
  \[
  \exp (y T) \, a (z) = a (z + y),
  \]
  这可类比于对通常的多项式 $f \in \mathbb{C} [z]$ 成立的等式
  \[
  \exp \Bigl( y \, \frac{d}{d z} \Bigr) \, f (z)
  = f (z + y).
  \]

这样，我们可以将顶点代数中的操作都用算子 $Y, T$ 表示出来。例如，
乘积 $a_1 (z_1) \cdot a_2 (z_2)$ 就可以写成
\[
\exp (z_2 T) \bigl( Y (a_1, z_1 - z_2) \, a_2 \bigr),
\]
这相当于先做乘积 $a_1 (z_1 - z_2) \cdot a_2 (0)$，
再将括号内的变量平移 $z_2$。

下面叙述顶点代数的通常定义。

::: definition [顶点代数] {@def-vertex-algebra}
**顶点代数**是四元组 $(V, Y, T, \ket{0})$，其中

- $V$ 是 $\mathbb{C}$-[[向量空间]]，
  称为 **[[态空间]]**。

- $\ket{0} \in V$，称为 **[[真空态]]** 或**单位元**。

- $Y$ 是[[线性映射]]
  \[
  \begin{aligned}
    Y \colon V & \longrightarrow \operatorname{End}(V) [[z, z^{-1}]], \\
    a & \longmapsto Y (a, z) = \sum_{n \in \mathbb{Z}} a_{(n)} z^{-n - 1},
  \end{aligned}
  \]
  称为 **[[态场对应]]**。

- $T \colon V \to V$
  是线性算子，称为**平移算子**。

它们满足以下公理：

- 对任意 $a, b \in V$，有
  \[
  a_{(n)} b = 0 \quad (n \gg 0).
  \]
  换言之，
  \[
  Y (a, z) \, b \in V ((z)),
  \]
  其中 $V ((z)) = V [[z]] [z^{-1}]$
  是取值于 $V$ 的[[形式 Laurent 级数]]的空间。

- （**真空**）
  有 $T \ket{0} = 0$，
  且 $Y (\ket{0}, z) = \operatorname{id}$。
  另外对任意 $a \in V$，
  有 $Y (a, z) \ket{0} \in a + z V [[z]]$。

- （**平移**）
  对任意 $a \in V$，有
  \[
  [T, Y (a, z)] = \frac{d}{d z} Y (a, z),
  \]
  其中左边表示[[交换子]]。

- （**[[定域性]]**）
  对任意 $a, b \in V$，存在 $N \in \mathbb{N}$，使得
  \[
  (z - w)^N [Y (a, z), Y (b, w)] = 0.
  \]

当无歧义时，也直接称 $V$ 为顶点代数。
:::

::: remark [定域性中的因子不能消去]
定域性是双变量[[形式分布]]空间中的等式。
在这个空间中，乘以 $x_1-x_2$ 不是单射。
例如，非零形式分布
\[
x_1^{-1}\delta\left(\frac{x_2}{x_1}\right)
=\sum_{n\in\mathbb Z}x_1^{-n-1}x_2^n
\]
满足
\[
(x_1-x_2)x_1^{-1}\delta\left(\frac{x_2}{x_1}\right)=0,
\]
见[[形式 $\delta$ 函数]]。
所以不能从定域性消去 $(x_1-x_2)^N$，推出两个场的交换子为零。
:::

带有相容分次和共形态的顶点代数称为[[顶点算子代数]]。
其定义及共形结构相关性质见该词条；以下只讨论一般顶点代数。

## 例子

::: example [交换微分代数]
设 $A$ 是复数域上的含幺[[交换代数]]，
$D\colon A\to A$ 是[[导子]]，即
\[
D(ab)=D(a)b+aD(b).
\]
将 $A$ 视为复向量空间，
取真空态 $\ket{0}=1$、平移算子 $T=D$，
并定义
\[
Y(a,z)b
=
(e^{zD}a)b
=
\sum_{n\geq0}\frac{z^n}{n!}(D^na)b.
\]
这些数据使 $A$ 成为顶点代数。

事实上，$D(1)=0$ 保证真空公理，
导子性质保证平移公理。
而每个 $Y(a,z)$ 都是乘法算子组成的形式级数，
因此
\[
[Y(a,z),Y(b,w)]=0.
\]
所以定域性公理可以取 $N=0$。

特别地，若 $A=\mathbb C[x]$、$D=d/dx$，则
\[
Y(f,z)g=f(x+z)g(x).
\]

这一类顶点代数称为[[交换顶点代数]]。
:::

## 真空与平移

以下各节讨论一般的顶点代数 $V$，不要求分次或有限维性。
$x,x_0,x_1,x_2,y$ 均为独立的形式变量。
涉及无穷求和与乘法时，使用[[形式分布]]中的形式可求和性与乘法定义。

### 真空作用与平移公式

::: lemma [真空上的作用] {@lem-va-creation}
对任意 $a\in V$，有
\[
Y(a,x)\ket{0}=e^{xT}a.
\]
:::

::: proof
由真空公理，可写 $Y(a,x)\ket{0}=\sum_{n\geq0}v_nx^n$，其中 $v_0=a$。
平移公理及 $T\ket{0}=0$ 给出
\[
\frac{d}{dx}Y(a,x)\ket{0}=T Y(a,x)\ket{0}.
\]
比较系数得 $(n+1)v_{n+1}=Tv_n$，所以 $v_n=T^na/n!$。
:::

::: lemma [平移公式] {@lem-va-translation}
对任意 $a\in V$，有
\[
e^{yT}Y(a,x)e^{-yT}=\iota_{x,y}Y(a,x+y).
\]
右边按 $y$ 的非负幂展开，见[[形式分布|形式平移]]。
等式成立于
$\bigl(\operatorname{End}(V)[[x,x^{-1}]]\bigr)[[y]]$。
:::

::: proof
左边按 $y$ 的幂次相乘时，每个系数只涉及有限项。
记 $\operatorname{ad}T(B)=[T,B]$，则展开两个指数得到
\[
e^{yT}Y(a,x)e^{-yT}
=\sum_{j\geq0}\frac{y^j}{j!}(\operatorname{ad}T)^jY(a,x).
\]
由平移公理，$(\operatorname{ad}T)^jY(a,x)=\partial_x^jY(a,x)$。
再用[[形式分布|形式 Taylor 公式]]即得结论。
:::

### 斜对称性

::: proposition [斜对称性] {@prop-va-skew-symmetry}
对任意 $a,b\in V$，有 $V((x))$ 中的等式
\[
Y(a,x)b=e^{xT}Y(b,-x)a.
\]
:::

::: proof
取足够大的非负整数 $N$，使定域性对 $a,b$ 成立，
并且 $x^N Y(b,x)a\in V[[x]]$。
将定域性作用在真空上，由 @lem-va-creation 得
\[
(x-y)^N Y(a,x)e^{yT}b
=(x-y)^N Y(b,y)e^{xT}a.
\]
左边没有 $y$ 的负幂，右边没有 $x$ 的负幂，
所以共同的结果属于 $V[[x,y]]$。
因而这个等式可以在 $y=0$ 处[[形式分布|取值]]，即取 $y$ 的常数项。
左边的取值是 $x^N Y(a,x)b$。

接下来计算右边的取值。由 @lem-va-translation，有
\[
(x-y)^N Y(b,y)e^{xT}a
=(x-y)^N e^{xT}\iota_{y,x}Y(b,y-x)a.
\]

由 $t^N Y(b,t)a\in V[[t]]$，可直接令 $y=0$，得到
\[
\left[(x-y)^N e^{xT}\iota_{y,x}Y(b,y-x)a\right]_{y=0}
=x^N e^{xT}Y(b,-x)a.
\]
因此，原等式在 $y=0$ 处给出
\[
x^N Y(a,x)b=x^N e^{xT}Y(b,-x)a.
\]
这是 $V[[x]]$ 中的等式，消去 $x^N$ 即得结论。
:::

### 态的平移与场的微分

平移公理描述的是 $T$ 与场的交换子。
要计算平移后的态 $Ta$ 所对应的场，还需要说明：
对态作用 $T$，就相当于对它的场求导。

::: proposition [态的平移与场的微分] {@prop-va-translation-derivative}
对任意 $a \in V$，有
\[
Y(Ta,x) = \partial_x Y(a,x).
\]
这是 $\operatorname{End}(V)[[x,x^{-1}]]$ 中的等式。
比较模式系数，等价地有
\[
(Ta)_{(n)} = -n a_{(n-1)}
\qquad (n \in \mathbb Z).
\]
:::

::: proof
固定 $b \in V$。
由斜对称性（@prop-va-skew-symmetry），有
\[
Y(a,x)b = e^{xT}Y(b,-x)a.
\]
由截断公理，$Y(b,-x)a$ 属于 $V((x))$，
而 $e^{xT}$ 只有非负幂，故乘积的每个系数只涉及有限项，
可以逐项求导。
平移公理与变量替换中的负号给出
\[
\partial_x Y(b,-x) = -[T,Y(b,-x)].
\]
因而在 $V((x))$ 中，
\[
\begin{aligned}
  \partial_x Y(a,x)b
  &= e^{xT}\bigl(TY(b,-x)-[T,Y(b,-x)]\bigr)a \\
  &= e^{xT}Y(b,-x)Ta \\
  &= Y(Ta,x)b.
\end{aligned}
\]
最后一步再次使用斜对称性。
因为 $b$ 任意，得到所需的场等式。
对 $Y(a,x)$ 逐项求导并比较 $x^{-n-1}$ 的系数，
即得到模式公式。
:::

## 乘积与迭代

### 定域性与共同展开

两个场的乘积可以因展开次序不同而给出不同的形式级数，
但它们仍可能来自同一个形式分式。
这里使用[[形式Laurent级数|向量值形式分式的展开]]：
\[
F \in V[[x_1,x_2]][x_1^{-1},x_2^{-1},(x_1-x_2)^{-1}].
\]
记 $\iota_{x_1,x_2}F$ 与 $\iota_{x_2,x_1}F$ 为两个次序的展开，
分别属于 $V((x_1))((x_2))$ 与 $V((x_2))((x_1))$。

::: proposition [乘积展开交换相等] {@prop-va-locality-expansion}
对任意 $a,b,c\in V$，存在唯一的
\[
F\in V[[x_1,x_2]][x_1^{-1},x_2^{-1},(x_1-x_2)^{-1}],
\]
使得
\[
Y(a,x_1)Y(b,x_2)c=\iota_{x_1,x_2}F,
\qquad
Y(b,x_2)Y(a,x_1)c=\iota_{x_2,x_1}F.
\]
:::

::: proof
由截断公理，第一个乘积属于 $V((x_1))((x_2))$，
第二个乘积属于 $V((x_2))((x_1))$。
取定域性给出的 $N$，则
\[
(x_1-x_2)^N Y(a,x_1)Y(b,x_2)c
=(x_1-x_2)^N Y(b,x_2)Y(a,x_1)c.
\]
共同的结果属于两个迭代 Laurent 级数空间的交集
\[
V((x_1))((x_2))\cap V((x_2))((x_1))
=V[[x_1,x_2]][x_1^{-1},x_2^{-1}].
\]
事实上，第一个空间给出 $x_2$ 指数的统一下界，
第二个空间给出 $x_1$ 指数的统一下界；
同时具有这两个下界，就属于右边的空间。

因而可以将共同的结果写成 $x_1^{-r}x_2^{-s}P(x_1,x_2)$，
其中 $P\in V[[x_1,x_2]]$。
取
\[
F=\frac{P(x_1,x_2)}{x_1^r x_2^s(x_1-x_2)^N}.
\]
在两个迭代 Laurent 级数空间中分别乘以 $(x_1-x_2)^{-N}$ 的相应展开，
即得到所需的两个等式。
唯一性由[[形式Laurent级数|展开映射的单射性]]得到。
:::

::: theorem [迭代展开等于乘积展开] {@thm-va-associativity-expansion}
对任意 $a,b,c\in V$，@prop-va-locality-expansion 中的共同表达式 $F$ 还满足
\[
Y\bigl(Y(a,x_0)b,x_2\bigr)c
=\iota_{x_2,x_0}F(x_2+x_0,x_2).
\]
左边是逐项应用 $Y$ 所得的迭代乘积
\[
\sum_{n\in\mathbb Z}Y(a_{(n)}b,x_2)c\,x_0^{-n-1}
\in V((x_2))((x_0)).
\]
因为 $a_{(n)}b=0$ 对充分大的 $n$ 成立，这个级数关于 $x_0$ 下截断。
:::

::: proof
对 $a,c,b$ 使用 @prop-va-locality-expansion，并将第二个变量换成 $-x_2$，
得到共同表达式
\[
H(x_0,x_2)\in V[[x_0,x_2]][x_0^{-1},x_2^{-1},(x_0+x_2)^{-1}],
\]
其两个展开分别为
\[
Y(a,x_0)Y(c,-x_2)b,
\qquad Y(c,-x_2)Y(a,x_0)b.
\]
乘以 $e^{x_2T}$ 时，令它逐项作用于分子的向量系数。
由于指数级数只有 $x_2$ 的非负幂，此运算在上述两个迭代空间中均有意义，
并与这两个展开相容。

按照[[形式分布|形式平移的展开约定]]，
将第一个展开中的 $x_0$ 换成 $x_1-x_2$，按 $x_2$ 的非负幂展开，
所得级数属于 $V((x_1))((x_2))$。

由 @lem-va-translation 和 @prop-va-skew-symmetry，得到
\[
\begin{aligned}
  &e^{x_2T}Y(a,x_1-x_2)Y(c,-x_2)b\\
  &\qquad=Y(a,x_1)e^{x_2T}Y(c,-x_2)b\\
  &\qquad=Y(a,x_1)Y(b,x_2)c.
\end{aligned}
\]
在形式分式中，代入将分母 $x_0+x_2$ 变成 $x_1$。
因而由共同展开的唯一性，
\[
F(x_1,x_2)=e^{x_2T}H(x_1-x_2,x_2).
\]

对第二个展开，将斜对称性逐项用于 $Y(a,x_0)b$ 的系数，得
\[
e^{x_2T}Y(c,-x_2)Y(a,x_0)b
=Y\bigl(Y(a,x_0)b,x_2\bigr)c.
\]
此式成立于 $V((x_2))((x_0))$。
这正是 $e^{x_2T}H(x_0,x_2)=F(x_2+x_0,x_2)$ 的第三个展开。
:::

### 结合律

::: proposition [弱结合律] {@prop-va-weak-associativity}
对任意 $a,b,c\in V$，存在非负整数 $L$，使得
\[
\begin{aligned}
  &(x_0+x_2)^L Y(a,x_0+x_2)Y(b,x_2)c\\
  &\qquad=(x_0+x_2)^L Y\bigl(Y(a,x_0)b,x_2\bigr)c.
\end{aligned}
\]
左边的 $Y(a,x_0+x_2)$ 按 $x_2$ 的非负幂展开。
乘上所选的因子后，两边都属于
$V[[x_0,x_2]][x_0^{-1},x_2^{-1}]$。
:::

::: proof
记 @thm-va-associativity-expansion 的共同表达式为
\[
F=\frac{P}{x_1^r x_2^s(x_1-x_2)^N},
\]
其中 $P\in V[[x_1,x_2]]$。

取 $L=r$。乘以 $(x_0+x_2)^r$ 后，乘积展开和迭代展开分别对
\[
\frac{P(x_0+x_2,x_2)}{x_2^s x_0^N}
\]
按 $x_2$ 和 $x_0$ 的非负幂展开。
其分母只含单项式，分子是非负幂级数，
因而两个展开次序给出同一个形式分布。
:::

### Jacobi 恒等式

::: proposition [Jacobi 恒等式] {@prop-va-jacobi}
对任意 $a,b,c\in V$，有三变量形式分布的等式
\[
\begin{aligned}
  &x_0^{-1}\delta\left(\frac{x_1-x_2}{x_0}\right)
    Y(a,x_1)Y(b,x_2)c\\
  &\quad-x_0^{-1}\delta\left(\frac{x_2-x_1}{-x_0}\right)
    Y(b,x_2)Y(a,x_1)c\\
  &=x_2^{-1}\delta\left(\frac{x_1-x_0}{x_2}\right)
    Y\bigl(Y(a,x_0)b,x_2\bigr)c.
\end{aligned}
\]
三个 delta 核中的二项式分别按 $x_2$、$x_1$、$x_0$ 的非负幂展开，
见[[形式 $\delta$ 函数]]。
因为等式对每个 $c$ 成立，也可省略 $c$，写成算子作用的恒等式。
此时系数中的算子和按作用于每个向量后只有有限项非零来理解。
:::

::: proof
由 @thm-va-associativity-expansion，除 delta 函数外的三个乘积是共同表达式
\[
F(x_1,x_2)=\frac{P(x_1,x_2)}{x_1^r x_2^s(x_1-x_2)^N},
\qquad P\in V[[x_1,x_2]],\quad r,s,N\geq0,
\]
的三个展开，分别是
$\iota_{x_1,x_2}F(x_1,x_2)$、$\iota_{x_2,x_1}F(x_1,x_2)$
和 $\iota_{x_2,x_0}F(x_2+x_0,x_2)$。

定义
\[
H(x_0,x_1,x_2)=\frac{P(x_1,x_2)}{x_0^N x_1^r x_2^s}.
\]
这个级数的三个变量的指数分别有统一下界。

逆向使用[[形式 $\delta$ 函数|三变量形式 delta 函数]]的取值性质，
可以将三个展开都换成 $H$ 本身。
再由[[形式 $\delta$ 函数|三变量形式 delta 函数恒等式]]，
就得到所需的 Jacobi 恒等式。
:::

::: remark
Jacobi 恒等式（@-prop-va-jacobi）也可以用作等价的顶点代数定义。
事实上，Jacobi 恒等式可以推出定域性、斜对称性与弱结合律。
:::

### 算子乘积展开

@thm-va-associativity-expansion 将两个场的乘积
与下列关于 $x_0=x_1-x_2$ 的展开联系起来：
\[
Y\bigl(Y(a,x_0)b,x_2\bigr)c
=\sum_{n\in\mathbb Z}Y(a_{(n)}b,x_2)c\,x_0^{-n-1}.
\]
这称为[[算子乘积展开]]。与 $Y(a,x_1)Y(b,x_2)c$ 的联系是共同表达式的不同展开。
其中 $n\geq0$ 的项构成关于 $x_0$ 的负幂部分。
由截断公理，这部分只有有限项，也就是所谓的[[奇性]]。

## 模式运算

### 模式交换子与迭代公式

可以将态场作用与 [[Lie 代数]]的[[伴随表示]]作类比：
\[
Y(u,x)v \quad\longleftrightarrow\quad
\operatorname{ad}_u v = [u,v].
\]
在 Lie 代数中，Jacobi 恒等式可以写成
\[
[u,[v,w]]-[v,[u,w]] = [[u,v],w],
\]
也就是
\[
[\operatorname{ad}_u,\operatorname{ad}_v]
= \operatorname{ad}_{[u,v]}.
\]
它把两个伴随作用的交换子化为括号所对应的伴随作用。
下面的公式具有类似的结构。

计算一个模式作用在场的结果上时，可以先将它移到场的右边，
再加上两者的交换子。Jacobi 恒等式给出这个交换子的具体表达式：
它只涉及 $Y(a,x)b$ 的奇性部分，即有限多个 $a_{(j)}b$（$j\geq0$）。

::: proposition [模式交换子公式] {@prop-va-mode-commutator}
设 $V$ 是顶点代数。对任意 $a,b\in V$ 及 $m\in\mathbb Z$，有
$\operatorname{End}(V)[[z,z^{-1}]]$ 中的等式
\[
[a_{(m)},Y(b,z)]
= \sum_{j\geq0}\binom{m}{j}z^{m-j}Y(a_{(j)}b,z).
\]
等价地，对任意 $m,n\in\mathbb Z$，有
\[
[a_{(m)},b_{(n)}]
= \sum_{j\geq0}\binom{m}{j}(a_{(j)}b)_{(m+n-j)}.
\]
这里使用[[形式分布|广义二项式系数]]，
即 $\binom{m}{0}=1$，且
\[
\binom{m}{j}
= \frac{m(m-1)\cdots(m-j+1)}{j!}
\qquad (j\geq1).
\]
固定 $a,b$ 后，
截断公理保证 $a_{(j)}b=0$ 对充分大的 $j$ 成立，
因此等式两边都是有限和。
:::

::: proof
固定 $c\in V$，比较 Jacobi 恒等式（@-prop-va-jacobi）
中 $x_0^{-1}x_1^{-m-1}$ 的系数。
左边两个 delta 核的 $x_0^{-1}$ 系数均为 $1$，
因而左边得到 $[a_{(m)},Y(b,x_2)]c$。

右边的 delta 核按 $x_0$ 的非负幂展开为
\[
x_2^{-1}\delta\left(\frac{x_1-x_0}{x_2}\right)
= \sum_{k\in\mathbb Z}\sum_{j\geq0}
  (-1)^j\binom{k}{j}
  x_1^{k-j}x_0^j x_2^{-k-1}.
\]
其中 $x_1^{-m-1}$ 的系数要求 $k=j-m-1$。
由
\[
(-1)^j\binom{j-m-1}{j}
= \binom{m}{j},
\]
这个系数等于
\[
\sum_{j\geq0}\binom{m}{j}x_0^j x_2^{m-j}.
\]
再乘上
\[
Y\bigl(Y(a,x_0)b,x_2\bigr)c
= \sum_{r\in\mathbb Z}Y(a_{(r)}b,x_2)c\,x_0^{-r-1},
\]
取 $x_0^{-1}$ 的系数，就要求 $r=j$，得到
\[
[a_{(m)},Y(b,x_2)]c
= \sum_{j\geq0}\binom{m}{j}x_2^{m-j}Y(a_{(j)}b,x_2)c.
\]
由于 $a_{(j)}b$ 对充分大的 $j$ 为零，
上述系数只涉及有限项。
令 $x_2=z$，并利用 $c$ 的任意性，即得第一式。
再比较 $z^{-n-1}$ 的系数，即得第二式。
:::

特别地，取 $m=0$，得到
\[
[a_{(0)},Y(b,z)] = Y(a_{(0)}b,z).
\]
作用于 $c\in V$ 后，这就是
\[
a_{(0)}\bigl(Y(b,z)c\bigr)
= Y(a_{(0)}b,z)c + Y(b,z)a_{(0)}c.
\]
因此零模式 $a_{(0)}$ 满足态场乘法的 Leibniz 法则。
再取 $z^{-1}$ 的系数，有
\[
[a_{(0)},b_{(0)}] = (a_{(0)}b)_{(0)}.
\]
这正对应于上面的
$[\operatorname{ad}_u,\operatorname{ad}_v]=\operatorname{ad}_{[u,v]}$。

交换子公式处理的是场外的模式作用。
若模式已经作用在态上，要计算的则是 $Y(a_{(m)}b,z)$。
下面的迭代公式把它写成 $a$ 的模式与 $Y(b,z)$ 的复合，
从而可以逐步拆开态中嵌套的模式作用。

::: proposition [模式迭代公式] {@prop-va-mode-iterate}
对任意 $a,b \in V$ 及 $m,n \in \mathbb Z$，有
\[
(a_{(m)}b)_{(n)}
= \sum_{j\geq0}(-1)^j\binom{m}{j}
  \bigl(a_{(m-j)}b_{(n+j)}
    -(-1)^m b_{(m+n-j)}a_{(j)}\bigr).
\]
等价地，将这些模式组成场，有
\[
\begin{aligned}
  Y(a_{(m)}b,z)
  = \sum_{j\geq0}(-1)^j\binom{m}{j}
  \bigl(&z^j a_{(m-j)}Y(b,z) \\
    &-(-1)^m z^{m-j}Y(b,z)a_{(j)}\bigr).
\end{aligned}
\]
二项式系数采用 @prop-va-mode-commutator 中的约定。
第一式的和在作用于任意固定的 $c \in V$ 后只有有限项非零；
第二式按作用于 $c$ 后逐系数求和来理解。
当 $m<0$ 时，不要求存在对所有 $c$ 或所有系数统一的求和上界。
:::

::: proof
固定 $c \in V$，在 Jacobi 恒等式（@-prop-va-jacobi）中
比较 $x_0^{-m-1}x_1^{-1}$ 的系数。
左边两个 delta 核的 $x_0^{-m-1}$ 系数分别为
\[
\sum_{j\geq0}(-1)^j\binom{m}{j}x_1^{m-j}x_2^j,
\qquad
\sum_{j\geq0}(-1)^{m+j}\binom{m}{j}x_2^{m-j}x_1^j.
\]
分别乘上 $Y(a,x_1)Y(b,x_2)c$ 与 $Y(b,x_2)Y(a,x_1)c$，
再取 $x_1^{-1}$ 的系数，得到
\[
\sum_{j\geq0}(-1)^j\binom{m}{j}
\bigl(x_2^j a_{(m-j)}Y(b,x_2)c
  -(-1)^m x_2^{m-j}Y(b,x_2)a_{(j)}c\bigr).
\]

右边的迭代场不含 $x_1$。
将右边的 delta 核展开为
\[
x_2^{-1}\delta\left(\frac{x_1-x_0}{x_2}\right)
= \sum_{k\in\mathbb Z}\sum_{j\geq0}
  (-1)^j\binom{k}{j}x_1^{k-j}x_0^j x_2^{-k-1}.
\]
取 $x_1^{-1}$ 的系数要求 $k=j-1$。
当 $j\geq1$ 时 $\binom{j-1}{j}=0$，故只剩 $j=0$ 的项，
这个系数就是 $1$。
因此右边再取 $x_0^{-m-1}$ 的系数，得到 $Y(a_{(m)}b,x_2)c$。
令 $x_2=z$，即得场的公式；
再取 $z^{-n-1}$ 的系数，就得到模式的公式。

最后核对求和的意义。固定 $n,c$ 后，截断公理给出
\[
b_{(n+j)}c = 0, \qquad a_{(j)}c = 0
\qquad (j \gg 0).
\]
因而模式公式右边两类项分别只有有限项非零，
也保证了上述场等式的逐系数运算合法。
:::

取 $m=0$，迭代公式成为
$(a_{(0)}b)_{(n)}=[a_{(0)},b_{(n)}]$，
与零模式交换子公式一致。

### 正规乘积与态场对应

模式迭代公式在 $m=-1$ 时的两类项，
恰好把 $a$ 的负模式放在左边、非负模式放在右边。
这正是[[正规序|正规乘积]]的分拆。
更一般的负模式可以先用平移转化为 $(-1)$ 模式，
于是态中的负模式作用变成场的微分与正规乘积。

::: proposition [负模式的态场对应] {@prop-va-negative-mode-field}
对任意 $a,b\in V$ 及整数 $r\geq1$，有
\[
Y(a_{(-r)}b,z)
=\frac{1}{(r-1)!}:
  \bigl(\partial_z^{r-1}Y(a,z)\bigr)Y(b,z):.
\]
特别地，$Y(a_{(-1)}b,z)=:Y(a,z)Y(b,z):$。
:::

::: proof
在模式迭代公式（@-prop-va-mode-iterate）中取 $m=-1$，得
\[
Y(a_{(-1)}b,z)
=\sum_{j\geq0}a_{(-1-j)}z^jY(b,z)
  +Y(b,z)\sum_{j\geq0}a_{(j)}z^{-j-1}.
\]
右边就是正规乘积的定义，故 $r=1$ 的情形成立。

由 @prop-va-translation-derivative，有
$(Ta)_{(n)}=-n a_{(n-1)}$。
反复使用此式，得到
\[
(T^{r-1}a)_{(-1)}=(r-1)!\,a_{(-r)},
\qquad Y(T^{r-1}a,z)=\partial_z^{r-1}Y(a,z).
\]
将已经证明的 $r=1$ 情形用于 $T^{r-1}a,b$，再除以 $(r-1)!$，
即得一般情形。
:::

::: remark
多次应用时，必须保留正规乘积的括号。例如
\[
Y(a_{(-r)}b_{(-s)}u,z)
=\frac{1}{(r-1)!(s-1)!}:
  \bigl(\partial_z^{r-1}Y(a,z)\bigr)
  \Bigl[:\bigl(\partial_z^{s-1}Y(b,z)\bigr)Y(u,z):\Bigr]:
\]
对 $r,s\geq1$ 成立。这里先算内层的二元正规乘积，再算外层的二元正规乘积。
括号不能省略，嵌套次序也不能随意改变。
:::

```terms
顶点代数:
  en: vertex algebra
  fr: algèbre vertex :f
```
