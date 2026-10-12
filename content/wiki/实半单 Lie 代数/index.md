---
title: 实半单 Lie 代数
categories: [Lie 理论]
notices:
  - name: 问题
    items:
      - “复化与实形式”一节需要扩充，例如讨论内形式。
      - “分类”一节需要扩充。
      - “例子”一节 $A_2$ 型的例子中，$\mathfrak{su}(2,1)$ 的 Satake 图只有白顶点，“箭头从白顶点指向黑顶点”一句似乎有误。
navboxes: [Lie 理论]
---

**实半单 Lie 代数**，
即[[实数]]域 $\mathbb{R}$ 上的[[半单 Lie 代数]]。
相比于复半单 Lie 代数，实半单 Lie 代数的结构与分类更为复杂。

实半单 Lie 代数上的两个重要构造是其[[复化]]以及 [[Cartan 对合]]。
大致来说，复化把一个实半单 Lie 代数变为复半单 Lie 代数，从而得到初步的分类，
而 Cartan 对合把 Lie 代数拆分为紧部分和非紧部分，其中紧部分构成它的极大紧子代数。
由单根在 Cartan 对合下的表现，可以画出 [[Satake 图]]和 [[Vogan 图]]，
它们作为组合不变量完全刻画了实半单 Lie 代数。

## 定义

**实半单 Lie 代数**的定义即是[[实数]]域
$\mathbb{R}$ 上的[[半单 Lie 代数]]。

::: definition
设 $\mathfrak{g}$ 为有限维[[实 Lie 代数]]。
若其[[Killing 型]] $B(X,Y)=\operatorname{tr}(\operatorname{ad}X\operatorname{ad}Y)$ 非退化，
则称 $\mathfrak{g}$ 为**实半单 Lie 代数**。
:::

还有如下等价条件。

::: theorem
对于有限维实 Lie 代数 $\mathfrak{g}$，下列条件等价：

- $\mathfrak{g}$ 是实半单 Lie 代数；

- $\mathfrak{g}$ 不包含非零的[[可解理想]]；

- $\mathfrak{g}$ 的复化 $\mathfrak{g}_{\mathbb{C}} = \mathfrak{g}\otimes_{\mathbb{R}}\mathbb{C}$
  是[[半单 Lie 代数|复半单 Lie 代数]]。

:::

实半单 Lie 代数可以唯一地分解为[[单 Lie 代数]]的直和。

## 结构

### 复化与实形式

::: definition [复化，实形式]
设 $\mathfrak{g}$ 为实 Lie 代数。
其**复化**是复 Lie 代数
$\mathfrak{g}_{\mathbb{C}} = \mathfrak{g}\otimes_{\mathbb{R}}\mathbb{C}$，
Lie 括号由 $[X\otimes z, Y\otimes w] = [X,Y]\otimes zw$ 线性扩充得到。

反过来，设 $\mathfrak{g}_{\mathbb{C}}$ 为复 Lie 代数。
若存在实 Lie 代数 $\mathfrak{g}$ 使得
$\mathfrak{g}_{\mathbb{C}} \simeq \mathfrak{g}\otimes_{\mathbb{R}}\mathbb{C}$，
则称 $\mathfrak{g}$ 为 $\mathfrak{g}_{\mathbb{C}}$ 的**实形式**。
:::

每个实形式对应于它的复化上的“复共轭”。

::: proposition [实形式与对合]
对实 Lie 代数 $\mathfrak{g}$，
$X \otimes z \mapsto X \otimes \bar{z}$ 诱导了
$\mathfrak{g}_{\mathbb{C}}$ 上的半线性对合，记作 $\tau_{\mathfrak{g}}$。

反过来，如有复 Lie 代数 $\mathfrak{g}_{\mathbb{C}}$ 上的半线性对合 $\tau$，
则 $\mathfrak{g}_{\mathbb{C}}$ 在 $\tau$ 作用下的不动点是它的实形式。
:::

复半单 Lie 代数总是存在实形式。一些特殊的实形式尤为重要。

::: definition [紧实形式]
实半单 Lie 代数 $\mathfrak{g}$ 称为**紧 Lie 代数**，
如果其 Killing 型是[[负定二次型|负定]]的。
此时 $\mathfrak{g}$ 对应的连通 Lie 群是[[紧 Lie 群]]。

