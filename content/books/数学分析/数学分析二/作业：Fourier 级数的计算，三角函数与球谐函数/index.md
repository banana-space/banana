---
title: 作业：Fourier 级数的计算，三角函数与球谐函数
notices:
  - name: 问题
    items:
      - S18) 中的张成似乎应包括 $\ell=0$（常函数与所有 $\ell\geqslant 1$ 的 $\mathbf{H}^{\ell}$ 正交），与其后注记中从 $\ell=0$ 开始的直和一致。
      - S18) 之后的注记中，$\mathbf{H}^{\ell}$ 的维数似乎应为 $2\ell+1$（见 S8)），而不是 $\ell(\ell+1)$。
---

## Fourier级数的计算

F1) 给定$f\in L^1(\mathbf{T})$。
    证明，$f$是实值函数（几乎处处）当且仅当对任意的$k\in \mathbb{Z}$，我们有
    \[
    \overline{\widehat{f}(k)}=\widehat{f}(-k).
    \]

F2) $f$是$\mathbb{R}$上以$2\pi$为周期的奇函数，它在$[0,\pi]$上的定义为
    \[
    f(x)=x(\pi-x).
    \]
    证明，对任意的$x\in \mathbb{R}$，我们都有
    \[
    f(x)=\frac{8}{\pi}\sum_{k=1}^\infty \frac{\sin\big((2k-1)x\big)}{(2k-1)^3}.
    \]

F3) $f$是$\mathbb{R}$上以$2\pi$为周期的函数，它在$[-\pi,\pi]$上的定义为
    \[
    f(x)=|x|.
    \]
    试计算$f$的Fourier系数。通过考虑$f(0)$证明：
    \[
    \sum_{k=1}^\infty \frac{1}{k^2}=\frac{1}{6}\pi^2.
    \]
    进一步证明，
    \[
    \sum_{k=1}^\infty \frac{1}{k^4}=\frac{1}{90}\pi^4.
    \]

F4) $\alpha\in \mathbb{R}-\mathbb{Z}$，$f$是$\mathbb{R}$上以$2\pi$为周期的函数，
    它在$[0,2\pi]$上的定义为
    \[
    f(x)=\dfrac{\pi}{\sin(\pi \alpha)}e^{i(\pi-x)\alpha}.
    \]
    通过计算它的Fourier系数，证明，
    \[
    \sum_{k\in \mathbb{Z}} \frac{1}{(k+\alpha)^2}=\frac{\pi^2}{\sin(\pi \alpha)^2}.
    \]

F5) 利用F2)中的函数，证明
    \[
    \sum_{k=1}^\infty \frac{1}{k^6}=\frac{1}{945}\pi^6.
    \]

F6) 证明，连续函数的Fourier系数可以衰减得任意慢，
    即任给正数的序列$\{b_k\}_{k\geqslant 0}$，$b_k\rightarrow 0$，
    总存在连续函数$f\in C(\mathbf{T})$，使得存在无限多个$k\geqslant 0$，
    $|\widehat{f}(k)|\geqslant b_k$。

## 三角函数与球谐函数

我们用$\mathbf{S}^1=\mathbf{T}$表示$\mathbb{R}^2$中的单位球面
\[
\mathbf{S}^1=\{(x,y)\in \mathbb{R}^2 \mid x^2+y^2=1\}.
\]
我们可以用极坐标系$(r=1,\theta)$来表示$\mathbf{T}$上的点，其中$\theta \in [0,2\pi]$。

s1) 证明，在$\theta$的参数表示下，$\mathbf{T}$上的曲面测度为$\sigma=d\theta$。
    我们用上述测度来定义$L^2(\mathbf{T})$（和课堂上有区别）：
    对于$f_1,f_2\in L^2(\mathbf{T})$，它们的内积是
    \[
    (f_1,f_2)=\int_{\mathbf{T}}f_1(\theta)\overline{f_2(\theta)}~d\theta.
    \]

