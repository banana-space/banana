---
title: 作业：Émile Borel 引理，Peano 的证明
---

## 基本习题

### 习题A：中值定理和Taylor展开

如果不额外说明，$f$ 总代表一个区间 $I$ 上定义的函数。

- A1) 设 $f$ 在点 $x$ 处有二阶导数。证明，下面的极限给出了二阶导数：
  \[
  \begin{aligned}
    f''(x) = \lim_{h \to 0} \frac{f(x+h) + f(x-h) - 2f(x)}{h^2}
    \end{aligned}
  \]

- A2)（Taylor 展开式的唯一性，Peano余项）。
  假设 $f$ 是在 $x_0$ 附近的函数，并且当 $x\rightarrow x_0$ 时，满足
  \[
  \begin{aligned}
    f(x) &= a_0 + a_1 (x-x_0) + a_2 (x-x_0)^2 + \cdots + a_n (x-x_0)^n + o(|x-x_0|^n)\\
    &= b_0 + b_1 (x-x_0) + b_2 (x-x_0)^2 + \cdots + b_n (x-x_0)^n + o(|x-x_0|^n)
    \end{aligned}
  \]
  其中 $a_i, b_i, i=0,\cdots,n$ 是实数，那么，对任意的 $i$，我们都有 $a_i=b_i$。

- A3) 假设 $f$ 在 $0$ 处有 $n$ 阶导数。
  证明，如果 $f(x)$ 是偶函数（奇函数），
  $f$ 在 $0$ 处的Taylor展开式（Peano余项）中只有 $x$ 的偶次项（奇数项）。

- A4)（Rolle定理的简单推广）设函数 $f$ 在有限或无穷的区间 $(a,b)$ 上可微并且
  $\displaystyle\lim_{x \to a^+} f(x) = \lim_{x \to b^-} f(x)$。
  证明，存在 $x_0 \in (a,b)$，使得 $f'(x_0) = 0$。

- A5) 设函数 $f \in C^0([a,b])$ 并且在 $(a,b)$ 上可微。
  证明，$f$ 在 $[a,b]$ 上严格递增的充分必要条件是对任意 $x\in (a,b)$，
  $f'(x) \geqslant 0$ 并且在任意子区间 $(c,d) \subset (a,b)$ 上，$f'(x)$ 不恒等于 $0$。

- A6) $g\in C(\mathbb{R})$ 在 $\mathbb{R}$ 上可微。
  假设存在常数 $M$，使得 $\displaystyle\sup_{x \in \mathbb{R}}|g'(x)| \leqslant M$。
  对任意的 $\varepsilon > 0$，我们定义
  \[
  f_\varepsilon(x) = x + \varepsilon g(x).
  \]
  证明，存在仅依赖于 $M$ 的常数 $\delta = \delta(M) > 0$，使得当 $\varepsilon < \delta$ 时，
  $f\colon  \mathbb{R} \rightarrow \mathbb{R}$ 是双射。

- A7) 设函数 $f$ 在 $[a,b]$ 上有两阶导数并且 $f'(a) = f'(b) = 0$。证明，存在 $c \in (a,b)$ 使得
  \[
  |f''(c)| \geqslant \frac{4}{(b-a)^2}|f(b) - f(a)|
  \]

- A8) 假设 $f$ 在 $\mathbb{R}$ 上二次可导，对 $k=0,1,2$，
  我们假设 $M_k = \displaystyle\sup_{x \in \mathbb{R}} |f^{(k)}(x)|$ 都是有限的。
  证明，$M_1^2 \leqslant 2 M_0 M_2$。

- A9) 假设 $f$ 在 $(0,+\infty)$ 上二次可导，
  $f''$ 在 $(0,+\infty)$ 上有界并且 $\displaystyle\lim_{x \rightarrow +\infty} f(x) = 0$。
  证明，$\displaystyle\lim_{x \to +\infty} f'(x) = 0$。

### 习题B：L'Hôpital 法则

