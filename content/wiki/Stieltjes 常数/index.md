---
title: Stieltjes 常数
categories: [实分析, 解析数论]
---

在数学分析中，Stieltjes 常数一般指由如下极限公式定义的一组实数：

\[
\gamma_m=\lim_{N\to\infty}\left\{ \sum_{n\le N}{\log^mn\over n}-\int_1^N{\log^mx\over x}\mathrm dx\right\},
\]

其中我们要求$0^0=1$使得$\gamma_0=\gamma$也适用于此定义。

## 与$\zeta(s)$的关系

利用[[Euler–Maclaurin 公式]]可知：

\[
S_m(x)=\sum_{n\le x}{\log^mn\over n}=\int_1^x{\log^mt\over t}\mathrm dt+\gamma_m+O\left( \log^mx\over x \right).
\]

因此结合[[Dirichlet 级数]]与系数部分和的关系，可知$\delta=\lambda+i\eta$时：

\[
\begin{aligned}
  \sum_{n\ge1}{\log^mn\over n^{1+\delta}}
  &=\int_1^\infty{S_m(x)\over x^{1+\delta}}\mathrm dx
  ={\delta\over m+1}\int_1^\infty{\log^{m+1}x\over x^{1+\delta}}\mathrm dx \\
  &+\gamma_m+O\left( |\delta|\int_1^\infty{\log^mx\over x^{2+\lambda}}\mathrm dx \right)
\end{aligned}
\]

通过换元，易知：

\[
\int_1^\infty{\log^{m+1}x\over x^{1+\delta}}\mathrm dx=\int_0^\infty u^{m+1}e^{-\delta u}\mathrm du={(m+1)!\over\delta^{m+2}}
\]

所以当$\lambda>-1$时总有：

\[
\sum_{n\ge1}{\log^mn\over n^{1+\delta}}={m!\over\delta^{m+1}}+\gamma_m+O(|\delta|)
\]

结合[[Riemann $\zeta$ 函数]]的定义，我们发现上面的式子可以化为$\zeta(s)$高阶导数的渐近展开：

\[
\zeta^{(m)}(1+\delta)={(-1)^mm!\over\delta^{m+1}}+(-1)^m\gamma_m+O(|\delta|)
\]

利用这一性质，我们就可以将$\zeta(s)$解析延拓到$\Re(s)>0$了：

::: theorem
当$\gamma_m$表示 Stieltjes 常数时：
\[
\gamma_m=(-1)^m\lim_{s\to1}{\mathrm d^m\over\mathrm ds^m}\left\{ \zeta(s)-{1\over s-1} \right\},
\]
\[
\zeta(s)={1\over s-1}+\sum_{m\ge0}{(-1)^m\gamma_m\over m!}(s-1)^m.
\]
:::
