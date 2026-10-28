---
title: 伸展范畴
categories: [范畴论]
navboxes: [范畴论]
---

<problems>
- “$n$-伸展范畴”一节需要扩充。
</problems>

在[[范畴论]]中，[[范畴]] $\mathcal{C}$ 的**伸展范畴**（也称为**对应范畴**）
是范畴 $\mathsf{Span} (\mathcal{C})$，
其[[对象]]与 $\mathcal{C}$ 相同，
但其中的[[态射]]是 $\mathcal{C}$ 中的[[伸展]]。
换言之，从对象 $x$ 到 $y$ 的态射是形如
\[
\begin{tikzcd}[row sep=small, column sep=small]
  & w \ar[dl] \ar[dr] \\
  x && y
\end{tikzcd}
\]
的图表，而态射复合则由 $\mathcal{C}$ 中的[[拉回 (范畴论)|拉回]]给出，例如图表
\[
\begin{tikzcd}[row sep={2.5em,between origins}, column sep={3em,between origins}]
  && \smash[b]{w \underset{y}{\times} w'} \ar[dl] \ar[dr]
  \ar[dd, phantom, pos=.4, "\ulcorner"{rotate=-45}] && \\
  & w \ar[dl] \ar[dr] && w' \ar[dl] \ar[dr] \\
  x && y && z
\end{tikzcd}
\]
给出了一个从 $x$ 到 $y$ 的态射与一个从 $y$ 到 $z$ 的态射的复合。

## 定义

### 伸展范畴

::: definition [伸展范畴]
设 $\mathcal{C}$ 是[[小范畴]]，具有有限[[极限 (范畴论)|极限]]。
则 $\mathcal{C}$ 的**伸展范畴**为
[[$2$-范畴]] $\mathsf{Span} (\mathcal{C})$，定义如下：

- 其对象与 $\mathcal{C}$ 的对象相同。

- 对 $x, y \in \mathcal{C}$，定义态射范畴
  \[
  \mathsf{Span} (\mathcal{C}) (x, y) = \mathcal{C}_{/ x \times y} \, ,
  \]
  其中右边是[[俯范畴]]。

- 对 $x \in \mathcal{C}$，定义 $x$ 的恒同态射为
  \[
  \mathbb{1}_x = \Delta_x \in
  \mathsf{Span} (\mathcal{C}) (x, x) ,
  \]
  其中 $\Delta_x$ 是 $x$ 的[[对角态射]]，
  视为 $\mathcal{C}_{/ x \times x}$ 的对象。

- 对 $x, y, z \in \mathcal{C}$，定义复合函子
  \[
  \begin{aligned}
    \circ \colon
    \mathsf{Span} (\mathcal{C}) (y, z) \times
    \mathsf{Span} (\mathcal{C}) (x, y)
    & \longrightarrow
    \mathsf{Span} (\mathcal{C}) (x, z), \\
    (w, w') & \longmapsto
    w \underset{y}{\times} w' .
  \end{aligned}
  \]

这些信息加上自然的单位子、结合子使得 $\mathsf{Span} (\mathcal{C})$
成为 $2$-范畴。

常常将 $\mathsf{Span} (\mathcal{C})$ 视为 $1$-范畴，即普通范畴。
此时，态射集 $\mathsf{Span} (\mathcal{C}) (x, y)$
取为相应的态射范畴中的对象同构类的集合。
:::

在上述定义中，$\mathcal{C}$ 也可以是具有有限极限的 [[$(\infty, 1)$-范畴]]。
此时，也可以类似定义伸展范畴 $\mathsf{Span} (\mathcal{C})$，
它是 [[$(\infty, 2)$-范畴]]，也可以将其视为 $(\infty, 1)$-范畴。

### $n$-伸展范畴

```terms
伸展范畴:
  en: category of spans
```
