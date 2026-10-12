---
title: '$(\infty, 1)$-意象'
categories: [高阶范畴论]
notices:
  - name: 问题
    items:
      - “通过下降”一节中有效余极限的定义似乎应要求诱导的余锥之间的自然变换是拉回自然变换，而不只是“诱导出自然变换”。
      - “极限与余极限”一节的定理中，$\mathsf{Topos} \to \mathsf{Cat}_{\infty}$ 似乎应保持滤极限（即 $\mathsf{Logos}$ 中的滤余极限），而不是滤余极限。
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  将经典的范畴称为 $1$-范畴。

:::

**$(\infty, 1)$-意象**是[[意象]]在高阶范畴论中的推广。
与普通意象类似，$(\infty, 1)$-意象也可以从不同角度来理解：

- 意象是某个[[景]]上所有[[集合]][[层]]构成的[[范畴]]，这些集合层可视为该景中的[[广义对象]]。
  类似地，
  $(\infty, 1)$-意象可以是 [[$(\infty, 1)$-景]]上取值于 $\mathsf{Ani}$
  的所有 [[$(\infty, 1)$-层]]构成的 [[$(\infty, 1)$-范畴]]，
  其对象可以视为原来的 $(\infty, 1)$-景中的广义对象。
  整个 $(\infty, 1)$-意象就是所有广义对象构成的 $(\infty, 1)$-范畴，
  具有类似[[生象]] $(\infty, 1)$-范畴的良好性质。

- 另一方面，$(\infty, 1)$-意象自身也可以视为抽象的[[空间]]。
  例如，在[[代数几何]]中，常常将[[概形]]的[[平展意象]]、[[平坦意象]]等视为概形本身的代表。
  类似地，在[[导出代数几何]]中，则考虑概形的平展 $(\infty, 1)$-意象、平坦 $(\infty, 1)$-意象等。

需要注意，与普通意象不同，
$(\infty, 1)$-意象并不总能通过 $(\infty, 1)$-景上的 $(\infty, 1)$-层范畴得到。
因此可以将 $(\infty,1)$-意象粗略视为以下类比：

\[
(\infty,1)\text{-意象} \quad \sim \quad \text{意象} + \text{生象}
\]

即 $(\infty,1)$-意象同时推广了经典意象（层范畴）和生象范畴 $\mathsf{Ani}$。

## 定义

::: definition {@def-lex-loc}
称 [[$(\infty, 1)$-范畴]] $\mathcal{T}$ 为 **$(\infty, 1)$-意象**，
是指存在小 [[$(\infty, 1)$-范畴]] $\mathcal{C}$，
使得 $\mathcal{T}$ 可以写成[[预层 $(\infty, 1)$-范畴]]
$\mathcal{P} (\mathcal{C}) = \mathsf{Fun} (\mathcal{C}^{\mathrm{op}}, \mathsf{Ani})$
的[[可达范畴|可达]][[左正合函子|左正合]][[局部化 (范畴论)|局部化]]
$\mathcal{P}(\mathcal{C}) \to \mathcal{T}$。
:::

### 几何态射与代数态射

$(\infty,1)$-意象之间有两种对偶的态射概念。

::: definition [几何态射]
给定 $(\infty, 1)$-意象 $\mathcal{S}$ 以及 $\mathcal{T}$，
从 $\mathcal{S}$ 到 $\mathcal{T}$ 的**几何态射**是指函子
$\varphi_* \colon \mathcal{S} \to \mathcal{T}$，
其具有左正合的左伴随 $\varphi^* \colon \mathcal{T} \to \mathcal{S}$
（也称 $\varphi^*$ 为从 $\mathcal{T}$ 到 $\mathcal{S}$ 的**代数态射**）。
记
\[
\mathsf{Topos} \subseteq \mathsf{Cat}_{\infty}
\]
为 $(\infty, 1)$-意象以及其间几何态射所构成的 $(\infty,1)$-范畴，以及
\[
\mathsf{Logos} \subseteq \mathsf{Cat}_{\infty}
\]
为 $(\infty, 1)$-意象以及其间代数态射所构成的 $(\infty,1)$-范畴。
:::

