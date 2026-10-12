---
title: 正合范畴
aliases: [正合 ∞-范畴]
categories: [同调代数, 范畴论]
navboxes: [范畴论]
---

**正合范畴**是带有[[正合列]]结构的[[加性范畴]]。
此概念由 [[Daniel Quillen]] 于 20 世纪 70 年代引入，
用来定义[[代数 $K$ 理论]]。

## 定义

以下叙述正合 [[$(\infty, 1)$-范畴]]的定义，
而**正合范畴**则是指具有相应性质的普通[[范畴]]。

::: definition {@正合范畴}
**正合 $(\infty, 1)$-范畴**指三元组
$(\mathcal{C},\operatorname{cof}\mathcal{C},\operatorname{fib}\mathcal{C})$，其中：

1. $\mathcal{C}$ 是[[加性 $(\infty, 1)$-范畴]]。

2. $\operatorname{cof}\mathcal{C}$ 与 $\operatorname{fib}\mathcal{C}$ 是 $\mathcal{C}$
   的[[宽子范畴]]，
   其中[[态射]]分别称为 **[[余纤维化]]**（或**容许单射**）
   与 **[[纤维化]]**（或**容许满射**），满足：

   - 对任意 $x\in\mathcal{C}$，
     $0\to x$ 是余纤维化，$x\to0$ 是纤维化。

   - 对任意余纤维化 $z\to x$ 以及任意态射
     $z\to z'$，[[推出]] $x'=x\sqcup_zz'$ 存在，
     且 $z'\to x'$ 也是余纤维化；对偶地，对任意纤维化
     $x\to y$ 以及任意态射 $y'\to y$，[[拉回]]
     $x'=x\times_yy'$ 存在，且 $x'\to y'$ 也是纤维化。
     简而言之，余纤维化对推出封闭，纤维化对拉回封闭。

3. 对交换图
   \[
   \begin{tikzcd}
     z\ar[r,"i"]\ar[d]&x\ar[d,"p"]\\
     0\ar[r]&y
   \end{tikzcd}
   \]
   以下二者等价：

   - 它是推出图表且 $i$ 是余纤维化。

   - 它是拉回图表且 $p$ 是纤维化。

   此时称 $z\to x\to y$ 是 $\mathcal{C}$
   中 **[[短正合列]]**，亦记作
   $0\to z\to x\to y\to0$。

正合 $(\infty, 1)$-范畴间**正合函子**指的是保持余纤维化、纤维化、
短正合列的[[加性 $(\infty, 1)$-函子]]。小的正合范畴沿正合函子构成范畴，
记作 $\mathsf{Exact}$。
:::

::: remark
上述条件 2 相当于说 $(\mathcal{C},\operatorname{cof}\mathcal{C})$ 是[[带余纤维化的范畴]]，
$(\mathcal{C},\operatorname{fib}\mathcal{C})$ 是带纤维化的范畴。容易发现
$(\mathcal{C},\operatorname{cof}\mathcal{C},\operatorname{fib}\mathcal{C})\mapsto(\mathcal{C},\operatorname{cof}\mathcal{C})$
给出满忠实函子
$\mathsf{Exact}\to\mathsf{Wald}$，于是正合范畴可看成一类特殊的
Waldhausen 范畴。
:::

::: remark {@加强}
上述条件 3 等价于更强的

