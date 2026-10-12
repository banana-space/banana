---
title: 凝聚态生象
---

**[[生象]]** 是英文 anima 的翻译，意为空间，即无穷群胚。
用此词是因为“空间”歧义太大，而“无穷群胚”音节太多。
英文重新造词也可能是 space 一词与代数拓扑中同样常见的 spectrum
即谱的头两个字母重复，不好缩写所致。将无穷群胚称作 anima，
其范畴记作 $\mathsf{Ani}$，似为 Beilinson 首倡。

本节是将之前所做推广到无穷范畴语境下，故需要读者对无穷范畴理论有基本的熟悉。

::: definition
设 $\mathcal{C}$ 是可表现无穷范畴。$\mathcal{C}$ 的**凝聚态对象**指的是
$\mathsf{CHaus}$ 上的[[超完备]]的 $\mathcal{C}$ 值层。它们组成的范畴记作
$\mathsf{Cond}(\mathcal{C})$。$\mathcal{C}=\mathsf{Ani},\mathsf{Sp}$ 时称作**凝聚态生象**、
**凝聚态谱**，记作 $\mathsf{CondAni}$、$\mathsf{CondSp}$。
$\mathsf{Cond}(\mathcal{C})$ 自然地是 $\mathsf{CondAni}$-[[充实范畴|充实]]、[[幂范畴|幂]]、
[[余幂范畴|余幂]]的，
当 $\mathcal{C}$ [[稳定无穷范畴|稳定]]时自然地是 $\mathsf{CondSp}$-充实、[[幂范畴|幂]]、
[[余幂范畴|余幂]]的。
:::

由于 $\mathsf{ProFin}\subset\mathsf{CHaus}$ 是基，这也相当于
$\mathsf{ProFin}$ 上的超完备层。由于 $\mathsf{CHaus}$ 中对象能被 $\mathsf{ExDisc}$
中的超覆盖，而后者的覆盖条件尤其简单，故仍有

::: theorem
$$
\mathsf{Cond}(\mathcal{C})=\{\mathcal{F}\colon\mathsf{ExDisc}^\mathrm{op}\to\mathcal{C}\mid
\mathcal{F}(\emptyset)=*,\,\mathcal{F}(S\sqcup S')=\mathcal{F}(S)\times\mathcal{F}(S')\}.
$$
:::

于是

::: corollary
滤余极限可以在逐个 $S\in\mathsf{ExDisc}$ 上取。
$\mathsf{CondAni}_*$ 的环路空间函子 $\Omega$ 保持极限，
甚至可以在逐个 $S\in\mathsf{CHaus}$ 上取，
而悬挂函子 $\Sigma$ 则需层化。

由同伦群保持有限乘积有从 $\mathsf{CondAni}_*$ 或 $\mathsf{CondSp}$ 到 $\mathsf{Cond}$
的同伦群函子 $\pi_i$。具体写出即对带基点凝聚态生象或者凝聚态谱 $X$，
极不连通空间 $S$，$(\pi_iX)(S)=\pi_i(X(S))$。故而如果
$X$ 的各阶同伦群均平凡，则对每个极不连通空间 $S$，$X(S)$
都零伦，故 $X$ 作为带基点凝聚态生象或者凝聚态谱也是单点。
所以验证映射是同构只需在各阶同伦群上验证。

类似地由截断保持有限乘积，可对极不连通的 $S$ 定义
$(\tau_{\le n}X)(S)=\tau_{\le n}(X(S))$，
$(\tau_{\ge n}X)(S)=\tau_{\ge n}(X(S))$；逐 $S$ 验证可得
$X=\lim_n\tau_{\le n}X=\operatornamewithlimits{colim}_n\tau_{\ge-n}X$。

