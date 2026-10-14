---
title: 'falling factorial 与 \(2\) 项式系数'
---

本节，我们讨论 falling factorial 与 \(2\) 项式系数。
它们在讨论阵的运算的新的律时是有用的。

::: definition
设 \(x\)、\(h\) 是 \(s\) 级阵，
且 \(x h = h x\)。
设 \(n\) 是整数。

(1) 若 \(n \geqslant 0\)，定义
    \(x\) 的关于 \(h\) 的 \(n\) 次 **falling factorial**
    \[
    \begin{aligned}
      \operatorname{fa} {(x, n; h)} =
      \begin{cases}
        I, & n = 0; \\
        \operatorname{fa} {(x, n-1; h)}\, (x - (n-1) h), & n \geqslant 1.
      \end{cases}
    \end{aligned}
    \]

(2) 若 \(n < 0\)，定义
    \(x\) 的关于 \(h\) 的 \(n\) 次 **falling factorial**
    \(\operatorname{fa} {(x, n; h)} = 0\)。
:::

注意，
\[
\begin{aligned}
  \operatorname{fa} {(x, 1; h)}
  = {} & \operatorname{fa} {(x, 0; h)}\, (x - 0 h)
  = I x = x,
  \\
  \operatorname{fa} {(x, 2; h)}
  = {} & \operatorname{fa} {(x, 1; h)}\, (x - 1 h)
  = x (x - 1 h) = x (x - h),
  \\
  \operatorname{fa} {(x, 3; h)}
  = {} & \operatorname{fa} {(x, 2; h)}\, (x - 2 h)
  = x (x - h) (x - 2 h).
\end{aligned}
\]
一般地，对正整数 \(n\)，
\[
\begin{aligned}
  \operatorname{fa} {(x, n; h)}
  = x (x - h) \dots (x - (n-1) h).
\end{aligned}
\]

注意，若 \(x h \neq h x\)，
我们不定义 \(x\) 的关于 \(h\) 的 \(n\) 次 falling factorial。

注意，因为 \(1\) 级阵与数的对应，\(x\) 与 \(h\) 也可以是数；
此时，\(x h\) 当然等于 \(h x\)。
\(1\) 级单位阵 \(I\) 自然地对应数 \(1\)。

注意，若 \(h = 0\)，且 \(n \geqslant 0\)，则
\(\operatorname{fa} {(x, n; 0)} = x^n\)。

::: example
设 \(n\) 是非负整数。
若 \(n = 0\)，则 \(\operatorname{fa} {(n, n; 1)} = 1\)。
若 \(n \geqslant 1\)，则
\[
\begin{aligned}
  \operatorname{fa} {(n, n; 1)} = n (n - 1 \cdot 1) \dots (n - (n - 1) \cdot 1) = n \cdot (n - 1) \cdot \dots \cdot 1.
\end{aligned}
\]
一般地，当 \(n\) 是非负整数时，我们简单地写
\(\operatorname{fa} {(n, n; 1)}\)
为 \(n!\)。
不难看出，对正整数 \(n\)，
\(n! = n \cdot (n - 1)!\)。
:::

在研究 falling factorial 的性质前，
我们看如下事实。
它会是有用的。

::: theorem
设 \(x\)、\(y\)、\(h\) 是 \(s\) 级阵，
且 \(x h = h x\)，\(y h = h y\)，\(x y = y x\)。
设 \(i\)、\(j\) 是整数。
则 \((x - i h) (y - j h) = (y - j h) (x - i h)\)。
:::

::: proof
注意，由分配律，
\[
\begin{aligned}
  (x - i h) (y - j h)
  = {} & x (y - j h) - i h (y - j h)
  \\
  = {} & (x y - x (j h)) - ((i h) y - (i h) (j h))
  \\
  = {} & (x y - j x h) - (i h y - i j h h)
  \\
  = {} & x y - j x h - i h y + i j h^2.
\end{aligned}
\]
因为 \(y h = h y\)，
\[
\begin{aligned}
  (x - i h) (y - j h)
  = {} & x y - j x h - i y h + i j h^2
  \\
  = {} & x y - (j x + i y) h + i j h^2.
\end{aligned}
\]
类似地，因为 \(x h = h x\)，
\[
\begin{aligned}
  (y - j h) (x - i h)
  = y x - (i y + j x) h + j i h^2.
\end{aligned}
\]
因为 \(x y = y x\)，
\(j x + i y = i y + j x\)（加法的交换律），
且 \(i j = j i\)（整数的乘法的交换律），
\((x - i h) (y - j h) = (y - j h) (x - i h)\)。
:::

