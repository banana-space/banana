---
title: 波动方程和热方程的基本解
---

我们现在考虑函数$\varphi \in \mathcal{S}(\mathbb{R}^m\times \mathbb{R}^{n})$，其中，
我们用$t\in \mathbb{R}^m$表示前面的$m$个变量，$x\in \mathbb{R}^n$表示后面的$n$个变量，
我们可以考虑只对后面$n$个变量的Fourier变换：
\[
\mathcal{F}_{x\rightarrow \xi}(\varphi)(t,\xi)=\int_{\mathbb{R}^n}e^{-ix\cdot \xi}\varphi(t,x)dx.
\]
有时候，为了方便起见，
我们把这个变换记做$\widetilde{\varphi}(t,\xi)$或者干脆记做$\widehat{\varphi}(t,\xi)$。
我们在不同的场合总会指出具体对哪些变量做Fourier变换。
类似地，我们可以定义对后面$n$个变量的Fourier逆变换：
\[
\mathcal{F}^{-1}_{\xi\rightarrow x}(\psi(t,\xi))(t,x)=\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}e^{ix\cdot \xi}\psi(t,\xi)d\xi.
\]
我们注意到$\mathcal{F}_{x\rightarrow \xi}$把$\mathbb{R}^{m}\times \mathbb{R}^n$
上的Schwartz函数映射成为$\mathbb{R}^{m}\times \mathbb{R}^n$上的Schwartz函数，即
\[
\mathcal{F}_{x\rightarrow \xi}: \mathcal{S}(\mathbb{R}_t^m\times \mathbb{R}_x^{n})\rightarrow \mathcal{S}(\mathbb{R}_t^m \times \mathbb{R}_x^{n}).
\]
这是一个连续的线性同构，证明和之前关于Fourier变换的证明是一致的，我们留作作业来验证。

根据$\mathcal{F}_{x\rightarrow \xi}$在Schwartz函数上的作用，我们就可以定义它在缓增分布上的作用：
\[
\mathcal{F}_{x\rightarrow \xi}: \mathcal{S}'(\mathbb{R}_t^m\times \mathbb{R}_x^{n})\rightarrow \mathcal{S}'(\mathbb{R}_t^m \times \mathbb{R}_x^{n}), \ \ u \mapsto \mathcal{F}_{x\rightarrow \xi}(u),
\]
其中，对于任意的$\varphi \in\mathcal{S}(\mathbb{R}^m\times \mathbb{R}^n)$，我们有
\[
\langle \mathcal{F}_{x\rightarrow \xi}(u),\varphi \rangle =\langle u, \mathcal{F}_{x\rightarrow \xi}(\varphi)\rangle.
\]
我们同样可以证明，这是一个连续的线性同构。

::: example*
考虑$\delta_{0,0} \in \mathcal{S}'(\mathbb{R}_t^m\times \mathbb{R}_x^{n})$。按照定义，我们有
\[
\begin{aligned}
\langle \mathcal{F}_{x\rightarrow \xi}(\delta_{0,0}),\varphi \rangle &=\langle \delta_{0,0}, \int_{\mathbb{R}^n}e^{-ix\cdot \xi}\varphi(t,x)dx\rangle=\int_{\mathbb{R}^n}e^{-ix\cdot \xi}\varphi(t,x)dx\Big|_{(t,\xi)=(0,0)}\\
&=\int_{\mathbb{R}^n}\varphi(0,x)dx=\int_{\mathbb{R}^n}\langle \delta_{t=0},\varphi(t,x)\rangle dx.
\end{aligned}
\]
利用我们在第三次作业中定义的张量积，我们就有
\[
\mathcal{F}_{x\rightarrow \xi}(\delta_{0,0})(t,\xi)=\delta_{t=0}\otimes 1_{\xi}.
\]
:::

## 热核的推导

我们已经证明过：
定义在$\mathbb{R}\times \mathbb{R}^n$上的热算子$\partial_t-\triangle$以如下的热核函数作为其基本解：
\[
E(t,x)=\frac{H(t)}{(4\pi t)^{\frac{n}{2}}}e^{-\frac{|x|^2}{4t}}.
\]
然而，之前只是被动地验证了这个事实，我们现在给出它的推导。

