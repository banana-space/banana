---
title: 绝对连续测度
categories: [测度论]
navboxes: [测度论]
---

在[[测度论]]中，**绝对连续** 刻画了两种[[测度]]之间的关系。
如果一个有限测度关于另一个测度绝对连续，则当后者变化充分小时，
前者变化也充分小（@equivalent-characterization）。

## 定义与等价刻画

::: definition
$(X,\mathcal M)$ 是[[可测空间]]，$\mu,\nu$是其上两个测度。
如果对任意 $E\in\mathcal M$，$\mu(E)=0$ 蕴含 $\nu(E)=0$，
则称测度 $\nu$ 关于测度 $\mu$ 绝对连续。
:::

当 $\nu(X)$ 有限时，绝对连续有如下等价的 $\varepsilon-\delta$ 刻画。

::: theorem {@equivalent-characterization}
$(X,\mathcal M)$ 是[[可测空间]]，$\mu,\nu$是其上两个测度。
$\nu(X)$ 有限。则 $\nu$ 关于 $\mu$ 绝对连续 $\iff$
对任意 $\varepsilon>0$，存在 $\delta>0$，使得
$\mu(E)<\delta$ 蕴含 $\nu(E)<\varepsilon$。
:::

::: proof
$(\impliedby)$ 明显。我们用反证法证明 $(\implies)$。
反设存在 $\varepsilon>0$，对任意 $n\in\mathbb Z_+$，
存在可测集 $E_n$ 使得 $\mu(E_n)<\frac{1}{2^n}$ 且 $\nu(E_n)>\varepsilon$。
令 $F_k=\cup_{n\ge k} E_n$，$F=\cap_{n=1}^{+\infty} F_k$。
我们断言 $\mu(F)=0$ 且 $\nu(F)>0$。其实，
\[
\mu(F)\le \mu(F_k)\le \sum\nolimits_{n\ge k} \mu(E_n) =\frac{1}{2^{k-1}},
\]
故 $\mu(F)=0$。
而 $\nu(F_k)\ge\nu(E_k)\ge\varepsilon$ 对任意 $k$ 成立，由假设 $\nu(F_1)$ 有限，
$(F_k)$ 是一列递减的集合，
所以由测度从上方逼近的连续性，$\nu(F)=\lim_{k\to+\infty} \nu(F_k)\ge \varepsilon$。
这与 $\nu$ 关于 $\mu$ 绝对连续矛盾。
:::

::: remark
@equivalent-characterization 的 $\implies$ 一端
在 $\nu$ 是无限测度时不一定成立。
反例如 $X=\mathbb R$，$\mathcal M$ 取所有 [[Borel 集]]，
$\mu$ 取 [[Lebesgue 测度]]，$\nu= |x|\ d\mu$
（即 $\nu(E)=\int_E |x|\ d\mu$）。
:::

## 性质

::: theorem [Radon–Nikodym 定理]
$\mu,\nu$ 是集合 $X$ 的 $\sigma$-代数 $\mathcal M$ 上两个 $\sigma$-有限的测度，
且 $\nu$ 关于 $\mu$ 绝对连续。
则存在非负可测的 $f:X\to\mathbb R_{\ge 0}$ 使得 $\nu(E)=\int_E f\ d\mu$，
且这样的 $f$ 在 $\mu$-几乎处处意义下唯一，即如果 $g$ 是另一个满足上述条件的函数，
则 $f=g$ $\mu$-几乎处处成立。
:::

证明见页面 [[Radon–Nikodym–Lebesgue 定理]]。

::: theorem [Lebesgue 分解定理]
$\mu,\nu$ 分别是 $(X,\mathcal M)$ 上两个 $\sigma$-有限的测度，
则存在测度 $\nu_0,\nu_1$ 使得 $\nu=\nu_0+\nu_1$，$\nu_0$ 关于 $\mu$ 奇异，
$\nu_1$ 关于 $\mu$ 绝对连续。
:::

证明见页面 [[Radon–Nikodym–Lebesgue 定理]]。

```terms
绝对连续:
  en: absolutely continuous
```
