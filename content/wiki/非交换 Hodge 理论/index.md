---
title: 非交换 Hodge 理论
categories: [导出代数几何]
navboxes: [计数几何, 导出代数几何]
---

在[[代数几何]]与[[导出代数几何]]中，
**非交换 Hodge 理论**是指以下三种[[上同调理论]]的对应关系及其各种推广：
给定[[光滑簇|光滑]]复[[代数簇]] $X$，有

- **[[奇异上同调|Betti 上同调]]**
  $H^\bullet_{\mathrm{B}} (X)$，
  即其[[解析化]] $X^\mathrm{an}$ 作为[[拓扑空间]]的[[奇异上同调]]
  $H^\bullet (X^\mathrm{an}; \mathbb{C})$。

- **[[代数 de Rham 上同调|de Rham 上同调]]**
  $H^\bullet_{\mathrm{dR}} (X)$，即 de Rham 复形
  $(\Omega^\bullet_X, d_{\mathrm{dR}})$ 的[[超上同调]]。

- **[[Dolbeault 上同调]]**
  $H^\bullet_{\mathrm{Dol}} (X)$，即
  $H^n_{\mathrm{Dol}} (X) =
  \bigoplus_{p+q=n} H^q (X, \Omega^p_X)$。

对光滑复代数簇而言，前两者总是相同：
$H^\bullet_{\mathrm{B}} (X) \simeq H^\bullet_{\mathrm{dR}} (X)$，
而后两者由 [[Hodge 到 de Rham 谱序列]]联系。
若 $X$ [[紧合簇|紧合]]，则该谱序列在 $E_1$ 退化，
从而三种上同调都相同，
而 Dolbeault 上同调直接记录了其 [[Hodge 结构]]。
另外，在[[导出代数几何]]中，利用[[余切复形]] $\mathbb{L}_X$
代替 [[Kähler 微分]] $\Omega_X^1$，
可以将上述三种上同调理论拓展到一般的[[代数簇]]，乃至[[代数叠]]、[[导出叠]]上。

上述三种理论可以看作 $\mathbb{C}$ 系数的上同调
$H^\bullet (X; \mathbb{C})$。
在非交换 Hodge 理论中，我们将系数换成不一定交换的[[代数群]] $G$，
并考虑[[非交换上同调]]
$H^1 (X; G)$。
此时上述三种上同调的元素分别对应：

- $X$ 上的 **[[局部系|$G$-局部系]]**，
  即 $X$ 的[[基本群]] $\pi_1 (X)$ 在 $G$ 中的表示。

- $X$ 上的 **[[平坦联络|$G$-平坦联络]]**，
  即 $X$ 上带平坦联络的 $G$-[[主丛]]。

- $X$ 上的 **[[$G$-Higgs 丛]]**，
  即 $X$ 上带 [[Higgs 场]]的 $G$-[[主丛]]。

事实上，这样定义的非交换上同调与通常上同调的联系在[[导出代数几何]]的观点下更加明确：

- Betti 上同调是 $X$ 的 **[[Betti 叠]]** $X_{\mathrm{B}}$ 的导出函数环，
  而 $G$-局部系则是 $X_{\mathrm{B}}$ 上的 $G$-主丛。

- de Rham 上同调是 $X$ 的 **[[de Rham 叠]]** $X_{\mathrm{dR}}$ 的导出函数环，
  而 $G$-平坦联络则是 $X_{\mathrm{dR}}$ 上的 $G$-主丛。

- Dolbeault 上同调是 $X$ 的 **[[Dolbeault 叠]]** $X_{\mathrm{Dol}}$ 的导出函数环，
  而 $G$-Higgs 丛则是 $X_{\mathrm{Dol}}$ 上的 $G$-主丛。

更进一步，这一对应也延展到相应几何对象的[[模空间]]。
非交换 Hodge 理论研究下列模空间的联系：