我们要解如下的方程：
\[
\left(\partial_t-\triangle\right)E=\delta_{0,0}.
\]
我们做如下的**预设**：$E\in \mathcal{S}'(\mathbb{R}\times \mathbb{R}^n)$。
对上面方程的$x$变量做Fourier变换（仍然用$\widehat{}$来表示），我们就有
\[
\left(\partial_t+|\xi|^2\right)\widehat{E}(t,\xi)=\delta_{t=0}\otimes 1_{\xi}.
\]
我们要解上面这个常微分方程。
注意到，右边分布的支集在$\big\{(t,\xi)\big|t=0\big\}$这个超平面上，所以，在$t=0$之外，
对于每个固定的$\xi\in \mathbb{R}^n$，这个常微分方程的通解形如
\[
c(\xi)e^{-t|\xi|^2}.
\]
为了在$t=0$处得到关于$t$的Dirac分布，我们很容易猜测
\[
c(\xi)e^{-t|\xi|^2}H(t)
\]
满足要求。现在计算热算子在这个分布上的作用：
\[
\left(\partial_t+|\xi|^2\right)\left(c(\xi)e^{-t|\xi|^2}H(t)\right)=c(\xi)e^{-t|\xi|^2}\delta_{t=0}=\delta_{t=0}\otimes c(\xi).
\]
我们只要取$c(\xi)\equiv 1$即可。综上所述，我们就有
\[
\widehat{E}(t,\xi)=e^{-t|\xi|^2}H(t).
\]
对$\xi$做Fourier逆变换，（根据我们已有的计算）我们得到
\[
E(t,x)=\frac{H(t)}{(4\pi t)^{\frac{n}{2}}}e^{-\frac{|x|^2}{4t}}.
\]

## $\mathbb{R}^n$中波动方程基本解的推导

我们考虑定义在$\mathbb{R}^{1+n}=\mathbb{R}\times \mathbb{R}^n$上的波动算子
$\Box=-\partial_t^2+\triangle$，其中，第一个坐标是时间$t$的坐标。
波动算子作用在以$(t,x)\in \mathbb{R}\times \mathbb{R}^n$为变量的函数上的。
我们仍然预设我们要找的基本解$W\in \mathcal{S}'(\mathbb{R}\times \mathbb{R}^n)$，所以，
\[
\Box W=\delta_{0,0}\ \ \Leftrightarrow \ \  -\left(\partial^2_t+|\xi|^2\right)\widehat{W}(t,\xi)=\delta_{t=0}\otimes 1_{\xi}.
\]
这是一个二阶的线性常微分方程，与热核的情况相似，在$t=0$之外，对于每个固定的$\xi\in \mathbb{R}^n$，
它的通解形如
\[
a(\xi)\cos(t|\xi|)+b(\xi)\sin(t|\xi|).
\]
在$n=3$时，我们寻找的基本解满足“在过去为零”的要求（这是物理上因果性的要求），与热方程的情况比较，
我们对$\widehat{W}(t,\xi)$的形状先做出如下的猜测：
\[
\widehat{W}(t,\xi)=H(t)\left(a(\xi)\cos(t|\xi|)+b(\xi)\sin(t|\xi|)\right).
\]
所以，
\[
\begin{aligned}
\partial_t\left(\widehat{W}(t,\xi)\right)&=H(t)\left(-a(\xi)|\xi|\sin(t|\xi|)+b(\xi)|\xi|\cos(t|\xi|)\right)+\delta_{t=0}\left(a(\xi)\cos(t|\xi|)+b(\xi)\sin(t|\xi|)\right)\\
&=H(t)\left(-a(\xi)|\xi|\sin(t|\xi|)+b(\xi)|\xi|\cos(t|\xi|)\right)+\delta_{t=0}\otimes a(\xi).
\end{aligned}
\]
当然，如果我们再对这个式子求导数，最后一项可能会贡献出$\delta'_{t=0}$，这不会满足基本解的公式，
所以，我们假设$a(\xi)\equiv 0$。据此，我们有
\[
\begin{aligned}
\widehat{W}(t,\xi)&=H(t)b(\xi)\sin(t|\xi|),\\
\partial_t\left(\widehat{W}(t,\xi)\right)&=H(t)b(\xi)|\xi|\cos(t|\xi|).
\end{aligned}
\]
从而，
\[
\left(\partial_t^2+|\xi|^2\right)\widehat{W}(t,\xi)=\delta_{t=0}\otimes b(\xi)|\xi|.
\]
据此，我们令
\[
\widehat{W}(t,\xi)=-H(t)\frac{\sin(t|\xi|)}{|\xi|}.
\]
在$n=3$的情形，我们已经证明了
\[
\frac{\widehat{d\sigma_{\mathbb{S}_R}}}{4\pi R}=\frac{\sin(R|\xi|)}{|\xi|}.
\]
所以，当$n=3$时，我们有
\[
\widehat{W}(t,\xi)=-H(t)\frac{\widehat{d\sigma_{\mathbb{S}^2_t}}}{4\pi t}.
\]
最后，我们可以和之前已经给出的基本解做比较：
\[
W=-\displaystyle \frac{d\sigma}{4\pi\sqrt{t^2+|x|^2}},
\]
其中，$d\sigma$是正向光锥的测度。这两个计算是一致的。
