---
title: 六函子理论
aliases: [六函子, Grothendieck 六函子]
categories: [层论]
navboxes: [层论]
---

<problems>
- “基变换、投影公式”“例子”各节需要扩充。
- “通过分解”一节中定理的条件 1 中的同构 $j'_!g'^! \xrightarrow{\sim} g^*j_!$ 似乎应为 $j'_!g'^* \xrightarrow{\sim} g^*j_!$；条件 2 中的图表与同构 $g^*f_* \xrightarrow{\sim} g^*j_!$ 似乎沿用了条件 1 的记号，与关于 $f \in P$ 的基变换不符。
- “例子”一节中 $\mathcal{D}(S,\Lambda)$ 的 $\Lambda$ 似乎应为 $R$。
</problems>

**六函子理论**是[[层论]]中的一种结构，
在[[代数几何]]中应用广泛。
给定一类数学对象，视为[[空间]]，
则一种关于这类对象的六函子理论由以下信息构成：
给每个空间 $X$ 配以[[范畴]] $\mathcal{D} (X)$，
视为 $X$ 上某种“[[层]]”的范畴，
并要求有以下三对[[伴随函子]]，总共六类函子：

- 对空间的[[态射]] $f \colon X \to Y$，
  有一对伴随函子
  \[
  f^* \colon \mathcal{D} (Y) \to \mathcal{D} (X)
  \quad \dashv \quad
  f_* \colon \mathcal{D} (X) \to \mathcal{D} (Y),
  \]
  分别称为[[拉回层]]和[[前推层]]函子，或“上星”、“下星”函子。

- 对某些较良好的态射 $g \colon X \to Y$，
  有一对伴随函子
  \[
  g_! \colon \mathcal{D} (X) \to \mathcal{D} (Y)
  \quad \dashv \quad
  g^! \colon \mathcal{D} (Y) \to \mathcal{D} (X),
  \]
  分别称为[[反常前推层]]和[[反常拉回层]]函子，或“下叹”、“上叹”函子。

- 对空间 $X$ 及对象 $a \in \mathcal{D} (X)$，
  有一对伴随函子
  \[
  {-} \otimes a \colon \mathcal{D} (X) \to \mathcal{D} (X)
  \quad \dashv \quad
  \mathcal{H}\mkern-2mu\mathit{om} (a, -) \colon \mathcal{D} (X) \to \mathcal{D} (X),
  \]
  分别称为[[张量积层]]和[[同态层]]函子。

并且，这些函子还需满足若干性质。
给定上述信息，则可以形式地将层论中的若干结论，
例如 [[Poincaré 对偶]]等，
推广到新定义的六函子理论中。

给定一种六函子理论，就能形式地对空间定义四种[[同调]]、[[上同调]]理论。
记 $p \colon X \to *$ 是空间 $X$ 到[[终对象]] $*$ 的态射，
$1 \in \mathcal{D} (*)$ 是张量积的单位，则可以抽象定义

- $H^\bullet (X) = p_* \, p^* (1)$ 为 $X$ 的[[普通上同调]]。

- $H^\bullet_{\mathrm{c}} (X) = p_! \, p^* (1)$ 为 $X$ 的[[紧支上同调]]。

- $H_{-\bullet}^{\mathrm{BM}} (X) = p_* \, p^! (1)$ 为 $X$ 的 [[Borel–Moore 同调]]。

- $H_{-\bullet} (X) = p_! \, p^! (1)$ 为 $X$ 的[[普通同调]]。

这些概念是[[代数拓扑]]中相应概念的推广。

## 定义

以下定义来自 [@Scholze]。

