---
title: '$!$ 模态'
aliases: ['!-模态', 指数模态]
categories: [逻辑学]
navboxes: [逻辑学]
---

<problems>
- “性质”一节中的定理 $!(A ⊕ B) ≅ {!A} ⊗ {!B}$ 中的 $⊕$ 似乎应为加性合取 $\&$。
- “范畴语义”一节需要扩充。
</problems>

在[[线性逻辑]]或者[[线性类型论]]中，
**$!$ 模态**（又叫**指数模态**、**显然模态**、**尖叫模态**）
是用来给出某命题的结构逻辑版本的[[余单子]][[模态]]。
对于线性的命题 $A$，有命题 $!A$，它可以一定程度上和 $A$ 互相转化，
并且 $!A$ 满足[[结构性规则]]。

之所以称之为显然模态，是因为若一个命题“显然”成立，
说明给出它的证明需要费的功夫就可以忽略，因此随意地复制、丢弃它都是无所谓的，
这一点通过“满足结构性规则”体现。

## 定义

对于[[命题]] $A$，有命题 $!A$，作为[[逻辑连接词]]的规则如下：

\[
\frac{Δ, A ⊢ C}{Δ, !A ⊢ C}!L \quad
\frac{!Δ ⊢ A}{!Δ ⊢ {!A}}!R
\]

这些规则定义了 $A$ 和 $!A$ 的互相转化。
然后 $!A$ 满足结构性规则，即[[弱化规则]]和[[收缩规则]]，这些规则省略。

在这些规则中，$!L$ 又叫**丢弃**。

## 性质

::: proposition
$!$ 的[[极性]]既不是正的也不是负的。
:::

对于这一事实的分析，参见[[伴随逻辑]]。

::: theorem
对于命题 $A, B$，有如下命题等价：
\[
!(A ⊕ B) ≅ {!A} ⊗ {!B}
\]
:::

这个等式形式上类似
\[
\exp(a+b) = \exp a × \exp b
\]
因此 $!$ 模态又叫指数模态。

### 范畴语义

## 参考文献

```bibliography
Girard87:
  type: article
  title: Linear logic
  journaltitle: Theoretical Computer Science
  volume: 50
  number: 1
  pages: '1-101'
  year: 1987
  doi: 10.1016/0304-3975(87)90045-4
  url: https://www.sciencedirect.com/science/article/pii/0304397587900454
  author: Jean-Yves Girard
```

```terms
$!$ 模态:
  en: bang modality
指数模态:
  en: exponential modality
显然模态:
  en: of course modality
尖叫模态:
  en: shriek modality
丢弃:
  en: dereliction
```
