---
title: Mittag-Leffler 系
aliases: [Mittag-Leffler 条件]
categories: [范畴论, 模论]
---

**Mittag-Leffler 系**是一种特殊的[[反向系]]。简而言之，
说集合的反向系 $X\colon I^\mathrm{op}\to\mathsf{Set}$ 是 Mittag-Leffler
系指的是对任意 $i\in I$，$X_i$ 的子集族
$(\operatorname{im}(X_j\to X_i))_{j\ge i}$ 最终稳定（@def）。
其主要好处在于可数的 Mittag-Leffler 系没有高阶导出极限
（@thm）。

## 定义

::: definition {@def}
设 $I$ 是[[正向集]]，$X\colon I^\mathrm{op}\to\mathsf{Set}$
是[[集合]]的反向系，其中 $X$ 在 $i\in I$ 处的值记作 $X_i$。
称 $X$ 是 **Mittag-Leffler 系**，或称
$X$ 满足 **Mittag-Leffler 条件**，指的是对任意
$i\in I$，存在 $k\ge i$，使得对任意 $j\ge k$，
$\operatorname{im}(X_j\to X_i)=\operatorname{im}(X_k\to X_i)$，这里
$\operatorname{im}$ 表示像集。
称某种[[代数结构]]的反向系为 Mittag-Leffler 系，
指其[[遗忘函子|忘]]成集合之后是 Mittag-Leffler 系。
:::

::: remark
显然 @def 可以推广到任何能定义 $\operatorname{im}$ 的范畴中，
不过其使用场合几乎总是[[集合范畴]]或[[意象]]。
:::

## 例子

::: example
如 $I$ 有最大元，则每个以 $I$ 为指标的反向系都是
Mittag-Leffler 系。
:::

::: example
有限集组成的反向系总是 Mittag-Leffler 系。更一般地，
[[紧空间]]组成的反向系忘成集合之后总是 Mittag-Leffler 系。
:::

::: example
转移映射为满射的反向系总是 Mittag-Leffler 系。
:::

::: example
任取无限集 $S$、$T$，令 $I$ 为 $S$
的所有有限子集依包含偏序构成的正向集。考虑反向系
$X\colon I^\mathrm{op}\to\mathsf{Set}$，其中 $X_i$ 取为 $i\subset S$
到 $T$ 的所有单射组成的集合。则 $X$ 的转移映射都是满射，
特别地总是 Mittag-Leffler 系。容易发现 $\lim_{I^\mathrm{op}}X$
为 $S$ 到 $T$ 的所有单射组成的集合。特别地，如
$|S|>|T|$，则 $\lim_{I^\mathrm{op}}X=\varnothing$。
由此可见可数条件在 @nonempty 和 @thm
中必不可少。
:::

## 性质

::: proposition {@cofinal}
设 $f\colon I\to J$ 是正向集的共尾映射。
则 $Y\colon J^\mathrm{op}\to\mathsf{Set}$ 是 Mittag-Leffler 系当且仅当
$Y\circ f\colon I^\mathrm{op}\to\mathsf{Set}$ 是。
:::

::: lemma {@nonempty}
设 $I$ 是可数正向集，$Z\colon I^\mathrm{op}\to\mathsf{Set}$
是非空集的 Mittag-Leffler 系。则
$\lim_{I^\mathrm{op}}Z$ 也非空。
:::

::: proof
设 $I=\{i_0,i_1,\ldots\}$。归纳定义映射
$f\colon\mathbb{N}\to I$，使得 $f(n)$ 大于等于
$f(0),f(1),\ldots,f(n-1),i_n$。由正向集的定义，
这可以做到。容易发现 $f$ 共尾。于是由 @cofinal
可设 $I=\mathbb{N}$。

对 $i\in\mathbb{N}$，以 $Z_i'$ 记 @def 中稳定下来的
$\operatorname{im}(Z_k\to Z_i)$，即 $k$ 充分大时的这个像集。对 $i\in\mathbb{N}$
归纳选取 $z_i\in Z_i'$ 使得 $z_i\mapsto z_{i-1}$。
由 $Z_i'$ 的定义这可以做到。容易发现选出的
$(z_i)_{i\in\mathbb{N}}$ 是 $\lim_{\mathbb{N}^\mathrm{op}}Z$ 中的元素，
故其非空。
:::

::: remark
上面的证明两次使用[[相依选择公理]]。
:::

::: theorem {@thm}
设 $I$ 是可数正向集，$X,Y\colon I^\mathrm{op}\to\mathsf{Set}$ 是反向系，
$\varphi\colon X\to Y$ 是逐项满射。设对任意
$y=(y_i)_{i\in I}\in\lim_{I^\mathrm{op}}Y$，反向系
$(\varphi^{-1}(y_i))_{i\in I}$ 都是 Mittag-Leffler 系。
则 $\lim_{I^\mathrm{op}}\varphi\colon
\lim_{I^\mathrm{op}}X\to\lim_{I^\mathrm{op}}Y$ 也是满射。特别地，
如 $X$、$Y$ 是[[群]]或[[模]]的反向系，$\varphi$
是相应[[同态]]，$\ker(\varphi)$ 是 Mittag-Leffler 系，
则 $\lim_{I^\mathrm{op}}\varphi$ 是满射。
:::

::: proof
定理本身是 @nonempty 的立即推论，因为
$\lim_{I^\mathrm{op}}\varphi^{-1}(y_i)$ 中的元素就是
$y\in\lim_{I^\mathrm{op}}Y$ 在 $\lim_{I^\mathrm{op}}X$ 中的原像。
欲证“特别地”，只需注意 $\varphi^{-1}(y_i)\subseteq X_i$
是 $\ker(\varphi_i)$-陪集，而 $\operatorname{im}(\varphi^{-1}(y_j)
\to\varphi^{-1}(y_i))\subseteq X_i$ 是
$\operatorname{im}(\ker(\varphi_j)\to\ker(\varphi_i))$-陪集，
故只要 $\ker(\varphi)$ 是 Mittag-Leffler 系，
每个 $(\varphi^{-1}(y_i))_{i\in I}$
也就都是 Mittag-Leffler 系。
:::

```terms
Mittag-Leffler 系:
  en: Mittag-Leffler system
Mittag-Leffler 条件:
  en: Mittag-Leffler condition
```