::: definition [六函子理论]
设 $\mathcal{C}$ 是 [[$(\infty, 1)$-范畴]]，
具有有限[[极限 (范畴论)|极限]]。
设 $\mathsf{E}$ 是 $\mathcal{C}$ 中一族[[态射]]，
包含所有[[同构]]，并被[[复合]]、[[拉回 (范畴论)|拉回]]保持。
记 $\mathsf{Span} (\mathcal{C}, \mathsf{E})$
为[[伸展范畴]]，其中从对象 $X$ 到 $Y$ 的态射形如
\[
\begin{tikzcd}[row sep=small, column sep=small]
  & Z \ar[dl, "f"'] \ar[dr, "g"] \\
  X && Y \rlap{ ,}
\end{tikzcd}
\]
其中 $g \in \mathsf{E}$。
将 $\mathsf{Span} (\mathcal{C}, \mathsf{E})$ 视为
[[对称幺半 $(\infty, 1)$-范畴]]，其幺半结构由 $\mathcal{C}$ 的[[积 (范畴论)|积]]给出。

则关于 $(\mathcal{C}, \mathsf{E})$ 的**六函子理论**是指
[[松对称幺半 $(\infty, 1)$-函子]]
\[
\mathcal{D} \colon \mathsf{Span} (\mathcal{C}, \mathsf{E})
\longrightarrow (\infty, 1) \text{-} \mathsf{Cat},
\]
满足以下条件：

- 对 $\mathcal{C}$ 中态射 $f \colon X \to Y$，记
  \[
  f^* = \mathcal{D} \left( \begin{tikzcd}[row sep=small, column sep=small]
    & X \ar[dl, "f"'] \ar[dr, "\mathbb{1}_X"] \\
    Y && X
  \end{tikzcd} \right)
  \colon \mathcal{D} (Y) \to \mathcal{D} (X),
  \]
  则 $f^*$ 具有[[右伴随]] $f_* \colon \mathcal{D} (X) \to \mathcal{D} (Y)$。

- 对 $\mathsf{E}$ 中态射 $g \colon X \to Y$，记
  \[
  g_! = \mathcal{D} \left( \begin{tikzcd}[row sep=small, column sep=small]
    & X \ar[dl, "\mathbb{1}_X"'] \ar[dr, "g"] \\
    X && Y
  \end{tikzcd} \right)
  \colon \mathcal{D} (X) \to \mathcal{D} (Y),
  \]
  则 $g_!$ 具有右伴随 $g^! \colon \mathcal{D} (Y) \to \mathcal{D} (X)$。

- 对 $X \in \mathcal{C}$，记
  \[
  \otimes \colon
  \mathcal{D} (X) \times \mathcal{D} (X)
  \overset{\boxtimes}{\longrightarrow}
  \mathcal{D} (X \times X)
  \overset{\Delta^*}{\longrightarrow}
  \mathcal{D} (X),
  \]
  其中 $\boxtimes$ 是松对称幺半 $(\infty, 1)$-函子给出的态射，
  $\Delta \colon X \to X \times X$ 是[[对角态射]]。
  则对每个 $a \in \mathcal{D} (X)$，
  函子 $- \otimes a \colon \mathcal{D} (X) \to \mathcal{D} (X)$ 具有右伴随
  $\mathcal{H}\mkern-2mu\mathit{om} (a, -) \colon \mathcal{D} (X) \to \mathcal{D} (X)$。

:::

在上述定义中，

- $(\mathcal{C},E)$ 也称为**几何设定**。

- 若函子 $\mathcal{D}$ 不满足上述三个存在右伴随的条件，则也称之为**三函子理论**。

- 若 $\mathcal{D}$ 穿过 [[可表现范畴|$\mathsf{Pr}^{\mathrm{L}}$]]，则称其**可表现**。

::: definition
令 $\mathcal{D}$ 为 $(\mathcal{C},E)$ 上的三函子理论。

- 函子 $\mathcal{D}$ 与 $\mathcal{C}^\mathrm{op} \to \mathsf{Span} (\mathcal{C},E)$
  的复合可提升为函子
    \[
    \mathcal{D}^* \colon \mathcal{C}^{\operatorname{op}}
    \longrightarrow (\infty, 1) \text{-} \mathsf{Cat}^\otimes,
    \]
    其中右边为[[对称幺半 $(\infty, 1)$-范畴]]之 $(\infty, 1)$-范畴。
    换言之，对每个 $X \in \mathcal{C}$ 而言，$\mathcal{D} (X)$ 都是对称幺半 $(\infty, 1)$-范畴。
    这是因为每个 $X$ 通过[[对角态射]]视为 $(\mathcal{C}, \times)$ 中的[[交换余幺半对象]]，
    从而由上述复合函子映到右边的交换幺半对象。

- 记 $\mathcal{C}_E$ 为 $E$ 所生成的[[宽子范畴]]，
  则有函子 $\mathcal{D}$ 与 $\mathcal{C}_E \to \mathsf{Span}(\mathcal{C},E)$
  的复合
  \[
  \mathcal{D}_! \colon \mathcal{C}_E \longrightarrow (\infty, 1) \text{-} \mathsf{Cat}.
  \]

:::

## 性质

### 基变换、投影公式

## 构造

### 通过分解

::: definition {@def-suit-decomposition}
令 $(\mathcal{C},E)$ 为几何设定，
则 $E$ 中**合适的分解**是指
由 $E$ 中态射所构成的 $I, P \subseteq E$ 给出的二元组 $(I,P)$，
使得：

1. $I$ 和 $P$ 均包含恒等态射并且在复合与拉回下封闭；

2. 对于任意 $f \in E$，$f$ 均能分解为 $f = p\circ i$，其中 $p \in P$ 且 $i \in I$；

3. $I$ 和 $P$ 在 $\mathcal{C}$ 中是右可消的；

4. 存在 $n \geq -2$，使得每个态射 $f \in I \cap P$ 都是 $n$-截断的。

:::

::: theorem {@thm-extension}
令 $(\mathcal{C},E)$ 为几何设定，令 $(I,P)$ 为 $E$ 的合适的分解
并且令 $\mathcal{D}_0 \colon \mathcal{C}^{\operatorname{op}} \to \mathsf{CMon}$
为满足以下性质的函子：

1. 对于 $I$ 中的态射 $j \colon U \to X$，
   沿 $j$ 的拉回 $j^*$
   具有左伴随 $j_! \colon \mathcal{D}(U) \to \mathcal{D}(X)$
   满足[[紧合基变换]]以及[[投影公式]]，
   即

   - 对于任意 $\mathcal{C}$ 中的态射 $g \colon X' \to X$，考虑拉回图表
     \[
     \begin{tikzcd}
       {U'} \ar[r, "{g'}"] \ar[d, "{j'}"']
       & U \ar[d, "j"]
       \\ {X'} \ar[r, "g"']
       & X
     \end{tikzcd}
     \]
     总是有自然的同构
     $j'_!g'^! \xrightarrow{\sim} g^*j_! \colon \mathcal{D}(U) \to \mathcal{D}(X')$；

   - 对于每个 $M \in \mathcal{D}(X)$ 以及 $N \in \mathcal{D}(U)$，
     有自然同构 $j_!(j^*M\otimes N) \xrightarrow{\sim} M\otimes j_!N$。

2. 对于 $P$ 中的态射 $f \colon Y \to X$，沿 $f$ 的拉回 $f^*$
   具有右伴随 $f_* \colon \mathcal{D}(Y) \to \mathcal{D}(X)$
   满足紧合基变换以及投影公式，
   即

   - 对于任意 $\mathcal{C}$ 中的态射 $g\colon  X' \to X$，考虑拉回图表
     \[
     \begin{tikzcd}
       {U'} \ar[r, "{g'}"] \ar[d, "{j'}"']
       & U \ar[d, "j"]
       \\ {X'} \ar[r, "g"']
       & X
     \end{tikzcd}
     \]
     有自然的同构 $g^*f_* \xrightarrow{\sim} g^*j_!$；

   - 对于每个 $M \in \mathcal{D}(X)$ 以及 $N \in \mathcal{D}(Y)$，
     有自然同构 $M\otimes f_*N \xrightarrow{\sim} f_*(f^*M\otimes N)$；

3. 对于每个 $\mathcal{C}$ 中的拉回图表
   \[
   \begin{tikzcd}
     {U'} \ar[r, "{f'}"] \ar[d, "{j'}"']
     & U \ar[d, "j \in I"]
     \\ {X'} \ar[r, "f \in P"']
     & X
   \end{tikzcd}
   \]
   有自然同构 $j_!f'_* \xrightarrow{\sim} f_*j'_! \colon \mathcal{D}(U') \to \mathcal{D}(X)$。

此时 $\mathcal{D}_0$ 可延拓为三函子理论
$\mathsf{Span}(\mathcal{C},E) \to (\infty, 1) \text{-} \mathsf{Cat}$。
:::

### 延拓

可以通过以下操作将范畴 $\mathcal{C}$ 上的六函子理论延拓到其[[意象]]上。

::: definition
令 $\mathcal{D}$ 为 $(\mathcal{C},E)$ 上的三函子理论，则

- 称 $\mathcal{C}$ 中的筛 $\mathcal{U}$ 为 **（万有）$\mathcal{D}^*$-覆盖**是指
  $\mathcal{D}^*$ 作为预层可沿 $\mathcal{U}$（万有）下降；

- 称 $\mathcal{C}_E$ 中的筛 $\mathcal{U} \subseteq (\mathcal{C}_E)_{/U}$
  为**小 $\mathcal{D}^!$-覆盖**是指其由小集合 $(U_i \to U)$ 生成，
  且作为预层 $\mathcal{D}^!$ 沿 $\mathcal{U}$ 可下降。
  称 $\mathcal{U}$ 为**万有 $\mathcal{D}^!$-覆盖**是指对于每个 $\mathcal{C}$ 中态射
  $V \to U$，都有 $(U_i\times_U V \to V)_i$ 生成小 $\mathcal{D}^!$-覆盖。

当 $\mathcal{D}$ 自明时，也简写为 $*$-覆盖和 $!$-覆盖。
:::

::: definition
令 $(\mathcal{C},E)$ 为几何设定，$\mathcal{D}$ 为其上六函子理论
且 $S \subseteq \mathcal{C}$ 为一族态射，
令 $f \colon X \to Y$ 为 $\mathcal{C}$ 中态射，则称：

- $f$ 在 $S$ 中 **$\mathcal{D}^!$-局部于来源**，
  是指存在 $X$ 的万有小 $\mathcal{D}^!$-覆盖，
  使其内元素复合上 $f$ 后都在 $S$ 中。

- $f$ 在 $S$ 中 **$\mathcal{D}^!$-局部于目标**，
  是指存在 $Y$ 的万有小 $\mathcal{D}^!$-覆盖，
  使其内元素沿 $f$ 的拉回都在 $S$ 中。

当 $\mathcal{D}$ 自明时，也简写为 $!$-局部。
:::

::: theorem {@thm-sheafy-topos}
令 $\mathcal{D}$ 为 $(\mathcal{C},E)$ 上的可表现六函子理论。
设 $\mathcal{C}$ 带有[[次典范拓扑]]，
满足 $\mathcal{D}^*$ 关于该拓扑是 [[$(\infty, 1)$-层]]，
并记 $\mathcal{X} = \mathsf{Sh}(\mathcal{C})$ 为相应的 [[$(\infty, 1)$-意象]]。
则存在 $\mathcal{X}$ 中的一族态射 $E'$ 满足以下性质：

1. $\mathcal{C} \hookrightarrow \mathcal{X}$
   诱导出几何设定间的态射 $(\mathcal{C},E) \to (\mathcal{X},E')$ 且 $\mathcal{D}$
   能延拓到 $(\mathcal{X},E')$ 上。

2. $E'$ 是 $*$-局部于来源的，
   即令 $f\colon X \to Y$ 为 $\mathcal{X}$ 中态射，
   若其关于 $\mathcal{C}$ 中对象的拉回均在 $E'$ 中，
    则其自身也在 $E'$ 中。

3. $E'$ 是 $!$-局部的，
   即给定 $f \colon X\to Y$，若其在 $E'$ 上是 $!$-局部于来源或者目标的，则 $f \in E'$。

4. 对于任意 $Y \in \mathcal{C}$，任意 $E'$ 中态射 $f \colon X \to Y$ 都在 $E$ 上 $!$-局部于来源。

类似的结果在 $\mathcal{C}$ 具有超完备的次典范拓扑时可以推广到超完备层上。
:::

## 例子

::: example [凝聚态生象上的六函子理论]
固定[[正则基数]] $\kappa$，令 $R$ 为 [[$\mathbb{E}_{\infty}$-环]]，
则在（$\kappa$-小）[[投射有限集]]范畴 $\mathsf{ProFin}$ 上可以如下构造六函子理论：
考虑图表
\[
\begin{tikzcd}
  \{* \}\ar[d,hook,"\iota"]\ar[dr,"R"]\\
  \mathsf{Fin}^{\operatorname{op}} & \mathsf{CAlg}.
\end{tikzcd}
\]
则[[右 Kan 扩张]]给出函子 $\mathsf{Fin}^{\operatorname{op}} \to \mathsf{CAlg}$，
$S \mapsto R(S) = \prod_{x\in S}R$，
而后利用归纳完备化的泛性质以及
$\mathsf{Pro}(\mathcal{C})^{\operatorname{op}} \simeq \mathsf{Ind}(\mathcal{C}^{\operatorname{op}})$
可延拓出函子
\[
\mathsf{ProFin}^{\operatorname{op}} \to \mathsf{CAlg}
\]
而后利用函子
$\mathsf{Mod} \colon \mathsf{CAlg} \to (\infty, 1) \text{-} \mathsf{Cat}, R \mapsto R\text{-}\mathsf{Mod}$，
给出函子
$\mathcal{D}(-,R) \colon \mathsf{ProFin}^{\operatorname{op}} \to (\infty, 1) \text{-} \mathsf{Cat}$，
$S \mapsto \mathcal{D}(S,\Lambda) = R(S)\text{-}\mathsf{Mod}$。
取 $E$ 和 $P$ 为全体态射，而 $I$ 为全体同构，
根据 @thm-extension 即可将其延拓为六函子理论，
此外，再结合 @thm-sheafy-topos 可将该六函子理论延拓到 $\mathsf{CondAni}$ 上。
:::


## 参考文献

讲义：

```bibliography
Scholze:
  type: preprint
  author: Peter Scholze
  title: Six-functor formalisms
  year: 2025
  arxiv: '2510.26269'
```

相关论文：

```bibliography
HM24:
  type: preprint
  title: 6-functor formalisms and smooth representations
  author: [Claudius Heyer, Lucas Mann]
  year: 2024
  arxiv: '2410.13038'
```

```terms
六函子理论:
  en: six-functor formalism
```
