---
title: 虚拟基本类
categories: [计数几何]
navboxes: [计数几何]
---

在[[几何学]]中，
特别是[[导出代数几何]]、[[导出微分几何]]中，
**虚拟基本类**是[[基本类]]的推广。
基本类是对[[紧空间|紧]]、[[定向]]的[[光滑流形]]定义的，
而虚拟基本类将其推广到不一定光滑的空间，
或更准确地说，[[拟光滑态射|拟光滑]]的空间。
该构造是[[计数几何]]的基本工具。

构造虚拟基本类的初衷是为了定义 [[Gromov–Witten 不变量]]，
该不变量是某个通常不光滑的模空间的虚拟基本类。

虚拟基本类首先由[[李骏]]和[[田刚]] [@LiTian1996] 定义，
该工作由之后 [[Behrend]] 等人的一系列文章优化，
例如 [@Behrend1997]、[@BF1997] 等。

虚拟基本类可以用来定义 [[Gromov–Witten 不变量]]和
[[Donaldson–Thomas 不变量]]。
一种类似虚拟基本类的构造也可以用来定义[[四维 Donaldson–Thomas 不变量]]。

## 想法

首先回忆，对[[紧空间|紧]]、[[定向]]的[[光滑流形]] $X$，
有[[基本类]] $[X] \in H_\bullet (X; \mathbb{Z})$。
当 $X$ 不一定是光滑的空间（不一定是流形）时，
我们基于以下想法定义其虚拟基本类，作为基本类的推广：

假设给定 $n$ 维紧、定向光滑流形 $Y$，
秩 $d$ 的定向[[光滑向量丛]] $E \to Y$，
及其[[截面]] $s \colon Y \to E$，
并考虑零截面 $0 \colon Y \to E$。
我们将这两个截面的像之交记为
$X = s (Y) \cap 0 (Y)$。
如果 $s (Y)$ 与 $0 (Y)$ [[横截相交]]，
则其交 $X$ 是 $(n - d)$ 维紧、光滑定向流形，
并且由 [[Thom 同构定理]]，有
\[
[X] = [Y] \cap e (E),
\]
这里 $\cap$ 是[[帽积]]，我们将其理解为同调类与某个上同调类相交，
而 $e (E)$ 是 [[Euler 类]]，其由 Thom 同构定理中的 [[Thom 类]]而定义。

下面，假设 $s (Y)$ 与 $0 (Y)$ 不再横截相交。
相应地，其交 $X$ 不再光滑。
然而，我们仍然可以用上述公式来定义 $[X]$，
并称之为不光滑的空间 $X$ 的虚拟基本类。

这么做的一个问题是，$X$ 的虚拟基本类不仅取决于空间 $X$ 自身，
还取决于如何将 $X$ 写成某个向量丛截面的零点集。
解决该问题的办法是不仅考虑空间 $X$ 自身，
还考虑 $X$ 上的一个两项的向量丛[[链复形]]，
称为其[[切复形]]，在文献中更常称之为[[障碍论]]，定义为
\[
\Bigl( \mathrm{T} Y |_X \overset{d s |_X}{\longrightarrow} E |_X \Bigr),
\]
其中 $\mathrm{T} Y$ 是 $Y$ 的[[切丛]]，$d s$ 是 $s$ 的[[切映射]]。
此信息足以恢复出上面定义的虚拟基本类 $[X]$。
注意，文献中的障碍论也常常指该复形的对偶复形。

在最一般的情形，我们只要求给定空间 $X$ 以及上述两项链复形，
但不要求存在 $Y$ 使得 $X$ 能写成其上向量丛截面的零点集。
此时定义虚拟基本类的公式仍然有意义，也能定义虚拟基本类 $[X]$。
直观来说，我们在 $X$ 的局部上将其写成向量丛截面的零点集，
然后将这些局部信息粘接起来，尽管这一说法的严格意义并不明显。

这种在局部上能写成向量丛截面的零点集的空间，
在[[导出微分几何]]、[[导出代数几何]]中称为[[拟光滑态射|拟光滑]]的空间。
因此，我们说紧、定向的拟光滑空间都有虚拟基本类，
正如紧、定向的光滑流形都有基本类。

