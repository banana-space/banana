---
title: 多项式环
---

<problems>
- “结式与判别式”一节中，用根计算结式的引理的证明称 ${\rm Res}(P,Q)$ 是次数为 $m+n$ 的齐次多项式，而随后算出的总次数为 $mn$，这里似乎应为 $mn$。
</problems>

## 可约与不可约

在唯一分解整环$A$中，
对于$a=u p_1^{d_1}p_2^{d_2}\cdots p_n^{d_n}$和$b=v p_1^{e_1}p_2^{e_2}\cdots p_n^{e_n}$，其中，
$u,v\in A^\times$，$p_i$都是不可约元素且$d_i$和$e_j$是非负整数，$a\mid b$等价于$d_i\leqslant e_i$，
其中$i=1,\cdots,n$。所以，我们可定义$a$和$b$的最大公约数
\[
{\rm g.c.d.}(a,b)=p_1^{\min\{d_1,e_1\}}p_2^{\min\{d_2,e_2\}}\cdots p_n^{\min\{d_n,e_n\}}
\]
和最小公倍数
\[
{\rm l.c.m.}(a,b)=p_1^{\max\{d_1,e_1\}}p_2^{\max\{d_2,e_2\}}\cdots p_n^{\max\{d_n,e_n\}}.
\]
很明显，最大公约数和最小公倍数的定义在伴随的意义下唯一。
对于多个元素的最大公约数和最小公倍数也可以类似的定义。

现在考虑$A$-系数的多项式环。给定$P(X)\in A[X]$，它可以被写成
\[
P(X)=a_nX^n+\cdots +a_1 X+a_0,
\]
其中，$a_n\neq 0$。令$c(P)$为$a_0,a_1,\cdots,a_n$的最大公约数，那么，$c(P)$在伴随的意义下唯一。
我们称$c(P)$为多项式$P$的**容量**（content）。

::: lemma
$A$是唯一分解整环，$P,Q\in A[X]$，则$c(P)c(Q)$与$c(PQ)$伴随。
:::

::: proof
假设$c(P),c(Q)\in A^\times$，先在这个特殊情形下证明引理。

我们要证明$c(P\cdot Q)\in A^\times$，即对任意不可约元$p\in A$，证明$p\nmid c(P\cdot Q)$。令
\[
P(X)=a_nX^n+\cdots +a_1 X+a_0, \ \ Q(X)=b_mX^m+\cdots +b_1 X+b_0,
\]
其中，$a_n,b_m\neq 0$。
由于$c(P)\in A^\times$，则$p\nmid c(P)$，从而存在$0\leqslant k_0\leqslant n$，
使得$p\mid a_0, p\mid a_1,\cdots, p\mid a_{k_0-1}$但$p\nmid a_{k_0}$；类似地，
存在$0\leqslant l_0\leqslant m$，
使得$p\mid b_0, p\mid b_1,\cdots, p\mid b_{l_0-1}$但$p\nmid b_{l_0}$。
那么，多项式$P\cdot Q$中$X^{k_0+l_0}$项的系数恰为
\[
a_{k_0}b_{l_0}+\overbrace{\sum_{k+l=k_0+l_0,\atop \\  (k,l)\neq (k_0,l_0)}a_kb_l}^{\text{在理想$(p)$中}}=a_{k_0}b_{l_0} \ \  \mod (p).
\]
由于$(p)$是素理想，$a_{k_0}b_{l_0}\notin (p)$，所以$p$不整除此系数。
特别地，$p\nmid c(P\cdot Q)$。这就证明了$c(P\cdot Q)\in A^\times$。

对于一般情形，我们先提取$P$和$Q$系数的最大公约数即可。
:::

::: theorem [Gauss引理]
$A$是唯一分解整环，$K={\rm Frac}(A)$为其分式域。
那么，$P(X)\in A[X]$在$A[X]$中不可约[^1]当且仅当$P(X)$在$K[X]$中不可约。

进一步，若在$K[X]$中有$P(X)=P_1(X)P_2(X)$且$\deg(P_i)\geqslant 1, i=1,2$，则有$k\in K^{\times}$，
使得$kP_1(X),k^{-1}P_2(X)\in A[X]$。
:::

::: proof
我们选取$P(X)\in A[X]$。由于$A$是唯一分解整环，通过提取系数的最大公约数，不妨假设$c(P)=1$。

