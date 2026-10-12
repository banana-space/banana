---
title: 层上同调
categories: [层论]
navboxes: [层论, 同调与上同调]
---

在[[层论]]与[[同调代数]]中，**层上同调**是对[[拓扑空间]]上的 [[Abel 层]]定义的一种[[上同调理论]]。
对拓扑空间 $X$ 上的 Abel 层 $\mathcal{F}$，其[[整体截面]]
$\Gamma (X, \mathcal{F}) = H^0 (X, \mathcal{F})$
是 $0$ 阶层上同调。
大致而言，高阶层上同调 $H^i (X, \mathcal{F})$ 刻画了局部截面不能延拓成整体截面的障碍，
这种障碍通常是由于空间具有不平凡的拓扑而造成的，
而 $i$ 阶上同调大致刻画 $i$ 维“洞”造成的障碍。

具体而言，层上同调定义为[[整体截面]]函子的[[右导出函子]]。
等价地说，层上同调也是向[[单点空间]]的[[导出前推层]]：
记 $f \colon X \to *$ 为唯一的映射，则
$H^i (X, \mathcal{F}) \simeq H^i (\mathrm{R} f_* \mathcal{F})$，
这里右边是单点空间上的 Abel 层，即 Abel 群。

层上同调是[[奇异上同调]]的推广：
在[[局部可缩空间]]上，[[常值层]]的上同调给出奇异上同调。
另外，在[[流形]]或[[复流形]]上的一些上同调理论，
例如 [[de Rham 上同调]]、[[Dolbeault 上同调]]，
也可以通过层上同调来描述，并借助之与奇异上同调联系起来。

在实际计算中，层上同调常通过 [[Čech 上同调]]或[[无圈消解]]计算。
有时 [[Leray 谱序列]]也有助于计算。

层上同调的定义可推广至[[景]]上的层，而不限于拓扑空间上的层。
在[[代数几何]]中有时需要这一推广，因为[[概形]]的某些拓扑，例如[[平展拓扑]]，
并不真正定义出拓扑空间，而只定义出景。
另外，[[代数叠]]上的层也无法由拓扑空间上的层定义。
这些拓扑下的层上同调，例如[[平展上同调]]，是代数几何的重要工具；
代数叠上的层上同调推广了[[群上同调]]，也赋予后者一种几何观点。

## 定义

### 拓扑空间上的定义

设 $X$ 是[[拓扑空间]]。
记 $\mathsf{Sh} (X)$ 为 $X$ 上 Abel 层的[[范畴]]。
这是[[Abel 范畴]]，且具有[[足量内射对象]]。
整体截面函子
\[
\Gamma (X, -) \colon \mathsf{Sh} (X) \longrightarrow \mathsf{Ab}
\]
是[[左正合函子]]。

::: definition [层上同调]
设 $X$ 是拓扑空间，$\mathcal{F}$ 是 $X$ 上的 Abel 层。
对[[自然数]] $i$，
$\mathcal{F}$ 的第 $i$ 阶**层上同调**定义为
整体截面函子 $\Gamma (X, -)$ 的第 $i$ 个[[右导出函子]]在
$\mathcal{F}$ 上的取值：
\[
H^i (X, \mathcal{F}) = \mathrm{R}^i \Gamma (X, \mathcal{F}).
\]
具体而言，取 $\mathcal{F}$ 的[[内射消解]]
$0 \to \mathcal{F} \to \mathcal{I}^\bullet$，则
\[
H^i (X, \mathcal{F}) =
H^i \bigl( \Gamma (X, \mathcal{I}^\bullet) \bigr),
\]
这里右侧是 [[Abel 群]]的[[上链复形]]的[[链上同调]]。
:::

该定义不依赖内射消解的选取。
特别地，当 $i = 0$ 时，$H^0 (X, \mathcal{F}) = \Gamma (X, \mathcal{F})$。

