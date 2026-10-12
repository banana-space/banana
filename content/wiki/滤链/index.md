---
title: 滤链
aliases: [滤对象]
categories: [同调代数]
---

**滤链**指[[模]]里一列嵌套的子模，犹如其中元素被一层层过滤。
此概念可推广到一般的 [[Abel 范畴]]以及[[稳定无穷范畴]]上。

## 定义

::: definition [滤链、滤对象] {@滤链}
设 $\mathcal{A}$ 是 [[Abel 范畴]]，$M$ 是其对象。
$M$ 上的**滤链**指 $M$ 的形如
$$
\cdots\subseteq F_{-1}M\subseteq F_0M\subseteq F_1M
\subseteq\cdots
$$
的子模列。$\mathcal{A}$ 中**滤对象** $F_\bullet M$
指的是对象 $M$ 附带一条滤链 $F_\bullet M$。此时将 $M$
称为滤对象 $F_\bullet M$ 的**底对象**。
:::

::: remark {@升降}
有时也将滤链记作
$$
\cdots\subseteq F^1M\subseteq F^0M\subseteq F^{-1}M
\subseteq\cdots
$$
需要区分时把用这个记号者称为**下降滤链**，
用 @滤链 中记号者称为**上升滤链**。
:::

::: definition [同态]
Abel 范畴 $\mathcal{A}$ 的滤对象 $F_\bullet M$ 到
$F_\bullet N$ 的**同态**指的是 $\mathcal{A}$ 中同态
$f\colon M\to N$，使得 $f(F_iM)\subseteq F_iN$，对任意
$i\in\mathbb{Z}$。如 $f^{-1}(F_iN)=F_iM$，则称 $f$
为**严格同态**。$\mathcal{A}$ 的滤对象关于同态构成范畴，
记作 $\mathsf{Fil}(\mathcal{A})$，它一般不是 Abel 范畴。
:::

::: definition [结合分次对象]
设 $\mathcal{A}$ 是 Abel 范畴。对
$F_\bullet M\in\mathsf{Fil}(\mathcal{A})$，
它的**分次对象**，或称它的**结合分次对象**，
指的是在 $i\in\mathbb{Z}$ 处是 $F_iM/F_{i-1}M$ 的
$\mathbb{Z}$-[[分次对象]]（对下降滤链则是 $F^iM/F^{i+1}M$）。
显然这给出函子 $\mathsf{Fil}(\mathcal{A})\to
\mathsf{Gr}_\mathbb{Z}(\mathcal{A})$。
:::

::: definition [有界、穷竭、分离、完备]
设 $\mathcal{A}$ 是 Abel 范畴，$F_\bullet M\in
\mathsf{Fil}(\mathcal{A})$。称 $F_\bullet M$ 为：

- **上有界**，指存在 $n\in\mathbb{N}$，$F_nM=M$。

- **下有界**，指存在 $n\in\mathbb{N}$，$F_{-n}M=0$。

- **有界**或**有限**，指其上有界且下有界。

- **穷竭**，指
  $\operatornamewithlimits{colim}_{n\in\mathbb{N}}F_nM=M$。

- **分离**，指
  $\lim_{n\in\mathbb{N}}F_{-n}M=0$。

- **完备**，指
  $\lim_{n\in\mathbb{N}}F_0M/F_{-n}M=F_0M$。

显然，上有界推出穷竭，下有界推出完备推出分离。
:::

::: definition [共尾]
设 $\mathcal{A}$ 是 Abel 范畴，$M$ 是其对象，
$F_\bullet M,G_\bullet M$ 是 $M$ 上两条滤链。
称它们**上共尾**，指的是对任意 $n\in\mathbb{N}$，存在
$m>n$，使得 $F_mM\supseteq G_nM$，$G_mM\supseteq F_nM$，
**下共尾**类似。当它们在同一个方向有界时，
说它们**共尾**指的是在另一个方向共尾。
:::

::: remark
滤链、滤对象和[[滤范畴]]、[[滤余极限]]没有关系，只是名称撞了。
:::

## 例子

- 设 $R$ 是[[环]]，$I$ 是其理想，$M$ 是 $R$-模。
  则 $I^\bullet M$ 构成 $M$ 的下降滤链，这里 $I^{-n}M$
  定义为 $M$，对 $n\in\mathbb{N}$。于是它上有界。依定义它分离、
  完备当且仅当 $M$ 关于 $I$ 分离、完备。

- 设 $R$ 是[[交换环]]，$M$ 是 $R$-模，$r\in R$。
  则 $r^\bullet M$ 在[[局部化]] $M_r$ 中的像构成 $M_r$
  的下降滤链。由局部化的定义它总是穷竭，但就未必分离，
  更不用说完备。

