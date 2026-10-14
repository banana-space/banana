---
title: Pfaff 式
aliases: [Pfaffian]
categories: [线性代数]
navboxes: [线性代数]
---

在[[线性代数]]中，
**Pfaff 式**是一种对[[交错阵]]定义的[[函数]]。
给定交错阵 $A$，其 Pfaff 式 $\operatorname{pf} (A)$ 是个[[标量]]，
其平方是 $A$ 的[[行列式]]：$\operatorname{pf} (A)^2 = \det (A)$。

## 定义

::: definition [Pfaff 式]
设 $R$ 是[[交换环]]，
$n$ 是[[自然数]]，
$A = (a_{i, j})$ 是 $R$ 上的 $n \times n$ [[交错阵]]，
即满足 $a_{i, i} = 0$，且 $a_{i, j} + a_{j, i} = 0$。

则 $A$ 的**Pfaff 式**定义为
\[
\operatorname{pf} (A) =
\begin{dcases}
  1,
  & n = 0,    \\
  0,
  & n = 1,    \\
  \sum_{j = 2}^{n}
  {(-1)^{j} a_{1,j}
  \operatorname{pf} (A({1,j}|{1,j}))},
  & n \geq 2,
\end{dcases}
\]
其中，$A({1,j}|{1,j})$ 是删去 $A$ 的第 $1$、$j$ 行
与第 $1$、$j$ 列后，
其余元素按原次序作成的 $(n - 2) \times (n - 2)$ 矩阵。
:::

## 性质

以下固定交换环 $R$。

我们可直接地以[[数学归纳法]]证 @thm:komenco
到 @thm:fino：

::: theorem {@thm:komenco}
奇数阶交错阵的 Pfaff 式为 $0$。
:::

::: theorem
设 $A$ 是 $2m$ 阶交错阵。
设 $x \in R$。
则 $\operatorname{pf} (x A) = x^m \operatorname{pf} (A)$。
特别地，$A^{\mathrm{t}} = (-1) A$ 的 Pfaff 式是
$(-1)^m \operatorname{pf} (A)$，
其中，$A^{\mathrm{t}}$ 是 $A$ 的[[转置]]。
:::

::: theorem
设 $A = (a_{i,j})$ 是 $2m$ 阶交错阵。
则
\[
\operatorname{pf} (A)
= \sum_{\substack{
    \sigma \in \mathfrak{S}_{2m} \\
    \sigma(2i-1) < \sigma(2i),\, i = 1, \dots, m\\
    \sigma(1) < \sigma(3) < \dots < \sigma(2m-1)
  }}
(-1)^\sigma
\prod_{1 \leq \ell \leq m} a_{\sigma(2\ell-1), \sigma(2\ell)},
\]
其中，
$\mathfrak{S}_{2m}$ 是 $2m$ 元[[置换群]]，
且 $(-1)^\sigma$ 是 $\sigma$ 的符号
（偶置换为 $1$；奇置换为 $-1$）。
:::

::: remark
可以证明，
\[
\sum_{\tau \in \mathfrak{S}_{2m}}
(-1)^\tau
\prod_{1 \leq \ell \leq m} a_{\tau(2\ell-1), \tau(2\ell)}
=
2^m m! \sum_{\substack{
    \sigma \in \mathfrak{S}_{2m} \\
    \sigma(2i-1) < \sigma(2i),\, i = 1, \dots, m\\
    \sigma(1) < \sigma(3) < \dots < \sigma(2m-1)
  }}
(-1)^\sigma
\prod_{1 \leq \ell \leq m} a_{\sigma(2\ell-1), \sigma(2\ell)}.
\]
于是，若 $2^m m!$ 是 $R$ 的可逆元，
则
\[
\operatorname{pf} (A)
=
\frac{1}{2^m m!}
\sum_{\tau \in \mathfrak{S}_{2m}}
(-1)^\tau
\prod_{1 \leq \ell \leq m} a_{\tau(2\ell-1), \tau(2\ell)}.
\]
:::