上述紧的性质不是必要的。
回忆对不一定紧的定向光滑流形 $X$，在其 [[Borel–Moore 同调]]中也有基本类
$[X] \in H^\mathrm{BM}_\bullet (X; \mathbb{Z})$。
相应地，对不一定紧的定向拟光滑空间 $X$，
在其 Borel–Moore 同调中也有虚拟基本类
$[X] \in H^\mathrm{BM}_\bullet (X; \mathbb{Z})$。

在[[代数几何]]中，我们将上述想法限制到 $Y$ 为[[复流形]]、$E$ 为[[全纯向量丛]]的情形。
此时，Euler 类等于向量丛的最高阶[[陈类]]，后者在代数几何中可以定义。
这一构造也可以进一步推广到复数域 $\mathbb{C}$ 以外的域，
但需使用[[周环]]来代替普通 Borel–Moore 同调。

该构造也可以推广到[[轨形]]，及相应地，代数几何中的 [[Deligne–Mumford 叠]]，
因为在光滑的情形，我们已经知道如何定义基本类，
而上述过程告诉我们如何对拟光滑轨形、拟光滑 Deligne–Mumford 叠定义虚拟基本类。

## 定义

### 在代数几何中

虚拟基本类最朴素的想法都来自于经典的相交理论，也就是 Fulton 的形变到法锥理论和局部化陈类，
见其书 [@Fulton98]。具体来说，是如下模型：

