---
title: 超流形
categories: [超几何]
navboxes: [超几何]
---

在[[超几何]]中，**超流形**是[[流形]]的推广，它同时具有偶坐标和奇坐标。
大致来说，我们将其视为普通的流形，这是其偶的部分，
而它带有一些无穷小的奇的方向，这些方向构成流形上的[[向量丛]]，
但不同的是，这些方向的坐标相乘满足反交换性：$\theta \eta = -\eta \theta$。

超流形可以通过[[环化空间]]定义，
其[[结构层]]是[[超交换代数]]层。

在超流形上，奇坐标 $\theta$ 的反对称性蕴涵 $\theta^2 = 0$，
从而可以将其想象成无穷小的方向，类似[[代数几何]]中的[[加厚]]。
事实上，这些无穷小方向总是构成原来流形上的向量丛，
并且，任何光滑超流形也都能通过在普通流形上把向量丛的纤维变成奇方向而得到。

从超流形出发可以定义[[超 Lie 群]]，来描述超流形的对称性。
这也是[[超对称]]的最基本想法。

## 定义

### 局部模型与结构层

设 $U \subset \mathbb{R}^p$ 是开集。
以 $U$ 为底拓扑空间，赋予[[超交换代数]]层
\[
\mathcal{O}_{U^{p|q}} (W)
= C^\infty (W) \otimes_{\mathbb{R}} \Lambda^\bullet ((\mathbb{R}^q)^*),
\qquad W \subset U \text{ 为开集},
\]
所得的空间称为**超区域**，记为 $U^{p|q}$。
这里 $\Lambda^\bullet$ 是[[外代数]]，奇偶次数取外幂次数模 $2$。
当 $U = \mathbb{R}^p$ 时，记为 $\mathbb{R}^{p|q}$。

::: definition [实光滑超流形]
超维数为 $p|q$ 的**实光滑超流形**是二元组
$M = (|M|, \mathcal{O}_M)$，其中 $|M|$ 是 [[Hausdorff 空间|Hausdorff]]、
[[第二可数空间|第二可数]]拓扑空间，
$\mathcal{O}_M$ 是其上的含幺实超交换代数层，
并且每一点附近都存在与某个超区域 $U^{p|q}$ 的同构。
层 $\mathcal{O}_M$ 称为 $M$ 的**结构层**，其局部截面称为**超函数**。
:::

这一空间也是局部超[[环化空间]]：每个[[茎]] $\mathcal{O}_{M, x}$
都有唯一的极大齐次理想。
局部同构同时涉及底层拓扑空间和结构层，不能只要求底层空间局部同胚于 $\mathbb{R}^p$
[@CastonFioresi2007, 定义 2.2.1]。

在超区域中，选取普通坐标 $x^1, \ldots, x^p$
及外代数生成元 $\theta^1, \ldots, \theta^q$，就得到**局部坐标** $(x, \theta)$。
其中 $x^i$ 为偶，$\theta^a$ 为奇，且
\[
\theta^a \theta^b = -\theta^b \theta^a,
\qquad (\theta^a)^2 = 0 .
\]
每个超函数唯一地写为
\[
f (x, \theta) = \sum_{I \subset \{ 1, \ldots, q \}} f_I (x) \theta^I,
\qquad
\theta^I = \theta^{i_1} \cdots \theta^{i_k}, \quad i_1 < \cdots < i_k,
\]
其中 $f_I$ 是普通实光滑函数，$\theta^\varnothing = 1$。
这是奇坐标的有限多项式展开，不是关于实变量的收敛级数。

### 约化流形与态射

设 $\mathcal{J} \subset \mathcal{O}_M$ 为奇截面生成的理想层。
局部地，$\mathcal{J} = (\theta^1, \ldots, \theta^q)$，且 $\mathcal{J}^{q+1} = 0$。
商层给出普通 $p$ 维光滑流形
\[
M_{\mathrm{red}} = (|M|, \mathcal{O}_M/\mathcal{J}),
\qquad
\mathcal{O}_M/\mathcal{J} \simeq C^\infty_{M_{\mathrm{red}}},
\]
称为 $M$ 的**约化流形**。
商映射对应典范嵌入 $M_{\mathrm{red}} \hookrightarrow M$。
在局部坐标中，这就是令全部奇坐标为零。
偶部 $(\mathcal{O}_M)_{\bar{0}}$ 则仍可含有 $\theta^1 \theta^2$ 这样的幂零元，
所以不能用取偶部代替这一商。

