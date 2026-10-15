---
title: 几乎必然收敛与依概率收敛
---

在大数定律中，我们需要考虑一列随机变量的极限行为。
由于随机变量本质上都是定义域为样本空间$\Omega$的函数，
研究随机变量列的极限本质上也就是研究函数列的极限。
然而在微积分或数学分析课程中所接触过的几种函数列的收敛方式
（包括逐点收敛、一致收敛等）在概率论中都太强了，
我们需要引入新的方式来刻画随机变量序列的收敛。

::: definition
设$X$为随机变量，$X_1,X_2,\ldots$为一列随机变量。

1. 我们称$X_n$在$n\rightarrow\infty$时**几乎必然收敛**于$X$
   （$X_n$ converges to $X$ almost surely as $n\rightarrow\infty$），
   记为$X_n\xrightarrow{a.s.} X$，若事件

   ```math {@eq:event_limit_exists}
   \left\{\omega\in\Omega \Bigm\vert
   \lim_{n\rightarrow\infty}X_n(\omega)\ \text{存在且等于}\ X(\omega)\right\}
   ```

   的概率为$1$。

2. 我们称$X_n$在$n\rightarrow\infty$时**依概率收敛**于$X$
   （$X_n$ converges to $X$ in probability as $n\rightarrow\infty$），
   记为$X_n\xrightarrow{P} X$，若给定任意$\epsilon>0$，均有
   \[
   \lim_{n\rightarrow\infty}\mathbb{P}(|X_n-X|>\epsilon)=0.
   \]

:::

不难看出，几乎必然收敛其实和逐点收敛比较类似：逐点收敛实际上就是要求
式 @eq:event_limit_exists  给出的事件是必然事件，
而几乎处处收敛则将其放宽为几乎必然事件。另一方面，
依概率收敛与我们在微积分或数学分析中学过的函数列收敛方式有很大的不同，
它更适合直接在概率论的框架下理解。

可以证明，几乎必然收敛蕴含了依概率收敛：

::: theorem {@theorem:almost_surely_implies_in_prob}
设$X$与$X_1,X_2,\ldots$为随机变量。则当
$X_n\xrightarrow{a.s.}X$时，有$X_n\xrightarrow{P}X$。
:::

@theorem:almost_surely_implies_in_prob  的证明
超出了本讲义的范围，我们将其作为选读内容
放在[第5.4节](/books/概率与数理统计/大数定律与中心极限定理/一些定理的证明/)的第1小节。
另一方面，可以构造出$(X_n)_{n=1}^\infty$与$X$的例子使得
$X_n\xrightarrow{P}X$但事件 @eq:event_limit_exists
的概率小于$1$（甚至可以是$0$），这意味着依概率收敛与几乎必然收敛并不等价。

::: remark
（${}^\star$）
几乎必然收敛与依概率收敛的区别可以这样理解：
依概率收敛$X_n\xrightarrow{P} X$仅保证了对于每个
足够大的自然数$n$，事件
\[
\{|X_n-X|>\epsilon\}
\]
的概率非常小，且$n\rightarrow\infty$时它的概率趋于$0$，
但它不足以保证事件
\[
\begin{aligned}
 E_\epsilon ={} &
\left\{
\text{存在无穷多个自然数 $m$ 使得 $|X_m-X|>\epsilon$}
\right\} \\
={} &
\left\{
\text{对每个自然数 $k$, 都存在自然数 $m\geq k$ 使得 $|X_m-X|>\epsilon$}
\right\} \\ ={} &
\bigcap_{k=1}^\infty \bigcup_{m=k}^\infty\left\{
|X_m-X|>\epsilon\right\}
\end{aligned}
\]
的概率为零，也就是说在$X_n\xrightarrow{P} X$时仍可能
有非零的概率使得$(X_n)_{n=1}^\infty$当中有无穷多个
偏离$X$的程度超过$\epsilon$的项。而几乎必然收敛则能保证
事件$E_\epsilon$的概率为零，这是因为
$X_n(\omega)\rightarrow X(\omega)$保证了对任意$\epsilon>0$，
只有有限多个$m$使得$|X_m(\omega)-X(\omega)|>\epsilon$。
:::
