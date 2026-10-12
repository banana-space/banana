---
title: 附录：集合论困难之解决
---

这里的集合论困难在于 $\mathsf{CHaus}$ 太大，不是真的[[景]]，于是在 [[ZFC 集合论|ZFC]]
中并不能写出层范畴 $\mathsf{Sh}(\mathsf{CHaus})$。为此作适当的截断。

::: definition
称基数 $\kappa$ 为**强极限基数**，指对任意 $\lambda<\kappa$，
都有 $2^\lambda<\kappa$。
:::

强极限基数足够多：

::: notation
记 $\beth_0=\aleph_0$，$\beth_{\alpha+1}=2^{\beth_\alpha}$，
对极限序数 $\alpha$ 记
$\beth_\alpha=\sup_{\beta<\alpha}\beth_\beta$。
则显然对极限序数 $\alpha$，$\beth_\alpha$ 都是强极限基数。
由此立得对任意给定基数，都存在大于它的强极限基数。甚至于对任意基数
$\lambda$，都存在强极限基数 $\kappa$ 满足[[共尾类]] $\operatorname{cf}(\kappa)>\lambda$：
取 $\kappa=\beth_{\lambda^+}$ 即可，其中 ${}^+$ 表示后继基数。
:::

用它即可截断 $\mathsf{CHaus}$。

::: definition
对强极限基数 $\kappa$，定义 $\mathsf{CHaus}_\kappa=\{S\in\mathsf{CHaus}\mid|S|<\kappa\}$，
$\mathsf{Cond}_\kappa=\mathsf{Sh}(\mathsf{CHaus}_\kappa)$。
:::

$\mathsf{CHaus}_\kappa$ 本质小：显然
$\mathsf{CHaus}_\kappa\cap V_\kappa$ 是其小骨架，其中 $V_\kappa$ 为
von Neumann 层级。所以以上定义无集合论困难。
类似定义 $\mathsf{ProFin}_\kappa$ 与 $\mathsf{ExDisc}_\kappa$。
由于经典事实：对 $X\in\mathsf{Top}$，$|\beta X|\le2^{2^{|X|}}$，容易发现
$$
\mathsf{Cond}_\kappa=\mathsf{Sh}(\mathsf{ProFin}_\kappa)=\mathsf{Sh}(\mathsf{ExDisc}_\kappa).
$$

