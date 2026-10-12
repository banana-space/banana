---
title: 导出完备
aliases: [导出完备化, 导出 I-完备]
categories: [交换代数]
notices:
  - name: 问题
    items:
      - “定义”一节称“下面将会看到”含入函子 $\mathsf{D}_{I\text{-comp}}(A)\to\mathsf{D}(A)$ 有左伴随，但条目中没有相应内容。
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。
- $\mathsf{D}(A)$ 表示[[环]] $A$ 的[[模]][[范畴]]的[[导出范畴]]，
  在现代观点下即 $A$
  视为 [[$\mathbb{E}_\infty$-环]]在[[谱 (拓扑学)|谱]][[(∞,1)-范畴|范畴]]中的模范畴。

:::

**导出完备**是[[交换代数]]中的重要概念，
是[[完备模]]在[[导出范畴]]的正确推广。导出完备性、
导出完备化的[[同调代数]]表现比朴素的完备性、完备化好得多。

## 定义

::: definition [导出完备] {@完备}
$A$ 是[[环]]，$a$ 是其元素，$I$ 是其[[理想]]，$M\in\mathsf{D}(A)$。

- 称 $M$ 为**导出 $a$-完备**，指的是
  $$
  \operatorname{RHom}_A(A[1/a],M)=0.
  $$

- 称 $M$ 为**导出 $I$-完备**，指对每个
  $i\in I$，$M$ 都为导出 $i$-完备。

$\mathsf{D}(A)$ 中所有导出 $I$-完备的复形组成的[[满子范畴]]记作
$\mathsf{D}_{I\text{-comp}}(A)$ 或 $\mathsf{D}_I^\wedge(A)$。
它显然是[[三角范畴]]（或[[稳定 $\infty$-范畴]]，
如把 $\mathsf{D}(A)$ 视为稳定 $\infty$-范畴）。
:::

::: remark
无歧义时，常把“导出完备”简称为“完备”。
:::

::: remark
@完备 的形式比较奇怪。它的直观是这样的：

- 导出范畴中“$M/a^nM$”的合理定义只有[[映射锥]]
  $\operatorname{cofib}(a^n\colon M\to M)$。

- 从而“$a$-完备”理应定义成
  $M=\lim_n\operatorname{cofib}(a^n\colon M\to M)$，
  由图表
  \[
  \begin{tikzcd}
    \cdots\ar[r,"a"]&M\ar[r,"a"]\ar[d,"a^2"]&M\ar[d,"a"]\\
    \cdots\ar[r,"1"]&M\ar[r,"1"]&M
  \end{tikzcd}
  \]
  这等价于
  $$
  \lim(\cdots\xrightarrow{a}M\xrightarrow{a}M)=0.
  $$

- 导出 $1$-范畴中没有序列[[极限]]，但这个“极限”
  理应等于
  $$
  \operatorname{RHom}_A(
  \text{``}\operatorname{colim}
  (A\xrightarrow{a}A\xrightarrow{a}\cdots)
  \text{''},M),
  $$
  也就是 $\operatorname{RHom}_A(A[1/a],M)$，
  这个在导出 $1$-范畴中良定义。

熟悉[[导出 $\infty$-范畴]]的读者大可直接采用更自然的定义
$$
M=\lim_n\operatorname{cofib}(a^n\colon M\to M).
$$
:::

::: definition [导出完备化]
下面将会看到，含入函子 $\mathsf{D}_{I\text{-comp}}(A)
\to\mathsf{D}(A)$ 有[[左伴随]]。
该左伴随称为**导出完备化**，记作 $(-)_I^\wedge$。
:::

```terms
导出完备:
  en: derived completeness
```