对复半单 Lie 代数 $\mathfrak{g}_{\mathbb{C}}$，
它存在在共轭意义下惟一的、紧的实形式，称为其**紧实形式**。
:::

分裂实形式是“最不紧”的实形式，其限制根系等同于复根系。

::: definition
实半单 Lie 代数 $\mathfrak{g}$ 称为**分裂 Lie 代数**，
如果它含有一个 [[Cartan 子代数]] $\mathfrak{h}$，
使得对所有 $H\in \mathfrak{h}$，
$\operatorname{ad} H$ 的特征值皆为实数。

对复半单 Lie 代数 $\mathfrak{g}_{\mathbb{C}}$，
它存在在共轭意义下惟一的、分裂的实形式，称为其**分裂实形式**。
:::

拟分裂实形式包含分裂实形式，也包含一些非分裂但仍有实 Borel 子代数的情形。
在 Satake 图中它们没有黑色顶点。

::: definition
实半单 Lie 代数 $\mathfrak{g}$ 称为**拟分裂 Lie 代数**，
如果它包含定义在 $\mathbb{R}$ 上的 [[Borel 子代数]]。
:::

### Cartan 对合

::: definition
设 $\mathfrak{g}$ 为实半单 Lie 代数，$B$ 为其 Killing 型。
一个 Lie 代数自同构 $\theta \colon \mathfrak{g} \to \mathfrak{g}$ 称为 **Cartan 对合**，
如果 $\theta^2 = \operatorname{id}$，且双线性型
\[
B_\theta(X,Y) = -B(X,\theta Y)
\]
是[[正定二次型|正定]]的。

给定 Cartan 对合 $\theta$，记 $\mathfrak{k} = \{X\in \mathfrak{g}\mid \theta X = X\}$，
$\mathfrak{p} = \{X\in \mathfrak{g}\mid \theta X = -X\}$，则得到 **Cartan 分解**
\[
\mathfrak{g} = \mathfrak{k} \oplus \mathfrak{p},
\]
满足
\[
[\mathfrak{k},\mathfrak{k}]\subseteq \mathfrak{k},\quad [\mathfrak{k},\mathfrak{p}]\subseteq \mathfrak{p},\quad [\mathfrak{p},\mathfrak{p}]\subseteq \mathfrak{k}.
\]
$\mathfrak{k}$ 是 $\mathfrak{g}$ 的极大紧子代数，
Killing 型在 $\mathfrak{k}$ 上负定而在 $\mathfrak{p}$ 上正定。
:::

::: theorem [Cartan]
任何实半单 Lie 代数 $\mathfrak{g}$ 均存在 Cartan 对合 $\theta$，
且所有 Cartan 对合在[[内自同构]]意义下唯一。

此外，$\tau_{\mathfrak{g}}\circ \theta_{\mathbb{C}}$ 也是
$\mathbb{C}$ 上的半线性对合，其对应的实 Lie 代数是 $\mathfrak{g}$ 的紧实形式。
:::

### Satake 图与分类

<see>[[Satake 图]]</see>

通过 Cartan 对合可以构造实半单 Lie 代数的组合不变量 Satake 图。

::: definition
设 \(\mathfrak{g}\) 为实半单 Lie 代数，\(\theta\) 为其 Cartan 对合。
若 [[Cartan 子代数]] \(\mathfrak{h}\) 满足 \(\theta(\mathfrak{h}) = \mathfrak{h}\)，
则称 \(\mathfrak{h}\) 为 \(\theta\)-稳定的。
这样的 Cartan 子代数总存在，并可分解为
\[
\mathfrak{h} = \mathfrak{t} \oplus \mathfrak{a},
\]
其中 \(\mathfrak{t} = \mathfrak{h} \cap \mathfrak{k}\) 为紧部分，
\(\mathfrak{a} = \mathfrak{h} \cap \mathfrak{p}\) 为分裂部分。
:::

由此，$\theta_{\mathbb{C}}$ 在 $\mathfrak{h}_{\mathbb{C}}$
和 $\mathfrak{g}_{\mathbb{C}}$ 上的作用诱导了它在
$\mathfrak{g}_{\mathbb{C}}$ 的[[根系]]上的作用。
以下取使 $\mathfrak{a}$ 的维数最大，$\theta$-稳定的 $\mathfrak{h}$。

