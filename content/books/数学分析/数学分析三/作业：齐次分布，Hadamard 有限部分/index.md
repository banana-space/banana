---
title: 作业：齐次分布，Hadamard 有限部分
notices:
  - name: 问题
    items:
      - '习题 F 中 $u_\lambda$ 的定义 $\langle u_\lambda, \varphi \rangle =\langle u, |\lambda|^{-n} \varphi_{1/\lambda} \rangle$ 与 F1 中的刻画 $f(\lambda x)=\lambda^d f(x)$ 似乎不一致：对局部可积函数 $f$，与 F1 相容的定义似乎应为 $|\lambda|^{n}\varphi_{1/\lambda}$。'
---

## 分布的定义、例子与操作

**习题A.**  我们总假设$\Omega\subset \mathbb{R}^n$是非空的开集。

- A1) 假设$\psi(x)\in C^\infty(\mathbb{R})$并且$\psi(0)=0$，那么，$\dfrac{\psi(x)}{x}$也是光滑函数。

- A2) 对任意给定的分布$u\in \mathcal{D}'(\Omega)$，
  对任意的试验函数序列$\{\varphi_p\}_{p\geqslant 1}\subset \mathcal{D}(\Omega)$，
  如果$\varphi_p \stackrel{\mathcal{D}}{\longrightarrow}0$，试证明，
  \[
  \lim_{p\rightarrow \infty}\langle u, \varphi_p \rangle =0.
  \]

- A3) 对任意整数$k\geqslant 0$，我们定义$\mathcal{D}(\mathbb{R})$上的线性泛函：
  \[
  \ \langle \delta^{(k)},\varphi\rangle = (-1)^k\varphi^{(k)}(0),
  \]
  其中，$\varphi^{(k)}$指的是求$k$次导数。证明，这定义了$\mathbb{R}$上的分布并且其阶恰好为$k$。

- A4) 我们定义$\mathcal{D}(\mathbb{R})$ 上的线性泛函：
  \[
  \langle u,\varphi \rangle = \sum_{k=0}^\infty \varphi^{(k)}(k).
  \]
  证明，这定义了$\mathbb{R}$上的分布然而我们不能定义它的阶。

- A5) 证明，$\displaystyle{\rm vp}\frac{1}{x}$ 的阶恰为 $1$。

- A6) 证明，如果试验函数$\varphi\in \mathcal{D}(\mathbb{R})$满足$\varphi(0)=0$，那么
  \[
  \langle {\rm vp}\frac{1}{x}, \varphi\rangle = \int_{\mathbb{R}} \frac{\varphi(x)}{x}dx.
  \]

- A7) 证明，$\mathbb{R}_{>0}$上的函数
  \[
  f(x)=\displaystyle e^{\frac{1}{x}}\mathbf{1}_{(0,+\infty)}(x)
  \]
  不能延拓为$\mathbb{R}$ 上的一个分布，即不存在$u\in \mathcal{D}'(\mathbb{R})$，
  使得对任意的$\varphi \in \mathcal{D}((0,\infty))$，我们都有
  \[
  \langle u, \varphi \rangle = \int_{0}^\infty e^{\frac{1}{x}}\varphi(x)dx.
  \]

- A8) 对任意的$\varepsilon>0$，我们令
  \[
  \displaystyle f_\varepsilon(x) = \frac{1}{x}\mathbf{1}_{(-\infty,{-\varepsilon})\cup (2\varepsilon, +\infty)}(x).
  \]
  证明，当$\varepsilon \rightarrow 0$时，
  $f_\varepsilon$在分布（$\mathcal{D}'(\mathbb{R})$）的意义下有极限并计算该极限。

- A9) 对任意的$\varepsilon>0$，我们定义
  \[
  \displaystyle g_\varepsilon(x) = \frac{1}{x}\mathbf{1}_{(-\infty,{-\varepsilon})\cup (\varepsilon^2, +\infty)}(x).
  \]
  我们把它们看作是$\mathcal{D}'(\mathbb{R})$中的一族分布。
  证明，当$\varepsilon \rightarrow 0$时，$g_\varepsilon$在分布的意义下是没有极限的。

**习题B（$\mathbb{R}$上的概率分布函数）。**

- B1) 假设$\mu$是$(\mathbb{R},\mathcal{B}(\mathbb{R}))$上的概率测度，即$\mu(\mathbb{R})=1$，
  其中$\mathcal{B}(\mathbb{R})$是Borel代数。证明，函数
  \[
  f(x)=\mu((-\infty,x])
  \]
  是递增的、右连续的函数并且满足
  \[
  \lim_{x\rightarrow -\infty}f(x)=0, \ \ \lim_{x\rightarrow +\infty}f(x)=1.
  \]