::: remark
[[伴随函子定理]]表明存在反变的范畴等价
\[
\mathsf{Topos} \xrightarrow{\sim} \mathsf{Logos}^{\mathrm{op}}.
\]
换言之，给出几何态射等价于给出反方向的代数态射。
几何态射对应于“空间层面”的映射（或者说[[位象]]层面），
代数态射对应于“偏序集层面”的映射。
:::

### $(\infty,2)$-范畴结构

事实上，$(\infty,1)$-意象还可以自然地组织为 [[$(\infty,2)$-范畴]]，从而保留态射之间的自然变换信息。

::: definition [构造]
$\mathsf{Cat}_{\infty}$ 根据其上 $\times$ 与函子范畴的伴随关系充实于自身，
因此升级为 $(\infty,2)$-范畴 $\mathbb{C}\mathsf{at}$，
即令
$\mathsf{Hom}_{\mathbb{C}\mathsf{at}}(\mathcal{C},\mathcal{D}) = \mathsf{Fun}(\mathcal{C},\mathcal{D})$。

类似地，可以将 $\mathsf{Logos}$ 升级为 $(\infty,2)$-范畴 $\mathbb{L}\mathsf{ogos}$，
其 Hom 范畴定义为全体代数态射所张成的全子范畴
\[
\mathsf{Hom}_{\mathbb{L}\mathsf{ogos}}(\mathcal{S},\mathcal{T}) \subseteq \mathsf{Fun}(\mathcal{S},\mathcal{T}).
\]
对偶地，定义
\[
\mathbb{T}\mathsf{opos} \coloneqq \mathbb{L}\mathsf{ogos}^{\mathrm{op}}.
\]
:::

### 点

::: definition
令 $\mathcal{T}$ 为 $(\infty,1)$-意象，
$\mathcal{T}$ 中的**点**是指几何态射 $\mathsf{Ani} \to \mathcal{T}$。
记
\[
\mathsf{Pt}(\mathcal{T}) \coloneqq \mathsf{Hom}_{\mathbb{T}\mathsf{opos}}(\mathsf{Ani},\mathcal{T})
\]
为 $\mathcal{T}$ 中点的范畴。
:::

::: remark
这里 $\mathsf{Ani}$ 扮演“一点空间”的角色：正如经典拓扑学中空间 $X$ 的点是连续映射 $\{*\} \to X$，
$(\infty,1)$-意象 $\mathcal{T}$ 的点是几何态射 $\mathsf{Ani} \to \mathcal{T}$。
等价地，一个点也给出一个代数态射 $\mathcal{T} \to \mathsf{Ani}$，即“取茎”函子。
:::

## 例子

- 某个 [[(∞,1)-层|$(\infty, 1)$-景]]上取值于[[生象]] $(\infty, 1)$-范畴 $\mathsf{Ani}$
  的所有 [[$(\infty, 1)$-层]]构成的 $(\infty, 1)$-范畴是 $(\infty, 1)$-意象。
  特别地，$\mathsf{Ani}$ 自身是 $(\infty, 1)$-意象（对应于平凡景上的层范畴）。
- 对于 $(\infty,1)$-意象 $\mathcal{T}$ 和对象 $X \in \mathcal{T}$，
  切片范畴 $\mathcal{T}_{/X}$ 仍为 $(\infty,1)$-意象。

## 等价刻画

$(\infty,1)$-意象的 @def-lex-loc 依赖于预层范畴和局部化的具体选取。
以下给出几种内蕴的等价刻画，它们仅依赖于范畴自身的性质。

### 通过下降

下降条件刻画了余极限相对于拉回的良好行为，可以视为“拓扑空间中开覆盖上粘合”在范畴层面的推广。

::: definition [van Kampen 余极限] {@def-van-kampen}
令 $\mathcal{I}$ 为小 $(\infty,1)$-范畴，
$\mathcal{T}$ 为带有拉回以及以 $\mathcal{I}$ 为指标的余极限的 $(\infty,1)$-范畴。
称 $\mathcal{T}$ 关于以 $\mathcal{I}$ 为指标的余极限满足**下降**（或称以 $\mathcal{I}$
为指标的余极限是 **van Kampen** 的），
是指切片函子

