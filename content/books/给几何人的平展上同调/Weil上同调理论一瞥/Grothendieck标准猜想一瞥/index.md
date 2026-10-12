---
title: Grothendieck标准猜想一瞥
---

有关motive和Grothendieck标准猜想的入门介绍参考[@PureMotives13]，
事实上这本小书也是我学习平展上同调的动机之一。
这里我们只参观一下何为Grothendieck标准猜想，它有哪些神奇之处？
这里均假设$k$是代数闭域且$X$是光滑射影簇。

事实上标准猜想包含一系列猜想，这些猜想不是相互独立的，它们之间有一些关系，
而当$k=\mathbb{C}$时这些猜想都可以被Hodge猜想所得到。
而如果这些猜想成立的话，那可以推出存在一个由motive得到的万有上同调理论，
而且可以推出Weil猜想（当然已经被Deligne绕过了标准猜想而证明）。

固定一个$F$-系数的Weil上同调理论$H(X)$，其中$F$是特征零的域，例如$\mathbb{Q},\mathbb{Q}_{\ell}$等，
对于$\mathrm{cl}_X:\operatorname{CH}^i(X)_{\mathbb{Q}}\to H^{2i}(X)$，
我们称$\mathrm{cl}_X$的像是代数的。

## 同调–数值猜想*

::: conjecture [同调–数值猜想$D(X)$]
我们有$Z^i_{\mathrm{hom}}(X)=Z^i_{\mathrm{num}}(X)$。
:::

这个猜想告诉我们如果成立的话，那么同调等价和Weil上同调选取无关。
任意特征下这个已经在$i=1$被证明（Matsusaka）；零特征下
$i=2$，曲线和Abel簇的情况被证明。而这个猜想显然被下述猜想所推出：

::: conjecture [Voevodsky猜想]
我们有$Z^i_{\otimes}(X)=Z^i_{\mathrm{num}}(X)$。
:::

## Künneth猜想*

考虑对角$\Delta(X)\subset X\times X$，考虑
\[
\mathrm{cl}_{X\times X}(\Delta(X))\in H^{2d}(X\times X)=\bigoplus_{i=0}^{2d}H^{2d-i}(X)\otimes H^i(X).
\]
取其分支（Künneth分支）为$\Delta_i^{\mathrm{topo}}\in H^{2d-i}(X)\otimes H^i(X)$。

::: conjecture [Künneth猜想$C(X)$]
其Künneth分支$\Delta_i^{\mathrm{topo}}$是代数的。
:::

这个猜想对有仿射分层的代数簇成立，对曲线、曲面和Abel簇也成立。
用Weil猜想的证明可以推出来有限域上的都成立（Katz-Messing）。
当$k=\mathbb{C}$，这个显然是Hodge猜想的推论。

## Lefschetz型猜想*

Weil上同调理论给出Lefschetz算子$L(\alpha)=\alpha\cup\mathrm{cl}_X(Y)$诱导同构
\[
L^{d-i}:H^{d-i}(X)\cong H^{d+i}(X),0\leq i\leq d.
\]
可以证明存在唯一的$\Lambda:H^i(X)\to H^{i-2}(X)$满足一定的交换性（就是说它接近$L$的逆，
参考[@PureMotives13]第36页）。
将$\Lambda$看作$H^*(X)^{\vee}\otimes H^*(X)$的元素，根据Poincaré对偶和Künneth公式得到
\[
H^*(X)^{\vee}\otimes H^*(X)\cong H^*(X)\otimes H^*(X)\subset H^*(X\times X).
\]
定义拓扑对应为$\Lambda$在$H^*(X\times X)$里的像。

::: conjecture [Lefschetz型猜想$B(X)$]
拓扑对应$\Lambda$是代数的。
:::

若$k=\mathbb{C}$，则注意到$\Lambda$是Hodge类，故这个猜想也是Hodge猜想的推论。
这个猜想对射影空间、Grassmannian和曲线都平凡。曲面情况是Grothendieck-Kleiman给出。
而Abel簇的情况被Lieberman-Kleiman给出。

Kleiman的一系列结论给出$B(X)$和定义Lefschetz算子的嵌入无关，且$B(X)$可以推出$C(X)$。
也可以推出如下猜想：

::: conjecture [猜想$A(X,L)$]
考虑交换图
\[
\begin{tikzcd}
  {\mathrm{Im}\mathrm{cl}_X^{i}} & {\mathrm{Im}\mathrm{cl}_X^{d-i}} \\
  {H^{2i}(X)} & {H^{2d-2i}(X)}
  \arrow["f", from=1-1, to=1-2]
  \arrow["{L^{d-2i},\cong}"', from=2-1, to=2-2]
  \arrow[hook', from=1-1, to=2-1]
  \arrow[hook', from=1-2, to=2-2]
\end{tikzcd}
\]
则单射$f$是同构。
:::

## Hodge型猜想*

我们知道当$i\leq d$时$L^{d-i}(X)$是同构，但$L^{d-i+1}$就不一定，
我们记$P^i(X):=\ker L^{d-i+1}$为第$i$个原初（primitive）上同调。
记$A^i_{\mathrm{prim}}(X)=\mathrm{Im}\mathrm{cl}_X^i\cap P^{2i}(X)$。

::: conjecture [Hodge型猜想$\mathrm{Hdg}(X)$]
设$i\leq d/2$，考虑配对
\[
A^i_{\mathrm{prim}}(X)\times A^i_{\mathrm{prim}}(X)\to\mathbb{Q},(x,y)\mapsto (-1)^i\operatorname{tr}\circ(L^{d-2i}(x)\cup y),
\]
则这个配对是正定的。
:::

当特征零时，根据Lefschetz准则，这个由比较定理和Riemann-Hodge双线性型给出。
对任意特征的，这个对曲面是对的。
