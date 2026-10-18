---
title: Hironaka 奇点消解定理
aliases: [Hironaka 奇点消解, 奇点消解]
categories: [双有理几何]
navboxes: [双有理几何]
---

**Hironaka 奇点消解定理**是[[代数几何]]中的重要定理，
它说明在[[特征 (代数)|特征]] $0$ [[域]]上，
任何[[代数簇]]都可以通过一系列[[爆破]]，最终成为[[光滑簇]]。
换言之，代数簇中的[[奇点]]可以经过一系列爆破而消除。

在特征非 $0$ 的域上，三维以上代数簇的奇点消解问题仍是未解难题。

## 陈述

Hironaka 解决奇点消解问题的一个关键想法是，
我们不直接考虑带有奇点的代数簇，
而是考虑[[光滑簇]]中的[[除子]]和一般的[[闭子簇]]，及其对应的[[理想层]]。
这样，我们可以仅在光滑簇中沿光滑的闭子簇进行[[爆破]]，
而消除其中嵌入的闭子簇的奇点。

::: theorem [理想消解] {@理想消解}
设 $k$ 为[[特征 (代数)|特征]] $0$ [[域]]。
给定三元组 $(X, \mathcal{I}, D)$，其中

- $X$ 是 $k$ 上的[[光滑簇]]；

- $\mathcal{I} \subset \mathcal{O}_X$ 是非零[[理想层]]；

- $D$ 是 $X$ 上的[[简单横截除子]]。

则存在一系列[[爆破]]的复合
\[
\Pi \colon
X_r \overset{\pi_{r-1}}{\longrightarrow}
\cdots \overset{\pi_1}{\longrightarrow}
X_1 \overset{\pi_0}{\longrightarrow}
X_0 = X ,
\]
其中每个 $\pi_i \colon X_{i+1} \to X_i$
是沿光滑[[闭子簇]] $Z_i \subset X_i$ 的爆破。
特别地，$\Pi$ 是[[双有理态射]]、[[射影态射]]。
并且，该构造满足以下性质：

- 每个 $Z_i$ 都与 $D$ 和各 $Z_j$ $(j < i)$ 的原像简单横截相交。

- $\mathcal{O}_{X_r}$ 中由 $\Pi^{-1} \mathcal{I}$ 生成的理想层
  $\Pi^{-1} \mathcal{I} \cdot \mathcal{O}_{X_r}$
  是某个简单横截除子的理想层。

- $\Pi$ 在 $\mathcal{I}$ 对应的闭子簇之外是同构。

- 该构造关于[[光滑态射]]具有[[函子]]性：
  对任何光滑态射 $f \colon Y \to X$，
  三元组 $(Y, f^{-1} \mathcal{I} \cdot \mathcal{O}_Y, f^* D)$
  的理想消解等于 $(X, \mathcal{I}, D)$ 的理想消解沿 $f$ 拉回，
  但需删去那些拉回后变成沿 $\varnothing$ 爆破的映射。

- 类似地，该构造关于[[域扩张]] $K / k$ 具有函子性。

:::

以上定理取自 [@Kollar2007, 3.35]。
@理想消解 可以用来证明下述代数簇的奇点消解定理：

::: theorem [奇点消解]
设 $k$ 为[[特征 (代数)|特征]] $0$ [[域]]，
$X$ 是[[有限型态射|有限型]] $k$-[[概形]]。
则存在一系列[[爆破]]的复合
\[
\Pi \colon
X_r \overset{\pi_{r-1}}{\longrightarrow}
\cdots \overset{\pi_1}{\longrightarrow}
X_1 \overset{\pi_0}{\longrightarrow}
X_0 = X ,
\]
其中每个 $\pi_i \colon X_{i+1} \to X_i$
是沿光滑闭子簇 $Z_i \subset X_i$ 的爆破。
特别地，$\Pi$ 是双有理态射、射影态射。
并且，满足以下性质：

- $X_r$ 是光滑簇。

- $\Pi$ 在 $X$ 光滑的那部分点构成的开集上是同构；
  其[[补集]]（即 $X$ 的[[奇点]]集）的原像是
  $X_r$ 中的简单横截除子。

- 该构造关于[[光滑态射]]、[[域扩张]]具有函子性。

:::

::: proof [证明概要]
首先假设 $X$ 是[[不可约空间|不可约]][[仿射簇]]。
取[[闭浸入]] $X \hookrightarrow \mathbb{A}^n$，
使得 $X$ 的[[余维数]] $\geq 2$。
在 @理想消解 中，
考虑三元组 $(\mathbb{A}^n, \mathcal{I}_X, 0)$，
记 $\eta_X \in \mathbb{A}^n$ 为 $X$ 的[[普遍点]]。
由于 $\mathcal{I}_X$ 在 $\eta_X$ 处不是局部主理想，
因此必有某次沿着 $Z_k$ 爆破时有 $\eta_X \in Z_k$。
但由于该定理中的 $\Pi$ 在 $X$ 之外是同构，
故 $Z_k = \overline{\{ \eta_X \}}$，而不可更大。
又由定理陈述知 $Z_k$ 光滑，故 $Z_k \to X$ 就是所求的奇点消解。

更一般地，$X$ 可约的情况也可使用类似的过程处理。
最后，使用 @理想消解 中的函子性，
可以将仿射簇的奇点消解粘合成一般的有限型 $k$-概形上的奇点消解。
详见 [@Kollar2007, 3.36]。
:::

::: remark
上述定理中，关于光滑态射的函子性也蕴涵了[[代数空间]]的奇点消解性质
[@Kollar2007, 3.43]。
:::

## 参考文献

原始文献：

```bibliography
Hironaka1964I:
  type: article
  author: 'Hironaka, Heisuke'
  title: 'Resolution of singularities of an algebraic variety over a field of characteristic zero: I'
  volume: 79
  doi: 10.2307/1970486
  pages: 109–203
  journaltitle: Ann. Math.
  year: 1964
  zbmath: '0122.38603'
Hironaka1964II:
  type: article
  author: 'Hironaka, Heisuke'
  title: 'Resolution of singularities of an algebraic variety over a field of characteristic zero: II'
  volume: 79
  doi: 10.2307/1970547
  pages: 205–326
  journaltitle: Ann. Math.
  year: 1964
  zbmath: '1420.14031'
```

教科书：

```bibliography
Kollar2007:
  type: book
  author: 'Kollár, János'
  title: Lectures on resolution of singularities
  series: Ann. Math. Stud.
  number: 166
  publisher: Princeton University Press
  year: 2007
  doi: 10.1515/9781400827800
  zbmath: '1113.14013'
```

```terms
奇点消解:
  en: resolution of singularities
```
