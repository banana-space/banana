---
title: 一元域
categories: [算术几何]
---

在[[算术几何]]中，**一元域**是对一种比[[整数]]环更基础的系数对象的设想，
通常记作 $\mathbb{F}_1$。
大致来说，它希望严格解释以下两种现象：
- 有限集合像[[向量空间]]或[[射影空间]]：其中子集像[[线性子空间]]，
  排列像可逆[[线性映射|线性变换]]。
  例如，[[有限域]]上[[射影空间（代数几何）|射影空间]]的点数为
  $1 + q + \cdots + q^{n-1}$，
  把 $q$ 代为 $1$ 后得到 $n$，因而可以将
  $\mathbb{F}_1$ 上的 $(n-1)$ 维射影空间粗略地想成 $n$ 个点。
- [[函数域类比]]指出，[[代数整数环]]的[[素谱|谱]]像[[代数曲线]]，
  因此可以想象它是 $\mathbb{F}_1$ 上的曲线。
  如能完整建立一元域上的几何，
  或可参考证明 [[Weil 猜想]]的方式证明 [[Riemann 猜想]]。

这些类比促使人们定义一元域，并研究一元域上的几何。

当然，通常的域至少有两个元素。只有一个元素的[[环]]是[[零环]]，不是[[域]]。
因此需要人为指定“一元域”和“一元域上的空间”的含义。
不同的严格化方案赋予这些概念不同的含义。
例如，[[幺半群]]方案保留乘法而不要求加法，研究含零元的幺半群，
其中 $\{0, 1\}$ 作为 $\mathbb{F}_1$。

## 定义

::: definition [一元域，粗略意义]
**一元域** $\mathbb{F}_1$ 是一种设想中的基础系数对象。
它上面的几何对象可以将系数扩张到 $\mathbb{Z}$，得到通常的 $\mathbb{Z}$ 上的[[概形]]。
这种几何还应当使[[有限域]]上某些计数在 $q = 1$ 时的类比具有严格含义。
一元域的[[素谱|谱]] $\operatorname{Spec} \mathbb{F}_1$ 称为**绝对点**。

几何上的一种可能表述是，寻找[[范畴]] $\mathsf{Sch}_{\mathbb{F}_1}$、
其中的[[终对象]] $\operatorname{Spec} \mathbb{F}_1$，以及描述[[基变换（代数几何）|基扩张]]的[[函子]]
\[
- \otimes_{\mathbb{F}_1} \mathbb{Z}
\colon \mathsf{Sch}_{\mathbb{F}_1}
\longrightarrow \mathsf{Sch}_{\mathbb{Z}},
\]
使 $\operatorname{Spec} \mathbb{F}_1$ 的基扩张为
$\operatorname{Spec} \mathbb{Z}$。
这里沿用[[张量积]]的记号来表示所选理论中的基扩张。
若其中的对象 $X_{\mathbb{F}_1}$ 的基扩张同构于通常概形 $X$，
则称它为 $X$ 的 **$\mathbb{F}_1$-模型**，写成
$X_{\mathbb{F}_1} \otimes_{\mathbb{F}_1} \mathbb{Z} \simeq X$。
参见 [@Lorscheid2012, 引言]。
:::

## 例子

### 有限集上的线性代数

::: proposition [有限域上的计数]
设 $q$ 是素数幂，$n \ge 1$，$0 \le k \le n$。
对 $m \ge 1$，记 $[m]_q \coloneqq 1 + q + \cdots + q^{m-1}$，
并记 $[m]_q! \coloneqq \prod_{i=1}^m [i]_q$，其中 $[0]_q! = 1$。

- 射影空间 $\mathbb{P}^{n-1}(\mathbb{F}_q)$ 有 $[n]_q$ 个点，在 $q = 1$ 时得 $n$。
- [[Graßmann 形]] $\operatorname{Gr}(k,n)(\mathbb{F}_q)$ 的点数是[[$q$-二项式系数]]，
  即
  \[
  {n \brack k}_q = \frac{[n]_q!}{[k]_q! [n-k]_q!},
  \qquad {n \brack k}_1 = \binom{n}{k}.
  \]
- $\mathbb{F}_q^n$ 中的[[完全旗]]，即每一维各取一个子空间组成的链，共有 $[n]_q!$ 条，
  在 $q = 1$ 时得 $n!$。
- [[一般线性群]] $\mathrm{GL}_n(\mathbb{F}_q)$ 的阶为
  $(q - 1)^n q^{n(n-1)/2} [n]_q!$。除去[[代数环面|对角环面]]的阶 $(q - 1)^n$ 后，
  在 $q = 1$ 时得 $n!$。
:::

