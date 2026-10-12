---
title: 辛阵
---

设 \(2m\) 是一个不低于 \(2\) 的偶数。
作 \(2m\) 级阵
\[
\begin{aligned}
  K_m =
  \begin{bmatrix}
    0    & I_m \\
    -I_m & 0   \\
  \end{bmatrix},
\end{aligned}
\]
其中，\(0\) 是 \(m\) 级零阵；
具体地，
\[
\begin{aligned}
  [K_m]_{i,j} =
  \begin{cases}
    [0]_{i,j},
    & \text{\(i \leqslant m\), 且 \(j \leqslant m\)}; \\
    [I_m]_{i,j-m},
    & \text{\(i \leqslant m\), 且 \(j > m\)};    \\
    [-I_m]_{i-m,j},
    & \text{\(i > m\), 且 \(j \leqslant m\)};    \\
    [0]_{i-m,j-m},
    & \text{\(i > m\), 且 \(j > m\)}.
  \end{cases}
\end{aligned}
\]
更具体地，
\[
\begin{aligned}
  [K_m]_{i,j} =
  \begin{cases}
    1,  & 1 \leqslant i = j - m \leqslant m; \\
    -1, & 1 \leqslant i - m = j \leqslant m; \\
    0,  & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
不难算出，\(K_m^{\mathrm{T}} = -K_m\)，
且 \(K_m K_m = -I_{2m}\)。

按列 \(1\) 展开 \(\det {(K_m)}\)，得
\[
\begin{aligned}
  \det {(K_m)}
  = {} &
  (-1)^{m+1} (-1) \det {(K_m ({m+1}|1))}
  \\
  = {} &
  (-1)^{m} \det {(K_m ({m+1}|1))}.
\end{aligned}
\]
再按行 \(1\) 展开 \(\det {(K_m ({m+1}|1))}\)，得
\[
\begin{aligned}
  \det {(K_m ({m+1}|1))}
  = {} &
  (-1)^{1+m-1}\, 1 \det {(K_m ({m+1,1}|{1,m+1}))}
  \\
  = {} &
  (-1)^m \det {(K_{m-1})}.
\end{aligned}
\]
则 \(\det {(K_m)} = \det {(K_{m-1})}\)，
当 \(m > 1\)。
不难算出，\(\det {(K_1)} = 1\)。
则 \(\det {(K_m)} = 1\)，对 \(m \geqslant 1\)。

本节，我们讨论辛阵。

::: definition
设 \(A\) 是一个 \(2m\) 级阵。
若 \(A^{\mathrm{T}} K_m A = K_m\)，
则 \(A\) 是一个**辛阵**。
:::

“辛”来自 <lang en>symplectic</lang>（英语）。

我们可写出辛阵的一些性质。

不难看出，\(2m\) 级单位阵 \(I_{2m}\) 是一个辛阵。
由 \(K_m\) 的性质，不难验证，
\(K_m\) 也是一个辛阵。

设 \(A\)、\(B\) 是 \(2m\) 级辛阵。
则
\[
\begin{aligned}
  (AB)^{\mathrm{T}} K_m (AB)
  = {} &
  (B^{\mathrm{T}} A^{\mathrm{T}})
  (K_m A) B
  \\
  = {} &
  B^{\mathrm{T}}
  (A^{\mathrm{T}} K_m A)
  B
  \\
  = {} &
  B^{\mathrm{T}} K_m B
  \\
  = {} &
  K_m.
\end{aligned}
\]

因为
\[
\begin{aligned}
  \det {(K_m)}
  = \det {(A^{\mathrm{T}} K_m A)}
  = \det {(A^{\mathrm{T}})} \det {(K_m)} \det {(A)}
  = \det {(K_m)}\, (\det {(A)})^2,
\end{aligned}
\]
且 \(\det {(K_m)} = 1\)，
故 \((\det {(A)})^2 = 1\)。

若数 \(t\) 适合 \(t^2 = 1\)，
则
\[
\begin{aligned}
  (t A)^{\mathrm{T}} K_m (t A)
  = (t A^{\mathrm{T}}) K_m (t A)
  = t^2 (A^{\mathrm{T}} K_m A)
  = 1 K_m = K_m.
\end{aligned}
\]

注意，
\(\det {(K_m A)} = \det {(K_m)} \det {(A)} \neq 0\)，
且
\[
\begin{aligned}
  ((A^{\mathrm{T}})^{\mathrm{T}} K_m A^{\mathrm{T}})
  (K_m A)
  = {} &
  (A K_m A^{\mathrm{T}})
  (K_m A)
  \\
  = {} &
  (A K_m) (A^{\mathrm{T}} K_m A)
  \\
  = {} &
  (A K_m) K_m
  \\
  = {} &
  A (K_m K_m)
  \\
  = {} &
  A (-I_{2m})
  \\
  = {} &
  {(-I_{2m})} A
  \\
  = {} &
  (K_m K_m) A
  \\
  = {} &
  K_m (K_m A),
\end{aligned}
\]
故
\((A^{\mathrm{T}})^{\mathrm{T}} K_m A^{\mathrm{T}} = K_m\)。

最后，注意，
\[
\begin{aligned}
  (\operatorname{adj} {(A)})^{\mathrm{T}}\,
  K_m
  \operatorname{adj} {(A)}
  = {} &
  (\operatorname{adj} {(A)})^{\mathrm{T}}\,
  (A^{\mathrm{T}} K_m A)
  \operatorname{adj} {(A)}
  \\
  = {} &
  ((\operatorname{adj} {(A)})^{\mathrm{T}}\, A^{\mathrm{T}})\,
  K_m\,
  (A \operatorname{adj} {(A)})
  \\
  = {} &
  (A \operatorname{adj} {(A)})^{\mathrm{T}}\,
  K_m\,
  (A \operatorname{adj} {(A)})
  \\
  = {} &
  (\det {(A)}\, I_{2m})^{\mathrm{T}}\,
  K_m\,
  (\det {(A)}\, I_{2m})
  \\
  = {} &
  (\det {(A)}\, I_{2m}^{\mathrm{T}})\, K_m\,
  (\det {(A)}\, I_{2m})
  \\
  = {} &
  (\det {(A)})^2\, (I_{2m}^{\mathrm{T}} K_m I_{2m})
  \\
  = {} &
  K_m.
\end{aligned}
\]

总结这些结果，我们得

::: theorem
(1)
\(I_{2m}\) 与 \(K_m\) 是 \(2m\) 级辛阵。

(2)
\(2m\) 级辛阵 \(A\) 的行列式的平方为 \(1\)。

(3)
设 \(A\)、\(B\) 是 \(2m\) 级辛阵。
设数 \(t\) 适合 \(t^2 = 1\)。
则 \(AB\)、\(tA\)、
\(A^{\mathrm{T}}\)、
\(\operatorname{adj} {(A)}\)
也是辛阵。
:::

本书是关于行列式的。
于是，一个自然的问题是，辛阵的行列式是多少。
我们知道，辛阵的行列式的平方是 \(1\)，
故辛阵的行列式是 \(1\) 或 \(-1\)。
不过，不平凡地，辛阵的行列式是 \(1\)。
我们现有的知识无法解决此事。
我会在后面的几节，介绍更多的知识，以解决它。

虽然如此，我们还是能解决 \(2m = 2\) 的情形。
设
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    a & b \\
    c & d \\
  \end{bmatrix}
\end{aligned}
\]
是一个 \(2\) 级辛阵。
由 \(A^{\mathrm{T}} K_1 A = K_1\)，知
\[
\begin{aligned}
  \begin{bmatrix}
    a & c \\
    b & d \\
  \end{bmatrix}
  \begin{bmatrix}
    0  & 1 \\
    -1 & 0 \\
  \end{bmatrix}
  \begin{bmatrix}
    a & b \\
    c & d \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    0  & 1 \\
    -1 & 0 \\
  \end{bmatrix},
\end{aligned}
\]
即
\[
\begin{aligned}
  \begin{bmatrix}
    0          & ad - bc \\
    -(ad - bc) & 0       \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    0  & 1 \\
    -1 & 0 \\
  \end{bmatrix}.
\end{aligned}
\]
故
\(\det {(A)} = ad - bc = 1\)。
