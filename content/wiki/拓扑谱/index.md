---
title: 拓扑谱
aliases: [谱（拓扑学）]
categories: [同伦论]
navboxes: [高阶代数, 高阶范畴论]
---

<disambiguation>
关于其他含义，请参见[[谱]]。
</disambiguation>

在[[代数拓扑]]中，
**拓扑谱**（简称**谱**）
是由一列[[拓扑空间]]构成的对象，
是[[稳定同伦论]]的主要研究对象。
它可以从以下不同角度来描述：

- 经典稳定同伦论即是拓扑谱的理论。
  在拓扑空间范畴中，[[纬悬–环路伴随]] $\Sigma \dashv \Omega$ 中的两个函子并不可逆。
  假若在同伦意义下把它们变得可逆，得到的范畴就是拓扑谱的范畴。
  因此，拓扑谱看起来像拓扑空间，但具有一些额外的性质，例如对拓扑谱 $X$，
  有同伦群的同构
  $\pi_n (X) \simeq \pi_n (\Omega \Sigma X) \simeq \pi_{n+1} (\Sigma X)$，等等。
  这也意味着 $\pi_n (X)$ 在 $n < 0$ 时也有定义。

- 拓扑谱是[[广义上同调]]理论的表出对象，这一结论称为 [[Brown 可表性定理]]。
  确切地说，对任何广义上同调理论（例如[[奇异上同调]]、[[拓扑 $K$ 理论]]等），
  记为 $H^\bullet (-)$，
  存在拓扑谱 $E$ 使得对任意空间 $X$ 有
  $H^n (X) \simeq [X, \Omega^{-n} E]$，
  其中右边是拓扑谱映射的同伦类。
  例如，奇异上同调由 [[Eilenberg–Mac Lane 谱]]表出，
  $K$ 理论由 [[$K$ 理论谱]]表出。
  对广义同调理论也有类似结论。
  在此意义下，我们可以说：“同调理论就是（经典）稳定同伦论。”

- 在现代稳定同伦论中，拓扑谱构成一个[[稳定 $\infty$-范畴]]，
  它是拓扑空间范畴的[[稳定化]]。
  这一过程可以推广到一般的 $\infty$-范畴，而得到稳定 $\infty$-范畴。
  另一方面，稳定 $\infty$-范畴是[[同调代数]]中[[三角范畴]]结构的来源。
  事实上，三角范畴的典型例子，即[[链复形]]范畴和[[导出范畴]]，
  可以通过 [[Dold–Kan 对应]]而与拓扑谱联系起来。
  在此意义下，我们可以说：“同调代数是稳定同伦论的特例。”

## 定义

### 拓扑谱

::: definition
**谱 $(\infty,1)$-范畴**是指对于生象范畴 $\mathsf{Ani}$ 的稳定化
\[
\mathsf{Sp} \coloneqq \mathsf{Sp}(\mathsf{Ani}).
\]
将 $\mathsf{Sp}$ 中的对象称为 **（拓扑）谱**。
:::

根据[[稳定化]]的两种不同方式，
对于谱具有以下两种不同的看法：
- 如果将 $\mathsf{Sp}$ 视为极限
  \[
  \operatorname{lim} \left( \cdots \xrightarrow{\Omega} \mathsf{Ani}_* \xrightarrow{\Omega} \mathsf{Ani}_* \right).
  \]
  则此时谱可视为一族带点生象（或带点拓扑空间）$(X_i)_i$
  配上典范同构（若视同带点拓扑空间则为弱同伦等价）
  \[
  \sigma_n \colon X_n \xrightarrow{\sim} \Omega(X_{n+1}).
  \]
- 如果将 $\mathsf{Sp}$ 视为约化切除函子范畴
  $\mathsf{Exc}_{\ast}(\mathsf{Ani}_{\ast}^{\mathrm{fin}},\mathsf{Ani})$，
  则此时谱可视为约化切除函子 $X \colon \mathsf{Ani}_{\ast}^{\mathrm{fin}} \to \mathsf{Ani}$。

### 同伦群

::: definition
对于谱 $X \in \mathsf{Sp}$ 以及整数 $k \in \mathbb{Z}$，
定义 $X$ 的**第 $k$ 阶同伦群** $\pi_k(X) \in \mathsf{Ab}$ 为
\[
\pi_k(X) \coloneqq \pi_0\operatorname{Hom}_{\mathsf{Sp}}(\mathbb{S}[k],X),
\]
此处 $\mathbb{S}[k] = \Sigma^k\mathbb{S}$ 是球谱（见 @例子）的 $k$ 次纬悬。
:::

