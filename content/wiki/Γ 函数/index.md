---
title: '$\Gamma$ 函数'
aliases: [Gamma 函数]
categories: [复分析, 特殊函数]
---

<problems>
- “性质”一节中“刻画”的证明第一个不等式链似乎有误：最后一步对 $0<x<1$ 不成立，界似乎应为 $\Gamma(a)+\Gamma(a+1)$；中间的积分也缺少一个绝对值符号。
- “性质”一节余元公式的显式证明中，第一个公式最后的积分似乎应为 $\int_0^1\left(1-t\over t\right)^{z-1}t^{-1}\mathrm dt$。
</problems>

**$\bm\Gamma$ 函数**是[[阶乘]]的推广，
可以定义在所有[[复数]]上（除了负整数和 $0$ 以外），
其取值为复数。
$\Gamma$ 函数满足[[函数方程]]
\[
\Gamma (x + 1) = x \, \Gamma (x),
\]
并且 $\Gamma (1) = 1$，从而对正整数 $n$，有
\[
\Gamma (n) = (n - 1)!.
\]

$\Gamma$ 函数是复平面上的[[亚纯函数]]。

## 定义

::: definition [$\Gamma$ 函数]
设复数 $z \in \mathbb{C}$ 满足 $\operatorname{Re} z > 0$。
我们定义
\[
\Gamma (z) =
\int _0 ^\infty x^{z - 1} \, e^{-x} \, d x.
\]
这定义了复平面的子集
$\{ z \in \mathbb{C} \mid \operatorname{Re} z > 0 \}$
上的[[全纯函数]]。分部积分，有
$$
z\Gamma(z)=\int_0^\infty e^{-x}d(x^z)
=-\int_0^\infty x^zd(e^{-x})=\int_0^\infty x^ze^{-x}dx=\Gamma(z+1).
$$
用此等式可将其延拓为复平面上[[亚纯函数]]
\[
\Gamma \colon
\mathbb{C} \setminus \mathbb{Z}_{\leq 0} \to \mathbb{C},
\]
称为 **$\Gamma$ 函数**。
:::

## 性质

::: proposition [整数处的行为]
对 $n\in\mathbb{Z}_+$，$\Gamma(n)=(n-1)!$。对 $n\in\mathbb{Z}_{\le0}$，
$\Gamma$ 在 $n$ 处有一阶极点，留数为 $\frac{(-1)^n}{(-n)!}$。
:::

::: proof
计算
$$
\Gamma(1)=\int_0^\infty e^{-x}dx=-e^{-x}\big|^{\infty}_0=1.
$$
剩下可由 $z\Gamma(z)=\Gamma(z+1)$ 轻易推出。
:::

::: proposition [刻画]
对任意正实数 $a$，$\Gamma$ 函数都在条带
$\{z\in\mathbb{C}\mid a\le\operatorname{Re}z<a+1\}$
上有界。反过来，给定包含以上条带的开区域 $D$ 及其上全纯函数
$f$，如 $f$ 在条带上有界，且对 $z\in D\cap(D-1)$ 上满足
$zf(z)=f(z+1)$，就有 $f$ 是 $\Gamma$ 的常数倍。
:::

::: proof
对 $z\in\mathbb{C}$ 满足 $a\le\operatorname{Re}z<a+1$，
$$
|\Gamma(z)|=\left|\int_0^\infty x^{z-1}e^{-x}dx\right|
\le\int_0^\infty|x^{z-1}|e^{-x}dx=\int_0^\infty|x^{\operatorname{Re}z-1}e^{-x}dx
\le\int_0^\infty x^ae^{-x}dx=\Gamma(a+1),
$$
所以有界。取定满足命题中条件的 $f$。首先用 $zf(z)=f(z+1)$
可将其延拓到 $\mathbb{C}\setminus\mathbb{Z}_{\le0}$，仍记为 $f$，
下证 $f(z)=f(1)\Gamma(z)$。仍由 $zf(z)=f(z+1)$，可得
$f(z)$ 在 $\mathbb{Z}_{\le0}$ 处为至多一阶的极点，在 $n\in\mathbb{Z}_{\le0}$
处留数为 $\frac{(-1)^n}{(-n)!}f(1)$。于是令
$h(z)=f(z)-f(1)\Gamma(z)$，则 $h(z)$ 为整函数，亦满足
$zh(z)=h(z+1)$ 以及与 $f$ 同样的有界性条件。要证 $h$ 恒为零。

