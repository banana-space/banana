---
title: 导出范畴
categories: [同调代数]
navboxes: [同调代数]
---

**导出范畴**是[[同调代数]]中的一种关键的构造。
给定 [[Abel 范畴]] $\mathcal{A}$，
其导出范畴 $\mathsf{D} (\mathcal{A})$ 是由以下过程得到的[[范畴]]：
在 $\mathcal{A}$ 上的[[链复形范畴]] $\mathsf{Ch} (\mathcal{A})$ 中，
将所有[[拟同构]]都变得可逆（即[[局部化 (范畴论)|局部化]]），
得到的就是导出范畴。

导出范畴具有[[三角范畴]]的结构。

在当代的观点下，局部化得到的范畴应该视作 [[$(\infty,1)$-范畴]]，
因此导出范畴应该更自然地视作[[导出 $(\infty,1)$-范畴]]，
而普通的导出范畴是其[[同伦范畴]]。

## 定义

### 通过局部化

::: definition [导出范畴]
设 $\mathcal{A}$ 是 [[Abel 范畴]]。

- 记 $\mathsf{K} (\mathcal{A})$ 为 $\mathcal{A}$ 上的[[同伦链复形范畴]]：
  其对象为 $\mathcal{A}$ 上的[[链复形]]，
  态射为[[链映射]]的[[链同伦]]类。
  定义 $\mathcal{A}$ 的**导出范畴**为[[局部化 (范畴论)|局部化]]
  \[
  \mathsf{D} (\mathcal{A}) =
  \mathsf{K} (\mathcal{A}) \, [\mathsf{W}^{-1}],
  \]
  其中 $\mathsf{W}$ 是由所有[[拟同构]]组成的态射类。

- 定义
  \[
  \mathsf{D}^+ (\mathcal{A}), \quad
  \mathsf{D}^- (\mathcal{A}), \quad
  \mathsf{D}^{\mathrm{b}} (\mathcal{A})
  \enspace \subset \enspace
  \mathsf{D} (\mathcal{A})
  \]
  分别为由下有界链复形、上有界链复形、有界链复形构成的[[满子范畴]]。
  它们分别称为 $\mathcal{A}$ 的
  **下有界导出范畴**、
  **上有界导出范畴**、
  **有界导出范畴**。

:::

### 通过消解

当 Abel 范畴 $\mathcal{A}$ 具有足够多性质良好的对象（[[内射对象|内射]]、[[投射对象]]）时，
可以更具体地描述导出范畴。

如果 $\mathcal{A}$ 具有[[足量内射对象]]（即任何对象都是某个内射对象的[[子对象]]），
那么任何下有界链复形 $X^\bullet$ 都具有[[内射消解]]，
即存在由内射对象构成的链复形 $I^\bullet$ 和[[拟同构]] $X^\bullet \to I^\bullet$。
此时，下有界导出范畴 $\mathsf{D}^+ (\mathcal{A})$ 等价于内射对象链复形的同伦范畴。

::: theorem
若 $\mathcal{A}$ 具有足量内射对象，
则典范函子
\[
\mathsf{K}^+ (\mathsf{Inj}(\mathcal{A})) \to \mathsf{D}^+ (\mathcal{A})
\]
是[[范畴等价]]。
这里 $\mathsf{K}^+ (\mathsf{Inj}(\mathcal{A}))$ 是下有界内射链复形范畴的同伦范畴。
:::

此定理也给出了计算导出范畴中态射的方法。
对任意 $X^\bullet, Y^\bullet \in \mathsf{D}^+ (\mathcal{A})$，
取 $Y^\bullet$ 的内射消解 $Y^\bullet \to I^\bullet$，则有
\[
{\mathsf{D}^+(\mathcal{A})} (X^\bullet, Y^\bullet) \simeq
{\mathsf{K}(\mathcal{A})} (X^\bullet, I^\bullet).
\]

对偶地，我们有关于投射消解的结论。

::: theorem
若 $\mathcal{A}$ 具有[[足量投射对象]]，
则典范函子
\[
\mathsf{K}^- (\mathsf{Proj}(\mathcal{A})) \to \mathsf{D}^- (\mathcal{A})
\]
是范畴等价。
这里 $\mathsf{K}^- (\mathsf{Proj}(\mathcal{A}))$ 是上有界投射链复形范畴的同伦范畴。
:::

类似地，对任意 $X^\bullet, Y^\bullet \in \mathsf{D}^- (\mathcal{A})$，
取 $X^\bullet$ 的投射消解 $P^\bullet \to X^\bullet$，则有
\[
{\mathsf{D}^-(\mathcal{A})} (X^\bullet, Y^\bullet) \simeq
{\mathsf{K}(\mathcal{A})} (P^\bullet, Y^\bullet).
\]

```terms
导出范畴:
  en: derived category
  fr: catégorie dérivée :f
  de: derivierte Kategorie :f
```
