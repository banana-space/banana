---
title: 模形式
aliases: [模函数]
categories: [模形式论]
navboxes: [模形式论]
notices:
  - name: 问题
    items:
      - “几何意义”一节需要扩充：说明如何将模形式实现为线丛的截面。
      - “Jacobi $\theta$ 函数”“Hecke 代数作用”“推广”各节需要扩充。
      - “Eisenstein 级数”一节的注记中，$q$-展开第二行的系数 $\frac{2}{\zeta(1-2k)}$ 似乎应为 $\frac{2}{\zeta(1-k)}$。
      - “基本性质”一节中，命题 $\mathcal M_k(\Gamma)\cong \mathcal S_{k+12}(\Gamma)$ 似乎只对全模群成立：对一般的 $\Gamma$，$\Delta$ 在宽度大于 $1$ 的尖点处的零点阶数大于 $1$，$g/\Delta$ 可能在尖点处有极点。
      - “零点和极点”一节中，一般模群的公式若按“约定”中的定义理解二阶、三阶椭圆点（$\mathrm{SL}_2(\mathbb Z)$ 作用轨道中的点），则对不以这些点为椭圆点的 $\Gamma$，相应项的系数似乎应为 $1$ 而不是 $\frac12$、$\frac13$。
      - “全模群的模形式环结构”的证明中，齐次关系的求和条件 $r+s=k$ 似乎应为 $4r+6s=k$。
---

**模形式**是定义在上半复平面（以及[[尖点]]）上的全纯函数，
它在[[模群]]的作用下满足某类函数方程。**模函数**则是相应的亚纯函数。
虽然模形式常以复分析的方式定义，
但它和[[数论]]、[[代数拓扑]]、最密堆积和[[弦论]]等许多数学分支都有联系。

从几何的观点来看，
（带有附加结构的）[[椭圆曲线]]的模空间是上半平面的商，
即模曲线，模形式是[[模曲线]]某些[[线丛]]的截面，
因此研究这些模形式对理解相应的模空间有很大益处。

模形式是[[自守形式]]的特例，
相当于群 $\mathrm{GL}_2$ 对应的自守形式。

## 历史

早在19世纪初，人们已经发现一些涉及整系数[[二次型]]的[[幂级数]]
以及它们满足的无穷乘积恒等式：例如[[Jacobi $\theta$ 函数]]、[[Dedekind $\eta$ 函数]]
与Euler 五边形数定理（[[Jacobi 三重积恒等式]]的特例）等结果。虽缺乏数学语言系统描述，
但 Abel、Jacobi、Eisenstein、Weierstrass 等数学家已意识到这些结果和椭圆曲线间的紧密联系。

当时尽管模形式概念尚未诞生，不过[[椭圆函数]]相关的研究蓬勃发展，
且它们满足的特定函数方程，也就是模性，已被数学家们发现。

在19世纪末到20世纪初，随着Riemann 本人对[[Riemann 面]]理论的发展，
Klein 和 Fricke 初步考察了上半平面商去某些特定子群所得的曲线，并定义了对应的模性。
而Klein 提出的Modulform 一词也正式宣告模形式理论的诞生，自守形式的概念也应运而生，
先前关于椭圆函数的结果终于被纳入这一理论框架中。

在20世纪20年代，Hecke 系统地研究了同余子群上的模形式和尖形式。
他通过将模变换进行适当的平均，定义Hecke 算子作用在模形式空间上，
并对算子的特征值和特征向量进行了详实的讨论。
于是他给出了Hecke 特征形式的 [[L 函数|$L$-函数]] 的Euler 乘积公式，
进而推广了Mordell 的关于Ramanujan-$\tau$ 函数和判别式 $\Delta$ 的结果。

由此开始，模形式和数论间的深刻联系逐渐浮出水面。
在20世纪中期，随着[[Langlands 纲领]]的提出以及[[代数数论]]、[[李理论]]、
[[代数几何]]等领域的迅速发展，
模形式的研究被推上了快车道，越来越多的数学领域和模形式的关联被发掘出来。
在此期间，模形式的推广[[Hilbert 模形式]]、[[Maaß 形式]]以及 [[Siegel 模形式]]等概念也被提出与研究。

