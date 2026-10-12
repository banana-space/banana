---
title: 分布的局部刻画与支集
---

## 分布的局部刻画

我们来说明分布是可通过**局部**定义的数学对象，
即分布$u$在（所有）小的开集上的限制决定了$u$。
为此，我们先回忆一下所谓的单位分解。

::: theorem [单位分解]
任意给定 $\mathbb{R}^n$ 中的紧集 $K$，假设 $K$ 被有限个开集 $\{U_1,\cdots,U_N\}$ 所覆盖。
那么，对每个 $j\leqslant N$，存在光滑函数 $\chi_j \in C_0^\infty(U_j)$，满足

- 1\) 对任意 $x\in \mathbb{R}^n$，有 $0\leqslant \chi_j(x)\leqslant 1$；

- 2\) 存在包含 $K$ 的开集 $V$，对任意 $x\in V$，我们有
  \[
  \chi_1(x)+\cdots+\chi_N(x)=1.
  \]

:::

为了证明单位分解定理，我们先证明如下的引理：

::: lemma
假设 $\Omega\subset \mathbb{R}^n$ 是开集，$K\subset \Omega$ 是紧集，那么，
存在 $\varphi \in C_0^\infty(\Omega)$ 和开集 $V$，使得

- 1\) $K\subset V \subset U$；

- 2\) 对任意的 $x\in \Omega$，$0\leqslant \varphi(x) \leqslant 1$；

- 3\) $\varphi\big|_{V}\equiv 1$。

:::

::: proof [证明梗概]
首先，我们可以选取 $\delta>0$，使得
\[
K_{2\delta}=\bigl\{x\in \mathbb{R}^n \bigm|  |x-k|\leq 2\delta, ~\text{对某个}~k \in K \bigr\}\subset U.
\]
令 $\phi(x)=\mathbf{1}_{K_{2\delta}}(x)$。
我们选取我们常用的 $\chi(x)$，其中，我们要求它的积分为 $1$。再令
\[
\chi_{\varepsilon}(x)=\frac{1}{\varepsilon^n}\chi\left(\frac{x}{\varepsilon}\right).
\]
那么，我们可以选取
\[
\varphi=\phi * \chi_{\varepsilon},  \ \ V=K_{\delta},
\]
其中 $\varepsilon<\delta$。证明的细节留作作业。
:::

::: proof [单位分解的证明梗概]
对于每个开集 $U_i$，我们可以选取紧集 $K_i\subset U_i$，
使得 $\displaystyle \bigcup_{i\leqslant N}K_i$ 仍然包含 $K$。
此时，我们对每个 $K_i\subset U_i$ 运用上面的引理，那么，
我们可以找到 $\varphi_i \in C_0^\infty(U_i)$ 和开集 $V_i$，使得 $K_i\subset V \subset U$，
$\varphi_i$ 的值域落在 $[0,1]$ 中并且 $\varphi_i\big|_{V_i}\equiv 1$。

最终，对每个 $i\leqslant N$，我们令
\[
\chi_i(x)=\frac{\varphi_i(x)}{\varphi_1(x)+\cdots+\varphi_N(x)}
\]
即可。证明的细节留作作业。
:::

::: remark*
单位分解的证明并没有任何启发性的意义，我们只要能够运用该结论即可。
:::

::: theorem
给定开集$\Omega \subset \mathbb{R}^n$。
任意给定一族开集$\big\{\Omega_i\big|i\in I\big\}$，其中对任意的$i\in I$，$\Omega_i\subset \Omega$。
我们假定
\[
\Omega=\bigcup_{i\in I}\Omega_i.
\]
对每个$i\in I$，我们在$\Omega_i$上指定一个分布$u_i\in \mathcal{D}'(\Omega_i)$。
如果这一族分布$\{u_i\}_{i\in I}$满足如下的相容关系：
\[
u_i\big|_{\Omega_i\cap \Omega_j}=u_j\big|_{\Omega_i\cap \Omega_j},\ \ \text{对任意的}~ i,j \in I,
\]
那么，存在唯一的$u\in \mathcal{D}'(\Omega)$，使得对任意的$i\in I$，我们都有
\[
u \big|_{\Omega_i}=u_i.
\]
进一步，$u\in L^1_{\rm loc}(\Omega)$当且仅当对每个$i\in I$，
$u\big|_{\Omega_i}\in L^1_{\rm loc}(\Omega)$；$u\in C^k(\Omega)$当且仅当对每个$i\in I$，
$u\big|_{\Omega_i}\in C^k(\Omega)$，其中$k\in \mathbb{Z}_{\geqslant 0}$。
:::

