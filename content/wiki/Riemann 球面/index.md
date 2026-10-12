---
title: Riemann 球面
categories: [复几何]
notices:
  - name: 问题
    items:
      - “性质”一节第二个命题的证明不完整，只证明了第一项。
---

**Riemann 球面**是对[[一维]]复[[射影空间]]的称呼，
它是个一维复[[代数簇]]，也是个 [[Riemann 面]]。
作为[[光滑流形]]，
它微分同胚于[[球面]]，因此称为 Riemann 球面。

## 定义

::: definition [Riemann 球面]
**Riemann 球面**是[[一维]]复[[射影空间]]
$\mathbb{CP}^1$。
这诱导了它的复[[代数簇]]以及 [[Riemann 面]]结构。
这样它作为集合是复数集 $\mathbb{C}$ 并一个点，
称为**无穷远点**。
:::

## 性质

通过[[球极投影]]，可以证明

::: proposition
Riemann 球面[[微分同胚]]于[[球面]]。
:::

此外，作为射影空间，它满足下面的性质：

::: proposition
- Riemann 球面上的[[亚纯函数]]是[[分式函数]]。

- Riemann 球面的[[自同构群]]（即到自身的[[双全纯映射]]）
  同构于[[射影线性群]]
  $\mathrm{PGL}_2(\mathbb{C})$。
  此同构由
  \[
  \begin{pmatrix}
    a & b \\
    c & d
  \end{pmatrix}
  \mapsto (z \mapsto \frac{az + b}{cz + d})
  \]
  给出。

- Riemann 球面的[[切丛]]同构于 $\mathcal{O}(2)$。

- Riemann 球面上有[[度量]]
  \[
  ds^2 = \frac{1}{(1 + |z|^2)^2} dz d\bar{z}
  = \frac{1}{(1 + u^2 + v^2)^2}
  (du^2 + dv^2).
  \]
  它可以由[[球面]]的标准度量由球极投影诱导，
  也可以作为 [[Fubini–Study 度量]]的一维情形。

:::

::: proof
- 设$f$是Riemann球面上的亚纯函数。
  其极点的集合是Riemann球面这个紧集的离散子集，
  则为有限集$\{a_1,\dots,a_n\}$。
  设$f$在这些点的主部是$p_1,\dots,p_n$，
  那么$f-p_1-\dots-p_n$是Riemann球面上的全纯函数，必是常数。
  既然$f$是有限个分式函数$p_1,\dots,p_n$与一个常数相加，$f$亦是分式函数。

:::

```terms
Riemann 球面:
  en: Riemann sphere
  de: riemannsche Zahlenkugel
  fr: sphère de Riemann
```
