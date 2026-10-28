---
title: 导数
aliases: [求导]
categories: [实分析]
navboxes: [微积分学]
---

<problems>
- “导数与连续性”“导数与单调性”“导数与凹凸性”“求导法则”“偏导数”“方向导数”各节需要扩充。
</problems>

在[[微积分]]中，
**导数**是指一个[[函数]]的变化率。
具体地说，对函数 $f \colon \mathbb{R} \to \mathbb{R}$ 而言，
当自变量 $x \in \mathbb{R}$ 发生微小的变化时，
函数的值 $f (x) \in \mathbb{R}$ 也相应地变化，
$f (x)$ 的变化量与 $x$ 的变化量之比称为 $f$ 在 $x$ 处的导数，
通常记为 $f' (x)$。
导数也等于函数[[图像]]的[[切线]]的[[斜率]]。

不是所有函数都有导数；有导数的函数称为**可导**的。

导数的概念和[[微分]]密切相关。
[[微积分基本定理]]说明，求导数（即微分）和求[[积分]]互为逆运算。

## 定义

::: definition [导数] {@def-derivative}
设 $f \colon U \to \mathbb{R}$ 是定义在集合 $U \subset \mathbb{R}$ 上的[[函数]]，
并且 $U$ 包含 $x_0 \in \mathbb{R}$ 的一个[[邻域]]。
如果[[极限]]
\[
f' (x_0) =
\lim_{\varepsilon \to 0}
\frac {f (x_0 + \varepsilon) - f (x_0)} {\varepsilon}
\]
存在，就说 $f' (x_0)$ 是 $f$ 在 $x_0$ 处的**导数**。
:::

导数也常常记为
\[
\frac {d f} {d x} (x_0), \quad
\frac {d} {d x} f (x_0), \quad
\dot{f} (x_0).
\]

::: remark
导数（@def-derivative）
可以看成用[[一次函数]]来逼近函数 $f$。
具体地说，我们有
\[
f (x) = f (x_0) + A (x - x_0) + o (x - x_0) \quad
(x \to x_0),
\]
其中 $A = f' (x_0)$，$o$ 是[[O 记号|小 $o$ 记号]]。
:::

::: definition [$n$ 阶导数] {@def-nth-derivative}
设 $f \colon U \to \mathbb{R}$ 是一个函数，
并且 $f$ 有导数 $f' \colon U \to \mathbb{R}$
（@def-derivative）。
函数 $f'$ 的导数（如果存在）称为 $f$ 的**二阶导数**，记为 $f''$。
以此类推，我们可以定义 $f$ 的 **$n$ 阶导数**，通常记为 $f^{(n)}$。

我们常常约定 $f$ 的 **$0$ 阶导数**是 $f^{(0)} = f$。
:::

$n$ 阶导数 $f^{(n)} (x_0)$ 也常常记为
\[
\frac {d^n f} {d x^n} (x_0), \quad
\Bigl( \frac {d} {d x} \Bigr)^n f (x_0).
\]

::: remark
求函数 $f$ 的 $n$ 阶导数（@def-nth-derivative）
可以看成用 $n$ 次[[多项式]]来逼近函数 $f$。
具体地说，如果 $f$ 有直到 $n$ 阶导数，那么由 [[Taylor 展开]]，我们有
\[
f (x) =
\sum _{k = 0} ^n
\frac {f^{(k)} (x_0)} {k!}
(x - x_0) ^k
+ o ((x - x_0)^n) \quad
(x \to x_0),
\]
其中 $o$ 是[[O 记号|小 $o$ 记号]]。
并且，这个条件也唯一确定了每个值 $f^{(k)} (x_0)$。
:::

## 性质

### 导数与连续性

### 导数与单调性

### 导数与凹凸性

### 求导法则

## 高维函数的导数

### 偏导数

### 方向导数

```terms
导数:
  en: derivative
  de: Ableitung :f
  fr: dérivée :f
$n$ 阶导数:
  en: $n$-th derivative
```
