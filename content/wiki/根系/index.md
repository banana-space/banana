---
title: 根系
categories: [Lie 理论, 代数群理论, 初等几何]
navboxes: [Lie 理论, Euclid 几何]
---

**根系**是 [[Euclid 向量空间]]中满足一定对称性的向量集，
它是描述[[半单 Lie 代数]]和[[约化代数群]]等结构时引入的数学对象。

根系有良好的性质，可以引入单根、正根、[[Weyl 群]]等概念来描述它，
而它也可以由 [[Dynkin 图]]来完全分类，从而分类半单 Lie 代数等结构。

## 定义

本文主要采用的根系定义方法如下。

::: definition [根系] {@根系}
设 $V$ 是 [[Euclid 向量空间]]。
**根系**是 $V$ 中有限子集 $\Phi$，满足以下条件：

- $\Phi$ 张成 $V$。

- 对任意 $\alpha \in \Phi$，
  $\Phi$ 在沿与 $\alpha$ 垂直的超平面反射下不变。
  换言之，对任意 $\alpha, \beta \in \Phi$，
  \[
  \sigma_\alpha(\beta) = \beta - \frac{2\langle \alpha,
  \beta \rangle}{\langle \alpha, \alpha \rangle}\alpha
  \in \Phi.
  \]

- （**既约条件**）对任意 $\alpha, \beta \in \Phi$，
  如 $\alpha = t\beta$ 则 $t = \pm 1$。

- （**结晶条件**）对任意 $\alpha, \beta \in \Phi$，
  $\beta$ 在 $\alpha$ 方向投影为 $\alpha$ 的半整数倍：
  \[
  \frac{\langle \alpha, \beta \rangle}
  {\langle \alpha, \alpha \rangle} \in \frac{1}{2}\mathbb{Z}.
  \]

此时，$\Phi$ 中的元素称为**根**，
$\Phi$ 在 $V$ 中张成的 $\mathbb{Z}$-子模称为**根格**（结晶条件保证了它是[[晶格]]）。
:::

::: remark
这些条件来自于[[代数闭域]]上[[半单 Lie 代数]]或[[约化代数群]]的理论。
在一些理论中也会放宽一部分条件，不过定义出的对象也会称为根系。
例如不分裂的约化代数群的理论中会出现不既约的根系；
[[反射群]]的理论中会出现不结晶的根系。
:::

在[[约化代数群]]的理论中，通常用另一种方法描述根系，
不使用 $V$ 的内积结构，而是将每个根 $\alpha$ 对应于对偶根
$\alpha^\vee \in V^*$，并满足相应的性质。
这种方法定义的根系更为一般，
可以用来描述未必[[半单代数群|半单]]或[[单连通]]的代数群。

::: definition [根系]
**根系**是四元组 $(X, X^\vee, R, R^\vee)$，
其中：

- $X$ 是有限秩[[自由 Abel 群]]，

- $X^\vee$ 是其对偶群，
  此时记 $\langle \cdot, \cdot \rangle \colon X \times X^\vee \to \mathbb{R}$ 为自然配对。

- $R \subset X$，$R^\vee \subset X^\vee$ 为有限子集。
  且指定从 $R$ 到 $R^\vee$ 的双射 $\alpha \mapsto \alpha^\vee$，满足以下性质：

  - 对任意 $\alpha \in R$，$\langle \alpha, \alpha^\vee \rangle = 2$。

  - 对 $\alpha \in R$，定义反射 $s_\alpha \colon X \to X$ 为
    \[
    s_\alpha(\beta) = \beta - \langle \beta, \alpha^\vee \rangle \alpha, \quad \forall \beta \in X,
    \]
    则 $s_\alpha(R) = R$。
    对偶地，对每个 $\alpha^\vee \in R^\vee$，
    定义反射 $s_{\alpha^\vee} \colon X^\vee \to X^\vee$ 为
    \[
    s_{\alpha^\vee}(\xi) = \xi - \langle \alpha, \xi \rangle \alpha^\vee, \quad \forall \xi \in X^\vee,
    \]
    则 $s_{\alpha^\vee}(R^\vee) = R^\vee$。

  - 对所有 $\alpha, \beta \in R$，有 $\langle \beta, \alpha^\vee \rangle \in \mathbb{Z}$。

  - 若 $\alpha \in R$ 且 $c \alpha \in R$，其中 $c \in \mathbb{R}$，则 $c = \pm 1$。

