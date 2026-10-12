---
title: 胞腔同调
aliases: [胞腔上同调]
categories: [同调论]
navboxes: [代数拓扑]
---

在[[代数拓扑]]中，**胞腔同调**是计算 [[CW 复形]]的[[普通同调]]（即[[奇异同调]]）的方法，
也常常是最简便的计算方法。
它由 CW 复形的胞腔结构直接给出[[链复形]]：
其 $n$ 维链群是 $n$ 维胞腔生成的[[自由 Abel 群]]，边界映射由胞腔的粘贴映射决定。

类似地，**胞腔上同调**可以用于计算
[[CW 复形]]的[[普通上同调]]（即[[奇异上同调]]），
它由胞腔链复形的[[对偶链复形]]给出。

## 定义

### 胞腔链复形

::: definition [胞腔链复形，胞腔同调]
设 $X$ 是 [[CW 复形]]，$A$ 是 [[Abel 群]]。
对[[自然数]] $n$，记 $X^{(n)}$ 为 $X$ 的 $n$ 维骨架，
并约定 $X^{(-1)} = \varnothing$。
则 $X$ 的 $A$-系数 $n$ 维**胞腔链**构成的 Abel 群定义为[[相对同调]]
\[
C_n^{\mathrm{CW}} (X; A)
= H_n (X^{(n)}, X^{(n-1)}; A).
\]
事实上，选定每个 $n$ 维胞腔的[[定向]]后，有同构
\[
C_n^{\mathrm{CW}} (X; A)
\simeq \bigoplus_{e \in E_n} A \cdot e,
\]
其中 $E_n$ 是 $X$ 的 $n$ 维胞腔集合。
当 $A$ 为[[交换环]]时，此即 $X$ 的 $n$ 维胞腔生成的[[自由模|自由 $A$-模]]。

胞腔边界映射
\[
\partial_n^{\mathrm{CW}} \colon
C_n^{\mathrm{CW}} (X; A) \longrightarrow C_{n-1}^{\mathrm{CW}} (X; A)
\]
定义为复合
\[
H_n (X^{(n)}, X^{(n-1)}; A)
\xrightarrow{\partial}
H_{n-1} (X^{(n-1)}; A)
\longrightarrow
H_{n-1} (X^{(n-1)}, X^{(n-2)}; A),
\]
其中第一个映射是[[空间对]]
$(X^{(n)}, X^{(n-1)})$ 的[[相对同调长正合列]]中的连接映射，
第二个映射是到相对同调群的自然映射。可以验证边界映射满足
$\partial_{n-1}^{\mathrm{CW}} \circ \partial_n^{\mathrm{CW}} = 0$。
因此
\[
(C_\bullet^{\mathrm{CW}} (X; A), \partial^{\mathrm{CW}})
\]
构成链复形，称为 $X$ 的**胞腔链复形**。

$X$ 的 $n$ 阶**胞腔同调**定义为该链复形的 $n$ 阶[[链同调]]：
\[
H_n^{\mathrm{CW}} (X; A)
= \ker \partial_n^{\mathrm{CW}}
/ \operatorname{im} \partial_{n+1}^{\mathrm{CW}}.
\]
当 $A$ 为[[交换环]]时，它具有自然的 $A$-[[模]]结构。
:::

### 胞腔边界公式

上述抽象定义的胞腔边界映射 $\partial_n^{\mathrm{CW}}$
可更具体地由胞腔粘贴映射的[[映射度]]计算。
设已为各胞腔选取定向。令 $e_\alpha^n$ 是 $X$ 的 $n$ 维胞腔，
其粘贴映射为
\[
\varphi_\alpha \colon S^{n-1} \longrightarrow X^{(n-1)}.
\]
若 $e_\beta^{n-1}$ 是 $(n-1)$ 维胞腔，考虑复合映射
\[
S^{n-1}
\xrightarrow{\varphi_\alpha}
X^{(n-1)}
\longrightarrow
X^{(n-1)} / X^{(n-2)}
\simeq \bigvee_\gamma S^{n-1}
\xrightarrow{p_\beta} S^{n-1},
\]
其中 $\vee$ 表示[[单点并空间|单点并]]，
$p_\beta$ 是到对应于 $e_\beta^{n-1}$ 的球面的投影，
也就是把其他球面都压缩成一个点的映射。
该复合映射的映射度记为 $d_{\alpha \beta}$。则
\[
\partial_n^{\mathrm{CW}} (e_\alpha^n)
= \sum_\beta d_{\alpha \beta} e_\beta^{n-1}.
\]
这里的和式取遍所有 $n-1$ 维胞腔。

### 胞腔上链复形

::: definition [胞腔上链复形，胞腔上同调]
设 $X$ 是 CW 复形，$A$ 是 Abel 群。
$X$ 中 $A$-系数的 $n$ 维**胞腔上链**构成的 Abel 群定义为
\[
C^n_{\mathrm{CW}} (X; A)
= \operatorname{Hom}_\mathbb{Z} (C_n^{\mathrm{CW}} (X; \mathbb{Z}), A)
\simeq \prod_{e \in E_n} A,
\]
其中 $E_n$ 是 $X$ 的 $n$ 维胞腔集合。

