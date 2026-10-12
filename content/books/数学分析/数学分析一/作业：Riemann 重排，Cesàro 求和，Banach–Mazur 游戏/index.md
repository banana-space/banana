---
title: 作业：Riemann 重排，Cesàro 求和，Banach–Mazur 游戏
---

## 基本习题

### 习题A：课堂内容的补充及 $\varepsilon-N$ 语言的训练

- A1) $\{x_n\}_{n\geqslant 1}$ 是有界的实数数列。
  证明，
  这个数列有子列 $\{x_{{n_i}}\}_{n\geqslant 1}$ 使得
  $\displaystyle\lim_{i\rightarrow \infty}x_{n_i}$ 存在并且
  \[
  \lim_{i\rightarrow \infty}x_{n_i}=\limsup_{n\rightarrow \infty}x_n.
  \]

- A2) $\{x_n\}_{n\geqslant 1}$ 是实数数列。
  证明，
  $\{x_n\}_{n\geqslant 1}$ 收敛的充分必要条件是
  $\displaystyle\limsup_{n\rightarrow \infty}x_n=\liminf_{n\rightarrow \infty}x_n$。

- A3) $\{x^{(k)}\}_{k\geqslant 1}$ 是 $\mathbb{R}^n$ 中的点列，其中，
  $x^{(k)}=(x^{(k)}_1,x^{(k)}_2,\cdots,x^{(k)}_n)$。
  那么，
  $\{x^{(k)}\}_{k\geqslant 1}$ 在 $\mathbb{R}^n$ 中收敛当且仅当它的每个分量都是收敛的实数数列，
  即对任意的 $i=1,2,\cdots,n$，$\{x^{(k)}_i\}_{k\geqslant 1}$ 在 $\mathbb{R}$ 中收敛。
  （你在作业中只需要对 $n=2$ 证明即可）

- A4)（复数数列的四则运算）假设 $\{z_n\}_{n\geqslant 1}$ 和 $\{w_n\}_{n\geqslant 1}$
  是两个收敛的复数的数列。证明（你在作业中只需要证明第三条即可），

  - 数列 $\{z_n\pm w_n\}_{n\geqslant 1}$ 收敛并且
    $\displaystyle\lim_{n\rightarrow \infty}(z_n\pm w_n)=\lim_{n\rightarrow \infty}z_n\pm \lim_{n\rightarrow \infty}w_n$；

  - $\{z_n\cdot w_n\}_{n\geqslant 1}$ 收敛并且
    $\displaystyle\lim_{n\rightarrow \infty}(z_n\cdot w_n)=\lim_{n\rightarrow \infty}z_n \cdot \lim_{n\rightarrow \infty}w_n$；

  - 如果 $\displaystyle\lim_{n\rightarrow \infty}w_n\neq 0$，
    那么数列 $\{\dfrac{z_n}{w_n}\}_{n\geqslant N}$
    收敛（$\displaystyle\lim_{n\rightarrow \infty}w_n \neq 0$ 表明存在 $N$，
    使得当 $n \geqslant N$ 时，
    $w_n\neq 0$）并且
    $\displaystyle\lim_{n\rightarrow \infty}\dfrac{z_n}{w_n}=\dfrac{\displaystyle\lim_{n\rightarrow \infty}z_n}{\displaystyle\lim_{n\rightarrow \infty}w_n}$。

- A5) 假设 $\{a_n\}_{n\geqslant 1}$ 是递减的正实数的数列并且
  $\displaystyle\lim_{n\rightarrow \infty}a_n=0$。证明，级数
  \[
  a_1-a_2+a_3-a_4+\cdots+(-1)^{n-1}a_n+\cdots
  \]
  是收敛的。

- A6) $\displaystyle \sum_{k=0}^\infty a_k$ 是复数项的级数。
  如果 $\displaystyle \sum_{k=0}^\infty |a_k|$ 收敛，证明，
  $\displaystyle \sum_{k=0}^\infty a_k$ 也收敛，其中 $|\cdot |$ 是取复数的模长。

- A7) 证明，我们可以在 $\mathbb{C}$ 上定义指数函数：
  \[
  \exp\colon  \mathbb{C}\rightarrow \mathbb{C}, \ \ z\mapsto \exp(z)=e^z=\sum_{k=0}^\infty \frac{z^k}{k!}.
  \]

