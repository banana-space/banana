---
title: 作业：振荡积分
---

## 基本习题

### 习题A（Stieltjes积分）

如果不加说明，$\mu$ 表示的是有界闭区间 $I=[a,b]$ 上的一个递增的函数。
下面题目中A1)、A3)、A4)、A5)、A6)是对概念的直接验证，可以不提交作业。

- A1) 对于任意两个分划 $\sigma,\sigma' \in \mathcal{S}(I)$，我们有
  \[
  \underline{S}_\mu(f;\sigma)\leqslant \overline{S}_\mu(f;\sigma').
  \]

- A2) 对任意的 $\rho\in C\bigl([a,b]\bigr)$，$\rho \geqslant 0$，
  $\mu(x)=\displaystyle\int_a^x \rho(t)dt$。
  证明，对任意的 $f\in \mathcal{R}\bigl([a,b]\bigr)$，
  都有 $f\in \mathcal{R}\bigl([a,b];\mu\bigr)$ 并且
  \[
  \int_a^b fd\mu= \int_a^b f(x)\rho(x)dx.
  \]
  特别地，假设 $\mu$ 连续可微（$\mu$ 默认是递增的），我们有
  \[
  \int_a^b f d\mu = \int_a^b f \mu'.
  \]

- A3) 证明，$\mathcal{R}(I;\mu)$ 是 $\mathbb{R}$-线性空间并且积分算子
  \[
  \displaystyle \int_{a}^b\cdot \,d\mu\colon  \mathcal{R}(I;\mu)\rightarrow \mathbb{R},
  \ \  f \mapsto \int_a^b fd\mu
  \]
  是线性映射。

- A4) 假设 $f_1,f_2\in \mathcal{R}(I;\mu)$。
  如果对任意的 $x\in I$，我们都有 $f_1(x) \leqslant f_2(x)$，那么，
  \[
  \int_a^b f_1d\mu \leqslant \int_a^b f_2d\mu.
  \]

- A5)（区间可加性）如果 $f\in \mathcal{R}([a,b];\mu)$，
  那么对任意的 $c\in [a,b]$，$f$ 在 $[a,c]$ 和 $[c,b]$ 上的限制都是Stieltjes可积的并且
  \[
  \int_a^b f d\mu=\int_a^c f d\mu+\int_c^b fd\mu.
  \]

- A6) 如果 $f,g\in  \mathcal{R}([a,b];\mu)$，
  那么 $f\cdot g\in  \mathcal{R}([a,b];\mu)$。

- A7) 我们在区间 $[0,\infty)$ 定义Stieltjes积分：
  假设 $f\in C([0,\infty))$ 是有界连续函数，定义
  \[
  \int_0^\infty f d\mu= \lim_{M\rightarrow \infty}\int_0^M f d\mu.
  \]
  假设 $\{\alpha_n\}_{n\geqslant 1}$ 是正实数所组成的序列并且
  $\displaystyle \sum_{n=1}^\infty \alpha_n$ 收敛，定义递增函数
  $\mu =\displaystyle\sum_{n=1}^\infty \alpha_n \mathbf{1}_{\geqslant n}$。
  那么，我们有
  \[
  \int_1^\infty fd\mu = \sum_{n=1}^\infty \alpha_n f(n).
  \]

- A8)（第一积分中值定理）$f, g\in \mathcal{R}([a,b];\mu)$ 是实值Riemann可积函数。
  我们假设对任意的 $x\in [a,b]$，$g(x)\geqslant 0$。令
  \[
  m=\displaystyle \inf_{x\in I} f(x), \ \ M=\displaystyle \sup_{x\in I} f(x).
  \]
  那么，存在 $\ell \in [m,M]$，使得
  \[
  \int_a^b fgd\mu= \ell \int_{a}^b gd\mu.
  \]
  特别地，如果进一步要求 $f$ 是连续函数，那么存在 $\xi \in [a,b]$，使得
  \[
  \displaystyle \int_a^b fgd\mu= f(\xi) \int_{a}^b gd\mu.
  \]

- A9) 你是否可以构造一个Stieltjes积分来说明
  Abel求和法也是Stieltjes积分意义下的分部积分公式的特例？

### 习题B（反常积分收敛的判断）

以下记号中，$b$ 可以是 $\infty$。

