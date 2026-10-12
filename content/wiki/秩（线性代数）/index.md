---
title: 秩（线性代数）
categories: [线性代数]
notices:
  - name: 消歧义
    see:
      - page: 秩
navboxes: [线性代数]
---

在[[线性代数]]中，[[线性映射]]的**秩**是指其[[像]]的[[维数]]，
是对线性映射的大小的刻画。

对向量组、[[矩阵]]而言，也有非常类似的秩的概念。

## 定义

### 对线性映射

::: definition
设 $k$ 为[[域]]，$V,W$ 为有限维 $k$-[[向量空间]]。
则[[线性映射]] $f \colon V \to W$ 的**秩**定义为：
\[
\operatorname{rank} f = \dim \operatorname{im} f,
\]
即映射 $f$ 的[[像]] $\operatorname{im} f$ 的[[维数 (线性代数)|维数]]。

由定义，我们总有
\[
\operatorname{rank} f \leq \min \{ \dim V, \dim W \}.
\]
若等号成立，则称 $f$ **满秩**。
此时，若 $\dim V \leq \dim W$，则 $f$ 是[[单射]]；
若 $\dim V \geq \dim W$，则 $f$ 是[[满射]]。
:::

### 对向量组

::: definition
设 $k$ 为[[域]]，$V$ 为有限维 $k$-[[向量空间]]。
则 $V$ 中一组[[向量]] $(v_1, \dotsc, v_k)$ 的**秩**定义为：
\[
\operatorname{rank}\{v_1,\dots,v_k\} =
\dim \operatorname{span} \{v_1,\dots,v_k\},
\]
即这组向量的[[线性生成空间|张成空间]] $\operatorname{span} \{v_1,\dots,v_k\}$
的维数。
这也等于这组向量中任一[[极大元|极大]][[线性无关]][[子集]]中的向量个数。
:::

### 对矩阵

::: definition
设 $k$ 为[[域]]，$A$ 为 $k$ 上的 $m \times n$ [[矩阵]]。
则 $A$ 的**秩**定义为它所代表的线性映射 $k^n \to k^m$ 的秩。
:::

矩阵 $A$ 的秩也有以下等价定义：

- **行秩**：矩阵行向量组的秩，
  即 $A$ 的每行视为 $k^n$ 中向量，得到的具有 $m$ 个向量的向量组的秩。

- **列秩**：矩阵列向量组的秩，
  即 $A$ 的每列视为 $k^m$ 中向量，得到的具有 $n$ 个向量的向量组的秩。

- $A$ 中非零[[子式]]的最大阶数。

## 性质

- 对域 $k$ 上的 $n\times n$ [[方阵]] $A$，其秩为 $n$ 等价于其[[可逆阵|可逆]]，
  也等价于其[[行列式]]不为 $0$。

- 对域 $k$ 上的矩阵 $A, B$，有以下矩阵运算关系：
  - $\operatorname{rank}(A+B) \leq \operatorname{rank}A + \operatorname{rank}B$。
  - $\operatorname{rank}(AB) \leq \min\{\operatorname{rank}A, \operatorname{rank}B\}$。
  - 若 $P,Q$[[可逆阵|可逆]]，则 $\operatorname{rank}(PAQ) = \operatorname{rank}A$。

- **[[秩-零度定理]]**：对有限维向量空间之间的线性映射 $f \colon V\to W$，有
  \[
  \operatorname{rank} f + \dim\ker f = \dim V.
  \]
  换言之，$f$ 的秩等于其出发空间的维数减去其丢失的维数。

```terms
秩:
  en: rank
  fr: rang :m
  de: Rang :m
```
