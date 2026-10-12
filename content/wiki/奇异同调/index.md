---
title: 奇异同调
categories: [同调论]
navboxes: [代数拓扑]
---

在[[代数拓扑]]中，**奇异同调**（或**奇异下同调**）是[[拓扑空间]]的一种[[同伦不变量]]，
它是拓扑空间中“洞的个数”的一种严格定义。
具体地说，拓扑空间 $X$ 有一系列的**奇异同调群**，通常记为
\[
H_n (X; \mathbb{Z}) \quad (n = 0, 1, 2, \dotsc),
\]
每个 $H_n (X; \mathbb{Z})$ 是 [[Abel 群]]，
它的[[秩 (模论)|秩]]就刻画了拓扑空间 $X$
中“$n$ 维洞的个数”。
当 $n = 0$ 时，$H_0 (X; \mathbb{Z})$ 的秩等于 $X$ 的[[道路连通分支]]的个数。
系数环 $\mathbb{Z}$ 可换为任意 [[Abel 群]] $A$，得到 $A$-系数同调。

例如，当 $n \geq 1$ 时，[[球面]] $S^n$ 有 $1$ 个道路连通分支和 $1$ 个 $n$ 维洞，所以
\[
H_k (S^n; \mathbb{Z}) \simeq
\begin{cases}
  \mathbb{Z}, & k = 0, n, \\
  0, & k \neq 0, n.
\end{cases}
\]

奇异同调关于连续映射是[[协变函子|协变]]的：
沿映射 $f \colon X \to Y$ 可以前推得到映射
$f_* \colon H_n (X; A) \to H_n (Y; A)$。
同伦的映射诱导的前推映射相同。

在 [[CW 复形]]上，奇异同调可用[[胞腔同调]]计算。

在 [[Brown 可表定理]]的观点下，
以 [[Abel 群]] $A$ 为系数的奇异同调是由 [[Eilenberg–MacLane 谱]]
$HA$ 表出的同调理论，也就是说，对较好的拓扑空间 $X$ 而言，例如对 [[CW 复形]]，
其 $n$ 阶奇异同调同构于[[拓扑谱]]
$\Sigma^\infty X_+ \wedge HA$ 的 $n$ 阶[[同伦群]]，
其中 $X_+$ 表示 $X$ 与一个基点的[[无交并]]。
我们将这样定义出的同调称为[[普通同调]]，而将奇异同调视为一种计算普通同调的方法。

## 定义

::: definition [标准单形]
设 $n$ 是[[自然数]]。
$n$ 维 **[[标准单形]]** 是指 [[Euclid 空间]] $\mathbb{R}^{n+1}$ 的子集
\[
\Delta^n = \{
  (x_0, \dotsc, x_n) \in \mathbb{R}^{n+1} \mid
  x_0 + \cdots + x_n = 1, \
  \text{并且所有 } x_i \geq 0
\}.
\]
它的**边界**定义为
\[
\partial \Delta^n = \{
  (x_0, \dotsc, x_n) \in \Delta^n \mid
  x_0 = 0 \ \text{或} \
  \cdots \ \text{或} \
  x_n = 0
\}.
\]
:::

例如，$\Delta^0$ 是一个点，
$\Delta^1$ 是线段，
$\Delta^2$ 是正三角形，
$\Delta^3$ 是正四面体。
当 $n \geq 1$ 时
$\partial \Delta^n$ [[同胚]]于 $S^{n-1}$，
以及有 $\partial \Delta^0 = \varnothing$。

::: definition [奇异单形]
设 $X$ 是[[拓扑空间]]，$n$ 是自然数。
$X$ 中的 $n$ 维**奇异单形**是指[[连续映射]]
\[
\sigma \colon \Delta^n \to X.
\]
:::

::: definition [奇异链]
设 $X$ 是拓扑空间，$A$ 是 [[Abel 群]]，称为**系数群**，并设 $n$ 是自然数。
则 $X$ 中 $A$-系数的 $n$ 维**奇异链**是指有限个 $n$ 维奇异单形的 $A$-线性组合，即形如
\[
\sigma = \sum_{i=1}^m a_i \sigma_i
\]
的表达式，其中 $a_i \in A$，$\sigma_i$ 是 $n$ 维奇异单形。
所有 $n$ 维奇异链构成的 Abel 群记为
\[
C_n (X; A) =
\bigoplus_{\sigma} A,
\]
其中 $\sigma$ 取遍所有不同的 $n$ 维奇异单形。
若 $A$ 还是[[交换环]]，则该群具有自然的 $A$-[[模]]结构。
:::

