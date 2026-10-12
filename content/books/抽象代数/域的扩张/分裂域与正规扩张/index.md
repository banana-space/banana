---
title: 分裂域与正规扩张
---

::: definition
$K$是域，$\{P_i(X)\}_{i\in I}$是$K[X]$中一族多项式，$
  {L/K}
$是域扩张。如果

- 1\) 所有多项式$\{P_i(X)\}_{i\in I}$在$L$中分裂，即对任意$i\in I$，
  存在$\alpha_{i,j}\in L$以及$a_i\in K$，使得
  \[
  P_i(X)=a_i(X-\alpha_{i,1})(X-\alpha_{i,2})\cdots (X-\alpha_{i,n_i}).
  \]

- 2\) $L=K(\{\alpha_{i,j}\}_{i\in I, j\leqslant n_i})$。

我们称$L$是$K$的（由$\{P_i(X)\}_{i\in I}$给出的）一个**分裂域**。
:::

::: remark
分裂域$L$是$K$的代数扩张，因为它是由$K$添加代数元得到的。
:::

::: remark
在$\overline{K} $中考虑，
只要（只能）把$\{P_i(X)\}_{i\in I}$的根都添加到$K$中就得到分裂域
$K(\{\alpha_{i,j}\}_{i\in I, j\leqslant n_i})$。
换而言之，$K$的（一个）分裂域就是把一些多项式的（所有）根添加到$K$中。
:::

::: proposition [分裂域的唯一性] {@prop:uniquess-of-splitting-field}
$K$是域，$\{P_i(X)\}_{i\in I}$是$K[X]$中一族多项式，
$L$和$L'$均为$K$的由$\{P_i(X)\}_{i\in I}$定义的分裂域并且$L'$落在某个代数封闭域$\Omega$中。
那么，对任意的$\varphi\in {\rm Hom}_K(L,\Omega)$，都有$\varphi(L)\subset L'$，
即$\varphi\in {\rm Hom}_K(L,L')$。
\[
\begin{tikzcd}
&  & \Omega \arrow[d,  dash]\\
 L \arrow[dr,  dash]  \arrow[urr,  "\varphi"] \arrow[rr,dashed]&  & L' \arrow[dl,  dash] \\
 &K&
  \end{tikzcd}
\]

特别地，分裂域在$K$-同构意义下唯一。
:::

::: proof
通过两种方式来计算$P_i^\varphi$，其中$i\in I$，请参考 @rem:extension-of-coefficients。
由于$P_i(X)$是$K$-系数的多项式，所以$P_i^\varphi=P_i$。在代数封闭域$\Omega$中，$P_i$均分裂，所以
\[
P(X)=P_i^\varphi(X)=a_i(X-\varphi(\alpha_{i,1}))(X-\varphi(\alpha_{i,2}))\cdots (X-\varphi(\alpha_{i,n_i})),
\]
其中，$a_i\in K, \alpha_{i,j}\in \Omega$。

根据上一注记，$L'=K(\{\varphi(\alpha_{i,j})\}_{i\in I, j\leqslant n_i})$。然而，
\[
\varphi(L)=\varphi\big(K(\{\alpha_{i,j}\}_{i\in I, j\leqslant n_i})\big)=K(\{\varphi(\alpha_{i,j})\}_{i\in I, j\leqslant n_i}),
\]
所以，$\varphi(L)\subset L'$，即$\varphi\in {\rm Hom}_K(L,L')$。

现在证明分裂域在$K$-同构意义下的唯一性：考虑$K$的两个（关于同一族多项式的）分裂域$L$和$L'$。
先将$L'$放到代数封闭域$\Omega$（比如选$\Omega=\overline{L'} $）中，由于$
  {L/K}
$是代数扩张，再根据 @prop:field-ext-tech 选$\varphi\in {\rm Hom}_K(L,\Omega)$。应用以上结论就得到了域同态$\varphi\colon L\rightarrow L'$；类似地，还可以构造域同态$\psi\colon L'\rightarrow L$。所以，$\psi\circ \varphi\in {\rm Hom}_K(L,L)$。根据 @lem:hom-is-auto，$\psi\circ \varphi$是同构，所以$\psi$和$\varphi$均为$K$-同构。从而，$L$与$L'$同构。
:::

