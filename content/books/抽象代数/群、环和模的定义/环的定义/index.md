---
title: 环的定义
---

{@def:rings}

::: definition
[^1]集合$A$非空并且$|A|\geqslant 2$。如果$A$上定义了乘法$\cdot$和加法$+$，即有映射
\[
A\times A\rightarrow A,  \ \ (a_1,a_2)\mapsto a_1+ a_2,
\]
和
\[
A\times A\rightarrow A,  \ \ (a_1,a_2)\mapsto a_1\cdot a_2,
\]
并且存在元素$0_{_A}, 1_{_A}\in A$，$0_{_A}\neq 1_{_A}$，使得

- 1\) $(A,+)$是交换群，其中，$0_{_A}$是加法单位元；

- 2\)

  - 乘法具有结合律，即对任意$a_1,a_2,a_3\in A$，
    有$(a_1\cdot a_2)\cdot a_3=a_1\cdot (a_2 \cdot a_3)$；

  - $1_{_A}$是乘法单位元，即对任意$a\in A$，有$1_{_A}\cdot a=a\cdot 1_{_A}=a$；

- 3\) 乘法分配律成立：对任意的$a_1,a_2,a_3\in A$，有
  \[
  (a_1+ a_2)\cdot a_3=a_1\cdot a_3 +a_2\cdot a_3,\ \ a_3\cdot (a_1+ a_2)=a_3\cdot a_1 +a_3\cdot a_2.
  \]

就称$(A,\cdot,+)$或$A$是一个**环**。
:::

::: remark [记号的澄清]
有以下几个简单的事实：

- 对任意的$a\in A$，$0\cdot a=a\cdot 0=0$。

- 对任意$a\in A$，用$-a$表示其加法的逆元，即$a+(-a)=(-a)+a=0$；用$a-b$表示$a+(-b)$；根据结合律，
  $-(a\cdot b)=(-a)\cdot b=a\cdot (-b)$，我们把这个结果简写成$-a\cdot b$或者$-ab$；
  用$ab$表示$a\cdot b$。

:::

::: remark
如果对任意$a,b\in A$，$a\cdot b=b\cdot a$，就称$A$是**交换环**。
:::

::: remark
给定$a\in A$，如果存在$a'\in A$，使得$a\cdot a'=1$，就称$a'$是$a$的一个**右逆**；类似地，
如果存在$a''\in A$，使得$a''\cdot a=1$，就称$a''$是$a$的一个**左逆**。

注意到，如果$a$既有左逆又有右逆，它们必然相同（都等于$a''aa'$）并且唯一。此时，它被称为$a$的**逆**。

用$A^\times$表示环$A$中有逆的元素（即有左逆又有右逆）的元素的集合。很明显，$(A^\times,\cdot)$是群。

根据定义，如果每个非零的$a \in A$均有逆，那么$A$是**域**（我们并不要求域的乘法是交换的）。
简而言之，域可以做加减乘除（乘逆）的四则运算而环只能做加减乘这三种运算。
:::

::: example
${\mathbb{Z}},{\mathbb{Q}},{\mathbb{R}}$或${\mathbb{C}}$配有通常的乘法和加法运算构成交换环。
实际上，除${\mathbb{Z}}$之外，其余的环均为域。
:::

::: example
$A$是环，$\mathbf{M}_n(A)$是环$A$上$n\times n$的矩阵的集合。
注意到，矩阵的乘法和加法只用到了分量上的乘法和加法并且不使用乘法的逆或者交换律，
所以，在矩阵的加法和乘法下，$\mathbf{M}_n(A)$是环，
其单位矩阵和零矩阵对应着$1_{_{\mathbf{M}_n(A)}}$和$0_{_{\mathbf{M}_n(A)}}$。

一般而言，$n\geqslant 2$，$\mathbf{M}_n(A)$不是交换环。

对于域$K$，有$M_n(K)^\times=\mathbf{GL}(n,K)$。

