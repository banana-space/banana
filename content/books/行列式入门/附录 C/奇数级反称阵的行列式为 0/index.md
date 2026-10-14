---
title: '奇数级反称阵的行列式为 \(0\)'
---

我们讨论反称阵的行列式。

我们先计算小级反称阵的行列式。

::: example
设 \(A\) 是 \(1\) 级反称阵。
则 \(A = [0]\)。
故 \(\det {(A)} = 0\)。
:::

::: example
设 \(A\) 是 \(2\) 级反称阵。
则 \(A\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    0  & a \\
    -a & 0 \\
  \end{bmatrix}.
\end{aligned}
\]
则 \(\det {(A)} = a^2\)，
即 \(\det {(A)} = [A]_{1,2}^2\)。
:::

::: example
设 \(A\) 是 \(3\) 级反称阵。
则 \(A\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    0  & a  & b \\
    -a & 0  & c \\
    -b & -c & 0 \\
  \end{bmatrix}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(A)}
  = {} &
  0 \det {
    \begin{bmatrix}
      0  & c \\
      -c & 0 \\
    \end{bmatrix}
  }
  - (-a) \det {
    \begin{bmatrix}
      a  & b \\
      -c & 0 \\
    \end{bmatrix}
  }
  + (-b) \det {
    \begin{bmatrix}
      a & b \\
      0 & c \\
    \end{bmatrix}
  }
  \\
  = {} &
  a(bc) + (-b)(ac)
  \\
  = {} & 0.
\end{aligned}
\]
:::

::: example
设 \(A\) 是 \(4\) 级反称阵。
则 \(A\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    0  & a  & b  & c \\
    -a & 0  & d  & e \\
    -b & -d & 0  & f \\
    -c & -e & -f & 0 \\
  \end{bmatrix}.
\end{aligned}
\]
则
\[
\begin{aligned}
  & \det {(A)}
  \\
  = {} &
  \hphantom{{} + {}}
  0 \det {
    \begin{bmatrix}
      0  & d  & e \\
      -d & 0  & f \\
      -e & -f & 0 \\
    \end{bmatrix}
  }
  - (-a)
  \det {
    \begin{bmatrix}
      a  & b  & c \\
      -d & 0  & f \\
      -e & -f & 0 \\
    \end{bmatrix}
  }
  \\
  &
  + (-b) \det {
    \begin{bmatrix}
      a  & b  & c \\
      0  & d  & e \\
      -e & -f & 0 \\
    \end{bmatrix}
  }
  - (-c) \det {
    \begin{bmatrix}
      a  & b & c \\
      0  & d & e \\
      -d & 0 & f \\
    \end{bmatrix}
  }
  \\
  = {} &
  a (dfc - ebf + aff)
  - b (-ebe + afe + edc)
  + c (adf - dbe + ddc)
  \\
  = {} &
  af (af - be + cd)
  - be (af - be + cd)
  + cd (af - be + cd)
  \\
  = {} & (af - be + cd)^2,
\end{aligned}
\]
即
\[
\det {(A)}
= ([A]_{1,2} [A]_{3,4} - [A]_{1,3} [A]_{2,4}
+ [A]_{1,4} [A]_{2,3})^2.
\]
:::

我们发现，\(1\) 级反称阵与 \(3\) 级反称阵
的行列式为 \(0\)。
一般地，

::: theorem
设 \(A\) 是一个奇数级反称阵。
则 \(\det {(A)} = 0\)。
:::

我的论证会用如下几个事实。

(1) 设 \(A\) 是一个 \(n\) 级阵。
    则
    \[
    \begin{aligned}
      \det {(A)}
      = \sum_{i = 1}^{n}
      {(-1)^{i+1} [A]_{i,1} \det {(A(i|1))}}.
    \end{aligned}
    \]
    这就是按列 \(1\) 展开行列式。

(2) 设 \(A\) 是一个 \(n\) 级阵。
    则
    \[
    \begin{aligned}
      \det {(A)}
      = \sum_{j = 1}^{n}
      {(-1)^{1+j} [A]_{1,j} \det {(A(1|j))}}.
    \end{aligned}
    \]
    这就是按行 \(1\) 展开行列式。

