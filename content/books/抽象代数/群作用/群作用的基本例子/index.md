---
title: 群作用的基本例子
---

<problems>
- 命题“$p$-群的中心非平凡”的证明中，“上式左边整除 $p$”似乎应为“上式左边被 $p$ 整除”。
- 例子“$\mathfrak{S}_6$的非平凡外自同构”的脚注所引用的“B4)”在习题页面中没有对应的编号。
</problems>

## 几何上的例子

::: example
给定集合$X$及其对称群$\mathfrak{S}_X$，则
\[
\mathfrak{S}_X\times X\longrightarrow X, \ \ (g,x)\mapsto g(x),
\]
是群作用。这个作用是传递的也是忠实的。
对任意的$x\in X$，${\rm Stab}(x)$可以被看作是$\mathfrak{S}_{X-\{x\}}$。

特别地，$\mathfrak{S}_n$自然地作用在$\{1,2,\cdots,n\}$上，即对任意的$k$，
$g\cdot k=g(k)$并且每个${\rm Stab}(k)$可以被看作是$\mathfrak{S}_{n-1}$。
:::

::: example
$K$是域，$V$是有限维$K$-线性空间，
${\mathbf{GL}}(V)$是${\mathbf{End}}_K(V)$中可逆$K$-线性映射构成的群。
那么，${\mathbf{GL}}(V)$自然地作用在$V$上：
\[
{\mathbf{GL}}(V)\times V \rightarrow V, \ \ (g,v)\mapsto g\cdot v =g(v).
\]
我们还考虑${\mathbf{GL}}(V)$的子群，它们也自然地作用在$V$上。

在应用时，通常考虑$V=K^n$，此时${\mathbf{GL}}(V)={\mathbf{GL}}(n;K)$。
当$K=\mathbb{F}_q$（$q$个元素的有限域）时，
${\mathbf{GL}}(V)={\mathbf{GL}}(n;\mathbb{F}_q)$是有限群。
:::

::: example [群的表示]
$K$是域，$V$是$K$-线性空间，$G$在$V$上的一个**线性表示**或**表示**指的是群同态
\[
\rho\colon G \rightarrow {\mathbf{GL}}(V).
\]
其中，$\dim_K V$被称为该表示的**次数**。
线性空间$V$也被称作是$G$的**表示空间**或者简称为$G$的**表示**。

表示$\rho$给出了$G$在$V$上的作用：
\[
G\times V\rightarrow V, \ \ (g,v)\mapsto g\cdot v=\rho (g)(v).
\]
我们注意到对任意的$g\in G$，
\[
g\colon V\rightarrow V, \ \ v\mapsto g(v),
\]
是$K$-线性同构。

简要回顾群代数$K[G]$的概念，
$K[G]$是$K$线性空间并有基$\{e_g\}_{g\in G}$满足$e_g\cdot e_{g'}=e_{gg'}$。
用$g$代替$e_g$，可以更简便地书写$K[G]$的元素及其乘法：
\[
x=\sum_{g\in G} x(g) \cdot g, \ y=\sum_{h\in G} y(h) \cdot h, \ \ x\cdot y=\sum_{g\in G}\sum_{h\in G} x(g) y(h) g\cdot h.
\]
其中，$x(g),y(h)\in K$。

如果$V$是$G$的表示，我们定义
\[
K[G]\times V\rightarrow V, \ \ (x,v)\mapsto x\cdot v=\sum_{g\in G} x(g)  g\cdot v,
\]
其中，$x=\sum_{g\in G} x(g) \cdot g$。从而，$V$成为$K[G]$-模。
:::

::: example [射影空间$\mathbf{P}(V)$]
给定$K$-线性空间$V$（这里我们假设其维数为$n+1$），$\mathbf{P}(V)$是$V$中过原点的线的集合。
当$V=K^{n+1}$时，$\mathbf{P}(V)$被记作$\mathbf{P}^n(K)$。
对任意的齐次坐标$[k_0:k_1:\cdots:k_n]$，它对应着$K^{n+1}$中过$(k_0,k_1,\cdots,k_n)$的直线。

对任意$g\in {\mathbf{GL}}(V)$，$g\colon V \rightarrow V$将过原点的线映射为过原点的线。据此，我们定义
\[
{\mathbf{GL}}(V) \times \mathbf{P}(V) \longrightarrow \mathbf{P}(V), \ \ (g,\ell) \mapsto g\cdot \ell=g(\ell).
\]
这是${\mathbf{GL}}(V)$在$\mathbf{P}(V)$上的作用。

