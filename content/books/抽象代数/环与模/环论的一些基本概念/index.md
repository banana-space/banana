---
title: 环论的一些基本概念
---

回顾环$(A,\cdot,+)$的定义，请参考 @def:rings 一节：$(A,+,0)$是交换群；$(A,\cdot,1)$的乘法有结合律，
$1$是乘法单位元；乘法与加法通过分配律相容：对任意的$a_1,a_2,a_3\in A$，有
\[
(a_1+ a_2)\cdot a_3=a_1\cdot a_3 +a_2\cdot a_3,\ \ a_3\cdot (a_1+ a_2)=a_3\cdot a_1 +a_3\cdot a_2.
\]
另外，环中的乘法可以不是交换的：如果对任意的$a,b\in A$，$a\cdot b=b\cdot a$，$A$被称作是交换环。

$B$是$A$的子环，指的是$B<A$为加法子群、$1\in B$并且$B$对乘法封闭。

具有逆元的$a\in A$被称为可逆的，即存在$b\in A$，使得$a\cdot b =b\cdot a=1$。
用$A^\times$表示$A$中可逆元之集。很明显，$(A^\times, \cdot)$是群。
另外，若$A^\times =A-\{0\}$，即非零元均可逆，则称$A$是**可除环**。按定义，交换可除环被称为域。

如果环$A_1$和$A_2$间的映射$\varphi\colon A_1\rightarrow A_2$保持加法和乘法并且$\varphi(1)=1$，
就称$\varphi$是环同态。我们用$\mathbf{Hom}(A_1,A_2)$表示从$A_1$到$A_2$的环同态的集合。
同态$\varphi\in {\rm Hom}(A_1,A_2)$的核定义为：
\[
{\rm Ker}(\varphi)=\big\{a\in A_1\bigm|\varphi(a)=0\big\}.
\]
由于$1\notin {\rm Ker}(\varphi)$，${\rm Ker}(\varphi)$不是子环。

::: definition
$A$是环，$I\subset A$是$A$的加法子群。
若对任意$a\in A$和$x\in I$，均有$a\cdot x\in I$，则称$I$是$A$的**左理想**；
若对任意$a\in A$和$x\in I$，均有$ x\cdot a\in I$，则称$I$是$A$的**右理想**。
若$I$即是左理想又是右理想，则称$I$是**双边理想**（简称为理想）。
:::

::: remark
特别地，$I\neq A$。另外，若$A$是交换环，则其左理想或者右理想均为双边理想，此时，我们不再区分左右。
:::

::: example
对任意环同态$\varphi\colon A_1\rightarrow A_2$，${\rm Ker}(\varphi)$是$A_1$的（双边）理想。

实际上，对任意的$a\in A_1$和$x\in {\rm Ker}(\varphi)$，有
\[
\varphi(a\cdot x)=\varphi(a)\varphi(x)=0, \ \ \varphi(x\cdot a)=\varphi(x)\varphi(a)=0.
\]
:::

::: example
给定环$A$中的元素$a$，令$(a)=A\cdot a=\big\{a'\cdot a\bigm|a'\in A\big\}$，这是$A$的左理想。
:::

::: example
$A$是交换环，则$A$是域等价于$A$只有$0$这一个理想。

事实上，如果$A$不是域，存在$a\neq 0$，使得$a$没有逆，从而，$(a)\subset A$是理想。
这与$A$只有$0$这一个理想矛盾。
:::

::: remark
给定环$A$的（双边）理想$I$，我们可构造**商环**${A/I}$。

首先，取${A/I}$为$A$的加法群的商群，其中，理想$I$被视作是$A$的正规子群。
按定义，这是如下左陪集的集合：
\[
{A/I}=\big\{a+I\bigm|a\in A\big\}.
\]
其中，$a+I=a'+I$当且仅当$a-a'\in I$。根据商群的定义，${A/I}$的加法定义为
\[
(a+I)+(b+I)\coloneqq(a+b)+I.
\]
其中，$I=0+I$是加法零元。

