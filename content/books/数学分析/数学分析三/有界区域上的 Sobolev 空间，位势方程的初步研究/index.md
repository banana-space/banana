---
title: 有界区域上的 Sobolev 空间，位势方程的初步研究
---

## 区域上的Sobolev空间

::: definition [整数指标的Sobolev空间]
给定开区域$\Omega \subset \mathbb{R}^n$，
给定非负整数$k\geqslant 0$，我们定义Sobolev空间$H^k(\Omega)$：
\[
H^k(\Omega)=\big\{u\in L^2(\Omega)\bigm| \text{对任意的多重指标 $\alpha$，
其中 $|\alpha|\leqslant k$，我们有 }\partial^\alpha u \in L^2(\Omega)\big\}.
\]
我们在$H^k(\Omega)$定义如下的范数：
\[
\|u\|_{H^k}=\bigg(\sum_{|\alpha|\leqslant k}\|\partial^\alpha u\|^2_{L^2}\bigg)^\frac{1}{2}.
\]
这个范数与如下的内积是相容的：
\[
\begin{aligned}
(u,v)_{H^k} &=\sum_{|\alpha|\leqslant k}\left(\partial^\alpha u,\partial^\alpha v\right)_{L^2}\\
&= \sum_{|\alpha|\leqslant k}\int_{\Omega}\partial^\alpha u(x)\cdot \overline{\partial^\alpha v(x)}~dx.
\end{aligned}
\]
:::

::: theorem
内积空间$\left(H^k(\Omega),(\cdot,\cdot)_{H^k}\right)$是完备的。
:::