- $X$ 上的 **[[局部系模空间|$G$-局部系模空间]]**，
  也称为 [[特征簇|$G$-特征簇]]。

- $X$ 上的 **[[平坦联络模空间|$G$-平坦联络模空间]]**。

- $X$ 上的 **[[Higgs 丛模空间|$G$-Higgs 丛模空间]]**。

当 $X$ 是复[[光滑簇|光滑]][[射影簇]]时，
三种模空间[[同胚]]，但带有不同的[[复流形|复结构]]，
其中对 Higgs 丛需引入合适的[[稳定条件]]。
这是 [@Simpson1994; @Simpson1995] 的结果，
有时也以**非交换 Hodge 对应**特指此结论。

当 $G = \mathrm{GL} (n)$ 时，上述三种几何对象可以视作带额外结构的[[向量丛]]。
若将向量丛推广到[[凝聚层]]，则进一步得到三种层论之间的对应关系：

- $X$ 上的 **[[可构造层]]**。
  Betti 叠 $X_{\mathrm{B}}$ 上的向量丛对应 $X^\mathrm{an}$ 上的[[局部系]]，
  而后者是不带奇点的可构造层。

- $X$ 上的 **[[D-模]]**。
  de Rham 叠 $X_{\mathrm{dR}}$ 上的向量丛对应 $X$ 上带[[平坦联络]]的向量丛，
  而凝聚层对应 $X$ 上的 [[D-模]]。

- $X$ 上的 **[[Higgs 层]]**，即[[余切丛]]上的[[凝聚层]]。
  Dolbeault 叠 $X_{\mathrm{Dol}}$ 上的向量丛对应 $X$ 上的 [[Higgs 丛]]，
  而凝聚层通过 [[Koszul 对偶]]对应于
  $X$ 的余切丛 $\mathrm{T}^* X$ 上的凝聚层。

其中，前两种层论通过 [[Riemann–Hilbert 对应]]相联系，
而后两者则通过 [[Deligne 联络]]相联系：
Deligne 联络给出由 $\lambda \in \mathbb{A}^1$ 参数化的一族结构，
而 $\lambda \neq 0$ 和 $\lambda = 0$ 的情况分别对应 D-模与 Higgs 层。

当 $X$ 是[[代数曲线|光滑射影曲线]]时，这三种模空间和三种层论也出现在[[几何 Langlands 对应]]中，
并给出其三种版本：

- **[[Betti 几何 Langlands 对应]]** 大致表明，
  $G$-局部系模空间上的凝聚层与 ${}^\mathrm{L} G$-主丛模空间上的可构造层对应。

- **[[de Rham 几何 Langlands 对应]]** 大致表明，
  $G$-平坦联络模空间上的凝聚层与 ${}^\mathrm{L} G$-主丛模空间上的 D-模对应。

- **[[Dolbeault 几何 Langlands 对应]]** 大致表明，
  $G$-Higgs 丛模空间上的凝聚层与 ${}^\mathrm{L} G$-主丛模空间上的 Higgs 层对应。

## 参考文献

原始文献：

```bibliography
Simpson1994:
  type: article
  author: 'Simpson, Carlos T.'
  title: Moduli of representations of the fundamental group of a smooth projective variety. I
  volume: 79
  doi: 10.1007/bf02698887
  pages: 47–129
  journaltitle: Publications mathématiques de l’IHÉS
  year: 1994
Simpson1995:
  type: article
  author: 'Simpson, Carlos T.'
  title: Moduli of representations of the fundamental group of a smooth projective variety. II
  volume: 80
  doi: 10.1007/bf02698895
  pages: 5–79
  journaltitle: Publications mathématiques de l’IHÉS
  year: 1995
```

```terms
非交换 Hodge 理论:
  en: non-abelian Hodge theory
  de: nichtabelsche Hodge-Theorie :f
  fr: théorie de Hodge non abélienne :f
```
