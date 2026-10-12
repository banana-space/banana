---
title: Sobolev 空间的基本性质，Sobolev 嵌入定理
notices:
  - name: 问题
    items:
      - Hilbert 空间定理之后，“下降的链”的包含关系似乎写反了，应为 $s\geqslant s'\Rightarrow H^{s}(\mathbb{R}^n)\subset H^{s'}(\mathbb{R}^n)$。
      - 同一段末尾的 $\mathcal{D}'(\mathbb{R}^n) \subset \bigcup_{s} H^{s}(\mathbb{R}^n)$ 似乎不成立（例如常数函数 $1$，见本页的例子），似乎应为 $\mathcal{E}'(\mathbb{R}^n)$；那里的 $\varprojlim$ 似乎也应为 $\varinjlim$。
      - “Sobolev 空间的映射性质”命题及其证明中的 $(1+\triangle)^{\pm\frac{p}{2}}$ 似乎应为 $(1-\triangle)^{\pm\frac{p}{2}}$，乘子 $(1+|\xi|)^{\pm\frac{p}{2}}$ 似乎应为 $(1+|\xi|^2)^{\pm\frac{p}{2}}$。
      - $H^s$ 版本的结构定理的证明中，$g(\xi)$ 的指数与 $N$ 的定义似乎应为 $N=\left\lfloor \frac{p}{2} \right\rfloor+n+1$，$g(\xi)=(1+|\xi|^2)^{-N}\widehat{c}(\xi)$。
      - “$H^s$ 是代数”的定理的证明中，$\|g\|_{L^2}\leqslant C_2\|v\|_{H^s}$ 似乎应为 $\|g\|_{L^1}\leqslant C_2\|v\|_{H^s}$。
---

在后面的课程中，我们会经常用所谓的**Plancherel公式**：对任意的$f\in L^2(\mathbb{R}^n)$，我们有
\[
\|\widehat{f}\|_{L^2}^2= (2\pi)^n\|f\|_{L^2}^2 \ \ \Leftrightarrow \ \ \int_{\mathbb{R}^n}|f(x)|^2dx=\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}|\widehat{f}(\xi)|^2d\xi.
\]
它的另外一个版本是说对任意的$f,g\in L^2(\mathbb{R}^n)$，我们有
\[
(\widehat{f},\widehat{g})_{L^2}=(2\pi)^n({f},{g})_{L^2} \ \ \Leftrightarrow \ \ \int_{\mathbb{R}^n}f(x)\overline{g(x)}dx=\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}\widehat{f}(\xi)\overline{\widehat{g}(\xi)}d\xi.
\]
这个公式我们之前已经证明过。

我们现在引入$\mathbb{R}^n$上的Sobolev空间的定义。

::: definition
给定$s\in \mathbb{R}$，我们将把这个数称为是Sobolev空间的指标。
我们考虑满足如下性质的缓增分布$u\in  \mathcal{S}'(\mathbb{R}^n)$：

- 1\) $\widehat{u}\in L^1_{\rm loc}(\mathbb{R}^n)$是局部可积的函数；

- 2\) $(1+|\xi|^2)^{\frac{s}{2}}\widehat{u}(\xi)$是平方可积的函数。

对于这样的函数，我们定义其Sobolev范数为：
\[
\|u\|_{H^s}=\left(\int_{\mathbb{R}^n}(1+|\xi|^2)^s|\widehat{u}(\xi)|^2d\xi\right)^{\frac{1}{2}}.
\]
我们把所有满足上述条件的缓增分布的集合称作是一个**指标为$s$的Sobolev空间**，这显然是一个复线性空间，
我们用$H^s(\mathbb{R}^n)$来表示。

在$H^s(\mathbb{R}^n)$上所赋予的范数与下面的内积是相容的：对任意的$u,v\in H^s(\mathbb{R}^n)$，令
\[
(u,v)_{H^s} = \int_{\mathbb{R}^n}(1+|\xi|^2)^s \widehat{u}(\xi) \overline{\widehat{v}(\xi)}d\xi.
\]
所以，$\big(H^s(\mathbb{R}^n), (\cdot,\cdot)_{H^s}\big)$是内积空间。
:::

