---
title: 作业：Stokes 定理的应用
---

## 课堂补充

A1) 证明向量场的导数公式：假设 $X,Y$ 是 $\mathbb{R}^3$ 上的光滑向量场，
    $\varphi$ 是 $\mathbb{R}^3$ 上实值光滑函数，那么，
    \[
    \begin{aligned}
    &\nabla  \times (\nabla \varphi) = 0, \ \ \ \nabla \cdot (\nabla \times X) = 0, \ \ \ \triangle \varphi = \nabla \cdot (\nabla \varphi), \\
    &\nabla \times (\varphi X) = \varphi(\nabla \times X) + \nabla \varphi \times X,\\
    &\nabla \cdot (X \times Y) = (\nabla \times X) \cdot Y - (\nabla \times Y) \cdot X, \\
    &\nabla \times (X \times Y) = X (\nabla \cdot Y) - Y (\nabla \cdot X) + (Y \cdot \nabla) X - (X \cdot \nabla)Y.
    \end{aligned}
    \]

A2) （三维梯度、散度的几何定义）假设 $X,Y$ 是 $\mathbb{R}^3$ 上的光滑向量场，
    $\varphi$ 是 $\mathbb{R}^3$ 上的光滑实值函数，
    $B_{\varepsilon}(x)$ 为以 $x\in \mathbb{R}^3$ 为球心以 $\varepsilon>0$ 为半径的球。

    1. 证明，
       \[
       \nabla \varphi(x) = \lim_{\varepsilon \to 0} \frac{1}{m(B_{\varepsilon}(x))} \int_{\partial B_{\varepsilon}(x)} \varphi \cdot \nu ~d\sigma.
       \]

    2. 证明，
       \[
       {\rm div} (X) = \lim_{\varepsilon \to 0} \frac{1}{m(B_{\varepsilon}(x))} \int_{\partial B_{\varepsilon}(x)} X \cdot \nu ~d\sigma.
       \]

A3) （二维旋度的几何定义）$D_{\varepsilon}(x)$ 表示以 $x\in \mathbb{R}^2$ 为圆心以 $\varepsilon>0$
    为半径的圆盘，我们用 $\nu$ 表示其边界的单位法向量场。证明，
    \[
    \begin{aligned}
        {\rm curl} (X) = \lim_{\varepsilon \to 0} \frac{1}{\sigma(D_{\varepsilon})} \oint_{\gamma} X \cdot d\gamma
        \end{aligned}
    \]

A4) 令 $\Omega$ 为 $\mathbb{R}^3$ 中的有界光滑带边区域，
    $\nu$ 为 $\partial \Omega$ 的单位外法向量。对于任意的 $\mathbb{R}^3$ 中的光滑函数 $f$，证明，
    \[
    \int_{\Omega}\triangle f  ~dx dy dz =\int_{\partial \Omega} \nabla_{\nu}f ~d\sigma.
    \]

## Stokes公式相关问题

