---
title: GAGA一瞥
---

## 基本定义*

GAGA（Géométrie algébrique et géométrie analytique）是横跨复几何和代数几何的桥梁，
是非常重要的结论之一。最初的GAGA来源于J.P.Serre
的奠基性论文[@GAGA56]（后世有一本很基础的书[@AAG07]讲这个），他解决了复射影簇的情况。
而我们聚焦的是著作[@SGA-I]里的推广版本，
其推广到了一般的紧合$\mathbb{C}$概形上。
事实上GAGA也早已有了更多的发展，例如刚性几何里的刚性GAGA，还有代数叠上的GAGA等。
这里我们参考Yan Zhao的笔记来对GAGA做一个简单的介绍，大部分定理也不给出证明。

::: definition
对开集$U\subset\mathbb{C}^n$和其上的全纯函数$f_1,...,f_k$，设其定义的凝聚理想为$\mathscr{I}$。
定义仿射解析空间$(X,\mathscr{O}_X^{\mathrm{Hol}})$
为
\[
X=\{y\in U:f_1(y)=\cdots=f_k(y)=0\}\subset U
\]
和$i^{-1}\mathscr{O}_U^{\mathrm{Hol}}/\mathscr{I}$，其中$i:X\to U$。

一个解析空间$(X,\mathscr{O}_X^{\mathrm{Hol}})$为局部环层空间使得$X$
是Hausdorff的且存在开覆盖使得局部上同构于仿射解析空间。
:::

::: remark
对于正则函数层$\mathscr{O}_X^{\mathrm{Reg}}\subset\mathscr{O}_X^{\mathrm{Hol}}$，
可以证明$\mathscr{O}_{X,x}^{\mathrm{Reg}}\to\mathscr{O}_{X,x}^{\mathrm{Hol}}$
忠实平坦且有同构
$\widehat{\mathscr{O}_{X,x}^{\mathrm{Reg}}}\to\widehat{\mathscr{O}_{X,x}^{\mathrm{Hol}}}$，
见[@GAGA56]。
进而得到$\mathscr{O}_{X,x}\to\mathscr{O}_{X,x}^{\mathrm{Hol}}$忠实平坦。
:::

::: definition
给定$\mathbb{C}$上的局部有限型概形$X$和其有理点空间
$(X(\mathbb{C}),\mathscr{O}_X|_{X(\mathbb{C})})$，
若局部上为$U=\operatorname{Spec}\mathbb{C}[x_1,...,x_n]/I$，
定义$X(\mathbb{C})$局部上赋予拓扑为$\mathbb{C}^n$的子空间拓扑且为$I$内元素的零点，记为
$X^{\operatorname{an}}$，
设局部上
$\mathscr{O}_{X^{\operatorname{an}}}^{\mathrm{Hol}}|_{U^{\operatorname{an}}}:=\mathscr{O}_{\mathbb{C}^n}^{\mathrm{Hol}}/I\mathscr{O}_{\mathbb{C}^n}^{\mathrm{Hol}}$，
从而得到解析化$(X^{\operatorname{an}},\mathscr{O}_{X^{\operatorname{an}}}^{\mathrm{Hol}})$。

因此我们有典范映射$\phi_X:X^{\operatorname{an}}\to X$为
$X^{\operatorname{an}}\to X(\mathbb{C})\subset X$且层映射为
$\phi^{-1}\mathscr{O}_X\to\mathscr{O}_{X^{\operatorname{an}}}^{\mathrm{Hol}}$
为$f\mapsto f\circ\phi_X$。
:::

::: proposition
给定$\mathbb{C}$上的局部有限型概形$X$，考虑函子
\[
\Phi_X:\mathrm{AnSp}\to\mathrm{Sets},\mathcal{X}\mapsto\operatorname{Hom}_{\mathbb{C}}(\mathcal{X},X)
\]
其中后者为局部环层空间的映射。则$\Phi_X$被$X^{\operatorname{an}}$表示。
:::

::: proof [证明思路]
不妨设$X$仿射，注意到：

(i)若$X\subset Y$是开子概形且$Y$满足该性质，则$X$也满足；

(ii)若$X\subset Y$是闭子概形且$Y$满足该性质，则$X$也满足；

(iii)有$(X\times Y)^{\operatorname{an}}\cong X^{\operatorname{an}}\times Y^{\operatorname{an}}$。

