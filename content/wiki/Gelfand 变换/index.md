---
title: Gelfand 变换
categories: [抽象调和分析]
---

**Gelfand 变换**是 [[Banach 代数]]理论中的重要操作，
由 [[Israel Gelfand]] 引入，把[[交换 Banach 代数]] $A$
里的元素变成 $A$ 的[[极大谱]]上的函数。当 $A$ 是 [[C* 代数]]时，
它把 $A$ 同构到极大谱的[[连续函数]]代数，
给出[[交换 C* 代数]]的结构定理。

## 定义

::: definition
设 $A$ 是[[交换 Banach 代数]]。以 $\sigma(A)$ 记其[[极大谱]]，
它是个[[紧]] [[Hausdorff 空间]]。由 [[Gelfand–Mazur 定理]]，
对任意 $\mathfrak{m}\in\sigma(A)$，都有
$A/\mathfrak{m}\cong\mathbb{C}$。定义元素 $a\in A$ 的
**Gelfand 变换**，记作 $\hat{a}$，指 $\sigma(A)$
上的复值[[连续函数]] $\mathfrak{m}\mapsto
(a\bmod\mathfrak{m})\in A/\mathfrak{m}\cong\mathbb{C}$。
$A$ 的 **Gelfand 变换**指 $A$ 到 $\sigma(A)$
上复值连续函数代数 $C(\sigma(A))$ 的同态 $a\mapsto\hat{a}$。
:::

## 例子

- 设 $X$ 是紧 Hausdorff 空间，$C(X)$ 是其复值连续函数环，
  以[[一致范数]]视为 Banach 代数。则其极大谱是 $X$ 本身，
  Gelfand 变换是 $\operatorname{id}$。

- 考虑 Banach 空间 $L^1(\mathbb{R})$，以[[卷积]]视为
  Banach 代数。则其 Gelfand 变换就是 [[Fourier 变换]]。

- 一般地，对[[局部紧交换群]] $G$，考虑 $L^1(G)$
  以卷积视为 Banach 代数，则其 Gelfand 变换是 [[Fourier 变换]]。

## 性质

::: proposition
$A$ 是交换 Banach 代数。则其元素 $a$ 的 Gelfand 变换
$\hat{a}$ 的值域是 $a$ 的[[谱 (泛函分析)|谱]]。特别地，
$\hat{a}$ 的一致范数是 $a$ 的[[谱半径]]。
:::

::: proof
只需证 $a$ 可逆当且仅当 $\hat{a}$ 的值域不包含 $0$。
“仅当”是因为 Gelfand 变换是代数同态。
“当”是因为如 $a$ 不可逆，由 [[Zorn 引理]]存在包含 $a$
的极大理想 $\mathfrak{m}\in\sigma(A)$，这样依定义就有
$\hat{a}(\mathfrak{m})=0$。
:::

```terms
Gelfand 变换:
  en: Gelfand transformation
  de: Gelfand-Transformation
  fr: transformation de Gelfand
```
