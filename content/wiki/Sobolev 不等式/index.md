---
title: Sobolev 不等式
categories: [泛函分析]
navboxes: [泛函分析]
---

在[[泛函分析]]中，
**Sobolev 不等式**是关于 [[Sobolev 空间]] 和其他空间的模的不等式，
它用 Sobolev 模给出了一些函数空间中的模的估计，从而得到[[Sobolev 嵌入定理]]，
即 Sobolev 空间可以连续嵌入到 [[$L^p$ 空间]] 或 [[Hölder 空间]]。

## 陈述与证明

对 $p\in [1,\infty]$，记$p^*$ 是其 Sobolev 共轭，
即满足 $\frac1{p^*}=\frac1p-\frac1n$ 的$p^*$。

### Gagliardo–Nirenberg–Sobolev 不等式（$1\le p<n$ 的情形）

::: theorem [Gagliardo–Nirenberg–Sobolev]
设 $1\le p<n$，则存在只与 $p,n$ 有关的常数 $C$，
使对所有 $u\in C_c^1(\mathbb{R}^n)$ 有
\[
\|u\|_{L^{p^*}\!(\mathbb{R}^n)}
\le C\|Du\|_{L^p(\mathbb{R}^n)}.
\]
:::

::: proof
先证明$p=1$的情形。由于$u$有紧支集，对每个$1\leq i\leq n$，有
$$
|u(x)|=\bigg|\int_{-\infty}^{x_i} D_iu\,dx_i\bigg|
\leq\int_{-\infty}^\infty|D_i u|\,dx_i,
$$
相乘得
$$
|u(x)|^\frac{n}{n-1}
\leq\bigg(\prod_{i=1}^n\int_{-\infty}^\infty|D_i u|\,dx_i\bigg)^\frac{1}{n-1}.
$$
对$x_1$积分并使用[[Hölder 不等式]]，得到
\[
\begin{aligned}
  \int_{-\infty}^\infty|u|^\frac{n}{n-1}dx_1
  &\leq\int_{-\infty}^\infty\bigg(\prod_{i=1}^n\int_{-\infty}^\infty|D_i u|\,dx_i\bigg)^\frac{1}{n-1}dx_1\\
  &=\bigg(\int_{-\infty}^\infty|D_1 u|\,dx_1\bigg)^\frac{1}{n-1}
  \int_{-\infty}^\infty\bigg(\prod_{i=2}^n\int_{-\infty}^\infty|D_i u|\,dx_i\bigg)^\frac{1}{n-1}dx_1\\
  &\leq\bigg(\int_{-\infty}^\infty|D_1 u|\,dx_1\bigg)^\frac{1}{n-1}
  \prod_{i=2}^n\bigg(\int_{-\infty}^\infty\int_{-\infty}^\infty|D_i u|\,dx_idx_1\bigg)^\frac{1}{n-1}.
\end{aligned}
\]
再对$x_2$积分并使用Hölder不等式，得到
\[
\begin{aligned}
  &\int_{-\infty}^\infty\int_{-\infty}^\infty|u|^\frac{n}{n-1}dx_1dx_2\\
  \leq\,&\bigg(\int_{-\infty}^\infty\int_{-\infty}^\infty|D_2 u|\,dx_1dx_2\bigg)^\frac{1}{n-1}
  \bigg(\int_{-\infty}^\infty\int_{-\infty}^\infty|D_1 u|\,dx_1dx_2\bigg)^\frac{1}{n-1}\\
  &\prod_{i=3}^n\bigg(\int_{-\infty}^\infty\int_{-\infty}^\infty\int_{-\infty}^\infty|D_i u|\,dx_idx_1dx_2\bigg)^\frac{1}{n-1}.
\end{aligned}
\]
再依次对$x_3,\cdots,x_n$积分，最终得到
\[
\begin{aligned}
  \|u\|_{L^{\frac{n}{n-1}}(\mathbb{R}^n)}
  &\leq\prod_{i=1}^n\bigg(\int_{\mathbb{R}^n}|D_i u|\,dx\bigg)^\frac{1}{n}\\
  &\leq\frac{1}{n}\int_{\mathbb{R}^n}\sum_{i=1}^n|D_i u|\,dx\\
  &\leq\frac{1}{\sqrt{n}}\|Du\|_{L^1(\mathbb{R}^n)}.
\end{aligned}
\]
现在证明$1<p<n$的情形。上式中把$u$取作$u^\gamma,\gamma>1$得到
\[
\begin{aligned}
  \||u|^\gamma\|_{L^{\frac{n}{n-1}}(\mathbb{R}^n)}
  &\leq\frac{\gamma}{\sqrt{n}}\||u|^{\gamma-1}|Du|\|_{L^1(\mathbb{R}^n)}\\
  &\leq\frac{\gamma}{\sqrt{n}}\||u|^{\gamma-1}\|_{L^{\frac{p}{p-1}}(\mathbb{R}^n)}\|Du\|_{L^p(\mathbb{R}^n)}.
\end{aligned}
\]
那么令
$$
\gamma\frac{n}{n-1}=(\gamma-1)\frac{p}{p-1},\quad\text{即 }\gamma=\frac{(n-1)p}{n-p}>1,
$$
则
$$
\||u|^\gamma\|_{L^{\frac{n}{n-1}}(\mathbb{R}^n)}
=\|u\|_{L^{p^*}\!(\mathbb{R}^n)}^\gamma,
\quad\||u|^{\gamma-1}\|_{L^{\frac{p}{p-1}}(\mathbb{R}^n)}
=\|u\|_{L^{p^*}\!(\mathbb{R}^n)}^{\gamma-1},
$$
得到了
$$
\|u\|_{L^{p^*}\!(\mathbb{R}^n)}
\leq \frac{\gamma}{\sqrt{n}}\|Du\|_{L^p(\mathbb{R}^n)}.
$$
:::