::: proof
任意选定紧集$K\subset \Omega$。
由于$\big\{\Omega_i\big\}_{i\in I}$也是$K$的开覆盖，
我们选取有限开覆盖$\Omega_{i_1},\cdots, \Omega_{i_N}$以及相应的单位分解
$\chi_1,\cdots,\chi_N$（与前面的定理相对应）。对任意的$\varphi\in C^\infty_K(\Omega)$，我们定义
\[
\langle u_K, \varphi \rangle:=\sum_{l=1}^N \langle u_{i_l}, \chi_l \cdot \varphi\rangle.
\]
我们必须说明$\langle u_K, \varphi \rangle$的定义不依赖于覆盖$\{\Omega_{i_l}\}$和单位分解$\{\chi_l\}$
的选取。
实际上，
如果我们再选取$K$的有限开覆盖$\Omega_{i'_1},\cdots, \Omega_{i'_{N'}}$以及相应的单位分解
$\chi'_1,\cdots,\chi'_{N'}$（其中$i'_k\in I$），我们有
\[
\begin{aligned}
\sum_{l=1}^N \left\langle u_{i_l}, \chi_l \cdot \varphi\right\rangle&=\sum_{l=1}^N  \left\langle u_{i_l},  \overbrace{\left( \sum_{l'=1}^{N'}\chi'_{l'} \right)}^{\text{在${\rm supp}\varphi$上}\ \equiv 1}\chi_l\cdot \varphi\right\rangle\\
&=\sum_{l=1}^N \sum_{l'=1}^{N'} \langle u_{i_l}, \underbrace{\chi_l \chi'_{l'} \cdot \varphi}_{{\rm supp}(\chi_l \chi'_{l'}) ~\subset ~\Omega_{i_l}\cap \Omega_{i'_{l'}}}\rangle\\
&=\sum_{l=1}^N \sum_{l'=1}^{N'} \left\langle u_{i_l}\big|_{\Omega_{i_l}\cap \Omega_{i'_{l'}}}, \chi_l \chi'_{l'} \cdot \varphi\right\rangle\\
&=\sum_{l=1}^N \sum_{l'=1}^{N'}  \left\langle u_{i'_{l'}}\big|_{\Omega_{i_l}\cap \Omega_{i'_{l'}}}, \chi_l \chi'_{l'} \cdot \varphi\right\rangle.
\end{aligned}
\]
根据上述计算的对称性，
我们知道它一定等于
$\displaystyle \sum_{l'=1}^{N'} \left\langle u_{i'_{l'}}, \chi'_{l'} \varphi\right\rangle$。
所以，我们最终证明了
\[
\sum_{l=1}^N \left\langle u_{i_l}, \chi_l \cdot \varphi\right\rangle=\sum_{l'=1}^{N'} \left\langle u_{i'_{l'}}, \chi'_{l'} \varphi\right\rangle.
\]
这就说明线性映射$u_K$是良好定义的。