::: proof
假设$\{u_p\}_{p\geqslant 1}\subset H^k(\Omega)$是Cauchy列。
根据定义，对任意的$\varepsilon>0$，存在$N$，使得当$p,q>N$时，
\[
\|u_p-u_q\|^2_{H^k}=\sum_{|\alpha|\leqslant k}\|\partial^\alpha u_p-\partial^\alpha u_q\|^2_{L^2}<\varepsilon.
\]
所以，对于每个多重指标$|\alpha|\leqslant k$，
函数列$\{\partial^\alpha u_p\}_{p\geqslant 1}\subset L^2(\Omega)$也是Cauchy列。
根据$L^2$的完备性，存在$u^{(\alpha)}\in L^2(\Omega)$，使得
\[
\partial^\alpha u_p \stackrel{L^2}{\longrightarrow} u^{(\alpha)}.
\]
我们把$u^{(0)}$记作$u$，那么，
\[
u_p \stackrel{L^2}{\longrightarrow} u \ \ \Rightarrow \ \ u_p \stackrel{\mathcal{D}'}{\longrightarrow} u.
\]
所以，对任意的多重指标$\alpha$，其中$|\alpha|\leqslant k$，我们有
\[
\partial^\alpha u_p \stackrel{\mathcal{D}'}{\longrightarrow} \partial^\alpha u.
\]
另外，
\[
\partial^\alpha u_p \stackrel{L^2}{\longrightarrow} u^{(\alpha)} \ \ \Rightarrow \ \ \partial^\alpha u_p \stackrel{\mathcal{D}'}{\longrightarrow} u^{(\alpha)}.
\]
所以，作为分布，我们有
\[
\partial^\alpha u  \stackrel{\mathcal{D}'}{=}u^{(\alpha)}.
\]
根据局部可积函数到分布嵌入的唯一性，我们知道$\partial^\alpha u$是平方可积的函数，
从而 $u\in H^k(\Omega)$。特别地，我们还有
\[
\partial^\alpha u_p\stackrel{L^2}{\longrightarrow} \partial^\alpha u.
\]
这就完成了证明。
:::

给定开区域$\Omega \subset \mathbb{R}^n$，$k\geqslant 0$，
我们明显有$C_0^\infty(\Omega)\subset H^k(\Omega)$。我们考虑它们在$H^k(\Omega)$中的闭包：

::: definition
我们把$H^k_0(\Omega)$定义为$C_0^\infty(\Omega)$在$H^k(\Omega)$中
（用$\|\cdot \|_{H^k}$范数）的闭包，即$u\in H^k_0(\Omega)$当且仅当
存在序列$\{\varphi_p\}_{p\geqslant 1}\subset C_0^\infty(\Omega)$，使得
\[
\lim_{p\rightarrow \infty}\|\varphi_p-u\|_{H^k}=0.
\]
:::

::: remark*
按照定义，$C_0^\infty(\Omega)$在 $H_0^k(\Omega)$中是稠密的，
其中我们用的度量是由$H^k$-范数诱导的。

在数学物理方程中，$H^1_0(\Omega)$这个空间的应用最为广泛。
由于$C_0^\infty(\Omega)$中的函数在$\partial \Omega$上都消失，
所以，直观上我们可以将$H^1_0(\Omega)$解读成
$H^1(\Omega)$中在边界$\partial\Omega$上限制为零的那些函数。
实际上，我们后面会证明存在正合序列：
\[
0\rightarrow H^1_0(\Omega)\rightarrow H^1(\Omega)\rightarrow H^{\frac{1}{2}}(\partial \Omega)\rightarrow 0.
\]
:::

::: remark*
假定$\Omega_1\subset \Omega_2$是两个开区域，那么，Sobolev空间具有如下的函子性质：

- 1\) 限制映射
  \[
  {\rm Res}\colon H^k(\Omega_2)\rightarrow H^k(\Omega_1), \ \  u \mapsto u\big|_{\Omega_1},
  \]
  是连续线性映射。

  实际上，对任意的$u\in H^k(\Omega_2)$，对任意的$\alpha$，其中$|\alpha|\leqslant k$，那么
  \[
  \left\|\partial^\alpha \left(u\big|_{\Omega_1}\right)\right\|_{L^2(\Omega_1)}\leqslant \|\partial^\alpha u\|_{L^2(\Omega_2)}.
  \]

- 2\) 用零做延拓，我们明显有
  \[
  {\rm Ext}\colon C_0^\infty(\Omega_1)\rightarrow C_0^\infty(\Omega_2),\ \  \varphi \mapsto \varphi \cdot \mathbf{1}_{\Omega_1}.
  \]
  所以，利用稠密性，
  \[
  \begin{tikzcd}
  C_0^\infty(\Omega_1)\arrow[r,"{\rm Ext}"] \arrow[d, hook, "\iota "swap]
    & C_0^\infty(\Omega_2)\arrow[d,hook,"\iota "]\\
  H_0^k (\Omega_1)\arrow[r,dashed] & H_0^k(\Omega_2) \end{tikzcd}
  \]
  我们得到连续的嵌入映射：
  \[
  {\rm Ext}\colon H_0^k(\Omega_1)\rightarrow H_0^k(\Omega_2).
  \]

:::

我们来研究两个特殊（具有启发性）的例子：

::: example*
- 1\)（全空间的情况）

  我们已经证明过$C_0^\infty(\mathbb{R}^n)\subset H^k(\mathbb{R}^n)$是稠密的，
  其中，$k \in \mathbb{Z}_{\geqslant 0}$，所以，
  \[
  H^k(\mathbb{R}^n)=H_0^k(\mathbb{R}^n).
  \]

- 2\)（$1$维有限区间的情形的Sobolev不等式）

  假定$\Omega=I=(-a,a)\subset \mathbb{R}$，其中$a$是正实数。
  与全空间情况类似，（因为$1=s>\dfrac{n}{2}=\dfrac{1}{2}$）
  我们有所谓的Sobolev不等式（嵌入定理）：对任意的$ f\in H^1(I)$，我们有
  \[
  |f(x)|\leqslant \frac{1}{\sqrt{2a}}\|f\|_{L^2(I)}+{\sqrt{2a}}\|f'\|_{L^2(I)}.
  \]
  如果用$|I|$表示区间的长度，一个更几何的表达为
  \[
  |f(x)|\leqslant \frac{1}{\sqrt{|I|}}\|f\|_{L^2(I)}+{\sqrt{|I|}}\|f'\|_{L^2(I)}.
  \]
  实际上，给定$b\in I$，我们有
  \[
  f(x)=f(b)+\int_{b}^xf'(y)\,dy.
  \]
  其中，$b$待定。我们注意到这个表达式表明$f$为连续函数，因为$f'$是局部可积的。

  根据抽屉原理，我们总是可以选取$b\in (-a,a)$，使得
  \[
  \sqrt{2a}|f(b)|\leqslant \|f\|_{L^2(I)},
  \]
  利用Cauchy–Schwarz不等式，我们有
  \[
  \begin{aligned}
  |f(x)|&\leqslant \frac{1}{\sqrt{2a}}\|f\|_{L^2(I)}+\left|\int_{b}^x 1 \cdot f'(y)\,dy\right|\\
  &\leqslant \frac{1}{\sqrt{2a}}\|f\|_{L^2(I)}+{\sqrt{2a}}\|f'\|_{L^2(I)}.
  \end{aligned}
  \]
  这就给出了证明。

