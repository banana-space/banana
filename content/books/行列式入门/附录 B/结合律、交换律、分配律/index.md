---
title: 结合律、交换律、分配律
---

本节，我想讨论结合律、交换律、分配律。

我们知道，数的加法适合结合律与交换律；
数的乘法也适合结合律与交换律；
并且，乘法与加法适合分配律。
具体地，我们设 \(a\)、\(b\)、\(c\) 是任何 \(3\) 个数。
那么，加法的结合律就是 \((a + b) + c = a + (b + c)\)；
乘法的结合律就是 \((a \cdot b) \cdot c = a \cdot (b \cdot c)\)；
加法的交换律就是 \(a + b = b + a\)；
乘法的交换律就是 \(a \cdot b = b \cdot a\)；
分配律是
\(a \cdot (b + c) = a \cdot b + a \cdot c\)
与
\((a + b) \cdot c = a \cdot c + b \cdot c\)，
其中，形如 \(a \cdot b + c \cdot d\)
的文字应被理解为
\((a \cdot b) + (c \cdot d)\)
（我们通常先算乘法，再算加法）。

在小学，我们就知道，因为加法（乘法）
适合结合律与交换律，
故当我们求若干个数的和（积）时，
我们可随意地交换这些数的次序，
且可以任何方式作加法（乘法）。
比如，
\[
\begin{aligned}
  ((23 + 52) + 77) + 48
  = {} & (23 + (52 + 77)) + 48 \\
  = {} & (23 + (77 + 52)) + 48 \\
  = {} & ((23 + 77) + 52) + 48 \\
  = {} & (23 + 77) + (52 + 48) \\
  = {} & 100 + (52 + 48)       \\
  = {} & 100 + 100             \\
  = {} & 200.
\end{aligned}
\]
不过，小学教材未证明此事，
初中教材似乎也未证明此事，
且高中教材似乎也未证明此事。

现在，我接受这个挑战。
不过，为方便，我要一些新的概念。

::: definition
**集**是具有某个特定性质的对象作成的一个整体。
我们叫它的对象为**元**。

无元的集是**空集**。
自然地，至少含一个元的集，是**非空的**。

若 \(a\) 是集 \(A\) 的元，
则写 \(a \in A\) 或 \(A \ni a\)，
且说 \(a\) **属于** \(A\)
或 \(A\) **包含** \(a\)。
若 \(a\) 不是集 \(A\) 的元，
则写 \(a \notin A\) 或 \(A \not\ni a\)，
且说 \(a\) **不属于** \(A\)
或 \(A\) **不包含** \(a\)。

一般地，若集 \(A\) 由具有某个性质 \(p\) 的对象作成，
我们写
\[
\begin{aligned}
  A = \{ x \mid \text{\(x\) 具有性质 \(p\)} \}.
\end{aligned}
\]
特别地，若 \(p\) 是
“为 \(a\)，或为 \(b\)，或为 \(c\)……”，
我们简单地写
\[
\begin{aligned}
  A = \{ a,b,c,\dots \}.
\end{aligned}
\]
:::

::: definition
设 \(a\)、\(b\) 是 \(2\) 个文字。
我们叫形如 \((a, b)\) 的文字为**有序对**。

再设 \(c\)、\(d\) 也是 \(2\) 个文字。
说 \(2\) 个有序对 \((a, b)\)、\((c, d)\) 相等，
就是说，\(a = c\) 且 \(b = d\)。
:::

::: example
当我们视所有的整数为一个整体时，
这个整体，就是**整数集**。
习惯地，我们表它以 \(\mathbb{Z}\)。

我们常记由全体非负整数（自然数）作成的集为 \(\mathbb{N}\)。
那么，我们可写
\[
\begin{aligned}
  \mathbb{N} = \{ 0, 1, 2, \dots \}.
\end{aligned}
\]
不难看出，\(-1 \in \mathbb{Z}\)，
但 \(-1 \notin \mathbb{N}\)。

