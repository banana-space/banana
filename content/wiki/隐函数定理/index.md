---
title: 隐函数定理
categories: [微分几何]
navboxes: [微积分学]
---

在[[微积分]]中，
**隐函数定理**表明在适当的条件下，
一个函数的[[零点集]]可以被视为另一个函数的[[图像]]，
后者被称为由前者确定的**隐函数**。

## 定理和证明

::: theorem [隐函数定理]
设 $U \subset \mathbb{R}^{m+n}$ 是[[开集]]，
$F \colon U \to \mathbb{R}^n$ 是一个 [[连续可微映射|$C^p$ 映射]]。
假设 $(x_0, y_0) \in U$
（其中 $x_0 \in \mathbb{R}^m$，$y_0 \in \mathbb{R}^n$）
满足 $F (x_0, y_0) = 0$，
且 $\frac{\partial F}{\partial y} (x_0, y_0)$
是 $n$ 阶[[可逆矩阵]]。
则存在 $(x_0, y_0)$ 的邻域 $U_x \times U_y \subset U$，
以及 $C^p$ 函数 $f \colon U_x \to U_y$，使得
\[
F (x, y) = 0 \iff y = f(x),
\]
其中 $x \in U_x$，$y \in U_y$。
并且，若 $y = f(x)$，则
\[
f' (x) =
- \biggl( \frac{\partial F}{\partial y} (x, y) \biggr)^{-1}
\biggl( \frac{\partial F}{\partial x} (x, y) \biggr).
\]
:::

::: proof
定义映射 $G \colon U \to \mathbb{R}^{m+n}$，
\[
G (x, y) = \bigl( x, \ F (x, y) \bigr).
\]
由[[反函数定理]]，$G$ 有局部逆映射。
具体地说，存在 $(x_0, y_0)$ 的邻域 $V = U_x \times U_y \subset U$，
以及 $(x_0, 0)$ 的邻域 $W \subset \mathbb{R}^{n+m}$，
使得 $G|_V$ 具有 $C^p$ 的逆映射
$G^{-1} \colon W \to V$。则 $G^{-1}$ 一定具有如下形式：
\[
G^{-1} (u, v) = \bigl( u, \ H (u, v) \bigr),
\]
其中 $H \colon W \to U_y$ 是 $C^p$ 映射。
我们可以适当缩小 $U_x$，将它替换为 $(U_x \times \{ 0 \}) \cap W$，
并对应修改 $W$ 为 $G (U_x \times U_y)$，
这样就有 $U_x \times \{ 0 \} \subset W$。
我们只需要定义
\[
f(x) = H(x, 0),
\]
其中 $x \in U_x$，即满足定理的要求。

至于 $f'$ 的表达式，反函数定理给出分块矩阵的等式
\[
1_{m+n}
=
(G^{-1})' \, G'
=
\begin{pmatrix}
  1_m & 0_{m \times n} \\[6pt]
  \dfrac{\partial H}{\partial u} &
  \dfrac{\partial H}{\partial v}
\end{pmatrix}
\begin{pmatrix}
  1_m & 0_{m \times n} \\[6pt]
  \dfrac{\partial F}{\partial x} &
  \dfrac{\partial F}{\partial y}
\end{pmatrix} .
\]
注意到 $f' = \frac{\partial H}{\partial u}$。
考虑等式的右下分块，得到
$\frac{\partial H}{\partial v} =
  \bigl( \frac{\partial F}{\partial y} \bigr)^{-1}$。
再考虑等式的左下分块，就得到了计算 $f'$ 的公式。
:::

```terms
隐函数定理:
  en: implicit function theorem
```
