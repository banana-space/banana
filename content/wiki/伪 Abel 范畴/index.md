---
title: 伪 Abel 范畴
categories: [同调代数]
navboxes: [范畴论]
---

<disambiguation>
注意与[[拟 Abel 范畴]]区分。
</disambiguation>

**伪 Abel 范畴**指的是[[幂等]]态射均为投影的[[预加性范畴]]。

从任意预加性范畴均可得到伪 Abel 范畴，称为**幂等完备化**。
大致来说，这一过程就是对每个对象 $X$ 与幂等态射 $e \colon X \to X$，
添加对象 $(X, e)$，并把它视为 $X$ 沿 $e$ 的投影。
可以证明，此构造是万有的。

## 定义

::: definition [伪 Abel 范畴]
**伪 Abel 范畴**指的是满足以下条件的[[预加性范畴]]：

- 对任意[[幂等]]态射
$e \colon X \to X$，存在态射 $p \colon X \to Y$
与 $i \colon Y \to X$，使得 $p\circ i = 1$ 且
$i \circ p = e$。

:::

::: definition [幂等完备化]
范畴 $\mathcal{C}$ 的幂等完备化指的是以下范畴：

- 对象为所有二元组 $(X, e)$，其中 $X \in \mathcal{C}$，
$e \colon X \to X$ 为幂等态射。

- $(X, e)$ 到 $(Y, f)$ 的态射集为
$f \circ \mathcal{C}(X, Y) \circ e$。

:::

::: proposition
预加性范畴的幂等完备化是伪 Abel 范畴，
并满足相应的万有性质。
:::

```terms
伪 Abel 范畴:
  en: pseudo abelian category
  de: pseudo-abelsche Kategorie :f
  fr: catégorie pseudo-abélienne :f
```
