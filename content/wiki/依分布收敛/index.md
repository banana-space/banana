---
title: 依分布收敛
categories: [概率论]
notices:
  - name: 问题
    items:
      - 待扩充至多元情形并重写相关定义与证明。
      - “等价刻画”一节命题的证明中，“第 2 项蕴含第 3 项”部分的等式 $E(\phi_j(f(X_n)))= E(\phi_j(f(X)))$ 似乎只在 $n\to +\infty$ 的极限下成立。
      - “基本性质”一节中关于矩收敛的命题的证明（必要性部分）里，$Y_n$ 似乎应定义为 $(|X_n|^r- |X|^r)1_{B_n^c}$，才与之后的估计 $|Y_n|\le t^r+ |X|^r$ 一致。
      - “连续性定理”证明第 1 部分中，$|\phi_n(t) - \phi(t)|$ 的估计的第二步似乎应为不等号 $\leq$ 而不是等号。
navboxes: [概率论]
---

**依分布收敛**是[[概率论]]中[[随机变量]]的一种较弱的收敛性，它只要求分布函数在某种意义上收敛。

## 定义

::: definition [淡收敛]
设 $(F_n)_{n\geq 1}$ 是一列定义在 $\mathbb{R}$ 上[[有界函数|有界]]、
[[递增函数|递增]]的[[右连续函数]]。
如果存在同样如此的函数 $F$，
使得对 $F$ 的任意[[连续函数|连续]]点 $x \in \mathbb{R}$，
\[
\lim_{n \to \infty} F_n(x) = F(x),
\]
则称 $(F_n)$ **淡收敛**于 $F$，记为 $F_n \xrightarrow{v} F$，并称 $F$ 是 $(F_n)$
的**淡极限**。
:::

这里没有直接使用[[累积分布函数]]，是因为：分布函数的淡极限未必是分布函数。这方面的一个反例是
\[
\begin{aligned}
  F_n(x) & = \begin{cases}
    0, & x \leq -n, \\
    \dfrac{x+n}{2n}, & -n < x \leq n, \\
    1, & x > n,
  \end{cases} \\
  F(x) & = \frac12.
\end{aligned}
\]

如果分布函数的淡极限确实是分布函数，则可以定义依分布收敛。

::: definition [依分布收敛]
设 $(X_n)_{n \geq 1}$ 是一列实值[[随机变量]]，$X$ 是实值随机变量。
如果 $X_n$ 的[[累积分布函数]] $F_n$
淡收敛于 $X$ 的累积分布函数 $F$，
则称 $(X_n)$ **依分布收敛**于 $X$，
记为 $X_n \xrightarrow{d} X$。
:::

有时也用分布函数代替随机变量本身，记为 $F_n \xrightarrow{d} F$。

## 性质

### 等价刻画

依分布收敛有下述的等价刻画。

::: proposition {@equivalent-characterization-of-convergence-in-d}
$(X_n)$ 是一列实值随机变量，$X$ 为一个实值随机变量（不必定义在同一概率空间上）。
下述断言等价：

1. {@cdf-definition-of-convergence-in-d} $X_n$ 依分布收敛到 $X$（即 $X_n$ 分布函数淡收敛到 $X$
   分布函数）。

2. {@continuous-bounded-function-definition-of-convergence-in-d} 对每个有界连续函数
   $h: \mathbb R\to \mathbb R$，$E(h(X_n))\to E(h(X))$，$n\to +\infty$。

3. {@closed-set-definition-of-convergence-in-d} 对每个闭集 $C\subseteq \mathbb R$，
   $\limsup_{n\to+\infty} P(X_n\in C)\le P(X\in C)$。

4. {@open-set-definition-of-convergence-in-d} 对每个开集 $O\subseteq \mathbb R$，
   $\liminf_{n\to+\infty} P(X_n\in O)\ge P(X\in O)$。
:::

::: proof
**@cdf-definition-of-convergence-in-d 蕴含 @continuous-bounded-function-definition-of-convergence-in-d。**
由 [[Skorokhod 表示定理]]，存在一个概率空间及其上随机变量 $(Y_n)$、$Y$，
使得 $Y_n$ 与 $X_n$ 同分布，$Y$ 与 $X$ 同分布，并且 $Y_n$ 几乎必然收敛到 $Y$。于是
\[
\lim_{n\to +\infty} E(h(X_n))= \lim_{n\to +\infty} E(h(Y_n))= E(h(Y))= E(h(X)).
\]
其中第一个和最后一个等号是因为同分布随机变量期望相同，中间的等号是控制收敛定理。

