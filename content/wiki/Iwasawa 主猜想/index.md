---
title: Iwasawa 主猜想
categories: [代数数论]
---

<problems>
- “Rubin 的证明”一节中的证明不完整，只列出了所用的引理。
- “应用”“推广”各节需要扩充。
</problems>

Iwasawa 主猜想，一般是指 $\mathbb{Q}$ 上的 Iwasawa 主猜想，
给出了 [[p 进 L 函数|$p$ 进 $L$ 函数]]和 $\mathbb{Z}_p$-扩张的[[理想类群]]塔之间的联系：

$p$ 进解析函数 $\approx$ $p$ 进代数函数。

而更广义的 Iwasawa 主猜想，
则是 $\mathbb{Q}$ 上的 Iwasawa 主猜想到[[全实域]]、
[[CM 域]]、[[椭圆曲线]]等上面的推广。

## 动机

Iwasawa 主猜想是 Iwasawa 在 1969 年通过[[函数域类比]]，
以及[[代数曲线]]的[[Weil 猜想]]得到的。

有限域上代数曲线的 Weil 猜想本质上就是：

Frobenius 在曲线的 [[Jacobi 簇]]作用的特征多项式
$=$ [[Hasse–Weil zeta 函数|Hasse–Weil $ζ$ 函数]]。

数域和代数曲线的类比为：

- Frobenius 作用对应于 $\Lambda$-作用；

- Jacobi 簇对应于理想类群给出的对象
  （之后会看到它是 $X_{\infty}$）；

- Hasse–Weil $\zeta$ 函数对应于
  [[p 进 Kubota–Leopoldt zeta 函数|$p$ 进 Kubota–Leopoldt $ζ$ 函数]]。

由此对应，Iwasawa 就给出了下一节的陈述。

## 陈述

假设 $p$ 是一个奇素数。
给定如下的信息：

- $\omega$ 是 $\left( \mathbb{Z}/p\mathbb{Z} \right)^{\times}$
  上的 [[Teichmüller 特征]]；

- $X_{\infty}:=\lim A_n$，
  其中 $A_n$ 是 $\mathbb{Q}(\mu_{p^n})$ 的理想类群的 $p$-部分；

- $\gamma$ 是 $\mathbb{Z}_p$ 的一个[[拓扑生成元]]，
  通过 [[p 进 L 函数|$p$ 进 $L$ 函数]]的理论确定了 Iwasawa 形式幂级数 $f_{\omega^k}$。
  当 $\omega^k$ 非平凡时，$f_{\omega^k}$ 在 $\mathbb{Z}_p[\![T]\!]$ 中；

- $\Lambda:=\mathbb{Z}_p[\![T]\!]$ 是 [[Iwasawa 代数]]，
  需注意 $X_{\infty}$ 有自然的 $\mathbb{Z}_p[\![\mathbb{Z}_p^\times]\!]$-作用，
  从而有特征空间分解
  \[
  X_{\infty}=\bigoplus_{i=1}^{p-1}X_{\infty}(\omega^i),
  \]
  并且每个特征空间有自然的 $\Lambda$-模结构。
  因此根据 [[Iwasawa 理论]]，
  可以定义它的特征多项式。

::: theorem [$\mathbb{Q}$ 上的 Iwasawa 主猜想] {@IMCor}
对于偶数 $0<k<p-1$，有如下的理想相等
\[
\left( f_{\omega^k} \right)_{\Lambda}=
\left( \operatorname{char}_{\Lambda}\left(X_{\infty}(\omega^{p-k})\right) \right)_{\Lambda}.
\]
:::

## 证明

### 等价刻画

@IMCor 的两边都是不好刻画的对象，
所以证明的第一步应该寻找一个更好的等价形式。

记 $E_{p^n}$ 为 $\mathbb{Q}(\mu_{p^n})$ 的单位群，
$C_{p^n}$ 为 $\mathbb{Q}(\mu_{p^n})$ 中的[[分圆单位]]。
$\mathcal{E}_{p^n},\mathcal{C}_{p^n}$ 为 $E_{p^n},C_{p^n}$
在 $\mathbb{Q}_p(\mu_{p^n})$ 中的闭包。
最后
\[
\mathcal{E}_{\infty}:=\lim\mathcal{E}_{p^n},
\,\mathcal{C}_{\infty}:=\lim\mathcal{C}_{p^n}.
\]
利用[[Coleman 理论]]、[[类域论]]和[[对偶理论]]可以得到 @IMCor
的等价刻画：

