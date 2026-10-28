---
title: 离散型随机变量
---

<problems>
- “一些重要的离散型分布”一节中，泊松分布的分布列图像里 $\lambda=4$ 的那幅图所用的数值似乎是二项分布 $B(12,1/3)$ 的分布列，而不是参数为 $4$ 的泊松分布的分布列。
</problems>

::: definition
设$X$为一随机变量。若$X$只有可数多个可能的取值，
则称其为一**离散型随机变量**（discrete random variable）。
换句话说，$X$为离散型随机变量当且仅当其值域
\[
\operatorname{Im} X=\left\{X(\omega) \mid \omega\in \Omega\right\}
\]
为可数集。

对于离散型随机变量$X$，我们定义其**分布列**
（probability mass function, p.m.f.）
$p_X:\mathbb{R}\rightarrow[0,1]$为
\[
p_X(x) = \mathbb{P}(X=x), \qquad x\in\mathbb{R}.
\]
:::

需要注意的是，虽然分布列$p_X$的定义域为$\mathbb{R}$，
但$p_X(x)$只对可数多个点$x$取非零值（见下面的
@theorem:PMF_basic_properties）。为方便起见，
在表示分布列$p_X$时，我们通常只列出那些非零的概率值$p_X(x)$。
在许多教材中，分布列也经常用如下表格来表示：
\[
\begin{array}{c|ccccc}
X & x_1 & x_2 & \cdots & x_n & \cdots \\
\hline
\mathbb{P} & p_X(x_1) & p_X(x_2) & \cdots & p_X(x_n) & \cdots
\end{array}
\]
其中$x_1,x_2,\ldots$不重复地枚举了满足$p_X(x)>0$的所有$x$。

::: remark {@remark:summation}
后文中我们将经常遇到形如

```math {@eq:sum_countable_terms}
\sum_{\substack{s\in S\cap A\,:\\ \varphi(s)\,\text{且}\,h(s)\neq 0}} h(s),
```

的求和式，其中函数$h:S\rightarrow\mathbb{R}$只在$S$的一个
可数子集上取非零值，$A$为任意集合，$\varphi(s)$为任意
关于$s\in S$的命题。为符号上的简洁，我们将把
\[
\sum_{s\in A\,:\,\varphi(s)} h(s)
\]
作为求和式 @eq:sum_countable_terms 的简写形式，
例如$\sum_s h(s)$即代表$\sum_{s\in S\,:\, h(s)\neq 0}h(s)$。
此外，若不存在$s\in S\cap A$满足$\varphi(s)$且$h(s)\neq 0$，
则将式 @eq:sum_countable_terms 的值规定为$0$。

关于求和式 @eq:sum_countable_terms 取值的严格定义
可参考[附录A.1](/books/概率与数理统计/一些数学上的补充说明/求和式/)。
:::

以下定理给出了分布列所满足的性质。

::: theorem {@theorem:PMF_basic_properties}
设$X$为一离散型随机变量，$p_X$为其分布列，则

1. 对任意$x\in \mathbb{R}$，均有$p_X(x)\geq 0$。

2. $\{x\in\mathbb{R} \mid p_X(x)>0\}$为可数集。

3. $\displaystyle\sum\limits_{x} p_X(x) = 1$。

:::

::: proof
$p_X(x)\geq 0$是概率测度定义的直接推论。

为证明第2条性质，注意到
\[
p_X(x)=\mathbb{P}(X=x)=\mathbb{P}(\varnothing)=0,
\qquad\text{若}\ x\notin\operatorname{Im}X,
\]
故$p_X(x)>0$意味着$x\in \operatorname{Im}X$，也就是说
$\{x\in\mathbb{R} \mid p_X(x)>0\}$是$\operatorname{Im}X$的子集。
由离散型随机变量的定义，可知$\operatorname{Im}X$为可数集，
而可数集的子集必定是可数集，因此$\{x\in\mathbb{R}\mid p_X(x)>0\}$
也是可数集。