falling factorial 有如下性质。

::: theorem
设 \(x\)、\(h\) 是 \(s\) 级阵，
且 \(x h = h x\)。
设 \(n\) 是整数。

(1) 若 \(n \neq 0\)，则
    \(\operatorname{fa} {(x, n; h)}
      = (x - (n - 1)h) \operatorname{fa} {(x, n-1; h)}\)。

(2) 若 \(n \neq 0\)，则
    \(\operatorname{fa} {(x + h, n; h)}
      = (x + h) \operatorname{fa} {(x, n-1; h)}\)。

(3) \(\operatorname{fa} {(x + h, n; h)}
    - \operatorname{fa} {(x, n; h)}
      = n h \operatorname{fa} {(x, n-1; h)}\)。

(4) 对非负整数 \(m\)，
    \[
        \begin{aligned}
          \operatorname{fa} {(x + m h, n; h)}
      - \operatorname{fa} {(x, n; h)}
      = n h \sum_{0 \leqslant i < m}
      {\operatorname{fa} {(x + i h, n-1; h)}}.
    \end{aligned}
    \]
    特别地，若 \(n \geqslant 1\)，且 \(x = 0\)，
    则
    \[
    \begin{aligned}
      \operatorname{fa} {(m h, n; h)}
      = n h \sum_{0 \leqslant i < m}
      {\operatorname{fa} {(i h, n-1; h)}}.
    \end{aligned}
    \]

(5) \(\operatorname{fa} {(x, n; -h)}
    = \operatorname{fa} {(x + (n-1) h, n; h)}\)。

(6) \(\operatorname{fa} {(-x, n; h)}
    = (-1)^n \operatorname{fa} {(x + (n-1) h, n; h)}\)。
:::

::: proof
(1) 若 \(n \leqslant -1\)，则
    \(\operatorname{fa} {(x, n; h)}\)
    与 \(\operatorname{fa} {(x, n-1; h)}\) 都是 \(0\)。

    若 \(n \geqslant 1\)，则因为
    \((x - i h) (x - j h) = (x - j h) (x - i h)\)，
    \[
    \begin{aligned}
      \operatorname{fa} {(x, n; h)}
      = {} &
      x (x - h) \dots (x - (n-2) h) (x - (n-1) h)
      \\
      = {} &
      (x - (n-1) h) x (x - h) \dots (x - (n-2) h)
      \\
      = {} &
      (x - (n-1) h) \operatorname{fa} {(x, n-1; h)}.
    \end{aligned}
    \]

(2) 若 \(n \leqslant -1\)，则
    \(\operatorname{fa} {(x+h, n; h)}\)
    与 \(\operatorname{fa} {(x, n-1; h)}\) 都是 \(0\)。
    若 \(n \geqslant 1\)，则
    \[
        \begin{aligned}
          &
          \operatorname{fa} {(x+h, n; h)}
          \\
          = {} &
      (x+h) ((x+h) - h) \dots ((x+h) - (n-2) h) ((x+h) - (n-1) h)
      \\
      = {} &
      (x + h) x (x - h) \dots (x - (n-2) h)
      \\
      = {} &
      (x + h) \operatorname{fa} {(x, n-1; h)}.
    \end{aligned}
    \]

(3) 若 \(n = 0\)，则左边是 \(I - I = 0\)，
    且右边也是 \(0\)。

    若 \(n \neq 0\)，则由 (1) 与 (2)，
    \[
    \begin{aligned}
      &
      \operatorname{fa} {(x + h, n; h)}
      - \operatorname{fa} {(x, n; h)}
      \\
      = {} &
      (x + h) \operatorname{fa} {(x, n-1; h)}
      - (x - (n-1)h) \operatorname{fa} {(x, n-1; h)}
      \\
      = {} &
      ((x + h) - (x - (n-1)h))
      \operatorname{fa} {(x, n-1; h)}
      \\
      = {} &
      n h \operatorname{fa} {(x, n-1; h)}.
    \end{aligned}
    \]

