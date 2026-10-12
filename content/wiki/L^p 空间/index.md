---
title: $L^p$ 空间
aliases: [Lp 空间, ℓp 空间, '$\ell^p$ 空间']
notices:
  - name: 问题
    items:
      - 'Hölder 不等式中 $p = 1$、$q = \infty$ 时的取等条件似乎应为 $|g|$（而不是 $g$）在 $f$ 的零点集以外几乎处处等于 $\|g\|_\infty$。'
      - '“嵌入”一节中关于 $L^p(X)\supseteq L^q(X)$ 的命题，其 (2) 蕴含 (3) 的证明用到 $\sum_{n} n^{-p} < +\infty$，似乎在 $p = 1$ 时不成立。'
      - '“与积分算子有关的不等式”一节中的两个命题与一般形式的 Minkowski 不等式，以及 Riesz–Thorin 插值定理，缺少证明。'
      - '“推广”一节需要扩充，例如弱 $L^p$ 空间、流形上的 $L^p$ 空间、向量值函数的 $L^p$ 空间等。'
categories: [实分析, 测度论, 泛函分析]
navboxes: [微积分学, 测度论, 泛函分析]
---

在[[分析学]]中，**$L^p$ 空间**是一类重要的函数空间。
给定[[测度空间]] $X$ 以及[[实数]] $p \geq 1$，
函数 $f \colon X \to \mathbb{R}$ 的 **$L^p$ 范数**定义为 [[Lebesgue 积分]]
\[
\| f \|_p = \biggl(
  \int_X |f (x)|^p \, \mathrm{d} x
\biggr)^{1/p},
\]
所有使得 $\| f \|_p$ 有限的函数 $f$ 构成空间 $L^p (X)$。
这一定义也能推广到 $p = \infty$ 的情况，以得到空间 $L^\infty (X)$。
这些 $L^p$ 空间都是 [[Banach 空间]]（@RF），并且当 $p = 2$ 时，
$L^2$ 空间还是 [[Hilbert 空间]]。

$L^p$ 范数可以看成 [[Euclid 向量空间]]中 Euclid 范数的推广。
具体而言，Euclid 向量空间 $\mathbb{R}^n$ 可以视为集合
$X = \{ 1, 2, \dotsc, n \}$ 到 $\mathbb{R}$ 的函数构成的空间。
采用 $X$ 上的[[计数测度]]，
将函数空间的点写成坐标 $x = (x_1, \dotsc, x_n)$，则其 $L^p$ 范数为
\[
\| x \|_p = (|x_1|^p + \cdots + |x_n|^p)^{1/p},
\]
而 $p = 2$ 的情况即为 Euclid 范数。

$L^p$ 空间的一个特例是 **$\ell^p$ 空间**，
即取 $X = \mathbb{Z}_{>0}$ 并采用[[计数测度]]而得到的 $L^p$ 空间。
其元素可以视为形如 $x = (x_1, x_2, \dotsc)$ 并使得以下范数有限的实数列：
\[
\| x \|_p = \biggl(
  \sum_{i=1}^\infty |x_i|^p
\biggr)^{1/p}.
\]

## 定义

$L^p$ 空间有[[实数|实]]、[[复数|复]]两种版本。
我们记 $\mathbb{K} = \mathbb{R}$ 或 $\mathbb{C}$，并统一地叙述两个版本的定义。
我们采用[[测度论]]中常用的记号，使用包含 $+\infty$ 的[[闭区间]]，
例如 $[0, +\infty] = \mathbb{R}_{\geq 0} \cup \{ \infty \}$。

::: definition [$L^p$ 范数] {@Lp-范数}
设

- $(X, \mathcal{A}, \mu)$ 是[[测度空间]]。

- $f \colon X \to \mathbb{K}$ 是[[可测函数]]。

- $p \in \mathopen{]} 0, +\infty]$。

则 $f$ 的 **$L^p$ 范数**（或 **$p$-范数**），
记为 $\| f \|_p \in [0, +\infty]$，定义如下：

- 若 $0 < p < \infty$，定义
  \[
  \| f \|_p = \left( \int_X |f|^p \, \mathrm{d}\mu \right)^{1/p},
  \]
  其中的积分是 [[Lebesgue 积分]]。

- 若 $p = \infty$，定义
  \[
  \|f\|_{\infty} = \inf \{
    a \in \mathbb{R}_{\geq 0} \mid
    |f (x)| \leq a \text{ 对几乎所有 } x \in X \text{ 成立}
  \}.
  \]
  当 $\mu (X) > 0$ 时，这也就是 $|f|$ 的[[本质上确界]]。
  此时，$L^\infty$ 范数也称为**一致范数**。

:::

虽然 $L^p$ 范数称为[[范数]]，
但它们尚且还不是真正的范数。有两个主要问题：

- 对上述函数 $f$，即使 $\| f \|_p = 0$，也不一定有 $f = 0$，
  而只能得出 $f$ [[几乎处处]]等于 $0$。

- 当 $p < 1$ 时，[[三角不等式]]并不成立。
  事实上，只要 $X$ 中存在不交的正测度集 $E, F \subset X$，
  令 $f, g$ 分别为其[[指示函数]]，则
  $\| f + g \|_p > \| f \|_p + \| g \|_p$。

