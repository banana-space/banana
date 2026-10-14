---
title: 作业：Sturm–Liouville 理论的一个例子
---

## 凸函数的研究

如果不另加说明，$f$ 总代表某区间 $I$ 上实值函数。
如果对任意的 $x,y \in I$ 和 $t \in (0,1)$，都有 $f(tx + (1-t)y) < tf(x) + (1-t)f(y)$，
我们就称 $f$ 为**严格凸的**。
仿照课堂上凹函数的定义，我们可以类似地定义严格凹的函数（即 $-f$ 是严格凸的）。

### 习题A：凸函数的基本性质

A1) 试判断下列函数的凸（凹）或者严格凸（凹）性：
    \[
    \begin{aligned}
      &(1)~f(x) = |x|, \ \ I= \mathbb{R} &&(2)~f(x)=x^p,  \ \  p \in \mathbb{R}, \ I=\mathbb{R}_{>0}, &&  (3)~f(x) = \sin x, \ \ I = [0,\pi], \\
      &(4)~f(x) = x \log x, \ \ I=\mathbb{R}_{>0} && (5)~f(x)=\begin{cases}
    1, \ x=0,1\\
      0, \ 0<x<1.
    \end{cases}    I=[0,1]
      \end{aligned}
    \]

A2) 试证明凸函数的如下基本性质：

    1. 如果 $f,g$ 是区间 $I$ 上的凸函数，那么 $f+g$ 也是凸函数。

    2. 如果 $f,g$ 是区间 $I$ 上的单调递增的非负的凸函数，那么 $fg$ 是凸函数。

    3. 如果 $f$ 是区间 $I$ 上的凸函数，$g$ 是区间 $J \supset f(I)$ 上的单调递增凸函数，
       那么 $g \circ f$ 是凸函数。

    4. 如果 $f,g$ 是区间 $I$ 上的凸函数，那么 $h(x) = \max\{f(x),g(x)\}$ 是凸函数。

A3) 假设 $f\in C\bigl((a,b)\bigr)$。
    如果对任意的 $x,y \in (a,b)$，
    都有 $\displaystyle f\left(\frac{x+y}{2}\right) \leqslant \frac{f(x) + f(y)}{2}$，证明，
    $f$ 是凸函数。

A4) $f$ 是 $[a,b]$ 上的凸函数。如果存在 $c \in (a,b)$，使得 $f(c) \geqslant \max\{f(a),f(b)\}$。
    试证明，$f$ 是常值函数。

A5) $f$ 是 $\mathbb{R}$ 上的凸函数。如果 $f$ 在 $\mathbb{R}$ 上有界，证明，$f$ 是常值函数。

A6) 设 $f$ 是区间 $I$ 上的严格凸函数。
    假设 $f(x_0) \in I$ 是 $f$ 的局部极小值，证明，$x_0$ 是 $f$ 唯一的整体极小值点，
    即对任意的 $x \in I-\{x_0\}$，我们有 $f(x_0) < f(x)$。

A7) $I$ 是开区间。
    证明，$f$ 是凸函数等价于对任意点 $x_0 \in I$，存在实数 $a \in \mathbb{R}$，
    使得对任意的 $x \in I$，我们都有 $f(x) \geqslant a(x - x_0) + f(x_0)$。

### 习题B：凸函数与不等式

B1) 证明下面的不等式：
    \[
    \begin{aligned}
      & (1) x - \frac{x^2}{2} < \log (1+x) < x, \ \ x > 0; \ \ (2) (x^{\alpha} + y^{\alpha})^{1/\alpha} > (x^{\beta} + y^{\beta})^{1/\beta}, \ \ x,y > 0, \beta > \alpha > 0\\
      & (3) x - \frac{x^3}{6} < \sin x < x, \ \ x > 0;\ \  (4) \left(\frac{1+x}{2}\right)^{p} + \left(\frac{1-x}{2}\right)^{p} \leqslant \frac{1}{2}(1 + x^p), \ \ p \geqslant 2, x \in [0,1].
      \end{aligned}
    \]

B2) 试求所有的正数 $a$，使得不等式 $a^x \geqslant x^a$ 对任意的 $x > 0$ 都成立。

