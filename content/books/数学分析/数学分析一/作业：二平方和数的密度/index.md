---
title: 作业：二平方和数的密度
---

## 基本习题

### 习题A（Riemann积分的概念）

A1) （积分第一中值定理的一个变体）$f$ 是有界闭区间 $[a,b]$ 上的连续函数，
    $g\in \mathcal{R}([a,b])$ 是Riemann可积的并且对任意的 $x\in [a,b]$，$g(x)> 0$。
    证明，存在 $\xi\in (a,b)$，使得
    \[
    \displaystyle \int_a^b fg= f(\xi)\int_{a}^b g.
    \]

A2) （单调函数是Riemann可积的）不用Lebesgue定理证明：
    $f$ 是 $[a,b]$ 上的单调增函数，那么 $f\in \mathcal{R}(I)$。（提示：利用Darboux上下和）

A3) 证明，函数 $1_{\mathbb{Q}}(x) =
    \begin{cases}
    1, & x \in \mathbb{Q}\\
    0, & x \in \mathbb{R} \setminus \mathbb{Q}
    \end{cases}$ 在 $[0,1]$ 上不是 Riemann 可积的。

A4) 证明：如果 $f \in \mathcal{R}([a,b])$，
    那么 $|f|^p \in \mathcal{R}([a,b])$，其中 $p \geqslant 0$ 是实数。

A5) 我们证明过Hölder不等式：对 $x_i,y_i\geqslant 0,p,q>1,  \dfrac{1}{p} + \dfrac{1}{q} = 1$，有
    \[
    \displaystyle\sum_{i=1}^{n} x_i y_i \leqslant
    \bigg(\sum_{i=1}^{n}x_i^p\bigg)^{1/p}\bigg(\sum_{i=1}^{n}y_i^q\bigg)^{1/q}.
    \]
    试证明积分形式的Hölder不等式并给出等号成立的条件：
    $f, g \in \mathcal{R}([a,b])$，$p,q > 1,  \dfrac{1}{p} + \dfrac{1}{q} = 1$，那么
    \[
    \left|\int_a^b f g  \right| \leqslant
    \left(\int_a^b |f|^p \right)^{1/p} \left(\int_a^b |g|^q \right)^{1/q}.
    \]

A6) 证明积分形式的Minkowski不等式并给出等号成立的条件：
    如果 $f, g \in \mathcal{R}([a,b])$，$p \geq 1$，那么
    \[
    \left(\int_a^b |f+g|^p \right)^{1/p} \leqslant
    \left(\int_a^b |f|^p \right)^{1/p} + \left(\int_a^b |g|^p \right)^{1/p}.
    \]

### 习题B（凸函数与积分）

B1) 假设 $f\in \mathcal R([a,b])$ 并且 $f$ 为凸函数。证明，
    \[
    \displaystyle f\left(\frac{a+b}{2}\right) \leqslant \frac{1}{b-a} \int_a^b f(x) dx \leqslant \frac{f(a)+f(b)}{2}.
    \]

B2) 假设函数 $f$ 在 $[a,b]$ 上二阶可导并且对任意 $x$，
    $f''(x) > 0$，$f(x) \leqslant 0$。证明，对任意 $x$，我们有
    \[
    \displaystyle  f(x) \geqslant \frac{2}{b-a} \int_a^b f(y)dy.
    \]

B3) 假设 $f$ 在 $\mathbb{R}$ 上二阶可导且 $f''(x) \geqslant 0$，
    $\varphi\in C([a,b])$。证明，我们有
    \[
    \displaystyle \frac{1}{b-a} \int_a^b \bigl(f\circ \varphi\bigr)(t) dt \geqslant f\left(\frac{1}{b-a} \int_a^b \varphi(t) dt\right).
    \]

B4) 假设 $f\in C([a,b])$ 并且对任意 $x$，$f(x) > 0$。证明，
    \[
    \displaystyle  \log \left(\frac{1}{b-a}\int_a^b f(x) dx\right) \geqslant \frac{1}{b-a} \int_a^b \log (f(x)) dx.
    \]

B5) 证明积分形式的Jensen不等式并给出等号成立的条件：
    如果 $f$ 是 $\mathbb{R}$ 上的凸函数，$\varphi \in C([0,1])$，那么
    \[
    f\left(\int_0^1 \varphi \right) \leqslant \int_0^1 f \circ \varphi.
    \]

### 习题C（积分和导数）

C1) 假设 $f\in C^1([0,2])$，$|f'| \leqslant 1$，$f(0) = f(2) = 1$。
    证明，$\displaystyle 1 \leqslant \int_0^2 f(x) dx \leqslant 3$。