s2) 对于$\mathbb{R}^2$上的Laplace算子
    $\triangle=\displaystyle\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}$，
    证明（上学期已经证明），
    \[
    \triangle =\frac{\partial^2}{\partial r^2} +\frac{1}{r}\frac{\partial}{\partial r}+\frac{1}{r^2}\triangle_{\mathbf{T}},
    \]
    其中$\displaystyle \triangle_{\mathbf{T}}=\frac{\partial^2}{\partial \theta^2}$。

s3) 证明，$\triangle_{\mathbf{T}}$对于上述的$L^2$内积具有自伴性：
    对任意的$f_1,f_2 \in C^\infty(\mathbf{T})$，我们有
    \[
    (\triangle_{\mathbf{T}}f_1, f_2)=(f_1, \triangle_{\mathbf{T}}f_2).
    \]
    （自伴性可以类比成线性代数中的对称矩阵）

s4) 任给$g\in \mathbf{SO}(2)$（即行列式为$1$的$2\times 2$正交矩阵）和$\mathbb{R}^2$上的函数$f$，
    我们定义
    \[
    g\bullet f(x)= f(g^{-1}x),
    \]
    其中$g^{-1}x$是$2\times 2$的矩阵在$2$维的向量上的乘法。
    证明，对任意的$f_1,f_2\in L^2(\mathbf{T})$和任意的$g\in \mathbf{SO}(2)$，我们有
    \[
    (g\bullet f_1,g\bullet f_2)=(f_1,f_2).
    \]

s5) 我们将$\mathbb{R}^2$中满足$\triangle f=0$的$C^2$函数称作是**调和函数**。
    证明，如果$f$是调和函数，那么对任意的$g\in \mathbf{SO}(2)$，$g\bullet f$也是调和函数。

s6) 我们用$\mathbf{P}^{(\ell)}$表示复系数的次数为$\ell$的关于$x$和$y$的二元齐次多项式，
    这是线性空间，其中的元素形如
    \[
    \displaystyle \sum_{\ell_1+\ell_1= \ell \atop 0\leqslant\ell_1,\ell_2 \leqslant \ell}c_{\ell_1,\ell_2}x^{\ell_1}y^{\ell_2},  \ \ c_{\ell_1,\ell_2}\in \mathbb{C}.
    \]
    证明，
    $\operatorname{dim}_\mathbb{C}\,\mathbf{P}^{(\ell)}= \ell+1$并且对任意的
    $P \in \mathbf{P}^{(\ell)}$和任意的$g\in \mathbf{SO}(2)$，$g\bullet P \in \mathbf{P}^{(\ell)}$。

s7) 证明，对于$\ell\geqslant 2$，Laplace算子给出的映射
    \[
    \triangle\colon \mathbf{P}^{(\ell)}\rightarrow \mathbf{P}^{(\ell-2)}
    \]
    是线性映射并且是满射。

s8) 我们定义$\mathbb{R}^2$上$\ell$-次的调和多项式为：
    \[
    \mathbf{H}^{(\ell)}=\{P\in \mathbf{P}^{(\ell)}\mid\triangle P=0\}.
    \]
    证明，如果$|\ell|\geqslant 1$，
    那么$\operatorname{dim}_\mathbb{C}\,\mathbf{H}^{(\ell)}=2$并且$\mathbf{H}^{(\ell)}$在
    $\mathbf{SO}(2)$的作用下不变：对任意的$P \in \mathbf{H}^{(\ell)}$和任意的$g\in \mathbf{SO}(2)$，
    $g\bullet P \in \mathbf{H}^{(\ell)}$。

::: remark*
上述证明了$ \mathbf{H}^{(\ell)}$是$\mathbf{SO}(2)$的一个$2$维的表示。
:::

s9) 证明，对任意的$\ell$，如果$P\in \mathbf{H}^{(\ell)}$，那么$p=P\big|_{\mathbf{T}}$满足
    \[
    -\triangle p=\ell^2 p.
    \]