如果$P$在$K[X]$中可约，即$P(X)=P_1(X)P_2(X)$，
其中每个$P_i(X)\in K[X]$的每个系数均形如$\frac{a'}{a''}$，$a',a''\in A$。
先通分并提取公分母、再提取系数分子的最大公约数，$P_i(X)$可以被表示为如下形式：
\[
P_1(X)=\frac{a'}{b'}Q_1(X), \ \ P_2(X)=\frac{a''}{b''}Q_2(X),
\]
其中，$Q_i(X)\in A[X]$并且$c(Q_1),c(Q_2)\in A^\times$。从而，
\[
P(X)=\frac{a'a''}{b'b''}Q_1(X)Q_2(X)=\frac{a'''}{b'''}Q_1(X)Q_2(X),
\]
通过约分，我们可以假设$a'''\in A$与$b'''\in A$没有公共的不可约因子。
所以，
\[
b'''P=a'''Q_1(X)Q_2(X).
\]
从而，
\[
b'''=c(b'''P)=c\big(a'''Q_1(X)Q_2(X)\big)=a'''.
\]
这表明，$a''',b'''\in A^\times$，所以，$P(X)=uQ_1(X)Q_2(X)$是可约的。
命题中的所有结论至此都得到了证明。
:::

::: theorem [Gauss]
若$A$是唯一分解整环，则$A[X]$亦然。
:::

::: proof
首先通过在$K[X]$中工作来证明在$A[X]$中分解的存在性，其中$K={\rm Frac}(A)$。

对任意的$P(X)\in A[X]$，通过提取系数的最大公约数，不妨假设$c(P)=1$。
将$P(X)$视作是$K[X]$中的多项式，我们自然可以分解
\[
P(X)=P_1(X)\cdots P_m(X).
\]
根据Gauss引理，通过对以上每个多项式乘以某个$K$中的数，
可假设$P_1(X),\cdots,P_m(X)$是$A[X]$中的多项式，这就给出了存在性。
实际上，由于$c(P)=1$，所以，$c(P_1)\cdots c(P_m)=1$，从而，对所有的$i$，都有$c(P_i)\in A^\times$。

再证明分解的唯一性。假设
\[
P(X)=P_1(X)\cdots P_m(X)=Q_1(X)\cdots Q_n(X),
\]
其中，$P_i$和$Q_j$都是$A[X]$中的不可约多项式并且容量为$1$。
通过将它们视为$K[X]$中的多项式，根据Gauss引理，它们仍然是不可约的。
从而，$m=n$并且通过调整脚标对任意$k$，$P_k(X)=\lambda_k Q_k(X)$，其中$\lambda_k\in K^\times$。
对固定的$k$，我们就有
\[
a_k P_k(X)=b_k Q_k(X),
\]
其中，$\lambda_k=\frac{b_k}{a_k}, a_k,b_k\in A$并且$a_k$和$b_k$没有公因子。
通过取容量，由于$c(P_k)=c(Q_k)=1$，从而，$a_k=b_k \bmod A^\times$，从而$\lambda_k \in A^\times$。
这表明$P_k(X)$与$Q_k(X)$伴随。至此，我们完成了证明。
:::

::: remark
给定环同态$\varphi\colon A\rightarrow B$，通过对系数作用，我们有自然的环同态
\[
\Phi\colon A[X]\rightarrow B[X],  \ \ P(X)=\sum_{i=0}^n a_i X^i \mapsto  \Phi\big(P(X)\big)=\sum_{i=0}^n \varphi(a_i) X^i.
\]
以上将$A[X]$中多项式视为$K[X]$中多项式是根据同态：
\[
A\rightarrow K, \ a\mapsto \frac{a}{1}.
\]
:::

::: example [判断不可约性]
假设$A$是唯一分解整环，$P(X)\in A[X]$并且$\deg P\leqslant 3$。若$P$可约，则必有一个$1$次的因子。
从而，$P(X)$可约当且仅当$P$在$K[X]$有根。
我们可以把$P$写成$P(X)=a_3X^3+a_2X^2+a_1X+a_0$，其中，$a_i\in A$。
如果$x=\frac{b}{b'}\in K$是$P$的根，其中，不妨假设$b$与$b'$无公因子，则
\[
a_3b^3+a_2b^2b'+a_1bb'^2+a_0b'^3=0.
\]
从而，$b$整除$P$的常数项系数$a_0$，$b'$整除$P$的首项系数$a_3$。

- 考虑${\mathbb{Z}}[X]$中的多项式$P(X)=X^3+X-p$，其中$p$是素数。
  如果$P$可约，根据上面讨论，其根$\frac{b}{b'}$只能是$\pm 1$或者$\pm p$。
  代入$P$计算可知，只能$p=2$并且此时$X-1\mid X^3+X-2$；其余情形$P$不可约。

- $K$是域，$f(X)\in K[X]$并且$f(X)$不是某多项式的平方，则$Y^2-f(X)$在$K[X,Y]$中不可约。

  令$A=K[X]$，则$A$是唯一分解整环，从而，$A[Y]=K[X][Y]=K[X,Y]$是唯一分解整环。
  将$Y^2-f(X)$视为$A[Y]$中的多项式，若$Y^2-f(X)$可约，则在$A[Y]$中有
  \[
  Y^2-f(X)=\big(h_1(X)Y-g_1(X)\big)\big(h_2(X)Y-g_2(X)\big), \ \ h_i,g_i\in K[X].
  \]
  比较系数即有$h_1(X),h_2(X)\in A^\times=K^\times$，乘$K$中的数，不妨设$h_1(X)=h_2(X)=1$，此时，
  \[
  Y^2-f(X)=\big(Y-g_1(X)\big)\big(Y-g_2(X)\big)=Y^2-(g_1(X)+g_2(X))Y+g_1(X)g_2(X).
  \]
  比较系数即有$g_1(X)+g_2(X)=0$，从而$f(X)=g_1(X)^2$，矛盾。

:::

::: example [Eisenstein判别法]
$A$是唯一分解整环，$P(X)=a_nX^n+a_{n-1}X^{n-1}+\cdots+a_1X+a_0\in A[X]$，
$\mathfrak{p}\subset A$是素理想。假设
\[
a_n\notin \mathfrak{p}, \ a_{n-1},\cdots,a_1,a_0\in \mathfrak{p}, \ a_0\notin \mathfrak{p}^2,
\]
那么，$P(X)$在$A[X]$（和$K[X]$）中不可约。

用反证法。
若$P(X)=P_1(X)P_2(X)$，通过自然同态$A[X]\rightarrow{A/\mathfrak{p}}[X]$，
我们在${A/\mathfrak{p}}[X]$中工作：
\[
a_nX^n=\overline{P_1}(X)\cdot \overline{P_2}(X) \ \ \Rightarrow  \ \ \overline{P_1}(X)=bX^l, \ \overline{P_2}(X)=cX^k, \ k+l=n.
\]
由于$a_n\notin \mathfrak{p}$，$k\neq 0,l\neq 0$。
上式表明$P_1(X)$和$P_2(X)$的常数项系数在$\mathfrak{p}$中（在${A/\mathfrak{p}}$中为$0$），
所以$a_0\in \mathfrak{p}^2$。矛盾。

Eisenstein判别法有如下经典应用：若$p$是素数，
则$\Phi_p(X)=1+X+X^2+\cdots+X^{p-1}$在${\mathbb{Z}}[X]$中不可约。
实际上，$\Phi_p(X)$不可约等价于$\Phi_p(X+1)$不可约。然而，
\[
\begin{aligned}
\Phi_p(X+1)=\frac{(X+1)^{p}-1}{(X+1)-1}=p+\sum_{k=2}^p{p\choose k}X^{k-1}.
\end{aligned}
\]
该多项式的最高项系数为$1$，其余系数都被$p$整除但$p^2$不整除常数项系数。
Eisenstein判别法表明$\Phi_p(X)$不可约。
:::

## 多项式的导数

$K$是域，对任意$P(X)\in K[X]$，$P(X)=a_nX^n+\cdots+a_1X+a_0$，定义其导数为
\[
P'(X)=na_n  X^{n-1}+(n-1)a_{n-1}X^{n-2}+\cdots +2a_2X+a_1.
\]
求导映射$P\mapsto P'$显然是$K$-线性的。

::: lemma [Leibniz法则]
对任意的$P(X),Q(X)\in K[X]$，有
\[
(P\cdot Q)'=P'\cdot Q+P\cdot Q'.
\]
:::

::: proof
证明的关键是观察到上述等式两边分别对于$P$和$Q$均为$K$-双线性的。
所以，只要对$P(X)=X^m$和$Q(X)=X^n$验证即可：
\[
(X^m\cdot X^n)'=(m+n)X^{m+n-1}=mX^{m-1}X^n+X^{m}\cdot n X^{n-1}.
\]
这就证明了Leibniz法则。
:::

::: example {@exam:P-Pprime-multiple-roots}
给定域扩张${L/K}$，$P(X)\in K[X]$并且$P$在$L$中有重根，即存在$m\geqslant 2$以及$\xi\in L$，
在$L[X]$中，有
\[
P(X)=(X-\xi)^mQ(X).
\]
那么，
\[
P'(X)=m(X-\xi)^{m-1}Q(X)+(X-\xi)^mQ'(X)=(X-\xi)^{m-1}\big(mQ(X)+(X-\xi)Q'(X)\big).
\]
所以，$P$与$P'$在$L[X]$中有公因子$X-\xi$。
尽管$X-\xi$可能不是$K[X]$中的元素，但实际上$P$与$P'$在$K[X]$中有公因子：若不然，
$P$与$P'$在$K[X]$中互素，所以，存在$A(X),B(X)\in K[X]$，使得
\[
A(X)P(X)+B(X)P'(X)=1.
\]
在$L[X]$中令$X=\xi$，上式左边为$0$，矛盾。
综上所述，$P(X)\in K[X]$若在$K$的某个扩张$L$中有重根，则$P$与$P'$不互素。
所以，如果$P$与$P'$互素，则$P$在$K$的任意扩张$L$中无重根。
:::

## 结式与判别式

$K$是域，$P(X),Q(X)\in K[X]$是多项式且$\deg(P)=n, \deg(Q)=m$。
令$K[X]_{\leqslant d}$为次数不超过$d$的多项式所构成的线性空间，考虑$K$-线性映射
\[
\Phi\colon K[X]_{\leqslant m-1}\times K[X]_{\leqslant n-1}\longrightarrow K[X]_{\leqslant m+n-1}, \ \ \big(A(X),B(X)\big)\mapsto  A(X)P(X)+B(X)Q(X).
\]
很明显，$\Phi$的定义域和值域的维数均为$n+m$。

我们指定$K[X]_{\leqslant m-1}\times K[X]_{\leqslant n-1}$一组基：
\[
\big\{e_1=(1,0),e_2=(X,0),\cdots,e_{m}=(X^{m-1},0), e_{m+1}=(0,1),e_{m+2}=(0,X),\cdots,e_{m+n}=(0,X^{n-1})\big\}
\]
也指定$K[X]_{\leqslant m+n-1}$的一组基：
\[
\big\{E_1=1,E_2=X,\cdots,E_{m+n}=  X^{m+n-1}\big\}.
\]
对于
\[
\begin{cases}
P(X)=a_nX^n+a_{n-1}X^{n-1}+\cdots+a_1X+a_0, \\
Q(X)=b_mX^m+b_{m-1}X^{m-1}+\cdots+b_1X+b_0,
\end{cases}
\]
我们可以计算
\[
\begin{aligned}
\Phi(e_i)=a_0E_i+a_1E_{i+1}+\cdots+a_n E_{i+n}, \ \ 1\leqslant i\leqslant m;\\
\Phi(e_{m+j})=b_0E_{j}+b_1E_{j+1}+\cdots+b_m E_{j+m}, \ \ 1\leqslant j\leqslant n.
\end{aligned}
\]
所以，$\Phi$可以表示为$(n+m)\times (n+m)$的Sylvester矩阵：

```math {@def-for-M-resultant}
M=\begin{pmatrix}
a_0 & 0 & 0  & \cdots & 0  &b_0 & 0 &   \cdots & 0\\
a_1 & a_0 & 0  & \cdots & 0  &b_1 & b_0& \cdots  & 0\\
\cdots &\cdots & \cdots &\cdots & 0 &\cdots &\cdots &\ddots&0 \\
\cdots &\cdots & \cdots &\cdots&a_0 &b_{m-1} &b_{m-2}&\cdots &b_0 \\
\cdots &\cdots & \cdots &\cdots&a_1 &b_m&b_{m-1}&\cdots &b_1 \\
a_{n-1} & a_{n-2} & 0  & \cdots & \cdots  &0 & b_m& \cdots   & b_2\\
a_{n} & a_{n-1} & 0  & \cdots & \cdots  &\cdots & \cdots & \cdots  & \cdots \\
0& a_{n} & 0  & \cdots & \cdots &\cdots & \cdots& \cdots & \cdots \\
\cdots& \cdots &  \ddots &\cdots & \cdots &\cdots & \cdots& \cdots & \cdots\\
0& 0& \cdots & a_{n}& a_{n-1} &  0&  \cdots& b_m& b_{m-1}\\
0&  0&  \cdots& 0& a_n &  0&  \cdots& 0& b_m
\end{pmatrix}
```

我们定义${\rm  Res}(P,Q)\coloneqq\det(M)$并称之为$P$与$Q$的**结式**。

::: remark
${\rm  Res}(P,Q)$是两个多项式系数$a_0,\cdots,a_n,b_0,\cdots,b_m$的整系数多项式。
:::

可以利用结式来判断两个多项式是否互素：

::: proposition
给定多项式$P,Q\in K[X]$，$(P,Q)=1$当且仅当${\rm Res}(P,Q)\neq 0$。
:::

::: proof
注意到，$\Phi$是线性空间之间的同构当且仅当${\rm  Res}(P,Q)\neq 0$。

如果${\rm Res}(P,Q)\neq 0$，那么$\Phi$是同构。
特别地，$\Phi$是满射，从而有$A,B\in K[X]$，使得$A(X)P(X)+B(X)Q(X)=1$。这表明$P$与$Q$是互素的。

如果$P$与$Q$互素，我们来说明$\Phi$是同构：若不然，${\rm Ker}(\Phi)\neq 0$，
则存在$A\in K[X]_{\leqslant m-1}, B\in K[X]_{\leqslant n-1}$使得
\[
A(X)P(X)+B(X)Q(X)=0 \ \ \Rightarrow \ \ A(X)P(X)=-B(X)Q(X).
\]
由于$P$与$Q$互素并且$Q$整除$A\cdot P$，所以$Q\mid A$。
然而$\deg(A)<\deg(Q)$，这表明$A=0$，从而$B=0$，矛盾。

综上所述，命题得证。
:::

我们可用两个多项式的根计算其结式：

::: lemma
给定$P(X)=a_n\prod_{i=1}^n(X-x_i), Q(Y)=b_m\prod_{j=1}^m(Y-y_j)$，则

```math {@eq:resultant-in-roots}
{\rm Res}(P,Q)=(-1)^{nm}a_n^mb_m^n\cdot \prod_{i=1}^n\prod_{j=1}^m(x_i-y_j).
```

:::

::: proof
根据行列式$M$的定义，不妨设$a_n=b_m=1$。

根据Vieta定理，每个$a_i$和$b_j$分别是$\{x_1,\cdots,x_n\}$与$\{y_1,\cdots,y_m\}$的整数系数多项式，
所以${\rm Res}(P,Q)$是$\{x_1,\cdots,x_n,y_1,\cdots,y_m\}$的整数系数多项式。
现在证明${\rm Res}(P,Q)$是$\{x_1,\cdots,x_n,y_1,\cdots,y_m\}$的齐次多项式且其次数为$m+n$。
作为行列式的，${\rm Res}(P,Q)$的一项形如
\[
M_{\sigma(1),1}M_{\sigma(2),2}\cdots M_{\sigma(m+n),m+n},
\]
其中，$\sigma\in \mathfrak{S}_{n+m}$。

注意到系数$a_i$是$n-i$次齐次多项式，$b_j$是$m-j$次齐次多项式。
根据矩阵$M$的形式 @def-for-M-resultant，当$k\leqslant m$时，
$M_{\sigma(k),k}$的次数是$n-\big(\sigma(k)-k\big)$；当$k\geqslant m+1$时，
$M_{\sigma(k),k}$的次数是$m-\big(\sigma(k)-(k-m)\big)$。从而，总次数为
\[
\sum_{k=1}^m \Big[n-\big(\sigma(k)-k\big)\Big]+\sum_{k=m+1}^{m+n}\Big[m-\big(\sigma(k)-(k-m)\big)\Big]=mn.
\]
若$x_i=y_j$，则$A=\dfrac{Q}{X-y_j}$和$B=-\dfrac{P}{X-x_i}$均为非零多项式并且$A\cdot P+B\cdot Q=0$。
根据$\Phi$的定义，${\rm Ker}(\Phi)\neq 0$，从而 ${\rm Res}\big|_{x_i=y_j}=0$。
所以对所有的$i,j$，均有$x_i-y_j\mid {\rm Res}$，所以
\[
\prod_{i=1}^n\prod_{j=1}^m(x_i-y_j)\mid  {\rm Res}(x_1,\cdots,x_n,y_1,\cdots,y_m).
\]
由于上面两个多项式的次数相同，所以存在$\lambda \in K$，使得
\[
{\rm Res}(x_1,\cdots,x_n,y_1,\cdots,y_m)=\lambda\prod_{i=1}^n\prod_{j=1}^m(x_i-y_j).
\]
我们现在计算$\lambda$。
${\rm Res}$中由对角线上的项给出的是$a_0^m=(-1)^{nm}x_1^m\cdots x_n^m$；
而乘积$\displaystyle\prod_{i=1}^n\prod_{j=1}^m(x_i-y_j)$中这一项是$x_1^m\cdots x_n^m$，
所以$\lambda=(-1)^{nm}$。命题得证。
:::

::: remark
我们将证明，对任意的$P\in K[X]$，总有域扩张${L/K}$，使得若将$P$视作是$L$-系数的多项式，
则$P$在$L$中有$n$个根，即在$L[X]$中，有$P(X)=a_n\prod_{i=1}^n(X-x_i)$，其中，$x_i\in L$。

另外，对任意的$P,Q\in K[X]$，将它们视作是$L[X]$中的多项式，
其结式${\rm Res}(P,Q)$在$L$中计算的结果与在$K$
中计算的结果一致。
:::

::: corollary
结式${\rm Res}(P,Q)$满足如下对称性
\[
{\rm Res}(P,Q)=(-1)^{\deg(P)\cdot \deg(Q)}{\rm Res}(Q,P).
\]
:::

::: proof
可以选取$K$的扩张${L/K}$，使得$P$和$Q$的根都落在$L$中。此时，以上公式显然成立。
关于上述扩张的存在性以及选取域扩张进行证明的想法，在下一章就会变得自然且简单，这里暂且不表。

当然，直接运用矩阵$M$的表达，这个命题也是显然的。
:::

::: corollary
假设在$K[X]$中有$\displaystyle P(X)=a_n\prod_{i=1}^n(X-x_i), Q(Y)=b_m\prod_{j=1}^m(Y-y_j)$，则
\[
{\rm Res}(P,Q)=(-1)^{nm}a_n^m  \prod_{i=1}^nQ(x_i)=b_m^n  \prod_{j=1}^mP(y_j).
\]
:::

::: corollary
$P$和$Q$在$K$的某个扩张${L/K}$中有公共根当且仅当${\rm Res}(P,Q)=0$。
:::

::: proof
如果多项式$P$和$Q$的根都落在$K$中，根据 @eq:resultant-in-roots，命题显然成立。
对于一般的情形，我们只要注意到结式${\rm Res}(P,Q)$的计算结果不依赖于域扩张即可。
:::

::: corollary
给定多项式$P,Q,B,R\in K[X]$，其中，$P=BQ+R$并且$\deg(R)<\deg(Q)$，则
\[
{\rm Res}(P,Q)= b_m^{n-\deg(R)} {\rm Res}(R,Q),
\]
其中，$n=\deg(P)$而$b_m$为$Q$的最高次项系数。
:::

::: proof
假设$Q(Y)=b_m\prod_{j=1}^m(Y-y_j)$，则
\[
\begin{aligned}
{\rm Res}(P,Q)&=b_m^n  \prod_{j=1}^mP(y_j)=b_m^n  \prod_{j=1}^m\big[(BQ)(y_j)+R(y_j)\big]\\
&=b_m^n  \prod_{j=1}^m R(y_j)=b_m^{n-\deg(R)} {\rm Res}(R,Q).
\end{aligned}
\]
命题得证。
:::

::: definition [判别式]
给定$P\in K[X]$，其**判别式**定义为
\[
{\rm Disc}(P)\coloneqq{\rm Res}(P,P').
\]
:::

::: remark {@rem:if-exists-multiple-roots}
可以用判别式判别多项式$P(X)$是否有重根，请参考 @exam:P-Pprime-multiple-roots。

给定$n$次首一多项式$P(X)\in K[X]$中，假设在$K$的扩张${L/K}$中有$n$个根，即
\[
P(X)=(X-\alpha_1)\cdots (X-\alpha_n),
\]
其中$\alpha_i\in L$。那么，$P'$的次数为$n-1$。根据Leibniz法则，我们计算
\[
P'(X)=\sum_{k=1}^n (X-\alpha_1)\cdots (X-\alpha_{k-1})\overbrace{\cancel{(X-\alpha_k)}}^{\text{缺失}} (X-\alpha_{k+1})\cdots(X-\alpha_n).
\]
从而，$\displaystyle P'(\alpha_i)=\prod_{j\neq i}(\alpha_i-\alpha_j)$。所以，
\[
\begin{aligned}
{\rm Disc}(P) &={\rm Res}(P,P')=(-1)^{n(n-1)}\prod_{i=1}^n P'(\alpha_i)\\
&=(-1)^{n(n-1)}\prod_{i\neq j}(\alpha_i-\alpha_j)=(-1)^{\frac{1}{2}n(n-1)}\prod_{i< j}(\alpha_i-\alpha_j)^2.
\end{aligned}
\]
所以，对首一多项式而言，

```math {@eq:compute-disc-P}
\boxed{{\rm Disc}(P) =(-1)^{\frac{1}{2}n(n-1)}\prod_{i< j}(\alpha_i-\alpha_j)^2.}
```

这说明${\rm Disc}(P)=0$等价于$P$有重根。
:::

::: example
$P(X)=aX^2+bX+c$是二次多项式，则$P'(X)=2aX+b$。根据定义，有
\[
{\rm Disc}(P)=\det\begin{pmatrix}
c & b &  0  \\
b&  2a & b   \\
a& 0 & 2a
\end{pmatrix}=a(4ac-b^2).
\]
:::

::: example
$P(X)=X^3+pX+q$是三次多项式，则$P'(X)=3X^2+p$。根据定义，有
\[
{\rm Disc}(P)=\det\begin{pmatrix}
q & 0 &  p  & 0&0\\
p&  q& 0   & p&0\\
0& p & 3 & 0&p\\
1& 0& 0&3&0\\
0& 1 & 0&0&3\\
\end{pmatrix}=4p^3+27q^2.
\]
:::

::: example {@formula:discriminant-of-Xn-aX-b}
$P(X)=X^n+aX+b$是$n$次多项式，则$P'(X)=nX^{n-1}+a$。
使用行列式进行计算的可行性很低，我们转而利用结式的性质进行化简。首先，
\[
{\rm Disc}(P)=n^n{\rm Res}(P, X^{n-1}+\frac{a}{n}).
\]
假设$\alpha_1,\cdots,\alpha_{n-1}$是$X^{n-1}+\frac{a}{n}$的$n-1$个根，则
\[
\begin{aligned}
{\rm Disc}(P)&=n^{n}\prod_{j=1}^{n-1}P(\alpha_j)=n^n\prod_{j=1}^{n-1} (\alpha_j^n+a\alpha_j+b)\\
&=n^{n}\prod_{j=1}^{n-1} \big(-\frac{a}{n}\alpha_j +a\alpha_j+b\big)=n^{n}\left(\frac{n-1}{n}a\right)^{n-1}\prod_{j=1}^{n-1} \big(\alpha_j +\frac{n}{n-1}\frac{b}{a}\big)\\
&=n^{n}\left(-\frac{n-1}{n}a\right)^{n-1}\prod_{j=1}^{n-1} \big( -\frac{n}{n-1}\frac{b}{a}-\alpha_j\big)=n^{n-1}\left(-\frac{n-1}{n}a\right)^{n-1}P'( -\frac{n}{n-1}\frac{b}{a})\\
&=n^{n-1}\left(-\frac{n-1}{n}a\right)^{n-1}\left(n\big(-\frac{n}{n-1}\frac{b}{a}\big)^{n-1}+a\right)\\
&= n^nb^{n-1}+(-1)^{n-1}(n-1)^{n-1}a^n.
\end{aligned}
\]
:::

## 对称多项式

考虑环$A$上的多项式环$A[X_1,\cdots,X_n]$，对称群$\mathfrak{S}_n$可以在$A[X_1,\cdots,X_n]$上作用：
\[
\mathfrak{S}_n\times A[X_1,\cdots,X_n]\rightarrow A[X_1,\cdots,X_n],\ \ \big(g, P\big)\mapsto (g\cdot P)(X_1,\cdots,X_n)=P(X_{g(1)},\cdots,X_{g(n)}).
\]
对多项式$P\in A[X_1,\cdots,X_n]$，若对任意$g\in \mathfrak{S}_n$，$g\cdot P=P$，
则称$P$是**对称多项式**。
我们用$A[X_1,\cdots,X_n]^{\mathfrak{S}_n}$表示全体$A$-系数的对称多项式，
不难看出，$A[X_1,\cdots,X_n]^{\mathfrak{S}_n}$是$A[X_1,\cdots,X_n]$的子环。
我们的目标是确定$K[X_1,\cdots,X_n]^{\mathfrak{S}_n}$的代数结构，其中，$K$是域。

::: example
以下$n$个整系数多项式被称作是**基本对称多项式**：
\[
\begin{cases}
&\sigma_1=\sum_{i}X_i,\\
&\sigma_2=\sum_{i<j}X_iX_j, \\
&\cdots \\
&\sigma_k=\sum_{i_1<i_2<\cdots<i_k}X_{i_1}X_{i_2}\cdots X_{i_k},\\
&\cdots\\
&\sigma_n=X_1\cdots X_n.
\end{cases}
\]
:::

给定$n$元整数指标$I=(i_1,\cdots,i_n)$，其中，
$i_1\geqslant i_2\geqslant \cdots \geqslant i_n\geqslant 0$，定义
\[
{\rm Stab}(I)=\big\{g\in \mathfrak{S}_n\bigm|g\cdot X_1^{i_1}X_2^{i_2}\cdots X_n^{i_n}=X_1^{i_1}X_2^{i_2}\cdots X_n^{i_n}\big\}
\]
以及
\[
S_I=\sum_{g\in{\mathfrak{S}_n/{\rm Stab}(I)}} g \cdot (X_1^{i_1}X_2^{i_2}\cdots X_n^{i_n}).
\]
以上的求和中，$g\in{\mathfrak{S}_n/{\rm Stab}(I)}$可以被理解为每个陪集在$\mathfrak{S}_n$中的代表元。

::: example
若$I=(1,0,\cdots,0)$，
则对换$(1,2),\cdots,(1,n)$和$1$可以作为左陪集${\mathfrak{S}_n/{\rm Stab}(I)}$的代表元，从而，
\[
S_{(1,0,\cdots,0)}=X_1+\sum_{k=2}^n (1,k)\cdot X_1 =\sigma_1.
\]
若$I=(1,1,\cdots,1)$，则${\rm Stab}(I)=\mathfrak{S}_n$，从而，
${\mathfrak{S}_n/{\rm Stab}(I)}$只有一个代表元$1$。那么，
\[
S_{(1,1,\cdots,1)}=X_1X_2\cdots X_n =\sigma_n.
\]
:::

::: remark
以上求和之所以要商掉${\rm Stab}(I)$是因为要避免重复的系数，比如说，对$I=(1,1,\cdots,1)$，
\[
\sum_{g\in \mathfrak{S}_n} g \cdot (X_1 X_2 \cdots X_n)=n!\cdot \sigma_n.
\]
再例如当$n=3$的时候，考虑$I=(2,1,1)$，则${\rm Stab}(I)=\{1,(2,3)\}$。从而，
\[
S_I=X_1^2X_2X_3+X_2^2X_1X_3+X_3^2X_1X_2.
\]
然而
\[
\sum_{g\in  \mathfrak{S}_3} g \cdot (X_1^{i_1}X_2^{i_2} X_3^{i_3})=2\big(X_1^2X_2X_3+X_2^2X_1X_3+X_3^2X_1X_2\big).
\]
:::

::: proposition
对任意的$n$元整数指标$I=(i_1,\cdots,i_n)$，有$S_I \in A[X_1,\cdots,X_n]^{\mathfrak{S}_n}$。
进一步，每个$S_I$恰好包含$\left|{\mathfrak{S}_n/{\rm Stab}(I)}\right|$个单项式，
每个这样的单项式的系数恰为$1$。
:::

::: proof
对任意的$g'\in \mathfrak{S}_n$，有
\[
\begin{aligned}
g'\cdot S_I&=\sum_{g\in{\mathfrak{S}_n/{\rm Stab}(I)}} g'g \cdot (X_1^{i_1}X_2^{i_2}\cdots X_n^{i_n})=\sum_{g'g\in{\mathfrak{S}_n/{\rm Stab}(I)}} g'g \cdot (X_1^{i_1}X_2^{i_2}\cdots X_n^{i_n}).
\end{aligned}
\]
当$g$取遍${\mathfrak{S}_n/{\rm Stab}(I)}$的任一组代表元时，
$g'g$也取遍${\mathfrak{S}_n/{\rm Stab}(I)}$的一组代表元。所以，$g'\cdot S_I=S_I$。
:::

::: lemma {@lem:lem-in-SI}
对任意的$P\in A[X_1,\cdots,X_n]^{\mathfrak{S}_n}$，存在有限个指标$I$以及$a_I\in A$，使得
\[
P=\sum_{\text{有限}}a_I\cdot S_I.
\]
:::

::: proof
考虑$P$的一个单项式$a_IX_1^{i_1}X_{2}^{i_2}\cdots X_n^{i_n}$，其中，$a_I\neq 0$。
对任意$g\in \mathfrak{S}_n$，
$a_IX_{g(1)}^{i_1}X_{g(2)}^{i_2}\cdots X_{g(n)}^{i_n}$也是$P$中的一个单项式。
据此，不妨假设$i_1\geqslant i_2\geqslant \cdots \geqslant i_n$并且$I$为对应的$n$元整数指标。特别地，
\[
a_I S_I=\sum_{g\in{\mathfrak{S}_n/{\rm Stab}(I)}}a_I  \cdot (X_{g(1)}^{i_1}X_{g(2)}^{i_2}\cdots X_{g(n)}^{i_n})
\]
中的每一项都作为$P$中的单项式出现，从而，$P-a_I S_I$是单项式个数较少的对称多项式。
重复这个过程就可以将$P$写成$\sum_{\text{有限}}a_I\cdot S_I$的形式。
:::

::: remark
对于$n$元整数指标$I=(i_1,\cdots,i_n)$和$J=(j_1,\cdots,j_n)$，用**字典序**可以比较它们的大小，即
\[
I<J \ \ \Leftrightarrow \ \ \text{存在 $k\leqslant n$，使得 $i_1=j_1,\cdots,i_{k-1}=j_{k-1}$ 而 $i_k<j_k$}.
\]
特别地，对任意的两个不同的$n$元整数指标$I$和$J$，$I<J$或$I>J$二者必居其一。
:::

::: lemma
对任意的$n$元整数指标$I$和$J$，我们有
\[
S_I\cdot S_J=S_{I+J}+\sum_{K<I+J}a_K\cdot S_K,
\]
其中，$I+J=(i_1+j_1,\cdots,i_n+j_n)$，$K$为$n$元整数指标而$a_K\in A$。
:::

::: proof
对于$I=(i_1,\cdots,i_n)$和$J=(j_1,\cdots,j_n)$，
$X_1^{i_1}\cdots X_n^{i_n}$和$X_1^{j_1}\cdots X_n^{j_n}$分别是$S_I$和$S_J$中出现的最大指标的单项式，
从而，$X_1^{i_1+j_1}\cdots X_n^{i_n+j_n}$是$S_I\cdot S_J$中出现的最大指标的单项式。
根据 @lem:lem-in-SI 的证明，
$S_{I+J}$的每一项都恰在$S_I\cdot S_J$中出现一次并且其余项对应的指标都严格小于$I+J$，所以，
$S_I\cdot S_J-S_{I+J}$形如$\sum_{K<I+J}a_K\cdot S_K$。
:::

::: theorem
每个对称多项式$P\in A[X_1,\cdots,X_n]^{\mathfrak{S}_n}$可唯一地表示成$\sigma_1,\cdots,\sigma_n$
的多项式，即
\[
A[X_1,\cdots,X_n]^{\mathfrak{S}_n}=A[\sigma_1,\cdots,\sigma_n].
\]
:::

::: proof
只要证明对每个$n$元整数指标$I$，$S_I$可写成$\sigma_1,\cdots,\sigma_n$的$A$-系数多项式，那么，
每个对称多项式亦然。
我们对$I$根据字典序进行归纳：最小的$I$是$(1,0,\cdots,0)$，此时$S_I=\sigma_1$，命题显然成立。
给定$n$元整数指标$K$，假设对任意$I<K$，$S_I$可表示成$\sigma_1,\cdots,\sigma_n$的多项式。
我们首先把$K$写成
\[
K=I+(1,\cdots,1,0,\cdots, 0)=I+J, \ \ I<K,  \  J=(\underbrace{1,\cdots,1}_{k\text{个}},0,\cdots, 0).
\]
注意到$S_J=\sigma_k$。根据上一引理，我们有
\[
S_K=S_{I+J}=S_I\cdot \sigma_k+\sum_{K'<I+J}a_{K'}\cdot S_{K'}.
\]
右边每一项均为$\sigma_1,\cdots,\sigma_n$的多项式，所以$S_K$也是。这就完成了归纳假设的证明。

现在证明对任意$P\in A[X_1,\cdots,X_n]^{\mathfrak{S}_n}$，存在唯一的$Q\in A[Y_1,\cdots,Y_n]$，使得
\[
P(X_1,\cdots,X_n)=Q(\sigma_1,\cdots,\sigma_n).
\]
对任意指标$\alpha=(\alpha_1,\cdots,\alpha_n)$，其中，$\alpha_1,\cdots,\alpha_n\geqslant 0$，
定义$n$元整数指标$I(\alpha)$为
\[
I(\alpha)=(\alpha_1+\alpha_2+\cdots+\alpha_n,\alpha_1+\alpha_2+\cdots+\alpha_{n-1},\cdots,\alpha_1).
\]
那么，
\[
\sigma_1^{\alpha_1}\sigma_2^{\alpha_2}\cdots \sigma_n^{\alpha_n}=S_{I(\alpha)}+\sum_{I<I(\alpha)}a_I\cdot S_I.
\]
如果存在另一个$Q'\in A[Y_1,\cdots,Y_n]$，使得$P(X_1,\cdots,X_n)=Q'(\sigma_1,\cdots,\sigma_n)$。
为了说明$Q=Q'$，只要对任意$G\in A[Y_1,\cdots,Y_n]-\{0\}$，
证明$G(\sigma_1,\cdots,\sigma_n)$在$A[X_1,\cdots,X_n]$中非零即可（取$G=Q-Q'$）。
实际上，我们把$G$写成
\[
G(Y_1,\cdots,Y_n)=\sum_{\alpha=(\alpha_1,\cdots,\alpha_n)}a_\alpha \cdot Y^\alpha
\]
其中，$a_\alpha\neq 0$。选择这样的指标$\alpha$，使得$I(\alpha)$在字典序下最大。
那么，当我们把$G(\sigma_1,\cdots,\sigma_n)$写成$\sum_{\text{有限}}a_I\cdot S_I$的形式时，
$S_{I(\alpha)}$的系数非零。从而，$G(\sigma_1,\cdots,\sigma_n)\neq 0$。
:::

::: example
$K$是域，$K(X_1,\cdots,X_n)={\rm Frac}(K[X_1,\cdots,X_n])$为多项式环$K[X_1,\cdots,X_n]$的分式域。
由于$K[X_1,\cdots,X_n]$是唯一分解整环，通过约去公因子，
每个$K(X_1,\cdots,X_n)$中的元素$f(X_1,\cdots,X_n)$都可唯一写成
$\frac{P(X_1,\cdots,X_n)}{Q(X_1,\cdots,X_n)}$的形式，其中，
$P$和$Q$在$K[X_1,\cdots,X_n]$中互素并且$Q$是首一的。
对称群$\mathfrak{S}_n$可以在$K(X_1,\cdots,X_n)$上作用：
\[
\mathfrak{S}_n\times K(X_1,\cdots,X_n)\rightarrow K(X_1,\cdots,X_n),\ \ \big(g, f\big)\mapsto (g\cdot f)(X_1,\cdots,X_n)=f(X_{g(1)},\cdots,X_{g(n)}).
\]
很明显，$(g\cdot f)(X_1,\cdots,X_n)=\dfrac{g\cdot P}{g\cdot Q}$。
很明显，$g\cdot P$和$g\cdot Q$在$K[X_1,\cdots,X_n]$中也互素并且$g\cdot Q$也是首一的。所以，
\[
g\cdot f= f \ \ \Leftrightarrow \ \ \dfrac{g\cdot P}{g\cdot Q}=\dfrac{ P}{Q} \ \ \Leftrightarrow \ \ Q\cdot (g\cdot P)=P\cdot (g\cdot Q).
\]
通过整除关系，我们必然有$Q=g\cdot Q$，从而，$P=g\cdot P$。
特别地，$P,Q\in K[X_1,\cdots,X_n]^{\mathfrak{S}_n}=K[\sigma_1,\cdots,\sigma_n]$。

令
\[
K(X_1,\cdots,X_n)^{\mathfrak{S}_n}=\big\{f\in  K(X_1,\cdots,X_n)\bigm| \text{对任意的 $g\in \mathfrak{S}_n$, }g\cdot f = f\big\},
\]
那么，上面的推理表明
\[
K(X_1,\cdots,X_n)^{\mathfrak{S}_n}=K(\sigma_1,\cdots,\sigma_n).
\]
:::

::: example [判别式]
令$\Delta=\displaystyle \prod_{i<j}(X_i-X_j)$，则$g\cdot \Delta =\varepsilon(g)\Delta$，其中，
$\varepsilon\colon\mathfrak{S}_n\rightarrow \{\pm1\}$是指标映射。

考虑交错群$\mathfrak{A}_n$在$A[X_1,\cdots,X_n]$上作用：
\[
\mathfrak{A}_n\times A[X_1,\cdots,X_n]\rightarrow A[X_1,\cdots,X_n],\ \ \big(g, P\big)\mapsto (g\cdot P)(X_1,\cdots,X_n)=P(X_{g(1)},\cdots,X_{g(n)}).
\]
令
\[
A[X_1,\cdots,X_n]^{\mathfrak{A}_n}=\big\{P\in  A[X_1,\cdots,X_n]\bigm| \text{对任意的 $g\in \mathfrak{A}_n$, }g\cdot P = P\big\},
\]
这也是$A[X_1,\cdots,X_n]$的子环。
由于$\varepsilon (\mathfrak{A}_n)=1$，所以，$\Delta\in A[X_1,\cdots,X_n]^{\mathfrak{A}_n}$。

另外，我们显然有$\Delta^2\in A[X_1,\cdots,X_n]^{\mathfrak{S}_n}$是对称多项式，
所以可以被表示为$\sigma_1,\cdots,\sigma_n$的多项式。
根据 @eq:compute-disc-P，将$X_1,\cdots,X_n$想象成
\[
P(X)=(X-X_1)(X-X_2)\cdots(X-X_n)=X^n-\sigma_1X^{n-1}+\cdots+ (-1)^{n-1}\sigma_{n-1}X+(-1)^{n}\sigma_{n}
\]
的根，那么
\[
\Delta^2=(-1)^{\frac{1}{2}n(n-1)}{\rm Disc}(P)\big(-\sigma_1,\sigma_2, \cdots,(-1)^k\sigma_k,\cdots, (-1)^n\sigma_n\big).
\]
其中，对于首一多项式$P=X^n+\sum_{i=0}^{n-1}a_{i}X^i$，
${\rm Disc}(a_{n-1},\cdots,a_0)$是$\{a_0,\cdots,a_{n-1}\}$的整系数多项式。

作为结论，给定首一多项式：
\[
P(X)=(X-x_1)(X-x_2)\cdots (X-x_n)=X^n+b_1X^{n-1}+\cdots+b_n.
\]
其中，对$1\leqslant k\leqslant n$，$b_k=(-1)^k\sigma_k$，令
\[
{\rm disc}(P)\coloneqq\Delta^2(b_1,\cdots,b_n)=\prod_{i<j}(x_i-x_j)^2.
\]
之前定义的判别式为
\[
{\rm Disc}(P) =\prod_{i\neq j}(x_i-x_j).
\]
所以，
\[
{\rm disc}=(-1)^{\frac{n(n-1)}{2}}{\rm Disc}(P).
\]
判别式的意义在于利用它是否为零来断定$P$是否有重根。
:::

::: example
$K$是域，我们计算$K[X_1,\cdots,X_n]^{\mathfrak{A}_n}$。

由于$\mathfrak{A}_n$是$\mathfrak{S}_n$的子群，所以，
$K[X_1,\cdots,X_n]^{\mathfrak{S}_n}\subset K[X_1,\cdots,X_n]^{\mathfrak{A}_n}$。
对任意$g\in \mathfrak{S}_n$和$P\in K[X_1,\cdots,X_n]^{\mathfrak{A}_n}$，我们有
$g\cdot P \in K[X_1,\cdots,X_n]^{\mathfrak{A}_n}$：只要验证对任意$h\in \mathfrak{A}_n$，
$h\cdot (g\cdot P)=g\cdot P$即可，而这等价于$\big(g^{-1}  h g\big)\cdot P=P$。
由于$\mathfrak{A}_n\lhd \mathfrak{S}_n$，以上显然成立。据此，我们得到自然的群作用：
\[
\mathfrak{S}_n\times K[X_1,\cdots,X_n]^{\mathfrak{A}_n}\longrightarrow K[X_1,\cdots,X_n]^{\mathfrak{A}_n}.
\]
由于$\mathfrak{A}_n$的作用是平凡的，我们自然有
\[
{\mathfrak{S}_n/\mathfrak{A}_n}\times K[X_1,\cdots,X_n]^{\mathfrak{A}_n}\longrightarrow K[X_1,\cdots,X_n]^{\mathfrak{A}_n},
\]
其中，对任意的$g\in \mathfrak{S}_n-\mathfrak{A}_n$，
$g\cdot P$不依赖于$g$的选取（它们都对应着${\mathfrak{S}_n/\mathfrak{A}_n}$中同一个左陪集）并且
$g^2\cdot P=P$。

对任意的$d$，
令$K[X_1,\cdots,X_n]_d^{\mathfrak{A}_n}$为$K[X_1,\cdots,X_n]^{\mathfrak{A}_n}$中$d$次齐次的多项式，
由于以上作用保持次数，我们自然有
\[
K[X_1,\cdots,X_n]^{\mathfrak{A}_n}=\bigoplus_{d\geqslant 0}K[X_1,\cdots,X_n]_d^{\mathfrak{A}_n}
\]
每个$K[X_1,\cdots,X_n]_d^{\mathfrak{A}_n}$均为有限维$K$-线性空间，
现在对$g\in \mathfrak{S}_n-\mathfrak{A}_n$，考虑线性映射
\[
g\colon K[X_1,\cdots,X_n]_d^{\mathfrak{A}_n}\longrightarrow K[X_1,\cdots,X_n]_d^{\mathfrak{A}_n}, \ \ P \mapsto g\cdot P.
\]
由于$g^2=1$，那么，
\[
K[X_1,\cdots,X_n]_d^{\mathfrak{A}_n}=V_d^+\oplus V_d^{-},
\]
其中，$V_d^+$和$V_d^-$分别为特征值为$1$和$-1$的特征子空间。根据定义，
\[
V_d^+=K[X_1,\cdots,X_n]_d^{\mathfrak{S}_n},
\]
即$d$次齐次对称多项式。
对任意的$P\in V_d^-$，有$g\cdot P = -P$，所以对换$(i,j)\in \mathfrak{S}_n$的作用为
\[
P(X_1,\cdots, X_i,\cdots,X_j,\cdots, X_n)=-P(X_1,\cdots, X_j,\cdots,X_i,\cdots, X_n).
\]
特别地，令$X_i=X_j$，则$P(X_1,\cdots, X_j,\cdots,X_j,\cdots, X_n)=0$，即$X_i-X_j$整除$P$。
特别地，当我们取遍所有可能的$i,j$时，就证明了$\Delta \mid P$。
由于$g\cdot \Delta = -\Delta$，所以，
多项式$Q=\dfrac{P}{\Delta}\in K[X_1,\cdots,X_n]^{\mathfrak{S}_n}$。据此，我们证明了
\[
K[X_1,\cdots,X_n]^{\mathfrak{A}_n}=\big\{P+Q\cdot \Delta\bigm|P,Q \in K[\sigma_1,\cdots,\sigma_n]^{\mathfrak{S}_n}\big\}.
\]
:::

::: example [Newton公式]
令$S_k=X_1^k+\cdots+X_n^k$，这是对称的多项式，所以$S_k$是$\sigma_1,\cdots,\sigma_n$的多项式。
为了具体地计算出$S_k$，我们可以利用著名的Newton公式：
\[
S_k-\sigma_1S_{k-1}+\sigma_2S_{k-2}-\cdots+(-1)^{k-1}\sigma_{k-1}S_1+k(-1)^k\sigma_k=0,
\]
其中，当$k>n$时，规定$\sigma_k=0$。
由于$S_1=\sigma_1$，我们可递归地计算所有的$S_k\in A[\sigma_1,\cdots,\sigma_n]$。
特别地，$S_k$为$\sigma_1,\cdots,\sigma_n$的整系数多项式。

我们对$k\geqslant n$的情形证明Newton公式。考虑$K[X_1,\cdots,X_n][Y]$中的多项式
\[
P(Y)=(Y-X_1)(Y-X_2)\cdots(Y-X_n)=Y^n-\sigma_1Y^{n-1}+\cdots + (-1)^{n-1}\sigma_{n-1}Y+ (-1)^{n}\sigma_{n}.
\]
从而，$P(X_j)=0$，即
\[
X^n_j-\sigma_1X_j^{n-1}+\cdots + (-1)^{n-1}\sigma_{n-1}X_j+ (-1)^{n}\sigma_{n}=0.
\]
对$j$求和，我们就证明了
\[
S_n-\sigma_1S_{n-1}+\sigma_2S_{n-2}-\cdots+(-1)^{n-1}\sigma_{n-1}S_1+n(-1)^n\sigma_n=0.
\]
如果$k>n$，对$P(X_j)=0$乘以$X_j^{k-n}$就给出
\[
X^k_j-\sigma_1X_j^{k-1}+\cdots + (-1)^{n-1}\sigma_{n-1}X^{k-n+1}_j+ (-1)^{n}\sigma_{n}X_j^{k-n}=0.
\]
对$j$求和也给出了Newton公式（其最后几项均为$0$）。

现在假设$k<n$。我们计算$\sigma_i S_{k-i}$，其中，$1\leqslant i\leqslant k-2$。
考虑给定$n$元整数指标$I_i=(\underbrace{1,\cdots,1}_{\text{$i$个}},0,\cdots,0)$和
$I'_{k-i}=(k-i,0,\cdots,0)$。那么，
\[
\begin{aligned}
\sigma_i S_{k-i}&=S_{I_i}\cdot S_{I'_{k-i}}=\left(\sum X_1\cdots X_i+\cdots\right)\left(\sum X^{k-i}_1\right)\\
&=\sum X^{k-i+1}_1\cdots X_i+\sum X_1^{k-i} X_2\cdots X_i X_{i+1}=S_{J_{i-1}}+S_{J_i},
\end{aligned}
\]
其中，
$J_{i-1}=(k-(i-1),\underbrace{1,\cdots,1}_{\text{$i-1$个}},0,\cdots,0), J_i=(k-i,\underbrace{1,\cdots,1}_{\text{$i$个}},0,\cdots,0)$。

当$i=k-1$时，以上计算要稍作修改：
\[
\begin{aligned}
\sigma_{k-1}S_{1}&=\left(\sum X_1\cdots X_{k-1}+\cdots\right)\left(\sum X_1\right)\\
&=\sum X^{2}_1 X_2\cdots X_{k-1}+k\sum X_1 X_2\cdots X_i X_{i+1}=S_{J_{k-2}}+kS_{J_{k-1}},
\end{aligned}
\]
其中，
$J_{k-2}=(2,\underbrace{1,\cdots,1}_{\text{$k-2$个}},0,\cdots,0), J_{k-1}=(\underbrace{1,\cdots,1}_{\text{$k$个}},0,\cdots,0)$。
由于$S_k=S_{J_0}$所以，
\[
\begin{aligned}
&\quad S_k-\sigma_1S_{k-1}+\sigma_2S_{k-2}-\cdots+(-1)^{k-1}\sigma_{k-1}S_1+k(-1)^k\sigma_k\\
&=S_{J_0}-\big(S_{J_0}+S_{J_1}\big)+\big(S_{J_1}+S_{J_2}\big)-\cdots+(-1)^{k-1}\big(S_{J_{k-2}}+kS_{J_{k-1}}\big)+k(-1)^k\sigma_k\\
&=(-1)^{k-1}k\left(S_{J_{k-1}}-\sigma_k\right)=0.
\end{aligned}
\]
这就完成了Newton公式的证明。
:::

[^1]: $P(X)$在$A[X]$中不可约指的是$P$不能分解成两个次数更低的多项式之积，其中，
  我们要求每个多项式的次数至少是$1$。