回到命题。故不妨设$X=\mathbb{A}^1$，注意到
\[
\begin{aligned}
&\operatorname{Hom}_{\mathbb{C}}(\mathcal{X},\mathbb{A}^1)\cong\operatorname{Hom}_{\mathbb{C}}(\mathbb{C}[x],\Gamma(\mathcal{X},\mathscr{O}_{\mathcal{X}}^{\mathrm{Hol}}))\\
&=\operatorname{Hom}_{\mathbb{C}}(\mathbb{C}\{x\},\Gamma(\mathcal{X},\mathscr{O}_{\mathcal{X}}^{\mathrm{Hol}}))=\operatorname{Hom}_{\mathbb{C}}(\mathcal{X},(\mathbb{A}^1)^{\operatorname{an}}),
\end{aligned}
\]
即可。
:::

::: corollary {@038}
对复局部有限型概形映射$f:X\to Y$而言，
可以唯一提升为$f^{\operatorname{an}}:X^{\operatorname{an}}\to Y^{\operatorname{an}}$满足
$f\circ \phi_X=\phi_Y\circ f^{\operatorname{an}}$。
另外我们还有
$(X\times_ZY)^{\operatorname{an}}\cong X^{\operatorname{an}}\times_{Z^{\operatorname{an}}}Y^{\operatorname{an}}$。
:::

::: remark
事实上大部分$X$和$f$本身的性质都可以遗传到$X^{\operatorname{an}}$和$f^{\operatorname{an}}$上，
参考[@SGA-I]。例如平展对应局部同构，光滑对应光滑。
事实上还有
$\mathrm{Hom}_S(X,Y)\cong \mathrm{Hom}_{S^{\mathrm{an}}}(X^{\mathrm{an}},Y^{\mathrm{an}})$。
:::

::: corollary {@039}
考虑复局部有限型概形$X$和$x\in X(\mathbb{C})$，我们有
\[
\pi_1^{\operatorname{ét}}(X,x)\cong\widehat{\pi_1(X^{\operatorname{an}},x)}
\]
为射有限完备化。
:::

::: proof
由上述 @038，我们有
\[
\begin{aligned}
  \pi_1^{\operatorname{ét}}(X,x)&\cong\varprojlim_{(\mathcal{X}\to X)\in(\operatorname{Fét}/X)}\mathrm{Aut}_X\mathcal{X}\\
  &\cong\varprojlim_{(\mathcal{X}^{\operatorname{an}}\to X^{\operatorname{an}})\in(\mathrm{FTopCov}/X^{\operatorname{an}})}
  \mathrm{Aut}_{X^{\operatorname{an}}}\mathcal{X}^{\operatorname{an}}\\
  &\cong \varprojlim_{(\mathcal{X}^{\operatorname{an}}\to X^{\operatorname{an}})\in(\mathrm{FTopCov}/X^{\operatorname{an}})}
  \pi_1(X^{\operatorname{an}},x)/\pi_1(\mathcal{X}^{\operatorname{an}},x)\\
  &\cong\widehat{\pi_1(X^{\operatorname{an}},x)}
\end{aligned}
\]
为射有限完备化。
:::

::: definition
对于$\phi_X:X^{\operatorname{an}}\to X$和凝聚层$\mathscr{F}\in\mathrm{Coh}(X)$，定义其解析化为
\[
\mathscr{F}^{\operatorname{an}}:=\phi_X^*\mathscr{F}=\phi_X^{-1}\mathscr{F}\otimes_{\phi_X^{-1}\mathscr{O}_X}\mathscr{O}_{X^{\operatorname{an}}}^{\mathrm{Hol}}.
\]
因此得到函子
$\phi_X^*:\mathrm{Coh}(X)\to\mathrm{Coh}(X^{\operatorname{an}}),\mathscr{F}\mapsto\mathscr{F}^{\operatorname{an}}$。
:::

::: remark
(i)有伴随函子$(\phi_X^*,\phi_{X,*})$；

(ii)函子$\phi_X^*$是正合，忠实且保守的。
正合性不难由$\phi_X^{-1}$正合且$\mathscr{O}_{X,x}^{\mathrm{Reg}}\to\mathscr{O}_{X,x}^{\mathrm{Hol}}$
平坦
得到。
忠实性由$X(\mathbb{C})\subset X$稠密且
$\phi_X^{-1}\mathscr{O}_X\to\mathscr{O}_{X^{\operatorname{an}}}^{\mathrm{Hol}}$忠实平坦得到，
保守性根据忠实性和平坦性得到。
:::

## 主要定理*