我们可写
\[
\begin{aligned}
  \mathbb{Z} = \{ 0, 1, -1, 2, -2, \dots \}.
\end{aligned}
\]
我们也可写
\[
\mathbb{Z} =
\{ x \mid \text{\(x \in \mathbb{N}\)
或 \(-x \in \mathbb{N}\)} \}.
\]
:::

::: definition
设 \(S\)、\(T\) 是 \(2\) 个非空的集。
定义
\[
\begin{aligned}
  S \times T
  = \{ (s, t) \mid \text{\(s \in S\), 且 \(t \in T\)} \}.
\end{aligned}
\]
:::

::: example
设 \(A = \{ 1, 2, 3\}\)，
\(B = \{4, 5\}\)。
那么，
\[
\begin{aligned}
  A \times B
  = \{ (1,4),(1,5),(2,4),(2,5),(3,4),(3,5) \}.
\end{aligned}
\]
不过，
\[
\begin{aligned}
  B \times A
  = \{ (4,1),(4,2),(4,3),(5,1),(5,2),(5,3) \}.
\end{aligned}
\]
可以看到，\(A \times B\) 与 \(B \times A\)
的元的数目是相同的（即 \(6\)），
但它们的元是不一样的。
:::

抽象地，\(a + b\) 的 \(+\)，
其实是一个对应关系：
\(+\) 变一个有序对 \((a, b)\)
为某一个唯一确定的数 \(s\)，
其可被表示为 \(a + b\)。
类似地，\(\cdot\) 变一个有序对 \((a, b)\)
为某一个唯一确定的数 \(p\)，
其可被表示为 \(a \cdot b\)，
且也可被特别地表示为 \(ab\)。

::: definition
设 \(S\) 是非空的集。
设对应关系 \(\circ\) 适合：
对 \(S \times S\) 的任何一个有序对 \((a, b)\)，
存在 \(S\) 里的唯一的一个元 \(r\)，
使在对应关系 \(\circ\) 下，
\((a, b)\) 跟 \(r\) 对应。
（也就是：
(a)
对 \(S\) 的任何 \(2\) 个元 \(a\)、\(b\)
（不必互不相同），
存在 \(S\) 的元 \(r\)，
使在对应关系 \(\circ\) 下，
\((a, b)\) 跟 \(r\) 对应；
(b)
若在对应关系 \(\circ\) 下，
\((a, b)\) 跟 \(r\) 对应，
且 \((a, b)\) 跟 \(t\) 对应，
则 \(r = t\)。）
那么，我们说，\(\circ\) 是 \(S\) 的
一个 **\(2\) 元运算**。

设在对应关系 \(\circ\) 下，
\((a, b)\) 跟 \(r\) 对应。
我们表此事以 \(a \circ b = r\)。
:::

::: example
加法与乘法都是 \(\mathbb{N}\) 的 \(2\) 元运算：
\(2\) 个给定的非负整数 \(a\)、\(b\)
的和（或积）是被唯一确定的非负整数
\(a + b\)
（或 \(ab\)）。
不过，减法不是：
\(2\) 个非负整数的差不一定是非负整数。

不过，减法是 \(\mathbb{Z}\) 的 \(2\) 元运算。
当然，加法与乘法也是。
:::

我们考虑运算的律。

我们先看结合律。

设 \(S\) 为非空的集。
设 \(\circ\) 是 \(S\) 的 \(2\) 元运算。
文字 \(a \circ b \circ c\) 是否有意义？
显然，我们并未定义它的含义：
\(2\) 元运算每次只对 \(2\) 个元作运算。
不过，我们总可以先挑 \(2\) 个元作运算，
然后再作一次运算。
比如，先施 \(\circ\) 于 \(a\)、\(b\)，
可得 \((a \circ b) \circ c\)；
先施 \(\circ\) 于 \(b\)、\(c\)，
可得 \(a \circ (b \circ c)\)。
它们不一定相同，
因为 \(2\) 元运算是相当自由的。

