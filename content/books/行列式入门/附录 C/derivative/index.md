---
title: derivative
---

<problems>
- 关于 $\mathrm{D} f(c) = q(c)$ 的定理的 (2) 中，$L_i (x)$ 的定义式里的因子 $(x_i - x_j)$ 似乎应为 $(x - x_j)$：按现在的写法 $L_i (x)$ 不依赖 $x$，与证明中的计算及“若 $i \neq v$，则 $L_v (x_i) = 0$”不符。
</problems>

本节，我们讨论整式的 derivative。
这会是有用的工具。

::: definition
设 \(n\) 是非负整数。
设
\[
\begin{aligned}
  f(x) = a_0 x^n + a_1 x^{n-1} + \dots + a_{n-1} x + a_n
  = \sum_{i = 0}^{n} {a_i x^{n-i}}.
\end{aligned}
\]
是整式。
定义它的 **derivative** 为整式
\[
\begin{aligned}
  \mathrm{D} f(x)
  = n a_0 x^{n-1} + (n-1) a_1 x^{n-2} + \dots + 1 a_{n-1}
  = \sum_{i = 0}^{n-1} {(n-i) a_i x^{n-1-i}}.
\end{aligned}
\]
:::

::: example
设 \(f(x) = a x^2 + b x + c\)。
则 \(\mathrm{D} f(x) = 2 a x + b\)。
:::

::: example
设 \(f(x) = c x^i\)（\(i \geqslant 1\)）。
我们可视 \(f(x)\) 为 \(c x^i + 0 x^{i-1} + \dots + 0\)。
则 \(\mathrm{D} f(x)
    = i c x^{i-1} + (i-1) 0 x^{i-2} + \dots + 0
  = i c x^{i-1}\)。

值得提，\(\mathrm{D} (c x^0) = 0\)。
:::

::: theorem
设 \(r\) 是正整数。
设 \(f_1 (x)\)、\(f_2 (x)\)、\(\dots\)、\(f_r (x)\) 是整式。
设 \(c_1\)、\(c_2\)、\(\dots\)、\(c_r\) 是数。
则
\[
\begin{aligned}
  \mathrm{D} \sum_{k = 1}^{r} {c_k f_k (x)}
  = \sum_{k = 1}^{r} {c_k \mathrm{D} f_k (x)}.
\end{aligned}
\]
:::

::: proof
我们设，非负整数 \(n\) 适合，
对每个不超过 \(r\) 的正整数 \(k\)，
\[
\begin{aligned}
  f_k (x)
  = a_{k,0} x^n + a_{k,1} x^{n-1}
  + \dots + a_{k,n-1} x + a_{k,n}.
\end{aligned}
\]
（注意，\(a_{k,0}\) 可以为 \(0\)。）
则
\[
\begin{aligned}
  \mathrm{D} \sum_{k = 1}^{r} {c_k f_k (x)}
  = {} &
  \mathrm{D}
  \sum_{k = 1}^{r}
  c_k
  \sum_{i = 0}^{n}
  a_{k,i} x^{n-i}
  \\
  = {} &
  \mathrm{D}
  \sum_{k = 1}^{r}
  \sum_{i = 0}^{n}
  c_k a_{k,i} x^{n-i}
  \\
  = {} &
  \mathrm{D}
  \sum_{i = 0}^{n}
  \sum_{k = 1}^{r}
  c_k a_{k,i} x^{n-i}
  \\
  = {} &
  \mathrm{D}
  \sum_{i = 0}^{n}
  \left(\sum_{k = 1}^{r} c_k a_{k,i}\right)
  x^{n-i}
  \\
  = {} &
  \sum_{i = 0}^{n-1}
  (n-i) \left(\sum_{k = 1}^{r} c_k a_{k,i}\right)
  x^{n-1-i}
  \\
  = {} &
  \sum_{i = 0}^{n-1}
  \sum_{k = 1}^{r}
  (n-i) c_k a_{k,i} x^{n-1-i}
  \\
  = {} &
  \sum_{k = 1}^{r}
  \sum_{i = 0}^{n-1}
  (n-i) c_k a_{k,i} x^{n-1-i}
  \\
  = {} &
  \sum_{k = 1}^{r}
  c_k
  \sum_{i = 0}^{n-1}
  (n-i) a_{k,i} x^{n-1-i}
  \\
  = {} &
  \sum_{k = 1}^{r}
  c_k
  \mathrm{D} f_k (x).
\end{aligned}
\]
:::

