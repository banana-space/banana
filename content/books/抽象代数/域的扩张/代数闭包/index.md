---
title: 代数闭包
---

::: proposition {@prop:KP-construction}
$K$是域，$P\in K[X]$，则存在有限域扩张$
  {K_P/K}
$，使得$P$在$K_P$中有根，即存在$y\in K_P$，使得$P(y)=0$。
:::

::: proof
不妨设$P(X)$不可约，否则考虑$P$的一个不可约因子即可。考虑环同态的复合
\[
K\hookrightarrow K[X]\longrightarrow
  {K[X]/(P)}
\equalscolon K_P.
\]
这是$K$的有限扩张。
记$\varphi\colon K[X]\longrightarrow K_P$，记$X\in K[X]$在$K_P$中的像为$y$，即$\varphi(X)=y$。

由于$P(X)$在$
  {K[X]/(P)}
$中的像为$0$，根据$\varphi$是域同态，有
\[
P(\varphi(X))=\varphi(P(X))=0,
\]
即$P(y)=0$。
:::

::: proposition
$K$是域，则如下性质等价：

- 1\) 每个次数至少为$1$的多项式$P\in K[X]$在$K$中有根；

- 2\) $K[X]$中不可约多项式（默认其次数至少为$1$）均为$1$次多项式；

- 3\) 若$
  {L/K}
$是代数扩张，则$L=K$。

若$K$满足以上性质，则称其为**代数封闭域**。
:::

::: proof
1)$\Leftrightarrow$ 2)是显然的。
先证明 2)$\Rightarrow$ 3)：对任意的$x\in L$，令$P\in K[X]$为其极小多项式，从而，$P(X)=X-x$，从而，
$x\in K$，即$L\subset K$。

再证 3)$\Rightarrow$ 2)。任选不可约多项式$P\in K[X]$，则$
  {K_P/K}
$是代数扩张，从而$K_P=K$。所以，$\deg(P)=[K_P:K]=1$。
:::

::: definition
$K$是域，若$
  {\Omega/K}
$为代数扩张且$\Omega$是代数封闭域，就称$\Omega$为$K$的一个**代数闭包**。
:::

以下我们证明域$K$具有唯一（在$K$-同构的意义下）的代数闭包。

## 代数闭包的存在性

::: lemma {@lem:extension-to-find-roots}
$K$是域，$P(X)\in K[X]$，则存在代数扩张$
  {L/K}
$，使得$P$在$L$中**分裂**，即在$L[X]$中，有
\[
P(X)=a(X-\alpha_1)(X-\alpha_2)\cdots(X-\alpha_n).
\]
其中$a\in K$，$\alpha_1,\cdots, \alpha_n \in L$。
:::

::: proof
对$P$的次数进行归纳：当$\deg(P)\leqslant 1$时，命题是平凡的。
假设$\deg(P)\geqslant 2$，根据 @prop:KP-construction，$P(X)$在代数扩张$
  {K_P/K}
$中有根$\alpha$。将$P(X)$视为$K_P$系数的多项式，则它在$K_P[X]$中分解为
\[
P(X)=(X-\alpha)\cdot Q(X),
\]
其中，$\alpha\in K_P$并且$\deg(Q)<\deg(P)$。根据归纳假设，存在代数扩张$
  {L/K_P}
$，使得$Q(X)$在$L[X]$中分裂，所以$P(X)=Q(X)(X-\alpha)$也在$L[X]$中分裂。
:::

::: lemma [E. Artin]
$K$是域，则存在域扩张$
  {L/K}
$，使得对任意次数至少为$1$的多项式$P(X)\in K[X]$，$P$在$L$中有根。
:::

::: proof
定义由$K$上所有非常数多项式作为不定元生成的多项式环
\[
A\coloneqq K\left[X_P\Bigm| P\in K[X], \ \deg(P)\geqslant 1\right]=\bigcup_{F\subset K[X]-K, \atop |F|<\infty}K\big[X_P| P\in F\big].
\]
令$\mathfrak{J}$为由形如$P(X_P)$的元素所生成的理想，即
\[
\mathfrak{J}=\left(P(X_P)\Bigm| P\in K[X], \ \deg(P)\geqslant 1\right),
\]
其中，对$P(X)=\displaystyle \sum_{i=0}^n a_i X^i$，
$P(X_P)=\displaystyle \sum_{i=0}^n a_i X_P^i\in A$，其中，$a_i\in K$。
类似于 @prop:KP-construction，对任意的$P\in K[X]$，$P$在$
  {A/\mathfrak{J}}
