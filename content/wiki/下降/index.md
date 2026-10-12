---
title: 下降
aliases: [下降理论]
categories: [层论]
navboxes: [层论]
---

**下降**是[[范畴论]]和[[代数几何]]中的一般方法，
指的是对[[景]]中一对象 $X$，
从 $X$ 的一个覆盖  $\{ U_i\to X \}$ 上对象及性质来得到 $X$
上对象及性质。由于我们将 $\{ U_i \}$ 视为在“上面”，
下降因此得名。

下降就是用各种拓扑下的局部信息来得到整体信息，所以其应用非常广泛。
[[交换代数]]研究[[局部性质]]时化归到[[局部环]]，
[[平展上同调]]中化归到[[严格 Hensel 局部环]]，
[[Hodge 理论]]中用[[奇点消解]]定义混合 Hodge 理论，
无不体现下降的威力。

## 定义

[[景]]有用覆盖和用筛两种定义，下降也类似。
这里用筛也是更为一般的。下设 $\mathcal{C}$、$\mathcal{D}$
是[[范畴]]，$\mathcal{D}$ 有任意[[极限 (范畴论)|极限]]，
并设 $\mathcal{F}$ 是 $\mathcal{C}$ 上取值在
$\mathcal{D}$ 的[[预层]]。

::: definition [沿覆盖下降]
设 $X$ 是 $\mathcal{C}$ 中对象，$\{U_i\to X\}_{i\in I}$
是一族态射，满足[[纤维积]] $U_{ij}=U_i\times_XU_j$
存在，对任意 $i,j\in I$。称 $\mathcal{F}$ 对
$\{U_i\to X\}_{i\in I}$ 满足下降，或称 $\mathcal{F}$
能沿 $\{U_i\to X\}_{i\in I}$ 下降，指的是图表
$$
\mathcal{F}(X)\to\prod_{i\in I}\mathcal{F}(U_i)
\rightrightarrows\prod_{i,j\in I}\mathcal{F}(U_{ij})
$$
是[[等子]]。展开来说，就是对任一族
$(s_i\in\mathcal{F}(U_i))_{i\in I}$ 满足
$s_i|_{U_{ij}}=s_j|_{U_{ij}}$，都存在唯一
$s\in\mathcal{F}(X)$ 使得 $s|_{U_i}=s_i$。
参见[[层]]条目中的层公理。
:::

::: remark
设 $\mathcal{C}$ 中有[[余积]]且与纤维积满足分配律
$$
\left(\coprod_{i\in I}U_i\right)\times_X
\left(\coprod_{j\in J}V_j\right)=
\coprod_{i\in I,\,j\in J}U_i\times_XV_j,
$$
而 $\mathcal{F}$ 把余积变为积。则依定义容易发现，
$\mathcal{F}$ 对 $\{U_i\to X\}_{i\in I}$ 满足下降，
当且仅当它对一个映射 $\coprod_{i\in I}U_i\to X$
满足下降。
:::

::: definition [沿筛下降]
设 $X$ 是 $\mathcal{C}$ 中对象，$S\subseteq h_X$
是 $X$ 上的[[筛]]。称 $\mathcal{F}$ 对 $S$ 满足下降，
或称 $\mathcal{F}$ 能沿 $S$ 下降，指的是
$$
\mathcal{F}(X)=\lim_{(f\colon U\to X)\in S(U)}
\mathcal{F}(U).
$$
参见[[层]]条目中的层公理。
:::

## 例子

::: example
取 $\mathcal{D}=\mathsf{Set}$，
下降就是[[映射]]和[[截面]]的粘合：

- 固定[[集合]] $A$，取 $\mathcal{C}=
      \mathsf{Set}$，$\mathcal{F}(X)=\operatorname{Hom}(X,A)$。
  则只要映射族 $\{U_i\to X\}_{i\in I}$ 合起来满，
  $\mathcal{F}$ 就能沿它下降。

- 固定[[拓扑空间]] $X$ 以及映射 $f\colon Y\to X$。
  取 $\mathcal{C}=\mathsf{Open}(X)$ 为 $X$
  的开子集沿含入映射组成的范畴，
  $$
  \mathcal{F}(U)=\{s\colon U\to f^{-1}(U)\mid
  f\circ s=\operatorname{id}_U\},
  $$
  即 $U$ 上的连续截面。则只要 $\{U_i\to U\}_{i\in I}$
  构成 $U$ 的开覆盖，$\mathcal{F}$ 就能沿它下降。
  这是连续截面沿开覆盖粘合。

- 对概形 $S$ 及其上拟凝聚层 $\mathcal{F}$，
  取 $\mathcal{C}=\mathsf{Sch}_S$
  为 $S$ 上[[概形]]范畴，
  $$
  \mathcal{F}(f\colon X\to S)
  =\Gamma(X,f^*\mathcal{F}),
  $$
  则 $\mathcal{F}$ 可沿 [[平坦景|fpqc 覆盖]]下降。
  这是[[拟凝聚层]]截面的[[平坦下降]]。

