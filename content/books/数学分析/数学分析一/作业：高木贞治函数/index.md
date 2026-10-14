---
title: 作业：高木贞治函数
notices:
  - name: 问题
    items:
      - 习题 T4) 中，差商 $\dfrac{T(x+h_n)-T(x)}{h_n}$ 里的 $x$ 似乎应为题中给定的 $x_0$。
---

## 基本习题

### 习题A：导数的定义和计算

A1) $\mathbb{R}^n$ 上配有范数 $\|(x_1,\cdots,x_n)\|_2=\sqrt{(x_1)^2+\cdots+(x_n)^2}$，我们考虑映射
    \[
    f\colon \mathbb{R} \rightarrow \mathbb{R}^n, \ \  x\mapsto f(x)=(f_1(x),\cdots, f_n(x)).
    \]
    证明，$f$ 在 $x_0$ 处的导数存在当且仅当对每个分量函数 $f_k$，它在 $x_0$ 处的导数都存在并且
    \[
    f'(x)=\bigl(f_1'(x),\cdots, f_n'(x)\bigr).
    \]

A2) 考虑函数 $e^{ix}$，将它视作是映射
    \[
    f\colon \mathbb{R}\rightarrow \mathbb{C}, \ \ x \mapsto e^{ix}.
    \]
    利用定义证明，$f'(0)=i  ~(\in \mathbb{C})$。仿照课堂上的做法证明 $\bigl(e^{ix}\bigr)'=ie^{ix}$。

A3) 利用上面两个问题的结论计算 $\sin x$ 和 $\cos x$ 的导数。

A4) 对 $n=3$ 来验证Faà di Bruno公式。

A5) 定义映射
    \[
    E\colon  \mathbb{R} \rightarrow \mathbb{C}=\mathbb{R}^2,   \ \ \theta\mapsto (\cos\theta, \sin\theta).
    \]
    我们用下面符号表示平面上的单位圆：
    \[
    \mathbf{S}^1=\bigl\{(x,y)\in \mathbb{R}^2\bigm| x^2+y^2=1\bigr\}.
    \]

    ![](MathAnalysis_N15P3.svg)

    证明，$\mathbf{S}^1$ 上的点可以写成 $(\sin\theta,\cos\theta)$ 的形式，
    即 $E(\mathbb{R})=\mathbf{S}^1$。
    试计算 $E'(\theta)$ 并验证对于这个映射（$\mathbb{R}^2$ 上取值），Rolle中值定理并不成立。

A6) 求下列函数的导数（如果 $f$ 在 $x_0$ 不可微，但单侧左导数或右导数存在时，求出左导数或右导数）
    \[
    \begin{aligned}
      & (1) \ f(x) = a^x, \quad a > 0. && (2) \ f(x) = \arcsin x.\\
      & (3) \ f(x) = \arctan x && (4) \ f(x) = x^{x^x}, \quad x > 0 \\
      & (5) \ f(x) = \log \Bigl(\log \bigl(\log x\bigr)\Bigr). && (6) \ f(x) = \sqrt{x + \sqrt{x + \sqrt{x}}}.\\
      & (7) \ f(x) = |x|.    && (8) \ f(x) = \log |x|.\\
      & (9) \ f(x) = \begin{cases}
      x^n \sin \frac{1}{x}, \quad x\neq 0,\\
      0,   \qquad \quad x = 0.
      \end{cases} \ \ \ \ \ \ \  n = 1, 2, \cdots.
      \end{aligned}
    \]

A7) 求下列函数的 $3$-阶导数：
    \[
    \begin{aligned}
      & (1) \ f(x) = \log(1+x). && (2) \ f(x) = x^{-1}\log x.\\
      & (3) \ f(x) = \frac{x^m}{1-x}, \ m \in \mathbb{Z}_{\geqslant 0}. && (4) \ f(x) = x^m e^x, \ m \in \mathbb{Z}_{\geqslant 0}.\\
      & (5) \ f(x) = e^{ax} \sin (bx), \ a, b\in \mathbb{R}. && (6) \ f(x) = e^{-x^2}.
    \end{aligned}
    \]

A8) 如果函数 $f$ 在点 $x_0$ 处的导数 $>0$，不能推出存在该点的邻域 $U$，
    使得 $f$ 在这个邻域上是递增的：考虑函数
    \[
    f(x)=\begin{cases}
    x+2x^2\sin\left(\frac{1}{x}\right), \ \ &x\neq 0;\\
    0, \ \ &x=0.
    \end{cases}
    \]

    ![](MathAnalysis_HW6P1.png?width=400)

    证明，$f$ 在 $0$ 处导数存在且大于零，但是对任意的 $\varepsilon>0$，
    $f$ 在 $(-\varepsilon,\varepsilon)$ 上的限制都不是单调函数。

