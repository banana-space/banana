---
title: '（${}^\star$）一些定理的证明'
---

<problems>
- “Borel–Cantelli引理与强大数定律”一节强大数定律的证明中，Chebyshev 不等式给出的上界似乎应为 $\frac{\sigma^2}{n^2\epsilon^2}$，相应地级数的上界似乎应为 $\frac{\sigma^2}{\epsilon^2}\sum_{n=1}^\infty \frac{1}{n^2}$。
</problems>

## 几乎处处收敛与依概率收敛* {@subsection:convergence_as_in_prob}

本小节将证明 @theorem:almost_surely_implies_in_prob，
即几乎必然收敛蕴含依概率收敛。

任取$\epsilon>0$，记
\[
E = \left\{\omega\in\Omega \Bigm\vert
\lim_{n\rightarrow\infty}X_n(\omega)\ \text{存在且等于}\ X(\omega)\right\}.
\]
则由极限的定义，可得
\[
\begin{aligned}
E^c & = \left\{\text{存在 $\epsilon_0>0$,
使得对任意正整数 $N$, 存在 $n\geq N$ 使 $|X_n-X|\geq\epsilon_0$}\right\} \\
& = \bigcup_{\epsilon_0>0}\left\{
\text{对任意正整数 $N$ , 存在 $n\geq N$ 使 $|X_n-X|>\epsilon_0$}
\right\} \\
& \supseteq \left\{
\text{对任意正整数 $N$, 存在 $n\geq N$ 使 $|X_n-X|>\epsilon$}
\right\} \\
& = \bigcap_{N= 1}^\infty \left\{
\text{存在 $n\geq N$ 使 $|X_n-X|>\epsilon$}
\right\}
 = \bigcap_{N= 1}^\infty\bigcup_{n=N}^\infty \left\{|X_n-X|>\epsilon
\right\}.
\end{aligned}
\]
由于$\mathbb{P}(E^c)=0$，故上式最右端事件的概率也为$0$。
记$A_N = \bigcup_{n=N}^\infty \{|X_n-X|>\epsilon\}$，
则有$A_1\supseteq A_2\supseteq A_3\supseteq\cdots$，
故由概率的单调连续性可得
\[
0 = \mathbb{P}\!\left(\bigcap_{N= 1}^\infty\bigcup_{n=N}^\infty \left\{|X_n-X|>\epsilon
\right\}\right)
= \mathbb{P}\!\left(\bigcap_{N= 1}^\infty A_N\right)
=\lim_{N\rightarrow\infty}\mathbb{P}(A_N).
\]
另一方面，$A_N\supseteq \{|X_N-X|>\epsilon\}$，
因此$\mathbb{P}(|X_N-X|>\epsilon)\leq \mathbb{P}(A_N)$，
再令$N\rightarrow\infty$即得到
\[
\lim_{N\rightarrow\infty} P(|X_N-X|>\epsilon)=0.
\]
由$\epsilon>0$的任意性可知$X_n\xrightarrow{P} X$。

## Borel–Cantelli引理与强大数定律* {@section:Borel-Cantelli}

Borel–Cantelli第一与第二引理是概率论中用于研究随机变量序列
几乎必然收敛性的基础工具。本节中我们对Borel–Cantelli第一引理
做简要介绍，并进一步证明一个较弱的强大数定律。

::: lemma [Borel–Cantelli第一引理]
设$A_n,\,n\in\mathbb{N}_+$为一列事件，且级数
$
\sum_{n=1}^\infty \mathbb{P}(A_n)
$
收敛，则事件
\[
\left\{\omega\in\Omega \mid
\text{存在无穷多个正整数 $n$ , 使得 $\omega\in A_n$}\right\}.
\]
的概率为$0$。
:::

