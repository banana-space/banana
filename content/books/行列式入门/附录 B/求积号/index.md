---
title: 求积号
---

为简便地表示求积，
人们聪明地作了**求积号** \(\prod\)。
对应拉丁字母 P，\(\prod\) 来自 <lang en>product</lang>（英语）。

设 \(a_m\)、\(a_{m+1}\)、\(\dots\)、\(a_n\) 是
\(n - m + 1\) 个数（\(n \geqslant m\)）。
我们可简单地写这 \(n - m + 1\) 个数的积

```math {@eq:B0201}
a_m \cdot a_{m+1} \cdot \dots \cdot a_n
```

为

```math {@eq:B0202}
\prod_{i = m}^{n} {a_i}.
```

比如，
\[
\begin{aligned}
  & 6 \cdot 5x \cdot 4x^2 \cdot 3x^3 \cdot 2x^4 \cdot x^5
  = \prod_{i = 0}^{5} {(6 - i)x^i};                        \\
  & 1 \cdot 2 \cdot \dots \cdot (n - 1) \cdot n
  = \prod_{i = 1}^{n} {i}.
\end{aligned}
\]

式 @eq:B0202 的 \(i\) 是求积指标，
其只起一个辅助的作用。
当我们还原式 @eq:B0202
为式 @eq:B0201 时，
求积指标 \(i\) 不应出现。
比如，我们也可写式 @eq:B0201 为
\[
\begin{aligned}
  \prod_{j = m}^{n} {a_j}.
\end{aligned}
\]
所以，我们可用任何文字作求积指标，除非此文字
跟别的文字混淆。
比如，\(s\) 行 \(t\) 列的矩形数表

```math {@eq:B0203}
\begin{matrix}
    a_{1,1} & a_{1,2} & \cdots & a_{1,t} \\
    a_{2,1} & a_{2,2} & \cdots & a_{2,t} \\
    \vdots  & \vdots  & {}     & \vdots  \\
    a_{s,1} & a_{s,2} & \cdots & a_{s,t} \\
\end{matrix}
```

的第 \(i\) 行的 \(t\) 个数的积是
\[
\begin{aligned}
  a_{i,1} \cdot a_{i,2} \cdot \dots \cdot a_{i,t}
  = \prod_{j = 1}^{t} {a_{i,j}}.
\end{aligned}
\]
这里，我们不能用文字 \(i\) 作求积指标，
因为
\[
\begin{aligned}
  \prod_{i = 1}^{t} {a_{i,i}}
\end{aligned}
\]
的意思是
\[
\begin{aligned}
  a_{1,1} \cdot a_{2,2} \cdot \dots \cdot a_{t,t}.
\end{aligned}
\]

有时，被乘的数用 \(2\) 个或多个指标编号。
比如，我们计算矩形数表 @eq:B0203 的 \(st\) 个数的积 \(P\)。
因为数的乘法适合结合律与交换律，
故我们可按任何的次序求积。
特别地，我们可以先求行 \(i\) 的 \(t\) 个数的积
\[
\begin{aligned}
  a_{i,1} \cdot a_{i,2} \cdot \dots \cdot a_{i,t}
  = \prod_{j = 1}^{t} {a_{i,j}},
\end{aligned}
\]
再求每行的积的积，得
\[
\begin{aligned}
  P
  = {} &
  \prod_{j = 1}^{t} {a_{1,j}}
  \cdot \prod_{j = 1}^{t} {a_{2,j}}
  \cdot \dots
  \cdot \prod_{j = 1}^{t} {a_{s,j}}
  \\
  = {} &
  \prod_{i = 1}^{s}
  {\left( \prod_{j = 1}^{t} {a_{i,j}} \right)}.
\end{aligned}
\]
为方便，我们写
\[
\begin{aligned}
  \prod_{i = 1}^{s}
  {\left( \prod_{j = 1}^{t} {a_{i,j}} \right)}
  = \prod_{i = 1}^{s}
  {\prod_{j = 1}^{t} {a_{i,j}}}.
\end{aligned}
\]
这就是 \(2\) 重求积。

