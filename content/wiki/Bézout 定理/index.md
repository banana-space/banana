---
title: Bézout 定理
categories: [相交论]
notices:
  - name: 消歧义
    about: '[[代数几何]]中关于曲线交点个数的定理'
    see:
      - topic: '[[初等数论]]中关于最大公因子的结论'
        page: 'Bézout 引理'
navboxes: [计数几何]
---

在[[代数几何]]中，**Bézout 定理**是说，
在[[代数闭域]]上，对[[射影平面]]上两条[[代数曲线]]，
若其次数分别为 $m$、$n$，且没有重合的[[不可约分支]]，
则它们恰好交于 $mn$ 个点，
这里交点个数按[[相交重数]]计算。

例如，平面上的[[射影直线|直线]]与[[圆锥曲线]]恰好交于两点：
它们相切时，切点按重数 $2$ 计算；
它们在实平面上不相交时，它们在复平面上交于两点。
又例如，两条平行直线在射影平面中交于[[无穷远点]]。
这些约定保证了交点个数总是 $mn$，而不取决于曲线的位置。

Bézout 定理是[[计数几何]]的最基本结论。
它也可以推广到高维[[射影空间（代数几何）|射影空间]]中的超曲面与子簇，
这些推广是[[相交论]]的出发点。

## 陈述与证明

### 相交重数

设 $k$ 是[[代数闭域]]，$S = k [x, y, z]$。
对非零[[齐次多项式|齐次多项式]] $f \in S$，
记 $C_f = V (f) \subset \mathbb{P}^2_k$ 为它定义的射影曲线。

::: definition [相交重数]
设 $f, g \in S$ 是齐次多项式，次数分别为 $m, n \geq 1$，
且没有次数 $\geq 1$ 的公因子。
称[[闭子概形]]
\[
C_f \cap C_g = V (f, g) =
\operatorname{Proj} \bigl( S / (f, g) \bigr)
\subset \mathbb{P}^2_k
\]
为 $C_f$、$C_g$ 的 **[[交概形]]**，
它是 $C_f$、$C_g$ 在 $\mathbb{P}^2_k$ 上的[[纤维积]]。

对于 $k$-点 $p \in \mathbb{P}^2_k$，定义 $C_f$、$C_g$ 在 $p$ 处的**相交重数**为
\[
I_p (C_f, C_g) =
\operatorname{length} \mathcal{O}_{C_f \cap C_g, p} =
\dim_k \mathcal{O}_{C_f \cap C_g, p} ,
\]
即交概形在 $p$ 处的[[局部环]] $\mathcal{O}_{C_f \cap C_g, p}$
作为自身上的模的[[长度（模论）|长度]]。
因其[[剩余域]]为 $k$，
这也等于其作为 $k$-[[向量空间]]的[[维数（线性代数）|维数]]。
:::

例如，若 $p \notin C_f \cap C_g$，则 $I_p (C_f, C_g) = 0$；
若 $C_f$ 与 $C_g$ [[横截相交]]于 $p$，则 $I_p (C_f, C_g) = 1$。
在其他情况下，$I_p (C_f, C_g) \geq 2$：
这时要么两条曲线在 $p$ 处都光滑且相切，要么 $p$ 是其中一条曲线的[[奇点]]。
若是前一种情况，则相交重数为 $r \geq 2$ 大致是说，
在 $p$ 附近两条曲线看起来像是相切的曲线 $y = 0$ 与 $y = x^r$。

::: remark [等价描述]
相交重数有如下的等价描述：若 $p = [a : b : 1]$，
记 $\tilde{f} (x, y) = f (x, y, 1)$、$\tilde{g} (x, y) = g (x, y, 1)$，
则
\[
I_p (C_f, C_g) =
\dim_k \mathcal{O}_{C_f \cap C_g, p} =
\dim_k k [x, y]_{(x - a, y - b)} \big/ (\tilde{f}, \tilde{g}) .
\]
这一描述也可以写成坐标无关的形式：
取一次齐次多项式 $\ell$ 使得 $\ell (p) \neq 0$，
则在开集 $\{ \ell \neq 0 \}$ 上，$C_f$、$C_g$ 的理想分别由
$f / \ell^m$、$g / \ell^n$ 生成，因此
\[
I_p (C_f, C_g) =
\dim_k \mathcal{O}_{C_f \cap C_g, p} =
\dim_k \mathcal{O}_{\mathbb{P}^2, p} \big/ (f / \ell^m, g / \ell^n) .
\]
:::