上述第一条不难解决，解决方法是将几乎处处相等的函数直接视为同一个函数。
这样，几乎处处等于 $0$ 的函数就被视为 $0$。
当 $p \in [1, +\infty]$ 时，没有上述第二条问题，
则 $L^p$ 范数确实定义了 $L^p$ 空间上的范数。具体的定义陈述如下。

::: definition [$L^p$ 空间]
设 $(X, \mathcal{A}, \mu)$ 是[[测度空间]]，设 $p \in \mathopen{]} 0, +\infty]$。
定义 $X$ 上的 **$L^p$ 空间**为 $\mathbb{K}$-[[向量空间]]
\[
L^p (X; \mathbb{K}) = \bigl\{
  f \colon X \to \mathbb{K} \bigm|
  f \text{ 可测, } \| f \|_p < +\infty
\bigr\} \big/ N,
\]
其中 $\| f \|_p$ 是 @Lp-范数 中的 $L^p$ 范数，
$N$ 是由所有[[几乎处处]]为 $0$ 的可测函数构成的子空间，
这里取了关于 $N$ 的[[商向量空间]]。
无歧义时，该空间也常记为 $L^p (X)$，或直接简记为 $L^p$。

当 $p \in [1, +\infty]$ 时，$L^p$ 范数
定义了 $L^p (X; \mathbb{K})$ 上的[[范数]]，
从而使该 $L^p$ 空间成为 [[Banach 空间]]。
:::

上述定义中，最后一个断言将在 @RF 中证明。

## 例子

- 对任意[[集合]] $X$，采用 $X$ 上的[[计数测度]]，
  得到的 $L^p$ 空间称为 **$\ell^p$ 空间**，
  记为 $\ell^p (X; \mathbb{K})$ 或 $\ell^p (X)$。

  特别地，取 $X = \mathbb{Z}_{>0}$ 得到的
  $\ell^p$ 空间常直接记为 $\ell^p$，这也是所有使得
  \[
  \|x\|_p = \left(\sum_{n=1}^\infty |x_n|^p \right)^{1/p}
  \]
  收敛的序列 $x = (x_n)_{n \geq 1}$ 的集合。

- [[概率空间]] $(\Omega, \mathcal{F}, \mathbb{P})$
  上的 $L^p$ 空间可以写成
  \[
  L^p (\Omega; \mathbb{K}) = \{
    X \colon \Omega \to \mathbb{K} \mid
    X \text{ 是随机变量, } \mathbb{E} (|X|^p) < \infty
  \}.
  \]

## 性质

以下设 $(X, \mathcal{A}, \mu)$ 是[[测度空间]]。

### 基本性质

::: theorem [Hölder 不等式] {@H}
设 $1 \leq p \leq \infty$，$q$ 满足 $1/p + 1/q = 1$，
即 $p, q$ 互为[[共轭指数]]，
且 $f,g$ 是 $X$ 上的可测函数。则
\[
\|fg\|_1 \leq \|f\|_p \|g\|_q.
\]
特别地，如果 $f \in L^p, g\in L^q$，则 $fg \in L^1$。等号成立条件描述如下：

- 如果 $1 < p,q < \infty$，则等号成立当且仅当 $|f|^p$ 和 $|g|^q$ 几乎处处成比例。

- 如果 $p = 1, q = \infty$，则等号成立当且仅当 $g$ 在 $f$ 的零点集以外几乎处处等于 $\|g\|_\infty$。

:::

::: proof
如果 $\|f\|_p, \|g\|_q$ 中有等于 $0$ 或 $\infty$ 的，则不等式显然成立，下面假设
不是这样。分两个部分证明。

- 如果 $1 < p,q < \infty$，注意到将 $f,g$ 乘以一个非零实数不影响结果，不妨设
  $\|f\|_p = \|g\|_q = 1$。此时根据 [[Young 不等式]]：
  \[
  |f(x)g(x)| \leq p^{-1}|f(x)|^p + q^{-1}|g(x)|^q,
  \]
  两边积分：
  \[
  \|fg\|_1 \leq p^{-1} \int |f|^p + q^{-1} \int |g|^q = 1 = \|f\|_p \|g\|_q,
  \]
  不等式得证。根据 [[Young 不等式]]的取等条件就得到取等条件。

- 如果 $p = 1, q = \infty$，对任意 $a > 0$，设 $E_a = \{x \mid |g(x)| > a\}$。
  如果 $\mu(E_a) = 0$，则
  \[
  \|fg\|_1 = \int |fg| = \int_{X \backslash E_a} |fg| \leq a \int_{X \backslash E_a} |f| \leq a\|f\|_1,
  \]
  对 $a$ 取下确界得 $\|fg\|_1 \leq \|f\|_1 \|g\|_\infty$。不难得到取等条件。

:::

关于此不等式还可以参见条目 [[Hölder 不等式]]。下面的结论实际上就是 $L^p$ 空间的三角不等式。

::: theorem [Minkowski 不等式] {@M}
如果 $1 \leq p \leq \infty$，$f,g \in L^p$，则
\[
\|f+g\|_p \leq \|f\|_p + \|g\|_p.
\]
:::

::: proof
如果 $p = 1,\infty$ 或 $f + g = 0$ 几乎处处成立，则不等式显然成立。否则，我们有
\[
|f + g|^p \leq (|f| + |g|) |f + g|^{p-1},
\]
从而由 @H 得
\[
\begin{aligned}
  \int |f + g|^p &\leq \|f\|_p \| |f+g|^{p-1} \|_q + \|g\|_p \| |f+g|^{p-1} \|_q\\
           &= (\|f\|_p + \|g\|_p)\left(\int |f+g|^p\right)^{1/q},
\end{aligned}
\]
于是
\[
\|f + g\|_p = \left(\int |f + g|^p\right)^{1-1/q} \leq \|f\|_p + \|g\|_p.
\]
:::

