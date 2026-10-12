---
title: Lebesgue 测度
categories: [测度论]
navboxes: [测度论]
---

**Lebesgue测度**是定义在欧几里得空间上的[[测度]]，
用于测量其中特定集合的几何大小。

## 定义

::: definition [体积函数]
给定一个左半闭区间$[a,b) \subseteq \mathbb{R}^d$，
其中$d \in \mathbb{Z}^+$，以及
$a = (\alpha_1,\ldots,\alpha_i,\ldots\alpha_d)$，
$b = (\beta_1,\ldots,\beta_i,\ldots,\beta_d)$，
$\alpha_i \le \beta_i$。
我们定义体积函数$\lambda$为
$$
\lambda[a,b) = \prod_{i=1}^{d}(\beta_i - \alpha_i)
$$
所得出的值称为该左半闭区间的体积。值得注意的是，
空集$\varnothing$也被看作一个左半闭区间（当$a=b$时），
并且其体积为$0$。
:::

::: remark
有些作者可能采用开区间$(a,b)$或闭区间$[a,b]$来定义体积函数，
这在方法上是可行的，甚至也许会更便于理解，但$[a,b)$具有更好的代数
性质，事实上，所有左半闭区间的集类在代数结构上组成了
一个[[半环 (测度论)|半环]]。
:::

::: definition [Lebesgue 外测度]
对于任意集合$A \subseteq \mathbb{R}^d$，
我们定义 Lebesgue 外测度
$\theta \colon \mathcal{P}(\mathbb{R}^d) \to [0,\infty]$
为
$$
\theta(A) = \inf
\left\{
\sum_{n=0}^{\infty}\lambda(I_n)
\Bigm| \textit{$\langle I_n \rangle_{n \in \mathbb{N}}$
是一个左半闭区间序列 $\wedge$
$A \subseteq \bigcup\limits_{n \in \mathbb{N}}I_n$}
\right\}
$$
Lebesgue 外测度事实上符合一般的抽象外测度定义，亦即
具有空集零测性、单调性和可数次可加性。
:::

::: definition [Lebesgue 测度]
在$\mathbb{R}^d$上定义以下集类
$$
\Sigma = \left\{E \in \mathcal{P}(\mathbb{R}^d) \mid
\forall A \in \mathcal{P}(\mathbb{R}^d)
\bigl(\theta(A) = \theta(A \cap E) + \theta(A \setminus E)
\bigr)\right\}
$$
其中的集合被称为[[可测集]]。可以验证$\Sigma$是一个$\sigma$-代数，因而
$(\mathbb{R}^d,\Sigma)$是一个[[可测空间]]。
进而令$\mu = \theta|_{\Sigma}$，可以验证$\mu$是一个定义在$\Sigma$
上的测度，从而$(\mathbb{R}^d,\Sigma,\mu)$是一个[[测度空间]]，
其中$\mu$即是 Lebesgue 测度。
:::

::: remark [作为 Borel 测度]
通过 [[Carathéodory 定理]]可以将上述左半闭区间上的测度扩张到所有
[[Borel 集]]上，给出的 [[Borel 测度]]也称为 Lebesgue 测度，
它的[[完备化 (测度论)]]就是上述定义的 Lebesgue 测度。
:::
