---
title: 凝聚态交换群、上同调
---

本节研究凝聚态交换群范畴及其中的上同调。

::: theorem
$\mathsf{CondAb}$ 是完备、余完备的 Abel 范畴，且满足 (AB6)
和 (AB4*)，分别指滤余极限与乘积交换
$$
\prod_{j\in J}\operatornamewithlimits{colim}_{i\in I_j}M_i=
\operatornamewithlimits{colim}_{(i_j)\in\prod_{j\in J}I_j}\prod_{j\in J}M_{i_j}
$$
和乘积正合。（不难验证在完备时上式等价于词条 [[Abel 范畴]]中的
(AB6)。）
:::

::: proof
完备、余完备显然。(AB6) 式子右边到左边有自然映射，
而等号在 $\mathsf{Cond}$ 中已经成立，因为滤余极限与乘积都可以逐开集取，
而等号在 $\mathsf{Set}$ 中成立。至于 (AB4*)，只需证乘积保持满射。
这也在 $\mathsf{Cond}$ 中成立，因为 $\mathsf{Cond}$ 被其投射对象生成，
于是可以对每个 $X$ 投射作 ${\operatorname{Hom}}(X,-)$ 之后在 $\mathsf{Set}$
中验证。
:::

先作自由交换群，即忘却函子 $\mathsf{CondAb}\to\mathsf{Cond}$ 的左伴随。

::: theorem {@free}
忘却函子 $\mathsf{CondAb}\to\mathsf{Cond}$ 有左伴随，记作
$X\mapsto\mathbb{Z}[X]$，称为凝聚态集 $X$ 生成的自由交换群。
:::

::: proof
直接构造
$\mathbb{Z}[X]=(S\mapsto\mathbb{Z}[X(S)])^\#$。
用伴随函子定理亦可。
:::

由于忘却函子保持滤余极限和满射，其左伴随保持紧对象和投射对象，于是

::: corollary
$\mathsf{CondAb}$ 被紧投射对象生成。事实上它被
$\mathbb{Z}[S]$，$S\in\mathsf{ExDisc}$，生成。
:::

显然对 $M,N\in\mathsf{CondAb}$，$\underline{\operatorname{Hom}}(M,N)\in\mathsf{CondAb}$。
$\underline{\operatorname{Hom}}(M,-)$ 也有左伴随：同样，
直接构造 $M\otimes N=(S\mapsto M(S)\otimes N(S))^\#$
或者用伴随函子定理，都可以证明。
容易发现对凝聚态集 $X,Y$，$\mathbb{Z}[X]\otimes\mathbb{Z}[Y]=\mathbb{Z}[X\times Y]$。

由于 $\mathsf{CondAb}$ 被紧投射对象生成，可以用投射消解定义这些函子的导出，
即 $\otimes^L$、$R\underline{\operatorname{Hom}}$、$R{\operatorname{Hom}}$。由此可作上同调：

::: definition
对 $X\in\mathsf{Cond}$，$M\in\mathsf{CondAb}$，
我们和在一般的[[意象]]中一样，记
$$
\Gamma_{\mathsf{Cond}}(X,M)={\operatorname{Hom}}_{\mathsf{Cond}}(X,M)
={\operatorname{Hom}}_{\mathsf{CondAb}}(\mathbb{Z}[X],M)\in\mathsf{Ab},
$$
也称其为 $M$ 在 $X$ 上的 **（整体）截面**，
实际上就是 $M$ 通过 $M(S\to X)=M(S)$ 看作[[俯范畴|俯]]景
$\mathsf{CHaus}/X$ 上层的整体截面。由此定义 **（凝聚态）上同调**为
$$
R\Gamma_{\mathsf{Cond}}(X,M)=R{\operatorname{Hom}}_{\mathsf{CondAb}}(\mathbb{Z}[X],M).
$$
无歧义时常省略下标 $\mathsf{Cond}$。
:::

本节接下来就计算一些具体情形。

::: theorem {@离散模的上同调}
对 $M\in\mathsf{Ab}\hookrightarrow\mathsf{CondAb}$（视为离散交换群），
$X\in\mathsf{CHaus}$，
$$
R\Gamma_{\mathsf{Cond}}(X,M)=R\Gamma_层(X,M),
$$
其中右边是 $M$ 视为拓扑空间 $X$ 上常层的层上同调。此时
$R\Gamma(-,M)$ 把滤极限变成滤余极限。
:::

证明中需要超覆盖的概念。

::: remark* (回忆)
对有限完备范畴 $\mathcal{C}$（一般为意象）的对象 $X_{-1}$，称增广单纯对象 $X_\bullet\to X_{-1}$
为 $X_{-1}$ 的**超覆盖**，意思是对所有 $n\ge-1$，自然映射
$X_{n+1}\to(\operatorname{cosk}_n X_{\le n})_{n+1}$ 都是满射。
:::

