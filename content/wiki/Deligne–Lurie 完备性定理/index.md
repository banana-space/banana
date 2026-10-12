---
title: Deligne–Lurie 完备性定理
categories: [高阶范畴论, 层论]
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  将经典的范畴称为 $1$-范畴。
- [[意象]]都指 [[$(\infty,1)$-意象]]。
  在意象中，覆盖是指[[有效满态射]]。

:::

**Deligne–Lurie 完备性定理**是经典 Deligne 完备性定理在 $(\infty,1)$-意象上的推广。
经典的 Deligne 完备性定理断言每个[[凝聚意象|凝聚]] $1$-意象都具有足够多的点；
Deligne–Lurie 完备性定理将这一结论推广为：
每个局部凝聚意象的[[超完备性|超完备化]]都具有足够多的点。

## 预备定义

::: definition
称意象 $\mathcal{T}$ 具有**足够多的点**，
是指对于 $\mathcal{T}$ 中的每个非同构态射 $\alpha$，
都存在[[(∞,1)-意象|点]] $p_* \colon \mathsf{Ani} \to \mathcal{T}$ 使得 $p^*(\alpha)$ 并非同构。
:::

::: remark
等价地，$\mathcal{T}$ 具有足够多的点当且仅当：
全体点的逆像函子 $\{p_s^*\}_{s \in S}$
联合起来构成保守函子族，即 $\alpha$ 为同构当且仅当 $p_s^*(\alpha)$
对所有 $s$ 均为同构。
直观上，这意味着意象中的对象可以通过“逐点取茎”来完全检测。
:::

::: definition
令 $\mathcal{T}, \mathcal{S}$ 为意象。
称几何态射 $\varphi_* \colon \mathcal{S} \to \mathcal{T}$ 为**几何满射**，
是指其逆像函子 $\varphi^*$ 保持并检测[[有效满态射]]：
即 $\mathcal{T}$ 中的态射 $\alpha$ 为有效满态射，
当且仅当 $\varphi^*(\alpha)$ 为 $\mathcal{S}$ 中的有效满态射。
:::

## 定理陈述

::: theorem [Deligne–Lurie] {@thm-Deligne--Lurie}
令 $\mathcal{T}$ 为[[凝聚意象|局部凝聚意象]]。
则存在[[Boole 代数|完备 Boole 代数]] $\Lambda$ 使得典范的几何态射的复合
\[
\prod_{s \in \mathrm{Spec}(\Lambda)} \mathsf{Ani} \twoheadrightarrow \mathcal{T}^{\mathrm{hyp}} \twoheadrightarrow \mathcal{T}
\]
中，两个态射均为几何满射。
:::

::: remark
若 $\mathcal{T}$ 本身超完备，则 $\mathcal{T}^{\mathrm{hyp}} \simeq \mathcal{T}$，
此时 $\mathcal{T}$ 直接具有足够多的点。

需要注意，局部凝聚意象 $\mathcal{T}$ 本身未必具有足够多的点，
超完备化条件不可省去：一般意象中可能存在非平凡的 $\infty$-连合态射，
它们在所有点处的取茎均为同构，但自身并非同构。
:::

## 证明概要

@thm-Deligne--Lurie 的证明依赖一系列并不平凡的构造，
我们在此简要阐述其证明策略。

### 约化

首先约化到凝聚意象的情况。
由[[凝聚意象]]的景刻画，可以将 $\mathcal{T}^{\mathrm{hyp}}$
识别为某个凝聚景 $(\mathcal{C},\tau)$ 的层范畴的超完备化，
其中 $\mathcal{C}$ 为带有限极限的范畴。
因此问题归结为对 $\mathsf{Shv}_\tau(\mathcal{C})$ 构造几何满射。

### 构造步骤

证明分为以下几步：

1. **Diaconescu 覆盖**：
   对于景 $(\mathcal{C},\tau)$，
   构造几何满射
   $\mathsf{Shv}_{\rho}(\mathcal{D}) \twoheadrightarrow \mathsf{Shv}_{\tau}(\mathcal{C})$，
   其中 $\mathcal{D}$ 为偏序集，$\rho$ 为相应的拓扑。
   这一构造将一般景上的层范畴约化为偏序集上的层范畴。

2. **Boole 覆盖**：
   记 $L \coloneqq \mathrm{L}_0 \mathsf{Shv}_\rho(\mathcal{D})$
   为意象 $\mathsf{Shv}_\rho(\mathcal{D})$ 对应的位象（即其子终对象所构成的格）。
   存在[[Boole 代数|完备 Boole 代数]] $\Lambda$
   以及几何满射 $\mathsf{Shv}(\Lambda) \twoheadrightarrow \mathsf{Shv}(L)$。
   这一步将位象约化为 Boole 位象。

3. **穿过超完备化**：
   Boole 位象上的层范畴 $\mathsf{Shv}(\Lambda)$ 是超完备的。
   因此几何态射 $\mathsf{Shv}(\Lambda) \to \mathsf{Shv}_\rho(\mathcal{D})$
   （经过 $L$）穿过超完备化，
   给出 $\mathsf{Shv}(\Lambda) \to \mathsf{Shv}_\rho(\mathcal{D})^{\mathrm{hyp}}$。

