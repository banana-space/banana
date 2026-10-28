---
title: Quillen $+$ 构造
categories: [$K$ 理论]
navboxes: [代数 K 理论]
---

<problems>
- “性质”一节需要扩充。
- “与其它构造的等价性”一节中的两个命题没有给出证明。
</problems>

**Quillen $+$ 构造**是[[环]]的[[代数 $K$ 理论]]最早的定义方法，
由 [[Daniel Quillen]] 给出，使用了拓扑空间的 [[$+$ 构造]]。
它是代数 $K$ 理论各种构造中最具体的，这既有好处也有坏处：
一方面，从它可以立即看出[[有限环]]的正数阶 $K$ 群有限，
Quillen 甚至用它算出[[有限域的 $K$ 群]]；另一方面，
想用它证明一般性质就比较困难。

## 定义

::: definition
$R$ 是[[环]]。$R$ 的 **Quillen $+$ 构造**，
也就是它的**代数 $K$ 理论**，指的是空间
$$
K(R)=K_0(R)\times B{\operatorname{GL}(R)}^+,
$$
其中：

- $K_0(R)$ 是[[有限生成模|有限生成]][[投射模|投射]]
  $R$-模范畴的 [[Grothendieck 群]]，即有限生成投射
  $R$-模的同构类关于直和构成的交换幺半群的[[群化]]。

- $B$ 是[[分类空间]]。

- $\operatorname{GL}(R)=
      \operatornamewithlimits{colim}_n
      \operatorname{GL}_n(R)$，其中转移映射
  $\operatorname{GL}_n(R)\to
      \operatorname{GL}_{n+1}(R)$ 为
  $A\mapsto\begin{bmatrix}A&0\\0&1\end{bmatrix}$。

- $-^+$ 是 [[$+$ 构造]]。此处由于[[换位子群]]
  $\operatorname{GL}(R)'=\operatorname{E}(R)=
      \left<1+aE_{ij}\mid i\ne j,\,a\in R\right>$
  为[[完美群]]，这就相当于关于 $\operatorname{E}(R)$
  的 $+$ 构造。

$R$ 的 **$n$ 阶 $K$ 群** $K_n(R)$ 依 Quillen
$+$ 构造定义为 $\pi_nK(R)$。
:::

由[[群化定理]]，这个构造实际上是投射
$R$-模沿同构构成的[[群胚]]关于直和构成的
[[$\mathbb{E}_\infty$-幺半群]]的[[群化]]，从而自然构成
[[$\mathbb{E}_\infty$-群]]。按照这一观点，它可推广如下：

::: definition
$R$ 是[[连合]] [[$\mathbb{E}_1$-环]]。$R$ 的
**Quillen $+$ 构造**指的是 $\mathbb{E}_\infty$-群
$$
K(R)=\operatorname{Obj}(\mathsf{cProj}(R))^\text{gp},
$$
其中 $\mathsf{cProj}(R)$ 指的是紧投射 $R$-模，亦即 $R$
的有限直和的收缩，构成的 [[$\infty$-范畴]]，
$\operatorname{Obj}$ 指其对象构成的 [[$\infty$-群胚]]，
$-^\text{gp}$ 指[[群化]]。同样定义 $K_n(R)=\pi_nK(R)$。
:::

::: remark
如 $R$ 是连合 [[$\mathbb{E}_k$-环]]，$1\le k\le\infty$，
则 $\mathsf{cProj}(R)$ 关于张量积构成
$\mathbb{E}_{k-1}$-幺半范畴，
所以 $K(R)$ 关于张量积构成 $\mathbb{E}_{k-1}$-环。
:::

## 性质

## 与其它构造的等价性