在20世纪50年代，谷山丰与志村五郎二人提出了著名的谷山志村猜想，
用现代的语言重述，即每个 $\mathbb Q$ 系数的椭圆曲线 $E$ 都是模性的，称[[模性定理]]。
简单来说，对任意这样的 $E$，存在唯一的正整数 $N$ 与新形式 $f\in S_2(\Gamma_0(N))_\mathrm{new}$，
使得 $E$ 在[[有限域]]上的闭点数量和 $f$ 的Fourier 系数具有对应关系；
且尖形式 $f$ 的[[周期]]（这里指$L$-函数特殊值）与 $E$ 的周期也有自然的对应关系。
更一般地，模性来自于模曲线 $X_0(N)$ 到椭圆曲线 $E$ 的一个态射。

在20世纪末Wiles 发表了对半稳定的椭圆曲线的模性定理的证明初稿，
并说明了半稳定的情况足够推出 Fermat 大定理，不过该初稿存在漏洞。
后来他花费一年修复了漏洞，并在次年发表了完整的证明。
直到21世纪初，模性定理的一般情况才被
Breuil、Conrad、Diamond 和 Taylor 四人完整证明。

Fermat 大定理的证明曾被Conway 称为“世纪证明（the proof of the century）”，
Fermat 大定理也是模形式论的最著名成果。关于模形式，Eichler 有名言：
“数学中的基础运算只有五种，分别是加法、减法、乘法、除法以及模形式。”
充分表明了模形式论在当今数学的核心地位。

## 定义

我们在此文中均采取以下约定。

::: definition [约定]
令 $\mathcal{H}$ 为复[[上半平面]]
\[
\mathcal{H} = \{ z \in \mathbb{C} \mid \Im(z) > 0 \},
\]
[[特殊线性群]] $\mathrm{SL}_2(\mathbb{Z})$（称为**全模群**）通过

```math {@左作用}
\begin{aligned}
\forall \tau\in\mathcal{H},
\gamma=\begin{pmatrix}
        a & b \\
        c & d
    \end{pmatrix}\in\mathrm{SL}_2(\mathbb Z), \quad
    \gamma\tau := \frac{a\tau + b}{c\tau + d},
\end{aligned}
```

左作用于其上。

再称 $\{i\infty\}\cup\mathbb Q$ 为全体**尖点**，
$\mathcal{H}^*:=\mathcal{H}\cup\{i\infty\}\cup\mathbb Q$ 为**扩充上半平面**。
则 $\mathrm{SL}_2(\mathbb Z)$ 通过上式左作用于全体尖点上，进而作用在整个扩充上半平面上。

对 $i=\sqrt{-1}\in\mathcal{H}$，它的 $\mathrm{SL}_2(\mathbb Z)$ 作用轨道中的元素称为**二阶椭圆点**，
对 $\omega=\frac12(-1+\sqrt{-3})\in\mathcal{H}$，
它的 $\mathrm{SL}_2(\mathbb Z)$ 作用轨道中的元素称为**三阶椭圆点**。

记 $\Gamma$ 是 $\mathrm{SL}_2(\mathbb{Z})$ 的有限指数子群。
有限指数条件推出存在正整数 $N$，使得
\[
\begin{pmatrix}
  1 & N \\
  0 & 1
\end{pmatrix} \in \Gamma.
\]
满足这一条件的最小 $N$ 称为尖点 $i\infty$（在模群 $\Gamma$）的**宽度**或**分歧指数**。
:::

由此我们可以定义模形式和尖点形式。

::: definition [模形式]
对给定的群 $\Gamma$ 与自然数 $k$，
如果 $\mathcal{H}$ 上的[[全纯函数]] $f$ 满足以下两个条件，
则称 $f$ 为（$\Gamma$ 上）**权**为 $k$ 的**模形式**。

- **模性**，即 $f$ 满足如下的函数方程。

  对任意 $\gamma \in \Gamma$，$\tau \in \mathcal{H}$，
  \[
  f(\gamma \tau) = (c\tau + d)^k f(\tau).
  \]
  记
  \[
  (f[\gamma]_k)(\tau) := (c\tau + d)^{-k}f(\gamma \tau)
  \]
  则上述条件等价于 $f[\gamma]_k = f$。

