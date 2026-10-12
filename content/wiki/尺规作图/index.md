---
title: 尺规作图
categories: [域论, 初等几何]
notices:
  - name: 问题
    items:
      - “性质”一节中“$L$ 是代数数构成的域的子域”的证明里，$K_j=K_{j-1}(z_j)$ 似乎不一定包含 $z_j$ 的实部与虚部，而后文的论证用到了坐标属于 $K_j$；证明也只说明了 $z$ 是代数数，没有说明它是某个 $2^n$ 次有理系数首一多项式的根。
navboxes: [域论, Euclid 几何]
---

[[平面几何]]中，**尺规作图**是指利用无刻度直尺和圆规作图的方法。

在[[复平面]]上，**尺规作图**可作出的复点称为**规矩数**，构成一个[[域]]。

## 定义

::: definition [规矩数]
规矩数集 $L$ 是最小的满足如下性质的 $\mathbb C$ 的子集：

- $0 \in L, 1 \in L$；

- 对于两不同的规矩数 $A \ne B \in L$，可以进行如下两种操作：

  - 构造穿过 $A, B$ 的唯一[[直线]]。

  - 构造以 $A$ 为圆心且穿过 $B$ 的唯一[[圆]]。

  两个被构造直线的交点，两个被构造圆的交点，以及一个被构造直线与被构造圆的交点均属于 $L$。

:::

## 性质

::: lemma
实数乘法是尺规可作的。
:::

::: proof
先设 $m,n>0$，并固定单位线段。

从点 $O$ 引出两条不同且不共线的射线。
在第一条射线上取点 $A,B$，使得
\[
OA=1,\qquad OB=m;
\]
在第二条射线上取点 $C$，使得
\[
OC=n.
\]
连接 $A,C$，过 $B$ 作 $AC$ 的平行线，
与第二条射线相交于 $D$。

下图画出 $m>1$ 的情形。

```tikz
\begin{tikzpicture}[scale=1, line cap=round, line join=round]
    \coordinate (O) at (0,0);
    \coordinate (A) at (2,0);
    \coordinate (B) at (5,0);
    \coordinate (C) at (0.9,1.6);
    \coordinate (D) at (2.25,4);
    \draw (O) -- (B) -- (D) -- cycle;
    \draw (A) -- (C);
    \fill (O) circle (1.2pt);
    \fill (A) circle (1.2pt);
    \fill (B) circle (1.2pt);
    \fill (C) circle (1.2pt);
    \fill (D) circle (1.2pt);
    \node[below left] at (O) {$O$};
    \node[below] at (A) {$A$};
    \node[below right] at (B) {$B$};
    \node[left] at (C) {$C$};
    \node[above] at (D) {$D$};
    \path (O) -- (A)
        node[midway, above] {$1$};
    \path (O) -- (C)
        node[midway, above left] {$n$};
    \draw[|-|] (0,-0.65) -- (5,-0.65) node[midway, fill=white, inner sep=3pt] {$m$};
    \node at (3.6,3.3) {$AC\parallel BD$};
\end{tikzpicture}
```

由 $AC\parallel BD$，三角形 $OAC$ 与 $OBD$ 相似，因而
\[
\frac{OD}{OC}=\frac{OB}{OA}.
\]
代入已知长度，得到
\[
OD=\frac{OB\cdot OC}{OA}=mn.
\]
因此，线段 $OD$ 就给出乘积 $mn$。

若某个因子为零，乘积为零。
对于负数，先作出绝对值的乘积，
再根据符号将所得长度截取到实轴的相应方向即可。
:::

::: lemma
非零实数的倒数是尺规可作的。
:::

::: proof
先设 $x>0$，并固定单位线段。

从点 $O$ 引出两条不同且不共线的射线。
在第一条射线上取点 $A,B$，使得
\[
OA=x,\qquad OB=1;
\]
在第二条射线上取点 $C$，使得
\[
OC=1.
\]
连接 $A,C$，过 $B$ 作 $AC$ 的平行线，
与第二条射线相交于 $D$。

下图画出 $x>1$ 的情形。

