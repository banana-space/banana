---
title: 与整除相关的几类环
---

::: definition [元素层次上的整除概念]
$A$是整环。

给定$a,b\in A$，若有$q\in A$，使得$a=qb$，则称 **$b$整除$a$** 并记作$b\mid a$。

给定$x\in A$，若对任意$a,b\in A$，$x\mid a\cdot b$意味着$x\mid a$或$x\mid b$，则称$x$是**素元**。

给定$y\in A$并假设$y\notin A^\times$（对乘法不可逆），假设对任意$a,b\in A$，若$y= a\cdot b$，
则$a\in A^\times$或$b\in A^\times$，就称$y$是**不可约元**。

给定$a,b\in A$，若有$u\in A^\times$，使得$a=u\cdot b$，则称$a$和$b$是**伴随的**。
:::

::: remark
上述概念可在理想的层次上表述：

- 1\) 整除性：$b\mid a \ \Leftrightarrow a\in (b) \  \Leftrightarrow (a)\subset (b)$；

- 2\) 素元：$x$是素元等价于$(x)$是素理想。

以上叙述的证明是平凡的。
:::

::: remark
素元是不可约的。

实际上，给定素元$x$，若$x=ab$，则$x\mid ab$，从而可不妨设$x\mid a$，即存在$a'$，使得$a=a'x$，从而，
$x=a'bx$。由于$A$是整环，所以$a'b=1$，即$b\in A^\times$，从而$x$是不可约的。

我们之后会举例说明：不可约元未必是素元。
:::

::: remark
$A$是主理想整环，则素元等价于不可约元。

只要证明不可约元为素元即可。
对任意的不可约元$x\in A$，考虑$(x)$以及极大理想$\mathfrak{m}\supset (x)$。
由于$A$为主理想整环，存在$a\in A$，使得$(a)=\mathfrak{m}\supset (x)$。
所以，存在$b\in A$，使得$x=ab$。由于$x$不可约，$b\in A^\times$。
这样，$\mathfrak{m}=(a)=(b^{-1}x)=(x)$。特别地，由于极大理想是素理想，$(x)$是素理想，从而$x$是素元。
:::

以上推理还给出了如下命题：

::: proposition
主理想整环的非零素理想是极大理想。
:::

::: remark
考虑域$K$上的多项式环$K[X]$。
由于$K[X]^\times = K^\times$，$P(X)\in K[X]$是不可约元等价于传统意义上的不可约多项式。
另外，$K[X]$是主理想整环，所以对任意的不可约多项式$P$，$(P)$是极大理想，从而${K[X]/(P)}$是域。

考虑映射的复合：
\[
K\stackrel{\subset}{\longrightarrow} K[X] \stackrel{\pi}{\longrightarrow} {K[X]/(P)} .
\]
这是环同态，从而是域同态。由此可见，我们得到域扩张
\[
\begin{tikzcd}
{K[X]/(P)} \arrow[d, dash]\\
K
\end{tikzcd}
\]
令$d=\deg(P)$，不妨$P=X^{d}+a_{d-1}X^{d-1}+\cdots+a_1X+a_0$，其中，$a_i\in K$。
那么，$\pi(P)=0$意味着在${K[X]/(P)}$中，我们有
\[
\overline{X}^d=-a_{d-1}\overline{X}^{d-1}-\cdots-a_1 \overline{X}-a_0,
\]
其中，$\overline{X}=\pi(X)$。
据此，我们知道$1,\overline{X},\cdots,\overline{X}^{d-1}$（的$K$-线性组合）生成了${K[X]/(P)}$。
另外，$1,\overline{X},\cdots,\overline{X}^{d-1}$是$K$-线性无关的，
因为若有$b_0,\cdots,b_{d-1}\in K$，使得在${K[X]/(P)}$中，
$\displaystyle\sum_{k=0}^{d-1}b_k\overline{X}^k=0$，
则$\displaystyle\sum_{k=0}^{d-1}b_k X^k\in {\rm Ker}(\pi)=(P)$，从而，
$P$整除$\displaystyle\sum_{k=0}^{d-1}b_k X^k$。
由于$P$不可约且次数为$d$，从而，$\displaystyle\sum_{k=0}^{d-1}b_k X^k=0$，这就证明了线性无关性。

所以，$1,\overline{X},\cdots,\overline{X}^{d-1}$是一组基。特别地，$[{K[X]/(P)} :K]=\deg(P)$。
:::