这个不等式说明 $p$-范数在 $p \geq 1$ 时确实是范数，于是 $L^p$ 空间是[[赋范线性空间]]。
更进一步：

::: theorem [Riesz–Fischer 定理] {@RF}
对任意 $1 \leq p \leq \infty$，$L^p$ 都是 [[Banach 空间]]。
:::

::: proof
根据 [[Banach 空间]]的性质，只要证明，对于序列 $(f_k)_{k \geq 1} \subset L^p$，如果
$\sum_{k=1}^\infty \|f_k\|_p = B < \infty$，则 $\sum_{k=1}^\infty f_k$ 必在 $L^p$
意义下收敛。

设 $G_n = \sum_{k=1}^n |f_k|, G = \sum_{k=1}^\infty |f_k|$。则由 @M，
$\|G_n\|_p \leq \sum_{k=1}^n \|f_k\|_p \leq B$。根据单调收敛定理：
\[
\int G^p = \lim_{n \to \infty} \int G_n^p \leq B^p,
\]
也就是 $G \in L^p$。特别地，对几乎所有 $x$ 有 $G(x) < \infty$。于是 $\sum_{k=1}^\infty f_k$
几乎处处收敛，记其和是 $F$。则 $|F| \leq G$，所以 $F \in L^p$。令 $F_n = \sum_{k=1}^n f_k$，
则 $|F - F_n|^p \leq (|F| + |F_n|)^p \leq (2G)^p$，得到 $|F - F_n|^p \in L^1$。根据
控制收敛定理：
\[
\lim_{n \to \infty}\|F - F_n\|_p^p = \lim_{n \to \infty}\int |F - F_n|^p = 0,
\]
也就是在 $L^p$ 意义下 $F_n \to F$。
:::

如果 $p = 2$，则还是 [[Hilbert 空间]]，可以定义[[内积]]。如果 $p < 1$，则无法得到此种性质；
但还可以证明 $L^p$ 是[[向量空间]]和[[完备度量空间]]。

另外，$L^p$ 空间还可以被[[简单函数]]逼近。

::: proposition {@Dense}
对任意 $1 \leq p \leq \infty$，简单函数
\[
f = \sum_{j=1}^n a_j \chi_{E_j}, \quad \mu(E_j) < \infty
\]
组成的集合在 $L^p$ 中稠密。
:::

::: proof
上述的函数当然属于 $L^p$。取 $f \in L^p$，则可以找到一列简单函数 $(f_n)_{n \geq 1}$，
使得 $|f_n| \leq |f|$，且 $f_n \to f$ 几乎处处成立。此时 $f_n \in L^p$，且
\[
|f_n - f|^p \leq (|f| + |f_n|)^p \leq 2^p |f|^p,
\]
所以根据控制收敛定理，$\|f_n - f\|_p \to 0$。

最后，设 $f_n = \sum_{j} a_j \chi_{E_j}, a_j \neq 0$，因为
\[
\int |f_n|^p = \sum_{j} |a_j|^p \mu(E_j) < \infty,
\]
所以对任意 $j$ 都有 $\mu(E_j) < \infty$。
:::

如果 $X$ 是[[局部紧]]的 [[Hausdorff 空间]]，$\mu$ 是 [[Radon 测度]]，则紧支连续函数
空间 $C_c(X)$ 也是在 $L^p(X)$ 中稠密的。

### 嵌入

对任意的 $1 \leq p < q \leq \infty$，一般情况下 $L^p, L^q$ 是互不包含的。直观来说，
前者中包含一些局部更加不规则的函数，
而后者中则包含当自变量趋于无穷时更慢地趋于零的函数。不过，我们有下面的结果。

::: proposition
如果 $0 < p < q < r \leq \infty$，则 $L^q \subset L^p + L^r$。换言之，如果 $f \in L^q$，
则存在 $g \in L^p, h \in L^r$ 使得 $f = g + h$。
:::

::: proof
如果 $f \in L^q$，令 $E = \{x \mid |f(x)| > 1\}$，以及 $g = f\chi_E, h = f\chi_{X \backslash E}$。
则 $|g|^p = |f|^p \chi_E \leq |f|^q \chi_E$，得到 $g \in L^p$。而
$|h|^r = |f|^r \chi_{X \backslash E} \leq |f|^q \chi_{X \backslash E}$，
所以 $h \in L^r$。显然 $f = g + h$。
:::

下面的插值不等式显示了另一种嵌入的方式。

::: theorem [插值不等式] {@I}
如果 $0 < p < q < r \leq \infty$，则 $L^p \cap L^r \subset L^q$，且对任意 $f \in L^p \cap L^r$：
\[
\|f\|_q \leq \|f\|_p^\lambda \|f\|_r^{1-\lambda},
\]
其中 $\lambda$ 满足
\[
q^{-1} = \lambda p^{-1} + (1-\lambda) r^{-1},
\]
即 $\lambda = (q^{-1} - r^{-1})/(p^{-1} - r^{-1})$。
:::

