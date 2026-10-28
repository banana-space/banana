---
title: 集合范畴
categories: [集合论]
---

<problems>
- “性质”一节需要扩充。
</problems>

$\mathsf{Set}$

**集合范畴**是所有[[集合]]和它们之间的[[映射 (集合论)|映射]]构成的[[范畴]]，
通常记为 $\mathsf{Set}$。

## 定义

::: definition [集合范畴]
**集合范畴** $\mathsf{Set}$ 是由以下信息给出的[[范畴]]：

- [[对象]]：所有[[集合]]。

- [[态射]]：集合之间的[[映射 (集合论)|映射]]。

:::

## 性质

### 极限与余极限

- $\mathsf{Set}$ 的[[始对象]]是[[空集]]，终对象是[[单点集]]。

- $\mathsf{Set}$ 中的[[积 (范畴论)|积]]是 [[Descartes 积]]，
  [[余积]]是集合的[[无交并]]。

- $\mathsf{Set}$ 具有所有[[极限 (范畴论)|极限]]，可以描述如下：
  对任何[[小范畴]] $\mathcal{K}$ 和任何[[函子]] $F \colon \mathcal{K} \to \mathsf{Set}$，
  其极限为
  \[
  \lim F \simeq \biggl\{
    (x_i) \in \prod_{i \in \mathcal{K}} F (i)
    \biggm|
    \forall (i \overset{f}{\to} j) \in \mathcal{K}, \
    x_i \overset{F(f)}{\longmapsto} x_j
  \biggr\}.
  \]
  由此可见极限是[[可表函子]]：
  \[
  \lim F \simeq
  \mathsf{Set}^{\mathcal{K}} (\Delta (*), F),
  \]
  其中 $\mathsf{Set}^{\mathcal{K}}$ 是[[函子范畴]]，
  $\Delta (*)$ 表示取值为[[单点集]] $*$ 的[[常函子]]。

- $\mathsf{Set}$ 具有所有[[余极限]]，可以描述如下：
  对任何[[小范畴]] $\mathcal{K}$ 和任何[[函子]] $F \colon \mathcal{K} \to \mathsf{Set}$，
  其余极限为
  \[
  \operatorname{colim} F \simeq
  \coprod_{i \in \mathcal{K}} F(i) \bigg/
  \biggl\{
    \begin{array}{c}
      F(i) \ni x \sim y \in F(j) \\
      \forall (i \overset{f}{\to} j) \in \mathcal{K}, \
      x \overset{F(f)}{\longmapsto} y
    \end{array}
  \biggr\}.
  \]

```terms
集合范畴:
  en: category of sets
  de: Kategorie der Mengen
  fr: catégorie des ensembles
  grc: κατηγορία συνόλων
  la: categoria copiarum
```