对于拓扑空间中的 $n$ 维洞，
我们能够用一些 $n$ 维奇异单形粘起来，
得到一个 $n$ 维奇异链，来把这个洞围住；
这样的奇异链没有边界，也不能写成另一个奇异链的边界。
满足这一性质的 $n$ 维奇异链对应了空间的 $n$ 维洞。
例如，下图展示了 $n = 1$ 的情况：
$4$ 个一维单形组成的链没有边界也不是二维链的边界。
```tikz
\begin{tikzpicture}
    \fill[cyan!20] (0,0) circle (2);
    \fill[white] (0,0) circle (0.8);
    \draw[thick, cyan!40] (0,0) circle (2);
    \draw[thick, cyan!40] (0,0) circle (0.8);
    \draw[very thick] (-1.5, 1) -- (1.6, .8) -- (1.2, -1) -- (-1, -1.2) -- cycle;
    \fill (-1.5, 1) circle (.08);
    \fill (1.6, .8) circle (.08);
    \fill (1.2, -1) circle (.08);
    \fill (-1, -1.2) circle (.08);
\end{tikzpicture}
```
以下定义基于上述想法。

::: definition [奇异链的边界]
设 $\sigma$ 是 $X$ 中的 $n$ 维奇异单形，其中 $n \geq 1$。
对每个 $i = 0, \dotsc, n$，定义[[含入映射]]
\[
\delta_i \colon \Delta^{n-1} \longrightarrow \Delta^n,
\quad
(x_0, \dotsc, x_{n-1})
\longmapsto
(x_0, \dotsc, x_{i-1}, 0, x_i, \dotsc, x_{n-1}).
\]
则 $\sigma$ 的**边界**是指 $n - 1$ 维奇异链
\[
\partial \sigma =
\sum_{i = 0}^n
(-1)^i
(\sigma \circ \delta_i).
\]

将 $\partial$ 自然地延拓到所有 $n$ 维奇异链，得到**边界映射**
\[
\partial \colon C_n (X; A) \longrightarrow C_{n-1} (X; A).
\]
:::

我们约定 $C_{-1} (X; A) = 0$，且 $\partial \colon C_0 (X; A) \to C_{-1} (X; A)$ 为零映射。
则可以验证 $\partial^2 = 0$，从而 $(C_\bullet (X; A), \partial)$ 构成[[链复形]]，
称为 $X$ 的**奇异链复形**。

::: definition [奇异闭链，奇异边界链，奇异同调]
设 $X$ 是拓扑空间，$A$ 是 Abel 群，$n$ 是自然数。

- $X$ 中 $A$-系数的 $n$ 维**奇异闭链**是指边界为 $0$ 的 $n$ 维奇异链，
  它们构成的 Abel 群是
  \[
  Z_n (X; A) = \ker \bigl(
    \partial \colon C_n (X; A) \to C_{n-1} (X; A)
  \bigr).
  \]

- $X$ 中 $A$-系数的 $n$ 维**奇异边界链**是指能写成
  $(n + 1)$ 维奇异链的边界的 $n$ 维奇异链，
  它们构成的 Abel 群是
  \[
  B_n (X; A) = \operatorname{im} \bigl(
    \partial \colon C_{n+1} (X; A) \to C_n (X; A)
  \bigr).
  \]

- $X$ 的 $A$-系数 $n$ 阶**奇异同调**是 Abel 群
  \[
  H_n (X; A) = Z_n (X; A) / B_n (X; A),
  \]
  也即奇异链复形的 $n$ 阶[[链同调]]。

当 $A$ 为[[交换环]]时，上述三者都自然具有 $A$-[[模]] 的结构。
:::

## 例子

- 对[[单点空间]] $*$，有 $H_0 (*; A) \simeq A$，
  而 $H_k (*; A) = 0$（$k > 0$）。

