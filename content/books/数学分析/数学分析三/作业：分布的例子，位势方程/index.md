---
title: 作业：分布的例子，位势方程
---

**习题A.（课堂细节的补充）**
我们总假设$\Omega\subset \mathbb{R}^n$是非空的开集。

A0) 假设$K\subset \Omega$是紧集，那么，存在$\varphi \in C_0^\infty(\Omega)$和开集$V$，使得
    \[
    K\subset V \subset U; \ \varphi\big|_{V}\equiv 1.
    \]
    这是课上用到的一个技术性引理。如果你觉得不安心的话，请证明它。

A1) 证明如下两个常用的收敛定理：

    - 假设$\{f_p\}_{p\geqslant 1}$是$\Omega$上的一列局部可积的函数，$f\in L^1_{\rm loc}(\Omega)$。
      如果对任意的紧集$K\subset \Omega$，我们有
      \[
      \lim_{p\rightarrow \infty}f_p\big|_K \stackrel{L^1(K)}{=}f\big|_K,
      \]
      那么，作为分布，我们有
      \[
      \lim_{p\rightarrow \infty }f_p \stackrel{\mathcal{D}'}{=}f.
      \]

    - 假设$\{u_p\}_{p\geqslant 1}$是$\Omega$上分布的序列，$u\in \mathcal{D}'(\Omega)$。如果
      \[
      \lim_{p\rightarrow \infty }u_p \stackrel{\mathcal{D}'}{=}u.
      \]
      那么，对任意的多重指标$\alpha$，在分布的意义下，我们有
      \[
      \lim_{p\rightarrow \infty}\partial^\alpha u_p \stackrel{\mathcal{D}'}{=}\partial^\alpha u.
      \]

A2) 证明，$\mathcal{D}'(\Omega)$和$\mathcal{E}'(\mathbb{R}^n)$是线性空间。
    如果你认为这是显然的，可以跳过它的证明。

A3) 证明分布的支撑集所满足的性质，其中$u$、$u_1$、$u_2$都是$\Omega$上的分布。

    - 两个分布的和的支集：
      \[
      {\rm supp}(u_1+u_2)\subset {\rm supp}(u_1)\cup {\rm supp}(u_2).
      \]

    - 对任意的多重指标$\alpha$，我们有
      \[
      {\rm supp}\left(\partial^\alpha u\right) \subset {\rm supp}(u).
      \]

    - 对任意的$f\in C^\infty(\mathbb{R}^n)$，我们有
      \[
      {\rm supp}(f\cdot u)\subset {\rm supp}(u) \cap {\rm supp}(f).
      \]

A4) 证明如下几个精神上类似的命题：分布是传统意义上函数的推广。

    - 假设$\Phi:\Omega_1\rightarrow \Omega_2$是$\mathbb{R}^n$上两个开集之间的微分同胚。
      证明，对任意的$u \in L^1_{\rm loc}(\Omega_2)$，
      如果我们用$\Phi^*u$表示$u$在分布的意义下被$\Phi$所拉回的像，那么，在分布的意义下，我们有
      \[
      \Phi^*u \stackrel{\mathcal{D}'}{=} u(\Phi(x)),
      \]
      其中，我们把复合函数$u(\Phi(x))$（仍然局部可积）看作是分布。

    - 假设$u\in C^1(\Omega)$。证明，$u$作为分布的导数和它通常意义下导数（作为分布）是一致的。

    - 假设$u\in L^1_{\rm loc}(\Omega)$，$f\in \mathcal{D}'(\mathbb{R}^n)$。
      证明，
      在分布意义下的乘积$f\cdot u$（先把$u$视作是分布）等于现在传统意义下得到$f\cdot u$
      然后再把这个乘积函数看作是分布。

A5) 对于任意的$f\in C^\infty(\Omega)$和$u\in \mathcal{D}'(\Omega)$，对任意的$k\leqslant n$，证明，
    \[
    \partial_k(f\cdot u) \stackrel{\mathcal{D}'}{=} \partial_k f \cdot u+ f\cdot \partial_k u.
    \]

A6) （重要的计算，参考第五次课第一个定理的证明）
    对任意的$\varphi \in \mathcal{D}(\mathbb{R}^n)$，对任意的$x_0,a \in \mathbb{R}^n$，
    $\varepsilon \in (0,1)$，$|a|=1$，根据Taylor公式，我们有
    \[
    \varphi(x_0-y+\varepsilon a)-\varphi(x_0-y)=\varepsilon \sum_{j=1}^n a_j\partial_j\varphi(x_0-y)+\varepsilon^2 r(y,\varepsilon,a),
    \]
    其中，
    \[
    \displaystyle r(y,\varepsilon,a)=2\sum_{|\alpha|= 2} \frac{a^\alpha}{\alpha!} \int_{0}^1(1-t)\partial^{\alpha}\varphi(x_0-y+t\varepsilon a)dt.
    \]
    给定分布$u\in \mathcal{D}'(\mathbb{R}^n)$，通过对上面的式子作用，我们得到
    \[
    u*\varphi(x_0+\varepsilon a)-u*\varphi(x_0)-\varepsilon \sum_{j=1}^n a_ju*\partial_j\varphi(x_0)=\varepsilon^2\langle u, r(\cdot,\varepsilon,a)\rangle.
    \]
    证明，存在不依赖于$\varepsilon$的常数$C$，使得
    \[
    \big|\langle u, r(\cdot,\varepsilon,a)\rangle\big| \leqslant C.
    \]

