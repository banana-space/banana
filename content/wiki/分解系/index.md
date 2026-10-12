---
title: 分解系
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- [[意象]]都指 [[$(\infty,1)$-意象]]。

:::

**分解系**是[[高阶范畴论]]中的基本概念。
直观上，分解系将范畴中的态射系统地分解为“简单部分”的复合，
类似于整数的唯一分解或态射的满单分解。
分解系在研究范畴的[[可达范畴|可达]] [[Bousfield 局部化]]以及意象中的[[连合–截断分解系]]时起到核心作用。

## 定义

### 正交性

分解系的核心概念是态射之间的正交性，它描述了两类态射之间的“互补关系”。

::: definition [正交性]
令 $\mathcal{C}$ 为范畴。
称态射 $l \colon A \to B$ **左正交**于态射 $r \colon X \to Y$
（也称 $r$ **右正交**于 $l$），记为 $l \perp r$，
是指以下图表在 $\mathsf{Ani}$ 中为拉回方块：

\[
\begin{tikzcd}
  \operatorname{Hom}_{\mathcal{C}}(B,X) \ar[r,"- \circ l"] \ar[dr,phantom,very near start,"\lrcorner"] \ar[d,"r \circ -"] & \operatorname{Hom}_{\mathcal{C}}(A,X) \ar[d,"r \circ -"]\\
  \operatorname{Hom}_{\mathcal{C}}(B,Y) \ar[r,"- \circ l"] & \operatorname{Hom}_{\mathcal{C}}(A,Y)
\end{tikzcd}
\]

对于一族态射 $S$，记 $S^{\perp}$ 为全体右正交于 $S$ 中每个态射的态射所构成的类；
对偶地，记 ${}^{\perp}S$ 为全体左正交于 $S$ 中每个态射的态射所构成的类。
:::

正交性也可以等价地表述为对角线提升性质。

::: proposition
$l \perp r$ 当且仅当：对于任意以下形式的交换图表，

