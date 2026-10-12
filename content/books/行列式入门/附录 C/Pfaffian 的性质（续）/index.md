---
title: pfaffian 的性质（续）
---

前面，我们得到了 pfaffian 的多的性质。
以下 \(3\) 个是重要的：

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
加 \(A\) 的列 \(p\) 的 \(s\) 倍于列 \(q\)
（\(p \neq q\)），
且不改变别的列，得 \(n\) 级阵 \(B\)。
加 \(B\) 的行 \(p\) 的 \(s\) 倍于行 \(q\)，
且不改变别的行，得 \(n\) 级阵 \(C\)。
则 \(\operatorname{pf} {(C)} = \operatorname{pf} {(A)}\)。
:::

::: theorem
设 \(A\) 是 \(n\) 级反称阵。
则 \(\det {(A)}
  = (\operatorname{pf} {(A)})^2\)。
:::

本节，我们证明 pfaffian 的一个新的重要的性质。
为此，我们先改写第 1、2 个性质。

::: theorem
设 \(A\) 是 \(n\) 级反称阵。
设 \(s\) 是数。
设 \(q\) 是不超过 \(n\) 的正整数。
则
\[
\begin{aligned}
  \operatorname{pf}{( (M(n; q; s))^{\mathrm{T}}
  A M(n; q; s) )}
  = \operatorname{pf} {(A)} \det {(M(n; q; s))}.
\end{aligned}
\]
:::

::: proof
记 \(M = M(n; q; s)\)。
注意，
\[
\begin{aligned}
  [M^{\mathrm{T}} A M]_{i,j}
  = {} &
  \sum_{k = 1}^{n} {
    [M^{\mathrm{T}}]_{i,k} [A M]_{k,j}
  }
  \\
  = {} &
  \sum_{k = 1}^{n} {
    [M]_{k,i} [A M]_{k,j}
  }
  \\
  = {} &
  [M]_{i,i} [A M]_{i,j}
  +
  \sum_{\substack{1 \leqslant k \leqslant n \\ k \neq i}}
  {
    [M]_{k,i} [A M]_{k,j}
  }
  \\
  = {} &
  [M]_{i,i} [A M]_{i,j}
  +
  \sum_{\substack{1 \leqslant k \leqslant n \\ k \neq i}}
  {
    0\, [A M]_{k,j}
  }
  \\
  = {} &
  [M]_{i,i}
  [A M]_{i,j}
  \\
  = {} &
  [M]_{i,i}
  \sum_{\ell = 1}^{n}
  {[A]_{i,\ell} [M]_{\ell,j}}
  \\
  = {} &
  [M]_{i,i}
  \Bigg(
    [A]_{i,j} [M]_{j,j}
    +
    \sum_{\substack{1 \leqslant \ell \leqslant n \\ \ell \neq j}}
    {[A]_{i,\ell} [M]_{\ell,j}}
  \Bigg)
  \\
  = {} &
  [M]_{i,i}
  \Bigg(
    [A]_{i,j} [M]_{j,j}
    +
    \sum_{\substack{1 \leqslant \ell \leqslant n \\ \ell \neq j}}
    {[A]_{i,\ell} \, 0}
  \Bigg)
  \\
  = {} &
  [M]_{i,i}
  [A]_{i,j}
  [M]_{j,j}.
\end{aligned}
\]
当 \(i \neq q\)，\(j \neq q\) 时，
\[
\begin{aligned}
  [M]_{i,i}
  [A]_{i,j}
  [M]_{j,j}
  = 1\, [A]_{i,j}\, 1
  = [A]_{i,j};
\end{aligned}
\]
当 \(i = q\)，\(j \neq q\) 时，
\[
\begin{aligned}
  [M]_{i,i}
  [A]_{i,j}
  [M]_{j,j}
  = s\, [A]_{i,j}\, 1
  = s\, [A]_{i,j};
\end{aligned}
\]
当 \(i \neq q\)，\(j = q\) 时，
\[
\begin{aligned}
  [M]_{i,i}
  [A]_{i,j}
  [M]_{j,j}
  = 1\, [A]_{i,j} s
  = s\, [A]_{i,j};
\end{aligned}
\]
当 \(i = q\)，\(j = q\) 时，
\[
\begin{aligned}
  [M]_{i,i}
  [A]_{i,j}
  [M]_{j,j}
  = s\, 0\, s
  = 0
  = s\, [A]_{i,j}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \operatorname{pf}{( (M(n; q; s))^{\mathrm{T}}
  A M(n; q; s) )}
  = s \operatorname{pf} {(A)}
  = \operatorname{pf} {(A)}\, s.
\end{aligned}
\]
注意，\(\det {(M(n; q; s))} = s\)：
\(M(n; q; s)\) 是以 \(s\) 乘
\(n\) 级单位阵 \(I_n\) 的列 \(q\) 得到的阵，
则 \(\det {(M(n; q; s))} = \det {(I_n)}\, s = s\)。
从而
\[
\operatorname{pf}{( (M(n; q; s))^{\mathrm{T}}
A M(n; q; s) )}
= \operatorname{pf} {(A)} \det {(M(n; q; s))}.
\]
:::

