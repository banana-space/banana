---
title: Serre 对偶
categories: [上同调论]
---

<problems>
- “代数几何情形”“复几何情形”各节需要扩充。
- “定理陈述”一节的推论中，Dolbeault 上同调完美配对的第二个因子 $H^{n-p, n-q} (X, \mathcal{E})$ 的系数似乎应为 $\mathcal{E}^\vee$。
</problems>

**[[Serre]] 对偶**是[[代数几何]]以及[[复几何]]中的定理，
描述[[紧合态射|紧合]][[光滑态射|光滑]][[代数簇]]或[[紧]]
[[Kähler 流形]]的一对上同调群之间的对偶关系。
复几何中的 Serre 对偶可以看作 [[Poincaré 对偶]]对[[全纯向量丛]]的类比，
从中也能得到 [[Dolbeault 上同调]]的关系（@Dolbeault）：
\[
H^{p, q} (X) \simeq H^{n-p, n-q} (X)^\vee.
\]

Serre 对偶可以推广至一般情形（例如对更一般的概形间映射），
且在许多范畴中也有类似于 Serre 对偶的现象，即 [[Serre 函子]]。

## 定理陈述

::: theorem [Serre 对偶，代数几何版本]
设 $X$ 是域 $\mathbb{k}$ 上
$n$ 维[[紧合态射|紧合]][[光滑态射|光滑]][[代数簇]]，
$\omega_X = \Omega_X^n$ 为 $n$ 阶[[微分形式]]层，
称为**对偶层**。则有自然同构
\[
\operatorname{tr}_X \colon H^n(X, \omega_X) \simeq \mathbb{k},
\]
称为**迹映射**。
设 $\mathcal{E}$ 为有限秩[[局部自由层]]，
有[[完美配对]]（$0 \leq k \leq n$）
\[
H^k(X, \mathcal{E}) \times
H^{n-k}(X, \mathcal{E}^\vee \otimes \omega_X)
\to H^n(X, \omega_X) \simeq \mathbb{k}.
\]
如使用导出范畴的语言，可以将命题等价地陈述为：
\[
R\Gamma(X, \mathcal{E}) \times
R\Gamma(X, \mathcal{E}^\vee \otimes \omega_X)[n]
\to \mathbb{k}
\]
是完美配对。
:::

在复几何中也有类似定理：

::: theorem [Serre 对偶，复几何版本] {@复几何}
设 $X$ 是复 $n$ 维[[紧]][[复流形]]，
$\omega_X = \Omega_X^n$ 为 $n$ 次[[全纯微分形式]]，
$\mathcal{E}$ 是 $X$ 上[[全纯向量丛]]，
则有完美配对
\[
H^k(X, \mathcal{E}) \times
H^{n-k}(X, \mathcal{E}^\vee \otimes \omega_X)
\to H^n(X, \omega_X) \simeq \mathbb{C}.
\]
这里最后一个映射由
\[
\frac{1}{(2\pi\mathrm{i})^n}\int_X
\colon \Omega_X^{n,n} \to \mathbb{C}
\]
与 [[Dolbeault 定理]]诱导。
:::

这里 $(2\pi\mathrm{i})^n$ 即是所谓的[[周期 (代数几何)|周期]]，
除以它是为了让代数几何版本与复几何版本在 [[GAGA]] 下相容。

特别地，这意味着[[紧空间|紧]][[复流形]]的 [[Dolbeault 上同调]]具有类似
[[Poincaré 对偶]]的性质：

::: corollary {@Dolbeault}
设 $X$ 是复 $n$ 维[[紧空间|紧]][[复流形]]，
$\mathcal{E}$ 是 $X$ 上[[全纯向量丛]]。
则有 [[Dolbeault 上同调]]的完美配对
\[
H^{p,q} (X, \mathcal{E}) \times
H^{n-p, n-q} (X, \mathcal{E}) \to \mathbb{C}.
\]
特别地，令 $\mathcal{E} = \mathcal{O}_X$，就得到完美配对
\[
H^{p,q} (X) \times
H^{n-p, n-q} (X) \to \mathbb{C}.
\]
:::

::: proof
由 [[Dolbeault 定理]]，
只需对 $\mathcal{E} \otimes \Omega^p$ 使用 @复几何 即可。
:::

## 证明

### 代数几何情形

### 复几何情形

## 推广

### 凝聚对偶

<see>[[凝聚对偶]]</see>

对一般的概形间映射也有类似的对偶关系。

::: theorem [凝聚对偶]
设 $f \colon X \to Y$ 是有限维 [[Noether 概形]]间的[[紧合态射]]，
存在函子 $f^!$，
满足
\[
Rf_*R\mathcal{Hom}_X(\mathcal{F}, f^!\mathcal{G})
\simeq R\mathcal{Hom}_Y(Rf_*\mathcal{F},\mathcal{G})
\]
对满足一定有限性条件的凝聚层构成的复形
$\mathcal{F}, \mathcal{G}$ 成立。
:::

特别地，当 $Y$ 为 $\operatorname{Spec}(k)$，
$X$ 为 $k$ 上光滑紧合代数簇时则化归至上述 Serre 对偶。

### Serre 函子

<see>[[Serre 函子]]</see>

在许多范畴中均有类似于 Serre 对偶的现象，
可总结为如下的 Serre 函子：

::: definition
设 $\mathcal{C}$ 是有限维 $k$-线性空间[[充实范畴]]，
函子 $S \colon \mathcal{C} \to \mathcal{C}$
称为 **Serre 函子**，
如它是[[范畴等价]]，且对任意的 $X, Y \in \mathcal{C}$，
有（函子性的）完美配对
\[
\mathcal{C}(X, Y) \times
\mathcal{C}(Y, SX) \to k.
\]
:::

例如，当 $X$ 为 $k$ 上紧合光滑簇时，
取 $\mathcal{C} = \mathcal{D}^b\mathsf{Coh}(X)$，
$S = (-) \otimes \omega_X[n]$ 则化为原来的 Serre 对偶。

```terms
Serre 对偶:
  en: Serre duality
  de: Serre-Dualität
  fr: dualité de Serre
```