\[
\begin{tikzcd}
  A \ar[d,"l"'] \ar[r] & X \ar[d,"r"]\\
  B \ar[ur,dashed] \ar[r] & Y
\end{tikzcd}
\]

虚线所示的对角线填充不仅存在，且由全体这种填充所构成的生象是可缩的。
:::

::: remark
“填充的生象可缩”这一条件比仅仅要求“填充存在”更强：
它不仅保证填充的存在性，还保证了填充的本质唯一性。
在 $1$-范畴中，可缩性自动由唯一性给出，因此与经典的正交性定义一致。
:::

### 分解系

::: definition [分解系]
范畴 $\mathcal{C}$ 上的**分解系**是指由两类态射 $\mathcal{L}$ 和 $\mathcal{R}$ 构成的二元组
$(\mathcal{L},\mathcal{R})$，
满足以下条件：

1. **分解性**：$\mathcal{C}$ 中任意态射 $f$ 都有形如 $f \simeq r \circ l$ 的分解，
   其中 $l \in \mathcal{L}$ 且 $r \in \mathcal{R}$。

2. **正交性**：每个 $l \in \mathcal{L}$ 都左正交于每个 $r \in \mathcal{R}$。

:::

::: remark
正交性条件蕴含了分解的本质唯一性：
若 $f \simeq r \circ l \simeq r' \circ l'$ 为两个分解，
则正交性提供了中间项之间本质唯一的同构使两个分解相容。
因此，分解系中的分解可以视为“典范”的。
:::

## 例子

- 在意象 $\mathcal{T}$ 中，对于任意 $n \geq -2$，
  $(n+1)$-[[连合]]态射所构成的类与 $n$-[[截断 (范畴论)|截断]]态射所构成的类构成一个分解系。
  具体内容参见词条[[连合–截断分解系]]。
  特别地，取 $n = -1$ 时恢复[[有效满态射]]与单态射的满单分解。

- 在[[可表现范畴]]中，
  小生成的饱和类 $\mathcal{L}$ 与其正交补 $\mathcal{L}^{\perp}$ 构成分解系（参见下文）。
  这一构造与可达 Bousfield 局部化密切相关。

- 在 $\mathsf{Ani}$ 中，取 $\mathcal{L}$ 为全体 $n$-连合态射，
  $\mathcal{R}$ 为全体 $(n-1)$-截断态射，
  则分解 $X \to \tau_{n-1} X \to \ast$ 对应于 [[Postnikov 截断]]。

## 饱和类

一般而言，
分解系 $(\mathcal{L},\mathcal{R})$ 完全由左半部分 $\mathcal{L}$ 所确定（因为
$\mathcal{R} = \mathcal{L}^{\perp}$）。
因此，刻画哪些态射类可以作为分解系的左半部分就成了关键问题。
以下引入的饱和类给出了这一刻画。

::: definition
令 $\mathcal{L}$ 为[[可表现范畴]] $\mathcal{C}$ 中的一类态射。
称 $\mathcal{L}$ 为**饱和类**，
是指其满足以下条件：

- $\mathcal{L}$ 包含全体同构。

- $\mathcal{L}$ 关于复合封闭。

- $\mathcal{L}$ 作为 $\mathsf{Fun}([1],\mathcal{C})$ 的子类关于小余极限封闭。

如果 $\mathcal{L}$ 还满足**三选二性质**（即 $g \circ f$、$f$、
$g$ 三个态射中若有两个属于 $\mathcal{L}$，则第三个也属于 $\mathcal{L}$），
则称 $\mathcal{L}$ 为**强饱和类**。
:::

::: remark
给定分解系 $(\mathcal{L},\mathcal{R})$，
通过正交性与极限/余极限的交换可以直接验证 $\mathcal{L}$ 必然为饱和类。
因此，饱和性是分解系左半部分的必要条件。
:::

### 饱和化与小生成

::: definition
令 $\mathcal{C}$ 为可表现范畴，$\Sigma$ 为 $\mathcal{C}$ 中的一类态射。
$\Sigma$ 的**饱和化**，记作 $\Sigma^s$，
是指包含 $\Sigma$ 的最小饱和类。

称饱和类 $\mathcal{L}$ 是**小生成的**，
是指存在小集合 $\Sigma$ 使得 $\mathcal{L} = \Sigma^s$。
:::

::: remark
小生成条件是技术上的关键：
它保证了由 $\mathcal{L}$ 所确定的分解系和局部化具有良好的存在性。
不满足小生成条件的饱和类未必能给出分解系。
:::

### 函子的核

::: definition
对于可表现范畴之间保持小余极限的函子 $\varphi \colon \mathcal{C} \to \mathcal{D}$，
$\varphi$ 的**核**是指 $\mathcal{C}$ 中被 $\varphi$ 映为同构的态射所构成的类：
\[
\operatorname{ker}(\varphi) \coloneqq \{f \in \mathsf{Fun}([1],\mathcal{C}) \mid \varphi(f) \text{ 为同构} \}.
\]
:::

## 性质

### 分解系的基本性质

::: proposition
令 $\mathcal{C}$ 为范畴，$(\mathcal{L},\mathcal{R})$ 为 $\mathcal{C}$ 上的分解系，则：

1. **互为正交补**：$\mathcal{L} = {}^{\perp}\mathcal{R}$ 且 $\mathcal{R} = \mathcal{L}^{\perp}$。

2. $\mathcal{L}$ 与 $\mathcal{R}$ 均关于复合封闭，且包含全体同构。

3. $\mathcal{L}$ 与 $\mathcal{R}$ 均关于[[收缩]]封闭。

4. $\mathcal{R}$ 关于拉回封闭，$\mathcal{L}$ 关于推出封闭。

5. **消去性质**：
   如果 $g \circ f \in \mathcal{R}$ 且 $g \in \mathcal{R}$，则 $f \in \mathcal{R}$；
   对偶地，如果 $g \circ f \in \mathcal{L}$ 且 $f \in \mathcal{L}$，则 $g \in \mathcal{L}$。

6. 如果 $\mathcal{C}$ 具有全体小极限，
   则 $\mathcal{R}$ 在 $\mathsf{Fun}([1],\mathcal{C})$ 中关于小极限封闭。
   对偶地，如果 $\mathcal{C}$ 具有全体小余极限，
   则 $\mathcal{L}$ 在 $\mathsf{Fun}([1],\mathcal{C})$ 中关于小余极限封闭。

7. $\mathcal{L} \cap \mathcal{R}$ 恰为全体同构。

:::

::: remark
性质 (1) 表明分解系完全由其任意一半确定。
性质 (7) 直观上说的是：一个态射如果同时“简单到可以放在左边”又“简单到可以放在右边”，那它只能是同构。
:::

### （余）对角线论证

以下命题提供了一种常用的判别技巧：利用态射的对角线（或余对角线）来判定态射属于分解系的哪一半。

::: proposition
令 $\mathcal{C}$ 为范畴，$(\mathcal{L},\mathcal{R})$ 为 $\mathcal{C}$ 上的分解系，
考虑如下交换图：
\[
\begin{tikzcd}
  X \ar[rr,"f"] \ar[dr,"h"'] && Y \ar[dl,"g"]\\
  & Z
\end{tikzcd}
\]
则：

- 若 $\mathcal{C}$ 具有拉回，$h \in \mathcal{R}$ 且对角态射 $\Delta_g \in \mathcal{R}$，
  则 $f \in \mathcal{R}$。

- 若 $\mathcal{C}$ 具有推出，$h \in \mathcal{L}$ 且余对角态射 $\nabla_f \in \mathcal{L}$，
  则 $g \in \mathcal{L}$。

:::

::: remark
其证明已在[[对角态射]]中记载，
因此此处不再赘述。
:::

### 饱和类与局部化

以下命题建立了小生成的饱和类、分解系与可达 Bousfield 局部化之间的对应。

::: proposition
令 $\mathcal{C}$ 为可表现范畴，$\mathcal{L}$ 为其上小生成的饱和类。
则 $(\mathcal{L},\mathcal{L}^{\perp})$ 构成 $\mathcal{C}$ 上的分解系。
:::

::: proposition
对于可表现范畴之间保持小余极限的函子 $\varphi \colon \mathcal{C} \to \mathcal{D}$，
$\operatorname{ker}(\varphi)$ 为小生成的强饱和类。
:::

::: proposition
令 $\mathcal{C}$ 为可表现范畴，$\Sigma$ 为 $\mathcal{C}$ 中的小生成的强饱和类。
记 $\mathsf{Loc}_{\Sigma}(\mathcal{C}) \subset \mathcal{C}$ 为全体
$\Sigma$-局部对象所张成的全子范畴。
则：

1. 包含函子 $\mathsf{Loc}_{\Sigma}(\mathcal{C}) \hookrightarrow \mathcal{C}$ 具有可达的左伴随
   $\mathrm{L} \colon \mathcal{C} \to \mathsf{Loc}_{\Sigma}(\mathcal{C})$。

2. 局部化范畴 $\mathsf{Loc}_{\Sigma}(\mathcal{C})$ 仍为可表现范畴。

3. $\operatorname{ker}(\mathrm{L}) = \Sigma$。

:::

::: remark
上述三个命题合在一起建立了如下对应：
\[
\left\{\text{$\mathcal{C}$ 上小生成的强饱和类}\right\}
\;\longleftrightarrow\;
\left\{\text{$\mathcal{C}$ 的可达局部化}\right\}.
\]
具体而言，给定强饱和类 $\Sigma$ 可以构造局部化 $\mathrm{L}$，
反过来给定局部化 $\mathrm{L}$ 可以取核 $\operatorname{ker}(\mathrm{L})$ 得到强饱和类，
且这两个构造互逆。
:::

```terms
分解系:
  en: factorization system
饱和:
  en: saturated
小生成:
  en: of small generation
```
