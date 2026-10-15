---
title: 连续型随机变量
---
::: definition {@definition:continuous_rv}
称随机变量$X$为一**连续型随机变量**
（continuous random variable），若存在函数
$f_X:\mathbb{R}\rightarrow\left[0,+\infty\right[$，
使得对任意区间$I\subseteq\mathbb{R}^n$，有

```math {@eq:PDF_defn}
\mathbb{P}(X\in I) = \int_{I} f_X(x)\,\mathrm{d} x.
```

函数$f_X$被称为$X$的一个**概率密度函数**
（probability density function，p.d.f。）。
:::

::: remark {@remark:pdf_uniqueness}
连续型随机变量的概率密度函数并不唯一，因为我们可以改变$f_X$
在有限多个点的值而不影响式 @eq:PDF_defn 成立。
但可以证明，若两个函数$f^{(1)}_X$与$f^{(2)}_X$均满足
式 @eq:PDF_defn，函数$g:\mathbb{R}\rightarrow\mathbb{R}$
使得$\int_{-\infty}^{+\infty} g(x)\,f_X^{(1)}(x)\,\mathrm{d} x$存在，
则$\int_{-\infty}^{+\infty} g(x)\,f_X^{(2)}(x)\,\mathrm{d} x$同样存在，
且有
\[
    \int_{-\infty}^{+\infty}g(x)f^{(2)}_X(x)\,\mathrm{d} x =
    \int_{-\infty}^{+\infty} g(x)f^{(1)}_X(x)\,\mathrm{d} x.
\]
因此，即使选取不同的概率密度函数，它们在积分号下的行为也是一致的。
在本讲义随后的部分中，对于连续型随机变量$X$，
我们将用$f_X$来表示任一满足式 @eq:PDF_defn 的概率密度函数，
而不去考虑概率密度函数的不唯一性。
:::

@definition:continuous_rv  虽然仅直接给出了
随机变量$X$落于某区间的概率值，但由于实际问题中常见的子集
$B\subseteq\mathbb{R}$通常都能表示为可数多个互不相交的区间的并，
故我们可以用概率的可数可加性得到
\[
    \mathbb{P}(X\in B) = \int_B f_X(x)\,\mathrm{d} x,
\]
其中的积分$\int_B f_X(x)\,\mathrm{d} x$读者也可理解为
$\int_{-\infty}^{+\infty}\mathsf{1}_B(x)\cdot f_X(x)\,\mathrm{d} x$，
即$f_X(x)$与指示函数$\mathsf{1}_B(x)$相乘后对$x$在整个实数轴上的积分。
此外，由定义不难看出，对于连续型随机变量$X$，它取某个给定值的概率总是零：
\[
    \mathbb{P}(X=a) = \int_a^a f_X(x)\,\mathrm{d} x=0.
\]
而对于左端点为$a$、右端点为$b$的区间$I$，
无论$I$是闭区间、开区间还是半开半闭区间，$X$落于区间$I$的概率都是相同的：
\[
    \mathbb{P}(a<X<b)
    =\mathbb{P}(a\leq X<b)
    =\mathbb{P}(a<X\leq b)
    =\mathbb{P}(a\leq X\leq b)
    =\int_a^b f_X(x)\,\mathrm{d} x.
\]

概率密度函数$f_X$可以以如下方式进行直观理解：当$\delta>0$足够小，
且$f_X$在点$x$处连续时，则$f_X(x)\cdot\delta$给出了
$X$处于$x$到$x+\delta$之间的概率，即
\[
    f_X(x)\cdot\delta\approx \mathbb{P}(X\in \left[x,x+\delta\right[\,),
\]
或
\[
    f_X(x) = \lim_{\delta\rightarrow 0^+}
    \frac{\mathbb{P}(X\in\left[x,x+\delta\right[\,)}{\delta}.
\]
$f_X(x)$本身并不是任何事件的概率，因此它可以大于$1$；
函数$f_X$甚至可以在$\mathbb{R}$上没有上界。此外，
式 @eq:PDF_defn  在形式上类似于物理学中
利用线密度计算一维物体某一段的质量，其中$f_X(x)$起到的就是线密度的作用，
这个类比也为概率密度函数提供了一种直观的理解方式。

概率密度函数所满足的基本性质由如下定理列出。

::: theorem {@theorem:PDF_basic_properties}
设$X$为一连续型随机变量，则$X$的概率密度函数$f_X$满足

1. （非负性）对任意$x\in\mathbb{R}$，均有$f_X(x)\geq 0$；

2. （归一性）$\displaystyle\int_{-\infty}^{+\infty} f_X(x)\,\mathrm{d} x=1$。

:::

::: proof
非负性来自于概率密度函数的定义。归一性则来自于
\[
    \int_{-\infty}^{+\infty} f_X(x)\,\mathrm{d} x
    = \mathbb{P}(X\in \left]-\infty,+\infty\right[\,)
    =\mathbb{P}(\Omega)=1.
\]
:::

@theorem:PDF_basic_properties  的逆定理也同样成立：
若函数$f:\mathbb{R}\rightarrow\mathbb{R}$满足非负性与归一性条件，
则存在一概率空间$(\Omega,\mathcal{F},\mathbb{P})$及
其上的随机变量$X$，使得$X$为连续型随机变量，且$f$为$X$的概率密度函数。
此时我们称$f$给出了一个连续型分布。这个结论的证明不做要求。

需要指出，“连续型随机变量”这一术语中的“连续型”容易被误解，
读者尤其要注意以下几点：

- 取值范围连续的随机变量不一定是连续型随机变量。

- 连续型随机变量的概率密度函数不一定连续。

## 常见的连续型分布*

**均匀分布。** 设$I\subseteq\mathbb{R}$为一有限长区间
且不是单点集，我们用$m(I)$表示区间$I$的长度。
若连续型随机变量$X$的概率密度函数为
\[
    f_X(x) = \frac{1}{m(I)}\cdot\mathsf{1}_{I}(x)
    =\begin{cases}
    \displaystyle\frac{1}{m(I)}, & \text{若}\ x\in I, \\
    0, &\text{其它情形},
    \end{cases}
\]
则称$X$服从区间$I$上的**均匀分布**
（uniform distribution）[^1]。
不难看出 @example:var_continuous  当中的随机变量$X$
即服从$[0,\alpha]$上的均匀分布。图\ref{fig:PDF_uniform}
给出了区间上均匀分布的概率密度函数图像。

```tikz {caption="区间$[a,b]$上均匀分布的概率密度函数图像。"}
\begin{tikzpicture}[scale=1]
\draw[-{Stealth[length=8pt]}] (-1,0) -- (6,0) node[right] {$x$};
\draw[-{Stealth[length=8pt]}] (0,-0.5) -- (0,2.8) node[above] {$f(x)$};
\draw[color=black,line width=1.2pt] (1,1.8) -- (4,1.8);
\draw[color=black,line width=1.2pt] (-1,0) -- (1,0);
\draw[color=black,line width=1.2pt] (4,0) -- (5.75,0);
\draw[color=black,dashed] (1,1.8)--(1,0) node[anchor=south,yshift=-20pt] {$a$};
\draw[color=black,dashed] (4,1.8)--(4,0) node[anchor=south,yshift=-20pt] {$b$};
\draw[color=black,dashed] (1,1.8)--(0,1.8) node[anchor=east,yshift=-3pt] {\small$\dfrac{1}{b-a}$};
\end{tikzpicture}
```

\label{fig:PDF_uniform}

**指数分布。**
设$\lambda\in\left]0,+\infty\right[$。
若连续型随机变量$X$的概率密度函数为
\[
    f_X(x) = \begin{cases}
    \lambda \mathrm{e}^{-\lambda x}, & \text{若}\ x\geq 0, \\
    0, & \text{若}\ x<0,
    \end{cases}
\]
则称$X$服从参数为$\lambda$的**指数分布**
（exponential distribution）。不难验证上式的确给出了一个概率密度函数。
人们常用指数分布的随机变量对等待时间、器件寿命等量进行建模。
图\ref{fig:PDF_exponential} 给出了指数分布的概率密度函数图像。

```tikz {caption="参数为$\lambda$的指数分布的概率密度函数图像。"}
\begin{tikzpicture}[domain=0:5.5,samples=50,smooth,scale=1]
\draw[-{Stealth[length=8pt]}] (-1,0) -- (6,0) node[right] {$x$};
\draw[-{Stealth[length=8pt]}] (0,-0.5) -- (0,2.8) node[above] {$f(x)$};
\draw[color=black,line width=1.2pt]    plot(\x, {2*exp(-0.6*\x)});
\draw[color=black,dashed] ({1/0.6},{2*exp(-1)})--({1/0.6},0) node[anchor=south,yshift=-20pt] {$1/\lambda$};
\draw[color=black,line width=1.2pt] (-1,0) -- (0,0);
\node[anchor=north east] at (0,0) {$O$};
\node[anchor=east,xshift=-3pt] at (0,2) {$\lambda$};
\end{tikzpicture}
```

\label{fig:PDF_exponential}

**正态分布/高斯分布。**
设$\mu\in\mathbb{R}$，$\sigma\in\left]0,+\infty\right[$。
若连续型随机变量$X$的概率密度函数为

```math {@eq:univariate_Gaussian_defn}
f_X(x) = \frac{1}{\sqrt{2\pi}\sigma}
\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right),
```

则称$X$服从参数为$(\mu,\sigma^2)$的 **（一维）正态分布**
或**高斯分布**（univariate normal/Gaussian distribution）。
通常我们用$\mathcal{N}(\mu,\sigma^2)$指代
参数为$(\mu,\sigma^2)$的正态分布，并用
$X\sim\mathcal{N}(\mu,\sigma^2)$表示$X$服从该正态分布。
图\ref{fig:PDF_Gaussian} 给出了正态分布的概率密度函数图像。

```tikz {caption="正态分布$\mathcal{N}(\mu,\sigma^2)$的概率密度函数图像。"}
\begin{tikzpicture}[domain=-0.75:5.75,samples=50,smooth,scale=1]
\draw[-{Stealth[length=8pt]}] (-1,0) -- (6,0) node[right] {$x$};
\draw[-{Stealth[length=8pt]}] (0,-0.5) -- (0,3.5) node[above] {$f(x)$};
\draw[color=black,line width=1.2pt]    plot(\x, {2.8*exp(-(\x-2.5)^2/2)});
\draw[color=black,dashed] (2.5,2.8)--(2.5,0) node[anchor=south,yshift=-20pt] {$\mu$};
\draw[color=black,dashed] (3.5,1.698)--(3.5,0) node[anchor=south,yshift=-20pt] {$\mu\!+\!\sigma$};
\draw[color=black,dashed] (1.5,1.698)--(1.5,0) node[anchor=south,yshift=-20pt] {$\mu\!-\!\sigma$};
\draw[color=black,dashed] (4.5,0.379)--(4.5,0) node[anchor=south,yshift=-20pt] {$\mu\!+\!2\sigma$};
\draw[color=black,dashed] (0.5,0.379)--(0.5,0) node[anchor=south,yshift=-20pt] {$\mu\!-\!2\sigma$};
\draw[color=black,dashed] (2.5,2.8)--(0,2.8) node[left] {\small$\dfrac{1}{\sqrt{2\pi}\sigma}$};
\end{tikzpicture}
```

\label{fig:PDF_Gaussian}

为验证式 @eq:univariate_Gaussian_defn  的确
给出了一个概率密度函数，需要利用积分
\[
    \int_{-\infty}^{+\infty}\exp(-x^2)\,\mathrm{d} x
    =\sqrt{\pi}.
\]
我们将具体的计算细节留给读者完成。

此外，我们将一维正态分布$\mathcal{N}(0,1)$称为**标准正态分布**
（standard normal distribution），其概率密度函数为
\[
    f(x) = \frac{1}{\sqrt{2\pi}}\exp\!\left(-\frac{x^2}{2}\right).
\]

[^1]: 依照此处的定义 以及 @remark:pdf_uniqueness，闭区间$[a,b]$ 与开区间$\left]a,b\right[$上的均匀分布实际上是同一种分布， 本讲义不对它们做出区分，但在某些场合会根据$X$的值域 为$[a,b]$还是$\left]a,b\right[$来对它们进行区分。
