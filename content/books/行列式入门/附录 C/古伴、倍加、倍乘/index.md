---
title: 古伴、倍加、倍乘
---

<problems>
- 第 6 个定理的证明中，作 $q' - p'$ 次相邻的列的交换后得到的似乎应是 $C_{q'-p'}$ 而非 $C_{q'-p'-1}$；同样，作 $p' - q'$ 次交换后得到的似乎应是 $C'_{p'-q'}$ 而非 $C'_{p'-q'+1}$。
</problems>

本节，我们用倍加与倍乘研究古伴。

回想，在“古伴的性质 (1)”与“古伴的性质 (3)”，
我们证明了，
对任何 \(n\) 级阵 \(A\)，\(B\)，
与任何数 \(c\)，
\[
\begin{aligned}
  \operatorname{adj} {(A^{\mathrm{T}})}
  & = (\operatorname{adj} {(A)})^{\mathrm{T}},           \\
  \operatorname{adj} {(c A)}
  & = c^{n-1} \operatorname{adj} {(A)},                  \\
  \det {(\operatorname{adj} {(A)})}
  & = (\det {(A)})^{n-1},                                \\
  \operatorname{adj} {(\operatorname{adj} {(A)})}
  & = (\det {(A)})^{n-2}\, A,                            \\
  \operatorname{adj} {(B A)}
  & = \operatorname{adj} {(A)} \operatorname{adj} {(B)}.
\end{aligned}
\]
前 \(2\) 个式的证明是简单的，
但后 \(3\) 个式的证明是难的。
证明式 3 与式 4 时，我们要讨论
\(\det {(A)} \neq 0\) 时的
与 \(\det {(A)} = 0\) 时的情形；
证明式 5 时，我们用了 Binet–Cauchy 公式，
因为，虽然我们在 \(\det {(BA)} \neq 0\) 时
用消去律证明了式 5，
我们未能在 \(\det {(BA)} = 0\) 时，
用别的方法证明它。

在上节，当证明一些跟行列式有关的定理时，
我们证明了式 @eq:det-multiply-column
与式 @eq:det-multiply-add-column，
并反复地用它们。
类似地，若我们用倍加与倍乘研究古伴，
我们也应先证明类似的关系。

::: theorem
设 \(D\) 是 \(n\) 级阵，
且当 \(i \neq j\) 时，\([D]_{i,j} = 0\)。
则当 \(i \neq j\) 时，
\([\operatorname{adj} {(D)}]_{i,j} = 0\)。
:::

::: proof
我证明，若 \(n\) 级阵 \(U\) 适合，
当 \(i > j\) 时，\([U]_{i,j} = 0\)，
则当 \(i > j\) 时，
\([\operatorname{adj} {(U)}]_{i,j} = 0\)。
那么，用转置，或类似地，
您能证明，
若 \(n\) 级阵 \(L\) 适合，
当 \(i < j\) 时，\([L]_{i,j} = 0\)，
则当 \(i < j\) 时，
\([\operatorname{adj} {(L)}]_{i,j} = 0\)。
则由它们，待证的事是对的，
因为 \(i \neq j\) 相当于
\(i > j\) 或 \(i < j\)。

设 \(n\) 级阵 \(U\) 适合，
当 \(i > j\) 时，\([U]_{i,j} = 0\)。
注意，
\[
\begin{aligned}
  [\operatorname{adj} {(U)}]_{i,j}
  = (-1)^{j+i} \det {(U(j|i))}.
\end{aligned}
\]
设 \(1 \leqslant s < t \leqslant n\)。
记
\[
\begin{aligned}
  V = U(s|t)
  = U\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_{n-1}}{j_1,\dots,j_{n-1}},
\end{aligned}
\]
其中，
\(i_1 < \dots < i_{n-1}\)，
且 \(j_1 < \dots < j_{n-1}\)。
注意，\(i_1\)、\(\dots\)、\(i_{n-1}\)
比 \(1\)、\(2\)、\(\dots\)、\(n\) 少 \(s\)，
且 \(j_1\)、\(\dots\)、\(j_{n-1}\)
比 \(1\)、\(2\)、\(\dots\)、\(n\) 少 \(t\)。
我们说明，\(\det {(V)} = 0\)。

