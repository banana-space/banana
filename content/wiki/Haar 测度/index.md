---
title: Haar 测度
categories: [测度论]
notices:
  - name: 问题
    items:
      - “证明”一节中 $h_{U}$ 的定义域似乎应为 $\mathscr{C}$ 而不是 $\mathscr{U}$，等式左边似乎应为 $h_{U}(K)$。
      - “证明”一节中 $\mu^{*}(U)$ 的定义里，上确界中的 $h_{\bullet}$ 似乎应为 $h_{\bullet}(K)$。
      - “证明”一节第二个引理中 (g) 的证明似乎不完整：$V$ 未加定义，$U_{1},U_{2}$ 似乎应取为不交的开集，且 $S^{-1}(V)$ 与 $S(V^{-1})$ 的写法不一致。
      - “证明”一节中正则性的论证似乎不完整，其中 $K$ 与 $L$ 的使用较混乱。
navboxes: [测度论]
---

**Haar 测度**是在[[局部紧]][[拓扑群]]上定义的[[测度]]，
满足左或右平移的不变性，可以证明它存在且在相差常数倍意义下唯一。
例如 [[Lebesgue 测度]]就是 $\mathbb{R}^n$ 上的 Haar 测度。

Haar 测度可以认为是在局部紧拓扑群上自然的测度，
由此可以定义这些群上的积分理论，这也是[[抽象调和分析]]的基础。

## 定义

::: definition [Haar 测度]
给定[[局部紧]][[拓扑群]] $G$，设 $\mu$ 是 $G$ 上的
非零正则 Borel [[测度]]。
若 $\mu$ 在左平移下保持不变，即对任意的 $x\in G$ 和 $A\in\mathscr
{B}\bigl(G\bigr)$，$\mu(xA)=\mu(A)$，则称 $\mu$ 是**左 Haar 测度**。
类似地，
若 $\mu$ 在右平移下不变，则称 $\mu$ 是**右 Haar 测度**。
:::

下一节的定理表明，左 Haar 测度存在且在相差常数倍意义下唯一，
右 Haar 测度也如此。不过左 Haar 测度和右 Haar 测度未必相差常数倍。

::: example
- (a) $\mathbb{R}^{n}$ 上的 Lebesgue 测度是左 Haar 测度，
  同时也是右 Haar 测度。

- (b) 为群 $G$ 装备[[离散拓扑]]（全体子集均为开集），此时[[计数测度]]
  同样也既是左 Haar 测度又是右 Haar 测度。

- (c) 令 $\mathbb{T}$ 为全体模长为 $1$ 的复数，装备它作为
  $\mathbb{C}$ 的子空间所继承的拓扑，以乘法为群运算，那么
  $\mathbb{T}$ 是一个紧致拓扑群；考虑
  $\mathscr{B}\bigl([0,2\pi)\bigr)$ 上的 Lebesgue 测度
  $\lambda$，定义函数 $f\colon[0,2\pi)\to\mathbb{T},
  f(\theta)=\mathrm{e}^{\mathrm{i}\theta}$，此时
  $\lambda\circ f^{-1}$ 是 $\mathbb{T}$ 上的左 Haar 测度，
  也是右 Haar 测度。

:::

## 定理叙述与证明

::: theorem
任给一个局部紧致群 $G$，必定存在一个 $G$ 上的左 Haar 测度。
:::

### 证明

::: definition [记号引入]
对任意的局部紧致群，取 $G$ 中一个[[紧致子集]] $K$，再取一个[[内部]]非空
的子集 $V$。此时 $\{x\mathring{V}\}_{x\in G}$ 构成 $K$ 的一个[[开覆盖]]，
由[[紧致性]]知存在有限个 $x_{1},x_{2},\cdots,x_{n}\in G$ 使得
$K\subseteq\bigcup_{i=1}^{n}x_{i}V$。我们用 $\#(K:V)$
表示满足上条件的最小的 $n$（全体有限覆盖的[[基数]]的最小者）；
显然 $\#(K\colon V)=0$ 当且仅当 $K=\varnothing$。

