---
title: 解析叠
categories: [高阶范畴论, 代数几何]
navboxes: [P 进几何]
---

<problems>
- “例子”一节需要扩充，例如液态与气态解析环、代数叠、Betti 叠。
</problems>

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  将经典的范畴称为 $1$-范畴。
- [[意象]]都指 [[$(\infty,1)$-意象]]。

:::

**解析叠**是[[凝聚态数学]]框架下的一种几何对象。

大致来说，
解析叠理论的起点是**解析环**，
一种配备了“完备模范畴”的轻凝聚生象环。
解析环上的[[六函子理论]]
自然地确定一个 Grothendieck 拓扑（D-拓扑），
从而通过[[纹路意象]]的框架给出解析叠的范畴。
在这一框架下，
诸多[[代数几何]]与 [[p 进几何]]中的常见构造都可以作为特殊情况恢复。

## 凝聚态生象

解析叠理论建立在凝聚数学之上。
凝聚数学的核心思想是
用“测试对象上的连续映射”来编码拓扑信息，
从而避免拓扑空间与代数结构之间的不相容性。

::: definition [轻凝聚态生象] {@def-condensed}
**轻投射有限集**是指[[度量空间|可度量]]的[[投射有限集]]。
记 $\mathsf{ProFin}^{\mathrm{light}}$
为轻投射有限集范畴，
赋予有限多个联合满射为覆盖的拓扑。
**轻凝聚态生象**是指
$\mathsf{ProFin}^{\mathrm{light}}$
上的[[超完备性|超完备层]]：
\[
\mathsf{CondAni}
\coloneqq
\mathsf{Shv}(
  \mathsf{ProFin}^{\mathrm{light}}
)^{\mathrm{hyp}}.
\]
对于代数结构 $\mathcal{C}$
（即带有小极限和余极限的范畴），
其**轻凝聚化**定义为
$\mathsf{Cond}(\mathcal{C})
  \coloneqq
  \mathsf{Shv}(
    \mathsf{ProFin}^{\mathrm{light}},
    \mathcal{C})$。
由此可以谈论轻凝聚 Abel 群、轻凝聚环等。
:::

::: remark
轻凝聚版本的选取
兼顾了捕获足够的拓扑信息
和避免集合论技术困难之间的平衡。
大部分分析和几何中感兴趣的拓扑空间
（如 [[Banach 空间]]、[[Fréchet 空间]]、
[[流形]]、[[CW 复形]]等）都是可度量的。
:::

## 解析环

解析环是解析叠理论的基本构件。
仅有凝聚环不足以处理解析几何，
我们还需要“完备张量积”和“完备模范畴”，
这些额外的数据由解析环结构来编码。

::: definition [解析环] {@def-analytic-ring}
**解析环**是指二元组
$A = (A^\triangleright, \mathsf{D}(A))$，
其中 $A^\triangleright$ 为轻凝聚[[生象环]]，
$\mathsf{D}(A) \hookrightarrow
  \mathsf{D}(A^\triangleright)$
为全子范畴（称为 $A$ 的**完备模范畴**），
满足以下条件：

1. $\mathsf{D}(A)$ 关于
   $\mathsf{D}(A^\triangleright)$
   中的极限和余极限封闭。

2. 对于每个 $M \in \mathsf{D}(A^{\triangleright})$，
   $\mathsf{D}(A)$
   都关于其[[闭幺半范畴|幂函子]] $\underline{\mathrm{Hom}}(M,-)$ 封闭。

3. 含入函子 $\iota$ 具有左伴随 $L$
   （称为**完备化函子**）。

4. 函子 $\iota \circ L$ 保持连合对象
   （关于 $\mathsf{D}(A^{\triangleright})$ 上的典范 $t$-结构）。

5. $A^\triangleright \in \mathsf{D}(A)$，
   即底凝聚生象环本身是完备的。

解析环之间的**态射** $f \colon A \to B$
是指凝聚环同态
$f^\triangleright \colon
  A^\triangleright \to B^\triangleright$，
使得遗忘函子
$f_* \colon
  \mathsf{D}(B^\triangleright) \to
  \mathsf{D}(A^\triangleright)$