B1) （物理问题中，根据定义，我们写下一切都有定义）假设一个粒子 $P$ 从 $A$ 点运动到 $B$ 点，
    它的运动轨迹（$\mathbb{R}^n$ 中）由参数曲线
    \[
    \gamma\colon[a,b] \rightarrow \mathbb{R}^n
    \]
    给出，其中 $\gamma(a)=A$，$\gamma(b)=B$。
    粒子受到的力由向量场 $F(\gamma(t))$ 给出，
    那么我们定义粒子 $P$ 在路径 $\gamma$ 上做的**功**由第二型曲线积分
    \[
    \displaystyle\int_{\gamma} F \cdot d\gamma
    \]
    给出。

    1. 证明，做功与路径保定向的参数化无关，即若
       \[
       \tau\colon[a,b]\rightarrow [\tau(a),\tau(b)]
       \]
       是光滑函数并且对任意的 $ t \in [a,b]$，都有 $\tau'(t) > 0$，那么
       \[
       \begin{aligned}
           \int_{\gamma} F \cdot d\gamma=\int_{\widetilde{\gamma}} F \cdot d\widetilde{\gamma}~\left(=\int_{\tau(a)}^{\tau(b)} F(\tilde{\gamma}(\tau)) \cdot \frac{d\tilde{\gamma}}{d\tau} d\tau\right)
           \end{aligned}
       \]
       其中
       \[
       \tilde{\gamma} = \gamma \circ \tau^{-1}\colon[\tau(a),\tau(b)] \rightarrow \mathbb{R}^n.
       \]

    2. 假设 $n=2$，我们给定 $\mathbb{R}^2-\{(0,0)\}$ 上一个力场
       \[
       F(x,y) = (-\frac{y}{x^2 + y^2}, \frac{x}{x^2+y^2}).
       \]
       试计算 $F$ 分别沿路径 $\gamma_1$ 和 $\gamma_2$ 所做的功，其中
       \[
       \begin{aligned}
           &\gamma_1\colon[0,2\pi]\rightarrow \mathbb{R}^2-\{(0,0)\},  \ \ t\mapsto (\cos t, \sin t),\\
           &\gamma_2\colon[0,2\pi]\rightarrow \mathbb{R}^2-\{(0,0)\}, \ \ t\mapsto (2+\cos t, \sin t).
           \end{aligned}
       \]

    3. 假设
       \[
       f\colon (0,+\infty)\rightarrow \mathbb{R}
       \]
       是光滑函数，对于 $x\in\mathbb{R}^3$，我们定义 $\mathbb{R}^3 - \{(0,0,0)\}$ 上的一个有心力场：
       \[
       F\colon\mathbb{R}^3 - \{(0,0,0)\}\rightarrow \mathbb{R}^3, \ \ x\mapsto f(|x|)x.
       \]
       任意给定光滑曲线
       \[
       \gamma\colon [0,1] \to \mathbb{R}^3 - \{(0,0,0)\}
       \]
       试计算 $F$ 沿 $\gamma$ 做的功。

B2) $F$ 是区域 $U \subset \mathbb{R}^n$ 上的光滑向量场（力场），
    如果存在函数 $P \in C^{\infty}(U)$，使得 $F = -\nabla P$，
    我们就称 $F$ 是**保守的**并把 $P$ 称为 $F$ 的**势函数**。

    1. 证明，保守力做的功只依赖于路径的起点和终点而与路径的选取无关，即若 $F = -\nabla P$，
       并且 $\gamma_1\colon [a,b] \to \mathbb{R}^n$ 和 $\gamma_2\colon [a,b] \to \mathbb{R}^n$
       是光滑曲线，满足 $\gamma_1(a) = \gamma_2(a), \gamma_1(b) = \gamma_2(b)$，那么
       \[
       \begin{aligned}
       \int_{\gamma_1} F \cdot d\gamma_1 = \int_{\gamma_2} F \cdot d\gamma_2.
       \end{aligned}
       \]

    2. 证明，如果 $F = -\nabla P$ 是保守力，质点的运动满足Newton第二定律
       \[
       m \ddot{x}(t) = F(x(t)),
       \]
       其中，$\ddot{x}$ 代表两次导数，$m$ 是常数，代表粒子的质量，那么质点运动满足能量守恒，
       即动能与势能之和为常数：
       \[
       \begin{aligned}
       E(t) = \frac{1}{2}m|\dot{x}|^2 + P(x(t)) =E(t_0).
       \end{aligned}
       \]

    3. 如果 $X$ 是保守的，那么 $X$ 是无旋的，即其旋度 $\nabla \wedge X = 0$。

    4. （**重要**）给定 $\mathbb{R}^n$ 上的光滑向量场 $F$。如果沿任意的光滑不自交的闭曲线
       \[
       \gamma\colon[a,b]\rightarrow \mathbb{R}^n
       \]
       （不自交指的是 $\gamma$ 是单射，闭指的是 $\gamma(a)=\gamma(b)$）上的环量
       \[
       \displaystyle\oint_{\gamma} F \cdot d\gamma = 0,
       \]
       证明，那么 $F$ 是保守的。

B3) $\Omega \subset \mathbb{R}^2$ 是有界光滑带边区域，
    它的边界 $\gamma = \partial \Omega$ 是光滑的闭曲线，$\nu$ 是 $\gamma$ 的单位外法向量。

    1. 证明，对任意*常值*向量 $v\in \mathbb{R}^2$，我们有
       \[
       \displaystyle \int_{\gamma}\langle v, \nu\rangle d\sigma = 0
       \]

    2. 试计算积分
       \[
       \displaystyle \int_{\gamma} x \nu_1 + y \nu_2 ~d\sigma
       \]
       其中 $\nu=(\nu_1,\nu_2)$。

