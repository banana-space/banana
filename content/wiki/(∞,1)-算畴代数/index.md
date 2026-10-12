---
title: '$(\infty, 1)$-算畴代数'
categories: [高阶代数]
navboxes: [高阶代数]
---

**$(\infty, 1)$-算畴代数**是[[高阶代数]]中的基本概念，
是[[算畴代数]]的 $\infty$ 版本推广。
利用 $(\infty, 1)$-算畴代数，可以刻画同伦意义下的代数结构。
例如，[[$\mathbb{E}_n$-代数]]或 [[$\mathbb{E}_\infty$-代数]]是[[交换代数]]的推广，
而 [[$\mathbb{A}_n$-代数]]或 [[$\mathbb{A}_\infty$-代数]]是[[结合代数]]的推广；
它们分别定义为 [[$\mathbb{E}_n$ 算畴]]、[[$\mathbb{E}_\infty$ 算畴]]、
[[$\mathbb{A}_n$ 算畴]]、[[$\mathbb{A}_\infty$ 算畴]]上的 $(\infty, 1)$-算畴代数。

## 定义

::: definition [$(\infty, 1)$-算畴代数] {@对称幺半范畴定义}
设 $p \colon \mathcal{O}^\otimes \to \mathfrak{N}(\mathsf{Fin}_*)$
为 [[$(\infty, 1)$-算畴]]，
$\mathcal{C}^\otimes$ 为[[对称幺半 $(\infty, 1)$-范畴]]，
亦看作 $(\infty, 1)$-算畴。
则 $\mathcal{C}^\otimes$ 中的 $\mathcal{O}^\otimes$-代数即为
$(\infty, 1)$-算畴态射 $\mathcal{O}^\otimes \to \mathcal{C}^\otimes$，
即 $\infty$-范畴函子 $\mathcal{O}^\otimes \to \mathcal{C}^\otimes$，
使得如下图表交换：
\[
\begin{tikzcd}
  \mathcal{O}^\otimes \ar[rr] \ar[rd] & & \mathcal{C}^\otimes \ar[ld] \\
  & \mathfrak{N}(\mathsf{Fin}_*).
\end{tikzcd}
\]

所有 $\mathcal{C}^\otimes$ 中的 $\mathcal{O}^\otimes$-代数
构成了函子范畴 $\mathsf{Fun}(\mathcal{O}^\otimes, \mathcal{C}^\otimes)$
的子范畴，记作 $\mathcal{O}\text{-}\mathsf{Alg}(\mathcal{C})$。
:::

上述定义中，
对称幺半 $(\infty, 1)$-范畴可换成更一般的算畴上的[[纤维 $(\infty, 1)$-范畴]]。

::: definition [$(\infty, 1)$-算畴代数] {@一般定义}
设 $\mathcal{C}^\otimes \to \mathcal{P}^\otimes$
是 $(\infty, 1)$-算畴的纤维化，
即它是 $(\infty, 1)$-算畴态射，同时是[[纤维 $(\infty, 1)$-范畴]]。

设 $\mathcal{O}^\otimes \to \mathcal{P}^\otimes$
是另一 $(\infty, 1)$-算畴态射。
则 $\mathcal{C}^\otimes$ 中的 $\mathcal{O}^\otimes$-代数即为
$(\infty, 1)$-算畴态射 $\mathcal{O}^\otimes \to \mathcal{C}^\otimes$，
使得如下图表交换：
\[
\begin{tikzcd}
  \mathcal{O}^\otimes \ar[rr] \ar[rd] & & \mathcal{C}^\otimes \ar[ld] \\
  & \mathcal{P}^\otimes.
\end{tikzcd}
\]

所有 $\mathcal{C}^\otimes$ 中的 $\mathcal{O}^\otimes$-代数
构成了函子范畴 $\mathsf{Fun}(\mathcal{O}^\otimes, \mathcal{C}^\otimes)$
的子范畴，记作 $\mathcal{O}\text{-}\mathsf{Alg}(\mathcal{C})$。
若强调算畴 $\mathcal{P}^\otimes$，
也可记作 $\mathcal{O}\text{-}\mathsf{Alg}_{/\mathcal{P}}(\mathcal{C})$。
:::

在 @一般定义 中取 $\mathcal{P}$ 为交换算畴
$\mathsf{Comm} = \mathfrak{N}(\mathsf{Fin}_*)$，
就得到了 @对称幺半范畴定义。
若取 $\mathcal{P}$ 为结合算畴 $\mathsf{Assoc}$，
则对应地得到 @对称幺半范畴定义 的非交换[[幺半 $(\infty, 1)$-范畴]]版本。

```terms
'$(\infty,1)$-算畴代数':
  en: 'algebra over an $(\infty,1)$-operad'
  fr: 'algèbre sur une $(\infty,1)$-opérade :f'
```
