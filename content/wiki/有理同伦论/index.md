---
title: 有理同伦论
categories: [同伦论]
navboxes: [代数拓扑]
---

<problems>
- “交换代数”“Lie 代数”“形式模空间”各节需要扩充。
</problems>

**有理同伦论**是[[代数拓扑]]的一个分支，
通过[[拓扑空间]]的[[有理数|有理]]系数[[同伦群]]、[[同调群]]来研究该空间，
也就是对空间 $X$，考虑其有理系数同伦群
$\pi_n (X) \otimes_{\mathbb{Z}} \mathbb{Q}$
和同调群 $H_n (X; \mathbb{Q})$ 及 $H^n (X; \mathbb{Q})$。

每个[[单连通空间]] $X$ 都可以通过[[有理化]]，
变成[[有理空间]] $X^{\mathbb{Q}}$，
其同伦群、同调群都是 $\mathbb{Q}$-[[向量空间]]，满足
\[
\begin{aligned}
  \pi_n (X^{\mathbb{Q}}) & \simeq
  \pi_n (X) \otimes_{\mathbb{Z}} \mathbb{Q} , \\
  H_n (X^{\mathbb{Q}}; \mathbb{Z}) & \simeq
  H_n (X; \mathbb{Q}) , \\
  H^n (X^{\mathbb{Q}}; \mathbb{Z}) & \simeq
  H^n (X; \mathbb{Q}) ,
\end{aligned}
\]
其中 $n \geq 1$。
有理同伦论实际上是这些有理空间的同伦论。

具体地说，所有**有理同伦型**构成 [[$(\infty, 1)$-范畴]]
$\mathsf{S}^{\mathbb{Q}}$，
即[[空间 $(\infty, 1)$-范畴]] $\mathsf{S}$ 中由有理空间构成的全子范畴，
此即有理同伦论的主要研究对象。
有理同伦论建立了该 $(\infty, 1)$-范畴与一些其它范畴的等价，
称为有理同伦论的模型。例如：

- [[普通上同调]]给出了 $\mathsf{S}^{\mathbb{Q}}$
  到 $\mathbb{Q}$ 上 [[$\mathbb{E}_\infty$-代数]]（或[[微分分次交换代数]]）
  构成的 $(\infty, 1)$-范畴的函子，这也称为取空间的 [[Sullivan 模型]]。
  若仅考虑满足某些有限型条件的空间和代数，则该函子给出对应的全子范畴间的等价。

- 上述构造与 [[Koszul 对偶]]的复合给出了
  $\mathsf{S}^{\mathbb{Q}}$ 与 $\mathbb{Q}$ 上某些
  [[$\mathbb{L}_\infty$-代数]]（或[[微分分次 Lie 代数]]）
  构成的 $(\infty, 1)$-范畴的等价。

## 模型

### 交换代数

### Lie 代数

### 形式模空间

参见 [@LurieDAGXIII]。

## 参考文献

关于有理同伦论与[[形式模空间]]的联系：

```bibliography
LurieDAGXIII:
  type: preprint
  author: 'Lurie, Jacob'
  title: 'Derived algebraic geometry XIII: Rational and $p$-adic homotopy theory'
  url: https://www.math.ias.edu/~lurie/papers/DAG-XIII.pdf
  year: 2011
```

```terms
有理同伦论:
  en: rational homotopy theory
  fr: théorie d'homotopie rationnelle :f
  de: rationale Homotopietheorie :f
  ko: 유리수 호모토피 이론 (有理數 homotopy 理論)
```
