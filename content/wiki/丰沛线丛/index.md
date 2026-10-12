---
title: 丰沛线丛
categories: [代数几何]
navboxes: [代数几何]
---

在[[代数几何]]中，
**丰沛线丛**是一类[[代数线丛]]，
大致是指具有足够多的[[整体截面]]的线丛。
常常将这部分线丛视为“正的”线丛，它们的[[对偶线丛]]视为“负的”线丛，
其余线丛则可视为正、负混合的。

例如，考虑[[射影空间 (代数几何)|射影空间]] $\mathbb{P}^n$ 上的线丛
$\mathcal{O} (d) = \mathcal{O} (1)^{\otimes d}$，
它在 $d > 0$ 时为丰沛线丛，因为其整体截面对应于 $d$ 次 $n + 1$ 元多项式，
而 $d$ 越大，这样的多项式就越多，故线丛“越正”。
另一方面，当 $d < 0$ 时，$\mathcal{O} (d)$ 不是丰沛线丛，它甚至没有非零的整体截面。

在[[代数几何–解析几何对应]]下，由 [[Kodaira 嵌入定理]]，
丰沛线丛对应于[[正线丛]]，即[[曲率形式]]是[[正形式]]的[[全纯线丛]]。
有时术语上也不区分二者。

## 定义

### 对射影簇

::: definition [丰沛线丛]
设 $X$ 是[[域]] $k$ 上的[[射影簇]]，$L \to X$ 是[[代数线丛]]。

- 称 $L$ 是**极丰沛线丛**，若存在[[自然数]] $n$ 和[[闭浸入]]
  \[
  i \colon X \hookrightarrow \mathbb{P}_k^n,
  \]
  使得 $L \simeq i^* (\mathcal{O} (1))$，
  其中 $\mathcal{O} (1) \to \mathbb{P}_k^n$
  是[[射影空间 (代数几何)|射影空间]] $\mathbb{P}_k^n$ 的结构给出的线丛。

- 称 $L$ 是**丰沛线丛**，若存在[[自然数]] $r$，使得[[张量积]]
  $L^{\otimes r}$ 是极丰沛线丛。

:::

相应地，称 $X$ 上的 [[Cartier 除子]] $D$ 为**丰沛除子**，
如果其对应的线丛 $\mathcal{O}(D)$ 是丰沛线丛。

### 对一般概形

::: definition [丰沛线丛]
设 $X$ 是[[拟紧概形]]，$L$ 是 $X$ 上的[[代数线丛]]。
称 $L$ 是**丰沛线丛**，若其满足以下性质：

- 对任意点 $x \in X$，
  存在正整数 $n$ 与[[整体截面]]
  $s \in \Gamma(X,L^{\otimes n})$，使得
  \[
  X_s = \{y \in X \mid s(y) \neq 0\}
  \]
  是包含 $x$ 的[[仿射概形|仿射]][[开子概形]]。

:::

上述定义取自 EGA II [@EGAII, 4.5.3]。

对[[域]]上的[[紧合概形]]，
此定义与射影簇情形相容：代数线丛 $L$ 丰沛当且仅当存在正整数 $r$
与[[闭浸入]] $i \colon X \hookrightarrow \mathbb{P}_k^n$，
使得 $L^{\otimes r} \simeq i^* (\mathcal{O} (1))$。

同样，称 $X$ 上的 [[Cartier 除子]] $D$ 为**丰沛除子**，
如果其对应的线丛 $\mathcal{O}(D)$ 是丰沛线丛。

## 例子

### 射影空间上的线丛

对[[射影空间 (代数几何)|射影空间]] $\mathbb{P}^n$，其中 $n > 0$，
及其上的线丛 $\mathcal{O}(d)$：

- 当 $d>0$ 时，$\mathcal{O}(d)$
  是极丰沛线丛。它的整体截面是 $n+1$ 元 $d$ 次[[齐次多项式]]，
  对应的射影嵌入是 $d$ 次 [[Veronese 嵌入]]。

- 当 $d=0$ 时，$\mathcal{O}(d)$ 是平凡线丛，不是丰沛线丛。

- 当 $d<0$ 时，$\mathcal{O}(d)$ 没有非零的整体截面，因此不是丰沛线丛。

### 曲线上的线丛