- 对[[球面]] $S^n$（$n \geq 1$），有
  \[
  H_k (S^n; A) \simeq
  \begin{cases}
    A, & k = 0, n, \\
    0, & k \neq 0, n.
  \end{cases}
  \]
  此结论可由[[胞腔同调]]得到（@thm:奇异同调-胞腔同调）。

- 对 $n$ 维[[环面]] $T^n = (S^1)^n$，有
  \[
  H_k (T^n; A) \simeq
  \begin{cases}
    A^{\binom{n}{k}}, & 0 \leq k \leq n, \\
    0, & k > n,
  \end{cases}
  \]
  其中 $\binom{n}{k}$ 是[[二项式系数]]。
  这可由 Künneth 公式（@thm:奇异同调-kunneth）反复应用于 $S^1$ 得到。

- 对[[实射影空间]] $\mathbb{RP}^n$，有
  \[
  H_k (\mathbb{RP}^n; \mathbb{Z}) \simeq
  \begin{cases}
    \mathbb{Z}, & k = 0, \\
    \mathbb{Z}, & k = n \text{ 且 } n \text{ 为奇数}, \\
    \mathbb{Z} / 2\mathbb{Z}, & 0 < k < n \text{ 且 } k \text{ 为奇数}, \\
    0, & \text{其余情形}.
  \end{cases}
  \]

- 对[[复射影空间]] $\mathbb{CP}^n$，有
  \[
  H_k (\mathbb{CP}^n; \mathbb{Z}) \simeq
  \begin{cases}
    \mathbb{Z}, & k = 0, 2, 4, \dotsc, 2n, \\
    0, & \text{其余情形}.
  \end{cases}
  \]
  此结论也可由胞腔同调得到（@thm:奇异同调-胞腔同调）。

## 性质

### 函子性

::: proposition [函子性]
设 $A$ 是 Abel 群。对每个自然数 $n$，
奇异同调给出从[[拓扑空间范畴]] $\mathsf{Top}$ 到 [[Abel 群范畴]]的[[函子]]
\[
H_n (-; A) \colon \mathsf{Top} \longrightarrow \mathsf{Ab}.
\]
若 $A$ 还是[[交换环]]，则奇异同调也给出到 [[模范畴|$A$-模范畴]]的函子。
\[
H_n (-; A) \colon \mathsf{Top} \longrightarrow A\text{-}\mathsf{Mod}.
\]
:::

::: proof
设 $f \colon X \to Y$ 是[[连续映射]]。对 $X$ 中的奇异单形
$\sigma \colon \Delta^n \to X$，定义
$f_\# (\sigma) = f \circ \sigma$，并线性延拓，得到同态
\[
f_\# \colon C_n (X; A) \longrightarrow C_n (Y; A).
\]
由于 $f_\#$ 与边界映射交换，这些映射构成[[链映射]]
$f_\# \colon C_\bullet (X; A) \to C_\bullet (Y; A)$。
因此 $f_\#$ 将奇异闭链映为奇异闭链，将奇异边界链映为奇异边界链，
从而诱导同态
\[
f_* \colon H_n (X; A) \longrightarrow H_n (Y; A).
\]
对连续映射 $X \xrightarrow{f} Y \xrightarrow{g} Z$，
有 $(g \circ f)_\# = g_\# \circ f_\#$；
对恒等映射有 $(\mathrm{id}_X)_\# = \mathrm{id}_{C_\bullet (X; A)}$。
取同调后得到
$(g \circ f)_* = g_* \circ f_*$ 以及
$(\mathrm{id}_X)_* = \mathrm{id}_{H_n (X; A)}$。
:::

由 @thm:奇异同调-同伦不变性，映射 $f_*$ 仅依赖于 $f$ 的同伦类。

### 同伦不变性

::: theorem [同伦不变性] {@thm:奇异同调-同伦不变性}
设 $f, g \colon X \to Y$ 是[[同伦]]的[[连续映射]]。
则对每个自然数 $n$ 与 Abel 群 $A$，有
\[
f_* = g_* \colon H_n (X; A) \longrightarrow H_n (Y; A).
\]
:::

