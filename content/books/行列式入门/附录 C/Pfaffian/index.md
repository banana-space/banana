---
title: pfaffian
---

我们说，行列式是方阵的一个重要的属性。
反称阵是方阵，故行列式也是反称阵的一个重要的属性。
本节，我们学习反称阵的另一个属性。
它也是重要的，且与行列式有关。

::: definition
设 \(A\) 是 \(n\) 级反称阵。
定义 \(A\) 的 **pfaffian** 为
\[
\begin{aligned}
  \operatorname{pf} {(A)} =
  \begin{dcases}
    0,
    & n = 1;    \\
    [A]_{1,2},
    & n = 2;    \\
    \sum_{j = 2}^{n}
    {(-1)^{j} [A]_{1,j}
    \operatorname{pf} {(A({1,j}|{1,j}))}},
    & n \geqslant 3.
  \end{dcases}
\end{aligned}
\]
:::

注意，我们只对反称阵定义 pfaffian。

我们计算不高于 \(4\) 级的反称阵的 pfaffian。

::: example
设 \(A\) 是 \(1\) 级反称阵。
则 \(\operatorname{pf} {(A)} = 0\)。

回想，\(\det {(A)}\) 也是 \(0\)。
:::

::: example
设 \(A\) 是 \(2\) 级反称阵。
则 \(\operatorname{pf} {(A)} = [A]_{1,2}\)。

回想，\(\det {(A)} = [A]_{1,2}^2\)；
于是，\(\det {(A)} = (\operatorname{pf} {(A)})^2\)。
:::

::: example
设 \(A\) 是 \(3\) 级反称阵。
则
\[
\begin{aligned}
  \operatorname{pf} {(A)}
  = {} &
  (-1)^2 [A]_{1,2} \operatorname{pf} {(A({1,2}|{1,2}))}
  +
  (-1)^3 [A]_{1,3} \operatorname{pf} {(A({1,3}|{1,3}))}
  \\
  = {} &
  [A]_{1,2} 0 - [A]_{1,3} 0
  \\
  = {} &
  0.
\end{aligned}
\]

回想，\(\det {(A)}\) 也是 \(0\)。
:::

::: example
设 \(A\) 是 \(4\) 级反称阵。
则
\[
\begin{aligned}
  \operatorname{pf} {(A)}
  = {} &
  \hphantom{{} + {}}
  (-1)^2 [A]_{1,2} \operatorname{pf} {(A({1,2}|{1,2}))}
  +
  (-1)^3 [A]_{1,3} \operatorname{pf} {(A({1,3}|{1,3}))}
  \\
  &
  +
  (-1)^4 [A]_{1,4} \operatorname{pf} {(A({1,4}|{1,4}))}
  \\
  = {} &
  [A]_{1,2} [A]_{3,4}
  - [A]_{1,3} [A]_{2,4}
  + [A]_{1,4} [A]_{2,3}.
\end{aligned}
\]

回想，\(\det {(A)} =
    ([A]_{1,2} [A]_{3,4}
      - [A]_{1,3} [A]_{2,4}
  + [A]_{1,4} [A]_{2,3})^2\)；
于是，\(\det {(A)} = (\operatorname{pf} {(A)})^2\)。
:::

看来，对不高于 \(4\) 级的反称阵 \(A\)，
\(\det {(A)} = (\operatorname{pf} {(A)})^2\)。
我们会说明，这对任何级的反称阵 \(A\) 都是对的。
为此，我们会证明 pfaffian 的一些性质，
再利用这些性质解决此事。

最后，我们看一些特别的阵的 pfaffian。

