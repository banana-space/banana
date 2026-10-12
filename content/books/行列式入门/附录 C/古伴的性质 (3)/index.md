---
title: 古伴的性质 (3)
---

本节，我们学习古伴的 \(2\) 个性质。

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 2\)）。
则
\(\operatorname{adj} {(\operatorname{adj} {(A)})}
  = (\det {(A)})^{n-2}\,A\)。
:::

::: proof
设 \(n = 2\)。
不难算出，\(2\) 级阵
\(A =
    \begin{bmatrix}
      a & b \\
      c & d \\
    \end{bmatrix}
  \)
的古伴是
\(
    \begin{bmatrix}
      d  & -b \\
      -c & a  \\
    \end{bmatrix}
  \)。
则
\(
    \begin{bmatrix}
      d  & -b \\
      -c & a  \\
    \end{bmatrix}
  \)
的古伴是
\(
    \begin{bmatrix}
      a     & -(-b) \\
      -(-c) & d     \\
    \end{bmatrix}
  \)，
即 \(A\)。
注意，
\((\det {(A)})^{2-2} A = 1 A = A\)。

下设 \(n > 2\)。
一方面，
\[
\begin{aligned}
  \operatorname{adj} {(A)}
  \operatorname{adj} {(\operatorname{adj} {(A)})}
  = \det {(\operatorname{adj} {(A)})}\, I_n
  = (\det {(A)})^{n-1}\, I_n;
\end{aligned}
\]
另一方面，
\[
\begin{aligned}
  \operatorname{adj} {(A)}\,
  ((\det {(A)})^{n-2}\, A)
  = {} &
  (\det {(A)})^{n-2}\,
  (\operatorname{adj} {(A)} A)
  \\
  = {} &
  (\det {(A)})^{n-2}\, (\det {(A)}\,I_n)
  \\
  = {} &
  (\det {(A)})^{n-1}\, I_n.
\end{aligned}
\]
故
\[
\begin{aligned}
  \operatorname{adj} {(A)}
  \operatorname{adj} {(\operatorname{adj} {(A)})}
  =
  \operatorname{adj} {(A)}\,
  ((\det {(A)})^{n-2} A).
\end{aligned}
\]
若 \(\det {(A)} \neq 0\)，
则 \(\det {(\operatorname{adj} {(A)})}
  = (\det {(A)})^{n-1} \neq 0\)。
由消去律，
我们可在等式的 \(2\) 边消去 \(\operatorname{adj} {(A)}\)，
得到结论。

若 \(\det {(A)} = 0\)，
由上节的结论，\(\operatorname{adj} {(A)}\) 的
每个 \(n-1\) 级子阵的行列式都是 \(0\)。
故 \(\operatorname{adj} {(\operatorname{adj} {(A)})}
  = 0 = 0A = (\det {(A)})^{n-2}\,A\)。
:::

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
注意，
\[
\begin{aligned}
  (BA) \operatorname{adj} {(BA)}
  = {} &
  \det {(BA)}\, I
  \\
  = {} &
  (\det {(B)} \det {(A)})\, I
  \\
  = {} &
  (\det {(A)} \det {(B)})\, I
  \\
  = {} &
  \det {(A)}\, (\det {(B)}\, I)
  \\
  = {} &
  \det {(A)}\, (B \operatorname{adj} {(B)})
  \\
  = {} &
  B (\det {(A)} \operatorname{adj} {(B)})
  \\
  = {} &
  B (\det {(A)}\, (I \operatorname{adj} {(B)}))
  \\
  = {} &
  B ((\det {(A)}\, I) \operatorname{adj} {(B)})
  \\
  = {} &
  B ((A \operatorname{adj} {(A)})\, \operatorname{adj} {(B)})
  \\
  = {} &
  B (A\, (\operatorname{adj} {(A)} \operatorname{adj} {(B)}))
  \\
  = {} &
  (B A)\, (\operatorname{adj} {(A)} \operatorname{adj} {(B)}).
\end{aligned}
\]
若 \(\det {(BA)} \neq 0\)，
由消去律，得到结论。

若 \(\det {(BA)} = 0\)，我们这么作。
由阵的积的定义，
\[
\begin{aligned}
  [\operatorname{adj} {(A)} \operatorname{adj} {(B)}]_{i,j}
  = {} &
  \sum_{u = 1}^{n}
  {[\operatorname{adj} {(A)}]_{i,u}
  [\operatorname{adj} {(B)}]_{u,j}}
  \\
  = {} &
  \sum_{u = 1}^{n}
  {(-1)^{u+i} \det {(A(u|i))}\,
  (-1)^{j+u} \det {(B(j|u))}}
  \\
  = {} &
  \sum_{u = 1}^{n}
  {(-1)^{u+i} (-1)^{j+u}
  \det {(A(u|i))} \det {(B(j|u))}}
  \\
  = {} &
  \sum_{u = 1}^{n}
  {(-1)^{j+i} \det {(B(j|u))} \det {(A(u|i))}}
  \\
  = {} &
  (-1)^{j+i}
  \sum_{u = 1}^{n}
  {\det {(B(j|u))} \det {(A(u|i))}}
  \\
  = {} &
  (-1)^{j+i}
  \det {((BA)(j|i))}
  \\
  = {} &
  [\operatorname{adj} {(BA)}]_{i,j}.
\end{aligned}
\]
这里，我们用了 Binet–Cauchy 公式的推广。
:::