在 $q = 1$ 的组合类比中，射影点、$k$ 维线性子空间和完全旗
分别对应于 $n$ 元集合的元素、$k$ 元子集和[[全序]]。
子空间的包含关系对应于子集的包含关系。
[[置换矩阵]]在坐标子空间上的作用对应于[[对称群]] $\mathfrak{S}_n$ 在子集上的作用，
因而形式上写作 $\mathrm{GL}_n(\mathbb{F}_1) = \mathfrak{S}_n$。
更一般的分裂[[约化群]]与其 [[Weyl 群]]之间也有类似的计数关系。
这些关系是 Tits 提出一元域几何的主要动机之一。
参见 [@Lorscheid2012, 引言; @Baez2002]。

### 点数与 Euler 示性数

::: proposition [仿射胞腔的贡献]
设 $X$ 是 $\mathbb{Z}$ 上的[[有限型概形]]，其结构态射[[分离态射|分离]]，
具有有限个互不相交的[[局部闭子概形]]组成的[[分层]]，
各层同构于[[仿射空间（代数几何）|仿射空间]] $\mathbb{A}_{\mathbb{Z}}^{d_j}$，$1 \le j \le m$。
则对任意素数幂 $q$，
\[
\# X(\mathbb{F}_q) = N_X(q),
\qquad N_X(t) \coloneqq \sum_{j=1}^m t^{d_j},
\]
并且复点空间的[[紧支上同调|紧支]] [[Euler 示性数]]满足
\[
\chi_{\mathrm{c}}(X(\mathbb{C})) = N_X(1) = m.
\]
:::

::: proof
有限域上每个仿射层贡献 $q^{d_j}$ 个点。
紧支 Euler 示性数对有限局部闭分层可加，
而 $\chi_{\mathrm{c}}(\mathbb{C}^{d_j}) = 1$。
:::

射影空间、Graßmann 形和完全旗簇都有这样的 [[Schubert 胞腔]]分解。
因此，它们的计数多项式在 $1$ 的值也等于复点空间的 Euler 示性数。
这解释了为何有时把 $N_X(1)$ 视为“一元域上的点数”。
不过，这不是任意概形都具备的计数公式，
也不保证在每种严格化中都等于某个 $\mathbb{F}_1$-模型
$X_{\mathbb{F}_1}$ 的点集
$\operatorname{Hom}(\operatorname{Spec} \mathbb{F}_1, X_{\mathbb{F}_1})$ 的基数。
参见 [@Lorscheid2014, 第 1 讲及第 3 讲第 6 节]。

### 整数与函数的类比

在[[函数域类比]]中，
整数环 $\mathbb{Z}$ 与[[多项式环]] $\mathbb{F}_q[t]$ 有许多平行之处。
例如，两者的[[素谱]]的[[闭点]]分别由素数和首一[[不可约多项式]]给出，
各闭点的[[剩余域]]都是有限域。
几何上，$\operatorname{Spec} \mathbb{F}_q[t]$ 是有限域上的仿射直线，
这提示把 $\operatorname{Spec} \mathbb{Z}$ 也看作某种基础对象上的曲线，
并把这个基础对象记作 $\mathbb{F}_1$。

对有限域上的[[光滑概形|光滑]]射影曲线 $C$，可以在 $C \times_{\mathbb{F}_q} C$ 中
将[[对角态射|对角线]]与 [[Frobenius 态射|Frobenius]] 的图像相交，
以研究曲线的[[Weil $\zeta$ 函数]]。
记 $S = \operatorname{Spec} \mathbb{Z}$。
仿照这一做法，为研究 [[Riemann $\zeta$ 函数]]，
需要为 $S$ 找到一个基底，并在其上取[[纤维积|相对自乘积]]。
“$\mathbb{F}_1$ 上的曲线”这一设想要求有结构映射
$S \to \operatorname{Spec} \mathbb{F}_1$，从而可以构造
$S \times_{\operatorname{Spec} \mathbb{F}_1} S$，作为算术一侧研究对角线等构造的空间。
参见 [@Manin1995, 第 0 节、第 1.1 节与第 1.6 节; @Lorscheid2018Survey, 第 1.2.4 节]。

## 严格化

以下列出一部分严格化方案，
它们各自实现了一部分“例子”中给出的目标。

### 幺半群形

Deitmar 用交换幺半群作仿射概形的坐标对象。
幺半群的仿射图可以粘成射影空间模型，基扩张后恢复通常的射影空间。
算术曲面的构造超出了这一方案的范围。

::: definition [幺半群模型的一元域]
**一元域** $\mathbb{F}_1$ 是带零元的交换[[幺半群]]范畴的[[始对象]] $\{0,1\}$，
其中 $0$ 是[[吸收元]]，$1$ 是乘法单位元。
在不附加零元的约定中，$\mathbb{F}_1$ 是只含乘法单位元的幺半群 $\{1\}$。
:::

