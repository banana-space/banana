---
title: '范畴 $\mathcal{O}$'
aliases: [BGG 范畴]
categories: [Lie 理论]
notices:
  - name: 问题
    items:
      - “对偶模”定义中，对偶 Verma 模 $M(\lambda)^\vee$ 的唯一单子模似乎应为 $L(\lambda)$ 而不是 $L(-w_0\lambda)$（Chevalley 对合给出的对偶保持单模不变）；其后“有限维表示的对偶就是通常的对偶”一句也似乎与此不符。
      - “BGG 互反律”中，$P(\lambda)$ 具有的似乎是以 Verma 模为因子的标准滤链，而不是合成列。
      - “例子”一节中，$\lambda \in \mathbb{Z}_{\ge 0}$ 时 $P(\lambda)$ 似乎就是 $M(\lambda)$；具有子模 $L(-\lambda-2)$、商 $M(\lambda)$ 的投射模似乎应是 $P(-\lambda-2)$。
navboxes: [Lie 理论, 几何表示论]
---

**范畴 $\mathcal{O}$** 是由 Bernstein、
Gelfand 和 Gelfand 在 20 世纪 70 年代引入的一类[[半单 Lie 代数]]的表示的范畴，
推广了有限维表示构成的范畴，
大致来说，固定 [[Borel 子代数]]后，范畴 $\mathcal{O}$ 由[[最高权表示]]生成，
其中[[Cartan 子代数]]的作用可对角化并具有有限维权空间。

与[[半单 Lie 代数表示论|有限维表示]]的情形不同，
范畴 $\mathcal{O}$ 中的对象未必是[[半单模|半单]]的，因此结构更丰富：
它有[[最高权范畴]]的结构，其中的标准对象为[[Verma 模]]，
余标准对象为 Verma 模的对偶，并包含所有有限长的[[单模]]。
它具有由[[中心特征标]]决定的[[区块分解]]，
每个块都是某个有限维代数的模范畴。
BGG 互反律、[[Kazhdan–Lusztig 猜想]]则描述了这些对象间的关系。

范畴 $\mathcal{O}$ 在表示论中有一些推广。
[[抛物范畴 $\mathcal{O}$]] 推广了原来的构造，
允许相对于[[抛物子代数]]的广义 Verma 模。
在正特征域上的 [[$p$-Lie 代数]]表示论中，
也可以定义类似的范畴。
[[量子群]]在单位根处的表示范畴也呈现出与范畴 $\mathcal{O}$ 类似的结构。

此外，Kazhdan–Lusztig 猜想的证明也启发了范畴 $\mathcal{O}$ 与其它对象的联系，
例如[[Beilinson–Bernstein 局部化定理]]将范畴 $\mathcal{O}$
的主块等变地实现为[[旗簇]]上某些扭[[D-模]]的范畴，
[[Soergel 双模]]理论提供了范畴 $\mathcal{O}$ 与组合对象的联系。

## 定义

范畴 $\mathcal{O}$ 由三个有限性条件刻画。

::: definition [范畴 $\mathcal{O}$]
设 $\mathfrak{g}$ 为复数域 $\mathbb{C}$ 上的[[半单 Lie 代数]]。
取定它的 [[Cartan 子代数]] $\mathfrak{h}$ 和包含 $\mathfrak{h}$ 的 [[Borel 子代数]]
$\mathfrak{b} = \mathfrak{h} \oplus \mathfrak{n}^+$，
其中 $\mathfrak{n}^+$ 是由正根向量张成的幂零子代数。
令 $U(\mathfrak{g})$ 为 $\mathfrak{g}$ 的[[泛包络代数]]，$\mathcal{Z}(\mathfrak{g})$ 为其中心。
**范畴 $\mathcal{O}$** 是由满足以下三个条件的左 $U(\mathfrak{g})$-模构成的范畴：

1. $M$ 作为 $U(\mathfrak{g})$-模是[[有限生成模|有限生成]]的。

2. $M$ 作为 $U(\mathfrak{h})$-模是[[半单模|半单]]的，
   且每个[[权空间]]
   $M_\lambda = \{ m \in M \mid h \cdot m = \lambda(h) m,\ \forall h \in \mathfrak{h} \}$
   都是有限维的。

3. $M$ 是局部 $\mathfrak{n}^+$-有限的，即对任意 $m \in M$，
   子空间 $U(\mathfrak{n}^+) \cdot m$ 是有限维的。

:::

大致来说，上述条件保证了范畴 $\mathcal{O}$ 中的对象由最高权表示生成。

## 性质

范畴 $\mathcal{O}$ 的结构很丰富，
它是[[有限长度]]的 Abel 范畴，还具有最高权范畴的结构，
并可按中心特征标进行区块分解，其对象间的关系由一系列深刻定理所描述。

### 基本性质

- 范畴 $\mathcal{O}$ 是 [[Abel 范畴]]，
关于子模、商模、有限直和以及扩张封闭。

