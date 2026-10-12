---
title: 满态射
categories: [范畴论]
notices:
  - name: 消歧义
    about: '[[范畴论]]中的概念'
    see:
      - topic: '[[代数几何]]中的概念'
        page: 满射（代数几何）
navboxes: [态射, 范畴论]
---

在[[范畴论]]中，
**满态射**是[[范畴]]中的一类[[态射]]。
这一概念描述的是类似[[集合]]间[[满射]]的态射，
但仅通过范畴中的信息来定义，故将集合间满射的概念推广到任何范畴中。

满态射与[[单态射]]互为[[对偶]]。

## 定义

::: definition
设 $\mathcal{C}$ 为[[范畴]]，
$f \colon x \to y$ 为 $\mathcal{C}$ 中[[态射]]。
称 $f$ 为**满态射**，
如果满足以下条件：

- 对任何对象 $z \in \mathcal{C}$ 及任何态射 $g, g' \colon y \to z$，
  若 $g \circ f = g' \circ f$，
  则 $g = g'$。

等价地说，

- 对任何对象 $z \in \mathcal{C}$，集合间映射
  \[
  f^* \colon \mathcal{C} (y, z) \to \mathcal{C} (x, z)
  \]
  是[[单射]]，
  其中 $f^*$ 定义为 $(-) \circ f$。

:::

## 例子

- [[集合]]的满态射就是[[满射]]。

- [[群]]的满态射就是集合意义下的满射。

- [[环]]的满态射不一定是集合意义下的满射。
  例如，含入映射 $\mathbb{Z} \hookrightarrow \mathbb{Q}$
  是满态射，但不是满射。
  但不难看出，环的满射一定是满态射。

- [[拓扑空间]]的满态射也不一定是集合意义下的满射。
  例如，[[Hausdorff 空间]]之间的连续映射只要像[[稠密子空间|稠密]]，
  就是满态射。
  但反过来，集合意义下的满射一定是满态射。

## 性质

::: proposition
满态射的[[复合]]仍是满态射；
若 $g \circ f$ 是满态射，则 $g$ 是满态射。
:::

::: proof
这是因为集合间单射的复合仍是单射，
且集合间单射满足第二条性质。
:::

::: proposition
满态射被[[推出]]保持。
:::

::: proposition
满态射被[[左伴随]]保持。
:::

```terms
满态射:
  en: epimorphism
  fr: épimorphisme :m
  de: Epimorphismus :m
```