所以 $\mathsf{CondSp}$ 自然具有 $t$ 结构，即
$$
\mathsf{CondSp}_{\ge0}=\{X\in\mathsf{CondSp}\mid
\forall S\in\mathsf{ExDisc},\,X(S)\in\mathsf{Sp}_{\ge0}\},\,
\mathsf{CondSp}_{\le0}=\{X\in\mathsf{CondSp}\mid
\forall S\in\mathsf{ExDisc},\,X(S)\in\mathsf{Sp}_{\le0}\},
$$
其心为 $\mathsf{CondAb}$。在此 $t$ 结构下
$\underline{\operatorname{Hom}}$、${\operatorname{Hom}}$ 为左正合，$\otimes$ 为右正合。
:::

之前的忘却函子和自由交换群在此成为

::: theorem
有自然的伴随对
$$
(\Sigma^\infty,\Omega^\infty)\colon\mathsf{CondAni}_*\rightleftarrows\mathsf{CondSp};\;
(\Sigma_+^\infty,\Omega^\infty)\colon\mathsf{CondAni}\rightleftarrows\mathsf{CondSp}.
$$
常将 $\Sigma_+^\infty$ 记为 $\mathbb{S}[-]$，而将 $\Omega^\infty$
认为是一种忘却。$\Omega^\infty\mathsf{CondSp}_{<0}=*$，
故$\Sigma^\infty$ 的像含于 $\mathsf{CondSp}_{\ge0}$。
和在 $\mathsf{Ani}$ 和 $\mathsf{Sp}$ 中一样，
将其称为 **[[无穷悬挂]]** 和 **[[无穷环路空间]]**。
:::

::: proof
$\Omega^\infty$ 逐开集取即可。然后有伴随函子定理，或和
$\mathbb{Z}[-]$ 一样的直接构造。由 $\Omega^\infty$ 与 $\pi_i$，
$i\ge0$ 交换可得 $\Omega^\infty\mathsf{CondSp}_{<0}$
中对象各阶同伦群平凡，故为单点。
:::

::: exercise
对 $X,Y\in\mathsf{CondAni}$，证明
$$
\mathbb{S}[X\sqcup Y]=\mathbb{S}[X]\oplus\mathbb{S}[Y],\,
\mathbb{S}[X\times Y]=\mathbb{S}[X]\otimes\mathbb{S}[Y].
$$
:::

::: notation
称子范畴 $\mathsf{Ani}\subset\mathsf{CondAni}$ 中对象为**离散**
（即不凝聚态），子范畴 $\mathsf{Cond}\subset\mathsf{CondAni}$
中对象为**静止**（即不生动）。
$\mathsf{Ani}\cap\mathsf{Cond}=\mathsf{Set}$。
:::

以下命题刻画了离散对象。

::: proposition {@离散刻画}
$X\in\mathsf{CondAni}$ 离散当且仅当对任意
$S\in\mathsf{ExDisc}$，$s\in S$，
$$
\operatornamewithlimits{colim}_{V\ni s\,紧邻域}X(V)=X(\{s\}).
$$
:::

::: proof
如已知 $X$ 离散，即它是 $\mathsf{ExDisc}$ 上常预层的层化，
则由于[[景]] $\mathsf{ExDisc}$ 中的覆盖只有无交并
$S_1\sqcup\cdots\sqcup S_n\cong S$，有
$$
X(S)=\operatornamewithlimits{colim}_{S=S_1\sqcup\cdots\sqcup S_n}X^n=
\{S\text{ 到 }X\text{ 的局部常值函数}\},
$$
立得
$$
\operatornamewithlimits{colim}_{V\ni s\,紧邻域}X(V)=
\operatornamewithlimits{colim}_{V\ni s\,开闭邻域}X(V)=X(\{s\}).
$$
反过来如条件成立，以 $X'$ 记取值为 $X(*)$ 的离散对象，
则有自然映射 $X'\to X$。对任意 $S\in\mathsf{Disc}$，
该映射诱导 $X'$ 与 $X$ 作为 $S$ 的通常拓扑层的同构，
因为条件说这是逐[[茎]]同构；取整体截面即得 $X'(S)=X(S)$。
即 $X'=X$，$X$ 离散。
:::