对于交换环$A$，我们仍然可以定义行列式：
\[
\det\colon {\mathbf{M}_n(A)}\rightarrow A,  \ \ M\mapsto \!\!\! \!\!\! \!\!\!\sum_{(k_1,\cdots,k_n)\text{ 为 }(1,\cdots,n)\text{ 的排列}} \!\!\! \!\!\! \!\!\! (-1)^{\sigma(k_1,\cdots,k_n)}M_{1,k_1}M_{2,k_2}\cdots M_{n,k_n},
\]
其中，
$M_{i,j}\in A$为$M$在第$i$行第$j$列处的数而$\sigma(k_1,\cdots,k_n)$为排列$(k_1,\cdots,k_n)$
的奇偶性。此时，我们仍然有
\[
M\cdot M^*=\det(M)\cdot \mathbf{I}_n,
\]
其中，$M^*$为$M$的伴随矩阵，$\mathbf{I}_n$为单位矩阵。
从而，$M\in {\mathbf{M}_n(A)}^\times$当且仅当$\det(M)\in A^\times$。
:::

::: example
$n\geqslant 2$。在$
  {\mathbb{Z}/n\mathbb{Z}}
$上定义乘法，
对任意的$\overline{k}, \overline{l}\in
  {\mathbb{Z}/n\mathbb{Z}}
$，定义
\[
\overline{k}\cdot \overline{l}=\overline{k\cdot l}.
\]
容易看出这是良好定义的。这样，我们就得到了交换环$(
  {\mathbb{Z}/n\mathbb{Z}}
,+,\cdot)$。

如果$n$是合数，即$n=n_1\cdot n_2$，$n_1,n_2\geqslant 2$。
那么，$\overline{n_1}\cdot \overline{n_2}=\overline{n}=0$。
由于$\overline{n_1}$和$\overline{n_2}$均非零，所以$
  {\mathbb{Z}/n\mathbb{Z}}
$不是域，因为$\overline{n_1}$没有逆。

另外，如果$n=p$是素数，我们已经构造了域$
  {\mathbb{Z}/p\mathbb{Z}}
$。
:::

::: example [多项式环]
$A$是环，$A[X]$是$A$上以$X$为不定元的多项式的集合，即每个$P\in A[X]$均形如
\[
P(X)=\sum_{k=0}^n a_k X^k.
\]
其中，$a_k\in A$，$a_n\neq 0$。这里，$n$被称为 **$P$的次数**并记作$\deg P$。
另外多项式之间的乘法和加法形式上与传统一致，这就是多项式环$A[X]$的定义。

另外，我们强调多项式不是多项式函数。

我们有如下简单的性质：

- a) 若$A$是交换环，则$A[X]$也是交换环。

- b) 若$K$是域，则对任意非零的$P,Q\in K[X]$，$\deg(P\cdot Q)=\deg(P)+\deg(Q)$。

  作为练习，试举例使得$P,Q\in A[X]$是非零多项式而$P\cdot Q=0$。

:::

::: example
拓扑空间$X$上的（复值）连续函数空间$C(X)$是环，其中，乘法和加法按照通常的方式定义。
:::

::: example [$K$-代数]
$K$是域，$A$是环并且是$K$-线性空间，如果对任意的$x,y\in A$和$k\in K$，我们有
\[
k\cdot(x\cdot_{_A}y) = (k x)\cdot_{_A} y = x\cdot_{_A} (k y),
\]
就称$A$是 **$K$-代数**。

我们有如下三类重要的例子：

- $K$是域，多项式环$K[X]$是$K$-代数。

- $K$是域，$n\times n$的矩阵环$\mathbf{M}_n(K)$是$K$-代数。

