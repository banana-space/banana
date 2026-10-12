---
title: James 分裂
categories: [同伦论, 范畴论]
notices:
  - name: 问题
    items:
      - “应用”一节需要扩充。
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  [[意象]]都指 [[$(\infty,1)$-意象]]。

:::

**James 分裂**是[[同伦论]]中的经典结论，起初由
[[Ioan James]] 证明，后来由 [[Sanath Devalapurkar]] 和
[[Peter Haine]] 推广到更一般的范畴上。
其经典情形（@james，取 $\mathcal{X}$ 为[[生象]]的范畴）说的是：
对连通的带基点空间 $X$，有典范的[[弱同伦等价]]
$$
\Sigma\Omega\Sigma X\simeq\bigvee_{i=1}^\infty\Sigma X^{\wedge i}.
$$

## 陈述

本节中，设 $\mathcal{C}$ 是[[带基点范畴]]，[[零对象]]记作 $*$。再设
$\mathcal{C}$ 有有限[[极限 (范畴论)|极限]]、有限[[余极限]]。
由于它已经有零对象，这等价于说它有任意[[推出]]、
[[拉回 (范畴论)|拉回]]。先回忆一些记号：

::: definition
对 $X,Y\in\mathcal{C}$：

- $\Sigma X$ 表示推出 $*\sqcup_X*$；

- $\Omega X$ 表示拉回 $*\times_X*$；

- $X\vee Y$ 表示 $X$ 和 $Y$ 的[[余积]]，
  基点给出映射 $X\to X\times Y$ 和 $Y\to X\times Y$，
  从而给出映射 $X\vee Y\to X\times Y$；

- $X\wedge Y$ 表示推出
  $(X\times Y)\sqcup_{X\vee Y}*$，其中
  $X\vee Y\to X\times Y$ 的映射如上；

- $0\colon X\to Y$ 表示零映射，即复合映射
  $X\to*\to Y$。

:::

以下命题在 James 分裂的证明中用到。鉴于它简明而有用，在此单列。

