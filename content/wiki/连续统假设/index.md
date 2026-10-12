---
title: 连续统假设
aliases: [Hilbert 第一问题]
categories: [集合论]
---

**连续统假设**，常简写为 **CH**，
是[[集合论]]中的著名问题，是 [[Hilbert 的 23 个问题]]之首。
它是无穷[[基数]]运算最基本的问题，问是否有
$2^{\aleph_0}=\aleph_1$。其名称来源于
$2^{\aleph_0}=\aleph_1$ 的如下等价陈述：

- 不存在基数严格介于[[自然数]]和[[实数]]之间的集合；

而实数又被称为连续统。

连续统假设已被 [[Kurt Gödel]] 和 [[Paul Cohen]] 解决，
他们分别证明了它和它的否定与 [[ZFC]] 的相对相容性。
换言之，如果 ZFC 相容，则连续统假设既不能在 ZFC 中证明，
也不能在其中证否。

## 历史

早在有严格的[[集合论]]如 [[ZF 集合论]]之前，[[Georg Cantor]]
就于 1878 年猜想连续统假设成立，但他探索多年无功而返。Hilbert
于 1900 年数学家大会上将其列为其 [[Hilbert 问题|23 个问题]]之首。
到 20 年代，Zermelo、Fraenkel、von Neumann 等人陆续提出了
[[ZF 集合论]]的各个公理。[[Kurt Gödel]] 于 1940
年用其[[可构造宇宙]]证明了如果 ZFC 相容，连续统假设也与之相容。
最后，[[Paul Cohen]] 于 1963 年用其[[力迫法]]证明了如果
ZFC 相容，连续统假设之否定也与之相容。

## 相容性

::: theorem
$$
\text{ZFC}+\textbf{V=L}\vdash\text{CH}.
$$
从而连续统假设与 [[ZFC]] 相容。
:::

::: proof
由于连[[强连续统假设]]都与 ZFC 相容，且证明并不更难，
故见该条目。
:::

## 否定的相容性

事实上有更强的定理，证明并不更难：

::: theorem
对序数 $\alpha,\beta$，只要 $\aleph_\alpha<
  \operatorname{cf}(\aleph_\beta)$，就有
$$
\operatorname{Con}(\text{ZFC})\implies
\operatorname{Con}(\text{ZFC}+2^{\aleph_\alpha}=\aleph_\beta).
$$
:::

::: proof
这里的证明是从 [[von Neumann 宇宙]]出发构造
[[Boole 值 von Neumann 宇宙]]，使之满足 $2^{\aleph_\alpha}=\aleph_\beta$。
由于[[强连续统假设]]与 ZFC 相对相容，
可设原来的宇宙中强连续统假设成立。

考虑 [[Boole 代数]] $B=\operatorname{RO}(2^{\aleph_\alpha\times\aleph_\beta})$，
即 $2^{\aleph_\alpha\times\aleph_\beta}$ 在[[积拓扑]]下的[[正则开集]]
Boole 代数。它是完备 Boole 代数，且由 $2^{\aleph_\alpha\times\aleph_\beta}$
的[[乘积测度]]是有限 Borel 测度，满足开集测度都为正，
易知 $B$ 满足[[可数反链条件]]。作 Boole 值 von Neumann 宇宙
$V^{(B)}$，并对普通集合 $a$ 以 $\hat{a}$ 记其自然给出的
Boole 值集合。则由于可数反链条件保证基数不变，有
$\aleph_{\hat{\alpha}}=\widehat{\aleph_\alpha}$，
$\aleph_{\hat{\beta}}=\widehat{\aleph_\beta}$。
以下我们来证明 $|\mathcal{P}(\widehat{\aleph_\alpha})|
  =\widehat{\aleph_\beta}$，从而得到定理。

先给出右边到左边的单射，即在 $\mathcal{P}(\widehat{\aleph_\alpha})$
中举出 $\aleph_\beta$ 个相异元素。由 Boole 值 von Neumann
宇宙的定义，$\aleph_\alpha$ 到 $B$ 的函数对应
$\widehat{\aleph_\alpha}$ 的子集。于是对 $u\in\aleph_\beta$，
考虑函数 $f_u\colon\aleph_\alpha\to B$，定义为
$f_u(x)=\{\varphi\in2^{\aleph_\alpha\times\aleph_\beta}
  \mid\varphi(x,u)=1\}$。对 $u,v\in\aleph_\beta$，计算真值
$$
[f_u=f_v]=\bigwedge_{x\in\aleph_\alpha}[f_u(x)=f_v(x)]
=\bigwedge_{x\in\aleph_\alpha}\{\varphi\in2^{\aleph_\alpha\times\aleph_\beta}
\mid\varphi(x,u)=\varphi(x,v)\};
$$
对 $u\ne v$，上式右边是 $2^{\aleph_\alpha\times\aleph_\beta}$
中无穷多个相互独立、测度为 $1/2$ 的集合之交，不能包含开集，
故在 $B$ 中为 $0$。于是这些 $\{f_u\}_{u\in\aleph_\beta}$
互异，从而 $|\mathcal{P}(\widehat{\aleph_\alpha})|
  \ge\widehat{\aleph_\beta}$。

再证明 $|\mathcal{P}(\widehat{\aleph_\alpha})|
  \le\widehat{\aleph_\beta}$。为此，首先注意
$2^{\aleph_\alpha\times\aleph_\beta}$ 的开闭集只有
$\aleph_\beta$ 个，且它们构成[[拓扑基]]；其次由 $B$
满足可数反链条件易知 $B$ 中元素都是可数个开闭集之并，
所以 $|B|\le\aleph_\beta^{\aleph_0}$。然后由
$\widehat{\aleph_\alpha}$ 的子集对应 $\aleph_\alpha$
到 $B$ 的函数知 $|\mathcal{P}(\widehat{\aleph_\alpha})|
  \le\widehat{|B^{\aleph_\alpha}|}=
  \widehat{\aleph_\beta^{\aleph_\alpha}}$。
最后，回忆一开始假设了原来的宇宙中强连续统假设成立，
故由[[基数]]运算法则和条件知
$\aleph_\beta^{\aleph_\alpha}=\aleph_\beta$，
即 $|\mathcal{P}(\widehat{\aleph_\alpha})|
  \le\widehat{\aleph_\beta}$。
:::

::: remark
该定理无非是说，单个无穷基数的幂集可能为哪些基数，
唯一的限制是 [[Kőnig 不等式]]。特别地，
$2^{\aleph_0}=\aleph_2$ 与 ZFC 相对相容，从而 ZFC
如相容就不能证明连续统假设。
:::

::: remark
以上定理只涉及单个基数等式的相对相容性。
事实上甚至可以同时指定所有[[正则基数]]幂集的基数而仍然相对相容，
只要满足单调性和 Kőnig 不等式。这就是 [[Easton 定理]]。
:::

## 推论

- [[Martin 公理]]

```terms
连续统假设:
  en: continuum hypothesis
  de: Kontinuumshypothese
  fr: hypothèse de continu
  grc: ὑπόθεσις συνέχους
  la: hypothesis de continuo
```