::: theorem
设 \(f(x)\)、\(g(x)\) 是整式。
则
\[
\begin{aligned}
  \mathrm{D} (f(x) g(x))
  = (\mathrm{D} f(x)) g(x) + f(x) (\mathrm{D} g(x)).
\end{aligned}
\]
:::

::: proof
我们设
\[
\begin{aligned}
  f(x) & = a_0 x^n + a_1 x^{n-1} + \dots + a_{n-1} x + a_n, \\
  g(x) & = b_0 x^m + b_1 x^{m-1} + \dots + b_{m-1} x + b_m.
\end{aligned}
\]

我们先证明，对任何非负整数 \(i\)，\(j\)，
与任何数 \(p\)、\(q\)，
\[
\begin{aligned}
  \mathrm{D} (p x^i \cdot q x^j)
  = \mathrm{D} (p x^i) \cdot q x^j
  + p x^i \cdot \mathrm{D} (q x^j).
\end{aligned}
\]
若 \(i = 0 = j\)，则
\[
\begin{aligned}
  \mathrm{D} (p x^i \cdot q x^j)
  = {} &
  \mathrm{D} (p q)
  \\
  = {} &
  0
  \\
  = {} &
  0 \cdot q x^j + p x^i \cdot 0
  \\
  = {} &
  \mathrm{D} (p x^i) \cdot q x^j
  + p x^i \cdot \mathrm{D} (q x^j).
\end{aligned}
\]
若 \(i = 0\)，且 \(j \geqslant 1\)，则
\[
\begin{aligned}
  \mathrm{D} (p x^i \cdot q x^j)
  = {} &
  \mathrm{D} (p q x^j)
  \\
  = {} &
  j p q x^{j-1}
  \\
  = {} &
  0 \cdot q x^j + p x^i \cdot j q x^{j-1}
  \\
  = {} &
  \mathrm{D} (p x^i) \cdot q x^j
  + p x^i \cdot \mathrm{D} (q x^j).
\end{aligned}
\]
若 \(i \geqslant 1\)，且 \(j = 0\)，则
\[
\begin{aligned}
  \mathrm{D} (p x^i \cdot q x^j)
  = {} &
  \mathrm{D} (p q x^i)
  \\
  = {} &
  i p q x^{i-1}
  \\
  = {} &
  i p x^{i-1} \cdot q x^j + p x^i \cdot 0
  \\
  = {} &
  \mathrm{D} (p x^i) \cdot q x^j
  + p x^i \cdot \mathrm{D} (q x^j).
\end{aligned}
\]
若 \(i \geqslant 1\)，且 \(j \geqslant 1\)，则
\[
\begin{aligned}
  \mathrm{D} (p x^i \cdot q x^j)
  = {} &
  \mathrm{D} (p q x^{i+j})
  \\
  = {} &
  (i + j) p q x^{i+j-1}
  \\
  = {} &
  i p q x^{i+j-1} + j p q x^{i+j-1}
  \\
  = {} &
  i p x^{i-1} \cdot q x^j + p x^i \cdot j q x^{j-1}
  \\
  = {} &
  \mathrm{D} (p x^i) \cdot q x^j
  + p x^i \cdot \mathrm{D} (q x^j).
\end{aligned}
\]

