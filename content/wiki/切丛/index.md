---
title: 切丛
categories: [微分几何]
navboxes: [微分几何]
---

<disambiguation>
本条目介绍的是[[微分几何]]中的切丛。关于[[代数几何]]中的切丛，请参见[[切丛（代数几何）]]。
</disambiguation>

<problems>
- “性质”一节需要扩充。
</problems>

[[光滑流形]] $X$ 的**切丛** $\mathrm{T} X \to X$
是将 $X$ 每个点处的[[切空间]]拼起来，
而得到的 $X$ 上的[[光滑向量丛]]。

## 定义

::: definition [切丛]
设 $X$ 是[[光滑流形]]。
对每个 $x \in X$，记 $\mathrm{T}_x X$ 为 $X$ 在 $x$ 处的[[切空间]]。

作为[[集合]]，我们定义
\[
\mathrm{T} X = \coprod_{x \in X} \mathrm{T}_x X.
\]
我们赋予 $\mathrm{T} X$ 如下的光滑结构：
对每个坐标卡 $\varphi \colon \mathbb{R}^n \to X$，
相应地定义 $\mathrm{T} X$ 的一个坐标卡
\[
\begin{aligned}
  \tilde{\varphi} \colon \mathbb{R}^n \times \mathbb{R}^n & \to \mathrm{T} X, \\
  (x, v) & \mapsto (\varphi(x), \varphi_* (v)),
\end{aligned}
\]
其中 $\varphi_*$ 是[[光滑映射|切映射]]，
记号 $(\varphi(x), \varphi_* (v))$ 的含义是
$\mathrm{T}_{\varphi (x)} X$ 中的向量 $\varphi_* (v)$。
这使得 $\mathrm{T} X$ 具有了[[光滑流形]]的结构。
最后，我们有一个投影映射
\[
\mathrm{T} X \to X,
\]
它将每个 $\mathrm{T}_x X$ 映到 $x$。
这使得 $\mathrm{T} X$ 成为 $X$ 上的[[光滑向量丛]]，
称为 $X$ 的**切丛**。
它的秩与 $X$ 的维数相同。
:::

::: definition [向量场]
设 $X$ 是光滑流形。
则 $X$ 上的 **[[向量场]]** 是指切丛 $\mathrm{T} X$
的光滑[[截面]]。
:::

## 例子

- [[Euclid 空间]] $\mathbb{R}^n$ 的切丛是[[平凡丛]] $\mathbb{R}^n \times \mathbb{R}^n$；
  [[圆周]] $S^1$ 的切丛也是平凡丛 $S^1 \times \mathbb{R}$。

- [[毛球定理]]说明，
  [[球面]] $S^2$ 的切丛不是平凡丛。
  事实上，[[可平行化球面|具有平凡切丛的球面]]只有 $S^0$、$S^1$、$S^3$、$S^7$，
  它们切丛的平凡化分别由
  $\mathbb{R}$、$\mathbb{C}$、$\mathbb{H}$、$\mathbb{O}$
  中单位球面上的乘法给出。

## 性质

::: proposition
设 $X$ 是[[复流形]]。
则 $X$ 的切丛可以看作一个复向量丛。
:::

```terms
切丛:
  en: tangent bundle
  de: Tangentialbündel :n
  fr: fibré tangent :m
```