固态化理论也可以推广到这。为运用上一节结果，要先证个引理。

::: lemma
$\mathsf{CondSp}$ 中，$\mathbb{S}^I\otimes_\mathbb{S}\mathbb{Z}=\mathbb{Z}^I$，其中 $I$
为任意集合。
:::

::: proof
本质是伪凝聚性。显然对 $M\in\mathsf{CondSp}$，
都有自然映射 $\mathbb{S}^I\otimes_\mathbb{S} M\to M^I$，且 $M=\mathbb{S}$
时这是同构，故当 $M$ 为 $\mathbb{S}$ 的有限极限时这也是同构。
而谱 $\mathbb{Z}$ 的每个维数上都只有有限个胞腔，换言之对任意正整数
$n$，存在 $\mathbb{S}$ 的有限极限 $M_n$ 以及映射 $M_n\to\mathbb{Z}$，
其余纤维 $Q_n$ 只有大于 $n$ 阶的同伦群。于是由
$\mathbb{S}^I\otimes_\mathbb{S} M_n=M_n^I$，有
$$
\operatorname{cofib}(\mathbb{S}^I\otimes_\mathbb{S}\mathbb{Z}\to\mathbb{Z}^I)=
\operatorname{cofib}(\mathbb{S}^I\otimes_\mathbb{S} Q_n\to Q_n^I)
$$
只有大于 $n$ 阶的同伦群。这对任意正整数 $n$ 成立，
从而 $\operatorname{cofib}(\mathbb{S}^I\otimes_\mathbb{S}\mathbb{Z}\to\mathbb{Z}^I)=0$，即欲证。
:::

我们来固态化。

::: definition
对 $\mathsf{ProFin}\ni S=\lim S_i$，$S_i\in\mathsf{Fin}$，
定义**固态自由谱**
$$
\mathbb{S}[S]^\blacksquare=\lim\mathbb{S}[S_i].
$$
:::

::: proposition
记号如上。存在集合 $I$，$\Gamma(S,\mathbb{S})=\operatornamewithlimits{colim}\Gamma(S_i,\mathbb{S})
  =\mathbb{S}^{\oplus I}$，$\mathbb{S}[S]^\blacksquare=\mathbb{S}^I$。
:::

::: proof
@奇妙超限归纳 的证明给出映射
$\mathbb{S}^{\oplus I}\to\operatornamewithlimits{colim}\Gamma(S_i,\mathbb{S})$。
这是下有界谱之间的映射，张量积 $\mathbb{Z}$ 之后为同构，
故它本来就是同构，因为余纤维张量积 $\mathbb{Z}$ 将得到 $0$，
而张量积 $\mathbb{Z}$ 不改变最低阶同伦群，故余纤维本来就是 $0$。于是
$$
\mathbb{S}[S]^\blacksquare=\lim\mathbb{S}[S_i]=\lim\underline{\operatorname{Hom}}(\Gamma(S_i,\mathbb{S}),\mathbb{S})
=\underline{\operatorname{Hom}}(\operatornamewithlimits{colim}\Gamma(S_i,\mathbb{S}),\mathbb{S})=\underline{\operatorname{Hom}}(\mathbb{S}^{\oplus I},\mathbb{S})=\mathbb{S}^I.
$$