- 范畴 $\mathcal{O}$ 的每个对象都具有有限[[合成列]]，
且 [[Jordan–Hölder 定理]]成立。

- 范畴 $\mathcal{O}$ 中存在足够多的投射与内射对象。

### 最高权范畴结构

范畴 $\mathcal{O}$ 有[[最高权范畴]]的结构，
其中的标准对象为 Verma 模，余标准对象为对偶 Verma 模，而单模则由 Verma 模的唯一不可约商得到。

::: definition [Verma 模与单模]
对任意 $\lambda \in \mathfrak{h}^*$，
令 $\mathbb{C}_\lambda$ 是以 $\mathfrak{h}$ 权为 $\lambda$、
$\mathfrak{n}^+$ 平凡作用的一维 $\mathfrak{b}$-模。
将其诱导至 $\mathfrak{g}$，得到 **Verma 模**
\[
M(\lambda) = U(\mathfrak{g}) \otimes_{U(\mathfrak{b})} \mathbb{C}_\lambda.
\]
此时，每个 $M(\lambda)$ 具有唯一的[[最高权向量]]（权为 $\lambda$）。

通过取 $M(\lambda)$ 的唯一不可约商模，得到**单模** $L(\lambda)$。
且映射 $\lambda \mapsto L(\lambda)$ 给出了单模的同构类与 $\mathfrak{h}^*$ 之间的一一对应。
:::

::: definition [对偶模]
定义对合 $\sigma\colon \mathfrak{g} \to \mathfrak{g}$
为沿着 Borel 分解的 [[Chevalley 对合]]。
对任意 $M \in \mathcal{O}$，
定义其 **对偶模** $M^\vee$ 为有限权空间的限制对偶空间，
即
\[
M^\vee = \bigoplus_{\lambda \in \mathfrak{h}^*} \operatorname{Hom}_{\mathbb{C}}(M_\lambda, \mathbb{C}),
\]
并赋予 $\mathfrak{g}$ 的扭转作用 $x \cdot f = f \circ \sigma(x)$。
此时，Verma 模的对偶，**对偶 Verma 模** $M(\lambda)^\vee$ 是余标准对象，
它以 $L(-w_0\lambda)$ 为唯一子单模，记作 $N(-w_0\lambda)$。
:::

由定义，有限维表示的对偶就是通常的 Lie 代数表示的对偶。

::: proposition [投射模]
对于任意 $\lambda \in \mathfrak{h}^*$，
存在不可分解[[投射模]] $P(\lambda)$ 以 $L(\lambda)$ 为唯一单商模。
:::

由于最高权范畴结构，范畴 $\mathcal{O}$ 还具有[[倾斜模]]。

### 区块分解

范畴 $\mathcal{O}$ 可以根据中心特征标分裂为若干块的直和，
每个块具有有限多个单对象，并可实现为某个有限维代数的模范畴。

::: proposition
[[Harish-Chandra 中心]] $\mathcal{Z}(\mathfrak{g})$ 在任意对象 $M \in \mathcal{O}$
上的作用局部有限，
即对任意 $m \in M$，存在有限余维的理想 $J \subset \mathcal{Z}(\mathfrak{g})$ 零化 $m$。
因此 $M$ 可以分解为广义中心特征标空间的直和。
:::

::: proposition
范畴 $\mathcal{O}$ 按照 $\mathcal{Z}(\mathfrak{g})$ 的中心特征标分解为若干[[块]]的直和。
设 $\chi\colon \mathcal{Z}(\mathfrak{g}) \to \mathbb{C}$ 为中心特征标，
定义 $\mathcal{O}_\chi$ 为满足对所有 $z \in \mathcal{Z}(\mathfrak{g})$ 与 $m \in M$，
都有 $(z - \chi(z))^N m = 0$（$N$ 依赖于 $z, m$）的模构成的完全子范畴。
则有
\[
\mathcal{O} = \bigoplus_{\chi} \mathcal{O}_\chi,
\]
其中直和取遍 $\mathcal{Z}(\mathfrak{g})$ 所有极大理想对应的特征标。
:::

::: proposition
由 [[Harish-Chandra 同构]]，中心特征标 $\chi$ 对应于商空间 $\mathfrak{h}^* / W_\bullet$ 中的元素，
其中 $W$ 是 $\mathfrak{g}$ 的[[Weyl 群]]，$w \bullet \lambda = w(\lambda + \rho) - \rho$。
两个权 $\lambda, \mu \in \mathfrak{h}^*$ 所在块相同的充要条件是它们位于相同的 Weyl 群轨道，
且 $\lambda - \mu$ 为[[整权]]。
此时，每个块 $\mathcal{O}_\chi$ 中的对象由相应的最高权模组成。
:::

最丰富的块是包含平凡表示的主块（对应于正则中心特征标）。
通过[[平移函子]]，不同块之间的信息可以相互传递。

