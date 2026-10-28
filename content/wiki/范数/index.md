---
title: 范数
categories: [泛函分析]
---

<problems>
- “例子”一节第二个例子中，$BC(X,K)$ 上的范数似乎应为 $\sup_{x\in X}|f(x)|$。
</problems>

**范数**是 [[Euclid 空间]]中向量的长度在一般[[向量空间]]上的推广。

## 定义

::: definition
设 $K$ 是[[域]]，$K$ 上的一个 **[[绝对值]]**，
（或者**乘性赋值**、**范数**）
是一个函数 $\left|\ \cdot\ \right| \colon K \to \mathbb{R}$，满足

- $\left| x \right| \ge 0$，且 $\left| x \right| = 0$ 当且仅当
  $x = 0$。

- $\left| x\cdot y \right| = \left| x  \right| \cdot \left| y \right| $。

- **三角不等式**：$\left| x + y \right| \le \left| x \right| + \left| y \right|$。

若 $K$ 上配备绝对值 $\left|\ \cdot\ \right|$，
则称 $K$ 是**赋范域**。
:::

一般在[[泛函分析]]中常取 $K$ 为 $\mathbb{R}$ 或 $\mathbb{C}$，
并取相应的绝对值为通常意义下的绝对值。
在 [[$p$ 进分析]]中则有时取 $K$ 为 [[$p$ 进域]]。

::: definition
设 $V$ 是赋值域 $K$ 上的向量空间，$p$ 是从 $V$ 到 $\mathbb{R}$ 上的函数，
称 $p$ 是

- **正定**，如果对 $x\ne 0$，有 $p(x) > 0$。

- **次可加**，如果 $p(x+y) \le p(x) + p(y)$。

- **[[半范数]]**，如果 $p$ 是次可加的，且对任何 $\alpha \in K, x \in V$，都有
  \[
  p(\alpha x) = \left| \alpha \right| p(x).
  \]

正定的半范数称为范数，常记作 $\| \cdot \|$。带有范数的向量空间称为**赋范向量空间**。
:::

## 性质

::: proposition [与度量的关系]
如 $V$ 有范数 $\| \cdot \|$，
则它在如下度量下成为[[度量空间]]：
\[
d(x,y) = \| x - y \|.
\]
:::

两个范数 $\| \cdot \|_1, \| \cdot \|_2$ 是**等价**的，如果
它们诱导出同样的度量拓扑。完备的赋范向量空间称为 [[Banach 空间]]。

::: proposition {@neq}
$V$ 上的两个范数 $\| \cdot \|_1, \| \cdot \|_2$ 等价当且仅当存在正常数 $c_1,c_2$，
使得对任何 $x \in V$，都有
\[
\begin{aligned}
  \| x \|_1 &\le c_1 \| x \|_2 \\
  \| x \|_2 &\le c_2 \| x \|_1.
\end{aligned}
\]
:::

::: proof
根据度量等价的对应性质即得。
:::

::: proposition [乘积空间]
设 $V_1, \cdots, V_n$ 是一族赋范向量空间，
则函数
\[
\|(v_\alpha)\| = \max_\alpha \|v_\alpha\|.
\]
是直积 $V = \prod_{\alpha = 1}^n V_\alpha$ 上的范数。
:::

::: proposition [商空间]
设 $W$ 为赋范向量空间 $V$ 的闭子空间，
则函数
\[
\| x + W \| = \inf_{w \in W} \| x + w \|,
\]
是[[商向量空间]] $V/W$ 上的范数。
:::

## 例子

以下总假设 $(K,|\cdot|)$ 是赋范域。

::: example
可以在 $K^n$ 上赋予范数
\[
x\longmapsto \left\| x \right\|_p =
\left(\sum^{n}_{i=1}|x_i|^p\right)^{1/p}
\]
其中 $p\in [1,+\infty]$。
可以证明如果 $K$ 的赋值是完备的，那么任何有限维 $K$-线性空间
上的范数彼此等价，并且是完备的。
:::

::: example
设 $X$ 是拓扑空间，
可定义 $X$ 上的有界连续函数空间 $BC(X,K)$ 上的范数为
\[
f \longmapsto \left\| f \right\| =
\sup_{x\in X}f(x).
\]
如果 $K$ 上的赋值是完备的，$BC(X)$ 都是完备的。
:::

::: example
设 $(X,\mathfrak{M},m)$ 是一个测度空间，$p\geq 1$，
[[$L^p$ 空间]]上的函数
\[
\|f\|=\left(\int_X\left| f(x) \right|^p dm\right)^{1/p}.
\]
是范数，即 $L^p$ 范数。此时 $L^p$ 空间即成为 [[Banach 空间]]。
:::

```terms
范数:
  en: norm
  de: Norm :f
  fr: norme :f
  grc: γνώμων :m
  la: norma :f
```
