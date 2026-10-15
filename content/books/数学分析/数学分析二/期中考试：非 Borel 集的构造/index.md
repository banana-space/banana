---
title: 期中考试：非 Borel 集的构造
---

考试中后面的问题可以使用前面问题的结论（无论答题人是否已经得到正确的证明或者答案），
试题出现的先后顺序与其难度毫无关联。

在本次考试中所出现的测度均为Lebesgue测度。

::: remark* (寄语)
Student: Dr. Einstein, Aren't these the same questions as last year's final exam?

Dr. Einstein: Yes! But this year the answers are different.
:::

## 光滑性（共10分）

我们用 $\mathbf{Sym}_n(\mathbb{R})$ 表示 $n\times n$ 的实对称矩阵的全体，
这是一个 $\dfrac{n(n+1)}{2}$-维的 $\mathbb{R}$-线性空间。

令 $\mathbf{Sym}^+_n(\mathbb{R})\subset \mathbf{Sym}_n(\mathbb{R})$ 为全体正定（对称）的矩阵。

A1) （3分）证明，$\mathbf{Sym}^+_n(\mathbb{R})$ 是 $\mathbf{Sym}_n(\mathbb{R})$ 中的开集。

A2) （7分）根据线性代数一个常用的命题（请自行查阅资料），
    对任意的 $A\in \mathbf{Sym}^+_n(\mathbb{R})$，存在唯一的 $B\in \mathbf{Sym}^+_n(\mathbb{R})$，
    使得
    \[
    B^2=A.
    \]
    我们用 $\sqrt{A}$ 来表示 $B$，这就我们得到了映射
    \[
    \sqrt{~\cdot~} \colon \mathbf{Sym}^+_n(\mathbb{R})\rightarrow \mathbf{Sym}^+_n(\mathbb{R}),  \ \ A\mapsto \sqrt{A}.
    \]
    证明，这个映射是 $C^\infty$ 的。

## 导数的计算（共10分）

B1) （5分）假设 $f\in C^2(\mathbb{R}^2,\mathbb{R})$，其中，
    我们用 $(x,y)$ 表示 $\mathbb{R}^2$ 上的坐标。令
    \[
    \begin{cases}
    &x=au+bv,\ \ a,b\in \mathbb{R};\\
    &y=cu+dv, \ \ c,d \in \mathbb{R}.
    \end{cases}
    \]
    据此，我们可以把 $f$ 看作是 $(u,v)$ 的函数，即 $F(u,v)=f(au+bv,cu+dv)$。
    试用 $f$ 对 $x$ 和 $y$ 的偏导数来计算 $\dfrac{\partial^2 F}{\partial u\partial v}$。

B2) （5分）试找出所有的 $f\in C^2(\mathbb{R}^2,\mathbb{R})$，使得
    \[
    \dfrac{\partial^2 f}{\partial x^2}-3\frac{\partial^2 f}{\partial x\partial y}+2\dfrac{\partial^2 f}{\partial y^2}=0.
    \]

## 反／隐函数定理：三次多项式的实根（共15分）

定义 $\mathbb{R}^3$ 上的映射：
\[
P\colon \mathbb{R}^2\times \mathbb{R}, \ \ (a,b,x)\mapsto P(a,b,x)=x^3+bx^2+ax+1.
\]
为了方便起见，我们还记 $p_{(a,b)}(x)=P(a,b,x)$。

C1) （2分）我们定义 $\mathbb{R}^2$ 集合
    \[
    \Omega=\bigl\{(a,b)\bigm| b^2<3a\bigr\}.
    \]
    证明，这是一个开集并且对任意的 $(a,b)\in \Omega$，多项式 $p_{(a,b)}(x)$ 有实根。

