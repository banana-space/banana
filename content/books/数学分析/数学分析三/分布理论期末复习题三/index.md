---
title: 分布理论期末复习题三
notices:
  - name: 问题
    items:
      - 题目 A10) 中的 $T$ 没有定义，似乎应为 $P\cdot u$ 或 $u$。
      - 题目 B26) 中 $\Omega_{13}$ 的定义 $z>\sqrt{x^2+y^2}$ 给出的只是 $\Omega_1$，与等式右边的 $\Omega_1\cup H_0^+\cup \Omega_3$ 似乎不符（后者似乎是 $z>-\sqrt{x^2+y^2}$ 的区域去掉原点）。
---

**题目A.**  我们定义$\mathbb{R}$上的分布
\[
\begin{aligned}
u(x)&=e^{-|x|}.
\end{aligned}
\]

- A1) 证明，$u$是缓增的分布并且在分布的意义下有
  \[
  u''-u+2\delta_0=0.
  \]

- A2) 证明，计算$\widehat{u}$并且确定所有的$s$，使得$u\in H^s(\mathbb{R})$。

- A3) 任意给定多项式$P\in \mathbb{C}[x]$，证明，对任意的$U\in \mathcal{S}'(\mathbb{R})$，
  在频率空间上$\widehat{P\cdot u}\cdot \widehat{U}$是良好定义的缓增分布。据此，我们可以定义卷积
  \[
  (P\cdot u)*U:=\mathcal{F}^{-1}\left(\widehat{P\cdot u}\cdot \widehat{U}\right).
  \]

- A4) 证明，对任意的$U\in H^s(\mathbb{R})$，其中$s\in \mathbb{R}$，我们有
  \[
  (P\cdot u)*U \in H^{s+2}(\mathbb{R}).
  \]

- A5) 证明，如果$U\in L^2(\mathbb{R})$，那么
  \[
  (P\cdot u)*U \in C^1(\mathbb{R}).
  \]

- A6) 我们现在要绕过Fourier变换直接来定义卷积$(P\cdot u)*U$。
  证明，存在$v\in \mathcal{E}'(\mathbb{R})$和$\varphi\in \mathcal{S}(\mathbb{R})$，使得
  \[
  P\cdot u = v+\varphi.
  \]

- A7) 我们定义
  \[
  (P\cdot u)\bullet U= v*U + \varphi *U.
  \]
  证明，这个定义所给出的分布不依赖于A6)中分解的选取。

- A8) 证明，$(P\cdot u)\bullet U$在${\rm supp}(U)$之外是光滑函数。

- A9) 证明，上面的两种卷积的定义是一致的。

- A10) 考虑如下的缓增分布：
  \[
  U=\sum_{k\in \mathbb{Z}}\delta_k,
  \]
  证明，$T*U$是$\mathbb{R}$上的连续周期函数并在一个周期上用初等函数表示它。

**题目B.**
我们先引入如下的记号：

- $A$是给定的$3\times 3$的实矩阵并且${\rm det}(A)=1$。
  我们把$A$视作是线性变换（矩阵从左边去乘以一个列向量）：
  \[
  A: \mathbb{R}^3\rightarrow \mathbb{R}^3.
  \]
  对任意的$u\in \mathcal{D}'(\mathbb{R}^3)$，我们把$Au$定义为如下的分布：
  \[
  \langle Au, \varphi\rangle =\langle u, \varphi\circ A^{-1}\rangle.
  \]
  特别地，如果$u\in L^1_{\rm loc}(\mathbb{R}^3)$，那么，
  \[
  (Au)(x)=u(A(x)).
  \]

  对于给定的$\theta,t\in \mathbb{R}$，我们定义两类特殊的线性变换：
  \[
  {R}_\theta: \mathbb{R}^3\rightarrow \mathbb{R}^3, \ \ (x,y,z)\mapsto (x\cos(\theta)+y\sin(\theta),-x\sin(\theta)+y\cos(\theta),z),
  \]
  和
  \[
  {S}_t: \mathbb{R}^3\rightarrow \mathbb{R}^3, \ \ (x,y,z)\mapsto (x\cosh(t)+z\sinh(t),y, z\cosh(t)+x\sinh(t)).
  \]
  如果对任意的$\theta,t \in \mathbb{R}$，我们都有
  \[
  R_\theta u =u , \ \ S_t u =u,
  \]
  我们就说$u$是**不变的**。

