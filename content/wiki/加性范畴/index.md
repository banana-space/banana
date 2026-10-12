---
title: 加性范畴
aliases: [预加性范畴, 加性函子, 满加性子范畴]
categories: [同调代数]
navboxes: [范畴论]
---

**加性范畴**大体上指[[对象]]和[[映射]]都能做加法的范畴。

## 定义

::: definition [预加性范畴]
称 [[Abel 群]][[充实范畴]]为**预加性范畴**。
也就是说，预加性范畴是[[范畴]] $\mathcal{C}$，以及对任意 $c,d$
赋予的 $\mathcal{C}(c,d)$ 上的 Abel 群结构，满足[[复合]]
$$
\mathcal{C}(c,d)\times\mathcal{C}(d,e)\to\mathcal{C}(c,e)
$$
[[双线性]]。
:::

::: remark
有些资料要求预加性范畴具有[[零对象]]。
:::

::: example
不一定拥有[[零对象]]的预加性范畴是“[[胚化|环胚]]”：
环是仅含一个对象的预加性范畴。
:::

由定义，对 $c,d\in\mathcal{C}$，
$\mathcal{C}(c,0)=\mathcal{C}(0,d)=0$，即零群。因此，Abel 群
$\mathcal{C}(c,d)$ 的零元就是复合映射 $c\to0\to d$。
将其称为**零映射**，记作 $0$。

在预加性范畴中，有限积与有限余积[[自然同构]]，即如果其中一者存在，那么它自然地是另一者。
见 @iso 以及[[双积]]。

::: definition [加性范畴]
称具有有限[[双积]]的预加性范畴为**加性范畴**。也就是说，
如预加性范畴 $\mathcal{C}$ 具有[[零对象]]，且对任意 $c,d\in\mathcal{C}$，
都有[[积 (范畴论)|积]] $c\times d$ 和 [[余积]] $c\sqcup d$，就称 $\mathcal{C}$ 为加性范畴。
:::

预加性范畴之间可以定义保持结构的函子以及子范畴。

::: definition [加性函子]
预加性范畴之间的函子 $F\colon\mathcal{C}\to\mathcal{D}$
称为**加性函子**，指它是 Abel 群[[充实函子]]。
称一子范畴为**预加性子范畴**，指其本身预加性，且含入函子为加性函子。
称一子范畴为**加性子范畴**，指其本身加性，且含入函子为加性函子。
:::

加性函子保持有限双积，因此它也是加性范畴的保持结构的函子。

## 性质

对预加性范畴，其加性实则只需验证半边存在性：

::: proposition {@iso}
$\mathcal{C}$ 是预加性范畴。则 $\mathcal{C}$
中有限积与有限余积自然同构，即如果其中一者存在，
那么它自然地是另一者。
:::

::: proof
显然只需证零元和二元情形。实际上这基本上是范畴 $\mathsf{Ab}$
的性质以及 [[Yoneda 引理]]的推论。

先证零元情形。以 $*$ 记[[终对象]]，
要证它是[[始对象]]。这只需注意到 [[Yoneda 函子]] $h_*$
为常函子 $0$，从而对任意 $c\in\mathcal{C}$，
$$
\mathcal{C}(*,c)=\mathsf{Set}^\mathcal{C^
\mathrm{op}}(h_*,h_c)=0.
$$

再证二元情形。对 $c,d\in\mathcal{C}$，以 $c\times d$
记其积，要证它是余积。这只需注意到
$h_{c\times d}=h_c\times h_d=h_c\oplus h_d$，从而对任意
$e\in\mathcal{C}$，
$$
\mathcal{C}(c\times d,e)=\mathsf{Set}^\mathcal{C^
\mathrm{op}}(h_c\oplus h_d,h_e)=\mathsf{Set}^\mathcal{C^
\mathrm{op}}(h_c,h_e)\oplus\mathsf{Set}^\mathcal{C^
\mathrm{op}}(h_d,h_e)=\mathcal{C}(c,e)\oplus
\mathcal{C}(d,e).
$$
:::

从定义可以看出，预加性范畴是附加于范畴之上的结构（即 Abel
群充实范畴结构），而不是范畴本身的性质。奇妙的是，
一个范畴是不是加性范畴，就是其本身的性质，而不是附加结构了。

::: proposition
范畴 $\mathcal{C}$ 是加性范畴当且仅当：

- $\mathcal{C}$ 有[[零对象]] $0$。

  这样对 $c,d\in\mathcal{C}$，$\mathcal{C}(c,d)$
  中便有零映射 $0\colon c\to0\to d$，使之成为[[带点集合]]。

- 对任意 $c,d\in\mathcal{C}$，
  都有[[积 (范畴论)|积]] $c\times d$，
  [[余积]] $c\sqcup d$，且映射
  $$
  (\operatorname{id},0,0,\operatorname{id})\in
  \mathcal{C}(c,c)\times\mathcal{C}(c,d)\times
  \mathcal{C}(d,c)\times\mathcal{C}(d,d)=
  \mathcal{C}(c\sqcup d,c\times d)
  $$
  是同构。将 $c\sqcup d\cong c\times d$ 记作 $c\oplus d$。

  于是对 $f,g\in\mathcal{C}(c,d)$ 可定义 $f+g$ 为映射复合
  $$
  c \xrightarrow{(\operatorname{id},\operatorname{id})}
  c \times c \cong c \oplus c
  \xrightarrow{f\oplus g}
  d \oplus d \cong d \sqcup d
  \xrightarrow{(\operatorname{id},\operatorname{id})}
  d
  $$
  使 $\mathcal{C}(c,d)$ 成为交换[[幺半群]]。

- 以上交换幺半群都是群。

:::

所以加性范畴之间的函子 $F\colon\mathcal{C}\to\mathcal{D}$
只要保持零对象和直和，就是加性的。

```terms
预加性范畴:
  en: preadditive category
  fr: catégorie préadditive
加性范畴:
  en: additive category
  fr: catégorie additive
加性函子:
  en: additive functor
  fr: foncteur additif
```