**@continuous-bounded-function-definition-of-convergence-in-d 蕴含 @closed-set-definition-of-convergence-in-d。**
设 $C\subseteq\mathbb R$ 为闭集，定义 $f(x)= \inf_{y\in C} |x- y|$，
则 $f$ 连续，并且 $x\in C$ 当且仅当 $f(x)= 0$，而 $x\notin C$ 时 $f(x)> 0$。
定义 $\phi_j: \mathbb R\to \mathbb R$ 为折线函数：$\phi_j$ 在 $(-\infty, 0)$ 上恒为 $1$，
在 $(\frac 1j, +\infty)$ 上恒为 $0$，在 $(0, \frac 1j)$ 上为连接 $(0,1)$、$(\frac 1j, 0)$ 的折线，
则 $\phi_j$ 有界连续而且逐点递减地收敛到 $1_{(-\infty, 0]}$。对
\[
P(X_n\in C)= E(1_{(-\infty, 0]}(f(X_n)))\le E(\phi_j(f(X_n)))= E(\phi_j(f(X))).
\]
（最后一个等号是因为[条件 2](@continuous-bounded-function-definition-of-convergence-in-d)与
$\phi_j\circ f$ 有界连续）
取上极限得
\[
\limsup_{n\to+\infty} P(X_n\in C)\le E(\phi_j(f(X))).
\]
最后，由控制收敛定理得到
\[
\lim_{j\to +\infty} E(\phi_j(f(X)))= E(1_{(-\infty, 0]} (f(X)))= P(f(X)= 0)= P(X\in C).
\]
所以 $\limsup_{n\to+\infty} P(X_n\in C)\le P(X\in C)$。

**@closed-set-definition-of-convergence-in-d 等价于 @open-set-definition-of-convergence-in-d。**
开集的补集是闭集，反之亦然。

**@closed-set-definition-of-convergence-in-d、@open-set-definition-of-convergence-in-d
蕴含 @cdf-definition-of-convergence-in-d。**
设 $F_n$、$F$ 分别是 $X_n$、$X$ 的分布函数。对任意 $x\in \mathbb R$，
\[
P(X< x) \le \liminf_{n\to+\infty} P(X_n< x) \le \liminf_{n\to+\infty} F_n(x) \le \limsup_{n\to+\infty}
F_n (x)= \limsup_{n\to+\infty} P(X_n\le x) \le P(X\le x).
\]
如果 $x$ 是 $F$ 的连续点，那么 $P(X< x)= P(X\le x)$，从而上述不等式链的等号都成立，
于是 $\lim_{n\to +\infty} F_n(x)$ 存在且等于 $F(x)$。
:::

::: remark
@equivalent-characterization-of-convergence-in-d 的 @closed-set-definition-of-convergence-in-d、
@open-set-definition-of-convergence-in-d 中的等号并不一定总是能取到，
例如 $X_n\sim N(0, \frac{1}{n^2})$，$X$ 服从退化分布
$P(X= 0)= 1$，则 $X_n$ 依分布收敛到 $X$，而如果在 @closed-set-definition-of-convergence-in-d、
@open-set-definition-of-convergence-in-d 中分别取 $C= (-\infty, 0]$、$O= (-\infty, 0)$，
则等号均不能取到。
:::

### 基本性质

依分布收敛可以说是常见收敛类型中最弱的。其它的收敛可以推出它，而反过来则不能或需要额外条件。
设 $(X_n)$ 是实值随机变量序列，$X$ 是实值随机变量。

::: proposition
1. 如果有[[收敛（随机变量）|依概率收敛]] $X_n \xrightarrow{p} X$，则 $X_n \xrightarrow{d} X$。

2. 设 $c \in \mathbb{R}$，将取值 $c$ 的[[退化分布|常值随机变量]]仍记为 $c$，
   则 $X_n \xrightarrow{d} c$
   当且仅当 $X_n \xrightarrow{p} c$。
:::

::: proof
1. 设 $x$ 为 $F_X$ 的一个连续点，$\epsilon>0$。则对每个 $n\in\mathbb Z_+$，
   事件 $(X\le x-\epsilon, X_n>x)$ 是 $(|X_n- X|> \epsilon)$ 的子集，所以
   \[
   F_X(x- \epsilon)= P(X\le x-\epsilon) \le P(X_n \le x)+ P(X\le x-\epsilon, X_n> x)
   \le F_{X_n}(x)+ P(|X_n -X|> \epsilon).
   \]
   令 $n\to +\infty$ 得 $F_X(x-\epsilon)\le \liminf_{n\to+\infty} F_{X_n} (x)$，
   同理 $F_X (x+ \epsilon)\ge \limsup_{n\to+\infty} F_{X_n} (x)$。
   因为 $x$ 是 $F_X$ 的连续点，所以 $F_X(x) =\lim_{n\to +\infty} F_{X_n}(x)$。

