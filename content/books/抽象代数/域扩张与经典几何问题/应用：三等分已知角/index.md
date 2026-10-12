---
title: 应用：三等分已知角
notices:
  - name: 问题
    items:
      - 引理（$[L:K]=2$ 时存在 $x\in L-K$ 使 $x^2\in K$）对一般的域似乎不成立：证明中的配方需要除以 $2$，在特征 $2$ 的域上失效。本页只用到 $\mathbb{R}$ 的子域的情形。
---

给定${\mathbb{R}}^2$的子集$\mathscr{S}$，
由$\mathscr{S}$中两点$A,B\in \mathscr{S}$所决定的直线被称为 **$\mathscr{S}$-直线**；
以$\mathscr{S}$中某点$O\in \mathscr{S}$为圆心、以$|OA|$为半径所作的圆，其中$A\in \mathscr{S}$，
被称为 **$\mathscr{S}$-圆**。

::: definition [尺规可作性]
给定$\mathscr{S}\subset {\mathbb{R}}^2$，如果点$P$满足如下三个条件之一：

- $P$是两条$\mathscr{S}$-直线的唯一交点；

- $P$是一条$\mathscr{S}$-直线和一个 $\mathscr{S}$-圆的交点；

- $P$是两个$\mathscr{S}$-圆的交点；

就称$P$是 **$\mathscr{S}$-直接可作的**。
假设存在有限个点$P_1,\cdots, P_m$，使得对任意的$i\leqslant m$，
$P_i$是$\mathscr{S}\cup\{P_1,\cdots,P_{i-1}\}$-直接可作的并且$P_m=P$，
就称$P$是 **$\mathscr{S}$-可作的**。

令$\mathscr{S}_0=\{(0,0),(0,1)\}\subset {\mathbb{R}}^2$。
如果$x\in {\mathbb{R}}$是某个$\mathscr{S}_0$-可作点的横坐标或者纵坐标，
我们就称实数$x$是**尺规可作的**或者**可作的**。
:::

${\mathbb{R}}$中尺规可作的数满足如下三条性质：

- 1\) 若$x,y$是可作的，则$x\pm y$和$x\cdot y$可作。
  通过以下图示可以看出：

  ![](YPAA_Gal1.svg)

  其中，右图中需要做过$y$点的平行线。

- 2\) 若$x,y$是可作的并且$y\neq 0$，则$\frac{x}{y} $可作。

  ![](YPAA_Gal2.svg)

  根据1)，只要按照上图的方式做出$\frac{1}{x}$即可。

- 3\) 若$x$是可作的，则$\sqrt{x}$也可作。

  ![](YPAA_Gal3.svg)

::: remark
从$0,1$出发，根据前两条，${\mathbb{Q}}$中的数是尺规可作的。
:::

::: remark
前两条表明尺规可作的数构成一个域。这是${{\mathbb{R}}/{\mathbb{Q}}}$的一个中间域。
:::

::: theorem [Wantzel, 1837] {@thm:wantzel}
$x\in {\mathbb{R}}$是尺规可作的当且仅当存在有限个域扩张
\[
{\mathbb{Q}}=K_0\subset K_1\subset \cdots \subset K_m\subset {\mathbb{R}}
\]
使得$[K_i:K_{i-1}]=2$（$i=1,\cdots,m$）并且$x\in K_m$。

特别地，如果$x$是尺规可作的，必存在${\mathbb{Q}}\subset K\subset {\mathbb{R}}$，
使得$x\in K$并且$[K:{\mathbb{Q}}]$是$2$的幂。
:::

::: lemma
给定域扩张${L/K}$，$[L:K]=2$。
那么，存在$x\in L$，$x^2\in K$但是$x\notin K$，使得$\{1,x\}$是${L/K}$的基。
:::

::: proof
任选$y\in L-K$，由于$[L:K]=2$，$\{1,y\}$是${L/K}$的基。所以有$a,b\in K$，使得
\[
y^2=ay+b.
\]
通过配方，$x=y-\frac{a}{2}$满足要求。
:::

