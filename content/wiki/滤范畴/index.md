---
title: 滤范畴
categories: [范畴论]
notices:
  - name: 问题
    items:
      - “定义”一节末尾关于 $BG$ 与 $B\mathbb{Z}$ 是否为有限范畴的括注，似乎与 $\kappa$-小范畴的定义不符。
navboxes: [范畴论]
---

**滤范畴**是[[有向集]]的[[范畴论]]推广，
把任意有限个元素都有上界推广为任意有限图表都能打到一个对象
（@滤）。

## 定义

::: definition [[[锥 (范畴论)|锥]]]
[[范畴]] $I$ 的**右锥** $I^\rhd$ 指对象集为
$I\sqcup\{*\}$，映射为
$$
\operatorname{Hom}_{I^\rhd}(x,y)=\begin{cases}
  \operatorname{Hom}_I(x,y),&x,y\in I;\\
  \varnothing,&x=*,y\ne*;\\
  \{*\},&y=*;
\end{cases}
$$
的范畴，即给 $I$ 手动添加[[终对象]]所得范畴。
:::

::: definition [滤范畴] {@滤}
称范畴 $\mathcal{C}$ 为**滤范畴**，
指其中任意有限图表 $I\to\mathcal{C}$（即 $I$ 为有限范畴者）
都能延拓到右锥 $I^\rhd\to\mathcal{C}$。
:::

这一概念也可推广到更大的[[基数]]。

::: definition [$\kappa$-小范畴]
对不可数基数 $\kappa$，
**$\kappa$-小范畴**指的是对象和映射数量都小于
$\kappa$ 的范畴。
:::

::: definition [$\kappa$-滤范畴]
设 $\kappa$ 是不可数[[正则基数]]。称范畴 $\mathcal{C}$ 为
**$\kappa$-滤范畴**，指的是对任意 $\kappa$-小范畴
$I$，任一图表 $I\to\mathcal{C}$ 都能延拓为
$I^\rhd\to\mathcal{C}$。
:::

由于 $\aleph_0$-小范畴就是有限范畴，所以
$\aleph_0$-滤范畴就是滤范畴。
（要注意有限范畴并非对象和映射都有限者：对有限群 $G$，$BG$ 不是有限范畴，
而 $B\mathbb{Z}$ 反倒是有限范畴。）

## 性质

::: proposition
范畴 $\mathcal{C}$ 是滤范畴当且仅当它满足如下几条：
- $\mathcal{C}$ 非空。
- 对任意 $x,y\in\mathcal{C}$，存在 $z\in\mathcal{C}$
以及映射 $x\to z$，$y\to z$。
- 对任意 $x,y\in\mathcal{C}$ 以及 $f,g\colon x\to y$，
存在 $z\in\mathcal{C}$，$h\colon y\to z$，使得
$hf=hg$。

:::

::: proposition
一个[[偏序集]]视为范畴是滤范畴当且仅当它是[[有向集]]。
:::

::: theorem
设 $\kappa$ 是正则基数，$\mathcal{C}$ 是
$\kappa$-滤的小范畴。则存在 $\kappa$-滤的偏序集 $C$
以及[[共尾]][[函子]] $C\to\mathcal{C}$。
:::

## 例子

::: example [自然数]
将 $\mathbb N$ 视为偏序范畴：
当且仅当 $m\leq n$ 时，存在唯一态射 $m\to n$。
这是滤范畴。

事实上，任意两个自然数 $m,n$
都能映到 $\max(m,n)$，
而平行态射自动相等。

这个滤范畴没有终对象，
因为不存在最大的自然数。
:::

::: example [有限子集]
设 $X$ 是[[集合]]。
其所有有限子集按包含关系构成滤范畴。

空集保证这个范畴非空。
任意两个有限子集 $A,B$ 都包含在有限子集 $A\cup B$ 中。
因此它们总有共同上界。
:::

::: example [向量空间]
设 $V$ 是域 $k$ 上的[[向量空间]]。
它的有限维子空间按包含关系构成滤范畴，
因为任意两个有限维子空间 $U,W$
都包含在有限维子空间 $U+W$ 中。
:::

::: example [具有终对象的范畴]
每个具有终对象 $1$ 的范畴都是滤范畴。

任意两个对象都能映到 $1$。
对于平行态射 $f,g\colon x\to y$，
取唯一态射 $h\colon y\to1$，
则 $hf$ 与 $hg$ 都是从 $x$ 到 $1$ 的态射，
所以必然相等。

特别地，[[集合范畴|有限集范畴]] $\mathsf{FinSet}$ 是滤范畴，
尽管它并不是[[偏序范畴]]。
:::

```terms
滤范畴:
  en: filtered category
```