当然，我们还可以先求列 \(j\) 的 \(s\) 个数的积
\[
\begin{aligned}
  a_{1,j} \cdot a_{2,j} \cdot \dots \cdot a_{s,j}
  = \prod_{i = 1}^{s} {a_{i,j}},
\end{aligned}
\]
再求每列的积的积，得
\[
\begin{aligned}
  P
  = {} &
  \prod_{i = 1}^{s} {a_{i,1}}
  \cdot \prod_{i = 1}^{s} {a_{i,2}}
  \cdot \dots
  \cdot \prod_{i = 1}^{s} {a_{i,t}}
  \\
  = {} &
  \prod_{j = 1}^{t}
  {\left( \prod_{i = 1}^{s} {a_{i,j}} \right)}
  \\
  = {} &
  \prod_{j = 1}^{t}
  {\prod_{i = 1}^{s} {a_{i,j}}}.
\end{aligned}
\]
比较 \(2\) 次计算的结果，我们得
\[
\begin{aligned}
  \prod_{i = 1}^{s} {\prod_{j = 1}^{t} {a_{i,j}}}
  = \prod_{j = 1}^{t} {\prod_{i = 1}^{s} {a_{i,j}}}.
\end{aligned}
\]
通俗地，我们可交换求积号的次序，而不影响积。

类似地，我们可引入 \(3\) 重求积
\[
\begin{aligned}
  \prod_{i = 1}^{s} {
    \prod_{j = 1}^{t} {
      \prod_{k = 1}^{u} {
  a_{i,j,k} }}}
  =
  \prod_{i = 1}^{s}
  {\left(
      \prod_{j = 1}^{t} {
        \prod_{k = 1}^{u} {
      a_{i,j,k} }}
  \right)}.
\end{aligned}
\]
在此基础上，我们可引入 \(4\) 重求积
\[
\begin{aligned}
  \prod_{i = 1}^{s} {
    \prod_{j = 1}^{t} {
      \prod_{k = 1}^{u} {
        \prod_{\ell = 1}^{v} {
  a_{i,j,k,\ell} }}}}
  =
  \prod_{i = 1}^{s}
  {\left(
      \prod_{j = 1}^{t} {
        \prod_{k = 1}^{u} {
          \prod_{\ell = 1}^{v} {
      a_{i,j,k,\ell} }}}
  \right)}.
\end{aligned}
\]
……
在此基础上，我们可引入 \(p\) 重求积
\[
\begin{aligned}
  \prod_{i_1 = 1}^{n_1} {
    \prod_{i_2 = 1}^{n_2} {
      \dots
      \prod_{i_{p-1} = 1}^{n_{p-1}} {
        \prod_{i_p = 1}^{n_p} {
  a_{i_1,i_2,\dots,i_{p-1},i_p} }}}}
  = \prod_{i_1 = 1}^{n_1}
  {\left(
      \prod_{i_2 = 1}^{n_2} {
        \dots
        \prod_{i_{p-1} = 1}^{n_{p-1}} {
          \prod_{i_p = 1}^{n_p} {
      a_{i_1,i_2,\dots,i_{p-1},i_p} }}}
  \right)}.
\end{aligned}
\]
特别地，若 \(n_1 = n_2 = \dots = n_p = n\)，
我们可简单地写
\[
\begin{aligned}
  \prod_{i_1 = 1}^{n} {
    \prod_{i_2 = 1}^{n} {
      \dots
      \prod_{i_{p-1} = 1}^{n} {
        \prod_{i_p = 1}^{n} {
  a_{i_1,i_2,\dots,i_{p-1},i_p} }}}}
  =
  \prod_{i_1,i_2,\dots,i_p = 1}^{n}
  {a_{i_1,i_2,\dots,i_{p-1},i_p}}.
\end{aligned}
\]

有时，虽然被乘的数用若干个指标编号，
但被乘的并不是全部，
而是指标适合某些条件的那一部分。
这时，我们在求积号下写出指标适合的条件。
比如，
\[
\begin{aligned}
  & \prod_{1 \leqslant i < j \leqslant n} {a_{i,j}}
  \\
  = {} & \hphantom{{} \cdot {}} a_{1,2}
  \\
  & \cdot a_{1,3} \cdot a_{2,3}
  \\
  & \cdot a_{1,4} \cdot a_{2,4} \cdot a_{3,4}
  \\
  & \cdot
  \dots
  \\
  & \cdot a_{1,n} \cdot a_{2,n}
  \cdot \dots \cdot a_{n-1,n}.
\end{aligned}
\]
再比如，若 \(\ell\) 是某个不超过 \(n\) 的正整数，则
\[
\begin{aligned}
  \prod_{\substack{1 \leqslant i \leqslant n \\ i \neq \ell}}
  {a_i}
  = a_1 \cdot \dots \cdot a_{\ell-1}
  \cdot a_{\ell+1} \cdot \dots \cdot a_n.
\end{aligned}
\]

