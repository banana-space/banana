---
title: 嵌入（微分几何）
aliases: [嵌入子流形]
categories: [微分几何]
notices:
  - name: 消歧义
    see:
      - page: 嵌入
navboxes: [微分几何]
---

在[[微分几何]]中，**嵌入**是[[光滑流形]]间的一类[[光滑映射]]，
它将某个光滑流形放进另一个光滑流形中，作为其[[子流形]]。

## 定义

::: definition [嵌入]
设 $X,Y$ 为[[光滑流形]]，
$f \colon X \rightarrow Y$ 为[[光滑映射]]。
称 $f$ 为**嵌入**，若满足以下条件：

- $f$ 是[[浸入 (微分几何)|浸入]]。

- $f$ 是[[拓扑空间]]的[[嵌入 (拓扑学)|嵌入]]。
  换言之，$f \colon X\rightarrow f(X)$ 是拓扑空间的[[同胚]]，
  这里 $f (X)$ 带有[[子空间拓扑]]。

此时，称 $X$ 为 $Y$ 的 **[[子流形]]**，
也称为**嵌入子流形**或**正则子流形**。
:::

在上述情况下，我们常常记 $f \colon X \hookrightarrow Y$，
以表明 $f$ 是嵌入。

::: definition [闭嵌入]
设 $X,Y$ 为[[光滑流形]]，
$f \colon X \hookrightarrow Y$ 为嵌入。
称 $f$ 为**闭嵌入**，若满足以下等价条件之一：

- $f$ 是[[闭映射]]。

- $f (X)$ 是 $Y$ 中的[[闭集]]。

此时称 $X$ 为 $Y$ 的**闭子流形**。
:::

## 例子

- 若 $Y$ 是任何光滑流形，$U \subset Y$ 是[[开集]]，
  则[[含入映射]] $i \colon U \hookrightarrow Y$ 是嵌入。
  若 $U$ 是[[开闭集]]，则 $i$ 也是闭嵌入。

- 对自然数 $n \geq m \geq 0$，映射
  \[
  \begin{aligned}
    f \colon \mathbb{R}^m & \longrightarrow \mathbb{R}^n \\
    (x_1,\dots,x_m) & \longmapsto (x_1, \dotsc, x_m,0, \dotsc, 0)
  \end{aligned}
  \]
  是嵌入，且是闭嵌入。

还有一些不是嵌入的例子。

- 考虑 $f \colon \mathopen{]} 0, 2 \pi \mathclose{[} \to \mathbb{R}^2$，定义为
  \[
  f (x) = \biggl( \frac{a \sin x}{1 + \cos^2 x}, \
  \frac{a \sin x \cos x}{1 + \cos^2 x} \biggr).
  \]
  其像为 [[Bernoulli 双扭线]]，
  它从双扭线的交叉点出发，绕行一周，恰好经过每个点一次。
  则 $f$ 是[[浸入 (微分几何)|浸入]]，且是[[单射]]，但不是嵌入，
  因为 $\mathopen{]} 0, 2 \pi \mathclose{[}$ 与双扭线并不[[同胚]]。

## 性质

### 基本性质

::: proposition [局部形式]
设 $f\colon X\rightarrow Y$ 是嵌入。则
对任意 $x\in X$，存在 $x$ 的开邻域 $U \subset X$
和其上[[局部坐标]] $x^1,\dots,x^m$，
以及 $f(x)$ 的开邻域 $V$ 和其上局部坐标 $y^1,\dots,y^n$，
满足以下条件：

- $f(U)=f(X) \cap V$。

- $f$ 在这个局部坐标下可以写为
  \[
  (t_1,\dots,t_m)\mapsto (t_1,\dots,t_m,0,\dots,0).
  \]

:::

::: proof
这是[[常秩定理]]的推论。
:::

::: corollary
设 $f\colon X\rightarrow Y$ 是嵌入。
则 $f(X)$ 是 $Y$ 的[[局部闭集]]。
:::

### Whitney 嵌入定理

<see>[[Whitney 嵌入定理]]</see>

::: theorem [Whitney 嵌入定理]
设 $n$ 是[[自然数]]。
则任何 $n$ 维光滑流形都有到 $\mathbb{R}^{2n+1}$ 的闭嵌入。
:::

## 参考文献

```bibliography
Lee12:
  type: book
  author: J. Lee
  year: 2012
  title: Introduction to Smooth Manifolds
  edition: 2
  series: Graduate Texts in Mathematics
  number: 218
  publisher: Springer
varadarajan2013lie:
  type: book
  title: 'Lie Groups, Lie Algebras, and Their Representations'
  author: 'Varadarajan, V. S.'
  series: Graduate Texts in Mathematics
  year: 2013
  number: 102
  publisher: Springer New York
```

```terms
嵌入:
  en: embedding
  fr: plongement
```
