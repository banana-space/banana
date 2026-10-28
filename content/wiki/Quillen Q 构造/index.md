---
title: 'Quillen $\mathsf{Q}$ 构造'
categories: [$K$ 理论]
navboxes: [代数 K 理论]
---

<problems>
- “与 Waldhausen $\mathsf{S}$ 构造的比较”一节中，命题没有给出证明；定理的证明只化归到“前两个映射的复合与后两个映射的复合在作用 $|\iota(-)|$ 之后都是同构”，这一步没有证明。
</problems>

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- 对自然数 $n$，以 $[n]$ 表示[[偏序集]] $\{0,1,\ldots,n\}$，
  视为范畴。
- $\mathsf{Ar}(\mathcal{C})$ 指范畴 $\mathcal{C}$
  的[[箭头范畴]]，即[[函子范畴]] $\mathsf{Fun}([1],\mathcal{C})$。
- $\iota\mathcal{C}$ 指范畴 $\mathcal{C}$ 的[[对象群胚]]，即只保留 $\mathcal{C}$
  中的同构得到的[[∞-群胚|群胚]]。

:::

**Quillen $\mathsf{Q}$ 构造**是[[正合范畴]]的[[代数 $K$ 理论]]的具体构造。

## 定义

::: definition [[[扭箭头范畴]]]
设 $\mathcal{I}$ 是范畴。$\mathcal{I}$
的**扭箭头范畴**，记作 $\mathsf{TwAr}(\mathcal{I})$，
指如下范畴：

- 其对象为 $\mathcal{I}$ 中的映射 $f\colon i_0\to i_1$。

