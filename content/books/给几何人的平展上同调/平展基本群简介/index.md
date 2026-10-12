---
title: 平展基本群简介
---

对于连通概形$X$，定义$\operatorname{Fét}/X$为$X$上的有限平展态射构成的范畴，
而$\operatorname{Ét}/X$为$X$上的平展态射构成的范畴。给定概形和几何点$(X,\bar{x})$，定义
（纤维）函子
\[
\mathfrak{F}_{\bar{x}}:\operatorname{Fét}/X\to\operatorname{Sets},(\pi:Y\to X)\mapsto\operatorname{Hom}_X(\bar{x},Y).
\]
我们寻求这个函子是否可表？也就是说是否存在万有覆叠空间？事实上不一定存在：

::: example
考虑$\mathbb{C}$上仿射直线$\mathbb{A}^1$，
存在有限平展映射$\mathbb{A}^1\backslash\{0\}\to\mathbb{A}^1\backslash\{0\},x\mapsto x^n$，
那么注定没有
像拓扑里的$\exp:\mathbb{C}\to\mathbb{C}\backslash\{0\}$来表示万有覆盖！
:::

但是可以退而求其次，考虑射可表性：可以证明（但我不证明，事实上[@Mil80]也没证明。
而[@Ful15]里有很多证明，想看的读者可以看看）存在有限
平展覆盖组成的定向逆系统
\[
X'=((X_i,f_i)_{i\in I},\phi_{ij}:X_j\to X_i,f_i=\phi_{ij}\circ f_j,f_i\in\mathfrak{F}_{\bar{x}}(X_i))
\]
使得
\[
\operatorname{Hom}(X',Y):=\varinjlim\operatorname{Hom}_X(X_i,Y)\to\mathfrak{F}_{\bar{x}}(Y),\sigma\mapsto\sigma(f_i)
\]
是同构。事实上可以选取$X_i/X$为Galois覆盖，
也就是说$\deg(X_i/X)=\#\mathrm{Aut}_XX_i$，见[@Mil80]注5.4。

选取好Galois覆盖，对于$\phi_{ij}:X_j\to X_i$可以诱导
$\mathrm{Aut}_XX_j\to\mathrm{Aut}_XX_i$如下：注意到
$\mathrm{Aut}_XX_j\to\mathfrak{F}_{\bar{x}}(X_j),\sigma\mapsto\sigma(f_j)$是双射（由于是Galois覆盖，
见[@Ful15]第三节），
则通过$F(X_j)\to F(X_i),\alpha\mapsto\phi_{ij}(\alpha)$即得到映射。

::: definition
对于连通概形$X$和几何点$\bar{x}$，考虑上述构造，定义平展基本群为
\[
\pi_1^{\operatorname{ét}}(X,\bar{x})=\varprojlim\mathrm{Aut}_XX_i
\]
赋予有限离散拓扑的射影极限拓扑。
:::

::: theorem {@EtFunGrpThm}
考虑连通概形$X$和几何点$\bar{x}$。

(i)函子$\mathfrak{F}_{\bar{x}}$诱导出$\operatorname{Fét}/X$到有限
$\pi_1^{\operatorname{ét}}(X,\bar{x})$-集的等价；

(ii)取第二个几何点$\bar{x}'$，
我们有$\mathfrak{F}_{\bar{x}}\cong\mathfrak{F}_{\bar{x}'}$
进而诱导$\pi_1^{\operatorname{ét}}(X,\bar{x})\cong
\pi_1^{\operatorname{ét}}(X,\bar{x}')$，并且和(i)契合；

(iii)平展基本群有函子性，并且和(i)交换；

(iv)还可以定义平展基本群为
$\pi_1^{\operatorname{ét}}(X,\bar{x})=\mathrm{Aut}(\mathfrak{F}_{\bar{x}})$。
:::

::: proof
这些都比较复杂，秉承几何人的优良品质，我们直接默认它们吧！参考[@StacksProject, Tag 0BND]。
:::

::: remark {@EtalePath}
类似(iv)，可以定义连接$\bar{x},\bar{y}$的平展道路为
$\gamma\in\pi_1^{\operatorname{ét}}(X;\bar{x},\bar{y}):=\mathrm{Isom}(\mathfrak{F}_{\bar{x}},\mathfrak{F}_{\bar{y}})$，
会诱导
\[
\pi_1^{\operatorname{ét}}(X,\bar{y})\to\pi_1^{\operatorname{ét}}(X,\bar{x}),\phi\mapsto\gamma^{-1}\circ\phi\circ\gamma.
\]
:::

::: example
(i)对一个点$X=\operatorname{Spec}(k)$和几何点$\Omega$，
由定义知道$\pi_1^{\operatorname{ét}}(X,\Omega)=\operatorname{Gal}(k^{\operatorname{sep}}/k)$；

(ii)考虑$\mathbb{C}$上的$X=\mathbb{A}^1\backslash\{0\}$，则考虑$x\mapsto x^n$得到
\[
\pi_1^{\operatorname{ét}}(X,\bar{x})=\varprojlim\mathrm{Aut}_XX_i
=\varprojlim\bm{\mu}_n(k)\cong\widehat{\mathbb{Z}}\cong\prod_{\ell}\mathbb{Z}_{\ell};
\]

(iii)考虑代数闭域上的$X=\mathbb{P}^1$，由Riemann-Hurwitz公式不难得到$X$只有平凡的平展覆叠，
故$\pi_1^{\operatorname{ét}}(X,\bar{x})=1$。归纳可以得到
$\pi_1^{\operatorname{ét}}(\mathbb{P}^n,\bar{x})=1$；

(iv)事实上我们对$\pi_1^{\operatorname{ét}}(\mathbb{A}_k^1,\bar{x})$都一无所知，
其中$k$是正特征域（根据Artin-Schreier列，起码不是平凡的群）；

(v)对于正规簇$X$，考虑一般点上的几何点$\bar{x}$，假设
\[
L=\bigcup\left\{\text{几何点内的有限可分扩张}K/K(X):X\text{在}K\text{内的正规化到}X\text{平展}\right\},
\]
则$\pi_1^{\operatorname{ét}}(X,\bar{x})\cong\operatorname{Gal}(L/K(X))$，参考[@Ful15]命题3.3.6。
:::

自然的，我们也会考虑平展基本群和拓扑基本群有何种联系？我们有以下重要的比较定理：

::: theorem [Riemann存在定理]
设$X$是$\mathbb{C}$上的有限型概形，则有范畴等价
\[
(\operatorname{Fét}/X)\to(\mathrm{FTopCov}/X^{\operatorname{an}}).
\]
特别的有$\pi_1^{\operatorname{ét}}(X,\bar{x})\cong\widehat{\pi_1(X^{\operatorname{an}},x)}$，
为射有限完备化。
:::

::: proof
这个证明更加复杂，我们也略去，请参考[@SGA-I]的定理XII.5.1。
另见 @039。
:::

这样我们就可以通过拓扑基本群来计算许多$\mathbb{C}$上的有限型概形的平展基本群了。

::: remark
(i)对于$X$为$k$上几何连通的簇，我们有正合列（参考[@Ful15]命题3.3.7）：
\[
1\to\pi_1^{\operatorname{ét}}(X_{k^{\operatorname{sep}}},\bar{x})\to\pi_1^{\operatorname{ét}}(X,\bar{x})\to\operatorname{Gal}(k^{\operatorname{sep}}/k)\to1;
\]

(ii)对于$X=\mathbb{P}^1_{\mathbb{Q}}\backslash\{0,1,\infty\}$，运用正合列得到
\[
1\to\pi_1^{\operatorname{ét}}(X_{\mathbb{Q}^{\mathrm{al}}},\bar{x})\to\pi_1^{\operatorname{ét}}(X,\bar{x})\to\operatorname{Gal}(\mathbb{Q}^{\mathrm{al}}/\mathbb{Q})\to1.
\]
嵌入$\mathbb{Q}^{\mathrm{al}}\hookrightarrow\mathbb{C}$可以得到
\[
\pi_1^{\operatorname{ét}}(X_{\mathbb{Q}^{\mathrm{al}}},\bar{x})\cong\widehat{\langle a,b,c|abc=1\rangle}.
\]
而群$\operatorname{Gal}(\mathbb{Q}^{\mathrm{al}}/\mathbb{Q})$则十分复杂，
如果完全了解它就可以了解相当一部分的算术猜想和结果（摘自J. Milne的讲义[@milneLEC]）。
:::
