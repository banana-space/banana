---
title: 整数（同伦类型论）
categories: [同伦类型论]
---

::: convention
在本文中，

- [[$Π$ 类型]] $\prod_{x:A} B$ 会记作 $(x:A) → B$。

:::

在[[类型论]]以至于[[同伦类型论]]中，有非常多不同的方法定义[[整数]]的类型，
例如可以从集合的角度出发，也可以通过整数的代数性质出发。

## 借助自然数定义

整数可以看作自然数的简单拓展，也就是用某种方法给自然数加入负数得到的数学对象。
于是在类型论中，借助[[自然数类型]]，可以给出几种整数的定义。

### 作为归纳类型

在[[简单类型论]]中，整数可以定义为[[归纳类型]]：

::: definition {@def:ind}
整数类型 $\mathbb{Z}_w$ 是由如下构造子生成的归纳类型：

- $0:\mathbb{Z}_w$ 代表整数 $0$，
- $p : \mathbb{N} → \mathbb{Z}_w$，对于 $a ∈ \mathbb{N}$，$p(a)$ 代表整数 $a+1$，
- $n : \mathbb{N} → \mathbb{Z}_w$，对于 $a ∈ \mathbb{N}$，$n(a)$ 代表整数 $-a-1$。

:::

但这个类型由定义直接得到的性质很难用——作为归纳类型，它每次[[模式匹配]]都需要考虑三个情况。
例如乘法[[分配律]]的证明需要处理特别多的情况 [@NuoPhD]。

### 商掉零的符号

在 @def:ind 中，构造子不是直接构造正整数和负整数，而是构造出加一或者减一过后的整数，
这是为了确保 $0$ 没有符号。

在[[同伦类型论]]或者其它支持某种[[高阶归纳类型 (同伦类型论)|高阶归纳类型]]的类型论中，
可以允许 $+0$ 和 $-0$ 同时存在，但用高阶构造子将两者变得等价。

::: definition
整数类型 $\mathbb{Z}_零$ 是由如下构造子生成的归纳类型：

- $p : \mathbb{N} → \mathbb{Z}_零$，对于 $a ∈ \mathbb{N}$，$p(a)$ 代表整数 $a$，
- $n : \mathbb{N} → \mathbb{Z}_零$，对于 $a ∈ \mathbb{N}$，$n(a)$ 代表整数 $-a$，
- $e : \operatorname{Id}(p~0, n~0)$。

:::

### 使用减法

在[[同伦类型论]]或者其它支持某种[[高阶归纳类型 (同伦类型论)|高阶归纳类型]]的类型论中，
整数可以直接定义为自然数相减的结果，商去 $a-b=s(a)-s(b)$ 这个关系。

::: definition
整数类型 $\mathbb{Z}_减$ 是由如下构造子生成的高阶归纳类型：

- $c: \mathbb{N} → \mathbb{N} → \mathbb{Z}_减$，其中 $c(a, b)$ 对应整数 $a-b$，
- $p:(a:\mathbb{N})→(b:\mathbb{N})→\operatorname{Id} \left( c(a,b), c(s~a,s~b) \right)$。

:::

## 修改自然数定义

实质上，从自然数到整数，无非是让取后继的操作 $s:\mathbb{N} → \mathbb{N}$ 变得可逆，
换言之它成为一个[[等价（类型论）]]。换言之，
用假想的构造子 $s:\mathbb{N} ≃ \mathbb{N}$ 代替原来的 $s$ 就可以了。
此时我们是在修改自然数的定义，不再需要用到自然数类型。

为了将这个假想的构造子化为现实，可以采用多种方法。

### 展开等价的定义

在同伦类型论中，所谓 $A ≃ B$，就是说存在一函数 $f:A → B$，
满足命题 $\operatorname{isEquiv}(f)$。关于这个命题的细节可参见[[等价（类型论）]]。
由于后者有多种定义，我们任选其中一种（双可逆等价）展开，变成如下数据：

- $s:\mathbb{Z} → \mathbb{Z}$，
- $s^{-1}₁:\mathbb{Z} → \mathbb{Z}$，
- $s^{-1}₂:\mathbb{Z} → \mathbb{Z}$，
- $p₁:(a:\mathbb{Z}) → \operatorname{Id}(s(s^{-1}₁~a), a)$，
- $p₂:(a:\mathbb{Z}) → \operatorname{Id}(s^{-1}₂(s~a), a)$。

::: definition
整数类型 $\mathbb{Z}_b$ 是由如下构造子生成的高阶归纳类型：

- 一般构造子：
  - $0:\mathbb{Z}_b$，
  - $s:\mathbb{Z}_b → \mathbb{Z}_b$，
  - $s^{-1}₁:\mathbb{Z}_b → \mathbb{Z}_b$，
  - $s^{-1}₂:\mathbb{Z}_b → \mathbb{Z}_b$。
- 高阶构造子：
  - $p₁:(a:\mathbb{Z}_b) → \operatorname{Id}(s(s^{-1}₁~a), a)$，
  - $p₂:(a:\mathbb{Z}_b) → \operatorname{Id}(s^{-1}₂(s~a), a)$。

:::