2. 如果 $X_n$ 依分布收敛到常值随机变量 $X= c$，则对任意 $\epsilon> 0$，
   $c-\epsilon$、$c+\epsilon$ 都是 $F_X$ 的连续点且 $F_X$ 在这两个点处函数值分别是 $0$ 和 $1$。
   所以
   \[
   \lim_{n\to +\infty} P(c- \epsilon< X_n \le c+\epsilon)=
   \lim_{n\to +\infty} F_{X_n} (c+\epsilon)- \lim_{n\to +\infty} F_{X_n} (c-\epsilon)= 1.
   \]
   反之，若 $X_n$ 依概率收敛到 $X= c$，则由 1 知道依分布收敛也成立。
:::

::: proof [1 的另证]
根据 @equivalent-characterization-of-convergence-in-d 的[等价刻画 2](@continuous-bounded-function-definition-of-convergence-in-d)，
只需证明若 $X_n \xrightarrow{p} X$，$h$ 是一个有界的连续函数，则 $E(h(X_n))\to E(h(X))$。
反设 $E(h(X_n))\not\to E(h(X))$，
则可以取 $\epsilon_0>0$ 与一列 $n_k$ 使得 $|E(h(X_{n_k}))- E(h(X))|> \epsilon_0$，
但是 $X_{n_k}$ 有子列 $X_{n_{k_j}}$ 几乎必然收敛到 $X$，
由控制收敛定理有 $E(h(X_{n_{k_j}}))\to E(h(X))$，矛盾。
:::

上面这条性质可以用于[[大数定律|弱大数定律]]的证明。

::: proposition {@prop:moment-convergence}
对 $r > 0$，如果 $X_n \xrightarrow{d} X$，且对于每个正整数 $n$，$E(|X_n|^r)$ 有限，
则 $E(|X_n|^r) \to E(|X|^r)$ 且 $E(|X|^r)$ 有限当且仅当 $(|X_n|^r)$ [[一致可积]]。
（一列随机变量 $(Y_n)$ 一致可积意指
$\lim_{t\to +\infty}\sup_{n\in\mathbb Z_+} E(|Y_n|\cdot 1_{|Y_n|> t}) =0$）。
:::

证明中要用到下面的初等不等式。

::: lemma {@lem:r-th-power-subadditive}
设 $0 < r\le 1$，则不等式 $|x+ y|^r\le |x|^r+ |y|^r$ 对任意 $x, y\in\mathbb R$ 成立。
:::

::: proof
同除 $|x+ y|^r$ 知这等价于 $1\le |a|^r+ |b|^r$ 对任意满足 $a+b= 1$ 的 $a, b$ 成立，
而 $|a|\ge 1$ 或 $|b|\ge 1$ 时这显然；
若 $|a|, |b|$ 均小于 $1$ 则 $|a|^r+|b|^r\ge |a|+|b|\ge |a+ b|= 1$。
:::

::: proof [@prop:moment-convergence 的证明]
由 [[Skorokhod 表示定理]]，不妨设 $X_n$ 几乎必然收敛到 $X$。

如果 $|X_n|^r$ 一致可积，那么取 $t>0$ 使得
\[
\sup_{n\in\mathbb Z_+} E(|X_n|^r \cdot 1_{|X_n|> t}) <1.
\]
则 $E(|X_n|^r)\le 1+ t^r$，从而 $\sup_{n\in\mathbb Z_+} E(|X_n|^r )< +\infty$。
由 Fatou 引理，$E(|X|^r)\le \liminf_{n\to+\infty} E(|X_n|^r)< +\infty$。
于是我们只须证明 $\limsup_{n\to+\infty} E(|X_n|^r)\le E(|X|^r)$。

取定 $\epsilon, t>0$，令 $A_n= \{|X_n -X|\le \epsilon\}$，$B_n= \{|X_n|> t\}$。则
\[
E(|X_n|^r)= E(|X_n|^r 1_{A_n^c\cap B_n})+ E(|X_n|^r 1_{A_n^c\cap B_n^c})+ E(|X_n|^r 1_{A_n})
\le E(|X_n|^r 1_{B_n})+ t^r P(A_n^c) + E(|X_n|^r 1_{A_n}).
\]
对 $n\to +\infty$ 取上极限得
\[
\limsup_{n\to+\infty} E(|X_n|^r)\le \limsup_{n\to+\infty} E(|X_n|^r 1_{B_n})+ \limsup_{n\to+\infty} t^r P(A_n^c) + \limsup_{n\to+\infty} E(|X_n|^r 1_{A_n}).
\]
右边的第一项不大于
$\sup_{n\in\mathbb Z_+} E(|X_n|^r 1_{B_n})= \sup_{n\in\mathbb Z_+} E(|X_n|^r 1_{(|X_n| >t)})$，
根据一致可积性，
后者在 $t\to +\infty$ 时趋于 $0$。
对于第二项 $\limsup_{n\to+\infty} t^r P(A_n^c)$，因为我们假定了 $X_n\to X$ a.s.，
所以 $X_n$ 也依概率收敛到 $X$，从而 $\lim_{n\to +\infty} P(A_n^c) =0$，即第二项为 $0$。
最后，我们估计第三项。

