---
title: 求和号
---

为简便地表示求和，
人们聪明地作了**求和号** \(\sum\)。
对应拉丁字母 S，\(\sum\) 来自 <lang en>sum</lang>（英语）。

设 \(a_m\)、\(a_{m+1}\)、\(\dots\)、\(a_n\) 是
\(n - m + 1\) 个数（\(n \geqslant m\)）。
我们可简单地写这 \(n - m + 1\) 个数的和

```math {@eq:B0101}
a_m + a_{m+1} + \dots + a_n
```

为

```math {@eq:B0102}
\sum_{i = m}^{n} {a_i}.
```

比如，
\[
\begin{aligned}
  & 6 + 5x + 4x^2 + 3x^3 + 2x^4 + x^5
  = \sum_{i = 0}^{5} {(6 - i)x^i};                       \\
  & 1 + 2 + \dots + (n - 1) + n = \sum_{i = 1}^{n} {i}.
\end{aligned}
\]

式 @eq:B0102 的 \(i\) 是求和指标，
其只起一个辅助的作用。
当我们还原式 @eq:B0102
为式 @eq:B0101 时，
求和指标 \(i\) 不应出现。
比如，我们也可写式 @eq:B0101 为
\[
\begin{aligned}
  \sum_{j = m}^{n} {a_j}.
\end{aligned}
\]
所以，我们可用任何文字作求和指标，除非此文字
跟别的文字混淆。
比如，\(s\) 行 \(t\) 列的矩形数表

```math {@eq:B0103}
\begin{matrix}
    a_{1,1} & a_{1,2} & \cdots & a_{1,t} \\
    a_{2,1} & a_{2,2} & \cdots & a_{2,t} \\
    \vdots  & \vdots  & {}     & \vdots  \\
    a_{s,1} & a_{s,2} & \cdots & a_{s,t} \\
\end{matrix}
```

的第 \(i\) 行的 \(t\) 个数的和是
\[
\begin{aligned}
  a_{i,1} + a_{i,2} + \dots + a_{i,t}
  = \sum_{j = 1}^{t} {a_{i,j}}.
\end{aligned}
\]
这里，我们不能用文字 \(i\) 作求和指标，
因为
\[
\begin{aligned}
  \sum_{i = 1}^{t} {a_{i,i}}
\end{aligned}
\]
的意思是
\[
\begin{aligned}
  a_{1,1} + a_{2,2} + \dots + a_{t,t}.
\end{aligned}
\]

有时，被加的数用 \(2\) 个或多个指标编号。
比如，我们计算矩形数表 @eq:B0103 的 \(st\) 个数的和 \(S\)。
因为数的加法适合结合律与交换律，
故我们可按任何的次序求和。
特别地，我们可以先求行 \(i\) 的 \(t\) 个数的和
\[
\begin{aligned}
  a_{i,1} + a_{i,2} + \dots + a_{i,t}
  = \sum_{j = 1}^{t} {a_{i,j}},
\end{aligned}
\]
再求每行的和的和，得
\[
\begin{aligned}
  S
  = {} &
  \sum_{j = 1}^{t} {a_{1,j}}
  + \sum_{j = 1}^{t} {a_{2,j}}
  + \dots
  + \sum_{j = 1}^{t} {a_{s,j}}
  \\
  = {} &
  \sum_{i = 1}^{s}
  {\left( \sum_{j = 1}^{t} a_{i,j} \right)}.
\end{aligned}
\]
为方便，我们写
\[
\begin{aligned}
  \sum_{i = 1}^{s}
  {\left( \sum_{j = 1}^{t} a_{i,j} \right)}
  = \sum_{i = 1}^{s}
  {\sum_{j = 1}^{t} {a_{i,j}}}.
\end{aligned}
\]
这就是 \(2\) 重求和。