定义胞腔余边界映射
\[
d^n_{\mathrm{CW}} \colon C^n_{\mathrm{CW}} (X; A)
\longrightarrow C^{n+1}_{\mathrm{CW}} (X; A)
\]
为胞腔边界映射的对偶，即
\[
(d^n_{\mathrm{CW}} \phi) (c)
= \phi (\partial_{n+1}^{\mathrm{CW}} c),
\]
其中 $\phi \in C^n_{\mathrm{CW}} (X; A)$，
$c \in C_{n+1}^{\mathrm{CW}} (X; A)$。因为
$(\partial^{\mathrm{CW}})^2 = 0$，有
$d^{n+1}_{\mathrm{CW}} \circ d^n_{\mathrm{CW}} = 0$。
因此
$(C^\bullet_{\mathrm{CW}} (X; A), d_{\mathrm{CW}})$ 构成[[上链复形]]，
称为 $X$ 的**胞腔上链复形**。

$X$ 的 $A$-系数 $n$ 阶**胞腔上同调**定义为
\[
H^n_{\mathrm{CW}} (X; A)
= \ker d^n_{\mathrm{CW}}
/ \operatorname{im} d^{n-1}_{\mathrm{CW}}.
\]
当 $A$ 为[[交换环]]时，它具有自然的 $A$-[[模]]结构。
:::

## 例子

### 单点空间

[[单点空间]] $*$ 有一个 $0$ 维胞腔，没有正维胞腔。因此
$C_0^{\mathrm{CW}} (*; \mathbb{Z}) \simeq \mathbb{Z}$，其余胞腔链群为 $0$。
于是
\[
H_k^{\mathrm{CW}} (*; \mathbb{Z}) \simeq
\begin{cases}
  \mathbb{Z}, & k = 0, \\
  0, & k > 0.
\end{cases}
\]
其胞腔上同调群具有相同描述。

### 球面

对 $n \geq 1$，[[球面]] $S^n$ 有 CW 结构：一个 $0$ 维胞腔
和一个 $n$ 维胞腔。胞腔链复形仅 $C_0 \simeq \mathbb{Z}$ 与
$C_n \simeq \mathbb{Z}$ 非零，且所有边界映射为零。因此
\[
H_k^{\mathrm{CW}} (S^n; \mathbb{Z}) \simeq
\begin{cases}
  \mathbb{Z}, & k = 0, n, \\
  0, & k \neq 0, n.
\end{cases}
\]
其胞腔上同调群具有相同描述。

### 实射影空间

$m$ 维[[实射影空间]] $\mathbb{RP}^m$ 有标准 CW 结构：
每个维数 $0, 1, \dotsc, m$ 恰有一个胞腔。对 $k \geq 1$，
胞腔边界公式给出
\[
\partial_k =
\begin{cases}
  0, & k \text{ 为奇数}, \\
  2, & k \text{ 为偶数}.
\end{cases}
\]
这里把 $\partial_k$ 视为从 $\mathbb{Z}$ 到 $\mathbb{Z}$ 的同态。因此不难直接得出
\[
H_k^{\mathrm{CW}} (\mathbb{RP}^m; \mathbb{Z}) \simeq
\begin{cases}
  \mathbb{Z}, & k = 0, \\
  \mathbb{Z}, & k = m \text{ 且 } m \text{ 为奇数}, \\
  \mathbb{Z} / 2\mathbb{Z}, & 0 < k < m \text{ 且 } k \text{ 为奇数}, \\
  0, & \text{其余情形}.
\end{cases}
\]
对胞腔上同调，类似的计算给出
\[
H^k_{\mathrm{CW}} (\mathbb{RP}^m; \mathbb{Z}) \simeq
\begin{cases}
  \mathbb{Z}, & k = 0, \\
  \mathbb{Z}, & k = m \text{ 且 } m \text{ 为奇数}, \\
  \mathbb{Z} / 2\mathbb{Z}, & 0 < k \leq m \text{ 且 } k \text{ 为偶数}, \\
  0, & \text{其余情形}.
\end{cases}
\]
若取[[有限域|二元域]] $\mathbb{F}_2$ 为系数，则所有胞腔边界映射都为零。
因此 $H_k^{\mathrm{CW}} (\mathbb{RP}^m; \mathbb{F}_2)$ 与
$H^k_{\mathrm{CW}} (\mathbb{RP}^m; \mathbb{F}_2)$ 在
$0 \leq k \leq m$ 时均同构于 $\mathbb{F}_2$，其余维数中同调群为零。

### 复射影空间