B3) 证明如下不等式并给出等号成立的条件：对任意正数 $x_i $ 和 $t_i $（$i=1,\cdots,n$），
    $\displaystyle\sum_{i=1}^n t_i = 1$，都有
    \[
    \left( \sum_{i=1}^n t_i x_i \right)^{ \displaystyle\sum_{i=1}^n t_i x_i} \leqslant \prod_{i=1}^n x_i^{t_i x_i} .
    \]

B4) 证明，Young不等式并给出等号成立的条件：对于任意正数 $a,b$，任意的实数 $p,q$，
    其中 $\dfrac{1}{p} + \dfrac{1}{q} = 1$（我们要求 $p$ 和 $q$ 不是 $0$ 或者 $1$），我们有
    \[
    ab \leqslant \frac{a^p}{p} + \frac{b^q}{q}, \ \ \text{如果}~p > 1;  \ \ ab \geqslant \frac{a^p}{p} + \frac{b^q}{q}, \ \  \text{如果}~p < 1.
    \]

B5) 证明 Hölder 不等式并给出等号成立的条件：设 $x_i,y_i \geqslant 0$，其中 $i = 1,\cdots,n$，
    $p,q \neq 0,1$，其中 $ \dfrac{1}{p} + \dfrac{1}{q} = 1$，我们有
    \[
    \sum_{i=1}^{n} x_i y_i \leqslant \left(\sum_{i=1}^{n}x_i^p\right)^{1/p}\left(\sum_{i=1}^{n}y_i^q\right)^{1/q},  \ \text{如果}~p > 1; ~\sum_{i=1}^{n} x_i y_i \geqslant \left(\sum_{i=1}^{n}x_i^p\right)^{1/p}\left(\sum_{i=1}^{n}y_i^q\right)^{1/q},\ \text{如果}~p < 1.
    \]
    在上述不等式中，如果 $p < 0$，我们假设 $x_i > 0$。
    （这个不等式的结论比证明重要得多，同学们可以参考其它资料来写下证明）

## 导数的性质和应用：复习

### 习题C：利用（高阶）导数的信息刻画函数（低阶导数）

在本习题中，我们把函数 $f$ 也记为 $f^{(0)}$。

C1) 我们假设 $f\in C\bigl([0,1]\bigr)$，$g$ 在 $[0,1]$ 上可导且 $g(0) = 0$。
    如果存在常数 $\lambda \neq 0$，使得对任意的 $x\in [0,1]$，
    都有 $|g(x)f(x) + \lambda g'(x)| \leqslant |g(x)|$，证明，$g(x) \equiv 0$。

C2) $f$ 在 $(-1,1)$ 上二阶可导，$f(0) = f'(0) = 0$。
    如果对任意的 $x\in (-1,1)$，都有 $|f''(x)| \leqslant |f(x)|+|f'(x)|$，证明，$f(x) \equiv 0$。

C3) $n$ 是正整数，$f$ 在 $\mathbb{R}$ 上 $n$ 阶可导，$f(0) = f'(0) = \cdots = f^{(n-1)}(0) = 0$。
    如果 $C\in\mathbb{R}_{>0}$ 和 $\ell \in \mathbb{Z}_{\geqslant 0}$，
    使得对任意 $x\in \mathbb{R}$ 都有 $|f^{(n)}(x)| \leqslant C|f^{(\ell)}(x)|$，证明，
    $f(x) \equiv 0$。

C4) $n$ 是正整数，证明，
    多项式 $\displaystyle P(x) = \sum_{k=0}^{n+1} C_{n+1}^k (-1)^k (x-k)^n$ 是 $0$。

C5) $f\in C^\infty(\mathbb{R})$。
    假设存在正实数 $C$，使得对任意 $n \in \mathbb{Z}_{\geqslant 0}$ 和任意的 $x \in \mathbb{R}$，
    我们都有 $|f^{(n)}(x)| \leqslant C$。

    (i) 证明，给定任意的 $x_0 \in \mathbb{R}$，
        我们可以（以 $x_0$ 为中心）将 $f(x)$ 在 $\mathbb{R}$ 上展开为无穷Taylor级数，即
        \[
        f(x) = \sum_{k=0}^\infty \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k, \qquad \forall x \in \mathbb{R}.
        \]

    (ii) $E\subset \mathbb{R}$ 是一个无穷集并且有界。
         证明，如果 $f$ 在 $E$ 上的取值都是零，那么 $f\equiv 0$。