```tikz
\begin{tikzpicture}[scale=1, line cap=round, line join=round]
    \coordinate (O) at (0,0);
    \coordinate (A) at (5,0);
    \coordinate (B) at (2,0);
    \coordinate (C) at (1.5,{sqrt(7)/2});
    \coordinate (D) at (0.6,{sqrt(7)/5});
    \draw (O) -- (A) -- (C) -- cycle;
    \draw (B) -- (D);
    \fill (O) circle (1.2pt);
    \fill (A) circle (1.2pt);
    \fill (B) circle (1.2pt);
    \fill (C) circle (1.2pt);
    \fill (D) circle (1.2pt);
    \node[below left] at (O) {$O$};
    \node[below right] at (A) {$A$};
    \node[below] at (B) {$B$};
    \node[above] at (C) {$C$};
    \node[above left] at (D) {$D$};
    \path (O) -- (B)
        node[midway, above] {$1$};
    \draw[|-|] (0,-0.65) -- (5,-0.65)
        node[midway, fill=white, inner sep=3pt] {$x$};
    \node at (3.6,1.65) {$AC\parallel BD$};
    \node at (3.6,1.2) {$OC=1$};
\end{tikzpicture}
```

由 $AC\parallel BD$，三角形 $OBD$ 与 $OAC$ 相似，因而
\[
\frac{OD}{OC}=\frac{OB}{OA}.
\]
代入已知长度，得到
\[
OD=\frac{OB\cdot OC}{OA}=\frac1x.
\]
因此，线段 $OD$ 就给出倒数 $1/x$。

对于 $x<0$，先作出 $1/|x|$，
再将所得长度截取到负实轴上即可。
:::

由于角的加减法尺规可作，我们有：

::: lemma
复数乘法是尺规可作的。
:::

::: lemma
非零复数的倒数是尺规可作的。
:::

::: proposition {@prop-constructible-field}
规矩数集 $L$ 是 $\mathbb C$ 的[[子域]]。
:::

::: proof
复数的加法与减法是尺规可作的，上面引理保证复数的乘法和除法是尺规可作的。因此规矩数集
$L$ 对四则运算封闭，$L$ 是 $\mathbb C$ 的子域。
:::

::: lemma
实数的平方根是尺规可作的。
:::

::: proof
在一条直线上依次取点 $A,C,B$，使得
\[
AC=x,
\qquad
CB=1.
\]
于是
\[
AB=x+1.
\]
以 $AB$ 为直径作半圆，并过 $C$ 作 $AB$ 的垂线，设它与
半圆相交于 $D$。

```tikz
\begin{tikzpicture}[scale=1.2]
    \coordinate (A) at (0,0);
    \coordinate (C) at (3,0);
    \coordinate (B) at (4,0);
    \coordinate (D) at (3,{sqrt(3)});
    \draw (A) arc[start angle=180,end angle=0,radius=2];
    \draw (A) -- (C) -- (B);
    \draw (A) -- (D) -- (B);
    \draw (C) -- (D);
    \draw (3,0) -- (3.18,0) -- (3.18,0.18) -- (3,0.18);
    \node[below] at (A) {$A$};
    \node[below] at (C) {$C$};
    \node[below] at (B) {$B$};
    \node[above] at (D) {$D$};
    \node[below] at (1.5,0) {$x$};
    \node[below] at (3.5,0) {$1$};
    \node[left] at (3,0.8) {$\sqrt{x}$};
\end{tikzpicture}
```

由 Thales 定理，
\[
\angle ADB=\frac{\pi}{2}.
\]
因此 $CD$ 是直角三角形 $ADB$ 的斜边上的高。由相似三角形
$ACD$ 与 $DCB$ 可得
\[
CD^2=AC\cdot CB.
\]
代入 $AC=x$ 和 $CB=1$，得到
\[
CD^2=x,
\]
因而
\[
CD=\sqrt{x}.
\]
将线段 $CD$ 的长度截取到正实轴上，便得到表示
$\sqrt{x}$ 的点。
:::

结合二等分角的尺规作图法，我们有

::: lemma
复数的平方根是尺规可作的。
:::

立即得到：

::: proposition {@prop-constructible-square-roots}
规矩数域 $L$ 对平方根运算封闭，换句话说：
若 $a \in L$，则 $\mathbb C$ 中方程 $x^2 - a = 0$ 的所有解属于 $L$。
:::

::: proposition
规矩数域 $L$ 是[[代数数]]构成的域的子域。
进一步，$L$ 中每一个元素都是某 $2^n$ 次有理系数首一多项式的根。
:::

::: proof
取任意规矩数 $z$，
并固定一个从 $0,1$ 出发作出 $z$ 的有限作图过程。
按产生的先后顺序，将其中新加入的交点记为
\[
z_i,\qquad i=1,\cdots,N,
\]
其中 $z=z_N$。
每个 $z_i$ 都是由此前已有的点所确定的两条不同曲线的交点，
这里的曲线是直线或圆。

