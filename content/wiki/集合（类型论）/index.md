---
title: 集合（类型论）
categories: [同伦类型论]
navboxes: [类型论]
---

在[[类型论]]中，**集合**是指[[同伦层级]]为 $0$ 的[[类型]]，
也是 [[$n$-类型]]中 $n=0$ 的特例。
也就是元素之间的[[相等类型|相等]]是单纯的[[命题宇宙|命题]]而不包含复杂数据的类型。
这是[[集合]]的类比。

在[[同伦类型论]]视角下，集合对应的是[[离散拓扑|离散]]的[[拓扑空间]]。

在[[K 公理]]成立的类型论中，所有的类型都是集合。

## 定义

::: definition
若 $Γ\vdash A$ 是类型，则它是**集合**当且仅当它元素上的[[相等类型|相等]]关系是平凡的，
即满足
\[
\Gamma \vdash \prod_{a,b : A}\prod_{p,q:\operatorname{Id}(a,b)}\operatorname{Id}(p,q)
\]
:::

::: lemma
如下两命题等价：
\[
\begin{aligned}
  \operatorname{isSet}(A)&:\prod_{a,b : A}\prod_{p,q:\operatorname{Id}(a,b)}\operatorname{Id}(p,q)\\
  \operatorname{isSet}(A)&:\prod_{a,b : A}\operatorname{isProp}(\operatorname{Id}(a,b))
\end{aligned}
\]
其中 $\operatorname{isProp}$ 定义于[[命题宇宙]]。
:::

按照这个定义，可以像命题宇宙一样定义集合的宇宙，即 $\sum_{A:\mathcal U} \operatorname{isSet}A$。

::: lemma
若[[K 公理]]成立，则所有类型都是集合。
:::