(3) 设 \(A\) 是一个 \(n\) 级阵（\(n \geqslant 3\)）。
    同时用 (1) (2)，
    得
    \[
    \begin{aligned}
      & \det {(A)}
      \\
      = {} &
      [A]_{1,1} \det {(A(1|1))}
      +
      \sum_{j = 2}^{n} {
        (-1)^{1+j} [A]_{1,j} \det {(A(1|j))}
      }
      \\
      = {} &
      [A]_{1,1} \det {(A(1|1))}
      +
      \sum_{j = 2}^{n} {
        (-1)^{1+j} [A]_{1,j}
        \sum_{i = 2}^{n} {
          (-1)^{i-1+1} [A]_{i,1} \det {(A(1,i|j,1))}
        }
      }
      \\
      = {} &
      [A]_{1,1} \det {(A(1|1))}
      +
      \sum_{j = 2}^{n} {
        \sum_{i = 2}^{n} {
          (-1)^{1+j} [A]_{1,j}
          (-1)^{i-1+1} [A]_{i,1} \det {(A(1,i|j,1))}
        }
      }
      \\
      = {} &
      [A]_{1,1} \det {(A(1|1))}
      +
      \sum_{i, j = 2}^{n} {
        (-1)^{i+j-1}
        [A]_{i,1} [A]_{1,j} \det {(A(1,i|1,j))}
      }.
    \end{aligned}
    \]
    特别地，若 \(A\) 还是一个反称阵，则
    \[
    \begin{aligned}
      \det {(A)}
      = \sum_{i, j = 2}^{n} {
        (-1)^{i+j}
        [A]_{1,i} [A]_{1,j} \det {(A(1,i|1,j))}
      }.
    \end{aligned}
    \]

(4) 设 \(A\) 是一个 \(n\) 级阵。
    则 \(\det {(A^{\mathrm{T}})} = \det {(A)}\)。
    这就是行列式与转置的关系。

(5) 设 \(A\) 是一个 \(n\) 级阵。
    设 \(u\) 是一个数。
    则 \(\det {(uA)} = u^n \det {(A)}\)。
    特别地，
    \(\det {(-A)} = (-1)^n \det {(A)}\)。

(6) 设 \(A\) 是一个 \(n\) 级反称阵（\(n \geqslant 3\)）。
    设 \(r\) 是不超过 \(n\) 的正整数。
    设 \(s\)、\(t\) 是 \(2\) 个不超过 \(n\) 的正整数，
    \(s \neq r\)，且 \(t \neq r\)。
    则
    \(A(r,t|r,s) = -(A(r,s|r,t))^{\mathrm{T}}\)。
    并且，\(A(r,s|r,s)\)
    是一个 \(n-2\) 级反称阵。

(7) 每个适合条件
    “\(i\)、\(j\) 都是不低于 \(p\)，且不高于 \(q\) 的整数”
    的有序对 \((i, j)\) 恰适合以下 \(3\) 个条件的一个：

    (a) \(p \leqslant i = j \leqslant q\)；
    (b) \(p \leqslant i < j \leqslant q\)；
    (c) \(p \leqslant j < i \leqslant q\)。

(8) 对任何正奇数 \(n\)，存在一个正整数 \(k\)
    使 \(n = 2k - 1\)。

介绍完这几件事后，我总算可以证明定理了。

::: proof
作命题 \(P(k)\)：
每个 \(2k - 1\) 级反称阵的行列式都是 \(0\)。
我们用数学归纳法证明，
对任何正整数 \(k\)，
\(P(k)\) 是对的。

不难验证 \(P(1)\) 是对的。