### 定理的陈述

::: theorem [Bézout 定理] {@thm:bezout}
设 $k$ 是代数闭域，$f, g \in k [x, y, z]$ 是齐次多项式，
次数分别为 $m, n \geq 1$，且没有次数 $\geq 1$ 的公因子。
则 $C_f \cap C_g$ 只有有限个点，并且
\[
\sum_{p \in C_f \cap C_g} I_p (C_f, C_g) = mn .
\]
换言之，交概形 $C_f \cap C_g$ 是 $k$ 上长度为 $mn$ 的[[有限态射|有限]]概形。
:::

### 证明

下面的证明大致按照 [@Fulton1969] 的思路。
想法是用两种方法计算 $k$-向量空间 $R_d$ 的维数，
其中 $R = S / (f, g)$，$R_d$ 是它的 $d$ 次齐次部分：
一方面，$\dim_k R_d$ 可以由 $f$、$g$ 的次数直接算出，在 $d$ 充分大时等于 $mn$；
另一方面，$d$ 充分大时，$R_d$ 同构于交概形的坐标环，
其维数等于各点处的相交重数之和。

::: proof [@thm:bezout 的证明]
**第一步：计算 $\dim_k R_d$。**
考虑[[分次环|分次]] $S$-模的序列
\[
0 \longrightarrow S (-m-n)
\overset{\alpha}{\longrightarrow} S (-m) \oplus S (-n)
\overset{\beta}{\longrightarrow} S
\longrightarrow R \longrightarrow 0 ,
\]
其中 $\alpha (h) = (g h, -f h)$，$\beta (a, b) = a f + b g$。
它是[[正合列]]：
$\alpha$ 显然是单射，$\beta \circ \alpha = 0$；
若 $a f + b g = 0$，则 $f \mid b g$，
由于 $S$ 是[[唯一分解整环]]且 $f$、$g$ 没有公因子，有 $f \mid b$。
设 $b = - h f$，则 $a = h g$，即 $(a, b) = \alpha (h)$。

记 $P (e) = (e + 1) (e + 2) / 2$。
对整数 $e \geq -2$，有 $\dim_k S_e = P (e)$
（$e = -1, -2$ 时两边都是 $0$）。
因此，对 $d \geq m + n - 2$，有
\[
\begin{aligned}
  \dim_k R_d
  &= P (d) - P (d - m) - P (d - n) + P (d - m - n) \\
  &= mn ,
\end{aligned}
\]
其中第二个等号由直接计算得到。

**第二步：$C_f \cap C_g$ 只有有限个点。**
设 $p_1, \dotsc, p_N$ 是 $C_f \cap C_g$ 中互不相同的点，
并取定它们的齐次坐标。
对每个 $i$，取 $N - 1$ 个一次齐次多项式的乘积 $h_i$，
使得 $h_i (p_j) = 0$（$j \neq i$），且 $h_i (p_i) \neq 0$。
令 $d \geq \max \{ N - 1, m + n - 2 \}$，
则线性映射 $S_d \to k^N$，$h \mapsto (h (p_1), \dotsc, h (p_N))$ 是满射
（用 $h_i$ 乘以 $d - N + 1$ 次的齐次多项式，使其在 $p_i$ 处不为零）。
由于 $f$、$g$ 在这些点处为零，这一映射经过 $R_d$，
因此 $N \leq \dim_k R_d = mn$。

**第三步：选取坐标。**
由于 $k$ 是无限集，且 $C_f \cap C_g$ 只有有限个点，
可以取一次齐次多项式 $\ell$，使它在 $C_f \cap C_g$ 的每一点处都不为零。
作线性坐标变换，不妨设 $\ell = z$。