我们注意到，当$s=0$时，我们$H^0(\mathbb{R}^n)$实际上就是$L^2(\mathbb{R}^n)$，
这由Plancherel公式立即就可以得到：
\[
u\in L^2(\mathbb{R}^n) \ \  \Leftrightarrow \ \ \widehat{u}\in L^2(\mathbb{R}^n).
\]
所以，
\[
H^0(\mathbb{R}^n)=L^2(\mathbb{R}^n).
\]
类似的，如果我们在频率空间$\mathbb{R}^n_\xi$上考虑测度
\[
\mu_s = (1+|\xi|^2)^s d\xi.
\]
那么，$u\in H^s(\mathbb{R}^n)$当且仅当$\widehat{u}\in L^2(\mathbb{R}^n,d\mu_s)$。
利用这个观察，我们现在证明：

::: theorem
对任意的$s\in \mathbb{R}$，
$\big(H^s(\mathbb{R}^n), (\cdot,\cdot)_{H^s}\big)$是Hilbert空间（即完备的内积空间）。
:::

::: proof
假设$\{u_k\}_{k\geqslant 1}\subset H^s\left(\mathbb{R}^n\right)$是Cauchy列，那么，根据定义，
$\{\widehat{u_k}\}_{k\geqslant 1}\subset L^2\left(\mathbb{R}^n,d\mu_s\right)$是Cauchy列。
利用$L^2$-空间的完备性，存在$v(\xi) \in  L^2\left(\mathbb{R}^n,d\mu_s\right)$作为上述序列的极限。
我们用$u(x)\in \mathcal{S}'(\mathbb{R}^n)$表示它的Fourier逆变换，即
\[
\widehat{u}=v.
\]
那么，
\[
\lim_{k\rightarrow \infty}\|\widehat{u_k}-\widehat{u}\|^2_{L^2(\mathbb{R}^n,d\mu_s)}=0 \ \ \Leftrightarrow \ \ \lim_{k\rightarrow \infty}\|{u_k}-{u}\|^2_{H^s(\mathbb{R}^n)}=0.
\]
这就证明了完备性。
:::

根据Sobolev空间的定义，我们知道$\{H^s(\mathbb{R}^n)\}_{s\in \mathbb{R}}$构成了一个下降的链，
即对任意的$s,s'\in \mathbb{R}$
\[
s\geqslant s' \ \ \Rightarrow \ \ H^{s'}(\mathbb{R}^n)\subset H^s(\mathbb{R}^n).
\]
我们观察到，Schwartz函数生活在所有的Sobolev空间中：
\[
\mathcal{S}(\mathbb{R}^n) \subset \bigcap_{s\in \mathbb{R}}H^{s}(\mathbb{R}^n).
\]
为了说明这个一点，我们再次运用我们熟悉的一个技巧。
对任意的$\varphi\in \mathcal{S}(\mathbb{R}^n)$，我们只要说明它的$H^s$-范数是有界的即可：
\[
\begin{aligned}
\|\varphi\|^2_{H^s}&= \int_{\mathbb{R}^n}\underbrace{(1+|\xi|^2)^{s+\frac{n+1}{2}}|\widehat{\varphi}|^2}_{\in L^\infty} \underbrace{(1+|\xi|^2)^{-\frac{n+1}{2}}}_{\in L^1}d\xi\\
&\leqslant CN_{2s+n+1}(\widehat{\varphi})^2 \int_{\mathbb{R}^n} (1+|\xi|^2)^{-\frac{n+1}{2}}d\xi\\
&\leqslant C' N_{2s+2n+2}(\varphi)^2.
\end{aligned}
\]
我们在之后会证明
\[
\mathcal{D}'(\mathbb{R}^n) \subset  \varprojlim_{s\in \mathbb{R}} H^{s}(\mathbb{R}^n)=\bigcup_{s\in \mathbb{R}}H^{s}(\mathbb{R}^n).
\]