::: example
考虑纯$n$维的代数概形$X$和其上的秩$e$向量丛$E$，给定一个其截面$s$，我们有
\[
\begin{tikzcd}
  Z(s) \ar[r] \ar[d,"i"'] \ar[dr, phantom, pos=0.125, "\ulcorner"] &
  X \ar[d,hook,"s"'] \\
  X \ar[r,hook,"0"] & E
\end{tikzcd}
\]
其中$Z(s)$即为$s$的零点。我们定义局部化陈类为
\[
c_{\mathrm{loc}}(E,s):=0^!([X])=0^*(C_{Z(s)/X})\in\mathrm{CH}_{n-e}(Z(s))
\]
这里$0^!([X])=0^*(C_{Z(s)/X})$即为如下操作：
\[
0^!\colon\mathrm{CH}_*(X)\stackrel{\mathrm{sp}}{\to}\mathrm{CH}_*(C_{Z(s)/X})\to\mathrm{CH}_*(N_{X/E}|_{Z(s)})\cong\mathrm{CH}_*(Z(s)),
\]
其中$\mathrm{sp}$即为通过形变法锥得到的特化映射。
:::

事实上，从几何上讲，这一系列操作就是将截面合理地扰动，使之形变到与零截面横截的位置。

而我们所考虑的模空间（例如[[Gromov–Witten 不变量]]需要的稳定映射的模空间，
或者三维 [[Calabi–丘流形]]的[[Donaldson–Thomas 不变量]]
需要的稳定层的模空间）很多都是局部上可以写作上面的模型的样子，
我们需要做的就是发展一个整体的一般的理论来将局部模型粘起来。
我们主要需要如下推广：

- Fulton 的理论只对闭嵌入 $X\subset Y$ 定义了法锥和形变到法锥，
  我们需要对一般[[代数叠]]的 [[Deligne–Mumford 映射]]定义法锥和形变到法锥，
  特别地，对于模空间 $M\to\operatorname{Spec}\mathbb C$，我们可以定义“内蕴的”法锥。

- 将 Fulton 的局部化陈类整体化，从而得到**虚拟基本类**。

我们在此只作简介，不涉及很多细节。
我们考虑的都是域上一般[[代数叠]]的[[Deligne–Mumford 映射]]（也就是对角无分歧），
读者若不熟悉一般[[代数叠]]的理论，
可以视作域上概形之间的映射。

::: definition
对于$f\colon X\to Y$，我们定义**内蕴法层**为$\mathfrak N_{f}:=\mathfrak C(\mathbb L_f)$，其中
$\mathbb L_f\in\mathbf{D}^{(-\infty,0]}(X)$是相对余切复形，对应的**Abel 锥叠**为
$\mathfrak C(\mathbb L_f):=h^1/h^0(\mathbb L_f^{\vee})$。后者为$[E^1/E^0]$，
其中$\tau^{[0,1]}(\mathbb L_f^{\vee})=[E^0\to E^1]$。
:::

通俗地说，局部上（为了省事，我们写成整体的形式）可以将 $f$ 分解为 $f\colon X\subset Y'\to Y$，
其中$Y'\to Y$光滑，那么$\mathfrak N_{f}=[N_{X/Y'}/T_{Y'/Y}|_X]$，
这是因为此时余切复形（的截断）为$[I/I^2\to\Omega_{Y'/Y}|_X]$。

::: definition
验证作用不变性就会得到$\mathfrak C_{f}=[C_{X/Y'}/T_{Y'/Y}|_X]$，
可以证明跟选取无关，局部可以粘起来，于是我们称其为**内蕴法锥**。
:::

注意到如果$f$就是闭嵌入，则我们可以有平凡分拆$f\colon X\subset Y\to Y$，那么
\[
\mathfrak C_{f}=[C_{X/Y}/T_{Y/Y}|_X]=C_{X/Y}\subset\mathfrak N_{f}=[N_{X/Y}/T_{Y/Y}|_X]=N_{X/Y},
\]
于是退化到 Fulton 的情况。因此这是一个好的法锥的推广。

接下来考虑形变到法锥的推广：

::: definition
我们要定义形变空间$M_f^{\circ}\to\mathbb P^1$使得存在$m\colon X\times\mathbb P^1\to M_f^{\circ}$使得
$m_{\neq0}=f$且$m_0=0_{\mathfrak C_f}\colon X\to\mathfrak C_f$，如下：

1. 若 $f$ 为闭嵌入，那么和 Fulton 一样，只需定义
   \[
   M_f^{\circ}=M_f\backslash Y',
   \]
   其中$M_f:=\mathrm{Bl}_{X\times\{0\}}(Y\times\mathbb P^1)$且
   $Y':=\mathrm{Bl}_{X\times\{0\}}(Y\times\{0\})$。

2. 若 $f$ 是代数空间之间的无分歧映射，那么可以证明存在交换图
   \[
   \begin{tikzcd}
     X' \ar[r,hook,"f'"] \ar[d,two heads] & Y' \ar[d,two heads] \\
     X \ar[r,"f"] & Y
   \end{tikzcd}
   \]
   使得竖箭头为平展覆盖，$f'$ 是闭嵌入，且 $X'$、$Y'$ 为概形。定义
   \[
   M^{\circ}_f:=[M_{X'\times_XX'/Y'\times_YY'}^{\circ}\rightrightarrows M_{X'/Y'}^{\circ}],
   \]
   此时 $X'\times_XX'\to Y'\times_YY'$ 是闭嵌入。

3. 一般情况下，可以证明存在交换图
   \[
   \begin{tikzcd}
     X' \ar[r,"f'"] \ar[d,two heads] & Y' \ar[d,two heads] \\
     X \ar[r,"f"] & Y
   \end{tikzcd}
   \]
   使得竖箭头为光滑覆盖，$f'$ 是闭嵌入，且 $X'$、$Y'$ 为概形。定义
   \[
   M^{\circ}_f:=[M_{X'\times_XX'/Y'\times_YY'}^{\circ}\rightrightarrows M_{X'/Y'}^{\circ}],
   \]
   此时 $X'\times_XX'\to Y'\times_YY'$ 是代数空间之间的无分歧映射。
:::

因此我们可以类似地定义一般情况下的特化映射
$\mathrm{sp}_f\colon\mathrm{CH}_*(Y)\to\mathrm{CH}_*(\mathfrak C_f)$为填充如下
图表的映射：
\[
\begin{tikzcd}
  {\mathrm{CH}_*(\mathfrak C_f)} & {\mathrm{CH}_*(M^{\circ}_f)} & {\mathrm{CH}_*(Y\times\mathbb A^1)} & 0 \\
  & {\mathrm{CH}_*(\mathfrak C_f)} & {\mathrm{CH}_*(Y)}
  \arrow[from=1-1, to=1-2]
  \arrow["0"', from=1-1, to=2-2]
  \arrow[from=1-2, to=1-3]
  \arrow["{\iota_0^!}", from=1-2, to=2-2]
  \arrow["{\iota_{\zeta}^!}", from=1-2, to=2-3]
  \arrow[from=1-3, to=1-4]
  \arrow["\cong", from=1-3, to=2-3]
  \arrow["{\mathrm{sp}_f}", dashed, from=2-3, to=2-2]
\end{tikzcd}
\]
其中$\zeta\neq0$，细节就此略去。
这些映射和构造都满足一系列与拉回、推出的交换性，包括基变换性质，这里也略去。

最后，我们可以定义一般的**虚拟基本类**了。
在此之前，我们先定义一个整体的“向量丛的零点”，也就是障碍理论：

::: definition
[[代数叠]]的[[Deligne–Mumford 映射]] $f\colon X\to Y$的**障碍理论**为
$\mathbf{D}_{\mathrm{coh}}^{(-\infty,0]}(X)$内的映射
\[
\phi\colon\mathbb F\to L_f:=\tau^{\geq-1}\mathbb L_f
\]
使得$h^0(\phi)$双射且$h^{-1}(\phi)$满射，且$\mathbb F$为Tor-维数有界的完美复形。
我们称它是**完美障碍理论**，如果$\mathbb F$为Tor-维数为$[-1,0]$的完美复形。
:::

此时$h^0(\phi)$双射且$h^{-1}(\phi)$满射这个条件等价于诱导锥叠映射
$\mathfrak C(L_f)\to\mathfrak C(\mathbb F)$是
闭嵌入，完美是指$\mathfrak C(\mathbb F)$是向量丛锥叠。因此：

::: definition
考虑[[代数叠]]的[[Deligne–Mumford 映射]] $f\colon X\to Y$有完美障碍理论
$\phi\colon\mathbb F\to L_f$，且
$X$有仿射稳定化子（为了向量丛的同伦性质），我们定义**虚拟拉回**为复合
\[
f^!_{\mathrm{vir}}\colon\mathrm{CH}_*(Y)\stackrel{\mathrm{sp}_f}{\to}\mathrm{CH}_*(\mathfrak C_f)\stackrel{\iota_*}{\to}
\mathrm{CH}_*(\mathfrak C(\mathbb F))\stackrel{0^!}{\to}\mathrm{CH}_*(X).
\]

如果$X$是$k$上的Deligne–Mumford叠且有完美障碍理论$\phi\colon\mathbb F\to L_{X/k}$，
则定义**虚拟基本类**为
\[
[X]^{\mathrm{vir}}_{\phi}:=p^!_{\mathrm{vir}}[\operatorname{Spec} k],
\]
其中$p:X\to \operatorname{Spec} k$为结构映射。
:::

注意到这些构造在局部上都是本节开头的模型，于是我们建立了所需的理论。

## 推广

- [@Khan] 将虚拟基本类的构造从
  [[Deligne–Mumford 叠]]的情形推广到
  一般的（[[导出代数叠|导出]]）[[代数叠]]，
  该虚拟基本类定义在叠的[[母题 Borel–Moore 同调]]中。

  然而，这并未完全解决在一般代数叠上定义[[计数不变量]]的问题。
  计数不变量通常定义为某种虚拟基本类与某个[[普通上同调]]类的配对，
  而 Borel–Moore 同调无法与普通上同调相配对。

## 参考文献

背景知识：

```bibliography
Fulton98:
  type: book
  author: 'Fulton, William'
  year: 1998
  title: Intersection theory
  publisher: Springer
```

构造：

```bibliography
LiTian1996:
  type: article
  author: ['Li, Jun', 'Tian, Gang']
  year: 1998
  title: Virtual moduli cycles and Gromov–Witten invariants of algebraic varieties
  journaltitle: J. Amer. Math. Soc.
  volume: 11
  number: 1
  pages: '119-174'
Behrend1997:
  type: article
  author: 'Behrend, K.'
  year: 1997
  title: Gromov–Witten invariants in algebraic geometry
  journaltitle: Invent. Math.
  volume: 127
  pages: 601–617
BF1997:
  type: article
  author: ['Behrend, K.', 'Fantechi, B.']
  year: 1997
  title: The intrinsic normal cone
  journaltitle: Invent. Math.
  volume: 128
  pages: 45–88
```

推广：

```bibliography
Khan:
  type: preprint
  author: 'Khan, Adeel'
  title: Virtual fundamental classes of derived stacks I
  arxiv: '1909.01332'
```

```terms
虚拟基本类:
  en: virtual fundamental classes
```