::: definition [Euclid整环]
$A$是整环。若存在映射
\[
N\colon A\longrightarrow{\mathbb{Z}}_{\geqslant 0},
\]
使得$N(0)=0$并对任意的$a,b\in A$，
存在（不要求唯一）$q,r\in A$使得$a=qb+r$且要么$r=0$要么$N(r)<N(b)$，则称$N$是$A$上的**范数**。
如果整环$A$具有范数，则称之为**Euclid整环**。

对于上述表达式$a=qb+r$，我们称$q$为$a$除以$b$的**商**，称$r$为**余数**。
:::

::: remark
在Euclid整环$A$中有辗转相除法：对任意$a,b\in A$，存在$r_0,r_1,\cdots, r_k$，使得
\[
r_0=a,r_1=b,r_0=q_1r_1+r_2, r_1=q_2r_2+r_3,\cdots, r_{k-1}=q_{k}r_k+r_{k+1}.
\]
其中，对$i=1,\cdots, k$。
由于$N(r_i)<N(r_{i-1})$并且$N$在非负整数中取值，从而存在$k$，使得$r_{k+1}=0$。
:::

::: example
${\mathbb{Z}}$是Euclid整环。对$n\in {\mathbb{Z}}$，我们取$N(n)=|n|$。
:::

::: example
$K$是域，$K[X]$是多项式环，这是Euclid整环。

对$P(X)\in K[X]$，令$N(P)=\deg(P)$。
由于对多项式$F,G\in K[X]$，我们可以做带余除法，使得存在唯一的$Q,R\in K[X]$，
满足$G(X)=Q(X)F(X)+R(X)$并且$\deg(R)<\deg(F)$，这就给出了$K[X]$上的范数。
:::

::: proposition
Euclid整环是主理想整环。
:::

::: proof
对任意理想$I\subset A$，选取$b\in I$，使得$N(b)=\displaystyle\min_{a\in I-\{0\}}N(a)$。
根据Euclid整环的定义，对任意$a\in I$，存在$q,r\in A$使得$a=qb+r$。
那么，$r= 0$：否则$N(r)<N(b)$，然而$r=a-qb\in I$，这与$b$的范数最小矛盾。
从而，$a=qb\in (b)$。这表明，$I=(b)$为主理想。
:::

::: example
Gauss整数环$\mathbb{Z}[\sqrt{-1}]$是Euclid整环。

作为集合，定义$\mathbb{Z}[\sqrt{-1}]=\{a+b\sqrt{-1}\mid a,b\in \mathbb{Z}\}$，
这是$\mathbb{C}$中整系数的格点集。
在复数的运算下，$\mathbb{Z}[\sqrt{-1}]$是${\mathbb{C}}$的子环，从而是整环。

定义$\mathbb{Z}[\sqrt{-1}]$上的范数
\[
N\colon\mathbb{Z}[\sqrt{-1}]\longrightarrow \mathbb{Z}_{\geqslant 0},  \ \ N(x+y\sqrt{-1})=x^2+y^2.
\]
我们还有$N(a\cdot b)=N(a)N(b)$。

对任意$a=x+y\sqrt{-1},b=z+w\sqrt{-1}\in \mathbb{Z}[\sqrt{-1}]$，在$\mathbb{C}$中计算其商：
\[
\frac{a}{b}=\frac{(xz+yw)+(yz-xw)\sqrt{-1}}{N(b)}.
\]
考虑略作修正的带余除法稍作修改：存在$q_1,q_2\in {\mathbb{Z}}$，
$r_1,r_2\in \big[-\frac{1}{2}N(b),\frac{1}{2}N(b)\big)$，使得
\[
xz+yw=q_1\cdot N(b)+r_1, \ \ yz-xw=q_2\cdot N(b)+r_2.
\]
此时，
\[
\frac{a}{b}=\frac{(xz+yw)+(yz-xw)\sqrt{-1}}{N(b)}=q_1+q_2\sqrt{-1}+\frac{r_1+r_2\sqrt{-1}}{N(b)}.
\]
从而，
\[
a=\underbrace{(q_1+q_2\sqrt{-1})}_{q}b+\underbrace{\frac{r_1+r_2\sqrt{-1}}{N(b)}b}_{r}=qb+r.
\]
由于$q\in {\mathbb{Z}}[\sqrt{-1}]$，从而$r\in {\mathbb{Z}}[\sqrt{-1}]$。以下计算$N(r)$：
\[
\begin{aligned}
N(r)&=N\left(\frac{r_1+r_2\sqrt{-1}}{N(b)}b\right)=\frac{N(r_1+r_2\sqrt{-1})N(b)}{N(b)^2}=\frac{r_1^2+r_2^2}{N(b)}\\
&\leqslant\frac{\frac{1}{4}N(b)^2+\frac{1}{4}N(b)^2}{N(b)}<N(b).
\end{aligned}
\]
这就证明了$N$为范数，从而$\mathbb{Z}[\sqrt{-1}]$是Euclid整环。

