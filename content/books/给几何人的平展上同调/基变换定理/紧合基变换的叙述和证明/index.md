---
title: 紧合基变换的叙述和证明
---

但平展上同调的紧合基变换类比没有这么容易。

::: lemma {@016}
对概形的紧合映射$f:X\to S$和几何点$\bar{s}\to S$，
对任意的$\mathscr{F}\in\operatorname{Sh}(X_{\operatorname{ét}})$都有双射
\[
(f_*\mathscr{F})_{\bar{s}}\to\Gamma(X_{\bar{s}},\mathscr{F}_{\bar{s}}).
\]
:::

::: proof
这个需要Hensel对的一些结果，见[@StacksProject, Tag 0A3T]。
:::

::: lemma {@018}
设$\ell$是任一素数且$A$是严格Hensel局部环，设$X\to \operatorname{Spec}(A)$紧合，
那么对于挠层$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$有
\[
H^q_{\operatorname{ét}}(X,\mathscr{F})\cong H^q_{\operatorname{ét}}(X_0,\mathscr{F}|_{X_0}),
\]
其中$X_0$是特殊纤维。
:::

::: proof
这个结论颇为复杂，直接证明需要Artin逼近等技术，我们略去。
读者可以用紧合基变换来推出它（其实和紧合基变换等价）。
而[@StacksProject]内只证明了$\mathbb{F}_{\ell}$-模层且$X=\mathbb{P}^1_A$
的情况（我们也只需要这个条件），我们简述一下这种情况：
取$\mathbb{F}_{\ell}$-模内射预解$\mathscr{F}\hookrightarrow \mathscr{I}^*$，
可以证明$\mathscr{I}^*|_{X_0}$是$\mathscr{F}|_{X_0}$的
右$H^0_{\operatorname{ét}}(X_0,-)$-零调的
（参考[@StacksProject, Tag 0A5H]），于是$H^q_{\operatorname{ét}}(X_0,\mathscr{F}|_{X_0})$可以由
$H^0_{\operatorname{ét}}(X_0,\mathscr{F}|_{X_0})$得到，再由 @016 即可得到结论。
:::

::: remark
在复几何里有一个给予动机的类比（证明见[@VoisinHdg-I]定理9.3）：

$\bullet$ Ehresmann定理。
设$f:\mathcal{X}\to (B,0)$是微分流形之间的紧合浸没，其中$B$是可缩的流形且$0$是其上的一个基点。
则存在微分同胚$T:\mathcal{X}\cong \mathcal{X}_0\times B$使得对投影$p:\mathcal{X}_0\times B\to B$满足
$p\circ T=f$。
因此在此种情况下有同伦等价$\mathcal{X}\simeq\mathcal{X}_0$，因此有相同的上同调。
:::