$中有根。为了保证得到域扩张，还需要如下的细节：

- $\mathfrak{J}\neq A$。

  若不然，则有$P_1,\cdots,P_n\in K[X]$以及$Q_1,\cdots,Q_n\in A$，使得
  \[
  \sum_{k=1}^nQ_k\cdot P_k(X_{P_k})=1.
  \]
  不失一般性，可假设$Q_k=Q_k(X_{P_1},\cdots, X_{P_n})$。用变元$T_k$表示$X_{P_k}$，以上等式表明

  ```math {@eq:sum-equal-1}
  \sum_{k=1}^nQ_k(T_1,\cdots,T_n)\cdot P_k(T_k)=1.
  ```

  根据 @lem:extension-to-find-roots，存在域扩张$K'$，使得每个$P_k$在$K'$中有根$\alpha_k$，其中，
  $k=1,\cdots,n$。据此，可以构造环同态
  \[
  K[T_1,\cdots,T_k]\rightarrow K',\ \ T_k\mapsto \alpha_k, \ k=1,\cdots, n.
  \]
  此时，@eq:sum-equal-1 的左端的像为$0$而右端的像为$1$，矛盾。

- 任选$A$的极大理想$\mathfrak{m}$，使得$\mathfrak{m}\supset \mathfrak{J}$并定义$L=
  {A/\mathfrak{m}}
$。那么，$L$是域并且以下复合映射
  \[
  K\rightarrow
    {A/\mathfrak{J}}
  \rightarrow
    {A/\mathfrak{m}}
  \]
  给出了域扩张$
  {L/K}
$。

根据$\mathfrak{J}$的定义，$P(X_P)$在$
  {A/\mathfrak{J}}
$中为$0$，从而在$
  {A/\mathfrak{m}}
$中为$0$，即$X_P+\mathfrak{m}\in L$是多项式$P(X)$的根。
:::

::: remark
给定域$K$，记以上引理中的$L=
  {A/\mathfrak{m}}
$为$E(K)$。我们注意到以上的构造过程不能保证$
  {E(K)/K}
$为代数扩张。
:::

对$k\geqslant 1$，我们归纳地定义
\[
E^{k+1}(K)=E(E^k(K)).
\]
这给出了域扩张的序列：
\[
\begin{tikzcd}
K\arrow[r,  dash] & E(K) \arrow[r,  dash]&  E^2(K)      \arrow[r,  dash]&\cdots \arrow[r,  dash]&E^k(K)                \arrow[r,  dash]&\cdots     .
 \end{tikzcd}
\]
令$E^\infty(K)=\bigcup_{k\geqslant 1}E^k(K)$，则$E^\infty(K)$是域：因为对任意的$x\in E^\infty(K)$，
则存在$k\geqslant 1$，使得$x\in E^k(K)$，从而$x^{-1}\in E^k(K)\subset E^\infty(K)$。

根据构造，$E^\infty(K)$还是代数封闭域：实际上，对任意$P(X)\in E^\infty(K)[X]$，存在$k\geqslant 1$，
使得$P(X)\in E^k(K)[X]$。此时，$P(X)$的根均落在$E^{k+1}(K)\subset E^\infty(K)$中。

::: lemma {@lem:small-for-alg-closure}
给定域扩张$
  {L/K}
$，其中$L$是代数封闭域，则
\[
\Omega=\big\{x\in L \bigm|  \text{ $x$ 在 $K$ 上是代数的}\big\}
\]
是$K$的代数闭包。
:::

::: proof
由于$\Omega=K(\Omega)$是$K$通过添加代数元得到域扩张，所以$
  {\Omega/K}