实际上，对于$a,b\in \mathbb{Z}[\sqrt{-1}]$，
考虑复数$\frac{a}{b}$在格点集$\mathbb{Z}[\sqrt{-1}]$中的位置，那么，
存在$q\in \mathbb{Z}[\sqrt{-1}]$，使得
\[
|{\rm Re}(q)-{\rm Re}(\frac{a}{b})|\leqslant\frac{1}{2}, \ \ |{\rm Im}(q)-{\rm Im}(\frac{a}{b})|\leqslant\frac{1}{2}.
\]
特别地，$N(\frac{a}{b}-q)\leqslant\frac{1}{2}$。那么，令$r=a-qb$。我们就有
\[
N(r)=N(b)N(\frac{a}{b}-q)\leqslant\frac{1}{2}N(b)<N(b).
\]

![](YPAA_Gal6.svg)

还可以几何地考虑上述带余除法：给定$b$，考虑${\mathbb{C}}$上的格点集
\[
\Gamma_{(b,\sqrt{b})}=\{n \cdot b+m\cdot \sqrt{-1}b=(n+m\sqrt{-1})b\mid n,m\in {\mathbb{Z}}\}.
\]
此时，我们在$\Gamma_{(b,\sqrt{b})}$中找一个离$a$最近的格点即可（每个格子都是正方形）。
:::

::: definition [唯一分解整环]
$A$是整环。对任意的$a\in A-\big(\{0\}\cup A^{\times}\big)$，有

- 1\) 存在$n\geqslant 1$和$A$中不可约元$p_1,\cdots,p_n$（可重复），使得$a=p_1\cdots p_n$；

- 2\) 以上分解在伴随意义下唯一：若$a=q_1\cdots q_m$，$m\geqslant 1$且$q_1,\cdots,q_m$是不可约元，
  则$m=n$且通过调整脚标，对任意的$i$，$q_i$与$p_i$伴随。

:::

::: remark
${\mathbb{Z}}$是唯一分解整环并且素因数分解在伴随意义下唯一：比如对任意的素数$p,q$，
有$p\cdot q =(-p)\cdot (-q)$，这里，${\mathbb{Z}}^\times=\{1,-1\}$。
:::

::: remark
$K$是域，多项式环$K[X]$也是唯一分解整环，这对应着多项式分解为不可约多项式的乘积。
:::

::: remark
$A$是唯一分解整环，那么，每个$a\in A$可以写成：
\[
a=u p_1^{d_1}p_2^{d_2}\cdots p_n^{d_n},
\]
其中，$p_1,\cdots,p_n$是不可约元，$u\in A^\times$。
特别地，元素之间的整除性可从分解中不可约元素的幂读出：即对
\[
a=u p_1^{d_1}p_2^{d_2}\cdots p_n^{d_n}, \ \ b=v p_1^{e_1}p_2^{e_2}\cdots p_n^{e_n},
\]
其中，$u,v\in A^\times$，$p_i$为不可约元且$d_i,e_i$为非负整数，$a\mid b$等价于$d_i\leqslant e_i$，
其中$i=1,\cdots,n$。
:::

::: remark
唯一分解整环中元素为素元等价于它是不可约的。

已知素元不可约，现在证明不可约元$x\in A$是素元，即证$(x)$是素理想。
对任意$a,b\in A, ab\in (x)$，即有$c\in A$，使得$ab=cx$。
不妨设$a,b\notin A^\times$，考虑它们的分解$a=up_1\cdots p_n,b=vq_1\cdots q_m$，其中，
$p_i,q_j$为不可约元。
对$c$和$x$也做类似分解，根据分解的唯一性以及$ab=cx$，$x$（不可约元）与某个$p_i$或$q_j$伴随，
不妨假设$p_1=wx$，其中，$w\in A^\times$，那么
\[
a=u \cdot w \cdot x \cdot p_2 \cdots p_n\in (x).
\]
这说明$(x)$是素理想。
:::

::: theorem
主理想整环是唯一分解整环。
:::

::: proof
任选$a\in A$，其中，$a\notin \{0\}\cup A^{\times}$，我们来构造$a$的分解。

若$a$不可约，则$a=a$为所要的分解。

