---
title: 分布的卷积
---

我们要研究分布的正则化问题，也就是如何用光滑函数来逼近一个给定的分布。
我们在上个学期已经学习关于光滑逼近的一个重要工具：卷积。
对于$u\in L^1(\mathbb{R}^n)$，$\varphi \in \mathcal{D}(\mathbb{R}^n)$，我们回忆一下卷积的定义：
\[
u*f=\int_{\mathbb{R}^n} u(y)\varphi(x-y)dy.
\]
据此，对于$u\in \mathcal{D}'(\mathbb{R}^n)$和$\varphi(x) \in \mathcal{D}(\mathbb{R}^n)$，
我们如下定义它们的**卷积**：对任意的$x\in \mathbb{R}^n$，令
\[
\big(u*\varphi\big)(x):=\langle u, \varphi(x-\cdot) \rangle,
\]
我们下面证明，这个定义给出了双线性的映射：
\[
\mathcal{D}'(\mathbb{R}^n)\times \mathcal{D}(\mathbb{R}^n)\stackrel{*}{\longrightarrow}  C^\infty(\mathbb{R}^n),  \ \ (u, \varphi)\mapsto u*\varphi.
\]

::: theorem
对于$u\in \mathcal{D}'(\mathbb{R}^n)$和$\varphi(x) \in \mathcal{D}(\mathbb{R}^n)$，
如上定义的卷积$u*\varphi$是$\mathbb{R}^n$上的光滑函数。进一步，对每个多重指标$\alpha$，我们都有
\[
\partial^\alpha(u*\varphi)= u*\partial^\alpha \varphi.
\]
:::

::: proof
我们证明$u*\varphi$是连续可微的函数并且对每个$1\leqslant k \leqslant n$，都有
\[
\partial_k(u*\varphi)= u*(\partial_k\varphi).
\]
实际上，只要证明了这个命题，根据归纳法，我们每次都把导数作用在$\varphi$上，这就给出了命题的证明。

先证明$u*\varphi$是良好定义的。
对任意的$x\in \mathbb{R}^n$，把它视作是给定的参数，再把$\varphi(x-y)$看作是$y$的函数，从而，
$\varphi(x-y) \in \mathcal{D}(\mathbb{R}_y^n)$，
其中我们在$\mathbb{R}^n$上用下标$y$表明这里的函数都是以$y$为变量的。
特别地，这表明分布与试验函数之间的配对$\langle u, \varphi(x-\cdot) \rangle$是良好定义的，
所以$u*\varphi(x)$作为$x$的函数是良好定义的。

