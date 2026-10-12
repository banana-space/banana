---
title: $2$-范畴
categories: [高阶范畴论]
navboxes: [2-范畴论]
---

**$2$-范畴**是[[范畴]]的一种推广，
是 [[$n$-范畴]]当 $n = 2$ 时的特例。
大致地说，$2$-范畴由以下部分构成：

- 一族[[对象]]。

- 在对象 $x, y$ 之间，可以有 [[$1$-态射]] $f \colon x \to y$。

- 在 $1$-态射 $f, g \colon x \to y$ 之间，可以有 [[$2$-态射]]
  $\alpha \colon f \Rightarrow g$。

\[
\begin{tikzcd}[column sep=4em]
  x
  \ar[r, bend left=45, looseness=1.25, "f"]
  \ar[r, bend right=45, looseness=1.25, "g"']
  \ar[r, phantom, "\Downarrow"]
  \ar[r, phantom, pos=.65, "\scriptstyle \alpha"]
  & y
\end{tikzcd}
\]

换言之，$2$-范畴就是普通范畴加上一些 $2$-态射。

$2$-范畴的一个典型例子是[[范畴的范畴]] $\mathsf{Cat}$。
其对象为所有[[小范畴]]，
$1$-态射为这些范畴间的[[函子]]，
而 $2$-态射为函子之间的[[自然变换]]。

在 $2$-范畴中，$1$-态射所满足的公理，
例如态射复合的[[结合律]]，并不严格成立，
而是在相差一个 $2$-同构（即可逆 $2$-态射）的意义下成立。
这正如在普通范畴中，通常不谈论对象的相等关系，而谈论它们的同构关系。
又例如，在 $2$-范畴 $\mathsf{Cat}$ 中，
我们已经熟知，可逆函子与其逆的复合只是自然同构（即 $2$-同构）于恒等函子，
而非严格相等。
这些看似琐碎的区别正是 $2$-范畴的有趣之处。

$2$-范畴之间的函子称为 [[$2$-函子]]。
与上面类似，$2$-函子所满足的公理，例如保持态射复合，也只在相差 $2$-同构的意义下成立。

这里提到的 $2$-范畴也称为 **$(2, 2)$-范畴**，
是 [[$(n, r)$-范畴]]当 $n = r = 2$ 时的特例。
若 $2$-范畴中所有 $2$-态射都可逆，则称为 [[$(2, 1)$-范畴]]。

$2$-范畴可以视为[[幺半范畴]]的[[胚化]]，
正如范畴是[[幺半群]]的胚化。
在以下 @2-范畴 中可见 $2$-范畴与幺半范畴定义的相似性。

## 定义

### 严格 $2$-范畴

**严格 $2$-范畴**是指 $1$-态射的运算律都严格成立，
而非在相差 $2$-同构的意义下成立的 $2$-范畴。
这类特殊的 $2$-范畴可以简短地定义如下。

::: definition [严格 $2$-范畴]
**严格 $2$-范畴**是[[充实范畴|充实]]于
[[范畴的范畴|严格范畴的范畴]] $\mathsf{Cat}$ 的充实范畴。
:::

换言之，在严格 $2$-范畴 $\mathcal{C}$ 中，
对任何两个对象 $x, y \in \mathcal{C}$，
都有一个“态射范畴”$\mathcal{C} (x, y)$，
并且 $\mathcal{C}$ 中的态射复合满足严格意义的单位律、结合律。
这意味着我们需要谈论这些态射范畴之间函子的严格相等，
而这其实是不太自然的。

虽然如此，但可以证明，
任何一般的 $2$-范畴都等价于某个严格 $2$-范畴。
因此，采用严格 $2$-范畴作为 $2$-范畴的定义并不会损失一般性，
只是较不自然。
这种不自然也体现于，当 $n > 2$ 时，就能找到不等价于任何严格 $n$-范畴的 [[$n$-范畴]]。

### 一般的 $2$-范畴

::: definition [$2$-范畴] {@2-范畴}
**$2$-范畴** $\mathcal{C}$ 由以下信息组成：

- 一个[[类]] $\operatorname{Ob} (\mathcal{C})$，
  其元素称为 $\mathcal{C}$ 的 **[[对象]]**。

- 对任何 $x, y \in \operatorname{Ob} (\mathcal{C})$，
  有一个[[小范畴]] $\mathcal{C} (x, y)$，
  其中的对象称为 $\mathcal{C}$ 的 **$1$-态射**，
  其中的态射称为 $\mathcal{C}$ 的 **$2$-态射**。

- 对每个 $x \in \operatorname{Ob} (\mathcal{C})$，
  有一个对象 $\mathbb{1}_x \in \mathcal{C} (x, x)$，
  称为 **[[恒同态射]]**。

- 对任何 $x, y, z \in \operatorname{Ob} (\mathcal{C})$，
  有一个函子
  $\circ \colon \mathcal{C} (y, z) \times \mathcal{C} (x, y) \to
    \mathcal{C} (x, z)$，
  称为 **[[复合]]**，
  或 **[[横向复合]]**，以与每个 $\mathcal{C} (x, y)$ 自己的态射复合
  （称为 **[[纵向复合]]**）区分。

- 对任何 $x, y \in \operatorname{Ob} (\mathcal{C})$，
  有两个[[自然同构]]
  \[
  \begin{tikzcd}[row sep=3em]
    \mathcal{C} (x, y)
    \ar[d, bend right=45, shift right=3, "{\mathbb{1}_y \, \circ \, -}"']
    \ar[d, bend left=45, shift left=3, "\mathrm{id}"]
    \ar[d, phantom, pos=.4, "{\overset{l_{x,y}}{\Longrightarrow}}"]
    \\ \mathcal{C} (x, y) \rlap{ ,}
  \end{tikzcd} \qquad
  \begin{tikzcd}[row sep=3em]
    \mathcal{C} (x, y)
    \ar[d, bend right=45, shift right=3, "{- \, \circ \, \mathbb{1}_x}"']
    \ar[d, bend left=45, shift left=3, "\mathrm{id}"]
    \ar[d, phantom, pos=.4, "{\overset{r_{x,y}}{\Longrightarrow}}"]
    \\ \mathcal{C} (x, y) \rlap{ ,}
  \end{tikzcd}
  \]
  分别称为左、右 **[[单位子]]**。

- 对任何 $x, y, z, w \in \operatorname{Ob} (\mathcal{C})$，
  有一个自然同构
  \[
  \begin{tikzcd}[column sep=4em, row sep=3em]
    \mathcal{C} (z, w) \times
    \mathcal{C} (y, z) \times
    \mathcal{C} (x, y)
    \ar[d, "{\circ \, \times \, \mathcal{C} (x, y)}"']
    \ar[r, "{\mathcal{C} (z, w) \, \times \, \circ}"]
    & \mathcal{C} (z, w) \times \mathcal{C} (x, z)
    \ar[d, "\circ"]
    \\ \mathcal{C} (y, w) \times \mathcal{C} (x, y)
    \ar[r, "\circ"]
    \ar[ur, phantom, "\Longrightarrow"{rotate=30}]
    \ar[ur, phantom, shift left=3.5, pos=.45, "{\scriptstyle a_{x,y,z,w}}"]
    & \mathcal{C} (x, w) \rlap{ ,}
  \end{tikzcd}
  \]
  称为 **[[结合子]]**。

它们满足以下条件：

- （**三角形公理**）
  对任何 $x, y, z \in \operatorname{Ob} (\mathcal{C})$ 及
  $f \in \mathcal{C} (x, y)$，$g \in \mathcal{C} (y, z)$，
  有 $\mathcal{C} (x, z)$ 中的交换图
  \[
  \begin{tikzcd}[column sep = {6em,between origins}]
    (g \circ \mathbb{1}_y) \circ f
    \ar[rr, "{a_{g, \mathbb{1}_y, f}}"]
    \ar[dr, "{r_g \, \circ \, f}"', pos = .3] &&
    g \circ (\mathbb{1}_y \circ f)
    \ar[dl, "{g \, \circ \, l_f}", pos = .3] \\
    & g \circ f \rlap{\ ,}
  \end{tikzcd}
  \]
  其中，为记号简便，我们忽略了自然同构 $a, l, r$ 的关于 $x, y, z$ 的下标，
  而其中出现的下标是指自然同构的分量。

- （**[[五边形公理]]**）
  对任意 $x, y, z, w, v \in \mathcal{C}$ 及
  $f \in \mathcal{C} (x, y)$，$g \in \mathcal{C} (y, z)$，
  $h \in \mathcal{C} (z, w)$，$k \in \mathcal{C} (w, v)$，
  有 $\mathcal{C} (x, v)$ 中的交换图
  \[
  \begin{tikzcd}[column sep = -4em]
    && (k \circ h) \circ (g \circ f)
    \ar[drr, "{a_{k, \, h, \, g \circ f}}", pos = .7] \\
    ((k \circ h) \circ g) \circ f
    \ar[urr, "{a_{k \circ h, \, g, \, f}}", pos = .3]
    \ar[dr, "{a_{k, \, h, \, g} \, \circ \, \mathbb{1}_f}"', pos = 0] &&
    \hspace{11em} &&
    k \circ (h \circ (g \circ f)) \\
    & (k \circ (h \circ g)) \circ f
    \ar[rr, "{a_{k, \, h \circ g, \, f}}"'] &&
    k \circ ((h \circ g) \circ f) \rlap{\ ,}
    \ar[ur, "{\mathbb{1}_k \, \circ \, a_{h, \, g, \, f}}"', pos = 1]
  \end{tikzcd}
  \]
  其中，我们忽略了关于 $x, y, z, w, v$ 的下标。

:::

### 通过 $\infty$-范畴

也可以通过 [[$(\infty, 2)$-范畴]]来定义 $2$-范畴。

::: definition
**$2$-范畴**是指 [[$(\infty, 2)$-范畴]] $\mathcal{C}$，
并且它是 $(2, 2)$-[[截断]]的。

也就是说，对任何 $x, y \in \mathcal{C}$，
态射空间 $\mathcal{C} (x, y)$ 作为 [[$(\infty, 1)$-范畴]]，
实际上是 $1$-范畴，即普通范畴。
:::

## 例子

- 每个普通范畴都能看成 $2$-范畴，其中没有非平凡的 $2$-态射，
  即所有 $2$-态射都是恒同 $2$-态射。
  换言之，态射范畴 $\mathcal{C} (x, y)$ 是[[离散范畴]]。

- [[范畴的范畴]] $\mathsf{Cat}$，及其[[全子范畴]]，
  [[群胚范畴]] $\mathsf{Grpd}$。

```terms
$2$-范畴:
  en: $2$-category
  fr: $2$-catégorie :f
```
