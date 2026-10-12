---
title: 生象化
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]均指 $(\infty,1)$-范畴，$1$-范畴则指经典的范畴。
- [[筛余极限]]均指[[筛 $(\infty,1)$-余极限]]，筛 $1$-余极限则指经典的筛余极限。

:::

**生象化**是[[高阶范畴论]]中的一种构造，
是一种自然地将 $1$-范畴中代数对象变为它们在高阶范畴中的对应物的方法。

它来自于以下观察：
诸多经典的代数结构所构成的 $1$-范畴都是紧投射生成的，
所谓紧投射生成，是指这样的范畴 $\mathcal{C}$，
它具有小筛 $1$-余极限，
并且取其中[[紧投射对象]]所构成的全子范畴 $\mathcal{C}^{\mathrm{cp}}$，
有筛 $1$-余完备化 $1\text{-}\mathsf{sInd}(\mathcal{C}^{\mathrm{cp}}) \simeq \mathcal{C}$。
而筛 $1$-余完备化
$1\text{-}\mathsf{sInd}(\mathcal{C}^{\mathrm{cp}}) \subseteq \mathsf{Fun}((\mathcal{C}^{\mathrm{cp}})^{\mathrm{op}},\mathsf{Set})$
可视为 $\mathcal{C}^{\mathrm{cp}}$ 上全体保持有限乘积的预层所构成的范畴。
（更多内容可见无穷范畴基础问答/什么是生象化）

而此时代数结构可被视为保持乘积的函子 $(\mathcal{C}^{\mathrm{cp}})^{\mathrm{op}} \to \mathsf{Set}$
（详见[[代数理论]]）。
现在我们想在生象环境下定义出代数结构，
只需将此时打到的范畴由 $\mathsf{Set}$ 变为 $\mathsf{Ani}$ 即可，
生象化因而得名。

## 定义

::: definition
令 $\mathcal{C}$ 为紧投射生成 $1$-范畴，
令 $\mathcal{C}^{\operatorname{cp}} \subseteq \mathcal{C}$ 为其中紧投射对象所构成的全子范畴。
则 $\mathcal{C}$ 的**生象化**是指范畴
\[
\mathsf{Ani}(\mathcal{C}) \coloneqq \mathsf{Fun}^{\times}((\mathcal{C}^{\operatorname{cp}})^{\mathrm{op}},\mathsf{Ani}).
\]
即为 $\mathcal{C}^{\mathrm{cp}}$ 的筛余完备化。
:::

