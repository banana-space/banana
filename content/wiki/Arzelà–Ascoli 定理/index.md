---
title: Arzelà–Ascoli 定理
aliases: [Arzela–Ascoli 定理, Arzelà-Ascoli 定理]
categories: [泛函分析]
---

<problems>
- “定理和证明”一节中的两个定理缺少证明。
- “例子”一节需要扩充。
</problems>

**Arzelà–Ascoli 定理**说明，
对闭区间 $X = [a, b]$ 上的一族[[连续函数]] $\mathscr{F}$ 而言，以下两个条件等价：

- $\mathscr{F}$ 在[[连续映射空间]] $C (X, \mathbb{R})$ 中[[相对紧]]。
  等价地说，$\mathscr{F}$ 中每个序列都有[[一致收敛]]的子列。

- $\mathscr{F}$ [[等度连续]]并且[[一致有界]]。

Arzelà–Ascoli 定理在若干著名定理的证明中都扮演关键的角色，
用来构造收敛子序列。
这些定理包括[[常微分方程解的存在唯一性]]、[[Montel 定理]]、[[Peter–Weyl 定理]]。

在 Arzelà–Ascoli 定理中，
函数的定义域可以推广到任何[[紧 Hausdorff 空间]]，甚至任何[[收敛空间]]；
函数的到达域也可以推广到任何[[一致空间]]。

## 定理和证明

定理的一种基础情形可以叙述如下。

::: theorem [Arzelà–Ascoli] {@thm-aa-1}
对闭区间 $X = [a, b]$ 上的一族[[连续函数]]
$\mathscr{F} \subset C (X, \mathbb{R})$ 而言，以下两个条件等价：

- $\mathscr{F}$ 中每个序列都有[[一致收敛]]的子列。

- $\mathscr{F}$ [[等度连续]]并且[[一致有界]]。

:::

一般的情形叙述如下，其证明也完全同理。

::: theorem [Arzelà–Ascoli] {@thm-aa-2}
设 $X$ 是[[紧 Hausdorff 空间]]，$Y$ 是[[一致空间]]。
对一族[[连续映射]]
$\mathscr{F} \subset C (X, Y)$ 而言，以下两个条件等价：

- $\mathscr{F}$ 在[[连续映射空间]] $C (X, Y)$ 中[[相对紧]]，
  即具有[[紧空间|紧]]的[[闭包]]，其中 $C (X, Y)$ 带有[[紧开拓扑]]。

- $\mathscr{F}$ [[等度连续]]，并且对任意 $x \in X$，
  集合 $\{ f(x) \mid f \in \mathscr{F} \}$ 在 $Y$ 中相对紧。

:::

::: remark
@thm-aa-2 还可以进一步推广，
事实上，$X$ 可以是任何[[拓扑空间]]。
此时，$C (X, Y)$ 的拓扑应该换成使所有形如
\[
Z \to C (X, Y), \quad z \mapsto f(-, z)
\]
的映射都连续的最强拓扑，
其中 $Z$ 是任何拓扑空间，$f \colon X \times Z \to Y$ 是任何连续映射。

更进一步，$X$ 可以推广到任何[[收敛空间]]，
此时 $C (X, Y)$ 也只是一个收敛空间。
以上两个结论的证明可参阅 [@convergence, §2.4]。
:::

## 例子

## 参考文献

```bibliography
convergence:
  type: book
  label: BB02
  author: [R. Beattie, H.-P. Butzmann]
  title: Convergence Structures and Applications to Functional Analysis
  publisher: Springer
  year: 2002
```

```terms
Arzelà–Ascoli 定理:
  en: Arzelà–Ascoli theorem
  fr: théorème d'Arzelà–Ascoli
  de: Satz von Arzelà–Ascoli
```