C2) 假设 $f\in C^2([0,1])$。证明，存在 $\xi \in [0,1]$，
    使得 $\displaystyle \int_0^1 f(x) dx = f\left(\frac{1}{2}\right) + \frac{1}{24} f''(\xi)$。

C3) 假设 $f\in C^1([a,b])$。
    证明，
    $\displaystyle \max_{x\in [a,b]}\, |f(x)| \le \frac{1}{b-a} \left| \int_a^b f(x) dx \right| + \int_a^b |f'(x)| dx$。

C4) 设 $f\in C([0,1])$ 而且对任意满足 $g(0)=g(1)=0$ 的 $g\in C([0,1])$，
    都有 $\displaystyle \int_0^1 f(x)g(x) dx = 0$。证明，$f(x) \equiv 0$。

C5) 设 $f\in C([0,1])$ 而且对任意 $n\in \mathbb{Z}_{\geqslant 0}$，
    都有 $\displaystyle \int_0^1 f(x)x^n dx = 0$。证明，$f(x) \equiv 0$。

C6) （Gronwall不等式）设 $\varphi \in C([0,T])$ 且对任意 $t \in [0,T]$，
    有 $\displaystyle |\varphi(t)| \leqslant M + k\int_0^t |\varphi(s)|ds$，
    其中 $M, k$ 为正实数。试证明，对任意 $t\in [0,T]$，$|\varphi(t)| \leqslant Me^{kt}$。

C7) 假设 $a,b>0$，$f \in C([-a,b])$。如果对任意 $x\in (-a,b)$，
    $f(x)>0$ 并且 $\displaystyle \int_{-a}^b xf(x) = 0$。
    试证明，$\displaystyle \int_{-a}^b x^2 f(x) \leqslant ab \int_{-a}^b f(x)$。

C8) 假设 $f\in C([-1,1])$。
    证明，
    $\displaystyle \lim_{\lambda \to 0^+} \int_{-1}^1 \frac{\lambda}{\lambda^2+x^2} f(x) dx = \pi f(0)$。

C9) 假设 $f$ 在 $[1,\infty)$ 上可导并且 $\displaystyle \int_1^\infty f(x)$
    与 $\displaystyle \int_1^\infty f'(x)$ 都收敛（作为反常积分，请回忆反常积分的定义）。
    证明，$\displaystyle \lim_{x\to \infty} f(x) = 0$。

C10) 试证明，
     $\displaystyle \int_0^\infty \frac{\sin^2 x}{x^2} = \int_0^\infty \frac{\sin x}{x}, \qquad \int_0^\infty \frac{\cos x}{1+x} = \int_0^\infty \frac{\sin x}{(1+x)^2}$。

### 习题D（反常积分的计算）

试计算如下反常积分的数值：

\[
\begin{aligned}
  & (1) \int_{0}^{1} \log x dx && (2) \int_{-\infty}^{+\infty} \frac{dx}{1+x^2}\\
  &(3) \int_{0}^{+\infty} \frac{dx}{1 + x^4} && (4) \int_{0}^{+\infty} \frac{1+x^2}{1+x^4}dx \\
  & (5) \int_{-\infty}^{0} x e^x dx  && (6) \int_{0}^{+\infty} e^{-\sqrt{x}} dx \\
  & (7) \int_{0}^{+\infty} \frac{dx}{(a^2 + x^2)^{3/2}} && (8) \int_{2}^{+\infty} \frac{dx}{x^2 + x -2}\\
   & (9) \int_{-\infty}^{+\infty} \frac{dx}{(x^2 + x + 1)^2} &&  (10) \int_{-1}^{1} \frac{dx}{\sqrt{1-x^2}}\\
    & (11) \int_{-1}^{1} \frac{\arcsin x}{\sqrt{1-x^2}}dx   && (12) \int_{-1}^{1} \frac{dx}{(2-x)^2\sqrt{1-x^2}} \\
  & (13) \int_{0}^{1} \frac{\arcsin \sqrt{x}}{x(1-x)} dx\textcolor{red}{\small{(注:不收敛)}} && (14) \int_{0}^{1} \frac{(1-x)^n}{\sqrt{x}} dx, ~ n \in \mathbb{N}_+ \\
  & (15) \int_{0}^{1} \frac{x^n }{\sqrt{1-x^2}} dx, ~ n \in \mathbb{N}_+ &&  (16) \int_{0}^{1} x^m(\log x)^n dx, n \in \mathbb{N}_+, m \geqslant 0 \\
  & (17) \int_{2}^{+\infty} \frac{dx}{x (\log x)^p}, ~ p > 1  && (18) \int_{0}^{+\infty} \frac{\log x}{x^2 + a^2} dx\\
  & (19) \int_{0}^{+\infty} x^n e^{-x} dx, n \in \mathbb{N}_+ && (20) \int_{-\infty}^{+\infty} \frac{dx}{(a x^2 + 2bx + c)^n}, ~ ac - b^2 > 0\\
   & (21) \int_{0}^{+\infty} x^{2n-1}e^{-x^2} dx, n \in \mathbb{N}_+ &&   (22) \int_{-\pi}^{\pi} \frac{1-r^2}{1 - 2r \cos x + r^2}dx, ~ 0 < r < 1\\
    & (23)\int_{0}^{+\infty} e^{-ax} \cos bx dx, ~ a > 0 && (24) \int_{0}^{+\infty} e^{-ax} \sin bx dx, ~ a > 0\\
  & (25) \int_{1}^{+\infty} \frac{dx}{x(x+1)\cdots (x+n)} && (26) \int_{0}^{\pi} \log \sin x dx\\
  &(27) \int_{0}^{+\infty} e^{-x^2} dx
  \end{aligned}
\]

