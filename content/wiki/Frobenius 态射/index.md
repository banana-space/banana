---
title: Frobenius 态射
aliases:
  - 绝对 Frobenius 态射
  - 相对 Frobenius 态射
  - 几何 Frobenius 态射
  - 几何 Frobenius 自同态
  - 算术 Frobenius 态射
  - 绝对 Frobenius
  - 相对 Frobenius
  - 几何 Frobenius
  - 算术 Frobenius
  - Frobenius 扭转
  - Frobenius 核
categories: [概形论]
navboxes: [概形论]
---

在[[代数几何]]中，
**Frobenius 态射**是[[特征 (代数)|特征]] $p > 0$ 的[[概形]]到自身的[[概形态射|态射]]，
它把概形上的函数映到其 $p$ 次方。
例如，[[仿射概形]]的 Frobenius 态射就由环的 [[Frobenius 同态]] $a \mapsto a^p$ 给出。

由 [[Fermat 小定理]]，
$\operatorname{Spec} \mathbb{F}_p$ 的 Frobenius 态射是[[恒同态射]]，
从而 $\mathbb{F}_p$-概形的 Frobenius 态射都与到
$\operatorname{Spec} \mathbb{F}_p$ 的结构态射相容。
更一般地，对[[有限域]] $\mathbb{F}_q$ 上的概形，其中 $q = p^r$，
我们也考虑取函数 $q$ 次方的 Frobenius 态射，这是 $\mathbb{F}_q$-概形的态射。

Frobenius 态射在概形的底空间上是[[恒同映射]]，只改变[[结构层]]。
例如，$\mathbb{F}_p$ 上的[[仿射直线]] $\mathbb{A}^1$
的 Frobenius 态射即 $x \mapsto x^p$，
所有 $\mathbb{F}_p$-点都是不动点。
不过并不是所有 $\overline{\mathbb{F}}_p$-点都是不动点，
因为 $\overline{\mathbb{F}}_p$ 上 $x \mapsto x^p$
的不动点恰好是那些 $\mathbb{F}_p$-点。
这与底空间上的恒同映射并不矛盾：
$\overline{\mathbb{F}}_p$-点 $a$ 与 $a^p$ 对应于底空间的同一个闭点。
一般地，对 $\mathbb{F}_p$ 上的概形 $X$，
Frobenius 态射在 $X (\overline{\mathbb{F}}_p)$ 上的不动点
恰好是 $X$ 的 $\mathbb{F}_p$-点。

Frobenius 态射的[[Kähler 微分|微分]]恒为零，
即它看起来像是处处[[分歧]]的映射。
在特征零的几何中没有这种现象。
例如，$\mathbb{A}^1$ 的 Frobenius 态射在每个
$\mathbb{F}_p$-点处的纤维都是 $p$ 重加厚的点，
即形如 $(x - a)^p = 0$ 的方程的零点集，其中 $a \in \mathbb{F}_p$。

Frobenius 态射有几种常用的版本：

- **绝对 Frobenius 态射**，即上面描述的版本；

- **相对 Frobenius 态射**：对[[相对概形]] $X \to S$，只在纤维方向取 $p$ 次方；

- **几何 Frobenius 态射**、**算术 Frobenius 态射**：
  对[[有限域]] $\mathbb{F}_q$ 上的概形 $X$，
  其基变换 $X_{\overline{\mathbb{F}}_q}$ 的 $q$ 次 Frobenius 态射可以分解为两部分，
  分别是作用在 $X$ 上的部分和作用在 $\overline{\mathbb{F}}_q$ 上的部分，
  前者的不动点恰好是 $X$ 的 $\mathbb{F}_q$-点。
  因此，有限域上[[代数簇]]的点数可以通过几何 Frobenius 态射在[[平展上同调]]上的作用计算，
  这是 [[Weil 猜想]]的证明的出发点。

## 定义

### 绝对 Frobenius 态射

::: definition [绝对 Frobenius 态射] {@def:absolute}
设 $X$ 是 $\mathbb{F}_p$ 上的[[概形]]。
则 $X$ 的**绝对 Frobenius 态射**，或简称 **Frobenius 态射**，
是如下定义的[[概形态射]] $F_X \colon X \to X$：

