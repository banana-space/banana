---
title: 作业：齐次函数与Euler公式
---

## 基本习题

**$\bullet$ 热身：多元函数的连续性**

试判断下列极限是否存在；如果存在，计算之。
\[
\begin{aligned}
&&(1) \ &\lim_{(x,y)\to (0,0)} \frac{\sin (xy)}{x} && (2)\ &\lim_{(x,y)\to (0,0)} \frac{\log(x+e^y)}{\sqrt{x^2+y^2}} \\
&&(3)\ &\lim_{(x,y)\to (0,0)} \mathbf{1}_{\{(x,y)\,|\, 0<y<x^2, \ x\in \mathbb{R}\}}.
&&(4) \ &\lim_{(x,y)\to (0,0)} (x+y)\sin \frac1x \sin \frac1y \\
&& (5)\ &\lim_{(x,y)\to (0,0)} \frac{x^2y^2}{x^2y^2 + (x-y)^2} &&(6)\ &\lim_{(x,y)\to (0,0)} \frac{\sin(xy)}{\sqrt{x^2+y^2}}\\
&&(7) \ &\lim_{(x,y)\to (0,0)} \frac{xy(x^2-y^2)}{x^2+y^2} && (8)\ &\lim_{(x,y)\to (0,0)} \frac{\sqrt{xy}}{(x^2+y^2)^p}, \, p>0 \\
\end{aligned}
\]

### 微分的定义与计算

**习题A**  我们总假设$\Omega\subset \mathbb{R}^n$是开集，
$x_0\in \Omega$是一个给定的点。如果不另加说明$f\colon\Omega\rightarrow \mathbb{R}$将代表一个函数。

A1) （微分的唯一性）考虑映射$f\colon\Omega\subset \mathbb{R}^n\rightarrow \mathbb{R}^m$。
    假设存在两个线性映射$A_i\colon\mathbb{R}^n\rightarrow \mathbb{R}^m$（$i=1,2$），
    使得对$i=1$和$2$和$v\rightarrow 0$时，都有
    \[
    f(x_0+v)=f(x_0)+A_i (v)+o(v).
    \]
    证明，$A_1=A_2$。

A2) 假设$f$在$x_0\in \Omega$处可微，$x_1,\cdots, x_n$是$n$个坐标函数。
    证明，$df(x_0)=\displaystyle \sum_{i=1}^n \dfrac{\partial f}{\partial x_i}(x_0) dx_i(x_0)$。
    我们通常将这个式子记作$df=\displaystyle \sum_{i=1}^n \dfrac{\partial f}{\partial x_i}dx_i$。

A3) 沿用上一问题的符号。证明，$\{dx_i(x_0)\}_{1\leqslant i\leqslant n}$
    给出了$\operatorname{Hom}(T_{x_0}\Omega,\mathbb{R})$（这是$T_{x_0}\Omega$的对偶空间，
    即它上面的线性函数所构成的线性空间）的一组基，其中$T_{x_0}\Omega=\mathbb{R}^n$。

A4) 假设$\Omega$是凸集（定义请参考课堂笔记），$f$是$\Omega$上的可微函数。
    如果对任意的$x\in \Omega$，都有$df(x)=0$。证明，$f$是常值函数。

A5) 考察函数$f(x,y) = \begin{cases}
    (x^2+y^2) \sin \frac{1}{\sqrt{x^2+y^2}}, \ \ &\text{若} (x,y) \ne (0,0),\\
    0, \ \ &\text{若} (x,y) = (0,0).
    \end{cases}$

    试计算$f$的偏导数并证明$f$的两个偏导数在$(0,0)$处均不连续但是$f$在$(0,0)$处可微。

A6) 考察函数$f(x,y) = \begin{cases}
    \frac{xy^2}{x^2+y^4}, \ \ &\text{若} (x,y) \ne (0,0),\\
    0, \ \ &\text{若} (x,y) = (0,0).
    \end{cases}
    $

    试计算$f$在$(0,0)$处所有方向导数并证明$f$在$(0,0)$不可微。