- 我们定义$\mathbb{R}^3$上的微分算子：
  \[
  \Box =\frac{\partial^2}{\partial z^2}-\frac{\partial^2}{\partial x^2}-\frac{\partial^2}{\partial y^2}.
  \]
  我们定义三个变量的多项式
  \[
  P(x,y,z)=z^2-x^2-y^2.
  \]

- 对于实数$\alpha\neq 0$，我们定义$\mathbb{R}^3$中的双曲面
  \[
  H_\alpha=\big\{(x,y,z)\in \mathbb{R}^3\big| z^2-x^2-y^2=\alpha.\big\}
  \]
  当$\alpha>0$时，我们定义
  \[
  H^+_\alpha=\big\{(x,y,z)\in H_\alpha\big| z>0\big\}, \ \ H^-_\alpha=\big\{(x,y,z)\in H_\alpha\big| z<0\big\}.
  \]
  当$\alpha=0$时，我们定义如下的（无定点的锥）
  \[
  H_0=\big\{(x,y,z)\in \mathbb{R}^3\big| z^2-x^2-y^2=0, (x,y,z)\neq (0,0,0).\big\}
  \]
  和
  \[
  H^+_0=\big\{(x,y,z)\in H_0\big| z>0\big\}, \ \ H^-_0=\big\{(x,y,z)\in H_0\big| z<0\big\}.
  \]

- 我们用$\vec{r}=(x,y,z)$表示$\mathbb{R}^3$中的一个向量（点），我们用如下的记号表示特定的向量：
  \[
  \vec{e}_x=(1,0,0), \ \vec{e}_y=(0,1,0), \ \vec{e}_z=(0,0,1).
  \]
  我们用$r$和$\rho$表示如下定义的$\mathbb{R}^3$上的半径函数
  \[
  r=\sqrt{x^2+y^2+z^2}, \ \ \rho=\sqrt{x^2+y^2}.
  \]
  当$\alpha\neq 0$时，我们令
  \[
  a=\sqrt{|\alpha|}.
  \]

**第一部分**

- B1) 假设$T\in \mathcal{D}'(\mathbb{R}^3)$并且在分布的意义下满足
  \[
  z\cdot T=0.
  \]
  证明，存在分布$S\in \mathcal{D}'(\mathbb{R}^2)$，
  使得对任意的$\varphi(x,y,z)\in \mathcal{D}(\mathbb{R}^3)$，如果令
  \[
  \psi(x,y)=\varphi(x,y,0),
  \]
  那么
  \[
  \langle T,\varphi\rangle =\langle S,\psi\rangle.
  \]

- B2) 给定开集$\omega\subset \mathbb{R}^2$和实值的光滑函数$F\in C^\infty(\omega)$，
  我们用$\Sigma$表示$F$的图像所定义的曲面：
  \[
  \Sigma=\big\{(x,y,z)\in \omega \times \mathbb{R}\big| z=F(x,y), (x,y)\in \omega\big\}.
  \]
  假设$T\in  \mathcal{D}'(\omega \times \mathbb{R})$满足分布意义下的方程
  \[
  \big(z-F(x,y)\big)\cdot T=0,
  \]
  证明，存在分布$S\in \mathcal{D}'(\mathbb{R}^2)$，
  使得对任意的$\varphi(x,y,z)\in \mathcal{D}(\omega \times \mathbb{R})$，如果令
  \[
  \psi(x,y)=\varphi\big(x,y,F(x,y)\big),
  \]
  那么
  \[
  \langle T,\varphi\rangle =\langle S,\psi\rangle.
  \]