设 $A$ 是带零元的交换幺半群。
仿照交换环的[[素谱]]，它的**素谱**以[[素理想（幺半群）|幺半群的素理想]]为点。
这样的素理想是满足以下条件的真子集：
它含 $0$，乘以 $A$ 中任意元素后仍包含于自身，而其补集是子幺半群。
以 $D(f) \coloneqq \{\mathfrak p \mid f \notin \mathfrak p\}$ 为基本开集。
在 $D(f)$ 上，$f$ 处处不消失，因而[[结构层]]在这个开集上的值为
幺半群的[[局部化（幺半群）|局部化]] $A[f^{-1}]$。
沿开子集的[[同构]]识别各张图及其结构层，便可将这些仿射素谱粘成**[[幺半群形]]**。

对幺半群 $A$，到 $\mathbb{Z}$ 的基扩张由
\[
\operatorname{Spec} A
\longmapsto
\operatorname{Spec}\bigl(\mathbb{Z}[A]/([0])\bigr)
\]
给出。这里 $\mathbb{Z}[A]$ 是[[幺半群环]]，$[0]$ 是其中对应吸收元的基元素。
例如自由带零幺半群
$\mathbb{F}_1[t] = \{0, 1, t, t^2, \ldots\}$
扩张为多项式环 $\mathbb{Z}[t]$。
不附加零元时，基扩张直接使用幺半群环。

在带零元的约定中，对 $n\ge 1$，$n$ 次扩张 $\mathbb F_{1^n}=\{0\}\sqcup C_n$ 是给
$n$ 阶[[循环群]] $C_n=\langle t\mid t^n=1\rangle$ 添上吸收零元所得的幺半群。
它到 $\mathbb Z$ 的基扩张对应环 $\mathbb Z[C_n]\simeq\mathbb Z[t]/(t^n-1)$，
作为 $\mathbb Z$-模的秩为 $n$ [@Soule2004, 第 2.4 节]。

::: example [射影直线的粘接]
取仿射图 $\operatorname{Spec} \mathbb{F}_1[t]$ 和 $\operatorname{Spec} \mathbb{F}_1[u]$。
第一张图的基本开集 $D(t)$ 的函数幺半群为 $\mathbb{F}_1[t,t^{-1}]$，
第二张图的 $D(u)$ 对应 $\mathbb{F}_1[u,u^{-1}]$。
用 $u \mapsto t^{-1}$ 所给的同构识别这两个开集。
两张图各有[[闭点]] $(t)$ 或 $(u)$ 和[[普遍点]] $\{0\}$，而被粘在一起的开集各只含普遍点。
所得模型有两个闭点和一个公共的普遍点。逐图基扩张后，
同样的坐标变换将 $\operatorname{Spec} \mathbb{Z}[t]$ 和 $\operatorname{Spec} \mathbb{Z}[u]$
粘成 $\mathbb{P}^1_{\mathbb{Z}}$。

两个闭点对应两个坐标点，数目正好是 $q + 1$ 在 $q = 1$ 的值。
按从基础点出发的态射来数，还要算上在交叠处由 $t \mapsto 1$ 给出的点。
:::

幺半群形也给出[[环簇]]的模型。[[扇]]中的锥给出坐标幺半群，各锥的交叠决定粘接。
但只保留乘法时，不能直接表达 $ad = bc + 1$ 这样的加法关系。
参见 [@Deitmar2005; @Deitmar2008; @Lorscheid2018Survey, 第 2.1 节]。
后人也对这种方案做了推广。

- Connes–Consani 将幺半群形与通常概形配成一个模型，
  要求两者的域值点一一对应，这一方案可用来构造 Graßmann 形的一元域模型
  [@ConnesConsani2010, 定义 4.7; @Lorscheid2012, 引理 3.2 及例 3.4]。

- Lorscheid 给仿射图的坐标幺半群配上形式和之间的关系，将幺半群推广为[[蓝图]]，
  由蓝图的谱粘成[[蓝概形]]，可用于构造分裂约化群的一元域模型
  [@Lorscheid2012Blueprints, 第 1.3 节及第 3.7 节; @Lorscheid2018Survey, 第 3.2.4 节，定理 3.8]。

### Soulé 的函子方案

Soulé 为射影空间等光滑环簇构造了一元域模型，
并把有限域的计数多项式在 $1$ 处的值与复点空间的 Euler 示性数联系起来。
他把整数谱的相对自乘积留作问题 [@Soule2004, 第 2.1 节、第 5.2.4 节及定理 2(i)]。

