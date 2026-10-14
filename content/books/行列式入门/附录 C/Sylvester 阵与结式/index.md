---
title: Sylvester 阵与结式
notices:
  - name: 问题
    items:
      - 最后一个例子中，“\(m + (m-1) + \dots + 1 = m(m-1)/2\)”与“\(n + (n-1) + \dots + 1 = n(n-1)/2\)”两式似乎不成立；把 \(m\) 列倒序所需的相邻交换次数似乎应为 \((m-1) + \dots + 1 = m(m-1)/2\)。
---

本节，我们用行列式研究整式的一些性质。

为方便，我们作一个有名的（有名字的）假定。
我们会反复地说它。

::: -remark [假定] {@standing-assumption-of-resultant}
设 \(n\)、\(m\) 是非负整数，
且 \(m + n \geqslant 1\)。
设
\[
\begin{aligned}
  f(x) &
  = \sum_{k = 0}^{n} {a_k x^{n-k}}
  = a_0 x^n + a_1 x^{n-1} + \dots + a_n,
  \\
  g(x) &
  = \sum_{k = 0}^{m} {b_k x^{m-k}}
  = b_0 x^m + b_1 x^{m-1} + \dots + b_m.
\end{aligned}
\]
为方便，我们约定：
若 \(k < 0\) 或 \(k > n\)，则 \(a_k = 0\)；
若 \(k < 0\) 或 \(k > m\)，则 \(b_k = 0\)。
:::

::: definition
设 @standing-assumption-of-resultant 成立。
定义 \(f\)、\(g\) 的 **Sylvester 阵**
为 \(m + n\) 级阵
\(S(f, g; n, m)\)，
其中，
\[
\begin{aligned}
  [S(f, g; n, m)]_{i,j} =
  \begin{cases}
    a_{i-j},     & j \leqslant m; \\
    b_{i-(j-m)}, & j > m.
  \end{cases}
\end{aligned}
\]
\(f\)、\(g\) 的 Sylvester 阵的行列式
\(\det {(S(f, g; n, m))}\)
是 \(f\)、\(g\) 的**结式**。
:::

我们看几个例。

::: example
设 @standing-assumption-of-resultant 成立。
设 \(n = 2\)，且 \(m = 5\)。
则 \(f\)、\(g\) 的 Sylvester 阵
\(S(f, g; 2, 5)\) 是
\[
\begin{bmatrix}
  a_{0} & a_{-1} & a_{-2} & a_{-3} & a_{-4} & b_{0} & b_{-1} \\
  a_{1} & a_{0}  & a_{-1} & a_{-2} & a_{-3} & b_{1} & b_{0}  \\
  a_{2} & a_{1}  & a_{0}  & a_{-1} & a_{-2} & b_{2} & b_{1}  \\
  a_{3} & a_{2}  & a_{1}  & a_{0}  & a_{-1} & b_{3} & b_{2}  \\
  a_{4} & a_{3}  & a_{2}  & a_{1}  & a_{0}  & b_{4} & b_{3}  \\
  a_{5} & a_{4}  & a_{3}  & a_{2}  & a_{1}  & b_{5} & b_{4}  \\
  a_{6} & a_{5}  & a_{4}  & a_{3}  & a_{2}  & b_{6} & b_{5}  \\
\end{bmatrix}
=
\begin{bmatrix}
  a_0 & 0   & 0   & 0   & 0   & b_0 & 0   \\
  a_1 & a_0 & 0   & 0   & 0   & b_1 & b_0 \\
  a_2 & a_1 & a_0 & 0   & 0   & b_2 & b_1 \\
  0   & a_2 & a_1 & a_0 & 0   & b_3 & b_2 \\
  0   & 0   & a_2 & a_1 & a_0 & b_4 & b_3 \\
  0   & 0   & 0   & a_2 & a_1 & b_5 & b_4 \\
  0   & 0   & 0   & 0   & a_2 & 0   & b_5 \\
\end{bmatrix}.
\]
:::

::: example
设 @standing-assumption-of-resultant 成立。
设 \(m = n = 1\)。
则 \(f(x) = a_0 x + a_1\)，
且 \(g(x) = b_0 x + b_1\)。
则 \(f\)、\(g\) 的 Sylvester 阵
\[
\begin{aligned}
  S(f, g; 1, 1) =
  \begin{bmatrix}
    a_0 & b_0 \\
    a_1 & b_1 \\
  \end{bmatrix},
\end{aligned}
\]
且
\[
\det {(S(f, g; 1, 1))} = a_0 b_1 - b_0 a_1.
\]
:::

::: example {@emp:morniszero}
设 @standing-assumption-of-resultant 成立。
设 \(n = 0\)。
则 \(f(x) = a_0\)。
则 \(m\) 级阵 \(S(f, g; \allowbreak
  0, m)\) 适合，
