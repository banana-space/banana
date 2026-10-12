---
title: '行列式为 \(0\) 的阵的性质'
---

本节，我们讨论行列式为 \(0\) 的阵的几个性质。

::: theorem
设 \(A\) 是一个 \(n\) 级阵。
设 \(\det {(A)} = 0\)。
则存在不超过 \(n\) 的正整数 \(i\)，使

```math {@eq:NonzeroDet1}
|[A]_{i,i}| \leqslant
\sum_{\substack{1 \leqslant u \leqslant n \\
u \neq i}} {|[A]_{i,u}|}.
```

:::

::: proof
因为 \(\det {(A)} = 0\)，
故有非零的 \(n \times 1\) 阵 \(X\)，
使 \(A X = 0\)
（见第 1 章，节 *23*，
或第 1 章，节 *25*，
或“REF 阵、线性方程组、秩”）。

考虑不全为 \(0\) 的非负实数
\(|[X]_{1,1}|\)、\(|[X]_{2,1}|\)、\(\dots\)、\(|[X]_{n,1}|\)。
则有不超过 \(n\) 的正整数 \(i\)，
使对任何不超过 \(n\) 的正整数 \(u\)，
\(|[X]_{i,1}| \geqslant |[X]_{u,1}|\)，
且 \(|[X]_{i,1}| > 0\)。
则
\[
\begin{aligned}
  0
  = {} &
  [0]_{i,1}
  \\
  = {} &
  [A X]_{i,1}
  \\
  = {} &
  \sum_{1 \leqslant u \leqslant n}
  {[A]_{i,u} [X]_{u,1}}
  \\
  = {} &
  \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq i}}
  {[A]_{i,u} [X]_{u,1}}
  + [A]_{i,i} [X]_{i,1}.
\end{aligned}
\]
则
\[
\begin{aligned}
  |[A]_{i,i}|\,|[X]_{i,1}|
  = {} &
  |{[A]_{i,i} [X]_{i,1}}|
  \\
  = {} &
  |{-[A]_{i,i} [X]_{i,1}}|
  \\
  = {} &
  \Bigg|
  \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq i}}
  {[A]_{i,u} [X]_{u,1}}
  \Bigg|
  \\
  \leqslant {} &
  \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq i}}
  {|{[A]_{i,u} [X]_{u,1}}|}
  \\
  = {} &
  \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq i}}
  {|[A]_{i,u}|\, |[X]_{u,1}|}
  \\
  \leqslant {} &
  \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq i}}
  {|[A]_{i,u}|\, |[X]_{i,1}|}
  \\
  = {} &
  \Bigg(
    \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq i}}
    {|[A]_{i,u}|}
  \Bigg) |[X]_{i,1}|.
\end{aligned}
\]
因为 \(|[X]_{i,1}| > 0\)，
故式 @eq:NonzeroDet1 是对的。
:::

不过，此事反过来不一定是对的。

::: example
设 \(A =
    \begin{bmatrix}
      0  & 1 \\
      -1 & 0 \\
  \end{bmatrix}\)
是一个 \(2\) 级阵。
取 \(i = 1\) 或 \(i = 2\)，得
\[
\begin{aligned}
  |[A]_{i,i}|
  = 0
  \leqslant 1
  = \sum_{\substack{1 \leqslant u \leqslant 2 \\ u \neq i}} {|[A]_{i,u}|}.
\end{aligned}
\]
可是，\(\det {(A)} = 1 \neq 0\)。
:::

::: theorem
设 \(A\) 是一个 \(n\) 级阵（\(n \geqslant 2\)）。
设 \(\det {(A)} = 0\)。
则存在不超过 \(n\)，且不等的正整数 \(j\)、\(k\)，使

```math {@eq:NonzeroDet2}
|[A]_{j,j}|\,|[A]_{k,k}| \leqslant
\Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\
    p \neq j}} {|[A]_{j,p}|}
\Bigg)
\Bigg(
    \sum_{\substack{1 \leqslant q \leqslant n \\
    q \neq k}} {|[A]_{k,q}|}
\Bigg).
```

:::

::: proof
因为 \(\det {(A)} = 0\)，
故有非零的 \(n \times 1\) 阵 \(X\)，
使 \(A X = 0\)
（见第 1 章，节 *23*，
或第 1 章，节 *25*，
或“REF 阵、线性方程组、秩”）。

考虑不全为 \(0\) 的非负实数
\(|[X]_{1,1}|\)、\(|[X]_{2,1}|\)、\(\dots\)、\(|[X]_{n,1}|\)。
则有不超过 \(n\)，且不等的正整数 \(j\)、\(k\)，
使对任何不超过 \(n\)，且不等于 \(j\) 的正整数 \(p\)，
\(|[X]_{j,1}| \geqslant |[X]_{k,1}| \geqslant |[X]_{p,1}|\)，
且 \(|[X]_{j,1}| > 0\)。