::: proof
如果 $r = \infty$，则 $|f|^q \leq \|f\|_\infty^{q-p} |f|^p$，两边积分得
\[
\|f\|_q \leq \|f\|_p^{p/q} \|f\|_{\infty}^{1-p/q} = \|f\|_p^{\lambda} \|f\|_{\infty}^{1-\lambda}.
\]

如果 $r < \infty$，注意到 $\frac{\lambda q}{p} + \frac{(1-\lambda)q}{r} = 1$，使用 @H，
\[
\begin{aligned}
  \int |f|^q &= \int |f|^{\lambda q} |f|^{(1-\lambda)q} \leq \||f|^{\lambda q}\|_{p/(\lambda q)} \||f|^{(1-\lambda)q}\|_{r/((1-\lambda)q)}\\
         &= \left(\int |f|^p\right)^{\lambda q/p} \left(\int |f|^r\right)^{(1-\lambda)q/r}\\
         &= \|f\|_{p}^{\lambda q} \|f\|_{r}^{(1-\lambda)q}.
\end{aligned}
\]
:::

由此可得下面的推论，它说明了 $p = \infty$ 时的范数虽然看起来不同，实际上却是有联系的。

::: corollary
如果 $f \in L^p \cap L^\infty$，$p < \infty$，则对任意 $q > p$ 有 $f \in L^q$，且
\[
\|f\|_{\infty} = \lim_{q \to \infty}\|f\|_q.
\]
:::

另外，如果全空间的测度有限，或者空间为 $\ell^p$ 空间，则存在包含关系。

::: proposition
以下设 $f$ 是可测函数。

- 如果 $A$ 是[[集合]]，$0 < p < q \leq \infty$，则 $\ell^p(A) \subset \ell^q(A)$，且
  $\|f\|_q \leq \|f\|_p$。

- 如果 $\mu(X) < \infty$，$0 < p < q \leq \infty$，则 $L^p(X) \supset L^q(X)$，
  且
  \[
  \|f\|_p \leq \|f\|_q \mu(X)^{1/p - 1/q}.
  \]

:::

::: proof
- 第一部分：显然
  \[
  \|f\|_\infty^p = \sup_{\alpha \in A}|f(\alpha)|^p \leq \sum_{\alpha \in A}|f(\alpha)|^p,
  \]
  所以 $\|f\|_\infty \leq \|f\|_p$。进一步，对 $q < \infty$，由 @I：
  \[
  \|f\|_q \leq \|f\|_p^\lambda \|f\|_\infty^{1-\lambda} \leq \|f\|_p,
  \]
  其中 $\lambda = p/q$。

- 第二部分：如果 $q = \infty$，则
  \[
  \|f\|_p^p = \int |f|^p \leq \|f\|_\infty^p \int 1 = \|f\|_\infty^p \mu(X),
  \]
  也就得到结论。如果 $q < \infty$，由 @H：
  \[
  \|f\|_p^p = \int |f|^p \cdot 1 \leq \||f|^p\|_{q/p} \|1\|_{q/(q-p)} = \|f\|_q^p \mu(X)^{(q-p)/q},
  \]
  也就得到结论。

:::

上述命题的第二部分说明：$L^q$ 可以[[连续]]地嵌入 $L^p$，也就是[[恒等映射]] $I: L^q \to L^p$ 是
有界连续的，且
\[
\|I\| = \mu(X)^{1/p - 1/q}.
\]

进一步地，
Alfonso Villani 给出了如下的其上 $L^p$
空间之间存在包含关系的测度空间的刻画（[@247a9c62-0151-37b3-aa4b-5e726a4b55a6]）。
以下设 $(X,\mathcal M,\mu)$ 是一个测度空间。

::: lemma
若 $p,q\in [1,+\infty]$ 且 $L^p(X)\subseteq L^q(X)$，则含入映射 $L^p(X)\to L^q(X)$ 是有界线性算子。
:::

::: proof
由闭图像定理，只需证明：若 $f_n\overset{L^p}{\to} f$ 且 $f_n\overset{L^q}{\to} g$，则 $f=g$ a.e.。
为此，回忆存在子列 $(f_{n_k})$ 使得 $f_{n_k}$ 几乎处处收敛到 $f$。
因为 $f_{n_k}\overset{L^q}{\to} g$，所以 $(f_{n_k})$ 又有某个子列 $(\psi_n)$ 几乎处处收敛到 $g$。
因此 $f$ 与 $g$ 都是 $(\psi_n)$ 的 a.e. 逐点极限，故 $f=g$ a.e.，证毕。
:::

::: proposition
下列命题等价：

(1) 存在 $1\le p< q\le +\infty$ 使得 $L^p(X)\subseteq L^q(X)$。

(2) $\inf\{\mu(E): \mu(E)>0,\ \mu(E)<+\infty \} > 0$。

(3) 对所有 $1\le p< q\le +\infty$，都有 $L^p(X)\subseteq L^q(X)$。
:::

::: proof
(1) 蕴含 (2)：由引理，存在 $k>0$ 使得 $\|f\|_q \le k \|f \|_p$ 对所有 $f\in L^p(X)$ 成立。
特别地，取 $f=1_E$，其中 $E$ 是正有限测度的可测集，则
$\mu(E)^{\frac 1q}\le k \mu(E)^{\frac 1p}$，即 $\mu(E)^{\frac 1p-\frac 1q}\ge \frac 1k$。
由于 $\frac 1p-\frac 1q>0$，这说明 $\mu(E)$ 有正下界。