我们说，\(i_k \geqslant j_k\)。
其实，具体地，对 \(k = 1\)、\(\dots\)、\(n-1\)，
\[
\begin{aligned}
  i_k =
  \begin{cases}
    k,     & k < s;    \\
    k + 1, & k \geqslant s,
  \end{cases}
\end{aligned}
\]
且
\[
\begin{aligned}
  j_k =
  \begin{cases}
    k,     & k < t;    \\
    k + 1, & k \geqslant t,
  \end{cases}
\end{aligned}
\]
既然 \(s < t\)，
则对小于 \(n\) 的正整数 \(k\)，
\(k\) 一定适合如下 \(3\) 个条件的一个：
(i) \(k < s\)；
(ii) \(s \leqslant k < t\)；
(iii) \(t \leqslant k\)。
对 (i)，
\(i_k = k = j_k\)；
对 (ii)，
\(i_k = k + 1 = j_k + 1 > j_k\)；
对 (iii)，
\(i_k = k + 1 = j_k\)。
于是，若 \(u > v\)，
则 \(i_u \geqslant j_u > j_v\)。
则 \([V]_{u,v} = [U]_{i_u,j_v} = 0\)。
则 \(\det {(V)}
  = [V]_{1,1} [V]_{2,2} \dots [V]_{n-1,n-1}\)。
注意，
\([V]_{s,s} = [U]_{i_s,j_s} = [U]_{s+1,s} = 0\)。
则 \(\det {(V)} = 0\)。
则 \([\operatorname{adj} {(U)}]_{t,s}
  = (-1)^{s+t} \det {(U(s|t))} = 0\)，
若 \(t > s\)。
:::

::: theorem
设 \(D\) 是 \(n\) 级阵，
且当 \(i \neq j\) 时，\([D]_{i,j} = 0\)。
则
\[
\begin{aligned}
  [\operatorname{adj} {(D)}]_{i,j} =
  \begin{dcases}
    \det {(D(i|i))}
    = \prod_{\substack{1 \leqslant \ell \leqslant n \\ \ell \neq i}}
    {[D]_{\ell,\ell}},
    & i = j;       \\
    0,
    & \text{别的情形}.
  \end{dcases}
\end{aligned}
\]
:::

::: proof
我们知道，当 \(i \neq j\) 时，
\([\operatorname{adj} {(D)}]_{i,j} = 0\)。
当 \(i = j\) 时，
\[
\begin{aligned}
  [\operatorname{adj} {(D)}]_{i,j}
  = {} &
  (-1)^{i+i} \det {(D(i|i))}
  \\
  = {} &
  \det {(D(i|i))}
  \\
  = {} &
  [D(i|i)]_{1,1}
  [D(i|i)]_{2,2}
  \dots
  [D(i|i)]_{n-1,n-1}
  \\
  = {} &
  \prod_{\substack{1 \leqslant \ell \leqslant n \\ \ell \neq i}}
  {[D]_{\ell,\ell}}.
\end{aligned}
\]
:::

::: theorem
设 \(n\) 是正整数。
设 \(q\) 是不超过 \(n\) 的正整数。
设 \(s\) 是数。
则
\[
\begin{aligned}
  [\operatorname{adj} {(M(n; q; s))}]_{i,j} =
  \begin{cases}
    s, & i = j \neq q; \\
    1, & i = j = q;    \\
    0, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(\operatorname{adj} {(M(n; q; s))})}
  = (\det {(M(n; q; s))})^{n-1}.
