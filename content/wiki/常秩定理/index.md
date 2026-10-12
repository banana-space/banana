---
title: 常秩定理
aliases: [秩定理]
categories: [微分几何]
navboxes: [微积分学]
---

在[[微积分]]中，
**常秩定理**说明，在合适的假设下，
[[Euclid 空间]]之间的任何[[连续可微映射]]
都能通过[[坐标变换]]，在局部上写成以下的简单形式：
\[
(x^1, \dotsc, x^m) \mapsto
(x^1, \dotsc, x^r, 0, \dotsc, 0),
\]
其中 $r$ 称为映射的**秩**。

[[反函数定理]]和[[隐函数定理]]都是常秩定理的特例。

## 定理和证明

::: theorem [常秩定理]
设 $U \subset \mathbb{R}^m$ 是[[开集]]，
$f \colon U \to \mathbb{R}^n$ 是 [[连续可微映射|$C^p$ 映射]]。
假设

- 对所有的 $x \in U$，
  [[Jacobi 矩阵]] $f' (x)$ 的[[秩]]都相同，都等于 $r$。

则对任意 $x_0 \in U$，
存在开集 $V \subset U$，$x_0 \in V$，
和开集 $W \subset \mathbb{R}^n$，$f (x_0) \in W$，
以及 $C^p$ [[微分同胚]]
\[
\begin{aligned}
  \varphi \colon && V & \to V' \subset \mathbb{R}^m, \\
  \psi \colon && W & \to W' \subset \mathbb{R}^n,
\end{aligned}
\]
使得映射
$\psi \circ f \circ \varphi^{-1} \colon V' \to W'$
具有如下形式：
\[
(v^1, \dotsc, v^m) \mapsto
(v^1, \dotsc, v^r, 0, \dotsc, 0).
\]
:::

::: proof
不妨假设 $f' (x)$ 的左上角 $r \times r$ 子矩阵可逆。
我们可以假设这对所有 $x \in U$ 成立。令
\[
\varphi (x) =
\bigl( f^1 (x), \dotsc, f^r (x), x^{r+1}, \dotsc, x^m \bigr).
\]
则 $\det \varphi' \neq 0$。
由[[反函数定理]]，$\varphi$ 在 $x_0$ 的某个邻域上是 $C^p$ 微分同胚。
并且，映射 $g = f \circ \varphi^{-1}$ 具有以下形式：
\[
g (v) = (v^1, \dotsc, v^r, g^{r+1} (v), \dotsc, g^n (v)).
\]
因为 $(\varphi^{-1})'$ 总是可逆，
所以 $g' (v) = f' ( \varphi^{-1} (v) ) \, (\varphi^{-1})' (v)$
的秩等于 $f' ( \varphi^{-1} (v) )$ 的秩 $r$。但
\[
g' (v) = \begin{pmatrix}
  1_r & 0_{r \times (m-r)} \\[6pt]
  \Bigl( \dfrac{\partial g^i}{\partial v^j} \Bigr)
    _{\substack{ i = r+1, \dotsc, n \\ j = 1, \dotsc, r }} &
  \Bigl( \dfrac{\partial g^i}{\partial v^j} \Bigr)
    _{\substack{ i = r+1, \dotsc, n \\ j = r+1, \dotsc, m }}
\end{pmatrix} ,
\]
从而右下角的子矩阵为 $0$。

设 $V' \subset \mathbb{R}^m$ 是 $\varphi(x_0)$ 的凸邻域，
使得 $\varphi^{-1} |_{V'}$ 是微分同胚。
则上述论断在 $v \in V'$ 时成立，
从而 $g(v)$ 只取决于 $v^1, \dotsc, v^r$（这用到了 $V'$ 的凸性）。令
\[
\psi (y) = \bigl( y^1, \dotsc, y^r, \
y^{r+1} - g^{r+1} (\tilde{y}), \ \dotsc, \
y^n - g^n (\tilde{y}) \bigr),
\]
其中 $y \in \mathbb{R}^n$ 使得表达式有定义，
$\tilde{y}$ 定义为 $y$ 的前 $r$ 个坐标。
则 $\det \psi' = 1$。
由[[反函数定理]]，$\psi$ 在 $f(x_0)$ 的某个邻域 $W$ 上是 $C^p$ 微分同胚。
接下来，缩小 $V'$ 使得 $g(V') \subset W$，
并令 $V = \varphi^{-1} (V')$，$W' = \psi (W)$。
则对 $v \in V'$，有
\[
\psi \circ f \circ \varphi^{-1} (v)
= \psi \circ g (v)
= (v^1, \dotsc, v^r, 0, \dotsc, 0).
\]
:::

```terms
常秩定理:
  en: constant rank theorem
```
