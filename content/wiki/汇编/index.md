---
title: 汇编
aliases: [Omega-集]
categories: [递归论]
---

<problems>
- “定义”一节中 $\mathrm{Asm}(A)$ 是局部积闭范畴的定理缺少证明。
- “立方汇编”一节需要扩充。
</problems>

**汇编**是一种定义[[具现意象]]的工具，
可以理解为集合带上一组[[具现子]]，这些具现子取值于某个固定的[[部分组合代数]]，
扮演了这个集合的某种计算方面的解释的角色。

## 定义

::: definition
令 $A$ 为[[部分组合代数]]，则一个**汇编** $X$ 由如下数据组成：

- [[集合]] $|X|$，

- [[集合映射]] $[-]_X\colon |X| → \mathcal P_{≥1}(A)$，
  其中 $\mathcal P_{≥1}(A)$ 是有元素的 $A$ 的子集的集合。

:::

集合 $[x]_X$ 中的元素对应了[[具现子]]。

::: definition
若映射 $[-]_X$ 的取值均为单点集，那么该汇编是**划分**的。
:::

::: definition
同一个部分组合代数 $A$ 上的汇编 $X, Y$ 之间的态射
$f\colon X → Y$ 为集合映射 $f\colon |X| → |Y|$ 加上如下条件：

存在 $a∈A$ 使得对于任意 $x∈|X|$ 和 $b∈[x]_X$，
满足 $(a \cdot b) ∈ [f(x)]_Y$（这隐含了该表达式在 $A$ 中有定义）。
在这种情况下，称 $a$ **追踪**了映射 $f\colon |X| → |Y|$。
:::

::: remark {@rem:code-irr}
该定义中使用的是 $a$ 的存在性，而不是 $a$ 本身。换言之，
若存在多个不同的 $a$ 都追踪了 $f$，这不意味着存在多个不同的态射。
:::

::: definition
部分组合代数 $A$ 上的汇编构成一个范畴，记作 $\mathrm{Asm}(A)$。
其中，划分的汇编构成的范畴记作 $\mathrm{PAsm}(A)$。
:::

::: theorem
$\mathrm{Asm}(A)$ 是[[局部积闭范畴]]。
:::

## 例子

### $ω$-集

::: definition
令 $\mathcal K_1$ 为[[Kleene 第一代数]]，则其上的汇编叫做 **$ω$-集**，
记 $\mathrm{Asm}(\mathcal K_1)$ 为 $ω\text{-}\mathsf{Set}$。
:::

::: theorem
$ω\text{-}\mathsf{Set}$ 是[[积闭范畴]]。
:::

::: proof
考虑[[单射]] $\braket{-,-}\colon \mathbb N × \mathbb N → \mathbb N$ 可得[[积 (范畴论)|积]]的构造。
[[幂对象]] $Y^X$ 定义如下：

- $|Y^X|$ 为被追踪的映射 $f\colon X → Y$ 的集合。
- $[f]_{Y^X}$ 为追踪 $f$ 的自然数的集合。

:::

::: theorem
[[遗忘函子|遗忘]]具现子的函子 $U\colon ω\text{-}\mathsf{Set} → \mathsf{Set}$
存在一[[全忠实]][[右伴随]] $U \dashv \nabla$，
其中 $\nabla$ 将 $\mathcal K_1$ 全体元素视为任意集合的具现子。
:::

::: proof
该函子全忠实是因为任何集合映射都可以由任何自然数追踪。
该函子为右伴随是因为对于汇编 $X$ 和集合 $Y$，
由 @rem:code-irr 可知如下两命题逻辑等价：
\[
f\colon X → \nabla Y \iff f\colon |X| → Y
\]
:::

### 立方汇编

```terms
汇编:
  en: assembly
划分:
  en: partition
追踪:
  en: track
```
