---
title: 代数环面
categories: [代数群理论]
notices:
  - name: 问题
    items:
      - “定义”一节缺少一般概形上的代数环面的定义。
      - “基本性质”一节第三项中，由坐标环的描述得到的似乎应是分裂环面的范畴与有限秩自由 Abel 群范畴反等价；一般的代数环面需要考虑 Galois 作用（见“分类”一节）。
  - name: 区分
    pages:
      - 环面
navboxes: [代数群理论]
---

在[[代数群理论]]中，**代数环面**是一种较简单的[[代数群]]，
推广了[[乘法群概形|乘法群]]的概念。

在[[复数]]域 $\mathbb{C}$ 上，代数环面是指形如 $(\mathbb{C}^\times)^n$ 的代数群，
其中 $n$ 是[[自然数]]。
该群作为复 [[Lie 群]]，[[同伦等价]]于[[环面]]
$\mathrm{U} (1)^n \simeq (S^1)^n$，
后者也是前者的[[极大紧子群]]，因而将代数环面视为通常环面的类比。

更一般地，在[[代数闭域]]上，代数环面总是若干乘法群的直积。
而一般域上的代数环面则可以通过 [[Galois 下降]]得到：
代数环面一一对应于[[绝对 Galois 群]]在其特征群上的作用。
例如，实数域上一维环面有两个：乘法群和由范数为 $1$ 的复数构成的代数群，
即 $\mathrm{U}(1)$，
它们[[基变换]]到复数域上后皆同构于乘法群，而复共轭有着不同的作用。

代数环面是某些更复杂的群的组成部分，
例如在[[代数闭域]]上，任何[[约化代数群]]均包含[[极大环面]]，
且所有极大环面互相共轭。

## 定义

::: definition
设 $k$ 为[[域]]。
$T$ 为 $k$ 上的[[代数群]]。若存在 $k$ 的代数闭包 $\bar k$ 上的同构
\[
T_{\bar k} \cong \mathbb{G}_{\mathrm{m}, \bar k}^n,
\]
其中 $\mathbb{G}_\mathrm{m}$ 为[[乘法群概形|乘法群]]，
$n$ 为自然数，
则称 $T$ 为 $k$ 上的**代数环面**（简称**环面**）。
此时，整数 $n$ 称为 $T$ 的**维数**（或 **[[秩 (Lie 理论)|秩]]**）。

若上述同构可定义在 $k$ 上，即存在 $k$ 上的同构 $T \cong \mathbb{G}_\mathrm{m}^n$，
则称 $T$ 为**分裂环面**；否则称为**非分裂环面**。
:::

代数环面的重要不变量是其特征群和余特征群。

::: definition
设 $T$ 为 $k$ 上的代数环面。记 $\bar k$ 为 $k$ 的代数闭包，
$\mathbb{G}_{\mathrm{m}, \bar k}$ 为 $\bar k$ 上的乘法群。

- $T$ 的**特征群** $X^*(T)$ 定义为
  \[
  X^*(T) = \operatorname{Hom}_{\bar k}(T_{\bar k}, \mathbb{G}_{\mathrm{m}, \bar k}).
  \]

- $T$ 的**余特征群** $X_*(T)$ 定义为
  \[
  X_*(T) = \operatorname{Hom}_{\bar k}(\mathbb{G}_{\mathrm{m}, \bar k}, T_{\bar k}).
  \]

:::

## 性质

### 基本性质

设 $T$ 为域 $k$ 上维数 $n$ 的代数环面。

- $T$ 交换、连通且[[光滑]]。

- 特征群、余特征群 $X^*(T)$、
  $X_*(T)$ 是秩为 $n$ 的[[自由 Abel 群]]，
  且有自然的[[完全配对]]
  \[
  \langle -, - \rangle \colon X_*(T) \times X^*(T) \to \mathbb{Z},
  \]
  由 $(\chi, \lambda) \mapsto \chi \circ \lambda$ 给出，
  它使 $X_*(T)$ 成为 $X^*(T)$ 的[[对偶格]]。

- 分裂环面的[[坐标环]] $k[T]$ 同构于群代数 $k[X^*(T)]$，
  故代数环面范畴与有限秩自由 Abel 群范畴反等价。

- 代数环面的任何有限维[[代数群表示|表示]]都是半单的，
  且在分裂情形可分解为一维子表示的直和，这些子表示由 $X^*(T)$ 中的元素完全分类。

### 分类

代数环面的特征群上可以给出绝对 Galois 群的作用，通过此作用可以分类代数环面。

::: theorem [分类] {@thm:分类}
对代数环面 $T$，取定同构
\[
T_{\bar k} \cong \mathbb{G}_{\mathrm{m}, \bar k}^n,
\]
则对绝对 Galois 群
$\Gamma_k = \operatorname{Gal}(\bar k/k)$ 的元素 $\sigma$，
$\sigma$ 通过 $T$ 和 $\mathbb{G}_\mathrm{m}$ 诱导了此同构环面上的两个半线性自同构，
记为 $\sigma_T$ 与 $\sigma_0$，
则有 $\sigma_T\sigma_0^{-1}$ 是此环面上的同构，
从而诱导了 $\Gamma_k$ 在 $X^*(T)$ 上的连续作用。

