---
title: 作业：Dini 定理，多项式逼近与 Weierstraß–Stone 定理
---

## 基本习题

### 习题A：积分定义的补充与扩展

我们总假设 $I=[a,b]\subset \mathbb{R}$ 是一个有界闭区间，$V$ 是一个赋范线性空间。

A1) $\sigma_1,\sigma_2\in \mathcal{S}$ 是两个分划。
    证明，对任意的 $\varepsilon>0$，总存在分划 $\sigma$，使得 $\sigma\prec \sigma_1$，
    $\sigma\prec \sigma_2$ 并且它的步长 $|\sigma|<\varepsilon$。

A2) 考虑在 $V$ 中取值的阶梯／简单函数的空间 $\mathcal{E}(I)$，证明，
    这是 $\mathbb{R}$-线性空间并且积分算子
    $\displaystyle\int_{a}^b\colon \mathcal{E}(I)\rightarrow V$
    是良好定义的（不依赖于分划的选取）并且是线性映射，
    其中积分的定义方式与函数在 $\mathbb{R}$ 中取值时的方式一致。
    据此，用阶梯函数逼近的方式定义在 $V$ 中取值的Riemann可积的函数。
    你不需要写下细节但是你应该对照笔记研究原来证明的每一步。

A3) 假设 $f\colon I\rightarrow \mathbb{R}^n$，其中 $f_i$ 是 $f$ 的每个分量。
    那么 $f\in \mathcal{R}(I)$ 当且仅当对每个分量 $f_i$ 我们都有 $f_i\in \mathcal{R}(I)$。
    特别地，当 $f\colon \mathbb{R}\rightarrow \mathbb{C}$ 时，
    我们有 $\displaystyle \int_a^b f = \int_a^b \Re f+i\int_{a}^b \Im f$，
    其中 $\Re f$ 和 $\Im f$ 分别为 $f$ 的实部和虚部。

A4) 试证明积分的区间可加性：假设 $a<c<b$，那么对于任意的 $f\in \mathcal{R}(I)$，
    我们有 $f$ 在 $[a,c]$ 和 $[c,b]$ 上的限制都是Riemann可积函数，并且
    \[
    \int_{a}^b f =\int_{a}^c f+\int_c^b f.
    \]

A5) 证明，对于任意两个分划 $\sigma$ 和 $\sigma'$，它们所对应的Darboux上下和满足
    \[
    \underline{S}(f;\sigma)\leqslant \overline{S}(f;\sigma').
    \]
    据此证明，如果 $f\in \mathcal{R}(I)$，
    就有
    $\displaystyle\lim_{|\sigma|\rightarrow 0}|\underline{S}(f;\sigma)-\overline{S}(f;\sigma)|=0$，
    即对任意的 $\varepsilon>0$，一定存在 $\delta>0$，对任意的分划 $\sigma$，只要 $|\sigma|<\delta$，
    我们就有
    \[
    |\underline{S}(f;\sigma)-\overline{S}(f;\sigma)|<\varepsilon.
    \]

A6) $f\in \mathcal{R}(I)$。
    证明，改变 $f$ 在有限个点上的取值所得到的函数仍是Riemann可积的并且积分与 $f$ 的相同。

A7) $f\in C([a,b])$。
    假设对任意的 $x\in I$，我们都有 $f(x)\geqslant 0$ 并且存在点 $x_0 \in I$ 使得 $f(x_0) > 0$。
    证明，$\displaystyle\int_a^b f > 0$。

A8) （不定积分的分部积分公式：对计算不定积分有用）假设 $f,g\in C^1(I)$，那么，我们有
    \[
    \int f'\cdot g=f\cdot g-\int f\cdot g'.
    \]

A9) （不定积分的变量替换公式：
    对计算不定积分有用）假设 $\Phi\colon \mathbb{R}\rightarrow \mathbb{R}$ 可微，$f$ 是连续函数，
    那么
    \[
    \int (f\circ \Phi)\Phi'=\int f.
    \]

### 习题B：不定积分的计算

