---
title: 量子群
categories: [量子代数]
navboxes: [量子代数]
---

在[[表示论]]中，**量子群**是 [[Lie 群]]、[[Lie 代数]]、[[代数群]]等概念的推广，
指带有相应代数结构的[[非交换空间]]。
一类常见的量子群是普通的 Lie 群、Lie 代数的形变，
它们依赖于参数 $q$，并在 $q = 1$ 时回到普通的群或 Lie 代数。

在[[代数群]]的情形，
[[仿射代数群]] $G$ 由其[[函数环]] $\mathcal{O} (G)$ 决定，
$G$ 的群结构对应于 $\mathcal{O} (G)$ 上的交换 [[Hopf 代数]]结构，
这里的交换性表明 $G$ 是普通的空间，即其上的函数相乘是交换的。
若允许函数环不交换，就得到量子群。
我们通常考虑的量子群是普通群 $G$ 的[[形变]]，
即一族非交换空间 $G_q$，其中 $q = 1$ 时给出 $G$ 自身；
$G_q$ 上的函数环 $\mathcal{O}_q (G)$ 是非交换的 Hopf 代数，
当 $q = 1$ 时给出交换 Hopf 代数 $\mathcal{O} (G)$。

在 [[Lie 代数]]的情形，
Lie 群或代数群 $G$ 的表示常常由其 [[Lie 代数]] $\mathfrak{g}$ 的表示决定，
而后者即[[泛包络代数]] $U (\mathfrak{g})$ 的表示。
上述代数群的形变对应于将 $U (\mathfrak{g})$
形变为[[量子包络代数]] $U_q (\mathfrak{g})$，
这类代数也称为量子群。
它与量子坐标环 $\mathcal{O}_q (G)$ 互为对偶，
从而非交换性体现于 Hopf 代数的余乘而非乘法：
$U (\mathfrak{g})$ 的余乘是余交换的，
但 $U_q (\mathfrak{g})$ 的余乘不是。
量子群 $U_q (\mathfrak{g})$ 的表示范畴，常记为 $\mathsf{Rep}_q (G)$，
也是 $G$ 的表示范畴 $\mathsf{Rep} (G)$ 的形变。
后者是[[对称幺半范畴]]，但前者只是较弱的[[辫幺半范畴]]。
这是余乘的非余交换性通过 [[Tannaka–Krein 对偶]]在表示范畴上的体现，
而范畴的辫幺半结构则对应于 Hopf 代数上的 [[$R$ 矩阵]]。
这种辫幺半结构使量子群与[[杨–Baxter 方程]]、[[纽结不变量]]、[[可积系统]]等联系起来。

“量子群”一词在文献中的含义并不统一。
它有时专指[[量子包络代数]] $U_q (\mathfrak{g})$，
有时专指[[量子坐标环]] $\mathcal{O}_q (G)$，
有时又泛指所有[[拟三角 Hopf 代数]]，乃至所有 Hopf 代数，
在[[算子代数]]中又指 Woronowicz 的[[紧量子群]]等对象。
我们在这里采用宽泛的定义：量子群是带有群结构的[[非交换空间]]，
其中[[空间]]的含义随语境而定，
其严格定义也取决于选取的空间类型。

## 定义

### 量子代数群

本节定义[[仿射代数群]]对应的量子群，即**量子代数群**。

按照[[代数–几何对偶]]的观点，[[仿射概形]]由它的函数环决定。
因此，我们可以将任何[[环]] $A$ 视为[[非交换仿射概形|**非交换仿射概形**]]，
并记为 $\operatorname{Spec} A$，
当 $A$ 交换时此即普通的仿射概形。

在这一观点下，[[域]] $k$ 上的 [[Hopf 代数]] $A$ 可以视为带有群结构的非交换仿射概形
$G = \operatorname{Spec} A$：余乘
$\Delta \colon A \to A \otimes A$、
余单位 $\varepsilon \colon A \to k$、
对极映射 $S \colon A \to A$
分别对应于 $G$ 的乘法 $G \times G \to G$、单位元 $\operatorname{Spec} k \to G$
与取逆。
有的文献直接将这样的 $G$ 称为**量子群**。
当 $A$ 交换时，$G$ 就是[[仿射群概形]]。

我们也可以定义 $G$ 的**表示**为右 $A$-[[余模]]，
即 $k$-[[向量空间]] $V$ 及线性映射
$\rho \colon V \to V \otimes A$，
满足
\[
(\rho \otimes \mathrm{id}) \circ \rho
= (\mathrm{id} \otimes \Delta) \circ \rho ,
\quad
(\mathrm{id} \otimes \varepsilon) \circ \rho = \mathrm{id} .
\]
$G$ 的表示构成的范畴记为 $\mathsf{Rep} (G)$。
当 $A$ 交换时，这与仿射群概形的表示的概念一致：
$G$ 在 $V$ 上的表示 $G \to \mathrm{GL} (V)$ 正对应于余模结构
$V \to V \otimes A$。
表示 $V$、$W$ 的张量积 $V \otimes W$ 通过
\[
\rho (v \otimes w) =
m (\rho (v) \otimes \rho (w))
\]
成为 $G$ 的表示，这里 $m \colon A \otimes A \to A$ 是乘法，
它作用于 $\rho (v) \otimes \rho (w) \in V \otimes A \otimes W \otimes A$
的两个 $A$ 分量，结果视为 $V \otimes W \otimes A$ 中的元素。
这使 $\mathsf{Rep} (G)$ 成为[[幺半范畴]]。

::: remark {@rem:quantum-monoid}
若 $A$ 只是[[双代数]]，则 $G = \operatorname{Spec} A$ 只有结合的乘法和单位元，
从而只是**量子幺半群**，
而对极映射的存在对应于该幺半群中的元素都可逆。
:::

我们定义量子代数群为代数群的非交换形变：

