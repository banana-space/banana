---
title: $p$ 进周期环
categories: [$p$ 进几何]
notices:
  - name: 问题
    items:
      - “动机”一节中作用在平展上同调上的 Galois 群似乎应为 $\operatorname{Gal}(\bar{\mathbb{Q}}_p/\mathbb{Q}_p)$，而不是 $\operatorname{Gal}(\bar{\mathbb{Q}}/\mathbb{Q})$。
navboxes: [P 进几何]
---

**$p$ 进周期环**是[[复代数几何]]中[[周期]]环的类比，
这些环在 [[$p$ 进几何]]中有广泛应用。
在 [[$p$ 进 Hodge 理论]]中它们用来建立不同上同调间的比较定理，
而在 [[$p$ 进 Galois 表示论]]中它们用来将复杂的
Galois 表示转化为一些较简单的对象，例如 [[$F$-有理晶体]]。

从前沿的角度来看，
$p$ 进周期环就是完美[[棱镜]] [[$A_{\inf}$]]
的某些局部化与完备化，
而以 $A_{\text{inf}}$ 为基的[[棱镜上同调]]可以联系所有上同调，
因此它们能够用来建立不同上同调的比较定理也就不足为奇。

## 动机 {@动机}

在复代数几何中，
周期是在数域上[[紧合态射|紧合]][[光滑态射|光滑]]代数簇的
[[代数 de Rham 上同调]]与[[奇异上同调]]的比较定理中出现的[[超越数]]。
例如对于 $\mathbb{Q}$ 上的一维射影空间 $\mathbb{P}^1$，
虽然奇异上同调 $H^2(\mathbb{P}^1_{\mathbb{C}}, \mathbb{Q})$
与 de Rham 上同调 $H^2_{\text{dR}}(\mathbb{P}^1/\mathbb{Q})$
均是一维 $\mathbb{Q}$-向量空间，
但二者却不典范同构。事实上，由积分诱导的映射
\[
H_2(\mathbb{P}^1_{\mathbb{C}}, \mathbb{Q})
\times H^2_{\text{dR}}(\mathbb{P}^1/\mathbb{Q})
\to \mathbb{C}
\]
之像为 $2\pi\mathrm{i}\mathbb{Q}$，因此二者比较定理应陈述为
\[
H^2(\mathbb{P}^1_{\mathbb{C}}, \mathbb{Q})
\otimes \mathbb{Q}[(2\pi\mathrm{i})^{\pm 1}]
\simeq H^2_{\text{dR}}(\mathbb{P}^1/\mathbb{Q})
\otimes \mathbb{Q}[(2\pi\mathrm{i})^{\pm 1}].
\]
这里 $2\pi \mathrm{i}$ 即是 $\mathbb{P}^1$ 的周期，
而周期环则是 $\mathbb{Q}$ 添加所有周期得到的环。

在 $p$ 进几何中，
人们也寻求[[平展上同调]]、
[[晶体上同调]]、[[代数 de Rham 上同调]]等上同调的比较定理。
具体地说，对[[紧合态射|紧合]][[光滑态射|光滑]][[形式概形]]
$\mathfrak{X}/\mathbb{Z}_p$，有以下三种上同调理论：

- $\mathfrak{X}$ 的几何[[普遍纤维]] $\mathfrak{X}_{\bar{\eta}}$
的平展上同调 $H_{\text{\'et}}^*(\mathfrak{X}_{\bar{\eta}}, \mathbb{Z}_p)$。

- $\mathfrak{X}$ 的代数 de Rham 上同调
$H_{\text{dR}}^*(\mathfrak{X}/\mathbb{Z}_p)$。

- $\mathfrak{X}$ 的特殊纤维 $\bar{\mathfrak{X}}$ 的晶体上同调
$H_{\text{crys}}^*(\bar{\mathfrak{X}}/\mathbb{Z}_p)$。

虽然这三者均是秩相同的 $\mathbb{Z}_p$-模，
它们却带有不同的附加结构：
平展上同调带有 [[Galois 群]]
$\operatorname{Gal}(\bar{\mathbb{Q}}/\mathbb{Q})$ 作用，
晶体上同调带有 Frobenius 作用，
代数 de Rham 上同调则带有滤链，
人们希望得到与这些结构相容的比较定理。
与之前复代数几何的情况相同，
需要考虑比 $\mathbb{Q}_p$ 结构丰富很多，
同时含有以上几种结构的环，这些环就是 **$p$ 进周期环**。
例如，在下面的[[平展–晶体比较定理]]中就出现了晶体周期环
[[$B_{\mathrm{crys}}$]]，它同时有 Galois 群作用和 Frobenius 作用。

\[
H_{\text{\'et}}^*(\mathfrak{X}_{\bar{\eta}}, \mathbb{Z}_p)
\otimes B_{\text{crys}}
\simeq H_{\text{crys}}^*(\bar{\mathfrak{X}}/\mathbb{Z}_p)
\otimes B_{\text{crys}}
\]

## 列举

以下列举了常见的 $p$ 进周期环，每种周期环的具体性质请参见相应条目。

- 基本构造 [[$A_{\inf}$]]、[[$B_{\mathrm{inf}}$]]。

- 晶体周期环 [[$A_{\mathrm{crys}}$]]、[[$B_{\mathrm{crys}}^+$]]、
[[$B_{\mathrm{crys}}$]]，它们可以联系[[平展上同调]]和[[晶体上同调]]。

- de Rham 周期环 [[$B_{\mathrm{dR}}^+$]]、[[$B_{\mathrm{dR}}$]]，
它们可以联系平展上同调和[[代数 de Rham 上同调]]。

- 半稳定周期环 [[$B_{\mathrm{st}}$]]，
它可以联系平展上同调和[[对数晶体上同调]]。

```terms
$p$ 进周期环:
  en: $p$-adic period ring
  fr: anneau des periodes $p$-adiques
```
