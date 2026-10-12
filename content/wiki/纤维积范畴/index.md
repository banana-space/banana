---
title: 纤维积范畴
categories: [范畴论]
notices:
  - name: 区分
    pages:
      - 纤维范畴
navboxes: [范畴论]
---

**纤维积范畴**是[[范畴论]]中的一种构造，
大致是[[范畴的范畴]] $\mathsf{Cat}$ 中的[[拉回 (范畴论)|拉回]]，
严格而言是 [[$2$-拉回]]。
具体来说，给定[[范畴]] $\mathcal{C}$、$\mathcal{D}$、$\mathcal{E}$
及[[函子]] $f \colon \mathcal{C} \to \mathcal{E}$，
$g \colon \mathcal{D} \to \mathcal{E}$，
其纤维积范畴 $\mathcal{C} \times_{\mathcal{E}} \mathcal{D}$
满足“拉回图表”
\[
\begin{tikzcd}
  \mathcal{C} \times_{\mathcal{E}} \mathcal{D}
  \ar[r] \ar[d] \ar[dr, phantom, pos=.2, "\ulcorner"]
  & \mathcal{C} \ar[d, "f"]
  \\ \mathcal{D} \ar[r, "g"]
  & \mathcal{E} \rlap{ .}
\end{tikzcd}
\]
具体写下来，$\mathcal{C} \times_{\mathcal{E}} \mathcal{D}$
的对象是形如
\[
(x, y, a) \colon \
x \in \mathcal{C}, \
y \in \mathcal{D}, \
a \colon f (x) \simeq g (y)
\]
的三元组。这与[[逗号范畴]]的构造类似，
但这里要求 $a$ 是[[同构]]，而逗号范畴中不要求。

## 定义

::: definition [纤维积范畴] {@纤维积范畴}
设有[[范畴]] $\mathcal{C}$、$\mathcal{D}$、$\mathcal{E}$，
及[[函子]] $f \colon \mathcal{C} \to \mathcal{E}$，
$g \colon \mathcal{D} \to \mathcal{E}$。
则其**纤维积范畴** $\mathcal{C} \times_{\mathcal{E}} \mathcal{D}$
定义为[[范畴的范畴]] $\mathsf{Cat}$ 中相应的 [[$2$-拉回]]。

具体来说，$\mathcal{C} \times_{\mathcal{E}} \mathcal{D}$
是如下定义的范畴：

- 对象：形如 $(x, y, a)$ 的三元组，
  其中 $x \in \mathcal{C}$，$y \in \mathcal{D}$，
  且 $a \colon f (x) \simeq g (y)$ 是 $\mathcal{E}$ 中的[[同构]]。

- 从 $(x, y, a)$ 到 $(x', y', a')$ 的态射是二元组 $(c, d)$，
  其中 $c \in \mathcal{C} (x, x')$，$d \in \mathcal{D} (y, y')$，
  使得 $\mathcal{E}$ 中的图表
  \[
  \begin{tikzcd}
    f (x) \ar[d, "f (c)"'] \ar[r, "a"]
    & g (y) \ar[d, "g (d)"]
    \\ f (x') \ar[r, "a'"]
    & g (y')
  \end{tikzcd}
  \]
  交换。

:::

## 例子

- 当 $\mathcal{E} = *$ 为[[单点范畴]]时，
  纤维积范畴 $\mathcal{C} \times_{\mathcal{E}} \mathcal{D}$
  就是[[积范畴]] $\mathcal{C} \times \mathcal{D}$。

```terms
纤维积范畴:
  en: fibre product category
  en-us: fiber product category
```
