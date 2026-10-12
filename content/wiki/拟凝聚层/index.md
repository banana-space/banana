---
title: 拟凝聚层
categories: [层论]
navboxes: [层论]
---

在[[代数几何]]和[[复几何]]中，
**拟凝聚层**是[[凝聚层]]的推广，
也是[[向量丛]]的进一步推广。
大致说，凝聚层允许不同点处的纤维是不同维数的向量空间，
而拟凝聚层则允许这些向量空间是无穷维的。

在[[代数几何]]中，[[概形]]上的拟凝聚层有十分简洁的代数描述：
它在[[仿射开集]] $\operatorname{Spec} A$ 上由 $A$-[[模]]给出。

## 定义

### 对环化空间

拟凝聚层可以对一般的[[环化空间]]或[[环化意象]]定义。
在[[代数几何]]中，我们主要考虑[[概形]]；
在[[复几何]]中，主要考虑[[复流形]]或[[复解析空间]]。

::: definition [拟凝聚层]
设 $(X, \mathcal{O}_X)$ 是[[环化空间]]或[[环化意象]]，
$\mathcal{F}$ 是 $\mathcal{O}_X$-[[模层|模]]。
称 $\mathcal{F}$ 为**拟凝聚层**，如果以下条件成立：

- 存在 $X$ 的[[开覆盖]] $\mathscr{U}$，
  使得对每个 $U \in \mathscr{U}$ 存在[[集合]] $I, J$
  与 $\mathcal{O}_U$-模的[[正合列]]
  \[
  \mathcal{O}_U^{\oplus I} \to
  \mathcal{O}_U^{\oplus J} \to \mathcal{F}|_U \to 0,
  \]
  其中 $\mathcal{O}_U := \mathcal{O}_X|_U$。

:::

### 对概形

在[[概形]]上，拟凝聚层有一种简洁的代数描述。
我们首先定义[[仿射概形]]上的拟凝聚层。

::: definition [$\widetilde{M}$] {@tilde-M}
设 $A$ 是[[交换环]]，$M$ 是 $A$-[[模]]。
记 $X = \operatorname{Spec} A$。
定义 $\mathcal{O}_X$-[[模层|模]] $\widetilde{M}$ 如下：

- 对 $f \in A$，定义 $\widetilde{M} ( D (f) ) = M_f$
  为 $M$ 的[[局部化]]。
  这给出了 $X$ 的一组[[拓扑基上的预层]]。

- 可以验证该预层满足层公理，故给出了 $X$ 上的层 $\widetilde{M}$。

:::

对概形上其它种类的拓扑也有类似的定义。

概形上的拟凝聚层可以定义为局部看起来像是 $\widetilde{M}$ 的模层。

::: definition [拟凝聚层]
设 $X$ 是[[概形]]，$\mathcal{F}$ 是 $\mathcal{O}_X$-模。
称 $\mathcal{F}$ 为**拟凝聚层**，如果以下条件成立：

- 对任意 $x \in X$，存在含 $x$ 的仿射开集
  $\operatorname{Spec} A \simeq U \subset X$，
  及 $A$-模 $M$，使得 $\mathcal{F}|_U \simeq \widetilde{M}$。

:::

下面 @定理-A 说明，
拟凝聚层在任意仿射开集上的限制都形如 $\widetilde{M}$。

## 性质

拟凝聚层构成 Abel 范畴，且有较好的函子性。

::: proposition [拟凝聚层范畴]
在 [[Abel 层]]范畴 $\mathsf{Ab}(X)$ 中，
拟凝聚层对取[[核 (代数)|核]]、[[余核]]、[[扩张]]封闭。
由此拟凝聚层构成 [[Abel 范畴]]，称为**拟凝聚层范畴**，
记作 $\mathsf{QCoh}(X)$。
:::

::: proposition [拉回层]
设有[[环化空间]]（或[[环化意象]]）
间的态射 $f \colon (X, \mathcal{O}_X) \to (Y, \mathcal{O}_Y)$，
则拟凝聚层 $\mathcal{F} \in \mathsf{QCoh} (Y)$
沿 $f$ 的[[拉回层]] $f^*\mathcal{F}$ 也是拟凝聚层。
:::

::: proposition [前推层]
设有概形间的[[拟紧态射|拟紧]][[拟分离态射]] $f \colon X \to Y$，
则拟凝聚层 $\mathcal{F} \in \mathsf{QCoh} (X)$
沿 $f$ 的[[前推层]] $f_*\mathcal{F}$ 也是拟凝聚层。
事实上它[[导出前推层]]的每一阶上同调 $\mathbb{R}^i f_*\mathcal{F}$
都是拟凝聚层。
:::

仿射概形上的拟凝聚层有如下性质，
它们是一般的拟凝聚层 [[Čech 上同调]]计算的理论基础，
是复几何中 [[Henri Cartan]] 的[[定理 A]] 和[[定理 B]]
在代数几何中的类比。

::: proposition {@定理-A}
对[[平坦拓扑]]和 [[Zariski 拓扑]]之间任何一种拓扑，
仿射概形上的拟凝聚层必形如 @tilde-M 中 $\widetilde{M}$。
:::

::: proposition [Serre] {@定理-B}
对[[平坦拓扑]]和 [[Zariski 拓扑]]之间任何一种拓扑，
仿射概形上的拟凝聚层 $\widetilde{M}$ 的[[层上同调]]为
\[
H^i(\widetilde{M}) = \begin{cases}
  M & i=0 \\
  0 & i>0.
\end{cases}
\]
:::

## 例子

- 所有[[凝聚层]]都是拟凝聚层。

```terms
拟凝聚层:
  en: quasi-coherent sheaf
  de: quasikohärente Garbe
  fr: faisceau quasi-cohérent
  la: fascis quasi-cohaerens
```
