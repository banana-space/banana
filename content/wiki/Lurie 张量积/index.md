---
title: Lurie 张量积
categories: [高阶代数]
notices:
  - name: 消歧义
    see:
      - page: 张量积（多义词）
navboxes: [高阶范畴论, 高阶代数]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**Lurie 张量积**是[[可表现范畴]]的一种操作，
由 [@HA, [§4.8.1](https://www.math.ias.edu/~lurie/papers/HA.pdf#subsection.4.8.1)] 构造。
给定可表现范畴 $\mathcal{C}, \mathcal{D}$，
其 Lurie 张量积是可表现范畴 $\mathcal{C} \otimes \mathcal{D}$，
由它出发的函子等同于 $\mathcal{C} \times \mathcal{D}$ 出发的
两边均保持[[(∞,1)-极限|余极限]]的[[二元函子]]。

## 定义

令 $\widehat{\mathsf{Cat}}$ 为全体范畴所构成的
（[[Grothendieck 宇宙|非常大]]）范畴。
令 $\mathsf{Fun}^{\mathrm{L}} (-, -)$ 和 $\mathsf{Fun}^{\mathrm{R}} (-, -)$
分别表示[[函子范畴]]中保持余极限和极限的函子所张成的[[全子范畴]]。

::: definition
令 $\mathcal{C},\mathcal{D},\mathcal{E}$ 为可表现范畴，
记
$\mathsf{Fun}^{\mathrm{biL}}(\mathcal{C}\times \mathcal{D},\mathcal{E}) \subseteq \mathsf{Fun}(\mathcal{C}\times \mathcal{D},\mathcal{E})$
为由双边分别保持余极限的函子所张成的全子范畴。
:::

::: definition
令 $\mathcal{C}$ 和 $\mathcal{D}$ 为可表现范畴。
则其 **Lurie 张量积**是指可表现 $(\infty, 1)$-范畴 $\mathcal{C}\otimes \mathcal{D}$，
带有一个双边均保持余极限的函子
\[
\mathcal{C}\times\mathcal{D} \longrightarrow \mathcal{C}\otimes \mathcal{D},
\]
使得对任意可表现范畴 $\mathcal{E}$，该函子都诱导范畴等价
\[
\mathsf{Fun}^{\mathrm{L}}(\mathcal{C}\otimes \mathcal{D},\mathcal{E})
\overset{\sim}{\longrightarrow}
\mathsf{Fun}^{\mathrm{biL}}(\mathcal{C}\times \mathcal{D},\mathcal{E}).
\]
上述泛性质保证了若 Lurie 张量积存在，则本质上唯一。
:::

## 性质

::: proposition
有范畴等价
\[
\mathsf{Fun}^{\mathrm{L}}(\mathcal{C}\otimes \mathcal{D},\mathcal{E})
\simeq \mathsf{Fun}^{\mathrm{biL}}(\mathcal{C}\times \mathcal{D},\mathcal{E})
\simeq \mathsf{Fun}^{\mathrm{L}}(\mathcal{C}, \mathsf{Fun}^{\mathrm{L}}(\mathcal{D},\mathcal{E})).
\]
由此知 $\mathsf{Fun}^{\mathrm{L}}$ 为该对称幺半结构的[[闭幺半范畴|幂函子]]。
更进一步，由于对于任意可表现范畴 $\mathcal{C}$，
$\mathsf{Fun}^{\mathrm{L}}(\mathsf{Ani},\mathcal{C}) \simeq \mathsf{Fun}(*,\mathcal{C}) \simeq \mathcal{C}$，
从而 $\mathsf{Ani} \in \mathsf{Pr}^{\mathrm{L}}$ 为 $(\mathsf{Pr}^{\mathrm{L}})$ 的幺元。
:::

::: proposition
有范畴等价
\[
\mathcal{C} \otimes \mathcal{D} \simeq \mathsf{Fun}^{\mathrm{R}}(\mathcal{C}^{\operatorname{op}},\mathcal{D})
\]
:::

::: remark
上述范畴等价无论是对于 $\mathcal{C}$ 还是关于 $\mathcal{D}$ 都不能以直接的方式具有函子性。
比如考虑 $F \colon \mathcal{C}_1 \to \mathcal{C}_2$，则有交换图表
\[
\begin{tikzcd}
  {\mathcal{C}_2 \otimes \mathcal{D}}\ar[r,"\sim"]
  \ar[d,"(F \otimes \mathbb{1}_{\mathcal{D}})^{\mathrm{R}}"] &
  {\mathsf{Fun}^{\mathrm{R}}(\mathcal{C}_2^{\operatorname{op}},\mathcal{D})}
  \ar[d,"-\circ F^{\operatorname{op}}"]\\
  {\mathcal{C}_1 \otimes \mathcal{D}} \ar[r,"\sim"]&
  {\mathsf{Fun}^{\mathrm{R}}(\mathcal{C}_1^{\operatorname{op}},\mathcal{D})}
\end{tikzcd}
\]
此处 $(-)^{\operatorname{R}}$ 是指取右伴随。
而考虑 $G \colon \mathcal{D}_1 \to \mathcal{D}_2$，则有交换图表
\[
\begin{tikzcd}
  {\mathcal{C} \otimes \mathcal{D}_2}\ar[r,"\sim"]
  \ar[d,"(\mathbb{1}_{\mathcal{C}} \otimes G)^{\mathrm{R}}"] &
  {\mathsf{Fun}^{\mathrm{R}}(\mathcal{C}^{\operatorname{op}},\mathcal{D}_2)}
  \ar[d,"G^{\mathrm{R}}\circ -"]\\
  {\mathcal{C} \otimes \mathcal{D}_1} \ar[r,"\sim"]&
  {\mathsf{Fun}^{\mathrm{R}}(\mathcal{C}^{\operatorname{op}},\mathcal{D}_1)}
\end{tikzcd}
\]
:::

::: proposition
对于任意可表现范畴 $\mathcal{C}$，都有 $\mathsf{Ani}_*\otimes \mathcal{C} \simeq \mathcal{C}_*$。
:::

::: proposition
- 典范态射 $\mathsf{Ani} \to \mathsf{Sp}$ 诱导范畴等价
  $\mathsf{Sp} \simeq \mathsf{Sp} \otimes \mathsf{Sp}$。
  该等价说明 $\mathsf{Sp}$ 是 $(\mathsf{Pr}^{\mathrm{L}})^{\otimes}$
  中的 [[$\mathbb{E}_{\infty}$-代数]]；

- 可表现范畴 $\mathcal{C}$ [[稳定 (∞,1)-范畴|稳定]]当且仅当有典范的等价
  \[
  \mathcal{C} \to \mathsf{Sp}\otimes \mathcal{C}.
  \]
  更进一步，
  这说明 $\mathcal{C}$ 为 $\mathsf{Sp}$ 在 $(\mathsf{Pr}^{\mathrm{L}})^{\otimes}$ 上的模。
:::

## 例子

::: example
- 令 $\mathcal{C} = \mathsf{PSh}(\mathcal{C}_0)$
  且 $\mathcal{D} = \mathsf{PSh}(\mathcal{D}_0)$，
  则 $\mathcal{C} \otimes \mathcal{D} \simeq \mathsf{PSh}(\mathcal{C}_0 \times \mathcal{D}_0)$。

- 令 $\mathcal{C} \to \mathcal{C}'$ 和 $\mathcal{D} \to \mathcal{D}'$ 分别为
  $\mathcal{C}$ 和 $\mathcal{D}$ 关于 $W_{\mathcal{C}}$ 和 $W_{\mathcal{D}}$
  的[[Bousfield 局部化|左 Bousfield 局部化]]，
  则 $\mathcal{C}'\otimes \mathcal{D}'$ 是 $\mathcal{C}\otimes \mathcal{D}$
  关于
  $W_{\mathcal{C}} \otimes \mathcal{D}^{\kappa} \cup \mathcal{C}^{\kappa} \otimes W_{\mathcal{D}}$
  的左 Bousfield 局部化。
:::

以下两则例子揭示[[拓扑空间]]上的[[(∞,1)-层|层]]与 Lurie 张量积之间的关系。

::: example
对于拓扑空间 $X$、$Y$，
有[[意象]]等价 $\mathsf{Sh}(X) \otimes \mathsf{Sh}(Y) \simeq \mathsf{Sh}(X\times Y)$。
:::

::: example
对于拓扑空间 $X$ 以及可表现范畴 $\mathcal{C}$，
有意象等价 $\mathsf{Sh}(X) \otimes \mathcal{C} \simeq \mathsf{Sh}(X,\mathcal{C})$。
:::

::: example
令 $R$ 和 $S$ 为 [[$\mathbb{E}_{\infty}$-环]]，
则有范畴等价
$R\text{-}\mathsf{Mod} \otimes S\text{-}\mathsf{Mod} \simeq (R\otimes_{\mathbb{S}}S)\text{-}\mathsf{Mod}$。
特别地，对于一般的环 $R$ 和 $S$，
有 $\mathcal{D}(R) \otimes \mathcal{D}(S) \simeq (HR\otimes_{\mathbb{S}}HS)\text{-}\mathsf{Mod}$。
:::

## 参考文献

```bibliography
HA:
  type: book
  title: Higher Algebra
  author: Jacob Lurie
  year: 2017
  url: https://www.math.ias.edu/~lurie/papers/HA.pdf
```