再证明$u*\varphi$是连续函数。任意固定$x\in \mathbb{R}^n$。
任意选取点列$\{a_j\}_{j\geqslant 1}\subset \mathbb{R}^n$，假设当$j\rightarrow \infty$时，
$a_j \rightarrow 0$。我们要证明
\[
\lim_{j\rightarrow \infty}(u*\varphi)(x+a_j)=(u*\varphi)(x).
\]
这等价于证明
\[
\lim_{j\rightarrow \infty} \langle u, \varphi(x+a_j-\cdot)\rangle=\langle u, \varphi(x-\cdot)\rangle.
\]
由于$a_j +x\rightarrow x$，所以，我们只要证明对任意的$\{b_j\}_{j\geqslant 1}\subset \mathbb{R}^n$，
当$j\rightarrow \infty$时，$b_j \rightarrow b$，那么，
\[
\varphi(y+b_j)\stackrel{\mathcal{D}}{\longrightarrow} \varphi(y+b),
\]
即可（最终，我们选取$b_j=a_j+x$，$y=-y$）。
这是显然的：令$K={\rm supp}(\varphi)$，那么，
${\rm supp}(\varphi(\cdot+b_j))$显然都落在一个共同的紧集中$K'$（如果
$\delta=\displaystyle\sup_{j\geqslant 1}|b_j|$，那么，对任意的$j$，
${\rm supp}(\varphi(\cdot+b_j))\subset K_\delta$）。对任意的多重指标$\alpha$，我们自然有
\[
\lim_{j\rightarrow \infty}\|\partial^\alpha\varphi(y+b_j)-\partial^\alpha\varphi(y+b)\|_{L^\infty(K')}=0.
\]
这就说明了在$\mathcal{D}(\mathbb{R}^n)$中，$\varphi(\cdot +b_j) \rightarrow \varphi(\cdot+b)$。

我们最终证明，对任意的$a\in \mathbb{R}^n$（$|a|=1$），都有
\[
\nabla_a(u*\varphi)= u*(\nabla_a \varphi).
\]
固定 $x_0, a\in \mathbb{R}^n$（$|a|=1$），根据Taylor公式：
\[
\begin{aligned}
f(x)=\!\!\!\sum_{|\alpha|\leqslant m}\!\!\!\frac{\partial^\alpha f(x_0)}{\alpha!}(x-x_0)^\alpha+(m+1)\!\!\!\!\!\!\sum_{|\alpha|= m+1}\!\!\!\!\!\frac{(x-x_0)^\alpha}{\alpha!}\!\!\!\int_{0}^1(1-t)^m\partial^{\alpha}f\left(x_0+t(x-x_0)\right)dt.
\end{aligned}
\]
我们有
\[
\varphi(x_0-y+\varepsilon a)-\varphi(x_0-y)=\varepsilon \sum_{j=1}^n a_j\partial_j\varphi(x_0-y)+\varepsilon^2 r(y,\varepsilon,a),
\]
其中，
\[
\displaystyle r(y,\varepsilon,a)=2\sum_{|\alpha|= 2} \frac{a^\alpha}{\alpha!} \int_{0}^1(1-t)\partial^{\alpha}\varphi(x_0-y+t\varepsilon a)dt.
\]
将上面的式子与分布$u$进行配对，我们得到
\[
u*\varphi(x_0+\varepsilon a)-u*\varphi(x_0)-\varepsilon \sum_{j=1}^n a_ju*\partial_j\varphi(x_0)=\varepsilon^2\langle u, r(\cdot,\varepsilon,a)\rangle,
\]
其中，我们将$a,\varepsilon$和$x_0$视作是给定的参数。

根据$r(\cdot,\varepsilon,a)$的表达式，我们很容易看出$r(\cdot,\varepsilon,a)$的支集是紧的，实际上，
它的支集在$\tau_{\pm x_0}\left({\rm supp}(\varphi)\right)$距离不超过$1$的附近。
另外，对于任意的多重指标$\beta$，我们有
\[
\partial^\beta_y r(y,\varepsilon,a)=2\sum_{|\alpha|= 2} \frac{a^\alpha}{\alpha!} \int_{0}^1(1-t)\partial^{\alpha+\beta}\varphi(x_0-y+t\varepsilon a)dt.
\]
所以，$r(\cdot,\varepsilon,a)$的各阶导数被$\varphi$在它的支集上的各阶导数所控制，即
\[
\|\partial^\beta_y r(y,\varepsilon,a)\|_{L^\infty} \leqslant C\sup_{|\alpha|\leqslant |\beta|+2} \|\partial^{\alpha}\varphi\|_{L^\infty}.
\]
根据分布的定义，我们就有
\[
\langle u, r(\cdot,\varepsilon,a)\rangle = O(1).
\]
（实际上，我们需要说明这里的$O(1)$是不依赖于参数$\varepsilon$的，我们把这一点的证明留作作业，
这是一道很重要的习题。）从而，当$\varepsilon\rightarrow 0$时，我们得到
\[
\frac{|u*\varphi(x_0+\varepsilon a)-u*\varphi(x_0)-\varepsilon u*\left(\nabla_a\varphi(x_0)\right)|}{\varepsilon |a|}=o(1),
\]
这个等式就给出了要证明的等式。
:::

当试验函数含有参数时，我们要考虑对参数的微分或积分与分布的配对是否可以交换。这就是下面的定理。
证明的主要工具就是Lebesgue控制收敛定理。

::: theorem [交换积分或者微分]
给定分布$u\in \mathcal{D}'(\mathbb{R}^n)$和双变量的试验函数
$\varphi(x,y) \in \mathcal{D}(\mathbb{R}^n_x\times \mathbb{R}^p_y)$，其中$p\geqslant 1$。
对于每个参数$y\in \mathbb{R}^p$，（由于${\rm supp}_x \psi(\cdot ,y)$是紧的），我们定义函数
\[
\psi(y) =\langle u,\varphi(\cdot, y)\rangle.
\]
那么，$\psi(y)$是$\mathbb{R}^p$上的光滑有紧支集的函数，
即 $\psi(y) \in \mathcal{D}(\mathbb{R}^p_y)$。进一步，对任意的多重指标$\alpha$，我们有
\[
\partial^\alpha \psi(y) =\left\langle u,\partial_y^\alpha\varphi(\cdot, y)\right\rangle.
\]
另外，$\displaystyle \int_{\mathbb{R}^n}\cdot~ dy$与分布的配对可以交换：
\[
\displaystyle \int_{\mathbb{R}^p}\psi(y)dy = \left\langle u,\int_{\mathbb{R}^p} \varphi(\cdot, y)dy \right\rangle.
\]
:::

::: proof
我们首先证明$\psi$是光滑有紧支集的函数并且满足定理中的求导公式。
我们可以假设${\rm supp}(\varphi(x,y))\subset K_1\times K_2$，其中，
$K_1\subset \mathbb{R}^n$和$K_2\subset \mathbb{R}^p$均为紧集。
那么，对任意的$y\in \mathbb{R}^p$，${\rm supp} \phi(\cdot, y) \subset K_1$。
从而，${\rm supp} \psi \subset K_2$（因为当$y\notin K_2$时，按照定义，$\psi(y)=0$）。

我们观察到，这一部分剩下的证明实际上和上面的定理的证明是一致的：我们只需要按照Taylor公式，
把$\varphi(x, y_0+\varepsilon a)$写成：
\[
\varphi(x, y_0+\varepsilon a)-\varphi(x,y_0)-\varepsilon \sum_{j=1}^p a_j\partial_{y_j}\varphi(x,y_0)=\varepsilon^2 r(x,y_0,\varepsilon,a),
\]
然后重复之前的证明过程即可。

为了证明积分与分布的配对可以交换，我们先处理$p=1$的情形。
我们利用Riemann积分的定义（我们上学期证明过，光滑情况下，Riemann积分与Lebesgue积分是一样的）：
假设$K_2\subset [-A,A]$，其中$A$为正整数。对任意的正整数$k$，我们定义部分和
\[
r_k(x)=\sum_{|j|\leqslant kA}\frac{1}{k}\varphi(x,\frac{j}{k}).
\]
很显然，对每个$k\geqslant 1$，$r_k(x)\in \mathcal{D}(\mathbb{R}_x^n)$。
我们现在证明，在$r_k(x)\in \mathcal{D}(\mathbb{R}_x^n)$的拓扑下，有
\[
\displaystyle r_k(x)\stackrel{\mathcal{D}(\mathbb{R}^n)}{\longrightarrow} \int_{\mathbb{R}^1}\varphi(x,y)dy, \ \ k\rightarrow \infty.
\]
通过做差，我们得到
\[
\int_{\mathbb{R}^1}\varphi(x,y)dy-r_k(x)=\sum_{|j|\leqslant kA-1}\int_{\frac{j}{k}}^{\frac{j+1}{k}} \Big(\varphi(x,y)-\varphi(x,\frac{j}{k})\Big)dy,
\]
对任意的多重指标$\alpha$，利用Lebesgue控制收敛定理的推论，交换积分与求导数在此情况下总可以交换：
\[
\begin{aligned}
\partial_x^\alpha\Big(\int_{\mathbb{R}^1}\varphi(x,y)dy-r_k(x)\Big)=\sum_{|j|\leqslant kA-1}\int_{\frac{j}{k}}^{\frac{j+1}{k}} \partial_x^\alpha\Big(\varphi(x,y)-\varphi(x,\frac{j}{k})\Big)dy.
\end{aligned}
\]
根据Rolle中值定理，就有
\[
\begin{aligned}
\Big|\partial_x^\alpha\Big(\int_{\mathbb{R}^1}\varphi(x,y)dy-r_k(x)\Big)\Big| &\leqslant \Big(\sum_{|j|\leqslant kA-1}\int_{\frac{j}{k}}^{\frac{j+1}{k}} \underbrace{|y-\frac{j}{k}|}_{\leqslant \frac{1}{k}}dy \Big)\sup_{|\beta|\leqslant 1}\|\partial_x^\alpha\partial_y^\beta\varphi\|_\infty \\
&\leqslant \frac{2A}{k}\sup_{|\beta|\leqslant 1}\|\partial_x^\alpha\partial_y^\beta\varphi\|_\infty.
\end{aligned}
\]
按照定义，这表明当$k\rightarrow \infty$时，
我们有
$\displaystyle r_k(x)\stackrel{\mathcal{D}(\mathbb{R}^n)}{\longrightarrow} \int_{\mathbb{R}^1}\varphi(x,y)dy$。
从而，
\[
\begin{aligned}
\left\langle u,\int_{\mathbb{R}^p} \varphi(\cdot, y)dy \right\rangle&=\lim_{k\rightarrow \infty}\langle u,r_k(x) \rangle\\
&=\lim_{k\rightarrow \infty}\sum_{|j|\leqslant kA}\frac{1}{k}\langle u,\varphi(x,\frac{j}{k}) \rangle\\
&=\lim_{k\rightarrow \infty}\sum_{|j|\leqslant kA}\frac{1}{k}\psi(\frac{j}{k}).
\end{aligned}
\]
根据Riemann积分的定义，我们就得到
\[
\left\langle u,\int_{\mathbb{R}^p} \varphi(\cdot, y)dy \right\rangle=\int_{\mathbb{R}}\psi(y)dy.
\]
这就完成了$p=1$时的证明。对于一般的$p$，我们用归纳法和Fubini定理。
假设$y=(y',y_p)\in \mathbb{R}^p$，其中$y'\in \mathbb{R}^{p-1}$，$y_p \in \mathbb{R}$。那么，
\[
\begin{aligned}
\left\langle u,\int_{\mathbb{R}^p} \varphi(\cdot, y)dy \right\rangle&=\left\langle u,\int_{\mathbb{R}^{p-1}}\Big(\int_{\mathbb{R}} \varphi(\cdot, y',y_p)dy'\Big)dy_p \right\rangle\\
&=\int_{\mathbb{R}^{p-1}}\left\langle u,\int_{\mathbb{R}} \varphi(\cdot, y',y_p)dy'\right\rangle dy_p\\
&= \int_{\mathbb{R}^{p-1}}\int_{\mathbb{R}} \langle u,\varphi(\cdot, y',y_p)\rangle dy' dy_p
\end{aligned}
\]
我们对最后的等式利用Fubini定理可以把累次积分化作对$y\in \mathbb{R}^p$的积分，这就完成了证明。
:::

下面的命题总结了卷积
\[
\mathcal{D}'(\mathbb{R}^n)\times \mathcal{D}(\mathbb{R}^n)\stackrel{*}{\longrightarrow}  C^\infty(\mathbb{R}^n),  \ \ (u, \varphi)\mapsto u*\varphi.
\]
的大部分性质：

::: proposition [$\mathcal{D}'(\mathbb{R}^n)*\mathcal{D}(\mathbb{R}^n)$的性质]
任意给定分布$u\in \mathcal{D}'(\mathbb{R}^n)$和试验函数
$\varphi,\psi \in \mathcal{D}(\mathbb{R}^n)$，那么，我们有

- 1\) 卷积之后的支集满足：${\rm supp}(u*\varphi) \subset{\rm supp}(u) +{\rm supp}(\varphi)$；[^1]

- 2\) 卷积的结合律：
  \[
  u*(\varphi*\psi)=(u*\varphi)*\psi;
  \]

- 3\) 卷积在$0$处的取值：
  \[
  \big(u*\varphi\big)(0)=\langle u, \check{\varphi}\rangle,
  \]
  其中$\check{\varphi}(x)=\varphi(-x)$；

- 4\) 卷积的导数：对任意的多重指标$\alpha$，我们有
  \[
  \partial^\alpha(u*\varphi)=\partial^\alpha u*\varphi=u*\partial^\alpha\varphi.
  \]

:::

::: proof
我们逐条来证明：

- 1\) 我们定义
  \[
  F={\rm supp}(u)+{\rm supp}(\varphi)=\{x+y\big|x\in{\rm supp}(u), y\in{\rm supp}(\varphi)\}.
  \]
  很明显$F$是闭集，因为对于任意的Cauchy列$\{x_i+y_i\}_{i\geqslant 1}\subset F$，其中，
  $x_i\in{\rm supp}(u), y_i\in{\rm supp}(\varphi)$，由于${\rm supp}(\varphi)$是紧集，
  所以可以先选取子列（仍然记作）$\{y_i\}_{i\geqslant 1}$，使得$y_i\rightarrow y$收敛，
  并且$y\in {\rm supp}(\varphi)$；由于$\{x_i+y_i\}_{i\geqslant 1}$是Cauchy列，
  所以$\{x_i\}_{i\geqslant 1}$在闭集$ {\rm supp}(u)$中收敛到$x\in {\rm supp}(u)$，
  这说明$\{x_i+y_i\}_{i\geqslant 1}$的极限点仍然在$F$中。

  为了说明该命题，我们只要证明对任意的$x\notin F$（从而$x$附近的一个开邻域中的点也不在$F$中），
  我们有
  \[
  u*\varphi(x)=\langle u(y), \varphi(x-y)\rangle=0.
  \]
  我们证明上式的一个充分条件：
  \[
  {\rm supp}(u)\cap  {\rm supp}\left( \varphi(x-\cdot)\right) =\emptyset.
  \]
  这是明显的，因为$ {\rm supp}\left(\varphi(x-\cdot)\right)=- {\rm supp}(\varphi) +x$。

- 2\) 结合律的证明用到了上一个定理中分布与积分可交换的性质：
  \[
  \begin{aligned}
  (u*\varphi)*\psi(x)&=\int_{\mathbb{R}^n} (u*\varphi)(y)\psi(x-y)dy\\
  &=\int_{\mathbb{R}^n} \langle u(z), \varphi(y-z)\rangle\psi(x-y)dy\\
  &=\int_{\mathbb{R}^n} \langle u(z), \varphi(y-z)\psi(x-y)\rangle dy\\
  &=\left\langle u(z),\int_{\mathbb{R}^n}\varphi(y-z)\psi(x-y)dy\right\rangle.
  \end{aligned}
  \]
  另外，
  \[
  \begin{aligned}
  (u*(\varphi*\psi)\big)(x)&=\langle u(z),(\varphi*\psi)(x-z)\rangle\\
  &=\left\langle u(z),\int_{\mathbb{R}^n}\varphi(x-z-y)\psi(y)dy\right\rangle.
  \end{aligned}
  \]
  做变量替换$y\mapsto x-y$就可以看到上面的两个等式是相等的。

- 3\) 这是显然的：利用定义即可。

