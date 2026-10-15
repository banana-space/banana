---
title: 一般情形条件期望的定义
---
我们首先给出如下两个命题，来铺垫一般情形下条件期望的定义。

::: proposition {@proposition:conditional_expectation_defining_properties}
设$(X,Y)$为离散型或连续型随机向量，且$\mathbb{E}[X]$存在。
$\phi_X(Y)$为满足 @definition:conditional_expectation
的$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]$的一个版本。则对任意有界函数
$g:\mathbb{R}\rightarrow\mathbb{R}$，均有

```math {@eq:conditional_expectation_identity}
\mathbb{E}\!\left[
\phi_{X}(Y)\cdot g(Y)\right]
=\mathbb{E}\!\left[X\cdot g(Y)\right].
```

:::

::: proof
这里只给出$(X,Y)$为连续型随机向量时的证明；离散情形的证明是类似的。

利用期望的LOTUS，可得
\[
    \begin{aligned}
    \mathbb{E}\!\left[
    \phi_X(Y)\cdot g(Y)
    \right]
    & = \int_{-\infty}^{+\infty}
    \phi_X(y)g(y)\cdot f_Y(y)\,\mathrm{d} y \\
    & = \int_{y\,:\,f_Y(y)>0}
    \left(\int_{-\infty}^{+\infty}
    x\cdot \frac{f_{X,Y}(x,y)}{f_Y(y)} \,\mathrm{d} x\right)g(y)\cdot f_Y(y)\,\mathrm{d} y \\
    & = \iint_{\,\mathbb{R}^2}
    x\cdot g(y)\cdot f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y
    =\mathbb{E}[X\cdot g(Y)],
    \end{aligned}
\]
其中最后一步将累次积分化为重积分，且因为$f_Y(y)=0$时也有
$f_{X,Y}(x,y)=0$，故将积分区域扩大为全平面$\mathbb{R}^2$
对积分值没有影响。
:::

::: proposition {@proposition:uniqueness_conditional_expectation}
设$X,Y$为两个随机变量，且$\mathbb{E}[X]$存在。
$\phi_{X,1},\phi_{X,2}:\mathbb{R}\rightarrow\mathbb{R}$为两个
函数，使得对任意有界函数$g:\mathbb{R}\rightarrow\mathbb{R}$，均有
\[
    \mathbb{E}\!\left[
    \phi_{X,1}(Y)\cdot g(Y)
    \right]
    =\mathbb{E}\!\left[
    \phi_{X,2}(Y)\cdot g(Y)
    \right]
    =\mathbb{E}[X\cdot g(Y)],
\]
则
\[
    \mathbb{P}\!\left(\phi_{X,1}(Y)=\phi_{X,2}(Y)\right)=1.
\]
:::

::: proof
令$h(y)=\phi_{X,1}(y)-\phi_{X,2}(y)$，则由命题条件可得，
对任意有界函数$g:\mathbb{R}\rightarrow\mathbb{R}$，有
\[
    \mathbb{E}[h(Y)\cdot g(Y)]=0.
\]
若$h$本身也是有界函数，则可以直接令$g=h$得到$\mathbb{E}[h(Y)^2]=0$，
再由 @theorem:expectation_nonnegativity  可得
$\mathbb{P}(h(Y)=0)=1$。若$h$不是有界函数，则需要
用期望的单调收敛定理（超出本讲义范围，读者可参阅
[@williams1991probability][@billingsley1995probability]
等文献）来处理，这里不做详细展开而只是给出大致思路：首先令
\[
    h_n(y) = \begin{cases}
    |h(y)|, & \text{若}\ |h(y)|\leq n, \\
    0, & \text{若}\ |h(y)|>n.
    \end{cases}
\]
则将$g(y)=\operatorname{sgn}(h(y))\cdot h_n(y)$代入
$\mathbb{E}[h(Y)\cdot g(Y)]=0$即可得到
[^1]
\[
    \mathbb{E}\!\left[|h(Y)|\cdot h_n(Y)\right]
    =\mathbb{E}\!\left[h_n(Y)^2\right]=0.
\]
再由期望的单调收敛定理，得$\mathbb{E}\!\left[|h(Y)|^2\right]
=\lim\limits_{n\rightarrow\infty}\mathbb{E}\!\left[h_n(Y)^2\right]
=0$，故$\mathbb{P}(h(Y)=0)=1$。
:::

@proposition:conditional_expectation_defining_properties
与\ref{proposition:uniqueness_conditional_expectation} 指出，
式 @eq:conditional_expectation_identity  实际上可以看成是
条件期望的定义性性质：
@definition:conditional_expectation  给出的条件期望
满足式 @eq:conditional_expectation_identity，
而满足式 @eq:conditional_expectation_identity  的随机变量
$\phi_X(Y)$又在几乎必然相等的意义下是唯一的[^2]。
此外，无论$(X,Y)$服从怎样的联合分布，只要$\mathbb{E}[X]$存在
且$g$有界，则式 @eq:conditional_expectation_identity
总是有意义的。因此我们可以基于
式 @eq:conditional_expectation_identity  来定义
一般情形的条件期望。