- 对概形 $S$ 及其上[[平展层]] $\mathcal{F}$，
  取 $\mathcal{C}=\mathsf{Sch}_S$ 为 $S$ 上概形范畴，
  $$
  \mathcal{F}(f\colon X\to S)
  =\Gamma(X,f^{-1}\mathcal{F}),
  $$
  则 $\mathcal{F}$ 可沿[[泛商态射]]下降。
  这是能沿比 fpqc 更细的拓扑下降的一个例子。

:::

::: example
取 $\mathcal{D}=\mathsf{Cat}$，把等子图表按
[[$2$-范畴]]理解，下降就是对象的粘合：

- 固定拓扑空间 $X$，取 $\mathcal{C}=\mathsf{Open}(X)$，
  $$
  \mathcal{F}(U)=\{(V,f)\mid V\in\mathsf{Top},\,
  f\colon V\to U\},
  $$
  则 $\mathcal{F}$ 可沿开覆盖下降。
  这是[[相对观点|相对]]空间的粘合。

- 固定概形 $X$，取 $\mathcal{C}=\mathsf{Open}(X)$，
  $$
  \mathcal{F}(U)=\{(V,f)\mid V\in\mathsf{Sch},\,
  f\colon V\to U\},
  $$
  则 $\mathcal{F}$ 可沿开覆盖下降。
  这是相对概形的粘合。

- 固定拓扑空间 $X$，取 $\mathcal{C}=\mathsf{Open}(X)$，
  $$
  \mathcal{F}(U)=\{\mathcal{O}_U\in\mathsf{Sh}
  (U,\mathsf{CRing})\mid(U,\mathcal{O}_U)\in
  \mathsf{Sch}\},
  $$
  则 $\mathcal{F}$ 可沿开覆盖下降。
  这是绝对概形的粘合。

- 固定概形 $X$，取 $\mathcal{C}=\mathsf{Sch}_X$，
  $$
  \mathcal{F}(U)=\mathsf{QCoh}(U),
  $$
  则 $\mathcal{F}$ 可沿 [[平坦景|fpqc 覆盖]]下降。
  这是拟凝聚层的[[平坦下降]]。

:::

## 性质

设 $\mathcal{C}$、$\mathcal{D}$
是[[范畴]]，$\mathcal{D}$ 有任意[[极限 (范畴论)|极限]]，
并设 $\mathcal{F}$ 是 $\mathcal{C}$ 上取值在
$\mathcal{D}$ 的[[预层]]。

::: proposition
如映射族 $\{U_i\to X\}_{i\in I}$ 和
$\{V_j\to X\}_{j\in J}$ 满足：

- 它们在 $X$ 上的[[纤维积]]都存在；

- $\{U_i\to X\}_{i\in I}$ 是
  $\{V_j\to X\}_{j\in J}$ 的[[加细]]；

- $\mathcal{F}$ 对 $\{U_i\to X\}_{i\in I}$
  满足下降；

- 对任意 $j\in J$，态射
  $\mathcal{F}(V_j)\to\prod_{i\in I}
      \mathcal{F}(U_i\times_XV_j)$ 为单射；

则 $\mathcal{F}$ 也对 $\{V_j\to X\}_{j\in J}$ 满足下降。
:::

注意只要 $\mathcal{F}$ 对 $\{U_i\times_XV_j\to
V_j\}_{i\in I}$ 满足下降，这里最后一条就会自动满足。

::: proof
依[[加细]]的定义取 $\varphi\colon I\to J$ 以及映射
$U_i\to V_{\varphi(i)}$。作交换图
\[
\begin{tikzcd}
  \mathcal{F}(X)\ar[r]\ar[d,equal]&
  \prod_{j\in J}\mathcal{F}(V_j)
  \ar[r,shift left]\ar[r,shift right]\ar[d]&
  \prod_{j_0,j_1\in J}\mathcal{F}(V_{j_0}\times_XV_{j_1})\ar[d]\\
  \mathcal{F}(X)\ar[r]&
  \prod_{i\in I}\mathcal{F}(U_i)
  \ar[r,shift left]\ar[r,shift right]&
  \prod_{i_0,i_1\in I}\mathcal{F}(U_{i_0}\times_XU_{i_1})
\end{tikzcd}
\]
其中中间的箭头是 $(s_j)_{j\in J}\mapsto
  (s_{\varphi(i)}|_{U_i})_{i\in I}$，右边的类似。
要从下面一行是等子推出上面一行也是。用
[[Yoneda 引理]]可设 $\mathcal{D}=\mathsf{Set}$。