@奇妙超限归纳 的证明还给出对 $M\in\mathsf{CondSp}$
自然的映射 $M^{\oplus I}\to\Gamma(S,M)$，对 $M=\mathbb{Z}$ 是同构。
由于两边都正合，所以对有限个 $\mathbb{Z}$ 的扩张这也是同构。而
$\mathbb{S}=\lim_n\tau_{\le n}\mathbb{S}$，后者是有限个 $\mathbb{Z}$ 的扩张，故
$$
\Gamma(S,\mathbb{S})=\lim_n\Gamma(S,\tau_{\le n}\mathbb{S})
=\lim_n(\tau_{\le n}\mathbb{S})^{\oplus I};
$$
由于取同伦群和直和交换，
$\mathbb{S}^{\oplus I}\to(\tau_{\le n}\mathbb{S})^{\oplus I}$
在 $\le n$ 阶同伦群为同构，且后者没有 $>n$ 阶同伦群，所以
$(\tau_{\le n}\mathbb{S})^{\oplus I}=\tau_{\le n}(\mathbb{S}^{\oplus I})$，
故上式右边就是 $\lim_n\tau_{\le n}(\mathbb{S}^{\oplus I})=\mathbb{S}^{\oplus I}$。
:::

所以 $\mathbb{S}[S]^\blacksquare\otimes\mathbb{Z}=\mathbb{Z}[S]^\blacksquare$。

::: theorem {@固态谱}
定义**固态谱**范畴
$$
\mathsf{SolidSp}=\{X\in\mathsf{CondSp}\mid\forall S\in\mathsf{ProFin},\,
{\operatorname{Hom}}(\mathbb{S}[S],X)={\operatorname{Hom}}(\mathbb{S}[S]^\blacksquare,X)\},
$$
为 $\mathsf{CondSp}$ 的满子范畴。则固态自由谱都是固态谱，
且一个凝聚态谱为固态谱当且仅当其每阶同伦群固态。
子范畴 $\mathsf{SolidSp}$ 对极限、余极限、扩张皆封闭，
且含入函子 $\mathsf{SolidSp}\subset\mathsf{CondSp}$
有左伴随，称为**固态化**。$\mathsf{SolidSp}$ 从
$\mathsf{CondSp}$ 自然继承 $t$ 结构，
其心为 $\mathsf{Solid}$。固态谱的 $\underline{\operatorname{Hom}}$ 仍固态，且
$\underline{\operatorname{Hom}}$ 的左伴随为 $-\otimes^\blacksquare-:=(-\otimes-)^\blacksquare$。
:::

::: proof
先证固态自由谱都是固态谱。由于 $\mathbb{S}[S]^\blacksquare=\mathbb{S}^I$，而乘积可以提到
${\operatorname{Hom}}$ 外面，所以只需证 $\mathbb{S}$ 固态，即
$$
{\operatorname{Hom}}(\mathbb{S}[S],\mathbb{S})={\operatorname{Hom}}(\mathbb{S}[S]^\blacksquare,\mathbb{S}).
$$
左边即 $\Gamma(S,\mathbb{S})$，之前已经算过，为 $\mathbb{S}^{\oplus I}$。
要证 ${\operatorname{Hom}}(\mathbb{S}^I,\mathbb{S})=\mathbb{S}^{\oplus I}$。
为此考虑对 $M\in\mathsf{CondSp}$
自然的映射 $M^{\oplus I}\to{\operatorname{Hom}}(\mathbb{S}^I,M)$。$M=\mathbb{Z}$ 时由前
$$
{\operatorname{Hom}}(\mathbb{S}^I,\mathbb{Z})={\operatorname{Hom}}_\mathbb{Z}(\mathbb{S}^I\otimes\mathbb{Z},\mathbb{Z})={\operatorname{Hom}}_\mathbb{Z}(\mathbb{Z}^I,\mathbb{Z})=\mathbb{Z}^{\oplus I}.
$$
故 $M$ 为有限个 $\mathbb{Z}$ 的扩张时它也是同构。所以
$$
{\operatorname{Hom}}(\mathbb{S}^I,\mathbb{S})=\lim_n{\operatorname{Hom}}(\mathbb{S}^I,\tau_{\le n}\mathbb{S})
=\lim_n(\tau_{\le n}\mathbb{S})^{\oplus I}=\mathbb{S}^{\oplus I}.
$$