当然，我们还可以先求列 \(j\) 的 \(s\) 个数的和
\[
\begin{aligned}
  a_{1,j} + a_{2,j} + \dots + a_{s,j}
  = \sum_{i = 1}^{s} {a_{i,j}},
\end{aligned}
\]
再求每列的和的和，得
\[
\begin{aligned}
  S
  = {} &
  \sum_{i = 1}^{s} {a_{i,1}}
  + \sum_{i = 1}^{s} {a_{i,2}}
  + \dots
  + \sum_{i = 1}^{s} {a_{i,t}}
  \\
  = {} &
  \sum_{j = 1}^{t}
  {\left( \sum_{i = 1}^{s} {a_{i,j}} \right)}
  \\
  = {} &
  \sum_{j = 1}^{t} {
  \sum_{i = 1}^{s} {a_{i,j}}}.
\end{aligned}
\]
比较 \(2\) 次计算的结果，我们得
\[
\begin{aligned}
  \sum_{i = 1}^{s} {\sum_{j = 1}^{t} {a_{i,j}}}
  = \sum_{j = 1}^{t} {\sum_{i = 1}^{s} {a_{i,j}}}.
\end{aligned}
\]
通俗地，我们可交换求和号的次序，而不影响和。

类似地，我们可引入 \(3\) 重求和
\[
\begin{aligned}
  \sum_{i = 1}^{s} {
    \sum_{j = 1}^{t} {
      \sum_{k = 1}^{u} {
  a_{i,j,k}}}}
  =
  \sum_{i = 1}^{s}
  {\left( \sum_{j = 1}^{t} {
        \sum_{k = 1}^{u} {
  a_{i,j,k} }} \right)}.
\end{aligned}
\]
在此基础上，我们可引入 \(4\) 重求和
\[
\begin{aligned}
  \sum_{i = 1}^{s} {
    \sum_{j = 1}^{t} {
      \sum_{k = 1}^{u} {
        \sum_{\ell = 1}^{v} {
  a_{i,j,k,\ell} }}}}
  =
  \sum_{i = 1}^{s}
  {\left(
      \sum_{j = 1}^{t} {
        \sum_{k = 1}^{u} {
          \sum_{\ell = 1}^{v} {
      a_{i,j,k,\ell} }}}
  \right)}.
\end{aligned}
\]
……
在此基础上，我们可引入 \(p\) 重求和
\[
\begin{aligned}
  \sum_{i_1 = 1}^{n_1} {
    \sum_{i_2 = 1}^{n_2} {
      \dots
      \sum_{i_{p-1} = 1}^{n_{p-1}} {
        \sum_{i_p = 1}^{n_p} {
  a_{i_1,i_2,\dots,i_{p-1},i_p} }}}}
  = \sum_{i_1 = 1}^{n_1}
  {\left(
      \sum_{i_2 = 1}^{n_2} {
        \dots
        \sum_{i_{p-1} = 1}^{n_{p-1}} {
          \sum_{i_p = 1}^{n_p} {
      a_{i_1,i_2,\dots,i_{p-1},i_p}}}}
  \right)}.
\end{aligned}
\]
特别地，若 \(n_1 = n_2 = \dots = n_p = n\)，
我们可简单地写
\[
\begin{aligned}
  \sum_{i_1 = 1}^{n} {
    \sum_{i_2 = 1}^{n} {
      \dots
      \sum_{i_{p-1} = 1}^{n} {
        \sum_{i_p = 1}^{n} {
  a_{i_1,i_2,\dots,i_{p-1},i_p} }}}}
  =
  \sum_{i_1,i_2,\dots,i_p = 1}^{n}
  {a_{i_1,i_2,\dots,i_{p-1},i_p}}.
\end{aligned}
\]

