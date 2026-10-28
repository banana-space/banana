---
title: 迹（域论）
aliases: [迹（代数数论）, 迹（数论）]
categories: [域论]
navboxes: [域论]
---

<disambiguation>
关于其他含义，请参见[[迹（多义词）]]。
</disambiguation>

<problems>
- “性质”一节第一个命题中的 $f_\alpha(t)$ 没有定义（由证明看是 $T_\alpha$ 的特征多项式）。
- “性质”一节需要扩充，后两个命题缺少证明。
</problems>

对[[域]]的[[有限扩张]] $L/K$，其**迹**是一个 $K$-[[线性映射]]
$\operatorname{Tr}_{L/K} \colon L \to K$。
对扩域 $L$ 的元素 $\alpha\in L$，
其迹 $\operatorname{Tr}_{L/K} (\alpha)$
等于乘 $\alpha$ 这一操作作为 $L$ 上的 $K$-[[线性变换]]的[[迹]]。
对 [[Galois 扩张]]而言，$\alpha$ 的迹也等于其所有 [[Galois 共轭]]之和。

## 定义

::: definition
设 $L/K$ 为[[域]]的[[有限扩张]]。对 $\alpha\in L$，
考虑 $K$-[[向量空间]] $L$ 上的 $K$-[[线性变换]]
\[
T_\alpha: L\to L, \qquad
T_\alpha(x)=\alpha x.
\]
定义该线性变换的[[迹]]
\[
\operatorname{Tr}_{L/K} (\alpha) =
\operatorname{tr} (T_\alpha)
\]
为元素 $\alpha$ 的**迹**。

映射 $\operatorname{Tr}_{L/K}:L\to K$ 是 $K$-线性映射。
:::

## 性质

::: proposition
若 $L/K$ 为[[可分扩张]]，$\sigma$ 取遍 $L$ 到 $K$ 的[[代数闭包]] $\overline{K}$
的所有 $K$-嵌入，则

1. $f_\alpha(t)=\prod_{\sigma} (t-\sigma(\alpha))$；

2. $\operatorname{Tr}_{L/K}(\alpha)=\sum_{\sigma} \sigma(\alpha)$。

:::

::: proof
设 $[L:K]=n$，$\alpha$ 的最小多项式 $p_\alpha(t)$ 次数为 $m$，
\[
p_\alpha(t)=t^m+c_1t^{m-1}+\cdots+c_m,
\]
$[L:K(\alpha)]=d$，则 $n=md$。

$1,\alpha,\alpha^2,\ldots,\alpha^{m-1}$ 构成 $K(\alpha)/K$ 的一组基，
取 $\alpha_1,\alpha_2,\ldots,\alpha_d$ 为 $L/K(\alpha)$ 一组基，则
$\alpha_i\alpha^j, 1\le i\le d,0\le j\le m-1$ 构成 $L/K$ 一组基。
在这组基下，$T_\alpha$ 的矩阵是分块对角矩阵，每块均为 $p_\alpha(t)$ 的[[友阵]]
\[
\begin{pmatrix}
  0 & 0 & \cdots & 0 &  -c_m\\
  1 & 0 & \cdots & 0 & -c_{m-1}\\
  0 & 1 & \cdots & 0 &-c_{m-2}\\
  \vdots & \vdots & \ddots & \vdots & \vdots \\
  0 & 0 & \cdots & 1 & -c_1
\end{pmatrix},
\]
一共 $d$ 块，故 $f_\alpha(t)=p_\alpha(t)^d$。

另一方面，设 $\hom_K(K(\alpha),\overline{K})=\sigma_1, \sigma_2,\ldots,\sigma_m$，
则 $p_\alpha(t)=\prod_{i=1}^m (t-\sigma_i(\alpha))$。
由可分性，对于每个 $\sigma_i$，$\hom(L,\overline{K})$ 中有 $d$ 个不同嵌入
$\sigma_{i,1},\ldots,\sigma_{i,d}$ 使 $\sigma_{i,j}|_{K(\alpha)}=\sigma_i$，
且这 $md=n$ 个嵌入构成 $L$ 到 $\overline{K}$ 的所有 $K$-嵌入。故
\[
f_\alpha(t)=p_\alpha(t)^d=\prod_{i=1}^m (t-\sigma_i\alpha)^d=
\prod_{i=1}^d\prod_{j=1}^m(t-\sigma_{i,j}\alpha)=\prod_\sigma(t-\sigma\alpha),
\]
最后一个求积式 $\sigma$ 取遍 $\hom_K(L,\overline{K})$。
:::

::: proposition
设 $L/E/K$ 为域扩张的塔，则
\[
\operatorname{Tr}_{L/K}=\operatorname{Tr}_{E/K}\circ\operatorname{Tr}_{L/E}.
\]
:::

::: proposition
如果 $L/K$ 可分，迹映射 $\operatorname{Tr}_{L/K}$ 不是零映射。
定义对称双线性型 $(x,y)=\operatorname{Tr}(xy)$，则它非退化。
:::

```terms
迹:
  en: trace
  fr: trace :f
  de: Spur :f
  ja: トレース
  ko: 대각합 (對角合)
```