- 3$'$. 对交换图
  \[
  \begin{tikzcd}
    z\ar[r,"i"]\ar[d,"p'"']&x\ar[d,"p"]\\
    w\ar[r,"i'"']&y
  \end{tikzcd}
  \]
  以下二者等价：

  - 它是推出图表，$i$ 是余纤维化，$p'$
    是纤维化。

  - 它是拉回图表，$p$ 是纤维化，$i'$
    是余纤维化。

比如我们来从上述第一条推第二条。为此把它延长为
\[
\begin{tikzcd}
  k\ar[r,"j"]\ar[d]&z\ar[r,"i"]\ar[d,"p'"']&x\ar[d,"p"]\\
  0\ar[r]&w\ar[r,"i'"']\ar[d]&y\ar[d]\\
  &0\ar[r]&c
\end{tikzcd}
\]
使得下方块是推出，左方块是拉回。对下方块和纵向大方块用条件 3，
知它们都是拉回，这样原方块也是拉回。
由于推出保持余纤维化，$i'$ 自然是余纤维化。
对左方块用条件 3，知 $j$ 是余纤维化，从而 $ij$ 也是；
再对横向大方块用条件 3，知 $p$ 是纤维化。
从证明容易看出，正合函子保持此种方块图表；
将其称为正合范畴的**纤维方块**。
:::

## 例子

::: example {@加性}
[[加性 $(\infty, 1)$-范畴]]都有如下极小正合结构：[[余纤维化]]取成分裂单射，
即同构于含入 $A\to A\oplus B$ 的态射，[[纤维化]]取成分裂满射，
即同构于投影 $A\oplus B\to B$ 的态射。在极小正合结构下，
[[加性函子]]都是正合函子。注意以下几例中的正合结构都不极小。
:::

::: example {@abel}
[[Abel 范畴]]都是正合范畴，
其中余纤维化取成单射，纤维化取成满射。
这种正合结构的正合函子和通常的[[正合函子]]概念吻合。
:::

::: example {@稳定}
[[稳定 $(\infty, 1)$-范畴]]都是正合 $(\infty, 1)$-范畴，
其中余纤维化和纤维化都取成所有的态射。
这种正合结构的正合函子和通常的[[正合函子]]概念吻合。
:::

::: example
[[半稳定 $(\infty, 1)$-范畴]]都是正合 $(\infty, 1)$-范畴，其中余纤维化取成所有态射。
:::

::: example {@t}
设 $\mathcal{C}$ 是稳定 $(\infty, 1)$-范畴，
$(\mathcal{C}_{\ge0},\mathcal{C}_{\le0})$ 是其
[[t 结构]]。则对 $-\infty\le a\le b\le+\infty$，
[[满子范畴]] $\mathcal{C}_{[a,b]}$ 是正合范畴，
其中余纤维化和纤维化定义如下：如 $\mathcal{C}$ 的推出图表
（也就是拉回图表）
\[
\begin{tikzcd}
  Z\ar[r]\ar[d]&X\ar[d]\\
  0\ar[r]&Y
\end{tikzcd}
\]
中 $X,Y,Z$ 都属于 $\mathcal{C}_{[a,b]}$，则
$Z\to X$ 是[[余纤维化]]，$X\to Y$ 是[[纤维化]]。
本例是 @abel 和 @稳定 的共同推广。
:::

## 性质

### 嵌入 Abel 范畴

::: proposition
设 $\mathcal{C}$ 是[[小范畴|小]]正合范畴。
则存在 [[Abel 范畴]] $\mathcal{A}$ 和[[全忠实函子|全忠实]][[加性函子]]
\[
i \colon \mathcal{C} \hookrightarrow \mathcal{A},
\]
使得 $\operatorname{cof} \mathcal{C}$
与 $\operatorname{fib} \mathcal{C}$
分别由那些在 $\mathcal{A}$ 中是单射、满射的态射构成，
且对 $\mathcal{A}$ 中任何短正合列 $0 \to z \to x \to y \to 0$，
若 $z, y$ 在 $i$ 的[[本质像]]中，则 $x$ 也在。
:::

其证明见 [@Quillen1973, §2]。

## 构造

### 导出范畴

见词条[[导出 $(\infty,1)$-范畴]]。

## 参考文献

原始文献：

```bibliography
Quillen1973:
  type: incollection
  author: 'Quillen, Daniel'
  year: 1973
  title: Higher algebraic $K$-theory. I
  booktitle: Algebraic $K$-theory. I
  series: Lect. Notes Math.
  number: 341
  pages: '85-147'
  zbmath: '0292.18004'
```

```terms
正合范畴:
  en: exact category
  fr: catégorie exacte
  la: categoria exacta
```