::: theorem [$\mathbb{Q}$ 上的 Iwasawa 主猜想，无 $L$-函数版本]
对于偶数 $0<k<p-1$，
有
\[
\left( \operatorname{char}_{\Lambda}
\left(\mathcal{E}_{\infty}(\omega^{k})/\mathcal{C}_{\infty}(\omega^{k})\right)
\right)_{\Lambda}
=\left( \operatorname{char}_{\Lambda}
\left(X_{\infty}(\omega^{k})\right)
\right)_{\Lambda}.
\]
:::

但是[[类数公式]]给出了
\[
\#\left( A_n^+ \right)=\#\left( \mathcal{E}_n/\mathcal{C}_n \right),
\]
也可以翻译成：
存在 $c$ 使得 $\forall\,n$，

```math {@finlevcont}
c^{-1}
\le \frac{\left(\Lambda/f\Lambda\right)_{\Gamma_n}}
{\left( \Lambda/g\Lambda \right)_{\Gamma_n}}
\le c,
```

其中 $f=\prod_{k\text{ 偶}}\operatorname{char}_{\Lambda}
\left(\mathcal{E}_{\infty}(\omega^{k})/\mathcal{C}_{\infty}(\omega^{k})\right)$，
$g=\prod_{k\text{ 偶}}\operatorname{char}_{\Lambda}
\left(X_{\infty}(\omega^{k})\right)$。

用 $\mathbb{Z}_p$-扩张的 Iwasawa 理论，
可以得到：

任意一边的整除关系，
即 $f\mid g$ 或 $g\mid f$，
加上条件 @finlevcont 会迫使 $f=g$。

故要完成主定理的证明，
只需证明以下两件事之一：

1. 对任意偶数 $0<k<p-1$，
   \[
   \operatorname{char}_{\Lambda}
   \left(\mathcal{E}_{\infty}(\omega^{k})/\mathcal{C}_{\infty}(\omega^{k})\right)
   \Bigm|
   \operatorname{char}_{\Lambda}
   \left(X_{\infty}(\omega^{k})\right).
   \]

2. 或者，对任意偶数 $0<k<p-1$，
   \[
   \operatorname{char}_{\Lambda}
   \left(X_{\infty}(\omega^{k})\right)
   \Bigm|
   \operatorname{char}_{\Lambda}
   \left(\mathcal{E}_{\infty}(\omega^{k})/\mathcal{C}_{\infty}(\omega^{k})\right).
   \]

### Mazur–Wiles 的证明

Mazur 和 Wiles 在 1984 年推广了 Ribet 的[[模形式]]方法，
用一篇近 150 页的文章解决了第一个整除关系，
即
\[
\operatorname{char}_{\Lambda}
\left(\mathcal{E}_{\infty}(\omega^{k})/\mathcal{C}_{\infty}(\omega^{k})\right)
\Bigm|
\operatorname{char}_{\Lambda}
\left(X_{\infty}(\omega^{k})\right).
\]

### Rubin 的证明

Rubin 在 1990 年推广了 Thaine 与 Kolyvagin 的工作，
给出了主猜想的一个更初等简洁的证明。
他证明的是第二个整除关系，
即

```math {@seconddivide}
\operatorname{char}_{\Lambda}
\left(X_{\infty}(\omega^{k})\right)
\Bigm|
\operatorname{char}_{\Lambda}
\left(\mathcal{E}_{\infty}(\omega^{k})/\mathcal{C}_{\infty}(\omega^{k})\right).
```

首先明确一些记号：

1. 以 $\chi$ 记 $\omega^k$，
   以 $f_{\chi},g_{\chi}$ 分别记
   $\operatorname{char}_{\Lambda}
    \left(X_{\infty}(\omega^{k})\right)$
   和 $\operatorname{char}_{\Lambda}
    \left(\mathcal{E}_{\infty}(\omega^{k})/\mathcal{C}_{\infty}(\omega^{k})\right)$。
   记 $f_{\chi}$ 的[[伪同构标准型]]为
   \[
   \Lambda/f_{\chi}\simeq\bigoplus_{i=1}^k\Lambda/f_i.
   \]

2. 固定 Iwasawa 塔的一级 $n$，
   记 $F=\mathbb{Q}(\mu_{p^n})^+$，
   $G=\operatorname{Gal}(F/\mathbb{Q})$，
   $A=A_n$，$\mathcal{E}=\mathcal{E}_n$，
   $\mathcal{C}=\mathcal{C}_n$。

