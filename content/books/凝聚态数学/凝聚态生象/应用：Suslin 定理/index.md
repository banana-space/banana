---
title: 应用：Suslin 定理
---

Suslin 定理指的是

::: theorem {@Suslin}
复数的代数 $K$ 理论 $K(\mathbb{C})$ 到复向量丛的 $K$ 理论 $\mathrm{ku}$
有自然映射，对所有正整数 $n$ 诱导同构 $K(\mathbb{C})/n\cong\mathrm{ku}/n$。
:::

本节假设以下 Suslin 刚性定理，证明 Suslin 定理。这个定理的证明参见
[@Ga92]。

::: theorem {@刚性}
对 Hensel 对 $(A,I)$，正整数 $n\in A^\times$，有
$K(A,I)/n=0$，即自然映射 $K(A)\to K(A/I)$ 模 $n$ 之后为同构。
:::

先解释定理中的概念。

::: definition
环 $R$ 的**代数 $K$ 理论**指 $\mathbb{E}_\infty$-幺半群生象
$(\mathsf{cProj}(R),\oplus)$ 的群化，其中 $\mathsf{cProj}(R)$
即有限生成投射 $R$ 模的群胚，视为生象。一般记作
$K(R)\in\mathsf{Grp}_{\mathbb{E}_\infty}(\mathsf{Ani})=\mathsf{Sp}_{\ge0}$。
:::

::: definition
**复向量丛的拓扑 $K$ 理论**指 $\mathbb{E}_\infty$-幺半群生象
$(\mathsf{Vect}_\mathbb{C},\oplus)$ 的群化，其中
$\mathsf{Vect}_\mathbb{C}$ 指有限维复向量空间组成的拓扑群胚。即考虑对象为自然数集
$\mathbb{N}$，不同对象之间没有映射，对象 $n$ 的自同态幺半群为 $\mathrm{GL}_n(\mathbb{C})$
的拓扑范畴，将其视为无穷群胚。$\oplus$ 为线性空间直和，
即 $\mathrm{GL}_n(\mathbb{C})\times\mathrm{GL}_m(\mathbb{C})$ 对角嵌入
$\mathrm{GL}_{n+m}(\mathbb{C})$。
由于 $\mathrm{GL}_n(\mathbb{C})\simeq\mathrm{U}(n)$，它也是有限维复内积空间群胚关于正交直和的群化。
一般记作 $\mathrm{ku}\in\mathsf{Grp}_{\mathbb{E}_\infty}(\mathsf{Ani})=\mathsf{Sp}_{\ge0}$。
:::

熟悉经典定义的读者可验证这与经典定义一致，即
$\pi_0{\operatorname{Hom}}(X,\mathrm{ku})=(\mathsf{Bun}_\mathbb{C}(X),\oplus)^\mathrm{gp}$。由于以下
Bott 周期律，$\mathrm{ku}$ 的结构比较简单：

::: theorem
$$
\mathrm{ku}=\tau_{\ge0}\Omega^2\mathrm{ku};\;\forall n\in\mathbb{N},\,
\pi_{2n}\mathrm{ku}=\mathbb{Z},\,\pi_{2n+1}\mathrm{ku}=0.
$$
:::

故 Suslin 定理相当于联系了复杂的 $K(\mathbb{C})$ 和简单的 $\mathrm{ku}$。
为证明此定理，我们要将代数 $K$ 理论定义到凝聚态环上。

::: definition
对 $R\in\mathsf{CondRing}$，定义
$$
K(R)=(\mathsf{ExDisc}\ni S\mapsto K(R(S)))\in\mathsf{CondSp}_{\ge0}.
$$
由于
$K(R(\emptyset))=K(0)=0$，$K(R(S\sqcup T))=K(R(S)\times R(T))
  =K(R(S))\oplus K(R(T))$，这确实是个凝聚态谱。如记
$$
\mathsf{cProj}(R)=(\mathsf{ExDisc}\ni S\mapsto
\mathsf{cProj}(R(S)))\in\mathsf{Mon}_{\mathbb{E}_\infty}(\mathsf{CondAni}),
$$
则 $K(R)=\mathsf{cProj}(R)^\mathrm{gp}$ 为其群化。
:::

