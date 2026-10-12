---
title: 作业：Heisenberg 测不准原理，Sobolev 空间的物理刻画
notices:
  - name: 问题
    items:
      - 习题 A4 中“特别地”之后的公式与前一个公式完全相同，似乎应为 $\widehat{1}=(2\pi)^n\delta_0$；其中 $e^{-ix\cdot a}$ 似乎也应为 $e^{-i\xi\cdot a}$。
---

## 习题A：课堂细节的补充

我们总假设$\Omega\subset \mathbb{R}^n$是非空的开集。

- A1) 假设$p=1,2$或$\infty$。
  证明，如果把函数空间$L^p(\mathbb{R}^n)$中的函数视为分布（这些空间中的函数都是局部可积的函数），
  那么它们是缓增的分布。从而，我们有良好定义的嵌入
  \[
  \iota_p\colon L^p(\mathbb{R}^n)\hookrightarrow \mathcal{S}'(\mathbb{R}^n).
  \]
  进一步证明$\iota_p$都是连续的。

- A2) 给定光滑函数$p(x)$，如果对任意的多重指标$\alpha$，存在正数$C_\alpha$和$d_\alpha$，使得
  \[
  \left|\partial^\alpha p(x)\right|\leqslant C_\alpha (1+|x|)^{d_\alpha},
  \]
  我们就称$p(x)$是**具有多项式增长的**函数。

  证明，给定具有多项式增长的函数$p(x)$，那么，
  对任意的$\varphi \in \mathcal{S}(\mathbb{R}^n)$，$p\cdot \varphi \in \mathcal{S}(\mathbb{R}^n)$；
  对任意的$u \in \mathcal{S}'(\mathbb{R}^n)$，$p\cdot u \in \mathcal{S}'(\mathbb{R}^n)$。

  证明，如下两个映射都是连续的：
  \[
  \begin{aligned}
  &\mathcal{S}(\mathbb{R}^n)\rightarrow \mathcal{S}(\mathbb{R}^n), \ \ \varphi \mapsto p\cdot \varphi;\\
  &\mathcal{S}'(\mathbb{R}^n)\rightarrow \mathcal{S}'(\mathbb{R}^n), \ \ u \mapsto p\cdot u.
  \end{aligned}
  \]

- A3) 给定分布${u}\in \mathcal{D}'(\mathbb{R}^n)$和$\mathbb{R}^n$上的光滑函数$f(x)$。
  假设$f\cdot u \stackrel{\mathcal{D}'}{=}0$，那么，
  \[
  \operatorname{supp}(u)\subset Z(f)=\big\{x\in \mathbb{R}^n\big| f(x)=0\big\}.
  \]

- A4) 证明，对任意的$a\in \mathbb{R}^n$，任意的多重指标$\alpha$，我们有
  \[
  \widehat{\partial^\alpha \delta_a}=(i\xi)^\alpha e^{-ix\cdot a}, \ \ \widehat{x^\alpha }=(2\pi)^n (i\partial)^\alpha\delta_0.
  \]
  特别地，
  \[
  \widehat{\partial^\alpha \delta_a}=(i\xi)^\alpha e^{-ix\cdot a}, \ \ \widehat{x^\alpha }=(2\pi)^n (i\partial)^\alpha\delta_0.
  \]

- A5) 证明，分布$d\sigma_R$是旋转不变的，
  其中$d\sigma_R$为$\mathbb{R}^n$上中心在原点半径为$R$（$>0$）的球面的曲面测度。

- A6) 给定$u\in \mathcal{S}'(\mathbb{R}^n)$，
  给定可逆的$n\times n$的实系数矩阵$A$并把它视作是$\mathbb{R}^n$到自身的线性变换。
  证明，$A^*u$也是缓增的分布并且
  \[
  \widehat{A^*u}=|\operatorname{det}(A)|^{-1} \left({}^tA^{-1}\right)^*\widehat{u}.
  \]

- A7) 证明，Heaviside函数$H(x)$的Fourier变换为
  \[
  \widehat{H}(\xi)=-i\cdot \operatorname{vp}\frac{1}{x}+\pi \delta_0.
  \]

- A8) 考虑$\mathbb{R}$上的分布$\displaystyle u=\sum_{n=0}^\infty c_n \delta_n$。
  证明，$u\in \mathcal{S}'(\mathbb{R})$当且仅当存在常数$C$和$p$，使得对所有的非负整数$n$，我们有
  \[
  |c_n|\leqslant C(1+n^p).
  \]

- A9) 试找出一切$f\in L^1(\mathbb{R})$，使得$f*f=f$。