::: definition [超流形态射]
超流形 $M$ 到 $N$ 的**态射** $F$ 由连续映射
$|F| \colon |M| \to |N|$ 及保持奇偶性、单位元和实数的层同态
\[
F^* \colon \mathcal{O}_N \longrightarrow |F|_*\mathcal{O}_M
\]
组成，并要求诱导的茎同态为局部同态，
即把目标茎的极大齐次理想映入源茎的极大齐次理想。
:::

设目标超区域的坐标为 $(y^1, \ldots, y^r, \eta^1, \ldots, \eta^s)$。
态射由偶超函数 $F^* y^i$ 和奇超函数 $F^* \eta^a$ 唯一确定，
条件是偶超函数的约化值落在目标的普通坐标区域内。
代入光滑函数时，偶坐标中的幂零部分按有限 [[Taylor 定理|Taylor 展开]]解释。
这称为超流形态射的坐标刻画 [@CastonFioresi2007, 定理 3.1.2]。

## 例子

::: example [普通流形与纯奇空间]
普通 $p$ 维光滑流形 $X$，连同纯偶的函数层 $C^\infty_X$，
是超维数为 $p|0$ 的超流形。
纯奇空间 $\mathbb{R}^{0|q}$ 的底层空间则只有一点，
结构代数为 $\Lambda^\bullet ((\mathbb{R}^q)^*)$。
特别地，$\mathbb{R}^{0|1}$ 上的超函数形如 $a + b \theta$，
其中 $a, b \in \mathbb{R}$；$\theta$ 是非零奇函数，但在唯一的普通点上取值为零。
:::

::: example [向量丛的奇纤维]
设 $E \to X$ 是普通 $p$ 维光滑流形上的秩 $q$ 实[[向量丛]]。
以 $X$ 为底层空间，令
\[
\mathcal{O}_{\Pi E} (U) = \Gamma (U, \Lambda^\bullet E^*)
\]
为外代数丛的光滑截面层，就得到 $p|q$ 维超流形 $\Pi E$。
记号 $\Pi$ 表示把纤维方向改为奇方向。
在局部平凡化中，其奇坐标的变换对奇变量是线性的。
与某个 $\Pi E$ 同构的超流形称为**分裂超流形**。
:::

::: example [微分形式作为超函数]
设 $X$ 是 $p$ 维光滑流形，取 $E = TX$。
则 $\Pi TX$ 的全局超函数代数为
\[
\Gamma (\Pi TX, \mathcal{O}_{\Pi TX})
= \Gamma (X, \Lambda^\bullet T^* X) = \Omega^\bullet (X) .
\]
因而普通[[微分形式]]可以看成 $p|p$ 维超流形上的超函数，
奇偶次数为形式次数模 $2$；[[外微分]]是其上的奇导子
[@Witten2012, 第 3.2.1 节]。
:::

::: example [偶坐标的幂零修正]
在坐标为 $(t, \theta^1, \theta^2)$ 的 $\mathbb{R}^{1|2}$ 上，令态射 $F$ 满足
\[
F^* t = t + \theta^1 \theta^2,
\qquad F^* \theta^1 = \theta^1, \qquad F^* \theta^2 = \theta^2 .
\]
对普通光滑函数 $h$，有
\[
F^* h (t) = h (t) + \theta^1 \theta^2 h' (t) .
\]
将 $\theta^1 \theta^2$ 的符号改为负号便得到逆态射。
因此 $F$ 是非平凡的超流形自同构，尽管其约化映射为恒等映射。
这也说明普通点上的取值不足以确定超函数或超流形态射。
:::

## 性质