用L'Hôpital法则求极限：
\[
\begin{aligned}
 (1) & \lim_{x \to +\infty} \frac{\log x}{x^a}, \quad a > 0 & & (2) \lim_{x \to +\infty} \frac{x^a}{b^x}, \quad a > 0, b> 1 & &(3) \lim_{x \to 0} \frac{e^{ax} - e^{bx} }{\sin ax - \sin bx} \\
  (4)&  \lim_{x \to 0} \frac{\tan x - x}{x - \sin x} & & (5) \lim_{x \to 0} \frac{1 - \cos x^2}{x^2 \sin x^2}& & (6) \lim_{x \to 1} \frac{\sqrt{2x - x^4} - \sqrt[3]{x}}{1 - x^{4/3}} \\
 (7)&  \lim_{x \to 1^-} \log (x) \log (1-x) && (8) \lim_{x \to 0^+} \frac{\log \sin ax}{\log \sin bx}, \quad a,b >0  & &  (9) \lim_{x \to 0^+} x^x\\
  (10)  & \lim_{x \to 1} x^{\frac{1}{1-x}}  & & (11) \lim_{x \to 1} \left(\frac{1}{\log x}  - \frac{1}{x-1}\right) & & (12) \lim_{x \to 0^+} (\sin x)^x \\
 (13) & \lim_{x \to 0} \left(\frac{\sin x}{x}\right)^{1/(1 - \cos x)}  & & (14) \lim_{x \to a} \frac{a^x - x^a}{x-a}, \quad a > 0 & & (15) \lim_{x \to +\infty} \frac{(1+1/x)^x - e}{1/x}\\
  (16) & \lim_{x \to +\infty}\frac{x^{\log x}}{(\log x)^x} & & (17) \lim_{x \to +\infty}\left[(x+a)^{1 + 1/x} - x^{1 + \frac{1}{x+a}}\right]
\end{aligned}
\]
\[
(18)  \lim_{x \to +\infty} \left[ \sqrt[3]{x^3 + x^2 + x +1} - \sqrt{x^2 + x +1} \cdot \frac{\log(e^x + x)}{x}\right]
\]

### 习题C：函数最值

求下列函数在给定区间上的最大值和最小值：

- 1\) $f(x) = x^4 - 2x^2 + 5$，$x\in  [-2,2]$；2) $f(x) = \dfrac{2x}{1+x^2}$，$x \in \mathbb{R}$；

- 3\) $f(x) = \arctan x - \dfrac{1}{2} \log(1+x^2)$；4)  $f(x) = x\log x$，$x \in  (0,+\infty)$；

- 5\) $f(x) = \sqrt{x} \log x$，$x \in  (0,+\infty)$；6) $f(x) = 2\tan x - \tan^2 x$，
  $x \in [0, \frac \pi 2)$。

### 习题D：极大值的判定，重要

$f$ 在 $(a,b)$ 上可微。假设对于 $x_0 \in (a,b)$，我们有 $f'(x_0) = 0$。

- D1) 证明，$f$ 在 $x_0$ 处取局部极大值的一个充分条件是：
  存在某一邻域 $(x_0 - \delta, x_0 + \delta) \subset (a,b)$，使得
  \[
  f'(x)= \begin{cases}
  > 0, \ \text{对所有的}~x \in (x_0-\delta, x_0);\\
   < 0, \ \text{对所有的}~ x \in (x_0, x_0+\delta).
  \end{cases}
  \]

- D2)（最重要的判别方法，有很多应用）证明，如果 $f''(x_0)$ 存在并且 $f''(x_0) < 0$，
  那么 $f$ 在 $x_0$ 处取局部极大值。

- D3) 假定 $f$ 在 $x_0$ 处有 $n$ 阶导数，
  $f'(x_0) = \cdots = f^{(n-1)}(x_0) = 0$ 并且 $f^{(n)}(x_0) \neq 0$，
  试讨论 $f$ 在 $x_0$ 处取局部极大值的条件（对 $n$ 分奇偶讨论）。

### 习题E：多项式的根

（提示：利用中值定理和 $n$-次的多项式至多（恰好）有 $n$ 个根）

- E1) 证明，
  如果实系数多项式 $P_n(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_0$ 的根都是实数（不妨设
  $a_n\neq 0$），那么它的逐次导函数 $P_n'(x)$、$P_n''(x)$、$\cdots$、
  $P_n^{(n-1)}(x)$ 的根也都是实数。

- E2) 证明，
  Legendre 多项式 $P_n(x) = \dfrac{1}{2^n n!} \dfrac{d^n}{dx^n}(x^2 - 1)^n$
  的根都是实数并且包含于区间 $(-1,1)$ 中。

