---
title: Ken Brown 引理
categories: [范畴论, 同伦论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**Ken Brown 引理**是处理[[带余纤维化的范畴]]及其[[局部化 (范畴论)|局部化]]的常用引理，
名称来自数学家 [[Kenneth Brown]]。

## 陈述与证明

Ken Brown 引理的常见现代形式如下：

::: theorem {@ken-brown}
设 $\mathcal{C}$ 是[[范畴]]，
$\operatorname{cof}\mathcal{C}$ 和 $W$ 是 $\mathcal{C}$ 的[[宽子范畴]]，
其中映射分别称为 **[[余纤维化]]** 和 **[[弱等价]]**，分别记作
$\rightarrowtail$ 和 $\xrightarrow{\sim}$，满足：

1. {@0} $\mathcal{C}$ 有[[始对象]]，记作 $\varnothing$，
   且对任意 $x\in\mathcal{C}$，$\varnothing\to x$
   是余纤维化。

2. {@pushout} 对任意余纤维化 $z\rightarrowtail x$
   以及任意态射 $z\to w$，[[推出]] $y=x\sqcup_zw$ 存在，
   且 $w\to y$ 也是余纤维化。简而言之，余纤维化对推出封闭。

3. {@3o2} 弱等价满足**三选二性质**：对 $\mathcal{C}$
   中态射 $f\colon x\to y$ 和 $g\colon y\to z$，
   如 $f$、$g$、$g\circ f$ 三者中有两者属于 $W$，
   则第三者也属于 $W$。

4. {@fact} $\mathcal{C}$ 中任意态射 $x\to y$
   均可分解为余纤维化 $x\rightarrowtail y'$ 复合弱等价
   $y'\xrightarrow{\sim}y$。

把既是余纤维化又是弱等价的态射称为**平凡余纤维化**，
构成的宽子范畴记作 $\operatorname{cof} W$。则自然的函子
$\mathcal{C}[(\operatorname{cof} W)^{-1}]\to\mathcal{C}[W^{-1}]$
是[[范畴等价]]。
:::

::: proof
任取弱等价 $f\colon x\xrightarrow{\sim}y$，
我们需要证明它在 $\mathcal{C}[(\operatorname{cof} W)^{-1}]$
中已经是同构。考虑映射
$$
(f,\operatorname{id}_y)\colon x\sqcup y\to y,
$$
用[条件 4](@fact) 把它分解为 $x\sqcup y\rightarrowtail
z\xrightarrow{\sim}y$。由[条件 1](@0)、[条件 2](@pushout)，
复合映射 $x\rightarrowtail x\sqcup y\rightarrowtail z$
与 $y\rightarrowtail x\sqcup y\rightarrowtail z$
都是余纤维化；由[条件 3](@3o2)，它们都是弱等价；
故它们都是平凡余纤维化，在 $\mathcal{C}[(\operatorname{cof} W)^{-1}]$
中都是同构。由于 $z\xrightarrow{\sim}y$ 是
$y\rightarrowtail z$ 的左逆，而 $f$ 是
$x\rightarrowtail z$ 复合 $z\xrightarrow{\sim}y$，
所以 $f$ 在 $\mathcal{C}[(\operatorname{cof} W)^{-1}]$
中也是同构。
:::

## 推论

记号和条件承 @ken-brown。

::: proposition {@cof-sq}
设
\[
\begin{tikzcd}
  z\ar[r,"i",tail]\ar[d,"g"']&x\ar[d,"f"]\\
  w\ar[r,"j"',tail]&y
\end{tikzcd}
\]
是如[条件 2](@pushout) 所述的推出方块。
则它在 $\mathcal{C}[W^{-1}]$ 中仍是推出方块。
:::

由 @cof-sq 和[条件 4](@fact) 立得如下推论：

::: corollary
$\mathcal{C}[W^{-1}]$ 有任意有限[[余极限]]。
:::

```terms
Ken Brown 引理:
  en: Ken Brown's lemma
```
