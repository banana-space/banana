---
title: 导数的定义与计算
---

## 函数和映射的微分学

::: definition
假设 $f$ 是定义在区间 $I\subset \mathbb{R}$ 上的实值函数，$x_0\in I$ 是一个给定的点。如果极限
\[
\lim_{h\rightarrow 0}\frac{f(x_0+h)-f(x_0)}{h}
\]
存在，我们就称 $f$ 在 $x_0$ 处**可导**或者**可微**（可微分）并用 $f'(x_0)$ 记这个极限。
如果 $f$ 在任意 $x\in I$ 处都可微，我们就说 $f$ 是 $I$ 上的**可微函数**。
进一步，如果 $f'(x)\in C(I)$，
我们就说 $f$ 是**连续可微的**并且将所有 $I$ 上连续可微的函数记作 $C^1(I)$。
:::

当导数存在时，我们也用下面的极限来写导数：
\[
f'(x_0)=\lim_{x\rightarrow x_0}\frac{f(x)-f(x_0)}{x-x_0}.
\]

::: remark*
我们注意到，如果 $f$ 在 $x_0$ 处可微，那么 $f$ 在 $x_0$ 处连续：因为
\[
\lim_{x\rightarrow x_0}\bigl(f(x)-f(x_0)\bigr)=\lim_{x\rightarrow x_0}\frac{f(x)-f(x_0)}{x-x_0} \lim_{x\rightarrow x_0}(x-x_0)=0.
\]
但是，并不是连续的函数都可微分，比如说函数 $f(x)=|x|$：在 $x_0=0$ 处，当 $x>0$ 时，
\[
\lim_{x\rightarrow 0}\frac{x-0}{x-0}=1.
\]
当 $x<0$ 时，我们有
\[
\lim_{x\rightarrow 0}\frac{-x-0}{x-0}=-1.
\]
这说明 $f'(0)=\displaystyle\lim_{x\rightarrow 0}\frac{f(x)-f(0)}{x-0}$ 不存在。
直观上，连续但是不可微的东西有“尖儿”。
:::

::: example*
根据定义，我们可以计算如下两个函数的导数：

- 1\) $f(x)=c$，其中 $c$ 为常数。那么，$(c)'=0$。

- 2\) $f(x)=x$。那么，$(x)'=1$。

:::

::: exercise*
标准的微积分教材都有左导数和右导数的概念，请“望文生义”地定义它们。
进一步证明，$f$ 在 $x_0$ 处的导数存在当且仅当 $f$ 在 $x_0$ 处的左右导数都存在并且相等。
:::