- B2) 假设$\mu$是$(\mathbb{R},\mathcal{B}(\mathbb{R}))$上的概率测度，$f(x)=\mu((-\infty,x))$，证明，
  在分布的意义下
  \[
  f'\stackrel{\mathcal{D}'(\mathbb{R})}{=}\mu.
  \]

- B3) 任给定$\mathbb{R}$上的单调递增的函数$f(x)$，满足
  \[
  \lim_{x\rightarrow -\infty}f(x)=0, \lim_{x\rightarrow +\infty}f(x)=1.
  \]
  证明，其分布意义下的导数$f'$可以被视为是$(\mathbb{R},\mathcal{B}(\mathbb{R}))$上的概率测度，
  即存在概率测度$\mu$，使得对任意的$\varphi \in \mathcal{D}(\mathbb{R})$，我们有
  \[
  \langle f',\varphi\rangle=\int_{\mathbb{R}}\varphi ~d\mu.
  \]

**习题C（Hadamard的有限部分（parties finies）${\rm pf}\,x_+^\alpha$）。**

- C1) 给定参数$\alpha\in(-1,0)$，证明，函数$x^\alpha$是$[0,1)$上的可积函数。

- C2) 给定参数$\alpha\in(-2,-1)$。
  证明，对任意$\varphi \in \mathcal{D}(\mathbb{R})$，对任意的$\varepsilon>0$，
  我们都可以把积分$\displaystyle \int_\varepsilon^\infty x^\alpha \varphi(x) dx$写成下面的形式：
  \[
  \int_\varepsilon^\infty x^\alpha \varphi(x)dx = A\varepsilon^{\alpha+1}+R_\varphi(\varepsilon),
  \]
  其中，$A$是由$\varphi$决定的常数并且当$\varepsilon\rightarrow 0^+$时，
  $R_\varphi(\varepsilon)$有极限。

- C3) 证明，下述公式定义出$\mathcal{D}'(\mathbb{R})$中的分布：
  \[
  \langle{\rm pf}\,x_+^\alpha, \varphi \rangle=\lim_{\varepsilon\rightarrow 0^+}R_\varphi(\varepsilon).
  \]

- C4) 给定参数$\alpha \in (-\infty,-1)-\mathbb{Z}$（$\alpha$不是整数）。
  证明，对任意$\varphi \in \mathcal{D}(\mathbb{R})$，对任意的$\varepsilon>0$，
  我们都可以把积分$\displaystyle \int_\varepsilon^\infty x^\alpha \varphi(x) dx$写成下面的形式：
  \[
  \int_\varepsilon^\infty x^\alpha \varphi(x) = P_\varphi(\varepsilon)+R_\varphi(\varepsilon),
  \]
  其中，$P_\varphi(\varepsilon)$是有限个$\varepsilon$的负次方的常数系数（依赖于$\varphi$）线性组合，
  而当$\varepsilon\rightarrow 0^+$时，$R_\varphi(\varepsilon)$有极限。

- C5) 证明，下述公式定义出$\mathcal{D}'(\mathbb{R})$中的分布：
  \[
  \langle{\rm pf}\,x_+^\alpha, \varphi \rangle=\lim_{\varepsilon\rightarrow 0^+}R_\varphi(\varepsilon).
  \]

- C6) 计算如下的分布
  \[
  \displaystyle x \cdot {\rm pf}\,x_+^\alpha, \ \ \displaystyle\frac{d}{dx}\left({\rm pf}\,x_+^\alpha\right),
  \]
  其中$\alpha\in (-\infty,0)-\mathbb{Z}$。

- C7) 如果$\alpha=-2$，你是否可以定义出${\rm pf}\,x_+^{-2}$？

- C8)（选做）如果$\alpha=-2,-3,-4,\cdots$，你能否对上述问题做出相应的改动和回答？

**习题D（关于分布的一个除法问题，$\div x$）。**

- D1) 任意给定试验函数$\varphi \in \mathcal{D}(\mathbb{R})$，证明，如果$\varphi(0)=0$，那么函数
  \[
  \displaystyle \frac{\varphi(x)}{x} \in \mathcal{D}(\mathbb{R}).
  \]

- D2) 证明，对每个$u \in \mathcal{D}'(\mathbb{R})$，
  存在$\widetilde{u}\in \mathcal{D}'(\mathbb{R})$，使得在分布的意义下
  \[
  x\cdot \widetilde{u}=u.
  \]

- D3) 试找出一切$u \in \mathcal{D}'(\mathbb{R})$，使得在分布的意义下
  \[
  x\cdot u=0.
  \]

- D4) 试在分布的意义下找出如下四个方程的所有解：
  \[
  x\cdot u= 1, \ \ x\cdot u=\delta_0, \ \ x\cdot u={\rm pv}\frac{1}{x},
  \]
  和
  \[
  x\cdot u={\rm pf}\,x_+^\alpha,
  \]
  其中$\alpha < -1$且不是整数。

