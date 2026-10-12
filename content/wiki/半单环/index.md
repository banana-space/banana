---
title: 半单环
categories: [一般环论]
notices:
  - name: 问题
    items:
      - “性质”“例子”各节需要扩充。
---

**半单环**指的是它作为自身的模是[[半单模]]的那些环，
[[Artin–Wedderburn 定理]]（@thm-artin-wedderburn）说明，
半单环一定是[[除环]]上的[[矩阵]]环的乘积。

## 定义

::: definition
一个[[环]] $R$ 称为半单的，
如果 $R$ 作为 $R$-[[模|右模]]是半单模。
:::

::: remark
可以把如上作为**右半单环**的定义，
相应地定义左半单环。
但是由 [[Artin–Wedderburn 定理]]（@thm-artin-wedderburn）可见，
左半单环和右半单环等价。
:::

## 性质

半单环和半单模可以如下联系：

::: proposition
半单环 $R$ 上的模都是半单 $R$-模。
:::

::: proof
任何 $R$ 模都是自由 $R$ 模的商模，
而半单性在直和、取商下保持，
故任何 $R$ 模半单。
:::

半单环也可以和 [[Artin 环]]联系：

::: proposition
半单环正是那些[[Jacobson 根]]为 $0$ 的 Artin 环。
:::

## 分类

半单环有很好的结构：

::: theorem [Artin–Wedderburn] {@thm-artin-wedderburn}
所有半单环 $R$ 都有如下形式：
\[
R\simeq M_{n_1}(D_1)\times\cdots\times M_{n_k}(D_k).
\]
其中 $D_i$ 是[[除环]]，
$M_n(R)$ 是 $R$ 上 $n$ 阶矩阵环。
并且，这个表达式在不计顺序的意义下是唯一的。
:::

证明见主条目 [[Artin–Wedderburn 定理]]。

::: corollary
交换半单环都是如下的形式：
\[
F_1\times\cdots\times F_n,
\]
其中 $F_i$ 是[[域]]。
:::

## 例子

- 如果 $\operatorname{char} k=0$，
  $G$ 是有限群，
  则 $k[G]$ 是半单的（[[Maschke 定理]]）。

```terms
半单环:
  en: semisimple ring
  de: halbeinfacher Ring
  fr: anneau semi-simple
  grc: ἡμιάπλους δακτύλιος
  la: anellus semisimplex
```