否则，有$a=a_1\cdot b_1$，其中$a_1,b_1\notin A^\times$。
特别地，$(a)\subset (a_1)$。若$a_1,b_1$都是不可约的，那么$a=a_1\cdot b_1$为所求。
若不然，将$a_1$和$b_1$分解成为乘积$a_2\cdot a'_2$和$b_2\cdot b'_2$，
则有$a=a_2\cdot a'_2\cdot b_2\cdot b'_2$。
特别地，我们有$(a_1)\subset (a_2)$；然后对$a_2,a'_2,b_2,b'_2$进行同样的讨论，以此类推。
如果上述构造在有限步即停止，我们就得到了$a$的分解。否则，我们得到了无限长的主理想序列：
\[
(a)\subset (a_1) \subset (a_2) \subset \cdots \subset A,
\]
并且$(a_i) \neq (a_{i+1})$。令$I=\displaystyle\bigcup_{i\geqslant 1}(a_i)$，这是$A$的理想。
由于对任意的$i$，$1\notin (a_i)$，所以$I\neq A$。根据$A$是主理想整环，$I=(c)$。
根据定义$I$的构造，存在$k$，使得$c\in (a_k)$，则$I=(a_k)$。这说明该理想序列有限，矛盾。

最终证明分解的唯一性：$a=u p_1\cdots p_n= vq_1\cdots q_m$是两个分解，
其中，$u,v\in A^\times$而$p_i$和$q_j$都是不可约元。
那么，$q_1\cdots q_m\in (p_1)$。
我们知道主理想整环中的不可约元是素元，所以，$(p_1)$是素理想。
从而，存在某个$q_j\in (p_1)$，比如说$q_1\in (p_1)$，$q_1=wp_1$。
由于$q_1$不可约，则$w\in A^\times$。从而，
\[
u p_2\cdots p_n= vw \cdot q_2\cdots q_m.
\]
如此继续下去，唯一性是明显的。
:::

::: remark
我们已经证明了如下包含关系：
\[
\{\text{Euclid 整环}\}\subset \{\text{主理想整环}\}\subset \{\text{唯一分解整环}\}.
\]
并且在以上三种情形下某元素为素元等价于它是不可约的。
:::

::: example
$A={\mathbb{Z}}[\sqrt{-5}]$不是唯一分解整环。

作为集合，$\mathbb{Z}[\sqrt{-5}]=\{x+y\sqrt{-5}\mid x,y\in \mathbb{Z}\}$，
它上面的运算为复数的四则运算。特别地，这是${\mathbb{C}}$的子环。

在$A=\mathbb{Z}[\sqrt{-5}]$上，我们有分解：
\[
6=2\times 3=(1+\sqrt{-5})(1-\sqrt{-5}).
\]
我们证明$2,3,1\pm \sqrt{-5}$是不可约的且它们两两不伴随。我们考虑如下的范数映射：
\[
N\colon{\mathbb{Z}}[\sqrt{-5}]\rightarrow {\mathbb{Z}},  \ \ x+y\sqrt{-5}\mapsto x^2+5y^2.
\]
对任意的$a,b\in A$，我们有$N(a\cdot b)=N(a)N(b)$。特别地，如果$a\in A^\times$，令$b=a^{-1}$，则
\[
N(a)N(b)=N(1)=1.
\]
由于$N(a)$和$N(b)$是非负整数，所以$N(a)=1$，从而，$A^\times=\{\pm 1\}$。对以上计算稍加分析即可得出
\[
N(a)=1 \ \Leftrightarrow \ a\in A^\times.
\]
另外，我们观察到
\[
\ \ N(2)=4, \ N(3)=9, \ N(1\pm\sqrt{-5})=6
\]
并且$2,3\notin N({\mathbb{Z}}[\sqrt{-5}])$，所以$2, 3, 1\pm\sqrt{-5}$是不可约的。
另外，不存在$u\in A^\times$，使得$u(1+\sqrt{-5})=1-\sqrt{-5}$。
所以，以上元素两两不伴随。所以，${\mathbb{Z}}[\sqrt{-5}]$不是唯一分解整环。
:::

::: example [Gauss整数环的应用：Fermat的定理]
我们已经证明了${\mathbb{Z}}[\sqrt{-1}]$是Euclid整环，其范数为
\[
N\colon\mathbb{Z}[\sqrt{-1}]\longrightarrow \mathbb{Z}_{\geqslant 0},  \ \ N(x+y\sqrt{-1})=x^2+y^2.
\]
另外，对任意$a,b\in {\mathbb{Z}}[\sqrt{-1}]$，$N(a\cdot b)=N(a)N(b)$。
从而，借助范数$N$，我们可以计算$\mathbb{Z}[\sqrt{-1}]^\times$：
$a\in {\mathbb{Z}}[\sqrt{-1}]^\times$等价于$N(a)=1$。所以，
\[
{\mathbb{Z}}[\sqrt{-1}]^\times =\{\pm 1,\pm \sqrt{-1}\}.
\]
根据$N(a\cdot b)=N(a)N(b)$以及${\mathbb{Z}}[\sqrt{-1}]^\times=N^{-1}(1)$，
若$p\in {\mathbb{Z}}$是素数，$a\in {\mathbb{Z}}[\sqrt{-1}]$使得$N(a)=p$，
则$a$是${\mathbb{Z}}[\sqrt{-1}]$的不可约元（等价于素元）。

