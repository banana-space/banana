---
title: Day 卷积
navboxes: [高阶代数]
---

::: convention
在本文中，

- 将舍弃 $\infty$-符号，
  即使用[[范畴]]指代 [[$(\infty,1)$-范畴]]，
  使用[[算畴]]指代 [[$(\infty,1)$-算畴]]。

:::

令 $\mathcal{C}$、$\mathcal{D}$ 为[[对称幺半范畴]]，
**Day 卷积**是一种赋予[[函子范畴]] $\mathsf{Fun}(\mathcal{C},\mathcal{D})$ 对称幺半结构的方式。
粗略来说，对于函子 $F,G \colon \mathcal{C} \to \mathcal{D}$，
其 Day 卷积 $F \otimes_{\text{Day}} G$ 定义为以下[[左 Kan 扩张]]
\[
\begin{tikzcd}
  \mathcal{C} \times \mathcal{C} \ar[r,"F \times G"] \ar[d,"\otimes_{\mathcal{C}}"] & \mathcal{D} \times \mathcal{D} \ar[d,"\otimes_{\mathcal{D}}"]\\
  \mathcal{C} \ar[r,dashed,"F \otimes_{\operatorname{Day}} G"] & \mathcal{D}.
\end{tikzcd}
\]
此时，该构造将给出 $\mathsf{Fun}(\mathcal{C},\mathcal{D})$ 上的对称幺半结构，
并且可以发现松对称幺半函子为该对称幺半结构的[[交换代数]]。

## 定义

::: definition
考虑算畴 $\mathcal{O}$、$\mathcal{P}$，
$\mathcal{O}$ 到 $\mathcal{P}$ 的 **Day 卷积算畴** $\mathsf{Day}(\mathcal{O},\mathcal{P})$
是指这样的算畴：
它配有算畴间的态射
\[
\operatorname{ev} \colon \mathsf{Day}(\mathcal{O},\mathcal{P}) \times \mathcal{O} \to \mathcal{P},
\]
满足以下泛性质：对于任意算畴 $\mathcal{Q}$，
都有
\[
\mathsf{Fun}_{\mathsf{Op}}(\mathcal{Q},\mathsf{Day}(\mathcal{O},\mathcal{P})) \simeq \mathsf{Fun}_{\mathsf{Op}}(\mathcal{Q}\times \mathcal{O},\mathcal{P}).
\]
:::

粗略来说，Day 卷积算畴想要体现这样的指数律：
\[
\{算畴态射\, \mathcal{Q} \to \mathsf{Day}(\mathcal{O},\mathcal{P})\} \leftrightsquigarrow \{算畴态射\, \mathcal{Q} \times \mathcal{O} \to \mathcal{P}\}.
\]

### Hinich 模型

当算畴 $\mathcal{O}$ 和 $\mathcal{P}$ 分别表示对称幺半范畴 $\mathcal{C}$ 与对称幺半范畴
$\mathcal{D}$ 时，
[[Vladimir Hinich]] 给出了一种更加具体的 Day 卷积算畴刻画，
本文的刻画来源于 [@winges2025hinichsmodeldayconvolution]。
粗略来说，该刻画来源于以下反直化
\[
\left( \mathsf{Cat}^{\otimes} \right)^{\operatorname{op}} \times \mathsf{Cat}^{\otimes} \to \mathsf{Cat},
\quad (\mathcal{C},\mathcal{D}) \mapsto \mathsf{Fun}^{\otimes\text{-}\operatorname{lax}}(\mathcal{C},\mathcal{D}).
\]

::: definition
记 $\mathsf{Ar}^{\operatorname{oplax}} \subseteq \mathsf{Cat}_{/[1]}$
为全体[[纤维范畴|推出纤维化]] $\mathcal{E} \to [1]$ 所张成的全子范畴。
:::

