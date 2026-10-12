---
title: '作业：$\zeta(2)$ 的无理性'
---

## 习题A：课堂补充

- A1) 试构造连续函数 $f_n,f\in C\bigl([0,1]\bigr)$，使得对任意的 $x\in [0,1]$，
  当 $n\rightarrow \infty$ 时，$f_n(x)\rightarrow f(x)$，但是
  \[
  \lim_{n\rightarrow \infty}\int_{0}^1 f_n \neq \int_0^1 f.
  \]

- A2) $\alpha\in \mathbb{R}_{\geqslant 0}$。
  证明，
  反常积分 $\displaystyle\int_{100}^\infty \dfrac{dx}{x\log^\alpha(x)}$ 收敛当且仅当 $\alpha>1$。

- A3)（反常积分的控制判别法）$f$ 和 $F$ 在区间 $I$ 上定义，即 $f\colon I\rightarrow \mathbb{R}$，
  $F\colon I\rightarrow \mathbb{R}$ 并且对任意的有界闭区间 $J\subset I$，
  $f$ 和 $F$ 均为 $J$ 上的Riemann可积函数。假设对任意的 $x\in I$，我们都有
  \[
  \big|f(x)\big|\leqslant F(x).
  \]
  如果 $F$ 在区间 $I$ 上的反常积分收敛，那么 $f$ 在区间 $I$ 上的反常积分也收敛。

- A4) 利用控制判别法，证明如下反常积分的收敛性：
  \[
  \begin{aligned}
  &(1)~ \int_0^\infty e^{-x^2} \; \mathrm{d}x     &\ &(2)~ \int_{0}^1 \frac{\mathrm{d}x}{\sqrt{1-x^3}}   &\ &(3)~ \int_1^\infty\frac{(\log x)^2}{1+x(\log x)^5} \;\mathrm{d}x.
  \end{aligned}
  \]

- A5) 利用控制判别法和面积法，证明如下级数的收敛性：
  \[
  \begin{aligned}
  &(1)~ \sum_{n=1}^\infty e^{-n}(n^2+\log n)     &\ &(2)~ \sum_{n=1}^\infty \frac{\log n}{1+n(\log n)^3} .
  \end{aligned}
  \]

- A6) 利用积分的定义计算：
  \[
  \lim_{n\rightarrow \infty} \sum_{k=1}^n \frac{k^\alpha}{n^{\alpha+1}}, \ \alpha>-1.
  \]

- A7)（$\dfrac{22}{7}$）计算 $\displaystyle \int_0^1 \frac{x^4(1-x)^4}{1+x^2}\;\mathrm{d}x$。
  你是否能借此证明 $\pi=3.14...$，即给出 $\pi$ 到小数点两位的逼近。

- A8)（$\pi$ 是无理数）假定 $a,b$ 和 $n$ 是正整数，定义函数
  \[
  f_{a,b;n}(x)=\frac{x^n(a-bx)^n}{n!}.
  \]

  - 证明：对于 $k=0,1,2,\cdots,2n$，
    函数 $f_{a,b;n}(x)$ 的 $k$ 阶导数 $f^{(k)}_{a,b;n}(x)$ 在 $x=0$ 和 $x=\dfrac{a}{b}$
    处的取值都是整数。

  - 假定圆周率 $\pi=\frac{a}{b}$ 是有理数，其中 $a$ 和 $b$ 是正整数。证明，对任意的正整数 $n$，积分
    \[
    \int_{0}^\pi f_{a,b;n}(x)\sin(x)dx
    \]
    是整数。

  - 证明：圆周率 $\pi$ 不是有理数。

- A9)（完成Wallis积分的渐近公式）利用第23次讲义中的知识，
  对于Wallis积分 $\displaystyle I_n=\int_{0}^\frac{\pi}{2} \sin^n x dx$，证明，
  \[
  I_n\sim \sqrt{\dfrac{\pi}{2n}}.
  \]