我们要刻画${\mathbb{Z}}[\sqrt{-1}]$的不可约元，这是主理想整环，
只要刻画${\mathbb{Z}}[\sqrt{-1}]$中素理想即可。
假设$\mathfrak{p}\subset {\mathbb{Z}}[\sqrt{-1}]$是（非零）素理想，
${\mathbb{Z}}\subset {\mathbb{Z}}[\sqrt{-1}]$是子环，
我们考虑$\mathfrak{p}\cap {\mathbb{Z}}$是${\mathbb{Z}}$的非零素理想：

- 对任意的$x+y\sqrt{-1}\in \mathfrak{p}-\{0\}$，
  我们有$x^2+y^2=(x-y\sqrt{-1})(x+y\sqrt{-1})\in \mathfrak{p}\cap {\mathbb{Z}}$，从而，
  $\mathfrak{p}\cap {\mathbb{Z}}\neq 0$。

- $\mathfrak{p}\cap {\mathbb{Z}}$是素理想。

  我们对环同态${\mathbb{Z}}\hookrightarrow {\mathbb{Z}}[\sqrt{-1}]$应用如下命题：
  [^1]对任意环同态$\varphi\colon A\rightarrow B$，$\mathfrak{p}\subset B$是理想，
  则$\varphi^{-1}(\mathfrak{p})\subset A$也是理想并且若$\mathfrak{p}$是素理想，
  则$\varphi^{-1}(\mathfrak{p})$亦然。

由于${\mathbb{Z}}$是主理想整环，所以存在素数$p$，使得$\mathfrak{p}\cap {\mathbb{Z}}=(p)$。
所以，每个${\mathbb{Z}}[\sqrt{-1}]$的素理想都与某个${\mathbb{Z}}$中的素数相关联。
下面交换图概括了上述分析：

\[
\begin{tikzcd}
\mathfrak{p} \arrow[rr, "\subset"]  &&  {\mathbb{Z}}[\sqrt{-1}] \\
\mathfrak{p}\cap {\mathbb{Z}}=(p)  \arrow[u,  hook]\arrow[rr, "\subset"] & &{\mathbb{Z}}     \arrow[u,  hook]\end{tikzcd}
\]

由于$N(p)=p^2$并且$p^2$在${\mathbb{Z}}$中分解方式只有$p^2=1\cdot p^2=p\cdot p$两种，
根据$N(ab)=N(a)N(b)$，作为${\mathbb{Z}}[\sqrt{-1}]$中的元素，仅有两种可能：

- 第一，$p$在${\mathbb{Z}}[\sqrt{-1}]$中仍不可约；

- 第二，$p$在${\mathbb{Z}}[\sqrt{-1}]$中恰可写成两个不可约元之积。

我们现在判断$(p)\subset {\mathbb{Z}}[\sqrt{-1}]$是否是素理想，
这等价于研究${{\mathbb{Z}}[\sqrt{-1}]/p{\mathbb{Z}}[\sqrt{-1}]}={{\mathbb{Z}}[\sqrt{-1}]/(p)}$
是否是整环。通过复合映射
\[
{\mathbb{Z}}\rightarrow {\mathbb{Z}}[\sqrt{-1}]\rightarrow {{\mathbb{Z}}[\sqrt{-1}]/p{\mathbb{Z}}[\sqrt{-1}]}
\]
以及环同态的基本定理，我们得到环同态
\[
{\mathbb{F}_p}={{\mathbb{Z}/p\mathbb{Z}}} \longrightarrow {{\mathbb{Z}}[\sqrt{-1}]/p{\mathbb{Z}}[\sqrt{-1}]} .
\]
我们考虑环同态
\[
\varphi\colon{\mathbb{F}_p}[X] \longrightarrow {{\mathbb{Z}}[\sqrt{-1}]/p{\mathbb{Z}}[\sqrt{-1}]} , \ \ P(X)\mapsto P(\sqrt{-1}).
\]
由于$\varphi(X^2+1)=0$，根据环同态的基本定理，我们得到
\[
\psi\colon {{\mathbb{F}_p}[X]/(X^2+1)} \stackrel{\simeq}{\longrightarrow} {{\mathbb{Z}}[\sqrt{-1}]/p{\mathbb{Z}}[\sqrt{-1}]} .
\]
这很明显是满射。
另外，${{\mathbb{F}_p}[X]/(X^2+1)}$有$p^2$个元素；
通过研究Gauss整数对应的格点我们知道${{\mathbb{Z}}[\sqrt{-1}]/p{\mathbb{Z}}[\sqrt{-1}]}$也恰有$p^2$
个元素，所以$\psi$是环同构。