先说明 $h(z)$ 在条带
$\{z\in\mathbb{C}\mid 0\le\operatorname{Re}z\le1\}$
中有界。条带中 $|\operatorname{Im}z|\le1$ 的部分是个紧集，
整函数在其中自然有界；而在 $|\operatorname{Im}z|>1$
部分的有界性则可由函数方程从条带
$\{z\in\mathbb{C}\mid a\le\operatorname{Re}z<a+1\}$
处移过来。所以 $h(z)$ 在
$\{z\in\mathbb{C}\mid 0\le\operatorname{Re}z\le1\}$
有界。

现考虑 $H(z)=h(z)h(1-z)$。则有整函数等式
$$
zH(z)=zh(z)h(1-z)=h(z+1)h(1-z)=h(z+1)h(1-(z+1)+1)
=(1-(z+1))h(z+1)h(1-(z+1))=-zH(z+1),
$$
从而 $H(z+1)=-H(z)$。又 $H(z)$ 在
$\{z\in\mathbb{C}\mid 0\le\operatorname{Re}z\le1\}$
有界，故它在 $\mathbb{C}$ 上有界。由 [[Liouville 定理]]
$H$ 为常函数；由 $H(z+1)=-H(z)$ 知其恒为零。两个整函数之积为
$0$ 则其中至少一个为 $0$，这样便得到 $h=0$，也就完成了命题的证明。
:::

::: proposition [Weierstraß 乘积公式]
$\frac{1}{\Gamma(z)}$为整函数，且有 [[Weierstraß 乘积公式]]
\[
\frac{1}{\Gamma(z)}=ze^{\gamma z}\prod\limits_{k=1}^\infty\left(1+\frac zk\right)e^{-\frac zk},
\]
其中
$\gamma=\lim_{n\to\infty}\left(\sum_{k=1}^n\frac{1}{k}-\log n\right)$
是 [[Euler–Mascheroni 常数|Euler 常数]]。
:::

::: proof
记等式右边为 $G(z)$，并令
$$
G_n(z)=ze^{-(\log n)z}\prod_{k=1}^n\left(1+\frac{z}{k}\right),
$$
则由于 $z$ 有界时
$\log\left(\left(1+\frac{z}{k}\right)e^{-\frac{z}{k}}\right)=O\left(k^{-2}\right)$，
不难发现 $G_n$ 在 $\mathbb{C}$ 上内闭一致收敛到 $G$。计算
$$
G_n(z+1)=(z+1)e^{-(\log n)(z+1)}\prod_{k=1}^n\left(1+\frac{z+1}{k}\right)
=\frac{z+n+1}{nz}G_n(z),
$$
令 $n\to\infty$ 得 $zG(z+1)=G(z)$。计算
$$
G_n(1)=\frac{1}{n}\prod_{k=1}^n\left(1+\frac{1}{k}\right)=\frac{n+1}{n},
$$
令 $n\to\infty$ 得 $G(1)=1$。最后，对 $\operatorname{Re}z>0$，
$|z|\ge\operatorname{Re}z$，$\left|1+\frac{z}{k}\right|\ge1+\frac{\operatorname{Re}z}{k}$，
$|e^{-(\log n)z}|=|e^{-(\log n)\operatorname{Re}z}|$，
于是 $|G_n(z)|\ge|G_n(\operatorname{Re}z)|$，从而
$|G(z)|\ge|G(\operatorname{Re}z)|$，$|G(z)|^{-1}\le|G(\operatorname{Re}z)|^{-1}$；
特别地，对任意正实数 $a<b$，$\frac{1}{G(z)}$ 在条带
$\{z\in\mathbb{C}\mid a\le\operatorname{Re}z\le b\}$
中有界。所以由 $\Gamma$ 函数的刻画即知 $\Gamma(z)=\frac{1}{G(z)}$。
:::

::: proof [显式证明]
设$H_n$为前$n$个自然数的倒数和，则根据[[Euler–Maclaurin 公式]]可知：
\[
H_n=\log n+\gamma+O\left( \frac1n \right)
\]
这意味着对于每个固定的$z$总有：
\[
n^z=e^{z\log n}=e^{z(H_n-\gamma)}\left\{ 1+O\left( \frac1n \right) \right\}
\]
因此根据 @eqn-gamma-prod 可知：
\[
{1\over\Gamma_n(z)}\sim ze^{\gamma z}\prod_{k=1}^n\left(1+\frac zk\right)e^{-\frac zk}
\]
此时令$n\to\infty$便得结论。
:::