::: remark
分裂域的定义不要求多项式族$\{P_i(X)\}_{i\in I}$的指标集是有限集。
若$I$有限，我们可以考虑$P(X)=\displaystyle\prod_{i\in I}P_i(X)$，
则$P$的分裂域与$\{P_i(X)\}_{i\in I}$的分裂域相同。特别地，此时分裂域$L$是$K$的有限扩张。

我们以下关于正规性的定义不需要有限性假设，只要求$
  {L/K}
$是代数扩张。
:::

::: theorem [正规性的定义]
给定代数扩张$
  {L/K}
$，下面四个叙述等价：

- 1\) $L$是$K[X]$中一族多项式$\{P_i(X)\}_{i\in I}$的分裂域；

- 2\) 对任意域扩张$
  {\Omega/L}
$，其中$\Omega$是代数封闭域，对任意$\varphi\in {\rm Hom}_K(L,\Omega)$，均有$\varphi(L)\subset L$；
  \[
  \begin{tikzcd}
  &  & \Omega \arrow[d,  dash]\\
   L \arrow[dr,  dash]  \arrow[urr,  "\varphi"] \arrow[rr,dashed]&  & L \arrow[dl,  dash] \\
   &K&
    \end{tikzcd}
  \]

- 3\) 存在某个域扩张$
  {\Omega/L}
$，其中$\Omega$是代数封闭域，使得对任意$\varphi\in {\rm Hom}_K(L,\Omega)$，均有$\varphi(L)\subset L$；

- 4\) 对任意不可约多项式$P(X)\in K[X]$，若$P(X)$在$L$中有根，则$P(X)$在$L[X]$中分裂。

满足以上条件的代数扩张$
  {L/K}
$被称为**正规扩张**。[^1]
:::

::: remark
在流行的教科书中，人们通常采取4)作为正规扩张的定义并证明1)与之等价。
:::

::: proof
2) $\Rightarrow $ 3)显然；@prop:uniquess-of-splitting-field 给出1) $\Rightarrow $ 2)。

证明2) $\Rightarrow $ 4)。
给定$\alpha\in L$为$P$的根，考虑$P$的另外一个根$\beta\in \Omega=\overline{K}\supset L$，
只要证明$\beta\in L$即可。由于（在$\overline{K}$中）
\[
K(\alpha)\simeq
  {K[X]/(P(X))}
\simeq K(\beta),
\]
我们可以选取$\varphi\colon K(\alpha)\rightarrow K(\beta)$。
由于$L$是$K$的代数扩张，利用 @prop:field-ext-tech，
可以把$\varphi$延拓成$\overline{\varphi}\colon L\rightarrow \Omega$，即
\[
\begin{tikzcd}
& & \Omega \arrow[d,  dash] \arrow[ddr,  dash] &\\
L\arrow[d,  dash]\arrow[urr,  "\overline{\varphi}"] \arrow[rr,"\overline{\varphi}",dashed]&  & L\arrow[ddl,  dash]  \arrow[dr,  dash,dashed] &\\
 K(\alpha) \arrow[dr,  dash]   \arrow[rrr,"\varphi"]&  & & K(\beta)\arrow[dll,  dash] \\
 &K& &
  \end{tikzcd}
\]
根据2)，$\overline{\varphi}(L)\subset L$，从而
\[
K(\beta)=\varphi\big(K(\alpha)\big)=\overline{\varphi}\big(K(\alpha)\big)\subset L.
\]
特别地，$\beta =\varphi(\alpha)\in L$。

证明4) $\Rightarrow $ 1)。考虑多项式族：
\[
\{P_i\}_{i\in I}=\Big\{P_x(X)\text{ 是 $x$ 的极小多项式}\Bigm|x\in L\Big\}.
\]
我们注意到每个$P_i$均为不可约多项式。根据4)，$P_i$在$L$中为一次多项式的乘积。
很明显，$L$由$K$添加了所有$P_i$的所有根（都落在$L$中）生成，从而$L$是$K$的分裂域。

