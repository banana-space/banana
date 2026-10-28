---
title: Hermite 度量
aliases: [Hermite 流形上的度量, 度量（Hermite 流形）]
categories: [复几何]
---

<disambiguation>
关于复[[向量丛]]上的 Hermite 度量，请参见[[Hermite 度量（向量丛）]]。
</disambiguation>

<problems>
- “Hermite 度量”一节需要扩充。
- “性质”一节中引理的证明不完整。
</problems>

**Hermite 度量**是[[复流形]]（或[[近复流形]]）
上的一种结构，
是 [[Riemann 度量]]在复几何中的一种类比。

## 定义

### Hermite 度量

### 对应的 Riemann 度量

给定 [[Hermite 流形]]$(X,\omega)$，我们可以定义其上的 [[Riemann 度量]]以及
正定的Hermite 形式。我们将在此处对其进行具体计算。

Hermite 流形上存在一个自然的[[Riemann 度量]]：

::: definition [Hermite 流形的 Riemann 度量]
我们先定义$T_\mathbb{C} X$上的Hermite度量$H:T_\mathbb{C} X\times \overline{T_\mathbb{C} X}\to
  \mathbb{C}$，它满足
\[
H(u,v)=h(u^{1,0},v^{1,0})+h(\overline{v^{0,1}},
\overline{u^{0,1}})\quad 对u,v\in T_\mathbb{C} X
\]
将$H$限制在$T_\mathbb{R} X$上，我们便得到**由$h$诱导的Riemann 结构**
$g:T_\mathbb{R} X\times T_\mathbb{R} X\to  \mathbb{R}$。
:::

容易验证，$g$与$X$上可积的近复结构相容，亦即：
\[
g(u,v)=g(Ju,Jv)\quad 对u,v\in T_\mathbb{R} X
\]

使用局部坐标，$g$可被表示为：
\[
\begin{aligned}
  g\left( \frac{\partial}{\partial x^j},\frac{\partial}{\partial x^k}
  \right)
  &=g\left( \frac{\partial}{\partial x^J},\frac{\partial}{\partial x^K}
  \right)
  =h_{j\overline{k}}+\overline{h_{j\overline{k}}}=h_{j\overline{k}}+h_{k\overline{j}}
  \\
  g\left(\frac{\partial}{\partial x^j},\frac{\partial}{\partial x^K}\right)
  &=-i(h_{j\overline{k}}-\overline{h_{j\overline{k}}})\\
\end{aligned}
\]

### Hermite 形式

::: definition [Hermite 形式]
定义实流形$X$上的微分2-形式$\omega$：
\[
\omega(u,v)=g(Ju,v) \quad 对u,v\in T_\mathbb{R} X
\]
我们通常将之称为 **Hermite 形式**。利用 $\omega$与 $h$间简单
的转化关系，我们有时用 $(X,\omega)$定义 Hermite 结构。
:::

利用$T_\mathbb{C} X=T_\mathbb{R} X\otimes_\mathbb{R} \mathbb{C}$，
我们将$g$与$\omega$自然地延拓为$T_\mathbb{C} X$
上的[[双线性型]]，它们在局部坐标下表示为：
\[
\begin{aligned}
  \omega&=\frac{i}{2}\sum_{1\leq j,k\leq n}h_{j\overline{k}}\mathrm{d} z^j
  \wedge \mathrm{d} \overline{z}^k\\
  g&=\frac{1}{2}\sum_{1\leq j,k\leq n}(h_{j\overline{k}}\mathrm{d} z^j
  \otimes \mathrm{d} \overline{z}^k+ h_{k\overline{j}}\mathrm{d} \overline{z}^j \otimes \mathrm{d} z^k  )
\end{aligned}
\]

我们有时也考虑由$h$诱导的在$T_\mathbb{C} X$上的双线性型$\mathrm{d} s^2_h$，它在局部坐标下表示为：
\[
\mathrm{d} s^2_h=\sum_{1\leq j,k\leq n} h_{j\overline{k}}\mathrm{d} z^k \otimes \mathrm{d} \overline{z}^j
\]
它可被内蕴地刻画：
\[
\mathrm{d} s^2_h(u,v)=h(u^{1,0}, \overline{v^{0,1}}) \quad 对u,v\in T_\mathbb{C} X
\]
于是我们有等式：
\[
\mathrm{d} s_h^2=g-i\omega
\]
将上述等式限制在$T_\mathbb{R} X$上，我们有
\[
\omega=-\Im h,\quad g=\Re h
\]

## 性质

::: lemma
记$\mathrm{vol}_g$为$(X,g)$的体积形式，我们有
\[
\mathrm{vol}_g=\frac{\omega^n}{n!}
\]
:::

::: proof
使用局部坐标$\{z^1,\cdots,z^n,\overline{z}^1,\cdots,\overline{z}^n\}$计算，考虑到
\[
\det g =\frac{1}{2^{2n}} \det (h_{j\overline{k}})^2
\]
:::
