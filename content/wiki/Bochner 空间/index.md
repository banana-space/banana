---
title: Bochner 空间
categories: [泛函分析]
notices:
  - name: 问题
    items:
      - 首段中“Bochner 空间是 Hölder 空间的推广”似乎应为 Lebesgue 空间（$L^p$ 空间）的推广。
---

**Bochner 空间**是 [[Hölder 空间]]的推广，
由取值在 [[Banach 空间]]的函数构成。

## 定义

设 $(X, \mathcal{M}, \mu)$ 是完备的 $\sigma$-有限测度空间，
$(B, \Vert\cdot\Vert)$ 是 Banach 空间，
配备拓扑诱导的 Borel 代数。
设 $f\colon X\to B$ 是可测映射。

::: definition
设 $1\leq p\leq \infty$。
向量值函数 $f\colon X\to B$ 称为 $L^p$ 可积的，
若 $f$ 是 [[Bochner 积分|Bochner 可测]] 的，
且 $\Vert f\Vert$ 是 $L^p$ 可积的非负函数。
:::

记 $L^p(X,B)$ 为取值在 $B$ 中的 $L^p$ 可积函数全体，
模去几乎处处相等的等价关系。定义其上的范数如下：
$$
\Vert f\Vert_{L^p}:= \left(\int_X
\Vert f\Vert^p\ d\mu\right)^{1/p}.
$$

## 性质

::: proposition
$L^p(X,B)$ 是 Banach 空间。
当 $p<\infty$ 时，简单函数在其中稠密。
:::

稠密性的证明与 [[Bochner 积分|Bochner 准则]] 并无二致。

::: theorem [对偶空间]
设 $(X,\mathcal{M},\sigma)$ 是有限测度空间，
Banach 空间 $B$ 的对偶 $B'$ 具有 [[Radon–Nikodym 性质]]。
则对 $p\in[1,\infty)$，
$L^p(X,B)$ 的对偶空间是 $L^{p'}(X,B^*)$。
:::

证明见 [@mse]。

## 参考文献

```bibliography
mse:
  type: online
  label: MSE
  site: Mathematics Stack Exchange
  title: Dual space of Bochner space
  url: https://math.stackexchange.com/questions/309033/dual-space-of-bochner-space
```