最后证明3) $\Rightarrow $ 2)（相对困难）。$\Omega$已经由3)给定。
我们考虑另一个代数封闭的$\Omega'$以及$\varphi'\in {\rm Hom}_K(L,\Omega')$，即下图
\[
\begin{tikzcd}
&  & \Omega' \arrow[d,  dash]\\
&  & \Omega'_a\arrow[d,  dash]\\
 L \arrow[dr,  dash]  \arrow[uurr,  "\varphi'"] \arrow[rr,dashed]&  & L \arrow[dl,  dash] \\
 &K&
  \end{tikzcd}
\]
我们选取$\Omega'_a$为$\Omega'$中的那些在$K$上的代数的元所构成的子域。
根据 @lem:small-for-alg-closure，$\Omega'_a$同构于$K$的代数闭包$\overline{K}$，
它也是$L$的代数闭包（因为$L$在$K$上是代数的）。
类似地，我们构造$\Omega_a$为$\Omega$中在$K$上的代数元所构成的子域，
它也同构于$K$的代数闭包$\overline{K}$。
\[
\begin{tikzcd}
K\arrow[r,  dash]& L \arrow[r,  dash]& \Omega_a\arrow[r,  dash]&\Omega.
\end{tikzcd}
\]
根据 @prop:field-ext-tech，我们可以对$\varphi'\colon L\rightarrow \Omega'$进行延拓：
\[
\begin{tikzcd}
\Omega_a \arrow[dr,  dash]    \arrow[rr,"\overline{\varphi'}", dashed]&  &\Omega' \\
&L  \arrow[ur,"\varphi'"]&
 \end{tikzcd}
\]
注意$\overline{\varphi'}$是$L$-同态。
根据代数闭包的唯一性以及$\overline{\varphi'}$把$K$-系数多项式的根映射为$K$-系数多项式的根，
我们实际上还有如下的图表：
\[
\begin{tikzcd}
 &  &\Omega' \arrow[d,dash]\\
\Omega_a \arrow[dr,  dash]    \arrow[rr,"\overline{\varphi'}"]&  &\Omega'_a \\
&L  \arrow[ur,"\varphi'"]&
 \end{tikzcd}
\]
以上$\overline{\varphi'}$是代数封闭域之间的$L$-同构。
从而，$\overline{\varphi'}^{-1}\circ\varphi'\colon L\rightarrow \Omega$。
根据3)，$\overline{\varphi'}^{-1}\circ\varphi'\colon L\rightarrow L$，所以，
$\varphi'\colon L\rightarrow L$。
:::

::: remark
以上最后一个交换图表明$\varphi(L)\subset \Omega'_a$。
所以，我们不妨假设$\Omega$和$\Omega'$均为$\overline{K}$（差一个同构的意义下）。此时，命题明显成立。
:::

::: example
$
  {L/K}
$是域扩张并且$[L:K]=2$，那么，$
  {L/K}
$是正规扩张。

不妨假设$L\subset \overline{K}$。
对任意的$\alpha\in L-K$，其极小多项式$P(X)$为二次多项式，即$P(X)=X^2+aX+b$，其中，$a,b\in K$。
那么，$P(X)=(X-\alpha)(X+a+\alpha)$。从而，$L=K(\alpha)=K(\alpha,a+\alpha)$是$P$的分裂域。
:::

::: proposition
$
  {L/K}
$是正规扩张，那么对任意的中间域$M$，$
  {L/M}
$也是正规扩张。
:::

::: proof
可用1)来证明：$L$是一族$K$-系数多项式$\{P_i(X)\}_{i\in I}$的分裂域，
自然是一族$M$-系数多项式$\{P_i(X)\}_{i\in I}$的分裂域。

也可用4)来证明：假设$P(X)$是$M[X]$中的不可约多项式并且对于$\alpha\in L$，$P(\alpha)=0$。
考虑$\alpha$在$K$上的极小多项式$Q(X)$：在$M[X]$中，
$P\mid Q$（因为$Q(\alpha)=0$而$Q$只是在$K[X]$中不可约）。由于$
  {L/K}
$是正规扩张并且$Q(\alpha)=0$，所以$Q$在$L$中分裂，即$Q$的所有根都在$L$中。那么，$P$的所有根也都在$L$中，即$P$在$L$中也分裂。

还可用2)来证明：对任意域扩张$
  {\Omega/L}
$，其中$\Omega$是代数封闭的，对任意$\varphi\in {\rm Hom}_M(L,\Omega)$，
\[
\begin{tikzcd}
&  & \Omega \arrow[d,  dash]\\
 L \arrow[dr,  dash]  \arrow[urr,  "\varphi"] \arrow[rr,dashed]&  & L \arrow[dl,  dash] \\
 &M&\\
  &K\arrow[u,dash]&
  \end{tikzcd}
\]
只要证明$\varphi(L)\subset L$即可。
这是显然的，因为$\varphi$可被视作${\rm Hom}_K(L,\Omega)$中的映射。
:::

::: remark
$
  {M/K}
$未必是正规的。考虑
\[
\begin{tikzcd}
{\mathbb{Q}}\arrow[r,  dash] & {\mathbb{Q}}(\sqrt[4]{2}) \arrow[r,  dash]& {\mathbb{Q}}(\sqrt[4]{2},i),
 \end{tikzcd}
\]
其中，$
  {{\mathbb{Q}}(\sqrt[4]{2},i)/{\mathbb{Q}}}
$是正规的而$
  {{\mathbb{Q}}(\sqrt[4]{2})/{\mathbb{Q}}}
$不是正规的：$\sqrt[4]{2}$是不可约多项式$X^4-2$的根，但是根$\sqrt[4]{2}i\notin {\mathbb{R}} \supset {\mathbb{Q}}(\sqrt[4]{2})$。
:::

::: remark
如果$
  {L/M}
$和$
  {M/K}
$是正规的，$
  {L/K}
$未必是正规扩张。我们可以考虑
\[
\begin{tikzcd}
{\mathbb{Q}}\arrow[r,  dash] & {\mathbb{Q}}(\sqrt{2}) \arrow[r,  dash]& {\mathbb{Q}}(\sqrt[4]{2}).
 \end{tikzcd}
\]
:::

::: example
令$K={\mathbb{Q}}\left(\sqrt{2}i,\sqrt[4]{2}(1-i)\right)$，以下每个扩张的次数均为$2$：
\[
\begin{tikzcd}
{\mathbb{Q}}\arrow[r,  dash,"2"] & {\mathbb{Q}}(\sqrt{2}i) \arrow[r,  dash,"2"]& {\mathbb{Q}}\left(\sqrt{2}i,\sqrt[4]{2}(1-i)\right)=K.
 \end{tikzcd}
\]
所以，$[K:{\mathbb{Q}}]=4$。现在来说明$
  {K/{\mathbb{Q}}}
$不是正规扩张。

注意到$\alpha=\sqrt[4]{2}(1-i)$是多项式$X^4+8$的根，其中，$X^4+8$在${\mathbb{Q}}[X]$中不可约[^2]，
令$L$为$X^4+8$的分裂域，即在${\mathbb{Q}}$上添加$X^4+8$的所有根得到的域，这是$K$的扩张（可能相同）。
由于$X^4+8$是实系数的多项式，$\overline{\alpha}$也是它的根，所以$\overline{\alpha}\in L$。特别地，
\[
\sqrt[4]{2}=\frac{1}{2}(\alpha+\overline{\alpha})\in L.
\]
据此，$i\in L$。从而，$L={\mathbb{Q}}(\sqrt[4]{2},i)$。通过考虑
\[
\begin{tikzcd}
{\mathbb{Q}}\arrow[r,  dash] & {\mathbb{Q}}(\sqrt[4]{2}) \arrow[r,  dash]& {\mathbb{Q}}(\sqrt[4]{2},i)
 \end{tikzcd}
\]
可以看出$[L:{\mathbb{Q}}]=8$。特别地，$K\neq L$，从而$
  {K/{\mathbb{Q}}}
$不正规。
:::

$L$是域，$K_1,K_2$为其子域，
我们记$K_1\cdot K_2:=K_1(K_2)=K_2(K_1)$并称之为$K_1$和$K_2$（在$L$中）的**复合域**。
\[
\begin{tikzcd}
 &L  &\\
 &K_1 \cdot K_2 \arrow[u, dash] &\\
K_1 \arrow[ur, dash]  \arrow[uur, dash]    & &   K_2 \arrow[ul, dash]  \arrow[uul, dash]  \end{tikzcd}
\]

::: proposition
给定域扩张$
  {E/K}
$，$L_1$和$L_2$是中间域。若$
  {L_1/K}
$和$
  {L_2/K}
$是正规扩张，
\[
\begin{tikzcd}
 &E &\\
 &L_1 \cdot L_2 \arrow[u, dash] &\\
L_1 \arrow[ur, dash]  \arrow[uur, dash]    & &   L_2 \arrow[ul, dash]  \arrow[uul, dash]\\
 &K \arrow[ul, dash] \arrow[ur, dash] &
  \end{tikzcd}
\]
则$
  {(L_1\cdot L_2)/K}
$也正规。
:::

::: proof
利用正规扩张定义的1)来证明：
$L_1$和$L_2$分别是$K$添加了所有$\{P_i\}_{i\in I}$的根和所有$\{Q_j\}_{j\in J}$的根所得的分裂域，
从而$L_1\cdot L_2$是$K$添加了所有$\{P_i,Q_j\}_{i\in I, j\in J}$的根所得到的分裂域。

还可利用2)来证明：对任意的域扩张$
  {\Omega/(L_1\cdot L_2)}
