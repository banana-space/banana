---
title: 超几何分布
categories: [概率论]
notices:
  - name: 问题
    items:
      - “超几何分布的近似”一节末尾的正态近似使用二项分布的方差 $np(1-p)$；当 $n$ 与 $N$ 同阶时，似乎应计入因子 $(N-n)/(N-1)$，该式似乎只在 $n$ 远小于 $N$ 时适用。
navboxes: [概率论]
---

在[[概率论]]中，**超几何分布**是一种常见的[[概率分布]]。
考虑以下情景：假设口袋中有 $N$ 个小球，其中有 $K$ 个白球和 $(N - K)$ 个黑球。
从口袋中随机拿出 $n$ 个小球，并假设其中有 $X$ 个白球和 $(n - X)$ 个黑球。
则[[随机变量]] $X$ 的概率分布就是超几何分布。

类似地，也可以考虑有多种颜色小球的情况，
得到的概率分布称为**多元超几何分布**。

## 定义

::: definition [超几何分布]
设 $N, K, n$ 是[[自然数]]，满足 $n,K \leq N$。
设 $X$ 为取值于 $\mathbb{N}$ 的[[离散型随机变量]]。
如果对任意 $k\in\mathbb{N}$，有
\[
\mathbb{P}(X = k) = \frac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}},
\]
则称 $X$ 服从**超几何分布**，记为 $X \sim H(n, K, N)$。
:::

在上述记号下，$X$ 能以非零概率取到的所有值为
\[
\{k\in\mathbb{N} \mid \max(0, n+K-N) \leq k \leq \min(n, K)\}.
\]

::: definition [多元超几何分布] {@multivariate}
设 $N,n,m$ 是[[自然数]]，满足 $n \leq N$。
设自然数 $K_1, \cdots, K_m$ 满足 $\sum_{s=1}^{m} K_s =N$。
如果离散型[[随机向量]] $\bm{X}$ 满足：对任意自然数 $k_1, \cdots, k_m$，
如果 $\sum_{s=1}^{m} k_s = n$，则
\[
\mathbb{P}(X_1 = k_1, \cdots, X_m = k_m) =
\frac{1}{\binom{N}{n}}\prod_{s=1}^m \binom{K_s}{k_s},
\]
那么称 $\bm{X}$ 服从 **$m$ 元超几何分布**。
:::

在上述记号下，$\bm {X}$ 能以非零概率取到的所有值为
\[
\{(k_1, \cdots, k_m) \in \mathbb{N}^m \mid
k_1 + \cdots + k_m = n, \ k_s \leq K_s \ (1 \leq s \leq m)\}.
\]

## 性质

### 基本性质

- 设随机变量 $X \sim H(n,K,N)$。

  - $X$ 的[[期望]]是 $\mathbb{E}(X) = \dfrac{nK}{N}$。

  - $X$ 的[[方差]]是
    $\operatorname{Var}(X) = \dfrac{nK}{N} \cdot \dfrac{N-K}{N} \cdot \dfrac{N-n}{N-1}$。

  - $X$ 的[[特征函数]]可以用[[超几何函数]]来表示：
    \[
    \phi_X(t) = \frac{\binom{N-K}{n}}{\binom{N}{n}}{\operatorname{_2F}_1}(-n,-K;N-K-n+1;\mathrm{e}^{\mathrm it})
    \]
    这也是超几何分布得名的原因。

- 设随机向量 $\bm{X}$ 按 @multivariate 服从多元超几何分布。

  - 多元超几何分布的任意 $p$ 维边缘分布是 $p$ 元超几何分布，其中 $2 \leq p \leq m-1$。
    特别地，$X_i \sim H(n,K_i,N)$。

  - 各分量的期望和方差与一元情形一致。[[协方差]]为
    \[
    \operatorname{Cov}(X_i,X_j) =
    -\dfrac{n K_i K_j}{N^2} \cdot \dfrac{N-n}{N-1} \quad (i \neq j).
    \]

### 超几何分布的近似

超几何分布在 $N$ 很大时趋于[[二项分布]]。
这是因为，例如在引言的例子中，如果小球的个数 $N$ 非常大，
则取出每个小球对总体的影响很小，
故取出每个小球时，它是白球的概率近似不变，
从而白球的个数近似满足二项分布。

::: proposition [超几何分布近似于二项分布]
设[[随机变量]] $X_N$ 服从超几何分布 $H(n,K_N,N)$。
如果
\[
\lim_{N \to \infty} \frac{K_N}{N} = p > 0,
\]
则对任意的 $0 \leq k \leq n$，有
\[
\lim_{N \to \infty}\mathbb{P}(X_N = k) = \binom{n}{k} p^k (1-p)^{n-k}.
\]
:::

进一步，根据[[中心极限定理]]，二项分布在 $n$ 很大时接近于[[正态分布]]。
于是，如果在 $X \sim H(n,K,N)$ 中 $n,K,N$ 都很大（但需满足 $n,K \leq N$），
则有近似表达式
\[
\mathbb{P}(X \leq k) \approx \Phi\left(\frac{k - np}{\sqrt{np(1-p)}}\right),
\]
其中 $p = K/N$，$\Phi$ 是标准正态分布的[[累积分布函数]]。

```terms
超几何分布:
  en: hypergeometric distribution
  fr: loi hypergéométrique :f
  de: hypergeometrische Verteilung :f
  ja: 超<ちょう>幾<き>何<か>分<ぶん>布<ぷ>
  ko: 초기하 분포 (超幾何分布)
```
