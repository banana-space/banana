---
title: 可分扩张
---

::: definition
$K$是域，$P\in K[X]$是$K$-系数多项式。
如果$P$在$\overline{K}$中没有重根，就称$P$是**可分的**；否则称之为**不可分的**。

$
  {L/K}
$是代数扩张，对于$x\in L$，如果其极小多项式是可分的，就称$x$为**可分的**；否则称之为**不可分的**。
若每个$x\in L$均可分，则称代数扩张$
  {L/K}
$是**可分的**；否则称之为**不可分的**。
:::

::: remark [判断多项式的可分性]
根据 @rem:if-exists-multiple-roots，多项式$P$可分等价于${\rm Disc}(P)\neq 0$。
另外，由于${\rm Disc}(P)\coloneqq{\rm Res}(P,P')$，所以多项式$P$可分等价于$(P,P')=1$。

特别地，若$P\in K[X]$是不可约多项式，则$P$可分等价于$P'\neq 0$：实际上，若$P$可分，则$(P,P')=1$，
这显然说明$P'\neq 0$；反之，$P'\neq 0$并且$\deg(P')<\deg(P)$，根据$P$不可约，只能有$(P,P')=1$。
:::

::: remark [不可分的不可约多项式]
假设$P\in K[X]$是不可约多项式，记$P(X)=a_nX^n+\cdots+a_1X+a_0$，其中$a_n\neq 0$。那么，
\[
P'(X)=\sum_{k=1}^n ka_kX^{k-1}=na_nX^{n-1}+\cdots.
\]
若$P$是不可分的，则$P'=0$，从而，$n\cdot a_n=0$，所以，在$K$中$n=0$。
这表明${\rm Char}(K)=p$并且$p\mid n$，其中$p$是素数。

利用${\rm Char}(K)=p$重新计算$P'(X)$：
\[
P'(X)=\sum_{p\nmid k} ka_kX^{k-1}=0.
\]
所以，当$p \nmid k$时，$a_k=0$。这表明
\[
P(X)=\sum_{p|k} a_kX^{k}=Q(X^p).
\]
其中，$Q(X)$的定义如下：
\[
Q(X)=\sum_{p|k} a_kX^{\frac{k}{p}}.
\]

由于$P$不可约，根据$P(X)=Q(X^p)$，$Q(X)$也不可约。
特别地，如果$P$不可约并且不可分，则${\rm deg}(P)\geqslant p$。

另外，当${\rm Char}(K)=p$时，我们注意到形如$Q(X^p)$的多项式的导数为$0$。
:::

::: remark
在特征零情形下，不可约多项式都是可分多项式。特别地，如果${\rm Char}(K)=0$，那么，任意的代数扩张$
  {L/K}
$均为可分扩张。
:::

::: example
令$K={\mathbb{F}_p}(T)={\rm Frac}({\mathbb{F}_p}[T])$。根据Eisenstein判别法，多项式
\[
P(X)=X^{p^2}+TX^p+T
\]
在${\mathbb{F}_p}[T][X]$中不可约。根据Gauss引理，$P(X)$在$K[X]$中也不可约。

此时，$P(X)=Q(X^p)$，其中$Q(X)=X^{p}+TX+T$并且$Q'(X)\neq 0$。特别地，$Q$是可分的多项式。
:::

## 完美域

当${\rm Char}(K)=p$时，我们有Frobenius同态：
\[
{\rm Frob}\colon K\rightarrow K,\ \  x\mapsto x^p.
\]
特别地，对任意的$x,y\in K$，$(x+y)^p=x^p+y^p$。

::: lemma {@lem:xp-a-inseparable}
若${\rm Char}(K)=p$，则对任意$a\in K-K^p$，$X^p-a$在$K[X]$中不可约并且不可分。
:::

::: proof
由于$K$的特征为$p$，$X^p-a$显然是不可分的。现在证明$X^p-a$不可约。