- **全纯性**，即 $f$ 在[[模曲线]] $\mathcal{H}/\Gamma$ 的全体[[尖点]]全纯。

  首先满足模性的 $f$ 具有周期性 $f(\tau + N) = f(\tau)$。
  记 $q := \exp{\frac{2\pi \mathrm{i} \tau}{N}}$，
  则 $f$ 可视作关于 $q$ 的去心圆盘
  \[
  \mathbb{D}^* := \{ z \mid 0 < |z| < 1 \}
  \]
  上的全纯函数。将 $f$ 作关于 $q$ 的[[Laurent 级数]]展开，得到的
  \[
  f=\sum_{n\in\mathbb Z}a_n(f)\cdot q^n
  \]
  也称为 $f$ 的 **$q$-级数**或**Fourier 级数**，诸系数 $a_n=a_n(f)$ 也称 $f$ 的**Fourier 系数**。

  称 $f$ 在无穷点 $i\infty$ 处全纯就是说它能全纯延拓至 $q = 0$，等价地，
  即 $a_n(f)=0$ 对一切负整数 $n<0$。
  类似地，对尖点 $\tau_*:=\gamma(i\infty)$，$\gamma\in\mathrm{SL}_2(\mathbb Z)$，
  称 $f$ 在该尖点全纯就是说 $f[\gamma]_k$ 在无穷点处全纯。
  （可检查此定义不依赖于 $\gamma$ 的选取，只依赖于 $f$ 在 $\tau_*$ 附近的极限表现）。

  由此，我们可以讨论全纯函数 $f$ 在全体尖点 $\{i\infty\}\cup\mathbb Q$ 附近的全纯性。
  （以下关于尖点处取值和亚纯性的讨论类似）

记群 $\Gamma$ 所有权 $k$ 的模形式的构成的集合记为 $\mathcal{M}_k(\Gamma)$。
:::

::: definition [尖点形式]
若模形式 $f\in\mathcal M_k(\Gamma)$ 在每个尖点处取值为 $0$，
则称它为 **[[尖点形式]]** 或**尖形式**。
群 $\Gamma$ 的所有权 $k$ 的尖点形式构成的集合记为 $\mathcal S_k(\Gamma)$。
:::

类似地，模函数是具有模性的[[亚纯函数]]。

::: definition [模函数]
如果 $\mathcal{H}$ 上的[[亚纯函数]] $f$
满足上述模性条件（函数方程），且在全体尖点亚纯，
则称 $f$ 为（$\Gamma$ 上）**权**为 $k$ 的**模函数**。

不加定语的**模函数**指权为 $0$ 的模函数。
:::

::: remark
如果对群 $\Gamma$ 未加说明，通常认为其取全模群 $\mathrm{SL}_2(\mathbb Z)$。

可以看出，对 $\Gamma = \mathrm{SL}_2(\mathbb{Z})$，
只要满足模性的 $f$ 在无穷点全纯，它就在每个尖点全纯，
因为全体尖点在全模群 $\mathrm{SL}_2(\mathbb Z)$ 作用下[[群作用|传递]]。
把这里的“全纯”改为“亚纯”，结论同样成立。
:::

::: remark
一些文献中，在定义模形式时只要求它们在每个尖点附近有界，
根据单复变函数的理论，这等价于 $f$ 可以延拓到每个尖点上。
:::

::: definition [几个重要的子群]
对正整数 $N$，我们定义
\[
\begin{aligned}
  \Gamma(N) &= \left\{
    \begin{pmatrix} a & b \\ c & d\end{pmatrix} \in \mathrm{SL}_2(\mathbb{Z})
    : a \equiv d \equiv 1, b \equiv c \equiv 0 \pmod N
    \right\},\\
  \Gamma_1(N) &= \left\{
    \begin{pmatrix} a & b \\ c & d\end{pmatrix} \in \mathrm{SL}_2(\mathbb{Z})
    : a \equiv d \equiv 1, c \equiv 0 \pmod N
    \right\},\\
  \Gamma_0(N) &= \left\{
    \begin{pmatrix} a & b \\ c & d\end{pmatrix} \in \mathrm{SL}_2(\mathbb{Z})
    : c \equiv 0 \pmod N
    \right\}.
\end{aligned}
\]
$\mathrm{SL}_2(\mathbb{Z})$ 的包含某个 $\Gamma(N)$ 的子群称为**同余子群**。
:::

