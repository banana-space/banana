---
title: 自然变换
categories: [范畴论]
navboxes: [范畴论]
---

<problems>
- “例子”“运算”各节需要扩充。
</problems>

在[[范畴论]]中，**自然变换**是[[函子]]之间的“映射”，
正如函子是[[范畴]]之间的“映射”。

具体地说，若有范畴 $\mathcal{C}, \mathcal{D}$
及函子 $F, G \colon \mathcal{C} \to \mathcal{D}$，
则从 $F$ 到 $G$ 的一个自然变换可以对每个对象 $x \in \mathcal{C}$，
给出 $\mathcal{D}$ 中[[态射]] $F (x) \to G (x)$，
并且满足某种自然性（@自然变换）。

自然变换是[[函子范畴]]中的[[态射]]，
也是[[范畴的范畴]]中的 [[$2$-态射]]。

## 定义

::: definition [自然变换] {@自然变换}
设 $\mathcal{C}, \mathcal{D}$ 为[[范畴]]，
$F, G \colon \mathcal{C} \to \mathcal{D}$ 为[[函子]]。
从 $F$ 到 $G$ 的**自然变换** $\alpha$，
通常记为
\[
\alpha \colon F \to G \quad \text{或} \quad
\alpha \colon F \Rightarrow G,
\]
由以下信息构成：

- 对每个 $x \in \mathcal{C}$，有一个 $\mathcal{D}$ 中态射
  $\alpha_x \colon F (x) \to G (x)$，

满足以下条件：

- （**自然性**）
  对 $\mathcal{C}$ 中任一态射 $f \colon x \to y$，有[[交换图]]
  \[
  \begin{tikzcd}
    F (x) \ar[r, "F (f)"] \ar[d, "\alpha_x"'] &
    F (y) \ar[d, "\alpha_y"] \\
    G (x) \ar[r, "G (f)"] &
    G (y) \rlap{ .}
  \end{tikzcd}
  \]

:::

## 例子

## 运算

```terms
自然变换:
  en: natural transformation
  fr: transformation naturelle :f
  de: natürliche Transformation :f
```