C2) （4分）对任意的 $(a,b)\in \Omega$，我们假设 $x\in \mathbb{R}$，使得 $p_{(a,b)}(x)=0$。
    证明，存在 $(a,b)$ 在 $\Omega$ 中的开邻域 $U_{(a,b)}$，
    $x$ 在 $\mathbb{R}$ 中的开邻域 $V_{x}$ 以及光滑映射
    \[
    \varphi\colon U_{(a,b)}\rightarrow V_{x},
    \]
    使得对任意的 $(a',b',x')\in U_{(a,b)}\times V_{x}$，
    $p_{(a',b')}(x')=0$ 等价于 $x=\varphi(a',b')$。

C3) （2分）假设 $(a,b)\in \mathbb{R}^2$ 使得多项式 $p_{(a,b)}(x)$ 有三个不同的实根。
    证明，存在 $(a,b)$ 在 $\mathbb{R}^2$ 中的开邻域 $U_{(a,b)}$，
    使得对任意的 $(a',b')\in U_{(a,b)}$，
    多项式 $p_{(a',b')}(x)$ 也有三个不同的实根。

C4) （3分）证明，对任意的 $(a,b)\in \Omega$，$p_{(a,b)}(x)$ 恰有一个实根。

C5) （4分）我们定义
    \[
    \begin{aligned}
    &\mathcal{U}_1=\bigl\{(a,b)\in \mathbb{R}^2\bigm| \text{$p_{(a,b)}(x)$ 恰有一个实根}\bigr\}, \\
    & \mathcal{U}_3=\bigl\{(a,b)\in \mathbb{R}^2\bigm| \text{$p_{(a,b)}(x)$ 有三个不同的实根}\bigr\}.
    \end{aligned}
    \]
    证明，$\mathcal{U}_1\cup \mathcal{U}_3$ 是 $\mathbb{R}^2$ 上稠密的集合。

## 凸函数（共10分）

假设 $\Omega\subset \mathbb{R}^n$ 是非空的凸集，$f\colon\Omega\rightarrow \mathbb{R}$ 是凸函数。

D1) （3分）在这个问题中，我们加一些假设：

    - $\Omega$ 是紧集并且它的内部 $\mathring{\Omega}$ 非空；[^1]

    - $f$ 在 $\Omega$ 上是连续函数，在开集 $\mathring{\Omega}$ 上是 $C^1$ 的。

    如果存在 $\omega\in\mathring{\Omega}$，使得
    \[
    f(\omega)=\sup_{x\in \Omega}f(x).
    \]
    那么，$f$ 是常值函数。（提示：用凸函数的几何解释）

D2) （3分）假设 $\Omega=\{(x,y)\mid x^2+y^2\leqslant 1\}$，令
    \[
    f(x,y)=\begin{cases}n,   \ \ & \text{如果}~(x,y)=\left(\cos\left(\frac{1}{n}\right),\sin\left(\frac{1}{n}\right)\right), \ n\in \mathbb{Z}_{n\geqslant 1};\\
    0,   \ \ & \text{其余情况}
    \end{cases}
    \]
    证明，这是一个凸函数并且它在 $\Omega$ 上的上确界是 $+\infty$。

D3) （4分）我们只假设 $\Omega$ 是非空凸集，$f$ 是凸函数。
    如果假设存在 $\omega \in \mathring{\Omega}$，使得
    \[
    f(\omega)=\sup_{x\in \Omega}f(x).
    \]
    证明，对任意的 $x\in \Omega$，我们都有 $f(\omega)=f(x)$。
    （提示：先证明存在 $x'\in \Omega$，使得 $\omega$ 落在 $x$ 与 $x'$ 的所联线段的内部）

## 求函数极值（共10分）

我们在 $\mathbb{R}_{\geqslant 0}\times \mathbb{R}_{\geqslant 0}\times \mathbb{R}_{\geqslant 0}$
上定义函数
\[
f(x,y,z)=\begin{cases}
\frac{xyz}{(x+y+z)^2}, \ \ &(x,y,z)\neq (0,0,0);\\
0,\ \ &(x,y,z)= (0,0,0).
\end{cases}
\]

