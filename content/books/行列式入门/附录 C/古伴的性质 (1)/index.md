---
title: 古伴的性质 (1)
---

本节，我们学习古伴的 \(3\) 个性质。

一个 \(n\) 级阵 \(A\) 的古伴 \(\operatorname{adj} {(A)}\)
是一个 \(n\) 级阵，
其的 \((i, j)\)-元
\[
\begin{aligned}
  [\operatorname{adj} {(A)}]_{i,j} = (-1)^{j+i} \det {(A(j|i))}.
\end{aligned}
\]
对任何方阵 \(A\)，
\[
\begin{aligned}
  \operatorname{adj} {(A)}\, A
  = \det {(A)}\, I
  = A \operatorname{adj} {(A)}.
\end{aligned}
\]

::: theorem
设 \(A\) 是 \(n\) 级阵。
则 \(\operatorname{adj} {(A^{\mathrm{T}})}
  = (\operatorname{adj} {(A)})^{\mathrm{T}}\)。
:::

::: proof
注意，
\(A^{\mathrm{T}} (j|i) = (A (i|j))^{\mathrm{T}}\)，
故
\[
\begin{aligned}
  [\operatorname{adj} {(A^{\mathrm{T}})}]_{i,j}
  = {} &
  (-1)^{j+i} \det {(A^{\mathrm{T}} (j|i))}
  \\
  = {} &
  (-1)^{j+i} \det {((A (i|j))^{\mathrm{T}})}
  \\
  = {} &
  (-1)^{i+j} \det {(A (i|j))}
  \\
  = {} &
  [\operatorname{adj} {(A)}]_{j,i}
  \\
  = {} &
  [(\operatorname{adj} {(A)})^{\mathrm{T}}]_{i,j}.
\end{aligned}
\]
:::

不难看出，若 \(B\) 是 \(n\) 级阵，且 \(c\) 是数，则
\(\det {(cB)} = c^n \det {(B)}\)。

::: theorem
设 \(A\) 是 \(n\) 级阵。
设 \(c\) 是数。
则 \(\operatorname{adj} {(cA)}
  = c^{n-1} \operatorname{adj} {(A)}\)。
:::

::: proof
注意，
\((cA) (j|i) = c (A (j|i))\)，
且 \(A (j|i)\) 是 \(n-1\) 级阵，
故
\[
\begin{aligned}
  [\operatorname{adj} {(cA)}]_{i,j}
  = {} &
  (-1)^{j+i} \det {((cA) (j|i))}
  \\
  = {} &
  (-1)^{j+i} \det {(c (A (j|i)))}
  \\
  = {} &
  (-1)^{j+i} c^{n-1} \det {(A (j|i))}
  \\
  = {} &
  c^{n-1} (-1)^{j+i} \det {(A (j|i))}
  \\
  = {} &
  c^{n-1}\, [\operatorname{adj} {(A)}]_{i,j}
  \\
  = {} &
  [c^{n-1} \operatorname{adj} {(A)}]_{i,j}.
\end{aligned}
\]
:::

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 2\)）。
则
\(\det {(\operatorname{adj} {(A)})} = (\det {(A)})^{n-1}\)。
:::

::: proof
注意，
\[
\begin{aligned}
  \det {(A)} \det {(\operatorname{adj} {(A)})}
  = {} &
  \det {(A \operatorname{adj} {(A)})}
  \\
  = {} &
  \det {(\det {(A)}\, I)}
  \\
  = {} &
  (\det {(A)})^n \det {(I)}
  \\
  = {} &
  (\det {(A)})^n
  \\
  = {} &
  \det {(A)}\, (\det {(A)})^{n-1}.
\end{aligned}
\]
若 \(\det {(A)} \neq 0\)，
我们可在等式的 \(2\) 边消去它，
得到结论。

若 \(A = 0\)，则 \(\operatorname{adj} {(A)} = 0\)，
故 \(\det {(\operatorname{adj} {(A)})} = 0\)。

若 \(A \neq 0\)，且 \(\det {(A)} = 0\)，
我们用反证法说明
\(\det {(\operatorname{adj} {(A)})} = 0\)。
反设
\(\det {(\operatorname{adj} {(A)})} \neq 0\)。
则
\[
\begin{aligned}
  \operatorname{adj} {(A)}\, A
  = \det {(A)}\, I
  = 0
  = \operatorname{adj} {(A)}\, 0.
\end{aligned}
\]
因为
\(\det {(\operatorname{adj} {(A)})} \neq 0\)，
由消去律，\(A = 0\)。
这是矛盾。
:::