::: proof
先作自然映射。为此作伴随对 $(\pi_*,\pi^*)\colon\mathsf{Cond}/X\rightleftarrows\mathsf{Sh}(X)$，
$$
\pi^*\mathcal{G}=\left((s\colon S\to X)\mapsto\Gamma_层(S,s^*\mathcal{G})\right)^\#,
$$
$$
(\pi_*\mathcal{F})(U)={\operatorname{Hom}}_{\mathsf{Cond}/X}(U,\mathcal{F}).
$$
容易发现$\Gamma_层(X,\pi_*\mathcal{F})=\Gamma_{\mathsf{Cond}}(X,\mathcal{F})$，
$\pi^*$ 正合且 $\pi^*M=M$，故有自然映射
$$
R\Gamma_层(X,M)\to R\Gamma_层(X,R\pi_*\pi^*M)=R\Gamma_{\mathsf{Cond}}(X,M).
$$

由[叠计划08N8](https://stacks.math.columbia.edu/tag/08N8)，
伴随对 $(\beta,F)\colon\mathsf{CHaus}\rightleftarrows\mathsf{Set}$，
其中 $F$ 为忘却，给出 $\mathsf{CHaus}$ 中对象的典范单纯消解，
其各项都形如 $\beta A$。将其记作 $\beta_\bullet X\to X$，则它是超覆盖。
由[叠计划01GA](https://stacks.math.columbia.edu/tag/01GA)，
对此作 $\mathbb{Z}[-]$ 即得 $\mathbb{Z}[X]$ 的典范投射消解，
于是有典范的复形来计算凝聚态上同调，即
$$
R\Gamma_{\mathsf{Cond}}(X,M)=\Gamma_{\mathsf{Cond}}(\beta_\bullet X,M),
$$
其中右边为余单纯对象取交错和复形。

现在开始计算。先算 $X\in\mathsf{ProFin}$ 情形。设 $X=\lim_i X_i$，
$X_i\in\mathsf{Fin}$。则对于它们作为拓扑空间的层范畴，有
$\mathsf{Sh}(X)=\operatornamewithlimits{colim}_i\mathsf{Sh}(X_i)$，而有限集没有正次数上同调，故
$$
R\Gamma_层(X,M)=\operatornamewithlimits{colim}_i R\Gamma_层(X_i,M)=
\operatornamewithlimits{colim}_i{\operatorname{Hom}}(X_i,M)={\operatorname{Hom}}(X,M),
$$
$X$ 上的 $M$ 值连续函数（即局部常函数）群。要证凝聚态上同调也是这样，
我们将超覆盖 $\beta_\bullet X\to X$ 写成有限集超覆盖的滤极限
$\lim_i(X_{i,\bullet}\to X_i)$。由于 $\mathsf{ProFin}$ 中每个映射都是
$\mathsf{Fin}$ 中映射的滤极限，以及超覆盖都是其有限截断的极限
（$X_\bullet=\lim_n\operatorname{cosk}_n X_{\le n}$），不难发现这可以做到。这样
$$
R\Gamma_{\mathsf{Cond}}(X,M)=\Gamma_{\mathsf{Cond}}(X_\bullet,M)
=\operatornamewithlimits{colim}_i\Gamma_{\mathsf{Cond}}(X_{i,\bullet},M)=\operatornamewithlimits{colim}_i\Gamma_{\mathsf{Cond}}(X_i,M)
={\operatorname{Hom}}(X,M).
$$
其中第三个等号是因为有限集也没有正次数凝聚态上同调。

上面不仅证明了 $X\in\mathsf{ProFin}$ 情形的定理，还得到此时
$R\Gamma(X,M)$ 集中在 $0$ 处，且关于分量 $X$ 将滤极限变为滤余极限。

于是对 $X\in\mathsf{CHaus}$ 及超覆盖 $X_\bullet\to X$，
只要 $X_\bullet\in\mathsf{ProFin}$，便有
$$
R\Gamma_{\mathsf{Cond}}(X,M)=\Gamma_{\mathsf{Cond}}(X_\bullet,M).
$$
这样立即得到 $R\Gamma_{\mathsf{Cond}}(-,M)$ 将滤极限变为滤余极限：
如 $X=\lim X_i$，则 $\lim_i(\beta_\bullet X_i\to X_i)$
为 $X$ 的由 $\mathsf{ProFin}$ 中对象组成的超覆盖，从而
$$
R\Gamma_{\mathsf{Cond}}(X,M)=\Gamma(\lim_i\beta_\bullet X_i,M)
=\operatornamewithlimits{colim}_i\Gamma(\beta_\bullet X_i,M)=\operatornamewithlimits{colim}_i\Gamma(X_i,M).
$$

最后来对一般的 $X\in\mathsf{CHaus}$ 证明定理。
现在只需证对 $Y\in\mathsf{CHaus}$，$f\colon Y\twoheadrightarrow X$，
以 $f_\bullet\colon Y_\bullet\to X$ 记其 Čech 单纯对象，则对 $\mathcal{F}\in\mathsf{D}^+(X)$，
$$
R\Gamma(X,\mathcal{F})=R\Gamma(Y_\bullet,f_\bullet^*\mathcal{F}),
$$
即紧 Hausdorff 拓扑空间层上同调能下降。一旦有这件事，取 $\mathcal{F}=M$，取 $Y$
投射有限，由于这样 $Y_\bullet$ 各项都投射有限，
利用之前证过的情形即得欲证。

这个下降主要是因为拓扑空间的紧合基变换（[叠计划 09V6](https://stacks.math.columbia.edu/tag/09V6)）。
我们分几步证明之。

- 如果 $f$ 有截面，下降显然成立。

- 对 $g\colon X'\to X$ 以及 $\mathcal{G}\in\mathsf{D}^+(X')$，
  如证明了对基变换 $f'_\bullet\colon Y'_\bullet\to X'$ 有
  $$
  R\Gamma(X',\mathcal{G})=R\Gamma(Y'_\bullet,f'^*_\bullet\mathcal{G}),
  $$
  则对 $\mathcal{F}=Rg_*\mathcal{G}$ 上式成立。这是因为紧合基变换。于是如果
  $f'\colon Y'\to X'$ 有截面，则对从 $X'$ 导出前推来的东西，
  下降成立。

- $\mathcal{F}=\operatorname{Tot}(R{f_\bullet}_*f_\bullet^*\mathcal{F})$。
  这是因为可以逐[[茎]]验证，再用一次紧合基变换就化为 $X$
  为单点情形，而此时 $f$ 有截面。

- 对每个 $n$，$R{f_n}_*f_n^*\mathcal{F}$ 是从 $Y_n=Y^{\times_X(n+1)}$
  推来的，而 $Y\to X$ 基变换到 $Y_n$ 之后显然有截面，
  所以对 $R{f_n}_*f_n^*\mathcal{F}$ 下降都成立，故对 $\mathcal{F}$ 亦成立。

于是紧 Hausdorff 空间的层上同调能沿着满射下降。这样终于证明了定理。
:::

::: remark
该定理是 [@condensed] 的定理 3.2。这里给的证明后半段与
[@condensed] 中的不同，应当类似于挠系数平展上同调的 h 下降的证明，
虽然我没读过后者。它对超下降理应也是对的，但可能麻烦些，
如有读者有简短证明欢迎写在这。
写该讲义时我发现[叠计划 09WY](https://stacks.math.columbia.edu/tag/09WY)
有该定理的加强。沿用上面的记号，
叠计划中证了 $R\pi_*\pi^*=\operatorname{id}$。我并未查看那里的证明；
其实上面的证明只要前半段稍加修改也可得出此事。
:::

::: example
对集合 $I$ 以 $\mathbb{T}^I$ 记 $I$ 个 $\mathbb{T}=\mathbb{R}/\mathbb{Z}$ 的乘积，
为紧 Hausdorff 空间。则由 @离散模的上同调
以及 $\mathbb{T}$ 的通常上同调，有
$$
H^n(\mathbb{T}^I,\mathbb{Z})=\bigwedge\nolimits^n\mathbb{Z}^{\oplus I}.
$$
:::

::: exercise
对 $X,Y\in\mathsf{Cond}$，证明
$$
\mathbb{Z}[X]\otimes^L\mathbb{Z}[Y]=\mathbb{Z}[X\times Y].
$$
:::

::: theorem {@实数上同调}
对 $X\in\mathsf{CHaus}$，
$$
R\Gamma_{\mathsf{Cond}}(X,\mathbb{R})=C(X,\mathbb{R}),
$$
即它集中在 $0$ 处，为 $X$ 到 $\mathbb{R}$ 的连续函数环。
更准确地，对超覆盖 $X_\bullet\to X_{-1}=X$，
$X_\bullet$ 各项投射有限，
Banach 空间复形
$$
0\to C(X_{-1},\mathbb{R})\to C(X_0,\mathbb{R})\to C(X_1,\mathbb{R})\to\cdots
$$
有以下定量正合性：对 $\epsilon>0$ 以及闭链 $f\in C(X_i,\mathbb{R})$，
都存在 $g\in C(X_{i-1},\mathbb{R})$ 满足 $dg=f$，
$\|g\|\le(1+\epsilon)\|f\|$，其中 $\|\cdot\|$ 为上确界范数。
:::

::: remark
对于掌握经典层论的读者，这个结果在预料之中，
因为实值连续函数环层就是没有上同调。
:::

::: proof
先设 $X_i$ 都有限。那么超覆盖分裂，指从有限全序集反范畴
$\Delta^\mathrm{op}\cup\{\emptyset\}$ 出发的函子延拓至带基点
（基于最小值点）的有限全序集反范畴，其中自然嵌入是另加基点。
由 Dold–Kan 这给出以上链复形的零伦，且该零伦 $h_i\colon
C(X_i,\mathbb{R})\to C(X_{i-1},\mathbb{R})$ 为沿着特定映射
$X_{i-1}\to X_i$ 的拉回。于是只要 $df=0$ 就有 $dhf=f$，
且 $\|hf\|\le\|f\|$。

再设 $X_i$ 都投射有限。那么可将其写成有限情形的滤余极限，
即 $X_i=\operatornamewithlimits{colim}_j X_{j,i}$，$X_{j,\bullet}\to X_{j,-1}=X_j$
是有限集的超覆盖。取滤余极限即得具有同样的定量正合性的复形
$$
0\to LC(X_{-1},\mathbb{R})\to LC(X_0,\mathbb{R})\to LC(X_1,\mathbb{R})\to\cdots
$$
其中 $LC$ 指局部常函数。该复形 $i$ 处的边缘算子 $d_i$ 为 $i+2$
个拉回的交错和，算子范数不大于 $i+2$，于是可对其完备化得到连续函数复形。
我们来证明定量正合性。取闭链 $f\in C(X_i,\mathbb{R})$。对
$\epsilon>0$，取局部常 $f_0$ 使得
$\|f-f_0\|\le\epsilon\|f\|$。则由于 $df_0=-d(f-f_0)$
是局部常且范数不大于 $(i+2)\epsilon\|f\|$ 的闭链，由上，
存在局部常且范数不大于 $(i+2)\epsilon\|f\|$ 的 $f'_0$ 使得
$df'_0=df_0$。以 $f_0-f'_0$ 换 $f_0$，$\frac{\epsilon}{i+3}$ 换
$\epsilon$，得局部常闭链 $f_0$ 使得 $\|f-f_0\|<\epsilon\|f\|$。
再由上取局部常且范数不大于 $\|f_0\|$ 的 $g_0$ 使得 $dg_0=f_0$。
这样相当于取出了 $g_0\in LC(X_{i-1},\mathbb{R})$ 满足
$$
\|g_0\|\le(1+\epsilon)\|f\|,\,\|f-dg_0\|\le\epsilon\|f\|.
$$
以 $f-dg_0$ 作为上面的 $f$ 用上述操作得到 $g_1$，再以
$f-dg_0-dg_1$ 作为上面的 $f$ 得到 $g_2$，这样迭代下去便取出
一列 $g_0,g_1,\ldots$，满足
$$
\|g_n\|\le(1+\epsilon)\epsilon^n\|f\|,\,
\left\|f-\sum_{j=0}^ndg_j\right\|\le\epsilon^{n+1}\|f\|.
$$
于是级数 $\sum_{j=0}^\infty g_j$ 收敛。令 $g$ 为其和，
并稍稍改变 $\epsilon$，即有 $\|g\|\le(1+\epsilon)\|f\|$，$dg=f$。

现在考虑 $X$ 紧 Hausdorff，$X_i$，$i\ge0$ 投射有限的情形。
取非零闭链 $f\in C(X_i,\mathbb{R})$。对每个 $x\in X$，对纤维
$f_x\in C(X_i\times_X\{x\},\mathbb{R})$ 使用已证情形，
得存在 $g_x\in C(X_{i-1}\times_X\{x\},\mathbb{R})$ 满足
$\|g_x\|\le(1+\epsilon)\|f_x\|$，$dg_x=f_x$。
用 Tietze 延拓将其延拓至 $\tilde{g}_x\in C(X_{i-1},\mathbb{R})$，
满足 $\|\tilde{g}_x\|\le\|g_x\|$。由于 $dg_x=f_x$，
存在开集 $U_x\ni x$ 使得 $\|f-d\tilde{g}_x\|_{X_i\times_XU_x}
\le\epsilon\|f\|$。$\{U_x\}_{x\in X}$ 组成紧 Hausdorff 空间 $X$
的开覆盖。取受制于该开覆盖的单位分解，并用它线性组合对应的
$\tilde{g}_x$，便得到 $g_0\in C(X_{i-1},\mathbb{R})$ 满足
$$
\|g_0\|\le(1+\epsilon)\|f\|,\,\|f-dg_0\|\le\epsilon\|f\|.
$$
我们故技重施，迭代、求和，便得到所求的 $g$。
:::

::: remark
按理说对 $X_\bullet\to X$ 仅仅紧 Hausdorff 也有一样的结论，
但大概用处不大。
:::

::: remark
Scholze 在 [@PvC] 中说“我每页用十次选择公理”，诚不我欺。
:::