- B1)（Cauchy判别法）假设 $f\colon  [a,b) \to \mathbb{R}$，
  对任意 $b^- < b$，$f$ 在 $[a,b^-]$ 上可积。
  证明，反常积分 $\displaystyle \int_a^b f(x)dx$ 存在的充要条件是：
  对任意 $\varepsilon > 0$，存在 $b(\varepsilon)  \in (a,b)$，
  使得对任意 $b', b'' > b(\varepsilon)$，
  $\displaystyle	\bigg|\int_{b'}^{b''} f(x)dx\bigg| < \varepsilon$。

- B2)（比较判别法，已经证明，可不交作业）如果 $|f|$ 在 $[a,b)$ 上反常可积，
  就称积分 $\displaystyle \int_a^b f(x)dx$ **绝对收敛**。
  证明，如果 $|f(x)| \leqslant F(x), x \in [a,b)$
  并且 $\displaystyle\int_a^b F(x)dx$ 收敛，
  那么积分 $\displaystyle\int_a^b |f(x)|dx$ 收敛。

- B3) 证明**Dirichlet判别法**：
  假设 $f,g\colon [a,\infty)\rightarrow \mathbb{R}$ 满足

  - $f$ 是连续函数并且存在 $A>0$，使得对任意的 $M \geqslant a$，我们都有
    \[
    \Bigl|\int_a^M f(x)dx\Bigr|\leqslant A.
    \]

  - $g$ 是单调函数并且 $\displaystyle \lim_{x\rightarrow \infty}g(x)=0$。

  那么反常积分 $\displaystyle\int_a^\infty f(x)g(x)dx$ 收敛。

  （你可以查阅文献来证明这个判别法，一个好的开始是
  先假设 $f$ 和 $g$ 都是连续可微的，一般的情形可以考虑Stieltjes积分。
  请对比级数收敛的 Dirichlet 判别法以及相应的证明，
  你可以看到Abel求和法和分部积分之间的相似性）

- B4) 证明**Abel判别法**：假设 $f,g\colon [a,\infty)\rightarrow \mathbb{R}$ 满足

  - 反常积分 $\displaystyle \int_a^\infty f(x)dx$ 存在。

  - $g$ 是单调函数并且 $g$ 有界。

  那么反常积分 $\displaystyle\int_a^\infty f(x)g(x)dx$ 收敛。
  （请对比级数收敛的 Abel判别法以及相应的证明）

- B5) 判断下列积分的收敛性（绝对收敛、条件收敛、发散）
  \[
  \begin{aligned}
    & (1) \int_{0}^{+\infty} \frac{\log (1+x)}{x^p} dx
    && (2)\int_{1}^{+\infty} \frac{\sin x}{x^p} dx && (3) \int_{1}^{+\infty} \sin x^2 dx\\
    & (4) \int_{0}^{+\infty} \frac{\sin^2 x}{x}dx  && (5) \int_{0}^{2\pi} \frac{dx}{\sin^p x \cos^q x}, ~ p,q >0 && (6) \int_{0}^{+\infty} x^p \sin (x^q) dx \\
    & (7) \int_{0}^{+\infty} \frac{x^p \sin x}{1 + x^q}, ~ q \geq 0 && (8) \int_{0}^{\pi/2} \frac{\log \sin x}{\sqrt{x}} dx && (9) \int_{e}^{+\infty} \frac{\log \log x}{\log x} \sin x dx
    \end{aligned}
  \]

## 题目C（振荡积分）（8字班的考试题之一，不交作业，鼓励讨论）

我们采取下面的约定：$F(t)$ 和 $G(t)$ 是 $[1,+\infty)$ 上定义的两个函数，
$\displaystyle  \lim_{t\rightarrow \infty}G(t)=0$。
我们假设对任意的 $t\geqslant 1$，$G(t)\neq 0$。如果
\[
\lim_{t\rightarrow \infty}\frac{F(t)}{G(t)}=1,
\]
我们就说 $F(t)$ 和 $G(t)$ 是**均阶的**（即收敛到 $0$ 的速度是一样的）
并记作 $F(t)\sim G(t)$。

### 第一部分：相函数是实值的情形

- C1) $d>0$ 是给定的实数。假设 $g\in C^1([0,d])$。
  证明，存在常数 $C$（可能依赖于 $g$ 和 $d$），使得
  \[
  \Bigl|\int_0^d e^{-tx}g(x)dx\Bigr| \leqslant \frac{C}{t}.
  \]