E1) （4分）证明，
    $f$ 是 $\mathbb{R}_{\geqslant 0}\times \mathbb{R}_{\geqslant 0}\times \mathbb{R}_{\geqslant 0}$
    上的连续函数，
    它在开集 $\mathbb{R}_{> 0}\times \mathbb{R}_{>0}\times \mathbb{R}_{>0}$ 上是连续可微的。

E2) （6分）假设 $a>0$。证明，$f$ 在集合
    \[
    K=\bigl\{(x,y,z)\in \mathbb{R}_{\geqslant 0}\times \mathbb{R}_{\geqslant 0}\times \mathbb{R}_{\geqslant 0} \bigm| x^2+y^2+z^2=a^2\bigr\}
    \]
    上能取到最大值并计算这个值。

## 子流形的判定：Hopf纤维化（共10分）

我们用 $\mathbf{S}^3$ 和 $\mathbf{S}^2$ 表示 $\mathbb{R}^4$ 和 $\mathbb{R}^3$ 中的单位球面
\[
\mathbf{S}^3=\{(x,y,z,w)\mid x^2+y^2+z^2+w^2=1\},  \ \ \mathbf{S}^2=\{(a,b,c)\mid a^2+b^2+c^2=1\}.
\]

F1) （2分）证明，
    $\mathbf{S}^3$ 和 $\mathbf{S}^2$ 分别为 $\mathbb{R}^4$ 和 $\mathbb{R}^3$ 中光滑子流形。

F2) （4分）证明，映射
    \[
    H\colon\mathbb{R}^4\rightarrow \mathbb{R}^3, \ \ (x,y,z,w)\mapsto \bigl(x^2+y^2-z^2-w^2, 2(xw+yz), 2(yw-xz)\bigr)
    \]
    将 $\mathbf{S}^3$ 映射到 $\mathbf{S}^2$ 并且对任意的 $p\in \mathbf{S}^2$，
    它的逆像 $H^{-1}(p)$ 是 $\mathbf{S}^3$ 中的子流形。

F3) （4分）证明，对任意的 $p\in \mathbf{S}^2$，$H^{-1}(p)$ 与单位圆周微分同胚。

## 一个非Borel集的构造（共10分）

G1) （2分）在 $[0,1]$ 上定义如下的等价关系：$x\sim y$ 当且仅当 $x-y\in \mathbb{Q}$。
    试验证这是一个等价关系。
    这样，$[0,1]$ 被分成了若干个（两两不交）的等价类，我们在每个等价类中任意选定一个元素，
    这些元素组成了 $[0,1]$ 的子集 $A$。对于任意的 $q\in [-1,1]\cap \mathbb{Q}$，我们定义
    \[
    A_q=A+q=\{q+a\mid a\in A\}.
    \]
    证明，若 $q_1\neq q_2$，那么 $A_{q_1}\neq A_{q_2}$，并且
    \[
    [0,1]\subset \bigcup_{q\in [-1,1]\cap \mathbb{Q}}A_q\subset[-1,2].
    \]

G2) （4分）证明，$A\notin \mathcal{B}(\mathbb{R}^1)$。（提示：利用Lebesgue测度）

G3) （4分）我们用 $\mathcal{P}(\mathbb{R}^1)$（所有子集的集合）作为 $\mathbb{R}^1$ 上的
    $\sigma$-代数，假设 $\mu$ 是 $\mathcal{P}(\mathbb{R}^1)$ 上的一个平移不变的测度。
    证明，要么 $\mu\equiv 0$，要么对任意的非空开区间 $I$，$\mu(I)=+\infty$。

## 积分的计算（共15分）

对于 $a>0$ 和 $x\geqslant 0$，我们定义
\[
H_a(x)=\int_{0}^\infty e^{-(at^2+\frac{x}{t^2})}dt.
\]

H1) （3分）证明，上述积分是良好定义的并计算 $H_a(0)$。

H2) （3分）证明，函数
    \[
    H_a\colon [0,\infty)\rightarrow \mathbb{R}, \ \ x\mapsto H_a(x),
    \]
    是连续函数。

