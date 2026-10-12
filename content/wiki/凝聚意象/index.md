---
title: 凝聚意象
aliases: [凝聚景]
categories: [范畴逻辑, 层论, 高阶范畴论]
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  将经典的范畴称为 $1$-范畴。
- [[意象]]都指 [[$(\infty,1)$-意象]]。
  在意象中，覆盖是指[[有效满态射]]。

:::

**凝聚意象**是带有一定有限性条件的[[意象]]，
推广了[[谱空间]]上的[[层]]范畴与[[一阶理论]]的[[分类意象]]。
凝聚性是一个递归定义的概念：
$n$-凝聚性要求对象的纤维积在 $(n-1)$-凝聚对象上表现良好，
而凝聚性则要求对所有 $n$ 同时成立。

凝聚意象的核心性质是 Deligne–Lurie 完备性定理：
凝聚意象具有足够多的点。

## 动机

### 从拟紧对象到凝聚对象

凝聚对象的概念源自对拟紧对象的“关于基变换的万有逼近”。

::: definition
令 $\mathcal{T}$ 为意象。

- 称 $X \in \mathcal{T}$ 为**拟紧对象**，
  是指任意覆盖 $\coprod_{i \in I} U_i \twoheadrightarrow X$
  都可以被加细为有限覆盖。

- 称意象 $\mathcal{T}$ 为**拟紧的**，
  是指终对象 $\ast \in \mathcal{T}$ 为拟紧对象。

:::

拟紧性的核心缺陷在于它不关于基变换封闭：
给定拟紧对象 $Y, Z$ 以及态射 $Y \to X$，$Z \to X$，
纤维积 $Y \times_X Z$ 未必拟紧。
在[[代数几何]]中，这一问题不会出现，
因为[[仿射概形]]既拟紧又[[拟分离概形|拟分离]]，
而概形总可以被仿射概形覆盖。
但在一般的意象中，我们需要更系统的方法来处理基变换下的有限性。

凝聚对象正是为此而设计的：
它是拟紧性在“关于基变换封闭”意义下的逐阶逼近。
第一阶逼近是拟分离性：

::: definition
令 $\mathcal{T}$ 为意象。
称 $X \in \mathcal{T}$ 为**拟分离的**，
是指对于拟紧对象 $Y, Z$ 以及态射 $Y \to X$，$Z \to X$，
纤维积 $Y \times_X Z$ 都是拟紧的。
:::

::: remark
在代数几何中，$X$ 拟分离等价于对角态射 $\Delta_X$ 拟紧。
但在一般的意象中，$\Delta_X$ 拟紧是一种更强的条件：
“$Y \times_X Z$ 拟紧”的方向总是成立的，但反过来未必。
代数几何中两者等价的原因恰好在于仿射概形的存在。
这提示我们：正确的做法不是单纯要求拟分离性，
而是递归地要求各阶纤维积的有限性，这就导向了 $n$-凝聚对象的定义。
:::

### 凝聚对象的意义

凝聚对象在上同调理论中具有重要意义。

::: theorem
令 $\mathcal{T}$ 为意象。
如果 $X \in \mathcal{T}$ 为凝聚对象，
则对于任意 $n \geq -1$，
截断 $\tau_{n-1}(X)$ 为 $\mathcal{T}_{\leq n-1}$ 中的紧对象。
:::

::: remark
由此可知，对于凝聚对象 $X$，
函子
\[
\mathsf{Ab}(\mathcal{T}_{\leq 0}) \to \mathsf{Ab}^{\mathbb{Z}}, \quad A \mapsto H^*(X;A)
\]
保持滤余极限。
这解释了许多理论中的紧性现象，例如[[平展上同调群]]保持滤余极限。

需要注意，凝聚对象的各阶截断都是紧对象，
但凝聚对象自身未必是意象 $\mathcal{T}$ 中的紧对象。
:::

## 定义

### $n$-凝聚对象与 $n$-凝聚意象