\end{aligned}
\]
进一步地，
\[
\begin{aligned}
  [\operatorname{adj} {(
        \operatorname{adj} {(M(n; q; s))}
  )}]_{i,j} =
  \begin{cases}
    s^{n-2}, & i = j \neq q; \\
    s^{n-1}, & i = j = q;    \\
    0,       & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则
\[
\begin{aligned}
  \operatorname{adj} {(\operatorname{adj} {(M(n; q; s))})}
  = (\det {(M(n; q; s))})^{n-2} M(n; q; s).
\end{aligned}
\]
:::

::: proof
回想，\(M(n; q; s)\) 是 \(n\) 级阵，且
\[
\begin{aligned}
  [M(n; q; s)]_{i,j} =
  \begin{cases}
    1, & i = j \neq q; \\
    s, & i = j = q;    \\
    0, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
注意，
\[
\begin{aligned}
  \det {(M(n; q; s))} = 1^{n-1} s = s.
\end{aligned}
\]

由前面的讨论，
\[
\begin{aligned}
  [\operatorname{adj} {(M(n; q; s))}]_{i,j} =
  \begin{cases}
    1^{n-2} s, & i = j \neq q; \\
    1^{n-1},   & i = j = q;    \\
    0,         & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(\operatorname{adj} {(M(n; q; s))})}
  = s^{n-1} 1
  = s^{n-1}
  = (\det {(M(n; q; s))})^{n-1}.
\end{aligned}
\]

进一步地，由前面的讨论，
\[
\begin{aligned}
  [\operatorname{adj} {(
        \operatorname{adj} {(M(n; q; s))}
  )}]_{i,j} =
  \begin{cases}
    s^{n-2} 1, & i = j \neq q; \\
    s^{n-1},   & i = j = q;    \\
    0,         & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则
\[
\begin{aligned}
  \operatorname{adj} {(\operatorname{adj} {(M(n; q; s))})}
  = {} & s^{n-2} M(n; q; s)                      \\
  = {} & (\det {(M(n; q; s))})^{n-2} M(n; q; s).
\end{aligned}
\]
:::

::: theorem
设 \(n\) 是正整数。
设 \(q\) 是不超过 \(n\) 的正整数。
设 \(s\) 是数。
设 \(A\) 是 \(n\) 级阵。
则
\[
\begin{aligned}
  \operatorname{adj} {(A M(n; q; s))}
  =
  \operatorname{adj} {(M(n; q; s))}
  \operatorname{adj} {(A)}.
\end{aligned}
\]
:::

::: proof
注意，以数 \(s\) 乘 \(A\) 的列 \(q\)，
且不改变别的列，
我们得阵 \(A M(n; q; s)\)。

当 \(i \neq q\) 时，
\((A M(n; q; s))(j|i)\) 的列 \(q - \rho(q, i)\)
是 \(A(j|i)\) 的列 \(q - \rho(q, i)\)
的 \(s\) 倍，
且 \((A M(n; q; s))(j|i)\) 与 \(A(j|i)\)
的别的列相同；
这里，回想，对任何整数 \(i\)，\(j\)，
\[
\begin{aligned}
  \rho(i, j) =
  \begin{cases}
    0, & i < j;    \\
    1, & i \geqslant j.
  \end{cases}
\end{aligned}
\]
则 \(\det {((A M(n; q; s))(j|i))}
  = s \det {(A(j|i))}\)。
则，当 \(i \neq q\) 时，
\[
\begin{aligned}
  [\operatorname{adj} {(A M(n; q; s))}]_{i,j}
  = {} &
  (-1)^{j+i} \det {((A M(n; q; s))(j|i))}
  \\
  = {} &
  (-1)^{j+i} s \det {(A(j|i))}
  \\
  = {} &
  s\, [\operatorname{adj} {(A)}]_{i,j}
  \\
  = {} &
  [\operatorname{adj} {(M(n; q; s))}]_{i,i}
  [\operatorname{adj} {(A)}]_{i,j}.
\end{aligned}
\]
当 \(i = q\) 时，
\((A M(n; q; s))(j|i) = A(j|i)\)。
则
\[
\begin{aligned}
  [\operatorname{adj} {(A M(n; q; s))}]_{i,j}
  = {} &
  (-1)^{j+i} \det {((A M(n; q; s))(j|i))}
  \\
  = {} &
  (-1)^{j+i} \det {(A(j|i))}
  \\
  = {} &
  [\operatorname{adj} {(A)}]_{i,j}
  \\
  = {} &
  [\operatorname{adj} {(M(n; q; s))}]_{i,i}
  [\operatorname{adj} {(A)}]_{i,j}.
\end{aligned}
\]
另一方面，
\[
\begin{aligned}
  &
  [\operatorname{adj} {(M(n; q; s))}
  \operatorname{adj} {(A)}]_{i,j}
  \\
  = {} &
  \sum_{1 \leqslant k \leqslant n}
  {[\operatorname{adj} {(M(n; q; s))}]_{i,k}
  [\operatorname{adj} {(A)}]_{k,j}}
  \\
  = {} &
  [\operatorname{adj} {(M(n; q; s))}]_{i,i}
  [\operatorname{adj} {(A)}]_{i,j}
  +
  \sum_{\substack{1 \leqslant k \leqslant n \\ k \neq i}}
  {[\operatorname{adj} {(M(n; q; s))}]_{i,k}
  [\operatorname{adj} {(A)}]_{k,j}}
  \\
  = {} &
  [\operatorname{adj} {(M(n; q; s))}]_{i,i}
  [\operatorname{adj} {(A)}]_{i,j}
  +
  \sum_{\substack{1 \leqslant k \leqslant n \\ k \neq i}}
  {[\operatorname{adj} {(M(n; q; s))}]_{i,k}
  [\operatorname{adj} {(A)}]_{k,j}}
  \\
  = {} &
  [\operatorname{adj} {(M(n; q; s))}]_{i,i}
  [\operatorname{adj} {(A)}]_{i,j}
  +
  \sum_{\substack{1 \leqslant k \leqslant n \\ k \neq i}}
  {0\, [\operatorname{adj} {(A)}]_{k,j}}
  \\
  = {} &
  [\operatorname{adj} {(M(n; q; s))}]_{i,i}
  [\operatorname{adj} {(A)}]_{i,j}.
\end{aligned}
\]
:::

::: theorem
设 \(n\) 是正整数。
设 \(p\)、\(q\) 是不超过 \(n\) 的正整数，且 \(p \neq q\)。
设 \(s\) 是数。
则
\[
\begin{aligned}
  \operatorname{adj} {(E(n; p, q; s))}
  = E(n; p, q; -s).
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(\operatorname{adj} {(E(n; p, q; s))})}
  = (\det {(E(n; p, q; s))})^{n-1}.
\end{aligned}
\]
进一步地，
\[
\begin{aligned}
  \operatorname{adj} {(
      \operatorname{adj} {(E(n; p, q; s))}
  )}
  = (\det {(E(n; p, q; s))})^{n-2} E(n; p, q; s).
\end{aligned}
\]
:::

::: proof
回想，\(E(n; p, q; s) E(n; p, q; -s) = I_n\)，
且 \(\det {(E(n; p, q; s))} = 1\)。
则
\[
\begin{aligned}
  \operatorname{adj} {(E(n; p, q; s))}
  = {} &
  \operatorname{adj} {(E(n; p, q; s))}\, I_n
  \\
  = {} &
  \operatorname{adj} {(E(n; p, q; s))}\, (E(n; p, q; s) E(n; p, q; -s))
  \\
  = {} &
  (\operatorname{adj} {(E(n; p, q; s))}\, E(n; p, q; s)) E(n; p, q; -s)
  \\
  = {} &
  (\det {(E(n; p, q; s))}\, I_n)
  E(n; p, q; -s)
  \\
  = {} &
  \det {(E(n; p, q; s))}\, I_n E(n; p, q; -s)
  \\
  = {} &
  E(n; p, q; -s).
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(\operatorname{adj} {(E(n; p, q; s))})}
  = \det {(E(n; p, q; -s))}
  = 1
  = (\det {(E(n; p, q; s))})^{n-1}.
\end{aligned}
\]
进一步地，
\[
\begin{aligned}
  \operatorname{adj} {(
      \operatorname{adj} {(E(n; p, q; s))}
  )}
  = {} &
  \operatorname{adj} {(E(n; p, q; -s))}
  \\
  = {} &
  E(n; p, q; -(-s))
  \\
  = {} &
  (\det {(E(n; p, q; s))})^{n-2}
  E(n; p, q; s).
\end{aligned}
\]
:::