::: definition [量子代数群] {@def:qag}
设 $k$ 是域，$R$ 是 $k$ 上的交换代数，且是[[整环]]，
$\chi \colon R \to k$ 是 $\operatorname{Spec} R$ 的 $k$-点。
通常取以下两种选择之一：

- $R = k [q, q^{-1}]$，且 $\chi (q) = 1$。

- $R = k [[\hbar]]$，且 $\chi (\hbar) = 0$。

对 $k$ 上的仿射[[群概形]] $G$，
它在 $R$ 上的**量子形变**，或称**量子代数群**，
是指 $R$ 上的 Hopf 代数 $A$，
它作为 $R$-模是[[平坦模|平坦]]的，并带有 Hopf 代数同构
\[
A \otimes_R k \simeq \mathcal{O} (G) ,
\]
其中 $k$ 通过 $\chi$ 视为 $R$-代数。
换言之，$\operatorname{Spec} A$ 是 $\operatorname{Spec} R$
上的一族带有群结构的非交换空间，它在 $\chi$ 处的纤维是 $G$。

此时，在上述两种情形下，我们也将 $A$ 分别记为
$\mathcal{O}_q (G)$ 或 $\mathcal{O}_\hbar (G)$，
并将相应的非交换空间 $\operatorname{Spec} A$ 分别记为
$G_q$ 或 $G_\hbar$。
:::


### 量子包络代数

代数群 $G$ 的表示常常通过其 Lie 代数 $\mathfrak{g}$
的泛包络代数 $U (\mathfrak{g})$ 来研究。
几何上，$\mathfrak{g}$ 的元素可以视为 $G$ 上的左不变[[向量场]]，
从而 $U (\mathfrak{g})$ 的元素可以视为 $G$ 上的左不变[[微分算子]] $D$，
这给出 $U (\mathfrak{g})$ 与 $\mathcal{O} (G)$ 之间的配对
\[
\langle D, f \rangle = (D f) (e) .
\]
在[[特征（代数）|特征]]零的域上，
它诱导了 $U (\mathfrak{g})$ 的[[对偶空间]]到
$G$ 在单位元处的[[形式完备化|形式局部环]]
$\widehat{\mathcal{O}}_{G, e}$ 的同构，
即 $G$ 的[[形式群]]的函数代数。
量子群的情形与此类似。

::: definition [Hopf 配对] {@def:pairing}
设 $U$、$A$ 是域 $k$ 上的 Hopf 代数。
**[[Hopf 配对]]** 是双线性映射 $\langle -, - \rangle \colon U \times A \to k$，
使得对任意 $u, v \in U$、$f, g \in A$，有
\[
\begin{aligned}
  \langle uv, f \rangle & = \langle u \otimes v, \Delta (f) \rangle , &
  \langle u, fg \rangle & = \langle \Delta (u), f \otimes g \rangle , \\
  \langle 1, f \rangle & = \varepsilon (f) , &
  \langle u, 1 \rangle & = \varepsilon (u) ,
\end{aligned}
\]
其中 $\langle u \otimes v, f \otimes g \rangle
= \langle u, f \rangle \, \langle v, g \rangle$。
:::

此时，$G = \operatorname{Spec} A$ 的每个表示 $(V, \rho)$ 都以
\[
u \cdot v = \langle u, \rho (v) \rangle
\]
成为 $U$-模，这里右边的 $\langle u, - \rangle$ 只作用于第二分量。
这给出幺半函子 $\mathsf{Rep} (G) \to U \text{-} \mathsf{Mod}$，
从而可以通过代数 $U$（也称为量子群）的表示论来研究量子群 $G$ 的表示论。

以下，我们定义两种量子包络代数，
它们都是泛包络代数 $U (\mathfrak{g})$ 的形变。
第一种只规定了形式的形变，
而第二种可以将形变参数取为一般的数。

::: definition [量子包络代数] {@def:que}
设 $k$ 是特征零域，$\mathfrak{g}$ 是 $k$ 上的 [[Lie 代数]]。
则 $\mathfrak{g}$ 的[[量子包络代数|**量子包络代数**]]是 $k [[\hbar]]$ 上的 $\hbar$ 进完备的
Hopf 代数 $U$，满足：

- 作为 $k [[\hbar]]$-模，有 $U \simeq U (\mathfrak{g}) [[\hbar]]$；

- 有 Hopf 代数同构 $U / \hbar U \simeq U (\mathfrak{g})$。

这里，$U$ 的余乘取值于[[完备张量积]]
$U \mathbin{\widehat{\otimes}} U$。
:::

::: remark [量子形式群]
量子包络代数 $U$ 的对偶 $U^\vee = \operatorname{Hom}_{k [[\hbar]]} (U, k [[\hbar]])$
是交换代数 $U (\mathfrak{g})^\vee$ 的形变：
$U^\vee / \hbar U^\vee \simeq U (\mathfrak{g})^\vee$。
当 $\mathfrak{g}$ 是代数群 $G$ 的 Lie 代数时，
后者就是 $\widehat{\mathcal{O}}_{G, e}$。
因此，$U^\vee$ 可以视为 $G$ 的形式群的量子形变，即**量子形式群**。
:::

文献中更常用的是 Drinfeld 与 Jimbo 定义的量子包络代数 $U_q (\mathfrak{g})$，
它以数 $q$ 为参数。

::: definition [Drinfeld–Jimbo 量子包络代数] {@def:dj}
设 $\mathfrak{g}$ 是复[[半单 Lie 代数]]，$(a_{ij})_{i, j \in I}$ 是其 [[Cartan 矩阵]]，
$d_i$（$i \in I$）是使 $(d_i a_{ij})$ 对称的互素正整数。
设 $k$ 是域，$q \in k^\times$ 不是单位根，记 $q_i = q^{d_i}$，以及
\[
[n]_i = \frac{q_i^n - q_i^{-n}}{q_i - q_i^{-1}} , \quad
[n]_i! = [1]_i \, [2]_i \cdots [n]_i , \quad
\begin{bmatrix} n \\ r \end{bmatrix}_i
= \frac{[n]_i!}{[r]_i! \, [n - r]_i!} .
\]
这些记号的解释见 [[$q$-类比]]。