- 构造：根据等价的定义，可以由这些构造子直接得到 $\operatorname{isEquiv}(s)$ 的证明。
- 解构：每当我们消去如上类型时，本质上需要对 $0$ 的处理，
  对 $s : \mathbb{Z}_b → \mathbb{Z}_b$ 的处理，
  以及对 $\operatorname{isEquiv}(s)$ 的各个组件的处理。

因此，
$\mathbb{Z}_b$ 可以看作是由
$0:\mathbb{Z}_b, s: \mathbb{Z}_b → \mathbb{Z}_b, p:\operatorname{isEquiv}(s)$
这三个符号生成的归纳类型，这符合我们对整数的想象。

### 使用圆周的环路空间

由于整数类型对应[[圆周 (同伦类型论)|圆周]]的[[环路空间]]，这启发了如下定义。

::: definition
定义[[归纳族]] $\operatorname{El}:S¹ → \mathcal U$，由如下构造子生成：

- $0:\operatorname{El}(\operatorname{base})$

整数类型 $\mathbb{Z}_U$ 定义为 $\operatorname{El}(\operatorname{base})$。
:::

该定义直接对应[[编码–解码法]]中圆周的道路空间的“码”。

接下来的定义需要用到等量代换的函数，在[[J 公理]]中给出定义：
\[
\operatorname{subst}:
(P:A→ \mathcal U) →
\operatorname{Id}_A(a, b)
→ P(a)→ P(b)
\]

::: definition [前驱和后继]
整数的 $+1$ 和 $-1$ 分别定义如下：

\[
\begin{aligned}
  &(+1):\mathbb{Z}_U → \mathbb{Z}_U \\
  &(x+1) := \operatorname{subst}(\operatorname{El}, \operatorname{loop}, x) \\
  &(-1):\mathbb{Z}_U → \mathbb{Z}_U \\
  &(x-1) := \operatorname{subst}(\operatorname{El}, \operatorname{loop}^{-1}, x)
\end{aligned}
\]
:::

接下来证明两者互逆。

::: lemma {@lem:subst-comp}
对于任意 $P:A → \mathcal U, p : \operatorname{Id}_A(x, y)$，有
\[
\begin{aligned}
  &(a:P~y) → \operatorname{Id}(\operatorname{subst}(P, p, \operatorname{subst}(P, p^{-1}, a)), a)\\
  &(a:P~x) → \operatorname{Id}(\operatorname{subst}(P, p^{-1}, \operatorname{subst}(P, p, a)), a)
\end{aligned}
\]
:::

::: theorem [前驱和后继互逆]
对于 $x:\mathbb{Z}_U$，如下类型存在实例（换言之它们对应的命题存在证明）：

\[
\begin{aligned}
  &(x:\mathbb{Z}_U) → \operatorname{Id}(x+1-1, x)\\
  &(x:\mathbb{Z}_U) → \operatorname{Id}(x-1+1, x)
\end{aligned}
\]
:::

::: proof
展开定义得到：

\[
\begin{aligned}
  &x+1-1 := \operatorname{subst}(\operatorname{El}, \operatorname{loop}, \operatorname{subst}(\operatorname{El}, \operatorname{loop}^{-1}, x))\\
  &x-1+1 := \operatorname{subst}(\operatorname{El}, \operatorname{loop}^{-1}, \operatorname{subst}(\operatorname{El}, \operatorname{loop}, x))
\end{aligned}
\]

由 @lem:subst-comp 得证。
:::

## 性质

::: theorem
\[
\mathbb{Z}_w ≃ \mathbb{Z}_b.
\]
:::

::: proof
参见 [@Int] 的定理 3.2。
:::

::: theorem
$\mathbb{Z}_w$ 是[[集合 (类型论)|集合]]。
:::

由于该类型不是高阶归纳类型，容易证明它是集合。

::: corollary
$\mathbb{Z}_b$ 是[[集合 (类型论)|集合]]。
:::

### $\mathbb{Z}_U$ 是始代数

::: definition
**整数代数**是三元组 $(T, t, e)$，其中：

- $T$ 是类型，
- $t:T, e:\operatorname{Id}(T, T)$。

:::

令 $\operatorname{传送}:\operatorname{Id}(A, B) → A → B$。

::: definition
**整数代数态射** $f:(T, t, e) → (T', t', e')$ 包含函数 $f:T → T'$，且满足如下条件：

- $f$ 保持 $t$，即 $f(t)=t'$，

- $f$ 保持 $e$，即 $f \circ \operatorname{传送}(e) = \operatorname{传送}(e') \circ f$。

:::

::: definition
**始整数代数**是整数代数 $(T, t, e)$ 且对于任意其它整数代数 $(T', t', e')$，
它们之间有唯一整数代数态射。
:::

::: theorem
$\mathbb{Z}_U$ 是始整数代数。
:::

::: proof
参见 [@Int] 的定理 4.4。
:::

## 参考文献

```bibliography
NuoPhD:
  type: thesis
  author: Li, Nuo
  title: Quotient Types in Type Theory
  year: 2014
  degree: phd
  institution: University of Nottingham
  url: https://eprints.nottingham.ac.uk/28941/1/Nuo%20Li%27s_Thesis.pdf
Int:
  type: preprint
  title: The Integers as a Higher Inductive Type
  author: [Thorsten Altenkirch, Luis Scoccola]
  year: 2020
  arxiv: '2007.00167'
```