A9) （重要）$\mathbf{I}_n$ 是 $n\times n$ 的单位矩阵，$A\in \mathbf{M}_n(\mathbb{R})$，
    计算 $\dfrac{d}{dx}\Big|_{x=0}\operatorname{det} (\mathbf{I}+xA)$，
    即 $\operatorname{det} (\mathbf{I}+xA)$ 在 $x=0$ 处的导数。

A10) 证明，（可微的）奇函数的导数是偶函数，（可微的）偶函数的导数是奇函数。

A11) 证明，Riemann 函数 $
     f(x) = \begin{cases}
     1/q, &x = \dfrac{p}{q} \in \mathbb{Q}, q\geqslant 1, p~\text{和}~q~\text{互素};\\
     0, & x~\text{是无理数}.
     \end{cases}$ 在 $\mathbb{R}$ 上处处不可微。

### 习题B

B1) 定义双曲函数：
    \[
    \begin{aligned}
      \sinh x = \frac{e^x  - e^{-x}}{2}, \quad \cosh x = \frac{e^x  + e^{-x}}{2}, \quad \tanh x = \frac{\sinh x}{\cosh x}.
      \end{aligned}
    \]

    1. 证明，
       \[
       \begin{aligned}
       & (1)~\cosh^2 x - \sinh^2 x = 1. && (2)~\sinh (x+y) = \sinh x \cosh y + \cosh x \sinh y.\\
       & (3)~\cosh (x+y) = \cosh x \cosh y + \sinh x \sinh y. && (4)~\tanh(x+y) = \frac{\tanh x + \tanh y}{1 + \tanh x \tanh y}.
       \end{aligned}
       \]

    2. 求导数 $\sinh'(x)$，$\cosh'(x)$ 和 $\tanh'(x)$。

    3. 证明，
       存在 $\sinh\colon  \mathbb{R} \to \mathbb{R}$ 的反函数
       $\operatorname{arcsinh}\colon  \mathbb{R} \to \mathbb{R}$ 并计算
       $\operatorname{arcsinh}'(x)$。

B2) 设 $a, b \in \mathbb{R}$，$b > 0$，考察函数 $f\colon  [-1,1] \to \mathbb{R}$，其中
    \[
    f(x) = \begin{cases}
    x^a \sin(x^{-b}), \qquad&\text{如果} x \neq 0,\\
    0,\qquad&\text{如果} x = 0.
    \end{cases}
    \]
    证明，下述关于 $f$ 的结论都成立：

    1. $f \in C([-1,1])$ 当且仅当 $a>0$；

    2. $f$ 在 $0$ 处可微当且仅当 $a>1$；

    3. $f'$ 在 $[-1,1]$ 上有界当且仅当 $a\geqslant 1+b$；

    4. $f \in C^1([-1,1])$ 当且仅当 $a > 1+b$；

    5. $f'$ 在 $0$ 处可微当且仅当 $a>2+b$；

    6. $f''$ 在 $[-1,1]$ 上有界当且仅当 $a\geqslant 2+2b$；

    7. $f \in C^2([-1,1])$ 上有界当且仅当 $a >  2+2b$。

### 习题C：无穷小量与无穷大量的阶的比较

如果函数 $f$ 在 $x_0$ 的附近（即某个 $x_0$ 的开邻域去掉 $x_0$）满足
$\displaystyle\lim_{x \to x_0} f(x) = 0$，我们就称 $f$ 是 $x \to x_0$ 时的**无穷小量**；类似地，
如果 $\displaystyle\lim_{x \to x_0} f(x) = +\infty$ 或者
$\displaystyle\lim_{x \to x_0} f(x) = -\infty$（其注意我们用的“或者”这个词的含义），
我们就称 $f$ 是 $x \to x_0$ 时的**无穷大量**。

现在假设 $f, g$ 都是 $x \to x_0$ 时的无穷小量并且 $g(x)$ 在 $x_0$ 的附近不取零值，我们现在引进记号：

- 如果 $\displaystyle\lim_{x \to x_0}\frac{f(x)}{g(x)} = 0$，我们就称 $f$ 是比 $g$ 高阶的无穷小，
  记作 $f(x) = o(g(x)), x \to x_0$；

- 如果 $\displaystyle\lim_{x \to x_0}\frac{f(x)}{g(x)} = \ell, \ell \neq 0$，
  我们就称 $f$ 是与 $g$ 同阶的无穷小；

