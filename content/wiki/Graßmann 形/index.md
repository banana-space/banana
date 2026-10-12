---
title: Graßmann 形
categories: [微分几何, 代数几何]
notices:
  - name: 问题
    items:
      - “作为流形”“Schubert 簇和Schubert 胞腔”“齐性空间结构”各节需要扩充。
      - “Schubert 胞腔”的定义中，求并的范围包含 $a' = a$ 本身，这样 $X_a(\mathcal V)$ 似乎总是空集；范围似乎应为 $a' \neq a$。
---

**Graßmann 形**是[[射影空间]]的推广：
域 $k$ 上射影空间 $\mathbb{P}(V)$
是 $k$-线性空间 $V$ 中所有一维子空间构成的空间，
而域上 Graßmann 形 $\mathbb{G} (n,V)$ 则是 $V$ 中所有 $n$ 维子空间构成的空间。
在[[微分几何]]和[[代数几何]]中，Graßmann 形均可赋予相应的结构，
分别称为 [[Graßmann 流形]]和 [[Graßmann 概形]]。

Graßmann 形可以嵌入到射影空间中，称为[[Plücker 嵌入]]，
这使它有良好的几何性质，例如在域 $k$ 取 $\mathbb{R}$ 或 $\mathbb{C}$
时它[[紧]]，且在代数几何中它是[[射影概形]]。

Graßmann 形上另一个重要构造是 [[Schubert 胞腔]]，
它们给出了 Graßmann 形上的胞腔结构，
且在相交下表现良好，
从而通过它们能计算出 Graßmann 形的[[周环]]和[[上同调]]。

由于向量空间的自同构群在 $n$ 维子线性空间上作用传递，
Graßmann 形还有[[齐性空间]]的结构。

## 定义

### 作为集合

::: definition [Graßmann 形]
给定域 $k$ 和 $k$-[[向量空间]] $V$，
**Graßmann 形** $\mathbb{G} (n, V)$
是 $V$ 上所有 $n$ 维[[线性子空间]]构成的集合。
当 $V$ 取为 $k^N$ 时，
$\mathbb{G} (n, k^N)$ 也记作 $\mathbb{G} (n, N)$。
子空间 $W$ 在 $\mathbb{G} (n, V)$ 中对应的点记作 $[W]$。
:::

::: example
作为最简单的例子，
$n = 0$ 或 $\dim V$ 时 $\mathbb{G} (n, V)$
就是一个点。
$n = 1$ 时 $\mathbb{G} (n, V)$ 就是[[射影空间]] $\mathbb{P}(V)$。
$n = \dim V - 1$ 时，$\mathbb{G} (n, V)$ 是[[对偶空间]] $V^*$
的射影空间 $\mathbb{P}(V^*)$。
:::

### 作为流形

<see>[[Graßmann 流形]]</see>

### 作为概形

<see>[[Graßmann 概形]]</see>

::: definition [Graßmann 概形]
对[[概形]] $S$，
**[[Graßmann 概形]]** $\mathbb{G} (n, N)_S$
是由[[函子]]
\[
\begin{aligned}
  \mathsf{AffSch}_{/S} &\to \mathsf{Set} \\
  \operatorname{Spec}(A) &\mapsto
  \{秩\ n\ 直和项\ M \subset A^N\}
\end{aligned}
\]
决定的概形。
:::

## 性质

### Plücker 嵌入

<see>[[Plücker 嵌入]]</see>

Graßmann 形可以嵌入至[[射影空间]]中。

::: definition [Plücker 嵌入]
**[[Plücker 嵌入]]** 指映射
\[
\begin{aligned}
  \mathbb{G} (n, V) &\to \mathbb{P}(\wedge^n V) \\
  [W] &\mapsto \wedge^n W.
\end{aligned}
\]
:::

在微分几何中此嵌入是闭[[嵌入]]，在代数几何中此嵌入是[[闭浸入]]。

### Schubert 簇和Schubert 胞腔

<see>[[Schubert 胞腔]]</see>

Graßmann 形上有自然的胞腔结构。

::: definition [Schubert 簇]
设 $\dim V = N$，对于 $V$ 中的[[旗]] $\mathcal{V}$
\[
0 \subsetneq V_1 \subsetneq V_2
\cdots \subsetneq V_N = V
\]
以及满足
\[
N-n \geq a_1 \geq a_2 \cdots \geq a_n \geq 0
\]
的一组[[自然数]] $a = (a_1, a_2, \cdots, a_n)$，
**Schubert 簇** 是 $\mathbb{G} (n,V)$ 的如下子集
\[
\Sigma_a(\mathcal{V}):=\left\{ [W] \in \mathbb{G} (n, V)
\mid \forall i, \dim(V_{N-n+i-a_i} \cap W)\geq i \right\}.
\]
它们也可看作$\mathbb{G} (n,V)$的[[闭子概形]]。
:::

::: definition [Schubert 胞腔]
记号同上，如下子集
\[
X_a(\mathcal V):=\Sigma_a(\mathcal V)\backslash\left(\bigcup_{a'\ge a}\Sigma_{a'}(\mathcal V)\right)
\]
被称为一个**Schubert 胞腔**，求并对全体满足$a_i'\ge a_i$对一切$i$成立的$a'=(a_i')_{i=1}^n$进行。

它们也可看作$\mathbb{G} (n,V)$的[[局部闭子概形]]。
:::

此定义看似抽象，实际上就是在模拟矩阵消元。

### 齐性空间结构

```terms
Graßmann 形:
  en: Grassmannian
  fr: Grassmannienne :f
```
