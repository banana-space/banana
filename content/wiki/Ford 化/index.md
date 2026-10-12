---
title: Ford 化
categories: [类型论]
notices:
  - name: 问题
    items:
      - 开头的例子中构造子 $\operatorname{f0}$ 的类型为 $\operatorname{Fin}1$，按此定义 $\operatorname{Fin}n$ 似乎不是 $n$ 元有限集合。
navboxes: [类型论]
---

在[[类型论]]中，**Ford 化**是一种使用[[相等类型]]和[[归纳类型]]编码[[归纳族]]的手法。

例如，考虑定义如下的有限集合类型：

- 类型定义为 $\operatorname{Fin}:\mathbb N → \mathcal U$，有一个[[自然数类型]]参数，
- 构造子 $\operatorname{f0}:\operatorname{Fin}1$，
- 构造子
  $\operatorname{fs}:\prod_{n:\mathbb N} \left( \operatorname{Fin}n → \operatorname{Fin}(s~n) \right)$。

我们可以将它重新定义为如下等价的归纳类型。对于整组定义，固定 $x:\mathbb{N}$，
我们给出类型 $\operatorname{Fin} x: \mathcal U$ 的构造子：

- 构造子 $\operatorname{f0}:\operatorname{Id}(x, 1) → \operatorname{Fin}x$，
- 构造子
  $\operatorname{fs}:\prod_{n:\mathbb N} \left( \operatorname{Id}(x, s~n) \to \operatorname{Fin}n → \operatorname{Fin}x \right)$。

这样每个构造子都返回了 $\operatorname{Fin} x$，符合归纳类型的要求，
与此同时我们使用相等类型规定 $x$ 的形式。

Ford 化可以将任何归纳族转化为更简单的归纳类型。
归纳族的语义往往非常难以描述，使用 Ford 化可以大大简化类型论的复杂程度。

Ford 化一词来源于 [[Conor McBride]]，出自企业家 Henry Ford 在 1909
年说过的关于福特品牌汽车颜色的名言：

> 任何客户都可以让汽车涂成任何他想要的颜色，只要这个颜色是黑色。

这符合 Ford 化的精神：汽车可以看作一归纳类型，类型为
\[
汽车 : 颜色 \to \mathcal U
\]
而福特汽车则对应如下类型的构造子：
\[
福特汽车 : \prod_{c: 颜色} \left( \operatorname{Id}(c, 黑色) \to 汽车(c) \right)
\]
Henry Ford 这句话的意思就是他的车只有黑色的，这也对应如上构造子的归纳族形式：
\[
福特汽车 : 汽车(黑色)
\]

## 应用

Ford 化可以直观地解释很多关于归纳族的现象。

### 异质相等的宇宙层级

<see>[[异质相等]]</see>

若 $A:\mathcal U_i, a:A$，那么 $\operatorname{Id}_A(a, a) : \mathcal U_i$，
但 $\operatorname{JM}_{A, A}(a, a) : \mathcal U_{i+1}$。
造成该现象的原因是两者作为[[归纳族]]时，虽然指标都用到了[[宇宙 (类型论)|宇宙]]，
但只有异质相等会涉及类型之间的 Ford 化。具体来说，两者作为归纳族定义如下：

- 类型定义 \(\operatorname{Id}:\left( \sum_{A:\mathcal U_i} A × A \right) → \mathcal U_?\)
  和
  \(\operatorname{JM}:\left( \sum_{A:\mathcal U_i}\sum_{B:\mathcal U_i} A × B \right) → \mathcal U_?\)
- 构造子 \(\operatorname{reflId}:\prod_{A:\mathcal U_i} \prod_{x:A} \operatorname{Id}(A, x, x)\)
  和 \(\operatorname{reflJM}:\prod_{A:\mathcal U_i} \prod_{x:A} \operatorname{JM}(A, A, x, x)\)

对它们分别使用 Ford 化，构造子会发生如下变化（注意使用下标的 $\operatorname{Id}$ 是 Ford 化的工具，
而接收三个参数的 $\operatorname{Id}$ 是我们用于和 $\operatorname{JM}$ 类比的相等类型）：

- \(\operatorname{reflId}:\operatorname{Id}_A(x, y) \to \operatorname{Id}(A, x, y)\)
  和
  \(\operatorname{reflJM}:\prod_{p:\operatorname{Id}_{\mathcal U}(A, B)} \operatorname{Id}_B(转换_p(a), b) \to \operatorname{JM}(A, B, x, y)\)

前者的参数类型是 $\operatorname{Id}_A(x, y) : \mathcal U_i$，
后者的参数类型是
$\sum_{p:\operatorname{Id}_{\mathcal U}(A, B)} \operatorname{Id}_B(转换_p(a), b) : \mathcal U_{i+1}$，
一目了然。

### 归纳族的典范形式

归纳族的[[构造规则]]比归纳类型的更为复杂。归纳类型的构造规则完全可以直接视为它的构造子，
而归纳族的构造规则实际上是 Ford 化后的构造子，而不仅仅是构造子们本身。为什么是这样呢？

例如在[[立方类型论]]中，它使用的相等类型——道路相等类型上[[函数外延性]]定理成立，
这也就是说任何实现不同、但行为相同的算法都相等。我们可以认为如下证明存在
（为区分不同的相等类型，此处使用 $\operatorname{Path}$ 代表立方类型论中的相等类型）
\[
⊢ P_{立方} : \operatorname{Path}(冒泡排序, 归并排序)
\]
在[[Martin-Löf 类型论]]中，使用归纳族定义的相等类型 $\operatorname{Id}$ 上函数外延性并不成立，
但如果将立方类型论中的 $\operatorname{Path}$ 类型加入，那么函数外延性会不仅在道路相等类型上成立，
在归纳族的相等类型上也会成立，换言之引入道路相等类型后，能构造出证明
\[
⊢ P_{\text{Martin-Löf}} : \operatorname{Id}(冒泡排序, 归并排序)
\]

::: proof
借助 $P_{立方}$ 将待证明的命题中的归并排序代换为冒泡排序，
命题变为 $\operatorname{Id}(冒泡排序, 冒泡排序)$。
:::

但如果 $\operatorname{Id}$ 的典范形式是它的构造子，这就和如上命题相悖了，
因为 $\operatorname{Id}$ 仅有 $\operatorname{refl}$ 这一构造子，
那如何应用这一构造子使得它能等于 $P_{\text{Martin-Löf}}$ 呢？明显不可能，
因为 $\operatorname{refl}$ 就不可能拥有 $P_{\text{Martin-Löf}}$ 的类型。

那么 $P_{\text{Martin-Löf}}$ 化简了等于什么呢？这个问题的答案不唯一，但 Ford 化给出了一种答案。

使用 $\operatorname{Path}$ Ford 化 $\operatorname{Id}$ 后，
它的构造子类型会变为 $\operatorname{refl} : \operatorname{Path}(x, y) \to \operatorname{Id}(x, y)$，
那么可以单纯地认为 $P_{\text{Martin-Löf}} = \operatorname{refl}(P_{立方})$。

```terms
Ford 化:
  en: Fording
```
