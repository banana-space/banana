---
title: 群概形
categories: [代数群理论]
navboxes: [代数群理论]
---

**群概形**是[[概形]][[范畴]]的[[群对象]]。

## 定义

::: definition [群概形]
概形 $S$ 上的**群概形**指 $S$ 上概形范畴
$\mathsf{Sch}_S$ 的[[群对象]]。换言之，$S$
上群概形是四元组 $(G,m,e,i)$，$G$ 为 $S$ 上概形，
$m\colon G\times_SG\to G$，$e\colon S\to G$，
$i\colon G\to G$ 为 $S$-态射，分别满足[[群]]乘法、
单位元、逆元需满足的公理。如乘法满足[[交换律]]，
则称其为**交换群概形**。
$S$ 上群概形和交换群概形的范畴分别记作
$\mathsf{Grp}_S$ 和 $\mathsf{Ab}_S$。
:::

::: remark
由[[群对象]]的一般道理及[[米田引理]]，
$S$ 上群概形相当于[[函子]] $\mathsf{Sch}_S\to\mathsf{Grp}$，
复合[[遗忘函子]] $\mathsf{Grp}\to\mathsf{Set}$
之后为[[可表函子|可表]]。类似地，交换群概形相当于函子
$\mathsf{Sch}_S\to\mathsf{Ab}$，复合遗忘函子之后可表。
我们通常用这种方式而不是定义中的四元组来给出群概形，
因为更方便。如有 $S$ 上群概形 $G$，我们也直接以
$h_G$ 记函子 $\mathsf{Sch}_S\to\mathsf{Grp}$。
:::

::: definition [同态]
设 $G,H$ 是 $S$ 上群概形。则 $G$ 到 $H$
的**同态**指 $S$-态射 $f\colon G\to H$，满足涉及 $m,e,i$
的图表都对应交换。换言之，$f$ 沿[[米田引理]]对应的
$h_f\colon h_G\to h_H$ 是 $\mathsf{Sch}_S$ 到
$\mathsf{Grp}$ 的[[函子同态]]。$G$ 到 $H$ 所有同态的集合记作
$\operatorname{Hom}_S(G,H)$。
:::

::: definition [子群、正规子群]
设 $G$ 是 $S$ 上群概形。则 $G$ 的**子群**指的是
$h_G\colon\mathsf{Sch}_S\to\mathsf{Grp}$ 的可表子函子，
即对每个 $S$-概形 $T$ 指定群 $G(T)$ 的一个子群，
这一指定构成[[可表函子]]。$G$ 的子群 $H$
称为**正规子群**，意思是对每个 $T\in\mathsf{Sch}_S$，
$H(T)$ 都是 $G(T)$ 的正规子群。
:::

::: definition [单、满、正合列]
称 $S$ 上群概形同态 $f\colon G\to H$ 为**单（满）**，
指的是函子同态 $h_f\colon h_G\to h_H$ 作为
[[fpqc 层]]的映射为单（满）。由于层单射和预层单射一样，
$f$ 是单射也等价于对每个 $S$-概形 $T$，映射
$f(T)\colon G(T)\to H(T)$ 为单射，而满射则不然。
类似地，群概形映射列称为**正合列**，
指的是它作为 fpqc 层映射列为[[正合列|正合]]。
:::

## 例子

以下固定基概形 $S$，所有的概形都是 $S$-概形。

- $S$ 本身总是自己的群概形，因其表示的函子取值总为单点。
  这称为**平凡群概形**，记作 $1$ 或 $0$。

- 函子 $X\mapsto\Gamma(X,\mathcal{O}_X)$ 被[[仿射直线]]
  $\mathbb{A}^1_S$ 表示，故这给出交换群概形，
  称为[[加法群概形]]，记作 $\mathbb{G}_{a,S}$。

- 函子 $X\mapsto\Gamma(X,\mathcal{O}_X^\times)$ 被
  $\mathbb{A}^1_S\setminus0$ 表示，故这给出交换群概形，
  称为[[乘法群概形]]，记作 $\mathbb{G}_{m,S}$。

- 各种线性代数群都是群概形，例如[[一般线性群]]、
  [[特殊线性群]]、[[正交群]]等。

- [[椭圆曲线]]是群概形。一般地，
  [[Abel 概形]]是群概形。

## 性质

群概形和群一样有各种构造。

::: proposition [核]
对 $S$ 上群概形同态 $f\colon G\to H$，存在 $S$
上群概形 $\ker(f)$ 满足 $1\to\ker(f)\to G\to H$
为正合列。换言之，函子 $T\mapsto \ker(G(T)\to H(T))$
可表。$\ker(f)$ 称为 $f$ 的**核**。
:::

::: proof
回忆概形可以作[[纤维积]]。定义 $\ker(f)$ 为纤维积
\[
\begin{tikzcd}
  \ker(f)\ar[r]\ar[d]&1\ar[d]\\
  G\ar[r,"f"']&H
\end{tikzcd}
\]
显然满足要求。
:::

::: remark
相比之下像和商就没那么好。当然，作为
[[fpqc 层]]的像和商总是有的，但未必可表。
可表性只在[[域]]上[[有限型态射|有限型]]即[[代数群]]情形成立。
:::

::: proposition [积]
$S$ 上任两个群概形 $G,H$ 都能作乘积。换言之，函子
$T\mapsto G(T)\times H(T)$ 可表。
:::

::: proof
显然[[纤维积]] $G\times_SH$ 就是这个乘积。
:::

于是范畴 $\mathsf{Grp}_S$ 有有限极限。

::: proposition [基变换]
设 $T\to S$ 是概形态射。则 $-\times_ST$ 给出函子
$\mathsf{Sch}_S\to\mathsf{Sch}_T$，
称为群概形的**基变换**。它保持极限。
:::

::: remark
它有时有[[右伴随]]，称为 [[Weil 限制]]。
:::

下面几个命题来自群概形的齐性。以下命题就是
[[Lie 群]][[切丛]]平凡的代数几何类比，这里
$e^*\Omega_{G/S}$ 就好比是单位元处余切空间。

::: proposition
$G$ 是 $S$ 上群概形。以 $p\colon G\to S$ 记结构映射，
$e\colon S\to G$ 记单位元。则
$\Omega_{G/S}=p^*e^*\Omega_{G/S}$。
:::

::: proposition
$G$ 是 $S$ 上群概形。则 $G$ 在 $S$
上[[分离态射|分离]]（[[拟分离态射|拟分离]]）当且仅当
$e\colon S\to G$ 是[[闭浸入]]（[[拟紧态射|拟紧]]）。
:::

### 仿射群概形

[[仿射概形]]上的仿射群概形对应于 [[Hopf 代数]]。

```terms
群概形:
  en: group scheme
  de: Gruppenschema
  fr: schéma en groupe
```
