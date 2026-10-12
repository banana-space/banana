---
title: '核 $2$-范畴'
categories: [代数几何]
navboxes: [层论]
---

::: convention
在本文中，

- [[范畴]]均指 [[$(\infty,1)$-范畴]]。
- [[$2$-范畴]]均指通过[[充实 $(\infty,1)$-范畴]]得到的 [[$(\infty,2)$-范畴]]。

:::

**核 $2$-范畴**是指在[[六函子理论]]中，模仿 [[Fourier 变换]]中积分核的概念所构造出的 $2$-范畴。

## 定义

### 通过充实转移函子

::: definition
令 $(\mathcal{C},E)$ 为[[六函子理论|几何设定]]，
$\mathsf{D} \colon \mathsf{Span}(\mathcal{C},E) \to \mathsf{Cat}$ 为三函子理论。

- 若 $E$ 包含 $\mathcal{C}$ 中所有态射，
  则定义 $\mathsf{D}$ 的**核 $2$-范畴**为

  $$
  \mathsf{K}_{\mathsf{D}} \coloneqq \tau_{\mathsf{D}} (\mathsf{Span}(\mathcal{C})) \in \mathsf{Cat}_2.
  $$

  此处
  $\tau_{\mathsf{D}} \colon \mathsf{Cat}_{\mathsf{Span}(\mathcal{C})} \to \mathsf{Cat}_{\mathsf{Cat}} = \mathsf{Cat}_2$
  将 $\mathsf{Span}(\mathcal{C})$-充实范畴转为 $\mathsf{Cat}$-充实范畴。

- 对于一般的几何设定 $(\mathcal{C},E)$ 以及对象 $S \in \mathcal{C}$，
  考虑几何设定 $((\mathcal{C}_{E})_{/S},\text{全体态射})$，
  将 $\mathsf{D}$ 沿 $\mathsf{Span}((\mathcal{C}_{E})_{/S}) \to \mathsf{Span}(\mathcal{C},E)$
  进行限制，得到 $((\mathcal{C}_{E})_{/S},\text{全体态射})$ 上的三函子理论 $\mathsf{D}_S$。
  $\mathsf{D}$ 在 $S$ 上的**核 $2$-范畴**定义为

  $$
  \mathsf{K}_{\mathsf{D},S} \coloneqq \mathsf{K}_{\mathsf{D}_S} \in \mathsf{Cat}_2.
  $$

  常滥用符号将 $\mathsf{K}_{\mathsf{D},S}$ 中的态射范畴记为 $\mathsf{Fun}_S(-,-)$。

:::

具体而言，对于几何设定 $(\mathcal{C},E)$ 及其内部对象 $S$，
$\mathsf{D}$ 在 $S$ 上的核 $2$-范畴 $\mathsf{K}_{\mathsf{D},S}$
可被描述为以下 $2$-范畴：

- 其对象为 $E$ 中态射 $X \to S$，常简写为 $X$。

- 给定 $X,Y \in \mathsf{K}_{\mathsf{D},S}$，则同态范畴为

  $$
  \mathsf{Fun}_S(Y,X) = \mathsf{D}(X \times_S Y) = \mathsf{D}(\underline{\operatorname{Hom}}_{\mathsf{Span}((\mathcal{C}_{E})_{/S})}(Y,X)).
  $$

- 给定 $X,Y,Z \in \mathsf{K}_{\mathsf{D},S}$ 以及 $\mathsf{K}_{\mathsf{D},S}$ 中的态射
  $M \colon Y \to X$，$N \colon Z \to Y$，
  则复合 $M \circ N$ 由下式给出：

  $$
  M \circ N = \pi_{13!}(\pi_{12}^*M \otimes \pi_{23}^*N),
  $$

  此处 $\pi_{ij}$ 是 $X \times_S Y \times_S Z$ 上的投影态射。

### 通过模范畴

考虑几何设定 $(\mathcal{C},E)$ 及其上取值于 $\mathsf{Pr}^{\mathrm{L}}_{\aleph_1}$ 的三函子理论
$\mathsf{D}$。
为方便起见，令 $E = \text{全体态射}$。

此时可考虑由 $\mathsf{Span}(\mathcal{C})^{\mathrm{op}}$ 所生成的自由对称幺半可表现 $2$-范畴，即