(4) 若 \(m = 0\)，
    则左边是
    \(\operatorname{fa} {(x + 0 h, n; h)}
      - \operatorname{fa} {(x, n; h)} = 0\)，
    且右边也是 \(0\)
    （没有阵被加）。

    若 \(m \geqslant 1\)，则注意，
    \[
    \begin{aligned}
      \operatorname{fa} {(x + h, n; h)}
      - \operatorname{fa} {(x, n; h)}
      & = n h \operatorname{fa} {(x, n-1; h)},
      \\
      \operatorname{fa} {(x + 2h, n; h)}
      - \operatorname{fa} {(x + h, n; h)}
      & = n h \operatorname{fa} {(x + h, n-1; h)},
      \\
      & \dots,
      \\
      \operatorname{fa} {(x + mh, n; h)}
      - \operatorname{fa} {(x + (m-1)h, n; h)}
      & = n h \operatorname{fa} {(x + (m-1)h, n-1; h)}.
    \end{aligned}
    \]
    加各式即可。
    左边的多的项会被消去。

    进一步地，注意，
    若 \(n \geqslant 1\)，且 \(x = 0\)，
    则 \(\operatorname{fa} {(0, n; h)} = 0\)。

(5) 若 \(n = 0\)，则左边是 \(I\)，
    且右边也是 \(I\)。

    若 \(n \leqslant -1\)，则左边是 \(0\)，
    且右边也是 \(0\)。

    若 \(n \geqslant 1\)，则因为
    \((x - i h) (x - j h) = (x - j h) (x - i h)\)，
    \[
    \begin{aligned}
      \operatorname{fa} {(x, n; -h)}
      = {} &
      x (x - (-h)) \cdots (x - (n-2)(-h)) (x - (n-1)(-h))
      \\
      = {} &
      x (x + h) \cdots (x + (n-2)h) (x + (n-1)h)
      \\
      = {} &
      (x + (n-1)h - (n-1)h) (x + (n-1)h - (n-2)h) \dots
      \\
      & \quad
      (x + (n-1)h - h) (x + (n-1)h)
      \\
      = {} &
      (x + (n-1)h) (x + (n-1)h - h) \dots
      \\
      & \quad
      (x + (n-1)h - (n-2)h) (x + (n-1)h - (n-1)h)
      \\
      = {} &
      \operatorname{fa} {(x + (n-1)h, n; h)}.
    \end{aligned}
    \]

(6) 若 \(n = 0\)，则左边是 \(I\)，
    且右边是 \((-1)^0 I = I\)。

    若 \(n \leqslant -1\)，则左边是 \(0\)，
    且右边是 \((-1)^n 0 = 0\)。

    若 \(n \geqslant 1\)，则因为
    \((x - i h) (x - j h) = (x - j h) (x - i h)\)，
    \[
    \begin{aligned}
      \operatorname{fa} {(-x, n; h)}
      = {} &
      (-x) (-x - h) \cdots (-x - (n-2)h) (-x - (n-1)h)
      \\
      = {} &
      ((-1) x)\, ((-1) (x + h)) \cdots
      \\
      & \quad
      ((-1) (x + (n-2)h))\, ((-1) (x + (n-1)h))
      \\
      = {} &
      (-1)^n
      x (x + h) \cdots (x + (n-2)h) (x + (n-1)h)
      \\
      = {} &
      (-1)^n
      (x + (n-1)h - (n-1)h) (x + (n-1)h - (n-2)h) \dots
      \\
      & \quad
      (x + (n-1)h - h) (x + (n-1)h)
      \\
      = {} &
      (-1)^n
      (x + (n-1)h) (x + (n-1)h - h) \dots
      \\
      & \quad
      (x + (n-1)h - (n-2)h) (x + (n-1)h - (n-1)h)
      \\
      = {} &
      (-1)^n \operatorname{fa} {(x + (n-1)h, n; h)}.
    \end{aligned}
    \]
:::

接下来，我们由 falling factorial 定义 \(2\) 项式系数。
回想，数可被认为是 \(1\) 级阵，
且 \(1\) 级阵可被认为是数；
回想，对任何数 \(x\)，\(1 x = x = x 1\)；
回想，\(0! = 1\)，
且 \(n! = n \cdot \dots \cdot (n - 1) \cdot \dots \cdot 1\)
（\(n \geqslant 1\)）。

