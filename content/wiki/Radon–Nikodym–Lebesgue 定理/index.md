---
title: Radon–Nikodym–Lebesgue 定理
aliases: [Radon–Nikodym 定理, Lebesgue 分解定理, Radon-Nikodym 定理, Radon-Nikodym-Lebesgue 定理]
categories: [测度论]
---

**Radon–Nikodym–Lebesgue 定理**是个[[测度论]]定理。
它把[[复测度]]沿着
[[$\sigma$-有限]][[测度]]分解为[[绝对连续测度|绝对连续]]部分与[[奇异测度|奇异]]部分，
并给出绝对连续部分的分类。上一句话的前半句也称为
**Lebesgue 分解定理**，后半句也称为
**Radon–Nikodym 定理**。一石二鸟的简洁证明由
[[John von Neumann|von Neumann]] 给出。

## 定理与证明

::: theorem
设 $(X,\mathcal{M})$ 是[[可测空间]]，$\mu$ 是其上
$\sigma$-有限正测度，$\nu$ 是其上复测度。则存在唯一函数
$f\in L^1(\mu)$ 以及测度 $\lambda$，使得
$\nu=f\mu+\lambda$，且 $\lambda\perp\mu$。
:::

::: proof
唯一性比较容易：如 $\nu=f_1\mu+\lambda_1=f_2\mu+\lambda_2$，
则 $(f_1-f_2)\mu=\lambda_2-\lambda_1$；等式左边关于 $\mu$
绝对连续，右边关于 $\mu$ 奇异，故两边都是 $0$，即
$f_1=f_2$，$\lambda_1=\lambda_2$。下证存在性。

把 $\nu$ 分成实部、虚部，再各分成正部、负部，
可设其为有限正测度。取分拆 $X=\bigsqcup_{i=1}^\infty X_i$
满足 $\mu(X_i)<\infty$，然后令 $w=\sum_{i=1}^\infty
\frac{1_{X_i}}{2^i\mu(X_i)}$，以 $w\mu$ 替换 $\mu$，
可设 $\mu$ 亦为有限正测度。这样 $\mu+\nu$ 自然也是有限测度，
于是 $L^2(\mu+\nu)\subseteq L^1(\mu+\nu)\subseteq
L^1(\mu)\cap L^1(\nu)$，且这些含入映射都连续。

考虑 [[Hilbert 空间]] $L^2(\mu+\nu)$ 上连续泛函
$\varphi\mapsto\int\varphi\mathrm{d}\nu$。由 [[Riesz 表示定理]]，
存在 $g\in L^2(\mu+\nu)$ 使得此泛函就是
$\left<\cdot,g\right>$。注意对 $\varphi\ge0$ 都有
$0\le\left<\varphi,g\right>\le\left<\varphi,1\right>$，
更改 $(\mu+\nu)$-零测集上 $g$ 的值，可设 $0\le g\le1$。
把 $g$ 的定义式移项，知对任意 $\varphi\in L^2(\mu+\nu)$，
$$
\int\varphi g\mathrm{d}\mu=\int\varphi(1-g)\mathrm{d}\nu.
$$
令 $A=\{g=1\}$，取 $\varphi=1_A$，知 $\mu(A)=0$。令
$f_n=\sum_{i=1}^ng^i$，任取 $E\in\mathcal{M}$，取
$\varphi=1_E\sum_{i=0}^{n-1}g^i$，知
$$
\int_Ef_n\mathrm{d}\mu=\int_E(1-g^n)\mathrm{d}\nu.
$$
令 $f=\frac{g}{1-g}=\lim_{n\to\infty}f_n$，
对上式用单调收敛定理，知
$$
\int_Ef\mathrm{d}\mu=\int_E1_{X\setminus A}\mathrm{d}\nu<\infty,
$$
换言之 $f\in L^1(\mu)$ 且
$$
\nu(E)=\int_Ef\mathrm{d}\mu+\nu(E\cap A).
$$
于是令 $\lambda=\nu|_A$，即 $\lambda(E)=\nu(E\cap A)$，
则由 $\mu(A)=0$ 知 $\lambda\perp\mu$，且由上式知
$\nu=f\mu+\lambda$。
:::

## 初等证明

我们补充一个初等的证明。

