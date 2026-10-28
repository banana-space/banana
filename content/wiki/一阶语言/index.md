---
title: 一阶语言
categories: [谓词逻辑]
navboxes: [逻辑学]
---

<problems>
- “Löwenheim–Skolem 定理”一节的陈述似乎缺少 $M$ 是无穷结构、$\kappa$ 是无穷基数的条件，其中的 $|L|$ 似乎应为 $|\mathcal{L}|$。
</problems>

在[[逻辑学]]中，**一阶语言**是一类[[形式语言]]，是[[一阶逻辑]]使用的语言。
大部分现代数学都基于一阶逻辑，
例如[[主流数学]]的基础 [[ZFC 集合论]]便是由一阶语言写出的。

## 定义

我们认为一阶逻辑是严格讨论数学的基础，故在有一阶语言之前并无所谓
“严格”，以下定义也不是严格写的，而是用自然语言或者说[[元语言]]写的。
认为集合论比一阶逻辑更基本的读者大可用集合论写以下定义。

一个**一阶语言** $\mathcal{L}$ 由如下几部分符号组成：

- **[[函数符号]]**（有时简称**函数**）。
  每个函数 $f$ 都唯一指定[[自然数]] $n$，
  称为**元数**，或称 $f$ 为 $n$ 元函数。$0$ 元函数称为**常数**。

- **[[谓词]]**。每个谓词 $p$ 也有元数；
  $n$ 元谓词大致是指含有 $n$ 个[[自由变量]]的[[命题]]。

- **[[变量]]**，即用于指代不固定对象的符号。

以及**逻辑符号**：

- $0$ 元谓词 $\bot$，代表**矛盾**，或者说 **[[假]]**。

- **[[逻辑连接词]]** $\neg$、$\wedge$、$\vee$，
  分别代表 **[[非]]**、**[[与]]**、**[[或]]**。

- **[[量词]]** $\forall$、$\exists$，代表**任意**、**存在**。

## 例子

- [[Peano 公理]]的语言有一个 1 元函数 $\textsf{suc}$ 即“取后继”的操作，两个 2 元函数
  $+$、$×$ 即加法和乘法，以及一个 2 元谓词 $=$。

- [[ZFC 集合论]]的语言没有函数，只有一个谓词 $\in$，为 2 元。
  （这里不需要 $=$，而可以用外延公理将 $a=b$ 视为
  $\forall x(x\in a\leftrightarrow x\in b)$ 的简写。）

## 句法

以下这些概念的定义和上面一样也是用自然语言写的。

### 项

**项**递归定义如下：

- 单个变量是项。

- 如 $f$ 是 $n$ 元函数，$t_1,\ldots,t_n$ 是项，
  则 $f(t_1,\ldots,t_n)$ 是项。

### 公式

**公式**递归定义如下：

- 如 $p$ 是 $n$ 元谓词，$t_1,\ldots,t_n$ 是项，
  则 $p(t_1,\ldots,t_n)$ 是公式。这种公式称为**元公式**。

- 如 $P,Q$ 是公式，则它们的逻辑连接 $\neg P$、
  $P\wedge Q$、$P\vee Q$ 是公式。
  $\neg,\wedge,\vee$ 称为 **[[逻辑连接词]]**。

- 如 $P$ 是公式，$x$ 是变量，则 $\forall x P$、
  $\exists x P$ 是公式。
  $\forall,\exists$ 称为 **[[量词]]**。

实际书写公式时还会使用 $P→Q$、$P\leftrightarrow Q$
的记号；$P→Q$ 是 $\neg P\vee Q$ 的简写，
$P\leftrightarrow Q$ 是 $(P→Q)\wedge(Q→P)$
的简写。

### 变量

<see>[[变量]]</see>

变量在项和公式中的**出现**递归定义如下：

- 变量 $x$ 在项 $x$ 中有一次出现。

- $x$ 在项 $f(t_1,\ldots,t_n)$ 中的一次出现，
  指的是一个 $i\in\set{1,\ldots,n}$，以及 $x$ 在项 $t_i$ 中的一次出现。

- $x$ 在元公式 $p(t_1,\ldots,t_n)$ 中的一次出现，
  指的是一个 $i\in\set{1,\ldots,n}$，以及 $x$ 在项 $t_i$ 中的一次出现。

- $x$ 在 $\neg P$ 中的一次出现指的是其在 $P$ 中的一次出现。
  $x$ 在 $P\wedge Q$、$P\vee Q$ 中的一次出现指的是其在 $P$
  中的一次出现或其在 $Q$ 中的一次出现。

- $x$ 在 $\forall x P$、$\exists x P$ 中的一次出现指的是其在
  $P$ 中的一次出现。这种出现称为**绑定**的。

不绑定的出现称为**自由**的。注意同一个公式中一个变量可以同时绑定出现和自由出现：
比如 $x=0\wedge\exists x(x=1)$ 中，$x$ 的第一次出现就是自由的，
第二次出现就是绑定的。一个公式中如所有变量的所有出现都绑定，则称其为**闭**的。
闭公式也称为**语句**。

### 演绎

一个 **[[相继式]]** 定义为一个表达式 $\Phi\vdash\chi$，
其中 $\Phi$ 是一个公式集，$\chi$ 是一个公式。

一段 **[[演绎]]** 是一个有限[[树]]，每一个节点是一个相继式，
节点之间的关系满足一些 **[[推导规则]]**。

如果存在一段演绎使得其全部的分支的前提总是没有条件的相继式、
而最终结论是 $\Phi\vdash\chi$，
我们说 $\Phi$ **证明**（或**句法蕴涵**）$\chi$，
也记作 $\Phi\vdash\chi$。

有时也把演绎直接称为证明。

## 语义

