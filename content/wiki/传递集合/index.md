---
title: 传递集合
aliases: [传递类]
categories: [集合论]
---

<problems>
- “传递模型”一节需要扩充。
</problems>

[[集合论]]中，**传递集合**指的是满足“元素的元素都是元素”的集合，
即[[属于]]关系具有某种传递性。

## 定义

::: definition [传递集合]
称集合 $a$ 为**传递**，指的是
$$
\forall x\forall y((x\in a\wedge y\in x)\rightarrow y\in a).
$$
:::

注意这和集合 $a$ 上的二元关系 $\in$ 的传递性是两个概念。

对[[类]]也有一样的概念。

::: definition [传递类]
称类 $A$ 为**传递**，指的是
$$
\forall x\forall y((x\in A\wedge y\in x)\rightarrow y\in A).
$$
:::

## 例子

- 依定义，[[序数]]都是传递集合。

- 每个 [[von Neumann 宇宙|von Neumann 层级]]与
  [[Gödel 可构造层级]]也都是传递集合。

- 还可随手写出其它具体例子，比如
  $$
  \{\{\},\{\{\}\},\{\{\{\}\}\}\}.
  $$

## 性质

下面是传递性的几个显然等价的描述。

::: proposition
集合 $a$ 传递当且仅当其每个元素都是其子集，
等价于 $\cup a\subseteq a$，也等价于
$a\subseteq\mathcal{P}(a)$。这里 $\cup a$
的意思和[[并公理]]中一样，表示 $a$ 的所有元素的并；
$\mathcal{P}(a)$ 表示 $a$ 的[[幂集]]。
:::

以下是从传递集产生新的传递集的方法。

::: proposition {@保持}
- 如 $a$ 为传递，则 $\cup a$ 亦然。

- 如 $a$ 的每个元素都为传递，则 $\cup a$
  与 $a\cup{\cup a}$ 都是传递集合。

- 传递集合的任意交仍为传递集合。

:::

::: proof
- 如 $a$ 为传递，则 $\cup a\subseteq a$，
  从而 $\cup{\cup a}\subseteq\cup a$，于是
  $\cup a$ 亦为传递。

- 如 $a$ 的每个元素都为传递，考虑任一 $x\in\cup a$。
  设 $b\in a$ 满足 $x\in b$，则由 $b$ 传递便知
  $x\subseteq b\subseteq\cup a$，所以 $\cup a$ 传递。
  再考虑任一 $y\in a\cup{\cup a}$。如 $y\in\cup a$，
  同上；如 $y\in a$，也有 $y\subseteq\cup a$；
  不论如何，$y\subseteq\cup a\subseteq a\cup{\cup a}$，
  所以 $a\cup{\cup a}$ 传递。

- 考察交集的一个元素。它属于这些传递集合中每一个，
  从而由传递性它也包含于这些传递集合中每一个，从而包含于交集。
  故交集传递。

:::

### 传递闭包

集合 $a$ 的**传递闭包**是包含 $a$ 的最小传递集。由
@保持，只要存在包含 $a$ 的传递集，全取交就会得到最小的。
下面的命题显式描述了传递闭包，自然也证明了存在性。

::: proposition
集合 $a$ 的传递闭包为
$$
\operatorname{tr.cl}(a)=\cup\{a,\cup a,\cup{\cup a},\ldots\},
$$
可用[[并公理]]、[[替换公理模式]]、[[无穷公理]]作出。
:::

::: proof
先来作命题中的集合。首先用无穷公理取出自然数集 $\mathbb{N}$。
再用替换公理模式，将自然数 $n$ 替换为 $\cup^na$，
即 $a$ 做 $n$ 次并集操作，可得集合
$$
\{a,\cup a,\cup{\cup a},\ldots\}.
$$
更严格地说，就是把替换公理模式中的公式 $Q(x,y,w)$ 取为
$$
\exists f(\textbf{Fun}(f)\wedge f(0)=a\wedge
\forall v(f(v\cup\{v\})=\cup f(v))\wedge f(x)=y),
$$
集合 $w$ 取为 $\mathbb{N}$；这里 $\textbf{Fun}(f)$ 指的是 $f$
是个[[映射 (集合论)|映射]]，后面的 $f(0),f(v)$ 是映射代值的简写。
这样再用并公理即可作出 $\operatorname{tr.cl}(a)$。

再来证明它就是传递闭包。首先它传递：如 $x\in\operatorname{tr.cl}(a)$，
设 $n\in\mathbb{N}$ 满足 $x\in\cup^na$，则有
$x\subseteq\cup^{n+1}(a)\subseteq\operatorname{tr.cl}(a)$。
其次它显然包含 $a$。最后，如传递集合 $t$ 满足 $a\subseteq t$，
则利用 $\cup t\subseteq t$ 容易归纳证明对任意 $n\in\mathbb{N}$
都有 $\cup^na\subseteq t$，于是 $\operatorname{tr.cl}(a)\subseteq t$。
所以这样作出的 $\operatorname{tr.cl}(a)$ 就是 $a$ 的传递闭包。
:::

## 传递模型

```terms
传递集合:
  en: transitive set
  de: transitive Menge
  fr: ensemble transitif
  la: copia transitiva
传递闭包:
  en: transitive closure
  de: transitive Hülle
  fr: clôture transitive
  la: clausura transitiva
```