接下来我们证明第3条性质：
\[
\begin{aligned}
1 &=\mathbb{P}(X\in \operatorname{Im}X) \\
& =\sum_{x\in\operatorname{Im}X} \mathbb{P}(X=x)
=\sum_{x\in\operatorname{Im}X} p_X(x)
\\
& =\sum_{x\,:\, p_X(x)>0} p_X(x)
+\sum_{x\in\operatorname{Im}X\,:\, p_X(x)=0} p_X(x)
=\sum_{x\,:\, p_X(x)>0} p_X(x),
\end{aligned}
\]
其中第一步是因为$\{X\in\operatorname{Im}X\}$是必然事件，
第二步则利用了概率的可数可加性。
:::

@theorem:PMF_basic_properties 的逆定理也同样成立。

::: theorem {@theorem:discrete_rv_construction}
若$p:\mathbb{R}\rightarrow\mathbb{R}$为一函数，满足

1. 对任意$x\in\mathbb{R}$，均有$p(x)\geq 0$。

2. $\{x\in\mathbb{R} \mid p(x)>0\}$为可数集。

3. $\displaystyle\sum_{x} p(x)=1$。

则存在一概率空间$(\Omega,\mathcal{F},\mathbb{P})$
以及$X:\Omega\rightarrow\mathbb{R}$，使得$X$为一离散型随机变量，
且$p$为$X$的分布列。
:::

@theorem:discrete_rv_construction 的证明
将放到本节最后一小节中。
该定理指出，只要我们给出满足 @theorem:discrete_rv_construction
条件的函数$p$，则以$p$为分布列的离散型随机变量就一定存在，
此时我们说$p$给出了一个离散型分布。

在给定离散型随机变量$X$的分布列$p_X$之后，
对于任意$\mathbb{R}$的子集$B$，我们有
\[
\begin{aligned}
\mathbb{P}(X\in B)
& =\mathbb{P}(X\in B\cap\operatorname{Im}X) \\
& =\mathbb{P}\!\left(
\bigcup_{x\in B\cap \operatorname{Im}X}\{X=x\}
\right) \\
& =\sum_{x\in B\cap \operatorname{Im}X}
\mathbb{P}(X=x)
=\sum_{x\in B\,:\,p_X(x)>0} p_X(x),
\end{aligned}
\]
其中第三步利用了概率的可数可加性。
因此，理论上我们可以通过

```math {@eq:discrete_rv_event_prob}
\mathbb{P}(X\in B) = \sum_{x\in B}p_X(x)
```

来计算任意形如$\{X\in B\}$的事件的概率。这说明，
对于单个离散型随机变量，其分布列能够完整刻画其统计规律性。

::: example [离散型随机变量的函数的分布] {@example:function_of_discrete_rv}
设$X$为一离散型随机变量，$g:\mathbb{R}\rightarrow\mathbb{R}$
为一实值函数，令$Y=g(X)$。则随机变量$Y$的值域为
\[
\begin{aligned}
\operatorname{Im}Y
&=\left\{g(X(\omega)) \mid \omega\in\Omega\right\} \\
&=\left\{g(x) \mid x\in\operatorname{Im}X\right\},
\end{aligned}
\]
由于$\operatorname{Im}X$为可数集，
故$\operatorname{Im}Y$也是可数集，因此$Y$也是离散型随机变量，
其分布列可由如下过程求得：
\[
\begin{aligned}
p_Y(y) &=
\mathbb{P}(Y=y) \\
& =\mathbb{P}\left(\bigcup\nolimits_{\substack{x\in\operatorname{Im} X\mkern1mu: \\ g(x)=y}} \{X=x\}\right) \\
& =\sum_{\substack{x\in\operatorname{Im} X\mkern1mu: \\ g(x)=y}} \mathbb{P}(X=x)
= \sum_{x\,:\, g(x)=y}p_X(x),
\qquad\forall y\in\mathbb{R},
\end{aligned}
\]
其中第三步用到了概率的可数可加性。
:::

## 一些重要的离散型分布*

**伯努利分布。** 设$p\in[0,1]$。若离散型随机变量$X$的分布列为
\[
p_X(x) = \begin{cases}
p, & x = 1, \\
1-p, & x = 0,
\end{cases}
\]
则称$X$服从参数为$p$的伯努利分布（Bernoulli distribution）。
不难看出，对任意事件$E$，其指示函数$\mathsf{1}_E$服从
参数为$\mathbb{P}(E)$的伯努利分布。