- E3) 证明，
  $L_n(x) = \dfrac{e^x}{n!} \dfrac{d^n}{dx^n}(e^{-x}x^n)$
  是多项式（被称作是Laguerre多项式）并且它所有的根都是正实数。

- E4) 证明，
  $H_n(x) = (-1)^n e^{x^2} \dfrac{d^n}{dx^n}(e^{-x^2})$
  是多项式（被称作是Hermite 多项式）并且它所有的根都是实数。

### 习题F：Émile Borel引理

第一部分：截断函数的构造

- F1) 定义函数 $\phi\colon \mathbb{R}\rightarrow \mathbb{R}$：
  \[
  \phi(x)=\begin{cases}
  e^{-\frac{1}{x^2}}, \ \ x>0;\\
  0, \ \ \ \ x\leqslant 0.
  \end{cases}
  \]
  证明，$\phi\in C^\infty(\mathbb{R})$。

- F2) 定义函数 $\chi\colon \mathbb{R}\rightarrow \mathbb{R}$：
  \[
  \chi(x)=\frac{\phi(2-|x|)}{\phi(2-|x|)+\phi(|x|-1).}
  \]
  证明，$\chi(x)\in C^\infty(\mathbb{R})$ 并且 $\chi\big|_{[-1,1]}\equiv 1$，
  $\chi\big|_{(-\infty,-2]\cup [2,\infty)}\equiv 0$，$0\leqslant \chi(x)\leqslant 1$ 并且是偶函数。

- F3) 证明，对任意的 $0<a<b$，存在光滑偶函数 $\rho(x)\in C^\infty(\mathbb{R})$，
  使得 $\rho\big|_{[-a,a]}\equiv 1$，$\rho\big|_{(-\infty,-b]\cup [b,\infty)}\equiv 0$，
  $0\leqslant \rho(x)\leqslant 1$。

  ![](MathAnalysis_HW7T0.png?width=400)

- F4) 证明，存在偶函数 $\psi \in C^\infty(\mathbb{R}^n)$，
  使得 $\psi\big|_{\{x\mid|x|\leqslant 1\}}\equiv 1$，
  $\psi\big|_{\{x\mid|x|\geqslant 2\}}\equiv 0$，$0\leqslant \psi(x )\leqslant 1$。

第二部分：逐项求导定理

$I=[a,b]$ 是闭区间，$\{f_k\}_{k\geqslant 0}$ 是 $C^1(I)$ 的一列函数，
我们假设 $\displaystyle \sum_{k=0}^\infty f_k$ 在 $I$ 上逐点收敛，即对任意的 $x\in I$，
$\displaystyle \sum_{k=0}^\infty f_k(x)$ 收敛，
我们记 $f(x)=\displaystyle \sum_{k=0}^\infty f_k(x)$。

- F5) 我们假设函数级数 $\displaystyle \sum_{k=0}^\infty f'_k(x)$ 在 $I$ 上绝对收敛，
  即数项的级数 $\displaystyle \sum_{k=0}^\infty \|f'_k\|_\infty$ 收敛，
  其中 $\displaystyle \|f\|_\infty=\sup_{x\in I}|f(x)|$。
  证明，$f$ 是可导的并且 $f'(x)=\displaystyle \sum_{k=0}^\infty f'_k(x)$。
  （提示：
  设法将求和拆成
  $\displaystyle \sum_{k=0}^\infty = \sum_{k=0}^N+\displaystyle \sum_{k=N+1}^\infty$）

- F6)（逐项求导定理）$I=[a,b]$ 是闭区间，$\{f_k\}_{k\geqslant 0}$ 是 $C^1(I)$ 的一列函数，
  我们假设 $\displaystyle \sum_{k=0}^\infty f_k$ 在 $I$ 上逐点收敛。
  如果函数级数 $\displaystyle \sum_{k=0}^\infty f'_k(x)$ 在 $I$ 上一致收敛，
  那么 $f$ 是可导的并且 $f'(x)=\displaystyle \sum_{k=0}^\infty f'_k(x)$。

- F7) 试利用逐项求导定理计算 $e^x$ 的导数。

第三部分：Borel引理的证明

我们现在任意给定一个数列 $\{a_k\}_{k\geqslant 0}$。

- F8) 对任意给定的正数 $t_k>0$，
  试计算函数 $f_k(x)=\dfrac{a_k}{k!}x^k\chi(t_k x)$ 在 $x=0$ 处的任意阶导数（包括零阶）。

