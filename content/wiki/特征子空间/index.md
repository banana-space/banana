---
title: 特征子空间
aliases: [广义特征子空间]
categories: [线性代数]
navboxes: [线性代数]
---

在[[线性代数]]中，
[[线性变换]]的**特征子空间**是指由同一[[特征值]]的所有[[特征向量]]以及零向量构成的[[子向量空间]]。
线性变换在其特征子空间上的作用就是纯粹的标量乘法：
对特征子空间中的每个向量 $v$，均有 $f(v) = \lambda v$，
其中 $\lambda$ 是对应的特征值。

在有限维向量空间中，
若线性变换[[可对角化]]，则全空间可分解为特征子空间的[[直和]]。
对于一般情形，特征子空间的直和可能小于全空间，
但全空间仍可分解为**广义特征子空间**的直和，
从而给出 [[Jordan 标准型]]。
此时，广义特征子空间是 Jordan 标准型中同一特征值的所有 Jordan 块对应的子空间的直和。

## 定义

### 特征子空间

::: definition [特征子空间、几何重数]
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]，
$f \colon V \to V$ 是 $V$ 上的[[线性变换]]。

设 $\lambda \in k$。
称 $V$ 的子空间
\[
V_\lambda = \ker(f - \lambda I)
= \{ v \in V \mid f(v) = \lambda v \}
\]
为 $f$ 关于 $\lambda$ 的**特征子空间**。
若 $V_\lambda \neq \{0\}$，则 $\lambda$ 是 $f$ 的[[特征值]]，
且 $V_\lambda$ 中的非零向量就是 $\lambda$ 的[[特征向量]]。

若 $V$ 是有限维向量空间且 $\lambda$ 是 $f$ 的特征值，
则 $V_\lambda$ 的[[维数]]称为特征值 $\lambda$ 的
**几何重数**。
:::

### 广义特征子空间

::: definition [广义特征子空间]
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]，
$f \colon V \to V$ 是 $V$ 上的[[线性变换]]。

设 $\lambda \in k$。
称 $V$ 的子空间
\[
V_{[\lambda]}
= \bigcup_{m \ge 1} \ker \bigl( (f - \lambda I)^m \bigr)
\]
为 $f$ 关于 $\lambda$ 的**广义特征子空间**，
其中的元素称为**广义特征向量**。

若 $V$ 是有限维向量空间，设 $n = \dim V$，则
\[
V_{[\lambda]} = \ker \bigl( (f - \lambda I)^n \bigr).
\]
:::

由定义知 $V_\lambda \subset V_{[\lambda]}$，
但反向的包含不一定成立（见下文二维 [[Jordan 块]]的例子）。

## 例子

- 设 $f \colon k^n \to k^n$ 由对角矩阵
  $\operatorname{diag} (\lambda_1, \ldots, \lambda_n)$ 给出。
  对每个特征值 $\lambda$，
  其特征子空间由 $\lambda$ 所在的坐标的标准基向量张成，
  维数等于 $\lambda$ 在对角线上出现的次数。
  此时几何重数等于[[特征值|代数重数]]。

- 设 $f \colon V \to V$ 是[[投影算子]]，即 $f^2 = f$。
  则 $f$ 的特征值只有 $0$ 和 $1$，
  特征子空间分别为 $\ker f$ 和 $\operatorname{im} f$，
  且 $V = \ker f \oplus \operatorname{im} f$。

- 设 $f \colon k^2 \to k^2$ 由矩阵
  \[
  \begin{pmatrix}
    \lambda & 1 \\
    0       & \lambda
  \end{pmatrix}
  \]
  给出（二维 [[Jordan 块]]）。
  此时特征子空间 $V_\lambda$ 的维数为 $1$
  （由第一个标准基向量张成），
  但广义特征子空间 $V_{[\lambda]}$ 是整个 $k^2$。

- 在[[光滑函数]]空间 $C^\infty(\mathbb{R})$ 上，
  微分算子 $d / dx$ 以指数函数 $\mathrm{e}^{\lambda x}$
  为特征向量，对应的特征子空间是一维的。

## 性质

### 基本性质

::: proposition
设 $\lambda_1, \ldots, \lambda_r$ 是 $f$ 的两两不同的特征值。
则特征子空间的和是直和：
\[
V_{\lambda_1} + \cdots + V_{\lambda_r}
= V_{\lambda_1} \oplus \cdots \oplus V_{\lambda_r}.
\]
:::

::: proof
只需证明：若从各 $V_{\lambda_i}$ 中取向量 $v_i$
使得 $v_1 + \cdots + v_r = 0$，则每个 $v_i = 0$。
对 $r$ 归纳。
当 $r = 1$ 时结论显然。
假设结论对少于 $r$ 个特征值的情形成立。
设 $v_1 + \cdots + v_r = 0$ 且 $v_i \in V_{\lambda_i}$。
将 $f$ 作用于该等式，得
$\lambda_1 v_1 + \cdots + \lambda_r v_r = 0$。
再将原等式乘以 $\lambda_r$，减去上式，得
\[
(\lambda_r - \lambda_1) v_1 + \cdots
+ (\lambda_r - \lambda_{r-1}) v_{r-1} = 0.
\]
对每个 $i < r$，向量 $(\lambda_r - \lambda_i) v_i$
仍属于 $V_{\lambda_i}$。
由归纳假设（应用于 $r-1$ 个特征值），
得 $(\lambda_r - \lambda_i) v_i = 0$ 对所有 $i < r$ 成立。
因为 $\lambda_r \neq \lambda_i$，故 $v_i = 0$ 对所有 $i < r$ 成立。
代入原等式得 $v_r = 0$。
因此特征子空间的和是直和。
:::

### 几何与代数重数

以下假设 $V$ 是有限维向量空间，
且 $f$ 的特征多项式在 $k$ 上分裂。

对每个特征值 $\lambda$，其代数重数定义为
特征多项式中因子 $(x - \lambda)$ 的重数。
则有不等式
\[
1 \le \dim V_\lambda = \text{几何重数}
\le \dim V_{[\lambda]} = \text{代数重数}.
\]
其中第一个不等号是因为 $\lambda$ 是特征值，故存在非零特征向量；
第二个不等号来自包含关系 $V_\lambda \subset V_{[\lambda]}$。

这一关系在 [[Jordan 标准型]]的观点下是明显的：
几何重数等于特征值 $\lambda$ 的 Jordan 块个数，
而代数重数等于这些 Jordan 块的大小之和。

### 广义特征子空间分解

::: theorem [广义特征子空间分解]
设 $V$ 是有限维向量空间，
$f \colon V \to V$ 是线性变换，
且 $f$ 的特征多项式在 $k$ 上分裂。
则
\[
V = \bigoplus_{\lambda} V_{[\lambda]},
\]
其中 $\lambda$ 取遍 $f$ 的所有特征值。
:::

每个广义特征子空间 $V_{[\lambda]}$ 是 $f$ 的不变子空间，
且 $f|_{V_{[\lambda]}} - \lambda I$ 是[[幂零变换]]。
将每个 $V_{[\lambda]}$ 进一步分解为 [[Jordan 块]]的直和，
即得 [[Jordan 标准型]]。

```terms
特征子空间:
  en: eigenspace
  de: Eigenraum :m
  fr: sous-espace propre :m
广义特征子空间:
  en: generalized eigenspace
  de: verallgemeinerter Eigenraum :m
  fr: sous-espace propre généralisé :m
几何重数:
  en: geometric multiplicity
  de: geometrische Vielfachheit :f
  fr: multiplicité géométrique :f
```
