---
title: Weil上同调理论和同调等价
---

设$F$是特征零的域且$\mathrm{GrVect}_F$是有限维分次$F$-线性空间。

::: definition
一个Weil上同调理论为一个函子
\[
H:\mathrm{SmProj}(k)^{op}\to\mathrm{GrVect}_F
\]
满足如下公理：

(1)存在杯积$\cup:H(X)\times H(X)\to H(X)$且满足对$a\in H^i(X),b\in H^j(X)$有
\[
b\cup a=(-1)^{ij}a\cup b;
\]

(2)存在Poincaré对偶：

有迹同构$\operatorname{tr}:H^{2d}(X_d)\cong F$使得有完美对
\[
H^i(X_d)\times H^{2d-i}(X)\stackrel{\cup}{\longrightarrow}H^{2d}(X_d)\stackrel{\operatorname{tr},\cong}{\longrightarrow}F;
\]

(3)满足Künneth公式：有如下分次同构
\[
H(X)\otimes H(Y)\stackrel{p_1^*\otimes p_2^*}{\longrightarrow}H(X\times Y);
\]

(4)存在链映射$\mathrm{cl}_X:\operatorname{CH}^i(X)\to H^{2i}(X)$使得

- 对$\mathrm{SmProj}(k)$内的$f:X\to Y$有$f^*\circ\mathrm{cl}_Y=\mathrm{cl}_X\circ f^*$和
  $f_*\circ\mathrm{cl}_X=\mathrm{cl}_Y\circ f_*$；

- 有$\mathrm{cl}_X(\alpha\cdot\beta)=\mathrm{cl}_X(\alpha)\cup\mathrm{cl}_X(\beta)$；

- 对点$p$，有$\operatorname{tr}\circ\mathrm{cl}_p=\deg:=\int_p$。

(5)弱Lefschetz定理满足：设光滑超平面截面$i:Y_{d-1}\hookrightarrow X_d$，
则$i^*:H^i(X)\to H^i(Y)$在$i<d-1$时是同构，
在$i=d-1$时是单射；

(6)硬Lefschetz定理满足：Lefschetz算子$L(\alpha)=\alpha\cup\mathrm{cl}_X(Y)$诱导同构
\[
L^{d-i}:H^{d-i}(X)\cong H^{d+i}(X),0\leq i\leq d.
\]
:::

容易发现Weil上同调理论就是为了模仿复几何和代数拓扑里的上同调理论。
我们有如下常见例子：

::: example
设$k$特征零且$k\subset\mathbb{C}$，则可以取：

(i) Betti上同调，
即$H_B^i(X):=H^i_{\operatorname{sing}}(X^{\operatorname{an}},\mathbb{Q})$（或$\mathbb{C}$系数）；

(ii)经典de Rham上同调$H_{\mathrm{dR}}^i(X^{\operatorname{an}};\mathbb{C})$；

(iii)代数de Rham上同调$H_{\mathrm{dR}}^i(X)$。

这些都是Weil上同调理论。首先(i)即为经典代数拓扑里的内容，而(ii)(iii)都可以根据比较定理给出。
:::

::: example
对域$k$上的簇$X$，任取可逆素数$\ell$，
得到$\ell$-进上同调$H_{\operatorname{ét}}^i(X_{\bar{k}},\mathbb{Q}_{\ell})$。
这个上同调理论是Weil上同调理论是非常不平凡的结论。
事实上我们笔记的大部分都在证明这个事实，当然最后一个，硬Lefschetz定理
我们还没有证明，但这个定理是这里面最复杂的定理，我也懒得去证明，参考[@Weil-II]。
:::

::: example
若$k$完美，晶体上同调$H_{\mathrm{crys}}^i(X/W(k))\otimes K$是Weil上同调理论，
其中$K$是Witt环$W(k)$的分式域。
:::

::: definition
对于某个Weil上同调理论$H$，定义$Z\in C^*(X)$同调等价为零，即$Z\sim_{\mathrm{hom}}0$，
如果$\mathrm{cl}_X(Z)=0$。
记$Z_{\mathrm{hom}}^i(X)\subset C^i(X)$是同调等价为零的子群。
这个是依赖于Weil上同调理论的选取的。
:::
