---
title: 级数
categories: [实分析]
navboxes: [微积分学]
---

**级数**是指形如
\[
x_1 + x_2 + x_3 + \cdots
\]
的表达式，即对[[可数集|可数]]无穷个元素 $x_i$ 求和的表达式，
这里各 $x_i$ 可以是[[实数]]、[[复数]]等等。

这样的无穷求和不一定能得到一个结果。
例如，级数 $1 + 1 - 1 + 1 - \cdots$ 就没有一个明显的结果。
为了严格描述这一现象，我们将求和的结果定义为其前若干项之和的[[极限 (拓扑学)|极限]]。
当该极限存在时，就称之为求和的结果，称该级数为**收敛级数**。
否则，称该级数为**发散级数**。

## 定义

::: definition [级数]
设 $V = \mathbb{R}$ 或 $\mathbb{C}$，或更一般的[[拓扑向量空间]]。

- $V$ 中的**级数**是指形如
  \[
  x_1 + x_2 + x_3 + \cdots
  \]
  的表达式，其中每个 $x_i \in V$。该级数也记作
  \[
  \sum_{i=1}^{\infty} x_i \ .
  \]

- 对[[自然数]] $n$，级数 $\sum_{i=1}^{\infty} x_i$
  的第 $n$ 个**部分和**是指元素
  $s_n \in V$，定义为
  \[
  s_n = \sum_{i=1}^{n} x_i \ .
  \]

- 级数 $\sum_{i=1}^{\infty} x_i$
  的**和**是指 $V$ 中的[[极限 (拓扑学)|极限]]
  \[
  s = \lim_{n \to \infty} s_n \ .
  \]
  若该极限存在，则称该级数为**收敛级数**，并记
  \[
  \sum_{i=1}^{\infty} x_i = s.
  \]
  否则，称该级数为**发散级数**。

:::

## 例子

- 级数
  \[
  \sum_{i=1}^{\infty} \frac{1}{2^i}
  \]
  是收敛级数，其和为 $1$，因为其部分和 $s_n = 1 - 1/2^{n}$，
  当 $n \to \infty$ 时趋于 $1$。

- [[调和级数]]
  \[
  \sum_{i=1}^{\infty} \frac{1}{i}
  \]
  是发散级数。

```terms
级数:
  en: series
  fr: série :f
  de: Reihe :f
  ja: 級<きゅう>数<すう>
  ko: 급수 (級數)
收敛级数:
  en: convergent series
  fr: série convergente
  de: konvergente Reihe
  ja: 収<しゅう>束<そく>級<きゅう>数<すう>
  ko: 수렴급수
发散级数:
  en: divergent series
  fr: série divergente
  de: divergente Reihe
  ja: 発<はっ>散<さん>級<きゅう>数<すう>
  ko: 발산급수
部分和:
  en: partial sum
  fr: somme partielle :f
  de: Partialsumme :f
  ja: 部<ぶ>分<ぶん>和<わ>
  ko: 부분합
```