- 4\) 我们证明第一个等号。事实上，我们有
  \[
  \begin{aligned}
  \partial^\alpha u*\varphi(x)&=\left\langle u(y),(-1)^{|\alpha|}\partial^\alpha_y\big(\varphi(x-y)\big)\right\rangle\\
  &=\left\langle u(y),\big(\partial^\alpha\varphi\big)(x-y)\right\rangle\\
  &= u*\partial^\alpha \varphi.
  \end{aligned}
  \]
  由于我们已经证明了第三项与第一项相等，所以命题成立。

:::

作为应用卷积的应用，我们证明，在分布的意义下，任意一个分布可以被光滑函数所逼近：

::: theorem
我们任意选取标准的单位逼近$\chi_\varepsilon$，其中$\varepsilon>0$。
那么，对任意的$u\in \mathcal{D}'(\mathbf{R}^n)$，当$\varepsilon \rightarrow 0$时，我们都有
\[
u*\chi_\varepsilon\stackrel{\mathcal{D}'}{\longrightarrow}u.
\]
另外，如果$u\in \mathcal{E}'(\mathbb{R}^n)$，
那么逼近序列$u*\chi_\varepsilon\in C_0^\infty(\mathbb{R}^n)$。
:::

::: proof
我们只要证明，对任意的试验函数$\varphi(x) \in \mathcal{D}(\mathbb{R}^n)$，有
\[
\lim_{\varepsilon\rightarrow 0} \left\langle u*\chi_\varepsilon,\varphi\right\rangle=\langle u,\varphi\rangle.
\]
根据上面第三个和第四个命题，我们有
\[
\begin{aligned}
\langle u*\chi_\varepsilon,\varphi\rangle &=\big((u*\chi_\varepsilon)*\check{\varphi}\big)(0)=\big(u*(\chi_\varepsilon*\check{\varphi})\big)(0)\\
&=\langle u, (\chi_\varepsilon*\check{\varphi})\,\check{}\,\rangle =\langle u, (\chi_\varepsilon)\,\check \,*  \varphi \rangle.
\end{aligned}
\]
容易证明（请参考本次作业），当$\varepsilon\rightarrow 0$时，我们有
\[
(\chi_\varepsilon)\,\check \,*  \varphi \stackrel{\mathcal{D}}{\longrightarrow}\varphi.
\]
从而定理得证。
:::

::: remark*
对任意的分布$u\in \mathcal{D}'(\mathbb{R}^n)$，我们通过如下的式子来定义$\check{u}$：
\[
\langle \check{u},\varphi\rangle=\langle u,\check{\varphi}\rangle,
\]
其中$\varphi$是试验函数。
:::

我们对卷积做推广，来定义一个分布与一个有紧支集的分布的卷积：
\[
\mathcal{D}'(\mathbb{R}^n)*\mathcal{E}'(\mathbb{R}^n)\stackrel{*}{\longrightarrow} \mathcal{D}'(\mathbb{R}^n).
\]
为此，我们选取$u\in \mathcal{D}'(\mathbb{R}^n)$，
$\psi\in \mathcal{D}(\mathbb{R}^n) \subset \mathcal{E}'(\mathbb{R}^n)$来做计算（实际上，
我们选取所有的函数都在$\mathcal{D}(\mathbb{R}^n)$中也可以）。此时，我们有如下等式
\[
\langle u*\psi, \varphi\rangle = \langle u, \check{\psi}*\varphi\rangle.
\]
这个等式实际上在前一个定理的证明中已经证明了，其中$\psi=\chi_\varepsilon$。

根据上面等式的启发，我们定义

::: theorem
任意给定分布$u\in \mathcal{D}'(\mathbb{R}^n)$和有紧支集的分布$c \in \mathcal{D}'(\mathbb{R}^n)$，
如下定义的$u*c$：
\[
\langle u*c,\varphi\rangle = \langle u,\check{c}*\varphi\rangle,
\]
是$\mathbb{R}^n$上的分布，其中$\varphi \in \mathcal{D}(\mathbb{R}^n)$是任意的试验函数。
:::

::: proof
根据分布的定义，我们要证明，任意给定紧集$K\subset \mathbb{R}^n$，存在常数$C$和$p$，
使得对每个试验函数$\varphi\in C^\infty_K(\mathbb{R}^n)$，都有不等式
\[
|\langle u, \check{c}*\varphi\rangle|\leqslant C \sup_{|\alpha|\leqslant p}\|\partial^\alpha \varphi\|_{L^\infty}.
\]
首先，我们注意到${\rm supp}(\check{c}*\varphi)\subset L$，其中，$L = {\rm supp}(\check{c})+K$。
我们注意到，$L$为紧集（有界闭集）。
从而，根据$u$是分布的定义，存在常数$D$和$q$（只依赖于$L$，从而只依赖于$K$），使得
\[
|\langle u, \check{c}*\varphi\rangle|\leqslant D \sup_{|\beta|\leqslant q}\|\partial^\beta \big(\check{c}*\varphi\big)\|_{L^\infty}.
\]
我们计算$\partial^\beta \big(\check{c}*\varphi\big)$：
\[
\begin{aligned}
\partial^\beta \big(\check{c}*\varphi\big)(x)&=\check{c}*\partial^\beta \varphi=\left\langle c,\partial^\beta\varphi(x+\cdot)\right\rangle.
\end{aligned}
\]
此时，由于$c$是有紧支集的分布，所以存在$D'$和$q'$，使得
\[
|\partial^\beta \big(\check{c}*\varphi\big)|\leqslant D' \sup_{|\beta|\leqslant q'}\|\partial^{\beta+\beta'} \varphi\|_{L^\infty}.
\]
最终，我们选取$C=DD'$和$p=q+q'$就证明了$u*c$是分布。
:::

::: remark*
这个定义给出了卷积的定义：
\[
\mathcal{D}'(\mathbb{R}^n)*\mathcal{E}'(\mathbb{R}^n)\stackrel{*}{\longrightarrow} \mathcal{D}'(\mathbb{R}^n).
\]
:::

::: example* [Dirac函数与平移算子]
给定分布$u\in \mathcal{D}'(\mathbb{R}^n)$，给定$a\in \mathbb{R}^n$，
我们定义了该分布的平移$\tau_a u$：
\[
\langle \tau_a u, \varphi\rangle=\langle u, \varphi(\cdot +a)\rangle.
\]
我们来证明：
\[
u*\delta_a=\tau_a u.
\]
实际上，我们有$\check{\delta}_a=\delta_{-a}$，所以
\[
\langle  u*\delta_a, \varphi \rangle=\langle u, \delta_a*\varphi\rangle.
\]
所以，$ \delta_{-a}*\varphi=\varphi(x+a)$即可。根据定义，
\[
\big(\delta_a*\varphi\big)(x):=\langle \delta_{-a}, \varphi(x-\cdot) \rangle=\varphi(x+a).
\]
所以，命题成立。

特别地，对任意的分布$u\in \mathcal{D}'(\mathbb{R}^n)$，我们有
\[
u*\delta_0=u.
\]

另外，我们还可以用卷积来还原$\mathbb{R}^n$上的群结构：
\[
\delta_a*\delta_b=\delta_{a+b}.
\]
:::

对于分布之间的卷积，我们也有类似于之前的性质：

::: proposition
对任意的分布$u\in \mathcal{D}'(\mathbb{R}^n)$和$c \in \mathcal{E}'(\mathbb{R}^n)$，我们有

- 1\) 卷积之后的支集满足：${\rm supp}(u*c) \subset {\rm supp}(u)+{\rm supp}(c)$。特别地，我们有
  \[
  \mathcal{E}'(\mathbb{R}^n)*\mathcal{E}'(\mathbb{R}^n)\stackrel{*}{\longrightarrow} \mathcal{E}'(\mathbb{R}^n).
  \]

