---
title: Hausdorff 测度
categories: [测度论]
notices:
  - name: 问题
    items:
      - “定义与性质”一节 Carathéodory 判别法的证明中，$E_0$ 的定义似乎应为 $\operatorname{dist}(x,A)\ge 1$，否则 $E_0,E_1,\dots$ 不能覆盖 $E\setminus A$；后面的距离下界似乎应为 $1/(n+1)$ 而非 $1/n$。
      - “与 Lebesgue 测度的关系”一节中，Lebesgue 零测集的引理的证明里，“$|A|\le \sum_{i\in \mathbb{N}} |I_i|$”似乎应为 $\sum_{i\in \mathbb{N}} |I_i|<\varepsilon$。
      - “与 Lebesgue 测度的关系”一节中，“等直径不等式”说的似乎是给定直径的集合中球的体积最大，而不是周长最大；Steiner 对称化 $S_nA$ 的定义式似乎缺少 $\{z\}\times$；等直径不等式的证明中两点距离似乎应为 $\sqrt{|z_1-z_2|^2+|t_1-t_2|^2}$。
      - “与 Lebesgue 测度的关系”一节末尾，“$\mathbb{R}^n$ 上的 $\mathcal{H}^n$ 限制在 $\pi$ 上就是 $\pi$ 上的 $\mathcal{H}^n$”中的 $\mathcal{H}^n$ 似乎应为 $\mathcal{H}^m$。
      - “Hausdorff 维数与分形”一节中，关于 $s=\dim(A)$ 的注记所举的两个例子似乎与“前一种情况”（$\mathcal{H}^s(A)=0$）、“后一种情况”（$\mathcal{H}^s(A)=\infty$）的顺序对调了。
---

**Hausdorff测度**是[[Lebesgue测度]]在[[度量空间]]中的推广，在[[分形]]的理论中被用于定义分数维数。

## 定义与性质

引进Hausdorff测度至少具有两方面的意义。
一是，可以对分形中的分数维数进行严格描述。
例如$[0,1]$中的[[Cantor集]]是Lebesgue零测集，因此不是“一维”集合；
但同时每个点都是聚点，又比通常的“零维”集合“大”一些。
实际上，后文会证明Cantor集的维数是$\ln 2/\ln 3$。
二是，可以作为Lebesgue测度在度量空间的推广。
比如$n$维参数曲面$f\colon \mathbb{R}^n\supseteq U\to \mathbb{R}^m(m\ge n)$的面积，通常被定义为
\[
\int_U \sqrt{\det (Df(x)^TDf(x))}\, dx,\ Df=(\partial_j f_i(x))_{1\le i\le m,1\le j\le n}.
\]
实际上，这就是$n$维Hausdorff测度。

回忆Lebesgue测度的定义，首先对方体定义边长乘积为其测度，然后对一般的集合用可数个方体进行覆盖，
并取这样的覆盖的测度之和的下确界作为该集合的测度。
取方体作为搭建Lebesgue测度的基本单元具有合理性，能够给证明带来很多便利。
但一般的度量空间中并无方体的概念，取而代之的是球体。
熟知$\mathbb{R}^n$中单位球的测度是
\[
\omega_n:=\dfrac{\pi^{n/2}}{\Gamma(n/2+1)}.
\]
其中$\Gamma(x)$是 [[$\Gamma$ 函数]]。
如果首先定义半径为$r$的球体之测度为$r^n\omega_n$，再对一般的集合利用球体进行可数覆盖，
如此定义出的[[外测度]]是否等于Lebesgue外测度？
答案是肯定的，但证明并不平凡。

设$(X,d)$是度量空间，用$B(x,r)$表示以$x\in X$为球心、半径$r>0$的开球，即
\[
B(x,r):=\{y\in X\mid d(x,y)<r\}.
\]
对于非空集合$A\subseteq X$，记$A$的直径为$\operatorname{diam}(A)$，即
\[
\operatorname{diam}(A):=\sup_{x,y\in A} d(x,y).
\]
如果$A$是“$s$维球”（$s\in [0,\infty)$），则$A$的测度应该是$\omega_s (\operatorname{diam} (A)/2)^s$，
其中对于非整数的$s$仍然定义
\[
\omega_s:=\dfrac{\pi^{s/2}}{\Gamma(s/2+1)}.
\]
这就是Hausdorff测度的出发点，尽管在一般的度量空间中尚无维数这一概念。

::: definition [Hausdorff外测度]
设$(X,d)$是度量空间，$s\in [0,\infty)$，$\delta\in (0,\infty]$。
对于$A\subseteq X$，定义
\[
\mathcal{H}_\delta^s (A)=\inf_{\mathcal{F}} \omega_s \sum_{F\in \mathcal{F}} \left(\dfrac{\operatorname{diam}(F)}{2}\right)^s.
\]
其中$\mathcal{F}$是$A$的可数覆盖，且满足$\operatorname{diam} (F)<\delta(\forall F\in \mathcal{F})$。