::: example
\((11 - 5) - 2 \neq 11 - (5 - 2).\)
:::

不过，当然，有 \((a \circ b) \circ c\)
总等于 \(a \circ (b \circ c)\)
的情形。

::: definition
设 \(S\) 是非空的集。
设 \(\circ\) 是 \(S\) 的 \(2\) 元运算。
若对 \(S\) 的任何 \(3\) 个元 \(a\)、\(b\)、\(c\)
（不一定是互不相同的，下同），
\[
\begin{aligned}
  (a \circ b) \circ c = a \circ (b \circ c),
\end{aligned}
\]
我们说，\(\circ\) 适合**结合律**。
:::

通俗地，结合律说，
若非空的集 \(S\) 的 \(2\) 元运算 \(\circ\) 适合结合律，
且 \(a\)、\(b\)、\(c\) 为 \(S\) 的任何 \(3\) 个元，
则无论如何加括号
（但不改元的前后次序），
结果都是相等的。

我们看结合律有何用。

设 \(S\) 是非空的集。
设 \(\circ\) 是 \(S\) 的 \(2\) 元运算。
设 \(\circ\) 适合结合律。
设 \(a\)、\(b\)、\(c\)、\(d\) 是 \(S\) 的 \(4\) 个元。
考虑文字 \(a \circ b \circ c \circ d\)。
显然，它并没有含义
（\(2\) 元运算每次只对 \(2\) 个元作运算）。
不过，我们总可以 \(2\) 个 \(2\) 个地作运算。
具体地，我们有如下 \(5\) 个结合（加括号）方式：
\[
\begin{aligned}
  & r_{4,1} = ((a \circ b) \circ c) \circ d, \\
  & r_{4,2} = (a \circ (b \circ c)) \circ d, \\
  & r_{4,3} = a \circ ((b \circ c) \circ d), \\
  & r_{4,4} = a \circ (b \circ (c \circ d)), \\
  & r_{4,5} = (a \circ b) \circ (c \circ d).
\end{aligned}
\]
不难用结合律验证，
\(r_{4,2}\)、\(r_{4,3}\)、\(r_{4,4}\)、\(r_{4,5}\)
都等于 \(r_{4,1}\)：
\[
\begin{aligned}
  r_{4,1}
  = {} & ((a \circ b) \circ c) \circ d
  \\
  = {} & (a \circ (b \circ c)) \circ d
  & \quad \text{(\(r_{4,2}\))}                  \\
  = {} & a \circ ((b \circ c) \circ d)
  & \quad \text{(\(r_{4,3}\))}                  \\
  = {} & a \circ (b \circ (c \circ d))
  & \quad \text{(\(r_{4,4}\))}                  \\
  = {} & (a \circ b) \circ (c \circ d).
  & \quad \text{(\(r_{4,5}\))}
\end{aligned}
\]
所以，通俗地，
若非空的集 \(S\) 的 \(2\) 元运算 \(\circ\) 适合结合律，
且 \(a\)、\(b\)、\(c\)、\(d\) 为 \(S\) 的任何 \(4\) 元，
则无论如何加括号
（但不改元的前后次序），
结果都是相等的。

一般地，

::: theorem
设非空的集 \(S\) 的 \(2\) 元运算 \(\circ\) 适合结合律，
且 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\) 为
\(S\) 的任何 \(n\) 元。
则无论如何加括号
（但不改元的前后次序），
结果都是相等的。
:::

为方便，
我引入一个小的记号。
我们证明此事后，就不再用这个记号。

::: definition
设 \(\circ\) 是 \(S\) 的 \(2\) 元运算。
设 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\) 是
\(S\) 的 \(n\) 个元。
定义
\[
\begin{aligned}
  [a_1, a_2, \dots, a_n] =
  \begin{cases}
    a_1,
    & n = 1;    \\
    a_1 \circ a_2,
    & n = 2;    \\
    [a_1, a_2, \dots, a_{n-1}] \circ a_n,
    & n \geqslant 3.
  \end{cases}
\end{aligned}
\]
由此可见，\([a_1, a_2, \dots, a_n]\)
就是从前向后地，\(2\) 个 \(2\) 个地
施 \(\circ\) 于
\(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)
得到的结果。
:::