综合以上讨论，
$(p)\subset {\mathbb{Z}}[\sqrt{-1}]$是素理想等价于${{\mathbb{F}_p}[X]/(X^2+1)}$是整环。
我们有两种可能性：

- $X^2+1$是${\mathbb{F}_p}[X]$中的不可约多项式。
  此时，$(X^2+1)\subset {\mathbb{F}_p}[X]$是素理想，所以${{\mathbb{F}_p}[X]/(X^2+1)}$是整环。
  此时，$p$是${\mathbb{Z}}[\sqrt{-1}]$的素元。

- $X^2+1$在${\mathbb{F}_p}[X]$中可约。
  此时必然有$X^2+1=(X+a)(X-a)$，其中$a^2=-1$且$a\in {\mathbb{F}_p}$。
  这等价于$-1\in {\mathbb{F}_p}$是完全平方（若$-1$不是完全平方，该$X^2+1$不可约）。
  另外，理想$(X-a)$与$(X+a)$互素（因为$(X-a)+(X+a)={\mathbb{F}_p}[X]$），根据中国剩余定理，
  \[
  {{\mathbb{F}_p}[X]/(X^2+1)} \simeq {{\mathbb{F}_p}[X]/(X+a)} \times {{\mathbb{F}_p}[X]/(X-a)} .
  \]
  这不是整环（因为$(1,0)\cdot (0,1)=(0,0)$），从而$p$不是${\mathbb{Z}}[\sqrt{-1}]$的素元。

总之，
素数$p$在${\mathbb{Z}}[\sqrt{-1}]$中不可约当且仅当$-1$不是${{\mathbb{Z}/p\mathbb{Z}}}$中的完全平方。

这是初等数论中标准的二次剩余问题：假设$\xi$是循环群${\mathbb{F}_p}^\times$的生成元，则$-1=\xi^d$，
其中$0\leqslant d<p-1$。特别地，$2d<2(p-1)$。由于$\xi^{2d}=1$（因为$(-1)^2=1$），所以$p-1\mid 2d$。
根据$2d<2(p-1)$，$2d=p-1$，即$d=\frac{p-1}{2}$。我们分情况讨论：

- $p=2$。此时，$-1 =1\in {{\mathbb{Z}}/2{\mathbb{Z}}}$是完全平方。

- $p\equiv 1 \bmod 4$，即$p=4k+1$。此时，$-1 =\xi^\frac{p-1}{2}=\xi^{2k}$是完全平方。

- $p\equiv 3 \bmod 4$，即$p=4k+3$。此时，$-1 =\xi^\frac{p-1}{2}=\xi^{2k+1}$。
  如果$-1=b^2=\xi^{2l}$是完全平方，则$\xi^{2k+1}=\xi^{2l}$，即$\xi^{2k+1-2l}=1$，
  从而$p-1\mid 2k+1-2l$。然而$p-1$是偶数，矛盾。所以，$-1$不是完全平方。

综上所述，只有满足$p\equiv 3 \bmod 4$的素数$p$在${\mathbb{Z}}[\sqrt{-1}]$中仍为不可约的。

当$p\equiv 1 \bmod 4$时，我们有
\[
p=(x+y\sqrt{-1})(z+w\sqrt{-1}), \ \ x,y,z,w\in {\mathbb{Z}}.
\]
其中，$x+y\sqrt{-1}，z+w\sqrt{-1}$是${\mathbb{Z}}[\sqrt{-1}]$中的不可约元素。另外，我们必然有
\[
N(x+y\sqrt{-1})=p \ \Rightarrow \ x^2+y^2=p  \ \Rightarrow p= (x+y\sqrt{-1})(x-y\sqrt{-1}).
\]
根据${\mathbb{Z}}[\sqrt{-1}]$的唯一分解，
$z+w\sqrt{-1} \in \{\pm 1,\pm\sqrt{-1}\}\cdot x-y\sqrt{-1}$。
这就给出了Fermat的著名结果：素数$p$可写成两个完全平方数之和$x^2+y^2$当且仅当
$p\equiv 1 \bmod 4$。进一步，$p=x^2+y^2$的写法是唯一的。

