---
title: 轨道空间和齐性空间
---

<problems>
- “射影空间 (II)”一节中，\(\mathbb{C}\mathrm{P}^{n}\) 似乎应同胚于 \(\mathbb{S}^{2n+1}/\mathbb{S}^{1}\)，而不是 \(\mathbb{S}^{2n-1}/\mathbb{S}^{1}\)；相应地，其后论证中的映射 \(u\) 似乎应为 \(\mathbb{C}^{n+1}\setminus\{0\} \to \mathbb{S}^{2n+1}\)。
- “Grassmann 流形”一节的例子与习题“Grassmann 流形”中，\(G_{\mathbb{R}}(1,n)\)、\(G_{\mathbb{R}}(n-1,n)\) 似乎同胚于 \(\mathbb{R}\mathrm{P}^{n-1}\) 而不是 \(\mathbb{R}\mathrm{P}^{n}\)（复的情形同理）。
</problems>

在这一节中，我们将群引入拓扑学。
基于商拓扑，我们介绍两种使用群来构造拓扑空间的方法：
(i) 群作用的轨道空间，(ii) 拓扑群的齐性空间。
我们将看到我们能够将之前学过的射影空间通过这两种方法重新构造出来。

## 群与群作用

本段我们回忆一些基本的代数概念。

一个**群（group）** 是一个具备了二元运算 \(\cdot: G \times G \to G\)
的集合 \(G\)，满足如下性质：

- 存在 \(e \in G\)，使得 \(e\cdot g = g \cdot e = g\)
  对任何 \(g \in G\) 都成立。

- \((f\cdot g)\cdot h = f\cdot (g\cdot h)\) 对一切 \(f,g,h \in G\)
  成立。

- 对任何 \(g \in G\)，存在唯一 \(g^{-1} \in G\)，使得
  \(g\cdot g^{-1}=e=g^{-1}\cdot g\)。

元素 \(e\) 叫做群 \(G\) 的**幺元（identity element）**，而 \(g^{-1}\) 叫做
\(g\) 的**逆元（inverse）**。群运算有时用毗联表示。

群 \(G\) 叫做一个 **Abel 群**，如果 \(gh=hg\) 对一切 \(g,h \in G\)
都成立。有时 Abel 群的运算用“加法”表示更方便。此时幺元用 \(0\) 表示，\(g\)
的逆元用 \(-g\) 表示。

