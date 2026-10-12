---
title: Segal 空间
categories: [高阶范畴论]
navboxes: [同伦代数, 高阶范畴论]
---

在[[高阶范畴论]]中，
**[[Graeme Segal|Segal]] 空间**是指[[空间 $(\infty, 1)$-范畴]]
$\mathsf{S}$ 中的[[内 $(\infty, 1)$-范畴]]。
换言之，Segal 空间像是一个 [[$(\infty, 1)$-范畴]]，
但其所有 [[$n$-态射]]不仅构成集合，还构成[[空间]]，例如 [[Kan 复形]]。

需要注意的是，$(\infty, 1)$-范畴本身已经具备所有的高阶同伦信息，
这些信息已经可以告诉我们应该如何将 $n$-态射的集合视为空间。
当这些信息与 Segal 空间的结构所提供的信息一致时，该 Segal 空间就称为[[完备 Segal 空间]]。
因此，完备 Segal 空间与 $(\infty, 1)$-范畴是等价的概念。

由于 Segal 空间和完备 Segal 空间可以不依赖 $(\infty, 1)$-范畴的理论而定义，
因此，可以使用完备 Segal 空间来定义 $(\infty, 1)$-范畴。
在这一观点下，进一步地，使用 Segal 空间的推广，即 [[$n$ 重完备 Segal 空间]]，
可以定义 [[$(\infty, n)$-范畴]]，这也是目前后者的最常用的定义。

## 定义

### 通过高阶范畴论

::: definition
**Segal 空间**是[[空间 $(\infty, 1)$-范畴]]
$\mathsf{S}$ 中的[[内 $(\infty, 1)$-范畴]]。
:::

### 通过同伦代数

若要使用 Segal 空间来定义 $(\infty, 1)$-范畴，
则不可使用前一种定义。
因此，我们使用[[单纯集]]的语言将该定义重新写下来。
我们记 $\mathsf{Kan}$ 为 [[Kan 复形]]范畴。

::: definition
**Segal 空间**是指[[函子]]
\[
X \colon \mathbb{\Delta}^{\mathrm{op}} \longrightarrow \mathsf{Kan},
\]
即 [[Kan 复形]]范畴中的[[单纯对象]]，其中 $\mathbb{\Delta}$ 是[[单形范畴]]，
使得对任意自然数 $n$，诱导的态射
\[
X_n \longrightarrow
\underbrace{
  X_1 \underset{X_0}{\times}
  \cdots \underset{X_0}{\times} X_1
} _{n \text{ 个 } X_1}
\]
是 Kan 复形的[[同伦等价]]，其中 $X_n$ 代表 $X (n)$，
右边是 Kan 复形的[[同伦极限]]。
:::

这里，空间 $X_n$ 可以视为 Segal 空间中 [[$n$-态射]]构成的空间。
与[[内 $(\infty, 1)$-范畴]]的定义类似，
要求态射
\[
X_n \longrightarrow
X_1 \underset{X_0}{\times}
\cdots \underset{X_0}{\times} X_1
\]
是等价，是说给定 $n$ 个首尾相接的 $1$-态射，
则可以在同伦意义下唯一地将它们复合起来，
也就是通过上述态射的同伦逆，找到一个 $n$-态射，
其 $[0, n]$ 边就是这些 $1$-态射的复合。

```terms
Segal 空间:
  en: Segal space
  fr: espace de Segal :m
```