A7) 假设函数$f$在$\Omega$上的所有偏导数$\dfrac{\partial f}{\partial x_i}$
    （$i = 1,2,\cdots,n$）都存在并且有界
    （即存在$M$，使得对任意的$i\leqslant n$，任意的$x\in \Omega$，
    我们都有$\Big|\dfrac{\partial f}{\partial x_i}(x)\Big| \leqslant M$）。
    证明，$f$在$\Omega$上连续。

    $f$是否在$\Omega$上可微？如果是，请证明；否则给出反例。

A8) $\Omega\subset \mathbb{R}^2$为开集，我们用$(x,y)$来表示$\mathbb{R}^2$上的坐标。
    函数$f\colon \Omega \to \mathbb{R}$的偏导数
    $\dfrac{\partial f}{\partial x}$和$\dfrac{\partial f}{\partial y}$处处存在。
    如果偏导数$\dfrac{\partial f}{\partial y}$在$\Omega$上连续。证明，$f$在$\Omega$上可微。

A9) 考虑在$\mathbf{M}_n(\mathbb{R})$上定义的行列式函数
    \[
    \operatorname{det}\colon \mathbf{M}_n(\mathbb{R})\rightarrow \mathbb{R}, \ \ A\mapsto \operatorname{det}(A).
    \]
    任意给定$A\in \mathbf{M}_n(\mathbb{R})$，试计算$d \operatorname{det}\big|_{X=A}$。

    （如果你可以证明$\operatorname{det}$是可微的，那么可以用上学期第6次作业的A9)）

A10) （偏导数的计算）计算下列函数的偏导数：
     \[
     \begin{aligned}
     &&(1)\ &f(x,y) = e^{xy} \qquad &&(2)\ &f(x,y,z) = \log(x+y^2+z^3) \\
     &&(3)\ &f(x,y,z) = x^{y^z} \ \ &&(4)\ &f(x,y) = x + y + \sqrt{x^2+y^2} \\
     &&(5)\ &f(x,y) = e^{x+y^2} + \sin(x^2 y) \qquad &&(6)\ & f(x_1,x_2,x_3) = \tan\frac{x_1x_2}{x_3^2}
     \end{aligned}
     \]

### 导数和微分的计算

**习题B** **（复合函数求偏导数）（请熟练掌握）**

假设$f$为可微函数，用$f$的偏导数表达下列多元函数的偏导数：
\[
\begin{aligned}
&&(1)\ &u(x,y) = f(x+y,xy) \qquad &&(2)\ &u(x,y,z) = f(x,xy,xyz)\qquad &&(3)\ &u(x,y,z) = f(\frac xy, \frac yz)\\
&&(4)\ &u(x,y) = f(x^2+y^2) \qquad &&(5)\ &u(x,y) = f(\log x+ \frac1y) \qquad &&(6)\ &u(x,y) = f(xy + e^{f(y)})
\end{aligned}
\]

**习题C**

C1) 求如下坐标变换$f$的Jacobi矩阵$J(f)$并计算$\operatorname{det} J(f)$：
    \[
    \begin{aligned}
      & (1)\ f\colon \mathbb{R}_{>0}\times (0,2\pi) \rightarrow \mathbb{R}^2, \ \ (r,\theta)  \mapsto (r \cos \theta, r \sin \theta);  \\
      & (2)\ f\colon \mathbb{R}_{>0}\times (0,2\pi)\times \mathbb{R} \rightarrow \mathbb{R}^3,\ \  (r,\theta,z) \mapsto (r \cos \theta, r \sin \theta,z); \\
      & (3)\ f\colon \mathbb{R}_{>0}\times (0,\pi)\times (0,2\pi) \rightarrow \mathbb{R}^3, (r,\theta, \varphi)\ \  \mapsto (r \sin \theta \cos \varphi, r \sin \theta \sin \varphi, r \cos \theta);\\
      & (4)\ f\colon \mathbb{R}^2\rightarrow \mathbb{R}^2, \ \ (u,v) \mapsto (u^2 - v^2, 2uv) ;\\
      & (5)\ f\colon \mathbb{R}^2\rightarrow \mathbb{R}^2, \ \ (u,v)\mapsto (e^{u} \cos v, e^{u} \sin v) ;\\
      & (6)\ f\colon \mathbb{R}^2\rightarrow \mathbb{R}^2, \ \ (u,v) \mapsto (\frac{u}{u^2 + v^2},\frac{v}{u^2 + v^2}) .
      \end{aligned}
    \]

