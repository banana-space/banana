---
title: 联络
categories: [微分几何]
notices:
  - name: 问题
    items:
      - “通过协变导数”一节缺少一般纤维丛上联络的定义。
      - “通过平行移动”“联络形式”“曲率”各节需要扩充。
---

**联络**是[[纤维丛]]上的一种额外结构。
一个联络给出了一种把相邻的[[纤维]]等同起来的方式，
即相邻的纤维之间相互“联络”的方式。
这种等同方式提供了以下的操作：

- **[[协变导数]]**——
  我们可以对纤维丛的[[截面]]求方向导数，
  而不依赖于坐标选取。
  通过这种方式，我们可以定义[[向量场]]、[[微分形式]]等几何对象的方向导数。

- **[[平行移动]]**——
  我们可以把纤维沿着一条曲线转移到别的纤维上，
  转移的方式是沿着曲线，不断地将相邻的纤维等同起来。

- **水平子空间**——
  纤维丛的全空间的[[切空间]]可以分成两个子空间的直和：
  **竖直子空间**，即纤维的切空间，
  和**水平子空间**，
  也就是从该点指向它周围的纤维上对应的点的那些向量张成的空间。

反过来，这三者中的任一个都能给出联络的所有信息。
因此，这三种观点事实上能给出联络的三种等价定义。

此外，在代数几何中可以在更一般的空间上谈论联络，
上述构造也被模仿，参见[[联络 (代数几何)]]。

## 定义

::: notation [$\mathbb{K}$]
在这一节，我们记 $\mathbb{K}$ 为 $\mathbb{R}, \mathbb{C}, \mathbb{H}$ 之一。
:::

### 通过协变导数

::: definition [向量丛上的联络] {@def-connection-vector-bundle}
设 $X$ 是[[光滑流形]]，
$p \colon E \to X$ 是[[光滑向量丛|光滑 $\mathbb{K}$-向量丛]]。
定义 $E$ 上的一个**联络**为一个映射
\[
\begin{aligned}
  \nabla \colon \Gamma (TX) \otimes \Gamma (E) &\to \Gamma (E), \\
  (v, s) &\mapsto \nabla_v s,
\end{aligned}
\]
称为**协变导数**，
它的含义是将 $E$ 的截面 $s$ 关于 $X$ 上的向量场 $v$ 求方向导数，
并满足以下公理：

- $\nabla_v s$ 关于 $v$ 是 $C^\infty (X)$-线性的，
  关于 $s$ 是 $\mathbb{K}$-线性的。

- （**[[Leibniz 法则]]**）
  如果 $v \in \Gamma (TX)$，$s \in \Gamma (E)$，
  $f \in C^\infty (X, \mathbb{K})$，那么
  \[
  \nabla_v (fs) = (vf) \, s + f \, \nabla_v s.
  \]

:::

::: remark
在 @def-connection-vector-bundle 中，
联络 $\nabla$ 也可以看成是一个映射
\[
\begin{aligned}
  \nabla \colon \Gamma (E) & \to \Omega^1 (X, E), \\
  s & \mapsto \nabla s,
\end{aligned}
\]
其中 $\nabla s$ 是 $E$-取值的 [[微分形式|$1$-形式]]
（即 $T^* X \otimes E$ 的截面），
它对向量场 $v$ 的取值是 $\nabla_v s$。
此时，Leibniz 法则可以写成
\[
\nabla (fs) = df \otimes s + f \, \nabla s.
\]
:::

### 通过平行移动

### 通过水平子空间

#### 对主丛

::: definition
设 $G$ 是 [[Lie 群]]，
$P \to M$ 是光滑 $G$-[[主丛]]。
记 $V \subset T P$ 为**竖直子丛**，
也就是由纤维的切空间构成的子丛。

$P$ 上的**联络**是子丛 $H \subset T P$，称为**水平子丛**，满足

- $T P = H \oplus V$。
  这是指在每点 $x \in P$，向量空间 $T_x P$ 都是子空间 $H_x$ 与 $V_x$ 的直和。

- 子丛 $H$ 与 $G$-作用相容：
  对 $g \in G$ 和 $x \in P$，
  记 $R_g \colon P \to P$ 为元素 $g$ 的作用。
  则要求切映射 $dR_g \colon T_x P \to T_{xg} P$
  将 $H_x$ 映到 $H_{xg}$。

:::

#### 对纤维丛

::: definition
设 $p \colon E \to M$ 是光滑[[纤维丛]]。
记 $V \subset T E$ 为**竖直子丛**，
也就是由纤维的切空间构成的子丛。

$E$ 上的**联络**是子丛 $H \subset T E$，称为**水平子丛**，满足 $T E = H \oplus V$。
:::

## 联络形式

## 曲率

```terms
联络:
  en: connection
  de: Zusammenhang :m
  fr: connexion :f
```
