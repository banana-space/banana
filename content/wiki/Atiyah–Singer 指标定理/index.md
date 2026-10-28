---
title: Atiyah–Singer 指标定理
aliases: [Atiyah-Singer 指标定理, 指标定理]
categories: [微分几何]
---

<problems>
- “推论”“族指标定理”“与物理的联系”各节需要扩充。
</problems>

**[[Michael Atiyah|Atiyah]]–[[Isadore Singer|Singer]] 指标定理**是说，
对[[紧空间|紧]][[光滑流形|流形]]上[[光滑向量丛|向量丛]]
上的[[椭圆微分算子]] $D$ 而言，
其以下两种指标相等：

- **[[解析指标]]**：
  即 $D$ 的[[核 (代数)|核]]与[[余核]]维数之差。

- **[[拓扑指标]]**：
  由流形的某些（与 $D$ 有关的）[[示性类]]的积分给出。

以下的著名定理都可以看作 Atiyah–Singer 指标定理的特例：

- [[Gauß–Bonnet 定理]]，及其推广[[陈–Gauß–Bonnet 定理]]。

- [[Riemann–Roch 定理]]，及其推广[[Hirzebruch–Riemann–Roch 定理]]。

- [[Hirzebruch 符号差定理]]。

Atiyah–Singer 指标定理也可以从[[量子场论]]的角度来解释，
算子的指标可以视作流形[[环路空间]]上的一个[[路径积分]]。
这一观点也导致指标定理的一个基于[[热核]]的严格证明 [@berline1992heat]。

## 陈述

### 对椭圆微分算子

::: theorem [Atiyah–Singer 指标定理]
设

- $X$ 是[[紧空间|紧]][[定向]][[光滑流形]]。

- $E$、$F$ 是 $X$ 上的[[光滑向量丛]]。

- $D \colon \Gamma (E) \to \Gamma (F)$ 是[[椭圆微分算子]]，
  其中 $\Gamma (-)$ 表示光滑截面的空间。

则
\[
\operatorname{ind} (D) =
\int_X \operatorname{ch} (D) \operatorname{td} (X),
\]
其中

- $\operatorname{ind} (D) =
  \dim \ker D - \dim \operatorname{coker} D$
  是 $D$ 的**解析指标**。

- $\operatorname{ch} (D)$
  是某种[[陈特征]]。

- $\operatorname{td} (X)$
  是 $X$ 的复化切丛的 [[Todd 类]]。

:::

### 对 Dirac 算子

[[Dirac 算子]]的指标定理是椭圆微分算子的指标定理的特例。

::: theorem [Atiyah–Singer 指标定理]
设

- $X$ 是 $2n$ 维[[紧空间|紧]][[定向]][[光滑流形]]。

- $E$ 是 $X$ 上的[[光滑向量丛|光滑]]复[[超向量丛]]，
  带有 [[Hermite 度量]]。

- $D \colon \Gamma (E) \to \Gamma (E)$ 是奇的[[自伴算子|自伴]] [[Dirac 算子]]。
  此时，它能拆成两部分的和：
  \[
  D^{\pm} \colon \Gamma (E^{\pm}) \to \Gamma (E^{\mp}),
  \]
  其中 $E^{\pm}$ 表示 $E$ 的奇偶部分，
  并且 $D^-$ 是 $D^+$ 的伴随。

则
\[
\operatorname{ind} (D) = \frac {1} {(2 \pi \mathrm{i})^n}
\int_X \widehat{A} (X) \operatorname{ch} (E/S),
\]
其中

- $\operatorname{ind} (D) =
  \dim \ker D^+ - \dim \ker D^-$
  是 $D$ 的指标。

- $\widehat{A} (X)$
  是 $X$ 的 [[Â 类|$\widehat{A}$ 类]]。

- $\operatorname{ch} (E/S)$
  局部上定义为向量丛 $E/S$ 的[[陈特征]]，
  其中 $S$ 是局部的[[旋量丛]]，
  而 $E \simeq E/S \otimes S$。

:::

## 推论

## 族指标定理

## 与物理的联系

## 参考文献*

Atiyah 与 Singer 在此文中最初发表了指标定理，但未给出详细证明：

```bibliography
atiyah1963index:
  type: article
  author: ['Atiyah, Michael F.', 'Singer, Isadore M.']
  title: The Index of Elliptic Operators on Compact Manifolds
  journaltitle: Bull. Amer. Math. Soc.
  volume: 69
  number: 3
  pages: 422–433
  year: 1963
  doi: 10.1090/S0002-9904-1963-10957-X
  zbmath: '0118.31203'
```

在以下一系列论文中，
Atiyah、Segal、Singer 证明了指标定理，并给出了各种变形：

```bibliography
atiyah1968index1:
  type: article
  author: ['Atiyah, Michael F.', 'Singer, Isadore M.']
  title: The Index of Elliptic Operators I
  journaltitle: Ann. Math.
  volume: 87
  number: 3
  pages: 484–530
  year: 1968
  doi: 10.2307/1970715
  zbmath: '0164.24001'
atiyah1968index2:
  type: article
  author: ['Atiyah, Michael F.', 'Segal, Graeme B.']
  title: The Index of Elliptic Operators II
  journaltitle: Ann. Math.
  volume: 87
  number: 3
  pages: 531–545
  year: 1968
  doi: 10.2307/1970716
  zbmath: '0164.24201'
atiyah1968index3:
  type: article
  author: ['Atiyah, Michael F.', 'Singer, Isadore M.']
  title: The Index of Elliptic Operators III
  journaltitle: Ann. Math.
  volume: 87
  number: 3
  pages: 546–604
  year: 1968
  doi: 10.2307/1970717
  zbmath: '0164.24301'
atiyah1971index4:
  type: article
  author: ['Atiyah, Michael F.', 'Singer, Isadore M.']
  title: The Index of Elliptic Operators IV
  journaltitle: Ann. Math.
  volume: 93
  number: 1
  pages: 119–138
  year: 1971
  doi: 10.2307/1970756
  zbmath: '0212.28603'
atiyah1971index5:
  type: article
  author: ['Atiyah, Michael F.', 'Singer, Isadore M.']
  title: The Index of Elliptic Operators V
  journaltitle: Ann. Math.
  volume: 93
  number: 1
  pages: 139–149
  year: 1971
  doi: 10.2307/1970757
  zbmath: '0208.31901'
```

Dirac 算子的指标定理可以通过量子场论来给出（半严格的）证明，见：

```bibliography
windey1984supersymmetric:
  type: article
  author: 'Windey, Paul'
  title: Supersymmetric quantum mechanics and the Atiyah–Singer index theorem
  journaltitle: Acta Phys. Pol.
  volume: B15
  number: 5
  pages: 435–451
  year: 1984
  url: https://www.actaphys.uj.edu.pl/R/15/5/435/pdf
```

这一想法可以通过热核来写成严格的证明，见：

```bibliography
berline1992heat:
  type: book
  author: ['Berline, Nicole', 'Getzler, Ezra', 'Vergne, Michèle']
  title: Heat kernels and Dirac operators
  series: Grundlehren Math. Wiss.
  number: 298
  year: 1992
  publisher: Springer
  zbmath: '0744.58001'
```

```terms
Atiyah–Singer 指标定理:
  en: Atiyah–Singer index theorem
  de: Atiyah-Singer-Indexsatz :m
  fr: théorème de l'indice d'Atiyah-Singer :m
```
