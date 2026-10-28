---
title: Laplace 方程
categories: [偏微分方程论]
navboxes: [偏微分方程]
---

<problems>
- “解的性质”一节需要扩充。
- 开头约定中 $\alpha(n)$ 的定义式似乎前后不一致：$\frac{2\pi^{n/2}}{\Gamma(n/2)}$ 是单位球面的面积，而右边分情形的表达式含有 $r^n$，是半径为 $r$ 的球的体积。
- “求解步骤”一节末尾和定义“基本解”中，$n\geqslant 3$ 时的基本解似乎缺少因子 $n-2$：按单位球面面积 $\alpha(n)$ 应为 $\frac{1}{(n-2)\alpha(n) r^{n-2}}$，按单位球体积 $\alpha(n)$ 应为 $\frac{1}{n(n-2)\alpha(n) r^{n-2}}$。
</problems>

::: convention
在本文中，

- $\bm{x}$、$\bm{J}$ 即粗斜体字母代表 $n$ 维列[[向量]]。
- $\mathbf{A}$、$\mathbf{O}$ 即大写粗正体字母代表[[矩阵]]，特殊地，$\mathbf{I}$ 代表[[单位矩阵]]。
- $\bm{x}^T$、$\mathbf{A}^T$ 即上标 $T$ 表示向量或矩阵的[[转置]]。
- $\left\| \bm{x} \right\|$ 表示向量 $\bm{x}$ 的 [[范数|Euclid 范数]]。
- 函数 $\alpha(n)$ 表示 $\mathbb{R}^n$ 中[[单位球面]] $S^{n-1}$ 的[[面积]]，它的定义为：
  \[
  \alpha (n) := \frac{ 2 \pi^{ \frac{n}{2} } }{ \Gamma \left( \frac{n}{2} \right) } =
  \begin{cases}
    \displaystyle \frac{ \left( 2 \pi \right)^{ n / 2 } r^n }{ n!! } ,  & n \text{是偶数}, \\
    \displaystyle \frac{ 2 \left( 2 \pi \right)^{ (n-1) / 2 } r^n }{ n!! } ,  & n \text{是奇数}.
  \end{cases}
  \]
- 矩阵 $ \mathbf{A} $ 的[[Frobenius 范数]]定义为
  \[
  \left\| \mathbf{A} \right\| = \sqrt{\operatorname{tr} (\mathbf{A}\mathbf{A}^T)}.
  \]

:::

**Laplace 方程**是一种特殊的二阶线性[[偏微分方程]]。它的形式为：
\[
-\Delta u = 0,
\]
其中 $\bm{x} \in D,  u(\bm{x},t)\colon D \to \mathbb{ R } $，
这里 $-\Delta$ 习惯上添加负号，这来自该算子的物理意义。其中
\[
\Delta = \frac{\partial^2}{\partial x_1^2} + \frac{\partial^2}{\partial x_2^2} + \cdots + \frac{\partial^2}{\partial x_n^2} = \nabla \cdot \nabla
\]
表示[[Laplace 算子]]，而 $\nabla$ 表示[[梯度算子]]。

## 物理背景

与该方程相关的物理背景很多，如[[Ohm 定律]]、[[Fourier 热传导定律]]、[[Fick 扩散定律]]等。

下面我们以导体中的平衡电场为例。设导体中某时刻达到电平衡状态，其中电场的电势场 $\phi$。
平衡状态下，对于空间 $U$ 中的一个光滑子区域 $V \subset U$，
$u$ 流过其边界 $\partial V$ 的净通量为 $0$，即电通量为 $ 0 $：
\[
\int_{\partial V} \bm{J} \cdot \bm{\nu} ~ \mathrm{d}S = 0.
\]
其中 $\bm{J}$ 表示电流密度，$\bm{\nu}$ 表示单位外[[法向量]][[向量场|场]]。
由[[Green 公式]]的散度形式，
曲面积分 $\int_{\partial V} \bm{J} \cdot \bm{\nu} ~ \mathrm{d}S$ 可以化为
\[
\int_{V} \operatorname{div} \bm{J} ~ \mathrm{d}\bm{x} = \int_{V} \nabla \cdot \bm{J} ~ \mathrm{d}\bm{x} = 0.
\]
由于 $V$ 的任意性，因此在整个 $D$ 中都有
\[
\nabla \cdot \bm{J} = 0.
\]
Ohm 定律的微分形式告诉我们：电流密度矢量 $\bm{J}$ 等于电导率 $\sigma$ 数乘电场强度矢量 $\bm{E}$，即
\[
\bm{J} = \sigma \bm{E};
\]
而电场强度与电势有如下基本关系：
\[
\bm{E} = - \nabla \phi.
\]
代入可得
\[
-\sigma \nabla \cdot \nabla \phi = 0,
\]
即
\[
- \Delta \phi = 0.
\]

## 基本解

### 求解思路