C6) 假设 $f\in C^2\bigl((0,1)\bigr)$，$\displaystyle\lim_{x\to 1^-}f(x) = 0$。
    如果存在 $C>0$，使得对任意 $x\in (0,1)$，我们都有不等式 $(1-x)^2|f''(x)| \leqslant C$。
    证明，$\displaystyle\lim_{x\to 1^-} (1-x)f'(x) = 0$。

### 习题D：利用导数求极值

求下列函数在给定集合 $I$ 上的极值 $\displaystyle\sup_{x\in I} f(x)$ 和
$\displaystyle\inf_{x\in I}f(x)$，其中 $m,n$ 为正整数。

D1) $f(x) = \dfrac{(\log x)^2}{x}$，$I = \mathbb{R}_{>0}$；

D2) $f(x) = |x(x^2-1)|$，$I = \mathbb{R}$；

D3) $f(x) = \dfrac{x(x^2+1)}{x^4-x^2+1}$，$I = \mathbb{R}$；

D4) $f(x) = x^{\frac13}(1-x)^{\frac23}$，$I = (0,1)$；

D5) $f(x) = \left(1+x+\dfrac{x^2}{2!}+\cdots + \dfrac{x^n}{n!}\right)e^{-x}$，$I = \mathbb{R}$；

D6) $f(x) = \sin^{2m}x \cos^{2n}x$，$I = \mathbb{R}$。

### 习题E：利用导数比较函数（或实数）大小

E1) $f(x) = e^x$ 和 $g(x) = 1+xe^x$，其中 $x > 0$；

E2) $f(x) = xe^{\frac x2}$ 和 $g(x) = e^x - 1$，其中 $x > 0$；

E3) $f(x) = \left(\frac{x+1}{2}\right)^{x+1}$ 和 $g(x) = x^x$，其中 $x>0$；

E4) $2^{\sqrt{2}}$ 和 $e$；

E5) $f(x) = \log(1+\sqrt{1+x^2})$ 和 $g(x) = \frac1x+\log x$，其中 $x>0$；

E6) $\log_e{8}$ 和 $2$。

### 习题F：函数的重根

*上传者注：本题题设条件下可以举出很多反例，建议读者将可微条件全部改为足够高阶连续可微，或者光滑。*

如果 $f$ 在 $x_0$ 的一个邻域内满足 $f(x) = (x-x_0)^r g(x)$，其中 $r \in \mathbb{Z}_{\geqslant 0}$，
$g$ 在 $x_0$ 处连续并且 $g(x_0) \neq 0$，那么我们就称 $x_0$ 为 $f$ 的 $r$-重根。
我们注意到，$0$-重根并非根。

F1) 假设 $x_0$ 是 $f$ 的 $r$-重根，其中 $r\geqslant 1$。
    证明，如果 $g(x) = \dfrac{f(x)}{(x-x_0)^r}$ 可微，那么 $x_0$ 是 $f'$ 的 $(r-1)$-重根。

F2) 假设 $f$ 为 $\mathbb{R}$ 上 $n$ 阶的可微函数。
    证明，如果 $f(x) = 0$ 有 $n+1$ 个不同的实根，那么 $f^{(n)}(x) = 0$ 至少有一个实根。

F3) $f$ 为 $\mathbb{R}$ 上的可微函数。
    假设 $f(x) = 0$ 按重数计算恰有 $r$ 个实根，也就是说，
    $f(x) = 0$ 有 $s$ 个相异的实根 $x_1, x_2, \cdots, x_s$，
    它们的重数分别为 $r_1, r_2, \cdots, r_s$ 并且 $r_1+r_2 + \cdots + r_s = r$。
    证明，$f'(x) = 0$ 按重数计至少有 $r-1$ 个根。

F4) 假设 $f$ 为 $\mathbb{R}$ 上 $n$ 阶的可微函数。
    证明，如果 $f(x) = 0$ 按重数计恰有 $n+1$ 个实根，那么 $f^{(n)}(x) = 0$ 至少有一个实根。

### 习题G

设 $a \in \mathbb{R}$，$f\colon  (a,\infty) \to \mathbb{R}$ 在 $(a,\infty)$ 上二阶可微，并且
\[
M_0 \coloneqq \sup_{x\in (a,\infty)} |f(x)|, \qquad M_1 \coloneqq \sup_{x\in (a,\infty)} |f'(x)|, \qquad \text{和} \,\, M_2 \coloneqq \sup_{x\in (a,\infty)} |f''(x)|
\]
均为实数。