$，其中$\Omega$是代数封闭的，对任意的$\varphi\in {\rm Hom}_K(L_1\cdot L_2,\Omega)$，通过到$L_1$的限制，我们可将$\varphi$视为
\[
\varphi\colon L_1\rightarrow \Omega.
\]
从而，由于$
  {L_1/K}
$正规，所以$\varphi\colon L_1\rightarrow L_1\subset L_1\cdot L_2$。类似地，$\varphi\colon L_2\rightarrow L_2\subset L_1\cdot L_2$。所以，$\varphi\colon L_1\cdot L_2\rightarrow L_1\cdot L_2$。
:::

::: remark
给定代数扩张$
  {L/K}
$以及其一族中间域$\{M_i\}_{i\in I}$。如果对每个$i\in I$，$
  {M_i/K}
$均为正规扩张，则它们的交$\displaystyle\bigcap_{i\in I}M_i$也是$K$的正规扩张。

实际上，根据正规扩张的定义4)，以上性质是显然的。据此，我们可以定义正规闭包。
:::

::: theorem
$
  {L/K}
$是代数扩张，$\Omega$是代数封闭域并且$\Omega \supset L$。那么，在$\Omega$中存在最小的[^3]、包含$L$的、$K$的正规扩张$N$。另外，如果$\Omega'$是另一个代数封闭域并且$\Omega' \supset L$，$N'$类似地构造，那么有$K$-同构$N\simeq N'$。