以下通过递归定义 $n$-凝聚对象的概念。

::: definition
令 $\mathcal{T}$ 为意象，$n \geq 0$。

- 称 $\mathcal{T}$ 为**局部 $n$-凝聚**的意象，
  是指 $\mathcal{T}$ 中的每个对象都可以被一些 $n$-凝聚对象所覆盖。

- $n$-凝聚对象按如下方式递归定义：

  - 称 $X \in \mathcal{T}$ 为 **$0$-凝聚的**，
    是指 $X$ 为拟紧对象。

  - 对于 $n \geq 1$，称 $X \in \mathcal{T}$ 为 **$n$-凝聚的**，
    是指满足以下三个条件：

    1. 切片意象 $\mathcal{T}_{/X}$ 为 $(n-1)$-凝聚意象。

    2. $\mathcal{T}_{/X}$ 为局部 $(n-1)$-凝聚意象。

    3. 对于任意图表 $Y \to X \leftarrow Z$，
       若 $Y$ 和 $Z$ 为 $(n-1)$-凝聚对象，则 $Y \times_X Z$ 也为 $(n-1)$-凝聚对象。

- 称 $\mathcal{T}$ 为 **$n$-凝聚意象**，是指终对象 $\ast$ 为 $n$-凝聚对象。

:::

::: remark
记 $\mathcal{T}^{n\text{-coh}}$ 为 $\mathcal{T}$ 中全体 $n$-凝聚对象所张成的全子范畴，
则有递降链
\[
\mathcal{T} \supseteq \cdots \supseteq \mathcal{T}^{n\text{-coh}} \supseteq \mathcal{T}^{(n+1)\text{-coh}} \supseteq \cdots
\]
条件 (3) 的作用是保证 $\mathcal{T}^{(n-1)\text{-coh}}$ 关于在 $X$ 上的纤维积封闭，
这正是使得拟紧性“关于基变换稳定”的关键要求。
:::

::: example
- 意象 $\mathcal{T}$ 为 $1$-凝聚意象等价于说 $\mathcal{T}$ 拟紧，局部拟紧，且拟分离。

- 意象 $\mathcal{T}$ 为 $2$-凝聚意象等价于说 $\mathcal{T}$ 拟紧拟分离，局部拟紧拟分离，
  且对于全体拟紧拟分离的 $X, Y \in \mathcal{T}$，
  乘积 $X \times Y$ 仍拟紧拟分离。

:::

### 凝聚对象与凝聚意象

::: definition
令 $\mathcal{T}$ 为意象。

- 称 $X \in \mathcal{T}$ 为**凝聚对象**，
  是指对于所有 $n \geq 0$，$X$ 均为 $n$-凝聚对象。

- 称 $\mathcal{T}$ 为**凝聚意象**，
  是指终对象 $\ast$ 为凝聚对象。

- 称 $\mathcal{T}$ 为**局部凝聚意象**，
  是指 $\mathcal{T}$ 中的每个对象都可以被一些凝聚对象所覆盖。

记 $\mathcal{T}^{\mathrm{coh}} \coloneqq \bigcap_n \mathcal{T}^{n\text{-coh}}$
为全体凝聚对象所张成的全子范畴。
:::

::: example
在生象范畴 $\mathsf{Ani}$ 中，
生象 $X$ 为凝聚对象当且仅当对于每个 $n \geq 0$ 和每个基点 $x \in X$，
同伦群 $\pi_n(X, x)$ 均为有限群。
:::

### 相对凝聚性

::: definition
令 $\mathcal{T}$ 为意象，$f \colon X \to Y$ 为态射。
称 $f$ 为**相对 $n$-凝聚**的，
是指对于每个 $n$-凝聚对象 $Z$ 以及态射 $Z \to Y$，
纤维积 $Z \times_Y X$ 仍为 $n$-凝聚对象。
:::

