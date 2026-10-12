---
title: Egorov 定理
categories: [测度论]
notices:
  - name: 问题
    items:
      - “应用”一节需要扩充。
---

在[[测度论]]中，
**Egorov 定理**给出了从[[逐点收敛函数列|逐点收敛]]过渡到[[一致收敛函数列|一致收敛]]的条件。

## 叙述与证明

设 $(X,\mathcal{M},\mu)$ 是[[有限测度空间]]。
$(M, d)$ 是[[度量空间]]，
配上 [[Borel 代数]]。

::: theorem [Egorov]
设 $f_n\colon X\to M$ 是一列[[可测函数]]，
[[几乎处处收敛函数列|几乎处处收敛]]到函数 $f$。
则对于任意 $\varepsilon>0$，
存在[[可测集]] $E\subset X$，
使得 $\mu(X-E)<\varepsilon$，
且 $\{f_n\}$ 在 $E$ 上[[一致收敛函数列|一致收敛]]。
:::

::: proof
对于任意 $N>0$，
由几乎处处收敛推出
$$
\mu\left(\bigcap_{m\geq 1}\bigcup_{n\geq m}
\{d(f,f_n)\geq N^{-1}\}\right)=0.
$$
而 $\mu$ 是有限测度，故存在 $m_N$，
使得
$$
\mu\left(\bigcup_{n\geq m_N}
\{d(f,f_n)\geq N^{-1}\}\right)
<\frac{\varepsilon}{2^N}.
$$
记上述集合对 $N=1,2,\cdots$ 的并集为 $F$。
则 $\mu(F)<\varepsilon$，
且 $f_n$ 在 $E:=X-F$ 上一致收敛到 $f$。
:::

## 例子

- 考虑 $\mathbb{R}$ 上的可测函数及 Lebesgue 测度。
  取 $f_n$ 为 $[n,n+1]$ 上的示性函数，
  则 $f_n$ 逐点收敛至 $0$。
  此时不能找出 $F$，$\mu(F)<1$，
  且 $f_n$ 在 $F$ 之外一致收敛。

## 应用