则 **[[量子包络代数]]**
$U_q (\mathfrak{g})$ 是由 $E_i$、$F_i$、$K_i^{\pm 1}$（$i \in I$）生成的 $k$-代数，
满足关系
\[
\begin{gathered}
  K_i K_i^{-1} = K_i^{-1} K_i = 1 , \quad K_i K_j = K_j K_i , \\
  K_i E_j K_i^{-1} = q_i^{a_{ij}} E_j , \quad
  K_i F_j K_i^{-1} = q_i^{-a_{ij}} F_j , \quad
  E_i F_j - F_j E_i = \delta_{ij} \, \frac{K_i - K_i^{-1}}{q_i - q_i^{-1}} ,
\end{gathered}
\]
以及对 $i \neq j$ 的量子 [[Serre 关系]]
\[
\sum_{r = 0}^{1 - a_{ij}} (-1)^r
\begin{bmatrix} 1 - a_{ij} \\ r \end{bmatrix}_i
E_i^{1 - a_{ij} - r} E_j E_i^r = 0 , \quad
\sum_{r = 0}^{1 - a_{ij}} (-1)^r
\begin{bmatrix} 1 - a_{ij} \\ r \end{bmatrix}_i
F_i^{1 - a_{ij} - r} F_j F_i^r = 0 .
\]
它以
\[
\begin{aligned}
  \Delta (E_i) & = E_i \otimes K_i + 1 \otimes E_i , &
  \Delta (F_i) & = F_i \otimes 1 + K_i^{-1} \otimes F_i , &
  \Delta (K_i) & = K_i \otimes K_i , \\
  S (E_i) & = -E_i K_i^{-1} , &
  S (F_i) & = -K_i F_i , &
  S (K_i) & = K_i^{-1} ,
\end{aligned}
\]
以及 $\varepsilon (E_i) = \varepsilon (F_i) = 0$、$\varepsilon (K_i) = 1$
成为 Hopf 代数。
:::

同样的定义也适用于可对称化的 [[Kac–Moody 代数]]。
称有限维 $U_q (\mathfrak{g})$-模为 **1 型**的，
如果各 $K_i$ 在其上可对角化，且特征值都是 $q_i$ 的整数次幂。

$U_q (\mathfrak{g})$ 与 @def:que 意义下的量子包络代数的关系大致是
$q = \mathrm{e}^\hbar$、$K_i = \mathrm{e}^{d_i \hbar H_i}$：
在特征为零的域 $k$ 上，将上述关系中的 $q$ 换为 $\mathrm{e}^\hbar$、
$K_i$ 换为 $\mathrm{e}^{d_i \hbar H_i}$，
并将 $K_i E_j K_i^{-1} = q_i^{a_{ij}} E_j$ 等换为
$[H_i, E_j] = a_{ij} E_j$ 等，
就得到 $k [[\hbar]]$ 上由 $E_i$、$F_i$、$H_i$ 拓扑生成的 Hopf 代数
$U_\hbar (\mathfrak{g})$，它是 $\mathfrak{g}$ 的量子包络代数；见 @ex:uqsl2。

## 例子

::: example [平凡形变]
设 $G$ 是域 $k$ 上的仿射群概形。
则 @def:qag 中，平凡族 $G \times \operatorname{Spec} R$
是平凡的量子群，其每个纤维都是 $G$ 本身。
:::

::: example [量子 $\mathrm{SL}_2$] {@ex:sl2}
设 $k$ 是特征零域，$q \in k^\times$。
我们即将给出量子群 $\mathrm{SL}_{2, q}$ 的显式描述，
它是 @def:qag 意义下 $\mathrm{SL}_2$ 的量子形变：

代数 $\mathcal{O}_q (\mathrm{SL}_2)$ 由 $a$、$b$、$c$、$d$ 生成，满足关系
\[
\begin{gathered}
  ba = q ab , \quad ca = q ac , \quad db = q bd , \quad dc = q cd , \quad
  bc = cb , \\
  ad - da = (q^{-1} - q) \, bc , \quad
  ad - q^{-1} bc = 1 ,
\end{gathered}
\]
这里 $a$、$b$、$c$、$d$ 对应于 $2 \times 2$ 矩阵的四个元素。
它是 Hopf 代数：记 $t_{11} = a$、$t_{12} = b$、$t_{21} = c$、$t_{22} = d$，则
\[
\Delta (t_{ij}) = \sum_{l = 1}^2 t_{il} \otimes t_{lj} , \quad
\varepsilon (t_{ij}) = \delta_{ij} ,
\]
而对极映射为
\[
S (a) = d , \quad S (b) = -q b , \quad S (c) = -q^{-1} c , \quad S (d) = a .
\]
当 $q = 1$ 时，这就是 $\mathrm{SL}_2$ 的函数环。
将 $q$ 视为变量，上述关系定义了 $k [q, q^{-1}]$ 上的 Hopf 代数，
它作为 $k [q, q^{-1}]$-模是自由的，
因此是 $\mathrm{SL}_2$ 在 $(k [q, q^{-1}], q \mapsto 1)$ 上的量子形变。
元素 $ad - q^{-1} bc$ 称为[[量子行列式]]。

这个量子群作用于[[量子平面]] $k_q [x, y] = k \langle x, y \rangle / (yx - q xy)$：
映射
\[
x \longmapsto a \otimes x + b \otimes y , \quad
y \longmapsto c \otimes x + d \otimes y
\]
定义了代数同态 $k_q [x, y] \to \mathcal{O}_q (\mathrm{SL}_2) \otimes k_q [x, y]$。
:::

