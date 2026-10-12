---
title: 归纳极限
categories: [范畴论]
navboxes: [范畴论]
---

**归纳极限**将一个有向系统中的对象及其相容映射合成为一个对象。
例如，一个集合是其有限子集的有向并，
一个向量空间是其有限维子空间的有向并。
归纳极限将这些构造推广到系统中的映射不一定是包含映射的情形。

以下以小有向偏序集为指标定义归纳极限。
归纳极限是这种图表的[[余极限]]，也称**正向极限**，通常记为 $\varinjlim$。
以一般小[[滤范畴]]为指标的余极限称为[[滤余极限]]。

## 定义

设 $I$ 为非空的有向偏序集，即对任意 $i,j\in I$，
存在 $k\in I$，使得 $i\leq k$ 且 $j\leq k$。
将 $I$ 看作一个范畴，当且仅当 $i\leq j$ 时存在唯一的态射 $i\to j$。

::: definition [归纳系统]
[[范畴]] $\mathcal C$ 中以 $I$ 为指标的**归纳系统**
是一个函子 $X\colon I\to\mathcal C$。
具体地，它由对象 $X_i$ 及态射 $u_{ij}\colon X_i\to X_j$ $(i\leq j)$ 组成，
满足 $u_{ii}=\operatorname{id}_{X_i}$ 及
\[
u_{jk}\circ u_{ij}=u_{ik}\qquad(i\leq j\leq k).
\]
:::