\[
\mathcal{T}^{\mathrm{op}} \to \mathsf{Cat}_{\infty}, \quad X \mapsto \mathcal{T}_{/X}
\]

保持以 $\mathcal{I}$ 为指标的极限。
:::

为了展开这一定义，我们引入拉回自然变换的概念。

::: definition
给定函子 $F,G \colon \mathcal{I} \to \mathcal{T}$，
称自然变换 $\alpha \colon F \to G$ 为**拉回自然变换**（或**笛卡尔自然变换**），
是指对于 $\mathcal{I}$ 中的每个态射 $i \to j$，
都有自然的拉回方块：

\[
\begin{tikzcd}
  F(i) \ar[r,"\alpha(i)"] \ar[d] \ar[dr,phantom,very near start,"\lrcorner"] & G(i) \ar[d]\\
  F(j) \ar[r,"\alpha(j)"] & G(j)
\end{tikzcd}
\]

记
$\mathsf{Fun}^{\mathrm{cart}}(\mathcal{I},\mathcal{T}) \subset \mathsf{Fun}(\mathcal{I},\mathcal{T})$
为全体拉回自然变换构成的[[宽子范畴]]。
:::

给定图表 $X_{\bullet} \colon \mathcal{I} \to \mathcal{T}$，
在 $i \in \mathcal{I}$ 处的求值给出函子
$\mathrm{ev}_i\colon \mathsf{Fun}^{\mathrm{cart}}(\mathcal{I},\mathcal{T})_{/X_{\bullet}} \to \mathcal{T}_{/X_i}$，
进而给出函子
$\mathsf{Fun}^{\mathrm{cart}}(\mathcal{I},\mathcal{T})_{/X_{\bullet}} \to \operatorname{lim}_i \mathcal{T}_{/X_i}$。

::: proposition
令 $\mathcal{T}$ 为带有拉回的 $(\infty,1)$-范畴，
$X_{\bullet} \colon \mathcal{I} \to \mathcal{T}$ 为函子。则有范畴等价：

\[
\mathsf{Fun}^{\mathrm{cart}}(\mathcal{I},\mathcal{T})_{/X_{\bullet}} \simeq \operatorname{lim}_i \mathcal{T}_{/X_i}.
\]

换言之，给出 $X_{\bullet}$ 上方的拉回自然变换 $Y_{\bullet} \to X_{\bullet}$，
等价于给出一族相容的态射 $Y_i \to X_i$。
:::

利用上述等价，可以将下降条件具体展开。
设 $X = \operatorname{colim}_i X_i$，则有伴随对

\[
\begin{tikzcd}
  \operatorname{lim}_i \mathcal{T}_{/X_i} \ar[r,shift left = 2.5,"\operatorname{colim}"] \ar[r,phantom,"\bot"] & \mathcal{T}_{/X} \ar[l,shift left = 2.5]
\end{tikzcd}
\]

其中 $\operatorname{colim}$ 将拉回自然变换 $Y_{\bullet} \to X_{\bullet}$ 映为其余极限
$\operatorname{colim}_i Y_i \to \operatorname{colim}_i X_i$，
而右伴随将 $Y \to X$ 映为 $(X_i \times_X Y \to X_i)_i$。

@def-van-kampen 等价于要求上述伴随为范畴等价，即单位与余单位均为自然同构。具体而言：

- **余单位为同构**意味着：对于 $\mathcal{T}$ 中的任意态射 $Y \to X$，
  典范态射 $\operatorname{colim}_i (X_i \times_X Y) \to Y$ 为同构。
  这就是余极限的**万有性**：余极限沿任意态射的拉回仍为余极限。

- **单位为同构**意味着：给定拉回自然变换 $Y_{\bullet} \to X_{\bullet}$，
  都有同构
  $Y_i \xrightarrow{\sim} (\operatorname{colim}_i Y_i) \times_{\operatorname{colim}_i X_i} X_i$。
  这就是余极限的**有效性**：拉回自然变换可以从其余极限中恢复。

这引出以下两个定义：