\[
\begin{aligned}
  [S(f, g; 0, m)]_{i,j} = a_{i-j} =
  \begin{cases}
    a_0, & i = j;       \\
    0,   & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则 \(S(f, g; 0, m) = a_0 I_m\)，
且 \(\det {(S(f, g; 0, m))} = a_0^m\)。

类似地，若 \(m = 0\)，
则 \(n\) 级阵 \(S(f, g; n, 0) = b_0 I_n\)，
且 \(\det {(S(f, g; n, 0))} = b_0^n\)。
:::

::: example
设 @standing-assumption-of-resultant 成立。
设 \(a_0 = 0 = b_0\)。
则 \(k \leqslant 0\) 时，\(a_k = 0 = b_k\)。
注意，当 \(j \leqslant m\) 时，
\([S(f, g; n, m)]_{1,j} \allowbreak
  = a_{1-j}\)，
而 \(1 - j \leqslant 0\)，
则 \([S(f, g; n, m)]_{1,j} \allowbreak
  = 0\)。
当 \(j > m\) 时，
\([S(f, g; n, m)]_{1,j} \allowbreak
  = b_{1 - (j - m)}\)，
而 \(1 - (j - m) \leqslant 0\)，
则 \([S(f, g; n, m)]_{1,j} \allowbreak
  = 0\)。
则 \(S(f, g; n, m)\) 的行 \(1\) 的元全是 \(0\)。
则 \(\det {(S(f, g; n, m))} = 0\)。
:::

我们给一个研究 Sylvester 阵的可能的原因。
设 @standing-assumption-of-resultant 成立。
设数 \(c\) 适合，\(f(c) = 0 = g(c)\)。
则
\[
\begin{aligned}
  a_0 c^n + a_1 c^{n-1} + \dots + a_n & = 0, \\
  b_0 c^m + b_1 c^{m-1} + \dots + b_m & = 0.
\end{aligned}
\]
若我们分别以 \(c^{m-1}\)、\(c^{m-2}\)、\(\dots\)、\(1\) 乘等式 1，
且分别以 \(c^{n-1}\)、\(c^{n-2}\)、\(\dots\)、\(1\) 乘等式 2，
我们得
\[
\begin{aligned}
  a_0 c^{m+n-1} + a_1 c^{m+n-2} + \dots + a_{n-1} c^{m} + a_n c^{m-1}   & = 0,   \\
  a_0 c^{m+n-2} + a_1 c^{m+n-3} + \dots + a_{n-1} c^{m-1} + a_n c^{m-2} & = 0,   \\
  & \dots, \\
  a_0 c^{n} + a_1 c^{n-1} + \dots + a_{n-1} c + a_n 1                   & = 0,   \\
  b_0 c^{m+n-1} + b_1 c^{m+n-2} + \dots + b_{m-1} c^{n} + b_m c^{n-1}   & = 0,   \\
  b_0 c^{m+n-2} + b_1 c^{m+n-3} + \dots + b_{m-1} c^{n-1} + b_m c^{n-2} & = 0,   \\
  & \dots, \\
  b_0 c^{m} + b_1 c^{m-1} + \dots + b_{m-1} c + b_m 1                   & = 0.
\end{aligned}
\]
回想，当 \(k < 0\) 或 \(k > n\) 时，\(a_k = 0\)，
且当 \(k < 0\) 或 \(k > m\) 时，\(b_k = 0\)。
于是，我们可写
\[
\begin{aligned}
  a_{0} c^{m+n-1} + a_{1} c^{m+n-2} + \dots + a_{m+n-2} c + a_{m+n-1} 1  & = 0,   \\
  a_{-1} c^{m+n-1} + a_{0} c^{m+n-2} + \dots + a_{m+n-3} c + a_{m+n-2} 1 & = 0,   \\
  & \dots, \\
  a_{1-m} c^{m+n-1} + a_{2-m} c^{m+n-2} + \dots + a_{n-1} c + a_{n} 1    & = 0,   \\
  b_{0} c^{m+n-1} + b_{1} c^{m+n-2} + \dots + b_{m+n-2} c + b_{m+n-1} 1  & = 0,   \\
  b_{-1} c^{m+n-1} + b_{0} c^{m+n-2} + \dots + b_{m+n-3} c + b_{m+n-2} 1 & = 0,   \\
  & \dots, \\
  b_{1-n} c^{m+n-1} + b_{2-n} c^{m+n-2} + \dots + b_{m-1} c + b_{m} 1    & = 0.
\end{aligned}
\]
作 \(1 \times (m + n)\) 阵
\(C = [c^{m+n-1}, c^{m+n-2}, \dots, c, 1]\)。
则
\[
\begin{aligned}
  S(f, g; n, m)^{\mathrm{T}}\, C^{\mathrm{T}} = 0.
\end{aligned}
\]
注意，线性方程组
\(S(f, g; n, m)^{\mathrm{T}}\, X = 0\)
有非零的解 \(X = C^{\mathrm{T}}\)。
故，由 Cramer 公式（见第 1 章，节 21）
与反证法，
\(S(f, g; n, m)^{\mathrm{T}}\) 的行列式一定是 \(0\)。
故 \(\det {(S(f, g; n, m))} = 0\)。

::: theorem {@thm:necessary-condition-for-the-existence-of-a-common-root}
设 @standing-assumption-of-resultant 成立。
设存在数 \(c\)，使 \(f(c) = 0 = g(c)\)。
则
\[
\begin{aligned}
  \det {(S(f, g; n, m))} = 0.
\end{aligned}
\]
:::

我们进一步地研究 Sylvester 阵。

::: theorem
设 @standing-assumption-of-resultant 成立。
作 \(1 \times (m+n)\) 阵 \(C_{m+n}\)，
其中，\([C_{m+n}]_{1,j} = x^{m+n-j}\)。
设 \(Y\) 是 \((m+n) \times 1\) 阵。
记
\[
\begin{aligned}
  u(x) = \sum_{k = 0}^{m-1} {[Y]_{k+1,1} x^{m-1-k}},
  \quad
  v(x) = \sum_{k = 0}^{n-1} {[Y]_{m+1+k,1} x^{n-1-k}}.
\end{aligned}
\]

(1) \(C_{m+n}\, S(f, g; n, m)\) 是 \(1 \times (m + n)\) 阵，
    且
    \[
    \begin{aligned}
      [C_{m+n}\, S(f, g; n, m)]_{1,j} =
      \begin{cases}
        f(x)\, x^{m-j},     & j \leqslant m; \\
        g(x)\, x^{n-(j-m)}, & j > m.
      \end{cases}
    \end{aligned}
    \]

(2) \(C_{m+n}\, S(f, g; n, m)\, Y\) 是 \(1\) 级阵，且
    \[
    \begin{aligned}
      [C_{m+n}\, S(f, g; n, m)\, Y]_{1,1} = f(x)\, u(x) + g(x)\, v(x).
    \end{aligned}
    \]

(3) 记
    \[
    \begin{aligned}
      f(x)\, u(x) + g(x)\, v(x) = \sum_{k = 0}^{m+n-1} {c_k x^{m+n-1-k}}.
    \end{aligned}
    \]
    则 \(S(f, g; n, m)\, Y\) 是 \((m+n) \times 1\) 阵，且
    \[
    \begin{aligned}
      c_k = [S(f, g; n, m)\, Y]_{k+1,1}.
    \end{aligned}
    \]
:::

::: proof
(1) 注意，
    \[
    \begin{aligned}
      [C_{m+n}\, S(f, g; n, m)]_{1,j}
      = {} &
      \sum_{\ell = 1}^{m+n}
      {[C_{m+n}]_{1,\ell} [S(f, g; n, m)]_{\ell,j}}
      \\
      = {} &
      \sum_{1 \leqslant \ell \leqslant m+n}
      {[S(f, g; n, m)]_{\ell,j} x^{m+n-\ell}}.
    \end{aligned}
    \]
    若 \(j \leqslant m\)，则
    \([S(f, g; n, m)]_{\ell,j} = a_{\ell-j}\)。
    则
    \[
    \begin{aligned}
      &
      [C_{m+n}\, S(f, g; n, m)]_{1,j}
      \\
      = {} &
      \sum_{1 \leqslant \ell \leqslant m+n}
      {a_{\ell-j} x^{m+n-\ell}}
      \\
      = {} &
      \sum_{1-j \leqslant \ell-j \leqslant m+n-j}
      {a_{\ell-j} x^{n-(\ell-j)+m-j}}
      \\
      = {} &
      \sum_{1-j \leqslant k \leqslant m+n-j}
      {a_k x^{n-k+m-j}}
      \\
      = {} &
      \sum_{\substack{
          1-j \leqslant k \leqslant m+n-j \\
          0 \leqslant k \leqslant n
      }}
      {a_k x^{n-k+m-j}}
      +
      \sum_{\substack{
          1-j \leqslant k \leqslant m+n-j \\
          k < 0 \,\text{或}\, k > n
      }}
      {a_k x^{n-k+m-j}}
      \\
      = {} &
      \sum_{0 \leqslant k \leqslant n}
      {a_k x^{n-k} x^{m-j}}
      +
      \sum_{\substack{
          1-j \leqslant k < 0 \\
          \text{或}\, n < k \leqslant m+n-j
      }}
      {0\, x^{n-k+m-j}}
      \\
      = {} &
      f(x)\, x^{m-j}.
    \end{aligned}
    \]
    若 \(j > m\)，则
    \([S(f, g; n, m)]_{\ell,j} = b_{\ell-(j-m)}\)。
    则
    \[
    \begin{aligned}
      &
      [C_{m+n}\, S(f, g; n, m)]_{1,j}
      \\
      = {} &
      \sum_{1 \leqslant \ell \leqslant m+n}
      {b_{\ell-(j-m)} x^{m+n-\ell}}
      \\
      = {} &
      \sum_{1-(j-m) \leqslant \ell-(j-m) \leqslant m+n-(j-m)}
      {b_{\ell-(j-m)} x^{m-(\ell-(j-m))+n-(j-m)}}
      \\
      = {} &
      \sum_{1-(j-m) \leqslant k \leqslant m+n-(j-m)}
      {b_k x^{m-k+n-(j-m)}}
      \\
      = {} &
      \sum_{\substack{
          1-(j-m) \leqslant k \leqslant m+n-(j-m) \\
          0 \leqslant k \leqslant m
      }}
      {b_k x^{m-k+n-(j-m)}}
      +
      \sum_{\substack{
          1-(j-m) \leqslant k \leqslant m+n-(j-m) \\
          k < 0 \,\text{或}\, k > m
      }}
      {b_k x^{m-k+n-(j-m)}}
      \\
      = {} &
      \sum_{0 \leqslant k \leqslant m}
      {b_k x^{m-k} x^{n-(j-m)}}
      +
      \sum_{\substack{
          1-(j-m) \leqslant k < 0 \\
          \text{或}\, m < k \leqslant m+n-(j-m)
      }}
      {0\, x^{m-k+n-(j-m)}}
      \\
      = {} &
      g(x)\, x^{n-(j-m)}.
    \end{aligned}
    \]

(2) 注意，
    \[
    \begin{aligned}
      &
      [C_{m+n}\, S(f, g; n, m)\, Y]_{1,1}
      \\
      = {} &
      [(C_{m+n}\, S(f, g; n, m))\, Y]_{1,1}
      \\
      = {} &
      \sum_{j = 1}^{m+n}
      {[C_{m+n}\, S(f, g; n, m)]_{1,j} [Y]_{j,1}}
      \\
      = {} &
      \sum_{j = 1}^{m}
      {[C_{m+n}\, S(f, g; n, m)]_{1,j} [Y]_{j,1}}
      +
      \sum_{j = m+1}^{m+n}
      {[C_{m+n}\, S(f, g; n, m)]_{1,j} [Y]_{j,1}}
      \\
      = {} &
      \sum_{j = 1}^{m}
      {f(x)\, x^{m-j}\, [Y]_{j,1}}
      +
      \sum_{j = m+1}^{m+n}
      {g(x)\, x^{n-(j-m)}\, [Y]_{j,1}}
      \\
      = {} &
      f(x)
      \sum_{j = 1}^{m}
      {x^{m-j}\, [Y]_{j,1}}
      +
      g(x)
      \sum_{j = m+1}^{m+n}
      {x^{n-(j-m)}\, [Y]_{j,1}}
      \\
      = {} &
      f(x)
      \sum_{j = 1}^{m}
      {x^{m-1-(j-1)}\, [Y]_{(j-1)+1,1}}
      +
      g(x)
      \sum_{j = m+1}^{m+n}
      {x^{n-1-(j-m-1)}\, [Y]_{m+1+(j-m-1),1}}
      \\
      = {} &
      f(x)
      \sum_{k = 0}^{m-1}
      {[Y]_{k+1,1} x^{m-1-k}}
      +
      g(x)
      \sum_{k = 0}^{n-1}
      {[Y]_{m+1+k,1} x^{n-1-k}}
      \\
      = {} &
      f(x)\, u(x) + g(x)\, v(x).
    \end{aligned}
    \]

(3) 注意，
    \[
    \begin{aligned}
      [C_{m+n}\, S(f, g; n, m)\, Y]_{1,1}
      = {} &
      [C_{m+n}\, (S(f, g; n, m)\, Y)]_{1,1}
      \\
      = {} &
      \sum_{j = 1}^{m+n}
      {[C_{m+n}]_{1,j} [S(f, g; n, m)\, Y]_{j,1}}
      \\
      = {} &
      \sum_{j = 1}^{m+n}
      {x^{m+n-j} [S(f, g; n, m)\, Y]_{j,1}}
      \\
      = {} &
      \sum_{j = 1}^{m+n}
      {[S(f, g; n, m)\, Y]_{(j-1)+1,1} x^{m+n-1-(j-1)}}
      \\
      = {} &
      \sum_{k = 0}^{m+n-1}
      {[S(f, g; n, m)\, Y]_{k+1,1} x^{m+n-1-k}}.
    \end{aligned}
    \]
    故，对不超过 \(m+n-1\) 的非负整数 \(k\)，
    \[
    [S(f, g; n, m)\, Y]_{k+1,1} = c_k.
    \]
:::

::: theorem
设 \(A\) 是 \(n\) 级阵。
则存在 \(n \times 1\) 阵 \(P\)，
使
\[
\begin{aligned}
  [A P]_{i,1} =
  \begin{cases}
    \det {(A)}, & i = n;       \\
    0,          & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
进一步地，我们可要求，\(P \neq 0\)。
:::

::: proof
设 \(W\) 是 \(A\) 的古伴 \(\operatorname{adj} {(A)}\) 的列 \(n\)。
则
\[
\begin{aligned}
  [A W]_{i,1}
  = {} &
  \sum_{j = 1}^{n} {[A]_{i,j} [W]_{j,1}}
  \\
  = {} &
  \sum_{j = 1}^{n} {[A]_{i,j} [\operatorname{adj} {(A)}]_{j,n}}
  \\
  = {} &
  [A \operatorname{adj} {(A)}]_{i,n}
  \\
  = {} &
  [\det {(A)}\, I_n]_{i,n}
  \\
  = {} &
  \det {(A)}\, [I_n]_{i,n}.
\end{aligned}
\]
取 \(P\) 为 \(W\) 即可。

设，进一步地，我们要求，\(P \neq 0\)。
若 \(W \neq 0\)，则我们仍取 \(P\) 为 \(W\)。
若 \(W = 0\)，则
\(\det {(A)} = [A W]_{i,n} = [A\, 0]_{i,n} = [0]_{i,n} = 0\)。
则，由第 1 章，节 *23*，
或由第 1 章，节 *25*，
或由“REF 阵、线性方程组、秩”，
存在非零的 \(n \times 1\) 阵 \(Q\)，
使 \(A Q = 0\)。
取 \(P\) 为 \(Q\) 即可。
:::

::: theorem {@thm:resultant-Bézout}
设 @standing-assumption-of-resultant 成立。

(1) 存在整式 \(u\)、\(v\)，使
    \[
    \begin{aligned}
      f(x)\, u(x) + g(x)\, v(x) = \det {(S(f, g; n, m))}.
    \end{aligned}
    \]
    注意，上式的右边不含 \(x\)
    （因为 \(S(f, g; n, m)\) 不含 \(x\)）。

(2) 设存在数 \(c\)，使 \(f(c) = 0 = g(c)\)。
    则
    \[
    \begin{aligned}
      \det {(S(f, g; n, m))} = 0.
    \end{aligned}
    \]
:::

::: proof
(1) 我们知道，存在 \((m + n) \times 1\) 阵 \(P\)，
    使
    \[
    \begin{aligned}
      [S(f, g; n, m)\, P]_{i,1} =
      \begin{cases}
        \det {(S(f, g; n, m))}, & i = m + n;   \\
        0,                      & \text{别的情形}.
      \end{cases}
    \end{aligned}
    \]
    记
    \[
    \begin{aligned}
      u(x) = \sum_{k = 0}^{m-1} {[P]_{k+1,1} x^{m-1-k}},
      \quad
      v(x) = \sum_{k = 0}^{n-1} {[P]_{m+1+k,1} x^{n-1-k}}.
    \end{aligned}
    \]
    则
    \[
    \begin{aligned}
      f(x)\, u(x) + g(x)\, v(x) = \sum_{k = 0}^{m+n-1} {c_k x^{m+n-1-k}},
    \end{aligned}
    \]
    其中，
    \[
    \begin{aligned}
      c_k = [S(f, g; n, m)\, P]_{k+1,1} =
      \begin{cases}
        \det {(S(f, g; n, m))}, & k = m + n - 1; \\
        0,                      & \text{别的情形}.
      \end{cases}
    \end{aligned}
    \]

(2) 我们其实已证它
    （@thm:necessary-condition-for-the-existence-of-a-common-root），
    但我们现在别地证它。
    注意，代 \(x\) 以 \(c\)，得
    \[
    \det {(S(f, g; n, m))}
    = f(c)\, u(c) + g(c)\, v(c)
    = 0.
    \]
:::

有一件事，其值得提。
设 @standing-assumption-of-resultant 成立。
对 \(m + n\) 级阵 \(S(f, g; n, m)\)，
我们加行 \(i\) 的 \(x^{m+n-i}\) 倍于行 \(m + n\)，
\(i = 1\)、\(\dots\)、\(m + n - 1\)，
得阵 \(S^* (f, g; n, m)\)。
那么，一方面，
\(\det {(S^* (f, g; n, m))} = \det {(S(f, g; n, m))}\)。
另一方面，若 \(j \leqslant m\)，则
\[
\begin{aligned}
  &
  [S^* (f, g; n, m)]_{m+n,j}
  \\
  = {} &
  [S(f, g; n, m)]_{m+n,j}
  + \sum_{1 \leqslant \ell \leqslant m+n-1}
  {x^{m+n-\ell} [S(f, g; n, m)]_{\ell,j}}
  \\
  = {} &
  a_{m+n-j} x^0
  + \sum_{1 \leqslant \ell \leqslant m+n-1}
  {a_{\ell-j} x^{m+n-\ell}}
  \\
  = {} &
  \sum_{1 \leqslant \ell \leqslant m+n}
  {a_{\ell-j} x^{m+n-\ell}}
  \\
  = {} &
  \sum_{1-j \leqslant \ell-j \leqslant m+n-j}
  {a_{\ell-j} x^{n-(\ell-j)+m-j}}
  \\
  = {} &
  \sum_{1-j \leqslant k \leqslant m+n-j}
  {a_k x^{n-k+m-j}}
  \\
  = {} &
  \sum_{\substack{
      1-j \leqslant k \leqslant m+n-j \\
      0 \leqslant k \leqslant n
  }}
  {a_k x^{n-k+m-j}}
  +
  \sum_{\substack{
      1-j \leqslant k \leqslant m+n-j \\
      k < 0 \,\text{或}\, k > n
  }}
  {a_k x^{n-k+m-j}}
  \\
  = {} &
  \sum_{0 \leqslant k \leqslant n}
  {a_k x^{n-k} x^{m-j}}
  +
  \sum_{\substack{
      1-j \leqslant k < 0 \\
      \text{或}\, n < k \leqslant m+n-j
  }}
  {0\, x^{n-k+m-j}}
  \\
  = {} &
  f(x)\, x^{m-j};
\end{aligned}
\]
若 \(j > m\)，则
\[
\begin{aligned}
  &
  [S^* (f, g; n, m)]_{m+n,j}
  \\
  = {} &
  [S(f, g; n, m)]_{m+n,j}
  + \sum_{1 \leqslant \ell \leqslant m+n-1}
  {x^{m+n-\ell} [S(f, g; n, m)]_{\ell,j}}
  \\
  = {} &
  b_{m+n-(j-m)} x^0
  + \sum_{1 \leqslant \ell \leqslant m+n-1}
  {b_{\ell-(j-m)} x^{m+n-\ell}}
  \\
  = {} &
  \sum_{1 \leqslant \ell \leqslant m+n}
  {b_{\ell-(j-m)} x^{m+n-\ell}}
  \\
  = {} &
  \sum_{1-(j-m) \leqslant \ell-(j-m) \leqslant m+n-(j-m)}
  {b_{\ell-(j-m)} x^{m-(\ell-(j-m))+n-(j-m)}}
  \\
  = {} &
  \sum_{1-(j-m) \leqslant k \leqslant m+n-(j-m)}
  {b_k x^{m-k+n-(j-m)}}
  \\
  = {} &
  \sum_{\substack{
      1-(j-m) \leqslant k \leqslant m+n-(j-m) \\
      0 \leqslant k \leqslant m
  }}
  {b_k x^{m-k+n-(j-m)}}
  +
  \sum_{\substack{
      1-(j-m) \leqslant k \leqslant m+n-(j-m) \\
      k < 0 \,\text{或}\, k > m
  }}
  {b_k x^{m-k+n-(j-m)}}
  \\
  = {} &
  \sum_{0 \leqslant k \leqslant m}
  {b_k x^{m-k} x^{n-(j-m)}}
  +
  \sum_{\substack{
      1-(j-m) \leqslant k < 0 \\
      \text{或}\, m < k \leqslant m+n-(j-m)
  }}
  {0\, x^{m-k+n-(j-m)}}
  \\
  = {} &
  g(x)\, x^{n-(j-m)}.
\end{aligned}
\]
所以，若存在数 \(c\)，使 \(f(c) = 0 = g(c)\)，
则 \(S^* (f, g; n, m)\) 的行 \(m + n\) 的元全是 \(0\)。
则
\[
\begin{aligned}
  \det {(S(f, g; n, m))}
  = \det {(S^* (f, g; n, m))}
  = 0.
\end{aligned}
\]

::: theorem {@thm:resultant-swap}
设 @standing-assumption-of-resultant 成立。

(1) \(S(g, f; m, n)\) 是 \(m + n\) 级阵，
    且 \(S(f, g; n, m)\) 的列 \(j\) 是
    \(S(g, f; m, n)\) 的列 \(n + j\)
    （若 \(j \leqslant m\)）
    或 \(S(g, f; m, n)\) 的列 \(j - m\)
    （若 \(j > m\)）。

(2) \(\det {(S(g, f; m, n))}
    = (-1)^{m n} \det {(S(f, g; n, m))}\)。
:::

::: proof
(1) 注意，\(S(g, f; m, n)\) 是这样的 \(m + n\) 级阵：
    \[
    \begin{aligned}
      [S(g, f; m, n)]_{i,j} =
      \begin{cases}
        b_{i-j},     & j \leqslant n; \\
        a_{i-(j-n)}, & j > n.
      \end{cases}
    \end{aligned}
    \]
    故，若 \(j \leqslant m\)，
    \[
    \begin{aligned}
      [S(f, g; n, m)]_{i,j}
      = a_{i-j}
      = a_{i-(n+j-n)}
      = [S(g, f; m, n)]_{i,n+j},
    \end{aligned}
    \]
    且若 \(j > m\)，
    \[
    \begin{aligned}
      [S(f, g; n, m)]_{i,j}
      = b_{i-(j-m)}
      = [S(g, f; m, n)]_{i,j-m}.
    \end{aligned}
    \]

(2) 若 \(m = 0\) 或 \(n = 0\)，
    则这是平凡地对的
    （见 @emp:morniszero）。

设 \(m \geqslant 1\) 且 \(n \geqslant 1\)。
对 \(S(g, f; m, n)\)，
交换列 \(n + 1\) 与列 \(n\)，
再交换新的阵的列 \(n\) 与列 \(n - 1\)，
……
再交换新的阵的列 \(2\) 与列 \(1\)，
我们作了 \(n\) 次相邻的列的交换，
使 \(S(g, f; m, n)\) 的列 \(n + 1\) 到列 \(1\)，
且别的列的相对位置不变。
类似地，我们也可使这个阵的
列 \(n + 2\)、\(\dots\)、\(n + m\)
分别地到
列 \(2\)、\(\dots\)、\(m\)。
则 \(S(g, f; m, n)\) 的列 \(1\)、\(\dots\)、\(n\)
分别地到
列 \(m + 1\)、\(\dots\)、\(m + n\)。
则 \(n \cdot m\) 次相邻的列的交换
变 \(S(g, f; m, n)\) 为 \(S(f, g; n, m)\)。
则
\(\det {(S(g, f; m, n))}
  = (-1)^{m n} \det {(S(f, g; n, m))}\)。
:::

::: theorem {@thm:resultant-recursive}
设 @standing-assumption-of-resultant 成立。
设 \(t\) 是数，且
\[
\begin{aligned}
  h(x)
  = f(x)\, (x - t)
  = \sum_{k = 0}^{n+1} {c_k x^{n+1-k}}.
\end{aligned}
\]
我们约定，若 \(k < 0\) 或 \(k > n+1\)，则 \(c_k = 0\)。
则
\[
\begin{aligned}
  \det {(S(h, g; n+1, m))} = \det {(S(f, g; n, m))}\, g(t),
\end{aligned}
\]
且
\[
\begin{aligned}
  \det {(S(g, h; m, n+1))} = (-1)^m \det {(S(g, f; m, n))}\, g(t).
\end{aligned}
\]
:::

::: proof
我们证式 1；
您用式 1 与 @thm:resultant-swap 证式 2。

注意，由整式的乘法，
\[
\begin{aligned}
  c_k =
  \begin{cases}
    a_0,             & k = 0;           \\
    a_k - t a_{k-1}, & 1 \leqslant k \leqslant n; \\
    -t a_n,          & k = n + 1.
  \end{cases}
\end{aligned}
\]
回想，若 \(k < 0\) 或 \(k > n\)，
则 \(a_k = 0\)。
于是，统一地，\(c_k = a_k - t a_{k-1}\)。
注意，\(a_k = c_k + t a_{k-1}\)。

我们记
\(g_\ell (x) = 0\)
（若 \(\ell < 0\)），
且
\(g_\ell (x) = g_{\ell-1} (x)\, x + b_\ell\)
（若 \(\ell \geqslant 0\)）。
则对任何整数 \(\ell\)，
\(g_\ell (t) = b_\ell + t g_{\ell-1} (t)\)。
注意，\(b_\ell = g_\ell (t) - t g_{\ell-1} (t)\)。

注意，\(m + n + 1\) 级阵 \(S(h, g; n+1, m)\) 等于
\[
\begin{aligned}
  \begin{bmatrix}
    c_{0}   & c_{-1}    & c_{-2}    & \cdots & c_{1-m}   & b_{0}   & b_{-1}    & \cdots & b_{-n}  \\
    c_{1}   & c_{0}     & c_{-1}    & \cdots & c_{2-m}   & b_{1}   & b_{0}     & \cdots & b_{1-n} \\
    c_{2}   & c_{1}     & c_{0}     & \cdots & c_{3-m}   & b_{2}   & b_{1}     & \cdots & b_{2-n} \\
    \vdots  & \vdots    & \vdots    & {}     & \vdots    & \vdots  & \vdots    & {}     & \vdots  \\
    c_{n}   & c_{n-1}   & c_{n-2}   & \cdots & c_{n+1-m} & b_{n}   & b_{n-1}   & \cdots & b_{0}   \\
    c_{n+1} & c_{n}     & c_{n-1}   & \cdots & c_{n+2-m} & b_{n+1} & b_{n}     & \cdots & b_{1}   \\
    \vdots  & \vdots    & \vdots    & {}     & \vdots    & \vdots  & \vdots    & {}     & \vdots  \\
    c_{m+n} & c_{m+n-1} & c_{m+n-2} & \cdots & c_{n+1}   & b_{m+n} & b_{m+n-1} & \cdots & b_{m}   \\
  \end{bmatrix},
\end{aligned}
\]
即
\[
\begin{aligned}
  \begin{bmatrix}
    a_{0}   & a_{-1}    & a_{-2}    & \cdots & a_{1-m}   & g_{0} (t) & g_{-1} (t) & \cdots & g_{-n} (t) \\
    c_{1}   & c_{0}     & c_{-1}    & \cdots & c_{2-m}   & b_{1}     & b_{0}      & \cdots & b_{1-n}    \\
    c_{2}   & c_{1}     & c_{0}     & \cdots & c_{3-m}   & b_{2}     & b_{1}      & \cdots & b_{2-n}    \\
    \vdots  & \vdots    & \vdots    & {}     & \vdots    & \vdots    & \vdots     & {}     & \vdots     \\
    c_{n}   & c_{n-1}   & c_{n-2}   & \cdots & c_{n+1-m} & b_{n}     & b_{n-1}    & \cdots & b_{0}      \\
    c_{n+1} & c_{n}     & c_{n-1}   & \cdots & c_{n+2-m} & b_{n+1}   & b_{n}      & \cdots & b_{1}      \\
    \vdots  & \vdots    & \vdots    & {}     & \vdots    & \vdots    & \vdots     & {}     & \vdots     \\
    c_{m+n} & c_{m+n-1} & c_{m+n-2} & \cdots & c_{n+1}   & b_{m+n}   & b_{m+n-1}  & \cdots & b_{m}      \\
  \end{bmatrix}.
\end{aligned}
\]
我们加行 \(1\) 的 \(t\) 倍于行 \(2\)，
再加行 \(2\) 的 \(t\) 倍于行 \(3\)，
……
再加行 \(m+n\) 的 \(t\) 倍于行 \(m+n+1\)，
得 \(m+n+1\) 级阵
\[
\begin{aligned}
  S_1 =
  \begin{bmatrix}
    a_{0}   & a_{-1}    & a_{-2}    & \cdots & a_{1-m}   & g_{0} (t)   & g_{-1} (t)    & \cdots & g_{-n} (t)  \\
    a_{1}   & a_{0}     & a_{-1}    & \cdots & a_{2-m}   & g_{1} (t)   & g_{0} (t)     & \cdots & g_{1-n} (t) \\
    a_{2}   & a_{1}     & a_{0}     & \cdots & a_{3-m}   & g_{2} (t)   & g_{1} (t)     & \cdots & g_{2-n} (t) \\
    \vdots  & \vdots    & \vdots    & {}     & \vdots    & \vdots      & \vdots        & {}     & \vdots      \\
    a_{n}   & a_{n-1}   & a_{n-2}   & \cdots & a_{n+1-m} & g_{n} (t)   & g_{n-1} (t)   & \cdots & g_{0} (t)   \\
    a_{n+1} & a_{n}     & a_{n-1}   & \cdots & a_{n+2-m} & g_{n+1} (t) & g_{n} (t)     & \cdots & g_{1} (t)   \\
    \vdots  & \vdots    & \vdots    & {}     & \vdots    & \vdots      & \vdots        & {}     & \vdots      \\
    a_{m+n} & a_{m+n-1} & a_{m+n-2} & \cdots & a_{n+1}   & g_{m+n} (t) & g_{m+n-1} (t) & \cdots & g_{m} (t)   \\
  \end{bmatrix}.
\end{aligned}
\]
我们知道，\(\det {(S_1)} = \det {(S(h, g; n+1, m))}\)。

我们加列 \(m+2\) 的 \(-t\) 倍于列 \(m+1\)，
再加列 \(m+3\) 的 \(-t\) 倍于列 \(m+2\)，
……
再加列 \(m+n+1\) 的 \(-t\) 倍于列 \(m+n\)，
得 \(m+n+1\) 级阵
\[
\begin{aligned}
  S_2 =
  \begin{bmatrix}
    a_{0}   & a_{-1}    & a_{-2}    & \cdots & a_{1-m}   & b_{0}   & b_{-1}    & \cdots & g_{-n} (t)  \\
    a_{1}   & a_{0}     & a_{-1}    & \cdots & a_{2-m}   & b_{1}   & b_{0}     & \cdots & g_{1-n} (t) \\
    a_{2}   & a_{1}     & a_{0}     & \cdots & a_{3-m}   & b_{2}   & b_{1}     & \cdots & g_{2-n} (t) \\
    \vdots  & \vdots    & \vdots    & {}     & \vdots    & \vdots  & \vdots    & {}     & \vdots      \\
    a_{n}   & a_{n-1}   & a_{n-2}   & \cdots & a_{n+1-m} & b_{n}   & b_{n-1}   & \cdots & g_{0} (t)   \\
    a_{n+1} & a_{n}     & a_{n-1}   & \cdots & a_{n+2-m} & b_{n+1} & b_{n}     & \cdots & g_{1} (t)   \\
    \vdots  & \vdots    & \vdots    & {}     & \vdots    & \vdots  & \vdots    & {}     & \vdots      \\
    a_{m+n} & a_{m+n-1} & a_{m+n-2} & \cdots & a_{n+1}   & b_{m+n} & b_{m+n-1} & \cdots & g_{m} (t)   \\
  \end{bmatrix}.
\end{aligned}
\]
我们知道，\(\det {(S_2)} = \det {(S_1)}\)。
则 \(\det {(S_2)} = \det {(S(h, g; n+1, m))}\)。
注意，
\[
\begin{aligned}
  [S_2]_{i,j} =
  \begin{cases}
    a_{i-j},       & j \leqslant m;         \\
    b_{i-(j-m)},   & m < j \leqslant m + n; \\
    g_{i-1-n} (t), & j = m + n + 1.
  \end{cases}
\end{aligned}
\]
于是，当 \(i = m + n + 1\) 时，
若 \(j \leqslant m\)，
则 \([S_2]_{i,j} = a_{n+1+(m-j)} = 0\)
（注意，\(n+1+(m-j) > n\)），
且若 \(m < j \leqslant m + n\)，
则 \([S_2]_{i,j} = b_{m+1+(m+n-j)} = 0\)
（注意，\(m+1+(m+n-j) > m\)）。
注意，\(S_2 ({m+n+1}|{m+n+1}) = S(f, g; n, m)\)。
注意，\(g_m (t) = g(t)\)。
于是，按行 \(m+n+1\) 展开，
\[
\begin{aligned}
  &
  \det {(S(h, g; n+1, m))}
  \\
  = {} &
  \det {(S_2)}
  \\
  = {} &
  (-1)^{(m+n+1) + (m+n+1)} g_m (t) \det {(S_2 ({m+n+1}|{m+n+1}))}
  \\
  = {} &
  \det {(S(f, g; n, m))}\, g(t).
\end{aligned}
\]
:::

::: theorem
设 @standing-assumption-of-resultant 成立。
若 \(f(x) = a_0 (x - x_1) \dots (x - x_n)\)，则
\[
\begin{aligned}
  \det {(S(f, g; n, m))} = a_0^m g(x_1) g(x_2) \dots g(x_n).
\end{aligned}
\]
类似地，
若 \(g(x) = b_0 (x - y_1) \dots (x - y_m)\)，则
\[
\begin{aligned}
  \det {(S(f, g; n, m))} = (-1)^{mn} b_0^n f(y_1) f(y_2) \dots f(y_m).
\end{aligned}
\]
:::

::: proof
我们证式 1；
您用式 1 与 @thm:resultant-swap 证式 2。

若 \(m = 0\)，
则式 1 的左边是 \(b_0^n\)，
且式 1 的右边是
\(a_0^0 g(x_1) \dots g(x_n) = 1 \cdot b_0^n\)
（注意，\(g(x) = b_0\)）。

以下，我们设 \(m \geqslant 1\)。

记 \(F_0 (x) = a_0\)，
且 \(F_i (x) = F_{i-1} (x)\, (x - x_i)\)。
则
\[
\begin{aligned}
  \det {(S(f, g; n, m))}
  = {} &
  \det {(S(F_n, g; n, m))}
  \\
  = {} &
  \det {(S(F_{n-1}, g; n-1, m))}\,
  g(x_n)
  \\
  = {} &
  \det {(S(F_{n-2}, g; n-2, m))}\,
  g(x_{n-1}) g(x_n)
  \\
  = {} &
  \dots
  \\
  = {} &
  \det {(S(F_0, g; 0, m))}\,
  g(x_1) g(x_2) \dots g(x_n)
  \\
  = {} &
  a_0^m g(x_1) g(x_2) \dots g(x_n).
\end{aligned}
\]
:::

::: theorem
设 @standing-assumption-of-resultant 成立。

(1) 设存在数 \(c\)，使 \(f(c) = 0 = g(c)\)。
    则 \(\det {(S(f, g; n, m))} = 0\)。

(2) 设 \(\det {(S(f, g; n, m))} = 0\)。
    则 \(a_0 = 0 = b_0\)，
    或当 \(a_0 \neq 0\) 或 \(b_0 \neq 0\) 时，
    存在数 \(c\)，使 \(f(c) = 0 = g(c)\)。
:::

::: proof
(1) 我们其实已证它
    （@thm:necessary-condition-for-the-existence-of-a-common-root，
    @thm:resultant-Bézout），
    但我们现在别地证它。

若 \(a_0 = 0 = b_0\)，则 \(\det {(S(f, g; n, m))} = 0\)。

若 \(a_0 \neq 0\)，则我们可写
\(f(x) = a_0 (x - x_1) (x - x_2) \dots (x - x_n)\)，
其中，\(x_1\)、\(x_2\)、\(\dots\)、\(x_n\) 是数。
因为 \(f(c) = 0\)，
\(a_0\)、\(c - x_1\)、\(c - x_2\)、\(\dots\)、\(c - x_n\)
的一个是 \(0\)。
因为 \(a_0 \neq 0\)，
某 \(c - x_i\) 是 \(0\)。
则 \(c\) 等于此 \(x_i\)。
则
\(\det {(S(f, g; n, m))}
  = a_0^m g(x_1) g(x_2) \dots g(x_n) = 0\)，
因为 \(g(x_i) = g(c) = 0\)。

若 \(b_0 \neq 0\)，您可类似地证它：
注意，

```math {@eq:resultant-in-terms-of-roots-of-g}
\det {(S(f, g; n, m))}
= (-1)^{m n} b_0^n f(y_1) f(y_2) \dots f(y_m),
```

其中，

```math {@eq:roots-of-g}
g(x) = b_0 (x - y_1) (x - y_2) \dots (x - y_m).
```

(2) 若 \(a_0 = 0 = b_0\)，则 \(\det {(S(f, g; n, m))} = 0\)。

若 \(a_0 \neq 0\)，则我们可写
\(f(x) = a_0 (x - x_1) (x - x_2) \dots (x - x_n)\)，
其中，\(x_1\)、\(x_2\)、\(\dots\)、\(x_n\) 是数。
注意，
\(f(x_1)\)、\(f(x_2)\)、\(\dots\)、\(f(x_n)\) 都是 \(0\)。
则
\[
\begin{aligned}
  0
  = \det {(S(f, g; n, m))}
  = a_0^m g(x_1) g(x_2) \dots g(x_n).
\end{aligned}
\]
因为 \(a_0 \neq 0\)，
我们说，
在 \(g(x_1)\)、\(g(x_2)\)、\(\dots\)、\(g(x_n)\)，
\(0\) 存在。

若 \(b_0 \neq 0\)，您可类似地证它：
注意式 @eq:resultant-in-terms-of-roots-of-g，
若式 @eq:roots-of-g。
:::

::: theorem
设 @standing-assumption-of-resultant 成立。
设 \(m \geqslant n\)。

设
\[
\begin{aligned}
  q(x) = \sum_{k = 0}^{m-n} {c_k x^{m-n-k}}.
\end{aligned}
\]
为方便，我们约定，
若 \(k < 0\) 或 \(k > m - n\)，则 \(c_k = 0\)。

设
\[
\begin{aligned}
  p(x) = g(x) + f(x) q(x) = \sum_{k = 0}^{m} {d_k x^{m-k}}.
\end{aligned}
\]
为方便，我们约定，
若 \(k < 0\) 或 \(k > m\)，则 \(d_k = 0\)。

则
\[
\begin{aligned}
  & \det {(S(f, p; n, m))} = \det {(S(f, g; n, m))}, \\
  & \det {(S(p, f; m, n))} = \det {(S(g, f; m, n))}.
\end{aligned}
\]
:::

::: proof
我们证式 1；
您用式 1 与 @thm:resultant-swap 证式 2。

若 \(n = 0\)，
则 \(S(f, p; 0, m) = a_0 I_m = S(f, g; 0, m)\)。

以下，我们设 \(n \geqslant 1\)。

由整式的加法与乘法，
\[
\begin{aligned}
  d_k =
  \begin{dcases}
    b_k + \sum_{\ell = 0}^{k} {a_{k-\ell} c_{\ell}},
    & 0 \leqslant k \leqslant m; \\
    0,
    & \text{别的情形}.
  \end{dcases}
\end{aligned}
\]
注意，若 \(0 \leqslant k \leqslant m\)，
\[
\begin{aligned}
  \sum_{\ell = 0}^{k} {a_{k-\ell} c_{\ell}}
  = \sum_{\ell = 0}^{m-n} {a_{k-\ell} c_{\ell}}.
\end{aligned}
\]
（若 \(k \leqslant m-n\)，
则当 \(\ell > k\) 时，\(a_{k-\ell} = 0\)。
若 \(k > m-n\)，
则当 \(\ell > m - n\) 时，\(c_{\ell} = 0\)）。
并且，当 \(k < 0\) 或 \(k > m\) 时，
\[
\begin{aligned}
  \sum_{\ell = 0}^{m-n} {a_{k-\ell} c_{\ell}} = 0.
\end{aligned}
\]
（若 \(k < 0\)，
则当 \(\ell \geqslant 0\) 时，\(k - \ell < 0\)，
故 \(a_{k-\ell} = 0\)。
若 \(k > m\)，
则当 \(\ell \leqslant m - n\) 时，
\(k - \ell > m - \ell \geqslant m - (m - n) = n\)，
故 \(a_{k-\ell} = 0\)。）
于是，统一地，我们可写
\[
\begin{aligned}
  d_k = b_k + \sum_{\ell = 0}^{m-n} {a_{k-\ell} c_{\ell}}.
\end{aligned}
\]
我们考虑 \(\det {(S(f, p; n, m))}\)
与 \(\det {(S(f, g; n, m))}\)
的关系。

注意，\(m + n\) 级阵 \(S(f, g; n, m)\) 等于
\[
\begin{aligned}
  \begin{bmatrix}
    a_{0}     & a_{-1}    & a_{-2}    & \cdots & a_{1-m}   & b_{0}     & b_{-1}    & \cdots & b_{1-n} \\
    a_{1}     & a_{0}     & a_{-1}    & \cdots & a_{2-m}   & b_{1}     & b_{0}     & \cdots & b_{2-n} \\
    a_{2}     & a_{1}     & a_{0}     & \cdots & a_{3-m}   & b_{2}     & b_{1}     & \cdots & b_{3-n} \\
    \vdots    & \vdots    & \vdots    & {}     & \vdots    & \vdots    & \vdots    & {}     & \vdots  \\
    a_{n-1}   & a_{n-2}   & a_{n-3}   & \cdots & a_{n-m}   & b_{n-1}   & b_{n-2}   & \cdots & b_{0}   \\
    a_{n}     & a_{n-1}   & a_{n-2}   & \cdots & a_{n+1-m} & b_{n}     & b_{n-1}   & \cdots & b_{1}   \\
    a_{n+1}   & a_{n}     & a_{n-1}   & \cdots & a_{n+2-m} & b_{n+1}   & b_{n}     & \cdots & b_{2}   \\
    \vdots    & \vdots    & \vdots    & {}     & \vdots    & \vdots    & \vdots    & {}     & \vdots  \\
    a_{m+n-1} & a_{m+n-2} & a_{m+n-3} & \cdots & a_{n}     & b_{m+n-1} & b_{m+n-2} & \cdots & b_{m}   \\
  \end{bmatrix},
\end{aligned}
\]
且 \(m + n\) 级阵 \(S(f, p; n, m)\) 等于
\[
\begin{aligned}
  \begin{bmatrix}
    a_{0}     & a_{-1}    & a_{-2}    & \cdots & a_{1-m}   & d_{0}     & d_{-1}    & \cdots & d_{1-n} \\
    a_{1}     & a_{0}     & a_{-1}    & \cdots & a_{2-m}   & d_{1}     & d_{0}     & \cdots & d_{2-n} \\
    a_{2}     & a_{1}     & a_{0}     & \cdots & a_{3-m}   & d_{2}     & d_{1}     & \cdots & d_{3-n} \\
    \vdots    & \vdots    & \vdots    & {}     & \vdots    & \vdots    & \vdots    & {}     & \vdots  \\
    a_{n-1}   & a_{n-2}   & a_{n-3}   & \cdots & a_{n-m}   & d_{n-1}   & d_{n-2}   & \cdots & d_{0}   \\
    a_{n}     & a_{n-1}   & a_{n-2}   & \cdots & a_{n+1-m} & d_{n}     & d_{n-1}   & \cdots & d_{1}   \\
    a_{n+1}   & a_{n}     & a_{n-1}   & \cdots & a_{n+2-m} & d_{n+1}   & d_{n}     & \cdots & d_{2}   \\
    \vdots    & \vdots    & \vdots    & {}     & \vdots    & \vdots    & \vdots    & {}     & \vdots  \\
    a_{m+n-1} & a_{m+n-2} & a_{m+n-3} & \cdots & a_{n}     & d_{m+n-1} & d_{m+n-2} & \cdots & d_{m}   \\
  \end{bmatrix}.
\end{aligned}
\]
注意，\(j > m\) 时，
\[
\begin{aligned}
  d_{i-(j-m)}
  = {} &
  b_{i-(j-m)} + \sum_{0 \leqslant \ell \leqslant m-n} {a_{i-(j-m)-\ell} c_{\ell}}
  \\
  = {} &
  b_{i-(j-m)} + \sum_{j-m \leqslant j-m+\ell \leqslant j-n} {a_{i-(j-m+\ell)} c_{(j-m+\ell)-(j-m)}}
  \\
  = {} &
  b_{i-(j-m)} + \sum_{j-m \leqslant r \leqslant j-m+(m-n)} {c_{r-(j-m)} a_{i-r}}.
\end{aligned}
\]
于是，对 \(S(f, g; n, m)\)，我们
加列 \(1\) 的 \(c_0\) 倍于列 \(m+1\)，
再加列 \(2\) 的 \(c_1\) 倍于列 \(m+1\)，
……
再加列 \(m-n+1\) 的 \(c_{m-n}\) 倍于列 \(m+1\)，
且我们加列 \(2\) 的 \(c_0\) 倍于列 \(m+2\)，
再加列 \(3\) 的 \(c_1\) 倍于列 \(m+2\)，
……
再加列 \(m-n+2\) 的 \(c_{m-n}\) 倍于列 \(m+2\)，
……
且我们加列 \(n\) 的 \(c_0\) 倍于列 \(m+n\)，
再加列 \(n+1\) 的 \(c_1\) 倍于列 \(m+n\)，
……
再加列 \(m\) 的 \(c_{m-n}\) 倍于列 \(m+n\)，
则我们得 \(S(f, p; n, m)\)。
则
\[
\det {(S(f, p; n, m))} = \det {(S(f, g; n, m))}.
\]
:::

::: example
设 @standing-assumption-of-resultant 成立。
设
\[
\begin{aligned}
  G(x) = \sum_{k = 0}^{m+1} {c_k x^{m+1-k}},
\end{aligned}
\]
其中，\(c_k = b_{k-1}\)；
特别地，\(c_0 = 0\)。
注意，其实，\(G(x) = g(x)\)，
但
\[
\begin{aligned}
  \sum_{k = 0}^{m} {b_k x^{m-k}}
  \quad \text{与} \quad
  \sum_{k = 0}^{m+1} {c_k x^{m+1-k}}
\end{aligned}
\]
的形式是不同的。
\(S(f, g; n, m)\) 与 \(S(f, G; n, m+1)\)
分别是 \(m+n\) 级与 \(m+n+1\) 级阵。
我们考虑 \(\det {(S(f, g; n, m))}\)
与 \(\det {(S(f, G; n, m+1))}\)
的关系。

首先，既然 \(c_0 = 0\)，
则 \(k \leqslant 0\) 时，\(c_k = 0\)。
则 \(j > 1\) 时，\([S(f, G; n, m+1)]_{1,j} = 0\)。
（若 \(2 \leqslant j \leqslant m+1\)，
则 \([S(f, G; n, m+1)]_{1,j} = a_{1-j} = 0\)；
若 \(j \geqslant m+2\)，则 \([S(f, G; n, m+1)]_{1,j}
  = c_{1-(j-(m+1))} = c_{m+2-j} = 0\)。）

另一方面，
\((S(f, G; n, m+1))(1|1) = S(f, g; n, m)\)。
注意，
\[
\begin{aligned}
  [S(f, G; n, m+1)]_{i+1,j+1}
  = {} &
  \begin{cases}
    a_{(i+1)-(j+1)},       & j+1 \leqslant m+1; \\
    c_{(i+1)-(j+1-(m+1))}, & j+1 > m+1
  \end{cases}
  \\
  = {} &
  \begin{cases}
    a_{i-j},       & j \leqslant m; \\
    c_{i-(j-m)+1}, & j > m
  \end{cases}
  \\
  = {} &
  \begin{cases}
    a_{i-j},     & j \leqslant m; \\
    b_{i-(j-m)}, & j > m
  \end{cases}
  \\
  = {} &
  [S(f, g; n, m)]_{i,j}.
\end{aligned}
\]
所以，由按行 \(1\) 展开，
\[
\begin{aligned}
  &
  \det {(S(f, G; n, m+1))}
  \\
  = {} &
  (-1)^{1+1}\, [S(f, G; n, m+1)]_{1,1}
  \det {((S(f, G; n, m+1))(1|1))}
  \\
  = {} &
  a_0 \det {(S(f, g; n, m))}.
\end{aligned}
\]

注意，\(g = G\)。
为方便，我们直接地写
\[
\begin{aligned}
  \det {(S(f, g; n, m+1))} = a_0 \det {(S(f, g; n, m))}.
\end{aligned}
\]
由此，若 \(d\) 是非负整数，
\[
\begin{aligned}
  \det {(S(f, g; n, m+d))}
  = {} & a_0 \det {(S(f, g; n, m+d-1))}   \\
  = {} & a_0^2 \det {(S(f, g; n, m+d-2))} \\
  = {} & \dots                            \\
  = {} & a_0^d \det {(S(f, g; n, m))},
\end{aligned}
\]
其中，\(S(f, g; n, m+d)\) 的 \(g\) 被认为是
\[
\begin{aligned}
  g(x) = \sum_{k = 0}^{m+d} {w_k x^{m+d-k}},
\end{aligned}
\]
其中，\(w_k = b_{k-d}\)。

最后，类似地，
\[
\begin{aligned}
  \det {(S(f, g; n+d, m))}
  = {} &
  (-1)^{m (n+d)} \det {(S(g, f; m, n+d))}
  \\
  = {} &
  (-1)^{m n} (-1)^{m d} b_0^d \det {(S(g, f; m, n))}
  \\
  = {} &
  (-1)^{m d} b_0^d \det {(S(f, g; n, m))}.
\end{aligned}
\]
:::

::: example
设 @standing-assumption-of-resultant 成立。
设
\[
\begin{aligned}
  F(x) = \sum_{k = 0}^{n} {c_k x^{n-k}},
  \quad
  G(x) = \sum_{k = 0}^{m} {d_k x^{m-k}},
\end{aligned}
\]
其中，（对任何整数 \(\ell\)，）
\(c_\ell = a_{n-\ell}\)，
且 \(d_\ell = b_{m-\ell}\)。
于是，
\[
\begin{aligned}
  F(x) & = a_n x^n + a_{n-1} x^{n-1} + \dots + a_0, \\
  G(x) & = b_m x^m + b_{m-1} x^{m-1} + \dots + b_0.
\end{aligned}
\]
我们考虑
\(\det {(S(F, G; n, m))}\)
与
\(\det {(S(f, g; n, m))}\)
的关系。

注意，若 \(j \leqslant m\)，则
\[
\begin{aligned}
  [S(F, G; n, m)]_{i,j}
  = {} & c_{i-j}                          \\
  = {} & a_{n-(i-j)}                      \\
  = {} & a_{n-i+j}                        \\
  = {} & a_{m+n+1-i+j-m-1}                \\
  = {} & a_{(m+n+1-i)-(m+1-j)}            \\
  = {} & [S(f, g; n, m)]_{m+n+1-i,m+1-j};
\end{aligned}
\]
若 \(j > m\)，则
\[
\begin{aligned}
  [S(F, G; n, m)]_{i,j}
  = {} & d_{i-(j-m)}                            \\
  = {} & b_{m-(i-(j-m))}                        \\
  = {} & b_{m-i+(j-m)}                          \\
  = {} & b_{m+n+1-i+(j-m)-n-1}                  \\
  = {} & b_{(m+n+1-i)-(n+1-(j-m))}              \\
  = {} & b_{(m+n+1-i)-(m+n+1-(j-m)-m)}          \\
  = {} & [S(f, g; n, m)]_{m+n+1-i,m+n+1-(j-m)}.
\end{aligned}
\]
作 \(m+n\) 级阵 \(T\)，使
\([T]_{i,j} = [S(f, g; n, m)]_{m+n+1-i,j}\)。
则 \(T\) 的行 \(i\) 是 \(S(f, g; n, m)\) 的行 \(m+n+1-i\)。
注意，
\[
\begin{aligned}
  [S(F, G; n, m)]_{i,j} =
  \begin{cases}
    [T]_{i,m+1-j},       & j \leqslant m; \\
    [T]_{i,m+n+1-(j-m)}, & j > m.
  \end{cases}
\end{aligned}
\]
则 \(T\) 的列 \(j\) 是 \(S(F, G; n, m)\) 的列 \(m+1-j\)
（若 \(j \leqslant m\)）
或列 \(m+n+1-(j-m)\)
（若 \(j > m\)）。
我们分别考虑
\(\det {(T)}\)、\(\det {(S(f, g; n, m))}\) 的关系，
与
\(\det {(T)}\)、\(\det {(S(F, G; n, m))}\)
的关系。

对 \(S(f, g; n, m)\)，
我们交换行 \(m+n\)、\(m+n-1\)，
再交换行 \(m+n-1\)、\(m+n-2\)，
……
再交换行 \(2\)、\(1\)，
得 \(m+n\) 级阵 \(T_1\)。
则 \(T_1\) 的行 \(1\) 是 \(S(f, g; n, m)\) 的行 \(m+n\)，
且 \(T_1\) 的行 \(\ell\) 是 \(S(f, g; n, m)\) 的行 \(\ell-1\)
（若 \(\ell > 1\)）。
我们作了 \(m+n-1\) 次相邻的行的交换。
则 \(\det {(T_1)} = (-1)^{m+n-1} \det {(S(f, g; n, m))}\)。
注意，\(T_1\) 的行 \(1\) 是 \(T\) 的行 \(1\)。

我们可类似地使 \(T_1\) 的行 \(m+n\)
（其是 \(S(f, g; n, m)\) 的行 \(m+n-1\)）
到行 \(2\) 的位置，
使 \(T_1\) 的行 \(1\) 仍在行 \(1\) 的位置，
且使 \(T_1\) 的行 \(\ell\) 在行 \(\ell+1\) 的位置
（若 \(2 < \ell < m+n\)），
得 \(m+n\) 级阵 \(T_2\)。
我们作了 \(m+n-2\) 次相邻的行的交换。
则
\[
\begin{aligned}
  \det {(T_2)}
  = {} & (-1)^{m+n-2} \det {(T_1)}                      \\
  = {} & (-1)^{(m+n-1)+(m+n-2)} \det {(S(f, g; n, m))}.
\end{aligned}
\]

……

最后，我们共作
\[
\begin{aligned}
  (m+n-1) + (m+n-2) + \dots + 1
  = {} &
  \frac{(m+n)(m+n-1)}{2}
  \\
  = {} &
  \frac{m (m-1+n) + n (n-1+m)}{2}
  \\
  = {} &
  \frac{m(m-1) + n(n-1) + 2mn}{2}
  \\
  = {} &
  \frac{m(m-1)}{2} + \frac{n(n-1)}{2} + mn
\end{aligned}
\]
次相邻的行的交换，
使 \(S(f, g; n, m)\) 的行 \(\ell\)
到行 \(m+n+1-\ell\) 的位置，
\(\ell = 1\)、\(2\)、\(\dots\)、\(m+n\)，
得 \(m+n\) 级阵 \(T\)。
则
\[
\begin{aligned}
  \det {(T)}
  = (-1)^{m(m-1)/2} (-1)^{n(n-1)/2} (-1)^{mn}
  \det {(S(f, g; n, m))}.
\end{aligned}
\]

然后，我们可类似地，
作 \(m + (m-1) + \dots + 1 = m(m-1)/2\)
次相邻的列的交换，
且再作 \(n + (n-1) + \dots + 1 = n(n-1)/2\)
次相邻的列的交换，
使 \(T\) 的列 \(1\)、\(2\)、\(\dots\)、\(m\)
分别地到列 \(m\)、\(m-1\)、\(\dots\)、\(1\) 的位置，
且使 \(T\) 的列 \(m+1\)、\(m+2\)、\(\dots\)、\(m+n\)
分别地到列 \(m+n\)、\(m+n-1\)、\(\dots\)、\(m+1\) 的位置，
得 \(m+n\) 级阵 \(S(F, G; n, m)\)。
则
\[
\begin{aligned}
  &
  \det {(S(F, G; n, m))}
  \\
  = {} &
  (-1)^{n(n-1)/2} (-1)^{m(m-1)/2} \det {(T)}
  \\
  = {} &
  (-1)^{n(n-1)/2} (-1)^{m(m-1)/2}
  (-1)^{m(m-1)/2} (-1)^{n(n-1)/2} (-1)^{mn}
  \det {(S(f, g; n, m))}
  \\
  = {} &
  (-1)^{mn} \det {(S(f, g; n, m))}.
\end{aligned}
\]

我们以 \(a_\ell\)、\(b_\ell\)
直接地表示 \(S(F, G; n, m)\) 的元：
\[
\begin{aligned}
  [S(F, G; n, m)]_{i,j}
  = {} &
  \begin{cases}
    a_{n-(i-j)},     & j \leqslant m; \\
    b_{m-(i-(j-m))}, & j > m;
  \end{cases}
  \\
  = {} &
  \begin{cases}
    a_{j-i+n}, & j \leqslant m; \\
    b_{j-i},   & j > m.
  \end{cases}
\end{aligned}
\]
对适合 @standing-assumption-of-resultant
的 \(f\)、\(g\)，
定义 \(m + n\) 级阵 \(S'(f, g; n, m)\)，
其中，
\[
\begin{aligned}
  [S'(f, g; n, m)]_{i,j} =
  \begin{cases}
    a_{j-i+n}, & j \leqslant m; \\
    b_{j-i},   & j > m.
  \end{cases}
\end{aligned}
\]
比如，若 \(n = 2\)，且 \(m = 5\)，
则 \(S'(f, g; 2, 5)\) 等于
\[
\begin{aligned}
  \begin{bmatrix}
    a_2    & a_3    & a_4    & a_5    & a_6 & b_5    & b_6 \\
    a_1    & a_2    & a_5    & a_4    & a_5 & b_4    & b_5 \\
    a_0    & a_1    & a_2    & a_3    & a_4 & b_3    & b_4 \\
    a_{-1} & a_0    & a_1    & a_2    & a_3 & b_2    & b_3 \\
    a_{-2} & a_{-1} & a_0    & a_1    & a_2 & b_1    & b_2 \\
    a_{-3} & a_{-2} & a_{-1} & a_0    & a_1 & b_0    & b_1 \\
    a_{-4} & a_{-3} & a_{-2} & a_{-1} & a_0 & b_{-1} & b_0 \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    a_2 & 0   & 0   & 0   & 0   & b_5 & 0   \\
    a_1 & a_2 & 0   & 0   & 0   & b_4 & b_5 \\
    a_0 & a_1 & a_2 & 0   & 0   & b_3 & b_4 \\
    0   & a_0 & a_1 & a_2 & 0   & b_2 & b_3 \\
    0   & 0   & a_0 & a_1 & a_2 & b_1 & b_2 \\
    0   & 0   & 0   & a_0 & a_1 & b_0 & b_1 \\
    0   & 0   & 0   & 0   & a_0 & 0   & b_0 \\
  \end{bmatrix}.
\end{aligned}
\]

在一些文献，一些作者的
“\(f\)、\(g\) 的 Sylvester 阵”是这儿的
\(S'(f, g; n, m)\)，
且“\(f\)、\(g\) 的结式”是
\(\det {(S'(f, g; n, m))}\)。
由前面的讨论，它们的行列式
至多差正负号：
\(\det {(S'(f, g; n, m))}
  = (-1)^{m n} \det {(S(f, g; n, m))}\)。
:::

若您想了解结式的更多的性质，您可以找相关的文献。
我就说这么多。