- A8) $\{a_n\}_{n\geqslant 1}$ 是复数的数列，我们假设对任意的 $n$，$a_n\neq 0$。
  令 $P_n=a_1\cdot a_2\cdot \cdots \cdot a_n$，
  如果数列 $\{P_n\}_{n\geqslant 1}$ 的极限存在并且该**极限不是 $0$**，
  我们就称无限乘积 $\displaystyle\prod_{n\geqslant 1}a_n$ 收敛并且记
  $\displaystyle\prod_{n\geqslant 1}a_n=\lim_{n\rightarrow \infty}P_n$。
  证明Cauchy判别准则：$\displaystyle\prod_{n\geqslant 1}a_n$ 收敛当且仅当对任意的 $\varepsilon>0$，
  存在 $N$，使得对任意的 $n\geqslant N$，任意的 $p\geqslant 0$，我们都有
  \[
  \big|a_n\cdot a_{n+1}\cdot \cdots \cdot a_{n+p}-1\big|<\varepsilon.
  \]

- A9) 证明，函数 $\exp(x)$ 在 $\mathbb{R}$ 上是严格递增的。

- A10)（基本的增长速度比较，记住）假设 $P(X)$ 是一个 $n$ 次多项式（实数系数），
  $Q(X)$ 是一个 $m$ 次多项式（实数系数），$m>n$，证明：
  \[
  \lim_{k\rightarrow \infty}\frac{P(k)}{Q(k)}=0, \ \ \lim_{k\rightarrow \infty}\frac{Q(k)}{e^k}=0.
  \]

### 习题B：极限的计算

计算下面的极限（包含发散的情形）：
\[
\begin{aligned}
  &(1)   \lim_{n\rightarrow \infty}\frac{n+10}{2n-1}   & &(2)  \lim_{n\rightarrow \infty}\frac{\sqrt{n}+10}{2\sqrt{n}-1}   & &(3) \lim_{n\rightarrow \infty} 0.\underbrace{999\cdots 99}_{n\text{个}}
\\
& (4)\lim_{n\rightarrow \infty}\frac{1}{n(n+3)}
  & & (5)   \lim_{n\rightarrow \infty}\frac{\cos (n)}{n}  &  &(6)  \lim_{n\rightarrow  \infty}\frac{2^n}{n!} \\
  & (7)  \lim_{n\rightarrow \infty}\frac{n!}{n^n} & &(8)\lim_{n\rightarrow \infty}\sqrt{n+10}-\sqrt{n+1} & &(9)   \lim_{n\rightarrow \infty }\frac{1+2+\cdots+n}{n^2}\\
  &(10)  \lim_{n\rightarrow\infty }\frac{1^2+2^2+\cdots+n^2}{n^3}  & &(11) \lim_{n\rightarrow \infty}a^{\frac{1}{n}},\text{其中}a>0  & &(12)\lim_{n\rightarrow \infty}\frac{n^{10000}}{a^n},\text{其中}a>1 \\
&(13)   \lim_{n\rightarrow\infty }\frac{2^n+n}{3^n+n^2}  &  &(14)  \lim_{n\rightarrow \infty } \frac{3^n+2^n}{3^n+n^2}  & &(15) \lim_{n\rightarrow \infty}\sqrt{n}(\sqrt{n+1}-\sqrt{n}) \\
 & (16)\lim_{n\rightarrow \infty}\frac{n^{10000}}{a^n},\text{其中}a>1, & &(17)\lim_{n\to \infty} \left(1 - \frac{1}{n}\right)^{n}  &  &(18)  \lim_{n\to \infty} \left(1 - \frac{1}{5n}\right)^{n+2019}\\
   & (19) \lim_{n\rightarrow \infty}(n^3+n^2+9n+1)^\frac{1}{n} & &(20)\lim_{n\rightarrow \infty}(2018^n+2019^n)^\frac{1}{n}
\end{aligned}
\]

### 习题C：Riemann重排定理

Riemann证明下面有趣的定理：如果实数项级数 $\displaystyle\sum_{n=1}^\infty a_n$ 收敛但不绝对收敛，
那么可以将级数重新排列，
使得重排后的级数可以收敛到任意事先指定的 $\alpha\in \mathbb{R}\cup\{-\infty,+\infty\}$。
假设 $\varphi\colon \mathbb{Z}_{\geqslant 1}\rightarrow \mathbb{Z}_{\geqslant 1}$
是正整数到自身的双射，令 $b_k = a_{\varphi(k)}$，
序列 $\{b_k\}_{k\geqslant 1}$ 被称为是 $\{a_n\}_{n\geqslant 1}$ 的一个**重排**，
级数 $\displaystyle\sum_{k=1}^\infty b_k$ 被称为是级数 $\displaystyle\sum_{n=1}^\infty a_n$
的一个**重排**。