:::

在 $R$ 张成 $X$ 的情况下，
两种方式是等价的，因为 $\alpha^\vee$ 就相当于 @根系 中的函数
$\beta \mapsto 2\frac{\langle \alpha, \beta \rangle}
  {\langle \alpha, \alpha \rangle}$，
而向量空间 $V$ 就是 $X\otimes_{\mathbb{Z}}\mathbb{R}$。

## 例子

首先列举低维空间中的根系。

- 在一维空间 \(\mathbb{R}\) 中，仅有的既约根系为 \(\mathrm{A}_1\) 型：
  \(\Phi = \{\alpha, -\alpha\}\)，其中 \(\alpha \neq 0\)。其根格由 \(\alpha\) 生成。

- 在二维空间中，既约根系共有四类，其图形如下（图中每个箭头表示一个根，长短不同的箭头对应根的长度）：

  - **\(\mathrm{A}_1 \times \mathrm{A}_1\) 型**：由两对互相垂直的等长向量组成。
    \[
    \begin{tikzpicture}[scale=0.6, >={Stealth[scale=.8]}]
      \draw[->,thick] (0,0) -- (2,0) node[right] {$\alpha$};
      \draw[->,thick] (0,0) -- (-2,0) node[left] {$-\alpha$};
      \draw[->,thick] (0,0) -- (0,2) node[above] {$\beta$};
      \draw[->,thick] (0,0) -- (0,-2) node[below] {$-\beta$};
    \end{tikzpicture}
    \]
    其 Weyl 群为 Klein 四元群。

  - **\(\mathrm{A}_2\) 型**：由六个等长向量组成，夹角均为 \(60^\circ\)，构成正六边形的顶点。
    \[
    \begin{tikzpicture}[scale=0.6, >={Stealth[scale=.8]}]
      \draw[->,thick] (0,0) -- (0:2) node[right] {$\alpha$};
      \draw[->,thick] (0,0) -- (60:2) node[above right] {$\alpha+\beta$};
      \draw[->,thick] (0,0) -- (120:2) node[above left] {$\beta$};
      \draw[->,thick] (0,0) -- (180:2) node[left] {$-\alpha$};
      \draw[->,thick] (0,0) -- (240:2) node[below left] {$-\alpha-\beta$};
      \draw[->,thick] (0,0) -- (300:2) node[below right] {$-\beta$};
    \end{tikzpicture}
    \]
    此即[[特殊线性群]]的[[Lie 代数]] \(\mathfrak{sl}(3)\) 的根系。

  - **\(\mathrm{B}_2\) 型**：由四个长根和四个短根组成，长、短根长度比为 \(\sqrt{2}:1\)，
      夹角为 \(45^\circ\) 的倍数。图中箭头较长者为长根。
    \[
    \begin{tikzpicture}[scale=0.6, >={Stealth[scale=.8]}]
      \draw[->,thick] (0,0) -- (45:2.828) node[above right] {$2\alpha+\beta$};
      \draw[->,thick] (0,0) -- (135:2.828) node[above left] {$\beta$};
      \draw[->,thick] (0,0) -- (225:2.828) node[below left] {$-2\alpha-\beta$};
      \draw[->,thick] (0,0) -- (315:2.828) node[below right] {$-\beta$};
      \draw[->,thick] (0,0) -- (0:2) node[right] {$\alpha$};
      \draw[->,thick] (0,0) -- (90:2) node[above] {$\alpha+\beta$};
      \draw[->,thick] (0,0) -- (180:2) node[left] {$-\alpha$};
      \draw[->,thick] (0,0) -- (270:2) node[below] {$-\alpha-\beta$};
    \end{tikzpicture}
    \]
    它对应 Lie 代数 [[正交 Lie 代数|\(\mathfrak{so}(5)\)]] \(\simeq\)
    [[辛 Lie 代数|\(\mathfrak{sp}(4)\)]] 的根系。

  - **\(\mathrm{G}_2\) 型**：由六个长根和六个短根组成，长、短根长度比为 \(\sqrt{3}:1\)，
      夹角为 \(30^\circ\) 的倍数。图中箭头较长者为长根。
    \[
    \begin{tikzpicture}[scale=0.6, >={Stealth[scale=.8]}]
    \draw[->,thick] (0,0) -- (0:2) node[right] {$\alpha$};
    \draw[->,thick] (0,0) -- (60:2) node[above right] {$2\alpha+\beta$};
    \draw[->,thick] (0,0) -- (120:2) node[above left] {$\alpha+\beta$};
    \draw[->,thick] (0,0) -- (180:2) node[left] {$-\alpha$};
    \draw[->,thick] (0,0) -- (240:2) node[below left] {$-2\alpha-\beta$};
    \draw[->,thick] (0,0) -- (300:2) node[below right] {$-\alpha-\beta$};
    \draw[->,thick] (0,0) -- (30:3.464) node[right] {$3\alpha+\beta$};
    \draw[->,thick] (0,0) -- (90:3.464) node[above] {$3\alpha+2\beta$};
    \draw[->,thick] (0,0) -- (150:3.464) node[above left] {$\beta$};
    \draw[->,thick] (0,0) -- (210:3.464) node[below left] {$-3\alpha-\beta$};
    \draw[->,thick] (0,0) -- (270:3.464) node[below] {$-3\alpha-2\beta$};
    \draw[->,thick] (0,0) -- (330:3.464) node[below right]{$-\beta$}; \end{tikzpicture}
    \]
    它对应例外 Lie 代数 [[\(\mathfrak{g}_2\)]]。

  在上述四例中，$\Delta = \{ \alpha, \beta \}$ 都是一组单根（@单根）。