::: theorem
设 \(A\) 是 \(n\) 级反称阵。
设 \(s\) 是数。
设 \(p\)、\(q\) 是不超过 \(n\) 的正整数，
且 \(p \neq q\)。
则
\[
\begin{aligned}
  \operatorname{pf}{( (E(n; p, q; s))^{\mathrm{T}}
  A E(n; p, q; s) )}
  = \operatorname{pf} {(A)} \det {(E(n; p, q; s))}.
\end{aligned}
\]
:::

::: proof
加 \(A\) 的列 \(p\) 的 \(s\) 倍于列 \(q\)，
且不改变别的列，得 \(n\) 级阵 \(B\)。
加 \(B\) 的行 \(p\) 的 \(s\) 倍于行 \(q\)，
且不改变别的行，得 \(n\) 级阵 \(C\)。
则 \(\operatorname{pf} {(C)} = \operatorname{pf} {(A)}\)。

注意，\(C = (E(n; p, q; s))^{\mathrm{T}}
  A E(n; p, q; s)\)，
故
\[
\begin{aligned}
  \operatorname{pf}{( (E(n; p, q; s))^{\mathrm{T}}
  A E(n; p, q; s) )} = \operatorname{pf} {(A)}.
\end{aligned}
\]
再注意，\(\det {(E(n; p, q; s))} = 1\)，
故
\[
\operatorname{pf}{( (E(n; p, q; s))^{\mathrm{T}}
A E(n; p, q; s) )}
=
\operatorname{pf} {(A)}
\det {(E(n; p, q; s))}.
\]
:::

好的。
现在，我们可以证明本节的主要结论了。

::: theorem
设 \(A\) 是 \(n\) 级反称阵。
设 \(P\) 是 \(n\) 级阵。
则
\[
\begin{aligned}
  \operatorname{pf} {(P^{\mathrm{T}} A P)}
  = \operatorname{pf} {(A)} \det {(P)}.
\end{aligned}
\]
:::

