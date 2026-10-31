---
title: 超交换代数
aliases: [超交换超代数]
categories: [超几何, 代数论]
navboxes: [超几何]
---

在[[超几何]]中，**超交换代数**是带有奇偶分次、按符号规则满足交换律的[[结合代数]]。
偶元素与所有元素交换，两个奇元素相乘时交换次序会改变符号。
在[[特征（代数）|特征]]不为 $2$ 的[[域]]上，奇元素的平方为零；
最基本的例子是把生成元置于奇次数的[[外代数]]。

例如，[[超流形]]的局部函数由光滑函数和外代数共同组成，因而形成超交换代数。
一般的超交换代数也可以视为一个抽象的空间上的函数环，这是[[代数–几何对偶]]的一个例子。

## 定义

设 $k$ 是特征不为 $2$ 的域。
对[[超向量空间]] $A = A_{\bar{0}} \oplus A_{\bar{1}}$ 中的齐次元素 $a$，
用 $|a| \in \mathbb{Z}_2$ 表示其奇偶次数。

::: definition [超交换代数]
$k$ 上的**超交换代数**是带单位元的 $k$-结合代数
$A = A_{\bar{0}} \oplus A_{\bar{1}}$，满足
\[
1 \in A_{\bar{0}}, \qquad
A_{\bar{i}} A_{\bar{j}} \subset A_{\overline{i + j}},
\]
且对任意齐次元素 $a, b \in A$ 有
\[
ab = (-1)^{|a||b|} ba .
\]
超交换代数之间的**同态**是保持单位元和奇偶分次的 $k$-代数同态。
:::

因子 $(-1)^{|a||b|}$ 是交换两个齐次元素时的 **Koszul 符号**。
当其中至少一个为偶元素时，这个符号为 $1$；
两者均为奇元素时，这个符号为 $-1$。
一般元素可以分成偶部与奇部，乘积由双线性延拓确定。

从[[范畴论]]的观点看，超交换代数就是超向量空间的
[[对称幺半范畴]]中的[[代数对象|交换代数对象]]。
这里的交换映射是
\[
\tau (a \otimes b) = (-1)^{|a||b|} b \otimes a,
\]
因此乘法 $\mu \colon A \otimes A \to A$ 满足 $\mu \circ \tau = \mu$
[@Varadarajan2004, 第 3.1 节]。

::: remark [特征与整数分次]
特征不为 $2$ 保证每个奇元素均满足 $a^2 = 0$。
在特征 $2$ 的域上，仅写带符号的交换律不能推出这一点；
若要保留奇变量的外代数行为，须另加奇元素平方为零的条件。

若一个 $\mathbb{Z}$-分次代数满足
$ab = (-1)^{ij} ba$（$a$、$b$ 的次数分别为 $i$、$j$），
则按整数次数的奇偶性合并分次，便得到超交换代数。
超交换代数本身不要求有整数分次，也不要求带有微分。
:::

## 例子

::: example [普通交换代数]
设 $k$ 是特征不为 $2$ 的域。
任意带单位元的交换 $k$-代数 $R$，取 $R_{\bar{0}} = R$、$R_{\bar{1}} = 0$，
就是纯偶的超交换代数。
例如，[[多项式环|多项式代数]] $k[x^1, \ldots, x^p]$ 可按这种方式看成超交换代数。
:::

::: example [Graßmann 代数]
设 $k$ 是特征不为 $2$ 的域，$W$ 是 $q$ 维 $k$-向量空间。
其[[外代数]] $\Lambda^\bullet (W)$ 按外次数的奇偶性分次，是超交换代数。
选取 $W$ 的基 $\theta^1, \ldots, \theta^q$，则其元素唯一写为
\[
a = \sum_{I \subset \{ 1, \ldots, q \}} a_I \theta^I,
\qquad
\theta^I = \theta^{i_1} \cdots \theta^{i_r}
\quad (i_1 < \cdots < i_r) .
\]
其中 $a_I \in k$，且 $\theta^\varnothing = 1$。
这个代数也称为 **Graßmann 代数**，维数为 $2^q$。
例如 $q = 2$ 时，一般元素为
$a + b \theta^1 + c \theta^2 + d \theta^1 \theta^2$；
其中 $1$、$\theta^1 \theta^2$ 为偶元素，$\theta^1$、$\theta^2$ 为奇元素。
:::

::: example [偶变量与奇变量]
设 $k$ 是特征不为 $2$ 的域，$p$、$q$ 是非负整数。代数
\[
k[x^1, \ldots, x^p] \otimes_k \Lambda^\bullet (k^q)
\]
是由 $p$ 个偶变量 $x^i$ 和 $q$ 个奇变量 $\theta^a$ 自由生成的超交换代数。
偶变量之间以及偶变量与奇变量之间交换，奇变量之间反交换。
它的元素是奇变量的有限多项式，其系数为偶变量的普通多项式。
:::