定义$A$的$s$维**Hausdorff外测度**为
\[
\mathcal{H}^s(A):=\lim_{\delta\to 0+} \mathcal{H}^s_\delta (A).
\]
:::

::: remark
在$\mathcal{H}^s_\delta (A)$的定义中，如果满足要求的$\mathcal{F}$不存在，
则规定$\mathcal{H}^s_\delta(A)=\infty$。
特别的，如果$X$是[[可分度量空间]]，则这样的$\mathcal{F}$总是存在。

根据定义，显然$\mathcal{H}_\delta^s(A)$关于$\delta$单调递减，因此$\mathcal{H}^s(A)$总是有定义，并且
\[
\mathcal{H}^s(A)=\sup_{\delta \in (0,\infty]}\mathcal{H}^s_\delta (A).
\]

如果$A$是[[全有界]]的，则$\mathcal{F}$可以取成有限覆盖，从而$\mathcal{H}^s_\delta(A)<\infty$。
但这并不保证$\mathcal{H}^s(A)<\infty$，
比如说$\mathbb{R}^2$中的闭单位球的一维Hausdorff测度等于
$\infty$（这件事在讨论Hausdorff维数之后会是自然的）。
:::

::: remark
在$\mathcal{H}^s_\delta (A)$的定义中，可以对$\mathcal{F}$施加额外的要求，比如

- 要求每个$F\in \mathcal{F}$都包含于$A$且$\operatorname{diam}(F)<\infty$。
  如若不然，当$s>0$时就会导致求和等于$\infty$，对于取$\inf$没有影响；
  而当$s=0$时，后文将证明$\mathcal{H}^0$就是计数测度，从而亦无影响。

- 因为取闭包不影响直径，所以可以要求$F\in \mathcal{F}$都是闭集。

- 还可以要求$F\in \mathcal{F}$都是开集，这是因为将$F$换成开集
  \[
  \{x\in X\mid \operatorname{dist}(x,F)<\varepsilon\},
  \]
  则直径至多增加$2\varepsilon$。

:::

下面将证明[[Borel集]]都是$\mathcal{H}^s$-可测集，需要用到Caratheodory判别法。
回忆对于外测度$\mu$，集合$A$可测的定义是
\[
\mu(E)=\mu(E\cap A)+\mu(E\setminus A),\ \forall E\subseteq X.
\]
为了验证$A$是可测集，只需证明当$\mu(E)<\infty$时
\[
\mu(E)\ge \mu(E\cap A)+\mu(E\setminus A).
\]
全体可测集构成[[$\sigma$-代数]]，所以为了证明Borel集都可测，只需证明闭集都可测。

::: lemma [Caratheodory判别法]
设$(X,d)$是度量空间，$\mu$是外测度，对任意$A,B\subseteq X$，如果
\[
\operatorname{dist}(A,B)>0 \Rightarrow \mu(A\cup B)=\mu(A)+\mu(B),
\]
则所有Borel集都是$\mu$-可测集。
:::

::: proof
只需证明当$A$是闭集时，如果集合$E\subseteq X$满足$\mu(E)<\infty$，则
\[
\mu(E)\ge \mu(E\cap A)+\mu(E\setminus A).
\]

对于$i\in \mathbb{N}$，定义
\[
E_i=\{x\in E\mid 1/(i+1)\le \operatorname{dist}(x,A)<1/i\},
\]
以及$E_0=\{x\in E\mid \operatorname{dist}(x,A)>1\}$。
因为$A$是闭集，所以$E_0,E_1,E_2,\dots $给出$E\setminus A$的一个划分。

对任意$n\in \mathbb{N}$，因为$\operatorname{dist}(E\cap A,\bigcup_{i=0}^n E_i)\ge 1/n>0$，
根据次可数可加性以及条件有
\[
\begin{aligned}
  \mu(E\cap A)+\mu(E\setminus A)&\le \mu(E\cap A)+\mu\left(\bigcup_{i=0}^n E_i\right)+\sum_{i=n+1}^\infty \mu(E_i)\\
  &=\mu\left((E\cap A)\cup \left(\bigcup_{i=0}^n E_i\right)\right)+\sum_{i=n+1}^\infty \mu(E_i)\\
  &\le \mu(E)+\sum_{i=n+1}^\infty \mu(E_i).
\end{aligned}
\]

为了证明结论，只需验证$\sum_{i=0}^\infty \mu(E_i)<\infty$。
而这是因为，当$|i-j|\ge 2$时$\operatorname{dist}(E_i,E_j)>0$，所以
\[
\sum_{i=0}^n \mu(E_{2i})=\mu\left(\bigcup_{i=0}^n E_{2i}\right)\le \mu(E),
\]
\[
\sum_{i=0}^n \mu(E_{2i+1})=\mu\left(\bigcup_{i=0}^n E_{2i+1}\right)\le \mu(E).
\]
故$\sum_{i=0}^\infty \mu(E_i)\le 2\mu(E)<\infty$，这就完成了证明。
:::

