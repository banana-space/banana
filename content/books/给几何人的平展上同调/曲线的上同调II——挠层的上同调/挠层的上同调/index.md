---
title: 挠层的上同调
---

::: theorem {@CurveTorsionCoh}
设$X$是代数闭域$k$上的分离有限型一维概形且$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$
是挠层，则

(i)对任何$q>2$有$H_{\operatorname{ét}}^q(X,\mathscr{F})=0$；

(ii)若$X$仿射，则对任何$q>1$有$H_{\operatorname{ét}}^q(X,\mathscr{F})=0$；

(iii)若$p=\mathrm{char}(k)>0$且$\mathscr{F}$是$p$-幂次挠层，
则对任何$q>1$有$H_{\operatorname{ét}}^q(X,\mathscr{F})=0$；

(iv)如果$\mathscr{F}$是可构建层且和$\mathrm{char}(k)$互素的挠层，
则$H_{\operatorname{ét}}^q(X,\mathscr{F})$有限；

(v)如果$\mathscr{F}$是可构建层且$X$紧合，则$H_{\operatorname{ét}}^q(X,\mathscr{F})$有限；

(vi)对任何代数闭扩张$K/k$，如果$\mathscr{F}$是$\mathrm{char}(k)$互素的挠层，则
$H_{\operatorname{ét}}^q(X,\mathscr{F})\cong H_{\operatorname{ét}}^q(X_K,\mathscr{F}|_{X_K})$；

(vii)对任何代数闭扩张$K/k$，如果$X$是紧合，则
$H_{\operatorname{ét}}^q(X,\mathscr{F})\cong H_{\operatorname{ét}}^q(X_K,\mathscr{F}|_{X_K})$；

(viii)对任何开集$U\subset X$，
映射$H_{\operatorname{ét}}^2(X,\mathscr{F})\to H_{\operatorname{ét}}^2(U,\mathscr{F})$是满射。
:::

参考[@StacksProject, Tag 03SB]。这是本节最重要的结论，
这些命题的证明事实上是殊途同归的，我们只以(i)和(iii)在光滑的情况下来举例说明。
对于不光滑的情况，取概形的既约结构，因为是一个加厚所以不改变上同调。然后取正规
化，我们总能得到一个交换图和一些函子运算的交换性。
最后，把曲线分解成连通分支即可，更多细节我们不再介绍。

这里按照惯例我们定义局部系为有限局部常值层，记作$\operatorname{Loc}(X)$。
我们首先证明如下结论：

::: theorem {@009}
设$X$是代数闭域$k$上的光滑曲线且$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$
是挠层（且挠部分在$k$中可逆），则对$q>2$有$H_{\operatorname{ét}}^q(X,\mathscr{F})=0$。
:::

::: lemma {@011}
设$X$是代数闭域$k$上的光滑曲线且局部系$\mathscr{F}$的挠部分在$k$中可逆，
则对$q>2$有$H_{\operatorname{ét}}^q(X,\mathscr{F})=0$。
:::

::: proof
设$\ell$在$k$中可逆，如果$\mathscr{F}$是一个$\mathbb{Z}/\ell\mathbb{Z}$-层，即对于每个平展开集$U$，
层$\mathscr{F}(U)$是$\mathbb{Z}/\ell\mathbb{Z}$线性空间。对于某个$k$中可逆的$d$，
取$d$次平展覆叠$\pi:U\to X$使得$\mathscr{F}|_{U}$是常值层。
由于是线性空间上，故乘$d$为同构，根据 @Methode-de-la-trace
和 @ProjSMCurve-mun，我们得知对$q>2$有$H_{\operatorname{ét}}^q(X,\mathscr{F})=0$。

一般地，将$\mathscr{F}$分解成$\mathscr{F}_1\oplus ...\oplus \mathscr{F}_r$，
其中$\mathscr{F}_i$被$\ell_{i}$的幂次消灭，
$\mathscr{F}$被某个$\ell$的幂次消灭。
最后，记$\mathscr{F}[\ell]$为$\mathscr{F}$的$\ell$-挠部分，考虑正合列
$0\to \mathscr{F}[\ell]\to \mathscr{F}\to \mathscr{F}/\mathscr{F}[\ell]\to 0$，然后归纳即可。
:::

::: lemma {@010}
设$X$是代数闭域$k$上的光滑曲线且可构建层$\mathscr{F}$的挠部分在$k$中可逆，
根据点集拓扑推导不难得知存在稠密开浸入$j:U\to X$
使得$\mathscr{F}|_U\in\operatorname{Loc}(U)$。考虑下面命题等价：

(a)对$q>2$有$H_{\operatorname{ét}}^q(X,\mathscr{F})=0$；

(b)对$q>2$有$H_{\operatorname{ét}}^q(X,j_!j^{-1}\mathscr{F})=0$。
:::