::: proposition {@suspension-product}
对 $X,Y\in\mathcal{C}$，图表
\[
\begin{tikzcd}
  X\times Y\ar[r,"\operatorname{pr}_2"]\ar[d,"\operatorname{pr}_1"']&Y\ar[d,"0"]\ar[r]&*\ar[d]\\
  X\ar[r,"0"']\ar[d]&\Sigma(X\wedge Y)\ar[r]\ar[d]&\Sigma(X\wedge Y)\vee\Sigma Y\ar[d]\\
  *\ar[r]&\Sigma(X\wedge Y)\vee\Sigma X\ar[r]&\Sigma(X\wedge Y)\vee\Sigma X\vee\Sigma Y
\end{tikzcd}
\]
的每个方块都是[[推出]]。特别地，
$$
\operatorname{cofib}(\operatorname{pr}_1)=\Sigma(X\wedge Y)\vee\Sigma Y,
$$
$$
\operatorname{cofib}(\operatorname{pr}_2)=\Sigma(X\wedge Y)\vee\Sigma X,
$$
$$
\Sigma(X\times Y)=\Sigma(X\wedge Y)\vee\Sigma X\vee\Sigma Y.
$$
:::

::: proof
只有左上方块不显然。为此首先注意
$$
\begin{tikzcd}
  X\vee Y\ar[r]\ar[d]&Y\ar[d]\\
  X\ar[r]&*
\end{tikzcd}=\left(\begin{tikzcd}
  X\ar[r]\ar[d]&*\ar[d]\\
  X\ar[r]&*
\end{tikzcd}\right)\vee\left(\begin{tikzcd}
  Y\ar[r]\ar[d]&Y\ar[d]\\
  *\ar[r]&*
\end{tikzcd}\right)
$$
是推出图表。设 $X\sqcup_{X\times Y}Y=Z$。把推出图表的映射
$$
\left(\begin{tikzcd}
  X\vee Y\ar[r]\ar[d]&Y\ar[d]\\
  X\ar[r]&*
\end{tikzcd}\right)\to\left(\begin{tikzcd}
  X\times Y\ar[r]\ar[d]&Y\ar[d]\\
  X\ar[r]&Z
\end{tikzcd}\right)
$$
取余纤维，得推出图表
\[
\begin{tikzcd}
  X\wedge Y\ar[r]\ar[d]&*\ar[d]\\
  *\ar[r]&Z
\end{tikzcd}
\]
故知 $Z=\Sigma(X\wedge Y)$；由上述余纤维自带的映射
$$
\left(\begin{tikzcd}
  X\times Y\ar[r]\ar[d]&Y\ar[d]\\
  X\ar[r]&Z
\end{tikzcd}\right)\to\left(\begin{tikzcd}
  X\wedge Y\ar[r]\ar[d]&*\ar[d]\\
  *\ar[r]&Z
\end{tikzcd}\right)
$$
知 $X\to Z$、$Y\to Z$ 零伦。
:::

::: theorem [James 分裂，有限形式] {@james-finite}
设 $\mathcal{C}$ 中[[推出]]都[[万有余极限|万有]]。
则我们有对 $X\in\mathcal{C}$ [[自然同构|自然的同构]]
$$
\Sigma\Omega\Sigma X=\Sigma(X\wedge\Omega\Sigma X)
\vee\Sigma X.
$$
由于 $\Sigma(X\wedge\Omega\Sigma X)=
  X\wedge\Sigma\Omega\Sigma X$（@suspension-smash），
可将上式迭代，知对任意自然数 $n$ 都有自然同构
$$
\Sigma\Omega\Sigma X=
\Sigma(X^{\wedge n}\wedge\Omega\Sigma X)
\vee\bigvee_{i=1}^n\Sigma X^{\wedge i}.
$$
:::

设 $\mathcal{X}$ 是[[意象]]，则它有任意极限、余极限，且余极限都万有。
特别地，带基点范畴 $\mathcal{X}_*$ 有有限极限、有限余极限，推出图表都万有。
回忆 $\mathcal{X}$ 中带基点对象 $X$ **连通**指的是基点
$*\to X$ 是满射。

::: theorem [James 分裂，无限形式] {@james}
设 $X$ 是 $\mathcal{X}$ 中带基点对象。则 @james-finite 给出一列相容的映射
$$
\bigvee_{i=1}^n\Sigma X^{\wedge i}\to\Sigma\Omega\Sigma X;
$$
对 $n\in\mathbb{N}$ 取余极限，得映射
$$
c_X\colon\bigvee_{i=1}^\infty\Sigma X^{\wedge i}\to\Sigma\Omega\Sigma X;
$$
当 $X$ 连通时，此映射是同构。
:::

## 证明

设 $\mathcal{C}$ 是带基点范畴，有有限极限、有限余极限，推出图表都万有。

::: lemma {@suspension-smash}
我们有对 $X,Y\in\mathcal{C}$ 自然的同构
$$
\Sigma(X\wedge Y)=X\wedge\Sigma Y.
$$
:::

::: proof
注意对推出图表
\[
\begin{tikzcd}
  Y\ar[r]\ar[d]&*\ar[d]\\
  *\ar[r]&\Sigma Y
\end{tikzcd}
\]
做 $X\vee-$，所得仍是推出图表，因为余极限与余极限交换；
对它做 $X\times-$，所得也是推出图表，因为推出图表万有。
故[[自然变换]] $X\vee-\to X\times-$ 给出推出图表映射
$$
\left(\begin{tikzcd}
  X\vee Y\ar[r]\ar[d]&X\ar[d]\\
  X\ar[r]&X\vee\Sigma Y
\end{tikzcd}\right)\to\left(\begin{tikzcd}
  X\times Y\ar[r]\ar[d]&X\ar[d]\\
  X\ar[r]&X\times\Sigma Y
\end{tikzcd}\right)
$$
取余纤维即得结论。
:::

::: lemma {@action-pushout}
存在对 $X\in\mathcal{C}$ 自然的映射
$a_X\colon X\times\Omega\Sigma X\to\Omega\Sigma X$
使得图表
\[
\begin{tikzcd}
  X\times\Omega\Sigma X\ar[r,"\operatorname{pr}_2"]\ar[d,"a_X"']&\Omega\Sigma X\ar[d]\\
  \Omega\Sigma X\ar[r]&*
\end{tikzcd}
\]
是推出。
:::

::: proof
把推出图表
\[
\begin{tikzcd}
  X\ar[r]\ar[d]&*\ar[d]\\
  *\ar[r]&\Sigma X
\end{tikzcd}
\]
沿 $*\to\Sigma X$ 拉回，得立方图表
\[
\begin{tikzcd}
  P\ar[rr]\ar[rd]\ar[dd]&&\Omega\Sigma X\ar[rd]\ar[dd]&\\
  &\Omega\Sigma X\ar[rr,crossing over]\ar[dd,crossing over]&&*\ar[dd]\\
  X\ar[rr]\ar[rd]&&*\ar[rd]&\\
  &*\ar[rr]&&\Sigma X
\end{tikzcd}
\]
其中两个水平方块是推出（由于推出都万有），四个竖直方块是拉回。
现在把 $P$ 按后方块等同于 $X\times\Omega\Sigma X$，
并令左上箭头为 $a_X$，这样上方块就是想要的推出图表。
:::

::: remark
$a_X$ 实际上是自然映射 $X\to\Omega\Sigma X$ 复合
$\Omega\Sigma X$ 的乘法映射。
:::

::: proof [@james-finite 的证明]
对 @action-pushout 取横向余纤维，知
$\Sigma\Omega\Sigma X=\operatorname{cofib}(\operatorname{pr}_2\colon
  X\times\Omega\Sigma X\to\Omega\Sigma X)$。
由 @suspension-product，此余纤维等于
$\Sigma(X\wedge\Omega\Sigma X)\vee\Sigma X$。
此即欲证。
:::

::: lemma {@naturality-topos}
设 $f\colon\mathcal{Y}\to\mathcal{X}$ 是意象的几何态射，$\mathcal{X}$
中带基点对象 $X$ 满足 @james（即其陈述中的映射
$c_X$ 是同构），则 $f^*X$ 也满足 @james。
:::

::: proof
这是因为由几何态射的定义 $f^*$ 保持任意余极限和有限极限。
:::

::: proof [@james 的证明]
回忆对任一意象 $\mathcal{X}$，均存在小范畴 $\mathcal{C}$ 以及几何态射
$f\colon\mathcal{X}\to\mathsf{P}(\mathcal{C})$，使得 $f^*f_*=\operatorname{id}$
（比如可对充分大的[[正则基数]] $\kappa$ 取 $\mathcal{C}=\mathcal{X}^\kappa$，
取 $f_*$ 为 [[Yoneda 嵌入]]的限制）。对 $\mathcal{X}$
中连通带基点对象 $*\to X$，考虑其前推 $*\to f_*X$，
并令 $Y=\operatorname{im}(*\to f_*X)$，则依定义 $Y\in\mathsf{P}(\mathcal{C})_*$
为连通带基点对象，且不难发现 $f^*Y=X$。由 @naturality-topos，只需对 $Y$ 证明 @james，
这样就化归到了 $\mathcal{X}=\mathsf{P}(\mathcal{C})$ 的情形。
由于预层范畴的极限、余极限都是逐对象计算的，
@james 便化归到 $\mathcal{X}=\mathsf{Ani}$ 为[[生象]]范畴的情形。

此时只需证映射 $c_X$ 诱导各阶同伦群的同构。由于 $X$ 连通，
$\Sigma X^{\wedge n}$ 为 $n$-连通，故
$$
\bigvee_{i=1}^n\Sigma X^{\wedge i}\to
\bigvee_{i=1}^\infty\Sigma X^{\wedge i}
$$
诱导 $\le n$ 阶同伦群的同构；另一方面
$\Sigma(X^{\wedge n}\wedge\Omega\Sigma X)$ 也是
$n$-连通，故由 @james-finite，
$$
\bigvee_{i=1}^n\Sigma X^{\wedge i}\to
\Sigma\Omega\Sigma X
$$
也诱导 $\le n$ 阶同伦群的同构；合起来即得欲证。
:::

## 应用

```terms
James 分裂:
  en: James splitting
```
