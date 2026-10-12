---
title: $n$-类型
categories: [同伦类型论]
navboxes: [类型论]
---

**$n$-类型**是[[同伦类型论]]中的概念，
代表[[类型]]没有比 $n$ 阶更高的结构。它可以视为如下概念的推广：

- [[命题宇宙|命题]]若存在实例，则所有实例都相等，它是 $-1$-类型。

- [[集合 (类型论)|集合]]的实例上的[[相等类型|相等]]证明都相等，它是 $0$-类型。

- [[群胚]]在类型论中的类比是满足“实例上的[[相等类型|相等]]证明都是集合”的类型，
比如[[圆周 (同伦类型论)]]，它是 $1$-类型。

## 定义

::: definition
对整数 $n \geq -2$，如类型 $A$ 满足下面归纳定义的性质，
则称 $A$ 为 **$n$-类型**：

- 若 $n=-2$，则 $A$ 同构于[[单位类型]]。

- 若 $n=-1$，则 $A$ 是[[命题宇宙|命题]]，即存在证明 $\operatorname{isProp}A$。

- 其它情况下，对于 $a, b:A$，
类型 $\operatorname{Id}_A(a, b)$ 是 $(n-1)$-类型。

这时也称 $A$ 的 **[[同伦层级]]** 为 $n$。
:::

形式化定义如下：

::: definition
称 $A$ 为 **$n$-类型**，
若其满足如下性质（该语法使用了[[模式匹配]]）：
\[
\begin{aligned}
  \operatorname{isHLvl}(A, -2) &= \sum_{x:A} \prod_{y:A} \operatorname{Id}(x,y)\\
  \operatorname{isHLvl}(A, -1) &= \prod_{x:A} \prod_{y:A} \operatorname{Id}(x,y)\\
  \operatorname{isHLvl}(A, s(n)) &= \prod_{x:A} \prod_{y:A} \operatorname{isHLvl}(\operatorname{Id}_A(x,y), n)
\end{aligned}
\]
其中：

- $\prod_{x:A} \prod_{y:A} \operatorname{Id}(x,y)$ 一般简写为 $\operatorname{isProp}A$，
- $\sum_{x:A} \prod_{y:A} \operatorname{Id}(x,y)$ 一般简写为 $\operatorname{isContr}A$，
  对应[[可缩空间]]。

:::

::: example
[[集合 (类型论)|集合]]正是以上定义的 $0$-类型。
:::

## 性质

::: proposition
“$A$ 是 $n$-类型”这一性质是[[命题 (类型论)|命题]]。
:::
