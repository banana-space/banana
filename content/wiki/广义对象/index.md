---
title: 广义对象
categories: [层论]
---

<problems>
- “层”“叠”各节需要扩充。
</problems>

**广义对象**是[[范畴论]]中的一个启发性的概念，
它解释了为什么我们需要某些抽象构造，例如[[层]]、[[叠]]、[[高阶叠]]、[[高阶意象]]等，
并赋予它们直观。

构造广义对象的一个原因如下。我们常常喜欢使用所有[[空间]]构成的[[范畴]]，
其中的空间是性质很好的[[空间]]。
一个典型的例子是[[微分几何]]中，[[光滑流形]]是最好的空间。
但很遗憾的事情是，光滑流形的性质太好，
以致很多有用的空间并不是光滑流形，
即使它们看起来具有某种意义上的“光滑结构”。
这些空间包括[[轨形]]、无穷维流形（例如某些具有光滑性的[[函数空间]]）、
[[Lie 群]]的[[分类空间]]等。
我们可以定义什么是光滑流形到这些空间的映射，
也有办法定义这些空间之间的映射，从而这些**广义光滑流形**也构成一个范畴。

## Yoneda 观点

[[Yoneda 引理]]告诉我们，
[[范畴]]中的[[对象]]由所有别的对象到它的[[态射]]所完全描述。
例如，对一个[[拓扑空间]] $X$ 而言，
如果对任何别的拓扑空间 $Y$，
都知道从 $Y$ 到 $X$ 的所有[[连续映射]]构成的集合 $\mathsf{Top} (Y, X)$ 是什么样，
那我们也就能知道 $X$ 是哪个拓扑空间。
换言之，我们可以用别的空间 $Y$ 来“探测”$X$ 的拓扑。

Yoneda 观点是指，对于范畴中的对象 $X$ 而言，
我们将 $X$ 等同于别的对象到它的态射的信息，我们暂且称为“探测信息”。
这样，一份合理的探测信息应该能确定范畴中的一个对象。
然而，有时这样的对象实际并不在原来的范畴中，见下例。

::: example
考虑[[光滑流形]]的范畴 $\mathsf{Mfd}$。
设 $G$ 为 [[Lie 群]]。
我们想要一个 $G$ 的[[分类空间]] $\mathrm{B} G$，
使得对任何光滑流形 $Y$，用它探测 $\mathrm{B} G$ 的结果应该是

$\text{``} \, \mathsf{Mfd} (Y, \mathrm{B} G) \, \text{''} =
\{$ $Y$ 上光滑 $G$-[[主丛]]的同构类 $\}$。

这样可以视为赋予了 $\mathrm{B} G$ 光滑结构，
上述集合就是 $Y$ 到 $\mathrm{B} G$ 所有光滑映射的集合。

对多数 $G$ 而言，这样的光滑流形 $\mathrm{B} G$ 并不存在。
在我们的观点下，$\mathrm{B} G$ 就是 $\mathsf{Mfd}$ 中的一个广义对象。
:::

在 Yoneda 观点下，
我们将合理的探测信息视为范畴中的广义对象，
这样就将更多有用的对象考虑进来。

## 层

## 叠

## 参考文献

```bibliography
nlab:
  type: online
  site: nLab
  title: motivation for sheaves, cohomology and higher stacks
  url: https://ncatlab.org/nlab/show/motivation+for+sheaves%2C+cohomology+and+higher+stacks
```

```terms
广义对象:
  en: generalised object
  fr: objet généralisé :m
  de: verallgemeinertes Objekt :n
  grc: γενικὸν ἀντικείμενον :n
  la: obiectum generalizatum :n
```
