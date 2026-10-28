---
title: 独立事件
categories: [概率论]
navboxes: [概率论]
---

<problems>
- “例子”一节需要扩充。
</problems>

**独立事件**是[[概率论]]的基本概念，大致上说，
若[[事件]] $A$ 发生与否不影响另一事件 $B$ 发生的[[概率]]，
那么就称 $A$ 与 $B$ 相互独立。

## 定义

::: definition [独立事件]
设 $(\Omega, \mathcal{F}, \mathbb{P})$ 是[[概率空间]]，
$A,B \in \mathcal{F}$ 是其中的[[事件]]。
则事件 $A$ 与 $B$ 互为**独立事件**指其满足
\[
\mathbb{P}(AB) = \mathbb{P}(A)\mathbb{P}(B).
\]
:::

::: remark
当 $\mathbb{P}(A)$ 与 $\mathbb{P}(B)$ 不为 $0$ 时，
上述公式可用[[条件概率]]改写为
\[
\begin{aligned}
  &\mathbb{P}(A \mid B) =
  \frac{\mathbb{P}(AB)}{\mathbb{P}(B)} =
  \mathbb{P}(A) \, 或\\
  &\mathbb{P}(B \mid A) =
  \frac{\mathbb{P}(AB)}{\mathbb{P}(A)} =
  \mathbb{P}(B).
\end{aligned}
\]
:::

## 例子

```terms
独立事件:
  en: independent event
```
