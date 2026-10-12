---
title: 模型
categories: [模型论]
---

在[[模型论]]中，**模型**是使得某个一阶理论在其上为真的结构。
它由论域和一个定义域为非逻辑符号的函数组成。

模型的概念依赖于[[一阶理论]]，有理论才能谈论模型，否则只能谈论结构。
在一般的数学实践中，我们不会特意区分理论和模型，但理论与模型是普遍存在的：
如在抽象代数中，群或域的公理就是理论，而群或域的各种实例则是理论的模型。

## 定义

::: definition [$\mathcal{L}$-结构]
[[一阶语言]]的一个结构$\mathfrak{A}$是一个非空集和一个定义域为$\mathcal{L}$的函数组成的对，
其中$\mathcal{L}$是常元、函数和谓词组成的集合。$\mathfrak{A}$满足下面的条件：

- $\mathfrak{A}$ 指定一个非空集$|\mathfrak{A}|$，称作$\mathfrak{A}$的论域。
- 对每个常元 $c\in \mathcal{L}$，$\mathfrak{A}(c)$ 是论域中的一个元素，记作$c^\mathfrak{A}$。
- 对每个 $n$ 元谓词$P$，$\mathfrak{A}(P)$是论域上的一个 $n$ 元关系，记作$P^\mathfrak{A}$，
  即$P^{\mathfrak{A}}\subseteq |\mathfrak{A}|^n$。
- 对每个 $n$ 元函数$f$，$\mathfrak{A}(f)$是论域上的一个 $n$ 元函数，记作$f^{\mathfrak{A}}$，
  即$f^{\mathfrak{A}}: |\mathfrak{A}|^n\to |\mathfrak{A}|$。

一个结构一般记作$\mathfrak{A}=(|\mathfrak{A}|, c, P, f)$。
:::

::: definition [模型]
我们称一个$\mathcal{L}$-结构$\mathcal{M}$是一阶理论$T$的模型，如果$\mathcal{M}$[[满足]]理论$T$。
:::

## 例子

- 集合论的模型是语言$\mathcal{L}_{\mathrm{set}}=\{\in \}$的结构。

- 结构$(\mathbb{C},0,1,+,\times)$是域理论的一个模型。

- 如果结构$(\mathbb{M},f)$是一个[[存在闭模型]]，那么它是下面理论的模型：

  1. $f$是$\mathbb{M}\to \mathbb{M}$的满射。

  2. 对任意$x\in M$，$|\{y: f(y)=x\}|\geqslant \aleph_0$。

  3. 对任意$n\in \mathbb{N}$，都存在$x\in M$，使得对任意$i<n$，$f^i(x)\neq x$，而$f^n(x)=x$。
     其中$f^n(x)=f(f(f...(x)..))$。

```terms
存在闭模型:
  en: existentially closed model
```
