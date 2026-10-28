---
title: 张量场
categories: [微分几何]
navboxes: [微分几何]
---

<problems>
- “定义”一节第二个定义中，等式右边的后 $q$ 个因子写作 $\mathrm{T} M$，似乎应为截面模 $\Gamma(\mathrm{T} M)$；左边的张量积似乎也应取在 $C^\infty(M)$ 上。
- “性质”一节中坐标变换公式的指标似乎有误：两边使用相同的自由指标 $i_1, \dots, i_p$、$j_1, \dots, j_q$，又对它们求和；并且所列的四组基中 $\omega_i$ 的指标位置与前文 $\omega^i$ 不一致。
</problems>

**张量场**是向量场的推广，有时简称**张量**。
对[[光滑流形]] $M$ 而言，
向量场是 $M$ 的[[切丛]] $\mathrm{T} M$ 的光滑[[截面]]，
也就是为每个点 $x \in M$ 赋予[[切空间]] $\mathrm{T}_x M$ 中的一个向量，
使得它随点光滑地变化。
**$(p,q)$-张量场**则是 $p$ 个[[余切丛]]与 $q$ 个切丛的张量积
$(\mathrm{T}^* M)^{\otimes p} \otimes (\mathrm{T} M)^{\otimes q}$
的光滑截面，也就是为每个点赋予切空间 $\mathrm{T}_x M$ 上的 $(p, q)$-张量，
使得它随点光滑地变化。
粗略地说，流形上的张量大致就是“吃掉 $p$ 个向量场，就能吐出 $q$ 个向量场”的对象。
和线性代数中的情形类似，给定一张局部坐标卡后，
也可以将张量场写成分量形式。

张量场在物理学中很常用，因为很多[[物理量]]是[[时空流形]]上的张量场。
例如，[[电磁场张量]]是时空流形上的反对称 $(2, 0)$-张量场，也就是 [[微分形式|$2$-形式]]；
[[能动张量]]是时空流形上的对称 $(2, 0)$-张量场；
[[引力张量]]是时空流形上的对称 $(2, 0)$-张量场，即对称[[双线性型]]的场。
但是，有些具有等变性的物理量并不是张量场，例如[[旋量场]]。

## 定义

::: definition {@def-tensor-manifold}
对[[光滑流形]] $M$，
记它的[[切丛]]为 $\mathrm{T} M$，对自然数 $p, q$，
$M$ 上的 **$(p,q)$-张量场**，简称 **$(p,q)$-张量**是[[向量丛]]的[[张量积]]
\[
(\mathrm{T}^* M)^{\otimes p} \otimes (\mathrm{T} M)^{\otimes q} =
\underbrace{(\mathrm{T}^* M) \otimes \dots \otimes (\mathrm{T}^* M)}_{p\ \text{个}}
\otimes \underbrace{\mathrm{T} M \otimes \dots \otimes \mathrm{T} M}_{q\ \text{个}}.
\]
的光滑[[截面]]。
:::

::: remark
可以看出，流形上的张量在一点 $p$ 处的取值即为此点处切空间 $\mathrm{T}_p M$ 上的张量，
截面的光滑性即是说这一族张量光滑地变化。
:::

通过 [[Serre–Swan 定理]]，将向量丛和它的截面构成的模等同起来，
可以得到张量积的一种等价描述。使用这种描述也可以定义代数簇上的张量。

::: definition
流形 $M$ 上的 **$(p,q)$-张量**是[[张量积]]
\[
\Gamma(\mathrm{T}^* M)^{\otimes p} \otimes \Gamma(\mathrm{T} M)^{\otimes q} =
\underbrace{\Gamma(\mathrm{T}^* M) \otimes_R \dots \otimes_R \Gamma(\mathrm{T}^* M)}_{p\ \text{个}}
\otimes_R \underbrace{\mathrm{T} M \otimes_R \dots \otimes_R \mathrm{T} M}_{q\ \text{个}}.
\]
中的一个元素，其中 $R$ 表示 $M$ 上的光滑函数环 $C^\infty(M)$，
$\Gamma$ 表示向量丛的所有截面构成的 $C^\infty(M)$-[[模]]。
:::

同样通过张量积的性质，可以将张量和 $C^\infty(M)$-线性映射一一对应，
见 @tensor-multilinear-manifold。

有时也会给流形上的张量加上一些要求，例如对称、交错等。

::: definition
有自然的[[向量丛]]间的嵌入
\[
\begin{gathered}
  \operatorname{Sym}^n(\mathrm{T}^* M) \hookrightarrow (\mathrm{T}^* M)^{\otimes n} \\
  \wedge^n(\mathrm{T}^* M) \hookrightarrow (\mathrm{T}^* M)^{\otimes n}.
\end{gathered}
\]
称 $(p, 0)$-张量 $T$ 为 **$p$ 次对称张量**，如果此截面落在子丛
$\operatorname{Sym}^p(\mathrm{T}^* M)$ 中；
称 $(p, 0)$-张量 $T$ 为 **$p$ 次反对称张量**，如果此截面落在子丛
$\wedge^p(\mathrm{T}^* M)$ 中。
:::

::: definition
由定义，有自然的商映射
\[
\begin{gathered}
  (\mathrm{T} M)^{\otimes p} \twoheadrightarrow \operatorname{Sym}^p(\mathrm{T} M) \\
  (\mathrm{T} M)^{\otimes p} \twoheadrightarrow \wedge^p(\mathrm{T} M).
\end{gathered}
\]
称 $(p, 0)$-张量 $T$ 为 **$p$ 次对称张量**，如果
$T$ 穿过 $\operatorname{Sym}^p(\mathrm{T} M)$；
称 $(p, 0)$-张量 $T$ 为 **$p$ 次交错张量**，如果
$T$ 穿过 $\wedge^p(\mathrm{T} M)$。
:::