s10) 证明，$\mathbf{H}^{(\ell)}$可以由$e_\ell=(x+iy)^\ell$和$e_{-\ell}=(x-iy)^\ell$生成。

s11) 证明，
     $\big\{\dfrac{1}{\sqrt{2\pi}}e_k\bigm|k\in \mathbb{Z}\big\}$是$L^2(\mathbf{T})$
     的一个Hilbert基。

::: remark*
上述表明，
$L^2(\mathbf{T})$的Hilbert基$\big\{e^{ikx}\bigm|k\in \mathbb{Z}\big\}$可以由$\mathbb{R}^2$
上的齐次调和多项式限制得到。我们下面要把这个结论推广到$\mathbf{S}^2$。
:::

我们用 $\mathbf{S}^2$ 表示 $\mathbb{R}^3$ 中的单位球面
\[
\mathbf{S}^2=\{(x_1,x_2,x_3)\in \mathbb{R}^3\mid (x_1)^2+(x_2)^2+(x_3)^2=1\}.
\]
我们可以用球面坐标系 $(r=1,\vartheta,\varphi)$ 来表示 $\mathbf{S}^2$ 上的点，
其中 $(\vartheta, \varphi) \in [0,\pi]\times [0,2\pi]$。

S1) 证明，在 $(\vartheta,\varphi)$ 的参数表示下，
    $\mathbf{S}^2$ 上的曲面测度为 $\sigma=\sin\vartheta\,d\vartheta d\varphi$。
    我们用上述测度来定义 $L^2(\mathbf{S}^2)$：对于 $f_1,f_2\in L^2(\mathbf{S}^2)$，它们的内积是
    \[
    (f_1,f_2)=\int_{\mathbf{S}^2}f_1(\vartheta,\varphi)\overline{f_2(\vartheta,\varphi)}~{\sin\vartheta\,d\vartheta d\varphi}.
    \]

S2) 对于 $\mathbb{R}^3$ 上的Laplace算子
    $\triangle=\displaystyle \sum_{i=1}^3 \frac{\partial^2}{\partial x_i^2}$，
    证明（之前的作业已经证明），
    \[
    \triangle =\frac{\partial^2}{\partial r^2} +\frac{2}{r}\frac{\partial}{\partial r}+\frac{1}{r^2}\triangle_{\mathbf{S}^2},
    \]
    其中
    $\displaystyle \triangle_{\mathbf{S}^2}=\frac{\partial^2}{\partial \vartheta^2}+\frac{\cos\vartheta}{\sin\vartheta} \frac{\partial }{\partial \vartheta}+\frac{1}{(\sin \vartheta)^2}\frac{\partial^2}{\partial \varphi^2}$。

S3) 证明，$\triangle_{\mathbf{S}^2}$ 对于上述的 $L^2$ 内积具有自伴性：
    对任意的 $f_1,f_2 \in C^\infty(\mathbf{S}^2)$，我们有
    \[
    (\triangle_{\mathbf{S}^2}f_1, f_2)=(f_1, \triangle_{\mathbf{S}^2}f_2).
    \]

S4) 任给 $g\in \mathbf{SO}(3)$（即行列式为 $1$ 的 $3\times 3$ 正交矩阵）和 $\mathbb{R}^3$ 上的函数
    $f$，我们定义
    \[
    g\bullet f(x)= f(g^{-1}x),
    \]
    其中 $g^{-1}x$ 是 $3\times 3$ 的矩阵在 $3$ 维的向量上的乘法。
    证明，对任意的 $f_1,f_2\in L^2(\mathbf{S}^2)$ 和任意的 $g\in \mathbf{SO}(3)$，我们有
    \[
    (g\bullet f_1,g\bullet f_2)=(f_1,f_2).
    \]

