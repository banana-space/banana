---
title: 纯母题
categories: [母题论]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
navboxes: [母题论]
---

[[域]] $k$ 上的**纯母题**范畴 $M(k)$ 是一个[[伪 Abel 范畴]]，
每个[[射影态射|射影]][[光滑态射|光滑]]代数簇 $X$
均对应于范畴中的对象 $\mathfrak{h}(X)$，
称为其 **[[母题]]**，
而对象 $\mathfrak{h}(X)$ 与 $\mathfrak{h}(Y)$
的态射集则大致是代数簇 $X$、$Y$ 之间的[[对应 (代数几何)|对应]]。
与纯母题相对的概念是[[混母题]]范畴，
它包含了所有代数簇的母题。

母题范畴记录了所有上同调理论应当满足的[[相交论|相交理论]]性质，
因此可以视为某种“万有”上同调理论。
任意射影光滑代数簇上的 [[Weil 上同调]]理论 $H$
均能延拓至纯母题范畴，
这一过程也称为母题的实现。

纯母题范畴有[[刚性幺半范畴]]的结构，
因此通过[[代数–范畴对偶]]，其等价于某个群的表示范畴，
这一现象的研究称为[[母题 Galois 理论]]。
此理论是 [[Galois 理论]]的推广：
零维簇的母题生成的全子范畴等价于 Galois 群的表示范畴。

## 定义

::: definition [纯母题范畴]
固定基域 $k$ 和系数环 $A$，**纯母题范畴** $M_\sim(k)_A$
是如下[[预加性范畴]]的[[幂等完备化]]：

- 对象形如 $\mathfrak{h}(X)(r)$，
  其中 $X$ 是[[射影态射|射影]][[光滑态射|光滑]][[代数簇]]，
  $r$ 是整数。
  $\mathfrak{h}(X)(0)$ 简记为 $\mathfrak{h}(X)$，
  称为 $X$ 的 **[[母题]]**。

- $\mathfrak{h}(X)(r)$ 与 $\mathfrak{h}(Y)(r')$
  之间的态射为 $\mathcal{Z}^{\dim X+r'-r}(X\times Y)_A/\sim$。
  其中，$\mathcal{Z}^{\dim X+r'-r}(X\times Y)_A$ 表示
  $X\times Y$ 中 $\dim X+r'-r$ 余维[[代数圈]]的
  $A$-系数线性组合构成的模，
  $\sim$ 表示代数圈的某种[[适当等价]]，
  例如[[有理等价]]、[[代数等价]]、[[同调等价]]等。

- 态射的复合是[[对应 (代数几何)|对应]]的[[卷积]]：
  对 $X\times Y$ 与 $Y\times Z$ 中的代数圈 $U_1$、$U_2$，
  其复合为 $X\times Z$ 中的代数圈
  $p_{XZ*}(p_{XY}^*U_1\cap p_{YZ}^*U_2)$。

换言之，$M_\sim(k)_A$ 中的对象形如 $e\mathfrak{h}(X)(r)$，
其中 $e$ 为 $\mathcal{Z}^{\dim X}(X\times X)_A/\sim$
中的幂等元。
:::

可以看出，[[恒等态射]] $\mathrm{id}_X$ 就是 $X\times X$ 的对角线。

纯母题范畴可以赋予[[刚性幺半范畴]]的结构。

::: definition [刚性幺半范畴结构]
- 张量积为
  \[
  e\mathfrak{h}(X)(r)\otimes e'\mathfrak{h}(X')(r')
  = (e\times e')\mathfrak{h}(X\times X')(r+r').
  \]

- 单位元为单点空间的母题 $\mathfrak{h}(*)$，
  记为 $\mathbf{1}$。

- 对偶为
  \[
  (e\mathfrak{h}(X)(r))^\vee=e^t\mathfrak{h}(X)(d-r).
  \]
  其中 $d$ 为 $X$ 的维数，$t$ 表示 $X\times X$ 交换两个坐标位置。

:::

::: remark
由定义可以看出，张量 $\mathbf{1}(1)$
是[[范畴等价]]，这一过程称为 [[Tate 扭转]]。
:::

## 性质

## 例子

- 对[[射影直线]] $\mathbb{P}^1$，取其上一 $k$-点 $x$，
  则代数圈 $x\times \mathbb{P}^1\subset \mathbb{P}^1\times \mathbb{P}^1$
  是复合态射
  $\mathfrak{h}(\mathbb{P}^1)\to \mathbf{1}(-1)\to
  \mathfrak{h}(\mathbb{P}^1)$，
  而代数圈 $\mathbb{P}^1\times x\subset \mathbb{P}^1\times \mathbb{P}^1$
  是复合态射
  $\mathfrak{h}(\mathbb{P}^1)\to \mathbf{1}\to
  \mathfrak{h}(\mathbb{P}^1)$。
  由于在 $\mathbb{P}^1\times \mathbb{P}^1$ 中，有代数圈的等价
  $\Delta\sim x\times \mathbb{P}^1+\mathbb{P}^1\times x$
  （其中 $\Delta$ 为对角线），且这两个代数圈均是幂等元，
  有直和分解 $\mathfrak{h}(\mathbb{P}^1)\simeq \mathbf{1}\oplus \mathbf{1}(-1)$。

- 对射影空间 $\mathbb{P}^n$ 也有类似结论。
  由于在 $\mathbb{P}^n\times \mathbb{P}^n$ 中有对角线的分解
  \[
  \Delta \sim \sum_{i=0}^n \mathbb{P}^i\times \mathbb{P}^{n-i},
  \]
  由类似论证可知
  \[
  \mathfrak{h}(\mathbb{P}^n)=\bigoplus_{k=0}^n \mathbf{1}(-k).
  \]

- 以上两个事实反映了以下上同调理论中的事实：
  对 $0\leq i\leq n$ 与 $K$-系数 [[Weil 上同调]] $H$，
  $H^{2i}(\mathbb{P}^n) = K(-i)$。

```terms
纯母题:
  en: pure motive
  fr: motif pur :m
```
