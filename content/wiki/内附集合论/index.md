---
title: 内附集合论
categories: [集合论]
navboxes: [集合论]
---

<problems>
- “与不完备性定理的联系”一节中定理的证明缺失。
- “定义”一节中，$\mathsf{AD}^{fun}$ 的空集公理 $\forall x([\varnothing;x]\not=x)$ 似乎应为 $\forall x([\varnothing;x]\not=\varnothing)$（按内附公理，$w\in x$ 对应 $[x;w]=x$）；相应地，证明中的定义 $x\in y\leftrightarrow [x;y]=x$ 似乎应为 $x\in y\leftrightarrow [y;x]=y$。
</problems>

内附集合论是一个用于建立[[Gödel 不完备性定理]]的弱集合论。

## 定义

有三种定义内附集合论的方案。

::: definition [仅用集合论语言的内附集合论]
我们称一阶集合论语言$\mathcal{L}_\in=\{\in\}$中以下两语句构成的理论为内附集合论$\mathsf{AD}$：

- 空集公理：$\exists x\forall y(y\not\in x)$

- 内附公理：$\forall x\forall y\exists z\forall w(w\in z\leftrightarrow (w\in x\vee w=y))$

:::

::: definition [外延的内附集合论]
我们称一阶集合论语言$\mathcal{L}_\in=\{\in\}$中向$\mathsf{AD}$
中加入以下外延公理形成的理论为外延内附集合论$\mathsf{AD}^{ext}$：
$\forall x\forall y(\forall z(z\in y\leftrightarrow z\in x)\to y=x)$
:::

::: definition [函数语言式的内附集合论]
我们考虑语言$\mathcal{L}_{\mathsf{AD}}=\{\varnothing,[-;-]\}$，
其中有常元符号$\varnothing$与二元函数符号$[-;-]$。
我们称此语言中以下语句构成的理论为函数式内附集合论$\mathsf{AD}^{fun}$：

- 空集公理：$\forall x([\varnothing;x]\not=x)$

- 内附公理：$\forall x\forall y\forall w([[x;y];w]=[x;y]\leftrightarrow([x;w]=x\vee w=y))$

:::

::: theorem
$\mathsf{AD}$与$\mathsf{AD}^{ext}$与$\mathsf{AD}^{fun}$[[相互解释]]。
:::

::: proof
先用$\mathsf{AD}$解释$\mathsf{AD}^{ext}$。
我们定义$x\simeq y$为$\forall z(z\in x\leftrightarrow z\in y)$，
不难验证$\mathsf{AD}^{ext}$将等于解释为这个$\simeq$后即翻译入$\mathsf{AD}$。
用$\mathsf{AD}^{ext}$解释$\mathsf{AD}^{fun}$只需将$\varnothing$
解释为由空集公理和外延公理共同确定的那个集合，
将$[x;y]$解释为由内附公理和外延公理共同确定的那个集合。
最后用$\mathsf{AD}^{fun}$解释$\mathsf{AD}$，
只需在$\mathcal{L}_{\mathsf{AD}}$中定义二元谓词符号$x\in y\leftrightarrow [x;y]=x$。
:::

## 与不完备性定理的联系

我们知道，[[Robinson算术]]即允许证明有两大[[Gödel 不完备性定理]]，因此我们只需建立以下定理。

::: theorem
$\mathsf{AD}^{ext}$与$\mathsf{Q}$[[相互解释]]。
:::

::: proof

:::

这顺带指出，在$\mathsf{ZF}$公理中用内附公理取代对集公理或许是更自然的处理。

```terms
内附集合论:
  en: Adjunctive set theory
```