- D5) 试找出所有的 $u \in \mathcal{D}'(\mathbb{R})$，使得在分布的意义下，我们有
  \[
  u+x\cdot u'= 0.
  \]

**习题E（一个$\mathbb{R}^2$上的微分方程）。**

现在在$\mathbb{R}^2$上面研究问题，我们用$(x,y)$作为标准的坐标函数。

- E1) 假设分布$u \in \mathcal{D}'(\mathbb{R}^2)$满足
  \[
  \partial_x u \stackrel{\mathcal{D}'}{=}0.
  \]
  证明，存在 $v \in \mathcal{D}'(\mathbb{R})$，
  使得对任意的 $\varphi \in \mathcal{D}(\mathbb{R}^2)$，我们都有
  \[
  \langle u, \varphi \rangle = \left\langle v, \int_{\mathbb{R}}\varphi(x,y)dx\right\rangle.
  \]

- E2)（正则性）假设分布$u \in \mathcal{D}'(\mathbb{R}^2)$满足
  \[
  \partial_x u \in C^0(\mathbb{R}^2), \ \ \partial_y u \in C^0(\mathbb{R}^2).
  \]
  也就是说，$\partial_x u$和$\partial_y u$分别对应着连续函数所定义的分布。
  证明，$u \in C^1(\mathbb{R}^2)$。

**习题F（齐次分布）。**

给定试验函数$\varphi \in \mathcal{D}(\mathbb{R}^n)$，对任意的实数$\lambda \neq 0$，我们定义
\[
\varphi_\lambda(x)=\varphi\left(\frac{x}{\lambda}\right).
\]
对于$u \in \mathcal{D}'(\mathbb{R}^n)$，我们定义分布$u_\lambda$如下：
\[
\langle u_\lambda, \varphi \rangle =\left\langle u, |\lambda|^{-n} \varphi_{\frac{1}{\lambda}} \right \rangle.
\]
如果对每个$\lambda>0$，下面的等式成立：
\[
u_\lambda \stackrel{\mathcal{D}'}{=} \lambda^{-d}u,
\]
我们就称$u$为次数是$d$的**齐次分布**，其中$d\in \mathbb{R}$。

- F1) 假设分布$u\in \mathcal{D}'(\mathbb{R}^n)$是由某个局部可积的函数$f$定义。
  证明，$u$是$d$次齐次分布当且仅当对几乎处处的$x$，我们有
  \[
  f(\lambda x)=\lambda^d f(x), \ \  \lambda>0.
  \]

- F2) 证明，
  $\displaystyle{\rm vp}\frac{1}{x}$和$\displaystyle{\rm pf}\, x_+^\alpha$（其中$\alpha<-1$
  且非整数）是$\mathcal{D}'(\mathbb{R})$上的齐次分布并确定它们的次数。

- F3) 证明，$\delta_0$是$\mathcal{D}'(\mathbb{R}^n)$上的齐次分布并确定其次数。

- F4) 假设$u\in \mathcal{D}'(\mathbb{R}^n)$上的$d$次齐次分布，证明，
  $\partial_{x_1}u\in \mathcal{D}'(\mathbb{R}^n)$是$d-1$次的齐次分布。

- F5) 任意给定$u_1,u_2,\cdots,u_{N}\in \mathcal{D}'(\mathbb{R}^n)$上$N$个齐次分布，
  如果它们的次数互不相同，证明，它们在$ \mathcal{D}'(\mathbb{R}^n)$中是$\mathbb{C}$-线性无关的。

- F6) 任意给定试验函数$\varphi \in \mathcal{D}(\mathbb{R}^n)$，
  任意给定正实数$\lambda$和$\lambda_0$，假设$\lambda\neq\lambda_0$。我们定义
  \[
  \psi_\lambda(x)=\frac{\varphi_{\frac{1}{\lambda}}(x)-\varphi_{\frac{1}{\lambda_0}}(x)}{\lambda-\lambda_0}
  \]
  证明，当 $\lambda\rightarrow \lambda_0$ 时，
  上述函数在 $\mathcal{D}(\mathbb{R}^n)$ 中有极限并计算该极限。

- F7)（齐次分布的Euler公式）任意给定$u\in \mathcal{D}'(\mathbb{R}^n)$，$d\in \mathbb{R}$。
  证明，$u$是$d$次齐次分布当且仅当
  \[
  \sum_{k=1}^n x_k \cdot \frac{\partial u}{\partial x_k}\stackrel{\mathcal{D}'}{=} d \cdot u.
  \]

- F8) 试找出$\mathcal{D}'(\mathbb{R}^1)$中所有次数为$0$和$1$的齐次分布。

::: -remark [寄语]
Je suis mathématicien. Les mathématiques ont rempli ma vie.

<align right>
—— Laurent Schwartz
</align>
:::