按照概形的[[函子观点]]，概形 $Y$ 决定从[[环范畴]]到[[集合范畴]]的函子
$h_Y\colon \mathsf{Ring} \to \mathsf{Set}$，
其中 $h_Y(R)=\operatorname{Hom}(\operatorname{Spec}R,Y)$。

设 $\mathcal R$ 为 $\mathsf{Ring}$ 的[[全子范畴]]，对象是加法群同构于某个 $\mathbb Z^n$ 的环，
其中 $n$ 有限。Soulé 的仿射构造从三元组 $X=(F_X,A_X,e_X)$ 出发。

- $F_X \colon \mathcal R \to \mathsf{Set}$ 是协变函子，$F_X(R)$ 是 $X$ 的 $R$ 值点集。
- $A_X$ 是记录复函数的复代数，允许非交换。
- $e_X$ 是一族复代数同态 $e^X_{x,\sigma} \colon A_X \to \mathbb C$，由
  $R \in \mathcal R$、$x \in F_X(R)$ 和环同态 $\sigma \colon R \to \mathbb C$ 索引。
  对 $f\colon R\to R'$ 和 $\sigma'\colon R'\to\mathbb C$，求值满足
  $e^X_{F_X(f)(x),\sigma'}=e^X_{x,\sigma'\circ f}$。

$e^X_{x,\sigma}$ 把函数送到在 $x$ 处经由 $\sigma$ 得到的复数值。
例如，若取前述扩张 $\mathbb F_{1^m}$ 在 $\mathbb Z$ 上的基扩张环 $R=\mathbb Z[t]/(t^m-1)$，
选取 $\sigma$ 就相当于选取一个 $m$ 次[[单位根]]作为 $t$ 的像。
记 $\mathcal T$ 为这些三元组构成的范畴。
态射 $X\to X'$ 由与求值相容的[[自然变换]] $F_X\to F_{X'}$ 和反向的复代数同态 $A_{X'}\to A_X$ 组成。
嵌入要求自然变换逐项单射、复代数同态单射 [@Soule2004, 第 3.1–3.2 节]。

每个 $\mathbb Z$ 上的[[有限型概形]] $Y$ 都给出一个用于比较的三元组
$D(Y)=(h_Y|_{\mathcal R},\Gamma(Y_{\mathbb C},\mathcal O),e)$。
其中 $Y_{\mathbb C}$ 是 $Y$ 的复化，$e_{x,\sigma}$ 把其结构层的[[截面|整体截面]]在复点处求值，
该复点由 $x$ 和 $\sigma$ 给出。
$D$ 是从有限型 $\mathbb Z$ 概形范畴到 $\mathcal T$ 的函子。

::: definition [Soulé 方案的仿射一元域簇]
**仿射 $\mathbb{F}_1$-簇**是三元组 $X=(F_X,A_X,e_X)$，其中每个 $F_X(R)$ 都有限，
并存在 $\mathbb Z$ 上的有限型[[仿射概形]] $X_{\mathbb Z}$ 和嵌入 $i\colon X\to D(X_{\mathbb Z})$，
使得对每个有限型仿射 $\mathbb Z$ 概形 $Y$，映射
\[
\operatorname{Hom}_{\mathbb Z}(X_{\mathbb Z},Y)
\longrightarrow \operatorname{Hom}_{\mathcal T}(X,D(Y)),
\qquad g\longmapsto D(g)\circ i
\]
都是双射。满足这个[[泛性质]]的 $X_{\mathbb Z}$ 称为 $X$ 到 $\mathbb Z$ 的基扩张。
:::

Soulé 在定义一般的一元域簇时，改用仿射一元域簇作测试对象。
记 $\mathcal A$ 为仿射一元域簇的范畴，点函子是从 $\mathcal A$ 到 $\mathsf{Set}$ 的[[函子|反变函子]]
$F_X\colon\mathcal A^{\mathrm{op}}\to\mathsf{Set}$，
每个 $x\in F_X(U)$ 给出复代数同态 $e^X_x\colon A_X\to A_U$。
用类似的泛性质定义基扩张，此时比较对象的点函子在 $U$ 上取
$\operatorname{Hom}_{\mathbb Z}(U_{\mathbb Z},Y)$，其中 $Y$ 可以是任意有限型 $\mathbb Z$ 概形
[@Soule2004, 第 3.5–3.7 节]。

若有限型 $\mathbb Z$ 概形有有限的仿射开覆盖，各片及交叠的一元域模型满足嵌入与相容性条件，
就可以粘接这些模型，使所得一元域簇的整数基扩张为原概形。
例如，射影直线的模型由两张仿射直线沿乘法群粘接，交叠处的坐标互为倒数
[@Soule2004, 第 4.4 节，命题 5 及第 5.2.4 节]。

::: definition [Soulé 方案的绝对点]
**绝对点** $\operatorname{Spec} \mathbb{F}_1$ 是仿射 $\mathbb{F}_1$-簇
\[
(F,\mathbb C,e),\qquad F(R)=\{*\},\qquad e_{*,\sigma}=\mathrm{id}_{\mathbb C}.
\]
这里 $F$ 是恒取单点的函子，复函数只有常数。恒等求值表示常数 $c$ 在唯一的点上取值 $c$。
它的整数基扩张是 $\operatorname{Spec}\mathbb Z$。
:::

::: example [Hermite 格给出的一元域簇]
设 $L$ 是有限秩自由 $\mathbb Z$-模，并给 $L\otimes_{\mathbb Z}\mathbb C$ 配上由
[[内积空间|Hermite 内积]]诱导的范数 $\|\cdot\|$。
在 [[Arakelov 几何]]中，
这样的格给出算术曲线 $\operatorname{Spec}\mathbb Z\cup\{\infty\}$ 上的[[向量丛]]，
范数给出[[无穷位]]的度量，满足 $\|v\|\le 1$ 的格向量 $v\in L$ 就是整体截面
[@Soule2004, 第 5.3 节]。

在范数不超过 $1$ 的非零格向量中，从每一对 $\{v,-v\}$ 选一个代表元，组成有限集 $\Phi$。
记 $L_0$ 为 $\Phi$ 生成的子格，$r=|\Phi|$。对测试环 $R$，记 $\mu(R)$ 为 $R$ 中的单位根群，取
\[
F_X(R)=\left\{\sum_{v\in\Phi}v\otimes a_v
\ \middle|\ a_v\in\mu(R)\cup\{0\}\right\}
\subset L_0\otimes_{\mathbb Z}R.
\]
环同态 $R\to R'$ 通过映射各个系数诱导 $F_X(R)\to F_X(R')$。
换用另一组代表元只需把相应系数变号，所得点集相同。