$$
\mathsf{Fun}(\mathsf{Span}(\mathcal{C}),\mathsf{Ani}) \otimes_{\mathsf{Ani}} \mathsf{Pr}^{\mathrm{L}}_{\aleph_1} = \mathsf{Fun}(\mathsf{Span}(\mathcal{C}),\mathsf{Pr}^{\mathrm{L}}_{\aleph_1}).
$$

根据 [[Day 卷积]]，
可以看出此时
$\mathsf{D} \in \mathsf{CAlg}\left( \mathsf{Fun}(\mathsf{Span}(\mathcal{C}),\mathsf{Pr}^{\mathrm{L}}_{\aleph_1}) \right)$。

::: definition
令 $(\mathcal{C},E)$ 为[[六函子理论|几何设定]]，
$\mathsf{D} \colon \mathsf{Span}(\mathcal{C},E) \to \mathsf{Pr}_{\aleph_1}^{\mathrm{L}}$
为可表现三函子理论。

- 若 $E$ 包含 $\mathcal{C}$ 中所有态射，则定义 $\mathsf{D}$ 的**核 $2$-范畴**为

  $$
  \mathsf{K}_{\mathsf{D}} \coloneqq \mathsf{Mod}_{\mathsf{D}}\mathsf{Fun}(\mathsf{Span}(\mathcal{C}),\mathsf{Pr}^{\mathrm{L}}_{\aleph_1}).
  $$

- 对于一般的几何设定 $(\mathcal{C},E)$ 以及对象 $S \in \mathcal{C}$，
  考虑几何设定 $((\mathcal{C}_{E})_{/S},\text{全体态射})$，
  将 $\mathsf{D}$ 沿 $\mathsf{Span}((\mathcal{C}_{E})_{/S}) \to \mathsf{Span}(\mathcal{C},E)$
  进行限制，得到 $((\mathcal{C}_{E})_{/S},\text{全体态射})$ 上的三函子理论 $\mathsf{D}_S$。
  $\mathsf{D}$ 在 $S$ 上的**核 $2$-范畴**定义为

  $$
  \mathsf{K}_{\mathsf{D},S} \coloneqq \mathsf{K}_{\mathsf{D}_S}.
  $$

:::

回到 $E = \text{全体态射}$ 的情况，
此时有典范的松对称幺半函子

$$
[-]_{\mathsf{K}_{\mathsf{D}}} \colon \mathsf{Span}(\mathcal{C})^{\operatorname{op}} \to \mathsf{Fun}(\mathsf{Span}(\mathcal{C}),\mathsf{Pr}^{\mathrm{L}}_{\aleph_1}) \to \mathsf{K}_{\mathsf{D}}.
$$

此时不难得知

$$
\mathsf{Hom}_{\mathsf{K}_{\mathsf{D}}}([X]_{\mathsf{K}_{\mathsf{D}}},\mathbb{1}) = \mathsf{D}(X).
$$

由于 $\mathsf{Span}(\mathcal{C})$ 是自对偶的，故有

$$
\mathsf{Hom}_{\mathsf{K}_{\mathsf{D}}}([X]_{\mathsf{K}_{\mathsf{D}}},[Y]_{\mathsf{K}_{\mathsf{D}}}) = \mathsf{D}(X \times Y).
$$

因此，可以看出基于模范畴的定义涵盖了前述基于充实转移的定义。
事实上，可以证明这两种定义作为[[标记模范畴]]是等价的。

## 性质

以下固定几何设定 $(\mathcal{C},E)$ 及其上的三函子理论 $\mathsf{D}$。

::: proposition
对每个对象 $S \in \mathcal{C}$，都有等价

$$
\mathsf{K}_{\mathsf{D},S}^{\operatorname{op}} \simeq \mathsf{K}_{\mathsf{D},S}.
$$
:::

以下命题将给出核 $2$-范畴名称的具体含义：

::: proposition
对每个对象 $S \in \mathcal{C}$，
$\mathsf{D}$ 可分解为以下 $2$-函子的复合：

$$
\mathsf{Span}((\mathcal{C}_E)_{/S}) \xrightarrow{\Phi_{\mathsf{D},S}} \mathsf{K}_{\mathsf{D},S} \xrightarrow{\Psi_{\mathsf{D},S}} \mathsf{Cat}_2.
$$

此处：