::: proposition [正整数阶的Sobolev空间]
假设$m\in \mathbb{Z}_{\geqslant 1}$为正整数，那么，$H^m(\mathbb{R}^n)$有如下的等价刻画：
\[
\begin{aligned}
H^m(\mathbb{R}^n)&=\left\{u\in \mathcal{S}'(\mathbb{R}^n)\big| \text{对任意的多重指标} \alpha,  ~ |\alpha|\leqslant m, ~\partial^\alpha u \in L^2(\mathbb{R}^n)\right\}.
\end{aligned}
\]
:::

::: proof
这个命题的证明基于如下的一个简单的观察：给定正整数$m$，存在常数$C_1$和$C_2$，
使得对任意的$\xi\neq 0$，我们有
\[
C_1(1+|\xi|^2)^m\leqslant  \sum_{|\alpha|\leqslant m}|\xi^\alpha|^2 \leqslant C_2(1+|\xi|^2)^m,
\]
其中$|\xi^\alpha|=|\xi_1^{\alpha_1}\xi_2^{\alpha_2}\cdots \xi_n^{\alpha_n}|$。
这个证明是初等的，我们留作作业来验证。

所以，在差一个常数的意义下，我们就有
\[
\begin{aligned}
\int_{\mathbb{R}^n}(1+|\xi|^2)^m|\widehat{u}|^2d\xi &\approx \sum_{|\alpha|\leqslant m}\int_{\mathbb{R}^n} |\xi^\alpha\widehat{u}|^2d\xi\\
&\stackrel{Plancherel}{\approx}\sum_{|\alpha|\leqslant m}\int_{\mathbb{R}^n} |\partial^\alpha {u}|^2dx.
\end{aligned}
\]
上式最后一个积分有限就等价于说对任意的多重指标$\alpha$，
我们有$\partial^\alpha u \in L^2(\mathbb{R}^n)$，其中$|\alpha|\leqslant m$，这就证明了命题。
:::

我们在此给出两个重要的例子：

::: example*
下面的Sobolev空间都定义在$\mathbb{R}^n$上。

- 1\) 对任意的$s<-\dfrac{n}{2}$，我们有
  \[
  \delta_0\in H^s(\mathbb{R}^n).
  \]
  实际上，我们只要说明下面的积分有限即可：
  \[
  \begin{aligned}
  \int_{\mathbb{R}^n}(1+|\xi|^2)^s \cdot 1 d\xi.
  \end{aligned}
  \]
  这在$s<-\dfrac{n}{2}$时是成立的。
  同样的推理表明，当$s\geqslant-\dfrac{n}{2}$时，$\delta_0\notin H^s(\mathbb{R}^n)$。

- 2\) 常数值函数$1$不在任何的$H^s(\mathbb{R}^n)$中。特别地，这表明
  \[
  \bigcup_{s\in \mathbb{R}}H^s(\mathbb{R}^n) \subsetneqq \mathcal{S}'(\mathbb{R}^n).
  \]

:::

## Sobolev空间的映射性质

为了研究Sobolev空间的映射性质，我们先引入一类比微分算子更广的算子。
首先，我们回忆一下，对于任意的缓增分布，对任意的$k\leqslant n$，我们有
\[
\widehat{\frac{1}{i}\partial_k u}(\xi)=\xi \widehat{u}(\xi).
\]
我们定义算子
\[
D_k=\frac{1}{i}\partial_k=-i\partial_k, k=1,2,\cdots,n.
\]
为了简单起见，我们还把它写成
\[
D=\frac{1}{i}\partial.
\]
形式上，$D$对一个分布的作用在频率空间上来看就是乘以$\xi$。