- 3\)（$1$维有限区间的情形的$H^1_0$的刻画）

  对任意的$f\in H^1(I)$，任意选定$b\in I$，那么，公式
  \[
  f(x)=f(b)+\int_{b}^xf'(y)\,dy
  \]
  表明极限
  \[
  f\left(a^-\right)=\lim_{x\rightarrow a} f(x), \ \ f \left((-a)^{+}\right)=\lim_{x\rightarrow -a} f(x)
  \]
  存在，事实上，$f'$是平方可积的，所以是可积的，从而上面的极限存在。

  对于$H^1_0(I)$，我们有如下的刻画：
  \[
  H_0^1\big(I\big)=\big\{f\in H^1\big(I\big)\bigm| f\left(a^-\right)=f\left((-a)^+\right)=0\big\}.
  \]

  首先说明：
  \[
  H_0^1\big(I\big)\subset\big\{f\in H^1\big(I\big)\bigm| f\left(a^-\right)=f\left((-a)^+\right)=0\big\}.
  \]
  对任意的$f\in H_0^1(I)$，利用定义，存在$\varphi_k\in C_0^\infty(I)$，
  使得在$H^1$的意义下，$\varphi_k \stackrel{H^1}{\longrightarrow} f$。
  由Sobolev嵌入，我们有
  \[
  |\varphi_k(x)-f(x)|\leqslant C \|\varphi_k(x)-f(x)\|_{H^1} \rightarrow 0.
  \]
  由于$\varphi(a)=0$，且上面的估计对$x$是一致的，
  所以当$x\rightarrow a^{-}$时，我们就有$f\left(a^-\right)=0$。

  反之，对任意的$f\in H^1\big(I\big)$，假设$f\left(a^-\right)=f\left((-a)^+\right)=0$，
  我们定义全空间$\mathbb{R}$上的函数$g$（我们要在全空间上用卷积运算来构造光滑的逼近）：
  \[
  g(x)=\begin{cases}
  f(x), \ \ |x|<a;\\
  \ \ \ 0, \quad\  |x|\geqslant a.
  \end{cases}
  \]
  这显然是一个连续函数。根据分布版本的Stokes公式，它在分布意义下的导数为
  \[
  g'(x)\stackrel{\mathcal{D}'}{=}\mathbf{1}_{[-a,a]}(x)\cdot f'(x).
  \]
  所以，$g\in H^1(\mathbb{R})$。

  我们现在将$g$的支集变小：选取$\lambda<1$，我们考虑
  \[
  g_\lambda(x)=g\left(\frac{x}{\lambda}\right).
  \]
  很明显，这是一个$H^1(\mathbb{R})$中的函数并且${\rm supp}(g_\lambda)\subset (-a,a)$。
  特别地（容易验证），我们有
  \[
  g_\lambda \stackrel{H^1}{\longrightarrow} g.
  \]
  对每个固定的$\lambda$，我们可以进行光滑化：
  \[
  \chi_\varepsilon * g_\lambda  \stackrel{H^1}{\longrightarrow} g_\lambda.
  \]
  上面的极限是在$\varepsilon\rightarrow 0$时取的：由于$g_\lambda, g'_\lambda\in L^2$，所以，
  \[
  \begin{aligned}
  &\chi_\varepsilon * g_\lambda  \stackrel{L^2}{\longrightarrow} g_\lambda,\\
  &\left(\chi_\varepsilon * g_\lambda \right)'=\chi_\varepsilon * \left(g_\lambda'\right) \stackrel{L^2}{\longrightarrow} g'_\lambda.
  \end{aligned}
  \]
  这里，我们可以选取$\varepsilon<a(1-\lambda)$，
  所以，${\rm supp}\left(\chi_\varepsilon * g_\lambda\right)\subset (-a,a)$。
  所以，通过适当地选取$\varepsilon$和$\lambda$，我们就有
  \[
  \chi_\varepsilon * g_\lambda  \stackrel{H^1}{\longrightarrow} f.
  \]
  这就证明了命题。