::: theorem
设 $A$、$D$ 是 $n$、$t$ 阶交错阵。
则
\[
\operatorname{pf}
\begin{bmatrix}
  A & 0 \\
  0 & D
\end{bmatrix}
= \operatorname{pf} (A) \operatorname{pf} (D).
\]
:::

::: theorem
设 $A$ 是 $m$ 阶阵。
则
\[
\operatorname{pf}
  \begin{bmatrix}
    0               & A \\
    -A^{\mathrm{t}} & 0 \\
  \end{bmatrix}
= (-1)^{m(m-1)/2} \det (A).
\]
:::

::: theorem
设
\[
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
\]
则 $\operatorname{pf} (B) = b_1 b_2 \dots b_m$，
且 $\det (B) = b_1^2 b_2^2 \dots b_m^2
  = (\operatorname{pf} (B))^2$。
:::

::: theorem
设 $A = (a_{i,j})$、$B = (b_{i,j})$、$C = (c_{i,j})$ 是三个 $n$ 阶交错阵。
设 $q$ 是不超过 $n$ 的正整数。
设 $s$、$t$ 是数。
设 $a_{i,j} = b_{i,j} = c_{i,j}$，
对任何不等于 $q$，且不超过 $n$ 的正整数 $i$、$j$；
设 $c_{i,j} = s a_{i,j} + t b_{i,j}$，
若 $i = q$ 或 $j = q$。
则
\[
\operatorname{pf} (C)
= s \operatorname{pf} (A)
+ t \operatorname{pf} (B).
\]
由此（取 $B = A$，且 $t = 0$），
若我们乘交错阵 $A$ 的列 $q$ 的元与行 $q$ 的元以 $s$，
得交错阵 $D$，
则 $D$ 的 Pfaff 式等于 $A$ 的 Pfaff 式的 $s$ 倍。
:::

::: theorem {@thm:fino}
设 $A$ 是 $n$ 阶交错阵。
设 $p$、$q$ 是不超过 $n$ 的正整数，且 $p \neq q$。
设交换 $A$ 的列 $p$、$q$，且不改变其他的列，得阵 $B$。
设交换 $B$ 的行 $p$、$q$，且不改变其他的行，得阵 $C$。
则 $C$ 是交错阵，且
$C$ 的 Pfaff 式等于 $A$ 的 Pfaff 式的相反数。
:::

由上面的定理，我们可证：

::: theorem
设 $A$ 是 $n$ 阶交错阵。
设 $p$、$q$ 是不超过 $n$ 的正整数，且 $p \neq q$。
设 $A$ 的列 $p$、$q$ 相等
（于是，$A$ 的行 $p$、$q$ 也相等）。
则 $A$ 的 Pfaff 式为 $0$。
:::

::: theorem
设 $A$ 是 $n$ 阶交错阵。
加 $A$ 的列 $p$ 的 $s$ 倍于列 $q$
（$p \neq q$），
且不改变其他的列，得 $n$ 阶阵 $B$。
加 $B$ 的行 $p$ 的 $s$ 倍于行 $q$，
且不改变其他的行，得 $n$ 阶阵 $C$。
则 $C$ 是交错阵，且
$C$ 的 Pfaff 式等于 $A$ 的 Pfaff 式。
:::

::: theorem
设 $A$ 是 $n$ 阶交错阵。
则
\[
\det (A) = (\operatorname{pf} (A))^2.
\]
:::

::: theorem
设 $A$ 是 $\ell$ 级交错阵。
设 $P$ 是 $n \times \ell$ 阵。

(1) 若 $n > \ell$，
    则 $\operatorname{pf} (P A P^{\mathrm{t}}) = 0$。

(2) 若 $n \leq \ell$，
    则
    \[
    \operatorname{pf} (P A P^{\mathrm{t}})
    =
    \sum_{1 \leq j_1 < j_2 < \dots < j_{n} \leq \ell}
    {\det \left(
        P\binom{1,2,\dots,n}{j_1,j_2,\dots,j_{n}}
        \right)
      \operatorname{pf} \left(
        A\binom{j_1,j_2,\dots,j_{n}}{j_1,j_2,\dots,j_{n}}
        \right)},
    \]
    其中，$P\binom{i_1,\dots,i_k}{j_1,\dots,j_k}$
    是由 $P$ 的行 $i_1$、$\dots$、$i_k$
    与列 $j_1$、$\dots$、$j_k$
    的交叉处的元按原次序作成的 $k \times k$ 矩阵（子矩阵）。