::: corollary [对 $W^{1,p}$ 的估计] {@GNS}
设 $U$ 是 $\mathbb{R}^n$ 中的有界开集，边界是 $C^1$ 曲线，$1\leq p<n$，
则存在只与 $p,n,U$ 有关的常数 $C$，使对于 $u\in W^{1,p}(U)$ 有
\[
\|u\|_{L^{p^*}\!(U)}\le C\|u\|_{W^{1,p}(U)}.
\]
:::

::: proof
我们要用到 $W^{1,p}(U)$ 到 $W^{1,p}(\mathbb{R}^n)$ 的连续的扩张算子，
即存在 $\bar{u}\in
W^{1,p}(\mathbb{R}^n)$ 使 $\bar{u}$ 有紧支集，限制在 $U$ 上等于 $u$，且
$\|\bar{u}\|_{W^{1,p}(\mathbb{R}^n)}\le C\|u\|_{W^{1,p}(U)}$。
然后我们使用磨光的一般手段，找到 $u_m\in C_c^\infty(\mathbb{R}^n)$
使得在空间 $W^{1,p}(\mathbb{R}^n)$ 中 $u_m\to \bar{u}$。用上面的定理，
$Du_m$ 在 $L^p(\mathbb{R}^n)$ 中构成 Cauchy 列蕴含
$u_m$ 在 $L^{p^*}\!(\mathbb{R}^n)$中构成 Cauchy 列，
于是在 $L^{p^*}\!(\mathbb{R}^n)$ 中$u_m\to \bar{u}$。
再对$u_m$用上一定理并取极限得
\[
\|\bar{u}\|_{L^{p^*}\!(\mathbb{R}^n)}\le C\|D\bar{u}\|_{L^p(\mathbb{R}^n)}.
\]
结合扩张的有界性得到结论。
:::

::: corollary [对 $W_0^{1,p}$ 的估计]
设 $U$ 是 $\mathbb{R}^n$ 中的有界开集，边界是 $C^1$ 曲线，$1\leq p<n$，
$1\leq q\leq p^*$，
则存在只与 $p,q,n,U$ 有关的常数 $C$，使对于 $u\in W_0^{1,p}(U)$ 有
\[
\|u\|_{L^q(U)}\le C\|Du\|_{L^p(U)}.
\]
:::

::: proof
由于$u\in W_0^{1,p}(U)$，找到 $u_m\in C_c^\infty(U)$
使得在空间 $W^{1,p}(U)$ 中 $u_m\to u$。把$u_m$零延拓到$\mathbb{R}^n$上并用上面的定理，
取极限得$\|u\|_{L^{p^*}\!(U)}\le C\|Du\|_{L^p(U)}$。
由于$U$有界，又有$\|u\|_{L^q(U)}\le C\|u\|_{L^{p^*}\!(U)}$。
:::

### Morrey 不等式（$n<p\le \infty$ 的情形）

我们用 $C^{k,\gamma}$ 表示 Hölder 空间。

::: theorem [Morrey]
设 $n<p\leq\infty$，则存在只与 $p,n$ 有关的常数 $C$，
使对所有的 $u\in C^1(\mathbb{R}^n)$ 有
\[
\|u\|_{C^{0,\gamma}(\mathbb{R}^n)}\le C\|u\|_{W^{1,p}(\mathbb{R}^n)},
\]
其中 $\gamma =1-n/p$。
:::

::: proof
第一步。首先证明存在常数$C$使得
\[
\begin{aligned}
  {\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}}_{\!\!\!B(x,r)}|u(y)-u(x)|\,dy
  \leq Cr^{1-\frac{n}{p}}\|Du\|_{L^p(\mathbb{R}^n)}.
