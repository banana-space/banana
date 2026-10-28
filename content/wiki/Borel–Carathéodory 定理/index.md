---
title: Borel–Carathéodory 定理
aliases: [Borel-Caratheodory 定理, Borel-Carathéodory 定理]
categories: [复分析, 解析数论]
---

<problems>
- “$|h^{(n)}(0)|$ 的上界”一节中，公式 (3) 的被积函数中的因子似乎应为 $e(-(nu+\phi_n))$；其后的推导中余弦项似乎应为 $\cos(2\pi(nu+\phi_n))$，且第一个等号右边似乎缺少因子 $2$。
- “整函数的零点展开式”一节定理的证明中，第一个公式里分式 $\frac{s-s_0}{s-\rho}$ 的分母似乎应为 $s_0-\rho$。
- 最后一个推论的证明中，第一个不等式左边似乎应取实部，右边的常数似乎应为 $A_0$。
</problems>

::: convention
在本文中，

- $e(s)$表示复指数函数$e^{2\pi is}$

:::

在复分析中，**Borel–Carathéodory 定理**一般指以下用于估计解析函数幂级数系数的工具：

::: theorem [Borel–Carathéodory] {@thbc}
若$h(z)$在包含$|z|\le R$的开集内解析满足$h(0)=0$，当存在$M>0$使$\Re[h(z)]\le M$对在$|z|=R$上成立时，
则下列不等式
\[
|h(z)|\le{2Mr\over R-r}
\]
\[
|h'(z)|\le{2MR\over(R-r)^2}
\]
对一切$|z|\le r<R$都成立。
:::

## 证明

### $|h^{(n)}(0)|$的上界

为了方便后续的表示，设$a_n$为$h(z)$幂级数展开式中$z^n$的系数，则有：

\[
h(z)=\sum_{n\ge1}a_nz^n
\]

这意味着我们可以通过设置$z=R\cdot e(u)$的方式来得到$a_n$的计算公式：

```math {@eqnr1}
\int_0^1h(R\cdot e(u))e(-nu)\mathrm du=R^na_n\quad(n\ge1)
```

另一方面，还有：

```math {@eqnr2}
\int_0^1h(R\cdot e(u))e(nu)\mathrm du=0\quad(n\ge0)
```

现在我们不妨设$\phi_n\in\mathbb{R}$满足$a_n=|a_n|e(\phi_n)$，则可将 @eqnr1 转化成：

```math {@eqnr3}
\int_0^1h(R\cdot e(u))e(-n(u+\phi_n))\mathrm du=|a_n|R^n
```

现在将 @eqnr2 和 @eqnr3 相结合，便有：

```math
\begin{aligned}
    |a_n|R^n
    &=\int_0^1 h(R\cdot e(u))[1+\cos(2\pi(u+\phi_n))]\mathrm du \\
    &=\int_0^1\Re[h(R\cdot e(u))][1+\cos(2\pi(u+\phi_n))]\mathrm du \\
    &\le M\int_0^1[1+\cos(2\pi(u+\phi_n))]\mathrm du\le2M
\end{aligned}
```

最后通过移项可得$|a_n|\le2M/R^n$，所以：

::: lemma
若$h(z)$在包含$|z|\le R$的开集内解析，满足$h(0)=0$，
则当存在$M>0$使$\Re[h(z)]\le M$对一切$|z|=R$上成立时总有：
\[
\left|h^{(n)}(0)\over n!\right|\le{2M\over R^n}
\]
:::

### $|h(z)|$和$|h'(z)|$的上界估计

利用几何级数的性质：

```math {@eqngs}
{1\over1-x}=1+x+x^2+\dots=\sum_{n\ge0}x^n
```

可知：

```math {@eqnhzb}
|h(z)|\le\sum_{n\ge1}|a_n|r^n\le2M\sum_{n\ge1}\left(\frac rR\right)^n={2Mr\over R-r}
```

现在对 @eqngs 两侧求导，可知：

\[
{1\over(1-x)^2}=\sum_{n\ge1}nx^{n-1}
\]

这意味着：

```math
\begin{aligned}
    |h'(z)|
    &\le\sum_{n\ge1}n|a_n|r^n\le{2M\over R}\sum_{n\ge1}n\left(\frac rR\right)^n \\
    &={2MR\over(R-r)^2}
\end{aligned}
```

至此 @thbc 证毕。

