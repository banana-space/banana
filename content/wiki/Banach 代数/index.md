---
title: Banach 代数
categories: [泛函分析]
navboxes: [泛函分析]
---

<problems>
- “例子”一节需要扩充。
</problems>

**Banach 代数**是带乘法的 [[Banach 空间]]。

## 定义

::: definition
**Banach代数**是 $\mathbb{C}$
上[[Banach 空间]]$( A , \left \| \cdot \right \| )$
附带 $\mathbb{C}$-[[结合代数]]结构，满足对任意 $x,y\in A$，
$\|xy\|\le\|x\|\|y\|$。
:::

::: remark
本百科约定[[环]]和[[结合代数]]都含[[幺]]，所以 Banach
代数自然也含幺。当然有时也需要考虑[[无幺环|无幺]]者，
称之为**无幺 Banach 代数**。
:::

::: definition [同态]
Banach 代数 $A$ 到 $B$ 的**同态**指的是保持加法、
乘法、幺元的[[连续映射]] $A\to B$。
:::

::: remark
类似地，其它一些环论概念如[[可逆元]]、[[理想]]等，
自然对 Banach 代数有定义。我们通常直接挪用而不另加说明。
于是同态的核是闭理想。
:::

## 性质

::: theorem
Banach 代数 $A$ 中的可逆元集 $A^\times$ 为开。
:::

::: proof
任取 $a\in A^\times$，要证 $A^\times$ 包含 $a$ 的邻域。
由乘以 $a^{-1}$ 是[[同胚]]，可不妨设 $a=1$。现注意到对
$x\in A$，$\|x\|<1$，有级数 $1+x+x^2+\cdots$ 收敛且给出
$(1-x)^{-1}$，即得结论。
:::

::: corollary
Banach 代数的（左、右、双边）理想闭包还是（左、右、双边）理想，
真（左、右、双边）理想的闭包还是真（左、右、双边）理想。特别地，
极大（左、右、双边）理想为闭。
:::

::: proof
理想的闭包还是理想，是因为（左、右）乘以元素都为连续。
真理想的闭包还是真理想，是因为可逆元集为开，
而理想是真理想当且仅当其与可逆元集无交。
这样极大理想的闭包还是真理想，由极大性它必须等于闭包，故为闭。
:::

## 例子

```terms
Banach 代数:
  en: Banach algebra
  de: Banach-Algebra
  fr: algèbre de Banach
```
