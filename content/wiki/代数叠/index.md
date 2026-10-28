---
title: 代数叠
aliases: [Artin 叠]
categories: [叠论]
navboxes: [代数几何, 高阶几何]
---

<problems>
- “性质”一节需要扩充。
</problems>

**代数叠**（又称为 **Artin 叠**）是一种[[叠]]，
是在[[代数几何]]的意义下，带有几何结构的叠。

直观来说，代数叠是看起来像[[概形]]，但更一般的空间。
其与概形的主要区别在于，代数叠中的点可以有非平凡的[[自同构群]]。
例如，对[[代数群]] $G$，
其[[解环群胚]] $[*/G]$ 具有代数叠的结构，也称为 $G$-主丛的[[分类叠]]。
该叠只有一个点，但该点具有非平凡的自同构群 $G$。

代数叠是 [[Deligne–Mumford 叠]]的推广。
大致说，在代数叠中，点的自同构群可以是任何[[代数群]]，
但在 Deligne–Mumford 叠中，点的自同构群一定是离散的[[有限群]]。
而两者又都是[[代数空间]]的推广。
在代数空间中，不允许点具有非平凡的自同构群。

在[[高阶代数几何]]、[[导出代数几何]]中，代数叠可以推广为[[代数 $\infty$-叠]]、[[导出代数叠]]。

## 定义

设 $S$ 是[[概形]]，记 $\mathsf{Sch}_S$ 为 [[相对概形|$S$-概形]]的范畴。
选取下列几种 [[Grothendieck 拓扑]]之一，
以将 $\mathsf{Sch}_S$ 视为[[景]]：

- [[平展景|平展拓扑]]。
- [[平坦景|fppf 拓扑]]。
- [[平坦景|fpqc 拓扑]]。

我们称景 $\mathsf{Sch}_S$ 上的[[叠]]为“$S$-叠”。

当然，选取不同的拓扑将会得到不同的 $S$-叠的概念，
但最后定义出的代数叠的概念其实是相同的，见 [@LaumonMoretBailly, §9]。

::: definition [可表态射] {@可表态射}
称 $S$-叠的态射 $f \colon X \to Y$ 为 **[[可表态射]]**，
如果对任何 $S$-概形 $U$，及任何 $S$-叠的态射 $U \to Y$，
$S$-叠的纤维积 $U \times_Y X$ 都是 $S$ 上的[[代数空间]]。
:::

直观来说，我们把可表态射想成是[[纤维]]都是代数空间（而不是叠）的态射。

概形态射的某些性质，例如[[光滑态射|光滑]]等，
被[[拉回 (范畴论)|拉回]]保持。
这些性质可以自然推广到 $S$ 上[[代数空间]]的态射，
进而自然推广到 $S$-叠的可表态射：

::: definition [可表态射性质] {@可表态射性质}
设 $P$ 是一种代数空间态射性质，例如[[光滑态射|光滑]]等，
并假设 $P$ 被[[拉回 (范畴论)|拉回]]保持。

称 $S$-叠的可表态射 $f \colon X \to Y$ **具有性质 $P$**，
如果对任何 $S$-概形 $U$，及任何 $S$-叠的态射 $U \to Y$，
将 $f$ 沿之拉回得到的代数空间态射 $U \times_Y X \to U$
都具有性质 $P$。
:::

::: definition [代数叠] {@代数叠}
设 $S$ 是[[概形]]，在 $\mathsf{Sch}_S$ 上选取上述一种拓扑。
定义 $S$ 上的**代数叠**为
景 $\mathsf{Sch}_S$ 上的[[叠]] $X$，满足以下条件：

- 存在 $S$-概形 $U$，
  以及可表态射 $\pi \colon U \to X$，称为 $X$ 的**图册**，
  它在 @可表态射性质 的意义下[[光滑态射|光滑]]、[[满态射|满]]。

:::

直观来说，上述定义中的额外条件表明，
与一般的 $S$-叠相比，代数叠还应具有类似概形的几何结构：
正如[[流形]]可以被 [[Euclid 空间]]覆盖，
代数叠总可以被概形覆盖。

::: remark
在多数文献中，还要求代数叠 $X$ 满足下列性质：

- [[对角态射]] $\Delta_{X/S} \colon X \to X \times_S X$ 是可表态射。

此性质是为了保证任何从概形出发的态射 $\pi \colon U \to X$ 都是可表态射。
然而，我们的定义假设了 $X$ 具有可表的图册，这蕴涵了上述条件，因此不必加入该条件。

另外，有的文献中，还要求代数叠 $X$ 满足下列性质：

- 对角态射 $\Delta_{X/S}$ 是[[拟紧态射]]。换言之，$X$ [[拟分离态射|拟分离]]。

- 对角态射 $\Delta_{X/S}$ 是[[分离态射]]。

我们采取更一般的定义，不要求代数叠满足这些性质，
正如我们一般也不假定所有概形都拟分离。
:::

## 性质

### 基本性质

以下设 $S$ 是[[概形]]，$X$ 是 $S$ 上的代数叠。

- [[对角态射]] $\Delta_{X/S} \colon X \to X \times_S X$ 是可表态射。

## 参考文献

经典的教科书：

```bibliography
LaumonMoretBailly:
  type: book
  author: ['Laumon, Gérard', 'Moret-Bailly, Laurent']
  title: Champs algébriques
  series: 'Ergeb. Math. Grenzgeb., 3. Folge'
  number: 39
  location: Berlin
  publisher: Springer
  year: 2000
  zbmath: '0945.14005'
```

从例子出发的介绍文章：

```bibliography
Gomez2001:
  type: article
  author: 'Gómez, Tomás L.'
  title: Algebraic stacks
  journaltitle: 'Proc. Indian Acad. Sci., Math. Sci.'
  volume: 111
  number: 1
  pages: 1–31
  year: 2001
  doi: 10.1007/bf02829538
  arxiv: math/9911199
  zbmath: '0982.14005'
```

相关文献整理：

```bibliography
Alper2009:
  type: preprint
  author: 'Alper, Jarod'
  title: A guide to the literature on algebraic stacks
  url: https://maths-people.anu.edu.au/~alperj/papers/stacks-guide.pdf
  year: 2009
```

一般参考：

```bibliography
stacks:
  type: online
  site: The Stacks project
  title: The Stacks project
  url: https://stacks.math.columbia.edu/
```

```terms
代数叠:
  en: algebraic stack
  fr: champ algébrique :m
Artin 叠:
  en: Artin stack
  fr: champ d'Artin :m
```