若 $X$ 是[[环化空间]]，$\mathcal{F}$ 是 $\mathcal{O}_X$-[[模层]]，
也可在 $\mathcal{O}_X$-模层范畴中取内射消解，
由此计算的上同调与在 Abel 层范畴中取内射消解所得的结果相同。

### 景上的定义

设 $\mathcal{C}$ 是[[景]]，即具有 [[Grothendieck 拓扑]]的范畴。
我们将 $\mathcal{C}$ 的对象视为某个假想的空间中的开集。

记 $\mathsf{Sh} (\mathcal{C})$ 为 $\mathcal{C}$ 上 Abel 层的范畴。
这是 [[Grothendieck Abel 范畴]]，因而具有足量内射对象。

若 $\mathcal{C}$ 有终对象 $*$，则层 $\mathcal{F}$ 的整体截面为
$\Gamma (\mathcal{C}, \mathcal{F}) = \mathcal{F} (*)$。
若没有终对象，可定义
\[
\Gamma (\mathcal{C}, \mathcal{F}) =
\varprojlim_{U \in \mathcal{C}} \mathcal{F} (U),
\]
即 $\mathcal{F}$ 在 $\mathcal{C}$ 上的[[反向极限]]，
但这种情况需要假设 $\mathcal{C}$ 是[[本质小范畴]]。
这定义了左正合函子
$\Gamma (\mathcal{C}, -) \colon
\mathsf{Sh} (\mathcal{C}) \to \mathsf{Ab}$。

::: definition [景上的层上同调]
设 $\mathcal{C}$ 是景，$\mathcal{F}$ 是 $\mathcal{C}$ 上的 Abel 层。
对自然数 $i$，
定义 $\mathcal{F}$ 在 $\mathcal{C}$ 上的第 $i$ 阶**层上同调**为
\[
H^i (\mathcal{C}, \mathcal{F}) =
\mathrm{R}^i \Gamma (\mathcal{C}, \mathcal{F}).
\]
:::

若 $X$ 是[[拓扑空间]]，
取 $\mathcal{C} = \mathsf{Open} (X)$ 为 $X$ 的[[开集范畴]]，
并赋予标准的开覆盖拓扑，则这一定义给出拓扑空间上的层上同调。

### 超上同调

<see>[[超上同调]]</see>

层上同调也可推广到层[[链复形|复形]]，整个复形的层上同调称为[[超上同调]]，
也即全局截面函子的[[超导出函子]]。

::: definition [超上同调]
设 $X$ 是拓扑空间或景，$\mathcal{F}^\bullet$ 是 $X$ 上 Abel 层的复形。
取 $\mathcal{F}^\bullet$ 的内射消解
$\mathcal{F}^\bullet \to \mathcal{I}^\bullet$。
对整数 $i$，定义 $\mathcal{F}^\bullet$ 的第 $i$ 阶 **[[超上同调]]** 为
\[
\mathbb{H}^i (X, \mathcal{F}^\bullet)
= H^i \bigl( \Gamma (X, \mathcal{I}^\bullet) \bigr).
\]
:::

## 例子

### 常值层

设 $X$ 是[[局部可缩空间]]，例如 [[CW 复形]]或[[流形]]。
设 $A$ 是 Abel 群，$A_X$ 是 $X$ 上的 $A$ 值常值层。
则有自然同构
\[
H^i (X, A_X) \simeq H^i (X; A),
\]
其中右边是 $A$-系数[[奇异上同调]]。详见[[奇异上同调]]条目。

### de Rham 复形

设 $X$ 是[[光滑流形]]，$\mathcal{A}^p_X$ 是 $X$ 上光滑 $p$-形式的层。
外微分构成层的复形
\[
0 \longrightarrow \mathcal{A}^0_X
\xrightarrow{d} \mathcal{A}^1_X
\xrightarrow{d} \mathcal{A}^2_X
\longrightarrow \cdots .
\]
由 [[Poincaré 引理]]，de Rham 复形是常值层
$\mathbb{R}_X$ 的消解；
又因为每个 $\mathcal{A}^p_X$ 是[[细层]]，该消解是[[无圈消解]]。
于是
\[
H^i (X, \mathbb{R}_X) \simeq
H^i \bigl( \Gamma (X, \mathcal{A}^\bullet_X) \bigr)
= H^i_{\mathrm{dR}} (X).
\]
此即 [[de Rham 上同调|de Rham 定理]]。

