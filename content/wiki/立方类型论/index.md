---
title: 立方类型论
aliases: [Descartes 立方类型论]
categories: [同伦类型论]
navboxes: [类型论]
---

<problems>
- “复合”“V 类型”各节需要扩充。
- “正则性”一节缺少 J 公理的定义。
</problems>

**立方类型论**是一种[[同伦类型论]]的[[典范性|典范]]“实现”。
有如下两种方式看待立方类型论：

- 语义视角：将依值类型论中的所有对象全部升级为[[方形集]]，这是一种类似[[单纯集]]的[[预层]]，
  但使用[[方形]]代替[[单形]]。

- 语法视角：
  通过重新定义[[Martin-Löf 类型论]]中的[[相等类型]]以将同伦类型论中的公理转化为新的相等类型上的定理。

## 动机

同伦类型论最经典的模型是基于单纯集的，也就是说将依值类型解释为单纯集，
然后将[[泛等公理]]在单纯集中证明出来。但是在当时，
这个模型的构造需要假设[[排中律]]。具体来说，需要假定
一个单纯形要么是退化的，要么不是。不然有许多必须的性质就无法证明。
如果希望将某个模型使用计算机算法实现成编程语言的话，
就不能使用公理，不能为了解决同伦类型论的泛等公理而引入选择公理或者排中律。
而使用[[方形]]的模型没有这些困难，由此启发了立方类型论的设计。
（后来对相关的构造和证明进行改进，去除了[[排中律]]与[[选择公理]]的
使用，并且也有工作提出了单形类型论的概念。）

在类型论中，[[方形]]的表示非常方便：如果某方形上的值类型都是 $X$ 那么它可以表示为如下函数：

\[
\mathbb I → \mathbb I → \cdots → \mathbb I → X
\]

使用逻辑的语言的话，可以写作

\[
x:\mathbb I, y:\mathbb I, \cdots \vdash X(x,y,\cdots)
\]

将 $x, y$ 这样的变量替换为 $0, 1$ 的过程就是退化映射，
而在语境里加入新的变量就是面映射。

## 内容

### 道路类型

立方类型论的基本思想是引入一个类比[[标准区间]]拓扑空间的底层构造 $\mathbb I$，
用这个类型来定义[[道路空间]]的类型，并且用这个类型代替[[相等类型]]。
比如类型 $X$ 上的道路空间就是 $\mathbb I → X$，
而 $x, y: X$ 之间的道路 $\operatorname{Id}_X(x, y)$ 就是函数 $p:\mathbb I → X$ 使得
$p(0)=x,p(1)=y$。
这本质上是相等类型变成了某种特殊的函数类型，因此相等类型可以像函数一样通过 $λ$ 符号被构造、
被传递参数来应用。

相等类型的构造规则，也就是[[自反性]]可以直接定义为常函数。

用这种方式可以轻易地证明[[函数外延性]]。

::: proof
令 $f, g:A→ B$，定义

\[
\begin{aligned}
  \mathrm{funExt} &: (\Pi_{a:A} \operatorname{Id}(f~a, g~a))
  → \operatorname{Id}(f, g)\\
  \mathrm{funExt} &(p)=λi.λx. p(x)(i)
\end{aligned}
\]

其中

\[
\begin{aligned}
  λi.λx. p(x)(i)&:\operatorname{Id}(f, g)\\
  λx. p(x)(i) &: A→ B\\
  p(x) &: \operatorname{Id}(f~x, g~x)
\end{aligned}
\]
:::

但这样定义的话还需要处理[[J 公理]]，也就是相等类型的消去规则。
立方类型论引入了**转换规则**和**复合**来解决这个问题。

### Kan 结构

立方类型论给每个类型的形成规则加入了如下操作：

