---
title: 可均群
categories: [抽象调和分析]
---

**可均群**是一类特殊的[[局部紧群]]，
大体指的是可对其上函数作平均运算者
（@等价定义 中的[条件 3](@可均)）。

## 定义

::: theorem {@等价定义}
对局部紧拓扑群 $G$，以下各条等价：

1. 对任一带 $G$-作用的[[局部凸拓扑向量空间]] $V$
   及其 $G$-不变非空[[紧集|紧]][[凸集|凸]]子集 $C$，
   $C$ 中有 $G$-不动点。

2. 任一带 $G$-作用的[[紧空间|紧]]
   [[Hausdorff 空间]] $X$ 都有 $G$-不变的[[概率测度]]。

3. {@可均} 存在 $G$ 上有界连续函数空间 $B(G)$ 上的左不变正泛函
   $\lambda$，满足 $\lambda(1)=1$。

4. 存在定义在 $G$ 的 Borel $\sigma$-代数上的左不变有限可加概率测度，
   满足 [[Haar 测度|Haar]] [[零测集]]零测。

5. 对任一紧集 $K\subseteq G$ 和正实数 $\varepsilon$，
   存在单位向量 $v\in L^2(G)$，满足
   $$
   \|kv-v\|<\varepsilon,\,\forall k\in K.
   $$

6. （Følner 条件）对任一紧集 $K\subseteq G$ 和正实数 $\varepsilon$，
   存在有限测度 Borel 集 $F\subseteq G$，满足
   $$
   \frac{\mu(F\mathbin{\triangle}kF)}{\mu(F)}<\varepsilon,\,
   \forall k\in K,
   $$
   其中 $\mu$ 指 [[Haar 测度]]。
:::

::: definition
称满足 @等价定义 中等价条件的局部紧群为**可均群**。
:::

## 性质

::: proposition
[[紧群]]都可均。
:::

::: proposition
可均群的闭子群、商群仍可均。
:::

::: proposition
如 $G$ 是局部紧群，$N$ 是其正规闭子群，
$N$ 和 $G/N$ 都可均，则 $G$ 也可均。
:::

::: proposition
[[可解群]]都可均。
:::

::: proposition
二元生成的[[自由群]]不可均。
:::

```terms
可均群:
  en: amenable group
  de: mittelbare Gruppe
  fr: groupe moyennable
```