::: example [超流形的局部函数]
设 $U \subset \mathbb{R}^p$ 是开集，则
\[
C^\infty (U) \otimes_{\mathbb{R}} \Lambda^\bullet ((\mathbb{R}^q)^*)
\]
是实超交换代数。
其元素可写成 $f (x, \theta) = \sum_I f_I (x) \theta^I$，
其中 $f_I$ 是普通[[光滑函数]]。
这些代数及其限制映射给出[[超流形]]的局部结构层
[@CastonFioresi2007, 第 2.2 节]。
在超对称场论中，超空间上的这种函数是[[超场]]的基本几何模型。
:::

## 性质

### 奇元素与普通商代数

超交换代数的偶部 $A_{\bar{0}}$ 是普通交换代数，且位于 $A$ 的[[中心]]。
对奇元素 $a$，超交换律给出 $a^2 = -a^2$，故 $a^2 = 0$。
不过，偶元素也可能[[幂零元|幂零]]：例如在外代数中，
$\theta^1 \theta^2$ 是非零的偶元素，其平方为零。

令 $J = (A_{\bar{1}})$ 为奇元素生成的[[理想]]。
则 $A/J$ 是纯偶的普通交换代数，具体为
\[
A/J \simeq A_{\bar{0}}/A_{\bar{1}}^2,
\]
其中 $A_{\bar{1}}^2$ 表示奇元素两两乘积的线性张成。
因此，“取偶部”与“令所有奇元素为零”是不同的操作。
此外，$A/J$ 仍可能含有偶的幂零元素。

如果 $J$ 由 $q$ 个奇元素生成，则 $J^{q+1} = 0$：
任意 $q + 1$ 个生成元的乘积总有重复因子，重新排序后便含有某个奇元素的平方。
没有有限生成假设时，$J$ 不一定幂零；
例如有无限多个生成元的外代数，任意有限次幂的 $J$ 都非零。

### 张量积与自由构造

设 $A$、$B$ 是超交换 $k$-代数。
其[[张量积]]采用总奇偶次数以及乘法
\[
(a \otimes b)(a' \otimes b')
= (-1)^{|b||a'|} aa' \otimes bb'
\]
（各因子齐次），便仍是超交换代数。
这个符号来自把 $b$ 移过 $a'$；若遗漏它，一般不能保留超交换律。

::: proposition [自由超交换代数]
设 $V = V_{\bar{0}} \oplus V_{\bar{1}}$ 是 $k$-超向量空间。
由 $V$ 自由生成的超交换代数为
\[
\operatorname{Sym}_{\mathrm{s}} (V)
= \operatorname{Sym} (V_{\bar{0}}) \otimes_k \Lambda^\bullet (V_{\bar{1}}) .
\]
这里右侧的[[对称代数]]和外代数分别按普通向量空间构造，
而 $V_{\bar{1}}$ 的生成元赋予奇次数。
对任意超交换代数 $A$，每个保持奇偶性的线性映射 $V \to A$
唯一延拓为超交换代数同态 $\operatorname{Sym}_{\mathrm{s}} (V) \to A$。
:::

这一泛性质也可由[[张量代数]]模去关系
$v \otimes w - (-1)^{|v||w|} w \otimes v$ 得到。
在奇部，该关系给出外代数；在偶部，它给出普通对称代数
[@CastonFioresi2007, 第 5.2 节，例 5.2.5]。

### 奇导数

超交换代数上的齐次[[导子]] $D$ 满足分次 Leibniz 规则
\[
D (ab) = D (a) b + (-1)^{|D||a|} a D (b) .
\]
例如，Graßmann 左导数 $\partial/\partial \theta^i$ 为奇导子，满足
$\partial \theta^j/\partial \theta^i = \delta_i^j$。
因此
\[
\frac{\partial}{\partial \theta^1} (\theta^1 \theta^2) = \theta^2,
\qquad
\frac{\partial}{\partial \theta^2} (\theta^1 \theta^2) = -\theta^1 .
\]
这个负号与奇变量反交换的规则相容。
偶、奇导子连同超交换子构成[[超 Lie 代数]]
[@Varadarajan2004, 第 3.5 节]。

## 参考文献

```bibliography
Varadarajan2004:
  type: book
  author: V. S. Varadarajan
  title: 'Supersymmetry for Mathematicians: An Introduction'
  year: 2004
  series: Courant Lecture Notes in Mathematics
  volume: 11
  publisher: American Mathematical Society
  doi: 10.1090/cln/011
  url: https://www.math.ucla.edu/~vsv/papers/ch3.pdf

CastonFioresi2007:
  type: preprint
  author: [Lauren Caston, Rita Fioresi]
  title: Mathematical Foundations of Supersymmetry
  year: 2007
  arxiv: '0710.5742'
```

```terms
超交换代数:
  en: supercommutative algebra
Koszul 符号:
  en: Koszul sign
Graßmann 代数:
  en: Grassmann algebra
```