由此，且由上个定理，
\[
\begin{aligned}
  \mathrm{D} (f(x) g(x))
  = {} &
  \mathrm{D} \left(
    \left(\sum_{i=0}^{n} {a_i x^{n-i}}\right)
    \left(\sum_{j=0}^{m} {b_j x^{m-j}}\right)
  \right)
  \\
  = {} &
  \mathrm{D} \left(
    \sum_{i=0}^{n} \sum_{j=0}^{m}
    {a_i x^{n-i} \cdot b_j x^{m-j}}
  \right)
  \\
  = {} &
  \sum_{i=0}^{n} \sum_{j=0}^{m}
  {\mathrm{D} (a_i x^{n-i} \cdot b_j x^{m-j})}
  \\
  = {} &
  \sum_{i=0}^{n} \sum_{j=0}^{m}
  {(\mathrm{D} (a_i x^{n-i}) \cdot b_j x^{m-j}
  + a_i x^{n-i} \cdot \mathrm{D} (b_j x^{m-j}))}
  \\
  = {} &
  \sum_{i=0}^{n}
  \left(
    \mathrm{D} (a_i x^{n-i}) \sum_{j=0}^{m} b_j x^{m-j}
    + a_i x^{n-i} \sum_{j=0}^{m} \mathrm{D} (b_j x^{m-j})
  \right)
  \\
  = {} &
  \sum_{i=0}^{n}
  \left(
    \mathrm{D} (a_i x^{n-i}) \sum_{j=0}^{m} b_j x^{m-j}
    + a_i x^{n-i} \mathrm{D} \sum_{j=0}^{m} b_j x^{m-j}
  \right)
  \\
  = {} &
  \sum_{i=0}^{n}
  ( \mathrm{D} (a_i x^{n-i}) g(x)
  + a_i x^{n-i} \mathrm{D} g(x))
  \\
  = {} &
  \left(
    \sum_{i=0}^{n} \mathrm{D} (a_i x^{n-i})
  \right) g(x)
  + \left(
    \sum_{i=0}^{n} a_i x^{n-i}
  \right) \mathrm{D} g(x)
  \\
  = {} &
  \left(\mathrm{D} \sum_{i=0}^{n} a_i x^{n-i}\right)
  g(x)
  + f(x) (\mathrm{D} g(x))
  \\
  = {} &
  (\mathrm{D} f(x)) g(x) + f(x) (\mathrm{D} g(x)).
\end{aligned}
\]
:::

::: theorem
设 \(r\) 是正整数。
设 \(f_1 (x)\)、\(f_2 (x)\)、\(\dots\)、\(f_r (x)\) 是整式。
则
\[
\begin{aligned}
  \mathrm{D} (f_1 (x) f_2 (x) \dots f_r (x))
  = {} &
  (\mathrm{D} f_1 (x)) f_2 (x) \dots f_r (x)
  + f_1 (x) (\mathrm{D} f_2 (x)) \dots f_r (x)
  \\
  &
  \quad
  + \dots
  + f_1 (x) f_2 (x) \dots (\mathrm{D} f_r (x)).
\end{aligned}
\]
特别地，若 \(f_1 (x)\)、\(f_2 (x)\)、\(\dots\)、\(f_r (x)\)
都是 \(f(x)\)，
则
\[
\begin{aligned}
  \mathrm{D} ((f(x))^r)
  = r (f(x))^{r-1} \mathrm{D} f(x).
\end{aligned}
\]
:::

::: proof
作命题 \(P(r)\)：
对任何整式
\(f_1 (x)\)、\(f_2 (x)\)、\(\dots\)、\(f_r (x)\)，
\[
\begin{aligned}
  \mathrm{D} (f_1 (x) f_2 (x) \dots f_r (x))
  = {} &
  (\mathrm{D} f_1 (x)) f_2 (x) \dots f_r (x)
  + f_1 (x) (\mathrm{D} f_2 (x)) \dots f_r (x)
  \\
  &
  \quad
  + \dots
  + f_1 (x) f_2 (x) \dots (\mathrm{D} f_r (x)).
\end{aligned}
\]
我们用数学归纳法证明，
对任何正整数 \(r\)，\(P(r)\) 是对的。

