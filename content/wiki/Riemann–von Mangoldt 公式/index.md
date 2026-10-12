---
title: Riemann–von Mangoldt 公式
aliases: [Riemann-von Mangoldt 公式]
categories: [解析数论]
---

::: convention
在本文中，

- $s$表示以$\sigma$为横坐标、$t$为纵坐标的复数。

:::

在[[解析数论]]中，**Riemann–von Mangoldt 公式**指以下结论：

```math {@eqnrvm}
N(T)={T\over2\pi}\log{T\over2\pi}-{T\over2\pi}+O(\log T)
```

其中$N(T)$表示$\zeta(s)$在长方形区域$0\le\Re(s)\le1,0\le\Im(s)\le T$内的零点个数。

## 历史

公式 @eqnrvm 最初亮相于 Riemann 在1859年发表的论文中[@edwards1974, Appendix]，但他并没有证明。
直到十九世纪末这个结论才被 von Mangoldt 和 Backlund 严谨化。

## 证明

<see>[[Riemann zeta 函数]]</see>

### 基本关系式

不同于大多数教材中基于$\xi(s)$的推导，本文将直接以$\zeta(s)$作为起点开始推导$N(T)$的展开式。
根据[[Schwarz 反演原理]]，我们知道$\zeta(s)$的零点关于实轴对称，所以再结合[[辐角原理]]便有：

```math
\begin{aligned}
    2N(T)
    &=1+{1\over2\pi i}\left( \int_{-1-iT}^{2-iT}+\int_{2-iT}^{2+iT}+\int_{2+iT}^{-1+iT}+\int_{-1+iT}^{-1-iT} \right){\zeta'\over\zeta}(s)\mathrm ds \\
    &=1+\underbrace{{1\over2\pi i}\left( \int_{\frac12+iT}^{-1+iT}+\int_{-1+iT}^{-1-iT}+\int_{-1-iT}^{\frac12-iT} \right){\zeta'\over\zeta}(s)\mathrm ds}_{I(T)}+S(T) \\
\end{aligned}
```

其中$S(T)$的定义如下：

```math {@eqnst}
S(T)={1\over2\pi i}\left( \int_{\frac12-iT}^{2-iT}+\int_{2-iT}^{2+iT}+\int_{2+iT}^{\frac12+iT} \right){\zeta'\over\zeta}(s)\mathrm ds
```

对于$I(T)$，设$s\mapsto1-s$，则有：

```math {@eqnit}
I(T)={1\over2\pi i}\left( \int_{\frac12-iT}^{2-iT}+\int_{2-iT}^{2+iT}+\int_{2+iT}^{\frac12+iT} \right)\left[ -{\zeta'\over\zeta}(1-s) \right]\mathrm ds
```

根据$\zeta(s)$的函数方程，我们知道：

\[
\zeta(1-s)=2(2\pi)^{-s}\cos\left(\pi s\over2\right)\Gamma(s)\zeta(s)
\]

对两侧取对数导，便有：

```math {@eqnlz}
-{\zeta'\over\zeta}(1-s)={\mathrm d\over\mathrm ds}\left[ -s\log2\pi+\log\Gamma(s)+\log\cos\left( \pi s\over2 \right) \right]+{\zeta'\over\zeta}(s)
```

现在将 @eqnlz 代入到 @eqnit 中，便有：

```math
\begin{aligned}
    I(T)
    &={1\over2\pi i}\left[ -s\log2\pi+\log\Gamma(s)+\log\cos\left( \pi s\over2 \right) \right]_{\frac12-iT}^{\frac12+iT}+S(T) \\
    &=-\frac T\pi\log2\pi+\frac1\pi\Im\left[ \log\Gamma(s)+\log\cos\left( \pi s\over2 \right) \right]_{s=\frac12+iT}+S(T)+1 \\
\end{aligned}
```

其中最后出现$+1$项是因为：

