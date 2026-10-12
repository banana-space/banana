---
title: 块
aliases: [Shtuka]
categories: [代数曲线论, $p$ 进几何]
notices:
  - name: 问题
    items:
      - “整体、纯特征情形”“局部、纯特征情形”两节缺少在一般约化群上的推广。
      - “例子”“性质”各节需要扩充。
---

**块**是[[代数几何]]与 [[$p$ 进几何]]中的构造。
大致来说，对曲线 $X$ 与空间 $S$，
$S$ 上的 $X$-块是 $X\times S$ 上，
标记 $X$ 的一些 $S$-点（称为它的**爪**），
并带有某种 [[Frobenius 作用]]的[[向量丛]]或[[主丛]]。
这里曲线的概念很广泛，
可以是 $\mathbb{F}_p$ 上的[[光滑概形|光滑]][[代数曲线]]，
可以是代数曲线一点处的[[形式邻域]]，
也就是[[进制谱]] $\operatorname{Spa}(\mathbb{F}_p[[T]])$，
还可以是“混特征曲线”中一点的形式邻域 $\operatorname{Spa}(\mathbb{Z}_p)$。
不过，目前对“混特征曲线”，也就是[[代数整数环]]的素谱暂时难以定义这一概念。

块与许多其它数学对象有联系。
例如，局部块对应于 [[Fargues–Fontaine 曲线]]上[[向量丛]]的修改，
也就是其上 [[Hecke 叠]]中的元素。
由此在[[块的模空间]]的[[层]]上同调上，
可以引入 [[Galois 群]]与 [[Hecke 算子]]的作用，
从而证明 [[Langlands 纲领]]的一些情况。

## 定义

### 整体、纯特征情形

::: definition [块]
设有以下结构：
- $X$ 是 $\mathbb{F}_p$ 上的[[光滑态射|光滑]][[代数曲线]]；
- $S$ 是 $\mathbb{F}_p$-[[概形]]；
- $x_1, \cdots, x_m$ 是态射 $S \to X$，
记 $\Gamma_{x_i}\in X \times S$ 为 $x_i$ 的[[图像]]，
$\mathcal{I}$ 为所有 $\Gamma_{x_i}$ 对应的[[理想层]]之积；
- $\phi \colon X \times S \to X \times S$
为 $X$ 上恒等态射与 $S$ 上 [[Frobenius 态射]]诱导的态射。

$S$ 上以 $x_1, \cdots, x_m$ 为**爪**的
$X$-**块**指二元组 $(\mathcal{E}, \phi_{\mathcal{E}})$，
其中
- $\mathcal{E}$ 是 $X \times S$ 上的向量丛；
- $\phi_{\mathcal{E}} \colon \phi^*\mathcal{E}[\frac{1}{\mathcal{I}}]
  \simeq \mathcal{E}[\frac{1}{\mathcal{I}}]$ 为同构。

向量丛 $\mathcal{E}$ 的秩称为此块的**秩**。
:::

### 局部、纯特征情形

以上定义讲述了对一整条代数曲线定义的块。
在曲线一点的局部
（这里是它的形式邻域，[[进制谱]]
$\operatorname{Spa}(\mathbb{F}_p[[T]])$），
同样可以作此定义。
只是由于“形式邻域”属于解析几何的世界，
以上对概形定义的块需要改成对进制空间定义。

::: definition [块]
设有以下结构：
- $X = \operatorname{Spa}(\mathbb{F}_p[[T]])$；
- $S$ 是 $\mathbb{F}_p$-[[进制空间]]；
- $x_1, \cdots, x_m$ 是态射 $S \to X$，
记 $\Gamma_{x_i}\in X \times S$ 为 $x_i$ 的[[图像]]，
$\mathcal{I}$ 为所有 $\Gamma_{x_i}$ 对应的[[理想层]]之积；
- $\phi \colon X \times S \to X \times S$
为 $X$ 上恒等态射与 $S$ 上 [[Frobenius 态射]]诱导的态射。

