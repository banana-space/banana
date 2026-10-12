---
title: Galois 扩张
categories: [域论]
notices:
  - name: 问题
    items:
      - “性质”一节中命题第 2 条的 $\operatorname{Gal}(LE/E)=\operatorname{Gal}(L/K)$ 似乎一般不成立（例如 $E = L$ 时左边是平凡群），应为 $\operatorname{Gal}(LE/E)\cong\operatorname{Gal}(L/L\cap E)$，它是 $\operatorname{Gal}(L/K)$ 的子群。
navboxes: [域论]
---

在[[域论]]中，**Galois 扩张**是[[可分扩张|可分]][[正规扩张]]的同义语。
Galois 扩张的子扩张和其 [[Galois 群]]的（闭）子群间存在着良好的一一对应关系，称为 [[Galois 对应]]，
这也是 [[Galois 理论]]着重关心这些扩张的原因。

## 性质

<see>[[Galois 理论]]</see>

::: proposition
Galois 扩张满足以下性质：

1. 如果 $L/K$ 是 Galois 扩张，对于任何中间域 $E$，$L/E$ 均是 Galois 扩张；

2. 如果 $L/K$ 是 Galois 扩张，$E/K$ 是代数扩张，则 $LE/E$ 是 Galois 扩张，
   并且 $\operatorname{Gal}(LE/E)=\operatorname{Gal}(L/K)$。

3. $K$ 上任一族 Galois 扩张的复合与交均是 Galois 扩张。
:::
