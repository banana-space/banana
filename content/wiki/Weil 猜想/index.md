---
title: Weil 猜想
categories: [代数几何]
---

<problems>
- “背景和历史”“Deligne 对 Riemann 猜想的证明”各节需要扩充。
- “陈述”一节中 Riemann 猜想的部分写作 $|\alpha_{i,k}| = q^{-\frac{i}{2}}$，指数似乎应为 $-\frac{k}{2}$。
- 本条目中 $\alpha$ 有时指多项式的根（模长 $q^{-k/2}$），有时在 $Z_X(T)$、$N_m$ 等公式中却作为根的倒数出现（如函数方程中的 $\frac{q^{n}}{\alpha_{1,2n-k}}$、椭圆曲线例子中的 $Z_X(T)$ 与 $N_m$），记号似乎前后不一致。
</problems>

::: convention
在本文中，

- $\mathbb{F}_{q}$ 表示 $q$ 元有限域，$\mathbb{F}$ 是选定的代数闭包。

:::

**Weil 猜想** 是 André Weil 在 [@weil49] 中作出关于 $\mathbb{F}_{q}$
上[[代数簇]]零点生成函数的假设，
Weil 猜测光滑簇上的这类 [[Weil zeta 函数|$\zeta$]] 函数是有理函数，满足特定的函数方程，
并且零点落在特定的直线上。

## 背景和历史

## 陈述

::: definition {@def-zeta-fun}
对有限域 $\mathbb{F}_{q}$ 上代数簇 $X$，
其 **Weil $\zeta$ 函数**为：
\[
\zeta_X(s) = \exp\left( \sum_{m = 1}^{\infty}
\frac{N_m}{m} q^{-ms}
\right)，
\]
其中 $N_m$ 是 $X$ 的 $\mathbb{F}_{q^m}$-点的个数。
:::

假设 $X$ 是 $\mathbb{F}_{q}$ 上的 $n$-维[[紧合]][[光滑]]簇，Weil 猜测：

::: theorem
- （有理性）
  $\zeta_{X}(s)$ 是关于 $T = q^{-s}$ 的有理函数，
  令 $Z_X(T)=\zeta_X(q^{-s})$，则有
  \[
  Z_X(T) =
  \prod_{k = 0}^{2n} P_k(T)^{(-1)^{k+1}}.
  \]
  其中 $P_k(T)$ 均为整系数多项式，常数项为 $1$。
  特别地，有 $P_0(T)=1-T$，$P_{2n}(T)=1-q^{n}T$。
  记多项式 $P_k$ 的根为 $\alpha_{i,k}$。

- （函数方程）$\zeta$ 函数满足关系
  \[
  \zeta_X(n-s) =
  \pm q^{\frac{n E}{2}-Es} \zeta_X(s),
  \]
  等价地，有
  \[
  Z_{X}(q^{-n}T^{-1})=\pm q^{\frac{nE}{2}}T^{E}Z_{X}(T).
  \]
  特别地，对每个 $k$，
  $\alpha_{1,k},\alpha_{2,k},\cdots$ 和
  $\frac{q^{n}}{\alpha_{1,2n-k}},\frac{q^{n}}{\alpha_{2,2n-k}},\cdots$
  在不计顺序下相同。
  其中
  \[
  E =
  \sum_{k = 0}^{2n} (-1)^k \deg P_k \in \mathbb{Z}
  \]
  称为 $X$ 的**Euler 示性数**。

- （Riemann 猜想）
  $P_{k}$ 的根满足
  $|\alpha_{i,k}| = q^{-\frac{i}{2}}$，
  其中 $\alpha_{i,k}$ 落在 $\mathbb{C}$ 中，
  $|\cdot|$ 表示 $\mathbb{C}$ 上通常的绝对值。

- （Betti 数）
  如果 $X$ 来自光滑复代数簇 $\mathcal{X}$ 的[[好约化]]，
  则 $\deg P_k$ 为 $\mathcal{X}$ 的第 $k$ 个
  [[Betti 数]]。

:::

## 例子

::: example
$X=\mathbb{P}^{n}$ 是 $n$ 维[[射影空间]]，
有 $N_{m}=1+q^{m}+q^{2m}+\cdots +q^{nm}$。从而
\[
\zeta_{X}(s)=Z_X(T)=\frac{1}{(1-T)(1-qT)\cdots (1-q^{n}T)},
\]
有 $P_{2k}$ 的根模长为 $q^{-k}$。对于[[复射影空间]] $\mathbb{CP}^n$，
我们有 $b_{2i}=1=\deg P_{2k}$。
:::