记 $B$ 为 $L_0\otimes_{\mathbb Z}\mathbb C$ 中以零为中心、半径为 $r$ 的闭球，
取 $A_X$ 为在 $B$ 上连续、在其内部[[全纯函数|全纯]]的复函数代数。
给定 $x\in F_X(R)$ 和 $\sigma\colon R\to\mathbb C$，令
\[
x_\sigma=(\mathrm{id}_{L_0}\otimes\sigma)(x),\qquad
e^X_{x,\sigma}(f)=f(x_\sigma).
\]
每个 $\sigma(a_v)$ 的模至多为 $1$，故 $\|x_\sigma\|\le r$，求值在 $B$ 上有定义。
所得三元组是仿射 $\mathbb{F}_1$-簇，其整数基扩张为
$\operatorname{Spec}(\operatorname{Sym}_{\mathbb Z}(L_0^\vee))$，
其中 $L_0^\vee=\operatorname{Hom}_{\mathbb Z}(L_0,\mathbb Z)$，
$\operatorname{Sym}_{\mathbb Z}$ 表示[[对称代数]] [@Soule2004, 第 5.3 节，命题 6]。
:::

López Peña 与 Lorscheid 证明，若一个概形可分成有限个局部闭的[[代数环面|分裂环面]]，
并有与这一分解相容的仿射开覆盖，就能用 Soulé 的定义构造其一元域模型。
这个条件适用于 $\mathrm{SL}_2$ 等分裂 [[Chevalley 群]]的底概形。
参见 [@LopezPenaLorscheid2011, 命题 1.18 及定理 3.11]。
对于 $\operatorname{Gr}(2,4)$，Soulé 给出了符合预期计数公式的候选对象，并将基扩张的泛性质留作问题
[@Soule2004, 第 5.4 节，问题 3 及定理 2(iii)]。

### Borger 的 $\lambda$ 结构

这一方案用相容的 Frobenius 提升选出环簇中符合 $q=1$ 计数的点，
并用 [[Witt 空间]]解释整数谱在绝对点上的相对自乘积。
这里的 Frobenius 提升对应有限素数，为整数谱添上无穷位还需要另外的构造。
参见 [@Borger2009, 引言及推论 3.9]。

::: definition [Borger 方案的一元域]
- **一元域** $\mathbb{F}_1$ 是带典范 $\lambda$ 结构的整数环 $\mathbb{Z}$，
  即 [[$\lambda$ 环]]范畴的[[始对象]]。
  其谱是 $\lambda$ 空间范畴的[[终对象]]，称为绝对点。
- **$\mathbb{F}_1$-代数**就是 $\lambda$ 环。
:::