根据[[直化定理]]，
$\mathsf{Ar}^{\operatorname{oplax}}$ 中的对象对应于函子 $F \colon \mathcal{C} \to \mathcal{D}$，
而 $\mathsf{Ar}^{\operatorname{oplax}}$ 中的态射则对应于函子间的自然变换。

::: theorem [Hinich 模型]
令  $\mathcal{C}$、$\mathcal{D}$ 为对称幺半范畴，
对于范畴 $\mathcal{E}$，记 $\mathcal{E}^{\times}$ 为其对应的乘积算畴。
那么此时 $\mathsf{Day}(\mathcal{C},\mathcal{D})$ 可视为拉回
\[
\begin{tikzcd}
  \mathsf{Day}(\mathcal{C},\mathcal{D}) \ar[r]\ar[d]\ar[dr,phantom,pos=0.2,"\lrcorner"] & \left(\mathsf{Ar}^{\operatorname{oplax}}\right)^{\times}\ar[d,"{(s,t)}"]\\
  \mathsf{Comm} \ar[r,"{(\mathcal{C},\mathcal{D})}"] & \left( \mathsf{Cat} \times \mathsf{Cat} \right)^{\times}.
\end{tikzcd}
\]
:::

## 性质

::: proposition
令 $\mathcal{C}$ 为对称幺半范畴，
则对于任意算畴 $\mathcal{P}$，
Day 卷积算畴 $\mathsf{Day}(\mathcal{C},\mathcal{P})$ 存在，
事实上，函子 $- \otimes \mathcal{C} \colon \mathsf{Op} \to \mathsf{Op}$ 具有右伴随
\[
\mathsf{Day}(\mathcal{C},-) \colon \mathsf{Op} \to \mathsf{Op}.
\]
:::

::: proposition
令 $\mathcal{O}$、$\mathcal{P}$ 为算畴，
如果 Day 卷积算畴 $\mathsf{Day}(\mathcal{O},\mathcal{P})$ 存在，
则其底范畴可刻画为
\[
\mathsf{Day}(\mathcal{O},\mathcal{P})_{\left< 1 \right>} \simeq \mathsf{Fun}(\mathcal{O}_{\left< 1 \right>},\mathcal{P}_{\left< 1 \right>})
\]
:::

::: proposition
令 $\mathcal{O}$、$\mathcal{P}$ 为算畴，
如果 Day 卷积算畴 $\mathsf{Day}(\mathcal{O},\mathcal{P})$ 存在，
则其交换代数对象可刻画为
\[
\mathsf{CAlg}(\mathsf{Day}(\mathcal{O},\mathcal{P})) \simeq \mathsf{Fun}_{\mathsf{Op}}(\mathcal{O},\mathcal{P}).
\]
:::

::: proposition
令 $\mathcal{C}$、$\mathcal{D}$ 为对称幺半范畴，
$I$ 为有限集，令 $\{F_i \colon \mathcal{C} \to \mathcal{D}\}$ 为一族函子，
则对于函子 $G \colon \mathcal{C} \to \mathcal{D}$，有同构
\[
\mathcal{O}(\{F_i\}_{i \in I},G) \simeq \operatorname{Nat}\left( \bigotimes_{\mathcal{D}}^I \circ \prod_{i \in I} F_i, G \circ \bigotimes_{\mathcal{C}}^I \right),
\]
此处左侧 $\mathcal{O}$ 表示 $\mathsf{Day}(\mathcal{C},\mathcal{D})$，
右侧的 $\operatorname{Nat}$ 表示自然变换所构成的生象。
:::

## Day 卷积幺半结构

::: proposition
令 $\mathcal{C}$、$\mathcal{D}$ 为对称幺半范畴。
对于 $c \in \mathcal{C}$ 以及 $n \in \mathbb{N}$，考虑拉回图表
\[
\begin{tikzcd}
  \left( \otimes_{\mathcal{C}}^n \right)_{/c} \ar[r]\ar[d]\ar[dr,phantom,pos=0.2,"\lrcorner"] & \mathsf{Ar}(\mathcal{C}) \ar[d,"{(s,t)}"]\\
  \mathcal{C}^n \ar[r,"{(\otimes_{\mathcal{C}}^n,c)}"] & \mathcal{C} \times \mathcal{C}.
\end{tikzcd}
\]
记 $\mathcal{K}$ 表示全体 $\left( \otimes_{\mathcal{C}}^n \right)_{/c}$。
如果满足以下条件：

