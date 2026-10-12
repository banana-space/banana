---
title: 单子
categories: [范畴论]
navboxes: [范畴论]
---

**单子**是[[范畴论]]的基本概念，
抽象出[[自由函子]]带有的范畴论结构。

## 定义

::: definition {@1}
范畴 $\mathcal{C}$ 上的**单子**指[[幺半范畴]]
$(\mathsf{End}(\mathcal{C}),\circ)$ 中的[[代数对象|结合代数]]。
换言之，它包括如下结构：

- 自函子 $T\colon\mathcal{C}\to\mathcal{C}$；

- 自然变换 $\eta\colon\mathbb{1}\Rightarrow T$ 与
  $\mu\colon T\circ T\Rightarrow T$，使得
  $\mu\circ T\eta=\mu\circ\eta T=\mathbb{1}_T$，
  $\mu\circ T\mu=\mu\circ\mu T$。

注意 $\mathcal{C}$ 自带幺半范畴 $\mathsf{End}(\mathcal{C})$
的左模结构。单子 $T$ 的**模**，或称 $\mathcal{C}$
中的 **$T$-代数**，指它在 $\mathcal{C}$ 中的模对象。
换言之，它包括如下结构：

- 对象 $A\in\mathcal{C}$；

- 映射 $a\colon T(A)\to A$，使得
  $a\circ\eta(A)=\mathbb{1}_A$，$a\circ T(a)=a\circ\mu(A)$。

它们构成的范畴记作 $\mathsf{Mod}_T(\mathcal{C})$ 或 $\mathsf{Alg}_T(\mathcal{C})$。
:::

注意上面的定义只用到了[[范畴的范畴]] $\mathsf{Cat}$ 的 [[$2$-范畴]]结构，
故可推广如下：

::: definition {@2}
$2$-范畴 $\mathcal{B}$ 中的**单子**指对象
$c\in\mathcal{B}$ 附带[[幺半范畴]] $(\mathsf{End}(c),\circ)$
中的[[代数对象|结合代数]]。换言之，它包括如下结构：

- 对象 $c\in\mathcal{B}$；

- $1$-态射 $T\colon c\to c$；

- $2$-态射 $\eta\colon\mathbb{1}\Rightarrow T$ 与
  $\mu\colon T\circ T\Rightarrow T$，使得
  $\mu\circ T\eta=\mu\circ\eta T=\mathbb{1}_T$，
  $\mu\circ T\mu=\mu\circ\mu T$。

对 $d\in\mathcal{B}$，范畴 $\mathsf{Map}(d,c)$ 自带幺半范畴
$\mathsf{End}(c)$ 的左模结构。单子 $(c,T)$ 在 $d$
上的**模**指它在 $\mathsf{Map}(d,c)$ 中的模对象。换言之，
它包括如下结构：

- $1$-态射 $A\colon d\to c$；

- $2$-态射 $\alpha\colon T\circ A\Rightarrow A$，
  使得 $\alpha\circ\eta A=\mathbb{1}_A$，
  $\alpha\circ T\alpha=\alpha\circ\mu A$。

:::

在 @2 中取 $\mathcal{B}$ 为[[范畴的范畴]]，
取 $d$ 为[[单点范畴]]，即得 @1。

## 例子

- 各种代数结构的[[自由函子]]都构成单子。例如：

  - [[自由群]]函子 $F_\mathsf{Grp}$ 是 $\mathsf{Set}$ 上的单子，
    其两个自然变换分别是自然含入 $S\to F_\mathsf{Grp}(S)$ 与
    $F_\mathsf{Grp}(S)$ 的群结构给出的映射
    $F_\mathsf{Grp}(F_\mathsf{Grp}(S))\to F_\mathsf{Grp}(S)$。
    此单子的模就是[[群]]。

  - 把集合视为[[离散拓扑空间]]，则
    [[Stone–Čech 紧化]]函子 $\beta$ 是 $\mathsf{Set}$ 上的单子，
    其两个自然变换分别是自然含入 $S\to\beta S$ 以及由
    $\beta S$ [[紧空间|紧]] [[Hausdorff 空间|Hausdorff]] 得到的映射
    $\beta\beta S\to\beta S$。此单子的模就是紧
    Hausdorff 空间。

- 更一般地，对任意[[伴随函子]]
  $F\colon\mathcal{C}\rightleftarrows\mathcal{D}:\!G$，
  复合函子 $GF$ 都是 $\mathcal{C}$ 上的单子，
  其两个自然变换分别是 $\eta\colon\mathbb{1}_\mathcal{C}\to GF$
  与 $G\varepsilon F\colon GFGF\to GF$，其中
  $\eta\colon\mathbb{1}_\mathcal{C}\to GF$ 是伴随函子的幺，
  $\varepsilon\colon FG\to\mathbb{1}_\mathcal{D}$ 是伴随函子的余幺。
  详见[[单子性]]条目。取[[自由–遗忘伴随]]即得上例。

## 高阶范畴中

以下范畴均指 [[$(\infty,1)$-范畴]]，类似地，函子也均指 [[$(\infty,1)$-函子]]。

在高阶范畴定义单子以及单子上的模需要用到[[代数模式]]的概念，
建议读者在阅读以下定义之前，先熟悉该条目。

::: definition [单子]
令 $\mathcal{C}$ 为范畴，
则函子范畴 $\mathsf{End}(\mathcal{C})$ 上带有
由函子复合给出的幺半结构 $\mathsf{End}(\mathcal{C})^{\circ}$。
$\mathcal{C}$ 上的**单子**是指 $\mathsf{End}(\mathcal{C})^{\circ}$ 上的结合代数，
换言之，是指使得以下图表交换的 $T$
\[
\begin{tikzcd}
  \mathsf{Assoc} \ar[rr,"T"]\ar[dr,"\mathrm{id}"'] && \mathsf{End}(\mathcal{C})^{\circ} \ar[dl]\\
  & \mathsf{Assoc}.
\end{tikzcd}
\]
且满足 $T$ 将 $\mathsf{Assoc}$ 中的惰性态射映为 $\mathsf{End}(\mathcal{C})^{\circ}$ 中的推出边。

不难发现，
此时 $\mathcal{C}$ 可视为 $\mathsf{End}(\mathcal{C})$-[[线性范畴]]，
即存在 $\mathsf{Cat}$ 中的 Segal $\mathsf{LM}$-对象，
使其反直化 $\mathcal{O}^{\otimes} \to \mathsf{LM}$ 满足

- $\mathcal{O}^{\otimes}_{([1],1)} \simeq \mathsf{End}(\mathcal{C})$，且

- $\mathcal{O}^{\otimes}_{([0],0)} \simeq \mathcal{C}$。

此时考虑 $\mathcal{O}^{\otimes}$ 上的左模范畴，
将其记为 $\mathsf{LMod}(\mathcal{C})$。
则单子 $T$ 上的**左模范畴**是指拉回
\[
\begin{tikzcd}
  \mathsf{LMod}_T(\mathcal{C}) \ar[d]\ar[dr,phantom,pos = 0.2,"\ulcorner"]\ar[r] & \mathsf{LMod}(\mathcal{C}) \ar[d]\\
  \ast \ar[r,"T"] & \mathsf{Alg}(\mathsf{End}(\mathcal{C})).
\end{tikzcd}
\]
:::

```terms
单子:
  en: monad
  ja: モナド
```
