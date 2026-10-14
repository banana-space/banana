---
title: pfaffian 的性质
---

本节，我们讨论 pfaffian 的一些性质。

回想，\(1\) 级反称阵与 \(3\) 级反称阵的 pfaffian 为 \(0\)。
一般地，

::: theorem
奇数级反称阵的 pfaffian 为 \(0\)。
:::

::: proof
作命题 \(P(k)\)：
对任何 \(2k-1\) 级反称阵 \(A\)，
\(\operatorname{pf} {(A)} = 0\)。
我们用数学归纳法证明，
对任何正整数 \(k\)，\(P(k)\) 是对的。

\(P(1)\) 不证自明。

我们设 \(P(k-1)\) 是对的。
我们要由此证明 \(P(k)\) 是对的。

任取 \(2k-1\) 级反称阵 \(A\)。
则
\[
\begin{aligned}
  \operatorname{pf} {(A)}
  = {} &
  \sum_{j = 2}^{2k-1}
  {(-1)^{j} [A]_{1,j}
  \operatorname{pf} {(A({1,j}|{1,j}))}}
  \\
  = {} &
  \sum_{j = 2}^{2k-1}
  {(-1)^{j} [A]_{1,j}\, 0}
  \\
  = {} &
  0.
\end{aligned}
\]

