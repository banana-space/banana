---
title: 奇异上同调
categories: [同调论]
navboxes: [代数拓扑]
---

在[[代数拓扑]]中，**奇异上同调**是[[拓扑空间]]的一种[[同伦不变量]]，
是[[奇异同调]]的一种对偶版本，
由奇异链复形的[[对偶链复形]]定义。
对拓扑空间 $X$ 和[[交换环]] $A$，$X$ 的 $A$-系数奇异上同调是一列 $A$-[[模]]
\[
H^n (X; A) \quad (n = 0, 1, 2, \dotsc).
\]
与奇异同调类似，这些 $A$-模的[[秩 (模论)|秩]]大致描述了 $X$ 中“$n$ 维洞的个数”。
若将奇异同调的元素大致视为“$n$ 维洞的线性组合”，
则奇异上同调的元素大致可以视为“$n$ 维洞的线性组合到 $A$ 的函数”。
但奇异上同调并不总是同构于奇异同调的[[对偶模|对偶 $A$-模]]；
其具体联系由[[万有系数定理]]（@thm:奇异上同调-万有系数定理）给出。

与奇异同调不同的是，奇异上同调还具有[[杯积]]这一额外结构：
\[
\smallsmile \colon H^m (X; A) \otimes_A H^n (X; A)
\longrightarrow H^{m+n} (X; A),
\]
因此全体上同调群构成[[分次交换环]]
$H^\bullet (X; A)$，
称为**奇异上同调环**，
因而比同调携带更多信息。

奇异上同调关于连续映射是[[反变函子|反变]]的：
沿映射 $f \colon X \to Y$ 可以拉回得到映射
$f^* \colon H^n (Y; A) \to H^n (X; A)$。
同伦的映射诱导的拉回映射相同。

在 [[CW 复形]]上，奇异上同调可用[[胞腔上同调]]计算。
另外，在较好的空间上，奇异上同调也等于[[常值层]]的[[层上同调]]
（@thm:与层上同调的比较）。

在 [[Brown 可表定理]]的观点下，
以交换环 $A$ 为系数的奇异上同调是由 [[Eilenberg–MacLane 谱]]
$HA$ 表出的上同调理论。因此，对性质较好的空间 $X$，
例如对 CW 复形，其奇异上同调满足
\[
H^n (X; A) \simeq [X, K (A, n)],
\]
其中 $K (A, n)$ 表示 [[Eilenberg–MacLane 空间]]，
$[-, -]$ 表示连续映射同伦类的集合。
换言之，至少对较好的空间而言，奇异上同调是同伦意义下的[[可表函子]]。
我们将此可表函子定义为[[普通上同调]]，
而将奇异上同调视为计算普通上同调的方法。

## 定义

设 $X$ 是[[拓扑空间]]，$A$ 是 [[Abel 群]]。
设 $(C_\bullet (X; A), \partial)$
是定义[[奇异同调]]所用的奇异链复形。

::: definition [奇异上链复形]
设 $X$ 是拓扑空间，$n$ 是自然数，$A$ 是 Abel 群。
则 $X$ 的 $A$-系数 $n$ 维**奇异上链**构成的群定义为
\[
C^n (X; A) = \operatorname{Hom}_\mathbb{Z} (C_n (X; \mathbb{Z}), A)
\simeq \prod_\sigma A,
\]
其中 $\sigma$ 取遍所有不同的 $n$ 维奇异单形。
当 $A$ 为[[交换环]]时，它具有自然的 $A$-[[模]]结构。

定义**余边界映射**
\[
d^n \colon C^n (X; A) \longrightarrow C^{n+1} (X; A)
\]
为边界映射 $\partial_n$ 的对偶映射，即
\[
(d^n \varphi) (\sigma) =
\varphi (\partial_{n+1} \sigma),
\]
其中 $\varphi \in C^n (X; A)$，$\sigma$ 是 $(n+1)$ 维奇异单形。
因为 $\partial_n \circ \partial_{n+1} = 0$，
所以 $d^{n+1} \circ d^n = 0$。
因此 $(C^\bullet (X; A), d)$ 构成[[上链复形]]，
称为 $X$ 的**奇异上链复形**。
:::

