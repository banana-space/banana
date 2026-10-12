---
title: 特征函数（概率论）
categories: [概率论]
notices:
  - name: 消歧义
    see:
      - page: 特征函数
  - name: 问题
    items:
      - '“反演公式”一节中多元反演公式的极限表达式里的因子 $e^{i t_j x_j}$ 似乎是多余的（$x_j$ 在式中没有定义；证明中 $I_T$ 的定义不含此因子）。'
      - “反演公式”一节的多元反演公式及其证明第二段中，“$\mu$ 被其分布函数唯一确定”似乎应为“被其特征函数唯一确定”。
      - '“反演公式”一节中多元反演公式的证明第二段似乎不完整：$a_i, b_i$ 避开 $\mu$ 的原子的坐标并不能保证 $\mu(\partial A) = 0$（例如 $\mu$ 可能在某个超平面 $x_1 = c$ 上有正测度而没有原子）。'
navboxes: [概率论]
---

在[[概率论]]中，**特征函数**是[[随机变量]]的一种性质。
大致来说，随机变量的特征函数就是该随机变量的[[概率分布]]的 [[Fourier 变换]]。

## 定义

::: definition [特征函数]
设 $X$ 是[[概率空间]] $(\Omega,\mathcal F,\mathbb P)$
上的实值[[随机变量]]。定义 $X$ 的**特征函数**
$\phi_X \colon \mathbb{R} \to \mathbb{C}$ 为
\[
\phi_X (t) = \mathbb{E} (\mathrm e^{\mathrm i tX}),
\]
其中 $\mathbb{E}$ 表示[[期望]]。
如果考虑 $X$ 的[[概率分布]] $\mu$（即 $\mu(A)\overset{\text{def}}{=} \mathbb P(X\in A)$），
则特征函数可以表示为 [[Lebesgue 积分]]
\[
\phi_X (t) =
\int_{\mathbb R} \mathrm e^{\mathrm i tx} \, \mathrm{d} \mu (x),
\]
也就是[[概率分布]]的 [[Fourier 变换]]。

对于 $(\mathbb R^k, \mathcal B_k)$ 上的概率测度 $\mu$，我们定义概率测度 $\mu$ 的特征函数就是随机向量
$\text{id}_{\mathbb R^k}: \mathbb R^k\to \mathbb R^k$ 的特征函数。
:::

特别地，

- 如果 $X$ 是[[离散型随机变量]]，以 $p_i$ 的[[概率]]取值 $x_i$，则
  \[
  \phi_X(t) = \sum_{i} \mathrm e^{\mathrm i tx_i} \, p_i.
  \]

- 如果 $X$ 是[[连续型随机变量]]，其[[概率密度函数]]是 $f$，则
  \[
  \phi_X(t)=\int_{\mathbb R} \mathrm e^{\mathrm i tx}f(x) \, \mathrm dx.
  \]

- 设 $F_X$ 是 $X$ 的[[累积分布函数]]。
  则 $X$ 的特征函数可以表示为 [[Riemann–Stieltjes 积分]]
  \[
  \phi_X (t) =
  \int_{\mathbb R} \mathrm e^{\mathrm i tx} \, \mathrm{d} F_X (x).
  \]

对[[随机向量]]，也可类似地定义特征函数。

::: definition [多元特征函数]
设 $(\Omega,\mathcal F,\mathbb P)$ 是[[概率空间]]，
$V$ 是有限维实[[向量空间]]，
设 $\bm X \colon \Omega \to V$ 是取值于 $V$ 的[[随机向量]]。
定义 $\bm X$ 的**特征函数**
$\phi_{\bm{X}} \colon V^\vee \to \mathbb{C}$ 为
\[
\phi_{\bm{X}} (\bm{t}) =
\mathbb{E} (\mathrm e^{\mathrm i \bm{t} \cdot \bm{X}}),
\]
其中 $V^\vee$ 是 $V$ 的[[对偶空间]]。
:::

## 性质

以下多数性质只列出一元情形，多元可以类推。

### 基本性质

::: proposition [基本性质]
若 $f$ 是某个随机变量的特征函数，则

1. $|f(t)|\leq 1$；

2. $f(-t)=\overline{f(t)}$；

3. $f$ 在 $\mathbb R$ 上[[一致连续]]；

4. （半正定性）对任意 $t_1,\cdots, t_n\in\mathbb R,z_1,\cdots, z_n\in\mathbb C$
   有
   \[
   \sum_{j,k=1}^n z_j\bar z_k f(t_j-t_k)\geq 0
   \]

:::

关于特征函数的微分性质，一个重要的话题是 [[Taylor 展开]]。
从形式上来看，特征函数的 Taylor 展开中包含了各阶[[矩]]，
所以应该与矩有关系。