::: theorem [紧合基变换] {@ProperBaseCh}
设$f:X\to Y$是概形间的紧合映射，对任何概形映射$g:Y'\to Y$和纤维积
\[
\begin{tikzcd}
  {X':=X\times_YY'} & X \\
  {Y'} & Y
  \arrow["g", from=2-1, to=2-2]
  \arrow["f"', from=1-2, to=2-2]
  \arrow["{f'}"', from=1-1, to=2-1]
  \arrow["{g'}", from=1-1, to=1-2]
  \arrow["\ulcorner"{anchor=center, pos=0.125}, draw=none, from=1-1, to=2-2]
\end{tikzcd}
\]
对任何挠层$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，都有同构
\[
g^{-1}Rf_*\mathscr{F} \longrightarrow Rf'_*(g')^{-1}\mathscr{F}.
\]
:::

::: proof
我们需要如下几个步骤来得到证明。

$\bullet$ **步骤1。** 先证明不导出的情况对任意的
$\mathscr{F}\in\operatorname{Sh}(X_{\operatorname{ét}})$成立。

映射不难由伴随性给出，同构只需要在茎上验证，根据 @016 即可得到结论。

$\bullet$ **步骤2。** 研究几个基变换的重要关系。

为了方便，
如果对任何$S'\to S$和基变换$X\times_SS'$和挠层
$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$都满足定理的结论，
我们就称$f:X\to S$和上同调的基变换交换。
则我们有如下结论：

$\bullet\bullet$ (a)紧合映射$f:X\to Y$和上同调的基变换交换当且仅当对任何素数$\ell$和内射
$\mathbb{F}_{\ell}$-模层$\mathscr{I}\in\operatorname{Sh}(X_{\operatorname{ét}})$
和任何$Y'\to Y$和定理的基变换$X\times_YY'$，对任何$q>0$都有层$R^qf'_*(g')^{-1}\mathscr{I}=0$。

这个不太困难，首先设$\mathscr{F}=\varinjlim\mathscr{F}[n]$，
根据 @ColimSheaf 不难得出高阶直像和滤余极限交换，而逆像本来就交换，
因此只需要假设$\mathscr{F}$被某个$n$零化。取素数$\ell|n$，考虑
\[
0\to\mathscr{F}[\ell]\to\mathscr{F}\to\mathscr{F}/\mathscr{F}[\ell]\to0,
\]
运用5-引理，只需对$\mathscr{F}[\ell],\mathscr{F}/\mathscr{F}[\ell]$证明即可。
不断重复这一步骤，则不妨设$\mathscr{F}$被某个素数$\ell$零化。
取$\mathbb{F}_{\ell}$-模内射预解$\mathscr{F}\hookrightarrow \mathscr{I}^*$，
只需证明对$\mathscr{I}^*$运用步骤1即可。

$\bullet\bullet$ (b)若$f:X\to Y$有限，则其和上同调的基变换交换。

这个基本上平凡，运用(a)和 @FiniteHDV 即可得到结果。

$\bullet\bullet$ (c)对紧合映射$f:X\to Y$和$g:Y\to Z$，若$f,g$都和上同调的基变换交换，
则$g\circ f$也是如此；

$\bullet\bullet$ (d)对紧合映射$f:X\to Y$和$g:Y\to Z$，
若$f,g\circ f$都和上同调的基变换交换且$f$是满射，则$g$也是如此。

(b)(c)证明类似，运用相对Leray谱序列即可，参考[@StacksProject, Tag 0A4C, 0A4D]，我们略去。

$\bullet$ **步骤3。** 将问题化归到（相对）射影空间。

根据 @HigherDirectSheafifi，我们可以考虑Zariski局部，于是不妨设$Y$仿射。由Chow引理得到如下交换图：
\[
\begin{tikzcd}
  X & {X''} & {\mathbb{P}^n_Y} \\
  & Y
  \arrow[from=1-3, to=2-2]
  \arrow["f"', from=1-1, to=2-2]
  \arrow["{f''}", from=1-2, to=2-2]
  \arrow["\pi"', from=1-2, to=1-1]
  \arrow["i", hook, from=1-2, to=1-3]
\end{tikzcd}
\]
其中$\pi$是(H-)射影满射且$f''$是紧合映射。根据步骤2的(b)，则$i$和上同调的基变换交换。
如果我们证明了对形如$\mathbb{P}^n_S\to S$的映射
也和上同调的基变换交换，那么根据步骤2的(c)得到$f'',\pi$和上同调的基变换交换，再根据步骤2的(d)，
我们就得到了$f$和上同调的基变换交换。
因此问题化归到了形如$\mathbb{P}^n_S\to S$的映射。

$\bullet$ **步骤4。** 将问题化归到（相对）射影直线。

注意到对于$n>0$，有有限满射
\[
\mathbb{P}^1_S\times_S\cdots\times_S\mathbb{P}^1_S\to\mathbb{P}_S^n
\]
为$((x_1 : y_1), (x_2 : y_2), \ldots , (x_n:y_n)) \mapsto (F_0 : \ldots : F_n)$，其中
$F_i$是$x_i,y_i$的整系数多项式满足
\[
\prod_i(x_i t + y_i) = F_0 t^n + F_1 t^{n-1} + \ldots + F_n.
\]
因此根据步骤2的(c)和(d)只需要考虑$\mathbb{P}^1_S\to S$的情况。

$\bullet$ **步骤5。** 完成证明。

对任何$g:T\to S$和$\mathscr{F}$是$\mathbb{F}_{\ell}$模层（根据步骤2的(a)的证明，只需考虑这种情况），
观察交换图
\[
\begin{tikzcd}
  {\mathbb{P}^1_T} & {\mathbb{P}^1_S} \\
  T & S
  \arrow["g", from=2-1, to=2-2]
  \arrow["{f'}"', from=1-1, to=2-1]
  \arrow["f"', from=1-2, to=2-2]
  \arrow["{g'}", from=1-1, to=1-2]
\end{tikzcd}
\]
只需要在茎上验证。首先注意到对几何点$\bar{s}'\to S$，根据 @018 和 @HigherDirectStalk-II 我们有
\[
(R^qf_*\mathscr{F})_{\bar{s}'}=H^q(\mathbb{P}^1_{\mathscr{O}_{S,\bar{s}'}^{\mathrm{sh}}},\mathscr{F}|_{\mathbb{P}^1_{\mathscr{O}_{S,\bar{s}'}^{\mathrm{sh}}}})
=H^q(\mathbb{P}^1_{\kappa(s')^{\operatorname{sep}}},\mathscr{F}|_{\mathbb{P}^1_{\kappa(s')^{\operatorname{sep}}}}).
\]
因此考虑几何点$\bar{t}\to T$，设$\bar{s}=g(\bar{t})$，
考虑映射$g^{-1}R^qf_*\mathscr{F} \to R^qf'_*(g')^{-1}\mathscr{F}$的茎为
\[
H^q(\mathbb{P}^1_{\kappa(s)^{\operatorname{sep}}},\mathscr{F}|_{\mathbb{P}^1_{\kappa(s)^{\operatorname{sep}}}})
\to H^q(\mathbb{P}^1_{\kappa(t)^{\operatorname{sep}}},\mathscr{F}|_{\mathbb{P}^1_{\kappa(t)^{\operatorname{sep}}}}).
\]
根据 @017 即可得到结论。
:::

::: remark
对挠上同调的$\mathscr{F}\in D^+(X_{\operatorname{ét}})$也对，根据一般的紧合基变换和一个谱序列
（[@StacksProject, Tag 015J]）即可得到。
:::

::: remark
在证明中我们使用了如下化归映射：有限满射
\[
\mathbb{P}^1_S\times_S\cdots\times_S\mathbb{P}^1_S\to\mathbb{P}_S^n
\]
为$((x_1 : y_1), (x_2 : y_2), \ldots , (x_n:y_n)) \mapsto (F_0 : \ldots : F_n)$，其中
$F_i$是$x_i,y_i$的整系数多项式满足
\[
\prod_i(x_i t + y_i) = F_0 t^n + F_1 t^{n-1} + \ldots + F_n.
\]
这样写其实不太好，因为坐标写法在代数闭域上才比较合适。
这里我们给出严谨的定义：

该映射被如下映射诱导：
\[
S[a_0,...,a_n]\to\bigoplus_{d\geq0}S[x_1,y_1]_d\otimes_S\cdots\otimes_SS[x_n,y_n]_d
\]
为
\[
a_j\mapsto\sum_{1\leq i_1<\cdots<i_j\leq n}\frac{x_{i_1}\cdots x_{i_j}}{y_{i_1}\cdots y_{i_j}}y_0\cdots y_n.
\]
:::