根据 @exam:faithful，我们考虑
\[
\tau\colon {\mathbf{GL}}(V)\longrightarrow \mathfrak{S}_{\mathbf{P}(V)}.
\]
此时，
${\rm Ker}(\tau)=\big\{g\in {\mathbf{GL}}(V)\big| g(\ell)=\ell, \ \ell \in \mathbf{P}(V)\big\}$。
对任意$V$的基$\{e_i\}_{i=1,\cdots,n+1}$，$g\in {\rm Ker}(\tau)$意味着对每个$i$，
都有$g(e_i)=\lambda_i\cdot e_i$，其中，$\lambda_i\in K^\times$。
现在说明这些$\lambda_i$均相等：考虑$e_1+e_2$在$V$中对应的直线，根据$g$的定义，
\[
g(e_1+e_2)=\lambda_1e_1+\lambda_2 e_2=\lambda_1\left(e_1+\frac{\lambda_2}{\lambda_1} e_2\right)
\]
与$e_1+e_2$是共线的，从而，$\lambda_1=\lambda_2$。

通过以上讨论，我们得到${\rm Ker}(\tau)=K^\times\cdot \mathbf{I}$，其中，$\mathbf{I}$是单位映射。
据此，我们有
\[
1\rightarrow K^\times \stackrel{k\mapsto k\cdot \mathbf{I}}{\longrightarrow }{\mathbf{GL}}(V)\stackrel{\tau}{\longrightarrow}\mathfrak{S}_{\mathbf{P}(V)}.
\]
于是，我们定义
\[
{\mathbf{PGL}}(V):=
  {{\mathbf{GL}}(V)/(K^\times\cdot \mathbf{I})}
=
  {{\mathbf{GL}}(V)/(K^\times)}
.
\]
那么，${\mathbf{PGL}}(V)$可以忠实地作用在$\mathbf{P}(V)$上。
当$V=K^{n+1}$时，我们记
\[
{\mathbf{PGL}}(n+1;K):=
  {{\mathbf{GL}}(n+1;K)/(K^\times\cdot \mathbf{I}_{n+1})}
,
\]
其中，$\mathbf{I}_{n+1}$是$(n+1)\times (n+1)$的单位矩阵。

我们还考虑${\mathbf{GL}}(n+1;K)$的子群${\mathbf{SL}}(n+1;K)$，
此时显然有${\mathbf{SL}}(n+1;K)$在$K^{n+1}$上的作用：
\[
{\mathbf{SL}}(n+1;K) \times \mathbf{P}^{n}(K) \longrightarrow \mathbf{P}^{n}(K), \ \ (g,\ell) \mapsto g\cdot \ell=g(\ell).
\]
此时，我们有
\[
{\rm Ker}\big({\mathbf{SL}}(n+1;K) \longrightarrow \mathfrak{S}_{  \mathbf{P}^{n}(K)}\big)={\mathbf{SL}}(n+1;K)\cap K^\times \cdot \mathbf{I}_{n+1}=\mu_{n+1}(K),
\]
其中，
$\mu_{n+1}(K)$为$K$中的$(n+1)$-次单位根的子群（因为要求$\det(\xi \cdot \mathbf{I}_{n+1})=1$）。
据此，我们定义
\[
{\mathbf{PSL}}(n+1;K):=
  {{\mathbf{SL}}(n+1;K)/(\mu_{n+1}(K)\cdot \mathbf{I}_{n+1})}
,
\]
此时，${\mathbf{PSL}}(n+1;K)$可以忠实地作用在$\mathbf{P}^n(K)$上。
:::

::: example [$1$维仿射变换] {@exam:affine-transformation-group}
$K$是域，定义如下$K$到自身的映射的集合：
\[
{\mathbf{Aff}_1(K)}=\big\{f_{a,b}\colon x\mapsto ax+b\big|a\in K^\times,\,b\in K\big\}.
\]
集合$\mathbf{Aff}_1(K)$配上映射的复合作为乘法构成群，它被称为是 **$K$上的$1$维的仿射变换群**。
$\mathbf{Aff}_1(K)$在$K$有自然的作用。这个作用显然是传递的。对于$x_0 \in K$，我们有
\[
{\rm Stab}(x_0)=\big\{x\mapsto a(x-x_0)+x_0\big|a\in K^\times\big\}.
\]
从而，${\rm Stab}(x_0)\simeq K^\times$。实际上，我们有
\[
K^\times \stackrel{\simeq}{\longrightarrow} {\rm Stab}(x_0)<\mathbf{Aff}_1(K), \ \ a\mapsto f_{a,(1-a)x_0}.
\]
:::