\(P(1)\) 是对的，因为左边与右边都是 \(D f_1 (x)\)。

设 \(P(r)\) 是对的。
我们由此证明，\(P(r+1)\) 是对的。
注意，由假定，
\[
\begin{aligned}
  &
  \mathrm{D} (f_1 (x) f_2 (x) \dots f_{r+1} (x))
  \\
  = {} &
  \mathrm{D} ((f_1 (x) f_2 (x) \dots f_r (x)) f_{r+1} (x))
  \\
  = {} &
  (\mathrm{D} (f_1 (x) f_2 (x) \dots f_r (x))) f_{r+1} (x)
  + (f_1 (x) f_2 (x) \dots f_r (x)) (\mathrm{D} f_{r+1} (x))
  \\
  = {} &
  ((\mathrm{D} f_1 (x)) f_2 (x) \dots f_r (x)
    + f_1 (x) (\mathrm{D} f_2 (x)) \dots f_r (x)
    \\
    &
    \quad
    + \dots
  + f_1 (x) f_2 (x) \dots (\mathrm{D} f_r (x))) f_{r+1} (x)
  + (f_1 (x) f_2 (x) \dots f_r (x)) (\mathrm{D} f_{r+1} (x))
  \\
  = {} &
  (\mathrm{D} f_1 (x)) f_2 (x) \dots f_r (x) f_{r+1} (x)
  + f_1 (x) (\mathrm{D} f_2 (x)) \dots f_r (x) f_{r+1} (x)
  \\
  &
  \quad
  + \dots
  + f_1 (x) f_2 (x) \dots (\mathrm{D} f_r (x)) f_{r+1} (x)
  + f_1 (x) f_2 (x) \dots f_r (x) (\mathrm{D} f_{r+1} (x)).
\end{aligned}
\]
所以，\(P(r+1)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: theorem
(1) 设 \(f(x) = (x - c) q(x)\)。
    则 \(\mathrm{D} f(c) = q(c)\)。

(2) 设 \(f(x) = a_0 (x - x_1) (x - x_2) \dots (x - x_n)\)。
    对不超过 \(n\) 的正整数 \(i\)，记
    \[
    \begin{aligned}
      L_i (x) = \prod_{\substack{1 \leqslant j \leqslant n \\ j \neq i}}
      {(x_i - x_j)}.
    \end{aligned}
    \]
    则
    \[
    \begin{aligned}
      \mathrm{D} f(x) = a_0
      \sum_{1 \leqslant v \leqslant n} {L_v (x)},
    \end{aligned}
    \]
    且对不超过 \(n\) 的正整数 \(i\)，
    \(\mathrm{D} f(x_i) = a_0 L_i (x_i)\)。
:::

::: proof
(1) 注意，
    \[
    \begin{aligned}
      \mathrm{D} f(x)
      = \mathrm{D} (x - c) q(x) + (x - c) \mathrm{D} q(x)
      = q(x) + (x - c) \mathrm{D} q(x).
    \end{aligned}
    \]
    代 \(x\) 以 \(c\)，得
    \[
    \begin{aligned}
      \mathrm{D} f(c)
      = q(c) + (c - c) \mathrm{D} q(c)
      = q(c).
    \end{aligned}
    \]

(2) 取 \(p_0 (x) = a_0\)，
    且 \(p_i (x) = x - x_i\)
    （\(i = 1\)、\(2\)、\(\dots\)、\(n\)）。
    则 \(f(x) = p_0 (x) p_1 (x) \dots p_n (x)\)。
    注意，\(\mathrm{D} p_0 (x) = 0\)，
    且 \(\mathrm{D} p_i (x) = 1\)
    （\(i = 1\)、\(2\)、\(\dots\)、\(n\)）。
    由上个定理，
    \[
        \begin{aligned}
          \mathrm{D} f(x)
          = {} &
          (\mathrm{D} p_0 (x)) p_1 (x) \dots p_n (x)
      + p_0 (x) (\mathrm{D} p_1 (x)) \dots p_n (x)
      \\
      &
      \quad
      + \dots
      + p_0 (x) p_1 (x) \dots (\mathrm{D} p_n (x)).
      \\
      = {} &
      0
      + a_0 \prod_{\substack{1 \leqslant j \leqslant n \\ j \neq 1}}
      {(x - x_j)}
      + \dots
      + a_0 \prod_{\substack{1 \leqslant j \leqslant n \\ j \neq n}}
      {(x - x_j)}
      \\
      = {} &
      a_0 \sum_{1 \leqslant v \leqslant n} {L_v (x)}.
    \end{aligned}
    \]
    最后，注意，若 \(i \neq v\)，则 \(L_v (x_i) = 0\)。
    则由上式，\(\mathrm{D} f(x_i) = a_0 L_i (x_i)\)。
:::

最后，我们以整式的几个性质结束本节。

::: theorem
设 \(n\) 是非负整数。
设 \(f(x) = a_0 x^n + a_1 x^{n-1} + \dots + a_n\) 是整式。
设 \(c\) 是数。
则存在整式 \(q(x)\)，使
\[
\begin{aligned}
  f(x) = (x - c) q(x) + f(c).
\end{aligned}
\]
进一步地，若 \(n \geqslant 1\)，且 \(a_0 \neq 0\)，
则 \(q(x)\) 的次是 \(n-1\)。
:::

::: proof
对任何正整数 \(m\)，记
\[
\begin{aligned}
  s_m (x; y)
  = x^{m-1} + x^{m-2} y + \dots + x y^{m-2} + y^{m-1}
  = \sum_{k = 0}^{m-1} {x^{m-1-k} y^k}.
\end{aligned}
\]
则 \(s_m (x; y)\) 是关于 \(x\) 的 \(m-1\) 次整式，且
\[
\begin{aligned}
  (x - y) s_m (x; y)
  = {} &
  (x - y) \sum_{k = 0}^{m-1} {x^{m-1-k} y^k}
  \\
  = {} &
  x \sum_{k = 0}^{m-1} {x^{m-1-k} y^k}
  - y \sum_{k = 0}^{m-1} {x^{m-1-k} y^k}
  \\
  = {} &
  \sum_{k = 0}^{m-1} {x^{m-k} y^k}
  - \sum_{k = 0}^{m-1} {x^{m-1-k} y^{k+1}}
  \\
  = {} &
  \sum_{\ell = 0}^{m-1} {x^{m-\ell} y^\ell}
  - \sum_{\ell = 1}^{m} {x^{m-\ell} y^\ell}
  \\
  = {} &
  x^{m-0} y^0 + \sum_{\ell = 1}^{m-1} {x^{m-\ell} y^\ell}
  - \left(
    \sum_{\ell = 1}^{m-1} {x^{m-\ell} y^\ell} + x^{m-m} y^m
  \right)
  \\
  = {} &
  x^m - y^m.
\end{aligned}
\]
则
\[
\begin{aligned}
  f(x) - f(c)
  = {} &
  \sum_{i = 0}^{n} {a_i x^{n-i}}
  - \sum_{i = 0}^{n} {a_i c^{n-i}}
  \\
  = {} &
  \sum_{i = 0}^{n} {(a_i x^{n-i} - a_i c^{n-i})}
  \\
  = {} &
  \sum_{i = 0}^{n} {a_i (x^{n-i} - c^{n-i})}
  \\
  = {} &
  \sum_{i = 0}^{n-1} {a_i (x^{n-i} - c^{n-i})}
  + a_n (x^0 - c^0)
  \\
  = {} &
  \sum_{i = 0}^{n-1} {a_i (x - c) s_{n-i} (x; c)}
  + a_n\, 0
  \\
  = {} &
  (x - c)
  \sum_{i = 0}^{n-1} {a_i s_{n-i} (x; c)}.
\end{aligned}
\]
记
\[
\begin{aligned}
  q(x) = \sum_{i = 0}^{n-1} {a_i s_{n-i} (x; c)}.
\end{aligned}
\]
则 \(f(x) = (x - c) q(x) + f(c)\)。

进一步地，若 \(n \geqslant 1\)，则
\[
\begin{aligned}
  q(x)
  = {} &
  a_0 s_n (x; c)
  + \underbrace{\sum_{i = 1}^{n-1} {a_i s_{n-i} (x; c)}}_{\text{次低于 \(n-1\)}}
  \\
  = {} &
  a_0 (x^{n-1} + c x^{n-2} + \dots + c^{n-1})
  + (\text{次低于 \(n-1\) 的整式})
  \\
  = {} &
  a_0 x^{n-1} + (\text{次低于 \(n-1\) 的整式}).
\end{aligned}
\]
因为 \(a_0 \neq 0\)，\(q(x)\) 的次是 \(n-1\)。
:::

::: theorem
设 \(n\) 是正整数。
设 \(f(x) = a_0 x^n + a_1 x^{n-1} + \dots + a_n\)
（\(a_0 \neq 0\)）是 \(n\) 次整式。

(1) 若存在数 \(d\)，与 \(n-1\) 次整式 \(p(x)\)，
    使 \(f(x) = (x - d) p(x)\)，
    则 \(f(d) = 0\)。

(2) 若数 \(c\) 适合，\(f(c) = 0\)，
    则存在 \(n-1\) 次整式 \(q(x)\)，
    使 \(f(x) = (x - c) q(x)\)。
:::

::: proof
(1) 注意，\(f(d) = (d - d) p(d) = 0\, p(d) = 0\)。

(2) 由上个定理，存在 \(n-1\) 次整式 \(q(x)\)，使
    \[
    f(x) = (x - c) q(x) + f(c)
    = (x - c) q(x) + 0
    = (x - c) q(x).
    \]
:::

::: theorem
设 \(n\) 是正整数。
设 \(w_1\)、\(w_2\)、\(\dots\)、\(w_n\) 是数。
则

```math {@eq:Viète}
\prod_{i = 1}^{n} {(x + w_i)}
= x^n + \sum_{k = 1}^{n} {x^{n-k}
    \sum_{1 \leqslant \ell_1 < \dots < \ell_k \leqslant n}
    {w_{\ell_1} \dots w_{\ell_k}}
}.
```

:::

::: proof
作命题 \(P(n)\)：
对任何数 \(w_1\)、\(w_2\)、\(\dots\)、\(w_n\)，
式 @eq:Viète 是对的。

\(P(1)\) 是对的。

设 \(P(n)\) 是对的。
我们由此证，\(P(n+1)\) 是对的。
任取数 \(w_1\)、\(\dots\)、\(w_n\)、\(w_{n+1}\)，
注意，
\[
\begin{aligned}
  &
  \prod_{i = 1}^{n+1} {(x + w_i)}
  \\
  = {} &
  \left(\prod_{i = 1}^{n} {(x + w_i)}\right) (x + w_{n+1})
  \\
  = {} &
  \left(x^n + \sum_{k = 1}^{n} {x^{n-k}
      \sum_{1 \leqslant \ell_1 < \dots < \ell_k \leqslant n}
      {w_{\ell_1} \dots w_{\ell_k}}
  }\right) (x + w_{n+1})
  \\
  = {} &
  \hphantom{{} + {}}
  \left(x^n + \sum_{k = 1}^{n} {x^{n-k}
      \sum_{1 \leqslant \ell_1 < \dots < \ell_k \leqslant n}
      {w_{\ell_1} \dots w_{\ell_k}}
  }\right) x
  \\
  &
  {} +
  \left(x^n + \sum_{k = 1}^{n} {x^{n-k}
      \sum_{1 \leqslant \ell_1 < \dots < \ell_k \leqslant n}
      {w_{\ell_1} \dots w_{\ell_k}}
  }\right) w_{n+1}
  \\
  = {} &
  \hphantom{{} + {}}
  x^{n+1} + \sum_{k = 1}^{n} {x^{n+1-k}
    \sum_{1 \leqslant \ell_1 < \dots < \ell_k \leqslant n}
    {w_{\ell_1} \dots w_{\ell_k}}
  }
  \\
  &
  {} +
  x^n w_{n+1} + \sum_{k = 1}^{n} {x^{n-k}
    \sum_{1 \leqslant \ell_1 < \dots < \ell_k \leqslant n}
    {w_{\ell_1} \dots w_{\ell_k} w_{n+1}}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  x^{n+1} + \sum_{u = 1}^{n} {x^{n+1-u}
    \sum_{1 \leqslant \ell_1 < \dots < \ell_u \leqslant n}
    {w_{\ell_1} \dots w_{\ell_u}}
  }
  \\
  &
  {} +
  x^n w_{n+1} + \sum_{u = 2}^{n+1} {x^{n-(u-1)}
    \sum_{1 \leqslant \ell_1 < \dots < \ell_{u-1} \leqslant n}
    {w_{\ell_1} \dots w_{\ell_{u-1}} w_{n+1}}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  x^{n+1} + \sum_{u = 1}^{n} {x^{n+1-u}
    \sum_{1 \leqslant \ell_1 < \dots < \ell_u \leqslant n}
    {w_{\ell_1} \dots w_{\ell_u}}
  }
  \\
  &
  {} +
  x^n w_{n+1} + \sum_{u = 2}^{n+1} {x^{n+1-u}
    \sum_{\substack{
        1 \leqslant \ell_1 < \dots < \ell_{u-1} < \ell_u \leqslant n+1 \\
        \ell_u = n + 1
    }}
    {w_{\ell_1} \dots w_{\ell_{u-1}} w_{\ell_u}}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  x^{n+1} + \sum_{u = 1}^{n} {x^{n+1-u}
    \sum_{1 \leqslant \ell_1 < \dots < \ell_u \leqslant n}
    {w_{\ell_1} \dots w_{\ell_u}}
  }
  \\
  &
  {}
  + x^{n+1-1}
  \sum_{\substack{
      1 \leqslant \ell_1 \leqslant n+1 \\
      \ell_1 = n + 1
  }}
  {w_{\ell_1} \dots w_{\ell_u}}
  + \sum_{u = 2}^{n} {x^{n+1-u}
    \sum_{\substack{
        1 \leqslant \ell_1 < \dots < \ell_u \leqslant n+1 \\
        \ell_u = n + 1
    }}
    {w_{\ell_1} \dots w_{\ell_u}}
  }
  \\
  &
  {}
  + x^{n+1-(n+1)} \sum_{\substack{
      1 \leqslant \ell_1 < \dots < \ell_{n+1} \leqslant n+1 \\
      \ell_{n+1} = n + 1
  }}
  {w_{\ell_1} \dots w_{\ell_u}}
  \\
  = {} &
  \hphantom{{} + {}}
  x^{n+1} + \sum_{u = 1}^{n} {x^{n+1-u}
    \sum_{\substack{
        1 \leqslant \ell_1 < \dots < \ell_u \leqslant n+1 \\
        \ell_u \leqslant n
    }}
    {w_{\ell_1} \dots w_{\ell_u}}
  }
  \\
  &
  {} +
  \sum_{u = 1}^{n} {x^{n+1-u}
    \sum_{\substack{
        1 \leqslant \ell_1 < \dots < \ell_u \leqslant n+1 \\
        \ell_u = n + 1
    }}
    {w_{\ell_1} \dots w_{\ell_{u-1}} w_{\ell_u}}
  }
  \\
  &
  {} +
  x^{n+1-(n+1)}
  \sum_{1 \leqslant \ell_1 < \dots < \ell_{n+1} \leqslant n+1}
  {w_{\ell_1} \dots w_{\ell_u}}
  \\
  = {} &
  \hphantom{{} + {}}
  x^{n+1} + \sum_{u = 1}^{n} {x^{n+1-u}
    \sum_{1 \leqslant \ell_1 < \dots < \ell_u \leqslant n+1}
    {w_{\ell_1} \dots w_{\ell_u}}
  }
  \\
  &
  {} +
  x^{n+1-(n+1)}
  \sum_{1 \leqslant \ell_1 < \dots < \ell_{n+1} \leqslant n+1}
  {w_{\ell_1} \dots w_{\ell_{n+1}}}
  \\
  = {} &
  x^{n+1} + \sum_{u = 1}^{n+1} {x^{n+1-u}
    \sum_{1 \leqslant \ell_1 < \dots < \ell_u \leqslant n+1}
    {w_{\ell_1} \dots w_{\ell_u}}
  }.
\end{aligned}
\]
所以，\(P(n+1)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: theorem
设 \(n\) 是正整数。
设 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\) 是数。
设
\[
\begin{aligned}
  f(x) = a_0 (x - x_1) (x - x_2) \dots (x - x_n).
\end{aligned}
\]

(1) 若 \(f(x) = b_0 x^n + b_1 x^{n-1} + \dots + b_n\)，
    则 \(b_0 = a_0\)，且若 \(1 \leqslant k \leqslant n\)，则
    \[
    \begin{aligned}
      b_k = (-1)^k a_0 \sum_{1 \leqslant \ell_1 < \dots < \ell_k \leqslant n}
      {x_{\ell_1} \dots x_{\ell_k}}.
    \end{aligned}
    \]

(2) 若 \(a_0 \neq 0\)，则 \(f(x)\) 是 \(n\) 次整式，
    且 \(x^n\) 项系数是 \(a_0\)。

(3) 若数 \(c\) 是 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\) 的一个，
    则 \(f(c) = 0\)。
    反过来，若 \(a_0 \neq 0\)，
    且数 \(d\) 不等于 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\)，
    则 \(f(d) \neq 0\)。
:::

::: proof
(1) 由上个定理，\(b_0 = a_0 \cdot 1 = a_0\)，
    且若 \(1 \leqslant k \leqslant n\)，则
    \[
    \begin{aligned}
      b_k
      = {} &
      a_0
      \sum_{1 \leqslant \ell_1 < \dots < \ell_k \leqslant n}
      {(-x_{\ell_1}) \dots (-x_{\ell_k})}
      \\
      = {} &
      a_0
      \sum_{1 \leqslant \ell_1 < \dots < \ell_k \leqslant n}
      {(-1)^k x_{\ell_1} \dots x_{\ell_k}}
      \\
      = {} &
      a_0\, (-1)^k
      \sum_{1 \leqslant \ell_1 < \dots < \ell_k \leqslant n}
      {x_{\ell_1} \dots x_{\ell_k}}
      \\
      = {} &
      (-1)^k a_0
      \sum_{1 \leqslant \ell_1 < \dots < \ell_k \leqslant n}
      {x_{\ell_1} \dots x_{\ell_k}}.
    \end{aligned}
    \]

(2) 由 (1)，\(f(x)\) 是次不高于 \(n\) 的整式，
    且 \(x^n\) 项系数 \(b_0 = a_0 \neq 0\)。
    则 \(f(x)\) 是 \(n\) 次整式。

(3) 若数 \(c\) 是 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\) 的一个，
    则 \(c - x_1\)、\(c - x_2\)、\(\dots\)、\(c - x_n\) 的一个是 \(0\)。
    注意，任何数跟 \(0\) 的积是 \(0\)。
    反过来，若 \(a_0 \neq 0\)，
    且数 \(d\) 不等于 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\)，
    则 \(a_0\)、\(d - x_1\)、\(d - x_2\)、\(\dots\)、\(d - x_n\)
    都非零。
    注意，非零的数的积不是零。
:::