(2) 蕴含 (3)：取任意 $1\le p< q\le +\infty$ 及 $f\in L^p(X)$。
由
$$
\mu(|f|>n)=\mu(|f|^p>n^p)\le \frac{1}{n^p}\int_X |f|^p \to 0,
$$
由 (2) 可知当 $n$ 充分大时 $\mu(|f|>n)=0$，即 $f\in L^{\infty}(X)$。
这验证了当 $q=+\infty$ 时的情形。

若 $q<+\infty$，则
\[
\int_X |f|^q = \int_{(|f|\le 1)} |f|^q + \int_{(|f|>1)} |f|^q \le \int_{(|f|\le 1)} |f|^p + (\|f\|_\infty)^q \mu(|f|>1),
\]
其中第一项有限（被 $\int_X |f|^p$ 控制），第二项有限（因 $\mu(|f|>1)$ 有限）。

(3) 蕴含 (1)：平凡。
:::

::: proposition
下列命题等价：

(1) 存在 $1\le p< q<+\infty$ 使得 $L^p(X)\supseteq L^q(X)$。

(2) $\sup\{\mu(E): \mu(E)<+\infty \}$ 有限。

(3) 对所有 $1\le p< q<+\infty$，都有 $L^p(X)\supseteq L^q(X)$。
:::

::: proof
(1) 蕴含 (2)：与前一个命题中 (1) 蕴含 (2) 的证明类似。

(2) 蕴含 (3)：取 $1\le p< q<+\infty$ 及 $f\in L^q(X)$。
由于 $\int_{(|f|>1)}|f|^p \le \int_{(|f|>1)}|f|^q\le \int_X |f|^q$，只需考虑 $|f|\le 1$ 的部分。
对 $n\in\mathbb Z_+$，设
\[
E_n=\left\{\tfrac{1}{n+1}<|f|\le \tfrac 1n\right\}.
\]
显然每个 $E_n$ 测度有限。由假设，存在 $M>0$ 使得对所有 $n$ 有 $\mu(E_n)<M$。
于是
$$
\int_{|f|\le 1} |f|^p = \sum_{n=1}^{+\infty} \int_{E_n} |f|^p \le \sum_{n=1}^{+\infty} \frac{1}{n^p}\mu(E_n) \le M\sum_{n=1}^{+\infty}\frac{1}{n^p}<+\infty,
$$
明所欲证。

(3) 蕴含 (1)：平凡。
:::

### 对偶空间

$L^p$ 空间的[[对偶空间]]，
即其上所有[[连续线性泛函]]组成的空间，
由 $L^q$ 空间给出，其中 $q$ 是 $p$ 的[[共轭指数]]。

::: theorem [对偶空间] {@dual}
设 $p, q \in [1, +\infty]$ 是一对[[共轭指数]]。
则有 [[Banach 空间]]的[[等距嵌入]]
\[
\begin{aligned}
  L^q (X) & \longrightarrow L^p (X)^*, \\
  g & \longmapsto \int_X (-) \cdot g \, \mathrm{d} \mu.
\end{aligned}
\]

进一步地，如果满足下列两个条件之一：

- $1 < p < \infty$，或者

- $p = 1$，且 $X$ 是 [[$\sigma$-有限测度空间]]，

则上述映射给出了 [[Banach 空间]]的[[等距同构]]
\[
L^p (X)^* \simeq L^q (X).
\]
:::

为证明上述定理，我们需要下面的结论，
它说明一个函数是否属于 $L^p$ 空间可以用它与简单函数乘积的积分来刻画。

::: lemma {@Lem}
设 $p,q$ 是一组共轭指数。设 $\Sigma$ 表示所有在一个有限测度集以外消失的简单函数的集合。
如果可测函数 $g$ 满足：对任意 $f \in \Sigma$ 有 $fg \in L^1$，且
\[
M_q(g) = \sup \left\{\left|\int fg\right|\ \bigg|\ f \in \Sigma, \|f\|_p = 1\right\}
\]
是有限数，而且集合 $S_g = \{x \mid g(x) \neq 0\}$ 是 $\sigma$-有限的，则
$g \in L^q$，且 $M_q(g) = \|g\|_q$。
:::

::: proof
我们事先证明：如果 $f$ 是一个有界可测函数，在一个有限测度集合 $E$ 以外消失，且 $\|f\|_p = 1$，
则 $\left|\int fg\right| \leq M_q(g)$。实际上，可以取一列简单函数 $(f_n)_{n\geq1}$，满足
$|f_n| \leq |f|$，且几乎处处 $f_n \to f$。因为 $|f_n| \leq \|f\|_\infty \chi_E$，且由 Hölder 不等式
（@-H）可得 $\chi_E g \in L^1$，故由控制收敛定理：
$\left|\int fg\right| = \lim \left|\int f_ng\right| \leq M_q(g)$。

