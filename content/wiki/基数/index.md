---
title: 基数
categories: [集合论]
navboxes: [集合论]
---

**基数**是[[自然数]]的推广，
它是一种特殊的集合，
用来描述[[集合]]的大小。
所有自然数都是基数，它们描述了[[有限集]]的大小。
还有很多不同大小的无限基数，
它们描述了无限集的大小。

所有基数可以从小到大排列为
\[
0, 1, 2, \dotsc, n, \dotsc; \
\aleph_0, \aleph_1, \aleph_2, \dotsc, \aleph_{\alpha}, \dotsc,
\]
其中 $n$ 取遍所有[[自然数]]，
$\alpha$ 取遍所有[[序数]]，
$\aleph_{\alpha}$ 是第 $\alpha$ 个 [[$\aleph$ 数]]。

## 定义

直观地说，基数应该定义为集合的[[同构类]]，也就是说：

- 每个集合都有一个对应的基数，作为其大小。

- 如果两个集合一样大，也就是说，它们之间存在[[双射]]，
  那么它们对应的基数相同。

这样，我们可以定义集合 $X$ 对应的基数为所有与 $X$ 同样大的集合的全体。
但这样做的缺点是，每个基数将会成为一个[[真类]]，
这会带来一些麻烦。例如，我们不能讨论由一些基数构成的集合。

在集合论中，我们通常采用以下定义，而避免上述问题。

::: definition [基数]
如果一个[[序数]]不能和比它小的序数建立双射，
那么就称它为**基数**。
:::

和[[序数]]类似，基数也大体分为两类：

::: definition [后继基数与极限基数]
对序数 $\alpha$，以 $\alpha^+$ 记大于 $\alpha$ 的最小基数，
也即大于 $\alpha$、与 $\alpha$ 之间没有双射的序数中最小者。
这样的基数称为**后继基数**，不是后继基数的称为**极限基数**。
:::

## 例子

::: example
- [[自然数]]都是基数，自然数集也是基数。
  之后我们会看到自然数集是 $\aleph_0$。

- 除上述基数外的最小基数记为 $\aleph_1$，
  称为**最小不可数基数**。

:::

## 性质

我们有下面的命题保证基数的定义确实符合直观。

::: proposition [势] {@cardinality}
对任意集合 $X$，存在唯一的基数 $\alpha$，
使得存在双射 $\alpha \to X$
（$\alpha$ 也就是满足此条件的最小序数）。
这个 $\alpha$ 即称为 $X$ 的**势**，
记为 $|X|$。
:::

此外，所有的基数可以排成一列，其指标为所有[[序数]]。

::: proposition [基数的类] {@card-class}
记所有大于等于基数 $\kappa$ 的基数构成的类为
$\mathbf{Card}_{\geq \kappa}$，
所有序数构成的类为 $\mathbf{Ord}$。
则“$\in$”在这两个类上定义了序关系，
且存在唯一的保序双射
$\mathbf{Ord} \to \mathbf{Card}_{\geq \kappa}$。
$\kappa = \omega$（$\omega$ 为自然数集）时，
序数 $\alpha$ 在此映射下的像记作 $\aleph_{\alpha}$。
:::

::: remark [关于选择公理]
@cardinality 中 $|X|$ 的存在性需要选择公理保证。
然而 @card-class 却不用。
下面的基数运算中加法和乘法有不需要选择公理定义的办法，
然而取幂运算却需要。
:::

## 运算

### 加法、乘法

基数的加法定义为 $|X|+|Y|=|X\sqcup Y|$，或一般地，
$\sum_{i\in I}|X_i|=\left|\bigsqcup_{i\in I}X_i\right|$，
其中 $\sqcup$ 表示[[无交并]]。显然等号右边的确只依赖于等号左边的各基数，
而不依赖具体集合。

基数的乘法定义为 $|X||Y|=|X\times Y|$，或一般地，
$\prod_{i\in I}|X_i|=\left|\prod_{i\in I}X_i\right|$，
其中 $\times$ 及 $\prod$ 表示集合乘积，即 [[Descartes 积]]。
显然等号右边的确只依赖于等号左边的各基数，而不依赖具体集合。
由集合无交并和乘积的定义，有 $\sum_{i\in I}|X|=|I|\times|X|$，
和自然数加法与乘法的关系一样。乘法对加法的分配律也是显然的。

有限基数的加法、乘法就是自然数的加法、乘法。而无限基数的加法、乘法则很简单：

::: proposition
$\kappa,\lambda$ 为无限基数。则
$$
\kappa+\lambda=\kappa\lambda=\max\{\kappa,\lambda\}.
$$
:::

::: proof
不妨设 $\kappa\le\lambda$，则
$$
\lambda\le\kappa+\lambda\le2\lambda\le\kappa\lambda\le\lambda^2,
$$
所以只需证 $\lambda^2\le\lambda$。设 $\lambda=\aleph_\alpha$，
我们对序数 $\alpha$ 归纳。奠基即 $\aleph_0$ 情形是熟知的，在此略去。
即便不知奠基情形，也容易将以下证明挪用过去。

设 $\alpha>0$，且命题对小于 $\lambda=\aleph_\alpha$ 的基数成立。
于是对每个小于 $\lambda$ 的序数 $\beta$ 都有 $|\beta|^2=|\beta|$。
给集合 $\lambda^2$ 赋序如下：
$$
(a,b)<(c,d)\iff\begin{cases}
  \max\{a,b\}<\max\{c,d\},&或者\\
  \max\{a,b\}=\max\{c,d\},a<c,&或者\\
  \max\{a,b\}=\max\{c,d\},a=c,b<d.
