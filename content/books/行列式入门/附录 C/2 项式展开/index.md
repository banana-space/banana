---
title: '\(2\) 项式展开'
---

本节，我们讨论 \(2\) 项式展开。
\(2\) 项式是形如 \((x + y)^m\) 的式，
其中，\(x\)、\(y\) 是 \(s\) 级阵（或数），
且 \(m\) 是非负整数。

::: theorem
设 \(x\)、\(y\)、\(h\) 是 \(s\) 级阵，
且 \(x h = h x\)，\(y h = h y\)，\(x y = y x\)。
设 \(m\) 是非负整数。
则
\[
\begin{aligned}
  \operatorname{fa} {(x + y, m; h)}
  = \sum_{0 \leqslant i \leqslant m} {
    \dbinom{m}{i}
    \operatorname{fa} {(x, m - i; h)}
    \operatorname{fa} {(y, i; h)}
  }.
\end{aligned}
\]
:::

::: proof
作命题 \(P(m)\)：
\[
\begin{aligned}
  \operatorname{fa} {(x + y, m; h)}
  = \sum_{0 \leqslant i \leqslant m} {
    \dbinom{m}{i}
    \operatorname{fa} {(x, m - i; h)}
    \operatorname{fa} {(y, i; h)}
  }.
\end{aligned}
\]
我们用数学归纳法证明，对任何非负整数 \(m\)，\(P(m)\) 是对的。

\(P(0)\) 是对的，因为 \(I = 1 I I\)。

设 \(P(m-1)\) 是对的（\(m \geqslant 1\)），即
\[
\begin{aligned}
  \operatorname{fa} {(x + y, m-1; h)}
  = \sum_{0 \leqslant i \leqslant m-1} {
    \dbinom{m-1}{i}
    \operatorname{fa} {(x, m - 1 - i; h)}
    \operatorname{fa} {(y, i; h)}
  }.
\end{aligned}
\]
我们由此证明，\(P(m)\) 是对的。
注意，
\[
\begin{aligned}
  &
  \operatorname{fa} {(x + y, m; h)}
  \\
  = {} &
  \operatorname{fa} {(x + y, m - 1; h)}
  (x + y - (m - 1) h)
  \\
  = {} &
  \left(\sum_{0 \leqslant i \leqslant m-1} {
      \dbinom{m-1}{i}
      \operatorname{fa} {(x, m - 1 - i; h)}
      \operatorname{fa} {(y, i; h)}
  }\right)
  (x + y - (m - 1) h)
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant m-1} {
    \dbinom{m-1}{i}
    \operatorname{fa} {(x, m - 1 - i; h)}
    \operatorname{fa} {(y, i; h)}\,
    (x + y - (m - 1) h)
  }
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant m-1} {
    \dbinom{m-1}{i}
    \operatorname{fa} {(x, m - 1 - i; h)}
    \operatorname{fa} {(y, i; h)}
  }
  \\
  & \qquad \qquad
  \cdot ((x - (m - 1 - i) h) + (y - i h))
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant m-1} {
    \left(
    \dbinom{m-1}{i}
    \operatorname{fa} {(x, m - 1 - i; h)}
    \operatorname{fa} {(y, i; h)}\,
    (x - (m - 1 - i) h)
    \right.
  }
  \\
  & \qquad \qquad
  \left.
  {} + \dbinom{m-1}{i}
  \operatorname{fa} {(x, m - 1 - i; h)}
  \operatorname{fa} {(y, i; h)}\,
  (y - i h)
  \right)
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{0 \leqslant i \leqslant m-1} {
    \dbinom{m-1}{i}
    \operatorname{fa} {(x, m - 1 - i; h)}
    \operatorname{fa} {(y, i; h)}\,
    (x - (m - 1 - i) h)
  }
  \\
  &
  {} + \sum_{0 \leqslant i \leqslant m-1} {
    \dbinom{m-1}{i}
    \operatorname{fa} {(x, m - 1 - i; h)}
    \operatorname{fa} {(y, i; h)}\,
    (y - i h)
  }.
