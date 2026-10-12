---
title: Thom 同构定理
aliases: [Thom 类]
categories: [纤维丛论]
navboxes: [向量丛与 K 理论]
---

**Thom 同构定理**描述了向量丛的 Thom 空间的上同调与底空间的上同调的同构关系。

## 定义

在本条目中，设 $p \colon E \to B$ 是 $n$ 维实[[向量丛]]，
对 $x \in B$，记 $E_x = p^{-1}(x)$。

设 $R$ 是固定的系数环。下文中以 $H^\bullet(\mathord{-}; R)$ 表示 $R$ 系数的[[奇异上同调]]。

::: definition [向量丛的定向]
$E$ 上的一个 **$R$-定向**就是对每个 $x \in B$，
选取纤维 $E_x$ 的相对上同调类
$$
\pm 1 \in H^n(E_x, E_x \backslash \{ 0 \}; R) \cong R,
$$
使得这些选取是局部相容的。
:::

::: remark
若 $2 = 0 \in R$，则任意向量丛总有一个唯一的 $R$-定向。
否则，选取 $R$-定向等价于选取 $\mathbb{Z}$-定向。
:::

::: definition [Thom 空间]
在 $E$ 上取定度量 $|\mathord{-}|$。记
\[
\begin{aligned}
  D(E) &= \{ (x, v) \in E \mid |v| \leq 1 \}, \\
  S(E) &= \{ (x, v) \in E \mid |v| = 1 \}, \\
  \operatorname{Th}(E) &= D(E) / S(E).
\end{aligned}
\]
商空间 $\operatorname{Th}(E)$ 称为 $E$ 的**Thom 空间**。
:::

::: proposition
由构造易知
$\widetilde{H}^\bullet(\operatorname{Th}(E); R)
  \cong H^\bullet(E, E \backslash B; R)$。
其中的上同调类可以理解为“沿纤维方向紧支”的上同调类。
:::

## 定理

::: theorem [Thom 同构定理]
设向量丛 $E \to B$ 上选定了 $R$-定向。则：

- 存在唯一的上同调类 $u \in \widetilde{H}^n(\operatorname{Th}(E); R)$，
  称为**Thom 类**，使得它在每一个纤维上的限制
    $$
    u|_{E_x} \in H^n(E_x, E_x \backslash \{ 0 \}; R)
    $$
  恰为定向中选定的上同调类。
- 对每个 $k \in \mathbb{Z}$，映射
    $$
    {} \cup u \colon H^k(B; R)
    \to \widetilde{H}^{k+n}(\operatorname{Th}(E); R)
    $$
  是同构，其中负数位置的上同调群约定为 $0$。

  特别地，$\operatorname{Th}(E)$ 是 [[n-连通空间|$(n-1)$-连通空间]]。

:::

::: remark
若 $E$、$B$ 是光滑流形，则复合映射
$$
H^{k+n}(E, E \backslash B; \mathbb{R})
\xrightarrow{\sim} \widetilde{H}^{k+n}(\operatorname{Th}(E); \mathbb{R})
\xrightarrow{\sim} H^k(B; \mathbb{R})
$$
以 de Rham 上同调表示，就对应于“沿纤维方向积分”。
:::