::: theorem {@positivedistance}
设$(X,d)$是度量空间，$s\in [0,\infty)$，$\delta\in (0,\infty]$。
如果$A,B\subseteq X$且$\operatorname{dist}(A,B)>0$，则对$\delta<\operatorname{dist}(A,B)$有
\[
\mathcal{H}^s_\delta(A\cup B)=\mathcal{H}^s_\delta (A)+\mathcal{H}^s_\delta (B).
\]
特别的，此时有$\mathcal{H}^s(A\cup B)=\mathcal{H}^s(A)+\mathcal{H}^s(B)$。
:::

::: proof
设$\mathcal{F}$是$A\cup B$的可数覆盖且$\operatorname{diam}(F)<\delta(\forall F\in \mathcal{F})$，
则每个$F\in \mathcal{F}$不可能同时与$A,B$都相交。
从而可以将$\mathcal{F}$划分为$\mathcal{F}_A\cup \mathcal{F}_B$，
使得$\mathcal{F}_A,\mathcal{F}_B$分别构成$A,B$的覆盖，故
\[
\sum_{F\in \mathcal{F}}\omega_s \left(\dfrac{\operatorname{diam}(F)}{2}\right)^s=\sum_{F\in \mathcal{F}_A}\omega_s \left(\dfrac{\operatorname{diam}(F)}{2}\right)^s+\sum_{F\in \mathcal{F}_B}\omega_s \left(\dfrac{\operatorname{diam}(F)}{2}\right)^s\ge \mathcal{H}^s_\delta (A)+\mathcal{H}^s_\delta (B).
\]
左边对$\mathcal{F}$取下确界即证。
:::

::: corollary
Borel集都是$\mathcal{H}^s$-可测集。
:::

::: proof
根据Caratheodory判别法和 @positivedistance 即证。
:::

::: remark
一般来讲，Borel集并不一定是$\mathcal{H}^s_\delta$-可测集。
比如说考虑平面上一条长度为$1$的水平线段$[0,1]\times \{0\}$，
则它的$\mathcal{H}^1_\delta$-外测度等于$1$。
对于$\varepsilon\ll \delta$，考虑两条距离为$\varepsilon$的水平线段$[0,1]\times \{0,\varepsilon\}$，
则它的$\mathcal{H}^1_\delta$-外测度近似于$1$。
直观来看，这是因为$\mathcal{H}^s_\delta$只能区分距离超过$\delta$的点。
:::

线性空间中的伸缩和平移变换与Hausdorff测度是相容的，即一个“$s$维”的集合经过平移和伸缩$r$倍，
得到的集合的测度应该是原来的$r^s$倍。

::: theorem
设$(X,d)$是度量空间且$X$是线性空间，满足$d(rx,ry)=rd(x,y)(\forall r>0)$以及$d(x+z,y+z)=d(x,y)$，则
\[
\mathcal{H}^s_\delta (x+rA)=r^s\mathcal{H}^s_{\delta/r} (A),\ \forall A\subseteq X,\ x\in X,\ r>0.
\]
其中$x+rA:=\{x+ry\mid y\in A\}$。特别的，$\mathcal{H}^s(x+rA)=r^s\mathcal{H}^s(A)$。
:::

::: proof
条件表明$\operatorname{diam} (x+rF)=r\operatorname{diam}(F)$，根据$\mathcal{H}^s_\delta$的定义即证。
:::

Hausdorff测度并不太直观，除了下一节讨论的与Lebesgue测度的关系之外，
也许唯一便于理解的就是$\mathcal{H}^0$。

::: theorem
$\mathcal{H}^0$就是计数测度，即$\mathcal{H}^0(A)=\#A$。
:::

::: proof
对于单点集，任何覆盖都会对定义中的求和贡献$1$，所以$\mathcal{H}^0(\{x\})=1$。
如果$A$至多可数，则根据可数可加性即证。
而如果$A$不可数，取可数无限子集$N\subseteq A$，有$\mathcal{H}^0(A)\ge \mathcal{H}^0(N)=\infty$，
结论也成立。
:::

## 与Lebesgue测度的关系

已在$\mathbb{R}^n$中定义了两种“$n$维”外测度，
即Hausdorff外测度$\mathcal{H}^n$和Lebesgue外测度$\mathcal{L}^n$。
本节将要证明二者是相等的，实际上有如下更强的结果。

::: theorem {@H^n=L^n}
在$\mathbb{R}^n$中，对任意$\delta\in (0,\infty]$，
都有$\mathcal{H}^n=\mathcal{H}^n_\delta=\mathcal{L}^n$。
:::