::: example [一个具体的例子] {@exam:H-of-S6-120}
考虑有限域$\mathbb{F}_5=({
  {\mathbb{Z}/5\mathbb{Z}}
},+,\cdot)$，$\mathbf{P}^1({\mathbb{F}}_5)$有$6$个元素：
\[
\mathbf{P}^1({\mathbb{F}}_5)=\{\ell_1,\ell_2,\ell_3,\ell_4,\ell_5,\ell_6\},
\]
其中，对$k=1,\cdots,5$，$\ell_k=[1:k]$，$\ell_6=[0:1]$。
那么，$\mathbf{GL}(2;{\mathbb{F}}_5)$在$\mathbf{P}^1({\mathbb{F}}_5)$的作用给出：
\[
\begin{tikzcd}
\mathbf{GL}(2;{\mathbb{F}}_5) \arrow[r, "\tau"] \arrow[d, "\pi"] &  \mathfrak{S}_{\mathbf{P}^1({\mathbb{F}}_5)}\\
 \mathbf{PGL}(2;{\mathbb{F}}_5) \arrow[ur, "\overline{\tau}",swap] &      \end{tikzcd}
\]
另外，
对$\mathbf{P}^1({\mathbb{F}}_5)$中元素的标号将$\mathfrak{S}_{\mathbf{P}^1({\mathbb{F}}_5)}$等同于
$ \mathfrak{S}_6$，上述构造给出一个单的同态：
\[
\overline{\tau}\colon \mathbf{PGL}(2;{\mathbb{F}}_5) \longrightarrow \mathfrak{S}_6.
\]
根据
\[
|\mathbf{PGL}(2;{\mathbb{F}}_5)|=\frac{1}{4}|\mathbf{GL}(2;{\mathbb{F}}_5)|=\frac{1}{4}(5^2-1)(5^2-5)=120,
\]
我们得到了$\mathfrak{S}_6$的一个$120$阶的子群$H={\rm Im}(\overline{\tau})<\mathfrak{S}_6$。

由于$\mathbf{GL}(2;{\mathbb{F}}_5)$传递地作用在$\mathbf{P}^1({\mathbb{F}}_5)$上，
作为$\mathfrak{S}_6$的子群，
$H$在$6$个元素$\{\ell_1,\ell_2,\ell_3,\ell_4,\ell_5,\ell_6\}$上的作用也是传递的。

作为总结，$\mathfrak{S}_6$有$120$阶的子群$H$，它在$\{\ell_1,\cdots,\ell_6\}$上的自然作用是传递的。
另外，
$\mathfrak{S}_6$的的子群${\rm Stab}(\ell_k)$（都与$\mathfrak{S}_5$同构）在$\{\ell_1,\cdots,\ell_6\}$
上的自然作用不传递。
:::

## 群作用在由自身所构造的对象上的例子

::: example [作用在左陪集空间上] {@exam:group-acts-on-left-coset}
$G$是群，$H<G$是子群，$X=
  {G/H}
$，$G$通过左乘法作用在$X$上：
\[
G\times
  {G/H}
\longrightarrow
  {G/H}
,  \ \ (g, g'H)\mapsto (g\cdot g')H.
\]
注意到，以上映射是良好定义的。
因为$((g_1\cdot g_2)\cdot g')H=(g_1\cdot (g_2\cdot g'))H$，上述映射给出了群的作用。
另外，这个作用显然是传递的。

给定子群$H'<G$，我们自然有群作用$^{H'\curvearrowright} \left(
  {G/H}
\right)$：
\[
H'\times
  {G/H}
\longrightarrow
  {G/H}
,  \ \ (h', g'H)\mapsto (h'\cdot g')H.
\]
我们注意到$H'$的作用**未必**传递的。

对任意$g'\in G$，我们计算$g'H\in
  {G/H}
