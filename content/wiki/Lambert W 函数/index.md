---
title: Lambert $W$ 函数
categories: [复分析, 特殊函数]
notices:
  - name: 问题
    items:
      - “应用”一节第一个命题的推导中，最后一行 $( -cx + ac )\exp -cx + ac = -bc\exp ac$ 似乎应为 $( -cx + ac )\exp( -cx + ac ) = -bc\exp ac$。
---

**Lambert $W$ 函数**（亦称**乘积对数函数**）是定义在 $\mathbb{C}$ 上的[[多值函数]]，
定义为 $f(x) = x \exp x$ 的反函数。

## 定义

### 通过反函数

::: definition [Lambert $W$ 函数]
**Lambert $W$ 函数** $W(x)$ 是一个[[多值函数]]，
定义为 $f(x) = x \exp x$ 的[[反函数]]，
即对任何 $x \in \mathbb{C}$，有 $x = W(x) \exp W(x)$。
:::

### 通过微分方程

::: definition [Lambert $W$ 函数]
[[微分方程]] $(z \ne -\frac{1}{e})$：
\[
z \, (1 + W(z)) \, W'(z) = W(z)
\]
的解即为 **Lambert $W$ 函数**。
:::

::: definition [$W(x)$ 的分支]
$W(x)$对于每个 $k \in \mathbb{Z}$ 都有一个 **[[分支]]**，我们记其为 $W_{k}(x)$。
特别地，我们记 $W_{0}(x)$ 为 **[[主支]]**。
:::

::: example [$W(x)$ 的分支]
对于 $x, y \in \mathbb{R}$ 的[[方程]]：
\[
y \exp y = x
\]
仅当 $x \geq - \frac{1}{e}$，有根。

当 $x \geq 0$ 时，可以解得 $y = W_{0}(x)$。

而当 $ -\frac{1}{e} \leq x < 0 $时，可以解得 $y_{1} = W_{0}(x) $ 和 $ y_{2} = W_{-1}(x)$。
:::

## 性质

### 恒等式

::: proposition
对于 $x \geq -\frac{1}{e}$：
\[
\frac{x}{W(x)} = \exp W(x)
\]
:::

::: proposition
对于 $n, x >0$
\[
W\left(\frac{n x^{n}}{W(x)^{n-1}}\right)= n W(x)
\]
:::

::: proposition
对于 $x, y >0$
\[
W(x) + W(y) = W\left(x y \left(\frac{1}{W(x)} + \frac{1}{W(y)} \right) \right)
\]
:::

::: proposition
\[
W\left(-\frac{\log (x+1)}{x(x+1)^{\frac{1}{x}}}\right) = -\frac{x+1}{x}\log(x+1)
(0 > x > -1)
\]
:::

::: proposition
\[
W(k\log k)=\log k (k > 0)
\]
:::

::: proposition
通过[[Lagrange 反演]]，可以得到在 $x = 0$ 的[[级数]]形式的 $W_{0}(x)$：
\[
W(x) = \sum_{n = 1}^{\infty}\frac{(- n)^{n-1}}{n !}x^{n}
\]
:::

::: proposition
若 $|W(x)| < 1$
\[
W(x) = \frac{x}{\exp\frac{x}{\exp\frac{x}{\dotsc}}}
\]
:::

::: proposition
若
\[
z^{z^{z^\dotsc}} = \lim_{n\to\infty}{z\uparrow\uparrow n} = a
\]
则 $a = \frac{W(-\log z)}{-\log z}$
（其中 $\uparrow\uparrow$ 是[[Knuth 箭号表示法]]）
:::

### 导数

::: proposition
对于 $x \ne -\frac{1}{e} , 0$：

```math
\begin{aligned}
    W(x)'&=\frac{1}{(W(x) \exp W(x))'}\\
        &=\frac{1}{\exp W(x) + W(x) \exp W(x)}\\
        &=\frac{W(x)}{x \, (1 + W(x) ) }
\end{aligned}
```

:::

### 不定积分

::: proposition
\[
\int W(x) \textrm{d}x = x\, W(x) - x + \exp W(x) + C
\]
:::

::: proof
$f(x) = x \exp x , F( x ) = (x - 1)\exp x + C $

```math
\begin{aligned}
    \int W ( x ) \textrm{d} x &= \int f^{-1}( x ) \textrm{d}x \\
    & = x\, f^{-1}( x ) - F ( f^{-1} (x) ) + C\\
    & = x\, W(x) - x + \exp W(x) + C
\end{aligned}
```

:::

## 特殊值

::: proposition
\[
W(1)=:\Omega
\]
称其为[[Omega 常数]]
:::

## 应用

::: proposition
对于方程（$x \in \mathbb {R}$）：
\[
x = a + b \exp cx
\]
其解法如下：

```math
\begin{aligned}
    &( x - a ) =b \exp cx \\
    \Leftrightarrow & ( x - a )\exp -cx = b\\
    \Leftrightarrow & ( -cx + ac )\exp -cx = -bc\\
    \Leftrightarrow & ( -cx + ac )\exp -cx + ac = -bc\exp ac\\
\end{aligned}
```

故 $-cx + ac = W(-bc \exp ac) $，也即 $x = a -\frac{W(-bc \exp ac)}{c}$
:::

::: proposition
对于函数方程（$n , a \in \mathbb{R},a > 0$）：
\[
x = (f(x))^{n}\cdot a^{f(x)}
\]
其解法如下：

```math
\begin{aligned}
    &x = (f(x))^{n}\cdot a^{f(x)}\\
    \Leftrightarrow& \sqrt[n]{x} = f(x)\cdot e^{\frac{\log a}{n}f(x)}\\
    \Leftrightarrow&\frac{\log a}{n}\sqrt[n]{x}=\frac{\log a}{n}f(x)\cdot e^{\frac{\log a}{n}f(x)}\\
\end{aligned}
```

故 $\frac{\log a}{n} f(x)=W(\frac{\log a}{n} \sqrt[n]{x})$，
即 $f(x)=\frac{n}{\log a}W(\frac{\log a}{n} \sqrt[n]{x})$
:::
