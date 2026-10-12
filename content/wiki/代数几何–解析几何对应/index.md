---
title: 代数几何–解析几何对应
aliases: [GAGA, 代数几何与解析几何, 代数几何-解析几何对应]
categories: [复代数几何]
navboxes: [代数几何]
---

**代数几何–解析几何对应**（法文简称 **GAGA**）
是联系[[复数|复]][[代数几何]]与[[复解析几何]]的一系列结论。
复代数几何研究的对象是[[复数|复]][[代数簇]]，
也就是[[仿射空间 (代数几何)|仿射空间]] $\mathbb{C}^n$ 中[[多项式]]的零点集拼成的空间。
而这些零点集也可以视为[[复解析空间]]，
也就是可能带有[[奇点]]的[[复流形]]。
因此，每个复代数簇 $X$ 都有其对应的复解析空间 $X^{\mathrm{an}}$，
称为其[[解析化]]。
两者具有不同的[[拓扑空间|拓扑]]：前者使用 [[Zariski 拓扑]]，
而后者使用通常的拓扑，例如复流形上的拓扑。
但由于 $X$ 与 $X^{\mathrm{an}}$ 本质上是同样的空间，故它们应具有同样的性质，
这些性质分别通过代数几何、解析几何表述出来，就能得到一些不平凡的结论。

这种不平凡性常常来自于复几何的某种“刚性”。
例如，某些[[复流形]]是代数的，即它是某个代数簇的解析化。
然而，复流形上的[[全纯函数]]并不对应于代数簇上的[[正则函数]]，
例如复流形 $\mathbb{C}$ 上就有很多“不代数”的全纯函数，
例如[[指数函数]] $\exp \colon \mathbb{C} \to \mathbb{C}$。
但是，如果加上某些[[紧合态射|紧合]]的假设，就能使得这些反例不再存在。
例如，[[Liouville 定理]]说明，紧复流形上的全纯函数都是[[常数函数]]，从而都是正则函数。
又例如，复流形 $\mathbb{C}^2$ 的子流形 $\{ y = \exp (x) \}$ 不是代数的，
但对于代数的紧复流形而言，例如对复[[射影空间]] $\mathbb{CP}^n$，
则由[[周定理]]，其闭子流形也都是代数的。

## 主要结论

### 对应定理

**代数几何–解析几何对应定理**，常简称 **GAGA 定理**，
是指下面的关于[[凝聚层]]的结论。

::: theorem [对应定理] {@thm:对应定理}
设 $X$ 是[[紧合态射|紧合]][[复数|复]][[代数簇]]，
$X^{\mathrm{an}}$ 为其[[解析化]]。
则有[[范畴等价]]
\[
\begin{aligned}
  \mathsf{Coh}(X) & \overset{\sim}{\longrightarrow}
  \mathsf{Coh}(X^{\mathrm{an}}), \\
  \mathcal{F} & \longmapsto \mathcal{F}^{\mathrm{an}},
\end{aligned}
\]
这里 $\mathsf{Coh}$ 表示[[凝聚层]]范畴，
$\mathcal{F}^{\mathrm{an}}$ 表示 $\mathcal{F}$ 的解析化。
并且，对任何 $\mathcal{F} \in \mathsf{Coh}(X)$ 和 $i \geq 0$，有
\[
H^i (X, \mathcal{F}) \simeq
H^i (X^{\mathrm{an}}, \mathcal{F}^{\mathrm{an}}).
\]
即相应的[[层上同调]]相同。
:::

### 周定理

[[周定理]]说明，[[复数|复]][[代数簇]]中的闭子解析空间都是代数的，即都是[[闭子簇]]。

::: theorem [周定理]
设 $X$ 是[[紧合态射|紧合]][[复数|复]][[代数簇]]，
记它的[[解析化]]为 $X^{\mathrm{an}}$。
则 $X$ 的[[闭子簇]]和
$X^{\mathrm{an}}$ 的闭子解析空间一一对应。
:::

### 比较定理

::: theorem [平展–奇异比较]
设 $X$ 是[[复数|复]][[代数簇]]，记 $X^{\mathrm{an}}$ 为它的[[解析化]]，$A$ 为环
$\mathbb{Z} / n \mathbb{Z}$、$\mathbb{Z}_p$、$\mathbb{Q}_p$ 之一。
则有环同构
\[
H^\bullet_{\text{平展}} (X; A) \simeq
H^\bullet_{\text{奇异}} (X^{\mathrm{an}}; A),
\]
其中左边表示[[平展上同调]]，右边表示[[奇异上同调]]。
:::

```terms
代数几何–解析几何对应:
  en: algebraic geometry and analytic geometry
  de: algebraische Geometrie und analytische Geometrie
  fr: géométrie algébrique et géométrie analytique (GAGA)
  grc: μεταριθμικὴ γεωμετρία καὶ ἀναλυτικὴ γεωμετρία
  la: geometria algebraica et geometria analytica
  ja: 代<だい>数<すう>幾<き>何<か>学<がく>と解<かい>析<せき>幾<き>何<か>学<がく>
  ko: 가가
```
