---
title: Picard 定理
categories: [常微分方程论]
notices:
  - name: 问题
    items:
      - 本条目与[[常微分方程解的存在唯一性定理]]内容重复。
      - “Picard 定理的证明”一节中各命题缺少证明。
      - “相关结论”“近似解”“误差估计”各节需要扩充。
navboxes: [常微分方程]
---

**Picard 定理** 是[[常微分方程]]中描述局部解的存在唯一性的重要定理。

## Picard 定理

### 定理内容

::: theorem {@Picardthm}
对于一阶常微分方程

```math {@diffeqn}
\frac{\mathrm{d} y}{\mathrm{d} x} = f(x, y),
```

这里函数 $f$ 是矩形域 $ R\colon \left| x - x_0 \right|<a,\quad \left| y - y_0 \right|<b $ 上关于变量
$y$ 的 [[Lipschitz 连续映射|Lipschitz 连续函数]]，即：

存在常数 $L>0$，使得在该矩形域上任意的 $(x,y_1)$，$(x,y_2)$ 都有不等式
\[
\left| f( x, y_1 ) - f( x, y_2 ) \right| \leqslant L\left| y_1 - y_2 \right|
\]
成立；

则该微分方程必有 $\left| x-x_0 \right|\le h $ 上的唯一确定的解 $ y = \varphi (x)$，且满足初值条件

```math {@init}
\varphi (x_0) = y_0.
```

其中 $h = \min \left\{ a, b/M \right\}$，$ M = \max_{(x,y)\in R} \left| f(x,y) \right|$。
:::

### Picard 定理的证明

#### 第一步：转化方程

由于我们尚且不知道右边函数 $f$ 的性质，因此我们无法得知具体到每一点“**细致入微**”的逐点信息。
因此在证明时，我们不再直接着眼于原微分方程，
而是寄希望于把函数在区间上的形态“**统而言之**”的[[积分方程]]，即我们想找到如下积分方程的连续解：

```math {@intgeqn}
y = y_0 + \int_{x_0}^x f( t, y(t) ) \mathrm{d}t.
```

::: proposition
若 $y = \varphi (x)$ 是方程 @diffeqn 在 $[x_0,x_0+h]$ 上的连续解，
且满足初值条件 $ y_0 = \varphi (x_0)$，则它也是积分方程 @intgeqn 的连续解，反之亦然。
:::

#### 第二步：构造序列

我们将微分方程转化为了积分方程，规避了结构的不确定性，但是这时想要直接通过积分方程找到解仍然很困难。
（因为实际上函数 $f$ 没有变化。）
既然不能一步到位，那我们可以沿用分析学的惯例，使用逼近的方法，从某一个连续函数 $\varphi_0$ 出发，
逐步逼近我们想要的解。

到现在为止，我们目前能够进行迭代的工具只有积分方程 @intgeqn。
我们就从这个方程入手，任取一个连续函数 $\varphi_0 (x)$ 代入方程右端的 $y$，可以得到新的函数
\[
\varphi_1 (x) = y_0 + \int_{x_0}^x f( t, \varphi_0 (t) ) \mathrm{d}t;
\]
显然，这个函数仍然是一个连续函数。
假使我们运气相当不错，一开始的函数 $y = \varphi_0 (x)$ 就是微（积）分方程的解，
那么必然有 $\varphi_1 (x) = \varphi_0 (x)$；否则我们可以继续去做这一步骤：
\[
\varphi_2 (x) = y_0 + \int_{x_0}^x f( t, \varphi_1 (t) ) \mathrm{d}t;
\]
同样地，我们可以再次判断。就这样，我们构建了一个迭代关系：
\[
\varphi_n (x) = y_0 + \int_{x_0}^x f( t, \varphi_{n-1} (t) ) \mathrm{d}t, \quad n = 1,2,\dots
\]
这样我们就得到了一列函数 $\left\{ \varphi_n (x) \right\}$。
我们希望最终无论如何，
这个函数序列都能逼近最终的解 $y = \varphi(x)$（后面我们会证明这个函数序列是一致收敛的），即
\[
\lim_{n\to \infty} \varphi_n (x) = \varphi (x).
\]

::: proposition
构造迭代序列（递推关系）如下

```math
\begin{cases}
    \varphi_0 (x) = y_0 , \\
    \displaystyle \varphi_n (x) = y_0 + \int_{x_0}^x f ( t , \varphi_{n-1} (t) )\mathrm{d}t.
\end{cases}
```

其中 $x \in [ x_0 , x_0 +h ]$，$n=1,2,\dots$。

则由上递推关系所得函数序列 $\left\{ \varphi_n (x) \right\}$ 有意义、连续且满足
\[
\left| \varphi_{n} (x) - y_0 \right| \leqslant b.
\]
:::

#### 第三步：证明收敛

我们对序列取极限时，总希望下面的操作是可行的：
\[
\begin{aligned}
  \lim_{n \to \infty} \varphi_n (x)
  & = y_0 + \lim_{n\to \infty} \int_{x_0}^x f ( t , \varphi_{n-1} (t) )\mathrm{d}t \\
  & = y_0 + \int_{x_0}^x \lim_{n\to \infty} f ( t , \varphi_{n-1} (t) )\mathrm{d}t \\
  & = y_0 + \int_{x_0}^x  f ( t , \lim_{n\to \infty} \varphi_{n-1} (t) )\mathrm{d}t.
\end{aligned}
\]

因此我们希望函数序列 $\left\{ \varphi_n (x) \right\}$ 最好是能一致收敛。

::: proposition
函数序列 $\left\{ \varphi_n \right\}$ 在 $[ x_0 , x_0 +h ]$ 上一致收敛到函数 $\varphi$。
:::

#### 第四步：验证

进行逼近后，我们需要验证这个极限就是原方程的解，即不能“跑过头”，也不能“差一点”。

::: proposition
$\varphi$ 是积分方程 @intgeqn 在 $[ x_0 , x_0 +h ]$ 上的连续解。
:::

至此，我们就完成了存在性的论证。

#### 第五步：唯一性

通常来说涉及到作差相关的存在性，我们会选择[[同一法]]来证明它对应的唯一性。

::: proposition
设 $\psi$ 是 $[ x_0 , x_0 +h ]$ 上的另一个连续解，则在该区间上 $\varphi = \psi$。
:::

结合以上所有步骤，我们得到 @Picardthm 的证明。

### 相关结论

## Picard 迭代的应用

::: definition
对于[[常微分方程初值问题]] @diffeqn、@init，称由以下递推关系得到的函数列为**Picard 逼近序列**：

```math
\begin{cases}
    \varphi_0 (x) = y_0 , \\
    \displaystyle \varphi_n (x) = y_0 + \int_{x_0}^x f ( t , \varphi_{n-1} (t) )\mathrm{d}t.
\end{cases}
```

由它确定的函数 $\varphi_n (x)$称为 @diffeqn、@init 的**第 $n$ 次近似解**。
:::

### 近似解

### 误差估计