\end{aligned}
\]
注意，
\[
\begin{aligned}
  \operatorname{fa} {(y, i; h)}\, (x - (m - 1 - i) h)
  = {} &
  y (y - h) \dots (y - (i - 1) h) (x - (m - 1 - i) h)
  \\
  = {} &
  (x - (m - 1 - i) h) y (y - h) \dots (y - (i - 1) h)
  \\
  = {} &
  (x - (m - 1 - i) h) \operatorname{fa} {(y, i; h)}.
\end{aligned}
\]
则
\[
\begin{aligned}
  &
  \operatorname{fa} {(x + y, m; h)}
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{0 \leqslant i \leqslant m-1} {
    \dbinom{m-1}{i}
    \operatorname{fa} {(x, m - 1 - i; h)}\,
    (x - (m - 1 - i) h)
    \operatorname{fa} {(y, i; h)}
  }
  \\
  &
  {} + \sum_{0 \leqslant i \leqslant m-1} {
    \dbinom{m-1}{i}
    \operatorname{fa} {(x, m - 1 - i; h)}
    \operatorname{fa} {(y, i; h)}\,
    (y - i h)
  }
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{0 \leqslant i \leqslant m-1} {
    \dbinom{m-1}{i}
    \operatorname{fa} {(x, m - 1 - i + 1; h)}
    \operatorname{fa} {(y, i; h)}
  }
  \\
  &
  {} + \sum_{0 \leqslant i \leqslant m-1} {
    \dbinom{m-1}{i}
    \operatorname{fa} {(x, m - 1 - i; h)}
    \operatorname{fa} {(y, i + 1; h)}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{0 \leqslant i \leqslant m-1} {
    \dbinom{m-1}{i}
    \operatorname{fa} {(x, m - i; h)}
    \operatorname{fa} {(y, i; h)}
  }
  \\
  &
  {} + \sum_{1 \leqslant i+1 \leqslant m} {
    \dbinom{m-1}{i+1-1}
    \operatorname{fa} {(x, m - (i + 1); h)}
    \operatorname{fa} {(y, i + 1; h)}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{0 \leqslant j \leqslant m-1} {
    \dbinom{m-1}{j}
    \operatorname{fa} {(x, m - j; h)}
    \operatorname{fa} {(y, j; h)}
  }
  \\
  &
  {} + \sum_{1 \leqslant j \leqslant m} {
    \dbinom{m-1}{j-1}
    \operatorname{fa} {(x, m - j; h)}
    \operatorname{fa} {(y, j; h)}
  }.
\end{aligned}
\]
注意，
\(\dbinom{m-1}{m} = \dbinom{m-1}{-1} = 0\)。
则
\[
\begin{aligned}
  \operatorname{fa} {(x + y, m; h)}
  = {} &
  \hphantom{{} + {}}
  \sum_{0 \leqslant j \leqslant m} {
    \dbinom{m-1}{j}
    \operatorname{fa} {(x, m - j; h)}
    \operatorname{fa} {(y, j; h)}
  }
  \\
  &
  {} + \sum_{0 \leqslant j \leqslant m} {
    \dbinom{m-1}{j-1}
    \operatorname{fa} {(x, m - j; h)}
    \operatorname{fa} {(y, j; h)}
  }
  \\
  = {} &
  \sum_{0 \leqslant j \leqslant m} {
    \left(
    \dbinom{m-1}{j}
    \operatorname{fa} {(x, m - j; h)}
    \operatorname{fa} {(y, j; h)}
    \right.
  }
  \\
  & \qquad \qquad
  \left.
  {} + \dbinom{m-1}{j-1}
  \operatorname{fa} {(x, m - j; h)}
  \operatorname{fa} {(y, j; h)}
  \right)
  \\
  = {} &
  \sum_{0 \leqslant j \leqslant m} {
    \left(
      \dbinom{m-1}{j} + \dbinom{m-1}{j-1}
    \right)
    \operatorname{fa} {(x, m - j; h)}
    \operatorname{fa} {(y, j; h)}
  }
  \\
  = {} &
  \sum_{0 \leqslant j \leqslant m} {
    \dbinom{m}{j}
    \operatorname{fa} {(x, m - j; h)}
    \operatorname{fa} {(y, j; h)}
  }.
\end{aligned}
\]
则 \(P(m)\) 是对的。
由数学归纳法，待证的命题成立。
:::

我们看 \(2\) 个特例。

一方面，取 \(x\)、\(y\) 为数，且 \(h = 1\)。
由 falling factorial 与 \(2\) 项式系数的关系，
\[
\begin{aligned}
  \operatorname{fa} {(x + y, m; 1)}
  = \sum_{0 \leqslant i \leqslant m} {
    \dbinom{m}{i}
    \operatorname{fa} {(x, m - i; 1)}
    \operatorname{fa} {(y, i; 1)}
  },
\end{aligned}
\]
即
\[
\begin{aligned}
  m! \dbinom{x + y}{m}
  = {} &
  \sum_{0 \leqslant i \leqslant m} {
    \dbinom{m}{i}
    (m - i)! \dbinom{x}{m - i}
    i! \dbinom{y}{i}
  }
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant m} {
    \dbinom{m}{i} (m - i)! i!
    \dbinom{x}{m - i}
    \dbinom{y}{i}
  }
  \\
  = {} & \sum_{0 \leqslant i \leqslant m} {
    m!
    \dbinom{x}{m - i}
    \dbinom{y}{i}
  }
  \\
  = {} & m! \sum_{0 \leqslant i \leqslant m} {
    \dbinom{x}{m - i}
    \dbinom{y}{i}
  }.
\end{aligned}
\]
所以，若我们在等式的 \(2\) 边消去 \(m! \neq 0\)，则

::: theorem [Zhū–Vandermonde 恒等式]
设 \(x\)、\(y\) 是数。
设 \(m\) 是非负整数。
则
\[
\begin{aligned}
  \dbinom{x + y}{m}
  = \sum_{0 \leqslant i \leqslant m} {\dbinom{x}{m - i} \dbinom{y}{i}}.
\end{aligned}
\]
:::

另一方面，取 \(h = 0\)：

::: theorem [\(2\) 项式展开]
设 \(x\)、\(y\) 是 \(s\) 级阵，
且 \(x y = y x\)。
设 \(m\) 是非负整数。
则
\[
\begin{aligned}
  (x + y)^m = \sum_{0 \leqslant i \leqslant m} {\dbinom{m}{i} x^{m-i} y^i}.
\end{aligned}
\]
:::

注意，若 \(x y \neq y x\)，则这不一定是对的。

::: example
设 \(A\)、\(B\) 是 \(s\) 级阵。
取 \(m = 2\)。
则由分配律，
\[
\begin{aligned}
  (A + B)^2
  = {} &
  (A + B) (A + B)
  \\
  = {} &
  A (A + B) + B (A + B)
  \\
  = {} &
  (A A + A B) + (B A + B B)
  \\
  = {} &
  A^2 + A B + B A + B^2.
\end{aligned}
\]
注意，
\(\dbinom{2}{2} = \dbinom{2}{0} = 1\)，
且
\(\dbinom{2}{1} = 2\)。
则
\[
\begin{aligned}
  (A + B)^2 - \sum_{0 \leqslant i \leqslant 2} {\dbinom{2}{i} A^{2-i} B^i}
  = {} &
  (A^2 + A B + B A + B^2) - (A^2 I + 2 A B + I B^2)
  \\
  = {} &
  B A - A B.
\end{aligned}
\]
由此可见，
能以 \(2\) 项式展开计算 \((A + B)^2\)，
相当于 \(A B = B A\)。
:::