## 题目E（可写成两个完全平方数的和的整数的密度）（期末考试模拟题，不交作业，鼓励讨论）

在此问题中，$I=(0,\infty)$。

### 第一部分：一个含参数积分的研究

E1) 证明，函数 $\dfrac{e^{-u}}{\sqrt{u}}$ 是 $I$ 上的可积函数（作为反常积分可积），
    记 $K=\displaystyle\int_0^\infty \dfrac{e^{-u}}{\sqrt{u}} du$。

E2) 证明，对任意的 $x\in I$，
    $F(x)=\displaystyle\int_0^\infty\frac{e^{-u}}{\sqrt{u}(u+x)}du$
    是良好定义的（即此反常积分收敛）。

E3) 证明，$F\in C^1(I)$ 并写下 $F'(x)$ 的积分表达式。

E4) 证明，对任意的 $x\in I$，我们有
    \[
    xF'(x)-(x-\frac{1}{2})F(x)=-K.
    \]

E5) 通过 $G(x)=\sqrt{x}e^{-x}F(x)$ 定义 $G\colon I\rightarrow \mathbb{R}$。
    证明，存在实数 $C$，使得
    \[
    G(x)=C-K\int_{0}^x \frac{e^{-t}}{\sqrt{t}}dt.
    \]

E6) 计算 $K$ 的值（提示：计算 $G$ 在 $0$ 和 $+\infty$ 处的极限）。

### 第二部分：两个函数级数的研究。

我们用级数定义函数
\[
f(x)=\sum_{n=1}^\infty \frac{e^{-nx}}{\sqrt{n}}, \ \ g(x)=\sum_{n=0}^\infty \sqrt{n}e^{-nx}.
\]

E7) 证明，$f$ 和 $g$ 在 $I$ 上是良好定义的并且是 $I$ 上的连续函数。

E8) 证明，对任意 $x\in I$，我们都有
    \[
    \int_1^\infty \frac{e^{-ux}}{\sqrt{u}}du \leqslant f(x)\leqslant \int_{0}^\infty \frac{e^{-ux}}{\sqrt{u}}du.
    \]

E9) 证明，存在常数 $C_0$，使得
    \[
    \lim_{x\rightarrow 0^+}\sqrt{x}f(x)=C_0.
    \]

E10) 我们定义序列 $\{a_n\}_{n\geqslant 1}$ 如下：
     \[
     a_n=\left(\sum_{k=1}^n \frac{1}{\sqrt{k}}\right)-2\sqrt{n}.
     \]
     证明，$\displaystyle \lim_{n\rightarrow \infty} a_n$ 存在。

E11) 证明，对任意的 $x\in I$，由级数定义的函数
     \[
     h(x)=\sum_{n\geqslant 1} \Bigl(\sum_{k=1}^n\frac{1}{\sqrt{k}}\Bigr)e^{-nx}
     \]
     是良好定义的（即上面的级数是收敛的）。

E12) 试用 $f(x)$ 来表达 $h(x)$ 并证明存在常数 $C_1$，使得
     \[
     \lim_{x\rightarrow 0^+}x^{\frac{3}{2}}h(x)=C_1.
     \]

E13) 证明，
     \[
     \lim_{x\rightarrow 0^+}x^{\frac{3}{2}}g(x)=\frac{\sqrt{\pi}}{2}.
     \]

### 第三部分：由自然数的子集所定义的函数级数的研究。