为方便，我们说，
施 \(\circ\) 于 \(S\) 的一个元 \(a\) 的结果
就是 \(a\) 自己。

::: proof
注意，有限多个元，只有有限多个加括号的方式。
设 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)
有 \(s_n\) 个加括号的方式
（比如，\(s_1 = s_2 = 1\)，
\(s_3 = 2\)，\(s_4 = 5\)）。
设以第 \(i\) 个加括号的方式算出的结果为 \(r_{n,i}\)。
我们证明，
它们都等于
\([a_1, a_2, \dots, a_n]\)
（注意，这也是一个加括号的方式，
即
\((((a_1 \circ a_2) \circ \dots) \circ a_{n-1}) \circ a_n\)，
故它跟 \(r_{n,1}\)、\(r_{n,2}\)、\(\dots\)，
\(r_{n,s_n}\) 中的一个
有相同的计算式）。
具体地，设命题 \(P(n)\) 为

> 对 \(S\) 的任何 \(n\) 元
> \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)，
> 无论如何加括号
> （但不改元的前后次序），
> 施 \(\circ\) 于此 \(n\) 元的结果都等于
> \([a_1, a_2, \dots, a_n]\)。

我们再作一个辅助命题 \(Q(n)\)：

> 对任何不超过 \(n\) 的正整数 \(i\)，
> \(P(i)\) 是对的。

我们用数学归纳法证明，
对每个整数 \(n \geqslant 3\)，
\(Q(n)\) 是对的。

显然，\(Q(3)\) 是对的。

现在，我们假定，\(Q(m-1)\) 是对的。
我们要证，\(Q(m)\) 也是对的。

因为 \(Q(m-1)\) 是对的，
故 \(P(1)\)、\(P(2)\)、\(\dots\)、\(P(m-1)\) 都是对的。
所以，若我们能由此证明 \(P(m)\) 是对的，
则 \(Q(m)\) 是对的。

任取 \(S\) 的 \(m\) 元
\(a_1\)、\(a_2\)、\(\dots\)、\(a_m\)。
任取一个 \(r_{m,i}\)。
注意，无论如何加括号作计算，
最后的那一步总是 \(2\) 个元的计算
（可回想 \(4\) 个元时的情形）。
我们设 \(r_{m,i} = b_1 \circ b_2\)，
其中，\(b_1\) 是结合 \(a_1\)、\(a_2\)、\(\dots\)、\(a_m\)
的前 \(k\) 个元的结果，
且 \(b_2\) 是结合 \(a_1\)、\(a_2\)、\(\dots\)、\(a_m\)
的后 \(m-k\) 个元的结果。
注意，\(k\)、\(m-k\) 都低于 \(m\)，
且都不低于 \(1\)
（因为 \(k \geqslant 1\)），
故，由假定，
\[
\begin{aligned}
  b_1 = [a_1, a_2, \dots, a_k],
  \quad
  b_2 = [a_{k+1}, \dots, a_m].
\end{aligned}
\]
若 \(m - k = 1\)，那么 \(b_2\) 就是 \(a_m\) 自己。
故
\[
\begin{aligned}
  r_{m,i}
  = [a_1, a_2, \dots, a_{m-1}] \circ a_m
  = [a_1, a_2, \dots, a_m].
\end{aligned}
\]
若 \(m - k > 1\)，则
\[
\begin{aligned}
  r_{m,i}
  = {} &
  b_1 \circ b_2
  \\
  = {} &
  [a_1, a_2, \dots, a_k] \circ
  [a_{k+1}, \dots, a_{m-1}, a_m]
  \\
  = {} &
  [a_1, a_2, \dots, a_k] \circ
  ([a_{k+1}, \dots, a_{m-1}] \circ a_m)
  \\
  = {} &
  ([a_1, a_2, \dots, a_k] \circ
  [a_{k+1}, \dots, a_{m-1}]) \circ a_m
  \\
  = {} &
  [a_1, a_2, \dots, a_k, a_{k+1}, \dots, a_{m-1}]
  \circ a_m
  \\
  = {} &
  [a_1, a_2, \dots, a_m].
\end{aligned}
\]
所以，\(Q(m)\) 是对的。

