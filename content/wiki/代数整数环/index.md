---
title: 代数整数环
categories: [代数数论]
---

数域 $K$ 的**代数整数环** $\mathcal{O}_K$ 是其中所有[[代数整数]]构成的环，
也是 $\mathbb{Z}$ 在 $K$ 中的[[整同态|整闭包]]。

$\mathcal{O}_K$ 是[[代数数论]]的重要研究对象。$\mathcal{O}_K$ 是 [[Dedekind 整环]]，
这推出它中的非零[[理想]]有唯一分解。但 $\mathcal{O}_K$ 本身不一定唯一分解，
这失败程度由[[类群]]衡量。

## 基本性质

下面约定 $n = [K : \mathbb{Q}]$。

::: theorem {@span}
$\mathcal{O}_K$ [[线性生成空间|张成]] $K$（$K$ 作为 $\mathbb{Q}$-向量空间）。
:::

::: proof
对 $a \in K$，设 $p(x) = c_d x^d + c_{d-1} x^{d-1} + \cdots + c_0$
是其在 $\mathbb{Q}$ 上的[[极小多项式|最小多项式]]。不妨 $p(x) \in \mathbb{Z}[x]$，这样
$q(x) = c_d^{d - 1} p(x / c_d)$ 首一且整系数，且 $q(c_d a) = 0$，
于是 $c_d a \in \mathcal{O}_K$，即每个 $K$ 的元素都有某非零整数倍在 $\mathcal{O}_K$ 中，
于是显然 $\mathcal{O}_K$ 张成 $K$。
:::

回忆[[迹 (域论)|迹]]映射 $\mathrm{tr} \colon K \to \mathbb{Q}$。

::: lemma {@trace-integer}
对 $x \in \mathcal{O}_K$，$\mathrm{tr}(x) \in \mathbb{Z}$。
:::

::: proof
设 $x$ 的最小多项式为 $x^d - c_1 x^{d-1} + \cdots + (-1)^d c_d$。
那么简单的域论告诉我们 $\mathrm{tr}(x) = (n/d) c_1$。由于
$n/d = [K : \mathbb{Q}(x)]$ 是整数，$c_1$ 是整数，所以 $\mathrm{tr}(x)$ 是整数。
:::

::: theorem [$\mathbb{Z}$-模结构] {@Z-mod}
作为 $\mathbb{Z}$-模，$\mathcal{O}_K$ 同构于 $\mathbb{Z}^n$。
:::

::: proof
由 @span，可取一组 $\mathbb{Q}$-线性无关的
$a_1, a_2, \ldots, a_n \in \mathcal{O}_K$。对
$x = c_1 a_1 + c_2 a_2 + \cdots + c_n a_n \in \mathcal{O}_K$，
我们来说明 $c_i$ 的分母有界。由 @trace-integer，
知对每个 $i$ 有 $\mathrm{tr}(x a_i) \in \mathbb{Z}$，即
\[
\begin{pmatrix}
  \mathrm{tr}(a_1 a_1) & \mathrm{tr}(a_1 a_2) & \cdots & \mathrm{tr}(a_1 a_n)\\
  \mathrm{tr}(a_2 a_1) & \mathrm{tr}(a_2 a_2) & \cdots & \mathrm{tr}(a_2 a_n)\\
  \vdots       & \vdots       & \ddots & \vdots      \\
  \mathrm{tr}(a_n a_1) & \mathrm{tr}(a_n a_2) & \cdots & \mathrm{tr}(a_n a_n)
\end{pmatrix}
\begin{pmatrix}
  c_1 \\ c_2 \\ \vdots \\ c_n
\end{pmatrix}
\in \mathbb{Z}^n.
\]
记那个矩阵为 $M$，则两边左乘[[伴随矩阵]] $\mathrm{adj}(M)$ 得
\[
\det(M)
\begin{pmatrix}
  c_1 \\ c_2 \\ \vdots \\ c_n
\end{pmatrix}
\in \mathbb{Z}^n.
\]

接下来我们只需论证 $\det(M) \ne 0$。假设 $\det(M) = 0$，
于是存在 $\vec v \in \mathbb{Z}^n \setminus \{0\}$ 满足 $Mv = 0$。
于是对任何 $\vec w \in \mathbb{Z}^n$，有
\[
\begin{pmatrix}
  w_1 & w_2 & \cdots & w_n\\
\end{pmatrix}
\begin{pmatrix}
  \mathrm{tr}(a_1 a_1) & \mathrm{tr}(a_1 a_2) & \cdots & \mathrm{tr}(a_1 a_n)\\
  \mathrm{tr}(a_2 a_1) & \mathrm{tr}(a_2 a_2) & \cdots & \mathrm{tr}(a_2 a_n)\\
  \vdots       & \vdots       & \ddots & \vdots      \\
  \mathrm{tr}(a_n a_1) & \mathrm{tr}(a_n a_2) & \cdots & \mathrm{tr}(a_n a_n)
\end{pmatrix}
\begin{pmatrix}
  v_1 \\ v_2 \\ \vdots \\ v_n
\end{pmatrix}
= 0.
\]
展开，得
\[
\mathrm{tr}((a_1 v_1 + a_2 v_2 + \cdots + a_n v_n)
(a_1 w_1 + a_2 w_2 + \cdots + a_n w_n)) = 0.
\]
记 $x = a_1 v_1 + \cdots + a_n v_n$，则 $x \ne 0$。
由于 $\vec w$ 是任意的，对所有 $y\in K$ 都有 $\mathrm{tr}(xy) = 0$，
但取 $y = x^{-1}$ 有 $\mathrm{tr}(xy) = \mathrm{tr}(1) = n$，矛盾。

故 $c_i$ 的分母均整除非零数 $\det(M)$，商模
$\mathcal{O}_K/\langle a_1, a_2, \ldots, a_n\rangle$ 有限。
于是 $\mathcal{O}_K$ 有限生成，显然它无挠。
由[[主理想整环上有限生成模的结构定理]] $\mathcal{O}_K$ 作为 $\mathbb{Z}$-模同构于 $\mathbb{Z}^n$。
:::

证明中的 $\det(M)$ 被称为 $\mathcal{O}_K$ 相对于基 $a_1, a_2, \ldots, a_n$
的**判别式**。假如 $a_1, a_2, \ldots, a_n$ 刚好生成 $\mathcal{O}_K$，
这个判别式就称为 $\mathcal{O}_K$ 的**判别式**。不难证明基的选取不影响判别式。

::: theorem
$\mathcal{O}_K$ 是 Dedekind 整环。
:::

::: proof
我们来验证 [[Dedekind 整环]]条目中第一个等价定义。
由于 $\mathcal{O}_K$ 是 $\mathbb{Z}$ 在 $K$ 中的整闭包，有 $\mathcal{O}_K$ 整闭。
由 @Z-mod 它作为 $\mathbb{Z}$-模 Noether，从而 Noether。
于是只需证它的 [[Krull 维数]]是 $1$，即非零素理想都极大。
设 $\mathfrak{p}$ 是 $\mathcal{O}_K$ 的非零素理想，$a \in \mathfrak{p} \setminus \{0\}$。
那么由 $(a) \subseteq \mathfrak{p}$ 知 $\mathfrak{p}$ 也 $\mathbb{Q}$-张成 $K$。
具体地，它包含 $n$ 个 $\mathbb{Q}$-线性无关的元素，从而 $\mathcal{O}_K/\mathfrak{p}$ 有限。
又因为有限整环皆是域，故 $\mathfrak{p}$ 极大。
:::
