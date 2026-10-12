---
title: 态射函子
aliases: [Hom 函子]
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，一个[[范畴]] $\mathcal{C}$ 的**态射函子**是指[[二元函子]]
\[
\mathcal{C} (-,-) \colon
\mathcal{C}^{\mathrm{op}} \times \mathcal{C}
\longrightarrow \mathsf{Set},
\]
它将[[对象]] $x, y \in \mathcal{C}$ 映到[[态射]]集 $\mathcal{C} (x, y)$。

对 $x \in \mathcal{C}$，能得到固定一个变元的态射函子
\[
\begin{aligned}
  \mathcal{C} (-, x) & \colon
  \mathcal{C}^{\mathrm{op}}
  \longrightarrow \mathsf{Set}, \\
  \mathcal{C} (x, -) & \colon
  \mathcal{C}
  \longrightarrow \mathsf{Set}.
\end{aligned}
\]
这两类函子称为[[可表函子]]。
通过将对象 $x$ 对应到上述两种函子，可以将态射函子也视为
\[
\begin{aligned}
  \mathcal{C} & \longrightarrow
  \mathsf{Fun} (\mathcal{C}^{\mathrm{op}}, \mathsf{Set}), \quad \text{或} \\
  \mathcal{C}^{\mathrm{op}} & \longrightarrow
  \mathsf{Fun} (\mathcal{C}, \mathsf{Set}),
\end{aligned}
\]
的函子，这两个新的函子称为 [[Yoneda 嵌入]]。

## 定义

::: definition
[[范畴]] $\mathcal{C}$ 的**态射函子**是指[[二元函子]]
\[
\mathcal{C} (-,-) \colon
\mathcal{C}^{\mathrm{op}} \times \mathcal{C}
\longrightarrow \mathsf{Set}.
\]
确切的定义如下：

- [[对象]] $x, y \in \mathcal{C}$ 被映到[[态射]]集 $\mathcal{C} (x, y)$。

- 对 $x, x', y, y' \in \mathcal{C}$ 及态射
  $f \in \mathcal{C} (x', x)$，$g \in \mathcal{C} (y, y')$，
  有 $\mathcal{C}^{\mathrm{op}} \times \mathcal{C}$
  中的态射 $(f^{\mathrm{op}}, g)$。
  态射函子将该态射变换到 $\mathsf{Set}$ 中的态射，即[[集合映射]]
  \[
  g \circ (-) \circ f \colon
  \mathcal{C} (x, y) \longrightarrow \mathcal{C} (x', y').
  \]

:::

```terms
态射函子:
  en: Hom functor
```