::: definition [归纳极限]
系统 $(X_i,u_{ij})$ 的**归纳极限**是对象 $L$，
连同态射 $\iota_i\colon X_i\to L$，满足
\[
\iota_j\circ u_{ij}=\iota_i\qquad(i\leq j),
\]
并具有以下[[万有性质]]。对任意对象 $Y$ 及满足
$f_j\circ u_{ij}=f_i$ 的态射族 $f_i\colon X_i\to Y$，
存在唯一的态射 $f\colon L\to Y$，使得
\[
f\circ\iota_i=f_i\qquad(i\in I).
\]
记 $L=\varinjlim_{i\in I}X_i$。对任意 $i\leq j$，上述条件可由交换图表示
\[
\begin{tikzcd}[column sep=large, row sep=large]
  X_i \ar[r, "u_{ij}"] \ar[d, "\iota_i"']
    & X_j \ar[d, "f_j"] \ar[dl, "\iota_j"] \\
  L \ar[r, dashed, "f"'] & Y.
\end{tikzcd}
\]
其中 $f$ 是唯一使图交换的态射，且 $f_i=f_j\circ u_{ij}$。
:::

万有性质说明，给出从归纳极限到 $Y$ 的态射，
等价于给出从各个 $X_i$ 到 $Y$ 的相容态射。

由万有性质，归纳极限在保持结构态射的唯一同构意义下确定。

## 集合中的构造

集合的归纳极限可以从 $X_i$ 的不交并出发，
将经结构映射到达同一个 $X_k$ 后相等的元素归入同一个等价类。

::: proposition
设 $(X_i,u_{ij})$ 为集合的归纳系统。在不交并 $\coprod_{i\in I}X_i$ 上定义关系
\[
(i,x)\sim(j,y)
\quad\Longleftrightarrow\quad
\text{存在 }k\geq i,j\text{ 使得 }u_{ik}(x)=u_{jk}(y).
\]
这是等价关系，且商集 $\coprod_{i\in I}X_i/\sim$ 与映射 $\iota_i(x)=[i,x]$ 构成该系统的归纳极限。
:::

::: proof
自反性与对称性由定义得到。
若前后两次等价分别在指标 $k$ 与 $\ell$ 处成立，
取共同上界 $r\geq k,\ell$，将等式映到 $X_r$，即得传递性。
对相容映射族 $f_i\colon X_i\to Y$，定义 $f([i,x])=f_i(x)$。
若 $(i,x)\sim(j,y)$，取使 $u_{ik}(x)=u_{jk}(y)$ 成立的 $k$，利用相容性可得 $f_i(x)=f_j(y)$，
所以 $f$ 良定义。每个等价类都有这样的代表元，因而 $f$ 唯一。
:::

::: corollary
若系统中的所有 $u_{ij}$ 都是单射，则每个 $\iota_i$ 也是单射。
若 $X_i$ 是同一个集合的子集，且结构映射为包含映射，则
\[
\varinjlim_i X_i\simeq\bigcup_i X_i.
\]
:::

::: proof
若 $\iota_i(x)=\iota_i(y)$，则存在 $k\geq i$ 使得 $u_{ik}(x)=u_{ik}(y)$。
由单射性得 $x=y$。
对包含映射组成的系统，两个代表元等价当且仅当它们来自并集中的同一个元素，
因而商集自然同构于它们的并。
:::

## 例子

::: example
在集合及集合映射组成的范畴中，考虑集合 $S$ 的有限子集。
因为 $E\cup F$ 是 $E,F$ 的共同上界，它们按包含关系构成有向集。
因此 $S$ 是其有限子集的归纳极限。
:::

::: example
考虑 $k$-向量空间及 $k$-线性映射组成的范畴，其中 $k$ 为域。
对向量空间 $V$，其有限维子空间也构成有向集，
其中 $U+W$ 是 $U,W$ 的共同上界。
$V$ 是这些有限维子空间的归纳极限。
:::

::: example
在阿贝尔群及群同态组成的范畴中考虑系统
\[
\mathbb{Z}\xrightarrow{0}\mathbb{Z}\xrightarrow{0}\mathbb{Z}\xrightarrow{0}\cdots.
\]
其归纳极限为零群。因为相容态射族必须满足 $f_n=f_{n+1}\circ0=0$，
零群及各个零映射满足万有性质。
:::

::: example [集合的内部]
设 $X$ 为[[拓扑空间]]，$A\subseteq X$。
在 $X$ 的子集及包含映射组成的偏序范畴中考虑以下系统。
记
\[
I=\{U\subseteq A\mid U\text{ 在 }X\text{ 中开}\},
\]
并按包含关系排序。因为 $\varnothing\in I$，且 $U\cup V\in I$
是任意 $U,V\in I$ 的共同上界，所以 $I$ 是有向集。

对 $U\subseteq V$，结构映射为
$u_{U,V}\colon U\to V$，$x\mapsto x$。
集合 $A$ 的[[内部]]为
\[
A^\circ=\bigcup_{U\in I}U=\varinjlim_{U\in I}U,
\]
结构态射 $\iota_U\colon U\to A^\circ$ 仍将 $x$ 映为 $x$。

事实上，对任意子集 $B\subseteq X$，给出态射族 $U\to B$
等价于要求每个 $U\in I$ 都包含于 $B$。
此时 $A^\circ\subseteq B$，因而存在唯一的包含映射
$f\colon A^\circ\to B$。对任意 $U\subseteq V$，有交换图
\[
\begin{tikzcd}[column sep=large, row sep=large]
  U \ar[r, hook, "{u_{U,V}}"] \ar[d, hook, "\iota_U"']
    & V \ar[d, hook] \ar[dl, hook, "\iota_V"] \\
  A^\circ \ar[r, dashed, "f"'] & B.
\end{tikzcd}
\]
这就验证了归纳极限的万有性质。
开集的任意并仍然开，所以这个极限也是包含于 $A$ 的最大开集。
:::

::: example [无限维实射影空间与分类空间]
实[[射影空间]] $\mathbb{RP}^n$ 的每个点代表 $\mathbb R^{n+1}$ 中一条过原点的直线。
非零向量 $(x_0,\ldots,x_n)$ 张成的直线用齐次坐标 $[x_0:\cdots:x_n]$ 表示，
将所有坐标同乘一个非零实数，所得齐次坐标仍代表同一点。
它配备由 $\mathbb R^{n+1}\setminus\{0\}$ 诱导的商拓扑。
也可以在每条直线上取单位向量，将 $\mathbb{RP}^n$ 看作球面 $S^n$
上每对对径点 $v,-v$ 合并后得到的空间。
例如，$\mathbb{RP}^0$ 只有一个点，$\mathbb{RP}^1$ 表示平面中过原点的所有直线。

在拓扑空间及连续映射组成的范畴中，考虑系统
\[
\mathbb{RP}^0\longrightarrow\mathbb{RP}^1\longrightarrow\cdots,
\qquad
i_n\colon[x_0:\cdots:x_n]\longmapsto[x_0:\cdots:x_n:0].
\]
这些嵌入保持已有齐次坐标，在末尾补零。
因此，一条位于 $\mathbb R^{n+1}$ 中的直线被视为 $\mathbb R^{n+2}$ 中的同一条直线。
将所有 $\mathbb{RP}^n$ 沿这些嵌入取并，得到无限维实射影空间
$\mathbb{RP}^{\infty}$。
它的点可用 $[x_0:x_1:\cdots]$ 表示，其中坐标不全为零，
且只有有限个非零项，仍按同乘非零实数的关系取等价类。
每个点都属于某个 $\mathbb{RP}^n$，而整个空间允许非零坐标出现在任意高的位置。

在 $\mathbb{RP}^{\infty}=\bigcup_{n\geq0}\mathbb{RP}^n$ 上配备弱拓扑，
即 $U\subseteq\mathbb{RP}^{\infty}$ 开当且仅当
每个 $U\cap\mathbb{RP}^n$ 都在 $\mathbb{RP}^n$ 中开。
因而
\[
\mathbb{RP}^{\infty}\cong\varinjlim_{n\geq0}\mathbb{RP}^n.
\]
事实上，相容的连续映射 $f_n\colon\mathbb{RP}^n\to Y$
在并集上确定唯一映射 $f$，弱拓扑保证 $f$ 连续。
将自然嵌入记为 $\iota_n\colon\mathbb{RP}^n\to\mathbb{RP}^{\infty}$，
则有交换图
\[
\begin{tikzcd}[column sep=large, row sep=large]
  \mathbb{RP}^n \ar[r, hook, "i_n"] \ar[d, hook, "\iota_n"']
    & \mathbb{RP}^{n+1} \ar[d, "f_{n+1}"] \ar[dl, hook, "\iota_{n+1}"] \\
  \mathbb{RP}^{\infty} \ar[r, dashed, "f"'] & Y.
\end{tikzcd}
\]
空间 $\mathbb{RP}^{\infty}$ 是群 $\mathbb{Z}/2\mathbb{Z}$ 的[[分类空间]]
$B(\mathbb{Z}/2\mathbb{Z})$ 的一个模型，这个分类空间可由有限维实射影空间的归纳极限构造。
:::

::: example [多项式环]
设 $k$ 为域，在 $k$-向量空间范畴中考虑以下归纳系统。
记 $P_n\subseteq k[x]$ 为次数至多为 $n$ 的[[多项式]]
（包括零多项式）构成的向量空间。

对 $n\leq N$，定义线性映射
\[
u_{n,N}\colon P_n\longrightarrow P_N,
\qquad
\sum_{r=0}^n a_r x^r\longmapsto
\sum_{r=0}^n a_r x^r+\sum_{r=n+1}^N 0x^r.
\]
即保持已有系数，在新增的高次幂处补零。
这些映射满足 $u_{N,M}\circ u_{n,N}=u_{n,M}$ $(n\leq N\leq M)$，
从而给出归纳系统
\[
P_0\xrightarrow{u_{0,1}}P_1\xrightarrow{u_{1,2}}P_2\longrightarrow\cdots,
\qquad \varinjlim_n P_n\simeq k[x].
\]

每个多项式只含有限项，所以属于某个 $P_n$。
一族相容的线性映射 $P_n\to W$ 因而唯一确定 $k[x]\to W$ 的线性映射，
证明了万有性质。

记这些相容映射为 $f_n$，诱导映射为 $f$，则有交换图
\[
\begin{tikzcd}[column sep=large, row sep=large]
  P_n \ar[r, hook, "{u_{n,n+1}}"] \ar[d, hook] & P_{n+1} \ar[d, "f_{n+1}"] \ar[dl, hook] \\
  k[x] \ar[r, dashed, "f"'] & W.
\end{tikzcd}
\]

下面用万有性质在 $P=\varinjlim_n P_n$ 上构造乘法，
将结构映射记为 $\iota_n\colon P_n\to P$。
映射 $P_n\times P_m\to P_{n+m}$，$(f,g)\mapsto fg$ 是双线性的，由[[张量积]]的万有性质诱导线性映射
\[
\mu_{n,m}\colon P_n\otimes_k P_m\longrightarrow P_{n+m},
\qquad f\otimes g\longmapsto fg.
\]
在高次幂处补零不改变乘积的已有系数。具体地，对 $n\leq N$，$m\leq M$，有
\[
\mu_{N,M}\circ(u_{n,N}\otimes u_{m,M})
=u_{n+m,N+M}\circ\mu_{n,m}.
\]
因此
$\iota_{n+m}\circ\mu_{n,m}\colon P_n\otimes_k P_m\to P$
随 $n,m$ 相容。

在向量空间范畴中有自然同构
\[
\varinjlim_{(n,m)}(P_n\otimes_k P_m)
\simeq P\otimes_k P,
\]
左侧以逐坐标排序的 $\mathbb{N}\times\mathbb{N}$ 为指标。

这个同构也由万有性质得到。对任意向量空间 $W$，
一族相容的线性映射 $P_n\otimes_k P_m\to W$
等价于一族相容的双线性映射 $P_n\times P_m\to W$。
先固定 $n$ 及 $f\in P_n$，对第二个变量应用归纳极限的万有性质，
得到 $P\to W$ 的线性映射。所得映射随 $f$ 线性变化且随 $n$ 相容，
再对第一个变量应用万有性质，得到唯一的双线性映射 $P\times P\to W$。
张量积的万有性质将它唯一对应于线性映射 $P\otimes_k P\to W$，
从而证明上述同构。

因此，由归纳极限的万有性质，存在唯一的线性映射
$\mu\colon P\otimes_k P\to P$，使得对所有 $n,m$ 有交换图
\[
\begin{tikzcd}[column sep=large, row sep=large]
  P_n\otimes_k P_m \ar[r, "{\mu_{n,m}}"]
    \ar[d, "\iota_n\otimes\iota_m"']
    & P_{n+m} \ar[d, "\iota_{n+m}"] \\
  P\otimes_k P \ar[r, dashed, "\mu"'] & P.
\end{tikzcd}
\]
定义 $ab=\mu(a\otimes b)$，就得到 $P$ 上的双线性乘法。

对 $f\in P_n$，$g\in P_m$，$h\in P_\ell$，等式
$(fg)h=f(gh)$ 位于 $P_{n+m+\ell}$ 中，
经结构映射得到 $P$ 上的结合律。
同样，$fg=gf$ 给出交换律，而 $\iota_0(1)$ 是单位元。
在前述自然同构 $P\simeq k[x]$ 下，
交换图保证这一乘法对应于通常的多项式乘法。
:::

::: example [无限多个变元的多项式环]
设 $A$ 为交换含幺环，在交换含幺 $A$-代数及保幺 $A$-代数同态组成的范畴中考虑以下系统。
逐次添加变元给出同态
\[
A[x_1]\longrightarrow A[x_1,x_2]\longrightarrow\cdots.
\]
其归纳极限为
\[
\varinjlim_n A[x_1,\ldots,x_n]\simeq A[x_1,x_2,\ldots].
\]
右侧的每个多项式都是有限个单项式的和，因而只涉及有限多个变元，
必然属于某个 $A[x_1,\ldots,x_n]$。相容的 $A$-代数同态在这些子代数的并集上
给出唯一映射。

任意两个多项式都属于某个共同的 $A[x_1,\ldots,x_N]$，
所以所得映射保持加法、乘法及单位元，满足万有性质。

记 $R_n=A[x_1,\ldots,x_n]$，$R=A[x_1,x_2,\ldots]$。
对相容的 $A$-代数同态族 $f_n\colon R_n\to B$，诱导映射 $f$ 满足交换图
\[
\begin{tikzcd}[column sep=large, row sep=large]
  R_n \ar[r, hook] \ar[d, hook] & R_{n+1} \ar[d, "f_{n+1}"] \ar[dl, hook] \\
  R \ar[r, dashed, "f"'] & B.
\end{tikzcd}
\]
:::

::: example [紧支撑连续函数环]
设 $X$ 为局部紧 Hausdorff 空间。
在允许无单位元的交换复代数范畴中考虑以下归纳系统，
态射为保持加法、乘法与复数标量乘法的映射，不要求保持单位元。

记 $C(X,\mathbb C)$ 为 $X$ 上的复值连续函数环，运算逐点定义。
对 $f\in C(X,\mathbb C)$，其**支撑**定义为
\[
\operatorname{supp}(f)=\overline{\{x\in X\mid f(x)\ne0\}}.
\]
对紧子集 $K\subseteq X$，定义子代数
\[
C_K(X)=\{f\in C(X,\mathbb C)\mid\operatorname{supp}(f)\subseteq K\}.
\]
两个紧子集的并仍然紧，所以 $X$ 的所有紧子集按包含关系构成有向集。

对 $K\subseteq L$，定义结构映射
\[
u_{K,L}\colon C_K(X)\longrightarrow C_L(X),
\qquad f\longmapsto f.
\]
这里 $f$ 已经定义在整个 $X$ 上，且在 $X\setminus K$ 上为零。
扩大允许的支撑范围时，函数的值保持不变，在新增区域 $L\setminus K$ 上仍取零。
对 $K\subseteq L\subseteq M$，有 $u_{L,M}\circ u_{K,L}=u_{K,M}$。

**紧支撑连续函数环**为
\[
C_c(X)=\{f\in C(X,\mathbb C)\mid\operatorname{supp}(f)\text{ 紧}\}.
\]
因为每个紧支撑函数都属于某个 $C_K(X)$，有
\[
C_c(X)=\bigcup_{K\subseteq X\text{ 紧}}C_K(X)
\simeq\varinjlim_{K\subseteq X\text{ 紧}}C_K(X).
\]

为验证万有性质，设 $B$ 为允许无单位元的交换复代数，
$\varphi_K\colon C_K(X)\to B$ 为相容的代数同态族。
对 $f\in C_c(X)$，取包含 $\operatorname{supp}(f)$ 的紧集 $K$，
定义 $\varphi(f)=\varphi_K(f)$。
若另取紧集 $L$，则由 $K\cup L$ 处的相容性得
$\varphi_K(f)=\varphi_{K\cup L}(f)=\varphi_L(f)$，
因而定义与 $K$ 的选择无关。
对任意 $f,g\in C_c(X)$，取紧集
$K=\operatorname{supp}(f)\cup\operatorname{supp}(g)$，
在 $C_K(X)$ 中计算可知 $\varphi$ 保持加法、乘法与标量乘法。

因此 $\varphi$ 是唯一使下图对所有紧集 $K\subseteq L$ 交换的代数同态
\[
\begin{tikzcd}[column sep=large, row sep=large]
  C_K(X) \ar[r, "{u_{K,L}}"] \ar[d, "\iota_K"']
    & C_L(X) \ar[d, "\varphi_L"] \ar[dl, "\iota_L"] \\
  C_c(X) \ar[r, dashed, "\varphi"'] & B.
\end{tikzcd}
\]
其中 $\iota_K$ 将 $C_K(X)$ 中的函数原样映入 $C_c(X)$。
:::

::: example [无限维空间上的有限矩阵算子]
设 $k$ 为域，在允许无单位元的结合 $k$-代数范畴中考虑以下归纳系统，
态射为保持加法、乘法与标量乘法的映射，不要求保持单位元。

设 $M_n(k)$ 为 $n\times n$ 矩阵构成的代数，其乘法为矩阵乘法。
定义从 $M_n(k)$ 到 $M_{n+1}(k)$ 的映射为
\[
M_n(k)\longrightarrow M_{n+1}(k),
\qquad B\longmapsto
\begin{pmatrix}B&0\\0&0\end{pmatrix}.
\]
这些映射保持加法、乘法与标量乘法，但不保持单位元。

定义
\[
\varinjlim_n M_n(k)\simeq M_\infty(k).
\]
每个 $M_\infty(k)$ 中的矩阵的非零项都位于某个有限的左上方方块中。
:::

::: remark [有限支撑矩阵与有限秩算子]
$M_\infty(k)$ 中的每个算子都具有有限秩，但并非所有有限秩算子都属于 $M_\infty(k)$。
全体有限秩算子还包含更多元素。例如，由
$T(e_r)=e_1$ $(r\geq1)$ 确定的线性算子秩为 $1$，
但其矩阵第一行有无限多个非零项，因而 $T\notin M_\infty(k)$。
恒等算子也不属于 $M_\infty(k)$。
:::

::: example [无限晶格上的局域算子代数]
以下先在含幺复 [[$*$-代数]]及保幺 $*$-同态组成的范畴中构造归纳极限，
再在含幺 $C^*$-代数及保幺 $*$-同态组成的范畴中构造归纳极限。

设[[晶格]] $\Gamma=\mathbb{Z}^d$，其中 $d\geq1$，每个格点的态空间为
$\mathbb C^q$，其中 $q\geq2$。
对有限区域 $\Lambda\subseteq\Gamma$，定义局域[[算子代数]]
\[
\mathcal A_\Lambda=\bigotimes_{x\in\Lambda}M_q(\mathbb C).
\]
它作用于有限维 [[Hilbert 空间]]
$\mathcal H_\Lambda=\bigotimes_{x\in\Lambda}\mathbb C^q$，
配备算子范数与伴随运算，是含幺的 [[$C^*$-代数]]。
空区域对应 $\mathcal A_\varnothing=\mathbb C$。

所有有限区域按包含关系构成有向集，因为 $\Lambda\cup\Lambda'$ 是共同上界。
当 $\Lambda\subseteq\Lambda'$ 时，利用张量积的自然同构
$\mathcal H_{\Lambda'}\simeq
  \mathcal H_\Lambda\otimes\mathcal H_{\Lambda'\setminus\Lambda}$，定义嵌入
\[
\iota_{\Lambda,\Lambda'}\colon\mathcal A_\Lambda\to\mathcal A_{\Lambda'},
\qquad a\longmapsto a\otimes1_{\Lambda'\setminus\Lambda}.
\]
这里 $1_{\Lambda'\setminus\Lambda}$ 是新增格点态空间上的恒等算子。
这一嵌入保持单位元、乘法与伴随，且由 $\|a\otimes1\|=\|a\|$ 可知它是等距的。
对 $\Lambda\subseteq\Lambda'\subseteq\Lambda''$，有
\[
\iota_{\Lambda',\Lambda''}\circ\iota_{\Lambda,\Lambda'}
=\iota_{\Lambda,\Lambda''}.
\]
因此，这些局域代数与嵌入构成一个归纳系统，也就是以有限区域为指标的嵌入网。
对 $\Lambda\subseteq\Lambda'\subseteq\Lambda''$，嵌入的相容性表示为
\[
\begin{tikzcd}[column sep=large, row sep=large]
  \mathcal A_\Lambda \ar[r, "{\iota_{\Lambda,\Lambda'}}"] \ar[dr, "{\iota_{\Lambda,\Lambda''}}"'] & \mathcal A_{\Lambda'} \ar[d, "{\iota_{\Lambda',\Lambda''}}"] \\
  & \mathcal A_{\Lambda''}.
\end{tikzcd}
\]

先在$*$-代数及保幺 $*$-同态组成的范畴中取归纳极限，
得到**局域算子代数** $\mathcal A_{\mathrm{loc}}$。
通过结构嵌入将每个 $\mathcal A_\Lambda$ 视为 $\mathcal A_{\mathrm{loc}}$ 的子代数，则有
\[
\mathcal A_{\mathrm{loc}}
=\bigcup_{\Lambda\Subset\Gamma}\mathcal A_\Lambda,
\]
其中 $\Lambda\Subset\Gamma$ 表示 $\Lambda$ 是有限子集。
嵌入的等距性保证各个 $\mathcal A_\Lambda$ 的算子范数在并集上相容。
对这个赋范代数作范数完备化，得到**准局域算子代数**
\[
\mathcal A=\overline{\mathcal A_{\mathrm{loc}}}^{\|\cdot\|}.
\]
这一构造见 [@NSY2018, 第 3.1.1 节]。

在含幺 $C^*$-代数及保幺 $*$-同态的范畴中，有
\[
\mathcal A\simeq
\varinjlim_{\Lambda\Subset\Gamma}^{C^*}\mathcal A_\Lambda.
\]
为验证万有性质，设 $B$ 为含幺 $C^*$-代数，
$f_\Lambda\colon\mathcal A_\Lambda\to B$ 为相容的保幺 $*$-同态族。
这些映射在并集上确定唯一的保幺 $*$-同态
$f_{\mathrm{loc}}\colon\mathcal A_{\mathrm{loc}}\to B$。
每个 $C^*$-代数的 $*$-同态都不增大范数，所以
\[
\|f_{\mathrm{loc}}(a)\|\leq\|a\|
\qquad(a\in\mathcal A_{\mathrm{loc}}).
\]
由 $B$ 的完备性，它唯一连续延拓为 $f\colon\mathcal A\to B$。
乘法与伴随的连续性保证延拓仍为保幺 $*$-同态，
唯一性则来自 $\mathcal A_{\mathrm{loc}}$ 在 $\mathcal A$ 中的稠密性。
用嵌入将各局域代数视为子代数，上述诱导与延拓满足交换图
\[
\begin{tikzcd}[column sep=large, row sep=large]
  \mathcal A_\Lambda \ar[r, hook] \ar[dr, "f_\Lambda"] & \mathcal A_{\mathrm{loc}} \ar[r, hook] \ar[d, dashed, "f_{\mathrm{loc}}"] & \mathcal A \ar[dl, dashed, "f"] \\
  & B &
\end{tikzcd}
\]
:::

## 参考文献

```bibliography
Hatcher2002:
  type: book
  author: Allen Hatcher
  year: 2002
  title: Algebraic Topology
  publisher: Cambridge University Press
  note: '例 0.5、1B.3, 无限维实射影空间及其分类空间模型'
  url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
StacksLimits:
  type: book
  author: The Stacks Project Authors
  title: The Stacks Project
  note: 'Categories, 第 4.14 节, 极限与余极限的万有性质'
  url: https://stacks.math.columbia.edu/tag/002D
StacksFiltered:
  type: book
  author: The Stacks Project Authors
  title: The Stacks Project
  note: 'Categories, 第 4.19 节, 滤余极限及集合中的元素描述'
  url: https://stacks.math.columbia.edu/tag/04AX
NSY2018:
  type: preprint
  author: [Bruno Nachtergaele, Robert Sims, Amanda Young]
  year: 2018
  title: 'Quasi-Locality Bounds for Quantum Lattice Systems. Part I. Lieb-Robinson Bounds, Quasi-Local Maps, and Spectral Flow Automorphisms'
  note: '第 3.1.1 节, 局域代数的嵌入及准局域代数的范数完备化'
  arxiv: '1810.02428'
```

```terms
归纳极限:
  en: [direct limit, inductive limit]
```