::: definition {@definition:conditional_expectation_general}
设$X,Y$为两个随机变量，且$\mathbb{E}[X]$存在，
$\phi_X:\mathbb{R}\rightarrow\mathbb{R}$为一函数。
若对任意有界函数$g:\mathbb{R}\rightarrow\mathbb{R}$，均有
\[
    \mathbb{E}\!\left[
    \phi_{X}(Y)\cdot g(Y)\right]
    =\mathbb{E}\!\left[X\cdot g(Y)\right],
\]
则称$\phi_X(Y)$为给定$Y$的条件下$X$的条件期望的一个版本(version)，
记作$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]=\phi_X(Y)$，
并对任意$y\in\mathbb{R}$，记
$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=y\right]=\phi_X(y)$。
:::

@definition:conditional_expectation_general  中
并未对条件期望进行具体构造．在高等概率论中，条件期望的构造
一般是通过实分析理论中的Radon–Nikodym定理，或是在函数空间上
对$L^2$范数进行最小化得到的，本讲义不对其进行展开，
感兴趣的读者可参考[@williams1991probability]第9章的内容，
或[@billingsley1995probability]第32与34节的内容．
最终可以证明，对任意随机变量$X,Y$，只要$\mathbb{E}[X]$存在，
那么条件期望$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]$必定存在。

至此，我们给出对条件期望$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]$的一般性定义．
这里再补充说明几点：

1. 由于条件期望通常有多个版本，但在几乎必然相等的意义下又是唯一的，
   故经常会用形如
   \[
       f(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right],\mathbb{E}\!\left[Z \mkern2mu|\mkern2mu W\right])=0\ \ \mathrm{a.s.}
   \]
   的写法，来表示任取$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]$的一个版本
   $\phi_X(Y)$与$\mathbb{E}\!\left[Z \mkern2mu|\mkern2mu W\right]$的一个版本$\phi_Z(W)$后，
   等式$f(\phi_X(Y),\phi_Z(W))=0$几乎必然成立，
   其中$\mathrm{a.s.}$是almost surely的缩写。
   而当条件期望外面又套了一层期望$\mathbb{E}[\cdot]$之后，
   许多情况下该期望的值就不依赖于条件期望版本的选择了，此时就直接写作
   \[
       \mathbb{E}\!\left[f(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right],\mathbb{E}\!\left[Z \mkern2mu|\mkern2mu W\right])\right]=0
   \]
   等等。

2. 给定随机变量$Y$的条件下，事件$E$的条件概率可通过
   \[
       \mathbb{P}\!\left(E \mkern2mu|\mkern2mu Y\right) = \mathbb{E}\!\left[\mathsf{1}_E \mkern2mu|\mkern2mu Y\right]
   \]
   来定义，也就是说，我们把条件概率作为条件期望的一种特殊情形处理。
   注意到最原始的条件概率的 @definition:conditional_probability
   与上式定义的条件概率有如下联系：
   \[
       \mathbb{P}\!\left(E \mkern2mu|\mkern2mu \mathsf{1}_F\right)(\omega)
       =\begin{cases}
       \mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\right), & \text{若}\ \omega\in F, \\
       \mathbb{P}\!\left(E \mkern2mu|\mkern2mu F^c\right), & \text{若}\ \omega\in F^c, \\
       \end{cases}
   \]
   其中假定$0<\mathbb{P}(F)<1$．也就是说，随机变量$\mathbb{P}\!\left(E \mkern2mu|\mkern2mu \mathsf{1}_F\right)$在$F$发生时等于$\mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\right)$，而在$F$不发生时等于$\mathbb{P}\!\left(E \mkern2mu|\mkern2mu F^c\right)$．

3. 利用勒贝格积分的微分理论（不要求读者了解，
   可参见[@big_rudin]第7章）可证明，若令$\varphi$为
   \[
       \varphi_X(y) = \begin{cases}
       \displaystyle\lim_{\epsilon\rightarrow 0^+} \mathbb{E}\!\left[X \mkern2mu|\mkern2mu |Y-y|\leq\epsilon\right],
       & \text{若该极限存在}, \\
       0, & \text{其它情况},
       \end{cases}
   \]
   则有$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y\right]=\varphi_X(Y)$，
   即$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=y\right]=\varphi_X(y)$。
   这意味着我们可以将$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Y=y\right]$
   不严格地理解为$\epsilon>0$非常小时，
   $X$在$\{|Y-y|\leq\epsilon\}$条件下的条件期望。

[^1]: $\operatorname{sgn}$为符号函数， 满足$x\neq 0$时$\operatorname{sgn}(x)=x/|x|$， 而$x=0$时$\operatorname{sgn}(x)=0$。
[^2]: 讲义正文中给出的 条件期望的定义（@definition:conditional_expectation） 也只能保证条件期望在几乎必然相等意义下的唯一性，而不能保证绝对的唯一性。
