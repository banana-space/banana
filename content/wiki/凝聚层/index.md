---
title: 凝聚层
categories: [层论]
notices:
  - name: 问题
    items:
      - “性质”一节中，命题“拉回层”对一般的环化空间似乎不成立（拉回只保证有限表现，需要 $\mathcal{O}_X$ 本身凝聚，例如 $X$ 是局部 Noether 概形）；命题“前推层”似乎也需要 $Y$ 局部 Noether 等条件。
navboxes: [层论]
---

在[[代数几何]]与[[复几何]]中，
**凝聚层**是[[向量丛]]的推广，以使之构成 [[Abel 范畴]]。
直观地说，凝聚层类似于向量丛，
但允许其纤维的维数变动。
例如，一点处的[[摩天楼层]]是凝聚层，其纤维只在一点非零。

## 定义

### 对环化空间

凝聚层的概念可以对一般的[[环化空间]]定义。
在[[代数几何]]中，我们主要考虑[[概形]]；
在[[复几何]]中，主要考虑[[复流形]]或[[复解析空间]]。

::: definition [凝聚层] {@凝聚层}
设 $(X, \mathcal{O}_X)$ 是[[环化空间]]或[[环化意象]]，
$\mathcal{F}$ 是 $\mathcal{O}_X$-[[模层|模]]。
称 $\mathcal{F}$ 为**凝聚层**，如果以下条件成立：

- $\mathcal{F}$ **[[有限型模层|有限型]]**：
  存在 $X$ 的一组[[开覆盖]] $\mathscr{U}$，
  使得对[[开集]] $U \in \mathscr{U}$ 存在[[自然数]] $n$
  与 $\mathcal{O}_U$-模的满射
  \[
  \mathcal{O}_U^{\oplus n} \to \mathcal{F}|_U,
  \]
  其中 $\mathcal{O}_U = \mathcal{O}_X|_U$。

- 对任意开集 $U \subset X$，任意自然数 $n$，
  和任意 $\mathcal{O}_U$-模的映射
  \[
  f \colon \mathcal{O}_U^{\oplus n} \to \mathcal{F}|_U,
  \]
  其[[核 (代数)|核]] $\ker f \subset \mathcal{O}_U^{\oplus n}$
  是有限型 $\mathcal{O}_U$-模。

:::

### 对局部 Noether 概形

对[[局部 Noether 概形]]而言，下述定理可以简化凝聚层的定义。

::: theorem
设 $(X, \mathcal{O}_X)$ 是[[局部 Noether 概形]]，
$\mathcal{F}$ 是 $\mathcal{O}_X$-[[模层|模]]。
则以下等价：

- $\mathcal{F}$ 是凝聚层（@凝聚层）。

- $\mathcal{F}$ 是[[有限型模层|有限型]][[拟凝聚层]]：
  在任意[[仿射开集]]
  $\operatorname{Spec} A \simeq U \subset X$ 上，
  有 $\mathcal{F}|_U \simeq \widetilde{M}$，
  其中 $M$ 是[[有限生成模|有限生成]] $A$-模。

- 对任意 $x \in X$，存在含 $x$ 的仿射开集
  $\operatorname{Spec} A \simeq U \subset X$，
  使得 $\mathcal{F}|_U \simeq \widetilde{M}$，
  其中 $M$ 是有限生成 $A$-模。

- $\mathcal{F}$ 是[[有限表现模层|有限表现]] $\mathcal{O}_X$-模：
  对任意 $x \in X$，存在含 $x$ 的[[开集]] $U \subset X$
  和自然数 $m, n$，使得有 $\mathcal{O}_U$-模的[[正合列]]
  \[
  \mathcal{O}_U^{\oplus m} \to
  \mathcal{O}_U^{\oplus n} \to
  \mathcal{F}|_U \to 0.
  \]

:::

## 性质

凝聚层构成 Abel 范畴，且有较好的函子性。

::: proposition [凝聚层范畴]
在 [[Abel 层]]范畴 $\mathsf{Ab}(X)$ 中，
凝聚层对取[[核 (代数)|核]]、[[余核]]、[[扩张]]封闭，
从而构成 [[Abel 范畴]]，称为**凝聚层范畴**，
记作 $\mathsf{Coh}(X)$。
:::

::: proposition [拉回层]
设有[[环化空间]]（或[[环化意象]]）
间的态射 $f \colon (X, \mathcal{O}_X) \to (Y, \mathcal{O}_Y)$，
则凝聚层 $\mathcal{F} \in \mathsf{Coh}(Y)$
沿 $f$ 的[[拉回层]] $f^*\mathcal{F}$ 也是凝聚层。
:::

::: proposition [前推层]
设有概形间的[[紧合态射]] $f \colon X \to Y$，
则凝聚层 $\mathcal{F} \in \mathsf{Coh} (X)$
沿 $f$ 的[[前推层]]也是凝聚层。
事实上它[[导出前推层]]的每一阶上同调都是凝聚层。
:::

此外作为拟凝聚层，
凝聚层当然满足 [[Henri Cartan]]的[[定理 A]] 和[[定理 B]]。

## 例子

- [[代数向量丛]]，即[[局部自由层]]
  - [[代数线丛]]，即[[可逆层]]
- [[理想层]]
- [[摩天楼层]]

```terms
凝聚层:
  en: coherent sheaf
  fr: faisceau cohérent
  de: kohärente Garbe
  la: fascis cohaerens
```