- B3) 假设$T\in \mathcal{D}'(\mathbb{R}^3)$是不变的分布。
  如果对实数$\alpha>0$，$T$满足如下分布意义下的等式
  \[
  (P-\alpha)\cdot T=0,
  \]
  我们就称$T$是 **$\alpha$-不变的**。

  证明，如果$T$是$\alpha$-不变的（$\alpha>0$），那么，${\rm supp}(T)\subset H_\alpha$。
  进一步证明，如果${\rm supp}(T)\subset H^+_\alpha$，那么，
  存在分布$S\in \mathcal{D}'(\mathbb{R}^2)$，
  使得对任意的$\varphi(x,y,z)\in \mathcal{D}(\mathbb{R}^3)$，我们都有
  \[
  \langle T,\varphi\rangle =\left\langle S,\varphi(x,y,\sqrt{x^2+y^2+a^2})\right\rangle.
  \]
  我们把
  \[
  \psi(x,y)=\varphi(x,y,\sqrt{x^2+y^2+a^2})
  \]
  称作是$\varphi$的**伴随函数**，把$S$称作是$T$的**伴随分布**。

- B4) 对任意的$t,t'\in \mathbb{R}$，证明Lorentz变换满足如下的性质：
  \[
  S_{t+t'}=S_t\circ S_{t'}.
  \]
  （注意，不要把$S_t$和上面的伴随分布的符号弄混）

  对任意的$\varphi(x,y,z)\in \mathcal{D}(\mathbb{R}^3)$，我们令
  \[
  \varphi^t =S_t \varphi = \varphi\circ S_t
  \]
  试用$\varphi$的伴随函数$\psi(x,y)$的导数来计算
  \[
  \frac{d}{dt}\Big|_{t=0}\psi^t(x,y),
  \]
  其中，$\psi^t(x,y)$是$\varphi^t(x,y,z)$的伴随函数。

- B5) 假设$T\in \mathcal{D}'(\mathbb{R}^3)$是$\alpha$-不变的（$\alpha>0$）并且
  ${\rm supp}(T)\subset H^+_\alpha$，$S\in \mathcal{D}'(\mathbb{R}^2)$是它的伴随分布。
  证明，$S$满足如下两个条件

  - $S$是在$\mathbb{R}^2$上旋转不变的；

  - 在分布的意义下，我们有
    \[
    \frac{\partial }{\partial x}\left(\sqrt{a^2+x^2+y^2}\cdot S\right)=0.
    \]

- B6) 如果${\rm supp}(T)\subset H^+_\alpha$并且$S$是它的伴随分布。证明，

  - 如果$S$是在$\mathbb{R}^2$上旋转不变的，那么，对任意的$\theta\in \mathbb{R}$，我们有
    \[
    R_\theta T=T.
    \]

  - 如果在分布的意义下，我们有
    \[
    \frac{\partial }{\partial x}\left(\sqrt{a^2+x^2+y^2}\cdot S\right)=0,
    \]
    那么，对任意的$t\in \mathbb{R}$，我们有
    \[
    S_t T=T.
    \]

- B7) 假设$\alpha>0$，我们用$d\sigma_\alpha^+$表示$H_\alpha^+$的曲面测度，证明，
  \[
  \langle d\sigma_\alpha^+, \varphi\rangle=\int_{\mathbb{R}^2} \varphi(x,y,\sqrt{x^2+y^2+a^2})\frac{1}{|\vec{n}\cdot \vec{e}_z|}dxdy,
  \]
  其中，$\vec{n}$是$H_\alpha^+$在$(x,y,z)$处的单位法向量，
  $\vec{n}\cdot \vec{e}_z$是两个向量在$\mathbb{R}^3$中的标准内积。

- B8) 试计算$d\sigma_\alpha^+$的伴随分布并证明如下定义的分布是$\alpha$-不变的：
  \[
  T_\alpha^+ =\frac{1}{r}d\sigma_\alpha^+.
  \]

