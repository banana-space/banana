---
title: 同余类（范畴论）
categories: [高阶范畴论, 层论]
notices:
  - name: 问题
    items:
      - “例子”一节第一项中，$n$-连合态射对应的商意象写作 $n$-截断意象 $\mathcal{T}_{\leq n-1}$，指标似乎不一致。
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  将经典的范畴称为 $1$-范畴。
- [[意象]]都指 [[$(\infty,1)$-意象]]。

:::

**同余类**是意象论中关于[[局部化 (范畴论)|局部化]]的重要概念。
大致来说，同余类是意象中一类“表现良好”的态射类，
它同时具有饱和性（关于复合和余极限封闭）
以及几何性（关于基变换和对角线封闭）。
同余类刻画了意象的左正合 [[Bousfield 局部化]]，
正如[[可表现范畴]]中的小生成饱和类
刻画了可达 Bousfield 局部化一样（参见[[分解系]]）。
可以发现，小生成的同余类恰好是意象之间的代数态射的核。

同余类也可以视为意象中的“理想”：
正如交换环 $R$ 的理想 $I$ 确定了商环 $R/I$，
意象 $\mathcal{T}$ 的同余类 $K$ 确定了商意象 $\mathcal{T}/K$。

## 定义

::: definition [同余类] {@def-congruence}
令 $\mathcal{T}$ 为意象。
称 $\mathcal{T}$ 中的一类态射 $\Sigma$
为**同余类**，
是指 $\Sigma$ 既是[[分解系|强饱和类]]
又关于基变换封闭。
:::

::: remark
回忆[[分解系]]中引入的各种态射类，
同余类与其他态射类之间的关系可以总结如下：
\[
\text{同余类} \subseteq \text{强饱和类}
\subseteq \text{饱和类}
\supseteq \text{模态}
\supseteq \text{同余类}.
\]
换言之，同余类同时是强饱和类和模态。
记这四种态射类的偏序集分别为
$\mathsf{Cong}(\mathcal{T})$、
$\mathsf{SSat}(\mathcal{T})$、
$\mathsf{Sat}(\mathcal{T})$、
$\mathsf{Mdl}(\mathcal{T})$。
:::

## 例子

- 对于任意 $-2 \leq n \leq \infty$，
  $n$-[[连合]]态射的类
  $\mathsf{Conn}_n$ 构成同余类。
  对应的商意象为 $n$-[[截断 (范畴论)|截断]]意象
  $\mathcal{T}_{\leq n-1}$。

- $\infty$-连合态射的类 $\mathsf{Conn}_\infty$
  构成同余类。
  对应的商意象为[[超完备性|超完备化]]
  $\mathcal{T}^{\mathrm{hyp}}$。

- 全体同构所构成的类和全体态射所构成的类
  分别为最小和最大的同余类。

## 性质

### 同余类的等价刻画

以下命题给出了同余类的多种等价刻画，
避免了直接验证三选二性质的困难。

::: proposition {@prop-congruence-char}
令 $\mathcal{T}$ 为意象，
$\Sigma \subseteq \mathrm{Ar}(\mathcal{T})$。
以下条件等价：

1. $\Sigma$ 为同余类。

2. $\Sigma$ 为模态且满足三选二性质。

3. $\Sigma$ 为强饱和类
   且关于 $\mathsf{Ar}(\mathcal{T})$ 中的有限极限封闭。

4. $\Sigma$ 为饱和类
   且关于 $\mathsf{Ar}(\mathcal{T})$ 中的有限极限封闭。

5. $\Sigma$ 为模态且关于对角线封闭：
   若 $f \colon X \to Y$ 属于 $\Sigma$，
   则 $\Delta_f \colon X \to X \times_Y X$
   也属于 $\Sigma$。

:::

::: remark
条件 (5) 最具操作性：
要验证一个模态是同余类，
只需检查它关于对角线封闭，
这无非是[[分解系|（余）对角线论证]]。
:::

### 同余类的生成

给定小集合 $\Sigma$ 的态射，
如何描述其生成的同余类 $\Sigma^c$？
以下定理给出了简洁的回答。

::: definition [迭代对角线] {@def-iterated-diagonal}
给定态射类 $\Sigma$，
记 $\Sigma^\Delta$ 为 $\Sigma$ 关于对角线的闭包：
若 $f \in \Sigma$，
则 $\Delta_f, \Delta_{\Delta_f}, \ldots$
均属于 $\Sigma^\Delta$。
:::