将 $\mathsf{D}(B)$ 映入 $\mathsf{D}(A)$。
记解析环范畴为 $\mathsf{AnRing}$。
:::

::: remark
解析环的关键洞察在于：
“完备性”不应是模上的额外结构，
而应是一个性质——
即“属于 $\mathsf{D}(A)$”这一条件。
这使得完备模范畴可以在凝聚框架下
用纯范畴论的语言来处理。
:::

### 态射的分类

::: definition {@def-analytic-morphisms}
解析环之间的态射 $f \colon A \to B$ 称为：

- **紧合态射**，
  若 $f_*$ 诱导等价
  \[
  \mathsf{D}(B)
  \xrightarrow{\;\sim\;}
  \mathsf{D}(B^\triangleright)
  \times_{\mathsf{D}(A^\triangleright)}
  \mathsf{D}(A).
  \]
  即 $B$ 的完备模范畴由 $A$ 的完备模范畴
  “诱导”而来。

- **开浸入**，
  若 $f^*$ 具有满足[[投影公式]]的
  左伴随 $f_!$。

称 $f$ 为 **!-容许态射**，
若诱导态射 $B_{A/} \to B$ 为开浸入，
其中 $B_{A/}$ 为诱导解析环结构。
:::

::: remark
紧合态射和开浸入分别扮演
[[六函子理论]]的构造中“紧合类”$P$
和“开浸入类”$I$ 的角色。
!-容许态射则是二者的复合，
对应于[[纹路意象|几何景]]中的“容许类”$\mathcal{C}^{\mathrm{ad}}$，
或称六函子理论中的反常态射类 $E$。
:::

## 六函子理论与 D-拓扑

解析叠的 Grothendieck 拓扑
由六函子理论自然确定。

::: proposition {@prop-analytic-6ff}
记
$\mathsf{AnStk}^{\mathrm{aff}}
  \coloneqq \mathsf{AnRing}^{\mathrm{op}}$
为仿射解析叠范畴。
则完备模范畴函子
\[
\mathsf{D} \colon
\mathsf{AnStk}^{\mathrm{aff},\mathrm{op}}
\to \mathsf{Pr}^L,
\quad A \mapsto \mathsf{D}(A)
\]
可以唯一提升为可表现[[六函子理论]]
\[
\mathsf{D} \colon
\mathsf{Span}(
  \mathsf{AnStk}^{\mathrm{aff}},
  \mathsf{AnStk}^{!,\mathrm{aff}}
)^{\otimes}
\to \mathsf{Pr}^{L,\otimes},
\]
其中
$\mathsf{AnStk}^{!,\mathrm{aff}}$
为 !-容许态射所构成的宽子范畴。
:::

::: definition [D-拓扑] {@def-D-topology}
$\mathsf{AnStk}^{\mathrm{aff}}$ 上的
**D-拓扑** $\tau_D$ 定义为：
!-容许态射族 $\{f_i \colon U_i \to X\}$
为 $\tau_D$-覆盖，
当且仅当
$\{f_{i,!} \colon
  \mathsf{D}(U_i) \to \mathsf{D}(X)\}$
联合生成 $\mathsf{D}(X)$。
:::

::: remark
D-拓扑的直观：
态射族“覆盖”$X$
当且仅当 $X$ 上的全体完备模
可以从各 $U_i$ 上的完备模“粘合”而来。
这自动保证了完备模范畴函子 $\mathsf{D}$
满足关于该拓扑的下降条件。
:::

## 定义

::: definition [解析叠] {@def-analytic-stacks}
**解析叠**范畴定义为
\[
\mathsf{AnStk}
\coloneqq
\mathsf{Shv}^+_{\tau_D}(
  \mathsf{AnRing}^{\mathrm{op}}),
\]
其中 $\mathsf{Shv}^+$
表示通过[[纹路意象|纹路局部化]]所得的意象。
:::

::: remark
准确来说，三元组
$(\mathsf{AnRing}^{\mathrm{op}},\;
  \mathsf{AnRing}^{!,\mathrm{op}},\;
  \tau_D)$
