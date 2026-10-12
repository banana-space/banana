---
title: 作业：Fourier 逆变换，分布的扩张与张量积
notices:
  - name: 问题
    items:
      - 习题 A7 中连续性的不等式左边 $\sup_{|\alpha|\leqslant p}\|\partial^\beta(T\varphi)\|_{L^\infty(K)}$ 里的 $\partial^\beta$ 似乎应为 $\partial^\alpha$。
      - 习题 C6、C7 中的 $f*\delta_{\varepsilon}$ 似乎应为 C3 中定义的 $f*d_{\varepsilon}$；C7 中序列记作 $\{\varepsilon_k\}$，而收敛写作 $\varepsilon_n \rightarrow 0$，卷积中也似乎应为 $\varepsilon_k$。
---

**习题A（课堂细节的补充）**  我们总假设$\Omega\subset \mathbb{R}^n$是非空的开集。

- A1) 在第七课中（命题43），对于$u,v\in\mathcal{D}'(\mathbb{R}^n)$，
  其中${\rm supp}(u)$和${\rm supp}(v)$是可卷的，我们定义了
  \[
  u*v \in \mathcal{D}'(\mathbb{R}^n).
  \]
  我们课程上没有验证$u*v$满足分布定义中所要求的不等式。试补充这部分的细节。

- A2) 对于$u,v,w \in \mathcal{D}'(\mathbb{R}^n)$，假设${\rm supp}(u)$，
  ${\rm supp}(v)$和${\rm supp}(w)$是可卷的。试证明：

  - 1\) ${\rm supp}(u*v)\subset {\rm supp}(u)+{\rm supp}(v)$；

  - 2\) $u*v=v*u$；

  - 3\) $(u*v)*w=u*(v*w)$；

- A3) 在第七课中，对于给定的光滑初始值，我们证明$\mathbb{R}^{1+3}$上的波动方程的解的表示公式：
  对于$t\geqslant 0$，有
  \[
  u(t,x)=- t\int_{\mathbf{S}^2}  u_1(x-t\vartheta') \frac{d\sigma_{\mathbf{S}^2}(\vartheta')}{4\pi}-\partial_t\left[t\int_{\mathbf{S}^2}  u_0(x-t\vartheta') \frac{d\sigma_{\mathbf{S}^2}(\vartheta')}{4\pi}\right].
  \]
  证明的过程中我们假设了初始值$u_0$和$u_1$都有紧支集。证明，这个紧支集的要求是冗余的。

- A5) 证明，对任意的$f\in L^2(\mathbb{R}^n)$，我们都有
  \[
  \widehat{\hat{f}}= (2\pi)^n\check{f} \ \ \Leftrightarrow \ \ \mathcal{F}^2(f)= (2\pi)^n\check{f}.
  \]

- A4) 把$L^2$意义下的Fourier变换记作$\mathcal{F}_2$；$L^1$函数的Fourier变换可以用Fourier积分表示的，
  我们把它记做$\mathcal{F}_1$。证明，对于$f\in L^1(\mathbb{R}^n)\cap L^2(\mathbb{R}^n)$，我们有
  \[
  \mathcal{F}_1(f)=\mathcal{F}_2(f).
  \]

- A6) 对于Schwartz函数$\varphi \in \mathcal{S}(\mathbb{R}^n)$，
  对它求若干次导数或者乘以一个多项式仍然是一个Schwartz函数，即对任意的多重指标$\alpha$，$\beta$，
  我们有
  \[
  \begin{aligned}
  x^\alpha&: \mathcal{S}(\mathbb{R}^n)\rightarrow  \mathcal{S}(\mathbb{R}^n),  \\
  \partial^\beta&:  \mathcal{S}(\mathbb{R}^n)\rightarrow  \mathcal{S}(\mathbb{R}^n).
  \end{aligned}
  \]

- A7)（平移不变算子与卷积）给定连续$\mathbb{C}$-线性映射（线性算子）
  \[
  T:C_0^\infty (\mathbb{R}^n) \rightarrow C_0^\infty (\mathbb{R}^n),
  \]
  其中，连续性指的是对任意的紧集$K\subset \mathbb{R}^n$，对任意的非负整数$p$，
  存在紧集$L\subset \mathbb{R}^n$、非负整数$q$和常数$C>0$，
  使得对任意的$\varphi \in C_0^\infty (\mathbb{R}^n)$，我们都有
  \[
  \sup_{|\alpha|\leqslant p}\|\partial^\beta(T\varphi)\|_{L^\infty(K)}\leqslant  C\sup_{|\beta|\leqslant q}\|\partial^\beta \varphi\|_{L^\infty(L)}.
  \]
  我们假设$T$与$\mathbb{R}^n$上的平移算子交换，即对任意的$a \in \mathbb{R}^n$，
  对任意的$\varphi \in C_0^\infty (\mathbb{R}^n)$，我们都有
  \[
  T\left(\tau_a \varphi \right)=\tau_a\left(T(\varphi)\right).
  \]
  证明，存在$u\in \mathcal{E}'(\mathbb{R}^n)$，使得对任意的$\varphi \in C_0^\infty (\mathbb{R}^n)$，
  我们都有
  \[
  T(\varphi)=u*\varphi.
  \]