现在，我们假定 \(P(k-1)\) 是对的（\(k \geqslant 2\)）。
我们要证 \(P(k)\) 也是对的。
记 \(n = 2k-1\)。
设 \(A\) 是一个 \(n\) 级反称阵。
那么
\[
\begin{aligned}
  & \det {(A)}     \\
  = {} &
  \sum_{i, j = 2}^{n} {
    (-1)^{i+j}
    [A]_{1,i} [A]_{1,j} \det {(A(1,i|1,j))}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{2 \leqslant i = j \leqslant n} {
    (-1)^{i+j}
    [A]_{1,i} [A]_{1,j} \det {(A(1,i|1,j))}
  }
  \\
  & +
  \sum_{2 \leqslant i < j \leqslant n} {
    (-1)^{i+j}
    [A]_{1,i} [A]_{1,j} \det {(A(1,i|1,j))}
  }
  \\
  & +
  \sum_{2 \leqslant j < i \leqslant n} {
    (-1)^{i+j}
    [A]_{1,i} [A]_{1,j} \det {(A(1,i|1,j))}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{2 \leqslant i \leqslant n} {
    (-1)^{i+i}
    [A]_{1,i} [A]_{1,i} \det {(A(1,i|1,i))}
  }
  \\
  & +
  \sum_{2 \leqslant i < j \leqslant n} {
    (-1)^{i+j}
    [A]_{1,i} [A]_{1,j} \det {(A(1,i|1,j))}
  }
  \\
  & +
  \sum_{2 \leqslant i < j \leqslant n} {
    (-1)^{j+i}
    [A]_{1,j} [A]_{1,i} \det {(A(1,j|1,i))}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{2 \leqslant i \leqslant n} {
    [A]_{1,i}^2 \det {(A(1,i|1,i))}
  }
  \\
  & +
  \sum_{2 \leqslant i < j \leqslant n} {
    (-1)^{i+j}
    [A]_{1,i} [A]_{1,j} \det {(A(1,i|1,j))}
  }
  \\
  & +
  \sum_{2 \leqslant i < j \leqslant n} {
    (-1)^{i+j}
    [A]_{1,i} [A]_{1,j}
    \det {(-(A(1,i|1,j))^{\mathrm{T}})}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{2 \leqslant i \leqslant n} {
    [A]_{1,i}^2 \det {(A(1,i|1,i))}
  }
  \\
  & +
  \sum_{2 \leqslant i < j \leqslant n} {
    (-1)^{i+j}
    [A]_{1,i} [A]_{1,j} \det {(A(1,i|1,j))}
  }
  \\
  & +
  \sum_{2 \leqslant i < j \leqslant n} {
    (-1)^{i+j}
    [A]_{1,i} [A]_{1,j}
    (-1)^{n-2} \det {((A(1,i|1,j))^{\mathrm{T}})}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{2 \leqslant i \leqslant n} {
    [A]_{1,i}^2 \det {(A(1,i|1,i))}
  }
  \\
  & +
  \sum_{2 \leqslant i < j \leqslant n} {
    (-1)^{i+j}
    [A]_{1,i} [A]_{1,j} \det {(A(1,i|1,j))}
  }
  \\
  & +
  \sum_{2 \leqslant i < j \leqslant n} {
    (-1)^{i+j}
    [A]_{1,i} [A]_{1,j}
    (-1)^{n} \det {(A(1,i|1,j))}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{2 \leqslant i \leqslant n} {
    [A]_{1,i}^2 \det {(A(1,i|1,i))}
  }
  \\
  & + (1 + (-1)^n)
  \sum_{2 \leqslant i < j \leqslant n} {
    (-1)^{i+j}
    [A]_{1,i} [A]_{1,j} \det {(A(1,i|1,j))}
  }.
\end{aligned}
\]
注意，\(A(1,i|1,i)\) 是 \(n - 2\) 级，
即 \(2(k-1) - 1\) 级反称阵；
由假定，
它的行列式为 \(0\)。
再注意，\(n = 2k - 1\)，
故 \(1 + (-1)^n = 0\)。
所以，\(\det {(A)} = 0\)。

所以，\(P(k)\) 是对的。
由数学归纳法，待证的命题成立。
:::

我们还不了解偶数级反称阵的行列式。
不过，我们会了解它的。
