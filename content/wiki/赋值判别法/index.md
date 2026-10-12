---
title: 赋值判别法
categories: [概形论]
---

在[[代数几何]]中，**赋值判别法**指的是用[[赋值环]]来判别映射性质的方法。
在[[刚性解析几何]]中亦有类似事物。

## 命题

::: definition [赋值判别法]
称概形态射 $f\colon X\to Y$ 满足赋值判别法的存在性、唯一性，分别指的是，
对任意赋值环 $R$ 以及任意如下图表（其中 $K$ 是 $R$ 的分式域，
$\operatorname{Spec}K\to\operatorname{Spec}R$ 为自然映射），
$$
\begin{tikzcd}
  \operatorname{Spec}K\ar[r]\ar[d]&X\ar[d,"f"]\\
  \operatorname{Spec}R\ar[r]\ar[ur,dashed]&Y
\end{tikzcd}
$$
虚线箭头存在、唯一。
:::

::: remark {@基变换封闭}
如 $X\to Y$ 满足赋值判别法某性质，则不难发现其任意基变换也满足同样性质。
即赋值判别法所判定的性质自动对基变换封闭。
:::

::: proposition [泛闭判别]
$f\colon X\to Y$ 是概形的[[拟紧态射]]。
则其[[泛闭态射|泛闭]]当且仅当其满足赋值判别法的存在性。
:::

::: proof
先证“仅当”，即已知 $f$ 泛闭，验证赋值判别法存在性。
沿 $\operatorname{Spec}R\to Y$ 基变换，不妨设
$Y=\operatorname{Spec}R$。记 $\operatorname{Spec}K=\{\eta\}$，
并记 $\eta$ 在 $X$ 中像的闭包为 $Z$，附带既约闭子概形结构。
由于验证的是存在性，而复合一个闭浸入 $Z\hookrightarrow X$
自然不改变泛闭，故可不妨设 $X=Z$。我们来到如下图表：
$$
\begin{tikzcd}
  \operatorname{Spec}K\ar[rr]\ar[rd]&&X\ar[ld,"f"]\\
  &\operatorname{Spec}R&
\end{tikzcd}
$$
这里 $X$ 是整概形，一般点是 $\eta$ 的像，$f$ 是闭映射，
要给 $f$ 找个截面。由于 $K$ 是 $R$ 的分式域，观察以上图表的分式域映射
$K\to K(X)\to K$，这复合起来是 $\operatorname{id}$，
故 $X$ 的分式域也是 $K$。将 $X$ 和 $\operatorname{Spec}R$ 的一般点也记作 $\eta$。
则图表本身首先说明 $\eta\in f(X)$。由 $f$ 闭知 $f(X)$ 闭，
但 $\eta\in f(X)$ 是 $\operatorname{Spec}R$ 的一般点，
故 $f(X)=\operatorname{Spec}R$。于是 $\operatorname{Spec}R$
的闭点具有原像。取其一个原像 $x\in X$，给出局部环同态
$f_x\colon R\to\mathcal{O}_{X,x}$。由以上交换图表，$f_x$
诱导分式域同构；即如把它们都看成 $K$ 的子环就有 $R\subseteq\mathcal{O}_{X,x}\subseteq K$。
而 $R$ 是赋值环！于是 $R=\mathcal{O}_{X,x}$，截面就找到了。