::: theorem
设 \(n\) 是正整数。
设 \(p\)、\(q\) 是不超过 \(n\) 的正整数，且 \(p \neq q\)。
设 \(s\) 是数。
设 \(A\) 是 \(n\) 级阵。
则
\[
\begin{aligned}
  \operatorname{adj} {(A E(n; p, q; s))}
  =
  \operatorname{adj} {(E(n; p, q; s))}
  \operatorname{adj} {(A)}.
\end{aligned}
\]
:::

::: proof
注意，加 \(A\) 的列 \(p\) 的 \(s\) 倍于列 \(q\)，
且不改变别的列，我们得阵 \(A E(n; p, q; s)\)。

当 \(i = q\) 时，
\((A E(n; p, q; s))(j|i) = A(j|i)\)。
则
\[
\begin{aligned}
  [\operatorname{adj} {(A E(n; p, q; s))}]_{i,j}
  = {} &
  (-1)^{j+i} \det {((A E(n; p, q; s))(j|i))}
  \\
  = {} &
  (-1)^{j+i} \det {(A(j|i))}
  \\
  = {} &
  [\operatorname{adj} {(A)}]_{i,j}.
\end{aligned}
\]

当 \(i \neq q\)，且 \(i \neq p\) 时，
\((A E(n; p, q; s))(j|i)\)
可被认为是对 \(A(j|i)\) 作一次列的倍加得到的阵。
则 \(\det {((A E(n; p, q; s))(j|i))} = \det {(A(j|i))}\)。
则，类似地，
\[
\begin{aligned}
  [\operatorname{adj} {(A E(n; p, q; s))}]_{i,j}
  = [\operatorname{adj} {(A)}]_{i,j}.
\end{aligned}
\]

