---
title: 部分组合代数
aliases: [Kleene 第一代数]
categories: [递归论]
notices:
  - name: 问题
    items:
      - “性质”一节中关于不动点组合子的引理似乎只对完全组合代数成立：若 $a$ 对任何输入都无定义，则 $a(ya)$ 无定义；一般的部分组合代数中通常只能要求 $ya$ 有定义且 $yab \simeq a(ya)b$。
---

**部分组合代数**是对[[无类型 $\lambda$ 演算|单一类型 $λ$ 演算]]的推广，
它允许函数应用仅对部分情况定义。
这也可以看作一种代数化的[[组合子逻辑]]。

## 定义

记 \(A \rightharpoonup B\) 为从 \(A\) 到 \(B\) 的部分函数的集合。
这可以看作 \(A \to (\{\bot\} \sqcup B)\) 的函数集。

::: definition [部分应用结构]
对于[[集合]] $A$，
其上的**部分应用结构**为对部分输入有定义的二元运算符
\[
m\colon A×A \rightharpoonup A
\]
并且一般 $m(a, b)$ 在有定义的情况下（即 $(a, b) ∈ \operatorname{dom} m$）会记作 $ab$ 或者 $a~b$。
:::

::: definition [同态]
对于集合 $A,B$ 及其各自的部分应用结构，
其上的[[同态]]定义为满足如下条件的函数 $f\colon A→B$：
\[
f(ab)=f(a)f(b)
\]
这个公式隐含了对于有定义的 $ab$，必定存在有定义的 $f(a)f(b)$。
注意 $f$ 必须是全函数，也就是说它对全部输入都有定义。
:::

::: definition [部分组合代数]
在满足如下条件时，
集合 $A$ 及其上的部分应用结构 $m$ 是一个**部分组合代数**：

- 存在 $k∈A$ 使得对于任意 $a, b∈A$ 都有：
  - $ka$ 和 $kab$ 有定义，且
  - $kab=a$

- 存在 $s∈A$ 使得对于任意 $a, b∈A$ 都有：
  - $sa$ 和 $sab$ 有定义，且
  - 对于任意 $c∈A$，$sabc$ 有定义当且仅当 $(ac)(bc)$ 有定义，
    且两者相等。

部分组合代数之间的同态就是它们之上的部分应用结构的同态。
:::

::: definition
部分组合代数中，若其上的部分应用结构 $m\colon A×A\rightharpoonup A$ 是全函数，
那么这是一个**完全组合代数**。
:::

## 例子

- Kleene 第一代数是定义在[[自然数]]集上的部分组合代数。
  考虑所有[[一般递归函数]]组成的集合 \(S \subseteq \mathbb N \rightharpoonup \mathbb N\)。
  它的[[Gödel编码]]给出一个单射 \(e : S \hookrightarrow \mathbb N\)，
  使得求值映射
  \[
  \operatorname{ev}(f,n) =
  \begin{cases}
    e^{-1}(f)(n)  &  (f \in e(S))\\
    \bot & (\text{其他情况})
  \end{cases}
  \]
  是 \(\mathbb N \times \mathbb N \rightharpoonup \mathbb N\) 的一般递归函数。
  令求值映射给出部分应用结构，则由 Gödel 编码的定义容易验证这构成部分组合代数。

## 性质

::: lemma
任意部分组合代数 $A$ 都存在[[恒同映射]]，
即存在 $i∈A$ 使得对于任意 $a∈A$
都有
\[
ia~有定义且~ia=a
\]
:::

::: proof
令 $i=skk$。
:::

::: lemma
任意部分组合代数 $A$ 都存在[[不动点组合子]]，
即存在 $y∈A$ 使得对于任意 $a∈A$
都有
\[
a(ya)~和~ya~有定义且~a(ya)=ya
\]
:::

::: proof
令 $y=s(k(sii))(s(s(ks)k)(k(sii)))$。
:::

```terms
部分组合代数:
  en: partial combinatory algebra
```