::: proof
设 $F \colon X \times I \to Y$ 是从 $f$ 到 $g$ 的同伦，
其中 $I = [0, 1]$。对 $X$ 中的奇异单形
$\sigma \colon \Delta^n \to X$，考虑映射
\[
F \circ (\sigma \times \mathrm{id}_I)
\colon \Delta^n \times I \longrightarrow Y.
\]
设 $v_i = (e_i, 0)$，$w_i = (e_i, 1)$，
其中 $e_0, \dotsc, e_n$ 是 $\Delta^n$ 的顶点。
将棱柱 $\Delta^n \times I$ 分割为 $n + 1$ 个 $n + 1$ 维单形
\[
[v_0, \dotsc, v_i, w_i, \dotsc, w_n]
\quad (0 \leq i \leq n).
\]
令 $\alpha_i \colon \Delta^{n+1} \to \Delta^n \times I$ 是以此为顶点序
的仿射映射，即
\[
\alpha_i (e_j) =
\begin{cases}
  v_j, & 0 \leq j \leq i, \\
  w_{j-1}, & i + 1 \leq j \leq n + 1.
\end{cases}
\]
定义同态
\[
P_n \colon C_n (X; A) \longrightarrow C_{n+1} (Y; A)
\]
在奇异单形上的取值为
\[
P_n (\sigma) =
\sum_{i = 0}^n (-1)^i
F \circ (\sigma \times \mathrm{id}_I) \circ \alpha_i.
\]

对上述分割逐面计算边界。相邻两个 $n + 1$ 维单形的公共面
以相反符号出现，因而相互抵消；棱柱下底给出 $- f_\# (\sigma)$，
上底给出 $g_\# (\sigma)$；棱柱侧面给出 $P_{n-1} (\partial \sigma)$。
因此
\[
\partial P_n (\sigma) + P_{n-1} \partial (\sigma)
= g_\# (\sigma) - f_\# (\sigma).
\]
线性延拓后得到[[链同伦]]关系
\[
g_\# - f_\# = \partial \circ P + P \circ \partial.
\]
若 $z$ 是 $n$ 维奇异闭链，则
$g_\# (z) - f_\# (z) = \partial P_n (z)$ 是奇异边界链。
所以 $f_*$ 与 $g_*$ 在同调群上相等。
:::

::: corollary
若拓扑空间 $X$ 与 $Y$ [[同伦等价]]，
则对每个自然数 $n$ 与 Abel 群 $A$，有同构
\[
H_n (X; A) \simeq H_n (Y; A).
\]
:::

### 胞腔同调

<see>[[胞腔同调]]</see>

若 $X$ 是[[CW 复形]]，则可用其胞腔结构计算奇异同调。
为 $X$ 的每个胞腔选定定向。
以定向的 $n$ 维胞腔为基，定义整数系数胞腔链群
\[
C_n^{\mathrm{CW}} (X; \mathbb{Z}) = \bigoplus_{e \in E_n} \mathbb{Z} \cdot e,
\]
其中 $E_n$ 是 $X$ 的 $n$ 维胞腔的集合。
胞腔边界映射
\[
\partial_n^{\mathrm{CW}} \colon
C_n^{\mathrm{CW}} (X; \mathbb{Z}) \longrightarrow C_{n-1}^{\mathrm{CW}} (X; \mathbb{Z})
\]
由胞腔粘贴映射的[[映射度]]定义，详见[[胞腔同调]]一文。
对一般 Abel 群 $A$，定义
$C_n^{\mathrm{CW}} (X; A) = C_n^{\mathrm{CW}} (X; \mathbb{Z}) \otimes_{\mathbb{Z}} A$，
边界映射相应张量 $A$。
所得链复形的同调记作 $H_n^{\mathrm{CW}} (X; A)$。

::: theorem {@thm:奇异同调-胞腔同调}
设 $X$ 是 CW 复形，$A$ 是 Abel 群。则对每个自然数 $n$，
存在自然同构
\[
H_n^{\mathrm{CW}} (X; A) \simeq H_n (X; A).
\]
:::

