---
title: 迹映射
---

对相对维数$d$的分离有限型（或$S$-可紧化的）光滑映射$f:X\to Y$且$Y$拟紧拟分离（默认满足），
对在$S$内可逆的$n$，只考虑
$\mathscr{F}$为$\Lambda:=\underline{\mathbb{Z}/n\mathbb{Z}}$-模。
定义$f^!\mathscr{F}:=f^{-1}\mathscr{F}(d)[2d]$，我们目标是构造迹映射
\[
\operatorname{tr}_{X/Y}(\mathscr{F}):Rf_!f^!\mathscr{F}\to\mathscr{F}.
\]

::: lemma
对相对维数$d$的光滑$S$-可紧化的映射$f:X\to Y$和
$\mathscr{F}\in\operatorname{Ab}(Y_{\operatorname{ét}},\Lambda)$，则
$Rf_!f^!\mathscr{F}\in D^{[-2d,0]}(Y_{\operatorname{ét}},\Lambda)$。
:::

::: proof
根据 @CohoDimforLowerShriek 即可得到。
:::

::: theorem
对相对维数$d$的光滑$S$-可紧化的映射$f:X\to Y$，
存在唯一的迹映射
$\operatorname{tr}_{X/Y}'(\mathscr{F}):R^{2d}f_!f^{-1}\mathscr{F}(d)\to\mathscr{F}$，
其中$\mathscr{F}\in\operatorname{Ab}(Y_{\operatorname{ét}},\Lambda)$任取，满足如下性质：

(i)若$k$是可分闭域且$X=\mathbb{A}_k^1,Y=\operatorname{Spec} k,\mathscr{F}:=\Lambda$，
则$\operatorname{tr}_{X/Y}'(\mathscr{F})$即为 @CompactSuppCohCurves；

(ii)若$f$平展（则$f^!=f^{-1}$），则$\operatorname{tr}_{X/Y}'(\mathscr{F})$即为伴随得到的映射；

(iii)映射$\operatorname{tr}_{X/Y}'(\mathscr{F})$对$\mathscr{F}$有函子性；

(iv)映射$\operatorname{tr}_{X/Y}'(\mathscr{F})$和基变换相容；

(v)映射$\operatorname{tr}_{X/Y}'(\mathscr{F})$和映射复合相容（谱序列诱导）。

除此之外，这些决定的迹映射满足如下性质：

(a)若$f$的几何纤维均非空连通，则$\operatorname{tr}_{X/Y}'$是同构；

(b)若$Y=\operatorname{Spec} k$且$k$代数闭，且$X$为光滑曲线$\mathscr{F}=\Lambda$，
则$\operatorname{tr}_{X/Y}'(\mathscr{F})$即为 @CompactSuppCohCurves；

(c)映射$\operatorname{tr}_{X/Y}'(\mathscr{F})$和不同的$n$相容。
:::

::: proof [简要证明]
分为如下步骤：

$\bullet$ **步骤1。** 只需考虑Zariski局部且$\mathscr{F}=\Lambda$。

由于拟紧拟分离，只需要考虑有限覆盖，因此归纳法只考虑两个覆盖的情况。
根据 @PrpDerivedLowerShriek-I(iv)，
不难得知只需考虑Zariski局部。对于$\mathscr{F}$，根据 @PrpDerivedLowerShriek-II(iii)得到
\[
R^{2d}f_!(\Lambda(d)\otimes f^{-1}\mathscr{F})\cong R^{2d}f_!(\Lambda(d))\otimes\mathscr{F},
\]
于是只需证明$\mathscr{F}=\Lambda$的情况。

$\bullet$ **步骤2。** 平展映射的情况。

即为伴随性诱导的映射，故成立。

$\bullet$ **步骤3。** 化归到$f:\mathbb{A}^1_Y\to Y$的情况。

在Zariski局部下有$X\to\mathbb{A}^d_Y\to Y$，根据步骤1和2以及性质的后两条，
只需要考虑$\mathbb{A}^d_Y\to Y$。
再由最后一条，只需要考虑$f:\mathbb{A}^1_Y\to Y$的情况。

$\bullet$ **步骤4。** 定义$f:\mathbb{A}^1_Y\to Y$的情况并验证良定义性。