::: proposition [Euler 乘积式]
\[
\frac{1}{\Gamma(z)}=z\prod\limits_{k=1}^\infty\left(1+\frac zk\right)\left(1+\frac 1k\right)^{-z}.
\]
:::

::: proof
注意等式右边的前 $n$ 项乘积为
$$
z\prod_{k=1}^n\left(1+\frac{z}{k}\right)\left(1+\frac{1}{k}\right)^{-z}=z(n+1)^{-z}\prod_{k=1}^n\left(1+\frac{z}{k}\right),
$$
与上一命题证明中的 $G_n(z)$ 相差无几，立得结论。
:::

::: proof [显式证明]
定义函数列：
\[
\Gamma_n(z)=\int_0^nx^{z-1}\left(1-\frac xn\right)^n\mathrm dx
\]
由[[控制收敛]]可知，对 $\operatorname{Re}z>0$，有
$\Gamma_n(z)\to\Gamma(z)$。计算
\[
\begin{aligned}
  \Gamma_n(z)
  &=n^z\int_0^1t^{z-1}(1-t)^n\mathrm dt=n^z\mathrm{B}(z,n+1) \\
  &=n^z{\Gamma(z)\Gamma(n+1)\over\Gamma(z+n+1)}={\Gamma(z)n^zn!\over\Gamma(z+n)(z+n)} \\
  &={n^zn!\over z(z+1)(z+2)\cdots(z+n-1)(z+n)}
\end{aligned}
\]
便知

```math {@eqn-gamma-prod}
\Gamma_n(z)={n^z\over z}\prod_{k=1}^n{k\over z+k}
```

另一方面，根据：
\[
n\sim n+1=\frac12\cdot\frac32\cdot\frac43\cdots{n\over n-1}\cdot{n+1\over n}
\]
可知：
\[
\Gamma_n(z)\sim\frac1z\prod_{k=1}^n\left( 1+\frac1k \right)^z\left(1+\frac zk\right)^{-1}
\]
令$n\to\infty$即得结论。
:::

::: proposition [余元公式]
\[
\Gamma(z)\Gamma(1-z)=\frac{\pi}{\sin\pi z}.
\]
特别地，$\Gamma\left(\frac{1}{2}\right)=\sqrt\pi$。
:::

::: proof
记 $H(z)=\Gamma(z)\Gamma(1-z)-\frac{\pi}{\sin\pi z}$。观察 $\Gamma(z)\Gamma(1-z)$ 与
$\frac{\pi}{\sin\pi z}$ 在其仅有的一阶极点即 $\mathbb{Z}$ 上的留数，
知 $H(z)$ 为整函数。又由 $\Gamma$ 的函数方程以及 $\sin z=\frac{e^{iz}-e^{-iz}}{2i}$，
知 $\Gamma(z)\Gamma(1-z)$ 与 $\frac{\pi}{\sin\pi z}$
都在 $\{z\in\mathbb{C}\mid 0\le\operatorname{Re}z\le1,\,|\operatorname{Im}z|\ge1\}$
中有界，从而 $H$ 在 $\{z\in\mathbb{C}\mid 0\le\operatorname{Re}z\le1\}$
中有界。由于
$$
z\Gamma(z)\Gamma(1-z)=\Gamma(z+1)\Gamma(1-z)
=\Gamma(z+1)\Gamma(1-(z+1)+1)=-z\Gamma(z+1)\Gamma(1-(z+1))
$$
以及 $\frac{\pi}{\sin\pi(z+1)}=-\frac{\pi}{\sin\pi z}$，
有 $H(z+1)=-H(z)$。于是 $H$ 在 $\mathbb{C}$ 上有界，
是常数，且为 $0$。命题得证。
:::

::: proof [显式证明]
设 $z=u+iv$ 其中 $0<u<1$。由 [[$\mathrm{B}$ 函数]]的性质知
\[
\Gamma(z)\Gamma(1-z)
=\int_0^1t^{-z}(1-t)^{z-1}\mathrm dt=\int_0^1\left(1-t\over t\right)^{z-1}t\mathrm dt
\]
设 $e^w=t^{-1}-1$，则有：

