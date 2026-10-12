---
title: 杂例
---

::: example
设 \(A\) 是 \(n\) 级阵。
设 \(n\) 级阵 \(D\) 适合
\[
\begin{aligned}
  [D]_{i,j} =
  \begin{cases}
    d_i, & i = j;       \\
    0,   & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
我们计算 \(\det {(A + D)}\)。

设 \(A\) 的列 \(1\)、\(2\)、\(\dots\)、\(n\)
分别是 \(b_1^{(1)}\)、\(b_2^{(1)}\)、\(\dots\)、\(b_n^{(1)}\)。
设 \(D\) 的列 \(1\)、\(2\)、\(\dots\)、\(n\)
分别是 \(b_1^{(0)}\)、\(b_2^{(0)}\)、\(\dots\)、\(b_n^{(0)}\)。
则 \(A + D\) 的列 \(j\) 是
\[
\begin{aligned}
  b_j^{(1)} + b_j^{(0)}
  = b_j^{(0)} + b_j^{(1)}
  = \sum_{c_j = 0}^{1} {b_j^{(c_j)}}.
\end{aligned}
\]
则，由多线性，
\[
\begin{aligned}
  \det {(A + D)}
  = {} &
  \det {\left[
      \sum_{c_1 = 0}^{1} b_1^{(c_1)},
      \sum_{c_2 = 0}^{1} b_2^{(c_2)},
      \dots,
      \sum_{c_n = 0}^{1} b_n^{(c_n)}
  \right]}
  \\
  = {} &
  \sum_{c_1 = 0}^{1}
  \det {\left[
      b_1^{(c_1)},
      \sum_{c_2 = 0}^{1} b_2^{(c_2)},
      \dots,
      \sum_{c_n = 0}^{1} b_n^{(c_n)}
  \right]}
  \\
  = {} &
  \sum_{c_1 = 0}^{1}
  \sum_{c_2 = 0}^{1}
  \det {\left[
      b_1^{(c_1)},
      b_2^{(c_2)},
      \dots,
      \sum_{c_n = 0}^{1} b_n^{(c_n)}
  \right]}
  \\
  = {} &
  \dots
  \\
  = {} &
  \sum_{c_1 = 0}^{1}
  \sum_{c_2 = 0}^{1}
  \dots
  \sum_{c_n = 0}^{1}
  \det {[b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}]}
  \\
  = {} &
  \sum_{0 \leqslant c_1, c_2, \dots, c_n \leqslant 1}
  \det {[b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}]}.
\end{aligned}
\]
由加法的结合律与交换律，
我们可按任何方式，任何次序求这些
\[
\begin{aligned}
  \det {[b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}]}
\end{aligned}
\]
的和。
特别地，我们可按 \(c_1 + c_2 + \dots + c_n\) 分
这些数为若干组，
求出一组的组和（即一组的元的和），
再求这些组的组和的和。
因为 \(0 \leqslant c_j \leqslant 1\)，
故 \(0 \leqslant c_1 + c_2 + \dots + c_n \leqslant n\)。
于是，我们可分这些数为 \(n+1\) 组：
适合 \(c_1 + c_2 + \dots + c_n = 0\) 的项在一组；
适合 \(c_1 + c_2 + \dots + c_n = 1\) 的项在一组；
……
适合 \(c_1 + c_2 + \dots + c_n = n\) 的项在一组。
不难看出，
每项在某一组里，
且每项不能在 \(2\) 个不同的组里。
则
\[
\begin{aligned}
  \det {(A + D)}
  = {} &
  \sum_{0 \leqslant c_1, c_2, \dots, c_n \leqslant 1}
  \det {[b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}]}
  \\
  = {} &
  \sum_{k = 0}^{n}\,
  \sum_{\substack{0 \leqslant c_1, c_2, \dots, c_n \leqslant 1 \\
  c_1 + c_2 + \dots + c_n = k}}
  \det {[b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}]}
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{\substack{0 \leqslant c_1, c_2, \dots, c_n \leqslant 1 \\
  c_1 + c_2 + \dots + c_n = 0}}
  \det {[b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}]}
  \\
  &
  +
  \sum_{k = 1}^{n-1}\,
  \sum_{\substack{0 \leqslant c_1, c_2, \dots, c_n \leqslant 1 \\
  c_1 + c_2 + \dots + c_n = k}}
  \det {[b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}]}
  \\
  &
  +
  \sum_{\substack{0 \leqslant c_1, c_2, \dots, c_n \leqslant 1 \\
  c_1 + c_2 + \dots + c_n = n}}
  \det {[b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}]}.
\end{aligned}
\]

不难看出，\(c_1 + c_2 + \dots + c_n = 0\) 时，
\(c_1 = c_2 = \dots = c_n = 0\)。
则
\[
\begin{aligned}
  \sum_{0 \leqslant c_1, c_2, \dots, c_n \leqslant 1}
  \det {[b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}]}
  =
  \det {[b_1^{(0)}, b_2^{(0)}, \dots, b_n^{(0)}]}
  =
  \det {(D)}.
\end{aligned}
\]

不难看出，\(c_1 + c_2 + \dots + c_n = n\) 时，
\(c_1 = c_2 = \dots = c_n = 1\)。
则
\[
\begin{aligned}
  \sum_{0 \leqslant c_1, c_2, \dots, c_n \leqslant 1}
  \det {[b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}]}
  =
  \det {[b_1^{(1)}, b_2^{(1)}, \dots, b_n^{(1)}]}
  =
  \det {(A)}.
\end{aligned}
\]

设正整数 \(k < n\)。
由 \(c_1 + c_2 + \dots + c_n = k\)，
知在 \(c_1\)、\(c_2\)、\(\dots\)、\(c_n\)
中，有 \(k\) 个 \(1\) 与 \(n-k\) 个 \(0\)。
设 \(c_{j_1} = c_{j_2} = \dots = c_{j_k} = 1\)
（其中，\(1 \leqslant j_1 < j_2 < \dots < j_k \leqslant n\)），
且 \(c_{j_{k+1}} = \dots = c_{j_n} = 0\)
（其中，\(1 \leqslant j_{k+1} < \dots < j_n \leqslant n\)）。
记 \(n\) 级阵
\[
\begin{aligned}
  B_{c_1,\dots,c_n}
  = [b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}].
\end{aligned}
\]
注意，当 \(\ell > k\)，
且 \(i \neq j_\ell\) 时，
\([B_{c_1,\dots,c_n}]_{i,j_\ell} = 0\)，
且 \([B_{c_1,\dots,c_n}]_{j_\ell,j_\ell} = d_{j_\ell}\)，
按列 \(j_{k+1}\) 展开 \(\det {(B_{c_1,\dots,c_n})}\)，
得
\[
\begin{aligned}
  \det {(B_{c_1,\dots,c_n})}
  = {} & (-1)^{j_{k+1}+j_{k+1}}
  [B_{c_1,\dots,c_n}]_{j_{k+1},j_{k+1}}
  \det {(B_{c_1,\dots,c_n}(j_{k+1}|j_{k+1}))}
  \\
  = {} &
  d_{j_{k+1}} \det {(B_{c_1,\dots,c_n}(j_{k+1}|j_{k+1}))}.
\end{aligned}
\]
按列 \(j_{k+2}-1\) 展开
\(\det {(B_{c_1,\dots,c_n}(j_{k+1}|j_{k+1}))}\)，
得
\[
\begin{aligned}
  &
  \det {(B_{c_1,\dots,c_n}(j_{k+1}|j_{k+1}))}
  \\
  = {} & (-1)^{j_{k+2}-1+j_{k+2}-1}
  [B_{c_1,\dots,c_n}]_{j_{k+2},j_{k+2}}
  \det {(B_{c_1,\dots,c_n}
  ({j_{k+1},j_{k+2}}|{j_{k+1},j_{k+2}}))}
  \\
  = {} &
  d_{j_{k+2}}
  \det {(B_{c_1,\dots,c_n}
  ({j_{k+1},j_{k+2}}|{j_{k+1},j_{k+2}}))}.
\end{aligned}
\]
故
\[
\begin{aligned}
  \det {(B_{c_1,\dots,c_n})}
  = d_{j_{k+1}} d_{j_{k+2}}
  \det {(B_{c_1,\dots,c_n}
  ({j_{k+1},j_{k+2}}|{j_{k+1},j_{k+2}}))}.
\end{aligned}
\]
……
最后，我们算出
\[
\begin{aligned}
  \det {(B_{c_1,\dots,c_n})}
  = {} &
  d_{j_{k+1}} d_{j_{k+2}} \dots d_{j_n}
  \det {(B_{c_1,\dots,c_n}
  ({j_{k+1},\dots,j_n}|{j_{k+1},\dots,j_n}))}
  \\
  = {} &
  \det {(B_{c_1,\dots,c_n}
  ({j_{k+1},\dots,j_n}|{j_{k+1},\dots,j_n}))}
  \,
  d_{j_{k+1}} d_{j_{k+2}} \dots d_{j_n}
  \\
  = {} &
  \det {\left(
      A\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
  \right)}
  \det {(D({j_1,\dots,j_k}|{j_1,\dots,j_k}))}.
\end{aligned}
\]
于是
\[
\begin{aligned}
  &
  \sum_{\substack{0 \leqslant c_1, c_2, \dots, c_n \leqslant 1 \\
  c_1 + c_2 + \dots + c_n = k}}
  \det {[b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}]}
  \\
  = {} &
  \sum_{1 \leqslant j_1 < j_2 < \dots < j_k \leqslant n}
  \det {\left(
      A\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
  \right)}
  \det {(D({j_1,\dots,j_k}|{j_1,\dots,j_k}))}.
\end{aligned}
\]

综上，
\[
\begin{aligned}
  &
  \det {(A + D)}
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{\substack{0 \leqslant c_1, c_2, \dots, c_n \leqslant 1 \\
  c_1 + c_2 + \dots + c_n = 0}}
  \det {[b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}]}
  \\
  &
  +
  \sum_{k = 1}^{n-1}\,
  \sum_{\substack{0 \leqslant c_1, c_2, \dots, c_n \leqslant 1 \\
  c_1 + c_2 + \dots + c_n = k}}
  \det {[b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}]}
  \\
  &
  +
  \sum_{\substack{0 \leqslant c_1, c_2, \dots, c_n \leqslant 1 \\
  c_1 + c_2 + \dots + c_n = n}}
  \det {[b_1^{(c_1)}, b_2^{(c_2)}, \dots, b_n^{(c_n)}]}
  \\
  = {} &
  \hphantom{{} + {}}
  \det {(D)}
  \\
  &
  + \sum_{k = 1}^{n-1}
  {
    \sum_{1 \leqslant j_1 < j_2 < \dots < j_k \leqslant n}
    \det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
    \right)}
    \det {(D({j_1,\dots,j_k}|{j_1,\dots,j_k}))}
  }
  \\
  &
  + \det {(A)}.
\end{aligned}
\]
:::

::: example
设 \(A\) 是 \(n\) 级阵。
设 \(x\) 是数。
则
\[
\begin{aligned}
  \det {(xI_n + A)} =
  x^n
  + \sum_{k = 1}^{n}
  {x^{n-k}
    \sum_{1 \leqslant j_1 < \dots < j_k \leqslant n}
    \det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
    \right)}
  }.
\end{aligned}
\]

注意，
\[
\begin{aligned}
  [xI_n]_{i,j} =
  \begin{cases}
    x, & i = j;       \\
    0, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
故，由上个例，
\[
\begin{aligned}
  &
  \det {(xI_n + A)}
  \\
  = {} &
  \hphantom{{} + {}}
  \det {(xI_n)}
  \\
  &
  + \sum_{k = 1}^{n-1}
  {
    \sum_{1 \leqslant j_1 < \dots < j_k \leqslant n}
    \det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
    \right)}
    \det {((xI_n)({j_1,\dots,j_k}|{j_1,\dots,j_k}))}
  }
  \\
  &
  + \det {(A)}
  \\
  = {} &
  \hphantom{{} + {}}
  x^n
  + \sum_{k = 1}^{n-1}
  {
    \sum_{1 \leqslant j_1 < \dots < j_k \leqslant n}
    \det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
    \right)}
    \,
    x^{n-k}
  }
  \\
  &
  + \det {(A)}
  \\
  = {} &
  \hphantom{{} + {}}
  x^n
  + \sum_{k = 1}^{n-1}
  {
    x^{n-k}
    \sum_{1 \leqslant j_1 < \dots < j_k \leqslant n}
    \det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
    \right)}
  }
  \\
  &
  + x^{n-n}
  \sum_{1 \leqslant j_1 < \dots < j_n \leqslant n}
  \det {\left(
      A\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_n}{j_1,\dots,j_n}
  \right)}
  \\
  = {} &
  x^n
  + \sum_{k = 1}^{n}
  {x^{n-k}
    \sum_{1 \leqslant j_1 < \dots < j_k \leqslant n}
    \det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
    \right)}
  }.
\end{aligned}
\]
:::

::: example {@emp:sum-of-principal-minors-of-AB-and-that-of-BA}
设正整数 \(m\)、\(n\) 适合 \(m \geqslant n\)。
设 \(A\)、\(B\) 分别是 \(m \times n\) 与 \(n \times m\) 阵。
设正整数 \(k \leqslant n\)。
由 Binet–Cauchy 公式的推广，
\[
\begin{aligned}
  &
  \sum_{1 \leqslant j_1 < \dots < j_k \leqslant m}
  \det {\left(
      (AB)\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
  \right)}
  \\
  = {} &
  \sum_{1 \leqslant j_1 < \dots < j_k \leqslant m}
  \sum_{1 \leqslant i_1 < \dots < i_k \leqslant n}
  \det {\left(
      A\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{i_1,\dots,i_k}
  \right)}
  \det {\left(
      B\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{j_1,\dots,j_k}
  \right)}
  \\
  = {} &
  \sum_{1 \leqslant j_1 < \dots < j_k \leqslant m}
  \sum_{1 \leqslant i_1 < \dots < i_k \leqslant n}
  \det {\left(
      B\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{j_1,\dots,j_k}
  \right)}
  \det {\left(
      A\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{i_1,\dots,i_k}
  \right)}
  \\
  = {} &
  \sum_{1 \leqslant i_1 < \dots < i_k \leqslant n}
  \sum_{1 \leqslant j_1 < \dots < j_k \leqslant m}
  \det {\left(
      B\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{j_1,\dots,j_k}
  \right)}
  \det {\left(
      A\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{i_1,\dots,i_k}
  \right)}
  \\
  = {} &
  \sum_{1 \leqslant i_1 < \dots < i_k \leqslant n}
  \det {\left(
      (BA)\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{i_1,\dots,i_k}
  \right)}.
\end{aligned}
\]
:::

