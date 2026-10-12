---
title: Zermelo–Fraenkel 集合论
aliases: [ZF 集合论, ZFC 公理, ZFC 集合论, ZFC, ZF 公理, Zermelo-Fraenkel 集合论]
categories: [集合论]
notices:
  - name: 问题
    items:
      - “序数”“基数”“模型”“相容性”“不可决定的命题”各节需要扩充。
navboxes: [集合论]
---

**Zermelo–Fraenkel 集合论**，
简称 **ZF 集合论**，是一种公理化[[集合论]]。
它（以及再加上一条[[选择公理]]的 **ZFC 集合论**）
是绝大部分现代数学的基石。

ZFC 集合论可以用[[一阶语言]]写出。

## 历史

现代[[集合论]]的研究在 19 世纪 70 年代由 Georg Cantor
和 Richard Dedekind 开始。从在[[朴素集合论]]中发现
[[Russell 悖论]]以来，人们便希望能有个免于悖论的严格集合论。

1908 年，Ernst Zermelo 提出了首个[[公理集合论]]，Zermelo 集合论。
然而 Abraham Fraenkel 在其 1921 年给 Zermelo 的信中指出，
有些被当时集合论学家广泛接受的集合和基数，如 $\aleph_\omega$
与 $\{\omega,\mathcal{P}(\omega),\mathcal{P}(\mathcal{P}(\omega)),\ldots\}$，
Zermelo 集合论无法说明其存在性（ZF 中的替换公理才保证其存在）。
此外，Zermelo 集合论还引用了语句的“确定性”概念，
彼时尚没有操作性的定义。1922 年，Fraenkel 和 Thoralf Skolem
独立给出了其操作性定义，说这就是[[基本语句]]只有属于和等于的那些良定[[一阶语句]]。
他们还独立提出 Zermelo 的分出公理应换为替换公理。在 Zermelo
集合论中加入替换公理和由 John von Neumann 提出的良基公理，
便得到 ZF 集合论。再加上选择公理就得到 ZFC 集合论。

## 语言

ZFC 集合论的语言只有一个[[谓词]]，为**属于**，是二元的，记作 $\in$。
可像通常的理论一样加入二元谓词**等于**即 $=$，也可不加入 $=$
而用以下外延公理定义之。

## 公理

以下列举 ZFC 集合论的公理。

### 外延公理

$$
\forall x\forall y(x=y\leftrightarrow\forall z(z\in x
\leftrightarrow z\in y))
$$
可以认为这定义了谓词 $=$。它表达的是两个集合元素一样便是一样的，
即集合由其外延决定。

### 空集公理

$$
\exists x\forall y(\neg{y\in x})
$$
即空集存在。由外延公理，它唯一，记作 $\varnothing$。
$\neg{y\in x}$ 也写作 $y\notin x$。

### 二元集公理

$$
\forall x\forall y\exists z\forall w
(w\in z\leftrightarrow(w=x\vee w=y))
$$
即对任意 $x,y$ 都存在集合 $z$ 恰包含 $x$ 和 $y$。
同样由外延公理，这样的 $z$ 唯一，记作 $\{x,y\}$，
$x=y$ 时记作 $\{x\}$。

### 并公理

$$
\forall x\exists y\forall z(z\in y\leftrightarrow
\exists w(w\in x\wedge z\in w))
$$
即每一族集合都有并。以上语句中 $x$ 即是要并的集族。
由外延公理以上 $y$ 唯一，记作 $\cup x$ 或
$\bigcup_{w\in x}w$。当 $x=\{a,b\}$ 时也记作 $a\cup b$。

### 幂集公理

如集合 $a,b$ 满足 $\forall x(x\in a\rightarrow x\in b)$，
即 $a$ 的元素都是 $b$ 的元素，则称 $a$ 为 $b$ 的子集，记作
$a\subseteq b$。幂集公理为
$$
\forall x\exists y\forall z(z\in y\leftrightarrow
z\subseteq x)
$$
即幂集存在。同样以上 $y$ 唯一，记作 $\mathcal{P}(x)$。

### 分出公理模式

对公式 $P(x,w)$，只要变量 $u$ 在 $P$ 中不出现，
就有一条分出公理，是公式
$$
\exists u\forall x(x\in u\leftrightarrow
(x\in w\wedge P(x,w)))
$$
的[[全称闭包]]。（$P$ 中可以有其他[[自由变量]]。）
由外延公理，以上 $u$ 唯一，记作 $\{x\in w\mid P(x,w)\}$。

用分出公理模式可以定义交集：对满足 $\exists xP(x)$ 的语句 $P(x)$，
取 $a$ 使 $P(a)$ 成立，定义
$\cap P=\{y\in a\mid\forall x(P(x)\rightarrow
y\in x)\}$，显然这和 $a$ 的选取无关。
这也记作 $\bigcap_{P(x)}x$。
当 $P(x)$ 为 $x=a\vee x=b$ 时也记作 $a\cap b$。