::: remark
事实上 @eqnhzb 可以在只依赖[[Schwarz 引理]]的情况下证明，参见[@titchmarsh2002, §5.5]。
:::

## 应用

### 整函数的零点展开式

::: theorem {@threxp}
若函数$f(s)$在区域$|s-s_0|\le r$内正则且存在$M>0$使得在这个区域内$|f(s)/f(s_0)|\le e^M$，
则当$\rho$遍历所有$f(s)$在$|s-s_0|\le r/2$内的零点时，存在固定的$A>0$使得当$|s-s_0|\le r/4$时总有：
\[
\left|{f'\over f}(s)-\sum_\rho{1\over s-\rho}\right|\le{AM\over r}
\]
:::

::: proof
现在设$g(s)=f(s)\prod_\rho(s-\rho)^{-1}$，则根据最大模原理可知当$|s-s_0|=r$时：

```math
\begin{aligned}
    \left|g(s)\over g(s_0)\right|
    &\le e^M\prod_\rho\left|s-\rho\over s_0-\rho\right|^{-1}
    =e^M\prod_\rho\left|1+{s-s_0\over s-\rho}\right|^{-1} \\
    &\le e^M\prod_\rho\left( \left| s-s_0\over s-\rho \right|-1 \right)^{-1}\le e^M
\end{aligned}
```

现在设$h(z)=\log[g(s_0+z)/g(s_0)]$，则其在$|z|\le r/2$内正则，且当$|z|=r/2$时有$\Re[h(z)]\le M$。
因此对其套用 @thbc 可知当$|z|\le r/4$时：
\[
|h'(z)|\le{2M\cdot\frac r2\over(\frac r2-\frac r4)^2}={16M\over r}
\]
又因为：
\[
h'(z)={g'\over g}(s_0+z)={f'\over f}(s_0+z)-\sum_\rho{1\over s_0+z-\rho}
\]
所以将两式联立就可以发现此定理在$A=16$时成立。
:::

对 @threxp 的展开式取实部，便能得到$f'/f$实部的上界估计：

::: corollary {@cor-rbound}
若$f(s)$满足 @threxp 的条件，则当$f(s)$在圆$|s-s_0|\le r$的右半部分没有零点时，有：

\[
-\Re{f'\over f}(s_0)\le{AM\over r}
\]

特别地，倘若零点$\rho_0$位于以$s_0-r/2$和$s_0$为端点构成的线段上，则有：

\[
-\Re{f'\over f}(s_0)\le{AM\over r}-{1\over s_0-\rho_0}
\]
:::

::: corollary
若$f(s)$满足 @threxp 的条件且在$s=s_0$时满足：
\[
\left|{f'\over f}(s_0)\right|\le\frac Mr
\]
则当$f(s)$在圆$|s-s_0|\le r$内区域$\sigma\ge\sigma_0-2r'>\sigma_0-r/2$中非零时存在$A>0$使：
\[
\left|{f'\over f}(s)\right|\le{AM\over r}
\]
对一切$|s_0-s|\le r'$均成立。
:::

::: proof
利用 @threxp 可知在$|s_0-s|\le 2r'$中存在$A_0>0$使：
\[
-{f'\over f}(s)\le{AM\over r}
\]
因此将$h(z)=-{f'\over f}(s_0+z)+{f'\over f}(s_0)$代入到**Borel–Carathéodory 定理**中就可以发现当
$|s_0-s|\le r'$时总有：
\[
\left|{f'\over f}(s)\right|\le{(A_0+1)M\over r}\cdot{r'\over 2r'-r'}={A_0+1\over2}\frac Mr
\]
:::

::: remark
这几个结论源自[@titchmarsh1986, §3.9]。
:::

## 参考文献

```bibliography
mv2007:
  type: book
  label: Mon07
  author: [H. L. Montgomery, R. C. Vaughan]
  year: 2007
  title: 'Multiplicative Number Theory I: Classical Theory'
  publisher: Cambridge University Press
titchmarsh2002:
  type: book
  label: Tit02
  author: E. C. Titchmarsh
  year: 2002
  title: The Theory of Functions
  edition: 2
  note: reprinted
  publisher: Oxford University Press
titchmarsh1986:
  type: book
  label: Tit86
  author: [E. C. Titchmarsh, D. R. Heath-Brown]
  year: 1986
  title: The Theory of the Riemann Zeta-Function
  edition: 2
  publisher: Oxford University Press
```