::: remark [警告]
相对 $n$-凝聚性与 $f$ 作为切片意象 $\mathcal{T}_{/Y}$ 中的对象是否 $n$-凝聚是两个不同的条件。
前者关注的是沿 $f$ 的拉回对凝聚对象的保持性，
后者关注的是 $f$ 在 $\mathcal{T}_{/Y}$ 内部的有限性。
:::

::: proposition
令 $\mathcal{T}$ 为局部 $n$-凝聚意象，
$\mathcal{T}_0 \subseteq \mathcal{T}$ 为由 $n$-凝聚对象所张成的全子范畴。

- 态射 $f \colon X \to Y$ 相对 $n$-凝聚，当且仅当对于每个 $U \in \mathcal{T}_0$ 以及态射 $U \to Y$，
  拉回 $U \times_Y X$ 为 $n$-凝聚对象。

- 对象 $X \in \mathcal{T}$ 为 $(n+1)$-凝聚对象，当且仅当 $X$ 拟紧，
  且对于 $U, V \in \mathcal{T}_0$ 以及图表 $U \to X \leftarrow V$，
  纤维积 $U \times_X V$ 为 $n$-凝聚对象。

:::

::: remark
第二条给出了 $(n+1)$-凝聚对象的实用判据：
无需检验所有 $(n-1)$-凝聚对象的纤维积，只需在 $n$-凝聚对象上检验即可。
:::

::: corollary
意象 $\mathcal{T}$ 为局部凝聚意象，当且仅当存在全子范畴 $\mathcal{T}_0 \subseteq \mathcal{T}$
关于纤维积封闭，且 $\mathcal{T}_0$ 中的每个对象均拟紧，
并且 $\mathcal{T}$ 中的每个对象都可以被 $\mathcal{T}_0$ 中的对象所覆盖。
:::

## 与连合性和截断性的关系

凝聚性与[[连合|连合性]]及[[截断 (范畴论)|截断性]]之间有如下相互作用。

::: proposition
令 $\mathcal{T}$ 为意象，$f \colon X \to Y$ 为态射。

1. 若 $X$ 为 $n$-凝聚且 $f$ 为 $n$-连合，则 $Y$ 为 $n$-凝聚。

2. 若 $Y$ 为 $n$-凝聚且 $f$ 为 $(n+1)$-连合，则 $X$ 为 $n$-凝聚。

3. 若 $Y$ 为 $n$-凝聚，$f$ 为 $(n-2)$-截断，且 $X$ 为 $(n-1)$-凝聚，则 $X$ 为 $n$-凝聚。

:::

::: remark
直观上，(1) 说凝聚对象的“高连合商”仍凝聚，(2) 说凝聚对象的“高连合覆盖”仍凝聚，
(3) 说凝聚对象上的“低截断”对象可以继承凝聚性。
:::

::: corollary
对于态射 $f \colon X \to Y$，考虑[[连合–截断分解系|连合–截断分解]]
\[
X \to \tau_{n-1}(X/Y) \to Y.
\]
若 $X$ 为 $n$-凝聚且 $Y$ 为 $m$-凝聚，则 $\tau_{n-1}(f)$ 为 $\max(n,m)$-凝聚对象。
:::

## 通过凝聚景刻画凝聚意象

凝聚意象可以通过凝聚景来构造和刻画。

::: definition {@def-coh-site}
称[[(∞,1)-景|景]] $(\mathcal{C},\tau)$ 为**凝聚景**，
是指 $\mathcal{C}$ 中的每个 $\tau$-覆盖都有有限子覆盖。
:::

::: proposition
- 对于凝聚景 $(\mathcal{C},\tau)$，
  若 $\mathcal{C}$ 具有全体拉回，
  则 $\mathsf{Shv}_{\tau}(\mathcal{C})$ 为局部凝聚意象。
  若 $\mathcal{C}$ 还具有终对象，
  则 $\mathsf{Shv}_{\tau}(\mathcal{C})$ 为凝聚意象。