C2) 我们考虑$\mathbb{R}^3$上的柱面坐标系：
    $x=r \cos \theta, y =r \sin \theta, z=z$。这个坐标变换用映射来写就是
    \[
    \Phi\colon \mathbb{R}_{>0}\times (0,2\pi)\times \mathbb{R} \to \mathbb{R}^3, \ \ (r,\theta, z)\mapsto (r \cos \theta, r \sin \theta, z).
    \]
    设 $f$ 是 $\mathbb{R}^3$ 上的二次可微函数。当$(x,y)\neq(0,0)$时，试通过计算来证明：
    \[
    \begin{aligned}
    &\ \ \frac{\partial f}{\partial r}=\cos \theta \frac{\partial f}{\partial x} +\sin \theta \frac{\partial f}{\partial y}, \ \ \frac{\partial f}{\partial \theta} = -r\sin \theta \frac{\partial f}{\partial x} +r\cos\theta \frac{\partial f}{\partial y}, \\
    &\ \ \left( \frac{\partial f}{\partial x} \right)^2 +     \left(\frac{\partial f}{\partial y} \right)^2 +     \left( \frac{\partial f}{\partial z} \right)^2 =     \left( \frac{\partial f}{\partial r} \right)^2 + \frac{1}{r^2}\left( \frac{\partial f}{\partial \theta} \right)^2 + \left( \frac{\partial f}{\partial z} \right)^2,\\
    &\ \ \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} + \frac{\partial^2 f}{\partial z^2} = \frac{1}{r} \frac{\partial}{\partial r}\left( r \frac{\partial f}{\partial r}\right) + \frac{1}{r^2} \frac{\partial^2 f}{\partial \theta^2} + \frac{\partial^2 f}{\partial z^2}.
    \end{aligned}
    \]

C3) 我们考虑$\mathbb{R}^3$上的球坐标系
    $(x,y,z)= (r \sin \theta \cos \varphi, r \sin \theta \sin \varphi, r \cos \theta)$。证明，
    \[
    \begin{aligned}
    \left( \frac{\partial f}{\partial x} \right)^2
    + \left(\frac{\partial f}{\partial y} \right)^2
    + \left( \frac{\partial f}{\partial z} \right)^2
    &= \left( \frac{\partial f}{\partial r} \right)^2
    + \frac{1}{r^2}\left( \frac{\partial f}{\partial \theta} \right)^2
    + \frac{1}{r^2 \sin^2 \theta}\left( \frac{\partial f}{\partial \varphi} \right)^2,\\
    \frac{\partial^2 f}{\partial x^2}
    + \frac{\partial^2 f}{\partial y^2}
    + \frac{\partial^2 f}{\partial z^2}
    &= \frac{1}{r^2} \frac{\partial}{\partial r}\left( r^2 \frac{\partial f}{\partial r}\right)
    + \frac{1}{r^2 \sin \theta} \frac{\partial}{\partial \theta}\left( \sin \theta \frac{\partial f}{\partial \theta}\right)
    + \frac{1}{r^2 \sin^2 \theta} \frac{\partial^2 f}{\partial \varphi^2}.
    \end{aligned}
    \]