- C2) $d>0$ 是给定的实数。假设 $g\in C([0,d])$ 并且 $g(0)\neq 0$。证明，
  \[
  \int_0^d e^{-tx}g(x)dx \sim \frac{g(0)}{t} .
  \]
  （提示：利用积分换元 $y=tx$）

- C3) $d>0$ 是给定的实数。假设 $g\in C([0,d])$ 并且 $g(0)\neq 0$。证明，
  \[
  \int_0^d e^{-tx^2}g(x)dx \sim \frac{\sqrt{\pi}\cdot g(0)}{2\sqrt{t}} .
  \]
  （提示：我们课堂上已经证明了 $\displaystyle \int_0^\infty e^{-x^2}dx=\dfrac{\sqrt{\pi}}{2}$）

对于 $t\geqslant 1$，$f\in C([a,b])$ 和 $\varphi \in C([a,b])$，我们定义函数
\[
F(t)=\int_{a}^b e^{-t\varphi(x)}f(x)dx,
\]
我们的目标是研究当 $t\rightarrow +\infty$ 时，$F(t)$ 的行为。

- C4) 假设 $\varphi \in C^1([a,b])$，并且对任意 $x\in [a,b]$，$\varphi'(x)\neq 0$。
  为了简单起见，我们进一步假设 $\varphi'(x)> 0$。
  令 $d=\varphi(b)-\varphi(a)$。证明，映射
  \[
  \Phi\colon [a,b]\rightarrow [0,d], \ \ x\mapsto \varphi(x)-\varphi(a),
  \]
  在 $[a,b]$ 上连续可微的并且是双射。

- C5) 假设 $\varphi \in C^1([a,b])$，并且对任意 $x\in [a,b]$，$\varphi'(x)\neq 0$。
  证明，如果 $f(a)\neq 0$，当 $t\rightarrow +\infty$ 时，
  \[
  F(t)\sim\frac{f(a)}{\varphi'(a)}\frac{e^{-t\varphi(a)}}{t}.
  \]
  （提示：利用C4)中的函数做积分换元）

- C6) 假设 $\varphi \in C^2([a,b])$，$\varphi'(a)=0$，$\varphi''(a)>0$
  并且对任意 $x\in (a,b]$，$\varphi'(x)>0$。
  令 $d=\sqrt{\varphi(b)-\varphi(a)}$。证明，映射
  \[
  \Psi\colon [a,b]\rightarrow [0,d], \ \ x\mapsto \sqrt{\varphi(x)-\varphi(a)},
  \]
  在 $[a,b]$ 上连续可微的并且是双射。

  特别地，试计算 $\Psi'(a)$。

  （提示：考虑 $\varphi$ 的二阶的Taylor展开。）

- C7) 假设 $\varphi \in C^2([a,b])$，$\varphi'(a)=0$，$\varphi''(a)>0$
  并且对任意 $x\in (a,b]$，$\varphi'(x)>0$。
  证明，如果 $f(a)\neq 0$，当 $t\rightarrow +\infty$ 时，
  \[
  F(t)\sim \frac{\sqrt{\pi} f(a)}{\sqrt{2\varphi''(a)}}\frac{e^{-t\varphi(a)}}{\sqrt{t}}.
  \]
  （提示：利用C6)中的函数做积分换元）

- C8) 给定两个函数 $f\in C\bigl((0,+\infty)\bigr)$，
  $\varphi \in C^2\bigl((0,+\infty)\bigr)$。我们假设

  - 存在唯一的 $a\in (0,\infty)$，使得 $\varphi'(a)=0$；

  - $\varphi''(a)>0$，$f(a)\neq 0$；

  - 反常积分 $\displaystyle \int_{0}^\infty e^{-\varphi(x)}|f(x)|dx$ 收敛。

  证明，当 $t\rightarrow +\infty$ 时，
  函数 $\displaystyle G(t)=\int_{0}^\infty e^{-t\varphi(x)}f(x)dx$ 满足
  \[
  G(t)\sim \frac{\sqrt{2\pi} f(a)}{\sqrt{\varphi''(a)}}\frac{e^{-t\varphi(a)}}{\sqrt{t}}.
  \]

- C9) 对于 $x>0$，定义函数
  \[
  \Gamma(x)=\int_{0}^\infty t^{x-1}e^{-t}dt.
  \]
  对于正整数 $n$，试计算 $\Gamma(n)$。

