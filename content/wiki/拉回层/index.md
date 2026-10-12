---
title: 拉回层
categories: [层论]
notices:
  - name: 消歧义
    see:
      - topic: '其[[导出函子]]'
        page: 导出拉回层
navboxes: [层论]
---

**拉回层**是[[层论]]中的一种构造。
对[[拓扑空间]]的[[连续映射]] $f \colon X \to Y$，
以及 $Y$ 上的[[层]] $\mathcal{F}$，
能得到 $X$ 上的层 $f^{-1} (\mathcal{F})$，
即 $\mathcal{F}$ 沿 $f$ 的拉回层。
大致而言，该层在每个点 $x \in X$ 的[[茎]]就是 $\mathcal{F}$ 在 $f (x) \in Y$ 的茎，
故拉回层也就是将每个茎沿 $f$ 拉回到 $X$ 上。
拉回层的概念也可以推广到一般的[[景]]和[[意象]]上。

对[[环化空间]]之间的映射 $f \colon X \to Y$ 和 $Y$ 上的[[模层]] $\mathcal{F}$ 而言，
还有另一种拉回层，记为 $f^* (\mathcal{F})$，
它与 $f^{-1} (\mathcal{F})$ 类似，但不完全相同。
这种拉回层可以视为[[拉回向量丛]]的类比和推广。
例如，在[[代数几何]]中，将[[代数向量丛]]等同于其[[截面]]构成的模层，
则该模层的拉回层就对应了向量丛的拉回。
从交换代数的角度来看，
对[[仿射概形]]之间的态射
$\operatorname{Spec}(B) \to \operatorname{Spec}(A)$，
拉回层对应于模的[[系数扩张]]，
即由 $A$-模 $M$ 得到 $B$-模 $B \otimes_A M$。

拉回层[[函子]]是[[前推层]]函子的[[左伴随]]。
这一点对于上述两种拉回层均成立，
其中 $f^{-1}$ 视为层范畴间的函子，
而 $f^*$ 视为模层范畴间的函子。
拉回层也是[[六函子体系]]的一部分。

## 定义

### 对普通层

::: definition [拉回层] {@拓扑拉回}
设 $X, Y$ 是[[拓扑空间]]，
$f \colon X \to Y$ 是[[连续映射]]。
设 $\mathcal{C}$ 是[[余完备范畴]]且具有[[等子]]，
$\mathcal{F}$ 是 $Y$ 上取值于 $\mathcal{C}$ 的层。
则 $\mathcal{F}$ 沿 $f$ 的**拉回层**是 $X$ 上取值于 $\mathcal{C}$ 的层
$f^{-1} (\mathcal{F})$，定义为 $X$ 上[[预层]]
\[
U \longmapsto
\operatornamewithlimits{colim}_{ \substack{
  \text{开集 } V \subseteq Y \\
  \text{满足 } U \subseteq f^{-1}(V)
} } \mathcal{F} (V)
\]
的[[层化]]。
这里，$U$ 是 $X$ 中[[开集]]，
而[[余极限]]是对 $Y$ 中所有满足 $U \subseteq f^{-1} (V)$ 的开集 $V$ 而取的，
这一条件也等价于 $f (U) \subseteq V$。
:::

例如，上述范畴 $\mathcal{C}$ 可取为[[集合范畴]]、[[Abel 群范畴]]等。

这一概念也可以推广到[[景]]上。

::: definition [拉回层] {@景拉回}
设 $\mathcal{X}, \mathcal{Y}$ 是[[景]]，
$f \colon \mathcal{X} \to \mathcal{Y}$ 是景的态射，
由[[函子]] $u \colon \mathcal{Y} \to \mathcal{X}$ 给出。
设 $\mathcal{C}$ 是[[余完备范畴]]且具有[[等子]]，
$\mathcal{F}$ 是 $\mathcal{Y}$ 上取值于 $\mathcal{C}$ 的[[层]]。
则**拉回层** $f^{-1} (\mathcal{F})$ 是 $\mathcal{X}$ 上[[预层]]
\[
U \longmapsto
\operatornamewithlimits{colim}_{ \substack{
  V \in \mathcal{Y} \\
  U \to u (V)
} } \mathcal{F} (V)
\]
的[[层化]]。
:::