本节证明 Quillen $+$ 构造与 [[Waldhausen $S$ 构造]]等价。
具体地说，我们来证明连合 $\mathbb{E}_1$-环 $R$ 的 Quillen $+$
构造与[[完美复形]]范畴 $\mathsf{Perf}(R)$（即导出范畴
$\mathsf{D}(R)$ 的[[紧对象]]子范畴）的 Waldhausen $S$
构造等价。首先把问题化归到不同范畴的 Waldhausen $S$ 构造等价：

::: proposition
令 $\mathsf{cProj}_\dag(R)$ 为 $\mathsf{cProj}(R)$
中的分裂单射，即形如 $P\to P\oplus Q$ 的映射，构成的子集，
显然这是 $\mathsf{cProj}(R)$ 的
[[Waldhausen $\infty$-范畴]]结构。则该 Waldhausen
$\infty$-范畴的 Waldhausen $S$ 构造 $K(\mathsf{cProj}(R))$
等价于 $R$ 的 Quillen $+$ 构造 $K(R)$。
:::

于是只需证 $K(\mathsf{cProj}(R))=K(\mathsf{Perf}(R))$。
现对整数 $a\le b$ 考虑 Waldhausen $\infty$-范畴
$\mathsf{Perf}_{[a,b]}(R)$，定义如下：

- 作为 $\infty$-范畴，它是 $\mathsf{Perf}(R)$
  的[[满子范畴]]，恰含有投射幅度集中在 $[a,b]$ 的对象，
  即那些 $P\in\mathsf{Perf}(R)$，满足对任一同伦群集中在
  $0$ 的 $R$-模 $M$，[[谱 (拓扑学)|谱]]
  $\operatorname{Hom}_R(P,M)$ 的同伦群都集中在 $[-b,-a]$。

- 称其中映射 $P\to Q$ 为余纤维化，意思是
  $\operatorname{cofib}(P\to Q)\in\mathsf{Perf}_{[a,b]}(R)$，
  其中 $\operatorname{cofib}$ 指的是 $\mathsf{Perf}(R)$
  中的余纤维。

类似定义 $\mathsf{Perf}_{\ge a}(R)$ 和
$\mathsf{Perf}_{\le b}(R)$。则：

- $\mathsf{Perf}(R)=\operatornamewithlimits{colim}
    _{a\to-\infty}\mathsf{Perf}_{\ge a}(R)$。换言之，
  $\mathsf{Perf}(R)$ 是图表
  $$
  \mathsf{Perf}_{\ge0}(R)\xrightarrow{\Sigma}
  \mathsf{Perf}_{\ge0}(R)\xrightarrow{\Sigma}\cdots
  $$
  的余极限，也就是 $\mathsf{Perf}_{\ge0}(R)$ 的
  [[Spanier–Whitehead 构造]]。容易发现
  $\mathsf{Perf}_{\ge0}(R)$ 的每个映射都是余纤维化，
  所以由[[代数 $K$ 理论]]的一般性质，
  $K(\mathsf{Perf}(R))=K(\mathsf{Perf}_{\ge0}(R))$。

- $\mathsf{Perf}_{\ge0}(R)=
    \operatornamewithlimits{colim}_{b\to+\infty}
    \mathsf{Perf}_{[0,b]}(R)$，而
  $\mathsf{Perf}_{[0,0]}(R)=\mathsf{cProj}(R)$。

由于 $K$ 理论与滤余极限交换，只需对任一 $b\in\mathbb{N}$ 证明含入函子
$\mathsf{Perf}_{[0,b]}(R)\to\mathsf{Perf}_{[0,b+1]}(R)$
诱导 $K$ 理论的同构。为此，作 Waldhausen $\infty$-范畴
$\mathcal{C}$ 如下：

- 其对象为余纤维列 $P'\to P\to P''$，其中
  $P'\in\mathsf{Perf}_{[0,b]}(R)$，$P\in\mathsf{cProj}(R)$，
  $P''\in\mathsf{Perf}_{[0,b+1]}(R)$。

- 余纤维化为逐项在各自的范畴中是余纤维化者。

然后考虑函子：

