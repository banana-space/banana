---
title: 辛流形
categories: [辛几何]
notices:
  - name: 问题
    items:
      - 引言中由位置和动量描述的状态构成的空间似乎应称为相空间（即构形空间的余切丛），而不是构形空间。
      - “辛向量空间”一节需要扩充。
navboxes: [辛几何]
---

**辛流形**是指带有一个[[闭微分形式|闭]]、[[非退化双线性型|非退化]]
[[微分形式|$2$-形式]]的[[光滑流形]]，
这样的 $2$-形式称为**辛形式**，
也称为流形的**辛结构**。

辛流形的概念来源于[[经典力学]]。
在 [[Hamilton 力学]]中，
以质点的位置、动量描述质点的状态，
所有可能的状态构成的空间称为[[构形空间]]，而该空间自然是辛流形。
用几何的语言说，就是以流形的[[余切丛]]作为构形空间，
而流形的余切丛具有自然的辛结构。

研究辛流形的学科称为[[辛几何]]或[[辛拓扑]]。

## 定义

::: definition [辛流形]
**辛流形**指二元组 $(X, \omega)$，其中

- $X$ 是 $2n$ 维[[光滑流形]]，其中 $n$ 是自然数。

- $\omega$ 是 $X$ 上的 [[微分形式|$2$-形式]]，
  称为**辛形式**，满足以下条件：

  - $\omega$ 是[[闭形式]]：$d \omega = 0$。

  - $\omega$ 是[[非退化双线性型|非退化 $2$-形式]]，
    即满足下列等价条件：

    - 在每点 $x \in X$，$\omega$ 诱导的[[切空间]] $\mathrm{T}_x X$ 上的[[双线性型]]
      都是[[非退化双线性型]]。

    - 在每点 $x \in X$，$\omega$ 赋予切空间 $\mathrm{T}_x X$
      [[辛向量空间]]的结构。

    - $2n$-形式 $\omega^n = \omega \wedge \cdots \wedge \omega$
      （$n$ 个 $\omega$）在 $X$ 的每点处都非零。
:::

## 例子

### 辛向量空间

### 余切丛

令$M$为[[光滑流形]]，它的[[余切丛]]$T^*M$上有一个自然的$1$-形式：取$T^*M$的局部坐标
$(x^i,\theta_i)$为
\[
p=(x^i),\ \theta=\theta_idx^i_p,\quad p\in M,\theta\in T_p^*M
\]
于是定义$\sigma=\theta_idx^i\in T^*T^*M$，它是不依赖于坐标选取的一个整体$1$-形式。

令$\omega=-d\sigma\in\Omega^2(T^*M)$，在上方的坐标下看出它是闭的、非退化$2$-形式，
它被称作余切丛上的典范辛形式，注意到它不仅是闭的，还是恰当的，这是一个[[恰当辛流形]]。

### Kähler 流形

::: definition
令$(M,\omega)$为辛流形，$M$上的[[近复结构]] $J$被称作是和
$\omega$相容的，如果
\[
g(u,v)=\omega(u,Jv)
\]
定义了$M$上的 [[Riemann 度量]]。
:::

如果辛流形$(M,\omega)$上有一个相容的近复结构$J$，则称$(M,\omega,J,g)$
是[[近 Kähler 流形]]，其中$g(u,v)=\omega(u,Jv)$是诱导的 Riemann 度量。
特别地，如果$J$是可积的，则称其为[[Kähler 流形]]。

#### 酉空间

$\mathbb{C}^n\cong\mathbb{R}^{2n}$上有标准Kähler形式$(\mathbb{C}^n,\omega_0,J_0)$，
其中$J_0$是标准复结构$J_0v=iv$，辛形式
\[
\omega_0=\frac{i}{2}\partial\overline{\partial}f,\quad f(z)=\sum_{i=1}^nz_i\overline{z}_i
\]
其中$z_i$为$\mathbb{C}^n$上的标准坐标。

#### 复射影空间

复[[射影空间]] $(\mathbb{C}\mathrm{P}^n,\omega_{\mathrm{FS}},J)$在它的标准复结构$J$和
[[Fubini–Study 形式]]$\omega_{\mathrm{FS}}$下构成一个紧Kähler流形。

```terms
辛流形:
  en: symplectic manifold
  fr: variété symplectique :f
  de: symplektische Mannigfaltigkeit :f
辛形式:
  en: symplectic form
  fr: forme symplectique :f
  de: symplektische Form :f
辛结构:
  en: symplectic structure
  fr: structure symplectique :f
  de: symplektische Struktur :f
```
