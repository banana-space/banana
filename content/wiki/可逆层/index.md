---
title: 可逆层
categories: [层论]
navboxes: [层论]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**可逆层**是[[线丛]]在[[环化空间]]和[[环化意象]]中的类比，
是[[模层]]范畴的[[可逆对象]]。[[概形]]上的可逆层是[[代数几何]]的重要研究对象之一。

## 定义

::: definition
设 $(X,\mathcal{O}_X)$ 是[[环化空间]]或[[环化意象]]，
$\mathcal{L}$ 是 $\mathcal{O}_X$-模层。称 $\mathcal{L}$
为 **$X$ 上可逆层**，或称**可逆
$\mathcal{O}_X$-模层**，指的是存在 $\mathcal{O}_X$-模层
$\mathcal{M}$ 使得 $\mathcal{L}\otimes_{\mathcal{O}_X}
\mathcal{M}\cong\mathcal{O}_X$。称此 $\mathcal{M}$
为 $\mathcal{L}$ 的**逆**，记作 $\mathcal{L}^{-1}$。
:::

::: remark
容易发现可逆层同构类沿张量积构成交换群。这就是 [[Picard 群]]。
:::

## 性质

可逆层的逆可用[[内 $\operatorname{Hom}$ 函子]]写出。

::: proposition
设 $(X,\mathcal{O}_X)$ 是[[环化空间]]或[[环化意象]]，
$\mathcal{L}$ 是可逆 $\mathcal{O}_X$-模层，则
$\mathcal{L}^{-1}=\operatorname{\underline{Hom}}
_{\mathcal{O}_X}(\mathcal{L},\mathcal{O}_X)$。
:::

::: proof
注意 $\mathcal{L}\otimes\mathcal{L}^{-1}\cong
\mathcal{O}_X$ 给出同态
$\mathcal{L}^{-1}\to\operatorname{\underline{Hom}}
(\mathcal{L},\mathcal{O}_X)$；
又注意 $\operatorname{\underline{Hom}}(\mathcal{L},
\mathcal{O}_X)\to\operatorname{\underline{Hom}}
(\mathcal{L}\otimes\mathcal{L}^{-1},\mathcal{O}_X
\otimes\mathcal{L}^{-1})\cong\operatorname{\underline{Hom}}
(\mathcal{O}_X,\mathcal{L}^{-1})\cong\mathcal{L}^{-1}$
是反方向的同态；不难验证它俩互逆。事实上这是有内 $\operatorname{Hom}$
函子的[[对称幺半范畴]]中[[可逆对象]]的一般道理。
:::

::: corollary
$X$ 上局部同构于 $\mathcal{O}_X$ 的模层是可逆层。
:::

::: proof
设 $\mathcal{L}$ 是这样一个模层。考虑自然同态
$\mathcal{L}\otimes\operatorname{\underline{Hom}}
(\mathcal{L},\mathcal{O}_X)\to\mathcal{O}_X$。
由 $\mathcal{L}$ 局部同构于 $\mathcal{O}_X$，
张量积和 $\operatorname{\underline{Hom}}$ 都是局部的，
知该同态局部上是同构，所以就是同构。所以 $\mathcal{L}$
是可逆层。
:::

以上推论的逆命题一般不成立。比如考虑 $X$ 为单点的情形，
此时 $\mathcal{O}_X$ 相当于一个[[环]]，局部同构就是同构。
环的[[可逆模]]自然未必同构于环本身，环 $\mathbb{Z}[\sqrt{-5}]$
的理想 $(2,1+\sqrt{-5})$ 就是一例。不过它对局部环化空间成立。

::: theorem
设 $(X,\mathcal{O}_X)$ 是[[局部环化空间]]或[[局部环化意象]]，
$\mathcal{L}$ 是可逆 $\mathcal{O}_X$-模层，
则 $\mathcal{L}$ 局部同构于 $\mathcal{O}_X$。
:::

