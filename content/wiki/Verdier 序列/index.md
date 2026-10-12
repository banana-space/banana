---
title: Verdier 序列
aliases: [Verdier 商, 分裂 Verdier 序列, Karoubi 列]
categories: [$K$ 理论]
navboxes: [代数 K 理论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  将经典的范畴称为 $1$-范畴。
- 记 $\mathsf{Cat}^{\mathrm{ex}}$
  为小[[稳定范畴]]及其间正合函子所构成的范畴。
  记 $\mathsf{Cat}^{\mathrm{rex}}$
  为带有限余极限的小范畴及其间右正合函子所构成的范畴。
- 我们区分连合 K 理论以及非连合 K 理论，
  将前者记为 $\mathrm{k}$，后者记为 $\mathrm{K}$。

:::

**Verdier 序列**是[[代数 K 理论]]中的基本概念。
粗略来说，它是稳定范畴之间的“短正合列”：
一个正合函子复形，其纤维与余纤维恰好匹配，
形成同时为纤维列和余纤维列的序列。
Verdier 序列可以诱导代数 K 理论
[[谱 (拓扑学)|谱]]的纤维列
\[
\mathrm{k}(\mathcal{C}) \to \mathrm{k}(\mathcal{D})
\to \mathrm{k}(\mathcal{E}),
\]
因此在[[局部化 (范畴论)|局部化]]序列和 K 理论的计算中起核心作用，
并且可以启发[[代数 K 理论|非连合 K 理论]]的定义。

## 定义

### Verdier 序列

::: definition
令
\[
\mathcal{C} \xrightarrow{f} \mathcal{D}
\xrightarrow{p} \mathcal{E}
\]
为 $\mathsf{Cat}^{\mathrm{ex}}$ 中的序列，
满足 $p \circ f \simeq 0$。
称该序列为 **Verdier 序列**，
是指其同时为 $\mathsf{Cat}^{\mathrm{ex}}$ 中的纤维列和余纤维列。
此时称 $f$ 为 **Verdier 嵌入**，
$p$ 为 **Verdier 投影**。
:::

::: remark
条件 $p \circ f \simeq 0$
是指复合函子 $p \circ f$ 为稳定范畴
$\mathsf{Fun}^{\mathrm{ex}}(\mathcal{C}, \mathcal{E})$ 中的零对象。
等价地，可视为 $p \circ f$ 穿过零范畴 $\{0\} \subset \mathcal{E}$，
从而将该条件改写为如下交换方块：
\[
\begin{tikzcd}
  \mathcal{C} \ar[r,"f"] \ar[d]
    & \mathcal{D} \ar[d,"p"] \\
  \{0\} \ar[r]
    & \mathcal{E}
\end{tikzcd}
\]
Verdier 序列即要求此方块同时为拉回和推出。
:::

### Verdier 商

$\mathsf{Cat}^{\mathrm{ex}}$ 中的纤维可以直接在 $\mathsf{Cat}$ 中计算，
而余纤维则由 Verdier 商描述。

::: definition [Verdier 商]
令 $f \colon \mathcal{C} \to \mathcal{D}$
为[[稳定范畴]]之间的正合函子。
称 $\mathcal{D}$ 中的态射 $\alpha \colon d \to d'$
为**模 $\mathcal{C}$ 同构**，
是指 $\operatorname{cofib}(\alpha)$ 落在
$f$ 的本质像所张成的最小稳定子范畴中。
$\mathcal{D}$ 关于全体模 $\mathcal{C}$ 同构
进行[[局部化 (范畴论)|局部化]]所得的范畴
\[
\mathcal{D} / \mathcal{C}
\coloneqq \mathcal{D}[W^{-1}]
\]
称为 $\mathcal{D}$ 关于 $\mathcal{C}$ 的 **Verdier 商**。
:::

### 分裂 Verdier 序列

::: definition
称 Verdier 序列
$\mathcal{C} \xrightarrow{f} \mathcal{D} \xrightarrow{p} \mathcal{E}$
为**分裂的**，
是指 $p$ 同时具有左伴随和右伴随。
:::

::: remark
等价地，可以要求 $f$ 同时具有左伴随和右伴随。
具体而言，当 $p$ 具有全忠实的右伴随 $q$ 时，
$f$ 的左伴随可由余单位的余纤维
$\operatorname{cofib}(qp \to \mathrm{id}_{\mathcal{D}})$ 给出；
反过来，当 $f$ 具有左伴随 $g$ 时，
$p$ 的右伴随可由单位的纤维
$\operatorname{fib}(\mathrm{id}_{\mathcal{D}} \to fg)$ 给出。
分裂 Verdier 序列对应于稳定重合的概念。
:::

## 等价刻画

::: proposition
令 $f \colon \mathcal{C} \to \mathcal{D}$
为稳定范畴之间的正合函子。

1. Verdier 商 $\mathcal{D} / \mathcal{C}$ 为稳定范畴，
   且局部化函子 $\mathcal{D} \to \mathcal{D} / \mathcal{C}$
   为正合函子。

2. 对于任意稳定范畴 $\mathcal{E}$，
   限制函子
   $\mathsf{Fun}^{\mathrm{ex}}(\mathcal{D} / \mathcal{C},
        \mathcal{E}) \to \mathsf{Fun}^{\mathrm{ex}}(\mathcal{D},
        \mathcal{E})$
   为全忠实函子，
   其本质像为与 $f$ 前复合后为零的正合函子。
   特别地，
   $\mathcal{C} \to \mathcal{D}
        \to \mathcal{D} / \mathcal{C}$
   为 $\mathsf{Cat}^{\mathrm{ex}}$ 中的余纤维列。

:::

以下命题给出了 Verdier 嵌入、Verdier 投影
以及 Verdier 序列的多种等价刻画。

::: proposition
令 $p \colon \mathcal{D} \to \mathcal{E}$
为稳定范畴之间的正合函子，
则以下条件等价：

1. $p$ 为 Verdier 投影。

2. $p$ 为 $\mathcal{D}$ 关于某个稳定子范畴的
   Verdier 商的典范映射。

3. $p$ 为局部化
   （关于其映为同构的态射）。

特别地，Verdier 投影都是本质满函子。
:::

::: proposition
令 $f \colon \mathcal{C} \to \mathcal{D}$
为稳定范畴之间的正合函子，
则以下条件等价：

1. $f$ 为 Verdier 嵌入。

2. $f$ 全忠实，
   且其本质像在 $\mathcal{D}$ 中
   关于[[收缩]]封闭。

:::

::: remark
关于收缩封闭的条件不可省略。
由 Verdier 商的一般性质可知，
$\operatorname{ker}(p)$ 中的对象恰好是
$f$ 的本质像中对象的收缩。
因此若 $f$ 的像不关于收缩封闭，
则 $f$ 与 $\operatorname{ker}(p)$ 之间有差距，
序列不能同时为纤维列和余纤维列。
:::

::: proposition
令 $\mathcal{C} \xrightarrow{f} \mathcal{D}
  \xrightarrow{p} \mathcal{E}$
为 $\mathsf{Cat}^{\mathrm{ex}}$ 中的序列，
满足 $p \circ f \simeq 0$。
则以下条件等价：

1. 该序列为 Verdier 序列。

2. $f$ 全忠实且像关于收缩封闭，
   而 $p$ 将 $\mathcal{E}$ 等同于
   Verdier 商 $\mathcal{D} / \mathcal{C}$。

3. $p$ 为局部化，
   且 $f$ 将 $\mathcal{C}$ 等同于
   $\operatorname{ker}(p)$。

:::

::: proposition
Verdier 投影关于基变换封闭：
$\mathsf{Cat}^{\mathrm{ex}}$ 中 Verdier 投影
沿任意正合函子的拉回仍为 Verdier 投影。
:::

## Karoubi 序列

Karoubi 序列是 Verdier 序列的宽松版本，
仅要求在[[幂等完备 (∞,1)-范畴|幂等完备化]]后
成为 Verdier 序列。

### 稠密嵌入

::: definition
称正合函子 $i \colon \mathcal{C} \to \mathcal{D}$
为**稠密嵌入**（又称 **Karoubi 等价**），
是指 $i$ 全忠实，
且 $\mathcal{D}$ 中的每个对象都是
$i$ 的本质像中某个对象的[[收缩]]。
:::

::: example
[[幂等完备 (∞,1)-范畴|幂等完备化]]
$\mathcal{C} \to \mathcal{C}^{\mathrm{idem}}$
为典型的稠密嵌入。
:::

::: theorem [Thomason]
稠密嵌入诱导 $\mathrm{k}_0$ 上的单射。
到固定的小稳定范畴 $\mathcal{C}$ 的稠密嵌入
（在 $\mathcal{C}$ 上的等价类意义下）
与 $\mathrm{k}_0(\mathcal{C})$ 的子群之间存在双射。
:::

### 定义与刻画

::: definition
令
\[
\mathcal{C} \xrightarrow{f} \mathcal{D}
\xrightarrow{p} \mathcal{E}
\]
为 $\mathsf{Cat}^{\mathrm{ex}}$ 中的序列，
满足 $p \circ f \simeq 0$。
称该序列为 **Karoubi 序列**，
是指幂等完备化后的序列
\[
\mathcal{C}^{\mathrm{idem}} \to
\mathcal{D}^{\mathrm{idem}} \to
\mathcal{E}^{\mathrm{idem}}
\]
为 Verdier 序列。
此时称 $f$ 为 **Karoubi 嵌入**，
$p$ 为 **Karoubi 投影**。
:::

::: remark
每个 Verdier 序列都是 Karoubi 序列。
反过来未必成立：
即使两个幂等完备的稳定范畴的 Verdier 商也未必幂等完备。
:::

::: proposition
令 $\mathcal{C} \xrightarrow{f} \mathcal{D}
  \xrightarrow{p} \mathcal{E}$
为 $\mathsf{Cat}^{\mathrm{ex}}$ 中满足
$p \circ f \simeq 0$ 的序列，
则以下条件等价：

1. 该序列为 Karoubi 序列。

2. $f$ 全忠实，
   且 $\mathcal{D} / \mathcal{C} \to \mathcal{E}$
   为稠密嵌入。

特别地：

- $f$ 为 Karoubi 嵌入当且仅当 $f$ 全忠实。

- $p$ 为 Karoubi 投影当且仅当
  $p$ 具有稠密的本质像，
  且限制到该像上后为 Verdier 投影。

:::

::: corollary
令 $p \colon \mathcal{D} \to \mathcal{E}$
为 Karoubi 投影，则以下条件等价：

1. $p$ 为 Verdier 投影。

2. $p$ 本质满。

3. $\mathrm{k}_0(\mathcal{D}) \to \mathrm{k}_0(\mathcal{E})$ 为满射。

:::

### 滤余完备化判据

以下定理将小范畴的 Karoubi 序列
归结为大范畴的 Verdier 序列。

::: theorem [Thomason–Neeman]
$\mathsf{Cat}^{\mathrm{ex}}$ 中满足 $p \circ f \simeq 0$
的序列
$\mathcal{C} \xrightarrow{f} \mathcal{D}
  \xrightarrow{p} \mathcal{E}$
为 Karoubi 序列，
当且仅当 Ind 完备化后的序列
\[
\mathsf{Ind}(\mathcal{C}) \to
\mathsf{Ind}(\mathcal{D}) \to
\mathsf{Ind}(\mathcal{E})
\]
为 Verdier 序列。
:::

::: remark
此判据的关键在于以下事实：
Ind 完备化保持全忠实性，与 Verdier 商交换，
且 $\mathsf{Ind}(\mathcal{C})$ 中的紧对象
恰好构成 $\mathcal{C}$ 的幂等完备化。
因此 Karoubi 序列中的“幂等完备化后再检验”
可以等价地替换为“Ind 完备化后直接检验”。

进一步，给定 Karoubi 序列
$\mathcal{C} \xrightarrow{i} \mathcal{D}
  \xrightarrow{p} \mathcal{E}$，
Ind 完备化后的序列中各函子的左伴随
构成稳定重合：
\[
\begin{tikzcd}
  \mathsf{Ind}(\mathcal{E})
    \ar[r, shift left=5, "\mathsf{Ind}(p)^R"]
    \ar[r, phantom, "\bot"]
    & \mathsf{Ind}(\mathcal{D})
    \ar[l, shift left=5, "\mathsf{Ind}(p)"]
    \ar[r, shift left=5, "\mathsf{Ind}(i)^R"]
    \ar[r, phantom, "\bot"]
    & \mathsf{Ind}(\mathcal{C})
    \ar[l, shift left=5, "\mathsf{Ind}(i)"]
\end{tikzcd}
\]
但重合中的伴随函子一般不保持紧对象，
因此无法直接退回到小范畴以得到新的 Karoubi 序列。
:::

## 推广：非稳定版本

出于[[连续 K 理论]]的需要，
Verdier 序列的概念可以延拓到 $\mathsf{Cat}^{\mathrm{rex}}$ 上。

### 余纤维的计算

$\mathsf{Cat}^{\mathrm{rex}}$ 为带点范畴
（零对象为终范畴 $\ast$），
因此可以讨论余纤维列。
对于右正合函子 $F \colon \mathcal{C} \to \mathcal{D}$，
余纤维 $\mathcal{D} / \mathcal{C}$ 定义为如下推出：
\[
\begin{tikzcd}
  \mathcal{C} \ar[d] \ar[r,"F"]
    \ar[dr,phantom,very near end,"\ulcorner"]
    & \mathcal{D} \ar[d] \\
  \ast \ar[r]
    & \mathcal{D} / \mathcal{C}
\end{tikzcd}
\]

直接在 $\mathsf{Cat}^{\mathrm{rex}}$ 中计算余极限通常极为困难，
因此利用 Gabriel–Ulmer 对偶转移到[[可表现范畴]]的框架下。

::: remark [Gabriel–Ulmer 对偶与幂等完备性] {@rmk-GU}
Gabriel–Ulmer 对偶的严格形式为
\[
\mathsf{Ind} \colon
\mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}
\xrightarrow{\;\simeq\;}
\mathsf{Pr}^L_{\aleph_0}
\colon (-)^{\omega},
\]
其中 $\mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$
为带有限余极限的 **[[幂等完备 (∞,1)-范畴|幂等完备]]** 小范畴
及其间右正合函子所构成的范畴。
在 $\kappa = \aleph_0$ 时，幂等完备性不可省略：
$\mathsf{Ind}(\mathcal{C})$ 的紧对象范畴
$\mathsf{Ind}(\mathcal{C})^{\omega}$ 自动幂等完备，
等价于 $\mathcal{C}^{\mathrm{idem}}$ 而非 $\mathcal{C}$ 本身。