::: proof
给定$\mathscr{S}\subset {\mathbb{R}}^2$，
假设$\mathscr{S}$中所有点的横纵坐标都落在域$K\subset {\mathbb{R}}$中。
我们首先证明，如果$P=(x,y)$是$\mathscr{S}$-直接可作的，令$L=K(x,y)$，那么$[L:K]\leqslant 2$。
注意到，我们可以把$\mathcal{S}$-直线和$\mathcal{S}$-圆写成以$K$的数为系数的方程的零点。

- 1\) 若$P$是两条$\mathcal{S}$-直线的交点，通过解两个$K$-系数的线性方程联立所得到的方程组，
  其横纵坐标$x$和$y$仍是$K$中的数，从而$K=L$，即$[L:K]\leqslant 1$。

- 2\) 如果$P$是$\mathcal{S}$-直线和$\mathcal{S}$-圆的交点。
  此时，需要解一个$K$-系数的线性方程和一个$K$-系数的二次方程的联立，
  可以通过先用线性方程代换掉一个变量，从而解一个一元二次方程来求得$x$或者$y$。
  根据二次方程的求根公式，$L$可以通过$K$添加该一元二次方程的判别式的平方根得到，
  即$L=K[\sqrt{\Delta}]$，从而，$1,\sqrt{\Delta}$张成了$L$。特别地，$[L:K]\leqslant 2$。

- 3\) 如果$P$是两个$\mathcal{S}$-圆的交点，它们对应的圆方程的二次项形如$x^2+y^2$。
  通过相减，就可以得到一个一次方程，这就化为前一情形。

从$\mathbb{Q}=K_0$出发，通过有限步得到$(x,y)$，上面的讨论表明每次添加新得到的数得到的域，
如果与之前不同的话，扩张的次数必为$2$。据此，我们得到
\[
{\mathbb{Q}}=K_0\subset K_1\subset \cdots \subset K_m\subset {\mathbb{R}},
\]
其中，$[K_i:K_{i-1}]=2$，$i=1,\cdots,m$。

反之，我们对$m$进行归纳。$m=0$时，命题自然成立。
假设命题对小于$m$时均成立，对任意的$x\in K_m$，存在$a\in K_{m-1}$，使得$(x-a)^2 \in K_{m-1}$。
根据归纳假设，$(x-a)^2$是尺规可作的。
根据之前的讨论，$\pm\sqrt{(x-a)^2}$是尺规可作的，从而通过加减$a$，$x$也是可作的。
:::

所谓的倍立方问题问是否可用尺规作出这样的长度，
使得以该长度为棱长的立方体的体积恰为给定立方体的两倍？[^1]

::: corollary [倍立方问题]
$\sqrt[3]{2}$不是尺规可作的。
:::

::: proof
我们使用反证法。
若$\sqrt[3]{2}$是尺规可作的，根据Wantzel的定理，存在子域$K\subset {\mathbb{R}}$，
使得$\sqrt[3]{2}\in K$并且$[K:{\mathbb{Q}}]=2^m$，$m\in \mathbb{Z}$。我们首先证明：
\[
L={\mathbb{Q}}[\sqrt[3]{2},(\sqrt[3]{2})^2]
\]
是$K$的子域，其中，如果令$\alpha=\sqrt[3]{2}$，$L$中的数均形如$a+b\alpha+c\alpha^2$，这里，
$a,b,c\in {\mathbb{Q}}$。
根据$\alpha^3=2$，$L$中的数显然在加减和乘法下封闭，
只要证明$a+b\alpha+c\alpha^2$的倒数也在$L$中即可。
实际上，我们将$x=a,y=b\alpha,z=c\alpha^2$代入下面的恒等式
\[
(x+y+z)(x^2+y^2+z^2-xy-yz-zx)=x^3+y^3+z^3-3xyz,
\]
容易看到，上式右边
\[
d=a^3+b^3\alpha^3+c^3\alpha^6-3abc\alpha^3=a^3+2b^3+4c^3-6abc\in {\mathbb{Q}}.
\]
从而，$a+b\alpha+c\alpha^2$的倒数为$d^{-1}(x^2+y^2+z^2-xy-yz-zx)\in L$。据此，$[L:{\mathbb{Q}}]=3$。
然而，$[L:{\mathbb{Q}}]$整除$[K:{\mathbb{Q}}]=2^m$，矛盾。
:::