- $f\colon i_0\to i_1$ 到 $g\colon j_0\to j_1$
  的映射 $F$ 为交换图表
  $$
  \begin{tikzcd}
    i_0\ar[r,"f"]&i_1\ar[d,"F_1"]\\
    j_0\ar[u,"F_0"]\ar[r,"g"']&j_1
  \end{tikzcd}
  $$

由构造我们有自然的函子 $\mathsf{TwAr}(\mathcal{I})\to
  \mathcal{I}^\mathrm{op}\times\mathcal{I}$，即
$(f\colon i_0\to i_1)\mapsto(i_0,i_1)$。
这是个[[推出纤维化]]，其[[直化]]是
$\operatorname{Hom}\colon\mathcal{I}^\mathrm{op}\times\mathcal{I}
  \to\mathsf{Ani}$。扭箭头范畴的构造具有函子性，即它给出函子
$\mathsf{TwAr}\colon\mathsf{Cat}\to\mathsf{Cat}$。
:::

::: example
对 $n\in\mathbb{N}$，$\mathsf{TwAr}[n]$ 是个[[偏序集]]，形状如下：
$$
\begin{tikzcd}
  &&&(n,n)\ar[d]\\
  &&\Large{⋰}&\vdots\ar[d]\\
  &(1,1)\ar[d]\ar[r]&\cdots\ar[r]&(1,n)\ar[d]\\
  (0,0)\ar[r]&(0,1)\ar[r]&\cdots\ar[r]&(0,n)
\end{tikzcd}
$$
这关于 $n$ 有函子性，构成余单纯范畴 $\mathsf{TwAr}[\bullet]$。
:::

::: definition [$\mathsf{Q}$ 构造] {@Q}
设 $\mathcal{C}$ 是[[正合范畴]]。其
**$\mathsf{Q}$ 构造**指单纯正合范畴 $\mathsf{Q}_\bullet\mathcal{C}$，
其中 $\mathsf{Q}_n\mathcal{C}\subseteq\mathsf{Fun}(\mathsf{TwAr}[n],\mathcal{C})$
指满足如下条件的对象 $x\colon\mathsf{TwAr}[n]\to\mathcal{C}$
生成的[[满子范畴]]：

- 对 $0\le i<n$，
  $x_{i,i}\to x_{i,i+1}$ 是余纤维化，
  $x_{i+1,i+1}\to x_{i,i+1}$ 是纤维化；

- 对 $0<i\le j<n$，
  $$
  \begin{tikzcd}
    x_{i,j}\ar[r]\ar[d]&x_{i,j+1}\ar[d]\\
    x_{i-1,j}\ar[r]&x_{i-1,j+1}
  \end{tikzcd}
  $$
  是推出图表；

其单纯范畴结构由 $\mathsf{TwAr}[\bullet]$ 的余单纯范畴结构给出。
换言之，$\mathsf{Q}_n\mathcal{C}$ 是如下形状的图表构成的范畴：
$$
\begin{tikzcd}
  &&&x_{n,n}\ar[d,two heads]\\
  &&\Large{⋰}&\vdots\ar[d,two heads]\\
  &x_{1,1}\ar[d,two heads]\ar[r,tail]&\cdots\ar[r,tail]&x_{1,n}\ar[d,two heads]\\
  x_{0,0}\ar[r,tail]&x_{0,1}\ar[r,tail]&\cdots\ar[r,tail]&x_{0,n}
\end{tikzcd}
$$
其中 $\rightarrowtail$ 是余纤维化，
$\twoheadrightarrow$ 是纤维化，所有的方块都是推出。
:::

::: remark
容易发现 $\mathsf{Q}_\bullet\mathcal{C}$ 满足 Segal 条件，
即它是[[双范畴]]。这对下面的 @QW 也成立。
:::

::: definition [$K$ 理论] {@K}
正合范畴 $\mathcal{C}$ 的 **$K$ 理论** $K(\mathcal{C})$ 指
[[$\mathbb{E}_\infty$-群]] $\Omega|\iota \mathsf{Q}_\bullet\mathcal{C}|$，其中：

- $\iota$ 指对单纯正合范畴逐项取对象群胚，
  带上有限余积给出的 $\mathbb{E}_\infty$-幺半群结构，故
  $\iota \mathsf{Q}_\bullet\mathcal{C}$ 是单纯 $\mathbb{E}_\infty$-幺半群；

- $\left|-\right|$ 指单纯对象的几何实现，即沿
  $\mathbb{\Delta}^{\mathrm{op}}$ 取余极限，故
  $|\iota \mathsf{Q}_\bullet\mathcal{C}|$ 是 $\mathbb{E}_\infty$-幺半群；

- $\Omega$ 指取[[环路空间]]，故最终
  $K(\mathcal{C})=\Omega|\iota \mathsf{Q}_\bullet\mathcal{C}|$ 是 $\mathbb{E}_\infty$-群。

显然，$K$ 理论对正合范畴的正合函子有函子性，
给出函子 $K\colon\mathsf{Exact}\to\mathsf{Sp}_{\ge0}$。映射
$$
x\mapsto(0\rightarrowtail0\twoheadleftarrow x)^{-1}
\circ(0\rightarrowtail x\twoheadleftarrow x)
$$
给出 $\mathbb{E}_\infty$-幺半群自然同态
$\iota\Rightarrow K\colon\mathsf{Exact}\to\mathbb{E}_\infty\text{-}\mathsf{Mon}$。
对象 $x\in\mathcal{C}$ 在该映射下的像称为
$x$ 的 **$K$ 类**，记作 $[x]$。
:::

$\mathsf{Q}$ 构造还有以下变体，由 [[George Raptis]] 和
[[Wolfgang Steimle]] 在 2017 年发现，
给出 [[Waldhausen 范畴]]的 $K$ 理论：

::: definition [配边范畴] {@QW}
设 $\mathcal{C}$ 是 Waldhausen 范畴。
其**配边范畴**指单纯 Waldhausen 范畴
$\mathsf{Cob}_\bullet\mathcal{C}$，其中
$\mathsf{Cob}_n\mathcal{C}\subseteq\mathsf{Fun}(\mathsf{TwAr}[n],\mathcal{C})$
指满足如下条件的对象 $x\colon\mathsf{TwAr}[n]\to\mathcal{C}$
生成的[[满子范畴]]：

- 对 $0\le i<n$，
  $x_{i,i}\to x_{i,i+1}$ 是余纤维化；

- 对 $0<i\le j<n$，
  $$
  \begin{tikzcd}
    x_{i,j}\ar[r]\ar[d]&x_{i,j+1}\ar[d]\\
    x_{i-1,j}\ar[r]&x_{i-1,j+1}
  \end{tikzcd}
  $$
  是推出图表；

其单纯范畴结构由 $\mathsf{TwAr}[\bullet]$ 的余单纯范畴结构给出。
换言之，$\mathsf{Cob}_n\mathcal{C}$ 是如下形状的图表构成的范畴：
$$
\begin{tikzcd}
  &&&x_{n,n}\ar[d]\\
  &&\Large{⋰}&\vdots\ar[d]\\
  &x_{1,1}\ar[d]\ar[r,tail]&\cdots\ar[r,tail]&x_{1,n}\ar[d]\\
  x_{0,0}\ar[r,tail]&x_{0,1}\ar[r,tail]&\cdots\ar[r,tail]&x_{0,n}
\end{tikzcd}
$$
其中 $\rightarrowtail$ 是余纤维化，所有的方块都是推出。

于是可和 @K 一样定义 $K(\mathcal{C})$。
它对 Waldhausen 范畴有函子性，给出函子
$K\colon\mathsf{Wald}\to\mathsf{Sp}_{\ge0}$。映射
$$
\iota\mathcal{C}\to0\times_{\iota\mathsf{Cob}_0\mathcal{C}}
\iota\mathsf{Cob}_1\mathcal{C}\times_{\iota\mathsf{Cob}_0\mathcal{C}}0\to
\Omega|\iota \mathsf{Cob}_\bullet\mathcal{C}|
$$
$$
x\mapsto(0\rightarrowtail x\gets0)
\mapsto[x]
$$
给出 $\mathbb{E}_\infty$-幺半群自然同态
$\iota\Rightarrow K\colon\mathsf{Wald}\to\mathbb{E}_\infty\text{-}\mathsf{Mon}$。
对象 $x\in\mathcal{C}$ 在该映射下的像 $[x]$ 称为
$x$ 的 **$K$ 类**。
:::

::: remark
注意 @QW 不用到 [[Waldhausen 范畴]]的全部公理。
具体地说，它不要求 $\mathcal{C}$ 有[[零对象]]，
只要求 $\mathcal{C}$ 有[[始对象]]，
且始对象出发的态射都是余纤维化。
:::

::: remark {@Q=QW}
正合范畴都是 Waldhausen 范畴，但 @Q 和 @QW 不一样。有个显然的映射
$\mathsf{Q}_\bullet\mathcal{C}\to\mathsf{Cob}_\bullet\mathcal{C}$，
但它不是同构。下面将会看到，它诱导两种
$K$ 理论定义的同构。
:::

## 与 Waldhausen $\mathsf{S}$ 构造的比较

本节证明 @Q、@QW、
[[Waldhausen $\mathsf{S}$ 构造]]给出的 $K$ 理论典范同构
（@Q=S）。

::: definition [缝合箭头范畴] {@sar}
对范畴 $\mathcal{I}$，定义缝合箭头范畴
$\mathsf{SAr}(\mathcal{I})$ 如下：

- 其对象形如 $(\pm,i_0\to i_1)$，其中
  $i_0\to i_1$ 为 $\mathcal{I}$ 中的态射，
  $\pm$ 为 $+$、$-$ 之一；

- $\operatorname{Hom}((+,i_0\to i_1),(+,j_0\to j_1))=
  \operatorname{Hom}_{\mathsf{Ar}(\mathcal{I})}((i_0\to i_1),(j_0\to j_1))$；

- $\operatorname{Hom}((+,i_0\to i_1),(-,j_0\to j_1))=
  \varnothing$；

- $\operatorname{Hom}((-,i_0\to i_1),(+,j_0\to j_1))=
  \operatorname{Hom}_{\mathcal{I}}(i_1,j_1)$；

- $\operatorname{Hom}((-,i_0\to i_1),(-,j_0\to j_1))=
  \operatorname{Hom}_{\mathsf{TwAr}(\mathcal{I})}((i_0\to i_1),(j_0\to j_1))$；

态射以显然的方式复合。依定义有显然的满子范畴含入
$\mathsf{Ar}\hookrightarrow\mathsf{SAr}$、$\mathsf{TwAr}\hookrightarrow\mathsf{SAr}$。
:::

::: example {@sarn}
对 $n\in\mathbb{N}$，$\mathsf{SAr}[n]$ 是个[[偏序集]]，形状如下：
$$
\begin{tikzcd}
  &&&(-,n,n)\ar[d]\\
  &&\Large{⋰}&\vdots\ar[d]\\
  &(-,1,1)\ar[d]\ar[r]&\cdots\ar[r]&(-,1,n)\ar[d]\\
  (-,0,0)\ar[r]\ar[d]&(-,0,1)\ar[r]\ar[d]&\cdots\ar[r]&(-,0,n)\ar[d]\\
  (+,0,0)\ar[r]&(+,0,1)\ar[r]\ar[d]&\cdots\ar[r]&(+,0,n)\ar[d]\\
  &(+,1,1)\ar[r]&\cdots\ar[r]&(+,1,n)\ar[d]\\
  &&\ddots&\vdots\ar[d]\\
  &&&(+,n,n)
\end{tikzcd}
$$
这关于 $n$ 有函子性，构成余单纯范畴 $\mathsf{SAr}[\bullet]$。
:::

::: remark {@join}
回忆范畴 $\mathcal{I}$、$\mathcal{J}$ 的接合
$\mathcal{I}\star\mathcal{J}$ 定义如下：

- 其对象群胚为 $\mathcal{I}$、$\mathcal{J}$
  的对象群胚的无交并；

- $\mathcal{I}$ 中对象之间的映射与
  $\mathcal{J}$ 中对象之间的映射和原来一样；

- 对 $i\in\mathcal{I}$，$j\in\mathcal{J}$，
  $\operatorname{Hom}(j,i)=\varnothing$，
  $\operatorname{Hom}(i,j)=*$；

态射以显然的方式复合。则我们有对范畴 $\mathcal{I}$ 自然的函子
$\mathsf{SAr}(\mathcal{I})\to\mathsf{Ar}(\mathcal{I}^\mathrm{op}\star\mathcal{I})$，
定义为
$$
(+,i_0\to i_1)\mapsto(i_0\to i_1),\,
(-,i_0\to i_1)\mapsto(i_0^\mathrm{op}\to i_1).
$$
对 $n\in\mathbb{N}$，$[n]^\mathrm{op}\star[n]=[2n+1]$，[[偏序集]]
$\mathsf{Ar}([n]^\mathrm{op}\star[n])$ 形状如下：
$$
\begin{tikzcd}
  (-n,-n)\ar[r]&\cdots\ar[r]&(-n,-1)\ar[r]\ar[d]&(-n,-0)\ar[r]\ar[d]&(-n,0)\ar[r]\ar[d]&(-n,1)\ar[r]\ar[d]&\cdots\ar[r]&(-n,n)\ar[d]\\
  &\ddots&\vdots\ar[d]&\vdots\ar[d]&\vdots\ar[d]&\vdots\ar[d]&&\vdots\ar[d]\\
  &&(-1,-1)\ar[r]&(-1,-0)\ar[r]\ar[d]&(-1,0)\ar[r]\ar[d]&(-1,1)\ar[r]\ar[d]&\cdots\ar[r]&(-1,n)\ar[d]\\
  &&&(-0,-0)\ar[r]&(-0,0)\ar[r]\ar[d]&(-0,1)\ar[r]\ar[d]&\cdots\ar[r]&(-0,n)\ar[d]\\
  &&&&(0,0)\ar[r]&(0,1)\ar[r]\ar[d]&\cdots\ar[r]&(0,n)\ar[d]\\
  &&&&&(1,1)\ar[r]&\cdots\ar[r]&(1,n)\\
  &&&&&&\ddots&\vdots\ar[d]\\
  &&&&&&&(n,n)
\end{tikzcd}
$$
这里 $-i$ 表示 $i\in[n]^\mathrm{op}$。自然函子
$\mathsf{SAr}[n]\to\mathsf{Ar}([n]^\mathrm{op}\star[n])$ 把 @sarn
的图等同于上图中对角线 $(-0,0),(-1,1),\ldots,(-n,n)$
以下（含）的部分。
:::

::: proposition {@cobx}
设 $\mathcal{C}$ 是 Waldhausen 范畴。考虑单纯范畴
$\mathsf{Cob}'_\bullet\mathcal{C}$，其第 $n$ 项
$\mathsf{Cob}'_n\mathcal{C}\subseteq\mathsf{Fun}(\mathsf{SAr}[n],\mathcal{C})$
指满足如下条件的对象 $x\colon\mathsf{SAr}[n]\to\mathcal{C}$
生成的满子范畴：

- $x|_{\mathsf{Ar}[n]}\in \mathsf{S}_n\mathcal{C}$；

- $x|_{\mathsf{TwAr}[n]}\in \mathsf{Cob}_n\mathcal{C}$；

- 对 $0\le j<n$，
  $$
  \begin{tikzcd}
    x_{-,0,j}\ar[r]\ar[d]&x_{-,0,j+1}\ar[d]\\
    x_{+,0,j}\ar[r]&x_{+,0,j+1}
  \end{tikzcd}
  $$
  是推出图表；

其单纯范畴结构由 $\mathsf{SAr}[\bullet]$ 的余单纯范畴结构给出。
换言之，$\mathsf{Cob}'_n\mathcal{C}$ 是如下形状的图表构成的范畴：
$$
\begin{tikzcd}
  &&&x_{-,n,n}\ar[d]\\
  &&\Large{⋰}&\vdots\ar[d]\\
  &x_{-,1,1}\ar[d]\ar[r,tail]&\cdots\ar[r,tail]&x_{-,1,n}\ar[d]\\
  x_{-,0,0}\ar[r,tail]\ar[d]&x_{-,0,1}\ar[r,tail]\ar[d]&\cdots\ar[r,tail]&x_{-,0,n}\ar[d]\\
  0\ar[r,tail]&x_{+,0,1}\ar[r,tail]\ar[d]&\cdots\ar[r,tail]&x_{+,0,n}\ar[d]\\
  &0\ar[r,tail]&\cdots\ar[r,tail]&x_{+,1,n}\ar[d]\\
  &&\ddots&\vdots\ar[d]\\
  &&&0
\end{tikzcd}
$$
其中 $\rightarrowtail$ 是余纤维化，所有的方块都是推出。
则限制函子 $\mathsf{Cob}'_\bullet\mathcal{C}\to\mathsf{Cob}_\bullet\mathcal{C}$
是单纯 Waldhausen 范畴的等价，即对每个 $n$，限制函子
$\mathsf{Cob}'_n\mathcal{C}\to\mathsf{Cob}_n\mathcal{C}$
都是 Waldhausen 范畴的等价。

如 $\mathcal{C}$ 是正合范畴，则可类似地定义
$\mathsf{Q}'_\bullet\mathcal{C}$。此时限制函子
$\mathsf{Q}'_\bullet\mathcal{C}\to\mathsf{Q}_\bullet\mathcal{C}$
是单纯正合范畴的等价，且这两个限制函子关于 @Q=QW 的比较映射构成的图表交换。
:::

::: theorem {@Q=S}
记号承 @cobx。
沿 $\mathsf{Ar}[\bullet]\hookrightarrow\mathsf{SAr}[\bullet]$
的限制函子 $\mathsf{Cob}'_\bullet\mathcal{C}\to \mathsf{S}_\bullet\mathcal{C}$
与 @cobx 范畴等价之逆的复合
$$
\mathsf{Cob}_\bullet\mathcal{C}\cong\mathsf{Cob}'_\bullet\mathcal{C}
\to \mathsf{S}_\bullet\mathcal{C}
$$
给出 $\mathbb{E}_\infty$-群的同构
$$
\Omega|\iota\mathsf{Cob}_\bullet\mathcal{C}|\cong
\Omega|\iota \mathsf{S}_\bullet\mathcal{C}|.
$$
从而 @QW 和 [[Waldhausen $\mathsf{S}$ 构造]]给出的[[代数 $K$ 理论]]典范同构。

如 $\mathcal{C}$ 是正合范畴，则 @Q=QW 的函子
$$
\mathsf{Q}_\bullet\mathcal{C}\to\mathsf{Cob}_\bullet\mathcal{C}
$$
给出 $\mathbb{E}_\infty$-群的同构
$$
\Omega|\iota\mathsf{Q}_\bullet\mathcal{C}|\cong
\Omega|\iota \mathsf{Cob}_\bullet\mathcal{C}|.
$$
从而 @Q 和 @QW 给出的代数 $K$ 理论典范同构。
:::

::: proof
对[[单纯对象]] $X$，以 $\operatorname{sd} X$ 记单纯对象
$X([\bullet]^\mathrm{op}\star[\bullet])$，即
$(\operatorname{sd} X)_n=X_{2n+1}$。由 @sar、@sarn、@join，我们有关于 $n\in\mathbb{\Delta}$
自然的偏序集映射
$$
\mathsf{Ar}[n]\hookrightarrow\mathsf{SAr}[n]\hookrightarrow
\mathsf{Ar}([n]^\mathrm{op}\star[n])\hookrightarrow
\mathsf{SAr}([n]^\mathrm{op}\star[n]),
$$
给出映射
$$
\operatorname{sd}\mathsf{Cob}'_\bullet\mathcal{C}\to\operatorname{sd}\mathsf{S}_\bullet\mathcal{C}
\to\mathsf{Cob}'_\bullet\mathcal{C}\to\mathsf{S}_\bullet\mathcal{C}.
$$
当 $\mathcal{C}$ 是正合范畴时，容易发现 $\operatorname{sd}\mathsf{S}_\bullet\mathcal{C}
  \to\mathsf{Cob}'_\bullet\mathcal{C}$ 穿过 $\mathsf{Q}'_\bullet\mathcal{C}$，
而且所得映射 $\operatorname{sd}\mathsf{S}_\bullet\mathcal{C}\to\mathsf{Q}'_\bullet\mathcal{C}$
是同构。于是只需证上面三个映射中，前两个的复合与后两个的复合在作用
$|\iota(-)|$ 之后都是同构。
:::

::: remark
由各种构造下 $K$ 类的取法容易发现 @Q=S
中的典范同构保持 $K$ 类。
:::

```terms
'Quillen $\mathsf{Q}$ 构造':
  en: 'Quillen $\mathsf{Q}$-construction'
```