::: remark* [多重导数与记号]
假设 $f$ 是可微函数并且其 $f'$ 也可微，我们就可以继续计算 $f'$ 的导数 $(f')'$。
（如果可能的话）我们可以重复这个过程来求 $k$-次导数
$\overbrace{((\cdots((f')')'\cdots)')'}^{\text{$k$-个 $'$}}$。
习惯上，人们用符号 $f^{(k)}$ 表示 $f$ 的 $k$-次导数而两次或三次导数经常记作 $f''(x)$ 和 $f'''(x)$。

另外，如果 $f$ 在 $I$ 上可微分，也用 $\dfrac{df}{dx}$ 来表示 $f'$。
这种写法的好处是我们可以用算子／映射的观点来写微分，一如之前对函数所强调的。
比方说，我们有如下的映射（算子：把函数映射为函数／数的映射）：
\[
\frac{d}{dx}\colon  C^1(I)\rightarrow C(I).
\]

我们还用 $\dfrac{d^k f}{dx^k}$ 来表示 $f^{(k)}$，即用算子 $\dfrac{d^k }{dx^k}$ 表示求了 $k$-次导数。
如果要强调 $f^{(k)}$ 在一个点 $x_0$ 处的值，更标准的记号是 $\dfrac{d^k f}{dx^k}\Big|_{x=x_0}$。
比方说，$\dfrac{d f}{dx}\Big|_{x=x_0}=f'(x_0)$。
如果 $f$ 可以在区间 $I$ 上求 $k$ 次导数并且得到的 $f^{(k)}$ 也是连续的，
我们就称 $f$ 是 $k$-次连续可微的并将这样函数的全体记作 $C^{k}(I)$。
记号 $C^{\infty}(I)$ 的意思很明显：它代表 $I$ 上无限次连续可微函数的全体。

我们注意到 $C^{\infty}(I)\neq \emptyset$，比如说常数函数 $1\in C^{\infty}(I)$。
:::

::: remark* [无穷小量与导数]
假设 $f$ 在 $x_0$ 处可微，我们令 $r(h)=\dfrac{f(x_0+h)-f(x_0)}{h}-f'(x_0)$，
其中 $h$ 定义在某个区间 $(-\varepsilon,\varepsilon)$ 上面。
按照导数的定义，当 $h\rightarrow 0$ 时，有 $r(h)\rightarrow 0$。
在分析学中，我们通常说 $r(h)$ 是 **（$h\rightarrow 0$ 时的）无穷小量**，记作 $r(h)=o(1)$。
从而，我们经常说（记）$\dfrac{f(x_0+h)-f(x_0)}{h}-f'(x_0)=o(1)$。在形式上，人们还用如下的写法：
\[
f(x_0+h)=f(x_0)+f'(x_0)h +o(h),
\]
其中我们暂且认为 $o(h)=o(1)h$。这都是数学分析中的黑话，只是为了说话方便或者为了形式上便于记忆。
严格地讲，我们有
\[
g(h)=f(x_0+h)-f(x_0)-f'(x_0)h,
\]
其中 $\displaystyle \lim_{h \rightarrow 0}\frac{g(h)}{h}=0$。
:::

## 导数的计算法则

我们首先要解决的问题是导数的计算法则。
由于导数是用极限来定义的，极限的运算法则可以很容易地翻译成导数的运算法则：

::: proposition [四则运算]
假设函数 $f$ 和 $g$ 在 $(a,b)$ 上有定义并且在 $x_0\in(a,b)$ 处可微，那么

- 1\) $f\pm g$ 在 $x_0$ 处可微并且 $(f\pm g)'(x_0)=f'(x_0)\pm g'(x_0)$。

- 2\) $f\cdot g$ 在 $x_0$ 处可微并且 $(f\cdot g)'(x_0)=f'(x_0)g(x_0)+f(x_0)g'(x_0)$。

- 3\) 如果 $g(x_0)\neq 0$，
  那么 $\dfrac{f}{g}$ 在 $x_0$ 处可微并且
  $\bigl(\dfrac{f}{g}\bigr)'(x_0)=\dfrac{f'(x_0)g(x_0)-f(x_0)g'(x_0)}{g(x_0)^2}$。
  特别地，
  我们有 $\dfrac{1}{g}$ 在 $x_0$ 处可微并且
  $\bigl(\dfrac{1}{g}\bigr)'(x_0)=-\dfrac{g'(x_0)}{g(x_0)^2}$。

:::

::: proof
我们证明相对困难的第三条，其余的留作作业来验证。我们有如下的等式：
\[
\begin{aligned}
\frac{1}{h}\Bigl(\frac{f(x_0+h)}{g(x_0+h)}-\frac{f(x_0)}{g(x_0)}\Bigr)&=\frac{f(x_0+h)g(x_0)-f(x_0)g(x_0+h)}{hg(x_0+h)g(x_0)}\\
&=\frac{\frac{f(x_0+h)-f(x_0)}{h}g(x_0)-f(x_0)\frac{g(x_0+h)-g(x_0)}{h}}{g(x_0+h)g(x_0)}.
\end{aligned}
\]
我们按照连续函数求极限的四则运算法则对 $h\rightarrow 0$ 求极限即可。
:::

现在再处理复合函数的导数：

::: proposition [链式法则]
$I$ 和 $J$ 是 $\mathbb{R}$ 上的区间，
$f\colon I\rightarrow J$ 和 $g\colon J\rightarrow \mathbb{R}$ 是实值函数。
如果 $f$ 在 $x_0$ 处可微，$g$ 在 $f(x_0)$ 处可微，那么复合函数 $g \circ f$ 在 $x_0$ 处可微，并且
\[
(g\circ f)'(x_0)=g'\bigl(f(x_0)\bigr)f'(x_0).
\]
:::

::: proof
按照导数的定义，我们有
\[
\begin{aligned}
f(x_0+h)&=f(x_0)+f'(x_0)h +\delta(h), \\
g\bigl(f(x_0)+\ell\bigr)&=g\bigl(f(x_0)\bigr)+g'\bigl(f(x_0)\bigr)\ell +\Delta(\ell),
\end{aligned}
\]
其中
$\displaystyle \lim_{h \rightarrow 0}\frac{\delta(h)}{h}=\lim_{\ell \rightarrow 0}\frac{\Delta(\ell)}{\ell}=0$。
我们按照导数的定义计算 $g\circ f$ 的导数：
\[
\begin{aligned}
\frac{g(f(x_0+h))-g(f(x_0))}{h}&=\frac{g\bigl(f(x_0)+\overbrace{f'(x_0)h+\delta(h)}^{\ell}\bigr)-g\bigl(f(x_0)\bigr)}{h}\\
&=\underbrace{\frac{g'(f(x_0))[f'(x_0)h+\delta(h)]}{h}}_{\text{当 $h \rightarrow 0$ 时，}\text{极限}=g'(f(x_0))f'(x_0)}+\frac{\Delta(f'(x_0)h+\delta(h))}{h}.
\end{aligned}
\]
我们只要证明最后一项当 $h\rightarrow 0$ 时，极限为 $0$ 即可：

根据 $\displaystyle \lim_{\ell \rightarrow 0}\frac{\Delta(\ell)}{\ell}=0$，
我们定义 ${\mu}(\ell)=\dfrac{\Delta(\ell)}{\ell}$（提醒一下同学们，
尽管函数 $\mu$ 在 $0$ 点处没有定义，这并不影响我们研究它在 $0$ 处的极限），那么 $\mu(\ell)=o(1)$，
即 $\displaystyle \lim_{\ell\rightarrow 0}\mu(\ell)=0$（我们也把 $\Delta$ 写成
$\Delta(\ell)=o(1)\ell$）。应用这些记号，我们有
\[
\begin{aligned}
\frac{\Delta(f'(x_0)h+\delta(h))}{h}=\mu(f'(x_0)h+\delta(h))(f'(x_0)+\frac{\delta(h)}{h})=\mu(\ell)(f'(x_0)+\frac{\delta(h)}{h}).
\end{aligned}
\]
然而，当 $h\rightarrow 0$ 时，$\ell=f'(x_0)h+\delta(h) \rightarrow 0$，所以上式的极限是 $0$。
:::

## 例子：一些初等函数的导数

根据上面的运算法则，我们可以计算更多的函数的导（函）数。
我们需要熟练记忆如下几个例子的结论和计算技巧。
这些例子（实质上）是我们仅有的可以用解析表达式写下来的函数：

- 1\) $f(x)=x^n$，那么，$(x^n)'=nx^{n-1}$，其中 $n$ 为整数。

  当 $n\geqslant 0$ 时，根据乘积的导数的计算方法，我们有
  \[
  \bigl(x^n\bigr)'=\bigl(x^{n-1}\cdot x\bigr)'=\bigl(x^{n-1}\bigr)'x+x^{n-1}.
  \]
  据此，利用归纳法立即得到结论。当然，我们也可以直接计算：
  \[
  \begin{aligned}
  f'(x_0)&=\lim_{h\rightarrow 0}\frac{1}{h}\left(\sum_{k\geqslant 0}{n\choose k}h^kx_0^{n-k}-x_0^n\right)\\
  &=\lim_{h\rightarrow 0}\sum_{k\geqslant 1}{n\choose k}h^{k-1}x_0^{n-k}=nx_0^{n-1}.
  \end{aligned}
  \]
  当 $n<0$ 时，我们利用倒数的导数计算即可。

- 2\) $f(x)=e^x$（实数值的函数），
  那么 $(e^x)'=e^x$（这表明指数函数是微分算子 $\dfrac{d~}{dx}$ 的一个不动点）。

  这个问题明显要复杂，因为 $e^x$ 本身就是通过极限／级数来定义的。我们可以想象一个“理想”的计算：
  \[
  \begin{aligned}
  \bigl(\sum_{k=0}^\infty \frac{x^k}{k!}\bigr)'=\sum_{k=0}^\infty \bigl(\frac{x^k}{k!}\bigr)'=\sum_{k=1}^\infty k \frac{x^{k-1}}{k!}=\sum_{k=1}^\infty  \frac{x^{k-1}}{(k-1)!}=e^x.
  \end{aligned}
  \]
  这个计算（目前）是不对的，因为我们不能够随便交换求导数运算和（无限）求和运算的顺序。
  在导数的研究中，我们将要想办法让上面的计算成立从而使得大部分直观上应该成立的运算都成立，
  这样子我们就可以很舒服地做很多运算。这是后话。

  我们先计算 $e^x$ 在 $x=0$ 处的导数：
  \[
  \begin{aligned}
  \lim_{x\rightarrow 0}\frac{e^x-1}{x}&=\lim_{x\rightarrow 0}\sum_{k=1}^\infty\frac{x^{k-1}}{k!}=1+\lim_{x\rightarrow 0}\sum_{k=2}^\infty\frac{x^{k-1}}{k!}
  \end{aligned}
  \]
  然而，
  \[
  \begin{aligned}
  \big|\sum_{k=2}^\infty\frac{x^{k-1}}{k!}\big|\leqslant |x|\big|\sum_{k=2}^\infty\frac{x^{k-2}}{k!}\big|\leqslant |x|\big|\sum_{k=2}^\infty\frac{x^{k-2}}{(k-2)!}\big|=|x|e^{|x|}.
  \end{aligned}
  \]
  所以，$\displaystyle \lim_{x\rightarrow 0}\sum_{k=2}^\infty\frac{x^{k-1}}{k!}=0$。这表明
  \[
  \frac{d}{dx}\Big|_{x=0}\exp=1.
  \]

  函数 $e^x$ 在 $x_0$ 处的导数现在就完全由 $e^x$ 的代数性质决定了：
  \[
  \lim_{h\rightarrow 0}\frac{e^{x_0+h}-e^{x_0}}{h}=e^{x_0}\lim_{h\rightarrow 0}\frac{e^{h}-1}{h}=e^{x_0}.
  \]
  这是非常有意义的计算，因为我们可以借此看到代数结构是如何在计算中起作用的。

- 3\) $f(x)=\log x$ 的导数，$\log(x)'=\dfrac{1}{x}$。

  为了计算 $\log x$，我们自然要研究反函数的可微性质，因为 $\log x$ 就是被定义成反函数，除此之外，
  我们没有关于 $\log$ 的其它信息（事实上，关于 $\log x$ 的进一步性质也都是通过反函数得来的）。
  关于复合函数求导的命题有下面的推论：

::: corollary
$I$ 和 $J$ 是 $\mathbb{R}$ 上的区间，
$f\colon I\rightarrow J$ 是实值函数并且它的逆 $f^{-1}\colon J\rightarrow I$ 存在。
假设 $f$ 是可微函数。如果 $f'(x_0)\neq 0$，那么 $f^{-1}$ 在 $f(x_0)$ 处可微分并且
\[
\bigl(f^{-1}\bigr)'(f(x_0))=\dfrac{1}{f'(x_0)}.
\]
:::

::: remark*
这个推论事先假设了 $f^{-1}$ 存在。
从局部的观点来看，这个条件可以去掉，这是微分学中最重要的定理（之一）：反函数定理。
我们很快就会学习反函数定理。

另外，关于复合函数的记法，我们不推荐 $f(x^2)$ 或者 $f(-x)$ 这样的记号（尽管我们会经常这么写）。
这些记号都应该被理解为函数的复合。
:::

根据命题，我们显然有 $\bigl(\log x\bigr)'=\dfrac{1}{x}$。

我们也可以直接利用定义来计算 $(\log x)'$：
\[
\begin{aligned}
\frac{\log(x+h)-\log(x)}{h}=\frac{\log(1+\dfrac{h}{x})}{h}=\frac{\log\bigl((1+\dfrac{h}{x})^\frac{x}{h}\bigr)}{x}
\end{aligned}
\]
根据 $\displaystyle \lim_{y\rightarrow \infty}(1+\frac{1}{y})^y=e$，上面的式子就给出所要的结论。

- 4\) $f(x)=x^\alpha$，其中 $x>0$，此时 $(x^\alpha)'=\alpha x^{\alpha-1}$。

  按照定义，$x^\alpha=e^{\alpha\log x}$ 是如下函数的复合：
  \[
  \mathbb{R}_{>0}\stackrel{\log}{\longrightarrow}\mathbb{R}\stackrel{\alpha  \cdot }{\longrightarrow}\mathbb{R} \stackrel{\exp}{\longrightarrow} \mathbb{R}.
  \]
  所以，利用链式法则逐步计算：
  \[
  \Bigl(x^\alpha\Bigr)'=\Bigl(e^{\alpha\log x}\Bigr)'=e^{\alpha\log x} \bigl(\alpha\log x\bigr)'=x^\alpha \alpha (\log x\bigr)'=\alpha x^{\alpha-1}.
  \]

- 5\) $(\sin x)'=\cos x$，$(\cos x)'=-\sin x$。

  根据之前的例子，我们有三种方式来计算三角函数的导数：

  - 由于 $\sin x$ 是用级数来定义的，仿照 $e^x$ 的导数计算的讨论，我们希望能够逐项求导数，
    这种做法现在并不严格；

  - 注意到 $\sin x$ 和 $\cos x$
    是通过复数值的函数来定义的（$\cos x =\dfrac{1}{2}\bigl(e^{ix}+e^{-ix}\bigr)$），
    所以我们必须离开实数转而研究在复数（或者向量空间）中取值的函数的导数。
    然而，在证明函数的四则运算和复合函数时，我们并没有用到 $\mathbb{R}$ 的具体性质，
    所有的证明对于复数域仍然成立（我们将会在作业中见到类似的证明），所以这些技术都是成立的，从而：
    \[
    (\cos x)' =\dfrac{1}{2}\bigl(e^{ix}+e^{-ix}\bigr)'=\dfrac{1}{2}\bigl(ie^{ix}-ie^{-ix}\bigr)=-\dfrac{1}{2i}\bigl(e^{ix}-e^{-ix}\bigr)=-\sin x.
    \]

  - 用定义直接计算。
    我们仿照 $e^x$ 的情形（利用三角函数的代数性质）首先证明 $\sin' (0)=1$ 和 $\cos'(0)=0$，
    然后对 $\sin(x+h)-\sin x$ 利用和差化积公式来证明一般 $x$ 的情形。
    我们会在作业中按照这种方式来完成证明。
