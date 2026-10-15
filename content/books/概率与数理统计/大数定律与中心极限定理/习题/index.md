---
title: 习题选编
---

::: exercise
设$U_1,U_2,\ldots$为一列独立同分布的随机变量，
均服从区间$[0,a]$上的均匀分布，其中$a$为一个正的常数。
令$Z_n=\max\{U_1,\ldots,U_n\}$。
证明$Z_n\xrightarrow{P}a$。
:::

::: exercise
设$X_1,X_2,\ldots$为一列服从标准柯西分布的独立同分布随机变量。令
\[
\overline{X}_n = \frac{1}{n}\sum_{i=1}^n X_i.
\]
证明：对任意正整数$n$，随机变量$\overline{X}_n$均服从标准柯西分布。
由此进一步证明$(X_n)_{n=1}^\infty$不服从弱大数定律。
:::

::: exercise {@exercise:convergence_sample_variance}
设$X_1,X_2,\ldots$为一列独立同分布的随机变量，
且$\operatorname{Var}(X_1)$存在。令
\[
\begin{aligned}
S^2_n ={} &
\frac{1}{n-1}\sum_{i=1}^n\left(
X_i-\frac{1}{n}\sum_{j=1}^n X_j
\right)^{\!2}, \\
\tilde{S}^2_n ={} & \frac{n-1}{n}S^2_n.
\end{aligned}
\]
利用Kolmogorov强大数定律，证明$n\rightarrow\infty$时有
$S^2_n\xrightarrow{a.s.}\operatorname{Var}(X_1)$
以及$\tilde{S}^2_n\xrightarrow{a.s.}\operatorname{Var}(X_1)$。

*提示：* 令$\mu=\mathbb{E}[X_1]$。先证明
\[
\tilde{S}_n^2 = \frac{1}{n}\sum_{i=1}^n \left(X_i-\mu\right)^2-\left(\overline{X}_n-\mu\right)^2,
\]
再用Kolmogorov强大数定律证明
$\frac{1}{n}\sum_{i=1}^n \left(X_i-\mu\right)^2\xrightarrow{a.s.}\operatorname{Var}(X_1)$
与$\left(\overline{X}_n-\mu\right)^2\xrightarrow{a.s.}0$。
:::

::: exercise [Cantelli不等式/单边Chebyshev不等式]
设随机变量$X$的方差$\operatorname{Var}(X)$存在，则对任意$t>0$，有
\[
\mathbb{P}(X-\mathbb{E}[X]\geq t)
\leq \frac{\operatorname{Var}(X)}{\operatorname{Var}(X)+t^2}.
\]
*提示：* 注意到$t,c$均为正实数时有
\[
\begin{aligned}
\mathbb{P}(X-\mathbb{E}[X]\geq t)
={} & \mathbb{P}(X-\mathbb{E}[X]+c\geq t+c) \\
\leq{} & \mathbb{P}\!\left((X-\mathbb{E}[X]+c)^2\geq (t+c)^2\right).
\end{aligned}
\]
用Markov不等式得到上式右端的一个上界，最后调整$c$的值使得
该上界被最小化。
:::

::: exercise {@exercise:convergence_in_P_lemmas}
1. 设$Z_1,Z_2,\ldots$为一列随机变量，且它们的$k$阶矩均存在
   （$k$为一个给定常数）。证明：若
   $\lim_{n\rightarrow\infty}\mathbb{E}\!\left[|Z_n|^k\right]=0$，
   则$Z_n\xrightarrow{P}0$。

2. 设$S_1,S_2,\ldots$为一列随机变量，且$\mathbb{E}[S_n]$
   以及$\operatorname{Var}(S_n)$对任意正整数$n$均存在。证明：
   若取值非零的数列$(b_n)_{n=1}^\infty$满足
   $\lim_{n\rightarrow\infty}\operatorname{Var}(S_n)/b_n^2=0$，则
   \[
   \frac{S_n-\mathbb{E}[S_n]}{b_n}\xrightarrow{P}0.
   \]

:::

::: exercise
考虑 @exercise:coupon_collector  的情景，
其中我们改用$T_N$表示集齐所有$N$种海报时已购买的唱片张数。
证明$N\rightarrow\infty$时
\[
\frac{T_N-N\sum_{m=1}^N m^{-1}}{N\ln N}\xrightarrow{P}{0},
\]
从而有$T_N/(N\ln N)\xrightarrow{P}1$。

*提示：* 令$b_N=N\ln N$，并证明
$\lim_{N\rightarrow\infty}\operatorname{Var}(T_N)/b_N^2=0$，
再利用 @exercise:convergence_in_P_lemmas  第2部分的结论。
:::

::: exercise [Chernoff界]
设$X$为一随机变量，且对任意$\lambda\in\mathbb{R}$，
期望$\mathbb{E}\!\left[\mathrm{e}^{\lambda X}\right]$均存在。令
\[
M_X(\lambda) = \mathbb{E}\!\left[\mathrm{e}^{\lambda X}\right],
\qquad \lambda \in\mathbb{R}.
\]

1. 任取$a\in\mathbb{R}$与$\lambda > 0$，利用Markov不等式证明
   \[
   \mathbb{P}\!\left(X\geq a\right)
   \leq \mathrm{e}^{-\lambda a}M_X(\lambda).
   \]