::: proof
记$B = \{\omega\in\Omega \mid
\text{存在无穷多个正整数 $n$, 使得 $\omega\in A_n$}
\}$，则有
\[
\begin{aligned}
B
& = \left\{\omega\in\Omega \mid \text{对任意正整数 $k$,
均存在 $n\geq k$, 使得 $\omega\in A_n$}\right\} \\
& = \bigcap_{k=1}^\infty \left\{\omega\in\Omega \mid
\text{存在 $n\geq k$, 使得 $\omega\in A_n$}\right\} \\
& = \bigcap_{k=1}^\infty \bigcup_{n=k}^\infty
A_n.
\end{aligned}
\]
记$C_k = \bigcup_{n=k}^\infty A_n$，则有
$C_1\supseteq C_2\supseteq C_3\supseteq\cdots$
以及$B=\bigcap_{k=1}^\infty C_k$，因而由概率的单调连续性可得
\[
\mathbb{P}(B) = \lim_{k\rightarrow\infty} \mathbb{P}(C_k).
\]
另一方面，令$D_{k,j} = \bigcup_{n=k}^j A_n$，则有
$D_{k,k}\subseteq D_{k,k+1}\subseteq D_{k,k+2}\subseteq\cdots$，以及
\[
\bigcup_{j=k}^\infty D_{k,j} = \bigcup_{j=k}^\infty \bigcup_{n=k}^j A_n = \bigcup_{n=k}^\infty A_n,
\]
故由概率的单调连续性以及次可加性可得
\[
\mathbb{P}(C_k) =
\lim_{j\rightarrow\infty}
\mathbb{P}\!\left(D_{k,j}\right)
=\lim_{j\rightarrow\infty}
\mathbb{P}\!\left(\bigcup_{n=k}^j A_n\right)
\leq
\lim_{j\rightarrow\infty}
\sum_{n=k}^j
\mathbb{P}\!\left(A_n\right)
=\sum_{n=k}^\infty
\mathbb{P}\!\left(A_n\right),
\]
从而
\[
\mathbb{P}(B) = \lim_{k\rightarrow\infty}\mathbb{P}(C_k)
\leq \lim_{k\rightarrow\infty}\sum_{n=k}^\infty \mathbb{P}(A_n) = 0,
\]
其中最后一步用到了级数$\sum_{n=1}^\infty\mathbb{P}(A_n)$的收敛性。
:::

下面我们将证明如下强大数定律，该定理及证明取自
[@grimmett2001probability]第7.4节定理(3)：

::: theorem
设$X_1,X_2,\ldots$为一列独立同分布的随机变量，
且$\mathbb{E}[X_1]$与$\operatorname{Var}(X_1)$均存在。
则有$\overline{X}_n\xrightarrow{a.s.}\mathbb{E}[X_1]$，也就是说事件
\[
\left\{\omega\in\Omega\Biggm\vert
\lim_{n\rightarrow\infty}\frac{1}{n}\sum_{i=1}^n X_i\
\text{存在且等于}\ \mathbb{E}[X_1]\right\}
\]
的概率为$1$。
:::

::: proof
首先考虑$X_n$均为非负变量的情形。记$\mu=\mathbb{E}[X_1]$，
$\sigma^2=\operatorname{Var}(X_1)$。由切比雪夫不等式，
可得对于任意$\epsilon>0$，有
\[
\mathbb{P}\!\left(\left|\overline{X}_{n^2}-\mu\right|>\epsilon\right)
\leq \frac{\operatorname{Var}\!\left(\overline{X}_{n^2}\right)}{\epsilon^2}
= \frac{\sigma^2}{n^2\epsilon}.
\]
令
\[
A_{\epsilon,n} = \left\{\left|\overline{X}_{n^2}-\mu\right|>\epsilon\right\},
\]
则
\[
\sum_{n=1}^\infty \mathbb{P}(A_{\epsilon,n})
\leq \frac{\sigma^2}{\epsilon}\sum_{n=1}^\infty \frac{1}{n^2},
\]
故级数$\sum_{n=1}^\infty \mathbb{P}(A_{\epsilon,n})$收敛。
由Borel–Cantelli第一引理可得，对任意$\epsilon>0$，事件
\[
\begin{aligned}
B_\epsilon & = \left\{\omega\in\Omega \mid
\text{存在无穷多正整数 $n$ 使得 $\omega\in A_{\epsilon,n}$}\right\} \\
& = \left\{\text{存在无穷多正整数 $n$ 使得
$\left|\overline{X}_{n^2}-\mu\right|>\epsilon$}\right\}
\end{aligned}
\]
的概率为$0$。另一方面，若记事件
\[
\tilde{E} = \left\{\lim_{n\rightarrow\infty}\overline{X}_{n^2}\ \text{存在且等于}\ \mu\right\},
\]
则根据极限定义，有
\[
\begin{aligned}
\tilde{E}^c & = \left\{\text{存在 $\varepsilon_0>0$,
使得对任意正整数 $N$, 存在 $n\geq N$ 使 $\left|\overline{X}_{n^2}-\mu\right|>\epsilon_0$}\right\}, \\
& = \left\{\text{存在 $\varepsilon_0>0$, 使得
$\left|\overline{X}_{n^2}-\mu\right|>\epsilon_0$ 对无穷多个正整数 $n$ 成立}\right\} \\
& = \left\{\text{存在正整数 $k$, 使得 $\left|\overline{X}_{n^2}-\mu\right|>\frac{1}{k}$ 对无穷多个正整数 $n$ 成立}\right\} \\
& = \bigcup_{k=1}^\infty
\left\{\left|\overline{X}_{n^2}-\mu\right|
>\frac{1}{k}\ \text{对无穷多个正整数 $n$ 成立}\right\}
=\bigcup_{k=1}^\infty B_{\frac{1}{k}}.
\end{aligned}
\]
不难看出对任意正整数$k$均有
$B_{\frac{1}{k}}\subseteq B_{\frac{1}{k+1}}$，
因此由概率的连续性，
\[
\mathbb{P}\big(\tilde{E}^c\big) = \lim_{k\rightarrow\infty}\mathbb{P}\!\left(B_{\frac{1}{k}}\right) = 0.
\]
也就是说，事件$\tilde{E}$的概率为$1$。