**习题B：一个分布的问题**

对于$\lambda\in(-2,+\infty)$和$\varphi\in \mathcal{D}(\mathbb{R})$，我们定义
\[
\langle u_\lambda,\varphi \rangle =\int_{0}^1 x^\lambda\big(\varphi(x)-\varphi(0)\big)dx.
\]

- B1) 证明，$u_\lambda \in \mathcal{D}'(\mathbb{R})$并确定它的阶和支集。

- B2) 证明，$u_\lambda \notin L^2(\mathbb{R})$。

- B3) 证明，$xu_\lambda \in L^2(\mathbb{R})$。

- B4) 证明，当$\lambda \in (-2,+\infty)$时，我们有
  \[
  (u_{\lambda+1})'=(\lambda+1)u_\lambda-\delta_1+\delta_0-\frac{1}{\lambda+2}\delta'_0.
  \]

- B5) 对于 $\lambda \in (-2,-1)\cup(-1,+\infty)$，试找出$u_\lambda$的一个原函数，
  即某个$v_\lambda \in \mathcal{D}'(\mathbb{R})$，使得
  \[
  v'_\lambda=u_\lambda.
  \]

- B6) 对于$\lambda_0 \in (-2,+\infty)$，证明，当$\lambda\rightarrow \lambda_0$时，我们有
  \[
  u_\lambda \stackrel{\mathcal{D}'(\mathbb{R})}{\longrightarrow} u_{\lambda_0}.
  \]

- B7) 证明，当$\lambda\rightarrow -2$时（$\lambda>-2$），
  $\displaystyle\lim_{\lambda\rightarrow -2}(\lambda+2)u_\lambda$作为分布的极限存在并计算该分布。

- B8) 证明，存在$v_{-1}\in L^2(\mathbb{R})$，使得$u_{-1} = (v_{-1})'$。

**习题C：Fourier逆变换的另一个计算**

我们对$f\in L^1(\mathbb{R})$，定义其Fourier逆变换为
\[
\big(\mathcal{F}^{-1}f)(x) = \frac{1}{2\pi}\int_\mathbb{R}e^{ix\xi}f(\xi)d\xi.
\]

- C1) 对正数$a>0$，试计算积分
  \[
  \displaystyle \int_{0}^\infty \cos(ax)e^{-x}dx.
  \]

- C2) 我们定义函数
  \[
  h(\xi)=e^{-|\xi|}, \  \ d(x) = \frac{1}{\pi(1+x^2)}.
  \]
  证明，
  \[
  d(x)=\big(\mathcal{F}^{-1}h\big)(x).
  \]

- C3) 给定$\varepsilon>0$，定义
  \[
  h_\varepsilon(\xi)=h(\varepsilon \xi),\ \ d_\varepsilon(x)=\frac{1}{\varepsilon} d\left(\frac{x}{\varepsilon}\right).
  \]
  证明，
  \[
  \big(\mathcal{F}^{-1}h_\varepsilon\big)(x)=d_\varepsilon(x).
  \]

- C4) 证明，
  \[
  (f*d_{\varepsilon})(x)=\frac{1}{2\pi}\int_{\mathbb{R}}h_\varepsilon(\xi)\widehat{f}(\xi)e^{ix\xi }d\xi.
  \]

- C5) 证明，函数
  \[
  \displaystyle g(y)=\int_{\mathbb{R}}|f(x-y)-f(x)|dx
  \]
  是$\mathbb{R}$上的有界连续函数。

- C6) 证明，当$\varepsilon\rightarrow 0$时，我们有
  \[
  \|f*\delta_{\varepsilon}-f\|_{L^1}\rightarrow 0.
  \]

- C7) 证明，存在序列$\{\varepsilon_k\}_{k\geqslant 1}$，使得$\varepsilon_n \rightarrow 0$并且
  \[
  (f*\delta_{\varepsilon})(x)\rightarrow f(x)
  \]
  几乎处处成立。