```math {@eqn-z1-z}
\Gamma(z)\Gamma(1-z)=\int_{-\infty}^\infty{e^{zw}\over1+e^w}\mathrm dw
```

对于 @eqn-z1-z 右侧的积分，由[[留数定理]]可知：

```math {@eqn-z1-z-T}
\int_{-T}^T{e^{zw}\over1+e^w}\mathrm dw=\int_{(\pi i+)}+\int_{-T}^{-T+2\pi i}+\int_{-T+2\pi i}^{T+2\pi i}+\int_{T+2\pi i}^T
```

当$w\to\pi i$时：
\[
{e^{zw}\over1+e^w}\sim{e^{z\pi i}\over\pi i-w}
\]
所以有：
\[
\int_{(\pi i+)}=-2\pi ie^{z\pi i}
\]
另一方面当$w=x+iy$时根据$|e^{wz}|=e^{ux-vy}$，可知：
\[
\int_{-T}^{-T+2\pi i}=O(e^{-uT})
\]
\[
\int_{T+2\pi i}^T=O(e^{(u-1)T})
\]
\[
\int_{-T+2\pi i}^{T+2\pi i}=e^{2\pi iz}\int_{-T}^T{e^{wz}\over1+e^w}\mathrm dw
\]
将这些结果代入回 @eqn-z1-z-T 并令$T\to+\infty$，则结合 @eqn-z1-z 就有：
\[
\Gamma(z)\Gamma(1-z)={2\pi ie^{\pi iz}\over e^{2\pi iz}-1}
={2\pi i\over e^{\pi iz}-e^{-\pi iz}}={\pi\over\sin(\pi z)}
\]
:::

::: proposition [Legendre 倍增公式]
\[
\Gamma\left(\frac z2\right)\Gamma\left(\frac{z+1}2\right)
=\frac{\sqrt\pi}{2^{z-1}}\Gamma(z).
\]
:::

::: proof
只需注意到 $\frac{2^{z-1}}{\sqrt\pi}\Gamma\left(\frac z2\right)\Gamma\left(\frac{z+1}2\right)$
满足 $\Gamma$ 函数的刻画。
:::

::: proof [显式证明]
由[[$\mathrm{B}$ 函数]]的性质可知：
\[
\begin{aligned}
  {\Gamma^2(s)\over\Gamma(2s)}
  &=2\int_0^{\pi/2}\sin^{2s-1}\theta\cos^{2s-1}\theta\mathrm d\theta
  =2^{1-2s}\int_0^{\pi/2}(2\sin\theta\cos\theta)^{2s-1}\mathrm d(2\theta) \\
  &=2^{1-2s}\int_0^\pi\sin^{2s-1}\phi\mathrm d\phi=2^{1-2s}\left( \int_0^{\pi/2}+\int_{\pi/2}^\pi \right)\sin^{2s-1}\phi\mathrm d\phi \\
  &=2^{1-2s}\cdot2\int_0^{\pi/2}\sin^{2s-1}\phi\mathrm d\phi=2^{1-2s}\mathrm{B}\left( s,\frac12 \right)={2^{1-2s}\Gamma\left(\frac12\right)\Gamma(s)\over\Gamma\left( s+\frac12 \right)}
\end{aligned}
\]
根据$\Gamma\left( \frac12 \right)=\sqrt\pi$，可知：

\[
\Gamma(s)\Gamma\left( s+\frac12 \right)={\sqrt\pi\over2^{2s-1}}\Gamma(2s)
\]

最后代入$z=2s$即得结论。
:::

::: proposition [[[Stirling 公式]]]
设$-\pi+\delta<\arg z<\pi-\delta$，则
\[
\log\Gamma(z)=\left(z-\frac{1}{2}\right)\log z-z+\log\sqrt{2\pi}+O(|z|^{-1}),
\]
其中 $O$ 中的常数只依赖于$\delta$。
:::

