---
title: Poincaré对偶及其应用
---

::: theorem [Poincaré对偶] {@PoincaréDuality}
设$X$是可分闭域$k$上纯$d$维光滑可紧化概形，
对$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}},\Lambda)$有典范同构
\[
\mathrm{Ext}_{\Lambda}^{2d-q}(\mathscr{F},\Lambda(d))\cong \operatorname{Hom}_{\Lambda}(H^q_{c,\operatorname{ét}}(X,\mathscr{F}),\Lambda).
\]
若$\mathscr{F}\in\operatorname{Loc}(X,\Lambda)$，则有同构
\[
H^{2d-q}(X,\mathscr{H}om_{\Lambda}(\mathscr{F},\Lambda(d)))\cong \operatorname{Hom}_{\Lambda}(H^q_{c,\operatorname{ét}}(X,\mathscr{F}),\Lambda).
\]
:::

::: proof
设$f:X\to\operatorname{Spec} k$。
注意到
$\operatorname{Hom}_{\Lambda}(\mathscr{F},f^{-1}\Lambda(d)[2d-i])=\mathrm{Ext}_{\Lambda}^{2d-i}(\mathscr{F},\Lambda(d))$
且由于
$\Lambda$是内射$\Lambda$-模（Baer判别法），我们有
\[
\operatorname{Hom}_{\Lambda}(Rf_!\mathscr{F},\Lambda[-i])=\mathrm{Ext}_{\Lambda}^{-i}(R\Gamma_c(X,\mathscr{F}),\Lambda)
=\operatorname{Hom}_{\Lambda}(H^i_{c,\operatorname{ét}}(X,\mathscr{F}),\Lambda).
\]
根据 @TraceIsoAdj 即可得到结论。

若$\mathscr{F}\in\operatorname{Loc}(X,\Lambda)$，
只需证明$H^{2d-q}(X,\mathscr{H}om_{\Lambda}(\mathscr{F},\Lambda(d)))\cong
\mathrm{Ext}_{\Lambda}^{2d-q}(\mathscr{F},\Lambda(d))$。根据谱序列我们得知只需证明
当$q\geq1$时$\mathscr{E}xt^q_{\Lambda}(\mathscr{F},\Lambda)=0$。
这由$\Lambda$是内射$\Lambda$-模，且问题平展局部，局部系可以
假设为常值层，然后有自由$\Lambda$-模预解即可。
:::

::: corollary [弱Lefschetz定理]
设可分闭域$k$且$X\subset\mathbb{P}^N_k$是闭子概形且$H\subset\mathbb{P}^N_k$是超平面。
设$X\backslash H$光滑，则
对任何$\mathscr{F}\in \operatorname{Ab}(X_{\operatorname{ét}},\Lambda)$满足
$\mathscr{F}|_{X\backslash H}\in\operatorname{Loc}_{\mathrm{cons}}(X\backslash H,\Lambda)$，
则典范映射
\[
H^q_{\operatorname{ét}}(X,\mathscr{F})\to H^q_{\operatorname{ét}}(X\cap H,\mathscr{F}|_{X\cap H})
\]
当$q<\dim X-1$时是双射；当$q=\dim X-1$时是单射。
:::

::: proof
根据 @AffineCohDim 可知当$q>\dim X$时
$H^{q}(X\backslash H,\mathscr{H}om_{\Lambda}(\mathscr{F},\Lambda(d)))=0$。
由于$\Lambda$是内射$\Lambda$-模且层在此处可构建，故自身和二次对偶同构，因此再由 @PoincaréDuality
得到当$q<\dim X$时$H^q_{c,\operatorname{ét}}(X\backslash H,\mathscr{F})=0$。
再根据 @PrpDerivedLowerShriek-I(iv)即可。
:::

::: remark
复几何也有弱Lefschetz定理：
对$n$维紧Kähler流形$X$，设$Y\subset X$为光滑超曲面使得$\mathscr{O}(Y)$丰沛（或正性，
根据Kodaira嵌入定理），则典范限制映射
\[
H^k(X,\mathbb{C})\to H^k(Y,\mathbb{C})
\]
在$k\leq n-2$时为双射，在$k=n-1$时为单射。