::: proof
设$Z=X\backslash U$和$i:Z\to X$，根据 @ExactExtensionZeroPull 有正合列
\[
0\to j_!j^{-1}\mathscr{F}\to\mathscr{F}\to i_*i^{-1}\mathscr{F}\to0.
\]
注意到$H_{\operatorname{ét}}^q(X,i_*i^{-1}\mathscr{F})=H^q_{\operatorname{ét}}(Z,i^{-1}\mathscr{F})$
且$Z$是代数闭域的谱的乘积，因此
诱导长正合列即可得到证明。
:::

::: proof [@009 的证明]
根据 @Torsion-Construct，只需考虑可构建层的情况。再根据 @010，我们只需要证明：对
稠密开浸入$j:U\to X$和$\mathscr{F}\in\operatorname{Loc}(U)$，
对$q>2$有$H_{\operatorname{ét}}^q(X,j_!\mathscr{F})=0$。

再次使用迹映射方法，取合适的有限平展覆盖$g:V\to U$，
只需考虑形如$j_!g_*g^{-1}\mathscr{F}$的上同调且使得$g^{-1}\mathscr{F}$
是常值层。由Zariski主定理，有分解
\[
\begin{tikzcd}
  & Y \\
  V && X \\
  & U
  \arrow["g", from=2-1, to=3-2]
  \arrow["j", from=3-2, to=2-3]
  \arrow["a", from=2-1, to=1-2]
  \arrow["b", from=1-2, to=2-3]
\end{tikzcd}
\]
为开浸入$a$和有限态射$b$的复合。
不难验证得到$j_!g_*=b_*a_!$，
只需要证明对$q>2$有$H_{\operatorname{ét}}^q(Y,a_!\underline{\mathbb{Z}/\ell\mathbb{Z}})=0$，
其中$\ell$在$k$里可逆。
只需要考虑$a_!a^{-1}\underline{\mathbb{Z}/\ell\mathbb{Z}}$，根据 @010 和 @011。
:::

再考虑如下：

::: theorem {@012}
设$X$是代数闭域$k$上的光滑曲线，设$p=\mathrm{char}(k)>0$且$\mathscr{F}$是$p$-幂次挠层，
则对任何$q>1$有$H_{\operatorname{ét}}^q(X,\mathscr{F})=0$。
:::

::: lemma {@013}
设$k$是一个特征$p$代数闭域，设$V$是有限维$k$-线性空间。
设线性映射$F : V\to V$是加性的且$F(ax) = a^pF(x)$。那么$F-\mathrm{id}:V\to V$
是满射。
:::

::: proof
交换代数，参考[@StacksProject, Tag 0A3L]。
:::

::: proposition
设$X/k$是$d$维紧合概形，那么对于$q>d$，
有$H_{\operatorname{ét}}^q(X,\underline{\mathbb{Z}/p\mathbb{Z}})=0$。
:::

::: proof
考虑Artin-Schreier正合列（@-Artin-SchreierSeq）：
\[
0\to\underline{\mathbb{Z}/p\mathbb{Z}}_X\to\mathbb{G}_{a,X}\stackrel{t\mapsto t^p-t}{\longrightarrow}\mathbb{G}_{a,X}\to0.
\]
诱导长正合列为
\[
\cdots\to H_{\operatorname{ét}}^d(X,\mathscr{O}_X)\stackrel{F-\mathrm{id}}{\longrightarrow}H_{\operatorname{ét}}^d(X,\mathscr{O}_X)
\to H_{\operatorname{ét}}^{d+1}(X,\underline{\mathbb{Z}/p\mathbb{Z}})\to0\to\cdots.
\]
其中根据 @EtZarQcohCoh 和Grothendieck消灭定理得知当$q>d$有
$H_{\operatorname{ét}}^q(X,\mathscr{O}_X)=0$，因此之后的项是$0$。
因此当$q>d+1$时$H_{\operatorname{ét}}^{q}(X,\underline{\mathbb{Z}/p\mathbb{Z}})=0$。
再根据 @013 得到$H_{\operatorname{ét}}^{d+1}(X,\underline{\mathbb{Z}/p\mathbb{Z}})=0$，
于是得到结果。
:::

::: proof [@012 的证明]
类似 @009 的证明，化归到局部系，然后再到可构建层即可，略去。
:::

事实上 @CurveTorsionCoh 的某些可以减弱至可分闭域：

::: proposition [参考[@StacksProject, Tag 0A5E]] {@017}
设$K/k$是可分闭域的扩张，设$X$在$\operatorname{Spec} k$上紧合且维数不大于$1$，
则对挠层$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$
有$H^q_{\operatorname{ét}}(X,\mathscr{F})\cong H^q_{\operatorname{ét}}(X_K,\mathscr{F}|_{X_K})$。
:::