::: definition
设 \(x\) 是数。
设 \(n\) 是整数。
定义 \(x\) 的 \(n\) 次 **\(2\) 项式系数**
\[
\begin{aligned}
  \dbinom{x}{n} =
  \begin{dcases}
    \frac{\operatorname{fa} {(x, n; 1)}}{\operatorname{fa} {(n, n; 1)}}
    = \frac{x (x - 1) \dots (x - (n-1))}{n!},
    & n \geqslant 1; \\
    \frac{\operatorname{fa} {(x, 0; 1)}}{\operatorname{fa} {(0, 0; 1)}}
    = 1,
    & n = 0; \\
    0,
    & n \leqslant -1.
  \end{dcases}
\end{aligned}
\]
:::

\(2\) 项式系数有如下性质。

::: theorem
设 \(x\) 是数。
设 \(m\)、\(n\) 是整数。

(1) 若 \(n \neq 0\)，则
    \[
    \begin{aligned}
      \dbinom{x}{n} = \dbinom{x}{n-1} \frac{x-(n-1)}{n}.
    \end{aligned}
    \]

(2) 若 \(n \neq 0\)，则
    \[
    \begin{aligned}
      \dbinom{x+1}{n} = \frac{x+1}{n} \dbinom{x}{n-1}.
    \end{aligned}
    \]

(3) \(\dbinom{x+1}{n} - \dbinom{x}{n} = \dbinom{x}{n-1}\)。

(4) 若 \(m \geqslant 0\)，则
    \[
    \begin{aligned}
      \dbinom{x + m}{n} - \dbinom{x}{n}
      = \sum_{0 \leqslant i < m} {\dbinom{x + i}{n-1}}.
    \end{aligned}
    \]
    特别地，若 \(n \geqslant 1\)，且 \(x = 0\)，则
    \[
    \begin{aligned}
      \dbinom{m}{n} = \sum_{0 \leqslant i < m} {\dbinom{i}{n-1}}.
    \end{aligned}
    \]

(5) 若 \(m \geqslant 0\)，则
    \[
    \begin{aligned}
      \dbinom{x + m}{m-1}
      = \sum_{0 \leqslant i < m} {\dbinom{x + i}{i}}.
    \end{aligned}
    \]

(6) \(\dbinom{-x}{n} = (-1)^n \dbinom{x + n - 1}{n}\)。

(7) 若 \(m\) 是非负整数，且 \(n\) 是整数，
    则 \(\dbinom{m}{n}\) 是非负整数。

(8) 若 \(m\)、\(n\) 是整数，
    则 \(\dbinom{m}{n}\) 是整数。

(9) 若 \(m\)、\(n\) 是非负整数，且 \(m \geqslant n\)，
    则
    \[
    \begin{aligned}
      \dbinom{m}{n} = \frac{m!}{(m - n)! n!}
    \end{aligned}
    \]
    是正整数。

(10) 若 \(m\)、\(n\) 是非负整数，且 \(m < n\)，
     则 \(\dbinom{m}{n} = 0\)。

(11) 若 \(m\) 是非负整数，且 \(n\) 是整数，
     则 \(\dbinom{m}{n} = \dbinom{m}{m - n}\)。
:::

::: proof
(1) 若 \(n \leqslant -1\)，则左边是 \(0\)，
    且右边是 \(0\, (x - (n - 1))/n = 0\)。

    若 \(n \geqslant 1\)，则由 falling factorial 的定义，
    \[
    \begin{aligned}
      \operatorname{fa} {(x, n; 1)}
      = \operatorname{fa} {(x, n-1; 1)}\, (x - (n - 1)),
    \end{aligned}
    \]
    即
    \[
    \begin{aligned}
      n! \dbinom{x}{n}
      = (n-1)! \dbinom{x}{n-1} (x - (n - 1)).
    \end{aligned}
    \]
    注意，\((n-1)! = (1/n)\, n!\)，且 \(n! \neq 0\)。
    在等式的 \(2\) 边消去 \(n!\) 即可。