### Dolbeault 复形

设 $X$ 是[[复流形]]，$\Omega^p_X$ 是 $X$ 上全纯 $p$-形式的层，
$\mathcal{A}^{p,q}_X$ 是光滑 $(p, q)$-形式的层。
Dolbeault 复形
\[
0 \longrightarrow \mathcal{A}^{p,0}_X
\xrightarrow{\bar{\partial}} \mathcal{A}^{p,1}_X
\xrightarrow{\bar{\partial}} \cdots
\]
是 $\Omega^p_X$ 的细消解。
因此存在自然同构
\[
H^q (X, \Omega^p_X) \simeq
H^q \bigl( \Gamma (X, \mathcal{A}^{p,\bullet}_X) \bigr)
= H^{p,q}_{\bar{\partial}} (X),
\]
它们都给出 $X$ 的 [[Dolbeault 上同调]]。

### 仿射概形上的拟凝聚层

设 $X = \operatorname{Spec} A$ 是[[仿射概形]]，
$\mathcal{F}$ 是 $X$ 上的[[拟凝聚层]]。
则对所有 $i > 0$ 有 $H^i (X, \mathcal{F}) = 0$。
因此，[[凝聚层上同调]]无法探知仿射概形的拓扑信息。

### 射影空间上的线丛

设 $k$ 是[[域]]，$\mathbb{P}^n_k$ 是 $k$ 上的[[射影空间]]。
对[[线丛]] $\mathcal{O} (m)$，有以下计算：

- 若 $m \geq 0$，则
  \[
  H^0 (\mathbb{P}^n_k, \mathcal{O} (m))
  \simeq k [x_0, \dotsc, x_n]_m,
  \]
  其中右边是 $m$ 次齐次多项式组成的 $k$-向量空间。
  若 $m < 0$，则 $H^0 (\mathbb{P}^n_k, \mathcal{O} (m)) = 0$。

- 若 $m \leq -n - 1$，则由 [[Serre 对偶]]有
  \[
  H^n (\mathbb{P}^n_k, \mathcal{O} (m))
  \simeq
  H^0 (\mathbb{P}^n_k, \mathcal{O} (-m-n-1))^\vee.
  \]
  若 $m > -n - 1$，则
  $H^n (\mathbb{P}^n_k, \mathcal{O} (m)) = 0$。

- 对 $0 < i < n$，恒有
  $H^i (\mathbb{P}^n_k, \mathcal{O} (m)) = 0$。

### 平展景上的层