另外，交换图表
\[
\begin{tikzcd}
\mathfrak{p} \arrow[rr, "\subset"]  &&  {\mathbb{Z}}[\sqrt{-1}] \\
\mathfrak{p}\cap {\mathbb{Z}} =(p)  \arrow[u,  hook]\arrow[rr, "\subset"] & &{\mathbb{Z}}     \arrow[u,  hook]\end{tikzcd}
\]
给出了${\mathbb{Z}}[\sqrt{-1}]$中所有不可约元（在伴随意义下）
\[
\big\{1+\sqrt{-1},  x\pm y\sqrt{-1}, q\bigm| q \equiv 3 \bmod 4 ~\text{是素数}; q \equiv 1 \bmod 4 ~\text{是素数且}~x^2+y^2=q, x>0,y>0 \big\}.
\]
:::

::: example [Eisenstein整数环及其应用：$n=3$时的Fermat大定理]
令$\omega=e^{\frac{2\pi}{3}i}$。
作为集合，定义Eisenstein整数为$\mathbb{Z}[\omega]=\{a+b\omega\mid a,b\in \mathbb{Z}\}$，
这是${\mathbb{C}}$上的正三角形的格点集：

![](YPAA_GS18_3.svg)

根据$\omega^2+\omega+1=0$，在复数的运算下$\mathbb{Z}[\omega]$是${\mathbb{C}}$的子环，从而是整环。

定义$\mathbb{Z}[\omega]$上的范数
\[
N\colon\mathbb{Z}[\omega]\longrightarrow \mathbb{Z}_{\geqslant 0},  \ \ N(a+b\omega)=|a+b\omega|^2.
\]
实际上，我们有
\[
N(a+b\omega)=a^2-ab+b^2=\frac{1}{4}\big((2a-b)^2+3b^2\big)\in \mathbb{Z}_{\geqslant 0}.
\]
在$\mathbb{Z}[\omega]$中，范数最小的非零元素为$\{\pm 1,\pm \omega,\pm \omega^2\}$，
其余非零元素的范数至少是$3$。根据$N(x\cdot y)=N(x)N(y)$，我们就可以断言
\[
\mathbb{Z}[\omega]^\times =\{\pm 1,\pm \omega,\pm \omega^2\}\simeq {{\mathbb{Z}}/6{\mathbb{Z}}} .
\]
我们现在证明$\mathbb{Z}[\omega]$在范数$N$下是Euclid整环：
注意到以每个格点为中心放置一个半径为$1$的开圆盘就可以覆盖整个复平面${\mathbb{C}}$，从而，
对任意的$z\in {\mathbb{C}}$，存在$q\in \mathbb{Z}[\omega]$，使得$|z-q|<1$。
对任意的$a,b\in \mathbb{Z}[\omega]$，则存在$q\in \mathbb{Z}[\omega]$，使得
\[
|q-\frac{a}{b}|<1 \ \ \Leftrightarrow \ \  |a-bq|<|b|.
\]
令$r=a-bq\in \mathbb{Z}[\omega]$，则$a=q\cdot b+r$并且$N(r)<N(b)$。
这就证明了$\mathbb{Z}[\omega]$是Euclid整环。[^2]

在$\mathbb{Z}[\omega]$中，$1-\omega$是素元（因为其范数为$3$）。
另外，范数为$3$的元素共有$6$个，它们为$\mathbb{Z}[\omega]^\times \cdot (1-\omega)$。
尽管$3$在${\mathbb{Z}}$中是素数，但是它在$\mathbb{Z}[\omega]$中可以分解：通过$N(3)=9$，我们不难猜到
\[
3=(1-\omega)(1-\overline{\omega})= (1-\omega)(1-\omega^2)= u(1-\omega)^2, \ \ u \in \mathbb{Z}[\omega]^\times.
\]

利用$\mathbb{Z}[\omega]$中的唯一分解定理，我们来证明方程$x^3+y^3=z^3$的整数解必然满足$xyz=0$。

