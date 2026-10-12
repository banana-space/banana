---
title: Hilton–Milnor 分裂
categories: [同伦论, 范畴论]
notices:
  - name: 问题
    items:
      - “推广”一节需要扩充。
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  [[意象]]都指 [[$(\infty,1)$-意象]]。

:::

**Hilton–Milnor 分裂**是个[[同伦论]]结论，
在同伦论意义下分解[[一点并]]的[[环路空间]]。其经典情形说的是：
对带基点空间 $X,Y$，我们有典范的[[弱同伦等价]]
$$
\Omega(X\vee Y)\simeq\Omega X\times\Omega Y
\times\Omega\Sigma(\Omega X\wedge\Omega Y).
$$

## 陈述与证明

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

以下命题在主定理的证明中用到。鉴于它简明而有用，在此单列。

::: proposition {@suspension-product}
对 $X,Y\in\mathcal{C}$，图表
\[
\begin{tikzcd}
  X\times Y\ar[r,"\operatorname{pr}_2"]\ar[d,"\operatorname{pr}_1"']&Y\ar[d,"0"]\\
  X\ar[r,"0"']&\Sigma(X\wedge Y)
\end{tikzcd}
\]
是[[推出]]。
:::

::: proof
首先注意
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

::: theorem [Hilton–Milnor 分裂] {@hilton-milnor}
设 $\mathcal{C}$ 中[[推出]]都[[万有余极限|万有]]。
则我们有对 $X,Y\in\mathcal{C}$ 自然的纤维列
$$
\Sigma(\Omega X\wedge\Omega Y)\to
X\vee Y\to X\times Y
$$
且在取 $\Omega$ 之后典范地分裂，给出[[自然同构]]
$$
\Omega(X\vee Y)=\Omega X\times\Omega Y
\times\Omega\Sigma(\Omega X\wedge\Omega Y).
$$
:::

::: proof
先证纤维列。令 $Z=\operatorname{fib}(X\vee Y\to X\times Y)$。
由 @suspension-product，只需证下图是推出。
\[
\begin{tikzcd}
  \Omega X\times\Omega Y\ar[r]\ar[d]&\Omega Y\ar[d,"0"]\\
  \Omega X\ar[r,"0"']&Z
\end{tikzcd}
\]
考虑立方图表
\[
\begin{tikzcd}
  &\Omega Y\ar[rd]\ar[d,"0"]&&\\
  \Omega X\times\Omega Y\ar[ru]\ar[rd,crossing over]\ar[d]&X\ar[rd]&Z\ar[d]\ar[r]&*\ar[d]\\
  *\ar[ru]\ar[rd]&\Omega X\ar[ru,crossing over]\ar[d,"0"]&X\vee Y\ar[r]&X\times Y\\
  &Y\ar[ru]&&
\end{tikzcd}
\]
要证其顶面是推出。由于其底面显然是推出，而推出都万有，
只需证其侧面都是拉回。注意其各个侧面在复合到右边
$*\to X\times Y$ 之后都是拉回，由三拉回引理即得结论。

再证取 $\Omega$ 所得纤维列
$$
\Omega\Sigma(\Omega X\wedge\Omega Y)\xrightarrow{i}
\Omega(X\vee Y)\xrightarrow{p}\Omega(X\times Y)
$$
典范分裂。首先注意 $\Omega$ 给出群对象，故上列实际上是
$\mathcal{C}$ 中群对象的纤维列；其次注意映射
$\Omega(X\vee Y)\to\Omega(X\times Y)$ 有[[截面]]
$$
s\colon\Omega(X\times Y)=\Omega X\times\Omega Y\to
\Omega(X\vee Y)\times\Omega(X\vee Y)\to\Omega(X\vee Y)
$$
其中最后一个映射是群乘法；这样群结构便给出纤维列的分裂，
具体写出来就是
$$
\Omega(X\times Y)\times
\Omega\Sigma(\Omega X\wedge\Omega Y)\xrightarrow{\sim}\Omega(X\vee Y),
$$
$$
(\alpha,\beta)\mapsto s(\alpha)i(\beta).
$$
:::

::: remark
由于证明最后一步的截面 $s\colon\Omega(X\times Y)\to\Omega(X\vee Y)$
不是群同态，@hilton-milnor 的分裂不是作为群的分裂。
事实上最简单的例子 $X=Y=S^1$ 也能说明问题。以 $\xi$、
$\eta$ 记 $\pi_1(X)$、$\pi_1(Y)$ 的生成元，则
$\Omega X=\xi^\mathbb{Z}$，$\Omega Y=\eta^\mathbb{Z}$，
$\Omega X\wedge\Omega Y=\{(\xi^n,\eta^m)_{n,m\in\mathbb{Z}\setminus0}\}_+$。
此时 @hilton-milnor 中纤维列取 $\Omega$
之后得到群短正合列
$$
1\to\left<(\xi^n,\eta^m)_{n,m\in\mathbb{Z}\setminus0}\right>
\xrightarrow{i}\left<\xi,\eta\right>\xrightarrow{p}
\xi^\mathbb{Z}\times\eta^\mathbb{Z}\to1
$$
其中 $p$ 是交换化，
$$
i(\xi^n,\eta^m)=\xi^n\eta^m\xi^{-n}\eta^{-m}.
$$
从而 @hilton-milnor 给出的分裂是
$$
\xi^\mathbb{Z}\times\eta^\mathbb{Z}\times
\left<(\xi^n,\eta^m)_{n,m\in\mathbb{Z}\setminus0}\right>\to
\left<\xi,\eta\right>,
$$
$$
(\xi^a,\eta^b,g)\mapsto\xi^a\eta^bi(g),
$$
显然不是群同态。
:::

## 推论

文献中的“Hilton–Milnor 分裂”常指以下推论。

::: corollary
设 $\mathcal{X}$ 是[[意象]]，$X,Y$ 是其中连通带基点对象。则
$$
\Omega(\Sigma X\vee\Sigma Y)=\Omega\Sigma X\times
\Omega\Sigma Y\times\Omega\Sigma\left(\bigvee_{i,j\in\mathbb{Z}_+}
X^{\wedge i}\wedge Y^{\wedge j}\right).
$$
:::

::: proof
只需证
$$
\Sigma(\Omega\Sigma X\wedge\Omega\Sigma Y)=
\Sigma\left(\bigvee_{i,j\in\mathbb{Z}_+}
X^{\wedge i}\wedge Y^{\wedge j}\right).
$$
用 [[James 分裂]]以及
$\Sigma(X\wedge Y)=S^1\wedge X\wedge Y
  =\Sigma X\wedge Y=X\wedge\Sigma Y$ 计算
\[
\begin{aligned}
  \Sigma(\Omega\Sigma X\wedge\Omega\Sigma Y)
  &=\Sigma\Omega\Sigma X\wedge\Omega\Sigma Y
  =\Sigma\left(\bigvee_{i\in\mathbb{Z}_+}X^{\wedge i}\right)
  \wedge\Omega\Sigma Y\\
  &=\left(\bigvee_{i\in\mathbb{Z}_+}X^{\wedge i}\right)
  \wedge\Sigma\Omega\Sigma Y
  =\left(\bigvee_{i\in\mathbb{Z}_+}X^{\wedge i}\right)\wedge
  \Sigma\left(\bigvee_{j\in\mathbb{Z}_+}Y^{\wedge j}\right)\\
  &=\Sigma\left(\left(\bigvee_{i\in\mathbb{Z}_+}X^{\wedge i}\right)\wedge
  \left(\bigvee_{j\in\mathbb{Z}_+}Y^{\wedge j}\right)\right)
  =\Sigma\left(\bigvee_{i,j\in\mathbb{Z}_+}
  X^{\wedge i}\wedge Y^{\wedge j}\right)
\end{aligned}
\]
即得结论。
:::

## 推广

（$n$ 个对象的情形。）

```terms
Hilton–Milnor 分裂:
  en: Hilton–Milnor splitting
```
