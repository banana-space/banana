---
title: $+$ 构造
categories: [代数拓扑]
---

<disambiguation>
本条目介绍的是拓扑空间的 $+$ 构造。关于[[代数 $K$ 理论]]的 $+$ 构造，请参见[[Quillen + 构造]]。
</disambiguation>

**$+$ 构造**是个[[代数拓扑]]构造，
在不改变[[奇异同调|同调]]的情况下把空间的[[基本群]]变为特定[[商群]]。
它由 [[Michel Kervaire]] 于 1969 年引入，尔后被
[[Daniel Quillen]] 用来构造[[环]]的[[代数 $K$ 理论]]。

## 定义

::: definition {@构造}
设 $X$ 是[[连通空间|连通]] [[CW 复形]]，$H$ 是 $X$
的[[基本群]]的[[子群]]，满足 $H'=H$，即 $H$ 是[[完美群]]。
**$X$ 关于 $H$ 的 $+$ 构造**指按以下方法构造出的
CW 复形 $X^+_H$ 以及映射 $X\to X^+_H$：

- 先设 $H=\pi_1(X)$，于是由 $H$ 完美，
  $H_1(X)=0$。此时分以下几步：

  1. 取 $H$ 的一组生成元 $\{\varphi_i\colon
     S^1\to X\}_{i\in I}$。可不妨设 $\varphi_i$
     都打到 $X$ 的一维骨架中。

  2. 沿着 $\varphi_i$ 粘上一组二维胞腔
     $\{e^2_i\}_{i\in I}$，所得 CW 复形暂记作 $X'$。
     于是 $\pi_1(X')=0$，且[[空间对]] $(X',X)$
     的相对同调只在二阶非零，被这些 $e^2_i$ 自由生成。

  3. 由于 $H_1(X)=0$，有[[短正合列]]
     $$
     0\to H_2(X)\to H_2(X')\to H_2(X',X)\to0
     $$
     取 $e^2_i$ 在 $H_2(X')$ 的原像 $\psi_i$。

  4. 由 [[Hurewicz 定理]]，$H_2(X')=\pi_2(X')$。
     取映射 $\psi_i\colon S^2\to X'$ 代表
     $\psi_i$。可不妨设 $\psi_i$ 都打到 $X'$
     的二维骨架中。

  5. 再沿 $\psi_i$ 粘上一组三维胞腔
     $\{e^3_i\}_{i\in I}$，所得 CW 复形就是 $X^+_H$，
     则 $\pi_1(X^+_H)=\pi_1(X')=0$，而由构造，
     $X$ 到 $X^+_H$ 的自然含入映射诱导同调群的同构。

  用同调版本的 [[Whitehead 定理]]不难发现空间 $X^+_H$
  以及映射 $X\to X^+_H$ 的伦型与这些选取无关。

- 再看一般情况。此时令 $\widetilde{X}_H$ 为 $H$
  对应的[[覆叠空间]]，然后按上面的方法作
  $\widetilde{X}^+_H\supseteq\widetilde{X}_H$，再作[[推出]]
  $X^+_H=X\sqcup_{\widetilde{X}_H}\widetilde{X}^+_H$。
  由于同调群的[[切除定理]]，自然含入映射 $X\to X^+_H$
  诱导同调群的同构。由 [[Seifert–van Kampen 定理|van Kampen 定理]]，
  $$
  \pi_1(X^+_H)=\pi_1(X)\sqcup_{\pi_1(\widetilde{X}_H)}
  \pi_1(\widetilde{X}^+_H)=\frac{\pi_1(X)}
  {\left<gHg^{-1}\mid g\in\pi_1(X)\right>}.
  $$

显然每个群都有最大完美子群，且为[[正规子群|正规]]。
当 $H$ 是 $\pi_1(X)$ 的最大完美子群时，
把 $X^+_H$ 记作 $X^+$，称为 **$X$ 的 $+$ 构造**。
对未必连通的 $X$，定义其 $+$ 构造为每个分支分别 $+$ 构造，
再无交并。
:::

::: remark
由构造可以看出，对 $X^+_H$ 上的[[局部系]] $A^+$，记它沿
$X\to X^+_H$ 的拉回为 $A$，则层上同调的映射
$R\Gamma(X^+_H,A^+)\to R\Gamma(X,A)$ 为同构。
当 $H=\pi_1(X)$ 即 $X^+_H$ 单连通时，局部系都平凡，
由[[万有系数定理]]即得结论。一般情况是因为局部系上同调有切除。
:::

## 性质

虽然 @构造 中已经说明 $+$ 构造伦型的唯一性，
但高阶同伦相容的函子性难以用那里的具体构造得出。
为此我们用另一种方法描述 $+$ 构造。
以下把没有非平凡完美子群的群称为[[亚交换群]]。以 $\mathsf{Ani}$
记[[生象]]，又称为伦型或者空间，构成的 $\infty$-范畴，
以 $\mathsf{Ani}^\text{hypo}$
记其中各个连通分支基本群都是亚交换群者构成的[[满子范畴]]。
则显然 $X^+$ 都落在 $\mathsf{Ani}^\text{hypo}$ 中，
且对于 $X\in\mathsf{Ani}^\text{hypo}$，$X^+\simeq X$。
以下定理把 $+$ 构造实现为 [[$\infty$-范畴局部化]]：

::: theorem
$+$ 构造是自然含入 $\mathsf{Ani}^\text{hypo}\to
  \mathsf{Ani}$ 的[[左伴随]]。
:::

::: proof
任取 $X\in\mathsf{Ani}$，$Y\in\mathsf{Ani}^\text{hypo}$，
要证映射空间之间的映射 $\operatorname{Hom}(X^+,Y)\to
  \operatorname{Hom}(X,Y)$ 是[[弱同伦等价]]。首先不妨设
$Y$ 连通。其次由 [[Postnikov 塔]] $Y=\lim_nY_{\le n}$
可设 $Y$ 为 [[$n$-截断]]。接下来对 $n$ 归纳，由[[纤维化]]
$Y_n\to Y_{\le n}\to Y_{<n}$ 及归纳假设可设 $Y=Y_n$，
即只有 $n$ 阶同伦群非零，是个 $K(G,n)$，$n\in\mathbb{Z}_+$。
现在再不妨设 $X$ 连通，并取基点 $x\in X$，$y\in Y$，
$x\mapsto x^+\in X^+$。则 $f\mapsto f(x)$ 给出纤维化
$\operatorname{Hom}_*(X,Y)\to\operatorname{Hom}(X,Y)
  \to Y$，对 $X^+$ 亦然，从而只需证
$\operatorname{Hom}_*(X^+,Y)\to
  \operatorname{Hom}_*(X,Y)$ 是弱同伦等价。这样一来：

- $n=1$ 时，$\operatorname{Hom}_*(X,Y)$
  为 $0$-截断，等于 $\operatorname{Hom}(\pi_1(X),G)$。
  由于 $G$ 为亚交换群，而 $\pi_1(X^+)$ 是 $\pi_1(X)$
  商去完美子群，容易发现 $\operatorname{Hom}(\pi_1(X),G)
      =\operatorname{Hom}(\pi_1(X^+),G)$。

- $n>1$ 时，$G$ 为交换群，$Y$ 有由 $G$ 给出的
  $\mathbb{E}_\infty$-群结构，故
  $\operatorname{Hom}_*(-,Y)$ 也都有。
  于是其各个连通分支伦型一样，所以只需证
  $\operatorname{Hom}_*(X^+,Y)\to
      \operatorname{Hom}_*(X,Y)$ 在 $\pi_0$ 是同构，
  且在基点所在连通分支处是弱同伦等价。这是容易的：
  前半句是因为 $X\to X^+$ 诱导上同调群的同构，
  后半句是因为 $\pi_m\operatorname{Hom}_*(-,Y)
      =\pi_{m-1}\operatorname{Hom}_*(-,\Omega Y)
      =\pi_{m-1}\operatorname{Hom}_*(-,K(G,n-1))$，
  然后利用对 $n$ 的归纳假设。

:::

::: corollary {@封闭}
满子范畴 $\mathsf{Ani}^\text{hypo}\subseteq
  \mathsf{Ani}$ 对任意极限封闭。此外，$+$ 构造保持
$\aleph_1$-[[紧对象]]，从而它也对
$\aleph_1$-[[滤余极限]]封闭，于是它本身是
$\aleph_1$-[[可表现 $\infty$-范畴]]。
:::

::: proof
前一句话是因为含入函子有左伴随。后一句话则是因为
$\mathsf{Ani}$ 中的 $\aleph_1$-紧对象无非是可数个胞腔的
CW 复形，从而基本群可数，于是 $+$ 构造依 @构造
只会粘上可数个胞腔。
:::

::: remark
$\mathsf{Ani}^\text{hypo}\subseteq\mathsf{Ani}$
并不对滤余极限封闭，因为亚交换群的滤余极限可以是非平凡完美群，
参见 [[Alexander 角球]]。所以 $\mathsf{Ani}^\text{hypo}$
并不[[紧生成]]。
:::

::: corollary
$+$ 构造保持有限乘积。从而对任意 [[$\infty$-算畴]]
$\mathcal{O}$，$+$ 构造给出函子 $-^+\colon
  \mathsf{Alg}_\mathcal{O}(\mathsf{Ani})\to
  \mathsf{Alg}_\mathcal{O}(\mathsf{Ani}^\text{hypo})$。
特别地，对 $k\in\mathbb{N}\cup\{\infty\}$，
$\mathbb{E}_k$-空间的 $+$ 构造自然成为
$\mathbb{E}_k$-空间。
:::

::: proof
显然单点的 $+$ 构造还是单点。下证 $+$ 构造保持二元乘积。
为此先注意到，由 @封闭，对 $Y\in\mathsf{Ani}$
和 $Z\in\mathsf{Ani}^\text{hypo}$，由于映射空间
$\operatorname{Hom}(Y,Z)$ 实际上是形状为 $Y$ 取值为 $Z$
的常图表的极限，所以 $\operatorname{Hom}(Y,Z)\in
  \mathsf{Ani}^\text{hypo}$。现在对 $X,Y\in\mathsf{Ani}$
和 $Z\in\mathsf{Ani}^\text{hypo}$ 有
\[
\begin{aligned}
  \operatorname{Hom}((X\times Y)^+,Z)
  &=\operatorname{Hom}(X\times Y,Z)\\
  &=\operatorname{Hom}(X,\operatorname{Hom}(Y,Z))\\
  &=\operatorname{Hom}(X^+,\operatorname{Hom}(Y^+,Z))\\
  &=\operatorname{Hom}(X^+\times Y^+,Z),
\end{aligned}
\]
故由 [[Yoneda 引理]]即得结论。
:::

::: remark
与 \(\mathsf{Ani}^\text{hypo}\) 不同，
连通分支的基本群都交换的满子范畴 \(\mathsf{Ani}^\text{ab}\)
的含入函子没有左伴随。
证明此事只需观察 $X = \mathbb S^1 \vee \mathbb S^1$。
假如左伴随存在，记它在 $X$ 上的值为 $X^\#$。
则 $\operatorname{Hom}(X^\#, K(\mathbb Z, 2)) = \operatorname{Hom}(X, K(\mathbb Z, 2))$，
其连通分支对应上同调 $H^2 (X^\#) = 0$。

另一方面，记 $Y = \mathbb S^1 \times \mathbb S^1 $。
有典范含入映射 $X \to Y$，而 $Y \in \mathsf{Ani}^\text{ab}$，
因此根据泛性质可以将其分解为 $X \to X^\# \to Y$。
反过来，由于 $X \to X^\#$ 选出了 $\pi_1(X^\#)$ 的两个生成元，
并且按定义这两个生成元交换，因此该映射可以延拓到 $Y \to X^\#$。
观察基本群可知 $Y \to X^\# \to Y$ 复合必须同伦于 $\operatorname{id}$。
这意味着 $H^2 (Y) = \mathbb Z$ 是 $H^2 (X^\#)$ 的直和项。
但这与 $H^2 (X^\#) = 0$ 矛盾。
:::

## 应用

对[[环]] $R$，令
$\operatorname{GL}(R)=\operatornamewithlimits{colim}
_{n\to\infty}\operatorname{GL}_n(R)$，并考虑形如
$1+aE_{ij}$，$i\ne j$，$a\in R$ 的元素生成的子群
$\operatorname{E}(R)$，则 $\operatorname{E}(R)$ 是
$\operatorname{GL}(R)$ 的最大完美子群，
且实际上是 $\operatorname{GL}(R)$ 的[[换位子群]]。
则[[分类空间]] $B{\operatorname{GL}(R)}$（即
[[Eilenberg–MacLane 空间]] $K(\operatorname{GL}(R),1)$）
的 $+$ 构造 $B{\operatorname{GL}(R)}^+$ 的
$n$ 阶同伦群就定义为 $R$ 的 $n$ 阶 $K$ 群，对 $n\in\mathbb{Z}_+$。
这就是[[代数 $K$ 理论]]的 [[Quillen $+$ 构造]]。

```terms
$+$ 构造:
  en: $+$-construction
  fr: $+$-construction :f
  la: $+$-constructio :f
```