群之间的映射 \(\varphi: G \to G'\) 叫做一个**同态（homomorphism）**，
如果它尊重群运算：对任何 \(g, h \in G\)，有
\(\varphi(gh)=\varphi(g)\varphi(h)\)。一个同态叫做**同构（isomorphism）**，
如果它还是一个双射。

一个群 \(G\) 的子集 \(H\) 叫做 \(G\) 的**子群（subgroup）**，
如果 \(e\in H\)，且对任何 \(g, h \in H\)，\(gh \in H\)。\(G\) 的群运算因此保持
\(H\)，并且在这个二元运算下 \(H\) 自己也构成群。

::: example
1. 最基本的群的例子是一个集合 \(X\) 到自身的一一对应。此时群运算由映射的复合给出，
   幺元为恒等映射，逆元为逆映射。这个群记作 \(\mathrm{Perm}(X)\)，叫做 \(X\) 的
   **置换群（permutation group）**。
   有限集合 \(\{1,2,\ldots,n\}\) 的置换群一般在文献里用 \(\mathfrak{S}_n\)
   标记。

2. 一个群 \(G\) 叫做**循环群（cyclic group）**，如果存在群中元素 \(g\)，
   使得任何其它 \(G\) 中元素都形如 \(g^n\)，其中 \(n \in \mathbb{Z}\)（按约定，
   \(g^{0}=e\)，\((g^{-1})^{m} = g^{-m}\)）。无限循环群都同构于整数的加法群
   \((\mathbb{Z},+)\)，有限循环群都同构于某个模 \(n\) 的同余类，以模 \(n\) 的加法运算为群运算。

3. 三个文字的置换群 \(\mathfrak{S}_{3}\) 有六个元素，可以描述为
   \[
   \{e,x,x^2,y, xy,x^2y\}, \text{\quad 其中\quad }
   x = (123), y= (12).
   \]
   这些元素满足关系 \(x^3=e, y^2=e, yx=x^{2}y\)。
   这是最小的非交换群。

:::

群 \(G\) 在集合 \(X\) 上的一个**左作用（left action）**
是一个映射
\[
G \times X \to X, \quad
(g,x) \mapsto g\star x
\]
满足条件 \((gh)\star x=g\star (h\star x)\)。
等价地说，如果令 \(\mathrm{Perm}(X)\) 为 \(X\) 到自身的一切一一映射，那么 \(G\)
在 \(X\) 上的左作用等价于一个群同态
\[
\varphi: G \to \mathrm{Perm}(X)
\]
其中 \(\varphi(g)(x) = g\star x\)。
我们经常偷懒，将 \(g\star x\) 直接写作毗联 \(gx\)。
对 \(x \in X\)，它在群 \(G\) 作用下的**轨道（orbit）** 是 \(Gx = \{gx : g \in G\}\)。

与左作用类似地，我们也可以定义群在集合上的**右作用（right action）**。
这是一个映射
\[
X \times G \to X, (x,g) \mapsto x\star g,
\]
满足 \((x \star g_1) \star g_2 = x \star (g_1 \cdot g_2)\)。
任何右作用都可以转换成左作用，只需定义
\[
g \star_{\text{left}} x = x \star g^{-1}
\]
即可。根据具体情况不同，有时使用右作用更方便。对于 Abel 群，左右作用没有区别。

群 \(G\) 在集合 \(X\) 上的作用叫做**可迁（transitive）** 的，
如果对任何 \(x \in X\)，\(g\mapsto g\star x\) 是满射，即 \(G\) 在 \(X\)
上的作用只有一个轨道。

## 轨道空间 {@sec:orbit-space}

地球沿着南北极之间的旋转轴进行自转。如果把我们设想成地球上的一个点，那么坐地日行八万里，
一天结束之后，我们在地球表面所旅行的轨迹就画出了一个圆，叫做纬线。

![图 1：纬线（基于 Tomasz M. Trzeciak 的[Ti*k*Z 代码](https://texample.net/tikz/examples/map-projections/)）](Weixian.png){width=150}

用数学的语言来说，纬线是旋转群 \(\mathrm{SO}(2)\) 在
集合 \(\mathbb{S}^2\) 上旋转作用的轨道。我们描述纬线的时候只需要一个数字（通常使用的是纬度）。
如果我们将连接南北极的线段等同于闭区间 \([-1,1]\)，
则这个描述纬线的数字也可以选择为这条轨道所决定的平面唯一的与 \([-1,1]\) 的交点。
直观告诉我们，当我们稍微在地球上移动一下的时候，
我们所经历的轨道与 \([-1,1]\) 的交点也只会微微地变动。
因此 \([-1,1]\) 可以被看作是“参数化”了地球自转下所有点的轨道，并且
\([-1,1]\) 中点的邻近程度能够描绘不同轨道之间的邻近程度。也就是说
\([-1,1]\) 赋予了*所有轨道的集合*一个拓扑。

我们来解释如何用我们既有的知识赋予轨道空间一个“典则”的拓扑。

令 \(X\) 为拓扑空间。
令 \(a: G \times X \to X\) 为一个群 \(G\) 在 \(X\) 上的左作用。
则此作用的轨道的全体构成一个集合，记作 \(G\backslash X\)。
我们希望在此空间上引入一个拓扑。为此，我们引入一个 \(X\) 上的关系 \(\sim\) 如下：
\(x \sim y\) 当且仅当存在 \(g \in G\)，使得 \(gx = y\)。
容易验证，这是一个等价关系。它的一个等价类恰好是 \(G\) 作用的一个轨道。
因此我们可以将集合 \(G\backslash X\) 等同于商集 \(X/{\sim}\)。
并赋予它商拓扑。自此以后，除非特别申明，
每当我们考虑群在拓扑空间上作用的轨道空间时，我们总使用这个商拓扑。

拓扑空间 \(G \backslash X\) 叫做群 \(G\) 在拓扑空间 \(X\)
上作用的**轨道空间（orbit space）**。

::: example [相似矩阵的等价类]
我们在线性代数课程中遇到过一些轨道空间。
比如一般线性群 \(\mathrm{GL}_{n}(\mathbb{C})\) 在 \(n\)
阶方阵的空间 \(\mathrm{M}_{n}(\mathbb{C})\) 上有共轭作用：
\[
(g,A) \mapsto gAg^{-1}.
\]
这个作用的一条轨道就是方阵相似的等价类。
根据 Jordan 标准形的理论，我们知道轨道空间作为集合一一对应于 Jordan 标准形。
如果我们赋予 \(\mathrm{M}_{n}(\mathbb{C})\) 集合 \(\mathbb{C}^{n^2}\) 的标准拓扑，
那么轨道空间的拓扑是怎样的呢？

为了说话方便，我们考虑 \(n=2\) 的特殊情形。
此时等价类共有两大类：可对角的矩阵类 \([\mathrm{diag}(\lambda,\mu)]\)，
\(\lambda,\mu\in \mathbb{C}\)；
以及不可对角的矩阵类 \([\lambda \mathrm{I} + N]\)。这里
\[
N=
\begin{bmatrix}
  0 & 1 \\ 0 &0
\end{bmatrix}.
\]
数值矩阵 \(\mathrm{diag}(\lambda,\lambda)\) 决定的等价类是落在
\(\lambda\mathrm{I}+N\) 的等价类的闭包里的：
\[
\mathrm{diag}(\lambda,\lambda) = \lim_{\epsilon\to0} (\lambda \mathrm{I} + \epsilon N).
\]
因此在商空间中，具有非平凡 Jordan 块的点的闭包是包含了具有同样特征值的数值矩阵的。
特别地，轨道空间 \(\mathrm{GL}_{2}(\mathbb{C})\backslash\mathrm{M}_{2}(\mathbb{C})\)
不是 Hausdorff 空间。

为了得到 Hausdorff 的商空间，我们不得不从 \(\mathrm{M}_{2}(\mathbb{C})\) 中除去一些点。
比如，除去数值矩阵的等价类之后，我们得到了一个开集
\(U=\mathrm{M}_{2}(\mathbb{C})\setminus\{\lambda\mathrm{Id}:\lambda\in\mathbb{C}\}\)，
它是一个饱和开集。此时，通过计算映射的微分，我们得知 \(A \mapsto (\mathrm{Tr}(A),\det(A))\)
是在轨道上取常数值的开映射，因此为商映射。
从而我们得到 \(\mathrm{GL}_{2}(\mathbb{C})\backslash U\) 同胚于 \(\mathbb{C}^{2}\)。
:::

当然，上面的一切构造都对右作用成立。拓扑空间关于群 \(G\) 右作用的轨道空间被记为
\(X/G\)[^1]。
对 Abel 群作用，无所谓区分左右，有时为了打字方便我就使用记号 \(\frac{X}{G}\)。

## 射影空间 (II) {@sec:projective-space-ii}

在这一小节我们来解释如何使用轨道空间的概念来赋予射影空间拓扑结构。
我们考虑乘法群 \(\mathbb{R}^{\times} = (\mathbb{R} \setminus \{0\},\times)\)
在空间 \(\mathbb{R}^{n+1}\setminus\{0\}\) 上的数乘作用。
任何 \(\mathbb{R}^{n+1} \setminus\{0\}\)
的点在这个作用下的轨道恰好是它生成的一维子空间去掉原点。
因此轨道空间
\[
\frac{\mathbb{R}^{n+1}\setminus\{0\}}{\mathbb{R}^{\times}}
\]
中的点与 \(\mathbb{R}\mathrm{P}^{n}\) 中的点一一对应。
因此，我们可以通过
\(\frac{\mathbb{R}^{n+1}\setminus\{0\}}{\mathbb{R}^{\times}}\)
的商拓扑来赋予射影空间 \(\mathbb{R}\mathrm{P}^{n}\)
一个拓扑。

::: proposition {@proposition:projective-quotient-vs-pasting-topology}
上面定义的实射影空间的拓扑与第 @sec:projective-space-1 节
所定义的拓扑一致。
:::

::: proof
在这段证明里，我们使用 \(\mathbb{R}\mathrm{P}^{n}\) 来指代
第 @sec:projective-space-1 节所定义的拓扑，并自由地使用那里设置的记号。
定义映射
\[
\pi: \mathbb{R}^{n+1} \setminus\{0\} \to \mathbb{R}\mathrm{P}^{n},
\quad
(x_0,x_1,\ldots,x_n) \mapsto [x_0,\ldots,x_n].
\]
我们首先断言 \(\pi\) 是连续映射。此时，
由于 \(U_0,\ldots,U_n\) 是 \(\mathbb{R}\mathrm{P}^{n}\) 的一个开覆盖，为了证明
\(\pi\) 连续，只需证明
\[
\pi^{-1} (U_i) \xrightarrow{\pi} U_i \xrightarrow{\varphi_i} \mathbb{R}^{n}
\]
为连续映射。这个复合映射用坐标写下来是
\[
(x_0,x_1,\ldots,x_n) \mapsto
\left(\frac{x_0}{x_i},\ldots,\frac{x_{i-1}}{x_i},\frac{x_{i+1}}{x_i},\ldots,\frac{x_{n}}{x_i}\right).
\]
它显然是连续的。

映射 \(\pi\) 的纤维不是别的，正是群 \(\mathbb{R}^{\times}\) 在空间
\(\mathbb{R}^{n+1}\setminus\{0\}\) 上作用的轨道。因此，我们只需要验证 \(\pi\)
是商映射即可。为此，我们只需证明映射 \(\pi\) 在 \(\mathbb{R}\mathrm{P}^{n}\)
的局部有截面（@proposition:quotient-local-on-target、
@proposition:section-quotient-map）。而
\[
\pi|_{\pi^{-1}U_{i}} : \pi^{-1}(U_{i}) \to U_{i}
\]
有一个连续截面
\[
\sigma_{i} (z_1,\ldots,z_n) = (z_1, \ldots,z_{i-1},1,z_{i},\ldots,z_n).
\]
这就完成了命题的证明。
:::

同样的论证可以说明：

- 实射影空间 \(\mathbb{R}\mathrm{P}^{n}\)
  的标准拓扑可以被等同于轨道空间
  \(
    \frac{\mathbb{S}^{n}}{\mathbb{Z}/(2)}
  \)
  的商拓扑（\(\mathbb{Z}/(2)\) 通过对径映射作用于 \(\mathbb{S}^{n}\)）；

- 复射影空间 \(\mathbb{C}\mathrm{P}^{n}\)
  的标准拓扑可以被等同于轨道空间
  \(
    \frac{\mathbb{C}^{n+1} \setminus \{0\}}{\mathbb{C}^{\times}}
  \)
  的商拓扑；

- 复射影空间 \(\mathbb{C}\mathrm{P}^{n}\)
  的标准拓扑可以被等同于轨道空间
  \(\frac{\mathbb{S}^{2n-1}}{\mathbb{S}^{1}}\)
  的商拓扑（将 \(\mathbb{S}^{1}\) 等同于模长为 1 的复数，它作用于
  \(\mathbb{S}^{2n-1}\) 之上）。商映射
  \(\pi: \mathbb{S}^{3} \to \mathbb{C}\mathrm{P}^{1}\cong \mathbb{S}^{2}\) 叫做
  [**Hopf 纤维化（Hopf fibration）**](http://www.dimensions-math.org/Dim_CH7_E.htm)。

上述结果也可以使用下面关于“等价关系的限制”的引理所导出。
先设计一下记号。
令 \(X\) 为拓扑空间，\(R\) 为 \(X\) 上等价关系。
令 \(f: X \to X/R\) 为商映射。
对子空间 \(A {\subset}X\) 里的点 \(a, a'\)，
定义 \(a R_A a' \Leftrightarrow a R a'\)。
我们称 \(R_A\) 是 \(R\) 在 \(A\) 上诱导的等价关系。
根据商拓扑的泛性质，我们有典则的连续映射 \(h:A/R_{A}\to f(A)\)。

::: proposition {@proposition:quotient-of-subspace}
记号如上，下面陈述等价。

1. \(h\) 是同胚。

2. 每个 \(A\) 的关于 \(R_A\) 饱和的开子集是 \(A\) 与 \(X\) 关于 \(R\) 饱和
   的开集的交。

3. 每个 \(A\) 的关于 \(R_A\) 饱和的闭子集是 \(A\) 与 \(X\) 关于 \(R\) 饱和
   的闭集的交。

:::

命题的证明留给读者（@exercise:quotient-of-subspace）。
我们给出几个快速的应用。

::: proposition
如果 \(f:X \to Y\) 是商映射，\(A\) 是关于 \(R\) 的饱和开或闭集，
则 \(f|_{A}: A \to f(A)\) 是商映射。
:::

::: proposition {@proposition:retract-subrelation-quotient}
如果存在连续映射 \(u: X \to A\)，使得 \(u(x) R x\) 对一切 \(x \in X\)
成立，那么 \(f(A) = X/R\)，且 \(h:A/R_{A}\to X/R\) 为同胚。
:::

::: proof
因为每个 \(R\) 等价类都与 \(A\) 相交，映射 \(A/R_{A} \to X/R\) 是满射。
如果 \(A\) 含有一个关于 \(R_A\) 饱和的开集 \(U\)，\(u^{-1}(U)\)
是 \(X\) 关于 \(R\) 的饱和开集，且 \(u^{-1}(U) \cap A = U\)。
事实上，如果 \(u(x) \in U\)，且\(x \in A\)，
则 \(x R_A u(x)\)。由于 \(U\) 关于 \(R_A\) 饱和，我们有 \(x \in U\)。
@proposition:quotient-of-subspace 推出 \(h\) 为同胚。
:::

回到射影空间的情况，我们以复射影空间为例解释为何
\(\mathbb{S}^{2n-1}/\mathbb{S}^{1}\cong \mathbb{C}\mathrm{P}^{n}\)。
如果 \(x R x' \Leftrightarrow x = \lambda x'\)
对某 \(\lambda \in \mathbb{C}^{\ast}\) 成立，则对 \(z,z' \in \mathbb{S}^{2n-1}\)，
有 \(z R_{\mathbb{S}^{2n-1}} z' \Rightarrow z = \lambda z'\)
对某 \(\lambda \in \mathbb{S}^1\) 成立。由于
\(u: \mathbb{C}^{n}\setminus\{0\} \to \mathbb{S}^{2n-1}\)，
\(u(z) = z/|z|\) 满足 @proposition:retract-subrelation-quotient，
我们就得到了所需的同胚。

## 拓扑群与齐性空间

我们现在把群这个概念升级到拓扑学领域。
一个**拓扑群（topological group）**
是指一个拓扑空间 \(G\)，它同时是一个群，并且群运算
\[
G \times G \to G, \quad (g,h) \mapsto gh
\]
以及 \(g\mapsto g^{-1}:G \to G\) 都是连续映射。

许多资料里在拓扑群的定义中假设了它的单点集是闭集
（这等价于假设拓扑群为 Hausdorff，见 @exercise:top-group @item:top-grp-t1-imply-t2）。
我们不做这个假设。

\({}^{\star}\)
如果 \(G\) 是一个微分流形，并且群运算和取逆都是可微映射，那么 \(G\) 就叫做一个
Lie 群[^2]。类似的，在复解析流形的范畴中考虑类似概念，我们就得到了复 Lie 群的概念。\(\;{}_{\star}\)

拓扑群，特别是 Lie 群，在日常生活中不断出现。我们在启蒙课里已经遇到过许多拓扑群了：
一般线性群 \(\mathrm{GL}_{n}(\mathbb{R})\)，\(\mathrm{GL}_{n}(\mathbb{C})\)，
特殊线性群 \(\mathrm{SL}_{n}(\mathbb{R})\)，\(\mathrm{SL}_{n}(\mathbb{C})\)，
实正交群 \(\mathrm{O}(n)\)，和特殊实正交群 \(\mathrm{SO}(n)\)，辛群
\(\mathrm{Sp}_{2n}(\mathbb{C})\)，Lorentz 群 \(\mathrm{SO}(p,q)\)，等等。

由于我们目前的主要目的是学习如何构造有趣空间，
我们将拓扑群的一些拓扑性质留作习题。
脑海中保有上面那些线性群作为例子应该能够产生足够的直观感觉。
拓扑群最主要的性质是群运算可以将一个地方发生的事情挪到其他地方：

::: proposition {@proposition:topological-group-is-homogeneous}
令 \(G\) 为拓扑群。
令 \(g \in G\) 为任意元素。则映射
\[
\begin{aligned}
  L_g&: G \to G, \quad h \mapsto gh, \\
  R_g&: G \to G,\quad h \mapsto hg
\end{aligned}
\]
都是同胚。
:::

::: proof
通过映射 \(G \to \{g\} \times G\)
将 \(G\) 看作 \(G \times G\) 的子空间。
由于群运算 \(m: G \times G \to G\) 连续，
\(L_{g} = m|_{\{g\}\times G}\) 也连续。
类似可以证明 \(R_g\) 的连续性。
\(L_{g}\) 是一一映射，它的逆映射是 \(L_{g^{-1}}\) 根据上面论证也是连续的。
因此 \(L_g\) 是同胚。
同理 \(R_g\) 是同胚。
:::

我们来回顾陪集的概念。
如果 \(H\) 是群 \(G\) 的子群，那么我们可以利用 \(H\) 在 \(G\)
上定义一个等价关系 \(\sim_H\) 如下：
\[
g \sim_H g' \Longleftrightarrow g^{-1} g' \in H.
\]
运用群的公理容易验证这是一个等价关系。这个等价关系包含 \(g \in G\) 的等价类叫做
\(H\) 的一个**左陪集（left coset）**，记做 \(gH\)。
（群运算诱导了子群 \(H\) 在 \(G\) 上有一个右作用 \(G\times H \to G\)，而左陪集
\(gH\) 正是这个右作用的轨道。当然我们可以也定义 \(H\) 在 \(G\) 上的左作用，
那么这时的等价类就是右陪集了。）

如果 \(G\) 是一个拓扑群，那么对任何 \(G\) 的子群 \(H\)，我们可以赋予等价关系
\(\sim_H\) 的等价类的集合，也就是所有 \(H\) 的左陪集的集合，一个商拓扑。
这个商空间用记号 \(G/H\)[^3]
来表示。形如 \(G/H\) 空间叫做 \(G\)
的**齐性空间（homogeneous space）**，
因为 \(G\) 在 \(G/H\) 上有一个连续的作用 \((g,g'H) \mapsto (gg')H\)，
并且这个作用只有一个轨道。

齐性空间 \(G/H\) 的拓扑型只与 \(H\) 的共轭类有关。

::: proposition {@proposition:conjugate-homogeneous-homeo}
如果 \(G\) 是拓扑群，\(g \in G\)，\(H\) 是 \(G\) 的子群。
那么“共轭映射”
\[
u \mapsto gug^{-1}: G \to G,
\]
是一个同胚。这个同胚诱导了齐性空间 \(G/H\) 与 \(G/gHg^{-1}\) 的同胚。
:::

::: example [球面是特殊正交群的齐性空间] {@example:sphere-homogeneous}
设 \(n\geq 2\)。
令 \(G = \mathrm{SO}(n)\) 为一切行列式为 1 的 \(n\) 阶正交方阵构成的群
（特殊正交群）。令 \(H\) 是由一切形如
\[
\begin{bmatrix}
  1 & \\
  & B
\end{bmatrix},
\quad B \in \mathrm{SO}(n-1)
\]
的方阵构成的 \(G\) 的子群。由此我们可以得到一个齐性空间 \(G/H\)。
我们断言 \(G/H\) 同胚于球面 \(\mathbb{S}^{n-1}\)。

令 \(e_1\) 为列向量 \((1,0,\ldots,0)^{\mathsf{T}}\)。
定义连续映射 \(\pi: G \to \mathbb{S}^{n-1}\)，\(\pi(g)=ge_1\)。
由线性代数（任何单位向量都可以作为某个标准正交基的第一个），
我们知道 \(\pi\) 是满射。
容易验证 \(\pi(g_1) = \pi(g_2)\) 当且仅当 \(g_1 \sim_H g_2\)。
因此我们获得了连续双射 \(G/H \to \mathbb{S}^{n-1}\)。
为了说明这个是同胚，我们需要证明 \(\pi\) 是商映射。

今后将学习的“紧性”将会推出 \(\pi\) 实际上是闭映射，因此为商映射。
目前，我们可以使用另一套论证方法：对任何 \(v \in \mathbb{S}^{n-1}\)，
随便选一组子空间 \(v^{\perp}\) 的基 \(v_2,\ldots,v_n\)，使得
\(\det(v,v_2,\ldots,v_n)=1\)。则对 \(v\) 的邻域
\[
\mathscr{U}_v = \{u \in \mathbb{S}^{n-1}: (u,v) > 0\}
\]
中的任意向量 \(u\)，\(u\) 与 \(v_2,\ldots,v_n\) 都线性无关。令 \(g(u)\) 为
\(u,v_2,\ldots,v_n\) 施行 Gram–Schmidt 正交化所得的矩阵，那么
\(g(u) \in \mathrm{SO}(n)\)，且 \(g(u)e_1 = u\)。这就证明了
\(\pi: G \to \mathbb{S}^{n-1}\) 局部有截面，因此是商映射
（@proposition:quotient-local-on-target、@proposition:section-quotient-map）。
:::

::: example {@example:pathology-of-homogeneous-space}
如果我们对构造齐性空间过程中的子群不加限制，
我们很容易构造出来“病态”的空间。
全体实数 \(\mathbb{R}\) 在加法下构成了一个拓扑群，
而全体有理数构成了 \(\mathbb{R}\) 的子群。
则齐性空间 \(\mathbb{R}/\mathbb{Q}\) 具有平凡拓扑
（@example:obvious-space @item:trivial-discrete-top）。
:::

## Grassmann 流形

在开始之前，我们稍微多介绍一点与群作用有关的语言。
如果 \(G\) 在 \(X\) 上有一个左作用，那么对 \(x \in X\)，
它的稳定化子是 \(\mathrm{Stab}_{x}=\{g\in G : g\star x = x\}\)。
如果用 \(Gx\) 来代表 \(x\) 在群作用下的轨道，那么我们有一个自然的映射
\[
\pi_x: G \to Gx, \quad g\mapsto g\star x.
\]
这个映射的纤维不是别的，正是等价关系 \(\sim_H\) 的等价类；其中 \(H = \mathrm{Stab}_x\)。
事实上，
\[
\begin{aligned}
  g_1 \sim_H g_2
  & \Longleftrightarrow g_{1}^{-1}g_2 \in H \\
  &\Longleftrightarrow (g_{1}^{-1}g_{2})\star x = x \\
  &\Longleftrightarrow g_{2}\star x = g_{1} \star x \\
  &\Longleftrightarrow \pi(g_1) = \pi(g_2).
\end{aligned}
\]
因此，我们获得了集合之间的双射 \(G/H \longleftrightarrow Gx\)。
这个双射是我们建立陪集空间拓扑的基础。如果 \(G\) 是一个拓扑群，在集合 \(X\) 上有可
迁的作用，那么通过上述满映射 \(G \to X\) 我们可以赋予 \(X\) 商拓扑。

如果我们选择 \(Gx\) 中另一个点 \(x'\)，\(x'=gx\)，那么容易验证
\(\mathrm{Stab}_{x'} = g \mathrm{Stab}_{x} g^{-1} = \{gug^{-1} \in G : u \in \mathrm{Stab}_{x}\}\)。
因此选择不同的轨道中的点定义映射 \(\pi_x\) 虽然生产出来了不同的映射，
但是偏差是可以控制的。

::: example [Grassmann 流形] {@example:grassmannian}
Grassmann 流形是在拓扑学上颇为重要的一类空间。
作为集合，实**Grassmann 流形** \(G_{\mathbb{R}}(k,n)\)
（复 Grassmann 流形 \(G_{\mathbb{C}}(k,n)\)）
是实线性空间 \(\mathbb{R}^{n}\)（复线性空间 \(\mathbb{C}^n\)）
的一切 \(k\) 维线性子空间的全体。

为了赋予 \(G_{\mathbb{R}}(k,n)\) 一个拓扑结构，我们使用上一段的评注。实正交群
\(\mathrm{O}(n)\) 在 \(G_{\mathbb{R}}(k,n)\) 上有一个自然的可迁左作用，一个正交矩
阵将一个 \(k\) 维子空间在 \(\mathbb{R}^{n}\) 中移动成另一个 \(k\) 维子空间。

令 \(W = \mathrm{Span}(e_1,\ldots,e_k)\)
是 \(\mathbb{R}^{n}\) 前 \(k\) 个坐标向量张成的线性子空间。
那么 \(\mathrm{O}(n)\) 的子群
\[
H = \mathrm{O}(k) \times \mathrm{O}(n-k)
= \left\{
  \begin{bmatrix}
  A \\ & B
  \end{bmatrix} : A \in \mathrm{O}(k), B \in \mathrm{O}(n-k)
\right\}.
\]
是它的稳定化子。
事实上，如果 \(g(W) = W\)，
那么 \(g|_{W}\) 是一个将 \(W\) 送到自己的正交变换；因为 \(g\) 必须将 \(W\) 的正交补
\(\mathrm{Span}(e_{k+1},\ldots,e_n)\) 送到它自己，\(g\) 必须是准对角的。因此 \(g \in H\)。
另一个方向的包含是显然的。

根据前一段的讨论，映射
\[
\pi : \mathrm{O}(n) \to G(k,n), \quad
g \mapsto g(W)
\]
是满射。使用映射 \(\pi\)，我们便赋予了实 Grassmann 流形一个拓扑空间结构：
\[
G_{\mathbb{R}}(k,n) \cong \mathrm{O}(n)/(\mathrm{O}(k)\times \mathrm{O}(n-k)).
\]
类似地，读者可以构造出复 Grassmann 流形的拓扑，使用陪集空间
\(\mathrm{U}(n)/(\mathrm{U}(k)\times \mathrm{U}(n-k))\)。

我们留给读者验证如下结论：

- \(G_{\mathbb{R}}(k,n)\) 和 \(G_{\mathbb{C}}(k,n)\) 都是流形
  （@exercise:grassmannian @item:grassmannian-is-manifold）。

- \(G_{\mathbb{R}}(1,n)\) 和 \(G_{\mathbb{R}}(n-1,n)\) 同胚于
  \(\mathbb{R}\mathrm{P}^{n}\)，
  \(G_{\mathbb{C}}(1,n)\) 和 \(G_{\mathbb{C}}(n-1,n)\) 同胚于
  \(\mathbb{C}\mathrm{P}^{n}\)
  （@exercise:grassmannian @item:grassmannian-vs-projective）。

- 第一个不是射影空间的 Grassmann 流形是 \(G_{\mathbb{R}}(2,4)\)，
  \(G_{\mathbb{C}}(2,4)\)。
  \(G_{\mathbb{C}}(2,4)\) 可以被实现为
  \(\mathbb{C}\mathrm{P}^{5}\) 由齐次方程零点
  \[
  z_0 z_5 - z_1 z_4 + z_2 z_3 = 0
  \]
  所定义的子空间
  （@exercise:grassmannian @item:plucker-equation）。

:::

**本节所学概念与例子**

- 群、子群、同态、同构 group, subgroup, homomorphism, isomorphism

- 群作用 group action

- 轨道 orbit

- 可迁作用 transitive action

- 轨道空间 orbit space

- 射影空间（轨道空间构造）

- Hopf 纤维化 Hopf fibration

- 拓扑群 topological group

- 齐性空间 homogeneous space

- 球面（齐性空间构造）

- Grassmann 流形（齐性空间构造）Grassmannian

## 习题

::: exercise {@exercise:quotient-of-subspace}
证明 @proposition:quotient-of-subspace。
:::

::: exercise
证明第 @sec:orbit-space 节开头时所断言的同胚
\(\mathbb{S}^{2}/\mathbb{S}^{1} \cong [0,1]\)。
:::

::: exercise {@exercise:top-group}
令 \(G\) 是一个拓扑群。

1. {@item:top-grp-t1-imply-t2} 如果单点集 \(\{e\}\) 是闭集，证明 \(G\) 是 Hausdorff 空间。

   [Munkres 的“拓扑学”一书 §22 之后的补充习题第 7 题有详尽的提示。]

2. 如果 \(H\) 是 \(G\) 的子群，赋予子空间拓扑。证明 \(\overline{H}\)
   （\(H\)在 \(G\) 中的闭包）也是 \(G\) 的子群。

3. 齐性空间 \(G/H\) 的单点集合是闭集的必要且充分条件是 \(H\) 是闭子群。

4. 如果 \(G' \subset G\) 是 \(G\) 的开子群，证明 \(G'\) 是 \(G\) 的闭子群。

:::

::: exercise [\(A_1\) 奇异点与 \(\mathbb{R}\mathrm{P}^{3}\) 的 Heegaard 表示] {@exercise:a1-sing-and-rp3}
1. 考虑循环群 \(\mathbb{Z}/(2) = \{\pm 1\}\) 在 \(\mathbb{C}^{2}\) 上的作用
   \[
   \alpha \cdot (u,v) \mapsto (\alpha u,\alpha v).
   \]
   令 \(x = u^2, y=v^2, z=uv\)。
   则 \(x,y,z\) 在 \(\mathbb{Z}/(2)\) 的轨道上是常值。因此诱导了一个连续映射
   \(\varphi:\frac{\mathbb{C}^{2}}{\mathbb{Z}/(2)} \to \mathbb{C}^{3}\)。
   令 \(X\) 为 \(\mathbb{C}^{3}\) 满足方程
   \(xy - z^2 = 0\)
   的点构成的子空间。验证 \(\varphi\) 诱导了同胚
   \(\frac{\mathbb{C}^{2}}{\mathbb{Z}/(2)}\cong X\)。

2. 令 \(\mathbb{S}^{5}\) 为由方程 \(|x|^2 + |y|^2 + |z|^2=1\)
   定义的\(\mathbb{C}^3\) 中的 5 维球面。
   证明 \(X \cap \mathbb{S}^{5}\) 同胚于 \(\mathbb{R}\mathrm{P}^{3}\)。
   （如果觉得难，证明 \(X \cap \{(x,y,z)\colon |x|^2 + |y|^2 + 2|z|^2=1\}\) 同胚于
   \(\mathbb{R}\mathrm{P}^{3}\) 也行。）

实射影空间 \(\mathbb{R}\mathrm{P}^{3}\) 的这个表示法见于 Poul Heegaard 对
Henri Poincaré 的长文“Analysis Situs”的批判。
Heegaard 用这个例子来阐述 Poincaré 的“连通数”与 Betti 和 Riemann 的连通数定义不一。
Poincaré 在他对 Analysis Situs 的第二篇补充中
[对此进行了澄清](http://analysis-situs.math.cnrs.fr/p4-Application-a-quelques-exemples.html)，
并引出了同调的挠系数的概念。
:::

::: exercise [射影空间的胞腔结构]
1. 证明 \(\mathbb{R}\mathrm{P}^{2}\) 同胚于 \(D^{2}/{\sim}\)，
   其中 \(\sim\) 是由 \(a \sim -a\)，\(\forall a \in \mathbb{S}^{1}\)
   生成的等价关系。

2. 证明 \(\mathbb{R}\mathrm{P}^n\) 是通过向 \(\mathbb{R}\mathrm{P}^{n-1}\)
   安装胞腔得到的：
   \(\mathbb{R}\mathrm{P}^{n} = \mathbb{R}\mathrm{P}^{n-1} \amalg_{\mathbb{S}^{n-1}} D^{n}\)，
   其中 \(\varphi: \mathbb{S}^{n-1} \to \mathbb{R}\mathrm{P}^{n-1}\) 是商映射
   \(\mathbb{S}^{n-1}\to\frac{\mathbb{S}^{n-1}}{\mathbb{Z}/(2)}\cong\mathbb{R}\mathrm{P}^{n-1}\)
   （第 @sec:projective-space-ii 节）。

:::

::: exercise [\(D_4\) 奇异点]
考虑 \(\mathbb{C}^{2}\) 上的变换：
\[
\begin{aligned}
  \alpha: (u,v) & \mapsto  (\mathrm{i}u, -\mathrm{i}v), \\
  \beta: (u,v) & \mapsto  (v,-u).
\end{aligned}
\]

1. 验证 \(\alpha,\beta\) 生成了八阶有限群。
   这个群叫做八阶**双二面体群（binary dihedral group）**，
   记作 \(\mathrm{BD}_{8}\)。
   证明 \(\mathrm{BD}_{8}\) 同构于四元数
   \(\{\pm\mathbf{1}, \pm \mathbf{i},\pm \mathbf{j}, \pm\mathbf{k}\}\)
   构成的群。

2. 验证多项式 \(x=(u^4-v^4)uv\)，\(y=u^4+v^4\)，\(z=u^{2}v^{2}\)
   在 \(\mathrm{BD}_{8}\) 的轨道上是常值。

3. 证明轨道空间 \(\mathrm{BD}_{8}\backslash\mathbb{C}^{2}\)
   同胚于映射 \((u,v)\mapsto (x,y,z)\) 的像
   \(\{(x,y,z) \in \mathbb{C}^3: x^2 - y^2 z + 4z^3 = 0\}\)。\(\boxed{\dagger}\)

:::

::: exercise
令 $\mathfrak{S}_n$ 为 $n$ 个文字的对称群。
对拓扑空间 $Y$，存在“显然”的 $\mathfrak{S}_n$ 在积空间 $Y^n$ 上的作用
（轮换坐标分量）：
\[
\sigma \star (y_1,\ldots,y_n) = (y_{\sigma(1)},\ldots,y_{\sigma(n)}).
\]
令 $\mathrm{Sym}^n(Y)$ 为这个作用的轨道空间。
证明 $\mathrm{Sym}^n(\mathbb{C})$ 同胚于
$\mathbb{C}^n$。
思考：为什么将 \(\mathbb{C}\) 换成 \(\mathbb{R}\) 这断言就不对了
（试着对 \(n=2\) 进行解释即可，不必给出严格证明）？
\(\boxed{\dagger}\)
:::

::: exercise
\(\boxed{\dagger}\) 令 $G$ 为一般线性群 $\mathrm{GL}_2(\mathbb{C})$。则 $G$ 在
$\mathbb{C}\mathrm{P}^1$ 上诱导了“线性作用”：
\[
\left ({{a\quad b}\choose{c\quad d}},v=[x,y]\right)
\mapsto [ax+by,cx+dy].
\]
这个作用诱导了群 $G$ 在乘积空间 $(\mathbb{C}\mathrm{P}^1)^n$ 上的作用。

1. 假设 $n = 1, 2, 3$。证明集合 $G\backslash(\mathbb{C}\mathrm{P}^1)^n$ 是有限集合。
   但是赋予它们的商拓扑不是 Hausdorff 的。找出 $G\backslash(\mathbb{C}\mathrm{P}^1)^n$
   的最大子集 $U$，使得$G\cdot U \subset U$，并且 $G\backslash U$ 上的商拓扑是 Hausdorff 的。

2. 证明 \(G\backslash (\mathbb{C}\mathrm{P}^1)^{4}\) 是无限集合。
   你能找出一个 \((\mathbb{C}\mathrm{P}^1)^{4}\) 的开子集，它被 \(G\) 的作用保持，
   并且商空间 \(G\backslash U\) 是 Hausdorff 的吗？

:::

::: exercise [Grassmann 流形] {@exercise:grassmannian}
1. {@item:grassmannian-is-manifold} 令 \(V'\) 为 \(\mathbb{R}^{n}\) 的一个 \((n-k)\) 维线性子空间。
   证明 \(\mathscr{U}_{V'} = \{V \in G_{\mathbb{R}}(k,n): V \oplus V' = \mathbb{R}^{n}\}\)
   为 \(G_{\mathbb{R}}(k,n)\) 的一个同胚于 \(\mathbb{R}^{k(n-k)}\) 的开子集。
   验证 \(G_{\mathbb{R}}(k,n)\) 为第二可数的 Hausdorff 空间。
   因此\(G_{\mathbb{R}}(k,n)\) 为流形。

2. 稍微花点体力，可以验证 \(G_{\mathbb{R}}(k,n)\) 是微分流形，
   \(G_{\mathbb{C}}(k,n)\) 是复流形。\(\boxed{\dagger}\)

3. {@item:grassmannian-vs-projective} 找出同胚
   \(\mathbb{R}\mathrm{P}^{n} \cong G_{\mathbb{R}}(1,n) \cong G_{\mathbb{R}}(n-1,n)\)。

4. {@item:plucker-equation} 对 \(\mathbb{R}^{4}\) 的二维子空间 \(W\)，\(\bigwedge^{2}W\) 是
   \(\bigwedge^{2}\mathbb{R}^{4}\cong \mathbb{R}^{6}\) 的一维子空间。
   验证映射
   \[
   W \in G_{\mathbb{R}}(2,4) \to \mathbb{P}^{5}
   \]
   是连续映射，并证明，可以通过适当选择 \(\mathbb{R}^{6}\) 的坐标，使得上述映射
   的像是由齐次多项式零点
   \[
   z_0 z_5 - z_1 z_4 + z_2 z_3 = 0
   \]
   所定义的子空间。\(\boxed{\dagger}\)

5. 令 \(P_{k}\) 为 \(\mathrm{GL}_{n}(\mathbb{R})\) 包含形如
   \[
   \begin{bmatrix}
     *_{k} & * \\
     & *_{n-k}
   \end{bmatrix}, *_k \in \mathrm{GL}_k(\mathbb{R}), *_{n-k} \in \mathrm{GL}_{n-k}(\mathbb{R}),
   \]
   的方阵的子集。验证 \(P_k\) 是 \(\mathrm{GL}_{n}(\mathbb{R})\) 的闭子群，并且
   证明存在同胚
   \[
   \mathrm{GL}_{n}(\mathbb{R})/P_k \cong G_{\mathbb{R}}(k,n).
   \]
   证明关于复 Grassmann 流形的类似结论。

:::

[^1]: 这个记号有时会与坍缩子空间的记号冲突，对此我无可奈何。
[^2]: 著名的 Hilbert 第五问题断言如果一个拓扑群的拓扑空间是一个拓扑流形，那么它一定是 Lie 群。
  这个断言在1950年代业已被 Andrew M. Gleason (Groups without small subgroups. Ann. of Math. (2) 56 (1952), 193–212.)、
  Deane Montgomery 和 Leo Zippin (Small subgroups of finite-dimensional groups. Ann. of Math. (2) 56 (1952), 213–241.) 所证明。
[^3]: 这个记号有时会与坍缩子空间的记号与群作用商集的记号冲突，对此我无可奈何。