H3) （3分）证明，函数
    \[
    H_a\colon (0,\infty)\rightarrow \mathbb{R}, \ \ x\mapsto H_a(x),
    \]
    是可微的。

H4) （3分）计算 $H_a'(x)$。

H5) （3分）证明，
    \[
    H_a(x)=\frac{1}{2}\sqrt{\frac{\pi}{a}}e^{-2\sqrt{ax}}.
    \]

## 积分的控制（共20分）

给定 $\mathbb{R}^n$ 上一个非空开集 $\Omega$（Borel集即可）和 $\Omega$ 上的复可积函数 $f$。

I1) （3分）证明，
    \[
    \lim_{R\rightarrow \infty}\int_{\Omega}|f(x)|\mathbf{1}_{[R,+\infty)}\bigl(|x|\bigr)dx_1\cdots dx_n=0.
    \]

I2) （3分）证明，
    \[
    \lim_{R\rightarrow \infty}\int_{\Omega}|f(x)|\mathbf{1}_{[R,+\infty)}\bigl(|f(x)|\bigr)dx_1\cdots dx_n=0.
    \]

I3) （4分）证明，对任意的 $\varepsilon>0$，存在 $\delta>0$，
    使得对任意的 $A\in \mathcal{B}(\Omega)$，只要 $m(A)<\delta$，我们就有
    \[
    \int_{\Omega} |f(x)|\mathbf{1}_A(x)dx_1\cdots dx_n<\varepsilon.
    \]

在剩下的问题中，我们假设 $\Omega$ 的测度是有限的，即 $m(\Omega)<\infty$，
$\{f_k(x)\}_{k\geqslant 1}$ 是 $\Omega$ 上的一列复可积函数。

I4) （3分）假设
    \[
    \lim_{R\rightarrow \infty}\left(\sup_{k\geqslant 1}\left(\int_{\Omega}|f_k(x)|\mathbf{1}_{[R,+\infty)}\bigl(|f_k(x)|\bigr)dx_1\cdots dx_n\right)\right)=0.
    \]
    证明，对任意的 $\varepsilon>0$，存在 $\delta>0$，使得对任意的 $A\in \mathcal{B}(\Omega)$，
    只要 $m(A)<\delta$，我们就有
    \[
    \sup_{k\geqslant 1}\left(\int_{\Omega} |f_k(x)|\mathbf{1}_A(x)dx_1\cdots dx_n\right)<\varepsilon.
    \]

I5) （3分）对任意的 $\varepsilon>0$，存在 $\delta>0$，使得对任意的 $A\in \mathcal{B}(\Omega)$，
    只要 $m(A)<\delta$，我们就有
    \[
    \sup_{k\geqslant 1}\left(\int_{\Omega} |f_k(x)|\mathbf{1}_A(x)dx_1\cdots dx_n\right)<\varepsilon.
    \]
    证明，
    \[
    \lim_{R\rightarrow \infty}\left(\sup_{k\geqslant 1}\left(\int_{\Omega}|f_k(x)|\mathbf{1}_{[R,+\infty)}\bigl(|f_k(x)|\bigr)dx_1\cdots dx_n\right)\right)=0.
    \]

I6) （4分）假设 $\{f_k\}_{k\geqslant 1}$ 在 $\Omega$ 上逐点地收敛到 $f$
    并且满足I4)或者I5)中的假设，证明：
    \[
    \lim_{k\rightarrow \infty}\int_{\Omega}|f_k(x)-f(x)|dx_1\cdots dx_n=0.
    \]

[^1]: $\Omega$ 的内部是 $\Omega$ 的所有内点构成的开集；对于 $x\in \Omega$，
  如果存在 $\varepsilon>0$，使得 $B(x,\varepsilon)\subset \Omega$（以 $x$ 为球心，
  以 $\varepsilon$ 为半径的小球），我们就称它是 $\Omega$ 的内点。
  同学们还可以参考上学期第29次讲义。