如果 $r\le 1$，由 @lem:r-th-power-subadditive，
\[
E(|X_n|^r 1_{A_n}) \le E((|X_n - X|^r + |X|^r)1_{A_n} ) \le \epsilon^r + E|X|^r.
\]
如果 $r>1$，我们有
\[
\begin{aligned}
 E(|X_n 1_{A_n}|^r) =& E(|(X_n - X)1_{A_n} + X1_{A_n}|^r)\\
\le & E((|(X_n - X)1_{A_n}| + |X1_{A_n}|)^r)\\
\le & \left( E(|(X_n - X)1_{A_n}|^r)^{1/r} + E(|X1_{A_n}|^r)^{1/r} \right)^r\\
\le & \left( \varepsilon + E(|X|^r)^{1/r} \right)^r.
\end{aligned}
\]
其中第二行是绝对值的三角不等式，第三行是 $L^r$ 空间里的三角不等式（即 Minkowski 不等式）。

由此可见，无论 $r\le 1$ 还是 $r> 1$，均有 $\limsup_{n\to+\infty} E(|X_n|^r 1_{A_n})\le E(|X|^r)$。
结合我们先前的估计，有
\[
\limsup_{n\to+\infty} E(|X_n|^r)\le E(|X|^r),
\]
从而 $E(|X_n|^r) \to E(|X|^r)$。

反之，如果 $E(|X_n|^r) \to E(|X|^r)$ 且 $E(|X|^r)$ 有限，依然令 $B_n= \{|X_n|> t\}$。
令
\[
Y_n= (|X_n|- |X|)1_{B_n^c}= |X_n| 1_{B_n^c} - |X| 1_{B_n^c},
\]
则 $Y_n\to 0$ a.s. 且 $|Y_n|\le t^r+ |X|^r$ 而后者有有限期望。
由控制收敛定理，$E(Y_n)\to 0$，所以
\[
E(|X_n|^r 1_{B_n})- E(|X|^r 1_{B_n})\to 0
\]
（定理的假设保证了这两项均有限）。显然

```math {@eq:upper-bound-event-Bn}
B_n\subseteq \{|X_n -X|> \frac t2\}\cup \{|X|> \frac t2\}.
```

由控制收敛定理，对每个固定的 $t>0$，有

```math {@eq:X-r-th-power-on-Xn--X-t/2}
\lim_{n\to +\infty} E(|X|^r 1_{|X_n -X|> \frac t2})= 0.
```

于是
\[
\limsup_{n\to+\infty} E(|X_n|^r 1_{B_n}) \le \limsup_{n\to+\infty} E(|X|^r 1_{B_n}) \le
E(|X|^r 1_{\{|X|> \frac t2\}}) .
\]
其中第一个不等号是因为 $E(Y_n)\to 0$，第二个不等号是因为 @eq:upper-bound-event-Bn 式
和 @eq:X-r-th-power-on-Xn--X-t/2 式。
当 $t\to +\infty$ 时，由控制收敛定理有 $E(|X|^r 1_{\{|X|> \frac t2\}})\to 0$，所以
\[
0= \lim_{t\to +\infty} \limsup_{n\to+\infty} E(|X_n|^r 1_{B_n})\overset{\text{$B_n$ 定义}}{=} \lim_{t\to +\infty} \limsup_{n\to+\infty} E(|X_n|^r 1_{\{|X_n|> t\}}) .
\]
我们断言这蕴含了 $X_n$ 的一致可积性。其实，对于 $\epsilon> 0$，设
$t> T$ 时 $\limsup_{n\to+\infty} E(|X_n|^r 1_{\{|X_n|> t\}})< \epsilon$。
于是存在 $N\in\mathbb Z_+$，使得 $t> T$ 时 $\sup_{n> N} E(|X_n|^r 1_{\{|X_n|> t\}})< 2\epsilon$。
对于 $X_1,\cdots, X_N$ 这有限个随机变量，注意对每个固定的 $n\in \mathbb Z_+$，由 $E(|X_n|)$ 有限知
$E(|X_n|^r 1_{\{|X_n|> t\}})$ 在 $t\to +\infty$ 时单调递减地趋于 $0$。
所以可以一致地取充分大的 $\tilde{T}$，使得
$t> \tilde{T}$ 时 $\sup_{1\le n\le N} E(|X_n|^r 1_{\{|X_n|> t\}})< 2\epsilon$。
于是如果 $t> \max(T, \tilde{T})$，
则 $\sup_{n\in\mathbb Z_+} E(|X_n|^r 1_{\{|X_n|> t\}})< 2\epsilon$，
即 $|X_n|^r$ 一致可积。
:::