::: example
作 \(2m\) 级反称阵
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
我们计算 \(\operatorname{pf} (B)\)。
由 pfaffian 的定义，
\[
\begin{aligned}
  \operatorname{pf} {(B)}
  = (-1)^2 [B]_{1,2} \operatorname{pf} {(B({1,2}|{1,2}))}
  = b_1 \operatorname{pf} {(B({1,2}|{1,2}))}
\end{aligned}
\]
（注意，对任何 \(j > 2\)，\([B]_{1,j} = 0\)）。
不难看出，
\[
\begin{aligned}
  B({1,2}|{1,2}) =
  \begin{bmatrix}
    0      & b_2    & \cdots & 0      & 0      \\
    -b_2   & 0      & \cdots & 0      & 0      \\
    \vdots & \vdots & \ddots & \vdots & \vdots \\
    0      & 0      & \cdots & 0      & b_m    \\
    0      & 0      & \cdots & -b_m   & 0      \\
  \end{bmatrix}.
\end{aligned}
\]
则，类似地，
\[
\begin{aligned}
  \operatorname{pf} {(B({1,2}|{1,2}))}
  = b_2 \operatorname{pf} {(B({1,2,3,4}|{1,2,3,4}))}.
\end{aligned}
\]
故
\[
\begin{aligned}
  \operatorname{pf} {(B)}
  = b_1 b_2 \operatorname{pf} {(B({1,2,3,4}|{1,2,3,4}))}.
\end{aligned}
\]
……
最后，我们算出
\[
\begin{aligned}
  \operatorname{pf} {(B)}
  = b_1 b_2 \dots b_{m-1}
  \operatorname{pf} {(
      B({1,2,\dots,2m-2}|{1,2,\dots,2m-2})
  )}
  = b_1 b_2 \dots b_{m-1} b_m.
\end{aligned}
\]
回想，\(\det {(B)} = (b_1 b_2 \dots b_m)^2\)；
于是，\(\det {(B)} = (\operatorname{pf} {(B)})^2\)。
:::

::: example
设 \(A\) 是 \(n\) 级反称阵。
设 \(D\) 是 \(t\) 级反称阵。
作 \(n + t\) 级阵
\[
\begin{aligned}
  M =
  \begin{bmatrix}
    A & 0 \\
    0 & D \\
  \end{bmatrix}.
\end{aligned}
\]
不难验证，\(M\) 也是一个反称阵。
我们用数学归纳法证明，\(\operatorname{pf} {(M)}
  = \operatorname{pf} {(A)} \operatorname{pf} {(D)}\)。

作命题 \(P(n)\)：
对任何 \(n\) 级反称阵 \(A\)，
\[
\begin{aligned}
  \operatorname{pf} {
    \begin{bmatrix}
      A & 0 \\
      0 & D \\
    \end{bmatrix}
  } = \operatorname{pf} {(A)} \operatorname{pf} {(D)}.
\end{aligned}
\]
再作命题 \(Q(n)\)：
\(P(n-1)\) 与 \(P(n)\) 是对的。
我们用数学归纳法证明，
对任何高于 \(1\) 的整数 \(n\)，\(Q(n)\) 是对的。

首先，\(P(1)\) 是对的，因为 \(n = 1\) 时，
\[
\begin{aligned}
  \begin{bmatrix}
    A & 0 \\
    0 & D \\
  \end{bmatrix}
\end{aligned}
\]
的行 \(1\) 的元全为 \(0\)，
故由 pfaffian 的定义，此阵的 pfaffian 是 \(0\)。

然后，\(P(2)\) 是对的。
记 \(J =
    \begin{bmatrix}
      A & 0 \\
      0 & D \\
    \end{bmatrix}
  \)，
其中，\(A\) 是 \(2\) 级反称阵。
由 pfaffian 的定义，
\[
\begin{aligned}
  \operatorname{pf} {(J)}
  = (-1)^{2} [J]_{1,2} \operatorname{pf} {(J({1,2}|{1,2}))}
  = [A]_{1,2} \operatorname{pf} {(D)}
  = \operatorname{pf} {(A)} \operatorname{pf} {(D)}.
\end{aligned}
\]

由此可见，\(Q(2)\) 是对的。

我们设 \(Q(n-1)\) 是对的（\(n \geqslant 3\)）。
则 \(P(n-2)\) 与 \(P(n-1)\) 是对的。
我们要由此证明 \(Q(n)\) 是对的，
即 \(P(n-1)\) 与 \(P(n)\) 是对的。
\(P(n-1)\) 当然是对的，由假定。
所以，我们由假定
“\(P(n-2)\) 与 \(P(n-1)\) 是对的”
证 \(P(n)\) 是对的，
得 \(Q(n)\) 是对的。

任取一个 \(n\) 级反称阵 \(A\)。
记 \(M =
    \begin{bmatrix}
      A & 0 \\
      0 & D \\
    \end{bmatrix}
  \)。