对于不可数正则基数 $\kappa > \aleph_0$，情况简化：
带有 $\kappa$-小余极限的范畴自动具有序列余极限，
从而自动幂等完备
（参见[[幂等完备 $(\infty,1)$-范畴]]）。
:::

利用对偶
$\mathsf{Pr}^L_{\aleph_0}
\simeq (\mathsf{Pr}^R_{\aleph_0})^{\mathrm{op}}$，
$\mathsf{Cat}^{\mathrm{rex}}$ 中的余极限
对应于 $\mathsf{Pr}^R_{\aleph_0}$ 中的极限，
后者可在 $\mathsf{Cat}$ 中计算
（因为遗忘函子
$\mathsf{Pr}^R_{\aleph_0} \to \mathsf{Cat}$ 保持极限）。

具体而言，将 $F$ 延拓为
$\mathsf{Ind}(F) \colon
\mathsf{Ind}(\mathcal{C}) \to \mathsf{Ind}(\mathcal{D})$，
取其右伴随 $\mathsf{Ind}(F)^R$ 的纤维
\[
K = \operatorname{fib}(\mathsf{Ind}(F)^R)
\]
（即由满足 $\mathsf{Ind}(F)^R(d) \simeq \ast$
的 $d \in \mathsf{Ind}(\mathcal{D})$ 所构成的全子范畴），
则 $K \simeq \mathsf{Ind}((\mathcal{D} / \mathcal{C})^{\mathrm{idem}})$。
取紧对象回到小范畴时，
得到的是余纤维的幂等完备化
$(\mathcal{D} / \mathcal{C})^{\mathrm{idem}}$。
未完备化的余纤维 $\mathcal{D} / \mathcal{C}$ 本身
可以刻画为 $K$ 中由局部化函子
$p \colon \mathcal{D} \to K$
的本质像在有限余极限下生成的全子范畴。