$m$ 维[[复射影空间]] $\mathbb{CP}^m$ 有标准 CW 结构：
维数 $0, 2, 4, \dotsc, 2m$ 各有一个胞腔，没有奇数维胞腔。
因此所有胞腔边界映射都为零，从而
\[
H_k^{\mathrm{CW}} (\mathbb{CP}^m; \mathbb{Z}) \simeq
\begin{cases}
  \mathbb{Z}, & k = 0, 2, 4, \dotsc, 2m, \\
  0, & \text{其余情形}.
\end{cases}
\]
其胞腔上同调群具有相同描述。

### 闭曲面

设 $\Sigma_g$ 是亏格 $g$ 的[[可定向闭曲面]]。
它具有以下 CW 结构：一个 $0$ 维胞腔，$2g$ 个 $1$ 维胞腔
$a_1, b_1, \dotsc, a_g, b_g$，以及一个 $2$ 维胞腔，
$2$ 维胞腔沿环路
\[
a_1 b_1 a_1^{-1} b_1^{-1} \cdots a_g b_g a_g^{-1} b_g^{-1}
\]
粘贴。由胞腔边界公式知 $\partial_2 = 0$，故
\[
H_k^{\mathrm{CW}} (\Sigma_g; \mathbb{Z}) \simeq
\begin{cases}
  \mathbb{Z}, & k = 0, 2, \\
  \mathbb{Z}^{2g}, & k = 1, \\
  0, & \text{其余情形}.
\end{cases}
\]
胞腔上同调群满足同样的公式。

设 $N_h$ 是 $h$ 个[[实射影平面]]的[[连通和]]。
它具有以下 CW 结构：一个 $0$ 维胞腔，$h$ 个 $1$ 维胞腔，和一个 $2$ 维胞腔，
$2$ 维胞腔沿环路 $a_1^2 \cdots a_h^2$ 粘贴。此时
$\partial_2 (1) = 2(a_1 + \cdots + a_h)$，因而
\[
H_1^{\mathrm{CW}} (N_h; \mathbb{Z}) \simeq \mathbb{Z}^{h-1} \oplus \mathbb{Z} / 2\mathbb{Z},
\quad
H_2^{\mathrm{CW}} (N_h; \mathbb{Z}) = 0.
\]
相应地，
$H^1_{\mathrm{CW}} (N_h; \mathbb{Z}) \simeq \mathbb{Z}^{h-1}$ 且
$H^2_{\mathrm{CW}} (N_h; \mathbb{Z}) \simeq \mathbb{Z} / 2\mathbb{Z}$。

## 性质

### 与奇异同调、上同调的比较

::: theorem [胞腔同调比较定理] {@thm:胞腔同调-比较}
设 $X$ 是 CW 复形，$A$ 是 Abel 群。则对每个自然数 $n$，
存在自然同构
\[
H_n^{\mathrm{CW}} (X; A) \simeq H_n (X; A).
\]
:::

::: theorem [胞腔上同调比较定理] {@thm:胞腔上同调-比较}
设 $X$ 是 CW 复形，$A$ 是 Abel 群。则对每个自然数 $n$，
存在自然同构
\[
H^n_{\mathrm{CW}} (X; A) \simeq H^n (X; A).
\]
:::

### Euler 示性数

::: proposition [胞腔计算 Euler 示性数]
设 $X$ 是有限 CW 复形，$c_n$ 是 $X$ 的 $n$ 维胞腔个数。
则 $X$ 的 [[Euler 示性数]]满足
\[
\chi (X)
= \sum_n (-1)^n c_n.
\]
:::

::: proof
我们有 $\operatorname{rank} C_n^{\mathrm{CW}} (X; \mathbb{Z}) = c_n$，
而对有限生成 Abel 群构成的链复形，链群秩的交错和等于同调群秩的交错和。
再由 @thm:胞腔同调-比较 即得结论。
:::

```terms
胞腔同调:
  en: cellular homology
  de: zelluläre Homologie :f
  fr: homologie cellulaire :f
  ja: 胞<ほう>体<たい>ホモロジー
  ko: 세포 호몰로지 (細胞 homology)
胞腔链复形:
  en: cellular chain complex
  de: zellulärer Kettenkomplex :m
  fr: complexe de chaînes cellulaires :m
  ja: 胞<ほう>体<たい>鎖<さ>複<ふく>体<たい>
  ko: 세포 사슬 복합체 (細胞 사슬 複合體)
胞腔上同调:
  en: cellular cohomology
  de: zelluläre Kohomologie :f
  fr: cohomologie cellulaire :f
  ja: 胞<ほう>体<たい>コホモロジー
  ko: 세포 코호몰로지 (細胞 cohomology)
胞腔上链复形:
  en: cellular cochain complex
  de: zellulärer Kokettenkomplex :m
  fr: complexe de cochaînes cellulaires :m
  ja: 胞<ほう>体<たい>双<そう>対<つい>鎖<さ>複<ふく>体<たい>
  ko: 세포 공사슬 복합체 (細胞 共사슬 複合體)
```