显然 $\mathsf{SolidSp}$ 对极限、扩张封闭。暂以 $\mathsf{SolidSp}'$
记 $\mathsf{CondSp}$ 中各阶同伦群固态的东西的满子范畴。先证
$\mathsf{SolidSp}'\subseteq\mathsf{SolidSp}$。取 $X\in\mathsf{SolidSp}'$，
要证 $X\in\mathsf{SolidSp}$。由 $X=\lim_n\tau_{\le n}X$
可设 $X$ 上有界。
由于 $\mathbb{S}[S],\mathbb{S}[S]^\blacksquare\in\mathsf{CondSp}_{\ge0}$，当
$X\in\mathsf{CondSp}_{<-n}$ 时有
$$
{\operatorname{Hom}}(\mathbb{S}[S],X),{\operatorname{Hom}}(\mathbb{S}[S]^\blacksquare,X)\in\mathsf{CondSp}_{<-n},
$$
所以由于 $\mathsf{SolidSp}$ 定义条件可逐阶同伦群验证，可设
$X$ 下有界。现在 $X$ 有界，
是有限个固态交换群的平移的扩张，故可设 $X\in\mathsf{Solid}$。
此时
$$
{\operatorname{Hom}}(\mathbb{S}[S],X)={\operatorname{Hom}}_\mathbb{Z}(\mathbb{Z}[S],X)
={\operatorname{Hom}}_\mathbb{Z}(\mathbb{Z}[S]^\blacksquare,X)={\operatorname{Hom}}(\mathbb{S}[S]^\blacksquare,X).
$$

再证 $\mathsf{SolidSp}\subseteq\mathsf{SolidSp}'$ 以及剩下的命题。
由同伦群长正合列以及 $\mathsf{Solid}$ 对核、余核、扩张封闭立得
$\mathsf{SolidSp}'$ 对扩张封闭。由于一般的余极限可分为有限余极限与滤余极限两步，
而稳定无穷范畴中有限余极限由有限直和与纤维列组成，取同伦群又与滤余极限交换，
可得 $\mathsf{SolidSp}'$ 对余极限封闭。

现取一般的 $X\in\mathsf{CondSp}$。由抽象废话，层是米田层的余极限，
谱是无穷悬挂谱的平移的余极限，故 $X$ 可写成余极限
$X=\operatornamewithlimits{colim}_{c\in\mathcal{C}}\mathbb{S}[S_c][-n_c]$，$\mathcal{C}$
为指标范畴，各 $S_c$ 投射有限。记
$$
X^\blacksquare=\operatornamewithlimits{colim}_{c\in\mathcal{C}}\mathbb{S}[S_c]^\blacksquare[-n_c],
$$
则由于 $\mathsf{SolidSp}'$ 对余极限封闭以及
$\mathbb{S}[S]^\blacksquare=\mathbb{S}^I\in\mathsf{SolidSp}'$，
$X^\blacksquare\in\mathsf{SolidSp}'\subseteq\mathsf{SolidSp}$。
由 $\mathsf{SolidSp}$ 定义条件可得 ${\operatorname{Hom}}(X,-)$ 与
${\operatorname{Hom}}(X^\blacksquare,-)$ 作为其上的函子自然同构，即含入函子
$\mathsf{SolidSp}\subset\mathsf{CondSp}$ 有左伴随，其像在
$\mathsf{SolidSp}'$ 中。这样也就得到
$\mathsf{SolidSp}\subseteq\mathsf{SolidSp}'$。剩下的事情显然。
:::

接下来计算一些固态化。

::: notation
设 $X$ 为 CW 复形。则它作为拓扑空间可以当成凝聚态集，
之前已经将其也记作 $X$。但它的伦型还能看成生象，如果这再记作
$X$ 将导致混淆。现将其记作 $\mathrm{h} X$。
:::

