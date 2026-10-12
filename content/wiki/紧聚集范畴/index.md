---
title: 紧聚集范畴
categories: [范畴论]
navboxes: [范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  将经典的范畴称为 1-范畴。

:::

**紧聚集范畴**是[[紧生成范畴]]的推广。
在数学实践中，我们所遇到的许多范畴并非紧生成的（即 $\aleph_0$-可表现范畴），
而是紧聚集的（当然，紧生成范畴必然是紧聚集的）。
它未必有足够的[[紧对象]]生成整个范畴，但有足够的[[紧态射]]。

## 定义

::: definition
称范畴 $\mathcal{C}$ 是**紧聚集范畴**，
指它是[[可达范畴|可达]]、有[[滤余极限]]、
且函子 $\operatorname*{colim} \colon \mathsf{Ind}(\mathcal{C}) \to \mathcal{C}$ 有[[左伴随]]。
此时该左伴随通常记作 $\hat{y}$ 或 $\hat{y}_\mathcal{C}$。
:::

::: definition
令 $\mathcal{C}$ 和 $\mathcal{D}$ 为紧聚集范畴。
称左伴随函子 $F \colon \mathcal{C} \to \mathcal{D}$ 为**紧聚集函子**，
是指 $F$ 保持紧态射。
记

$$
\mathsf{Pr}_{\mathrm{ca}}^L \subset \mathsf{Pr}^L
$$

为紧聚集范畴以及紧聚集函子所构成的非全子范畴。
:::

## 性质

::: theorem {@thm-ca-retract}
令 $\mathcal{C} \in \mathsf{Pr}^L$。
则 $\mathcal{C}$ 为紧聚集范畴，当且仅当 $\mathcal{C}$ 是某个紧生成范畴在 $\mathsf{Pr}^L$ 中的收缩。
特别地，在可表现稳定范畴所构成的范畴 $\mathsf{Pr}^L_{\mathrm{st}}$ 中，
$\mathcal{C}$ 为紧聚集范畴当且仅当它是[[可对偶对象]]。
因此，紧聚集范畴也称**可对偶稳定范畴**。
:::

::: theorem [Lurie, Clausen] {@thm-Lurie-Clausen}
令 $\mathcal{C}$ 为[[可表现范畴]]，
则以下条件等价：

1. $\mathcal{C}$ 为紧聚集范畴。

2. $\mathcal{C}$ 为 $\aleph_1$-可表现范畴，
   且余极限函子 $k \colon \mathsf{Ind}(\mathcal{C}^{\aleph_1}) \to \mathcal{C}$ 具有左伴随
   $\hat{y}$。

3. 存在正则基数 $\kappa$ 使得 $\mathcal{C}$ 为 $\kappa$-可表现范畴，
   且函子 $\mathsf{Ind}(\mathcal{C}^{\kappa}) \to \mathcal{C}$ 具有左伴随。

4. $\mathcal{C}$ 中滤余极限关于全体小极限具有分配性，即对于小范畴 $K$ 和[[滤范畴]] $I$，
   自然映射

   $$
   \operatorname{colim}_{I^K} \operatorname{lim}_K F \xrightarrow{\;\sim\;} \operatorname{lim}_K \operatorname{colim}_I F
   $$

   为等价。

:::

::: proposition {@prop-compact-morphism-char}
在紧聚集范畴 $\mathcal{C}$ 中，对于态射 $f \colon X \to Y$，以下条件等价：

1. $f$ 为紧态射。

2. $y(f) \colon y(X) \to y(Y)$ 穿过 $\hat{y}(Y)$。

3. $\hat{y}(f) \colon \hat{y}(X) \to \hat{y}(Y)$ 穿过 $y(X)$。

4. $\hat{y}(f) \colon \hat{y}(X) \to \hat{y}(Y)$ 为 $\mathsf{Ind}(\mathcal{C}^{\aleph_1})$
   中的紧态射。

:::

## 动机与应用

- **拓扑空间上的层**：一个典型的非紧生成但紧聚集的例子是局部紧 Hausdorff 空间上的层范畴。
  具体而言，对于 Hausdorff 空间 $X$，
  $\mathsf{Shv}(X)$ 是紧聚集的（等价地 $\mathsf{Open}(X)$ 是紧聚集的），当且仅当 $X$ 是局部紧空间。

- **分类意象与结构层**：对于[[意象]] $\mathcal{X}$ 以及范畴 $\mathcal{C}$，
  我们定义
  $\mathsf{Shv}_{\mathcal{C}}(\mathcal{X}) \coloneqq \mathsf{Fun}^{\mathrm{lim}}(\mathcal{X}^{\mathrm{op}},\mathcal{C})$
  （由于意象是全体小余极限均 [[Van Kampen 余极限|Van Kampen]] 的可表现范畴，
  换句话说全体小余极限均可下降，因此这个定义是合理的）。
  现在我们想定义 $\mathcal{X}$ 上的 $\mathcal{C}$-值结构层。
  一种可行的方式是考虑**分类意象**，即满足如下性质的意象 $\mathcal{E}$：
  存在万有对象 $\mathcal{F} \in \mathsf{Shv}_{\mathcal{C}}(\mathcal{E})$，
  使得对任意意象 $\mathcal{X}$，指派 $f^* \mapsto f^*\mathcal{F}$ 诱导出范畴等价

  $$
  \mathsf{Fun}^*(\mathcal{E},\mathcal{X}) \xrightarrow{\;\sim\;} \mathsf{Shv}_{\mathcal{C}}(\mathcal{X}).
  $$

  此时 $f^*\mathcal{F} \in \mathsf{Shv}_{\mathcal{C}}(\mathcal{X})$ 即为 $\mathcal{X}$ 上的**万有
  $\mathcal{C}$-值层** $\mathcal{O}_{\mathcal{X}}$。
  这样的分类意象不总是存在，但当 $\mathcal{C}$ 为紧聚集范畴时，
  分类意象总存在，并且可以具体刻画为 $\mathsf{Fun}^{\omega}(\mathcal{C},\mathsf{Ani})$。

- **可对偶性与 K 理论**：考虑 $\mathbb{S}$-线性范畴所构成的范畴
  $\mathsf{Pr}_{\mathbb{S}}^L = \mathsf{Pr}_{\mathrm{st}}^L$。
  由 @thm-ca-retract 可知，紧聚集稳定范畴恰好是其中的可对偶对象。

```terms
紧聚集范畴:
  en: compactly assembled category
```
