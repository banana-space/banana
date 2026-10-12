---
title: 挠复形
categories: [交换代数]
notices:
  - name: 问题
    items:
      - “局部上同调”的定义提到下文将说明含入函子有右伴随，但页面中没有相应内容。
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。
- $\mathsf{D}(A)$ 表示[[环]] $A$ 的[[模]][[范畴]]的[[导出范畴]]，
  在现代观点下即 $A$
  视为 [[$\mathbb{E}_\infty$-环]]在[[谱 (拓扑学)|谱]][[(∞,1)-范畴|范畴]]中的模范畴。

:::

[[交换代数]]中，**挠复形**是[[挠模]]在[[导出范畴]]的推广。

## 定义

::: definition [挠复形] {@挠}
$A$ 是[[环]]，$a$ 是其元素，$I$ 是其理想，$M\in\mathsf{D}(A)$。

- 称 $M$ 为 **$a^\infty$-挠**，指的是
  $$
  M\otimes_AA[1/a]=0.
  $$

- 称 $M$ 为 **$I^\infty$-挠**，指对每个
  $i\in I$，$M$ 都为 $i^\infty$-挠。

$\mathsf{D}(A)$ 中所有 $I^\infty$-挠的复形组成的[[满子范畴]]记作
$\mathsf{D}_{I^\infty\text{-tors}}(A)$。它显然是[[三角范畴]]
（或[[稳定 $\infty$-范畴]]，如把 $\mathsf{D}(A)$ 视为稳定 $\infty$-范畴）。
:::

::: remark
熟悉[[导出 $\infty$-范畴]]的读者也可将 $a^\infty$-挠定义为
$$
\operatorname{colim}(M\xrightarrow{a}M\xrightarrow{a}\cdots)=0.
$$
导出 $1$-范畴中没有这种余极限，所以 @挠 用
$-\otimes_AA[1/a]$ 表达。
:::

::: definition [局部上同调]
下面将会看到，含入函子
$\mathsf{D}_{I^\infty\text{-tors}}(A)\to\mathsf{D}(A)$
有[[右伴随]]。该右伴随称为**挠化**或**局部上同调**，
记作 $\Gamma_I(-)$ 或 $\operatorname{R\Gamma}_I(-)$。
:::

```terms
挠复形:
  en: torsion complex
```
