---
title: 宇宙（类型论）
aliases: [Tarski 宇宙]
categories: [类型论]
notices:
  - name: 问题
    items:
      - “宇宙多态”一节需要扩充，宜另立条目。
navboxes: [类型论]
---

[[依值类型论]]中的**宇宙**在思想上类似于“[[类型]]的类型”，一般记作 $\mathcal U$。
为了规避 [[Russell 悖论]]，宇宙不能直接定义为“所有类型的类型”，
否则它就会成为它自己的类型（$\mathcal U : \mathcal U$）。

宇宙可以视为[[Grothendieck 宇宙]]在类型论中的类比。

## 定义

最简单的方案是，对于类型 $X$，直接允许[[相继式]] $Γ⊢ X:\mathcal U$。
更加谨慎的方案是认为 $\mathcal U$ 的元素仅仅是表示类型的符号，并不等同于类型本身。
为了区分，这里使用 $\mathtt X$ 表示类型的符号，$X$ 表示真正的类型。

::: definition [Russell 宇宙]
若 $X : \mathcal U$ 为类型本身，比如对于类型 $\mathbb N$
同时有 $0:\mathbb N$ 和 $\mathbb N:\mathcal U$，
那么该宇宙叫做 **[[Bertrand Russell|Russell]] 宇宙**。
:::

::: definition [Tarski 宇宙]
若 $\mathtt X : \mathcal U$ 为类型的表示，对应的类型则记作 $\operatorname{el}(\mathtt X)$，
比如有 $0:\operatorname{el}(\mathbb N)$ 和 $\mathbb N:\mathcal U$，
那么该宇宙叫做 **[[Alfred Tarski|Tarski]] 宇宙**。[@Tarski]
:::

::: example
在 Tarski 宇宙中，[[形成规则]]和 $\mathcal U$ 的[[构造规则]]之间往往有一定程度的对应。
例如在有[[$Π$ 类型]]的形成规则
\[
\cfrac{Γ ⊢ A \quad Γ, A ⊢ B}{Γ ⊢ Π(A, B)}
\]
时，$\mathcal U$ 也会有构造规则
\[
\cfrac
{Γ ⊢ \mathtt A : \mathcal U \quad Γ, \operatorname{el}(\mathtt A) ⊢ \mathtt{B} : \mathcal U}
{Γ ⊢ Π(\mathtt A, \mathtt B) : \mathcal U}.
\]
然后有如下计算：
\[
\operatorname{el}(Π(\mathtt A, \mathtt B)) :=
Π(\operatorname{el}(\mathtt A), \operatorname{el}(\mathtt B)).
\]
:::

::: definition [Coquand 宇宙] {@def:coquand}
若在Tarski宇宙的基础上，对于一个类型 $X$ 有反向的操作 $R(X) : \mathcal U$ 得到它的表示，则称
其为 **[[Thierry Coquand|Coquand]] 宇宙**。有时候 Coquand 宇宙也被归类为 Tarski 宇宙的变体。
[@Kovács2021]
:::

在强调某个 Tarski 宇宙不支持 Coquand 宇宙的 $R$ 操作时，可以称该宇宙为**弱 Tarski 宇宙**。

在定义类型论的语义时，Tarski（或 Coquand）式宇宙有显著的优点，
比如可以将类型解释为它的实例的[[集合]]，而宇宙 $\mathcal U$ 也不过是一个类型而已，
它的每个实例都有一个对应的集合，就不需要说 $\mathcal U$ 的实例都是集合。
但它无疑也使得关于类型和宇宙的记号变得啰嗦，因此在讨论类型论的宇宙时，
一般使用 Russell 宇宙的写法，并假定它会被解释成 Tarski（或 Coquand）宇宙的形式。

### Coquand 类型规则

根据 @def:coquand，可以写下宇宙作为一个类型的规则：

\[
Γ⊢ \mathcal U
\]

构造规则：

\[
\cfrac{Γ⊢ A}{Γ⊢ R(A):\mathcal U}
\]

消去规则：

\[
\cfrac{Γ⊢ \mathtt A:\mathcal U}{Γ⊢ \operatorname{el}(\mathtt A)}
\]

计算规则：

\[
\begin{aligned}
  R(\operatorname{el}(\mathtt A))&=\mathtt A\\
  \operatorname{el}(R(A))&=A:\mathcal U
\end{aligned}
\]

### 层级

以上两个定义都没有考虑 $\mathcal U$ 本身的类型，处理这个问题有两种方法：

- 让 $\mathcal U$ 这个表达式没有类型。这样，[[F 系统]]里的构造就不能使用了，
  因此这是一个有效但消极的做法。

- 引入**宇宙层级**，即给宇宙加上一个[[自然数]]下标，例如 $\mathcal U_0, \mathcal U_1$，以此类推，
  并且令
  $\mathcal U_i$ 的类型为 $\mathcal U_{i+1}$。

有了宇宙层级之后，就需要处理以下规则的层级
\[
\cfrac{A:\mathcal U_i \quad B:\mathcal U_j}
{A\to B : \mathcal U_{?}}
\]
在[[构造演算]]中，选择的是 $? = j$。构造演算只有两个宇宙层级
$i \in \{0,1\}$。这个选择下如果允许第三个宇宙层级，就会出现
[[Girard悖论]]。因此 $?$ 需要同时不小于 $i$ 和 $j$。最自然的选择是 $\max\{i,j\}$，
注意这里的自然数都是元语言中的自然数，与类型论本身的自然数
没有必然关系。可以看作是为每个 $i,j$ 分别添加了一条规则。

除此之外，宇宙层级还有一个很重要的性质，
即对于 $i<j$ 都存在一个“提升”操作 $\mathcal U_i \to \mathcal U_j$。
如果这个提升操作不需要显式写出来，那么类型的规则就会变成一种[[子类型]]：

\[
\cfrac{Γ⊢ X:\mathcal U_i \quad i \leq j}
{Γ⊢ X:\mathcal U_j}
\]

这种情况下宇宙被称为 **（隐式）累积**的。

::: remark
一般的子类型对类型论整体的性质有很大的破坏性，
但隐式累积的宇宙是相对保守的：它仅仅使得类型的具体层级变得不确定，
而不会引入过多的不确定性。
:::

## 宇宙多态

在有宇宙层级的情况下，定义数学对象会变得不方便，
例如 $\mathcal U_0, \mathcal U_1$ 这两个不同宇宙内的类型上的群结构就变成了不同的定义了，
但我们显然希望能只验证一遍群论的定理就将它推广到任意宇宙层级。

为了方便起见，出现了多种机制来简化这些相同但属于不同宇宙的定义。

## 参考文献

```bibliography
Kovács2021:
  type: preprint
  author: 'Kovács, András'
  title: Generalized Universe Hierarchies and First-Class Universe Levels
  year: 2021
  arxiv: '2103.00223'
Tarski:
  type: book
  title: Intuitionistic type theory
  author: ['Martin-Löf, Per', 'Sambin, Giovanni']
  year: 1984
  publisher: Bibliopolis
  location: Naples
  volume: 9
```

```terms
宇宙:
  en: universe
宇宙层级:
  en: universe hierarchy
宇宙多态:
  en: universe polymorphism
累积:
  en: cumulative
```