**习题D**（齐次函数与Euler公式）
考虑函数$f\colon \mathbb{R}^n-\{0\} \rightarrow \mathbb{R}$。
如果存在$k \in \mathbb{R}$，使得对任意的$\lambda>0$和任意的$x\neq 0$，
我们都有$f(\lambda x) = \lambda^k f(x)$，我们就称$f$为 **$k$次齐次的**，
其中$k$称作是它的次数。

D1) 证明，下面的函数$f\colon\mathbb{R}^n \rightarrow \mathbb{R}$是齐次函数：
    \[
    \begin{aligned}
    & (1) \ f~\text{是线性函数 };\\
    & (2) \ f(x_1,\cdots,x_n) = x_1 x_2 + \cdots + x_{n-1} x_n;\\
    & (3) \ f(x_1,\cdots,x_n) = \min\{x_1,\cdots,x_n\};\\
    & (4)\ f(x) = \frac{g(x)}{h(x)},  ~\text{其中当}~x\neq 0~\text{时}, h(x)\neq 0, \text{并且 $g$ 和 $h$ 都是齐次函数}.
    \end{aligned}
    \]

D2) （Euler）假设$f$是可微的。证明：$f$是$k$次齐次函数当且仅当它满足Euler等式
    $\displaystyle \sum_{i=1}^{n} x_i \frac{\partial f}{\partial x_i} = k f$。

D3) 假设可微函数$f$是$k$次齐次函数。
    证明，对任意$v\in \mathbb{R}^n$，$\nabla_v f$是$k-1$次齐次函数。

D4) 令$f(x_1,\cdots,x_n) = \operatorname{det} \begin{pmatrix}
    1 & \cdots & 1\\
    x_1 & \cdots & x_n\\
    \vdots & & \vdots\\
    x_1^{n-1} & \cdots & x_n^{n-1}
    \end{pmatrix}$。证明，$\displaystyle \sum_{i=1}^{n} x_i \frac{\partial f}{\partial x_i} = \frac{n(n-1)}{2}f$
    和$\displaystyle\sum_{i=1}^{n} \frac{\partial f}{\partial x_i} = 0$。

## 思考题：切空间的抽象／几何定义（这是理解微分和切空间的重要习题）

**习题T** 给定开集$\Omega \subset \mathbb{R}^n$和$p \in \Omega$。
我们令$\mathcal{C}(p)$是所有通过$p$的$C^1$的曲线的集合。按照定义，我们有
\[
\mathcal{C}(p)=\Big\{\gamma\colon I\rightarrow \Omega \Bigm|
I\subset \mathbb{R} ~\text{是开区间且}~0\in I, \ \gamma(0)=p, \ \gamma~\text{是$C^1$的}\Big\},
\]
我们在$\mathcal{C}(p)$定义如下的等价关系，其中$\gamma_1,\gamma_2\in \mathcal{C}(p)$：
\[
\gamma_1\sim \gamma_2 \ \ \text{当且仅当} \ \  \gamma_1'(0)=\gamma_2'(0).
\]
我们考虑$\mathcal{C}(p)$在上述等价关系下的等价类$\mathcal{C}(p)/\sim$：
\[
\mathcal{C}(p)/\sim =\big\{[\gamma]\bigm| \gamma \in \mathcal{C}(p)\big\},
\]
其中，如果$\gamma\sim \gamma'$，那么在等价类的集合$\mathcal{C}(p)/\sim $中，
$[\gamma]=[\gamma']$。换句话说，我们把在$p$点处的切向量相同的曲线认为是同一条曲线，
这就是为什么我们把这个空间称作是切空间。

T1) 证明，映射
    \[
    \iota_p\colon \mathcal{C}(p)/\sim \rightarrow \mathbb{R}^n, \ \ [\gamma]\mapsto \gamma'(0)
    \]
    是良好定义的并且是双射。