一个非平凡的例子是[[椭圆曲线]]。

::: example
$X$ 是 $\mathbb{F}_{q}$ 上椭圆曲线，此时 $n=1=\dim X$。
令 $a_q=1-N_1+q$，则 $1-a_qT+qT^2=0$ 有两个共轭复根 $\alpha,\beta$，
由 [[Vieta 定理]] $\alpha\beta=q^{-1}$，
因此 $|\alpha|=|\beta|=q^{-\frac{1}{2}}$。
由 [[Lefschetz 不动点定理]]
\[
N_{m}=1-\alpha^{m}-\beta^{m}+q^{m}.
\]
此时
\[
Z_{X}(T)=\frac{(1-\alpha T)(1-\beta T)}{(1-T)(1-qT)}.
\]
椭圆曲线可以视作复环面的约化，
而复环面 $\mathbb{C}/\Lambda$ 的 Betti 数分别为 $1,2,1$。
:::

## 证明

### Grothendieck 的证明

1964 年 [[Alexandre Grothendieck|Grothendieck]]、
[[Michael Artin]] 和 [[Jean-Louis Verdier]]（以及 Dwork 1960年的工作）证明了除去 Riemann 猜想的部分。

::: theorem
设 $\bar{X}=(X)_{\operatorname{F}}$，
$\bar{X}$ 上有[[Frobenius 态射|几何 Frobenius 态射]] $\mathrm{Frob}$ 的作用，
则有
\[
Z_{X}(T)=\prod_{k=0}^{2n}\det(1-T\operatorname{Frob}|H^{k}(\bar{X},\mathbb{Q}_{\ell}))^{(-1)^{k+1}},
\]
其中 $H^{k}(\bar{X},\mathbb{Q}_{\ell})$ 是[[平展上同调|平展上同调群]]。
:::

有下面命题就能得到 $Z_{X}(T)$ 的有理性，

::: proposition
$K/k$ 是域扩张，有 $K(t)\cap k[[t]]=k(t)$。
:::

$\zeta$ 函数的函数方程和 Betti 数分别来源于 [[Poincaré 对偶]]和[[比较定理]]。

### Deligne 对 Riemann 猜想的证明

## 应用

- Deligne 在 [@deligne71] 中证明了 Weil 猜想蕴含了 [[Ramanujan-Petersson 猜想|Ramanujan–Petersson 猜想]]。

- $X$ 为 $\mathbb{F}_{q}$ 上[[亏格]] $g$ 的代数曲线，
  则有
  \[
  |N_1-1-q|\leq 2g\sqrt{q},
  \]
  这也称为 [[Hasse 界|Hasse–Weil 界]]。

## 参考文献

```bibliography
deligne71:
  type: incollection
  label: Del71
  author: Deligne, P.
  year: 1971
  title: Formes modulaires et représentations l-adiques
  booktitle: Séminaire Bourbaki, vol. 1968/69
  series: Lecture Notes in Mathematics
  volume: 179
  publisher: Springer-Verlag
  location: Berlin, New York
deligne74:
  type: article
  label: Del74
  author: Deligne, P.
  year: 1974
  title: La conjecture de Weil. I
  journaltitle: Publications Mathématiques de l'IHÉS
dwork60:
  type: article
  label: Dwo60
  author: Dwork, B.
  year: 1960
  title: On the rationality of the zeta function of an algebraic variety
  journaltitle: American Journal of Mathematics
grothendieck60:
  type: incollection
  label: Gro60
  author: Grothendieck, A.
  year: 1960
  title: The cohomology theory of abstract algebraic varieties
  booktitle: Proceedings of the International Congress of Mathematicians 1958
  publisher: Cambridge University Press
grothendieck65:
  type: incollection
  label: Gro65
  author: Grothendieck, A.
  year: 1965
  title: Formule de Lefschetz et rationalité des fonctions L
  booktitle: Séminaire Bourbaki
  publisher: Société Mathématique de France
  location: Paris
weil49:
  type: article
  label: Wei49
  author: Weil, A.
  year: 1949
  title: Numbers of solutions of equations in finite fields
  journaltitle: Bulletin of the American Mathematical Society
```

```terms
Weil 猜想:
  en: Weil conjectures
  fr: Conjectures de Weil
```
