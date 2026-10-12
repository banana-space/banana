---
title: 迹类态射
categories: [范畴论]
navboxes: [范畴论]
---

**迹类态射**是[[幺半范畴]]中一类[[态射]]，
是[[泛函分析]]中[[迹类算子]]的范畴论类比。

## 定义

::: definition {@def}
设 $\mathcal{C}$ 是[[幺半范畴]]，$f\colon X\to Y$
是其中[[态射]]。称 $f$ 为

- **左迹类**，指存在 $Z\in\mathcal{C}$、
  $\alpha\colon\mathbb{1}\to Z\otimes Y$、
  $\beta\colon X\otimes Z\to\mathbb{1}$，
  $$
  f=(\beta\otimes Y)\circ(X\otimes\alpha).
  $$

- **右迹类**，指存在 $Z\in\mathcal{C}$、
  $\alpha\colon\mathbb{1}\to Y\otimes Z$、
  $\beta\colon Z\otimes X\to\mathbb{1}$，
  $$
  f=(Y\otimes\beta)\circ(\alpha\otimes X).
  $$

如 $\mathcal{C}$ 是[[对称幺半范畴]]，则以上两个概念一样，
称为**迹类**。
:::

::: definition [迹类态射生象]
在[[高阶范畴论]]中，迹类态射不是态射的性质，而是额外数据。
具体地说，设 $\mathcal{C}$ 是[[幺半 $(\infty,1)$-范畴]]，
$X,Y\in\mathcal{C}$，则 $X$ 到 $Y$
的迹类态射组成的[[生象]]定义为
$$
\operatorname{Hom}^{迹}(X,Y):=\operatornamewithlimits{colim}_{(Z,\alpha,\beta)}*;
$$
这里指标范畴为 @def 中的数据构成的范畴，
比如对左迹类映射就是
$\mathcal{C}_{\mathbb{1}/(-\otimes Y),\,(X\otimes-)/\mathbb{1}}$；
$*$ 指单点生象，而对单点生象取余极限就是取指标范畴的几何实现，
也就是把指标范畴所有映射逆掉得到的生象。于是
$$
(Z,\alpha,\beta)\mapsto(\beta\otimes Y)\circ(X\otimes\alpha)
$$
给出生象态射 $\operatorname{Hom}^{左迹}(X,Y)\to\operatorname{Hom}(X,Y)$，
右边类似；说“迹类态射不是态射的性质”
就是说这个生象态射一般情况下不是 $(-1)$-截断的。

当 $\mathcal{C}$
是[[左闭幺半 $(\infty,1)$-范畴]]，即 $X\otimes-$
有[[右伴随]] $\operatorname{\underline{Hom}}^左(X,-)$ 时，不难发现
$$
\operatorname{Hom}^{左迹}(X,Y)=\operatorname{Hom}(\mathbb{1},\operatorname{\underline{Hom}}^左(X,\mathbb{1})\otimes Y);
$$
同样当 $\mathcal{C}$ 右闭时
$$
\operatorname{Hom}^{右迹}(X,Y)=\operatorname{Hom}(\mathbb{1},Y\otimes\operatorname{\underline{Hom}}^右(X,\mathbb{1})).
$$
:::

## 性质

本节中，$\mathcal{C}$ 是幺半范畴（或幺半 $(\infty,1)$-范畴），
迹类指左迹类。右迹类情形道理相同。

::: proposition {@理想}
设 $f\colon X\to Y$、$g\colon X'\to X$、$h\colon Y\to Y'$
是 $\mathcal{C}$ 中态射。如 $f$ 迹类，则
$h\circ f\circ g$ 迹类。
:::

::: proof
设 $Z\in\mathcal{C}$、$\alpha\colon\mathbb{1}\to Z\otimes Y$、
$\beta\colon X\otimes Z\to\mathbb{1}$ 满足
$$
f=(\beta\otimes Y)\circ(X\otimes\alpha),
$$
则 $\alpha'=(Z\otimes h)\circ\alpha\colon
  \mathbb{1}\to Z\otimes Y'$、$\beta'=
  \beta\circ(g\otimes Z)\colon X'\otimes Z\to\mathbb{1}$ 满足
$$
h\circ f\circ g=
(\beta'\otimes Y')\circ(X'\otimes\alpha').
$$
:::

::: remark
由证明可以发现，@理想 可以推广到高阶。
:::

```terms
迹类态射:
  en: trace-class morphism
```