例如，$\mathbb{CP}^m$ 具有一个 $0$ 维胞腔、一个 $2$ 维胞腔，
直到一个 $2m$ 维胞腔，且没有奇数维胞腔。
因此其胞腔链复形在偶数维等于 $A$，在奇数维等于 $0$，
所有边界映射为 $0$。由 @thm:奇异同调-胞腔同调 得
\[
H_k (\mathbb{CP}^m; A) \simeq
\begin{cases}
  A, & k = 0, 2, 4, \dotsc, 2m, \\
  0, & \text{其余情形}.
\end{cases}
\]

### 万有系数定理

<see>[[万有系数定理]]</see>

万有系数定理说明，一般系数的同调能通过整数系数同调计算出来。

::: theorem [万有系数定理] {@thm:奇异同调-万有系数定理}
设 $X$ 是拓扑空间，$A$ 是 Abel 群。则对每个自然数 $n$，
存在自然[[短正合列]]
\[
0 \longrightarrow
H_n (X; \mathbb{Z}) \otimes_{\mathbb{Z}} A
\longrightarrow H_n (X; A)
\longrightarrow
\operatorname{Tor}_1^{\mathbb{Z}} (H_{n-1} (X; \mathbb{Z}), A)
\longrightarrow 0.
\]
该短正合列分裂，但分裂一般不是自然的。因此，有不自然的同构
\[
H_n (X; A) \simeq
(H_n (X; \mathbb{Z}) \otimes_{\mathbb{Z}} A)
\oplus
\operatorname{Tor}_1^{\mathbb{Z}} (H_{n-1} (X; \mathbb{Z}), A).
\]
:::

### Künneth 公式

<see>[[Künneth 公式]]</see>

::: theorem [Künneth 公式] {@thm:奇异同调-kunneth}
设 $A$ 是[[主理想整环]]，$X, Y$ 是拓扑空间。
则对每个自然数 $n$，存在自然[[短正合列]]
\[
0 \longrightarrow
\bigoplus_{p + q = n}
H_p (X; A) \otimes_A H_q (Y; A)
\longrightarrow H_n (X \times Y; A)
\longrightarrow
\bigoplus_{p + q = n - 1}
\operatorname{Tor}_1^A (H_p (X; A), H_q (Y; A))
\longrightarrow 0.
\]
该短正合列分裂，但分裂一般不是自然的。因此，有不自然的同构
\[
H_n (X \times Y; A) \simeq
\bigoplus_{p + q = n}
H_p (X; A) \otimes_A H_q (Y; A)
\oplus
\bigoplus_{p + q = n - 1}
\operatorname{Tor}_1^A (H_p (X; A), H_q (Y; A)).
\]

特别地，若 $A = k$ 是[[域]]，则 $\operatorname{Tor}_1^A$ 项为 $0$，
于是有自然同构
\[
H_n (X \times Y; k) \simeq
\bigoplus_{p + q = n}
H_p (X; k) \otimes_k H_q (Y; k).
\]
:::

该公式可由[[Eilenberg–Zilber 定理]]与代数 Künneth 公式推出。
Eilenberg–Zilber 定理断言
$C_\bullet (X \times Y; A)$ 与
$C_\bullet (X; A) \otimes_A C_\bullet (Y; A)$ 链同伦等价；
再对后一个链复形应用代数形式的 Künneth 公式，即得上述短正合列。

```terms
奇异同调:
  en: singular homology
  de: singuläre Homologie :f
  fr: homologie singulière :f
  ja: 特<とく>異<い>ホモロジー
  ko: 특이 호몰로지 (特異 homology)
奇异单形:
  en: singular simplex
  de: singuläres Simplex :n
  fr: simplexe singulier :m
  ja: 特<とく>異<い>単<たん>体<たい>
  ko: 특이 단체 (特異 單體)
奇异链:
  en: singular chain
  de: singuläre Kette :f
  fr: chaîne singulière :f
  ja: 特<とく>異<い>チェイン
  ko: 특이 사슬 (特異 사슬)
奇异闭链:
  en: singular cycle
  de: singulärer Zykel :m
  fr: cycle singulier :m
  ja: 特<とく>異<い>サイクル
  ko: 특이 순환 (特異 循環)
奇异边界链:
  en: singular boundary
  de: singulärer Rand :m
  fr: bord singulier :m
  ja: 特<とく>異<い>バウンダリ
  ko: 특이 경계 (特異 境界)
```
