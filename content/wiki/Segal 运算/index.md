---
title: Segal 运算
categories: [高阶代数]
---

::: convention
在本文中，

- $*$ 指[[单点集]]。
- 范畴指 [[$(\infty,1)$-范畴]]。

:::

**Segal 运算**是 [[Graeme Segal]]
引入的一系列[[上同调运算]]，可用于给[[移送映射]]
$\Sigma^\infty_+\mathrm{B}\mathfrak{S}_p\to\Sigma^\infty_+*$
构造空间层面的截面。

## 构造

以 $\mathrm{Fin}$ 记有限集构成的[[群胚]]，亦即
$\bigsqcup_{n\in\mathbb{N}}\mathrm{B}\mathfrak{S}_n$，其中
$\mathrm{B}$ 指[[分类空间]]，$\mathfrak{S}_n$ 指
$n$ 元[[对称群]]。对[[生象]] $X$，考虑生象
$\mathrm{Fin}_{/X}=\{(S,f)\mid S\in\mathrm{Fin},\,
f\colon S\to X\}$，即 $\mathrm{Fin}$ 沿着自然函子
$\mathrm{Fin}\to\mathsf{Ani}$ [[俯范畴|俯]]于 $X$
上得到的范畴。

::: proposition
$(\mathrm{Fin}_{/X},\sqcup)$ 是 $X$ 自由生成的
$\mathbb{E}_\infty$-幺半群。
于是其[[群化]]是 $\Sigma^\infty_+X$。
:::

现取 $X=\mathrm{Fin}$。由于 $\mathrm{Fin}$ 自己是
$\mathbb{E}_\infty$-幺半群，其作为生象自由生成的
$\mathbb{E}_\infty$-幺半群自带
$\mathbb{E}_\infty$-幺半环结构。于是
$\mathrm{Fin}_{/\mathrm{Fin}}=\bigoplus_{n\in\mathbb{N}}
\mathrm{Fin}_{/\mathrm{B}\mathfrak{S}_n}$ 是个
$\mathbb{N}$-分次 $\mathbb{E}_\infty$-幺半环，
其群化为 $\mathrm{Fin}$ 的幺半群环
$\Sigma^\infty_+\mathrm{Fin}=\bigoplus_{n\in\mathbb{N}}
\Sigma^\infty_+\mathrm{B}\mathfrak{S}_n$。
以 $\times$ 记其乘法。
考虑生象映射 $\mathcal{P}\colon\mathrm{Fin}\to
\mathrm{Fin}_{/\mathrm{Fin}}$，
把 $S\in\mathrm{Fin}$ 打到[[幂集]] $\mathcal{P}(S)$
附带[[遗忘函子]] $\mathcal{P}(S)\to\mathrm{Fin}$。

::: proposition
$\mathcal{P}$ 典范地成为 $\mathbb{E}_\infty$-幺半群同态
$(\mathrm{Fin},\sqcup)\to
  (\mathrm{Fin}_{/\mathrm{Fin}},\times)$，
且在后者的 $0$ 次部分是[[常函数]] $*$，在 $1$
次部分是 $\operatorname{id}_\mathrm{Fin}$。
:::

考虑幺半群环 $\bigoplus_{n\in\mathbb{N}}
\Sigma^\infty_+\mathrm{B}\mathfrak{S}_n$ 的分次完备化
$\prod_{n\in\mathbb{N}}\Sigma^\infty_+\mathrm{B}\mathfrak{S}_n$。

::: proposition
设 $\bigoplus_{n\in\mathbb{N}}A_n$ 为分次 $\mathbb{E}_1$-环。则
$$
\left(\prod_{n\in\mathbb{N}}A_n\right)^\times=
A_0^\times\times\prod_{n\in\mathbb{Z}_+}A_n.
$$
换言之，分次完备化的可逆元恰为 $0$ 次部分可逆的元素。
:::

