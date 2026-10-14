---
title: 期末考试：两个积分的计算，整系数多项式的逼近
---

考试时间为 4 小时。
大题之间是相互独立的，
考试中后面的问题可以使用前面问题的结论（无论答题人是否已经得到正确的证明或者答案）。

## 基础题

### 题目A（微分与积分的基本概念考察，共60分）

A1) （5分）试求出函数 $f(x)=x^3-12x+1$ 在区间 $[0,1]$ 上的最大值并说明理由。

A2) （5分）证明，如果 $f(x)=x^3+ax^2+bx+c$ 是 $\mathbb{R}$ 上定义的3次多项式函数，那么，
    $f(x)$ 一定不是 $\mathbb{R}$ 上的凸函数。

A3) （5分）在 $x=0$ 处写下函数 $f(x)=\sqrt{1+x}$ 的Peano余项的3阶Taylor展开，
    即余项要求是 $o(x^3)$。

A4) （5分）定义区间 $[-1,1]$ 上函数
    \[
    f(x)=\begin{cases}
    x\sin\left(\frac{1}{x}\right), \ \ &x \in[-1,0)\cup (0,1];\\
    0,\ \ &x=0.
    \end{cases}
    \]
    证明，$f\in C([-1,1])$ 但是 $f$ 不可微。

A5) （5分）计算定积分
    \[
    \int_0^1 \frac{x^2+4}{x^2+3x+2}dx.
    \]

A6) （5分）计算定积分
    \[
    \int_0^1 x^2e^{x}dx.
    \]

A7) （5分）计算定积分
    \[
    \int_0^\pi \sin^3(x)+\sin(2x)dx.
    \]

A8) （5分）计算定积分：
    \[
    \int_{-\pi}^{\pi} \sin(x^3+2x)dx.
    \]

A9) （5分）计算下面的极限：
    \[
    \lim_{n\rightarrow \infty} \sum_{k=1}^n\frac{k^{2019}}{n^{2020}}.
    \]

A10) （5分）判断下面的反常积分是否收敛并说明理由（对数函数是以 $e$ 为底的）：
     \[
     \int_{0}^1 \frac{\log x}{x^{\frac{1}{2}}}dx.
     \]

A11) （5分）利用面积方法证明：对任意的自然数 $n\geqslant 1$，我们有
     \[
     \frac{1}{1}+\frac{1}{2}+\frac{1}{3}+\cdots+\frac{1}{n}\geqslant \log(n).
     \]

A12) （5分）证明，如下的反常积分收敛：
     \[
     \int_{2}^\infty \frac{\sin x}{\log x}dx.
     \]

### 题目B（Gauss的一个椭圆积分的计算，共21分）

B1) （2分）假设 $a>0$，$b>0$。证明，如下定义的反常积分是收敛的：
    \[
    I(a,b)=\int_{0}^\infty \frac{1}{\sqrt{x^2+a^2}\sqrt{x^2+b^2}}dx.
    \]

B2) （2分）证明，$I(a,b)$ 可以用下面的定积分来表达：
    \[
    \int_0^{\frac{\pi}{2}} \frac{1}{\sqrt{a^2 \cos^2\theta+b^2 \sin^2\theta}}d\theta .
    \]
    （提示：利用变量换元 $x=b\tan\theta$）

B3) （2分）证明，$I(a,b)$ 所定义的映射
    \[
    I\colon (0,+\infty)\times (0,+\infty)\rightarrow \mathbb{R},  \ \ (a,b)\mapsto I(a,b)
    \]
    是连续函数。

B4) （2分）证明，对任意的 $\lambda>0$，我们有
    \[
    I(a,b)=\int_{0}^\infty \frac{\lambda}{ab}\frac{1}{\sqrt{x^2+\bigl(\frac{\lambda}{a}\bigr)^2}\sqrt{x^2+\bigl(\frac{\lambda}{b}\bigr)^2}}dx.
    \]
    （提示：利用变量换元 $y=\dfrac{\lambda}{x}$）