这一对应给出了代数环面到带有绝对 Galois 群
$\Gamma_k = \operatorname{Gal}(\bar k/k)$
的连续作用的有限秩自由 Abel 群的[[反范畴等价]]。
此时 $T$ 分裂当且仅当 $\Gamma_k$ 在 $X^*(T)$ 上的作用平凡。
:::

### 表示

从上述代数群的分类可以得到代数群表示的分类。

::: theorem [表示的分类]
对任意域 $k$ 上的代数环面 $T$，
其不可约表示的同构类与 $X^*(T)$
在绝对 Galois 群 $\Gamma_k$ 下作用的轨道类
$X^*(T)_{\Gamma_k}$ 一一对应。

具体来说，
对 $\lambda \in X^*(T)_{\Gamma_k}$，
定义
\[
V_\lambda = \bigoplus_{\chi \in X^*(T),\bar{\chi}=\lambda}
\bar{k}_\chi e_\chi
\]
这里 $\{e_\chi\}$ 是一组基，
$\bar{k}_\chi$ 是 $T_{\bar{k}}$ 的一维表示，特征为 $\chi$。
则对任意 $\sigma \in \Gamma_k$，
存在唯一的 $V_\lambda$ 的线性自同构 $\sigma_\lambda$，
保持基 $\{e_\chi\}$，并使得以下图表交换：
\[
\begin{tikzcd}
  T_{\bar{k}} \times V_\lambda
  \ar[r]\ar[d, "\sigma_T\sigma_0^{-1}\times \sigma_\lambda"']
  & V_\lambda \ar[d, "\sigma_\lambda"] \\
  T_{\bar{k}} \times V_\lambda \ar[r] & V_\lambda,
\end{tikzcd}
\]
其中 $\sigma_T\sigma_0^{-1}$ 是 @thm:分类 中
$T_{\bar{k}}$ 的自同构，横向的映射为群表示。
这些自同构 $\{\sigma_\lambda\}$ 构成了
$\Gamma_k$ 在 $V_\lambda$ 上的线性作用。

将此作用 $(-)_\lambda$ 复合 $\Gamma_k$ 在系数上的作用，
则诱导了 $\Gamma_k$ 在 $V_\lambda$ 上的半线性作用。
取 $\overline{V_\lambda}$ 为 $V_\lambda$ 在此作用下的不动点，
则 $T_{\bar{k}}$ 在 $V_\lambda$ 上的表示诱导了
$T$ 在 $\overline{V_\lambda}$ 上的表示，
它是不可约表示，且所有不可约表示在同构意义下均形如 $\overline{V_\lambda}$。
:::

## 例子

- [[乘法群概形|乘法群]] $\mathbb{G}_\mathrm{m}$ 是一维分裂环面，
  其表示形如 $z\mapsto z^m$，$m \in \mathbb{Z}$。

- 直积 $\mathbb{G}_\mathrm{m}^n$ 是 $n$ 维分裂环面，
  其表示形如 $(z_1, \dots, z_n)\mapsto z_1^{m_1}\cdots z_n^{m_n}$，
  其中 $m_1, \cdots, m_n \in \mathbb{Z}$。

- 设 $L/k$ 为有限[[Galois 扩张]]，
  则[[Weil 限制]] $T = R_{L/k} \mathbb{G}_\mathrm{m}$ 是一个 $[L:k]$ 维环面，
  且当 $L \neq k$ 时通常非分裂。此时
  \[
  T_L \simeq \bigoplus_{\operatorname{Gal}(L/k)}\mathbb{G}_{\mathrm{m},L},
  \]
  且 $\operatorname{Gal}(L/k)$ 在 $X^*(T)$ 上的作用平移各个分量，
  [[范数]]映射 $T \to \mathbb{G}_{m,k}$ 诱导特征群上的对角嵌入。

- 取 $k = \mathbb{R}$，$L = \mathbb{C}$，
  考虑范数映射
  \[
  \operatorname{N}_{\mathbb{C}/\mathbb{R}} \colon R_{\mathbb{C}/\mathbb{R}} \mathbb{G}_\mathrm{m} \to \mathbb{G}_\mathrm{m},
  \]
  其核 $T = \ker(\operatorname{N})$ 是一维环面，
  即[[酉群]] $\mathrm{U}(1)$，
  其实点集为圆周 $S^1$；$T$ 在 $\mathbb{R}$ 上非分裂，
  但在 $\mathbb{C}$ 上同构于 $\mathbb{G}_\mathrm{m}$。
  此时 $X^*(T)\simeq \mathbb{Z}$，且复共轭的作用为乘 $-1$。

- 在上述例子中，$X^*(R_{\mathbb{C}/\mathbb{R}} \mathbb{G}_\mathrm{m})\simeq \mathbb{Z}^2$，
  则对 $(a, b)\in \mathbb{Z}^2$，其对应的不可约表示为
  - $\mathbb{A}^1_{\mathbb{R}}$，其中 $z\mapsto |z|^{2a}$，如 $a=b$。
  - $R_{\mathbb{C}/\mathbb{R}} \mathbb{A}^1_{\mathbb{C}} \simeq \mathbb{A}^2_{\mathbb{R}}$，
    其中 $z\mapsto z^a\bar{z}^b$，如 $a \neq b$。

```terms
代数环面:
  en: algebraic torus
  fr: tore algébrique :m
```
