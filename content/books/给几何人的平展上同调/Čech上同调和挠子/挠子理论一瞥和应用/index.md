---
title: 挠子理论一瞥和应用
---

类似于概型理论里的挠子理论，我们可以将其推广至小平展景。

::: definition
对概形$X$和平展覆盖$\mathfrak{U}=\{U_i\to X\}_{i\in I}$。
取取值为群（不一定交换）的平展层$\mathscr{G}$，设
$U_{i_0\cdots i_p}=U_{i_0}\times_X\cdots\times_XU_{i_p}$。
我们定义取值在$\mathscr{G}$的$1$-余链为$g=(g_{ij})_{(i,j)\in I^2}$
使得$g_{ij}\in\mathscr{G}(U_{ij})$满足
\[
g_{ij}|_{U_{ijk}}g_{jk}|_{U_{ijk}}=g_{ik}|_{U_{ijk}}.
\]
两个$1$-余链$g,g'$，定义$g\sim g'$使得存在$(h_i)_{i\in I}$其中$h_i\in\mathscr{G}(U_i)$满足
\[
g'_{ij}=h_i|_{U_{ij}}g_{ij}(h_j|_{U_{ij}})^{-1}.
\]
定义$\check{H}^1(\mathfrak{U},\mathscr{G}):=\{g\}/\sim$。
:::

::: remark
根据构造，对于短正合列$1\to\mathscr{G}'\to\mathscr{G}\to\mathscr{G}''\to 1$，我们有
\[
1\to\Gamma(X,\mathscr{G}')\to\Gamma(X,\mathscr{G})\to\Gamma(X,\mathscr{G}'')
\to\check{H}^1(\mathfrak{U},\mathscr{G}')\to\check{H}^1(\mathfrak{U},\mathscr{G})\to\check{H}^1(\mathfrak{U},\mathscr{G}'').
\]
:::

::: definition
对概形$X$和取值为群（不一定交换）的平展层$\mathscr{G}$。
设$\mathscr{S}\in\operatorname{Sh}(X_{\operatorname{ét}})$存在右$\mathscr{G}$-作用。
我们称$\mathscr{S}$是$\mathscr{G}$-挠子如果满足

(i)存在平展覆盖$\{U_i\to X\}$使得$\mathscr{S}(U_i)\neq\emptyset$；

(ii)对任意的平展映射$U\to X$和$s\in\Gamma(U,\mathscr{S})$，
映射$\mathscr{G}|_U\to\mathscr{S}|_U,g\mapsto sg$是同构。

我们称$\mathscr{S}$被$\{U_i\to X\}$平凡化。
如果$\mathscr{S}(X)\neq\emptyset$我们称$\mathscr{S}$是平凡$\mathscr{G}$-挠子。
:::

这两个概念出现不是偶然，事实上我们有如下结论：

::: theorem
对概形$X$和取值为群（不一定交换）的平展层$\mathscr{G}$。我们有双射
\[
\{\text{被}\mathfrak{U}\text{平凡化的}\mathscr{G}\text{-挠子}\}/\cong\longleftrightarrow \check{H}^1(\mathfrak{U},\mathscr{G}).
\]
:::

::: proof
我们阐述映射如何诱导。给定被$\mathfrak{U}$平凡化的$\mathscr{G}$-挠子$\mathscr{S}$。
对$\mathfrak{U}=\{U_i\to X\}_{i\in I}$，
给定$s_i\in\mathscr{S}(U_i)$，由于作用单可迁，
存在$g_{ij}\in\mathscr{G}(U_{ij})$使得$(s_i|_{U_{ij}})g_{ij}=s_j|_{U_{ij}}$。
则得到$g=(g_{ij})_{I^2}$。对另一组$s_i'$，我们可以有$s_i'=s_ih_i$，故会得到$g\sim g'$，因此良定义。
有关这个
证明因为没什么意思所以我们略去，参考[@milneLEC, 命题11.1]。
:::

::: remark
如果$G$是有限常值群层且$X$连通，则
\[
\{G\text{-挠子}\}/\cong=\{\text{Galois群为}G\text{的}X\text{的Galois覆盖}\}=\operatorname{Hom}_{\mathrm{cont}}(\pi_1^{\operatorname{ét}}(X,\bar{x}),G).
\]
:::

::: theorem [向量丛和挠子] {@VectCoh}
对概形$X$和秩$n$局部自由模构成的群$\mathrm{Vect}_{\operatorname{Zar}}^n(X)$，我们有
\[
\mathrm{Vect}_{\operatorname{Zar}}^n(X)\cong\check{H}_{\operatorname{Zar}}^1(X,\operatorname{GL}_{n,X})\cong\check{H}_{\mathrm{fppf}}^1(X,\operatorname{GL}_{n,X})
\cong\check{H}_{\operatorname{ét}}^1(X,\operatorname{GL}_{n,X}).
\]
:::

::: proof
忽略，参考[@milneLEC, 定理11.4]。
:::

::: corollary {@PicCoh}
我们有
\[
H_{\operatorname{ét}}^1(X,\mathbb{G}_{m,X})\cong\operatorname{Pic}(X).
\]
:::

::: proof
注意到$\mathbb{G}_{m,X}$交换，根据 @004 和 @VectCoh 即得到结果。
:::

::: corollary [Hilbert定理90] {@Hilbert90}
对于有限Galois扩张$L/k$，有$H^1(\operatorname{Gal}(L/k),L^*)=0$。
:::

::: proof
注意到
\[
H^1(\operatorname{Gal}(k^{\operatorname{sep}}/k),(k^{\operatorname{sep}})^*)=\varinjlim_{\text{有限Galois覆盖}L/k}H^1(\operatorname{Gal}(L/k),L^*)
\]
其中后者是$L\subset L'$诱导
$H^1(\operatorname{Gal}(L/k),L^*)\hookrightarrow H^1(\operatorname{Gal}(L'/k),(L')^*)$。
根据 @PicCoh 和 @PointsCoh 得到当$X=\operatorname{Spec} k$有
$H_{\operatorname{ét}}^1(X,\mathbb{G}_{m,X})\cong H^1(\operatorname{Gal}(k^{\operatorname{sep}}/k),(k^{\operatorname{sep}})^*)$
且
\[
H_{\operatorname{ét}}^1(X,\mathbb{G}_{m,X})\cong\operatorname{Pic}(\operatorname{Spec} k)=0
\]
即可得到结论。
:::