首先给出一些构造。考虑图表
\[
\begin{tikzcd}
  {X^{\operatorname{an}}} & {Y^{\operatorname{an}}} \\
  X & Y
  \arrow["{f^{\operatorname{an}}}", from=1-1, to=1-2]
  \arrow["{\phi_X}"', from=1-1, to=2-1]
  \arrow["f", from=2-1, to=2-2]
  \arrow["{\phi_Y}"', from=1-2, to=2-2]
\end{tikzcd}
\]
任取$\mathscr{F}\in\mathrm{Coh}(X)$，由$\phi_Y^*$正合，我们有
\[
\begin{aligned}
(Rf_*\mathscr{F})^{\operatorname{an}}&=\phi_Y^*Rf_*\mathscr{F}\to\phi_Y^*Rf_*\phi_{X,*}\mathscr{F}^{\operatorname{an}}\\
&\to\phi_Y^*R(f\circ\phi_X)_*\mathscr{F}^{\operatorname{an}}=\phi_Y^*R(\phi_Y\circ f^{\operatorname{an}})_*\mathscr{F}^{\operatorname{an}}\\
&=R(\phi_Y^*\circ\phi_Y\circ f^{\operatorname{an}})_*\mathscr{F}^{\operatorname{an}}\to Rf^{\operatorname{an}}_*\mathscr{F}^{\operatorname{an}},
\end{aligned}
\]
故得到
\[
\theta^i:(R^if_*\mathscr{F})^{\operatorname{an}}\to R^if^{\operatorname{an}}_*\mathscr{F}^{\operatorname{an}}.
\]

::: theorem [GAGA第一定理] {@GAGA-I}
设$f:X\to Y$是局部有限型$\mathbb{C}$-概形间的紧合映射，
任取$\mathscr{F}\in\mathrm{Coh}(X)$和$i\geq 0$都有
\[
\theta^i:(R^if_*\mathscr{F})^{\operatorname{an}}\cong R^if^{\operatorname{an}}_*\mathscr{F}^{\operatorname{an}}.
\]
:::

::: proof [证明思路]
对于一般情况需要用lemme de dévissage和Chow引理，我们略去，参考[@SGA-I, 定理 XII.4.2]。
我们只给出射影的证明。首先闭浸入的情况不难验证茎得到，故假设$X=\mathbb{P}^n_Y$。
不难证明$\mathscr{F}=\mathscr{O}(n)$的情况（先$\mathscr{O}_X$，再
归纳法证明$\mathscr{O}(n)$）。对一般的$\mathscr{F}\in\mathrm{Coh}(X)$，不难得知存在正合列
\[
0\to\mathscr{G}\to\bigoplus\mathscr{O}_X(n_i)\to\mathscr{F}\to 0.
\]
然后用凝聚层的秩归纳，再用长正合列即可。
:::

::: theorem [GAGA第二定理] {@GAGA-II}
设$X$是紧合$\mathbb{C}$概形和典范映射$\phi_X:X^{\operatorname{an}}\to X$，则函子
\[
\phi_X^*:\mathrm{Coh}(X)\to\mathrm{Coh}(X^{\operatorname{an}}),\mathscr{F}\mapsto\mathscr{F}^{\operatorname{an}}
\]
是范畴等价。
:::

::: proof
我们只证明满忠实的，本质满性比较复杂，参考[@SGA-I, 定理 XII.4.4]。
根据 @GAGA-I，对任何$\mathscr{F},\mathscr{G}\in\mathrm{Coh}(X)$都有
\[
\begin{aligned}
  &\mathrm{Hom}_{\mathscr{O}_X}(\mathscr{F},\mathscr{G})\cong H^0(X,\mathscr{H}om_{\mathscr{O}_X}(\mathscr{F},\mathscr{G}))\\
  &\cong H^0(X^{\mathrm{an}},\mathscr{H}om_{\mathscr{O}_X}(\mathscr{F},\mathscr{G})^{\mathrm{an}})\\
  &\cong H^0(X^{\mathrm{an}},\mathscr{H}om_{\mathscr{O}^{\mathrm{Hol}}_{X^{\mathrm{an}}}}(\mathscr{F}^{\mathrm{an}},\mathscr{G}^{\mathrm{an}}))\\
  &\cong \mathrm{Hom}_{\mathscr{O}^{\mathrm{Hol}}_{X^{\mathrm{an}}}}(\mathscr{F}^{\mathrm{an}},\mathscr{G}^{\mathrm{an}})
\end{aligned}
\]
其中最后一个等式因为凝聚性和$\mathscr{O}_{X,x}\to\mathscr{O}_{X,x}^{\mathrm{Hol}}$平坦。
:::

::: corollary [推广Chow定理]
若$X$是分离局部有限型$\mathbb{C}$概形，
则$X^{\operatorname{an}}$的任何闭解析子空间都是$X$闭子概形的解析化。
:::

::: proof
由于是局部的，不妨设其有限型，根据Nagata紧化不妨设其紧合。然后根据 @GAGA-II 即可得到凝聚理想的对应。
:::