- $\Phi_{\mathsf{D},S}$ 将 $\mathsf{Span}((\mathcal{C}_E)_{/S})$ 中的对象映为自身，
  将态射 $f = [Y \leftarrow Z \to X]$ 映为

  $$
  \Phi_{\mathsf{D},S}(f) \coloneqq f_!'(\mathbb{1}) \in \mathsf{Fun}_S(Y,X),
  $$

  此处 $f' \colon Z \to X \times_S Y$ 为由 $f$ 所诱导的态射。

- $\Psi_{\mathsf{D},S} = \mathsf{Fun}_S(S,-)$ 将 $X \in \mathsf{K}_{\mathsf{D},S}$ 映为
  $\mathsf{D}(X)$，
  将态射 $M \in \mathsf{Fun}_S(Y,X)$ 映为函子

  $$
  \Psi_{\mathsf{D},S}(M) \coloneqq \pi_{1!}(M \otimes \pi_2^*(-)) \colon \mathsf{D}(Y) \to \mathsf{D}(X),
  $$

  此处 $\pi_i$ 为 $X \times_S Y$ 上的投影态射。

:::

::: remark
不难发现 $\Psi_{\mathsf{D},S}$ 即为以 $M$ 为核的 [[Fourier–Mukai 变换]]。
:::

::: proposition
对于每个对象，取 $\mathsf{D}$ 在其上的核 $2$-范畴，可构成取值于 $\mathsf{Cat}_2$ 的三函子理论：

$$
\mathsf{K}_{\mathsf{D},(-)} \colon \mathsf{Span}(\mathcal{C}) \to \mathsf{Cat}_2, \quad S \mapsto \mathsf{K}_{\mathsf{D},S}.
$$
:::

以下讨论其[[下降]]性质：

::: remark
当 $E$ 包含 $\mathcal{C}$ 中全体态射时，
$\mathsf{K}_{\mathsf{D}}$ 也是可表现三函子理论。
记
$\mathsf{K}_{\mathsf{D}}' \coloneqq \mathsf{Fun}_{\mathsf{Pr}^{\mathrm{L}}}(\mathsf{K}_{\mathsf{D}},\mathsf{Pr}^{\mathrm{L}})$，
右侧表示 $\mathsf{Pr}^{\mathrm{L}}$-充实函子所构成的范畴。
此时函子 $\mathcal{C} \to \mathsf{K}_{\mathsf{D}}$ 可自动延拓为保持余极限的函子
$\mathsf{PSh}(\mathcal{C}) \to \mathsf{K}'_{\mathsf{D}}$。
从而 $\mathcal{C}$ 上的[[(∞,1)-层|层]]可视为 $\mathsf{K}'_{\mathsf{D}}$ 中的对象。

给定 $\mathcal{C}$ 上预层 $X, Y$，
利用 [[Yoneda 嵌入]]的稠密性将它们分别表为余极限 $\operatorname{colim}_i X_i$ 和
$\operatorname{colim}_j Y_j$。
则有

$$
\mathsf{Fun}_{\mathsf{K}'_{\mathsf{D}}}(Y,X) = \operatorname{lim}_j \operatorname{colim}_i \mathsf{D}(X_i \times Y_j).
$$

更进一步可以获知

$$
\mathsf{D}^*(X) \coloneqq \mathsf{Fun}_{\mathsf{K}'_{\mathsf{D}}}(X,\ast) = \operatorname{lim}_i \mathsf{D}(X_i), \quad
\mathsf{D}^!(X) \coloneqq \mathsf{Fun}_{\mathsf{K}'_{\mathsf{D}}}(\ast,X) = \operatorname{colim}_i \mathsf{D}(X_i).
$$

如果还要求 $X$ 在 $\mathsf{K}_{\mathsf{D}}$ 中是自对偶的，
则 $\mathsf{D}^*(X) = \mathsf{D}^!(X)$。
:::

## 参考资料

以下文献的第四节讲述了通过充实转移的方式定义的核 $2$-范畴的基本性质：

```bibliography
Heyer--Mann:
  type: preprint
  title: 6-Functor Formalisms and Smooth Representations
  author: [Claudius Heyer, Lucas Mann]
  year: 2024
  arxiv: '2410.13038'
```

```terms
核 $2$-范畴:
  en: $2$-category of kernels
```
