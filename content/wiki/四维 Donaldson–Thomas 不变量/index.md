---
title: 四维 Donaldson–Thomas 不变量
categories: [计数几何]
navboxes: [计数几何]
---

在[[代数几何]]中，与研究三维 [[Calabi–丘流形]] 上计数问题的 [[Donaldson–Thomas 不变量]] 类似，
粗略来讲，
**四维 Donaldson–Thomas 不变量**考虑的是以下计数问题：
在四维 [[Calabi–丘流形]] $X$ 上，有多少个[[凝聚层]]，
使得其所有[[陈类]]都与我们事先规定好的一致？

当然这里的数目并不是“数数”意义下的数目。
凝聚层的[[模叠]]具有某种“[[虚拟维数]]”。
与三维情况不同，四维 [[Calabi–丘流形]] 上凝聚层的[[模叠]]的[[虚拟维数]]不一定是 $0$，
因此我们可以选取其上的某些[[向量丛]]的[[Euler 类]]在[[虚拟基本类]]上积分从而得到四维 Donaldson–Thomas 不变量。

与三维的 [[Donaldson–Thomas 不变量]] 一样，四维 Donaldson–Thomas 不变量也有类似的物理背景，
此处不再赘述。

与三维情况不同，四维时不能运用完美障碍理论来构造[[虚拟基本类]]。其障碍理论大致
如下：
\[
  \begin{tikzcd}
  {\text{Ext}^1(\mathscr F,\mathscr F)} & {\text{Ext}^2(\mathscr F,\mathscr F)} & {\text{Ext}^3(\mathscr F,\mathscr F)}
  \arrow["{\cong}"', bend right= 15, from=1-1, to=1-3]
  \arrow["q", from=1-2, to=1-2, loop, in=60, out=120, distance=5mm]
\end{tikzcd}
\]
其中 [[Serre 对偶]]诱导出对称二次型 $q$。对障碍复形取解消后只取某两项来做障碍理论是不可行的，因为
此时 $\text{ext}^1-\text{ext}^2$ 并非不变量，表现为构造出的[[虚拟基本类]]
与解消的选取有关。但 $\text{ext}^1-\text{ext}^2+\text{ext}^3$ 是不变量，
因此我们希望利用 $q$ 来取 $\text{Ext}^2(\mathscr F,\mathscr F)$ 的一半，然后再做[[虚拟基本类]]。

取一半的方法有两个：

- 取实部 $\text{Ext}^2(\mathscr F,\mathscr F)_{\mathbb R}$；

- 取极大（$q$-）迷向子丛 $\Lambda\subset\text{Ext}^2(\mathscr F,\mathscr F)$。

以下为构造的简要历史，基本上对应这两种取法，也可以被证明是相容的：

四维 Donaldson–Thomas 不变量的理论最早由[[曹亚龙]]和[[梁迺聪]]开始发展（见 [@CL14]），
他们成功代数地构造出
一些情况的[[虚拟基本类]]；之后的一个重要结果是 [[Dennis Borisov]]
和 [[Dominic Joyce]]（见 [@BJ17]）运用导出微分几何构造出一般情况下整系数同调群中的[[虚拟基本类]]
$[\mathcal M]^{\text{vir}}_{\text{BJ}}\in\mathrm H_{2\text{vdim}}(\mathcal M,\mathbb Z)$。之后
[[Jeongseok Oh]] 和 [[Richard Thomas]] 延续[[曹亚龙]]和[[梁迺聪]]的代数理论，构造出了一般情况下的
[[虚拟基本类]]
$[\mathcal M]^{\text{vir}}_{\text{OT}}\in \mathrm{CH}_{\text{vdim}}(\mathcal M,\mathbb Z[1/2])$，
见 [@OT23]。他们在 [@OT23-2] 中证明了以下两个映射的像相同：
\[
\begin{tikzcd}
  {[\mathcal M]^{\text{vir}}_{\text{BJ}}\in\mathrm H_{2\text{vdim}}(\mathcal M,\mathbb Z)} && {\mathrm H_{2\text{vdim}}(\mathcal M,\mathbb Z[1/2])} \\
  {[\mathcal M]^{\text{vir}}_{\text{OT}}\in \mathrm{CH}_{\text{vdim}}(\mathcal M,\mathbb Z[1/2])}
  \arrow[from=1-1, to=1-3]
  \arrow[from=2-1, to=1-3]
\end{tikzcd}
\]
最后，[[Hyeonjun Park]] 博采众长，在 [@Park21; @Park24] 中提炼出了构造的整套理论，
并构造了这种情况下的[[虚拟拉回]]，使整套理论更具函子性、更普适、更好用。

## 参考文献

原始文献：

```bibliography
CL14:
  type: preprint
  author: ['Cao, Yalong', 'Leung, Naichung Conan']
  title: Donaldson-Thomas theory for Calabi-Yau 4-folds
  year: 2014
  arxiv: '1407.7659'
BJ17:
  type: article
  author: ['Borisov, Dennis', 'Joyce, Dominic']
  year: 2017
  title: Virtual fundamental classes for moduli spaces of sheaves on Calabi-Yau four-folds
  journaltitle: Geom. Topol.
  volume: 21
  number: 6
  pages: 3231–3311
OT23:
  type: article
  author: ['Oh, Jeongseok', 'Thomas, Richard']
  year: 2023
  title: 'Counting sheaves on Calabi–Yau 4-folds, I'
  journaltitle: Duke Math. J.
  volume: 172
  number: 7
  pages: '1333-1409'
OT23-2:
  type: preprint
  author: ['Oh, Jeongseok', 'Thomas, Richard']
  year: 2023
  title: 'Complex Kuranishi structures and counting sheaves on Calabi-Yau 4-folds, II'
  arxiv: '2305.16441'
Park21:
  type: preprint
  author: 'Park, Hyeonjun'
  year: 2021
  title: Virtual pullbacks in Donaldson-Thomas theory of Calabi-Yau 4-folds
  arxiv: '2110.03631'
Park24:
  type: preprint
  author: 'Park, Hyeonjun'
  year: 2024
  title: Shifted symplectic pushforwards
  arxiv: '2406.19192'
```

```terms
四维 Donaldson–Thomas 不变量:
  en: Donaldson–Thomas invariants of fourfolds
```
