---
title: 条件分布
notices:
  - name: 问题
    items:
      - 不符合本站的写作风格。
---

条件分布是概率论中的概念，可以看作 $1_{(X\in B)}$ 这种形式的随机变量的[[条件期望]]的推广。

## 定义

对于概率空间 $(\Omega,\mathcal F, P)$，
其上随机变量 $X$ 和满足 $\mathcal G\subseteq \mathcal F$ 的 $\sigma$-代数 $\mathcal G$，
我们自然地想到将 [[条件期望]] $E(1_A(X)|\mathcal G)$ 作为 $X$ 在 $\mathcal G$ 下条件分布的定义。
然而，对每个 Borel 集 $A$，$E(1_A(X)|\mathcal G)$ 只是 $P$-几乎必然定义的。
我们希望对每个 $\omega\in\Omega$，
$A\mapsto E(1_A(X)|\mathcal G)(\omega)$ 是一个 $\mathbb R$ 上的概率测度，
这要求我们对每个 Borel 集 $A$ 选取 $E(1_A(X)|\mathcal G)$ 的合适的版本。
其实，这确实是可以做到的。我们有下述的定理：

::: theorem {@thm:existence-of-conditional-expectation}
$X$ 是概率空间 $(\Omega,\mathcal F, P)$ 上的随机变量。
$\mathcal G$ 是一个 $\sigma$-代数，$\mathcal G\subseteq \mathcal F$。
存在映射 $\mu: \mathcal B_{\mathbb R}\times \Omega\to \mathbb R_{\ge 0}$
（$\mathcal B_{\mathbb R}$ 为 $\mathbb R$ 上的 Borel $\sigma$-代数），使得：

1. 对任意 $\omega\in \Omega$，$H\mapsto \mu(H, \omega)$ 是 $(\mathbb R, \mathcal B_{\mathbb R})$
   上的一个概率测度。

2. 对任意 Borel 集 $H$，$\omega\mapsto \mu(H, \omega)$ 是条件期望 $E(1_H(X)|\mathcal G)$
   的一个版本。

:::

::: proof
对每个有理数 $r$，设 $F(r,\omega)$ 是条件期望 $E(1_{(X\le r)}|\mathcal G)$ 的一个版本。
对 $r,s\in\mathbb Q, r\le s$，

```math {@eq:key-region-start}
F(r,\omega)\le F(s,\omega)
```

对 $\omega\in\Omega$几乎必然成立。

```math
F(r, \omega)= \lim_{n\to +\infty} F\Big(r+ \frac{1}{n}, \omega \Big)
```

对 $\omega\in\Omega$几乎必然成立。

```math {@eq:key-region-end}
\lim_{r\to -\infty} F(r,\omega)= 0, \lim_{r\to +\infty} F(r,\omega)= 1
```

对 $\omega\in\Omega$几乎必然成立。
因为有理数是可数的，所以存在 $\Omega$ 中的零测集 $E$，方程 @eq:key-region-start–@eq:key-region-end
对所有 $\omega\in \Omega\backslash E$，$r,s\in \mathbb Q$ 成立。

对于 $\omega\notin E$，定义 $\tilde F(x,\omega)= \inf_{r\in\mathbb Q, r>x} F(r, \omega)$。
显然 $F(r,\omega)= \tilde F(r,\omega), r\in\mathbb Q$，
为方便计我们用 $F(x,\omega)$ 表示 $\tilde F(x,\omega)$。
对每个固定的 $\omega$，$x\mapsto F(x,\omega)$ 不减且右连续，又根据方程 @eq:key-region-end 知
这是一个 $\mathbb R$ 上的分布函数。
用 $\mu (H, \omega)$ 表示其诱导的 $\mathbb R$ 上概率测度，即
\[
\mu (H, \omega)= P(Z\in H),\quad Z\text{ 是分布函数为 } x\mapsto F(x,\omega) \text{ 的随机变量}.
\]
任取一个 $\mathbb R$ 上的概率测度 $\nu$ 并定义 $\mu(H, \omega)= \nu(H)$，$\omega\in E$。
显然，这样构造的 $\mu(H, \omega)$ 满足条件 1。下面我们验证其亦满足条件 2。

