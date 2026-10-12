---
title: 全忠实函子
aliases: [全忠实, 满忠实函子]
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，
**全忠实函子**，也称**全忠实嵌入**，
是指既[[全函子|全]]又[[忠实函子|忠实]]的[[函子]]，
是[[范畴]]之间[[嵌入]]的概念。
具体而言，若有全忠实函子 $F \colon \mathcal{C} \to \mathcal{D}$，
则可将 $\mathcal{C}$ 视为 $\mathcal{D}$ 的[[全子范畴]]，
且反之亦然。
因此，常将全忠实函子与全子范畴的概念等同起来。

## 定义

::: definition
设 $\mathcal{C}, \mathcal{D}$ 为[[范畴]]，
$F \colon \mathcal{C} \to \mathcal{D}$ 为[[函子]]。
称 $F$ 为**全忠实函子**，若对任意 $x, y \in \mathcal{C}$，
[[集合]]间[[映射 (集合论)|映射]]
\[
F \colon
\mathcal{C} (x,y) \longrightarrow
\mathcal{D} (F(x), F(y))
\]
是[[双射]]，即[[集合同构]]。
:::

## 例子

- 有一类[[遗忘函子]]是全忠实的，这些遗忘函子也称为[[含入函子]]。例如：

  - 从 [[Abel 群]]范畴到[[群]]范畴的含入函子。

  - 从[[群胚范畴]]到[[范畴的范畴]]的含入函子。

```terms
全忠实函子:
  en: fully faithful functor
  fr: foncteur pleinement fidèle :m
```