2. 令
   \[
   \phi_X(a) = \sup_{\lambda>0}
   (\lambda a - \ln M_X(\lambda)).
   \]
   证明
   \[
   \mathbb{P}\!\left(X\geq a\right)
   \leq \exp(-\phi_X(a)),
   \]
   并证明当$a>\mathbb{E}[X]$时，有$\exp(-\phi_X(a))<1$。
   *提示：* 利用琴生不等式。

3. 设$X_1,\ldots,X_n$相互独立且与$X$同分布。证明对任意$\epsilon>0$，有

   ```math {@eq:chernoff_bound_iid}
   \mathbb{P}\!\left(
   \frac{1}{n}\sum_{i=1}^n X_i-\mathbb{E}[X]\geq\epsilon
   \right)
   \leq
   \exp(-n\,\phi_X(\mathbb{E}[X]+\epsilon)).
   ```

4. 设$R_1,\ldots,R_n$独立同分布且服从参数为$p$的伯努利分布。
   给定任意$\epsilon>0$，分别用Chebyshev不等式与不等式 @eq:chernoff_bound_iid 求出
   \[
   \mathbb{P}\!\left(
   \left|\frac{1}{n}\sum_{i=1}^n R_i-p\right|\geq\epsilon\right)
   \]
   的相应上界，并比较两个上界在$n$充分大时的大小。

:::

::: exercise
设随机变量$X_1,X_2,\ldots$独立同分布，它们的值域为$\{1,2,\ldots,S\}$，其中$S$是一个大于$1$的正整数，
且对任意$s=1,\ldots,S$均有$\mathbb{P}(X_1=s)>0$。令
\[
p_0(s) = \mathbb{P}(X_1=s),\qquad\forall s=1,\ldots,S.
\]
再设函数$p_1:\{1,\ldots,S\}\rightarrow\left]0,1\right[$满足$\sum_{s=1}^S p_1(s)=1$，
且$p_1(s)$与$p_0(s)$不全相等。令
\[
Z_n = \prod_{i=1}^n \frac{p_1(X_i)}{p_0(X_i)},\qquad\forall n=1,2,\ldots
\]
证明$\mathbb{E}[Z_n]=1,\,\forall n=1,2,\ldots$，但$Z_n\xrightarrow{a.s.} 0$。

*提示：* 利用强大数定律证明$\frac{1}{n}\ln Z_n$几乎必然收敛于一个严格小于$0$的数。
:::

::: exercise
某个寝室的饮水机换上了容量为10升的桶装水。
假设寝室成员每次接水的量为独立同分布的随机变量，其期望为$0.3$升，标准差为$0.08$升。
试近似求解接水$36$次后该桶水仍未被喝完的概率。
:::

::: exercise
保险公司推出了一款针对A国家旅游的意外伤害保险。
已知在A国家旅游时发生意外伤害的概率为$0.2\%$，
投保人参保需要交$140$元保费，而旅游途中若发生意外伤害
则保险公司将赔付$5$万元。

1. 若该保险总共售卖了$3600$份，试近似求解该保险亏本的概率。

2. 试求出一正整数$n$，使得卖出的保险份数大于等于$n$时，
   该保险亏本的概率能降到约$5\%$以下。

:::

::: exercise
1. 设$X$服从参数为$\lambda=100$的泊松分布，
   试求$\mathbb{P}(X\geq 120)$的一个近似值。

2. 设$X$服从参数为$r=50,p=1/5$的负二项分布，也就是说
   \[
   \mathbb{P}(X=k) = \binom{k-1}{r-1}p^r(1-p)^{k-r},
   \qquad k=r,r+1,r+2,\ldots
   \]
   试求$\mathbb{P}(220\leq X\leq 280)$的一个近似值。

3. 设$X$服从参数为$\alpha=40,\beta=1/2$的Gamma分布，
   试求$\mathbb{P}(X\leq 70)$的一个近似值。

:::

::: exercise
（${}^\star$）
考虑 @exercise:coupon_collector  的情景，
其中我们改用$T_N$表示集齐所有$N$种海报时已购买的唱片张数，
并令$X_N=N^{-1}(T_N-N\ln N)$。

1. 试求$X_N$的矩母函数$M_{X_N}(t)=\mathbb{E}[\exp(tX_N)]$。

2. 固定$t$，试求极限
   \[
   \lim_{N\rightarrow\infty} M_{X_N}(t).
   \]
   *提示：* 你可以利用如下公式：
   \[
   \lim_{n\rightarrow\infty}\frac{n!n^z}{\prod_{k=0}^n(z+k)}=\Gamma(z),\quad\forall z\in\mathbb{C}\backslash\{0,-1,-2,\ldots\},
   \]
   其中$\Gamma(\cdot)$表示$\Gamma$函数。

3. 证明：对任意$x\in\mathbb{R}$，当$N\rightarrow\infty$时
   有$\mathbb{P}(X_N\leq x)\rightarrow \mathrm{e}^{-\mathrm{e}^{-x}}$。

   *提示：* 求出分布$F(x)=\mathrm{e}^{-\mathrm{e}^{-x}}$的概率密度函数与矩母函数，
   再利用 @lemma:convergence_in_distribution_MGF。

:::