试计算下列不定积分
\[
\begin{aligned}
&(1) \int \frac{x^5}{1+x}   &\ &(2) \int \sqrt{x\sqrt{x\sqrt{x}}}   &\ &(3) \int \left(\frac{1+x}{1-x} + \frac{1-x}{1+x}\right)\\
&(4) \int \frac{e^{3x}+1}{1+e^x}  &\ & (5) \int \sqrt{1-\sin (2x)}  &\ &(6) \int \frac{\cos (2x)}{\cos x - \sin x} \\
&(7) \int \tan^2 x  &\ &(8) \int |x|  &\ &(9) \int e^{-|x|} \\
&(10) \int \frac{x^2}{(1-x)^{2018}} &\ &(11) \int |x-1|  &\ &(12) \int \frac{1}{\sqrt{b^2 + x^2}} \\
&(13) \int \frac{1}{\sqrt{x}(1+x)} &\ &(14) \int \frac{x^4}{(1-x^5)^4}  &\ &(15) \int \left(\frac{1}{\sqrt{3-x^2}} + \frac{1}{1-3x^2}\right) \\
&(16) \int \frac{2x-3}{x^2-3x+8}  &\ & (17) \int \frac{1}{\sin^2(2x+\frac{\pi}{4})} &\ &(18) \int \frac{1}{1+\cos x} \\
&(19) \int \frac{1}{x^2} \sin \frac{1}{x}  &\ &(20) \int \cos^5 x   &\ & (21) \int \cos (ax) \sin (bx) \\
&(22) \int \frac{1}{a\cos x + b\sin x} &\ &(23) \int \frac{\sin(2x)}{a^2 \cos^2x + b^2 \sin^2 x} & \ &(24) \int \frac{1}{2-\sin^2 x} \\
&(25) \int \frac{1}{x(\ln x) (\ln \ln x)} &\ &(26) \int \frac{\ln x}{x\sqrt{1+\ln x}} &\ &(27) \int \frac{\cos x + \sin x}{\sqrt[3]{\sin x - \cos x}}\\
&(28) \int e^{\sqrt{x}}  &\ & (29) \int \frac{x^{\frac n 2}}{1+x^{n+2}} &\ &(30) \int \frac{\sqrt{x}}{1-\sqrt[3]{x}} \\
&(31) \int \frac{1}{(x^2+a^2)^{\frac32}} &\ &(32) \int \frac{1}{\cos^4 x}  &\ & (33) \int (\arcsin x)^2 \\
&(34) \int x\arcsin x  &\ &(35) \int x \arctan x  &\ &(36) \int \frac{\arctan x}{x^2} \\
&(37) \int x^2\sin x  &\ &(38) \int \frac{x}{\cos^2 x}  &\ &(39) \int \ln(x+\sqrt{1+x^2})\\
&(40) \int \sin(\ln x)  &\ & (41) \int \sqrt{x^2+a^2}  &\ &(42) \int \frac{x^2}{\sqrt{x^2-a^2}}\\
&(43) \int \frac{x\ln(x+\sqrt{1+x^2})}{\sqrt{1+x^2}} &\ &(44) \int \frac{1}{\sqrt{x^2+a^2}} &\ & (45) \int \frac{xe^x}{(1+x)^2}\\
&(46) \int \arctan(1+\sqrt{x}) &\ &(47) \int \left(1-\frac{2}{x}\right)^2 e^x  &\ &(48) \int \sqrt{2+\tan^2 x} \\
&(49) \int \frac{1}{1+x^3} &\ &(50) \int \frac{x^7}{x^4+2}  &\ &(51) \int \frac{2x^2+1}{(x+3)(x-1)(x-4)}\\
 &(52) \int \frac{1+x^2}{1+x^4}  &\ & (53) \int \frac{x}{\sqrt{x+1} + \sqrt[3]{x+1}}  &\ &(54) \int \frac{1}{\sqrt{x+x^2}}\\
 &(55) \int \frac{1-r^2}{1-2r\cos x + r^2} , r\in(0,1)  &\ & (56) \int \frac{1}{x\sqrt{1+x^2}}  &\ & (57) \int \frac{1}{5-3\cos x} \\
 &(58) \int \frac{1}{2+\sin^2 x} &\ &(59) \int \frac{\sin^3 x}{\cos^4 x}  &\ &(60) \int \frac{1}{\sin x \cos^4 x}.
\end{aligned}
\]

## 思考题W（重要结论，不交作业，鼓励讨论！）：多项式逼近和Weierstraß–Stone定理

我们要证明如下著名的定理：任意给定有界闭区间 $I=[a,b]$ 上的连续函数，
我们总是可以用一个多项式来足够好地逼近它。
更精确地说，给定 $f\in C([a,b])$，对任意的 $\varepsilon>0$，存在多项式 $P_\varepsilon$，
使得 $\displaystyle \sup_{x\in [a,b]}|f(x)-P_\varepsilon(x)|<\varepsilon$，
即若用 $P([a,b])$ 表示 $[a,b]$ 上多项式函数组成的空间，
则 $P([a,b])$ 在度量空间 $C([a,b])$ 中稠密（$C([a,b])$ 上用的范数是
$\|f\|_\infty=\displaystyle \sup_{x\in [a,b]}|f(x)|$）。