由数学归纳法，\(Q(n)\) 对
任何整数 \(n \geqslant 3\) 都是成立的。
进而，\(P(n)\) 对任何正整数 \(n\) 是成立的。
:::

设 \(\circ\) 是非空的集 \(S\) 的适合结合律的 \(2\) 元运算。
设 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\) 为 \(S\) 的任何 \(n\) 元。
我们简单地写
\[
\begin{aligned}
  (((a_1 \circ a_2) \circ \dots) \circ a_{n-1}) \circ a_n,
\end{aligned}
\]
或任何加括号的方式，为
\[
\begin{aligned}
  a_1 \circ a_2 \circ \dots \circ a_{n-1} \circ a_n.
\end{aligned}
\]

然后，我们看交换律。

设 \(S\) 为非空的集。
设 \(\circ\) 是 \(S\) 的 \(2\) 元运算。
设 \(a\)，\(b \in S\)。
自然地，\(a \circ b\) 与 \(b \circ a\) 都有意义。
因为 \(2\) 元运算是相当自由的，
故它们不一定相等。

::: example
\(7 - 3 \neq 3 - 7.\)
:::

不过，当然，有 \(a \circ b\)
总等于 \(b \circ a\)
的情形。

::: definition
设 \(S\) 是非空的集。
设 \(\circ\) 是 \(S\) 的 \(2\) 元运算。
若对 \(S\) 的任何 \(2\) 个元 \(a\)、\(b\)，
\[
\begin{aligned}
  a \circ b = b \circ a,
\end{aligned}
\]
我们说，\(\circ\) 适合**交换律**。
:::

现在，我们证明前面提的重要事实：
当我们求若干个数的和（积）时，
我们可随意地交换这些数的次序，
且可以任何方式作加法（乘法）。

::: theorem
设非空的集 \(S\) 的 \(2\) 元运算 \(\circ\) 适合
结合律与交换律，
且 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)
为 \(S\) 的任何 \(n\) 元。
则无论如何加括号与交换元的前后次序，
结果都是相等的。
:::

::: proof
设命题 \(P(n)\) 为

> 对 \(S\) 的任何 \(n\) 元
> \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)，
> 无论如何加括号与交换元的前后次序，
> 施 \(\circ\) 于此 \(n\) 元的结果都等于
> \(a_1 \circ a_2 \circ \dots \circ a_n\)。

我们用数学归纳法证明，
对每个正整数 \(n\)，\(P(n)\) 是对的。

\(P(1)\) 是对的。

\(P(2)\) 是对的，因为交换律。

现在，我们假定，\(P(m-1)\) 是对的。
我们要证，\(P(m)\) 也是对的。

任取 \(S\) 的 \(m\) 元
\(a_1\)、\(a_2\)、\(\dots\)、\(a_m\)。
设 \(i_1\)、\(i_2\)、\(\dots\)、\(i_m\)
是不超过 \(m\) 的正整数，
且互不相同。

若 \(i_m = m\)，
则 \(i_1\)、\(i_2\)、\(\dots\)、\(i_{m-1}\)
是不超过 \(m-1\) 的正整数，
且互不相同。
故
\[
\begin{aligned}
  & a_{i_1} \circ a_{i_2} \circ
  \dots \circ a_{i_{m-1}} \circ a_{i_m}               \\
  = {} &
  (a_{i_1} \circ a_{i_2} \circ
  \dots \circ a_{i_{m-1}}) \circ a_m                  \\
  = {} &
  (a_1 \circ a_2 \circ \dots \circ a_{m-1}) \circ a_m \\
  = {} &
  a_1 \circ a_2 \circ \dots \circ a_{m-1} \circ a_m.
\end{aligned}
\]