**二项分布。** 设$n$为正整数，$p\in[0,1]$。
若离散型随机变量$X$的分布列为
\[
p_X(k) = \binom{n}{k} p^k (1-p)^{n-k},
\qquad k=0,1,\ldots,n,
\]
则称$X$服从参数为$(n,p)$的二项分布（binomial distribution），
通常记为$X\sim B(n,p)$。不难验证上式的确给出了一个离散型分布：
对任意$k=0,1,\ldots,n$均有$\binom{n}{k} p^k (1-p)^{n-k}\geq 0$，
且二项式定理给出
\[
\sum_{k=0}^n \binom{n}{k}p^k (1-p)^{n-k}
=[p+(1-p)]^n = 1.
\]
图 1 给出了参数分别为
$(n,p)=(12,1/2)$与$(n,p)=(12,1/3)$的二项分布的分布列图像。

```tikz {caption="二项分布 $B(n,p)$ 的分布列图像。"}
\begin{tikzpicture}[scale=1]
\draw[-{Stealth[length=8pt]}] (-0.36,0) -- ({13*0.36},0) node[right] {\small $x$};
\draw[-{Stealth[length=8pt]}] (-0.36,-0) -- (-0.36,2.8) node[above] {\small $p(x)$};
\foreach \k in {0,...,12}
{
\draw[color=black] (\k*0.36,10*{0.000244140625, 0.0029296875, 0.01611328125, 0.0537109375, 0.120849609375, 0.193359375, 0.2255859375, 0.193359375, 0.120849609375, 0.0537109375, 0.01611328125, 0.0029296875, 0.000244140625}[\k]) -- (\k*0.36,0) node[below,yshift=-2pt] {\small$\k$};
\draw[fill=black] (\k*0.36,10*{0.000244140625, 0.0029296875, 0.01611328125, 0.0537109375, 0.120849609375, 0.193359375, 0.2255859375, 0.193359375, 0.120849609375, 0.0537109375, 0.01611328125, 0.0029296875, 0.000244140625}[\k]) circle (1.5pt);
}
\foreach \y in {0,0.1,0.2}
{
\draw (-0.36,\y*10)--(-0.36-0.1,\y*10) node[left]{\small$\y$};
}
\node[anchor=north] at (6*0.36, -0.75) {$(n,p)=(12,1/2)$.};
\end{tikzpicture}
\qquad
\begin{tikzpicture}[scale=1]
\draw[-{Stealth[length=8pt]}] (-0.36,0) -- ({13*0.36},0) node[right] {\small $x$};
\draw[-{Stealth[length=8pt]}] (-0.36,-0) -- (-0.36,2.8) node[above] {\small $p(x)$};
\foreach \k in {0,...,12}
{
\draw[color=black] (\k*0.36,10*{0.00770734662925893, 0.0462440797755536, 0.127171219382772, 0.211952032304621, 0.238446036342698, 0.190756829074159, 0.111274816959926, 0.0476892072685397, 0.0149028772714186, 0.00331175050475970, 0.000496762575713955, 0.0000451602341558141, 0.00000188167642315892}[\k]) -- (\k*0.36,0) node[below,yshift=-2pt] {\small$\k$};
\draw[fill=black] (\k*0.36,10*{0.00770734662925893, 0.0462440797755536, 0.127171219382772, 0.211952032304621, 0.238446036342698, 0.190756829074159, 0.111274816959926, 0.0476892072685397, 0.0149028772714186, 0.00331175050475970, 0.000496762575713955, 0.0000451602341558141, 0.00000188167642315892}[\k]) circle (1.5pt);
}
\foreach \y in {0,0.1,0.2}
{
\draw (-0.36,\y*10)--(-0.36-0.1,\y*10) node[left]{\small$\y$};
}
\node[anchor=north] at (6*0.36, -0.75) {$(n,p)=(12,1/3)$.};
\end{tikzpicture}
```