所以，我们就把$u$定义为
\[
\langle u,\varphi\rangle=\langle u_K,\varphi\rangle,
\]
其中$\varphi \in  C^\infty_K(\Omega)$。
为了说明$u$是良好定义的，我们要说明这个定义与紧集$K$的依赖关系，
即如果${\rm supp}\varphi \subset K$并且${\rm supp}\varphi \subset K'$，其中$K'$是另一个紧集，
我们需要证明
\[
\langle u_K, \varphi \rangle=\langle u_{K'}, \varphi \rangle.
\]
事实上，${\rm supp}~\varphi \subset K\cap K'=K''$。
所以，关于$K$的覆盖以及其相应的单位分解也可视作是$K''$的单位分解，所以，
利用单位分解所定义的$u_K$与$u_{K''}$是一致的，即
\[
\langle u_K, \varphi \rangle=\langle u_{K''}, \varphi \rangle.
\]
同理，
\[
\langle u_{K'}, \varphi \rangle=\langle u_{K''}, \varphi \rangle.
\]
所以，
\[
\langle u_K, \varphi \rangle=\langle u_{K'}, \varphi \rangle.
\]
最终，我们要说明$u=u_K$满足分布定义中所要求的不等式：给定紧集$K\subset \Omega$，
选取有限开覆盖$\Omega_{i_1},\cdots, \Omega_{i_N}$以及相应的单位分解$\chi_1,\cdots,\chi_N$。
我们用$K_l$表示$\chi_{i_l}$的支集，那么，$K_i\subset \Omega_{i_l}$是紧集，其中$l\leqslant N$。
对任意的$\varphi\in C^\infty_K(\Omega)$，我们有
\[
\begin{aligned}
|\langle u, \varphi \rangle|&=|\langle u_K, \varphi \rangle|=\left|\sum_{l=1}^N \left \langle u_{i_l}, \chi_l \cdot \varphi\right\rangle\right|\\
&\leqslant\sum_{l=1}^N  \left|\left \langle u_{i_l}, \chi_l \cdot \varphi\right\rangle\right|\\
&\leqslant\sum_{l=1}^N C_i\sup_{|\alpha_l|\leqslant p_l}\|\partial^{\alpha_l}(\chi_l \cdot \varphi)\|_{L^\infty(K_l)}\\
&\leqslant C \sup_{|\alpha|\leqslant {\sup_{l\leqslant N} p_l}}\|\partial^{\alpha}\varphi\|_{L^\infty(K)}.
\end{aligned}
\]
命题中另外两个论断是平凡的。
:::

::: remark*
这个定理表明，
把开集 $\Omega \subset \mathbb{R}^n$
对应至分布空间 $\mathcal{D}'(\Omega)$ 的函子是$\mathbb{R}^n$上的[[层]]。
:::

## 分布的支集

给定开集上的分布$u\in \mathcal{D}'(\Omega)$，
我们来定义它的**支集**。

假设$\Omega'\subset \Omega$是开子集，
如果$u\big|_{\Omega'}=0$，我们就说 **$u$在$\Omega'$上为零**，
也就是说，对于每个$\varphi \in \mathcal{D}(\Omega')$，我们有
\[
\langle u, \varphi \rangle =0.
\]
我们现在来说明，存在$\Omega$中使得$u$在其上为零的最大开集。为此，我们定义
\[
I=\big\{\Omega'\big|\Omega'\subset \Omega~\text{为开集}, u\big|_{\Omega'}=0\big\}.
\]
令
\[
U=\bigcup_{\Omega'\in I}\Omega'.
\]
按照定义，$U$ 为开集。
我们要证明$U\in I$，为此，只要证明对任意的$\varphi \in C^\infty_0(U)$，我们都有
\[
\langle u, \varphi \rangle =0,
\]
即可。实际上，令$K={\rm supp}(\varphi)$，那么存在有限个$\Omega_1,\cdots,\Omega_N \in I$覆盖$K$。
我们取与这个覆盖相应的单位分解$\chi_1,\cdots, \chi_N$。从而，
\[
\begin{aligned}
\langle u, \varphi \rangle&=\sum_{j=1}^N\langle u, \overbrace{\chi_i \varphi}^{\text{支集在}~{\Omega_i}~\text{中}} \rangle=0.
\end{aligned}
\]
最后一步，我们用到了$u\big|_{\Omega_i}=0$。很明显，$U$是这种开集中最大的。

::: definition [支集]
我们把$\Omega-U$称作是$u$的**支集**并仍然用符号${\rm supp}(u)$表示。
如果${\rm supp}(u)$是紧集，我们就说$u$是有紧支集的分布。
我们用$\mathcal{E}'(\mathbb{R}^n)$来表示$\mathbb{R}^n$上有紧支集的分布的全体。
:::

我们现在研究$\mathcal{E}'(\mathbb{R}^n)$中的分布的基本性质：

::: proposition
在此命题中出现的分布都是有紧支集的

- 1\) $\mathcal{E}'(\mathbb{R}^n)$是线性空间，并且
  \[
  {\rm supp}(u_1+u_2)\subset {\rm supp}(u_1)\cup {\rm supp}(u_2).
  \]

- 2\) 对任意的多重指标$\alpha$，我们有
  \[
  {\rm supp}\left(\partial^\alpha u\right) \subset {\rm supp}(u).
  \]

- 3\) 对任意的$f\in C^\infty(\mathbb{R}^n)$，我们有
  \[
  {\rm supp}(f\cdot u)\subset {\rm supp}(u) \cap {\rm supp}(f).
  \]

- 4\) 任意给定试验函数$\varphi \in \mathcal{D}(\mathbb{R}^n)$，
  如果${\rm supp}(u) \cap {\rm supp}(\varphi) =\emptyset$，那么
  \[
  \langle u, \varphi \rangle =0.
  \]

- 5\) 有紧支集的分布的阶是有限的。

:::

::: proof
前三条性质按定义立得，我们留作作业。

为了证明4)，我们注意到存在开集$\Omega'\supset {\rm supp}(\varphi)$，
使得$\Omega'\cap {\rm supp}(u)=\emptyset$。
按照支集的定义，$u\big|_{\Omega'}=0$，所以，$\langle u, \varphi \rangle =0$。

为了证明5)，我们令$K={\rm supp}(u)$。
此时，存在$\psi \in C^\infty_0(\mathbb{R}^n)$，使得$\psi\big|_K\equiv 1$。
我们令$K'={\rm supp}(\psi)$。特别地，我们有
\[
K\subset K'.
\]
对于任意的试验函数$\varphi\in \mathcal{D}(\mathbb{R}^n)$，我们有
\[
\begin{aligned}
\langle u, \varphi \rangle&=\langle u, \psi\varphi \rangle.
\end{aligned}
\]
这是因为根据4)，${\rm supp}((1-\psi)\varphi)\cap {\rm supp}(u)=\emptyset$。
我们注意到$\psi$是事先给定的，所以对任意的试验函数$\varphi$，我们都有
\[
{\rm supp}(\psi\varphi)\subset K'.
\]
这是一个固定的紧集。那么，按照分布的定义，在紧集$K'$上所对应的$C$和$p$，使得
\[
\begin{aligned}
|\langle u, \varphi \rangle|&=|\langle u, \psi\varphi \rangle|\\
&\leqslant C\sup_{|\alpha|\leqslant p}\|\partial^\alpha(\psi\cdot \varphi)\|_{L^\infty(K')}.
\end{aligned}
\]
上述右边至多出现了$u$的$p$-次导数，所以$p$可以作为$u$的阶的上界。
:::

利用证明中的技巧，我们有如下有趣的注解：

::: remark*
对于有紧支集的分布，我们可以扩大试验函数的空间来定义如下的配对：
\[
\mathcal{E}'(\mathbb{R}^n)\times
C^\infty(\mathbb{R}^n)\longrightarrow \mathbb{C},
\ \ \langle u, \varphi\rangle
:=\langle u, \psi\cdot \varphi \rangle,
\]
其中，$\psi$是在$K={\rm supp}(u)$上恒为$1$的有紧支集的光滑函数。
我们将在作业中证明这个定义不依赖于$\psi$的选取。

这种用乘以一个函数的方式来记住一个分布的支集是一个很有用的技巧，之后会经常看到。
:::

我们现在引入平坦的概念：
给定非空的闭集
$F\subset \mathbb{R}^n$，
$\varphi\in \mathcal{D}(\mathbb{R}^n)$是试验函数。
如果存在非负整数$p$，
使得对每个满足$|\alpha|\leqslant p$的多重指标$\alpha$，我们都有
\[
\partial^\alpha \varphi\big|_F=0,
\]
我们就说试验函数$\varphi$在$F$上是 **$p$-次平坦的**。

::: lemma [平坦性引理]
给定阶为$p$的分布$u\in \mathcal{D}'(\mathbb{R}^n)$，
如果试验函数$\varphi\in \mathcal{D}(\mathbb{R}^n)$在${\rm supp}(u)$上$p$-次平坦，那么
\[
\langle u, \varphi\rangle=0.
\]
:::

::: proof
我们定义如下的集合：
\[
K ={\rm supp}(\varphi), \ \ F={\rm supp}(u), \ \ L = K\cap F.
\]
我们还定义
\[
L_{k\varepsilon} = \{x\in \mathbb{R}^n\big| d(x,L)<k\varepsilon \}, \ \ k=1,2,3.
\]

我们仍然用$\chi_\varepsilon$来记我们心爱的截断函数。此时，我们定义
\[
\psi_\varepsilon = \mathbf{1}_{L_{2\varepsilon}}*\chi_\varepsilon.
\]
这个函数满足如下几条显然的性质

- 1\) ${\rm supp}(\psi_\varepsilon) \subset L_{3\varepsilon}$；

- 2\) $\psi_\varepsilon\big|_{L_{\varepsilon}} \equiv 1$；

- 3\) 对每个多重指标$\alpha$，我们都有
  \[
  \|\partial^\alpha \psi_\varepsilon\|_\infty \leqslant C_\alpha \varepsilon^{-|\alpha|}.
  \]
  其中，$C_\alpha = \|\partial^\alpha \chi\|_{L^1}$：

  实际上，我们有
  \[
  \begin{aligned}
  |\partial^\alpha \psi_\varepsilon|&= |\mathbf{1}_{L_{2\varepsilon}}*\left(\partial^\alpha\chi_\varepsilon\right)|\\
  &\leqslant \varepsilon^{-|\alpha|}\int_{L_{2\varepsilon}} \varepsilon^{-n}\left|(\partial^\alpha\chi)\left(\frac{x}{\varepsilon}\right)\right|dx\\
  &= \varepsilon^{-|\alpha|} \|\partial^\alpha \chi\|_{L^1}.
  \end{aligned}
  \]