::: definition
对于谱 $X \in \mathsf{Sp}$，
- 称 $X$ 是**连合**的，
  是指对于 $k < 0$，都有 $\pi_k(X) \simeq 0$。
  记 $\mathsf{Sp}_{\geq 0} \subseteq \mathsf{Sp}$
  为全体连合谱所张成的全子范畴。
- 称 $X$ 是**余连合**的，
  是指对于 $k > 0$，都有 $\pi_k(X) \simeq 0$。
  记 $\mathsf{Sp}_{\leq 0} \subseteq \mathsf{Sp}$
  为全体余连合谱所张成的全子范畴。

:::

## 性质 {@性质}

::: proposition
函子 $\Omega^{\infty} \colon \mathsf{Sp} \to \mathsf{Ani}_{\ast}$ 具有左伴随 $\Sigma^{\infty}$，
称为**纬悬谱函子**。
此时，
复合上带点化函子 $(-)_+ \colon \mathsf{Ani} \to \mathsf{Ani}_{\ast}$ 给出**非约化纬悬谱函子**
$\Sigma_{+}^{\infty}$。
:::

::: proposition
对于稳定 $(\infty,1)$-范畴 $\mathcal{C}$，
存在唯一的函子
\[
\operatorname{hom}_{\mathcal{C}} \colon \mathcal{C}^{\mathrm{op}} \times \mathcal{C} \to \mathsf{Sp},
\]
它在两个分量上均正合且使得以下图表交换
\[
\begin{tikzcd}
  & \mathsf{Sp} \ar[d,"\Omega^{\infty}"] \\
  \mathcal{C}^{\mathrm{op}} \times \mathcal{C} \ar[ur,dashed,"\operatorname{hom}_{\mathcal{C}}"] \ar[r,"\operatorname{Hom}_{\mathcal{C}}"] & \mathsf{Ani}.
\end{tikzcd}
\]
此时将 $\operatorname{hom}_{\mathcal{C}}$ 称为 **Hom 谱函子**。
:::

::: proposition
令 $X,Y \in \mathsf{Sp}$ 为谱，
则态射 $f \colon X \to Y$ 为同构当且仅当对于每个整数 $k \in \mathbb{Z}$，
都有 $\pi_k(f)$ 为 $\mathsf{Ab}$ 中的同构。
:::

::: proposition
$\mathsf{Sp}$ 上的两个全子范畴 $(\mathsf{Sp}_{\geq 0},\mathsf{Sp}_{\leq 0})$
构成其上的 [[t 结构|t-结构]]。
:::

## 对称幺半结构

可利用 [[Day 卷积]]在 $\mathsf{Sp}$ 上赋予对称幺半结构。
具体过程如下：
- 在 $\mathsf{Ani}_{\ast}^{\mathrm{fin}}$ 上具有
  对称幺半结构 $(\mathsf{Ani}_{\ast}^{\mathrm{fin}}, \wedge,S^0)$：
  对于
  \[
  (X \wedge Y) \coloneqq \operatorname{cofib}(X \vee Y \to X \times Y),
  \]
  其中 $X \vee Y \coloneqq X \sqcup_{*} Y$。
- 在 $\mathsf{Ani}$ 上具有乘积所给出的对称幺半结构。
- 由此可在 $\mathsf{Fun}(\mathsf{Ani}_{\ast}^{\mathrm{fin}},\mathsf{Ani})$
  上赋予 [[Day 卷积]]对称幺半结构。
- 经由局部化
  $P_1^{\mathrm{red}} \colon \mathsf{Fun}(\mathsf{Ani}_{\ast}^{\mathrm{fin}},\mathsf{Ani}) \to \mathsf{Sp}$
  给出 $\mathsf{Sp}$ 上的对称幺半结构。
- 将该对称幺半结构称为**谱的张量积**，
  并将张量积函子记为 $\otimes$。

::: proposition
非约化纬悬谱函子 $\mathsf{Ani} \to \mathsf{Sp}$ 可自然提升为对称幺半范畴间的函子
\[
\Sigma_{+}^{\infty} \colon \mathsf{Ani}^{\times} \to \mathsf{Sp}^{\otimes}.
\]
:::

::: proposition
张量积函子
\[
- \otimes - \colon \mathsf{Sp} \times \mathsf{Sp} \to \mathsf{Sp}
\]
在两个分量上均与余极限交换。
:::

## 例子 {@例子}

- 对于 $S^0 \in \mathsf{Ani}_{\ast}$，
  其对应的纬悬谱记为 $\mathbb{S} \coloneqq \Sigma^{\infty}(S^0)$，
  称为**球谱**。

```terms
谱:
  en: spectrum
  de: Spektrum :n
  fr: spectre :m
  grc: φάσμα :n
  la: spectrum :n
```