B4)
    1. 假设空间 $\mathbb{R}^3$ 有 $N$ 个点电荷，
       它们的位置和电量分别为 ${x_i} \in \mathbb{R}^3$ 和 $q_i\in \mathbb{R}$，其中 $i=1,\cdots,N$。
       根据Coulomb定律，它们在 $x\in \mathbb{R}^3$ 处产生的电场（向量场）为
       \[
       \displaystyle E(x) = \sum_{i=1}^{N} \frac{q_i}{4 \pi \varepsilon_0}\frac{x-x_i}{|x-x_i|^3},
       \]
       其中 $\varepsilon_0 > 0$ 是介电常数。
       试证明 Gauss 定律：$\Omega \subset \mathbb{R}^3$ 是有界光滑带边区域，那么
       \[
       \begin{aligned}
       \oiint_{\partial \Omega}  E \cdot d\vec{\sigma} = \frac{Q}{\varepsilon_0},
       \end{aligned}
       \]
       其中 $Q=\displaystyle \sum_{i=1}^{N} {q_i}$ 是 $\Omega$ 内的总电荷并且我们假设对任意的 $i$，
       $x_i \in \mathring{\Omega}$。

    2. 假设 $\rho \in C^{\infty}(\mathbb{R}^3,\mathbb{R})$ 是电荷密度函数，根据Coulomb定律，
       它在 $x\in \mathbb{R}^3$ 处产生的电场（向量场）为（如果可积的话）
       \[
       \displaystyle E(x) = \frac{1}{4 \pi \varepsilon_0} \int_{\mathbb{R}^3} \frac{\rho(y)(x-y)}{|x-y|^3}dy.
       \]

       试证明 Gauss 定律：如果 $\Omega \subset \mathbb{R}^3$ 是有界光滑带边区域，
       ${\rm supp} \rho \in \mathring{\Omega}$，那么
       \[
       \begin{aligned}
       \oiint_{\partial \Omega} E \cdot d\vec{\sigma} = \frac{Q}{\varepsilon_0} ,
       \end{aligned}
       \]
       其中 $Q = \displaystyle \int_{\Omega} \rho(x)dx$ 是 $\Omega$ 内的总电荷。

    3. 证明，如果电荷密度函数 $\rho \in C_0^{\infty}(\mathbb{R}^3)$ 是具有紧支集的光滑函数，那么静电场
       \[
       \displaystyle E(x) =  \frac{1}{4 \pi \varepsilon_0} \int_{\mathbb{R}^3} \frac{\rho(y)(x-y)}{|x-y|^3}dy
       \]
       是无旋的，即 $\nabla \times E = 0$。

B5)
    1. （只用区域边界的信息来计算区域的面积）假设光滑闭曲线
       \[
       \gamma\colon [a,b] \to \mathbb{R}^2, t \mapsto (x(t),y(t))
       \]
       是有界光滑带边区域 $\Omega \subset \mathbb{R}^2$ 的边界。证明，$\Omega$ 的面积有如下表达式：
       \[
       \begin{aligned}
       m(\Omega) = \frac{1}{2}\left|\int_a^b \operatorname{det} \begin{pmatrix}
       x & y \\ x'(t) & y'(t)
       \end{pmatrix}dt\right|
       \end{aligned}
       \]
       （如果 $\gamma$ 沿逆时针方向，即沿 $\partial\Omega$ 的正向，那么可以去掉绝对值。）

    2. 计算下列曲线围成的面积
       \[
       \begin{aligned}
       & (1) ~\text{星形线} ~(a \cos^3 t, a \sin^3 t), \ t \in [0,2\pi];\\
       & (2) ~\text{双纽线} ~(x^2 + y^2)^2 = a^2 (x^2 - y^2) \quad (\text{提示:令}~  y=x \tan \varphi);\\
       & (3) ~\left(\frac{x}{a}\right)^{2n+1} + \left(\frac{y}{b}\right)^{2n+1} = c \left(\frac{x}{a}\right)^{n} \left(\frac{y}{b}\right)^{n}, \quad ~\text{其中}~a,b,c>0, \ n\in \mathbb{Z}_{\geqslant 1}.
       \end{aligned}
       \]

    3. 求环面 $((b+a\cos \theta) \cos \varphi, (b+a\cos \theta) \sin \varphi, a \sin \theta)$
       所围成区域的体积，其中 $0 < a \leqslant b$ 是给定的，参数 $\theta,\varphi \in [0,2\pi]$。

