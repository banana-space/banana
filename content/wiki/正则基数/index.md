---
title: 正则基数
aliases: [奇异基数]
categories: [集合论]
navboxes: [集合论]
---

**正则基数**是[[共尾类]]为自身的[[基数]]。
相对应地，**奇异基数**是共尾类小于自身的基数。

基数的正则性等价于它不能被更小的基数通过取并集得到，
见 @regular-not-union。

## 定义

::: definition [正则基数]
设 $\kappa$ 为无限[[基数]]。
若 $\operatorname{cf}(\kappa) = \kappa$，
则称 $\kappa$ 为**正则基数**。

若无限基数 $\kappa$ 不为正则基数，则称为**奇异基数**。
:::

## 性质

以下命题基本都需要选择公理。简单起见，我们通篇假设选择公理。

::: proposition {@regular-not-union}
设 $\kappa$ 为基数。
则以下命题等价：
- $\kappa$ 是正则基数。
- $\kappa$ 不能写成少于 $\kappa$ 个小于 $\kappa$ 的基数之和。
- 若 $S_i (i\in I)$ 的[[势]]小于 $\kappa$，
  且 $I$ 的势小于 $\kappa$，
  则 $S = \coprod_i S_i$ 的势小于 $\kappa$。

:::

::: proof
容易验证后两条等价。

假设 $\kappa$ 为正则基数。
设 $S_i (i \in I)$ 的势小于 $\kappa$，且 $I$ 的势小于 $\kappa$，
我们证明 $|\coprod_{i \in I} S_i| < \kappa$。
给 $I$ 及每个 $S_i$ 赋予良序。
可设 $I = \alpha$，$S_i = \gamma_i$ 为序数。
对 $\beta \le \alpha$，
令 $f(\beta) = \sum_{i \in \beta} \gamma_i$ 为
$S_{<\beta} = \coprod_{i \in \beta} \gamma_i$ 的字典序的序型，
只需证 $f(\alpha) < \kappa$。
若不然，取最小的 $\beta \le \alpha$ 满足 $f(\beta) \ge \kappa$。
若 $\beta = \beta'+1$ 为后继序数，
则 $f(\beta) = f(\beta') + \gamma_{\beta'} \ge \kappa$，
而 $f(\beta') < \kappa$，$\gamma_{\beta'} < \kappa$，
与基数加法矛盾。
若 $\beta$ 为极限序数，则易见 $f|_\beta$ 在 $\kappa$ 中共尾，
与 $\kappa$ 正则矛盾。

假设后两条成立，反设 $\kappa$ 奇异。
取 $\kappa$ 的共尾子集 $Z$，设 $Z$ 的序型为 $\beta$。
显然 $\beta$ 为极限序数。
令 $f: \beta \to Z$ 为保序双射，
对 $i \in \beta$ 令
$$
S_i = \{x \in \kappa \mid x \le f(i) \wedge \forall j \in i, f(j) < x\}.
$$
则 $\kappa = \bigcup_{i \in \beta} S_i$，
且 $|S_i| < \kappa$，$|\beta| < \kappa$，
与假设矛盾。
:::

后继基数均为正则基数。

::: proposition
设 $\kappa$ 为基数，则 $\kappa^+$ 为正则基数。
:::

::: proof
我们使用 @regular-not-union，
即证不超过 $\kappa$ 个势不大于 $\kappa$ 的集合之并不大于 $\kappa$。
这由 $\kappa^2=\kappa$ 立得。
:::

对于极限基数，
由于 $\operatorname{cf}(\omega_\alpha) = \operatorname{cf}(\alpha)$，
较小的极限基数，如 $\omega_\omega$，$\omega_{\omega_1}$ 等，均为奇异基数。
正则的极限基数称为[[弱不可达基数]]，其存在性独立于[[ZFC]]。

```terms
正则基数:
  en: regular cardinal number
奇异基数:
  en: singular cardinal number
```