注意，对任何不超过 \(n\) 的正整数 \(u\)，
\[
\begin{aligned}
  0
  = {} &
  [0]_{u,1}
  \\
  = {} &
  [A X]_{u,1}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant n}
  {[A]_{u,v} [X]_{v,1}}
  \\
  = {} &
  \sum_{\substack{1 \leqslant v \leqslant n \\ v \neq u}}
  {[A]_{u,v} [X]_{v,1}}
  + [A]_{u,u} [X]_{u,1}.
\end{aligned}
\]
故
\[
\begin{aligned}
  -[A]_{u,u} [X]_{u,1}
  = \sum_{\substack{1 \leqslant v \leqslant n \\ v \neq u}}
  {[A]_{u,v} [X]_{v,1}}.
\end{aligned}
\]
则
\[
\begin{aligned}
  |[A]_{u,u}|\, |[X]_{u,1}|
  = {} &
  |{[A]_{u,u} [X]_{u,1}}|
  \\
  = {} &
  |{-[A]_{u,u} [X]_{u,1}}|
  \\
  = {} &
  \Bigg|
  \sum_{\substack{1 \leqslant v \leqslant n \\ v \neq u}}
  {[A]_{u,v} [X]_{v,1}}
  \Bigg|
  \\
  \leqslant {} &
  \sum_{\substack{1 \leqslant v \leqslant n \\ v \neq u}}
  {|{[A]_{u,v} [X]_{v,1}}|}
  \\
  = {} &
  \sum_{\substack{1 \leqslant v \leqslant n \\ v \neq u}}
  {|{[A]_{u,v}|\, |[X]_{v,1}}|}.
\end{aligned}
\]
则
（取 \(u = j\)，
并注意，对任何不超过 \(n\)，且不等于 \(j\) 的正整数 \(p\)，
\(|[X]_{p,1}| \leqslant |[X]_{k,1}|\)）
\[
\begin{aligned}
  |[A]_{j,j}|\, |[X]_{j,1}|
  \leqslant {} &
  \sum_{\substack{1 \leqslant p \leqslant n \\ p \neq j}}
  {|{[A]_{j,p}|\, |[X]_{p,1}}|}
  \\
  \leqslant {} &
  \sum_{\substack{1 \leqslant p \leqslant n \\ p \neq j}}
  {|{[A]_{j,p}|\, |[X]_{k,1}}|}
  \\
  = {} &
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\ p \neq j}}
    {|{[A]_{j,p}|}}
  \Bigg)
  |[X]_{k,1}|.
\end{aligned}
\]
因为 \(|[X]_{j,1}| > 0\)，
\[
\begin{aligned}
  |[A]_{j,j}|
  \leqslant
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\ p \neq j}}
    {|{[A]_{j,p}|}}
  \Bigg)
  |[X]_{k,1}|\, |[X]_{j,1}|^{-1}.
\end{aligned}
\]
另一方面
（取 \(u = k\)，
并注意，对任何不超过 \(n\) 的正整数 \(q\)，
\(|[X]_{q,1}| \leqslant |[X]_{j,1}|\)），
\[
\begin{aligned}
  |[A]_{k,k}|\, |[X]_{k,1}|
  \leqslant {} &
  \sum_{\substack{1 \leqslant q \leqslant n \\ q \neq k}}
  {|{[A]_{k,q}|\, |[X]_{q,1}}|}
  \\
  \leqslant {} &
  \sum_{\substack{1 \leqslant q \leqslant n \\ q \neq k}}
  {|{[A]_{k,q}|\, |[X]_{j,1}}|}
  \\
  = {} &
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant n \\ q \neq k}}
    {|{[A]_{k,q}|}}
  \Bigg)
  |[X]_{j,1}|.
\end{aligned}
\]
故
\[
\begin{aligned}
  (|[A]_{j,j}|\, |[A]_{k,k}|)\,
  |[X]_{k,1}|
  \leqslant
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\ p \neq j}}
    {|{[A]_{j,p}|}}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant n \\ q \neq k}}
    {|{[A]_{k,q}|}}
  \Bigg)
  |[X]_{k,1}|.
\end{aligned}
\]

若 \(|[X]_{k,1}| > 0\)，
则式 @eq:NonzeroDet2 当然是对的。
若 \(|[X]_{k,1}| = 0\)，
则
\[
\begin{aligned}
  0 \leqslant
  |[A]_{j,j}| \leqslant
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\ p \neq j}}
    {|{[A]_{j,p}|}}
  \Bigg)\,
  0\, |[X]_{j,1}|^{-1} = 0.
\end{aligned}
\]
故 \(|[A]_{j,j}| = 0\)。
则式 @eq:NonzeroDet2 的左边是 \(0\)。
:::

此事反过来不一定是对的：
考虑上个例的 \(A\) 即可。

