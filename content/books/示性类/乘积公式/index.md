---
title: 乘积公式
---

{@sect-3}

上一节中，我们提到了 Euler 类的乘积公式。
下面，我们导出其它示性类的乘积公式，
这些公式给出了示性类与向量丛的直和、张量积的关系。

## Whitney 乘积公式

::: definition
设 $E \to B$ 是 $\mathbb{K}$-向量丛，$R$ 是 $\mathbb{K}$-可定向环。
当 $\mathbb{K} = \mathbb{R}, \mathbb{C}, \mathbb{H}$ 时，我们分别定义
\[
\left. \begin{aligned}
  w(E) & = 1 + w_1(E) + w_2(E) + \cdots \\
  c(E) & = 1 + c_1(E) + c_2(E) + \cdots \\
  p(E) & = 1 + p_1(E) + p_2(E) + \cdots
\end{aligned} \quad \right\} \in H^\bullet (B; R)
\]
为 $E$ 的**全 Stiefel–Whitney 类**、
**全陈类**和**全 Понтрягин 类**。
注意，这里的求和是有限的。
:::

::: theorem [Whitney 乘积公式]
如果 $E_1,E_2$ 是 $B$ 上的两个 $\mathbb{K}$-向量丛，
那么当 $\mathbb{K} = \mathbb{R}, \mathbb{C}, \mathbb{H}$ 时，分别有
\[
\begin{aligned}
  w (E_1 \oplus E_2) & = w (E_1) \, w (E_2), \\
  c (E_1 \oplus E_2) & = c (E_1) \, c (E_2), \\
  p (E_1 \oplus E_2) & = p (E_1) \, p (E_2).
\end{aligned}
\]
:::

::: proof
先证明 $\mathbb{K} = \mathbb{R}$ 的情况。
记 $n_1, n_2$ 分别为 $E_1, E_2$ 的秩，记 $N = n_1 + n_2$。