A7) （重要）我们选取最心爱的截断函数$\chi$。
    证明，当$\varepsilon\rightarrow 0$时，对任意的试验函数$\varphi \in \mathcal{D}(\mathbb{R}^n)$，
    我们都有
    \[
    \chi_\varepsilon*  \varphi \stackrel{\mathcal{D}}{\longrightarrow}\varphi.
    \]

A8) 假设$f$是$\mathbb{R}^n$上的光滑函数，$c\in \mathcal{E}'(\mathbb{R}^n)$，证明，函数
    \[
    x\mapsto \langle c,f(x-\cdot)\rangle
    \]
    是光滑函数，其中，上面的配对是一个有紧支集的分布与一个光滑函数的配对。

A9) （重要）证明，$\mathbb{R}_t\times \mathbb{R}_x^n$上定义的函数
    \[
    E(t,x)=\frac{\mathbf{1}_{t>0}}{(4\pi t)^{\frac{n}{2}}}e^{-\frac{|x|^2}{4t}},
    \]
    在$(t,x)=(0,0)$之外是光滑的并且满足
    \[
    (\partial_t -\triangle)(E(t,x))=0, \ \ \text{对任意的}~(t,x)\neq (0,0).
    \]

A10) 利用卷积的连续性，重新证明（概念上更清晰简洁）关于分布的链式求导法则：

     假设$\Phi:\Omega_1\rightarrow \Omega_2$是$\mathbb{R}^n$上两个开集之间的微分同胚。
     证明，对任意的$u \in \mathcal{D}'(\Omega_2)$，
     \[
     \partial_j (\Phi^*u )= \sum_{k=1}^n \partial_j\Phi_k \cdot \Phi^*\left(\partial_k u\right),
     \]
     其中$\Phi_k$是$\Phi$的第$k$个分量。

A11) 证明如下几个关于复解析函数的命题：

     - 计算下列的等式：
       \[
       \overline{\partial}(\overline{z})=1; \ \  \overline{\partial}\left(\frac{1}{z}\right)=0, \ \ z\neq 0.
       \]

     - 假设$F(z)$是单位圆盘上的复解析函数，那么，对任意的$0<r<1$，我们都有
       \[
       \int_{|z|=r} F(z)dz =0.
       \]

     - 证明，对任意的$z_0\in \mathbb{C}$和$r>0$，我们都有
       \[
       \displaystyle \frac{1}{2\pi i}\int_{|z-z_0|=r}\frac{1}{z-z_0}dz=1.
       \]

**习题B（分布的计算）。**

B1) 证明，当$\varepsilon\rightarrow 0+$时，
    如下分布的极限（在$\mathcal{D}'(\mathbb{R})$中收敛）定义了$\mathbb{R}$上的分布：
    \[
    \lim_{\varepsilon \rightarrow 0 \atop \\ \varepsilon>0} \frac{1}{x+i\varepsilon}.
    \]
    我们把这个分布记作
    \[
    \frac{1}{x+i0} :=\lim_{\varepsilon \rightarrow 0 \atop \\ \varepsilon>0}\frac{1}{x+i\varepsilon}.
    \]

B2) 试找一个$u_\varepsilon\in \mathcal{D}'(\mathbb{R})$，使得
    \[
    u'_\varepsilon \stackrel{\mathcal{D}'}{=}\frac{1}{x+i\varepsilon} .
    \]
    （你需要小心定义$\log$函数）

