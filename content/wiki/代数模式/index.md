---
title: 代数模式
categories: [高阶代数]
navboxes: [高阶代数]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**代数模式**是[[高阶代数]]中的基本概念，是
[[$\infty$-算畴]]的推广，使之不局限于输入多个对象、
输出一个对象的模式，故而不仅涵盖[[结合代数]]、[[交换代数]]，
也涵盖了[[范畴]]等代数结构。

## 定义

代数模式的定义主要使用[[分解系|分解系统]]的概念，
故此先回顾分解系统的定义。

::: definition [分解系统]
范畴 $\mathcal{C}$ 的**分解系统**指其一对子范畴
$(\mathcal{C}^L,\mathcal{C}^R)$，其中二者都包含全部的对象，
且对 $\mathcal{C}$ 中任意态射 $f\colon x\to y$，空间
$$
\{(g\colon x\to z,\,h\colon z\to y)\mid
g\in\mathcal{C}^L,\,h\in\mathcal{C}^R,\,h\circ g=f\}
$$
为可缩。
:::

::: remark
范畴 $\mathcal{C}$ 的**子范畴**指 $(-1)$-截断的函子
$\mathcal{D}\to\mathcal{C}$，即其满足在对象空间上为
$(-1)$-截断，且对任意 $x,y\in\mathcal{D}$，映射空间的映射
$\operatorname{Hom}_\mathcal{D}(x,y)\to
  \operatorname{Hom}_\mathcal{C}(x,y)$ 也为 $(-1)$-截断。
:::

::: definition [代数模式]
**代数模式**指 [[$(\infty,1)$-范畴]] $\mathcal{O}$
附带分解系统 $(\mathcal{O}^惰,\mathcal{O}^活)$
以及 $\mathcal{O}^惰$ 的满子范畴 $\mathcal{O}^初$。
$\mathcal{O}^惰$、$\mathcal{O}^活$
中的映射分别称为**惰性映射**、**活性映射**，
$\mathcal{O}^初$ 中的对象称为**初等对象**。
:::

::: definition [代数模式间的态射]
令 $\mathcal{O}$ 和 $\mathcal{P}$ 为两个代数模式，
则从 $\mathcal{O}$ 到 $\mathcal{P}$ 的**代数模式间的态射**
是指保持初等对象、惰性态射以及活性态射的函子 $F \colon \mathcal{O} \to \mathcal{P}$。
将代数模式所构成的范畴记为 $\mathsf{AlgPatt}$。
:::

下面定义关于某代数模式的代数。此处承参考文献使用“Segal 对象”
的名称，实际上 Segal $\mathcal{O}$-对象表达的就是
$\mathcal{O}$-代数的概念。

::: definition [Segal 对象]
设 $\mathcal{O}$ 是代数模式，$\mathcal{C}$ 是范畴。
$\mathcal{C}$ 中的 **Segal $\mathcal{O}$-对象**指函子
$X\colon\mathcal{O}\to\mathcal{C}$，满足对任意
$o\in\mathcal{O}$，$X$ 把图表 $o\to\mathcal{O}^初_{o/}$
打到极限图表，换言之
$$
X(o)=\lim_{e\in\mathcal{O}^初_{o/}}X(e).
$$
:::

以下概念推广了 [[$\infty$-算畴]]理论中的 $\mathcal{O}$-幺半范畴。

::: definition [Segal 纤维化] {@幺半范畴}
设 $\mathcal{O}$ 是代数模式。称函子
$\mathcal{E}\to\mathcal{O}$ 为 **Segal 纤维化**，
指其首先是余笛卡尔纤维化，其次其[[推出纤维化|直化]] $\mathcal{O}
  \to\mathsf{Cat}$ 是 Segal $\mathcal{O}$-范畴，
即 $\mathsf{Cat}$ 中的 Segal $\mathcal{O}$-对象。
此时 $\mathcal{E}$ 自然带有 $\mathcal{O}$ 上代数模式结构如下：

- 取 $\mathcal{E}^惰$ 为 $\mathcal{O}^惰$
  上的余笛卡尔映射；

- 取 $\mathcal{E}^活$ 为 $\mathcal{O}^活$
  上的映射；

- 取 $\mathcal{E}^初$ 为 $\mathcal{O}^初$
  在 $\mathcal{E}^惰$ 中的原像。

此时如 $\mathcal{P}\to\mathcal{O}$ 是 $\mathcal{O}$
上的代数模式，则可定义 Segal $\mathcal{O}$-范畴
$\mathcal{E}$ 上的 $\mathcal{P}$-代数为 $\mathcal{O}$
上的代数模式映射 $\mathcal{P}\to\mathcal{E}$。
:::

## 例子