- C10) 证明Stirling公式：
  \[
  n!\sim \sqrt{2\pi}\frac{n^{n+\frac{1}{2}}}{e^n}.
  \]
  （提示：我们有 $\displaystyle \Gamma(n+1)=n^{n+1}\int_0^\infty e^{-n(x-\log x)}dx$。）

### 第二部分：振荡积分

对于 $\lambda \geqslant 1$，$f\in C^\infty([a,b])$
和 $\varphi \in C^\infty([a,b])$，我们定义函数
\[
I(\lambda)=\int_{a}^b e^{i\lambda \varphi(x)}f(x)dx,
\]
我们的目标是研究当 $\lambda \rightarrow +\infty$ 时，$I(\lambda)$ 的行为。

- C11) 假设对任意 $x\in [a,b]$，$\varphi'(x)\neq 0$。我们定义映射
  \[
  \begin{aligned}
  L\colon C^\infty([a,b]) \rightarrow C^\infty([a,b]),
  \ \ h &\mapsto \frac{1}{i\lambda \varphi'(x)}h'(x),\\
  M\colon C^\infty([a,b]) \rightarrow C^\infty([a,b]),
  \ \ h &\mapsto -\Bigl(\frac{h}{i \varphi'}\Bigr)'(x),\\
  \end{aligned}
  \]
  假设 $g, h\in C^\infty([a,b])$。证明，如果 $h$ 在 $a$ 和 $b$ 附近恒为 $0$
  （即存在 $c>0$，使得当 $x\in [a,a+c]\cup [b-c,b]$ 时，$h(x)=0$），那么
  \[
  \int_a^b h \cdot Lg  =\frac{1}{\lambda}\int_{a}^b g \cdot Mh.
  \]

- C12) 假设对任意 $x\in [a,b]$，$\varphi'(x)\neq 0$
  并且 $f$ 在 $a$ 和 $b$ 附近恒为 $0$。
  证明，对任意的 $n\in \mathbb{Z}_{\geqslant 1}$，
  都存在**不依赖**于 $\lambda$ 的常数 $c_n$，使得
  \[
  |I(\lambda)|\leqslant \frac{c_n}{\lambda^n}.
  \]
  （提示：注意到 $L e^{i\lambda\varphi(x)}=e^{i\lambda\varphi(x)}$。）

- C13) 假设存在 $\delta>0$，使得对任意 $x\in [a,b]$，
  $|\varphi'(x)|\geqslant \delta$ 并且 $\varphi'(x)$ 是 $[a,b]$ 上的单调函数。
  证明，存在**不依赖**于 $\lambda$、$\varphi$、$a$ 和 $b$ 的常数 $C_1$，使得
  \[
  \bigg|\int_a^b e^{i\lambda\cdot \varphi(x)}dx\bigg|
  \leqslant \frac{C_1}{\lambda \delta}.
  \]

- C14) 假设对任意 $x\in [a,b]$，$|\varphi''(x)|\geqslant 1$。
  证明，存在唯一的 $c\in [a,b]$，使得
  \[
  |\varphi'(c)|=\displaystyle \inf_{x \in [a,b]}|\varphi'(x)|.
  \]
  进一步证明，对任意的 $x\in [a,b]$，我们都有
  \[
  |\varphi'(x)|\geqslant |x-c|.
  \]

- \*C15) 假设对任意 $x\in [a,b]$，$|\varphi''(x)|\geqslant 1$。
  证明，存在**不依赖**于 $\lambda$、$\varphi$、$a$ 和 $b$ 的常数 $C_2$，使得
  \[
  \bigg|\int_a^b e^{i\lambda\cdot \varphi(x)}dx\bigg|
  \leqslant \frac{C_2}{\sqrt{\lambda}}.
  \]

- \*\*C16) 假设对任意 $x\in [a,b]$，$|\varphi''(x)|\geqslant 1$。
  证明，存在**不依赖**于 $\lambda$、$\varphi$、$f$、$a$ 和 $b$ 的常数 $C_2$，使得
  \[
  \bigg|\int_a^b e^{i\lambda\cdot \varphi(x)}f(x)dx\bigg|
  \leqslant \frac{C_2}{\sqrt{\lambda}}\Bigl(|f(a)|+\int_{a}^b |f'(x)| dx\Bigr).
  \]
