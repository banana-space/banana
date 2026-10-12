---
title: '$(\infty,1)$-层'
aliases: ['(∞,1)-景', ∞-叠]
categories: [层论, 高阶范畴论]
navboxes: [层论, 高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  将经典的范畴称为 $1$-范畴。
- [[意象]]都指 [[$(\infty,1)$-意象]]。

:::

**$(\infty,1)$-层**是[[层]]在 [[$(\infty,1)$-范畴]]中的推广。
粗略来说，
$(\infty,1)$-层是对于 [[$(\infty,1)$-景]]中的覆盖筛均满足[[下降]]条件的 [[$(\infty,1)$-预层]]。
由于此时涉及高阶的同伦结构，
$(\infty,1)$-层的下降条件不再仅仅涉及核对（即 Čech 脉的前两项），
而是需要对整个 [[Čech 脉]]取极限。

全体 $(\infty,1)$-层构成预层范畴的反射子范畴，
其左伴随即为[[层化]]函子。
当取值于[[生象]]范畴时，$(\infty,1)$-景上的层范畴构成 [[$(\infty,1)$-意象]]。

## 定义

### 筛与景

我们首先回顾筛和景的概念，它们是定义层的基础设施。

::: definition [筛]
令 $\mathcal{C}$ 为范畴，$U \in \mathcal{C}$ 为对象。

1. $U$ 上的 **[[景|筛]]** 是指全子范畴 $\mathcal{U} \subseteq \mathcal{C}_{/U}$，
   满足：对于 $U$ 上的任意态射 $V' \to V$，若 $V \in \mathcal{U}$ 则 $V' \in \mathcal{U}$。

2. 令 $f \colon U' \to U$ 为 $\mathcal{C}$ 中的态射，$\mathcal{U}$ 为 $U$ 上的筛。
   $\mathcal{U}$ 沿 $f$ 的**拉回** $f^*\mathcal{U}$ 是 $U'$ 上的筛，
   由全体满足 $f \circ g \in \mathcal{U}$ 的态射 $g \colon V \to U'$ 所张成。

:::

::: definition
令 $\mathcal{C}$ 为范畴，$(U_i \to U)_{i \in I}$ 为 $\mathcal{C}$ 中的一族态射。
**由 $(U_i \to U)_i$ 生成的筛**是指由全体穿过某个 $U_i$ 的态射 $V \to U$ 所构成的 $U$ 上的筛。
:::

::: definition [$(\infty,1)$-景]
**$(\infty,1)$-景**是指二元组 $(\mathcal{C},\tau)$，
其中 $\mathcal{C}$ 为范畴，
$\tau$ 对每个 $U \in \mathcal{C}$ 指定一族 $U$ 上的筛（称为**覆盖筛**），
满足以下条件：

1. **平凡覆盖**：极大筛 $h_U = \mathcal{C}_{/U}$ 属于 $\tau(U)$。

2. **局部性**：若 $\mathcal{S} \in \tau(U)$，且 $\mathcal{T} \subseteq h_U$ 是一个筛，
   满足对每个 $f \colon V \to U$ 属于 $\mathcal{S}$ 都有 $f^*\mathcal{T} \in \tau(V)$，
   则 $\mathcal{T} \in \tau(U)$。

3. **稳定性**：若 $\mathcal{S} \in \tau(U)$，$f \colon V \to U$，则 $f^*\mathcal{S} \in \tau(V)$。

无歧义时将 $(\mathcal{C},\tau)$ 简记为 $\mathcal{C}$。
:::

### 下降与层

::: definition [下降信息]
令 $(\mathcal{C},\tau)$ 为 $(\infty,1)$-景，$\mathcal{D}$ 为完备的范畴，
$\mathcal{F} \colon \mathcal{C}^{\mathrm{op}} \to \mathcal{D}$ 为 $\mathcal{D}$-值预层，
$\mathcal{U}$ 为对象 $U \in \mathcal{C}$ 上的筛。

1. $\mathcal{F}$ 关于 $\mathcal{U}$ 的**下降信息**定义为极限
   \[
   \mathrm{Desc}(\mathcal{U},\mathcal{F}) \coloneqq \operatorname{lim}_{V \in \mathcal{U}^{\mathrm{op}}} \mathcal{F}(V).
   \]

2. 称 $\mathcal{F}$ 可沿筛 $\mathcal{U}$ **下降**，是指典范态射
   \[
   \mathcal{F}(U) \xrightarrow{\;\sim\;} \mathrm{Desc}(\mathcal{U},\mathcal{F})
   \]
   为同构。

3. 称 $\mathcal{F}$ 关于 $\mathcal{U}$ 满足**万有下降**，是指对于任意态射 $f \colon U' \to U$，
   $\mathcal{F}$ 均可沿拉回筛 $f^*\mathcal{U}$ 下降。

:::

::: remark
直观上，
下降信息 $\mathrm{Desc}(\mathcal{U},\mathcal{F})$ 收集了 $\mathcal{F}$ 在筛 $\mathcal{U}$
的全体成员上的取值，
连同这些取值之间的全部相容性数据。
下降条件要求这些“局部数据”能够唯一地粘合为“整体数据”$\mathcal{F}(U)$。
:::

::: definition [$(\infty,1)$-层]
令 $(\mathcal{C},\tau)$ 为 $(\infty,1)$-景，$\mathcal{D}$ 为完备的范畴。
称 $\mathcal{C}$ 上的 $\mathcal{D}$-值预层
$\mathcal{F} \colon \mathcal{C}^{\mathrm{op}} \to \mathcal{D}$
为 **$\mathcal{D}$-值 $(\infty,1)$-层**，
是指 $\mathcal{F}$ 可沿 $\tau$ 中的每个覆盖筛下降。
记
\[
\mathsf{Shv}(\mathcal{C},\mathcal{D}) \subseteq \mathsf{PSh}(\mathcal{C},\mathcal{D})
\]
为全体 $\mathcal{D}$-值层构成的全子范畴。
对于取值在[[生象]]范畴 $\mathsf{Ani}$ 的情况，简记为 $\mathsf{Shv}(\mathcal{C})$。
:::

### 通过 Čech 脉的计算

在实际计算中，下降信息可以通过覆盖族的 Čech 脉来表达。

::: definition
对于集合 $I$，定义 $1$-范畴 $\mathbb{\Delta}_I$ 如下：
对象为二元组 $([n], (i_0, \dots, i_n) \in I^{n+1})$；
态射 $([n], i_{\bullet}) \to ([m], j_{\bullet})$
为满足 $i_k = j_{\alpha(k)}$ 对所有 $k \in [n]$ 成立的保序映射 $\alpha \colon [n] \to [m]$。
:::

::: remark
$\mathbb{\Delta}_I$ 可以视为“以 $I$ 为颜色的单形范畴”：
其对象是带有 $I$-标记的单形，
态射要求保持标记。
当 $I$ 为单元素集合时，$\mathbb{\Delta}_I$
就退化为通常的单形范畴 $\mathbb{\Delta}$。
:::

::: proposition {@prop-cech-descent}
令 $\mathcal{C}$ 为范畴，$(U_i \to U)_{i \in I}$ 为生成 $U$ 上筛 $\mathcal{U}$ 的一族态射。
假设所有涉及的纤维积 $U_{i_0} \times_U \cdots \times_U U_{i_n}$ 都在 $\mathcal{C}$ 中存在。

1. 存在函子 $\mathbb{\Delta}_I \to \mathcal{U}$，
   将 $([n], i_{\bullet})$ 映为 $U_{i_0} \times_U \cdots \times_U U_{i_n}$。

2. 令 $\mathcal{D}$ 为关于 $\mathbb{\Delta}_I$-型图表完备的范畴。
   则对于任意预层 $\mathcal{F} \colon \mathcal{C}^{\mathrm{op}} \to \mathcal{D}$，下降信息可以表示为
   \[
   \mathrm{Desc}(\mathcal{U},\mathcal{F}) \simeq \operatorname{lim}_{([n], i_{\bullet}) \in \mathbb{\Delta}_I} \mathcal{F}(U_{i_0} \times_U \cdots \times_U U_{i_n}).
   \]

:::

::: remark
此命题将下降信息从“对整个筛取极限”简化为“对 Čech 脉取极限”，
后者在计算中更为具体。
特别地，当覆盖族只有一个态射 $f \colon U' \to U$ 时，
$\mathbb{\Delta}_I = \mathbb{\Delta}$，
此时下降条件恰好要求
\[
\mathcal{F}(U) \simeq \operatorname{lim}_{[n] \in \mathbb{\Delta}} \mathcal{F}(U'^{\times_U (n+1)}),
\]
即 $\mathcal{F}(U)$ 为 $\mathcal{F}$ 在 Čech 脉 $\check{C}(f)$ 上取值的[[整体化]]。
:::

### 在意象上

在意象上定义层范畴有两种方式，它们适用于不同的场景。

#### 通过 Grothendieck 拓扑

::: definition {@def-Grothendieck-topology-topos}
令 $\mathcal{T}$ 为意象。
$\mathcal{T}$ 上的 **Grothendieck 拓扑**是指 $\mathcal{T}$ 中一类单态射
$\tau$（称为**覆盖单态射**），满足以下条件：

1. $\tau$ 的[[分解系|饱和化]] $\tau^s$ 是小生成的。

2. $\tau$ 为[[模态 (范畴论)|局部类]]：即关于拉回、小余积封闭，并且关于沿[[有效满态射]]的下降封闭。

3. $\tau$ 关于复合封闭。

4. 对于单态射 $f \colon X \hookrightarrow Y$ 和 $g \colon Y \hookrightarrow Z$，
   若 $g \circ f \in \tau$，则 $g \in \tau$。

称 $\mathcal{T}$ 中的 $\tau$-局部对象为 **$\tau$-层**，
记其全子范畴为
\[
\mathsf{Shv}_{\tau}(\mathcal{T}) \subseteq \mathcal{T}.
\]
:::

::: remark
此定义中的“覆盖”由单态射（而非一般的态射族）来描述。
直观上，单态射 $U \hookrightarrow X$ 可以视为 $X$ 的“子对象”，
而覆盖条件要求 $U$“覆盖”了 $X$ 的足够多的信息。
条件 (4) 是一种“单调性”：若 $X$ 已经是覆盖，则包含 $X$ 的更大的子对象 $Y$ 也必须是覆盖。
:::

#### 通过保持极限

::: definition
令 $\mathcal{C}$ 为完备范畴。
意象 $\mathcal{T}$ 上的 **$\mathcal{C}$-值层**是指保持小极限的函子
$\mathcal{T}^{\mathrm{op}} \to \mathcal{C}$。
:::

::: remark
此定义的合理性源于 [[$(\infty,1)$-意象]]的下降刻画：
意象 $\mathcal{T}$ 关于全体小余极限满足下降，
因此保持极限的预层自动满足关于全部余极限的下降条件。
这一定义的优势在于不依赖于 Grothendieck 拓扑的选取。
:::

::: remark [两种定义的关系]
需要注意，上述两种定义一般并不等价。
通过 Grothendieck 拓扑定义的 $\tau$-层范畴 $\mathsf{Shv}_{\tau}(\mathcal{T})$
取决于拓扑 $\tau$ 的选取，且一般严格小于 $\mathcal{T}$ 本身；
而通过保持极限定义的层范畴则是 $\mathcal{T}$ 的一种“外部”刻画，不涉及 $\mathcal{T}$ 内部的拓扑结构。
二者在景上的层范畴中一致，但在一般意象上需要区分使用。
:::

## 性质

### 层化

::: proposition
令 $(\mathcal{C},\tau)$ 为 $(\infty,1)$-景，$\mathcal{D}$ 为[[可表现范畴|可表现]]的完备范畴。
则层范畴 $\mathsf{Shv}(\mathcal{C},\mathcal{D})$ 为可表现范畴，
且包含函子具有左伴随：
\[
\begin{tikzcd}
  \mathsf{PSh}(\mathcal{C},\mathcal{D}) \ar[r,shift left=2.5,"\mathrm{L}"] \ar[r,phantom,"\bot"] & \mathsf{Shv}(\mathcal{C},\mathcal{D}) \ar[l,shift left=2.5,"\iota"]
\end{tikzcd}
\]
左伴随 $\mathrm{L}$ 称为 **[[层化]]** 函子。
特别地，
$\mathsf{Shv}(\mathcal{C},\mathcal{D})$ 为 $\mathsf{PSh}(\mathcal{C},\mathcal{D})$
的 [[Bousfield 局部化]]。
:::

::: remark
层化函子 $\mathrm{L}$ 将预层“强制”变为满足下降条件的层。
在经典层论中，层化可以通过进行两次“加号构造”来得到；
在 $(\infty,1)$-范畴中，由于涉及无穷多层的同伦信息，层化一般需要超限次迭代。
:::

### 生象值层范畴构成意象

::: proposition
令 $(\mathcal{C},\tau)$ 为小 $(\infty,1)$-景。
则 $\mathsf{Shv}(\mathcal{C})$ 为 $(\infty,1)$-意象，
且层化函子 $\mathrm{L} \colon \mathsf{PSh}(\mathcal{C}) \to \mathsf{Shv}(\mathcal{C})$
为左正合局部化。
:::

::: remark
反过来并不成立。
:::

```terms
'$(\infty,1)$-层':
  en: '$(\infty,1)$-sheaf'
下降信息:
  en: descent data
覆盖筛:
  en: covering sieve
```