::: remark
验证一列随机变量一致可积时，我们常使用下述一致可积的充分条件：如果随机变量序列 $(X_n)$
满足存在 $\delta> 0$，$\sup_{n\in\mathbb Z_+} E(|X_n|^{1+\delta})< +\infty$，则 $(X_n)$ 一致可积。
这是因为如果记上述上确界为 $M$，则由 Markov 不等式得
\[
M\ge E(|X_n|^{1+\delta}) \ge E(|X_n| 1_{\{|X_n|> t\}} t^{\delta}),
\]
所以 $E(|X_n| 1_{\{|X_n|> t\}})\le \frac{M}{t^{\delta}}$，
后者在 $t\to +\infty$ 时趋于 $0$。
:::

::: proposition [连续映射定理]
设 $X_n\overset{d}{\to} X$，$g: \mathbb R^n\to \mathbb R$ 是一个 Borel 函数，
且 $P(X \in C_g) = 1$（$C_g$ 是 $g$ 的连续点形成的集合），则 $g(X_n) \overset{d}{\to} g(X)$。
:::

::: remark
对每个 $\epsilon > 0$，集合
\[
A_{\epsilon} = \{ x : \text{存在 }\delta > 0, \sup\nolimits_{y_1, y_2\in (x-\delta, x+\delta)} |g(y_1)- g(y_2)| <\epsilon  \}
\]
是开集。$C_g= \cap_{n= 1}^{+\infty} A_{\frac 1n}$ 是一个 $G_{\delta}$ 集，
所以 $(X\in C_g)$ 总是一个可测集。
:::

::: proof
回忆：如果 $Y_n\to Y$ a.s.，$P(Y\in C_g) = 1$，则 $g(Y_n) \to g(Y)$ a.s.
（$g(Y_n) \not \to g(Y)$ 只可能在事件 $Y_n\not\to Y$ 和 $Y\notin C_g$ 上发生）。
由这一事实、
Skorokhod 表示定理以及 a.s. 收敛 $\implies$ 依概率收敛 $\implies$ 依分布收敛知
$g(X_n) \overset{d}{\to} g(X)$。
:::

- （Slutsky 引理）如果 $X_n \xrightarrow{d} X$，$Y_n \xrightarrow{p} 0$，则

  - $X_n + Y_n \xrightarrow{d} X$；

  - $X_n Y_n \xrightarrow{d} 0$。

最后举一个淡收敛的性质，它说明淡收敛的定义可以减弱。

- 设 $(F_n)_{n\geq 1}$ 是一列定义在 $\mathbb{R}$ 上[[有界函数|有界]]、
  [[递增函数|递增]]的[[右连续函数]]，$F$
  是一个这样的函数。则 $F_n \xrightarrow{v} F$ 的充要条件是，存在 $C(F)$ 的稠密子集 $D$
  使得
  \[
  \lim_{n \to \infty} F_n(x) = F(x), \quad \forall x\in D,
  \]
  其中 $C(F)$ 是 $F$ 的连续点集合。以下均遵照此种约定。

### 连续性定理

[[特征函数]]与[[累积分布函数]]有密切的联系，而依分布收敛是关于分布函数的，所以应该也可以使用
特征函数刻画依分布收敛。为此，先对淡收敛进行研究。

::: theorem [Helly 第一定理] {@1}
设 $(F_n)_{n\geq 1}$ 是一列定义在 $\mathbb{R}$ 上[[有界函数|有界]]、
[[递增函数|递增]]的[[右连续函数]]。如果这列
函数是[[一致有界]]的（即存在 $M>0$，$|F_n(x)|\le M$ 对任意 $n, x$ 成立），则存在子列 $(F_{n_k})$，
它有淡极限。
:::

::: proof
设 $(r_n)$ 是有理数的一个排列，由假设 $(F_n(r_1))$ 是一个有界数列，所以存在子列 $(n_k)$，
$(F_{n_k} (r_1))$ 收敛。$(F_{n_k} (r_2))$ 是一个有界数列，又可以选取 $(n_k)$ 的进一步子列 $n_{k_j}$
让 $(F_{n_{k_j}} (r_2))$ 收敛。
重复上述论证，由对角线法则可以取一列 $n_k$，$F_{n_k} (r)$ 对任意 $r\in \mathbb Q$ 收敛。

定义 $G(r)= \lim_{k\to +\infty} F_{n_k} (r)$（$r\in\mathbb Q$），
$F(x)= \inf \{G(r): x<r, r\in\mathbb Q\}$（$x\in\mathbb R$）。
我们验证 $F$ 是 $(F_{n_k})$ 的淡极限：

1. 显然 $F$ 不减。
   因为对每个 $r\in \mathbb Q$，$|F_{n_k} (r)|\le M$，所以 $|G(r)|\le M$，从而 $|F(x)|\le M$，
   $F$ 有界。

