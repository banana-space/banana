---
title: 判别式
categories: [初等代数, 代数数论]
---

**判别式**是[[代数学|代数]]和[[数论]]中的一种构造，
可以用来判断[[多项式]]有无重根，
或在[[代数数论]]中，判断[[素理想]]是否[[分歧]]。

## 多项式的判别式

::: definition {@discpolynomial}
设 $f\in k[X]$，
其中 $k$ 是一个域，
$\bar{k}$ 是 $k$ 的[[代数闭包]]。
则 $f$ 在 $\bar{k}$ 中有 $n$ 个根 $\alpha_1,\cdots,\alpha_n$。
定义 $f$ 的**判别式**为
\[
\Delta(f)=a_n^{2n-2}\prod_{i<j}(\alpha_i-\alpha_j)^2.
\]
其中 $a_n$ 为 $f$ 的首项系数。
:::

这个定义可以推广到更一般的多项式：

::: definition
设 $f\in A[X]$，
其中 $A$ 是一个[[交换环]]。
定义 $f$ 的**判别式**为
\[
\Delta(f)=\frac{(-1)^{\frac{n(n-1)}{2}}}{a_n}\operatorname{Res}(f,f').
\]
其中 $\operatorname{Res}(f,g)$ 代表多项式 $f,g$ 的[[结式]]，
而 $a_n$ 为 $f$ 的首项系数
（这里 $\operatorname{Res}(f,f')$ 一定能被 $a_n$ 整除）。
:::

## 代数数论中的判别式

::: definition
设 $L/K$ 是[[代数数域]]的扩张。
设 $\Lambda$ 是 $L$ 中的一个 $\mathcal{O}_K$-[[格]]。
局部化后可得自由 $\mathcal{O}_{K,\mathfrak{p}}$-模 $\Lambda_{\mathfrak{p}}$。
取一组基 $(x_1,\cdots,x_n)$ 后，
定义 $\Lambda$ 在 ${\mathfrak{p}}$ 处的判别式为
\[
\mathfrak{d}_{\Lambda,\mathfrak{p}}:=
\det\left( \operatorname{tr}_{L/K}(x_ix_j) \right)_{n\times n}.
\]
由此定义 $\Lambda$ 关于 $L/K$ 的**判别式**为
\[
\mathfrak{d}_\Lambda:=
\prod_{\mathfrak{p}}\mathfrak{p}^{\operatorname{val}_{\mathfrak{p}}
\left(\mathfrak{d}_{\Lambda,\mathfrak{p}}\right)}.
\]
取特殊情况 $\Lambda=\mathcal{O}_L$，
得到定义
\[
\mathfrak{d}_{L/K}:=\mathfrak{d}_{\mathcal{O}_L},
\]
称作 $L/K$ 的**判别式**。
:::

注意这个定义一定程度地推广了 @discpolynomial：
如果 $\mathcal{O}_L=\mathcal{O}_K[\alpha]$，
那么 $\mathfrak{d}_{L/K}=\Delta(f_{\alpha})$。

## 性质

在多项式理论中，判别式可以用来判断多项式根以及分裂域的性质。例如：

::: proposition
二次多项式 $x^2 - bx + c$ 的判别式为 $\Delta = b^2 - 4c$，
如取 $k = \mathbb{Q}$，

- $\Delta = 0$ 当且仅当它是某个多项式的平方。

- $\Delta$ 是 $\mathbb{Q}$ 中平方数当且仅当此多项式有两个有理根。

- $\Delta$ 是非负数当且仅当此多项式有两个实根。

:::

::: proposition
三次有理系数多项式的判别式是 $\mathbb{Q}$ 中平方数，
当且仅当此多项式在 $\mathbb{Q}$ 上[[分裂域]]扩张次数为 $1$ 或 $3$。
:::

判别式可以用来判断分歧性，
即有

::: theorem [Dedekind]
设 $\mathfrak{p}$ 是 $\mathcal{O}_K$ 中的素理想。
那么
\[
\mathfrak{p}\text{ 在 }L/K\text{ 中分歧}\iff
\mathfrak{p}\mid \mathfrak{d}_{L/K}.
\]
:::

```terms
判别式:
  en: discriminant
  de: Diskriminante :f
  fr: discriminant :m
```
