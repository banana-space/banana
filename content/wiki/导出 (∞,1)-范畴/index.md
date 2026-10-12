---
title: '导出 $(\infty,1)$-范畴'
categories: [同调代数, 高阶代数]
navboxes: [同调代数, 高阶代数]
---

**导出 $(\infty,1)$-范畴**是[[导出范畴]]的[[高阶范畴论|高阶]]版本。
它通常由 [[Abel 范畴]]的[[链复形]]范畴高阶地[[局部化 (范畴论)|局部化]]（即形式上逆转所有[[拟同构]]）得到，
并且是一个[[稳定 $(\infty,1)$-范畴]]。

## 定义

### 对于 Abel 范畴

::: definition
设 $\mathcal{A}$ 是 [[Abel 范畴]]。
**导出 $(\infty,1)$-范畴** $\mathsf{D}(\mathcal{A})$ 定义为其
$(\infty,1)$-[[局部化 (范畴论)|局部化范畴]] $\mathsf{Ch}(\mathcal{A})[\mathsf{W}^{-1}]$，
其中 $\mathsf{W} \subseteq \mathsf{Ch}(\mathcal{A})$ 为所有[[拟同构]]构成的[[宽子范畴]]。

若满子范畴 $\mathcal{C} \subseteq \mathsf{Ch}(\mathcal{A})$ 对[[映射锥]]封闭，
则定义 $\mathcal{C}$ 的**导出 $(\infty,1)$-范畴**为 $\mathcal{C}$ 在 $\mathsf{D}(\mathcal{A})$
中的本质像。

特别地，当 $\mathcal{C}$ 为（上同调）**上有界**、**下有界**或**有界**链复形构成的满子范畴时，
其同伦 $(\infty,1)$-范畴分别称为（上同调）**上有界**、**下有界**与**有界**链复形 $(\infty,1)$-范畴，
依次记作 $\mathsf{D}^+(\mathcal{A})$、
$\mathsf{D}^-(\mathcal{A})$ 与 $\mathsf{D}^\mathrm{b}(\mathcal{A})$。
:::

### 对于正合范畴

对于[[正合范畴]]，我们同样可以定义其有界导出范畴：
令 $(\mathcal{C},\operatorname{cof}\mathcal{C},\operatorname{fib}\mathcal{C})$ 为正合范畴，
遗忘其正合结构得到加性范畴 $\mathcal{C}$。
此时，考虑其[[筛余完备化]] $\mathcal{P}_{\Sigma}(\mathcal{C})$，这总是一个[[预稳定范畴]]。
我们将其[[稳定化]]记为 $\mathsf{Stab}(\mathcal{C})$，
称为 $\mathcal{C}$ 的**稳定闭包**。
具体而言，
我们可以将 $\mathsf{Stab}(\mathcal{C})$ 刻画为 $\mathsf{Fun}^{\Pi}(\mathcal{C},\mathsf{Sp})$，
其中 $\mathsf{Fun}^{\Pi}$ 是由保持有限乘积的函子所张成的全子范畴。
需要注意的是，典范嵌入 $\mathcal{C} \to \mathsf{Stab}(\mathcal{C})$ 未必是正合的。

::: definition [零调对象]
令 $f \colon X \to Y$ 为 $\mathcal{C}$ 中的余纤维化（容许单态射），
它诱导出 $\mathsf{Stab}(\mathcal{C})$ 中的典范态射。记

$$
E(f) \coloneqq \operatorname{cofib}\left(\operatorname{cofib}(y(f)) \to y(\operatorname{cofib}(f))\right),
$$

其中 $y$ 为 [[Yoneda 嵌入]]。
令 $\mathsf{Ac}(\mathcal{C}) \subset \mathsf{Stab}(\mathcal{C})$
为包含 $\{E(f) \mid f \in \operatorname{cof}\mathcal{C}\}$ 的最小全子稳定范畴。
称 $\mathsf{Ac}(\mathcal{C})$ 中的对象为 $\mathsf{Stab}(\mathcal{C})$ 的**零调对象**。
:::