我们将 $\{a_n\}_{n\geqslant 1}$ 中的非负项（$\geqslant 0$）的全体按照它们在
$\{a_n\}_{n \geqslant 1}$ 中的先后次序排列得到序列 $
c_1,c_2,c_3,\cdots$；类似地，将 $\{a_n\}_{n \geqslant 1}$ 中的负项（$<0$）按原顺序排列得到序列 $d_1,d_2,d_3,\cdots$。

- C1) 证明，$\displaystyle\lim_{n\to \infty} c_n = 0$，$\displaystyle\lim_{n\to \infty} d_n = 0$。

- C2) 证明，$\displaystyle\sum_{n=1}^\infty c_n = +\infty$，
  $\displaystyle\sum_{n=1}^\infty d_n = -\infty$。

- C3) 证明：对任意 $\alpha \in \mathbb{R}$，
  存在级数 $\displaystyle\sum_{n=1}^\infty a_n$ 的一个重排 $\displaystyle\sum_{k=1}^\infty b_k$，
  使得 $\displaystyle
  \sum_{k=1}^\infty b_k = \alpha$。

- C4) 证明：
  存在级数 $\displaystyle\sum_{n=1}^\infty a_n$ 的一个重排 $\displaystyle\sum_{k=1}^\infty x_k$，
  使得 $\displaystyle
  \sum_{k=1}^\infty x_k = +\infty$。

### 习题D：Cesàro求和极限

设 $\{a_n\}_{n\geqslant 1}$ 为实数序列，
我们定义算术平均值序列 $\displaystyle\sigma_n = \frac{a_1 + a_2 + \cdots + a_n}{n}$，
其中 $n=1,2,3,\cdots$。

- D1) 假设 $\displaystyle\lim_{n\to \infty} a_n = a$。
  证明，$\displaystyle\lim_{n\to \infty} \sigma_n = a$。

- D2) 构造一个不收敛的序列 $\{a_n\}_{n\geqslant 1}$，
  使得 $\displaystyle\lim_{n \to \infty} \sigma_n = 0$。

- D3) 是否存在序列 $\{a_n\}_{n\geqslant 1}$，使得对任意 $n\geqslant 1$，
  都有 $a_n > 0$ 并且 $\displaystyle\limsup_{n\to \infty} a_n = \infty$ 然而
  $\displaystyle\lim_{n\to \infty} \sigma_n = 0$？

- D4) 对 $k \geqslant 1$，记 $b_k = a_{k+1} - a_k$。
  证明，对任意的 $n\geqslant 2$，
  都有 $\displaystyle a_n - \sigma_n = \frac{1}{n} \sum_{k=1}^{n-1} k b_k$。

- D5) 设 $\displaystyle\lim_{k\to \infty} k b_k = 0$ 并且 $\{\sigma_n\}_{n\geqslant 1}$ 收敛。
  证明，$\{a_n\}$ 也收敛。

  注意，这是 D1)在条件 $n|a_{n+1}-a_n| \to 0$ 这一额外条件下的逆命题。

- D6) 把 D5)的条件减弱为：
  $\{ k b_k\}_{k\geqslant 1}$ 是有界的并且 $\displaystyle\lim_{n \to \infty} \sigma_n = \sigma$。
  证明，$\displaystyle\lim_{n\to \infty} a_n = \sigma$。
  （提示：可以参考Rudin的Principles of Mathematical Analysis的Exercise 3.14。）

## 课后补充

### 习题E：$\sqrt[n]{x}$ 和 $b^x$ 的定义

这个问题的目标是在 $\mathbb{R}$ 上定义初等函数 $\sqrt[n]{x}$ 和 $b^x$，
比如说我们自然希望定义 $\sqrt[n]{x}$ 为满足 $y^n = x$ 唯一的正实数。

- E1) 给定正整数 $n$ 和实数 $x>0$，证明：如果正实数 $y_1$ 和 $y_2$ 满足 $y_1^n = x=y_2^n$，
  那么 $y_1=y_2$。

- E2) 证明，如果 $x>0$，那么集合 $E(x) = \{t \in \mathbb{R} \mid  t^n < x\}$ 是非空的并且有上界。

- E3) 证明，$y = \sup E(x)$ 满足 $y^n = x$ 并且 $y>0$。

- E4) 证明，
  映射 $\sqrt[n]{\cdot}\colon \mathbb{R}_{>0}\to \mathbb{R}_{>0},  \ \ x \mapsto \sqrt[n]{x}=y$
  是良好定义的。我们也记 $\sqrt[n]{x}$ 为 $x^{\frac1n}$。