给定 $A\subset \mathbb{Z}_{\geqslant 0}$，我们可以定义一个数列 $\{a_n\}_{n\geqslant 0}$：
\[
a_n=\begin{cases}
1, \ \text{如果 } n \in A;\\
0, \ \text{如果 } n \notin A.
\end{cases}
\]
我们定义集合 $I_A \subset \mathbb{R}_{\geqslant 0}$ 如下：
\[
I_A=\bigl\{x\geqslant 0~\bigm| ~ \text{级数 }\sum_{n\geqslant 0}a_n e^{-nx}\text{ 收敛}~\bigr\}.
\]
我们定义函数 $f_A\colon I_A\rightarrow \mathbb{R}$ 如下：
\[
f_A(x)=\sum_{n\geqslant 0}a_n e^{-nx}.
\]
我们记 $\Phi(A)=\displaystyle \lim_{x\rightarrow 0} xf_A(x)$（如果极限存在的话）并令
\[
\mathcal{S}=\bigl\{A\subset \mathbb{Z}_{\geqslant 0}~\bigm| ~\lim_{x\rightarrow 0^+} xf_A(x)\text{ 存在}\bigr\}.
\]
作为例子，我们令 $A_1$ 表示所有的非零完全平方数，$A_2$ 表示两个非零完全平方数的和：
\[
A_1=\bigl\{1,4,9,16,\cdots, n^2,(n+1)^2,\cdots\bigm|  n \in \mathbb{Z}_{\geqslant 1}\bigr\}, \ A_2=\bigl\{p^2+q^2\bigm|  p,q \in \mathbb{Z}_{\geqslant 1}\bigr\}.
\]

E14) 如果 $A$ 是有限集，试确定 $I_A$；如果 $A$ 是无限集，试确定 $I_A$。

E15) 给定 $A\subset \mathbb{Z}_{\geqslant 0}$，对于任意 $n\geqslant 0$，
     我们定义集合 $A_{\leqslant n}$：
     \[
     A_{\leqslant n}=\bigl\{\ell \in A\bigm| \ell \leqslant n\bigr\}.
     \]
     我们用 $|A_{\leqslant n}|$ 表示它所包含的元素的个数。证明，对任意的 $x>0$，级数
     \[
     \sum_{n=0}^\infty |A_{\leqslant n}|\cdot e^{-nx}
     \]
     是收敛的，并且满足
     \[
     \sum_{n=0}^\infty |A_{\leqslant n}| \cdot e^{-nx}=\frac{f_A(x)}{1-e^{-x}}.
     \]

E16) 证明，对任意 $x>0$，都有
     \[
     \frac{f_{A_1}(x)}{1-e^{-x}}=\sum_{n=0}^\infty \left\lfloor {\sqrt{n}} \right\rfloor e^{-nx},
     \]
     其中 $\left\lfloor {\sqrt{n}} \right\rfloor$ 代表不超过 $\sqrt{n}$
     的最大整数（即它的整数部分）。

E17) 证明，极限
     \[
     \lim_{x\rightarrow 0^+}\sqrt{x}f_{A_1}(x)
     \]
     存在并计算 $\Phi(A_1)$。

E18) 令 $v(n)$ 为集合
     $\bigl\{(p,q)\in \mathbb{Z}_{\geqslant 1}\times \mathbb{Z}_{\geqslant 1}\bigm| p^2+q^2=n\bigr\}$
     的元素个数。证明，对任意的 $x>0$，级数
     \[
     \sum_{n\geqslant 1}v(n)e^{-nx}
     \]
     是收敛的并且
     \[
     \sum_{n\geqslant 1}v(n)e^{-nx}=\bigl(f_{A_1}(x)\bigr)^2.
     \]

E19) 证明，对任意 $x>0$，我们都有
     \[
     f_{A_2}(x)\leqslant \bigl(f_{A_1}(x)\bigr)^2
     \]
     据此给出 $\Phi(A_2)$ 的一个上界（我们假设 $\Phi(A_2)$ 存在）。

### 第四部分：一个Tauber型定理及应用。