::: definition [Fourier乘子]
给定频率空间上的函数$m(\xi)$，我们假设它是多项式增长的。
对于任意的缓增分布$u\in \mathcal{S}'(\mathbb{R}^n)$，我们定义
\[
m(D)u =\mathcal{F}^{-1} \left(m(\xi)\widehat{u}(\xi)\right)  \ \  \Leftrightarrow \ \ \widehat{m(D)u}=m(\xi)\widehat{u}(\xi).
\]
由于$m(\xi)$是多项式增长的，所以，$m(\xi)\widehat{u}(\xi)$仍然是缓增分布，所以，
如下的算子是良好定义的：
\[
m(D): \mathcal{S}'(\mathbb{R}^n)\rightarrow \mathcal{S}'(\mathbb{R}^n).
\]
:::

::: example*
我们先看几个简单的例子：

- 1\) 当$m(\xi)=\xi_k$时，其中$k=1,2,\cdots, n$，我们有
  \[
  m(D)=\frac{1}{i}\partial_k=D_k.
  \]

- 2\) 当$m(\xi)=|\xi|^2$时，我们有
  \[
  m(D)=-\triangle.
  \]

- 3\) 给定线性微分算子
  \[
  P=\sum_{|\alpha|\leqslant m}a_\alpha \partial^\alpha,
  \]
  它可以被视作是一个Fourier乘子$m(D)$，其中
  \[
  m(\xi)=\sum_{|\alpha|\leqslant m}i^{|\alpha|}a_\alpha \xi^\alpha,
  \]

- 4\) 算子$(1-\triangle)^s$表示的是函数$(1+|\xi|^2)^{s}$所对应的Fourier乘子。

:::

::: proposition [Sobolev空间的映射性质]
给定多项式增长的乘子函数$m(\xi)$，其中，我们假设存在常数$C$和$p$，
使得对任意的$\xi \in \mathbb{R}^n$，我们都有
\[
|m(\xi)| \leqslant C(1+|\xi|)^p.
\]
那么，对任意的$s\in \mathbb{R}$，对任意的$u\in H^s(\mathbb{R}^n)$，
$m(D)u \in H^{s-p}(\mathbb{R}^n)$。这就定义出有界（连续）线性映射：
\[
m(D): H^s(\mathbb{R}^n)\rightarrow H^{s-p}(\mathbb{R}^n).
\]
特别地，对任意的$d$-阶的微分算子$P$，对任意的$s\in \mathbb{R}$，我们有连续线性映射
\[
P: H^s(\mathbb{R}^n)\rightarrow H^{s-d}(\mathbb{R}^n), \ \ \forall s.
\]
另外，对任意的$s$，我们还有连续的线性同构：
\[
(1+\triangle)^\frac{p}{2}: H^s(\mathbb{R}^n)\rightarrow H^{s-p}(\mathbb{R}^n).
\]
其中，上述映射的逆映射是$(1+\triangle)^{-\frac{p}{2}}$。
:::

::: proof
对任意的$u\in H^s(\mathbb{R}^n)$，我们首先证明$m(D)u \in H^{s-p}(\mathbb{R}^n)$，
其中$m(\xi)$具有命题中所要求的多项式增长。根据 Plancherel公式，我们有
\[
\begin{aligned}
\|m(D)u\|_{H^{s-p}}^2&=\int_{\mathbb{R}^n}(1+|\xi|^2)^{s-p}|m(\xi)\widehat{u}(\xi)|^2d\xi\\
&\leqslant C \int_{\mathbb{R}^n}(1+|\xi|^2)^{s-p}(1+|\xi|)^{2p}|\widehat{u}(\xi)|^2d\xi\\
&\leqslant C' \int_{\mathbb{R}^n}(1+|\xi|^2)^{s}|\widehat{u}(\xi)|^2d\xi.
\end{aligned}
\]
所以，存在常数$C_1$，使得
\[
\|m(D)u\|_{H^{s-p}}\leqslant C_1 \|u\|_{H^{s}}.
\]
这表明$m(D)$是从$H^s(\mathbb{R}^n)$到$H^{s-p}(\mathbb{R}^n)$的连续线性映射。

