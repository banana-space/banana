---
title: 可构造层
categories: [代数几何]
notices:
  - name: 问题
    items:
      - “定义”一节中，拟紧拟分离情形的等价条件似乎应要求 $X$ 写成有限个可构造子概形的无交并。
      - “对复解析空间”一节需要扩充。
navboxes: [代数几何]
---

在[[代数几何]]中，
**可构造层**是[[概形]]等几何对象上的一种[[层]]，
是[[常值层]]的推广。
大致来说，概形 $X$ 上的可构造层是指由
$X$ 的一些[[子概形]]上的常值层或[[局部常值层]]拼起来而得到的层。

可构造层的[[导出范畴]]具有良好的[[六函子理论]]；
[[错致层]]构成该范畴中一个性质良好的[[心]]。

## 定义

### 对概形

::: definition [可构造层]
设 $R$ 是 [[Noether 环|Noether]] [[交换环]]，$X$ 是[[概形]]。
记 $X_{\text{ét}}$ 为 $X$ 的[[小平展景]]，
$\mathsf{Sh} (X; R)$
为 $X_{\text{ét}}$ 上 $R$-[[模]][[层]]的 [[Abel 范畴]]，
$\mathsf{D}^\mathrm{b} (X; R)$ 为其[[有界导出范畴]]。

- 称 $R$-模层 $\mathcal{F} \in \mathsf{Sh} (X_{\text{ét}}; R)$ 为
  $X$ 上的**可构造层**，如果满足以下条件：

  - 任何[[仿射概形|仿射]]开集 $U \subset X$
    都可以写成有限个[[可构造子集|可构造]][[子概形]]的[[无交并]]：
    $U = \bigcup_{i \in I} U_i$，
    使得每个 $\mathcal{F} |_{U_i}$ 是
    $(U_i)_{\text{ét}}$ 上的[[有限型模|有限型]][[局部常值层]]。

  当 $X$ [[拟紧态射|拟紧]]、[[拟分离态射|拟分离]]时，
  这也等价于以下条件：

  - $X$ 可以写成一族[[可构造子集|可构造]][[子概形]]的[[无交并]]：
    $X = \bigcup_{i \in I} X_i$，
    使得每个 $\mathcal{F} |_{X_i}$ 是
    $(X_i)_{\text{ét}}$ 上的[[有限型模|有限型]][[局部常值层]]。

  所有这样的可构造层构成 [[Abel 范畴]] $\mathsf{Con} (X; R)$，
  它是 $\mathsf{Sh} (X; R)$ 的[[全子范畴]]。

- 称 $R$-模层复形 $\mathcal{F} \in \mathsf{D}^\mathrm{b} (X; R)$
  为**可构造复形**，
  是指其各阶[[链上同调]] $\mathcal{H}^i (\mathcal{F})$
  均为可构造层。

  所有这样的可构造复形构成[[全子范畴]]
  $\mathsf{D}^\mathrm{b}_\mathrm{c} (X; R)
    \subset \mathsf{D}^\mathrm{b} (X; R)$，
  称为 $X$ 的**可构造导出范畴**。

:::

### 对复解析空间

## 参考文献

可构造层的定义见 [@stacks, Tag 05BE]。

```bibliography
stacks:
  type: online
  site: The Stacks project
  title: The Stacks project
  url: https://stacks.math.columbia.edu/
kashiwara-schapira-1990:
  type: book
  author: ['Kashiwara, Masaki', 'Schapira, Pierre']
  title: Sheaves on manifolds
  series: Grundlehren Math. Wiss.
  number: 292
  publisher: Springer-Verlag
  year: 1990
```

```terms
可构造层:
  en: constructible sheaf
  fr: faisceau constructible :m
  de: konstruierbare Garbe :f
```