B5) （2分）证明，$I(a,b)$ 可以被表达为
    \[
    I(a,b)=2\int_{\sqrt{ab}}^\infty  \frac{1}{\sqrt{x^2+a^2}\sqrt{x^2+b^2}}dx.
    \]
    （提示：变量替换 $y=\dfrac{ab}{x}$ 将 $(0,\sqrt{ab})$ 变为 $(\sqrt{ab},\infty)$）

B6) （2分）证明，映射
    \[
    \varphi\colon (\sqrt{ab},+\infty)\rightarrow (0,+\infty), \ \ x\mapsto \varphi(x)= \frac{1}{2}\left(x-\frac{ab}{x}\right)
    \]
    是连续可微的双射。

B7) （3分）利用变量替换 $y= \dfrac{1}{2}\left(x-\dfrac{ab}{x}\right)$ 证明，
    \[
    I(a,b)=\int_{0}^\infty \frac{1}{\sqrt{y^2+\left(\frac{a+b}{2}\right)^2}\sqrt{y^2+\left(\sqrt{ab}\right)^2}}dy.
    \]
    从而，Gauss关于上述椭圆积分的平均值公式成立：
    \[
    I(a,b)=I(\frac{a+b}{2},\sqrt{ab}).
    \]

B8) （2分）我们归纳地定义数列：$a_1=a$，$b_1=b$；对于 $n\geqslant 1$，
    我们定义 $a_{n+1}=\dfrac{a_n+b_n}{2}$，$b_{n+1}=\sqrt{a_nb_n}$。
    证明，
    $\displaystyle \lim_{n\rightarrow \infty}a_n$ 和 $\displaystyle \lim_{n\rightarrow \infty}b_n$
    存在。

B9) （2分）证明，
    $\displaystyle \lim_{n\rightarrow \infty}a_n=\displaystyle \lim_{n\rightarrow \infty}b_n$。
    我们用 $M(a,b)$ 表示这个值并称之为 $a$ 和 $b$
    的**算术几何均衡值**（arithmetic-geometric mean）。

B10) （2分）证明，对于 $a>0$ 和 $b>0$，
     它们的算术几何均衡值 $M(a,b)$ 与椭圆积分 $I(a,b)$ 可以相互表达：
     \[
     2M(a,b)I(a,b)=\pi.
     \]

### 题目C（$\displaystyle\int_{0}^\infty \dfrac{1}{1+x^\alpha}dx$ 的计算，其中 $\alpha>1$，共24分）

假设 $\alpha>1$，$\beta \in (0,1)$，$\alpha\beta=1$。

C1) （2分）证明，如下的反常积分
    \[
    I(\alpha)=\int_{0}^\infty \dfrac{1}{1+x^\alpha}dx
    \]
    是收敛的。

C2) （2分）证明，如下的两个反常积分
    \[
    J_1(\beta)=\int_{0}^1\dfrac{x^{\beta-1}}{1+x}dx, \ \ J_2(\beta)=\int_{0}^1 \dfrac{x^{-\beta}}{1+x}dx
    \]
    是收敛的。

C3) （2分）证明，
    \[
    \int_0^1\frac{1}{1+x^\alpha}dx=\beta J_1(\beta).
    \]
    （提示：对任意的 $\varepsilon>0$，
    先证明
    $\displaystyle \int_\varepsilon^1\frac{1}{1+x^\alpha}dx=\beta \int_{\varepsilon^\alpha}^1 \dfrac{x^{\beta-1}}{1+x}dx$）

C4) （2分）证明，
    \[
    \int_1^\infty \frac{1}{1+x^\alpha}dx=\beta J_2(\beta).
    \]

C5) （2分）对于整数 $n\geqslant 1$，定义
    \[
    h_n(x)=\sum_{k=0}^n (-1)^kx^k.
    \]
    证明，对任意的 $x\in [0,1]$，我们都有
    \[
    \Big|h_n(x)-\frac{1}{1+x}\Big|\leqslant x^n.
    \]
    （提示：可以考虑函数 $\dfrac{1}{1+x}$ 在 $0$ 处的Taylor展开）