S5) 我们将 $\mathbb{R}^3$ 中满足 $\triangle f=0$ 的 $C^2$ 函数称作是**调和函数**。
    证明，如果 $f$ 是调和函数，那么对任意的 $g\in \mathbf{SO}(3)$，$g\bullet f$ 也是调和函数。

S6) 我们用 $\mathbf{P}^{(\ell)}$ 表示复系数的次数为 $\ell$ 的关于 $x_1,x_2,x_3$ 的齐次多项式，
    这显然是一个线性空间，其中的元素形如
    \[
    \displaystyle \sum_{\ell_1+\ell_1+\ell_3 = \ell \atop 0\leqslant\ell_1,\ell_2,\ell_3\leqslant \ell}c_{\ell_1,\ell_2,\ell_3}(x_1)^{\ell_1}(x_2)^{\ell_2}(x_3)^{\ell_3},  \ \ c_{\ell_1,\ell_2,\ell_3}\in \mathbb{C}.
    \]
    证明，
    $\operatorname{dim}_\mathbb{C}\,\mathbf{P}^{(\ell)}=\dfrac{1}{2}(\ell+1)(\ell+2)$ 并且对任意的
    $P \in \mathbf{P}^{(\ell)}$ 和任意的 $g\in \mathbf{SO}(3)$，
    $g\bullet P \in \mathbf{P}^{(\ell)}$。

- S7)\* 证明，对于 $\ell\geqslant 2$，由Laplace算子给出的映射
  \[
  \triangle\colon  \mathbf{P}^{(\ell)}\rightarrow \mathbf{P}^{(\ell-2)}
  \]
  是线性映射并且是满射。

S8) 我们定义调和多项式的空间：
    \[
    \mathbf{H}^{(\ell)}=\{P\in \mathbf{P}^{(\ell)}\mid \triangle P=0\}.
    \]
    证明，$\operatorname{dim}_\mathbb{C}\,\mathbf{H}^{(\ell)}=2\ell+1$
    并且 $\mathbf{H}^{(\ell)}$ 在 $\mathbf{SO}(3)$ 的作用下不变：
    对任意的 $P \in \mathbf{H}^{(\ell)}$ 和任意的 $g\in \mathbf{SO}(3)$，
    $g\bullet P \in \mathbf{H}^{(\ell)}$。

::: remark*
上述实际上证明了 $ \mathbf{H}^{(\ell)}$ 是 $\mathbf{SO}(3)$ 的一个 $2\ell+1$ 维的表示，
利用一点点关于 $\mathbf{SU}(2)$ 和 $\mathbf{SO}(3)$ 的表示论（这是一种关于群作用的线性代数），
我们容易证明 $ \mathbf{H}^{(\ell)}$ 是 $\mathbf{SO}(3)$ 的不可约表示并且当 $\ell$ 遍历
$0,1,2,\cdots$ 时，我们得到了 $\mathbf{SO}(3)$ 的所有不可约表示。
:::

S9) 对任意的 $P\in \mathbf{P}^{(\ell)}$ 和非负整数 $k$，证明，
    \[
    \triangle (r^{2k} P)=2k(2\ell-2k+1)r^{2k-2}P+r^{2k}\triangle P.
    \]
    （提示：利用齐次函数的Euler等式）

- S10)\* 证明，如果 $P\in \mathbf{P}^{(\ell)}$ 并且 $r^2P\in \mathbf{H}^{(\ell+2)}$，那么 $P=0$。
  （提示：考虑 $k_0$ 是使得 $r^{2k_0}$ 整除 $P$ 的最大整数）

S11) 证明，$\mathbf{P}^{(\ell)}=\mathbf{H}^{(\ell)}\oplus r^2 \mathbf{P}^{(\ell-2)}$，
     $\mathbf{P}^{(\ell)}=\mathbf{H}^{(\ell)}\oplus r^2 \mathbf{H}^{(\ell-2)}\oplus  r^4 \mathbf{H}^{(\ell-4)}\oplus \cdots$。