::: theorem [Anel–Biedermann–Finster–Joyal] {@thm-congruence-generation}
令 $\mathcal{T}$ 为意象，
$\Sigma \subseteq \mathrm{Ar}(\mathcal{T})$ 为小集合。
则 $\Sigma$ 生成的同余类 $\Sigma^c$
等于 $\Sigma^\Delta$ 生成的模态：
\[
\Sigma^c = (\Sigma^\Delta)^m.
\]
:::

::: remark
这一结果的直觉是：
由 @prop-congruence-char 的条件 (5)，
同余类 = 模态 + 对角线封闭，
因此要从 $\Sigma$ 生成同余类，
只需先把全体迭代对角线加进来，再取模态即可。
:::

::: corollary {@cor-mono-congruence}
若 $\Sigma$ 由单态射组成，
则 $\Sigma^c = \Sigma^m$。
这是因为单态射的对角线为同构，
故 $\Sigma^\Delta = \Sigma$。
:::

### Décalage 与最大同余类

反过来，给定一个模态，
如何提取其中包含的最大同余类？
这由 décalage 构造给出。

::: definition [décalage] {@def-decalage}
令 $\Sigma$ 为 $\mathcal{T}$ 上的模态。
定义其 **décalage** 为
\[
D(\Sigma) \coloneqq
\{u \in \Sigma \mid \Delta_u \in \Sigma\}.
\]
归纳地定义 $D^0(\Sigma) = \Sigma$，
$D^{n+1}(\Sigma) = D(D^n(\Sigma))$，
令 $D^\infty(\Sigma) = \bigcap_n D^n(\Sigma)$。
:::

::: proposition {@prop-decalage}
若 $\Sigma$ 为小集合生成的模态，
则 $D(\Sigma)$ 仍为小集合生成的模态，
且 $D^\infty(\Sigma)$ 为 $\Sigma$ 中包含的最大同余类。
换言之，$\Sigma \mapsto D^\infty(\Sigma)$
给出含入
$\mathsf{Cong}(\mathcal{T})
  \hookrightarrow \mathsf{Mdl}(\mathcal{T})$
的右伴随。
:::

::: remark
展开定义：
\[
D^\infty(\Sigma)
= \{f \mid \Delta^n f \in \Sigma
\text{ 对全体 } n \geq 0\}.
\]
即 $D^\infty(\Sigma)$ 由那些
“全体迭代对角线均属于 $\Sigma$”的态射所构成。
这正是 @prop-congruence-char 条件 (5)
中“对角线封闭”的逐级逼近。
:::

### 同余类与意象的局部化

以下命题建立了同余类、左正合局部化和代数态射的核之间的对应。

::: proposition {@prop-congruence-topos}
令 $\mathcal{T}$ 为意象，
$K \subseteq \mathrm{Ar}(\mathcal{T})$。
以下条件等价：

1. $K$ 为小生成的同余类。

2. $K$ 为小生成的强饱和类，
   且关于 $\mathsf{Ar}(\mathcal{T})$ 的极限封闭。

3. 局部化函子
   $\mathrm{L} \colon \mathcal{T}
        \to \mathcal{T}[K^{-1}]$
   为左正合的 Bousfield 局部化。

4. $K$ 为某个代数态射
   $\varphi^* \colon \mathcal{T} \to \mathcal{S}$
   的核。

:::

::: remark
对比[[分解系]]中的类似结果：
可表现范畴中，小生成的饱和类对应于可达 Bousfield 局部化；
意象中，小生成的同余类对应于左正合 Bousfield 局部化。
额外的“左正合”条件正是由同余类的基变换封闭性所保证的。
:::

### 商意象

::: definition
令 $\mathcal{T}$ 为意象，
$K$ 为 $\mathcal{T}$ 中的小生成同余类。
$\mathcal{T}$ 关于 $K$ 的**商意象**定义为
\[
\mathcal{T}/K \coloneqq \mathcal{T}[K^{-1}].
\]
典范的代数态射
$\mathcal{T} \to \mathcal{T}/K$ 称为**商态射**。
:::

::: remark
商态射是 $\mathbb{L}\mathsf{ogos}$ 中的满态射
（即 $\mathbb{T}\mathsf{opos}$ 中的单态射）。
这类比于交换环的满射
$R \twoheadrightarrow R/I$
诱导仿射概形的单态射
$\mathrm{Spec}(R/I) \hookrightarrow \mathrm{Spec}(R)$。
:::

## 意象的表现

同余类允许我们将任意意象“表现”为
自由意象的商，类似于交换环可以表现为
多项式环的商。