$的稳定化子：
\[
g \cdot g'H= g'H \ \Rightarrow \ g'^{-1}gg'H=H \ \Rightarrow g\in g'Hg'^{-1}.
\]
所以，对群作用$^{H'\curvearrowright} \left(
  {G/H}
\right)$而言，
\[
\boxed{{\rm Stab}(gH)=H'\cap gHg^{-1}}.
\]
这个计算将$^{H'\curvearrowright} \left(
  {G/H}
\right)$的稳定化子与子群$H$的共轭关联在一起。
:::

::: remark
若$G$传递地作用在$X$上，则对任意$x\in X$，映射
\[
\varphi_x\colon
 {G/{\rm Stab}(x)}
\longrightarrow X, \ \ g \cdot{\rm Stab}(x)\mapsto g\cdot x,
\]
是双射，其中$
  {G/{\rm Stab}(x)}
$是左陪集的集合。

$\varphi_x$显然是满射，现在证明单射性：
若$\varphi_x(g \cdot{\rm Stab}(x))=\varphi_x(g' \cdot{\rm Stab}(x))$，则$g\cdot x=g'\cdot x$，
即$g'^{-1}g\in {\rm Stab}(x)$，从而，$g\in g' \cdot{\rm Stab}(x)$，所以，
$g \cdot{\rm Stab}(x)=g' \cdot{\rm Stab}(x)$。

现在研究另一点$x'\in X$的稳定化子。根据传递性，存在$g \in G$使得$x' = g\cdot x$。此时，
\[
h\cdot gx=gx \ \ \Leftrightarrow \ \  g^{-1}hg x=x.
\]
从而，$g^{-1}{\rm Stab}(x')g\subset {\rm Stab}(x)$。据此，我们得到如下公式：
\[
\boxed{{\rm Stab}(gx) = g\cdot{\rm Stab}(x) \cdot g^{-1}}.
\]

简而言之，基准点$x$的改变对应于其稳定化子的共轭。

上述计算表明，用$G$通过左乘法作用在$
  {G/{\rm Stab}(x)}
$与$^{G\curvearrowright} X$是同构的，请参考 @definition-morphism-of-action。
实际上，这两个群作用之间的同构由如下映射给出：
\[
\begin{cases}\varphi\colon G\rightarrow G, \ \  g\mapsto g,\\
\psi\colon
  {G/{\rm Stab}(x)}
\rightarrow X, \ \ g{\rm Stab}(x)\mapsto g\cdot x.
\end{cases}
\]
另外，用$G$通过左乘法作用在$
  {G/{\rm Stab}(x)}
$与$
  {G/{\rm Stab}(x')}
$是同构的，其中$x'=gx$。实际上，这两个群作用之间的同构由如下映射给出：
\[
\begin{cases}\varphi\colon G\rightarrow G, \ \  g\mapsto g,\\
\psi\colon
  {G/{\rm Stab}(x)}
\rightarrow
  {G/{\rm Stab}(x')}
, \ \ h{\rm Stab}(x)\mapsto h\cdot {\rm Stab}(x)\cdot g^{-1}.
\end{cases}
\]

反之，给定$G$的子群$H$，$G$通过左乘法作用在$
  {G/H}
$上，这是传递的并且$H={\rm Stab}(H)$。

作为总结：**给定$G$能传递地作用于其上的集合$X$等价于在模掉共轭的关系下给定$G$的子群**。
:::

::: exercise
$G$是有限群并且传递地作用在集合$X$上。证明，$X$是有限集并且$|X|$整除$|G|$。
:::

作为上述讨论的应用，我们证明所谓的轨道计数公式：

::: remark [轨道计数公式]
群$G$作用在集合$X$上，对任意$x\in X$，以下映射为双射：
\[
  {G/{\rm Stab}(x)}
\stackrel{\simeq}{\longrightarrow} {\rm orb}(x), \ \  g{\rm Stab}(x)\mapsto g\cdot x.
\]
从而，
\[
\big|
  {G/{\rm Stab}(x)}
\big|=\big| {\rm orb}(x)\big|.
\]
假设$G$是有限群并且在有限集$X$上作用，根据作用的轨道分解：
\[
X=\coprod_{k=1}^m {\rm orb}(x_k),
\]
其中，$m$为作用的轨道数目，就得到如下公式
\[
\boxed{\frac{|X|}{|G|}=\sum_{k=1}^m \frac{1}{|{\rm Stab}(x_k)|}}.
\]
:::

::: example
$G$是群，$H\lhd G$是正规子群。$G$通过共轭可以作用在$H$上：
\[
G\times H\longrightarrow H, \ \ g\mapsto (x\mapsto gxg^{-1})
\]
即
\[
G \rightarrow \mathfrak{S}_H, \ \ g \mapsto {\rm Int}(g).
\]

当$H=G$时，以上共轭作用的轨道恰为$G$的共轭类。
给定$x\in G$，其稳定化子是由与$x$交换的元素构成，即其中心化子${\rm C}_x(G)$。
根据轨道计数公式，我们得到共轭类的公式：
\[
\boxed{\sum_{i} \frac{1}{|{\rm C}_{x_i}(G)|}=1},
\]
其中，以上对$G$的共轭类求和而$x_i$为相应共轭类的代表元。
:::

$p$是素数。若群$G$的阶是$p$的幂，就称$G$为 **$p$-群**。作为以上共轭作用的应用，我们证明

::: proposition {@prop:non-trivial-center-for-p-groups}
$p$-群的中心非平凡。
:::

::: proof
$G$为$p$-群，为了证明${\rm Z}(G)\neq 1$，只要考虑$G$通过共轭在$G$上的作用并说明除了$1\in G$的轨道，
还有轨道的恰好有一个元素即可（这个元素显然在${\rm Z}(G)$里）。根据共轭类公式：
\[
p^f=|G|=\sum_{i=1}^m |{\rm Conj}(x_i)|=1+\sum_{i=2}^m |{\rm Conj}(x_i)|,
\]
其中，$m$为共轭类的个数。
在共轭作用下，$\{1\in G\}$是一个单独的轨道，上式右边的$1$代表该轨道的元素个数。
然而，上式左边整除$p$但是右边每个$|{\rm Conj}(x_i)|$都整除$p^f$，
从而右边其余轨道不可能均为$p$的倍数。据此，还有其它轨道其元素个数也是$1$。
:::

::: example [$\mathfrak{S}_6$的非平凡外自同构] {@exam:S6-out}
请参考 @exam:H-of-S6-120。
令$H<\mathfrak{S}_6$是有$120$个元素的子群并且$^{H\curvearrowright} \{1,2,3,4,5,6\}$是传递的，$X=
  {\mathfrak{S}_6/H}
$，则$|X|=6$。我们记
\[
X=\{g_0 H, g_1 H, \cdots, g_5 H\}, \  Y=\{g_1H,g_2H,g_3H,g_4H,g_5H\},
\]
其中$g_0\in H$。考虑$\mathfrak{S}_6$通过左乘法在$X$上的作用，这定义了群同态
\[
f\colon \mathfrak{S}_6\longrightarrow \mathfrak{S}_X.
\]
我们证明，通过$X$中的元素的标号将$\mathfrak{S}_X$与$\mathfrak{S}_6$等同，
则上述$f\colon \mathfrak{S}_6\rightarrow \mathfrak{S}_6$是同构但不是内自同构。

以上群作用给出了$H$在$X$上的作用$^{H\curvearrowright} X$。
由于$H<{\rm Stab}(g_0H)$，$^{H\curvearrowright} X$给出了$H$在$Y$上的作用。特别地，我们有群同态
\[
\varphi\colon H\longrightarrow \mathfrak{S}_Y\simeq \mathfrak{S}_5, \ \ h \mapsto (g_iH \mapsto hg_iH).
\]
我们说明${\rm Ker}(\varphi)=N=1$。
实际上，若$h\in N<H$，则对任意$g_i$，$g_i^{-1}hg_i \in H$，从而对任意$g\in \mathfrak{S}_6$，
$g^{-1}hg\in H$，
所以$\mathfrak{S}_6$正规子群$N'=\langle g N g^{-1}| g\in \mathfrak{S}_6\rangle< H$。
但是$\mathfrak{S}_6$唯一非平凡的正规子群[^1]为$\mathfrak{A}_6$，其指标为$2$，而$H$的指标为$6$，
从而$[\mathfrak{S}_6:N']\geqslant 6$，所以，$N'=1$。
这表明$N=1$，即$\varphi$是单射。另外，$|H|=|\mathfrak{S}_Y|$，所以$\varphi$是群同构。

以上的讨论可交换图表示：
\[
\begin{tikzcd}
\mathfrak{S}_6 \arrow[r, "f"]  &  \mathfrak{S}_X\simeq \mathfrak{S}_6 \\
H \arrow[u, hook]\arrow[r, "\varphi", "\simeq"'] &      \mathfrak{S}_Y \arrow[u, hook]\end{tikzcd}
\]
$f$必为同构：否则，${\rm Ker}(f)\simeq \mathfrak{A}_6$，从而，${\rm Im}(f)$只有两个元素，
然而仅$H$的像就至少$120$个元素，矛盾。

现在将$\mathfrak{S}_X$等同为$\mathfrak{S}_6$，则$f\in {\rm Aut}(\mathfrak{S}_6)$。
我们注意到$f^{-1}(\mathfrak{S}_Y)=H$，
并且$\mathfrak{S}_Y$恰为$\mathfrak{S}_5$到$\mathfrak{S}_6$的标准嵌入之一（因为
$\mathfrak{S}_Y={\rm Stab}(g_0H)$）。
如果$f$是内自同构，则$f^{-1}$也是，
从而$f^{-1}(\mathfrak{S}_Y)=H$是固定某元素所给的$\mathfrak{S}_5\hookrightarrow \mathfrak{S}_6$，
这与$H$的作用是传递的相矛盾。
:::

[^1]: 参考作业 @homework:An-simple 的B4)
