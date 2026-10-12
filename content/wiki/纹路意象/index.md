---
title: 纹路意象
categories: [高阶范畴论, 代数几何]
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  将经典的范畴称为 $1$-范畴。
- [[意象]]都指 [[$(\infty,1)$-意象]]。
  在意象中，覆盖是指[[有效满态射]]。

:::

**纹路意象**是带有额外几何结构的[[意象]]，
由 Lurie 在 [@LurieSAG] 中引入。
大致来说，纹路意象是在意象 $\mathcal{E}$ 中
指定一个“纹素子意象”$\mathcal{E}^{\mathrm{corp}}$，
从而确定哪些态射是“容许的”，哪些态射是“局部的”，
以及如何定义“概形”。

纹路意象抽象了代数几何中概形论的基本模式：

- 大意象 $\mathcal{E}$ 中有一个纹素子范畴
  $\mathcal{E}^{\mathrm{corp}}$
  （如仿射概形上的 Zariski 层）；

- “容许态射”（如开浸入）
  由纹素对象之间的态射确定；

- 概形可以定义为被纹素对象
  沿容许态射覆盖的对象。

更换不同的纹素子范畴，
就得到不同的几何：
[[概形|Zariski 几何]]、[[平展景|平展几何]]、[[微分几何]]、[[解析几何]]
都是同一框架的不同实例。

## 定义

::: definition [纹路意象] {@def-fractured-topos}
**纹路意象**是指意象 $\mathcal{E}$
配上子范畴
$j_! \colon \mathcal{E}^{\mathrm{corp}}
  \hookrightarrow \mathcal{E}$，
满足以下条件：

1. $\mathcal{E}^{\mathrm{corp}}$ 带有拉回，
   且 $j_!$ 保持拉回。

2. $j_!$ 具有保守且保持余极限的右伴随 $j^*$。

3. 对于 $\mathcal{E}^{\mathrm{corp}}$
   中每个态射 $U \to V$，
   如下方块为拉回：
   \[
   \begin{tikzcd}
     j_! j^* j_! U
       \ar[d]
       \ar[dr,phantom,very near start,"\lrcorner"]
       \ar[r]
       & j_! j^* j_! V \ar[d] \\
     j_! U \ar[r]
       & j_! V
   \end{tikzcd}
   \]

$\mathcal{E}^{\mathrm{corp}}$ 中的对象
称为**纹素**。
在实际讨论中，
常加入以下补充条件
（所有已知例子均满足）：

- $4^*$。$\mathcal{E}$ 中纹素的收缩仍然是纹素。

:::

::: remark [术语]
“纹路意象”是 fractured topos 的意译。
fractured 的本义为裂隙，
而纹路可视为一种裂隙——
它为意象刻画了一套内在的几何纹理，
沿着这套纹理可以定义容许态射、局部态射和概形。
纹素是纹路中的“基本构件”。
:::

## 性质

### 基本性质

::: proposition
对于纹路意象
$(\mathcal{E}, \mathcal{E}^{\mathrm{corp}})$：

1. $\mathcal{E}^{\mathrm{corp}}$ 构成意象，
   且 $j^*$ 为代数态射。

2. 对于每个
   $X \in \mathcal{E}^{\mathrm{corp}}$，
   函子
   $j_! \colon
        \mathcal{E}^{\mathrm{corp}}_{/X} \to
        \mathcal{E}_{/j_!(X)}$
   全忠实。

3. $\mathcal{E}$ 可由纹素沿余极限生成。

:::

::: remark
性质 (2) 的直观含义：
纹素之间的态射在嵌入 $\mathcal{E}$ 后
“表现得像平展态射”——
定义中的拉回条件保证了纹素之间的态射
具有“局部平凡性”。
:::

### 容许态射

纹路意象中自然地产生容许结构。

::: definition {@def-admissible-from-fractured}
令 $(\mathcal{E}, \mathcal{E}^{\mathrm{corp}})$
为纹路意象。
称 $\mathcal{E}$ 中态射 $f \colon Y \to X$
为**容许的**，
是指其沿每个纹素
$Z \in \mathcal{E}^{\mathrm{corp}}$ 的基变换
仍落在 $\mathcal{E}^{\mathrm{corp}}$ 中。
由此确定宽子范畴
$\mathcal{E}^{\mathrm{ad}} \subset \mathcal{E}$。
:::

### 局部态射