所以，\(P(k)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: theorem
设 \(m\) 是整数。
设 \(A\) 是 \(2m\) 级反称阵。
设 \(x\) 是数。
则 \(\operatorname{pf} {(xA)}
  = x^m \operatorname{pf} {(A)}\)。
特别地，\(A^{\mathrm{T}} = (-1)A\) 的 pfaffian
是 \((-1)^m \operatorname{pf} {(A)}\)。
:::

::: proof
作命题 \(P(m)\)：
对任何 \(2m\) 级反称阵 \(A\)，
\(\operatorname{pf} {(xA)}
  = x^m \operatorname{pf} {(A)}\)。
我们用数学归纳法证明，
对任何正整数 \(m\)，\(P(m)\) 是对的。

\(P(1)\) 是对的：
\[
\begin{aligned}
  \operatorname{pf} {
    \begin{bmatrix}
      0   & xa \\
      -xa & 0  \\
    \end{bmatrix}
  }
  = xa
  = x^1 \operatorname{pf} {
    \begin{bmatrix}
      0  & a \\
      -a & 0 \\
    \end{bmatrix}
  }.
\end{aligned}
\]

我们设 \(P(m-1)\) 是对的。
我们要由此证明 \(P(m)\) 是对的。

任取 \(2m\) 级反称阵 \(A\)。
则
\[
\begin{aligned}
  \operatorname{pf} {(xA)}
  = {} &
  \sum_{j = 2}^{2m}
  {(-1)^{j} [xA]_{1,j}
  \operatorname{pf} {((xA)({1,j}|{1,j}))}}
  \\
  = {} &
  \sum_{j = 2}^{2m}
  {(-1)^{j} x\, [A]_{1,j}
  \operatorname{pf} {(x\,A({1,j}|{1,j}))}}
  \\
  = {} &
  \sum_{j = 2}^{2m}
  {(-1)^{j} x\, [A]_{1,j}
  x^{m-1} \operatorname{pf} {(A({1,j}|{1,j}))}}
  \\
  = {} &
  x\,x^{m-1}
  \sum_{j = 2}^{2m}
  {(-1)^{j} [A]_{1,j}
  \operatorname{pf} {(A({1,j}|{1,j}))}}
  \\
  = {} &
  x^m \operatorname{pf} {(A)}.
\end{aligned}
\]

所以，\(P(m)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: theorem
设 \(A\)、\(B\)、\(C\) 是 \(3\) 个 \(n\) 级反称阵。
设 \(q\) 是不超过 \(n\) 的正整数。
设 \(s\)、\(t\) 是数。
设 \([A]_{i,j} = [B]_{i,j} = [C]_{i,j}\)，
对任何不等于 \(q\)，且不超过 \(n\) 的正整数 \(i\)、\(j\)；
设 \([C]_{i,j} = s[A]_{i,j} + t[B]_{i,j}\)，
若 \(i = q\) 或 \(j = q\)。
则
\(
    \operatorname{pf} {(C)}
    = s \operatorname{pf} {(A)}
    + t \operatorname{pf} {(B)}
  \)。
:::

::: proof
作命题 \(P(n)\)：

> 对任何数 \(s\)、\(t\)，
> 对任何不超过 \(n\) 的正整数 \(q\)，
> 对任何适合如下条件的 \(3\) 个 \(n\) 级反称阵 \(A\)、\(B\)、\(C\)，
> \(
            \operatorname{pf} {(C)}
            = s \operatorname{pf} {(A)}
            + t \operatorname{pf} {(B)}
        \)：
>
> (1) \([A]_{i,j} = [B]_{i,j} = [C]_{i,j}\)，
>     对任何不等于 \(q\)，且不超过 \(n\) 的正整数 \(i\)、\(j\)；
>
> (2) \([C]_{i,j} = s[A]_{i,j} + t[B]_{i,j}\)，
>     若 \(i = q\) 或 \(j = q\)。

再作命题 \(Q(n)\)：
\(P(n-1)\) 与 \(P(n)\) 是对的。
我们用数学归纳法证明，
对任何高于 \(1\) 的整数 \(n\)，\(Q(n)\) 是对的。

\(P(1)\) 不证自明。

\(P(2)\) 是简单的。
若 \(q = 1\) 或 \(q = 2\)，
则 \([C]_{1,2} = s[A]_{1,2} + t[B]_{1,2}\)。
故 \(\operatorname{pf} {(C)}
    = s \operatorname{pf} {(A)}
  + t \operatorname{pf} {(B)}\)。

综上，\(Q(2)\) 是对的。

我们设 \(Q(n-1)\) 是对的（\(n \geqslant 3\)）。
则 \(P(n-2)\) 与 \(P(n-1)\) 是对的。
我们要由此证明 \(Q(n)\) 是对的，
即 \(P(n-1)\) 与 \(P(n)\) 是对的。
\(P(n-1)\) 当然是对的，由假定。
所以，我们由假定
“\(P(n-2)\) 与 \(P(n-1)\) 是对的”
证 \(P(n)\) 是对的，
得 \(Q(n)\) 是对的。

设 \(A\)、\(B\)、\(C\) 是 \(3\) 个 \(n\) 级反称阵。
设 \(q\) 是不超过 \(n\) 的正整数。
设 \(s\)、\(t\) 是数。
设 \([A]_{i,j} = [B]_{i,j} = [C]_{i,j}\)，
对任何不等于 \(q\)，且不超过 \(n\) 的正整数 \(i\)、\(j\)；
设 \([C]_{i,j} = s[A]_{i,j} + t[B]_{i,j}\)，
若 \(i = q\) 或 \(j = q\)。

若 \(q = 1\)，则
\([C]_{1,j} = s[A]_{1,j} + t[B]_{1,j}\)，
且 \(C({1,j}|{1,j}) = A({1,j}|{1,j}) = B({1,j}|{1,j})\)，
对 \(j > 1\)。
则
\[
\begin{aligned}
  &
  \operatorname{pf} {(C)}
  \\
  = {} &
  \sum_{j=2}^{n}
  {(-1)^j [C]_{1,j}
  \operatorname{pf} {(C({1,j}|{1,j}))}}
  \\
  = {} &
  \sum_{j=2}^{n}
  {(-1)^j (s[A]_{1,j} + t[B]_{1,j})
  \operatorname{pf} {(C({1,j}|{1,j}))}}
  \\
  = {} &
  s \sum_{j=2}^{n}
  {(-1)^j [A]_{1,j}
  \operatorname{pf} {(C({1,j}|{1,j}))}}
  +
  t \sum_{j=2}^{n}
  {(-1)^j [B]_{1,j}
  \operatorname{pf} {(C({1,j}|{1,j}))}}
  \\
  = {} &
  s \sum_{j=2}^{n}
  {(-1)^j [A]_{1,j}
  \operatorname{pf} {(A({1,j}|{1,j}))}}
  +
  t \sum_{j=2}^{n}
  {(-1)^j [B]_{1,j}
  \operatorname{pf} {(B({1,j}|{1,j}))}}
  \\
  = {} &
  s \operatorname{pf} {(A)}
  + t \operatorname{pf} {(B)}.
\end{aligned}
\]

设 \(q \neq 1\)。
那么，当 \(j \neq q\) 时，
\([A]_{1,j} = [B]_{1,j} = [C]_{1,j}\)，
且 \(n-2\) 级反称阵
\(A({1,j}|{1,j})\)、
\(B({1,j}|{1,j})\)、
\(C({1,j}|{1,j})\)
适合：

(1') \([A({1,j}|{1,j})]_{u,v}
         = [B({1,j}|{1,j})]_{u,v}
       = [C({1,j}|{1,j})]_{u,v}\)，
     对任何不等于 \(q' = q - \rho(q, 1) - \rho(q, j)
       = q - 1 - \rho(q, j)\)，
     且不超过 \(n-2\) 的正整数 \(u\)、\(v\)；

(2') \([C({1,j}|{1,j})]_{u,v}
     = s [A({1,j}|{1,j})]_{u,v}
  + t [B({1,j}|{1,j})]_{u,v}\)，
若 \(u = q'\) 或 \(v = q'\)。

于是，由假定，当 \(j \neq q\) 时，
\[
\begin{aligned}
  \operatorname{pf} {(C({1,j}|{1,j}))}
  = s \operatorname{pf} {(A({1,j}|{1,j}))}
  + t \operatorname{pf} {(B({1,j}|{1,j}))}.
\end{aligned}
\]

另一方面，当 \(j = q\) 时，
\([C]_{1,j} = s[A]_{1,j} + t[B]_{1,j}\)，
且 \(C({1,j}|{1,j}) = A({1,j}|{1,j}) = B({1,j}|{1,j})\)。

综上，
\[
\begin{aligned}
  &
  \operatorname{pf} {(C)}
  \\
  = {} &
  \sum_{j=2}^{n}
  {(-1)^j [C]_{1,j}
  \operatorname{pf} {(C({1,j}|{1,j}))}}
  \\
  = {} &
  (-1)^q [C]_{1,q}
  \operatorname{pf} {(C({1,q}|{1,q}))}
  +
  \sum_{\substack{2 \leqslant j \leqslant n \\ j \neq q}}
  {(-1)^j [C]_{1,j}
  \operatorname{pf} {(C({1,j}|{1,j}))}}
  \\
  = {} &
  \hphantom{{} + {}}
  (-1)^q (s[A]_{1,q} + t[B]_{1,q})
  \operatorname{pf} {(C({1,q}|{1,q}))}
  \\
  &
  +
  \sum_{\substack{2 \leqslant j \leqslant n \\ j \neq q}}
  {(-1)^j [C]_{1,j}
    (s \operatorname{pf} {(A({1,j}|{1,j}))}
    + t \operatorname{pf} {(B({1,j}|{1,j}))})
  }
  \\
  = {} &
  \hphantom{{} + {}}
  s (-1)^q [A]_{1,q}
  \operatorname{pf} {(C({1,q}|{1,q}))}
  + t (-1)^q [B]_{1,q}
  \operatorname{pf} {(C({1,q}|{1,q}))}
  \\
  &
  +
  s \sum_{\substack{2 \leqslant j \leqslant n \\ j \neq q}}
  {(-1)^j [C]_{1,j}
    \operatorname{pf} {(A({1,j}|{1,j}))}
  }
  + t \sum_{\substack{2 \leqslant j \leqslant n \\ j \neq q}}
  {(-1)^j [C]_{1,j}
    \operatorname{pf} {(B({1,j}|{1,j}))}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  s (-1)^q [A]_{1,q}
  \operatorname{pf} {(A({1,q}|{1,q}))}
  + t (-1)^q [B]_{1,q}
  \operatorname{pf} {(B({1,q}|{1,q}))}
  \\
  &
  +
  s \sum_{\substack{2 \leqslant j \leqslant n \\ j \neq q}}
  {(-1)^j [A]_{1,j}
    \operatorname{pf} {(A({1,j}|{1,j}))}
  }
  + t \sum_{\substack{2 \leqslant j \leqslant n \\ j \neq q}}
  {(-1)^j [B]_{1,j}
    \operatorname{pf} {(B({1,j}|{1,j}))}
  }
  \\
  = {} &
  s \sum_{j=2}^{n}
  {(-1)^j [A]_{1,j}
    \operatorname{pf} {(A({1,j}|{1,j}))}
  }
  +
  t \sum_{j=2}^{n}
  {(-1)^j [B]_{1,j}
    \operatorname{pf} {(B({1,j}|{1,j}))}
  }
  \\
  = {} &
  s \operatorname{pf} {(A)}
  + t \operatorname{pf} {(B)}.
\end{aligned}
\]

所以，\(P(n)\) 是对的。
则 \(Q(n)\) 是对的。
由数学归纳法，待证的命题成立。
:::

特别地，若我们取 \(A = B\)，且 \(t = 0\)，
我们得

::: theorem
设 \(A\)、\(C\) 是 \(2\) 个 \(n\) 级反称阵。
设 \(q\) 是不超过 \(n\) 的正整数。
设 \(s\) 是数。
设 \([C]_{i,j} = [A]_{i,j}\)，
对任何不等于 \(q\)，且不超过 \(n\) 的正整数 \(i\)、\(j\)；
设 \([C]_{i,j} = s[A]_{i,j}\)，
若 \(i = q\) 或 \(j = q\)。
则 \(\operatorname{pf} {(C)} = s \operatorname{pf} {(A)}\)。
:::

::: theorem
设 \(A\) 是 \(n\) 级反称阵。
设 \(p\)、\(q\) 是不超过 \(n\) 的正整数，且 \(p \neq q\)。
设交换 \(A\) 的列 \(p\)、\(q\)，且不改变别的列，得阵 \(B\)。
设交换 \(B\) 的行 \(p\)、\(q\)，且不改变别的行，得阵 \(C\)。
则 \(C\) 是反称阵，且
\(
    \operatorname{pf} {(C)} = -\operatorname{pf} {(A)}
  \)。
:::

::: proof
我们先说明 \(C\) 是反称阵。
交换 \(A\) 的列 \(p\)、\(q\)，
且不改变别的列，得阵 \(B\)。
则
\[
\begin{aligned}
  [B]_{i,j} =
  \begin{cases}
    [A]_{i,q}, & j = p;       \\
    [A]_{i,p}, & j = q;       \\
    [A]_{i,j}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
交换 \(B\) 的行 \(p\)、\(q\)，
且不改变别的行，得阵 \(C\)。
则
\[
\begin{aligned}
  [C]_{i,j} =
  \begin{cases}
    [B]_{q,j}, & i = p;       \\
    [B]_{p,j}, & i = q;       \\
    [B]_{i,j}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]

当 \(i \neq p\)，\(i \neq q\)，
\(j \neq p\)，且 \(j \neq q\) 时，
\([C]_{i,j} = [B]_{i,j} = [A]_{i,j}\)。
则
\([C]_{i,j} + [C]_{j,i}
  = [A]_{i,j} + [A]_{j,i} = 0\)，
且 \([C]_{i,i} = [A]_{i,i} = 0\)。

当 \(i = p\)，\(j \neq p\)，且 \(j \neq q\) 时，
\([C]_{i,j} = [B]_{q,j} = [A]_{q,j}\)；
当 \(j = p\)，\(i \neq p\)，且 \(i \neq q\) 时，
\([C]_{i,j} = [B]_{i,p} = [A]_{i,q}\)。
则
当 \(i = p\)，\(j \neq p\)，且 \(j \neq q\) 时，
\([C]_{i,j} + [C]_{j,i}
  = [A]_{q,j} + [A]_{j,q} = 0\)；
当 \(j = p\)，\(i \neq p\)，且 \(i \neq q\) 时，
\([C]_{i,j} + [C]_{j,i}
  = [A]_{i,q} + [A]_{q,i} = 0\)。

当 \(i = q\)，\(j \neq p\)，且 \(j \neq q\) 时，
\([C]_{i,j} = [B]_{p,j} = [A]_{p,j}\)；
当 \(j = q\)，\(i \neq p\)，且 \(i \neq q\) 时，
\([C]_{i,j} = [B]_{i,q} = [A]_{i,p}\)。
则
当 \(i = q\)，\(j \neq p\)，且 \(j \neq q\) 时，
\([C]_{i,j} + [C]_{j,i}
  = [A]_{p,j} + [A]_{j,p} = 0\)；
当 \(j = q\)，\(i \neq p\)，且 \(i \neq q\) 时，
\([C]_{i,j} + [C]_{j,i}
  = [A]_{i,p} + [A]_{p,i} = 0\)。

当 \(i = p\)，且 \(j = p\) 时，
\([C]_{i,j} = [B]_{q,p} = [A]_{q,q} = 0\)；
当 \(i = q\)，且 \(j = q\) 时，
\([C]_{i,j} = [B]_{p,q} = [A]_{p,p} = 0\)。

当 \(i = p\)，且 \(j = q\) 时，
\([C]_{i,j} = [B]_{q,q} = [A]_{q,p}\)；
当 \(i = q\)，且 \(j = p\) 时，
\([C]_{i,j} = [B]_{p,p} = [A]_{p,q}\)。
则
当 \(i = p\)，且 \(j = q\) 时，
\([C]_{i,j} + [C]_{j,i}
  = [A]_{q,p} + [A]_{p,q} = 0\)；
当 \(i = q\)，且 \(j = p\) 时，
\([C]_{i,j} + [C]_{j,i}
  = [A]_{p,q} + [A]_{q,p} = 0\)。

我们再说明
\(
    \operatorname{pf} {(C)} = -\operatorname{pf} {(A)}
  \)。
以下，我们无妨设 \(p < q\)。

作命题 \(P(n)\)：

> 对任何 \(n\) 级反称阵 \(A\)，
> 对任何 \(1 \leqslant p < q \leqslant n\)，
> 若 \(B\) 是交换 \(A\) 的列 \(p\)、\(q\)，
> 且不改变别的列得到的阵，
> 且 \(C\) 是交换 \(B\) 的行 \(p\)、\(q\)，
> 且不改变别的行得到的阵，
> 则
> \(
            \operatorname{pf} {(C)} = -\operatorname{pf} {(A)}
        \)。

再作命题 \(Q(n)\)：
\(P(n-1)\) 与 \(P(n)\) 是对的。
我们用数学归纳法证明，
对任何高于 \(1\) 的整数 \(n\)，\(Q(n)\) 是对的。

\(P(1)\) 不证自明。
既然没有 \(2\) 列或 \(2\) 行可交换，
我们认为，它是平凡地对的。

\(P(2)\) 是简单的。
既然 \(n = 2\)，且 \(1 \leqslant p < q \leqslant n\)，
则 \(p = 1\)，且 \(q = 2\)。
不难写出，若 \(A =
    \begin{bmatrix}
      0  & a \\
      -a & 0 \\
    \end{bmatrix}
  \)，
则交换列 \(1\)、\(2\)，
并交换行 \(1\)、\(2\) 后，
我们得 \(C =
    \begin{bmatrix}
      0 & -a \\
      a & 0  \\
    \end{bmatrix}
  \)。
则
\[
\begin{aligned}
  \operatorname{pf} {(C)}
  = -a
  = -\operatorname{pf} {(A)}.
\end{aligned}
\]

综上，\(Q(2)\) 是对的。

我们设 \(Q(n-1)\) 是对的（\(n \geqslant 3\)）。
则 \(P(n-2)\) 与 \(P(n-1)\) 是对的。
我们要由此证明 \(Q(n)\) 是对的，
即 \(P(n-1)\) 与 \(P(n)\) 是对的。
\(P(n-1)\) 当然是对的，由假定。
所以，我们由假定
“\(P(n-2)\) 与 \(P(n-1)\) 是对的”
证 \(P(n)\) 是对的，
得 \(Q(n)\) 是对的。

设 \(A\) 是 \(n\) 级反称阵。
设 \(1 \leqslant p < q \leqslant n\)。
设交换 \(A\) 的列 \(p\)、\(q\)，且不改变别的列，得阵 \(B\)。
设交换 \(B\) 的行 \(p\)、\(q\)，且不改变别的行，得阵 \(C\)。
我们分类讨论。

(1) \(p = 1\)，且 \(q = 2\)。
    当 \(d_1 > 2\)，\(d_2 > 2\)，且 \(d_2 \neq d_1\) 时，
    \([A]_{2,d_2}\) 是 \(A({1,d_1}|{1,d_1})\)
    的 \((1, d_2 - 1 - \rho(d_2, d_1))\)-元。
    则
    \[
        \begin{aligned}
          &
          \operatorname{pf} {(A)}
          \\
          = {} &
          \sum_{2 \leqslant d_1 \leqslant n}
          {
            (-1)^{d_1} [A]_{1,d_1}
            \operatorname{pf} {(A({1,d_1}|{1,d_1}))}
          }
          \\
          = {} &
          (-1)^{2} [A]_{1,2}
          \operatorname{pf} {(A({1,2}|{1,2}))}
          +
          \sum_{3 \leqslant d_1 \leqslant n}
          {
            (-1)^{d_1} [A]_{1,d_1}
            \operatorname{pf} {(A({1,d_1}|{1,d_1}))}
          }
          \\
          = {} &
          \hphantom{{} + {}}
          [A]_{1,2}
          \operatorname{pf} {(A({1,2}|{1,2}))}
          \\
          &
          +
          \sum_{3 \leqslant d_1 \leqslant n}
          {
            (-1)^{d_1} [A]_{1,d_1}
            \sum_{\substack{3 \leqslant d_2 \leqslant n \\ d_2 \neq d_1}}
            {
              (-1)^{d_2 - 1 - \rho(d_2, d_1)}
            }
          }
          \\
          &
          \qquad \qquad \qquad
          \qquad \qquad \qquad
          \cdot
          [A]_{2,d_2}
          \operatorname{pf} {(A({1,2,d_1,d_2}|{1,2,d_1,d_2}))}
          \\
          = {} &
          \hphantom{{} + {}}
          [A]_{1,2}
          \operatorname{pf} {(A({1,2}|{1,2}))}
          \\
          &
          +
          \sum_{3 \leqslant d_1 \leqslant n}
          {
            \sum_{\substack{3 \leqslant d_2 \leqslant n \\ d_2 \neq d_1}}
            {
              (-1)^{d_1}
              [A]_{1,d_1}
              (-1)^{d_2 - 1 - \rho(d_2, d_1)}
            }
          }
          \\
          &
          \qquad \qquad \qquad
          \qquad \qquad \qquad
          \cdot
          [A]_{2,d_2}
          \operatorname{pf} {(A({1,2,d_1,d_2}|{1,2,d_1,d_2}))}
          \\
          = {} &
          \hphantom{{} + {}}
          [A]_{1,2}
          \operatorname{pf} {(A({1,2}|{1,2}))}
          \\
          &
          +
          \sum_{\substack{3 \leqslant d_1, d_2 \leqslant n \\ d_2 \neq d_1}}
          {
            (-1)^{d_1 + d_2 - 1 - \rho(d_2, d_1)}
            [A]_{1,d_1} [A]_{2,d_2}
            \operatorname{pf} {(A({1,2,d_1,d_2}|{1,2,d_1,d_2}))}
          }
          \\
          = {} &
          \hphantom{{} + {}}
          [A]_{1,2}
          \operatorname{pf} {(A({1,2}|{1,2}))}
          \\
          &
          +
          \sum_{3 \leqslant d_1 < d_2 \leqslant n}
          {
            (-1)^{d_1 + d_2 - 1 - \rho(d_2, d_1)}
            [A]_{1,d_1} [A]_{2,d_2}
            \operatorname{pf} {(A({1,2,d_1,d_2}|{1,2,d_1,d_2}))}
          }
          \\
          &
          +
          \sum_{3 \leqslant d_2 < d_1 \leqslant n}
          {
            (-1)^{d_1 + d_2 - 1 - \rho(d_2, d_1)}
            [A]_{1,d_1} [A]_{2,d_2}
            \operatorname{pf} {(A({1,2,d_1,d_2}|{1,2,d_1,d_2}))}
          }
          \\
          = {} &
          \hphantom{{} + {}}
          [A]_{1,2}
          \operatorname{pf} {(A({1,2}|{1,2}))}
          \\
          &
          +
          \sum_{3 \leqslant j < k \leqslant n}
          {
            (-1)^{j + k - 1 - 1}
            [A]_{1,j} [A]_{2,k}
            \operatorname{pf} {(A({1,2,j,k}|{1,2,j,k}))}
          }
          \\
          &
          +
          \sum_{3 \leqslant j < k \leqslant n}
          {
            (-1)^{k + j - 1}
            [A]_{1,k} [A]_{2,j}
            \operatorname{pf} {(A({1,2,k,j}|{1,2,k,j}))}
          }
          \\
          = {} &
          \hphantom{{} + {}}
          [A]_{1,2}
          \operatorname{pf} {(A({1,2}|{1,2}))}
          \\
          &
          +
          \sum_{3 \leqslant j < k \leqslant n}
          {
            (-1)^{j + k}
            [A]_{1,j} [A]_{2,k}
            \operatorname{pf} {(A({1,2,j,k}|{1,2,j,k}))}
          }
          \\
          &
          +
          \sum_{3 \leqslant j < k \leqslant n}
          {
            (-1)^{j + k}
        (-1) [A]_{1,k} [A]_{2,j}
        \operatorname{pf} {(A({1,2,j,k}|{1,2,j,k}))}
      }
      \\
      = {} &
      \hphantom{{} + {}}
      [A]_{1,2}
      \operatorname{pf} {(A({1,2}|{1,2}))}
      \\
      &
      +
      \sum_{3 \leqslant j < k \leqslant n}
      {
        (-1)^{j + k}\,
        ([A]_{1,j} [A]_{2,k} - [A]_{1,k} [A]_{2,j})
        \operatorname{pf} {(A({1,2,j,k}|{1,2,j,k}))}
      }
      \\
      = {} &
      \hphantom{{} + {}}
      [A]_{1,2}
      \operatorname{pf} {(A({1,2}|{1,2}))}
      \\
      &
      +
      \sum_{3 \leqslant j < k \leqslant n}
      {
        (-1)^{j + k}
        \det {
          \begin{bmatrix}
            [A]_{1,j} & [A]_{1,k} \\
            [A]_{2,j} & [A]_{2,k} \\
          \end{bmatrix}
        }
        \operatorname{pf} {(A({1,2,j,k}|{1,2,j,k}))}
      }.
    \end{aligned}
    \]
类似地，
\[
\begin{aligned}
  \operatorname{pf} {(C)}
  = {} &
  \hphantom{{} + {}}
  [C]_{1,2}
  \operatorname{pf} {(C({1,2}|{1,2}))}
  \\
  &
  +
  \sum_{3 \leqslant j < k \leqslant n}
  {
    (-1)^{j + k}
    \det {
      \begin{bmatrix}
        [C]_{1,j} & [C]_{1,k} \\
        [C]_{2,j} & [C]_{2,k} \\
      \end{bmatrix}
    }
    \operatorname{pf} {(C({1,2,j,k}|{1,2,j,k}))}
  }.
\end{aligned}
\]
注意，\([C]_{1,2} = -[A]_{1,2}\)，
且 \(A({1,2}|{1,2}) = C({1,2}|{1,2})\)；
再注意，\(3 \leqslant j < k \leqslant n\) 时，
\([C]_{1,j} = [A]_{2,j}\)，
\([C]_{1,k} = [A]_{2,k}\)，
\([C]_{2,j} = [A]_{1,j}\)，
\([C]_{2,k} = [A]_{1,k}\)，
且 \(A({1,2,j,k}|{1,2,j,k}) = C({1,2,j,k}|{1,2,j,k})\)。
故
\[
\begin{aligned}
  \operatorname{pf} {(C)}
  = {} &
  \hphantom{{} + {}}
  {-} [A]_{1,2}
  \operatorname{pf} {(A({1,2}|{1,2}))}
  \\
  &
  +
  \sum_{3 \leqslant j < k \leqslant n}
  {
    (-1)^{j + k}
    \det {
      \begin{bmatrix}
        [A]_{2,j} & [A]_{2,k} \\
        [A]_{1,j} & [A]_{1,k} \\
      \end{bmatrix}
    }
    \operatorname{pf} {(A({1,2,j,k}|{1,2,j,k}))}
  }.
\end{aligned}
\]
由此可见，\(\operatorname{pf} {(C)}
  = -\operatorname{pf} {(A)}\)。

(2) \(2 \leqslant p = q - 1 \leqslant n - 1\)。
    则
    \[
    \begin{aligned}
      &
      \operatorname{pf} {(A)}
      \\
      = {} &
      \sum_{2 \leqslant j \leqslant n}
      {
        (-1)^{j} [A]_{1,j}
        \operatorname{pf} {(A({1,j}|{1,j}))}
      }
      \\
      = {} &
      \hphantom{{} + {}}
      (-1)^{p} [A]_{1,p}
      \operatorname{pf} {(A({1,p}|{1,p}))}
      +
      (-1)^{p+1} [A]_{1,p+1}
      \operatorname{pf} {(A({1,p+1}|{1,p+1}))}
      \\
      &
      +
      \sum_{\substack{2 \leqslant j \leqslant n \\ j \neq p, p+1}}
      {
        (-1)^{j} [A]_{1,j}
        \operatorname{pf} {(A({1,j}|{1,j}))}
      }.
    \end{aligned}
    \]
    类似地，
    \[
    \begin{aligned}
      &
      \operatorname{pf} {(C)}
      \\
      = {} &
      \hphantom{{} + {}}
      (-1)^{p} [C]_{1,p}
      \operatorname{pf} {(C({1,p}|{1,p}))}
      +
      (-1)^{p+1} [C]_{1,p+1}
      \operatorname{pf} {(C({1,p+1}|{1,p+1}))}
      \\
      &
      +
      \sum_{\substack{2 \leqslant j \leqslant n \\ j \neq p, p+1}}
      {
        (-1)^{j} [C]_{1,j}
        \operatorname{pf} {(C({1,j}|{1,j}))}
      }.
    \end{aligned}
    \]
    注意，
    \([C]_{1,p} = [A]_{1,p+1}\)，
    \([C]_{1,p+1} = [A]_{1,p}\)，
    \(C({1,p}|{1,p}) = A({1,p+1}|{1,p+1})\)，
    且 \(C({1,p+1}|{1,p+1}) = A({1,p}|{1,p})\)；
    再注意，\(j \geqslant 2\)，\(j \neq p\)，且 \(j \neq p+1\) 时，
    \([C]_{1,j} = [A]_{1,j}\)，
    且 \(C({1,j}|{1,j})\)
    可被认为是交换
    \(A({1,j}|{1,j})\) 的列 \(p'\)、\(p'+1\)，
    并交换行 \(p'\)、\(p'+1\) 得到的反称阵
    （其中，\(p' = p - \rho(p, 1) - \rho(p, j)
      = p - 1 - \rho(p, j)\)）。
    由假定，
    \(
        \operatorname{pf} {(C({1,j}|{1,j}))}
        = (-1) \operatorname{pf} {(A({1,j}|{1,j}))}
      \)。
    故
    \[
        \begin{aligned}
          &
          \operatorname{pf} {(C)}
          \\
          = {} &
          \hphantom{{} + {}}
          (-1)^{p} [A]_{1,p+1}
          \operatorname{pf} {(A({1,p+1}|{1,p+1}))}
          +
          (-1)^{p+1} [A]_{1,p}
          \operatorname{pf} {(A({1,p}|{1,p}))}
          \\
          &
          +
          \sum_{\substack{2 \leqslant j \leqslant n \\ j \neq p, p+1}}
          {
            (-1)^{j} [A]_{1,j}
        (-1) \operatorname{pf} {(A({1,j}|{1,j}))}
      }.
    \end{aligned}
    \]
由此可见，\(\operatorname{pf} {(C)}
  = -\operatorname{pf} {(A)}\)。

(3) 别的情形。
    不难看出，我们已证，
    若列 \(p\)、\(q\)（行 \(p\)、\(q\)）是相邻的
    （即 \(p = q - 1\)；
    注意，我们已约定 \(p < q\)），
    则 \(\operatorname{pf} {(C)}
      = -\operatorname{pf} {(A)}\)。
    那么，别的情形自然是
    当列 \(p\)、\(q\)（行 \(p\)、\(q\)）不是相邻的时
    的情形。

交换 \(A\) 的列 \(p\)、\(p+1\)，
并交换行 \(p\)、\(p+1\)，
得反称阵 \(C_1\)。
则 \(\operatorname{pf} {(C_1)} = -\operatorname{pf} {(A)}
  = (-1)^{1} \operatorname{pf} {(A)}\)。
交换 \(C_1\) 的列 \(p+1\)、\(p+2\)，
并交换行 \(p+1\)、\(p+2\)，
得反称阵 \(C_2\)。
则 \(\operatorname{pf} {(C_2)} = -\operatorname{pf} {(C_1)}
  = (-1)^{2} \operatorname{pf} {(A)}\)。
……
交换 \(C_{q-p-1}\) 的列 \(q-1\)、\(q\)，
并交换行 \(q-1\)、\(q\)，
得反称阵 \(C_{q-p}\)。
则 \(\operatorname{pf} {(C_{q-p})} = -\operatorname{pf} {(C_{q-p-1})}
  = (-1)^{q-p} \operatorname{pf} {(A)}\)。

记 \(G_0 = C_{q-p}\)。
则 \(\operatorname{pf} {(G_0)} = (-1)^{q-p} \operatorname{pf} {(A)}\)。
交换 \(G_0\) 的列 \(q-2\)、\(q-1\)，
并交换行 \(q-2\)、\(q-1\)，
得反称阵 \(G_1\)。
则 \(\operatorname{pf} {(G_1)} = -\operatorname{pf} {(G_0)}
  = (-1)^{q-p+1} \operatorname{pf} {(A)}\)。
交换 \(G_1\) 的列 \(q-3\)、\(q-2\)，
并交换行 \(q-3\)、\(q-2\)，
得反称阵 \(G_2\)。
则 \(\operatorname{pf} {(G_2)} = -\operatorname{pf} {(G_1)}
  = (-1)^{q-p+2} \operatorname{pf} {(A)}\)。
……
交换 \(G_{q-p-2}\) 的列 \(p\)、\(p+1\)，
并交换行 \(p\)、\(p+1\)，
得反称阵 \(G_{q-p-1}\)。
则 \(\operatorname{pf} {(G_{q-p-1})} = -\operatorname{pf} {(G_{q-p-2})}
  = (-1)^{q-p+(q-p-1)} \operatorname{pf} {(A)}\)。
不难看出，\(C = G_{q-p-1}\)。
所以，
\(\operatorname{pf} {(C)}
    = (-1)^{2(q-p)-1} \operatorname{pf} {(A)}
  = -\operatorname{pf} {(A)}\)。

所以，\(P(n)\) 是对的。
则 \(Q(n)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: theorem
设 \(A\) 是 \(n\) 级反称阵。
设 \(p\)、\(q\) 是不超过 \(n\) 的正整数，且 \(p \neq q\)。
设 \(A\) 的列 \(p\)、\(q\) 相等
（于是，显然，\(A\) 的行 \(p\)、\(q\) 也相等）。
则 \(\operatorname{pf} {(A)} = 0\)。
:::

::: proof
无妨设 \(p < q\)。
我们分类讨论。

(1) \(p = 1\)，且 \(q = 2\)。
    则
    \[
    \begin{aligned}
      \operatorname{pf} {(A)}
      = {} &
      \hphantom{{} + {}}
      [A]_{1,2}
      \operatorname{pf} {(A({1,2}|{1,2}))}
      \\
      &
      +
      \sum_{3 \leqslant j < k \leqslant n}
      {
        (-1)^{j + k}
        \det {
          \begin{bmatrix}
            [A]_{1,j} & [A]_{1,k} \\
            [A]_{2,j} & [A]_{2,k} \\
          \end{bmatrix}
        }
        \operatorname{pf} {(A({1,2,j,k}|{1,2,j,k}))}
      }.
    \end{aligned}
    \]
    因为 \(A\) 的列 \(1\)、\(2\) 相等，
    故 \(A\) 的行 \(1\)、\(2\) 也相等
    （注意，\(A\) 是反称阵），
    且 \([A]_{1,2} = [A]_{1,1} = 0\)。
    则
    \[
    \begin{aligned}
      \operatorname{pf} {(A)}
      = {} &
      \hphantom{{} + {}}
      0
      \operatorname{pf} {(A({1,2}|{1,2}))}
      \\
      &
      +
      \sum_{3 \leqslant j < k \leqslant n}
      {
        (-1)^{j + k}
        \,
        0
        \operatorname{pf} {(A({1,2,j,k}|{1,2,j,k}))}
      }
      \\
      = {} &
      0.
    \end{aligned}
    \]

(2) 别的情形。
    我们先说明：

设 \(A\) 是 \(n\) 级反称阵。
设 \(p\)、\(q\) 是不超过 \(n\) 的正整数，且 \(p \neq q\)。
设 \(A\) 的列 \(p\)、\(q\) 相等
（于是，显然，\(A\) 的行 \(p\)、\(q\) 也相等）。
再设 \(u\)、\(v\) 是不超过 \(n\) 的正整数，且 \(u \neq v\)。
设交换 \(A\) 的列 \(u\)、\(v\)，且不改变别的列，得阵 \(B\)。
设交换 \(B\) 的行 \(u\)、\(v\)，且不改变别的行，
得反称阵 \(C\)。
则 \(C\) 仍有 \(2\) 列相同（当然，也有 \(2\) 行相同）。

首先，如上个定理的论证，
我们可具体地写下 \(C\) 的元：
\[
\begin{aligned}
  [C]_{i,j} =
  \begin{cases}
    [A]_{i,j},
    &
    \text{\(i \neq u\), \(i \neq v\), \(j \neq u\),
    且 \(j \neq v\)};
    \\
    [A]_{v,j},
    &
    \text{\(i = u\), \(j \neq u\), 且 \(j \neq v\)};
    \\
    [A]_{i,v},
    &
    \text{\(j = u\), \(i \neq u\), 且 \(i \neq v\)};
    \\
    [A]_{u,j},
    &
    \text{\(i = v\), \(j \neq u\), 且 \(j \neq v\)};
    \\
    [A]_{i,u},
    &
    \text{\(j = v\), \(i \neq u\), 且 \(i \neq v\)};
    \\
    [A]_{v,v},
    &
    \text{\(i = j = u\)};
    \\
    [A]_{u,u},
    &
    \text{\(i = j = v\)};
    \\
    [A]_{v,u},
    &
    \text{\(i = u\), 且 \(j = v\)};
    \\
    [A]_{u,v},
    &
    \text{\(i = v\), 且 \(j = u\)}.
  \end{cases}
\end{aligned}
\]
然后，我们可分类讨论。
无妨设 \(p < q\)，且 \(u < v\)。
则：

若 \(p \neq u\)，\(p \neq v\)，
且 \(q \neq u\)，\(q \neq v\)，
则我们可验证，\(C\) 的列 \(p\)、\(q\) 相等；

若 \(p = u\)，且 \(q = v\)，
则我们可验证，\(C\) 的列 \(p\)、\(q\) 相等；

若 \(p = u\)，\(q \neq v\)，
则我们可验证，\(C\) 的列 \(q\)、\(v\) 相等；

若 \(p = v\)，
则我们可验证，\(C\) 的列 \(u\)、\(q\) 相等；

若 \(q = u\)，
则我们可验证，\(C\) 的列 \(p\)、\(v\) 相等；

若 \(q = v\)，且 \(p \neq u\)，
则我们可验证，\(C\) 的列 \(u\)、\(p\) 相等。

(\(2.1\)) \(1 = p < 2 < q\)。
      交换 \(A\) 的列 \(2\)、\(q\)，且不改变别的列，得阵 \(B_1\)。
      交换 \(B_1\) 的行 \(2\)、\(q\)，且不改变别的行，
      得反称阵 \(C_1\)。
      则 \(C_1\) 的列 \(1\)、\(2\) 相等，
      故 \(\operatorname{pf} {(C_1)} = 0\)。
      另一方面，\(\operatorname{pf} {(C_1)}
        = -\operatorname{pf} {(A)}\)，
      故 \(\operatorname{pf} {(A)} = 0\)。

(\(2.2\)) \(2 = p < q\)。
      交换 \(A\) 的列 \(1\)、\(q\)，且不改变别的列，得阵 \(B_2\)。
      交换 \(B_2\) 的行 \(1\)、\(q\)，且不改变别的行，
      得反称阵 \(C_2\)。
      则 \(C_2\) 的列 \(1\)、\(2\) 相等，
      故 \(\operatorname{pf} {(C_2)} = 0\)。
      另一方面，\(\operatorname{pf} {(C_2)}
        = -\operatorname{pf} {(A)}\)，
      故 \(\operatorname{pf} {(A)} = 0\)。

(\(2.3\)) \(2 < p < q\)。
      交换 \(A\) 的列 \(2\)、\(p\)，且不改变别的列，得阵 \(B_3\)。
      交换 \(B_3\) 的行 \(2\)、\(p\)，且不改变别的行，
      得反称阵 \(C_3\)。
      则 \(C_3\) 的列 \(2\)、\(q\) 相等，
      故 \(\operatorname{pf} {(C_3)} = 0\)
      （我们已证此情形）。
      另一方面，\(\operatorname{pf} {(C_3)}
        = -\operatorname{pf} {(A)}\)，
      故 \(\operatorname{pf} {(A)} = 0\)。
:::

有了这些性质，我们可以证明
倍加与反称阵的 pfaffian 的关系。
这是重要的。

::: theorem
设 \(A\) 是 \(n\) 级反称阵。
加 \(A\) 的列 \(p\) 的 \(s\) 倍于列 \(q\)
（\(p \neq q\)），
且不改变别的列，得 \(n\) 级阵 \(B\)。
加 \(B\) 的行 \(p\) 的 \(s\) 倍于行 \(q\)，
且不改变别的行，得 \(n\) 级阵 \(C\)。
则 \(\operatorname{pf} {(C)} = \operatorname{pf} {(A)}\)。
:::

::: proof
加 \(A\) 的列 \(p\) 的 \(s\) 倍于列 \(q\)，
且不改变别的列，得 \(n\) 级阵 \(B\)。
则
\[
\begin{aligned}
  [B]_{i,j} =
  \begin{cases}
    [A]_{i,j},              & j \neq q; \\
    [A]_{i,q} + s[A]_{i,p}, & j = q.
  \end{cases}
\end{aligned}
\]
加 \(B\) 的行 \(p\) 的 \(s\) 倍于行 \(q\)，
且不改变别的行，得 \(n\) 级阵 \(C\)。
则 \(C\) 是反称阵，且
\[
\begin{aligned}
  [C]_{i,j} =
  \begin{cases}
    [B]_{i,j},              & i \neq q; \\
    [B]_{q,j} + s[B]_{p,j}, & i = q.
  \end{cases}
\end{aligned}
\]
当 \(i = q\)，且 \(j \neq q\) 时，
\(
    [C]_{i,j}
    = [B]_{q,j} + s[B]_{p,j}
  = [A]_{q,j} + s[A]_{p,j}\)；
当 \(j = q\)，且 \(i \neq q\) 时，
\(
    [C]_{i,j}
    = [B]_{i,q}
  = [A]_{i,q} + s[A]_{i,p}\)；
当 \(i \neq q\)，且 \(j \neq q\) 时，
\([C]_{i,j} = [B]_{i,j} = [A]_{i,j}\)；
当 \(i = q = j\) 时，
\([C]_{i,j} = 0 = [A]_{i,j}\)。
作 \(n\) 级阵 \(G\) 如下：
\[
\begin{aligned}
  [G]_{i,j} =
  \begin{cases}
    [A]_{p,j}, & \text{\(i = q\), 且 \(j \neq q\)}; \\
    [A]_{i,p}, & \text{\(j = q\), 且 \(i \neq q\)}; \\
    [A]_{i,j}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则 \(G\) 是反称阵，
且 \(G\) 的列 \(p\)、\(q\) 相等，
且：

(1) \([A]_{i,j} = [G]_{i,j} = [C]_{i,j}\)，
    对任何不等于 \(q\)，且不超过 \(n\) 的正整数 \(i\)、\(j\)；

(2) \([C]_{i,j} = 1[A]_{i,j} + s[G]_{i,j}\)，
    若 \(i = q\) 或 \(j = q\)。

所以，
\[
\operatorname{pf} {(C)}
=
1 \operatorname{pf} {(A)} + s \operatorname{pf} {(G)}
=
\operatorname{pf} {(A)} + s \, 0
=
\operatorname{pf} {(A)}.
\]
:::

现在，我们可以证明，
反称阵的行列式与 pfaffian 有如下关系。

::: theorem
设 \(A\) 是 \(n\) 级反称阵。
则 \(\det {(A)}
  = (\operatorname{pf} {(A)})^2\)。
:::

::: proof
设 \(n\) 是奇数。
则 \(\det {(A)} = 0\)，
且 \(\operatorname{pf} {(A)} = 0\)。

再设 \(n = 2m\) 是偶数。
则利用若干次列的倍加，与对应的行的倍加
（先列后行，交替地作），
我们可变 \(A\) 为
\[
\begin{aligned}
  B =
  \begin{bmatrix}
    0      & b_1    & 0      & 0      & \cdots & 0      & 0      \\
    -b_1   & 0      & 0      & 0      & \cdots & 0      & 0      \\
    0      & 0      & 0      & b_2    & \cdots & 0      & 0      \\
    0      & 0      & -b_2   & 0      & \cdots & 0      & 0      \\
    \vdots & \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
    0      & 0      & 0      & 0      & \cdots & 0      & b_m    \\
    0      & 0      & 0      & 0      & \cdots & -b_m   & 0      \\
  \end{bmatrix}.
\end{aligned}
\]
则 \(\det {(B)} = \det {(A)}\)，
且 \(\operatorname{pf} {(B)} = \operatorname{pf} {(A)}\)。
最后，注意，\(\det {(B)}
  = (\operatorname{pf} {(B)})^2\)，
故 \(\det {(A)}
  = (\operatorname{pf} {(A)})^2\)。
:::

::: example
设 \(S\) 是
“整”，或“可比”（<lang en>rational</lang>），
或“实”，或“复”
中的一个。
我们约定，
当 \(S\) 是“整”时，\(S\)-数是整数；
当 \(S\) 是“可比”时，\(S\)-数是可比数；
当 \(S\) 是“实”时，\(S\)-数是实数；
当 \(S\) 是“复”时，\(S\)-数是复数。
于是，\(2\) 个 \(S\)-数的和、差、积还是 \(S\)-数。

若一个阵的元全为 \(S\)-数，
我们说，此阵是一个 \(S\)-阵。

现在，我们设 \(A\) 是一个 \(S\)-反称阵
（\(A\) 是反称阵，且 \(A\) 是 \(S\)-阵）。
因为 pfaffian 的定义由一些数的和、差、积作成，
且不含除法，
故 \(\operatorname{pf} {(A)}\) 是一个 \(S\)-数。
则 \(\det {(A)}\) 是一个 \(S\)-数的平方。
具体地，
若 \(A\) 是一个整反称阵，
则 \(\det {(A)}\) 是一个整数的平方（完全平方数）；
若 \(A\) 是一个实反称阵，
则 \(\det {(A)}\) 是一个实数的平方（非负实数）。
:::

我以一件事结束本节。

不难看出，在 pfaffian 的定义里，
\([A]_{1,2}\)、\([A]_{1,3}\)、\(\dots\)、\([A]_{1,n}\)
全为 \(A\) 的行 \(1\) 的元，
故我们说，定义按行 \(1\) 展开 pfaffian。
我们知道，我们可按一行展开行列式。
类似地，我们也可按一行展开 pfaffian：

::: theorem
设 \(A\) 是 \(n\) 级反称阵（\(n > 2\)）。
设 \(i\) 是不超过 \(n\) 的正整数。
则
\[
\begin{aligned}
  \operatorname{pf} {(A)}
  =
  \sum_{\substack{1 \leqslant j \leqslant n \\ j \neq i}}
  {
    (-1)^{i-1+j+\rho(i,j)}\, [A]_{i,j}
  \operatorname{pf} {(A({i,j}|{i,j}))}}.
\end{aligned}
\]
:::

::: proof
设 \(i = 1\)。
则 \(i - 1 + j + \rho(i, j) = j\)，若 \(j > 1\)。
所以，这是对的。

设 \(i > 1\)。
交换 \(A\) 的列 \(i-1\)、\(i\)，
并交换行 \(i-1\)、\(i\)，
得反称阵 \(C_1\)。
则 \(\operatorname{pf} {(C_1)}
    = -\operatorname{pf} {(A)}
  = (-1)^1 \operatorname{pf} {(A)}\)。
交换 \(C_1\) 的列 \(i-2\)、\(i-1\)，
并交换行 \(i-2\)、\(i-1\)，
得反称阵 \(C_2\)。
则 \(\operatorname{pf} {(C_2)}
    = -\operatorname{pf} {(C_1)}
  = (-1)^2 \operatorname{pf} {(A)}\)。
……
交换 \(C_{i-2}\) 的列 \(1\)、\(2\)，
并交换行 \(1\)、\(2\)，
得反称阵 \(C_{i-1}\)。
则 \(\operatorname{pf} {(C_{i-1})}
    = -\operatorname{pf} {(C_{i-2})}
  = (-1)^{i-1} \operatorname{pf} {(A)}\)。
记 \(C = C_{i-1}\)。
则 \(\operatorname{pf} {(A)}
  = (-1)^{i-1} \operatorname{pf} {(C)}\)。
我们有如下发现。

(1) \(A(i|i) = C(1|1)\)。

(2) 当 \(j < i\) 时，
    \([A]_{i,j} = [C]_{1,j+1}\)；
    当 \(j > i\) 时，
    \([A]_{i,j} = [C]_{1,j}\)。
    于是，
    当 \(2 \leqslant j \leqslant i\) 时，
    \([C]_{1,j} = [A]_{i,j-1}\)；
    当 \(j > i\) 时，
    \([C]_{1,j} = [A]_{i,j}\)。

(3) 当 \(j < i\) 时，
    \(A({i,j}|{i,j}) = C({1,j+1}|{1,j+1})\)；
    当 \(j > i\) 时，
    \(A({i,j}|{i,j}) = C({1,j}|{1,j})\)。
    于是，
    当 \(2 \leqslant j \leqslant i\) 时，
    \(C({1,j}|{1,j}) = A({i,j-1}|{i,j-1})\)；
    当 \(j > i\) 时，
    \(C({1,j}|{1,j}) = A({i,j}|{i,j})\)。

则
\[
\begin{aligned}
  &
  \operatorname{pf} {(C)}
  \\
  = {} &
  \sum_{j = 2}^{n}
  {(-1)^{j} [C]_{1,j}
  \operatorname{pf} {(C({1,j}|{1,j}))}}
  \\
  = {} &
  \sum_{2 \leqslant j \leqslant i}
  {(-1)^{j} [C]_{1,j}
  \operatorname{pf} {(C({1,j}|{1,j}))}}
  +
  \sum_{i < j \leqslant n}
  {(-1)^{j} [C]_{1,j}
  \operatorname{pf} {(C({1,j}|{1,j}))}}
  \\
  = {} &
  \sum_{2 \leqslant j \leqslant i}
  {(-1)^{j} [A]_{i,j-1}
  \operatorname{pf} {(A({i,j-1}|{i,j-1}))}}
  +
  \sum_{i < j \leqslant n}
  {(-1)^{j} [A]_{i,j}
  \operatorname{pf} {(A({i,j}|{i,j}))}}
  \\
  = {} &
  \sum_{1 \leqslant j < i}
  {(-1)^{j+1} [A]_{i,j}
  \operatorname{pf} {(A({i,j}|{i,j}))}}
  +
  \sum_{i < j \leqslant n}
  {(-1)^{j} [A]_{i,j}
  \operatorname{pf} {(A({i,j}|{i,j}))}}
  \\
  = {} &
  \sum_{1 \leqslant j < i}
  {(-1)^{j+\rho(i,j)}\, [A]_{i,j}
  \operatorname{pf} {(A({i,j}|{i,j}))}}
  +
  \sum_{i < j \leqslant n}
  {(-1)^{j+\rho(i,j)}\, [A]_{i,j}
  \operatorname{pf} {(A({i,j}|{i,j}))}}
  \\
  = {} &
  \sum_{\substack{1 \leqslant j \leqslant n \\ j \neq i}}
  {(-1)^{j+\rho(i,j)}\, [A]_{i,j}
  \operatorname{pf} {(A({i,j}|{i,j}))}}.
\end{aligned}
\]
故
\[
\begin{aligned}
  \operatorname{pf} {(A)}
  = {} &
  (-1)^{i-1}
  \operatorname{pf} {(C)}
  \\
  = {} &
  (-1)^{i-1}
  \sum_{\substack{1 \leqslant j \leqslant n \\ j \neq i}}
  {(-1)^{j+\rho(i,j)}\, [A]_{i,j}
  \operatorname{pf} {(A({i,j}|{i,j}))}}
  \\
  = {} &
  \sum_{\substack{1 \leqslant j \leqslant n \\ j \neq i}}
  {
    (-1)^{i-1}
    (-1)^{j+\rho(i,j)}\, [A]_{i,j}
  \operatorname{pf} {(A({i,j}|{i,j}))}}
  \\
  = {} &
  \sum_{\substack{1 \leqslant j \leqslant n \\ j \neq i}}
  {
    (-1)^{i-1+j+\rho(i,j)}\, [A]_{i,j}
  \operatorname{pf} {(A({i,j}|{i,j}))}}.
\end{aligned}
\]
:::

::: example
设 \(A\) 是 \(n\) 级反称阵（\(n > 2\)）。
注意，\([A]_{i,j} = -[A]_{j,i}\)。
于是，若 \(j\) 是不超过 \(n\) 的正整数，
由按行 \(j\) 展开，
\[
\begin{aligned}
  \operatorname{pf} {(A)}
  = {} &
  \sum_{\substack{1 \leqslant i \leqslant n \\ i \neq j}}
  {
    (-1)^{j-1+i+\rho(j,i)}\, [A]_{j,i}
  \operatorname{pf} {(A({j,i}|{j,i}))}}
  \\
  = {} &
  \sum_{\substack{1 \leqslant i \leqslant n \\ i \neq j}}
  {
    (-1)^{i-1+j+1-\rho(i,j)}\, (-[A]_{i,j})
  \operatorname{pf} {(A({i,j}|{i,j}))}}
  \\
  = {} &
  \sum_{\substack{1 \leqslant i \leqslant n \\ i \neq j}}
  {
    (-1)^{i-1+j+\rho(i,j)}\, [A]_{i,j}
  \operatorname{pf} {(A({i,j}|{i,j}))}}.
\end{aligned}
\]
形式地，这是按列 \(j\) 展开 pfaffian。
:::