微分算子的情形是一个特例。为了说明$m(D)=(1+\triangle)^\frac{p}{2}$有逆，我们用
\[
n(\xi)=(1+|\xi|)^{-\frac{p}{2}}
\]
作为乘子即可，这是因为
\[
\widehat{m(D)n(D)u}=(1+|\xi|)^{\frac{p}{2}}(1+|\xi|)^{-\frac{p}{2}}\widehat{u}(\xi)=u(\xi).
\]
命题得证。
:::

利用Sobolev空间之间的映射性质，我们可以证明如下的稠密性定理：

::: proposition
对每个指标$s\in \mathbb{R}$，
光滑有紧支集的函数$C_0^\infty(\mathbb{R}^n)$在$H^s(\mathbb{R}^n)$中是稠密的。
:::

::: proof
我们首先证明$\mathcal{S}(\mathbb{R}^n)\subset  H^s(\mathbb{R}^n)$是稠密的，其中$s\in \mathbb{R}$：
这个论断对$s=0$是正确的，
因为$C_0^\infty(\mathbb{R}^n)$在$H^0(\mathbb{R}^n)=L^2(\mathbb{R}^n)$中是稠密的。由于
\[
(1-\triangle)^{-\frac{s}{2}}:H^0(\mathbb{R}^n)\rightarrow H^s(\mathbb{R}^n)
\]
是连续可逆的线性映射（是同胚），所以$\mathcal{S}(\mathbb{R}^n)$在这个算子下的像也是稠密的，然而，
\[
(1-\triangle)^{-\frac{s}{2}}\left(\mathcal{S}(\mathbb{R}^n)\right)\subset \mathcal{S}(\mathbb{R}^n),
\]
所以，$\mathcal{S}(\mathbb{R}^n)\subset  H^s(\mathbb{R}^n)$是稠密的。

（注意到，在上面的论证中，$(1-\triangle)^{-\frac{s}{2}}$不一定把有紧支集的函数映射为有紧支集的函数，
所以，我们的推理是对$\mathcal{S}(\mathbb{R}^n)$进行的。）

为了证明命题，我们只要说明在$H^s(\mathbb{R}^n)$的意义下，
$\mathcal{S}(\mathbb{R}^n)$中的任意一个函数$f$都可以被$C_0^\infty(\mathbb{R}^n)$的函数逼近。
我们上次证明了存在常数$C$，使得对任意的$\psi\in \mathcal{S}(\mathbb{R}^n)$，我们有不等式
\[
\|\psi\|_{H^s}\leqslant CN_{s+n+1}(\psi).
\]
所以，对任意的$f\in H^s(\mathbb{R}^n)$，我们先选取$\psi \in \mathcal{S}(\mathbb{R}^n)$，使得
\[
\|f-\psi\|_{H^s}<\frac{\varepsilon}{2}.
\]
再利用$C_0^\infty(\mathbb{R}^n)\subset \mathcal{S}(\mathbb{R}^n)$的稠密性，
选取$\varphi \in C_0^\infty(\mathbb{R}^n)$，使得
\[
N_{s+n+1}(\psi-\varphi)<\frac{\varepsilon}{2C}.
\]
此时，我们有
\[
\|f-\varphi\|_{H^s}< \varepsilon.
\]
这就证明了命题。
:::

::: theorem [有紧支集分布的结构定理，$H^s$-版本]
对任意的有紧支集的分布$c\in \mathcal{E}'(\mathbb{R}^n)$，假设$p$是$c$的阶。
那么，对任意的$s<-p-\dfrac{n}{2}$，我们有
\[
c\in H^s(\mathbb{R}^n).
\]
特别地，
存在有限多个多重指标$\alpha_1,\cdots,\alpha_m$和有限多个有紧支集的平方可积函数
$f_{\alpha_1}(x), \cdots, f_{\alpha_m}(x)\in L^2(\mathbb{R}^n)$，使得
\[
c =\sum_{k\leqslant m}\partial^{\alpha_k} f_{\alpha_k}(x).
\]
:::