::: definition [有效余极限]
令 $\mathcal{T}$ 为带有以 $\mathcal{I}$ 为指标的余极限的 $(\infty,1)$-范畴。
称 $\mathcal{T}$ 中以 $\mathcal{I}$ 为指标的余极限是**有效**的，
是指对于函子图表之间的每个拉回自然变换 $Y_{\bullet} \to X_{\bullet}$，
都诱导出余极限余锥之间的自然变换 $\overline{Y}_{\bullet} \to \overline{X}_{\bullet}$。
换句话说，对于每个 $j \in \mathcal{I}$，都有拉回图表：

\[
\begin{tikzcd}
  Y_j \ar[r] \ar[d]\ar[dr,phantom,very near start,"\lrcorner"] & \operatorname{colim}_i Y_i \ar[d]\\
  X_j \ar[r] & \operatorname{colim}_i X_i
\end{tikzcd}
\]
:::

::: definition [万有余极限]
令 $\mathcal{T}$ 为带有拉回以及以 $\mathcal{I}$ 为指标的余极限的范畴。
称 $\mathcal{T}$ 中以 $\mathcal{I}$ 为指标的余极限是**万有**的，
是指对于每个态射 $f \colon A \to B$，
拉回函子 $f^* \colon \mathcal{T}_{/B} \to \mathcal{T}_{/A}$ 都保持以 $\mathcal{I}$ 为指标的余极限。
:::

综合以上讨论，可以给出 $(\infty,1)$-意象的下降刻画：

::: definition [通过下降定义 $(\infty,1)$-意象] {@def-descent}
称 $(\infty,1)$-范畴 $\mathcal{T}$ 为 $(\infty,1)$-意象，
是指其为[[可表现范畴|可表现]]，且关于全体小余极限均满足下降（即余极限既是万有的也是有效的）。
:::

### 通过对象分类子

对象分类子是 $(\infty,1)$-意象中的一个“万有对象”，其作用类似于集合论中的万有集合。
直观地说，它将“$X$ 上方的对象”参数化为“到某个万有对象的映射”。

记 $\widehat{\mathsf{Ani}}$ 为大生象所构成的超大 $(\infty,1)$-范畴。

::: definition [对象分类子]
对于可表现 $(\infty,1)$-范畴 $\mathcal{T}$，
记
$\widehat{\mathcal{T}} \coloneqq \mathsf{Fun}^{\mathrm{lim}}(\mathcal{T}^{\mathrm{op}},\widehat{\mathsf{Ani}})$。
称 $U \in \widehat{\mathcal{T}}$ 为**对象分类子**，
是指对于任意 $X \in \mathcal{T}$，
都有等价 $\operatorname{Hom}_{\widehat{\mathcal{T}}}(X,U) \simeq (\mathcal{T}_{/X})^{\simeq}$。
:::

::: remark
上述等价意味着：从 $X$ 到 $U$ 的态射恰好对应于 $X$ 上方的对象（准确地说是其等价类）。
这是经典意象论中子对象分类子 $\Omega$ 的推广——$\Omega$ 仅分类子对象（即单态射），
而对象分类子 $U$ 则分类全体对象（即任意态射）。
:::

::: definition [通过对象分类子定义 $(\infty,1)$-意象] {@def-obj-classifier}
称 $(\infty,1)$-范畴 $\mathcal{T}$ 为 $(\infty,1)$-意象，
是指其为[[可表现范畴|可表现]]且具有对象分类子。
:::

### 通过 Giraud 公理

经典意象论中的 Giraud 定理给出了意象的公理化刻画。
以下是其在 $(\infty,1)$-范畴框架下的推广，其中等价关系被替换为群胚对象。

::: definition [群胚对象]
令 $\mathcal{C}$ 为 $(\infty,1)$-范畴。
称单纯对象 $\mathcal{G} \colon \mathbb{\Delta}^{\mathrm{op}} \to \mathcal{C}$ 为**群胚对象**，
是指对于任意 $[n] \in \mathbb{\Delta}$ 以及任意（不必保序的）划分

\[
[n] \simeq \{i_0, \dots, i_k\} \cup \{i_k, \dots, i_n\},
\]

如下诱导的图表均为 $\mathcal{C}$ 中的拉回：

