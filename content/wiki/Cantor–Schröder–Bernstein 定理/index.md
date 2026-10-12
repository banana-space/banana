---
title: Cantor–Schröder–Bernstein 定理
aliases: [Schröder-Bernstein 定理]
categories: [集合论]
---

**Cantor–Schröder–Bernstein 定理**是[[集合论]]的基本结论，
指的是两个[[集合]]间若互相有[[单射]]，则有[[双射]]。

直觉上说，若有 $X$ 到 $Y$ 的单射，就说明 $X$ 的大小不大于 $Y$的。
该定理表明若 $X$ 不大于 $Y$ 的同时 $Y$ 也不大于 $X$，那 $X$ 应该和 $Y$ 一样大。

Cantor–Schröder–Bernstein 定理也是集合的[[势]]的基本性质。

## 陈述与承认选择公理的证明

::: theorem [Cantor–Schröder–Bernstein] {@Cantor}
若对集合 $X,Y$ 存在单射 $f \colon X \to Y $ 与单射
$g \colon Y \to X $，则存在双射 $\iota  \colon X \to Y $。
:::

若允许使用[[选择公理]]，那么 @Cantor 无非是[[良序定理]]的直接推论，下证之。

::: proof
若 $X$ 或 $Y$ 为[[空集]]，则结论显然正确，下证二者均非空的情况。

由良序定理，知存在唯一最小的[[序数]] $|X|$ 使得映射
$\phi \colon X \stackrel{\sim}{\rightarrow} |X|$是双射，
类似定义 $|Y|$ 和 双射 $\varphi\colon Y \stackrel{\sim}{\rightarrow} |Y|$。

易见映射 $\varphi\circ f\colon X \to |Y|$ 是单射，于是
$\varphi\circ f\colon X \stackrel{\sim}{\rightarrow}
  \operatorname{im} (\varphi\circ f) \subset |Y|$ 是双射。
由良序定理，$\operatorname{im} (\varphi\circ f)$ 也可以赋予[[良序]]，
记作 $\alpha \colon \operatorname{im} (\varphi\circ f)
  \stackrel{\sim}{\rightarrow} |\operatorname{im} (\varphi\circ f)|$。
于是有 $\alpha\circ\varphi\circ f\colon X \stackrel{\sim}{\rightarrow}
  |\operatorname{im} (\varphi\circ f)| \le |Y|$。

然而 $|X|$ 是能与 $X$ 建立双射的序数中最小者，于是 $|X|\le
  |\operatorname{im} (\varphi\circ f)| \le |Y|$。同理，$|Y|\le|X|$。
由序数的反称性，可得 $|X|=|Y|$。

于是 $\iota:= \varphi^{-1}\circ\phi \colon X
  \stackrel{\sim}{\rightarrow} Y$ 即所求双射。
:::

::: remark
上述证明中 $|X|,|Y|$ 都是[[基数]]，我们实际上证明了[[势]]的一个结论：

- 若存在[[单射]] $f \colon X \to Y$，则 $|X| \leq |Y|$。
:::

## 不依赖选择公理的证明