::: example [量子矩阵幺半群] {@ex:frt}
设 $k$ 是特征零域，
$q \in k^\times$，$n \geq 1$。
我们将给出矩阵代数 $\mathrm{M}_n (k)$
作为幺半群的量子形变（见 @rem:quantum-monoid）。

记 $V = k^n$，$e_{ij}$ 是矩阵单位。令
\[
R = q \sum_i e_{ii} \otimes e_{ii}
+ \sum_{i \neq j} e_{ii} \otimes e_{jj}
+ (q - q^{-1}) \sum_{i < j} e_{ij} \otimes e_{ji}
\in \operatorname{End} (V \otimes V) .
\]
它满足[[杨–Baxter 方程]]。
令 $\mathcal{O}_q (\mathrm{M}_n)$ 是由 $t_{ij}$（$1 \leq i, j \leq n$）生成、满足关系
\[
R \, T_1 T_2 = T_2 T_1 R
\]
的代数，其中 $T = \sum_{i, j} e_{ij} \otimes t_{ij}$，
$T_1$、$T_2$ 表示 $T$ 作用在 $V \otimes V$ 的第一、第二个因子上。
它与 @ex:sl2 一样，以 $\Delta (t_{ij}) = \sum_l t_{il} \otimes t_{lj}$
成为双代数，因此 $\operatorname{Spec} \mathcal{O}_q (\mathrm{M}_n)$ 是量子幺半群。
它有中心元素 $\det_q$，称为[[量子行列式]]，
商代数
$\mathcal{O}_q (\mathrm{SL}_n) = \mathcal{O}_q (\mathrm{M}_n) / (\det_q - 1)$
是 Hopf 代数。
当 $n = 2$ 时，这正是 @ex:sl2 中的关系。
:::

::: example [量子 $\mathfrak{sl}_2$] {@ex:uqsl2}
设 $k$ 是特征零域，$q \in k^\times$ 不是单位根。
当 $\mathfrak{g} = \mathfrak{sl}_2$ 时，@def:dj 中的 $U_q (\mathfrak{sl}_2)$
由 $E$、$F$、$K^{\pm 1}$ 生成，满足关系
\[
K K^{-1} = K^{-1} K = 1 , \quad
K E K^{-1} = q^2 E , \quad
K F K^{-1} = q^{-2} F , \quad
E F - F E = \frac{K - K^{-1}}{q - q^{-1}} ,
\]
其中
$\Delta (E) = E \otimes K + 1 \otimes E$、
$\Delta (F) = F \otimes 1 + K^{-1} \otimes F$、
$\Delta (K) = K \otimes K$。

它有二维表示 $\rho \colon U_q (\mathfrak{sl}_2) \to \operatorname{End} (k^2)$，
\[
E \mapsto
\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} , \quad
F \mapsto
\begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} , \quad
K \mapsto
\begin{pmatrix} q & 0 \\ 0 & q^{-1} \end{pmatrix} .
\]
令 $\langle u, t_{ij} \rangle = \rho (u)_{ij}$，
这延拓为 $U_q (\mathfrak{sl}_2)$ 与 $\mathcal{O}_q (\mathrm{SL}_2)$ 之间的 Hopf 配对。
对每个 $n \geq 0$，$U_q (\mathfrak{sl}_2)$ 有一个 $n + 1$ 维单模，$K$ 在其上的特征值为
$q^n, q^{n - 2}, \ldots, q^{-n}$，这与 $\mathfrak{sl}_2$ 的有限维单模类似。

在 $k [[\hbar]]$ 上，由 $E$、$F$、$H$ 拓扑生成，满足
\[
[H, E] = 2 E , \quad [H, F] = -2 F , \quad
[E, F] = \frac{\sinh (\hbar H)}{\sinh \hbar}
\]
的代数 $U_\hbar (\mathfrak{sl}_2)$，以
$\Delta (H) = H \otimes 1 + 1 \otimes H$、
$\Delta (E) = E \otimes \mathrm{e}^{\hbar H} + 1 \otimes E$、
$\Delta (F) = F \otimes 1 + \mathrm{e}^{-\hbar H} \otimes F$
成为 $\mathfrak{sl}_2$ 的量子包络代数。
:::

::: example [量子坐标环] {@ex:oqg}
设 $\mathfrak{g}$ 是复[[半单 Lie 代数]]，
$G$ 是以 $\mathfrak{g}$ 为 Lie 代数的单连通复代数群，
$q \in \mathbb{C}^\times$ 不是单位根。
则 $G$ 的 **[[量子坐标环]]** $\mathcal{O}_q (G)$ 
定义为 $U_q (\mathfrak{g})^\vee$ 中
由有限维 1 型模 $M$ 的矩阵系数 $u \mapsto f (u m)$（$m \in M$、$f \in M^\vee$）
张成的子空间。
它是 Hopf 代数，自然的配对是 Hopf 配对，
且 $\mathcal{O}_q (G)$ 的有限维余模恰好就是有限维 1 型 $U_q (\mathfrak{g})$-模。
将 $q$ 视为变量，可以证明它（的适当整形式）是 $G$ 的量子形变；
当 $G = \mathrm{SL}_n$ 时，它与 @ex:frt 中的 $\mathcal{O}_q (\mathrm{SL}_n)$ 同构。
:::

::: example [杨代数] {@ex:yangian}
设 $\mathfrak{g}$ 是复[[单 Lie 代数]]，
$\mathfrak{g} [z] = \mathfrak{g} \otimes \mathbb{C} [z]$ 是其[[流代数]]。
则[[杨代数|**杨代数**]]
$Y_\hbar (\mathfrak{g})$ 也是一类量子包络代数，
是 $U (\mathfrak{g} [z])$ 的形变。
:::