设 $C$ 是代数闭域上的[[光滑簇|光滑]][[射影曲线]]，
$L$ 是 $C$ 上的线丛。则
\[
L \text{ 丰沛 } \Longleftrightarrow \deg L>0.
\]
这可由 [[Riemann–Roch 定理]]推出：若 $\deg L>0$，
则足够高的张量幂 $L^{\otimes r}$ 有足够多整体截面，
从而给出射影嵌入；若 $\deg L \leq 0$，
则 $L$ 没有非常值的整体截面，故不可能丰沛。

### 射影平面爆破上的线丛

设 $\pi \colon X = \operatorname{Bl}_p \mathbb{P}^2 \to \mathbb{P}^2$
是射影平面在一点 $p$ 处的[[爆破]]，$E \subset X$ 是例外曲线。
线丛
\[
\pi^*\mathcal{O}_{\mathbb{P}^2}(1)
\]
是[[数值有效线丛]]，且是[[大线丛]]（这两个概念的定义见下文推广一节），但不是丰沛线丛。
原因是它在例外曲线上的次数为
$\pi^*\mathcal{O}_{\mathbb{P}^2}(1) \cdot E = 0$，
及下文 @thm:Nakai--Moishezon-判别法 的判别法。
此例说明，即使线丛既数值有效又大，也未必丰沛。

### 丰沛但非极丰沛的例子

设 $C$ 是[[亏格]]至少为 $2$ 的[[超椭圆曲线]]，
$f \colon C \to \mathbb{P}^1$
是[[分歧覆叠|分歧双重覆叠]]。由于 $f$ 是[[有限态射]]，
$f^*\mathcal{O}_{\mathbb{P}^1}(1)$ 是丰沛线丛。
但其完整线性系给出的态射正是 $f$，不是嵌入，
因此它不是极丰沛线丛。

## 性质

### 基本性质

- 丰沛线丛的张量积仍是丰沛线丛。

- 若 $L$ 是丰沛线丛，$M$ 是任意线丛，
  则当 $n \gg 0$ 时，$L^{\otimes n} \otimes M$ 是丰沛线丛。

- 若 $f \colon Y \to X$ 是[[有限态射|有限]][[满射 (代数几何)|满射]]，$L$ 是 $X$ 上的丰沛线丛，
  则 $f^*L$ 是 $Y$ 上的丰沛线丛。
  极丰沛性在有限满射下未必保持，如上文超椭圆曲线的例子所示。

- 丰沛性可在[[忠实平坦态射|忠实平坦]]基变换后检验。
  特别地，若 $K/k$ 是域扩张，则 $X$ 上的线丛 $L$ 丰沛
  当且仅当 $X_K$ 上的线丛 $L_K$ 丰沛。

### 上同调消失

::: theorem [Serre 消失定理]
设 $X$ 是域上的射影概形，$L$ 是 $X$ 上的丰沛线丛。
对任意[[凝聚层]] $\mathcal{F}$，存在整数 $n_0$，
使得对所有 $n \geq n_0$ 与 $i>0$，都有
\[
H^i(X,\mathcal{F}\otimes L^{\otimes n})=0.
\]
:::

反过来，若 $X$ 是域上的紧合概形，$L$ 是代数线丛，
且对任意凝聚层 $\mathcal{F}$ 都满足上述上同调消失性质，
则 $L$ 是丰沛线丛。
这称为 Cartan–Serre–Grothendieck 上同调判别法。

### Nakai–Moishezon 判别法

::: theorem [Nakai–Moishezon 判别法] {@thm:Nakai--Moishezon-判别法}
设 $X$ 是域上的紧合概形，$D$ 是 $X$ 上的 Cartier 除子。
则 $D$ 是丰沛除子，当且仅当对任意正维数[[闭子概形|闭]][[整概形|整]]子概形
$Z \subset X$，都有
\[
D^{\dim Z} \cdot Z > 0.
\]
:::

这是丰沛性的纯数值刻画，对[[代数曲面]]上的除子尤为实用：
此时只需检验除子的自交数以及它与每条曲线的相交数。

### Kleiman 判别法

设 $X$ 是射影簇。记 $N^1(X)_{\mathbb{R}}$ 为 Cartier 除子的数值等价类的
实向量空间，记 $N_1(X)_{\mathbb{R}}$ 为曲线的数值等价类的实向量空间。
后者中有效曲线类张成的凸锥称为**曲线锥**，记为 $\operatorname{NE}(X)$。
而前者中的[[数值有效线丛|数值有效锥]]定义为
\[
\operatorname{Nef}(X)
= \{D \in N^1(X)_{\mathbb{R}} \mid D \cdot C \geq 0,
  \forall C \in \operatorname{NE}(X)\}.
\]
Kleiman 判别法断言，丰沛锥 $\operatorname{Amp}(X)$ 是
$\operatorname{Nef}(X)$ 的[[内部]]。等价地，除子类 $D$ 丰沛当且仅当
$D$ 在曲线锥的闭包 $\overline{\operatorname{NE}}(X)$ 的每个非零元素上严格为正。

