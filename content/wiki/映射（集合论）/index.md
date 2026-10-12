---
title: 映射（集合论）
aliases: [集合映射, 映射集]
categories: [集合论]
notices:
  - name: 消歧义
    about: '[[集合]]之间的映射'
    see:
      - topic: 一般的概念
        page: 映射
  - name: 问题
    items:
      - “性质”一节需要扩充。
---

两个[[集合]] $X, Y$ 之间的**映射** $f \colon X \to Y$
是给 $X$ 的每个元素 $x$ 指定一个 $Y$ 的元素 $f (x)$ 的方法，
我们说 $x$ 被 $f$ **映到** $Y$ 的元素 $f (x)$。
例如，将[[自然数]]映到它的[[平方]]就给出了自然数集 $\mathbb{N}$ 到它自身的映射，记为
\[
\begin{aligned}
  f \colon \mathbb{N} & \longrightarrow \mathbb{N}, \\
  n & \longmapsto n^2 .
\end{aligned}
\]

## 定义

从[[集合论]]出发，我们通过映射的[[图像]]，来严格地定义映射的概念。

::: definition [映射]
设 $X, Y$ 是[[集合]]。
从 $X$ 到 $Y$ 的**映射** $f$，
记作
\[
f \colon X \to Y,
\]
定义为子集 $f \subset X \times Y$，
满足以下条件：

- 对任意 $x \in X$，存在唯一的 $y \in Y$，
  使得 $(x, y) \in f$。

此时，如果 $(x, y) \in f$，我们通常记
\[
f (x) = y,
\]
并说 $f$ 把 $x$ **映到** $y$。

这里，集合 $X, Y$ 分别叫做 $f$ 的**出发域**（或**定义域**）
和**到达域**。
:::

## 性质

```terms
映射:
  en: map
  de: Funktion :f
  fr: application :f
  grc: ἀπεικονισμός :m
  la: adhibitio :f
出发域、定义域:
  en: [source, domain]
  de: [Definitionsmenge :f, Definitionsbereich :m]
  fr: [source :f, domaine, ensemble de départ, ensemble de définition :m]
  grc: σύνολον ὀρισμοῦ :n
  la: dominium :n
到达域:
  en: [target, range, codomain]
  de: [Zielmenge :f, Wertevorrat :m]
  fr: [but, codomaine, ensemble d'arrivée :m]
  grc: σύνολον τιμῶν :n
  la: codominium :n
```
