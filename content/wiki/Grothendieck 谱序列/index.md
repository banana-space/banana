---
title: Grothendieck 谱序列
categories: [同调代数]
notices:
  - name: 问题
    items:
      - “定理陈述”一节中定理的证明尚未给出。
      - “例子”一节中谱序列的收敛目标 $H^p(X, \mathcal{F})$ 似乎应为 $H^{p+q}(X, \mathcal{F})$。
navboxes: [同调代数]
---

**Grothendieck 谱序列**是[[同调代数]]中的结论，
它将函子的复合的导出用由导出函子的复合构成的[[谱序列]]表示。

## 定理陈述

::: theorem [Grothendieck 谱序列]
设 $\mathcal{A}$、$\mathcal{B}$、$\mathcal{C}$
是 [[Abel 范畴]]，$G \colon \mathcal{A} \to \mathcal{B}$，
$F \colon \mathcal{B} \to \mathcal{C}$ 是[[左正合函子]]，
满足 $G$ 把[[内射对象]]打到 $F$-[[零调对象]]，则有谱序列
\[
E_2^{pq} = (R^p F) \circ (R^q G) \Rightarrow R^{p+q}(F \circ G)
\]
对偶地，对[[右正合函子]]，类似事实也成立。
:::

::: proof
:::

## 例子

::: example
对[[拓扑空间]]（一般地，[[景]]）$X, Y$ 和态射 $f \colon X \to Y$
在上述定理中取 $\mathcal{A} = \mathsf{Ab}(X)$，
$\mathcal{B} = \mathsf{Ab}(Y)$（即相应空间上的[[Abel 群]][[层]]），
$\mathcal{C} = \mathsf{Ab}$（即 Abel 群范畴），
$G = f_*$ 为[[推出层]]函子，$F = \Gamma_Y$ 为[[整体截面]]函子，
则 $F \circ G = \Gamma_X$。
由上述定理，对层 $\mathcal{F}$，有[[谱序列]]
\[
E_2^{pq} = H^p(Y, R^q f_*\mathcal{F}) \Rightarrow H^p(X, \mathcal{F}).
\]
当 $\mathcal{F}$ 取为群 $G$ 系数[[常值层]]，
$f$ 为 [[Serre 纤维化]]，即得到了 [[Serre 谱序列]]。
:::

```terms
Grothendieck 谱序列:
  en: Grothendieck spectral sequence
  de: Grothendieck-Spektralfolge
  fr: suite spectrale de Grothendieck
```