我们利用$\psi_\varepsilon$将$\varphi$切成两个部分：
\[
\begin{aligned}
\langle u, \varphi \rangle&=\langle u, \overbrace{(1-\psi_\varepsilon) \varphi}^{\text{支集与~$F$~不交}} \rangle+\langle u, \overbrace{\psi_\varepsilon \varphi}^{\text{支集}~\subset L_{3\varepsilon}} \rangle\\
&=\langle u, \psi_\varepsilon \varphi \rangle.
\end{aligned}
\]
由于$\varphi$在$F$上是$p$-阶平坦的并且$L_{3\varepsilon}$中的每个点距离$F$不超过$3\varepsilon$，
根据Taylor公式，对于任意的$y\in L_{3\varepsilon}$，存在$x \in F$并且$|x-y|<3\varepsilon$，
以及$\vartheta \in  [0,1]$，使得
\[
\begin{aligned}
\varphi(y)&=\sum_{|\alpha|\leqslant p}\frac{\partial^\alpha \varphi(x)}{\alpha!}(x-y)^{\alpha}+\sum_{|\alpha|= p+1}\frac{\partial^\alpha \varphi\big(x+\vartheta (y-x)\big)}{\alpha!}(x-y)^{\alpha}\\
&\stackrel{\text{平坦性}}{=}\sum_{|\beta|= p+1}\frac{\partial^\beta \varphi\big(x+\vartheta (y-x)\big)}{\beta!}(x-y)^{\beta}.
\end{aligned}
\]
所以，
\[
\begin{aligned}
\partial^\alpha \varphi(y)&=\sum_{|\beta|= p+1}\sum_{\alpha_1+\alpha_2=\alpha}\frac{\alpha!}{\alpha_1!\alpha_2!}\frac{\partial^{\alpha_1}\left(\partial^{\beta} \varphi\big(x+\vartheta (y-x)\big)\right)}{\beta!}\underbrace{\partial^{\alpha_2}\left((x-y)^{\beta}\right)}_{|~\cdot~|\leqslant C \varepsilon^{p+1-|\alpha_2|}}.
\end{aligned}
\]
所以，在$L_{3\varepsilon}$上，当$|\alpha|\leqslant p$时，存在常数$C$（依赖于$\varphi$，可能很大，
但是这个常数不依赖于$\varepsilon$），使得
\[
|\partial^\alpha \varphi|\leqslant C \varepsilon^{p+1-|\alpha|}.
\]
从而对于$|\alpha|\leqslant p$，我们就有（利用Leibniz公式）
\[
\begin{aligned}
|\partial^\alpha \big(\psi_\varepsilon \cdot \varphi\big)|&\leqslant 2^{|\alpha|}\sum_{|\beta|\leqslant |\alpha|}|\partial^{\alpha-\beta}\psi_\varepsilon|  |\partial^\beta \varphi|\\
&\leqslant C' \sum_{|\beta|\leqslant |\alpha|} \varepsilon^{-|\alpha-\beta|} \varepsilon^{p+1-|\beta|}\\
&\leqslant C'' \varepsilon.
\end{aligned}
\]
根据分布的定义以及$u$的阶不超过$p$，我们知道
\[
\begin{aligned}
|\langle u, \psi_\varepsilon\cdot \varphi \rangle|&\leqslant C'''\sup_{|\alpha|\leqslant p} \|\partial^\alpha \big(\psi_\varepsilon \cdot \varphi\big)\|_{L^\infty(L_{3\varepsilon})}\\
&\leqslant C''''\varepsilon
\end{aligned}
\]
令$\varepsilon \rightarrow 0$，这就完成了该定理的证明。
:::

