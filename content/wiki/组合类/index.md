---
title: 组合类
categories: [计数组合]
notices:
  - name: 问题
    items:
      - “定义”一节中组合类的定义似乎还应要求每个 $\mathcal{A}_n$ 都是有限集，否则计数序列 $a_n$ 可能不是自然数。
navboxes: [计数组合]
---

在[[组合学]]中，**组合类**是一种描述组合对象的方法。

大致来说，组合类用一个集合来描述组合对象，选取一个特征区分集合内元素，
计算具有相同特征的对象数量来得到计数结果。

例如，全体字符串构成的集合可以是一个组合类，
如果取字符串的长度作为特征，那么可得出具体长度的字符串的数量。

将组合类的概念与[[生成函数]]和[[分析学]]等结合，
将获得更强大的工具来计算组合对象的数量。

## 定义

::: definition [组合类]
**组合类**是一个二元组 $(\mathcal{A}, |\cdot|)$，
其中 $\mathcal{A}$ 是[[离散集]]，$|\cdot| \colon \mathcal{A} \to \mathbb{N}$ 是特征函数。
:::

如果无歧义，$(\mathcal{A}, |\cdot|)$ 亦可直接记作 $\mathcal{A}$。

::: definition [计数序列]
给定组合类 $(\mathcal{A}, |\cdot|)$，
记特征为 $n$ 的对象构成的集合为 $\mathcal{A}_n$，即
\[
\mathcal{A}_n = \{\alpha \in \mathcal{A} \mid |\alpha| = n\}.
\]
则其**计数序列**记为 $\{a_n\}$，使得 $a_n = |\mathcal{A}_n|$。
:::

考虑到使用组合类最终的目的是获得计数结果，组合类使用如下的等价概念：

::: definition [组合类的同构]
组合类 $\mathcal{A}$ 和 $\mathcal{B}$ **同构**当且仅当它们的计数序列完全相同，
即 $\forall n \in \mathbb{N}, a_n = b_n$。记为 $\mathcal{A} \cong \mathcal{B}$。
:::

如果该同构平凡，亦可记为 $\mathcal{A} = \mathcal{B}$。

## 例子

::: example [字符串集]
给定有限非空字符集 $\Sigma$，全体字符串构成的集合可表示为
\[
\Sigma^{\ast} = \{\varnothing\} \cup \Sigma \cup \Sigma^2 \cup \dots
\]
其中 $\Sigma^n$ 表示 $n$ 个 $\Sigma$ 的 [[Descartes 积]]。

特征函数定义为
\[
\operatorname{len}(s) =
\begin{cases}
  k, & s \in \Sigma^k \\
  0, & s = \varnothing
\end{cases}.
\]

则对于组合类 $(\Sigma^\ast, \operatorname{len})$，
计数序列 $\{\sigma_n\}$ 的每一项 $\sigma_n = |\Sigma|^n$
代表长度为 $n$ 的字符串的数量。
:::

## 组合类的构造

[[集合论]]的许多基本概念可以类比到组合类上。

### 基本组合类

- 中性类 $(\mathcal{E}, |\cdot|)$ 定义为
  \[
  \mathcal{E} = \{\epsilon\},
  |\epsilon| = 0.
  \]

- 原子类 $(\mathcal{Z}, |\cdot|)$ 包含所有特征为 $1$ 的元素，比如对于单点集：
  \[
  \mathcal{Z} = \{\ast\},
  |\ast| = 1.
  \]

### 可容许的构造

并不是所有集合论的构造方法都能直接用于组合类，为了解释这一点，首先介绍什么是可容许的构造。

::: definition [可容许的构造]
基于若干个组合类的构造方法 $\Phi$ 是**可容许的**
当且仅当该构造得出的计数序列只取决于原组合类的计数序列。
:::

普通的[[并集]]就是不容许的构造，因为它还依赖两个组合类的[[交集]]的计数序列。

::: definition [[[无交并]]构造]
给定组合类 $(\mathcal{A}, |\cdot|_{\mathcal{A}})$
和 $(\mathcal{B}, |\cdot|_{\mathcal{B}})$，
通过无交并构造 $\mathcal{C} = \mathcal{A} \sqcup \mathcal{B}$，其特征函数为
\[
|(\gamma, i)|_{\mathcal{C}} = \begin{cases}
  |\gamma|_{\mathcal{A}}, & i = 0 \\
  |\gamma|_{\mathcal{B}}, & i = 1
\end{cases}.
\]
:::

此时根据[[加法原理]]，$\mathcal{C}$ 中特征为 $n$ 的元素数量即为 $c_n = a_n + b_n$。

::: definition [Descartes 积构造]
给定组合类 $(\mathcal{A}, |\cdot|_{\mathcal{A}})$ 和 $(\mathcal{B}, |\cdot|_{\mathcal{B}})$，
通过 Descartes 积构造 $\mathcal{C} = \mathcal{A} \times \mathcal{B}$，
其特征函数为
\[
|(\alpha, \beta)|_{\mathcal{C}}
= |\alpha|_{\mathcal{A}} + |\beta|_{\mathcal{B}}.
\]
:::

此时根据加法原理和[[乘法原理]]，$\mathcal{C}$ 中特征为 $n$ 的元素数量为
\[
c_n = \sum_{k = 0}^{n}a_{k}b_{n-k}.
\]

## 参考文献

```bibliography
FlajoletSedgewick2009:
  type: book
  author: [Philippe Flajolet, Robert Sedgewick]
  year: 2009
  title: Analytic Combinatorics
  publisher: Cambridge University Press
```