::: definition [Satake 图]
在上述设定下，**Satake 图** 是带有附加信息的 [[Dynkin 图]]，
构造如下：

- 顶点对应于单根 $\alpha\in\Pi$，并按照 Dynkin 图连边；
- 若 $\theta(\alpha) = \alpha$，相应顶点涂成黑色（此时它是“紧的”），
  其它点是“非紧”的，涂成白色；
- 在 $\Pi$ 的合适选取下，对于任意非紧单根 $\alpha$，存在非紧单根 $\alpha'$，满足
  $-\theta(\alpha)$ 与 $\alpha'$ 相差 $\Pi^\theta$ 中元素的线性组合。
  此时用双向箭头将这两个白根相连（如 $\alpha=\alpha'$，则不用连）。

:::

此外，将 $\mathfrak{g}$ 按 $\mathfrak{a}$ 的[[伴随表示]]作用做权空间分解，
还会得到**限制根系** $\Sigma(\mathfrak{g},\mathfrak{a})$，
它是可能非既约的根系，对应的 Dynkin 图称为限制 Dynkin 图。

如果在上述定义中取 $\mathfrak{h}$ 使 $\mathfrak{a}$ 的维数最小，
也会得到类似的图，称为 [[Vogan 图]]。

::: theorem [实半单 Lie 代数的分类]
两个实半单 Lie 代数同构当且仅当它们具有相同的 Satake 图
（即复化 Dynkin 图连同涂色与箭头一致）。
实半单 Lie 代数的所有同构类由这些 Satake 图完全分类。
:::

## 例子

$\mathfrak{sl}(n,\mathbb{R})$、$\mathfrak{sl}(n,\mathbb{H})$、
$\mathfrak{su}(p,q)$ 这些[[典型群]]的 Lie 代数都是 $A$ 型的实半单 Lie 代数。

::: example [$A_1$ 型]
复 Lie 代数 $\mathfrak{sl}(2,\mathbb{C})$ 有两个实形式：

- **紧实形式** $\mathfrak{su}(2)$，其 Killing 型负定，Satake 图为一个黑色顶点 $\bullet$。

- **分裂实形式** $\mathfrak{sl}(2,\mathbb{R})$，
  其极大紧子代数为 $\mathfrak{so}(2)$，Satake 图为一个白色顶点 $\circ$
  （注：$\mathfrak{sl}(2,\mathbb{R})\simeq \mathfrak{su}(1,1)$）。

:::

::: example [$A_2$ 型]
复 Lie 代数 $\mathfrak{sl}(3,\mathbb{C})$ 的实形式有以下三个：

- **紧实形式** $\mathfrak{su}(3)$，
  Satake 图：$\bullet\!\!-\!\!\bullet$。

- **分裂实形式** $\mathfrak{sl}(3,\mathbb{R})$，
  Satake 图：$\circ\!\!-\!\!\circ$。

- **非紧且非分裂的实形式** $\mathfrak{su}(2,1)$，
  实秩为 $1$，Satake 图为两个白顶点以双向箭头相连，
  且箭头从白顶点指向黑顶点：$\circ\!\overset{\textstyle\frown}{\!-\!}\!\circ$，
  它是拟分裂的。

:::

$\mathfrak{so}(p,q)$（$p+q$ 为奇数）则是 $B$ 型。

::: example [$B_2$ 型]
复 Lie 代数 $\mathfrak{so}(5,\mathbb{C})$（即 $B_2$ 型，它与 $C_2$ 型复同构）的主要实形式有：

- **紧实形式** $\mathfrak{so}(5)$，Satake 图：$\bullet\!\!\Rightarrow\!\!\bullet$。

- **分裂实形式** $\mathfrak{so}(3,2)$，Satake 图：$\circ\!\!\Rightarrow\!\!\circ$。

- **非紧且非分裂的实形式** $\mathfrak{so}(4,1)$，实秩为 $1$，Satake 图：
  $\circ\!\!\Rightarrow\!\!\bullet$。

若视为 $C_2$ 型，其分裂实形式 $\mathfrak{sp}(2,\mathbb{R})$ 同构于 $\mathfrak{so}(3,2)$，
紧实形式则对应于 $\mathfrak{so}(5)$。
:::

## 分类

```terms
实半单 Lie 代数:
  en: real semisimple Lie algebra
  fr: algèbre de Lie semi-simple réelle
```