根据构造，当 $H=(-\infty, r]$ 时，
$\mu(H, \omega)= F(r,\omega)$ 是条件期望 $E(1_{(X\le r)}|\mathcal G)$ 的一个版本，
是 $\mathcal G$-可测的。
对每个固定的 $\omega$，$H\mapsto \mu(H,\omega)$ 是一个测度，于是
\[
\{H: \omega\mapsto \mu(H, \omega)\text{ $\mathcal G$-可测 } \}
\]
是一个 $\lambda$-类，并且它包含 $((-\infty, r])_{r\in\mathbb Q}$，后者是一个 $\pi$-类。
根据 $\pi$-$\lambda$ 定理，对任意 Borel 集 $H$，$\omega\mapsto \mu(H, \omega)$ $\mathcal G$-可测。

还须验证对每个 $G\in\mathcal G$，Borel 集 $H$，
\[
\int_G \mu(H, \omega) dP = \int_G 1_{(X\in H)}.
\]
根据构造，上式当 $H=(-\infty, r]$ 时成立。
注意到固定 $G$，将上式两边视作 $H$ 的函数时，
它们都是 $(\mathbb R, \mathcal B_{\mathbb R})$ 上的（有限）测度。
熟知 $(\mathbb R, \mathcal B_{\mathbb R})$ 上有限的测度由 $(-\infty ,r]$ 的测度决定，
于是上式对任意 Borel 集 $H$ 成立。
:::

::: definition
对 $(\Omega,\mathcal F, P)$ 上的随机变量 $X$ 和 $\sigma$-代数 $\mathcal G\subseteq \mathcal F$，
@thm:existence-of-conditional-expectation 中的映射 $\mu$ 称为 $X$ 在 $\mathcal{G}$ 下的条件分布。
:::

::: remark
从 @thm:existence-of-conditional-expectation 的证明看到，条件分布一般不唯一。
:::

当 $\mathcal{G}= \sigma(Y)$（最小的使得 $Y$ 可测的 $\sigma$-代数），其中
$Y:\Omega\to\mathbb R^n$ 为一个随机变量时，
因为对任意随机变量 $Z$，$E(Z|Y)$ 都是 $Y$ 的 Borel 函数（见页面[[条件期望]]），所以我们得到：

::: theorem {@thm:conditional-expectation-w.r.t.-an-RV}
$X, Y$ 是概率空间 $(\Omega,\mathcal F, P)$ 上的随机变量。
存在映射 $\mu: \mathcal B_{\mathbb R}\times \mathbb R^n\to \mathbb R_{\ge 0}$，使得

1. 对任意 Borel 集 $B\in \mathcal B_{\mathbb R}$ 与条件期望 $E(1_{\{X\in B\}}|Y)$ 的一个版本，
   $\mu(B,y)= E(1_{\{X\in B\}}|Y=y)$ 对 $y\in A$ 成立，其中 $A\subseteq \mathbb R^n$
   满足 $P(Y\in A)= 1$。

2. 对任意 $y\in\mathbb R^n$，$B\mapsto \mu(B, y)$ 是 $(\mathbb R, \mathcal B_{\mathbb R})$
   上的一个概率测度。

:::

::: definition
$X$ 关于 $Y$ 的条件分布即定义为 @thm:conditional-expectation-w.r.t.-an-RV 中的映射 $\mu$。
:::

## 参考文献

```bibliography
Billingsley1986:
  type: book
  author: P. Billingsley
  year: 1986
  title: Probability and Measure
  edition: 2
  publisher: Wiley
  location: New York
```