## 推广

把滤链推广到[[稳定无穷范畴]]上，所得概念倒是更自然些。

::: definition [滤链] {@无穷滤链}
设 $\mathcal{C}$ 是稳定无穷范畴，$M$ 是其对象。
$M$ 上的**滤链**指形如
$$
\cdots\to F_{-1}M\to F_0M\to F_1M\to\cdots
$$
的对象列以及对每个 $i\in\mathbb{Z}$ 一个映射 $F_iM\to M$，
使相关的三角形图表都交换。
:::

::: remark
和 @升降 中一样，有时也采用记号
$$
\cdots\to F^1M\to F^0M\to F^{-1}M\to\cdots
$$
称为**下降滤链**，@无穷滤链
中记号称为**上升滤链**。
:::

::: definition [有界、穷竭、完备]
设 $\mathcal{C}$ 是稳定无穷范畴，$M$ 是其对象。
称 $M$ 上的滤链 $F_\bullet M$ 为：

- **上有界**，指存在 $n\in\mathbb{N}$，$F_nM=M$。

- **下有界**，指存在 $n\in\mathbb{N}$，$F_{-n}M=0$。

- **有界**或**有限**，指其上有界且下有界。

- **穷竭**，指
  $\operatornamewithlimits{colim}_{n\in\mathbb{N}}F_nM=M$。

- **完备**，指
  $\lim_{n\in\mathbb{N}}F_{-n}M=0$。

:::

::: remark
由于无穷范畴中的极限包含了经典的 $\lim^1$ 信息，
故条件 $\lim_{n\in\mathbb{N}}F_{-n}M=0$ 就直接是完备，
而没有分离和完备的区分。
:::

在稳定无穷范畴情形，滤对象这一概念的约定和 Abel 范畴时略有不同。

::: definition [滤对象]
稳定无穷范畴 $\mathcal{C}$ 上的**滤对象**指其对象列
$$
\cdots\to F_{-1}M\to F_0M\to F_1M\to\cdots
$$
亦即无穷范畴 $\mathsf{Fun}(\mathbb{Z},\mathcal{C})$ 的对象，
其中 $\mathbb{Z}$ 按自然偏序视为范畴。定义 $\mathsf{Fil}
(\mathcal{C})=\mathsf{Fun}(\mathbb{Z},\mathcal{C})$
为滤对象构成的范畴，其显然也是稳定无穷范畴。
（当然这是上升滤对象，下降的则是
$\mathsf{Fun}(\mathbb{Z}^\text{op},\mathcal{C})$。）
对滤对象 $F_\bullet M$，其**底对象**指的是
$\operatornamewithlimits{colim}_{n\in\mathbb{N}}F_nM$，
其**分次对象**指的是在 $i\in\mathbb{Z}$ 处为
$\operatorname{cofib}(F_{i-1}M\to F_iM)$ 的
$\mathbb{Z}$-分次对象。这两个构造显然都有函子性。
:::

::: remark
于是滤对象无所谓穷竭，而只有有界和完备。常以
$\widehat{\mathsf{Fil}}(\mathcal{C})$ 记
$\mathsf{Fil}(\mathcal{C})$ 中完备者构成的满子范畴，
则它也是稳定无穷范畴，且含入函子有左伴随，称为**完备化**。
:::

::: remark
对于[[导出范畴]]的滤对象，常以 $\mathsf{DF}(-)$ 简记
$\mathsf{Fil}(\mathsf{D}(-))$，以
$\widehat{\mathsf{DF}}(-)$ 简记
$\widehat{\mathsf{Fil}}(\mathsf{D}(-))$。
:::

以下命题是滤对象的[[代数叠]]刻画。

::: proposition
$\mathsf{DF}(\mathbb{Z})=\mathsf{D}(\mathbb{A}^1/\mathbb{G}_m)$。
:::

```terms
滤链:
  en: filtration
  de: Filtrierung :f
  fr: filtration :f
  grc: διήθησις :f
  la: filtratio :f
滤对象:
  en: filtered object
  de: filtriertes Objekt
  fr: objet filtré
  grc: ἠθούμενον ἀντικείμενον
  la: objectum filtratum
结合分次对象:
  en: associated graded object
  de: assoziiertes graduiertes Objekt
  fr: objet gradué associé
  la: objectum graduatum associatum
穷竭:
  en: exhaustive
  de: erschöpfend
  fr: exhaustif
  la: exhaustus
分离:
  en: separated
  de: separat
  fr: séparé
  la: separatus
完备:
  en: complete
  de: vollständig
  fr: complet
  la: completus
```
