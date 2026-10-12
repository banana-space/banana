---
title: 局部积闭范畴
aliases: [局部 Descartes 闭范畴]
categories: [范畴代数]
notices:
  - name: 问题
    items:
      - “集合范畴局部积闭”一节最后的公式中，$\prod\nolimits_f$ 一行的注释“集合的不交并”似乎应为“集合的积”，不交并对应的是 $\sum\nolimits_f$ 一行。
---

在[[范畴论]]中，**局部积闭范畴**指[[俯范畴]]都是[[积闭范畴]]的范畴，
这概括了“在一个[[语境]]下[[积闭范畴|积闭]]”的思想。
局部积闭范畴是[[外延类型论]]的[[范畴语义]]，参见[[依值类型论]]。

## 定义

::: definition
对范畴 $\mathcal{C}$，
如果对它的所有对象 $A$，
俯范畴 $\mathcal{C}_{/A}$ 都有积闭范畴结构，
那么称它是**局部积闭范畴**。
:::

部分文献中会直接要求局部积闭范畴包含终对象。

## 例子

- [[意象]]都是局部积闭的。另外，若局部积闭范畴包含[[子对象分类子]]，
  那么它是[[意象|初等意象]]。

- [[集合范畴]] Set 是局部积闭的，参见 @sec:sets。

- [[预层|预层范畴]] $\mathcal{C}^\text{op} → \mathsf{Set}$ 是局部积闭的。

## 性质

::: proposition
如果一个局部积闭范畴有[[终对象]] $*$，
那么它是积闭范畴。
:::

::: proof
这种情况下 $\mathcal{C}_{/*}$ 是积闭的，
而 $\mathcal{C}_{/*}\simeq \mathcal{C}$。
:::

::: proposition
若范畴 $\mathcal{C}$ 是局部积闭范畴，
那么对于任意态射 $f∈ \mathcal{C}(X, Y)$，
有[[依值积]] $\prod_f$ 存在。
:::

### 伴随三元组

::: theorem
若范畴 $\mathcal{C}$ 有所有的[[拉回 (范畴论)|拉回]]且有所有的[[依值积]]，
那么它是局部积闭范畴。
:::

换言之，局部积闭范畴对应了有如下[[伴随函子]]图表的范畴 $\mathcal C$，
其中 $f ∈ \mathcal C(B, A)$ 是任意态射：

\[
\begin{tikzcd}
  \mathcal C_{/A}
     \ar[rr, "f^*"{description}] & & \mathcal C_{/B}
     \ar[ll, bend left=45, "\prod_f", "\bot"']
     \ar[ll, bend right=45, "\sum_f"', "\bot"]
\end{tikzcd}
\]

其中：

- $f^*$ 是“顺着 $f$ 拉回”的函子，行为如下图所示：
  \[
  \begin{tikzcd}
    \bullet \ar[r] \ar[d, "输出~f^*(g)"']
     \ar[dr, phantom, pos=.2, "\ulcorner"] &
    \bullet \ar[d, "输入~g"] \\
    B \ar[r, "f"'] &
    A
  \end{tikzcd}
  \]
  该函子的存在对应着“$\mathcal C$ 有所有拉回”的条件。

- $\sum_f$ 是[[依值和]]函子，对于 $g∈ \mathcal C(\bullet, B)$，
  给出 $f\circ g$。该函子总是存在。

- $\prod_f$ 是[[依值积]]函子。
  该函子给出了“所有俯范畴都积闭”这一条件，也就是说在 $\mathcal C_{/A}$ 中，
  函子 $(- × Y)$（也可以写作 $(- ×_A Y)$，强调这个操作是在纤维里发生的）
  总是有右伴随，这一条件可以由下图所示的伴随函子复合给出：
  \[
  \begin{tikzcd}
    \mathcal C_{/A}
    \ar[rr, bend left, "f^*"{description}]
    \ar[rrrr, bend left=45, "-×_A Y"']
    & \bot &
    \mathcal C_{/B}
    \ar[ll, bend left, "\prod_f"{description}]
    \ar[rr, bend left, "\sum_f"{description}]
    & \bot &
    \mathcal C_{/A}
    \ar[ll, bend left, "f^*"{description}]
    \ar[llll, bend left=45, "需要的右伴随"{description}]
  \end{tikzcd}
  \]

::: theorem
局部积闭范畴满足[[Beck–Chevalley 条件]]，即对于拉回方块
\[
\begin{tikzcd}
  B \ar[r, "v"] \ar[d, "f"']
    \ar[dr, phantom, pos=.2, "\ulcorner"] &
  D \ar[d, "g"] \\
  A \ar[r, "u"'] &
  C
\end{tikzcd}
\]
满足如下[[自然同构]]：
\[
\begin{aligned}
  g^* \circ \sum\nolimits_u  ≅ \sum\nolimits_v  \circ f^*\\
  g^* \circ \prod\nolimits_u ≅ \prod\nolimits_v \circ f^*
\end{aligned}
\]
:::

### 集合范畴局部积闭 {@sec:sets}

可以通过集合范畴中的情况来理解局部积闭范畴：

- 对象 $(X, x\colon X→A) ∈ \mathcal C_{/A}$
  是 $A$ 为指标的族。$a∈A$ 对应的纤维是 $\set{u∈X|x(u)=a}$，
  也就是“$X$ 中，由 $x$ 映射到 $a$ 的[[子集]]”。

- 态射 $f∈ (X, x) → (Y, y)$ 则是以 $A$ 为指标的一组映射。

在这个视角下，将对象记作 $\set{X_a | a∈A}$，态射记作 $\set{X_a → Y_a | a∈ A}$，
那么对于 $f∈\mathcal C(B, A)$，可以这样看待 $\mathcal C$ 中的伴随三元组：

\[
\begin{aligned}
  \sum\nolimits_f\set{Y_b | b∈B} &=
    \Set{\sum_{b ∈ B_a} Y_b | a∈A} \text{, 集合的族}\\
  f^*\set{X_a | a∈A} &=
    \Set{X_{f(b)} | b ∈ B} \\
  \prod\nolimits_f\set{Y_b | b∈B} &=
    \Set{\prod_{b ∈ B_a} Y_b | a∈A} \text{, 集合的不交并}
\end{aligned}
\]

```terms
局部积闭范畴:
  en: locally cartesian closed category (LCCC)
  de: lokal kartesische abgeschlossene Kategorie
  fr: catégorie localement fermée cartésienne
  la: categoria localiter clausa cartesiana
```