则
\[
\begin{aligned}
  &
  \operatorname{pf} {(M)}
  \\
  = {} &
  \sum_{2 \leqslant j \leqslant n+t}
  {(-1)^{j} [M]_{1,j} \operatorname{pf} {(M({1,j}|{1,j}))}}
  \\
  = {} &
  \sum_{2 \leqslant j \leqslant n}
  {(-1)^{j} [M]_{1,j} \operatorname{pf} {(M({1,j}|{1,j}))}}
  +
  \sum_{n+1 \leqslant j \leqslant n+t}
  {(-1)^{j} [M]_{1,j} \operatorname{pf} {(M({1,j}|{1,j}))}}
  \\
  = {} &
  \sum_{2 \leqslant j \leqslant n}
  {(-1)^{j} [A]_{1,j} \operatorname{pf} {(M({1,j}|{1,j}))}}
  +
  \sum_{n+1 \leqslant j \leqslant n+t}
  {(-1)^{j} 0 \operatorname{pf} {(M({1,j}|{1,j}))}}
  \\
  = {} &
  \sum_{2 \leqslant j \leqslant n}
  {(-1)^{j} [A]_{1,j} \operatorname{pf} {(M({1,j}|{1,j}))}}.
\end{aligned}
\]
注意，\(2 \leqslant j \leqslant n\) 时，
\[
\begin{aligned}
  M({1,j}|{1,j}) =
  \begin{bmatrix}
    A({1,j}|{1,j}) & 0 \\
    0              & D \\
  \end{bmatrix}.
\end{aligned}
\]
由假定，\(\operatorname{pf} {(M({1,j}|{1,j}))}
    = \operatorname{pf} {(A({1,j}|{1,j}))}
  \operatorname{pf} {(D)}\)。
从而
\[
\begin{aligned}
  \operatorname{pf} {(M)}
  = {} &
  \sum_{2 \leqslant j \leqslant n}
  {(-1)^{j} [A]_{1,j} \operatorname{pf} {(M({1,j}|{1,j}))}}
  \\
  = {} &
  \sum_{2 \leqslant j \leqslant n}
  {(-1)^{j} [A]_{1,j}
    \operatorname{pf} {(A({1,j}|{1,j}))} \operatorname{pf} {(D)}
  }
  \\
  = {} &
  \left(
    \sum_{2 \leqslant j \leqslant n}
    {(-1)^{j} [A]_{1,j}
    \operatorname{pf} {(A({1,j}|{1,j}))}}
  \right) \operatorname{pf} {(D)}
  \\
  = {} &
  \operatorname{pf} {(A)} \operatorname{pf} {(D)}.
\end{aligned}
\]

所以，\(P(n)\) 是对的。
则 \(Q(n)\) 是对的。
由数学归纳法，待证的命题成立。

回想，当 \(A\) 是 \(n\) 级阵，
\(D\) 是 \(t\) 级阵，
且 \(C\) 是 \(n \times t\) 阵时，
\[
\begin{aligned}
  \det {
    \begin{bmatrix}
      A & C \\
      0 & D \\
    \end{bmatrix}
  }
  = \det {(A)} \det {(D)}.
\end{aligned}
\]
那么，当 \(A\)、\(D\) 是反称阵，
且 \(C = 0\) 时，
\(\det {(M)}\)
当然也是 \(\det {(A)} \det {(D)}\)。
不过，用现有的知识，
我们还不知道 \(M\) 的行列式与 pfaffian 的关系。
:::