在同构的意义下，我们称$N$为$
  {L/K}
$的**正规闭包**。
:::

::: proof
根据上面的注记，我们选取$N$为$\Omega$中包含$L$的、所有$K$的（代数的）正规扩张之交，
它自然在包含关系下最小。以下只证明唯一性：
\[
\begin{tikzcd}
  \Omega\arrow[d,  dash] &  &\Omega' \arrow[d,dash]\\
  \Omega_a \arrow[d,  dash] \arrow[urr,"\varphi"]&  & \varphi(N)\arrow[d,dash]\\
N \arrow[dr,  dash]   \arrow[urr,"\varphi"]&  &N' \\
&L  \arrow[ur]&
 \end{tikzcd}
\]
令$\Omega_a$为$L$（或$K$）在$\Omega$中的代数闭包。
通过$L\subset \Omega'$以及有关代数扩张同态延拓的 @prop:field-ext-tech，
我们固定一个$\varphi\colon\Omega_a\rightarrow \Omega'$，使得上图交换。域扩张$
  {\varphi(N)/K}
$是正规的，所以$\varphi(N)\supset N'$（根据$N'$的最小性）。考虑$\varphi^{-1}(N')\subset N$，如果$P(X)\in K[X]$在$\varphi^{-1}(N')$中有根$\alpha$，那么，$\varphi(\alpha)\in N'$是$P$的根，从而，$P$所有的根都在$N'$中。据此，$\varphi^{-1}(N')$也包含了$P$的所有根，从而$
  {\varphi^{-1}(N')/K}
$是正规扩张。所以，$\varphi^{-1}(N')\supset N$。以上表明$N\simeq_{K} N'$。
:::

::: remark
由于$
  {L/K}
$是代数的，所以$L$是$K$添加上$K$-系数多项式$\{P_i\}_{i\in I}$的**某些**根得到的。为了得到正规闭包$N$，我们需要把$\{P_i\}_{i\in I}$的*所有根*都添加到$K$中即可。

比如说，$
  {{\mathbb{Q}}(\sqrt[4]{2})/{\mathbb{Q}}}
$不是正规的，通过添加$X^4-2$的根$\pm i\sqrt[4]{2}$，我们得到它的正规闭包
\[
N={\mathbb{Q}}(\pm\sqrt[4]{2},\pm i\sqrt[4]{2})={\mathbb{Q}}(\sqrt[4]{2},i).
\]
:::

[^1]: 我们默认正规扩张是代数扩张。
[^2]: 通过待定系数法直接计算即可证明
[^3]: 在包含关系下
