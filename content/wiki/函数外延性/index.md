---
title: 函数外延性
categories: [类型论]
navboxes: [类型论]
---

**函数外延性**指[[函数类型]]的性质，
说的是“两函数相等当且仅当它们对每个参数返回相同的输出”。

该性质独立于使用[[J 公理]]作为相等类型消去规则的[[Martin-Löf 类型论]]，
在[[同伦类型论]]中是[[泛等公理]]的推论、
[[立方类型论]]和[[观测类型论]]中是定理。

## 定义

<see>[[函数类型]]</see>

### 简单定义

如下是最容易理解，也是最常见的函数外延性定义。

::: definition {@def:funExt}
**函数外延性**指如下类型的实例：对于函数 $f, g:A\to B$，
\[
\mathrm{funExt}:\left(\prod_{a:A} \operatorname{Id}_{B}(f(a), g(a))\right)
  \to \operatorname{Id}_{A\to B}(f,g)
\]
:::

以上定义仅针对简单类型的函数，还有[[$\Pi$ 类型]]的版本：

::: definition {@def:funExtPi}
**函数外延性**指如下类型的实例：对于函数 $f, g:\prod_{a:A} B(a)$，
\[
\mathrm{funExt}:\left(\prod_{a:A} \left( \operatorname{Id}_{B(a)}(f(a), g(a)) \right)\right)
  \to \operatorname{Id}_{\prod_{a:A} B(a)}(f,g)
\]
:::

以上定义中，可以将相等类型改为类型论中的值相等，这种情况下的函数外延性总是成立。

### 更好的定义

[[J 公理]]蕴含 @def:funExt 的逆，即如下函数：

::: lemma {@lem:funUnext}
对于函数 $f, g:A\to B$，
\[
\operatorname{funExt^{-1}}:\operatorname{Id}(f,g)
\to \left(\prod_{a:A} \operatorname{Id}_{B}(f(a), g(a))\right)
\]
:::

类似[[泛等公理]]的叙述有两种，我们也可以重新叙述**函数外延性**，
使得它拥有更好的性质：

::: definition
**函数外延性**指 @lem:funUnext 中所述函数是一个等价。
这个说法等价于 @def:funExt [@TDJ]。
:::

关于“等价”的定义，参见[[泛等公理]]。

## 证明

<see>[[泛等公理]]、[[立方类型论]]</see>

- [[泛等公理]]蕴涵函数外延性。
- [[区间 (同伦类型论)]]的消去规则蕴涵函数的外延性。
- [[立方类型论]]中的区间类型给出了一个函数外延性的证明。
- [[外延类型论]]中能证明函数的外延性。
- [[观测类型论]]中，函数外延性是函数类型上的相等的定义，因此不证自明。
- [[Martin-Löf 类型论]]可以基于多项式构造语义，该语义是函数外延性的[[反模型]]。
  这也间接说明了函数外延性是独立于 Martin-Löf 类型论的。

## 参考文献

```bibliography
TDJ:
  type: preprint
  arxiv: '2301.12405'
  author: 'de Jong, Tom'
  title: Domain Theory in Constructive and Predicative Univalent Foundations
  year: 2023
```

```terms
函数外延性:
  en: function extensionality
```
