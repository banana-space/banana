---
title: 域与线性空间
---

<problems>
- 关于射影空间 $\mathbf{P}(V)$ 的第一个练习中，第 2、3 项似乎只在 $\dim_K V=3$（射影平面）时成立：在更高维的射影空间中，两条不同的直线可能不相交，也不一定落在同一平面内。
</problems>

::: definition [域的定义]
$K$是集合并且至少有$2$个元素。如果$K$上定义了**乘法**$\cdot$和**加法**$+$，即映射
\[
K\times K\rightarrow K,  \ \ (a,b)\mapsto a+ b,
\]
和
\[
K\times K\rightarrow K,  \ \ (a,b)\mapsto a\cdot b,
\]
并且存在元素$0_{_K}, 1_{_K}\in K$，$0_{_K}\neq 1_{_K}$，使得如下公理成立：

1. - $0_{_K}$是加法单位元，即对任意的$a\in K$，有
     \[
     0_{_K}+a=a+0_{_K}=a;
     \]

   - 加法满足结合律，即对任意的$a_1,a_2,a_3\in K$，有
     \[
     (a_1+ a_2)+ a_3=a_1+ (a_2+a_3);
     \]

   - 加法满足交换律，即对任意的$a,b\in K$，有
     \[
     a+b=b+a;
     \]

   - 加法有逆元，即对任意的$a\in K$，存在$-a\in K$，使得
     \[
     a+(-a)=0_{_K}.
     \]

2. - $1_{_K}$是乘法单位元，即对任意的$a\in K$，有
     \[
     1_{_K}\cdot a=a\cdot 1_{_K}=a;
     \]

   - 乘法满足结合律，即对任意的$a_1,a_2,a_3\in K$，有
     \[
     (a_1\cdot a_2)\cdot a_3=a_1\cdot (a_2 \cdot a_3);
     \]

   - 乘法满足交换律，即对任意的$a,b\in K$，有
     \[
     a\cdot b=b\cdot a;
     \]

   - 乘法具有逆元，即对任意的$a\in K^\times\coloneqq K-\{0\}$，存在$a^{-1}\in K$，使得
     \[
     a\cdot a^{-1}=1_{_K}.
     \]

3. 乘法和加法满足乘法分配律：对任意的$a_1,a_2,a_3\in K$，有
   \[
   (a_1+ a_2)\cdot a_3=a_1\cdot a_3 +a_2\cdot a_3,\ \ a_3\cdot (a_1+ a_2)=a_3\cdot a_1 +a_3\cdot a_2.
   \]

就称$(K,\cdot,+)$或$K$是一个**域**。
:::

::: remark
在法语数学文献中，域的定义并不要求乘法交换。然而，绝大多数的数学情景下我们遇到的域都是交换的。
另外，我们将在作业中证明著名的Wedderburn定理：$K$是有限域[^1]（不假设乘法交换性），
那么$K$的乘法是交换的。
:::

::: remark [记号的澄清]
有以下几个简单的事实：

- 通常用$ab$表示$a\cdot b$。

- 通常把$0_{_K}, 1_{_K}$简写成$0,1$。我们还用$-1$表示$-1_{_K}$。

- 对任意的$a\in K$，加法逆元$-a$是唯一的。

- 对任意的$b\in K-\{0\}$，乘法逆元$b^{-1}$也是唯一的，我们还把它写成$\frac{1}{b}$。

- 对任意的$a\in K$，$0\cdot a=a\cdot 0=0$。

- 对任意的$a\in K$，$(-1) \cdot a=-a$。

- 用$a-b$表示$a+(-b)$。
  利用结合律容易证明$-(a\cdot b)=(-a)\cdot b=a\cdot (-b)$，我们把它简写为$-a\cdot b$或者$-ab$。

- 用$\frac{a}{b}$表示$a\cdot b^{-1}=a\cdot \frac{1}{b}$。

:::

::: example
${\mathbb{Q}},{\mathbb{R}}$和${\mathbb{C}}$配备上通常的乘法和加法运算均为域。
:::

::: example
$p$是素数。我们用${\mathbb{Z}/p\mathbb{Z}}$表示整数集除$p$的同余类，即
\[
{\mathbb{Z}/p\mathbb{Z}}=\big\{\overline{0},\overline{1},\cdots,\overline{p-1}\big\},
\]
其中，$\overline{k}=\big\{m\in \mathbb{Z}\big| m\equiv k\pmod{p}\big\}$，$k=0,\cdots, p-1$。
换而言之，我们在${\mathbb{Z}}$上定义等价关系$\sim$，其中，$m\sim n$当且仅当$m\equiv n\pmod{p}$，
那么，${\mathbb{Z}/p\mathbb{Z}} \coloneqq {{\mathbb{Z}}/\sim}$。
对于任意的$l\in \mathbb{Z}$，用$\overline{l}$表示它在${\mathbb{Z}/p\mathbb{Z}}$所对应的同余类。