::: proof
观察同构 $\mathcal{L}\otimes\mathcal{L}^{-1}\cong
\mathcal{O}_X$。由模层张量积的定义，$X$ 有覆盖
$\{U_\alpha\}_{\alpha\in\mathrm{A}}$，满足对每个
$\alpha\in\mathrm{A}$，存在元素
$\ell_1,\ldots,\ell_n\in\mathcal{L}(U_\alpha)$，
$m_1,\ldots,m_n\in\mathcal{L}^{-1}(U_\alpha)$，
使得在上述同构下 $\sum_{i=1}^n\ell_i\otimes m_i=1$。
于是用 $\mathcal{O}_X$ 的局部性，加细
$\{U_\alpha\}_{\alpha\in\mathrm{A}}$，可设其中某个
$\ell_i\otimes m_i$ 属于 $\mathcal{O}(U_\alpha)^\times$。
再作数乘可设覆盖 $\{U_\alpha\}_{\alpha\in\mathrm{A}}$
满足对每个 $\alpha\in\mathrm{A}$，存在元素
$\ell_\alpha\in\mathcal{L}(U_\alpha)$，
$m_\alpha\in\mathcal{L}^{-1}(U_\alpha)$，
使得 $\ell_\alpha\otimes m_\alpha=1$。这样 $\ell_\alpha$
和 $m_\alpha$ 就给出 $\mathcal{O}_{U_\alpha}$
和 $\mathcal{L}|_{U_\alpha}$ 之间的互逆同态，故
$\mathcal{L}$ 局部同构于 $\mathcal{O}_X$。
:::

::: remark
以上证明其实就是把[[局部环]] $A$ 上[[可逆模]]都同构于 $A$
这件事的证明在[[意象]]的[[内生逻辑]]中写出。
:::

::: proposition
可逆层的拉回仍是可逆层。具体地说，如 $f\colon X\to Y$
是环化空间或环化意象的态射，$\mathcal{L}$ 是可逆
$\mathcal{O}_Y$-模，则 $f^*\mathcal{L}=f^{-1}\mathcal{L}
\otimes_{f^{-1}\mathcal{O}_Y}\mathcal{O}_X$
是可逆 $\mathcal{O}_X$-模，其逆为 $f^*(\mathcal{L}^{-1})$。
:::

::: proof
这是因为拉回保持张量积。
:::

## 例子

- 设 $X$ 是拓扑空间，$p\colon L\to X$ 是[[拓扑线丛]]。
  则截面层
  $$
  \mathcal{L}(U)=\{s\colon U\to p^{-1}(U)\mid
  p\circ s=\operatorname{id}\}
  $$
  是可逆 $\mathbb{R}_X$-模层，其中 $\mathbb{R}_X$ 指 $X$ 上实值连续函数层。

- 设 $X$ 是光滑流形，$p\colon L\to X$ 是[[光滑线丛]]。
  则截面层
  $$
  \mathcal{L}(U)=\{s\colon U\to p^{-1}(U)\mid
  p\circ s=\operatorname{id}\}
  $$
  是可逆 $C^\infty_X$-模层，其中 $C^\infty_X$ 指
  $X$ 上实值光滑函数层。

- 秩 $1$ [[局部系]]是常环层的可逆模层。

- 设 $A$ 是环，$M$ 是其[[可逆模]]。以 $\widetilde{M}$
  记 $M$ 对应的 $\operatorname{Spec}A$ 上[[拟凝聚层]]，
  则 $\widetilde{M}$ 是可逆层。由于 $\operatorname{Spec}A$
  上拟凝聚层范畴与 $A$-模范畴有保持张量积的范畴等价，
  而可逆层显然拟凝聚，所以 $\operatorname{Spec}A$
  上可逆层范畴与可逆 $A$-模范畴等价。

```terms
可逆层:
  en: invertible sheaf
  de: umkehrbare Garbe
  fr: faisceau inversible
  la: fascis inversibilis
```