- A10) 证明当年Leibniz用的面积公式：假设 $f\colon [0,1]\rightarrow [0,1]$ 是单调递增的双射，
  $g=f^{-1}\colon [0,1]\rightarrow [0,1]$ 是它的逆映射，并且 $f$ 和 $g$ 是连续可微的。那么，
  \[
  \int_0^1 f(x)dx+\int_0^1 g(y)dy = 1.
  \]

- A11) 证明讲义中Leibniz级数的计算中所用的极限：
  \[
  \lim_{\varepsilon\rightarrow 0}\sum_{k=0}^\infty \frac{(-1)^k(1-\varepsilon)^{2k+1}}{2k+1}=\sum_{k=0}^\infty \frac{(-1)^k}{2k+1}.
  \]

- A12) 对任意的连续函数 $f\colon [a,b]\times [c,d]\rightarrow \mathbb{R}, (x,y)\rightarrow f(x,y)$，
  其中 $a,b,c,d \in \mathbb{R}$，证明，$f$ 在 $[a,b]\times [c,d]$ 上一致连续。
  （其参考讲义的一般情形）

## 习题B：关于 $\zeta(2)$

### 第一部分：数列 $\displaystyle\Bigl\{ \sum_{k=1}^n\frac{1}{k^p}\Bigr\}_{n\geqslant 1}$

我们定义序列 $\displaystyle S_n(p)=\sum_{k=1}^n\frac{1}{k^p}$，
其中 $p\in \mathbb{Z}_{\geqslant 1}$。

- B1) 证明，对任意的 $k\in \mathbb{Z}_{\geqslant 1}$，我们有
  \[
  \frac{1}{(k+1)^p}\leqslant \int_{k}^{k+1}\frac{1}{x^p}dx \leqslant \frac{1}{k^p}.
  \]

- B2) 证明，对任意的 $n\in \mathbb{Z}_{\geqslant 2}$，我们有
  \[
  S_n(p)-1\leqslant \int_{1}^{n}\frac{1}{x^p}dx \leqslant S_{n-1}(p).
  \]

- B3) 我们假设 $p\in \mathbb{Z}_{\geqslant 1}$。
  证明，函数 $x\mapsto \dfrac{1}{x^p}$ 在 $[1,+\infty)$ 上反常可积当且仅当 $p\geqslant 2$。

- B4) 证明，数列 $\{S_n(p)\}_{n\geqslant 1}$ 收敛当且仅当 $p\geqslant 2$。
  对于 $p\geqslant 2$，我们下面记
  \[
  \zeta(p)=\lim_{n\rightarrow \infty}S_n(p)=\sum_{k=1}^\infty \frac{1}{k^p}.
  \]

### 第二部分：计算 $\zeta(2)$

定义函数 $h(t)=\dfrac{t^2}{2\pi}-t$，
定义 $[0,\pi]$ 上的函数 $\varphi\colon [0,\pi]\rightarrow \mathbb{R}$：
\[
\varphi(x)=\begin{cases}
-1, \ \ \ \ x=0;\\
\dfrac{h(x)}{2\sin(\frac{x}{2})}, \ \ 0<x\leqslant \pi.
\end{cases}
\]

- B5) 证明，$\varphi\in C^1([0,\pi])$。

- B6) 对所有的整数 $k\geqslant 1$，计算如下积分的值：
  \[
  \int_0^\pi h(x)\cos(kx)dx.
  \]

- B7) 证明，存在常数 $\lambda$（给出它的值），使得对任意的 $x\in(0,\pi]$，我们都有
  \[
  \sum_{k=1}^n \cos(kx)=\frac{\sin\bigl((n+\frac{1}{2})x\bigr)}{2\sin(\frac{x}{2})}-\lambda.
  \]

- B8) 证明，对于任意的函数 $\psi(x)\in C^1([0,\pi])$，我们都有如下的极限：
  \[
  \lim_{n\rightarrow +\infty}\int_0^\pi \psi(x)\sin\bigl((n+\frac{1}{2})x\bigr)dx =0.
  \]

- B9) 证明如下的等式：
  \[
  \zeta(2)=\frac{1}{6}\pi^2.
  \]
  （提示：利用分部积分）

### 第三部分：$\zeta(2)$ 是无理数

