---
title: $p$-曲率
categories: [代数几何]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
---

$p$-曲率是特征 $p$ 域上 [[D-模]]的不变量，
它与[[仿射联络]]的[[曲率]]一样都是[[张量]]。

## 定义

### 手动定义

::: proposition [导子的 $p$ 次复合]
设 $R$ 是特征 $p$ 的交换环，$a\colon R\to R$ 是[[导子]]。
则 $a$ 自己复合 $p$ 次仍是导子，记作 $a^{[p]}$。
:::

::: proof
这是因为
$$
a^p(xy)=
\sum_{n=0}^p\binom{p}{n}a^n(x)a^{p-n}(y)=
xa^p(y)+a^p(x)y.
$$
:::

::: definition [$p$-曲率]
设 $k$ 是特征 $p$ 完美域，$R$ 是 $k$ 上光滑代数，
$M$ 是 $R$ 上 [[D-模]]。则对 $R$ 上导子 $a$，
$M$ 关于 $a$ 的 **$p$-曲率** 指元素
$a^p-a^{[p]}\in\mathcal{D}_{R/k}$ 给出的 $M$
的自映射。
:::

## 性质

```terms
$p$-曲率:
  en: $p$-curvature
```
