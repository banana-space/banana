---
title: Calderón–Zygmund 理论
aliases: [Calderón-Zygmund 理论]
categories: [调和分析]
---

<problems>
- 关于 $K^\ast$ 的引理与 Calderón–Zygmund 分解缺少证明，Calderón–Zygmund 定理的证明也尚未给出。
- Calderón–Zygmund 分解的最后一条估计似乎应为 $\int_{B_i} |b_i| \leq C_d \lambda \mathscr{L}(B_i)$。
</problems>

**Calderón–Zygmund理论**是[[调和分析]]、[[Fourier分析]]
和[[奇异积分]]等相关领域中最重要的理论之一，它给出了一类重要的
奇异积分算子（现称为Calderón–Zygmund算子）的$L^p$有界性。

该理论以[[Alberto Calderón]]和他的导师[[Antoni Zygmund]]
命名，建立起这一理论的作品为 [@CZ52]。

本条目的主体几何设定为$(\mathbb{R}^d,d_2,\mathscr{L})$，
其中$d_2$指Euclid距离，$\mathscr{L}$指[[Lebesgue测度]]。
大部分内容可类比推广到[[各向同性空间]]。

我们用$\Delta$表示对角线$\{(x,x) \in
\mathbb{R}^d \times \mathbb{R}^d:x \in \mathbb{R}^d\}$，
用$\mathbb{K}$表示基域$\mathbb{R}$或$\mathbb{C}$。

## Calderón–Zygmund核和Calderón–Zygmund算子

::: definition [Calderón–Zygmund核] {@def:CZK}
设$\alpha$是$(0,1)$中的一个数。我们称一个连续函数
$K\colon\Delta^C \rightarrow \mathbb{K}$为一个
**$\alpha$次Calderón–Zygmund核**（简称为CZ核），
如果存在一个正数$C$满足：

1. 对于任意$(x,y) \in \Delta^C$都有
   \[
   |K(x,y)| \leq \frac{C}{|x-y|^d}.
   \]