在无整数[[挠模|挠元]]的交换环 $A$ 上，$\lambda$ 结构等价于一族两两交换的环[[自同态]]
$\psi_p \colon A \to A$，其中 $p$ 遍历素数，并满足
\[
\psi_p(a) \equiv a^p \pmod{pA}.
\]
这些 $\psi_p$ 是模 $p$ 的 [[Frobenius 同态]]在 $A$ 上的提升。
在带典范结构的 $\mathbb{Z}$ 上，它们都是恒等映射
[@Borger2009, 第 1.1–1.2 节及第 2.1 节; @BorgerWieland2005, 第 3.4 节]。

从 $\lambda$ 环到交换环的[[遗忘函子]]具有右伴随。它把交换环 $R$ 送到带典范 $\lambda$ 结构的
[[Witt 环|大 Witt 环]] $W(R)$ [@BorgerWieland2005, 第 3 节]。

::: definition [$\mathbb{F}_1$-概形]
**$\mathbb{F}_1$-概形**是带 $\lambda$ 结构的 $\mathbb{Z}$ 概形 $X$。
在仿射 $\mathbb{Z}$ 概形范畴上取[[平展拓扑]]，
大 Witt 空间函子 $W^*$ 在相应的[[层|集合值层]]范畴上构成[[单子]]。
这里的 $\lambda$ 结构是这个单子在 $X$ 上的作用 $W^*(X)\to X$。
在仿射情形，它等价于坐标环上的 $\lambda$ 环结构。到 $\mathbb{Z}$ 的基扩张就是忘掉这个作用。
若 $X$ 在 $\mathbb{Z}$ 上[[平坦态射|平坦]]，
该结构等价于一族两两交换的自态射 $\psi_p\colon X\to X$。
其中 $p$ 遍历素数，每个 $\psi_p$ 在模 $p$ 纤维上的限制是[[Frobenius 态射|绝对 Frobenius 态射]]
[@Borger2009, 第 1.1–1.2 节]。
:::

在 Borger 的空间范畴中，整数谱在绝对点上的相对自乘积是大 Witt 空间
\[
\operatorname{Spec}\mathbb{Z}
\times_{\operatorname{Spec}\mathbb{F}_1}
\operatorname{Spec}\mathbb{Z}
\simeq W^*(\operatorname{Spec}\mathbb{Z}).
\]
它的[[仿射化]]是 $\operatorname{Spec} W(\mathbb{Z})$ [@Borger2009, 第 1.1–1.2 节]。

幺半群形的整数基扩张自然带有 $\lambda$ 结构。
各图上的 Frobenius 提升在单项式上取 $p$ 次幂，与幺半群同态及局部化相容，因而可以粘接
[@Borger2009, 第 2.2–2.4 节]。
例如，扩张 $\mathbb F_{1^n}$ 在这里对应带 $\lambda$ 结构的环 $\mathbb Z[t]/(t^n-1)$，
其中 $\psi_p$ 固定整数，且 $\psi_p(t)=t^p$。

::: example [射影直线上的点]
取射影直线的齐次坐标 $[u:v]$，两张仿射图 $\operatorname{Spec}\mathbb Z[x]$
和 $\operatorname{Spec}\mathbb Z[y]$ 的坐标分别为 $x=u/v$ 和 $y=v/u$。
对每个素数 $p$，令 $\psi_p$ 固定整数，并在两张图上分别取 $\psi_p(x)=x^p$ 和 $\psi_p(y)=y^p$。
这些提升两两交换，模 $p$ 后为 Frobenius，因而给出两张图各自的 $\lambda$ 结构。
提升把变量送到它的幂，故延伸到交叠处的[[局部化]] $\mathbb Z[x,x^{-1}]$ 和 $\mathbb Z[y,y^{-1}]$。
粘接同构由 $y\mapsto x^{-1}$ 给出。因为 $\psi_p(x^{-1})=x^{-p}$，它与每个 $\psi_p$ 相容。
粘接后便得到射影直线的 $\lambda$ 模型，其全局提升为 $[u:v]\mapsto [u^p:v^p]$。

它的 $\mathbb{F}_1$ 值点是与所有 $\psi_p$ 相容的整数点，
即 $[1:0]$、$[0:1]$、$[1:1]$。
其中只有前两个点的补集在所有 $\psi_p$ 下稳定，正好给出 $q + 1$ 在 $q = 1$ 的值。
例如，$\psi_2$ 把补集中的 $[1:-1]$ 送到 $[1:1]$。
参见 [@Borger2009, 第 2.4 节、推论 3.9]。
:::

