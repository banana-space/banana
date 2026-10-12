---
title: 凝聚态集
---

凝聚态数学由 Dustin Clausen, Peter Scholze 等人从大致 2019 年开始发展，
旨在合理地于带拓扑的对象上做代数，并试图由此理清目前较为混乱的解析几何理论。

众所周知，在拓扑空间范畴 $\mathsf{Top}$ 中，既单又满的映射未必是同构：
对一集合 $X$ 及其上两个拓扑 $\tau\subsetneqq\tau'$，
$\operatorname{id}_X\colon(X,\tau')\to(X,\tau)$ 都既单又满，但不是同构。
这是令拓扑交换群范畴 $\mathsf{Ab}(\mathsf{Top})$ 不是 Abel 范畴的罪魁祸首，
也是在 $\mathsf{Top}$ 上做代数的困难之源。
本节将讲述凝聚态数学中用以替代拓扑空间的**凝聚态集**。
凝聚态集范畴 $\mathsf{Cond}$ 几乎就是个[[意象]]，在其上做代数十分方便。

::: definition
**凝聚态集**指的是[[景]] $\mathsf{CHaus}$ 上的[[层]]，
其中 $\mathsf{CHaus}$ 指紧 Hausdorff 拓扑空间之范畴，
覆盖为形如 $\{S_i\to T\}_{i=1}^n$
且满足 $\bigsqcup_{i=1}^n S_i\twoheadrightarrow T$ 的映射族。
凝聚态集组成的范畴记作 $\mathsf{Cond}$。
其上的群/交换群/环对象，即 $\mathsf{CHaus}$ 上的群/交换群/环层，
分别称为**凝聚态群/交换群/环**，记作
$\mathsf{CondGrp}$/$\mathsf{CondAb}$/$\mathsf{CondRing}$。
显然 $\mathsf{CondAb}$ 是 Abel 范畴。
:::

::: remark {@可表现范畴凝聚态化}
对一般的可表现范畴 $\mathcal{C}$，可以考虑 $\mathsf{CHaus}$ 上的
$\mathcal{C}$ 值层范畴，记作 $\mathsf{Cond}(\mathcal{C})$。
它自然地是 $\mathsf{Cond}$-[[充实范畴]]，且在
$\mathsf{Cond}$ 上为[[幂范畴|幂]]与[[余幂范畴|余幂]]的。
对 $\mathcal{C}=\mathsf{Grp},\mathsf{Ab},\mathsf{Ring}$，
容易发现这与上面定义的凝聚态群、交换群、环一致。
:::

注意 $\mathsf{CHaus}$ 不是小范畴，这会导致集合论困难。
在此我与[叠计划](https://stacks.math.columbia.edu/)一样，
不假设 Grothendieck 宇宙公理，而在 ZFC 中解决此困难。
但目前为流畅起见暂时忽略它，而将其丢给本节附录解决。

::: example
由于紧 Hausdorff 空间之间的满射都是商映射，
每个拓扑空间 $X$ 都[[Yoneda 引理|米田]]地决定一个凝聚态集 $S\mapsto{\operatorname{Hom}}(S,X)$，
即有显然的函子 $\mathsf{Top}\to\mathsf{Cond}$。
只要不发生混淆，我们亦将此凝聚态集记作 $X$。
类似地，拓扑群/交换群/环也依样给出凝聚态群/交换群/环。
这样得来的凝聚态对象称为**来自拓扑空间**。
:::

反过来，对于凝聚态集 $\mathcal{F}$，将其写成米田层的预层余极限
$$
\mathcal{F}=\operatornamewithlimits{colim}_{S_i\in\mathsf{CHaus}}h_{S_i}
$$
就能给 $\mathcal{F}(*)$ 赋予拓扑，即取这些 $S_i$ 的余极限拓扑。
但一般地，拓扑空间 $\mathcal{F}(*)$ 对凝聚态集 $\mathcal{F}$ 知之甚少。请看下例。

::: example
对拓扑空间 $X$，以 $X_\mathrm{disc}$ 记底集为 $X$ 的离散拓扑空间。
在 $\mathsf{Top}$ 中，$X_\mathrm{disc}\to X$ 既单又满。
容易发现在 $\mathsf{Cond}$ 中这单而不满。令
$Q=\operatorname{coker}(\mathbb{R}_\mathrm{disc}\to\mathbb{R})$，则依定义，$Q$ 为预层
$$
S\mapsto\frac{{\operatorname{Hom}}(S,\mathbb{R})}{{\operatorname{Hom}}(S,\mathbb{R}_\mathrm{disc})}
$$
之层化。不难发现 $Q\ne0$ 而 $Q(*)=0$。即便你目前难以或懒于发现此事，
你接下来也会轻易发现。
:::

::: example {@CW复形作为凝聚态集}
设 $X$ 为 CW 复形，按以上方法视为凝聚态集，
则它是它的有限子复形作为凝聚态集的滤余极限。这里要说明紧 Hausdorff
空间到 $X$ 的连续映射穿过有限子复形，即说明如果 $K\subseteq X$
紧，则 $K$ 只与 $X$ 中有限个胞腔有交。对每个与 $K$
有交的胞腔 $e_\alpha$ 选取 $x_\alpha\in K\cap e_\alpha$，
构成子集 $K'$，则 $K'$ 是 $K$ 的闭子集，因为 $X$ 的拓扑为弱拓扑，
而 $K'$ 交 $X$ 的每个有限子复形都是有限集，自然闭。同样道理
$K'$ 的任意子集也都在 $X$ 中闭，从而 $K'$ 离散，故有限。
:::

::: example
$\mathsf{Cond}$ 作为层范畴具有内 ${\operatorname{Hom}}$ 函子，或称指数对象，
记作 $\underline{\operatorname{Hom}}$，定义为
$$
\underline{\operatorname{Hom}}(X,Y)(S)={\operatorname{Hom}}(S\times X,Y),
$$
是乘积的右伴随。当 $X\in\mathsf{CHaus}$，$Y\in\mathsf{Top}$ 时，
经典点集拓扑事实说明 $\underline{\operatorname{Hom}}(X,Y)$ 是 ${\operatorname{Hom}}(X,Y)$
赋予紧开拓扑然后视为凝聚态集。
:::

为操作方便，我们引入景 $\mathsf{CHaus}$ 的两个基。

::: -remark [回忆]
一个紧 Hausdorff 空间投射有限（即为有限离散空间之极限），
当且仅当它全不连通（即连通分支为单点）。
以 $\mathsf{ProFin}$ 记这样的空间之范畴。
覆盖仍取 $\mathsf{CHaus}$ 中者，可得一景。
:::

还需要更不连通的空间。

::: definition
称 $S\in\mathsf{CHaus}$ **极不连通**，
指对任一 $T\in\mathsf{CHaus}$，任一满射 $p\colon T\to S$ 都有截面，
即存在 $s\colon S\to T$ 使得 $p\circ s=\operatorname{id}$。
$\mathsf{CHaus}$ 中极不连通的空间生成的完全子范畴记作 $\mathsf{ExDisc}$。
称形如 $\{S_i\to T\}_{i=1}^n$ 且满足 $\bigsqcup_{i=1}^nS_i\cong T$ 者为覆盖，
得一景。
:::

::: -remark [警告]
$\mathsf{ExDisc}$ 中无纤维积，甚至无乘积。
以上定义实际上是在把覆盖筛定义为对某个覆盖
$\{S_i\to T\}_{i=1}^n$，对每个 $i$ 都包含
$\operatorname{im}(h_{S_i}\to h_T)$ 的[[筛]]。
:::

显然，极不连通空间全不连通，且极不连通空间的有限无交并仍然极不连通。
另外，存在足够多的极不连通空间：

::: -remark [回忆]
Stone–Čech 紧化指的是含入函子 $\mathsf{CHaus}\hookrightarrow\mathsf{Top}$
之左伴随，由 Ти́хонов 定理易证其存在性。将其记为 $\beta$。
:::

于是 $A\mapsto\beta A$ 是忘却函子 $\mathsf{CHaus}\to\mathsf{Set}$
之左伴随，其中集合视为离散空间。由此以及集合满射都有截面，
不难得到 $\beta A$ 极不连通。
因此，对 $S\in\mathsf{CHaus}$，$\beta S_\mathrm{disc}\twoheadrightarrow S$
就给出由极不连通空间到 $S$ 的覆盖。

这样一来，不难发现 $\mathsf{ProFin}$ 与 $\mathsf{ExDisc}$ 都是景 $\mathsf{CHaus}$
的基，即 $\mathsf{Cond}$ 也相当于是 $\mathsf{ProFin}$ 或 $\mathsf{ExDisc}$ 上的层范畴。
$\mathsf{ExDisc}$ 上的层条件尤为简单，即

::: theorem
$$
\mathsf{Cond}(\mathcal{C})=\{\mathcal{F}\colon\mathsf{ExDisc}^\mathrm{op}\to\mathcal{C}\mid
\mathcal{F}(\emptyset)=*,\,\mathcal{F}(S\sqcup S')=\mathcal{F}(S)\times\mathcal{F}(S')\}.
$$
:::

由此可得上面说的 $\operatorname{coker}(\mathbb{R}_\mathrm{disc}\to\mathbb{R})(*)=0$。

::: remark
$\mathsf{ProFin}$ 是 [@BS15] 中定义的投射平展景的最简单情形，
即一个几何点的投射平展景。于是 $\mathsf{Cond}$ 也就是一点上的投射平展层范畴。
尽管这在 [@BS15] 中已经出现，
但 Scholze 本人可能未曾想到它能用来在拓扑空间上合理地做代数。
他在 [@condensed] 中写道：“（问题的）解决方向有点出乎作者意料。
[@BS15] 定义了一般概形的投射平展景，其对象基本上是平展概形的极限。
而本课程只涉及其最简单情形，即一个几何点上的情形。事实上，
一点上的投射平展层不只有集合，与经典的 Zariski 层或者平展层大相径庭。
这看似是个问题，在此实则是个重要性质，如 Clausen 与作者所说。”
:::

有一些办法在 $\mathsf{Cond}$ 中刻画 $\mathsf{CHaus}$。

::: definition
在完备、余完备范畴 $\mathcal{C}$ 中，称对象 $X$ **拟紧**，
指对映射族 $\{Y_i\to X\}_{i\in I}$ 满足
$\bigsqcup_{i\in I}Y_i\twoheadrightarrow X$，
都存在有限的 $J\subseteq I$ 使 $\bigsqcup_{i\in J}Y_i\twoheadrightarrow X$。
称 $X$ **拟分离**，指对拟紧的 $Y$，$Z$ 与映射 $Y\to X$，$Z\to X$，
$Y\times_XZ$ 都拟紧。$\mathcal{C}$ 的拟紧、拟分离、拟紧拟分离对象生成的完全子范畴分别记作
$\mathsf{qc}(\mathcal{C})$、$\mathsf{qs}(\mathcal{C})$、$\mathsf{qcqs}(\mathcal{C})$。
:::

::: -remark [警告]
这与拟紧拓扑空间的定义冲突。希望不会造成混淆。
一般只在意象中使用以上定义，但 $\mathsf{Cond}$ 并不是意象，
故我放松条件。
:::

::: theorem
$$
\mathsf{qcqs}(\mathsf{Cond})=\mathsf{CHaus}.
$$
:::

::: proof
先证 $\mathsf{qc}(\mathsf{Cond})$ 恰由 $\mathsf{CHaus}$ 中对象的满射像组成。

对于 $X\in\mathsf{CHaus}$，$\mathcal{F}\in\mathsf{Cond}$，
$\pi\colon X\twoheadrightarrow\mathcal{F}$，以及 $\mathcal{G}_i\in\mathsf{Cond}$，
$\bigsqcup_{i\in I}\mathcal{G}_i\twoheadrightarrow\mathcal{F}$，由层满射的定义，
对任意 $S\in\mathsf{CHaus}$ 以及 $s\in\mathcal{F}(S)$，都有覆盖
$\{T_k\to S\}_{k=1}^n$ 以及 $i_1,\ldots,i_n\in I$
使得 $s|_{T_k}\in\operatorname{im}(\mathcal{G}_{i_k}(T_k)\to\mathcal{F}(T_k))$。取 $S=X$，
$s=\pi$，得到这样的 $T_k$，$i_k$，以及
$\mathcal{G}_{i_k}(T_k)\ni t_k\mapsto\pi|_{T_k}$，则显然
$\bigsqcup_{k=1}^n\mathcal{G}_{i_k}\twoheadrightarrow\mathcal{F}$，
因为它与 $\bigsqcup_{k=1}^nt_k$ 复合之后是满射
$\bigsqcup_{k=1}^nT_k\twoheadrightarrow X\twoheadrightarrow\mathcal{F}$
（这里把 $t_k$ 看成映射 $T_k\to\mathcal{G}_{i_k}$）。于是 $\mathcal{F}$ 拟紧。

反过来如 $\mathcal{F}\in\mathsf{Cond}$ 拟紧，将其写成米田层的余极限
$\mathcal{F}=\operatornamewithlimits{colim}_iS_i$，
则这些 $S_i$ 中有限个的无交并层映满 $\mathcal{F}$。
由覆盖的定义，米田嵌入 $\mathsf{CHaus}\hookrightarrow\mathsf{Cond}$
显然保持有限无交并，故存在 $S\in\mathsf{CHaus}$ 映满 $\mathcal{F}$。

那么现在对于 $X\in\mathsf{CHaus}$，$\mathcal{F},\mathcal{G}\in\mathsf{qc}(\mathsf{Cond})$，
$\mathcal{F}\to X$，$\mathcal{G}\to X$，要证 $\mathcal{F}\times_X\mathcal{G}$ 拟紧。
为此只需取 $Y,Z\in\mathsf{CHaus}$，$Y\twoheadrightarrow\mathcal{F}$，
$Z\twoheadrightarrow\mathcal{G}$，注意到
$\mathsf{CHaus}\ni Y\times_XZ\twoheadrightarrow\mathcal{F}\times_X\mathcal{G}$
即足。

反过来如 $X\in\mathsf{qcqs}(\mathsf{Cond})$，先由拟紧取
$\mathsf{CHaus}\ni Y\twoheadrightarrow X$，再由拟分离即
$Y\times_XY$ 拟紧取 $\mathsf{CHaus}\ni Z\twoheadrightarrow Y\times_XY$，
则 $Y\times_XY$ 是凝聚态集映射 $Z\to Y\times Y$ 的像，
容易发现它也是其作为紧 Hausdorff 空间映射的像。
于是 $Y\times_XY\subseteq Y\times Y$ 是闭子空间，
$X$ 为紧 Hausdorff 空间 $Y$ 商闭的等价关系，仍为紧 Hausdorff。

故 $\mathsf{qcqs}(\mathsf{Cond})=\mathsf{CHaus}$。
:::

还能刻画 $\mathsf{ExDisc}$。

::: definition
一般的范畴 $\mathcal{C}$ 中，称对象 $X$ **投射**，指 ${\operatorname{Hom}}(X,-)$
保持满射。
在 $\mathcal{C}$ 有任意滤余极限时，称 $X\in\mathcal{C}$ **紧**，指 ${\operatorname{Hom}}(X,-)$
与任意滤余极限交换。分别以 $\mathsf{cpt}(\mathcal{C})$ 与 $\mathsf{cProj}(\mathcal{C})$
记紧对象与紧投射对象的完全子范畴。
:::

::: theorem
$$
\mathsf{cProj}(\mathsf{Cond})=\mathsf{ExDisc}.
$$
:::

::: proof
先证极不连通空间作为 $\mathsf{Cond}$
的对象紧投射，即对 $S$ 极不连通，$\mathcal{F}\twoheadrightarrow\mathcal{G}$，
要证任意 $g\colon S\to\mathcal{G}$ 都能提升为 $f\colon S\to\mathcal{F}$。沿着 $g$ 拉回，
可设 $\mathcal{G}=S$，$g=\operatorname{id}$，要证 $\mathcal{F}\twoheadrightarrow S$
有截面。那么由于 $S$ 拟紧，存在 $T\in\mathsf{CHaus}$
以及 $t:T\to\mathcal{F}$ 使得复合 $T\to\mathcal{F}\twoheadrightarrow S$ 仍然满。
这样由 $T\to S$ 有截面即得结论。

再证紧投射对象极不连通。如凝聚态集 $X$ 紧投射，则由紧性易知其拟紧。
于是可取极不连通空间 $Y$ 满射到 $X$。由投射性该满射有截面，
故 $X$ 是极不连通空间 $Y$ 的收缩，也是极不连通空间。
:::

于是有 $\mathsf{Cond}$ 被其紧投射对象生成。

```terms
凝聚态数学:
  en: condensed mathematics
凝聚态集:
  en: condensed set
投射有限:
  en: profinite
极不连通:
  en: extremally disconnected
(余)幂:
  en: (co)powered
```