我们在$\overline{K}$中考虑$X^p-a$的分解。
注意到存在唯一的$b\in \overline{K}$，使得$b^p=a$：若有另一个$b'\in \overline{K}$，使得$b'^p=a$，
则$(b-b')^p=b^p-b'^p=0$，从而$b=b'$。

所以，$X^p-a$在$\overline{K}$中恰有一个（$p$-重）根，即
\[
X^p-a=(X-b)^p \in \overline{K}[X].
\]
如果$P$是可约的，即$P(X)=P_1(X)\cdot P_2(X)$，其中$P_1,P_2\in K[X]$。
上述在$\overline{K}[X]$中的分解给出：
\[
X^p-a=\underbrace{(X-b)^{k}}_{P_1(X)}\cdot \underbrace{(X-b)^{l}}_{P_2(X)}.
\]
根据假设，$b\notin K$。所以，$k,l\neq 1$，即$k,l\geqslant 2$。
据此，$P_1$和$P_2$均有重根从而是不可分的。
根据之前的讨论，$P_1$和$P_2$次数至少是$p$，所以$X^p-a$的次数至少是$2p$，矛盾。
:::

::: lemma
域$K$的特征为$p$，$P\in K[X]$，$\deg(P)\geqslant 2$，$P$不可约。
若$P$在$\overline{K}$中只有一个根，则
\[
P(X)=X^{p^n}-a, \ \  a\notin {\rm Im}({\rm Frob})=K^p.
\]
:::

::: proof
在$\overline{K}$中，我们可以分解$P$：
\[
P(X)=(X-b)^m=(X-b)^{p^n \cdot l}=(X^{p^n}-b^{p^n})^{l},
\]
其中，$m\geqslant 2, m=p^n\cdot l$并且$(l,p)=1$。所以，
\[
P(X)=Q(X^{p^n}),
\]
其中，$Q(X)=(X-b^{p^n})^{l}$。根据这个表达式，我们注意到$Q\in K[X]$。
由于$P$不可约，所以$Q$也不可约。
另外，由于$P$在$\overline{K}$中只有一个根，所以$Q$也只有一个根。
若$l\geqslant 2$，$Q$只有一个根，所以$Q$不可分。
据此，$\deg(Q)=l$为$p$的倍数，这与$(p,l)=1$矛盾。所以，$l=1$。从而，
\[
P(X)=X^{p^n}-b^{p^n}=X^{p^n}-a.
\]
如果$a\in {\rm Im}({\rm Frob})$，即$a=c^p$，其中，$c\in K$，则
\[
P(X)=X^{p^n}-c^p=(X^{p^{n-1}}-c)^p
\]
是可约的，矛盾。所以，$a\notin {\rm Im}({\rm Frob})$。
:::

::: definition
$K$是域，若每个不可约多项式$P(X)\in K[X]$均可分，则称$K$是**完美的**（perfect）。
:::

::: remark
特征为零的域是完美域。
:::

::: remark
$K$是完美的，$
  {L/K}
$是代数扩张，则$
  {L/K}
$可分。
:::

::: proposition
$K$是特征为$p$的域，那么，$K$是完美的当且仅当${\rm Frob}\colon K\rightarrow K$是满射。
:::

::: proof
若${\rm Frob}$不是满射，根据 @lem:xp-a-inseparable，选$a\in K-K^p$，即$a\notin {\rm Frob}(K)$。
那么，$X^p-a$不可约也不可分。从而，域$K$不完美。

若${\rm Frob}$是满射，对任意不可约多项式$P(X)$，如果$P(X)$不可分，我们来推出矛盾：此时，$P'(X)=0$，
从而，
\[
P(X)=\sum_{p|m} a_mX^{m}=\sum_{k} a_{kp}X^{kp}.
\]
由于${\rm Frob}$是满射，对每个$k$，存在唯一的$b_k\in K$，使得${\rm Frob}(b_k)=a_{kp}$。那么，
\[
P(X)=\big(\sum_k b_kX^{k}\big)^p.
\]
这与$P(X)$不可约矛盾。
:::

::: example
${{\mathbb{F}_p}}(T)={\rm Frac}({\mathbb{F}_p}[T])$不是完美域。

根据Eisenstein判别法，$X^p-T\in K[X]$是不可约多项式并且不可分：实际上，
不存在$\frac{P(T)}{Q(T)}\in {{\mathbb{F}_p}}(T)$，使得$\left(\frac{P(T)}{Q(T)}\right)^p=T$，否则
\[
\left(\frac{P(T)}{Q(T)}\right)^p=\frac{P(T^p)}{Q(T^p)}=T.
\]
这表明
\[
P(T^p)=Q(T^p)\cdot T.
\]
对$T$求导，左边为$0$而右边为$Q(T^p)$，矛盾。所以，${{\mathbb{F}_p}}(T)$不是完美的。
:::

## 可分次数

用所谓的可分次数可以刻画代数扩张是否是可分。给定代数扩张$
  {L/K}
$，任选域同态$\varphi\colon K\rightarrow E$，其中，$E$是代数封闭域。令
\[
{\rm Ext}_{
  {L/K}
}\big(E,\varphi\big)=\Big\{\psi\in {\rm Hom}(L,E)\Bigm|\psi\big|_{K}=\varphi\Big\}.
\]
这是$\varphi$到$L$上所有可能的扩张所构成的集合。
\[
\begin{tikzcd}
  &  &E \\
L\arrow[urr,"\psi",dashed]&  & \\
&K   \arrow[ul, dash]  \arrow[uur, "\varphi",swap]  &
 \end{tikzcd}
\]

考虑对另一个可能的域同态$\varphi'\colon K\rightarrow E'$，其中，$E'$是代数封闭域。
我们有集合之间的双射：
\[
{\rm Ext}_{
  {L/K}
}\big(E,\varphi\big)\stackrel{1:1}{\longrightarrow} {\rm Ext}_{
  {L/K}
}\big(E',\varphi'\big).
\]
实际上，通过选取$\varphi(K)$在$E$中的代数闭包$\overline{\varphi(K)}$，
由于$\psi(L)\subset \overline{\varphi(K)}$，我们不妨假设$E=\overline{\varphi(K)}$；
类似地，不妨假设$E'=\overline{\varphi'(K)}$。
根据代数闭包的唯一性，存在$K$-同构$\sigma\colon E\rightarrow E'$，使得
$\varphi'=\sigma\circ \varphi$：
\[
\begin{tikzcd}
E \arrow[rr,"\sigma"]&  &E' \\
&K   \arrow[ul, "\varphi"]  \arrow[ur, "\varphi'",swap]  &
 \end{tikzcd}
\]
据此，我们可以构造双射
\[
{\rm Ext}_{
  {L/K}
}\big(E,\varphi\big) \longrightarrow {\rm Ext}_{
  {L/K}
}\big(E',\varphi'\big), \ \ \overline{\varphi}\mapsto \sigma\circ \overline{\varphi}.
\]
其逆为$\overline{\varphi'}\mapsto \sigma^{-1}\circ \overline{\varphi'}$。特别地，$|{\rm Ext}_{
  {L/K}
}\big(E,\varphi\big)|$只依赖于$
  {L/K}
$。

::: definition
对任意的代数扩张$
  {L/K}
$，任意选定域同态$\varphi\colon K\rightarrow E$，其中，$E$是代数封闭域。我们定义$
  {L/K}
$的**可分次数**为
\[
[L:K]_s\coloneqq\big|{\rm Ext}_{
  {L/K}
}\big(E,\varphi\big)\big|.
\]
如果选取$E=\overline{K}$，$[L:K]_s$就是把$L$嵌入到$\overline{K}$的同态的个数。
:::

::: remark
如果$
  {L/K}
$是有限扩张，我们将证明$[L:K]_s\leqslant [L:K]$并且$
  {L/K}
$可分当且仅当$[L:K]_s=[L:K]$。
:::

::: example
$[{\mathbb{C}}:{\mathbb{R}}]_{s}=2$。
:::

::: example
令$K={\mathbb{Q}}$，$L=
  {{\mathbb{Q}}[X]/(X^3-2)}
$。此时，$
  {L/{\mathbb{Q}}}
$是$3$次扩张并且$[L:K]_{s}=3$。实际上，$L$到$\overline{{\mathbb{Q}}}$的像被$X$在$\overline{{\mathbb{Q}}}$的像$\alpha=\overline{\varphi}(X)$决定：
\[
\begin{tikzcd}
{\mathbb{Q}}[X] \arrow[rr,"\overline{\varphi}"] \arrow[dr,"\pi"]&  &\overline{{\mathbb{Q}}} \\
&
 {{\mathbb{Q}}[X]/(X^3-2)}
  \arrow[ur, "\varphi",swap]  &
 \end{tikzcd}
\]
我们注意到$\alpha$只能取$X^3-2$的某个根，所以一共有$3$个这样$\varphi$。
:::