设 \(a_{i_1, i_2, \dots, i_n}\) 是一些被编号的数。
设 \(R_1\)、\(R_2\)
是关于指标 \(i_1\)、\(i_2\)、\(\dots\)、\(i_n\) 的约束。
若不存在同时适合 \(R_1\)、\(R_2\)
的指标 \(i_1\)、\(i_2\)、\(\dots\)、\(i_n\)，
则，根据乘法的结合律与交换律，

```math {@eq:B0204}
\begin{aligned}
    &
    \prod_{i_1,i_2,\dots,i_n
    \,\text{适合}\,R_1\,\text{或}\,R_2}
    {a_{i_1, i_2, \dots, i_n}}
    \\
    = {} &
    \prod_{i_1,i_2,\dots,i_n\,\text{适合}\,R_1}
    {a_{i_1, i_2, \dots, i_n}}
    \cdot \prod_{i_1,i_2,\dots,i_n\,\text{适合}\,R_2}
    {a_{i_1, i_2, \dots, i_n}}.
\end{aligned}
```

比如，
\[
\begin{aligned}
  & \prod_{1 \leqslant i \leqslant 10} {i}
  = \prod_{1 \leqslant i \leqslant 4} {i}
  \cdot \prod_{5 \leqslant i \leqslant 10} {i};
  \\
  & \prod_{\substack{1 \leqslant i, j \leqslant n \\ i \neq j}} {a_{i,j}}
  = \prod_{1 \leqslant i < j \leqslant n} {a_{i,j}}
  \cdot \prod_{1 \leqslant j < i \leqslant n} {a_{i,j}}.
\end{aligned}
\]

当不存在指标适合约束 \(N\) 时
（也就是，\(N\) 是空约束时），
我们约定

```math {@eq:B0205}
\prod_{i_1,i_2,\dots,i_n\,\text{适合}\,N}
{a_{i_1, i_2, \dots, i_n}} = 1.
```

比如，
\[
\begin{aligned}
  \prod_{1 \leqslant i < j \leqslant 1} {a_{i,j}} = 1.
\end{aligned}
\]

为解释此约定，我们设
\[
\begin{aligned}
  x = \prod_{i_1,i_2,\dots,i_n\,\text{适合}\,N}
  {a_{i_1, i_2, \dots, i_n}}.
\end{aligned}
\]
我们任取一个约束 \(R\)。
既然不存在指标适合约束 \(N\)，
自然，也不存在指标同时适合 \(N\)、\(R\)。
再注意，
“\(i_1\)、\(i_2\)、\(\dots\)、\(i_n\)
适合 \(N\) 或 \(R\)”
相当于
“\(i_1\)、\(i_2\)、\(\dots\)、\(i_n\)
适合 \(R\)”。
由式 @eq:B0204，
\[
\begin{aligned}
  &
  \prod_{i_1,i_2,\dots,i_n\,\text{适合}\,R}
  {a_{i_1, i_2, \dots, i_n}}
  \\
  = {} &
  \prod_{i_1,i_2,\dots,i_n\,\text{适合}\,N\,\text{或}\,R}
  {a_{i_1, i_2, \dots, i_n}}
  \\
  = {} &
  \prod_{i_1,i_2,\dots,i_n\,\text{适合}\,N}
  {a_{i_1, i_2, \dots, i_n}}
  \cdot \prod_{i_1,i_2,\dots,i_n\,\text{适合}\,R}
  {a_{i_1, i_2, \dots, i_n}}.
\end{aligned}
\]
特别地，代 \(R\) 以 \(N\)，得 \(x = x \cdot x\)，
即 \(x = 0\) 或 \(x = 1\)。
若我们取 \(x = 0\)，
则对任何的约束 \(R\)，
\[
\begin{aligned}
  \prod_{i_1,i_2,\dots,i_n\,\text{适合}\,R}
  {a_{i_1, i_2, \dots, i_n}}
  = 0
  \cdot \prod_{i_1,i_2,\dots,i_n\,\text{适合}\,R}
  {a_{i_1, i_2, \dots, i_n}}
  = 0.
\end{aligned}
\]
于是，若我们取 \(x = 0\)，
则任何多个数的积都是 \(0\)。
这是不合理的。
所以，我们取 \(x = 1\)；
也就是，我们约定式 @eq:B0205。

或许，您已发现，因为数的加法跟乘法
都适合结合律与交换律，
故求和号与求积号有类似的性质。
