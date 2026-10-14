---
title: 行列式、倍加、倍乘
---

本节，我们用倍加与倍乘研究行列式。

回想，在第 1 章，节 6，我们定义了行列式。
定义是按列 \(1\) 展开。
在第 1 章，节 7，我们证明了，
可按任何一列展开行列式。
在第 1 章，节 13，
我们证明了行列式的关于列的多线性与交错性，
且证明了，\(\det {(I)} = 1\)。

由关于列的多线性，我们有，对任何 \(n\) 级阵 \(X\)，
\[
\begin{aligned}
  \det {(X M(n; q; s))}
  = s \det {(X)}
  = \det {(X)}\, s.
\end{aligned}
\]
注意，特别地，
\(\det {(M(n; q; s))}
  = \det {(I_n M(n; q; s))}
  = \det {(I_n)}\, s
= s\)。
则

```math {@eq:det-multiply-column}
\det {(X M(n; q; s))}
= \det {(X)} \det {(M(n; q; s))}.
```

设 \(X\) 是 \(n\) 级阵。
设 \(p\)、\(q\) 是不超过 \(n\) 的正整数，
且互不相同。
设 \(s\) 是数。
设 \(Y\) 是这样的 \(n\) 级阵：
若 \(j \neq q\)，则 \(Y\) 的列 \(j\) 是 \(X\) 的列 \(j\)，
且 \(Y\) 的列 \(q\) 是 \(X\) 的列 \(p\)。
则 \(Y\) 有相同的 \(2\) 列。
则 \(\det {(Y)} = 0\)。
另一方面，
\[
\begin{aligned}
  [X E(n; p, q; s)]_{i,j} =
  \begin{cases}
    [X]_{i,j},                 & j \neq q; \\
    1 [X]_{i,j} + s [Y]_{i,j}, & j = q.
  \end{cases}
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(X E(n; p, q; s))}
  = 1 \det {(X)} + s \det {(Y)}
  = \det {(X)}.
\end{aligned}
\]
注意，特别地，
\(\det {(E(n; p, q; s))}
  = \det {(I_n E(n; p, q; s))}
= \det {(I_n)} = 1\)。
则

```math {@eq:det-multiply-add-column}
\det {(X E(n; p, q; s))}
= \det {(X)} \det {(E(n; p, q; s))}.
```

式 @eq:det-multiply-column
与式 @eq:det-multiply-add-column
在本节会被反复地用。

回想，