在看最后一个例前，我们先计算一类阵的行列式。
设 \(A\)、\(D\) 分别是 \(n\) 级阵与 \(t\) 级阵。
设 \(C\) 是 \(n \times t\) 阵。
作 \(n + t\) 级阵
\[
\begin{aligned}
  P =
  \begin{bmatrix}
    C & A \\
    D & 0 \\
  \end{bmatrix}.
\end{aligned}
\]
我们计算 \(\det {(P)}\)。
为此，我们可用反称性。
具体地，交换 \(P\) 的列 \(t+1\) 与列 \(t\)，
得阵 \(P_t\)。
则 \(\det {(P_t)} = (-1) \det {(P)}\)。
再交换 \(P_t\) 的列 \(t\) 与列 \(t-1\)，
得阵 \(P_{t-1}\)。
则 \(\det {(P_{t-1})} = (-1) \det {(P_t)}
= (-1)^2 \det {(P)}\)。
……
再交换 \(P_2\) 的列 \(2\) 与列 \(1\)，
得阵 \(P_1\)。
则 \(\det {(P_1)} = (-1) \det {(P_2)}
= (-1)^t \det {(P)}\)。
注意，我们作了 \(t\) 次相邻的列的交换，
使 \(P\) 的列 \(t+1\) 到列 \(1\) 的位置，
且别的列的相对位置不变。
类似地，我们再分别对 \(P_1\) 的列 \(t+2\)、\(\dots\)、\(t+n\)
也相邻地向左移 \(t\) 次，
即可使 \(P\) 的列 \(t+1\)、\(\dots\)、\(t+n\)
分别到列 \(1\)、\(\dots\)、\(n\) 的位置，
变 \(P\) 为
\[
\begin{aligned}
  \begin{bmatrix}
    A & C \\
    0 & D \\
  \end{bmatrix}.
\end{aligned}
\]
我们一共作了 \(t + (n-1)t = nt\) 次列的交换。
故
\[
\begin{aligned}
  \det {
    \begin{bmatrix}
      C & A \\
      D & 0 \\
    \end{bmatrix}
  }
  = (-1)^{nt} \det {
    \begin{bmatrix}
      A & C \\
      0 & D \\
    \end{bmatrix}
  }
  = (-1)^{nt} \det {(A)} \det {(D)}.
\end{aligned}
\]
特别地，若我们取 \(D = -A^{\mathrm{T}}\)，
且 \(C = 0\)，
则
\[
\begin{aligned}
  \det {
    \begin{bmatrix}
      0               & A \\
      -A^{\mathrm{T}} & 0 \\
    \end{bmatrix}
  }
  = {} &
  (-1)^{n^2} \det {(-A^{\mathrm{T}})} \det {(A)}
  \\
  = {} &
  (-1)^{n^2} (-1)^n \det {(A^{\mathrm{T}})} \det {(A)}
  \\
  = {} &
  (-1)^{n(n+1)} \det {(A)} \det {(A)}
  \\
  = {} &
  (\det {(A)})^2.
\end{aligned}
\]
（注意，\(n(n+1)\) 是一个偶数。）

::: example
设 \(A\) 是一个 \(m\) 级阵。
为方便，我们记
\[
\begin{aligned}
  S(A) =
  \begin{bmatrix}
    0               & A \\
    -A^{\mathrm{T}} & 0 \\
  \end{bmatrix}.
\end{aligned}
\]
不难看出，\(S(A)\) 是一个 \(2m\) 级反称阵。
我们用数学归纳法证明，
\(\operatorname{pf} {(S(A))}
  = (-1)^{m(m-1)/2} \det {(A)}\)。
这也说明，pfaffian 跟行列式有一些关系。

作命题 \(P(m)\)：
对任何 \(m\) 级阵 \(A\)，
\(\operatorname{pf} {(S(A))}
  = (-1)^{m(m-1)/2} \det {(A)}\)。
我们用数学归纳法证明，
对任何正整数 \(m\)，\(P(m)\) 是对的。

\(P(1)\) 是对的。
设 \(A = [a]\)。
则 \(S(A) =
    \begin{bmatrix}
      0  & a \\
      -a & 0 \\
  \end{bmatrix}\)。
由定义，\(\det {(A)} = a\)，
且
\(\operatorname{pf} {(S(A))}
    = a
  = (-1)^{1(1-1)/2} \det {(A)}\)。

我们设 \(P(m-1)\) 是对的。
我们要由此证明 \(P(m)\) 是对的。