证明分为两步，
即分别论述$\mathcal{L}^n\ge \mathcal{H}_\delta^n(\forall \delta>0)$和
$\mathcal{H}^n_\infty\ge \mathcal{L}^n$。
先来证明第一个式子，需要如下引理。为了方便，时常用$|A|$代表$\mathcal{L}^n(A)$。

::: lemma {@cover}
设$A\subseteq \mathbb{R}^n$是开集且$|A|<\infty$，
则存在可数个两两不交的闭球$\overline{B}_i(i\in \mathbb{N})$，
使得$|A\setminus \bigcup_{i\in \mathbb{N}}\overline{B}_i|=0$。
:::

::: proof
熟知开集可以写成可数个开方体的无交并再并上一个零测集。
比如说，对于$k\in \mathbb{N}$，将$\mathbb{R}^n$分割为边长$2^{-k}$的方体，取出所有包含在$A$中者。
$A$去掉这些方体的闭包的并还是一个开集，再对$k+1$进行这样的操作。
因为每一步剩下的都是开集，所以最终$A$可以写成可数个这样的闭方体之并，
并且任何两个闭方体至多交于边界。

存在只依赖于$n$的常数$\lambda\in (0,1)$，使得对每个开方体$I_i$，
可以取闭球$\overline{B}_i\subset I_i$，满足$|\overline{B}_i|\ge \lambda |I_i|$。
这些$\overline{B}_i$两两不交，
并且$|A\setminus \bigcup_{i\in \mathbb{N}}\overline{B}_i|\le (1-\lambda) |A|$。
注意到$A\setminus \bigcup_{i\in \mathbb{N}}\overline{B}_i$还是开集，重复这样的操作，
每次去掉一些两两不交的闭球之后测度不超过原来的$1-\lambda$倍。
因为$|A|<\infty$，所以可数次之后剩下的部分测度为$0$。
:::

::: lemma
设$A\subseteq \mathbb{R}^n$，如果$|A|=0$，则$\mathcal{H}^n(A)=\mathcal{H}^n_\delta(A)=0$。
:::

::: proof
对任意$\varepsilon>0$，存在可数个边长小于$\delta/\sqrt{n}$的小方体$I_i(i\in \mathbb{N})$覆盖$A$，
且$|A|\le \sum_{i\in \mathbb{N}} |I_i|$。
因为$\operatorname{diam}(I_i)$等于边长的$\sqrt{n}$倍，从而小于$\delta$，根据定义有
\[
\mathcal{H}^n_\delta(A)\le \sum_{i\in \mathbb{N}} \omega_n \left(\dfrac{\operatorname{diam}(I_i)}{2}\right)^n=\omega_n \left(\dfrac{\sqrt{n}}{2}\right)^n\sum_{i\in \mathbb{N}}|I_i|\le \omega_n \left(\dfrac{\sqrt{n}}{2}\right)^n\varepsilon.
\]
由$\varepsilon$的任意性即证。
:::

现在可以来证明$\mathcal{L}^n\ge \mathcal{H}^n_\delta$，不妨设$|A|<\infty$。
如果$A$是开集，观察 @cover 的证明，
实际上可以取可数个直径小于$\delta$且两两不交的闭球$\overline{B}_i(i\in \mathbb{N})$，
使得$|A\setminus \bigcup_{i\in \mathbb{N}}\overline{B}_i|=0$。
由此可知
\[
|A|=\sum_{i\in \mathbb{N}} |\overline{B}_i|=\sum_{i\in \mathbb{N}} \omega_n \left(\dfrac{\operatorname{diam}(\overline{B}_i)}{2}\right)^n\ge \mathcal{H}^n_\delta \left(\bigcup_{i\in \mathbb{N}} \overline{B}_i\right)=\mathcal{H}^n_\delta (A).
\]
对于一般的集合$A$，根据正则性，
存在一列开集$U_i(i\in \mathbb{N})$使得$A\subseteq U_i$且$|U_i|\to |A|$，所以
\[
\mathcal{H}^n_\delta (A)\le \mathcal{H}^n_\delta(U_i)\le |U_i|\to |A|.
\]
于是完成了这一半的证明。

另一半不等式需要使用如下命题，可以称为“等直径不等式”，意思是说给定直径的集合中，圆是周长最大者。
证明的方法名为**Steiner对称化**，即将$\mathbb{R}^n$写为$\mathbb{R}^{n-1}\times \mathbb{R}$，
对于每个$z\in \mathbb{R}^{n-1}$，
将截面$A_z:=\{t\in \mathbb{R}\mid (z,t)\in A\}$替换成一条线段
$(-\mathcal{L}^1(A_z)/2,\mathcal{L}^1(A_z)/2)$。
定义$A$关于第$n$个坐标的Steiner对称化为
\[
S_nA:=\bigcup_{z\in \mathbb{R}^{n-1}} (-\mathcal{L}^1(A_z)/2,\mathcal{L}^1(A_z)/2).
\]
如果$A$是Lebesgue可测集且$|A|<\infty$，则根据[[Fubini定理]]，
$z\mapsto \mathcal{L}^1(A_z)$是可测函数，所以$S_nA$依然Lebesgue可测，并且$|S_nA|=|A|$。