用反证法，假设$x,y,z$均非零。不妨假设$x,y,z$两两互素（否则可以通过约掉公因子化为此情形）。
注意到$x,y$在${\mathbb{Z}}$中互素，那么必然在${\mathbb{Z}}[\omega]$中互素，
因为$(x)+(y)$已经包含了元素$1$。
由于整数的三次方除$9$的余数必然是$0$或$\pm 1$，所以，$x,y,z$中必有某个数被$3$整除。
通过将方程变形为$x^3+(-z)^3=(-y)^3$，总可假设$3\mid z$。
特别地，$3\mid x+y$（因为$3\mid x^3+y^3$意味着$x,y$除$3$一个余数为$1$而另一个余数为$-1$）。
所以，我们只要研究如下方程的非零整数解即可：
\[
x^3+y^3=\big(3^k z\big)^3, \ \ k\geqslant 1 ~\text{且}~3\nmid z, \ \ \cdots \ \cdots \ (*)
\]
我们可以将该方程分解为
\[
(x+y)(x+\omega y)(x+\omega^2y)=\big(3^k z\big)^3.
\]
由于$3\mid x+y$，所以，$1-\omega\mid x+y$。
由于$x+y-(x+\omega y)=(1-\omega)y$，所以，$1-\omega\mid x+\omega y$；
类似的，$1-\omega\mid x+\omega^2 y$。
所以，$1-\omega$是$x+y,x+\omega y$和$x+\omega^2 y$的公约数。
实际上，它还是最大公约数：对任意的公约数$w$，有
\[
w\mid (x+\omega y)-(x+y)=(1-\omega)y, \ \ w\mid (x+\omega y)-\omega(x+y)=(1-\omega)x.
\]
由于$x$与$y$在${\mathbb{Z}}[\omega]$中互素，所以，$w\mid 1-\omega$。
实际上，这个证明表明$x+y,x+\omega y$和$x+\omega^2 y$中任两个数的最大公约数均为$1-\omega$。

利用$3=(1-\omega)(1-\omega^2)$并且$1-\omega$与$1-\omega^2$伴随，我们将$(*)$写成
\[
(x+y)\cdot \frac{x+\omega y}{1-\omega}\cdot \frac{x+\omega^2y}{1-\omega^2}= 3^{3k-1} z^3,
\]
其中，以上每一个项都是Eisenstein整数并且左边三项两两互素（注意到$(1-\omega)^2\mid x+y$，从而，
$x+\omega y$与$x+\omega^2y$中恰含一个$1-\omega$的因子）。由于$3\mid x+y$，根据唯一分解定理，所以
\[
\begin{cases}
x+y=3^{3k-1} w^3,\\
\frac{x+\omega y}{1-\omega}= (a+b\omega)^3,
\end{cases}
\]
其中，$a,b\in {\mathbb{Z}}$而$w\in {\mathbb{Z}}[\omega]$。
由于$w^3\in {\mathbb{Q}}\subset {\mathbb{R}}$，通过考察$w$的辐角，
$w$落在过原点$0$和$1,\omega$或$\omega^2$的直线上。
通过对$w$乘$\omega$或$\omega^2$，不妨假设$w\in {\mathbb{R}}$，从而，
$w\in {\mathbb{R}}\cap {\mathbb{Z}}[\omega]={\mathbb{Z}}$。
所以，我们还可要求上面式子中的$w\in {\mathbb{Z}}$。另外，我们注意到$3\nmid w$。

利用$\omega^2=-\omega-1$，我们计算
\[
\begin{aligned}
x+\omega y=(a+b\omega)^3(1-\omega)=\big(a^3+3a^2b-6ab^2+b^3\big)-\big(a^3+3ab^2-6a^2b+b^3\big)\omega.
\end{aligned}
\]
所以，
\[
\begin{cases}
x= a^3+3a^2b-6ab^2+b^3,\\
y= -a^3-3ab^2+6a^2b-b^3.
\end{cases}
\]
从而，
\[
3^{3k-1} w^3=x+y=9ab(a-b) \ \  \Leftrightarrow \ \ ab(a-b)=\big(3^{k-1} w\big)^3.
\]
其中，上面式子左右两边每一项均为整数。
由于$x,y$互素，所以，$a,b$互素，从而$a,b,a-b$两两互素（特别地，$a,b,a-b$均非零）。
考虑$(a,b,a-b,w)\rightarrow (a-b, -b,a,-w)$或者$(a,b,a-b,w)\rightarrow (b-a, -a,b,w)$，
根据整除与互素关系，我们不妨假设
\[
a=\big(3^{k-1}z'\big)^3, \ b=(x')^3, \ a-b=(y')^3,
\]
其中，$x',y',z'\in \mathbb{Z}$且非零。所以，
\[
(x')^3+(y')^3=\big(3^{k-1} z'\big)^3, \ \ \text{且}~3\nmid z'.
\]
以上，$3\nmid z'$是因为$3\nmid w$。
与$(*)$作比较，我们总可以一直进行上述操作来降低$k$，最终得到$(*)$中$k=0$，
这与先前讨论的$3\mid xyz$矛盾。
:::

[^1]: 证明请参考练习题 @section:ring-prac 中的 6 和 7。
[^2]: 同样的想法也可以用来证明Gauss整数环${\mathbb{Z}}[\sqrt{-1}]$是Euclid整环。