::: example
令$L={{\mathbb{F}_p}}(T)={\rm Frac}({\mathbb{F}_p}[T])$，
$K={{\mathbb{F}_p}}(T^p)=L^p={\rm Frob}(L)$。
此时，$K$是$L$的子域并且$[L:K]=p$：实际上，$L=K(T)$并且$T^p\in K$，
所以$T\in L$的极小多项式是$X^p-T^p\in K[X]$。此时，$L=
  {K[X]/(X^p-T^p)}
$，从而$[L:K]=p$。

我们注意到$X^p-T^p$在$\overline{K}$中只有一个根（$p$重根），从而，$
  {K[X]/(X^p-T^p)}
$到$\overline{K}$的嵌入必须把$X$映射成这个根。所以，$[L:K]_s=1$。按后面的定义，$
  {{{\mathbb{F}_p}}(T)/{{\mathbb{F}_p}}(T^p)}
$是纯不可分的扩张。
:::

给定代数扩张$
  {L/K}
$和中间域$K\subset M\subset L$，把某个同态$\varphi\colon K\rightarrow E$延拓到$L$上等价于可以先将它延拓到$M$上然后再延拓到$L$上，
即
\[
{\rm Ext}_{
  {L/K}
}\big(E,\varphi\big)=\coprod_{\psi\in {\rm Ext}_{
  {M/K}
}\big(E,\varphi\big)} {\rm Ext}_{
  {L/M}
}\big(E,\psi\big).
\]
这个集合的划分表明：

::: proposition {@prop:product-formula-for-separable-degree}
给定代数扩张$
  {L/K}
$和中间域$K\subset M\subset L$，$[L:K]_s$有限当且仅当$[L:M]_s$和$[M:K]_s$均有限。
进一步，如下公式成立
\[
[L:K]_s=[L:M]_s[M:K]_s.
\]
:::

::: corollary [纯不可分扩张的刻画] {@coro:purely-inseparable-extension}
$
  {L/K}
$是代数扩张，对$x\in L$，若$[K(x):K]_s=1$，即$
  {K(x)/K}
$到$\overline{K}$只有唯一的$K$-同态，就称$x$是**纯不可分的**。若每个$x\in L$均为纯不可分的，就称$
  {L/K}
$是**纯不可分的**。

那么，$
  {L/K}
$是纯不可分的等价于$[L:K]_s=1$。
:::

::: proof
若$[L:K]_s=1$，对任意的$x\in L$，考虑中间域$K(x)\subset L$。
根据 @prop:product-formula-for-separable-degree，
$[K(x):K]_s\leqslant [L:K]_s=1$。所以，$[K(x):K]_s=1$，即$x$是纯不可分的。

若$
  {L/K}
$是纯不可分的，那么每个$x\in L$都是纯不可分的，即$[K(x):K]_s=1$。
考虑一个$K$-同态$\varphi\colon L\rightarrow \overline{K}$。
由于$
  {K(x)/K}
$到$\overline{K}$的扩张是唯一的，
从而$\varphi\big|_{K(x)}$把$x$映射到$\overline{K}$的像是唯一的。
据此，所有$x\in L$的像都被唯一决定了，这就决定了$\varphi$，
即$\big|{\rm Ext}_{
  {L/K}
}\big(E,\varphi\big)\big|=1$。这表明$[L:K]_s=1$。
:::

::: corollary
给定代数扩张$
  {L/K}
$和中间域$K\subset M\subset L$。那么，$
  {L/K}
$是纯不可分的当且仅当$
  {L/M}
$和$
  {M/K}
$是纯不可分的。
:::

::: proof
这由 @prop:product-formula-for-separable-degree 中的公式立得。
:::

::: remark
纯不可分的扩张是正规扩张。

我们证明一个略强的结论：给定代数扩张$
  {L/K}
$和中间域$M$，若$
  {L/M}
$是正规而$
  {M/K}
$是纯不可分的，则$
  {L/K}
$是正规的。

令$\Omega = \overline{L}$。
对任意的$K$-同态$\varphi\colon L\rightarrow \Omega$，我们要证明$\varphi(L)\subset L$。
实际上，由于$
  {M/K}
$是纯不可分的，即$[M:K]_s=1$，所以，$\varphi\big|_M={\rm id}$。
\[
\begin{tikzcd}
&  & \Omega \arrow[d,  dash]\\
 L \arrow[d,  dash]  \arrow[urr,  "\varphi"] \arrow[rr,dashed]&  & L \arrow[d,  dash] \\
 M \arrow[dr,  dash]  \arrow[rr,  "\varphi\big|_{M}={\rm id}"]  & &M \arrow[ld,  dash]  \\
  &K&
  \end{tikzcd}
\]
此时，$\varphi$为$M$-同态。由于$
  {L/M}
$是正规的，所以$\varphi(L)=L$。
:::

::: proposition {@prop:adding-purely-inseparable-elements}
$
  {L/K}
$是代数扩张，$M\subset L$是子集并且$M$中的元素均为纯不可分的，那么，$
  {K(M)/K}
$是纯不可分的。
:::

::: proof
证明的想法与 @coro:purely-inseparable-extension 一致。
对每个$x\in M$，$[K(x):K]_s=1$，从而$x$在到某个代数封闭域$E$的像都被唯一决定了，
进一步每个$K(M)$中元素到该代数封闭域$E$的像也被唯一确定。
这表明只存在唯一的扩张，即$\big|{\rm Ext}_{
  {K(M)/K}
}\big(E,\varphi\big)\big|=1$。
:::

为了进一步刻画$[L:K]$和$[L:K]_s$之间的关联，首先研究**单代数扩张**的情形，即$L=K(x)$，其中，
$x\in L$并且是$K$上的代数元。
给定代数封闭域$\Omega$，根据 @lem:1-1-correspondance-roots-and-embedding，我们有双射：
\[
Z_P(\Omega)\stackrel{1:1}{\longrightarrow} {\rm Hom}_K\left(
  {K[X]/(P(X))}
,\Omega\right).
\]
其中，$Z_P(\Omega)$为$P$在$\Omega$中的（不同）根的集合。
利用$\Omega$的代数封闭性，我们得到如下重要结论：