再证“当”，即已知 $f$ 满足赋值判别法存在性，验证泛闭。由 @基变换封闭，只需证它闭。
取闭子概形 $Z\subseteq X$，
要证 $f(Z)$ 闭。先证其在[[特殊化]]下封闭。取
$Z\ni z\mapsto y\in Y$ 以及 $y\rightsquigarrow y'$，
要找 $z\rightsquigarrow z'\mapsto y'$。注意这里由
$Z\ni z\rightsquigarrow z'$ 能自动得到 $z'\in Z$。
这些映射自然给出环同态 $\mathcal{O}_{Y,y'}\to k(y)\to k(z)$。
由赋值环的性质，可取分式域为 $k(z)$ 的赋值环 $R$ 以及局部环同态
$\mathcal{O}_{Y,y'}\to R$ 使得以上映射穿过它。
这些映射便给出一个赋值判别法中的交换图表。由 $f$ 满足赋值判别法存在性，
虚线箭头存在，那么 $\operatorname{Spec}R$ 的闭点在虚线箭头下的像 $z'$ 便满足
$z\rightsquigarrow z'\mapsto y'$。接下来由以下引理便得结论。
:::

::: lemma {@闭集}
$f\colon X\to Y$ 是概形的拟紧态射，$Z\subseteq X$ 是闭子概形。
如 $f(Z)$ 在特殊化下封闭，则它就是闭集。
:::

::: proof
复合闭浸入不改变拟紧，故可设 $Z=X$。闭性是局部的，故可设 $Y=\operatorname{Spec}A$ 仿射。
于是 $X$ 拟紧，设 $X=\bigcup_{i=1}^n\operatorname{Spec}B_i$。
令 $B=\prod_{i=1}^nB_i$，考虑自然映射
$\operatorname{Spec}B=\bigsqcup_{i=1}^n\operatorname{Spec}B_i\to X\to Y$。
它的像集自然和 $f$ 的一样，故以 $\operatorname{Spec}B$ 换 $X$
可设 $X=\operatorname{Spec}B$ 也仿射。

现在来到环论问题：$A\to B$ 是环同态，谱上的像集在特殊化下封闭，
要证明此像集闭。任取 $\mathfrak{p}\in\operatorname{Spec}A$
在像集之外。像集在特殊化下封闭，故其补集在一般化下封闭，也就是说
$\operatorname{Spec}A_\mathfrak{p}$ 都在像集之外，即
$B\otimes_AA_\mathfrak{p}=0$。
而 $A_\mathfrak{p}=\operatornamewithlimits{colim}_{a\notin\mathfrak{p}}A_a$，
故存在 $a\notin\mathfrak{p}$ 使得 $B\otimes_AA_a=0$，
即开集 $D(a)\ni\mathfrak{p}$ 都在像集之外。像集外每个点都有开邻域在像集外，
故像集闭。
:::

::: proposition [分离判别]
$f\colon X\to Y$ 是概形的[[拟分离态射]]。
则其[[分离态射|分离]]当且仅当其满足赋值判别法的唯一性。
:::

::: proof
注意 $f$ 满足赋值判别法的唯一性当且仅当其对角线
$\Delta_f\colon X\to X\times_YX$ 满足赋值判别法的存在性。
由此，用拟分离、分离的定义以及泛闭的赋值判别法，立得结论。
:::

于是由紧合的定义可得

::: corollary [紧合判别]
$f\colon X\to Y$ 是概形态射，[[有限型态射|有限型]]、[[拟分离态射|拟分离]]。
则其[[紧合态射|紧合]]当且仅当其满足赋值判别法的存在唯一性。
:::

## 例子与评注

::: example [射影空间]
最典型的紧合态射无非是[[射影空间]] $\mathbf{P}^n_\mathbb{Z}\to\operatorname{Spec}\mathbb{Z}$。
直接用定义证明它紧合十分麻烦，但用赋值判别法就十分简单。
这里需要证明图表
$$
\begin{tikzcd}
    \operatorname{Spec}K\ar[r]\ar[d]&\mathbf{P}^n_{\mathbb{Z}}\ar[d]\\
    \operatorname{Spec}R\ar[r]\ar[ur,dashed]&\operatorname{Spec}{\mathbb{Z}}
\end{tikzcd}
$$
的虚线箭头存在唯一。展开射影空间的定义，不难发现上方的箭头相当于一个[[齐次坐标]]
$[a_0,\ldots,a_n]$，即 $a_0,\ldots,a_n$ 不全为 $0$；
差一个倍数的是同一个映射。而由于 $R$ 是局部环，不难发现虚线箭头也相当于齐次坐标
$[b_0,\ldots,b_n]$，满足 $b_0,\ldots,b_n$ 中有可逆元；
仍然，差一个可逆元倍数的是同一个映射。这样存在唯一性就是显然的：
$[b_0,\ldots,b_n]$ 必须是 $[a_0,\ldots,a_n]$
各坐标同除以赋值最小的坐标所得。
:::

::: remark
泛闭的赋值判别法，本质是上面的 @闭集，以及赋值环足以探测特殊化。分离的就是对对角线使用泛闭的。
:::

::: remark
事实上分离推出拟分离，所以赋值判别法可陈述为“分离当且仅当拟分离且满足赋值判别法唯一性”，
泛闭也类似。但泛闭推出拟紧这一事实证明麻烦而又意义不大，
故通常不这么陈述。
:::

```terms
赋值判别法:
  en: valuative criterion
  fr: critère valuatif
```