$是代数扩张。现在证明$\Omega$是代数封闭的。任选多项式
\[
P(X)=\omega_nX^n+\cdots+\omega_1X+\omega_0 \in \Omega[X],
\]
根据$L$是代数封闭的，对任意$P$的根$x\in L$，只要证明$x\in \Omega$即可。
根据$\Omega$的定义，这等价于证明$x$在$K$上是代数的。
实际上，由于$\omega_0,\cdots,\omega_n$在$K$上是代数的，
$x$在$K(\omega_0,\cdots,\omega_n)$上是代数的，所以域扩张
\[
\begin{tikzcd}
K\arrow[r,  dash] & K(\omega_0,\cdots,\omega_n) \arrow[r,  dash]& K(\omega_0,\cdots,\omega_n,x)
 \end{tikzcd}
\]
是有限扩张。从而，$x$在$K$上是代数的。
:::

根据这个引理，我们最终可以完成$K$的代数闭包的构造。定义
\[
\Omega=\left\{x\in E^\infty(K)\bigm|x\text{~在 $K$ 上是代数的}\right\}.
\]
由于$E^\infty(K)$是代数封闭的，所以$\Omega$是$K$的代数闭包。

## 域同态扩张的技术引理

给定域扩张$
  {L/K}
$，$x\in L$，$P(X)\in K[X]$是$x$的极小多项式，我们有域同构
\[
{\rm ev}_x\colon
  {K[X]/(P(X))}
\stackrel{\simeq}{\longrightarrow} K(x)=K[x]\subset L,  \ \  Q(X)\mapsto Q(x).
\]
特别地，$x\in L$定义出$K$-同态：
\[
{\rm ev}_x\colon
  {K[X]/(P(X))}
\longrightarrow L,  \ \  Q(X)\mapsto Q(x).
\]

::: lemma {@lem:1-1-correspondance-roots-and-embedding}
给定域扩张$
  {L/K}
$以及*不可约多项式*[^1] $P(X)\in K[X]$，令$Z_P(L)$为$P$在$L$中（不同的）根的集合，即
\[
Z_P(L)=\big\{P(\alpha)=0\mid\alpha \in L\big\}.
\]
那么，我们有如下一一对应：
\[
\begin{tikzcd}
 Z_P(L) \arrow[rr,"1:1"] & &  {\rm Hom}_K\left(
  {K[X]/(P(X))}
,L\right),\\
 \alpha\arrow[rr,mapsto]& &{\rm ev}_\alpha
  \end{tikzcd}
\]
特别地，$\left|{\rm Hom}_K\left(
  {K[X]/(P(X))}
,L\right)\right|\leqslant \deg(P)$。
:::

::: remark
简而言之，不可约多项式$P(X)$在$L$中不同根的个数等于$K_P\simeq
  {K[X]/(P(X))}
$到$L$的$K$-同态的个数。特别地，重根的出现使得域$K_P$到$L$的$K$-同态减少。
:::

::: proof
给定$\alpha \in  Z_P(L)$，由于$P$不可约，在$\alpha$处取值所定义环同态
\[
{\rm ev}_\alpha\colon K[X]\rightarrow L, \ \ Q(X)\mapsto Q(\alpha),
\]
的核是$\big(P(X)\big)$。这就定义了$K$-同态：
\[
{\rm ev}_\alpha\colon
  {K[X]/(P(X))}
\rightarrow L, \ \ Q(X)\mapsto Q(\alpha).
\]

反之，对任意的$K$-同态：
\[
\varphi\colon
  {K[X]/(P(X))}
\rightarrow L,
\]
令$\alpha=\varphi\big(X+(P(X))\big)$。由于$P(X)$的像为$0$，所以，
\[
P(\alpha)=P\big(\varphi\big(X+(P(X))\big)\big)=\varphi(P(X))=0.
\]
这就给出$P$在$L$中的一个根。

不难验证，以上映射互为逆，这就是命题要求的一一对应。

由于$Z_P(L)\leqslant \deg(P)$，所以$\left|{\rm Hom}_K\left(
  {K[X]/(P(X))}
,L\right)\right|\leqslant \deg(P)$。
:::

::: remark
该引理可以给出$
  {K[X]/(P(X))}
$的$K$-自同构个数的控制：
\[
\begin{aligned}\left|\mathbf{Aut}_K\left(
  {K[X]/(P(X))}
\right)\right|&=\left|\mathbf{Hom}_K\left(
  {K[X]/(P(X))}
,
  {K[X]/(P(X))}
\right)\right|\\ &=Z_P\left(
  {K[X]/(P(X))}
\right)\leqslant \deg(P)=[
  {K[X]/(P(X))}
:K].
\end{aligned}
\]
:::

