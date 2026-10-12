---
title: 可表函子
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，**可表函子**是一类重要的[[函子]]，指形如
\[
h_x = \mathcal{C} (-, x) \colon
\mathcal{C}^\mathrm{op} \longrightarrow \mathsf{Set}
\]
的函子，其中 $\mathcal{C}$ 是[[范畴]]，$x \in \mathcal{C}$ 是[[对象]]，
$\mathsf{Set}$ 是[[集合范畴]]。

在[[广义对象]]的观点下，我们将 $\mathcal{C}^\mathrm{op} \to \mathsf{Set}$
的函子视为 $\mathcal{C}$ 中的广义对象，
此时，将对象 $x$ 视作广义对象，就是可表函子 $h_x$。
这就是 [[Yoneda 嵌入]]。
由于 [[Yoneda 引理]]，不同的对象 $x$ 对应的可表函子 $h_x$ 互不同构，
因此，我们确实可以将 $h_x$ 视为 $x$ 的替身。

## 定义

### 对普通范畴

::: definition [可表函子]
设 $\mathcal{C}$ 是[[范畴]]。

- 称[[函子]] $F \colon \mathcal{C}^\mathrm{op} \to \mathsf{Set}$
  为**可表函子**，如果存在对象 $x \in \mathcal{C}$，
  使得有[[自然同构]]
  \[
  F \simeq h_x = \mathcal{C} (-, x).
  \]
  此时称 $F$ 由对象 $x$ **表出**。

- 称[[函子]] $F \colon \mathcal{C} \to \mathsf{Set}$
  为**余可表函子**，如果存在对象 $x \in \mathcal{C}$，
  使得有[[自然同构]]
  \[
  F \simeq h^x = \mathcal{C} (x, -).
  \]
  此时称 $F$ 由对象 $x$ **余表出**。

:::

等价地说，$\mathcal{C}$ 上的余可表函子就是
$\mathcal{C}^\mathrm{op}$ 上的可表函子。
但在文献中，常常并不区分可表与余可表函子，并将二者都称为**可表函子**。

## 例子

- 对[[域]] $k$ 上的[[向量空间]]而言，
  将空间映到其[[对偶空间]]的[[反变函子]]是可表函子，
  由 $k$ 表出。

- [[遗忘函子]]常常是余可表函子。例如：

  - [[拓扑空间]]的遗忘函子 $\mathsf{Top} \to \mathsf{Set}$
    由[[单点空间]] $*$ 余表出。

  - [[群]]的遗忘函子 $\mathsf{Grp} \to \mathsf{Set}$
    由[[自由群]] $\mathbb{Z}$ 余表出。

  - [[环]]的遗忘函子 $\mathsf{Ring} \to \mathsf{Set}$
    由[[多项式环]] $\mathbb{Z} [x]$ 余表出。

- [[Brown 可表性定理]]说明，[[拓扑空间]]的[[普通上同调]] $H^n (-; R)$
  是可表函子，由 [[Eilenberg–Mac Lane 空间]] $K (R, n)$ 表出。

```terms
可表函子:
  en: representable functor
  fr: foncteur représentable :m
  de: darstellbarer Funktor :m
  ja: 表<ひょう>現<げん>可<か>能<のう>関<かん>手<しゅ>
```