以下定理沟通了拓扑空间与其伦型。

::: theorem {@伦型}
对 CW 复形 $X$，在 $\mathsf{CondAni}$ 中有自然映射
$X\to\mathrm{h} X$，为形如 $X\to Y$，$Y$ 离散的映射中初始者。
另外 $\mathbb{S}[X]^\blacksquare=\mathbb{S}[\mathrm{h} X]$ 离散。
:::

::: proof
由 @CW复形作为凝聚态集，$X$ 是其有限子复形的滤余极限，
从而是一些闭胞腔 $D^n$ 的余极限，故只需对 $D^n$ 证，即证对任意
$Y$ 离散，${\operatorname{Hom}}(D^n,Y)={\operatorname{Hom}}(*,Y)=Y$，以及
$\mathbb{S}[D^n]^\blacksquare=\mathbb{S}$。

由于 ${\operatorname{Hom}}(D^n,Y)=\lim_d{\operatorname{Hom}}(D^n,\tau_{\le d}Y)$，
只需证 $Y$ 同伦群集中在 $[0,d]$ 的情形。由于检验映射是同构只需逐同伦群检验，
而 ${\operatorname{Hom}}(D^n,-)$ 把纤维列变为纤维列，由同伦群长正合列，
可将 $Y$ 再拆解，设其只有一个不平凡的同伦群，
设 $\pi_dY$ 不平凡。又由于 $\Omega$ 可逐开集取，
与 ${\operatorname{Hom}}(D^n,-)=\Gamma(D^n,-)$ 交换，而
$\pi_i=\pi_0\Omega^i$，故只需验证
$$
\pi_0{\operatorname{Hom}}(D^n,Y)=\pi_0Y.
$$
$d=0$ 时 $Y\in\mathsf{Set}\subset\mathsf{Cond}$，
依定义 $\pi_0{\operatorname{Hom}}(D^n,Y)={\operatorname{Hom}}_{\mathsf{Top}}(D^n,Y)=Y$。$d=1$
时 $Y=BG$ 对 $G\in\mathsf{Grp}$。由下面的 @分类空间的具体描述，
$$
\pi_0{\operatorname{Hom}}(D^n,BG)=
\{\mathsf{Cond}\text{ 拓扑下 }D^n\text{ 的 }G\text{ 覆叠空间同构类}\},
$$
用 $D^n$ 单连通即得结论。$d\ge2$ 时 $Y=K(G,d)=\Omega^{\infty-d}G$，
$G\in\mathsf{Ab}\subset\mathsf{Sp}$，此时由 @离散模的上同调 知
$$
{\operatorname{Hom}}(D^n,\Omega^{\infty-d}G)=\Omega^{\infty-d}{\operatorname{Hom}}(D^n,G)
=\Omega^{\infty-d}G.
$$

由于 $\mathbb{S}[\mathrm{h} X]$ 为离散，从而固态，所以有下有界对象的自然映射
$\mathbb{S}[X]^\blacksquare\to\mathbb{S}[\mathrm{h} X]$。由 @CHaus的自由模的固态化，
该映射张量积 $\mathbb{Z}$ 之后为同构，故它本来就是同构。
:::

::: lemma {@分类空间的具体描述}
对 $G\in\mathsf{CondGrp}$，作分类空间
$BG\in\mathsf{CondAni}_{\le1}$，即对极不连通的 $S$ 定义
$BG(S)=B(G(S))\in\mathsf{Ani}_{\le1}$。则对
$X\in\mathsf{CHaus}$，$\Gamma(X,BG)\in\mathsf{Ani}_{\le1}$
为 $X$ 上 $G$ 主丛组成的群胚，即范畴
$$
\{G\text{-}\mathsf{Cond}\ni E\to X\mid
\exists U\in\mathsf{CHaus},\,U\twoheadrightarrow X,\,
E\times_XU\cong G\times U\},
$$
其中 $G\text{-}\mathsf{Cond}$ 表示带 $G$ 作用的凝聚态集范畴。
当 $G\in\mathsf{Grp}$ 为离散时，这等价于拓扑 $G$
主丛即 $G$ 覆叠空间的群胚。
:::