递归定义
\[
K_0=\mathbb{Q}(\mathrm{i}),
\qquad
K_j=K_{j-1}(z_j).
\]
这样，$K_j$ 就是前 $j$ 个交点的所有坐标在 $\mathbb{Q}(\mathrm{i})$ 上生成的域。
画出直线或圆本身不改变这个域；
只有加入新交点时，才按上述公式添入坐标。

下面证明，对每个 $j$，都有
\[
[K_j:K_{j-1}]\in\{1,2\}.
\]
记 $K=K_{j-1}$。
确定第 $j$ 步所用直线或圆的点，其坐标都属于 $K$。
因此，所用直线的方程可写为
\[
ax+by+c=0,\qquad a,b,c\in K,
\]
所用圆的方程可写为
\[
(x-u)^2+(y-v)^2=s,\qquad u,v,s\in K.
\]
这里 $s$ 是半径的平方，由圆心与圆上已知点的坐标计算得到。

若 $z_j$ 是两条不同直线的交点，
则解线性方程组可得 $z_j\in K$，
所以 $K_j=K$。

若 $z_j$ 是直线与圆的交点，
则由于直线方程中 $a,b$ 不同时为零，
可以将一个坐标表示为另一个坐标的 $K$-系数仿射函数。
代入圆的方程后，得到另一个坐标满足的二次方程。
所以，若将这个坐标记为 $t$，则
\[
K_j=K(t),
\qquad
[K(t):K]\le2.
\]
因此，若两个新坐标已在 $K$ 中，则 $K_j=K$；
否则 $K_j/K$ 是二次扩张。

若 $z_j$ 是两个不同圆的交点，
将两个圆的方程相减，得到交点满足的直线方程。
由于两个不同的同心圆不相交，
这里得到的确实是一条直线。
于是这一情形归结为直线与圆的交点情形。

综上，每一步都有
\[
[K_j:K_{j-1}]\in\{1,2\}.
\]
由[[塔式公式]]，$K_N$作为$\mathbb{Q}$-向量空间的维数是
\[
[K_N:\mathbb{Q}]
=
\prod_{j=1}^{N}[K_j:K_{j-1}] \times [\mathbb{Q}(\mathrm{i}): \mathbb{Q}]
=
2^{r + 1},
\]
其中 $r$ 是上述过程中实际发生二次扩张的步数。

因此，$K_N$ 中的 $2^{r + 1} + 1$ 个元素
\[
1,z,z^2,\dotsc,z^{2^{r + 1}}
\]
必定在 $\mathbb{Q}$ 上线性相关。
也就是说，存在不全为零的有理数 $a_0,\dotsc,a_{2^{r + 1}}$，使得
\[
a_0+a_1z+\cdots+a_{2^{r + 1}}z^{2^{r + 1}}=0.
\]
:::

::: proposition [尺规作图三大难题不可解]
$\sqrt[3] 2, \cos \dfrac{\pi}{9}, \pi$
均**不属于**规矩数域 $L$。
:::

## 正多边形的作法

将正 $n$ 边形的外接圆取为单位圆，并取 $1$ 为一个顶点。
只要作出[[本原单位根]]
\[
\zeta_n = e^{2\pi \mathrm{i}/n},
\]
就可以通过乘法得到其余顶点
$1, \zeta_n, \dotsc, \zeta_n^{n - 1}$。
由 @prop-constructible-field，这等价于整个[[分圆域]]
$\mathbb Q(\zeta_n)$ 都由规矩数组成。

由 @prop-constructible-square-roots，规矩数域可以由有理数域反复作二次扩张得出。
因此自然的问题是：哪些分圆域可以从 $\mathbb Q$ 出发，
经过有限次二次扩张得到？

### 分圆域的二次扩张判据

分圆域的一个重要性质是 $\mathbb Q(\zeta_n)/\mathbb Q$ 为 [[Galois 扩张]]，且
\[
\operatorname{Gal}(\mathbb Q(\zeta_n)/\mathbb Q)
\simeq (\mathbb Z/n\mathbb Z)^\times,
\qquad \sigma_a(\zeta_n) = \zeta_n^a.
\]
特别地，这个 Galois 群是有限[[交换群]]，
其阶为 [[Euler 函数]] $\varphi(n)$。

由 [[Galois 对应]]，将域扩张逐次分成二次扩张，
等价于将 Galois 群逐次取指数为 $2$ 的子群。
所以作图问题可以转化为这个有限群是否存在相应的子群链。

::: theorem [正多边形的可作性判据] {@thm-constructible-cyclotomic-field}
设 $n \geq 3$，$\zeta_n = e^{2\pi \mathrm{i}/n}$。
以下条件等价：

1. 正 $n$ 边形可以尺规作图，即 $\zeta_n \in L$。