我们再定义${A/I}$上的乘法：
\[
(a+I)\cdot (b+I)\coloneqq ab+I.
\]
对于$a+I=a'+I$，由于$ab-a'b=(a-a')b\in I$（利用$I$是左理想），从而$ab+I=a'b+I$。
这表明${A/I}$上乘法的定义不依赖于$a+I$中代表元的选取；
类似地，利用$I$是右理想，上述乘法也不依赖于$b+I$中代表元的选取。很明显，$1+I$是乘法单位元。
上述定义的加法和乘法也满足结合律，从而给出了${A/I}$上的环结构。
我们把${A/I}$称作是$A$对$I$的**商环**。商映射
\[
\pi\colon A\longrightarrow {A/I}, \ \ a\mapsto a+I,
\]
是满的环同态。实际上，对任意$a,b\in A$，有
\[
\begin{aligned}
\pi(a+b)&=a+b+I=(a+I)+(b+I)=\pi(a)+\pi(b),\\
\pi(ab)&=ab+I=(a+I)(b+I)=\pi(a)\pi(b).
\end{aligned}
\]
另外，上述等式表明，在集合${A/I}$上存在唯一的环结构，使得$\pi$为环同态。
:::

我们已熟知 @prop:quotient-A-mod-universal 是构造群之间同态的重要工具。类似地，我们有如下命题：

::: proposition {@prop:quotient-ring-universal}
$A$和$B$是环，$I\subset A$是理想，$\varphi\colon A \rightarrow B$是环同态。
若$I\subset{\rm Ker}(\varphi)$，则存在唯一的环同态$\overline{\varphi}\colon {A/I} \rightarrow B$，
使得$\overline{\varphi}\circ\pi=\varphi$，其中，$\pi\colon A\rightarrow {A/I}$是自然的同态。
\[
\begin{tikzcd}
A \arrow[r, "\varphi"] \arrow[d, "\pi"] &  B \\
{A/I} \arrow[ur, "\overline{\varphi}",swap] &      \end{tikzcd}
\]
进一步，
映射
$\overline{\varphi}\colon {A/{\rm Ker}(\varphi)} \stackrel{\simeq}{\longrightarrow} {\rm Im}(\varphi)$
是环同构。
:::

::: proof
对$a+I\in {A/I}$，我们定义$\overline{\varphi}(a+I)=\varphi(a)$。
根据 @prop:quotient-A-mod-universal，只要证明$\overline{\varphi}$是环同态，这只是例行公事般的验证。
:::

::: example
$A$和$B$是环，$A\times B$也是[^1]，则$I=A\times 0=\{(a,0)\mid a\in A\}$是$A\times B$的理想。
此时，${(A\times B)/I} \simeq B$。
:::

**约定。** 自此，除部分习题，总假定$A$是交换环。

::: example [素理想与整环的定义]
$A$是环，对$a\in A$，若存在$b\in A$，使得$a\cdot b =0$或者$b\cdot a=0$，则称$a$是一个**零因子**。
如果环$A$是交换环并且除$0$外无其它零因子，则称$A$是**整环**。

注意，按定义整环$A$总是交换的。
换而言之，$A$是整环，则$a\cdot b=0$意味着$a=0$或$b=0$（至少之一成立）。根据定义，域是整环。

$A$是环，$\mathfrak{p}\subset A$是理想并且$\mathfrak{p}\neq A$。
若对任意的$a,b\in A$，$a\cdot b\in \mathfrak{p}$意味着$a\in \mathfrak{p}$或$b\in \mathfrak{p}$，
则称$\mathfrak{p}$是**素理想**。

$\mathfrak{p}$是素理想的一个等价定义是$a\notin  \mathfrak{p}$，$b\notin \mathfrak{p}$，
则$a\cdot b \notin \mathfrak{p}$。

我们考虑整数环${\mathbb{Z}}$的素理想。
假设$p$是素数，令$(p)=\{pn\mid n\in {\mathbb{Z}}\}$，则$(p)$是理想。
若$a,b\notin (p)$，即$p\nmid a, p\nmid b$，从而$p\nmid ab$，即$ab\notin (p)$。这表明$(p)$是素理想。
另外，若$n=n_1\cdot n_2$是合数，其中$n_1,n_2\geqslant 2$，令$(n)=\{kn\mid k\in {\mathbb{Z}}\}$，
那么，$n_1 \notin (n), n_2 \notin(n)$，但是$n_1\cdot n_2 \in (n)$，这表明$(n)$不是素理想。
根据之后关于${\mathbb{Z}}$是主理想整环的性质，${\mathbb{Z}}$中的素理想均形如$(p)$，其中，$p$是素数。
:::

::: remark
$A$是交换环，$(0)\coloneqq\{0\}$。那么，$A$是整环等价于$(0)$是素理想。
:::

我们可以用商环来刻画素理想：

::: lemma
$A$是交换环，理想$\mathfrak{p}$是素理想当且仅当${A/\mathfrak{p}}$是整环。
:::

::: proof
若$\mathfrak{p}$是素理想，
则对任意$a+\mathfrak{p},b+\mathfrak{p}\in {A/\mathfrak{p}}$并满足
$(a+\mathfrak{p})(b+\mathfrak{p})=\mathfrak{p}$，要证明$a+\mathfrak{p}=0$或$b+\mathfrak{p}=0$，
即$a\in \mathfrak{p}$或$b\in \mathfrak{p}$。
按定义，$(a+\mathfrak{p})(b+\mathfrak{p})=ab+\mathfrak{p}=\mathfrak{p}$，从而，
$ab\in \mathfrak{p}$，根据$\mathfrak{p}$是素理想，$a\in \mathfrak{p}$或$b\in \mathfrak{p}$。

若${A/\mathfrak{p}}$是整环，
那么$a\cdot b \in \mathfrak{p}$等价于说${A/\mathfrak{p}}$中$(a+\mathfrak{p})(b+\mathfrak{p})=0$，
所以可不妨设$a+\mathfrak{p}=0$，即$a\in \mathfrak{p}$。这表明$\mathfrak{p}$是素理想。
:::

::: example
${{\mathbb{Z}/p\mathbb{Z}}}$是整环，这是因为$(p)=p{\mathbb{Z}}$是素理想。
当然，我们知道${{\mathbb{Z}/p\mathbb{Z}}}$实际上是域。请参考如下注解：
:::

::: remark
$A$是只有有限个元素的整环，则$A$是域。

实际上，对任意的$a\in A-\{0\}$，考虑映射
\[
\varphi\colon A\rightarrow A, \ x\mapsto a\cdot x.
\]
由于$A$是整环，所以$\varphi$是单射。又因为$A$的元素个数有限，从而$\varphi$是满射。
特别地，存在$b\in A$，使得$\varphi(b)=1$，即$a\cdot b=1$。这表明$a^{-1}$是存在的。
:::

::: example [分式域的构造]
$A$是整环。我们在集合$A\times (A-\{0\})$上定义等价关系：
\[
(a,b)\sim (c,d) \ \ \Leftrightarrow \ \ ad=bc.
\]
不难验证，以上$\sim$的确是等价关系。
用$\frac{a}{b}$表示$(a,b)$在${\rm Frac}(A)= {(A\times (A-\{0\}))/\sim}$中对应的等价类。
特别地，对任意的$\lambda \in A-\{0\}$，自然有$\frac{\lambda a}{\lambda b}=\frac{a}{b}$。

我们在${\rm Frac}(A)$定义加法和乘法：
\[
\frac{a}{b}+\frac{c}{d}=\frac{ad+bc}{bd}, \ \ \frac{a}{b}\cdot \frac{c}{d}=\frac{ac}{bd}.
\]
不难验证，以上定义不依赖于代表元$a,b$的选取，即若$(a,b)\sim (a',b'), (c,d)\sim (c',d')$，我们有
\[
\frac{a'd'+b'c'}{b'd'}=\frac{ad+bc}{bd}, \ \ \frac{a'c'}{b'd'}=\frac{ac}{bd}.
\]
我们规定 $\frac{1}{1}$是乘法单位元，$\frac{0}{1}$是加法单位元，那么，
$\frac{a}{b}\cdot \frac{b}{a}=\frac{1}{1}$。特别地，在以上运算下${\rm Frac}(A)$是域。
我们把${\rm Frac}(A)$称作$A$的**分式域**。
:::

[^1]: 参考 @section:product。