尽管像在[叠计划](https://stacks.math.columbia.edu/)中一样每次在固定的截断中做事也是一个办法，
但此处我们还是想要统一的 $\mathsf{Cond}$。为此观察 $\mathsf{CHaus}_\kappa$ 对 $\kappa$ 的函子性。
依定义，对强极限基数 $\kappa<\kappa'$，显然含入函子
$\iota_{\kappa,\kappa'}\colon\mathsf{CHaus}_\kappa\hookrightarrow\mathsf{CHaus}_{\kappa'}$
连续，
于是有意象的几何态射
$(\iota^*,\iota_*)\colon\mathsf{Cond}_\kappa\rightleftarrows\mathsf{Cond}_{\kappa'}$，
显式写出即为
$$
\iota^*\mathcal{F}=\left(S\mapsto\operatornamewithlimits{colim}_{S\to T\in\mathsf{CHaus}_\kappa}\mathcal{F}(T)\right)^\#.
$$
而用 $\mathsf{ExDisc}$ 写则无需层化，因为覆盖很简单。
由此不难验证 $\iota_*\iota^*\cong\operatorname{id}$，$\iota^*$ 完全忠实。于是定义

::: definition
$$
\mathsf{Cond}=\operatornamewithlimits{colim}_{\kappa,\,\iota^*}\mathsf{Cond}_\kappa.
$$
:::

这样就摆脱了集合论困难。这个定义的 ZFC 中书写方法大致是直接令
$\mathsf{Cond}$ 由形如 $(\kappa,\mathcal{F})$，$\kappa$ 为强极限基数，
$\mathcal{F}\in\mathsf{Cond}_\kappa$，这样的有序对组成，然后两个对象的
${\operatorname{Hom}}$ 为作 $\iota^*$ 统一到第一个分量较大者之后作 ${\operatorname{Hom}}$。
对每个强极限的 $\kappa$，有显然的伴随对
$(\iota^*,\iota_*)\colon\mathsf{Cond}_\kappa\rightleftarrows\mathsf{Cond}$。
通过 $\iota^*$，我们将 $\mathsf{Cond}_\kappa$ 视为 $\mathsf{Cond}$
的完全子范畴，认为 $\mathsf{Cond}=\bigcup\mathsf{Cond}_\kappa$。

::: remark
由于 $\iota^*$ 总是保持余极限，所以 $\mathsf{Cond}$ 显然余完备。
完备性则稍复杂些：

对于强极限基数 $\kappa$，记 $\lambda=\operatorname{cf}(\kappa)$，
则 $\iota_\kappa^*$ 与 $\lambda$-小的极限交换。
这是因为对于 $\mathcal{F}\in\mathsf{Cond}_\kappa$，$S\in\mathsf{ExDisc}$，
$$
(\iota^*\mathcal{F})(S)=\operatornamewithlimits{colim}_{S\to T\in\mathsf{ExDisc}_\kappa}\mathcal{F}(T);
$$
容易发现等号右边是 $\lambda$-滤余极限，与 $\lambda$-小的极限交换。
注意我们预先甚至不知道先 $\iota^*$ 再逐开集取极限，得到的东西仍然属于
$\mathsf{Cond}$；而刚才一举证明了其属于 $\mathsf{Cond}_\kappa$。

于是 $\mathsf{Cond}$ 完备。由此可以得到对 $X,Y\in\mathsf{Cond}$，
$\underline{\operatorname{Hom}}(X,Y)\in\mathsf{Cond}$。这是因为可将 $X$ 写成米田层的余极限，
可设 $X\in\mathsf{CHaus}$；再将 $Y$ 写成米田层的滤余极限，由紧性将其提到
$\underline{\operatorname{Hom}}$ 外面，可设 $Y\in\mathsf{CHaus}$。
此时 $\underline{\operatorname{Hom}}(X,Y)\in\mathsf{CHaus}$。
（这一段证明如可以的话最好改一改，使其能够一并证明
$\mathsf{Cond}(\mathcal{C})$ 的情况，虽然按理说关于可表现范畴的事情不难由
$\mathsf{Set}$ 的情形推出。）
:::

::: remark
注意 $\mathsf{ProFin}^\mathrm{op}=\mathsf{Ind}(\mathsf{Fin}^\mathrm{op})$
是可表现范畴。$\mathsf{Cond}$ 的另一个写法是 $\mathsf{ProFin}^\mathrm{op}$
到 $\mathsf{Set}$ 的可达函子中满足层公理者。下证之。

一方面，如果 $\lambda$ 为正则基数，$\mathcal{F}$ 为 $\lambda$-可达，则对于 $\kappa>\lambda$ 强极限，
$\mathcal{F}\in\mathsf{Cond}_\kappa$。
这是因为 $\mathsf{ProFin}^\mathrm{op}$ 中的 $\lambda$-紧对象为有限集的
$\lambda$-小极限（因为一般地 $\mathsf{Ind}(\mathcal{C})$ 中 $\lambda$-紧对象是
$\mathcal{C}$ 中对象的 $\lambda$-小余极限），显然属于 $\mathsf{ProFin}_\kappa$。
再由可达的定义以及 $\iota^*$ 的显式写法即知 $\mathcal{F}\in\mathsf{Cond}_\kappa$。

另一方面，如果 $\mathcal{F}\in\mathsf{Cond}_\kappa$，则对于 $\lambda>\kappa$ 正则，
$\mathcal{F}$ 为 $\lambda$-可达。这主要是因为
$\mathsf{ProFin}_\kappa^\mathrm{op}\subseteq\mathsf{cpt}_\lambda(\mathsf{ProFin}^\mathrm{op})$，
其中 $\mathsf{cpt}_\lambda$ 表示 $\lambda$-紧对象（因为势小于 $\kappa$
的投射有限集显然都能写成有限集的 $\lambda$-小极限）。
这里实际上要证明对任一
$U\in\mathsf{ProFin}^\mathrm{op}$ 都有
$$
\mathcal{F}(U)=\operatornamewithlimits{colim}_{\mathsf{cpt}_\lambda(\mathsf{ProFin}^\mathrm{op})\ni T\to U}\mathcal{F}(T).
$$
由 $\iota^*$
的定义，$\mathcal{F}$ 本来是上式的层化，故只需证上式确实关于 $U$ 满足层公理。
由于 $\mathsf{ProFin}$ 中覆盖都是有限的，层公理仅涉及有限极限，
而 $\mathcal{F}$ 为 $\mathsf{CHaus}_\kappa$ 中对象的滤余极限，故只需证
$\mathcal{F}=h_S$，$S\in\mathsf{CHaus}_\kappa$ 的情形。
事实上此时有
$$
{\operatorname{Hom}}_{\mathsf{CHaus}}(U,S)=\operatornamewithlimits{colim}_{U\to T\in\mathsf{cpt}_\lambda(\mathsf{ProFin}^\mathrm{op})^\mathrm{op}}{\operatorname{Hom}}_{\mathsf{CHaus}}(T,S),
$$
证明见 @T1，将其中的 $\mathsf{CHaus}_\kappa$ 都改为
$\mathsf{cpt}_\lambda(\mathsf{ProFin}^\mathrm{op})^\mathrm{op}$ 即可，
因为后者为 $\lambda$-滤的。
:::

上面我把滤与余滤都说成滤，读者可自行根据上下文判断。

还有一些麻烦事。

::: exercise
考虑 $X=(\{0,1\},\{\emptyset,\{0\},\{0,1\}\})\in\mathsf{Top}$，
即集合 $\{0,1\}$，$1$ 是闭点 $0$ 不是闭点。证明
$$
(S\mapsto{\operatorname{Hom}}_{\mathsf{Top}}(S,X))\notin\mathsf{Cond}.
$$
:::

所幸

::: proposition {@T1}
对 $T_1$ 拓扑空间 $X$，
$$
(S\mapsto{\operatorname{Hom}}_{\mathsf{Top}}(S,X))\in\mathsf{Cond}.
$$
:::

::: proof
取强极限的 $\kappa$ 使 $\operatorname{cf}(\kappa)>|X|$，
我们来证明 $h_X\in\mathsf{Cond}_\kappa$。这里需要证对
$S\in\mathsf{CHaus}$，
$$
{\operatorname{Hom}}_{\mathsf{Top}}(S,X)=\operatornamewithlimits{colim}_{S\to T\in\mathsf{CHaus}_\kappa}{\operatorname{Hom}}_{\mathsf{Top}}(T,X).
$$

显然右边到左边的自然映射是单的：如 $f\colon S\to T$，$f'\colon S\to T'$，
$t\colon T\to X$，$t'\colon T'\to X$ 满足 $t\circ f=t'\circ f'$，
则考虑 $(f,f')\colon S\to T\times T'$，它的像集属于 $\mathsf{CHaus}_\kappa$，
且到 $X$ 有唯一自然的映射，穿过 $t$ 与 $t'$，故 $t$ 与 $t'$ 在上式右边中已经相等。

于是只需证每个映射 $S\to X$ 都穿过某个 $\mathsf{CHaus}_\kappa\ni T\to X$，
即证明存在 $\mathsf{CHaus}_\kappa\ni T\to X$ 使得 $S\times_TS\to X$
的两个自然映射相等，即 $\operatorname{im}(S\times_TS\to X\times X)\subseteq\Delta_X$。
记 $\lambda=|X|^+$，则范畴 $\{S\to T\to X\mid T\in\mathsf{CHaus}_\kappa\}$
为 $\lambda$-滤的。所以由于 $|X\times X|<\lambda$，
如能对各个 $(x,y)\notin\Delta_X$ 找到合适的 $T$，便能找到统一的合适的 $T$。
于是只需对每对 $x\ne y$ 说明存在 $S\to T\to X$
使得 $(x,y)\notin\operatorname{im}(S\times_TS\to X\times X)$。
记
$$
S_{x,y,T}=(S\times_TS)\times_{X\times X}\{(x,y)\},
$$
则对每个 $T$ 它都是 $S\times S$ 的闭子集，都紧 Hausdorff，
而对于 $T$ 取滤极限就会得到
$(S\times_SS)\times_{X\times X}\{(x,y)\}=\emptyset$，
故由紧性对某个 $T$ 它已经空。这样就做完了。
:::

::: remark
那么不 $T_1$ 的拓扑空间怎么办呢？Scholze 在 [@PvC] 中说，
我们不应将其看成凝聚态集，而应看成凝聚态位象之类的东西。
位象的意思是 $0$-意象；位象构成可表现范畴，故由 @可表现范畴凝聚态化
可做出凝聚态位象这种东西。常见的不 $T_1$ 的拓扑空间无非是谱空间，
即环的素谱；它不应看成拓扑空间，而应看成位象，然后看成常值凝聚态位象。
:::

另外，我在本节正文中曾说“$\mathsf{Cond}$ 几乎就是个意象”，这是因为

::: theorem
$\mathsf{Cond}$ 完备、余完备，
且满足意象的 Giraud 公理中除去可表现之外的其他每条。即

- 余极限都万有。

- 余积都无交。

- 等价关系都有效。

:::

::: proof
之前已经证过完备、余完备。下证这些公理。

余极限都万有，指的是对任意映射 $f\colon Y\to X$，拉回函子
$f^*\colon\mathsf{Cond}/X\to\mathsf{Cond}/Y$
保持余极限。

余积都无交，指的是对任意 $X$，$Y$，
$\emptyset=X\times_{X\sqcup Y}Y$。

等价关系都有效，指的是对任意
$X$ 以及等价关系 $R\subseteq X\times X$，定义
$X/R=\operatorname{coeq}(R\rightrightarrows X)$，则 $R=X\times_{X/R}X$。

这些都是显然的，因为每个 $\mathsf{Cond}_\kappa$
作为意象都有这些性质，而 $\iota^*$ 保持有限极限与任意余极限。
:::

::: remark
但它终究不是意象，因为它不可表现。
:::

有兴趣的读者可以练些瑜伽：

::: exercise
对一般概形的投射平展景以及其他一些大景作类似的“层范畴”。
:::

下文中难免还会有在集合论上信口胡言之处，例如下一节 @free 的证明。
相信掌握本节的读者能轻易将其合法化。

```terms
强极限基数:
  en: strong limit cardinal
共尾类:
  en: cofinal class
可表现:
  en: presentable
可达:
  en: accessible
位象:
  en: locale
谱空间:
  en: spectral space
```
