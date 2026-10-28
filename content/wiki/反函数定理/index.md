---
title: 反函数定理
categories: [实分析]
navboxes: [微积分学]
---

<problems>
- “推论”一节需要扩充。
</problems>

在[[微积分]]中，
**反函数定理**给出了[[逆映射]]存在的一个[[充分条件]]。
它说明，如果一个映射的[[切映射]]（即 [[Jacobi 矩阵]]）在某一点[[可逆矩阵|可逆]]，
那么这个映射在这一点附近具有逆映射。

## 定理和证明

::: theorem [反函数定理]
设 $U \subset \mathbb{R}^n$ 是[[开集]]，
$f \colon U \to \mathbb{R}^n$ 是一个 [[连续可微映射|$C^p$ 映射]]（$1 \leq p \leq \infty$）。假设

- $f$ 在 $x_0 \in U$ 处的 [[Jacobi 矩阵]] $f' (x_0)$ 是[[可逆矩阵]]。

那么存在开集 $V \subset U$，$x_0 \in V$，
以及开集 $W \subset \mathbb{R}^n$，$f (x_0) \in W$，
使得
\[
f|_V \colon V \simeq W
\]
是 $C^p$ [[微分同胚]]。
并且，对任意 $x \in V$，
若记 $y = f(x)$，则
\[
(f^{-1})' (y) = f' (x)^{-1}.
\]
:::

::: proof
通过平移，不妨设 $x_0 = 0$ 及 $f(x_0) = 0$。
记 $A = f' (0)$，并设 $g(x) = A^{-1} f(x) - x$。
取 $0$ 的邻域 $U' \subset U$，
使得对任意 $x \in U'$，
有 $\det f' (x) \neq 0$，且 $\| g' (x) \| < 1/2$，
其中 $\| \cdot \|$ 表示[[矩阵范数]]。
则对任意 $x_1, x_2 \in U'$，有
\[
|A^{-1} f(x_1) - A^{-1} f(x_2)|
\geq |x_1 - x_2| - |g(x_1) - g(x_2)|
\geq \frac{1}{2} |x_1 - x_2|,
\]
从而 $|f(x_1) - f(x_2)| \geq C \, |x_1 - x_2|$，
其中 $C = 1/(2 \| A^{-1} \|)$。
特别地，$f|_{U'}$ 是单射。

取 $W = B_{\varepsilon C} (0)$ 为半径 $\varepsilon C$ 的开球，
其中 $\varepsilon > 0$ 取得使
$B_{\varepsilon} (0) \subset U'$。
对每个固定的 $y \in W$，考虑映射
\[
T_y (x) = x - A^{-1} (f(x) - y)
= A^{-1} y - g(x),
\]
其中 $x \in B_{\varepsilon} (0)$。
则 $x$ 是 $T_y$ 的不动点当且仅当 $f(x) = y$。
我们想证明 $T_y$ 是[[压缩映射]]，从而这样的 $x$ 存在。我们有
\[
|T_y (x)|
\leq |A^{-1} y| + |g(x)|
\leq \frac{1}{2C} |y| + \frac{1}{2} |x|
< \varepsilon,
\]
其中我们使用了 $|y| < \varepsilon C$。
这说明 $T_y (B_{\varepsilon} (0)) \subset B_{\varepsilon} (0)$。
另一方面，对任意 $x_1, x_2 \in B_{\varepsilon} (0)$，有
\[
|T_y (x_1) - T_y (x_2)| = |g(x_1) - g(x_2)|
\leq \frac{1}{2} |x_1 - x_2|,
\]
这里我们使用了 $\| g' (x) \| < 1/2$。
这说明 $T_y \colon B_{\varepsilon} (0) \to B_{\varepsilon} (0)$
的确是压缩映射。
因此，$T_y$ 存在不动点，
即存在 $x \in B_{\varepsilon} (0)$，使得 $f(x) = y$。
并且，这样的不动点在 $B_{\varepsilon} (0)$ 中是唯一的。

记 $V = f^{-1} (W) \cap B_{\varepsilon} (0)$。我们已经证明 $f|_V$ 是双射。
记其逆映射为 $f^{-1} \colon W \to V$。
对 $y_1, y_2 \in W$，我们有
$|f^{-1} (y_1) - f^{-1} (y_2)| \leq (1/C) |y_1 - y_2|$。
因此，$f^{-1}$ 在 $W$ 上连续，从而 $f|_V$ 是同胚。

接下来，我们证明 $f^{-1}$ 是连续可微的，
且其导数 $(f^{-1})'$ 由定理叙述中的公式给出。
固定 $y_0 \in W$，记 $x_0 = f^{-1} (y_0) \in V$
（注意这与定理叙述中的记号不同）。
由于 $f|_V$ 是同胚，我们有
\[
\begin{aligned}
  & \lim_{y \to y_0} \frac{
    |f^{-1} (y) - f^{-1} (y_0) - f'(x_0)^{-1} (y - y_0)|
  }{|y - y_0|} \\
  ={} & \lim_{x \to x_0} \frac{
    |x - x_0 - f'(x_0)^{-1} (f (x) - f (x_0))|
  }{|f (x) - f (x_0)|} \\
  ={} & \lim_{x \to x_0} {} \biggl| f'(x_0)^{-1} \biggl( \frac{
    f(x) - f(x_0) - f'(x_0) (x - x_0)
  }{|x - x_0|} \biggr) \biggr| \cdot
  \frac {|x - x_0|} {|f (x) - f (x_0)|} \\
  ={} & 0.
\end{aligned}
\]
这说明 $f^{-1}$ 在 $y_0$ 处可微，其微分为 $f'(x_0)^{-1}$。

最后，为证明 $f^{-1}$ 是 $C^p$ 的，
我们只需证明映射 $y \mapsto f'(f^{-1} (y))^{-1}$ 是 $C^{p-1}$ 的。
这可以对 $p$ 归纳完成：
我们知道 $y \mapsto f^{-1} (y)$ 是连续（即 $C^0$）的，
$f'$ 是连续的，$(-)^{-1}$ 是 $C^\infty$ 的，
所以这三个映射的复合 $y \mapsto f'(f^{-1} (y))^{-1}$ 是 $C^0$ 的，
从而 $f^{-1}$ 是 $C^1$ 的。
如果 $f$ 还是 $C^2$ 的，那么 $f'$ 是 $C^1$ 的，同理知
$y \mapsto f'(f^{-1}(y))^{-1}$ 是 $C^1$ 的，从而 $f^{-1}$ 是 $C^2$ 的，
以此类推。
:::

::: corollary [流形上的反函数定理]
设 $X, Y$ 是[[光滑流形]]，
$f \colon X \to Y$ 是一个[[光滑映射]]。假设

- $f$ 在 $x_0 \in X$ 处的[[切映射]] $df_{x_0}$ 是可逆线性映射。

那么存在开集 $V \subset X$，$x_0 \in V$，
以及开集 $W \subset Y$，$f (x_0) \in W$，
使得
\[
f|_V \colon V \simeq W
\]
是[[微分同胚]]。
并且，对任意 $x \in V$，
若记 $y = f(x)$，则
\[
d(f^{-1})_y = (df_x)^{-1}.
\]
:::

## 推论

```terms
反函数定理:
  en: inverse function theorem
```