::: definition [级、特征]
$\Gamma_0(N)$ 上权为 $k$ 的模形式称为**级** 为 $N$ 的 $k$ 权模形式。
若 $\chi$ 是模 $N$ [[Dirichlet 特征]]，$f$ 是 $\Gamma_1(N)$ 上 $k$ 权模形式，
满足对任何 $\begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \Gamma_0(N)$ 都有
\[
f[\gamma]_k = \chi(d) f,
\]
称 $f$ 是 $N$ 级**特征**为 $\chi$ 的 $k$ 权模形式。
:::

## 例子

以下列出了一些经典的模形式，这些构造在相关领域中有重要应用。

### Eisenstein 级数

::: example [Eisenstein 级数]
对 $k \geq 4$，**[[Eisenstein 级数]]**
\[
E_k(\tau) := \frac12\sum_{\substack{(m,n) \in \mathbb{Z}^2\setminus\{(0,0)\}\\ \gcd(m,n)=1}}
\frac{1}{(m\tau + n)^k}
\]
绝对收敛，它是全模群的权为 $k$ 的模形式。
:::

::: remark
Eisenstein 级数还有另一定义：
\[
G_k(\tau) := \sum_{(m,n)\in\mathbb Z^2\setminus\{(0,0)\}}{1\over(m\tau+n)^k}
\]
两者满足关系$G_k(\tau)=2\zeta(k)E_k(\tau)$。

当 $k \ge 4$ 为偶数时 $E_k(i\infty)=1$，即 $E_k(\tau)$ 的 $q$-级数常数项$a_0(E_k)=1$，
因此它也被称为归一化的 Eisenstein 级数。实际上
\[
\begin{aligned}
  E_k&=1-\frac{2k}{B_k}\sum_{n=1}^\infty\sigma_{k-1}(n)q^n \\
     &=1+\frac{2}{\zeta(1-2k)}\sum_{n=1}^\infty\frac{n^{k-1}q^n}{1-q^n},
\end{aligned}
\]
这里 $B_k$ 表示[[Bernoulli 数]]，$\zeta$ 表示[[Riemann $\zeta$ 函数]]，
$\sigma_k(n)=\sum_{d|n}d^k$ 是[[除数函数]]。
:::

### 模判别式与$j$-不变量

::: example [模判别式与$j$-不变量]
出于记号原因，使用字母 $z\in\mathcal{H}$。

**模判别式** $\Delta(z)$ 的定义如下：
\[
\Delta(z) = \frac{1}{1728}(E_4(z)^3 - E_6(z)^2).
\]
它是全模群的权为 $12$ 的尖点形式，在全体尖点有一重零点，在上半平面内则处处非零。
值得说明的是，这里 $12$ 为具有非平凡（非零）尖点形式的最小的权。

**$j$-不变量**是全模群的权为 $0$ 的模函数，它定义为
\[
j(z) = \frac{E_4(z)^3}{\Delta(z)}.
\]

模函数 $j$ 在上半平面全纯，而在全体尖点处有单极点。
全模群的所有模函数组成一个域，同构于 $\mathbb{C}(j)$，
而从几何上说，$j$ 不变量分类了 $\mathbb{C}$ 上的[[椭圆曲线]]。
:::

::: remark
此外，模判别式$\Delta$可以由一个无穷乘积表示：
\[
\Delta(z) =\eta(z)^{24} = q\prod_{n=1}^{\infty} (1-q^n)^{24}.
\]
这里$q=e^{2\pi iz}$，$\eta$ 为[[Dedekind $\eta$ 函数]]。

定义数论$\tau$函数$\tau(n)$为 $\Delta$ 的各项Fourier 系数：
\[
\Delta = \sum_{n\ge 1} \tau(n)q^n.
\]
这里$\tau$函数取值总为整数，它们满足很多数论性质。
Ramanujan 在1916年猜想其满足如下三条性质：