::: proof [证 1]
我们知道，
存在若干个 \(n\) 级阵
\(C_1\)、\(C_2\)、\(\dots\)、\(C_w\)，
使 \(P = C_1 C_2 \dots C_w\)，
其中，每个 \(C_k\) 形如
\(E(n; p, q; s)\) 或 \(M(n; q'; s')\)。
则对任何 \(n\) 级反称阵 \(X\)，
\[
\begin{aligned}
  \operatorname{pf} {(C_k^{\mathrm{T}} X C_k)}
  = \operatorname{pf} {(X)} \det {(C_k)}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \operatorname{pf} {(P^{\mathrm{T}} A P)}
  = {} &
  \operatorname{pf} {(
      (C_1 C_2 \dots C_w)^{\mathrm{T}} A
      (C_1 C_2 \dots C_w)
  )}
  \\
  = {} &
  \operatorname{pf} {(
      C_w^{\mathrm{T}} \dots C_2^{\mathrm{T}}
      C_1^{\mathrm{T}} A
      C_1 C_2 \dots C_w
  )}
  \\
  = {} &
  \operatorname{pf} {
    (C_w^{\mathrm{T}}
      (C_{w-1}^{\mathrm{T}}
        (\dots
          (C_2^{\mathrm{T}}
            (C_1^{\mathrm{T}}
              A
            C_1)
          C_2)
        \dots)
      C_{w-1})
    C_w)
  }
  \\
  = {} &
  \operatorname{pf} {
    (C_{w-1}^{\mathrm{T}}
      (\dots
        (C_2^{\mathrm{T}}
          (C_1^{\mathrm{T}}
            A
          C_1)
        C_2)
      \dots)
    C_{w-1})
  }
  \det {(C_w)}
  \\
  = {} &
  \dots
  \\
  = {} &
  \operatorname{pf} {(A)}
  \det {(C_1)} \det {(C_2)} \dots \det {(C_w)}
  \\
  = {} &
  \operatorname{pf} {(A)}
  \det {(C_1 C_2)} \dots \det {(C_w)}
  \\
  = {} &
  \dots
  \\
  = {} &
  \operatorname{pf} {(A)}
  \det {(C_1 C_2 \dots C_w)}
  \\
  = {} &
  \operatorname{pf} {(A)}
  \det {(P)}.
\end{aligned}
\]
:::

::: proof [证 2]
考虑定义在全体 \(n\) 级阵上的函数
\(f(C) = \operatorname{pf} {(C^{\mathrm{T}} A C)}\)，
其中，\(C\) 是 \(n\) 级阵。

(1)
\(f\) 适合倍加不变性。
（见“用行列式的性质确定行列式”。）
设 \(E = E(n; p, q; s)\)
（\(p \neq q\)）。
则加 \(C\) 的列 \(p\) 的 \(s\) 倍于列 \(q\)，
且不改变别的列，
得阵 \(C E\)。
则
\[
\begin{aligned}
  f(C E)
  = {} &
  \operatorname{pf} {((C E)^{\mathrm{T}} A (C E))}
  \\
  = {} &
  \operatorname{pf}
  {(E^{\mathrm{T}} (C^{\mathrm{T}} A C) E)}
  \\
  = {} &
  \operatorname{pf}
  {(C^{\mathrm{T}} A C)}
  \\
  = {} &
  f(C).
\end{aligned}
\]

(2)
\(f\) 适合多齐性。
设 \(M = M(n; q; s)\)。
则以数 \(s\) 乘 \(C\) 的列 \(q\)，
且不改变别的列，
得阵 \(C M\)。
则
\[
\begin{aligned}
  f(C M)
  = {} &
  \operatorname{pf} {((C M)^{\mathrm{T}} A (C M))}
  \\
  = {} &
  \operatorname{pf}
  {(M^{\mathrm{T}} (C^{\mathrm{T}} A C) M)}
  \\
  = {} &
  s \operatorname{pf}
  {(C^{\mathrm{T}} A C)}
  \\
  = {} &
  s f(C).
\end{aligned}
\]

所以，对任何 \(n\) 级阵 \(P\)，
\[
\begin{aligned}
  \operatorname{pf} {(P^{\mathrm{T}} A P)}
  = {} &
  f(P)
  \\
  = {} &
  f(I) \det {(P)}
  \\
  = {} &
  \operatorname{pf} {(I^{\mathrm{T}} A I)} \det {(P)}
  \\
  = {} &
  \operatorname{pf} {(A)} \det {(P)}.
\end{aligned}
\]
:::