- 在底拓扑空间上，$F_X$ 是[[恒同映射]]。

- 在结构层上，$F_X^\sharp \colon \mathcal{O}_X \to \mathcal{O}_X$
  是 $f \mapsto f^p$。

:::

::: remark
在 $\mathcal{O}_X$ 中有 $p = 0$，
故 $f \mapsto f^p$ 是环层的同态（见 [[Frobenius 同态]]）。
又因为 $f$ 可逆当且仅当 $f^p$ 可逆，它在每个[[茎]]上是[[局部环]]的局部同态，
故 $F_X$ 是[[局部环化空间]]的态射，即[[概形态射]]。

若 $X = \operatorname{Spec} A$，
则 $F_X$ 由 $A$ 的 Frobenius 同态 $F_A \colon A \to A$ 给出。
它在素理想上的作用是 $\mathfrak{p} \mapsto F_A^{-1} (\mathfrak{p}) = \mathfrak{p}$，
由此也能看出 $F_X$ 是底空间上的恒同映射。
:::

::: remark [$q$ 次 Frobenius 态射]
设 $q = p^r$，其中 $r$ 是正整数。
则 $F_X$ 的 $r$ 次复合 $F_X^r$ 在结构层上是 $f \mapsto f^q$，
称为 $q$ 次 Frobenius 态射。
当 $X$ 是 $\mathbb{F}_q$ 上的概形时，也常直接称它为 Frobenius 态射。
:::

Frobenius 态射与所有态射交换：

::: proposition [函子性] {@prop:functorial}
设 $g \colon X \to Y$ 是 $\mathbb{F}_p$ 上概形的态射，则
$g \circ F_X = F_Y \circ g$。
:::

::: proof
两边在底空间上都是 $g$，
在结构层上都把 $f$ 映到 $g^\sharp (f)^p = g^\sharp (f^p)$。
:::

用[[函子观点]]来说，对任意 $\mathbb{F}_p$ 上的概形 $T$，
$F_X$ 在 $T$-点集 $X (T)$ 上的作用是 $x \mapsto F_X \circ x = x \circ F_T$。

### 相对 Frobenius 态射

设 $S$ 是 $\mathbb{F}_p$ 上的概形，$f \colon X \to S$ 是 $S$ 上的概形。
由 @prop:functorial，$f \circ F_X = F_S \circ f$，
因此 $F_X$ 一般不是 $S$-态射，而是在 $S$ 上“覆盖” $F_S$ 的态射。
把 $F_S$ 的作用分离出来，就得到相对 Frobenius 态射。