现在假设 $q < \infty$。
设 $(E_n)_{n \geq 1}$ 是一列递增的有限测度集，满足 $S_g = \bigcup_{n=1}^\infty E_n$。
设 $(\phi_n)_{n \geq 1}$ 为一列简单函数，满足 $|\phi_n| \leq |g|$ 且 $\phi_n \to g$。令
$g_n = \phi_n \chi_{E_n}$，则 $(g_n)$ 也满足 $(\phi_n)$ 的性质，且 $g_n$ 在 $E_n$ 外消失。令
\[
f_n = \frac{|g_n|^{q-1} \operatorname{sgn}(g)}{\|g_n\|_q^{q-1}},
\]
则不难计算出 $\|f_n\|_p = 1$。根据 Fatou 引理：
\[
\begin{aligned}
  \|g\|_q &\leq \liminf_{n \to \infty}\|g_n\|_q = \liminf_{n \to \infty} \int |f_ng_n|\\
      &\leq \liminf_{n \to \infty} \int |f_ng| = \liminf_{n \to \infty} \int f_ng \leq M_q(g).
\end{aligned}
\]
在推导中，最后一个不等号使用了事先证明的结论。反过来，Hölder 不等式表明 $M_q(g) \leq \|g\|_q$，
也就证明了 $q < \infty$ 时定理成立。

现在假设 $q = \infty$。用反证法。
对任意 $\epsilon > 0$，令 $A = \{x \mid |g(x)| \geq M_\infty(g) + \epsilon\}$。如果 $\mu(A) > 0$，
则可取 $B \subset A$ 使得 $0 < \mu(B) < \infty$，这是因为 $A \subset S_g$。
令 $f = \mu(B)^{-1} \chi_B \operatorname{sgn}(g)$，
则 $\|f\|_1 = 1$，且 $\int fg = \mu(B)^{-1} \int_B |g| \geq M_\infty(g) + \epsilon$。
但根据事先证明的结论，这是不可能的。于是 $q = \infty$
时定理也成立。
:::

::: proof [@dual 的证明]
为了证明等距同构，需要验证两个问题：

1. $g \mapsto \phi_g(f) = \int fg$ 是等距的，即 $\|g\| = \|\phi_g\|$。

2. $g \mapsto \phi_g(f) = \int fg$ 是满射，
   即对任意 $\phi \in (L^p)^*$ 都存在 $g \in L^q$ 使得 $\phi = \phi_g$。（单射是显然的）

第一个问题较易解决。根据 Hölder 不等式，$\|\phi_g\| \leq \|g\|_q$。
另一方面，首先 $g = 0$ 时命题显然成立；
否则，如果 $q < \infty$，令
\[
f = \frac{|g|^{q-1}\operatorname{sgn}(g)}{\|g\|_q^{q-1}},
\]
则不难得到 $\|f\|_p = 1$，以及
\[
\|\phi_g\| \geq \int fg = \|g\|_q.
\]
于是命题成立。
如果 $q = \infty$（即 $p = 1$），
对任意 $\epsilon > 0$ 令 $A = \{x \mid |g(x)| > \|g\|_\infty - \epsilon\}$。
则 $\mu(A) > 0$，根据 $\mu$ 是 $\sigma$-有限的，可找到 $B \subset A$ 使得 $0 < \mu(B) < \infty$。
此时令
\[
f = \mu(B)^{-1}\chi_B \operatorname{sgn}(g),
\]
得到 $\|f\|_1 = 1$，且
\[
\|\phi_g\| \geq \int fg = \mu(B)^{-1} \int_B |g| \geq \|g\|_\infty - \epsilon.
\]
令 $\epsilon \to 0^+$ 得到结果。

对于第二个问题，我们逐步来做。第一步：如果 $\mu$ 是有限测度，则所有简单函数都是 $L^p$ 的。
设 $\phi \in (L^p)^*$，$E$ 是可测集，令
\[
\nu(E) = \phi(\chi_E).
\]
对任意不交的集合序列 $(E_n)_{n \geq 1}$，如果 $E = \bigcup_{n=1}^\infty E_n$，
则 $\chi_E = \sum_{n=1}^\infty \chi_{E_n}$，其中级数在 $L^p$
意义收敛：
\[
\left\|\chi_{E} - \sum_{j=1}^n \chi_{E_j}\right\|_p = \left\|\sum_{j=n+1}^\infty \chi_{E_j}\right\|_p = \mu\left(\bigcup_{j=n+1}^\infty E_j\right)^{1/p} \to 0, \quad n \to \infty.
\]
结合 $\phi$ 的线性性和连续性，
\[
\nu(E) = \sum_{n=1}^\infty \phi(\chi_{E_n}) = \sum_{n=1}^{\infty} \nu(E_n),
\]
这就证明了 $\nu$ 确实是一个测度。
另外，如果 $\mu(E) = 0$，则 $\chi_E = 0$（作为 $L^p$ 的元素），从而 $\nu(E) = 0$，
也就是说 $\nu$ 是关于 $\mu$
[[绝对连续测度|绝对连续]]的。
根据[[Radon–Nikodym–Lebesgue 定理|Radon–Nikodym 定理]]，
存在 $g \in L^1(\mu)$ 使得 $\phi(\chi_E) = \nu(E) = \int_E g \mathrm d\mu$
对任意 $E$ 成立，从而根据线性性可得 $\phi(f) = \int fg \mathrm d\mu$ 对任意简单函数 $f$ 成立。
根据 @Lem，因为 $\left|\int fg\right| \leq \|\phi\| \|f\|_p$，
所以 $g \in L^q$。
根据稠密性质（@-Dense）得 $\phi(f) = \int fg \mathrm d\mu$ 对任意 $f \in L^p$ 都成立。