(2) 若 \(n \leqslant -1\)，则左边是 \(0\)，
    且右边是 \(((x + 1)/n)\, 0 = 0\)。

    若 \(n \geqslant 1\)，则由 falling factorial 的性质，
    \[
    \begin{aligned}
      \operatorname{fa} {(x+1, n; 1)}
      = (x+1) \operatorname{fa} {(x, n-1; 1)}.
    \end{aligned}
    \]
    即
    \[
    \begin{aligned}
      n! \dbinom{x+1}{n}
      = (x+1)\, (n-1)! \dbinom{x}{n-1}.
    \end{aligned}
    \]
    注意，\((n-1)! = (1/n)\, n!\)，且 \(n! \neq 0\)。
    在等式的 \(2\) 边消去 \(n!\) 即可。

(3) 若 \(n \leqslant -1\)，则左边是 \(0 - 0 = 0\)，
    且右边是 \(0\)。

    若 \(n = 0\)，则左边是 \(1 - 1 = 0\)，
    且右边是 \(0\)。

    若 \(n \geqslant 1\)，则由 falling factorial 的性质，
    \[
    \begin{aligned}
      \operatorname{fa} {(x + 1, n; 1)}
      - \operatorname{fa} {(x, n; 1)}
      = n \operatorname{fa} {(x, n-1; 1)},
    \end{aligned}
    \]
    即
    \[
    \begin{aligned}
      n! \dbinom{x+1}{n} - n! \dbinom{x}{n}
      = n \cdot (n-1)! \dbinom{x}{n-1}.
    \end{aligned}
    \]
    注意，\(n! = n \cdot (n-1)!\)，且 \(n! \neq 0\)。
    在等式的 \(2\) 边消去 \(n!\) 即可。

(4) 若 \(n = 0\)，则左边是 \(1 - 1 = 0\)，
    且右边是一些 \(0\) 的和。

    若 \(n \leqslant -1\)，则左边是 \(0 - 0 = 0\)，
    且右边是一些 \(0\) 的和。

    若 \(n \geqslant 1\)，则由 falling factorial 的性质，
    \[
    \begin{aligned}
      \operatorname{fa} {(x + m, n; 1)}
      - \operatorname{fa} {(x, n; 1)}
      = n \sum_{0 \leqslant i < m}
      {\operatorname{fa} {(x + i, n-1; 1)}}.
    \end{aligned}
    \]
    即
    \[
    \begin{aligned}
      n! \dbinom{x + m}{n}
      - n! \dbinom{x}{n}
      = n \sum_{0 \leqslant i < m} {(n-1)! \dbinom{x + i}{n-1}},
    \end{aligned}
    \]
    即
    \[
    \begin{aligned}
      n! \left(\dbinom{x + m}{n} - \dbinom{x}{n}\right)
      = n \cdot (n-1)!  \sum_{0 \leqslant i < m} {\dbinom{x + i}{n-1}}.
    \end{aligned}
    \]
    注意，\(n! = n \cdot (n-1)!\)，且 \(n! \neq 0\)。
    在等式的 \(2\) 边消去 \(n!\) 即可。

    进一步地，注意，
    若 \(n \geqslant 1\)，且 \(x = 0\)，
    则 \(\dbinom{0}{n} = 0\)。

(5) 若 \(m = 0\)，则左边是 \(0\)，且右边也是 \(0\)
    （没有数被加）。

    若 \(m \geqslant 1\)，则注意，
    \[
    \begin{aligned}
      \dbinom{x+1}{0} - \dbinom{x+0}{-1}
      & = \dbinom{x+0}{0},
      \\
      \dbinom{x+2}{1} - \dbinom{x+1}{0}
      & = \dbinom{x+1}{1},
      \\
      & \dots,
      \\
      \dbinom{x+m}{m-1} - \dbinom{x+m-1}{m-2}
      & = \dbinom{x+m-1}{m-1}.
    \end{aligned}
    \]
    加各式即可。
    左边的多的项会被消去，
    且注意，\(\dbinom{x+0}{-1} = 0\)。