通常的 [[Graßmann 形]] $\operatorname{Gr}(k,n)_{\mathbb Z}$（$1<k<n-1$）和
$\mathbb Z^n$ 的[[旗簇|完全旗簇]]（$n\ge 3$）都无法将任一模 $p$ 纤维的 Frobenius 提升到整数上，
因而不能赋予 $\lambda$ 结构 [@Borger2009, 第 2.8 节]。
在 $\mathbb Z[1/N]$ 上，
若一条[[光滑态射|光滑]]且[[紧合态射|紧合]]的曲线的[[普遍纤维]]几何连通且有正[[亏格]]，
它也不能赋予 $\lambda$ 结构 [@Borger2009, 第 2.9 节]。
[[仿射概形]] $\operatorname{Spec}\mathbb{Z}[\mathrm{i}]$ 也无法赋予 $\lambda$ 结构。
环自同态只能把 $\mathrm{i}$ 送到 $\pm\mathrm{i}$，这两者模 $2$ 都不等于 $1$。
模 $2$ 的 Frobenius 则把 $\mathrm{i}$ 的像送到 $1$。

### Durov 的广义环

广义环可以把有限[[带基点集合|带基点的集合]]当作线性对象，也可以构造添上无穷位的整数谱。
不过在这套几何中，$\mathbb{Z} \otimes_{\mathbb{F}_1} \mathbb{Z} \simeq \mathbb{Z}$，
未给出前文类比所需的算术曲面。
参见 [@Durov2007, 第 0.5.19、5.1.22 节]。

Durov 从环的“线性组合运算”出发，把交换环推广为[[广义环]]。
例如，交换环 $A$ 决定集合上的函子
$S \mapsto A^{(S)}$，其元素是有限支撑的 $A$ 系数形式和；
形式和的展开与合并赋予它[[单子]]结构。
用满足适当交换性条件的代数单子代替交换环，
可以统一描述更多系数对象，并建立相应的谱与概形。

::: definition [Durov 方案的一元域]
**一元域** $\mathbb{F}_1$ 是由添加一个基点的单子 $S \mapsto S \sqcup \{0\}$ 给出的广义环。
单子乘法将两次加入的基点合并，它的模是[[带基点集合|带基点的集合]]。
:::

通常的整数环也经结构映射成为这一 $\mathbb{F}_1$ 上的广义环。
为在 [[Arakelov 几何]]中添上[[无穷位]]，Durov 还用到有理数的通常[[绝对值]] $|\cdot|_\infty$。
他取有理系数线性组合中的一类运算，构成无穷位的广义环 $\mathbb{Z}_{(\infty)}$
\[
\mathbb{Z}_{(\infty)}(S)
=\left\{(a_s)_{s\in S}\in\mathbb{Q}^{(S)}\ \middle|\ \sum_{s\in S}|a_s|_\infty\le 1\right\}.
\]
若再要求系数为非负整数，允许的线性组合便只有零和单个变量 $s$。
因此 $\mathbb F_1=\mathbb N_0\cap\mathbb{Z}_{(\infty)}$，其中 $\mathbb N_0$ 是非负整数[[半环]]，
交集是在有理数的广义环中逐个集合 $S$ 取得的。

### Toën–Vaquié 的相对几何

这套相对几何把有限集的排列实现为自由模的自同构，给出了
$\mathrm{GL}_n(\mathbb F_1)=\mathfrak S_n$ 的一种含义。
这一自同构群的模型基扩张到 $\mathbb Z$ 后得到可逆[[单项矩阵]]群，
在 $n>1$ 时只恢复了通常[[一般线性群]]的一部分 [@ToenVaquie2009, 命题 4.1(3)–(4)]。

Toën–Vaquié 从适当的[[对称幺半范畴]]中的交换幺半群对象构造几何。
在以[[积集]]为幺半积的[[集合范畴]]中，交换幺半群对象就是交换幺半群。
在以[[张量积]]为幺半积的[[Abel 群范畴]]中，相应的对象是交换环。

::: definition [Toën–Vaquié 方案的一元域]
**一元域** $\mathbb{F}_1$ 是集合范畴配上积集时的幺半单位 $\{1\}$。
它是不带指定零元的交换幺半群范畴的始对象。
:::

单点幺半群在任一集合上的作用由 $1\cdot x=x$ 唯一确定，故 $\mathbb F_1$ 的模范畴就是集合范畴。
秩 $n$ 的[[自由模]]是 $n$ 份 $\{1\}$ 的[[余积]]，在集合中就是不交并，因此恰有 $n$ 个元素。
其[[自同构群]]由这 $n$ 个生成元的排列组成。

从 $\mathbb F_1$ 到 $\mathbb Z$ 的基扩张通过更换背景范畴给出。
从集合范畴到 Abel 群范畴取自由 Abel 群函子 $S\mapsto \mathbb Z^{(S)}$，这是一个对称[[幺半函子]]。
它将交换幺半群 $M$ 送到[[幺半群环]] $\mathbb Z[M]$，
从而将仿射图 $\operatorname{Spec} M$ 送到 $\operatorname{Spec}\mathbb Z[M]$。
沿仿射图的粘接推广这一构造，即得一般概形的整数基扩张
[@ToenVaquie2009, 第 2.5 节及第 3.2–3.3 节]。