\end{aligned}
\]
对于$s\in(0,r)$，有
\[
\begin{aligned}
  \int_{\partial B(0,1)}|u(x+sw)-u(x)|\,dS
  &\leq\int_{\partial B(0,1)}\int_0^s|Du(x+tw)|\,dtdS\\
  &=\int_0^s\int_{\partial B(0,1)}\frac{|Du(x+tw)|}{t^{n-1}}t^{n-1}\,dSdt\\
  &=\int_{B(x,s)}\frac{|Du(y)|}{|y-x|^{n-1}}\,dy\\
  &\leq\int_{B(x,r)}\frac{|Du(y)|}{|y-x|^{n-1}}\,dy,
\end{aligned}
\]
两边关于$s^{n-1}ds$从$0$到$r$积分得到
$$
\int_{B(x,r)}|u(y)-u(x)|\,dy\leq
\frac{r^n}{n}\int_{B(x,r)}\frac{|Du(y)|}{|y-x|^{n-1}}\,dy.
$$
由Hölder不等式，进一步得到
\[
\begin{aligned}
  {\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}}_{\!\!\!B(x,r)}|u(y)-u(x)|\,dy
  &\leq C\int_{B(x,r)}\frac{|Du(y)|}{|y-x|^{n-1}}\,dy\\
  &\leq C\bigg(\int_{B(x,r)}\frac{dy}{|y-x|^{(n-1)\frac{p}{p-1}}}\bigg)^{\frac{p-1}{p}}
  \bigg(\int_{B(x,r)}|Du(y)|^p\,dy\bigg)^{\frac{1}{p}}\\
  &\leq C\Big(r^{-(n-1)\frac{p}{p-1}+n}\Big)^\frac{p-1}{p}\|Du\|_{L^p(\mathbb{R}^n)}\\
  &= Cr^{1-\frac{n}{p}}\|Du\|_{L^p(\mathbb{R}^n)}.
\end{aligned}
\]
第二步。对任意$x\in\mathbb{R}^n$，有
\[
\begin{aligned}
  |u(x)|&\leq{\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}}_{\!\!\!B(x,1)}|u(y)-u(x)|\,dy+{\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}}_{\!\!\!B(x,1)}|u(y)|\,dy\\
  &\leq C\|Du\|_{L^p(\mathbb{R}^n)}+C\|u\|_{L^p(\mathbb{R}^n)}\\
  &\leq C\|u\|_{W^{1,p}(\mathbb{R}^n)},
\end{aligned}
\]
即
$$
\sup_{x\in\mathbb{R}^n}|u|\leq C\|u\|_{W^{1,p}(\mathbb{R}^n)}.
$$
第三步。对任意$x,y\in\mathbb{R}^n$，记$r=|x-y|$，有
\[
\begin{aligned}|u(x)-u(y)|\leq{\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}}_{\!\!\!B(x,r)\cap B(y,r)}|u(x)-u(z)|\,dz
+{\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}}_{\!\!\!B(x,r)\cap B(y,r)}|u(y)-u(z)|\,dz.\end{aligned}
\]
再次使用第一步的结论，前一项
\[
\begin{aligned}
  {\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}}_{\!\!\!B(x,r)\cap B(y,r)}|u(x)-u(z)|\,dz
  &\leq C{\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}}_{\!\!\!B(x,r)}|u(x)-u(z)|\,dz\\
  &\leq Cr^{1-\frac{n}{p}}\|Du\|_{L^p(\mathbb{R}^n)},
\end{aligned}
\]
后一项同理，于是得到
$$
|u(x)-u(y)|\leq Cr^{1-\frac{n}{p}}\|Du\|_{L^p(\mathbb{R}^n)},
$$
即
$$
\sup_{x,y\in\mathbb{R}^n}\frac{|u(x)-u(y)|}{|x-y|^{1-\frac{n}{p}}}
\leq C\|Du\|_{L^p(\mathbb{R}^n)}.
$$
第二步与第三步的结论相加，就完成了证明。
:::

::: corollary [对 $W^{1,p}$ 的估计] {@M}
设 $U$ 是 $\mathbb{R}^n$ 中的有界开集，边界是 $C^1$ 曲线，$n<p\leq\infty$，
则存在只与$p,n,U$有关的常数$C$，使对于 $u\in W^{1,p}(U)$ 有
\[
\|u\|_{C^{0,\gamma}(\bar{U})}\le C\|u\|_{W^{1,p}(U)},
\]
其中 $\gamma =1-n/p$。
:::

