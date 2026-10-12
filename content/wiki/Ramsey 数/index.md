---
title: Ramsey 数
aliases: [Ramsey 定理]
categories: [图论]
navboxes: [图论]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
      - “定义”一节中有向图的 Ramsey 数似乎应要求所找的 $n$ 顶点子图是传递的（不含有向圈），否则这个数是平凡的；“数值”一节第二个表格给出的也是传递子图情形的值。
---

**Ramsey 数** $R (a, b)$
是指最小的自然数 $n$，
使得每个有 $n$ 个顶点的[[图]]一定有一个
$a$ 个两两相邻的顶点或 $b$ 个两两不相邻的顶点。
例如，$R (3, 3) = 6$ 这一事实可以表述如下：
在世界上任意找 $6$ 个人，总有 $3$ 个人两两认识，或 $3$ 个人两两不认识。

Ramsey 数的存在性称为 **Ramsey 定理**。

## 定义

::: definition [Ramsey 数] {@def-ramsey-number}
设 $a$、$b$ 是自然数。
**Ramsey 数** $R (a, b)$
是指最小的自然数 $n$，
使得每个 $n$ 阶[[图]]一定有一个
$a$ 个两两相邻的顶点或 $b$ 个两两不相邻的顶点。

等价地说，Ramsey 数是最小的自然数 $n$，
使得如果对[[完全图]] $K_n$ 的边用两种颜色进行着色，
那么一定有第一色的 $a$ 阶完全图或第二色的 $b$ 阶完全图。
:::

@def-ramsey-number 也可以推广到多种颜色的着色、[[超图]]、[[有向图]]。

::: definition [多色 Ramsey 数] {@def-finite-number-of-colours-ramsey-number}
设 $a_1, \dotsc, a_r$ 是自然数。
**Ramsey 数** $R (a_1, \dotsc, a_r)$
是指最小的自然数 $n$，
使得如果对[[图]] $K_n$ 的边用 $r$ 种颜色进行着色，
那么一定存在 $i = 1, \dotsc, r$，
使得图中有第 $i$ 色的 $a_i$ 阶完全图。
:::

::: remark
@def-finite-number-of-colours-ramsey-number 中的 $R (a_1, \dotsc, a_r)$
可以记作 $R (a_1, \dotsc, a_r ;r)$。
其表示了含 $r$ 种颜色。
:::

::: definition [超图的 Ramsey 数]
$m$-超图表示每条边有 $m$ 个顶点的超图。
设 $a_1, \dotsc, a_r$ 是自然数。
**Ramsey 数** $R (a_1, \dotsc, a_r; r , m)$
是指最小的自然数 $n$，
使得如果对完全 $m$-超图 $H_n$ 的边用 $r$ 种颜色进行着色，
那么一定存在 $i = 1, \dotsc, r$，
使得图中有第 $i$ 色的 $a_i$ 阶完全 $m$-超图。
:::

::: definition [有向图的 Ramsey 数]
设 $n$ 是自然数。**Ramsey 数** $R (n)$ 是指最小的自然数 $m$，
使得 $m$ 阶完全有向图中一定有一个 $n$-顶点有向完全图。
:::

## 性质

此板块 $a_{1} , \dotsc , a_{r} , s , r$ 都是自然数。

::: proposition
$R (a_{1} , \dotsc , a_{r})$ 括号内各项可以随意交换位置，且交换后此**Ramsey 数**数值不变。
:::

::: proposition
对于任意有限自然数 $a$，
$R (1 , a) = 1$，
$R (2 , a) = a$。
:::

::: proposition
$R(s , r) \leqslant R(s - 1 , r) + R(s , r - 1)$
:::

::: proposition
$R(a_{1} , \dotsc , a_{r}) \leqslant R(a_{1} , \dotsc , a_{r-2} , R(a_{r-1} , a_{r}))$
:::

::: proposition
$R(s , r) \leqslant \binom{r + s - 2}{r - 1}$
:::

## 数值

下表列出了 Ramsey 数 $R(a, b)$ 的一些已知值。

| $a \diagdown b$ | $\bm{1}$ | $\bm{2}$ | $\bm{3}$ | $\bm{4}$ | $\bm{5}$ | $\bm{6}$ | $\bm{7}$ | $\bm{8}$ | $\bm{9}$ | $\bm{10}$ |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| $\bm{1}$ | $1$ | $1$ | $1$ | $1$ | $1$ | $1$ | $1$ | $1$ | $1$ | $1$ |
| $\bm{2}$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
| $\bm{3}$ | $1$ | $3$ | $6$ | $9$ | $14$ | $18$ | $23$ | $28$ | $36$ | |
| $\bm{4}$ | $1$ | $4$ | $9$ | $18$ | $25$ | | | | | |

下表列出了 Ramsey 数 $R(n)$ 的一些已知值。

| $\bm{n}$ | $R(n)$ |
| :-: | :-: |
| $\bm{0}$ | $0$ |
| $\bm{1}$ | $1$ |
| $\bm{2}$ | $2$ |
| $\bm{3}$ | $4$ |
| $\bm{4}$ | $8$ |
| $\bm{5}$ | $14$ |
| $\bm{6}$ | $28$ |

```terms
Ramsey 数:
  en: Ramsey number
```