4. **从位象到空间**：
   对于凝聚景 $(\mathcal{C},\tau)$（其中 $\mathcal{C}$ 带有限极限），
   上述几何态射可进一步穿过 $\mathsf{Shv}(\mathrm{Spec}(\Lambda))$，
   其中 $\mathrm{Spec}(\Lambda)$ 为 $\Lambda$ 视为交换环后的[[素谱]]（作为拓扑空间）。

5. **空间的点覆盖**：
   拓扑空间 $\mathrm{Spec}(\Lambda)$ 上的层范畴
   可被其全体点的取茎所覆盖：
   \[
   \prod_{s \in \mathrm{Spec}(\Lambda)} \mathsf{Ani} \twoheadrightarrow \mathsf{Shv}(\mathrm{Spec}(\Lambda)).
   \]

### 总结图表

上述证明过程可以总结为以下交换图表：
\[
\begin{tikzcd}
  && {\mathsf{Shv}(\mathrm{Spec}(\Lambda))} & {\prod_{\mathrm{Spec}(\Lambda)}\mathsf{Ani}} \\
  {\mathsf{Shv}(\Lambda)} & {\mathsf{Shv}_{\rho}(\mathcal{D})^{\mathrm{hyp}}} \\
  & {\mathsf{Shv}_{\rho}(\mathcal{D})} && {\mathsf{Shv}_{\tau}(\mathcal{C})^{\mathrm{hyp}}} \\
  {\mathrm{L}_0\mathsf{Shv}_{\rho}(\mathcal{D})} && {\mathsf{Shv}_{\tau}(\mathcal{C})} && {\mathcal{T}^{\mathrm{hyp}}}
  \arrow["{4.}", dashed, two heads, from=1-3, to=4-3]
  \arrow["{5.}", two heads, from=1-4, to=1-3]
  \arrow[dashed, two heads, from=1-4, to=3-4]
  \arrow[from=2-1, to=1-3]
  \arrow["{3.}"', dashed, from=2-1, to=2-2]
  \arrow["{2.}"', two heads, from=2-1, to=4-1]
  \arrow[two heads, from=2-2, to=3-2]
  \arrow[from=3-2, to=4-1]
  \arrow["{1.}"', two heads, from=3-2, to=4-3]
  \arrow[two heads, from=3-4, to=4-3]
  \arrow["\simeq", from=3-4, to=4-5]
\end{tikzcd}
\]

其中虚线箭头表示由万有性质所诱导的态射，
双箭头（$\twoheadrightarrow$）表示几何满射。
图中 $\mathrm{L}_0\mathsf{Shv}_\rho(\mathcal{D})$ 为意象 $\mathsf{Shv}_\rho(\mathcal{D})$
对应的位象。

## 推论

::: corollary
局部凝聚意象 $\mathcal{T}$ 的超完备化 $\mathcal{T}^{\mathrm{hyp}}$ 具有足够多的点。
:::

::: proof
对于每个点 $s \in \mathrm{Spec}(\Lambda)$，
记 $p_s^*$ 为逆像函子的复合
\[
\mathcal{T}^{\mathrm{hyp}} \simeq \mathsf{Shv}_{\tau}(\mathcal{C})^{\mathrm{hyp}} \xrightarrow{h^*} \mathsf{Shv}(\mathrm{Spec}(\Lambda)) \to \mathsf{Shv}(\{s\}) \simeq \mathsf{Ani}.
\]
由于
$\prod_{s} \mathsf{Ani} \twoheadrightarrow \mathsf{Shv}(\mathrm{Spec}(\Lambda)) \twoheadrightarrow \mathcal{T}^{\mathrm{hyp}}$
为几何满射的复合，
族 $\{p_s^*\}_{s \in \mathrm{Spec}(\Lambda)}$ 联合检测有效满态射。
特别地，态射 $\alpha$ 为同构当且仅当 $p_s^*(\alpha)$ 对所有 $s$ 均为同构，
即 $\mathcal{T}^{\mathrm{hyp}}$ 具有足够多的点。
:::

::: corollary [经典 Deligne 完备性定理]
每个凝聚 $1$-意象都具有足够多的点。
:::

::: proof
凝聚 $1$-意象可以视为 $0$-截断对象构成的凝聚意象。
$1$-意象自动超完备（因为不存在高于 $1$ 阶的同伦信息），
因此由 @thm-Deligne--Lurie 直接给出。
:::

## 参考文献

```bibliography
LurieSAG:
  type: book
  author: 'Lurie, Jacob'
  title: Spectral Algebraic Geometry
  year: 2018
  note: §A.2
  url: https://www.math.ias.edu/~lurie/papers/SAG-rootfile.pdf
```

```terms
Deligne–Lurie 完备性定理:
  en: Deligne–Lurie completeness theorem
几何满射:
  en: geometric surjection
```