::: theorem [Radon–Nikodym 定理]
$\mu,\nu$ 是集合 $X$ 的 $\sigma$-代数 $\mathcal M$ 上两个 $\sigma$-有限的测度，
且对任意可测集 $E\in\mathcal M$，$\mu(E)=0$ 蕴含 $\nu(E)=0$。
则存在非负可测的 $f:X\to\mathbb R_{\ge 0}$ 使得 $\nu(E)=\int_E f\ d\mu$，
且这样的 $f$ 在 $\mu$-几乎处处意义下唯一，即如果 $g$ 是另一个满足上述条件的函数，
则 $f=g$ $\mu$-几乎处处成立。
:::

::: proof
我们分几步证明上述定理。

1. 我们先证明 $f$ 在 $\mu$-几乎处处意义下唯一。
   反设 $f,g$ 满足 $\int_E f\ d\mu=\int_E g\ d\mu=\nu(E)$ 对任意可测集 $E$ 成立且
   $\{x\in X: f(x)\ne g(x)\}$ 不是 $\mu$-零测集。
   则 $\{f>g\}$ 和 $\{f<g\}$ 必有一个不是$\mu$-零测集，不妨 $\mu(f>g)>0$。
   因为 $\{f>g\}= \cup_{n\in\mathbb Z_+} \{f-g>\frac 1n\}$，所以由测度连续性，
   存在 $n$ 使得 $E_n=\{f-g>\frac 1n\}$ 具有正的 $\mu$-测度。
   从而 $\int_{E_n} f\ d\mu-\int_{E_n} g\ d\mu\ge\frac 1n\mu(E_n)>0$，矛盾。

2. 我们化归定理为 $\mu(X), \nu(X)$ 均有限的情形。
   假设我们业已证明定理当 $\mu, \nu$ 在全集上的测度有限时成立。
   因为 $\mu,\nu$ 为 $X$ 上 $\sigma$-有限的测度，
   所以分别存在 $X$ 的分划 $(E_i)_{i\in\mathbb Z_+}$ 和 $(F_j)_{j\in\mathbb Z_+}$，
   对任意正整数 $i,j$，$\mu(E_i)$ 与 $\nu(F_j)$ 均有限。
   $(E_i\cap F_j)_{i,j\in\mathbb Z_+}$ 是 $X$ 的分划且 $\mu(E_i\cap F_j)$，
   $\nu(E_i\cap F_j)$ 均有限，
   我们只须在每个 $E_i\cap F_j$ 上应用 Radon–Nikodym 定理并把所得的函数 $f$“拼接”即可。

   于是，以下我们假设 $\mu(X)$，$\nu(X)$ 均有限。

3. {@claim:nu-is-zero-or-nu-lambda-mu} 我们断言，或者 $\nu\equiv 0$，
   或者存在 $\lambda>0$ 与具有 $\mu$-正测度的可测集 $A$，
   $\nu(E)\ge\lambda\mu(E)$ 对任意 $A$ 的可测子集 $E$ 成立。

   其实，对任意 $\lambda>0$，$\nu-\lambda\mu$ 是 $X$ 上符号测度，
   设 $X=P_{\lambda}\cup N_{\lambda}$ 为其 Hahn 分解，
   $P_{\lambda}$ 为正集，$N_{\lambda}$ 为负集。
   如果存在 $\lambda>0$，$\mu(P_{\lambda})>0$，则命题成立（$A= P_{\lambda}$ 符合第二个断言）。

   以下假设对任意 $\lambda>0$，$\mu(P_{\lambda})=0$，此时对任意 $P_{\lambda}$ 的可测子集 $E$，
   $\mu(E)=0$，从而由假设 $\nu(E)$ 也等于 $0$。
   对于 $N_{\lambda}$ 的可测子集 $E$，有 $\nu(E)\le\lambda\mu(E)$。
   于是对任意一个 $X$ 的可测子集 $E$ 与任意 $\lambda>0$，有
   \[
   \nu(E)= \nu(E\cap P_{\lambda})+ \nu(E\cap N_{\lambda})\le 0+\lambda\mu(E\cap N_{\lambda})\le\lambda\mu(E).
   \]
   因为上式对于任意 $\lambda>0$ 成立，所以 $\nu(E)=0$，即 $\nu\equiv 0$。

4. 如果 $\nu\equiv 0$，则定理对 $f\equiv 0$ 成立。以下我们假设 $\nu$ 不恒为 $0$。

