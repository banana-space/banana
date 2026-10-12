---
title: 二项分布
categories: [概率论]
navboxes: [概率论]
---

在[[概率论]]中，**二项分布**可以通俗解释为：重复做 $n$ 次
独立的试验，每次试验都有 $p$ 的概率成功，则成功的次数就服从
二项分布。例如：掷普通的骰子 $10$ 次，统计结果是 $6$ 的次数，则
次数服从二项分布 $B(10,1/6)$。

## 定义

::: definition [二项分布]
设 $X \colon \Omega \to \{0,1,\cdots, n\}$ 是概率空间 $(\Omega, \mathcal{F}, \mathbb{P})$
中的[[离散型随机变量]]，$0 \leq p \leq 1$。如果它的[[概率分布列]]是
\[
\mathbb{P}(X = k) = \binom{n}{k}p^k(1-p)^{n-k}, \quad 0 \leq k \leq n
\]
则称 $X$ 服从**二项分布**，记为 $X \sim B(n,p)$。
如果 $n = 1$，也就是只做一次试验，则所得的分布 $B(1,p)$ 被称为**两点分布**或 **Bernoulli 分布**。
:::

二项分布可以推广为[[随机向量]]的多项分布。

::: definition [多项分布]
设 $n$、$N$ 是正整数，$p_1, \cdots, p_n \in (0,1)$ 使得 $\sum_{k=1}^n p_k = 1$。
如果 $n$ 维随机向量 $\bm{X}$ 满足：对任意非负整数 $m_1, \cdots, m_n$，如果
$\sum_{k=1}^n m_k = N$，则
\[
\mathbb{P}(X_1=m_1, \cdots, X_n=m_n) = \binom{N}{m_1, \cdots, m_n} p_1^{m_1} \cdots p_n^{m_n},
\]
其中 $\binom{N}{m_1, \cdots, m_n}$ 为[[多重组合数]]，
则称 $\bm{X}$ 服从**多项分布**，记为 $\bm{X} \sim M_n(N; p_1, \cdots, p_n)$。
:::

对于服从二项分布 $B(n,p)$ 的随机变量 $X$，不难发现随机向量 $(X, n-X)$ 就服从 $n=2$ 时的多项分布
$M_2(n; p, 1-p)$。

## 性质

### 基本性质

- 设随机变量 $X$ 服从二项分布 $B(n,p)$。

  - $X$ 的[[期望]]是 $\mathbb{E}(X) = np$。

  - $X$ 的[[方差]]是 $\operatorname{Var}(X)=np(1-p)$。

  - $X$ 的[[特征函数 (概率论)|特征函数]]是 $\phi_X(t) = (1 - p + p \mathrm e^{\mathrm it})^n$。

  - 如果 $0 < p < 1$，则使得 $\mathbb{P}(X = k)$ 最大的 $k$ 为 $\lfloor (n+1)p \rfloor$。
    此外，如果 $(n+1)p$ 是整数，则 $k = (n+1)p - 1$
    也符合要求。

- 设随机向量 $\bm{X}$ 服从多项分布 $M_n(N; p_1, \cdots, p_n)$。

  - $\bm{X}$ 的值域是
    \[
    \{ (m_1, \cdots, m_n)\in \mathbb{N}^n \mid m_1 + \cdots + m_n = N\}.
    \]

  - $\bm{X}$ 的任意 $k$ 维[[边缘分布]]（$1 \leq k \leq n-1$）可以视为 $n = k + 1$ 的多项分布。
    比如，
    \[
    \mathbb{P}(X_1 = m_1, \cdots, X_k = m_k) = \binom{N}{m_1, \cdots, m_k, N-m_1-\cdots-m_k} p_1^{m_1} \cdots p_k^{m_k} (1-p_1-\cdots-p_k)^{N-m_1-\cdots-m_k}
    \]
    这样随机向量 $(X_1, \cdots, X_k, N-X_1-\cdots-X_k)$ 服从多项分布
    $M_{k+1}(N; p_1, \cdots, p_k, 1-p_1-\cdots-p_k)$。
    特别地，$\bm{X}$ 的每个分量都服从二项分布：$X_i \sim B(N,p_i)$。

  - 根据上一条性质，不难得到期望 $\mathbb{E}(\bm{X}) = N\bm{p}$，
    其中 $\bm{p} = (p_1, \cdots, p_n)^\top$。

  - 分量的方差和[[协方差]]：$\operatorname{Var}(X_i) = N p_i(1-p_i)$、
    $\operatorname{Cov}(X_i,X_j) = -Np_ip_j (i \neq j)$。
    于是协方差矩阵可以写成
    \[
    \operatorname{Cov}(\bm{X}) = N (\operatorname{diag}(\bm{p}) - \bm{p}\bm{p}^\top),
    \]
    其中 $\operatorname{diag}(\bm{p}) = \operatorname{diag}(p_1, \cdots, p_n)$
    表示以 $\bm{p}$ 的元素为元素的[[对角矩阵]]。

  - $\bm{X}$ 的特征函数是
    $\phi_{\bm X}(\bm t) = \left(\sum_{k=1}^n p_k \mathrm e^{\mathrm it_k}\right)^N$。

- 如果 $X$、$Y$ 为独立的随机变量，且 $X \sim B(n,p)$、$Y \sim B(m,p)$，则 $X+Y \sim B(n+m,p)$。

- 任何二项分布可以拆成一列独立且都服从两点分布的随机变量之和。
  如果 $X \sim B(n,p)$，记指示变量 $X_k = I(第 k 次试验成功)$，则
  $X = \sum_{k=1}^n X_k$，且 $X_k$ 相互独立，均服从两点分布 $B(1,p)$。

### 二项分布的近似

如果一列二项分布的期望存在[[极限]]，则这列二项分布趋近于 [[Poisson 分布]]。

::: proposition [Poisson 近似]
设 $X_n \sim B(n,p_n)$ 为一列服从二项分布的随机变量。如果
\[
\lim_{n\to\infty} np_n = \lambda > 0,
\]
则对任意 $k \in \mathbb{N}$：
\[
\lim_{n\to\infty} \mathbb{P}(X_n = k) = \mathrm e^{-\lambda} \frac{\lambda^k}{k!}.
\]
:::

设 $X \sim B(n,p)$，如果固定 $p$，令 $n$ 增大，则 $X$“标准化”以后将趋于[[正态分布]]。
这是[[中心极限定理]]
的特殊情形。

::: proposition [正态近似]
设 $p\in(0,1)$，随机变量 $X \sim B(n,p)$。则 $n\to\infty$ 时，有
\[
\frac{X - np}{\sqrt{np(1-p)}} \xrightarrow{d} \mathcal{N}(0,1).
\]
:::

实际应用中，在 $n$ 很大时，可用分布 $\mathcal{N}(np, np(1-p))$ 近似代替 $X$ 的分布。

```terms
二项分布:
  en: binomial distribution
  fr: loi binomiale :f
  de: Binomialverteilung :f
  ja: 二<に>項<こう>分<ぶん>布<ぷ>
  ko: 이항 분포 (二項分布)
两点分布:
  en: Bernoulli distribution
  fr: loi de Bernoulli :f
  de: Bernoulli-Verteilung :f
  ja: ベルヌーイ分<ぶん>布<ぷ>
  ko: 베르누이 분포
多项分布:
  en: multinomial distribution
  fr: loi multinomiale :f
  de: Multinomialverteilung :f
  ja: 多<た>項<こう>分<ぶん>布<ぷ>
  ko: 다항 분포 (多項分布)
```