### 替换公理模式

对公式 $Q(x,y,w)$，只要变量 $z,u$ 在 $Q$ 中不出现，
就有一条替换公理，是公式
$$
(\forall x\forall y\forall z((Q(x,y)\wedge Q(x,z))
\rightarrow y=z))\rightarrow\exists u
\forall y(y\in u\leftrightarrow\exists x(x\in w\wedge
Q(x,y,w)))
$$
的[[全称闭包]]。（$Q$ 中可以有其他[[自由变量]]。）
满足 $\forall x\forall y\forall z((Q(x,y)\wedge Q(x,z))
\rightarrow y=z)$ 的 $Q(x,y)$ 是[[映射]]的形式表达，
其定义在 $\exists y Q(x,y)$ 的 $x$ 上。替换公理模式说的无非就是，
在能用公式表达出的映射之下，集合的像仍是集合。

以上两个公理模式常被简称作公理。实际上替换公理能推出分出公理：
取 $Q(x,y,w)$ 为 $P(x,w)\wedge y=x$ 即可。
但习惯上仍保留分出公理在 ZF 中。

### 良基公理

$$
\forall x(x=\varnothing\vee\exists y(y\in x\wedge y\cap x=\varnothing))
$$
该公理不太直观。它大致在说所有的集合都在 [[von Neumann 宇宙]]中。
一般在实际做数学时并不用到它，因为实际数学中做出的具体集合通常本就在
von Neumann 宇宙中。

### 无穷公理

$$
\exists x(\varnothing\in x\wedge\forall y(y\in x\rightarrow
y\cup\{y\}\in x))
$$
这保证[[自然数集]]存在。自然数集定义为所有满足上式的 $x$ 的交，
按之前引入的记号即 $\mathbb{N}=\bigcap(\varnothing\in x\wedge\forall y(y\in x\rightarrow
y\cup\{y\}\in x))$。

只有上面这些公理而无以下选择公理的理论称为 **ZF 集合论**。

### 选择公理

在陈述选择公理之前要先在 ZFC 中表达集合间的映射，为此又得先介绍有序对。

用二元集公理定义有序对 $(x,y)=\{\{x\},\{x,y\}\}$，并对 $a,b$
定义 $a\times b$ 为 $\{(x,y)\mid x\in a\wedge y\in b\}$，
严格按之前引入的记号写即 $\{z\in\mathcal{P}(\mathcal{P}(a\cup b))
\mid\exists x\exists y(x\in a\wedge y\in b
\wedge z=(x,y))\}$。

映射 $f\colon a\to b$ 指的是 $f\subseteq a\times b$
满足 $\forall x(x\in a\rightarrow\exists!y(y\in b\wedge
(x,y)\in f))$，其中 $\exists!yP(y)$ 即存在唯一，是
$\exists yP(y)\wedge\forall y\forall z((P(y)\wedge P(z))
\rightarrow y=z)$ 的简写。也就是说，映射指的是它的图像。
当然，对于 $x\in a$，$f(x)$ 指的就是那个 $y$，满足 $(x,y)\in f$。

那么选择公理就是
$$
\forall x(\varnothing\notin x\rightarrow\exists f
((f\colon x\to\cup x)\wedge\forall y(y\in x
\rightarrow f(y)\in y)))
$$
即每个由非空集组成的族都有选择函数。该公理众所周知，
更多相关内容参见词条[[选择公理]]。

## 基本构造

### 序数

### 基数

### 模型

（用 ZFC 中的集合给[[一阶语言]]以语义）

## 元数学

### 类与 NBG 集合论

[[类]]在 ZFC 中指的是带一个自由变元的语句，形如 $P(x)$。
如存在集合 $p$，$\forall x(P(x)\leftrightarrow x\in p)$，
则称类 $P$ 为集合，否则称为真类。ZFC 中类不被[[量化]]。
ZFC 有个[[保守扩张]] [[NBG 集合论]]，将类也作为被量化的讨论对象。
NBG 与 ZFC 的另一个不同点是其只有有限条公理（ZFC 中有公理模式，
实际上是无穷条公理）。

### 相容性

- [[Gödel 不完备性定理]]
（$\operatorname{Con}(\text{ZF}-\text{良基})\to
\operatorname{Con}(\text{ZF})\to
\operatorname{Con}(\text{ZF}+{\mathbf{V}=\mathbf{L}})$）

### 不可决定的命题

- [[连续统假设]]
- [[Martin 公理]]
- [[Whitehead 问题]]

```terms
Zermelo–Fraenkel 集合论:
  en: Zermelo–Fraenkel set theory
  de: Zermelo–Fraenkel-Mengenlehre
  fr: Théorie des ensembles de Zermelo–Fraenkel
```
