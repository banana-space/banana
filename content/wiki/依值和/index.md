---
title: 依值和
categories: [范畴论]
navboxes: [范畴论]
---

<problems>
- “性质”一节需要扩充。
- “万有性质”定义中，图表里的态射记为 $f \colon B \to A$，似乎与上下文中的 $f∈ \mathcal C(A, I)$ 记号不一致。
</problems>

在[[范畴论]]中，**依值和**是一种[[万有构造]]，
是[[积 (范畴论)|积]]的推广，允许两个分量中有依赖关系。

## 定义

依值和可以直接定义，也可以用[[万有性质]]定义。

::: definition [直接定义]
在[[范畴]] $\mathcal C$ 中，顺着[[态射]] $f∈ \mathcal C(A, I)$
取的**依值和**是如下[[俯范畴]]间的函子：
\[
\begin{aligned}
  &\sum\nolimits_f \colon \mathcal C_{/A} → \mathcal C_{/I} \\
  &\sum\nolimits_f(g) := f \circ g
\end{aligned}
\]
:::

::: definition [万有性质]
令范畴 $\mathcal C$ 有所有的[[拉回 (范畴论)|拉回]]，
换言之存在一函子 $f^*$ 进行“顺着 $f$ 拉回”的操作，行为如下图所示：
\[
\begin{tikzcd}
  \bullet \ar[r] \ar[d, "输出~f^*(g)"']
    \ar[dr, phantom, pos=.2, "\ulcorner"] &
  \bullet \ar[d, "输入~g"] \\
  B \ar[r, "f"'] &
  A
\end{tikzcd}
\]
那么顺着[[态射]] $f∈ \mathcal C(A, I)$
取的**依值和**是 $f^*$ 函子的[[左伴随]]。
:::

## 性质

```terms
依值和:
  en: dependent sum
```