构成[[纹路意象|几何景]]。
层范畴
\[
\mathsf{Shv}_{\tau_D}(
  \mathsf{AnRing}^{!,\mathrm{op}})
\hookrightarrow
\mathsf{Shv}_{\tau_D}(
  \mathsf{AnRing}^{\mathrm{op}})
\]
构成纹路意象。
$\mathsf{AnStk}$ 是通过纹路局部化
（沿完备模范畴函子 $\mathsf{D}$
确定的[[同余类 (范畴论)|同余类]] $\Sigma_\mathsf{D}$）
进一步精化所得。
纹路局部化的作用是
确保容许态射和紧合态射之间的相互作用
在层化过程中得到正确处理。
:::

## 例子

### 始解析环

::: example
$\mathsf{AnRing}$ 的始对象为
$(\mathbb{Z}, \mathsf{D}(\mathsf{CondAb}))$，
其完备模范畴为全体凝聚 Abel 群的导出范畴。
称之为**凝聚态整数环**。
:::

### 固态整数环

::: example {@ex-solid}
**固态 Abel 群**范畴
$\mathsf{Solid} \subset \mathsf{CondAb}$
定义为凝聚 Abel 群范畴中
包含 $\mathbb{Z}$ 且关于极限和余极限封闭的最小全子范畴。
配上固态张量积 $\otimes_\square$，
二元组
$\mathbb{Z}_\square = (\mathbb{Z}, \mathsf{Solid})$
构成解析环，称为**固态整数环**。
:::

## 性质

### 拟凝聚六函子理论

::: proposition
完备模范畴函子 $\mathsf{D}$
从仿射解析叠延拓为
全体解析叠上的六函子理论：
\[
\mathsf{D} \colon
\mathsf{Span}(
  \mathsf{AnStk}, E)^{\otimes}
\to \mathsf{Pr}^{L,\otimes},
\]
其中
$E = \mathsf{Shv}_{\tau_\mathsf{D}}(
    \mathsf{AnRing}^{!,\mathrm{op}}
  )[\Sigma_\mathsf{D}^{-1}]$。
对于解析叠 $X$，
$\mathsf{D}(X)$ 称为 $X$ 上的**拟凝聚层范畴**。
:::

### 范畴 Künneth 公式

::: proposition
$\mathsf{D}$ 满足范畴论 Künneth 公式：
对于 !-容许态射 $f \colon Y \to X$
以及任意态射 $g \colon X' \to X$，
记 $f' \colon Y' \to X'$ 为基变换，
则有范畴等价
\[
\mathsf{D}(X')
\otimes_{\mathsf{D}(X)}
\mathsf{D}(Y)
\xrightarrow{\;\sim\;}
\mathsf{D}(Y').
\]
:::

## 参考文献

解析叠理论由 Clausen 和 Scholze
在 [@CS24] 中系统发展。
[@RC26] 给出了解析叠的基本理论以及[[固态]]的详细笔记。
凝聚数学的基础见 [@CS19]（或 [凝聚态数学](/books/凝聚态数学/)）。
六函子理论见 [@HM24]。

```bibliography
CS24:
  type: online
  author: [Dustin Clausen, Peter Scholze]
  title: Analytic Stacks
  site: YouTube
  url: https://youtu.be/YxSZ1mTIpaA?si=09W7xylE0lELszvQ
  note: Lecture series, University of Bonn, 2023–2024
RC26:
  type: preprint
  author: Juan Esteban Rodríguez Camargo
  year: 2026
  title: Notes on Solid Geometry
  arxiv: '2603.03012'
CS19:
  type: preprint
  author: [Dustin Clausen, Peter Scholze]
  title: Condensed Mathematics
  note: Lecture notes, University of Bonn, 2019–2020
HM24:
  type: preprint
  title: 6-Functor Formalisms and Smooth Representations
  author: [Claudius Heyer, Lucas Mann]
  year: 2024
  arxiv: '2410.13038'
```

```terms
解析叠:
  en: analytic stack
解析环:
  en: analytic ring
凝聚态生象:
  en: condensed anima
固态:
  en: solid
液态:
  en: liquid
$!$-容许:
  en: $!$-able
D-拓扑:
  en: D-topology
```
