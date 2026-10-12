---
title: '辛阵的行列式为 \(1\)'
---

::: theorem
设 \(K_m\) 是形如
\[
\begin{aligned}
  \begin{bmatrix}
    0    & I_m \\
    -I_m & 0   \\
  \end{bmatrix}
\end{aligned}
\]
的 \(2m\) 级反称阵。
设 \(2m\) 级阵 \(A\) 适合
\(A^{\mathrm{T}} K_m A = K_m\)。
（我们说，\(A\) 是一个辛阵。）
则 \(\det {(A)} = 1\)。
:::

::: proof
不难算出，\(\det {(K_m)} = 1\)。
则
\[
\begin{aligned}
  \operatorname{pf} {(K_m)} \operatorname{pf} {(K_m)}
  = \det {(K_m)} = 1.
\end{aligned}
\]
由
\[
\begin{aligned}
  \operatorname{pf} {(K_m)}
  = \operatorname{pf} {(A^{\mathrm{T}} K_m A)}
  = \operatorname{pf} {(K_m)} \det {(A)},
\end{aligned}
\]
知
\[
\begin{aligned}
  \operatorname{pf} {(K_m)} \operatorname{pf} {(K_m)}
  = \operatorname{pf} {(K_m)} \operatorname{pf} {(K_m)} \det {(A)},
\end{aligned}
\]
即
\[
1 = 1 \det {(A)} = \det {(A)}.
\]
:::