- 对于$\gcd(m,n)=1$，$\tau(m)\tau(n) = \tau(mn)$；

- 对于素数$p$，$\tau(p^{r+1}) = \tau(p^r)\tau(p) - p^{11}\tau(p^{r-1})$；

- 对于素数$p$，$|\tau(p)|\le 2p^{11/2}$。

前两条可以通过Hecke代数的作用证明（见 @hecke），
第三条是 [[Weil 猜想]]的特例，被
Deligne在1974年证明。
:::

### Jacobi $\theta$ 函数

## 性质

### 基本性质

由模形式的定义可以看出它们构成分次环：

::: proposition [模形式环]
对任意给定的模群 $\Gamma$，

- $\mathcal{M}_k(\Gamma)$ 构成 $\mathbb{C}$-[[向量空间]]。

- $\mathcal{M}_k(\Gamma)\mathcal{M}_l(\Gamma)
        \subset \mathcal{M}_{k+l}(\Gamma)$，即
  \[
  \mathcal{M}(\Gamma) = \mathcal{M}_\bullet(\Gamma) :=
  \bigoplus_{k = 0}^{\infty} \mathcal{M}_k(\Gamma)
  \]
  构成[[分次环]]，称为（$\Gamma$ 上的）**[[模形式环]]**。

- 所有[[尖点形式]]构成模形式环的理想。
  实际上$\mathcal{M}_k(\Gamma)\mathcal{S}_l(\Gamma)
        \subset \mathcal{S}_{k+l}(\Gamma)$。

:::

::: proposition {@th-delta}
对于任意模群 $\Gamma$ 和所有$k\in\mathbb Z$，
均有$\mathcal M_k(\Gamma)\cong \mathcal S_{k+12}(\Gamma)$。
:::

::: proof
注意到模判别式在尖点处具有一阶零点，
故$f\in\mathcal M_k(\Gamma)\Rightarrow \Delta\cdot f\in\mathcal S_{k+12}(\Gamma)$。
反之由于尖点形式在尖点处有零点且$\Delta$在尖点外无零点所以
$g\in\mathcal S_{k+12}(\Gamma)\Rightarrow g/\Delta\in\mathcal M_k(\Gamma)$。
:::

### 零点和极点

给定权 $k$ 的模函数的零点和极点个数满足一定关系，具体地说通过围道积分可以证明：

::: theorem {@th-valence}
对全模群 $\Gamma=\mathrm{SL}_2(\mathbb Z)$ 的权为 $k$ 的非零模函数 $f$，
\[
v_{i\infty}(f) +
\frac{1}{2}v_{i}(f)  +
\frac{1}{3}v_{\omega}(f) +
\sum_{p} v_p(f)
= \frac{k}{12}.
\]
其中：

- $v$ 表示赋值，即零点重数（取正）或负极点重数（取负）。

  特别地，在尖点 $i\infty$ 的赋值按照对应的 $q=e^{2\pi i\tau}$ 换元后的赋值计。

- $i=\sqrt{-1},\omega=\frac12(-1+\sqrt{-3})$。

- $\sum_{p}$ 表示 $p$ 从全体非尖点非椭圆点的 $p\in\mathcal{H}$ 的
  $\Gamma$-等价类中各取一代表元求和。

:::

上述结果可以推广到一般的模群 $\Gamma$ 上。
注意到此时尖点和椭圆点可能有多个 $\Gamma$-轨道，所以我们需要调整公式如下：

::: theorem {@th-valence-general}
对任意模群 $\Gamma$ 的权为 $k$ 的非零模函数 $f$，
\[
\sum_{\tau\sim i\infty}v_\tau(f) +
\frac{1}{2}\sum_{\tau\sim i} v_{\tau}(f)  +
\frac{1}{3}\sum_{\tau\sim\omega} v_\tau(f) +
\sum_{p} v_p(f)
= \frac{k\cdot [\mathrm{PSL}_2(\mathbb Z):\overline{\Gamma}]}{12}.
\]
其中：

- $v$ 表示赋值。特别地，在尖点的赋值按照宽度 $n$ 对应的 $q=e^{2\pi i\tau/n}$ 换元后的赋值计。

