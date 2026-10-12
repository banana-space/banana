---
title: 迹
categories: [线性代数]
notices:
  - name: 消歧义
    see:
      - page: 迹（多义词）
navboxes: [线性代数]
---

在[[线性代数]]中，
$n \times n$ [[方阵]] $A = (a_{i, j})$
的**迹**是指其对角线上所有元素之和，即
\[
\operatorname{tr} A = a_{1, 1} + \cdots + a_{n, n}.
\]
[[相似矩阵]]具有相同的迹，
因此，将方阵视为有限维[[向量空间]]上的[[线性变换]]，
则迹也可以视为这样的线性变换的性质。
事实上，线性变换的迹给出了其所有[[特征值]]之和。

## 定义

### 方阵的迹

::: definition
设 $k$ 是[[环]]，$n$ 是[[自然数]]，
$A = (a_{i, j})$ 是 $k$ 上的 $n \times n$ [[方阵]]。
则 $A$ 的**迹**定义为
\[
\operatorname{tr} A = a_{1, 1} + \cdots + a_{n, n}.
\]
:::

### 线性变换的迹

::: definition
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]，
$f \colon V \to V$ 是[[线性变换]]。
则 $f$ 的**迹**定义为 $f$ 的[[特征多项式]]
$\det (t \cdot \mathbb{1}_V - f)$ 中
$t^{n-1}$ 的系数的[[相反数]]，其中 $n = \dim V$。
:::

## 性质

::: theorem
设 $k$ 是[[交换环]]。
设 $A$，$B$ 是 $k$ 上的 $n \times n$ 方阵。
设 $C$，$D$ 分别是 $k$ 上的 $m \times n$ 阵与 $n \times m$ 阵。
设 $s$，$t \in k$。
则

- $\operatorname{tr} (C D) = \operatorname{tr} (D C)$。
- $\operatorname{tr} (sA + tB) = s \operatorname{tr} (A) + t \operatorname{tr} (B)$。
- $\operatorname{tr} (A) = \operatorname{tr} (A^{\mathrm{t}})$，
  其中 $A^{\mathrm{t}}$ 是 $A$ 的[[转置]]。

:::

::: theorem
设 $k$ 是交换环。
设 $k$ 上的所有的 $n \times n$ 方阵作成集 $M$。
设 $f \colon M \to k$。
设对任何 $A$，$B \in M$ 与 $s$，$t \in k$，有：

- $f (A B) = f (B A)$。
- $f (sA + tB) = s f (A) + t f (B)$。

则存在 $c \in k$，使对任何 $A \in M$，必 $f(A) = c \operatorname{tr} (A)$。
进一步地，$c = f(E_{1,1})$，其中 $E_{1,1}$ 是这样的 $n \times n$ 方阵：
$(1, 1)$-元是 $1$，且其他的元都是 $0$。
:::

```terms
迹:
  en: trace
  eo: spuro
  fr: trace :f
  de: Spur :f
  ja: トレース
  ko: 대각합 (對角合)
```