- A10)（如果你不确定的话）试验证如下的初等不等式：
  给定正整数$m$，存在常数$C_1$和$C_2$，使得对任意的$\xi\neq 0$，我们有
  \[
  C_1(1+|\xi|^2)^m\leqslant  \sum_{|\alpha|\leqslant m}|\xi^\alpha|^2 \leqslant C_2(1+|\xi|^2)^m,
  \]
  其中$|\xi^\alpha|=|\xi_1^{\alpha_1}\xi_2^{\alpha_2}\cdots \xi_n^{\alpha_n}|$。
  这个不等式我们之后一直会引用。

- A11)（某些分量的Fourier变换）证明，
  \[
  \mathcal{F}_{x\rightarrow \xi}\colon \mathcal{S}(\mathbb{R}_t^n\times \mathbb{R}_x^{m})\rightarrow \mathcal{S}(\mathbb{R}_t^n\times \mathbb{R}_x^{m}).
  \]
  是连续的线性同构并进一步证明：
  \[
  \mathcal{F}_{x\rightarrow \xi}\colon \mathcal{S}'(\mathbb{R}_t^m\times \mathbb{R}_x^{n})\rightarrow \mathcal{S}'(\mathbb{R}_t^m \times \mathbb{R}_x^{n}),
  \]
  是连续的线性同构。

- A12)（重要）试构造函数局部可积的$u\in H^{\frac{n}{2}}(\mathbb{R}^n)$，
  使得$u \notin L^\infty(\mathbb{R}^n)$，即证明
  \[
  H^{\frac{n}{2}}(\mathbb{R}^n) \not\hookrightarrow L^\infty(\mathbb{R}^n).
  \]

## 习题B：Fourier变换的计算

证明，前八个问题中的分布都是$\mathbb{R}^1$上的缓增分布并计算它们的Fourier变换。

- B1) $u=\dfrac{1}{1+x^2}$；

- B2) $u=e^{-|x|}$；

- B3) $u=\mathbf{1}_{x\geqslant a}$，其中$a \in \mathbb{R}$；

- B4) $u=\dfrac{1}{x+i0}$；

- B5) $u=P(x)\mathbf{1}_{x\geqslant 0}$，其中$P(x)$为复系数多项式；

- B6) 假设$\alpha>-1$。证明，
  \[
  \frac{1}{(i\xi+0)^{1+\alpha}}\stackrel{\mathcal{D}'}{=}\lim_{\varepsilon\rightarrow 0+}(i\xi+\varepsilon)^{-1-\alpha}
  \]
  定义了$\mathbb{R}$上的一个分布。

  其中 $\alpha>-1$。请用$\Gamma(z)$（$\Gamma$函数）[^1]
  和$\displaystyle \frac{1}{(i\xi+0)^{1+\alpha}}$
  来表示$u={\rm pf}~x_+^\alpha$的Fourier变换；

- B7) $u={\rm pf}~x_+^\alpha$，其中 $\alpha<-1$ 且 $\alpha$ 不是整数；

- B8) $u=e^{-ix^2}$；

- B9) 证明，$\mathbb{R}^n$上定义的函数
  \[
  f(x_1,\cdots,x_n)=e^{-\sum_{i,j=1}^n A_{ij}x_ix_j}
  \]
  为Schwartz函数并计算其Fourier变换，其中$A$为实（对称）正定矩阵。

## 习题C：Heisenberg测不准原理

- C1) 对任意的$f\in \mathcal{S}(\mathbb{R})$，证明如下的不等式
  \[
  \left(\int_{\mathbb{R}}x^2|f(x)|^2dx\right)\left(\int_{\mathbb{R}}\xi^2|\widehat{f}(\xi)|^2\frac{d\xi}{2\pi}\right)
  \geqslant \left(\int_{\mathbb{R}}x \operatorname{Re}(\overline{f}f')dx\right)^2.
  \]

- C2) 对任意的$f\in \mathcal{S}(\mathbb{R})$，证明，
  \[
  \left(\int_{\mathbb{R}}x^2|f(x)|^2dx\right)\left(\int_{\mathbb{R}}\xi^2|\widehat{f}(\xi)|^2\frac{d\xi}{2\pi}\right)\geqslant  \frac{1}{4}{\left(\int_{\mathbb{R}}|f|^2 dx\right)^2}.
  \]

- C3) 对任意的$f\in \mathcal{S}(\mathbb{R})$，证明，如果$\|f\|_{L^2}=1$，那么，
  对任意的$(x_0,\xi_0)\in T^*\mathbb{R}^n=\mathbb{R}^n_x\times \mathbb{R}^n_\xi$，我们都有
  \[
  \Big(\int_{\mathbb{R}}(x-x_0)^2|f(x)|^2dx\Big)\Big(\int_{\mathbb{R}}(\xi-\xi_0)^2|\widehat{f}(\xi)|^2\frac{d\xi}{2\pi}\Big)\geqslant \frac{1}{4}.
  \]

