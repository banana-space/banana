---
title: '$\Gamma$函数以及涉及正态分布密度函数的积分'
---
考虑如下形式的积分：
\[
    \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}
    x^{2n}\exp\!\left(-\frac{x^2}{2}\right)\mathrm{d} x,
\]
其中$n$为任意自然数，记上述积分的值为$I_n$。不难由对称性看出
\[
    I_n = \sqrt{\frac{2}{\pi}}\int_{0}^{+\infty}
    x^{2n}\exp\!\left(-\frac{x^2}{2}\right)\mathrm{d} x
\]
接下来做换元$t=x^2/2$，则有
\[
    I_n = \sqrt{\frac{2}{\pi}} \int_{0}^{+\infty}
    (2t)^n \exp\!\left(-t\right)\frac{\mathrm{d} t}{\sqrt{2t}}
    =\frac{2^n}{\sqrt{\pi}}\int_0^{+\infty}
    t^{n-1/2}\exp(-t)\,\mathrm{d} t.
\]
我们引入$\Gamma$函数：

```math {@eq:Gamma_func_defn}
\Gamma(x)\coloneqq
\int_0^{+\infty} t^{x-1}\exp(-t)\,\mathrm{d} t,
\qquad x\in\left]0,+\infty\right[,
```

其中$x\in\left]0,1\right[$时上式的积分理解为广义积分。
则$I_n = 2^n\Gamma(n+1/2)/\sqrt{\pi}$。

::: theorem {@theorem:Gamma_func_property1}
对任意$x>0$，有
\[
    \Gamma(x+1) = x\Gamma(x).
\]
特别地，对任意自然数$n$，有
\[
    \Gamma(n+1)=n!,\qquad
    \Gamma\!\left(n+\frac{1}{2}\right)
    =\frac{(2n-1)!!}{2^n}\sqrt{\pi}.
\]
:::

::: proof
由$\Gamma$函数的定义，有
\[
    \begin{aligned}
    \Gamma(x+1) & = \int_0^{+\infty} t^{x}\exp(-t)\,\mathrm{d} t
    = -\int_0^{+\infty} t^{x}\frac{\mathrm{d}}{\mathrm{d} t}(\exp(-t))\,\mathrm{d} t \\
    &
    = -t^x\exp(-t)\bigg|_{0}^{+\infty}
    +\int_0^{+\infty} \exp(-t)\frac{\mathrm{d}}{\mathrm{d} t}\!\left(t^x\right)\,\mathrm{d} t \\
    & = x\int_0^{+\infty} t^{x-1}\exp(-t)\,\mathrm{d} t
    =x\Gamma(x).
    \end{aligned}
\]
而
\[
    \Gamma(1) = \int_0^{+\infty}\exp(-t)\,\mathrm{d} t = 1,
\]
故对任意自然数$n$，
\[
    \Gamma(n+1) = n\Gamma(n) = n(n-1)\Gamma(n-1)=\cdots
    =n!\,\Gamma(1) = n!.
\]
接下来我们求$\Gamma(1/2)$。注意到
\[
    \begin{aligned}
    \Gamma\!\left(\frac{1}{2}\right)
    &=\int_0^{+\infty}\frac{\exp(-t)}{\sqrt{t}}\,\mathrm{d} t \\
    &\xlongequal{u=\sqrt{t}}\int_0^{+\infty}\frac{\exp\!\left(-u^2\right)}{u}\,\mathrm{d}\!\left(u^2\right) \\
    &=2\int_0^{+\infty}\exp\!\left(-u^2\right)\,\mathrm{d} u
    =\int_{-\infty}^{+\infty}\exp\!\left(-u^2\right)\,\mathrm{d} u,
    \end{aligned}
\]
而
\[
    \begin{aligned}
    \left(\int_{-\infty}^{+\infty}\exp\!\left(-u^2\right)\,\mathrm{d} u\right)^{\!2}
    & =\int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty}
    \exp\!\left(-\left(u^2+v^2\right)\right)\,\mathrm{d} u\,\mathrm{d} v \\
    & \xlongequal{\substack{u=\rho\sin\theta \\ v=\rho\cos\theta}}
    \int_{0}^{2\pi}\int_0^{+\infty} \exp\!\left(-\rho^2\right)
    \rho\,\mathrm{d}\rho\,\mathrm{d}\theta \\
    & = \pi,
    \end{aligned}
\]
故$\Gamma(1/2)=\sqrt{\pi}$，从而对任意正整数$n$，有
\[
    \begin{aligned}
    \Gamma\!\left(n+\frac{1}{2}\right)
    & =\left(n-\frac{1}{2}\right)\Gamma\!\left(n-\frac{1}{2}\right)
    =\left(n-\frac{1}{2}\right)\left(n-\frac{3}{2}\right)
    \Gamma\!\left(n-\frac{3}{2}\right) \\
    & = \cdots
    = \left(n-\frac{1}{2}\right)
    \left(n-\frac{3}{2}\right)
    \cdots\frac{1}{2}\,\Gamma\!\left(\frac{1}{2}\right) \\
    & = \frac{(2n-1)(2n-3)\cdots 3\cdot 1}{2^n}\,\Gamma\!\left(\frac{1}{2}\right)
    =\frac{(2n-1)!!}{2^n}\sqrt{\pi}.
    \end{aligned}
\]
因$-1$的双阶乘规定为$1$，故上式对任意自然数$n$均成立，至此定理证毕。
:::

回到本节最初的问题，将上述定理的结果代入
$I_n = 2^n\Gamma(n+1/2)/\sqrt{\pi}$，则有

```math {@eq:normal_pdf_x_even_power_integral}
I_n = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}
x^{2n}\exp\!\left(-\frac{x^2}{2}\right)\mathrm{d} x
= (2n-1)!!.
```

$\Gamma$函数的其它性质可参考[@zhangzhusheng_vol3]
第二十一章第4节。
