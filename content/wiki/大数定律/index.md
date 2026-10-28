---
title: 大数定律
categories: [概率论]
navboxes: [概率论]
---

<problems>
- “强大数定律”一节中 Kolmogorov 强大数定律充分性的证明里，等式 $\sum_{n=1}^\infty \mathbb{P}(|X_n| \geq n) = \mathbb{E}|X_1|$ 似乎应为不等式 $\leq$（左边等于 $\mathbb{E}\lfloor |X_1| \rfloor$），不影响结论。
</problems>

**大数定律**是[[概率论]]中的一系列结论。
古典的大数定律是指如下观察：
进行关于某随机事件的试验，则在试验的次数趋于无穷时，
随机事件发生的频率将会趋于该事件[[概率]]。
比如，抛掷一枚普通的硬币，记录每次朝上的面，则抛掷次数足够大时，正面
朝上的频率，即正面朝上的次数与总次数的比值，
将越来越接近于正面朝上的概率 $1/2$。

在现代的概率论中，
大数定律可以严格地表述成一系列定理，
描述[[随机变量]]求和在项数趋于无穷时的规律。

## 定义

大数定律分为弱大数定律和强大数定律两种。前者讨论[[收敛（随机变量）|依概率收敛]]，
而后者讨论[[几乎必然收敛]]。

::: definition [弱大数定律]
设 $(X_n)_{n \geq 1}$ 为一列实值[[随机变量]]，令 $S_n=\sum_{k=1}^n X_k$。
如果存在实数序列 $( a_n )_{n \geq 1}$ 和正数序列 $( b_n )_{n \geq 1}$，
使得有[[收敛（随机变量）|依概率收敛]]
\[
\frac{S_n-a_n}{b_n}\xrightarrow{p} 0,
\]
或者说
\[
\lim_{n\to\infty}\mathbb{P}\left(\left|\frac{S_n-a_n}{b_n}\right|\geq\varepsilon\right)=0,\quad
\forall\varepsilon>0,
\]
则称 $(X_n)$ 服从**弱大数定律**。
:::

如果 $X_n$ 的期望存在，则常令 $a_n=\mathbb{E}(S_n),b_n=n$，
讨论随机变量
\[
\frac{S_n-\mathbb{E}(S_n)}{n}
\]
的收敛问题。

::: definition [强大数定律]
设 $(X_n)_{n \geq 1}$ 为一列实值[[随机变量]]，令 $S_n=\sum_{k=1}^n X_k$。
如果存在实数序列 $( a_n )_{n \geq 1}$ 和递增趋于无穷的正数序列 $( b_n )_{n \geq 1}$，
使得有[[几乎必然收敛]]
\[
\frac{S_n-a_n}{b_n}\longrightarrow 0\quad \mathrm{a.s.}
\]
则称 $(X_n)$ 服从**强大数定律**。
:::

注意到，强大数定律强于弱大数定律，因为几乎必然收敛强于依概率收敛。

## 弱大数定律

::: theorem [Markov 弱大数定律] {@M}
如果随机变量序列 $(X_n)$ 满足
\[
\lim_{n\to\infty}\frac{\operatorname{Var}(S_n)}{n^2}=0
\]
则
\[
\frac{S_n-\mathbb{E}(S_n)}{n}\xrightarrow{p} 0
\]
:::

::: proof
对任意 $\varepsilon>0$，根据 [[Chebyshev 不等式]]：
\[
\begin{aligned}
  \mathbb{P}\left(\left|\frac{S_n-\mathbb{E}(S_n)}{n}\right|\geq\varepsilon\right)
  &=\mathbb{P}(|S_n-\mathbb{E}(S_n)|\geq n\varepsilon)\\
  &\leq\frac{\mathbb{E}(S_n-\mathbb{E}(S_n))^2}{n^2\varepsilon^2}\\
  &=\frac{1}{\varepsilon^2}\frac{\operatorname{Var}(S_n)}{n^2}\to 0
\end{aligned}
\]
:::

::: corollary [Chebyshev 弱大数定律]
如果随机变量序列 $(X_n)$ 中的随机变量两两不相关（即协方差为零），
且存在 $C>0$ 使得 $\operatorname{Var}(X_n)\leq C$，则
\[
\frac{S_n-\mathbb{E}(S_n)}{n}\xrightarrow{p} 0
\]
:::

