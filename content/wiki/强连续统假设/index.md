---
title: 强连续统假设
aliases: [广义连续统假设, 连续统假设的推广, GCH]
categories: [集合论]
---

**强连续统假设**，又称**广义连续统假设**、
**推广的连续统假设**，常简写为 **GCH**，
是[[连续统假设]]的推广。它指如下命题：

- 对任意[[序数]] $\alpha$，
  $2^{\aleph_\alpha}=\aleph_{\alpha+1}$。

该命题能确定[[基数]]运算的很多结果，但与连续统假设一样，
它独立于 [[ZFC]]。其相容性由 [[Kurt Gödel]] 于 1940
年用其[[可构造宇宙]]证明，其否定的相容性由 [[Paul Cohen]]
于 1963 年用其[[力迫法]]证明。

## 相容性

::: theorem [Gödel]
$$
\text{ZF}+\textbf{V=L}\vdash\text{GCH}.
$$
从而强连续统假设与 [[ZFC]] 相容。
:::

$\text{ZF}+\textbf{V=L}\vdash\text{AC}$ 已在
[[Gödel 可构造宇宙]]条目中证明。那里还说对无穷序数 $\alpha$，
$|L_\alpha|=|\alpha|$。以 $\alpha^+$ 记大于 $\alpha$
的最小基数，则只需证在 $\text{ZFC}+\textbf{V=L}$ 下有：

::: proposition
对无穷基数 $\alpha$，$\mathcal{P}(L_\alpha)\subseteq
  L_{\alpha^+}$。
:::

::: proof
先做一些准备。取 $\text{ZF}-\text{P}$ 中有限条公理之合取
$\phi$，使得对 $\phi$ 的[[传递模型]] $M$，
可构造宇宙是绝对的。这可以做到，因为整个过程中，
涉及无穷条公理处只有在定义[[可构造宇宙]]时用[[分出公理模式]]，
而那实际上只需在指定的有限族集合上使用，
即只用到分出公理模式中的有限条。再取有限条公理之合取，
使其可以证明没有最大的序数，将其与 $\phi$ 的合取记作 $\psi$，
则对 $\psi$ 的传递模型 $M$，$M\cap\textbf{Ord}$ 是极限序数，
$L_{M\cap\textbf{Ord}}=\bigcup_{\alpha\in
  M\cap\textbf{Ord}}L_\alpha$。最后令 $\chi$ 为
$\psi\wedge\textbf{V=L}$，则对 $\chi$ 的传递模型 $M$，有
$M=\bigcup_{\alpha\in M\cap\textbf{Ord}}L_\alpha=
  L_{M\cap\textbf{Ord}}$。依定义，$\chi$ 是
$\text{ZF}-\text{P}+\textbf{V=L}$ 中有限条公理的合取。

现考虑 $L_\alpha$ 任一子集 $A$。由[[反映原理]]及
[[Löwenheim–Skolem 定理]]，存在集合 $N$，包含
$L_\alpha\cup\{A\}$，势为 $|\alpha|$，满足
$(N,\in)\models\chi$。把 $N$ 作 [[Mostowski 坍塌]]，
得集合 $M$，则 $(M,\in)\cong(N,\in)$，故 $|M|=\alpha$ 且
$(M,\in)\models\chi$。首先由 $L_\alpha$ 传递，$A\subseteq
  L_\alpha$，知 $L_\alpha\cup\{A\}\subseteq M$；
其次 $M$ 传递，故由上一段有 $M=L_{M\cap\textbf{Ord}}$；
最后 $|M\cap\textbf{Ord}|\le|M|<\alpha^+$，得
$A\in M=L_{M\cap\textbf{Ord}}\subseteq L_{\alpha^+}$。
这对任一 $A$ 成立，所以 $\mathcal{P}(L_\alpha)\subseteq
  L_{\alpha^+}$。
:::

## 否定的相容性

由于[[连续统假设]]之否定已经与 ZFC 相对相容，
故强连续统假设之否定自然也就相容。

## 推论

::: proposition
强连续统假设推出[[选择公理]]。
:::

```terms
强连续统假设:
  en: generalized continuum hypothesis
  de: verallgemeinerte Kontinuumshypothese
  fr: hypothèse generalisée de continu
  grc: γενικευμένη ὑπόθεσις συνέχους
  la: hypothesis generalizata de continuo
```
