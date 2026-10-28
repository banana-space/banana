---
title: 完备空间
aliases: [完备（拓扑学）, 完备度量空间]
categories: [一般拓扑]
---

<disambiguation>
关于其它含义，请参见[[完备]]。
</disambiguation>

<problems>
- “完备一致空间”“例子”“性质”各节需要扩充。
</problems>

**完备空间**是一类[[拓扑空间]]，
其中一串互相离得越来越近的点列会趋向于该空间中的一点。
换言之，该点列的[[极限 (拓扑学)|极限]]也落在空间中。
例如，[[实数]]是完备的，但[[有理数]]是不完备的，
因为一列有理数可能趋于一个[[无理数]]：

$3, \ 3.1, \ 3.14, \ 3.141, \ \dotsc \to$ [[$\pi$]]。

精确地说，完备性是指空间中的 [[Cauchy 列]]（或 [[Cauchy 网]]）均收敛。

## 定义

### 完备度量空间

我们首先定义[[度量空间]]的完备性。
回忆 [[Cauchy 列]]的概念：

::: definition [Cauchy 列] {@Cauchy-列}
设 $(X, d)$ 是[[度量空间]]。
称 $X$ 中的[[序列]] $( x_n )_{n \in \mathbb{N}}$
为 **[[Cauchy 列]]**，
如果对任意 $\varepsilon > 0$，
存在 $N \in \mathbb N$，
使得对任意整数 $m, n > N$ 有
\[
d (x_n, x_m) < \varepsilon.
\]
:::

由此可以定义度量空间的完备性。

::: definition [完备度量空间] {@thm:完备度量空间}
称[[度量空间]] $(X, d)$ 为**完备度量空间**，
如果 $X$ 中的所有 [[Cauchy 列]]都[[收敛序列|收敛]]。

换言之，即对任意 Cauchy 列 $( x_n )_{n \in \mathbb{N}}$，
存在 $x \in X$，
满足对任意 $\varepsilon > 0$，存在 $N \in \mathbb{N}$，
使得对任意 $n > N$ 有
\[
d(x_n, x) < \varepsilon.
\]
:::

### 完备一致空间

## 例子

## 性质

```terms
完备:
  en: complete
  de: vollständig
  fr: complet
  grc: πλήρης
  la: completus
完备空间:
  en: complete space
  de: vollständiger Raum
  fr: espace complet
  grc: πλήρης χῶρος
  la: spatium completum
```
