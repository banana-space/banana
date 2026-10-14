---
title: 作业：二维波动方程的基本解，Airy 函数与 KdV 方程
---

::: -remark [寄语]
An ocean traveller has even more vividly the impression that the ocean is made of waves than that it is made of water.

<align right>
—— Sir Arthur Stanley Eddington
</align>
:::

**习题A.（二维波动方程的基本解）**

我们考虑定义在$\mathbb{R}^{1+2}=\mathbb{R}\times \mathbb{R}^2$上的波动算子
$\Box=-\partial_t^2+\triangle$，其中，第一个坐标是时间$t$的坐标。
这个算子是作用在以$(t,x,y)\in \mathbb{R}\times \mathbb{R}^2$为变量的函数上的。我们令
\[
\rho\colon\mathbb{R}\times \mathbb{R}^2 \rightarrow \mathbb{R},  \ \ (t,x,y)\mapsto t^2-x^2-y^2.
\]

A1) 假设$f=F\circ \rho$是$\mathbb{R}^{1+2}$上只依赖于$\rho$的函数，
    其中$F(s)$是$\mathbb{R}$上的光滑函数。令
    \[
    L = 4s\frac{d^2}{ds^2}+6\frac{d}{ds}.
    \]
    证明，
    \[
    \Box f=-L(F)\circ \rho.
    \]

A2) 对任意的$\varepsilon>0$，考虑$\mathbb{R}^1$上的函数
    \[
    H_\varepsilon(s)=\mathbf{1}_{(\varepsilon, \infty)}(s).
    \]
    试计算$L\left(\dfrac{H_\varepsilon(s)}{\sqrt{s}}\right)$。

A3) 我们考虑$\mathbb{R}^{1+2}$上的指向未来的实心光锥
    \[
    \mathring{C}_+=\big\{(t,x)\in \mathbb{R}^{1+3}\bigm| x^2+y^2<t^2\big\}.
    \]
    定义$\mathbb{R}^{1+2}$上的函数
    \[
    E(t,x,y)=-\frac{\mathbf{1}_{\mathring{C}_+}(t,x,y)}{2\pi\sqrt{t^2-\left(x^2+y^2\right)}}.
    \]
    证明，$E\in L^1_{\rm loc}(\mathbb{R}^{1+2})$。

A4) 证明，在极坐标$(t,r,\vartheta)$下，对任意的$\varphi\in \mathcal{D}(\mathbb{R}^{1+2})$，我们有
    \[
    \langle \Box E,\varphi\rangle=\frac{1}{2\pi}\int_0^\infty \left(\int_0^\infty\int_0^{2\pi}\frac{(\Box \varphi)(\sqrt{s+r^2},r\cos\vartheta, r\sin\vartheta)}{2\sqrt{s+r^2}}rdr d\vartheta\right)ds.
    \]

A5) 我们定义算子
    \[
    L^* = 4s\frac{d^2}{ds^2}+2\frac{d}{ds}.
    \]
    证明，对任意的分布$u\in \mathcal{D}'(\mathbb{R})$，
    对任意的试验函数$\varphi \in \mathcal{D}(\mathbb{R})$，我们有
    \[
    \langle L u, \varphi\rangle=\langle u, L^* \varphi \rangle.
    \]

A6) 对任意的试验函数$\varphi\in \mathcal{D}(\mathbb{R}^{1+2})$，
    我们定义$\mathbb{R}$上（关于变量$s$）的函数
    \[
    \widetilde{\varphi}(s)=\int_0^\infty\int_0^{2\pi}\frac{(\Box \varphi)(\sqrt{s+r^2},r\cos\vartheta, r\sin\vartheta)}{2\sqrt{s+r^2}}rdr d\vartheta.
    \]
    证明，
    \[
    \left(\widetilde{\Box \varphi}\right)(s)=(L^*\widetilde{\varphi})(s).
    \]
    证明，
    \[
    \langle \Box E,\varphi\rangle=-\frac{2}{\pi}\lim_{\varepsilon\rightarrow 0}\sqrt{\varepsilon}\frac{d}{ds}\widetilde{\varphi}(s).
    \]

A7) 对任意的试验函数$\varphi\in \mathcal{D}(\mathbb{R}^{1+2})$，
    我们定义其球面平均为如下$\mathbb{R} \times \mathbb{R}_{>0}$上（关于变量$(t,r)$）的函数：
    \[
    \overline{\varphi}(t,r)=\int_0^{2\pi}\varphi(t,r,\vartheta)d\vartheta.
    \]
    证明，
    \[
    \frac{d\widetilde{\varphi}}{ds}(\varepsilon)=\frac{1}{4}\left(\int_0^\infty\frac{\partial \overline{\varphi}}{\partial t}(\sqrt{r^2+\varepsilon},r)\frac{rdr}{r^2+\varepsilon}-\int_0^\infty \overline{\varphi}(\sqrt{r^2+\varepsilon},r)\frac{rdr}{(r^2+\varepsilon)^{\frac{3}{2}}}\right).
    \]

A8) 证明，
    \[
    \frac{d\widetilde{\varphi}}{ds}(\varepsilon)=-\frac{1}{4\sqrt{\varepsilon}}\overline{\varphi}(\sqrt{\varepsilon},0)+R(\varepsilon),
    \]
    其中$R(\varepsilon)$由给定的试验函数$\varphi$决定并且满足
    \[
    \lim_{\varepsilon\rightarrow 0}\sqrt{\varepsilon}R(\varepsilon)=0.
    \]

A9) 证明，$E$是波动算子的基本解。

