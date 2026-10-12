---
title: Frobenius 代数
categories: [代数论]
notices:
  - name: 问题
    items:
      - “与二维拓扑量子场论的对应”一节需要扩充。
navboxes: [代数结构]
---

**Frobenius 代数**是一种[[代数结构]]，
它同时具有[[代数 (代数结构)|代数]]和[[余代数]]的结构，且二者相容。
这里的相容条件不同于 [[Hopf 代数]]。

从交换 Frobenius 代数出发，可以构造二维[[拓扑量子场论]]。
更准确地说，取值于有限维 $k$-向量空间范畴的二维定向拓扑量子场论，
与有限维交换 Frobenius $k$-代数一一对应。

## 定义

::: definition [Frobenius 代数]
[[域]] $k$ 上的 **Frobenius 代数**是五元组 $(A, m, \iota, \Delta, \epsilon)$，
其中

- $(A, m, \iota)$ 是 $k$-[[代数]]。
- $(A, \Delta, \epsilon)$ 是 $k$-[[余代数]]。

使下面图表交换：
\[
\begin{tikzcd}
  & {A \otimes A \otimes A} & \\
  {A \otimes A} & A & {A \otimes A} \\
  & {A \otimes A \otimes A}
  \arrow["{\mathrm{id}_A \otimes m}", from=1-2, to=2-3]
  \arrow["{\Delta \otimes \mathrm{id}_A}", from=2-1, to=1-2]
  \arrow["m"', from=2-1, to=2-2]
  \arrow["{\mathrm{id}_A \otimes \Delta}"', from=2-1, to=3-2]
  \arrow["\Delta"', from=2-2, to=2-3]
  \arrow["{m \otimes \mathrm{id}_A}"', from=3-2, to=2-3]
\end{tikzcd}
\]

在不引起歧义时，上述五元组简记为 $A$。
:::

Frobenius 代数通常要求 $A$ 是有限维 $k$-向量空间。
上述定义也可以等价地表述为：

::: definition
有限维幺结合 $k$-代数 $A$ 是 Frobenius 代数，
当且仅当存在一个 $k$-线性映射
\[
\epsilon\colon A\longrightarrow k,
\]
使双线性型
\[
\langle a,b\rangle=\epsilon(ab)
\]
是非退化的。
这样的 $\epsilon$ 称为一个 **Frobenius 线性泛函**。
:::

::: definition
**交换 Frobenius 代数**指的是乘法 $m$ 为[[交换运算]]的代数。
:::

## 例子

::: example
域 $k$ 自身是一个交换 Frobenius $k$-代数。
其乘法和单位映射取通常的乘法与单位映射，并令
\[
\Delta(1)=1\otimes 1,
\qquad
\epsilon(1)=1.
\]
:::

::: example [截断多项式代数]
对任意正整数 $n$，[[截断多项式]]代数
\[
A=k[x]/(x^n)
\]
是一个交换 Frobenius 代数。
定义线性泛函
\[
\epsilon(x^j)
=
\begin{cases}
  1, & j=n-1,\\
  0, & 0\leq j<n-1.
\end{cases}
\]
则双线性型 $\langle a,b\rangle=\epsilon(ab)$ 非退化。
相应的余乘法由
\[
\Delta(1)
=
\sum_{i=0}^{n-1}x^i\otimes x^{n-1-i},
\qquad
\Delta(a)=(a\otimes 1)\Delta(1)
\]
给出。当 $n\geq 2$ 时，这个代数含有非零[[幂零元]]，
因而不是可分代数。
这是一个非半单 Frobenius 代数的基本例子。
:::

::: example [群代数]
设 $G$ 是有限群。
[[群代数]] $k[G]$ 是 Frobenius 代数。
在群元素构成的基上定义
\[
\epsilon(g)
=
\begin{cases}
  1, & g=e,\\
  0, & g\neq e,
\end{cases}
\]
其中 $e$ 是 $G$ 的单位元。
相应的余乘法为
\[
\Delta(g)=\sum_{uv=g}u\otimes v.
\]
当 $G$ 不是交换群时，$k[G]$ 是非交换 Frobenius 代数。
:::

::: example [矩阵代数]
域 $k$ 上的 $n$ 阶[[矩阵代数]] $M_n(k)$ 是 Frobenius 代数。
可取
\[
\epsilon(X)=\operatorname{tr}(X).
\]
若 $E_{ij}$ 是矩阵单位，则相应的余乘法为
\[
\Delta(E_{ij})
=
\sum_{r=1}^n E_{ir}\otimes E_{rj}.
\]
当 $n>1$ 时，$M_n(k)$ 不是交换 Frobenius 代数。
:::

::: example
设
\[
A=k e_1\oplus\cdots\oplus k e_n,
\qquad
e_i e_j=\delta_{ij}e_i,
\qquad
1=e_1+\cdots+e_n.
\]
任取非零元素 $\lambda_1,\ldots,\lambda_n\in k^\times$，定义
\[
\epsilon(e_i)=\lambda_i,
\qquad
\Delta(e_i)=\lambda_i^{-1}e_i\otimes e_i.
\]
这给出一个交换 Frobenius 代数。
当 $k$ 是代数闭域时，所有有限维交换半单 Frobenius
$k$-代数都具有这种形式。
:::

## 与二维拓扑量子场论的对应

记 $\mathsf{Cob}^{\mathrm{or}}_2$ 为二维定向[[配边范畴]]。
它的对象是紧致定向一维闭流形，
态射是带边界的紧致定向二维流形，
态射的复合由沿边界粘合给出，
而[[张量积]]由不交并给出。

一个取值于有限维 $k$-向量空间的二维定向拓扑量子场论是一个
[[对称幺半函子]]
\[
Z\colon
\mathsf{Cob}^{\mathrm{or}}_2
\longrightarrow
\mathsf{Vect}^{\mathrm{fd}}_k.
\]
令
\[
A=Z(S^1).
\]
圆周之间的几个基本配边给出以下线性映射：

- 从两个圆周到一个圆周的裤形曲面给出乘法
  \[
  m\colon A\otimes A\longrightarrow A.
  \]

- 从空流形到一个圆周的圆盘给出单位映射
  \[
  \iota\colon k\longrightarrow A.
  \]

- 反向的裤形曲面给出余乘法
  \[
  \Delta\colon A\longrightarrow A\otimes A.
  \]

- 从一个圆周到空流形的圆盘给出余单位
  \[
  \epsilon\colon A\longrightarrow k.
  \]

```terms
Frobenius 代数:
  en: Frobenius algebra
  de: Frobenius-Algebra :f
  fr: algèbre de Frobenius :f
```