::: remark [多项式系数的扩张] {@rem:extension-of-coefficients}
给定域同态$\sigma\colon K\rightarrow L$，给定域$K$以及$P(X)\in K[X]$。
通过对系数的作用，多项式$P^\sigma(X)\in L[X]$定义为：
\[
P^\sigma(X)=\sum_{k=0}^n\sigma(a_k)X^k, \ \  \text{其中，}\ P(X)=\sum_{k=0}^na_kX^k.
\]
据此，我们得到环同态：
\[
K[X]\longrightarrow L[X], \ \ P\mapsto P^\sigma.
\]
实际上，$P^\sigma\in \sigma(K)[X]\subset L[X]$。

@lem:1-1-correspondance-roots-and-embedding 在此情形下可以重新表述为如下的一一对应：
\[
Z_{P^\sigma}(L)\stackrel{1:1}{\longrightarrow} {\rm Hom}_\sigma\left(
  {K[X]/(P(X))}
,L\right).
\]
其中，域同态$\varphi\in {\rm Hom}_\sigma\left(
  {K[X]/(P(X))}
,L\right)$指的是对任意的$k\in K$和$y\in
  {K[X]/(P(X))}
$，我们有
\[
\varphi(k\cdot y)=\sigma(k)\varphi(y).
\]
实际上，给定域扩张$
  {L/K}
,
  {L'/K'}