\[
\cfrac{\Gamma\vdash A:\mathbb I → \mathcal U
\quad \Gamma\vdash r, r': \mathbb I}
{\operatorname{coe}^{r\rightsquigarrow r'}_A:A(r) → A(r')}
\]

该操作对于每个类型的形成规则都必须定义，此处只给出[[函数类型]]的例子：

\[
\begin{aligned}
  \operatorname{coe}^{r\rightsquigarrow r'}_{λ i. A→ B}&:
   (A[r/i] → B[r/i]) → (A[r'/i] → B[r'/i]) \\
  &:= λf. λa. \operatorname{coe}^{r\rightsquigarrow r'}_{λi. B}
  (f(\operatorname{coe}^{r' \rightsquigarrow r}_{λi. A}(a)))
\end{aligned}
\]

其中

\[
\begin{aligned}
  f&:A[r/i] → B[r/i]\\
  a&:A[r'/i]\\
  \operatorname{coe}^{r' \rightsquigarrow r}_{λi. A}(a)&:A[r/i]
\end{aligned}
\]

除此之外，若 $r=r'$ 那么转换操作直接返回参数。换言之，

\[
\operatorname{coe}^{r\rightsquigarrow r}_X=λx.x
\]

### 复合

[[相等类型]]的 $\operatorname{coe}$ 操作并不能像函数类型那样直接通过类型论现有的规则处理。
考虑如下表达式：

\[
\cfrac{p:\operatorname{Id}(a, b)}
{\operatorname{coe}^{0 \rightsquigarrow r}_{λi. \operatorname{Id}(p~i, c)} : \operatorname{Id}(p~0, c) \to \operatorname{Id}(p~r, c)}
\]

根据 $p$ 的类型化简得到

\[
\operatorname{coe}^{0 \rightsquigarrow r}_{λi. \operatorname{Id}(p~i, c)}:\operatorname{Id}(a, c) \to \operatorname{Id}(p~r, c)
\]

类型 $\operatorname{Id}(p~r, c)$ 虽说看起来像是一条 $p~r$ 到 $c$ 的道路，
但如果把 $p~r$ 看作以 $r$ 为方向的道路的话，
这个表达式整体就可以看作一个方块了：

\[
\begin{tikzcd}
  b \ar[r] & c \\
  a \ar[u, "p~r"] \ar[r] & c \ar[u, equal]
\end{tikzcd}
\]

而 $\operatorname{coe}$ 是每个形成规则都必须给出的操作，
此时没有任何类型规则可以构造出上面的方形。
立方类型论引入了方形的复合操作来解决这个问题。

### 正则性

<see>[[Andrew Swan 问题]]</see>

根据以上定义，可将[[J 公理]]定义为：

但 J 公理的计算规则并不成立：对于根据[[自反性]]得到的相等证明，
对它使用 J 公理会触发化简。
在立方类型论中，没有任何一条规则可以给出这样的化简，J 公理的计算规则只能被作为一个定理证明出来，
而不是一个类型论内置的规则。
内置形式的计算规则在立方类型论中叫做**正则性**，在[@Angiuli]的第 3.4 节中给出了一个反例。

### 宇宙

[[宇宙 (类型论)|宇宙]]作为定义[[泛等公理]]不可或缺的类型，
必然也要支持复合。
待复合的宇宙本身也是一种类型，它必须要有构造规则和消去规则。

### V 类型

在以上框架下，直接将泛等公理作为一种新的类型加入类型论即可。

## 开放问题

以下问题在立方类型论中尚未解决：

- 尚未存在高性能的编程语言实现。
- [[Swan 问题]]。

## 参考文献

```bibliography
Angiuli:
  type: thesis
  author: Carlo Angiuli
  title: Computational semantics of Cartesian cubical type theory
  year: 2019
  degree: phd
  institution: Carnegie Mellon University
```

```terms
立方类型论:
  en: cubical type theory
转换规则:
  en: coercion rules
复合:
  en: homogeneous composition
正则性:
  en: regularity
```