::: definition [导出范畴]
令 $(\mathcal{C},\operatorname{cof}\mathcal{C},\operatorname{fib}\mathcal{C})$ 为正合范畴，
其**有界导出 $(\infty,1)$-范畴**定义为 [[Verdier 商]]：

$$
\mathsf{D}^\mathrm{b}(\mathcal{C}) \coloneqq \mathsf{Stab}(\mathcal{C})/\mathsf{Ac}(\mathcal{C}).
$$
:::

## 例子

- 对于环 $R$，其导出 $(\infty,1)$-范畴 $\mathsf{D}(R)$ 等价于 $\mathsf{Mod}(\mathrm{H}R)$，
其中 $\mathrm{H} \colon \mathsf{Ab} \to \mathsf{Sp}$ 为 [[Eilenberg–Mac Lane 谱]]函子。

## 性质

::: theorem
对于任意 Abel 范畴 $\mathcal{A}$，$\mathsf{D}(\mathcal{A})$ 都是[[稳定 $(\infty,1)$-范畴]]。
:::

::: theorem [泛性质]
令 $\mathcal{A}$ 为带有足够多[[投射对象]]的 Abel 范畴，
$\mathcal{C}$ 为带有左完备 [[t 结构|t-结构]]的稳定 $(\infty,1)$-范畴。
赋予 $\mathsf{D}(\mathcal{A})$ 典范的 t-结构，
并记
$\mathsf{D}(\mathcal{A})^- \coloneqq \bigcup_{n \in \mathbb{N}} \mathsf{D}(\mathcal{A})_{\geq -n}$。
考虑函子范畴的全子范畴

$$
\mathsf{Fun}'(\mathsf{D}(\mathcal{A})^-,\mathcal{C}) \subseteq \mathsf{Fun}(\mathsf{D}(\mathcal{A})^-,\mathcal{C}),
$$

其对象为满足以下条件的函子 $F$：

- $F$ 是右 t-正合的（即 $F(\mathsf{D}(\mathcal{A})^-_{\geq 0}) \subset \mathcal{C}_{\geq 0}$）。

- $F$ 将 $\mathcal{A}$ 中的投射对象映射到 $\mathcal{C}$ 的心中，
  即 $F(\mathcal{A}_{\mathrm{proj}}) \subset \mathcal{C}^{\heartsuit}$。

此时，典范嵌入 $\mathcal{A} \hookrightarrow \mathsf{D}(\mathcal{A})^-$ 诱导出如下的范畴等价：

$$
\mathsf{Fun}'(\mathsf{D}(\mathcal{A})^-,\mathcal{C}) \xrightarrow{\sim} \mathsf{Fun}^{\mathrm{rex}}(\mathcal{A},\mathcal{C}^{\heartsuit}),
$$

其中 $\mathsf{Fun}^{\mathrm{rex}}$ 为右正合函子构成的范畴。
:::

::: remark
对于带有足够多投射对象的 Abel 范畴 $\mathcal{A}$ 与任意 Abel 范畴 $\mathcal{B}$，
由于 $\mathsf{D}(\mathcal{B})^{\heartsuit} \simeq \mathcal{B}$，
根据上述泛性质，任意右正合函子 $F \colon \mathcal{A} \to \mathcal{B}$ 都可以延拓为[[导出函子]]：

$$
\mathrm{L} F \colon \mathsf{D}^-(\mathcal{A}) \to \mathsf{D}^-(\mathcal{B}).
$$

（在特定条件下，亦可自然延拓至整个 $\mathsf{D}(\mathcal{A}) \to \mathsf{D}(\mathcal{B})$）。
:::

```terms
'导出 $(\infty,1)$-范畴':
  en: 'derived $(\infty,1)$-category'
零调对象:
  en: acyclic object
```