\end{cases}
$$
它无非是沿 $\lambda^2$ 到 $\lambda^3$
的单射 $(a,b)\mapsto(\max\{a,b\},a,b)$ 从 $\lambda^3$
的字典序继承得来，所以它是良序。只要证明此良序的序数为 $\lambda$，
就有 $|\lambda^2|\le\lambda$，也就完成了证明。显然，形如
$(a,a)$，$a\in\lambda$ 的元素在其中共尾，且依定义
$\lambda^2_{\phantom{2}\le(a,a)}=(\lambda_{\le a})^2$。
而由于 $\lambda_{\le a}<\lambda$，由归纳假设有
$|\lambda^2_{\phantom{2}\le(a,a)}|=|\lambda_{\le a}|^2<\lambda$，
于是 $\lambda^2_{\phantom{2}\le(a,a)}$ 的序数也小于 $\lambda$。
这样一来，$\lambda^2$ 的序数是 $\lambda^2_{\phantom{2}\le(a,a)}$
的序数的上确界，也就小于等于 $\lambda$。命题得证。
:::

::: remark
注意并没有“一族嵌套的集合并集的基数是它们基数的上确界”这种事情。
这就是为什么这里要用良序。
:::

两个基数一个有限一个无限时的加法、乘法也很好算，在此略去。

### 指数

基数的指数定义为 $|Y|^{|X|}=|Y^X|$，其中 $Y^X$ 指 $X$ 到 $Y$
的所有[[映射]]组成之集。显然等号右边的确只依赖于 $|X|,|Y|$。
由集合乘积的定义可以发现 $\prod_{i\in I}|X|=|X|^{|I|}$，
和自然数乘法与指数的关系一样。指数对乘法的分配律也是显然的。

有限基数的指数就是自然数的指数，这里 $0^0=1$。
而无限基数的指数就麻烦了。仅仅是最基本的 $2^{\aleph_0}$
便引出与 [[ZFC 公理]]独立的[[连续统假设]]。用[[力迫法]]可以说明，
只要基数 $\kappa$ 的[[共尾类]]大于 $\aleph_0$，$2^{\aleph_0}=\kappa$
就与 ZFC 公理相容。换言之，在 ZFC 中，$2^{\aleph_0}$ 可能等于任一共尾类大于
$\aleph_0$ 的基数。一般的指数运算寸步难行。只有指数较大时能做一些化简：

::: proposition {@化简为2的幂}
$\kappa,\lambda$ 是基数，满足 $\kappa$ 无穷，
$2\le\lambda\le2^\kappa$。则 $\lambda^\kappa=2^\kappa$。
:::

::: proof
$$
2^\kappa\le\lambda^\kappa\le(2^\kappa)^\kappa=2^{\kappa^2}=2^\kappa.
$$
:::

但如果[[连续统假设的推广]]成立，即对每个无穷基数 $\kappa$ 都有
$2^\kappa=\kappa^+$，那么指数也都能算出。此时有

::: proposition
对无穷基数 $\kappa,\lambda$，
$$
\lambda^\kappa=
\begin{cases}
  \lambda,&\kappa<\operatorname{cf}(\lambda),\\
  \lambda^+,&\operatorname{cf}(\lambda)\le\kappa<\lambda,\\
  \kappa^+,&\lambda\le\kappa.
\end{cases}
$$
:::

::: proof
第三种情况就是 @化简为2的幂。至于前两种情况，
我们对后继基数与极限基数分别证明。$\lambda=\lambda'^+$
是后继基数时，首先 $\operatorname{cf}(\lambda)=\lambda$
（注意：基数的共尾类意思是它作为序数的共尾类），于是没有第二种情况，
第一种情况就是 $\kappa\le\lambda'$。此时由于 $\lambda=2^{\lambda'}$，
$$
\lambda^\kappa=(2^{\lambda'})^\kappa=2^{\lambda'\kappa}=2^{\lambda'}=\lambda.
$$
$\lambda$ 是极限基数时，我们先看第一种情况。
取一族小于 $\lambda$ 的序数 $\{\alpha_i\}_{i\in\operatorname{cf}(\lambda)}$
满足 $\sup_{i\in\operatorname{cf}(\lambda)}\alpha_i=\lambda$。
由于 $\lambda$ 是极限基数，$\alpha_i<\lambda$ 推出
$\alpha_i^+<\lambda$。令 $\lambda_i=\alpha_i^+$，
我们得到一族小于 $\lambda$ 的后继基数 $\{\lambda_i\}_{i\in\operatorname{cf}(\lambda)}$，
上确界为 $\lambda$。现在由于 $\kappa<\operatorname{cf}(\lambda)$，
$\kappa$ 到 $\lambda$ 的每个映射必映到某个 $\lambda_i$ 内，
于是由后继基数情形的结论，
$$
\lambda\le\lambda^\kappa\le
\sum_{i\in\operatorname{cf}(\lambda)}\lambda_i^\kappa
=\sum_{i\in\operatorname{cf}(\lambda)}\lambda_i=\lambda.
$$
再看第二种情况。此时 [[Kőnig 不等式]]给出 $\lambda^\kappa>\lambda$，
再用 @化简为2的幂 即得
$$
\lambda^+\le\lambda^\kappa\le\lambda^\lambda=2^\lambda=\lambda^+.
$$
:::

::: remark
和加法、乘法不同，基数和序数的指数运算并不相容。
$\omega^\omega$ 依定义等于 $\sup_{n<\omega}\omega^n$，
是可数的；即 $|\omega^\omega|=\aleph_0<
  \aleph_0^{\aleph_0}=|\omega|^{|\omega|}$。
:::

```terms
基数:
  en: cardinal number
  de: Kardinalzahl :f
  fr: nombre cardinal
  grc: πληθικὸς αριθμός
  la: numerus cardinalis
```