- $\mathcal{D}$ 具有所有以 $\mathcal{K}$ 为指标的余极限。
- $\otimes_{\mathcal{D}} \colon \mathcal{D} \times \mathcal{D} \to \mathcal{D}$ 的每个分量均保持以
  $\mathcal{K}$ 为指标的余极限。

那么 $\mathsf{Day}(\mathcal{C},\mathcal{D})$ 给出 $\mathsf{Fun}(\mathcal{C},\mathcal{D})$
上的对称幺半结构。
:::

::: remark
当 $\mathcal{C}$ 为小范畴，$\mathcal{D}$ 为余完备范畴时，
如果 $\otimes_{\mathcal{D}}$ 的每个分量均保持余极限，
那么上述条件自动满足。
:::

::: proof [证明（关键步骤）]
对于有限集 $I$，令 $\{F_i\}_{i \in I}$ 为一族以 $I$ 为指标的函子，
那么此时 $\bigotimes_{i \in I}^{\text{Day}} F_i$ 定义为左 Kan 扩张
\[
\begin{tikzcd}
  \mathcal{C}^I \ar[d,"\bigotimes_{\mathcal{C}}^I"]\ar[r,"\prod_{i \in I} F_i"] & \mathcal{D}^I \ar[d,"\bigotimes_{\mathcal{D}}^I"]\\
  \mathcal{C} \ar[r, dashed,"\bigotimes_{i \in I}^{\text{Day}} F_i"] & \mathcal{D}.
\end{tikzcd}
\]
利用 Kan 扩张的逐点刻画得到，对于 $c \in \mathcal{C}$有
\[
\bigotimes_{i \in I}^{\text{Day}} F_i (c) \coloneqq \operatorname{colim}_{\{c_i'\}_{i \in I} \in \left( \otimes_{\mathcal{C}}^I \right)_{/c}} \left( \bigotimes_{i \in I} F_i(c'_i) \right).
\]
利用左 Kan 扩张的泛性质，
足以验证 $\mathsf{Day}(\mathcal{C},\mathcal{D}) \to \mathsf{Comm}$ 为推出纤维化（如使用
$\mathsf{Fin}_*$ 则只需再进行带点化即可）。
:::

::: remark
上述步骤给出了以 $I$ 为指标的张量积函子
\[
\bigotimes_{\text{Day}}^I \colon \mathsf{Fun}(\mathcal{C},\mathcal{D})^I \to \mathsf{Fun}(\mathcal{C},\mathcal{D}).
\]
:::

事实上，利用自然变换的[[端]]公式
可知范畴 $\mathsf{Fun}(\mathcal{C},\mathsf{Ani})$ 上 Day 卷积给出的幺半结构是闭的。

::: proposition
令 $\mathcal{C}$ 为小对称幺半范畴。
则 $\mathsf{Fun}(\mathcal{C},\mathsf{Ani})$ 上 Day 卷积所给出的对称幺半结构是闭的，
此时内 Hom 刻画为
\[
\underline{\operatorname{Hom}}_{\mathsf{Fun}(\mathcal{C},\mathsf{Ani})}(F,G)(X) \simeq \int_{Y \in \mathcal{C}} \operatorname{Hom}_{\mathsf{Ani}} (F(Y),G(X \otimes_{\mathcal{C}} Y)).
\]
:::

## 参考文献*

```bibliography
winges2025hinichsmodeldayconvolution:
  type: preprint
  title: Hinich's model for Day convolution revisited
  author: Christoph Winges
  year: 2025
  arxiv: '2506.06025'
```

```terms
Day 卷积:
  en: Day convolution
```