::: proof
在 $\mathbb{C}\setminus\mathbb{R}_{\le0}$ 上定义函数
$$
h(z)=\left(z+\frac{1}{2}\right)(\log(z+1)-\log z)-1.
$$
先说明在 $\left|z+\frac{1}{2}\right|\ge1$ 时 $|h(z)|\le\frac{1}{2}\left|\frac{1}{2z+1}\right|^2$。
令 $w=\frac{1}{2z+1}$，则 $h(z)=\frac{1}{2w}\log\frac{1+w}{1-w}-1$，
要证明这在 $|w|\le\frac{1}{2}$ 时小于等于 $\frac{1}{2}|w|^2$。
将其在 $0$ 处 [[Taylor 定理|Taylor 展开]]，得
$$
\frac{1}{2w}\log\frac{1+w}{1-w}-1=\sum_{k=1}^\infty\frac{w^{2k}}{2k+1},
$$
故由等比数列求和公式，其显然小于等于 $\frac{1}{2}|w|^2$。于是求和
$$
H(z)=\sum_{k=0}^\infty h(z+k)
$$
在 $\mathbb{C}\setminus\mathbb{R}_{\le0}$ 内闭一致收敛，且在区域
$\{z\in\mathbb{C}\mid-\pi+\delta<\arg z<\pi-\delta\}$
上为 $O(|z|^{-1})$。考虑 $\mathbb{C}\setminus\mathbb{R}_{\le0}$ 上的函数
$$
g(z)=\exp\left(\left(z-\frac{1}{2}\right)\log z-z+H(z)\right).
$$
首先，计算
$$
g(z+1)=\exp\left(\left(z+\frac{1}{2}\right)\log(z+1)-(z+1)+H(z+1)\right)
=\exp\left(\left(z+\frac{1}{2}\right)\log(z+1)-z-1+H(z)-h(z)\right)
=zg(z).
$$
其次，在 $2\le\operatorname{Re}z\le3$ 时，由 $|h(z)|\le\frac{1}{2}\left|\frac{1}{2z+1}\right|^2$
容易发现 $H(z)$ 有界；计算 $\operatorname{Re}\left(\left(z-\frac{1}{2}\right)\log z\right)
  =\left(\operatorname{Re}z-\frac{1}{2}\right)\log|z|-\operatorname{Im}z\arg z$，
由其在 $\operatorname{Im}z\to\infty$ 时趋于 $-\infty$
可知 $\exp\left(\left(z-\frac{1}{2}\right)\log z\right)$
有界；最后 $\exp(-z)$ 在条带上显然有界；故 $g$ 在其上有界。
于是 $g$ 是 $\Gamma$ 函数的常数倍，设 $g=A\Gamma$。则由
Legendre 倍增公式，
$$
g\left(\frac{z}{2}\right)g\left(\frac{z+1}{2}\right)=A\frac{\sqrt\pi}{2^{z-1}}g(z),
$$
即
$$
A=\frac{2^{z-1}}{\sqrt\pi}\exp\left(\frac{z-1}{2}\log\frac{z}{2}+\frac{z}{2}\log\frac{z+1}{2}-\left(z-\frac{1}{2}\right)\log z-\frac{1}{2}+H\left(\frac{z}{2}\right)+H\left(\frac{z+1}{2}\right)-H(z)\right)
=\frac{1}{\sqrt{2\pi}}\left(1+\frac{1}{z}\right)^{\frac{z}{2}}\exp\left(-\frac{1}{2}+H\left(\frac{z}{2}\right)+H\left(\frac{z+1}{2}\right)-H(z);\right)
$$
令 $z\to+\infty$，由于 $\lim_{z\to+\infty}H(z)=0$，
$\lim_{z\to\infty}\left(1+\frac{1}{z}\right)^{\frac{z}{2}}=\sqrt{e}$，
故有 $A=\frac{1}{\sqrt{2\pi}}$。于是
$$
\Gamma(z)=\exp\left(\left(z-\frac{1}{2}\right)\log z-z+\log\sqrt{2\pi}+H(z)\right),
$$
且在区域
$\{z\in\mathbb{C}\mid-\pi+\delta<\arg z<\pi-\delta\}$
上 $H(z)$ 为 $O(|z|^{-1})$，即得欲证。
:::

