---
title: Hecke 代数
aliases: [Iwahori–Hecke 代数, Hecke 代数（Coxeter 群）, Kazhdan–Lusztig 基]
categories: [几何表示论, 量子代数, 代数群理论]
navboxes: [几何表示论, 量子代数, 代数群理论]
---

<disambiguation>
本条目介绍的是 Weyl 群与 Coxeter 群的 Hecke 代数。
关于由群的双陪集定义的 Hecke 代数，以及数论中由 Hecke 算子生成的 Hecke 代数，
请参见[[Hecke 代数（双陪集）]]。
</disambiguation>

在[[表示论]]中，**Hecke 代数**（又称 **Iwahori–Hecke 代数**）
是 [[Weyl 群]]的[[群代数]]的[[形变]]，依赖一个参数 $q$。

具体地说，对 Weyl 群 $W$，其 Hecke 代数作为 $\mathbb{Z}[q^{\pm 1}]$-[[模]]是
\[
\mathcal{H}_W = \bigoplus_{w \in W} \mathbb{Z}[q^{\pm 1}] \, T_w ,
\]
它以一组元素 $(T_w)_{w \in W}$ 为基，
这些元素间的乘法由群代数 $\mathbb{Z} [W]$ 中的乘法修改得到。
当 $q = 1$ 时，Hecke 代数就变回群代数。

例如，对 $W$ 中的任何[[单反射]] $s$，在 $\mathbb{Z} [W]$ 中都有 $s^2 = 1$。
而 Hecke 代数中，这一关系则成为
\[
(T_s - q) (T_s + 1) = 0 .
\]
也就是说，在反射 $s$ 的两个[[特征值]] $1$、$-1$ 中，我们将 $1$ 换成 $q$。
这种反射关系的来源见 @sec:idea。

另一方面，$W$ 中的[[辫群|辫关系]]则在 Hecke 代数中原样满足。
例如，在 $\mathrm{SL}_3$ 的 Weyl 群中有辫关系 $s t s = t s t$，
其中 $s, t \in W$ 是下图所示的反射。
相应地，其 Hecke 代数也满足关系
\[
T_s T_t T_s = T_t T_s T_t .
\]

```tikz {caption="$\mathrm{SL}_3$ 的根系（灰色箭头）与 Weyl 群的反射线（虚线）。单反射 $s$、$t$ 是关于浅蓝色区域两条边界的反射，标为 $w$ 的区域是浅蓝色区域在 $w$ 下的像。"}
\usetikzlibrary{arrows.meta}
\colorlet{accent}{blue!30!cyan!80!black}
\begin{tikzpicture}
  \fill[accent!15] (0, 0) -- (30:2.6) arc[start angle=30, end angle=90, radius=2.6] -- cycle;
  \draw[dashed] (30:2.6) -- (210:2.6);
  \draw[dashed] (90:2.6) -- (270:2.6);
  \draw[dashed] (150:2.6) -- (330:2.6);
  \foreach \a in {0, 60, ..., 300}
    \draw[-Stealth, gray] (0, 0) -- (\a:0.9);
  \node (e) at (60:1.9) {$1$};
  \node (s) at (120:1.9) {$s$};
  \node (t) at (0:1.9) {$t$};
  \node (st) at (180:1.9) {$s t$};
  \node (ts) at (300:1.9) {$t s$};
  \node (sts) at (240:1.9) {$s t s = t s t$};
  \begin{scope}[-Stealth, thick, accent]
    \draw (e) -- (s);
    \draw (s) -- (st);
    \draw (st) -- (sts);
    \draw (e) -- (t);
    \draw (t) -- (ts);
    \draw (ts) -- (sts);
  \end{scope}
\end{tikzpicture}
```

更一般地，对任意 [[Coxeter 群]] $W$，都能类似地定义 Hecke 代数。
对[[仿射 Weyl 群]]或[[扩展仿射 Weyl 群]]，
相应的 Hecke 代数称为 **[[仿射 Hecke 代数]]**，
它是研究 $p$ 进群的表示的重要工具。