- C4) 证明，当且仅当
  \[
  \displaystyle(x_0,y_0)=\left(\int_{\mathbb{R}}x|f(x)|^2dx,\int_{\mathbb{R}}\xi|\widehat{f}(\xi)|^2\frac{d\xi}{2\pi}\right)
  \]
  时，上式左边取得最小值。

- C5) 试将C3)和C4)的结论推广到$\mathbb{R}^n$上。

- C6) 证明，上述不等式可以取到等号。（提示：利用Gauss函数）

- C7) 当$n\geqslant 2$时，证明，能找到函数列$\{f_k(x)\}_{k\geqslant 1}\subset L^2(\mathbb{R}^n)$，
  使得对任意的$k$，我们有$\|f_k\|_{L^2}=1$并且
  \[
  \lim_{k\rightarrow \infty}\Big(\int_{\mathbb{R}}x_1^2|f_k(x)|^2dx\Big)\Big(\int_{\mathbb{R}}\xi_2^2|\widehat{f}_k(\xi)|^2\frac{d\xi}{2\pi}\Big)=0.
  \]

## 习题D：$H^s(\mathbb{R}^n)$的物理空间刻画

我们要求Sobolev指标$0<s<1$。假定$u\in L^2(\mathbb{R}^n)$，我们定义
\[
\mathbf{I}(u)=\int\!\!\!\int_{\mathbb{R}^{n}\times \mathbb{R}^n}\frac{|u(x)-u(y)|^2}{|x-y|^{n+2s}}dxdy.
\]
我们注意到$\mathbf{I}(u)$可以是无穷大。

- D1) 证明如下的等式：
  \[
  \begin{aligned}
  \mathbf{I}(u)&=\int_{\mathbb{R}^{n}}\frac{1}{|t|^{n+2s}}\Big(\int_{\mathbb{R}^{n}}|u(y+t)-u(y)|^2dy\Big)dt\\
  &=\int_{\mathbb{R}^{n}}|\widehat{u}(\xi)|^2 \Big(\int_{\mathbb{R}^{n}}\frac{|e^{it\cdot\xi}-1|^2}{|t|^{n+2s}}\frac{dt}{(2\pi)^n}\Big)d\xi.
  \end{aligned}
  \]

- D2) 令
  \[
  \displaystyle F(\xi)=\int_{\mathbb{R}^{n}}\frac{|e^{it\cdot\xi}-1|^2}{|t|^{n+2s}}\frac{dt}{(2\pi)^n}.
  \]
  证明，$F$是旋转对称的$2s$-次的齐次函数。

- D3) 证明，存在常数$c_0>0$，使得
  \[
  F(\xi)=c_0|\xi|^{2s}.
  \]

- D4) 假设$0<s<1$。证明，对任意的$u\in L^2(\mathbb{R}^n)$，如下等价

  - a) $u\in H^s(\mathbb{R}^n)$；

  - b)
    $\displaystyle \int\!\!\!\int_{\mathbb{R}^{n}\times \mathbb{R}^n}\frac{|u(x)-u(y)|^2}{|x-y|^{n+2s}}dxdy<\infty$。

## 习题E：一维情形的Poisson求和公式

给定$\lambda>0$，我们定义$\mathbb{R}^1$上的分布
\[
W_\lambda = \sum_{k\in \mathbb{Z}} \delta_{\lambda k}.
\]

- E1) 证明，$W_\lambda \in \mathcal{S}'(\mathbb{R})$。

- E2) 证明，$W_\lambda$满足下面关于分布的方程组
  \[
  \begin{cases}(\delta_\lambda-\delta_0)*u=0\\
  (e^{\frac{2\pi i x}{\lambda}}-1)u=0\end{cases}
  \]

- E3) 证明，满足上述方程组的缓增分布一定是$W_\lambda$的倍数。

- E4) 证明，存在常数$C_\lambda$，使得$\widehat{W_\lambda}=C_\lambda W_\lambda$并计算$C_\lambda$。

- E5) 证明Poisson求和公式：对每个$f \in \mathcal{S}(\mathbb{R})$，我们有
  \[
  \sum_{k\in \mathbb{Z}}f(2\pi k)=\frac{1}{2\pi}\sum_{k\in \mathbb{Z}}\widehat{f}(k).
  \]

[^1]: $\Gamma$函数的定义为
  \[
  \Gamma(z)=\int_{0}^{+\infty}e^{-t}t^{z-1}dt.
  \]
