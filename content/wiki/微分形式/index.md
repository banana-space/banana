---
title: 微分形式
aliases: [1-形式, 2-形式]
categories: [微分几何]
---

**微分形式**是[[光滑流形|流形]]上的一种几何对象，
它的主要用处之一是在流形上以[[坐标无关]]的形式定义[[积分]]。
在[[局部坐标]] $x^1, \dotsc, x^n$ 下，形如
\[
\omega = f \, dx^{i_1} \wedge \cdots \wedge dx^{i_k}
\]
的表达式被称为微分形式（@eg-local-expression），
其中 $i_1 < \cdots < i_k$，并且 $f$ 是流形到 $\mathbb{R}$ 的光滑函数。
这也给[[微积分]]中[[无穷小量]]的记号（例如 $dx$）
赋予了几何意义。

微分形式与流形的[[拓扑空间|拓扑]]有着密切联系。
事实上，[[de Rham 上同调|de Rham 定理]]说明，
流形的[[奇异上同调|上同调]]同构于其 [[de Rham 上同调]]，
即[[闭形式]]的空间商掉[[恰当形式]]的空间。

## 定义

::: definition [微分形式]
设 $X$ 是 $n$ 维[[光滑流形]]，
$0 \leq k \leq n$ 是整数。
$X$ 上的**微分 $k$-形式**，
或简称 **$k$-形式**，
是指 $X$ 的[[余切丛]]的 $k$ 次[[外积]]
\[
\wedge^k (T^* X)
\]
的一个光滑[[截面]]。

$X$ 上所有 $k$-形式构成的[[线性空间]]通常记为
$\mathcal{A}^k (X)$ 或 $\Omega^k (X)$。
:::

::: remark [Euclid 空间上的微分形式] {@eg-local-expression}
当 $X = \mathbb{R}^n$ 时，$X$ 上的 $k$-形式一定能写成以下形式：
\[
\omega = \sum_{1 \leq i_1 < \cdots < i_k \leq n}
f_{i_1, \, \dotsc, \, i_k} \,
dx^{i_1} \wedge \cdots \wedge dx^{i_k},
\]
其中 $f_{i_1, \, \dotsc, \, i_k} \colon X \to \mathbb{R}$ 是光滑函数。

对一般的流形 $X$，在[[局部坐标]]下
（通过 @def-pullback 将微分形式拉回到 Euclid 空间上），
$X$ 上的微分形式也具有上面的形式。
:::

## 操作

### 拉回

::: definition [拉回] {@def-pullback}
设 $f \colon X \to Y$ 是光滑流形之间的[[光滑映射]]，
设 $\omega$ 是 $Y$ 上的 $k$-形式。
则由[[余切丛]]的拉回映射
\[
f^{\sharp} \colon f^* (T^* Y) \to T^* X
\]
诱导其外代数的映射，从而诱导其外代数的全局截面的映射，记为
\[
f^* \colon \mathcal{A}^k (Y) \to \mathcal{A}^k (X).
\]
微分形式 $\omega$ 在该映射下的像 $f^* \omega$
称为 $\omega$ 沿 $f$ 的**拉回**。
:::

::: remark [拉回的坐标表示]
若 $x^1, \dotsc, x^n$ 为 $X$ 的[[局部坐标]]，
$y^1, \dotsc, y^m$ 为 $Y$ 的局部坐标，且对 $y \in Y$ 有
\[
\omega (y) = \sum_{1 \leq j_1 < \cdots < j_k \leq m}
g_{j_1, \, \dotsc, \, j_k} (y) \,
dy^{j_1} \wedge \cdots \wedge dy^{j_k},
\]
那么
\[
f^* \omega (x) = \sum_{
  \substack { 1 \leq i_1 < \cdots < i_k \leq n \\
  1 \leq j_1 < \cdots < j_k \leq m }
} {}
g_{j_1, \, \dotsc, \, j_k} (f(x)) \,
\biggl| \frac {
  \partial y^{j_1, \, \dotsc, \, j_k}
} {
  \partial x^{i_1, \, \dotsc, \, i_k}
} (x) \biggr| \,
dx^{i_1} \wedge \cdots \wedge dx^{i_k},
\]
其中
$\bigl| \frac {
    \partial y^{j_1, \, \dotsc, \, j_k}
  } {
    \partial x^{i_1, \, \dotsc, \, i_k}
  } (x) \bigr|$
表示 $f$ 在 $x$ 处的 [[Jacobi 矩阵]]中相应的 $k$ 阶[[子式]]。
:::

### 外微分

::: definition [外微分] {@def-exteriorproduct}
设 $X$ 是光滑流形。
$X$ 上微分形式的**外微分**是 $\mathcal{A}^\bullet (X)$ 上的一组算子 $d$：
\[
\mathcal{A}^0(X)\overset{d}\longrightarrow
\mathcal{A}^1(X)\overset{d}\longrightarrow
\mathcal{A}^2(X)\overset{d}\longrightarrow
\cdots,
\]
它由如下性质唯一决定：

- 如果 $f \in \mathcal{A}^0 (X) \simeq C^\infty (X)$，
  那么对 $X$ 上任意[[向量场]] $v \in \Gamma(TX)$，有
  \[
  d f (v) = v (f),
  \]
  其中 $v (f)$ 表示[[方向导数]]。

