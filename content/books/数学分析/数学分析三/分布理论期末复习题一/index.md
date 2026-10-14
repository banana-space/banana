---
title: 分布理论期末复习题一
notices:
  - name: 问题
    items:
      - 题目 C8) 中 $V(z)$ 的积分限与定义域似乎有误：按 $\int_\infty^{0}$ 定义，对 $z\in \mathbb{H}$ 有 $V=-U$，且 $x-i\varepsilon\notin \mathbb{H}$；似乎应为 $\int_{-\infty}^{0}$ 并对下半平面中的 $z$ 定义。
      - 题目 D 中有两个小题都编号为 D6)。
---

**题目A.**  $u(x)$是在$\mathbb{R}$上定义的以$1$为周期的函数。对于$x\in [0,1]$，我们有
\[
u(x)=e^{2\pi(x-\frac{1}{2})}+e^{-2\pi(x-\frac{1}{2})}
\]

A1) 证明，
    \[
    u(x)=\frac{e^\pi-e^{-\pi}}{\pi}\sum_{k=-\infty}^{+\infty} \frac{e^{2\pi i k x}}{1+k^2}
    \]

A2) 证明，作为$\mathbb{R}$上的分布，我们有
    \[
    u''-4\pi^2 u=-8\pi \sinh(\pi) \sum_{k\in \mathbb{Z}}\delta_k.
    \]

A3) 证明分布形式的Poisson求和公式：
    \[
    \sum_{k\in \mathbb{Z}}e^{2\pi i kx}=\sum_{k\in \mathbb{Z}}\delta_k.
    \]

**题目B.** 我们来构造微分算子
\[
u(x)\mapsto u''(x)-u(x)
\]
的基本解。

**第一部分：在$\mathcal{D}'(\mathbb{R})$中解$u''-u=\delta$**

B1) 证明，对任意的$a\in \mathbb{C}$，试给出方程
    \[
    u'-au=0
    \]
    的所有解，其中，$u\in \mathcal{D}'(\mathbb{R})$。

B2) 对$a\in \mathbb{C}$，我们定义分布
    \[
    u_a(x)=e^{ax}H(x),
    \]
    其中$H(x)$是Heaviside函数。试计算
    \[
    (\delta'-a\delta)*u_a,
    \]
    其中，$\delta=\delta_0$是Dirac分布。

B3) 在$\mathcal{D}'(\mathbb{R})$中解方程
    \[
    u'-au=\delta,
    \]
    其中$a\in \mathbb{C}$。

B4) 在$\mathcal{D}'(\mathbb{R})$中解方程
    \[
    u''-u=\delta.
    \]

B5) 在$\mathcal{S}'(\mathbb{R})$中解方程
    \[
    u''-u=\delta.
    \]

**第二部分：在$\mathcal{S}'(\mathbb{R})$中解$u''-u=\delta$**

B6) 证明，
    \[
    \int_{\mathbb{R}}\frac{e^{itx}}{x^2+1}dx=\pi e^{-|t|}.
    \]

B7) 利用上面的积分在$\mathcal{S}'(\mathbb{R})$中解方程
    \[
    u''-u=\delta.
    \]

B8) 在$\mathcal{D}'(\mathbb{R}_{>0})$中解方程
    \[
    u''-u=\delta.
    \]

::: remark*
我们可以把$\mathcal{S}'(\mathbb{R})$看作是在无穷远处增长有限制的分布，
这个问题很好地展示了边界条件对于方程的解的约束。
:::

**题目C.**  给定具有紧支集的分布$u\in \mathcal{E}'(\mathbb{R})$，
我们用$\widehat{u}$表示它的Fourier变换（作为缓增分布）。对任意的$z\in \mathbb{C}$，我们定义函数
\[
\mathcal{L}(u)(z):=\langle u, e^{-izx}\rangle.
\]

C1) 证明，$\mathcal{L}(u)(z)$是$\mathbb{C}$上的复解析函数。

