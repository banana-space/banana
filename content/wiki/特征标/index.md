---
title: 特征标
aliases: [特征（表示论）]
categories: [群表示论]
navboxes: [群表示论]
---

<disambiguation>
关于其他含义，请参见[[特征]]。
</disambiguation>

<problems>
- “性质”一节缺少紧群的情形。
- “第一正交关系”的陈述只假设基域代数闭，却使用了复共轭 $\overline{\chi_2(g)}$；似乎应假设基域为 $\mathbb{C}$，或把 $\overline{\chi_2(g)}$ 换成 $\chi_2(g^{-1})$。
</problems>

**特征标**是[[表示论|群表示论]]中的重要工具。

## 定义

::: definition
设 $G$ 是群，$\rho$ 是其有限维表示。那么 $\rho$
的**特征标**是 $G$ 上的函数 $\chi$，
\[
\chi(g) = \operatorname{tr} \rho(g).
\]
:::

## 性质

下面是特征标的一些一般性质。

::: proposition
$\chi$ 是**类函数**：
它在每个[[共轭类]]上的限制是常函数。
:::

::: proof
这是因为 $\rho(ghg^{-1}) = \rho(g) \rho(h) \rho(g)^{-1}$，
而共轭的线性算子的迹相等。
:::

::: proposition [与表示运算的交互]
设 $V, W$ 是 $G$ 的两个表示，具有特征标 $\chi_1,\chi_2$。
那么

1. $V \oplus W$ 的特征标为
   $\chi(g) = \chi_1(g) + \chi_2(g)$；

2. $V \otimes W$ 的特征标为
   $\chi(g) = \chi_1(g) \chi_2(g)$；

3. 若 $G$ 有限且表示的基域为 $\mathbb{C}$，
   $V$ 的对偶表示的特征标为 $\chi_1$ 的复共轭。

:::

::: proof
1 和 2 都是简单的线性代数。要证 3，首先注意到条件推出
$\rho(g)$ 的特征值都是单位根。由线性代数，$\hat\rho(g)$
的特征值即为 $\rho(g)$ 的特征值的复共轭，即证。
:::

接下来的性质都针对有限群的情况。

::: lemma {@tr-computation}
$V, W$ 是两个线性空间，$A = \mathrm{Hom}(V, W)$。
那么对 $V$ 上线性算子 $f$，$W$ 上线性算子 $g$，
$A$ 上线性算子 $\Phi \mapsto g \circ \Phi \circ f$
的迹是 $\operatorname{tr} f \cdot \operatorname{tr} g$。
:::

::: lemma {@dim-hom}
假设 $G$ 有限，基域特征不整除 $|G|$。
对 $G$ 的两个表示 $\rho_1,\rho_2$，设其特征标为 $\chi_1,\chi_2$，
则有
\[
\dim \mathrm{Hom}_G(\rho_1, \rho_2)
= \frac{1}{|G|} \sum_{g \in G} \chi_1(g) \chi_2(g^{-1}).
\]
:::

::: proof
考虑 $V = \mathrm{Hom}_k(\rho_1, \rho_2)$。
可定义 $G$ 在 $V$ 上的表示，定义为
$(g \cdot \Phi)(v) = \rho_2(g) \Phi(\rho_1(g^{-1}) v)$。
那么 $\mathrm{Hom}_G(\rho_1,\rho_2)$
即为此表示下的不变子空间。易知
\[
\Phi \mapsto \frac{1}{|G|} \sum_{g \in G} g \cdot \Phi
\]
是到不变子空间的投影算子。于是它像的维数就等于它的迹，
等于（由 @tr-computation）
\[
\begin{aligned}
     &\frac{1}{|G|} \sum_{g \in G} \operatorname{tr}(g \colon V \to V)\\
  ={}&\frac{1}{|G|} \sum_{g \in G} \chi_1(g^{-1}) \chi_2(g)\\
  ={}&\frac{1}{|G|} \sum_{g \in G} \chi_1(g) \chi_2(g^{-1})
\end{aligned}
\]
:::

::: theorem [第一正交关系]
假设 $G$ 有限，基域特征不整除 $|G|$ 且代数闭。
对不可约表示 $\rho_1, \rho_2$ 对应特征标 $\chi_1, \chi_2$ 有
\[
\langle \chi_1, \chi_2 \rangle
= \frac{1}{|G|} \sum_{g \in G} \chi_1(g) \overline{\chi_2(g)}
= \begin{cases}
  1 & \rho_1 \cong \rho_2 \\
  0 & \rho_1 \ncong \rho_2
\end{cases}
\]
:::

::: proof
这是 @dim-hom 和 Schur 引理的直接推论。
:::
