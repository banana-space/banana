---
title: 转置的性质
---

本节，我们讨论转置的一些性质。

设 \(A\) 是一个 \(m \times n\) 阵。
则 \(A\) 的转置 \(A^{\mathrm{T}}\) 是一个 \(n \times m\) 阵，
且对 \(i \leqslant n\) 与 \(j \leqslant m\)，
\([A^{\mathrm{T}}]_{i,j} = [A]_{j,i}\)。

我们已知，若 \(A\) 是一个 \(m \times n\) 阵，
则 \((A^{\mathrm{T}})^{\mathrm{T}} = A\)。
我们还知道，若 \(A\) 是一个 \(n\) 级阵，
则 \(\det {(A)} = \det {(A^{\mathrm{T}})}\)。

转置当然还有一些性质；
我只是还未提它们。

::: theorem
设 \(A\)、\(B\) 是 \(m \times n\) 阵。
设 \(C\) 是 \(n \times s\) 阵。
设 \(k\) 是数。
则：

(1) \((A + B)^{\mathrm{T}} = A^{\mathrm{T}} + B^{\mathrm{T}}\)；

(2) \((k A)^{\mathrm{T}} = k A^{\mathrm{T}}\)；

(3) \((A C)^{\mathrm{T}} = C^{\mathrm{T}} A^{\mathrm{T}}\)。
:::

::: proof
您验证，等式 (1) 与 (2) 的 \(2\) 边的阵的尺寸是一样的；
我验证，等式 (3) 的 \(2\) 边的阵的尺寸是一样的。

(1) 对 \(i \leqslant n\) 与 \(j \leqslant m\)，
    \[
    \begin{aligned}
      [(A + B)^{\mathrm{T}}]_{i,j}
      = {} &
      [A + B]_{j,i}
      \\
      = {} &
      [A]_{j,i} + [B]_{j,i}
      \\
      = {} &
      [A^{\mathrm{T}}]_{i,j} + [B^{\mathrm{T}}]_{i,j}
      \\
      = {} &
      [A^{\mathrm{T}} + B^{\mathrm{T}}]_{i,j}.
    \end{aligned}
    \]

(2) 对 \(i \leqslant n\) 与 \(j \leqslant m\)，
    \[
    \begin{aligned}
      [(k A)^{\mathrm{T}}]_{i,j}
      = {} &
      [k A]_{j,i}
      \\
      = {} &
      k [A]_{j,i}
      \\
      = {} &
      k [A^{\mathrm{T}}]_{i,j}
      \\
      = {} &
      [k A^{\mathrm{T}}]_{i,j}.
    \end{aligned}
    \]

(3) \(A\) 是 \(m \times n\) 的，
    且 \(C\) 是 \(n \times s\) 的，
    故 \(AC\) 是 \(m \times s\) 的。
    则 \((AC)^{\mathrm{T}}\) 是 \(s \times m\) 的。
    另一方面，
    \(C^{\mathrm{T}}\) 是 \(s \times n\) 的，
    且 \(A^{\mathrm{T}}\) 是 \(n \times m\) 的，
    故 \(C^{\mathrm{T}} A^{\mathrm{T}}\) 是 \(s \times m\) 的。
    对 \(i \leqslant s\) 与 \(j \leqslant m\)，
    \[
    \begin{aligned}
      [(AC)^{\mathrm{T}}]_{i,j}
      = {} &
      [AC]_{j,i}
      \\
      = {} &
      \sum_{p=1}^{n} {[A]_{j,p} [C]_{p,i}}
      \\
      = {} &
      \sum_{p=1}^{n}
      {[A^{\mathrm{T}}]_{p,j} [C^{\mathrm{T}}]_{i,p}}
      \\
      = {} &
      \sum_{p=1}^{n}
      {[C^{\mathrm{T}}]_{i,p} [A^{\mathrm{T}}]_{p,j}}
      \\
      = {} &
      [C^{\mathrm{T}} A^{\mathrm{T}}]_{i,j}.
    \end{aligned}
    \]
:::

为方便，我记下一个简单的推广。
设 \(A\)、\(B\)、\(C\) 分别是
\(m \times s\)、\(s \times t\)、\(t \times n\) 阵。
则
\[
\begin{aligned}
  (ABC)^{\mathrm{T}}
  = {} &
  ((AB) C)^{\mathrm{T}}
  \\
  = {} &
  C^{\mathrm{T}}
  (AB)^{\mathrm{T}}
  \\
  = {} &
  C^{\mathrm{T}}
  (B^{\mathrm{T}} A^{\mathrm{T}})
  \\
  = {} &
  C^{\mathrm{T}}
  B^{\mathrm{T}}
  A^{\mathrm{T}}.
\end{aligned}
\]
一般地，

::: theorem
设 \(A_1\)、\(A_2\)、\(\dots\)、\(A_n\)
分别是 \(m_0 \times m_1\)、\(m_1 \times m_2\)、\(\dots\)、
\(m_{n-1} \times m_n\) 阵
（也就是，\(A_k\) 的列数等于 \(A_{k+1}\) 的行数，
\(k = 1\)、\(2\)、\(\dots\)、\(n-1\)）。
则
\[
\begin{aligned}
  (A_1 A_2 \dots A_n)^{\mathrm{T}}
  = A_n^{\mathrm{T}} \dots A_2^{\mathrm{T}} A_1^{\mathrm{T}}.
\end{aligned}
\]
:::

::: proof
请允许我留它为您的习题。
您用数学归纳法即可。
:::