2. 对于任意$x,x',y \in \mathbb{R}^d$，如果
   $x$和$y$不同，而且它们满足
   $|x-x'| \leq \frac{1}{2}|x-y|$，则必然满足
   \[
   |K(x,y)-K(x',y)| \leq \frac{C}{|x-y|^d}
   \left( \frac{|x-x'|}{|x-y|} \right)^\alpha.
   \]

3. 对于任意$x,y,y' \in \mathbb{R}^d$，如果
   $x$和$y$不同，而且它们满足
   $|y-y'| \leq \frac{1}{2}|x-y|$，则必然满足
   \[
   |K(x,y)-K(x,y')| \leq \frac{C}{|x-y|^d}
   \left( \frac{|y-y'|}{|x-y|} \right)^\alpha.
   \]

:::

所有$\alpha$次Calderón–Zygmund核构成的集合记为
$\mathrm{CZK}_\alpha$，所装备的范数记作
$\|\cdot\|_{\mathrm{CZK}_\alpha}$：$\|K\|_{\mathrm{CZK}_\alpha}$
定义为使 @def:CZK 中三个条件都成立的所有正数 $C$ 的下确界。

@def:CZK 中所要求的系数$\frac{1}{2}$可以更换为
任何一个在$(0,1)$中的实数，距离也可以更换为$\mathbb{R}^d$
上的任何距离（因为它们事实上是等价的），
只不过$C$的取值范围发生了变化。

::: remark
当$\alpha=1$时，条件2表明$K(\cdot,y)$在
$\mathbb{R}^d \setminus \{y\}$上是局部
[[Lipschitz 连续映射|Lipschitz连续]]的，因此[[Rademacher定理]]表明
在$\Delta^C$上$\nabla_x K(x,y)$几乎处处存在，而且满足估计
\[
|\nabla_x K(x,y)| \leq \frac{C}{|x-y|^{d+1}}.
\]
同理有关于$\nabla_y K(x,y)$的结论。
:::

设$T$是一个$L^2(\mathbb{R}^d)$上的有界算子。
我们称一个[[Schwartz核]] $K$ **从属于** $T$，
如果任意一个紧支$L^2$函数$f$都满足
\[
Tf(x) = \int_{\mathbb{R}^d} K(x,y)f(y)\,dy
\]
在$(\operatorname{supp} f)^C$上几乎处处成立，即$T$在
$(\operatorname{supp} f)^C$上的Schwartz核表示为$K(x,y)$。

::: remark* (警告)
此处因为Schwartz核定理工作不完善，我们无法直接引用，
因此可能出现一些定义上的问题。
:::

::: definition [Calderón–Zygmund算子]
我们称一个$L^2(\mathbb{R}^d)$上的有界算子$T$是一个
**$\alpha$次的Calderón–Zygmund算子**（简称为
CZ算子），如果存在一个$\alpha$次的Calderón–Zygmund核
$K$从属于$T$。
:::

所有$\alpha$次Calderón–Zygmund算子构成的集合记为
$\mathrm{CZO}_\alpha$，所装备的范数记作
$\|\cdot\|_{\mathrm{CZO}_\alpha}$，定义为
\[
\|T\|_{\mathrm{CZO}_\alpha} :=
\|T\|_{\mathcal{L}(L^2(\mathbb{R}^d))} +
\|K\|_{\mathrm{CZK}_\alpha}.
\]

::: remark
我们一般是通过定义算子进而找CZ核表示，而不是相反，因为
映射$T \mapsto K$并不是单射。例如考察映射
$T\colon L^2(\mathbb{R}^d) \rightarrow L^2(\mathbb{R}^d)$
使得$T(f)=mf$，其中$m \in L^\infty(\mathbb{R}^d)$。
显然，对于$\operatorname{supp} f$之外的点$x$，有$Tf(x)=0$，
因此$0$从属于$T$。但显然$0$也从属于算子$0$。
:::

记$K^\ast(x,y)=\overline{K(y,x)}$。

::: lemma
如果$K \in \mathrm{CZK}_\alpha$，那么$K^\ast(x,y)$也是。
同理，如果$T \in \mathrm{CZO}_\alpha$，那么它的共轭$T^\ast$
也是。进一步，如果$K$从属于$T$，那么$K^\ast$从属于$T^\ast$。
:::

::: example [Hilbert变换]
[[Hilbert变换]]定义为
\[
H(\varphi)=\operatorname{p.v.} \left( \frac{1}{\pi x}
\right) \ast \varphi.
\]
Hilbert变换是一个Calderón–Zygmund算子。
:::

::: example [Riesz变换]
考察$L^2(\mathbb{R}^d)$上的算子$R_j$，定义为
\[
R_j f(x)=\left( -i\frac{\xi_j}{|\xi|} \hat{f}(\xi)
\right)^\vee(x).
\]
我们称这一算子为Riesz变换，它是一个Calderón–Zygmund算子。
:::

::: example [Cauchy算子]
设$\varphi\colon\mathbb{R} \rightarrow \mathbb{R}$是一个
[[Lipschitz 连续映射]]。作等同
$\mathbb{C} \simeq \mathbb{R}^2$，记$\Gamma=G(\varphi)
  \subset \mathbb{C}$。取$N \subset \mathbb{R}^2$
是$\Gamma$的一个邻域，$f \in C_c^\infty(N)$固定。
对于$z \notin \Gamma$，写作$z=t+i(\varphi(t)+\alpha)$，
定义
\[
\mathcal{C}f(z(t)) = \lim_{\epsilon \rightarrow 0}
\frac{1}{2\pi i} \int_{s:|z(t)-z(s)|>\epsilon}
\frac{f(z(s))}{z(t)-z(s)} z'(s) ds
\]
为Cauchy算子，它也是一个Calderón–Zygmund算子，
但证明极不显然，请参考 [@CMM82] 或 [@CJS89]。
:::

## Calderón–Zygmund定理

Calderón–Zygmund定理说明所有的Calderón–Zygmund算子有$L^p$有界
延拓。

::: theorem [Calderón–Zygmund定理]
设$T$是一个Calderón–Zygmund算子，那么对于任意$1<p<\infty$，
它诱导一个$L^p(\mathbb{R}^d)$上的有界算子作为它的延拓，
或者说$T$是强$(p,p)$型。
:::

定理主体证明依赖Calderón–Zygmund分解，这是[[Frigyes Riesz]]的
“[[日升引理]]”的推广。这一结论在 Calderón 与 Zygmund 的原始论文中是一个引理，
因此又被广泛称为Calderón–Zygmund引理。为表尊重，
我们仍使用引理。

::: lemma [Calderón–Zygmund分解]
设$f$是一个$L^1(\mathbb{R}^d)$函数，$\lambda$是一个正数。
那么，存在一种分解方式
\[
f=g+b,
\]
其中$g \in L^\infty(\mathbb{R}^d)$，
$b \in L^1(\mathbb{R}^d)$。
进一步地，我们可以找到一个只依赖$d$的正数$C_d$和
可数个球$\{B_i\}_{i \in \mathbb{N}}$满足：

1. $\{B_i\}_{i \in \mathbb{N}}$有有界重叠
   性质，特别地，任意$x \in \mathbb{R}^d$都满足
   \[
   \sum_{i=1}^\infty \chi_{B_i}(x) \leq C_d.
   \]

2. \[
   \sum_{i=1}^\infty \mathscr{L}(B_i) \leq
   \frac{C(d)}{\lambda} \|f\|_1.
   \]

使得：
\[
\|g\|_\infty \leq C_d\lambda,
\]
而且$b$可以写作$b=\sum_{i=1}^\infty b_i$并满足：

1. 存在$B_i$使得
   $\operatorname{supp} b_i \subset B_i$。

2. \[
   \int_{\mathbb{R}^d} b_i = 0.
   \]

3. \[
   \int_{B_i} |b_i| \leq C_d \mathscr{L}(B_i).
   \]

:::

## 参考文献

```bibliography
CZ52:
  type: article
  author: [Alberto Calderón, Antoni Zygmund]
  title: On the existence of certain singular integrals
  journaltitle: Acta Mathematica
  volume: 88
  year: 1952
  pages: 85–139
  doi: 10.1007/BF02392130
CMM82:
  type: article
  author: [Ronald Coifman, Alan McIntosh, Yves Meyer]
  title: "L'intégrale de Cauchy définit un opérateur borné sur $L^2$ pour les courbes Lipschitziennes"
  journaltitle: Annals of Mathematics
  volume: 116
  number: 2
  year: 1982
  pages: 361–387
  doi: 10.2307/2007065
CJS89:
  type: article
  author: [Ronald Coifman, Peter Jones, Stephen Semmes]
  title: Two elementary proofs of the $L^2$ boundedness of Cauchy integrals on Lipschitz curves
  journaltitle: Journal of the American Mathematical Society
  volume: 2
  number: 3
  year: 1989
  pages: 553–564
  doi: 10.2307/1990943
```

```terms
各向同性空间:
  en: space of homogeneous type
有界重叠性质:
  en: bounded overlapping property
日升引理:
  en: rising sun lemma
```