T2) 证明，将$\mathcal{C}(p)/\sim$定义为一个$\mathbb{R}$-线性空间使得上述为线性空间的同构，
    我们把具有线性空间结构的$\mathcal{C}(p)/\sim$（它本来仅是曲线的等价类的集合）
    记作是$T_p\Omega$。

T3) 令$\Omega' = \mathbb{R}^m$，$f\colon\Omega\rightarrow \Omega'$是$C^1$的映射
    （即其微分也连续），$p'=f(p)$。证明，映射
    \[
    f_{\sharp,p}\colon \mathcal{C}(p) \rightarrow \mathcal{C}(p'), \ \  \gamma \mapsto f\circ \gamma,
    \]
    是良好定义的。
    换句话说，通过和$f$复合，
    我们可以把$\Omega$上通过$p$点的曲线映射成为$\Omega'$上通过$p'$点的曲线。

T4) 证明，映射
    \[
    f_{*p}\colon T_p\Omega \rightarrow T_{p'}\Omega' ,\ \  [\gamma] \mapsto [f_{\sharp,p}( \gamma)],
    \]
    是良好定义的线性映射。这个映射被称作是**切映射**。

T5) 在$\Omega$上考虑曲线
    \[
    \ell_k\colon (-1,1)\rightarrow \Omega, \ \ t\mapsto p+\underbrace{(0,0,\cdots,0,t,0,\cdots,0)}_{\text{只有第 $k$ 个位置非 $0$}}
    \]
    证明，$\iota_p([\ell_k])=\dfrac{\partial}{\partial x_k}$，
    其中，我们在$\mathbb{R}^n$上用$\{x_1,\cdots,x_n\}$作为坐标系。

T6) 在$\Omega'$上考虑曲线
    \[
    \ell'_{k'}\colon (-1,1)\rightarrow \Omega', \ \ t\mapsto p'+\underbrace{(0,0,\cdots,0,t,0,\cdots,0)}_{\text{只有第 $k'$ 个位置非 $0$}}
    \]
    试用$f$的偏导数和$[\ell'_{k'}]$来表达$f_{*p}([\ell_k])$。

T7) 证明，我们有如下的交换图表：
    \[
    \begin{tikzcd}
      T_{p}\Omega \arrow[r,"\iota_p","\approx"'] \arrow[d, "f_{*p}"]
      &   \ \mathbb{R}^n \arrow[d,"df(p)"]\\
      T_{p'}\Omega' \arrow[r,"\iota_{p'}","\approx"']
    &   \mathbb{R}^m \end{tikzcd}
    \]
    即对任意的$[\gamma]\in  T_{p}\Omega$，我们有
    \[
    f_{*p}([\gamma])=\iota_{p'}^{-1}\Big(df(p)\big(\iota_p([\gamma])\big)\Big).
    \]
    在这个意义，$f_{*p}$与$df(p)$是一样的。

T8) 给定$[\gamma_1],[\gamma_2]\in  T_p \Omega$，
    如果它们都不是$0$，我们可以计算它们的角度：
    \[
    \cos\big(\angle ([\gamma_1],[\gamma_2])\big)
    =\frac{\gamma_1'(0)\cdot \gamma_2'(0)}{|\gamma_1'(0)||\gamma_2'(0)|},
    \]
    我们要求角度是在$[0,\pi)$中的值。考虑反演变换：
    \[
    f\colon\mathbb{R}^n-\{0\}\rightarrow \mathbb{R}^n-\{0\}, \ \ x \mapsto \frac{x}{|x|^2}.
    \]
    证明，$f$是$C^1$的并且对任意的$p\in  \mathbb{R}^n-\{0\}$，
    $f_*\colon T_p  \big(\mathbb{R}^n-\{0\}\big)\rightarrow  T_{f(p)} \big(\mathbb{R}^n-\{0\}\big)$
    保持角度。

::: remark* (寄语)
Pure mathematics is, in its way, the poetry of logical ideas.

<align right>
— Albert Einstein
</align>
:::