另一个著名的古典几何问题是研究是否可用尺规作出大小为给定角的三分之一的角？

::: corollary [三等分已知角]
$\cos(\frac{\pi}{9})$不是尺规可作的。特别地，不能通过尺规作图三等分$60^\circ$的角。
:::

::: proof
由于$1$是尺规可作的，给定角度为$\theta$的角等价于给出$\cos(\theta)$。
所以，三等分角度$\theta$等价于研究$\cos(\frac{\theta}{3})$是否尺规可作。根据三倍角公式，我们有
\[
4\cos(\frac{\theta}{3})^3-3\cos(\frac{\theta}{3})=\cos(\theta).
\]
令$x=\cos(\frac{\theta}{3})$并选取$\theta=\frac{1}{3}\pi$，所以，
\[
4x^3-3x-\frac{1}{2}=0.
\]
如果可以作$\frac{\pi}{9}$的角，那么，就可以尺规作出以上方程的一个根（它有三个实数根）。
通过考虑代换$X=2x$，我们能做出
\[
X^3-3X-1=0
\]
的根$\xi$。
我们在之后的课程中将证明，$X^3-3X-1$是${\mathbb{Q}}[X]$中的不可约多项式，从而，
$[{\mathbb{Q}}(\xi):{\mathbb{Q}}]=3$。
然而，$[{\mathbb{Q}}(\xi):{\mathbb{Q}}]$不是$2^m$的因子，矛盾。
:::

::: remark
通过升级的直尺和圆规，我们可以三等分已知角。最著名的例子是Archimedes的“二刻度尺”。
所谓的二刻度尺就是在一个直尺上标记了两个点$\alpha$和$\beta$。

![](YPAA_Gal4.svg)

给定角度$\theta=\angle AOB$，
我们作以$O$为圆心的圆并且选取半径$|OA|=|OB|$恰好为$\alpha$与$\beta$之间的距离。
移动二刻度尺使得它过$A$点并且$\alpha$落在$BO$的延长线上并且$\beta$落在圆上。
此时，直尺与$BO$的延长线的夹角就三等分了已知角度。
:::

::: remark
著名的Mohr–Mascheroni定理说可以只用圆规完成尺规作图（作出相应的点而不是直线）。
:::

古典几何作图的另一著名问题是所谓的化圆为方，即是否可用尺规作出面积为恰好等于给定圆面积的正方形？[^2]

::: corollary [化圆为方]
$\pi$不是尺规可作的。
:::

::: proof
根据Lindemann定理，$\pi$是超越数，即$\pi$不满足任何一个有理系数的代数方程。
如果$\pi$是尺规可作的，那么，$\pi\in K$，其中，$K$是${\mathbb{Q}}$的有限扩张（次数为$2^m$）。
那么，$\{1,\pi,\pi^2,\cdots,\pi^{2^m}\}$这$2^m+1$个数是${\mathbb{Q}}$-线性相关的，
即存在非零的$a_0,a_1,\cdots, a_{2^m}\in {\mathbb{Q}}$，使得
\[
a_0+a_1\pi+\cdots+a_{2^m}\pi^{2^m}=0.
\]
即$\pi$满足一个有理系数的代数方程，矛盾。
:::

[^1]: 公元前429年，为了遏制Delos岛的瘟疫，
  古希腊人根据神谕需要将阿波罗神殿中正立方体的祭坛（的体积）加大一倍。
[^2]: 传说古希腊的Anaxagoras是第一个研究这个问题的人，似乎与他监狱中观察圆形的太阳和方形的牢窗有关。