::: example [量子仿射代数] {@ex:loop}
设 $\mathfrak{g}$ 是复[[单 Lie 代数]]，
$L \mathfrak{g} = \mathfrak{g} \otimes \mathbb{C} [z, z^{-1}]$ 是其[[环路代数]]，
$\widehat{\mathfrak{g}}$ 是相应的[[仿射 Lie 代数]]，
即 $L \mathfrak{g}$ 的一维中心扩张再添加一个导子。
将 @def:dj 用于 $\widehat{\mathfrak{g}}$，就得到
[[量子仿射代数|**量子仿射代数**]] $U_q (\widehat{\mathfrak{g}})$。
去掉导子，并将中心元素取为 $1$，就得到
[[量子环路代数|**量子环路代数**]] $U_q (L \mathfrak{g})$，它是 $U (L \mathfrak{g})$ 的形变。
:::

## 性质

### 半经典极限

量子群的**半经典极限**是指其非交换性的一阶信息，
即形变参数 $\hbar$ 的一次方的系数。
对量子群而言，这由经典的群上的 Poisson 结构描述。

::: proposition [半经典极限] {@prop:poisson}
设 $k$ 是域，$G$ 是 $k$ 上的仿射群概形，
$A$ 是 $G$ 的量子形变（@def:qag），
并设 $\ker \chi$ 由一个非零元素 $\hbar$ 生成，
例如 $R = k [[\hbar]]$，或 $R = k [q, q^{-1}]$、$\hbar = q - 1$。

对 $f, g \in \mathcal{O} (G)$，任取它们在 $A$ 中的原像 $\tilde{f}$、$\tilde{g}$，令
\[
\{ f, g \} =
\frac{\tilde{f} \tilde{g} - \tilde{g} \tilde{f}}{\hbar} \bmod \hbar .
\]
则这是 $\mathcal{O} (G)$ 上良定义的 [[Poisson 代数|Poisson 括号]]，并且
$\Delta \colon \mathcal{O} (G) \to \mathcal{O} (G) \otimes \mathcal{O} (G)$
是 Poisson 代数同态，其中 $\mathcal{O} (G) \otimes \mathcal{O} (G)$
带有乘积 Poisson 结构。
换言之，$G$ 成为代数的 [[Poisson–Lie 群]]。
:::

::: proof
由于 $A / \hbar A \simeq \mathcal{O} (G)$ 交换，
$\tilde{f} \tilde{g} - \tilde{g} \tilde{f} \in \hbar A$。
由于 $A$ 在整环 $R$ 上平坦，$\hbar$ 不是 $A$ 的零因子，
因此 $(\tilde{f} \tilde{g} - \tilde{g} \tilde{f}) / \hbar$ 是 $A$ 中唯一确定的元素。
若将 $\tilde{f}$ 换为 $\tilde{f} + \hbar x$，则交换子改变
$\hbar (x \tilde{g} - \tilde{g} x) \in \hbar^2 A$，
因此 $\{ f, g \}$ 不依赖于原像的选取。

反对称性是显然的。
Leibniz 法则与 Jacobi 恒等式分别来自交换子的恒等式
\[
[xy, z] = x [y, z] + [x, z] y , \quad
[x, [y, z]] + [y, [z, x]] + [z, [x, y]] = 0 ,
\]
其中后者的各项都属于 $\hbar^2 A$，约去 $\hbar^2$ 即可。

最后，$\Delta \colon A \to A \otimes_R A$ 是代数同态，因此保持交换子。
$A \otimes_R A$ 也在 $R$ 上平坦，且
$(A \otimes_R A) / \hbar \simeq \mathcal{O} (G) \otimes \mathcal{O} (G)$；
由
\[
[x \otimes y, x' \otimes y']
= [x, x'] \otimes y y' + x' x \otimes [y, y']
\]
可知，在其上以同样方式定义的括号就是乘积 Poisson 结构。
这就证明了 $\Delta$ 是 Poisson 代数同态。
:::

称这一 Poisson 结构为量子形变的**半经典极限**。

::: example
对 @ex:sl2 中的 $\mathcal{O}_q (\mathrm{SL}_2)$，取 $\hbar = q - 1$，
得到 $\mathrm{SL}_2$ 上的 Poisson 结构
\[
\begin{gathered}
  \{ a, b \} = -ab , \quad \{ a, c \} = -ac , \quad
  \{ b, d \} = -bd , \quad \{ c, d \} = -cd , \\
  \{ b, c \} = 0 , \quad \{ a, d \} = -2 bc .
\end{gathered}
\]
:::

::: example {@ex:dual}
设 $\mathfrak{g}$ 是域 $k$ 上的有限维 Lie 代数。
令 $U_\hbar (\mathfrak{g})$ 是 $k [\hbar]$ 上由 $\mathfrak{g}$ 生成、满足
$xy - yx = \hbar [x, y]$（$x, y \in \mathfrak{g}$）的代数，
并令 $x \in \mathfrak{g}$ 满足 $\Delta (x) = x \otimes 1 + 1 \otimes x$。
由 [[Poincaré–Birkhoff–Witt 定理]]，它是自由 $k [\hbar]$-模，
且 $U_0 (\mathfrak{g})$ 是[[对称代数]]
$\operatorname{Sym} \mathfrak{g} = \mathcal{O} (\mathfrak{g}^\vee)$，
因此它是加法群 $\mathfrak{g}^\vee$ 在 $(k [\hbar], \hbar \mapsto 0)$ 上的量子形变。
对 $a \neq 0$，它在 $\hbar = a$ 处的纤维同构于 $U (\mathfrak{g})$。
其半经典极限 $\{ x, y \} = [x, y]$ 是 $\mathfrak{g}^\vee$ 上的线性 Poisson 结构。
因此，$U (\mathfrak{g})$ 本身也可以视为量子代数群的纤维，
它是 $\mathfrak{g}^\vee$ 的量子化。
:::