::: theorem [等直径不等式]
设$A\subseteq \mathbb{R}^n$，则$|A|\le \omega_n (\operatorname{diam}(A)/2)^n$。
:::

::: proof
因为取闭包不改变直径，并且测度可能增加，所以不妨设$A$是闭集，
又可以不妨设$\operatorname{diam}(A)<\infty$，从而$|A|<\infty$。

考虑Steiner对称化$S_nA$，注意到$\operatorname{diam}(S_nA)\le \operatorname{diam}(A)$。
这是因为任何两点$(z_1,t_1),(z_2,t_2)\in S_nA$的距离是$|z_1-z_2|+|t_1-t_2|$。
存在$(z_i,t_i')\in A$使得$|t_1'-t_2'|\ge |t_1-t_2|$，
从而$(z_i,t_i')$之间的距离不小于$(z_i,t_i)$之间的距离。
因此，只需对$A$的Steiner对称化进行证明，也就是说可以不妨设$A$关于第$n$个坐标对称。

再考虑对第$n-1$个分量进行Steiner对称化，注意这一操作不会破坏关于第$n$个分量的对称性。
类似的，对所有$n$个分量都进行Steiner对称化之后，可以不妨设$A$关于每个分量都是对称的，从而
\[
x\in A \Rightarrow -x\in A.
\]
这就说明$A$的直径一定是被连线过原点的两点取到，
从而$A$包含在$\overline{B}(0,\operatorname{diam}(A)/2)$中，证毕。
:::

::: remark
如果不经过Steiner对称化，那么以$A$的直径为直径的圆未必能包含$A$，比如$A$是等边三角形的情况。

如下事实在上面的证明中不需要使用但值得指出。
对于紧集$A$，函数$\mathbb{R}^{n-1}\ni z\mapsto \mathcal{L}^1(A_z)$是上半连续的。
于是如果在Steiner对称化的定义中用闭区间代替开区间（并去掉那些$\mathcal{L}^1(A_z)=0$的点），
则$S_nA$仍然是紧集。
:::

现在来证明$\mathcal{H}^n_\infty\ge \mathcal{L}^n$，不妨设$\mathcal{H}^n(A)<\infty$。
对任意$\varepsilon>0$，存在$A$的可数覆盖$\mathcal{F}$，使得
\[
\sum_{F\in \mathcal{F}} \omega_n \left(\dfrac{\operatorname{diam}(F)}{2}\right)^n\le \mathcal{H}^n_\infty(A)+\varepsilon.
\]
根据等直径不等式，有
\[
|A|\le \sum_{F\in \mathcal{F}}|F|\le \sum_{F\in \mathcal{F}} \omega_n \left(\dfrac{\operatorname{diam}(F)}{2}\right)^n\le \mathcal{H}^n_\infty (A)+\varepsilon.
\]
根据$\varepsilon$的任意性即证。

综上所述，结合Hausdorff测度的性质，对任意$\lambda>0$和任意$A\subseteq \mathbb{R}^n$有
\[
|A|\le \mathcal{H}^n_\infty(A)\le \mathcal{H}^n_\lambda(A)\le \mathcal{H}^n(A)\le |A|.
\]
这就完成了 @H^n=L^n 的证明。

作为推论，考虑$\mathbb{R}^n$的$m$维超平面$\pi$，其上至少有三种自然的“$m$维”测度，
即$\pi$上的$m$维Lebesgue测度、$\mathbb{R}^n$上的$m$维Hausdorff测度在$\pi$上的限制、
$\mathbb{R}^m$上的$m$维Hausdorff测度关于等距嵌入$\mathbb{R}^m\to \pi\hookrightarrow \mathbb{R}^n$
的推出。
前两种相同，是因为$\mathbb{R}^n$上的$\mathcal{H}^n$限制在$\pi$上就是$\pi$上的$\mathcal{H}^n$。
后两种相同，是因为等距同构的空间上的Hausdorff测度自然也相等。

## 与参数曲面面积的关系

一条参数曲线$\Gamma$是指连续单射$f\colon [a,b]\to \mathbb{R}^n$的像集，定义$\Gamma$的长度为
\[
l_\Gamma (a,b):=\sup_{a=x_0<\cdots <x_n=b} \sum_{i=1}^n |f(x_i)-f(x_{i-1})|.
\]
下面说明这一定义与$\mathcal{H}^1$是一致的，证明需要如下关于[[Lipschitz连续映射]]的引理。

::: theorem {@lipimage}
设$f\colon (X,d_X)\to (Y,d_Y)$是Lipschitz连续映射，则
\[
\mathcal{H}^s_\delta f(A)\le \operatorname{Lip}(f)^s \mathcal{H}^s_{\delta/\operatorname{Lip}(f)} (A).
\]
特别的，$\mathcal{H}^s(f(A))\le \operatorname{Lip}(f)^s \mathcal{H}^s (A)$。
:::

::: proof
因为$\operatorname{diam}(f(F))\le \operatorname{Lip}(f)\operatorname{diam} (F)$，根据定义即证。
:::

::: theorem
参数曲线$\Gamma$由连续单射$f\colon [a,b]\to \mathbb{R}^n$给出，
则$l_\Gamma (a,b)=\mathcal{H}^1(\Gamma)$。
:::

::: proof
对任意$a=x_0<\cdots <x_n=b$，考虑$\mathbb{R}^n$到$f(x_{i-1})$和$f(x_i)$所连直线的正交投影。
因为正交投影的Lipschitz常数为$1$，根据 @lipimage 可知
\[
\mathcal{H}^1(f([x_{i-1},x_i]))\ge \mathcal{H}^1([f(x_{i-1}),f(x_i)])=|f(x_i)-f(x_{i-1})|.
\]
这里用到了直线上的$\mathcal{H}^1$就是一维Lebesgue测度。
对$i$求和，并注意一点的$\mathcal{H}^1$等于$0$，得
\[
\sum_{i=1}^n |f(x_i)-f(x_{i-1})|\le \sum_{i=1}^n \mathcal{H}^1(f([x_{i-1},x_i]))=\mathcal{H}^1(\Gamma).
\]
对左边取上确界得$l_\Gamma(a,b)\le \mathcal{H}^1(\Gamma)$。

下面证明反过来的不等式，需要用到弧长参数。
考虑映射$l(x)=\mathcal{H}^1(f([a,x]))$，则$l(a)=0$，$l(b)=l_\Gamma(a,b)$，
并且上面的证明表明$l(x)$关于$x$严格单调递增。
于是可以定义$l(x)$的反函数$l^{-1} \colon [0,l_\Gamma(a,b)]\to [a,b]$，考虑$\Gamma$的另一种参数表示
\[
\begin{aligned}
  g\colon [0,l_\Gamma(a,b)]&\to \mathbb{R}^n,\\
  x&\mapsto f(l^{-1}(x)).
\end{aligned}
\]
因为$|f(x)-f(y)|\le \mathcal{H}^1f([x,y])=|l(x)-l(y)|$，所以
\[
|g(x)-g(y)|=|f(l^{-1}(x))-f(l^{-1}(y))|\le |x-y|.
\]
也就是说$\operatorname{Lip} g\le 1$，再次根据 @lipimage 得
\[
\mathcal{H}^1(\Gamma)\le \mathcal{H}^1([0,l_\Gamma(a,b)])=l_\Gamma (a,b).
\]

综合两方面便完成了证明。
:::

进一步，如果$f$不仅仅是连续单射，而是$C^1$单射，则容易证明
\[
l_\Gamma(a,b)=\int_a^b |f'(x)|\, dx.
\]
这是通常定义$C^1$参数曲线的长度的公式，实际上这就是一维Hausdorff测度。

更一般的，对于$m$维$C^1$参数曲面，即$C^1$单射$f\colon \mathbb{R}^m\supseteq U\to \mathbb{R}^n$，
则定义其面积为
\[
\int_U \sqrt{\det (Df(x)^TDf(x))}\, dx.
\]
实际上，这正是像集的$\mathcal{H}^m$测度。
详细证明参见[[Lipschitz连续映射]]中对于“面积公式”的讨论，那里是对更一般的Lipschitz连续映射进行证明。

## Hausdorff维数与分形

直线之所以是一维，是因为其$\mathcal{H}^1$是正的，而对任何$s>1$都有$\mathcal{H}^s$等于$0$。
一般的，可以用使得$\mathcal{H}^s$为$0$的$s$之下确界定义维数。
这一定义的奇妙之处在于，维数并非线性结构或微分结构所独有，还可以完全由度量给出。

::: definition
设$(X,d)$是度量空间，定义$A\subseteq X$的**Hausdorff维数**为
\[
\dim(A):=\inf\{s\ge 0\mid \mathcal{H}^s(A)=0\}.
\]
:::

理解Hausdorff维数自然首先需要理解$\mathcal{H}^s(A)$关于$s$如何变化。

::: theorem
如果$\mathcal{H}^s(A)<\infty$，则对任意$r>s$，有$\mathcal{H}^r(A)=0$。

另一方面，如果$\mathcal{H}^s(A)>0$，则对一切$0\le r<s$都有$\mathcal{H}^r(A)=\infty$。
:::

::: proof
对任意$\delta>0$，
存在$A$的可数覆盖$\mathcal{F}$满足$\operatorname{diam}(F)<\delta(\forall F\in \mathcal{F})$，并且
\[
\sum_{F\in \mathcal{F}} \omega_s \left(\dfrac{\operatorname{diam}(F)}{2}\right)^s<\mathcal{H}^s_\delta(A)+1\le \mathcal{H}^s(A)+1.
\]
于是
\[
\mathcal{H}^r_\delta (A)\le \sum_{F\in \mathcal{F}} \omega_r \left(\dfrac{\operatorname{diam}(F)}{2}\right)^r\le \dfrac{\omega_r}{\omega_s}\left(\dfrac{\delta}{2}\right)^{r-s}\sum_{F\in \mathcal{F}} \omega_s \left(\dfrac{\operatorname{diam}(F)}{2}\right)^s\le \dfrac{\omega_r}{\omega_s}\left(\dfrac{\delta}{2}\right)^{r-s}(\mathcal{H}^s(A)+1).
\]
令$\delta\to 0+$即证。另一方面的情况正是逆否命题。
:::

::: corollary
当$s<\dim (A)$时，$\mathcal{H}^s(A)=\infty$；当$s>\dim (A)$时，$\mathcal{H}^s(A)=0$。

特别的，如果$\mathcal{H}^s(A)\in (0,\infty)$，则$\dim (A)=s$。
:::

::: remark
当$s=\dim (A)$，也有可能$\mathcal{H}^s(A)\in \{0,\infty\}$。
前一种情况比较简单，比如说任何可数集的Hausdorff维数是$0$，但$0$维Hausdorff测度是$\infty$。
后一种情况，如果不想要$\mathcal{H}^1(\mathbb{R})=\infty$这样的平凡例子，可以利用 @anydim，
在$[n,n+1]$中取一个维数为$1-1/n$的集合，则它们的并是$1$维的，但$1$维Hausdorff测度等于$0$。
:::

Hausdorff测度并无计算的一般方法，导致Hausdorff维度对于一般的集合并不便于求出。
以下是最简单的情况。

::: theorem
当$s>n$时，$\mathcal{H}^s(\mathbb{R}^n)=0$。

作为推论，$\mathbb{R}^n$中非空开集的Hausdorff维数是$n$。
:::

::: proof
因为$\mathbb{R}^n$是可数个方体的并，只需证明$\mathcal{H}^s([0,1]^n)=0$。

对任意$k\in \mathbb{N}$，将$[0,1]^n$的各边$k$等分，分成$k^n$个方体，构成$[0,1]^n$的覆盖，所以
\[
\mathcal{H}^s_{\sqrt{n}/k} ([0,1]^n)\le k^n\cdot \omega_s \left(\dfrac{\sqrt{n}/k}{2}\right)^s=O(k^{n-s}).
\]
令$k\to \infty$即证。
:::

要验证$\mathcal{H}^s(A)=0$，实际上只需要验证$\mathcal{H}^s_\infty(A)=0$，
这在实践中能够带来一些便利。

::: theorem
如果$\mathcal{H}^s_\infty(A)=0$，则$\mathcal{H}^s(A)=0$。
:::

::: proof
如果$s=0$，则结论显然成立，下面假设$s>0$。
对任意$\varepsilon>0$，存在可数覆盖$\mathcal{F}$，使得
\[
\sum_{F\in \mathcal{F}} \omega_s \left( \dfrac{\operatorname{diam}(F)}{2} \right)^s<\varepsilon.
\]
注意到这导致对每个$F\in \mathcal{F}$都有$\operatorname{diam}(F)\le 2(\varepsilon/\omega_s)^{1/s}$，
所以
\[
\mathcal{H}^s_{2(\varepsilon/\omega_s)^{1/s}}(A)\le \varepsilon.
\]
令$\varepsilon\to 0+$即证。
:::

Hausdorff维数与分形有天然的联系。所谓分形是指一个集合与其子集相似，下面以Cantor集为例。

::: example [Cantor集]
将$[0,1]$三等分，去掉中间的一段，得到左右两个闭区间$C_1=[0,1/3]\cup [2/3,1]$；
接下来，再将$C_1$中的两个区间三等分，各自去掉中间的一段，
得到$C_2=[0,1/9]\cup [2/9,1/3]\cup [2/3,7/9]\cup [8/9,1]$；
重复这样的操作，最终定义$C=\bigcap_{n\in \mathbb{N}} C_n$，称为Cantor集。

因为$C_n$是$2^n$个长度为$3^{-n}$的区间，所以$|C_n|\to 0$，从而$|C|=0$。
此外，容易证明$C$中任何一个点都是聚点，从而拓扑学的命题表明$C$是不可数集。
这两方面的观察表明，$C$的维数应当介于$0$和$1$之间。

$C$与自身的左右两部分$C_l,C_r$相似，相似比为$3:1$，这就构成了分形的例子。
假设$s=\dim (C)$，如果能够证明$\mathcal{H}^s(C)\in (0,\infty)$，则利用自相似性可以很简单地求出$s$。
事实上，因为$\mathcal{H}^s(C_l)=\mathcal{H}^s(C_r)=3^{-s}\mathcal{H}^s(C)$，所以
\[
2\cdot 3^{-s}\mathcal{H}^s(C)=\mathcal{H}^s(C).
\]
由此可知$s=\ln 2/\ln 3$。

上面的论述存在一个小问题，即并不知道$\mathcal{H}^s(C)$是否可能是$0$或无穷，其中$s=\ln 2/\ln 3$。
因为$C_n$对应的$2^n$个小区间已经构成$C$的覆盖，所以
\[
\mathcal{H}^s_{3^{-n}}(C)\le 2^n\cdot \omega_s\left(\dfrac{3^{-n}}{2}\right)^s=\dfrac{\omega_s}{2^s}.
\]
令$n\to \infty$可得$\mathcal{H}^s(C)\le \omega_s/2^s<\infty$。

而$\mathcal{H}^s(C)>0$似乎难有直白的证明。
实际上，可以准确求出$\mathcal{H}^s(C)=\omega_s/2^s$，大致的方法如下：
任何$C$的可数覆盖可以不妨设是开覆盖，从而可以用其中有限个开区间盖住$C$，并且可以不妨假设两两不交。
接下来，这些开区间的并一定覆盖了某个$C_n$，如果$C_n$中的某两个子区间$I,J$同时包含在同一个开区间中，
则将其分开分别包含$I,J$是更“经济”的方式。
比如说，如果$I,J$是$C_n$中相邻的两个区间，$K$是$I,J$之间的“空隙”，
如果同时覆盖$I,J$的正好是$I\cup J\cup K$，
由于$I\cup J\cup K$的直径至少是$\operatorname{diam}(I)+\operatorname{diam}(J)$的$3/2$倍，所以
\[
\begin{aligned}
  (\operatorname{diam}(I\cup J\cup K)/2)^s&\ge (3(\operatorname{diam}(I)+\operatorname{diam}(J))/4)^s\\
  &=2\left(\frac{\operatorname{diam}(I)/2+\operatorname{diam}(J)/2}{2}\right)^s\\
  &\ge (\operatorname{diam} (I)/2)^s+(\operatorname{diam}(J)/2)^s.
\end{aligned}
\]
证明$\mathcal{H}^s(C)=\omega_s/2^s$只需将上面的思路严格化。
:::

::: remark
上述求$\dim(C)$的方法只用到了$C$的自相似性，可以推广到一般的分形上。
但如何求出Hausdorff测度仍是困难的问题。

可以定义类Cantor集，即仿照$C$的定义，只是每一步不再是保留两边各$1/3$的区间，
而是改为各保留$1/k(k>2)$。
容易看出如此定义的类Cantor集与Cantor集$C$同胚，且维数是$\ln 2/\ln k$。
由此可知，Hausdorff维数确实是度量性质，而不由拓扑确定。特别的，类Cantor集的维数能够取遍$(0,1)$。

更一般的，可以定义$\mathbb{R}^n$中的类Cantor集，
方法是每一步只留下单位方体中$2^n$个角上边长为$1/k(k>2)$小方体。
则类Cantor集的Hausdorff维数是$\ln 2^n/\ln k$，从而取遍了$(0,n)$，得到下面的命题。
:::

::: theorem {@anydim}
设$s\in [0,n]$，则存在$\mathbb{R}^n$中的紧集$K$，使得$\dim(K)=s$。
:::

::: remark
对于类Cantor集$C'$，如果$\dim (C')=s$，则可以证明$\mathcal{H}^s(C')=\omega_s/2^s$。
这个数正好是理想中直径为$1$的$s$维球的体积。

需要指出的是，$\mathcal{H}^r\times \mathcal{H}^s$通常不等于$\mathcal{H}^{r+s}$。
比如考虑$k=4$的类Cantor集$C'$，则$\dim C'=1/2$且$\mathcal{H}^{1/2}(C')=\omega_{1/2}/\sqrt{2}$，
而$\dim (C'\times C')=1$且$\mathcal{H}^1(C'\times C')=1/2\not =(\mathcal{H}^{1/2}(C'))^2$。

在这个反例中，尚有$\dim(C'\times C')=2\dim (C')$，但一般来讲甚至连这个事情都是不成立的！
因此Hausdorff测度的乘积测度通常更加复杂。
:::

```terms
Hausdorff 测度:
  en: Hausdorff measure
```