## 例子

对给定的流形 $M$，

- $(0, 0)$-张量是它上面的光滑函数，也称为[[标量场]]；
- $(0, 1)$-张量场就是[[向量场]]；
- $(1, 0)$-张量场就是 [[微分形式|$1$-形式]]；
- $p$ 次交错张量场就是 [[微分形式|$p$-形式]]。
- [[Riemann 度量]]是 $2$ 次对称张量场。
- 如给定其切丛上的联络（例如 [[Levi-Civita 联络]]），
  可以定义[[曲率张量]]，它是 $(3, 1)$-张量场。
  但联络本身不是张量场，因为 $\nabla_X Y$ 对 $Y$ 并不是 $C^\infty(M)$-线性的。

## 性质

流形上张量的性质与向量空间上张量的相应性质基本相同。

::: proposition [与多重线性映射的关系] {@tensor-multilinear-manifold}
$M$ 上的 $(p, q)$-张量 $T$ 与
[[多重线性映射|多重 $C^\infty(M)$-线性映射]]
\[
\underbrace{\Gamma(\mathrm{T} M) \times \cdots \times \Gamma(\mathrm{T} M)}_{p\ \text{个}} \times
\underbrace{\Gamma(\mathrm{T}^* M) \times \cdots \times \Gamma(\mathrm{T}^* M)}_{q\ \text{个}} \to C^\infty(M)
\]
一一对应。
:::

同样通过此一对应，可以将张量写成分量形式。

::: proposition [分量表示] {@represent-manifold}
取 $M$ 的一张[[坐标卡]] $U \to \mathbb{R}^n$，
$\mathbb{R}^n$ 上的标准[[向量场]]和 [[微分形式|$1$-形式]]拉回至 $U$ 上，
它给出 $U$ 的向量场 $\{ e_1, \dots, e_n \}$ 和 $1$-形式
$\{ \omega^1, \cdots, \omega^n \}$。
对 $(p, q)$-张量 $T$，将它对应于相应的多重线性映射，定义
\[
T_{i_1 \dots i_p}^{j_1 \dots j_q} = T(e_{i_1}, \dots, e_{i_p}, \omega^{j_1}, \dots, \omega^{j_q}), \quad
i_1, \dots, i_p, j_1, \dots, j_q \in \{ 1, \dots, n \}.
\]
它是 $U$ 上的函数，
则对任意向量场以及微分形式
\[
v_j = \sum \alpha^{i}_j e_i, \ \ \eta^j = \sum \beta_{i}^j \omega^i,
\quad \alpha^i_j, \beta_i^j \in \mathbb{R}
\]
可以计算出张量作用在其上的取值：
\[
T(v_1, \dots, v_p, \eta^1, \cdots, \eta^q) =
\sum_{i, j} \alpha^{i_1}_1 \cdots \alpha^{i_p}_p \beta_{j_1}^1 \cdots \beta_{j_q}^q
T_{i_1 \dots i_p}^{j_1 \dots j_q}.
\]
因此张量的性质完全被其分量所体现，可以将张量记为（在固定一张坐标卡后）
\[
T = (T_{i_1 \dots i_p}^{j_1 \dots j_q}).
\]
:::

张量的表现形式在[[坐标卡]]的变换下有等变性。

::: proposition
对流形 $M$ 中点 $x$ 的邻域的两张坐标卡 $U_1 \to \mathbb{R}^n$、$U_2 \to \mathbb{R}^n$，
相应向量场与微分形式在点 $x$ 处的拉回为 $\{ e_1, \cdots, e_n \}$，
$\{ \omega_1, \cdots, \omega_n \}$，
$\{ e_1', \cdots, e_n' \}$，$\{ \omega'_1, \cdots, \omega'_n \}$，
设相应的张量分量为 $T_{i_1 \dots i_p}^{j_1 \dots j_q}$ 和
${T'}_{i_1 \dots i_p}^{j_1 \dots j_q}$，
设坐标卡之间的 [[Jacobi 矩阵]] 为 $A$，则 $e_i' = \sum A_i^j e_j$，
$B = A^{-1}$，
则有
\[
{T'}_{i_1 \dots i_p}^{j_1 \dots j_q} =
\sum_{i,j} T_{i_1 \dots i_p}^{j_1 \dots j_q}
A^{i_1}_1 \cdots A^{i_p}_p B_{j_1}^1 \cdots B_{j_q}^q.
\]
:::

张量的对称与交错也在分量形式中被体现。

::: proposition
固定 $M$ 的一张坐标卡，
$(p, 0)$-张量 $T$ 是对称的，
当且仅当对任意[[置换]] $\sigma \in \mathfrak{S}_p$，
\[
T_{i_1 \dots i_p} = T_{\sigma(i_1) \dots \sigma(i_p)}.
\]
$(p, 0)$-张量 $T$ 是交错的，
当且仅当对任意[[置换]] $\sigma \in \mathfrak{S}_p$，
\[
T_{i_1 \dots i_p} = \operatorname{sgn}(\sigma) T_{\sigma(i_1) \dots \sigma(i_p)}.
\]
其中 $\operatorname{sgn}$ 表示置换的符号。
:::

```terms
张量场:
  en: tensor field
  de: Tensorfeld :n
  fr: champ tensoriel :m
  grc: τανυστοπέδιον :n
  la: campus tensorialis :m
```