同时用 $\mathscr{C}$ 表示 $G$ 中全体紧集所成集，
从中取出一个内部非空的紧集 $K_{0}$；用 $\mathscr{U}$
表示 $e$ 的全体[[邻域]]所成集，对任意的 $U\in\mathscr{U}$，
定义函数
\[
h_{U}\colon\mathscr{U}\to\mathbb{R},
h(K)=\frac{\#(K\colon U)}{\#(K_{0}\colon U)}
\]
:::

::: lemma
对任意的 $U\in\mathscr{U}$，
$K,K_{1},K_{2}\in\mathscr{C}$ 和 $x\in G$，我们有

- (a) $0\le h_{U}(K)\le\#(K:K_{0})$

- (b) $h_{U}(K_{0})=1$

- (c) $h_{U}(xK)=h_{U}(K)$

- (d) 若 $K_{1}\subseteq K_{2}$，
  则$h_{U}(K_{1})\le h_{U}(K_{2})$

- (e) $h_{U}(K_{1}\cup K_{2})\le h_{U}
  (K_{1})+h_{U}(K_{2})$

- (f) 若 $K_{1}U^{-1}\cap K_{2}U^{-1}=\varnothing$，则
  $h_{U}(K_{1}\cup K_{2})=h_{U}(K_{1})+h_{U}(K_{2})$

:::

::: proof
立即注意到不等式
\[
\#(K\colon U)\le\#(K\colon K_{0})\#(K_{0}\colon U)
\]
只需考虑 $K\subseteq\bigcup_{i=1}^{m}x_{i}K_{0}$ 和
$K_{0}\subseteq\bigcup_{j=1}^{n}y_{j}U$ 蕴含
$K\subseteq \bigcup_{i=1}^{m}\bigcup_{j=1}^{n}
x_{i}y_{j}U$ 即可；两边同时除以 $\#(K_{0}:U)$ 即得 (a)；

(b)(c)(d)(e) 是显然的；下面证明当
$K_{1}U^{-1}\cap K_{2}U^{-1}=\varnothing$
时，有
\[
\#(K_{1}\cup K_{2}\colon U)\ge\#(K_{1}\colon U)
+\#(K_{2}\colon U)
\]
令 $n=\#(K_{1}\cup K_{2}\colon U)$，并设
$K_{1}\cup K_{2}\subseteq\bigcup_{i=1}^{n}x_{i}U$，
则知每个 $x_{i}U$ 至多与 $K_{1},K_{2}$ 中一个相交（若
$x_{i}U$ 同时与 $K_{1},K_{2}$ 相交，那么 $x_{i}$ 同时属于
$K_{1}U^{-1}$ 和 $K_{2}U^{-1}$，矛盾），这意味着我们可以
分出两列 $\{y_{i}\}_{i=1}^{j},\{z_{i}\}_{i=1}^{k},j+k=n$，
使得 $K_{1}\subseteq\bigcup_{i=1}^{j}y_{i}U$，
$K_{2}\subseteq\bigcup_{i=1}^{k}z_{i}U$；这就证明了我们
想要的，于是 (f) 得证。
:::

对每个 $K\in\mathscr{C}$，我们记 $I_{K}$ 为有界闭区间
$[0,\#(K:K_{0})]$，令 $X=\prod_{K\in\mathscr{C}}I_{K}$，
装备[[积拓扑]]。由 [[Tikhonov 定理]]我们知道积空间 $X$ 是紧致的；
由引理 (a) 我们知道 $h_{U}$ 必定在积空间中；对 $e$ 的每个邻域 $V$
取集合 $\{h_{U}\colon U\in\mathscr{U},U\subseteq V\}$，并记 $S(V)$
为这个集合在积空间 $X$ 中的闭包。若 $V_{1},V_{2},\cdots,V_{n}\in
\mathscr{U}$，且 $V=\bigcap_{i=1}^{n}V_{i}$，那么 $h_{V}\in
\bigcap_{i=1}^{n}S(V_{i})$，这意味着闭集所成族
$\{S(V)\}_{V\in\mathscr{U}}$，满足[[有限交性质]]（有限个元素交集非空）。
根据积空间 $X$ 的紧致性，我们知道
$\bigcap_{V\in\mathscr{U}}S(V)$ 非空，取出一个元素
$h_{\bullet}\in\bigcap_{V\in\mathscr{U}}S(V)$，这就是我们所需要的。

::: lemma
对任意的 $x\in G$，$K,K_{1},K_{2}\in\mathscr{C}$，函数
$h_{\bullet}$ 满足

- (a) $0\le h_{\bullet}(K)$

- (b) $h_{\bullet}(\varnothing)=0$

- (c) $h_{\bullet}(K_{0})=1$

- (d) $h_{\bullet}(xK)=h_{\bullet}(K)$

- (e) 若 $K_{1}\subseteq K_{2}$，则
  $h_{\bullet}(K_{1})\le h_{\bullet}(K_{2})$

- (f) $h_{\bullet}(K_{1}\cup K_{2})\le h_{\bullet}
  (K_{1})+h_{\bullet}(K_{2})$

- (g) 若 $K_{1}\cap K_{2}=\varnothing$，那么
  $h_{\bullet}(K_{1}\cup K_{2})= h_{\bullet}
  (K_{1})+h_{\bullet}(K_{2})$

:::

::: proof
回想积空间 $X$ 是一族 $\mathscr{C}$ 上特定的函数，装备
的拓扑使得对 $G$ 的每个紧致子集（因为指标集就是 $\mathscr{C}$）
投影函数 $h\mapsto h(K)$ 连续，从而函数
\[
h\mapsto h(K_{1})+h(K_{2})-h(K_{1}\cup K_{2})
\]
是连续的，根据引理 (e) 我们知道上述映射在每点 $h_{U}$ 是
非负的，从而在每个闭集 $S(V)$ 上是非负的；特别地，在点
$h_{\bullet}$ 处非负，于是我们证明了 (f)。

(a) 是显然的，(b)(c)(d)(e) 可仿照上述过程进行证明，现在
让我们来看 (g)。假设 $K_{1},K_{2}$ 是 $G$ 的两个紧致子集，
那么有开集 $U_{1},U_{2}$ 使得 $K_{1}\subseteq U_{1}
,K_{2}\subseteq U_{2}$，同时有 $e$ 的邻域 $V_{1},V_{2}$
使得 $K_{1}V_{1}\subseteq U_{1},K_{2}V_{2}\subseteq U_{2}$。
于是 $K_{1}V_{1}$ 和 $K_{2}V_{2}$ 不交，从而对于满足
$U\subseteq V^{-1}$ 的 $U$ 我们有
\[
h_{U}(K_{1}\cup K_{2})=h_{U}(K_{1})+h_{U}(K_{2})
\]
从而我们上面定义的映射在 $S^{-1}(V)$ 上恒为 $0$，由于
$h_{\bullet}\in S(V^{-1})$，我们便知道 (g) 确实为真。
:::

现在我们终于可以来证明这个定理了：

::: proof
现在在 $G$ 的拓扑上定义函数
\[
\mu^{*}(U)=\sup\big\{h_{\bullet}\colon K\subseteq U,K\in\mathscr{C}\big\}
\]
扩张到幂集 $2^{G}$：
\[
\mu^{*}(A)=\inf\bigl\{\mu^{*}(U)\colon A\subseteq U,U\text{ is open}\bigr\}
\]
显然 $\mu^{*}$ 非负、单调，且在 $\varnothing$ 处取值为 $0$。

接下来验证 $\mu^{*}$ 是可数次加性的，根据定义，
我们只需验证对任一列开集 $\{U_{i}\}$，有
\[
\mu^{*}\biggl(\bigcup_{i}U_{i}\biggr)\le\sum_{i}\mu^{*}(U_{i})
\]
对开集列 $\{U_{i}\}$，取一紧集 $K\subseteq\bigcup_{i}U_{i}$，
必存在自然数 $n$ 使得 $K\subseteq\bigcup_{i=1}^{n}U_{i}$，
进一步的，有紧集 $K_{1}\subseteq U_{1},\cdots,K_{n}\subseteq U_{n}$，
且 $K=\bigcup_{i=1}^{n}K_{i}$，这意味着
\[
h_{\bullet}(K)\le\sum_{i=1}^{n}h_{\bullet}(K_{i})
\le\sum_{i=1}^{n}\mu^{*}(U_{i})\le\sum_{i=1}^{\infty}\mu^{*}(U_{i})
\]
于是我们证明了次可数加性。

最后一项工作就是来验证 $G$ 中每个 Borel 集都是 $\mu^{*}$-可测的，
这一点可由不等式
\[
\mu^{*}(V)\ge\mu^{*}(V\cap U)+\mu^{*}(V\cap U^{c})
\]
得到，其中 $U,V$ 都是 $G$ 的开集（熟悉如何证明外测度的全体可测子集
成一 $\sigma$-代数的读者可以看出这一步应当和外测度的单调性一起看）。

那么我们来验证上述不等式确实成立：对任意的 $\varepsilon>0$，取
紧集 $K\subseteq U\cap V$ 使得
\[
h_{\bullet}(K)>\mu^{*}(V\cap U)-\varepsilon
\]
再取紧集 $L\subseteq V\cap K^{c}$ 使得
$h_{\bullet}(L)>\mu^{*}(V\cap K^{c})-\varepsilon$，$K,L$
是不相交的，注意到 $V\cap U^{c}\subseteq V\cap K^{c}$，
我们有
\[
h_{\bullet}(L)>\mu^{*}(V\cap U^{c})-\varepsilon
\]
由引理立得
\[
h_{\bullet}(K\cup L)=h_{\bullet}(K)+h_{\bullet}(L)
\ge\mu^{*}(V\cap U)+\mu^{*}(V\cap U^{c})-2\varepsilon
\]
这样我们就证明了每个 Borel 集都是 $\mu^{*}$-可测的，从而
$\mu=\mu^{*}\restriction_{\mathscr{B}\bigl(G\bigr)}$
是一个 Borel 测度。

下面来证明 $\mu$ 是正则的，注意到若紧集 $K\subseteq U$，$U$ 是
开集，那么 $h_{\bullet}(K)\le \mu(U)$，根据定义有
$h_{\bullet}(K)\le\mu(K)$。进一步地，若 $U$ 的闭包是紧致的，
那么对 $U$ 的每个紧致子集，有 $h_{\bullet}(L)\le h_{\bullet}
(\overline{U})$，于是
$\mu(K)\le\mu(U)\le h_{\bullet}(\overline{U})$。
这样，我们证明了 $\mu$ 的内正则性和外正则性。同时不难验证 $\mu$
非零测度且左平移不变，这就完成本定理的证明。
:::

```terms
左 Haar 测度:
  en: left Haar measure
左平移不变:
  en: left translation invariant
```