G1) 证明：$M_1^2 \leqslant 4M_0 M_2$。
    （*提示*：对任意的 $h>0$ 和任意的 $x\in (a,\infty)$，证明，有 $\xi \in (x,x+2h)$，使得
    \[
    f'(x) = \frac{1}{2h} [f(x+2h)-f(x)] - hf''(\xi)
    \]
    成立，继而用 $M_0, M_2$ 来控制 $M_1$。）

G2) 令 $a=-1$，考察函数 $f\colon  (-1,\infty) \to \mathbb{R}$：
    \[
    f(x) = \begin{cases}
    2x^2 - 1 \qquad&x\in (-1,0),\\
    \frac{x^2 - 1}{x^2+1} \qquad&x \in [0,\infty),
    \end{cases}
    \]
    验证 $f$ 二阶可微，验证 $M_0 = 1, M_1 = 4$，$M_2 = 4$。因此，在不等式 1)中，等号可能取到。

G3) 假设 $\mathbf{f} \colon  (a,\infty) \to \mathbb{R}^n$ 是 $(a,\infty)$ 上二阶可微的在
    $\mathbb{R}^n$ 中取值的向量值函数，记 $M_0,M_1$ 和 $M_2$ 分别为 $|\mathbf{f}|$，
    $|\mathbf{f} '|$ 和 $|\mathbf{f}''|$ 的上确界。证明：$M_1^2 \le 4M_0 M_2$。

## 题目S：Sturm–Liouville理论的一个例子（8字班期末考试题之一，不交作业）

在这个问题中，我们仿照 $\sin x$ 和 $\cos x$ 的构造来研究一类微分方程的解的零点。
我们假设如下的唯一性定理成立：

::: theorem*
假设 $a(t)\in C^1(\mathbb{R})$，$t_0\in \mathbb{R}$。
如果 $x(t),y(t)\in C^2(\mathbb{R})$，满足同样的方程
\[
\begin{aligned}
x''(t)+a(t)x(t)&=0, \\
y''(t)+a(t)y(t)&=0.
\end{aligned}
\]
并且它们的初始值 $(x(t_0),x'(t_0))=(y(t_0),y'(t_0))$ 是一样的，那么 $x(t)\equiv y(t)$。
:::

这个定理说的是在任意一个点 $t_0\in \mathbb{R}$ 处，
一个解 $x$ 和它的导数 $x'$ 在这个点的值决定了 $x$。作为定理的一个应用，假设
\[
\begin{aligned}
x''(t)+a(t)x(t)=0.
\end{aligned}
\]
如果 $x(0)=0$ 并且 $x'(0)=0$，那么 $x(t)\equiv 0$。

对任意的函数 $f\colon \mathbb{R}\rightarrow \mathbb{R}$，$t\geqslant 0$，
我们用 ${\rm Z}_t(f)$ 表示 $f$ 在区间 $[0,t]$ 上的零点的个数，即
\[
Z_t(f)=\Big|\bigl\{x\in [0,t]\bigm| f(x)=0\bigr\}\Big|.
\]

### 第一部分
在此部分中，函数 $a(t),b(t)\in C^1(\mathbb{R})$ 并且对任意的 $t\in \mathbb{R}$，
都有 $a(t)\leqslant b(t)$。假设 $x(t),y(t)\in C^2(\mathbb{R})$，满足如下两个方程
\[
\begin{aligned}
x''(t)+a(t)x(t)&=0, \\
y''(t)+b(t)y(t)&=0.
\end{aligned}
\]
我们还假设 $x(t)$ 和 $y(t)$ 都**不恒为 $0$**。

S1) 假设 $t_1$ 是 $x$ 的一个零点（即 $x(t_1)=0$），如果存在 $t> t_1$，使得 $x(t)=0$，证明，
    一定存在 $t_2>t_1$，使得 $x(t_2)=0$ 并且 $x$ 在 $(t_1,t_2)$ 上无零点。

    我们将这样的两个零点 $t_1$ 和 $t_2$ 称作是 $x$ 的两个*相邻的零点*。

    （提示：利用我们证明过的微分方程解的唯一性：如果 $x''(t)+a(t)x(t)=0$ 并且 $x(t_0)=x'(t_0)=0$，
    那么 $x(t)\equiv 0$。）