::: proof
根据不相关性，$\operatorname{Var}(S_n)=\sum_{k=1}^n\operatorname{Var}(X_k)\leq nC$，
从而 $\frac{\operatorname{Var}(S_n)}{n^2}\to 0$。根据 @M 就得证。
:::

因为不相关性弱于独立性，所以上述结果对相互独立随机变量当然也成立。

::: corollary [Bernoulli 弱大数定律] {@B}
用 $Z_n$ 表示 $n$ 次 Bernoulli 试验中成功的次数，$p$ 为成功概率，
则
\[
\frac{Z_n}{n}\xrightarrow{p} p
\]
:::

这就是大数定律的最初版本。

以上讨论的大数定律均对[[方差]]有一定要求。实际上，如果只要求
[[期望]]存在，也有弱大数定律。

::: theorem [Khintchine 弱大数定律]
设 $(X_n)$ 为独立同分布随机变量序列。如果 $\mathbb{E}(X_1)=\mu$，
则
\[
\frac{S_n}{n}\xrightarrow{p} \mu
\]
:::

::: proof
对于常数 $c$，我们知道 $X_n\xrightarrow{p} c$ 和
$X_n\xrightarrow{d} c$ 是等价的，所以只要证明
\[
\frac{S_n-n\mu}{n}\xrightarrow{d} 0
\]
这可以通过计算[[特征函数（概率论）|特征函数]]得到。令 $Y_k=\frac1n(X_k-\mu)$，
则 $\frac{S_n-n\mu}n=\sum_{k=1}^n Y_k$。设 $\phi(t)$ 是
$Y_1$ 的特征函数，则 $\frac{S_n-n\mu}{n}$ 的
特征函数是 $\phi^n(t)$。

现在考虑函数 $\phi(t)$，因为 $\mathbb{E}(X_1-\mu)=0$，故根据特征函数的
[[Taylor 展开]]，有
\[
\phi(t)=1+o(t/n),\quad n\to\infty
\]
从而
\[
\phi^n(t)=(1+o(t/n))^n\to 1,\quad n\to\infty
\]
这就证明了[[依分布收敛]]性，从而成立。
:::

最后举一个序列 $b_n\neq n$ 的例子。考虑一列袋子，第 $k$ 个袋子
中装着一个白球和 $k-1$ 个黑球。用 $Z_n$ 表示：在前 $n$ 个袋子中
各拿一个球，其中白球的个数。则可以证明：对任意 $r>\frac12$ 有
\[
\frac{Z_n-\mathbb{E}(Z_n)}{\ln^r n}\xrightarrow{p} 0
\]

## 强大数定律

强大数定律的证明过程明显比弱的版本困难。首先是证明了四阶[[矩]]存在
和方差存在的情形，然后才由 [[Andrey Kolmogorov|Kolmogorov]] 证明
了期望存在的情形。

先列举一些在证明中需要使用的结论。

::: lemma [Kronecker 引理] {@Kr}
设 $(x_n)$ 为实数列，$(b_n)$ 为递增趋于无穷的正数列。
如果[[级数]] $\sum_{n=1}^\infty\frac{x_n}{b_n}$ 收敛，则
\[
\lim_{n\to\infty}\frac{1}{b_n}\sum_{k=1}^n x_k=0
\]
:::

::: theorem [三级数定理] {@3}
设 $(X_n)$ 为相互独立的随机变量序列。则级数 $\sum_{n=1}^\infty X_n$
几乎必然收敛的充要条件是：存在 $c>0$，使得

1. $\sum_{n=1}^\infty \mathbb{P}(|X_n|>c)<\infty$；

2. $\sum_{n=1}^\infty \mathbb{E}(X_nI(|X_n|\leq c))$ 收敛；

3. $\sum_{n=1}^\infty \operatorname{Var}(X_nI(|X_n|\leq c))<\infty$；

其中 $I(A)$ 表示事件 $A$ 的[[指示函数|指示变量]]。
:::

通过这些结论和“截尾法”就可以证明强大数定律了。

