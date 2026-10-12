---
title: Schwinger–Dyson 方程
aliases: [Schwinger-Dyson 方程]
categories: [量子场论]
notices:
  - name: 提示
    text: '本条目中的证明使用了[[路径积分]]，因此是半严格的。'
---

**Schwinger–Dyson 方程**是[[量子场论]]中的恒等式。
它是经典场论中场的[[运动方程]]的类比：在经典场论中场会满足
$D\phi = 0$ 的条件，其中 $D$ 是某个[[微分算子]]，
则 $D$ 作用在[[多点函数]]
$\langle \phi_1 \cdots \phi_n \rangle$ 上会得到含有
[[$\delta$ 函数]]的式子。

一些文献会把此处所给出的恒等式称为 **[[Ward 恒等式]]**，
但我们用这个名字称呼另一个恒等式（见该条目）。

## 陈述

::: theorem
设场 $\phi$ 的[[作用量]]为 $S[\phi]$，
$X$ 是与 $\phi$ 有关的式子（例如 $\phi(x_1)\cdots\phi(x_n)$），
则对时空中一点 $x$，有
\[
\langle \frac{\delta X}{\delta \phi(x)} \rangle
= \langle X\frac{\delta S(\phi)}{\delta \phi(x)} \rangle
\]
其中的导数是[[泛函导数]]。
:::

取定理中 $X = \phi(x_1) \cdots \phi(x_n)$，则左式等于
\[
\sum_{i = 1}^n \delta(x - x_i)
\langle \phi(x_1) \cdots \widehat{\phi(x_i)} \cdots \phi(x_n) \rangle
\]
而右式中 $\frac{\delta S(\phi)}{\delta \phi}$
即为经典[[运动方程]]中需要等于零的项。

::: proof
考虑 $\langle X \rangle$，它等于
\[
\langle X \rangle =
\frac{1}{Z} \int [d\phi] X \mathrm{e}^{- S(\phi)}
\]
其中 $Z$ 为[[真空泛函]]。
假设在变换 $\phi \to \epsilon + \phi$（一个平移）之下测度
$[d\phi]$ 不变，则换元得在一阶近似下
\[
0 = \frac{1}{Z} \int [d\phi] \int dx
\left( \frac{\delta X}{\delta \phi(x)}
-X \frac{\delta S(\phi)}{\delta \phi(x)} \right) \epsilon(x)
\mathrm{e}^{-S(\phi)}
\]
由于 $\epsilon$ 的选取任意，可知
\[
0 = \frac{1}{Z} \int [d\phi] \left( \frac{\delta X}{\delta \phi(x)}
-X \frac{\delta S(\phi)}{\delta \phi(x)} \right)
\mathrm{e}^{-S[\phi]}
\]
定理即证。
:::

::: remark
物理书中给出的方程可能与此处差一个 $\mathrm{i}$ 系数，
这是因为对作用量的约定不同。
:::

## 例子

::: example
考虑 [[Klein–Gordon 场]]，[[作用量]]密度（前面的系数不是很重要）
\[
\mathcal{L} = - \frac{\mathrm{i}}{2}
\left(
- m^2 \varphi^2 + (\partial_\mu \varphi)(\partial^\mu \varphi)
\right)
\]
取 $X = \phi(y)$ 代入方程可得
\[
\delta(x - y) =
\mathrm{i} (\square^2 + m^2) \langle \phi(x)\phi(y) \rangle
\]
:::

```terms
Schwinger–Dyson 方程:
  en: Schwinger–Dyson equation
  de: Schwinger–Dyson-Gleichung
  fr: équation de Schwinger–Dyson
```