首先由 $\mathcal{F}(X)\to\prod_{i\in I}\mathcal{F}(U_i)$
是单射，可得 $\mathcal{F}(X)\to
  \prod_{j\in J}\mathcal{F}(V_j)$ 是单射，于是有唯一性。
欲证存在性，设
$(s_j)_{j\in J}\in\prod_{j\in J}\mathcal{F}(V_j)$
沿两个箭头在 $\prod_{j_0,j_1\in J}\mathcal{F}(V_{j_0}\times_XV_{j_1})$
中的像一样，则它打下来到 $\prod_{i\in I}\mathcal{F}(U_i)$
之后，亦沿两个箭头在
$\prod_{i_0,i_1\in I}\mathcal{F}(U_{i_0}\times_XU_{i_1})$
中的像一样。这样由条件就得到元素 $s\in\mathcal{F}(X)$。
要证 $s|_{V_j}=s_j$。由条件只需对每个 $i\in I$ 证明
$s|_{U_i\times_XV_j}=s_j|_{U_i\times_XV_j}$。
依定义 $s|_{U_i}=s_{\varphi(i)}|_{U_i}$，所以由
$(s_j)_{j\in J}\in\prod_{j\in J}\mathcal{F}(V_j)$
沿两个箭头在 $\prod_{j_0,j_1\in J}\mathcal{F}(V_{j_0}\times_XV_{j_1})$
中的像一样，便有
$$
s_j|_{U_i\times_XV_j}=
(s_j|_{V_{\varphi(i)}\times_XV_j})|_{U_i\times_XV_j}=
(s_{\varphi(i)}|_{V_{\varphi(i)}\times_XV_j})
|_{U_i\times_XV_j}=
(s_{\varphi(i)}|_{U_i})|_{U_i\times_XV_j}=
(s|_{U_i})|_{U_i\times_XV_j}=s|_{U_i\times_XV_j}.
$$
:::

::: corollary
若$\mathcal{F}$对复合映射$U \to V \to X$和纤维积$U \times_X V \to V$满足下降，
则它自动对后一映射$V \to X$满足下降。
:::

::: corollary
如映射 $V\to X$ 有截面且 $V\times_XV$ 存在，
则每个预层都能沿该映射下降。
:::

::: proof
只需注意到

- 有截面相当于被 $\operatorname{id}$ 加细；

- 每个预层都能沿 $\operatorname{id}$ 下降；

- 有截面这一条件在基变换下封闭；

即可得到结论。
:::

::: corollary
固定概形 $X$。对 $\mathsf{Sch}_X$ 上的预层 $\mathcal{F}$，

- $\mathcal{F}$ 是光滑层当且仅当它是平展层。

- $\mathcal{F}$ 是 fppf 层当且仅当它可沿[[拟有限态射|拟有限]]
  fppf 覆盖下降。

:::

下面的定理是上面的命题的筛版本，可用来作范畴的[[典范拓扑]]。

::: theorem
称 $\mathcal{C}$ 中的筛 $S\subseteq h_X$ 为
$\mathcal{F}$-筛，指的是对任意 $Y\in\mathcal{C}$
以及 $f\colon Y\to X$，
$\mathcal{F}$ 都可沿筛 $f^*S\subseteq h_Y$ 下降。
则 $\mathcal{C}$ 关于 $\mathcal{F}$-筛构成景，
且这是使 $\mathcal{F}$ 是层的最细的景。
:::

## 范畴的下降

从此处起，范畴均指 [[$(\infty,1)$-范畴]]。
对于具有任意拉回的范畴 $\mathcal{C}$，
考虑函子
\[
\mathcal{C}_{/-} \colon \mathcal{C}^{\operatorname{op}} \to \mathsf{Cat}, X \mapsto \mathcal{C}_{/X}, (f \colon X \to Y) \mapsto (f^* \colon \mathcal{C}_{/Y} \to \mathcal{C}_{/X})
\]
此时可将该函子视为范畴值预层。
因此，可讨论该函子的下降。

::: definition
令 $\mathcal{C}$ 为具有任意拉回且具有所论余极限的范畴，
考虑函子 $X_{\bullet} \colon \mathcal{I} \to \mathcal{C}$，
记 $X \coloneqq \operatorname{colim}_{i \in I} X_i$。
称该 $\mathcal{C}$ 对 $X$ 满足下降，
指的是
\[
\mathcal{C}_{/X} \simeq \operatorname{lim}_i \mathcal{C}_{/X_i}.
\]
此时也称余极限 $X$ 是 **van Kampen** 的。
:::

该定义可用以刻画[[(∞,1)-意象|意象]]。

::: proposition
令 $\mathcal{T}$ 为[[可表现范畴]]，
则 $\mathcal{T}$ 为意象当且仅当 $\mathcal{T}$ 对其上所有的余极限均满足下降。
:::

```terms
下降:
  en: descent
  de: Abstieg :m
  fr: descente :f
```