::: remark
$[K(x):K]_s$恰好是$x$极小多项式$P(X)$（在某个代数封闭域中）的不同根的个数。
特别地，$P(X)$的重根越多，$[K(x):K]_s$越小。

- ${\rm Char}(K)=0$。此时，由于$P$不可约，所以，$P$无重根，所以其根的个数为$\deg(P)$。据此，
  \[
  [K(x):K]_s=[K(x):K]={\rm deg}(P).
  \]

- ${\rm Char}(K)=p$。此时，存在$Q(X)\in K[X]$，使得$P(X)=Q(X^{p^n})$并且$n$是**最大的**这样的指标。
  那么，
  \[
  [K(x):K]=p^n[K(x):K]_s.
  \]
  实际上，由于$n$是最大的并且$Q$是不可约的，所以，$Q'\neq 0$（否则$Q=Q_1(X^p)$，
  那么$P(X)=Q_1(X^{p^{n+1}})$）。
  此时，$Q$有$d$个不同的根且无重根，
  从而$P$也有$d$个不同的根（从而$[K(x):K]_s=d$）但每个根的重数均为$p^n$。
  此时，$\deg(P)=p^n\cdot d$，所以，$[K(x):K]=p^n\cdot d$。这就给出了上述公式。

  我们有时也称$n$为$x$在$K$上**不可分次数**。

:::

::: remark
上述推理表明，当${\rm Char}(K)=p$时，
$x\in K(x)\subset L$是可分的（当且仅当$n=0$）当且仅当$[K(x):K]=[K(x):K]_s$。
:::

::: theorem {@them:relation-between-deg-and-sep-deg}
假设域$K$的特征为$p$，$
  {L/K}
$是有限扩张，则存在非负整数$n\geqslant 0$（被称作是$
  {L/K}
$的**不可分次数**），使得
\[
[L:K]=p^n[L:K]_s.
\]
进一步，$[L:K]=[L:K]_s$当且仅当$
  {L/K}
$是可分扩张。
:::

::: proof
由于$
  {L/K}
$是有限扩张，我们可以选取$x_1,\cdots,x_k\in L$，使得$L=K(x_1,\cdots,x_k)$。令$K_0=K$，$K_i=K(x_1,\cdots,x_i)$，其中，$i=1,\cdots,k$。特别地，$K_{i}=K_{i-1}(x_i)$。
根据以上关于单代数扩张情形的讨论，我们有
\[
[K_{i}:K_{i-1}]=p^{n_i}[K_{i}:K_{i-1}]_s.
\]
根据 @prop:product-formula-for-separable-degree 中的公式，
对上式$i=1,\cdots,k$取乘积并令$n=\displaystyle\sum_{i=1}^k n_i$。
这就证明了定理中的公式$[L:K]=p^n[L:K]_s$。

若$
  {L/K}
$是可分扩张，则每个$x_i$在$K_{i-1}$上也可分，从而，$n_i=0$。据此，$n=\displaystyle\sum_{i=1}^k n_i=0$，所以$[L:K]=[L:K]_s$。

若$
  {L/K}
$不是可分的，在选择$x_1,\cdots,x_k$使得$L=K(x_1,\cdots,x_k)$的构造中，我们总可以要求$x_1$为不可分元，即$n_1>0$。此时，$n=\displaystyle\sum_{i=1}^k n_i>0$。
:::

::: corollary
若$
  {L/K}
$是有限的纯不可分扩张，则$[L:K]$是$p$的幂，其中$p={\rm Char}(K)$。
:::

::: corollary
$
  {L/K}
$是域扩张，$M\subset L$是由某些代数的元组成的子集并且$M$中的元素均为可分的。那么，$
  {K(M)/K}
$是可分的。
:::

::: proof
对任意给定的$x\in K(M)$，存在$x_1,\cdots,x_k\in M$，使得$x\in K(x_1,\cdots,x_k)$。
@them:relation-between-deg-and-sep-deg 的证明过程表明$
  {K(x_1,\cdots,x_k)/K}
$是可分的。从而，$x\in K(x_1,\cdots,x_k)$可分。
:::

::: corollary
给定代数扩张$
  {L/K}
$和中间域$K\subset M\subset L$。那么，$
  {L/K}
$是可分的当且仅当$
  {L/M}
$和$
  {M/K}
$是可分的。
:::

::: proof
如果$
  {L/K}
$是可分，那么，$
  {M/K}
$显然是可分的。

对任意的$x\in L$，$x$在$K$上的极小多项式没有重根。
由于$x$在$K$上的极小多项式是在$M$上的极小多项式的倍数（作为$M[X]$中的元素），
$x$在$M$上的极小多项式也是没有重根的，从而$x$在$M$上可分。这说明$
  {L/M}
$是可分的。

反之，假设$
  {L/M}
$和$
  {M/K}
$是可分的，对任意的$x\in L$，令
\[
P(X)=X^n+a_{n-1}X^{n-1}+\cdots+a_1X+a_0, \ \ a_i\in M,
\]
为$x$在$M$上的最小多项式。特别地，$x\in K(a_0,\cdots,a_{n-1},x)$。我们令
\[
K_i=K(a_0,\cdots,a_{i}),\  K_n=K(a_0,\cdots,a_{n-1},x), \ \ i=0,\cdots,n-1.
\]
重复 @them:relation-between-deg-and-sep-deg 证明过程，此时每个$n_i$均为$0$，这说明$
  {K(a_0,\cdots,a_{n-1},x)/K}
$是可分的。特别地，$x$在$K$上可分，从而$
  {L/K}
$是可分的。
:::

::: corollary
给定代数扩张$
  {L/K}
$，存在唯一的最大的[^1]中间域$\overline{L}^s$（被称作是$K$在$L$中的**可分闭包**），使得$
  {\overline{L}^s/K}
$是可分扩张。此时，$
  {L/\overline{L}^s}