S12) 令 $\mathbf{H}^{\ell}=\left\{P\big|_{\mathbf{S}^2}\bigm| P\in \mathbf{H}^{(\ell)}\right\}$，
     即齐次调和多项式在球面上的限制，我们将这些函数称作是**球谐函数**。证明，在内积
     \[
     \displaystyle(f_1,f_2)=\int_0^\pi\int_{0}^{2\pi}f_1(\vartheta,\varphi)\overline{f_2(\vartheta,\varphi)}~\sin\vartheta~d\vartheta d\varphi
     \]
     下，$\mathbf{H}^{\ell}$ 是有限维的Hermite内积空间，
     这个内积是 $\mathbf{SO}(3)$ 不变的（即对任意的 $g\in \mathbf{SO}(3)$，
     任意的 $f_1,f_2\in \mathbf{H}^{\ell}$，
     $(g\bullet f_1,g\bullet f_2)=(f_1,f_2)$）并且作为线性空间，
     我们有同构
     \[
     \mathbf{P}^{\ell}=\mathbf{H}^{\ell}\oplus  \mathbf{H}^{\ell-2}\oplus  \mathbf{H}^{\ell-4}\oplus \cdots,
     \]
     其中 $\mathbf{P}^{\ell}=\Bigl\{P\big|_{\mathbf{S}^2}\Bigm| P\in \mathbf{P}^{(\ell)}\Bigr\}$。

S13) 我们用 ${\rm Res}\colon  \mathbf{P}^{(\ell)}\rightarrow \mathbf{P}^{\ell}$
     代表到球面的限制映射，
     用 ${\rm Ext}\colon  \mathbf{P}^{\ell}\rightarrow \mathbf{P}^{(\ell)}$ 表示齐次扩张映射，其中
     \[
     \bigl({\rm Ext}(f)\bigr)(r,\vartheta,\varphi)= r^\ell f(\vartheta,\varphi),
     \]
     这两个映射互为逆映射。令
     \[
     \begin{aligned}
     X_1&=x_3\frac{\partial}{\partial x_2}-x_2\frac{\partial}{\partial x_3}, \\
     X_2&=x_1\frac{\partial}{\partial x_3}-x_3\frac{\partial}{\partial x_1}, \\
     X_3&=x_2\frac{\partial}{\partial x_1}-x_1\frac{\partial}{\partial x_2},
     \end{aligned}
     \]
     为 $\mathbb{R}^3$ 上的三个向量场（它们落在 $\mathbf{SO}(3)$ 的Lie代数中），
     对于 $P\in \mathbf{H}^\ell$，我们定义
     \[
     D^i P = {\rm Res}\Bigl(\nabla_{X_i}\bigl({\rm Ext}(P)\bigr)\Bigr), \ \ i=1,2,3.
     \]
     证明，$D_i\colon  \mathbf{P}^{\ell}\rightarrow \mathbf{P}^{\ell}$，
     $D_i\colon  \mathbf{H}^{\ell}\rightarrow \mathbf{H}^{\ell}$ 并且
     \[
     \begin{aligned}
     D_1 &=\sin\varphi \frac{\partial}{\partial \vartheta}+\cos\varphi \frac{\cos\vartheta}{\sin\vartheta}\frac{\partial}{\partial \varphi}, \\
      D_2 &=-\cos\varphi \frac{\partial}{\partial \vartheta}+\sin\varphi \frac{\cos\vartheta}{\sin\vartheta}\frac{\partial}{\partial \varphi}, \\
      D_3 &=-\frac{\partial}{\partial \varphi}.
      \end{aligned}
     \]