::: proof
存在 $\bar{u}\in
W^{1,p}(\mathbb{R}^n)$ 使 $\bar{u}$ 有紧支集，限制在 $U$ 上等于 $u$，且
$\|\bar{u}\|_{W^{1,p}(\mathbb{R}^n)}\le C\|u\|_{W^{1,p}(U)}$。
然后找到 $u_m\in C_c^\infty(\mathbb{R}^n)$
使得在空间 $W^{1,p}(\mathbb{R}^n)$ 中 $u_m\to \bar{u}$。用上面的定理，
$Du_m$ 在 $W^{1,p}(\mathbb{R}^n)$ 中构成 Cauchy 列蕴含 $u_m$
在 $C^{0,\gamma}(\mathbb{R}^n)$中构成 Cauchy 列，
于是在 $C^{0,\gamma}(\mathbb{R}^n)$ 中$u_m\to \bar{u}$。
再对$u_m$用上一定理并取极限得
\[
\|\bar{u}\|_{C^{0,\gamma}(\mathbb{R}^n)}
\le C\|\bar{u}\|_{W^{1,p}(\mathbb{R}^n)}.
\]
结合扩张的有界性得到结论。
:::

### 一般的 Sobolev 不等式

整合前两节的内容，即可得到一般的 Sobolev 不等式：

::: theorem
令 $U$ 是 $\mathbb{R}^n$中的有界开集，边界是 $C^1$ 曲线，设 $u\in W^{k,p}(U)$。

1. **$k<n/p$的情况**。这时 $u\in L^q(U)$，并有估计
   \[
   \|u\|_{L^q(U)}\le C\|u\|_{W^{k,p}(U)},
   \]
   其中 $\frac1q=\frac1p-\frac{k}n$，$C$ 是只依赖于 $p,k,n,U$ 的常数。

2. **$k>n/p$ 的情况**。这时
   $u\in C^{k-\lfloor\frac{n}{p}\rfloor-1,\gamma}(\bar{U})$，
   并有估计
   \[
   \|u\|_{C^{k-\lfloor\frac{n}{p}\rfloor-1,\gamma}(\bar{U})}
   \le C\|u\|_{W^{k,p}(U)},
   \]
   其中$\gamma=\begin{cases}
        \big\lfloor\frac{n}{p}\big\rfloor-\frac{n}{p}+1, & \frac{n}{p}\notin\mathbb{N},\\
        \text{任意小于 1 的正数},& \frac{n}{p}\in\mathbb{N},
      \end{cases}$ $C$ 是只依赖于 $p,k,n,U$ 的常数。

:::

::: proof
当$k<n/p$，对各$D^\alpha u,|\alpha|\leq k-1$使用 @GNS
得到一列连续（即有界）嵌入
$$
W^{k,p}(U)\hookrightarrow W^{k-1,\frac{1}{\frac{1}{p}-\frac{1}{n}}}(U)
\hookrightarrow\cdots\hookrightarrow W^{0,\frac{1}{\frac{1}{p}-\frac{k}{n}}}(U)=L^q(U).
$$
当$k>n/p\notin\mathbb{N}$，同上使用 @GNS，
再对各$D^\alpha u,|\alpha|\leq k-\big\lfloor\frac{n}{p}\big\rfloor-1$
使用 @M 得到一列连续嵌入
$$
W^{k,p}(U)\hookrightarrow W^{k-\lfloor\frac{n}{p}\rfloor,
\frac{1}{\frac{1}{p}-\frac{\lfloor\frac{n}{p}\rfloor}{n}}}(U)
\hookrightarrow C^{k-\lfloor\frac{n}{p}\rfloor-1,\gamma}(\bar{U}),
$$
其中$\frac{1}{\frac{1}{p}-\frac{\lfloor\frac{n}{p}\rfloor}{n}}>n$，
$\gamma=1-\frac{n}{p}+\big\lfloor\frac{n}{p}\big\rfloor$。

当$k>n/p\in\mathbb{N}$，对任意$0<\gamma<1$，有一列连续嵌入
$$
W^{k,p}(U)\hookrightarrow W^{k-\frac{n}{p}+1,
\frac{1}{\frac{1}{p}-\frac{\frac{n}{p}-1}{n}}}(U)
=W^{k-\frac{n}{p}+1,n}(U)\hookrightarrow
W^{k-\frac{n}{p}+1,\frac{n}{2-\gamma}}(U)\hookrightarrow
W^{k-\frac{n}{p},\frac{n}{1-\gamma}}(U)\hookrightarrow
C^{k-\frac{n}{p}-1,\gamma}(\bar{U}),
$$
由于$U$有界及$n>\frac{n}{2-\gamma}$得到第二个嵌入，
由 @GNS 得到第一个和第三个嵌入，
由 @M 得到最后一个嵌入。
:::

```terms
Sobolev 不等式:
  en: Sobolev inequality
  de: Sobolev-Ungleichung
  fr: l'inégalité de Sobolev
```
