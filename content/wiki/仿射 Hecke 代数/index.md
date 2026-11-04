---
title: 仿射 Hecke 代数
aliases: [扩展仿射 Hecke 代数, AHA]
categories: [几何表示论, 量子代数, 代数群理论]
navboxes: [几何表示论, 量子代数, 代数群理论]
---

在[[表示论]]中，**仿射 Hecke 代数**是[[扩展仿射 Weyl 群]]的 [[Hecke 代数]]。
正如 Hecke 代数是 [[Weyl 群]]的[[群代数]]的单参数[[形变]]，
仿射 Hecke 代数是扩展仿射 Weyl 群
\[
\widetilde{W} = W \ltimes X
\]
的群代数的形变，
其中 $W$ 是 Weyl 群，$X$ 是 $W$ 所作用的[[晶格]]，
例如[[约化群]]中[[极大环面]]的[[余特征群]]，
而 $X$ 中的元素在 $\widetilde{W}$ 中对应于平移。

与 [[Hecke 代数]]一样，仿射 Hecke 代数以一组元素 $(T_w)_{w \in \widetilde{W}}$ 为基，
而[[单反射]] $s$ 满足的反射关系 $s^2 = 1$
则成为仿射 Hecke 代数中的反射关系
\[
(T_s - q) (T_s + 1) = 0 .
\]

因为[[扩展仿射 Weyl 群]]一般不是 [[Coxeter 群]]，
所以 [[Hecke 代数]]的通常定义并不直接适用，
而需要重新写下仿射 Hecke 代数的定义，但两者定义非常相似。
另一方面，[[仿射 Weyl 群]]是 Coxeter 群，
有的文献中也把仿射 Weyl 群的 Hecke 代数称为仿射 Hecke 代数。
下文将解释二者的关系。

仿射 Hecke 代数的原始想法来自 [[$p$ 进群]]的表示论：
对 [[$p$ 进域]]上的[[分裂约化群]] $G$，
其 [[Iwahori 子群]] $I$ 的双陪集 $I \backslash G / I$
上的卷积代数就是仿射 Hecke 代数，
而 $G$ 的具有非零 $I$-不变向量的不可约表示恰好对应于这一代数的单模。
Kazhdan 与 Lusztig 利用 [[Langlands 对偶群]]的 [[Steinberg 簇]]上的等变凝聚层分类了这些单模，
这是[[局部 Langlands 对应]]的一个重要特例。
这样，仿射 Hecke 代数有两种几何实现，
即[[仿射旗簇]]上的函数与 Steinberg 簇上等变凝聚层的 Grothendieck 群。
Bezrukavnikov [@Bezrukavnikov2016]
将二者之间的同构[[范畴化]]，这是范畴化局部 Langlands 对应的重要例子。

## 定义

仿射 Hecke 代数可以像 Hecke 代数那样，用一组基及其乘法关系定义，
也可以定义为 $p$ 进群上的卷积代数。
下面先介绍扩展仿射 Weyl 群，再依次给出这两种描述。

### 扩展仿射 Weyl 群

设 $(X, \Phi, X^\vee, \Phi^\vee)$ 是[[根数据]]，
其中每个根 $\alpha \in \Phi$ 有对偶根 $\alpha^\vee \in X^\vee$。
记 $W$ 为其 Weyl 群，
它由反射 $s_\alpha (x) = x - \langle x, \alpha^\vee \rangle \alpha$ 生成。
取定正根之集 $\Phi^+$，相应的单反射之集记为 $S$。

**[[扩展仿射 Weyl 群]]**定义为半直积
\[
\widetilde{W} = W \ltimes X .
\]
其中 $x \in X$ 对应的元素记为 $t_x$。
$\widetilde{W}$ 作用在 $V = X \otimes \mathbb{R}$ 上：
$W$ 线性地作用，$t_x$ 作用为平移 $v \mapsto v + x$。
考虑 $V$ 的以下超平面：
\[
H_{\alpha, k} = \{ v \in V \mid \langle v, \alpha^\vee \rangle = k \} ,
\quad \alpha \in \Phi^+ , \ k \in \mathbb{Z} .
\]
则 $\widetilde{W}$ 的作用置换这些超平面。
我们也考虑这些超平面围成的其中一个区域
\[
C = \{ v \in V \mid
\text{对任意 } \alpha \in \Phi^+ , \
0 < \langle v, \alpha^\vee \rangle < 1 \} .
\]
对 $w \in \widetilde{W}$，定义其**长度** $\ell (w)$
为将 $C$ 与 $w (C)$ 隔开的超平面 $H_{\alpha, k}$ 的个数。

