---
title: 分次环
categories: [一般环论]
navboxes: [非交换代数]
---

在[[环|环论]]和[[代数几何]]中，**分次环**是带有“次数”分解的环。
大致来说，一个分次环是一个可以分解为若干个次数部分的环，
并且乘法与次数相容：次数为 $\gamma$ 的元素乘以次数为 $\delta$ 的元素后，
得到次数为 $\gamma+\delta$ 的元素。

分次环来自于诸多常见的数学现象。
例如，多项式环 $R[x]$ 中的多项式可以按照次数分解为齐次部分：
常数项 $R$、一次齐次部分 $Rx$、二次齐次部分 $Rx^2$ 等等。
两个齐次多项式相乘时，它们的次数相加。
因此多项式环天然带有分次结构。

类似地，在[[微分形式]]、[[张量代数]]以及[[射影簇|射影几何]]的研究中，
都会自然地涉及到分次结构。
分次环的语言正是为了统一描述这类“按次数分解，且运算保持次数规律”的数学对象。

## 定义

::: definition [分次环、分次模与齐次理想]
对于交换幺半群 $(\Gamma,+,0)$，
- **$\Gamma$-分次环**是指环 $A$ 连同加法群直和分解
  \[
  A=\bigoplus_{\gamma\in\Gamma}A_\gamma,
  \]
  满足 $1\in A_0$ 且
  $A_\gamma A_\delta\subset A_{\gamma+\delta}$。

  $A_\gamma$ 中的元素称为次数为 $\gamma$ 的**齐次元**。
  若 $x\in A_\gamma$ 且 $x\neq 0$，也记作 $\deg(x)=\gamma$。
  对于 $0$ 通常不定义次数。

- 对于 $\Gamma$-分次环 $A$，一个 **$\Gamma$-分次 $A$-模**
  是指 $A$-模 $M$ 连同加法群直和分解
  \[
  M=\bigoplus_{\gamma\in\Gamma}M_\gamma,
  \]
  满足 $A_\gamma M_\delta\subset M_{\gamma+\delta}$。

- 理想 $I\subset A$ 称为**齐次理想**，是指它作为 $A$ 的子模满足
  \[
  I=\bigoplus_{\gamma\in\Gamma}(I\cap A_\gamma).
  \]
  等价地，若 $f\in I$，则 $f$ 的每个齐次分量仍属于 $I$。

:::

## 例子

::: example [平凡分次]
任意环 $A$ 都可以看成 $\Gamma$-分次环：令
\[
A_0 = A,
\qquad
A_\gamma = 0
\quad
(\gamma \neq 0).
\]
这称为 $A$ 的**平凡分次**。
:::

::: example [多项式环]
设 $k$ 是环。多项式环 $k[x]$ 有自然的 $\mathbb{N}$-分次结构：
\[
k[x]
=
\bigoplus_{n \geq 0} kx^n .
\]
其中 $kx^n$ 是次数为 $n$ 的部分。

更一般地，多项式环 $k[x_1,\ldots,x_r]$ 有自然的 $\mathbb{N}$-分次结构。
其 $d$ 次部分由所有 $d$ 次齐次多项式组成：
\[
k[x_1,\ldots,x_r]_d
=
\left\{
  \sum a_{i_1,\ldots,i_r}
  x_1^{i_1}\cdots x_r^{i_r}
  \ \middle|
  i_1 + \cdots + i_r = d
\right\}.
\]
:::

::: example [Laurent 多项式环]
Laurent 多项式环 $k[x,x^{-1}]$ 有自然的 $\mathbb{Z}$-分次结构：
\[
k[x,x^{-1}]
=
\bigoplus_{n \in \mathbb{Z}} kx^n .
\]
其中 $x^n$ 的次数为 $n$。
:::

::: example [加权多项式环]
设 $w_1,\ldots,w_r \in \mathbb{N}$。
在多项式环 $k[x_1,\ldots,x_r]$ 中规定
\[
\deg(x_i) = w_i .
\]
则单项式 $x_1^{a_1}\cdots x_r^{a_r}$ 的次数就变为 $a_1w_1 + \cdots + a_rw_r$。
这给出 $k[x_1,\ldots,x_r]$ 的一个 $\mathbb{N}$-分次结构，
称为**加权分次**。
:::