$是纯不可分的，即$[L:\overline{L}^s]_s=1$。
\[
\begin{tikzcd}
 L\\
 \overline{L}^s\arrow[u, "\text{纯不可分}",dash] \\
K \arrow[u, "\text{（极大）可分}",dash]
  \end{tikzcd}
\]
进一步，如果$[L:K]_s<\infty$，那么，
\[
[L:K]_s=[\overline{L}^s:K]_s=[\overline{L}^s:K].
\]
:::

::: proof
因为在$K$上添加可分元得到的扩张还是可分的，我们就把$L$中所有可分元素都添加到$K$中，
这就给出了$\overline{L}^s$的构造（同时也给出了最大性和唯一性）。

剩下还需要证明$[L:\overline{L}^s]_s=1$。
根据 @coro:purely-inseparable-extension，我们要证明对任意的$x\in L$，
$[\overline{L}^s(x):\overline{L}^s]_s=1$，
这等价于证明$x$在$\overline{L}^s$上的极小多项式$P(X)\in \overline{L}^s[X]$只有一个根。
此时，存在$n\geqslant 1$，使得$P(X)=Q(X^{p^n})$并且$Q'\neq 0$（$Q$不可约从而是可分的）。
那么，$x^{p^n}$是$Q$的根，从而$x^{p^n}$是可分的（因为$Q$是可分的）。
根据$\overline{L}^s$的定义方式，$x^{p^n}\in \overline{L}^s$，
所以$P(X)\mid X^{p^n}-x^{p^n}\in \overline{L}^s[X]$。
然而$X^{p^n}-x^{p^n}$只有一个根，所以$P(X)$也只有一个根。

如果$[L:K]_s<\infty$，那么，
\[
[L:K]_s=[L:\overline{L}^s]_s[\overline{L}^s:K]_s=[\overline{L}^s:K]_s.
\]
这就给出了$[L:K]_s=[\overline{L}^s:K]_s=[\overline{L}^s:K]$。
:::

::: example
假设$k$为特征为$2$的域，$K=k(x,y)$为二元函数域（即${\rm Frac}\big(k[x,y]\big)$）。
假设$\alpha$是$T^2+T+x\in K[T]$的一个根，$M=K(\alpha)$。
由于$T^2+T+x$在$K[T]$中不可约，所以$[M:K]=2$并且是可分扩张。
实际上，由于$k[x]$是唯一分解整环，所以，$k[x,y]=k[x][y]$也是。
根据Gauss引理，$T^2+T+x$在$K[T]$中不可约等价于它在$k[x,y][T]$中不可约。据此，可以假设
\[
T^2+T+x=\big(T+f(x,y)\big)\big(T-f(x,y)+1\big)\ \ \Rightarrow f(x,y)(1-f(x,y))=x.
\]
其中，$f(x,y)\in k[x,y]$，这与$x$是$k[x,y]$中的不可约元矛盾。

假设$\beta$是$T^2-\alpha y\in M[T]$的一个根，令$L=M(\beta)$，我们来说明$[L:M]=2$。
若不然，存在$f(x,y)+g(x,y)\alpha\in M$（因为$\dim_K M=2$），其中，$f,g\in K$，使得
\[
\big(f(x,y)+g(x,y)\alpha\big)^2=\alpha y \ \ \Leftrightarrow \ \ f(x,y)^2+g(x,y)^2\alpha^2=\alpha y.
\]
利用$\alpha^2=\alpha+x$替换$\alpha$，我们有
\[
f(x,y)^2+g(x,y)^2 x+\big(g(x,y)^2-y\big)\alpha=0.
\]
根据$1,\alpha$在$K$上的无关性，我们有
\[
f(x,y)^2+g(x,y)^2x=0,  \ \ g(x,y)^2=y.
\]
然而，$g(x,y)^2=g(x^2,y^2)=y$是不可能的。

