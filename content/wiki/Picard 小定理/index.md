---
title: Picard 小定理
categories: [复分析]
navboxes: [复分析]
---

<problems>
- “证明”“推论”各节需要扩充。
</problems>

::: convention
在本文中，

- $\mathbb{D}=\{z\in\mathbb{C}:|z|<1\}$ 指[[复平面]]的[[单位圆盘]]。
- $\mathbb H=\{z\in\mathbb{C}:\operatorname{Im}z>0\}$ 指复的[[上半平面]]。
- $\mathbb S=\mathbb{C}\cup\{\infty\}=\mathbb{CP}^1$ 指[[扩充复平面]]，即黎曼球面。

:::

**Picard 小定理**是[[复分析]]中的重要定理，
最早由[[Charles Émile Picard]]在1879年证明。
定理对 $\mathbb{C}$ 上的非常值[[全纯函数]]的[[像集]]进行了刻画，
它声称 $\mathbb{C}$ 上至多只有一个点不在这值域中。

[[Picard 大定理]]是Picard 小定理的推广。

## 陈述

::: theorem [Picard] {@picard}
设 $f\colon\mathbb{C}\to\mathbb{C}$ 是全纯函数，
如果存在 $\mathbb{C}$ 上两个不同点 $a\ne b$ 不在 $f$ 的值域中，
则 $f$ 为[[常函数]]。
:::

该定理也能对[[亚纯函数]]进行陈述：

::: theorem [Picard] {@picard2}
设 $f\colon\mathbb{C}\to\mathbb S$ 是亚纯函数，
如果存在 $\mathbb S$ 上三个不同点 $a,b,c$ 不在 $f$ 的值域中，
则 $f$ 为[[常函数]]。
:::

对于 $\mathbb S$ 上任意 $c\ne\infty$，
都能通过 $\mathbb S$ 的自同构 $z\mapsto (z-c)^{-1}$ 映到 $\infty$，
因此不妨设 $c=\infty$ 不改变函数的解析性，即只需证明Picard 小定理的全纯函数版本。

## 证明

Picard 本人的证明也是最容易理解的证明，它使用了[[模函数]] [[Lambda 函数|$\lambda$ 函数]] 的性质。
具体来说，我们具有全纯的覆叠映射 $\lambda:\mathbb H\to\mathbb C\backslash\{0,1\}$。
在已知这函数存在的前提下，我们给出Picard 的证明：

::: proof
用函数 $z\mapsto(f(z)-a)/(b-a)$ 来代替 $f$，
我们可以假设 $f:\mathbb{C}\to\mathbb{C}$ 取不到的两个值为 $0,1$。
因为定义域 $\mathbb{C}$ [[单连通]]，
故可以考虑将 $f:\mathbb{C}\to\mathbb{C}\backslash\{0,1\}$ 提升到[[万有覆叠]] $\mathbb H$ 上，
具体来说，我们可以得到如下的交换图表：
\[
\begin{tikzcd}
& \mathbb H \ar[d, "\lambda"]\\
\mathbb{C}\ar[r, "f"]\ar[ru, dashed, "\tilde f"] & \mathbb{C}\backslash\{0,1\}.
\end{tikzcd}
\]
这个映射最初是作为连续映射被提升的，但是注意到 $\lambda$ 是全纯的覆叠映射，
因此局部上 $f$ 的解析性也能被提升到 $\tilde f:\mathbb{C}\to\mathbb H$，故可以得到全纯的$\tilde f$。
现在由于 $\mathbb H$ 和 $\mathbb{D}$ 是全纯等价的，
所以 $\tilde f$ 亦诱导一个 $\mathbb{C}\to\mathbb{D}$ 的全纯函数，
根据 [[Liouville 定理]] 它是常函数，因此 $\tilde f$ 是常函数，
进而 $f=\lambda\circ\tilde f$ 也是常函数。
:::

## 推论

::: corollary
对全纯函数 $f:\mathbb{C}\to\mathbb{C}$，则要么[[复合]] $f\circ f$ 有不动点，
要么 $f=z+b$ 其中 $b\ne 0$。
:::

::: proof
假设 $f\circ f$ 复合没有不动点，则 $f$ 也没有不动点。
这表明 $g(z)=(f(f(z))-z)/(f(z)-z)$ 是 $\mathbb{C}$ 上的全纯函数，而且容易得知它不取 $0,1$。
因此由 @picard 可知 $g$ 是常函数，换言之，存在常数$c\ne 0,1$ 使得
\[
f(f(z))-z=c(f(z)-z).
\]
求导得到
\[
f'(z)\cdot f'(f(z)) -1 = cf'(z) - c.
\]
也就是
\[
f'(z)(f'(f(z))-c)=1-c.
\]
由于 $c\ne 1$ 故 $f'(z)$ 没有零点，进而 $f'(f(z))$ 不取 $0,c$。
再由 @picard 可知 $f'(f(z))$ 为常数，因此 $f'$ 为常数，设 $f=az+b$
讨论可知 $a=1,b\ne 0$。
:::

```terms
Picard 小定理:
  en: Picard's little theorem
```