:::

利用对偶性，我们定义负指数的Sobolev空间：

::: definition
对于整数$k\geqslant 0$，我们定义
\[
H^{-k}(\Omega)=\big\{u\in \mathcal{D}'(\Omega)\bigm|\text{存在常数 $C>0$，
使得对任意的 $\varphi \in \mathcal{D}(\Omega)$，都有} ~\ |\langle u, \varphi \rangle|\leqslant C\|\varphi\|_{H^k}\big\}.
\]
对于$u \in H^{-k}(\Omega)$，我们假设$\mathscr{C}$
是使得上面的不等式成立的所有的常数$C$的集合，我们定义范数
\[
\|u\|_{H^{-k}(\Omega)}=\inf (\mathscr{C}).
\]
:::

由于$C_0^\infty(\Omega)$在$H_0^k(\Omega)$中稠密，
\[
\begin{tikzcd}
C_0^\infty(\Omega)\arrow[r,"\iota"] \arrow[dr, "u "swap]
  & H_0^k(\Omega) \arrow[d,"u ",dashed]\\
&\mathbb{C} \end{tikzcd}
\]
线性映射$\varphi \mapsto \langle u, \varphi \rangle$可以唯一地扩张成连续线性映射
\[
u\colon H_0^{k}(\Omega)\longrightarrow \mathbb{C}.
\]
反之，对任意给定的连续线性泛函
\[
T\colon H_0^{k}(\Omega)\longrightarrow \mathbb{C},
\]
我们要证明：存在唯一的分布$u\in H^{-k}(\Omega)$，
使得对每个$\varphi \in \mathcal{D}(\Omega)$，有
\[
\langle u, \varphi \rangle = T(\varphi).
\]
实际上，先证明$T$可以被视作是一个分布：对于支集在$K\subset \Omega$中的试验函数$\varphi$，我们有
\[
\begin{aligned}
\ |T(\varphi)|&\leqslant C\|\varphi\|_{H^k}\leqslant C\sum_{|\alpha|\leqslant k}\|\partial^\alpha \varphi\|_{L^2(K)}\\
&\leqslant C|K|^\frac{1}{2}\sum_{|\alpha|\leqslant k}\|\partial^\alpha \varphi\|_{L^\infty(K)}\\
&\leqslant C|K|^\frac{1}{2}\sup_{|\alpha|\leqslant k}\|\partial^\alpha \varphi\|_{L^\infty(K)}.
\end{aligned}
\]
按照定义，$T$是阶不超过$k$的分布。按照定义，我们自然有$T\in H^{-k}(\Omega)$。

综上所述，我们实际上得到了
\[
H^{-k}(\Omega)=\left(H_0^k(\Omega)\right)^*.
\]

对于空间$H^1_0(\Omega)$中的函数，最重要的不等式是如下的Poincaré不等式：

::: theorem [Poincaré 不等式]
如果$\Omega \subset \mathbb{R}^n$是有界区域，那么，存在仅依赖于$\Omega$的常数$C$，
使得对任意的$u \in H_0^1(\Omega)$，如下的不等式成立：
\[
\int_{\Omega}|u|^2 \,dx \leqslant C \int_{\Omega}|\nabla u|^2 \,dx.
\]
:::