- B9) 假设$S\in \mathcal{D}'(\mathbb{R}^2)$是旋转不变的并且满足
  \[
  \frac{\partial S}{\partial x}=0.
  \]
  证明，$S$是由某个常数值的函数所定义的分布。

- B10) 证明，
  $T\in \mathcal{D}'(\mathbb{R}^3)$是$\alpha$-不变的分布并且${\rm supp}(T)\subset H_\alpha^+$，
  那么，存在$C\in \mathbb{C}$，使得
  \[
  T=C\cdot T^+_\alpha.
  \]

**第二部分**

- B11) 证明，$T_\alpha^+$是缓增的分布。

- B12) 缓增的分布$T\in \mathcal{S}'(\mathbb{R}^3)$是不变的当且仅当其Fourier变换是不变的。

- B13) 试找出所有的不变的缓增分布$U\in \mathcal{S}'(\mathbb{R}^3)$，使得$U$满足Klein–Gordon方程：
  \[
  \left(\Box- \lambda \right) U =0,
  \]
  其中，$\lambda<0$是给定的负数。

- B14) 我们将换一种方式将B13)中的结论推广到$\lambda=0$的情况（不需要重复第一部分中的计算）。
  我们用$d\sigma^+$表示$H_0^+$的曲面测度，用$d\sigma^-$表示$H_0^-$的曲面测度，那么，
  \[
  T_0^+=\frac{1}{r}d\sigma_+, \  \ T_0^-=\frac{1}{r}d\sigma_-
  \]
  都是$\mathbb{R}^3-\{(0,0,0)\}$上的分布。
  证明，如下的曲面积分对任意的$\varphi\in \mathcal{D}(\mathbb{R}^3)$都是收敛的
  \[
  \int_{H_0^+}\frac{\varphi}{r}d\sigma^+, \ \ \int_{H_0^-}\frac{\varphi}{r}d\sigma^-
  \]
  并且定义出了$\mathbb{R}^3$上的两个缓增的分布。我们之后仍旧把它们记作$T_0^+$和$T_0^-$。

- B15) 假设$T\in \mathcal{D}'(\mathbb{R}^3)$是$0$-不变的（即$P\cdot T=0$）分布。
  证明，$T$是$T_0^+$，$T_0^-$和$\delta_{(0,0,0)}$的线性组合。

- B16) 试找出所有的不变的缓增分布$U\in \mathcal{S}'(\mathbb{R}^3)$，使得$U$满足波动方程：
  \[
  \Box  \, U =0.
  \]

**第三部分**

我们在$\mathbb{R}^3$上定义开集
\[
\Omega_1=\big\{(x,y,z)\in \mathbb{R}^3\big|z^2-x^2-y^2>0, z>0\big\}.
\]
我们在$\Omega_1$上用如下的极坐标系：
\[
\begin{cases}
x&=a \sinh(u)\cos(\beta),\\
y&=a\sinh(u)\sin(\beta), \ \ \ (a,u,\beta)\in \mathbb{R}_{>0}\times \mathbb{R}\times \mathbb{R}.\\
z&=a\cosh(u).
\end{cases}
\]
对任意的$\varphi \in C_0^\infty(\Omega_1)$，
我们定义函数$\chi_{_\varphi}(a)\in C^{\infty}_0\big((0,+\infty)\big)$，使得
\[
\chi_{_\varphi}(a)=a\int_{H_\alpha^+} \varphi \frac{d\sigma_\alpha^+}{r}, \ \ \alpha=a^2, a>0.
\]

- B17) 假设$T\in \mathcal{D}'(\Omega_1)$是分布，证明，
  存在分布$S_T\in  \mathcal{D}'\big((0,+\infty)\big)$，
  使得对任意的$\varphi \in C_0^\infty(\Omega_1)$，我们都有
  \[
  \langle T,\varphi\rangle = \langle S_T, \chi_{_\varphi}\rangle.
  \]

- B18) 假设$T=F\in C^0(\Omega_1)$是不变的连续函数。证明，$S_T$可以被如下的函数实现：对任意的$a>0$，
  \[
  S_T(a)=F(\vec{r}), \  \ \vec{r}=(x,y,z),
  \]
  其中，$\vec{r}$是任意的一个$H^+_{a^2}$上的点。

