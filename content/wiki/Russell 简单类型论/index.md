---
title: Russell 简单类型论
categories: [类型论]
notices:
  - name: 消歧义
    see:
      - page: 简单类型论
---

**简单类型论**是[[Bertrand Russell]]设计的一套用于[[数学的基础]]的理论，
可以看作[[简单类型 λ 演算]]加上一套表示命题的宇宙 $ο$，是[[分歧类型论]]的[[非直谓性|非直谓]]简化。
换言之，数学对象被分为两类：

- 一组类型 $ι_1,ι_2,\cdots$，实例就是我们关心的数学对象。
  比如研究[[实数]]时，全体实数的类型就在这一组类型里面。

- 一个类型 $ο$，实例是命题。命题和命题之间可以有[[蕴含]]关系、进行[[合取]]、[[析取]]等操作。
  这个类型可以类比现代类型论中的[[命题宇宙]]。

在这些类型上，还要加上一些常见的构造，比如[[积类型]]、[[函数类型]]，
比如我们需要能研究 $ι_1 \rightarrow ι_2$ 这样的函数，
和 $ι_1 \times ο$ 这样的二元组。

在考虑数学对象 $ι$ 的“子集”（注意此时没有集合的概念，所以这里不是真正的[[子集]]，
而是在类比子集的思想）时，
使用 $ι \rightarrow ο$ 这样的函数来“过滤”$ι$ 中的元素就达到了研究子集的效果。

[[构造演算]]可以不严谨地看作将简单类型论中的 $ι$ 那一部分换成一个[[依值类型论]]（或者说，
[[Martin-Löf 类型论]]）后得到的类型论。

简单类型论使用 $\lambda $ 符号引入[[变量]]，如 $\fbox{$\lambda x. f(x)$}$，
含义类似传统数学中的 $\fbox{$x \mapsto f(x)$}$。

## 逻辑

简单类型论中，逻辑连接词可以定义为满足特定规则（类似“公理”）的函数：

\[
\begin{aligned}
  \Rightarrow &\colon ο \rightarrow (ο \rightarrow ο) \\
  \lor &\colon ο \rightarrow (ο \rightarrow ο) \\
  \land &\colon ο \rightarrow (ο \rightarrow ο)
\end{aligned}
\]

### 谓词逻辑

简单类型论中，可以定义如下函数
（注意该符号虽然用法类似[[谓词逻辑]]中的同一符号，但在此处是新定义的符号）：

\[
\begin{aligned}
  \forall &\colon (ι \rightarrow ο) \rightarrow ο\\
  \exists &\colon (ι \rightarrow ο) \rightarrow ο
\end{aligned}
\]

::: example {@ex:forall}
谓词逻辑中的命题
\[
\forall n \in ι, n \neq 2
\]
可以翻译为简单类型论中的命题
\[
\forall (\lambda n. n \neq 2) \colon ο
\]
此处 $n \neq 2$ 是一个命题，因此有 $n \neq 2 \colon ο$，
因此有 $\lambda n. n \neq 2 \colon ι \rightarrow ο$，正好适合 $\forall$ 接受的参数类型。
:::

@ex:forall 可以轻易地推广到任意谓词。

假设存在[[自然数类型]]（有 $0$ 和 $s$ 两个[[生成元]]），
那么[[数学归纳法]]可以定义为如下公理：
\[
\forall (\lambda P. P (0) \land
          \forall (\lambda n. P (n) \Rightarrow P (s(n)))
          \Rightarrow \forall (\lambda n.P (n)))
\]

### 高阶逻辑

<see>[[分歧类型论]]</see>

若要讨论任意阶的谓词，将 $\forall$ 中的 $ι$ 不断地换成 $ι \rightarrow ο$ 即可。
因此，可以这样重新定义 $\forall$：

\[
\forall \colon (s \rightarrow ο) \rightarrow ο
\]

这样的话，
允许 $s\in \set{ι, ι \rightarrow ο, (ι \rightarrow ο) \rightarrow ο, \cdots}$
即可在简单类型论中讨论[[高阶逻辑]]。

## 语义

::: definition
简单类型论的 **Henkin 模型**给出如下信息：

- 对于每个类型 $s$，选择一个集合 $M_s$。

- 对于函数类型 $s₁ \rightarrow s₂$，
  选取一个[[映射 (集合论)|映射]] $(M_{s_1} \rightarrow M_{s₂})$ 的子集 $M_{s₁ \rightarrow s₂}$。

且该模型需要满足简单类型论中的所有规则。
:::

::: definition
简单类型论的**标准模型**是满足如下等式的 Henkin 模型：
\[
(M_{s_1} \rightarrow M_{s_2}) = M_{s_1 \rightarrow s_2}
\]
:::

## 参考资料

```bibliography
STT:
  type: article
  title: A Formulation of the Simple Theory of Types
  author: Alonzo Church
  year: 1940
  journaltitle: The Journal of Symbolic Logic
  publisher: Association for Symbolic Logic
  volume: 5
  number: 2
  pages: 56–68
  url: http://www.jstor.org/stable/2266170
  urldate: '2023-01-31'
```