2. $F$ 右连续：对每个 $x\in\mathbb R$，$\epsilon> 0$，取 $r>x, r\in\mathbb Q$ 使得
   $F(x)> G(r)- \epsilon$，如果 $x<y < r$，则 $F(x)\le F(y)< G(r) < F(x)+ \epsilon$。

3. 如果 $x$ 是 $F$ 的连续点，那么 $F_{n_k} (x)\to F(x)$：取 $y<x$ 使得 $F(y)> F(x)- \epsilon$，
   取 $r\in\mathbb Q, y<r< x$，则 $G(r)\ge F(y)> F(x)- \epsilon$。
   取 $s\in \mathbb Q, s>x$ 使得 $G(s)\le F(x)+ \epsilon$。
   则由 $F_{n_k} (r)\le F_{n_k}(x) \le F_{n_k}(s)$ 可得
   \[
   F(x)- \epsilon< G(r)= \lim_{k\to +\infty} F_{n_k} (r)\le \liminf_{k\to +\infty} F_{n_k}(x) \le \limsup_{k\to +\infty} F_{n_k} (x) \le \lim_{k\to +\infty} F_{n_k}(s)= G(s) \le F(x)+ \epsilon.
   \]
   所以 $\lim_{k\to +\infty} F_{n_k}(x)= F(x)$。
:::

::: remark
上述证明中我们构造的 $G(r)$、$F(x)$ 未必满足 $F(r)= G(r)$，例如 $F_n(x)= 1_{[\frac 1n, +\infty)}$，
$n_k= k$，则 $G(r)= 1_{(0, +\infty)\cap \mathbb Q}$，从而 $F(0)= 1$，但是 $G(0)= 0$。
:::

Helly 第一定理可以解释为：满足上述条件的函数组成的有界集在淡收敛意义下是[[紧集]]。
因为分布函数总是限制在
$[0,1]$ 之间，所以一定满足这种性质。

::: theorem [Helly 第二定理] {@2}
设 $(F_n)$、$F$ 分别是一列和一个累积分布函数。如果 $F_n \xrightarrow{d} F$，则对任意
有界连续函数 $g \colon \mathbb{R} \to \mathbb{C}$，有
\[
\lim_{n \to \infty}\int_{\mathbb{R}} g(x) \, \mathrm{d} F_n(x) =
\int_{\mathbb{R}} g(x) \, \mathrm{d} F(x).
\]
:::

::: proof
这是 @equivalent-characterization-of-convergence-in-d
中 @continuous-bounded-function-definition-of-convergence-in-d
的重述。
:::

接下来可以介绍主要定理。这个定理基本把依分布收敛转化为计算[[特征函数]]极限的问题。

::: theorem [连续性定理]
1. 设 $F$、$(F_n)_{n \geq 1}$ 分别是一个和一列[[累积分布函数]]，$\phi$、$(\phi_n)$ 是它们
   对应的[[特征函数]]。如果 $F_n \xrightarrow{d} F$，则对任意 $t \in \mathbb{R}$，有

   ```math {@x}
   \lim_{n \to \infty} \phi_n(t) = \phi(t).
   ```

   而且这种收敛在任意紧集（即有界闭[[区间]]）上一致。

2. 如果 $(\phi_n)_{n \geq 1}$ 是一列特征函数，$(F_n)$ 是对应的分布函数。如果存在一个在
   $t = 0$ 处连续的函数 $\phi: \mathbb{R} \to \mathbb{C}$ 使得 @x 式成立，
   则 $\phi$ 也是特征函数，且对于其对应的分布函数 $F$，有
   \[
   F_n \xrightarrow{d} F.
   \]
:::