::: theorem
设 \(A\) 是一个 \(m \times n\) 阵。
则存在若干个形如 \(E(n; p, q; s)\)
（\(s\) 是一个数，
\(p\)、\(q\) 是不超过 \(n\) 的正整数，
且 \(p \neq q\)）
的阵
\(E_1\)、\(E_2\)、\(\dots\)、\(E_u\)，
与若干个形如 \(E(m; p', q'; s')\)
（\(s'\) 是一个数，
\(p'\)、\(q'\) 是不超过 \(m\) 的正整数，
且 \(p' \neq q'\)）
的阵
\(F_1\)、\(F_2\)、\(\dots\)、\(F_u\)，
与 \(m \times n\) 阵 \(D\)，
使
\(A = (F_1 F_2 \dots F_u) D (E_u \dots E_2 E_1)\)，
且当 \(i \neq j\) 时，\([D]_{i,j} = 0\)。
:::

特别地，若 \(A\) 是方阵，则

::: theorem
设 \(A\) 是一个 \(n\) 级阵。
则存在若干个形如 \(E(n; p, q; s)\)
（\(s\) 是一个数，
\(p\)、\(q\) 是不超过 \(n\) 的正整数，
且 \(p \neq q\)）
的阵
\(E_1\)、\(F_1\)、
\(E_2\)、\(F_2\)、
\(\dots\)、
\(E_u\)、\(F_u\)，
与若干个形如 \(M(n; q'; s')\) 的阵
\(M_1\)、\(M_2\)、\(\dots\)、\(M_n\)，
使
\[
\begin{aligned}
  A =
  F_1 F_2 \dots F_u
  M_1 M_2 \dots M_n
  E_u \dots E_2 E_1.
\end{aligned}
\]
:::

好的。
我们开始。

::: theorem
设 \(A\)、\(B\) 是 \(n\) 级阵。
则
\[
\begin{aligned}
  \det {(BA)} = \det {(B)} \det {(A)}.
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
  \det {(X C_k)} = \det {(X)} \det {(C_k)}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(B A)}
  = {} &
  \det {(B (C_1 C_2 \dots C_w))}
  \\
  = {} &
  \det {(((((B C_1) C_2) \dots) C_{w-1}) C_w)}
  \\
  = {} &
  \det {((((B C_1) C_2) \dots) C_{w-1})}
  \det {(C_w)}
  \\
  = {} &
  \dots
  \\
  = {} &
  \det {(B)} \det {(C_1)} \det {(C_2)} \dots \det {(C_w)}
  \\
  = {} &
  \det {(B)} \det {(C_1 C_2)} \dots \det {(C_w)}
  \\
  = {} &
  \dots
  \\
  = {} &
  \det {(B)} \det {(C_1 C_2 \dots C_w)}
  \\
  = {} &
  \det {(B)} \det {(A)}.
\end{aligned}
\]
:::

::: theorem
设定义在全体 \(n\) 级阵上的函数 \(f\) 适合：

(1) 对 \(n\) 级阵 \(A\)，
    加列 \(p\) 的 \(s\) 倍于列 \(q\)
    （\(q \neq p\)），
    且不改变别的列，
    得 \(n\) 级阵 \(B\)。
    则 \(f(B) = f(A)\)。

(2) 对 \(n\) 级阵 \(A\)，
    以数 \(s\) 乘列 \(q\)，
    且不改变别的列，
    得 \(n\) 级阵 \(B\)。
    则 \(f(B) = f(A)\, m(s)\)。
    这里，定义在数上的函数 \(m\) 是保乘的：
    \(m(1) = 1\)，
    且对任何数 \(s\)，\(t\)，\(m(st) = m(s)\, m(t)\)。

那么，对任何 \(n\) 级阵 \(A\)，
\(f(A) = f(I)\, m(\det {(A)})\)。
:::

::: proof
用倍加，我们可改写性质 (1) 为，
对任何 \(n\) 级阵 \(X\)，
\[
\begin{aligned}
  f(X E(n; p, q; s))
  = f(X)
  = f(X)\, m(\det {(E(n; p, q; s))}).
\end{aligned}
\]
用倍乘，我们可改写性质 (2) 为，
对任何 \(n\) 级阵 \(X\)，
\[
\begin{aligned}
  f(X M(n; q; s))
  = f(X)\, m(s)
  = f(X)\, m(\det {(M(n; q; s))}).
\end{aligned}
\]

我们知道，
存在若干个 \(n\) 级阵
\(C_1\)、\(C_2\)、\(\dots\)、\(C_w\)，
使 \(A = C_1 C_2 \dots C_w\)，
其中，每个 \(C_k\) 形如
\(E(n; p, q; s)\) 或 \(M(n; q'; s')\)。
则对任何 \(n\) 级阵 \(X\)，
\[
\begin{aligned}
  f(X C_k) = f(X)\, m(\det {(C_k)}).
\end{aligned}
\]
注意，\(A = I A\)。
则
\[
\begin{aligned}
  f(A)
  = {} &
  f (I (C_1 C_2 \dots C_w))
  \\
  = {} &
  f (((((I C_1) C_2) \dots) C_{w-1}) C_w)
  \\
  = {} &
  f ((((I C_1) C_2) \dots) C_{w-1})\,
  m(\det {(C_w)})
  \\
  = {} &
  \dots
  \\
  = {} &
  f(I)\,
  m(\det {(C_1)})\,
  m(\det {(C_2)})\,
  \dots
  m(\det {(C_w)})
  \\
  = {} &
  f(I)\,
  m(\det {(C_1)} \det {(C_2)} \dots \det {(C_w)})
  \\
  = {} &
  f(I)\,
  m(\det {(C_1 C_2)} \dots \det {(C_w)})
  \\
  = {} &
  \dots
  \\
  = {} &
  f(I)\,
  m(\det {(C_1 C_2 \dots C_w)})
  \\
  = {} &
  f(I)\, m(\det {(A)}).
\end{aligned}
\]
:::

::: theorem
设定义在全体 \(n\) 级阵上的函数 \(f\) 适合：

(1) \(f(A B) = f(A) f(B)\)，
    对任何 \(n\) 级阵 \(A\)，\(B\)。

(2) 设 \(n\) 级阵 \(D\) 适合，
    若 \(i \neq j\)，则 \([D]_{i,j} = 0\)。
    则 \(f(D) = m(\det {(D)})\)。
    这里，定义在数上的函数 \(m\) 是保乘的：
    \(m(1) = 1\)，
    且对任何数 \(s\)，\(t\)，\(m(st) = m(s)\, m(t)\)。

那么，对任何 \(n\) 级阵 \(A\)，
\(f(A) = m(\det {(A)})\)。
:::

::: proof
注意，\(f(M(n; q; s)) = m(\det {(M(n; q; s))})\)，
且 \(f(I) = m(\det {(I)}) = 1\)。

设 \(p\)、\(q\) 是不超过 \(n\) 的正整数，且互不相同。
设 \(s\) 是数。
我们证明，
\[
\begin{aligned}
  f(E(n; p, q; s)) = m(\det {(E(n; p, q; s))}).
\end{aligned}
\]
设数 \(t \neq 1\)，且 \(t \neq 0\)。
记
\(U = E(n; p, q; s/(1-t))\)，
\(V = E(n; p, q; -s/(1-t))\)，
\(G = M(n; p; t)\)，
且 \(H = M(n; p; 1/t)\)。
注意，
\([UV]_{p,q} = [U]_{p,q} + [U]_{q,q}\, (-s/(1-t)) = 0\)，
且
\([UV]_{i,j} = [U]_{i,j} = [I_n]_{i,j}\)
（别的情形）。
故 \(UV = I_n\)。
注意，
\([GH]_{p,p} = [G]_{p,p}\, (1/t) = 1\)，
且
\([GH]_{i,j} = [G]_{i,j} = [I_n]_{i,j}\)
（别的情形）。
故 \(GH = I_n\)。
我们计算 \(UGVH\)。
首先，
\([UG]_{p,p} = [U]_{p,p}\, t = t\)，
\([UG]_{p,q} = [U]_{p,q} = s/(1-t)\)，
且
\([UG]_{i,j} = [U]_{i,j}\)
（别的情形）。
则
\([UGV]_{p,p} = [UG]_{p,p} = t\)，
\([UGV]_{p,q} = [UG]_{p,q} + [UG]_{p,p}\, (-s/(1-t))
  = s/(1-t) - st/(1-t) = s\)，
且
\([UGV]_{i,j} = [UG]_{i,j} = [U]_{i,j}\)
（别的情形）。
则
\([UGVH]_{p,p} = [UGV]_{p,p}\, (1/t) = 1\)，
\([UGVH]_{p,q} = [UGV]_{p,q} = s\)，
且
\([UGVH]_{i,j} = [UGV]_{i,j} = [U]_{i,j}\)
（别的情形）。
则 \(UGVH = E(n; p, q; s)\)。
故
\[
\begin{aligned}
  f(E(n; p, q; s))
  = {} &
  f(UGVH)
  \\
  = {} &
  f(UG) f(VH)
  \\
  = {} &
  f(U) f(G) f(V) f(H)
  \\
  = {} &
  f(U) f(V) f(G) f(H)
  \\
  = {} &
  f(UV) f(GH)
  \\
  = {} &
  f(I) f(I)
  \\
  = {} &
  1
  \\
  = {} &
  m(\det {(E(n; p, q; s))}).
\end{aligned}
\]

我们知道，
存在若干个 \(n\) 级阵
\(C_1\)、\(C_2\)、\(\dots\)、\(C_w\)，
使 \(A = C_1 C_2 \dots C_w\)，
其中，每个 \(C_k\) 形如
\(E(n; p, q; s)\) 或 \(M(n; q'; s')\)。
则对任何 \(n\) 级阵 \(X\)，
\[
\begin{aligned}
  f(X C_k)
  = f(X) f(C_k)
  = f(X)\, m(\det {(C_k)}).
\end{aligned}
\]
注意，\(A = I A\)。
则
\[
\begin{aligned}
  f(A)
  = {} &
  f (I (C_1 C_2 \dots C_w))
  \\
  = {} &
  f (((((I C_1) C_2) \dots) C_{w-1}) C_w)
  \\
  = {} &
  f ((((I C_1) C_2) \dots) C_{w-1})\,
  m(\det {(C_w)})
  \\
  = {} &
  \dots
  \\
  = {} &
  f(I)\,
  m(\det {(C_1)})\,
  m(\det {(C_2)})\,
  \dots
  m(\det {(C_w)})
  \\
  = {} &
  f(I)\,
  m(\det {(C_1)} \det {(C_2)} \dots \det {(C_w)})
  \\
  = {} &
  f(I)\,
  m(\det {(C_1 C_2)} \dots \det {(C_w)})
  \\
  = {} &
  \dots
  \\
  = {} &
  f(I)\,
  m(\det {(C_1 C_2 \dots C_w)})
  \\
  = {} &
  f(I)\, m(\det {(A)})
  \\
  = {} &
  m(\det {(A)}).
\end{aligned}
\]
:::

注意，前面的 \(3\) 个证明几乎是一样的：
我们写 \(A\) 为一些阵
\(C_1\)、\(C_2\)、\(\dots\)、\(C_w\) 的积，
分别地“提出”
\(\det {(C_w)}\)、\(\dots\)、\(\det {(C_2)}\)、\(\det {(C_1)}\)，
且再“重组”它们为
\(\det {(C_1 C_2 \dots C_w)}\)，
即 \(\det {(A)}\)。

::: theorem
设 \(A\) 是 \(n\) 级阵。
则 \(\det {(A^{\mathrm{T}})} = \det {(A)}\)。
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
  \det {(X C_k)} = \det {(X)} \det {(C_k)}.
\end{aligned}
\]
注意，\(A = I A\)。
则
\[
\begin{aligned}
  \det {(A)}
  = {} &
  \det {(I (C_1 C_2 \dots C_w))}
  \\
  = {} &
  \det {(((((I C_1) C_2) \dots) C_{w-1}) C_w)}
  \\
  = {} &
  \det {((((I C_1) C_2) \dots) C_{w-1})}
  \det {(C_w)}
  \\
  = {} &
  \dots
  \\
  = {} &
  \det {(I)} \det {(C_1)} \det {(C_2)} \dots \det {(C_w)}
  \\
  = {} &
  \det {(C_1)} \det {(C_2)} \dots \det {(C_w)}.
\end{aligned}
\]
注意，
\(
    A^{\mathrm{T}}
    = (C_1 C_2 \dots C_w)^{\mathrm{T}}
    = C_w^{\mathrm{T}} \dots C_2^{\mathrm{T}} C_1^{\mathrm{T}}
  \)，
且每个 \(C_k^{\mathrm{T}}\) 也形如
\(E(n; p, q; s)\) 或 \(M(n; q'; s')\)
（具体地，
\((E(n; p, q; s))^{\mathrm{T}} = E(n; q, p; s)\)，
且
\((M(n; \allowbreak
        q'; \allowbreak
    s'))^{\mathrm{T}}
    = M(n; \allowbreak
      q'; \allowbreak
  s')\)）。
则，类似地，
\[
\begin{aligned}
  \det {(A^{\mathrm{T}})}
  = \det {(C_w^{\mathrm{T}})}
  \dots
  \det {(C_2^{\mathrm{T}})}
  \det {(C_1^{\mathrm{T}})}.
\end{aligned}
\]
注意，
\[
\begin{aligned}
  &
  \det {((E(n; p, q; s))^{\mathrm{T}})}
  = \det {(E(n; q, p; s))} = 1 = \det {(E(n; p, q; s))},
  \\
  &
  \det {((M(n; q'; s'))^{\mathrm{T}})}
  = \det {(M(n; q'; s'))}.
\end{aligned}
\]
则 \(\det {(C_k^{\mathrm{T}})} = \det {(C_k)}\)，
\(k = 1\)、\(2\)、\(\dots\)、\(w\)。
则
\[
\begin{aligned}
  \det {(A^{\mathrm{T}})}
  = {} &
  \det {(C_w^{\mathrm{T}})}
  \dots
  \det {(C_2^{\mathrm{T}})}
  \det {(C_1^{\mathrm{T}})}
  \\
  = {} &
  \det {(C_w)} \dots \det {(C_2)} \det {(C_1)}
  \\
  = {} &
  \det {(C_1)} \det {(C_2)} \dots \det {(C_w)}
  \\
  = {} &
  \det {(A)}.
\end{aligned}
\]
:::

::: theorem
设 \(A\) 是 \(n\) 级阵。
设 \(p\)、\(q\) 是不超过 \(n\) 的正整数，且互不相同。
交换 \(A\) 的列 \(p\)、\(q\)，
且不改变别的列，
得 \(n\) 级阵 \(B\)。
则 \(\det {(B)} = -\det {(A)}\)。
:::

::: proof
我们知道，存在 \(n\) 级阵
\(E_1 = E(n; q, p; 1)\)，
\(E_2 = E(n; p, q; -1)\)，
\(E_3 = E(n; q, p; 1)\)，
与 \(M = M(n; q; -1)\)，
使 \(B = A E_1 E_2 E_3 M\)。
注意，\(\det {(M)} = -1\)。
则
\[
\begin{aligned}
  \det {(B)}
  = {} &
  \det {(A E_1 E_2 E_3 M)}
  \\
  = {} &
  {-\det {(A E_1 E_2 E_3)}}
  \\
  = {} &
  {-\det {(A)}}.
\end{aligned}
\]
:::