### 对象间关系

范畴 $\mathcal{O}$ 中的标准模、投射模与单模之间通过 BGG 互反律、
BGG 消解和 Kazhdan–Lusztig 猜想联系。

::: theorem [BGG 互反律]
令 $P(\lambda)$ 为 $L(\lambda)$ 的投射覆盖，$M(\mu)$ 为 Verma 模。
则 $P(\lambda)$ 有由有限个 $M(\mu)$ 构成的合成列。
在 [[Grothendieck 群]]中，记
\[
[P(\lambda)] = \sum_{\mu} [P(\lambda) : M(\mu)] \, [M(\mu)],
\]
则重数满足
\[
[P(\lambda) : M(\mu)] = [M(\mu) : L(\lambda)].
\]
这里 $[M(\mu) : L(\lambda)]$ 表示 Verma 模 $M(\mu)$ 的合成因子中 $L(\lambda)$ 的重数。
:::

::: theorem [BGG 消解]
对支配整权 $\lambda \in \mathfrak{h}^*$，
单模 $L(\lambda)$ 存在由其他 Verma 模构成的消解。
具体地，存在正合列
\[
\cdots \to \bigoplus_{w \in W,\, \ell(w)=k} M(w \bullet \lambda) \to \cdots \to \bigoplus_{w \in W,\, \ell(w)=1} M(w \bullet \lambda) \to M(\lambda) \to L(\lambda) \to 0,
\]
其中 $\ell$ 为 Bruhat 长度。
:::

Kazhdan–Lusztig 猜想（现已成为定理）给出了 Verma 模合成因子重数的计算。

::: theorem [Kazhdan–Lusztig 猜想；Beilinson–Bernstein、Brylinski–Kashiwara]
设 $\lambda, \mu$ 在 $0$ 的 $W_\bullet$-轨道中，即 $\lambda = w \bullet 0$，
$\mu = v \bullet 0$，其中 $w, v \in W$。
则 Verma 模的合成因子重数由 [[Kazhdan–Lusztig 多项式]] $P_{x,y}(q)$ 给出：
\[
[M(\lambda) : L(\mu)] = P_{w_0 w, w_0 v}(1),
\]
其中 $w_0$ 是 $W$ 的最长元，$P_{x,y}$ 是与 [[Hecke 代数]]关联的多项式。
此结果说明该块的 Grothendieck 群与 [[Iwahori–Hecke 代数]]同构，
单模类对应 Kazhdan–Lusztig 基。
:::

## 例子

下面以 $\mathfrak{sl}_2(\mathbb{C})$ 为例，具体展示范畴 $\mathcal{O}$ 中的对象结构、
区块分解以及互反律的表现。

::: example [$\mathfrak{g} = \mathfrak{sl}_2(\mathbb{C})$]
取标准基 $e, f, h$，$\mathfrak{h} = \mathbb{C} h$，正根为 $\alpha$，$\rho = \alpha/2$。
将 $\mathfrak{h}^*$ 与 $\mathbb{C}$ 等同，使得 $\alpha$ 对应于 $2$，则 $\rho = 1$。
Weyl 群 $W = \{1, s\}$，其中 $s_\bullet$ 将 $\lambda$ 映为 $-\lambda-2$。

对于 $\lambda \in \mathbb{C}$，
Verma 模 $M(\lambda)$ 以 $\{v_{\lambda-2k} \mid k \in \mathbb{Z}_{\ge 0}\}$ 为基，
作用为 $h \cdot v_{\lambda-2k} = (\lambda-2k) v_{\lambda-2k}$，
$f \cdot v_{\lambda-2k} = v_{\lambda-2k-2}$，
$e \cdot v_{\lambda-2k} = k(\lambda-k+1) v_{\lambda-2k+2}$。
此时 $M(\lambda)$、$P(\lambda)$、$L(\lambda)$ 的关系如下：

- 若 $\lambda \notin \mathbb{Z}_{\ge 0}$，则 $M(\lambda)$ 本身即不可约，$L(\lambda) = M(\lambda)$。

- 若 $\lambda \in \mathbb{Z}_{\ge 0}$，
  则 $M(\lambda)$ 包含一个以 $-\lambda-2$ 为最高权的不可约真子模，同构于 $L(-\lambda-2)$，
  且有短正合列
  \[
  0 \to L(-\lambda-2) \to M(\lambda) \to L(\lambda) \to 0.
  \]
  此时 $\lambda$ 和 $-\lambda-2$ 属于同一区块，$L(\lambda)$ 是 $\lambda+1$ 维不可约模，
  且投射模 $P(\lambda)$ 有滤链 $0 \subset L(-\lambda-2) \subset P(\lambda)$，商为 $M(\lambda)$，
  体现了 BGG 互反律。

:::

```terms
'范畴 $\mathcal{O}$':
  en: 'category $\mathcal{O}$'
  fr: 'catégorie $\mathcal{O}$'
```