::: proof
我们选取$R>0$，使得
\[
\Omega \subset \big\{x=(x_1,\cdots,x_n)\bigm||x_n|\leqslant R\big\}.
\]
我们首先证明对于$\varphi \in C^\infty_0(\Omega)$，Poincaré不等式成立。
利用Newton–Leibniz公式，我们有
\[
\begin{aligned}
|\varphi(x)|^2&=|\varphi(x',x_n)|^2=\left|\int_{-R}^{x_n}\partial_{x_n} \varphi(x',\tau)\,d\tau\right|^2\\
&\leqslant \left|\int_{-R}^{R}|\partial_{x_n} \varphi(x',\tau)|\cdot 1\,d\tau\right|^2\\
&\stackrel{\text{Cauchy--Schwarz}}{\leqslant}  2R\int_{-R}^{R}|\partial_{x_n} \varphi(x',\tau)|^2\,d\tau.
\end{aligned}
\]
其中，我们用$x'$表示$(x_1,\cdots,x_{n-1})$。上面的不等式的右边是不依赖于$x_n$的。
对$x_n$在$[-R,R]$上积分，我们得到
\[
\begin{aligned}
\int_{-R}^R|\varphi(x',x_n)|^2\,dx_n \leqslant 4R^2\int_{-R}^{R}|\partial_{x_n} \varphi(x',\tau)|^2\,d\tau.
\end{aligned}
\]
再对 $x'$ 积分，我们就得到
\[
\begin{aligned}
\int_{\mathbb{R}^n}|\varphi(x)|^2\,dx \leqslant 4R^2\int_{\mathbb{R}^{n-1}}\int_{-R}^{R}|\partial_{x_n} \varphi(x',\tau)|^2\,d\tau dx'\leqslant 4R^2 \int_{\mathbb{R}^n}|\nabla \varphi(x)|^2\,dx.
\end{aligned}
\]

为了说明不等式对任意的$u \in H^1_0(\Omega)$成立，
我们选取一列$\{\varphi_p\}_{p\geqslant 1}\subset C^\infty_0(\Omega)$，
使得$\varphi_p\stackrel{H^1_0(\Omega)}{\longrightarrow} u$，翻译成数量的表达，我们有
\[
\lim_{p\rightarrow \infty}\|\varphi_p-u\|_{L^2}+\|\nabla \varphi_p-\nabla u\|_{L^2}=0.
\]
所以，
\[
\|\varphi_p\|_{L^2}\leqslant C\|\nabla \varphi_p\|_{L^2} \ \ \Rightarrow \ \ \|u\|_{L^2}-\|u-\varphi_p\|_{L^2}\leqslant C\big(\|\nabla u\|_{L^2}+\|\nabla \varphi_p-\nabla u\|_{L^2}\big).
\]
令$p\rightarrow \infty$即可。
:::

::: remark*
这个证明不等式的方法是典型的：一般而言，很多函数空间中的函数可以用光滑函数逼近。
我们先对光滑函数证明不等式，此时，我们可以对光滑函数进行求导等运算；
然后，我们再用光滑函数来逼近一般的函数。
:::

::: remark*
Poincaré不等式的证明过程表明，
只要区域$\Omega$可以被两个平行的超平面夹住，那么，不等式仍然成立。
:::

::: corollary
我们在$H^1_0(\Omega)$上规定新的内积：
\[
\begin{aligned}(u,v)_{H_0^1}&=(\nabla u,\nabla v)_{L^2}\\
&= \sum_{k=1}^n\int_{\Omega}\partial_k u(x)\cdot \overline{\partial_k v(x)}\,dx.
\end{aligned}
\]
那么，这个新的内积所定义的范数$\|\cdot\|_{H^1_0}$与$\|\cdot\|_{H^1}$是等价的，
即存在非负常数$C_1$和$C_2$，使得对任意的$u\in H^1_{0}(\Omega)$，我们有
\[
C_1\|u\|_{H^1_0}\leqslant \|u\|_{H^1} \leqslant C_2\|u\|_{H^1_0}.
\]
:::

::: proof
按照定义，我们就有$\|u\|_{H^1_0}\leqslant \|u\|_{H^1}$，所以，选取$C_1=1$即可；
根据Poincaré不等式，我们可以选取$C_2=C+1$。
:::

::: remark*
在之后的很多场合下，当我们提及$H^1_0(\Omega)$，
我们指的是配备有$(\cdot ,\cdot)_{H_0^1}$作为内积的（完备）内积空间。
:::

在上次课上，我们引入了Sobolev空间$H^1_0(\Omega)$。在这个空间上，我们有两个内积：
对任意的$u,v\in H^1_0(\Omega)$，我们有
\[
(u,v)_{H^1}=(u,v)_{L^2}+(\nabla u,\nabla v)_{L^2},  \ \ (u,v)_{H_0^1}=(\nabla u,\nabla v)_{L^2}.
\]
当$\Omega$是有界区域时，根据Poincaré不等式，这两个内积所定义的范数是等价的。

我们首先证明一个在$H^1_0(\Omega)$中的分部积分的结果：

::: lemma {@lem:int-by-parts-in-H_0^1}
对任意的$u\in H^1_0(\Omega)$，$v\in H^1(\Omega)$，对任意的$k=1,2,\cdots,n$，我们有
\[
\int_{\Omega}\left(\partial_k u\right)\cdot  v \,dx=-\int_{\Omega}u \cdot  \left(\partial_k v\right)dx.
\]
:::

::: remark*
直观上，$u$在边界上等于$0$，所以，边界项的贡献是$0$。
:::

::: proof
当$u=\varphi\in C_0^\infty(\Omega)$时，这个等式就是分布的导数的定义，所以成立。
对于一般的$u$，我们选取一列$\{\varphi_p\}_{p\geqslant 1}\subset C_0^\infty(\Omega)$，
使得$\varphi_p \stackrel{H^1_0(\Omega)}{\longrightarrow} u$。
所以，
\[
\int_{\Omega}\left(\partial_k \varphi_p\right)\cdot  v \,dx=-\int_{\Omega}\varphi_p \cdot  \left(\partial_k v\right)dx,
\]
从而，推出来
\[
\int_{\Omega}\left(\partial_k u\right)\cdot  v \,dx+\int_{\Omega}u \cdot  \left(\partial_k v\right)dx=-\int_{\Omega}\left(\partial_k (\varphi_p-u)\right)\cdot  v \,dx-\int_{\Omega}(\varphi_p-u)  \left(\partial_k v\right)dx.
\]
由于$v,\partial_k v \in L^2(\Omega)$
而$\varphi_p-u\stackrel{L^2(\Omega)}{\longrightarrow}0$，
$\partial_k (\varphi_p-u)\stackrel{L^2(\Omega)}{\longrightarrow} 0$，
所以当$p\rightarrow \infty$时，上面的等式的极限就给出了要证明的等式。
:::

另外，这些Sobolev空间还有如下的映射性质：
\[
H^1(\mathbb{R}^n)\stackrel{\nabla}{\longrightarrow}L^2(\Omega)\stackrel{\nabla}{\longrightarrow}H^{-1}(\Omega).
\]
实际上，对任意的$u\in L^2(\Omega)$，考虑试验函数$\varphi\in \mathcal{D}(\Omega)$，
那么，对任意的$k\leqslant n$，我们有
\[
|\langle \partial_k u,\varphi\rangle|=|\langle u,\partial_k \varphi\rangle|\leqslant \|u\|_{L^2}\|\nabla \varphi\|_{L^2}\leqslant C\|\nabla \varphi\|_{H_0^1}.
\]
这就说明$\nabla u\in H^{-1}(\Omega)$（定义为$H_0^1(\Omega)$的对偶）。

## 位势方程

我们现在利用Poincaré不等式以及$H^1_0(\Omega)$空间的结构来研究
位势方程（Dirichlet问题），即找一个函数$u$，满足如下微分方程的边值问题：
\[
\begin{cases}
-\triangle u = f,\\
u\big|_{\partial\Omega}=0.
\end{cases}
\]

我们采取一种迂回折中的方式来研究上述问题。我们首先给出所求解的一个预设：
寻找$u \in H_0^1(\Omega)$，使得$-\triangle u =f$。
直观上，$H^{-1}$可以视作是对$H^{1}$中的函数求两次导数，
此时，我们先要求$f\in H^{-1}(\Omega)$。
我们要求$u \in H_0^1(\Omega)$是出于两个方面的考虑：
第一，物理上这个问题来源于经典引力理论或者静电磁理论，
这些问题通常要求函数$u$是有限能量的，即$\nabla u \in L^2(\Omega)$；
第二，$H_0^1(\Omega)$中的函数可以直观上理解为在$\partial \Omega$上的限制为$0$的函数，
所以，在这个类中寻找解可以不再去考虑边界条件
（或者说，我们可以自欺欺人地认为这个解满足了边界条件，我们之后会对这个部分做严格讨论）。

由于$u$是分布（按照定义），我们先寻找一个在分布意义下的解，
即对任意的试验函数$\varphi \in \mathcal{D}(\Omega)$，
如下的等式成立（这种解在偏微分方程理论中被称作是**弱解**）：
\[
-\langle \triangle u, \varphi\rangle =\langle f, \varphi\rangle \ \Leftrightarrow \langle \nabla u, \nabla \varphi\rangle
=\langle f, \varphi\rangle.
\]
由于我们预设的$u\in H^1_0(\Omega)$，我们把上面的分布等式改写成内积意义下等式：
\[
(\nabla \varphi, \overline{\nabla u})_{L^2}
= f(\varphi).
\]
其中，我们把$f\in H^{-1}(\Omega)$直接写成$H_0^1(\Omega)$上的函数的线性泛函的形式。
所以，利用$H_0^1(\Omega)$上的内积，这个问题转化为寻找$\overline{u} \in H^1_0(\Omega)$，使得
\[
(\varphi, \overline{u})_{H^1_0(\Omega)}=f(\varphi).
\]
实际上，由于$f$是有界线性泛函，根据Riesz表示定理，
存在唯一的$\overline{u}\in H^1_0(\Omega)$，
使得对任意的$v \in H^1_0(\Omega)$，我们都有
\[
(v, \overline{u})_{H^1_0(\Omega)}=f(v).
\]
所以，我们构造了Dirichlet问题的唯一解（在$H^1_0(\Omega)$中的唯一解）。

综上所述，我们得到如下的定理：

::: theorem
假设$\Omega$是有界区域（夹在平行的两个超平面之间即可）。
那么，对任意的$f\in H^{-1}(\Omega)$，Dirichlet问题
\[
\begin{cases}
-\triangle u = f,\\
u\big|_{\partial\Omega}=0.
\end{cases}
\]
在$H^1_0(\Omega)$中存在唯一的解，即存在唯一的$u\in H^1_0(\Omega)$，使得在分布的意义下
\[
-\triangle u \stackrel{\mathcal{D}'}{=} f.
\]
:::

::: remark*
通过解上述的Dirichlet问题，我们可以定义算子
\[
(-\triangle)^{-1}\colon H^{-1}(\Omega)\longrightarrow H^1_0(\Omega), \ \ f \mapsto u,
\]
其中$u$是$f$所对应的那个唯一的解。对任意的$v\in H^{1}_0(\Omega)$，由于
\[
\big|(v, \overline{u})_{H^1_0(\Omega)}\big|=\big|f(v)\big|\leqslant C\|v\|_{H^1_0},
\]
我们总是可以选取$C=2\|f\|_{H^{-1}}$，所以，当$v=u$时，我们有
\[
\|u\|^2_{H^1_0}\leqslant 2\|f\|_{H^{-1}}\|u\|_{H_0^1} \ \ \Rightarrow \ \ \|u\|_{H^1_0}\leqslant 2\|f\|_{H^{-1}},
\]
即
\[
\|(-\triangle)^{-1}(f)\|_{H^1_0}\leqslant 2\|f\|_{H^{-1}}.
\]
所以，
\[
(-\triangle)^{-1}\colon H^{-1}(\Omega)\longrightarrow H^1_0(\Omega)
\]
是连续线性映射。
:::

::: lemma
我们可以将$L^2(\Omega)$实现为$H^{-1}(\Omega)=\left(H^1_0(\Omega)\right)^*$的子空间：
对任意的$f\in L^2(\Omega)$，我们定义
\[
T_f\colon H^1_0(\Omega)\rightarrow \mathbb{C}, \ \ \psi \mapsto (\psi, \overline{f})_{L^2}=\int_{\Omega}f(x)\psi(x)\,dx.
\]
:::

::: proof
根据Cauchy–Schwarz不等式和Poincaré不等式，对任意的$\psi\in H^1_0(\Omega)$我们有
\[
|T_f(\psi)|\leqslant \|\psi\|_{L^2} \|f\|_{L^2} \leqslant  \left(C\|f\|_{L^2}\right)\cdot \|\nabla \psi\|_{L^2}.
\]
所以，$T_f\in H^{-1}(\Omega)$。
:::

我们可以把$(-\triangle)^{-1}$限制在$L^2(\Omega)$上
\[
\begin{tikzcd}
L^2(\Omega)\arrow[r,hook, "\iota"] \arrow[dr, "(-\triangle)^{-1} "swap]
  & H^{-1}(\Omega) \arrow[d,"(-\triangle)^{-1}"]\\
&H_0^1(\Omega) \end{tikzcd}
\]
这就得到
\[
(-\triangle)^{-1}\colon L^2(\Omega)\longrightarrow H^1_0(\Omega).
\]
换而言之，我们把$f$在$L^2(\Omega)$中选取来解Dirichlet问题就给出了上述映射。
我们还可以进一步把$H^1_0(\Omega)$嵌入到$L^2(\Omega)$中，从而得到
\[
\begin{tikzcd}
 H^{-1}(\Omega) \arrow[r,"(-\triangle)^{-1}"]
  & H^{1}_0(\Omega)\arrow[d,hook, "\iota"]\\
L^2(\Omega) \arrow[u,hook, "\iota"]  \arrow[r,"(-\triangle)^{-1}",dashed] &L^2(\Omega) \end{tikzcd}
\]
这样，我们可以定义$L^2(\Omega)$到自身的**连续**线性算子（因为它是一系列连续算子的复合）：
\[
(-\triangle)^{-1}\colon L^2(\Omega)\longrightarrow L^2(\Omega).
\]
我们之后会研究$(-\triangle)^{-1}$的谱理论，即它的特征值和特征向量的性质。

::: proposition
算子
\[
(-\triangle)^{-1}\colon L^2(\Omega)\longrightarrow L^2(\Omega),
\]
是连续的正线性算子，即对任意的$f \in L^2(\Omega)$，我们有
\[
\left((-\triangle)^{-1}f,f\right)_{L^2}\geqslant 0.
\]
这个不等式中等号成立当且仅当$f=0$。
:::

::: proof
令$u=(-\triangle)^{-1}f$，从而$u\in H^{1}_0(\Omega)$。
按照$(-\triangle)^{-1}$的定义，对任意的$v\in H^1_0(\Omega)$，我们有
\[
(v, \overline{u})_{H^1_0(\Omega)}=f(v).
\]
令$v=\overline{u}$，从而，
\[
0\leqslant (\overline{u}, \overline{u})_{H^1_0(\Omega)}=f(\overline{u})=\int_{\Omega}f\cdot \overline{(-\triangle)^{-1}f}\,dx.
\]
所以，命题中的不等式成立。

进一步，上面不等式中的等号成立当且仅当$\overline{u}\in H^1_0(\Omega)$为$0$，
这个范数与$H^1(\Omega)$中的范数等价，所以$u\equiv 0$。
:::

::: remark* [总结]
我们构造了Dirichlet问题的解算子$(-\triangle)^{-1}$。在这个过程中，
我们只是假定了$H^1_0(\Omega)$中的函数满足$u\big|_{\partial \Omega}$的边界条件。
我们下面要把这个边界条件讲清楚。为此，我们仍然要回到$\mathbb{R}^n$研究Sobolev函数的限制理论。
:::