- E5) 证明，$\sqrt[n]{\cdot}\colon \mathbb{R}_{>0}\to \mathbb{R}_{>0}$ 是双射。

- E6) $a,b$ 是正实数，$n$ 为正整数。证明，$(ab)^{\frac1n} = a^{\frac1n}b^{\frac1n}$。

  在接下来的问题里，我们给定实数 $b>1$ 来定义以 $b$ 为底的指数函数 $x \mapsto b^x$。

- E7) 设 $m,n,p,q \in \mathbb{Z}$，其中 $n>0$，$q>0$。
  令 $r = \dfrac{m}{n} = \dfrac{p}{q}$ 为有理数 $r$ 的两种表示。证明：
  \[
  (b^m)^{\frac1n} = (b^p)^{\frac1q}.
  \]

- E8) 证明，对任意的有理数 $r$，函数 $r\mapsto b^r$ 是良好定义的。

- E9) 证明，对任意的有理数 $r,s$，我们有 $b^{r+s} = b^rb^s$。

- E10) 对于 $x \in \mathbb{R}$，令 $B(x)=\{b^t \mid  t \in \mathbb{Q}, t \leqslant x\}$。
  证明，$B(x)$ 非空且有上界。我们定义 $b^x = \sup B(x)$，这就定义了映射 $x \mapsto b^x$。

- E11) 证明，如果 $r$ 是有理数，那么
  \[
  b^r = \sup B(r), \qquad \forall r \in \mathbb{Q}.
  \]
  我们定义的指数映射在 $r\in \mathbb{Q}$ 时和之前是一致的。

- E12) 证明，E10)中定义的映射满足，对任意的 $x,y \in \mathbb{R}$，都有 $b^{x+y} = b^x b^y$。

- E13*) 证明，当 $b=e$ 时，这样定义的函数和课程中定义的 $e^x$ 是一致的。

### 习题F：根式的逼近

给定正实数 $\alpha$ 和初始值 $x_1 > \sqrt{\alpha}$，我们归纳地定义序列 $\{x_n\}_{n\geqslant 1}$：
\[
x_{n+1} = \frac{1}{2}\left(x_n + \frac{\alpha}{x_n}\right), \qquad n = 1,2,\cdots \tag{A1}.
\]

- F1) 证明，
  $\{x_n\}_{n\geqslant 1}$ 是递减的并且
  $\displaystyle\lim_{n\to \infty} x_n = \sqrt{\alpha}$（在问题E中已经定义）。
  这表明，从任意大于 $\sqrt{\alpha}$ 的初值出发，可用上述迭代公式近似地计算（逼近）$\sqrt{\alpha}$。

- F2) 定义逼近的误差项 $\varepsilon_n = x_n - \sqrt{\alpha}$。
  证明，
  $\displaystyle\varepsilon_{n+1} = \frac{\varepsilon_n^2}{2x_n} < \frac{\varepsilon_n^2}{2\sqrt{\alpha}}$。

- F3) 证明，如果 $\beta = 2\sqrt{\alpha}$，
  那么 $\displaystyle\varepsilon_{n+1} < \beta \left(\frac{\varepsilon_1}{\beta}\right)^{2^n}$。
  这表明，迭代公式(A1)收敛速度非常快。

- F4) 设 $\alpha = 3$，$x_1 = 2$，验证 $\dfrac{\varepsilon_1}{\beta} < 0.1$，
  继而 $\varepsilon_5 < 4\cdot 10^{-16}$，$\varepsilon_6 < 4 \cdot 10^{-32}$。

- F5) 试用纸和笔，计算 $\sqrt{3}$ 的精确到小数点5位的近似值。

接下来，我们换另外一个迭代公式。固定 $\alpha > 1$ 和 $y_1 > \sqrt{\alpha}$，我们归纳地定义
\[
y_{n+1} = \frac{\alpha+y_n}{1+y_n} = y_n + \frac{\alpha - y_n^2}{1+y_n}， \qquad n = 1,2,\cdots \tag{A2}
\]

- F6) 证明，$\{y_{2k-1}\}_{k\geqslant 1}$ 为递减序列。

- F7) 证明，$\{y_{2k}\}_{k\geqslant 1}$ 为递增序列。

- F8) 证明，$\displaystyle\lim_{n\to \infty} y_n = \sqrt{\alpha}$。

- F9) 试讨论迭代公式(A2)逼近 $\sqrt{\alpha}$ 的收敛速度并与(A1)的比较。
  （提示：这是Rudin的Principles of Mathematical Analysis的Exercise 3.17。）