### Kodaira 消失定理与嵌入定理

::: theorem [Kodaira 消失定理]
设 $X$ 是特征零域上的[[光滑簇|光滑]][[射影簇]]，
$\omega_X$ 是其[[典范丛]]，$L$ 是丰沛线丛。则对所有 $i>0$，
\[
H^i(X,\omega_X \otimes L)=0.
\]
:::

该定理在特征零代数几何和复几何中非常重要。
它在正特征下并不成立；反例见
[@Raynaud1978]。

[[Kodaira 嵌入定理]]建立了丰沛性与复几何中正性的联系：
若 $X$ 是复紧流形，$L$ 是 $X$ 上的全纯线丛，
且 $L$ 具有 Hermite 度量使其 [[Chern 曲率]]形式为[[正形式]]，
则 $L$ 的某次张量幂给出 $X$ 到复射影空间的嵌入，
从而 $X$ 是射影流形。
反之，对复射影流形上的代数线丛，
其丰沛性等价于解析化后的正性。

## 推广

### 数值有效线丛

设 $X$ 是射影簇，$L$ 是 $X$ 上的线丛。
若对任意曲线 $C \subset X$ 都有
\[
L \cdot C \geq 0,
\]
则称 $L$ 是 **[[数值有效线丛]]**。丰沛线丛一定数值有效，
但反之不然。上文射影平面爆破的例子中，
$\pi^*\mathcal{O}_{\mathbb{P}^2}(1)$ 就是数值有效但不丰沛的线丛。

### 严格数值有效线丛

若对任意曲线 $C \subset X$ 都有
\[
L \cdot C > 0,
\]
则称 $L$ 是 **[[严格数值有效线丛]]**。
丰沛线丛严格数值有效，但严格数值有效不蕴含丰沛；
反例见 [@Hartshorne1970, Chapter I, Example 10.6]。
因此，丰沛性不仅要求线丛与每条曲线的相交数为正，
还要求这种正性对更高维子簇也成立，且线丛具有足够多的整体截面。

### 大线丛

若 $L$ 的 [[Iitaka 维数]]等于 $\dim X$，
或等价地说，存在常数 $C>0$，使得对充分大的 $n$ 有
$h^0(X,L^{\otimes n}) \ge C n^{\dim X}$，
则称 $L$ 是 **[[大线丛]]**。丰沛线丛一定是大线丛，
但大线丛未必丰沛。数值有效且大的线丛也未必丰沛；
射影平面爆破的例子同时说明了这一点。

## 参考文献

基本教材：

```bibliography
EGAII:
  type: article
  author: ['Grothendieck, Alexandre', 'Dieudonné, Jean']
  title: Éléments de géométrie algébrique. II. Étude globale élémentaire de quelques classes de morphismes
  journaltitle: Publications Mathématiques de l'IHÉS
  volume: 8
  year: 1961
  pages: 5–222
Hartshorne1977:
  type: book
  author: 'Hartshorne, Robin'
  title: Algebraic geometry
  series: Graduate Texts in Mathematics
  number: 52
  publisher: Springer
  year: 1977
```

专门讨论丰沛性的教材：

```bibliography
Hartshorne1970:
  type: book
  author: 'Hartshorne, Robin'
  title: Ample subvarieties of algebraic varieties
  series: Lecture Notes in Mathematics
  number: 156
  publisher: Springer
  year: 1970
```

正特征中 Kodaira 消失定理的反例：

```bibliography
Raynaud1978:
  type: incollection
  author: 'Raynaud, Michel'
  title: Contre-exemple au “vanishing theorem” en caractéristique p > 0
  booktitle: C. P. Ramanujam – a tribute
  series: Tata Institute of Fundamental Research Studies in Mathematics
  number: 8
  publisher: Springer
  location: Berlin-New York
  year: 1978
  pages: 273–278
```

```terms
丰沛线丛:
  en: ample line bundle
  fr: fibré en droites ample :m
极丰沛线丛:
  en: very ample line bundle
  fr: fibré en droites très ample :m
```