::: proof
1. 如果 $F_n(x) \xrightarrow{d} F(x)$，注意到 $t \mapsto \mathrm e^{\mathrm itx}$
   是有界连续函数，根据 @2 立刻得到 @x 式成立。下面证明这种收敛性对任何有界闭[[区间]]
   一致成立。进一步，可以不妨设区间为 $[-t_0, t_0]$。

   对任意 $\varepsilon > 0$，取充分大的 $A \in C(F)$，使得
   \[
   \int_{|x| > A}\mathrm dF(x) = F(-A) + 1 - F(A) < \varepsilon.
   \]
   因为 $\lim_{n \to \infty} F_n(\pm A) = F(\pm A)$，故 $n$ 充分大时：
   \[
   \int_{|x| > A}\mathrm dF_n(x) = F_n(-A) + 1 - F_n(A) < 2\varepsilon.
   \]
   由于
   \[
   \begin{aligned}
     |\phi_n(t) - \phi(t)| &= \left|\int_{\mathbb{R}} \mathrm e^{\mathrm itx}\mathrm dF_n(x) - \int_{\mathbb{R}} \mathrm e^{\mathrm itx}\mathrm dF(x)\right|\\
                 &= \int_{|x| > A} \mathrm dF_n(x) + \int_{|x| > A} \mathrm dF(x) + \left|\int_{|x| \leq A} \mathrm e^{\mathrm itx}\mathrm dF_n(x) - \int_{|x| \leq A} \mathrm e^{\mathrm itx}\mathrm dF(x)\right|,\\
   \end{aligned}
   \]
   于是只要证明当 $n \to \infty$时，
   \[
   \left|\int_{-A}^{A} \mathrm e^{\mathrm itx}\mathrm dF_n(x) - \int_{-A}^{A} \mathrm e^{\mathrm itx}\mathrm dF(x)\right|
   \]
   对 $|t| \leq t_0$ 一致收敛于 $0$。

   容易得到估计式 $|\mathrm e^{\mathrm itx} - \mathrm e^{\mathrm ity}| \leq |t(x-y)|$。
   取充分密的 $-A = x_0 < x_1 < \cdots < x_m = A$，使得 $x_j \in C(F)(j=0,\cdots,m)$，
   且 $t_0(x_{j+1} - x_j) < \varepsilon(j=0,\cdots,m-1)$。则
   \[
   \sup_{|t| \leq t_0} \sup_{x \in [x_j, x_{j+1}]} |\mathrm e^{\mathrm itx} - \mathrm e^{\mathrm itx_j}| < \varepsilon, \quad j = 0, \cdots, m-1.
   \]
   现在把所欲估计的式子分为三段：
   \[
   \begin{aligned}
     \sup_{|t| \leq t_0} \left|\int_{-A}^{A} \mathrm e^{\mathrm itx}\mathrm dF_n(x) - \int_{-A}^{A} \mathrm e^{\mathrm itx}\mathrm dF(x)\right|
     &\leq \sum_{j=0}^{m-1} \sup_{|t| \leq t_0}\left|\int_{x_j}^{x_{j+1}} \mathrm e^{\mathrm itx}\mathrm dF_n(x) - \int_{x_j}^{x_{j+1}} \mathrm e^{\mathrm itx}\mathrm dF(x)\right|\\
     &\leq \sum_{j=0}^{m-1} \sup_{|t| \leq t_0}\left|\int_{x_j}^{x_{j+1}} (\mathrm e^{\mathrm itx} - \mathrm e^{\mathrm itx_j}) \mathrm dF_n(x)\right| + \sum_{j=0}^{m-1} \sup_{|t| \leq t_0}\left|\int_{x_j}^{x_{j+1}} (\mathrm e^{\mathrm itx} - \mathrm e^{\mathrm itx_j}) \mathrm dF(x)\right|\\
     &+ \sum_{j=0}^{m-1} \sup_{|t| \leq t_0}|\mathrm e^{\mathrm itx_j}(F_n(x_{j+1}) - F_n(x_j) - F(x_{j+1}) + F(x_j))|\\
     &= I_{1,n} + I_{2,n} + I_{3,n}.\\
   \end{aligned}
   \]
   下面分别估计三个部分。
   \[
   \begin{aligned}
     I_{1,n} &\leq \sum_{j=0}^{m-1} \int_{x_j}^{x_{j+1}} \sup_{|t| \leq t_0} |\mathrm e^{\mathrm itx} - \mathrm e^{\mathrm itx_j}| \mathrm dF_n(x)\\
         &< \varepsilon \sum_{j=0}^{m-1} \int_{x_j}^{x_{j+1}} \mathrm dF_n(x)\\
         &= \varepsilon \int_{-A}^{A} \mathrm dF_n(x) \leq \varepsilon,
   \end{aligned}
   \]
   同理可得 $I_{2,n} < \varepsilon$。进一步，
   \[
   \begin{aligned}
     I_{3,n} &= \sum_{j=0}^{m-1} \sup_{|t| \leq t_0}|\mathrm e^{\mathrm itx_j}\big(F_n(x_{j+1}) - F(x_{j+1}) - (F_n(x_{j}) - F(x_j))\big)|\\
         &\leq 2\sum_{j=0}^m |F_n(x_j) - F(x_j)|,
   \end{aligned}
   \]
   因为 $x_j \in C(F)$，所以 $n$ 充分大时
   \[
   |F_n(x_j) - F(x_j)| < \frac{\varepsilon}{2(m + 1)},
   \]
   也就有 $I_{3,n} < \varepsilon$。综上所述，就证明了一致收敛性。