S2) 假设 $t_2>t_1$ 是 $x$ 的两个相邻的零点。证明，$y$ 在 $(t_1,t_2]$ 上有零点。

    （提示：考察函数 $h(t)=x'(t)y(t)-x(t)y'(t)$）

S3) 证明，对任意的 $t\geqslant 0$，我们都有 $Z_t(y)\geqslant Z_t(x)-1$。

S4) 假设 $t_2>t_1$ 使得 $x(t_1)=0$，$x'(t_2)=0$。证明（任选其一），

    - 如果 $y(t_1)=0$，那么存在 $t_3\in [t_1,t_2]$，使得 $y'(t_3)=0$。

    - 如果 $y'(t_2)=0$，那么存在 $t_4\in [t_1,t_2]$，使得 $y(t_4)=0$。

### 第二部分
在此部分中，$p(t)\in C^1(\mathbb{R})$ 是正函数，即对任意的 $t\in \mathbb{R}$，都有 $p(t)>0$。
$x(t),y(t)\in C^2(\mathbb{R})$ 都不恒为 $0$ 并且满足
\[
\begin{aligned}
x''(t)+p(t)x(t)&=0, \\
y''(t)+p(t)y(t)&=0.
\end{aligned}
\]

S5) 证明，对任意的 $t\geqslant 0$，我们都有 $\big|Z_t(x) -Z_t(y)\big|\leqslant 1$。

S6) 证明下面的两个命题（任选其一）：

    - 如果 $t_1$ 和 $t_2$ 是 $x$ 的两个相邻的零点，那么存在唯一的 $t_3\in [t_1,t_2]$，
      使得 $x'(t_3)=0$。

    - 如果 $t'_1$ 和 $t'_2$ 是 $x'$ 的两个相邻的零点，那么存在唯一的 $t'_3\in [t_1,t_2]$，
      使得 $x(t'_3)=0$。

S7) 证明下面的两个命题（任选其一）：

    - $t_0$ 是 $|x(t)|$ 的局部最大值当且仅当 $x'(t_0)=0$。

    - $t'_0$ 是 $|x'(t)|$ 的局部最大值当且仅当 $x(t'_0)=0$。

### 第三部分
在此部分中，
我们假设 $p(t)\in C^1(\mathbb{R})$ 是递减的函数并且
$\displaystyle \lim_{t\rightarrow +\infty} p(t)>0$。我们记
\[
p(\infty)\coloneqq\displaystyle \lim_{t\rightarrow +\infty} p(t).
\]
$x(t)\in C^2(\mathbb{R})$ 不恒为 $0$ 并且满足
\[
x''(t)+p(t)x(t)=0.
\]

- \*S8) 证明，$\displaystyle \lim_{t\rightarrow +\infty}\frac{Z_t(x)}{t}$ 存在并计算这个极限。

S9) 假设 $0\leqslant t_1<t_2<t_3<\cdots$ 是 $x(t)$ 在 $[0,+\infty)$ 上所有的零点，
    $0\leqslant t'_1<t'_2<t'_3<\cdots$ 是 $x'(t)$ 在 $[0,+\infty)$ 上所有的零点。
    证明，
    数列 $\bigl\{|x'(t_k)|\bigr\}_{k\geqslant 1}$ 是递减的而数列
    $\bigl\{|x(t'_k)|\bigr\}_{k\geqslant 1}$ 是递增的，并且
    \[
    \lim_{k\rightarrow \infty} |x'(t_k)| = \sqrt{p(\infty)} \lim_{k\rightarrow \infty} |x(t'_k)| .
    \]
    （提示：考察函数 $E(t)=p(t)x(t)^2+x'(t)^2$ 和 $F(t)=x(t)^2+\dfrac{1}{p(t)}x'(t)^2$。）

- \*S10) 假设 $0\leqslant \widetilde{t}_1<\widetilde{t}_2<\widetilde{t}_3<\cdots$ 是 $x(t)x'(t)$ 在
  $[0,+\infty)$ 上所有的零点。
  证明，
  数列 $\bigl\{ \widetilde{t}_{k+1}- \widetilde{t}_k\bigr\}_{k\geqslant 1}$ 是递增的并计算它的极限。
