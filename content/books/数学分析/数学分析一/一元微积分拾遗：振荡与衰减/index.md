---
title: 一元微积分拾遗：振荡与衰减
notices:
  - name: 问题
    items:
      - “Riemann–Lebesgue引理”一节中，对 $f\in C^1$ 的估计 $|A_n|\leqslant \frac{1}{n}\left( \int_{a}^b|f'|+2\right)$ 似乎默认了 $|f|\leqslant 1$，一般应为 $|f(a)|+|f(b)|$ 而非 $2$；阶梯函数情形的等式 $\int_{a}^b \mathbf{1}_{[c,d]}f =\int_c^d \sin(nx) dx$ 左边似乎应为 $\int_a^b \mathbf{1}_{[c,d]}(x)\sin(nx)dx$。
      - “van der Corput估计”一节中，van der Corput 估计的归纳证明里的 $\phi'(c)=0$、$|\phi'(x)|\geqslant \delta$ 似乎应为 $\phi^{(k-1)}(c)=0$、$|\phi^{(k-1)}(x)|\geqslant \delta$；最后一个命题的证明中 $J_\lambda$ 的积分下限 $a$ 似乎应为 $-M$，结尾的不等式左边似乎应为 $|I(\lambda)|$。
---

**修正：** 上次课中关于Liouville对于用初等函数表示原函数的定义中，
我们应该要求所考虑的函数是所谓的**亚纯函数**，这是一个复变函数中的概念。
否则的话，有同学举出了反例子：$\mathbf{1}_{\mathbb{Q}}$ 满足有理函数域上的代数方程 $f^2-f=0$，
但是它没有初等原函数。但是从第一次接触和了解的角度来看，我们就不再做进一步解释。

## 振荡与衰减

这是我们课程的最后一个部分，我们谈论三个相关的话题：
1）Riemann–Lebesgue引理   2）van der Corput型估计   3）某些非绝对收敛的反常积分的收敛判断（请参考第十二次习题关于Abel和Dirichlet判别法，
我们不再赘述）。
这三个话题统一的地方是所考虑的函数“振荡”得很快，从工具方面而言，
我们要通过分部积分来利用函数振荡得很快所以正负部分可能相消这个事实。

## Riemann–Lebesgue引理

我们先从Riemann–Lebesgue引理入手。
这大概是分析中最重要的几个定理之一，无论是定理的含义与证明都值得好好理解：

::: theorem [Riemann–Lebesgue引理]
$[a,b]\subset \mathbb{R}$ 是有界闭区间，$f\in C([a,b])$，对任意的 $n\geqslant 1$，令
\[
A_n=\int_{a}^b f(x) \sin(nx)dx.
\]
那么，
\[
\lim_{n\rightarrow \infty} A_n=0.
\]
:::

与积分的第二中值定理类似，可以先证明一个比较弱的版本：我们假设 $f$ 是连续可微的，
不妨假设 $f\in C^k([a,b])$ 其中 $k\geqslant 1$。

在开始证明之前，先谈论一下所谓的“直观”，当 $n$ 很大的时候，
我们注意到函数 $\sin(nx)$ 在 $[a,b]$ 上振荡得很厉害。
直观上，我们可以假设在局部上 $f(x)$ 这个函数基本上是常数，所以 $\sin(nx)$ 有正有负地振荡，
我们期望正负可以相消，从而对积分的贡献很小。
但是如何从分析上来说明“正负相消”这个事情呢？我们考虑 $\sin(nx)$ 在任意一个区间 $[c,d]$ 上的积分
\[
\int_c^d \sin(nx) dx.
\]
如果用三角不等式来估计这个积分，我们就有
\[
\bigl|\int_c^d \sin(nx) dx\bigr|\leqslant \int_{c}^d |\sin(nx)|dx \leqslant \int_c^d 1 dx=(d-c).
\]
当区间长度变大的时候，右边的界也随之变大。然而，我们可以用“相消性”，实际上就是直接计算这个积分：
\[
\int_c^d \sin(nx) dx=-\frac{1}{n}\int_{c}^d \bigl(\cos(nx)\bigr)'dx=-\frac{1}{n}\cos(nx)\big|_{x=c}^{x=d}=O(\frac{1}{n}).
\]
这个估计很明显比之前的好很多，在这里，我们通过计算它的原函数或者说通过Newton–Leibniz公式／分部积分，
用到了 $\sin$ 振荡的性质。从某种意义上说，一个振荡函数的原函数的大小（$\approx$ 积分）包含了
函数振荡的信息。

根据上面的讨论，我们先假设 $f\in C^k([a,b])$ 其中 $k\geqslant 1$ 来证明Riemann–Lebesgue引理：
\[
\begin{aligned}
A_n&=\int_{a}^b f(x) \sin(nx)dx=-\frac{1}{n}\int_a^b f(x)\!\!\!\!\!\!\!\!\!\!\!\!\underbrace{\bigl(\cos(nx)\bigr)'}_{\text{振荡的函数的原函数应该增长不快}}\!\!\!\!\!\!\!\!\!\!\!\!dx\\
&=\frac{1}{n}\underbrace{\int_{a}^b f'(x) \cos(nx)dx}_{\leqslant \int_{a}^b|f'|}+\frac{1}{n}f(a)\cos(na)-\frac{1}{n}f(b)\cos(nb).
\end{aligned}
\]
从而，我们有
\[
|A_n|\leqslant \frac{1}{n}\left( \int_{a}^b|f'|+2\right).
\]
这说明 $A_n\rightarrow 0$。特别地，我们对 $A_n$ 衰减的速度还有估计（$O(\dfrac{1}{n})$）。

我们注意到上面的证明中我们只用到了 $f$ 的一阶导数。
我们进一步假设 $f$ 在 $[a,b]$ 端点处都消失，即有一个 $\delta>0$，
使得 $f\big|_{[a,a+\delta]}\equiv 0$ 并且 $f\big|_{[b-\delta,b]}\equiv 0$，此时，
我们注意到分部积分的时候，边界项都是零，所以
\[
\begin{aligned}
A_n&=\frac{1}{n} \int_{a}^b f'(x) \cos(nx)dx.
\end{aligned}
\]
现在 $A_n$ 的形式和之前是类似的，只是 $f$ 变为 $f'$，$\sin$ 变为 $\cos$，所以重复上面的过程，
我们可以进行 $k$ 次分部积分，得到
\[
\begin{aligned}
A_n&=\pm \frac{1}{n^2} \int_{a}^b f''(x) \sin(nx)dx\\
&=\pm \frac{1}{n^3} \int_{a}^b f'''(x) \cos(nx)dx\\
&=\cdots=\pm \frac{1}{n^k} \int_{a}^b f^{(k)}(x) \underbrace{\sin(nx)}_{\text{或}\cos(nx)}dx.
\end{aligned}
\]
我们注意到，每次分部积分我们都多获得了一个 $n^{-1}$ 的衰减。
最终，如果 $f\in C^k([a,b])$ 并且 $f$ 在 $a$ 和 $b$ 附近消失，我们证明了 $|A_n|=O(\dfrac{1}{n^k})$。

::: remark*
在上面证明过程中，$f$ 每（通过分部积分）损失一个导数，就获得了 $\dfrac{1}{n}$ 的衰减。
这种通过牺牲导数来换取衰减的机制是下学期课程Fourier分析的部分中（包括之后在调和分析或者偏微分方程的课程中）最重要的机制之一。
:::

我们回到Riemann–Lebesgue定理的证明：

::: proof
我们用光滑（$C^1$）函数来逼近连续函数，这个想法值得好好学习。

假设 $f\in C([a,b])$，我们要证明对于任意的 $\varepsilon>0$，存在 $N$，使得当 $n\geqslant N$ 时，
我们有 $|A_n|< \varepsilon$。实际上，根据Weierstrass–Stone定理，存在多项式 $P(x)$，使得
\[
\sup_{x\in [a,b]}|P(x)-f(x)|<\frac{1}{2}\frac{\varepsilon}{b-a}.
\]
由于 $P(x)\in C^1([a,b])$，根据上面的讨论，我们有
\[
\Bigl|\int_a^b P(x) \sin(nx)dx\Bigr|\leqslant \frac{1}{n}\left( \int_{a}^b|P'|+2\right).
\]
任意选取 $N$，使得 $N>\dfrac{2\left( \int_{a}^b|P'|+2\right)}{\varepsilon}$，
从而当 $n\geqslant N$ 时，我们有
\[
\Bigl|\int_a^b P(x)\sin(nx)dx\Bigr|\leqslant \frac{\varepsilon}{2}.
\]
特别地，我们有
\[
\begin{aligned}
\Bigl|\int_a^b f(x)\sin(nx)dx\Bigr|&\leqslant \Bigl|\int_a^b P(x)\sin(nx)\Bigr|+\int_a^b \bigl|f(x)-P(x)\bigr||\sin(nx)|dx\\
&<\frac{\varepsilon}{2}+\frac{1}{2}\frac{\varepsilon}{b-a}\int_a^b=\varepsilon.
\end{aligned}
\]
这就证明了命题。
:::

我们可以将Riemann–Lebesgue引理加强一些：

::: theorem [Riemann–Lebesgue引理]
$[a,b]\subset \mathbb{R}$ 是有界闭区间，$f\in \mathcal{R}([a,b])$，对任意的 $n\geqslant 1$，令
\[
A_n=\int_{a}^b f(x) \sin(nx)dx.
\]
那么，
\[
\lim_{n\rightarrow \infty} A_n=0.
\]
:::

证明的想法与之前的如出一辙，唯一的不同在于我们用阶梯函数／简单函数来逼近 $f$。
先假设 $f\in \mathcal{E}([a,b])$，根据线性，我们只要对 $f=\mathbf{1}_{[c,d]}$ 来证明即可，
而我们在课程的一开始就已经证明了
\[
\int_{a}^b \mathbf{1}_{[c,d]}f =\int_c^d \sin(nx) dx=O(\frac{1}{n}).
\]
对于一般的函数，按照Riemann积分的定义（请注意我们采取简单函数逼近的定义，
下个学期我们抽象积分的定义也采取这种方式，
从而在Lebesgue积分的范畴里Riemann–Lebesgue引理的证明也是一样的）存在阶梯函数 $\varphi$ 使得
$\displaystyle\int_a^b |\varphi-f|<\varepsilon$。所以，我们有
\[
\begin{aligned}
\Bigl|\int_a^b f(x)\sin(nx)dx\Bigr|&\leqslant \Bigl|\int_a^b \varphi(x)\sin(nx)\Bigr|+\int_a^b \Bigl|f(x)-\varphi(x)\Bigr||\sin(nx)|dx\\
&\leqslant \underbrace{\Bigl|\int_a^b \varphi(x)\sin(nx)\Bigr|}_{\text{阶梯函数的极限 $=0$}}+\underbrace{\int_a^b \Bigl|f(x)-\varphi(x)\Bigr|dx}_{<\varepsilon}.
\end{aligned}
\]
这就证明了命题。

## van der Corput估计

给定两个函数 $\phi(x)$ 和 $a(x)$，其中 $\phi(x)$ 被称作是**相函数**，$a(x)$ 被称作是**振幅函数**，
它们满足

- 1\) $\phi(x)$ 和 $a(x)$ 都是光滑函数；

- 2\) $a(x)$ 具有紧支集，即存在有界闭区间 $I=[-M,M]$，使得 $a(x)$ 在 $I$ 之外都是 $0$。

我们要研究如下振荡积分 $I(\lambda)$ 的衰减：
\[
I(\lambda)=\int_{\mathbb{R}} e^{i\lambda \phi(x)}a(x)dx.
\]
根据 $a$ 具有紧支集的条件，上面的积分实际上是在闭区间 $I$ 上计算的。
仿照前面关于Riemann–Lebesgue引理的讨论，我们有

::: proposition [非驻相法（nonstationary phase）]
假设对任意的 $x\in I$，$|\phi'(x)|\geqslant 1$。
那么，对任意的 $N\in \mathbb{Z}_{>0}$，存在常数 $C_N$，使得
\[
|I(\lambda)|\leqslant \frac{C_N}{\lambda^N}.
\]
:::

::: proof
由于 $|\phi'(x)|\neq 0$，
所以我们可以考虑算子 $L\bigl(F(x)\bigr)=\dfrac{1}{i\lambda\phi'(x)}\dfrac{d}{dx}F(x)$。
直接计算，我们就得到
\[
L\left(e^{i\lambda \phi(x)}\right)=e^{i\lambda \phi(x)}\ \ \Rightarrow \ \  L^N \left(e^{i\lambda \phi(x)}\right)=e^{i\lambda \phi(x)}.
\]
所以，我们有
\[
\begin{aligned}
I(\lambda)&=\int_{\mathbb{R}} \dfrac{a(x)}{i\lambda\phi'(x)}\left(e^{i\lambda \phi(x)}\right)'dx\\
&\stackrel{\text{分部积分}}{=}- \dfrac{1}{i\lambda}\int_{\mathbb{R}} \left(\dfrac{a(x)}{\phi'(x)}\right)' e^{i\lambda \phi(x)}dx\\
&= -\dfrac{1}{i\lambda}\int_{\mathbb{R}} \underbrace{\dfrac{{a'(x)}\phi'(x)-a(x)\phi''(x)}{(\phi'(x))^2}}_{=a_1(x)} e^{i\lambda \phi(x)}dx
\end{aligned}
\]
其中，在分部积分的时候，边界项一定为零。
由此可见，我们只要用 $a_1(x)$ 来代替以前的 $a(x)$，就可以继续进行上面的分部积分的操作。
从而，在进行了 $N$ 次之后，我们就得到了 $\lambda^{-N}$ 的衰减的因子。
命题中要求的参数自然由 $a$ 和 $\phi$ 以及它们的导数的大小决定。
:::

我们考虑一种特殊的振荡积分：
\[
J(\lambda)=\int_{a}^b e^{i\lambda \phi(x)}dx.
\]
也就是说，我们用 $\mathbf{1}_{[a,b]}$ 作为振幅函数。
此时，我们有

::: proposition
假设对任意的 $x\in I$，$|\phi'(x)|\geqslant 1$。如果 $\phi'(x)$ 在 $[a,b]$ 上是单调的，那么，
\[
\bigl|J(\lambda)\bigr|\leqslant \frac{3}{\lambda}.
\]
:::

::: exercise*
如果在上面的条件中我们要求 $|\phi'(x)|\geqslant \delta$，那么结论要相应地变成
\[
\bigl|J(\lambda)\bigr|\leqslant \frac{3}{\delta\lambda}.
\]
:::

::: proof
按照之前的讨论，我们有
\[
\begin{aligned}
J(\lambda)&=\int_a^b \frac{1}{i\lambda\phi'(x)}\left(e^{i\lambda \phi(x)}\right)'dx\\
&\stackrel{\text{分部积分}}{=} -\underbrace{\dfrac{1}{i\lambda}\int_{a}^b \left(\dfrac{1}{\phi'(x)}\right)' e^{i\lambda \phi(x)}dx}_{\mathbf{I}}+\underbrace{\dfrac{1}{i\lambda\phi'(x)} e^{i\lambda \phi(x)}\Big|_{a}^b}_{|~\cdot~|\leqslant \frac{2}{\lambda}}
\end{aligned}
\]
现在只需要控制第一项，这里用到的核心事实是 $\phi'(x)$ 是单调的，
从而 $\left(\dfrac{1}{\phi'(x)}\right)'$ 有确定的符号，所以
\[
\begin{aligned}
\bigl|\mathbf{I}\bigr|&\leqslant \dfrac{1}{\lambda} \int_{a}^b \Bigl|\left(\dfrac{1}{\phi'(x)}\right)'\Bigr| dx=\dfrac{1}{\lambda}\Bigl| \int_{a}^b \left(\dfrac{1}{\phi'(x)}\right)' dx\Bigr|\\
&=\frac{1}{\lambda}\Bigl|\dfrac{1}{\phi'(a)}-\dfrac{1}{\phi'(b)}\Bigr|\leqslant \frac{1}{\lambda}.
\end{aligned}
\]
最后一个不等号是因为 $\dfrac{1}{\phi'(a)}$ 和 $\dfrac{1}{\phi'(b)}$ 的符号相同，这就证明了结论。
:::

::: proposition
假设对任意的 $x\in I=[a,b]$，$|\phi''(x)|\geqslant 1$。那么，
\[
\bigl|J(\lambda)\bigr|\leqslant \frac{4\sqrt{3}}{\lambda^{\frac{1}{2}}}.
\]
:::

::: proof
不妨假设 $\phi''(x)\geqslant 1$，那么，$\phi'(x)$ 是单调递增的函数。
我们假设存在 $c\in [a,b]$ 使得 $\phi'(c)=0$。此时，我们将 $[a,b]$ 分成三个区间
\[
I=I_1\cup I_2 \cup I_3 =[a,c-\delta]\cup [c-\delta,c+\delta]\cup [c+\delta, b].
\]
此时，根据 $\phi''(x)\geqslant 1$ 以及Newton–Leibniz公式，我们知道在 $I_1$ 和 $I_3$ 上，
我们有 $|\phi'(x)|\geqslant \delta$。根据前面的命题，我们有
\[
\Bigl|\int_{I_1}e^{i\lambda \phi(x)}dx \Bigr|\leqslant \frac{3}{\delta\lambda},  \ \ \Bigl|\int_{I_3}e^{i\lambda \phi(x)}dx\Bigr| \leqslant \frac{3}{\delta\lambda}.
\]
在 $I_2$ 上，我们用平凡的估计：
\[
\Bigl|\int_{I_2}e^{i\lambda \phi(x)}dx \Bigr|\leqslant \int_{I_2}1dx=2\delta.
\]
所以，
\[
\begin{aligned}
|J(\lambda)|&\leqslant \Bigl|\int_{I_1}e^{i\lambda \phi(x)}dx \Bigr|+\Bigl|\int_{I_2}e^{i\lambda \phi(x)}dx \Bigr|+\Bigl|\int_{I_3}e^{i\lambda \phi(x)}dx \Bigr|\\
&\leqslant 2\delta+\frac{6}{\delta\lambda}.
\end{aligned}
\]
当 $\delta=\sqrt{\dfrac{3}{\lambda}}$，上面的表达式取得最小值，这恰好是要证明的结论。
:::

::: exercise*
在上面的证明中，如果对任意的 $c\in [a,b]$，$\phi'(c)\neq 0$，试证明同样的结论成立。
:::

::: proposition [van der Corput, $k\geqslant 2$]
假设对任意的 $x\in I=[a,b]$，$|\phi^{(k)}(x)|\geqslant 1$。那么，
\[
\bigl|J(\lambda)\bigr|\leqslant \frac{2^{k+1}}{\lambda^{\frac{1}{k}}}.
\]
:::

::: remark*
van der Corput估计的一个关键点就是右边的界不依赖于所积分区间 $I$ 的长度。
:::

::: proof
我们用归纳法。当 $k=2$ 时，命题已经证明。
现在假设 $k\geqslant 3$ 并且结论对 $k-1$ 成立，我们仿照上面的证明，
不妨假设 $\phi^{(k)}(x)\geqslant 1$，从而 $\phi^{(k-1)}(x)$ 是单调递增的函数。
假设存在 $c\in [a,b]$ 使得 $\phi'(c)=0$。此时，我们将 $[a,b]$ 分成三个区间
\[
I=I_1\cup I_2 \cup I_3 =[a,c-\delta]\cup [c-\delta,c+\delta]\cup [c+\delta, b].
\]
所以在 $I_1$ 和 $I_3$ 上，我们有 $|\phi'(x)|\geqslant \delta$。根据前面的命题，我们有
\[
\Bigl|\int_{I_1}e^{i\lambda \phi(x)}dx \Bigr|\leqslant \frac{2^{k}}{(\delta\lambda)^{\frac{1}{k-1}}},  \ \ \Bigl|\int_{I_3}e^{i\lambda \phi(x)}dx\Bigr| \leqslant \frac{2^{k}}{(\delta\lambda)^{\frac{1}{k-1}}}.
\]
在 $I_2$ 上，我们用平凡的估计：
\[
\Bigl|\int_{I_2}e^{i\lambda \phi(x)}dx \Bigr|\leqslant \int_{I_2}1dx=2\delta.
\]
所以，
\[
\begin{aligned}
|J(\lambda)|&\leqslant \Bigl|\int_{I_1}e^{i\lambda \phi(x)}dx \Bigr|+\Bigl|\int_{I_2}e^{i\lambda \phi(x)}dx \Bigr|+\Bigl|\int_{I_3}e^{i\lambda \phi(x)}dx \Bigr|\\
&\leqslant \frac{2^{k+1}}{(\delta\lambda)^{\frac{1}{k-1}}}+2\delta.
\end{aligned}
\]
当 $\delta=2^{k-1}\lambda^{-\frac{1}{k}}$ 时恰好是要证明的结论。
:::

最终我们回到
\[
I(\lambda)=\int_{\mathbb{R}} e^{i\lambda \phi(x)}a(x)dx.
\]

::: proposition
假设 $a(x)$ 在 $[-M,M]$ 之外恒为零并且对任意的 $x\in [-M,M]$，$|\phi''(x)|\geqslant 1$。那么，
\[
\bigl|I(\lambda)\bigr|\leqslant \frac{C}{\sqrt{\lambda}},
\]
其中，$C=4\sqrt{3}\displaystyle\int_{\mathbb{R}}|a'(x)|dx$。
:::

::: proof
回忆一下，我们利用振荡函数的原函数可以研究它的相消性。据此，我们自然地定义
\[
J_\lambda(x)=\int_a^x e^{i\lambda \phi(t)}dt.
\]
所以，
\[
\begin{aligned}
I(\lambda)&=\int_{\mathbb{R}} J_\lambda(x)' a(x)dx\\
&=-\int_{\mathbb{R}} J_\lambda(x) a(x)'dx+J_\lambda(x) a(x)\big|_{x=-M}^{x=M}.
\end{aligned}
\]
我们可以对 $J_\lambda(x)$ 用上面的估计，所以
\[
\begin{aligned}
I(\lambda)\leqslant \frac{4\sqrt{3}}{\lambda^{\frac{1}{2}}}  \int_{\mathbb{R}}|a(x)'|dx.
\end{aligned}
\]
这就完成了证明。
:::

## 建议阅读：第一学期课程没有覆盖的内容

由于时间的限制，部分重要的或者经典的内容并没有被覆盖，
建议同学们在假期的时候可以考虑自己查阅参考书进行学习（我们在下个学期也会尝试在作业或其它的场合补充）：

- Arzelà–Ascoli引理

  研究一列有界连续函数在何种条件下有收敛子序列。

- $\Gamma$-函数的构造和渐近行为。

- 区间上特殊的多项式函数以及应用：Hermite多项式等。

- 函数的卷积。

- 某些特殊类型函数的初等原函数的求解，比如有理函数等（几乎所有经典的数学分析参考书都有这样的章节）。

- 幂级数的收敛半径与幂函数定义的函数。

- Euler–Maclaurin展开及应用。