::: theorem [旋转不变性]
关于 $x\in \mathbb{R}^n$ 的函数 $u$ 满足 $- \Delta u = 0$。
记 $\mathbf{O}$ 为一个 $n\times n$ 正交阵，定义
\[
v( \bm{x} ) := u( \mathbf{O} \bm{x} ),
\]
则对函数 $v$ 也有 $- \Delta v = 0$。
:::

::: proof
不妨以记号 $\nabla^*$ 表示[[旋转]]后的[[坐标系]]中的梯度算子 $\nabla$，根据坐标变换，
原坐标 $\bm{x}$ 变换后的坐标为
\[
\bm{x}^* = \mathbf{O} \bm{x} ,
\]
因而对梯度算子也有
\[
\nabla^* = \mathbf{O} \nabla .
\]
考虑到 $ \Delta = \nabla \cdot \nabla $，则变换后的 Laplace 算子应有
\[
\Delta^* = ( \mathbf{O} \nabla ) \cdot ( \mathbf{O} \nabla )
\]
结合[[内积空间|内积]]的性质以及矩阵转置的性质，由 $\mathbf{O}^T \mathbf{O} = \mathbf{I}  $：
\[
\begin{aligned}
  \Delta^* = ( \mathbf{O} \nabla ) \cdot ( \mathbf{O} \nabla ) &= ( \mathbf{O} \nabla )^T ( \mathbf{O} \nabla ) \\
       &= \nabla^T \mathbf{O}^T \mathbf{O} \nabla \\
       &= \nabla^T \mathbf{I} \nabla \\
       &= \nabla^T \nabla = \nabla \cdot \nabla = \Delta.
\end{aligned}
\]
则坐标变换后 Laplace 算子的形式保持不变，因而满足旋转对称性。
:::

旋转对称性启发我们可以使用极坐标变换进行求解。

### 求解步骤

在上一小节中，我们论证了用极坐标变换求解的可能性存在，因此我们希望经过极坐标变换
\[
r = \left\| \bm{x} \right\|
\]
后，求得 $ u( \bm{x} ) =v( r ) $ 形式的解。

由 $r^2 = \bm{x}\bm{x}^T$，
两边同时求梯度有 $ 2r \nabla r = \nabla ( \bm{x} \bm{x}^T ) = 2 \bm{x} $。因此当 $r > 0$ 时，
\[
\Delta v = \nabla \cdot \nabla v = \nabla \left( \frac{1}{r}\frac{\mathrm{d} v}{\mathrm{d} r } \bm{x}  \right) = \frac{n}{r} \frac{\mathrm{d}v}{\mathrm{d}r} + \bm{x} \cdot \nabla\left( \frac{1}{r}\frac{\mathrm{d}v}{\mathrm{d}r} \right)
\]
整理后得到
\[
\Delta v = \frac{\mathrm{d}^2 v}{\mathrm{d}r^2} + \frac{n-1}{r} \frac{\mathrm{d}v}{\mathrm{d}r} = 0 .
\]

这是一个二阶齐次[[线性常微分方程]]，不难求解得到
\[
v(r) =
\begin{cases}
  \displaystyle -\frac{1}{2\pi} \ln r , & n = 2, \\
  \displaystyle \frac{1}{n \alpha (n) r^{n-2}}, & n\geqslant 3.
\end{cases}
\]

由此我们得到了 Laplace 方程的基本解。

## 解的性质

::: definition [基本解] {@thm:fundsol}
$\mathbb{R}^n$ 上的函数
\[
  \Phi (\bm{x}) =
\begin{cases}
  \displaystyle -\frac{1}{2\pi} \ln \left\| x \right\| , & n = 2, \\
  \displaystyle \frac{1}{n \alpha (n) \left\| x \right\|^{n-2}}, & n\geqslant 3
\end{cases}
\]
为 Laplace 方程的基本解。
:::

### 旋转对称性

根据 Laplace 方程的旋转对称性，立即有：

::: corollary
@thm:fundsol 给出的 Laplace 方程的基本解 $ \Phi(\bm{x}) $ 具有旋转对称性。
:::

### 调和性

我们称满足 Laplace 方程的函数为[[调和函数]]。因此这个基本解具有所有调和函数的性质。

### 导数性质

出于之后研究 [[Poisson 方程]]的需要，这里再列举出两个重要的模。

::: corollary
对 @thm:fundsol 给出的 Laplace 方程的基本解 $ \Phi(\bm{x}) $：

- a. 梯度的模，也即方向导数的最大值为：
  \[
  \left\| \nabla \Phi ( \bm{x} ) \right\| = \left | v^\prime \right | = \frac{1}{n \alpha (n) \left \| \bm{x} \right \| ^{n-1} };
  \]

- b. Hessian 矩阵的 Frobenius 范数
  \[
  \left\| \mathbf{H}\left[ \Phi ( \bm{x} ) \right] \right\| = \frac{\sqrt{n-1}}{\sqrt{n}\alpha (n) \left\| \bm{x} \right\|^n}.
  \]
:::