B3) 证明，分布$\dfrac{1}{x+i0}$有如下的表达式：
    \[
    \frac{1}{x+i0} \stackrel{\mathcal{D}'}{=} {\rm vp}\frac{1}{x}-i\pi\delta_0.
    \]

B4) 证明，当$\varepsilon\rightarrow 0+$时，
    如下分布的极限（在$\mathcal{D}'(\mathbb{R})$中收敛）定义了$\mathbb{R}$上的分布：
    \[
    \lim_{\varepsilon \rightarrow 0 \atop \\ \varepsilon>0} \frac{1}{x-i\varepsilon}.
    \]
    我们把这个分布记作
    \[
    \frac{1}{x-i0} :=\lim_{\varepsilon \rightarrow 0 \atop \\ \varepsilon>0}\frac{1}{x-i\varepsilon}.
    \]

B5) 证明，分布$\dfrac{1}{x-i0}$有如下的表达式：
    \[
    \frac{1}{x-i0} \stackrel{\mathcal{D}'}{=} {\rm vp}\frac{1}{x}+i\pi\delta_0.
    \]

B6) 证明，在分布的意义下，我们有
    \[
    \lim_{\varepsilon\rightarrow 0}\frac{\varepsilon}{\pi(x^2+\varepsilon^2)}\stackrel{\mathcal{D}'(\mathbb{R})}{=} \delta_0.
    \]

B7) 当$n\rightarrow \infty$时，
    试计算下面分布序列$\{u_n\}_{n\geqslant 1}$在$\mathcal{D}'(\mathbb{R})$中的极限：

    - $u_n(x)=\sin(nx)$；

    - $u_n(x)=x^{-1}\sin(nx)$；

    - $u_n(x)=n\sin(nx)\mathbf{1}_{x\geqslant 0}$。

**习题C（Laplace算子、位势方程与分布）**（这是分布理论乃至微积分中最重要的习题）

假设$n\geqslant 2$，我们在$\mathbb{R}^n$上考虑问题。令
\[
r=\sqrt{x_1^2+\cdots+x_n^2}
\]
为标准的半径函数。我们用$\mathbf{S}^{n-1}$表示$\mathbb{R}^n$中的单位球面，即
\[
\mathbf{S}^{n-1}=\{x\in \mathbb{R}^n \big| r(x)=1\}.
\]
我们用$d\sigma$表示$\mathbf{S}^{n-1}$上的曲面测度并用$\vartheta =\frac{x}{|x|}$
表示单位球面上的一个点。我们回忆Laplace算子的定义：
\[
\triangle = \sum_{i=1}^n{\partial^2_{x_i}}.
\]

C1) 证明，对任意$\varphi(x)\in \mathcal{D}(\mathbb{R}^n)$，我们有
    \[
    \int_{\mathbb{R}^n}\varphi(x)dx =\int_{0}^{+\infty}r^{n-1}\left(\int_{\mathbf{S}^{n-1}}\varphi(r \cdot \vartheta)d\sigma(\vartheta)\right)dr.
    \]

C2) 当$n=2$时，我们令
    \[
    E=\frac{1}{2\pi}\log(r).
    \]
    对任意的$\varepsilon>0$，定义
    \[
    f_\varepsilon(x)=\begin{cases}
    \log|x|,\ \ &x\geqslant \varepsilon;\\
    \log \varepsilon ,\ \ &|x|< \varepsilon.
    \end{cases}
    \]
    试利用$f_\varepsilon$证明：
    \[
    \triangle E \stackrel{\mathcal{D}'}=\delta_0
    \]

C3) 当$n=2$时，令
    \[
    g_\varepsilon(x)=\begin{cases}
    \log|x|,\ \ &x\geqslant \varepsilon;\\
    a_\varepsilon |x|^2+b_\varepsilon ,\ \ &|x|< \varepsilon.
    \end{cases}
    \]
    证明，存在常数$a_\varepsilon$和$b_\varepsilon$，
    使得函数$g_\varepsilon$在$\mathbb{R}^2$上连续可微。