- F9) 证明，当 $k\geqslant 2n$ 时，我们有
  \[
  f_k^{(n)}(x)=a_k\sum_{\ell=0}^n{n \choose \ell}\frac{t_k^{n-\ell}}{(k-\ell)!}x^{k-\ell}\chi^{(n-\ell)}(t_k x).
  \]

- F10)（Borel引理）任意给定一个数列 $\{a_k\}_{k\geqslant 0}$，证明，
  存在 $\mathbb{R}$ 上的光滑函数 $f$，使得对任意的 $k\geqslant 0$，$f^{(k)}(0)=a_k$。
  （提示：略难。）

第四部分：Peano对Borel引理的证明（选做部分，不交作业）

- F11) $\{c_k\}_{k\geqslant 0}$ 和 $\{b_k\}_{k\geqslant 0}$ 是两个序列，其中 $b_k$ 都是正数。证明，
  \[
  \Bigl(\frac{c_k x^k}{1+b_k x^2}\Bigr)^{(n)}(0)=\begin{cases}
  n!(-1)^jc_{n-2j}b_{n-2j}^j, \ \text{若}~k=n-2j, j\in \mathbb{Z}_{\geqslant 0};\\
  0, \ \ \ \text{其它情形}.
  \end{cases}
  \]

- F12) 证明，存在常数 $C$，对任意的 $k\geqslant n+2$，对任意的 $x$，我们有
  \[
  \Big|\Bigl(\frac{c_k x^k}{1+b_k x^2}\Bigr)^{(n)}(x)\Big|\leqslant C(n+1)!\frac{|c_k|k!}{b_k}|x|^{k-n-2}.
  \]

- F13) 证明，当 $\{c_k\}_{k\geqslant 0}$ 给定的时候，我们可以选取 $b_k$，
  使得 $b_k$ 仅依赖于 $c_k$ 的选取，
  并且函数级数 $\displaystyle f(x)=\sum_{k=0}^\infty \frac{c_k x^k}{1+b_k x^2}$ 是无限次可微分的。

- F14) 证明，$f(0)=c_0$，$f'(0)=c_1$，并且当 $n\geqslant 2$ 时，我们有
  \[
  \frac{f^{(n)}(0)}{n!}=c_n+\sum_{j=1}^{\left\lfloor {\frac{n}{2}} \right\rfloor}(-1)^jc_{n-2j}b_{n-2j}^j.
  \]

- F15) 证明，
  我们可以通过恰当的选取 $\{c_k\}_{k\geqslant 0}$ 和 $\{b_k\}_{k\geqslant 0}$ 来证明Borel引理。

## 期中考试题目B

**以下为上学期期中考试的B部分，供同学参考，不交作业**

考虑在整个实数上定义的函数 $f\colon \mathbb{R}\rightarrow \mathbb{R}$。

- 如果存在正实数 $A$（不是无穷），使得对任意的 $x\in \mathbb{R}$，都有 $|f(x)|\leqslant A$，
  我们就称 $f$ 是有界的。我们将 $\mathbb{R}$ 上定义的所有有界函数的集合记作 $\mathcal{B}$。

- 如果存在正实数 $B$（不是无穷），使得对任意的 $x,y \in \mathbb{R}$，
  都有 $|f(x)-f(y)|\leqslant B|x-y|$，我们就称 $f$ 是Lipschitz函数。
  我们将 $\mathbb{R}$ 上定义的所有Lipschitz函数的集合记作 $\mathcal{L}$。

假设 $a,\lambda \in\mathbb{R}$，$f\in \mathcal{B}\cap \mathcal{L}$，
这个问题的目的是找到一个函数 $F\in \mathcal{L}$ 来解下面的函数方程：
\[
F(x)-\lambda F(x+a)=f(x), \ \ x\in \mathbb{R}. \tag{$\star$}
\]

### 第一部分：Lipschitz函数的基本性质

- B1) 证明，如果 $f,g\in \mathcal{B}\cap \mathcal{L}$，那么它们的乘积 $fg\in \mathcal{L}$。

- B2) 证明，如果 $f$ 是 $\mathbb{R}$ 上的可微函数并且 $f\in \mathcal{L}$，那么 $f'\in \mathcal{B}$。

- B3) 证明，如果 $f$ 是 $\mathbb{R}$ 上的可微函数并且 $f'\in \mathcal{B}$，那么 $f\in \mathcal{L}$。