有时，虽然被加的数用若干个指标编号，
但被加的并不是全部，
而是指标适合某些条件的那一部分。
这时，我们在求和号下写出指标适合的条件。
比如，
\[
\begin{aligned}
  & \sum_{1 \leqslant i < j \leqslant n} {a_{i,j}}
  \\
  = {} & \hphantom{{} + {}} a_{1,2}
  \\
  & + a_{1,3} + a_{2,3}
  \\
  & + a_{1,4} + a_{2,4} + a_{3,4}
  \\
  & +
  \dots
  \\
  & + a_{1,n} + a_{2,n} + \dots + a_{n-1,n}.
\end{aligned}
\]
再比如，若 \(\ell\) 是某个不超过 \(n\) 的正整数，则
\[
\begin{aligned}
  \sum_{\substack{1 \leqslant i \leqslant n \\ i \neq \ell}}
  {a_i}
  = a_1 + \dots + a_{\ell-1} + a_{\ell+1} + \dots + a_n.
\end{aligned}
\]

设 \(a_{i_1, i_2, \dots, i_n}\) 是一些被编号的数。
设 \(R_1\)、\(R_2\)
是关于指标 \(i_1\)、\(i_2\)、\(\dots\)、\(i_n\) 的约束。
若不存在同时适合 \(R_1\)、\(R_2\)
的指标 \(i_1\)、\(i_2\)、\(\dots\)、\(i_n\)，
则，根据加法的结合律与交换律，

```math {@eq:B0104}
\begin{aligned}
    &
    \sum_{i_1,i_2,\dots,i_n
    \,\text{适合}\,R_1\,\text{或}\,R_2}
    {a_{i_1, i_2, \dots, i_n}}
    \\
    = {} &
    \sum_{i_1,i_2,\dots,i_n\,\text{适合}\,R_1}
    {a_{i_1, i_2, \dots, i_n}}
    + \sum_{i_1,i_2,\dots,i_n\,\text{适合}\,R_2}
    {a_{i_1, i_2, \dots, i_n}}.
\end{aligned}
```

比如，
\[
\begin{aligned}
  &
  \sum_{1 \leqslant i \leqslant 10} {i}
  = \sum_{1 \leqslant i \leqslant 4} {i}
  + \sum_{5 \leqslant i \leqslant 10} {i};
  \\
  &
  \sum_{\substack{1 \leqslant i, j \leqslant n \\ i \neq j}} {a_{i,j}}
  = \sum_{1 \leqslant i < j \leqslant n} {a_{i,j}}
  + \sum_{1 \leqslant j < i \leqslant n} {a_{i,j}}.
\end{aligned}
\]

当不存在指标适合约束 \(N\) 时
（也就是，\(N\) 是空约束时），
我们约定

```math {@eq:B0105}
\sum_{i_1,i_2,\dots,i_n\,\text{适合}\,N}
{a_{i_1, i_2, \dots, i_n}} = 0.
```

比如，
\[
\begin{aligned}
  \sum_{1 \leqslant i < j \leqslant 1} {a_{i,j}} = 0.
\end{aligned}
\]

为解释此约定，我们任取一个约束 \(R\)。
既然不存在指标适合约束 \(N\)，
自然，也不存在指标同时适合 \(N\)、\(R\)。
再注意，
“\(i_1\)、\(i_2\)、\(\dots\)、\(i_n\)
适合 \(N\) 或 \(R\)”
相当于
“\(i_1\)、\(i_2\)、\(\dots\)、\(i_n\)
适合 \(R\)”。
由式 @eq:B0104，
\[
\begin{aligned}
  &
  \sum_{i_1,i_2,\dots,i_n\,\text{适合}\,R}
  {a_{i_1, i_2, \dots, i_n}}
  \\
  = {} &
  \sum_{i_1,i_2,\dots,i_n\,\text{适合}\,N\,\text{或}\,R}
  {a_{i_1, i_2, \dots, i_n}}
  \\
  = {} &
  \sum_{i_1,i_2,\dots,i_n\,\text{适合}\,N}
  {a_{i_1, i_2, \dots, i_n}}
  + \sum_{i_1,i_2,\dots,i_n\,\text{适合}\,R}
  {a_{i_1, i_2, \dots, i_n}}.
\end{aligned}
\]
消去相同的项，得式 @eq:B0105。
