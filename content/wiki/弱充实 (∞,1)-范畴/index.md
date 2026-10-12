---
title: '弱充实 $(\infty,1)$-范畴'
categories: [高阶代数, 高阶范畴论]
navboxes: [高阶代数, 高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**弱充实 $(\infty,1)$-范畴**是[[模]]在
[[$(\infty,1)$-范畴]]论中的推广：
它之于[[模]]如同[[幺半 $(\infty,1)$-范畴]]之于[[环]]，
虽然它是一种比较松的模。同时它也是[[充实 $(\infty,1)$-范畴]]的推广：
它之于充实 $(\infty,1)$-范畴如同[[幺半范畴]]之于[[闭幺半范畴]]。

## 定义

建议读者在阅读本定义之前先熟悉[[幺半 $(\infty,1)$-范畴]]条目。

::: definition [结合代数模式]
考虑[[代数模式]] $\mathbb{\Delta}^{\mathrm{op},\flat}$ 定义如下：

- 底范畴为 $\mathbb{\Delta}^\mathrm{op}$，即[[单形范畴]]之反；

- 惰性映射为区间含入映射之反；

- 活性映射为保持最大元、最小元的映射之反；

- 初等对象只有 $[1]=\{0,1\}$；

称为**结合代数模式**，因为其 Segal 对象就是结合代数。
幺半 $(\infty,1)$-范畴即此代数模式的 Segal 纤维化。
:::

::: definition [左模模式]
考虑代数模式 $\mathsf{LM}$ 定义如下：

- 底范畴为单形范畴俯范畴之反 $(\mathbb{\Delta}_{/[1]})^\mathrm{op}$
  的[[满子范畴]]，由 $0$ 的原像非空且 $1$
  的原像至多一个元素的那些映射 $[n]\to[1]$ 生成；

- 代数模式结构沿遗忘函子 $([n]\to[1])\mapsto[n]$
  从 $\mathbb{\Delta}^{\mathrm{op},\flat}$ 中继承得来；

称为**左模模式**，因为其 Segal 对象就是结合代数及其左模。

$\mathsf{LM}$ 里有两个初等对象：
$[1]\to\{0\}\subset\{0,1\}=[1]$ 与 $\operatorname{id}_{[1]}$，
分别记作 $\mathfrak{a}$ 与 $\mathfrak{m}$。称 $\mathfrak{m}$ 为**底对象**，因为把
$\mathsf{LM}$ 的 Segal 对象在 $\mathfrak{m}$ 上取值就是取左模的底对象；
称函子
$$
[n]\mapsto([n]\to\{0\}\subset\{0,1\}=[1])\colon
\mathbb{\Delta}^\mathrm{op}\to\mathsf{LM}
$$
为**底代数**，因为把 Segal
对象沿该函子限制就是取出作用于底对象上的那个结合代数。
:::

::: definition [弱充实 $(\infty,1)$-范畴] {@def}
设 $\mathcal{V}^\otimes\to\mathbb{\Delta}^\mathrm{op}$ 是幺半
$(\infty,1)$-范畴。**弱
$\mathcal{V}$-充实范畴**指[[纤维模式]]
$\mathcal{C}^\otimes\to\mathsf{LM}$
及其底代数（即沿上述函子 $\mathbb{\Delta}^\mathrm{op}\to\mathsf{LM}$ 的限制）与
$\mathcal{V}$ 的等同。
注意此定义中 $\mathcal{V}^\otimes\to\mathbb{\Delta}^\mathrm{op}$
无需是幺半范畴，而只需是 $\mathbb{\Delta}^{\mathrm{op},\flat}$ 上的纤维模式，
即只需是[[平面 (∞,1)-算畴|平面算畴]]。

弱充实范畴 $\mathcal{C}^\otimes\to\mathsf{LM}$ 的底对象
（即它在 $\mathfrak{m}\in\mathsf{LM}$ 上的纤维）称为其**底范畴**，
记作 $\mathcal{C}$。没有歧义时，常以 $\mathcal{C}^\otimes$
甚至 $\mathcal{C}$ 代表弱充实范畴
$\mathcal{C}^\otimes\to\mathsf{LM}$。

当 $\mathcal{C}$ 是弱 $\mathcal{V}$-充实范畴时，也称
$\mathcal{V}$ **弱作用**于 $\mathcal{C}$ 上。
:::

::: definition [多重态射]
设 $\mathcal{V}$ 是平面算畴，$\mathcal{C}$
是弱 $\mathcal{V}$-充实范畴，$n\in\mathbb{N}$。考虑映射
$[n+1]\to[1]$，把 $0,1,\ldots,n$ 打到 $0$，把 $n+1$
打到 $1$，则它是 $\mathsf{LM}$ 里的对象，记作 $\mathfrak{m}_n$。在
$\mathsf{LM}$ 里，$\mathfrak{m}_n$ 到 $\mathfrak{a}$ 有 $n$ 个惰性映射，分别对应
含入映射 $\{i-1,i\}\subset[n+1]$，其中 $i=1,\ldots,n$，
而 $\mathfrak{m}_n$ 到 $\mathfrak{m}$ 只有一个映射，对应含入映射
$\{n,n+1\}\subset[n+1]$；这些映射之间没有映射。
于是由于 $\mathcal{C}^\otimes\to\mathsf{LM}$ 是纤维模式，
$\mathcal{C}^\otimes_{\mathfrak{m}_n}=
(\mathcal{C}^\otimes_\mathfrak{a})^n\times
\mathcal{C}^\otimes_\mathfrak{m}=\mathcal{V}^n\times\mathcal{C}$。

对 $V_1,\ldots,V_n\in\mathcal{V}$ 和 $X,Y\in\mathcal{C}$，
定义**多重态射生象**
$$
\operatorname{Mul}_{\mathcal{C}}(V_1,\ldots,V_n,X;Y)=
\operatorname{Hom}_{\mathcal{C}^\otimes}((V_1,\ldots,V_n,X),Y)
\times_{\operatorname{Hom}_\mathsf{LM}(\mathfrak{m}_n,\mathfrak{m})}\{m_n\},
$$
其中 $(V_1,\ldots,V_n,X)$ 表示 $\mathcal{C}^\otimes_{\mathfrak{m}_n}=
\mathcal{V}^n\times\mathcal{C}$ 中相应的对象，
$m_n\colon\mathfrak{m}_n\to\mathfrak{m}$ 是 $\mathsf{LM}$ 里对应于含入
$\{0,n+1\}\subset[n+1]$ 的映射。

当 $\mathcal{V}$ 是幺半范畴时，我们有自然的映射
$$
\operatorname{Mul}_\mathcal{C}(V_1\otimes\cdots\otimes V_n,X;Y)
\to\operatorname{Mul}_\mathcal{C}(V_1,\ldots,V_n,X;Y);
$$
如它是同构，则称 $\mathcal{C}$ 为**伪
$\mathcal{V}$-充实范畴**。
:::

## 例子

- 如 $\mathcal{V}$ 是幺半 $(\infty,1)$-范畴，
  则它典范地弱充实于自身。此弱充实为充实，当且仅当 $\mathcal{V}$
  为左闭幺半。

```terms
'弱充实 $(\infty,1)$-范畴':
  en: 'weakly enriched $(\infty,1)$-category'
弱作用:
  en: weak action
```