- $p\colon\mathcal{C}\to\mathsf{cProj}(R)$，
  $(P'\to P\to P'')\mapsto P$。

- $p'\colon\mathcal{C}\to\mathsf{Perf}_{[0,b]}(R)$，
  $(P'\to P\to P'')\mapsto P'$。

- $p''\colon\mathcal{C}\to\mathsf{Perf}_{[0,b+1]}(R)$，
  $(P'\to P\to P'')\mapsto P''$。

- $i\colon\mathsf{cProj}(R)\to\mathcal{C}$，
  $P\mapsto(0\to P\to P)$。

- $j\colon\mathsf{cProj}(R)\to\mathcal{C}$，
  $P\mapsto(P\to P\to0)$。

- $i'\colon\mathsf{Perf}_{[0,b]}(R)\to\mathcal{C}$，
  $P'\mapsto(P'\to0\to \Sigma P')$。

则：

- $p\circ i=p\circ j=p'\circ i'=\operatorname{id}$，
  $p\circ i'=p'\circ i=p''\circ j=0$，
  $p''\circ i'=\Sigma$。

- $i\circ p\to\operatorname{id}\to i'\circ p'$
  是 $\mathcal{C}$ 到自身的函子的余纤维列。

所以由[[代数 $K$ 理论]]的一般性质，
$$
(K(p),K(p'))\colon K(\mathcal{C})\to
K(\mathsf{cProj}(R))\oplus K(\mathsf{Perf}_{[0,b]}(R))
$$
和
$$
(K(i),K(i'))\colon K(\mathsf{cProj}(R))\oplus
K(\mathsf{Perf}_{[0,b]}(R))\to K(\mathcal{C})
$$
是互逆同构。而由于 $p\circ j$ 也是 $\operatorname{id}$，
不难发现 $K(i')$ 诱导同构 $K(\mathsf{Perf}_{[0,b]}(R))\to
\operatorname{cofib}(K(j))$，这里 $\operatorname{cofib}$
指的是 $\mathsf{Sp}_{\ge0}$ 中余纤维。现在只要
$$
K(\mathsf{cProj}(R))\xrightarrow{K(j)}K(\mathcal{C})
\xrightarrow{K(p'')}K(\mathsf{Perf}_{[0,b+1]}(R))
$$
是 $\mathsf{Sp}_{\ge0}$ 中的余纤维列，就有
$$
K(\mathsf{Perf}_{[0,b]}(R))\cong
K(\mathsf{Perf}_{[0,b+1]}(R)),
$$
由 $\Sigma$ 诱导。而含入函子、$0$、$\Sigma$ 组成
$K(\mathsf{Perf}_{[0,b]}(R))$ 到
$K(\mathsf{Perf}_{[0,b+1]}(R))$ 的函子的余纤维列，
所以 $\Sigma$ 所诱导的映射与含入函子所诱导的仅仅差个符号，
这样就完成了证明。于是我们最后就化归到：

::: proposition
$K(\mathsf{cProj}(R))\xrightarrow{K(j)}K(\mathcal{C})
  \xrightarrow{K(p'')}K(\mathsf{Perf}_{[0,b+1]}(R))$
是余纤维列，其中 $j\colon\mathsf{cProj}(R)\to\mathcal{C}$
指 $P\mapsto(P\to P\to0)$，$p''\colon\mathcal{C}\to
  \mathsf{Perf}_{[0,b+1]}(R)$ 指
$(P'\to P\to P'')\mapsto P''$。
:::

（最后应当化归到 [@B, 9.24 和 10.17]。）

## 参考文献

```bibliography
B:
  type: article
  label: Barwick
  author: C. Barwick
  year: 2016
  title: On the Algebraic $K$-Theory of Higher Categories
  journaltitle: Journal of Topology
  volume: 9
  pages: '245–347'
```

```terms
Quillen $+$ 构造:
  en: Quillen $+$-construction
```