\[
{1\over2\pi i}\left( \int_{\frac12-iT}^{2-iT}+\int_{2-iT}^{2+iT}+\int_{2+iT}^{\frac12+iT}-\int_{\frac12-iT}^{\frac12+iT} \right){\mathrm d\over\mathrm ds}\log\cos\left( \pi s\over2 \right)\mathrm ds=1
\]

利用[[Stirling 公式]]，我们发现当$s=\frac12+iT$时有：

```math
\begin{aligned}
    \log\Gamma\left(\frac12+iT\right)
    &=iT\log(iT)-iT+\frac12\log2\pi+O\left( \frac1T \right) \\
    &=i(T\log T-T)+\frac12\log2\pi-{\pi T\over2}+O\left( \frac1T \right)
\end{aligned}
```

对两侧取虚部，便有：

```math {@eqnlg}
\Im\log\Gamma\left(\frac12+iT\right)=T\log T-T+O\left( \frac1T \right)
```

另一方面，利用余弦函数的性质，可知当$s=\frac12+iT$时：

```math
\begin{aligned}
    \log\cos\left(\pi s\over2\right)
    &=-\log2+\log(e^{\pi is/2}+e^{-\pi is/2}) \\
    &=-\log2-{\pi is\over2}+\log(1+e^{\pi is/2}) \\
    &=-{\pi i\over4}+{\pi T\over2}-\log2+O(e^{-\pi T})
\end{aligned}
```

将此结果与 @eqnlg 代入到$I(T)$中，就有：

\[
I(T)=\frac T\pi\log{T\over2\pi}-\frac T\pi+\frac34+S(T)+O\left( \frac1T \right)
\]

综上所述，我们就得到了基本的关系式：

::: lemma {@lmnt}
当$T\ge2$且不为$\zeta(s)$的零点纵坐标时总有：
\[
N(T)={T\over2\pi}\log{T\over2\pi}-{T\over2\pi}+\frac78+S(T)+O\left( \frac1T \right)
\]
:::

### $S(T)$的上界估计

由于$\zeta'/\zeta(s)$的 Dirichlet 级数在$\Re(s)=2$时绝对收敛，所以：

\[
\int_{2-iT}^{2+iT}{\zeta'\over\zeta}(s)\mathrm ds=-i\sum_{n\ge2}{\Lambda(n)\over n^2}\int_{-T}^Tn^{-it}\mathrm dt=O(1)
\]

将此结果代入到 @eqnst 中，便有：

```math {@eqnst2}
S(T)=\frac1\pi\Im\int_{2+iT}^{\frac12+iT}{\zeta'\over\zeta}(s)\mathrm ds+O(1)
```

利用$\zeta'/\zeta(s)$的[[Riemann zeta 函数|零点展开式]]可知当$T$不是$\zeta(s)$的零点纵坐标时：

\[
\int_{2+iT}^{\frac12+iT}{\zeta'\over\zeta}(s)\mathrm ds=\sum_{|\rho-2-iT|\le6}\underbrace{\int_{2+iT}^{\frac12+iT}{\mathrm ds\over s-\rho}}_{I(\rho)}+O(\log T)
\]

根据辐角原理，我们发现必然有$|I(\rho)|\le\pi$。
由于当$\sigma\ge-8$时总有$\zeta(\sigma+iT)=O(T^{8.5})$，所以根据[[Jensen 公式]]可知：

\[
\sum_{|\rho-2-iT|\le6}1=O(\log T)
\]

将此结果回代至 @eqnst2 中，就有：

```math
S(T)=O(\log T)
```

再将这个结论代入回 @lmnt 中，就能得到 @eqnrvm。

## 参考文献

```bibliography
edwards1974:
  type: book
  label: Edw74
  author: Edwards, H. M.
  year: 1974
  title: Riemann’s zeta function
  publisher: Academic Press
th1986:
  type: book
  label: TH86
  author: ["Titchmarsh, E. C.", "Heath-Brown, D. R."]
  year: 1986
  title: The theory of the Riemann zeta-function
  edition: 2
  publisher: Oxford University Press
```