**习题B.（Airy函数与线性KdV方程）**

这个问题的目的是要研究线性KdV方程（浅水波方程）的基本解。

B1) 证明，存在唯一的缓增分布$\mathbf{Ai}\in \mathcal{S}'(\mathbb{R})$，
    使得其Fourier变换为$e^{\frac{1}{3}i\xi^3}$。我们把这个分布称作是Airy函数。

B2) 证明，对任意给定$\eta>0$，关于$\xi$的函数
    \[
    \xi\mapsto e^{\frac{1}{3}i(\xi+i\eta)^3}
    \]
    是Schwartz函数。

B3) 证明，对任意给定$\eta>0$，关于$x$的函数：
    \[
    x\mapsto \frac{1}{2\pi}\int_{\mathbb{R}}e^{ix(\xi+i\eta)+\frac{1}{3}i(\xi+i\eta)^3}d\xi,
    \]
    是光滑函数。

B4) 证明，当$n\rightarrow+\infty$时，关于$\xi$的函数序列
    \[
    \left\{\xi\mapsto e^{\frac{1}{3}i(\xi+\frac{i}{n})^3}\right\}_{n\geqslant 1}
    \]
    在$\mathcal{S}'(\mathbb{R}_\xi)$中收敛并计算其极限。

B5) 计算
    \[
    (\partial_{\xi}+i\partial_\eta)e^{ix(\xi+i\eta)+\frac{1}{3}i(\xi+i\eta)^3}.
    \]

B6) 给定$R>0$和$a<b$，在$\mathcal{D}'(\mathbb{R}\times\mathbb{R}_{>0})$上计算下面两个分布：
    \[
    \partial_\xi\big(\mathbf{1}_{[-R,R]}(\xi)\mathbf{1}_{[a,b]}(\eta)\big), \ \ \partial_\eta\big(\mathbf{1}_{[-R,R]}(\xi)\mathbf{1}_{[a,b]}(\eta)\big).
    \]

B7) 证明：
    \[
    \begin{aligned}
    & \ \ i\left(\int_{-R}^{R} e^{ix(\xi+ib)+\frac{1}{3}i(\xi+ib)^3} d\xi -\int_{-R}^{R} e^{ix(\xi+ia)+\frac{1}{3}i(\xi+ia)^3} d\xi\right)\\
    &=  \int_{a}^b e^{ix(-R+i\eta)+\frac{1}{3}i(-R+i\eta)^3} d\eta -\int_{a}^b e^{ix(R+i\eta)+\frac{1}{3}i(R+i\eta)^3} d\eta.
    \end{aligned}
    \]

B8) 你是否可以用复解析函数的理论来解释B7)中的结论？

B9) 证明，给定$x\in \mathbb{R}$，下面关于$\eta$的函数
    \[
    \eta \mapsto \frac{1}{2\pi}\int_{\mathbb{R}} e^{ix(\xi+i\eta)+\frac{1}{3}i(\xi+i\eta)^3} d\xi
    \]
    在$\eta\in (0,+\infty)$上是常值函数。

B10) 证明，对任意的$x\in \mathbb{R}$和$\eta>0$，
     在B1)中定义的函数$\mathbf{Ai}(x)$还可以由如下公式定义：
     \[
     \mathbf{Ai}(x)=\frac{1}{2\pi}\int_{\mathbb{R}} e^{ix(\xi+i\eta)+\frac{1}{3}i(\xi+i\eta)^3} d\xi.
     \]

B11) 证明，对任意$C>0$，我们都有
     \[
     \lim_{x\rightarrow +\infty}|e^{Cx}\mathbf{Ai}(x)|=0.
     \]

B12) 证明，
     \[
     \mathbf{Ai}(x)''-x\mathbf{Ai}(x)=0.
     \]

B13) 假定$t>0$，哪一个缓增分布的Fourier变换是$e^{\frac{1}{3}it\xi^3}$？

B14) 对每个$(t,x)\in \mathbb{R}^2$，定义
     \[
     E(t,x)=\frac{\mathbf{1}_{(0,+\infty)}(t)}{t^{\frac{1}{3}}}\mathbf{Ai}\left(\frac{x}{t^\frac{1}{3}}\right).
     \]
     证明，$E(t,x)\in \mathcal{S}'(\mathbb{R}^2)$。

B15) 证明
     \[
     \big(\partial_t + \frac{1}{3}\partial_x^3\big)E(t,x)=\delta_{(t=0,x=0)}.
     \]

B16) 证明，$E(t,x)$是$\mathcal{S}'(\mathbb{R}^2_{t,x})$中唯一一个满足如下两个条件的分布：

     - $\big(\partial_t + \frac{1}{3}\partial_x^3\big)u=\delta_{(0,0)}$；

     - $\operatorname{supp}(u)\subset \mathbb{R}_{\geqslant 0}\times \mathbb{R}.$

B17) 证明，对任意的 $u_0\in \mathcal{E}'(\mathbb{R})$，如下线性KdV方程
     \[
     \begin{cases}
     \big(\partial_t+\frac{1}{3}\partial_x^3\big)u=0, \ \ (t,x)\in \mathbb{R}_{>0}\times \mathbb{R},\\
     u\big|_{t=0}=u_0
     \end{cases}
     \]
     在$\mathcal{S}'(\mathbb{R}\times \mathbb{R})$上有唯一一个满足
     $u\in C^\infty(\mathbb{R}_{>0}\times \mathbb{R})$的解。
     特别地，请陈述$u\big|_{t=0}=u_0$的具体定义。