对于量子包络代数，有对偶的结论：

::: proposition {@prop:bialgebra}
设 $U$ 是 Lie 代数 $\mathfrak{g}$ 的量子包络代数（@def:que）。
对 $x \in \mathfrak{g}$，任取它在 $U$ 中的原像 $\tilde{x}$，令
\[
\delta (x) =
\frac{\Delta (\tilde{x}) - \Delta^\mathrm{op} (\tilde{x})}{\hbar} \bmod \hbar ,
\]
其中 $\Delta^\mathrm{op}$ 是 $\Delta$ 与交换两个张量因子的映射的复合。
则 $\delta (x) \in \mathfrak{g} \wedge \mathfrak{g}$，
且 $\delta \colon \mathfrak{g} \to \mathfrak{g} \wedge \mathfrak{g}$
使 $\mathfrak{g}$ 成为 [[Lie 双代数]]。
:::

::: proof [证明概要]
与 @prop:poisson 的证明类似：
由于 $U (\mathfrak{g})$ 余交换，$\delta$ 是良定义的；
余 Jacobi 恒等式来自 $\Delta$ 的余结合性，
$\delta$ 与 Lie 括号的相容性来自 $\Delta$ 是代数同态。
至于 $\delta (x) \in \mathfrak{g} \wedge \mathfrak{g}$，
由余结合性，$\Delta (\tilde{x})$ 的 $\hbar$ 一阶项是 $U (\mathfrak{g})$
的余棒复形中的闭链，而该复形的上同调在特征为零时是 $\wedge^\bullet \mathfrak{g}$，
由此可知其反对称化属于 $\mathfrak{g} \wedge \mathfrak{g}$。
详见 [@ChariPressley1994]。
:::

Drinfeld 证明了，单连通 Lie 群上的 Poisson–Lie 结构与其 Lie 代数上的
Lie 双代数结构一一对应。
因此，@prop:poisson 与 @prop:bialgebra 说明，
量子群与量子包络代数的半经典极限都可以用 Lie 双代数描述。
反过来，量子化问题有如下回答：

::: theorem [Etingof–Kazhdan] {@thm:ek}
设 $k$ 是特征零域。
$k$ 上的任何有限维 Lie 双代数 $(\mathfrak{g}, \delta)$ 都有量子化，
即存在 $\mathfrak{g}$ 的量子包络代数 $U$，
使得 @prop:bialgebra 给出的 Lie 双代数结构就是 $\delta$。
:::

参见 [@EtingofKazhdan1996]。

Drinfeld 的[[量子对偶原理]]进一步说明，
$\mathfrak{g}$ 的量子包络代数也可以视为对偶 Poisson–Lie 群 $G^*$ 的量子化，
其中 $G^*$ 的 Lie 代数是 $\mathfrak{g}^\vee$，其 Lie 括号是 $\delta$ 的对偶。
在 @ex:dual 中，$\delta = 0$，$G^*$ 就是加法群 $\mathfrak{g}^\vee$。
因此，在宽泛的意义下，$U_q (\mathfrak{g})$ 的适当形式也是几何意义下的量子群，
但它是 $G^*$ 而不是 $G$ 的形变。

### 表示

设 $A$ 是域 $k$ 上的 Hopf 代数，$G = \operatorname{Spec} A$。
如前所述，$\mathsf{Rep} (G)$ 是幺半范畴；
有限维表示还有对偶，其定义用到对极映射。
由 [[Tannaka–Krein 对偶]]，$G$ 可以由有限维表示构成的范畴及遗忘函子
重构。

经典的群的表示范畴是[[对称幺半范畴]]，其对称结构就是交换张量因子的映射。
对于 Hopf 代数，这一点恰好刻画了交换的情形：

::: proposition {@prop:commutative}
设 $A$ 是域 $k$ 上的 Hopf 代数，$G = \operatorname{Spec} A$。
则 $\mathcal{O} (G) = A$ 交换，当且仅当对 $G$ 的任意表示 $V$、$W$，
映射 $V \otimes W \to W \otimes V$，$v \otimes w \mapsto w \otimes v$
都是表示的同态。
:::

::: proof
记 $\tau \colon V \otimes W \to W \otimes V$ 为交换映射，
并定义线性映射
$\mu, \mu' \colon V \otimes A \otimes W \otimes A \to W \otimes V \otimes A$ 为
\[
\mu (x \otimes a \otimes y \otimes b) = y \otimes x \otimes ab , \quad
\mu' (x \otimes a \otimes y \otimes b) = y \otimes x \otimes ba .
\]
由张量积表示的定义，对 $v \in V$、$w \in W$，有
\[
(\tau \otimes \mathrm{id}_A) \bigl( \rho (v \otimes w) \bigr)
= \mu \bigl( \rho (v) \otimes \rho (w) \bigr) , \quad
\rho \bigl( \tau (v \otimes w) \bigr)
= \mu' \bigl( \rho (v) \otimes \rho (w) \bigr) .
\]
因此，$\tau$ 是表示的同态，当且仅当对任意 $v$、$w$，
$\mu$ 与 $\mu'$ 在 $\rho (v) \otimes \rho (w)$ 处的取值相同。

若 $A$ 交换，则 $\mu = \mu'$，从而 $\tau$ 是表示的同态。
反之，取 $V = W = A$、$\rho = \Delta$，则对任意 $f, g \in A$，有
\[
\mu \bigl( \Delta (f) \otimes \Delta (g) \bigr)
= \mu' \bigl( \Delta (f) \otimes \Delta (g) \bigr) .
\]
对两边作用 $\varepsilon \otimes \varepsilon \otimes \mathrm{id}_A$，
并利用 $(\varepsilon \otimes \mathrm{id}_A) \circ \Delta = \mathrm{id}_A$，
左边为 $fg$，右边为 $gf$。
:::

