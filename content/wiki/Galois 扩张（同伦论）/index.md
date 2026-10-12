---
title: Galois 扩张（同伦论）
categories: [同伦论, 高阶代数]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

[[同伦论]]中的 **Galois 扩张**是[[域论]]中相应概念在
[[$\mathbb{E}_\infty$-环]]或一般[[对称幺半范畴]]中交换代数上的推广。

## 定义

::: definition [有限 Galois 扩张] {@def}
设 $G$ 是有限群，$\mathcal{C}$ 是对称幺半范畴，
$R$ 是 $\mathcal{C}$ 中交换代数，带 $G$-作用，换言之
$R\in\mathsf{CAlg}(\mathcal{C})^{\mathrm{B} G}$。称 $R$ 为 $\mathcal{C}$
中 **$G$-Galois 代数**，指：

- 自然映射 $\mathbb{1}_{\mathcal{C}}\to R^{hG}$ 是同构，
  其中 $R^{hG}$ 表示 $R$ 的 $G$-不动点，即 $\lim_{\mathrm{B} G}R$。

- 自然映射 $R\otimes_{\mathcal{C}}R\to\prod_GR$，
  $x\otimes y\mapsto (x\cdot gy)_{g\in G}$ 是同构。

在此基础上，如函子
$-\otimes_{\mathcal{C}}R\colon\mathcal{C}\to\mathcal{C}$
反映同构，则称 $R$ **忠实**。

设 $G$ 是有限群，$\mathcal{C}$ 是对称幺半范畴，
$k$ 是 $\mathcal{C}$ 中交换代数，$R$ 是交换 $k$-代数，
带 $G$-作用。称 $k\to R$ 为 **（忠实）$G$-Galois 扩张**，
指 $R$ 为 $\mathsf{Mod}_k(\mathcal{C})$ 中（忠实）$G$-Galois 代数。
:::

::: remark
以上定义隐含了相关的极限存在。
:::

## 性质

::: proposition [Rognes]
记号同 @def 第一段，并设 $\mathcal{C}$
是加性对称幺半范畴。则 $R$ 忠实当且仅当范数映射
$R_{hG}\to R^{hG}$ 是同构。
:::

## 例子

::: example
取特征 $p$ 域 $k$。考虑 $p$ 阶循环群 $C_p$ 平凡作用在
$k$ 上。则在 $\mathsf{D}(k)=\mathsf{Mod}_k(\mathsf{Sp})$ 中，$k^{hC_p}\to k$
是 $C_p$-Galois 扩张。它不忠实，因为
$k^{tC_p}\otimes_{k^{hC_p}}k=0$。
:::

```terms
Galois 扩张:
  en: Galois extension
```