- C8) 假设$\widehat{f}(\xi)\in L^1(\mathbb{R})$，证明，
  \[
  \big(\mathcal{F}^{-1} \widehat{f}\,\big)(x) = f(x)
  \]
  几乎处处成立。

**习题D：关于分布扩张的一个问题**

- D1) 证明，线性映射
  \[
  \mathcal{D}(\mathbb{R})\rightarrow \mathbb{R}, \ \ \varphi \mapsto \sum_{k=1}^\infty\left(\varphi(\frac{1}{k})-\varphi(0)\right),
  \]
  定义了$\mathbb{R}$上的分布并确定该分布的支集。

- D2) 给定实数序列$\{\alpha_k\}_{k\geqslant 1}\subset \mathbb{R}$，考虑如下两个线性映射
  \[
  \begin{aligned}
  u&:\mathcal{D}\big((0,+\infty)\big)\rightarrow \mathbb{R}, \ \ \varphi\mapsto u(\varphi) = \sum_{k=1}^\infty \alpha_k\varphi\left(\frac{1}{k}\right),\\
  v&:\mathcal{D}\big((0,+\infty)\big)\rightarrow \mathbb{R}, \ \ \varphi\mapsto v(\varphi) = \sum_{k=1}^\infty \alpha_k\varphi^{(k)}\left(\frac{1}{k}\right),
  \end{aligned}
  \]
  其中$\varphi^{(k)}$为$\varphi$的$k$-阶导数。
  证明，$u$和$v$是$(0,+\infty)$上的分布。

- D3) 证明，如下两个命题等价：

  - $u$是$\mathbb{R}$上某个分布的限制，即存在$\widetilde{u}\in \mathcal{D}'(\mathbb{R})$，
    使得$u = \widetilde{u}\big|_{(0,\infty)}$；

  - 序列$\{\alpha_k\}_{k\geqslant 1}$是多项式增长的，即存在正实数$C>0$和正整数$\ell$，
    使得对任意的$k\geqslant 1$，我们都有
    \[
    |\alpha_k|\leqslant C k^\ell.
    \]

- D4) 证明，如下两个命题等价：

  - $v$是$\mathbb{R}$上某个分布的限制，即存在$\widetilde{v}\in \mathcal{D}'(\mathbb{R})$，
    使得$v = \widetilde{v}\big|_{(0,\infty)}$；

  - 序列$\{\alpha_k\}_{k\geqslant 1}$是具有紧支集，即存在正整数$k_0$，使得当$k\geqslant k_0$时，
    有$\alpha_k=0$。

- D5) 给定$f\in L^1_{\rm loc}\big((0,\infty)\big)$，其中$f\geqslant 0$几乎处处成立。
  证明，如下两个命题等价：

  - $f$是$\mathbb{R}$上某个分布的限制，即存在${w}\in \mathcal{D}'(\mathbb{R})$，
    使得$f = {w}|_{(0,\infty)}$，亦即对任意$\varphi \in \mathcal{D}\big((0,\infty)\big)$，我们有
    \[
    \langle w, \varphi \rangle =\int_0^{+\infty}f(x)\varphi(x) dx;
    \]

  - 存在实数$C>0$和正整数$\ell$，使得对一切$\varepsilon\in(0,1)$，我们都有
    \[
    \displaystyle \int_{\varepsilon}^1f(x)dx\leqslant \frac{C}{\varepsilon^\ell}.
    \]

**习题E：分布的张量积**

假设$\Omega_1\subset \mathbb{R}^{n_1}$和$\Omega_2\subset \mathbb{R}^{n_2}$是两个非空的开集。

- E1) 对于$u_1\in C(\Omega_1)$和$u_2\in C(\Omega_2)$，
  我们定义它们的张量积$u_1\otimes u_2$为$\Omega_1\times\Omega_2$上的连续函数
  \[
  (u_1\otimes u_2)(x_1,x_2)=u_1(x_1)u_2(x_2).
  \]
  证明，对任意的$\varphi(x_1, x_2)\in \mathcal{D}(\Omega_1\times\Omega_2)$，其中$x_1\in \Omega_1$，
  $x_2\in \Omega_2$，我们有
  \[
  \langle u_1\otimes u_2, \varphi\rangle=\big\langle u_1(x_1),\langle u_2(x_2), \varphi(x_1,x_2)\rangle \big\rangle.
  \]
  特别地，（证明）$\varphi_1\in \mathcal{D}(\Omega_1)$和$\varphi_2\in \mathcal{D}(\Omega_2)$，那么，
  $\varphi_1\otimes \varphi_2\in \mathcal{D}(\Omega_1\times \Omega_2)$并且
  \[
  \langle u_1\otimes u_2, \varphi_1\otimes \varphi_2\rangle =\langle u_1, \varphi_1\rangle\langle u_2, \varphi_2\rangle.
  \]

