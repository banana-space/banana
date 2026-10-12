---
title: 箭头纤维化
categories: [范畴论]
navboxes: [范畴论]
---

::: convention
在本文中，

- [[箭头范畴]]记作 $C^→$ 而不是 $C^I$，这是为了将符号 $I$ 用作其它集合的名称。

:::

**箭头纤维化**是[[纤维范畴]]
\[
\operatorname{cod} \colon \mathsf{Set}^→ → \mathsf{Set},
\]
它将[[箭头范畴]] $\mathsf{Set}^→$ 的对象 $f\colon X → I$ 映到集合 $I$。
我们将这样的映射 $f$ 视为以 $I$ 为指标集的[[集合|集]][[族]] $(X_i)_{i \in I}$，
其中 $X_i = f^{-1} (i)$ 是 $f$ 在 $i$ 处的[[纤维]]。

对集合 $I$，箭头纤维化在 $I$ 处的纤维就是所有到 $I$ 的[[集合映射]]构成的范畴，
即集合范畴的[[俯范畴]] $\mathsf{Set}_{/I}$。

箭头纤维化可以进行多种推广，比如可以将[[集合|集]][[族]]换成[[范畴族]]，得到[[族纤维化]]。

## 性质

::: definition [换基]
考虑族 $(Y_j)_{j ∈ J}$ 和映射 $f\colon I → J$，
后者通过纤维范畴的结构而诱导函子
\[
f^*\colon \mathsf{Set}_{/J} → \mathsf{Set}_{/I}
\]
由此得到族 $(X_i)_{i ∈ I}$，其中 $X_i = Y_{f(i)}$。
该操作叫**换基**。
:::

```terms
箭头纤维化:
  en: arrow fibration
换基:
  en: base-change
```