C2) 证明，如果$\xi\in \mathbb{R}$，那么，
    \[
    \mathcal{L}(u)(\xi)=\widehat{u}(\xi).
    \]

C3) 证明，如果对任意的$k\geqslant 0$，我们有
    \[
    \langle u, x^k \rangle =0,
    \]
    那么，$u=0$。

C4) 如果$p$是分布$u$的阶，证明，存在常数$C$，使得对任意的$\xi \in \mathbb{R}$，我们都有
    \[
    \left|\widehat{u}(\xi)\right|\leqslant C(1+|\xi|)^p.
    \]

C5) 我们假设$z\in \mathbb{H}$，其中，$\mathbb{H}=\big\{z\in \mathbb{C}\big|{\rm Im}(z)>0\big\}$。
    证明，
    \[
    U(z):=\int_{0}^\infty \widehat{u}(\xi)e^{i\xi z}d\xi
    \]
    是良好定义的并且是$\mathbb{H}$上的复解析函数。

C6) 证明，存在常数$C>0$，$\varepsilon>0$和正整数$N$，使得当$0<{\rm Im}(z)<\varepsilon$时，我们有
    \[
    \left|U(z)\right|\leqslant C\cdot {\rm Im}(z)^{-N}.
    \]

C7) 对任意的$\varepsilon>0$，我们定义$\mathbb{R}$上的分布：
    \[
    u_\varepsilon(x)=U(x+i\varepsilon).
    \]
    证明，在$\mathcal{D}'(\mathbb{R})$中下面的极限存在：
    \[
    \lim_{\varepsilon\rightarrow 0^+} u_\varepsilon.
    \]

C8) 对于$z\in \mathbb{H}$，我们定义
    \[
    V(z):=\int_\infty^{0} \widehat{u}(\xi)e^{i\xi z}d\xi
    \]
    并令
    \[
    v_\varepsilon(x)=V(x-i\varepsilon).
    \]
    证明，在$\mathcal{D}'(\mathbb{R})$中，我们有
    \[
    \frac{1}{2\pi}\lim_{\varepsilon\rightarrow 0^+} (u_\varepsilon+v_\varepsilon)=u.
    \]

**题目D.**

对任意的$\varphi(x,y) \in \mathcal{D}(\mathbb{R}^2)$，我们定义如下的线性形式：
\[
\langle u,\varphi\rangle =\int_{0}^\infty \varphi(t,2t)dt.
\]

D1) 证明，$u\in \mathcal{D}'(\mathbb{R}^2)$并且确定它的阶和支集。

D2) $u$是否落在自然映射
    \[
    \iota: L^1_{\rm loc}(\mathbb{R}^2)\rightarrow \mathcal{D}'(\mathbb{R}^2)
    \]
    的像里？

D3) 在分布的意义下计算
    \[
    \frac{\partial u}{\partial x}+2\frac{\partial u}{\partial y}.
    \]

D4) 证明，$u\in \mathcal{S}'(\mathbb{R}^2)$。

D5) $\widehat{u}(\xi)$是否落在自然映射
    \[
    \iota: L^1_{\rm loc}(\mathbb{R}^2)\rightarrow \mathcal{D}'(\mathbb{R}^2)
    \]
    的像里？

D6) 给定$R>0$，证明，如下的线性形式
    \[
    \langle u_R,\varphi\rangle =\int_{0}^R \varphi(t,2t)dt
    \]
    定义了一个缓增的分布并且在缓增分布的意义下
    \[
    \lim_{R\rightarrow +\infty} u_R \stackrel{\mathcal{S}'(\mathbb{R}^2)}{=}u.
    \]

D6) 计算Fourier变换$\widehat{u_R}(\xi)$
    （提示：考虑算子$\dfrac{\partial }{\partial x}+2\dfrac{\partial }{\partial y}$）

D7) 证明，对任意的$s\in \mathbb{R}$，$u\notin H^s(\mathbb{R}^2)$。

D8) 给定$R>0$。试找出所有的$s$，使得$u_R \in H^s(\mathbb{R}^2)$。