3. 记 $\mathcal{E}^1=\mathcal{E}^1_n$
   为 $\mod \mathfrak{p}$ 余 $1$ 的整体单位的闭包，
   $\mathcal{C}^1=\mathcal{C}^1_n$
   为 $\mod \mathfrak{p}$ 余 $1$ 的分圆单位的闭包。
   显然在做商意义下我们可以以 $\mathcal{E}^1$、$\mathcal{C}^1$
   替代 $\mathcal{E}$、$\mathcal{C}$。

4. 固定 $t=p^r$ 以及和 $(t,F)$ 关联的集合 $S$。
   记 $\{\kappa_r\}_{r\in S}$ 为 [[Kolyvagin 系]]。
   记 $l\in S$ 为素数，
   $\mathcal{O}_F\supset\mathfrak{l}\mid l$。
   记 $\pi_l$ 为 [[Kolyvagin 系|Kolyvagin 映射]]。

5. 定义 $v_{l,\chi}:F^\times/F^{\times t}
    \rightarrow\Lambda_n/t\Lambda_n$ 为唯一满足下面条件的 $\Lambda_n$-同态：
   \[
   v_{l,\chi}(w)e(\chi)\mathfrak{l}
   =e(\chi)[w]_l.
   \]

::: lemma {@KolChethm}
给定信息：

1. $\mathfrak{a}\in\operatorname{Cl}F$；

2. $W$ 是 $F^\times/F^{\times t}$ 中的有限 $G$-模，
   $\psi:W\rightarrow
      \left( \mathbb{Z}/t\mathbb{Z} \right)[G]$
   是 $G$-等变映射。

我们可以找到：

1. $\mathfrak{l}\in \mathfrak{a}$，
   $\mathfrak{l}\mid l\in S$；

2. $[W]_l=0$，
   并且存在一个 $u\in\left( \mathbb{Z}/t\mathbb{Z} \right)$ 使得
   $\pi_l(w)=u\psi(w)\mathfrak{l}$ 对所有 $w\in W$ 成立。

:::

::: lemma {@descentarithmetic}
存在 $\Lambda$ 中[[指标|有限指标]]的理想 $I$，
使得 $\forall\,\eta\in I$ 以及 $\forall\,n$，
存在 $\Lambda_n$-模同态
$\theta_{n,\chi}:\mathcal{E}^1_n(\chi)\rightarrow\Lambda_n$
使得 $\theta_{n,\chi}(\mathcal{C}^1_n(\chi))=\eta g_{\chi}\Lambda_n$。
:::

::: lemma {@descentclassgroup}
存在 $\Lambda$ 中有限指标的理想 $J$，
和对任意 $n$ 有一组 $\mathfrak{a}_1,\cdots,\mathfrak{a}_k\in A_n(\chi)$，
使得
\[
J\operatorname{Ann}_{\frac{A_n(\chi)}
{\Lambda_n\langle\mathfrak{a}_1,\cdots,\mathfrak{a}_{i-1}\rangle}}
(\mathfrak{a}_i)\subset f_i\Lambda_n.
\]
:::

::: lemma {@psivlemma}
现在固定 $n,r,l,\mathfrak{l}$ 如上。
设 $B(\chi)$ 为 $A(\chi)$ 中被
$\mathfrak{p}\mid\frac{r}{l}$ 生成的子模。
设 $W=\Lambda_n\langle e(\chi)\kappa_r\rangle$。
设有 $\eta,f\in\Lambda_n$ 使得：

1. \[
   \eta\operatorname{Ann}_{A(\chi)/B(\chi)}
   \left( [e(\chi)\mathfrak{l}] \right)\subset f\Lambda_n;
   \]

2. \[
   t\ge\# \left( A(\chi) \right)\cdot
   \# \left( \frac{\Lambda_n/t\Lambda_n}
   {\Lambda_n[e(\chi)\kappa_r]_l} \right).
   \]

则存在 $\Lambda_n$-模同态 $\psi:W\rightarrow \Lambda_n/t\Lambda_n$
使得
\[
f\psi(e(\chi)\kappa_r)=\eta v_{\mathfrak{l},\chi}(\kappa_r).
\]
:::

::: proof [@seconddivide 的证明]
通过以上引理。
:::

## 应用

## 推广

```terms
Iwasawa 主猜想:
  en: Iwasawa main conjecture
```
