---
title: 正合列
aliases: [短正合列]
categories: [同调代数]
---

<problems>
- “例子”“性质”各节需要扩充。
</problems>

**正合列**是指一列[[映射]]
\[
\cdots \to A \to B \to C \to \cdots ,
\]
其中每个映射的[[像]]都等于下一个映射的[[核 (代数)|核]]。

无穷长的正合列也就是[[链同调]]都为零的[[链复形]]。

## 定义

::: definition [正合列] {@def-exact-sequence}
设 $\mathcal{C}$ 是下列[[范畴]]之一：

- 一个 [[Abel 范畴]]；

- [[带点集合]]范畴 $\mathsf{Set}_*$，
  或[[群]]范畴 $\mathsf{Grp}$。

则 $\mathcal{C}$ 中的一个**正合列**是指
$\mathcal{C}$ 中的一列（有限或无限的）态射
\[
\cdots \to A \to B \to C \to \cdots ,
\]
其中每个映射的[[像]]都等于下一个映射的[[核 (代数)|核]]。
:::

::: definition [短正合列]
形如
\[
0 \to A \to B \to C \to 0
\]
的正合列（@def-exact-sequence）
称为**短正合列**，
其中 $0$ 是 $\mathcal{C}$ 的[[零对象]]。
:::

## 例子

::: example
令 $X$ 是复平面，$\underline{\mathbb{Z}}$
是 $X$ 上与 $\mathbb{Z}$ 结合的[[常值层]]，
$\mathscr{O}_X$ 是[[全纯函数]][[层]]，
$\mathscr{F}$ 是由存在全纯的对数的函数组成的[[预层]]。
在预层范畴中，存在如下正合列：
\[
0\to \underline{\mathbb{Z}} \xrightarrow{\times 2\pi i}
\mathscr{O}_X\xrightarrow{\exp}\mathscr{F}\to 0.
\]
注意，$\mathscr{F}$ 不是层。
:::

::: example
记号同前，现在令 $\mathscr{O}_X^*$ 是可逆全纯函数（等价于无处为 0 的全纯函数）层。
这是一个 Abel 群层，运算为乘法。在层范畴中，有如下**指数正合列**：
\[
0\to \underline{\mathbb{Z}} \xrightarrow{\times 2\pi i}
\mathscr{O}_X\xrightarrow{\exp}\mathscr{O}_X^*\to 1.
\]
:::

## 性质

```terms
正合列:
  en: exact sequence
  de: exakte Sequenz :f
  fr: suite exacte :f
  ja: 完<かん>全<ぜん>系<けい>列<れつ>
```