我们注意到$T^2-\alpha y\in M[T]$不可分。此时，我们显然有
\[
\begin{tikzcd}
 L & &\\
M\ar[u, "\text{纯不可分}",dash] & & M' \ar[ull,dashed, dash]  \ar[dll,dashed, dash] \\
K \ar[u, "\text{可分}",dash] & &
  \end{tikzcd}
\]
现在证明$L$在$K$上没有纯不可分的元素。假设存在中间域$M'$，使得$
  {M'/K}
$是纯不可分的，那么，对任意的$\gamma\in M'$，我们有$\gamma^2=j(x,y)\in K$。利用$
  {L/K}
$的基，我们有
\[
\gamma=f(x,y)+g(x,y)\alpha+h(x,y)\beta+i(x,y)\alpha\beta.
\]
从而，
\[
\gamma^2=j(x,y) \ \ \Leftrightarrow \ \ f(x,y)^2+g(x,y)^2\alpha^2+h(x,y)^2\beta^2+i(x,y)^2\alpha^2\beta^2=j(x,y)^2.
\]
利用$\alpha^2=\alpha+x$和$\beta^2=\alpha y$，经过化简，我们得到
\[
\big[f(x^2,y^2)+\boxed{g(x^2,y^2)x}+i(x^2,y^2)xy+j(x^2,y^2)\big]+\big[g(x^2,y^2)+\boxed{h(x^2,y^2)y}+i(x^2,y^2)xy+\boxed{i(x^2,y^2)y}\big]\alpha=0.
\]
通过通分，除了框内的两项，我们得到的多项式为偶数次的，从而，
\[
g(x^2,y^2)=0, \ h(x^2,y^2)+i(x^2,y^2)=0.
\]
从而，$g=0,h=i$。据此，我们可以化简上述长等式为
\[
\begin{cases}&f(x^2,y^2)+j(x^2,y^2)=i(x^2,y^2)xy,\\
&i(x^2,y^2)=0.
\end{cases}
\]
只有$f=j$，这表明$\gamma\in K$。
这说明$L$中在$K$上没有纯不可分的元素，我们也说$K$在$L$中是*纯不可分封闭*的。
:::

::: example
在${\mathbb{F}_p}(T)[X]$中考虑多项式
\[
P(X)=X^2+TX+T, \ \ Q(X)=X^{2p}+TX^p+T=P(X^p).
\]

$P(X)$在${\mathbb{F}_p}(T)[X]$中是不可约的（根据Gauss引理和Eisenstein判别法），
$\alpha,\alpha'$为$P$在$\overline{{\mathbb{F}_p}(T)}$中的根。那么，$
  {{\mathbb{F}_p}(T)(\alpha)/{\mathbb{F}_p}(T)}
$的次数为$2$，这是可分的（因为$P'\neq 0$）也是正规的。在$\overline{{\mathbb{F}_p}(T)}[X]$中，我们有
\[
P(X)=(X-\alpha)(X-\alpha'), \ \ \alpha,\alpha'\in \overline{{\mathbb{F}_p}(T)}.
\]

$Q(X)$在${\mathbb{F}_p}(T)[X]$中是不可约的（根据Gauss引理和Eisenstein判别法）。
令$\beta$为$Q$在$\overline{{\mathbb{F}_p}(T)}$中的一个根，$P(\beta^p)=0$，
我们不妨假设$\beta^p=\alpha$。
我们再选取$\beta'\in \overline{{\mathbb{F}_p}(T)}$，使得$\beta'^p=\alpha'$。此时，
\[
Q(X)=(X^p-\alpha)(X^p-\alpha')=(X-\beta)^p(X-\beta')^p.
\]
由于$Q(X)$在${\mathbb{F}_p}(T)[X]$中不可约，所以$[{\mathbb{F}_p}(T)(\beta):{\mathbb{F}_p}(T)]=2p$。
\[
\begin{tikzcd}
 {\mathbb{F}_p}(T)(\beta) \\
{\mathbb{F}_p}(T)(\alpha)\ar[u, "\text{纯不可分}",dash]  \\
{\mathbb{F}_p}(T) \ar[u, "\text{可分}",dash]
  \end{tikzcd}
\]
很明显，$
  {{\mathbb{F}_p}(T)(\beta)/{\mathbb{F}_p}(T)(\alpha)}
$是纯不可分的。特别地，$[{\mathbb{F}_p}(T)(\beta):{\mathbb{F}_p}(T)]_s=2$。
:::

::: example [最基础的例子]
考虑单代数扩张$
  {K(x)/K}
$。假设$P(X)$为$x$的极小多项式，
$P(X)=Q(X^{p^n})$，其中，$n$是$x$的不可分次数，$Q\in K[X]$并且$Q$是可分的。
那么，$x^{p^n}$在$K$上是可分的。进一步，$K$的可分闭包为$K(x^{p^n})$，即
\[
\begin{tikzcd}
 K(x)\\
 K(x^{p^n})\ar[u, "\text{纯不可分}",dash] \\
K \ar[u, "\text{可分}",dash]
  \end{tikzcd}
\]
实际上，$x$在$K(x^{p^n})$上的极小多项式为$X^{p^n}-x^{p^n}$，它只有一个根，从而，
$[K(x):K(x^{p^n})]_s=1$。据此，我们可以给出可分闭包$\overline{K(x)}^s=K(x^{p^n})$。
:::

::: example [可分闭包的具体构造]
$
  {L/K}
$是代数扩张。根据上一例子，对任意的$x\in L$，令$n_x$为其不可分次数。那么，
$\big\{x^{p^{n_x}}\bigm| x\in L\big\}$是$L$中所有可分元素。所以，
\[
\overline{L}^s=K\left(\big\{x^{p^{n_x}}\bigm|x\in L\big\}\right).
\]
:::

## 单扩张与可分扩张

给定域扩张$
  {L/K}
$，如果存在$x\in L$，使得$L=K(x)$，我们就说$
  {L/K}
$是**单扩张**并称$x$是一个**本原元素**。

::: proposition
$
  {L/K}
$是有限扩张。那么，$
  {L/K}
$是单扩张当且仅当它只有有限个中间域。
:::

::: proof
如果$K$是有限域，由于$
  {L/K}
$是有限扩张，$L$也是有限域。此时，$L^\times$是有限循环群，那么，选这个循环群的生成元就可以生成$L$。以下总假设$K$是无限域。

假设$
  {L/K}
$只有有限个中间域。我们总可以把$L$写成$L=K(x_1,\cdots,x_d)$的形式，只要对$d=2$证明该扩张为单扩张即可。现在，我们令$L=K(x_1,x_2)$。由于$K$是无限域而$
  {L/K}
$只有有限个中间域，存在$a,b\in K$，使得
\[
K(x_1+ax_2)=K(x_1+bx_2)=M, \ \ a\neq b.
\]
此时，$x_1+ax_2,x_1+bx_2 \in M$，那么，
\[
(a-b)x_2=(x_1+ax_2)-(x_1+bx_2)\in M \ \ \Rightarrow \ \ x_2\in M.
\]
从而，$x_1\in M$。这说明$L=M=K(x_1+ax_2)$。

假设$L=K(x)$，令$P(X)\in K[X]$为$x$在$K$上的极小多项式。
任选$M\subset K(x)$是中间域，令$P_M(X)$为$x$在$M$上的极小多项式，那么，在$M[X]$上，
我们有$P_M\mid P$。令
\[
P_M(X)=X^m+a_{m-1}X^{m-1}+\cdots+a_1X+a_0, \ \ a_i \in M.
\]
很显然，$K(a_0,\cdots,a_{m-1})\subset M$。特别地，
\[
[K(x):K(a_0,\cdots,a_{m-1})]\geqslant [L:M].
\]
另外，我们还有：
\[
[K(x):K(a_0,\cdots,a_{m-1})]\leqslant \deg(P_M)=[L:M],
\]
从而，$M=K(a_0,\cdots,a_{m-1})$。

综合上面的讨论，中间域$M$完全由$P_M$（的系数）决定。由于$P$的首一的因子$P_M$只有有限个，所以，$
  {L/K}
$只有有限个中间域。
:::

::: corollary [本原元素定理] {@them:primitive-element}
有限可分扩张是单扩张，即对于有限可分扩张$
  {L/K}
$，存在$x\in L$，使得$L=K(x)$。
:::

::: proof
令$\Omega=\overline{K}$；令$\mathcal{P}$为${\rm Hom}_K(L,\Omega)$的子集所组成的集合（这是有限集）；
令$\mathcal{M}$为$
  {L/K}
$的中间域所组成的集合。
根据上一个命题，我们只要证明如下映射为单射即可：
\[
\Psi\colon\mathcal{M}\longrightarrow \mathcal{P},  \ \ M\mapsto {\rm Hom}_M(L,\Omega).
\]
假设$\Psi(M_1)=\Psi(M_2)$，即${\rm Hom}_{M_1}(L,\Omega)={\rm Hom}_{M_2}(L,\Omega)$，
我们考虑如下图表：
\[
\begin{tikzcd}
 &L &\\
 &M_1 \cdot M_2 \arrow[u, dash] &\\
M_1   \arrow[ur, dash]    & &   M_2  \arrow[ul, dash]\\
 &K \arrow[ul, dash] \arrow[ur, dash] &
  \end{tikzcd}
\]
${\rm Hom}_{M_1}(L,\Omega)={\rm Hom}_{M_2}(L,\Omega)$表明
${\rm Hom}_{M_1}(L,\Omega)\subset {\rm Hom}_{M_1\cdot M_2}(L,\Omega)$，所以，
\[
|{\rm Hom}_{M_1\cdot M_2}(L,\Omega)|\geqslant |{\rm Hom}_{M_1}(L,\Omega)|.
\]
由于$
  {L/K}
$可分，所以，$
  {L/(M_1\cdot M_2)}
$和$
  {L/M_1}
$都可分，从而，
\[
|{\rm Hom}_{M_1\cdot M_2}(L,\Omega)|=[L:M_1\cdot M_2]\leqslant [L:M_1]=|{\rm Hom}_{M_1}(L,\Omega)|.
\]
结合以上两个不等式，我们有$[L:M_1\cdot M_2]=[L:M_1]$，从而，$M_1\cdot M_2=M_1=M_2$，
所以$\Psi$为单射。特别地，
\[
|\mathcal{M}|\leqslant  |\mathcal{P}|<\infty,
\]
即$L$只有有限个中间域。从而，$
  {L/K}
$是单扩张。
:::

::: example
$K$的特征为$p$，考虑域扩张$
  {K(X,Y)/K(X^p,Y^p)}
$。我们注意到$\{X^iY^j\}_{0\leqslant i,j\leqslant p-1}$是该扩张的一组基，从而$[K(X,Y):K(X^p,Y^p)]=p^2$。
另外，$X$的极小多项式为$T^p-X^p=0$（不可分），从而，$X$（类似地$Y$）在$K(X^p,Y^p)$上纯不可分。
根据 @prop:adding-purely-inseparable-elements，$
  {K(X,Y)/K(X^p,Y^p)}
$是纯不可分的（从而不满足本原元素定理关于可分性的要求）。

现在说明$
  {K(X,Y)/K(X^p,Y^p)}
$有无限多个中间域。实际上，我们可以考虑如下中间域：
\[
M_n\coloneqq K(X^p,Y^p,X+Y^{pn+1}), \ \ n=1,2,\cdots.
\]
我们注意到$X+Y^{pn+1}\notin K(X^p,Y^p)$而$\big(X+Y^{pn+1}\big)^p\in K(X^p,Y^p)$，所以，
$[M_n:K(X^p,Y^p)]=p$。
由于$[K(X,Y):K(X^p,Y^p)]=p^2$，为了证明$\{M_n\}_{n\geqslant 1}$两两不同，只要证明
\[
M=K(X^p,Y^p,X+Y^{pn+1},X+Y^{pm+1})=K(X,Y), \ \ m\neq n,
\]
即可。由于$X+Y^{pn+1},X+Y^{pm+1}\in M$，所以，
\[
Y\big((Y^p)^n-(Y^p)^m\big)=\big(X+Y^{pn+1}\big)-\big(X+Y^{pm+1}\big)\in M.
\]
从而，$Y\in M$。进一步，$X\in M$。这说明$M=K(X,Y)$。特别地，这表明$
  {K(X,Y)/K(X^p,Y^p)}
$不是单扩张。

现在还可直接证明$
  {K(X,Y)/K(X^p,Y^p)}
$不是单扩张。
如若不然，假设$K(X,Y)=K(X^p,Y^p,f(X,Y))$。
由于$f^p(X,Y)=f(X^p,Y^p)$（利用$K$的特征为$p$），所以，$f^p\in K(X^p,Y^p)$。
据此，$f$的极小多项式$P$整除$T^p-a$，其中，$a\in K(X^p,Y^p)$。
特别地，$\deg(P)\leqslant p$，从而，
\[
[K(X^p,Y^p,f(X,Y)):K(X^p,Y^p)]\leqslant p<p^2.
\]
这和$K(X,Y)=K(X^p,Y^p,f(X,Y))$矛盾。
:::

## 迹与范数映射

对于有限扩张$
  {L/K}
$，对任意的$x\in L$，考虑乘法映射：
\[
m_x\colon L\rightarrow L,  \ \ y\mapsto x\cdot y.
\]
这是$K$-线性空间$L$上的$K$-线性映射，我们定义它的迹、行列式和特征多项式为：
\[
{\rm Tr}_{_{
  {L/K}
}}(x)={\rm Tr}(m_x), \ {\rm N}_{_{
  {L/K}
}}(x)={\rm det}(m_x), \ \ P_{_{
  {L/K}
},x}(X)=\det(X\cdot I-m_x).
\]
很明显，$x$为$m_x$在域$L$上的特征值，从而，$P_{_{
  {L/K}
},x}(x)=0$。

::: remark
对于$x\in L$，令$P(X)$为$x$在$K$上的极小多项式，它和$P_{_{
  {L/K}
},x}(X)$之间的关系如下：
\[
P_{_{
  {L/K}
},x}(X)=P(X)^{[L:K(x)]}.
\]
选取$e_1,\cdots,e_m$为$
  {K(x)/K}
$的基，$f_1,\cdots,f_n$为$
  {L/K(x)}
$的基。
那么，$\{e_if_j\}_{i\leqslant m, j\leqslant n}$为$
  {L/K}
$的基。
考虑$m_x\colon K(x)\rightarrow K(x)$的矩阵表示$M$，
我们有$\det(X\cdot I-M)=P(x)$（只要选取$1,x,\cdots,x^{m-1}$作为$e_1,\cdots,e_m$进行计算即可，其中，
$m=\deg(P)$）。
我们知道在$L$上，$m_x$的矩阵表示现在可以写成
\[
\begin{pmatrix}
M & 0 &  \cdots & 0\\
0&  M& \cdots    & 0\\
& & \ddots & 0\\
0& 0& \cdots&M\\
\end{pmatrix}.
\]
这就给出了以上公式。
:::

::: proposition
以下映射为群同态：
\[
{\rm Tr}_{_{
  {L/K}
}}\colon(L,+)\rightarrow (K,+), \ \  {\rm N}_{_{
  {L/K}
}}\colon(L^\times,\cdot )\rightarrow (K^\times,\cdot ).
\]
如果$M\subset L$是中间域，那么，
\[
{\rm Tr}_{_{
  {L/M}
}}\circ {\rm Tr}_{_{
  {M/K}
}}={\rm Tr}_{_{
  {L/K}
}}, \ \ {\rm N}_{_{
  {L/M}
}}\circ {\rm N}_{_{
  {M/K}
}}={\rm N}_{_{
  {L/K}
}}.
\]
:::

::: proof
群同态的性质根据定义立得。
关于迹${\rm Tr}$以及范数${\rm N}$映射的复合性质请参考习题 @sec:trace-norm-exer。
:::

::: theorem
$
  {L/K}
$为有限可分扩张，$
  {E/K}
$为域扩张并且$|{\rm Hom}_K(L,E)|=[L:K]$。那么，对任意的$x\in L$，
\[
{\rm Tr}_{_{
  {L/K}
}}(x)=\sum_{\sigma\in {\rm Hom}_K(L,E)}\sigma(x), \ {\rm N}_{_{
  {L/K}
}}(x)=\prod_{\sigma\in {\rm Hom}_K(L,E)}\sigma(x),
\]
以及
\[
P_{_{
  {L/K}
},x}(X)=\prod_{\sigma\in {\rm Hom}_K(L,E)}\big(X-\sigma(x)\big).
\]
:::

::: proof
证明请参考习题 @sec:trace-norm-exer。
:::

关于迹与可分性的最重要结论是如下的定理：

::: theorem
$
  {L/K}
$是有限扩张。那么，$
  {L/K}
$是可分的等价于二次型
\[
L\times L \longrightarrow K, \ \ (x,y)\mapsto {\rm Tr}_{_{
  {L/K}
}}(x\cdot y).
\]
非退化。
:::

::: proof
证明请参考习题 @sec:trace-norm-exer。
:::

::: remark
当${\rm Char}(K)=0$时，$
  {L/K}
$是可分扩张。此时，对任意的$x\in L$，令$y=x^{-1}$，则
\[
{\rm Tr}_{_{
  {L/K}
}}(x\cdot y)={\rm Tr}_{_{
  {L/K}
}}(1)=[L:K]\neq 0.
\]
进一步，如果$[L:K]$与${\rm Char}(K)$互素，则二次型$(x,y)\mapsto {\rm Tr}_{_{
  {L/K}
}}(x\cdot y)$非退化。特别地，此时$[L:K]$是可分的。
:::

::: remark
给定有限可分的扩张$
  {L/K}
$，二次型${\rm Tr}_{_{
  {L/K}
}}(x\cdot y)$给出了$L$（作为$K$-线性空间）到其对偶$L^*$之间一个自然的同构：
\[
L\stackrel{\simeq}{\longrightarrow} L ^*,\ \  x\mapsto \Big(y\mapsto {\rm Tr}_{_{
  {L/K}
}}(x\cdot y)\Big).
\]
据此，对任意的基$\{e_1,e_2,\cdots,e_n\}$，我们可以定义其对偶基$\{e^*_1,e^*_2,\cdots,e^*_n\}$，使得
\[
{\rm Tr}_{_{
  {L/K}
}}(e_i\cdot e_j^*)=\begin{cases}1,\ i=j;\\
0, \ i\neq j.\end{cases}
\]
我们考虑单代数扩张的例子，$L=K(x)$，$x$在$K$上可分，令$P(X)$为$x$的极小多项式，
$d=\deg(P)=[K(x):K]$。在$L[X]=K(x)[X]$中，$P(X)$可以被写作
\[
P(X)=(X-x)\left(b_{d-1}X^{d-1}+b_{d-2}X^{d-2}+\cdots+b_1X+b_0\right),
\]
其中，$b_k\in K(x)$并且$b_{d-1}=1$。
我们选取$e_1=1,e_2=x,\cdots, e_d=x^{d-1}$作为$L$的基，现在来计算$\{e^*_1,e^*_2,\cdots,e^*_d\}$。
实际上，
\[
e_k^*=\frac{b_{k-1}}{P'(x)}, \ k=1,2,\cdots,d.
\]
在上式中，$P'(x)=\sum_{k=0}^{d-1}b_kx^k$。

我们要证明${\rm Tr}_{_{
  {L/K}
}}\left(x^j \cdot \frac{b_{i}}{P'(x)}\right)=\delta_{i}^j$，其中，$0\leqslant i,j\leqslant d-1$。固定$j$，
考虑多项式
\[
Q(X)=\sum_{i=0}^{d-1}{\rm Tr}_{_{
  {L/K}
}}\left(x^j \cdot \frac{b_{i}}{P'(x)}\right)X^i.
\]
只要证明$Q(X)=X^j$即可。我们有
\[
\begin{aligned}
Q(X)&=\sum_{i=0}^{d-1}\sum_{\sigma\in \mathbf{Hom}_{K}(K(x),\overline{K})}\sigma\left(x^j \cdot \frac{b_{i}}{P'(x)}\right)X^i\\
&=\sum_{i=0}^{d-1}\sum_{\sigma\in \mathbf{Hom}_{K}(K(x),\overline{K})}\sigma\left(x^j\right)  \frac{\sigma(b_{i})}{P'\big(\sigma(x)\big)}X^i\\
&=\sum_{\sigma\in \mathbf{Hom}_{K}(K(x),\overline{K})}\left[\left(\sum_{i=0}^{d-1} \sigma(b_{i}) X^i\right) \frac{\sigma\left(x^j\right)}{P'\big(\sigma(x)\big)}\right]\\
&=\sum_{\sigma\in \mathbf{Hom}_{K}(K(x),\overline{K})}\frac{P(X)}{X-\sigma(x)} \frac{\sigma\left(x^j\right)}{P'\big(\sigma(x)\big)}
\end{aligned}
\]
根据Lagrange插值公式，上式为$X^j$。
:::

[^1]: 在包含关系下