- 2\) 卷积与求导数可交换：对任意的多重指标$\alpha$，我们有
  \[
  \partial^\alpha(u*c)=\left(\partial^\alpha u\right)*c=u*\left(\partial^\alpha c\right).
  \]

:::

::: proof
我们逐条来证明：

- 1\) 我们令$F= {\rm supp}(u)+{\rm supp}(c)$，这是一个闭集（证明用到了${\rm supp}(c)$是紧的，
  请参考之前的论证）。
  考虑任意一个试验函数$\varphi$，我们令$K={\rm supp}(\varphi)$，假设$K \cap F =\emptyset$。那么，
  \[
  {\rm supp}(u) \cap \left(K+{\rm supp}(\check{c})\right)=\emptyset.
  \]
  这表明${\rm supp}(u) $与${\rm supp}{\check{c}*\varphi}$是不相交的，所以
  \[
  \langle u*c, \varphi\rangle =\langle u, \check{c}*\varphi\rangle =0.
  \]

- 2\) 我们利用定义直接计算：
  \[
  \begin{aligned}
  \langle \partial^\alpha(u*c), \varphi\rangle&=\langle u*c, (-1)^{|\alpha|}\partial^\alpha \varphi\rangle=\langle u, (-1)^{|\alpha|}\check{c}*\partial^\alpha \varphi\rangle\\
  &=\langle u, (-1)^{|\alpha|}\partial^\alpha \big(\check{c}*\varphi\big)\rangle=\langle \partial^\alpha u, \check{c}*\varphi\rangle\\
  &=\langle \left(\partial^\alpha u\right)*c, \varphi\rangle.
  \end{aligned}
  \]
  另外，我们还可以如下计算：
  \[
  \begin{aligned}
  \langle \partial^\alpha(u*c), \varphi\rangle&=\langle u, (-1)^{|\alpha|}\check{c}*\partial^\alpha \varphi\rangle=\langle u, (-1)^{|\alpha|}\big(\partial^\alpha \check{c}\big)*\varphi\rangle\\
  &=\langle u, \big(\partial^\alpha {c}\big)\,\check\,*\varphi\rangle\\
  &=\langle  u* \left(\partial^\alpha c\right), \varphi\rangle.
  \end{aligned}
  \]
  命题得证。