5. {@S-is-not-empty} 我们断言，
   存在非负可测函数 $f$ 满足 $\int_X f\ d\mu>0$ 且 $\int_E f\ d\mu\le \nu(E)$ 对任意
   $E\in\mathcal M$ 成立。

   其实，
   由[步骤 3](@claim:nu-is-zero-or-nu-lambda-mu)知存在 $\lambda>0$ 与具有 $\mu$-正测度的可测集 $A$，
   $\nu(E)\ge\lambda\mu(E)$ 对任意 $A$ 的可测子集 $E$ 成立。
   我们验证 $f=\lambda\chi_A$ 即符合上述要求。事实上，
   \[
   \begin{aligned}
   \int_X \lambda\chi_A\ d\mu&= \lambda\mu(A)>0\\
   \int_E \lambda\chi_A\ d\mu&= \lambda\mu(A\cap E)\le \nu(A\cap E)\le\nu(E) .
   \end{aligned}
   \]

6. 由[步骤 5](@S-is-not-empty)知，集族
   \[
   \mathcal S= \{f:X\to\mathbb R\text{非负可测}:\ \int_X f\ d\mu>0, \int_E f\ d\mu\le \nu(E), E\in\mathcal M\}
   \]
   非空，且 $M=\sup_{f\in\mathcal S} \int_X f\ d\mu\le \nu(X)<+\infty$。

   我们断言，$g,h\in\mathcal S\implies \max(g,h)\in\mathcal S$。其实，
   \[
   \int_E \max(g,h)\ d\mu=\int_{E\cap (g>h)} g\ d\mu + \int_{E\cap (g\le h)} h\ d\mu\le \nu(E\cap (g>h))+ \nu(E\cap (g\le h))= \nu(E).
   \]

   取 $f_n\in\mathcal S$ 使得 $\int_X f_n\ d\mu\to M$。
   由上一段可知我们也可以用 $\max(f_1,\cdots, f_n)$ 替换 $f_n$，所以我们可以假设 $f_n$ 逐点递增。
   Levi 的单调收敛定理说 $f=\lim_{n\to +\infty} f_n\in\mathcal S$ 且 $\int_X f\ d\mu=M$。

7. 我们断言这个 $f$ 就是定理所期望的。
   设 $\eta(E)= \nu(E)- \int_E f\ d\mu$，则 $\eta$ 也是 $\mathcal M$ 上的测度，
   且 $\mu(E)=0\implies \nu(E)=0\implies \eta(E)=0$。
   只须证明 $\eta\equiv 0$。
   其实，如果 $\eta$ 不恒为 $0$，则重复[步骤 5](@S-is-not-empty)的论证知存在 $h$ 非负可测，
   $\int_X h\ d\mu>0$ 且 $\int_E h\ d\mu\le \eta(E)= \nu(E)- \int_E f\ d\mu$，
   从而 $\int_E (f+h)\ d\mu\le\nu(E)$，$f+h\in\mathcal S$，
   且 $\int_X (f+h)\ d\mu>M$，矛盾。所以 $\eta$ 恒为 $0$。

:::

::: theorem [Lebesgue 分解定理]
$\mu,\nu$ 分别是 $(X,\mathcal M)$ 上两个 $\sigma$-有限的测度，
则存在测度 $\nu_0,\nu_1$ 使得 $\nu=\nu_0+\nu_1$，$\nu_0$ 关于 $\mu$ 奇异，
$\nu_1$ 关于 $\mu$ 绝对连续。
:::

::: proof
**存在性**：定义 $\lambda=\mu+\nu$，则 $\lambda$ 为 $\sigma$-有限的测度
（设 $\mu,\nu$ 分别在 $(E_i)_{i\in\mathbb Z_+}, (F_j)_{j\in\mathbb Z_+}$ 有限，
则 $\lambda$ 在 $E_i\cap F_j$ 上有限）。
易证 $\int_E g\ d\lambda=\int_E g\ d\mu+ \int_E g\ d\nu$
（对于非负可测函数 $g$，$g$ 是递增的简单函数列的极限，用 Levi 的单调收敛引理即可；
对一般函数可以拆成正部和负部）。
$\mu$ 关于 $\lambda$ 绝对连续，由 Radon–Nikodym 定理，存在非负可测函数 $f$ 使得

```math {@eq:RN-derivative-of-mu-lambda}
\mu(E)= \int_E f\ d\lambda= \int_E f\ d\mu+ \int_E f\ d\nu .
```

定义 $X_+=\{x\in X: f(x)>0\}$，$X_0=\{x\in X: f(x)=0\}$。