::: proof
我们之前证明过$\widehat{c}(\xi)$是具有多项式增长的，即存在常数$C>0$，使得
\[
|\widehat{c}(\xi)|\leqslant C(1+|\xi|)^p.
\]
据此，我们知道对任意的$\varepsilon>0$，
$(1+|\xi|^2)^{-\frac{p}{2}-\frac{n}{4}-\varepsilon}\widehat{c}(\xi)$是平方可积的，这是因为
\[
(1+|\xi|^2)^{-p-\frac{n}{2}-2\varepsilon}|\widehat{c}(\xi)|^2\leqslant C' (1+|\xi|)^{-n-4\varepsilon}.
\]
右边的函数是可积的。据此，对任意的$s<-p-\dfrac{n}{2}$，我们有$c\in H^s(\mathbb{R}^n)$。

类似地，我们知道
\[
g(\xi)=(1+|\xi|^2)^{-\left\lfloor {\frac{p}{2}} \right\rfloor-n-1}\widehat{c}(\xi)\in L^2(\mathbb{R}^n).
\]
令$N=\left\lfloor {\dfrac{p}{2}} \right\rfloor-n-1$，所以，
\[
(1-\triangle)^N f = c.
\]
其中$\widehat{f}=g$是平方可积的函数。
再选取$\chi$是在$c$的支集上恒为$1$的光滑的有紧支集的函数，所以，
\[
\chi\cdot (1-\triangle)^N f = c.
\]
类似于之前对有紧支集分布的结构定理的证明，将这个式子展开即可。
:::

我们下面证明著名的Sobolev嵌入定理（的一种形式）：

::: theorem [Sobolev 嵌入定理]
假设指标$s>\dfrac{n}{2}$，那么，每个$u\in H^s(\mathbb{R}^n)$都落在$L^\infty(\mathbb{R}^n)$中。
进一步，我们有连续的线性嵌入
\[
\iota: H^s(\mathbb{R}^n) \hookrightarrow L^\infty(\mathbb{R}^n), \ \ u \mapsto u,
\]
即存在$C_s$，使得对任意$u\in H^s(\mathbb{R}^n)$，我们都有
\[
\|u\|_{L^\infty} \leqslant C_s \|u\|_{H^s}.
\]
进一步，$u$是连续函数（可以在它的代表类中选到一个连续函数）并且在无穷远处的极限为零，
即$u\in C_{\circ}(\mathbb{R}^n)$。
:::

::: remark*
证明的想法比较简单：我们只要说明$\widehat{u}$是一个$L^1$函数即可，
因为Fourier逆变换就把它还原成一个在$\infty$处衰减的连续函数，从而是$L^\infty$的函数。
:::

::: proof
根据$u=\mathcal{F}^{-1}(\widehat{u})$，我们知道
\[
\|u\|_{L^\infty}\leqslant \frac{1}{(2\pi)^n}\|\widehat{u}\|_{L^1}.
\]
我们现在说明$\|\widehat{u}(\xi)\|_{L^1}$被$\|u\|_{H^s}$所控制。
根据$s>\frac{n}{2}$，我们可以把$\widehat{u}$写成两个平方可积的函数的乘积：
\[
\widehat{u}(\xi) = \underbrace{(1+|\xi|^2)^{\frac{s}{2}}\widehat{u}(\xi)}_{L^2}\cdot\underbrace{(1+|\xi|^2)^{-\frac{s}{2}}}_{L^2},
\]
前一部分根据$u\in H^s(\mathbb{R}^n)$所以是$L^2$的；后一部分根据$s>\frac{n}{2}$所以是$L^2$的。
利用Cauchy–Schwarz不等式，我们有
\[
\|\widehat{u}(\xi)\|_{L^1}\leqslant \|u\|_{H^s}\|(1+|\xi|^2)^{-\frac{s}{2}}\|_{L^2}=C\|u\|_{H^s}.
\]
所以，
\[
\|u\|_{L^\infty}\leqslant \frac{C}{(2\pi)^n}\|u\|_{H^s}.
\]
连续性的部分是明显的，因为
\[
\mathcal{F}^{-1}:L^1(\mathbb{R}^n_\xi)\longrightarrow C_{\circ}(\mathbb{R}^n_x).
\]
是连续映射。证明完毕。
:::

