---
title: '$\mathbb{G}_{m,X}$的上同调'
---

为了计算$H_{\operatorname{ét}}^q(X,\bm{\mu}_{n,X})$，
根据Kummer正合列，我们需要先计算$H_{\operatorname{ét}}^q(X,\mathbb{G}_{m,X})$。

::: theorem [基本正合列] {@FunExatSeq}
设$X$是整正规概形，设一般点嵌入为$g:\eta\to X$和余一维点的嵌入$i_z:z\to X$，则有正合列：
\[
0\to\mathbb{G}_{m,X}\to g_*\mathbb{G}_{m,\eta}\to\bigoplus_{\mathrm{codim}(z)=1}i_{z,*}\underline{\mathbb{Z}}.
\]
如果$X$光滑，则也右正合，进而正合。
:::

::: proof
取平展映射$\phi:U\to X$，不妨设$U=\operatorname{Spec} A$连通仿射。
则根据正规性，这个列限制在$U_{\operatorname{Zar}}$上正合：
\[
0\to A^*\to K^*\stackrel{\oplus v_{\mathfrak{p}}}{\longrightarrow}\bigoplus_{\mathrm{ht}(\mathfrak{p})=1}\mathbb{Z}.
\]
故我们得到正合列
\[
0\to\mathbb{G}_{m,X}\to g_*\mathbb{G}_{m,\eta}\to\bigoplus_{\mathrm{codim}(z)=1}i_{z,*}\underline{\mathbb{Z}}.
\]
当$X$光滑，因为此时Weil除子和Cartier除子重合，因此局部主，故而右正合。
:::

::: lemma {@006}
设$k$是代数闭域且$K/k$是超越度为$1$的域扩张，则对$r\geq1$有
\[
H^r_{\operatorname{ét}}(\operatorname{Spec} K,\mathbb{G}_m)=0.
\]
:::

::: proof
根据 @PointsCoh，
只需考虑$H^q(\operatorname{Gal}(K^{\operatorname{sep}}/K),(K^{\operatorname{sep}})^*)$。
再根据 @SerreGaloisCoh
我们只需证明对所有的有限扩张$K'/K$都有$\operatorname{Br}(K')=0$。
设$K'=\varinjlim K''$为在$k$上超越度为$1$的有限生成扩张，
故$\operatorname{Br}(K')=\varinjlim\operatorname{Br}(K'')$。于是只需考虑
$k$上超越度为$1$的有限生成扩张。
根据Tsen定理（@-TsenCr），我们得知这样的域都是$C_1$的，再根据 @005 即可得到结论。
:::

::: theorem {@GmCurveCoh}
设$X$是代数闭域$k$上的光滑射影曲线，则
\[
H_{\operatorname{ét}}^q(X,\mathbb{G}_{m,X})= \left\{
\begin{array}{cc}
\Gamma(X,\mathscr{O}_X)^* & q=0,\\
\operatorname{Pic}(X) & q=1,\\
0  & q\geq 2.
\end{array}\right.
\]
:::

::: proof
根据 @PicCoh，只需要考虑$q\geq 2$的情况。

$\bullet$**步骤1。** 对任何$q\geq1$，考虑一般点嵌入$j:\eta\to X$，则$R^qj_*\mathbb{G}_{m,\eta}=0$。

考虑茎即可。考虑闭点$\bar{x}\to X$，取仿射邻域$\operatorname{Spec} A$，设$K=\mathrm{Frac}(A)$，则
\[
(\operatorname{Spec}\mathscr{O}_{X,\bar{x}}^{\mathrm{sh}})\times_X\eta=\operatorname{Spec}(\mathscr{O}_{X,\bar{x}}^{\mathrm{sh}}\otimes_AK),
\]
其中后者是DVR的局部化。由于现在极大理想生成元可逆，故
\[
\mathscr{O}_{X,\bar{x}}^{\mathrm{sh}}\otimes_AK=\mathrm{Frac}(\mathscr{O}_{X,\bar{x}}^{\mathrm{sh}})=:K_{\bar{x}}^{\mathrm{sh}}.
\]
因此
$(R^qj_*\mathbb{G}_{m,\eta})_{\bar{x}}=H^q_{\operatorname{ét}}(\operatorname{Spec} K_{\bar{x}}^{\mathrm{sh}},\mathbb{G}_m)$。
根据 @006
得到结论。

若一般点，考虑几何点$\bar{\eta}$，
则$\mathscr{O}_{\bar{\eta}}^{\mathrm{sh}}=\kappa(\eta)^{\operatorname{sep}}$，故
\[
\begin{aligned}
(R^qj_*\mathbb{G}_{m,\eta})_{\bar{\eta}}&=H^q_{\operatorname{ét}}(\operatorname{Spec}(\kappa(\eta)^{\operatorname{sep}})\times_X\eta,\mathbb{G}_m)\\
&=H^q_{\operatorname{ét}}(\operatorname{Spec}(\kappa(\eta)^{\operatorname{sep}}),\mathbb{G}_m)\\
&=H^q_{\operatorname{ét}}(\operatorname{Gal}(\kappa(\eta)^{\operatorname{sep}}/\kappa(\eta)^{\operatorname{sep}}),(\kappa(\eta)^{\operatorname{sep}})^*)=0,
\end{aligned}
\]
于是步骤1成立。

$\bullet$**步骤2。** 对任何$q\geq1$，有$H^q_{\operatorname{ét}}(X,j_*\mathbb{G}_{m,\eta})=0$。

根据 @LeraySS 得到
\[
E_2^{p,q}=H_{\operatorname{ét}}^p(X,R^qj_*\mathbb{G}_{m,\eta})\Rightarrow H_{\operatorname{ét}}^{p+q}(\eta,\mathbb{G}_{m,\eta}).
\]
再根据 @006 得到当$p+q\geq1$时有$H_{\operatorname{ét}}^{p+q}(\eta,\mathbb{G}_{m,\eta})=0$。
取$q=0$再利用步骤1即可得到步骤2。

$\bullet$**步骤3。** 对任何$q\geq1$和闭点嵌入$i_x:x\to X$，有
$H^q_{\operatorname{ét}}\left(X,\bigoplus_{x\text{闭点}}i_{x,*}\underline{\mathbb{Z}}\right)=0$。

只需证明对闭点嵌入$i_x:x\to X$和$q>0$有
$H^q_{\operatorname{ét}}(X,i_{x,*}\underline{\mathbb{Z}})=0$。
根据 @FiniteHDV 和 @LeraySS 得到
$H^q_{\operatorname{ét}}(X,i_{x,*}\underline{\mathbb{Z}})=H^q_{\operatorname{ét}}(x,\underline{\mathbb{Z}})$。
由于代数闭，步骤3成立。

$\bullet$**步骤4。** 完成证明。

根据步骤2和步骤3还有正合列（@-FunExatSeq）即可得到结论。
:::