- $K$是域，$G$是群，所谓的**群代数$K[G]$** 定义如下：
  $K[G]$是$K$-线性空间并且$\{e_g\bigm|g\in G\}\subset K[G]$是一组基；
  对任意的$x=\sum_{g\in G}x_g e_g, y=\sum_{h\in G}y_h e_h\in K[G]$（以上均为有限和），其中，
  $x_g,y_h\in K$，其乘法由下面公式给出：
  \[
  x\cdot y=\sum_{g\in G}\sum_{h\in G}x_g y_h e_{gh}.
  \]
  这是一个$K$-代数，它的乘法记录了群$G$的乘法。

:::

::: definition
$A$是环，$B\subset A$为其加法群的子群。
如果$1_{_A}\in B$并且$B$对乘法封闭，即对任意$a,b\in B$，$a\cdot b\in B$，就称$B$是$A$的**子环**。

使用环$A$的加法和乘法，子环$B$具有自然的环结构。
:::

::: example
${\mathbb{Z}}$是$\mathbb{C}$的子环（不是子域）而${\mathbb{Q}}$和${\mathbb{R}}$是${\mathbb{C}}$
的子域。
:::

::: definition [环同态]
$(A_1,+_{_1},\cdot_{_1})$和$(A_2,+_{_2},\cdot_{_2})$是环，$\varphi\colon A_1\rightarrow A_2$是映射。
如果$\varphi$保持加法和乘法，即对任意的$a,b\in A_1$，有
\[
\varphi(a +_{_1} b)=\varphi(a)+_{_2} \varphi(b), \ \ \varphi(a \cdot_{_1} b)=\varphi(a)\cdot_{_2} \varphi(b),
\]
并且$\varphi(1_{_{A_1}})=1_{_{A_2}}$，就称$\varphi$是从$A_1$到$A_2$的**环同态**。
我们用${\rm Hom}(A_1,A_2)$表示从$A_1$到$A_2$的环同态的集合。
如果环同态$\varphi$是双射，就称$\varphi$是从$A_1$到$A_2$的一个**环同构**；
如果$A_1$与$A_2$之间存在环同构，就称这两个环是**同构的**并记作是$A_1\simeq A_2$。
:::

::: remark
给定从$A_1$到$A_2$的环同构$\varphi$，它的逆
\[
\varphi^{-1}\colon A_2\longrightarrow A_1
\]
是环同态（也是双射），即$\varphi^{-1}\in {\rm Hom}(A_2,A_1)$。
:::

::: remark
对任意的$\varphi\in {\rm Hom}(A_1,A_2)$，它的**核**定义为
\[
{\rm Ker}(\varphi)=\big\{a\in A_1\bigm|\varphi(a)=0_{_{A_2}}\big\}.
\]
这是$A_1$的加法子群，但是${\rm Ker}(\varphi)$并非子环，因为$1_{_A}\notin {\rm Ker}(\varphi)$。

另外，$\varphi$为单射当且仅当${\rm Ker}(\varphi)=\{0\}$。
:::

::: example
$\mod n$映射是环同态
\[
\mathbb{Z}\stackrel{{\rm mod}~n}{\longrightarrow}
  {\mathbb{Z}/n\mathbb{Z}}
, \ \ k \mapsto \overline{k}.
\]
其中，${\rm Ker}\big(\mathbb{Z}\rightarrow
  {\mathbb{Z}/n\mathbb{Z}}
\big)=n\mathbb{Z}$。
:::

::: lemma [常用]
$K$是域，$A$是环，$\varphi\colon K\rightarrow A$是环同态，则$\varphi$是单射。
:::

::: proof
实际上，对任意$k\in K^\times$，有
\[
\varphi(k)\cdot \varphi(k^{-1})=\varphi(k \cdot k^{-1})=\varphi(1)=1.
\]
所以，$k\notin {\rm Ker}(\varphi)$。从而，${\rm Ker}(\varphi)=\{0\}$。
:::

[^1]: 更一般的环的定义不要求有乘法单位元，这里的定义在一些文献中被称作是幺环。