若 \(i_m \neq m\)，
我们设 \(i_j = m\)。
则
（若 \(i_1 = m\)，
则 \(a_{i_1} \circ \dots \circ a_{i_{j-1}}\) 不出现）
\[
\begin{aligned}
  & a_{i_1} \circ a_{i_2} \circ
  \dots \circ a_{i_m}                                 \\
  = {} & (a_{i_1} \circ \dots \circ a_{i_{j-1}})
  \circ (a_{i_j}
  \circ (a_{i_{j+1}} \circ \dots \circ a_{i_m}))      \\
  = {} & (a_{i_1} \circ \dots \circ a_{i_{j-1}})
  \circ ((a_{i_{j+1}} \circ \dots \circ a_{i_m})
  \circ a_{i_j})                                      \\
  = {} & ((a_{i_1} \circ \dots \circ a_{i_{j-1}})
  \circ (a_{i_{j+1}} \circ \dots \circ a_{i_m}))
  \circ a_m                                           \\
  = {} &
  (a_1 \circ a_2 \circ \dots \circ a_{m-1}) \circ a_m \\
  = {} &
  a_1 \circ a_2 \circ \dots \circ a_{m-1} \circ a_m.
\end{aligned}
\]

所以，\(P(m)\) 是对的。
由数学归纳法，待证的命题成立。
:::

注意，只有交换律而没有结合律的 \(2\) 元运算
是没有这个好性质的。

::: example
定义 \(\mathbb{Z}\) 上的 \(2\) 元运算
\(a \circ b = ab - (a + b)\)。
不难验证，\(\circ\) 适合交换律。
我们取 \(a\)、\(b\)、\(c\)、\(d\)
为 \(2\)、\(3\)、\(5\)、\(7\)。
则
\[
\begin{aligned}
  & (2 \circ 3) \circ (5 \circ 7) = 1 \circ 23 = -1; \\
  & (2 \circ 5) \circ (3 \circ 7) = 3 \circ 11 = 19.
\end{aligned}
\]
不难发现，\(\circ\) 不适合结合律：
\[
\begin{aligned}
  & (1 \circ 0) \circ 0 = -1 \circ 0 = 1; \\
  & 1 \circ (0 \circ 0) = 1 \circ 0 = -1.
\end{aligned}
\]
:::

最后，我们看分配律。

::: definition
设 \(S\) 是非空的集。
设 \(\circ\) 是 \(S\) 的 \(2\) 元运算。
设 \(\oplus\) 也是 \(S\) 的 \(2\) 元运算。

若对 \(S\) 的任何 \(3\) 个元 \(a\)、\(b\)、\(c\)，
\[
\begin{aligned}
  a \circ (b \oplus c)
  = (a \circ b) \oplus (a \circ c),
\end{aligned}
\]
我们说，\(\circ\) 与 \(\oplus\) 适合**左分配律**。

若对 \(S\) 的任何 \(3\) 个元 \(a\)、\(b\)、\(c\)，
\[
\begin{aligned}
  (a \oplus b) \circ c
  = (a \circ c) \oplus (b \circ c),
\end{aligned}
\]
我们说，\(\circ\) 与 \(\oplus\) 适合**右分配律**。

若 \(\circ\) 与 \(\oplus\)
既适合左分配律，也适合右分配律，
我们说，
\(\circ\) 与 \(\oplus\) 适合**分配律**。
:::

若 \(\oplus\) 适合结合律，
我们可得如下 \(3\) 个结果。