在${\mathbb{Z}/p\mathbb{Z}}$上定义加法：对任意的$k,l \in {\mathbb{Z}}$，
规定$\overline{k}+\overline{l}=\overline{k+l}$。
容易验证，这是良好定义的，即这个定义不依赖于等价类中代表元的选择：
如果$\overline{k}=\overline{k'}, \overline{l}=\overline{l'}$，那么，
$\overline{k+l}=\overline{k'+l'}$。这样定义的加法显然是交换的并且$\overline{0}$是加法单位元。

在${\mathbb{Z}/p\mathbb{Z}}$上定义乘法：对任意的$k,l \in {\mathbb{Z}}$，
规定$\overline{k}\cdot \overline{l}=\overline{k\cdot l}$。
这也是良好定义的并且这个乘法是交换的，$\overline{1}$是乘法单位元。
为了说明乘法有逆元，考虑任意的非零元$\overline{k}\in {\mathbb{Z}/p\mathbb{Z}}$。
由于$p$是素数，所以，$(k,p)=1$（互素）。根据Bézout定理，存在$a,b\in \mathbb{Z}$，使得$ak+bp=1$。
那么，在${\mathbb{Z}/p\mathbb{Z}}$中，就有$\overline{ak}=1$，即$\overline{a}\overline{k}=1$。
这表明$\overline{k}$有逆元$\overline{a}$。

综上所述，${\mathbb{Z}/p\mathbb{Z}}$配有以上定义的加法和乘法是域。

对素数$p$，约定${\mathbb{F}}_p$表示域${\mathbb{Z}/p\mathbb{Z}}$。
这是有限域，因为$|{\mathbb{F}}_p|=p$。
:::

::: definition [域上的线性空间]
$K$是域，$V$是非空集合。如果$V$上配备了加法$+$以及$K$对$V$的乘法，即映射
\[
V\times V\rightarrow V,  \ \ (v_1,v_2)\mapsto v_1+ v_2,
\]
和
\[
K\times V\rightarrow V,  \ \ (k,v)\mapsto k\cdot v,
\]
以及元素$0_{_V}\in V$，使得

1. - 加法满足结合律，即对任意的$v_1,v_2,v_3\in V$，有
     \[
     (v_1+ v_2)+ v_3=v_1+ (v_2+v_3).
     \]

   - 加法满足交换律，即对任意的$v_1,v_2\in V$，有
     \[
     v_1+v_2=v_2+v_1.
     \]

   - $0_{_V}$是加法单位元，即对任意的$v\in V$，有
     \[
     0_{_V}+v=v.
     \]

   - 加法有逆元，即对任意的$v\in V$，存在$-v\in V$，使得$v+(-v)=0_{_V}$。

2. - 乘法满足结合律，即对任意的$a_1,a_2\in K$和$v\in V$，有
     \[
     (a_1\cdot a_2)\cdot v=a_1\cdot (a_2 \cdot v).
     \]

   - $1_{_K}$是乘法单位元，即对任意的$v\in V$，有
     \[
     1_{_K}\cdot v=v.
     \]

   - 乘法满足分配律：对任意的$a_1,a_2,a\in K$和$v_1,v_2,v\in V$，有
     \[
     (a_1+ a_2)\cdot v=a_1\cdot v +a_2\cdot v,\ \ a\cdot (v_1+ v_2)=a\cdot v_1 +a\cdot v_2.
     \]

就称$V$是 **$K$上的线性空间**或 **$K$-线性空间**。
:::

::: remark
线性代数课程中我们讨论的线性空间通常定义在${\mathbb{Q}},{\mathbb{R}}$或者${\mathbb{C}}$上。
由于课程中基本概念与定理，譬如矩阵、行列式、线性映射、线性子空间、线性无关性、维数、
基的存在性定理等只用到了以上域上的四则运算（加减乘除），所以，这些概念可以平行地搬到$K$-线性空间上。
:::

::: example [射影空间$\mathbf{P}(V)$]
给定$K$-线性空间$V$，$\dim_K V\geqslant 1$，令
\[
\mathbf{P}(V)\coloneqq\big\{L\subset V\big|\text{$L$ 是 $1$ 维线性子空间}\big\}.
\]
这是$V$中过原点的直线的集合。
对于$V^\times=V-\{0_{_V}\}$，我们定义等价关系$\sim$，其中，
$v_1\sim v_2$当且仅当存在$k\in K^\times$，使得$v_1=k\cdot v_2$，那么，
\[
\mathbf{P}(V)\simeq {(V^\times)/\sim}.
\]

对于$K$-线性子空间$W\subset V$，
${(W^\times)/\sim} \subset \mathbf{P}(V)$被称作是$\mathbf{P}(V)$的一个**线性子空间**，
其**维数**被定义为$\dim_K W-1$。
当$\dim_K W=2$或$3$时，${(W^\times)/\sim}$分别被称作是$V$中的**直线**或**平面**。

