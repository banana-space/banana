---
title: Brauer群和$C_r$域一瞥
---

<problems>
- 第一个定义后的说明中“中心除环平展局部地是局部环”一句，按上文 $A\otimes_{k}k^{\operatorname{sep}}\cong\operatorname{Mat}_{n}(k^{\operatorname{sep}})$ 似乎应为“平展局部地是矩阵环”。
</problems>

::: definition
考虑所有域$k$上的（有限维）中心单代数构成的集合$\mathrm{CSA}_k$，
定义等价关系为$A\sim B$当且仅当存在中心除环$D$
使得$A\cong\operatorname{Mat}_{m}(D),B\cong\operatorname{Mat}_{n}(D)$。
定义Brauer群为$\operatorname{Br}(k):=\mathrm{CSA}_k/\sim$。
:::

::: remark
由定义，$\operatorname{Mat}_n(D)\sim D$。
:::

事实上根据Wedderburn定理，域$k$上任何中心单代数都形如$\operatorname{Mat}_n(D)$。
也就是说，$\operatorname{Br}(k)$给出了$k$上中心除环的分类！
结合代数理论告诉我们，如果$A$是中心单代数，
那么$A\otimes_{k}k^{\operatorname{sep}}\cong\operatorname{Mat}_{n}(k^{\operatorname{sep}})$（参考
[@StacksProject, Tag 0753]）。也就是说，中心除环平展局部地是局部环，
而这一点能让我们使用Galois下降。

此外，我们还能在一般的概形上定义中心单代数，也就是所谓的Azumaya代数。
伽罗瓦上同调告诉我们
$\operatorname{Br}(k)=H^2(\operatorname{Gal}(k^{\operatorname{sep}}/k),(k^{\operatorname{sep}})^*)$，
根据 @PointsCoh，
我们有$\operatorname{Br}(k)=H^2_{\operatorname{ét}}(\operatorname{Spec}(k),\mathbb{G}_{m})$，
于是我们可以通过这个来定义一般概形的Brauer群。

::: definition
域$K$称之为$C_r$的，如果对任何$0<d^r<n$和任何$d$次齐次多项式$f\in K[T_1,...,T_n]$，
都存在不全是零的$\alpha=(\alpha_1,...,\alpha_n)
\in K^n$使得$f(\alpha)=0$。
:::

::: proposition {@005}
若$K$是$C_1$的，则$\operatorname{Br}(K)=0$。
:::

::: proof
不然，考虑$K$上非平凡的有限维除环$D$，
则$D\otimes_KK^{\operatorname{sep}}\cong\operatorname{Mat}_d(K^{\operatorname{sep}})$。
考虑行列式映射
$\det:D\otimes_KK^{\operatorname{sep}}\cong\operatorname{Mat}_d(K^{\operatorname{sep}})\to K^{\operatorname{sep}}$。
取$\operatorname{Gal}(K^{\operatorname{sep}}/K)$-不变元得到映射$N:D\to K$。
因为$K$是$C_1$的，若$d>1$，则存在非零$x\in D$使得$N(x)=0$。这会推出$x$不可逆，这不可能！
:::

::: theorem [Tsen定理] {@TsenCr}
代数闭域$k$上的$r$维代数簇$X$的函数域$k(X)$是$C_r$的。
:::

::: proof
不妨设$X$射影。取$f\in k(X)[T_1,...,T_n]_d$使得$0<d^r<n$。
存在丰沛除子$H$使得$f$的系数在$\Gamma(X,\mathscr{O}_X(H))$内。
取$\alpha=(\alpha_1,...,\alpha_n)$且$\alpha_i\in\Gamma(X,\mathscr{O}_X(eH))$，
故$f(\alpha)\in \Gamma(X,\mathscr{O}_X((de+1)H))$。故$f$诱导映射
\[
F:\Gamma(X,\mathscr{O}_X(eH))^{\oplus n}\to \Gamma(X,\mathscr{O}_X((de+1)H)).
\]
根据渐近Riemann–Roch定理得到
\[
\left\{
  \begin{array}{l}
  n\dim_k\Gamma(X,\mathscr{O}_X(eH))\sim Cne^r;\\
  \dim_k\Gamma(X,\mathscr{O}_X((de+1)H))\sim C(de+1)^r.
  \end{array}
\right.
\]
但$d^r<n$，故此时$F$必然有零点，即$f$必然有非平凡解。
:::

我们还会使用Serre的如下定理：

::: theorem [Serre] {@SerreGaloisCoh}
假设对于$K$，若对所有的有限扩张$K'/K$都有$\operatorname{Br}(K')=0$，则对所有$q\geq1$都有
\[
H^q(\operatorname{Gal}(K^{\operatorname{sep}}/K),(K^{\operatorname{sep}})^*)=0.
\]
:::

::: proof
参考[@StacksProject, Tag 03R8]。
:::