(6) 若 \(n \leqslant -1\)，则左边是 \(0\)，
    且右边是 \((-1)^n 0 = 0\)。

    若 \(n = 0\)，则左边是 \(1\)，
    且右边是 \((-1)^0 1 = 1\)。

    若 \(n \geqslant 1\)，则由 falling factorial 的性质，
    \[
    \begin{aligned}
      \operatorname{fa} {(-x, n; 1)}
      = (-1)^n \operatorname{fa} {(x + (n-1) 1, n; 1)},
    \end{aligned}
    \]
    即
    \[
    \begin{aligned}
      n! \dbinom{-x}{n}
      = (-1)^n n! \dbinom{x + n - 1}{n}.
    \end{aligned}
    \]
    注意，\(n! \neq 0\)。
    在等式的 \(2\) 边消去 \(n!\) 即可。

(7) 若 \(n < 0\)，则 \(\dbinom{m}{n} = 0\)。
    所以，以下，我们考虑 \(n \geqslant 0\)。

    作命题 \(P(n)\)：
    对任何非负整数 \(m\)，
    \(\dbinom{m}{n}\) 是非负整数。
    我们用数学归纳法证明，对任何非负整数 \(n\)，
    \(P(n)\) 是对的。

    \(P(0)\) 是对的，因为对任何非负整数 \(m\)，
    \(\dbinom{m}{0} = 1\)。

    设 \(P(n-1)\) 是对的（\(n \geqslant 1\)）。
    我们由此证明，\(P(n)\) 是对的。
    设 \(m\) 是非负整数。
    若 \(m = 0\)，
    则 \(\dbinom{m}{n} = \dbinom{0}{n} = 0\) 是非负整数
    （注意，\(n \geqslant 1\)）；
    若 \(m \geqslant 1\)，则由 (4) 与假定 \(P(n-1)\)，
    \(\dbinom{m}{n}\) 是非负整数 \(\dbinom{i}{n-1}\)
    （\(i = 0\)、\(1\)、\(\dots\)、\(m-1\)）
    的和，故它也是非负整数。
    则 \(P(n)\) 是对的。
    由数学归纳法，待证的命题成立。

(8) 若 \(m\) 是非负整数，则由 (7)，
    \(\dbinom{m}{n}\) 是非负整数。

    若 \(m\) 是负整数，则 \(-m\) 是正整数。
    注意，\(m = -(-m)\)。
    由 (6) 与 (7)，
    \(\dbinom{m}{n} = (-1)^n \dbinom{-m + n - 1}{n}\)
    是 \((-1)^n\) 倍非负整数。

(9) 若 \(n = 0\)，则左边是 \(1\)，且右边是 \(m!/(m! 0!) = 1\)。

    若 \(n = m\)，则左边是 \(m!/m! = 1\)，且右边是 \(m!/(0! m!) = 1\)。

    设 \(0 < n < m\)。
    则
    \[
    \begin{aligned}
      \dbinom{m}{n} (m - n)! n!
      = {} &
      \frac{m (m - 1) \dots (m - (n - 1))}{n!}
      \cdot (m - n) (m - n - 1) \dots 1 \cdot n!
      \\
      = {} &
      m!.
    \end{aligned}
    \]
    注意，\(m!\)、\((m - n)!\)、\(n!\) 都是正整数。
    则 \(\dbinom{m}{n}\)，正整数的比，是正数。
    由 (7)，它是非负整数，故它是正整数。

(10) 注意，\(n\) 是正整数。
     则
     \[
     \begin{aligned}
       \dbinom{m}{n} = \frac{m (m - 1) \dots (m - (n - 1))}{n!}.
     \end{aligned}
     \]
     因为 \(m < n\)，\(m \leqslant n - 1\)。
     则在 \(n\) 个数 \(m\)、\(m - 1\)、\(\dots\)、\(m - (n - 1)\)，
     一定有 \(0\)。
     则 \(\dbinom{m}{n} = 0\)。

(11) 若 \(n < 0\)，则 \(\dbinom{m}{n} = 0\)，且 \(m - n > m\)。
     由 (10)，\(\dbinom{m}{m - n} = 0\)。

     若 \(m - n < 0\)，则 \(\dbinom{m}{m - n} = 0\)，且 \(n > m\)。
     由 (10)，\(\dbinom{m}{n} = 0\)。

     设 \(0 \leqslant n \leqslant m\)。
     由 (9)，
     \[
     \dbinom{m}{n}
     = \frac{m!}{(m - n)! n!}
     = \frac{m!}{n! (m - n)!}
     = \frac{m!}{(m - (m - n))! (m - n)!}
     = \dbinom{m}{m - n}.
     \]
:::