C6) （2分）令
    \[
    J_{1,n}(\beta)=\int_{0}^1 x^{\beta-1}h_n(x)dx, \ \ J_{2,n}(\beta)=\int_{0}^1 x^{-\beta}h_n(x)dx
    \]
    证明，
    \[
    \displaystyle \lim_{n\rightarrow \infty} J_{1,n}(\beta)=J_1(\beta), \ \   \lim_{n\rightarrow \infty} J_{2,n}(\beta)=J_2(\beta).
    \]

C7) （2分）我们如下定义 $[0,\pi]$ 区间上的函数 $g$：
    \[
    g(x)=\begin{cases}\frac{\cos\left(\frac{x}{\alpha}\right)-1}{\sin\left(\frac{x}{2}\right)}, \ \ & x\in (0,\pi]\\
    0,\ \ &x=0.
    \end{cases}
    \]
    证明，$g\in C^1([0,\pi])$。

C8) （3分）对任意的整数 $n\geqslant 1$，定义积分
    \[
    a_n=\int_0^\pi g(x)\sin\left((2n+1)\frac{x}{2}\right)dx.
    \]
    证明，存在常数 $C$，使得对任意的 $n$，我们都有
    \[
    |a_n|\leqslant \frac{C}{2n+1}.
    \]

C9) （2分）对任意的整数 $n\geqslant 1$，令
    \[
    \varphi_n(x)=\cos(x)+\cos(2x)+\cos(3x)+\cdots+\cos(nx).
    \]
    定义积分
    \[
    A_n=\int_0^\pi \varphi_n(x)\cos\left(\frac{x}{\alpha}\right)dx.
    \]
    证明，
    \[
    A_n=\frac{\alpha}{2}\sin\left(\frac{\pi}{\alpha}\right)\sum_{k=1}^n (-1)^k \left(\frac{1}{1+\alpha k}+\frac{1}{1-\alpha k}\right).
    \]

C10) （3分）证明
     \[
     \varphi_n(x)=-\frac{1}{2}+\frac{1}{2}\frac{\sin\left((2n+1)\frac{x}{2}\right)}{\sin\left(\frac{x}{2}\right)}.
     \]
     据此，
     通过计算 $\displaystyle A_n=\int_0^\pi \varphi_n(x)\cos\left(\frac{x}{\alpha}\right)dx$
     来证明，
     $\displaystyle \lim_{n\rightarrow \infty} A_n=-\frac{\alpha}{2}\sin\left(\frac{\pi}{\alpha}\right)+\frac{\pi}{2}$。

C11) （2分）证明，$I(\alpha)=\displaystyle\frac{\pi}{\alpha\sin\left(\frac{\pi}{\alpha}\right)}$。

## 附加题

### 附加题1：题目D（Stone–Weierstrass定理，共10分）

经典的Stone–Weierstrass定理讲的是任意给定 $f\in C([0,1])$，
总能找到一个实系数多项式的序列 $\{P_n\}_{n\geqslant 1}\subset \mathbb{R}[X]$，
使得 $P_n$ 一致收敛到 $f$。下面的问题是对这个定理的进一步讨论。

此问题中，$\{D1),D2),D3)\}$，$\{ D4)\}$ 和 $\{ D5), D6), D7)\}$ 是三个相互独立的部分。

D1) （2分）假设 $f\in C^1([0,1])$ 并且 $f$ 是单调递增的，
    那么存在实系数多项式的序列 $\{P_n\}_{n\geqslant 1}\subset \mathbb{R}[X]$，使得

    - 对任意的 $n$，$P_n$ 在 $[0,1]$ 上单调递增。

    - $P_n$ 一致收敛到 $f$。