我们断言 $\nu$ 的 Lebesgue 分解是 $\nu(E)=\nu(E\cap X_0)+\nu(E\cap X_+)$，
其中 $\nu_0: E\mapsto \nu(E\cap X_0)$ 对 $\mu$ 奇异，
$\nu_1:E\mapsto \nu(E\cap X_+)$ 对 $\mu$ 绝对连续。

其实，$\nu_0(X_+)=0$，由 @eq:RN-derivative-of-mu-lambda 知 $\mu(X_0)=\int_{X_0} 0\ d\lambda=0$，
所以 $\nu_0$ 与 $\mu$ 奇异。
如果 $\mu(E)=0$，由 @eq:RN-derivative-of-mu-lambda 知 $\int_E f\ d\nu=0$，
$f$ 在 $E$ 上 $\nu$-几乎处处为 $0$，即 $\nu(E\cap X_+)=0$，$\nu_1(E)=0$。

**唯一性**。我们先证明 $X$ 可以划分为可数多个子集，这些子集的 $\mu,\nu$ 测度均有限。
其实，因为 $\mu,\nu$ 为 $X$ 上 $\sigma$-有限的测度，
所以分别存在 $X$ 的分划 $(E_i)_{i\in\mathbb Z_+}$ 和 $(F_j)_{j\in\mathbb Z_+}$，
对任意正整数 $i,j$，$\mu(E_i)$ 与 $\nu(F_j)$ 均有限。
$(E_i\cap F_j)_{i,j\in\mathbb Z_+}$ 是 $X$ 的分划且 $\mu(E_i\cap F_j)$，$\nu(E_i\cap F_j)$ 均有限。

如果 $\nu$ 有 Lebesgue 分解 $\nu=\nu_1+\nu_2$，则对于 $X$ 的可测子集 $E$，
$\nu,\nu_1,\nu_2$ 在 $E$ 上的限制给出 $\nu$ 在测度空间
$(E,\mathcal{M}_E=\{A\in\mathcal M: A\subseteq E\})$
的 Lebesgue 分解。
反之，由上一段，设 $X$ 有分划 $X=\cup_{n\in\mathbb Z_+} E_n$，$\mu(E_n),\nu(E_n)$ 均有限，
则 $\nu$ 在每个 $E_n$ 上的 Lebesgue 分解“拼接”即可得到 $\nu$ 在 $X$ 上的 Lebesgue 分解。
所以我们只须证明 $\mu(X),\nu(X)$ 均有限时 Lebesgue 分解唯一。

以下假设 $\mu(X),\nu(X)$ 均有限，且 $\nu$ 有 Lebesgue 分解 $\nu=\nu_0+\nu_1=\mu_0+\mu_1$。
则符号测度 $\nu_0-\mu_0$ 奇异
（设 $X$ 有分划 $X=E_1\cup F_1= E_2\cup F_2$，$\nu_0(E_1)=\mu_0(E_2)=0$，$\mu(F_1)=\mu(F_2)=0$，
则 $\nu_0-\mu_0$ 在 $E_1\cap E_2$ 的任意子集上为 $0$，$\mu(F_1\cup F_2)=0$，
$X=(E_1\cap E_2) \cup (F_1\cup F_2)$），
$\mu_1-\nu_1$ 关于 $\mu$ 绝对连续，$\nu_0-\mu_0=\mu_1-\nu_1$。
对 $|\nu_0-\mu_0|=|\mu_1-\nu_1|$ 用 @singular-and-absolutely-continuous 知
$\nu_0=\mu_0, \nu_1=\mu_1$。
:::

::: lemma {@singular-and-absolutely-continuous}
$\mu_1,\mu_2$ 是 $(X,\mathcal M)$ 上两个测度，$\mu_1$ 既关于 $\mu_2$ 奇异，又关于 $\mu_2$ 绝对连续，
则 $\mu_1\equiv 0$。
:::

::: proof
设 $X$ 有分划 $X=E\cup F$，$\mu_1(E)=0$，$\mu_2(F)=0$。
则由绝对连续的假设知道 $\mu_1(F)=0$，$\mu_1(X)=\mu_1(E)+\mu_1(F)=0$。
:::

```terms
Radon–Nikodym–Lebesgue 定理:
  en: Radon–Nikodym–Lebesgue theorem
  fr: théorème de Radon–Nikodym–Lebesgue
```