下面我们将证明对任意的$\omega\in \tilde{E}$，
不仅$\overline{X}_{n^2}(\omega)$收敛于$\mu$，
而且$\overline{X}_{n}(\omega)$也同样收敛于$\mu$。
对任意正整数$k$，记$n(k)$为满足$n(k)^2\leq k$的最大正整数。
任取$\omega\in \tilde{E}$，则由$X_n$的非负性，可得
\[
\sum_{i=1}^{n(k)^2} X_i(\omega) \leq \sum_{i=1}^{k} X_i(\omega)\leq \sum_{i=1}^{(n(k)+1)^2} X_i(\omega),
\]
将上式除以$k$，即可得到
\[
\frac{n(k)^2}{k}\overline{X}_{n(k)^2}(\omega)
\leq \overline{X}_k(\omega)
\leq \frac{(n(k)+1)^2}{k}\overline{X}_{(n(k)+1)^2}(\omega),
\]
令上式$k\rightarrow\infty$并注意到$n(k)^2/k\rightarrow 1$
以及$(n(k)+1)^2/k\rightarrow 1$，即可由极限的夹挤原理得到
\[
\lim_{k\rightarrow\infty}  \overline{X}_k(\omega)
= \lim_{n\rightarrow\infty} \overline{X}_{n^2}(\omega) = \mu.
\]
由$\omega\in \tilde{E}$的任意性，可得事件
\[
\left\{\omega\in\Omega \Bigm\vert
\lim_{n\rightarrow\infty}\overline{X}_n\ \text{存在且等于}\ \mu\right\}
\]
就等于事件$\tilde{E}$，从而其概率为$1$。

以上证明假定了$X_n$均为非负随机变量。对于一般情形，
考虑$X_n^+ = \max\{X_n,0\}$以及$X_n^-=\max\{-X_n,0\}$。由于
\[
0\leq X_n^+ \leq |X_n|,\qquad 0\leq X_n^-\leq |X_n|,
\]
故$\mathbb{E}[X_n]$与$\operatorname{Var}(X_n)$的存在性
保证了$\mathbb{E}[X_n^+]$与$\mathbb{E}[X_n^-]$以及
$\operatorname{Var}(X_n^+)$与$\operatorname{Var}(X_n^-)$的存在性。令
\[
\overline{X}_n^+ = \frac{1}{n}\sum_{i=1}^n X_i^+,\qquad \overline{X}_n^- = \frac{1}{n}\sum_{i=1}^n X_i^-,
\]
并令
\[
\begin{aligned}
E_+ & = \left\{\omega\in\Omega \Bigm\vert
\lim_{n\rightarrow\infty}\overline{X}_n^+\ \text{存在且等于}\ \mathbb{E}[X_1^+]\right\}, \\
E_- & = \left\{\omega\in\Omega \Bigm\vert
\lim_{n\rightarrow\infty}\overline{X}_n^-\ \text{存在且等于}\ \mathbb{E}[X_1^-]\right\}, \\
E &= \left\{\omega\in\Omega \Bigm\vert
\lim_{n\rightarrow\infty}\overline{X}_n\ \text{存在且等于}\ \mathbb{E}[X_1]\right\},
\end{aligned}
\]
则有$\mathbb{P}(E_+)=\mathbb{P}(E_-)=1$，
以及$E_+\cap E_-\subseteq E$，从而
\[
\mathbb{P}(E^c) = \mathbb{P}(E_+^c \cup E_-^c)
\leq \mathbb{P}(E_+^c) + \mathbb{P}(E_-^c) = 0,
\]
即$\mathbb{P}(E)=1$。
:::
