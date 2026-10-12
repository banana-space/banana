---
title: 序数
categories: [集合论]
navboxes: [集合论]
---

**序数**是[[自然数]]的推广，
用来给[[集合]]的元素按顺序进行编号，
这里的集合可能是很大的无穷集。
所有序数从小到大排列为
\[
\begin{gathered}
  0, 1, 2, \dotsc,
  \omega, \omega + 1, \dotsc,
  2 \omega, 2 \omega + 1, \dotsc, \\
  \omega^2, \omega^2 + 1, \dotsc,
  \omega^2 + \omega, \dotsc, \omega^\omega, \dotsc {} \dotsc
\end{gathered}
\]
其中 $\omega$ 是[[最小无穷序数]]，
即大于所有自然数的最小序数。

## 定义

::: example {@eg-ordinal}
定义序数的关键想法是，序数可以和[[良序集]]对应起来。例如，

- 良序集 $n = \{ 0, \dotsc, n-1 \}$ 对应序数 $n$。

- 良序集 $\mathbb{N} = \{ 0, 1, 2, \dotsc \}$ 对应序数 $\omega$。

- 良序集 $\{ 0, 1, 2, \dotsc, \omega \}$ 对应序数 $\omega + 1$。

- 良序集 $\{ 0, 1, 2, \dotsc, \omega, \omega + 1 \}$ 对应序数 $\omega + 2$，

如此等等。
:::

因此，我们可以定义序数为良序集的同构类。
但这样做的缺点是，每个序数将会成为一个[[真类]]，这会带来一些麻烦。
例如，我们不能讨论由一些序数构成的集合。

在集合论中，我们通常采用以下定义，而避免上述问题。
这个定义将序数 $\alpha$ 定义为所有小于 $\alpha$ 的序数构成的良序集，
它是一个特定的集合，而不是一个等价类。

::: definition [序数] {@def-ordinal}
**序数**是指[[集合]] $\alpha$，满足如下条件：

- $(\alpha, \in)$ 是[[良序集]]。

- $\alpha$ 是[[传递集合]]，
  即如果 $\gamma \in \beta$ 且 $\beta \in \alpha$，那么 $\gamma \in \alpha$。

:::

::: remark
在 [[ZF 集合论]]中，由于[[正则公理]]，以上定义第一条可减弱为
“$(\alpha, \in)$ 是[[全序集]]”。
:::

例如，如果序数 $\alpha$ 不是空集，那么传递性表明 $0 = \varnothing \in \alpha$。
类似可以说明，如果 $\alpha$ 有至少两个元素，
那么 $1 = \{ \varnothing \} \in \alpha$。

可以验证 @eg-ordinal 中的所有例子都满足 @def-ordinal。

::: definition [后继、极限序数]
序数 $\alpha$ 的**后继**是序数
\[
\alpha + 1 = \alpha \cup \{ \alpha \}.
\]
如果序数 $\lambda > 0$ 不是任何序数的后继，
就说 $\lambda$ 是**极限序数**。
:::

这样 @eg-ordinal 中，$n$、$\omega + 1$、$\omega + 2$
是后继序数，$\omega$ 是极限序数。

::: definition [序数的类]
注意到序数的定义条件可以由一阶语言写出，
所有序数构成一个类，记作 $\mathbf{Ord}$。
:::

## 性质

### 基本性质

下面的命题保证了一开始提到的直观。

::: proposition
对任意[[良序集]] $(X, <)$，存在序数 $\alpha$，
使得 $(X, <)$ 和 $(\alpha, \in)$ 之间有保序的双射。
:::

序数还有一些好的性质，罗列如下。

::: proposition
- 任意序数 $\alpha$ 的元素皆为序数。

- 所有序数构成的类是[[良序]]类。

- 对任意一族序数 $\{ \alpha_i, i \in I \}$，
  它们的并也是序数，是包含它们的最小序数。

:::

### 序数运算

在序数的类 $\mathbf{Ord}$ 上可以定义加法、乘法和幂运算。
序数的运算可以由[[超限归纳构造]]给出。

::: definition [序数加法]
序数加法 $\alpha + \beta$ 定义如下：

- $\alpha + 0 := \alpha$。

- 对后继序数 $\beta + 1$，
  $\alpha + (\beta + 1) :=
        (\alpha + \beta) + 1$。

- 对极限序数 $\beta$，
  \[
  \alpha + \beta =
  \bigcup_{\gamma < \beta} (\alpha + \gamma).
  \]

:::

::: definition [序数乘法]
序数乘法 $\alpha \cdot \beta$ 定义如下：

- $\alpha \cdot 0 := 0$。

- 对后继序数 $\beta + 1$，
  $\alpha \cdot (\beta + 1) :=
        (\alpha \cdot \beta) + \alpha$。

- 对极限序数 $\beta$，
  \[
  \alpha \cdot \beta :=
  \bigcup_{\gamma < \beta} (\alpha \cdot \gamma).
  \]

:::

::: definition [序数幂]
序数幂 $\alpha^\beta$ 定义如下：

- $\alpha^0 := 1$。

- 对后继序数 $\beta + 1$，
  $\alpha^{(\beta + 1)} :=
        (\alpha^\beta) \cdot \alpha$。

- 对极限序数 $\beta$，
  \[
  \alpha^\beta =
  \bigcup_{\gamma < \beta} \alpha^\gamma.
  \]

:::

序数的运算对应了良序集的相应操作。

::: proposition
两个良序集的不交并（两个良序集内部保持原来的序，
第一个良序集中所有元素小于第二个良序集中元素）
得到的良序集的序数是二者序数之和；
两个良序集的 [[Descartes 积]]，
赋予字典序得到的良序集的序数是二者序数之积。
:::

然而序数的幂**不对应**幂集的序数，
即序数与基数二者的幂运算不相容。
例如序数运算 $\omega^\omega = \cup_n \omega^n$
得到的集合的势是 $\aleph_0$，
然而幂集 $\mathbb{N}^\mathbb{N}$ 之势为 $2^{\aleph_0}$。

```terms
序数:
  en: ordinal number
  de: Ordinalzahl :f
  fr: nombre ordinal :m
  la: numerus ordinalis :m
```
