---
title: 粘连范畴
aliases: [粘连群胚]
categories: [范畴论]
navboxes: [范畴论]
---

**粘连范畴**是[[范畴论]]中的一种构造，
大致是[[范畴的范畴]] $\mathsf{Cat}$ 中的[[推出]]，
严格而言是 [[$2$-推出]]。
具体来说，给定[[范畴]] $\mathcal{C}$、$\mathcal{D}$、$\mathcal{E}$
及[[函子]] $f \colon \mathcal{E} \to \mathcal{C}$，
$g \colon \mathcal{E} \to \mathcal{D}$，
其粘连范畴 $\mathcal{C} \sqcup_{\mathcal{E}} \mathcal{D}$
满足“推出图表”
\[
\begin{tikzcd}
  \mathcal{E}
  \ar[r, "f"] \ar[d, "g"'] \ar[dr, phantom, pos=.8, "\lrcorner"]
  & \mathcal{C} \ar[d]
  \\ \mathcal{D} \ar[r]
  & \mathcal{C} \sqcup_{\mathcal{E}} \mathcal{D} \rlap{ .}
\end{tikzcd}
\]

## 定义

::: definition [粘连范畴] {@粘连范畴}
设有[[范畴]] $\mathcal{C}$、$\mathcal{D}$、$\mathcal{E}$，
及[[函子]] $f \colon \mathcal{E} \to \mathcal{C}$，
$g \colon \mathcal{E} \to \mathcal{D}$。
则其**粘连范畴** $\mathcal{C} \sqcup_{\mathcal{E}} \mathcal{D}$
定义为[[范畴的范畴]] $\mathsf{Cat}$ 中相应的 [[$2$-推出]]。
:::

## 例子

- 当 $\mathcal{E} = \varnothing$ 为[[空范畴]]时，
  粘连范畴 $\mathcal{C} \sqcup_{\mathcal{E}} \mathcal{D}$
  就是[[无交并范畴]] $\mathcal{C} \sqcup \mathcal{D}$。

- 若 $\mathcal{C} = \mathrm{B} G_1$，
  $\mathcal{D} = \mathrm{B} G_2$，
  $\mathcal{E} = \mathrm{B} H$ 为[[群]] $G_1, G_2, H$ 的[[解环群胚]]，
  则粘连范畴 $\mathcal{C} \sqcup_{\mathcal{E}} \mathcal{D}$
  就是[[粘连自由积]] $G_1 *_H G_2$ 的解环群胚。

```terms
粘连范畴:
  en: pushout category
```
