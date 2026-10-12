---
title: 挠模
aliases: [扭模]
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**挠模**，又名**扭模**，
指的是被特定元素[[零化]]的[[模]]，与[[无挠模]]相对。

## 定义

::: definition [整环上的挠模]
设 $A$ 是[[整环]]，$M$ 是 $A$-模。称 $m\in M$
为**挠元**，指的是存在非零元 $a\in A$ 使得
$am=0$。称 $M$ 为**挠模**，指其每个元素都是挠元。
$M$ 的所有挠元显然构成子模，记作 $M_\text{tor}$，
它是挠模。
:::

::: definition [关于元素、理想的挠模]
$A$ 是一般的[[环]]，$a$ 是其元素，$I$ 是其理想，
$M$ 是 $A$-模。

- - 称 $m\in M$ 为 **$a$-挠元**，
    指的是 $am=0$。称 $M$ 为 **$a$-挠模**，
    指的是 $aM=0$。$M$ 的 $a$-挠元显然构成子模，
    记作 $M[a]$，它是 $a$-挠模。

  - 称 $m\in M$ 为 **$I$-挠元**，
    指的是 $Im=0$。称 $M$ 为 **$I$-挠模**，
    指的是 $IM=0$。$M$ 的 $I$-挠元显然构成子模，
    记作 $M[I]$，它是 $I$-挠模。

- - 称 $m\in M$ 为 **$a^\infty$-挠元**，
    指的是存在 $n\in\mathbb{N}$ 使得 $a^nm=0$。称 $M$ 为
    **$a^\infty$-挠模**，指其每个元素都是
    $a^\infty$-挠元。$M$ 的
    $a^\infty$-挠元显然构成子模，记作 $M[a^\infty]$，
    它是 $a^\infty$-挠模。

  - 称 $m\in M$
    为 **$I^\infty$-挠元**，指对每个 $i\in I$，
    $m$ 都是 $i^\infty$-挠元。称 $M$ 为
    **$I^\infty$-挠模**，指其每个元素都是
    $I^\infty$-挠元。$M$ 的
    $I^\infty$-挠元显然构成子模，记作 $M[I^\infty]$，
    它是 $I^\infty$-挠模。

:::

::: remark
显然 $M_\text{tor}$、$M[a]$、$M[I]$、$M[a^\infty]$、
$M[I^\infty]$ 都是相应的挠模范畴到模范畴含入函子的[[右伴随]]。
:::

::: remark
有些地方的 $I^\infty$-挠元定义为存在 $n\in\mathbb{N}$ 使得 $I^nm=0$，
这在 $I$ 不有限生成时和这里不同。这里定义的好处是和
“支在 $V(I)$ 上”完全吻合。
:::

## 例子

- 对 $n\in\mathbb{Z}$，$\mathbb{Z}/n$ 是挠模，是 $n$-挠模。

- $\mathbb{Q}/\mathbb{Z}$ 是挠模，但不是 $n$-挠模，
  也不是 $n^\infty$-挠模，对任意非零整数 $n$。

- $\mathbb{Q}_p/\mathbb{Z}_p$ 是挠模，是 $p^\infty$-挠模，
  但不是 $p^n$-挠模，对任一 $n$。

- [[局部环]] $(A,\mathfrak{m})$ 上[[有限长模]] $M$
  都是 $\mathfrak{m}^\infty$-挠模。事实上由
  [[Nakayama 引理]]易知如 $\ell$ 是 $M$ 的长度，则
  $\mathfrak{m}^\ell M=0$。

- 任取域 $k$，考虑环
  $$
  A=k[[x^{1/\infty}]]=\left\{\sum_{n=0}^\infty
  a_nx^{r_n}\biggm|a_n\in k,\,r_n\in\mathbb{Q}_{\ge0},
  \,r_n\to\infty\right\},
  $$
  理想 $I=(x^{1/\infty})=(x^{1/n})_{n=1}^\infty
  =\{f(x)\in A\mid f(0)=0\}$，模 $M=A/x$。容易发现
  $M$ 为 $I^\infty$-挠模，而对任意 $n\in\mathbb{Z}_+$ 有 $I^n=I$，
  $I^nM\ne0$。

## 性质

::: proposition
$a$-、$I$-挠模的子模、商模、极限、余极限仍是挠模。
这些挠模范畴都是模范畴的 [[Abel 子范畴]]，
且含入函子保持极限、余极限。它们还是 [[Grothendieck Abel 范畴]]。
:::

::: proposition
挠模的子模、商模、扩张、余极限仍是挠模。
这对 $a^\infty$-、$I^\infty$-挠模亦成立。
这些挠模范畴都是模范畴的 [[Serre 子范畴]]，且含入函子保持余极限。
它们也是 Grothendieck Abel 范畴。
:::

以下定理说明 $I^\infty$-挠元就是支在闭集 $V(I)$ 的截面，
用[[拟凝聚层]]的语言即 $M[I^\infty]=\Gamma_{V(I)}
(\operatorname{Spec}A,\widetilde{M})$。

::: theorem
设 $A$ 是环，$I$ 是其理想，$M$ 是 $A$-模，$m\in M$。则

- $m$ 为 $I^\infty$-挠当且仅当其[[支集]]在 $V(I)$ 中。

- $M$ 为 $I^\infty$-挠当且仅当其支集在 $V(I)$ 中。

:::

::: proposition
设 $A$ 是环，$M$ 是 $A$-模。则集合
$$
\{a\in A\mid\text{$M$ 为 $a^\infty$-挠模}\}
$$
是[[根理想]]，且是使 $M$ 为 $I^\infty$-挠模的最大理想 $I$。
:::

::: proposition
设 $A$ 是环，$I=(i_1,\ldots,i_r)$ 是其有限生成理想，
$M$ 是 $A$-模，$m\in M$。则以下几条等价：

1. $m$ 为 $I^\infty$-挠元。

2. 对 $1\le k\le r$，$m$ 为 $i_k^\infty$-挠元。

3. 存在 $n\in\mathbb{N}$ 使得 $I^nm=0$。

:::

```terms
挠模:
  en: torsion module
  de: Torsionsmodul
  fr: module de torsion
```