$S$ 上以 $x_1, \cdots, x_m$ 为**爪**的
（纯特征）**局部块**指二元组
$(\mathcal{E}, \phi_{\mathcal{E}})$，
其中
- $\mathcal{E}$ 是 $X \times S$ 上的向量丛；
- $\phi_{\mathcal{E}} \colon \phi^*\mathcal{E}[\frac{1}{\mathcal{I}}]
  \simeq \mathcal{E}[\frac{1}{\mathcal{I}}]$ 为同构。

向量丛 $\mathcal{E}$ 的秩称为此块的**秩**。
:::

### 局部、混特征情形

“混特征的曲线”在局部上是 $\operatorname{Spa}(\mathbb{Z}_p)$，
但由于 $\mathbb{Z}_p$ 并不是某个域上的形式幂级数环，
不能直接定义 $\operatorname{Spa}(\mathbb{Z}_p) \times S$
（事实上如在进制空间的范畴中做此定义，
得到的结果就是 $S$ 本身）。

由此我们需要下面的定义来人为指定
$\operatorname{Spa}(\mathbb{Z}_p) \times S$ 的结果。
这一定义的大致想法在于，$\mathbb{Z}_p$ 是 [[Witt 环]] $W(\mathbb{F}_p)$，
因此可以希望 $\operatorname{Spa}(\mathbb{Z}_p) \times \operatorname{Spa}(R)$
大致是 $\operatorname{Spa}(W(R))$。具体地说，

::: definition
设 $S$ 是 $\mathbb{F}_p$ 上仿射[[完美胚空间]]
$\operatorname{Spa}(R, R^+)$，
$\varpi \in R^+$ 为其伪素元，
则记
- $\operatorname{Spa}(R^+) \times
  \operatorname{Spa}(\mathbb{Z}_p) = \operatorname{Spa}(W(R^+))$。
- $S \times \operatorname{Spa}(\mathbb{Z}_p)$ 为
$\operatorname{Spa}(W(R^+))$ 中由 $|[\varpi]| > 0$
定义的开子集。
:::

“态射” $S \to \operatorname{Spa}(\mathbb{Z}_p)$，
或者说 $S \times \operatorname{Spa}(\mathbb{Z}_p)$ 中对应的图像，
则由[[正置]] $S^\sharp$ 来模拟。
这一点可以由 $(R^\sharp)^+$ 是 $W(R^+)$ 的商环来印证。

::: definition [块]
设有以下结构：
- $X = \operatorname{Spa}(\mathbb{Z}_p)$；
- $S$ 是 $\mathbb{F}_p$ 上仿射[[完美胚空间]]；
- $x_1, \cdots, x_m$ 为 $S$ 的正置，
$x_i$ 对应的[[正置]]记作
$S^\sharp_i = \operatorname{Spa}(R^\sharp_i, (R_i^{\sharp})^+)$，
$\mathcal{I}$ 为 $X \times S$ 上所有 $R^\sharp_i$
对应的[[理想层]]之积；
- $\phi \colon X \times S \to X \times S$
为 $S$ 上 [[Frobenius 态射]]诱导的态射。

$S$ 上以 $x_1, \cdots, x_m$
为**爪**的**混特征局部块**指二元组
$(\mathcal{E}, \phi_{\mathcal{E}})$，
其中
- $\mathcal{E}$ 是 $X \times S$ 上的向量丛；
- $\phi_{\mathcal{E}} \colon \phi^*\mathcal{E}[\frac{1}{\mathcal{I}}]
  \simeq \mathcal{E}[\frac{1}{\mathcal{I}}]$ 为同构。

向量丛 $\mathcal{E}$ 的秩称为此块的**秩**。
:::

## 例子

## 性质

```terms
块:
  en: shtuka
  fr: chtouca
  ru: штука
爪:
  en: leg
  fr: patte :f
```