设 $X$ 是[[概形]]，$\mathcal{F}$ 是[[小平展景]] $X_{\text{\'et}}$ 上的 Abel 层。
则 $H^i (X_{\text{\'et}}, \mathcal{F})$ 是 $\mathcal{F}$ 的[[平展上同调]]。

## 性质

### 函子性

::: proposition [关于层的函子性]
设 $X$ 是拓扑空间或景。
则对每个 $i \geq 0$，层上同调构成函子
\[
H^i (X, -) \colon \mathsf{Sh} (X) \longrightarrow \mathsf{Ab}.
\]
换言之，Abel 层的态射 $\mathcal{F} \to \mathcal{G}$
诱导同态
$H^i (X, \mathcal{F}) \to H^i (X, \mathcal{G})$。
:::

### 长正合列

::: proposition [长正合列]
设 $X$ 是拓扑空间或景，
\[
0 \longrightarrow \mathcal{F}
\longrightarrow \mathcal{G}
\longrightarrow \mathcal{H}
\longrightarrow 0
\]
是 $X$ 上 Abel 层的[[短正合列]]。
则有自然[[长正合列]]
\[
0 \longrightarrow H^0 (X, \mathcal{F})
\longrightarrow H^0 (X, \mathcal{G})
\longrightarrow H^0 (X, \mathcal{H})
\longrightarrow H^1 (X, \mathcal{F})
\longrightarrow \cdots .
\]
:::

这是右导出函子的一般性质。
更一般地，层复形的[[正合三角]]也给出相应[[超上同调]]的长正合列。

### Čech 上同调

<see>[[Čech 上同调]]</see>

设 $\mathfrak{U} = (U_i)_{i \in I}$ 是拓扑空间 $X$ 的开覆盖。
对层 $\mathcal{F}$，定义 Čech 上链复形
\[
\check{C}^p (\mathfrak{U}, \mathcal{F}) =
\prod_{i_0, \dotsc, i_p}
\mathcal{F} (U_{i_0} \cap \cdots \cap U_{i_p}),
\]
其上同调记为 $\check{H}^p (\mathfrak{U}, \mathcal{F})$，
即关于开覆盖 $\mathfrak{U}$ 的 [[Čech 上同调]]。

::: theorem [Čech 上同调与层上同调的比较]
设 $\mathfrak{U}$ 是拓扑空间 $X$ 的开覆盖，
$\mathcal{F}$ 是 $X$ 上的 Abel 层。
若对任意有限交
$U_{i_0} \cap \cdots \cap U_{i_p}$ 与任意 $q > 0$ 都有
\[
H^q (U_{i_0} \cap \cdots \cap U_{i_p}, \mathcal{F}) = 0,
\]
则存在自然同构
\[
\check{H}^p (\mathfrak{U}, \mathcal{F})
\simeq H^p (X, \mathcal{F}).
\]
:::

很多层上同调的计算可化为选择合适覆盖后的 Čech 复形计算。

### 无圈消解

空间 $X$ 上的 Abel 层 $\mathcal{F}$ 称为[[无圈层]]，
是指 $H^i (X, \mathcal{F}) = 0$ 对所有 $i > 0$ 成立。

::: proposition [无圈层的例子] {@prop:层上同调-常见无圈层}
设 $X$ 是拓扑空间。则 $X$ 上的 Abel 层的性质满足以下蕴涵关系：

- [[内射层]] $\Rightarrow$ [[松层]] $\Rightarrow$ [[无圈层]]。

- 若 $X$ 是[[仿紧空间|仿紧]] [[Hausdorff 空间]]，
  则[[细层]] $\Rightarrow$ [[软层]] $\Rightarrow$ [[无圈层]]。

:::

::: proposition [无圈消解] {@prop:层上同调-无圈消解}
设 $X$ 是拓扑空间或景，$\mathcal{F}$ 是 $X$ 上的 Abel 层。
若
\[
0 \longrightarrow \mathcal{F}
\longrightarrow \mathcal{A}^0
\longrightarrow \mathcal{A}^1
\longrightarrow \cdots
\]
是 $\mathcal{F}$ 的消解，且每个 $\mathcal{A}^j$ 都是无圈层，
则对每个整数 $i \geq 0$ 有自然同构
\[
H^i (X, \mathcal{F}) \simeq
H^i \bigl( \Gamma (X, \mathcal{A}^\bullet) \bigr).
\]
:::

### 与奇异上同调的比较

::: theorem [常值层与奇异上同调] {@thm:层上同调-奇异比较}
设 $X$ 是[[局部可缩空间]]，$A$ 是 Abel 群，
$A_X$ 是 $X$ 上的 $A$ 值常值层。
则对每个 $i \geq 0$，有自然同构
\[
H^i (X, A_X) \simeq H^i (X; A).
\]
:::

见[[奇异上同调]]一文。

```terms
层上同调:
  en: sheaf cohomology
  fr: cohomologie des faisceaux :f
  de: Garbenkohomologie :f
  ja: 層<そう>コホモロジー
  ko: 층 코호몰로지 (層 cohomology)
```