- 如果 $f \in \mathcal{A}^0 (X) \simeq C^\infty (X)$，
  那么
  \[
  d d f = 0.
  \]

- $d$ 是 $\mathcal{A}^\bullet (X)$ 上的[[导子|分次导子]]：
  如果 $\alpha \in \mathcal{A}^p (X)$，
  且 $\beta \in \mathcal{A}^q (X)$，那么
  \[
  d (\alpha \wedge \beta)
  = d \alpha \wedge \beta
  + (-1)^p \, \alpha \wedge d \beta.
  \]

:::

::: remark
@def-exteriorproduct 迫使外微分 $d$ 由以下公式给出：
设在局部坐标下有
\[
\omega = \sum_{1 \le i_1 < \cdots < i_k \le n}
f_{i_1,\cdots,i_k} \,
dx^{i_1}\wedge\cdots\wedge dx^{i_k},
\]
其中 $f_{i_1, \, \dotsc, \, i_k} \colon X \to \mathbb{R}$ 是光滑函数，
那么
\[
d \omega
=\sum_{1\le i_1<\cdots<i_k\le n} \sum_{i=1}^n
\frac{\partial f_{i_1,\cdots,i_k}}{\partial x^i} \,
dx^i\wedge dx^{i_1}\wedge\cdots\wedge dx^{i_k}.
\]
:::

### 积分

::: definition [紧支微分形式]
设 $X$ 是光滑流形，$\omega \in \mathcal{A}^\bullet (X)$。
则 $\omega$ 称为**紧支**的，如果其支集
\[
\operatorname{supp} \omega =
(\{ x \in X \mid \omega (x) \neq 0 \}
\text{ \small 的闭包})
\]
是[[紧集]]。$X$ 上所有紧支形式的空间记为 $\mathcal{A}_0^\bullet (X)$。
:::

::: definition [微分形式的积分]
设 $X$ 是 $n$ 维[[定向|已定向]]光滑流形。
$X$ 上微分形式的**积分**是一个[[线性映射]]
\[
\begin{aligned}
  \int_X \colon \mathcal{A}_0^n (X) & \rightarrow \mathbb{R}, \\
  \omega & \mapsto \int_X \omega,
\end{aligned}
\]
其中 $\mathcal{A}_0^n (X)$ 是 $X$ 上紧支 $n$-形式的空间，
它由如下性质唯一确定：

- 如果 $\varphi \colon \mathbb{R}^n \hookrightarrow X$ 是保持定向的局部坐标，
  且 $\omega \in \mathcal{A}_0^n (\mathbb{R}^n)$ 能写成
  \[
  \omega = f \, dx^1 \wedge \cdots \wedge dx^n,
  \]
  那么
  \[
  \int_X \omega = \int_{\mathbb{R}^n} f \, dx^1 \cdots dx^n,
  \]
  这里，
  右边是 $\mathbb{R}^n$ 上紧支函数 $f$ 的 [[Riemann 积分]]或 [[Lebesgue 积分]]（二者结果相同）。

通过积分是线性映射这一条件，
利用[[单位分解]]，就能确定 $X$ 上任一 $n$-形式的积分。
:::

::: remark
对于非紧支的微分形式，
或非光滑（但至少需要 [[Lebesgue 测度|Lebesgue]] [[可测函数|可测]]）的微分形式，
也能定义积分：在 $n$ 维已定向流形上，每个 $n$-形式对应了一个[[符号测度]]，
该符号测度的积分（如果收敛）就是该微分形式的积分。
:::

::: remark
在不可定向流形上，也能定义积分。
此时，微分形式的概念要换成[[密度 (微分几何)|密度]]的概念。
:::

### 缩并

::: definition [缩并]
设 $X$ 是光滑流形，
$\omega \in \mathcal{A}^k (X)$。
设 $v$ 是 $X$ 上的一个[[向量场]]。
定义 $\omega$ 关于 $v$ 的**缩并**为
$\iota_v(\omega)\in \mathcal{A}^{k-1} (X)$，
满足对任意向量场 $v_1,\cdots,v_{k-1}$，
有
\[
\iota_v(\omega) \left( v_1,\cdots,v_{k-1} \right) =
\omega(v,v_1,\cdots,v_{k-1}).
\]
也即，
$\iota_v(\omega)$ 是 $v$ 和 $\omega$ 的第一分量的[[张量缩并]]。
:::

有如下性质成立：

::: proposition
设 $\alpha\in\mathcal{A}^p(X)$，
那么

- $\iota_v \circ \iota_v (\alpha) = 0$；

- $\iota_v(\alpha\wedge\beta)
  =\iota_v(\alpha)\wedge\beta
  +(-1)^{p}\alpha\wedge\iota_v(\beta)$。

:::

缩并也可以和外微分（@def-exteriorproduct）
以及 [[Lie 导数]]联系，
这就是[[Cartan 公式]]。

```terms
微分形式:
  en: differential form
  de: Differentialform
  fr: forme différentielle
  grc: διαφορικὴ μορφή
  la: forma differentialis
```