下证 $z$ 在 $R$ 中不是[[零因子]]，即若 $z h \in (f, g)$，则 $h \in (f, g)$。
记 $f_0 = f (x, y, 0)$、$g_0 = g (x, y, 0)$。
由于直线 $z = 0$ 上没有 $C_f \cap C_g$ 的点，
$f_0$、$g_0$ 在 $\mathbb{P}^1_k$ 中没有公共零点，
因而它们都非零（零多项式与 $\mathbb{P}^1_k$ 中的次数 $\geq 1$
的齐次多项式总有公共零点），
并且没有次数 $\geq 1$ 的公因子
（因为 $k$ 是代数闭域，这样的公因子在 $\mathbb{P}^1_k$ 中有零点）。
设 $z h = a f + b g$。令 $z = 0$，得 $a_0 f_0 + b_0 g_0 = 0$，
其中 $a_0 = a (x, y, 0)$、$b_0 = b (x, y, 0)$。
同第一步，存在 $c \in k [x, y]$，使得 $a_0 = c g_0$，$b_0 = - c f_0$。
于是 $a - c g$ 与 $b + c f$ 在 $z = 0$ 时为零，
可以写成 $a = c g + z a'$，$b = - c f + z b'$。
代入得 $z h = z (a' f + b' g)$，即 $h = a' f + b' g \in (f, g)$。

**第四步：与仿射坐标环比较。**
令 $\tilde{f} = f (x, y, 1)$，$\tilde{g} = g (x, y, 1)$，
$Q = k [x, y] / (\tilde{f}, \tilde{g})$。
对每个 $d$，考虑线性映射
\[
\varphi_d \colon R_d \longrightarrow Q,
\quad h \longmapsto h (x, y, 1) .
\]
它是单射：若 $h (x, y, 1) = u \tilde{f} + v \tilde{g}$，
其中 $u, v \in k [x, y]$，则对充分大的 $N$，有
\[
z^N h =
z^{N + d - m} u (x/z, y/z) \cdot f
+ z^{N + d - n} v (x/z, y/z) \cdot g ,
\]
且右边的两个系数都是多项式。
因此 $z^N h \in (f, g)$，由第三步，$h \in (f, g)$。

另外，$\varphi_{d+1} (z h) = \varphi_d (h)$，
因此 $\varphi_d$ 的像随 $d$ 增大而增大；
又因为任意 $r \in k [x, y]$ 都是某个 $z^{d} r (x/z, y/z)$ 的像，
所以这些像的并是 $Q$。
由第一步，$d \geq m + n - 2$ 时，这些像的维数都是 $mn$，
所以它们都等于 $Q$。
因此 $\dim_k Q = mn$。

**第五步：局部化。**
由第三步，$C_f \cap C_g$ 的所有点都在仿射平面 $z \neq 0$ 中，
因此 $C_f \cap C_g = \operatorname{Spec} Q$。
由于 $Q$ 是有限维 $k$-代数，它是 [[Artin 环]]，
因此同构于它在各个极大理想处的[[局部化]]的乘积：
\[
Q \simeq
\prod_{p \in C_f \cap C_g}
\mathcal{O}_{C_f \cap C_g, p} .
\]
比较两边的维数，即得
$\sum_{p} I_p (C_f, C_g) = \dim_k Q = mn$。
:::

## 例子

下面设 $k$ 是代数闭域，并使用 @thm:bezout 的记号。

::: example [两条直线]
在射影平面上，两条不同的直线恰好交于一点，此即定理于 $m = n = 1$ 的情形。
:::

::: example [有重合分支的曲线]
若 $f$、$g$ 有次数 $\geq 1$ 的公因子，
例如 $f = x y$、$g = x z$，
则 $C_f$ 与 $C_g$ 具有重合的[[不可约分支]]，从而定理不成立。
:::

::: example [直线与圆]
在[[实数]]域上，直线 $y = 2 z$ 与圆 $x^2 + y^2 = z^2$ 没有交点，
但在复数域上，它们交于 $[\pm \sqrt{3} \, \mathrm{i} : 2 : 1]$ 两点，
这与 Bézout 定理一致。
:::