::: proof [显式证明]
对 @eqn-gamma-prod 取对数可知：
\[
\log\Gamma_n(z)=z\log n+\sum_{1\le k\le n}\log k-\sum_{0\le k\le n}\log(z+k)
\]
代入适用于正整数$n$的 Stirling 公式，即得：
\[
\log\Gamma_n(z)=\left(z+n+\frac12 \right)\log n-n+\frac12\log2\pi-\sum_{0\le k\le n}\log(z+k)+O\left( \frac1n \right)
\]
对于剩下的和式，代入[[Euler–Maclaurin 公式]]，便有：
\[
\begin{aligned}
  \sum_{0\le k\le n}\log(z+k)
  &=\int_0^n\log(z+x)\mathrm dx+\frac12\log z+\frac12\log(z+n)+\int_0^n{\overline B_1(x)\over z+x}\mathrm dx \\
  &=\left(z+n+\frac12\right)\log(z+n)-n-\left( z-\frac12 \right)\log z+\int_0^n{\overline B_1(x)\over z+x}\mathrm dx
\end{aligned}
\]
将此结论回代，得：
\[
\log\Gamma_n(z)=\left( z-\frac12 \right)\log z+\left( z+n+\frac12 \right)\log{n\over z+n}+\frac12\log2\pi-\int_0^n{\overline B_1(x)\over z+x}\mathrm dx+O\left( \frac1n \right)
\]
利用对数函数的性质，我们知道：
\[
\begin{aligned}
  \left( z+n+\frac12 \right)\log{n\over z+n}
  &=-\left( z+n+\frac12 \right)\log\left( 1+\frac zn \right) \\
  &=-\left( z+n+\frac12 \right)\left\{ \frac zn+O\left( |z|^2\over n^2 \right) \right\} \\
  &=-z+O\left( |z|^3\over n \right)
\end{aligned}
\]
所以当$n\to\infty$时我们就得到了适用于复数的 Stirling 公式：

```math {@eqn-emstirling}
\log\Gamma(z)=\left( z-\frac12 \right)\log z-z+\frac12\log2\pi-\int_0^\infty{\overline B_1(x)\over z+x}\mathrm dx
```

由于我们先前要求了$z$不落在负实轴上，所以最后的积分必然收敛。
再结合周期 Bernoulli 函数的性质分部积分，可知$|z|\to\infty$时：
\[
\int_0^\infty{\overline B_1(x)\over x+z}\mathrm dx=\left.{B_2(x)\over2(x+z)}\right|_0^\infty+\frac12\int_0^\infty{\overline B_2(x)\over(x+z)^2}\mathrm dx=O\left( 1\over|z| \right)
\]
将这个渐近上界与 @eqn-emstirling 合并，便得定理。
:::

::: proposition [另一个刻画，Bohr–Mollerup]
$\Gamma$ 在 $\mathbb{R}_+$ 对数凸，即 $\log\Gamma$ 凸。
反过来如 $f\colon\mathbb{R}_+\to\mathbb{R}_+$ 满足
$f(x+1)=xf(x)$，且 $\log f$ 凸，则 $f(x)=f(1)\Gamma(x)$。
:::

::: proof
由 $\Gamma$ 函数的 Weierstraß 乘积公式得
$$
(\log\Gamma)'=-\gamma-\frac{1}{z}-\sum_{k=1}^\infty\left(\frac{1}{z+k}-\frac{1}{k}\right),
$$
再求导得
$$
(\log\Gamma)''=\sum_{k=0}^\infty\frac{1}{(z+k)^2}>0,
$$
故 $\Gamma$ 在 $\mathbb{R}_+$ 对数凸。如函数 $f$ 满足命题中条件，
则至少它连续。除以 $f(1)$，不妨设 $f(1)=1$，则对 $n\in\mathbb{Z}_+$，
$f(n)=\Gamma(n)=(n-1)!$；对 $x\in(0,1)$，由对数凸得
$$
\log f(n+x)\le(1-x)\log f(n)+x\log f(n+1),
$$
$$
\log f(n+1)\le x\log f(n+x)+(1-x)\log f(n+x+1),
$$
即
$$
n!(n+x)^{x-1}\le f(n+x)\le n!n^{x-1}.
$$
将 $f(n+x)$ 用函数方程展成 $f(x)$ 得
$$
n!n^x\left(1+\frac{x}{n}\right)^x\prod_{k=0}^n(x+k)^{-1}\le f(x)\le n!n^x\left(1+\frac{x}{n}\right)\prod_{k=0}^n(x+k)^{-1}.
$$
令 $n\to \infty$，用 Euler 乘积式即得结论。对 $x\in(0,1)$
得到结论之后用函数方程即可完成证明。
:::

```terms
'$\Gamma$ 函数':
  en: gamma function
  de: Gammafunktion :f
  fr: fonction gamma :f
  grc: γάμμα συνάρτησις :f
  la: functio gamma :f
```