::: example [对称代数]
设 $M$ 是 $k$-[[模]]。其[[对称代数]]
$\operatorname{Sym}_k(M)$ 有自然的 $\mathbb{N}$-分次结构：
\[
\operatorname{Sym}_k(M)
=
\bigoplus_{d \geq 0}
\operatorname{Sym}_k^d(M).
\]
这里 $\operatorname{Sym}_k^d(M)$ 是 $M$ 的 $d$ 次[[对称幂]]。
:::

## 基本性质

令 $A$ 为 $\Gamma$-分次环，$M$ 为 $\Gamma$-分次 $A$-模。
则有以下基本性质。

1. $A_0$ 是 $A$ 的[[子环]]，每个 $A_\gamma$ 都是 $A_0$-模；
   同样地，每个 $M_\gamma$ 也是 $A_0$-模。

2. 若 $\varphi:\Gamma\to\Delta$ 是交换幺半群同态，
   则 $A$ 可按 $\varphi$ 重新看成 $\Delta$-分次环：
   其 $\delta$ 次部分为
   \[
   (\varphi_*A)_\delta
   =
   \bigoplus_{\varphi(\gamma)=\delta}A_\gamma .
   \]
   分次模也可用同样方式改变分次。
   例如，$\mathbb{N}$-分次环可视为 $\mathbb{Z}$-分次环，只需令负次数部分为 $0$。

3. 理想 $I\subset A$ 是齐次理想当且仅当它由齐次元生成。

4. 若 $I\subset A$ 是齐次理想，则商环 $A/I$ 自然继承
   $\Gamma$-分次结构，且自然满射 $A\twoheadrightarrow A/I$
   保持分次。此时
   \[
   (A/I)_\gamma
   =
   (A_\gamma+I)/I
   \cong
   A_\gamma/(I\cap A_\gamma).
   \]
   类似地，$M/IM$ 自然成为分次 $A/I$-模。

5. 若 $S\subset A$ 由齐次元构成，则局部化 $S^{-1}A$
   带有自然分次：齐次分式 $a/s$ 的次数为
   $\deg(a)-\deg(s)$。
   因此当 $\Gamma$ 是群时，这给出 $S^{-1}A$ 的
   $\Gamma$-分次结构；一般情形下，也可将其看成取值于
   $\Gamma$ 的群化的分次结构。
   对分次模 $M$，局部化 $S^{-1}M$ 也有相同的分次结构。

::: theorem
对于交换 $\mathbb{N}$-分次环 $A=\bigoplus_{n\geq 0}A_n$。
有 $A$ 是 [[Noether 环]] 当且仅当 $A_0$ 是 Noether 环
且 $A$ 作为 $A_0$-代数有限生成。
:::

::: proof
若 $A_0$ Noether 且 $A$ 是有限生成 $A_0$-代数，
则 $A$ 是某个多项式环 $A_0[x_1,\ldots,x_r]$ 的商。
由 [[Hilbert 基定理]]，$A$ 是 Noether 环。

反过来，设 $A$ Noether。令 $A_+=\bigoplus_{n>0}A_n$。

- 由于 $A/A_+\cong A_0$，
  故 $A_0$ Noether。
- 又因 $A_+$ 是有限生成齐次理想，可取齐次生成元
  $a_1,\ldots,a_r$。设 $B=A_0[a_1,\ldots,a_r]$。
  对次数归纳可得 $A_n\subset B$ 对所有 $n$ 成立：
  若 $\alpha\in A_n$ 且 $n>0$，将
  $\alpha=\sum_i b_i a_i$ 取 $n$ 次齐次部分后，
  可设 $b_i$ 齐次且 $\deg b_i<n$，
  于是由归纳假设 $b_i\in B$，故 $\alpha\in B$。
  因此 $A=B$。

:::

```terms
分次环:
  en: graded ring
分次模:
  en: graded module
```
