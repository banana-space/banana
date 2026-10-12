---
title: 层
aliases: [层公理]
categories: [层论]
navboxes: [层论]
---

**层**赋予几何对象以代数结构。
[[拓扑空间]] $X$ 上的层给每个[[开集]] $U \subset X$ 赋予一个[[集合]]。
例如，空间上的[[函数层]]给开集 $U$ 赋予 $U$ 上所有[[函数]]的集合。
又例如，[[向量丛]]也可以看成层，它给开集 $U$ 赋予 $U$ 上该向量丛所有[[截面]]的集合。

具体地说，层是满足“局部决定整体”性质的[[预层]]：
对任一开集 $U$ 及 $U$ 的任一[[开覆盖]]，
$U$ 的每个截面都能由开覆盖中的小开集上截面拼成；
在每个小开集上选一截面，若它们在重叠处吻合，则能拼出 $U$ 上的截面。
换言之，$U$ 的截面由小开集上的截面所决定。
这种性质也被称为**层公理**。

层也可以定义在[[景]]上。
景上的集合层可以看作景中的[[广义对象]]，
即局部看似景中对象，而实际不一定在景中的对象。
这些层全体构成一[[意象]]。

## 定义

### 拓扑空间上的层

::: definition [层] {@def-sheaf-top}
设 $X$ 是[[拓扑空间]]，
$\mathcal{D}$ 是[[范畴]]，
设 $\mathcal{F}$ 是 $X$ 上的取值于 $\mathcal{D}$ 的[[预层]]。
满足如下条件的预层 $\mathcal{F}$ 被称为一个**层**：
对任意开集 $U \subset X$，
以及 $U$ 的任意[[开覆盖]] $( U_i \hookrightarrow U )_{i \in I}$，
图表
\[
\mathcal{F} (U)
\to \prod_{i \in I} \mathcal{F} (U_i)
\rightrightarrows \prod_{j,k \in I} \mathcal{F} (U_j \cap U_k)
\]
都是[[等子]]图表，其中

- 左边的箭头将 $\mathcal{F} (U)$ 限制到每个 $\mathcal{F} (U_i)$。

- 右边上方的箭头将每个 $\mathcal{F} (U_i)$ 限制到每个 $\mathcal{F} (U_i \cap U_k)$。

- 右边下方的箭头将每个 $\mathcal{F} (U_i)$ 限制到每个 $\mathcal{F} (U_j \cap U_i)$。

此图表称为**层公理**。
:::

::: remark {@rem-sheaf-equiv}
若 $\mathcal{D}$ 是[[集合范畴]] $\mathsf{Set}$，
或是由带有额外结构的集合构成的范畴，
例如 [[Abel 群范畴|$\mathsf{Ab}$]]，
[[交换环范畴|$\mathsf{CRing}$]] 等，
那么 @def-sheaf-top 中的等子图表等价于下列条件：

设 $U \subset X$ 是开集，
$( U_i \hookrightarrow U )_{i \in I}$ 是 $U$ 的开覆盖。

- （**粘接性质**）
  若对每个 $i \in I$ 给定了截面 $s_i \in \mathcal{F}(U_i)$，
  使得对任意 $i, j \in I$，
  都有 $s_i |_{U_i \cap U_j} = s_j |_{U_i \cap U_j}$，
  那么存在 $s \in \mathcal{F}(U)$，
  使得对任意 $i \in I$，都有 $s_i = s|_{U_i}$。

- （**唯一性**）
  若两个截面 $s, s' \in \mathcal{F}(U)$
  满足对任意 $i \in I$ 都有 $s|_{U_i} = s'|_{U_i}$，
  则 $s = s'$。

:::

::: definition
当范畴 $\mathcal{D}$ 取为某一类数学对象构成的范畴时，此层由此类数学对象命名。例如：

- $\mathcal{D}$ 为 [[Abel 群]]的范畴 $\mathsf{Ab}$ 时，
  此层被称为 **Abel 层**，

- $\mathcal{D}$ 取为[[交换环]]的范畴 $\mathsf{CRing}$ 时，
  此层被称为**环层**。

如此等等。
:::

::: definition
$X$ 上所有取值在 $\mathcal{D}$ 上的层构成一范畴，
记作 $\mathsf{Sh}(X, \mathcal{D})$，
当 $\mathcal{D}$ 为[[集合范畴]]时简记为 $\mathsf{Sh}(X)$，
称为 $X$ 的 **[[意象]]**。
:::