### 第一部分：Dini定理及应用

W1) （Dini定理）假设 $K\subset \mathbb{R}^n$ 是紧子集，
    $f_n\colon K\rightarrow \mathbb{R}$ 是一列*连续*函数，
    它们逐点地收敛到*连续*函数 $f\colon K\rightarrow \mathbb{R}$，即对每个 $x\in K$，
    我们都有 $\displaystyle \lim_{n\rightarrow \infty}f_n(x)=f(x)$。
    证明，如果 $\{f_n\}_{n\geqslant 1}$ 是上升的函数列（即对任意 $x\in K$ 和 $n$，
    我们都有 $f_n(x)\leqslant f_{n+1}(x)$），那么 $f_n$ 一致收敛到 $f$。（参考荆公子的某次习题课）

W2) 考虑区间 $I=[-1,1]$。我们通过归纳的方式定义一族多项式函数：
    \[
    P_0(x)=0, \ \ P_{n+1}(x)=P_n(x)+\frac{1}{2}(x^2-P_n^2(x)).
    \]
    证明，对任意的 $n$ 和 $x$，我们都有 $0\leqslant P_n(x)\leqslant P_{n+1}(x)\leqslant |x|$。

W3) 证明，绝对值函数 $|x|$ 在 $I=[-1,1]$ 上可以被多项式一致地逼近，即对任意的 $\varepsilon>0$，
    存在某个多项式函数 $P_\varepsilon(x)$，
    使得 $\displaystyle \sup_{x\in [-1,1]}\big||x|-P_\varepsilon(x)\big|<\varepsilon$。

### 第二部分：区间上的情形

这一部分中，我们假设 $I=[0,1]$，$n$ 是正整数。

W4) 对任意的 $0\leqslant k\leqslant n$，
    我们定义 $p_{n,k}(x)=\displaystyle{n \choose k}x^k(1-x)^{n-k}$。
    证明，
    $\displaystyle \sum_{0\leqslant k \leqslant n}p_{n,k}(x)(x-\frac{k}{n})^2=\frac{x(1-x)}{n}$。

W5) 任意给定 $f\in C([0,1])$，
    我们定义
    $B_{f,n}(x)= \displaystyle\sum_{0\leqslant k \leqslant n}f\bigl(\frac{k}{n}\bigr){n \choose k}x^k(1-x)^{n-k}$。
    对 $x\in [0,1]$，证明，
    \[
    |f(x)-B_{f,n}(x)|\leqslant \sum_{k=0}^n \bigl|f(x)-f\bigl(\frac{k}{n}\bigr)\bigr|p_{n,k}(x).
    \]

W6) （用Bernstein多项式逼近连续函数）任意给定 $f\in C([0,1])$，证明，对任意 $\varepsilon>0$，
    总存在 $n$，使得 $\|f-B_{f,n}\|_\infty <\varepsilon$。

::: remark*
用概率论的观点，$x\in [0,1]$ 给定，
Bernstein多项式逼近的方法讲的是概率测度
$\mu_x=\displaystyle\sum_{k=0}^n {n \choose k}x^k(1-x)^{n-k}\delta_{\frac{k}{n}}$ 的极限是Dirac测度
$\delta_x$。
:::

### 第三部分：紧集上的情形

从此往后，我们假设 $K\subset \mathbb{R}^n$ 是紧集，
$C(K)$ 是 $K$ 上的实数值连续函数所构成的线性空间，
用 $P(K)$ 表示 $K$ 上多项式函数组成的空间（即形如
$\displaystyle \sum_{|\alpha|\leqslant m} c_\alpha x^\alpha$ 的函数，其中 $m$ 是正整数，
$\alpha$ 是多重指标，请参见关于多重偏导数的课堂笔记）。

W7) 假设 $\mathcal{A}\subset C(K)$ 是非零的线性子空间。
    如果对任意的 $f,g\in \mathcal{A}$，它们的乘积 $f\cdot g \in \mathcal{A}$，
    我们就把 $\mathcal{A}$ 称作是 $C(K)$ 的一个**子代数**。证明，$P(K)$ 是 $C(K)$ 的子代数。

W8) 非零的线性子空间 $\mathcal{A}\subset C(K)$ 是**闭子代数**，
    也就是说如果 $\{f_k\}_{k \geqslant 1}\subset \mathcal{A}$，$f_k$ 一致收敛到 $f$，
    那么 $f\in \mathcal{A}$。
    假设常值函数 $1\in \mathcal{A}$，证明，如果 $f\in \mathcal{A}$，那么 $|f|\in \mathcal{A}$。
    （提示：利用 W3)）