- B4) 如果 $f\in \mathcal{B}$ 并且存在正实数 $B$，使得对任意的 $x,y \in \mathbb{R}$，
  $|x-y|\leqslant 1$，我们都有 $|f(x)-f(y)|\leqslant B|x-y|$，证明，$f\in \mathcal{L}$。

### 第二部分：$|\lambda|< 1$ 时方程 $(\star)$ 的解

此后我们设 $f\in\mathcal{B}\cap\mathcal{L}$。我们在这一部分假设 $|\lambda|<1$。

- B5) 假设 $F$ 满足 $(\star)$，证明，对任意的 $x\in \mathbb{R}$ 和 $n\in \mathbb{Z}_{\geqslant 1}$，
  我们都有
  \[
  F(x)=\lambda^n F(x+na)+\sum_{k=0}^{n-1}\lambda^k 	f(x+ka) \ \ \text{和} \ \ F(x)=\lambda^{-n} F(x-na)-\sum_{k=1}^{n}\lambda^{-k}f(x-ka).
  \]
  请任选其一来证明即可。

- B6) 证明，对任意的 $x\in \mathbb{R}$，
  级数 $\displaystyle \sum_{k\geqslant 0}\lambda^kf(x+ka)$ 是收敛的。

- B7) 根据上述，对每个 $x\in \mathbb{R}$，
  我们定义 $F(x)=\displaystyle \sum_{k\geqslant 0}\lambda^kf(x+ka)$。
  证明，$F\in \mathcal{L}$ 并且解方程 $(\star)$。

- B8) 证明，如果 $F_1,F_2\in \mathcal{L}$ 都满足方程 $(\star)$，那么 $F_1=F_2$。

- B9) 在 $(\star)$ 中取函数 $f(x)\equiv 1$，试求方程的解 $F_1$；

  在 $(\star)$ 中取函数 $f(x)=\cos(x)$，证明，
  $F_2(x)=\dfrac{\cos(x)-\lambda\cos(x-a)}{1-2\lambda \cos(a)+\lambda^2}$ 是 $(\star)$ 的解。

### 第三部分：$|\lambda|> 1$ 时方程 $(\star)$ 的解

- B10) 参照第二部分的结论，试陈述当 $|\lambda|>1$ 时应当如何来解方程。你的陈述不要超过100个汉字。

- B11) 当 $|\lambda|> 1$ 时，在 $(\star)$ 中取函数 $f(x)\equiv 1$，试求方程的解 $F_1$；
  当 $|\lambda|> 1$ 时，在 $(\star)$ 中取函数 $f(x)=\cos(x)$，试求 $(\star)$ 的解 $F_2(x)$。

### 第四部分：$|\lambda|=1$ 时的情形

- B12) 假设 $\lambda=1$。
  证明，存在非零的函数 $F\in \mathcal{L}$，使得对任意的 $x$，我们都有 $F(x)-F(x+a)=0$。

- B13) 假设 $\lambda=1$。在 $(\star)$ 中取函数 $f(x)=\cos(x)$。
  证明，如果 $\cos(a)\neq 1$，那么存在 $F\in \mathcal{L}$ 是 $(\star)$ 的解。
  进一步阐述这个解是否唯一？

- B14) 假设 $\lambda=1$。在 $(\star)$ 中取函数 $f(x)=\cos(x)$。
  证明，如果 $a=2\pi$，那么我们不能在 $\mathcal{L}$ 中找到 $F$，使得 $F$ 是 $(\star)$ 的解。

- B15) 假设 $\lambda=-1$。
  证明，存在非零的函数 $F\in \mathcal{L}$，使得对任意的 $x$，我们都有 $F(x)+F(x+a)=0$。

- B16) 假设 $\lambda=-1$，$a=1$，$f\in \mathcal{L}$，
  $f$ 是递减的并且 $\displaystyle\lim_{x\rightarrow +\infty}f(x)=0$，$f$ 可微并且 $f'$ 是递增的。
  证明，存在 $F\in \mathcal{L}$，解如下方程：
  \[
  F(x)+ F(x+1)=f(x), \ \ x\in \mathbb{R}.
  \]
  进一步，如果我们要求 $F\in \mathcal{L}$ 并且 $\displaystyle\lim_{x\rightarrow +\infty}F(x)=0$，
  那么这样的解是存在唯一的。