关于上述超平面的反射生成 $\widetilde{W}$ 的子群
\[
W_\mathrm{aff} = W \ltimes \mathbb{Z} \Phi ,
\]
称为**[[仿射 Weyl 群]]**。
它是 [[Coxeter 群]]，其生成元集 $S_\mathrm{aff}$
由关于 $C$ 的边界所在的各超平面的反射组成，
且 $\ell$ 限制在 $W_\mathrm{aff}$ 上就是 Coxeter 群中的长度。

$\widetilde{W}$ 的所有长度为 $0$ 的元素构成子群 $\Omega \simeq X / \mathbb{Z} \Phi$。
该子群保持 $C$，且满足
\[
\widetilde{W} = W_\mathrm{aff} \rtimes \Omega .
\]
见 [@Lusztig1989, 1.4–1.5]。

### 生成元与关系

::: definition [仿射 Hecke 代数] {@def}
记号同上。**仿射 Hecke 代数** $\mathcal{H} (\widetilde{W})$
是 $\mathbb{Z}[q^{\pm 1}]$ 上的[[结合代数]]，
它作为 $\mathbb{Z}[q^{\pm 1}]$-模有一组基 $(T_w)_{w \in \widetilde{W}}$，
其乘法由以下关系确定：

- 若 $w, w' \in \widetilde{W}$ 满足 $\ell (w w') = \ell (w) + \ell (w')$，
  则 $T_w T_{w'} = T_{w w'}$。

- 对 $s \in S_\mathrm{aff}$，$T_s^2 = (q - 1) T_s + q$。
:::

下面，我们讨论仿射 Hecke 代数 $\mathcal{H} (\widetilde{W})$
与[[仿射 Weyl 群]]的 Hecke 代数
$\mathcal{H} (W_\mathrm{aff}, S_\mathrm{aff})$
的关系。

$\widetilde{W}$ 的每个元素可唯一地写成 $w \omega$ 的形式，
其中 $w \in W_\mathrm{aff}$，$\omega \in \Omega$，
且 $\ell (w \omega) = \ell (w)$，从而 $T_{w \omega} = T_w T_\omega$。
而 $T_\omega$ 可逆，且 $T_\omega T_s T_\omega^{-1} = T_{\omega s \omega^{-1}}$。
故而有半直积
\[
\mathcal{H} (\widetilde{W}) \simeq
\mathcal{H} (W_\mathrm{aff}, S_\mathrm{aff}) \rtimes
\Omega ,
\]
其中 $\Omega$ 的作用是对 $S_\mathrm{aff}$ 进行置换。
这里，右边的代数作为左 $\mathcal{H} (W_\mathrm{aff}, S_\mathrm{aff})$-模
是以 $\Omega$ 为基的自由模。
如引言所述，
有的文献也将 $\mathcal{H} (W_\mathrm{aff}, S_\mathrm{aff})$ 称为仿射 Hecke 代数。

另外，有限 Weyl 群的 Hecke 代数 $\mathcal{H} (W, S)$
是 $\mathcal{H} (\widetilde{W})$ 的子代数，
但在 $\mathcal{H} (\widetilde{W})$ 中，
它与平移对应的元素之间的交换关系比在群代数中复杂，
参见 @thm:bernstein。

### 卷积 {@sec:conv}

与有限 [[Hecke 代数]]的情形类似，
仿射 Hecke 代数也是群上的卷积代数，这也是其原始想法。

设 $F$ 是非 Archimedes [[局部域]]，其整数环为 $\mathcal{O}_F$，剩余域为 $\mathbb{F}_q$。
设 $G$ 是 $\mathcal{O}_F$ 上的[[分裂约化群]]，
$T \subset B \subset G$ 分别是分裂[[极大环面]]与 [[Borel 子群]]。
令 $I \subset G (F)$ 为 $B$ 对应的 [[Iwahori 子群]]，
即 $B (\mathbb{F}_q)$ 在约化映射 $G (\mathcal{O}_F) \to G (\mathbb{F}_q)$ 下的原像。
取 $X$ 为 $T$ 的[[余特征群]]，$\Phi$ 为 $G$ 的[[余根]]之集。
则 $\widetilde{W} \simeq N_G (T) (F) / T (\mathcal{O}_F)$，
且由仿射 [[Bruhat 分解]]，
$G (F)$ 是双陪集 $I w I$（$w \in \widetilde{W}$）的无交并。

$G (F)$ 上关于左、右 $I$-作用都不变的紧支复值函数关于卷积
\[
(f_1 * f_2) (g) = \int_{G (F)} f_1 (h) \, f_2 (h^{-1} g) \, dh
\]
构成代数，记为 $\mathcal{H} (G (F), I)$，
其中 [[Haar 测度]]取为使 $I$ 的测度为 $1$。
它以双陪集的指示函数 $1_{I w I}$（$w \in \widetilde{W}$）
为一组基，且有代数同构
\[
\begin{aligned}
  \mathcal{H} (\widetilde{W}) \otimes_{\mathbb{Z}[q^{\pm 1}]} \mathbb{C}
  & \overset{\sim}{\longrightarrow} \mathcal{H} (G (F), I) , \\
  T_w & \longmapsto 1_{I w I} ,
\end{aligned}
\]
其中 $\mathbb{Z}[q^{\pm 1}] \to \mathbb{C}$ 将变量 $q$ 映为剩余域的元素个数 $q$。
对 $p$ 进 Chevalley 群，这由 Iwahori 与 Matsumoto 证明
[@IwahoriMatsumoto1965, §3]；
一般情形见 [@HKP2010, 1.2、7.2]。

## 例子

::: example [环面]
设 $\Phi = \varnothing$，则 $W$ 是平凡群，$\widetilde{W} = X$，
且所有元素的长度都是 $0$。
因此 $\mathcal{H} (\widetilde{W})$ 就是群代数 $\mathbb{Z}[q^{\pm 1}][X]$，
即 [[Laurent 多项式环]]。
这对应于 $p$ 进环面 $T (F)$，其 Iwahori 子群是 $T (\mathcal{O}_F)$，
而 $T (F) / T (\mathcal{O}_F) \simeq X$。
:::

::: example [秩为一的情形] {@ex:rank1}
设 $X = \mathbb{Z}$，$\Phi = \{ \pm \alpha \}$，
则 $W = \{ 1, s \}$，其中 $s (v) = -v$。

- 若 $\alpha = 1$，则 $\alpha^\vee = 2$，
  各超平面 $H_{\alpha, k}$ 就是整数点与半整数点 $k/2$，
  并且 $C = \mathopen]0, 1/2\mathclose[$。
  此时 $X = \mathbb{Z} \Phi$，$\widetilde{W} = W_\mathrm{aff}$ 是[[无穷二面体群]]，
  由关于 $0$ 的反射 $s_0 = s$
  与关于 $1/2$ 的反射 $s_1$ 生成，且 $s_0 s_1$ 的阶为无穷。
  因此 $\mathcal{H} (\widetilde{W})$ 由 $T_{s_0}$、$T_{s_1}$ 生成，
  其关系只有反射关系。
  这对应于 $p$ 进群 $\mathrm{SL}_2$。

- 若 $\alpha = 2$，则 $\alpha^\vee = 1$，各超平面就是整点，
  $C = \mathopen]0, 1\mathclose[$。
  此时 $\Omega = \{ 1, \omega \}$，
  其中 $\omega$ 是关于 $1/2$ 的反射，
  它交换关于 $0$、$1$ 的反射 $s_0$、$s_1$。
  因此 $\mathcal{H} (\widetilde{W})$ 由 $T_{s_0}$、$T_{s_1}$ 与 $T_\omega$ 生成，
  其关系为反射关系再加上
  $T_\omega^2 = 1$ 和 $T_\omega T_{s_0} T_\omega^{-1} = T_{s_1}$。
  这对应于 $p$ 进群 $\mathrm{PGL}_2$。
:::

::: example [$\mathrm{GL}_n$]
设 $X = X^\vee = \mathbb{Z}^n$，二者的标准基 $e_1, \ldots, e_n$ 互为对偶基，
$\Phi = \{ e_i - e_j \mid i \neq j \}$，
且 $e_i - e_j$ 的对偶根是 $e_i - e_j \in X^\vee$。
这是 $\mathrm{GL}_n$ 的根数据，它与其对偶相同。
此时 $W = \mathfrak{S}_n$ 通过置换坐标作用在 $X$ 上。

取正根为 $e_i - e_j$（$i < j$），
记 $T_i = T_{s_i}$，其中 $s_i$ 是[[对换]] $(i \ \ i + 1)$，
并记 $X_i$ 为下面 @thm:bernstein 中的 $\theta_{e_i}$。
则由该定理，
$\mathcal{H} (\widetilde{W}) \otimes_{\mathbb{Z}[q^{\pm 1}]} \mathbb{Z}[q^{\pm 1/2}]$
由 $T_1, \ldots, T_{n - 1}$ 与可逆元 $X_1, \ldots, X_n$ 生成，定义关系为
\[
\begin{aligned}
  T_i^2 & = (q - 1) T_i + q , \\
  T_i T_{i + 1} T_i & = T_{i + 1} T_i T_{i + 1} , \\
  T_i T_j & = T_j T_i \quad (|i - j| \geq 2) , \\
  X_i X_j & = X_j X_i , \\
  T_i X_j & = X_j T_i \quad (j \neq i, i + 1) , \\
  T_i X_{i + 1} T_i & = q X_i .
\end{aligned}
\]
其中前三条是置换群 $\mathfrak{S}_n$ 的 Hecke 代数的定义关系。
:::

## 性质

### Bernstein 表现

设 $(X, \Phi, X^\vee, \Phi^\vee)$ 是[[根数据]]，
记号同定义一节。

在 $q = 1$ 时，群代数 $\mathbb{Z}[\widetilde{W}]$
由 $\mathbb{Z}[W]$ 与平移构成的交换的子代数 $\mathbb{Z}[X]$ 生成，
二者之间的关系为 $t_x s = s \, t_{s (x)}$。
下面的定理是说，仿射 Hecke 代数同样由
$\mathcal{H} (W, S)$ 与一个同构于 $\mathbb{Z}[X]$ 的交换子代数生成：

::: theorem [Bernstein 表现] {@thm:bernstein}
考虑系数 $\mathbb{Z}[q^{\pm 1/2}]$ 的仿射 Hecke 代数
$\mathcal{H} = \mathcal{H} (\widetilde{W}) \otimes_{\mathbb{Z}[q^{\pm 1}]} \mathbb{Z}[q^{\pm 1/2}]$。

称 $x \in X$ 是**支配**的，
如果对所有 $\alpha \in \Phi^+$ 有 $\langle x, \alpha^\vee \rangle \geq 0$。
对支配的 $x$，令 $\theta_x = q^{-\ell (t_x) / 2} \, T_{t_x}$；
对一般的 $x \in X$，将其写成 $x = y - z$，其中 $y$、$z$ 是支配的，
并令 $\theta_x = \theta_y \theta_z^{-1}$。则：

1. $\theta_x$ 不依赖于 $y$、$z$ 的选取，
   且对 $x, x' \in X$，$\theta_x \theta_{x'} = \theta_{x + x'}$。

2. $(T_w \theta_x)_{w \in W, \, x \in X}$ 构成
   $\mathcal{H}$ 的一组基。

3. 对 $x \in X$ 与单根 $\alpha$，记 $s = s_\alpha$，则
   \[
   \theta_x T_s - T_s \theta_{s (x)}
   = (q - 1) \frac{\theta_x - \theta_{s (x)}}{1 - \theta_{-\alpha}} .
   \]
:::

见 [@Lusztig1989, 3.3、命题 3.6、3.7]。
由于 $x - s (x) = \langle x, \alpha^\vee \rangle \alpha$，
最后一式右边的分子可以被分母整除，因此它是各 $\theta_y$ 的线性组合。
在 $q = 1$ 时，它变为上述关系 $t_x s = s \, t_{s (x)}$。

### 中心

由于扩展仿射 Weyl 群是无穷的，仿射 Hecke 代数的秩也是无穷的。
但它具有很大的中心：

::: theorem [Bernstein] {@thm:center}
记号同 @thm:bernstein。
则 $\mathcal{H}$
的中心由所有 $W$-不变的线性组合 $\sum_{x \in X} c_x \theta_x$ 组成，
即同构于 $\mathbb{Z}[q^{\pm 1/2}][X]^W$。
:::

见 [@Lusztig1989, 命题 3.11、3.12]。
由 @thm:bernstein，仿射 Hecke 代数是其中心上的有限生成模。
因此，将 $q$ 取为复数后，它的单模都是有限维的，
且中心通过一个特征作用在其上，
这样的中心特征对应于环面
$\operatorname{Hom} (X, \mathbb{C}^\times)$ 中的 $W$-轨道。

### 与 $p$ 进群的表示

仿射 Hecke 代数的模能描述 $p$ 进群的一类重要的表示。

记号同 @sec:conv 一节。
对 $G (F)$ 的[[容许表示]] $V$，
由 $I$-不变向量构成的子空间 $V^I$ 是有限维的，
且 $\mathcal{H} (G (F), I)$ 通过积分作用在其上。
下面的定理是说，满足 $V^I \neq 0$ 的不可约表示完全由这一模决定：

::: theorem [Borel] {@thm:borel}
记号同上，并设 $G$ 是半单群。
则 $V \mapsto V^I$ 给出以下二者之间的一一对应：

- $G (F)$ 的满足 $V^I \neq 0$ 的不可约容许表示的同构类。

- $\mathcal{H} (G (F), I)$ 的有限维单模的同构类。
:::

见 [@Borel1976, 定理 4.10、推论 4.11]。

因此，分类这些 $G (F)$ 的表示就归结为分类仿射 Hecke 代数的单模。
当 $G$ 的中心连通时，Kazhdan 与 Lusztig 给出了这一分类 [@KazhdanLusztig1987]。
这一结果原是 [[Deligne–Langlands 猜想]]，它是[[局部 Langlands 对应]]的特例。

### 范畴化

上述 Deligne–Langlands 猜想的证明基于仿射 Hecke 代数的一种范畴化。
设 $G^\vee$ 是复约化群，其[[导群]]单连通。
记 $Z$ 为其 **[[Steinberg 簇]]**，
其点对应于三元组 $(u, B, B')$，
其中 $u \in G^\vee$ 是幂幺元，$B$、$B'$ 是包含 $u$ 的 Borel 子群。
$Z$ 带有 $G^\vee \times \mathbb{C}^\times$ 的作用，
其等变[[凝聚层]]的导出范畴即**仿射 Hecke 范畴**，
其 [[Grothendieck 群]]带有仿射 Hecke 代数的左、右作用，
它作为双模同构于仿射 Hecke 代数本身 [@KazhdanLusztig1987, 定理 3.5]。

另一方面，如前文所述，
仿射 Hecke 代数也可以由[[仿射旗簇]] $G (F) / I$ 上的 $I$-不变函数实现。
按照[[层–函数对应]]，我们考虑仿射旗簇上的 $I$-等变 [[$\ell$ 进层]]的导出范畴，
这给出了仿射 Hecke 代数的另一种范畴化。

Bezrukavnikov 证明，在 $F = k (\!(t)\!)$（$k$ 是代数闭域）的情形，
这样得到的两个三角范畴是等价的，
其中凝聚层一侧需将 $Z$ 换成其导出版本，并且只考虑 $G^\vee$-等变性；
这一等价与两个范畴上各自由卷积给出的[[幺半范畴|幺半结构]]相容 [@Bezrukavnikov2016, 定理 1]。
这是[[几何 Langlands 纲领]]的局部理论中的重要结果。

## 参考文献

原始文献：

```bibliography
IwahoriMatsumoto1965:
  type: article
  author: ['Iwahori, Nagayoshi', 'Matsumoto, Hideya']
  title: On some Bruhat decomposition and the structure of the Hecke rings of $p$-adic Chevalley groups
  journaltitle: Publ. Math. IHÉS
  volume: 25
  year: 1965
  pages: 5--48
  doi: 10.1007/BF02684396
Borel1976:
  type: article
  author: 'Borel, Armand'
  title: Admissible representations of a semi-simple group over a local field with vectors fixed under an Iwahori subgroup
  journaltitle: Invent. Math.
  volume: 35
  year: 1976
  pages: 233--259
  doi: 10.1007/BF01390139
KazhdanLusztig1987:
  type: article
  author: ['Kazhdan, David', 'Lusztig, George']
  title: Proof of the Deligne–Langlands conjecture for Hecke algebras
  journaltitle: Invent. Math.
  volume: 87
  year: 1987
  pages: 153--215
  doi: 10.1007/BF01389157
Lusztig1989:
  type: article
  author: 'Lusztig, George'
  title: Affine Hecke algebras and their graded version
  journaltitle: J. Amer. Math. Soc.
  volume: 2
  year: 1989
  pages: 599--635
  doi: 10.1090/S0894-0347-1989-0991016-9
Bezrukavnikov2016:
  type: article
  author: 'Bezrukavnikov, Roman'
  title: On two geometric realizations of an affine Hecke algebra
  journaltitle: Publ. Math. IHÉS
  volume: 123
  year: 2016
  pages: 1--67
  doi: 10.1007/s10240-015-0077-x
  arxiv: '1209.0403'
```

综述：

```bibliography
HKP2010:
  type: article
  label: HKP
  author: ['Haines, Thomas J.', 'Kottwitz, Robert E.', 'Prasad, Amritanshu']
  title: Iwahori–Hecke algebras
  journaltitle: J. Ramanujan Math. Soc.
  volume: 25
  number: 2
  year: 2010
  pages: 113--145
  arxiv: 'math/0309168'
```

```terms
仿射 Hecke 代数:
  en: affine Hecke algebra
  fr: algèbre de Hecke affine :f
  ja: アフィン Hecke 環<かん>
扩展仿射 Weyl 群:
  en: extended affine Weyl group
Bernstein 表现:
  en: Bernstein presentation
仿射 Hecke 范畴:
  en: affine Hecke category
```