::: definition [相对 Frobenius 态射] {@def:relative}
设 $S$ 是 $\mathbb{F}_p$ 上的概形，$f \colon X \to S$ 是 $S$ 上的概形。
记
\[
X^{(p)} = X \times_{S, F_S} S
\]
为 $X$ 沿 $F_S$ 的[[纤维积|基变换]]，称为 $X$ 的 **Frobenius 扭转**，
它通过第二个投影成为 $S$ 上的概形。
$X$ 在 $S$ 上的**相对 Frobenius 态射**是使下图交换的唯一的 $S$-态射
$F_{X/S} \colon X \to X^{(p)}$：
\[
\begin{tikzcd}
  X \ar[drr, bend left, "F_X"]
  \ar[ddr, bend right, "f"'] \ar[dr, "F_{X/S}"] && \\
  & X^{(p)} \ar[r, "\pi"] \ar[d] & X \ar[d, "f"] \\
  & S \ar[r, "F_S"'] & S
\end{tikzcd}
\]
其中 $\pi$ 是第一个投影。
:::

直观地说，若 $X$ 由系数在 $S$ 上的方程定义，
则 $X^{(p)}$ 由把这些系数换成其 $p$ 次方所得的方程定义，
而 $F_{X/S}$ 只对坐标取 $p$ 次方。这一想法的严格陈述如下：

::: remark [局部坐标] {@rem:coordinates}
设 $S = \operatorname{Spec} R$，$X = \operatorname{Spec} A$。
则 $X^{(p)} = \operatorname{Spec} (A \otimes_{R, F_R} R)$，
$F_{X/S}$ 对应于 $R$-代数同态 $a \otimes r \mapsto r a^p$。

特别地，设 $A = R [x_1, \ldots, x_n] / (g_1, \ldots, g_m)$。
对多项式 $g = \sum_\alpha c_\alpha x^\alpha$，
记 $g^{(p)} = \sum_\alpha c_\alpha^p x^\alpha$，则
\[
X^{(p)} = \operatorname{Spec}
R [x_1, \ldots, x_n] / (g_1^{(p)}, \ldots, g_m^{(p)}) ,
\]
$F_{X/S}$ 对应于 $R$-代数同态 $x_i \mapsto x_i^p$，
而 $\pi$ 对应于 $x_i \mapsto x_i$、$c \mapsto c^p$（$c \in R$）的环同态。
这里 $F_{X/S}$ 是良定义的，因为
$g^{(p)} (x_1^p, \ldots, x_n^p) = g (x_1, \ldots, x_n)^p$。
:::

::: remark [$q$ 次相对 Frobenius 态射] {@rem:q-relative}
设 $q = p^r$，其中 $r$ 是正整数。
把 $F_S$ 换成 $F_S^r$，同样可以定义
$X^{(q)} = X \times_{S, F_S^r} S$ 及 $q$ 次相对 Frobenius 态射
$F_{X/S, q} \colon X \to X^{(q)}$。
它等于 $r$ 个相对 Frobenius 态射
$X \to X^{(p)} \to X^{(p^2)} \to \cdots \to X^{(q)}$ 的复合。
:::

相对 Frobenius 态射与态射、纤维积、基变换都相容：

::: proposition [函子性] {@prop:relative-functorial}
设 $S$ 是 $\mathbb{F}_p$ 上的概形。

1. 对 $S$-概形的态射 $g \colon X \to Y$，有
   $F_{Y/S} \circ g = g^{(p)} \circ F_{X/S}$，
   其中 $g^{(p)} = g \times_{S, F_S} S \colon X^{(p)} \to Y^{(p)}$。

2. 对 $S$-概形 $X$、$Y$，有
   $(X \times_S Y)^{(p)} = X^{(p)} \times_S Y^{(p)}$，
   且在此等同下 $F_{X \times_S Y / S} = F_{X/S} \times F_{Y/S}$。

3. 对 $S$-概形 $X$ 及 $\mathbb{F}_p$ 上概形的态射 $T \to S$，
   记 $X_T = X \times_S T$，则 $(X_T)^{(p)} = (X^{(p)})_T$，
   且在此等同下 $F_{X_T/T} = (F_{X/S})_T$。

:::

::: proof
每一条中，两边都是 $S$-态射（在第 3 条中是 $T$-态射），
且由 @prop:functorial，它们与相应的投影 $\pi$ 复合后都等于同一个态射，
即绝对 Frobenius 态射，或它与 $g$ 的复合。
由纤维积的万有性质，两边相等。
:::

### 有限域上的概形

设 $q = p^r$，其中 $r$ 是正整数，
设 $X_0$ 是[[有限域]] $\mathbb{F}_q$ 上的概形。
由于 $\mathbb{F}_q$ 中的元素都满足 $a^q = a$，
$\operatorname{Spec} \mathbb{F}_q$ 的 $q$ 次 Frobenius 态射是恒同映射，
故由 @prop:functorial，$X_0$ 的 $q$ 次 Frobenius 态射 $F_{X_0}^r$ 是 $\mathbb{F}_q$-态射。

::: definition [几何与算术 Frobenius 态射] {@def:geometric}
设 $q = p^r$，$X_0$ 是 $\mathbb{F}_q$ 上的概形，
$k = \overline{\mathbb{F}}_q$ 是 $\mathbb{F}_q$ 的[[代数闭包]]，
$X = X_0 \times_{\mathbb{F}_q} k$。
记 $\varphi \colon k \to k$ 为 $\lambda \mapsto \lambda^q$。

- $X$ 的**几何 Frobenius 态射**是 $k$-态射
  $F = F_{X_0}^r \times \operatorname{id}_{\operatorname{Spec} k}
  \colon X \to X$。

- $X$ 的**算术 Frobenius 态射**是概形的同构
  $\sigma = \operatorname{id}_{X_0} \times \operatorname{Spec} \varphi
  \colon X \to X$。

:::

几何与算术 Frobenius 态射都依赖于 $\mathbb{F}_q$-结构 $X_0$ 的选取，
而不仅依赖于 $k$-概形 $X$。

由 @prop:functorial，$X$ 的 $q$ 次 Frobenius 态射是
$F_{X_0}^r \times F_{\operatorname{Spec} k}^r$，
而 $F_{\operatorname{Spec} k}^r = \operatorname{Spec} \varphi$，因此
\[
F \circ \sigma = \sigma \circ F = F_X^r .
\]
也就是说，$X$ 的 $q$ 次 Frobenius 态射分解为作用在 $X_0$ 上的几何部分，
与作用在系数 $k$ 上的算术部分。

从相对 Frobenius 态射的角度看，在 @rem:q-relative 的记号下，
取 $S = \operatorname{Spec} k$，
则有同构 $X^{(q)} \simeq X$，该同构依赖于 $\mathbb{F}_q$-结构 $X_0$ 的选取。
在此同构下，几何 Frobenius 态射 $F$
就是 $X$ 相对于 $\operatorname{Spec} k$ 的 $q$ 次相对 Frobenius 态射
$F_{X/k, q}$。

## 例子

::: example [素域]
$\operatorname{Spec} \mathbb{F}_p$ 的 Frobenius 态射是恒同态射，
因为 $\mathbb{F}_p$ 中的元素都满足 $a^p = a$。
因此对 $\mathbb{F}_p$ 上的任意概形 $X$，
$X$ 在 $\operatorname{Spec} \mathbb{F}_p$ 上的 Frobenius 扭转就是 $X$，
绝对 Frobenius 态射就是相对于 $\operatorname{Spec} \mathbb{F}_p$
的相对 Frobenius 态射。
:::

::: example [完全域]
设 $k$ 是特征 $p$ 的[[完全域]]，即 $k$ 的 Frobenius 同态是双射。
则 $F_{\operatorname{Spec} k}$ 是概形的同构，
但当 $k \neq \mathbb{F}_p$ 时，它不是恒同映射，也不是 $k$-态射。

对 $k$ 上的概形 $X$，投影 $\pi \colon X^{(p)} \to X$ 是 $F_{\operatorname{Spec} k}$ 的基变换，
因而也是概形的同构，但一般不是 $k$-态射。
不过，若 $X = X_0 \times_{\mathbb{F}_p} k$，
其中 $X_0$ 是 $\mathbb{F}_p$-概形，
则 $X^{(p)} \simeq X$ 是 $k$-概形的同构，
在此等同下 $F_{X/k} = F_{X_0} \times \operatorname{id}_{\operatorname{Spec} k}$。
:::

::: example [仿射空间] {@ex:affine}
设 $S$ 是 $\mathbb{F}_p$ 上的概形，
$X = \mathbb{A}^n_S$ 是 $S$ 上的[[仿射空间 (代数几何)|仿射空间]]。
则 $X^{(p)} = \mathbb{A}^n_S$，$F_{X/S}$ 由 $x_i \mapsto x_i^p$ 给出。
对 $S$ 上的概形 $T$，它在 $T$-点上的作用是
\[
(a_1, \ldots, a_n) \longmapsto (a_1^p, \ldots, a_n^p) ,
\]
其中 $a_i \in \mathcal{O}_T (T)$。

当 $S = \operatorname{Spec} R$ 时，
$F_{X/S}$ 对应于含入映射
\[
R [x_1^p, \ldots, x_n^p] \hookrightarrow R [x_1, \ldots, x_n] .
\]
后者作为 $R [x_1^p, \ldots, x_n^p]$-模是[[自由模]]，
以单项式 $x_1^{a_1} \cdots x_n^{a_n}$（$0 \leq a_i < p$）为基，秩为 $p^n$。
这在几何上对应于以下事实：当 $R = \mathbb{F}_p$ 时，
$F_{X/S}$ 在 $\mathbb{F}_p$-点 $(a_1, \ldots, a_n)$ 处的纤维
由方程 $x_i^p = a_i$（$1 \leq i \leq n$）定义；
由于 $a_i^p = a_i$，这等价于 $(x_i - a_i)^p = 0$，
因此该纤维是在 $n$ 个方向上 $p$ 重[[加厚]]的点。
:::

::: example [射影空间]
设 $S$ 是 $\mathbb{F}_p$ 上的概形，
$X = \mathbb{P}^n_S$ 是 $S$ 上的[[射影空间 (代数几何)|射影空间]]。
则 $X^{(p)} = \mathbb{P}^n_S$，$F_{X/S}$ 由
$[x_0 : \cdots : x_n] \mapsto [x_0^p : \cdots : x_n^p]$ 给出。
:::

::: example [椭圆曲线]
设 $k$ 是特征 $p > 3$ 的域，
$E$ 是由方程 $y^2 = x^3 + a x + b$ 定义的[[椭圆曲线]]，其中 $a, b \in k$。
则 $E^{(p)}$ 是由 $y^2 = x^3 + a^p x + b^p$ 定义的椭圆曲线，
$F_{E/k} \colon E \to E^{(p)}$ 由 $(x, y) \mapsto (x^p, y^p)$ 给出。
由 @prop:relative-functorial 可以得出它是群概形的同态。
若 $a, b \in \mathbb{F}_p$，则 $E^{(p)} = E$，$F_{E/k}$ 是 $E$ 的自同态。
:::

::: example [Frobenius 核]
设 $R$ 是交换 $\mathbb{F}_p$-代数，$S = \operatorname{Spec} R$。
[[加法群概形|加法群]] $\mathbb{G}_\mathrm{a} = \operatorname{Spec} R [x]$ 满足
$\mathbb{G}_\mathrm{a}^{(p)} = \mathbb{G}_\mathrm{a}$，
其相对 Frobenius 态射由 $x \mapsto x^p$ 给出。其 **Frobenius 核**，
即相对 Frobenius 态射的核，是
\[
\alpha_p = \operatorname{Spec} R [x] / (x^p) .
\]
类似地，[[乘法群概形|乘法群]] $\mathbb{G}_\mathrm{m}$ 的 Frobenius 核是
$\mu_p = \operatorname{Spec} R [x] / (x^p - 1)$。
它们都是 $S$ 上有限局部自由的群概形，
但它们在 $S$ 的每点处的纤维都不是[[既约概形|既约]]的。
:::

## 性质

### 基本性质

::: proposition [万有同胚] {@prop:homeo}
设 $S$ 是 $\mathbb{F}_p$ 上的概形，$X$ 是 $S$ 上的概形。
则 $F_X$、$F_{X/S}$ 及投影 $\pi \colon X^{(p)} \to X$ 都是[[万有同胚]]。
:::

::: proof
由 @prop:functorial 与纤维积的万有性质，可以验证
\[
\pi \circ F_{X/S} = F_X , \quad
F_{X/S} \circ \pi = F_{X^{(p)}} .
\]
由于 $F_X$、$F_{X^{(p)}}$ 在底空间上是恒同映射，
$\pi$ 与 $F_{X/S}$ 是互逆的同胚。

对任意概形的态射 $Y \to X$，在上述论证中把 $S$、$X$ 分别换成 $X$、$Y$，
可知 $F_X$ 沿 $Y \to X$ 的基变换 $Y \times_{X, F_X} X \to Y$ 是同胚，
故 $F_X$ 是万有同胚。
于是 $F_S$ 的基变换 $\pi$ 也是万有同胚。
最后，由 $F_{X/S} \circ \pi = F_{X^{(p)}}$，
且 $\pi$、$F_{X^{(p)}}$ 都是万有同胚，可知 $F_{X/S}$ 也是万有同胚。
:::

::: proposition [微分为零] {@prop:differential}
设 $S$ 是 $\mathbb{F}_p$ 上的概形，$X$ 是 $S$ 上的概形。
则 $F_{X/S}$ 诱导的[[Kähler 微分]]的映射
$F_{X/S}^* \Omega_{X^{(p)}/S} \to \Omega_{X/S}$ 为零。
:::

::: proof
命题是局部的，故可设 $S = \operatorname{Spec} R$，$X = \operatorname{Spec} A$。
$\Omega_{X^{(p)}/S}$ 由 $d (a \otimes 1)$（$a \in A$）生成，
而 $F_{X/S}$ 把 $a \otimes 1$ 映到 $a^p$，且 $d (a^p) = p a^{p - 1} \, da = 0$。
:::

取 $S = \operatorname{Spec} \mathbb{F}_p$，
可知绝对 Frobenius 态射诱导的映射 $F_X^* \Omega_X \to \Omega_X$ 也为零。

::: proposition [平展态射] {@prop:etale}
设 $S$ 是 $\mathbb{F}_p$ 上的概形，$f \colon X \to S$ 是[[平展态射]]。
则 $F_{X/S}$ 是同构。换言之，下图是[[拉回 (范畴论)|拉回]]方块：
\[
\begin{tikzcd}
  X \ar[r, "F_X"] \ar[d, "f"'] & X \ar[d, "f"] \\
  S \ar[r, "F_S"'] & S
\end{tikzcd}
\]
:::

::: proof
$X^{(p)}$ 是 $X$ 的基变换，因而在 $S$ 上平展，
于是平展 $S$-概形之间的 $S$-态射 $F_{X/S}$ 也是平展态射。
由 @prop:homeo，$F_{X/S}$ 是万有同胚，特别是万有单射的满射。
平展的万有单射是[[开浸入]]，故 $F_{X/S}$ 是满的开浸入，即同构。
:::

::: remark {@rem:etale-site}
对 $\mathbb{F}_p$ 上的概形 $X$ 及平展态射 $U \to X$，
在 @prop:etale 中取 $S = X$，可知 $U \times_{X, F_X} X \simeq U$。
因此 $F_X$ 在[[平展景]]上诱导的函子 $U \mapsto U \times_{X, F_X} X$ 同构于恒同函子，
特别地，绝对 Frobenius 态射在[[平展上同调]]上诱导恒同映射。
:::

::: proposition [光滑态射] {@prop:smooth}
设 $S$ 是 $\mathbb{F}_p$ 上的概形，$X \to S$ 是相对维数为 $n$ 的[[光滑态射]]。
则 $F_{X/S}$ 是[[有限态射]]，
且 $(F_{X/S})_* \mathcal{O}_X$ 是秩为 $p^n$ 的局部自由 $\mathcal{O}_{X^{(p)}}$-模。
:::

::: proof
由于 $F_{X/S}$ 是同胚（@prop:homeo），问题在 $X$ 上是局部的。
因此可设 $X \to S$ 分解为平展态射 $g \colon X \to \mathbb{A}^n_S$
与投影 $\mathbb{A}^n_S \to S$。
记 $A = \mathbb{A}^n_S$。
由 @prop:relative-functorial，$F_{A/S} \circ g = g^{(p)} \circ F_{X/S}$。
由纤维积的万有性质可以验证
$X^{(p)} \times_{A^{(p)}, F_{A/S}} A \simeq X \times_{A, F_A} A$，
且在此等同下，$(F_{X/S}, g)$ 就是 $X$ 在 $A$ 上的相对 Frobenius 态射，
由 @prop:etale 它是同构。
因此 $F_{X/S}$ 是 $F_{A/S}$ 的基变换，由 @ex:affine 即得结论。
:::

例如，域上的[[椭圆曲线]] $E$ 的相对 Frobenius 态射 $F_{E/k}$ 是 $p$ 次的[[同源]]。

### 有限域上的概形

::: proposition [不动点] {@prop:fixed}
设 $q = p^r$，$X_0$ 是 $\mathbb{F}_q$ 上的概形，
$k = \overline{\mathbb{F}}_q$，$X = X_0 \times_{\mathbb{F}_q} k$，
$F$ 是 $X$ 的几何 Frobenius 态射。
则对正整数 $n$，$F^n$ 在 $X (k) = X_0 (k)$ 中的不动点集，
恰好是 $X_0 (\mathbb{F}_{q^n})$ 在 $X_0 (k)$ 中的像。
:::

::: proof
把 $X_0$ 换成 $X_0 \times_{\mathbb{F}_q} \mathbb{F}_{q^n}$，只需证 $n = 1$ 的情形。
点 $x \in X (k)$ 对应于 $\mathbb{F}_q$-态射 $x \colon \operatorname{Spec} k \to X_0$，
由 @prop:functorial，$F$ 把它映到
$F_{X_0}^r \circ x = x \circ \operatorname{Spec} \varphi$，
其中 $\varphi (\lambda) = \lambda^q$。
设 $x$ 的像是点 $y \in X_0$，$x$ 对应于域的嵌入 $\iota \colon \kappa (y) \to k$，
则 $x \circ \operatorname{Spec} \varphi$ 对应于 $\varphi \circ \iota$。
因此 $x$ 是不动点当且仅当 $\iota (\kappa (y))$ 中的元素都满足 $\lambda^q = \lambda$，
即 $\iota (\kappa (y)) = \mathbb{F}_q$，
这又等价于 $x$ 穿过 $\operatorname{Spec} k \to \operatorname{Spec} \mathbb{F}_q$。
:::

由证明可知，在 $X (k) = X_0 (k)$ 上，
几何 Frobenius 态射的作用与 $\varphi \in \operatorname{Gal} (k / \mathbb{F}_q)$ 的作用
$x \mapsto x \circ \operatorname{Spec} \varphi$ 相同。
但在上同调上，两者的作用互逆：

::: proposition {@prop:inverse}
记号同 @def:geometric，设 $\ell \neq p$ 是素数。
则 $F$ 与 $\sigma$ 在 [[$\ell$ 进上同调]] $H^i (X, \mathbb{Q}_\ell)$ 上诱导的映射
$F^*$、$\sigma^*$ 互逆。
:::

::: proof
由 $F \circ \sigma = \sigma \circ F = F_X^r$，
以及绝对 Frobenius 态射在平展上同调上诱导恒同映射（@rem:etale-site）即得。
:::

因此，$\varphi^{-1} \in \operatorname{Gal} (k / \mathbb{F}_q)$
也称为**几何 Frobenius 元**，
而 $\varphi$ 称为**算术 Frobenius 元**。

## 应用

### 有限域上的点数

设 $X_0$ 是 $\mathbb{F}_q$ 上的[[分离态射|分离]][[有限型态射|有限型]]概形，
$k = \overline{\mathbb{F}}_q$，$X = X_0 \times_{\mathbb{F}_q} k$，
$F$ 是 $X$ 的几何 Frobenius 态射，$\ell \neq p$ 是素数。
由 @prop:fixed，$X_0$ 的 $\mathbb{F}_{q^n}$-点就是 $F^n$ 的不动点。
[[Grothendieck 迹公式]]把不动点的个数表示为 $F^n$ 在上同调上的迹：
\[
\# X_0 (\mathbb{F}_{q^n})
= \sum_i (-1)^i \operatorname{tr}
\bigl( (F^n)^* \bigm| H^i_\mathrm{c} (X, \mathbb{Q}_\ell) \bigr) ,
\]
其中 $H^i_\mathrm{c}$ 是紧支[[平展上同调]] [@Deligne1977, Rapport]。
这类似于 [[Lefschetz 不动点定理]]；
由于 $F$ 的微分为零（@prop:differential），每个不动点只计一次。
由此可以得到 $X_0$ 的 [[Weil $\zeta$ 函数]]的有理性，这是 [[Weil 猜想]]的一部分。

### 有限域上的代数群

设 $G_0$ 是 $\mathbb{F}_q$ 上的[[光滑概形|光滑]][[连通概形|连通]][[代数群]]，
$k = \overline{\mathbb{F}}_q$，$G = G_0 \times_{\mathbb{F}_q} k$，
$F$ 是 $G$ 的几何 Frobenius 态射。
由 @prop:fixed，$F$ 的不动点构成有限群 $G_0 (\mathbb{F}_q)$。
当 $G_0$ 是[[约化群]]时，这样的有限群（例如 $\mathrm{GL}_n (\mathbb{F}_q)$）
是 [[Lie 型有限群]]的主要例子。
[[Lang 定理]]断言映射 $G \to G$，$g \mapsto F (g) g^{-1}$ 是满射，
这是研究这些有限群的基本工具。
[[Deligne–Lusztig 理论]]则利用由 Frobenius 态射定义的 [[Deligne–Lusztig 簇]]，
构造这些有限群的表示。

### Cartier 同构

设 $X \to S$ 是 $\mathbb{F}_p$ 上概形的光滑态射。
由 @prop:differential，de Rham 复形 $\Omega_{X/S}^\bullet$ 的微分
关于 $\mathcal{O}_{X^{(p)}}$ 是线性的，
因此可以把 $(F_{X/S})_* \Omega_{X/S}^\bullet$
看作 $\mathcal{O}_{X^{(p)}}$-模的复形。
[[Cartier 算子|Cartier 同构]]断言其上同调层为
$\Omega^i_{X^{(p)}/S}$。

## 推广

用函子观点，Frobenius 态射可以推广到 $\mathbb{F}_p$ 上概形范畴上的任意函子 $X$：
对 $\mathbb{F}_p$ 上的概形 $T$，
定义 $F_X \colon X (T) \to X (T)$ 为 $x \mapsto x \circ F_T$。
由 @prop:functorial，对概形而言，这与 @def:absolute 一致。
这样就可以定义[[代数空间]]、[[代数叠]]等的 Frobenius 态射。

在混特征中，例如对 $\mathbb{Z}_p$ 上的概形，Frobenius 态射没有直接的类比，
但可以考虑 **Frobenius 提升**，即模 $p$ 后等于 Frobenius 态射的自同态。
对没有 $p$-[[挠元]]的环，Frobenius 提升与 [[$\delta$-环]]结构一一对应。
这类结构在 [[Witt 环]]、[[晶体上同调]]、[[棱镜上同调]]中起重要作用。

## 参考文献

```bibliography
Deligne1977:
  type: book
  author: Pierre Deligne
  title: Cohomologie étale
  language: fr
  year: 1977
  series: Lecture Notes in Mathematics
  volume: 569
  publisher: Springer
  label: SGA 4½
```

```terms
Frobenius 态射:
  en: [Frobenius, Frobenius morphism]
  fr: [Frobenius :m, morphisme de Frobenius :m]
  de: [Frobenius :m, Frobeniusmorphismus :m]
  ja: [Frobenius 射<しゃ>, Frobenius 写<しゃ>像<ぞう>]
  ko: Frobenius 사상
绝对 Frobenius 态射:
  en: absolute Frobenius
  fr: Frobenius absolu :m
  de: absoluter Frobenius :m
  ja: 絶<ぜっ>対<たい> Frobenius 写<しゃ>像<ぞう>
  ko: 절대 Frobenius 사상
相对 Frobenius 态射:
  en: relative Frobenius
  fr: Frobenius relatif :m
  de: relativer Frobenius :m
  ja: 相<そう>対<たい>的<てき> Frobenius 写<しゃ>像<ぞう>
  ko: 상대 Frobenius 사상
Frobenius 扭转:
  en: Frobenius twist
几何 Frobenius 态射:
  en: geometric Frobenius
  fr: Frobenius géométrique :m
  de: geometrischer Frobenius :m
  ja: 幾<き>何<か>学<がく>的<てき> Frobenius 写<しゃ>像<ぞう>
  ko: 기하 Frobenius 사상
算术 Frobenius 态射:
  en: arithmetic Frobenius
  fr: Frobenius arithmétique :m
  de: arithmetischer Frobenius :m
  ja: 数<すう>論<ろん>的<てき> Frobenius 写<しゃ>像<ぞう>
  ko: 산술 Frobenius 사상
Frobenius 核:
  en: Frobenius kernel
  fr: noyau de Frobenius :m
几何 Frobenius 元:
  en: geometric Frobenius element
算术 Frobenius 元:
  en: arithmetic Frobenius element
```
