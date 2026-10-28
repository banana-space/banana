---
title: 勾股方程
categories: [初等数论]
navboxes: [初等数论]
---

<problems>
- “通解与解的数量”一节中勾股方程通解的定理缺少证明。
- “勾股方程的通解”定理似乎还需要乘以公共因子 $k$ 并允许交换 $a$、$b$，例如 $(9, 12, 15)$ 不能写成所给的形式。
</problems>

**勾股方程**是[[初等数论]]的一个重要方程，
因其正整数解可代表直角三角形三边长度均为整数的情况而得名。

## 定义

::: definition [勾股方程]
勾股方程是如下形式的方程
\[
a^2 + b^2 = c^2, \qquad a, b, c \in \mathbb{Z}.
\]
:::

将解用 $(a, b, c)$ 的形式表示，则比如 $(3, 4, 5)$，$(5, 12, 13)$
都是勾股方程的一个解。

## 性质

::: theorem
若 $(a, b, c)$ 是勾股方程的一个解，则：
\[
(\pm a, \pm b, \pm c) \\
(\pm b, \pm a, \pm c)
\]
均为勾股方程的解。
:::

证明显然，代入定义即可。

::: theorem [归约单位圆上有理点]
若 $c \neq 0$，则勾股方程与下列方程等价：
\[
x^2 + y^2 = 1, \qquad x, y \in \mathbb{Q}.
\]
称 $(x, y)$ 是该单位圆上的有理点。
:::

::: proof
充分性：令 $x = \frac{a}{c}, y = \frac{b}{c}$ 即可。

必要性：设 $x = \frac{p_1}{q_1}, y = \frac{p_2}{q_2}$，
其中 $p_i, q_i \in \mathbb{Z}$ 且 $p_i$ 与 $q_i$ [[互素]]。代回原方程可得
\[
\begin{aligned}
  \frac{p_1^2}{q_1^2} + \frac{p_2^2}{q_2^2} &= 1 \\
  (p_1q_2)^2 + (p_2q_1)^2 &= (q_1q_2)^2.
\end{aligned}
\]
令 $a = p_1q_2, b = p_2q_1, c = q_1q_2$ 即可。
:::

这也说明单位圆上的任意一个有理点 $(x, y)$，$x$ 和 $y$ 的最简分数表示具有相同的分母。

## 通解与解的数量

::: theorem [勾股方程的通解]
勾股方程的全体通解可表示为
\[
\begin{aligned}
  a &= u^2 - v^2 \\
  b &= 2uv \\
  c &= u^2 + v^2,
\end{aligned}
\]
其中 $(u, v) \in \mathbb{Z}^2 / {\sim}, (u, v) \sim (-u, -v)$。
:::

::: theorem [圆上的整点数量]
令 $n$ 为正整数，则方程
\[
x^2 + y^2 = n
\]
的整数解有 $4\sum_{d \mid n}\chi(d)$ 个，其中
\[
\chi(d) =
\begin{cases}
  1 & d \equiv 1 \pmod{4} \\
  0 & d \equiv 0 \pmod{2} \\
  -1 & d \equiv -1 \pmod{4}
\end{cases}.
\]
:::
