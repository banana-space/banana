---
title: 分布理论期末复习题二
---

**题目A.**  给定$a\in \mathbb{R}$，$\lambda \in \mathbb{C}$并且${\rm Re}(\lambda)\leqslant 0$。
我们定义$\mathbb{R}$上的分布
\[
\begin{aligned}
H_a(x)&=\mathbf{1}_{[a,+\infty)}(x), \\
u(x)&=e^{\lambda x}H_a(x).
\end{aligned}
\]

A1) 在分布的意义下计算
    \[
    u'-\lambda u.
    \]

A2) 证明，$u\in \mathcal{S}'(\mathbb{R})$并且
    \[
    (i\xi -\lambda)\widehat{u}(\xi)=e^{a(\lambda-i\xi)}.
    \]

A3) 如果${\rm Re}(\lambda)< 0$，试确定$\widehat{u}(\xi)$。

A4) 当$\lambda=0$时，计算$\widehat{u}(\xi)$。

A5) 当$\lambda=i\mu$时，其中$\mu\in \mathbb{R}$，计算$\widehat{u}(\xi)$。

**题目B.** 对任意的$\varphi(x,y) \in \mathcal{D}(\mathbb{R}^2)$，我们定义如下的线性映射：
\[
\langle u,\varphi\rangle =\int_{0}^\infty \varphi(t,t)dt.
\]
我们用$L$表示如下的微分算子：
\[
L=\frac{\partial}{\partial x}+\frac{\partial}{\partial y}.
\]

B1) 证明，$u\in \mathcal{D}'(\mathbb{R}^2)$并且在分布的意义下计算$L(u)$。

B2) 假设$g\in C^1(\mathbb{R})$，试计算
    \[
    u*(g\otimes \delta),
    \]
    其中$\delta$是$\mathbb{R}$上的Dirac分布。

B3) 令
    \[
    \overline{\mathbb{H}}=\big\{(x,y)\in \mathbb{R}^2\big|y\geqslant 0\big\}.
    \]
    试找出所有的$f\in C^1\left(\overline{\mathbb{H}}\right)$，使得
    \[
    \begin{cases}
    L(f)&=0,\\
    f(x,0)&=g(x),
    \end{cases}
    \]
    其中$g$是上一个问题中给定的函数。

**题目C.**  固定一个正实数$\lambda>0$。我们用如下的方式定义实值函数
\[
g:\left[0,\frac{\pi}{4}\right)\cup \left(\frac{\pi}{4},\pi\right] \rightarrow \mathbb{R},
\]
其中，
\[
\tan\left(g(x)\right)=\frac{\lambda}{1-\tan(x)},
\]
并且我们要求
\[
g(x)\in \begin{cases}\left[-\dfrac{3\pi}{2},-\dfrac{\pi}{2}\right], \ \ &x\in \left[0,\dfrac{\pi}{4}\right);\\
\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right], \ \ &x\in  \left(\dfrac{\pi}{4},\pi\right].
\end{cases}
\]

C1) 证明，$g(x)$可以唯一地被拓成$[0,\pi]$上的连续函数并计算$g(0)$和$g(\pi)$。

C2) 定义$[0,\pi]$上的函数
    \[
    \begin{aligned}
    h(x)&=\frac{\cos(x)+(1+i\lambda)\sin(x)}{\sin(x)-(1+i\lambda)\cos(x)},\\
    f(x)&=\frac{1}{2}\log\left((\sin(x)-\cos(x))^2+\lambda^2\cos(x)^2\right)+ig(x).
    \end{aligned}
    \]
    证明，
    \[
    f'=h.
    \]

C3) 计算积分
    \[
    \int_0^\pi h(x)dx.
    \]

C4) 定义$\mathbb{R}^2$上的微分算子：
    \[
    A=\frac{\partial}{\partial x}+(1+i\lambda)\frac{\partial}{\partial y}.
    \]
    试构造$A$的一个基本解。

C5) 证明，如果$u\in \mathcal{D}'(\mathbb{R}^2)$（在分布意义下）满足微分方程：
    \[
    A(u)=0,
    \]
    那么，$u\in C^\infty(\mathbb{R}^2)$。