假设$V$是$n+1$维$K$-线性空间，$(e_0,\cdots,e_n)$为$V$的一组基，那么，
对任意的$v=k_0 e_0+k_1e_1+\cdots+k_ne_n\in V^\times$，其中，$k_0,k_1,\cdots,k_n$不全为$0$，
我们用$[k_0:k_1:\cdots:k_n]$表示$v$的等价类，即过$v$的线性子空间。
我们称$[k_0:k_1:\cdots:k_n]$为$\mathbf{P}(V)$上的**齐次坐标**。对任意的$k\in K^\times$，显然有
\[
[k_0:k_1:\cdots:k_n]=[k\cdot k_0:k\cdot k_1:\cdots:k\cdot k_n].
\]

如果$K$是有限域，$V$是有限维$K$-线性空间，那么，$\mathbf{P}(V)$是有限集。
我们将看到，这个集合将会提供很多有趣的群的例子。
:::

::: exercise
给定射影空间$\mathbf{P}(V)$，其中，$V$是$K$-线性空间。证明如下的性质：

1. 对任意两个不同的点$x,x'\in\mathbf{P}(V)$，存在唯一的直线$\ell\subset \mathbf{P}(V)$，
   使得$x,x'\in \ell$。

2. 对任意两条不同的直线$\ell,\ell'\subset\mathbf{P}(V)$，它们恰有一个交点。

3. 对任意两条不同的直线$\ell,\ell'\subset\mathbf{P}(V)$，存在唯一的平面$P\subset \mathbf{P}(V)$，
   使得$\ell,\ell' \subset P$。

:::

::: example
当$K={\mathbb{F}_p}$，$V=({\mathbb{F}_p})^2$时，
$\mathbf{P}^1({\mathbb{F}_p})\coloneqq\mathbf{P}(V)$，这个集合有$p+1$个元素。

当$K={\mathbb{F}_p}$，$V=({\mathbb{F}_p})^{n+1}$时，
$\mathbf{P}^n({\mathbb{F}_p})\coloneqq\mathbf{P}(V)$，那么，
\[
|\mathbf{P}^n({\mathbb{F}_p})|=\frac{p^{n+1}-1}{p-1}.
\]
:::

::: exercise
假设$|K|=q$，$\mathbf{P}^{n-1}(K)\coloneqq\mathbf{P}(K^n)$。

1. 证明，$\mathbf{P}^{n-1}(K)$的$m-1$维线性子空间的个数为：
   \[
   \begin{bmatrix}n \\ m\end{bmatrix}_q\coloneqq\frac{(q^n-1)(q^n-q)\cdots(q^n-q^{m-1})}{(q^m-1)(q^m-q)\cdots(q^m-q^{m-1})}.
   \]

2. 给定$\mathbf{P}^{n-1}(K)$的$l-1$维线性子空间$\mathbf{P}(W)$，证明，
   $\mathbf{P}^{n-1}(K)$中包含$\mathbf{P}(W)$的$m-1$维线性子空间的个数为
   $\begin{bmatrix}n-l \\ m-l\end{bmatrix}_q$。

3. 证明，对$k\leqslant n$，有如下恒等式
   \[
   \begin{bmatrix}n \\ k\end{bmatrix}_q+q^{n-k+1}\begin{bmatrix}n \\ k-1\end{bmatrix}_q=\begin{bmatrix}n+1 \\ k\end{bmatrix}_q.
   \]

4. 证明，对$n\geqslant 1$，有如下的多项式恒等式
   \[
   \prod_{k=0}^{n-1}(1+q^k X)=\sum_{k=0}^n q^{\frac{k(k-1)}{2}}\begin{bmatrix}n \\ k\end{bmatrix}_qX^k.
   \]
   （这个等式被称作是$q$-二项式展开，将$q$看作是变量，试考虑$q\rightarrow 0$的极限。）

:::

::: example [Fano平面]
给定三个不同的点$l,l',l''\in \mathbf{P}(V)$，
如果它们对应的$V$的$3$个$1$维线性子空间张成的空间维数为$2$，我们就称$l,l',l''$**共线**。

用$0$和$1$表示${\mathbb{F}}_2$中元素，此时，
$\mathbf{P}^2({\mathbb{F}}_2)\coloneqq\mathbf{P}(V)$有$7$个元素，
每个元素都对应$({\mathbb{F}}_2)^3$中的一个非零向量，它们可以用坐标列举如下：
\[
\begin{aligned}
&v_1=(0,0,1), \ \ v_2=(0,1,0), \ \ v_3=(0,1,1), \\
&v_4=(1,0,0), \ \ v_5=(1,0,1), \ \ v_6=(1,1,0), \ \ v_7=(1,1,1).
\end{aligned}
\]
我们用如下的图表示$\mathbf{P}^2({\mathbb{F}}_2)$：

![](YPAA_Gal0.svg)

以上图中有$6$条直线段，每条这样的线段上的三个点都是共线的；图中圆形所经过的三个点也是共线的。
:::

[^1]: 如果域$K$的元素个数是有限的，就称$K$是有限域。