$和域同态$\sigma\colon K\rightarrow K',\varphi\colon L\rightarrow L'$，对任意的$x\in K$，$\varphi(x)=\sigma(x)$，就称$\varphi$为 **$\sigma$-同态**。
\[
\begin{tikzcd}
 L \arrow[r, "\varphi"] &  L'\\
K \arrow[r, "\sigma"] \arrow[u, dash]    &    K'  \arrow[u, dash]  \end{tikzcd}
\]
我们习惯上用$\mathbf{Hom}_\sigma(L,L')$表示所有的$\sigma$-同态。

当$K$是$L$的子域而$\sigma={\rm id}$为嵌入映射时，
@lem:1-1-correspondance-roots-and-embedding 是上述一一对应的特例。
:::

我们现在陈述代数封闭域的一种泛性质：

::: proposition [代数扩张的同态延拓] {@prop:field-ext-tech}
给定代数扩张$
  {L/K}
$，$E$是代数封闭域。对任意的域同态$\varphi\colon K\rightarrow E$，存在域同态$\overline{\varphi}\colon L\rightarrow E$，使得$\overline{\varphi}\big|_K=\varphi$。
\[
\begin{tikzcd}
 L\arrow[d, "{\small \text{代数}}", dash, swap]  \arrow[r, "\overline{\varphi}",dashed]&   \  E =\overline{E}\\
K     \arrow[ru, " \varphi ",swap]                   &
  \end{tikzcd}
\]
:::

::: remark
我们不假设$
  {L/K}
$是有限扩张。
:::

::: proof
考虑如下延拓的集合
\[
\mathscr{X}=\Big\{ (F,\phi) \Bigm| \text{$F$ 是 $
  {L/K}
$ 的中间域，$\phi\colon F\rightarrow E$ 是域同态并且 $\phi\big|_K=\varphi$}\Big\}.
\]
\[
\begin{tikzcd}
L\arrow[d,  dash]  & &\\
 F\arrow[d,  dash]  \arrow[rr, "\phi"]&  & \  E \\
K     \arrow[rru, " \varphi ",swap]             &      &
  \end{tikzcd}
\]
注意到$\mathscr{X}$是非空的：$(K,\varphi)\in \mathscr{X}$。

我们在$\mathscr{X}$上定义偏序关系：$(F,\phi)\preceq (F',\phi')$，
指的是$F\subset F'$且$\phi'\big|_F=\phi$，即
\[
\begin{tikzcd}
 F'\arrow[d,  dash]  \arrow[rr, "\phi'"]&  & \  E \\
 F\arrow[d,  dash]  \arrow[urr, "\phi"]&  & \\
K     \arrow[rruu, " \varphi ",swap]             &      &
  \end{tikzcd}
\]
对$\mathscr{X}$的全序子集$\{(F_i,\phi_i)\}_{i\in I}\subset\mathscr{X}$，定义
\[
F_\infty\coloneqq\bigcup_{i\in I} F_i,\ \ \phi_\infty\big|_{F_i}=\phi_i.
\]
这就给出了[^2]$\{(F_i,\phi_i)\}_{i\in I}$的一个上界$(F_\infty,\phi_\infty)$。
根据Zorn引理，$\mathscr{X}$中有极大元$(F,\phi)$。
如果这可以证明$F=L$，那么$(F,\phi)$就是$\varphi$在$L$上的延拓。

如若不然，任选$x\in L-F$并考虑$x$在$F$上（$x$在$F$上仍然是代数的）的极小多项式$P(X)$和域同构
\[
{\rm ev}_x\colon
  {F[X]/(P(X))}
\stackrel{\simeq}{\longrightarrow} F(x)\subset L.
\]
通过同态$\phi\colon F\rightarrow E$，我们知道$P^\varphi$在$E$中有根（因为$E$是代数封闭的）。
根据 @lem:1-1-correspondance-roots-and-embedding，我们就有域同态
\[
\overline{\phi}\colon
  {F[X]/(P(X))}
\longrightarrow E.
\]
从而，我们得到域同态
\[
\overline{\phi}\circ ({\rm ev}_x)^{-1}\colon F(x)\longrightarrow E.
\]
容易看出，$\overline{\phi}\big|_{F}=\varphi$。由于$F(x)$是严格比$F$大的中间域，这与$F$的极大性矛盾。
:::

## 代数闭包的唯一性

我们证明代数闭包的唯一性。

::: lemma {@lem:hom-is-auto}
$
  {L/K}
$是代数扩张，则${\mathbf{End}}_K(L)=\mathbf{Aut}_K(L)$，即代数扩张的$K$-自同态必为自同构。
:::

::: proof
由于域同态为单射，只要证明任意的$\varphi\in \mathbf{Hom}_K(L,L)$，$\varphi$是满射即可。
实际上，对任意的$x\in L$，令$P$为其极小多项式而$Z_P(L)$为$P$在$L$中根的集合。
那么，$\varphi$把$P$的根映射为$P$的根，从而我们有单射：
\[
\varphi\colon Z_P(L)\rightarrow Z_P(L).
\]
由于多项式根的个数是有限的，所以$Z_P$是有限集。那么，$\varphi\colon Z_P\rightarrow Z_P$是满射。
特别地，存在$y\in Z_P(L)\subset L$，使得$\varphi(y)=x$。
:::

$K$是域，假设$\Omega_i$是$K$的代数闭包，即$
  {\Omega_i/K}
$是代数扩张并且$\Omega_i$是代数封闭域，其中$i=1,2$。根据 @prop:field-ext-tech，存在域同态
\[
\varphi\in {\rm Hom}_K(\Omega_1,\Omega_2), \ \ \psi\in {\rm Hom}_K(\Omega_2,\Omega_1).
\]
通过复合，我们就有$\psi\circ\varphi\in {\rm End}_K(\Omega_1)$。
以上引理表明$\psi\circ\varphi$是$\Omega_1$的$K$-自同构；类似地，
$\varphi\circ \psi$是$\Omega_2$的$K$-自同构。从而，$\varphi$和$\psi$均为同构。
综上所述，$K$的代数闭包在$K$-同构的意义下是唯一的。

从此往后，对任意域$K$，在$K$-同构的意义下，我们用$\overline{K}$表示它的代数闭包。
如果$K$是代数封闭域，我们自然有$\overline{K}=K$。

::: example [$\overline{{\mathbb{Q}}}$的构造]
对$
  {{\mathbb{C}}/{\mathbb{Q}}}
$使用 @lem:small-for-alg-closure，这表明$\overline{{\mathbb{Q}}}$就是$\mathbb{C}$中有理系数多项式的根组成的集合：
\[
\overline{{\mathbb{Q}}}=\big\{z\in {\mathbb{C}}\bigm| \text{存在 $P\in {\mathbb{Q}}[X]$，使得 }P(z)=0\big\}.
\]
:::

[^1]: 默认每个不可约多项式的次数至少是$1$
[^2]: 需要利用良序性验证$F_\infty$是域且$\phi_\infty$的定义不依赖于$i$的选取，这些细节是平凡的。