- 反过来，若 $\mathcal{T}$ 为[[超完备性|超完备]]的局部凝聚意象，
  则存在凝聚景 $(\mathcal{C},\tau)$（其中 $\mathcal{C}$ 带有拉回），
  使得 $\mathcal{T} \simeq \mathsf{Shv}_{\tau}(\mathcal{C})^{\mathrm{hyp}}$。
  若 $\mathcal{T}$ 还是凝聚意象，
  则此时 $\mathcal{C}$ 带有有限极限。

:::

::: remark
此命题表明凝聚景与（超完备）凝聚意象之间有紧密的对应关系。
凝聚景的“每个覆盖有有限子覆盖”条件正是拟紧性在景层面的反映。
:::

## 例子

- 令 $X$ 为[[谱空间]]，则 $X$ 的拟紧开集构成凝聚景。
  相应的层范畴 $\mathsf{Shv}(X)$ 为凝聚意象。
  反过来，凝聚的 $1$-意象（即经典的凝聚意象）的点空间恰好是谱空间。

- 更一般地，对于[[位象]] $X$，
  层范畴 $\mathsf{Shv}(X)$ 为 $1$-凝聚意象当且仅当
  $X$ 中的每个元素都是拟紧元素的并，且拟紧元素的交仍为拟紧元素。

- 对于[[拟紧拟分离概形]] $X$，其上的[[平展景]]和 [[平坦景|fppf 景]]都是凝聚景，
  对应的意象为凝聚意象。

- [[凝聚范畴]]上具有自然的 [[Grothendieck 拓扑]]，
  使之成为凝聚景，对应的意象成为凝聚意象。
  特别地，[[一阶理论]]的[[分类意象]]是凝聚意象。

## 性质

### Deligne–Lurie 完备性定理

以下定理是凝聚意象理论的核心结果，证明详见词条 [[Deligne–Lurie 完备性定理]]。

::: definition
令 $\mathcal{T}, \mathcal{S}$ 为意象，
称几何态射 $\varphi_* \colon \mathcal{T} \to \mathcal{S}$ 为**满射**，
是指 $\varphi^*$ 能够检测出[[有效满态射]]，
即 $\mathcal{S}$ 中态射 $\alpha$ 为有效满态射当且仅当 $\varphi^*(\alpha)$ 为有效满态射。
:::

::: theorem [Deligne–Lurie]
令 $\mathcal{T}$ 为局部凝聚意象。
则存在[[完备 Boole 代数]] $\Lambda$ 使得典范的几何态射的复合
\[
\prod_{s \in \mathrm{Spec}(\Lambda)} \mathsf{Ani} \twoheadrightarrow \mathcal{T}^{\mathrm{hyp}} \twoheadrightarrow \mathcal{T}
\]
中，第一个态射为几何态射的满射（第二个态射自动为几何态射的满射）。
:::

::: corollary
令 $\mathcal{T}$ 为局部凝聚意象，
则其[[超完备化]] $\mathcal{T}^{\mathrm{hyp}}$ 具有足够多的点。
:::

::: remark
需要注意，局部凝聚意象 $\mathcal{T}$ 本身未必具有足够多的点，
足够多的点是超完备化 $\mathcal{T}^{\mathrm{hyp}}$ 的性质。
:::

## 参考文献

```bibliography
LurieSAG:
  type: book
  author: 'Lurie, Jacob'
  title: Spectral Algebraic Geometry
  year: 2018
  note: §A.2
  url: https://www.math.ias.edu/~lurie/papers/SAG-rootfile.pdf
BarwickGlasmanHaine:
  type: article
  author: ['Barwick, Clark', 'Glasman, Saul', 'Haine, Peter']
  title: Exodromy
  year: 2020
```

```terms
凝聚意象:
  en: coherent topos
  fr: topos cohérent
凝聚对象:
  en: coherent object
拟紧:
  en: quasi-compact
拟分离:
  en: quasi-separated
```