设 \(i = p\)。
作 \(n\) 级阵 \(C\)，
使 \([C]_{u,v} = [A]_{u,v}\)（若 \(v \neq q\)），
且 \([C]_{u,q} = [A]_{u,p}\)。
则 \(A E(n; p, q; s)\)、\(A\)、\(C\) 的列 \(v\) 相等
（若 \(v \neq q\)），
且 \([A E(n; p, q; s)]_{u,q}
    = [A]_{u,q} + s [A]_{u,p}
  = 1 [A]_{u,q} + s [C]_{u,q}\)。
然后，考虑
\((A E(n; p, q; s))(j|p)\)、
\(A(j|p)\)、\(C(j|p)\)。
记 \(q' = q - \rho(q, p)\)。
则 \((A E(n; p, q; s))(j|p)\) 的列 \(q'\)
仍是 \(A(j|p)\) 的列 \(q'\) 的 \(1\) 倍
加 \(C(j|p)\) 的列 \(q'\) 的 \(s\) 倍，
且 \((A E(n; p, q; s))(j|p)\)、
\(A(j|p)\)、\(C(j|p)\) 的别的列相同。
由多线性，
\[
\begin{aligned}
  \det {((A E(n; p, q; s))(j|p))}
  = 1 \det {(A(j|p))} + s \det {(C(j|p))}.
\end{aligned}
\]

考虑 \(n-1\) 级阵 \(A(j|q)\)。
注意，\(A\) 的列 \(v\)（\(v \neq q\)）对应
\(A(j|q)\) 的列 \(v - \rho(v, q)\)，
且 \(C\) 的列 \(w\)（\(w \neq p\)）对应
\(C(j|p)\) 的列 \(w - \rho(w, p)\)。
注意，\(A\)、\(C\) 的列 \(u\) 相等
（若 \(u \neq q\)）。
于是，若 \(w \neq p\)，且 \(w \neq q\)，
则 \(A\) 的列 \(w\) 对应
\(A(j|q)\) 的列 \(w - \rho(w, q)\)，
与 \(C(j|p)\) 的列 \(w - \rho(w, p)\)。
因为 \(A\) 的列 \(p\) 等于 \(C\) 的列 \(q\)，
则 \(A\) 的列 \(p\) 对应
\(C(j|p)\) 的列 \(q - \rho(q, p)\)。
当然，\(A\) 的列 \(p\) 也对应
\(A(j|q)\) 的列 \(p - \rho(p, q)\)。
所以，不计次序，
\(C(j|p)\) 与 \(A(j|q)\) 有相同的列。
注意，\(C(j|{p,q}) = A(j|{p,q})\)。
记 \(L\) 是从 \(A\) 的列 \(p\) 去除行 \(j\)
得到的 \((n - 1) \times 1\) 阵。
于是，我们可如此得到
\(A(j|q)\) 与 \(C(j|p)\)：
在 \(A(j|{p,q})\) 的某列的左边或右边加入 \(L\)，
得 \(A(j|q)\)；
在 \(A(j|{p,q})\) 的某列的左边或右边加入 \(L\)，
得 \(C(j|p)\)。
于是，若我们对 \(C(j|p)\) 作若干次相邻的列的交换，
我们可变它为 \(A(j|q)\)。

回想，\(q' = q - \rho(q, p)\)。
我们再记 \(p' = p - \rho(p, q)\)。
则 \(L\) 在 \(A(j|q)\) 的列 \(p'\) 的位置，
且 \(L\) 在 \(C(j|p)\) 的列 \(q'\) 的位置。

若 \(p' = q'\)，则 \(C(j|p) = A(j|q)\)。
则 \(\det {(C(j|p))} = (-1)^{q'-p'} \det {(A(j|q))}\)。

若 \(p' < q'\)，则我们记 \(C_0 = C(j|p)\)。
那么，对 \(C_k\)，
我们交换列 \(q' - k\) 与 \(q' - k - 1\)，
得阵 \(C_{k+1}\)
（\(0 \leqslant k < q' - p'\)）。
注意，作 \(q' - p'\) 次相邻的列的交换后，
我们得 \(C_{q'-p'-1} = A(j|q)\)。
则 \(\det {(C(j|p))} = (-1)^{q' - p'} \det {(A(j|q))}\)。

若 \(p' > q'\)，则我们记 \(C'_0 = C(j|p)\)。
那么，对 \(C'_k\)，
我们交换列 \(q' + k\) 与 \(q' + k + 1\)，
得阵 \(C'_{k+1}\)
（\(0 \leqslant k < p' - q'\)）。
注意，作 \(p' - q'\) 次相邻的列的交换后，
我们得 \(C'_{p'-q'+1} = A(j|q)\)。
则 \(\det {(C(j|p))}
    = (-1)^{p' - q'} \det {(A(j|q))}
  = (-1)^{q' - p'} \det {(A(j|q))}\)。

综上，
\[
\begin{aligned}
  \det {(C(j|p))}
  = {} &
  (-1)^{q' - p'} \det {(A(j|q))}
  \\
  = {} &
  (-1)^{q - \rho(q, p) - p + \rho(p, q)}
  \det {(A(j|q))}
  \\
  = {} &
  (-1)^{q - \rho(q, p) - p - \rho(p, q)}
  \det {(A(j|q))}
  \\
  = {} &
  (-1)^{q - p - 1} \det {(A(j|q))}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {((A E(n; p, q; s))(j|p))}
  = \det {(A(j|p))} - s (-1)^{q-p} \det {(A(j|q))}.
\end{aligned}
\]
于是，当 \(i = p\) 时，
\[
\begin{aligned}
  &
  [\operatorname{adj} {(A E(n; p, q; s))}]_{i,j}
  \\
  = {} &
  (-1)^{j+p}
  \det {((A E(n; p, q; s))(j|p))}
  \\
  = {} &
  (-1)^{j+p} \det {(A(j|p))}
  - (-1)^{j+p} s (-1)^{q-p} \det {(A(j|q))}
  \\
  = {} &
  (-1)^{j+p} \det {(A(j|p))}
  - s (-1)^{j+q} \det {(A(j|q))}
  \\
  = {} &
  [\operatorname{adj} {(A)}]_{p,j}
  - s\, [\operatorname{adj} {(A)}]_{q,j}
  \\
  = {} &
  [E(n; p, q; -s) \operatorname{adj} {(A)}]_{i,j}
  \\
  = {} &
  [\operatorname{adj} {(E(n; p, q; s))}
  \operatorname{adj} {(A)}]_{i,j}.
\end{aligned}
\]
最后，回想，当 \(i \neq p\) 时，
\[
\begin{aligned}
  [\operatorname{adj} {(A E(n; p, q; s))}]_{i,j}
  = {} &
  [\operatorname{adj} {(A)}]_{i,j}
  \\
  = {} &
  [E(n; p, q; -s)\, \operatorname{adj} {(A)}]_{i,j}
  \\
  = {} &
  [\operatorname{adj} {(E(n; p, q; s))}
  \operatorname{adj} {(A)}]_{i,j}.
\end{aligned}
\]
:::

好的。
我们现在可以统一地证明下面的定理。

::: theorem
设 \(A\)、\(B\) 是 \(n\) 级阵。
则
\[
\begin{aligned}
  \operatorname{adj} {(BA)}
  = \operatorname{adj} {(A)} \operatorname{adj} {(B)}.
\end{aligned}
\]
:::

::: proof
我们知道，
存在若干个 \(n\) 级阵
\(C_1\)、\(C_2\)、\(\dots\)、\(C_w\)，
使 \(A = C_1 C_2 \dots C_w\)，
其中，每个 \(C_k\) 形如
\(E(n; p, q; s)\) 或 \(M(n; q'; s')\)。
则对任何 \(n\) 级阵 \(X\)，
\[
\begin{aligned}
  \operatorname{adj} {(X C_k)}
  = \operatorname{adj} {(C_k)} \operatorname{adj} {(X)}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \operatorname{adj} {(B A)}
  = {} &
  \operatorname{adj} {(B (C_1 C_2 \dots C_{w-1} C_w))}
  \\
  = {} &
  \operatorname{adj}
  {(((((B C_1) C_2) \dots) C_{w-1}) C_w)}
  \\
  = {} &
  \operatorname{adj} {(C_w)}
  \operatorname{adj}
  {((((B C_1) C_2) \dots) C_{w-1})}
  \\
  = {} &
  \dots
  \\
  = {} &
  \operatorname{adj} {(C_w)}
  \operatorname{adj} {(C_{w-1})}
  \dots
  \operatorname{adj} {(C_2)}
  \operatorname{adj} {(C_1)}
  \operatorname{adj} {(B)}
  \\
  = {} &
  \operatorname{adj} {(C_w)}
  \operatorname{adj} {(C_{w-1})}
  \dots
  \operatorname{adj} {(C_1 C_2)}
  \operatorname{adj} {(B)}
  \\
  = {} &
  \dots
  \\
  = {} &
  \operatorname{adj} {(C_1 C_2 \dots C_w)}
  \operatorname{adj} {(B)}
  \\
  = {} &
  \operatorname{adj} {(A)}
  \operatorname{adj} {(B)}.
\end{aligned}
\]
:::

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 2\)）。
则
\(\det {(\operatorname{adj} {(A)})} = (\det {(A)})^{n-1}\)。
:::

::: proof
我们知道，
存在若干个 \(n\) 级阵
\(C_1\)、\(C_2\)、\(\dots\)、\(C_w\)，
使 \(A = C_1 C_2 \dots C_w\)，
其中，每个 \(C_k\) 形如
\(E(n; p, q; s)\) 或 \(M(n; q'; s')\)。
则对任何 \(n\) 级阵 \(X\)，
\[
\begin{aligned}
  \operatorname{adj} {(X C_k)}
  = \operatorname{adj} {(C_k)} \operatorname{adj} {(X)},
\end{aligned}
\]
且
\[
\begin{aligned}
  \det {(\operatorname{adj} {(C_k)})}
  = (\det {(C_k)})^{n-1}.
\end{aligned}
\]
注意，
\[
\begin{aligned}
  \operatorname{adj} {(A)}
  = {} &
  \operatorname{adj} {(C_1 C_2 \dots C_{w-1} C_w)}
  \\
  = {} &
  \operatorname{adj} {((((C_1 C_2) \dots) C_{w-1}) C_w)}
  \\
  = {} &
  \operatorname{adj} {(C_w)}
  \operatorname{adj} {(((C_1 C_2) \dots) C_{w-1})}
  \\
  = {} &
  \dots
  \\
  = {} &
  \operatorname{adj} {(C_w)}
  \operatorname{adj} {(C_{w-1})}
  \dots
  \operatorname{adj} {(C_2)}
  \operatorname{adj} {(C_1)}.
\end{aligned}
\]
则
\[
\begin{aligned}
  &
  \det {(\operatorname{adj} {(A)})}
  \\
  = {} &
  \det {(\operatorname{adj} {(C_w)}
      \operatorname{adj} {(C_{w-1})}
      \dots
      \operatorname{adj} {(C_2)}
  \operatorname{adj} {(C_1)})}
  \\
  = {} &
  \det {(\operatorname{adj} {(C_w)})}
  \det {(\operatorname{adj} {(C_{w-1})})}
  \dots
  \det {(\operatorname{adj} {(C_2)})}
  \det {(\operatorname{adj} {(C_1)})}
  \\
  = {} &
  (\det {(C_w)})^{n-1}
  (\det {(C_{w-1})})^{n-1}
  \dots
  (\det {(C_2)})^{n-1}
  (\det {(C_1)})^{n-1}
  \\
  = {} &
  (\det {(C_1)})^{n-1}
  (\det {(C_2)})^{n-1}
  \dots
  (\det {(C_{w-1})})^{n-1}
  (\det {(C_w)})^{n-1}
  \\
  = {} &
  (\det {(C_1)} \det {(C_2)} \dots \det {(C_w)})^{n-1}
  \\
  = {} &
  (\det {(C_1 C_2)} \dots \det {(C_w)})^{n-1}
  \\
  = {} &
  (\det {(C_1 C_2 \dots C_w)})^{n-1}
  \\
  = {} &
  (\det {(A)})^{n-1}.
\end{aligned}
\]
:::

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 2\)）。
则
\(\operatorname{adj} {(\operatorname{adj} {(A)})}
  = (\det {(A)})^{n-2}\,A\)。
:::

::: proof
我们知道，
存在若干个 \(n\) 级阵
\(C_1\)、\(C_2\)、\(\dots\)、\(C_w\)，
使 \(A = C_1 C_2 \dots C_w\)，
其中，每个 \(C_k\) 形如
\(E(n; p, q; s)\) 或 \(M(n; q'; s')\)。
则对任何 \(n\) 级阵 \(X\)，
\[
\begin{aligned}
  \operatorname{adj} {(X C_k)}
  = \operatorname{adj} {(C_k)} \operatorname{adj} {(X)},
\end{aligned}
\]
且
\[
\begin{aligned}
  \operatorname{adj} {(\operatorname{adj} {(C_k)})}
  = (\det {(C_k)})^{n-2} C_k.
\end{aligned}
\]
注意，
\[
\begin{aligned}
  \operatorname{adj} {(A)}
  = {} &
  \operatorname{adj} {(C_1 C_2 \dots C_{w-1} C_w)}
  \\
  = {} &
  \operatorname{adj} {((((C_1 C_2) \dots) C_{w-1}) C_w)}
  \\
  = {} &
  \operatorname{adj} {(C_w)}
  \operatorname{adj} {(((C_1 C_2) \dots) C_{w-1})}
  \\
  = {} &
  \dots
  \\
  = {} &
  \operatorname{adj} {(C_w)}
  \operatorname{adj} {(C_{w-1})}
  \dots
  \operatorname{adj} {(C_2)}
  \operatorname{adj} {(C_1)}.
\end{aligned}
\]
则
（注意，对任何 \(n\) 级阵 \(X\)，\(Y\)，
\(\operatorname{adj} {(Y X)}
  = \operatorname{adj} {(X)} \operatorname{adj} {(Y)}\)）
\[
\begin{aligned}
  &
  \operatorname{adj} {(\operatorname{adj} {(A)})}
  \\
  = {} &
  \operatorname{adj}
  {(\operatorname{adj} {(C_w)}
      \operatorname{adj} {(C_{w-1})}
      \dots
      \operatorname{adj} {(C_2)}
  \operatorname{adj} {(C_1)})}
  \\
  = {} &
  \operatorname{adj} {(\operatorname{adj} {(C_1)})}
  \operatorname{adj}
  {(\operatorname{adj} {(C_w)}
      \operatorname{adj} {(C_{w-1})}
      \dots
  \operatorname{adj} {(C_2)})}
  \\
  = {} &
  \dots
  \\
  = {} &
  \operatorname{adj} {(\operatorname{adj} {(C_1)})}
  \operatorname{adj} {(\operatorname{adj} {(C_2)})}
  \dots
  \operatorname{adj} {(\operatorname{adj} {(C_{w-1})})}
  \operatorname{adj} {(\operatorname{adj} {(C_w)})}
  \\
  = {} &
  ((\det {(C_1)})^{n-2} C_1)
  ((\det {(C_2)})^{n-2} C_2)
  \dots
  ((\det {(C_w)})^{n-2} C_{w})
  \\
  = {} &
  ((\det {(C_1)})^{n-2}
    (\det {(C_2)})^{n-2}
    \dots
  (\det {(C_w)})^{n-2})
  (C_1 C_2 \dots C_w)
  \\
  = {} &
  (\det {(C_1)} \det {(C_2)} \dots \det {(C_w)})^{n-2}
  (C_1 C_2 \dots C_w)
  \\
  = {} &
  (\det {(C_1 C_2)} \dots \det {(C_w)})^{n-2}
  (C_1 C_2 \dots C_w)
  \\
  = {} &
  (\det {(C_1 C_2 \dots C_w)})^{n-2}
  (C_1 C_2 \dots C_w)
  \\
  = {} &
  (\det {(A)})^{n-2} A.
\end{aligned}
\]
:::
