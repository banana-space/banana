---
title: 族纤维化
categories: [范畴论]
navboxes: [范畴论]
---

::: convention
在本文中，

- [[箭头范畴]]记作 $C^→$ 而不是 $C^I$，这是为了将符号 $I$ 用作其它集合的名称。

:::

族纤维化是[[范畴]]上的以[[集合]]为指标的[[族]]的结构。

考虑范畴 $C$，我们将它的对象和态射放进族里，构造出新的范畴 $\operatorname{Fam}(C)$，
对象形如 $(X_i)_{i ∈ I}$，其中 $I$ 是集合，而 $X_i ∈ \operatorname{Ob}(C)$。
态射的定义稍微复杂，不过基本也是由 $C$ 中以集合为指标，态射构成的族组成，见 @def。
对于 $\operatorname{Fam}(C)$，“遗忘”掉指标之外的信息的函子是一个[[纤维范畴]]，
该函子就是族纤维化。

族纤维化 $C=\mathsf{Set}$ 的特殊情况是[[箭头纤维化]]。

## 定义

::: definition [族] {@def}
对于[[范畴]] $C$，构造如下范畴 $\operatorname{Fam}(C)$：

- [[对象]]形如 $(X_i)_{i ∈ I}$，其中 $I$ 是集合，而 $X_i ∈ \operatorname{Ob}(C)$。

- 对于对象 $(X_i)_{i ∈ I}$ 和 $(Y_j)_{j ∈ J}$，其间的[[态射]]包含以下数据：
  - [[集合映射]] $u\colon I→J$。
  - 一[[族]]以 $I$ 为指标的 $C$ 中的态射 $f_i∈C(X_i, Y_{u(i)})$。

- 态射之间的复合方式如下。考虑对象 $(X_i)_{i ∈ I}$，$(Y_j)_{j ∈ J}$ 和 $(Z_k)_{k∈K}$，
  现在复合这之间的两态射
  \[
  \begin{tikzcd}[column sep=large]
    (X_i)_{i \in I} \ar[r, "{\langle u, (f_i)_{i\in I} \rangle}"]
    & (Y_j)_{j \in J} \ar[r, "{\langle v, (g_j)_{j\in J} \rangle}"]
    & (Z_k)_{k\in K}
  \end{tikzcd}
  \]
  需要构造的态射中，第一部分显然是 $(v \circ u)$，第二部分是如下族。
  对于任意 $i∈ I$，构造如下态射：
  \[
  \begin{tikzcd}
    X_i \ar[r, "f_i"]
    & Y_{u(i)} \ar[r, "g_{u(i)}"]
    & Z_{v(u(i))}
  \end{tikzcd}
  \]

:::

::: example
对于[[集合范畴]] $\mathsf{Set}$，
$\operatorname{Fam}(\mathsf{Set})$ 等价于 $\mathsf{Set}^→$。
:::

::: definition {@famfib}
对于范畴 $C$ 和 $\operatorname{Fam}(C)$，如下[[遗忘函子]]叫做**族纤维化**：
\[
\begin{aligned}
  \operatorname{Fam}(C) &→ \mathsf{Set}\\
  (X_i)_{i∈I} &↦ I\\
  \braket{u, (f_i)_{i∈I}} &↦ u
\end{aligned}
\]
:::

::: lemma
容易验证 @famfib 中的函子是[[纤维范畴]]。
对于集合 $I$，其上的[[纤维]]是[[函子范畴]] $\mathsf{Fun}(I, C)$，
其中 $I$ 在此处被看作态射平凡的范畴。
:::

```terms
族纤维化:
  en: family fibration
```