2. 存在域塔
   \[
   \mathbb Q = K_0 \subset K_1 \subset \cdots
   \subset K_r = \mathbb Q(\zeta_n),
   \qquad [K_j : K_{j - 1}] = 2.
   \]

3. $\varphi(n)$ 是 $2$ 的幂。

:::

::: proof
先证明条件 $1$ 蕴含条件 $3$。
若 $\zeta_n$ 可作，在一个有限作图过程中，
依次将各交点的实部和虚部添入坐标域。
直线与圆的交点计算只需解一次或二次方程，
所以得到的实数域 $F$ 对 $\mathbb Q$ 的次数为 $2$ 的幂。
因为 $\zeta_n \in F(\mathrm{i})$，
且 $[F(\mathrm{i}) : \mathbb Q]$ 仍是 $2$ 的幂，
由[[塔式公式]]，
\[
\varphi(n) = [\mathbb Q(\zeta_n) : \mathbb Q]
\mid [F(\mathrm{i}) : \mathbb Q].
\]
因而 $\varphi(n)$ 是 $2$ 的幂。

再设 $\varphi(n) = 2^r$，
记 $G = \operatorname{Gal}(\mathbb Q(\zeta_n)/\mathbb Q)$。
阶为 $2$ 的幂的非平凡有限交换群，其极大真子群必有指数 $2$。

反复取这样的子群，得到
\[
G = G_0 \supset G_1 \supset \cdots \supset G_r = \{1\},
\qquad [G_{j - 1} : G_j] = 2.
\]
令 $K_j = \mathbb Q(\zeta_n)^{G_j}$ 为 $G_j$ 的[[不动域]]。
由 Galois 对应，
\[
[K_j : K_{j - 1}] = [G_{j - 1} : G_j] = 2,
\]
故条件 $2$ 成立。

最后，若条件 $2$ 成立，从 $K_0 = \mathbb Q \subset L$ 出发，
每一步都只需在已有域中开平方，因而依次有 $K_j \subset L$。
特别地 $\zeta_n \in \mathbb Q(\zeta_n) \subset L$，得到条件 $1$。
:::

### 哪些边数满足条件

::: theorem [Gauss–Wantzel 定理] {@thm-gauss-wantzel}
设 $n \geq 3$。
正 $n$ 边形可以尺规作图，当且仅当
\[
n = 2^a p_1 \cdots p_s,
\]
其中 $a \geq 0$，$p_1, \dotsc, p_s$ 是两两不同的 [[Fermat 素数]]，
即形如 $2^{2^m} + 1$ 的素数。
允许 $s = 0$。
:::

::: proof
写 $n = 2^a \prod_{j = 1}^s p_j^{e_j}$，
其中 $p_j$ 是两两不同的奇素数，$e_j \geq 1$。
则
\[
\varphi(n)
= \varphi(2^a)\prod_{j = 1}^s p_j^{e_j - 1}(p_j - 1).
\]
因子 $\varphi(2^a)$ 总是 $2$ 的幂。
因此 $\varphi(n)$ 为 $2$ 的幂，
当且仅当每个 $e_j = 1$，且每个 $p_j - 1$ 都是 $2$ 的幂。

若奇素数 $p = 2^b + 1$，写 $b = 2^m q$，其中 $q$ 为奇数。
当 $q > 1$ 时，
\[
p = \left(2^{2^m}\right)^q + 1
\]
被 $2^{2^m} + 1$ 整除，与 $p$ 为素数矛盾。
所以 $q = 1$，即 $p$ 是 Fermat 素数。
再应用 @thm-constructible-cyclotomic-field 即得结论。
:::

由 @thm-gauss-wantzel，
不超过 $100$ 的可作正多边形的边数恰好为
\[
\begin{gathered}
  3,\ 4,\ 5,\ 6,\ 8,\ 10,\ 12,\ 15,\ 16,\ 17,\ 20,\ 24, \\
  30,\ 32,\ 34,\ 40,\ 48,\ 51,\ 60,\ 64,\ 68,\ 80,\ 85,\ 96.
\end{gathered}
\]
例如 $15 = 3 \cdot 5$，$51 = 3 \cdot 17$，$85 = 5 \cdot 17$
都满足条件；$9 = 3^2$ 不满足条件，因为奇素因子不能重复。

### 例子

下面以正五边形和正十七边形为例，说明如何从 Galois 群的子群链读出二次扩张塔。

::: example [正五边形] {@prop-constructible-pentagon}
设 $\zeta = e^{2\pi \mathrm{i}/5}$。
则 $\mathbb Q(\zeta)$ 可以由 $\mathbb Q$ 经过两次二次扩张得到，
因而正五边形可以尺规作图。