\[
\begin{tikzcd}
  \mathcal{G}_n \ar[r, "(i_0 \dots i_k)^*"] \ar[d, swap, "(i_k \dots i_n)^*"'] \ar[dr, phantom, "\lrcorner", very near start] & \mathcal{G}_k \ar[d, "i_k^*"] \\
  \mathcal{G}_{n-k} \ar[r, swap, "i_k^*"] & \mathcal{G}_0
\end{tikzcd}
\]
:::

::: remark
上述定义同时编码了群胚对象的两个核心性质：

1. **结合律（Segal 条件）：**
   当选取标准有序划分时（如 $[2]=\{0,1\}\cup\{1,2\}$），
   拉回条件给出 $\mathcal{G}_2 \simeq \mathcal{G}_1 \times_{\mathcal{G}_0} \mathcal{G}_1$，
   保证了态射合成的良定义性。

2. **可逆性：** 当选取非保序划分时，该条件强制要求态射可逆。

在此观点下，$\mathcal{G}_0$ 对应于“对象集”（或生象），$\mathcal{G}_1$ 对应于“态射集”（或关系）。
映射 $(s,t) \colon \mathcal{G}_1 \to \mathcal{G}_0 \times \mathcal{G}_0$ 的像即定义了
$\mathcal{G}_0$ 上的“高阶等价关系”。
具体而言：

- 在集合范畴 $\mathsf{Set}$ 中，群胚对象就是经典意义下的群胚。
  映射 $(s,t) \colon \mathcal{G}_1 \to \mathcal{G}_0 \times \mathcal{G}_0$ 的像在 $\mathcal{G}_0$
  上定义了一个等价关系：自反性源自恒等映射，传递性源自态射合成，对称性源自态射求逆。

- 反之，
  集合 $X$ 上的等价关系 $R \subseteq X \times X$ 双射对应于满足如下条件的集合群胚 $\mathcal{G}$：
  $\mathcal{G}_0 = X$，
  且映射 $(s,t) \colon \mathcal{G}_1 \hookrightarrow \mathcal{G}_0 \times \mathcal{G}_0$ 是单射。
  在此对应下，群胚的余极限 $|\mathcal{G}|$ 恰好对应于商集 $X/R$。

:::

::: definition [通过 Giraud 公理定义 $(\infty,1)$-意象] {@def-Giraud}
称 $(\infty,1)$-范畴 $\mathcal{T}$ 为 $(\infty,1)$-意象，是指其满足以下条件：

1. $\mathcal{T}$ 是可表现范畴。

2. $\mathcal{T}$ 中的余积无交（即任意两个对象的余积是不交并）。

3. $\mathcal{T}$ 中的余极限均万有。

4. $\mathcal{T}$ 中群胚对象的余极限均有效。

:::

::: remark
与经典 Giraud 公理相比，主要的区别在于条件 4：
经典情况下要求等价关系的余等子有效，而此处替换为群胚对象的余极限有效。
这一替换反映了从 $1$-范畴到 $(\infty,1)$-范畴的提升中，
等价关系（集合层面的概念）需要推广为群胚对象
（生象层面的概念）。
:::

## 性质

### 四种定义的等价性

::: theorem
令 $\mathcal{T}$ 为 $(\infty,1)$-范畴，以下条件等价：

- $\mathcal{T}$ 满足 @def-lex-loc（左正合局部化）。

- $\mathcal{T}$ 满足 @def-descent（下降）。

- $\mathcal{T}$ 满足 @def-obj-classifier（对象分类子）。

- $\mathcal{T}$ 满足 @def-Giraud（Giraud 公理）。

:::

### 极限与余极限

::: theorem
$(\infty,1)$-范畴 $\mathsf{Topos}$ 与 $\mathsf{Logos}$
均具有小极限与小余极限。并且满足以下性质：
- $\mathsf{Logos} \to \mathsf{Cat}_{\infty}, \varphi \mapsto \varphi^*$ 保持极限。
- $\mathsf{Topos} \to \mathsf{Cat}_{\infty}, \varphi \mapsto \varphi_*$ 保持[[滤余极限]]。

:::

::: remark
$\mathsf{Topos}$ 中的极限不是很好描述。
:::

```terms
'$(\infty, 1)$-意象':
  en: '$(\infty, 1)$-topos'
  de: '$(\infty, 1)$-Topos :m'
  fr: '$(\infty, 1)$-topos :m'
```