::: theorem [Kolmogorov 强大数定律]
设 $(X_n)$ 是独立同分布的随机变量序列，则存在常数 $a$ 使得
\[
\frac{S_n-na}{n}\longrightarrow 0\quad\mathrm{a.s.}
\]
的充要条件是 $\mathbb{E}|X_1|<\infty$ 且 $\mathbb{E}(X_1)=a$。
:::

::: proof
必要性。如果 $S_n/n\xrightarrow{\mathrm{a.s.}} a$，
则
\[
\frac{X_n}{n} = \frac{S_n - S_{n-1}}{n}
        = \frac{S_n}{n} - \frac{n-1}{n}\frac{S_{n-1}}{n-1}
        \to 0,\quad \mathrm{a.s.}
\]
于是对任意 $\varepsilon>0$：
\[
 \mathbb{P}(|X_n| \geq n\varepsilon \quad\mathrm{i.o.})
=\mathbb{P}\left(\frac{|X_n|}{n} \geq \varepsilon \quad\mathrm{i.o.}\right)
=0
\]
其中
\[
A_n \quad\mathrm{i.o.} = \bigcap_{k=1}^\infty\bigcup_{n=k}^\infty A_n
\]
表示事件序列 $\{A_n\}$ 中有无穷多个发生的事件。
令 $\varepsilon = 1$，根据 [[Borel–Cantelli 引理]]，有
\[
\sum_{n=1}^\infty \mathbb{P}(|X_1| \geq n) < \infty
\]
也就是 $\mathbb{E}|X_1|<\infty$。因为
$\mathbb{E}\left(\frac{S_n}{n}\right) = \mathbb{E}(X_1)$，
所以 $\mathbb{E}(X_1)=a$。

充分性。记 $Y_n=X_nI(|X_n| < n)$，则
\[
 \sum_{n=1}^\infty \mathbb{P}(Y_n \neq X_n)
=\sum_{n=1}^\infty \mathbb{P}(|X_n| \geq n)
=\mathbb{E}|X_1| < \infty
\]
由 [[Borel–Cantelli 引理]]，$\mathbb{P}(Y_n \neq X_n \quad\mathrm{i.o.}) = 0$。
从而为了证明结论，只要证明
\[
\frac{1}{n}\left(\sum_{k=1}^n Y_k - na\right)\longrightarrow 0 \quad\mathrm{a.s.}
\]
而 $\mathbb{E}(Y_n) = \mathbb{E}(X_nI(|X_n|<n))\to a, n\to\infty$，
故由 [[Stolz 定理]]可得 $\frac1n\sum_{k=1}^n \mathbb{E}(Y_k)\to a,n\to\infty$。
从而只要证明

```math {@1}
\frac{1}{n}\sum_{k=1}^n(Y_k-\mathbb{E}(Y_k))\longrightarrow 0 \quad\mathrm{a.s.}
```

下面验证 @3 的条件。注意到
\[
\frac{|Y_n-\mathbb{E}(Y_n)|}{n} \leq 2, \quad \mathbb{E}\frac{Y_n-\mathbb{E}(Y_n)}{n} = 0
\]
且
\[
\begin{aligned}
    \sum_{n=1}^\infty\operatorname{Var}\left(\frac{Y_n - \mathbb{E}(Y_n)}{n}\right)
  &=\sum_{n=1}^\infty\frac{1}{n^2}(\mathbb{E}(Y_n^2) - \mathbb{E}(Y_n)^2)\\
  &\leq\sum_{n=1}^\infty\frac{1}{n^2}\mathbb{E}(Y_n^2)\\
  &=\sum_{n=1}^\infty\frac{1}{n^2}\mathbb{E}(X_1^2I(|X_1| < n))\\
  &=\sum_{n=1}^\infty\frac{1}{n^2}\sum_{k=1}^n \mathbb{E}(X_1^2I(k-1 \leq |X_1| < k))\\
  &\leq\sum_{n=1}^\infty\frac{1}{n^2}\sum_{k=1}^n k^2\mathbb{P}(k-1 \leq |X_1| < k)\\
  &=\sum_{k=1}^\infty k^2 \mathbb{P}(k-1 \leq |X_1| < k)\sum_{n=k}^\infty\frac{1}{n^2}\\
  &\leq 2\sum_{k=1}^\infty k\mathbb{P}(k-1 \leq |X_1| < k)\\
  &\leq 2(1 + \mathbb{E}|X_1|) < \infty
\end{aligned}
\]
根据 @3，得
\[
\sum_{n=1}^\infty\frac{Y_n - \mathbb{E}(Y_n)}{n}
\]
几乎必然收敛。再根据 @Kr，得 @1 式成立。
:::

