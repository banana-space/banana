---
title: 上同调纯性和Gysin序列I——一般情况
---

考虑一般的光滑对如下图
\[
\begin{tikzcd}
  Z & X & U \\
  & S
  \arrow["f", from=1-2, to=2-2]
  \arrow["h"', from=1-1, to=2-2]
  \arrow["g", from=1-3, to=2-2]
  \arrow["i", hook, from=1-1, to=1-2]
  \arrow["j"', hook', from=1-3, to=1-2]
\end{tikzcd}
\]
其中$i$是闭浸入且$j:U:=X\backslash Z\to X$是开浸入。

::: theorem [上同调纯性] {@CohoPurity-I}
对于余维数$c$的光滑$S$-对$(Z,X)$，则对任何
局部常值挠层$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$都有（@UpperShriekCI）：
\[
R^ri^!\mathscr{F}= \left\{
\begin{array}{cc}
i^{-1}\mathscr{F},&i=2c;\\
0,&i\neq 2c.
\end{array}\right.
\]
等价的，我们有$\mathscr{F}\cong j_*j^{-1}\mathscr{F}$，
当$r\neq 0,2c-1$时有$R^rj_*j^{-1}\mathscr{F}=0$
且
\[
i^{-1}R^{2c-1}j_*j^{-1}\mathscr{F}=i^{-1}\mathscr{F}.
\]
:::

::: proof [简要证明]
等价性不难根据正合列
\[
\cdots\to\mathscr{E}xt_X^i(i_*i^{-1}\underline{\mathbb{Z}},\mathscr{F})\to\mathscr{E}xt_X^i(\underline{\mathbb{Z}},\mathscr{F})
\to\mathscr{E}xt_X^i(j_!j^*\underline{\mathbb{Z}},\mathscr{F})\to\cdots
\]
得到。于是只需要证明某一个即可。

$\bullet$ **步骤1。** 先考虑$c=1$的情况，
化归到$X=\mathbb{P}_S^1$且$Z$为无穷远点且$\mathscr{F}=\Lambda:=\underline{\mathbb{Z}/n\mathbb{Z}}$。

因为定理是平展局部的，不妨设$(Z,X)$为标准光滑$S$-对$(\mathbb{A}_S^{m-1},\mathbb{A}_S^m)$，
将$S$替换为$\mathbb{A}_S^{m-1}$，
故不妨设$X=\mathbb{A}_S^1=\underline{\operatorname{Spec}}\mathscr{O}_S[T]$且$Z=V(T)$。
根据 @Excision，不难得到可以假设$X=\mathbb{P}_S^1$且$Z$为
无穷远点。显然可以不妨设$\mathscr{F}=\Lambda:=\underline{\mathbb{Z}/n\mathbb{Z}}$。

$\bullet$ **步骤2。** 证明$c=1$的情况。

这里需要几个在光滑基变换里有用的概念（$n$-零调等），我们略去。参考[@Mil80, 定理 VI.5.1]。
我们可以得到$g_*\Lambda=\Lambda$且当$k>0$时
$R^kg_*\Lambda=0$。
而且当$i>0$时$\operatorname{supp}(R^ij_*\Lambda)\subset Z$且$\Lambda=j_*j^{-1}\Lambda$。
因此对Leray谱序列
\[
E_2^{i,j}:=R^if_*R^jj_*\Lambda\Rightarrow R^{i+j}g_*\Lambda
\]
得到
$E_2^{i,0}=R^if_*\Lambda$且当$i>0,j>0$时$E_2^{i,j}=0$。因此谱序列得到当$i>0$时
\[
f_*j_*\Lambda=\Lambda,E^{0,i}=R^{i+1}f_*\Lambda.
\]
根据 @Proper-Smooth-BaseCh 得知$R^{i+1}f_*\Lambda$也局部常值且茎为
$H^{i+1}_{\operatorname{ét}}(\mathbb{P}^1_k,\Lambda)$。
根据 @ProjSMCurve-mun 得到当$i\neq-1,1$时$H^{i+1}_{\operatorname{ét}}(\mathbb{P}^1_k,\Lambda)=0$。
因此得到$c=1$的证明。

$\bullet$ **步骤3。** 证明一般情况。

只需归纳法，平展局部下余维数$c$的光滑$S$-对$(Z,X)$可以嵌入如下
\[
\begin{tikzcd}
  Z && Y \\
  & X
  \arrow["i"', from=1-1, to=2-2]
  \arrow["u", from=1-1, to=1-3]
  \arrow["v"', from=1-3, to=2-2]
\end{tikzcd}
\]
其中$(Z,Y)$和$(Y,X)$分别是余维数$c-1$和$1$的光滑$S$-对，
运用谱序列$R^iu^!R^jv^!\mathscr{F}\Rightarrow R^{i+j}i^!\mathscr{F}$
不难得到结论。
:::

::: remark
若$\mathscr{F}$是$\Lambda:=\underline{\mathbb{Z}/n\mathbb{Z}}$-模且$n$在$X$内可逆，
对任何平展映射$V\to X$和$s\in\mathscr{F}(V)$
会诱导$\Lambda\to\mathscr{F}|_V$，
进而得到
$H^{2c}_{Z\times_XV,\operatorname{ét}}(V,\Lambda)\to H^{2c}_{Z\times_XV,\operatorname{ét}}(V,\mathscr{F}|_V)$，
故得到
\[
\mathscr{F}\to\mathscr{H}om_X(R^{2c}i^!\Lambda,R^{2c}i^!\mathscr{F}).
\]
类似于定理的证明，不难证明这是同构！假设$T_{Z/X}:=R^{2c}i^!\Lambda\cong\Lambda$，故局部自由，
则我们有典范的同构
\[
i^{-1}\mathscr{F}\otimes T_{Z/X}\cong R^{2c}i^!\mathscr{F}.
\]
:::

::: corollary [Gysin序列] {@GysinS-I}
对于余维数$c$的光滑$S$-对$(Z,X)$，
若$\mathscr{F}$是$\Lambda:=\underline{\mathbb{Z}/n\mathbb{Z}}$-模且$n$在$X$内可逆，
则当$0\leq j\leq 2c-2$时有$R^jf_*\mathscr{F}\cong R^jg_*(\mathscr{F}|_U)$，且有正合列
\[
0\to R^{2c-1}f_*\mathscr{F}\to R^{2c-1}g_*(\mathscr{F}|_U)\to h_*(i^{-1}\mathscr{F}\otimes T_{Z/X})\to R^{2c}f_*\mathscr{F}\to\cdots
\]
\[
\cdots\to R^{j-1}g_*(\mathscr{F}|_U)\to R^{j-2c}h_*(i^{-1}\mathscr{F}\otimes T_{Z/X})\to R^jf_*\mathscr{F}\to \cdots.
\]
:::

::: proof
由$i^{-1}\mathscr{F}\otimes T_{Z/X}\cong R^{2c}i^!\mathscr{F}$得到
\[
H^j_{\operatorname{ét}}(Z,i^{-1}\mathscr{F}\otimes T_{Z/X})\cong H^j_{\operatorname{ét}}(Z,R^{2c}i^!\mathscr{F}).
\]
根据上同调纯性得到当$j\neq 2c$时$R^ji^!\mathscr{F}=0$，故谱序列得到
\[
H^j_{\operatorname{ét}}(Z,R^{2c}i^!\mathscr{F})\cong H^{j+2c}_{Z,\operatorname{ét}}(X,\mathscr{F}).
\]
根据 @SupportExact 得到
\[
\cdots\to H^{j-2c}_{\operatorname{ét}}(Z,i^{-1}\mathscr{F}\otimes T_{Z/X})\to H^j_{\operatorname{ét}}(X,\mathscr{F})\to H^j_{\operatorname{ét}}(U,\mathscr{F})\to\cdots.
\]
替换$S$为平展$S$-概形即可得到相对版本的结论。
:::