::: proposition [Taylor 展开]
设 $X$ 是随机变量。

1. 如果对某个[[自然数]] $n$ 有 $\mathbb{E}|X|^n<+\infty$，则
   有 Taylor 公式
   \[
   \phi_X(t)=\sum_{k=0}^{n}\frac{(\mathrm it)^k}{k!}\mathbb{E}(X^k)+o(t^n),\quad t\to 0
   \]

2. 如果 $X$ 的任意阶[[矩]]存在，且存在 $\delta>0$ 使得
   \[
   \lim_{n\to\infty}\frac{|t|^n\mathbb{E}(X^n)}{n!}=0,\quad |t|\leq \delta
   \]
   则
   \[
   \phi_X(t)=\sum_{k=0}^{\infty}\frac{(\mathrm it)^k}{k!}\mathbb{E}(X^k),\quad |t|\leq\delta
   \]

:::

接下来对什么样的函数是特征函数稍作讨论。

::: proposition
设 $X_1,X_2$ 是相互独立的随机变量，则
\[
\phi_{X_1+X_2}(t)=\phi_{X_1}(t)\phi_{X_2}(t)
\]
:::

::: corollary
设 $f(t)$ 是特征函数，则

- 对任意 $n\in\mathbb N$，$(f(t))^n$ 是特征函数。

- $|f(t)|^2$ 是特征函数。

:::

### 反演公式

关于特征函数的最重要性质是下面的反演公式，它揭示了特征函数
与分布函数的对应关系。

::: theorem [反演公式]
设 $X$ 是随机变量，$\phi_X$ 是它的特征函数，
$F$ 是分布函数。则对任意 $a,b\in\mathbb R$：
\[
\frac{1}{2\pi}\mathrm{P.V.}\int_{-\infty}^{+\infty}\frac{\mathrm e^{-\mathrm i ta}-\mathrm e^{-\mathrm i tb}}{\mathrm it}\phi_X(t)\mathrm dt
=\tilde F(b) - \tilde F(a)
\]
其中 $\mathrm{P.V.}$ 表示无穷积分的 Cauchy 主值；
$\tilde F(x) = \frac12 (F(x) + F(x+0))$。
:::

::: proof
不妨设 $a < b$。考察积分
\[
J(c) = \frac{1}{2\pi} \int_{-c}^{c} \frac{\mathrm e^{-\mathrm i ta}-\mathrm e^{-\mathrm i tb}}{\mathrm it} \phi_X(t) \mathrm dt
\]
需计算 $\lim_{c\to +\infty} J(c)$。根据特征函数的定义
\[
J(c) = \frac{1}{2\pi} \int_{-c}^c \left(\int_{\mathbb R} \frac{\mathrm e^{-\mathrm i ta}-\mathrm e^{-\mathrm i tb}}{\mathrm it} \mathrm e^{\mathrm i tx} \mathrm dF(x)\right) \mathrm dt
\]
因为函数
$\frac{\mathrm e^{-\mathrm i ta}-\mathrm e^{-\mathrm i tb}}{\mathrm it} \mathrm e^{\mathrm i tx}$
是有界的，
所以 $J(c)$ 有限，且可以交换积分顺序。于是
\[
\begin{aligned}
  J(c) &= \frac{1}{2\pi} \int_{\mathbb R}\left(\int_{-c}^{c} \frac{\mathrm e^{-\mathrm i ta}-\mathrm e^{-\mathrm i tb}}{\mathrm it} \mathrm e^{\mathrm i tx} \mathrm dt\right) \mathrm dF(x)\\
     &= \frac{1}{\pi} \int_{\mathbb R} \left(\int_{0}^{c} \frac{\sin t(x-a)}{t} \mathrm dt - \int_{0}^{c} \frac{\sin t(x-b)}{t} \mathrm dt\right) \mathrm dF(x)\\
     &= \frac{1}{\pi} \int_{\mathbb R} (I(x-a,c) - I(x-b,c)) \mathrm dF(x)\\
\end{aligned}
\]
其中
\[
I(x,c) = \int_{0}^{c} \frac{\sin xu}{u} \mathrm du
\]
熟知 $\lim_{c\to +\infty} I(x,c) = \frac{\pi}{2} \operatorname{sgn}(x)$，故
\[
\lim_{c\to +\infty} \frac{1}{\pi}(I(x-a,c) - I(x-b,c)) =
\begin{cases}
  1, \quad a < x < b\\
  1/2, \quad x = a, b\\
  0, \quad 其他情形\\
\end{cases}
\]
于是上述函数对任意 $x$ 和充分大的 $c$ 是有界的。
根据控制收敛定理（参见 [[Lebesgue 积分]]），有
\[
\begin{aligned}
  \lim_{c\to +\infty} J(c)
    &= \int_{\mathbb R} \lim_{c\to +\infty} \frac{1}{\pi}(I(x-a,c) - I(x-b,c)) \mathrm dF(x)\\
    &= \int_{(-\infty, a)\cup (b, +\infty)} 0 \mathrm dF(x) + \int_{\{a,b\}} \frac{1}{2} \mathrm dF(x) + \int_{(a,b)} \mathrm dF(x)\\
    &= \tilde F(b) - \tilde F(a)
\end{aligned}
\]
:::