- 特别地，如果 $f$ 与 $g$ 同阶并且 $\ell = 1$，我们就称 $f$ 是与 $g$ 等价的无穷小，
  记作 $f(x) \sim g(x), x \to x_0$；

- 如果 $\displaystyle\limsup_{x \to x_0}\frac{|f(x)|}{|g(x)|} < +\infty$，
  我们将这种情况记作 $f(x) = O(g(x)),  x \to x_0$。

类似地，我们可以定义无穷大量的阶之间的比较。这是通用的术语，同学们可参考任一本参考书或者网络。

C1) 假设 $x \to x_0$ 时，函数 $a(x)$ 满足 $a = o(1)$。试证明：
    \[
    \begin{aligned}
      & (1)~o(a) + o(a) = o(a) && (2)~ o(ca) = co(a), \quad c \in \mathbb{R}\\
      & (3) ~o(a)^k = o(a^k), && (4)~ \frac{1}{1+a} = 1 - a + o(a).
      \end{aligned}
    \]

C2) 假设 $f(x), g(x)$ 是 $x \to x_0$ 时的无穷小，那么

    1. 证明，$f(x) \sim g(x) \iff f(x) - g(x) = o(g(x)), \quad x \to x_0$。

    2. 如果把 $g$ 作为基本的比较单位（小量），
       我们可以将另外的无穷小量与 $g(x)^k$（$k$ 是正整数）进行比较。
       如果 $f(x) \sim c g(x)^k$，我们就称 $c g^k$ 是 $f$ 的主部（这里 $c$ 是常数）。
       试定出下列无穷小或无穷大的主部（与 $x-x_0$ 或者 $x$ 比较）：
       \[
       \begin{aligned}
       & (1) ~\frac{1}{\sin \pi x}, \quad x \to 1. && (2)~ \sqrt{1+x} - \sqrt{1-x}, \quad x \to 0.\\
       & (3)~ \sin \left(\sqrt{1 + \sqrt{1+ \sqrt{x}}}  - \sqrt{2}\right), \quad x \to 0^+. && (4) ~\sqrt{1 + \tan x} - \sqrt{1 - \sin x}, \quad x\to 0.\\
       & (5)~ \sqrt{x + \sqrt{x + \sqrt{x}}}, \quad x \to 0^+. && (6) \sqrt{x + \sqrt{x + \sqrt{x}}}, \quad x \to +\infty.
       \end{aligned}
       \]

    3. 我们假设 $f(x) \sim c x^k, x \to 0$（即 $f(x) = c x^k + o(x^k)$）。
       如果 $f(x) - c x^k$ 可以再分出主部 $c'x^{k'}$，其中 $k' > k$，
       那么我们就将它写为 $f(x) = c x^k + c' x^{k'} + o(x^{k'}) $。试将下列无穷小展开到 $o(x^2)$：
       \[
       \begin{aligned}
       & (1)~ \sqrt{1 + x} - 1, && (2)~ \sqrt[m]{1+x} - 1, m \in \mathbb{Z}_{\geqslant 1}.
       \end{aligned}
       \]

## 习题T（思考题，不交作业）：处处连续处处不可微的Takagi（高木贞治）函数，1903

我们先在 $[0,1]$ 区间上定义 $\psi(x)=\begin{cases}
x, \ \ \ \ 0\leqslant x <\dfrac{1}{2};\\
1-x, \  \ \dfrac{1}{2}\leqslant x \leqslant 1.
\end{cases}$
接下来，以 $1$ 为周期，
我们可以将 $\psi$ 延拓成 $\mathbb{R}$ 上的周期函数（连续）并且仍然将它记作 $\psi$，
它的函数图像好像是锯齿一般：

![](MathAnalysis_HW6T0.png?width=1000)

我们定义Takagi函数 $T\colon \mathbb{R}\rightarrow \mathbb{R}$ 如下：
\[
T(x)=\sum_{k=0}^\infty \frac{1}{2^k}\psi(2^k x).
\]
我们实际上可以考虑*部分和*$\displaystyle T_n(x)=\sum_{k=0}^n \frac{1}{2^k}\psi(2^k x)$。
当 $n=1,2,3$ 时，它们的图像如下：

![](MathAnalysis_HW6T1.png?width=1000)

当 $n$ 越来越大的时候，它们的图像看起来逐渐地收敛：

![](MathAnalysis_HW6T2.png?width=500)

这个习题的目标是粗略地研究Takagi函数的性质。

T1) 证明，$T(x)$ 是 $\mathbb{R}$ 上良好定义的有界连续函数。它图像貌似：

    ![](MathAnalysis_HW6T3.png?width=600)

T2) 对于 $x\in [0,1]$，
    假设 $x=\displaystyle\sum_{n=1}^\infty \frac{a_n}{2^n}$ 是 $x$ 的 $2$-进制展开，
    其中 $a_n=0$ 或者 $1$。我们令 $v_n=\displaystyle\sum_{k=1}^n a_k$。
    我们定义函数 $\sigma_n(y)=a_n+(1-2a_n)y$，其中 $y=0$ 或者 $1$。证明，
    \[
    \psi(2^m x)=\sum_{n=1}^\infty\frac{\sigma_{m+1}(a_{m+n})}{2^n}.
    \]