::: theorem
设 \(S\) 是非空的集。
设 \(\circ\) 是 \(S\) 的 \(2\) 元运算。
设 \(\oplus\) 是 \(S\) 的 \(2\) 元运算，
且适合结合律。
再设 \(\circ\) 与 \(\oplus\) 适合左分配律。
则对 \(S\) 的任何 \(n + 1\) 元
\(b\)、\(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)，
\[
\begin{aligned}
  b \circ (a_1 \oplus a_2 \oplus \dots \oplus a_n)
  =
  (b \circ a_1) \oplus (b \circ a_2) \oplus
  \dots \oplus (b \circ a_n).
\end{aligned}
\]
:::

::: proof
设命题 \(P(n)\) 为

> 对 \(S\) 的任何 \(n + 1\) 元
> \(b\)、\(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)，
> \[
> \begin{aligned}
>   b \circ (a_1 \oplus a_2 \oplus \dots \oplus a_n)
>   =
>   (b \circ a_1) \oplus (b \circ a_2) \oplus
>   \dots     \oplus (b \circ a_n).
> \end{aligned}
> \]

我们用数学归纳法证明，
对每个正整数 \(n\)，\(P(n)\) 是对的。

\(P(1)\) 是对的（显然）。

\(P(2)\) 是对的，因为左分配律。

现在，我们假定，\(P(m-1)\) 是对的。
我们要证，\(P(m)\) 也是对的。

任取 \(S\) 的 \(m + 1\) 元
\(b\)、\(a_1\)、\(a_2\)、\(\dots\)、\(a_m\)。
则
\[
\begin{aligned}
  &
  b \circ (a_1 \oplus a_2 \oplus \dots \oplus a_m)
  \\
  = {} &
  b \circ ((a_1 \oplus a_2 \oplus \dots \oplus a_{m-1})
  \oplus a_m)
  \\
  = {} &
  (b \circ (a_1 \oplus a_2 \oplus \dots \oplus a_{m-1}))
  \oplus (b \circ a_m)
  \\
  = {} &
  ((b \circ a_1) \oplus (b \circ a_2) \oplus
  \dots \oplus (b \circ a_{m-1}))
  \oplus (b \circ a_m)
  \\
  = {} &
  (b \circ a_1) \oplus (b \circ a_2) \oplus
  \dots \oplus (b \circ a_m).
\end{aligned}
\]
所以，\(P(m)\) 是对的。
由数学归纳法，待证的命题成立。
:::

您可用完全类似的方法，证明如下 \(2\) 个事实。
我就不证它们了。

::: theorem
设 \(S\) 是非空的集。
设 \(\circ\) 是 \(S\) 的 \(2\) 元运算。
设 \(\oplus\) 是 \(S\) 的 \(2\) 元运算，
且适合结合律。
再设 \(\circ\) 与 \(\oplus\) 适合右分配律。
则对 \(S\) 的任何 \(n + 1\) 元
\(b\)、\(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)，
\[
\begin{aligned}
  (a_1 \oplus a_2 \oplus \dots \oplus a_n) \circ b
  =
  (a_1 \circ b) \oplus (a_2 \circ b) \oplus
  \dots \oplus (a_n \circ b).
\end{aligned}
\]
:::

::: theorem
设 \(S\) 是非空的集。
设 \(\circ\) 是 \(S\) 的 \(2\) 元运算。
设 \(\oplus\) 是 \(S\) 的 \(2\) 元运算，
且适合结合律。
再设 \(\circ\) 与 \(\oplus\) 适合分配律。
则对 \(S\) 的任何 \(n + 1\) 元
\(b\)、\(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)，
\[
\begin{aligned}
  &
  b \circ (a_1 \oplus a_2 \oplus \dots \oplus a_n)
  =
  (b \circ a_1) \oplus (b \circ a_2) \oplus
  \dots \oplus (b \circ a_n),
  \\
  &
  (a_1 \oplus a_2 \oplus \dots \oplus a_n) \circ b
  =
  (a_1 \circ b) \oplus (a_2 \circ b) \oplus
  \dots \oplus (a_n \circ b).
\end{aligned}
\]
:::
