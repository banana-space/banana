---
title: 'Weil $\zeta$ 函数'
aliases: [Weil zeta 函数, Hasse–Weil zeta 函数, Hasse-Weil zeta 函数]
categories: [特殊函数, 代数几何]
---

<problems>
- “例子”一节中椭圆曲线的例子尚未写完。
- “Weil 猜想”一节中，Riemann 猜想一项的 $|\alpha_{i,k}| = q^{-\frac{i}{2}}$ 似乎应为 $|\alpha_{i,k}| = q^{-\frac{k}{2}}$（指数应与多项式 $P_k$ 的下标一致）。
</problems>

**Weil $\zeta$ 函数**是对[[有限域]]上[[代数簇]]
定义的 $\mathbb{C}$ 上[[解析函数]]，
以记录有限域上代数簇有理点个数的信息（@def-zeta-fun）。
由于其无穷乘积形式（@prod-form）与
[[Riemann $\zeta$ 函数]]形式相似，
故得名 $\zeta$ 函数。它是 $\mathbb{Z}$ 上[[有限型态射|有限型]][[概形]]的
[[算术 $\zeta$ 函数]]的特殊情形。

Weil $\zeta$ 函数满足 [[Weil 猜想]]
（@Weil-conj）所陈述的性质。
人们在尝试证明这些性质的过程中发现了[[代数几何]]里的[[上同调理论]]，
并对其做了详尽的研究。

## 定义

::: definition {@def-zeta-fun}
对有限域 $\mathbb{F}_{q}$ 上代数簇 $X$，
其 **Weil $\zeta$ 函数**为：
\[
\zeta_X(s) = \exp\left( \sum_{m = 1}^{\infty}
\frac{N_m}{m} q^{-ms}
\right)，
\]
其中 $N_m$ 是 $X$ 的 $\mathbb{F}_{q^m}$-点的个数。

$\zeta_X(s)$ 在 $\Re(s) > n$ 上绝对收敛，
其中 $n$ 为 $X$ 的维数。
由下述 Weil 猜想所描述的性质，
其可解析延拓至 $\mathbb{C}$ 上的[[亚纯函数]]。
:::

## 性质

### 其它形式

::: proposition {@prod-form}
\[
\zeta_X(s)
= \prod_{x \in |X|} \frac{1}{1 - N(x)^{-s}},
\]
其中 $|X|$ 表示 $X$ 的闭点集，
$N(x)$ 表示点 $x$ 处[[剩余域]]的元素个数。
:::

### Weil 猜想

<see>[[Weil 猜想]]</see>

::: theorem {@Weil-conj}
Weil $\zeta$ 函数满足如下性质：

- （有理性）
  记 $T = q^{-s}$，$Z_X(T)=\zeta_X(q^{-s})$，则有
  \[
  Z_X(T) =
  \prod_{k = 0}^{2n} P_k(T)^{(-1)^{k+1}}.
  \]
  其中 $P_k(T)$ 均为整系数多项式，常数项为 $1$。

- （函数方程）
  如果 $X$ 是[[紧合]][[光滑]]簇，则
  \[
  \zeta_X(n-s) =
  \pm q^{\frac{n E}{2}-Es} \zeta_X(s),
  \]
  其中
  \[
  E =
  \sum_{k = 0}^{2n} (-1)^k \deg P_k \in \mathbb{Z}
  \]
  称为 $X$ 的**Euler 示性数**。

- （Riemann 猜想）
  如果 $X$ 是[[紧合]][[光滑]]簇，
  则多项式 $P_k$ 的根 $\alpha_{i,k}$ 满足
  $|\alpha_{i,k}| = q^{-\frac{i}{2}}$，
  其中 $\alpha_{i,k}$ 落在 $\mathbb{C}$ 中，
  $|\cdot|$ 表示 $\mathbb{C}$ 上通常的绝对值。

- （Betti 数）
  如果 $X$ [[紧合]][[光滑]]，
  且来自光滑复代数簇 $\mathcal{X}$ 的[[好约化]]，
  则 $\deg P_k$ 为 $\mathcal{X}$ 的第 $k$ 个
  [[Betti 数]]。

:::

## 例子

::: example
对射影空间 $X = \mathbb{P}^n$，
有 $N_m = 1 + q^m + \dots + q^{mn}$。
从而
\[
\zeta_X(s) = \prod_{k = 0}^n (1 - q^{k-s})^{-1}.
\]
:::

::: example
对椭圆曲线
:::

```terms
'Weil $\zeta$ 函数':
  en: 'Weil $\zeta$ function'
  de: 'Weil-$\zeta$-Funktion'
  fr: 'fonction $\zeta$ de Weil'
```
