---
title: 分层
categories: [一般拓扑, 概形论]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
---

**分层**是个[[拓扑学]]概念，
把[[拓扑空间]]分成若干[[局部闭子空间]]的无交并，
可用于定义、研究[[可构造层]]。[[代数几何]]中的类似概念亦有其意义。

## 定义

::: definition
[[拓扑空间]] $X$ 的**分层**，指的是[[偏序集]] $I$
以及[[分划]] $X=\bigsqcup_{i\in I}X_i$，
满足对任意向下封闭的子集 $J\subseteq I$ 均有
$\bigcup_{j\in J}X_j$ 是闭集。固定偏序集 $I$ 时，
这样的分划也称为 $X$ 的 **$I$-分层**。如用偏序集的
[[Alexandrov 拓扑]]，即以向下封闭的集合为闭集，
把 $I$ 做成拓扑空间，则依定义，$X$ 的
$I$-分层也相当于[[连续映射]] $f\colon X\to I$。
各 $X_i$ 称为该分层的每一**层**，
在与[[层]]混淆时也可称之为**片**。

对 $X$ 的 $I$-分层以及 $i\in I$，分别以 $X_{\le i}$、
$X_{<i}$、$X_{\ge i}$、$X_{>i}$ 记对 $j\le i$、$j<i$、
$j\ge i$、$j>i$ 的所有 $X_j$ 的并。则依定义，
$X_{\le i}$ 和 $X_{<i}$ 是闭集，$X_{\ge i}$ 和 $X_{>i}$
是开集。特别地，$X_i=X_{\le i}\cap X_{\ge i}$ 是 $X$
的[[局部闭子集]]。**好分层**指的是满足
$\overline{X_i}=X_{\le i}$ 的分层。
:::

::: definition
[[概形]] $X$ 的分层指的是其作为拓扑空间的分层
$X=\bigsqcup_{i\in I}X_i$，
连带每一层的[[局部闭子概形]]结构。
:::

::: remark
在[[微分拓扑]]中会考虑每一层带有[[光滑流形]]结构的分层。
参见条目 [[Whitney 分层]]。
:::

## 性质

## 例子

- [[CW 复形]] $X$ 的各胞腔 $e_\alpha$ 形成分层，
  这里偏序集定义为 $\alpha\ge\beta$ 当且仅当
  $\overline{e_\alpha}\cap e_\beta\ne\varnothing$。
  当然也可粗放一些，把偏序集定义为 $\alpha>\beta$ 当且仅当
  $e_\alpha$ 维数比 $e_\beta$ 大。一般来说它不是好分层。

- 如 $X$ 是[[单纯复形]]，则依上例，偏序集采取第一种定义，
  所得分层是好分层。

- 设 $X$ 是[[完美域]] $k$ 上[[有限型概形]]。
  对自然数 $n$ 归纳定义 $X_{\le-n}$ 和 $X_{-n}$ 如下：
  $X_{\le0}=X_\text{red}$，$X_{-n}$ 是 $X_{\le-n}$
  所有[[光滑态射|光滑]]点组成的开子概形，$X_{\le-n-1}=
  X_{\le-n}\setminus X_{-n}$，带既约闭子概形结构。
  由[[广泛平坦]]，$\overline{X_{-n}}=X_{\le-n}$，
  所以由 $X$ [[Noether 概形|Noether]] 知对充分大的 $N$，
  $X_{\le-N}=0$，即 $X_{-n}$，$n<N$ 构成 $X$ 的划分。
  依定义，这按整数的自然偏序构成好分层，且每一层都是光滑的。

```terms
分层:
  en: stratification
  de: Stratifikation :f
  fr: stratification :f
  la: stratificatio :f
层:
  en: stratum
  de: Bank :f
  fr: strate :m
  la: stratum :n
```
