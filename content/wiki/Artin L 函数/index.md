---
title: Artin $L$ 函数
categories: [解析数论]
---

<problems>
- “零点与极点”“Chebotarev 密度定理”“例子”各节需要扩充。
- “定义”一节的注中，$\zeta_L(s)$ 的分解里各因子似乎应为 $L(s,\rho,L/K)^{\dim\rho}$。
- “解析延拓与函数方程”一节的函数方程右边似乎应为 $W(\rho)\Lambda(1-s,\rho^{\vee},L/K)$。
</problems>

**Artin $L$ 函数**是一类 [[$L$ 函数]]，
给出了 [[Galois 群]] $G$ 上[[线性表示]]的信息。
通过[[类域论]]，
它与 [[Hecke $L$ 函数]]密切联系。

## 定义

::: definition
给定[[数域]]的 [[Galois 扩张]] $L/K$，
Galois 群为 $G$，
$(\rho,V)$ 是 $G$ 的一个复线性表示，
定义 Artin $L$ 函数为
\[
L(s,\rho,L/K)=\prod_{\mathfrak{p}\subset \mathcal{O}_K}
\frac1{\det\left(
I-N(\mathfrak{p})^{-s}\rho(\operatorname{Frob}_{\mathfrak{P}})
\mid V^{I_{\mathfrak{P}}} \right)}.
\]
其中求积跑遍 $K$ 中的[[素理想]]，
$N(\mathfrak{p})$ 是[[理想范]]，
$\mathfrak{P}$ 是 $\mathfrak{p}$ 上的任一素理想，
而 $V^{I_{\mathfrak{P}}}$ 是 $V$ 中被惯性群 $I_{\mathfrak{P}}$
固定的元素。
:::

::: remark
注意当 $\rho$ 是[[平凡表示]]时，
\[
L(s,\rho,L/K)=\zeta_K(s)
\]
是[[Dedekind $\zeta$ 函数]]。
这也给出了它们之间的关系：
\[
\zeta_L(s)=\zeta_K(s)\prod_{1\ne\rho\in\operatorname{Irr}(G)}
L(s,\rho,L/K).
\]
:::

## 性质

通过 [[Brauer 定理]]，
我们可以把对一般 Artin $L$ 函数的研究转为 [[Abel 扩张]]上的
Artin $L$ 函数的研究。

通过 [[类域论|Artin 互反律]]：
\[
\begin{aligned}
  K^{\times}\backslash\mathbb{I}_K/N_{L/K}(\mathbb{I}_L)
  &\rightarrow \operatorname{Gal}(L/K)\\
  [\mathfrak{p}] & \mapsto \operatorname{Frob}_{\mathfrak{p}}
\end{aligned}
\]
我们可以把 Abel 扩张意义下的 Artin $L$ 函数的研究转为对 [[Hecke $L$ 函数]]的研究。

而 Hecke $L$ 函数的性质是较为明朗的。

### 解析延拓与函数方程

::: notation*
我们记：

- 取局部 Artin $L$ 因子为
  \[
  L_v(s,\rho,L/K)=
  \Gamma_{\mathbb{C}}(s)^{\dim\rho},\,K_v=\mathbb{C}
  \]
  与
  \[
  L_v(s,\rho,L/K)=
  \Gamma_{\mathbb{R}}(s)^{n_+}\Gamma_{\mathbb{R}}(s+1)^{n_-},\,K_v=\mathbb{R},
  \]
  其中 $n_+$ 与 $n_-$ 分别是复共轭（如果存在的话）的
  $1$-特征空间与 $(-1)$-特征空间的维数。

- 取 $\mathfrak{f}_{\rho}$ 为表示 $\rho$ 的[[Artin 导子]]。

- 取 Artin $L$ 函数的完备化为
  \[
  \Lambda(s,\rho,L/K)=
  |\Delta_{K/\mathbb{Q}}|^{\frac{s}2\cdot\dim\rho}
  N(\mathfrak{f}_{\rho})^{\frac{s}2}
  \prod_{v\in{K}_\infty}L_v(s,\rho,L/K)
  L(s,\rho,L/K).
  \]

:::

::: theorem
对于 $G$ 的任一表示 $\rho$，
$\Lambda(s,\rho,L/K)$ 延拓成 $\mathbb{C}$ 上的亚纯函数，
并且满足函数方程
\[
\Lambda(s,\rho,L/K)=W(\rho)\Lambda(s,\rho^{\vee},L/K),
\]
其中 $|W(\rho)|=1$ 为常数。
:::

### 零点与极点

### 函子性

::: theorem {@thm:函子性}
设 $K\subseteq M\subseteq L$ 是数域，$L/K$ 为 Galois
扩张，$G=\operatorname{Gal}(L/K)$，
$H=\operatorname{Gal}(L/M)$。

- 如 $\rho,\rho'$ 是 $G$ 的复表示，则
  $$
  L(s,\rho\oplus\rho',L/K)=
  L(s,\rho,L/K)L(s,\rho',L/K).
  $$

- 设 $M/K$ 也是 Galois 扩张，即
  $H\trianglelefteq G$。如 $\rho$ 是 $G/H$
  的复表示，也以 $\rho$ 记该表示复合商映射
  $G\to G/H$，则
  $$
  L(s,\rho,L/K)=L(s,\rho,M/K).
  $$

- 设 $\pi$ 是 $H$ 的复表示，则
  $$
  L(s,\operatorname{Ind}_H^G\pi,L/K)=L(s,\pi,L/M).
  $$

:::

::: remark
由 @thm:函子性，对于数域 $K$，可对其[[绝对 Galois 群]]
$G_K$ 的连续复表示 $\rho$ 定义 Artin $L$ 函数 $L(s,\rho)$：
由连续性，$\rho$ 必然定义在某个 $\operatorname{Gal}(L/K)$
上；@thm:函子性 保证了 $L(s,\rho,L/K)$ 与 $L$ 无关。
此外对数域 $F\subseteq K$，由 @thm:函子性 知
$L(s,\operatorname{Ind}_{G_K}^{G_F}\rho)=L(s,\rho)$。
:::

## 应用

### Chebotarev 密度定理

<see>[[Chebotarev 密度定理]]</see>

## 例子

```terms
Artin $L$ 函数:
  en: Artin $L$-function
  fr: fonction $L$ d'Artin
```