::: corollary [唯一性定理]
分布函数可由特征函数唯一确定。
:::

::: corollary [连续型随机变量的判据]
如果特征函数 $\phi_X$ 绝对可积，则 $X$ 是
连续型随机变量，且密度函数为
\[
f(x) = \frac{1}{2\pi}\int_{\mathbb R}\phi_X(t)\mathrm e^{-\mathrm i tx}\mathrm dt
\]
:::

对于多元的特征函数，也有反演公式和唯一性定理：

::: theorem
$\mu$ 是 $(\mathbb R^k, \mathcal B_k)$ 上的概率测度，$\phi$ 是其特征函数。
对于 $\mathbb R^k$ 的半开半闭矩形区域 $A= \{(x_1,\cdots, x_k): a_i< x_i\le b_i, 1\le i\le k \}$，
如果 $\mu(\partial A)= 0$，就有
\[
\mu(A)= \lim_{T\to +\infty} \frac{1}{(2\pi)^k } \int_{\{t: \max|t_j|\le T\}} \prod_{j=1}^{k}
\frac{e^{-i t_j a_j}- e^{-i t_j b_j}}{i t_j} e^{i t_j x_j} \phi(t) \mathrm{d} t.
\]
于是 $\mu$ 被其分布函数唯一确定。
:::

::: proof
记
\[
I_T = \frac{1}{(2\pi)^k } \int_{\{t: \max|t_j|\le T\}} \prod_{j=1}^{k}
\frac{e^{-i t_j a_j}- e^{-i t_j b_j}}{i t_j} \phi(t) \mathrm{d} t.
\]
由定义 $\phi(t)= \int_{\mathbb R^k} e^{i \sum_{j=1}^k t_j x_j}\mathrm{d}\mu(x)$。
代入 $I_T$，易证这里可以使用 Fubini 定理，所以
\[
I_T= \frac{1}{(2\pi)^k } \int_{\mathbb R^k} \left( \prod_{j=1}^{k} \int_{-T}^{T}
\frac{e^{-i t_j a_j}- e^{-i t_j b_j}}{i t_j} e^{i t_j x_j} \mathrm{d} t_j\right) \mathrm{d}\mu(x).
\]
每一个被积项正形如一元时的被积项，重复相应计算过程就知道反演公式成立。

我们断言反演公式蕴含 $\mu$ 被其分布函数唯一确定。其实，反演公式表明对于
$\mu(\partial A)= 0$ 的 $A$，$\mu(A)$ 由特征函数确定。
$\mu$ 只在至多可数多个点 $(x_{1,n}, \cdots, x_{k,n})$（$n\in \mathbb Z_+$）有点质量（即
$\mu(\{(x_{1,n}, \cdots, x_{k,n})\})> 0$），
记 $D= \mathbb R- \{x_{j,n}: 1\le j\le k, n\in\mathbb Z_+\}$，
$D$ 是 $\mathbb R$ 去掉至多可数个点，是稠密的（因为任意开区间必有不属于 $\{x_{j,n}\}$ 的点）。
如果 $a_i, b_i\in D, 1\le i\le k$，
则半开半闭矩形区域 $\{(x_1,\cdots, x_k): a_i< x_i\le b_i, 1\le i\le k \}$ 满足
$\mu(\partial A)= 0$，其 $\mu$-测度被特征函数确定。
由 $D$ 的稠密性，任意一个半开半闭矩形都可以被满足 $\mu(\partial A)= 0$ 的半开半闭矩形逼近。
:::

作为推论，
一个 $k$-维随机向量 $X$ 的分布被所有 $\langle t, X\rangle$（$t\in \mathbb R^k$）的分布确定，
也就是 $\mathbb R^k$ 上的一个概率测度竟被所有半平面 $\{x: \langle t, x\rangle\le a\}$
的测度确定。这个结果不使用特征函数是很难证明的，这显示了特征函数这一工具的强大之处。

它可以用于证明下面的与多元特征函数有关的性质。

::: proposition [独立性]
设 $\bm X=(X_1,\cdots, X_n)^\top$ 是实值随机向量，则
$X_1,\cdots, X_n$ 相互独立当且仅当
\[
\phi_{\bm X}(\bm t) = \prod_{k=1}^n\phi_{X_k}(t_k)
\]
:::

```terms
特征函数:
  en: characteristic function
```
