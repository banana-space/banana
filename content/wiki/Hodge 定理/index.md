---
title: Hodge 定理
categories: [Riemann 几何, 复几何]
---

<problems>
- “证明”一节需要扩充。
- “推论”一节的 Hodge 分解定理中似乎缺少 $X$ 紧的假设。
</problems>

**Hodge 定理**是 [[Riemann 几何]]和
[[Kähler 几何]]中的定理，由 [[William Vallance Douglas Hodge|Hodge]]
发现并证明，说的是[[紧空间|紧]] [[Riemann 流形]]的
[[de Rham 上同调]]类，紧 [[Kähler 流形]]的 de Rham 上同调、
[[Dolbeault 上同调]]类，都有[[调和形式]]作为典范代表元。

该定理在[[复几何]]和[[代数几何]]中影响深远，
它能立刻推出 Hodge 分解定理，从而把 [[Hodge 结构]]的研究带入到复几何中，
引出一整套 [[Hodge 理论]]。
复几何版本的 [[Serre 对偶]]也是它的推论。

## 陈述

### Riemann 情形

::: theorem
$X$ 是 $n$ 维紧 [[Riemann 流形]]。对 $k$ 次[[微分形式]]，
以 $\mathrm{d}$ 记其[[外微分]]，$\mathrm{d}^*$ 是 $\mathrm{d}$ 之[[伴随算子|伴随]]，
$\Delta=\mathrm{d}\mathrm{d}^*+\mathrm{d}^*\mathrm{d}$ 为 [[Laplace 算子]]，
$\mathcal{H}^k(X)=
  \{\omega\in\Omega^k(X)\mid\Delta\omega=0\}$，
称为 $k$ 次[[调和形式]]。则有正交分解
\[
\mathcal{A}^k(X) \simeq \mathcal{H}^k(X)
\oplus \operatorname{im} \mathrm{d} \oplus \operatorname{im} \mathrm{d}^*,
\]
特别地，它诱导同构
$\mathcal{H}^k(X)\cong H^k_{\text{dR}}(X)$，
其中 $H^k_{\text{dR}}(X)$ 表示 $k$ 次 [[de Rham 上同调]]。
:::

### Kähler 情形

::: theorem
$X$ 是 $n$ 维紧 [[Hermite 流形]]，$E$
是其上[[全纯向量丛]]，带有 [[Hermite 度量 (向量丛)|Hermite 度量]]。
对 $E$ 值 $(p,q)$-[[微分形式]]，
以 ${\bar{\partial}}$ 记其 [[Dolbeault 微分]]，
${\bar{\partial}}^*$ 为其伴随，
$\Delta_{\bar{\partial}}={\bar{\partial}}{\bar{\partial}}^*+{\bar{\partial}}^*{\bar{\partial}}$。
记 $\mathcal{H}_{{\bar{\partial}}}^{p,q}(E)=
  \{\omega\in \mathcal{A}^{p,q}(E)\mid\Delta_{\bar{\partial}}\omega=0\}$，
称为 $q$ 次[[调和形式]]。则有正交分解
\[
\mathcal{A}^{p,q}(E) \simeq \mathcal{H}_{{\bar{\partial}}}^{p,q}(E)
\oplus \operatorname{im} {{\bar{\partial}}} \oplus \operatorname{im} {{\bar{\partial}}}^*,
\]
特别地，
$\mathcal{H}_{{\bar{\partial}}}^{p,q}(E)\cong H^{p,q}_{\bar{\partial}}(E)$，
其中 $H^{p,q}_{\bar{\partial}}(E)$ 表示 $(p,q)$ 次 [[Dolbeault 上同调]]。
:::

取 $E$ 为秩 $1$ 平凡丛，即得到 $X$ 本身的 [[Dolbeault 上同调]]的表述。
如取 $E$ 为反全纯向量丛（例如平凡丛），也可以得到相应的关于 $\partial$ 的定理。

## 证明

## 推论

将此二定理结合，
用 [[Kähler 恒等式]]能推出 [[Hodge 分解]]：

::: theorem [Hodge 分解]
对 $n$ 维 [[Kähler 流形]] $X$，有
$$
H^k(X,\mathbb{C})=\bigoplus_{p+q=k}H^q(X,\Omega_X^p),
$$
其中左边是 [[de Rham 上同调]]，右边是全纯微分丛的
[[Dolbeault 上同调]]。
此同构不依赖 Kähler 结构 $\omega$ 的选取。
:::

证明见相应主条目。

```terms
Hodge 定理:
  en: Hodge theorem
  de: Satz von Hodge
  fr: théorème de Hodge
```
