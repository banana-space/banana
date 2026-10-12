---
title: 凝聚范畴
categories: [范畴论]
navboxes: [范畴论]
---

**凝聚范畴**是[[子对象]]有有限并，
且被拉回保持的[[正则范畴]]。

## 定义

::: definition
称[[范畴]] $\mathcal{C}$ 为**凝聚范畴**，指的是：

1. $\mathcal{C}$ 有有限[[极限 (范畴论)|极限]]。

2. $\mathcal{C}$ 中任一态射 $f\colon X\to Y$
   都可分解为[[有效满射]] $g\colon X\to Z$ 和[[单态射]]
   $h\colon Z\to Y$。

3. $\mathcal{C}$ 中[[有效满射]]被拉回保持。

4. 对任一 $X\in\mathcal{C}$，$X$
   的[[子对象]][[偏序集]] $\operatorname{Sub}(X)$
   是[[格 (序结构)|格]]，换言之其子对象有有限并。

5. $\mathcal{C}$ 中任一态射 $f\colon X\to Y$
   诱导的偏序集同态 $f^{-1}\colon\operatorname{Sub}(Y)
   \to\operatorname{Sub}(X)$ 是格同态。

如格 $\operatorname{Sub}(X)$ 都是 [[Boole 代数]]，
则称 $\mathcal{C}$ 为 **Boole 凝聚范畴**。
:::

::: remark
不难发现以上第 2 条中的分解是唯一的。所得 $Y$ 的子对象
$h\colon Z\to Y$ 记作 $\operatorname{im}(f)$。
:::

::: definition [态射]
$\mathcal{C},\mathcal{D}$ 是凝聚范畴，$F\colon
\mathcal{C}\to\mathcal{D}$ 是[[函子]]。称 $F$
为凝聚范畴**态射**，指的是：

1. $F$ 保持有限极限，即它[[左正合]]。

2. $F$ 保持[[有效满射]]。

3. 对任一 $X\in\mathcal{C}$，偏序集同态
   $F\colon\operatorname{Sub}(X)\to
   \operatorname{Sub}(F(X))$ 是格同态。

所有小凝聚范畴关于此种态射构成范畴，称为凝聚范畴的范畴，
记作 $\mathsf{Coh}$。
:::

## 性质

::: proposition
设 $\mathcal{C}$ 是凝聚范畴，$X\in\mathcal{C}$。
则[[俯范畴]] $\mathcal{C}_{/X}$ 是凝聚范畴。
:::

凝聚范畴中子对象偏序集的格结构可用来作 [[Grothendieck 拓扑]]：

::: theorem
设 $\mathcal{C}$ 是小凝聚范畴。对 $X\in\mathcal{C}$
以及态射的有限族 $\{f_i\colon U_i\to X\}_{i\in I}$，
称之为**凝聚覆盖**，指的是在格 $\operatorname{Sub}(X)$
中 $\bigvee_{i\in I}\operatorname{im}(f_i)=X$。则
$\mathcal{C}$ 关于凝聚覆盖构成[[凝聚景]]。
:::

::: corollary [预意象化]
记号承上。$\mathcal{C}$ 上的有限集合层范畴
$\mathsf{Sh}_{\mathsf{Fin}}(\mathcal{C})$ 是[[预意象]]，
且 $\mathcal{C}\mapsto\mathsf{Sh}_{\mathsf{Fin}}
(\mathcal{C})$ 是预意象范畴到凝聚范畴范畴的含入函子之左伴随。
:::

以下定理是 [[Gödel 完备性定理]]的推广，证明参见主条目。

::: theorem [[[Deligne 完备性定理]]]
设 $\mathcal{C}$ 是小凝聚范畴，$1\in\mathcal{C}$
是[[终对象]]，$U\subsetneqq1$ 是真子对象。
则存在凝聚范畴态射 $F\colon\mathcal{C}\to\mathsf{Set}$，
满足 $F(U)=\varnothing$。
:::

```terms
凝聚范畴:
  en: coherent category
  de: kohärente Kategorie
  fr: catégorie cohérente
  grc: συνέκτικὴ κατηγορία
  la: categoria cohaerens
```