以下 $\mathbb{C}$ 不再表示复数域，而将其视为凝聚态环。$K(\mathbb{C})$
表示其 $K$ 理论，为凝聚态谱。显然 $K(\mathbb{C})(*)$ 就是复数的代数 $K$
理论。以下定理联系 $K(\mathbb{C})$ 和 $\mathrm{ku}$，
表明后者是前者的“非 Archimedes”部分。

::: theorem
$\mathsf{cProj}(\mathbb{C})=\bigsqcup_{n=0}^\infty B\mathrm{GL}_n(\mathbb{C})$，
其中右边指 $\mathrm{GL}_n(\mathbb{C})$ 作为凝聚态群的分类空间。所以自然映射
$\mathrm{GL}_n(\mathbb{C})\to\mathrm{h}(\mathrm{GL}_n(\mathbb{C}))$ 给出
$\mathsf{cProj}(\mathbb{C})\to\bigsqcup_{n=0}^\infty
  B(\mathrm{h}(\mathrm{GL}_n(\mathbb{C})))=\mathsf{Vect}_\mathbb{C}$，群化之后给出映射
$K(\mathbb{C})\to\mathrm{ku}$。该映射固态化之后为同构，即
$K(\mathbb{C})^\blacksquare=\mathrm{ku}$。
:::

证明之前先回忆杠构造。

::: -remark [回忆]
对幺半群 $G$，其**杠构造**为单纯集 $B_\bullet G$，
定义为 $B_nG=G^n$，
$$
d_i(g_1,\ldots,g_n)=
\begin{cases}
  (g_2,\ldots,g_n),&i=0,\\
  (g_1,\ldots,g_ig_{i+1},\ldots,g_n),&0<i<n,\\
  (g_1,\ldots,g_{n-1}),&i=n,
\end{cases}
$$
$s_i(g_1,\ldots,g_n)=(g_1,\ldots,1,\ldots,g_n)$，
即在第 $i+1$ 个位置插一个 $1$。以 $BG$ 记其几何实现，即余极限。
对 $\mathbb{E}_k$-幺半群 $G$，$1\le k\le\infty$，其群化由 $\Omega BG$
给出，参见 [@HA, 5.2.6.10]。
:::

::: proof
对极不连通空间 $S$，$\mathsf{cProj}(\mathbb{C})(S)$ 是
$S$ 上复值连续函数环 $\mathbb{C}(S)$ 的有限生成投射模的群胚。
投射模的秩局部常，而秩 $n$ 处相当于凝聚态群 $\mathrm{GL}_n(\mathbb{C})$
的主丛，由 @分类空间的具体描述 即知
$\mathsf{cProj}(\mathbb{C})=\bigsqcup_{n=0}^\infty B\mathrm{GL}_n(\mathbb{C})$。
由 @伦型，
$\mathbb{S}[\mathrm{GL}_n(\mathbb{C})]^\blacksquare=\mathbb{S}[\mathrm{h}(\mathrm{GL}_n(\mathbb{C}))]$，
故由以上 $BG$ 的具体构造以及 $\mathbb{S}[-]^\blacksquare$ 与余极限交换有
$$
\mathbb{S}[B\mathrm{GL}_n(\mathbb{C})]^\blacksquare=\mathbb{S}[B(\mathrm{h}(\mathrm{GL}_n(\mathbb{C})))];
$$
再用以下引理即得结论。
:::

::: lemma
如 $\mathsf{Mon}_{\mathbb{E}_\infty}(\mathsf{CondAni})$ 中映射
$X\to Y$ 诱导同构 $\mathbb{S}[X]^\blacksquare\cong\mathbb{S}[Y]^\blacksquare$，
则其诱导同构 $(X^\mathrm{gp})^\blacksquare\cong(Y^\mathrm{gp})^\blacksquare$。
:::

::: proof
由以上 $BX$ 的具体形式知 $\mathbb{S}[BX]^\blacksquare\cong\mathbb{S}[BY]^\blacksquare$。
而 $X^\mathrm{gp}=\Omega BX$，故这相当于
$\mathbb{S}[\Omega^\infty(X^\mathrm{gp}[1])]^\blacksquare\cong
  \mathbb{S}[\Omega^\infty(Y^\mathrm{gp}[1])]^\blacksquare$。
于是只需证：如 $\mathsf{CondSp}_{\ge0}$ 中映射 $M\to N$ 诱导同构
$\mathbb{S}[\Omega^\infty M]^\blacksquare\cong\mathbb{S}[\Omega^\infty N]^\blacksquare$，
则其诱导同构 $M^\blacksquare\cong N^\blacksquare$。