接下来介绍一种不使用选择公理的证法。
沿用 @Cantor 的记号，记 $X'=X-g(Y)$，$h= g \circ f  \colon X \to X$。
考虑 $X$ 的[[子集]]构成的集合 $\mathcal{F} =
  \set{S \subset X \mid X'\cup h(S) \subset S}$，
不难看出 $X \in \mathcal{F}$，于是 $\mathcal{F}$ 非空。

::: lemma {@F-closed}
设集合 $A \in \mathcal{F}$，则 $X'\cup h(A) \in \mathcal{F}$。
:::

::: proof
由于 $h(A) \subset g(Y)$ 对任何 $A \subset X$ 都成立，
于是 $X' \cap h(A) =\varnothing$。
欲证结论 $X'\cup h(X'\cup h(A)) \subset X'\cup h(A)$，
化为$h(X'\cup h(A)) \subset h(A)$。
而 $A \in \mathcal{F}$，由定义知
$X'\cup h(A) \subset A$，两边作用 $h$ 即得结论。
:::

::: proof [@Cantor 的证明]
定义集合
\[
A_0:= \bigcap_{A \in \mathcal{F}} A =
\set{x \in X \mid 对任意的 A\in \mathcal{F},都有 x\in A},
\]
下证 $A_0 \in \mathcal{F}$。由 $\mathcal{F}$ 的定义，
$\forall A \in \mathcal{F}, X' \subset A$，所以 $X' \subset A_0$。
只须证 $h(A_0) \subset A_0$。反设 $\exists x \in A_0$ 使得
$h(x) \notin A_0$，于是 $\exists A_1 \in \mathcal{F}$ 使得 $h(x) \notin A_1$。
而由 $A_0$ 的定义有 $\forall A \in \mathcal{F}, x \in A$，所以
$x \in A_1$ 且 $h(x) \notin A_1$，但这与 $A_1 \in \mathcal{F}$ 矛盾！

下证 $X'\cup h(A_0) = A_0$。由 @F-closed，$X'\cup h(A_0) \in \mathcal{F}$。
于是由 $A_0$ 的定义，$X'\cup h(A_0) \supset A_0$，由 $\mathcal{F}$ 的定义，
$X'\cup h(A_0) \subset A_0$。于是结论得证。

由于 $X' \cap h(A_0) =\varnothing$，所以 $g \circ f(A_0) = h(A_0) =
  A_0 - X' =A_0 - (X - g(Y)) = A_0 \cap g(Y)$。
于是 $f(A_0) = g^{-1}(A_0 \cap g(Y))$。

记 $B_0 = X - A_0 = X - X'\cup h(A_0) = X - ((X - g(Y)) \cup h(A_0)) =
  g(Y) - h(A_0)$。于是 $g^{-1}(B_0) = g^{-1}(g(Y) - h(A_0))$。

由于 $(A_0 \cap g(Y)) \cap B_0 = \varnothing$，
所以 $f(A_0) \cap g^{-1}(B_0) = \varnothing$。同时
因为 $(A_0 - X') \cup B_0 = g(Y)$，所以 $f(A_0) \cup g^{-1}(B_0)=Y$。

定义
\[
\iota(x):= \begin{cases}f(x), &如果 x\in A_0;\\
g^{-1}(x), &如果 x\in B_0.
\end{cases}
\]
下证 $\iota \colon X \to Y$ 即所求双射。

首先验证 $\iota$ 确是映射。$B_0$ 是 $g$ 的[[像]]的子集，$g$ 又是单射，
于是 $g^{-1}(x)$ 必是[[单点集]]。

下验证单性。$f(A_0) \cap g^{-1}(B_0) = \varnothing$ 和
$f$ 单与 $g$ 是映射保证 $\iota$ 单。

下验证满性。$f(A_0) \cup g^{-1}(B_0)=Y$ 保证 $\iota$ 满。
:::

## 历史

[[Georg Cantor|Cantor]]于1887年在论文
*Mitteilungen zur Lehre vom Transfiniten*（《关于超限数的注释》）
中首次提出该定理，但没有给出证明。

同年，[[Dedekind]] 写出了一个证明，
但没有发表，亦未告知 Cantor，直至1908年该证明才被 [[Zermelo]] 发现。

1896年，[[Schröder]] 声称写出了一个“证明”，该“证明”于1898年发表但在1902年被
[[Korselt]] 发现是伪证。

[[Bernstein]] 则于1897年在 Cantor 参与的研讨会上发现了一个不依赖选择公理的证明，
该证明于1898年发表。

```terms
Cantor–Schröder–Bernstein 定理:
  en: Cantor–Schröder–Bernstein theorem
  de: Satz von Cantor–Schröder–Bernstein
  fr: théorème de Cantor–Schröder–Bernstein
```
