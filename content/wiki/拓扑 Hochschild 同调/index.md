---
title: 拓扑 Hochschild 同调
categories: [高阶代数]
---

<problems>
- “通过公理”一节需要扩充。
</problems>

**拓扑 Hochschild 同调**是
[[Hochschild 同调]]在基环为[[球谱]] $\mathbb{S}$ 的特殊情况，
即 Hochschild 同调在
[[$\mathbb{E}_1$-环]][[谱范畴|谱]]范畴的[[绝对]]版本。
$\mathbb{E}_1$-环 $A$ 的拓扑 Hochschild 同调通常记为
$\operatorname{THH}(A) = \operatorname{HH}(A/\mathbb{S})$。

直观地说，拓扑 Hochschild 同调是 $A$ 沿圆周做张量积。
对 $\mathbb{E}_\infty$-环这一直观可以严格化：
$\operatorname{THH}(A)$ 是 $A$ 在[[圆周]]上的[[余极限]]，
它是万有的带有圆周[[群作用|作用]]的 $A$-代数。

还有拓扑 Hochschild 上同调的公理化定义……

## 定义

### 通过余幂

这种方法只能定义 $\mathbb{E}_\infty$-环的拓扑 Hochschild 同调。
以下所述的 $\mathbb{E}_\infty$-环均在[[谱范畴]] $\mathsf{Sp}$ 中。

::: definition [拓扑 Hochschild 同调]
设 $A$ 是 [[$\mathbb{E}_\infty$-环]]，
其 **拓扑 Hochschild 同调** $\operatorname{THH}(A)$ 为
$\mathbb{E}_\infty$-环范畴中的[[余幂]]
$A \otimes \mathbb{T}$，
即常值图表 $\mathbb{T}\to A$ 在此范畴中的[[余极限]]。
这里 $\mathbb{T}$ 表示[[圆周]]。
:::

::: definition [圆周作用]
$\operatorname{THH}(A)$ 带有典范的 $\mathbb{T}$-作用：
事实上，它是以下图表
\[
\begin{tikzcd}
{*} \ar[d] \ar[r, "*\mapsto A"]
& \{\mathbb{E}_{\infty}\text{-环}\}
\\ \mathrm{B} \mathbb{T} \ar[ur, dashed]
\end{tikzcd}
\]
的水平映射沿映射 $* \to \mathrm{B} \mathbb{T}$ 的[[左 Kan 扩张]]在一点处的取值。
:::

由 Kan 扩张的万有性质，拓扑 Hochschild 同调也可用以下万有性质来定义。

::: definition [万有定义]
对 $\mathbb{E}_\infty$-环 $A$，
考虑以下二元组构成的范畴：

- 一个带有 $\mathbb{T}$-作用的
$\mathbb{E}_\infty$-环 $B$，
即函子 $\mathrm{B} \mathbb{T} \to
  \{\mathbb{E}_\infty\text{-环}\}$，
使其在一点处取值为 $B$；

- 一个 $\mathbb{E}_\infty$-环同态 $A \to B$
（它未必与 $\mathbb{T}$-作用相容）。

**拓扑 Hochschild 同调** $\operatorname{THH}(A)$
为此范畴中的始对象。
:::

### 通过公理

## 性质

除了 [[Hochschild 同调]]满足的一般性质之外，
拓扑 Hochschild 同调还有以下特殊性质。

### 分圆谱结构

使用两种观点均可自然地定义拓扑 Hochschild 同调上的分圆谱结构。

::: definition
记 $C_p$ 为 $p$ 元[[循环群]]，其中 $p$ 为素数，
则 $\operatorname{THH}(A)$ 上的
$\mathbb{T}$-[[群作用|作用]]诱导了 $C_p$-作用。
由于 $A^{\otimes p}$ 是同时有 $A$-代数与 $C_p$-作用的
$\mathbb{E}_\infty$-环中万有者，
此作用诱导了 $C_p$-等变态射 $A^{\otimes p} \to \operatorname{THH}(A)$。

考虑以下交换图：
\[
\begin{tikzcd}
  A \ar[r]\ar[d] & \operatorname{THH}(A) \ar[d, dashed] \\
  (A^{\otimes p})^{tC_p}
  \ar[r] & \operatorname{THH}(A)^{tC_p}
\end{tikzcd}
\]
这里 $tC_p$ 表示 [[Tate 构造]]，实竖线是 [[Tate 对角态射]]。
则 $\operatorname{THH}(A)^{tC_p}$ 同时有
$\mathbb{T}/C_p\simeq \mathbb{T}$-作用与 $A$-代数结构，
这诱导了图中虚线态射。
此即拓扑 Hochschild 同调的[[分圆谱]]结构。
:::

## 例子

- 球谱的拓扑 Hochschild 同调 $\operatorname{THH}(\mathbb{S})$ 就是 $\mathbb{S}$，
带有 $\mathbb{T}$-平凡作用。其分圆谱结构由
$\mathbb{S} \to \mathbb{S}^{hC_p} \to \mathbb{S}^{tC_p}$ 诱导，
其中上标 $hC_p$ 表示[[同伦不动点]]。

- 有限域 $\mathbb{F}_p$ 的拓扑 Hochschild 同调的同伦环
$\pi_*\operatorname{THH}(\mathbb{F}_p)$
同构于[[多项式环]] $\mathbb{F}_p[u]$，
其中 $u \in \pi_2 \operatorname{THH}(\mathbb{F}_p)$。
这是 [[Bökstedt 定理]]。

```terms
拓扑 Hochschild 同调:
  en: topological Hochschild homology
  de: topologische Hochschild-Homologie :f
  fr: homologie de Hochschild topologique :f
```
