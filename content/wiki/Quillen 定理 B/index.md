---
title: Quillen 定理 B
categories: [范畴论, 同伦论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- 对 $(\infty,1)$-范畴 $\mathcal{C}$，以
  $|\mathcal{C}|$ 记其[[几何实现]]，即 $\mathcal{C}$
  逆掉所有[[态射]]所得 [[$\infty$-群胚]]。

:::

**Quillen 定理 B** 是 [[Daniel Quillen]]
提出的几个关于[[范畴]]几何实现的定理之一。它对[[函子]]
$f\colon\mathcal{C}\to\mathcal{D}$ 以及对象
$d\in\mathcal{D}$，讨论[[逗号范畴]] $d/f$ 的几何实现何时是
$f$ 的几何实现 $|f|\colon|\mathcal{C}|\to|\mathcal{D}|$
的[[同伦纤维]]（@mainpt）。

## 陈述

以下是其现代陈述。

::: theorem {@main}
设
\[
\begin{tikzcd}
  \mathcal{C}'\ar[r,"p"]\ar[d,"f'"']&\mathcal{C}\ar[d,"f"]\\
  \mathcal{D}'\ar[r,"q"']&\mathcal{D}
\end{tikzcd}
\]
是范畴的[[拉回图表]]，其中 $q$ 是[[左纤维化]]。设
$\mathcal{D}$ 中任一态射 $x\to y$
在[[逗号范畴]]上给出的函子 $y/f\to x/f$
的几何实现都是同构。则
\[
\begin{tikzcd}
  {|\mathcal{C}'|}\ar[r,"|p|"]\ar[d,"|f'|"']&{|\mathcal{C}|}\ar[d,"|f|"]\\
  {|\mathcal{D}'|}\ar[r,"|q|"']&{|\mathcal{D}|}
\end{tikzcd}
\]
是[[生象]]的拉回图表。
:::

对 $d\in\mathcal{D}$ 取 $\mathcal{D}'$ 为[[仰范畴]]
$\mathcal{D}_{d/}$，即得：

::: corollary {@mainpt}
设 $\mathcal{C}$、$\mathcal{D}$ 是范畴，
$f\colon\mathcal{C}\to\mathcal{D}$ 是[[函子]]。
设 $\mathcal{D}$ 中任一态射 $x\to y$
在[[逗号范畴]]上给出的函子 $y/f\to x/f$
的几何实现都是同构。则
\[
\begin{tikzcd}
  {|d/f|}\ar[r]\ar[d]&{|\mathcal{C}|}\ar[d,"|f|"]\\
  *=|\mathcal{D}_{d/}|\ar[r]&{|\mathcal{D}|}
\end{tikzcd}
\]
是[[生象]]的拉回图表，换言之 $|d/f|$ 是 $|f|\colon
|\mathcal{C}|\to|\mathcal{D}|$ 在 $d$ 处的纤维。
:::

## 证明

把 $f\colon\mathcal{C}\to\mathcal{D}$ 分解为共尾函子
$i\colon\mathcal{C}\to\mathcal{E}$ 与[[右纤维化]]
$g\colon\mathcal{E}\to\mathcal{D}$，并作纤维图表
\[
\begin{tikzcd}
  \mathcal{C}'\ar[r,"p"]\ar[d,"i'"']&\mathcal{C}\ar[d,"i"]\\
  \mathcal{E}'\ar[r,"r"']\ar[d,"g'"']&\mathcal{E}\ar[d,"g"]\\
  \mathcal{D}'\ar[r,"q"']&\mathcal{D}
\end{tikzcd}
\]
由 @lemma-cf，$i'$ 也共尾，所以 $i$ 和
$i'$ 的几何实现都是同构；此外，对任意 $x\in\mathcal{D}$，
由共尾性，函子 $x/i\colon x/f\to x/g$ 的几何实现也是同构；
这样我们就把 @main 化归到了
$f\colon\mathcal{C}\to\mathcal{D}$ 是右纤维化的情形。
此时对任意 $x\in\mathcal{D}$，含入函子
$\mathcal{C}_x\to x/f$ 共首，从而在几何实现上是同构，
所以定理条件就是在说 $f$ [[局部常纤维范畴|局部常]]。令
$C'=|\mathcal{C}|\times_{|\mathcal{D}|}|\mathcal{D}'|$，
我们要证明自然映射 $|\mathcal{C}'|\to C'$ 是同构。
为此考虑范畴的交换图表
\[
\begin{tikzcd}
  \mathcal{C}'\ar[rr,"p"]\ar[rd]\ar[dd,"f'"']&&\mathcal{C}\ar[rd]\ar[dd,"f",near start]&\\
  &C'\ar[rr,crossing over]\ar[dd,crossing over]&&{|\mathcal{C}|}\ar[dd,"|f|"]\\
  \mathcal{D}'\ar[rr,"q"',near start]\ar[rd]&&\mathcal{D}\ar[rd]&\\
  &{|\mathcal{D}'|}\ar[rr,"|q|"']&&{|\mathcal{D}|}
\end{tikzcd}
\]
依定义，图表的正面和背面都是拉回；由 @lc=pb，
右面是拉回；故由三拉回引理，左面也是拉回，此时再用 @lc=pb 即得欲证，因为 $f'$ 也是局部常右纤维化。

::: lemma {@lemma-cf}
设
\[
\begin{tikzcd}
  \mathcal{C}'\ar[r,"p"]\ar[d,"i'"']&\mathcal{C}\ar[d,"i"]\\
  \mathcal{E}'\ar[r,"r"']&\mathcal{E}
\end{tikzcd}
\]
是范畴的[[拉回图表]]，其中 $r$ 是[[左纤维化]]，$i$
共尾。则 $i'$ 也共尾。
:::

以下命题是右纤维化局部常的等价刻画，
证明参见[[局部常纤维范畴]]条目。

::: proposition {@lc=pb}
左纤维化 $p\colon\mathcal{C}\to\mathcal{D}$ 局部常当且仅当
\[
\begin{tikzcd}
  \mathcal{C}\ar[d,"p"']\ar[r]&{|\mathcal{C}|}\ar[d,"|p|"]\\
  \mathcal{D}\ar[r]&{|\mathcal{D}|}
\end{tikzcd}
\]
是范畴的拉回方块。此时如
\[
\begin{tikzcd}
  \mathcal{C}\ar[d,"p"']\ar[r]&C\ar[d,"\bar{p}"]\\
  \mathcal{D}\ar[r]&{|\mathcal{D}|}
\end{tikzcd}
\]
是范畴的拉回方块，则 $(C,\bar{p})=(|\mathcal{C}|,|p|)$。
:::

```terms
Quillen 定理 B:
  en: Quillen's theorem B
```