::: example [抛物线与切线]
抛物线 $y z = x^2$ 与直线 $y = 0$ 只交于一点 $p = [0 : 0 : 1]$。
在仿射坐标中，
\[
I_p =
\dim_k k [x, y]_{(x, y)} / (y - x^2, y) =
\dim_k k [x]_{(x)} / (x^2) = 2 ,
\]
即切点的重数为 $2$。
此时交概形同构于 $\operatorname{Spec} k [x] / (x^2)$，
即沿切线方向的“二重点”。
:::

::: example [尖点三次曲线与切线]
三次曲线 $y^2 z = x^3$ 在 $p = [0 : 0 : 1]$ 处有一个[[尖点]]。
它与直线 $y = 0$ 只交于 $p$，相交重数是
\[
I_p =
\dim_k k [x, y]_{(x, y)} / (y^2 - x^3, y) =
\dim_k k [x]_{(x)} / (x^3) = 3 .
\]
:::

::: example [直线与 $m$ 次曲线]
在仿射平面上，对 $m$ 次多项式 $F (x)$，
直线 $y = 0$ 与曲线 $y = F (x)$ 恰好交于 $m$ 个点（计重数），
此即[[代数基本定理]]。
此时重数即 $F$ 中相应一次因式的重数，
无穷远点不可能是交点。
:::

::: example [两条抛物线]
设 $k$ 的特征不是 $2$。抛物线 $y z = x^2$ 与 $y z = - x^2$ 的交点为
$[0 : 0 : 1]$、$[0 : 1 : 0]$ 两点。
在 $[0 : 0 : 1]$ 处，取 $z = 1$，有
\[
(y - x^2, y + x^2) = (y, x^2) ,
\]
相交重数为 $2$；
在 $[0 : 1 : 0]$ 处，取 $y = 1$，同理有 $(z, x^2)$，相交重数也为 $2$，
故重数总和为 $4$。
在仿射平面中，这两条抛物线只在原点处相切，
而另两个交点在无穷远处：它们在无穷远点处也相切。
:::

::: example [两个圆与圆点]
设 $k = \mathbb{C}$。两个圆
\[
\begin{gathered}
  x^2 + y^2 + a_1 x z + b_1 y z + c_1 z^2 = 0 , \\
  x^2 + y^2 + a_2 x z + b_2 y z + c_2 z^2 = 0
\end{gathered}
\]
是两条二次曲线，因此按重数计有 $4$ 个交点。
然而，两个不同的圆在仿射平面中至多交于 $2$ 点。
这是因为所有圆都经过两个无穷远点 $[1 : \pm \mathrm{i} : 0]$，
称为**圆点**；
一般情况下，剩下的两个交点才是通常意义下的交点。

极端情况下，同心圆 $x^2 + y^2 = z^2$ 与 $x^2 + y^2 = 4 z^2$
在仿射平面中没有交点。
它们的交点满足 $z^2 = 0$、$x^2 + y^2 = 0$，
即两个圆点，并且在每个圆点处的相交重数都是 $2$，
即同心圆在两个圆点处相切。
:::

## 推论

::: corollary {@cor:at-most}
设 $k$ 是域，不一定[[代数闭域|代数闭]]。
设 $f, g \in k [x, y]$ 的次数分别为 $m, n \geq 1$，
且没有次数 $\geq 1$ 的公因子。则 $f$、$g$ 在 $k^2$ 中的公共零点至多有 $mn$ 个。
:::

::: proof
将 $f$、$g$ 齐次化为 $\hat{f}$、$\hat{g} \in k [x, y, z]$，
则 $\hat{f}$、$\hat{g}$ 也没有次数 $\geq 1$ 的公因子。
多项式是否有公因子不随域扩张改变
（这可以化为某个系数在 $k$ 中的线性方程组是否有非零解的问题），
因此在 $k$ 的[[代数闭包]]上，$\hat{f}$、$\hat{g}$ 仍没有公因子。
由 @thm:bezout，$C_{\hat{f}} \cap C_{\hat{g}}$ 至多有 $mn$ 个点。
:::

特别地，若两条平面代数曲线的公共点多于 $mn$ 个，则它们有重合的不可约分支。

## 推广

### 射影空间中的超曲面

Bézout 定理对 $\mathbb{P}^n$ 中的 $n$ 个[[射影超曲面]]同样成立。