::: corollary
假设$s>\dfrac{n}{2}+k$，其中$k$为非负整数，那么，对任意的$u\in H^s(\mathbb{R}^n)$，
我们都有$u \in C^k(\mathbb{R}^n)$。
:::

::: proof
对任意的多重指标$\alpha$，如果$|\alpha|\leqslant k$，
那么$\partial^\alpha u \in H^{s-|\alpha|}(\mathbb{R}^n)$是连续函数，从而，
$u \in C^k(\mathbb{R}^n)$（用归纳法来证明会更严格一点）。
:::

::: remark*
这个版本的Sobolev嵌入定理说的是，如果指标$s$足够大，那么，函数$u$就会非常光滑。
:::

::: remark*
我们在作业中将构造函数局部可积的$u\in H^{\frac{n}{2}}(\mathbb{R}^n)$，
使得$u \notin L^\infty(\mathbb{R}^n)$。换句话说，如下的嵌入并不成立：
\[
H^{\frac{n}{2}}(\mathbb{R}^n) \not\hookrightarrow L^\infty(\mathbb{R}^n).
\]
这表明Sobolev嵌入的指标至少是$\dfrac{n}{2}+\varepsilon$，其中$\varepsilon>0$可以任意小。
:::

下一个定理说的是如果指标$s$足够大，那么，两个$H^s$的函数的乘积也是$H^s$的。
这个定理在证明非线性偏微分方程的解的局部存在性时很有用。

::: theorem
如果$s>\frac{n}{2}$，那么，$H^s(\mathbb{R}^n)$是一个代数，即对任意的$u,v \in H^s(\mathbb{R}^n)$，
我们有$u\cdot v \in H^s(\mathbb{R}^n)$：
\[
H^s(\mathbb{R}^n)\times H^s(\mathbb{R}^n) \stackrel{\times}{\longrightarrow}H^s(\mathbb{R}^n).
\]
实际上，存在常数$C_s$，使得对任意的$u,v \in H^s(\mathbb{R}^n)$，我们有
\[
\|u\cdot v\|_{H^s}\leqslant C_s \|u\|_{H^s}\|v\|_{H^s}.
\]
:::

