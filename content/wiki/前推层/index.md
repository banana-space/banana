---
title: 前推层
aliases: [推出层]
categories: [层论]
navboxes: [层论]
---

<disambiguation>
关于其[[导出函子]]，请参见[[导出前推层]]。
</disambiguation>

**前推层**是[[层论]]中的一种构造。
对[[拓扑空间]]的[[连续映射]] $f \colon X \to Y$，
以及 $X$ 上的[[层]] $\mathcal{F}$，
能得到 $Y$ 上的层 $f_* (\mathcal{F})$，
即 $\mathcal{F}$ 沿 $f$ 的前推层。
该层在[[开集]] $U \subseteq Y$ 上的[[截面]]就定义为
$\mathcal{F}$ 在 $f^{-1} (U) \subseteq X$ 上的截面。

例如，当 $Y$ 为[[单点空间]]时，
沿映射 $X \to *$ 的前推层也就是取原来层的[[整体截面]]。
因此，一般来说，前推层也可以视为整体截面函子的[[相对观点|相对]]版本。
也就是说，对 $y \in Y$，考虑[[纤维]] $X_y = f^{-1} (y)$，
并将 $X$ 视为这些 $X_y$ 拼起来的空间，
则非常粗略地说，前推层可以视为在每个 $X_y$ 上取
$\mathcal{F}$ 的整体截面空间 $H^0 (X_y, \mathcal{F}|_{X_y})$，
再将这些空间拼成 $Y$ 上的层。
相应地，[[导出前推层]]则是“导出整体截面”（即[[层上同调]]）的相对版本。

前推层[[函子]]是[[拉回层]]函子的[[右伴随]]，
也是[[六函子理论]]的一部分。

## 定义

### 对普通层

::: definition
设 $X, Y$ 是[[拓扑空间]]，
$f \colon X \to Y$ 是[[连续映射]]。
设 $\mathcal{C}$ 是[[余完备范畴]]，
$\mathcal{F}$ 是 $X$ 上取值于 $\mathcal{C}$ 的[[层]]。
则 $\mathcal{F}$ 沿 $f$ 的**前推层**是 $Y$ 上取值于 $\mathcal{C}$ 的层
$f_* (\mathcal{F})$，定义为
\[
f_* (\mathcal{F}) (U) =
\mathcal{F} (f^{-1} (U)),
\]
其中 $U \subseteq Y$ 为任何[[开集]]。
:::

这一概念也可以推广到[[景]]上。

::: definition
设 $\mathcal{X}, \mathcal{Y}$ 是[[景]]，
$f \colon \mathcal{X} \to \mathcal{Y}$ 是由[[景|连续函子]]
$u \colon \mathcal{Y} \to \mathcal{X}$ 决定的景的态射。
设 $\mathcal{C}$ 是[[余完备范畴]]，
$\mathcal{F}$ 是 $\mathcal{X}$ 上取值于 $\mathcal{C}$ 的[[层]]。
则 $\mathcal{F}$ 沿 $f$ 的**前推层**是 $\mathcal{Y}$ 上取值于 $\mathcal{C}$ 的层
$f_* (\mathcal{F})$，定义为
\[
f_* (\mathcal{F}) (U) = \mathcal{F} (u(U)).
\]
:::

前推层也是[[意象]]间态射定义的一部分，这是上述定义的推广：
并非所有意象间态射都来自[[景]]间的连续函子。

### 对模层

::: definition
设 $(X, \mathcal{O}_X)$ 与 $(Y, \mathcal{O}_Y)$ 是[[环化空间]]，
$f \colon X \to Y$ 是[[连续映射]]，
$\mathcal{F}$ 是 $\mathcal{O}_X$-[[模层]]。
则前推层 $f_* (\mathcal{F})$ 自然地具有 $\mathcal{O}_Y$-模层的结构，
称为模层 $\mathcal{F}$ 沿 $f$ 的**前推层**。
:::

## 性质

记号承上。

::: proposition
$f_*$ 有左伴随，为[[拉回层]]函子 $f^{-1}$。
:::

::: corollary
由于 $f^{-1}$ 正合，$f_{\ast}$ 保持[[内射对象]]。
:::

::: proposition [前推层的茎]
设 $f\colon X\to Y$ 是拓扑空间的连续映射。则有自然态射
$(f_*\mathcal{F})_{f(x)} \to \mathcal{F}_x$，且满足：

1. 如果 $y \notin \overline{f(X)}$，则 $(f_*\mathcal{F})_{y} = 0$。

2. 如果 $f$ 是拓扑嵌入，则
   $(f_{\ast}\mathcal{F})_{f(x)}=\mathcal{F}_{x}$，对任意 $x\in X$。

:::

## 例子

- 如 $f\colon X\to*$ 是到[[单点空间]]的映射，则
  $f_{\ast}$ 是[[整体截面]]函子 $\Gamma(X,-)$。

```terms
前推层:
  en: direct image sheaf
  de: Bildgarbe :f
  fr: faisceau image directe :m
```