因此，当 $\mathcal{O} (G)$ 不交换时，
表示范畴不再具有对称结构。
但对于常考虑的量子形变，例如 $\mathcal{O}_q (G)$，
其表示范畴常常具有[[辫幺半范畴]]结构。
例如，在 @ex:frt 中，$\check{R} = P R \colon V \otimes V \to V \otimes V$
是表示的同态，其中 $P$ 是交换两个因子的映射。
它满足辫关系
$\check{R}_{12} \check{R}_{23} \check{R}_{12}
= \check{R}_{23} \check{R}_{12} \check{R}_{23}$
与 Hecke 关系 $(\check{R} - q) (\check{R} + q^{-1}) = 0$，
从而在 $V^{\otimes m}$ 上给出 [[Iwahori–Hecke 代数]]的作用，
这是 [[Schur–Weyl 对偶]]的量子类比。
一般地，有限维 1 型 $U_q (\mathfrak{g})$-模构成[[辫幺半范畴]]，
但它一般不是对称的。
由此可以得到[[辫群]]的表示，以及纽结与三维流形的不变量，
例如 $U_q (\mathfrak{sl}_2)$ 的二维表示给出 [[Jones 多项式]]。

另一方面，当 $q$ 不是单位根时，
量子群的表示范畴作为 Abel 范畴与经典的情形相同：

::: theorem [Lusztig, Rosso] {@thm:generic}
设 $\mathfrak{g}$ 是复半单 Lie 代数，$q \in \mathbb{C}^\times$ 不是单位根。
则有限维 1 型 $U_q (\mathfrak{g})$-模都是半单的；
其单模 $L_q (\lambda)$ 与[[支配权|支配整权]] $\lambda$ 一一对应，
且 $L_q (\lambda)$ 的各权空间的维数与 $\mathfrak{g}$ 的单模 $L (\lambda)$ 相同。
:::

参见 [@Jantzen1996]。
特别地，张量积的分解重数也与经典的情形相同。

### 单位根处

当 $q$ 是单位根时，量子群的表示论与 $q$ 一般的情形大不相同，
而类似于正特征域上代数群的表示论。
Lusztig 引入了 $U_q (\mathfrak{g})$ 的带有除幂的整形式，
并在单位根 $\varepsilon$ 处构造了[[量子 Frobenius 同态]]
$U_\varepsilon^\mathrm{res} (\mathfrak{g}) \to U (\mathfrak{g})$，
其“核”是有限维 Hopf 代数 $u_\varepsilon (\mathfrak{g})$，称为[[小量子群]]。
在函数代数一侧，在适当的条件下，
$\mathcal{O} (G)$ 可以实现为 $\mathcal{O}_\varepsilon (G)$ 的中心 Hopf 子代数，
即有量子群的同态 $G_\varepsilon \to G$，
它类似于正特征域上代数群的 [[Frobenius 同态|Frobenius 态射]]。

## 其他类型的量子群

### 紧量子群

在算子代数中，[[$C^*$ 代数]]视为非交换的紧 Hausdorff 空间，
带有群结构的这类空间称为紧量子群。

::: definition [紧量子群]
[[紧量子群|**紧量子群**]]是指带有单位元的 $C^*$ 代数 $A$，
及保持单位元的 $*$-同态 $\Delta \colon A \to A \otimes A$（极小张量积），满足
$(\Delta \otimes \mathrm{id}) \circ \Delta
= (\mathrm{id} \otimes \Delta) \circ \Delta$，
且 $(A \otimes 1) \, \Delta (A)$ 与 $(1 \otimes A) \, \Delta (A)$
的线性张成都在 $A \otimes A$ 中稠密。
:::

当 $A$ 交换时，由 [[Gelfand 对偶]]，
$A$ 是某个紧 Hausdorff 群 $K$ 上的连续函数代数 $C (K)$。
定义中的稠密性条件是 Hopf 代数中存在对极映射这一条件的类比。
例如，对 $q \in [-1, 1] \setminus \{ 0 \}$，
$C (\mathrm{SU}_q (2))$ 是由 $\alpha$、$\gamma$ 生成、满足
\[
\begin{gathered}
  \alpha^* \alpha + \gamma^* \gamma = 1 , \quad
  \alpha \alpha^* + q^2 \gamma \gamma^* = 1 , \quad
  \gamma \gamma^* = \gamma^* \gamma , \\
  \alpha \gamma = q \gamma \alpha , \quad
  \alpha \gamma^* = q \gamma^* \alpha
\end{gathered}
\]
的普遍 $C^*$ 代数，其中矩阵
$\bigl( \begin{smallmatrix}
\alpha & -q \gamma^* \\ \gamma & \alpha^*
\end{smallmatrix} \bigr)$
的元素 $u_{ij}$ 满足 $\Delta (u_{ij}) = \sum_l u_{il} \otimes u_{lj}$。
当 $q = 1$ 时，这就是 $C (\mathrm{SU} (2))$。
Woronowicz 证明了紧矩阵量子群有唯一的 Haar 态，
并有 [[Peter–Weyl 定理]]的类比 [@Woronowicz1987]；
这些结论对一般的紧量子群也成立。

### 局部紧量子群

在 [[von Neumann 代数]]的框架中，有[[局部紧量子群]]的概念，
它是非交换的测度空间上的群结构，推广了局部紧群。

## 历史

