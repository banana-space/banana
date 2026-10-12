---
title: 习题：一个弹性力学的模型
---

一个弹性力学的模型可以用如下的偏微分方程的边值问题来描述：
假设$\Omega\subset \mathbb{R}^n$是光滑的有界带边的区域，$f\in L^2(\Omega)$，$c(x)\in C^0(\Omega)$，
我们要找分布$u\in \mathcal{D}'(\Omega)$，使得
\[
\begin{cases}
&\triangle^2 u+ c(x)u \stackrel{\mathcal{D}'(\Omega)}= f,\\
&\triangle u \big|_{\partial \Omega}=0,\\
&u \big|_{\partial \Omega}=0.
\end{cases}
\]

- 1\) 令
  \[
  V=H^2(\Omega)\cap H^1_0(\Omega).
  \]
  证明，$V\subset H^2(\Omega)$是闭子空间（在$H^2$范数下）。

- 2\) 假设$c(x)>0$，证明，
  \[
  Q(u,v)=\int_{\Omega}\triangle u \overline{\triangle v} +c(x)u \overline{v} dx
  \]
  定义出了$V$上的一个内积。

- 3\) 利用上述内积（假设$c(x)>0$），给出方程的一个解。

- 4\) 证明，如果3)中给出的解$u\in H^4(\Omega)$，那么，在$L^2$的意义下，
  \[
  \triangle^2 u+ c(x)u =f.
  \]

- 5\) 如果只假设$c(x)$是实值函数，如何给出方程的一个解？

- 6\) 当$c(x)$是实数值的时候，试解释如何构造如下方程的解：
  \[
  \begin{cases}
  &\triangle^2 u+ c(x)u \stackrel{\mathcal{D}'(\Omega)}= f,\\
  &\triangle u \big|_{\partial \Omega}=u_2,\\
  &u \big|_{\partial \Omega}=u_0.
  \end{cases}
  \]
  其中，$f\in L^2(\Omega)$，$u_2\in H^\frac{3}{2}(\Omega)$，$u_0\in H^\frac{7}{2}(\Omega)$。