当 $\mathcal{X}$、$\mathcal{Y}$
分别取为拓扑空间 $X$、$Y$ 对应的[[开集景]]时，
相应的函子 $f \colon \mathcal{Y} \to \mathcal{X}$
将开集 $V$ 映至它的原像 $f^{-1}(V)$。
因此 @景拉回 确实是 @拓扑拉回 的推广。

对于[[意象]]，拉回层则是意象间态射定义的一部分。

::: remark
在 @景拉回 中，会遇到以下技术问题：
定义中的[[余极限]]不一定是[[小范畴|小]]的。
因此，在这样定义拉回层时，需假设 $\mathcal{Y}$ 为[[本质小范畴]]，
或验证定义中所用到的余极限等价于某个小余极限，
抑或将 $\mathcal{C}$ 扩充到更大的 [[Grothendieck 宇宙]]中。
:::

### 对模层

::: definition [拉回层]
设 $(X, \mathcal{O}_X)$ 与 $(Y, \mathcal{O}_Y)$ 是[[环化空间]]，
$f \colon X \to Y$ 是[[连续映射]]，
$\mathcal{F}$ 是 $\mathcal{O}_Y$-[[模层]]。
则 $\mathcal{F}$ 沿 $f$ 的**拉回层**是 $\mathcal{O}_X$-模层
$f^* (\mathcal{F})$，定义为[[张量积层]]
\[
f^* (\mathcal{F}) =
f^{-1} (\mathcal{F}) \underset{f^{-1} (\mathcal{O}_Y)}{\otimes}
\mathcal{O}_X.
\]
:::

这里，注意到 $f^{-1} (\mathcal{F})$ 并不具备 $\mathcal{O}_X$-模层的结构，
但取张量积后则自然具有该结构。

模层的拉回同样可以对[[环化景]]之间的态射定义。

## 性质

### 基本性质与例子

以下设 $f\colon X \to Y$ 是拓扑空间之间的连续映射，
$\mathcal{F}$ 是 $Y$ 上的层。

- 作为[[层]]范畴之间的函子 $\mathsf{Sh}(Y) \to \mathsf{Sh}(X)$，
拉回层函子 $f^{-1} \colon \mathsf{Sh}(Y) \to \mathsf{Sh}(X)$ 是
前推层函子 $f_* \colon \mathsf{Sh}(X) \to \mathsf{Sh}(Y)$ 的左伴随。
这一命题对景之间的态射也成立。

- 如 $X$ 为[[单点空间]] $\{*\}$，
拉回层 $f^{-1}(\mathcal{F})$ 就是[[茎]] $\mathcal{F}_{f(*)}$。

- 如 $X$ 是 $Y$ 的[[开子空间]]，
拉回层 $f^{-1}(\mathcal{F})$
由 $U \mapsto \mathcal{F}(U \cap X)$ 给出。
且此时拉回层函子有左伴随函子，它是[[紧支前推层]]函子 $f_!$。

### 对拟凝聚层

以下设 $(X, \mathcal{O}_X) \to (Y, \mathcal{O}_Y)$
是[[环化空间]]或[[环化景]]间的态射，且拉回层均指作为模层的拉回。

- [[拟凝聚层]]的拉回也是拟凝聚层，
如果 $X$ 和 $Y$ 是 [[Noether 概形]]，[[凝聚层]]的拉回也是凝聚层。

- 如 $X$、$Y$ 分别为[[仿射概形]] $\operatorname{Spec}(B)$、
$\operatorname{Spec}(A)$，
$\mathcal{F}$ 为 $M$ 给出的拟凝聚层 $\widetilde{M}$，
则有 $f^{*}(\widetilde{M}) \simeq \widetilde{B \otimes_A M}$。

```terms
拉回层:
  en: inverse image sheaf
  fr: faisceau image réciproque :m
  de: Urbildgarbe :f
```