- $\sum_{\tau\sim i\infty}$ 表示 $\tau$ 从全体尖点的 $\Gamma$-等价类中各取一代表元求和。

- $\sum_{\tau\sim i}$ 表示 $\tau$ 从全体二阶椭圆点的 $\Gamma$-等价类中各取一代表元求和。

- $\sum_{\tau\sim\omega}$ 表示 $\tau$ 从全体三阶椭圆点的 $\Gamma$-等价类中各取一代表元求和。

- $\sum_{p}$ 表示 $p$ 从全体非尖点非椭圆点的 $p\in\mathcal{H}$ 的
  $\Gamma$-等价类中各取一代表元求和。

- $\overline\Gamma$ 表示 $\Gamma\subset\mathrm{SL}_2(\mathbb Z)$
  在自然映射 $\mathrm{SL}_2(\mathbb Z)\to\mathrm{PSL}_2(\mathbb Z)$ 下的像。

:::

### 维数

::: corollary {@th-dim-1}
对于任意模群 $\Gamma$，权为 $0$ 的模形式 $\mathcal M_0(\Gamma)\cong\mathbb C$ 只有常函数，
没有权为负数的模形式，即 $\mathcal M_k(\Gamma)\cong\{0\}$ 对一切 $k<0$。
如果 $-I=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}\in\Gamma$，
则 $\mathcal M_k(\Gamma)\cong\{0\}$ 对一切奇数权 $k=2m+1$。
:::

::: proof
对于所有$f\in\mathcal M_k(\Gamma)$，@th-valence-general 中的所有的$v_p(f)$均非负。
故 $k<0$ 时 $\mathcal M_k(\Gamma)=\{0\}$。
而 $k=0$ 时非零模形式必须无零点和极点，所以任取 $\tau_0\in\mathcal{H}$，
$f(\tau)-f(\tau_0)$ 必须恒为 $0$。
当 $-I\in\Gamma$ 时，由于 $(-I)\tau=\tau$，因此
$f(\tau)=(-1)^kf(\tau)$，所以若 $k$ 为奇数则 $f(\tau)=0$恒成立。
:::

::: corollary {@th-dim-2}
对于任意模群 $\Gamma$ 和权 $k$，$\mathcal M_k(\Gamma)$ 是有限维复[[线性空间]]。
:::

::: proof
任取 $\mathcal{H}$ 中超过 $k\cdot [\mathrm{PSL}_2(\mathbb Z):\overline\Gamma]/12$ 个两两不在同一
$\Gamma$-轨道的非椭圆点 $\tau_1,\cdots,\tau_m\in\mathcal{H}$，
那么对于任意 $f_1,\cdots,f_{m+1}\in\mathcal M_k(\Gamma)$，由线性代数，
它们存在一个非平凡复线性组合在 $\tau_1,\cdots,\tau_m$ 上都取 $0$。
因此$\dim \mathcal M_k(\Gamma)\le m$。
:::

由于 Eisenstein 级数的存在，我们可以证明：

::: corollary [全模群的维数公式] {@th-dim}
当 $k<0$ 或 $k$ 为奇数时 $\mathcal M_k=\{0\}$，否则
\[
\dim\mathcal M_k(\Gamma)=
\begin{cases}
  \lfloor k/12\rfloor+1 & k\not\equiv2\pmod{12} \\
  \lfloor k/12\rfloor & k\equiv2\pmod{12}.
\end{cases}
\]
:::

::: proof
根据 @th-dim-1，我们得到 $k\le 0$ 或 $k$ 是奇数时的结果。

因此我们先讨论 $2\le k\le 10$ 且 $k$ 是偶数的情况。
根据 @th-dim-2 中的界，此时维数至多为 $1$，
对于 $k=4,6,8,10$ 我们有 $E_4,E_6,E_8,E_{10}$，
$\mathbb C$-线性张成 $\mathcal M_k(\mathrm{SL}_2(\mathbb Z))$。
而对于 $k=2$ 的情况，
注意到 $1,\frac12,\frac 13$ 的非负整数倍之和不能是 $\frac 16$ 即得
$\mathcal M_2(\mathrm{SL}_2(\mathbb Z))=\{0\}$。

