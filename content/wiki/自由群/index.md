---
title: 自由群
categories: [群论]
---

**自由群**指生成元之间除了群的定义中所要求的那些条件外，
没有其它约束条件的群。

## 定义

::: definition {@def-freegrp}
对集合 $S$，其生成的**自由群**为

- 其下集合
  \[
  F_S = \{ a_1^{k_1} \dots a_n^{k_n} \mid
  a_i \in S, k_i \in \mathbb{Z} \} / \sim.
  \]
  这里 $a_1^{k_1} \dots a_n^{k_n}$ 是一个可以为空的字符串。
  而 $\sim$ 是由下述关系[[生成 (等价关系)|生成]]的等价关系：
  \[
  \begin{aligned}
    P a^0 Q & \sim P Q, \quad \forall a \in S, \\
    P a^{k_1} a^{k_2} Q & \sim P a^{k_1 + k_2} Q, \quad \forall a \in S.
  \end{aligned}
  \]
  这里 $P,\ Q$ 是形如上述的字符串。

- 乘法
  \[
  (a_1^{k_1} \dots a_n^{k_n}) \cdot (b_1^{l_1} \dots b_m^{l_m})
  = a_1^{k_1} \dots a_n^{k_n}b_1^{l_1} \dots b_m^{l_m}.
  \]

- 单位元
  $e$ 为空字符串。

- 逆元
  \[
  (a_1^{k_1} \dots a_n^{k_n})^{-1} = a_n^{-k_n} \dots a_1^{-k_1}.
  \]

如 $S$ 的[[势]]为有限数 $n$，$F_S$ 也被记为 $F_n$，即 $n$ 个元素生成的自由群。
:::

::: remark
$S \mapsto F_S$ 的对应给出了从[[集合范畴]]到[[群范畴]]的[[函子]]。
:::

## 性质

::: proposition
函子 $S \mapsto F_S \colon \mathsf{Set} \to \mathsf{Grp}$
是遗忘函子
$\operatorname{For} \colon \mathsf{Grp} \to \mathsf{Set}$
的左[[伴随函子]]。
:::

自由群可以简单地使用[[基本群]]实现。

::: proposition
$S$ 生成的自由群是 $S$ 中元素个数个[[圆环]] $S^1$ 的一点并的[[基本群]]：
\[
F_S = \pi_1( \bigvee_{i \in S} S^1 ).
\]
:::

由此可以使用[[代数拓扑]]的手段以研究**自由群**以及其相关物。例如：

::: proposition
自由群的子群是自由群。对有限生成情况，
$F_n$ 的指数为 $k$ 的子群同构于 $F_{(n-1) k + 1}$。
:::

::: proof
由[[覆叠空间理论]]，子群对应覆叠空间的基本群，
圆环的一点并为一维 [[CW 复形]]，其覆叠空间仍为一维CW 复形，
因此基本群仍为自由群。

对有限情形，$F_n$ 是 $n$ 个 $S^1$ 的一点并 $X$ 的[[基本群]]。
由[[覆叠空间理论]]，$F_n$ 的指数为 $k$ 的子群对应 $X$ 的 $k$ 重覆叠的基本群，
它由 $k$ 个点和 $k n$ 条边构成。
此一空间同伦等价于 $(n-1) k + 1$ 个圆环的一点并，其基本群为 $F_{(n-1) k + 1}$。
:::

::: proposition
自由群的 Abel 化是 [[自由 Abel 群]]。
:::

## 例子

- [[空集]]生成的自由群为[[平凡群]]。

- [[单点集]]生成的**自由群**为[[整数|整数群]] $\mathbb{Z}$。

```terms
自由群:
  en: free group
  de: freie Gruppe
  fr: groupe libre
  grc: ἐλευθέρα ὁμάς
  la: caterva libera
```