- 最基本的例子为带基点有限集范畴 $\mathsf{Fin}_*$
  （参见词条 [[$\infty$-算畴]]），
  在此出于直观将其视为有限集部分映射范畴。
  取惰性映射为“缩减定义域”，活性映射为定义域是全部的映射。
  - 如取初等对象为 ${\langle 1 \rangle}$，
    则其 Segal 对象就是交换幺半群，Segal 纤维化就是对称幺半范畴。
    此时将该代数模式称为 **[[交换代数模式]]**，
    并记为 $\mathsf{Comm}$（或 $\mathsf{Fin}_*^{\flat}$）。
  - 如取初等对象为 ${\langle 0 \rangle}$ 和 ${\langle 1 \rangle}$，
    此时将该代数模式记为 $\mathsf{Fin}_*^{\natural}$。

- [[$\infty$-算畴]] $\mathcal{O}$ 给出 $\mathsf{Fin}_*$
  上的代数模式 $\mathcal{O}\to\mathsf{Fin}_*$。
  此时 @幺半范畴 给出对称幺半范畴中 $\mathcal{O}$-代数的概念。

- 考虑有限全序集范畴（即[[单纯集|单形范畴]]）的反范畴
  $\mathbb{\Delta}^\mathrm{op}$。
  取惰性映射为区间含入，活性映射为保持最小元与最大元的映射。
  - 如取初等对象为二元集，则其 Segal 对象就是幺半群；
    此时将该代数模式称为 **[[结合代数模式]]**，
    并记为 $\mathsf{Assoc}$（或 $\mathbb{\Delta}^{\mathrm{op},\flat}$）。
  - 如取初等对象为一元集与二元集，则其 Segal 对象就是所谓
    [[Segal 空间]]的推广，或称[[内 $(\infty,1)$-范畴]]。
    此时将该代数模式称为 **Segal 模式**，
    并记为 $\mathbb{\Delta}^{\mathrm{op},\natural}$。

- 考虑函子
  \[
  \mathsf{Fin}_*({\langle 1 \rangle},-) \colon \mathsf{Fin}_* \to \mathsf{Ani}.
  \]
  其[[左纤维化|反直化]]给出左纤维化 $\mathsf{Fin}_{*,{\langle 1 \rangle}/} \to \mathsf{Fin}_*$。
  此时沿该左纤维化从 $\mathsf{Comm}$ 中继承来的代数模式称为 **[[交换代数上的模模式]]**，
  并记为 $\mathsf{Mod}$（或 $\mathsf{CM}$）。

- 考虑函子
  $\mathbb{\Delta}^{\mathrm{op}}([1],-) \colon
  \mathbb{\Delta}^{\mathrm{op}} \to \mathsf{Ani}$。
  其[[左纤维化|反直化]]给出左纤维化
  $\left(\mathbb{\Delta}_{/[1]} \right)^{\operatorname{op}} \to \mathbb{\Delta}^{\operatorname{op}}$。
  此时沿该左纤维化从 $\mathsf{Assoc}$ 中继承来的代数模式称为 **[[双模模式]]**，
  并记为 $\mathsf{BM}$。

- 考虑范畴 $\mathbb{\Delta}^{\mathrm{op}} \times [1]$。
  考虑函子
  \[
  T \colon \mathbb{\Delta}^{\mathrm{op}} \to \mathbb{\Delta}^{\mathrm{op}},
  [n] \mapsto [n]\star [0] \simeq [n+1]
  \]
  则自然变换 $T \Rightarrow \operatorname{id}_{\mathbb{\Delta}^{\mathrm{op}}}$
  诱导出函子
  \[
  \mathbb{\Delta}^{\mathrm{op}} \times [1] \to \mathbb{\Delta}^{\mathrm{op}}.
  \]
  则沿该函子从 $\mathsf{Assoc}$ 中继承来的代数模式称为 **[[左模模式]]**，
  并记为 $\mathsf{LM}$，
  类似可给出 **[[右模模式]]**。

- 考虑空范畴 $\varnothing$，
  因此将其称为 **[[空模式]]**，
  记为 $\varnothing$。

- 考虑终范畴 $\ast$，此时取初等对象为其自身，
  惰性态射为 $\operatorname{id}\colon \ast \to \ast$，
  将其称为 **[[平凡模式]]**，
  记为 **Triv**。

## 参考文献

```bibliography
CHU2021107733:
  type: article
  title: Homotopy-coherent algebra via Segal conditions
  journaltitle: Advances in Mathematics
  volume: 385
  pages: 107733
  year: 2021
  doi: 10.1016/j.aim.2021.107733
  url: https://www.sciencedirect.com/science/article/pii/S0001870821001729
  author: [Hongyi Chu, Rune Haugseng]
barkan2022envelopes:
  type: preprint
  title: Envelopes for Algebraic Patterns
  author: [Shaul Barkan, Rune Haugseng, Jan Steinebrunner]
  year: 2022
  arxiv: '2208.07183'
```

另见讲义《高阶代数》中的“代数模式”一节。

```terms
代数模式:
  en: algebraic pattern
惰性映射:
  en: inert map
活性映射:
  en: active map
初等对象:
  en: elementary object
```