特别地，若 $n = \ell$，
则因满足条件
$1 \leq j_1 < j_2 < \dots < j_{n} \leq \ell$
的
$j_1$、$j_2$、$\dots$、$j_{n}$，
是，且只能是，
$1$、$2$、$\dots$、$n$，
\[
\begin{aligned}
  \operatorname{pf} (P A P^{\mathrm{t}})
  = {} &
  \det \left(
    P\binom{1,2,\dots,n}{1,2,\dots,n}
    \right)
  \operatorname{pf} \left(
    A\binom{1,2,\dots,n}{1,2,\dots,n}
    \right)
  \\
  = {} &
  \det (P) \operatorname{pf} (A).
\end{aligned}
\]
:::

::: theorem
设 $A = (a_{i,j})$ 是 $n$ 阶交错阵（$n \geq 2$）。
设 $i$ 是不超过 $n$ 的正整数。
则
\[
\operatorname{pf} (A)
=
\sum_{\substack{1 \leq j \leq n \\j \neq i}}
{
(-1)^{i-1+j+\rho(i,j)}\, a_{i,j}
\operatorname{pf} (A({i,j}|{i,j}))},
\]
其中，
\[
\rho(i, j)
= \begin{cases}
    0, & i < j;    \\
    1, & i \geq j.
  \end{cases}
\]
类似地，若 $j$ 是不超过 $n$ 的正整数，则
\[
\operatorname{pf} (A)
=
\sum_{\substack{1 \leq i \leq n \\i \neq j}}
{
(-1)^{i-1+j+\rho(i,j)}\, a_{i,j}
\operatorname{pf} (A({i,j}|{i,j}))}.
\]
:::

利用 Pfaff 式，我们可具体地写交错阵 $A$ 的
古典伴随阵 $\operatorname{adj} (A)$ 的元
（对 $n$ 阶阵 $C$，$\operatorname{adj} (C)$ 是 $n$ 阶阵
$(b_{i,j})$，
其中，$b_{i,j} = (-1)^{j+i} \det (C(j|i))$）。

::: theorem
设 $A$ 是 $2m$ 阶交错阵。
则 $A$ 的古典伴随阵
$\operatorname{adj} (A) = (b_{i,j})$
是 $2m$ 阶交错阵，
且
\[
b_{i,j}
= \begin{cases}
    (-1)^{\rho(i, j)}
    (-1)^{i+j}
    \operatorname{pf} (A({i,j}|{i,j}))
    \operatorname{pf} (A),
     & i \neq j; \\
    0,
     & i = j.
  \end{cases}
\]
值得提，$\operatorname{adj} (A)$ 的 Pfaff 式
\[
\operatorname{pf} (\operatorname{adj} (A))
= (-1)^m\, (\operatorname{pf} (A))^{2m-1}.
\]
:::

::: theorem
设 $A$ 是 $2m-1$ 阶交错阵。
则 $A$ 的古典伴随阵
$\operatorname{adj} (A) = (b_{i,j})$
是 $2m-1$ 阶对称阵
（即满足 $b_{i,j} = b_{j,i}$），
且
\[
b_{i,j}
= (-1)^i \operatorname{pf} (A(i|i))
\cdot
(-1)^j \operatorname{pf} (A(j|j)).
\]
值得提，
$\operatorname{adj} (A) = \alpha \alpha^{\mathrm{t}}$，
其中，$\alpha$ 是 $(2m-1) \times 1$ 列向量，
且 $\alpha_i = (-1)^i \operatorname{pf} (A(i|i))$。
:::

## 参考文献

- [行列式入门](/books/行列式入门/)

```terms
Pfaff 式:
  en: pfaffian
  eo: pfafo
```