2. 根据 @1，存在 $(F_n)$ 的子列 $(F_{n_k})$ 和有界递增右连续函数 $\tilde F$ 使得
   $F_{n_k} \xrightarrow{v} \tilde F$。我们先来证明 $\tilde F$ 是分布函数。
   易知：$\tilde F(-\infty) = \lim_{x \to -\infty} \tilde F(x) \geq 0$，
   以及 $\tilde F(+\infty) \leq 1$。令
   \[
   \alpha = \tilde F(+\infty) - \tilde F(-\infty),
   \]
   为了证明 $\tilde F$ 是分布函数，只需要证明 $\alpha = 1$。如果不然，设 $\alpha < 1$，
   根据 $\phi$ 在 $t = 0$ 的连续性，对任意的 $0 < \varepsilon < 1 - \alpha$，存在 $\delta > 0$
   使得

   ```math {@y}
   \frac{1}{2\delta} \left|\int_{-\delta}^{\delta} \phi(t) \mathrm dt\right| > \alpha + \frac{\varepsilon}{2},
   ```

   这是因为 $\phi(0) = \lim_{n \to \infty} \phi_n(0) = 1$。因为 $F_{n_k} \xrightarrow{v} \tilde F$，
   所以存在 $b > \frac{4}{\varepsilon \delta}$，使得 $\pm b \in C(\tilde F)$，且 $k$
   充分大时：
   \[
   \alpha_k := F_{n_k}(b) - F_{n_k}(-b) < \alpha + \frac{\varepsilon}4.
   \]
   注意到
   \[
   \left|\int_{-\delta}^{\delta} \mathrm e^{\mathrm itx} \mathrm dt\right| \leq 2\delta, \quad
   \left|\int_{-\delta}^{\delta} \mathrm e^{\mathrm itx} \mathrm dt\right| = \left|\frac{2}{x} \sin \delta x\right| \leq \frac{2}{b}, |x| > b,
   \]
   所以
   \[
   \begin{aligned}
     \frac{1}{2\delta}\left|\int_{-\delta}^{\delta} \phi_{n_k}(t) \mathrm dt\right|
     &= \frac{1}{2\delta} \left|\int_{\mathbb{R}} \left(\int_{-\delta}^{\delta} \mathrm e^{\mathrm itx} \mathrm dt\right) \mathrm dF_{n_k}(x)\right|\\
     &\leq \frac{1}{2\delta} \int_{-b}^b \left|\int_{-\delta}^{\delta} \mathrm e^{\mathrm itx} \mathrm dt\right| \mathrm dF_{n_k}(x) +
     \frac{1}{2\delta} \int_{|x| > b} \left|\int_{-\delta}^{\delta} \mathrm e^{\mathrm itx} \mathrm dt\right|\mathrm dF_{n_k}(x)\\
     &\leq \alpha_k + \frac{1}{b \delta} < \alpha_k + \frac{\varepsilon}{4} < \alpha + \frac{\varepsilon}{2},
   \end{aligned}
   \]
   对 $k$ 取极限，结果与 @y 式矛盾。这就证明了 $\alpha = 1$，$\tilde F$ 是分布函数。
   于是，$F_{n_k} \xrightarrow{d} \tilde F$。根据定理的第 1 部分，$(\phi_{n_k})$ 收敛于 $\tilde F$
   对应的特征函数，而由 @x 式得这个特征函数就是 $\phi$。根据反演公式得到 $\tilde F = F$。
   所以 $F_{n_k} \xrightarrow{d} F$。

   最后证明 $F_n \xrightarrow{d} F$。
   如果不是这样，则存在 $\epsilon_0>0$，$F$ 的连续点 $x_0$ 与一列 $m_k$，
   $|F_{m_k}(x_0)- F(x_0)|\ge \epsilon_0$。
   由 Helly 第一定理，$F_{m_k}$ 有淡收敛子列，且淡极限 $G$ 必不同于 $F$。
   但是重复上述证明过程可知
   $G$ 也是以 $\phi$ 为特征函数的分布函数，由反演公式可得 $G = F$，矛盾。定理得证。
:::

::: corollary [Cramér–Wold]
$X_n= (X_n^{(1)},\cdots, X_n^{(k)})$ 为一列 $k$ 维随机向量。
$X_n\overset{\mathrm{d}}{\longrightarrow}X$
当且仅当 $c^T X_n \overset{\mathrm{d}}{\longrightarrow} c^T X$ 对任意 $c\in \mathbb R^k$ 成立。
:::

::: proof
考虑特征函数。
$c^T X_n \overset{\mathrm{d}}{\longrightarrow} c^T X$ 当且仅当对任意 $t\in \mathbb R$，
$E(e^{it c^T X_n})\to E(e^{it c^T X})$。
而 $X_n\overset{\mathrm{d}}{\longrightarrow}X$ 当且仅当对任意 $a\in \mathbb R^k$，
$E(e^{i a^T X_n})\to E(e^{i a^T X})$。
由此显而易见定理的断言成立。
:::

```terms
依分布收敛:
  en: convergence in distribution
  fr: convergence en loi
淡收敛:
  en: vague convergence
```