我们说，若存在不超过 \(n\)，且不等的正整数 \(j\)、\(k\)，
使式 @eq:NonzeroDet2 是对的，
则存在不超过 \(n\) 的正整数 \(i\)，
使式 @eq:NonzeroDet1 是对的。
用反证法，不难看出，若式 @eq:NonzeroDet2 是对的，
则
\[
\begin{aligned}
  |[A]_{j,j}| >
  \sum_{\substack{1 \leqslant p \leqslant n \\
  p \neq j}} {|[A]_{j,p}|}
\end{aligned}
\]
与
\[
\begin{aligned}
  |[A]_{k,k}| >
  \sum_{\substack{1 \leqslant q \leqslant n \\
  q \neq k}} {|[A]_{k,q}|}
\end{aligned}
\]
不能全是对的。
故
\[
\begin{aligned}
  |[A]_{j,j}| \leqslant
  \sum_{\substack{1 \leqslant p \leqslant n \\
  p \neq j}} {|[A]_{j,p}|}
\end{aligned}
\]
与
\[
\begin{aligned}
  |[A]_{k,k}| \leqslant
  \sum_{\substack{1 \leqslant q \leqslant n \\
  q \neq k}} {|[A]_{k,q}|}
\end{aligned}
\]
的至少一个是对的。
取 \(i\) 为 \(j\) 或 \(k\) 即可。

或许，您会想：

> 设 \(A\) 是一个 \(n\) 级阵（\(n \geqslant 3\)）。
> 设 \(\det {(A)} = 0\)。
> 则存在不超过 \(n\)，
> 且互不相同的正整数 \(j\)、\(k\)、\(\ell\)，使
> \[
> \begin{aligned}
>   &
>   |[A]_{j,j}|\,|[A]_{k,k}|\, |[A]_{\ell,\ell}|
>   \\
>   \leqslant {} &
>   \Bigg(
>     \sum_{\substack{1 \leqslant p \leqslant n \\
>     p \neq j}} {|[A]_{j,p}|}
>   \Bigg)
>   \Bigg(
>     \sum_{\substack{1 \leqslant q \leqslant n \\
>     q \neq k}} {|[A]_{k,q}|}
>   \Bigg)
>   \Bigg(
>     \sum_{\substack{1 \leqslant r \leqslant n \\
>     r \neq \ell}} {|[A]_{\ell,r}|}
>   \Bigg).
> \end{aligned}
> \]

不过，这不是对的。

::: example
设 \(A =
    \begin{bmatrix}
      1 & 1 & 1 \\
      1 & 1 & 1 \\
      1 & 1 & 9 \\
  \end{bmatrix}\)
是一个 \(3\) 级阵。
不难算出，\(\det {(A)} = 0\)。
可是，
对任何不超过 \(3\)，
且互不相同的正整数 \(j\)、\(k\)、\(\ell\)，
\[
\begin{aligned}
  |[A]_{j,j}|\,|[A]_{k,k}|\, |[A]_{\ell,\ell}|
  = {} &
  |[A]_{1,1}|\,|[A]_{2,2}|\, |[A]_{3,3}|
  \\
  = {} &
  1 \cdot 1 \cdot 9
  \\
  > {} &
  2 \cdot 2 \cdot 2
  \\
  = {} &
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant 3 \\
    p \neq 1}} {|[A]_{1,p}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant 3 \\
    q \neq 2}} {|[A]_{2,q}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant r \leqslant 3 \\
    r \neq 3}} {|[A]_{3,r}|}
  \Bigg)
  \\
  = {} &
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant 3 \\
    p \neq j}} {|[A]_{j,p}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant 3 \\
    q \neq k}} {|[A]_{k,q}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant r \leqslant 3 \\
    r \neq \ell}} {|[A]_{\ell,r}|}
  \Bigg).
\end{aligned}
\]
:::

最后，注意，一个方阵与它的转置的行列式相等：
若 \(\det {(A)} = 0\)，
则 \(\det {(A^{\mathrm{T}})} = \det {(A)} = 0\)。
应用前 \(2\) 个定理于 \(A^{\mathrm{T}}\)，立得

::: theorem
设 \(A\) 是一个 \(n\) 级阵。
设 \(\det {(A)} = 0\)。
则存在不超过 \(n\) 的正整数 \(i\)，使
\[
\begin{aligned}
  |[A]_{i,i}| \leqslant
  \sum_{\substack{1 \leqslant u \leqslant n \\
  u \neq i}} {|[A]_{u,i}|}.
\end{aligned}
\]
:::

::: theorem
设 \(A\) 是一个 \(n\) 级阵（\(n \geqslant 2\)）。
设 \(\det {(A)} = 0\)。
则存在不超过 \(n\)，且不等的正整数 \(j\)、\(k\)，使
\[
\begin{aligned}
  |[A]_{j,j}|\,|[A]_{k,k}| \leqslant
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\
    p \neq j}} {|[A]_{p,j}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant n \\
    q \neq k}} {|[A]_{q,k}|}
  \Bigg).
\end{aligned}
\]
:::