这个最标准的证明就是先用Hodge分解定理将其转化为$H^q(X,\Omega^p_X)\to H^q(Y,\Omega^p_Y)$的情况，
然后注意
到$\mathscr{O}_X(-Y)$和$\mathscr{O}_Y(Y)$会诱导有两个正合列，之后用Serre对偶和
Kodaira-Nakano消灭定理得到某个上同调为零，
然后考虑之前$\mathscr{O}_X(-Y)$诱导短正合列引出的长正合列，
就可以看到$H^q(X,\Omega^p_X)\to H^q(Y,\Omega^p_X|_Y)$有定理描述的样子，
之后考虑自然映射$H^q(Y,\Omega^p_X|_Y)\to H^q(Y,\Omega^p_Y)$，这个事实上先考虑映射的
核和余核为$\Omega^{p-1}_Y(-Y)$的元素，然后用$\mathscr{O}_Y(Y)$诱导短正合列引出的长正合列，
之后操作和之前类似，这样就证明了定理。
细节参考[@Huy05]命题5.2.6。

神奇的是，这个定理有一个Morse理论的证明，线丛$\mathscr{O}(Y)$存在整体截面$s$满足诱导除子为$z(s)=Y$，
这个很容易做到。
考虑线丛上的度量为
$\frac{i}{2\pi}R^{\mathscr{O}(Y)}=\frac{i}{2\pi}\partial\bar{\partial}\log|s|^{-2}$，那么考虑
$\phi:X\to [-\infty,\infty)$为$\phi(x)=\log|s|^2$，注意到$\phi^{-1}(-\infty)=Y$，
我们将其视作一个Morse函数，
可以发现$\mathrm{Hess}\phi$的负特征值个数至少是$n$，这说明$x$增大时，是从$Y$粘至少$n$维胞腔，
这就得到纯粹拓扑上的解释。
细节参考[@GH78]第158页。
:::

更多的例子计算：

::: example
(i)设$X\subset\mathbb{P}_k^{m+1}$是光滑超曲面且$k$代数闭。
设$U=\mathbb{P}_k^{m+1}\backslash X$，则当$q>m+1$时
$H_{\operatorname{ét}}^q(U,\Lambda)=0$。由Gysin序列得到映射
\[
H_{\operatorname{ét}}^q(X,\Lambda)\to H_{\operatorname{ét}}^{q+2}(\mathbb{P}_k^{m+1},\Lambda)
\]
在$q>m$时是同构，在$q=m$时是满射（设核为$K$）。故得到$q>m$时
\[
H_{\operatorname{ét}}^q(X,\Lambda)\cong H_{\operatorname{ét}}^q(\mathbb{P}_k^{m},\Lambda),\quad
H_{\operatorname{ét}}^m(X,\Lambda)\cong H_{\operatorname{ét}}^m(\mathbb{P}_k^{m},\Lambda)\oplus K.
\]
由Poincaré对偶（@-PoincaréDuality）得到当$q<m$时候
$H_{c,\operatorname{ét}}^q(X,\Lambda)\cong H^{2m-q}_{\operatorname{ét}}(X,\Lambda(m))$，
因此有
\[
H_{\operatorname{ét}}^*(X,\Lambda)\cong H_{\operatorname{ét}}^*(\mathbb{P}_k^{m},\Lambda)\oplus K;
\]

(ii)若$X\subset\mathbb{P}_k^{N}$是$m$维光滑完全交且$k$代数闭，类似的也可以得到
\[
H_{\operatorname{ét}}^*(X,\Lambda)\cong H_{\operatorname{ét}}^*(\mathbb{P}_k^{m},\Lambda)\oplus K;
\]

(iii)设$X$是连通光滑的射影空间的闭子簇，根据Bertini定理知有光滑列
\[
X=X_m\supset X_{m-1}\supset\cdots\supset X_1,
\]
其中后者为前者的超平面截面。根据Gysin序列得到
\[
H^1_{\operatorname{ét}}(X_1,\Lambda)\twoheadrightarrow H^3_{\operatorname{ét}}(X_2,\Lambda(1))\cong\cdots\cong H^{2m-1}_{\operatorname{ét}}(X_x,\Lambda(m-1)).
\]
根据Poincaré对偶（@-PoincaréDuality）得到
$H^1_{\operatorname{ét}}(X,\Lambda(1))\hookrightarrow H^1_{\operatorname{ét}}(X_1,\Lambda(1))$，
即
\[
\operatorname{Pic}(X)[n]\hookrightarrow \operatorname{Pic}(X_1)[n].
\]
代数闭域上Abel簇的挠点Zariski稠密，因此诱导单射
\[
\underline{\operatorname{Pic}}^0(X)\hookrightarrow \mathrm{Jac}(X_1).
\]
因此代数闭域上光滑簇$X$的Picard簇一定是一个一般位置曲线的Jacobi簇的子簇。
:::