W9) 假设 $\mathcal{A}\subset C(K)$ 是子集，如果对任意的 $x,x'\in K$，$x\neq x'$，
    都存在 $f\in \mathcal{A}$，使得 $f(x)\neq f(x')$，我们就称 $\mathcal{A}$ 是**能够区分点的**。
    证明，$P(K)$ 是能够区分点的。

W10) 假设 $f,g\in C(K)$。
     证明，函数 $f\wedge g (x)=\min\{f(x),g(x)\}$ 和 $f\vee g (x)=\max\{f(x),g(x)\}$ 都是连续的。

W11) 假设 $\mathcal{A}\subset C(K)$ 是子集，如果对任意的 $f,g\in \mathcal{A}$，
     $f\wedge g, f\vee g \in \mathcal{A}$，我们就称 $\mathcal{A}$ 是 **$\wedge\vee$-封闭的**。
     证明，$\overline{P(K)}$ 是 $\wedge\vee$-封闭的，
     其中
     $\overline{P(K)}=\bigl\{f\in C(K)\bigm|\text{存在 }\{f_k\}_{k\geqslant1}\subset P(K), f_k\text{ 一致收敛到 }f\bigr\}$
     为 $P(K)$ 在 $C(K)$ 中的闭包。

W12) 我们现在假设 $\mathcal{A}\subset C(K)$ 是 $\wedge\vee$-封闭的，
     并且对任意的 $\alpha,\beta \in \mathbb{R}$，任意的 $x,y \in K$，
     $x\neq y$（我们此时假设 $K$ 至少含有两个点）都存在函数 $\varphi\in \mathcal{A}$，
     使得 $\varphi(x)=\alpha$，$\varphi(y)=\beta$。

     我们通过下面的步骤来证明 $\mathcal{A}\subset C(K)$ 是稠密的（即对任意给定的连续函数
     $f\in C(K)$，
     对任意的 $\varepsilon>0$，总存在 $\varphi \in \mathcal{A}$，
     使得 $\|\varphi-f\|_{\infty}<\varepsilon$）：

     - 固定 $x_0\in K$，对任意的 $y\in K$，我们选取 $\varphi_y\in \mathcal{A}$，
       使得 $\varphi_y(x_0)=f(x_0)$ 并且 $\varphi_y(y)=f(y)$，
       这样我们得到一族 $\{\varphi_y\in \mathcal{A}\mid y\in K\}$，据此，对每个 $y\in K$，
       可以定义 $U_y=\{z\in K\mid  \varphi_y(z)>f(z)-\varepsilon\}$。
       证明，存在有限个 $y_1,\cdots,y_m\in K$，使得 $K\subset U_{y_1}\cup \cdots \cup U_{y_m}$。

     - 证明，
       $\varphi_{x_0}(x)=\displaystyle\sup\{\varphi_{y_1}(x),\cdots, \varphi_{y_m}(x)\}\in \mathcal{A}$
       并且对任意的 $x\in K$，我们都有 $\varphi_{x_0}(x)-f(x)>-\varepsilon$。

     - 证明，存在 $\varphi \in \mathcal{A}$，使得对任意的 $x\in K$，
       都有 $|\varphi(x)-f(x)|<\varepsilon$。

W13) 证明，如果子代数 $\mathcal{A}\subset C(K)$ 是能够区分点的，
     $\wedge\vee$-封闭的并且包含所有的常数值函数，那么 $\mathcal{A}\subset C(K)$ 是稠密的。

W14) （Weierstraß–Stone定理）如果 $\mathcal{A}\subset C(K)$ 是一个能区分点的子代数并且包含常值函数
     $1$，那么 $\mathcal{A}\subset C(K)$ 是稠密的。

::: remark*
我们还有一种复值函数的Weierstraß–Stone定理，在很多的场合有着重要的应用，有兴趣的同学可以自己查阅。
:::

W15) 多项式函数 $P(K)$ 在连续函数空间 $C(K)$ 中是稠密的。

W16) 给定以 $2\pi$ 为周期的连续函数 $f\in C(\mathbb{R})$。
     证明，任给 $\varepsilon>0$，总存在一个有限的三角级数
     \[
     T(x)=\sum_{-N\leqslant k \leqslant N} a_k \cos(kx)+\sum_{-N\leqslant k \leqslant N} b_k \sin(kx),
     \]
     其中 $N$ 是正整数，$a_k,b_k$ 是实数，使得对任意的 $x\in \mathbb{R}$，
     我们都有 $|f(x)-T(x)|<\varepsilon$。（提示：考虑 $C([0,2\pi])$ 和它的某个子代数）