以下例子是根系的重要来源。

::: example [半单 Lie 代数的根系]
设 \(\mathfrak{g}\) 是[[半单 Lie 代数]]，
\(\mathfrak{h}\) 是它的 [[Cartan 子代数]]，
则 \(\mathfrak{h}\) 在 \(\mathfrak{g}\)
上伴随作用的特征值构成根系。
其中 \(\mathfrak{g}\) 的 [[Killing 型]]诱导了内积结构。
:::

此外，根系还会在[[约化代数群]]、[[有限型箭图]]等理论中出现。

## 性质

给定根系 \(\Phi \subset V\)，可以定义一系列关键子结构。

::: definition [正根与负根]
取线性函数 \(f: V \to \mathbb{R}\)，使得对一切 \(\alpha \in \Phi\) 有 \(f(\alpha) \neq 0\)。定义
\[
\Phi^+ = \{\alpha \in \Phi \mid f(\alpha) > 0\}, \quad
\Phi^- = \{\alpha \in \Phi \mid f(\alpha) < 0\}.
\]
\(\Phi^+\) 中的元素称为**正根**，\(\Phi^-\) 中的元素称为**负根**。
显然有分拆 \(\Phi = \Phi^+ \sqcup \Phi^-\)。
:::

::: definition [单根] {@单根}
设 \(\Phi^+\) 为上述正根集。称子集 \(\Delta \subset \Phi^+\) 为 \(\Phi\) 的一个**单根系**，如果

- \(\Delta\) 是 \(V\) 的一组基；

