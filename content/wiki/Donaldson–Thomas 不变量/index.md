---
title: Donaldson–Thomas 不变量
categories: [计数几何]
navboxes: [计数几何]
---

在[[代数几何]]中，
**Donaldson–Thomas 不变量**是一种[[计数不变量]]。
它考虑的是以下计数问题：
在三维 [[Calabi–丘流形]] $X$ 上，有多少个[[凝聚层]]，
使得其所有[[陈类]]都与我们事先规定好的一致？

这里的数目并不是“数数”意义下的数目。
凝聚层的[[模叠]]具有某种“[[虚拟维数]]”，
大致来说，在上述假设下，模叠是虚拟意义下的 $0$ 维对象，
从而可以谈论虚拟意义下，其中有多少个点。
这就是 Donaldson–Thomas 不变量。

Donaldson–Thomas 不变量关于复结构的形变具有不变性，
这是其称为“不变量”的原因。

Donaldson–Thomas 不变量与[[弦论]]中的曲线计数问题密切相关：
给定复[[射影代数簇]] $X$，固定[[普通同调|同调]]类 $\beta \in H_2 (X; \mathbb{Z})$，
在 $X$ 中能找到多少[[亏格]] $g$ 的[[代数曲线]]，其对应的同调类为 $\beta$？
该问题的直接数学表述是 [[Gromov–Witten 不变量]]，
但它难以计算，
且并不直接给出物理上所期待的曲线数目，
需要经过一些变换才可以。
另一方面，使用 Donaldson–Thomas 不变量，
可以将 $X$ 中的代数曲线 $Z$ 对应到其[[理想层]] $\mathcal{I}_Z$，
然后考虑这些理想层的计数问题，
就能直接给出物理上所期待的曲线数目。

## 参考文献

原始文献：

```bibliography
Thomas2000:
  type: article
  author: 'Thomas, R. P.'
  title: 'A holomorphic Casson invariant for Calabi–Yau 3-folds, and bundles on K3 fibrations'
  journaltitle: J. Differ. Geom.
  volume: 54
  number: 2
  pages: '367-438'
  doi: 10.4310/jdg/1214341649
  year: 2000
  arxiv: math/9806111
  zbmath: '1034.14015'
```

曲线计数问题的综述：

```bibliography
PandharipandeThomas2011:
  type: preprint
  author: ['Pandharipande, R.', 'Thomas, R. P.']
  title: $13/2$ ways of counting curves
  arxiv: '1111.1552'
  zbmath: '1310.14031'
```

```terms
Donaldson–Thomas 不变量:
  en: Donaldson–Thomas invariant
```