## 思考题（不交作业）

### 问题G：Banach–Mazur

老王和王老饭后玩一个 $\mathbb{R}$ 上的区间套游戏决定谁来付饭钱：老王先选取一个闭区间 $W_1$，
然后王老选一个 $W_1$ 的子区间 $L_1$，但是要求 $L_1$ 的长度不能超过 $W_1$ 的一半；
然后老王再选一个 $L_1$ 的子区间 $W_2$，又轮到王老再选一个 $W_2$ 的子区间 $L_2$，
同样要求 $L_2$ 的长度不超过 $W_2$ 的一半；如此下去，第 $n$ 步，老王选一个 $L_{n-1}$ 的子区间 $W_n$，
又轮到王老再选一个 $W_n$ 的子区间 $L_n$，但是要求 $L_n$ 的长度不超过 $W_n$ 的一半。
他们两个人得到一个区间套：
\[
W_1\supset L_1\supset W_2\supset L_2\supset \cdots \supset W_n\supset L_n \supset \cdots.
\]
老王和王老发现 $\displaystyle \bigcap_{n\geqslant 1} {W_n}=\bigcap_{n\geqslant 1}{L_n}=\{x\}$
是一个实数。
他们规定，如果 $x$ 是有理数那么老王赢，如果 $x$ 是无理数就是王老赢，试问最后谁会付钱？（提示：
王老有必胜策略。）

### 问题H

考虑数列的集合
$\mathcal{P}=\bigl\{\{p_n\}_{n\geqslant 1}\bigm| p_n \in \mathbb{Z}, p_1\geqslant 2, p_{n+1}\geqslant (p_n)^2\bigr\}$。

- H1) 对任意 $p=\{p_n\}_{n\geqslant 1}\in \mathcal{P}$，我们定义数列
  \[
  a_n=\prod_{k=1}^n (1+\frac{1}{p_k}).
  \]
  证明，$a_n$ 有极限（记 $f(p)=\displaystyle \lim_{n\rightarrow \infty} a_n$）并且 $f(p)\in (1,2]$。
  （提示：$(1+x)(1+x^2)\cdots(1+x^{2^{n-1}})=\frac{1-x^{2^n}}{1-x}$。）

- H2) 证明，$f\colon \mathcal{P}\rightarrow (1,2]$ 是双射。
  （提示：可以先证 $f$ 是满射：对 $x\in(1,2]$，每一个 $n$ 都用可以选取的最大的 $a_n$ 来逼近 $x$。）

- H3) 证明，$\mathcal{P}$ 是不可数的。

### 问题I：二进制展开

考虑数列的集合 $\mathcal{S}=\bigl\{\{s_n\}_{n\geqslant 0}\bigm| s_n\in \{-1,1\}\bigr\}$。

- I1) 对任意 $s=\{s_n\}_{n\geqslant 0}\in \mathcal{S}$，我们定义数列
  \[
  c_n=\sum_{k=0}^n\frac{s_0s_1\cdots s_k}{2^k}.
  \]
  证明，
  $c_n$ 有极限（记 $h(s)=\displaystyle \lim_{n\rightarrow \infty} c_n$）并且 $h(s)\in [-2,2]$。

- I2) 证明，$h\colon \mathcal{S}\rightarrow [-2,2]$ 是满射。请问这是单射么？

- I3) 对于 $s=\{s_n\}_{n\geqslant 0}\in\mathcal{S}$，证明，
  \[
  2\sin \bigl(\frac{\pi}{4}c_n\bigr)=s_0\sqrt{2+s_1\sqrt{2+s_2\sqrt{2+\cdots+s_{n-1}\sqrt{2+s_n\sqrt{2}}}}}.
  \]

- I4) 计算极限
  \[
  \lim_{n\rightarrow \infty}\underbrace{\sqrt{2+\sqrt{2+\sqrt{2+\cdots+\sqrt{2}}}}}_{n~\text{个}~2}.
  \]

### 问题J
$k\geqslant 2$ 是一个给定的正整数。数列由如下的方式归纳地定义：
\[
a_0>0~\text{预先给定},~a_{n+1}=a_n+\frac{1}{\sqrt[k]{a_n}}, \ \ n\geqslant 0.
\]
证明，$\displaystyle \lim_{n\rightarrow \infty}\frac{(a_n)^{k+1}}{n^k}$ 存在并计算它的值。
（提示：
可以应用D1)计算 $\displaystyle \lim_{n\rightarrow \infty}\frac{\sqrt[k]{(a_n)^{k+1}}}{n}$。）