## 位势方程的基本解

我们研究 $\mathbb{R}^3$ 位势方程。
我用 $x\in \mathbb{R}^3$ 表示空间中的一个点，令 $r=|x|$，
$\mathbf{S}^{2}$ 表示 $\mathbb{R}^3$ 中的单位球面，$d\sigma$ 为 $\mathbf{S}^{2}$ 上的子流形测度。

C1) 证明，如果 $\varphi(x)$ 是 $\mathbb{R}^3$ 上光滑的有紧支集的函数，那么
    \[
    \int_{\mathbb{R}^3}\varphi(x)dx =\int_{0}^{+\infty}r^{2}\bigl(\int_{\mathbf{S}^{2}}\varphi(r\vartheta)d\sigma \bigr)dr.
    \]
    其中，
    我们用 $\vartheta \in \mathbf{S}^{2}$ 来表示 $\mathbf{S}^{2}$ 上的一个点（$\vartheta$
    是单位长的向量，所以 $r\vartheta$ 是 $\mathbb{R}^3$ 中的一个点）。

C2) 我们定义 $\mathbb{R}^3$ 上的函数
    \[
    E(x) =-\dfrac{1}{4\pi |x|},
    \]
    其中在原点处，我们可以任意定义 $E(0)$（比如说等于零。
    在后面的运算中，一个零测集的值将不会对问题有影响）。

    证明，对任意的 $R>0$，$E$ 在 $B(R)$ 上是Lebesgue可积的，
    其中 $B(R)$ 是以原点为中心以 $R$ 为半径的球。

C3) 对任意的有界的并且在 $\mathbb{R}^3$ 上Lebesgue可积函数 $f$，证明，
    对任意的 $x_0 \in \mathbb{R}^3$，$\dfrac{f(y)}{|x_0-y|}$ 对于 $dy$ 是可积函数。
    从而，我们可以定义函数
    \[
    \Phi_f(x)=-\frac{1}{4\pi}\int_{\mathbb{R}^3}\frac{f(y)}{|x-y|}dy.
    \]
    证明，
    \[
    \displaystyle \lim_{|x|\rightarrow \infty} \Phi_f(x)=0.
    \]

C4) 对任意的有界的并且在 $\mathbb{R}^3$ 上Lebesgue可积函数 $f$，证明，$\Phi_f(x)$ 是连续函数并且
    \[
    \displaystyle \lim_{|x|\rightarrow \infty} \Phi_f(x)=0.
    \]

- C5\*) 对任意 $\mathbb{R}^3$ 上Lebesgue可积函数 $f$，证明，除掉 $\mathbb{R}^3$ 上的一个零测集，
  $\Phi_f(x)$ 是良好定义的。（提示：去证明 $\Phi_f(x)$ 在每个 $B(R)$ 上都可积）

- C6\*\*) 证明，对任意的光滑的有紧支集的函数 $\varphi(x,y,z)$，我们有
  \[
  \int_{\mathbb{R}^3} E(x)\triangle \varphi(x) dx =\varphi(0).
  \]
  （提示：将 $\mathbb{R}^3$ 分为 $B(\varepsilon)$ 和 $\mathbb{R}^3-B(\varepsilon)$ 两个区域来考虑）

C7) 假设 $f\in C^2(\mathbb{R}^3)$ 并且 $f$ 在 $\mathbb{R}^3$ 上Lebesgue可积。
    证明，$\Phi_f(x)\in C^2(\mathbb{R}^3)$ 并且
    \[
    \triangle \Phi_f(x)=f.
    \]

- C8\*\*\*) 证明，如果 $f$ 是Lebesgue可积的，那么存在一个仅依赖于 $f$ 的常数 $C$，
  使得对任意的 $\lambda>0$，我们有
  \[
  m\bigl(x\in \mathbb{R}^3\bigm||\Phi_f(x)|>\lambda\bigr)\leqslant \dfrac{C}{\lambda^3}.
  \]

::: remark* (寄语)
Les mathématiciens n'étudient pas des objets, mais des relations entre les objets.

（数学家研究的是数学对象之间的关系而不是对象本身）

<align right>
——Henri Poincaré
</align>
:::