第二步：如果 $\mu$ 是 $\sigma$-有限的测度，设 $(E_n)_{n \geq 1}$ 是一列递增的集合，
满足 $0 < \mu(E_n) < \infty$，且 $X = \bigcup_{n=1}^\infty E_n$。
我们现在把 $L^p(E_n)$ 视为 $L^p(X)$ 的子空间，其中的函数在 $E_n$ 以外消失。
根据有限测度的成果，存在 $g_n \in L^q(E_n)$ 使得 $\phi(f) = \int fg_n$ 对任意 $f \in L^p(E_n)$
成立，且 $\|g_n\|_q = \|\phi|_{L^p(E_n)}\| \leq \|\phi\|$。
不难得到 $g_n = g_m$ 在 $E_n$ 几乎处处成立，其中 $n < m$，则可以定义 $X$ 上的函数 $g$，它
在 $E_n$ 中的值与 $g_n$ 一致。根据单调收敛定理，$\|g\|_q = \lim \|g_n\|_q \leq \|\phi\|$。
于是 $g \in L^q$。进一步，对任意 $f \in L^p$，由控制收敛定理：
$f\chi_{E_n} \to f$ 在 $L^p$ 意义下成立，从而
\[
\phi(f) = \lim_{n \to \infty} \phi(f\chi_{E_n}) = \lim_{n \to \infty} \int_{E_n} fg = \int fg.
\]

第三步：如果 $\mu$ 是任意测度，且 $1 < p < \infty$，则对任意 $\sigma$-有限的集合 $E \subset X$，
存在（在几乎意义下）唯一的 $g_E \in L^q(E)$ 使得
$\phi(f) = \int fg_E, \forall f \in L^p(E)$，且 $\|g_E\|_q \leq \|\phi\|$。
如果 $F$ 是 $\sigma$-有限的，且 $E \subset F$，则 $g_F = g_E$
在 $E$ 中几乎处处成立，从而 $\|g_F\|_q \geq \|g_E\|_q$。令
\[
M = \sup \{\|g_E\|_q \mid E \subset X 是 \sigma\text{-}有限的\},
\]
则 $M \leq \|\phi\|$。
找一个序列 $(E_n)_{n \geq 1}$ 使得 $\|g_{E_n}\|_q \to M$，且令 $F = \bigcup_{n=1}^\infty E_n$。
此时 $F$ 是 $\sigma$-有限的，且 $\|g_F\|_q \geq \|g_{E_n}\|_q$ 对任意的 $n$ 成立，
从而 $\|g_F\|_q = M$。现在，如果 $A$ 是
包含 $F$ 的 $\sigma$-有限集，则
\[
\int |g_F|^q + \int |g_{A \backslash F}|^q = \int |g_A|^q \leq M^q = \int |g_F|^q,
\]
从而 $g_{A \backslash F} = 0$，也就是 $g_A = g_F$ 几乎处处成立。
（这里使用了 $q < \infty$）如果 $f \in L^p$，则 $A = F \cup \{x \mid f(x) \neq 0\}$
是 $\sigma$-有限的，从而
\[
\phi(f) = \int fg_A = \int fg_F.
\]
这时只要取 $g = g_F$，就完成了证明。
:::

::: corollary
设 $1 < p < \infty$，则 $L^p$ 是[[自反 Banach 空间]]。
:::

### 与积分算子有关的不等式

设 $(X, \mathcal{A}, \mu)$ 和 $(Y, \mathcal{B}, \nu)$ 是[[测度空间]]，可以考虑
它们的[[乘积测度空间]] $(X \times Y, \mathcal{A} \otimes \mathcal{B}, \mu \times \nu)$。
如果 $K$ 是乘积空间上的可测函数，可以研究积分算子
\[
Tf(x) = \int K(x,y)f(y)\mathrm d\nu(y)
\]
的问题。

::: proposition
设 $(X, \mathcal{A}, \mu)$ 和 $(Y, \mathcal{B}, \nu)$ 是 $\sigma$-有限的[[测度空间]]，
$K$ 是前述乘积空间上的可测函数，$1 \leq p \leq \infty$。如果存在 $C > 0$，使得
\[
\int |K(x,y)|\mathrm d\mu(x) \leq C, \quad \int |K(x,y)|\mathrm d\nu(y) \leq C
\]
分别对几乎所有的 $y\in Y,x\in X$ 成立，则对任意 $f \in L^p(Y)$，积分
\[
Tf(x) = \int K(x,y)f(y)\mathrm d\nu(y)
\]
对几乎所有 $x$ [[绝对收敛]]。此时 $Tf \in L^p(X)$，且
\[
\|Tf\|_p \leq C\|f\|_p.
\]
:::

接下来的不等式是 Minkowski 不等式的一般形式。

::: theorem [Minkowski 不等式，一般形式] {@MG}
设 $(X, \mathcal{A}, \mu)$ 和 $(Y, \mathcal{B}, \nu)$ 是 $\sigma$-有限的[[测度空间]]，
$f$ 是其乘积空间上的可测函数。

- 如果 $f$ 是非负函数，$1 \leq p < \infty$，则
  \[
  \left(\int \left(\int f(x,y) \mathrm d\nu(y)\right)^p \mathrm d\mu(x)\right)^{1/p}
  \leq \int \left(\int f(x,y)^p \mathrm d\mu(x)\right)^{1/p} \mathrm d\nu(y).
  \]

- 如果 $1 \leq p \leq \infty$，且 $f(\cdot,y) \in L^p(X)$ 对几乎所有 $y$ 成立，
  函数 $y \mapsto \|f(\cdot,y)\|_p$ 在 $L^1(Y)$中，则 $f(x,\cdot) \in L^1(Y)$
  对几乎所有 $x$ 成立，函数 $x \mapsto \int f(x,y) \mathrm d\nu(y)$ 在 $L^p(X)$ 中，
  且有不等式
  \[
  \left\|\int f(\cdot,y) \mathrm d\nu(y)\right\|_p \leq \int \|f(\cdot,y)\|_p \mathrm d\nu(y).
  \]