::: proof
我们来计算$u\cdot v$的$H^s$-范数。由于在Fourier变换下，乘积变化为卷积，所以
按照定义，我们有
\[
\begin{aligned}
\|u\cdot v\|^2_{H^s}& = \int_{\mathbb{R}^n}(1+|\xi|^2)^{s}\left|\int_{\mathbb{R}^n}\widehat{u}(\xi-\eta)\widehat{v}(\eta)d\eta\right|^2 d\xi\\
&\leqslant \int_{\mathbb{R}^n}(1+|\xi|^2)^{s}\left(\int_{\mathbb{R}^n}|\widehat{u}(\xi-\eta)||\widehat{v}(\eta)|d\eta\right)^2 d\xi.
\end{aligned}
\]
我们要把因子$(1+|\xi|^2)^{s}$进行拆分。首先，对任意的$s>0$，$a,b\geqslant 0$，我们显然有
\[
(a+b)^s\leqslant 2^s(a^s+b^s).
\]
所以，对任意的$\xi,\eta \in \mathbb{R}^n$，我们有如下的不等式
\[
\begin{aligned}
(1+|\xi|^2)^{\frac{s}{2}} &\leqslant (1+2|\xi-\eta|^2+2|\eta|^2)^{\frac{s}{2}}\leqslant  2^{\frac{s}{2}}\left((1+|\xi-\eta|^2)+(1+|\eta|^2)\right)^{\frac{s}{2}}\\
&\leqslant 2^{2s}\left((1+|\xi-\eta|^2)^{\frac{s}{2}} +(1+|\eta|^2)^{\frac{s}{2}} \right).
\end{aligned}
\]
所以，我们就得到了
\[
\begin{aligned}
\|u\cdot v\|^2_{H^s}&\leqslant 2^{2s} \int_{\mathbb{R}^n}\left(\int_{\mathbb{R}^n} \big(1+|\xi-\eta|^2)^{\frac{s}{2}}|\widehat{u}(\xi-\eta)| |\widehat{v}(\eta)|+(1+|\eta|^2)^{\frac{s}{2}}|\widehat{v}(\eta)||\widehat{u}(\xi-\eta)|\big)d\eta\right)^2 d\xi\\
&\leqslant 2^{2s} \int_{\mathbb{R}^n}\left(\int_{\mathbb{R}^n}\underbrace{\big(1+|\xi-\eta|^2)^{\frac{s}{2}}|\widehat{u}(\xi-\eta)|}_{f(\xi-\eta)}\underbrace{|\widehat{v}(\eta)|}_{g(\eta)}\right)^2+\left(\int_{\mathbb{R}^n}(1+|\eta|^2)^{\frac{s}{2}}|\widehat{v}(\eta)||\widehat{u}(\xi-\eta)|\big)d\eta\right)^2 d\xi.
\end{aligned}
\]
上面的表达式中本质上是两项，它们的结构是类似的，我们只要处理一项就好。
我们现在利用第一项中的卷积结构来控制它。根据$H^s$的定义，我们有
\[
f(\xi)=\big(1+|\xi|^2)^{\frac{s}{2}}|\widehat{u}(\xi)|\in L^2(\mathbb{R}^n_\xi).
\]
根据$s>\dfrac{n}{2}$，
我们在Sobolev不等式的证明中已经证明了$g(\xi)=\widehat{v}\in L^1(\mathbb{R}^n)$。
特别地，存在常数$C_1$和$C_2$，使得
\[
\|f\|_{L^2}\leqslant C_1\|u\|_{H^s}, \ \ \|g\|_{L^2}\leqslant C_2\|v\|_{H^s}.
\]
我们观察到，上面就是控制$f*g$的$L^2$范数的大小。
我们回忆上学期（5月9日的课程，利用Fubini定理）已经证明了
\[
L^1(\mathbb{R}^n)\times L^2(\mathbb{R}^n)\stackrel{*}{\longrightarrow} L^2(\mathbb{R}^n).
\]
其中对任意的$\varphi\in L^1(\mathbb{R}^n)$，$\psi \in L^2(\mathbb{R}^n)$，我们有
\[
\|\varphi*\psi\|_{L^2}\leqslant \|\varphi\|_{L^1}\|\psi\|_{L^2}.
\]
我们对$\varphi=g$和$\psi=f$运用这个不等式，就得到
\[
\|f*g\|_{L^2}\leqslant \|g\|_{L^1}\|f\|_{L^2}\leqslant C_1C_2\|u\|_{H^s}\|v\|_{H^s}.
\]
所以，我们就有
\[
\begin{aligned}
\|u\cdot v\|^2_{H^s}&\leqslant  2^{2s}\left(C_1C_2\|u\|^2_{H^s}\|v\|^2_{H^s}+C_1C_2\|u\|^2_{H^s}\|v\|^2_{H^s}\right).
\end{aligned}
\]
这就给出了命题的证明。
:::

实际上，我们还可以证明更强的结论：对任意的$s>0$，
$H^s(\mathbb{R}^n)\cap L^\infty(\mathbb{R}^n)$是一个代数。我们之后将利用频率空间的二进分解进行证明。