::: definition [生象化函子]
给定紧投射生成范畴之间的函子 $F \colon \mathcal{C}\to\mathcal{D}$。
若其保持筛 $1$-余极限，
则给出本质唯一的函子 $LF \colon \mathsf{Ani}(\mathcal{C}) \to \mathsf{Ani}(\mathcal{D})$
使得以下图表交换
\[
\begin{tikzcd}
  \mathcal{C}^{\operatorname{cp}}\ar[d,hook] \ar[r,"F\mid_{\mathcal{C}^{\operatorname{cp}}}"]& \mathcal{D} \ar[r,hook] & \mathsf{Ani}(\mathcal{D})\\
  \mathsf{Ani}(\mathcal{C}) \ar[urr,"LF"']
\end{tikzcd}
\]
称为 $F$ 的**左导出函子**。
:::

::: remark
对于 $X \in \mathsf{Ani}(\mathcal{C})$，有函子性的典范同构
\[
\pi_0 LF(X) \simeq F(\pi_0(X)),
\]
此处 $\pi_0$ 为生象化函子 $\mathcal{C} \to \mathsf{Ani}(\mathcal{C})$ 的左伴随。
:::

## 性质

::: proposition
令 $F \colon \mathcal{C} \to \mathcal{D}$ 以及 $G \colon \mathcal{D} \to \mathcal{E}$
为紧投射生成范畴间保持筛 $1$-余极限的函子，
那么：

- 总是存在典范的自然变换 $LG \circ LF \Rightarrow L(G \circ F)$。
- 如果还满足以下任一条件
  - $F(\mathcal{C}^{\mathrm{cp}}) \subseteq 1\text{-}\mathsf{Ind}(\mathcal{D}^{\mathrm{cp}})$，
  - $(LG)(F(\mathcal{C}^{\mathrm{cp}})) \subseteq \mathcal{E}$。

  那么自然变换 $LG \circ LF \Rightarrow L(G \circ F)$
  为自然同构。
:::

::: proposition
令 $\mathcal{C}$ 为紧投射生成范畴。
则 $\mathsf{Cond}(\mathcal{C})$ 也为紧投射生成范畴，
且此时有范畴等价
\[
\mathsf{Ani}(\mathsf{Cond}(\mathcal{C})) \simeq \mathsf{Cond}(\mathsf{Ani}(\mathcal{C})).
\]
:::

## 例子

- 集合范畴 $\mathsf{Set}$ 是紧投射生成范畴，
  此时 $\mathsf{Set}^{\operatorname{cp}} = \mathsf{Fin}$，
  其生象化为 $\mathsf{Ani}(\mathsf{Set}) = \mathsf{Ani}$，
  因此生象是导出意义下的集合。

- 群范畴 $\mathsf{Grp}$ 是紧投射生成范畴，
  此时 $\mathsf{Grp}^{\operatorname{cp}}$ 为有限生成自由群所构成的全子范畴。
  其生象化为 $\mathsf{Ani}(\mathsf{Grp}) = \mathsf{Grp}(\mathsf{Ani})$
  为 $\mathbb{E}_1$-群范畴。

- Abel 群范畴 $\mathsf{Ab}$ 是紧投射生成范畴，
  此时 $\mathsf{Ab}^{\operatorname{cp}}$ 为有限生成自由 Abel 群所构成的全子范畴。
  根据 [[Dold–Kan 对应]]，
  $\mathsf{Ani}(\mathsf{Ab}) \simeq \mathsf{D}_{\geq 0}(\mathsf{Ab})$ 为范畴等价，
  事实上，考虑张量积所诱导出的 $\mathsf{Ani}(\mathsf{Ab})$ 上的对称幺半结构（根据 [[Day 卷积]]）
  以及 $\mathsf{D}_{\geq 0}(\mathsf{Ab})$ 上导出张量积所给出的对称幺半结构，
  有对称幺半范畴间的等价
  \[
  \mathsf{Ani}(\mathsf{Ab})^{\otimes} \simeq \mathsf{D}_{\geq 0}(\mathsf{Ab})^{\otimes^L}.
  \]

- 上例可推广到紧投射生成的 Abel 范畴 $\mathcal{A}$ 上，
  此时有范畴等价 $\mathsf{Ani}(\mathcal{A}) \simeq \mathsf{D}_{\geq 0}(\mathcal{A})$。

- 令 $R$ 为交换环，
  则 $R\text{-}\mathsf{Mod}$ 为紧投射生成范畴，
  $R\text{-}\mathsf{Mod}^{\operatorname{cp}}$ 为有限生成投射 $R$-模所构成的全子范畴
  （事实上只需取 $\mathcal{C}_0$ 为有限生成[[自由模|自由]] $R$-模所构成的全子范畴）。
  其生象化为 $\mathsf{Ani}(R\text{-}\mathsf{Mod}) \simeq \mathsf{D}_{\geq 0}(R)$。

- 令 $R$ 为交换环，则 $R\text{-}\mathsf{CAlg}$ 为紧投射生成范畴，
  令 $\mathsf{Poly}(R)$ 为有限生成[[多项式]]代数 $R[T_1,\cdots,T_n]$，$n \geq 0$ 张成的全子范畴，
  则 $R\text{-}\mathsf{CAlg}^{\operatorname{cp}}$ 为 $\mathsf{Poly}(R)$ 及其收缩所构成的全子范畴
  （实际使用时只需取 $\mathcal{C}_0$ 为 $\mathsf{Poly}(R)$ 即可）。
  其生象化被称为**生象 $R$-代数**，
  特别地，对于 $R = \mathbb{Z}$ 时，
  其生象化称为[[生象环]]。

## 参考资料

```bibliography
HTT:
  type: book
  title: Higher Topos Theory
  author: Jacob Lurie
  year: 2009
  publisher: Princeton University Press
  url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
HA:
  type: book
  title: Higher Algebra
  author: Jacob Lurie
  url: https://www.math.ias.edu/~lurie/papers/HA.pdf
vcesnavivcius2024purity:
  type: article
  title: Purity for flat cohomology
  author: [Kęstutis Česnavičius, 'Scholze, Peter']
  journaltitle: Annals of Mathematics
  volume: 199
  number: 1
  pages: 51–180
  year: 2024
  arxiv: '1912.10932'
  publisher: 'Department of Mathematics, Princeton University Princeton, New Jersey, USA'
```

```terms
生象化:
  en: animation
非 Abel 导出范畴:
  en: nonabelian derived category
代数范畴:
  en: algebraic category
```