由[叠计划 08N8](https://stacks.math.columbia.edu/tag/08N8)，
伴随对 $(\mathbb{S}[-],\Omega^\infty)$ 给出自然的增广单纯对象
$M_\bullet\to M$，其中
$M_n=(\Sigma_+^\infty\Omega^\infty)^{n+1}M$。
注意 $\Omega^\infty(M_\bullet)\to\Omega^\infty M$ 分裂，
故自然映射 $\operatornamewithlimits{colim}_{\Delta^\mathrm{op}} M_\bullet\to M$ 在
$\Omega^\infty$ 之后为同构，所以其本来就是同构，即
$M=\operatornamewithlimits{colim}_{\Delta^\mathrm{op}}M_\bullet$。而条件
$\mathbb{S}[\Omega^\infty M]^\blacksquare\cong\mathbb{S}[\Omega^\infty N]^\blacksquare$
推出单纯对象 $M_\bullet$ 与 $N_\bullet$ 各项在固态化之后同构，
故其余极限 $M$ 与 $N$ 固态化之后也同构。
:::

只剩证明 $K(\mathbb{C})/n=K(\mathbb{C})^\blacksquare/n$。由于商 $n$ 和固态化交换，
相当于证明 $K(\mathbb{C})/n$ 固态。我们证明更强的

::: proposition
$K(\mathbb{C})/n$ 离散。
:::

::: proof
由 @离散刻画，只需证对任意 $S\in\mathsf{ExDisc}$，$s\in S$，
$$
\operatornamewithlimits{colim}_{V\ni s\,为紧邻域}(K(\mathbb{C})/n)(V)=(K(\mathbb{C})/n)(\{s\}).
$$
由 $\mathsf{cProj}(-)$ 与滤余极限交换得 $K(-)$ 与滤余极限交换，
所以上式左边即 $K(\mathbb{C}(S,s))$，其中 $\mathbb{C}(S,s)$ 表示连续函数芽环。
这是局部环，极大理想为 $\mathfrak{m}_s=\{a\in\mathbb{C}(S,s)\mid a(s)=0\}$，
剩余域为复数。用 @刚性，只需验证这是 Hensel 局部环，
即证任意形如
$$
f(x)=x^n(x-1)+a_nx^n+\cdots+a_0,\,a_0(s)=\cdots=a_n(s)=0
$$
的多项式都在 $1+\mathfrak{m}_s$ 上有根。注意 $f(x)$ 的根即映射
$x\mapsto1-a_n-a_{n-1}x^{-1}-\cdots-a_0x^{-n}$
的不动点，而
$$
(1-a_n-a_{n-1}x^{-1}-\cdots-a_0x^{-n})-
(1-a_n-a_{n-1}y^{-1}-\cdots-a_0y^{-n})=
(x-y)\sum_{i=1}^na_{n-i}\frac{x^{i-1}+x^{i-2}y+\cdots+y^{i-1}}{x^iy^i},
$$
故由 $a_0(s)=\cdots=a_n(s)=0$，取 $s$ 的足够小的紧邻域 $V$ 可设上述映射为函数空间
$\{a\in\mathbb{C}(V)\mid a(s)=1,\,\|a-1\|_\infty\le1/2\}$
上的压缩映射，有不动点，即 $f$ 有在 $s$ 取值 $1$ 的根。
:::

这样就证完了 @Suslin。

::: remark {@不合理}
$K(\mathbb{C})$、$K(\mathbb{Q}_p)$ 之类的凝聚态谱大而无章，因为其同伦群中有形如
$\mathbb{C}^\times\otimes_\mathbb{Z}\mathbb{C}^\times$、
$\mathbb{Q}_p^\times\otimes_\mathbb{Z}\mathbb{Q}_p^\times$
的东西。Clausen 在 [@copenhagen] 中说，
这种东西到“合理”对象的映射之中应有初始者。对非 Archimedes 的
$\mathbb{Q}_p$ 这应为 $K(\mathbb{Q}_p)^\blacksquare$，而对 $\mathbb{C}$ 他猜测
$$
\pi_nK(\mathbb{C})^{合理}=
\begin{cases}
  \mathbb{Z},&n=0;\\
  \mathbb{C}/(2\pi\mathrm{i})^k\mathbb{Z},&n=2k-1>0;\\
  0,&n=2k>0.
\end{cases}
$$
:::