### 切超空间与向量场

设 $y \in M_{\mathrm{red}}$，记 $\mathfrak{m}_y$
为 $\mathcal{O}_{M, y}$ 的极大齐次理想。
类比[[切空间]]，**切超空间**定义为[[超向量空间]]
\[
T_y M = (\mathfrak{m}_y/\mathfrak{m}_y^2)^* .
\]
等价地，它由从 $\mathcal{O}_{M, y}$ 到 $\mathbb{R}$ 的实线性分次导子组成，
其中 $\mathbb{R}$ 上的模结构由在 $y$ 处取约化值给出。
在坐标 $(x^i, \theta^a)$ 中，其偶基和奇基分别为
$\partial/\partial x^i|_y$ 与 $\partial/\partial \theta^a|_y$，
故超维数为 $p|q$。

类似地，$M$ 上的**[[向量场]]**是结构层的实线性分次导子。
齐次向量场 $D$ 满足
\[
D (fg) = D (f) g + (-1)^{|D||f|} f D (g) .
\]
向量场组成局部自由的 $\mathcal{O}_M$-模层，
局部基为 $\partial/\partial x^i$ 和 Graßmann 左导数 $\partial/\partial \theta^a$。
其分次交换子使全局向量场构成[[超 Lie 代数]]
[@CastonFioresi2007, 第 3.2 节]。

### 分裂定理

对 $p|q$ 维超流形 $M$，$\mathcal{J}/\mathcal{J}^2$
是 $M_{\mathrm{red}}$ 上秩 $q$ 的局部自由层。
令 $E^*$ 为与之对应的向量丛，则有典范同构
\[
\bigoplus_{k = 0}^q \mathcal{J}^k/\mathcal{J}^{k+1}
\simeq \Lambda^\bullet_{C^\infty_{M_{\mathrm{red}}}}
(\mathcal{J}/\mathcal{J}^2) .
\]
左边只保留奇理想滤过的各阶信息，称为结构层的关联分次代数。
从这个关联分次代数回到原结构层，需要选择分裂。

::: theorem [Batchelor 分裂定理]
每个有限维实光滑超流形 $M$ 都与 $\Pi E$ 同构，
其中 $E \to M_{\mathrm{red}}$ 是实向量丛，
其对偶的截面层为 $\mathcal{J}/\mathcal{J}^2$。
这一同构一般不是典范的。
:::

定理及其证明见 [@Batchelor1979]。
分裂的存在利用了光滑范畴中[[单位分解]]带来的上同调消失；
这里不展开证明。
选择分裂后可得到投影 $M \to M_{\mathrm{red}}$，
但原有结构只给出反向的典范嵌入，一般不会指定这样的投影。
一般超流形态射也不必保持所选的分裂。

若将局部模型中的 $C^\infty_U$ 换成复开集上的全纯函数层，
并把实数换成复数，就得到**[[复超流形]]**。
其局部展开和约化流形仍有类似描述，
但全局上可能不与任何全纯向量丛的 $\Pi E$ 同构：
光滑分裂定理不能直接推广到复解析范畴
[@Witten2012, 第 2.3 节]。

## 参考文献

```bibliography
CastonFioresi2007:
  type: preprint
  author: [Lauren Caston, Rita Fioresi]
  title: Mathematical Foundations of Supersymmetry
  year: 2007
  arxiv: '0710.5742'

Batchelor1979:
  type: article
  author: Marjorie Batchelor
  title: The structure of supermanifolds
  journaltitle: Transactions of the American Mathematical Society
  volume: 253
  year: 1979
  pages: 329--338
  doi: 10.1090/S0002-9947-1979-0536951-0

Witten2012:
  type: preprint
  author: Edward Witten
  title: Notes On Supermanifolds And Integration
  year: 2012
  arxiv: '1209.2199'
```

```terms
超流形:
  en: supermanifold
超区域:
  en: superdomain
超函数:
  en: superfunction
约化流形:
  en: reduced manifold
切超空间:
  en: tangent superspace
分裂超流形:
  en: split supermanifold
```