### 自由意象

::: definition
令 $\mathcal{C}$ 为小范畴。
$\mathcal{C}$ 所生成的**自由意象**定义为
\[
\mathsf{Ani}[\mathcal{C}]
\coloneqq
\mathsf{PSh}(\mathcal{C}^{\mathrm{lex}}),
\]
其中
$\mathcal{C}^{\mathrm{lex}}
  \subseteq
  \mathsf{PSh}(\mathcal{C}^{\mathrm{op}})^{\mathrm{op}}$
为包含 $\mathcal{C}$ 且关于有限极限封闭的最小全子范畴
（即 $\mathcal{C}$ 的有限极限完备化）。
由此得到典范的函子
\[
\mathcal{C} \hookrightarrow
\mathcal{C}^{\mathrm{lex}} \hookrightarrow
\mathsf{PSh}(\mathcal{C}^{\mathrm{lex}})
= \mathsf{Ani}[\mathcal{C}].
\]
:::

::: proposition [自由意象的泛性质]
对于小范畴 $\mathcal{C}$ 和意象 $\mathcal{T}$，
典范函子 $\mathcal{C} \hookrightarrow \mathsf{Ani}[\mathcal{C}]$
诱导范畴等价
\[
\mathsf{Hom}_{\mathbb{L}\mathsf{ogos}}(
  \mathsf{Ani}[\mathcal{C}], \mathcal{T})
\xrightarrow{\;\sim\;}
\mathsf{Fun}(\mathcal{C}, \mathcal{T}).
\]
:::

::: remark
应将此视为
$\operatorname{Hom}_{\mathsf{CAlg}}(\mathbb{Z}[S], R)
  \simeq \operatorname{Hom}_{\mathsf{Set}}(S, R)$
的类比：
$\mathsf{Ani}[\mathcal{C}]$ 之于意象，
正如多项式环 $\mathbb{Z}[S]$ 之于交换环。
:::

::: example
- 令 $\mathcal{C} = \varnothing$，
  则 $\mathsf{Ani}[\varnothing]
        = \mathsf{PSh}(\ast) = \mathsf{Ani}$。
  因此 $\mathsf{Ani}$ 为
  $\mathbb{L}\mathsf{ogos}$ 中的始对象，
  对偶地为 $\mathbb{T}\mathsf{opos}$ 的终对象。
  这类比于 $\mathbb{Z}$ 为 $\mathsf{CAlg}$ 的始对象。

- 令 $\mathcal{C} = \ast$，
  则 $\mathcal{C}^{\mathrm{lex}}
        = \mathsf{Ani}^{\mathrm{fin},\mathrm{op}}$
  （有限生象的反范畴）。
  因此 $\mathsf{Ani}[\ast]
        = \mathsf{PSh}(\mathsf{Ani}^{\mathrm{fin},\mathrm{op}})$
  是“由一个生成元自由生成的意象”，
  类比于多项式环 $\mathbb{Z}[x]$。

:::

### 表现定理

::: proposition [意象的表现]
对于任意意象 $\mathcal{T}$，
总存在小范畴 $\mathcal{C}$
以及一族态射 $\Sigma$ 使得
\[
\mathcal{T}
\simeq \mathsf{Ani}[\mathcal{C}] / \Sigma^c.
\]
:::

::: remark
这完全类比于交换代数中的事实：
每个交换环都同构于某个多项式环的商 $\mathbb{Z}[S]/I$。
在意象论中：

- $\mathsf{Ani}$ 类比于 $\mathbb{Z}$
  （始对象）；

- $\mathsf{Ani}[\mathcal{C}]$ 类比于 $\mathbb{Z}[S]$
  （自由对象）；

- 同余类 $\Sigma^c$ 类比于理想 $I$
  （商的数据）；

- $\mathsf{Ani}[\mathcal{C}]/\Sigma^c$
  类比于 $\mathbb{Z}[S]/I$
  （一般对象）。

:::

## 参考文献

```bibliography
ABFJ:
  type: article
  author: ['Anel, Mathieu', 'Biedermann, Georg', 'Finster, Eric', 'Joyal, André']
  title: Modalities in homotopy type theory
  year: 2022
LurieSAG:
  type: book
  author: 'Lurie, Jacob'
  title: Spectral Algebraic Geometry
  year: 2018
  url: https://www.math.ias.edu/~lurie/papers/SAG-rootfile.pdf
```

```terms
同余类:
  en: congruence
模态:
  en: modality
自由意象:
  en: free topos
```