- E2) 对于$u_1\in \mathcal{D}'(\Omega_1)$和$u_2\in  \mathcal{D}'(\Omega_2)$，
  我们定义$\mathcal{D}(\Omega_1\times \Omega_2)$上的连续线性泛函：
  \[
  u:\mathcal{D}(\Omega_1\times \Omega_2)\rightarrow \mathbb{C}, \ \ \varphi\mapsto \big\langle u_1(x_1),\langle u_2(x_2), \varphi(x_1,x_2)\rangle \big\rangle.
  \]
  证明，$u\in \mathcal{D}'(\Omega_1\times \Omega_2)$。我们把它记做是$u_1\otimes u_2$。

  进一步验证，如果$\varphi_1\in \mathcal{D}(\Omega_1)$，$\varphi_2\in \mathcal{D}(\Omega_2)$，那么
  \[
  \langle u_1\otimes u_2, \varphi_1\otimes \varphi_2\rangle =\langle u_1, \varphi_1\rangle\langle u_2, \varphi_2\rangle.
  \]

  对于$a_1\in \Omega_1$，$a_2\in \Omega_2$，试计算$\delta_{a_1}\otimes \delta_{a_2}$。

- E3\*) 我们定义$\mathcal{D}(\Omega_1\times \Omega_2)$的子空间：
  \[
  \mathcal{D}(\Omega_1)\otimes  \mathcal{D}(\Omega_2)={\rm span}_\mathbb{C}\big\{\varphi_1\otimes \varphi_2\big| \varphi_1\in \mathcal{D}(\Omega_1), \varphi_2\in \mathcal{D}(\Omega_2)\big\}.
  \]
  证明，
  $\mathcal{D}(\Omega_1)\otimes  \mathcal{D}(\Omega_2)$在$\mathcal{D}(\Omega_1\times \Omega_2)$
  中是稠密的。

  （提示：先证明对任意的$\varphi \in \mathcal{D}(\Omega_1\times \Omega_2)$，
  存在关于$x_1 \in \mathbb{R}^{n_1},x_2\in \mathbb{R}^{n_2}$的多项式序列
  $\{P_k(x_1,x_2)\}_{k\geqslant 1}$，使得对任意的多重指标$\alpha$，在${\rm supp}(\varphi)$上，
  当$k\rightarrow \infty$时，$\partial^\alpha P_k$一致收敛到$\partial^\alpha \varphi$）

- E4) 对于$u_1\in \mathcal{D}'(\Omega_1)$和$u_2\in  \mathcal{D}'(\Omega_2)$，证明，
  存在唯一的分布$u\in \mathcal{D}'(\Omega_1\times \Omega_2)$，
  使得对任意的$\varphi_1\in \mathcal{D}(\Omega_1)$和$\varphi_2\in \mathcal{D}(\Omega_2)$，我们有
  \[
  \langle u, \varphi_1\otimes \varphi_2\rangle =\langle u_1, \varphi_1\rangle\langle u_2, \varphi_2\rangle.
  \]

- E5) 我们用$(x_1,\cdots,x_{n_1})$表示$\Omega_1$上的坐标，
  用$(y_1,\cdots,y_{n_2})$表示$\Omega_2$上的坐标。
  对于$u_1\in \mathcal{D}'(\Omega_1)$和$u_2\in  \mathcal{D}'(\Omega_2)$和任意的
  $1\leqslant k\leqslant n_1$，证明，
  \[
  \partial_{x_k}\left(u_1\otimes u_2\right)\stackrel{\mathcal{D}'}{=}\left(\partial_{x_k}u_1\right)\otimes u_2.
  \]

- E6) 对任意的非负整数$k$，考虑$\mathbb{R}^n$上的常系数微分算子
  \[
  P=\partial_{1}^{k+2}\partial_{2}^{k+2}\cdots\partial_{n}^{k+2}.
  \]
  证明，函数
  \[
  E(x_1,\cdots,x_n)=\left(\frac{x_1^{k+1}H(x_1)}{(k+1)!}\right)\otimes \left(\frac{x_2^{k+1}H(x_2)}{(k+1)!}\right)\otimes \cdots \otimes \left(\frac{x_n^{k+1}H(x_n)}{(k+1)!}\right),
  \]
  是$C^k$的并且是$P$的基本解，其中$H(x)$是Heaviside函数。