于是交换幺半群的自然映射
$$
(\mathrm{Fin},\sqcup)\to
(\mathrm{Fin}_{/\mathrm{Fin}},\times)\to
\Omega^\infty\Sigma^\infty_+\mathrm{Fin}=
\bigoplus_{n\in\mathbb{N}}\Omega^\infty\Sigma^\infty_+
\mathrm{B}\mathfrak{S}_n\to\prod_{n\in\mathbb{N}}\Omega^\infty
\Sigma^\infty_+\mathrm{B}\mathfrak{S}_n
$$
穿过 $\left(\prod_{n\in\mathbb{N}}\Omega^\infty
\Sigma^\infty_+\mathrm{B}\mathfrak{S}_n\right)^\times$，
故群化的万有性质给出映射
$$
\theta\colon\Omega^\infty\Sigma^\infty_+*\to\prod_{n\in\mathbb{N}}
\Omega^\infty\Sigma^\infty_+\mathrm{B}\mathfrak{S}_n,
$$
把左边的加法映到右边的乘法。这就是 **Segal 运算**。
我们也将其单个分量称为 Segal 运算，记作
$$
\theta_n\colon\Omega^\infty\Sigma^\infty_+*\to
\Omega^\infty\Sigma^\infty_+\mathrm{B}\mathfrak{S}_n.
$$

## 性质

以 $\phi_n$ 记 $\mathbb{E}_\infty$-幺半群同态

```math {@移送}
\mathrm{Fin}_{/\mathrm{B}\mathfrak{S}_n}\to
\mathrm{Fin},\,(S,f)\mapsto
S\times_{f,\mathrm{B}\mathfrak{S}_n}*
```

的群化，亦即[[移送映射]] $\Sigma^\infty_+
\mathrm{B}\mathfrak{S}_n\to\Sigma^\infty_+*$。

定义 $\mathbb{N}$-分次 $\mathbb{E}_\infty$-幺半环如下：
对任意 $n\in\mathbb{N}$，其 $n$ 次部分作为加法幺半群都是
$(\mathrm{Fin},\sqcup)$；对 $n$ 次的 $X\in\mathrm{Fin}$
和 $m$ 次的 $Y\in\mathrm{Fin}$，定义其乘积为
$$
X\times Y\times
\operatorname{Hom}_{保偏序双射}(n\sqcup m,n+m),
$$
其中自然数视为对应基数的全序集，$\sqcup$ 表示偏序集范畴的余积，
$+$ 表示自然数相加。容易发现这确实是
$\mathbb{E}_\infty$-幺半环。设其群化为分次
$\mathbb{E}_\infty$-环 $\Gamma=
\bigoplus_{n\in\mathbb{N}}\Gamma_n$，则对任意 $n\in\mathbb{N}$，
$\Gamma_n=\mathbb{S}$，且对 $n,m\in\mathbb{N}$，
乘积映射 $\Gamma_n\otimes\Gamma_m\to\Gamma_{n+m}$
可以等同于 $\frac{(n+m)!}{n!m!}\colon\mathbb{S}
\to\mathbb{S}$。

::: proposition {@phi是环同态}
$\phi_n$ 组成分次 $\mathbb{E}_\infty$-环同态
$\phi\colon\Sigma^\infty_+\mathrm{Fin}\to\Gamma$。
:::