T3) 对于 $x\in [0,1]$，
    假设 $x=\displaystyle\sum_{n=1}^\infty \frac{a_n}{2^n}$ 是 $x$ 的 $2$-进制展开。证明，
    \[
    T(x)=\sum_{n=1}^\infty\frac{(1-a_n)v_n+a_n(n-v_n)}{2^n}.
    \]

T4) 假设 $x_0=\dfrac{k_0}{2^{m_0}}\in(0,1]$，其中 $k_0\in\mathbb{Z}_{\geqslant 1}$ 是奇数，
    $m_0\in \mathbb{Z}_{\geqslant 0}$。
    令 $h_n=\dfrac{1}{2^n}$，其中 $n\in \mathbb{Z}_{\geqslant m_0}$。
    证明，数列 $\bigl\{\dfrac{T(x+h_n)-T(x)}{h_n}\bigr\}_{n\geqslant m_0}$ 不收敛。

T5) $f$ 是定义在非空的开区间 $I$ 上实数值函数。如果 $f$ 在 $a$ 处可导，证明，
    \[
    \lim_{(h,h')\rightarrow (0,0), \atop \\ h>0,h'>0}\frac{f(a+h)-f(a-h')}{h+h'}=f'(a),
    \]
    这里极限 $\displaystyle \lim_{(h,h')\rightarrow (0,0), \atop \\ h>0,h'>0}$
    的意义指的是任意的序列
    $(h_n,h'_n)\rightarrow (0,0),  h_n>0,h'_n>0$ 所对应的序列都收敛。

T6) $f$ 是定义在非空的开区间 $I$ 上实数值函数。假设 $f\in C^1(I)$（连续可微），$a\in I$，证明，
    \[
    \lim_{(h,h')\rightarrow (0,0), \atop h+h'\neq 0}\frac{f(a+h)-f(a-h')}{h+h'}=f'(a).
    \]

T7) 假设 $x\in [0,1]$，使得对任意的正整数 $n$，$2^n x$ 都不是整数。
    对于每个正整数 $n$，
    我们用下面的公式定义序列 $\{h_n\}_{n \geqslant 1}$ 和 $\{h'_n\}_{n \geqslant 1}$：
    \[
    \left\lfloor {2^n x} \right\rfloor=2^n(x-h'_n), \ \ \left\lfloor {2^n x} \right\rfloor+1=2^n(x+h_n),
    \]
    其中函数 $\left\lfloor {y} \right\rfloor$ 按照定义是不超过 $y$ 的最大的整数（即 $y$
    的整数部分（如果 $y\geqslant 0$））。
    证明，对每个给定的 $n$，$h_n+h'_n=2^{-n}$ 并且对每个整数 $1\leqslant \ell \leqslant n-1$，
    开区间 $\bigl(2^\ell(x-h'_n),2^\ell(x+h_n)\bigr)$ 中不包含任何的整数和半整数。

T8) 假设 $x\in [0,1]$，使得对任意的正整数 $n$，$2^n x$ 都不是整数，我们沿用 T7) 中的符号，证明，
    数列 $\Bigl\{\dfrac{T(x+h_n)-T(x-h'_n)}{h_n+h'_n}\Bigr\}_{n\geqslant 1}$ 不收敛。

T9) 证明，$T(x)$ 是 $\mathbb{R}$ 上处处连续处处不可微的函数。

T10) 证明，我们有如下的函数方程：
     \[
     T(x)=\begin{cases}
     2x+\dfrac{T(4x)}{4},\ \ 0\leqslant x <\dfrac{1}{4};\\
     \dfrac{1}{2}+\dfrac{T(4x-1)}{4},\ \ \dfrac{1}{4}\leqslant x <\dfrac{1}{2};\\
     \dfrac{1}{2}+\dfrac{T(4x-2)}{4},\ \ \dfrac{1}{2}\leqslant x <\dfrac{3}{4};\\
     2-2x+\dfrac{T(4x-3)}{4},\ \ \dfrac{3}{4}\leqslant x \leqslant 1.
     \end{cases}
     \]

T11) （Takagi函数图像的自相似性）令
     $\Gamma=\bigl\{(x,T(x))\mid 0\leqslant x\leqslant 1\bigr\}\subset \mathbb{R}^2$ 是 $T$ 在区间
     $[0,1]$ 上的函数图像。
     我们定义如下四个仿射变换 $\Phi_i\colon \mathbb{R}^2\rightarrow \mathbb{R}^2$：
     \[
     \begin{aligned}
     \Phi_0 \left(\begin{array}{ccc}
     x  \\
     y
     \end{array} \right)&= \left(\begin{array}{ccc}
     \frac{1}{4} & 0  \\
     \frac{1}{2} & \frac{1}{4}
     \end{array} \right)\left(\begin{array}{ccc}
     x  \\
     y
     \end{array} \right), &&\Phi_1 \left(\begin{array}{ccc}
     x  \\
     y
     \end{array} \right)= \left(\begin{array}{ccc}
     \frac{1}{4} & 0  \\
     0 & \frac{1}{4}
     \end{array} \right)\left(\begin{array}{ccc}
     x  \\
     y
     \end{array} \right)+\left(\begin{array}{ccc}
     \frac{1}{4}  \\
     \frac{1}{2}
     \end{array}\right),\\
     \Phi_2 \left(\begin{array}{ccc}
     x  \\
     y
     \end{array} \right)&= \left(\begin{array}{ccc}
     \frac{1}{4} & 0  \\
     0 & \frac{1}{4}
     \end{array} \right)\left(\begin{array}{ccc}
     x  \\
     y
     \end{array} \right)+\left(\begin{array}{ccc}
     \frac{1}{2}  \\
     \frac{1}{2}
     \end{array}\right),  &&\Phi_3 \left(\begin{array}{ccc}
     x  \\
     y
     \end{array} \right)= \left(\begin{array}{ccc}
     \frac{1}{4} & 0  \\
     -\frac{1}{2} & \frac{1}{4}
     \end{array} \right)\left(\begin{array}{ccc}
     x  \\
     y
     \end{array} \right)+\left(\begin{array}{ccc}
     \frac{3}{4}  \\
     \frac{1}{2}
     \end{array}\right).
     \end{aligned}
     \]
     证明，$\Phi_i$ 恰好把 $\Gamma$ 变成 $T$ 在区间 $[\dfrac{i}{4},\dfrac{i+1}{4}]$ 上的图像，
     其中 $i=0,1,2,3$。

T12) 令 $S_0=\{(x,y)\in \mathbb{R}^2 \mid 0\leqslant x\leqslant 1, 0\leqslant y \leqslant 1\}$ 是
     $\mathbb{R}^2$ 上的闭方块。
     对每个 $n\geqslant 0$，我们定义 $\displaystyle S_{n+1}=\bigcup_{k=0}^3\Phi_k(S_n)$。
     证明，$S_n$ 是平面上一列单调下降的紧集并且 $\displaystyle  \Gamma=\bigcap_{n\geqslant 0}S_n$。
     我们有 $S_1$ 和 $S_2$ 的示意图：

     ![](MathAnalysis_HW6T5.png?width=700)

T13) 证明，$\displaystyle\sup_{x\in \mathbb{R}}T(x) \leqslant \dfrac{2}{3}$。

T14) 找一个 $c\in [0,1]$，使得 $T(c)=\dfrac{2}{3}$。

T15) （$T^{-1}(\dfrac{2}{3})$ 的Cantor集的结构）对于 $x\in [0,1]$，
     假设 $x=\displaystyle\sum_{n=1}^\infty \frac{b_n}{4^n}$ 是 $x$ 的 $4$-进制展开，
     其中 $b_n=0,1,2,3$。证明，
     \[
     \Bigl\{x\in [0,1]\bigm| T(x)=\dfrac{2}{3}\Bigr\}=\Bigl\{x\in [0,1]\bigm| x=\sum_{n=1}^\infty \frac{b_n}{4^n}, b_n\in \{1,2\}\Bigr\}.
     \]

T16) 仿照T11)，
     研究 $\Phi_1$ 和 $\Phi_2$ 在集合 $\bigl\{(x,T(x))\bigm| x\in [0,1],T(x)=\dfrac{2}{3}\bigr\}$
     上自相似的作用。（这是一个Hausdorff维数为 $\dfrac{1}{2}$ 的集合）。