固定 $n$，我们对 $N$ 归纳证明 $w_n$ 满足公式。
当 $N = n$ 时，有
\[
w_n (E_1 \oplus E_2) = e (E_1 \oplus E_2)
= e(E_1) \, e(E_2) = w_{n_1} (E_1) \, w_{n_2} (E_2).
\]
当 $N > n$ 时，假设公式对 $< N$ 的维数都成立。注意到 $E_1 \oplus E_2$ 的分类映射是
\[
B \xrightarrow{E_1,\ E_2} \mathrm{B} \mathrm{O} (n_1) \times \mathrm{B} \mathrm{O} (n_2)
\overset{\mu}{\longrightarrow} \mathrm{B} \mathrm{O} (n_1 + n_2),
\]
其中 $\mu$ 是
\[
\oplus \colon \mathrm{O} (n_1) \times \mathrm{O} (n_2) \hookrightarrow \mathrm{O}(n_1+n_2)
\]
诱导的映射，也是向量丛 $\mathrm{E} \mathrm{O}(n_1) \times \mathrm{E} \mathrm{O}(n_2)$ 的分类映射。
考虑投影映射
\[
\operatorname{pr}_k \colon
H^n (\mathrm{B} \mathrm{O} (n_1) \times \mathrm{B} \mathrm{O} (n_2)) \longrightarrow
H^k (\mathrm{B} \mathrm{O} (n_1)) \otimes H^{n-k}(\mathrm{B}\mathrm{O}(n_2)).
\]
我们只需证明 $\operatorname{pr}_k (\mu^* (w_n)) = w_k \otimes w_{n-k}$。
此时要么 $k < n_1$，要么 $n - k < n_2$。不妨设 $k < n_1$。
我们有交换图
\[
\begin{tikzcd}[column sep=small]
  H^n (\mathrm{B} \mathrm{O} (n_1 + n_2)) \ar[d, "i^*"'] \ar[r, "\mu^*"] &
  H^n (\mathrm{B} \mathrm{O} (n_1) \times \mathrm{B} \mathrm{O}(n_2)) \ar[r, "\operatorname{pr}_k"] &
  H^k (\mathrm{B} \mathrm{O} (n_1)) \otimes H^{n-k}(\mathrm{B}\mathrm{O}(n_2)) \ar[d, "i^* \otimes \mathbb{1}", "\simeq"'] \\
  H^n (\mathrm{B} \mathrm{O} (k + n_2)) \ar[r, "\mu^*"] &
  H^n (\mathrm{B} \mathrm{O} (k) \times \mathrm{B} \mathrm{O}(n_2)) \ar[r, "\operatorname{pr}_k"] &
  H^k (\mathrm{B} \mathrm{O} (k))\otimes H^{n - k} (\mathrm{B} \mathrm{O} (n_2))\rlap{\ .}
\end{tikzcd}
\]
因为最右边的竖箭头是同构，只需验证
$w_n \in H^n (\mathrm{B} \mathrm{O} (n_1 + n_2))$
沿着下面三个箭头走会得到 $w_k \otimes w_{n-k}$。
但这是由于 $i^* w_n = w_n$ 和归纳假设。
:::

::: example
对球面 $S^n$ 的切丛 $TS^n$，有
\[
w (TS^n) = 1,
\]
因为如果把 $S^n$ 嵌入 $\mathbb{R}^{n + 1}$ 中，
就能看出 $TS^n \oplus \mathbb{R} \simeq \mathbb{R}^{n + 1}$，
这里 $\mathbb{R}$ 和 $\mathbb{R}^{n + 1}$ 表示平凡丛。
:::

下面的结论说明，
示性类刻画了向量丛的扭曲程度。

::: proposition
设 $E \to B$ 是 $\mathbb{K}^n$-丛。
如果它有 $k$ 个 $\mathbb{K}$-线性无关的截面，
那么当 $i > n - k$ 时，相应的示性类
$w_i(E)$、$c_i(E)$ 或 $p_i(E)$ 等于零。
:::

::: exercise
当 $\mathbb{K} = \mathbb{R}, \mathbb{C}, \mathbb{H}$ 时，
记 $G(n) = \mathrm{O}(n), \mathrm{U}(n), \mathrm{Sp}(n)$。
对 $0 \leq k \leq n$，记
\[
i \colon \mathrm{B} G (k) \to \mathrm{B} G (n)
\]
为含入映射 $G(k) \hookrightarrow G(n)$ 诱导的映射。
设 $1 \leq j \leq k$。
则当 $\mathbb{K} = \mathbb{R}, \mathbb{C}, \mathbb{H}$ 时，分别有
\[
i^* w_j = w_j, \quad
i^* c_j = c_j, \quad
i^* p_j = p_j.
\]
:::

## 实向量丛的 Понтрягин 类

到目前为止，我们已经知道了复向量丛和四元数向量丛的所有示性类。
但对实向量丛而言，我们只在系数环是特征 $2$ 时解决了这个问题。
对于一般系数的环，我们下面定义一种新的示性类，即 Понтрягин 类。
（注意，这和四元数向量丛的 Понтрягин 类是不同的。）

::: definition
在 @thm-1-functor 的意义下，我们定义两种向量丛的操作。

- 对实向量丛 $E$，我们可以定义 $E$ 的**复化**，
  即复向量丛 $E \otimes \mathbb{C}$。

- 对复向量丛 $E$，我们可以定义 $E$ 的**复共轭**，
  即复向量丛 $\overline{E}$。

:::

::: lemma
设 $E$ 是复向量丛。则对任意正整数 $i$，有
\[
c_i (\overline{E}) = (-1)^i \, c_i (E).
\]
:::

::: proof
我们只需对万有复向量丛，记为 $E(n) \to \mathrm{B} \mathrm{U} (n)$，证明这一等式。
因为 $\mathbb{C}^n$ 的定向在取共轭之后变成原来的 $(-1)^n$ 倍，
所以由 @thm-2-top-equals-euler，
\[
c_n \bigl( \overline{E\smash{(n)}} \bigr)
= e \bigl( \overline{E\smash{(n)}} \bigr)
= (-1)^n \, e (E(n))
= (-1)^n \, c_n (E(n)).
\]
对 $1 \leq k \leq n$，记
$i \colon \mathrm{B} \mathrm{U} (k) \to \mathrm{B} \mathrm{U} (n)$
为映射 $\mathrm{U} (k) \hookrightarrow \mathrm{U} (n)$ 诱导的映射。则
\[
i^* c_k \bigl( \overline{E\smash{(n)}} \bigr)
= c_k \bigl( \overline{E\smash{(k)}} \bigr)
= (-1)^k \, c_k (E(k))
= (-1)^k \, i^* c_k (E(n)).
\]
而我们对 Graßmann 流形的上同调的计算结果表明，
$i^* \colon H^{2k} (\mathrm{B} \mathrm{U} (n)) \to H^{2k} (\mathrm{B} \mathrm{U} (k))$
是同构。这就得到了要证的等式。
:::

对于实向量丛 $E$，有自然的复向量丛的同构
\[
E \otimes \mathbb{C} \simeq \overline{E \otimes \mathbb{C}}.
\]
这个同构由 $x + \mathrm{i} y \mapsto x - \mathrm{i} y$ 给出。
由引理，这说明当 $i$ 是奇数时，
\[
2 c_i ( E \otimes \mathbb{C} ) = 0.
\]
当系数环非特征 $2$ 时，这些陈类一定为 $0$，
而偶数陈类能给出有用的信息。

::: definition
设 $E \to B$ 是实向量丛。
定义 $E$ 的第 $i$ 个 **Понтрягин 类**为
\[
p_i (E) = (-1)^i \, c_{2i} (E \otimes \mathbb{C}) \quad \in H^{4i} (B).
\]
定义 $p(E) = 1 + p_1(E) + p_2(E) + \cdots$
为 $E$ 的**全 Понтрягин 类**。
:::

这里，加入系数 $(-1)^i$ 没有什么深刻的原因，也不会影响下一个结论，
只是为了和公认的定义相符，并使得下面的公式（@thm-3-pon-euler-square）不带符号。

::: theorem [Whitney 乘积公式]
如果 $E_1,E_2$ 是 $B$ 上的两个实向量丛，
且系数环 $R$ 中 $2$ 不是零因子。那么
\[
p (E_1 \oplus E_2) = p (E_1) \, p (E_2).
\]
:::

定理的证明非常简单，留给读者完成。

::: example {@eg-3-pon-sphere}
与之前同理，当 $R$ 非特征 $2$ 时，我们有
\[
p (TS^n) = 1.
\]
:::

与之前提到的示性类类似，
最高阶的 Понтрягин 类也与 Euler 类有关。

::: theorem {@thm-3-pon-euler-square}
设 $E$ 是可定向的 $\mathbb{R}^{2n}$-丛。则
\[
p_n (E) = e (E) ^2.
\]
:::

::: proof
由 @thm-2-top-equals-euler，我们有
\[
p_n (E) = (-1)^n \, c_n (E \otimes \mathbb{C})
= (-1)^n \, e (E \otimes \mathbb{C}).
\]
对任意带有定向的 $2n$ 维实向量空间 $V$，同构
\[
V \otimes \mathbb{C} \simeq V \oplus \mathrm{i} V
\]
将定向变为原来的 $(-1)^n$ 倍，
因为若取 $V$ 的一组符合定向的有序基 $v_1, \dotsc, v_{2n}$，
那么上述两个空间的定向分别由排序
\[
v_1,\ \mathrm{i} v_1,\ \dotsc,\ v_{2n},\ \mathrm{i} v_{2n}; \quad
v_1, \dotsc, v_{2n}, \mathrm{i} v_1, \dotsc, \mathrm{i} v_{2n}
\]
确定。
这两个排序通过 $(2n)(2n - 1)/2$ 次对换互相转换，
因此它们的定向相差 $(-1) ^{(2n)(2n - 1)/2} = (-1)^n$ 倍。
从而，
\[
p_n (E) = (-1)^n \, e (E \otimes \mathbb{C})
= e (E \oplus E) = e (E) ^2.
\]
:::

于是，对非特征 $2$ 的情形，
我们可以给出可定向实向量丛的所有示性类。

::: theorem {@thm-3-pon-class}
设系数环 $R$ 中 $2$ 不是零因子。则有分次环的同构
\[
\begin{aligned}
  H^\bullet (\mathrm{B} \mathrm{SO} (2n);\ R) & \simeq R[p_1, \dotsc, p_{n-1}, e], \\
  H^\bullet (\mathrm{B} \mathrm{SO} (2n + 1);\ R) & \simeq R[p_1, \dotsc, p_n],
\end{aligned}
\]
其中 $\deg p_i = 4i,\ \deg e = 2n,\ e^2 = p_n$。
:::

定理的证明方法和 @thm-2-main 的证明相同。
读者可以自己尝试，也可以参见 [@cohen, §3.5.3]。

## 分裂原理

为了研究示性类与向量丛的张量积的关系，
我们需要分裂原理的帮助。
分裂原理可以把一般的向量丛的问题简化为线丛的问题。

::: theorem [分裂原理] {@thm-3-splitting}
设 $E \to B$ 是 $\mathbb{K}^n$-丛，系数环 $R$ 是 $\mathbb{K}$-可定向的。
则存在拓扑空间 $Y$ 和映射 $f \colon Y \to B$，
使得拉回的向量丛 $f^* E \to Y$ 满足以下条件：

- 拉回的向量丛 $f^* E \to Y$
  分裂为 $n$ 个线丛（即 $\mathbb{K}^1$-丛）的直和：
  \[
  f^* E \simeq L_1 \oplus \cdots \oplus L_n.
  \]

- 上同调的映射
  \[
  f^* \colon H^\bullet (B;\ R) \to H^\bullet (Y;\ R)
  \]
  是单射，从而 $f^* E$ 的示性类满足的关系也被 $E$ 的示性类满足。

:::

例如，我们将证明对复线丛 $L_1, L_2$，
有 $c_1 (L_1 \otimes L_2) = c_1 (L_1) + c_1 (L_2)$。
从而，对一般的复向量丛的张量积 $E_1 \otimes E_2$，
我们就可以直接假设 $E_1, E_2$ 都是线丛的直和，给出计算张量积的陈类的公式。
下一小节将讨论这个问题。

在证明分裂原理之前，我们先叙述一个重要的步骤。
这个结论与 Thom 同构定理相似，证明方法是相同的。

::: theorem [Leray–Hirsch] {@thm-3-leray-hirsch}
设 $E \to B$ 是纤维为 $F$ 的纤维丛。
设有有限个元素
\[
\alpha_1, \dotsc, \alpha_m \in H^\bullet (E;\ R),
\]
使得

- 这些元素限制在每个纤维 $F$ 上，
  都自由地生成 $R$-模 $H^\bullet (F;\ R)$。

则这些元素也自由地生成 $H^\bullet (B;\ R)$-模 $H^\bullet (E;\ R)$。
换言之，
\[
H^\bullet (B;\ R) \underset{R}{\otimes} H^\bullet (F;\ R)
\simeq H^\bullet (E;\ R).
\]
:::

下面，我们通过一个直接的构造，证明分裂原理。

::: definition
设 $V$ 是 $n$ 维 $\mathbb{K}$-向量空间。$V$ 的一面**旗**（flag）是一列线性子空间
\[
0 = V_0 \subset V_1 \subset \cdots \subset V_n = V,
\]
其中 $\dim V_i = i$。空间 $V$ 的所有旗构成的空间记为 $\operatorname{Fl}(V)$，
称为**旗流形**（flag manifold），因为它有一个自然的流形结构。
:::

如果 $V$ 带有一个 Euclid 或 Hermite 度量，
那么一面旗等价于一组互相正交的直线
\[
\ell_1,\ \ell_2,\ \dotsc,\ \ell_n \subset V,
\]
满足 $V_i = \operatorname{span}(\ell_1, \dotsc, \ell_i)$。

在 @thm-1-functor 的意义下，函子
\[
\operatorname{Fl} \colon \textsf{Vect}(n,\mathbb{K}) \to \textsf{Top}
\]
可以把一个向量丛 $E$
变成纤维为旗流形的纤维丛，即**旗丛**（flag bundle），
我们记为 $\operatorname{Fl}(E)$。

::: proof [@thm-3-splitting 的证明]
我们证明，映射 $f \colon \operatorname{Fl}(E) \to B$
满足定理的条件。

先证明 $f^* E$ 分裂成线丛的直和。
在 $E$ 上取一个 Euclid 或 Hermite 度量，
则旗可以由一组互相正交的直线给出。我们有
\[
f^* E = \{
  (x,\ \ell_1,\ \dotsc,\ \ell_n,\ v) \mid
  x \in B,\ v \in E_x,\ \ell_i \subset E_x \text{ 是互相正交的直线}
\}.
\]
定义 $f^* E$ 的子线丛
\[
L_i = \{
  (x,\ \ell_1,\ \dotsc,\ \ell_n,\ v) \mid v \in \ell_i
\} \subset f^* E.
\]
则
\[
f^* E = L_1 \oplus \cdots \oplus L_n.
\]

再证明上同调的映射
$f^* \colon H^\bullet (B) \to H^\bullet (\operatorname{Fl}(E))$ 是单射。
我们有图表
\[
\begin{tikzcd}
  p_n^* \cdots p_1^* E \ar[d] \ar[r] \ar[dr, phantom, pos=.1, "\ulcorner"] &
  \cdots \ar[r] &
  p_2^* p_1^* E \ar[d] \ar[r] \ar[dr, phantom, pos=.1, "\ulcorner"] &
  p_1^* E \ar[d] \ar[r] \ar[dr, phantom, pos=.1, "\ulcorner"] &
  E \ar[d, "p"] \\
  \mathrm{P}^n (E) \ar[r] &
  \cdots \ar[r] &
  \mathrm{P}^2 (E) \ar[r, "p_2"] &
  \mathrm{P} (E) \ar[r, "p_1"] &
  B \rlap{\ ,}
\end{tikzcd}
\]
其中每个 $\mathrm{P}^i (E)$ 定义为它右边的竖直映射代表的向量丛的**射影化**（projectivisation），
也就是把纤维换成其射影空间得到的纤维丛。
容易验证，$\mathrm{P}^n (E) \simeq \operatorname{Fl} (E)$。因此，只需验证
\[
p_1^* \colon H^\bullet (B) \to H^\bullet (\mathrm{P} (E))
\]
是单射。

设 $x \in B$。考虑纤维丛 $\mathrm{P} (E) \to B$ 的纤维
$\mathrm{P} (E_x) \simeq \mathbb{K} \mathrm{P}^{n - 1}$。
则向量丛 $p_1^* E$ 限制在 $\mathrm{P} (E_x)$ 上，
实际上是 $\mathbb{K} \mathrm{P}^{n - 1}$ 上的平凡丛
$\mathbb{K} \mathrm{P}^{n - 1} \times \mathbb{K}^n$。
这个平凡丛有一个著名的子线丛，叫做**自言线丛**（tautological line bundle），
记作 $\mathscr{O} (-1)$，定义为
\[
\mathscr{O} (-1) = \{
  (\ell, x) \in \mathbb{K} \mathrm{P}^{n-1} \times \mathbb{K}^n \mid
  x \in \ell
\}.
\]
记 $L$ 为 $p_1^* E$ 的子线丛，
它由每个 $\mathrm{P} (E_x) \simeq \mathbb{K} \mathrm{P}^{n - 1}$ 上的自言线丛拼起来得到。
为记号方便，我们记 $c_1 (L)$ 为 $w_1 (L)$、$c_1 (L)$ 或 $p_1 (L)$ 中合适的那一个。
考虑 $\mathrm{P} (E)$ 的上同调类
\[
1,\ c_1(L),\ c_1(L)^2,\ \dotsc,\ c_1(L)^{n - 1}.
\]
它们限制在每个 $\mathrm{P} (E_x)$ 上，
都自由地生成 $\mathrm{P} (E_x) \simeq \mathbb{K} \mathrm{P}^{n-1}$ 的上同调
（因为自言线丛是万有线丛的拉回，细节留给读者）。
由 Leray–Hirsch 定理（@thm-3-leray-hirsch），
$H^\bullet (\mathrm{P} (E))$ 是自由的 $H^\bullet (B)$-模，
而 $p_1^*$ 作为模同态，把生成元 $1 \in H^\bullet (B)$
映到生成元之一 $1 \in H^\bullet (\mathrm{P} (E))$。
这就说明 $p_1^*$ 是单射。
:::

分裂原理有一种更抽象的形式，即下面的命题。
为方便叙述，我们只叙述 $\mathbb{K} = \mathbb{C}$ 的情况，
但其它情况也相同。

::: corollary {@thm-3-splitting-cor}
映射 $\oplus \colon \mathrm{B} \mathrm{U} (1)^n \to \mathrm{B} \mathrm{U} (n)$
诱导了单射
\[
H^\bullet (\mathrm{B} \mathrm{U} (n))
\hookrightarrow H^\bullet (\mathrm{B} \mathrm{U} (1))^{\otimes n}
\simeq R [c_1^{(1)}, \dotsc, c_1^{(n)}],
\]
其像是所有对称多项式构成的子环。
:::

这个推论的含义是，如果要研究 $n$ 维向量丛的示性类，
即 $H^\bullet (\mathrm{B} \mathrm{U} (n))$ 的上同调类，
我们可以不妨将它视为 $n$ 个线丛的直和，
然后用 Whitney 乘积公式计算出这个直和的示性类，
即 $H^\bullet (\mathrm{B} \mathrm{U} (1))^{\otimes n}$ 的元素。

## 陈特征

我们知道，全陈类对向量丛的直和有积性。
通过这个性质，我们可以构造出一种新的示性类，叫做陈特征，
它对向量丛的直和有加性，对张量积有积性。

在这一小节中，设 $R$ 是一个包含 $\mathbb{Q}$ 的环。

::: definition {@def-3-ch}
设 $E \to B$ 是复向量丛，
它是 $n$ 个线丛的直和：$E \simeq L_1 \oplus \cdots \oplus L_n$。
我们定义 $E$ 的**陈特征**为
\[
\operatorname{ch} E = \mathrm{e}^{c_1 (L_1)} + \cdots + \mathrm{e}^{c_1 (L_n)}
\quad \in \quad H^{2\bullet} (B) = \prod_{k = 0}^{\infty} H^{2k} (B),
\]
这里指数的含义是形式幂级数。

对一般的复向量丛 $E \to B$，
我们通过分裂原理定义其陈特征。
事实上，由 @thm-3-splitting-cor，
上面的表达式可以写成 $E$ 的陈类的形式幂级数。
当然，我们也可以具体地写下来：
\[
\operatorname{ch} E =
n + \sum_{k = 1}^{\infty} \frac{1}{k!}
\left| \begin{matrix}
  1 & 0 & \cdots &   & c_1 \\
  c_1 & 1 & 0 & \cdots & 2c_2 \\
  c_2 & c_1 & 1 &   & 3c_3 \\
  \vdots & \ddots & \ddots & \ddots & \vdots \\
  c_{k-1} & \cdots & c_2 & c_1 & kc_k
\end{matrix} \right|,
\]
这里 $c_i$ 代表 $c_i(E)$。
:::

::: theorem
设 $E_1, E_2$ 是空间 $B$ 上的两个复向量丛。则
\[
\begin{aligned}
  \operatorname{ch} (E_1 \oplus E_2) & = \operatorname{ch} E_1 + \operatorname{ch} E_2, \\
  \operatorname{ch} (E_1 \otimes E_2) & = \operatorname{ch} E_1 \cdot \operatorname{ch} E_2.
\end{aligned}
\]
:::

::: proof
不妨假设两个向量丛都分裂成线丛的直和。
则第一个等式是显然的。
要证明第二个等式，
我们只需对线丛 $L_1, L_2$ 证明
\[
c_1 (L_1 \otimes L_2) = c_1 (L_1) + c_1 (L_2).
\]
事实上，只需对万有线丛 $\mathrm{E} \mathrm{U} (1) \to \mathbb{C} \mathrm{P}^{\infty}$ 证明结论。
而包含映射 $\mathbb{C} \mathrm{P}^1 \hookrightarrow \mathbb{C} \mathrm{P}^{\infty}$
诱导了上同调 $H^2$ 的单射，因此，只需证明 $\mathbb{C} \mathrm{P}^1$ 上的自言丛 $\mathscr{O} (-1)$
满足
\[
c_1 (\mathscr{O} (-2)) = 2 \, c_1 (\mathscr{O} (-1)),
\]
其中 $\mathscr{O} (-2) = \mathscr{O} (-1)^{\otimes 2}$。

剩下的工作就是计算这两个线丛的陈类。
但是，我们还没有准备好计算的工具，即陈–Weil 理论。
在 @sect-5 的理论框架下，这一命题几乎是显然的。
因此，我们把证明推迟到 @sect-5。
:::

::: remark
对实向量丛和四元数向量丛而言，
通过对应的 Понтрягин 类，可以定义 **Понтрягин 特征**，
这种特征也有加性和乘性。

对于 Stiefel–Whitney 类而言，相应的特征无法定义，
因为系数环为特征 $2$ 时，指数映射（作为形式幂级数）无法定义。
:::

::: remark
之所以把自言线丛叫做 $\mathscr{O} (-1)$ 而不是 $\mathscr{O} (1)$，
是因为前者的第一陈类是负的。我们将在 @sect-5 中证明这一点。
:::

## $K$-理论

陈特征的加性和乘性启发我们，
可以将映射 $\operatorname{ch}$ 看成一个“环同态”
\[
\operatorname{ch} \colon (B \text{ 上的向量丛},\ \oplus,\ \otimes)
\to (H^{2 \bullet} (B),\ +,\ \cdot).
\]
这一想法可以在 $K$-理论的框架里实现。
事实上，在合适的假设下，
这一映射是一个“环同构”。

::: definition
设 $A$ 是一个 Abel 半群（带有交换、结合乘法的集合，不一定有单位元和逆元）。
它的**群化**（groupification）是 Abel 群
\[
\operatorname{G}(A) = \
\frac{\bigoplus_{a \in A} \mathbb{Z} \cdot [a]}
{[a + b] \sim [a] + [b]} \ .
\]
:::

例如 $\operatorname{G}(\mathbb{N}, +) \simeq (\mathbb{Z}, +)$，又例如
$\operatorname{G}(\mathbb{Z} \setminus \{0\},\ \times) \simeq (\mathbb{Q} \setminus \{0\},\ \times)$。

::: definition
设 $X$ 是拓扑空间。我们定义
\[
K(X) = \operatorname{G} (\operatorname{Bund}_{\textsf{Vect}(\mathbb{C})}(X),\ \oplus).
\]
向量丛的张量积诱导了 $K(X)$ 上的乘法结构，
使它成为一个交换环，其乘法单位元是平凡丛 $X \times \mathbb{C}$。
函子 $K \colon \textsf{Top}^{\mathrm{op}} \to \textsf{Ring}$
称为 **$K$-理论**。
:::

例如，在 $K(S^n)$ 中，切丛 $TS^n$ 和平凡丛 $S^n \times \mathbb{R}^n$ 是同一个元素，
因为它们与平凡丛 $S^n \times \mathbb{R}$ 的直和是同构的。

现在，陈特征
\[
\operatorname{ch} \colon K(X) \to H^{2\bullet}(X)
\]
就是一个严格意义下的环同态了。

::: remark
类似地，我们可以考虑实向量丛或四元数向量丛，
得到的函子分别称为 **KO 理论**和 **KSp 理论**。
:::

::: remark
将函子 $K$ 称为“理论”的原因是，
它是一个**广义上同调理论**。
也就是说，它是系数环为谱环（而不是普通的环）的上同调理论。
在广义上同调理论中，也有示性类的理论，
参见 [@switzer, 16.27 之后]。
:::

::: theorem {@thm-3-bu-times-z}
设 $X$ 是紧空间。则有集合的自然同构
\[
K(X) \simeq [X,\ \mathrm{B} \mathrm{U} \times \mathbb{Z}],
\]
其中 $\mathrm{U} = \operatornamewithlimits{colim} \mathrm{U} (n)$，
记号 $[\ ,\ ]$ 表示映射的同伦类的集合。
:::

见 [@karoubi, 定理 II.1.33]。

关于 $K$-理论最著名的定理是 Bott 周期律。
上一个结论帮助我们叙述这个大定理。

::: theorem [Bott 周期律]
我们有
\[
\begin{aligned}
  \Omega (\mathrm{B} \mathrm{U} \times \mathbb{Z}) & \simeq \mathrm{U}, \\
  \Omega \mathrm{U} & \simeq \mathrm{B} \mathrm{U} \times \mathbb{Z}.
\end{aligned}
\]
作为推论，对任何紧空间 $X$，我们有
\[
K(\Sigma^2 X) \simeq K(X).
\]
:::

见 [@vbkt, 定理 2.11]。

::: remark
对于实数和四元数的情况，也有 Bott 周期律，
但需要作用 8 次 $\Omega$（而不是 2 次）才能回到原来的空间。
:::

::: remark {@rmk-3-bott}
对于紧空间 $X$，映射
\[
\otimes (H-1) \colon K(X) \to K(\Sigma^2 X)
\]
是同构，其中 $\Sigma^2 X$ 等同于 $X \wedge S^2$，
而 $H$ 表示 $S^2 \simeq \mathbb{C} \mathrm{P}^1$ 的线丛 $\mathscr{O} (1)$，
这里 $\otimes$ 就表示向量丛的张量积。
这个结论是 Bott 周期律的另一形式，我们在这里就不证明它了。
:::

::: corollary {@thm-3-k-sphere}
我们可以计算出球面的 $K$-理论：
\[
\begin{aligned}
  K(S^{2n}) & \simeq \mathbb{Z} \oplus \mathbb{Z}, \\
  K(S^{2n + 1}) & \simeq \mathbb{Z}.
\end{aligned}
\]
:::

::: proof
显然，$K(S^0) \simeq \mathbb{Z} \oplus \mathbb{Z}$。
利用 Bott 周期律就得到第一个同构。

因为 $\pi_1 (\mathrm{B} \mathrm{U}) \simeq \pi_0 (\mathrm{U}) \simeq 0$，
所以由 @thm-3-bu-times-z，得到 $K(S^1) \simeq \mathbb{Z}$。
利用 Bott 周期律就得到第二个同构。
:::

::: theorem
设 $X$ 是紧 CW 复形。则有环同构
\[
\operatorname{ch} \colon K(X) \underset{\mathbb{Z}}{\otimes} \mathbb{Q} \simeq H^{2\bullet}(X;\ \mathbb{Q}).
\]
:::

::: proof
我们对胞腔的个数归纳。
当胞腔个数是 $0$ 或 $1$ 时，命题是显然的。
胞腔个数是 $2$ 时，@thm-3-k-sphere 说明结论正确。

设 $X = A \sqcup_{S^{n-1}} D^n$，
其中 $A$ 比 $X$ 胞腔个数少，但至少有 $2$ 个胞腔。我们有 Puppe 正合列
\[
A \to X \to X/A \to
\Sigma A \to \Sigma X \to \Sigma X / \Sigma A \to
\Sigma^2 A \to \cdots.
\]
由 $K$-理论的可表性（@thm-3-bu-times-z）
和上同调函子 $H^\bullet$ 的可表性，
序列的第三项至第七项诱导了两个长正合列的图表
\[
\begin{tikzcd}[column sep=1em]
  \cdots \ar[r] &
  K (\Sigma^2 A) \otimes \mathbb{Q} \ar[d, "\operatorname{ch}", "\simeq"'] \ar[r] &
  K (\Sigma X / \Sigma A) \otimes \mathbb{Q} \ar[d, "\operatorname{ch}", "\simeq"'] \ar[r] &
  K (\Sigma X) \otimes \mathbb{Q} \ar[d, "\operatorname{ch}"] \ar[r] &
  K (\Sigma A) \otimes \mathbb{Q} \ar[d, "\operatorname{ch}", "\simeq"'] \ar[r] &
  K (X / A) \otimes \mathbb{Q} \ar[d, "\operatorname{ch}", "\simeq"'] \ar[r] & \cdots \\
  \cdots \ar[r] &
  H^{2\bullet} (\Sigma^2 A;\ \mathbb{Q}) \ar[r] &
  H^{2\bullet} (\Sigma X / \Sigma A;\ \mathbb{Q}) \ar[r] &
  H^{2\bullet} (\Sigma X;\ \mathbb{Q}) \ar[r] &
  H^{2\bullet} (\Sigma A;\ \mathbb{Q}) \ar[r] &
  H^{2\bullet} (X / A;\ \mathbb{Q}) \ar[r] & \cdots \rlap{.}
\end{tikzcd}
\]
注意到 $\Sigma X$ 和 $X$ 胞腔个数相同，
而另外四个空间的胞腔个数都更少。
由五引理，知要证的结论对 $\Sigma X$ 成立。
同样的论述表明，结论对 $\Sigma^2 X$ 成立。
由 Bott 周期律，结论对 $X$ 成立。
:::

这一定理告诉我们，在合适的假设下，$K$-理论给出的信息和陈类是一样的。
具体地说，两个向量丛的所有陈类相等，
当且仅当它们在 $K(X) \otimes \mathbb{Q}$ 中相同。
例如，两种理论都无法区分球面的切丛和平凡丛。