我们现在假设 $\{a_n\}_{n \geqslant 0}$ 是非负实数组成的序列，使得对任意的 $x>0$，级数
\[
S(x)=\sum_{n\geqslant 0}a_n e^{-nx}
\]
收敛。我们进一步假设下面的极限存在：
\[
\lim_{x\rightarrow 0^+}x S(x)=\lim_{x\rightarrow 0^+}x \sum_{n\geqslant 0}a_n e^{-nx}=\ell \in [0,+\infty).
\]
令 $F$ 为 $[0,1]$ 上的全体实值函数的所构成的线性空间，$E_0=C([0,1])$。
令 $E$ 是分段连续的有界函数所组成的空间，即对任意的 $\varphi\in E$，
$\varphi$ 有界并且存在 $\{b_i\}_{i=0,1,\cdots,m}$，使得
\[
0=b_0<b_1<b_2<\cdots<b_{m-1}<b_m=1,
\]
并且 $\varphi$ 在每一段 $(b_i,b_{i+1})$ 上的限制是连续的。我们在 $E$ 上取范数
\[
\|\psi\|_{\infty}=\sup_{x\in [0,1]}|\psi(x)|.
\]

E20) 我们定义映射 $L\colon E\rightarrow F$ 如下：
     \[
     \bigl(L(\psi)\bigr)(x)=\sum_{n=0}^\infty a_n e^{-nx}\psi(e^{-nx}), \ \ \psi \in E.
     \]
     证明，$L$ 是良好定义的（上面等式右边的级数对任意的 $x>0$ 均收敛）并且是线性映射。
     进一步，如果对任意的 $x\in [0,1]$，$\psi_1(x)\leqslant \psi_2(x)$，
     那么对任意的 $x\in [0,1]$，证明，
     \[
     \bigl(L(\psi_1)\bigr)(x)\leqslant \bigl(L(\psi_2)\bigr)(x).
     \]

E21) 定义 $E$ 的子空间
     \[
     E_1=\bigl\{\psi \in E\bigm| \lim_{x\rightarrow 0^+}x\bigl(L(\psi)\bigr)(x) \text{ 存在}\bigr\}.
     \]
     我们定义线性映射 $\Delta\colon E_1\rightarrow \mathbb{R}$ 如下：
     \[
     \Delta(\psi)=\lim_{x\rightarrow 0^+}x\bigl(L(\psi)\bigr)(x), \ \  \psi \in E_1.
     \]
     证明，$E_1$ 是 $E$ 的线性子空间并且存在常数 $M>0$，使得对任意的 $\psi \in E_1$，我们都有
     \[
     |\Delta(\psi)|\leqslant M\|\psi\|_\infty.
     \]

E22) 对于单项式函数 $P_n(x)=x^n$，证明，$P_n\in E_1$ 并计算 $\Delta(P_n)$。

E23) 证明，$E_0\subset E_1$ 并对每个 $\psi \in E_0$ 来计算 $\Delta(\psi)$。

E24) 对于 $a\in (0,1)$，$\varepsilon \in \bigl(0, \min(a,1-a)\bigr)$，我们定义函数
     \[
     g_-(x)=\begin{cases}
       1, &x\in [0,a-\varepsilon];\\
       \frac{a-x}{\varepsilon}, &x \in (a-\varepsilon,a)\\
       0, &x\in [a,1]
     \end{cases}, \ \ g_+(x)=\begin{cases}
       1, &x\in [0,a];\\
       \frac{a+\varepsilon-x}{\varepsilon}, &x \in (a,a+\varepsilon)\\
       0, &x\in [a+\varepsilon,1]
     \end{cases},
     \]
     证明，$g_{\pm} \in E_0$ 并计算 $\Delta(g_\pm)$。
     进一步证明，示性函数 $\mathbf{1}_{[0,a]}\in E_1$
     并计算 $\Delta(\mathbf{1}_{[0,a]})$。

E25) 证明，$E_1=E$ 并对 $\psi \in E$ 给出 $\Delta(\psi)$ 的计算公式。

E26) 我们定义函数
     \[
     \psi(x)=\begin{cases}
       0, &x\in [0,e^{-1});\\
       \frac{1}{x}, &x \in [e^{-1},1].
     \end{cases}
     \]
     通过计算 $L(\psi)\big(\frac{1}{N}\big)$（这里 $N$ 是正整数）证明Tauber型公式：
     \[
     \lim_{N\rightarrow \infty}\frac{1}{N}\sum_{k=0}^N a_k =\ell.
     \]

E27) 考虑 $A\in \mathcal{S}$（第三部分），试计算
     \[
     \lim_{n\rightarrow \infty}\frac{|A_{\leqslant n}|}{n}.
     \]
     这个数值也被称作是 $A$ 在 $\mathbb{Z}_{\geqslant 0}$ 中的自然密度。

E28) 试计算
     \[
     \lim_{n\rightarrow \infty}\frac{v(1)+v(2)+\cdots+v(n)}{n},
     \]
     并给出 $A_2$ 的自然密度的一个上界。

::: -remark [寄语]
God does not care about our mathematical difficulties. He integrates empirically.

<align right>
——Albert Einstein
</align>
:::