由分圆域的性质，
\[
\operatorname{Gal}(\mathbb Q(\zeta)/\mathbb Q)
\simeq (\mathbb Z/5\mathbb Z)^\times = \langle 2\rangle.
\]
记 $\sigma(\zeta) = \zeta^2$，则 $\sigma$ 的阶为 $4$。
子群链
\[
\langle\sigma\rangle
\supset \langle\sigma^2\rangle
\supset \{1\}
\]
给出二次扩张塔
\[
\mathbb Q
\subset \mathbb Q(\zeta)^{\langle\sigma^2\rangle}
\subset \mathbb Q(\zeta).
\]
每一步的次数都为 $2$，所以可逐层开平方作出 $\mathbb Q(\zeta)$ 中的元素，
特别是顶点 $\zeta$。

这里 $\sigma^2(\zeta) = \zeta^{-1}$ 是复共轭，
所以中间域就是 $\mathbb Q(\zeta)$ 的实子域。
令 $t = \zeta + \zeta^{-1}$，则 $\zeta$ 满足
\[
X^2 - tX + 1 = 0.
\]
由于 $\zeta$ 不是实数，$[\mathbb Q(\zeta) : \mathbb Q(t)] = 2$，
从而 $\mathbb Q(\zeta)^{\langle\sigma^2\rangle} = \mathbb Q(t)$。
若要把这两步写成方程，由 $1 + \zeta + \cdots + \zeta^4 = 0$ 得
\[
t^2 + t - 1 = 0,\qquad \zeta^2 - t\zeta + 1 = 0.
\]
其中 $t$ 是实子域的生成元，它的出现来自复共轭对应的不动域。
:::

::: example [正十七边形] {@prop-constructible-heptadecagon}
设 $\zeta = e^{2\pi \mathrm{i}/17}$。
则 $\mathbb Q(\zeta)$ 可以由 $\mathbb Q$ 经过四次二次扩张得到，
因而正十七边形可以尺规作图。

由分圆域的性质，
\[
\operatorname{Gal}(\mathbb Q(\zeta)/\mathbb Q)
\simeq (\mathbb Z/17\mathbb Z)^\times.
\]
因为 $3^8 \equiv -1 \pmod{17}$，$3$ 的阶为 $16$。
令 $\sigma(\zeta) = \zeta^3$，则 Galois 群为 $\langle\sigma\rangle$。
逐次将生成元平方，得到子群链
\[
\langle\sigma\rangle
\supset \langle\sigma^2\rangle
\supset \langle\sigma^4\rangle
\supset \langle\sigma^8\rangle
\supset \{1\}.
\]
各子群的阶依次为 $16, 8, 4, 2, 1$。
因此相应的不动域形成域塔
\[
\mathbb Q
\subset \mathbb Q(\zeta)^{\langle\sigma^2\rangle}
\subset \mathbb Q(\zeta)^{\langle\sigma^4\rangle}
\subset \mathbb Q(\zeta)^{\langle\sigma^8\rangle}
\subset \mathbb Q(\zeta),
\]
相邻两域之间的次数都为 $2$。
由 @thm-constructible-cyclotomic-field，
逐层解二次方程即可作出 $\mathbb Q(\zeta)$ 中的所有元素，包括 $\zeta$ 及其各次幂。

最后一个二阶子群由复共轭生成，因为
$\sigma^8(\zeta) = \zeta^{-1}$。
所以前三步得到最大实子域
\[
\mathbb Q(\zeta)^{\langle\sigma^8\rangle}
= \mathbb Q(\zeta + \zeta^{-1}),
\]
其在 $\mathbb Q$ 上的次数为 $8$。
最后一步由
\[
X^2 - (\zeta + \zeta^{-1})X + 1 = 0
\]
得到 $\zeta$。
这与正五边形的最后一步相同。
:::

从域扩张的角度看，五边形与十七边形的共同原因是：
相应的分圆域具有阶为 $2$ 的幂的 Galois 群，
因此可以沿着指数为 $2$ 的子群链逐层开平方。
具体的根式表达式是选取各层生成元后对这条域塔的计算。

## 参考资料

```bibliography
Eberhard12:
  type: online
  site: seaneberhard.com
  author: Sean Eberhard
  title: Constructible regular polygons
  year: 2012
  url: https://seaneberhard.com/2012/09/13/constructible-regular-polygons/
```

```terms
尺规作图:
  en: straightedge-and-compass construction
  de: Konstruktion mit Zirkel und Lineal
  fr: construction à la règle et au compas
```