::: example
设正整数 \(m\)、\(n\) 适合 \(m \geqslant n\)。
设 \(A\)、\(B\) 分别是 \(m \times n\) 与 \(n \times m\) 阵。
设 \(x\) 是数。
则
\[
\begin{aligned}
  &
  \det {(xI_m + AB)}
  \\
  = {} &
  x^m
  + \sum_{k = 1}^{m}
  {x^{m-k}
    \sum_{1 \leqslant j_1 < \dots < j_k \leqslant m}
    \det {\left(
        (AB)\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
    \right)}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  x^m
  + \sum_{k = 1}^{n}
  {x^{m-k}
    \sum_{1 \leqslant j_1 < \dots < j_k \leqslant m}
    \det {\left(
        (AB)\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
    \right)}
  }
  \\
  &
  + \sum_{k = n+1}^{m}
  {x^{m-k}
    \sum_{1 \leqslant j_1 < \dots < j_k \leqslant m}
    \det {\left(
        (AB)\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
    \right)}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  x^m
  + \sum_{k = 1}^{n}
  {x^{m-k}
    \sum_{1 \leqslant j_1 < \dots < j_k \leqslant m}
    \det {\left(
        (AB)\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
    \right)}
  }
  \\
  &
  + \sum_{k = n+1}^{m}
  {x^{m-k}
    \sum_{1 \leqslant j_1 < \dots < j_k \leqslant m}
    0
  }
  \\
  = {} &
  x^m
  + \sum_{k = 1}^{n}
  {x^{m-k}
    \sum_{1 \leqslant j_1 < \dots < j_k \leqslant m}
    \det {\left(
        (AB)\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
    \right)}
  }
  \\
  = {} &
  x^{m-n} x^n
  + \sum_{k = 1}^{n}
  {x^{m-n} x^{n-k}
    \sum_{1 \leqslant i_1 < \dots < i_k \leqslant n}
    \det {\left(
        (BA)\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{i_1,\dots,i_k}
    \right)}
  }
  \\
  = {} &
  x^{m-n} x^n
  + x^{m-n} \sum_{k = 1}^{n}
  {x^{n-k}
    \sum_{1 \leqslant i_1 < \dots < i_k \leqslant n}
    \det {\left(
        (BA)\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{i_1,\dots,i_k}
    \right)}
  }
  \\
  = {} &
  x^{m-n}
  \left(
    x^n
    + \sum_{k = 1}^{n}
    {x^{n-k}
      \sum_{1 \leqslant i_1 < \dots < i_k \leqslant n}
      \det {\left(
          (BA)\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{i_1,\dots,i_k}
      \right)}
    }
  \right)
  \\
  = {} &
  x^{m-n} \det {(xI_n + BA)}.
\end{aligned}
\]
特别地，代 \(x\) 以数 \(1\)，得
\[
\det {(I_m + AB)} = \det {(I_n + BA)}.
\]
:::

::: example
设 \(a_1\)、\(b_1\)、\(a_2\)、\(b_2\)、
\(\dots\)、\(a_m\)、\(b_m\) 是 \(2m\) 个数。
作 \(m\) 级阵 \(C\) 如下：
\[
\begin{aligned}
  [C]_{i,j} =
  \begin{cases}
    1 + a_i b_i, & i = j;       \\
    a_i b_j,     & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
我们计算 \(\det {(C)}\)。

设 \(A = [a_1, a_2, \dots, a_m]^{\mathrm{T}}\)，
且 \(B = [b_1, b_2, \dots, b_m]\)。
则
\[
\begin{aligned}
  [AB]_{i,j} = [A]_{i,1} [B]_{1,j} = a_i b_j.
\end{aligned}
\]
由此，不难看出，\(C = I_m + AB\)。
故
\[
\begin{aligned}
  \det {(C)}
  = {} & \det {(I_m + AB)}                        \\
  = {} & \det {(I_1 + BA)}                        \\
  = {} & [I_1 + BA]_{1,1}                         \\
  = {} & [I_1]_{1,1} + [BA]_{1,1}                 \\
  = {} & 1 + b_1 a_1 + b_2 a_2 + \dots + b_m a_m.
\end{aligned}
\]

我们当然也可用别的方法。
作 \(m+1\) 级阵 \(G\) 如下：
\[
\begin{aligned}
  [G]_{i,j} =
  \begin{cases}
    1,         & i = j = m+1; \\
    -a_i,      & i < j = m+1; \\
    0,         & m+1 = i > j; \\
    [C]_{i,j}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
通俗地，
\[
\begin{aligned}
  G =
  \begin{bmatrix}
    1 + a_1 b_1 & a_1 b_2     & \cdots & a_1 b_{m-1}         & a_1 b_m     & -a_1     \\
    a_2 b_1     & 1 + a_2 b_2 & \cdots & a_2 b_{m-1}         & a_2 b_m     & -a_2     \\
    \vdots      & \vdots      & {}     & \vdots              & \vdots      & \vdots   \\
    a_{m-1} b_1 & a_{m-1} b_2 & \cdots & 1 + a_{m-1} b_{m-1} & a_{m-1} b_m & -a_{m-1} \\
    a_m b_1     & a_m b_2     & \cdots & a_m b_{m-1}         & 1 + a_m b_m & -a_m     \\
    0           & 0           & \cdots & 0                   & 0           & 1        \\
  \end{bmatrix}.
\end{aligned}
\]
一方面，按行 \(m+1\) 展开，得
\[
\begin{aligned}
  \det {(G)}
  = (-1)^{m+1+m+1}\,1\,\det {(G(1|1))}
  = \det {(C)}.
\end{aligned}
\]
另一方面，我们
加列 \(m+1\) 的 \(b_1\) 倍于列 \(1\)，
加列 \(m+1\) 的 \(b_2\) 倍于列 \(2\)，
……
加列 \(m+1\) 的 \(b_m\) 倍于列 \(m\)，
得 \(m+1\) 级阵
\[
\begin{aligned}
  H =
  \begin{bmatrix}
    1      & 0      & \cdots & 0       & 0      & -a_1     \\
    0      & 1      & \cdots & 0       & 0      & -a_2     \\
    \vdots & \vdots & {}     & \vdots  & \vdots & \vdots   \\
    0      & 0      & \cdots & 1       & 0      & -a_{m-1} \\
    0      & 0      & \cdots & 0       & 1      & -a_m     \\
    b_1    & b_2    & \cdots & b_{m-1} & b_m    & 1        \\
  \end{bmatrix}.
\end{aligned}
\]
则 \(\det {(H)} = \det {(G)}\)。
故 \(\det {(C)} = \det {(H)}\)。

我们
加列 \(1\) 的 \(a_1\) 倍于列 \(m+1\)，
加列 \(1\) 的 \(a_2\) 倍于列 \(m+1\)，
……
加列 \(1\) 的 \(a_m\) 倍于列 \(m+1\)，
得 \(m+1\) 级阵
\[
\begin{aligned}
  J =
  \begin{bmatrix}
    1      & 0      & \cdots & 0       & 0      & 0                                       \\
    0      & 1      & \cdots & 0       & 0      & 0                                       \\
    \vdots & \vdots & {}     & \vdots  & \vdots & \vdots                                  \\
    0      & 0      & \cdots & 1       & 0      & 0                                       \\
    0      & 0      & \cdots & 0       & 1      & 0                                       \\
    b_1    & b_2    & \cdots & b_{m-1} & b_m    & 1 + b_1 a_1 + b_2 a_2 + \dots + b_m a_m \\
  \end{bmatrix}.
\end{aligned}
\]
则 \(\det {(J)} = \det {(H)}\)。
故
\[
\det {(C)}
= \det {(J)}
= 1 + b_1 a_1 + b_2 a_2 + \dots + b_m a_m.
\]
:::

::: example
回想，若 \(A\) 是方阵，且 \(m\) 是非负整数，
则
\[
\begin{aligned}
  A^m =
  \begin{cases}
    I,         & m = 0;    \\
    A^{m-1} A, & m \geqslant 1.
  \end{cases}
\end{aligned}
\]

回想，\(A^1 = A\)。

回想，对任何非负整数 \(\ell\)，\(m\)，
\(A^{\ell + m} = A^{\ell} A^m\)，
且 \((A^{\ell})^m = A^{\ell m}\)。

设 \(A\) 是方阵。
设 \(k\) 是数。
设 \(m\) 是非负整数。
可以用数学归纳法证明：

(1)
\((kA)^m = k^m A^m\)。
（用 \((k A) (\ell B) = (k \ell) (A B)\)，
若 \(A\)、\(B\) 都是 \(n\) 级阵，
且 \(k\)、\(\ell\) 是数。）

(2)
\(\det {(A^m)} = (\det {(A)})^m\)。
（用 \(\det {(AB)} = \det {(A)} \det {(B)}\)，
若 \(A\)、\(B\) 都是 \(n\) 级阵。）

(3)
\((A^m)^{\mathrm{T}} = (A^{\mathrm{T}})^m\)。
（用 \((BA)^{\mathrm{T}} = A^{\mathrm{T}} B^{\mathrm{T}}\)，
若 \(A\)、\(B\) 都是 \(n\) 级阵；
见“转置的性质”。）

(4)
\(\operatorname{adj} {(A^m)}
  = (\operatorname{adj} {(A)})^m\)。
（用 \(\operatorname{adj} {(BA)}
  = \operatorname{adj} {(A)} \operatorname{adj} {(B)}\)，
若 \(A\)、\(B\) 都是 \(n\) 级阵；
见“古伴的性质 (3)”。）

我在此证明 (3)，并留 (1) (2) (4) 为您的习题。

作命题 \(P(m)\)：
对任何 \(n\) 级阵 \(A\)，
\((A^m)^{\mathrm{T}} = (A^{\mathrm{T}})^m\)。

\(P(0)\) 是对的，因为左边与右边都是 \(I\)
（注意，\(I\) 的转置也是 \(I\)）。

设 \(P(m)\) 是对的。
我们由此证，\(P(m+1)\) 是对的。
注意，
\[
\begin{aligned}
  (A^{m+1})^{\mathrm{T}}
  = (A^m A)^{\mathrm{T}}
  = A^{\mathrm{T}} (A^m)^{\mathrm{T}}
  = (A^{\mathrm{T}})^1 (A^{\mathrm{T}})^m
  = (A^{\mathrm{T}})^{1+m}
  = (A^{\mathrm{T}})^{m+1}.
\end{aligned}
\]
所以，\(P(m+1)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: example
设 \(A\)、\(B\) 是 \(n\) 级阵。
则存在跟 \(A\)、\(B\) 的元有关的数
\(d_0\)、\(d_1\)、\(\dots\)、\(d_n\)，
使对任何数 \(x\)，
\[
\begin{aligned}
  \det {(xA + B)}
  = \sum_{k = 0}^{n} {d_k x^{n-k}}
  = d_0 x^n + d_1 x^{n-1} + \dots + d_n,
\end{aligned}
\]
其中，\(d_0 = \det {(A)}\)，
且 \(d_n = \det {(B)}\)。

作命题 \(P(m)\)：
对任何 \(m\) 级阵 \(A\)，\(B\)，
存在跟 \(A\)、\(B\) 的元有关的数
\(d_0\)、\(d_1\)、\(\dots\)、\(d_m\)，
使对任何数 \(x\)，
\[
\begin{aligned}
  \det {(xA + B)}
  = \sum_{k = 0}^{m} {d_k x^{m-k}}
  = d_0 x^m + d_1 x^{m-1} + \dots + d_m,
\end{aligned}
\]
其中，\(d_0 = \det {(A)}\)，
且 \(d_m = \det {(B)}\)。
我们的目标是，
对任何非负整数 \(m\)，\(P(m)\) 是对的。

\(P(1)\) 是显然的：
\[
\begin{aligned}
  \det {(xA + B)}
  = [xA + B]_{1,1}
  = x [A]_{1,1} + [B]_{1,1}
  = \det {(A)}\, x + \det {(B)}.
\end{aligned}
\]

假定 \(P(m-1)\) 是对的。
我们由此证明，\(P(m)\) 也是对的。

设 \(A\)、\(B\) 是 \(m\) 级阵。
则
\[
\begin{aligned}
  \det {(xA + B)}
  = {} &
  \sum_{i = 1}^{m}
  (-1)^{i+1} [xA + B]_{i,1} \det {((xA + B)(i|1))}
  \\
  = {} &
  \sum_{i = 1}^{m}
  (-1)^{i+1} (x [A]_{i,1} + [B]_{i,1})
  \det {(x A(i|1) + B(i|1))}.
\end{aligned}
\]
\(A(i|1)\)、\(B(i|1)\) 是 \(m-1\) 级阵。
由假定，存在跟 \(A(i|1)\)、\(B(i|1)\) 的元有关的数
（从而也是跟 \(A\)、\(B\) 的元有关的数）
\(c_{i,0}\)、\(c_{i,1}\)、\(\dots\)、\(c_{i,m-1}\)，
使对任何数 \(x\)，
\[
\begin{aligned}
  \det {(x A(i|1) + B(i|1))}
  = \sum_{\ell = 0}^{m-1}
  c_{i,\ell} x^{m-1-\ell},
\end{aligned}
\]
其中，\(c_{i,0} = \det {(A(i|1))}\)，
且 \(c_{i,m-1} = \det {(B(i|1))}\)。
为方便，记 \(a_i = (-1)^{i+1} [A]_{i,1}\)，
且 \(b_i = (-1)^{i+1} [B]_{i,1}\)。
则 \(a_i\)、\(b_i\) 跟 \(A\)、\(B\) 的元有关。
则
\[
\begin{aligned}
  &
  \det {(xA + B)}
  \\
  = {} &
  \sum_{i = 1}^{m}
  (a_i x + b_i)
  \sum_{\ell = 0}^{m-1}
  c_{i,\ell} x^{m-1-\ell}
  \\
  = {} &
  \sum_{i = 1}^{m}
  \sum_{\ell = 0}^{m-1}
  (a_i x + b_i)
  c_{i,\ell} x^{m-1-\ell}
  \\
  = {} &
  \sum_{i = 1}^{m}
  \sum_{\ell = 0}^{m-1}
  (a_i c_{i,\ell} x^{m-\ell}
  + b_i c_{i,\ell} x^{m-1-\ell})
  \\
  = {} &
  \sum_{\ell = 0}^{m-1}
  \sum_{i = 1}^{m}
  (a_i c_{i,\ell} x^{m-\ell}
  + b_i c_{i,\ell} x^{m-1-\ell})
  \\
  = {} &
  \sum_{\ell = 0}^{m-1}
  \sum_{i = 1}^{m}
  a_i c_{i,\ell} x^{m-\ell}
  +
  \sum_{\ell = 0}^{m-1}
  \sum_{i = 1}^{m}
  b_i c_{i,\ell} x^{m-1-\ell}
  \\
  = {} & \hphantom{{} + {}}
  \sum_{i = 1}^{m}
  a_i c_{i,0} x^{m-0}
  +
  \sum_{\ell = 1}^{m-1}
  \sum_{i = 1}^{m}
  a_i c_{i,\ell} x^{m-\ell}
  \\
  &
  +
  \sum_{\ell = 0}^{m-2}
  \sum_{i = 1}^{m}
  b_i c_{i,\ell} x^{m-1-\ell}
  +
  \sum_{i = 1}^{m}
  b_i c_{i,m-1} x^{m-1-(m-1)}
  \\
  = {} & \hphantom{{} + {}}
  \sum_{i = 1}^{m}
  a_i c_{i,0} x^{m}
  +
  \sum_{\ell = 1}^{m-1}
  \sum_{i = 1}^{m}
  a_i c_{i,\ell} x^{m-\ell}
  \\
  &
  +
  \sum_{\ell = 0}^{m-2}
  \sum_{i = 1}^{m}
  b_i c_{i,(\ell+1)-1} x^{m-(\ell+1)}
  +
  \sum_{i = 1}^{m}
  b_i c_{i,m-1}
  \\
  = {} & \hphantom{{} + {}}
  \sum_{i = 1}^{m}
  a_i c_{i,0} x^{m}
  +
  \sum_{\ell = 1}^{m-1}
  \sum_{i = 1}^{m}
  a_i c_{i,\ell} x^{m-\ell}
  \\
  &
  +
  \sum_{\ell = 1}^{m-1}
  \sum_{i = 1}^{m}
  b_i c_{i,\ell-1} x^{m-\ell}
  +
  \sum_{i = 1}^{m}
  b_i c_{i,m-1}
  \\
  = {} &
  \sum_{i = 1}^{m} a_i c_{i,0}
  x^{m}
  +
  \sum_{\ell = 1}^{m-1}
  \sum_{i = 1}^{m}
  (a_i c_{i,\ell} + b_i c_{i,\ell-1})
  x^{m-\ell}
  +
  \sum_{i = 1}^{m} b_i c_{i,m-1}.
\end{aligned}
\]
记
\[
\begin{aligned}
  d_k =
  \begin{dcases}
    \sum_{i = 1}^{m} a_i c_{i,0},
    & k = 0;     \\
    \sum_{i = 1}^{m}
    (a_i c_{i,k} + b_i c_{i,k-1}),
    & 0 < k < m; \\
    \sum_{i = 1}^{m} b_i c_{i,m-1},
    & k = m.
  \end{dcases}
\end{aligned}
\]
则 \(d_k\) 跟 \(A\)、\(B\) 的元有关，
且对任何数 \(x\)，
\[
\begin{aligned}
  \det {(xA + B)}
  = \sum_{k = 0}^{m} {d_k x^{m-k}}
  = d_0 x^m + d_1 x^{m-1} + \dots + d_m.
\end{aligned}
\]
最后，不难算出
\[
\begin{aligned}
  &
  d_0
  =
  \sum_{i = 1}^{m}
  a_i c_{i,0}
  =
  \sum_{i = 1}^{m}
  (-1)^{i+1} [A]_{i,1} \det {(A(i|1))}
  =
  \det {(A)},
  \\
  &
  d_m
  =
  \sum_{i = 1}^{m}
  b_i c_{i,m-1}
  =
  \sum_{i = 1}^{m}
  (-1)^{i+1} [B]_{i,1} \det {(B(i|1))}
  =
  \det {(B)}.
\end{aligned}
\]
所以，\(P(m)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: example
设 \(A\) 是 \(n\) 级阵。
则存在跟 \(A\) 的元有关的数
\(c_0\)、\(c_1\)、\(\dots\)、\(c_n\)，
使对任何数 \(x\)，
\[
\begin{aligned}
  \det {(xI - A)}
  = \det {(xI + (-A))}
  = \sum_{k = 0}^{n} {c_k x^{n-k}}
  = c_0 x^n + c_1 x^{n-1} + \dots + c_n,
\end{aligned}
\]
其中，
\(c_0 = \det {(I)} = 1\)，
且
\(c_n = \det {(-A)} = (-1)^n \det {(A)}\)。

我们考虑 \(xI - A\) 的古伴
\(\operatorname{adj} {(xI - A)}\)。
它的 \((i, j)\)-元
\[
\begin{aligned}
  [\operatorname{adj} {(xI - A)}]_{i,j}
  = {} &
  (-1)^{j+i} \det {((xI - A)(j|i))}
  \\
  = {} &
  (-1)^{j+i} \det {(x I(j|i) + (-A)(j|i))}.
\end{aligned}
\]
则有跟 \(A\) 的元有关的数 \(d_{i,j,k}\)
（\(k = 0\)、\(1\)、\(\dots\)、\(n-1\)），
使对任何数 \(x\)，
\[
\begin{aligned}
  \det {(x I(j|i) + (-A)(j|i))}
  = d_{i,j,0} x^{n-1}
  + d_{i,j,1} x^{n-2}
  + \dots + d_{i,j,n-1},
\end{aligned}
\]
其中，
\(d_{i,j,0} = \det {(I(j|i))}\)，
且 \(d_{i,j,n-1} = \det {((-A)(j|i))}\)。
为方便，记 \(b_{i,j,k} = (-1)^{j+i} d_{i,j,k}\)。
则有跟 \(A\) 的元有关的数 \(b_{i,j,k}\)
（\(k = 0\)、\(1\)、\(\dots\)、\(n-1\)），
使对任何数 \(x\)，
\[
\begin{aligned}
  [\operatorname{adj} {(xI - A)}]_{i,j}
  = b_{i,j,0} x^{n-1}
  + b_{i,j,1} x^{n-2}
  + \dots + b_{i,j,n-1}.
\end{aligned}
\]
作 \(n\) 级阵 \(B_k\)，
使 \([B_k]_{i,j} = b_{i,j,k}\)
（\(k = 0\)、\(1\)、\(\dots\)、\(n-1\)）。
则 \(B_0\)、\(B_1\)、\(\dots\)、\(B_{n-1}\)
的元全跟 \(A\) 的元有关，
且对任何数 \(x\)，
\[
\begin{aligned}
  \operatorname{adj} {(xI - A)}
  = x^{n-1} B_0 + x^{n-2} B_1 + \dots + B_{n-1}.
\end{aligned}
\]
因为
\([B_{n-1}]_{i,j}
    = b_{i,j,n-1}
    = (-1)^{j+i} d_{i,j,n-1}
  = (-1)^{j+i} \det {((-A)(j|i))}\)，
\(B_{n-1} = \operatorname{adj} {(-A)}\)。

因为
\[
\begin{aligned}
  (\operatorname{adj} {(xI - A)})\, (xI - A)
  = {} &
  \det {(xI - A)}\, I
  \\
  = {} &
  (c_0 x^n + c_1 x^{n-1} + \dots + c_n) I
  \\
  = {} &
  x^n (c_0 I) + x^{n-1} (c_1 I) + \dots + (c_n I),
\end{aligned}
\]
我们得
\[
\begin{aligned}
  &
  (x^{n-1} B_0 + x^{n-2} B_1 + \dots + x B_{n-2} + B_{n-1})
  (xI - A)
  \\
  = {} &
  x^n (c_0 I) + x^{n-1} (c_1 I) + \dots + x (c_{n-1} I) + (c_n I).
\end{aligned}
\]
上式的左边是
\[
\begin{aligned}
  &
  (x^{n-1} B_0 + x^{n-2} B_1 + \dots + x B_{n-2} + B_{n-1})
  (xI)
  \\
  & \hphantom{(x^{n-1} B_0}
  +
  (x^{n-1} B_0 + x^{n-2} B_1 + \dots + x B_{n-2} + B_{n-1})
  (-A)
  \\
  = {} &
  x^n B_0 + x^{n-1} B_1 + \dots + x^2 B_{n-2} + x B_{n-1}
  \\
  &
  \hphantom{x^n B_0}
  - x^{n-1} (B_0 A) - x^{n-2} (B_1 A) - \dots
  - x (B_{n-2} A) - B_{n-1} A
  \\
  = {} &
  x^n B_0 + x^{n-1} (B_1 - B_0 A)
  + x^{n-2} (B_2 - B_1 A)
  \\
  &
  \qquad \qquad
  + \dots
  + x (B_{n-1} - B_{n-2} A)
  + (- B_{n-1} A).
\end{aligned}
\]
比较左边与右边，得
\[
\begin{aligned}
  B_0                 & = c_0 I,     \\
  B_1 - B_0 A         & = c_1 I,     \\
  B_2 - B_1 A         & = c_2 I,     \\
  & \dots, \\
  B_{n-1} - B_{n-2} A & = c_{n-1} I, \\
  - B_{n-1} A         & = c_n I.
\end{aligned}
\]
则
\[
\begin{aligned}
  B_0 A^{n-1}               & = (c_0 I) A^{n-1}, \\
  (B_1 - B_0 A) A^{n-2}     & = (c_1 I) A^{n-2}, \\
  (B_2 - B_1 A) A^{n-3}     & = (c_2 I) A^{n-3}, \\
  & \dots, \\
  (B_{n-1} - B_{n-2} A) A^0 & = (c_{n-1} I) A^0.
\end{aligned}
\]
则
\[
\begin{aligned}
  B_0 A^{n-1}               & = c_0 A^{n-1}, \\
  B_1 A^{n-2} - B_0 A^{n-1} & = c_1 A^{n-2}, \\
  B_2 A^{n-3} - B_1 A^{n-2} & = c_2 A^{n-3}, \\
  & \dots, \\
  B_{n-1} - B_{n-2} A       & = c_{n-1} I.
\end{aligned}
\]
则
\[
\begin{aligned}
  B_{n-1} = c_0 A^{n-1} + c_1 A^{n-2} + \dots + c_{n-1} I.
\end{aligned}
\]

由 \(B_{n-1} = \operatorname{adj} {(-A)}\)，
知
\[
\begin{aligned}
  \operatorname{adj} {(-A)}
  = c_0 A^{n-1} + c_1 A^{n-2} + \dots + c_{n-1} I.
\end{aligned}
\]

由 \(-B_{n-1} A = c_n I\)，知
\[
\begin{aligned}
  0
  = {} &
  B_{n-1} A + c_n I
  \\
  = {} &
  (c_0 A^{n-1} + c_1 A^{n-2} + \dots + c_{n-1} I) A + c_n I
  \\
  = {} &
  c_0 A^{n} + c_1 A^{n-1} + \dots + c_{n-1} A + c_{n} I.
\end{aligned}
\]

最后，由前面的例，
\(1 \leqslant k \leqslant n\) 时，
\[
\begin{aligned}
  c_k
  = {} &
  \sum_{1 \leqslant j_1 < \dots < j_k \leqslant n}
  \det {\left(
      (-A) \genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
  \right)}
  \\
  = {} &
  \sum_{1 \leqslant j_1 < \dots < j_k \leqslant n}
  (-1)^k
  \det {\left(
      A \genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
  \right)}
  \\
  = {} &
  (-1)^k
  \sum_{1 \leqslant j_1 < \dots < j_k \leqslant n}
  \det {\left(
      A \genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
  \right)};
\end{aligned}
\]
特别地，\(c_n = (-1)^n \det {(A)}\)。
:::

::: theorem
设 \(A\) 是 \(n\) 级阵。

(1)
存在跟 \(A\) 的元有关的数
\(c_0\)、\(c_1\)、\(\dots\)、\(c_n\)，
使对任何数 \(x\)，
\[
\begin{aligned}
  \det {(xI - A)} = c_0 x^n + c_1 x^{n-1} + \dots + c_n,
\end{aligned}
\]
其中，\(c_0 = 1\)，
且 \(c_n = (-1)^n \det {(A)}\)。
更具体地，
\(1 \leqslant k \leqslant n\) 时，
\[
\begin{aligned}
  c_k
  = {} &
  (-1)^k
  \sum_{1 \leqslant j_1 < \dots < j_k \leqslant n}
  \det {\left(
      A \genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
  \right)}.
\end{aligned}
\]

(2)
用 \(A\) 的一些非负整数次方的数乘的和，
我们可如此表示 \(-A\) 的古伴：
\[
\begin{aligned}
  \operatorname{adj} {(-A)}
  = c_0 A^{n-1} + c_1 A^{n-2} + \dots + c_{n-1} I.
\end{aligned}
\]
则 \(A\) 的古伴
\[
\begin{aligned}
  \operatorname{adj} {(A)}
  = (-1)^{n-1} \operatorname{adj} {(-A)}
  = (-1)^{n-1} (c_0 A^{n-1} + c_1 A^{n-2} + \dots + c_{n-1} I).
\end{aligned}
\]

(3)
（Cayley–Hamilton 定理）
\[
\begin{aligned}
  c_0 A^{n} + c_1 A^{n-1} + \dots + c_{n} I = 0.
\end{aligned}
\]
:::

::: example
我们验证 \(n = 2\) 时的情形。
为方便，设
\(A =
    \begin{bmatrix}
      a & b \\
      c & d \\
  \end{bmatrix}\)。
则
\(xI - A =
    \begin{bmatrix}
      x - a & -b    \\
      -c    & x - d \\
  \end{bmatrix}\)。
直接计算，得
\[
\begin{aligned}
  \det {(xI - A)}
  = (x - a)(x - d) - (-c)(-b)
  = 1x^2 + (-(a + d))x + (ad - cb).
\end{aligned}
\]
注意，\((-1)^2 \det {(A)} = ad - cb\)，
且
\[
\begin{aligned}
  (-1)^1
  \sum_{1 \leqslant j_1 \leqslant 2}
  \det {\left(
      A \genfrac{\{}{\}}{0pt}{0}{j_1}{j_1}
  \right)}
  = {} &
  (-1) \left(
    \det {\left(
        A \genfrac{\{}{\}}{0pt}{0}{1}{1}
    \right)}
    +
    \det {\left(
        A \genfrac{\{}{\}}{0pt}{0}{2}{2}
    \right)}
  \right)
  \\
  = {} &
  {-} (a + d).
\end{aligned}
\]
则 (1) 被验证。

因为
\(-A =
    \begin{bmatrix}
      -a & -b \\
      -c & -d \\
  \end{bmatrix}\)，
\[
\begin{aligned}
  \operatorname{adj} {(-A)}
  =
  \begin{bmatrix}
    -d & b  \\
    c  & -a \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    a - (a+d) & b         \\
    c         & d - (a+d) \\
  \end{bmatrix}
  =
  1A + (-(a+d))I.
\end{aligned}
\]
类似地，可验证
\(\operatorname{adj} {(A)}
    = (-1)^{2-1} \operatorname{adj} {(-A)}
  = -(1A + (-(a+d))I)\)；
请允许我留它为您的习题。
则 (2) 被验证。

最后，
\[
\begin{aligned}
  &
  1 A^2 + (-(a + d)) A + (ad - cb) I
  \\
  = {} &
  1
  \begin{bmatrix}
    a & b \\
    c & d \\
  \end{bmatrix}
  \begin{bmatrix}
    a & b \\
    c & d \\
  \end{bmatrix}
  + (-(a + d))
  \begin{bmatrix}
    a & b \\
    c & d \\
  \end{bmatrix}
  + (ad - cb)
  \begin{bmatrix}
    1 & 0 \\
    0 & 1 \\
  \end{bmatrix}
  \\
  = {} &
  \begin{bmatrix}
    a^2 + bc & b(a + d) \\
    c(a + d) & bc + d^2 \\
  \end{bmatrix}
  +
  \begin{bmatrix}
    -a^2 - ad & -b(a + d) \\
    -c(a + d) & -ad - d^2 \\
  \end{bmatrix}
  +
  \begin{bmatrix}
    ad - bc & 0       \\
    0       & ad - bc \\
  \end{bmatrix}
  \\
  = {} &
  \begin{bmatrix}
    0 & 0 \\
    0 & 0 \\
  \end{bmatrix}
  \\
  = {} &
  0.
\end{aligned}
\]
则 (3) 被验证。
:::

::: example
设 \(A\) 是 \(n\) 级阵。
设 \(i\) 是不超过 \(n\) 的正整数。
按行 \(i\) 展开，得
\[
\begin{aligned}
  \det {(A)}
  = [A]_{i,i} \det {(A(i|i))}
  + \sum_{\substack{1 \leqslant \ell \leqslant n \\ \ell \neq i}}
  {(-1)^{i+\ell}\, [A]_{i,\ell} \det {(A(i|\ell))}}.
\end{aligned}
\]
注意，\(A\) 的列 \(i\) 对应
\(A(i|\ell)\) 的列 \(i - \rho(i, \ell)\)。
则
\[
\begin{aligned}
  \det {(A(i|\ell))}
  = \sum_{\substack{1 \leqslant k \leqslant n \\ k \neq i}}
  {(-1)^{k - \rho(k, i) + i - \rho(i, \ell)}\,
  [A]_{k,i} \det {(A({i,k}|{\ell,i}))}}.
\end{aligned}
\]
所以（注意，对整数 \(p\)、\(q\)，
\((-1)^{p+q} = (-1)^{p-q}\)）
\[
\begin{aligned}
  &
  \det {(A)}
  \\
  = {} &
  [A]_{i,i} \det {(A(i|i))}
  + \sum_{\substack{
      1 \leqslant k, \ell \leqslant n \\
  k, \ell \neq i}}
  {(-1)^{k+\ell-\rho(k,i)+\rho(i,\ell)}\,
  [A]_{k,i} [A]_{i,\ell} \det {(A({i,k}|{i,\ell}))}}.
\end{aligned}
\]

设 \(A\) 是反称阵。
则 \([A]_{i,i} = 0\)，
且 \([A]_{k,i} = -[A]_{i,k}\)。
注意，\(1 - \rho(k, i) = \rho(i, k)\)。
则
\[
\begin{aligned}
  \det {(A)}
  =
  \sum_{\substack{
      1 \leqslant k, \ell \leqslant n \\
  k, \ell \neq i}}
  {(-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
  [A]_{i,k} [A]_{i,\ell} \det {(A({i,k}|{i,\ell}))}}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(A)}
  = {} &
  \hphantom{{} + {}}
  \sum_{\substack{
      1 \leqslant k, \ell \leqslant n \\
      k, \ell \neq i        \\
  k = \ell}}
  {(-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
  [A]_{i,k} [A]_{i,\ell} \det {(A({i,k}|{i,\ell}))}}
  \\
  &
  +
  \sum_{\substack{
      1 \leqslant k, \ell \leqslant n \\
      k, \ell \neq i        \\
  k < \ell}}
  {(-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
  [A]_{i,k} [A]_{i,\ell} \det {(A({i,k}|{i,\ell}))}}
  \\
  &
  +
  \sum_{\substack{
      1 \leqslant k, \ell \leqslant n \\
      k, \ell \neq i        \\
  k > \ell}}
  {(-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
  [A]_{i,k} [A]_{i,\ell} \det {(A({i,k}|{i,\ell}))}}
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{\substack{
      1 \leqslant k \leqslant n \\
  k \neq i}}
  { [A]_{i,k}^2 \det {(A({i,k}|{i,k}))}}
  \\
  &
  +
  \sum_{\substack{
      1 \leqslant k, \ell \leqslant n \\
      k, \ell \neq i        \\
  k < \ell}}
  {(-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
  [A]_{i,k} [A]_{i,\ell} \det {(A({i,k}|{i,\ell}))}}
  \\
  &
  +
  \sum_{\substack{
      1 \leqslant k, \ell \leqslant n \\
      k, \ell \neq i        \\
  k < \ell}}
  {(-1)^{\ell+k+\rho(i,\ell)+\rho(i,k)}\,
  [A]_{i,\ell} [A]_{i,k} \det {(A({i,\ell}|{i,k}))}}
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{\substack{
      1 \leqslant k \leqslant n \\
  k \neq i}}
  { [A]_{i,k}^2 \det {(A({i,k}|{i,k}))}}
  \\
  &
  +
  \sum_{\substack{
      1 \leqslant k < \ell \leqslant n \\
  k, \ell \neq i}}
  {(-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
  [A]_{i,k} [A]_{i,\ell} \det {(A({i,k}|{i,\ell}))}}
  \\
  &
  +
  \sum_{\substack{
      1 \leqslant k < \ell \leqslant n \\
  k, \ell \neq i}}
  {(-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
    [A]_{i,k} [A]_{i,\ell}
  \det {(A({i,\ell}|{i,k}))}}.
\end{aligned}
\]
注意，\((A({i,\ell}|{i,k}))^{\mathrm{T}}
    = (A^{\mathrm{T}}) ({i,k}|{i,\ell})
    = (-A) ({i,k}|{i,\ell})
  = - (A({i,k}|{i,\ell}))\)。
则
\[
\begin{aligned}
  \det {(A({i,\ell}|{i,k}))}
  = {} &
  \det {((A({i,\ell}|{i,k}))^{\mathrm{T}})}
  \\
  = {} &
  (-1)^{n-2} \det {(A({i,k}|{i,\ell}))}
  \\
  = {} &
  (-1)^{n} \det {(A({i,k}|{i,\ell}))}.
\end{aligned}
\]
则
\[
\begin{aligned}
  &
  \det {(A)}
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{\substack{
      1 \leqslant k \leqslant n \\
  k \neq i}}
  { [A]_{i,k}^2 \det {(A({i,k}|{i,k}))}}
  \\
  &
  +
  (1 + (-1)^n)
  \sum_{\substack{
      1 \leqslant k < \ell \leqslant n \\
  k, \ell \neq i}}
  {(-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
  [A]_{i,k} [A]_{i,\ell} \det {(A({i,k}|{i,\ell}))}}.
\end{aligned}
\]
回想，对反称阵 \(A\)，
\(\det {(A)} = (\operatorname{pf} {(A)})^2\)。
回想，
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
回想，
\[
\begin{aligned}
  (x_1 + x_2 + \dots + x_n)^2
  = (x_1^2 + x_2^2 + \dots + x_n^2)
  + 2 \sum_{1 \leqslant k < \ell \leqslant n} {x_k x_\ell}.
\end{aligned}
\]
则
\[
\begin{aligned}
  &
  (\operatorname{pf} {(A)})^2
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{\substack{
      1 \leqslant k \leqslant n \\
  k \neq i}}
  {[A]_{i,k}^2
  (\operatorname{pf} {(A({i,k}|{i,k}))})^2}
  \\
  &
  +
  2
  \sum_{\substack{
      1 \leqslant k < \ell \leqslant n \\
  k, \ell \neq i}}
  {
    (-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
    [A]_{i,k} [A]_{i,\ell}
    \operatorname{pf} {(A({i,k}|{i,k}))}
    \operatorname{pf} {(A({i,\ell}|{i,\ell}))}
  }.
\end{aligned}
\]
注意，\(\det {(A({i,k}|{i,k}))}
  = (\operatorname{pf} {(A({i,k}|{i,k}))})^2\)。
则
\[
\begin{aligned}
  &
  (1 + (-1)^n)
  \sum_{\substack{
      1 \leqslant k < \ell \leqslant n \\
  k, \ell \neq i}}
  {(-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
  [A]_{i,k} [A]_{i,\ell} \det {(A({i,k}|{i,\ell}))}}
  \\
  = {} &
  2
  \sum_{\substack{
      1 \leqslant k < \ell \leqslant n \\
  k, \ell \neq i}}
  {
    (-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
    [A]_{i,k} [A]_{i,\ell}
    \operatorname{pf} {(A({i,k}|{i,k}))}
    \operatorname{pf} {(A({i,\ell}|{i,\ell}))}
  }.
\end{aligned}
\]

以下，设 \(n\) 是偶数。
则
\[
\begin{aligned}
  &
  \sum_{\substack{
      1 \leqslant k < \ell \leqslant n \\
  k, \ell \neq i}}
  {(-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
  [A]_{i,k} [A]_{i,\ell} \det {(A({i,k}|{i,\ell}))}}
  \\
  = {} &
  \sum_{\substack{
      1 \leqslant k < \ell \leqslant n \\
  k, \ell \neq i}}
  {
    (-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
    [A]_{i,k} [A]_{i,\ell}
    \operatorname{pf} {(A({i,k}|{i,k}))}
    \operatorname{pf} {(A({i,\ell}|{i,\ell}))}
  }.
\end{aligned}
\]

设 \(1 \leqslant u < v \leqslant n\)，
\(u \neq i\)，且 \(v \neq i\)。
作 \(n\) 级反称阵 \(B\)，
其中，
\[
\begin{aligned}
  [B]_{p,q} =
  \begin{cases}
    1,
    & \text{\(p = i\), 且 \(q = u\),
    或 \(p = i\), 且 \(q = v\)};       \\
    -1,
    & \text{\(p = u\), 且 \(q = i\),
    或 \(p = v\), 且 \(q = i\)};       \\
    0,
    & \text{\(p = i\), 且 \(q \neq u, v\),
    或 \(q = i\), 且 \(p \neq u, v\)}; \\
    [A]_{p,q},
    & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
注意，\(A(i|i) = B(i|i)\)。
则
\(A({i,k}|{i,k}) = B({i,k}|{i,k})\)，
\(A({i,\ell}|{i,\ell}) = B({i,\ell}|{i,\ell})\)，
且
\(A({i,k}|{i,\ell}) = B({i,k}|{i,\ell})\)。
则，由
\[
\begin{aligned}
  &
  \sum_{\substack{
      1 \leqslant k < \ell \leqslant n \\
  k, \ell \neq i}}
  {(-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
  [B]_{i,k} [B]_{i,\ell} \det {(B({i,k}|{i,\ell}))}}
  \\
  = {} &
  \sum_{\substack{
      1 \leqslant k < \ell \leqslant n \\
  k, \ell \neq i}}
  {
    (-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
    [B]_{i,k} [B]_{i,\ell}
    \operatorname{pf} {(B({i,k}|{i,k}))}
    \operatorname{pf} {(B({i,\ell}|{i,\ell}))}
  },
\end{aligned}
\]
我们得
\[
\begin{aligned}
  &
  \sum_{\substack{
      1 \leqslant k < \ell \leqslant n \\
  k, \ell \neq i}}
  {(-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
  [B]_{i,k} [B]_{i,\ell} \det {(A({i,k}|{i,\ell}))}}
  \\
  = {} &
  \sum_{\substack{
      1 \leqslant k < \ell \leqslant n \\
  k, \ell \neq i}}
  {
    (-1)^{k+\ell+\rho(i,k)+\rho(i,\ell)}\,
    [B]_{i,k} [B]_{i,\ell}
    \operatorname{pf} {(A({i,k}|{i,k}))}
    \operatorname{pf} {(A({i,\ell}|{i,\ell}))}
  }.
\end{aligned}
\]
注意，若 \(k \neq u\)，或 \(k \neq v\)，
或 \(\ell \neq u\)，或 \(\ell \neq v\)，
则 \([B]_{i,k} [B]_{i,\ell} = 0\)。
所以
\[
\begin{aligned}
  &
  (-1)^{u+v+\rho(i,u)+\rho(i,v)}\,
  1 \cdot 1 \cdot
  \det {(A({i,u}|{i,v}))}
  \\
  = {} &
  (-1)^{u+v+\rho(i,u)+\rho(i,v)}\,
  1 \cdot 1 \cdot
  \operatorname{pf} {(A({i,u}|{i,u}))}
  \operatorname{pf} {(A({i,v}|{i,v}))},
\end{aligned}
\]
即
\[
\begin{aligned}
  \det {(A({i,u}|{i,v}))}
  = \operatorname{pf} {(A({i,u}|{i,u}))}
  \operatorname{pf} {(A({i,v}|{i,v}))}.
\end{aligned}
\]

回想，
\[
\begin{aligned}
  \det {(A({i,u}|{i,v}))}
  = (-1)^n \det {(A({i,v}|{i,u}))}
  = \det {(A({i,v}|{i,u}))}.
\end{aligned}
\]
则 \(1 \leqslant v < u \leqslant n\)，
\(u \neq i\)，且 \(v \neq i\) 时，
\[
\begin{aligned}
  \det {(A({i,u}|{i,v}))}
  = {} &
  \det {(A({i,v}|{i,u}))}
  \\
  = {} &
  \operatorname{pf} {(A({i,v}|{i,v}))}
  \operatorname{pf} {(A({i,u}|{i,u}))}
  \\
  = {} &
  \operatorname{pf} {(A({i,u}|{i,u}))}
  \operatorname{pf} {(A({i,v}|{i,v}))}.
\end{aligned}
\]
回想，\(\det {(A({i,u}|{i,u}))}
  = (\operatorname{pf} {(A({i,u}|{i,u}))})^2\)。
于是，对不等于 \(i\) 的，
且不超过 \(n\) 的正整数 \(u\)、\(v\)，
\[
\begin{aligned}
  \det {(A({i,u}|{i,v}))}
  = \operatorname{pf} {(A({i,u}|{i,u}))}
  \operatorname{pf} {(A({i,v}|{i,v}))}.
\end{aligned}
\]
所以，若 \(j \neq i\)，
\[
\begin{aligned}
  &
  \det {(A(i|j))}
  \\
  = {} &
  \sum_{\substack{1 \leqslant k \leqslant n \\ k \neq i}}
  {(-1)^{k - \rho(k, i) + i - \rho(i, j)}\,
  [A]_{k,i} \det {(A({i,k}|{i,j}))}}
  \\
  = {} &
  \sum_{\substack{1 \leqslant k \leqslant n \\ k \neq i}}
  {(-1)^{k - \rho(k, i) + i - \rho(i, j)}\,
    [A]_{k,i}
    \operatorname{pf} {(A({i,k}|{i,k}))}
  \operatorname{pf} {(A({i,j}|{i,j}))}}
  \\
  = {} &
  \sum_{\substack{1 \leqslant k \leqslant n \\ k \neq i}}
  {(-1)^{i + k + 1 - \rho(i, k)} (-1)^{1 - \rho(i, j)}\,
    [A]_{i,k}
    \operatorname{pf} {(A({i,k}|{i,k}))}
  \operatorname{pf} {(A({i,j}|{i,j}))}}
  \\
  = {} &
  (-1)^{\rho(j, i)}
  \operatorname{pf} {(A({i,j}|{i,j}))}
  \sum_{\substack{1 \leqslant k \leqslant n \\ k \neq i}}
  {(-1)^{i - 1 + k + \rho(i, k)}\,
    [A]_{i,k}
  \operatorname{pf} {(A({i,k}|{i,k}))}}
  \\
  = {} &
  (-1)^{\rho(j, i)}
  \operatorname{pf} {(A({i,j}|{i,j}))}
  \operatorname{pf} {(A)}.
\end{aligned}
\]
:::

综上，我们得

::: theorem
设 \(A\) 是 \(2m\) 级反称阵。
设 \(i\) 是不超过 \(2m\) 的正整数。
设不超过 \(2m\) 的正整数 \(k\)、\(\ell\) 不等于 \(i\)。
则
\[
\begin{aligned}
  \det {(A({i,k}|{i,\ell}))}
  = \operatorname{pf} {(A({i,k}|{i,k}))}
  \operatorname{pf} {(A({i,\ell}|{i,\ell}))},
\end{aligned}
\]
且
\[
\begin{aligned}
  \det {(A(i|\ell))}
  = (-1)^{\rho(\ell, i)}
  \operatorname{pf} {(A({i,\ell}|{i,\ell}))}
  \operatorname{pf} {(A)}.
\end{aligned}
\]
则
\[
\begin{aligned}
  [\operatorname{adj} {(A)}]_{i,j}
  = {} &
  (-1)^{j+i} \det {(A(j|i))}
  \\
  = {} &
  \begin{cases}
    (-1)^{\rho(i, j)}
    (-1)^{i+j}
    \operatorname{pf} {(A({i,j}|{i,j}))}
    \operatorname{pf} {(A)},
    & i \neq j; \\
    0,
    & i = j.
  \end{cases}
\end{aligned}
\]
:::

::: example
设 \(A\) 是 \(2m-1\) 级反称阵。
作 \(2m\) 级反称阵 \(B\)，其中，
\[
\begin{aligned}
  [B]_{i,j} =
  \begin{cases}
    0,         & \text{\(i = 2m\), 或 \(j = 2m\)}; \\
    [A]_{i,j}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则 \(B({2m}|{2m}) = A\)。
设 \(i\)、\(j\) 是不超过 \(2m-1\) 的正整数。
则
\[
\begin{aligned}
  \det {(A(j|i))}
  = {} &
  \det {(B({2m,j}|{2m,i}))}
  \\
  = {} &
  \operatorname{pf} {(B({2m,j}|{2m,j}))}
  \operatorname{pf} {(B({2m,i}|{2m,i}))}
  \\
  = {} &
  \operatorname{pf} {(A(j|j))}
  \operatorname{pf} {(A(i|i))}.
\end{aligned}
\]
则
\[
\begin{aligned}
  [\operatorname{adj} {(A)}]_{i,j}
  = {} &
  (-1)^{j+i} \det {(A(j|i))}
  \\
  = {} &
  (-1)^i \operatorname{pf} {(A(i|i))}
  \cdot
  (-1)^j \operatorname{pf} {(A(j|j))}.
\end{aligned}
\]
于是，若 \((2m-1) \times 1\) 阵 \(X\) 适合
\([X]_{i,1}
  = (-1)^i \operatorname{pf} {(A(i|i))}\)，
则 \(\operatorname{adj} {(A)} = X X^{\mathrm{T}}\)。
:::

::: example
设 \(A\) 是 \(2m\) 级反称阵。
它的古伴 \(\operatorname{adj} {(A)}\)
也是反称阵，
故 \(\operatorname{adj} {(A)}\) 的 pfaffian 是有意义的。
则
\[
\begin{aligned}
  \operatorname{pf} {(A^{\mathrm{T}} \operatorname{adj} {(A)}\, A)}
  = \operatorname{pf} {(\operatorname{adj} {(A)})} \det {(A)}.
\end{aligned}
\]
注意，
\[
\begin{aligned}
  A^{\mathrm{T}} \operatorname{adj} {(A)}\, A
  = (-A) (\det {(A)}\, I)
  = (-\det {(A)}) A,
\end{aligned}
\]
故
\(\operatorname{pf} {(A^{\mathrm{T}} \operatorname{adj} {(A)}\, A)}
  = (-\det {(A)})^m \operatorname{pf} {(A)}\)。
于是，若 \(\det {(A)} \neq 0\)，
\[
\begin{aligned}
  \operatorname{pf} {(\operatorname{adj} {(A)})}
  = (-1)^m\, (\det {(A)})^{m-1} \operatorname{pf} {(A)}
  = (-1)^m\, (\operatorname{pf} {(A)})^{2m-1}.
\end{aligned}
\]
若 \(\det {(A)} = 0\)，
则 \(\operatorname{pf} {(A)} = 0\)，
且由前面的结果，\(\operatorname{adj} {(A)} = 0\)。
则
\(\operatorname{pf} {(\operatorname{adj} {(A)})} = 0\)。
故上式仍是对的。
:::

::: example
设运算 \(\mathrm{D}\) 适合，
对任何 \(a\)，\(b\)，
\[
\begin{aligned}
  \mathrm{D} (a + b)     & =
  \mathrm{D} (a) + \mathrm{D} (b), \\
  \mathrm{D} (a \cdot b) & =
  \mathrm{D} (a) \cdot b + a \cdot \mathrm{D} (b).
\end{aligned}
\]
（回想，整式 \(f(x)\) 的 derivative \(\mathrm{D} f(x)\)
的 \(\mathrm{D}\) 适合这些性质。）

由此，\(\mathrm{D} (1)
    = \mathrm{D} (1 \cdot 1)
    = \mathrm{D} (1) \cdot 1 + 1 \cdot \mathrm{D} (1)
  = \mathrm{D} (1) + \mathrm{D} (1)\)。
则 \(\mathrm{D} (1) = 0\)。

注意，\(\mathrm{D} (0)
    = \mathrm{D} (0 + 0)
  = \mathrm{D} (0) + \mathrm{D} (0)\)。
则 \(\mathrm{D} (0) = 0\)。
则 \(\mathrm{D} (0 \cdot x)
  = \mathrm{D} (0) = 0 = 0 \cdot \mathrm{D} (x)\)。

注意，\(\mathrm{D} (0)
    = \mathrm{D} (x + (-x))
  = \mathrm{D} (x) + \mathrm{D} (-x)\)。
则 \(\mathrm{D} (-x) = -\mathrm{D} (x)\)。
则 \(\mathrm{D} (\pm x) = \pm \mathrm{D} (x)\)。
则 \(\mathrm{D} (x \pm y)
    = \mathrm{D} (x) + \mathrm{D} (\pm y)
  = \mathrm{D} (x) \pm \mathrm{D} (y)\)。
于是，若 \(s_1\)、\(s_2\)、\(\dots\)、\(s_n\)
是 \(1\)、\(0\)，或 \(-1\)，
则
\[
\begin{aligned}
  \mathrm{D} \left(
    \sum_{\ell = 1}^{n} {s_\ell x_\ell}
  \right)
  = \sum_{\ell = 1}^{n} {s_\ell \mathrm{D} (x_\ell)}.
\end{aligned}
\]

设 \(A\) 是 \(n\) 级阵。
我们研究，\(\mathrm{D} (\det {(A)})\) 会是何。

设 \(n = 1\)。
则 \(\det {(A)} = [A]_{1,1}\)。
则 \(\mathrm{D} (\det {(A)})
    = \mathrm{D} ([A]_{1,1})
  = \det {[\mathrm{D} ([A]_{1,1})]}\)。

设 \(n = 2\)。
则 \(\det {(A)} = [A]_{1,1} [A]_{2,2} - [A]_{2,1} [A]_{1,2}\)。
则
\[
\begin{aligned}
  &
  \mathrm{D} (\det {(A)})
  \\
  = {} &
  \mathrm{D} ([A]_{1,1} [A]_{2,2} - [A]_{2,1} [A]_{1,2})
  \\
  = {} &
  \mathrm{D} ([A]_{1,1} [A]_{2,2})
  - \mathrm{D} ([A]_{2,1} [A]_{1,2})
  \\
  = {} &
  (\mathrm{D} ([A]_{1,1}) [A]_{2,2} + [A]_{1,1} \mathrm{D} ([A]_{2,2}))
  -
  (\mathrm{D} ([A]_{2,1}) [A]_{1,2} + [A]_{2,1} \mathrm{D} ([A]_{1,2}))
  \\
  = {} &
  (\mathrm{D} ([A]_{1,1}) [A]_{2,2} - [A]_{2,1} \mathrm{D} ([A]_{1,2}))
  +
  ([A]_{1,1} \mathrm{D} ([A]_{2,2}) - \mathrm{D} ([A]_{2,1}) [A]_{1,2})
  \\
  = {} &
  \det {
    \begin{bmatrix}
      \mathrm{D} ([A]_{1,1}) & [A]_{1,2} \\
      \mathrm{D} ([A]_{2,1}) & [A]_{2,2} \\
  \end{bmatrix}}
  +
  \det {
    \begin{bmatrix}
      [A]_{1,1} & \mathrm{D} ([A]_{1,2}) \\
      [A]_{2,1} & \mathrm{D} ([A]_{2,2}) \\
  \end{bmatrix}}.
\end{aligned}
\]

设 \(n = 3\)。
则
\[
\begin{aligned}
  \det {(A)}
  = {} &
  \hphantom{{} + {}}
  [A]_{1,1}
  \det {
    \begin{bmatrix}
      [A]_{2,2} & [A]_{2,3} \\
      [A]_{3,2} & [A]_{3,3} \\
  \end{bmatrix}}
  - [A]_{2,1}
  \det {
    \begin{bmatrix}
      [A]_{1,2} & [A]_{1,3} \\
      [A]_{3,2} & [A]_{3,3} \\
  \end{bmatrix}}
  \\
  &
  + [A]_{3,1}
  \det {
    \begin{bmatrix}
      [A]_{1,2} & [A]_{1,3} \\
      [A]_{2,2} & [A]_{2,3} \\
  \end{bmatrix}}.
\end{aligned}
\]
则
\[
\begin{aligned}
  &
  \mathrm{D} (\det {(A)})
  \\
  = {} &
  \hphantom{{} + {}}
  \mathrm{D} ([A]_{1,1})
  \det {
    \begin{bmatrix}
      [A]_{2,2} & [A]_{2,3} \\
      [A]_{3,2} & [A]_{3,3} \\
  \end{bmatrix}}
  + [A]_{1,1}
  \mathrm{D} \left(
    \det {
      \begin{bmatrix}
        [A]_{2,2} & [A]_{2,3} \\
        [A]_{3,2} & [A]_{3,3} \\
    \end{bmatrix}}
  \right)
  \\
  &
  - \mathrm{D} ([A]_{2,1})
  \det {
    \begin{bmatrix}
      [A]_{1,2} & [A]_{1,3} \\
      [A]_{3,2} & [A]_{3,3} \\
  \end{bmatrix}}
  - [A]_{2,1}
  \mathrm{D} \left(
    \det {
      \begin{bmatrix}
        [A]_{1,2} & [A]_{1,3} \\
        [A]_{3,2} & [A]_{3,3} \\
    \end{bmatrix}}
  \right)
  \\
  &
  + \mathrm{D} ([A]_{3,1})
  \det {
    \begin{bmatrix}
      [A]_{1,2} & [A]_{1,3} \\
      [A]_{2,2} & [A]_{2,3} \\
  \end{bmatrix}}
  + [A]_{3,1}
  \mathrm{D} \left(
    \det {
      \begin{bmatrix}
        [A]_{1,2} & [A]_{1,3} \\
        [A]_{2,2} & [A]_{2,3} \\
    \end{bmatrix}}
  \right)
  \\
  = {} &
  \hphantom{{} + {}}
  \mathrm{D} ([A]_{1,1})
  \det {
    \begin{bmatrix}
      [A]_{2,2} & [A]_{2,3} \\
      [A]_{3,2} & [A]_{3,3} \\
  \end{bmatrix}}
  + [A]_{1,1}
  \det {
    \begin{bmatrix}
      \mathrm{D} ([A]_{2,2}) & [A]_{2,3} \\
      \mathrm{D} ([A]_{3,2}) & [A]_{3,3} \\
  \end{bmatrix}}
  \\
  &
  + [A]_{1,1}
  \det {
    \begin{bmatrix}
      [A]_{2,2} & \mathrm{D} ([A]_{2,3}) \\
      [A]_{3,2} & \mathrm{D} ([A]_{3,3}) \\
  \end{bmatrix}}
  \\
  &
  - \mathrm{D} ([A]_{2,1})
  \det {
    \begin{bmatrix}
      [A]_{1,2} & [A]_{1,3} \\
      [A]_{3,2} & [A]_{3,3} \\
  \end{bmatrix}}
  - [A]_{2,1}
  \det {
    \begin{bmatrix}
      \mathrm{D} ([A]_{1,2}) & [A]_{1,3} \\
      \mathrm{D} ([A]_{3,2}) & [A]_{3,3} \\
  \end{bmatrix}}
  \\
  &
  - [A]_{2,1}
  \det {
    \begin{bmatrix}
      [A]_{1,2} & \mathrm{D} ([A]_{1,3}) \\
      [A]_{3,2} & \mathrm{D} ([A]_{3,3}) \\
  \end{bmatrix}}
  \\
  &
  + \mathrm{D} ([A]_{3,1})
  \det {
    \begin{bmatrix}
      [A]_{1,2} & [A]_{1,3} \\
      [A]_{2,2} & [A]_{2,3} \\
  \end{bmatrix}}
  + [A]_{3,1}
  \det {
    \begin{bmatrix}
      \mathrm{D} ([A]_{1,2}) & [A]_{1,3} \\
      \mathrm{D} ([A]_{2,2}) & [A]_{2,3} \\
  \end{bmatrix}}
  \\
  &
  + [A]_{3,1}
  \det {
    \begin{bmatrix}
      [A]_{1,2} & \mathrm{D} ([A]_{1,3}) \\
      [A]_{2,2} & \mathrm{D} ([A]_{2,3}) \\
  \end{bmatrix}}
  \\
  = {} &
  \hphantom{{} + {}}
  \det {
    \begin{bmatrix}
      \mathrm{D} ([A]_{1,1}) & [A]_{1,2} & [A]_{1,3} \\
      \mathrm{D} ([A]_{2,1}) & [A]_{2,2} & [A]_{2,3} \\
      \mathrm{D} ([A]_{3,1}) & [A]_{3,2} & [A]_{3,3} \\
  \end{bmatrix}}
  + \det {
    \begin{bmatrix}
      [A]_{1,1} & \mathrm{D} ([A]_{1,2}) & [A]_{1,3} \\
      [A]_{2,1} & \mathrm{D} ([A]_{2,2}) & [A]_{2,3} \\
      [A]_{3,1} & \mathrm{D} ([A]_{3,2}) & [A]_{3,3} \\
  \end{bmatrix}}
  \\
  &
  + \det {
    \begin{bmatrix}
      [A]_{1,1} & [A]_{1,2} & \mathrm{D} ([A]_{1,3}) \\
      [A]_{2,1} & [A]_{2,2} & \mathrm{D} ([A]_{2,3}) \\
      [A]_{3,1} & [A]_{3,2} & \mathrm{D} ([A]_{3,3}) \\
  \end{bmatrix}}.
\end{aligned}
\]

我们想，我们或许知道 \(\mathrm{D} (\det {(A)})\) 了。
为方便，我们作这样的记号：
若 \(B\) 是 \(m \times n\) 阵，
且 \(\ell\) 是正整数，
则 \(\mathrm{D}_\ell (B)\) 也是 \(m \times n\) 阵，
其中，
\[
\begin{aligned}
  [\mathrm{D}_\ell (B)]_{i,j} =
  \begin{cases}
    \mathrm{D} ([B]_{i,j}), & j = \ell;    \\
    [B]_{i,j},              & \text{别的情形}.
  \end{cases}
\end{aligned}
\]

作命题 \(P(n)\)：
对任何 \(n\) 级阵 \(A\)，
\[
\begin{aligned}
  \mathrm{D} (\det {(A)})
  = \sum_{\ell = 1}^{n} {\det {(\mathrm{D}_\ell (A))}}.
\end{aligned}
\]
我们的目标是，
对任何正整数 \(n\)，\(P(n)\) 是对的。

\(P(1)\) 与 \(P(2)\) 是对的。

假定 \(P(n-1)\) 是对的。
我们由此证明，\(P(n)\) 也是对的。

注意，
\[
\begin{aligned}
  &
  \mathrm{D} (\det {(A)})
  \\
  = {} &
  \mathrm{D} \left(
    \sum_{i = 1}^{n} {(-1)^{i+1} [A]_{i,1} \det {(A(i|1))}}
  \right)
  \\
  = {} &
  \sum_{i = 1}^{n} {(-1)^{i+1} \mathrm{D} ([A]_{i,1} \det {(A(i|1))})}
  \\
  = {} &
  \sum_{i = 1}^{n} {(-1)^{i+1}
    (\mathrm{D} ([A]_{i,1}) \det {(A(i|1))}
  + [A]_{i,1} \mathrm{D} (\det {(A(i|1))}))}
  \\
  = {} &
  \sum_{i = 1}^{n} {(-1)^{i+1}
  \mathrm{D} ([A]_{i,1}) \det {(A(i|1))}}
  +
  \sum_{i = 1}^{n} {(-1)^{i+1}
  [A]_{i,1} \mathrm{D} (\det {(A(i|1))})}.
\end{aligned}
\]
注意，既然 \(A\) 与 \(\mathrm{D}_1 (A)\)
的列 \(j\) 相同（若 \(j \neq 1\)），
则 \(A(i|1) = (\mathrm{D}_1 (A))(i|1)\)。
则
\[
\begin{aligned}
  &
  \sum_{i = 1}^{n} {(-1)^{i+1}
  \mathrm{D} ([A]_{i,1}) \det {(A(i|1))}}
  \\
  = {} &
  \sum_{i = 1}^{n} {(-1)^{i+1}
  \mathrm{D} ([A]_{i,1}) \det {((\mathrm{D}_1 (A))(i|1))}}
  \\
  = {} &
  \det {(\mathrm{D}_1 (A))}.
\end{aligned}
\]

由假定，
\[
\begin{aligned}
  \mathrm{D} (\det {(A(i|1))}) =
  \sum_{v = 1}^{n-1} {\det {(\mathrm{D}_v (A(i|1)))}}.
\end{aligned}
\]
注意，\(\mathrm{D}_v (A(i|1))
  = (\mathrm{D}_{v+1} (A)) (i|1)\)。
则
\[
\begin{aligned}
  \mathrm{D} (\det {(A(i|1))})
  =
  \sum_{v = 1}^{n-1} {\det {((\mathrm{D}_{v+1} (A)) (i|1))}}
  =
  \sum_{\ell = 2}^{n} {\det {((\mathrm{D}_\ell (A)) (i|1))}}.
\end{aligned}
\]
注意，当 \(\ell \neq 1\) 时，
\([\mathrm{D}_\ell (A)]_{i,1} = [A]_{i,1}\)。
则
\[
\begin{aligned}
  &
  \sum_{i = 1}^{n} {(-1)^{i+1}
  [A]_{i,1} \mathrm{D} (\det {(A(i|1))})}
  \\
  = {} &
  \sum_{i = 1}^{n} {(-1)^{i+1}
    [\mathrm{D}_\ell (A)]_{i,1}
    \sum_{\ell = 2}^{n} {\det {((\mathrm{D}_\ell (A)) (i|1))}}
  }
  \\
  = {} &
  \sum_{i = 1}^{n} {
    \sum_{\ell = 2}^{n} {
      (-1)^{i+1} [\mathrm{D}_\ell (A)]_{i,1}
      \det {((\mathrm{D}_\ell (A)) (i|1))}
    }
  }
  \\
  = {} &
  \sum_{\ell = 2}^{n} {
    \sum_{i = 1}^{n} {
      (-1)^{i+1} [\mathrm{D}_\ell (A)]_{i,1}
      \det {((\mathrm{D}_\ell (A)) (i|1))}
    }
  }
  \\
  = {} &
  \sum_{\ell = 2}^{n} {\det {(\mathrm{D}_\ell (A))}}.
\end{aligned}
\]
综上，
\[
\begin{aligned}
  \mathrm{D} (\det {(A)})
  = \det {(\mathrm{D}_1 (A))}
  + \sum_{\ell = 2}^{n} {\det {(\mathrm{D}_\ell (A))}}
  = \sum_{\ell = 1}^{n} {\det {(\mathrm{D}_\ell (A))}}.
\end{aligned}
\]
所以，\(P(n)\) 是对的。
由数学归纳法，待证的命题成立。

注意，既然 \(A\) 与 \(\mathrm{D}_\ell (A)\)
的列 \(j\) 相同（若 \(j \neq \ell\)），
则 \(A(i|\ell) = (\mathrm{D}_\ell (A))(i|\ell)\)。
并且，
\([\mathrm{D}_\ell (A)]_{i,\ell} = \mathrm{D} ([A]_{i,\ell})\)。
则
\[
\begin{aligned}
  \mathrm{D} (\det {(A)})
  = {} &
  \sum_{\ell = 1}^{n} {\det {(\mathrm{D}_\ell (A))}}
  \\
  = {} &
  \sum_{\ell = 1}^{n} {
    \sum_{i = 1}^{n} {
      (-1)^{i+\ell} [\mathrm{D}_\ell (A)]_{i,\ell}
      \det {((\mathrm{D}_\ell (A))(i|\ell))}
    }
  }
  \\
  = {} &
  \sum_{\ell = 1}^{n} {
    \sum_{i = 1}^{n} {
      (-1)^{i+\ell} \mathrm{D} ([A]_{i,\ell})
      \det {(A(i|\ell))}
    }
  }
  \\
  = {} &
  \sum_{\ell = 1}^{n} {
    \sum_{i = 1}^{n} {
      (-1)^{i+\ell}
      \det {(A(i|\ell))}\,
      \mathrm{D} ([A]_{i,\ell})
    }
  }
  \\
  = {} &
  \sum_{\ell = 1}^{n} {
    \sum_{i = 1}^{n} {
      [\operatorname{adj} {(A)}]_{\ell,i}\,
      \mathrm{D} ([A]_{i,\ell})
    }
  }.
\end{aligned}
\]
为方便，我们作这样的记号：
若 \(B\) 是 \(m \times n\) 阵，
则 \(\mathrm{D}_{\mathrm{c}} (B)\) 也是 \(m \times n\) 阵，
其中，
\([\mathrm{D}_{\mathrm{c}} (B)]_{i,j} = \mathrm{D} ([B]_{i,j})\)。
则
\[
\begin{aligned}
  \mathrm{D} (\det {(A)})
  = \sum_{\ell = 1}^{n}
  {[\operatorname{adj} {(A)}\,
  \mathrm{D}_{\mathrm{c}} (A)]_{\ell,\ell}}.
\end{aligned}
\]

最后，我们再引入方阵的 trace：
若 \(A\) 是 \(n\) 级阵，则 \(A\) 的 **trace**
\[
\begin{aligned}
  \operatorname{tr} {(A)} = \sum_{k = 1}^{n} {[A]_{k,k}}.
\end{aligned}
\]
则
\[
\mathrm{D} (\det {(A)})
= \operatorname{tr} {(\operatorname{adj} {(A)}\,
\mathrm{D}_{\mathrm{c}} (A))}.
\]
:::

::: example
设 \(A\) 是 \(n\) 级反称阵。
我们求 \(\mathrm{D} (\operatorname{pf} {(A)})\)。

设 \(n = 1\)。
则 \(\operatorname{pf} {(A)} = 0\)。
则 \(\mathrm{D} (\operatorname{pf} {(A)}) = 0\)。

设 \(n = 2\)。
则 \(\operatorname{pf} {(A)} = [A]_{1,2}\)。
则 \(\mathrm{D} (\operatorname{pf} {(A)})
  = \mathrm{D} ([A]_{1,2})\)。

设 \(n = 3\)。
则 \(\operatorname{pf} {(A)} = 0\)。
则 \(\mathrm{D} (\operatorname{pf} {(A)}) = 0\)。

设 \(n = 4\)。
则 \(\operatorname{pf} {(A)}
  = [A]_{1,2} [A]_{3,4} - [A]_{1,3} [A]_{2,4} + [A]_{1,4} [A]_{2,3}\)。
则
\[
\begin{aligned}
  &
  \mathrm{D} (\operatorname{pf} {(A)})
  \\
  = {} &
  \hphantom{{} + {}}
  \mathrm{D} ([A]_{1,2})\, [A]_{3,4}
  + [A]_{1,2}\, \mathrm{D} ([A]_{3,4})
  - \mathrm{D} ([A]_{1,3})\, [A]_{2,4}
  - [A]_{1,3}\, \mathrm{D} ([A]_{2,4})
  \\
  &
  + \mathrm{D} ([A]_{1,4})\, [A]_{2,3}
  + [A]_{1,4}\, \mathrm{D} ([A]_{2,3})
  \\
  = {} &
  \hphantom{{} + {}}
  \mathrm{D} ([A]_{1,2})\, [A]_{3,4}
  - \mathrm{D} ([A]_{1,3})\, [A]_{2,4}
  + \mathrm{D} ([A]_{1,4})\, [A]_{2,3}
  \\
  &
  + \mathrm{D} ([A]_{2,3})\, [A]_{1,4}
  - \mathrm{D} ([A]_{2,4})\, [A]_{1,3}
  + \mathrm{D} ([A]_{3,4})\, [A]_{1,2}.
\end{aligned}
\]

作命题 \(P(n)\)：
对任何 \(n\) 级反称阵 \(A\)，
\[
\begin{aligned}
  \mathrm{D} (\operatorname{pf} {(A)})
  = \sum_{1 \leqslant i < j \leqslant n}
  {(-1)^{i+j-1} \mathrm{D} ([A]_{i,j})
  \operatorname{pf} {(A({i,j}|{i,j}))}}.
\end{aligned}
\]
再作命题 \(Q(n)\)：
\(P(n-1)\) 与 \(P(n)\) 是对的。
我们用数学归纳法证明，
对任何大于 \(3\) 的正整数 \(n\)，\(Q(n)\) 是对的。
则对不低于 \(3\) 的正整数 \(n\)，\(P(n)\) 是对的。

\(P(3)\) 与 \(P(4)\) 显然地是对的。
则 \(Q(4)\) 是对的。

设 \(Q(n-1)\) 是对的。
则 \(P(n-2)\) 与 \(P(n-1)\) 是对的。
我们要证，\(Q(n)\) 是对的。
则我们要证，\(P(n-1)\) 与 \(P(n)\) 是对的。
于是，若我们以 \(P(n-2)\) 与 \(P(n-1)\) 证，
\(P(n)\) 是对的，
则 \(Q(n)\) 是对的。

设 \(n > 4\)。
则
\[
\begin{aligned}
  &
  \mathrm{D} (\operatorname{pf} {(A)})
  \\
  = {} &
  \mathrm{D} \left(
    \sum_{2 \leqslant \ell \leqslant n}
    {(-1)^{\ell} [A]_{1,\ell}
    \operatorname{pf} {(A({1,\ell}|{1,\ell}))}}
  \right)
  \\
  = {} &
  \sum_{2 \leqslant \ell \leqslant n}
  {(-1)^{\ell}
    \mathrm{D} (
      [A]_{1,\ell}
    \operatorname{pf} {(A({1,\ell}|{1,\ell}))})
  }
  \\
  = {} &
  \sum_{2 \leqslant \ell \leqslant n}
  {(-1)^{\ell}
    (
      \mathrm{D} ([A]_{1,\ell})
      \operatorname{pf} {(A({1,\ell}|{1,\ell}))}
      +
      [A]_{1,\ell}
      \mathrm{D} (\operatorname{pf} {(A({1,\ell}|{1,\ell}))})
    )
  }
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{2 \leqslant \ell \leqslant n}
  {(-1)^{\ell}
    \mathrm{D} ([A]_{1,\ell})
    \operatorname{pf} {(A({1,\ell}|{1,\ell}))}
  }
  \\
  & +
  \sum_{2 \leqslant \ell \leqslant n}
  {(-1)^{\ell} [A]_{1,\ell}
    \mathrm{D} (\operatorname{pf} {(A({1,\ell}|{1,\ell}))})
  }.
\end{aligned}
\]
注意，\([A]_{i,j}\) 在 \(A({1,\ell}|{1,\ell})\)
的位置是行 \(i - \rho(i, 1) - \rho(i, \ell)\)，
列 \(j - \rho(j, 1) - \rho(j, \ell)\)。
（回想，
若 \(i \geqslant j\)，则 \(\rho(i, j) = 1\)，
且若 \(i < j\)，则 \(\rho(i, j) = 0\)。）
由假定，
\[
\begin{aligned}
  &
  \mathrm{D} (\operatorname{pf} {(A({1,\ell}|{1,\ell}))})
  \\
  = {} &
  \sum_{\substack{2 \leqslant i < j \leqslant n \\ i, j \neq \ell}}
  {(-1)^{i-1-\rho(i, \ell)+j-1-\rho(j, \ell)-1}
    \mathrm{D} ([A]_{i,j})
  \operatorname{pf} {(A({1,\ell,i,j}|{1,\ell,i,j}))}}
  \\
  = {} &
  \sum_{\substack{2 \leqslant i < j \leqslant n \\ i, j \neq \ell}}
  {(-1)^{i-1+(\rho(\ell, i)-1)+j-1+(\rho(\ell, j)-1)-1}
    \mathrm{D} ([A]_{i,j})
  \operatorname{pf} {(A({1,\ell,i,j}|{1,\ell,i,j}))}}
  \\
  = {} &
  \sum_{\substack{2 \leqslant i < j \leqslant n \\ i, j \neq \ell}}
  {(-1)^{(i+j-1)-1-\rho(\ell, i)+1-1-\rho(\ell, j)+1}
    \mathrm{D} ([A]_{i,j})
  \operatorname{pf} {(A({1,\ell,i,j}|{1,\ell,i,j}))}}
  \\
  = {} &
  \sum_{\substack{2 \leqslant i < j \leqslant n \\ i, j \neq \ell}}
  {(-1)^{(i+j-1)-\rho(\ell, i)-\rho(\ell, j)}
    \mathrm{D} ([A]_{i,j})
  \operatorname{pf} {(A({1,\ell,i,j}|{1,\ell,i,j}))}}.
\end{aligned}
\]
为方便，我们简单地写 \(A({1,\ell,i,j}|{1,\ell,i,j})\)
为 \(A_{1,\ell,i,j}\)。
则
\[
\begin{aligned}
  &
  \sum_{2 \leqslant \ell \leqslant n}
  (-1)^{\ell} [A]_{1,\ell}
  \mathrm{D} (\operatorname{pf} {(A({1,\ell}|{1,\ell}))})
  \\
  = {} &
  \sum_{2 \leqslant \ell \leqslant n}
  (-1)^{\ell} [A]_{1,\ell}
  \sum_{\substack{2 \leqslant i < j \leqslant n \\ i, j \neq \ell}}
  (-1)^{(i+j-1)-\rho(\ell, i)-\rho(\ell, j)}
  \mathrm{D} ([A]_{i,j})
  \operatorname{pf} {(A_{1,\ell,i,j})}
  \\
  = {} &
  \sum_{2 \leqslant \ell \leqslant n}
  \sum_{\substack{2 \leqslant i < j \leqslant n \\ i, j \neq \ell}}
  (-1)^{\ell} [A]_{1,\ell}
  (-1)^{(i+j-1)-\rho(\ell, i)-\rho(\ell, j)}
  \mathrm{D} ([A]_{i,j})
  \operatorname{pf} {(A_{1,\ell,i,j})}
  \\
  = {} &
  \sum_{2 \leqslant \ell \leqslant n}
  \sum_{\substack{2 \leqslant i < j \leqslant n \\ i, j \neq \ell}}
  (-1)^{i+j-1} \mathrm{D} ([A]_{i,j})
  (-1)^{\ell-\rho(\ell, i)-\rho(\ell, j)} [A]_{1,\ell}
  \operatorname{pf} {(A_{1,\ell,i,j})}
  \\
  = {} &
  \sum_{2 \leqslant i < j \leqslant n}
  \sum_{\substack{2 \leqslant \ell \leqslant n \\ \ell \neq i, j}}
  (-1)^{i+j-1} \mathrm{D} ([A]_{i,j})
  (-1)^{\ell-\rho(\ell, i)-\rho(\ell, j)} [A]_{1,\ell}
  \operatorname{pf} {(A_{1,\ell,i,j})}
  \\
  = {} &
  \sum_{2 \leqslant i < j \leqslant n}
  (-1)^{i+j-1} \mathrm{D} ([A]_{i,j})
  \sum_{\substack{2 \leqslant \ell \leqslant n \\ \ell \neq i, j}}
  (-1)^{\ell-\rho(\ell, i)-\rho(\ell, j)} [A]_{1,\ell}
  \operatorname{pf} {(A_{1,\ell,i,j})}
  \\
  = {} &
  \sum_{\substack{1 \leqslant i < j \leqslant n \\ i \geqslant 2}}
  {
    (-1)^{i+j-1} \mathrm{D} ([A]_{i,j})
    \operatorname{pf} {(A({i,j}|{i,j}))}
  }.
\end{aligned}
\]
注意，
\[
\begin{aligned}
  &
  \sum_{2 \leqslant \ell \leqslant n}
  {(-1)^{\ell}
    \mathrm{D} ([A]_{1,\ell})
    \operatorname{pf} {(A({1,\ell}|{1,\ell}))}
  }
  \\
  = {} &
  \sum_{\substack{1 \leqslant i < j \leqslant n \\ i = 1}}
  {
    (-1)^{i+j-1} \mathrm{D} ([A]_{i,j})
    \operatorname{pf} {(A({i,j}|{i,j}))}
  }.
\end{aligned}
\]
综上，
\[
\begin{aligned}
  \mathrm{D} (\operatorname{pf} {(A)})
  = {} &
  \hphantom{{} + {}}
  \sum_{\substack{1 \leqslant i < j \leqslant n \\ i = 1}}
  {
    (-1)^{i+j-1} \mathrm{D} ([A]_{i,j})
    \operatorname{pf} {(A({i,j}|{i,j}))}
  }
  \\
  &
  +
  \sum_{\substack{1 \leqslant i < j \leqslant n \\ i \geqslant 2}}
  {
    (-1)^{i+j-1} \mathrm{D} ([A]_{i,j})
    \operatorname{pf} {(A({i,j}|{i,j}))}
  }
  \\
  = {} &
  \sum_{1 \leqslant i < j \leqslant n}
  {(-1)^{i+j-1} \mathrm{D} ([A]_{i,j})
  \operatorname{pf} {(A({i,j}|{i,j}))}}.
\end{aligned}
\]
所以，\(P(n)\) 是对的。
则 \(Q(n)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: example
回想，若 \(A\) 是 \(n\) 级阵，则 \(A\) 的 trace
\[
\begin{aligned}
  \operatorname{tr} {(A)} = \sum_{k = 1}^{n} {[A]_{k,k}}.
\end{aligned}
\]
我们说，trace 也是方阵的一个属性，
就像行列式是方阵的一个属性那样。

设 \(A\)、\(B\) 是 \(n\) 级阵。
设 \(s\) 是数。
设 \(C\) 是 \(n \times m\) 阵，
且 \(D\) 是 \(m \times n\) 阵。
则：

(1)
\(\operatorname{tr} {(A + B)}
  = \operatorname{tr} {(A)} + \operatorname{tr} {(B)}\)。
注意，
\[
\begin{aligned}
  \operatorname{tr} {(A + B)}
  = {} &
  \sum_{k = 1}^{n} {[A + B]_{k,k}}
  \\
  = {} &
  \sum_{k = 1}^{n} {([A]_{k,k} + [B]_{k,k})}
  \\
  = {} &
  \sum_{k = 1}^{n} {[A]_{k,k}}
  + \sum_{k = 1}^{n} {[B]_{k,k}}
  \\
  = {} &
  \operatorname{tr} {(A)}
  + \operatorname{tr} {(B)}.
\end{aligned}
\]

(2)
\(\operatorname{tr} {(s A)} = s \operatorname{tr} {(A)}\)。
注意，
\[
\begin{aligned}
  \operatorname{tr} {(s A)}
  = \sum_{k = 1}^{n} {[s A]_{k,k}}
  = \sum_{k = 1}^{n} {s\, [A]_{k,k}}
  = s \sum_{k = 1}^{n} {[A]_{k,k}}
  = s \operatorname{tr} {(A)}.
\end{aligned}
\]

(3)
\(\operatorname{tr} {(A^{\mathrm{T}})} = \operatorname{tr} {(A)}\)。
注意，
\[
\begin{aligned}
  \operatorname{tr} {(A^{\mathrm{T}})}
  = \sum_{k = 1}^{n} {[A^{\mathrm{T}}]_{k,k}}
  = \sum_{k = 1}^{n} {[A]_{k,k}}
  = \operatorname{tr} {(A)}.
\end{aligned}
\]

(4)
\(\operatorname{tr} {(C D)} = \operatorname{tr} {(D C)}\)。
注意，
\[
\begin{aligned}
  \operatorname{tr} {(C D)}
  = {} &
  \sum_{k = 1}^{n} {[C D]_{k,k}}
  \\
  = {} &
  \sum_{k = 1}^{n} {
    \sum_{\ell = 1}^{m} {
      [C]_{k,\ell} [D]_{\ell,k}
    }
  }
  \\
  = {} &
  \sum_{\ell = 1}^{m} {
    \sum_{k = 1}^{n} {
      [C]_{k,\ell} [D]_{\ell,k}
    }
  }
  \\
  = {} &
  \sum_{\ell = 1}^{m} {
    \sum_{k = 1}^{n} {
      [D]_{\ell,k} [C]_{k,\ell}
    }
  }
  \\
  = {} &
  \sum_{\ell = 1}^{m} {[D C]_{\ell,\ell}}
  \\
  = {} &
  \operatorname{tr} {(D C)}.
\end{aligned}
\]
（其实，此事是 @emp:sum-of-principal-minors-of-AB-and-that-of-BA
的一个特别的情形。）

值得提，当 \(n \geqslant 2\) 时，
\(\operatorname{tr} {(A B)}
  = \operatorname{tr} {(A)} \operatorname{tr} {(B)}\)
一般不是对的。
为此，设 \(A\)、\(B\) 是这样的 \(n\) 级阵：
\[
\begin{aligned}
  [A]_{i,j} =
  \begin{cases}
    1, & i = j = 1;   \\
    0, & \text{别的情形},
  \end{cases}
  \quad
  [B]_{i,j} =
  \begin{cases}
    1, & i = j = 2;   \\
    0, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
可以验证，\(A B = 0\)。
则 \(\operatorname{tr} {(A B)} = 0\)。
但是，\(\operatorname{tr} {(A)} = 1 = \operatorname{tr} {(B)}\)。
:::

::: example
设 \(A\) 是 \(n\) 级阵。
则存在 \(n\) 级阵 \(B\)，
使 \(AB = \det {(A)}\, I_n = BA\)。

我们知道，\(A \operatorname{adj} {(A)}
    = \det {(A)}\, I_n
  = \operatorname{adj} {(A)}\, A\)。
若 \(\operatorname{adj} {(A)} \neq 0\)，
我们取 \(B\) 为 \(\operatorname{adj} {(A)}\)。

以下，我们设 \(\operatorname{adj} {(A)} = 0\)。
注意，此时，\(n > 1\)
（注意，若 \(n = 1\)，则 \(A\) 的古伴总为 \(I_1\)），
且 \(\det {(A)} = 0\)。

若 \(A = 0\)，我们可取 \(B\) 为任何非零的 \(n\) 级阵
（如 \(I_n\)）。

以下，我们设 \(\operatorname{adj} {(A)} = 0\)，
且 \(A \neq 0\)。
注意，此时，\(n > 2\)
（注意，若 \(n = 2\)，则 \(A\) 的古伴不为 \(0\)，
除非 \(A = 0\)）。

我们说，存在小于 \(n-1\) 的正整数 \(r\)，
使 \(A\) 有行列式非零的 \(r\) 级子阵，
且 \(A\) 没有行列式非零的 \(r+1\) 级子阵。
设
\(C = A\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_{r+1}}{j_1,j_2,\dots,j_{r+1}}\)
（其中，\(i_1 < i_2 < \dots < i_{r+1}\)，
且 \(j_1 < j_2 < \dots < j_{r+1}\)；
则 \([C]_{s,t} = [A]_{i_s,j_t}\)）
是 \(A\) 的一个 \(r+1\) 级子阵，
且 \(C\) 有行列式非零的 \(r\) 级子阵
（此 \(r\) 级子阵当然是 \(A\) 的行列式非零的 \(r\) 级子阵）。
则 \(\operatorname{adj} {(C)} \neq 0\)，
且 \(C \operatorname{adj} {(C)} = 0
  = \operatorname{adj} {(C)}\, C\)。

作 \(n\) 级阵 \(B\)，使
\[
\begin{aligned}
  [B]_{i,j} =
  \begin{cases}
    [\operatorname{adj} {(C)}]_{t,s},
    & \text{若 \(i\) 等于某 \(j_t\), 且 \(j\) 等于某 \(i_s\)};
    \\
    0,
    & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则 \(B \neq 0\)
（因为 \(\operatorname{adj} {(C)}\) 的元都是 \(B\) 的元，
且 \(\operatorname{adj} {(C)} \neq 0\)）。
我们说明，\(A B = 0 = \det {(A)}\, I_n\)，
且 \(B A = 0 = \det {(A)}\, I_n\)。

注意，
\[
\begin{aligned}
  [A B]_{i,j}
  = {} &
  \sum_{1 \leqslant \ell \leqslant n} {[A]_{i,\ell} [B]_{\ell,j}}
  \\
  = {} &
  \sum_{\substack{1 \leqslant \ell \leqslant n \\ \ell\,\text{等于某}\,j_t}}
  {[A]_{i,\ell} [B]_{\ell,j}}
  + \sum_{\substack{1 \leqslant \ell \leqslant n \\ \ell\,\text{不等于任何}\,j_t}}
  {[A]_{i,\ell} [B]_{\ell,j}}
  \\
  = {} &
  \sum_{1 \leqslant t \leqslant r+1}
  {[A]_{i,j_t} [B]_{j_t,j}}
  + \sum_{\substack{1 \leqslant \ell \leqslant n \\ \ell\,\text{不等于任何}\,j_t}}
  {[A]_{i,\ell} 0}
  \\
  = {} &
  \sum_{1 \leqslant t \leqslant r+1}
  {[A]_{i,j_t} [B]_{j_t,j}}.
\end{aligned}
\]
若 \(j\) 不等于任何 \(i_s\)，则 \([B]_{j_t,j} = 0\)。
则 \([A B]_{i,j} = 0\)。
若 \(j\) 等于某 \(i_s\)，则
\[
\begin{aligned}
  [A B]_{i,i_s}
  = {} &
  \sum_{1 \leqslant t \leqslant r+1} {[A]_{i,j_t} [B]_{j_t,i_s}}
  \\
  = {} &
  \sum_{1 \leqslant t \leqslant r+1}
  {[A]_{i,j_t} [\operatorname{adj} {(C)}]_{t,s}}.
\end{aligned}
\]
若 \(i\) 等于某 \(i_k\)，则
\[
\begin{aligned}
  [A B]_{i_k,i_s}
  = {} &
  \sum_{1 \leqslant t \leqslant r+1}
  {[A]_{i_k,j_t} [\operatorname{adj} {(C)}]_{t,s}}
  \\
  = {} &
  \sum_{1 \leqslant t \leqslant r+1}
  {[C]_{k,t} [\operatorname{adj} {(C)}]_{t,s}}
  \\
  = {} &
  [C \operatorname{adj} {(C)}]_{k,s}
  \\
  = {} &
  [0]_{k,s}
  \\
  = {} &
  0.
\end{aligned}
\]
若 \(i\) 不等于任何 \(i_k\)，则
\[
\begin{aligned}
  [A B]_{i,i_s}
  = {} &
  \sum_{1 \leqslant t \leqslant r+1}
  {[A]_{i,j_t} [\operatorname{adj} {(C)}]_{t,s}}
  \\
  = {} &
  \sum_{1 \leqslant t \leqslant r+1}
  {[A]_{i,j_t}\, (-1)^{s+t} \det {(C(s|t))}}.
\end{aligned}
\]
作 \(r+1\) 级阵 \(D\)，使
\[
\begin{aligned}
  [D]_{u,v} =
  \begin{cases}
    [A]_{i,j_v}, & u = s;       \\
    [C]_{u,v},   & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则 \(C\) 的行 \(u\) 与 \(D\) 的行 \(u\) 相等
（若 \(u \neq s\)）。
则 \(C(s|t) = D(s|t)\)，
且 \([A]_{i,j_t} = [D]_{s,t}\)。
则 \([A B]_{i,i_s} = \det {(D)}\)。

设 \(i\) 在
\(i_1\)、\(\dots\)、\(i_{s-1}\)、\(i\)、\(i_{s+1}\)、\(\dots\)、\(i_{r+1}\)
中是第 \(z\) 小的数。
若 \(z = s\)，则 \(D\) 就是 \(A\) 的 \(r+1\) 级子阵
\(F = A\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_{s-1},i,i_{s+1},\dots,i_{r+1}}{j_1,j_2,\dots,j_{r+1}}\)。
注意，\(\det {(F)} = 0\)。
则 \(\det {(D)} = 0\)。
若 \(z > s\)，
则我们分别地使 \(D\) 的行 \(s\)
与在行 \(s\) 的下面的 \(z - s\) 行，
行 \(i_{s+1}\)、\(\dots\)，行 \(i_z\)，
交换位置，变 \(D\) 为 \(F\)。
则 \(\det {(D)} = (-1)^{z - s} \det {(F)} = 0\)。
若 \(z < s\)，
则我们分别地使 \(D\) 的行 \(s\)
与在行 \(s\) 的上面的 \(s - z\) 行，
行 \(i_{s-1}\)、\(\dots\)，行 \(i_z\)，
交换位置，变 \(D\) 为 \(F\)。
则 \(\det {(D)} = (-1)^{s - z} \det {(F)} = 0\)。
则 \([A B]_{i,i_s} = \det {(D)} = 0\)。

综上，既然 \(A B\) 的每个元都是 \(0\)，则 \(A B = 0\)。

我们可几乎类似地证，\(B A = 0\)。
当然，我们也可这样作。

\(B A = 0\) 相当于
\(A^{\mathrm{T}} B^{\mathrm{T}} = 0^{\mathrm{T}} = 0\)。
注意，\(A^{\mathrm{T}}\) 也有行列式非零的 \(r\) 级子阵，
且 \(A^{\mathrm{T}}\) 也没有行列式非零的 \(r+1\) 级子阵。
注意，
\(C^{\mathrm{T}}
    = A^{\mathrm{T}}
  \genfrac{\{}{\}}{0pt}{0}{j_1,j_2,\dots,j_{r+1}}{i_1,i_2,\dots,i_{r+1}}\)
是 \(A^{\mathrm{T}}\) 的一个 \(r+1\) 级子阵，
且 \(C^{\mathrm{T}}\) 有行列式非零的 \(r\) 级子阵
（此 \(r\) 级子阵当然是 \(A^{\mathrm{T}}\) 的行列式非零的 \(r\) 级子阵）。
则 \(\operatorname{adj} {(C^{\mathrm{T}})} \neq 0\)，
且 \(C^{\mathrm{T}} \operatorname{adj} {(C^{\mathrm{T}})} = 0
  = \operatorname{adj} {(C^{\mathrm{T}})}\, C^{\mathrm{T}}\)。

我们类似地作 \(n\) 级阵 \(G\)，使
\[
\begin{aligned}
  [G]_{i,j} =
  \begin{cases}
    [\operatorname{adj} {(C^{\mathrm{T}})}]_{s,t},
    & \text{若 \(i\) 等于某 \(i_s\), 且 \(j\) 等于某 \(j_t\)};
    \\
    0,
    & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则 \(G = B^{\mathrm{T}}\)。
（注意，\([\operatorname{adj} {(C^{\mathrm{T}})}]_{s,t}
  = [\operatorname{adj} {(C)}]_{t,s}\)，
故 \([G]_{i_s,j_t} = [B]_{j_t,i_s}\)。
在别的情形，\([G]_{i,j} = 0 = [B]_{j,i}\)。）
并且，当然，\(G \neq 0\)。
那么，由前面的讨论，\(A^{\mathrm{T}} B^{\mathrm{T}} = 0\)。
:::

::: example
设 \(n \geqslant 2\)。
设 \(n\) 级复阵 \(A\) 适合
\[
\begin{aligned}
  [A]_{k,\ell} =
  \begin{cases}
    0,                   & 1 \leqslant k = \ell \leqslant n; \\
    k + \mathrm{i} \ell, & 1 \leqslant k < \ell \leqslant n; \\
    \ell + \mathrm{i} k, & 1 \leqslant \ell < k \leqslant n.
  \end{cases}
\end{aligned}
\]
通俗地，比如，当 \(n = 6\) 时，
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    0                & 1 + \mathrm{i} 2 & 1 + \mathrm{i} 3 & 1 + \mathrm{i} 4 & 1 + \mathrm{i} 5 & 1 + \mathrm{i} 6 \\
    1 + \mathrm{i} 2 & 0                & 2 + \mathrm{i} 3 & 2 + \mathrm{i} 4 & 2 + \mathrm{i} 5 & 2 + \mathrm{i} 6 \\
    1 + \mathrm{i} 3 & 2 + \mathrm{i} 3 & 0                & 3 + \mathrm{i} 4 & 3 + \mathrm{i} 5 & 3 + \mathrm{i} 6 \\
    1 + \mathrm{i} 4 & 2 + \mathrm{i} 4 & 3 + \mathrm{i} 4 & 0                & 4 + \mathrm{i} 5 & 4 + \mathrm{i} 6 \\
    1 + \mathrm{i} 5 & 2 + \mathrm{i} 5 & 3 + \mathrm{i} 5 & 4 + \mathrm{i} 5 & 0                & 5 + \mathrm{i} 6 \\
    1 + \mathrm{i} 6 & 2 + \mathrm{i} 6 & 3 + \mathrm{i} 6 & 4 + \mathrm{i} 6 & 5 + \mathrm{i} 6 & 0                \\
  \end{bmatrix}.
\end{aligned}
\]

当 \(n = 2\) 或 \(n = 3\) 时，我们可算出
\[
\begin{aligned}
  \det
  \begin{bmatrix}
    0                & 1 + \mathrm{i} 2 \\
    1 + \mathrm{i} 2 & 0                \\
  \end{bmatrix}
  &
  = -(1 + \mathrm{i} 2)^2
  = 3 - \mathrm{i} 4,
  \\
  \det
  \begin{bmatrix}
    0                & 1 + \mathrm{i} 2 & 1 + \mathrm{i} 3 \\
    1 + \mathrm{i} 2 & 0                & 2 + \mathrm{i} 3 \\
    1 + \mathrm{i} 3 & 2 + \mathrm{i} 3 & 0                \\
  \end{bmatrix}
  &
  = 2 (1 + \mathrm{i} 2) (1 + \mathrm{i} 3) (2 + \mathrm{i} 3)
  = -50 - \mathrm{i} 10.
\end{aligned}
\]
当 \(n > 3\) 时，
具体地计算 \(\det {(A)}\) 是难的，
但我们仍可判断 \(\det {(A)}\) 是否非零。
回想，对 \(n\) 级阵 \(M\)，
若对任何不超过 \(n\) 的正整数 \(k\)，
\[
\begin{aligned}
  |[M]_{k,k}| >
  \sum_{\substack{1 \leqslant \ell \leqslant n \\
  \ell \neq k}} {|[M]_{k,\ell}|},
\end{aligned}
\]
则 \(\det {(M)} \neq 0\)。
不过，注意，\([A]_{i,i} = 0\)，
故我们不能直接地用它。
为此，我们考虑作新的阵，其的行列式是
\(\det {(A)}\) 与非零的数的积。
若新的阵的行列式非零，则 \(\det {(A)} \neq 0\)。

注意，\([A]_{k,\ell} = [A]_{\ell,k}\)。
则 \(A = A^{\mathrm{T}}\)。
注意，若 \(1 \leqslant \ell < n\)，
\[
\begin{aligned}
  [A]_{k,\ell} - [A]_{k,\ell+1} =
  \begin{cases}
    -\mathrm{i},                   & k < \ell;     \\
    -\ell - \mathrm{i} (\ell + 1), & k = \ell;     \\
    \ell + \mathrm{i} (\ell + 1),  & k = \ell + 1; \\
    -1,                            & k > \ell + 1.
  \end{cases}
\end{aligned}
\]
于是，对 \(A\)，我们加列 \(2\) 的 \(-1\) 倍于列 \(1\)，
加列 \(3\) 的 \(-1\) 倍于列 \(2\)，
……
加列 \(n\) 的 \(-1\) 倍于列 \(n-1\)，
得 \(n\) 级阵 \(B\)，
其中，
\[
\begin{aligned}
  [B]_{k,\ell}
  = {} &
  \begin{cases}
    [A]_{k,\ell} - [A]_{k,\ell+1}, & \ell < n; \\
    [A]_{k,n},                     & \ell = n
  \end{cases}
  \\
  = {} &
  \begin{cases}
    -\mathrm{i},                   & 1 \leqslant k < \ell < n;         \\
    -\ell - \mathrm{i} (\ell + 1), & 1 \leqslant k = \ell < n;         \\
    \ell + \mathrm{i} (\ell + 1),  & 1 \leqslant k = \ell + 1 < n + 1; \\
    -1,                            & 2 \leqslant \ell + 1 < k \leqslant n;  \\
    k + \mathrm{i} n,              & 1 \leqslant k < \ell = n;         \\
    0,                             & (k, \ell) = (n, n).
  \end{cases}
\end{aligned}
\]
注意，\(\det {(B)} = \det {(A)}\)。
通俗地，比如，当 \(n = 6\) 时，
\[
\begin{aligned}
  B =
  \begin{bmatrix}
    -1-\mathrm{i}2 & -\mathrm{i}    & -\mathrm{i}    & -\mathrm{i}    & -\mathrm{i}    & 1+\mathrm{i}6 \\
    1+\mathrm{i}2  & -2-\mathrm{i}3 & -\mathrm{i}    & -\mathrm{i}    & -\mathrm{i}    & 2+\mathrm{i}6 \\
    -1             & 2+\mathrm{i}3  & -3-\mathrm{i}4 & -\mathrm{i}    & -\mathrm{i}    & 3+\mathrm{i}6 \\
    -1             & -1             & 3+\mathrm{i}4  & -4-\mathrm{i}5 & -\mathrm{i}    & 4+\mathrm{i}6 \\
    -1             & -1             & -1             & 4+\mathrm{i}5  & -5-\mathrm{i}6 & 5+\mathrm{i}6 \\
    -1             & -1             & -1             & -1             & 5+\mathrm{i}6  & 0             \\
  \end{bmatrix}
\end{aligned}
\]

对 \(B\)，我们加行 \(2\) 的 \(-1\) 倍于行 \(1\)，
加行 \(3\) 的 \(-1\) 倍于行 \(2\)，
……
加行 \(n\) 的 \(-1\) 倍于行 \(n-1\)，
得 \(n\) 级阵 \(C\)，
其中，
\[
\begin{aligned}
  [C]_{k,\ell}
  = {} &
  \begin{cases}
    [B]_{k,\ell} - [B]_{k+1,\ell}, & k < n; \\
    [B]_{n,\ell},                  & k = n
  \end{cases}
  \\
  = {} &
  \begin{cases}
    -2k - \mathrm{i} (2k+2), & 1 \leqslant k = \ell < n;                                \\
    \ell + \mathrm{i} \ell,  & 2 \leqslant k + 1 = \ell < n;                            \\
    k + \mathrm{i} k,        & 2 \leqslant \ell = k + 1 < n;                            \\
    -1,                      & 1 \leqslant k < \ell - 1 = n - 1;                        \\
    -1,                      & 1 \leqslant \ell < k - 1 = n - 1;                        \\
    (n-1) + \mathrm{i} n,    & \text{\((k, \ell) = (n - 1, n)\) 或 \((n, n - 1)\)}; \\
    0,                       & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
注意，\([C]_{k,\ell} = [C]_{\ell,k}\)。
则 \(C = C^{\mathrm{T}}\)。
注意，\(\det {(C)} = \det {(B)} = \det {(A)}\)。
通俗地，比如，当 \(n = 6\) 时，
\[
\begin{aligned}
  C =
  \begin{bmatrix}
    -2-\mathrm{i}4 & 2+\mathrm{i}2  & 0              & 0               & 0                & -1            \\
    2+\mathrm{i}2  & -4-\mathrm{i}6 & 3+\mathrm{i}3  & 0               & 0                & -1            \\
    0              & 3+\mathrm{i}3  & -6-\mathrm{i}8 & 4+\mathrm{i}4   & 0                & -1            \\
    0              & 0              & 4+\mathrm{i}4  & -8-\mathrm{i}10 & 5+\mathrm{i}5    & -1            \\
    0              & 0              & 0              & 5+\mathrm{i}5   & -10-\mathrm{i}12 & 5+\mathrm{i}6 \\
    -1             & -1             & -1             & -1              & 5+\mathrm{i}6    & 0             \\
  \end{bmatrix}.
\end{aligned}
\]

注意，当 \(k = 1\) 时，
\[
\begin{aligned}
  \sum_{1 \leqslant \ell < n} [C]_{k,\ell}
  = {} &
  [C]_{1,1} + [C]_{1,2}
  + \sum_{2 < \ell < n} [C]_{1,\ell}
  \\
  = {} &
  (-2 - \mathrm{i} 4) + (2 + \mathrm{i} 2) + 0
  \\
  = {} &
  {-} \mathrm{i} 2;
\end{aligned}
\]
当 \(1 < k < n-1\) 时，
\[
\begin{aligned}
  \sum_{1 \leqslant \ell < n} [C]_{k,\ell}
  = {} &
  \sum_{\ell < k-1} [C]_{k,\ell}
  + [C]_{k,k-1} + [C]_{k,k} + [C]_{k,k+1}
  + \sum_{k+1 < \ell < n} [C]_{k,\ell}
  \\
  = {} &
  0
  + (k + \mathrm{i} k)
  + (-2k - \mathrm{i} (2k + 2))
  + ((k+1) + \mathrm{i} (k+1))
  + 0
  \\
  = {} &
  1 - \mathrm{i};
\end{aligned}
\]
当 \(k = n-1\) 时，
\[
\begin{aligned}
  \sum_{1 \leqslant \ell < n} [C]_{k,\ell}
  = {} &
  \sum_{\ell < n-2} [C]_{n-1,\ell}
  + [C]_{n-1,n-2} + [C]_{n-1,n-1}
  \\
  = {} &
  0 + ((n-1) + \mathrm{i} (n-1))
  + (-2(n-1) - \mathrm{i} (2n))
  \\
  = {} &
  {-(n-1) - \mathrm{i} (n+1)};
\end{aligned}
\]
当 \(k = n\) 时，
\[
\begin{aligned}
  \sum_{1 \leqslant \ell < n} [C]_{k,\ell}
  = {} &
  \sum_{1 \leqslant \ell < n-1} [C]_{n,\ell}
  + [C]_{n,n-1}
  \\
  = {} &
  {-(n-2)} + ((n-1) + \mathrm{i} n)
  \\
  = {} &
  1 + \mathrm{i} n.
\end{aligned}
\]
类似地，
\[
\begin{aligned}
  \sum_{1 \leqslant k < n} [C]_{k,\ell} =
  \begin{cases}
    -\mathrm{i} 2,             & \ell = 1;         \\
    1 - \mathrm{i},            & 1 < \ell < n - 1; \\
    -(n-1) - \mathrm{i} (n+1), & \ell = n - 1;     \\
    1 + \mathrm{i} n,          & \ell = n.
  \end{cases}
\end{aligned}
\]
为此，对 \(C\)，
我们以 \(1 - \mathrm{i}\) 乘列 \(n\)，
且以 \(1 - \mathrm{i}\) 乘行 \(n\)，
得阵 \(D\)，
其中，
\[
\begin{aligned}
  [D]_{k,\ell}
  = {} &
  \begin{cases}
    [C]_{k,\ell},                    & \text{\(1 \leqslant k < n\), 且 \(1 \leqslant \ell < n\)}; \\
    (1 - \mathrm{i})^2\, [C]_{n,n},  & (k, \ell) = (n, n);                             \\
    (1 - \mathrm{i})\, [C]_{k,\ell}, & \text{别的情形}
  \end{cases}
  \\
  = {} &
  \begin{cases}
    [C]_{k,\ell},          & \text{\(1 \leqslant k < n\), 且 \(1 \leqslant \ell < n\)};     \\
    -(1 - \mathrm{i}),     & 1 \leqslant k < \ell - 1 = n - 1;                        \\
    -(1 - \mathrm{i}),     & 1 \leqslant \ell < k - 1 = n - 1;                        \\
    (2n - 1) + \mathrm{i}, & \text{\((k, \ell) = (n - 1, n)\) 或 \((n, n - 1)\)}; \\
    0,                     & (k, \ell) = (n, n).
  \end{cases}
\end{aligned}
\]
注意，\([D]_{k,\ell} = [D]_{\ell,k}\)。
则 \(D = D^{\mathrm{T}}\)。
注意，\(\det {(D)} = (1 - \mathrm{i})^2 \det {(C)}
  = -\mathrm{i} 2 \det {(A)}\)。
通俗地，比如，当 \(n = 6\) 时，
\[
\begin{aligned}
  D =
  \begin{bmatrix}
    -2-\mathrm{i}4 & 2+\mathrm{i}2  & 0              & 0               & 0                & -1+\mathrm{i} \\
    2+\mathrm{i}2  & -4-\mathrm{i}6 & 3+\mathrm{i}3  & 0               & 0                & -1+\mathrm{i} \\
    0              & 3+\mathrm{i}3  & -6-\mathrm{i}8 & 4+\mathrm{i}4   & 0                & -1+\mathrm{i} \\
    0              & 0              & 4+\mathrm{i}4  & -8-\mathrm{i}10 & 5+\mathrm{i}5    & -1+\mathrm{i} \\
    0              & 0              & 0              & 5+\mathrm{i}5   & -10-\mathrm{i}12 & 11+\mathrm{i} \\
    -1+\mathrm{i}  & -1+\mathrm{i}  & -1+\mathrm{i}  & -1+\mathrm{i}   & 11+\mathrm{i}    & 0             \\
  \end{bmatrix}.
\end{aligned}
\]

注意，既然当 \(1 \leqslant k < n\)，且 \(1 \leqslant \ell < n\) 时，
\([D]_{k,\ell} = [C]_{k,\ell}\)，
且 \([D]_{n,\ell} = (1 - \mathrm{i})\, [C]_{n,\ell}\)，
且 \([D]_{k,n} = (1 - \mathrm{i})\, [C]_{k,n}\)，
则
\[
\begin{aligned}
  \sum_{1 \leqslant \ell < n} [D]_{k,\ell}
  = {} &
  \begin{dcases}
    -\mathrm{i} 2,                       & k = 1;         \\
    1 - \mathrm{i},                      & 1 < k < n - 1; \\
    -(n-1) - \mathrm{i} (n+1),           & k = n - 1;     \\
    (1 - \mathrm{i})
    \sum_{1 \leqslant \ell < n} [C]_{k,\ell}, & k = n
  \end{dcases}
  \\
  = {} &
  \begin{dcases}
    -\mathrm{i} 2,             & k = 1;         \\
    1 - \mathrm{i},            & 1 < k < n - 1; \\
    -(n-1) - \mathrm{i} (n+1), & k = n - 1;     \\
    (n+1) + \mathrm{i} (n-1),  & k = n.
  \end{dcases}
\end{aligned}
\]
类似地，
\[
\begin{aligned}
  \sum_{1 \leqslant k < n} [D]_{k,\ell} =
  \begin{cases}
    -\mathrm{i} 2,             & \ell = 1;         \\
    1 - \mathrm{i},            & 1 < \ell < n - 1; \\
    -(n-1) - \mathrm{i} (n+1), & \ell = n - 1;     \\
    (n+1) + \mathrm{i} (n-1),  & \ell = n.
  \end{cases}
\end{aligned}
\]
于是，对 \(D\)，
我们加列 \(1\) 于列 \(n\)，
加列 \(2\) 于列 \(n\)，
……
加列 \(n-1\) 于列 \(n\)，
得阵 \(F\)，
其中，若 \(\ell < n\)，则 \([F]_{k,\ell} = [D]_{k,\ell}\)，
且
\[
\begin{aligned}
  [F]_{k,n}
  = {} &
  [D]_{k,n} + \sum_{1 \leqslant \ell < n} [D]_{k,\ell}
  \\
  = {} &
  \begin{cases}
    -(1 - \mathrm{i}) + (-\mathrm{i} 2),                 & k = 1;         \\
    -(1 - \mathrm{i}) + (1 - \mathrm{i}),                & 1 < k < n - 1; \\
    ((2n-1) + \mathrm{i}) + (-(n-1) - \mathrm{i} (n+1)), & k = n - 1;     \\
    0 + ((n+1) + \mathrm{i} (n-1)),                      & k = n
  \end{cases}
  \\
  = {} &
  \begin{cases}
    -1 - \mathrm{i},          & k = 1;         \\
    0,                        & 1 < k < n - 1; \\
    n - \mathrm{i} n,         & k = n - 1;     \\
    (n+1) + \mathrm{i} (n-1), & k = n.
  \end{cases}
\end{aligned}
\]
注意，\(\det {(F)} = \det {(D)} = -\mathrm{i} 2 \det {(A)}\)。
通俗地，比如，当 \(n = 6\) 时，
\[
\begin{aligned}
  F =
  \begin{bmatrix}
    -2-\mathrm{i}4 & 2+\mathrm{i}2  & 0              & 0               & 0                & -1-\mathrm{i} \\
    2+\mathrm{i}2  & -4-\mathrm{i}6 & 3+\mathrm{i}3  & 0               & 0                & 0             \\
    0              & 3+\mathrm{i}3  & -6-\mathrm{i}8 & 4+\mathrm{i}4   & 0                & 0             \\
    0              & 0              & 4+\mathrm{i}4  & -8-\mathrm{i}10 & 5+\mathrm{i}5    & 0             \\
    0              & 0              & 0              & 5+\mathrm{i}5   & -10-\mathrm{i}12 & 6-\mathrm{i}6 \\
    -1+\mathrm{i}  & -1+\mathrm{i}  & -1+\mathrm{i}  & -1+\mathrm{i}   & 11+\mathrm{i}    & 7+\mathrm{i}5 \\
  \end{bmatrix}.
\end{aligned}
\]

对 \(F\)，
我们加行 \(1\) 于行 \(n\)，
加行 \(2\) 于行 \(n\)，
……
加行 \(n-1\) 于行 \(n\)，
得阵 \(G\)，
其中，若 \(k < n\)，则 \([G]_{k,\ell} = [F]_{k,\ell}\)，
且
\[
\begin{aligned}
  [G]_{n,\ell}
  = {} &
  [F]_{n,\ell} + \sum_{1 \leqslant k < n} [F]_{k,\ell}
  \\
  = {} &
  \begin{dcases}
    [D]_{n,\ell} + \sum_{1 \leqslant k < n} [D]_{k,\ell}, & \ell < n; \\
    [F]_{n,n} + \sum_{1 \leqslant k < n} [F]_{k,n},       & \ell = n
  \end{dcases}
  \\
  = {} &
  \begin{cases}
    -(1 - \mathrm{i}) + (-\mathrm{i} 2),                               & \ell = 1;         \\
    -(1 - \mathrm{i}) + (1 - \mathrm{i}),                              & 1 < \ell < n - 1; \\
    ((2n-1) + \mathrm{i}) + (-(n-1) - \mathrm{i} (n+1)),               & \ell = n - 1;     \\
    ((n+1) + \mathrm{i} (n-1)) + (-1 - \mathrm{i} + n - \mathrm{i} n), & \ell = n
  \end{cases}
  \\
  = {} &
  \begin{cases}
    -1 - \mathrm{i},   & \ell = 1;         \\
    0,                 & 1 < \ell < n - 1; \\
    n - \mathrm{i} n,  & \ell = n - 1;     \\
    2n - \mathrm{i} 2, & \ell = n
  \end{cases}
  \\
  = {} &
  \begin{cases}
    [F]_{\ell,n},      & \ell < n; \\
    2n - \mathrm{i} 2, & \ell = n.
  \end{cases}
\end{aligned}
\]
于是，具体地，
\[
\begin{aligned}
  [G]_{k,\ell} =
  \begin{cases}
    -2k - \mathrm{i} (2k+2), & 1 \leqslant k = \ell < n;                            \\
    \ell + \mathrm{i} \ell,  & 2 \leqslant k + 1 = \ell < n;                        \\
    k + \mathrm{i} k,        & 2 \leqslant \ell = k + 1 < n;                        \\
    -1 - \mathrm{i},         & \text{\((k, \ell) = (1, n)\) 或 \((n, 1)\)};     \\
    n - \mathrm{i} n,        & \text{\((k, \ell) = (n-1, n)\) 或 \((n, n-1)\)}; \\
    2n - \mathrm{i} 2,       & (k, \ell) = (n, n);                             \\
    0,                       & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
注意，\([G]_{k,\ell} = [G]_{\ell,k}\)。
则 \(G = G^{\mathrm{T}}\)。
注意，\(\det {(G)} = \det {(F)} = -\mathrm{i} 2 \det {(A)}\)。
通俗地，比如，当 \(n = 6\) 时，
\[
\begin{aligned}
  G =
  \begin{bmatrix}
    -2-\mathrm{i}4 & 2+\mathrm{i}2  & 0              & 0               & 0                & -1-\mathrm{i}  \\
    2+\mathrm{i}2  & -4-\mathrm{i}6 & 3+\mathrm{i}3  & 0               & 0                & 0              \\
    0              & 3+\mathrm{i}3  & -6-\mathrm{i}8 & 4+\mathrm{i}4   & 0                & 0              \\
    0              & 0              & 4+\mathrm{i}4  & -8-\mathrm{i}10 & 5+\mathrm{i}5    & 0              \\
    0              & 0              & 0              & 5+\mathrm{i}5   & -10-\mathrm{i}12 & 6-\mathrm{i}6  \\
    -1-\mathrm{i}  & 0              & 0              & 0               & 6-\mathrm{i}6    & 12-\mathrm{i}2 \\
  \end{bmatrix}.
\end{aligned}
\]

注意，\([G]_{n-1,n} = n - \mathrm{i} n\)，
但当 \(2 \leqslant \ell < n\) 时，\([G]_{\ell-1,\ell} = \ell + \mathrm{i} \ell\)。
注意，\(\mathrm{i} (n - \mathrm{i} n) = n + \mathrm{i} n\)。
于是，对 \(G\)，我们以 \(\mathrm{i}\) 乘列 \(n\)，
且以 \(\mathrm{i}\) 乘行 \(n\)，
得阵 \(H\)，
其中，
\[
\begin{aligned}
  [H]_{k,\ell}
  = {} &
  \begin{cases}
    [G]_{k,\ell},              & \text{\(1 \leqslant k < n\), 且 \(1 \leqslant \ell < n\)}; \\
    \mathrm{i}^2\, [G]_{n,n},  & (k, \ell) = (n, n);                             \\
    \mathrm{i}\, [G]_{k,\ell}, & \text{别的情形}
  \end{cases}
  \\
  = {} &
  \begin{cases}
    -2k - \mathrm{i} (2k+2), & 1 \leqslant k = \ell < n;                        \\
    \ell + \mathrm{i} \ell,  & 2 \leqslant k + 1 = \ell \leqslant n;                 \\
    k + \mathrm{i} k,        & 2 \leqslant \ell = k + 1 \leqslant n;                 \\
    1 - \mathrm{i},          & \text{\((k, \ell) = (1, n)\) 或 \((n, 1)\)}; \\
    -2n + \mathrm{i} 2,      & (k, \ell) = (n, n);                         \\
    0,                       & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
注意，\([H]_{k,\ell} = [H]_{\ell,k}\)。
则 \(H = H^{\mathrm{T}}\)。
注意，\(\det {(H)} = \mathrm{i}^2 \det {(G)} = \mathrm{i} 2 \det {(A)}\)。
通俗地，比如，当 \(n = 6\) 时，
\[
\begin{aligned}
  H =
  \begin{bmatrix}
    -2-\mathrm{i}4 & 2+\mathrm{i}2  & 0              & 0               & 0                & 1-\mathrm{i}    \\
    2+\mathrm{i}2  & -4-\mathrm{i}6 & 3+\mathrm{i}3  & 0               & 0                & 0               \\
    0              & 3+\mathrm{i}3  & -6-\mathrm{i}8 & 4+\mathrm{i}4   & 0                & 0               \\
    0              & 0              & 4+\mathrm{i}4  & -8-\mathrm{i}10 & 5+\mathrm{i}5    & 0               \\
    0              & 0              & 0              & 5+\mathrm{i}5   & -10-\mathrm{i}12 & 6+\mathrm{i}6   \\
    1-\mathrm{i}   & 0              & 0              & 0               & 6+\mathrm{i}6    & -12+\mathrm{i}2 \\
  \end{bmatrix}.
\end{aligned}
\]

注意，
\[
\begin{aligned}
  |[H]_{k,\ell}|
  = {} &
  \begin{cases}
    \sqrt{8k^2 + 8k + 4}, & 1 \leqslant k = \ell < n;                        \\
    \ell \sqrt{2},        & 2 \leqslant k + 1 = \ell \leqslant n;                 \\
    k \sqrt{2},           & 2 \leqslant \ell = k + 1 \leqslant n;                 \\
    \sqrt{2},             & \text{\((k, \ell) = (1, n)\) 或 \((n, 1)\)}; \\
    \sqrt{4n^2 + 4},      & (k, \ell) = (n, n);                         \\
    0,                    & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则
\[
\begin{aligned}
  \sum_{\substack{1 \leqslant \ell \leqslant n \\
  \ell \neq k}} {|[H]_{k,\ell}|}
  = {} &
  \begin{cases}
    (2k + 1) \sqrt{2}, & k < n; \\
    (n + 1) \sqrt{2},  & k = n.
  \end{cases}
\end{aligned}
\]
注意，
\[
\begin{aligned}
  (\sqrt{8k^2 + 8k + 4})^2 - ((2k + 1) \sqrt{2})^2 & = 2 > 0,         \\
  (\sqrt{4n^2 + 4})^2 - ((n + 1) \sqrt{2})^2       & = 2 (n-1)^2 > 0.
\end{aligned}
\]
所以，对任何不超过 \(n\) 的正整数 \(k\)，
\[
\begin{aligned}
  |[H]_{k,k}| >
  \sum_{\substack{1 \leqslant \ell \leqslant n \\
  \ell \neq k}} {|[H]_{k,\ell}|}.
\end{aligned}
\]
则 \(\det {(H)} \neq 0\)。
则 \(\det {(A)} \neq 0\)。

值得提，若我们记
\(P_j = E(n; \allowbreak
      j+1, \allowbreak
      j; \allowbreak
  -1)\)
（\(j = 1\)、\(\dots\)、\(n-1\)），
\(P_n = M(n; \allowbreak
      n; \allowbreak
  1 - \mathrm{i})\)，
\(P_{n+v} = E(n; \allowbreak
      v, \allowbreak
      n; \allowbreak
  1)\)
（\(v = 1\)、\(\dots\)、\(n-1\)），
与 \(P_{2n} = M(n; \allowbreak
      n; \allowbreak
  \mathrm{i})\)，
且记 \(Q = P_1 P_2 \dots P_{2n}\)，
则
\[
\begin{aligned}
  H
  = {} &
  P_{2n}^{\mathrm{T}}
  ((P_{2n-1}^{\mathrm{T}} \dots P_{n+2}^{\mathrm{T}} P_{n+1}^{\mathrm{T}})
    (P_n^{\mathrm{T}}
      ((P_{n-1}^{\mathrm{T}} \dots P_2^{\mathrm{T}} P_1^{\mathrm{T}})
        A
        \\
        &
        \quad \quad
        \cdot
      (P_1 P_2 \dots P_{n-1}))
    P_n)
  (P_{n+1} P_{n+2} \dots P_{2n-1}))
  P_{2n}
  \\
  = {} &
  (P_{2n}^{\mathrm{T}} \dots P_2^{\mathrm{T}} P_1^{\mathrm{T}})
  A
  (P_1 P_2 \dots P_{2n})
  \\
  = {} &
  (P_1 P_2 \dots P_{2n})^{\mathrm{T}}
  A
  (P_1 P_2 \dots P_{2n})
  \\
  = {} &
  Q^{\mathrm{T}} A Q,
\end{aligned}
\]
且
\[
\begin{aligned}
  \det {(Q)}
  = \det {(P_1)} \det {(P_2)} \dots \det {(P_{2n})}
  = 1^{n-1} \, (1 - \mathrm{i}) \, 1^{n-1} \, \mathrm{i}
  = 1 + \mathrm{i}
  \neq 0.
\end{aligned}
\]
则 \(A\) 与 \(H\) 合同。
注意，
\[
\begin{aligned}
  [P_1 P_2 \dots P_{n-1}]_{k,\ell} =
  \begin{cases}
    -1,             & 2 \leqslant k = \ell + 1 \leqslant n; \\
    [I_n]_{k,\ell}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则
\[
\begin{aligned}
  [(P_1 P_2 \dots P_{n-1}) P_n]_{k,\ell} =
  \begin{cases}
    -1,             & 2 \leqslant k = \ell + 1 \leqslant n; \\
    1 - \mathrm{i}, & (k, \ell) = (n, n);         \\
    [I_n]_{k,\ell}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
注意，
\[
\begin{aligned}
  [P_{n+1} P_{n+2} \dots P_{2n-1}]_{k,\ell} =
  \begin{cases}
    1,              & 1 \leqslant k < n = \ell; \\
    [I_n]_{k,\ell}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则
\[
\begin{aligned}
  [(P_1 P_2 \dots P_{n-1}) P_n
  (P_{n+1} P_{n+2} \dots P_{2n-1})]_{k,\ell} =
  \begin{cases}
    -1,             & 2 \leqslant k = \ell + 1 \leqslant n; \\
    1,              & (k, \ell) = (1, n);         \\
    -\mathrm{i},    & (k, \ell) = (n, n);         \\
    [I_n]_{k,\ell}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则
\[
\begin{aligned}
  [Q]_{k,\ell}
  = {} &
  [(P_1 P_2 \dots P_{n-1}) P_n
  (P_{n+1} P_{n+2} \dots P_{2n-1}) P_{2n}]_{k,\ell}
  \\
  = {} &
  \begin{cases}
    -1,             & 2 \leqslant k = \ell + 1 \leqslant n; \\
    \mathrm{i},     & (k, \ell) = (1, n);         \\
    [I_n]_{k,\ell}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
通俗地，比如，当 \(n = 6\) 时，
\[
\begin{aligned}
  Q =
  \begin{bmatrix}
    1  & 0  & 0  & 0  & 0  & \mathrm{i} \\
    -1 & 1  & 0  & 0  & 0  & 0          \\
    0  & -1 & 1  & 0  & 0  & 0          \\
    0  & 0  & -1 & 1  & 0  & 0          \\
    0  & 0  & 0  & -1 & 1  & 0          \\
    0  & 0  & 0  & 0  & -1 & 1          \\
  \end{bmatrix}.
\end{aligned}
\]
值得提，不难直接地按行 \(1\) 展开算出
（注意，若 \(1 < \ell < n\)，
则 \([Q]_{1,\ell} = 0\)，
且若 \(i < j\)，
则 \(Q(1|1)\) 与 \(Q(1|n)\) 的
\((i, j)\)-元为 \(0\)）
\[
\begin{aligned}
  \det {(Q)}
  = {} &
  (-1)^{1+1} [Q]_{1,1} \det {(Q(1|1))}
  + (-1)^{1+n} [Q]_{1,n} \det {(Q(1|1))}
  \\
  = {} &
  1 \cdot 1^{n-1} + (-1)^{n+1}\, \mathrm{i}\, (-1)^{n-1}
  \\
  = {} &
  1 + \mathrm{i}.
\end{aligned}
\]
:::

::: example
回想，若整式
\(f(x) = a_0 x^n + a_1 x^{n-1} + \dots + a_n\)
（\(n \geqslant 1\)，且 \(a_0 \neq 0\)），
则 \(f(x)\) 的判别式是
\((-1)^{n(n-1)/2} \det {(T(f; n))}\)，
其中，\(2n-1\) 级阵 \(T(f; n)\) 的元
\[
\begin{aligned}
  [T(f; n)]_{i,j} =
  \begin{cases}
    1,
    & \text{\(i = 1\), 且 \(j = 1\)}; \\
    n,
    & \text{\(i = 1\), 且 \(j = n\)}; \\
    0,
    & \text{\(i = 1\), \(j \neq 1\), 且 \(j \neq n\)}; \\
    a_{i-j},
    & \text{\(i \neq 1\), 且 \(j \leqslant n-1\)}; \\
    (1 - (i - j)) a_{i-j+n-1},
    & \text{\(i \neq 1\), 且 \(j \geqslant n\)}.
  \end{cases}
\end{aligned}
\]
现在，我们考虑关于 \(a_0\)、\(a_1\)、\(\dots\)、\(a_n\)
的整式
\[
\begin{aligned}
  \Delta (a_0, a_1, \dots, a_n)
  = (-1)^{n(n-1)/2} \det {(T(f; n))},
\end{aligned}
\]
其中，\(f(x) = a_0 x^n + a_1 x^{n-1} + \dots + a_n\)。
注意，在 \(\Delta (a_0, a_1, \dots, a_n)\)，
\(a_0\) 可以是 \(0\)，
但这不再表示 \(a_0 x^n + a_1 x^{n-1} + \dots + a_n\)
的判别式。

设 \(n \geqslant 2\)。
我们研究 \(\Delta (0, a_1, \dots, a_n)\)
与 \(\Delta (a_1, \dots, a_n)\) 的关系。

为方便，我们约定，若 \(k < 0\) 或 \(k > n\)，
则 \(a_k = 0\)。
设 \(a_0 = 0\)。
记 \(c_k = a_{k+1}\)。
记 \(h(x) = c_0 x^{n-1} + c_1 x^{n-2} + \dots + c_{n-1}\)。
则 \(f(x) = h(x)\)，
且若 \(k < 0\) 或 \(k > n - 1\)，
则 \(c_k = 0\)。
则 \(T(f; n)\) 的元
\[
\begin{aligned}
  [T(f; n)]_{i,j} =
  \begin{cases}
    1,
    & \text{\(i = 1\), \(j = 1\)}; \\
    n,
    & \text{\(i = 1\), \(j = n\)}; \\
    0,
    & \text{\(i = 1\), \(j \neq 1\), \(j \neq n\)}; \\
    c_{(i-1)-j},
    & \text{\(i \neq 1\), \(j \leqslant n-1\)}; \\
    (1 - ((i-1) - (j-1))) c_{(i-1)-(j-1)+n-1-1},
    & \text{\(i \neq 1\), \(j \geqslant n\)}.
  \end{cases}
\end{aligned}
\]
注意，当 \(i = 2\) 时，
\([T(f; n)]_{2,1} = a_1\)，
\([T(f; n)]_{2,n} = (n-1) a_1\)，
且若 \(j \neq 1\)，\(n\)，
则 \([T(f; n)]_{2,j} = 0\)。
则 \(\det {(T(f; n))} = a_1 \det {(U)}\)，
且
\[
\begin{aligned}
  [U]_{i,j} =
  \begin{cases}
    1,
    & \text{\(i = 1\), \(j = 1\)}; \\
    n,
    & \text{\(i = 1\), \(j = n\)}; \\
    0,
    & \text{\(i = 1\), \(j \neq 1\), \(j \neq n\)}; \\
    1,
    & \text{\(i = 2\), \(j = 1\)}; \\
    n-1,
    & \text{\(i = 2\), \(j = n\)}; \\
    0,
    & \text{\(i = 2\), \(j \neq 1\), \(j \neq n\)}; \\
    c_{(i-1)-j},
    & \text{\(i \geqslant 3\), \(j \leqslant n-1\)}; \\
    (1 - ((i-1) - (j-1))) c_{(i-1)-(j-1)+n-1-1},
    & \text{\(i \geqslant 3\), \(j \geqslant n\)}.
  \end{cases}
\end{aligned}
\]
（注意，\(T(f; n)\) 的行 \(2\) 是
\(U\) 的行 \(2\) 的 \(a_1\) 倍，
且它们的别的行相同。）
对 \(U\)，加行 \(2\) 的 \(-1\) 倍于行 \(1\)，
得阵 \(V\)。
则 \(\det {(U)} = \det {(V)}\)，
且
\[
\begin{aligned}
  [V]_{i,j} =
  \begin{cases}
    1,
    & \text{\(i = 1\), \(j = n\)}; \\
    0,
    & \text{\(i = 1\), \(j \neq n\)}; \\
    1,
    & \text{\(i = 2\), \(j = 1\)}; \\
    n-1,
    & \text{\(i = 2\), \(j = n\)}; \\
    0,
    & \text{\(i = 2\), \(j \neq 1\), \(j \neq n\)}; \\
    c_{(i-1)-j},
    & \text{\(i \geqslant 3\), \(j \leqslant n-1\)}; \\
    (1 - ((i-1) - (j-1))) c_{(i-1)-(j-1)+n-1-1},
    & \text{\(i \geqslant 3\), \(j \geqslant n\)}.
  \end{cases}
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(V)}
  = (-1)^{1+n} \, [V]_{1,n} \det {(V(1|n))}
  = (-1)^{1+n} \det {(V(1|n))}.
\end{aligned}
\]
注意，\([V(1|n)]_{1,1} = 1\)，
且若 \(j \neq 1\)，
则 \([V(1|n)]_{1,j} = 0\)。
注意，\((V(1|n))(1|1) = S(h, h'; n-1, n-2)\)。
回想，\(S(h, h'; n-1, n-2)\) 的行 \(1\)
是 \(T(h; n-1)\) 的行 \(1\) 的 \(a_1\) 倍，
且它们的别的行相同。
则
\[
\begin{aligned}
  \det {(V(1|n))}
  = (-1)^{1+1} \, [V(1|n)]_{1,1}
  \det {((V(1|n))(1|1))}
  = a_1 \det {(T(h; n-1))}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(T(f; n))}
  = (-1)^{1+n} a_1^2 \det {(T(h; n-1))}.
\end{aligned}
\]
则
\[
\begin{aligned}
  &
  (-1)^{n(n-1)/2} \det {(T(f; n))}
  \\
  = {} &
  (-1)^{n(n-1)/2} (-1)^{-(n-1)(n-2)/2} (-1)^{1+n}
  a_1^2\, (-1)^{(n-1)(n-2)/2} \det {(T(h; n-1))}.
\end{aligned}
\]
注意，\(n(n-1)/2 - (n-1)(n-2)/2 = n-1\)，
且 \((-1)^{1+n} = (-1)^{n-1}\)，
故
\[
\begin{aligned}
  (-1)^{n(n-1)/2} \det {(T(f; n))}
  = a_1^2\, (-1)^{(n-1)(n-2)/2} \det {(T(h; n-1))},
\end{aligned}
\]
即
\[
\begin{aligned}
  \Delta (0, a_1, \dots, a_n)
  = a_1^2 \Delta (a_1, \dots, a_n).
\end{aligned}
\]

回想，\(a x^2 + b x + c\)（\(a \neq 0\)）
的判别式是 \(b^2 - 4 a c\)
（见“结式的应用”）。
则整式 \(\Delta (a, b, c) = b^2 - 4 a c\)。
回想，\(b x + c\)（\(b \neq 0\)）
的判别式是 \(1\)
（见“结式的应用”）。
则整式 \(\Delta (b, c) = 1\)。
则
\[
\begin{aligned}
  \Delta (0, b, c)
  = b^2 = b^2 \cdot 1 = b^2 \Delta (b, c).
\end{aligned}
\]
故此关系对 \(n = 2\) 是对的。
:::

::: example
设
\[
\begin{aligned}
  f(x) = a_0 x^n + a_1 x^{n-1} + \dots + a_n
  = a_0 (x - x_1) (x - x_2) \dots (x - x_n),
\end{aligned}
\]
且 \(a_0 \neq 0\)，\(n \geqslant 1\)。
设 \(g_1 (x)
  = b_0 x^{\ell} + b_1 x^{\ell-1} + \dots + b_{\ell}\)，
且 \(g_2 (x) = c_0 x^m + c_1 x^{m-1} + \dots + c_m\)。
为方便，约定：
若 \(k < 0\) 或 \(k > n\)，则 \(a_k = 0\)；
若 \(k < 0\) 或 \(k > \ell\)，则 \(b_k = 0\)；
若 \(k < 0\) 或 \(k > m\)，则 \(c_k = 0\)。
则
\[
\begin{aligned}
  g(x) = g_1 (x) g_2 (x)
  = d_0 x^{\ell+m} + d_1 x^{\ell+m-1} + \dots + d_{\ell+m},
\end{aligned}
\]
其中，
\[
\begin{aligned}
  d_k =
  \begin{dcases}
    \sum_{i = 0}^{k} {b_{k-i} c_i},
    & 0 \leqslant k \leqslant \ell + m;
    \\
    0,
    & \text{别的情形}.
  \end{dcases}
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(S(f, g_1; n, \ell))}
  & = a_0^{\ell} g_1 (x_1) g_1 (x_2) \dots g_1 (x_n),
  \\
  \det {(S(f, g_2; n, \ell))}
  & = a_0^m g_2 (x_1) g_2 (x_2) \dots g_2 (x_n),
  \\
  \det {(S(f, g; n, \ell + m))}
  & = a_0^{\ell+m} g (x_1) g (x_2) \dots g (x_n).
\end{aligned}
\]
注意，\(g(x_i) = g_1 (x_i) g_2 (x_i)\)。
不难看出，

```math {@eq:resultant-of-product}
\det {(S(f, g_1 g_2; n, \ell + m))}
= \det {(S(f, g_1; n, \ell))} \det {(S(f, g_2; n, m))}.
```

于是，若 \(f\) 是 \(n\) 次整式，且 \(n \geqslant 1\)，
则式 @eq:resultant-of-product 是对的。

设 \(f(x) = c\)，且 \(n = 0\)，
且 \(\ell\)，\(m \geqslant 1\)。
回想（见“Sylvester 阵与结式”），
\[
\begin{aligned}
  \det {(S(f, g_1; 0, \ell))} & = c^{\ell}, \\
  \det {(S(f, g_2; 0, m))} & = c^m, \\
  \det {(S(f, g_1 g_2; 0, \ell + m))} & = c^{\ell + m}.
\end{aligned}
\]
则式 @eq:resultant-of-product 仍是对的。

设 \(f\) 是 \(k\) 次整式，且 \(1 \leqslant k \leqslant n\)。
仍设 \(\ell\)、\(m\) 是非负整数。
回想（见“Sylvester 阵与结式”），
\[
\begin{aligned}
  \det {(S(f, g_1; n, \ell))}
  & = (-1)^{\ell (n-k)} b_0^{n-k}
  \det {(S(f, g_1; k, \ell))},
  \\
  \det {(S(f, g_2; n, m))}
  & = (-1)^{m (n-k)} c_0^{n-k}
  \det {(S(f, g_2; k, m))},
  \\
  \det {(S(f, g_1 g_2; n, \ell + m))}
  & = (-1)^{(\ell+m) (n-k)} d_0^{n-k}
  \det {(S(f, g_1 g_2; k, \ell + m))}.
\end{aligned}
\]
注意，\(d_0 = b_0 c_0\)，
且
\[
\begin{aligned}
  \det {(S(f, g_1 g_2; k, \ell + m))}
  = \det {(S(f, g_1; k, \ell))} \det {(S(f, g_2; k, m))},
\end{aligned}
\]
则式 @eq:resultant-of-product 仍是对的。

综上，若 \(f\)、\(g_1\)、\(g_2\)
分别是次不高于 \(n\)、\(\ell\)、\(m\) 的整式，
且 \(n + \ell \geqslant 1\)，\(n + m \geqslant 1\)，
则
\[
\begin{aligned}
  \det {(S(f, g_1 g_2; n, \ell + m))}
  = \det {(S(f, g_1; n, \ell))} \det {(S(f, g_2; n, m))}.
\end{aligned}
\]

类似地，我们可以证明，
若 \(f_1\)、\(f_2\)、\(g\)
分别是次不高于 \(p\)、\(q\)、\(r\) 的整式，
且 \(p + r \geqslant 1\)，\(q + r \geqslant 1\)，
则
\[
\det {(S(f_1 f_2, g; p + q, r))}
= \det {(S(f_1, g; p, r))} \det {(S(f_2, g; q, r))}.
\]
:::

::: example
设 \(f(x) = a_0 (x - x_1) \dots (x - x_n)\)，
\(g(x) = b_0 (x - y_1) \dots (x - y_m)\)，
\(a_0\)，\(b_0 \neq 0\)，
且 \(n\)，\(m \geqslant 1\)。
回想（见“Sylvester 阵与结式”）
\[
\begin{aligned}
  &
  \det {(S(f g, \mathrm{D} (f g); m + n, m + n - 1))}
  \\
  = {} &
  \det {(S(f, \mathrm{D} (f g); n, m + n - 1))}
  \det {(S(g, \mathrm{D} (f g); m, m + n - 1))}
  \\
  = {} &
  \hphantom{\cdot\,\,}
  \det {(S(f, (\mathrm{D} f) g + f \mathrm{D} g; n, m + n - 1))}
  \\
  &
  \cdot
  \det {(S(g, (\mathrm{D} f) g + f \mathrm{D} g; m, m + n - 1))}
  \\
  = {} &
  \hphantom{\cdot\,\,}
  \det {(S(f, (\mathrm{D} f) g + f \mathrm{D} g
  + (-\mathrm{D} g) f; n, m + n - 1))}
  \\
  &
  \cdot
  \det {(S(g, (\mathrm{D} f) g + f \mathrm{D} g
  + (-\mathrm{D} f) g; m, m + n - 1))}
  \\
  = {} &
  \det {(S(f, g \mathrm{D} f; n, m + n - 1))}
  \det {(S(g, f \mathrm{D} g; m, m + n - 1))}
  \\
  = {} &
  \hphantom{\cdot\,\,}
  \det {(S(f, g; n, m))}
  \det {(S(f, \mathrm{D} f; n, n-1))}
  \\
  &
  \cdot
  \det {(S(g, f; m, n))}
  \det {(S(g, \mathrm{D} g; m, m-1))}
  \\
  = {} &
  (-1)^{m n} (\det {(S(f, g; n, m))})^2
  \det {(S(f, \mathrm{D} f; n, n-1))}
  \det {(S(g, \mathrm{D} g; m, m-1))}.
\end{aligned}
\]
注意，
\[
\begin{aligned}
  \frac{(m+n) (m+n-1)}{2}
  = {} &
  \frac{m (m-1+n) + n (n-1+m)}{2}
  \\
  = {} &
  \frac{m(m-1) + n(n-1) + 2mn}{2}
  \\
  = {} &
  \frac{m(m-1)}{2} + \frac{n(n-1)}{2} + m n,
\end{aligned}
\]
则
\[
\begin{aligned}
  &
  (-1)^{(m+n) (m+n-1)/2} \det {(T(f g; m + n))}
  \\
  = {} &
  (-1)^{m(m-1)/2} (-1)^{n(n-1)/2} (-1)^{m n}
  (a_0 b_0)^{-1}
  \det {(S(f g, \mathrm{D} (f g); m + n, m + n - 1))}
  \\
  = {} &
  \hphantom{\cdot\,\,}
  (-1)^{m n} (-1)^{m n} (\det {(S(f, g; n, m))})^2
  \\
  &
  \cdot
  (-1)^{n(n-1)/2} a_0^{-1}
  \det {(S(f, \mathrm{D} f; n, n-1))}
  \\
  &
  \cdot
  (-1)^{m(m-1)/2} b_0^{-1}
  \det {(S(g, \mathrm{D} g; m, m-1))}
  \\
  = {} &
  (\det {(S(f, g; n, m))})^2
  \cdot
  (-1)^{n(n-1)/2} \det {(T(f; n))}
  \cdot
  (-1)^{m(m-1)/2} \det {(T(g; m))}.
\end{aligned}
\]
:::

::: example
设 \(g(x)
  = b_0 x^m + b_1 x^{m-1} + \dots + b_{m-1} x + b_m\)。
设 \(f(x)\) 是整式。
则
\[
\begin{aligned}
  b_0 (f(x))^m + b_1 (f(x))^{m-1} + \dots
  + b_{m-1} f(x) + b_m
\end{aligned}
\]
也是整式。
我们记它为 \(g \circ f (x)\)
（\(f\) 与 \(g\) 的**复合**）。
则
\[
\begin{aligned}
  &
  \mathrm{D} (g \circ f) (x)
  \\
  = {} &
  b_0 \mathrm{D} ((f(x))^m)
  + b_1 \mathrm{D} ((f(x))^{m-1})
  + \dots
  + b_{m-1} \mathrm{D} (f(x))
  + 0
  \\
  = {} &
  b_0 (m (f(x))^{m-1} \mathrm{D} f(x))
  + b_1 ((m-1) (f(x))^{m-2} \mathrm{D} f(x))
  + \dots
  + b_{m-1} \mathrm{D} f(x)
  \\
  = {} &
  (m b_0 (f(x))^{m-1}) \mathrm{D} f(x)
  + ((m-1) b_1 (f(x))^{m-2}) \mathrm{D} f(x)
  + \dots
  + b_{m-1} \mathrm{D} f(x)
  \\
  = {} &
  (m b_0 (f(x))^{m-1} + (m-1) b_1 (f(x))^{m-2}
  + \dots + b_{m-1})\,
  \mathrm{D} f(x)
  \\
  = {} &
  (\mathrm{D}g \circ f) (x)\,
  \mathrm{D} f(x).
\end{aligned}
\]

比如，设 \(g(x) = x^2 + x - 1\)，
且 \(f(x) = x^3 + 1\)。
则，一方面，
\[
\begin{aligned}
  g \circ f (x)
  = {} &
  (x^3 + 1)^2 + (x^3 + 1) - 1
  \\
  = {} &
  (x^6 + 2 x^3 + 1) + (x^3 + 1) - 1
  \\
  = {} &
  x^6 + 3 x^3 + 1,
\end{aligned}
\]
所以
\(\mathrm{D} (g \circ f) (x) = 6 x^5 + 9 x^2\)；
另一方面，
因为 \(\mathrm{D} g(x) = 2 x + 1\)，
且 \(\mathrm{D} f(x) = 3 x^2\)，
\[
\begin{aligned}
  (\mathrm{D}g \circ f) (x)\,
  \mathrm{D} f(x)
  = {} &
  (2 (x^3 + 1) + 1) \cdot 3 x^2
  \\
  = {} &
  (2 x^3 + 3) \cdot 3 x^2
  \\
  = {} &
  6 x^5 + 9 x^2.
\end{aligned}
\]
:::

::: example
设
\[
\begin{aligned}
  f(x) = a_0 x^n + a_1 x^{n-1} + \dots + a_n
  = a_0 (x - x_1) (x - x_2) \dots (x - x_n),
\end{aligned}
\]
且 \(a_0 \neq 0\)，\(n \geqslant 1\)。
为方便，约定：
若 \(k < 0\) 或 \(k > n\)，则 \(a_k = 0\)。

记
\[
\begin{aligned}
  L_i (x) =
  \prod_{\substack{1 \leqslant j \leqslant n \\ j \neq i}}
  {(x - x_i)}.
\end{aligned}
\]
注意，\(f(x) = a_0 (x - x_i) L_i (x)\)。
回想，
\[
\begin{aligned}
  \mathrm{D} f(x) =
  a_0 (L_1 (x) + L_2 (x) + \dots + L_n (x)).
\end{aligned}
\]
设 \(\ell\) 是非负整数。
则
\[
\begin{aligned}
  x^{\ell+1} a_0 L_i (x)
  = {} &
  (x^{\ell+1} - x_i^{\ell+1} + x_i^{\ell+1})
  a_0 L_i (x)
  \\
  = {} &
  (x^{\ell+1} - x_i^{\ell+1}) a_0 L_i (x)
  + x_i^{\ell+1} a_0 L_i (x)
  \\
  = {} &
  (x - x_i)
  (x^\ell + x_i x^{\ell-1} + \dots + x_i^\ell)
  a_0 L_i (x)
  + x_i^{\ell+1} a_0 L_i (x)
  \\
  = {} &
  (x^\ell + x_i x^{\ell-1} + \dots + x_i^\ell) f(x)
  + x_i^{\ell+1} a_0 L_i (x).
\end{aligned}
\]
则
\[
\begin{aligned}
  x^{\ell+1} \mathrm{D} f(x)
  = \sum_{i = 1}^{n}
  {(x^\ell + x_i x^{\ell-1} + \dots + x_i^\ell)} f(x)
  + a_0 \sum_{i = 1}^{n} {x_i^{\ell+1} L_i (x)}.
\end{aligned}
\]
记
\[
\begin{aligned}
  r(x) = a_0 \sum_{i = 1}^{n} {x_i^{\ell+1} L_i (x)}.
\end{aligned}
\]
则因为 \(L_i (x)\) 的次是 \(n-1\)，
\(r(x)\) 的次低于 \(n\)。
再记
\[
\begin{aligned}
  s_k =
  \begin{cases}
    x_1^k + x_2^k + \dots + x_n^k, & k \geqslant 0; \\
    0,                             & k < 0.
  \end{cases}
\end{aligned}
\]
则

```math {@eq:newton}
x^{\ell+1} \mathrm{D} f(x)
= (s_0 x^\ell + s_1 x^{\ell-1} + \dots + s_\ell) f(x)
+ r(x),
```

即
\[
\begin{aligned}
  &
  x^{\ell+1}
  (n a_0 x^{n-1} + (n-1) a_1 x^{n-2} + \dots + a_{n-1})
  \\
  = {} &
  (s_0 x^\ell + s_1 x^{\ell-1} + \dots + s_\ell)
  (a_0 x^n + a_1 x^{n-1} + \dots + a_n)
  + r(x),
\end{aligned}
\]
其中，\(r(x)\) 的次低于 \(n\)。
我们比较式 @eq:newton 的 \(2\) 边的 \(x^n\) 项系数。
若 \(\ell + 1 \leqslant n\)（即 \(\ell \leqslant n - 1\)），
则式 @eq:newton 的左边的 \(x^n\) 项系数是
\(1 \cdot (n - \ell) a_\ell = (n - \ell) a_\ell\)，
且式 @eq:newton 的右边的 \(x^n\) 项系数是
\[
\begin{aligned}
  a_0 s_\ell + a_1 s_{\ell-1} + \dots + a_\ell s_0
  = \sum_{0 \leqslant k \leqslant \ell} {a_k s_{\ell-k}}.
\end{aligned}
\]
若 \(\ell + 1 > n\)（即 \(\ell \geqslant n\)），
则式 @eq:newton 的左边的 \(x^n\) 项系数是 \(0\)，
且式 @eq:newton 的右边的 \(x^n\) 项系数是
\[
\begin{aligned}
  a_0 s_\ell + a_1 s_{\ell-1} + \dots + a_n s_{\ell-n}
  = {} &
  \sum_{0 \leqslant k \leqslant n} {a_k s_{\ell-k}}
  \\
  = {} &
  \sum_{0 \leqslant k \leqslant n} {a_k s_{\ell-k}}
  + 0
  \\
  = {} &
  \sum_{0 \leqslant k \leqslant n} {a_k s_{\ell-k}}
  + \sum_{n < k \leqslant \ell} {0 s_{\ell-k}}
  \\
  = {} &
  \sum_{0 \leqslant k \leqslant n} {a_k s_{\ell-k}}
  + \sum_{n < k \leqslant \ell} {a_k s_{\ell-k}}
  \\
  = {} &
  \sum_{0 \leqslant k \leqslant \ell} {a_k s_{\ell-k}}.
\end{aligned}
\]
注意，若 \(\ell = n\)，则
\(0 = 0 a_\ell = (n - \ell) a_\ell\)；
若 \(\ell > n\)，则
\(0 = (n - \ell)\, 0 = (n - \ell) a_\ell\)。
所以，统一地，
\[
\begin{aligned}
  (n - \ell) a_\ell
  = {} &
  \sum_{0 \leqslant k \leqslant \ell} {a_k s_{\ell-k}}
  \\
  = {} &
  a_\ell s_0
  + \sum_{0 \leqslant k < \ell} {a_k s_{\ell-k}}
  \\
  = {} &
  n a_\ell
  + \sum_{0 \leqslant k < \ell} {a_k s_{\ell-k}}.
\end{aligned}
\]
则
\[
\sum_{0 \leqslant k < \ell} {a_k s_{\ell-k}}
+ \ell a_\ell = 0.
\]
:::

续上个例。
回想，在“derivative”，我们知道，
其实，若 \(1 \leqslant k \leqslant n\)，则
\[
\begin{aligned}
  a_k
  = (-1)^k a_0
  \sum_{1 \leqslant v_1 < \dots < v_k \leqslant n}
  {x_{v_1} \dots x_{v_k}}.
\end{aligned}
\]
记
\[
\begin{aligned}
  c_k =
  \begin{dcases}
    \sum_{1 \leqslant v_1 < \dots < v_k \leqslant n}
    {x_{v_1} \dots x_{v_k}},
    {} & 1 \leqslant k \leqslant n; \\
    1, & k = 0; \\
    0, & \text{别的情形}.
  \end{dcases}
\end{aligned}
\]
则 \(a_k = (-1)^k a_0 c_k\)。
取 \(a_0 = 1\)，我们得如下结论。

::: theorem [Newton 公式]
设 \(n\) 是正整数。
设 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\) 是数。
记

```math {@eq:elementary-symmetric-polynomials}
c_k =
\begin{dcases}
    \sum_{1 \leqslant v_1 < \dots < v_k \leqslant n}
    {x_{v_1} \dots x_{v_k}},
    {} & 1 \leqslant k \leqslant n; \\
    1, & k = 0; \\
    0, & \text{别的情形}.
\end{dcases}
```

再记

```math {@eq:sum-of-powers}
s_k =
\begin{cases}
    x_1^k + x_2^k + \dots + x_n^k, & k \geqslant 0; \\
    0,                             & k < 0.
\end{cases}
```

设 \(\ell\) 是非负整数。
则
\[
\begin{aligned}
  \sum_{0 \leqslant k < \ell} {(-1)^k c_k s_{\ell-k}}
  + (-1)^\ell \ell c_\ell = 0.
\end{aligned}
\]
:::

::: example
设 \(n\) 是正整数。
设 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\) 是数。
以式 @eq:elementary-symmetric-polynomials–@eq:sum-of-powers
定义 \(c_k\)、\(s_k\)。
设 \(\ell\) 是正整数。
注意，由 Newton 公式，
若 \(1 \leqslant m \leqslant \ell\)，则
\[
\begin{aligned}
  \sum_{0 \leqslant k < m} {(-1)^k c_k s_{m-k}}
  + (-1)^m m c_m = 0.
\end{aligned}
\]
故
\[
\begin{aligned}
  s_m
  = {} &
  {-\sum_{1 \leqslant k < m} {(-1)^k c_k s_{m-k}}
  - (-1)^m m c_m}
  \\
  = {} &
  \sum_{1 \leqslant k < m} {s_{m-k}\, (-1)^{k-1} c_k}
  + m\, (-1)^{m-1} c_m.
\end{aligned}
\]
作 \(\ell\) 级阵 \(A\)、\(\ell \times 1\) 阵 \(S\)，
与 \(\ell \times 1\) 阵 \(X\)，
使 \([S]_{i,1} = s_i\)，
\([X]_{i,1} = (-1)^{i-1} c_i\)，
且
\[
\begin{aligned}
  [A]_{i,j} =
  \begin{cases}
    s_{i-j}, & 1 \leqslant j < i \leqslant \ell; \\
    i,       & 1 \leqslant j = i \leqslant \ell; \\
    0,       & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则 \(A X = S\)。
注意，\(\det {(A)}
    = [A]_{1,1} [A]_{2,2} \dots [A]_{\ell,\ell}
    = 1 \cdot 2 \cdot \dots \cdot \ell
  = \ell! \neq 0\)。
则，由 Cramer 公式，
\[
\begin{aligned}
  (-1)^{\ell-1} c_\ell
  = [X]_{\ell,1}
  = \frac{\det {(A\{\ell, S\})}}{\det {(A)}},
\end{aligned}
\]
其中，\(A\{\ell, S\}\)
是以 \(S\) 代阵 \(A\) 的列 \(\ell\) 后得到的阵。
对 \(A\{\ell, S\}\)，
作 \(\ell-1\) 次相邻的列的交换，
使它的列 \(\ell\)、\(S\)，在列 \(1\) 的位置，
我们得阵 \(A'\)，
其中，
\[
\begin{aligned}
  [A']_{i,j}
  = {} &
  \begin{cases}
    s_i,         & 1 = j \leqslant i \leqslant \ell;   \\
    s_{i-(j-1)}, & 1 \leqslant j-1 < i \leqslant \ell; \\
    i,           & 1 \leqslant j-1 = i \leqslant \ell; \\
    0,           & \text{别的情形}
  \end{cases}
  \\
  = {} &
  \begin{cases}
    i,           & 1 \leqslant j-1 = i \leqslant \ell; \\
    s_{i-(j-1)}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则
\[
\begin{aligned}
  c_\ell
  = (-1)^{\ell-1}
  \frac{\det {(A\{\ell, S\})}}{\det {(A)}}
  = (-1)^{\ell-1}
  \frac{(-1)^{\ell-1} \det {(A')}}{\ell!}
  = \frac{1}{\ell!} \det {(A')}.
\end{aligned}
\]

另一方面，类似地，注意，
若 \(1 \leqslant m \leqslant \ell\)，则
\[
\begin{aligned}
  m c_m
  = {} &
  {- (-1)^m}
  \sum_{0 \leqslant k < m} {(-1)^k c_k s_{m-k}}
  \\
  = {} &
  (-1)^{m-1}
  \sum_{0 \leqslant m-u < m} {(-1)^{m-u} c_{m-u} s_{m-(m-u)}}
  \\
  = {} &
  \sum_{1 \leqslant u \leqslant m} {c_{m-u}\, (-1)^{u-1} s_u}
  \\
  = {} &
  \sum_{1 \leqslant u \leqslant m} {c_{m-u}\, (-1)^{u-1} s_u}
  + 0
  \\
  = {} &
  \sum_{1 \leqslant u \leqslant m} {c_{m-u}\, (-1)^{u-1} s_u}
  + \sum_{m < u \leqslant \ell} {0\, (-1)^{u-1} s_u}
  \\
  = {} &
  \sum_{1 \leqslant u \leqslant m} {c_{m-u}\, (-1)^{u-1} s_u}
  + \sum_{m < u \leqslant \ell} {c_{m-u}\, (-1)^{u-1} s_u}
  \\
  = {} &
  \sum_{1 \leqslant u \leqslant \ell} {c_{m-u}\, (-1)^{u-1} s_u}.
\end{aligned}
\]
作 \(\ell\) 级阵 \(B\)、\(\ell \times 1\) 阵 \(D\)，
与 \(\ell \times 1\) 阵 \(Y\)，
使 \([D]_{i,1} = i c_i\)，
\([Y]_{i,1} = (-1)^{i-1} s_i\)，
且 \([B]_{i,j} = c_{i-j}\)。
则 \(B Y = D\)。
注意，因为当 \(j > i\) 时，
\([B]_{i,j} = 0\)，
\(\det {(B)}
    = [B]_{1,1} [B]_{2,2} \dots [B]_{\ell,\ell}
  = 1^\ell = 1 \neq 0\)。
则，由 Cramer 公式，
\[
\begin{aligned}
  (-1)^{\ell-1} s_\ell
  = [Y]_{\ell,1}
  = \frac{\det {(B\{\ell, D\})}}{\det {(B)}},
\end{aligned}
\]
其中，\(B\{\ell, D\}\)
是以 \(D\) 代阵 \(B\) 的列 \(\ell\) 后得到的阵。
对 \(B\{\ell, D\}\)，
作 \(\ell-1\) 次相邻的列的交换，
使它的列 \(\ell\)、\(D\)，在列 \(1\) 的位置，
我们得阵 \(B'\)，
其中，
\[
\begin{aligned}
  [B']_{i,j} =
  \begin{cases}
    i c_i,       & 1 = j \leqslant i \leqslant \ell; \\
    c_{i-(j-1)}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则
\[
s_\ell
= (-1)^{\ell-1}
\frac{\det {(B\{\ell, D\})}}{\det {(B)}}
= (-1)^{\ell-1}
\frac{(-1)^{\ell-1} \det {(B')}}{1}
= \det {(B')}.
\]
:::

::: theorem
设 \(n\) 是正整数。
设 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\) 是数。
以式 @eq:elementary-symmetric-polynomials–@eq:sum-of-powers
定义 \(c_k\)、\(s_k\)。
设 \(\ell\) 是正整数。
作 \(\ell\) 级阵 \(P_\ell\)、\(Q_\ell\)，
使
\[
\begin{aligned}
  &
  [P_\ell]_{i,j} =
  \begin{cases}
    i,           & 1 \leqslant j-1 = i \leqslant \ell; \\
    s_{i-(j-1)}, & \text{别的情形},
  \end{cases}
  \\
  &
  [Q_\ell]_{i,j} =
  \begin{cases}
    i c_i,       & 1 = j \leqslant i \leqslant \ell; \\
    c_{i-(j-1)}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则 \(c_\ell = \det {(P_\ell)}\, /\, \ell!\)，
且 \(s_\ell = \det {(Q_\ell)}\)。
:::