考虑紧化
\[
\begin{tikzcd}
  {\mathbb{A}^1_Y} & {\mathbb{P}^1_Y} & {\mathbb{P}^0_Y} \\
  & Y
  \arrow["{f'}", from=1-2, to=2-2]
  \arrow["f"', from=1-1, to=2-2]
  \arrow[from=1-3, to=2-2]
  \arrow["j", hook, from=1-1, to=1-2]
  \arrow["i"', hook', from=1-3, to=1-2]
\end{tikzcd}
\]
于是$R^1f_!\Lambda=R^1f'_*(j_!\Lambda)$。
考虑$0\to j_!j^{-1}\Lambda\to\Lambda\to i_*i^{-1}\Lambda\to 0$
和$R^1f'_*(\mathbb{G}_m)\cong\mathbb{Z}_Y$，即可得到$R^2f_!\Lambda=R^2f'_*\Lambda=\Lambda_Y$。
良定义忽略。
:::

::: definition
对相对维数$d$的光滑$S$-可紧化的映射$f:X\to Y$，定义迹映射为
\[
\operatorname{tr}_{X/Y}\mathscr{F}:Rf_!f^!\mathscr{F}\to\tau_{\geq 2d}Rf_!f^!\mathscr{F}=R^{2d}f_!f^!\mathscr{F}[-2d]\to\mathscr{F}.
\]
:::

::: lemma
对相对维数$d$的光滑$S$-可紧化的映射$f:X\to Y$和
$H\in D^-(X_{\operatorname{ét}},\Lambda),K\in D^+(X_{\operatorname{ét}},\Lambda)$，有典范映射
\[
a:Rf_*R\mathscr{H}om(H,K)\to R\mathscr{H}om(Rf_!H,Rf_!K).
\]
:::

::: proof
考虑紧化
\[
\begin{tikzcd}
  X & {\overline{X}} \\
  S
  \arrow["f"', from=1-1, to=2-1]
  \arrow["j", hook, from=1-1, to=1-2]
  \arrow["{f'}", from=1-2, to=2-1]
\end{tikzcd}
\]
取内射预解$j_!H\to\mathscr{I}^*,j_!K\to\mathscr{J}^*$，
不难得知$j^{-1}\mathscr{J}^*$也是$K$的内射预解（@001(iv)），
故有
\[
\begin{aligned}
&j_*R\mathscr{H}om(H,K)=j_*\mathscr{H}om(H,j^{-1}\mathscr{J}^*)\\
&=\mathscr{H}om(j_!H,\mathscr{J}^*)=\mathscr{H}om(\mathscr{I}^*,\mathscr{J}^*).
\end{aligned}
\]
作用$Rf'_*$即可得到
\[
\begin{aligned}
&Rf_*'j_*R\mathscr{H}om(H,K)=Rf_*'\mathscr{H}om(\mathscr{I}^*,\mathscr{J}^*)\\
&\to \mathscr{H}om(Rf_*'\mathscr{I}^*,Rf_*'\mathscr{J}^*)=R\mathscr{H}om(Rf_!H,Rf_!K).
\end{aligned}
\]
故得到$Rf_*R\mathscr{H}om(H,K)\to R\mathscr{H}om(Rf_!H,Rf_!K)$。
:::

::: theorem [Grothendieck] {@TraceIsoAdj}
对相对维数$d$的光滑$S$-可紧化的映射$f:X\to Y$，
取
$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}},\Lambda),\mathscr{G}\in\operatorname{Ab}(Y_{\operatorname{ét}},\Lambda)$，
则典范映射
\[
Rf_*R\mathscr{H}om(\mathscr{F},f^!\mathscr{G})\stackrel{a}{\longrightarrow}R\mathscr{H}om(Rf_!\mathscr{F},Rf_!f^!\mathscr{G})
\stackrel{\operatorname{tr}_{X/Y}}{\longrightarrow}R\mathscr{H}om(Rf_!\mathscr{F},\mathscr{G})
\]
是同构。
:::

::: proof
非常复杂，读者可以参考[@Ful15]第八章或[@SGA-IV]的第XVIII章或[@SGA-4-1/2]。
:::

::: remark
事实上在最一般的情况下，即$f:X\to Y$仅是拟紧拟分离概形间的分离有限型映射，考虑$A$是挠环，
则考虑Brown表示的结论：

**事实。**（参考[@StacksProject, Tag 0F5Y]）设$\mathcal{A}$是Grothendieck Abel范畴
且$\mathcal{D}$是某个三角范畴。
设$F:D(\mathcal{A})\to\mathcal{D}$是和直和交换的三角函子，则$F$存在三角右伴随函子。

所以Poincaré对偶（@-TraceIsoAdj）给出了$f^!$在光滑分离的时候长什么样，（而Verdier对偶给出了此时保
持$D^b_{\operatorname{cons}}((-)_{\operatorname{ét}},A)$），这些都是其证明困难之处。
而紧合情况下的Grothendieck对偶也是Brown表示的结论，这是Amnon Neeman的工作，大幅简化了Grothendieck、
Hartshorne、Deligne和Verdier
的方法。所以伴随存在性从来就不是难点，难点是伴随函子的长相或者保持何种性质。
:::
