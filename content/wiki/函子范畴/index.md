---
title: 函子范畴
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，
**函子范畴**是从某个[[范畴]] $\mathcal{C}$
到另一范畴 $\mathcal{D}$ 的所有[[函子]]构成的范畴，
记为 $\mathsf{Fun} (\mathcal{C}, \mathcal{D})$。
函子范畴中的[[态射]]是函子的[[自然变换]]，同构是函子的[[自然同构]]。

例如，若 $\mathcal{C}$ 是[[单点范畴]]，得到的函子范畴就是 $\mathcal{D}$ 自身。
若 $\mathcal{C}$ 是形如 $I = (\bullet \to \bullet)$ 的范畴，
得到的函子范畴就是 $\mathcal{D}$ 的[[箭头范畴]]，
也就是 $\mathcal{D}$ 中所有“箭头”
\[
x \overset{f}{\longrightarrow} y
\]
构成的范畴。一般地，若将 $\mathcal{C}$ 中的对象、态射画成点、箭头构成的图表，
则函子范畴 $\mathsf{Fun} (\mathcal{C}, \mathcal{D})$
的对象可以看作 $\mathcal{D}$ 中的“$\mathcal{C}$ 形[[交换图]]”。
此时，相应的函子范畴也称为**图表范畴**。

在 [[$2$-范畴]]的意义下，函子范畴是[[范畴的范畴]] $\mathsf{Cat}$ 中的态射空间，
也是其中的[[幂对象]]。

## 定义

::: definition [函子范畴]
设 $\mathcal{C}, \mathcal{D}$ 为[[范畴]]。
定义其**函子范畴** $\mathsf{Fun} (\mathcal{C}, \mathcal{D})$ 如下：

- 对象：$\mathcal{C}$ 到 $\mathcal{D}$ 的函子。

- 态射：函子间的[[自然变换]]。

:::

## 例子

- 若 $\mathcal{C}$ 为[[单点范畴]]，则
  $\mathsf{Fun} (\mathcal{C}, \mathcal{D}) \simeq \mathcal{D}$。

- 若令 $I = (\bullet \to \bullet)$，则
  $\mathsf{Fun} (I, \mathcal{D}) \simeq \mathcal{D}^I$
  是 $\mathcal{D}$ 的[[箭头范畴]]。

## 性质

### 幺半结构

范畴 $\mathcal{C}$ 到自身的函子范畴
$\mathsf{Fun} (\mathcal{C}, \mathcal{C})$
带有自然的[[幺半范畴]]结构
$(\mathsf{Fun} (\mathcal{C}, \mathcal{C}), \circ, \mathbb{1}_{\mathcal{C}})$，其中

- 张量积为函子的复合 $\circ$。

- 单位对象为[[恒同函子]] $\mathbb{1}_{\mathcal{C}}$。

该幺半范畴中的[[幺半对象]]称为 $\mathcal{C}$ 上的[[单子]]。

### 函子性

取函子范畴的操作是个 [[$2$-函子]]
\[
\mathsf{Fun} (-, -) \colon
\mathsf{Cat}^{\mathrm{op}} \times \mathsf{Cat}
\longrightarrow \mathsf{Cat}.
\]
特别地，函子范畴满足[[等价原理]]：
若 $\mathcal{C}$ [[范畴等价]]于 $\mathcal{C}'$，
$\mathcal{D}$ 范畴等价于 $\mathcal{D}'$，
则 $\mathsf{Fun} (\mathcal{C}, \mathcal{D})$
范畴等价于 $\mathsf{Fun} (\mathcal{C}', \mathcal{D}')$。

```terms
函子范畴:
  en: functor category
  fr: catégorie de foncteurs :f
  de: Funktorkategorie :f
```