- B19) 我们用$\mathcal{D}'(\Omega_1)^{\rm inv}$表示$\Omega_1$中所有不变的分布，
  用$C^\infty(\Omega_1)^{\rm inv}$表示$\Omega_1$中所有不变的光滑函数。证明，
  \[
  C^\infty(\Omega_1)^{\rm inv}\subset \mathcal{D}'(\Omega_1)^{\rm inv}
  \]
  是稠密的。

- B20) 如果$T\in \mathcal{D}'(\Omega_1)^{\rm inv}$，证明，
  $\Box T\in \mathcal{D}'(\Omega_1)^{\rm inv}$并且
  \[
  S_{\Box T}=\frac{\partial^2}{\partial a^2}S_T+\frac{2}{a}\frac{\partial}{\partial a}S_T.
  \]
  （提示：令$a=\sqrt{z^2-y^2-x^2}$，其中$(x,y,z)\in \Omega_1$，
  假设$F(x,y,z)=f(a)\in C^\infty(\Omega_1)^{\rm inv}$，先计算$\Box F$）

- B21) 给定$T\in \mathcal{D}'(\Omega_1)^{\rm inv}$，假设存在$\lambda \in \mathbb{C}$，
  使得$T$满足如下的Klein–Gordon方程：
  \[
  \Box T = \lambda T.
  \]
  证明，如果$\lambda \neq 0$，令$\ell$与$-\ell$为$\lambda$的两个平方根，那么，
  $T\in C^\infty(\Omega_1)^{\rm inv}$并且由如下的公式给出：
  \[
  T(x,y,z)=\frac{1}{a}\left(C_+e^{\ell a}+ C_- e^{-\ell a}\right),
  \]
  其中$C_\pm$为常数并且$a=\sqrt{z^2-x^2-y^2}$。

  当$\lambda=0$时，$T$的表达式是什么？

- B22) 接B21)，假设$\lambda \neq 0$。
  我们将$T$用$0$在$\mathbb{R}^3-\Omega_1$上进行延拓得到$F_T\in \mathcal{D}'(\mathbb{R}^3)$。
  证明，$F_T\in L^1_{\rm loc}(\mathbb{R}^3)$。
  试确定$\lambda\neq 0$，$C_+$和$C_-$的值，使得$F_T \in \mathcal{S}'(\mathbb{R}^3)$。

- B23) 我们在$\mathbb{R}^3$上定义开集
  \[
  \Omega_2=\big\{(x,y,z)\in \mathbb{R}^3\big|z^2-x^2-y^2>0, z<0\big\},
  \]
  和
  \[
  \Omega_3=\big\{(x,y,z)\in \mathbb{R}^3\big|z^2-x^2-y^2<0\big\}.
  \]
  以上关于$S_T$的理论显然可以推广到$\Omega_2$上。

  证明，对任意的$T\in \mathcal{D}'(\Omega_3)^{\rm inv}$，
  存在分布$S_T\in  \mathcal{D}'\big((0,+\infty)\big)$，
  使得对任意的$\varphi \in C_0^\infty(\Omega_3)$，
  \[
  \langle T,\varphi\rangle = \langle S_T, \chi_{_\varphi}\rangle,
  \]
  其中
  \[
  \chi_{_\varphi}(a)=a\int_{H_\alpha} \varphi \frac{d\sigma_\alpha}{r}, \ \ \alpha=-a^2, a>0,
  \]
  这里$d\sigma_\alpha$是$H_\alpha$的曲面测度。

- B24) 假设$T=F\in C^0(\Omega_3)$是不变的连续函数。证明，$S_T$可以被如下的函数实现：对任意的$a>0$，
  \[
  S_T(a)=F(\vec{r}), \  \ \vec{r}=(x,y,z),
  \]
  其中，$\vec{r}$是任意的一个$H_{-a^2}$上的点。