量子群起源于 1980 年前后 Faddeev 等人发展的[[量子反散射方法]]
[@SklyaninTakhtajanFaddeev1979]，
其中出现的 $R$ 矩阵满足杨–Baxter 方程；
$U_q (\mathfrak{sl}_2)$ 的关系最早出现于 Kulish 与 Reshetikhin 的工作中
[@KulishReshetikhin1981]。
1985 年，Drinfeld [@Drinfeld1985] 与 Jimbo [@Jimbo1985]
各自对可对称化的 Kac–Moody 代数定义了 $U_q (\mathfrak{g})$，
Drinfeld 还在同一篇文章中定义了杨代数。
1986 年，Drinfeld 在国际数学家大会上的报告中提出了“量子群”一词，
并系统地阐述了 Poisson–Lie 群、Lie 双代数、拟三角 Hopf 代数等概念
[@Drinfeld1987]。
同一时期，Faddeev、Reshetikhin 与 Takhtajan 用 $R$ 矩阵描述了量子坐标环
[@ReshetikhinTakhtajanFaddeev1990]，
Manin 将量子群理解为量子平面等非交换空间的对称 [@Manin1988]，
Woronowicz 则从算子代数的角度定义了紧矩阵量子群 [@Woronowicz1987]。

## 参考文献

教材：

```bibliography
ChariPressley1994:
  type: book
  author: [Vyjayanthi Chari, Andrew Pressley]
  title: A Guide to Quantum Groups
  year: 1994
  publisher: Cambridge University Press

Kassel1995:
  type: book
  author: Christian Kassel
  title: Quantum Groups
  year: 1995
  series: Graduate Texts in Mathematics
  volume: 155
  publisher: Springer

Jantzen1996:
  type: book
  author: Jens Carsten Jantzen
  title: Lectures on Quantum Groups
  year: 1996
  series: Graduate Studies in Mathematics
  volume: 6
  publisher: American Mathematical Society

EtingofSchiffmann1998:
  type: book
  author: [Pavel Etingof, Olivier Schiffmann]
  title: Lectures on Quantum Groups
  year: 1998
  publisher: International Press

BrownGoodearl2002:
  type: book
  author: [Ken A. Brown, Ken R. Goodearl]
  title: Lectures on Algebraic Quantum Groups
  year: 2002
  series: Advanced Courses in Mathematics CRM Barcelona
  publisher: Birkhäuser

Manin2018:
  type: book
  author: Yuri I. Manin
  title: Quantum Groups and Noncommutative Geometry
  edition: 2
  year: 2018
  series: CRM Short Courses
  publisher: Springer
  doi: '10.1007/978-3-319-97987-8'

Molev2007:
  type: book
  author: Alexander Molev
  title: Yangians and Classical Lie Algebras
  year: 2007
  series: Mathematical Surveys and Monographs
  volume: 143
  publisher: American Mathematical Society
```

原始文献：

```bibliography
SklyaninTakhtajanFaddeev1979:
  type: article
  author: [E. K. Sklyanin, L. A. Takhtajan, L. D. Faddeev]
  title: Quantum inverse problem method. I
  journaltitle: Theoretical and Mathematical Physics
  volume: 40
  number: 2
  year: 1979
  pages: 688--706
  doi: '10.1007/BF01018718'

KulishReshetikhin1981:
  type: article
  author: [P. P. Kulish, N. Yu. Reshetikhin]
  title: Quantum linear problem for the sine-Gordon equation and higher representations
  journaltitle: Zapiski Nauchnykh Seminarov LOMI
  volume: 101
  year: 1981
  pages: 101--110
  note: '原文为俄文．英译 (1983)：Journal of Soviet Mathematics 23 (4), 2435–2441'

Drinfeld1985:
  type: article
  author: V. G. Drinfeld
  title: Hopf algebras and the quantum Yang–Baxter equation
  journaltitle: Doklady Akademii Nauk SSSR
  volume: 283
  number: 5
  year: 1985
  pages: 1060--1064
  note: '原文为俄文'

Jimbo1985:
  type: article
  author: Michio Jimbo
  title: 'A $q$-difference analogue of $U(\mathfrak{g})$ and the Yang–Baxter equation'
  journaltitle: Letters in Mathematical Physics
  volume: 10
  year: 1985
  pages: 63--69

Drinfeld1987:
  type: incollection
  author: V. G. Drinfeld
  title: Quantum groups
  booktitle: Proceedings of the International Congress of Mathematicians (Berkeley, 1986)
  year: 1987
  pages: 798--820
  publisher: American Mathematical Society

Woronowicz1987:
  type: article
  author: S. L. Woronowicz
  title: Compact matrix pseudogroups
  journaltitle: Communications in Mathematical Physics
  volume: 111
  year: 1987
  pages: 613--665

Manin1988:
  type: book
  author: Yuri I. Manin
  title: Quantum Groups and Noncommutative Geometry
  year: 1988
  publisher: Centre de Recherches Mathématiques, Université de Montréal
  note: '第二版见 Manin 2018'

ReshetikhinTakhtajanFaddeev1990:
  type: article
  author: [N. Yu. Reshetikhin, L. A. Takhtajan, L. D. Faddeev]
  title: Quantization of Lie groups and Lie algebras
  journaltitle: Leningrad Mathematical Journal
  volume: 1
  number: 1
  year: 1990
  pages: 193--225
  note: '俄文原文 (1989)：Algebra i Analiz 1 (1), 178–206'

EtingofKazhdan1996:
  type: article
  author: [Pavel Etingof, David Kazhdan]
  title: Quantization of Lie bialgebras, I
  journaltitle: Selecta Mathematica (New Series)
  volume: 2
  year: 1996
  pages: 1--41
```

```terms
量子群:
  en: quantum group
  de: Quantengruppe :f
  fr: groupe quantique :m
  ja: 量<りょう>子<し>群<ぐん>
量子代数群:
  en: quantum algebraic group
量子幺半群:
  en: [quantum monoid, quantum semigroup]
量子形变:
  en: quantum deformation
半经典极限:
  en: semiclassical limit
量子形式群:
  en: quantum formal group
```