上述定理还能进行推广。

::: theorem [Marcinkiewicz 强大数定律]
设 $(X_n)$ 是独立同分布的随机变量序列，$r\in (0,2)$，则存在常数 $a$ 使得
\[
\frac{S_n-na}{n^{\frac1r}}\xrightarrow{\mathrm{a.s.}} 0
\]
的充要条件是 $\mathbb{E}|X_1|^r<\infty$，并且当 $r\in [1,2)$ 时 $a=\mathbb{E}(X_1)$，
当 $r\in (0,1)$ 时 $a$ 为任意实数。
:::

## 应用

### 计算积分

大数定律应用在一些[[连续型随机变量]]上，可以用来处理
普通分析方法较难处理的一些积分。比如：

::: proposition
设 $f$ 是区间 $[0,1]$ 上的正值[[连续函数]]，则
\[
\lim_{n\to\infty} \int_{0}^{1} \cdots \int_{0}^{1} \frac{n}{f(x_1) + \cdots + f(x_n)} \mathrm{d}x_1 \cdots \mathrm{d}x_n
= \frac{1}{\int_0^1 f(x) \mathrm{d}x}
\]
:::

::: proof
设随机变量 $X$ 服从[[均匀分布]] $U(0,1)$。
则
\[
\mathbb{E}(f(X)) = \int_{0}^{1} f(x) \mathrm{d}x
\]
设 $X_1,X_2,\cdots$ 相互独立且都与 $X$ 同分布，则
$f(X_k)$ 也相互独立。由强大数定律：
\[
\frac{1}{n}(f(X_1) + \cdots + f(X_n)) \longrightarrow \mathbb{E}(f(X)) \quad \mathrm{a.s.}
\]
因为 $f$ 是闭区间上的正值连续函数，所以有正的下界。
不难证明：如果 $X_n \xrightarrow{\mathrm{a.s.}} X$，
且这些随机变量都有正的下界，则 $X_n^{-1} \xrightarrow{\mathrm{a.s.}} X^{-1}$ 成立。
于是结论的证明只需注意到欲证式左边就是
\[
\mathbb{E}\left(\frac{n}{f(X_1) + \cdots + f(X_n)}\right)
\]
:::

### Monte Carlo 方法

许多统计模拟方法的理论依据是大数定律。以 Monte Carlo 方法为例，
如果要计算某平面图形（实际上就是 $\mathbb R^2$ 上的可测集）$A$ 的面积 $\sigma(A)$，
只需取一个图形 $\Omega \supset A$ 为[[概率空间]]，且其面积易计算。则
根据[[几何概型]]，任取一点，落入图形 $A$ 中的概率是
$\mathbb{P}(A)=\frac{\sigma(A)}{\sigma(\Omega)}$。
另一方面，大量取点，设 $n$ 次取点后落在图形 $A$ 的点的个数为 $Z_n$。
则根据 @B，有
\[
\frac{Z_n}{n} \xrightarrow{p} \mathbb{P}(A)
\]
当 $n$ 很大时，可以近似认为
\[
\frac{Z_n}{n} \approx \mathbb{P}(A) = \frac{\sigma(A)}{\sigma(\Omega)}
\]
从而可以求出图形 $A$ 的面积。

```terms
大数定律:
  en: law of large numbers
  fr: loi des grands nombres
  de: Gesetz der großen Zahlen
  ja: 大<たい>数<すう>の法<ほう>則<そく>
弱大数定律:
  en: weak law of large numbers
  fr: loi faible des grands nombres
  de: Schwaches Gesetz der großen Zahlen
  ja: 大<たい>数<すう>の弱<じゃく>法<ほう>則<そく>
强大数定律:
  en: strong law of large numbers
  fr: loi forte des grands nombres
  de: Starkes Gesetz der großen Zahlen
  ja: 大<たい>数<すう>の強<きょう>法<ほう>則<そく>
```