任取 \(m\) 级阵 \(A\)。
则
\[
\begin{aligned}
  \operatorname{pf} {(S(A))}
  = {} &
  \sum_{j=2}^{2m}
  {(-1)^j [S(A)]_{1,j} \operatorname{pf} {((S(A))({1,j}|{1,j}))}}
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{2 \leqslant j \leqslant m}
  {(-1)^j [S(A)]_{1,j} \operatorname{pf} {((S(A))({1,j}|{1,j}))}}
  \\
  & +
  \sum_{m+1 \leqslant j \leqslant 2m}
  {(-1)^j [S(A)]_{1,j} \operatorname{pf} {((S(A))({1,j}|{1,j}))}}
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{2 \leqslant j \leqslant m}
  {(-1)^j 0 \operatorname{pf} {((S(A))({1,j}|{1,j}))}}
  \\
  & +
  \sum_{1 \leqslant k \leqslant m}
  {(-1)^{m+k} [S(A)]_{1,m+k}
  \operatorname{pf} {((S(A))({1,m+k}|{1,m+k}))}}
  \\
  = {} &
  \sum_{1 \leqslant k \leqslant m}
  {(-1)^{m+k} [A]_{1,k}
  \operatorname{pf} {(S(A(1|k)))}}
  \\
  = {} &
  \sum_{1 \leqslant k \leqslant m}
  {(-1)^{m-1} (-1)^{1+k} [A]_{1,k}
  \operatorname{pf} {(S(A(1|k)))}}
  \\
  = {} &
  \sum_{1 \leqslant k \leqslant m}
  {(-1)^{1+k} [A]_{1,k}
  (-1)^{m-1} \operatorname{pf} {(S(A(1|k)))}}.
\end{aligned}
\]
注意，\(A(1|k)\) 是 \(m-1\) 级阵。
由假定，
\[
\begin{aligned}
  \operatorname{pf} {(S(A(1|k)))}
  = (-1)^{(m-1)(m-2)/2} \det {(A(1|k))}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \operatorname{pf} {(S(A))}
  = {} &
  \sum_{1 \leqslant k \leqslant m}
  {(-1)^{1+k} [A]_{1,k}
  (-1)^{m-1} \operatorname{pf} {(S(A(1|k)))}}
  \\
  = {} &
  \sum_{1 \leqslant k \leqslant m}
  {(-1)^{1+k} [A]_{1,k}
  (-1)^{m-1} (-1)^{(m-1)(m-2)/2} \det {(A(1|k))}}
  \\
  = {} &
  \sum_{1 \leqslant k \leqslant m}
  {(-1)^{1+k} [A]_{1,k}
  (-1)^{m(m-1)/2} \det {(A(1|k))}}
  \\
  = {} &
  (-1)^{m(m-1)/2}
  \sum_{1 \leqslant k \leqslant m}
  {(-1)^{1+k} [A]_{1,k}
  \det {(A(1|k))}}
  \\
  = {} &
  (-1)^{m(m-1)/2} \det {(A)}.
\end{aligned}
\]

所以，\(P(m)\) 是对的。
由数学归纳法，待证的命题成立。

最后，不难看出，
\(\det {(S(A))} = (\det {(A)})^2
  = (\operatorname{pf} {(S(A))})^2\)。
:::

我们作一个小结。

::: theorem
(1) 设 \(A\)、\(D\) 是 \(n\) 级与 \(t\) 级反称阵。
    则
    \[
    \begin{aligned}
      \operatorname{pf} {
        \begin{bmatrix}
          A & 0 \\
          0 & D
        \end{bmatrix}
      }
      = \operatorname{pf} {(A)} \operatorname{pf} {(D)}.
    \end{aligned}
    \]

(2) 设 \(A\) 是 \(m\) 级阵。
    则
    \[
    \begin{aligned}
      \operatorname{pf} {
        \begin{bmatrix}
          0               & A \\
          -A^{\mathrm{T}} & 0 \\
        \end{bmatrix}
      } = (-1)^{m(m-1)/2} \det {(A)}.
    \end{aligned}
    \]
    特别地，取 \(A = I_m\)，即知
    \(K_m =
        \begin{bmatrix}
          0    & I_m \\
          -I_m & 0   \\
      \end{bmatrix}\)
    的 pfaffian 是 \((-1)^{m(m-1)/2}\)。

(3) \[
    \begin{aligned}
      \operatorname{pf} {
        \begin{bmatrix}
          0      & b_1    & 0      & 0      & \cdots & 0      & 0      \\
          -b_1   & 0      & 0      & 0      & \cdots & 0      & 0      \\
          0      & 0      & 0      & b_2    & \cdots & 0      & 0      \\
          0      & 0      & -b_2   & 0      & \cdots & 0      & 0      \\
          \vdots & \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
          0      & 0      & 0      & 0      & \cdots & 0      & b_m    \\
          0      & 0      & 0      & 0      & \cdots & -b_m   & 0      \\
        \end{bmatrix}
      } = b_1 b_2 \dots b_m.
    \end{aligned}
    \]
:::
