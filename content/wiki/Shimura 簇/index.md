---
title: Shimura 簇
categories: [算术几何, 模形式论]
navboxes: [代数几何, 模形式论]
---

<problems>
- **性质**一节的细节待补充
</problems>

**Shimura簇**是[[模曲线]]的高维推广。

## 定义

::: definition
一个**Shimura数据**是一个满足下列条件(SV1)-(SV3)的二元组$(G,X)$，其中$G$是一个$\mathbb{Q}$上
的[[约化代数群]]，$X$是同态$f:\mathbb{S} \to G_{\mathbb{R}}$的一个
$G(\mathbb{R})$-共轭类，即\(G(\mathbb R)\) 在
$\operatorname{Hom}_{\mathbb{R}}(\mathbb{S},G)$
上通过共轭作用得到的一个轨道。这里$\mathbb{S}$是[[Deligne环面]]，
\[
\mathbb S=\operatorname{Res}_{\mathbb C/\mathbb R}\mathbb G_m
\]
$G_{\mathbb{R}} = G \times_{\operatorname{Spec}\mathbb{Q}} \operatorname{Spec} \mathbb{R}$。

对$h \in X$，

(SV1) 复合态射
   \[
   \operatorname{Ad}\circ h:
   \mathbb S\longrightarrow
   \operatorname{GL}(\mathfrak g_{\mathbb R})
   \]
   所诱导的$\mathfrak g_{\mathbb R}$上的[[Hodge结构]]只有
   $(-1,1)$、$(0,0)$和$(1,-1)$这三种可能的类型。
   其中$\mathfrak{g} = \operatorname{Lie}(G)$。

(SV2) $\operatorname{Ad}(h(i))$是
      $G_{\mathbb{R}}^{\mathrm{ad}}$的一个[[Cartan对合]]。
      
(SV3) 对$G^{\mathrm{ad}}$在$\mathbb{Q}$上的直积分解中的任意单因子$H$，复合态射
\[
\mathbb S \xrightarrow{h} G_\mathbb{R} \longrightarrow H_\mathbb{R}
\]
均非平凡。

上述条件与$h\in X$的选取无关, 这是共轭作用保证的。
:::

::: definition
设$(G,X)$是一个**Shimura数据**，$K \subseteq G(\mathbb{A}_f)$是一个[[紧]]开子群，
其中$\mathbb{A}_f$表示$\mathbb{Q}$ 的[[有限adèle环]]。那么[[双商空间]]
\[
\operatorname{Sh}_K(G,X)
=
G(\mathbb{Q})\backslash
\bigl(X\times G(\mathbb{A}_f)/K\bigr)
\]
称为一个**Shimura簇**。
:::

::: remark
注意，这里我们定义的实际上是**Shimura簇**的复点$\operatorname{Sh}_K(G,X)(\mathbb{C})$，
我们后面会证明这个双商空间就是**Shimura簇**$\operatorname{Sh}_K(G,X)$的解析化,
因此我们使用同一个记号。
:::

## 性质
::: proposition
设$(G,X)$是一个**Shimura数据**，则$X$具有自然的[[复流形]]结构，且是有限多个彼此全纯
同构的[[Hermite对称空间]]的[[不交并]]。记$X$的[[连通分支]]为$X^+$
:::

::: theorem
设$\operatorname{Sh}_K(G,X)$是一个**Shimura簇**，固定$X^+$是$X$的一个[[连通分支]]。
则有如下的有限分解：
\[
\operatorname{Sh}_K(G,X)
\cong
\bigsqcup_{[g]\in G(\mathbb{Q})_+ \backslash G(\mathbb{A}_f)/K}
\Gamma_g \backslash X^+.
\]
:::

而[[Baily-Borel定理]]告诉我们，每一个分支$\Gamma_g \backslash X^+$是和一个
复[[代数簇]]的解析化是同构的，因此我们用$\Gamma_g \backslash X^+$这个记号同时表示
这个复代数簇和它的复点。那么我们取不交并就得到我们想要的**Shimura簇**
$\operatorname{Sh}_K(G,X)$，它确实是一个代数簇。


## 参考文献

```bibliography
Gao2025:
  type: preprint
  author: Ziyang Gao
  title: An Introduction to Shimura Varieties and Their Compactifications
  year: 2025
  url: 'https://ziyangjeremygao.github.io/LectureNotes/ShimuraVarieties.pdf'
  note: Lecture notes, 8 December 2025

Milne2005:
  type: incollection
  author: James S. Milne
  title: Introduction to Shimura Varieties
  booktitle: Harmonic Analysis, the Trace Formula, and Shimura Varieties
  editor: [James Arthur, David Ellwood, Robert Kottwitz]
  series: Clay Mathematics Proceedings
  volume: 4
  publisher: American Mathematical Society
  year: 2005
  pages: 265--378
  url: 'https://www.jmilne.org/math/xnotes/svi.pdf'
  note: Providence, RI; revised online version, 16 September 2017
```

```terms
志村簇:
  en: Shimura variety
  fr: variété de Shimura :f
  de: Shimura-Varietät :f
  ja: 志村多様体<しむらたようたい>
```