::: definition {@def-local-map-fractured}
令 $(\mathcal{E}, \mathcal{E}^{\mathrm{corp}})$
为纹路意象。
考虑两个几何态射
$f, g \colon \mathcal{T} \to \mathcal{E}$
以及自然变换 $\alpha \colon f^* \to g^*$。
称 $\alpha$ 为**局部的**，
是指对于 $\mathcal{E}^{\mathrm{corp}}$
中的每个态射 $h \colon U \to V$，
如下方块为拉回：
\[
\begin{tikzcd}
  f^* U \ar[r,"\alpha_U"] \ar[d,"f^* h"]
    \ar[dr,phantom,very near start,"\lrcorner"]
    & g^* U \ar[d,"g^* h"] \\
  f^* V \ar[r,"\alpha_V"]
    & g^* V
\end{tikzcd}
\]
由此得到宽子范畴
$(\mathbb{T}\mathsf{opos}_{//\mathcal{E}})^{\mathrm{loc}}
  \subseteq
  \mathbb{T}\mathsf{opos}_{//\mathcal{E}}$。
:::

## 构造

### 通过几何景

::: definition [容许结构] {@def-admissibility}
令 $\mathcal{C}$ 为带有拉回的范畴。
$\mathcal{C}$ 上的**容许结构**
是指宽子范畴
$\mathcal{C}^{\mathrm{ad}} \subseteq \mathcal{C}$
（其态射称为**容许态射**），满足：

- $\mathcal{C}^{\mathrm{ad}}$
  关于 $\mathcal{C}$ 中基变换封闭。

- $\mathcal{C}^{\mathrm{ad}}$ 左可消：
  若 $g$ 和 $g \circ f$ 均容许，则 $f$ 亦然。

- 容许态射关于收缩封闭。

:::

::: definition [几何景] {@def-geometric-site}
称 Grothendieck 拓扑 $\tau$
与容许结构 $\mathcal{C}^{\mathrm{ad}}$ **相容**，
是指每个 $\tau$-覆盖筛都包含一个
由容许态射生成的 $\tau$-覆盖筛。
三元组
$(\mathcal{C}, \mathcal{C}^{\mathrm{ad}}, \tau)$
称为**几何景**。
:::

::: theorem {@thm-geometric-site-fractured}
令 $(\mathcal{C}, \mathcal{C}^{\mathrm{ad}}, \tau)$
为几何景。
则含入
$\mathcal{C}^{\mathrm{ad}} \hookrightarrow \mathcal{C}$
诱导的函子
\[
j_! \colon
\mathsf{Shv}_\tau(\mathcal{C}^{\mathrm{ad}})
\hookrightarrow
\mathsf{Shv}_\tau(\mathcal{C})
\]
构成纹路意象。
:::

### 通过六函子理论

::: definition [$D$-拓扑]
令 $(\mathcal{C}, \mathcal{C}^{\mathrm{ad}})$
为带容许结构的范畴，
$D \colon \mathsf{Span}(
    \mathcal{C}, \mathcal{C}^{\mathrm{ad}})
  \to \mathsf{Pr}$
为可表现[[六函子理论]]。
由 $D$ 确定的 **$D$-拓扑** $\tau_D$ 定义为：
态射族 $\{f_i \colon U_i \to X\}$
为 $\tau_D$-覆盖，
当且仅当
$\{f_{i,!} \colon D(U_i) \to D(X)\}$
联合生成 $D(X)$。
:::

::: corollary
$(\mathsf{Shv}_{\tau_D}(\mathcal{C}),\;
  \mathsf{Shv}_{\tau_D}(\mathcal{C}^{\mathrm{ad}}))$
构成纹路意象。
:::

### 纹路局部化

::: definition [纹路局部化] {@def-fractured-localization}
令 $(\mathcal{E},
  j_! \colon \mathcal{E}^{\mathrm{corp}}
  \hookrightarrow \mathcal{E})$ 为纹路意象，
$\Sigma \subseteq
  \mathrm{Ar}(\mathcal{E}^{\mathrm{corp}})$
为[[同余类 (范畴论)|同余类]]。
**纹路局部化**
$(\mathcal{E}^+,
  (\mathcal{E}^+)^{\mathrm{corp}})$
定义为如下拉回：
\[
\begin{tikzcd}
  \mathcal{E}^+ \ar[r] \ar[d]
    \ar[dr,phantom,very near start,"\lrcorner"]
    & \mathcal{E} \ar[d,"j^*"] \\
  \mathcal{E}^{\mathrm{corp}}[\Sigma^{-1}]
    \ar[r]
    & \mathcal{E}^{\mathrm{corp}}
\end{tikzcd}
\]
其中底部水平箭头为局部化函子的全忠实右伴随，
$(\mathcal{E}^+)^{\mathrm{corp}}
  \coloneqq
  \mathcal{E}^{\mathrm{corp}}[\Sigma^{-1}]$。
:::

::: proposition
在上述设定下：

1. $\mathcal{E}^+ \hookrightarrow \mathcal{E}$
   为左正合局部化，即 $\mathcal{E}^+$ 为意象。

2. $j_!^\Sigma \colon
        (\mathcal{E}^+)^{\mathrm{corp}}
        \hookrightarrow \mathcal{E}^+$
   构成纹路意象。

3. $\mathcal{E}^+$ 上的容许结构
   继承自 $\mathcal{E}$。

:::

::: remark
纹路局部化的关键在于
只在纹素范畴 $\mathcal{E}^{\mathrm{corp}}$ 上局部化，
通过拉回自动确定整个意象的局部化，
从而保持纹路结构。
直接对 $\mathcal{E}$ 局部化则不一定保持纹路结构。
:::

## 等价刻画

纹路结构、几何容许结构和局部态射三者相互等价。

::: theorem
令 $\mathcal{E}$ 为意象。则以下数据相互确定：

1. $\mathcal{E}$ 上的纹路结构
   $(\mathcal{E}, \mathcal{E}^{\mathrm{corp}})$。

2. $\mathcal{E}$ 上的几何容许结构
   $\mathcal{E}^{\mathrm{ad}}$。

3. 松切片 $2$-范畴
   $\mathbb{T}\mathsf{opos}_{//\mathcal{E}}$
   中的局部态射子范畴
   $(\mathbb{T}\mathsf{opos}_{//\mathcal{E}})^{\mathrm{loc}}$。

具体而言，(1) 与 (2) 之间的对应
由 @def-admissible-from-fractured 给出；
(1) 与 (3) 之间的对应
由 @def-local-map-fractured 给出。
:::

::: remark
这一等价在代数几何中的具体体现：

- 纹素对象 = 仿射概形（上的 Zariski 层）；

- 容许态射 = Zariski 开浸入；

- 局部态射 = 检测可逆元的环映射。

三者各自足以刻画概形范畴。
:::

## 概形

纹路意象的框架允许在任意几何语境中定义概形。

::: definition [$\mathsf{G}$-概形] {@def-G-scheme}
令 $\mathsf{G}
  = (\mathcal{C}, \mathcal{C}^{\mathrm{ad}}, \tau)$
为几何景，
$(\mathcal{E}, \mathcal{E}^{\mathrm{corp}})$
为相应的纹路意象。
当 $\tau$ 为次典范拓扑时，
存在全忠实的谱函子
\[
\mathrm{Spec}_{\mathsf{G}} \colon
\mathrm{Pro}(\mathcal{C})
\hookrightarrow
(\mathbb{T}\mathsf{opos}_{//\mathcal{E}})^{\mathrm{loc}}.
\]
**$\mathsf{G}$-概形**范畴
$\mathsf{Sch}_{\mathsf{G}}$
为
$(\mathbb{T}\mathsf{opos}_{//\mathcal{E}})^{\mathrm{loc}}$
中那些局部落在
$\mathrm{Spec}_{\mathsf{G}}$ 像中的对象
所构成的全子范畴。
:::

::: remark
“局部落在 $\mathrm{Spec}_\mathsf{G}$ 像中”
的精确含义：
$(\mathcal{T}, \varphi) \in
  (\mathbb{T}\mathsf{opos}_{//\mathcal{E}})^{\mathrm{loc}}$
为 $\mathsf{G}$-概形，
是指存在覆盖
$\{U_i \to \ast\}_{i \in I}$
使得每个
$(\mathcal{T}_{/U_i}, \varphi|_{U_i})$
落在 $\mathrm{Spec}_{\mathsf{G}}$ 的本质像中。
这正是经典概形定义
（“被仿射概形沿开浸入覆盖”）
的范畴论推广。
:::

## 例子

- **经典 Zariski 几何。**
  取 $\mathcal{C}
      = \mathsf{CAlg}^{\mathrm{fp},\mathrm{op}}$，
  $\tau$ 为 Zariski 拓扑，
  $\mathcal{C}^{\mathrm{ad}}$
  为形如 $R \to R[s^{-1}]$ 的开浸入。
  此时 $0$-位象的 $\mathsf{G}$-概形
  恢复经典概形。

- **导出 Zariski 几何。**
  将静态环替换为生象环，
  给出导出概形。

- **经典平展几何。**
  取 $\mathcal{C}^{\mathrm{ad}}$ 为平展态射。
  此时 $1$-位象的 $\mathsf{G}$-概形
  恢复 Deligne–Mumford 叠。

- **微分几何。**
  基于 $C^\infty$-环。

- **解析几何。**
  [[解析叠]]可以纳入此框架。

## 参考文献

纹路意象的定义和基本理论见 [@LurieSAG, §20]。
课程笔记 [@HoyoisHTT, §7.2] 给出了简明的综述。

```bibliography
LurieSAG:
  type: book
  author: Jacob Lurie
  year: 2018
  title: Spectral Algebraic Geometry
  url: https://www.math.ias.edu/~lurie/papers/SAG-rootfile.pdf
  label: SAG
HoyoisHTT:
  type: preprint
  author: Marc Hoyois
  year: 2025
  title: Notes on Higher Topos Theory
  note: 'Course notes, University of Regensburg'
  label: Hoyois
  url: https://hoyois.app.uni-regensburg.de/WS26/htt/index.html
ABFJ:
  type: article
  author: [Mathieu Anel, Georg Biedermann, Eric Finster, André Joyal]
  year: 2022
  title: Modalities in homotopy type theory
  label: ABFJ
```

```terms
纹路意象:
  en: fractured topos
纹素:
  en: corporeal object
容许结构:
  en: admissibility structure
几何景:
  en: geometric site
局部态射:
  en: local morphism
```