### 映射生象的刻画

进一步假设 $F$ 全忠实
且 $\mathsf{Ind}(F)^R$ 保持推出，
则有推出图表：
\[
\begin{tikzcd}
  \mathsf{Ind}(F) \mathsf{Ind}(F)^R(d)
    \ar[r] \ar[d]
    \ar[dr,phantom,very near end,"\ulcorner"]
    & d \ar[d] \\
  \mathsf{Ind}(F)(\ast)
    \ar[r]
    & \mathsf{Ind}(p)^R \mathsf{Ind}(p)(d)
\end{tikzcd}
\]
从而映射空间可以计算为：
\[
\operatorname{Hom}_{\mathcal{D} / \mathcal{C}}(pd, pd')
\simeq \operatorname{Hom}_{\mathsf{Ind}(\mathcal{D})}
\!\left(
  y(d),\;
  y(d') \sqcup_{
    \mathsf{Ind}(F) \mathsf{Ind}(F)^R(y(d'))
  }
  \mathsf{Ind}(F)(\ast)
\right).
\]

::: remark
这一刻画是非稳定情况下 Verdier 商的精确类比。
在稳定情况下，$F$ 全忠实和 $\mathsf{Ind}(F)^R$ 保持推出
这两个条件自动满足。
此外，由于 $\mathsf{Ind}(\mathcal{C}^{\mathrm{idem}})
  \simeq \mathsf{Ind}(\mathcal{C})$，
上述结论关于幂等完备化封闭。
:::

### 定义

::: definition {@def-Verdier-Rex}
$\mathsf{Cat}^{\mathrm{rex}}$ 中的序列
\[
\mathcal{C} \xrightarrow{i} \mathcal{D}
\xrightarrow{p} \mathcal{E}
\]
称为 **Verdier 序列**，是指满足以下条件：

1. 该序列为 $\mathsf{Cat}^{\mathrm{rex}}$
   中的余纤维列。

2. $i \colon \mathcal{C} \to \mathcal{D}$ 全忠实。

3. $\mathsf{Ind}(i)^R$ 保持推出。

4. $i_+ \colon \mathcal{C}_+ \to \mathcal{D}_+$
   的像关于[[收缩]]封闭。

此处 $(-)_+$ 表示自由添加零对象。
:::

::: remark
条件 (4) 中要求 $i_+$（而非 $i$）
的像关于收缩封闭是一个微妙之处：
目前尚不清楚 $i$ 的像关于收缩封闭
是否已蕴含 $i_+$ 的像关于收缩封闭。
但当 $\mathcal{C}$ [[幂等完备 (∞,1)-范畴|幂等完备]]时，
$\mathcal{C}_+$ 也幂等完备（参见 @rmk-GU），
此时 $i_+$ 全忠实即自动保证像关于收缩封闭。

当 $\mathcal{C}$、$\mathcal{D}$ 均为稳定范畴时，
上述定义恢复为稳定情形下的 Verdier 序列。
:::

### 各类条件之间的关系

以下命题总结了非稳定 Verdier 序列的各种等价和蕴含关系。
记 $\mathsf{SW}$ 为 [[Spanier–Whitehead 稳定化]]函子。

::: proposition {@prop-Verdier-sequence}
令
$S = \left(
    \mathcal{C} \xrightarrow{i} \mathcal{D}
    \xrightarrow{p} \mathcal{E}
  \right)$
为 $\mathsf{Cat}^{\mathrm{rex}}$ 中的序列，
考虑以下条件：

- (1) $S$ 为余纤维列，
  $\mathcal{C}$ 和 $\mathcal{D}$ 带终对象，
  $i$ 全忠实且保持终对象，
  其像关于收缩封闭。

- (2) $S$ 为 Verdier 序列
  （@def-Verdier-Rex）。

- (2${}'$) $S$ 为余纤维列，
  $i$ 全忠实，
  $i_+$ 的像关于收缩封闭，
  且 $\mathsf{Ind}(i)$ 为强左伴随
  （即其右伴随还具有右伴随）。

- (3) $S_+ = \left(
          \mathcal{C}_+ \xrightarrow{i_+}
          \mathcal{D}_+ \xrightarrow{p_+}
          \mathcal{E}_+
        \right)$
  为余纤维列，
  且 $i_+$ 全忠实，其像关于收缩封闭。

- (4) $\mathsf{SW}(S) = \left(
          \mathsf{SW}(\mathcal{C}) \to
          \mathsf{SW}(\mathcal{D}) \to
          \mathsf{SW}(\mathcal{E})
        \right)$
  为 $\mathsf{Cat}^{\mathrm{ex}}$ 中的 Verdier 序列。

- (5) $\mathrm{k}(S) = \left(
          \mathrm{k}(\mathcal{C}) \to
          \mathrm{k}(\mathcal{D}) \to
          \mathrm{k}(\mathcal{E})
        \right)$
  为 $\mathsf{Sp}_{\geq 0}$ 中的纤维列。

- (6) $\mathrm{K}(S) = \left(
          \mathrm{K}(\mathcal{C}) \to
          \mathrm{K}(\mathcal{D}) \to
          \mathrm{K}(\mathcal{E})
        \right)$
  为 $\mathsf{Sp}$ 中的纤维列。

则有蕴含关系：
\[
\begin{tikzcd}
  (2') \ar[r,Rightarrow]
    & (2) \ar[d,Rightarrow] \\
  (1) \ar[r,Rightarrow]
    & (3) \ar[r,Rightarrow]
    & (4) \ar[r,Rightarrow]
    & (5) \ar[r,Leftrightarrow]
    & (6)
\end{tikzcd}
\]
此外：

- 当 $\mathcal{C}$、$\mathcal{D}$ 带点时，
  (1) $\Leftrightarrow$ (3)
  且 (2) $\Leftrightarrow$ (2${}'$)。
  当 $\mathcal{C}$、$\mathcal{D}$ 稳定时，
  除 (4) $\Rightarrow$ (5) 外的全部蕴含均可逆。

- 函子 $(-)^{\mathrm{idem}}$、
  $(-)_+$ 与 $\mathsf{SW}(-)$
  保持类型 (1)–(4) 的序列；
  后两者还保持类型 (5) 与 (6) 的序列。

- 条件 (3)、(4)、(5) 所定义的序列类
  均关于 $\mathsf{Cat}^{\mathrm{rex}}$ 中的
  [[滤余极限]]封闭。

:::

::: remark
条件 (5) 与 (6) 的等价性是由于
非连合 K 理论 $\mathrm{K}$ 保持
由连合 $\mathrm{k}$ 理论正合序列所给出的纤维列。
因此，对于满足 (1)–(4) 中任一条件的序列，
不仅连合 $\mathrm{k}$ 理论给出
$\mathsf{Sp}_{\geq 0}$ 中的纤维列，
非连合 $\mathrm{K}$ 理论也给出 $\mathsf{Sp}$ 中的纤维列。

蕴含关系中 (4) $\Rightarrow$ (5) 的不可逆性
反映了一个深刻的事实：
K 理论谱的纤维列无法完全恢复范畴层面的信息。
:::

## 参考文献

```bibliography
CDHNLMNS:
  type: article
  author: ['Calmès, Baptiste', 'Dotto, Emanuele', 'Harpaz, Yonatan', 'Hebestreit, Fabian', 'Land, Markus', 'Moi, Kristian', 'Nardin, Denis', 'Nikolaus, Thomas', 'Steimle, Wolfgang']
  title: 'Hermitian K-theory for stable $\infty$-categories II: Cobordism categories and additivity'
  year: 2021
  note: Appendix A
BGT:
  type: article
  author: ['Blumberg, Andrew J.', 'Gepner, David', 'Tabuada, Gonçalo']
  title: A universal characterization of higher algebraic K-theory
  journaltitle: Geometry & Topology
  volume: 17
  pages: 733–838
  year: 2013
```

```terms
Verdier 序列:
  en: Verdier sequence
Verdier 商:
  en: Verdier quotient
Karoubi 序列:
  en: Karoubi sequence
稠密嵌入:
  en: dense embedding
```