::: definition [奇异闭上链，奇异边界上链，奇异上同调]
设 $X$ 是拓扑空间，$n$ 是自然数，$A$ 是 Abel 群。

- $X$ 中 $A$-系数的 $n$ 维**奇异闭上链**是指余边界为 $0$
  的奇异上链，它们构成的 Abel 群是
  \[
  Z^n (X; A) = \ker \bigl(
    d^n \colon C^n (X; A) \to C^{n+1} (X; A)
  \bigr).
  \]

- $X$ 中 $A$-系数的 $n$ 维**奇异边界上链**是指能写成
  $(n-1)$ 维奇异上链的余边界的 $n$ 维奇异上链，
  它们构成的 Abel 群是
  \[
  B^n (X; A) = \operatorname{im} \bigl(
    d^{n-1} \colon C^{n-1} (X; A) \to C^n (X; A)
  \bigr).
  \]
  当 $n = 0$ 时，约定 $C^{-1} (X; A) = 0$ 且 $d^{-1} = 0$。

- $X$ 的 $A$-系数 $n$ 阶**奇异上同调**是 Abel 群
  \[
  H^n (X; A) = Z^n (X; A) / B^n (X; A),
  \]
  也即奇异上链复形的 $n$ 阶[[上同调]]。

当 $A$ 为[[交换环]]时，上述三者都具有自然的 $A$-[[模]]结构。
:::

## 例子

以下例子中，上同调环中的乘法均为[[杯积]]，见 @def:奇异上同调-杯积。

- 对[[单点空间]] $*$，有 $H^0 (*; \mathbb{Z}) \simeq \mathbb{Z}$，
  而 $H^k (*; \mathbb{Z}) = 0$（$k > 0$）。
  上同调环为 $\mathbb{Z}$。

- 对[[球面]] $S^n$（$n \geq 1$），有
  \[
  H^k (S^n; \mathbb{Z}) \simeq
  \begin{cases}
    \mathbb{Z}, & k = 0, n, \\
    0, & k \neq 0, n.
  \end{cases}
  \]
  若 $a \in H^n (S^n; \mathbb{Z})$ 是生成元，
  则 $H^* (S^n; \mathbb{Z}) \simeq \mathbb{Z} [a] / (a^2)$，
  其中 $|a| = n$。
  此结论可由胞腔上同调得到
  （@thm:奇异上同调-胞腔上同调）。

- 对 $n$ 维[[环面]] $T^n = (S^1)^n$，有
  \[
  H^k (T^n; \mathbb{Z}) \simeq
  \begin{cases}
    \mathbb{Z}^{\binom{n}{k}}, & 0 \leq k \leq n, \\
    0, & k > n.
  \end{cases}
  \]
  其上同调环是 $\mathbb{Z}$ 上由 $n$ 个次数为 $1$ 的生成元生成的[[外代数]]。
  例如当 $n = 2$ 时，若 $a, b \in H^1 (T^2; \mathbb{Z})$ 是两个生成元，
  则 $a \smallsmile b = - b \smallsmile a$ 生成 $H^2 (T^2; \mathbb{Z}) \simeq \mathbb{Z}$。
  这可由 Künneth 公式
  （@thm:奇异上同调-kunneth）得到。

- 对[[实射影空间]] $\mathbb{RP}^n$，有
  \[
  H^k (\mathbb{RP}^n; \mathbb{Z}) \simeq
  \begin{cases}
    \mathbb{Z}, & k = 0, \\
    \mathbb{Z}, & k = n \text{ 且 } n \text{ 为奇数}, \\
    \mathbb{Z} / 2\mathbb{Z}, & 0 < k \leq n \text{ 且 } k \text{ 为偶数}, \\
    0, & \text{其余情形}.
  \end{cases}
  \]
  另一方面，[[有限域|二元域]] $\mathbb{F}_2$ 系数的上同调环为
  \[
  H^* (\mathbb{RP}^n; \mathbb{F}_2)
  \simeq \mathbb{F}_2 [x] / (x^{n+1}),
  \quad |x| = 1.
  \]
  这些都可由胞腔上同调计算得到
  （@thm:奇异上同调-胞腔上同调）。