::: theorem [支集为单点集的分布的结构定理]
任意给定分布$u\in \mathcal{D}'(\mathbb{R}^n)$，如果它的支集满足
\[
{\rm supp}(u) =\{0\},
\]
那么，存在有限多个多重指标$\alpha_i$和复数$C_{\alpha_i}$，其中$i=1,\cdots, N$，使得
\[
u =\sum_{j=1}^N C_{\alpha_j}\cdot \partial^{\alpha_j} \left(\delta_0\right).
\]
:::

::: proof
由于$u$的支集是紧的，我们可假设其阶为$p\in \mathbb{Z}_{\geqslant 0}$。
我们选取有紧支集的函数$\chi$，使得它在包含$0$的一个开集上为$1$。
我们用类似于多项式的近试验函数
$\displaystyle  \left(\sum_{|\alpha|\leqslant p}\frac{\partial^\alpha \varphi(0)}{\alpha!}x^\alpha\right)\chi(x)$
来逼近$\varphi$，即定义
\[
r(x)=\varphi(x) - \left(\sum_{|\alpha|\leqslant p}\frac{\partial^\alpha \varphi(0)}{\alpha!}x^\alpha\right)\chi(x).
\]
很明显，$r(x)$是试验函数。

由于
$\displaystyle  \left(\sum_{|\alpha|\leqslant p}\frac{\partial^\alpha \varphi(0)}{\alpha!}x^\alpha\right)\chi(x)$
和$\varphi(x)$在$0$处一直到$p$阶导数是相等的，所以，$r(x)$在$\{0\}$上是$p$-阶平坦的，所以
\[
\langle u,r\rangle=0.
\]
从而，
\[
\langle u,\varphi\rangle =\sum_{|\alpha|\leqslant p}\frac{\partial^\alpha \varphi(0)}{\alpha!}\left\langle u, x^\alpha \chi\right\rangle,
\]
所以，
只要取$\displaystyle C_\alpha=(-1)^{|\alpha|}\frac{\langle u, x^\alpha \chi\rangle}{\alpha!}$，
我们就有
\[
\langle u,\varphi\rangle =\sum_{|\alpha|\leqslant p}C_\alpha\left\langle \partial^\alpha(\delta_0),\varphi\right\rangle.
\]
命题得证。
:::