C4) 当$n=2$时，试利用函数$g_\varepsilon$证明：
    \[
    \triangle E \stackrel{\mathcal{D}'}=\delta_0
    \]

C5) 当$n\geqslant 3$时，我们用$\big|\mathbf{S}^{n-1}\big|$表示$\mathbf{S}^{n-1}$的测度。令
    \[
    E =\frac{|x|^{2-n}}{(2-n)\big|\mathbf{S}^{n-1}\big|}.
    \]
    证明，$E\in L_{\rm loc}^1(\mathbb{R}^n)$并且作为分布，我们有
    \[
    \partial_j E =\frac{x_j}{\big|\mathbf{S}^{n-1}\big||x|^n} \in  L_{\rm loc}^1(\mathbb{R}^n).
    \]

C6) （接C5)）证明，
    \[
    \triangle E \stackrel{\mathcal{D}'}=\delta_0
    \]

C7) （作为常识）试计算（或者查出）$\big|\mathbf{S}^{n-1}\big|$的数值。

在后面的习题中，我们假设$n=3$（这些结论对$n\geqslant 3$稍作明显的改动也成立，
但是我们更关心具有物理意义的情形）。此时，$\triangle$的一个基本解可以写成：
\[
E(x)=-\frac{1}{4\pi |x|} \in L^1_{\rm loc}(\mathbb{R}^3),
\]

C8) 对任意的$u\in \mathcal{D}'(\mathbb{R}^3)$和$f\in \mathcal{E}'(\mathbb{R}^3)$，如果它们满足方程
    \[
    \triangle u =f,
    \]
    证明，$u$在${\rm supp}(f)$之外是光滑的，即$u \in C^\infty\big(\mathbb{R}^3-{\rm supp}(f)\big)$。

C9) 将C8)中的假设放松为$f\in \mathcal{D}'(\mathbb{R}^3)$。
    证明同样的结论：$u \in C^\infty\big(\mathbb{R}^3-{\rm supp}(f)\big)$。

C10) 证明Laplace算子的椭圆正则性定理：假设$\Omega \subset \mathbb{R}^3$是开集，
     $u \in  \mathcal{D}'(\Omega)$，满足
     \[
     \triangle u =f,
     \]
     其中$f\in C^\infty(\Omega)$是光滑函数，那么，$u \in C^\infty(\Omega)$。
     （通常要得到$u$的正则性需要知道$u$的各个方向的导数，
     但是椭圆正则性定理说只要知道一个特殊的二阶导数即可！）

C11) 假定$f\in \mathcal{E}'(\mathbb{R}^3)$。
     证明，当$|x|\rightarrow \infty$时，存在$C_1>0$（依赖于分布$f$），使得
     \[
     |E*f(x)|\leqslant \frac{C_1}{|x|}.
     \]

C12) 假定$f\in \mathcal{E}'(\mathbb{R}^3)$。证明，$u=E*f$是下面的位势方程的解：
     \[
     \triangle u =f.
     \]
     并且存在常数$C_2>0$，使得当$|x|\rightarrow \infty$时，我们有
     \[
     \left|u(x)+\frac{\langle f,1 \rangle}{4\pi|x|}\right|\leqslant \frac{C_2}{|x|^2}.
     \]
     根据不同的物理情景，$\langle f,1 \rangle$表示的是$u$的*总质量*或者*总电量*。

C13) 假定$u\in C^\infty(\mathbb{R}^3;\mathbb{R})$是实值函数。我们定义符号函数${\rm sign}(u)$为
     \[
     {\rm sign}(u)(x)=\begin{cases}&1, \ \ u(x)>0;\\
     &0, \ \ u(x)=0;\\
     &-1,\ u(x)< 0.
     \end{cases}
     \]
     证明，在分布的意义下，我们有
     \[
     \triangle  |u| \stackrel{\mathcal{D}'}{\geqslant} \triangle u\cdot {\rm sign}(u),
     \]
     即对任意的（实值）非负的$\varphi\in  \mathcal{D}(\mathbb{R}^3)$，我们都有
     \[
     \langle \triangle |u|,\varphi \rangle \geqslant \langle \triangle u\cdot {\rm sign}(u),\varphi\rangle,
     \]
     （提示：先在分布的意义下用$\sqrt{u^2+\varepsilon^2}$来逼近$u$）

::: -remark [寄语]
The topology in $C^\infty(X)$ is the inductive limit of the topology in $C_0^\infty(K)$
when the compact set $K$ increases to $X$,
so it is a LF topology[^1].
We have avoided this terminology in order not to encourage the once current misconception that familiarity with LF space is essential for the understanding of distribution theory.

<align right>
—— Lars Hörmander
</align>
:::

[^1]: LF指的是limit of Fréchet，这是一列Fréchet空间的极限。