除了上述基 $(T_w)_{w \in W}$ 外，
Hecke 代数还有一组特殊的基，称为 **Kazhdan–Lusztig 基**。
它用 $T_w$ 表示时的系数称为 [[Kazhdan–Lusztig 多项式]]。
这些多项式描述了[[旗簇]]中 [[Schubert 簇]]的奇点，
又同时描述了复半单 Lie 代数的 [[Verma 模]]的合成因子重数。
通过[[量子 Schur–Weyl 对偶]]，这组基还与[[量子群]]的[[典范基]]联系起来。
这一系列令人惊叹的联系统称为 [[Kazhdan–Lusztig 理论]]。

## 想法 {@sec:idea}

我们首先简要介绍 Hecke 代数中反射关系的来源。
事实上，其想法来自[[有限域]] $\mathbb{F}_q$ 上的群，参数 $q$ 就是有限域的元素个数。

接续引言中的图示，考虑有限群 $G = \mathrm{GL}_3 (\mathbb{F}_q)$
及其中上三角矩阵构成的 [[Borel 子群]] $B \subset G$。
[[旗簇]] $G / B$ 的点对应了[[向量空间]] $V = \mathbb{F}_q^3$ 中的[[旗|完全旗]]
\[
F = (F_1 \subset F_2),
\]
其中子空间 $F_i \subset V$ 满足 $\dim F_i = i$。
Hecke 代数可以看成 $G / B \times G / B$ 上 $G$-不变函数的代数，
也就是说，其元素是形如
\[
f \colon G / B \times G / B \longrightarrow \mathbb{C}
\]
的函数（这里为方便而使用复系数），
满足 $f (F, F')$ 在坐标变换下不变，从而只依赖于
$F$、$F'$ 的[[相对位置]]。
由于 [[Bruhat 分解]]，这样的相对位置只有 $|W|$ 种，
即 $G / B \times G / B$ 中只有 $|W|$ 个 $G$-轨道，
从而该复化 Hecke 代数的维数为 $|W|$。
Hecke 代数的乘法由[[卷积]]给出：
\[
(f * g) (F, F') = \sum_{H \in G / B} f (F, H) \, g (H, F') .
\]
换言之，若把 $f$ 看成行、列都以旗为指标的矩阵，那么卷积就是矩阵乘法。

生成元 $T_s$ 对应于只改变旗中的一个子空间。
例如，设 $s$ 是交换前两个坐标的反射，
则 $T_s$ 是相对位置为 $s$ 的旗对的指示函数，即
\[
T_s (F, F') =
\begin{cases}
  1 , & F_1 \neq F'_1 \text{ 且 } F_2 = F'_2 , \\
  0 , & \text{其他情形} .
\end{cases}
\]
作为矩阵，它把每个旗 $F$ 连到只改变 $F_1$ 得到的所有旗 $F'$。

我们来具体写出这个矩阵。
对每个固定的二维子空间 $F_2$，其中有 $q + 1$ 条直线，故 $F_1$ 有 $q + 1$ 种取法，
从而 $T_s$ 是由若干块 $q + 1$ 阶方阵
\[
\begin{pmatrix}
  0 & 1 & \cdots & 1 \\
  1 & 0 & \cdots & 1 \\
  \vdots & \vdots & \ddots & \vdots \\
  1 & 1 & \cdots & 0
\end{pmatrix}
\]
构成的[[分块对角矩阵]]，每块对应一个 $F_2$。
由此不难算出 $T_s$ 的特征值为 $q$ 与 $-1$，
即 $(T_s - q) (T_s + 1) = 0$，
这就是这个例子中 Hecke 代数的反射关系。

在这种描述下，Kazhdan–Lusztig 基与几何联系密切。
由[[层–函数对应]]的想法，我们可以将 Hecke 代数[[范畴化]]：
将函数换成[[层]]，函数的卷积也相应地换成层的卷积，
这样得到的范畴称为 [[Hecke 范畴]]，其 [[Grothendieck 群]]就是 Hecke 代数。
在这一范畴化下，Kazhdan–Lusztig 基对应于 Schubert 簇的[[相交复形]]，
这解释了它与 Schubert 簇的奇点的联系。
再经过 [[Beilinson–Bernstein 局部化定理]]，这些复形又与 Verma 模联系起来，
由此可以证明 [[Kazhdan–Lusztig 猜想]]。


## 定义

Hecke 代数可以对任意 Coxeter 群通过生成元与关系定义。
对 Weyl 群与仿射 Weyl 群，它也可以定义为双陪集上的卷积代数，
这也是其原始想法，见 @sec:idea。
下面先给出前一种定义，再说明它与卷积代数的关系
（仿射的情形见[[仿射 Hecke 代数]]），
然后介绍 Kazhdan–Lusztig 基。

### 生成元与关系

取定 [[Coxeter 系]] $(W, S)$。
对 $w \in W$，记 $m_w$ 为 $w$ 的[[阶]]（可能为 $\infty$）。

::: definition [Hecke 代数] {@def}
Coxeter 系 $(W, S)$ 的 **Hecke 代数** $\mathcal{H} (W, S)$
是 $\mathbb{Z}[q^{\pm 1}]$ 上由元素 $T_s$（$s \in S$）生成，
并由以下关系定义的[[结合代数]]：

- **反射关系**：对 $s \in S$，$T_s^2 = (q - 1) T_s + q$。

- **辫关系**：对 $s, t \in S$，若 $m_{st} < \infty$，则
  \[
  \underbrace{T_s \, T_t \, T_s \, \cdots}_{m_{st} \text{ 个}} =
  \underbrace{T_t \, T_s \, T_t \, \cdots}_{m_{st} \text{ 个}} .
  \]
  例如，当 $m_{st} = 2$ 时，此关系为 $T_s T_t = T_t T_s$；
  当 $m_{st} = 3$ 时，此关系为 $T_s T_t T_s = T_t T_s T_t$。

无歧义时，$\mathcal{H} (W, S)$ 简记作 $\mathcal{H}_W$ 或 $\mathcal{H}$，
但它实际上依赖于 $S$ 的选取，不只依赖于群 $W$ 本身。
:::

::: remark [群代数] {@degen}
回忆 $W$ 由 $S$ 生成，并由以下关系定义：

- 对 $s \in S$，$s^2 = 1$。

- 对 $s, t \in S$，若 $m_{st} < \infty$，
  则 $s t s \cdots = t s t \cdots$，两边各有 $m_{st}$ 个因子。

因此，在 @def 中令 $q = 1$，
即沿将 $q$ 映为 $1$ 的同态 $\mathbb{Z}[q^{\pm 1}] \to \mathbb{Z}$
作张量积 $\mathcal{H} \otimes_{\mathbb{Z}[q^{\pm 1}]} \mathbb{Z}$，
就得到[[群代数]] $\mathbb{Z}[W]$。
:::

将 $w \in W$ 写成 $S$ 中元素之积的最短写法称为 $w$ 的**既约表达式**，
其中因子的个数称为 $w$ 的**长度**，记为 $\ell (w)$。

::: definition [标准基] {@def:std}
对 $w \in W$，取既约表达式 $w = s_1 \cdots s_n$，定义
\[
T_w = T_{s_1} \cdots T_{s_n} .
\]
由于 $w$ 的任意两个既约表达式都可以只用 @degen 中的辫关系互相转化，
$T_w$ 不依赖于既约表达式的选取。
:::

下面的命题是说，$(T_w)_{w \in W}$ 构成一组基，
且它们的乘法由 $W$ 中的乘法与反射关系决定：

::: proposition [标准基] {@prop:std}
$(T_w)_{w \in W}$ 是 $\mathcal{H}$ 作为 $\mathbb{Z}[q^{\pm 1}]$-模的一组基，
称为**标准基**。对 $w \in W$ 与 $s \in S$，有
\[
T_w T_s =
\begin{cases}
  T_{w s} , & \ell (w s) = \ell (w) + 1 , \\
  (q - 1) T_w + q T_{w s} , & \ell (w s) = \ell (w) - 1 .
\end{cases}
\]
:::

见 [@Humphreys1990, 7.1–7.3]。

::: remark [记号]
有的文献也使用一组不同的记号：
考虑 $\mathbb{Z}[q^{\pm 1/2}]$ 上以同样关系定义的 Hecke 代数，
即这里的 $\mathcal{H} \otimes_{\mathbb{Z}[q^{\pm 1}]} \mathbb{Z}[q^{\pm 1/2}]$，
此时也记 $v = q^{1/2}$。
这种系数在定义下文的 Kazhdan–Lusztig 基时比较方便。

若令 $\delta_w = v^{-\ell (w)} T_w$，
则 $\delta_s^2 = (v - v^{-1}) \delta_s + 1$。
$(\delta_w)_{w \in W}$ 也构成 $\mathbb{Z}[v^{\pm 1}]$ 上的 Hecke 代数的一组基，
一些文献也称之为**标准基**，或用 $T_w$ 表示这里的 $\delta_w$。
:::

### 卷积 {@sec:conv}

如 @sec:idea 所述，Hecke 代数的原始想法来自[[有限域]]上的[[约化群]]。
设 $G$ 是有限域 $\mathbb{F}_q$ 上的[[分裂约化群]]，
$T \subset B$ 分别是 $G$ 的分裂[[极大环面]]与 [[Borel 子群]]，
$(W, S)$ 是相应的 Weyl 群与单反射之集。
为简洁起见，下面将有限群 $G (\mathbb{F}_q)$、$B (\mathbb{F}_q)$ 也记为 $G$、$B$。
由 [[Bruhat 分解]]，$G$ 是[[双陪集]] $B w B$（$w \in W$）的无交并。

设 $A$ 是[[交换环]]。
$G$ 上关于左、右 $B$-作用都不变的取值于 $A$ 的函数，
即双陪集 $B \backslash G / B$ 上的函数，在卷积
\[
(f_1 * f_2) (g) = \sum_{h \in G / B} f_1 (h) \, f_2 (h^{-1} g)
\]
下构成 $A$-代数，记为 $\mathcal{H} (G / B, A)$，
这是[[Hecke 代数（双陪集）|双陪集的 Hecke 代数]]的特例。
下面的定理是说，这一代数就是 Hecke 代数在 $q$ 处的值：

::: theorem [Iwahori] {@thm:iwahori}
记号同上，并设 $q$ 在 $A$ 中可逆。
对 $w \in W$，记 $1_{B w B}$ 为双陪集 $B w B$ 的[[指示函数]]。则有 $A$-代数同构
\[
\begin{aligned}
  \mathcal{H} (W, S) \otimes_{\mathbb{Z}[q^{\pm 1}]} A
  & \overset{\sim}{\longrightarrow} \mathcal{H} (G / B, A) , \\
  T_w & \longmapsto 1_{B w B} ,
\end{aligned}
\]
其中 $\mathbb{Z}[q^{\pm 1}] \to A$ 将变量 $q$ 映为 $\mathbb{F}_q$ 的元素个数 $q$。
:::

Iwahori [@Iwahori1964, 定理 3.2、4.1] 对 [[Chevalley 群]]证明了这一定理，
一般情形见 [@Curtis1988, 命题 1.6]。

另一方面，$\mathcal{H} (G / B, A)$ 通过右卷积作用在
$G / B$ 上取值于 $A$ 的函数构成的[[置换表示]] $A [G / B]$ 上，
这一作用与 $G$ 的作用交换，并给出同构
\[
\mathcal{H} (G / B, A)^\mathrm{op} \simeq \operatorname{End}_G (A [G / B]) .
\]
由于 $T_w \mapsto T_{w^{-1}}$ 给出同构 $\mathcal{H} \simeq \mathcal{H}^\mathrm{op}$，
也可以说 Hecke 代数就是置换表示 $A [G / B]$ 的自同态代数。
见 [@Iwahori1964, 命题 1.4]
（其中假设 $A$ 是特征不整除 $|B|$ 的域，但类似的证明适用于一般的 $A$）。

### Kazhdan–Lusztig 基

Hecke 代数上有一个将 $q$ 换成 $q^{-1}$ 的[[对合]]。
Kazhdan 与 Lusztig [@KazhdanLusztig1979] 发现，
Hecke 代数有一组在这一对合下几乎不变的基，
即 Kazhdan–Lusztig 基。
这组基用标准基写下来的系数称为 [[Kazhdan–Lusztig 多项式]]，
在表示论与几何中有深刻的含义。

下面取定 Coxeter 系 $(W, S)$。

::: definition [对合] {@def:inv}
$\mathcal{H} (W, S)$ 上的**对合** $h \mapsto \overline{h}$
是满足以下条件的环[[自同构]]：

- $\overline{q} = q^{-1}$。

- 对 $s \in S$，$\overline{T_s} = q^{-1} T_s + q^{-1} - 1$。

考虑 $\mathbb{Z}[v^{\pm 1}] = \mathbb{Z}[q^{\pm 1/2}]$ 上的 Hecke 代数时，
规定 $\overline{v} = v^{-1}$。
:::

由反射关系可得 $T_s^{-1} = q^{-1} T_s + q^{-1} - 1$，即 $\overline{T_s} = T_s^{-1}$。
由此不难验证对合是良定义的，且对任意 $w \in W$，
$\overline{T_w} = T_{w^{-1}}^{-1}$。

::: definition [Kazhdan–Lusztig 基] {@klb}
**Kazhdan–Lusztig 基** $(H_w)_{w \in W}$
是 $\mathcal{H}$ 作为 $\mathbb{Z}[q^{\pm 1}]$-模的另一组基，
由以下性质刻画：

- $\overline{H_w} = q^{-\ell (w)} H_w$。

- 将 $H_w$ 用标准基展开为
  \[
  H_w = \sum_{x \in W} P_{x, w} \, T_x ,
  \]
  则系数 $P_{x, w} \in \mathbb{Z}[q^{\pm 1}]$ 满足：

  - 若 $x \not\leq w$，则 $P_{x, w} = 0$。

  - $P_{w, w} = 1$。

  - 若 $x < w$，则 $P_{x, w} \in \mathbb{Z}[q]$，
    且其次数不超过 $(\ell (w) - \ell (x) - 1) / 2$。

  这里的 $\leq$ 是 Bruhat 偏序（见 [[Coxeter 群]]）。

多项式 $P_{x, w}$ 称为 **[[Kazhdan–Lusztig 多项式]]**。
:::

这样的基存在且唯一 [@KazhdanLusztig1979, 定理 1.1]。

::: remark
在 $\mathbb{Z}[q^{\pm 1/2}] = \mathbb{Z}[v^{\pm 1}]$ 上，
令 $b_w = v^{-\ell (w)} H_w$，则 $\overline{b_w} = b_w$。
有的文献把这里的 $b_w$ 记作 $H_w$ 或 $\underline{H}_w$，
并称之为 **Kazhdan–Lusztig 基**。
:::

::: remark
不难解出对 $s \in S$，$H_s = T_s + 1$。
一般地，Kazhdan–Lusztig 基的存在唯一性可以对 $\ell (w)$ 归纳证明。
:::

## 例子

::: example [秩为一的情形] {@ex:rank1}
设 $W = \{ 1, s \}$ 是二阶群，$S = \{ s \}$。
则 $\mathcal{H}$ 是以 $1$、$T_s$ 为基的自由 $\mathbb{Z}[q^{\pm 1}]$-模，且
\[
\mathcal{H} \simeq \mathbb{Z}[q^{\pm 1}][T] / ((T - q) (T + 1)) .
\]
:::

::: example [一维表示]
对任意 Coxeter 系 $(W, S)$，以下两个映射都给出代数同态
$\mathcal{H} \to \mathbb{Z}[q^{\pm 1}]$：

- $T_w \mapsto q^{\ell (w)}$，即 $T_s \mapsto q$。

- $T_w \mapsto (-1)^{\ell (w)}$，即 $T_s \mapsto -1$。

它们在 $q = 1$ 时分别变为 $W$ 的平凡表示与符号表示。
在 @thm:iwahori 的情形，前者将 $1_{B w B}$ 映为 $B w B / B$ 的元素个数，
即 $q^{\ell (w)}$。
:::

::: example [置换群] {@ex:sym}
设 $W = \mathfrak{S}_n$，$S = \{ s_1, \ldots, s_{n - 1} \}$，
其中 $s_i$ 是[[对换]] $(i \ \ i + 1)$。
记 $T_i = T_{s_i}$，则 $\mathcal{H} (\mathfrak{S}_n)$ 由 $T_1, \ldots, T_{n - 1}$ 生成，
定义关系为
\[
\begin{aligned}
  T_i^2 & = (q - 1) T_i + q , \\
  T_i T_{i + 1} T_i & = T_{i + 1} T_i T_{i + 1} , \\
  T_i T_j & = T_j T_i \quad (|i - j| \geq 2) .
\end{aligned}
\]
后两条正是[[辫群]] $B_n$ 的定义关系，
因此 $\mathcal{H} (\mathfrak{S}_n)$ 是 $B_n$ 的群代数的商，
它的表示都给出辫群的表示。
Jones 利用 Hecke 代数上的一个迹，由此构造了纽结的 [[HOMFLY 多项式]]
[@Jones1987]。
另一方面，$\mathcal{H} (\mathfrak{S}_n)$ 作用在量子群 $U_q (\mathfrak{gl}_N)$
的表示 $V^{\otimes n}$ 上，且二者的作用互为中心化子，
此即[[量子 Schur–Weyl 对偶]]。
:::

::: example [Kazhdan–Lusztig 多项式]
若 $W$ 是[[二面体群]]，例如 $W = \mathfrak{S}_3$，
则对所有 $x \leq w$ 都有 $P_{x, w} = 1$。

另一方面，在 $\mathfrak{S}_4$ 中就有不平凡的 Kazhdan–Lusztig 多项式：
记号同 @ex:sym，令 $w = s_2 s_1 s_3 s_2$，
则
\[
P_{1, w} = P_{s_2, w} = 1 + q .
\]
:::

## 性质

### 与群代数的关系

如引言所述，Hecke 代数是群代数的形变。
但对有限 Coxeter 群，只要 $q$ 的取值使 Hecke 代数半单，
这一形变其实并不改变代数的结构：

::: theorem [Tits 形变定理] {@thm:tits}
设 $(W, S)$ 是有限 Coxeter 系，
$\varphi \colon \mathbb{Z}[q^{\pm 1}] \to \mathbb{C}$ 是环同态，
使得 $\mathcal{H}_\varphi = \mathcal{H} (W, S) \otimes_{\mathbb{Z}[q^{\pm 1}]} \mathbb{C}$
是[[半单代数]]。则 $\mathcal{H}_\varphi \simeq \mathbb{C}[W]$。
:::

见 [@Curtis1988, 命题 3.1、推论 3.2]。
将这一定理用于 @thm:iwahori 的情形，就得到置换表示的分解：

::: corollary {@cor:principal}
记号同 @thm:iwahori。则
\[
\mathbb{C}[G / B] \simeq \bigoplus_{\chi} \rho_\chi^{\oplus \chi (1)} ,
\]
其中 $\chi$ 取遍 $W$ 的不可约复特征标，
$\rho_\chi$ 是 $G$ 的两两不同构的不可约复表示。
:::

::: proof
由 @thm:iwahori，$\operatorname{End}_G (\mathbb{C}[G / B])$
同构于 $\mathcal{H}_\varphi$，其中 $\varphi (q)$ 是 $\mathbb{F}_q$ 的元素个数。
它是半单表示的自同态代数，因此是半单的，
从而由 @thm:tits，它同构于 $\mathbb{C}[W]$，
即同构于矩阵代数 $\mathrm{M}_{\chi (1)} (\mathbb{C})$ 之积。
再由[[双中心化子定理]]即得。参见 [@Curtis1988, 推论 3.2、3.3]。
:::

例如，$\chi$ 取平凡特征标时，$\rho_\chi$ 是 $G$ 的平凡表示；
$\chi$ 取符号特征标时，$\rho_\chi$ 是 [[Steinberg 表示]]。

### Kazhdan–Lusztig 多项式

Kazhdan 与 Lusztig 猜想 Kazhdan–Lusztig 多项式的系数都非负
[@KazhdanLusztig1979, §1]。
对 Weyl 群，他们通过几何证明了这一点：
设 $W$ 是约化群 $G$ 的 Weyl 群，$B \subset G$ 是 Borel 子群，
则 $P_{x, w}$ 的各项系数是[[旗簇]] $G / B$ 中的 [[Schubert 簇]] $\overline{B w B} / B$
的[[相交复形]]的各次上同调层在点 $x B$ 处的茎的维数 [@KazhdanLusztig1980]。
对一般的 Coxeter 群，则没有这样的几何对象，
其证明用到了 [[Soergel 双模]]
[@EliasWilliamson2014, 推论 1.2]：

::: theorem [Kazhdan–Lusztig 正性] {@thm:positivity}
对任意 Coxeter 系 $(W, S)$ 与 $x, w \in W$，
$P_{x, w}$ 的系数都是非负整数。
:::

关于 Soergel 双模与这一结论的介绍，可参见 [@intro-soergel]。

另一方面，任何常数项为 $1$ 的非负整系数多项式
都会作为置换群的 Kazhdan–Lusztig 多项式出现：

::: theorem [Polo]
设 $P \in 1 + q \mathbb{N}[q]$ 的次数 $d \geq 1$，并令 $n = 1 + d + P (1)$。
则存在 $x, w \in \mathfrak{S}_n$，使得 $x < w$，
$\ell (w) - \ell (x) = 2 d + P (1) - 1$，且 $P_{x, w} = P$。
这里 $\mathfrak{S}_n$ 带有 @ex:sym 中的 Coxeter 系结构。
:::

见 [@MR1698201, §2.1]。

## 参考文献

原始文献：

```bibliography
Iwahori1964:
  type: article
  author: 'Iwahori, Nagayoshi'
  title: On the structure of a Hecke ring of a Chevalley group over a finite field
  journaltitle: J. Fac. Sci. Univ. Tokyo Sect. I
  volume: 10
  year: 1964
  pages: 215--236
  doi: 10.15083/00039900
KazhdanLusztig1979:
  type: article
  author: ['Kazhdan, David', 'Lusztig, George']
  title: Representations of Coxeter groups and Hecke algebras
  journaltitle: Invent. Math.
  volume: 53
  year: 1979
  pages: 165--184
  doi: 10.1007/BF01390031
KazhdanLusztig1980:
  type: incollection
  author: ['Kazhdan, David', 'Lusztig, George']
  title: Schubert varieties and Poincaré duality
  booktitle: Geometry of the Laplace operator
  series: Proc. Sympos. Pure Math.
  volume: 36
  publisher: Amer. Math. Soc.
  year: 1980
  pages: 185--203
Jones1987:
  type: article
  author: 'Jones, Vaughan F. R.'
  title: Hecke algebra representations of braid groups and link polynomials
  journaltitle: Ann. of Math. (2)
  volume: 126
  year: 1987
  pages: 335--388
MR1698201:
  type: article
  author: 'Polo, Patrick'
  title: Construction of arbitrary Kazhdan-Lusztig polynomials in symmetric groups
  journaltitle: Represent. Theory
  volume: 3
  year: 1999
  pages: 90--104
  doi: 10.1090/S1088-4165-99-00074-6
EliasWilliamson2014:
  type: article
  author: ['Elias, Ben', 'Williamson, Geordie']
  title: The Hodge theory of Soergel bimodules
  journaltitle: Ann. of Math. (2)
  volume: 180
  year: 2014
  pages: 1089--1136
  doi: 10.4007/annals.2014.180.3.6
  arxiv: '1212.0791'
```

教材与综述：

```bibliography
Curtis1988:
  type: article
  author: 'Curtis, Charles W.'
  title: Representations of Hecke algebras
  journaltitle: Astérisque
  volume: 168
  year: 1988
  pages: 13--60
Humphreys1990:
  type: book
  author: 'Humphreys, James E.'
  title: Reflection groups and Coxeter groups
  series: Cambridge Studies in Advanced Mathematics
  volume: 29
  publisher: Cambridge University Press
  year: 1990
  doi: 10.1017/CBO9780511623646
intro-soergel:
  type: book
  label: EMTW
  author: ['Elias, Ben', 'Makisumi, Shotaro', 'Thiel, Ulrich', 'Williamson, Geordie']
  title: Introduction to Soergel bimodules
  series: RSME Springer Series
  volume: 5
  publisher: 'Springer, Cham'
  year: 2020
  pages: xxv+588
  doi: 10.1007/978-3-030-48826-0
```

```terms
Hecke 代数:
  en: Hecke algebra
  fr: algèbre de Hecke :f
  de: Hecke-Algebra :f
  ja: Hecke 環<かん>
  ko: Hecke 대수 (Hecke 代數)
Iwahori–Hecke 代数:
  en: Iwahori–Hecke algebra
  fr: algèbre d'Iwahori–Hecke :f
  ja: 岩<いわ>堀<ほり> Hecke 環<かん>
标准基:
  en: standard basis
Kazhdan–Lusztig 基:
  en: Kazhdan–Lusztig basis
  fr: base de Kazhdan–Lusztig :f
  de: Kazhdan–Lusztig-Basis :f
  ja: Kazhdan–Lusztig 基<き>底<てい>
```