:::

如果令 $Y$ 为[[有限集]]，$\nu$ 为计数测度，则可以得到 @M。

作为 Minkowski 不等式一般情况的应用，下面的在 [[Lebesgue 测度]]中考虑的不等式对于 [[Hardy 不等式]]
的研究很有用处。

::: proposition
设 $K$ 是在 $]0,\infty[^2$ 上关于 [[Lebesgue 测度]] 的[[可测函数]]，满足
$K(\lambda x, \lambda y) = \lambda^{-1} K(x,y)$ 对任意 $\lambda > 0$ 成立，且
\[
\int_0^{\infty}|K(x,1)| x^{-1/p} \mathrm dx = C < \infty
\]
对某个 $p \in [1,\infty]$ 成立。设 $q$ 是 $p$ 的[[共轭指数]]。对 $f \in L^p, g \in L^q$，
令
\[
Tf(y) = \int_0^{\infty} K(x,y) f(x) \mathrm dx, \quad Sg(x) = \int_0^{\infty} K(x,y) g(y) \mathrm dy,
\]
则 $Tf, Sg$ 对几乎所有点有定义，且
\[
\|Tf\|_p \leq C\|f\|_p, \quad \|Sg\|_q \leq C\|g\|_q.
\]
:::

### 插值定理

在嵌入一节中可以了解到：如果 $1 \leq p < q < r \leq \infty$，那么
\[
L^p \cap L^r \subset L^q \subset L^p + L^r.
\]
在 $L^p + L^r$ 上定义的[[线性映射]]，如果它在 $L^p, L^r$ 有界，那么它是否在 $L^q$ 也有界？
答案是肯定的，且这个结论可以推广到更为广泛的情形中。下面的插值定理将解答这类问题。

::: theorem [Riesz–Thorin 插值定理] {@RT}
设 $(X, \mathcal{A}, \mu)$ 和 $(Y, \mathcal{B}, \nu)$ 是[[测度空间]]，
$p_0, p_1, q_0, q_1 \in [1,\infty]$。如果 $q_0 = q_1 = \infty$，则假设
$\nu$ 是半有限的。对 $0 < t < 1$，定义 $p_t, q_t$ 由
\[
\frac{1}{p_t} = \frac{1-t}{p_0} + \frac{t}{p_1}, \quad \frac{1}{q_t} = \frac{1-t}{q_0} + \frac{t}{q_1}
\]
确定。

如果 $T \colon L^{p_0}(X) + L^{p_1}(X) \to L^{q_0}(Y) + L^{q_1}(Y)$ 是[[线性映射]]，
满足对正数 $M_0,M_1$：
\[
\|Tf\|_{q_0} \leq M_0 \|f\|_{p_0}, \quad \forall f\in L^{p_0}(X), \\
\|Tf\|_{q_1} \leq M_1 \|f\|_{p_1}, \quad \forall f\in L^{p_1}(X),
\]
则对任意 $0 < t < 1$ 和 $f \in L^{p_t}(X)$，有
\[
\|Tf\|_{q_t} \leq M_0^{1-t} M_1^t \|f\|_{p_t}.
\]
:::

证明它需要下面的[[复分析]]中的结论。

::: lemma [三直线引理] {@3}
设 $\phi: \mathbb{C} \to \mathbb{C}$ 是在条带 $0 \leq \operatorname{Re}(z) \leq 1$
有界的[[连续函数]]，且在条带的内部是[[全纯函数]]。如果在直线 $\operatorname{Re}(z) = 0$ 上
有 $|\phi(z)| \leq M_0$，在直线 $\operatorname{Re}(z) = 1$ 上有 $|\phi(z)| \leq M_1$，
则对任意 $0 < t < 1$，在直线 $\operatorname{Re}(z) = t$ 上有
$|\phi(z)| \leq M_0^{1-t} M_1^t$。
:::

如果用 $M(t)$ 表示 $T$ 在 $L^{p_t}(X) \to L^{q_t}(Y)$ 范围的算子范数，
则根据 @RT 还可得 $M(t)$ 是[[对数凸函数|对数凸]]的。换言之，如果
$0 < s < t < u < 1$，且 $t = (1-\tau) s + \tau u$，则
\[
M(t) \leq M(s)^{1-\tau} M(u)^\tau.
\]

插值定理还可以进一步地推广，参见 [[Marcinkiewicz 插值定理]]。

## 推广

## 参考文献

```bibliography
247a9c62-0151-37b3-aa4b-5e726a4b55a6:
  type: article
  url: http://www.jstor.org/stable/2322503
  author: Alfonso Villani
  journaltitle: The American Mathematical Monthly
  number: 7
  pages: 485–487
  publisher: '[Taylor & Francis, Ltd., Mathematical Association of America]'
  title: 'Another Note on the Inclusion $L^p(\mu) \subset L^q(\mu)$'
  urldate: '2025-09-02'
  volume: 92
  year: 1985
```

```terms
$L^p$ 空间:
  en: $L^p$ space
  fr: espace $L^p$
  de: $L^p$-Raum
  ja: $L^p$ 空<くう>間<かん>
```