假设 $\mathcal{L}$ 是一个一阶语言。

### 结构

一个 **$\mathcal{L}$-结构** 是一个二元组 $(A,[A])$，
其中 $A$ 是一个[[集合]]，而 $[A]$ 是一个指派：

- 对于 $n$ 元函数 $f$，指派一个 $n$ 元[[函数(集合论)|函数]]
  $f[A]\colon A^n→ A$。

- 对于 $n$ 元谓词 $p$，指派一个 $n$ 元[[关系(集合论)|关系]]
  $p[A]\subset A^n$。

### 项的翻译

假设 $A$ 是一个 $\mathcal{L}$-结构，
一个**参数**指的是一个函数 $S\colon\mathcal{V}→ A$。
其中 $\mathcal{V}$ 是所有变量组成的集合。

假设 $t$ 是一个项，
则 $t$ 在参数 $S$ 下的**翻译** $t[A](S)$ 递归定义为：

- 如果 $t$ 是变量 $x_i$，则 $t[A](S)=S(x_i)$。

- 如果 $t$ 是 $f(t_1,\ldots,t_n)$，则
  $t[A](S)=f[A](t_1[A](S),\ldots,t_n[A](S))$。

### 可满足性

给一个 $\mathcal{L}$-结构 $A$ 与参数 $S$，
那么对于任意公式 $P$ 我们可以如下归纳定义：

- $A\not\models\bot(S)$。

- 对于任意元公式 $P=p(t_1,\ldots,t_n)$，
  定义 $A\models P(S)$ 如果
  $(t_1[A](S),\ldots,t_n[A](S))\in p[A]$。

- 定义 $A\models\neg P(S)$ 如果 $A\not\models P(S)$。

- 定义 $A\models P\wedge Q(S)$ 如果 $A\models P(S)$ 且 $A\models Q(S)$。

- 定义 $A\models P\vee Q(S)$ 如果 $A\models P(S)$ 或 $A\models Q(S)$。

- 定义 $A\models\forall x P(S)$ 如果对于任意参数 $S'$ 满足
  $S'|_{\mathcal{V}\backslash\{x\}}=S|_{\mathcal{V}\backslash\{x\}}$，
  有 $A\models P(S')$。

- 定义 $A\models\exists x P(S)$ 如果存在参数 $S'$ 满足
  $S'|_{\mathcal{V}\backslash\{x\}}=S|_{\mathcal{V}\backslash\{x\}}$，
  使得 $A\models P(S')$。

如果 $A\models P(S)$，就说 $P$ 在参数 $S$ 下**可满足**，
否则称其为**不可满足**。

一个语句的可满足性不依赖于参数的选取，
故此时简记为 $A\models P$ 或 $A\not\models P$。

### 模型

设 $\Phi$ 是一个公式集。

一个 $\mathcal{L}$-结构 $A$ 与一个参数 $S$
是 $\Phi$ 的一个**模型**，如果任意公式 $P\in\Phi$，
有 $A\models P(S)$。
如果 $\Phi$ 的一个模型存在，则称 $\Phi$ 是**可满足的**。

又设 $P$ 是一个公式。

称 $\Phi$ **语义蕴涵** $P$，记作 $\Phi\models P$，
如果 $\Phi$ 的任意模型都是 $\{P\}$ 的模型。

## 性质

相比于[[高阶逻辑]]，[[一阶逻辑]]有一些良好且独有的性质。

### 完备性

<see>[[Gödel 完备性定理]]</see>

一阶逻辑有完备性，即 Gödel 完备性定理：语义蕴涵等价于句法蕴涵。
假设 $\mathcal{L}$ 是一个一阶语言，
则对于任意公式集 $\Phi$ 和公式 $\chi$，
有
\[
\Phi\models\chi\iff \Phi\vdash\chi.
\]
它建立了[[模型论]]和[[证明论]]之间的关系。

### 紧性

<see>[[紧性定理]]</see>

一阶逻辑具有紧性，
即公式集 $\Phi$ 有模型等价于它的每一个有限子集有模型。
这是一个常用的构造模型的方法。

它可以直接由 Gödel 完备性定理推出。

### Löwenheim–Skolem 定理

<see>[[Löwenheim–Skolem 定理]]</see>

Löwenheim–Skolem 定理说的是，
对于所有 $\mathcal{L}$-结构 $M$，
以及满足如下条件的[[基数]] $\kappa$，
则存在势为 $\kappa$ 的 $\mathcal{L}$-结构 $N$，
使得：
- 如果 $|L|\leq\kappa\leq |M|$，
  那么 $N$ 是 $M$ 的初等子模型。
- 如果 $|M|<\kappa$，
  那么 $N$ 是 $M$ 的初等扩张。

对 [[ZFC 集合论]]使用可以得到著名的 [[Skolem 佯谬]]。

## 参考文献

```bibliography
EFT:
  type: book
  author: [H.-D. Ebbinghaus, J. Flum, W. Thomas]
  title: Mathematical Logic
  edition: 2
  publisher: Springer
  year: 1994
```

```terms
一阶语言:
  en: first-order language
  de: Sprache erster Stufe
  fr: langage du premier ordre
  grc: γλῶττα πρώτου βαθμού
  la: lingua ordinis primae
函数:
  en: function
  de: Funktion :f
  fr: fonction :f
  grc: συνάρτησις :f
  la: functio :f
项:
  en: term
  de: Term :m
  fr: terme :m
  grc: ὅρος :m
  la: terminus :m
公式:
  en: formula
  de: Ausdruck :m
  fr: formule :f
  grc: τύπος :m
  la: formula :f
语句:
  en: sentence
  de: Satz :m
  fr: énoncé :m
  grc: πρότασις :f
  la: sententia :f
```