我们采取反证法。在这一部分中，我们假设
\[
\pi^2 =\frac{a}{b}
\]
其中 $a$，$b$ 是正整数。我们要推出矛盾。

- B10) 定义多项式的序列 $f_n(x)=\dfrac{x^n(1-x)^n}{n!}$，其中 $n\in \mathbb{Z}_{\geqslant 1}$。
  证明，对任意的整数 $k$，上述函数的高阶导数 $f_n^{(k)}(0)$ 和 $f_n^{(k)}(1)$ 都是整数。

- B11) 定义函数的序列
  \[
  F_n(x)=b^n(\pi^{2n}f_n(x)-\pi^{2n-2}f_n^{(2)}(x)+\pi^{2n-4}f_n^{(4)}(x)-\cdots +(-1)^nf_n^{(2n)}(x)).
  \]
  证明，$F_n(0)$ 和 $F_n(1)$ 都是整数。

- B12) 对于 $n\geqslant 1$，
  定义函数序列 $\{g_n\}_{n\geqslant 1}$ 和序列 $\{A_n\}_{n\geqslant 1}$ 如下：
  \[
  g_n(x)=F_n'(x)\sin(\pi x)-\pi F_n(x)\cos(\pi x), \ \ A_n=\pi \int_0^1 a^n f_n(x)\sin(\pi x) dx.
  \]
  证明等式：
  \[
  g_n'(x)=\pi^2 a^n f_n(x)\sin(\pi x)
  \]
  以及 $A_n$ 是正整数。

- B13) 证明，存在正整数 $n$，使得对任意的 $x\in [0,1]$，我们都有
  \[
  a^n f_n(x)<\frac{1}{2}.
  \]

- B14) 证明，存在正整数 $n$，使得 $A_n\in (0,1)$。这和 B12)矛盾。

## 习题C：定积分的计算

试计算下列定积分（常数 $a\neq 0$，$b\neq 0$。）
\[
\begin{aligned}
&(1) \int_0^\pi \sin^3 x     &\ &(2) \int_{-\pi}^\pi x^2\cos x   &\ &(3) \int_0^3\frac{x }{1+\sqrt{1+x}} \\
&(4) \int_0^{\sqrt{3}} x\, {\rm arctan} (x) &\ & (5)  \int_{-1}^0 (2x+1)\sqrt{1-x-x^2}   &\ &(6) \int_{\frac{1}{e}}^e |\log x|\\
&(7) \int_0^a x^2\sqrt{a^2-x^2}  &\ &(8) \int_0^{\log 2} \sqrt{e^x-1} &\ & (9) \int_1^2 x^{100} \log x \\
&(10) \int_0^a \log(x+\sqrt{x^2+a^2}) &\ &(11) \int_{0}^{\frac{\pi}{2}} \frac{\cos x \sin x}{a^2\sin^2 x+b^2 \cos^2 x} &\ &(12) \int_0^{\frac{\pi}{2}} \frac{\cos^2 x}{\cos x+\sin x} \\
&(13)\int_0^{\frac{\pi}{2}} \frac{\sin^2 x}{\cos x+\sin x} &\ &(14) \int_0^{\frac{\pi}{4}} \log(1+\tan x)  &\ &(15) \int_0^4 \frac{|x-1|}{|x-2|+|x-3|} \\
&(16) \int_0^\pi \frac{x\sin x}{1+\cos^2 x} &\ & (17) \int_0^{\frac{\pi}{4}} \frac{\sin x}{\sin x +\cos x} &\ &(18) \int_0^{\frac{\pi}{2}} \frac{\sin 2019x}{\sin x} \\
&(19) \int_2^4 \frac{\log\sqrt{9-x}}{\log\sqrt{9-x}+\log\sqrt{x+3}}&\ &(20) \int_0^1\frac{1}{\sqrt{1+x^2}+\sqrt{1-x^2}} &\ & (21) \int_0^1 \sqrt{x+\sqrt{1+x}} \\
&(22) \int_{-1}^1\frac{\sin\Bigl(\sin\bigl(\sin(x)\bigr)\Bigr)}{x^{800}+1}
\end{aligned}
\]