- B25) 假设$T\in \mathcal{D}'(\mathbb{R}^3)^{\rm inv}$并且满足Klein–Gordon方程：
  \[
  \Box T = \lambda T.
  \]
  令$\Omega =\Omega_1\cup \Omega_2\cup \Omega_3$。
  证明，存在函数$F\in L^1_{\rm loc}(\mathbb{R}^3)$，使得$F\in C^\infty(\Omega)$并且
  \[
  T\big|_{\Omega}\stackrel{\mathcal{D}'}{=}F\big|_{\Omega}.
  \]

- B26) 我们在$\mathbb{R}^3$上定义开集
  \[
  \Omega_{13}=\big\{(x,y,z)\in \mathbb{R}^3\big|z>\sqrt{x^2+y^2}\big\}=\Omega_1\cup H_0^+\cup \Omega_3.
  \]

  证明，对任意的$T\in \mathcal{D}'(\Omega_{13})^{\rm inv}$，
  存在分布$v_T\in  \mathcal{D}'\big(\mathbb{R}\big)$，
  使得对任意的$\varphi \in C_0^\infty(\Omega_{13})$，
  \[
  \langle T,\varphi\rangle = \langle v_T, \psi_{_\varphi}\rangle,
  \]
  其中
  \[
  \psi_{_\varphi}(\alpha)=\frac{1}{2}\int_{H_\alpha} \varphi \frac{d\sigma_\alpha}{r}, \ \ \alpha\in \mathbb{R}.
  \]

  如果$T=f(\alpha)$，其中，$f$为连续函数，$\alpha=z^2-x^2-y^2$，证明，$v_T=f(\alpha)$。

- B27) 假设$T\in \mathcal{D}'(\mathbb{R}^3)^{\rm inv}$并且满足Klein–Gordon方程：
  \[
  \Box T = \lambda T.
  \]
  证明，B25)中所构造的$F$在$\Omega_{13}$上的限制形如$f(\alpha)$，其中，$\alpha=z^2-x^2-y^2$，
  $f\in L_{\rm loc}^1(\mathbb{R})$。进一步，证明$v_T=f(\alpha)$并且满足如下的微分方程
  \[
  4\alpha v''_T+6v'_T-\lambda v_T=0.
  \]

- B28) 给定分布$v\in \mathcal{D}'(\mathbb{R})$，
  如果对任意的试验函数$\varphi \in \mathcal{D}(\mathbb{R})$，我们都有
  \[
  \lim_{\varepsilon\rightarrow 0}\left\langle v, \varphi\left(\frac{x}{\varepsilon}\right)\right\rangle=0,
  \]
  我们就称$v$在$0$处是**正则的**。
  如果对于自然数$n\geqslant 1$，$x^n \cdot v$在$0$处正则但是$x^{n-1} \cdot v$在$0$处不正则，
  我们就说$v$的正则次数为$n$。如果$v$在$0$处正则，我们就说$v$的正则次数为$0$。
  证明如下四个论断：

  - 如果$v\in L_{\rm loc}^1(\mathbb{R})$，那么，$v$的正则次数为$0$。

  - 如果$v\in \mathcal{D}'(\mathbb{R})$的正则次数为$n$，其中，$n\geqslant 1$，那么，
    $x\cdot v$的正则次数为$n-1$。

  - 如果$v\in \mathcal{D}'(\mathbb{R})$的正则次数不超过$n$，其中$n\geqslant 0$，那么，
    $v'$的正则次数不超过$n+1$。

  - Dirac分布的$k$次导数$\delta_0^{(k)}$的正则次数为$k+1$。

- B29) 假设$T$与$F$满足B26)与B27)，证明，
  \[
  w=v_T-v_F
  \]
  是$\delta_0$及其导数的线性组合。

- B30) 证明，$w=0$。
  （提示：考虑$4\alpha w''+ 6w'-\lambda w$）

- B31) 证明，$T\big|_{\mathbb{R}^3-\{0\}}=F\big|_{\mathbb{R}^3-\{0\}}$。