:::

我们对于
\[
\mathcal{E}'(\mathbb{R}^n)*\mathcal{E}'(\mathbb{R}^n)\stackrel{*}{\longrightarrow} \mathcal{E}'(\mathbb{R}^n).
\]
来证明交换律：

::: proposition
对任意的$c_1,c_2 \in \mathcal{E}'(\mathbb{R}^n)$，我们有
\[
c_1*c_2=c_2*c_1.
\]
:::

::: proof
首先定义
\[
c_{1,\varepsilon}=c_1*\chi_\varepsilon.
\]
根据之前证明的逼近引理，在分布的意义下，我们有极限：
\[
c_{1,\varepsilon} \stackrel{\mathcal{D}'}{\longrightarrow}c_1,\ \ \varepsilon\rightarrow 0.
\]
另外，我们知道$\check{c}_2*\varphi$是有紧支集的光滑函数，所以可以作为试验函数。从而，
\[
\begin{aligned}
\langle c_{1,\varepsilon}, \check{c}_2*\varphi \rangle&=\int_{\mathbb{R}^n}c_{1,\varepsilon}(x) \check{c}_2*\varphi(x)dx=\int_{\mathbb{R}^n}c_{1,\varepsilon}(x)\langle \check{c}_2, \varphi(x-\cdot)\rangle dx\\
&=\left\langle\check{c}_2, \int_{\mathbb{R}^n}c_{1,\varepsilon}(x) \varphi(x-\cdot)dx\right\rangle \\
&=\left\langle\check{c}_2,     \underbrace{\int_{\mathbb{R}^n}c_{1,\varepsilon}(x) \check{\varphi}(\cdot-x)dx}_{\text{写成卷积的形式}}\right\rangle\\
&=\langle\check{c}_2, c_1*(\chi_\varepsilon*\check{\varphi})\rangle\\
&=\langle {c}_2, \big(c_1*(\chi_\varepsilon*\check{\varphi})\big)\,\check\,\,\rangle\\
&=\langle {c}_2, \check{c}_1*(\check{\chi}_\varepsilon*{\varphi})\rangle\\
&=\langle {c}_2*c_1, \check{\chi}_\varepsilon*{\varphi}\rangle.
\end{aligned}
\]
另外，当$\varepsilon\rightarrow 0$时，我们有极限
\[
\begin{aligned}
\langle c_{1,\varepsilon}, \check{c}_2*\varphi \rangle &\rightarrow \langle c_1*c_2,\varphi\rangle,\\
\langle {c}_2*c_1, \check{\chi}_\varepsilon*{\varphi}\rangle&\rightarrow\langle c_2*c_1,\varphi\rangle.
\end{aligned}
\]
这就证明了命题。
:::

::: theorem [卷积的连续性]
给定有紧支集的分布的序列$\{c_k\}_{k\geqslant 1}\subset \mathcal{E}'(\mathbb{R}^n)$，
我们假设存在紧集$K\subset \mathbb{R}^n$，使得对任意的$k\geqslant 1$，有${\rm supp}(c_k)\subset K$；
给定分布的序列$\{u_k\}_{k\geqslant 1}\subset \mathcal{D}'(\mathbb{R}^n)$。
假设存在分布$c,u\in \mathcal{D}'(\mathbb{R}^n)$，使得在分布的意义下，我们有极限
\[
c_k\stackrel{\mathcal{D'}}{\longrightarrow} c, \ \ u_k\stackrel{\mathcal{D'}}{\longrightarrow} u, \ \ k\rightarrow \infty.
\]
那么，当$k\rightarrow \infty$时，在分布的意义下，我们有
\[
u*c_k\stackrel{\mathcal{D'}}{\longrightarrow} u*c, \ \ u_k*c\stackrel{\mathcal{D'}}{\longrightarrow} u*c.
\]
:::

::: proof
先证明第二个极限。
任意选取试验函数$\varphi \in  \mathcal{D}(\mathbb{R}^n)$，那么，
$\check{c}*\varphi\in \mathcal{D}(\mathbb{R}^n)$也是试验函数。所以，以下的计算是良好定义的：
\[
\langle u_k*c,\varphi \rangle = \langle u_k,\check{c}*\varphi \rangle \rightarrow \langle u,\check{c}*\varphi \rangle=\langle u*c,\varphi \rangle.
\]
这就证明了第二个极限。

为了证明第一个极限，我们先选定一个有紧支集的光滑函数$\psi$，
使得$\psi$在紧集${\rm supp}(\varphi)-K$上恒等于$1$（我们要用这个函数来记住$\check{c}_k*\varphi $
的支集，这是常用的技巧）。那么，
\[
\begin{aligned}
\langle u*c_k,\varphi \rangle&=\langle u,\check{c}_k*\varphi \rangle=\langle  u,\psi\cdot\check{c}_k*\varphi \rangle.
\end{aligned}
\]
根据有紧支集分布的卷积的交换性，我们就有
\[
\begin{aligned}
\langle u*c_k,\varphi \rangle=\langle (\psi u)*c_k,\varphi \rangle=\langle c_k*(\psi u),\varphi \rangle\rightarrow \langle c*(\psi u),\varphi \rangle.\end{aligned}
\]
其中，最后一步的极限我们用到了刚证明的结论。
最终，我们再对$\langle c*(\psi u),\varphi \rangle$把上面的计算反着做一遍：
\[
\begin{aligned}
\langle c*(\psi u),\varphi \rangle&=\langle (\psi u)*c,\varphi \rangle=\langle  u,\psi\cdot\check{c}*\varphi \rangle \\
&=\langle  u,\check{c}*\varphi \rangle =\langle u*c,\varphi \rangle.
\end{aligned}
\]
这就证明了定理。
:::

::: remark*
这个定理证明了对卷积的每个分量的连续性而不是对两个分量的连续性。
直观上，我们可以不介意这一点，通过把每个分量与$\chi_\varepsilon$做卷积，我们可以想象卷积
\[
\mathcal{D}'(\mathbb{R}^n)\times\mathcal{E}'(\mathbb{R}^n)\stackrel{*}{\longrightarrow} \mathcal{D}'(\mathbb{R}^n)
\]
可以由它在子空间
\[
C^\infty(\mathbb{R}^n)\times C_0^\infty(\mathbb{R}^n)\rightarrow \mathcal{D}'(\mathbb{R}^n)
\]
上的限制决定。在这个子空间上，所有的计算都是直接用积分计算的。
:::

::: corollary [卷积的结合律]
对于 $c_1,c_2 \in \mathcal{E}'(\mathbb{R}^n)$ 和 $u \in \mathcal{D}'(\mathbb{R}^n)$，我们有
\[
(u*c_1)*c_2=u*(c_1*c_2).
\]
:::

::: proof
我们定义$c_{2,\varepsilon}=c_2*\chi_\varepsilon$，从而，我们有
\[
\lim_{\varepsilon\rightarrow 0}c_{2,\varepsilon}\stackrel{D'}{=}c_2.
\]
根据上述逼近定理，我们只要证明
\[
(u*c_1)*c_{2,\varepsilon}=u*(c_1*c_{2,\varepsilon})
\]
即可。所以，我们不妨假设$c_2\in C_0^\infty(\mathbb{R}^n)$。

类似地，我们定义$c_{1,\varepsilon}=c_1*\chi_\varepsilon$，那么，
\[
\lim_{\varepsilon\rightarrow 0}c_{1,\varepsilon}\stackrel{D'}{=}c_1.
\]
所以，
\[
\lim_{\varepsilon\rightarrow 0} u*c_{1,\varepsilon}\stackrel{D'}{=}u*c_1.
\]
再用上述逼近定理，我们只要证明
\[
(u*c_{1,\varepsilon})*c_{2}=u*(c_{1,\varepsilon}*c_{2})
\]
即可。所以，我们又可以假设 $c_1\in  C_0^\infty(\mathbb{R}^n)$。

当$c_1,c_2 \in C_0^\infty(\mathbb{R}^n)$时，定理已经被证明过。
:::

我们可以把$C^\infty(\mathbb{R}^n)$中的函数看作是分布，
从而可以与$\mathcal{E}'(\mathbb{R}^n)$中的分布做卷积。我们现在说明，这样得到的分布是光滑函数：

::: theorem
对任意的$c \in \mathcal{E}'(\mathbb{R}^n)$和$f \in C^\infty(\mathbb{R}^n)$，分布$f*c$是光滑函数，即
\[
C^\infty(\mathbb{R}^n)*\mathcal{E}'(\mathbb{R}^n)\stackrel{*}{\longrightarrow} C^\infty(\mathbb{R}^n).
\]
特别地，我们有如下的公式：
\[
f*c(x) =\langle c,f(x-\cdot)\rangle.
\]
其中，我们用到了有紧支集的分布可以和任意的光滑函数进行配对。
:::

::: proof
首先回忆一下，在上个学期关于Stokes公式的第一个证明中，
我们用到了如下的单位分解定理（参考第47次讲义）：

**引理（周期的单位分解）。** 对任意的$N\geqslant 1$，令$\Gamma_N=2^{-(N+1)}\mathbb{Z}^n$。
那么，存在一族有紧支集的非负的光滑函数$\{\chi_{\mathbf{k}}(x)\}_{\mathbf{k}\in \Gamma_N}$，
满足如下的两个条件：

- 1\) 对任意的$\mathbf{k}\in \Gamma_N$，
  ${\rm supp}\chi_{\mathbf{k}}$落在以$\mathbf{k}$为中心边长为$2^{-N+1}$的正方体中；

- 2\) 常值函数$1$可以分解为：
  \[
  1=\sum_{\mathbf{k}\in \Gamma_N}\chi_{\mathbf{k}}.
  \]

令$N= 0$，那么我们就可以得到非负的光滑函数$\{\psi_q\}_{q\in \mathbb{Z}^n}$，使得
\[
\sum_{q\in \mathbb{Z}^n}\psi_q\equiv 1,
\]
并且对任意的$q \in \mathbb{Z}^n$，${\rm supp}(\psi_q)$落在以$q$为中心边长为$2$的正方体中。
利用这个单位分解，我们把$f$写成
\[
f=\sum_{q\in \mathbb{Z}^n}f_q=\sum_{q\in \mathbb{Z}^n}\psi_q\cdot f.
\]
我们强调一下，以上的求和在每个点处都是有限求和。
从而，
\[
\begin{aligned}
\langle f*c,\varphi\rangle&=\langle f,\overbrace{\check{c}*\varphi}^{\text{紧支集}}\rangle=\left\langle \sum_{q\in \mathbb{Z}}f_p,\check{c}*\varphi\right\rangle=\left\langle \sum_{\text{有限和}}f_p,\check{c}*\varphi\right\rangle.
\end{aligned}
\]
有限和自然与分布（$=$积分）是可交换的，所以
\[
\begin{aligned}
\langle f*c,\varphi\rangle&=\sum_{\text{有限和}}\langle f_p*c,\varphi\rangle\\
&=\sum_{\text{有限和}} \langle c*f_p,\varphi\rangle\\
&=\sum_{\text{有限和}}\int_{\mathbb{R}^n}\langle c,f_p(x-\cdot)\rangle\varphi(x)dx\\
&= \int_{\mathbb{R}^n}\langle c,f(x-\cdot)\rangle\varphi(x)dx.
\end{aligned}
\]
再次交换求和与积分，我们得到
\[
\begin{aligned}
\langle f*c,\varphi\rangle&=\int_{\mathbb{R}^n}\left\langle c,\sum_{\text{有限和}} f_p(x-\cdot)\right\rangle\varphi(x)dx\\
&= \int_{\mathbb{R}^n}\langle c,\sum_{p\in \mathbb{Z}}f(x-\cdot)\rangle\varphi(x)dx\\
&= \int_{\mathbb{R}^n}\langle c,f(x-\cdot)\rangle\varphi(x)dx.
\end{aligned}
\]
这就给出了所要证明的公式。

最终，为了证明$f*c$的光滑性，我们只要说明$x\mapsto \langle c,f(x-\cdot)\rangle$是光滑的即可，
这就是对参数求导的定理的简单应用，我们把证明留作作业。
:::

[^1]: 两个集合$A,B\subset \mathbb{R}^n$的加法$A+B$指的是：
  \[
  A+B:=\{a+b|a\in A,b\in B\}.
  \]