D2) （1分）假设 $f\in C([0,1])$ 并且 $f$ 是单调递增的。
    我们将 $f(x)$ 延拓到 $[0,2]$ 上使得对任意的 $x\in (1,2]$，$f(x)=f(1)$。
    定义函数 $f_n\colon [0,1]\rightarrow \mathbb{R}$，使得
    \[
    f_n(x)=n\int_x^{x+\frac{1}{n}}f(y)dy.
    \]
    证明，函数序列 $\{f_n\}_{n\geqslant 1}$ 满足

    - 对任意的 $n$，$f_n\in C^1([0,1])$；

    - 对任意的 $n$，$f_n$ 在 $[0,1]$ 上单调递增；

    - $f_n$ 一致收敛到 $f$。

D3) （1分）假设 $f\in C([0,1])$ 并且 $f$ 是单调递增的，
    那么存在实系数多项式的序列 $\{P_n\}_{n\geqslant 1}\subset \mathbb{R}[X]$，使得

    - 对任意的 $n$，$P_n$ 在 $[0,1]$ 上单调递增。

    - $P_n$ 一致收敛到 $f$。

D4) （2分）（Walsh）假设 $f\in C([0,1])$，$x_1,x_2,\cdots,x_m$ 是 $[0,1]$ 区间上给定的 $m$ 个点，
    那么存在实系数多项式的序列 $\{P_n\}_{n\geqslant 1}\subset \mathbb{R}[X]$，使得

    - 对任意的 $n\geqslant 1$ 和任意的 $1\leqslant i \leqslant m$，$P_n(x_i)=f(x_i)$；

    - $P_n$ 一致收敛到 $f$。

D5) （1分）假设 $I=[a,b]\subset (0,1)$，多项式 $p(x)=2x(1-x)$，
    令 $Q_n=p\circ p  \circ \cdots \circ p$ 为 $p$ 与自身的 $n$-次复合，即
    \[
    Q_n(x)=\underbrace{p\Bigl(p\bigl(\cdots\bigl(p}_{\text{$n$ 个 $p$}}(x)\bigr)\cdots\Bigr),
    \]
    证明，$\{Q_n\}_{n\geqslant 1}$ 在 $I$ 上一致收敛到常数值函数 $\dfrac{1}{2}$。

D6) （1分）假设 $I=[a,b]\subset (0,1)$，对任意的整数 $k\in \mathbb{Z}$，证明，
    存在整系数多项式的序列 $\{P_n\}_{n\geqslant 1}\subset \mathbb{Z}[X]$，
    使得 $\{P_n\}_{n\geqslant 1}$ 在 $I$ 上一致收敛到常数值函数 $2^k$。

D7) （2分）（Chudnovsky）假设 $f\in C(I)$，其中 $I=[a,b]\subset (0,1)$。
    证明，存在整系数多项式的序列 $\{P_n\}_{n\geqslant 1}\subset \mathbb{Z}[X]$，
    使得 $\{P_n\}_{n\geqslant 1}$ 在 $I$ 上一致收敛到 $f$。

::: remark*
关于用整系数多项式来逼近连续函数的结果，
同学们可以去参考Hervé Pépin 和 Nicolas Tosel 文章：*Approximation par des polynômes à coefficients dans
$\mathbb{Z}$*，RMS, 114 ème année, 2003–2004。
:::

### 附加题2：题目E（一个函数方程的求解，5分）

试找出所有的实值的 $f\in C(\mathbb{R})$，使得对任意的 $x,y \in \mathbb{R}$，我们都有
\[
f(x)f(y)=\int_{x-y}^{x+y}f(t)dt.
\]

### 附加题3：题目F（方程解的个数，5分）

任意给定两两不相等的实数 $\alpha_1,\alpha_2,\cdots,\alpha_{2020}$，
任意给定不全为 $0$ 的实数 $a_1,a_2,\cdots,a_{2020}$，考虑在 $(0,+\infty)$ 上定义的函数
\[
f(x)=a_1x^{\alpha_1}+a_2x^{\alpha_2}+\cdots+a_{2020}x^{\alpha_{2020}}.
\]
证明，$f(x)$ 在 $(0,+\infty)$ 上至多有 $2019$ 个根。