::: proof
对于一般命题，只需注意到写出来的群胚显然能关于 $X$ 下降，
并且在极不连通空间上确实是分类空间。$G$ 离散时要证明凝聚态
$G$ 主丛都来自拓扑 $G$ 主丛。

先证 $E$ 来自拓扑空间。取凝聚态主丛 $E\to X$ 及平凡化
$U\twoheadrightarrow X$，$E\times_XU\cong G\times U$。
令 $E'$ 为 $E(*)$ 以第一节中方法赋予拓扑然后再视为凝聚态集，
则有自然映射 $E\to E'$。由于 $E\times_XU\cong G\times U$
来自拓扑空间，故 $E\to E'$ 沿覆盖 $U\twoheadrightarrow X$
基变换之后是同构，所以 $E\cong E'$ 来自拓扑空间。事实上，
$E=\operatorname{coeq}(E\times_XU\times_XU\rightrightarrows
  E\times_XU)$，为局部紧空间 $E\times_XU\cong G\times U$
商去紧合的等价关系，也是局部紧拓扑空间。

现在相当于有带 $G$ 作用的局部紧拓扑空间 $E$ 以及映射 $p\colon E\to X$，
满足 $E\times_XU\cong G\times U$，要证每个 $x\in X$
都有邻域 $V$ 使得 $E\times_XV\cong G\times V$。取 $x$
一个原像 $e$。由 $E\times_XU\cong G\times U$
易得 $p^{-1}(x)=Ge$ 为 $E$ 的离散闭子集。只需找到
$e$ 的邻域 $W$ 使得对任意非平凡元 $g\in G$，$gW\cap W=\emptyset$。
任取一紧邻域 $W'\ni e$，则 $Ge\cap W'$ 有限，因为它既紧又离散。
于是缩小 $W'$，可设 $Ge\cap W'=\{e\}$。取
$W=\{w\in W'\mid W'\cap Gw=\{w\}\}$，
则它显然包含 $e$；拉回到 $U$ 上验证，容易发现它开；
它的取法保证了对 $g\ne1$，$gW\cap W=\emptyset$。
:::

@CHaus的自由模的固态化 在这里也成立吗，我不太知道。

::: conjecture
对$X\in\mathsf{CHaus}$，
$$
\mathbb{S}[X]^\blacksquare=\underline{\operatorname{Hom}}(\Gamma(X,\mathbb{S}),\mathbb{S}).
$$
:::

@承诺 倒是对的。

::: exercise
定义 $\mathbb{S}_p=\lim_\mathsf{CondSp}\operatorname{cofib}(p^n\colon\mathbb{S}\to\mathbb{S})$。
如用更 $\infty$-范畴的方式定义 $\mathsf{CondSp}_p$ 为稳定 $\infty$-范畴
$\mathsf{CondSp}$ 商去那些 $p\colon X\to X$
是同构的 $X$（相当于局部化对应的映射 $X\to0$），并用商函子的右伴随
$\mathsf{CondSp}_p\to\mathsf{CondSp}$ 将其视为 $\mathsf{CondSp}$
的满子范畴，将商函子本身称为“$p$ 完备化”，则
$\mathbb{S}_p$ 为 $\mathbb{S}$ 的 $p$ 完备化。证明
$$
\mathbb{S}_p\otimes^\blacksquare\mathbb{S}_p=\mathbb{S}_p;\;
\mathbb{S}_p\otimes^\blacksquare\mathbb{S}_\ell=0.
$$
:::

```terms
凝聚态生象:
  en: condensed anima
凝聚态谱:
  en: condensed spectrum
```
