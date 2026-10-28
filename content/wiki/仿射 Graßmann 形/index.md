---
title: 仿射 Graßmann 形
aliases: [仿射 Grassmann 形]
categories: [代数群理论]
navboxes: [代数群理论, 几何表示论]
---

<problems>
- “作为归纳概形”“性质”各节需要扩充。
</problems>

**仿射 Graßmann 形**是
[[Graßmann 形]]在“仿射”（即仿射型 [[Coxeter 图]]）情形的类比：
Graßmann 形可以写为商空间 $\mathrm{GL}_n/P$ 的形式，
其中 $P$ 是 $\mathrm{GL}_n$ 的极大[[抛物子群]]，
也就是只有两块的分块上三角矩阵构成的子群；
域 $k$ 上的[[分裂约化群]] $G$
对应的仿射 Graßmann 形则是[[环路群]]商去它的极大[[抛物 Iwahori 子群|抛物子群]]：
$\mathrm{Gr}_G = G(\mathcal{K})/G(\mathcal{O})$
（$\mathcal{K} = k((t)), \mathcal{O} = k[[t]]$）。

另一方面，
仿射 Graßmann 形大致是相应环路群的 [[Bruhat–Tits 楼]]的 $0$ 维胞腔之集，
也是[[对称空间]]的非 Archimedes 类比，
仿射 Graßmann 流形上的许多构造都可以对应于对称空间上的构造。
例如 Lie 群理论中的 [[Cartan 分解]]与 [[Iwasawa 分解]]均有类似物：
\[
\mathrm{Gr}_G = \bigsqcup_{\lambda \in \mathrm{X}_*(T)^+}
G(\mathcal{O}) t^\lambda G(\mathcal{O})
\]
\[
\mathrm{Gr}_G = \bigsqcup_{\lambda \in \mathrm{X}_*(T)}
N(\mathcal{K}) t^\lambda G(\mathcal{O})
\]
前者大致上把空间分解为同心球之并，后者则分解为极限球之并。

仿射 Graßmann 流形也有几何意义，
它大致是[[代数曲线|曲线]]上固定一点外的平凡化的 $G$-[[代数主丛|主丛]]的模空间，
允许此点变动则会得到[[整体仿射 Graßmann 形]]。
有关仿射 Graßmann 形的结论经常用在[[几何 Langlands 纲领]]中，
例如[[几何 Satake 等价]]。

## 定义

### 作为集合

::: definition [仿射 Graßmann 形]
设 $G$ 是域 $k$ 上的[[分裂约化群]]，
其对应**仿射 Graßmann 形**为
\[
\mathrm{Gr}_G = G(\mathcal{K})/G(\mathcal{O}),
\]
其中 $\mathcal{K} = k((t)), \mathcal{O} = k[[t]]$。
:::

### 作为归纳概形

## 性质

```terms
仿射 Graßmann 形:
  en: affine Grassmannian
  fr: Grassmannienne affine :f
```