**几何分布。** 设$p\in\left]0,1\right[$。
若离散型随机变量$X$的分布列为
\[
p_X(k) = (1-p)^{k-1}p,\qquad k=1,2,3,\ldots,
\]
则称$X$服从参数为$p$的几何分布（geometric distribution）。
不难验证上式的确给出了一个离散型分布：
对任意正整数$k$均有$(1-p)^{k-1}p\geq 0$，
且由几何级数求和公式可得
\[
\sum_{k=1}^\infty (1-p)^{k-1}p=\frac{p}{1-(1-p)}=1.
\]
图 2 给出了参数分别为
$p=1/3$与$p=1/2$的几何分布的分布列图像。

```tikz {caption="参数为 $p$ 的几何分布的分布列图像。"}
\begin{tikzpicture}[scale=1]
\draw[-{Stealth[length=8pt]}] (0,0) -- ({9*0.5},0) node[right] {\small $x$};
\draw[-{Stealth[length=8pt]}] (0,-0) -- (0,2.8) node[above] {\small $p(x)$};
\foreach \k in {1,...,8}
{
\draw[color=black] (\k*0.5,{4.5*(1-1/3)^(\k-1)*1/3}) -- (\k*0.5,0) node[below,yshift=-2pt] {\small$\k$};
\draw[fill=black] (\k*0.5,{4.5*(1-1/3)^(\k-1)*1/3}) circle (1.5pt);
}
\foreach \y in {0,0.2,0.4}
{
\draw (0,\y*4.5)--(-0.1,\y*4.5) node[left]{\small$\y$};
}
\node[anchor=north] at (4.5*0.5, -0.6) {$p=1/3$.};
\end{tikzpicture}
\qquad
\begin{tikzpicture}[scale=1]
\draw[-{Stealth[length=8pt]}] (0,0) -- ({9*0.5},0) node[right] {\small $x$};
\draw[-{Stealth[length=8pt]}] (0,-0) -- (0,2.8) node[above] {\small $p(x)$};
\foreach \k in {1,...,8}
{
\draw[color=black] (\k*0.5,{4.5*(1-1/2)^(\k-1)*1/2}) -- (\k*0.5,0) node[below,yshift=-2pt] {\small$\k$};
\draw[fill=black] (\k*0.5,{4.5*(1-1/2)^(\k-1)*1/2}) circle (1.5pt);
}
\foreach \y in {0,0.2,0.4}
{
\draw (0,\y*4.5)--(-0.1,\y*4.5) node[left]{\small$\y$};
}
\node[anchor=north] at (4.5*0.5, -0.6) {$p=1/2$.};
\end{tikzpicture}
```

**泊松分布。** 设$\lambda\in\left]0,+\infty\right[$。
若离散型随机变量$X$的分布列为
\[
p_X(k) = \mathrm{e}^{-\lambda}\frac{\lambda^k}{k!},\qquad k=0,1,2,\ldots,
\]
则称$X$服从参数为$\lambda$的泊松分布（Poisson distribution）。
不难验证上式的确给出了一个离散型分布：对任意自然数$k$
均有$\mathrm{e}^{-\lambda}\lambda^k/k!\geq 0$，
且由指数函数的泰勒级数表示可得
\[
\sum_{k=0}^\infty \mathrm{e}^{-\lambda}\frac{\lambda^k}{k!}
=\mathrm{e}^{-\lambda}
\sum_{k=0}^\infty \frac{\lambda^k}{k!}
=
\mathrm{e}^{-\lambda}\cdot \mathrm{e}^{\lambda}=1.
\]
图 3 给出了参数分别为
$\lambda=1$与$\lambda=4$的泊松分布的分布列图像。

```tikz {caption="参数为 $\lambda$ 的泊松分布的分布列图像。"}
\begin{tikzpicture}[scale=1]
\draw[-{Stealth[length=8pt]}] (-0.42,0) -- ({11*0.42},0) node[right] {\small $x$};
\draw[-{Stealth[length=8pt]}] (-0.42,-0) -- (-0.42,2.8) node[above] {\small $p(x)$};
\foreach \k in {0,...,10}
{
\draw[color=black] (\k*0.42,7*{0.367879441171442, 0.367879441171442, 0.183939720585721, 0.0613132401952404, 0.0153283100488101, 0.00306566200976202, 0.000510943668293670, 0.0000729919526133814, 0.00000912399407667268, 0.00000101377711963030, 0.000000101377711963030}[\k]) -- (\k*0.42,0) node[below,yshift=-2pt] {\small$\k$};
\draw[fill=black] (\k*0.42,7*{0.367879441171442, 0.367879441171442, 0.183939720585721, 0.0613132401952404, 0.0153283100488101, 0.00306566200976202, 0.000510943668293670, 0.0000729919526133814, 0.00000912399407667268, 0.00000101377711963030, 0.000000101377711963030}[\k]) circle (1.5pt);
}
\foreach \y in {0,0.1,0.2,0.3}
{
\draw (-0.42,\y*7)--(-0.42-0.1,\y*7) node[left]{\small$\y$};
}
\node[anchor=north] at (5*0.42, -0.7) {$\lambda=1$.};
\end{tikzpicture}
\qquad
\begin{tikzpicture}[scale=1]
\draw[-{Stealth[length=8pt]}] (-0.36,0) -- ({13*0.36},0) node[right] {\small $x$};
\draw[-{Stealth[length=8pt]}] (-0.36,-0) -- (-0.36,2.8) node[above] {\small $p(x)$};
\foreach \k in {0,...,12}
{
\draw[color=black] (\k*0.36,10*{0.00770734662925893, 0.0462440797755536, 0.127171219382772, 0.211952032304621, 0.238446036342698, 0.190756829074159, 0.111274816959926, 0.0476892072685397, 0.0149028772714186, 0.00331175050475970, 0.000496762575713955, 0.0000451602341558141, 0.00000188167642315892}[\k]) -- (\k*0.36,0) node[below,yshift=-2pt] {\small$\k$};
\draw[fill=black] (\k*0.36,10*{0.00770734662925893, 0.0462440797755536, 0.127171219382772, 0.211952032304621, 0.238446036342698, 0.190756829074159, 0.111274816959926, 0.0476892072685397, 0.0149028772714186, 0.00331175050475970, 0.000496762575713955, 0.0000451602341558141, 0.00000188167642315892}[\k]) circle (1.5pt);
}
\foreach \y in {0,0.1,0.2}
{
\draw (-0.36,\y*10)--(-0.36-0.1,\y*10) node[left]{\small$\y$};
}
\node[anchor=north] at (6*0.36, -0.7) {$\lambda=4$.};
\end{tikzpicture}
```

二项分布、几何分布与泊松分布的意义将在随后的章节进行介绍。

## @theorem:discrete_rv_construction 的证明* {@subsection:discrete_rv_construction_proof}

取样本空间为$\Omega=\{x\in\mathbb{R} \mid p(x)>0\}$，
事件域为$\mathcal{F}=2^\Omega$。注意到每个事件都是可数集，
可令$\mathbb{P}$为
\[
\mathbb{P}(E) = \sum_{x\in E}p(x),\qquad \forall E\subseteq \Omega.
\]
不难看出
\[
\mathbb{P}(\Omega) = \sum_{x\in \Omega}p(x)
= 1.
\]
而对任意事件$E$，有$\mathbb{P}(E)\geq 0$以及
$\mathbb{P}(E) = \sum_{x\in E}p(x)
\leq \sum_{x\in \Omega}p(x)=1$。为证明$\mathbb{P}$的可数可加性，
令$E_1,E_2,\ldots$为一列两两互不相交的事件，则有
\[
\mathbb{P}\left(\bigcup_{i=1}^{\infty}E_i\right)
=\sum_{x\in \bigcup_{i=1}^{\infty} E_i} p(x)
=\sum_{i=1}^\infty \sum_{x\in E_i} p(x)
=\sum_{i=1}^\infty \mathbb{P}(E_i),
\]
其中第二步利用了$E_1,E_2,\ldots$两两互不相交的性质。
故$\mathbb{P}$为一概率测度。
最后取函数$X:\Omega\rightarrow\mathbb{R}$为$X(\omega)=\omega$，
则易知$X$为离散型随机变量，其分布列为$p$，从而
@theorem:discrete_rv_construction 成立。