- 对[[复射影空间]] $\mathbb{CP}^n$，有
  \[
  H^k (\mathbb{CP}^n; \mathbb{Z}) \simeq
  \begin{cases}
    \mathbb{Z}, & k = 0, 2, 4, \dotsc, 2n, \\
    0, & \text{其余情形}.
  \end{cases}
  \]
  上同调环为
  \[
  H^* (\mathbb{CP}^n; \mathbb{Z})
  \simeq \mathbb{Z} [y] / (y^{n+1}),
  \quad |y| = 2.
  \]
  此结论也可由胞腔上同调得到
  （@thm:奇异上同调-胞腔上同调）。

- 杯积能区分一些具有相同同调群的空间。
  例如 $S^2 \times S^2$ 与[[连通和]]
  $\mathbb{CP}^2 \mathbin{\#} \mathbb{CP}^2$ 的整系数同调群同构，
  但上同调的环结构不同。
  前者的 $H^2$ 有基 $u, v$，满足 $u^2 = v^2 = 0$，
  且 $u \smallsmile v$ 生成 $H^4$。
  后者的 $H^2$ 有基 $a, b$，满足 $a^2 = b^2$ 均为 $H^4$ 的生成元，
  且 $a \smallsmile b = 0$。

## 性质

### 函子性

::: proposition [函子性]
设 $A$ 是 Abel 群。对每个自然数 $n$，
奇异上同调给出从[[拓扑空间范畴]]到 [[Abel 群范畴]]的[[反变函子]]
\[
H^n (-; A) \colon \mathsf{Top}^{\mathrm{op}}
\longrightarrow \mathsf{Ab}.
\]
当 $A$ 为[[交换环]]时，也给出到 [[模范畴|$A$-模范畴]]的[[反变函子]]
\[
H^n (-; A) \colon \mathsf{Top}^{\mathrm{op}}
\longrightarrow A\text{-}\mathsf{Mod}.
\]
:::

::: proof
设 $f \colon X \to Y$ 是连续映射。
将奇异单形与 $f$ 复合给出链映射
\[
f_\# \colon C_\bullet (X; A) \longrightarrow C_\bullet (Y; A).
\]
对偶后得到上链映射
\[
f^\# \colon C^\bullet (Y; A) \longrightarrow C^\bullet (X; A),
\quad
f^\# (\varphi) = \varphi \circ f_\#.
\]
因此 $f^\#$ 将奇异闭上链映为奇异闭上链，
将奇异边界上链映为奇异边界上链，
从而诱导同态
\[
f^* \colon H^n (Y; A) \longrightarrow H^n (X; A).
\]
对连续映射 $X \xrightarrow{f} Y \xrightarrow{g} Z$，
有 $(g \circ f)^\# = f^\# \circ g^\#$；
对恒等映射有 $(\mathrm{id}_X)^\# = \mathrm{id}_{C^\bullet (X; A)}$。
取上同调即得函子性。
:::

### 同伦不变性

::: theorem [同伦不变性] {@thm:奇异上同调-同伦不变性}
设 $f, g \colon X \to Y$ 是同伦的连续映射。
则对每个自然数 $n$ 与 Abel 群 $A$，有
\[
f^* = g^* \colon H^n (Y; A) \longrightarrow H^n (X; A).
\]
:::

::: proof
在[[奇异同调]]的同伦不变性的证明中，我们用棱柱的构造给出了[[链同伦]]
$g_\# - f_\# = \partial P + P \partial$。
对其取 $\operatorname{Hom}_\mathbb{Z} (-, A)$ 后，
得到上链映射 $f^\#, g^\#$ 之间的上链同伦。
因此 $f^\#$ 与 $g^\#$ 在上同调群上诱导相同同态。
:::

::: corollary
若拓扑空间 $X$ 与 $Y$ 同伦等价，
则对每个自然数 $n$ 与 Abel 群 $A$，有同构
\[
H^n (X; A) \simeq H^n (Y; A).
\]
:::

### 胞腔上同调

<see>[[胞腔上同调]]</see>

若 $X$ 是 CW 复形，可用胞腔结构计算奇异上同调。
为 $X$ 的每个胞腔选定定向，以定向的 $n$ 维胞腔为基，
可得整数系数胞腔链复形 $C_\bullet^{\mathrm{CW}} (X; \mathbb{Z})$。
将它取对偶得到胞腔上链复形
\[
C^n_{\mathrm{CW}} (X; A)
= \operatorname{Hom}_{\mathbb{Z}} (C_n^{\mathrm{CW}} (X; \mathbb{Z}), A),
\]
其上同调记作 $H^n_{\mathrm{CW}} (X; A)$。

::: theorem {@thm:奇异上同调-胞腔上同调}
设 $X$ 是 CW 复形，$A$ 是 Abel 群。
则对每个自然数 $n$，存在自然同构
\[
H^n_{\mathrm{CW}} (X; A) \simeq H^n (X; A).
\]
:::

### 杯积

<see>[[杯积]]</see>

::: definition [杯积] {@def:奇异上同调-杯积}
设 $X$ 是拓扑空间，$A$ 是[[交换环]]。
若 $\alpha \in C^p (X; A)$，$\beta \in C^q (X; A)$，
记
\[
\begin{aligned}
  \iota_{0, \dotsc, p} \colon \Delta^p \longrightarrow \Delta^{p+q},
  & \quad
  (t_0, \dotsc, t_p)
  \longmapsto
  (t_0, \dotsc, t_p, 0, \dotsc, 0),
  \\
  \iota_{p, \dotsc, p+q}
  \colon \Delta^q \longrightarrow \Delta^{p+q},
  & \quad
  (u_0, \dotsc, u_q)
  \longmapsto
  (0, \dotsc, 0, u_0, \dotsc, u_q).
\end{aligned}
\]
定义 $(p+q)$ 维上链 $\alpha \smallsmile \beta$ 如下：
对 $(p+q)$ 维奇异单形 $\sigma \colon \Delta^{p+q} \to X$，定义
\[
(\alpha \smallsmile \beta) (\sigma)
=
\alpha (\sigma \circ \iota_{0, \dotsc, p}) \cdot
\beta (\sigma \circ \iota_{p, \dotsc, p+q}).
\]
则杯积满足 Leibniz 法则
\[
d (\alpha \smallsmile \beta)
= d\alpha \smallsmile \beta + (-1)^p \alpha \smallsmile d\beta,
\]
从而诱导良定的乘法
\[
\smallsmile \colon H^p (X; A) \otimes_A H^q (X; A)
\longrightarrow H^{p+q} (X; A).
\]
:::

杯积满足结合律，以 $1 \in H^0 (X; A)$ 为单位元，
且在上同调上分次交换：
对任意 $a \in H^p (X; A)$ 与 $b \in H^q (X; A)$，有
\[
a \smallsmile b = (-1)^{pq} b \smallsmile a.
\]
于是
\[
H^\bullet (X; A) = \bigoplus_{n \geq 0} H^n (X; A)
\]
成为分次交换 $A$-代数，称为 $X$ 的**奇异上同调环**。

若 $f \colon X \to Y$ 是连续映射，
则对 $a, b \in H^* (Y; A)$ 有
\[
f^* (a \smallsmile b) = f^* a \smallsmile f^* b,
\]
从而 $f^*$ 是分次 $A$-代数的同态。

### 帽积

<see>[[帽积]]</see>

对交换环 $A$，存在自然双线性映射
\[
\smallfrown \colon H^p (X; A) \otimes_A H_n (X; A)
\longrightarrow H_{n-p} (X; A).
\]
它使 $H_\bullet (X; A)$ 成为 $H^\bullet (X; A)$-模。

### 万有系数定理

<see>[[万有系数定理]]</see>

::: theorem [万有系数定理] {@thm:奇异上同调-万有系数定理}
设 $X$ 是拓扑空间，$A$ 是 Abel 群，$n$ 是自然数。
则有自然的[[短正合列]]
\[
0 \longrightarrow
\operatorname{Ext}^1_{\mathbb{Z}} (H_{n-1} (X; \mathbb{Z}), A)
\longrightarrow H^n (X; A)
\longrightarrow
\operatorname{Hom}_{\mathbb{Z}} (H_n (X; \mathbb{Z}), A)
\longrightarrow 0.
\]
该短正合列分裂，但分裂一般不是自然的。
因此存在不自然的同构
\[
H^n (X; A) \simeq
\operatorname{Hom}_{\mathbb{Z}} (H_n (X; \mathbb{Z}), A)
\oplus
\operatorname{Ext}^1_{\mathbb{Z}} (H_{n-1} (X; \mathbb{Z}), A).
\]
:::

### Künneth 公式

<see>[[Künneth 公式]]</see>

::: theorem [Künneth 公式] {@thm:奇异上同调-kunneth}
设 $A$ 是[[主理想整环]]，
$X, Y$ 是 [[CW 复形]]，且其中之一是有限 CW 复形。
则对每个自然数 $n$，存在自然[[短正合列]]
\[
0 \longrightarrow
\bigoplus_{p + q = n}
H^p (X; A) \otimes_A H^q (Y; A)
\longrightarrow H^n (X \times Y; A)
\longrightarrow
\bigoplus_{p + q = n + 1}
\operatorname{Tor}_1^A (H^p (X; A), H^q (Y; A))
\longrightarrow 0.
\]
该短正合列分裂，但分裂一般不是自然的。
因此存在不自然的同构
\[
H^n (X \times Y; A) \simeq
\bigoplus_{p + q = n}
H^p (X; A) \otimes_A H^q (Y; A)
\oplus
\bigoplus_{p + q = n + 1}
\operatorname{Tor}_1^A (H^p (X; A), H^q (Y; A)).
\]

特别地，若 $A = k$ 是[[域]]，则 $\operatorname{Tor}_1^A$ 项为 $0$，
于是有自然同构
\[
H^n (X \times Y; k) \simeq
\bigoplus_{p + q = n}
H^p (X; k) \otimes_k H^q (Y; k).
\]
在此同构下，上同调环满足
\[
H^\bullet (X \times Y; k) \simeq
H^\bullet (X; k) \otimes_k H^\bullet (Y; k),
\]
其中右边为分次交换 $k$-代数的张量积。
:::

该公式可由 [[Eilenberg–Zilber 定理]]与代数 Künneth 公式推出。
这里的有限性假设是为了保证取链复形的张量积与对偶交换。

### Mayer–Vietoris 序列

<see>[[Mayer–Vietoris 序列]]</see>

::: theorem [Mayer–Vietoris 序列]
设拓扑空间 $X$ 是开集 $U, V$ 的并。
则存在长正合列
\[
\cdots \longrightarrow H^n (X; A)
\longrightarrow H^n (U; A) \oplus H^n (V; A)
\longrightarrow H^n (U \cap V; A)
\longrightarrow H^{n+1} (X; A)
\longrightarrow \cdots .
\]
:::

### 与层上同调的比较

::: theorem [与层上同调的比较] {@thm:与层上同调的比较}
设 $X$ 为[[局部可缩空间]]，
$A$ 为 Abel 群，
$A_X$ 为其对应的 $X$ 上的[[常值层]]。
则对每个自然数 $n$，有自然同构
\[
H^n (X; A)
\simeq H^n (X, A_X),
\]
其中右边是 $A_X$ 的[[层上同调]]。
:::

见 [@Sella2016]。

## 参考文献

```bibliography
Sella2016:
  type: preprint
  author: 'Sella, Yehonatan'
  title: Comparison of sheaf cohomology and singular cohomology
  arxiv: '1602.06674'
```

```terms
奇异上同调:
  en: singular cohomology
  de: singuläre Kohomologie :f
  fr: cohomologie singulière :f
  ja: 特<とく>異<い>コホモロジー
  ko: 특이 코호몰로지 (特異 cohomology)
奇异上链:
  en: singular cochain
  de: singuläre Kokette :f
  fr: cochaîne singulière :f
  ja: 特<とく>異<い>コチェイン
  ko: 특이 공사슬 (特異 共사슬)
奇异闭上链:
  en: singular cocycle
  de: singulärer Kozykel :m
  fr: cocycle singulier :m
  ja: 特<とく>異<い>コサイクル
  ko: 특이 코사이클 (特異 cocycle)
奇异边界上链:
  en: singular coboundary
  de: singulärer Korand :m
  fr: cobord singulier :m
  ja: 特<とく>異<い>コバウンダリ
  ko: 특이 코바운더리 (特異 coboundary)
```