S14) 我们令
     \[
     \begin{aligned}
     J_1 &=i\Bigl(\sin\varphi \frac{\partial}{\partial \vartheta}+\cos\varphi \frac{\cos\vartheta}{\sin\vartheta}\frac{\partial}{\partial \varphi}\Bigr), \\
     J_2 &=i\Bigl(-\cos\varphi \frac{\partial}{\partial \vartheta}+\sin\varphi \frac{\cos\vartheta}{\sin\vartheta}\frac{\partial}{\partial \varphi}\Bigr), \\
     J_3 &=-i\frac{\partial}{\partial \varphi}, \\
     J_\pm&=J_1 \pm iJ_2.
     \end{aligned}
     \]
     证明，对任意的 $f_1,f_2 \in C^\infty(\mathbf{S}^2)$，我们有
     \[
     (J_k f_1, f_2)=(f_1,J_kf_2), \ \ (J_+ f_1, f_2)=(f_1,J_-f_2), \ \ (J_- f_1, f_2)=(f_1,J_+f_2).
     \]
     （提示：
     可能将 $D_k$ 写成 $\mathbf{SO}(3)$ 中一条曲线的切方向 $D_k=\dfrac{d}{dt}\big|_{t=0}g(t)$，
     其中 $g(t)\in \mathbf{SO}(3)$，会使得证明在概念上更清晰）

S15) 我们定义如下的Casimir算子：
     \[
     J^2=J_1\circ J_1+J_2\circ J_2+J_3\circ J_3= J_+ \circ J_- +J_3\circ J_3-J_3.
     \]
     证明，$J^2=-\triangle_{\mathbf{S}^2}$。

S16) 对于 $Y(\vartheta,\varphi)\in \mathbf{P}^\ell$，我们令
     \[
     P(r,\vartheta,\varphi)={\rm Ext}(Y)(r,\vartheta,\varphi)=r^\ell Y(\vartheta,\varphi).
     \]
     证明，$\triangle P=0$ 等价于 $\triangle_{\mathbf{S}^2}Y=-\ell(\ell+1)Y$。

S17) 证明，
     $-\triangle_{\mathbf{S}^2}\colon \mathbf{H}^{\ell}\rightarrow \mathbf{H}^{\ell}$ 并且
     $-\triangle_{\mathbf{S}^2}=\ell(\ell+1)\mathbf{Id}$。

- S18)\* 证明，
  $\operatorname{Span}\bigl\{\mathbf{H}^{\ell}\bigm| \ell =1,2,3, \cdots\bigr\}$ 在
  $L^2(\mathbf{S}^2)$ 是稠密的。

  （提示：利用关于多项式（多元）的Stone–Weierstrass定理）

::: remark*
上述表明，$L^2(\mathbf{S}^2)$ 可以写成直和（Hilbert空间意义下的）
$\displaystyle L^2(\mathbf{S}^2)=\bigoplus_{\ell=0}^\infty \mathbf{H}^{\ell}$，
其中，$\mathbf{H}^{\ell}$ 恰为 $-\triangle_{\mathbf{S}^2}$ 以 $\ell(\ell+1)$ 为特征值的特征子空间，
它的维数是 $\ell(\ell+1)$。
以下，
我们要在每个 $\mathbf{H}^\ell$ 中选取一组单位正交基
$\bigl\{Y^\ell_m\mid m=-\ell, \cdots,-1,0,1, \cdots, \ell\bigr\}$，
此时所有的 $\bigl\{Y^\ell_m\mid \ell\geqslant 0, -\ell\leqslant m \leqslant \ell\bigr\}$ 构成了
$L^2(\mathbf{S}^2)$ 的一个Hilbert基。
线性算子 $-\triangle_{\mathbf{S}^2}$ 在这组基下被对角化。

我们可以将这些要找的函数想象成 $\mathbf{T}$ 上的三角函数 $e^{ikx}$ 的类比。
:::