::: theorem {@thm:bezout-hypersurfaces}
设 $k$ 是代数闭域，$f_1, \dotsc, f_n \in k [x_0, \dotsc, x_n]$
是齐次多项式，次数分别为 $d_1, \dotsc, d_n \geq 1$。
若交概形 $V (f_1, \dotsc, f_n) \subset \mathbb{P}^n_k$ 只有有限个点，则
\[
\sum_{p} I_p = d_1 \cdots d_n ,
\]
其中 $p$ 取遍 $V (f_1, \dotsc, f_n)$ 的点，
相交重数 $I_p$ 定义为
$V (f_1, \dotsc, f_n)$ 在 $p$ 处的局部环的长度。
:::

证明的思路与平面情形相同：此时 $f_1, \dotsc, f_n$ 是 $k [x_0, \dotsc, x_n]$ 中的
[[正则序列]]，由此可以算出 $k [x_0, \dotsc, x_n] / (f_1, \dotsc, f_n)$ 的
[[Hilbert 多项式]]是常数 $d_1 \cdots d_n$。

### 射影簇的情形

更一般地，设 $X$、$Y$ 是 $\mathbb{P}^n_k$ 中的[[射影簇]]，
且它们 **[[真相交]]**，即 $X \cap Y$ 的每个不可约分支的维数都是
$\dim X + \dim Y - n$。
则
\[
\sum_{Z} i (X, Y; Z) \deg Z = \deg X \cdot \deg Y ,
\]
其中 $Z$ 取遍 $X \cap Y$ 的不可约分支，$\deg$ 表示射影簇的次数，
$i (X, Y; Z)$ 是 $X$、$Y$ 沿 $Z$ 的相交重数。
当 $X$、$Y$ 之一是超曲面时，见 [@Hartshorne1977, 定理 I.7.7]；
一般情形下，相交重数需要用 Serre 的 Tor 公式定义，见 [@Fulton1984]。

用[[相交论]]的语言来说，$\mathbb{P}^n$ 的[[周环]]是
$\mathbb{Z} [h] / (h^{n+1})$，其中 $h$ 是[[超平面类]]，
而 $d$ 次超曲面的类是 $d h$。
Bézout 定理就是说，$n$ 个次数为 $d_1, \dotsc, d_n$ 的超曲面的类的乘积是
$d_1 \cdots d_n \, h^n$，即 $d_1 \cdots d_n$ 个点的类。

### 其他空间

在其他空间中，也有类似的计数结论。
例如，在 $\mathbb{P}^1 \times \mathbb{P}^1$ 中，
双次数分别为 $(a, b)$、$(c, d)$ 的两条曲线若没有公共分支，
则按重数计恰好交于 $a d + b c$ 个点。

## 应用

- [[椭圆曲线]]的群结构：
  过三次平面曲线上两点的直线，与曲线按重数计恰好交于三点，
  由此可以定义曲线上的加法。

- [[Pascal 定理]]、[[Cayley–Bacharach 定理]]等关于平面曲线的经典结论，
  都可以用 Bézout 定理证明。

- [[Apollonius 问题]]：
  与三个给定一般位置的圆相切的圆的模空间是 $\mathbb{P}^3$ 中三个二次曲面的交，
  由 @thm:bezout-hypersurfaces，在一般位置下共有 $2^3 = 8$ 个。

## 参考文献

```bibliography
Fulton1969:
  type: book
  author: William Fulton
  title: 'Algebraic Curves: An Introduction to Algebraic Geometry'
  year: 1969
  publisher: W. A. Benjamin

Hartshorne1977:
  type: book
  author: Robin Hartshorne
  title: Algebraic Geometry
  year: 1977
  series: Graduate Texts in Mathematics
  volume: 52
  publisher: Springer

Fulton1984:
  type: book
  author: William Fulton
  title: Intersection Theory
  year: 1984
  publisher: Springer
```

```terms
Bézout 定理:
  en: Bézout's theorem
  fr: théorème de Bézout :m
  de: Satz von Bézout :m

相交重数:
  en: intersection multiplicity
  fr: multiplicité d'intersection :f
  de: Schnittmultiplizität :f

圆点:
  en: circular points at infinity
```
