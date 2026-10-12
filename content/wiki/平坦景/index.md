---
title: 平坦景
aliases: [Fpqc 景, Fppf 景, 平坦拓扑, Fppf, Fpqc]
categories: [概形论]
---

在[[代数几何]]中，
**平坦景**是[[概形]]范畴上 [[Zariski 景|Zariski 拓扑]]的高度[[加细]]，
这使其在[[模空间]]和 [[$p$-可除群]]理论中有广泛应用。
此外，平坦景的拓扑不至于过细，在此景上一些粘接性质仍然成立，
这些性质称为[[平坦下降]]。

常用的平坦景有 **fppf 景**和 **fpqc 景**两种，
其拓扑分别称为 **fppf 拓扑**和 **fpqc 拓扑**。
概形范畴上的其它常用拓扑列举如下，
按由粗到细排列：

[[Zariski 景|Zariski]] $<$
[[Nisnevich 景|Nisnevich]] $<$
[[平展景|平展]] $<$
[[光滑景|光滑]] $<$
[[合割景|合割]] $<$
**fppf** $<$
**fpqc**

## 定义

::: definition
$X$ 上的**大 fppf 景**（fppf 全称**忠实平坦有限表现**）为

- 对象：所有[[有限表现]]态射 $Y \to X$。

- 态射：与 $X$-概形结构相容的态射。

- 开覆盖为以下两类开覆盖的复合：

  - [[Zariski 拓扑]]下的开覆盖 $\{ U_i \to U \}_{i \in I}$。

  - [[平坦]]、[[满]]、[[有限表现]]态射 $V \to U$。

$X$ 上的**大 fpqc 景**（fpqc 全称**忠实平坦拟紧**）
与大 fppf 景类似，只是将其中的“有限表现”性质换为“[[拟紧]]”。
二者统称为 $X$ 上的**大平坦景**。
:::

::: definition
- $X$ 上的**小 fppf 景**，
  简称 **fppf 景**为由所有[[平坦]]、[[有限表现]]态射构成的子景，
  记为 $X_{\mathrm{fppf}}$。

- $X$ 上的**小 fpqc 景**，
  简称 **fpqc 景**为由所有[[平坦]]、[[拟紧]]态射构成的子景，
  记为 $X_{\mathrm{fpqc}}$。

二者统称为 $X$ 上的**平坦景**。
:::

::: definition
对态射 $X \to Y$，其诱导相应的平坦景之间的态射
\[
X_{\mathrm{fppf}} \to Y_{\mathrm{fppf}}.
\]
由 $U \mapsto U \times_Y X$ 给出。
:::

## 性质

::: proposition
对[[代数闭域]] $k$ 上的大平坦景，$\operatorname{Spec}(k)$ 是其终对象。
且对小 fppf 景中任意对象 $X$，存在足够态射 $\operatorname{Spec}(k) \to X$。
:::

下面的性质反映了平坦景上的粘接性质。

::: proposition
在平坦景上可以构造一系列[[叠]]，例如
\[
\begin{gathered}
  X \mapsto \mathsf{QCoh}(X) \\
  X \mapsto \mathsf{Aff}(X)
\end{gathered}
\]
二者分别代表 $X$ 上所有[[拟凝聚层]]和[[仿射态射]]构成的范畴。
:::

```terms
平坦景:
  en: flat site
  fr: site plat
忠实平坦有限表现:
  en: faithfully flat of finite presentation
  fr: fidèlement plat de présentation finie
忠实平坦拟紧:
  en: faithfully flat and quasi-compact
  fr: fidèlement plat et quasi-compact
```