### 景上的层

[[景]]是[[拓扑空间]]的推广，在景上同样可以定义层。
我们叙述两个版本的定义，
第一个版本适用于通过覆盖而定义的景，第二个版本适用于一般的景。

::: definition {@def-sheaf-site}
设 $\mathcal{C}$ 是由覆盖定义的[[景]]，
$\mathcal{D}$ 是[[范畴]]，
设 $\mathcal{F}$ 是 $\mathcal{C}$ 上的取值于 $\mathcal{D}$ 的[[预层]]。
满足如下条件的预层 $\mathcal{F}$ 被称为**层**：
对任意对象 $U \in \mathcal{C}$，
以及 $U$ 的任意[[景|覆盖]] $( U_i \to U )_{i \in I}$，
图表
\[
\mathcal{F} (U)
\to \prod_{i \in I} \mathcal{F} (U_i)
\rightrightarrows \prod_{j,k \in I}
\mathcal{F} (U_j \times_U U_k)
\]
都是[[等子]]图表，其中

- 左边的箭头将 $\mathcal{F} (U)$ 限制到每个 $\mathcal{F} (U_i)$。

- 右边上方的箭头由投影 $U_i \times_U U_k \to U_i$ 诱导。

- 右边下方的箭头由投影 $U_j \times_U U_i \to U_i$ 诱导。

此图表称为**层公理**。
:::

::: definition
对景 $(\mathcal{C},J)$ 和范畴 $\mathcal{D}$，
称 $\mathcal{C}$ 上预层 $\mathcal{F}$ 为**层**，
指对任意 $U\in\mathcal{C}$ 及其覆盖筛 $S\in J(U)$，都有
$$
\mathcal{F}(U)=
\lim_{(f\colon V\to U)\in S(V)}\mathcal{F}(V).
$$
上式右边的指标范畴实际上就是[[筛]]视为满子范畴。
:::

以上定义中默认提及的极限都在 $\mathcal{D}$ 中存在。
熟悉筛的读者不难发现，覆盖定义的层公理实际上就是一般定义的层公理的展开。

另外，当景取为[[拓扑空间]] $X$ 上所有开集构成的景 $\mathsf{Open}(X)$ 时，
上述定义即化为[[拓扑空间]]上层的定义。

::: remark
上述 @rem-sheaf-equiv 中给出的等价叙述同样适用于由覆盖定义的[[景]]。
只需将开覆盖换为[[景]]中覆盖，交集换为[[纤维积]]即可。
:::

::: definition
对[[景]] $\mathcal{C}$ 上的两个取值在 $\mathcal{D}$ 上的层，
其间**同态**定义为[[预层]]间的同态，
也即[[函子]]间的[[自然变换]]。
:::

::: definition
景 $\mathcal{C}$ 上的所有取值在 $\mathcal{D}$
上的层以及它们之间的同态构成一[[范畴]]，称为 $\mathcal{C}$
上的 $\mathcal{D}$ **层范畴**。
记作 $\mathsf{Sh}(\mathcal{C}, \mathcal{D})$，
当 $\mathcal{D}$ 是[[集合范畴]]时简记为 $\mathsf{Sh}(\mathcal{C})$，
称为 $\mathcal{C}$ 的 **[[意象]]**。
:::

## 性质

::: proposition [函子性]
对拓扑空间或景之间的态射 $f \colon X \to Y$，
存在一对伴随函子
\[
f^{-1} \dashv f_*, \quad \mathsf{Sh}(X) \leftrightarrows \mathsf{Sh}(Y).
\]
$f^{-1}$ 和 $f_*$ 分别称为层的[[拉回层]]和[[前推层]]，
且 $f^{-1}$ 是[[正合函子|正合]]的，$f_*$ 是[[左正合函子|左正合]]的。

换言之，拓扑空间（或景）间的态射诱导了相应的[[意象]]间的态射。
:::

::: proof
参见[[前推层]]、[[拉回层]]。
:::

## 例子

- [[局部截面层]]
- [[光滑函数层]]
- [[全纯函数层]]
- [[亚纯函数层]]
- [[正则函数层]]
- [[微分形式层]]

```terms
层:
  en: sheaf
  de: Garbe :f
  fr: faisceau :m
  la: fascis :m
```