S19) 对于 $m=0,1,2,\cdots,\ell$，我们定义两组函数
     \[
     \begin{aligned}
     P_m^\ell &=\left(\frac{d}{dx}\right)^{\ell+m}\left((1-x^2)^\ell\right), \\
     Z_m^\ell(\vartheta)&=\bigl(\sin \vartheta\bigr)^m P_m^\ell(\cos \vartheta),
     \end{aligned}
     \]
     和一组常数
     \[
     C_{m,\ell}=\frac{(-1)^{\ell+m}}{2^\ell \ell!}\sqrt{\frac{2\ell+1}{4\pi}}\sqrt{\frac{(\ell-m)!}{(\ell+m)!}}.
     \]
     据此，我们定义
     \[
     Y_m^\ell(\vartheta,\varphi)=C_{m,\ell}Z_m^\ell(\vartheta)e^{im\varphi}.
     \]
     当 $m=-\ell,-\ell+1,\cdots, -1$ 时，我们定义
     \[
     Y_m^\ell(\vartheta,\varphi)=\overline{Y_{-m}^\ell(\vartheta,\varphi)}.
     \]
     证明，
     上述定义的 $Y_m^\ell$（$-\ell\leqslant m \leqslant \ell$）都是 $\mathbf{S}^2$
     上的非零的光滑函数。

S20) 试写下 $Y_m^\ell$（$\ell=0,1,2$，$-\ell\leqslant m \leqslant \ell$）
     这九个函数并证明它们在 $L^2(\mathbf{S}^2)$ 中是长度为 $1$ 且相互正交的。

S21) 证明，对任意的 $\ell$ 和 $m$（$-\ell\leqslant m \leqslant \ell$），我们有下面的恒等式：
     \[
     \begin{aligned}
     -\triangle_{\mathbf{S}^2} Y_m^\ell&= \ell(\ell+1)Y_m^\ell, \\
     J_3 Y_m^\ell &= m Y_m^\ell, \\
      J_+ Y_m^\ell &=\sqrt{(\ell-m)(\ell+m+1)} Y_{m+1}^\ell, \\
       J_- Y_m^\ell &=\sqrt{(\ell+m)(\ell-m+1)}Y_{m-1}^\ell.
     \end{aligned}
     \]

S22) 证明，对任意的 $\ell$ 和 $m$（$-\ell\leqslant m \leqslant \ell$），
     $Y_m^\ell\in \mathbf{H}^\ell$。

S23) 证明，对任意的 $(\ell,m)\neq (\ell',m')$（$-\ell\leqslant m \leqslant \ell$，
     $-\ell'\leqslant m' \leqslant \ell'$），函数 $Y_m^\ell$ 和 $Y_{m'}^{\ell'}$ 是垂直的，
     即 $(Y_m^\ell,Y_{m'}^{\ell'})=0$。

- S24)\* 固定 $\ell$，证明，对任意的 $-\ell\leqslant m \leqslant \ell$，
  $Y_m^\ell$ 的长度 $\sqrt{(Y_m^\ell,Y_{m}^{\ell})}$ 不依赖于 $m$。

  （提示：利用S21)的结论）

S25) 证明，对任意的 $\ell$ 和 $m$（$-\ell\leqslant m \leqslant \ell$），
     $(Y_m^\ell,Y_{m}^{\ell})=1$。

::: remark*
上述表明，
我们可以取 $\bigl\{Y_m^\ell\bigm| \ell\geqslant 0, -\ell\leqslant m \leqslant \ell\bigr\}$ 作为
$L^2(\mathbf{S}^2)$ 的Hilbert基。

上述构造的一个核心想法就是 $-\triangle_{\mathbf{S}^2}$ 与算子 $J_3$ 是交换的，
从而它们*应该*可以被同时（正交）对角化。这个问题的计算对应着量子力学中的Zeeman效应。
:::

::: -remark [寄语]
Derrière la série de Fourier, d'autres séries analogues sont entrées dans le domaine de l'analyse; elles y sont entrées par la même porte; elles ont été imaginées en vue des applications.

<align right>
——Henri Poincaré
</align>
:::