::: proof
只需证式 @移送 定义的映射组成
$\mathbb{E}_\infty$-幺半环同态。换言之，要对带自由
$\mathfrak{S}_n$-作用的 $X$ 和带自由
$\mathfrak{S}_m$-作用的 $Y$ 给出集合
$$
Z=X\times Y\times
\operatorname{Hom}_{保偏序双射}(n\sqcup m,n+m)
$$
的自由 $\mathfrak{S}_{n+m}$-作用以及等同
$$
Z/\mathfrak{S}_{n+m}=X/\mathfrak{S}_n\times
Y/\mathfrak{S}_m,
$$
与两个幺半环的交换律、结合律相容。这并不困难：可对
$(x,y,f)\in Z$ 以及 $g\in\mathfrak{S}_{n+m}$ 定义
$$
g(x,y,f)=(hx,ky,f'),
$$
其中 $h\in\mathfrak{S}_n$，$k\in\mathfrak{S}_m$，
$f'\colon n\sqcup m\to n+m$ 是保偏序双射，使得
$g\circ f=f'\circ(h\sqcup k)$。容易发现满足条件的
$h,k,f'$ 唯一，
而且这样定义出的群作用确实带有所需的商集等同，且与交换律、
结合律相容。
:::

::: lemma {@野蛮群化}
设 $M$ 是同伦范畴 $\mathrm{h}\mathsf{Ani}$
中的交换幺半群对象，$m\in\pi_0M$，以 $M_\infty$ 记图表
$$
M\xrightarrow{m}M\xrightarrow{m}\cdots
$$
的同伦余极限，则它也是 $\mathrm{h}\mathsf{Ani}$
中的交换幺半群对象。设 $A$ 是 $\mathrm{h}\mathsf{Ani}$
中的交换幺半群对象，满足
$$
{\lim_m}^1[M,\Omega A]=0,
$$
其中 $[-,-]$ 表示映射同伦类，未必保持交换幺半群结构。则
$$
\operatorname{Hom}_{\mathsf{CMon}(\mathrm{h}
\mathsf{Ani})}(M_\infty,A)=\{f\in
\operatorname{Hom}_{\mathsf{CMon}(\mathrm{h}
\mathsf{Ani})}(M,A)\mid f(m)\in A^\times\}.
$$
:::

::: proof
由 [[Milnor 短正合列]] 及条件知
$$
[M_\infty,A]=\lim_m{[M,A]}.
$$
考虑那些是幺半群同态的映射。注意同态 $f\colon M\to A$
必须以 $f(m)^{-n}f\colon M\to A$ 的方式穿过
$m^n\colon M\to M$ 才能在等号左边给出同态，
即知其唯一决定 $M_\infty$ 到 $A$ 的同态，此即欲证。
:::

::: remark
在 [@Segal1974] 中，Segal 似乎认为上述引理不需要
$\lim^1$ 条件。条目作者不知道此时它还成不成立。
:::

::: lemma {@投射有限}
设 $X,Y\in\mathsf{Ani}$，$Y$
是各阶同伦群有限的空间的反向极限。则
$[X,Y]$ 为[[投射有限集]]，且这关于 $X$ 自然，
即映射 $X\to X'$ 都诱导投射有限集的连续映射
$[X',Y]\to[X,Y]$。
:::

::: proof
写 $X=\operatornamewithlimits{colim}_{i\in I}X_i$，
$Y=\lim_{j\in J}Y_j$，其中 $X_i$ 只有有限个胞腔，
$Y_j$ 只有有限个非平凡同伦群且都是有限群，$I$ 和 $J$
都是[[归纳极限|正向系]]。则
$$
\operatorname{Hom}(X,Y)=\lim_{i\in I,\,j\in J}
\operatorname{Hom}(X_i,Y_j).
$$
由于 $\operatorname{Hom}(X_i,Y_j)$
只有有限个非平凡同伦群且都是有限群，
而有限群组成的反向系没有高阶导出极限，故两边取 $\pi_0$
即得
$$
[X,Y]=\lim_{i\in I,\,j\in J}{[X_i,Y_j]}
$$
为投射有限集。显然
$X=\operatornamewithlimits{colim}_{i\in I}X_i$
的写法关于 $X$ 自然，故映射 $X\to X'$ 诱导连续映射
$[X',Y]\to[X,Y]$。
:::

以下命题算出 $\phi_n\circ\theta_n$ 在 $\Omega^\infty
\Sigma^\infty_+*\in\mathsf{CRing}(\mathrm{h}\mathsf{Ani})$
的作用。

::: proposition
对伦型 $X$ 及 $x\in[X,\Omega^\infty\Sigma^\infty_+*]$，
$$
\phi_n(\theta_n(x))=\prod_{k=0}^{n-1}(x-k).
$$
:::

::: proof
以 $\eta_n(x)$ 记上式右边。@phi是环同态
与 $\theta$ 把加法映到乘法合起来推出
$$
\phi\circ\theta\colon
\Omega^\infty\Sigma^\infty_+*\to\prod_{n\in\mathbb{N}}
\Omega^\infty\Sigma^\infty_+\mathrm{B}\mathfrak{S}_n
\to\prod_{n\in\mathbb{N}}\Omega^\infty\Sigma^\infty_+*
$$
是左边加法到右边乘法的 $\mathbb{E}_\infty$-同态。
追定义不难发现这个复合映射也可由
$\mathbb{E}_\infty$-幺半群同态
$$
\mathrm{Fin}\to\prod_{n\in\mathbb{N}}\mathrm{Fin},\,
S\mapsto(\{f\colon n\hookrightarrow S\})_{n\in\mathbb{N}}
$$
群化得来，所以容易验证把右边打到
$\prod_{n\in\mathbb{N}}\Omega^\infty\Sigma^\infty_+*$
之后，在第 $n$ 个坐标正是 $x\mapsto\prod_{k=0}^{n-1}(x-k)$。

另一方面，[[Yoneda 引理]]给出 $\mathrm{h}\mathsf{Ani}$
中交换幺半群对象的同态

```math {@显式映射}
x\mapsto\left(\prod_{k=0}^{n-1}(x-k)\right)_{n\in\mathbb{N}}
\colon\Omega^\infty\Sigma^\infty_+*\to
\prod_{n\in\mathbb{N}}\Omega^\infty\Sigma^\infty_+*,
```

故只需证它和 $\mathrm{h}(\phi\circ\theta)$ 一样。
为此我们来对 $M=\mathrm{Fin}$、$m=1$、
$A=\prod_{n\in\mathbb{N}}\Omega^\infty\Sigma^\infty_+*$
验证 @野蛮群化 的条件。
此时由于球的正数阶稳定同伦群有限，$\Omega A$
满足 @投射有限 的条件，故
$[M,\Omega A]$ 是投射有限群，且反向系中的映射连续。
由此可得这个 $\lim^1$ 为零，
因为有限群组成的反向系没有高阶导出极限。现由上一段中的计算，
映射 @显式映射 和 $\mathrm{h}(\phi\circ\theta)$
在限制到 $\mathrm{Fin}$ 之后一样；于是由 @野蛮群化，
它们限制到 $\mathrm{Fin}_\infty$ 之后一样；
最后利用[[群化定理]]，由 [[$+$ 构造]]的万有性质即知它们限制到
$(\mathrm{Fin}_\infty)^+=\mathrm{Fin}^\mathrm{gp}
  =\Omega^\infty\Sigma^\infty_+*$ 之后一样，即它们本身一样。
:::

::: corollary {@p处同构}
设 $p$ 为素数，$d$ 为正整数。则 $\phi_p\circ\theta_p
  \colon\Omega^\infty\Sigma^\infty_+*\to
  \Omega^\infty\Sigma^\infty_+*$ 在 $d$
阶同伦群上诱导的映射在 $p$ 处的局部化为同构。
:::

::: proof
取 $X=S^d$，则由它是[[纬悬]]不难看出对任意
$x\in\pi_d(\Omega^\infty\Sigma^\infty_+*)\subseteq
  [S^d,\Omega^\infty\Sigma^\infty_+*]$ 都有
$x^2=0$。于是 $\phi_p(\theta_p(x))=(-1)^{p-1}(p-1)!x$，
由 $p\nmid(-1)^{p-1}(p-1)!$ 即得欲证。
:::

::: corollary [Kahn–Priddy 分裂]
$\Omega^{\infty+1}(\phi_p)_p\colon\Omega^{\infty+1}
  \mathbb{S}_p[\mathrm{B}\mathfrak{S}_p]\to
  \Omega^{\infty+1}\mathbb{S}_p$ 有截面，其中下标
$p$ 表示在 $p$ 处局部化。
:::

::: proof
由 @p处同构，$\Omega(\theta_p)_p$ 就是其截面。
:::

## 参考文献

```bibliography
Segal1974:
  type: incollection
  author: Graeme Segal
  year: 1974
  title: Operations in stable homotopy theory
  editor: G. Segal
  booktitle: New Developments in Topology
  series: London Mathematical Society Lecture Note Series
  pages: 105–110
```

```terms
Segal 运算:
  en: Segal operations
```