## 参考文献*

```bibliography
Lorscheid2012:
  type: article
  author: Oliver Lorscheid
  title: Algebraic groups over the field with one element
  journaltitle: Mathematische Zeitschrift
  volume: 271
  year: 2012
  pages: 117--138
  arxiv: '0907.3824'

Baez2002:
  type: online
  author: John C. Baez
  site: John Baez
  title: This Week's Finds in Mathematical Physics (Week 184)
  year: 2002
  url: https://math.ucr.edu/home/baez/week184.html

Lorscheid2014:
  type: preprint
  author: Oliver Lorscheid
  title: Lectures on F1
  year: 2014
  url: https://www.lorscheid.org/notes/Lectures_on_F1.pdf

Lorscheid2018Survey:
  type: article
  author: Oliver Lorscheid
  title: '$\mathbb{F}_1$ for everyone'
  journaltitle: Jahresbericht der Deutschen Mathematiker-Vereinigung
  volume: 120
  number: 2
  year: 2018
  pages: 83--116
  doi: 10.1365/s13291-018-0177-x
  arxiv: '1801.05337'

Manin1995:
  type: incollection
  author: Yuri I. Manin
  title: Lectures on zeta functions and motives (according to Deninger and Kurokawa)
  booktitle: Columbia University Number Theory Seminar (New York, 1992)
  series: Astérisque
  volume: 228
  year: 1995
  pages: 121--163
  publisher: Société mathématique de France
  url: https://numdam.org/item/AST_1995__228__121_0/

Deitmar2005:
  type: incollection
  author: Anton Deitmar
  title: Schemes over F1
  booktitle: Number Fields and Function Fields—Two Parallel Worlds
  year: 2005
  pages: 87--100
  publisher: Birkhäuser
  arxiv: 'math/0404185'

Deitmar2008:
  type: article
  author: Anton Deitmar
  title: F1-schemes and toric varieties
  journaltitle: Contributions to Algebra and Geometry
  volume: 49
  number: 2
  year: 2008
  pages: 517--525
  arxiv: 'math/0608179'

Soule2004:
  type: article
  author: Christophe Soulé
  title: Les variétés sur le corps à un élément
  journaltitle: Moscow Mathematical Journal
  volume: 4
  number: 1
  year: 2004
  pages: 217--244
  arxiv: 'math/0304444'
  doi: 10.17323/1609-4514-2004-4-1-217-244

LopezPenaLorscheid2011:
  type: article
  author: [Javier López Peña, Oliver Lorscheid]
  title: 'Torified varieties and their geometries over $\mathbb{F}_1$'
  journaltitle: Mathematische Zeitschrift
  volume: 267
  year: 2011
  pages: 605--643
  doi: 10.1007/s00209-009-0638-0
  arxiv: '0903.2173'

ConnesConsani2010:
  type: article
  author: [Alain Connes, Caterina Consani]
  title: Schemes over F1 and zeta functions
  journaltitle: Compositio Mathematica
  volume: 146
  number: 6
  year: 2010
  pages: 1383--1415
  arxiv: '0903.2024'
  doi: 10.1112/S0010437X09004692

Borger2009:
  type: preprint
  author: James Borger
  title: Lambda-rings and the field with one element
  year: 2009
  arxiv: '0906.3146'

BorgerWieland2005:
  type: article
  author: [James Borger, Ben Wieland]
  title: Plethystic algebra
  journaltitle: Advances in Mathematics
  volume: 194
  year: 2005
  pages: 246--283
  arxiv: 'math/0407227'

Lorscheid2012Blueprints:
  type: article
  author: Oliver Lorscheid
  title: 'The geometry of blueprints. Part I: Algebraic background and scheme theory'
  journaltitle: Advances in Mathematics
  volume: 229
  number: 3
  year: 2012
  pages: 1804--1846
  arxiv: '1103.1745'

Durov2007:
  type: thesis
  author: Nikolai Durov
  title: New approach to Arakelov geometry
  year: 2007
  institution: Universität Bonn
  degree: phd
  arxiv: '0704.2030'

ToenVaquie2009:
  type: article
  author: [Bertrand Toën, Michel Vaquié]
  title: Au-dessous de Spec Z
  journaltitle: Journal of K-Theory
  volume: 3
  number: 3
  year: 2009
  pages: 437--500
  arxiv: 'math/0509684'
```

```terms
一元域:
  en: field with one element
  fr: corps à un élément :m
幺半群形:
  en: monoid scheme
```