对于 $k\ge 12$，注意到对任意 $f\in\mathcal M_k(\mathrm{SL}_2(\mathbb Z))$，
存在唯一常数 $c$ 使得 $f-cE_k\in\mathcal S_k(\mathrm{SL}_2(\mathbb Z))$，
即通过加上Eisenstein 级数的常数倍调整以致在尖点 $i\infty$ 处取 $0$。

因此由 @th-delta 可知 $\mathcal S_k\cong\mathcal M_{k-12}$，
故 $\dim \mathcal M_k=\dim\mathcal M_{k-12}+1$ 对一切偶数 $k\ge 12$。
通过归纳可知结论对一切正偶数成立。
:::

::: proposition [全模群的模形式环结构]
全模群的[[模形式环]] $\mathcal{M}(\mathrm{SL}_2(\mathbb{Z}))$
同构于 $\mathbb{C}[E_4, E_6]$。这里Eisenstein 级数 $E_4,E_6$ 在 $\mathbb C$ 上代数无关，
也就是说 $\mathcal{M}(\mathrm{SL}_2(\mathbb{Z}))$ 同构于两个未定元的多项式环。
:::

::: proof
只要证明 $E_4,E_6$ 代数无关，
注意到 $4r+6s=k$ 的非负整数解 $(r,s)$ 的数量等于 $\dim \mathcal M_k(\Gamma)$，
因此 $E_4^rE_6^s$ 复线性生成整个 $\mathcal M_k(\Gamma)$。
此外，注意到 $E_4(\omega)=E_6(i)=0$，$E_4(i)\ne 0,E_6(\omega)\ne 0$。

若有最低次数的非平凡多项式关系 $\sum_{r\in \mathbb N,s\in \mathbb N} c_{rs}E_4^rE_6^s=0$，
这里 $c_{rs}\in\mathbb C$。
那么考虑作用 $\tau\mapsto \frac{-1}{\tau+n}$，这里 $n$ 是正整数，
模性给出 $\sum_{r,s}(\tau+n)^{4r+6s}c_{rs}E_4^rE_6^s=0$，
由于 $n$ 的任意性，我们知道必须对任意 $k$ 都有 $\sum_{r+s=k}c_{rs}E_4^rE_6^s=0$ 成立。
由此可设该关系是权 $k$ 的（分次环中齐次的）。

此时代入 $\tau=i$ 以及 $\tau=\omega$，可知关系中形如 $E_4^r,E_6^s$的项系数为 $0$。
因此将关系除以 $E_4E_6$ 得到 $\sum_{r+s=k}c_{rs}E_4^{r-1}E_6^{s-1}=0$，
从而多项式关系的次数降低，与次数最低相矛盾，结果得证。
:::

通过将其他Eisenstein 级数用 $E_4,E_6$ 的多项式表示，可以得到结论：

::: corollary
以下Eisenstein 级数的恒等式成立：
\[
\begin{aligned}
E_4^2 =E_8, \quad
E_4E_6 = E_{10}, \quad
441E_4^3+250E_6^2=691E_{12}, \quad
E_4^2E_6 = E_{14}.
\end{aligned}
\]
观察等号两侧Fourier 系数可得一些不平凡的恒等式，如
\[
\sigma_7(n)=\sigma_3(n)+120\sum_{m=1}^{n-1}\sigma_3(m)\sigma_3(n-m).
\]
:::

### 几何意义

### Hecke 代数作用 {@hecke}

## 推广

模形式的推广包括 [[Maaß 形式]]、[[Hilbert 模形式]]、[[Siegel 模形式]]、[[Jacobi 形式]]、
[[自守形式]]等；
相关的概念还有[[模积分]]、[[自守因子]]。

```terms
模形式:
  en: modular form
  de: Modulform
  fr: forme modulaire
模函数:
  en: modular function
  de: Modulfunktion
  fr: fonction modulaire
权:
  en: weight
  de: Gewicht :n
  fr: poids :m
尖点形式:
  en: cusp form
  de: Spitzenform
  fr: forme parabolique
自守形式:
  en: automorphic form
  de: automorphe Form
  fr: forme automorphe
模群:
  en: modular group
  de: Modulgruppe
  fr: groupe modulaire
```
