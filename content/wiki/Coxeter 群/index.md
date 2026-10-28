---
title: Coxeter 群
aliases: [Coxeter 系]
categories: [群论]
---

<problems>
- “仿射 Coxeter 群的分类”一节需要扩充。
- “长度与偏序”一节的交换条件中，条件 $\ell(w) \leq \ell(sw)$ 似乎应为 $\ell(sw) < \ell(w)$。
</problems>

**Coxeter 群**是一类群，
它由一些反射生成，各个反射之间满足一定的关系（@def-coxeter-group）。

Coxeter 群可以用来描述高度对称的几何体（例如[[正多胞体]]）
的对称性（@classification-finite），也可以作为 [[Weyl 群]]的抽象与推广，
来研究[[半单 Lie 代数]]（更一般的，[[Kac–Moody 代数]]）
的性质。

## 定义

::: definition {@def-coxeter-group}
Coxeter 群是由生成元 $S = \{ r_1, r_2, \dots, r_n\}$
和关系 $\{ (r_i r_j)^{m_{ij}} = 1 \}$ [[生成 (群论)|生成]] 的群。
其中
\[
m_{ij} = \left\{
\begin{array}{cc}
  1 & i = j \\
  2,3,4,\dots, \infty & i \neq j
\end{array}
\right.
\]
（$m_{ij} = \infty$ 表示没有这条关系）。

此群一般被记为 $W$，或 $(W, S)$。
有时 $(W, S)$ 也称为 **Coxeter 系**。
:::

::: remark
在上述定义中，这些 $r_i$ 可以视为相对某个超平面的反射，
此时 $r_i$ 与 $r_j$ 对应的超平面的法向量的夹角为
$\frac{\pi}{m_{ij}}$。
:::

::: definition
Coxeter 群可以用 **Coxeter 图**表示：

- 每个生成元 $r_i$ 对应图中一个点。

- 每条关系 $(r_i r_j)^{m_{ij}} = 1$ 对应图中一条边，
  并在此边上标上 $m_{ij}$
  （如果 $i = j$ 或 $m_{ij} = 2$，一般不画这条边，
  如果 $m_{ij} = 3$，省去此边的标注）。

:::

例如，[[二面体群]] $\langle a,b \mid a^2 = b^2 = (ab)^n = 1 \rangle$
的 Coxeter 图为
\[
\begin{tikzcd}[arrows=-]
  \bullet \ar[r,"n"] & \bullet
\end{tikzcd}
\]

## 性质

### Schläfli 矩阵

::: definition
Coxeter 群 $(W, S)$ 的 **Schläfli 矩阵**为
\[
(a_{ij})_{1 \leq i,j \leq n},
\quad a_{ij} = -2 \cos \frac{\pi}{m_{ij}}.
\]
:::

Schläfli 矩阵的性质反映了群的信息，例如：

::: proposition
对 Coxeter 群 $(W, S)$，

- 若其 Schläfli 矩阵的[[特征值]]均为正，
  则此 Coxeter 群是有限群。
  它可以实现为[[反射群]]，
  特别地，它是[[正交群]] $\mathrm{O}(n)$ 的离散子群。
  此时称它为**有限型**的。

- 若其 Schläfli 矩阵的[[特征值]]均为非负，
  此 Coxeter 群是有限群与 $\mathbb{Z}^{m}$ 的[[半直积]]，
  可以实现为（反射面未必过原点的）反射群，特别地，
  [[Euclid 群]] $\mathrm{E}(n - 1)$ 的离散子群。
  此时它称为**仿射型**的。

- 若其 Schläfli 矩阵的[[特征值]]有一个负值，
  此 Coxeter 群可以被实现为双曲空间 $\mathbb{H}^{n-1}$
  的[[等距同构群]]的子群（同样由反射生成），称为**双曲型**的。

:::

### 有限 Coxeter 群的分类

通过上述 Schläfli 矩阵的性质，可分类有限 Coxeter 群。

::: proposition {@classification-finite}
所有对应有限 Coxeter 群的连通 Coxeter 图如下：

- $A_n$（$n \geq 1$）
  \[
  \begin{tikzcd}[arrows=-]
    \bullet \ar[r] & \bullet \ar[r] & \cdots
    \ar[r] & \bullet
  \end{tikzcd}
  \]
  相应 Coxeter 群同构于[[置换群]] $\mathfrak{S}_{n+1}$，
  而生成元 $r_i$ 对应于[[对换]] $(i \ i+1)$，
  同时此群也是 [[n-单形|$n$-单形]]的对称群。

- $BC_n$（$n \geq 2$）
  \[
  \begin{tikzcd}[arrows=-]
    \bullet \ar[r] & \bullet \ar[r] & \cdots
    \ar[r,"4"] & \bullet
  \end{tikzcd}
  \]
  它是 [[n-正交形|$n$-正交形]]和 [[n-立方体|$n$-立方体]]的对称群。

- $D_n$（$n \geq 4$）
  \[
  \begin{tikzcd}[arrows=-]
    \bullet \ar[r] & \bullet \ar[r] \ar[d] & \cdots
    \ar[r] & \bullet \\
    & \bullet
  \end{tikzcd}
  \]

- $E_6$
  \[
  \begin{tikzcd}[arrows=-]
    \bullet \ar[r] & \bullet \ar[r] & \bullet
    \ar[r] \ar[d] & \bullet \ar[r] & \bullet \\
    & & \bullet
  \end{tikzcd}
  \]

- $E_7$
  \[
  \begin{tikzcd}[arrows=-]
    \bullet \ar[r] & \bullet \ar[r] & \bullet
    \ar[r] \ar[d] & \bullet \ar[r] & \bullet \ar[r] & \bullet \\
    & & \bullet
  \end{tikzcd}
  \]

- $E_8$
  \[
  \begin{tikzcd}[arrows=-]
    \bullet \ar[r] & \bullet \ar[r] & \bullet
    \ar[r] \ar[d] & \bullet \ar[r] & \bullet \ar[r] & \bullet \ar[r] & \bullet \\
    & & \bullet
  \end{tikzcd}
  \]

- $F_4$
  \[
  \begin{tikzcd}[arrows=-]
    \bullet \ar[r] & \bullet \ar[r,"4"] & \bullet
    \ar[r] & \bullet
  \end{tikzcd}
  \]
  它是[[正二十四胞体]]的对称群。

- $G_2$
  \[
  \begin{tikzcd}[arrows=-]
    \bullet \ar[r,"6"] & \bullet
  \end{tikzcd}
  \]
  它对应[[二面体群]] $D_6$，
  或者说[[正六边形]]的对称群。

- $H_3$
  \[
  \begin{tikzcd}[arrows=-]
    \bullet \ar[r] & \bullet
    \ar[r,"5"] & \bullet
  \end{tikzcd}
  \]
  它对应[[正十二面体]]和[[正二十面体]]的对称群。

- $H_4$
  \[
  \begin{tikzcd}[arrows=-]
    \bullet \ar[r] & \bullet \ar[r] & \bullet
    \ar[r,"5"] & \bullet
  \end{tikzcd}
  \]
  它对应[[正一百二十胞体]]和[[正六百胞体]]的对称群。

- $I_2(n)$（$n \neq 3,4,6,\ n \geq 5$）
  \[
  \begin{tikzcd}[arrows=-]
    \bullet \ar[r,"n"] & \bullet
  \end{tikzcd}
  \]
  它对应[[二面体群]] $D_n$，
  或者说[[正 n 边形|正 $n$ 边形]]的对称群。

:::

### 仿射 Coxeter 群的分类

### 长度与偏序

::: definition
Coxeter 群上的**长度**函数为
\[
\ell \colon W \to \mathbb{N}, \quad
w \mapsto \min \{ m \mid \exists i_1,\dots,i_m,\
r_{i_1} \cdots r_{i_m} = w\}.
\]
:::

::: proposition
映射 $W \to \{\pm 1\}$，$w \mapsto (-1)^{\ell(w)}$
是群同态。
:::

::: proposition [交换条件]
如 $s \in S$，$w \in W$ 满足 $\ell(w) \leq \ell(sw)$，
则如将 $w$ 写为 $S$ 中元素的乘积
\[
w = s_1 s_2 \cdots s_n
\]
则存在 $1 \leq j \leq n$，满足
\[
s s_1 \cdots s_{j-1} = s_1 s_2 \cdots s_j
\]
反过来，对任意群 $W$ 和它的一组生成元 $S$，
如果 $S$ 中元素阶均为 2 且上述条件满足，
则 $(W, S)$ 是 Coxeter 群。
:::

::: definition
Coxeter 群上有一偏序，称为**Bruhat 偏序**，
为由所有 $w < tw$
（其中 $t$ 和某个 $s$ 中元素共轭，
$w \in W$ 且 $\ell(w) < \ell(tw)$）生成的关系。
:::

## 例子

- [[二面体群]] $\langle a,b \mid a^2 = b^2 = (ab)^n = 1 \rangle$
  是 Coxeter 群。

- 作为上一例的推广，[[正多胞体]]的[[对称群]]是 Coxeter 群。

- [[半单 Lie 代数]]（一般地，[[Kac–Moody 代数]]）的
  [[Weyl 群]]是 Coxeter 群。

```terms
Coxeter 群:
  en: Coxeter group
  de: Coxeter-Gruppe :f
  fr: groupe de Coxeter :m
```