- 每个正根都可唯一表示为 \(\Delta\) 中元素的非负整数线性组合。

\(\Delta\) 中的元素称为**单根**。单根的个数等于空间 \(V\) 的维数，称为根系的**秩**。
:::

单根之间的角度与长度受到极强的约束，由此可定义 Cartan 矩阵。

::: definition [Cartan 矩阵]
设 \(\Delta = \{\alpha_1, \dots, \alpha_n\}\) 是单根系。对 \(i, j\)，定义
\[
a_{ij} = \frac{2\langle \alpha_i, \alpha_j \rangle}{\langle \alpha_i, \alpha_i \rangle}.
\]
由根系公理可证 \(a_{ij} \in \mathbb{Z}_{\leq 0}\) 对 \(i \neq j\)，且 \(a_{ii} = 2\)。
矩阵 \(A = (a_{ij})\) 称为根系的**Cartan 矩阵**。
它是[[整数矩阵]]，对角元全为 \(2\)，非对角元取值于 \(\{0, -1, -2, -3\}\)。
:::

根系的反射生成一个重要的群。

::: definition [Weyl 群]
根系 \(\Phi\) 的 **[[Weyl 群]]** \(W\) 是由所有反射
\(\sigma_\alpha\)（\(\alpha \in \Phi\)）生成的群：
\[
W = \langle \sigma_\alpha \mid \alpha \in \Phi \rangle.
\]
Weyl 群是有限[[反射群]]，且保持 \(\Phi\) 不变。
单根对应的反射 \(\sigma_\alpha\)（\(\alpha \in \Delta\)）即可生成整个 \(W\)。
:::

Weyl 群在正根系的选取上具有单可迁的作用。

::: proposition
设 \(\Phi^+\) 是某一正根系，则对任意另一正根系 \(\widetilde{\Phi}^+\)，
存在唯一的 \(w \in W\) 使得 \(w(\Phi^+) = \widetilde{\Phi}^+\)。
换言之，Weyl 群在全体正根系的集合上的作用是单可迁的。
:::

根系可以按照是否可分解为互相正交的子集进行分类。

::: definition [不可约根系]
若存在非空子集 \(\Phi_1, \Phi_2 \subset \Phi\) 满足 \(\Phi = \Phi_1 \cup \Phi_2\)，
且对任意 \(\alpha \in \Phi_1, \beta \in \Phi_2\) 有 \(\langle \alpha, \beta \rangle = 0\)，
则称 \(\Phi\) **可约**；否则称之**不可约**。
:::

任何根系都可以唯一地分解为不可约根系的直和，这一分解对应于 Cartan 矩阵的块对角化，
也对应于其 Dynkin 图的连通分支分解。

## 分类

<see>[[Dynkin 图]]</see>

不可约根系的完全分类通过 [[Dynkin 图]] 实现。
Dynkin 图是 Cartan 矩阵的组合不变量，其定义如下：

::: definition
给定单根系 \(\Delta\)，其 Dynkin 图的顶点与 \(\Delta\) 一一对应。
顶点 \(i\) 与 \(j\) 之间连有 \(m_{ij} = a_{ij}a_{ji}\) 条边。
当 \(m_{ij} = 2\) 或 \(3\) 时，两根长度不同，在图上从长根对应的顶点向短根对应的顶点画一个箭头。
:::

所有连通的 Dynkin 图为四类无限族 $A_n$、$B_n$、$C_n$、$D_n$
与五个例外 $E_6$、$E_7$、$E_8$、$F_4$、$G_2$。

不可约根系由 Dynkin 图完全决定：
两个根系同构当且仅当它们的 Dynkin 图相同。
由此给出了不可约根系的完全分类。

```terms
根系:
  en: root system
  de: Wurzelsystem :n
  fr: système de racines :m
  grc: σύστημα ῥιζῶν :n
  la: systema radicum :n
```
