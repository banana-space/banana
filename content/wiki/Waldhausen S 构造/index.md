---
title: 'Waldhausen $\mathsf{S}$ 构造'
categories: [$K$ 理论]
navboxes: [代数 K 理论]
---

<problems>
- “性质”一节中第一个定理没有证明，第二个定理的证明不完整。
</problems>

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- 对自然数 $n$，以 $[n]$ 表示[[偏序集]] $\{0,1,\ldots,n\}$，
  视为范畴。
- $\mathsf{Ar}(\mathcal{C})$ 指范畴 $\mathcal{C}$ 的[[箭头范畴]]，即[[函子范畴]]
  $\mathsf{Fun}([1],\mathcal{C})$。
- $\iota\mathcal{C}$ 指范畴 $\mathcal{C}$ 的[[对象群胚]]，即只保留 $\mathcal{C}$
  中的同构得到的[[∞-群胚|群胚]]。

:::

**Waldhausen $\mathsf{S}$ 构造**是[[代数 $K$ 理论]]的具体构造中适用范围最广者，
由 [[Friedhelm Waldhausen]] 于 1983 年给出，虽然 Waldhausen
本人把它归功于 [[Segal]]。该构造给出 [[Waldhausen 范畴]]的 $K$ 理论。

## 定义

::: definition [$\mathsf{S}$ 构造] {@S}
设 $\mathcal{C}$ 是 [[Waldhausen 范畴]]。其 **$\mathsf{S}$ 构造**指[[单纯对象|单纯]]
Waldhausen 范畴 $\mathsf{S}_\bullet\mathcal{C}$，其中
$\mathsf{S}_n\mathcal{C}\subseteq\mathsf{Fun}(\mathsf{Ar}[n],\mathcal{C})$ 指满足如下条件的对象
$x\colon\mathsf{Ar}[n]\to\mathcal{C}$ 生成的[[满子范畴]]：

- 对 $0\le i\le n$，$x_{i,i}=0$；

- 对 $0\le i<j<n$，
  $x_{i,j}\to x_{i,j+1}$ 是[[余纤维化]]，且
  \[
  \begin{tikzcd}
    x_{i,j}\ar[r]\ar[d]&x_{i,j+1}\ar[d]\\
    x_{i+1,j}\ar[r]&x_{i+1,j+1}
  \end{tikzcd}
  \]
  是推出图表；

其单纯范畴结构由 $\mathsf{Fun}(\mathsf{Ar}[n],\mathcal{C})$ 关于 $[n]$ 的函子性给出。
换言之，$\mathsf{S}_n\mathcal{C}$ 是如下形状的图表构成的范畴
\[
\begin{tikzcd}
  0\ar[r,tail]&x_{0,1}\ar[r,tail]\ar[d]&\cdots\ar[r,tail]&x_{0,n-1}\ar[r,tail]\ar[d]&x_{0,n}\ar[d]\\
  &0\ar[r,tail]&\cdots\ar[r,tail]&x_{1,n-1}\ar[r,tail]\ar[d]&x_{1,n}\ar[d]\\
  &&\ddots&\vdots\ar[d]&\vdots\ar[d]\\
  &&&0\ar[r,tail]&x_{n-1,n}\ar[d]\\
  &&&&0
\end{tikzcd}
\]
其中 $\rightarrowtail$ 是余纤维化，所有的方块都是推出。
:::

::: remark
$x_{\bullet,\bullet}\mapsto x_{0,\bullet}$ 给出范畴等价
$\mathsf{S}_n\mathcal{C}\cong\mathsf{Fun}([n-1],\operatorname{cof}\mathcal{C})$。
:::

::: definition [$K$ 理论] {@K}
Waldhausen 范畴 $\mathcal{C}$ 的 **$K$ 理论** $K(\mathcal{C})$ 指
[[$\mathbb{E}_\infty$-群]] $\Omega|\iota \mathsf{S}_\bullet\mathcal{C}|$，其中：

- $\iota$ 指对单纯 Waldhausen 范畴逐项取对象群胚，
  带上有限余积给出的 $\mathbb{E}_\infty$-幺半群结构，故
  $\iota \mathsf{S}_\bullet\mathcal{C}$ 是单纯 $\mathbb{E}_\infty$-幺半群；

- $\left|-\right|$ 指单纯对象的几何实现，即沿
  $\mathbb{\Delta}^{\mathrm{op}}$ 取余极限，故
  $|\iota \mathsf{S}_\bullet\mathcal{C}|$ 是 $\mathbb{E}_\infty$-幺半群；

- $\Omega$ 指取[[环路空间]]，故最终
  $K(\mathcal{C})=\Omega|\iota \mathsf{S}_\bullet\mathcal{C}|$ 是 $\mathbb{E}_\infty$-群。

显然，$K$ 理论对 Waldhausen 范畴的正合函子有函子性，
给出函子 $K\colon\mathsf{Wald}\to\mathsf{Sp}_{\ge0}$。由于 $\mathsf{S}_0\mathcal{C}=0$、
$\mathsf{S}_1\mathcal{C}=\mathcal{C}$，映射 $\iota\mathcal{C}=\iota \mathsf{S}_1\mathcal{C}\to
  \Omega|\iota \mathsf{S}_\bullet\mathcal{C}|$ 给出 $\mathbb{E}_\infty$-幺半群自然同态
$\iota\Rightarrow K\colon\mathsf{Wald}\to\mathbb{E}_\infty\text{-}\mathsf{Mon}$。
对象 $x\in\mathcal{C}$ 在该映射下的像称为 $x$ 的 **$K$ 类**。
:::

## 直观

上一节的构造看似复杂、抽象，实则无非是

```math {@K0}
\text{每有推出图表 }\begin{tikzcd}
    A\ar[r,tail]\ar[d]&B\ar[d]\\
    0\ar[r,tail]&C
\end{tikzcd}\text{ 就令 $[B]=[A]+[C]$}
```

的[[高阶代数]]版本，本节详述这一直观。
为此先回忆高阶代数中的幺半群。

::: definition [幺半群] {@幺半群}
幺半群指单纯生象 $X\colon\mathbb{\Delta}^\mathrm{op}\to\mathsf{Ani}$，
满足对任意自然数 $n$，$[1]$ 到 $[n]$ 的 $n$ 个映射
$(0\mapsto i-1,\,1\mapsto i)$，$i=1,\ldots,n$
合起来诱导的映射 $X_n\to X_1^n$ 是同构。称 $X_1$
为该幺半群的底生象。幺半群的同态就是单纯生象的映射，
它们构成的范畴记作 $\mathsf{Mon}$，依定义是 $\mathsf{Fun}(\mathbb{\Delta}^\mathrm{op},\mathsf{Ani})$
的[[满子范畴]]。
:::

::: remark
在 @幺半群 中：

- 令 $n=0$，得 $X_0=X_1^0$ 为单点。唯一的映射 $[1]\to[0]$
  诱导的 $X_0\to X_1$ 就是幺元。
- 令 $n=2$，得 $X_2=X_1^2$，两个投影分别对应于取单形
  $\{0,1,2\}$ 的边 $\{0,1\}$ 与 $\{1,2\}$。取第三条边
  $\{0,2\}$ 诱导的映射 $X_2\to X_1$ 就是二元乘法。
- 一般地对 $n\ge2$，$\{0,n\}\subseteq\{0,1,\ldots,n\}=[n]$
  诱导的映射 $X_n\to X_1$ 就是 $n$ 元乘法，而关于
  $\mathbb{\Delta}^\mathrm{op}$ 的函子性正是同伦连贯的结合律。特别地，
  $\pi_0(X_1)$ 是经典幺半群。

:::

再回忆高阶代数中的群。

::: definition [群]
对幺半群 $X$，以下条件等价：

1. $\pi_0(X_1)$ 是经典群。

2. 单形 $[2]$ 的任两条边诱导的映射
   $X_2\to X_1^2$ 都是同构。

满足条件的幺半群称为群。它们构成的范畴记作 $\mathsf{Grp}$，
依定义是 $\mathsf{Mon}$ 的满子范畴。
:::

经典代数中，任给元素与关系，可以从它们出发万有地得到（幺半）群，
所得即为这些元素与关系所表现的（幺半）群。高阶代数中也是如此，
其中高阶的元素与关系可以由一般的、未必是（幺半）群的单纯生象所表达。

::: proposition {@关系}
两个含入函子 $\mathsf{Grp}\to\mathsf{Mon}\to\mathsf{Fun}(\mathbb{\Delta}^\mathrm{op},\mathsf{Ani})$
都有左伴随。它们显然穿过带基点范畴 $\mathsf{Fun}(\mathbb{\Delta}^\mathrm{op},\mathsf{Ani})_*$；
含入函子 $\mathsf{Grp}\to\mathsf{Fun}(\mathbb{\Delta}^\mathrm{op},\mathsf{Ani})_*$
的左伴随是 $\Omega|{-}|$，即几何实现的环路空间，
以环路复合为群结构。
:::

万事俱备，我们回到 $K$ 理论。鉴于 @K0 给出 $K_0$
的定义，我们只要把它合理推广到高阶，就会得到高阶 $K$ 理论的定义。
为此首先要把对象集合换成对象群胚，其次要考察可能的高阶关系，
把它写成一个单纯集 $\mathsf{S}$，最后对 $\mathsf{S}$ 用 @关系
中的左伴随来获得群。先考察 $\mathsf{S}$ 的低阶部分。$\mathsf{S}_1$ 作为群的生成元，
自然就是范畴的对象群胚。$\mathsf{S}_2$ 表达二元加法之间的关系，而这由
@K0 给出，故自然的取法就是形如 @K0
中的推出图表组成的群胚，把图表打到 $A,B,C$ 分别对应于
$\{0,1\},\{0,2\},\{1,2\}\subseteq\{0,1,2\}$ 诱导的边缘映射。
容易发现这就是 @S 中的 $\mathsf{S}_1$ 与 $\mathsf{S}_2$。
除此之外，我们还希望有以下高阶关系：例如有余纤维化
$$
A_1\rightarrowtail A_2\rightarrowtail A_3,
$$
则二元加法之间的关系给出
\[
\begin{tikzcd}
  {[A_3]}\ar[r,equal]\ar[d,equal]&{[A_1]}+[A_3/A_1]\ar[d,equal]\\
  {[A_2]+[A_3/A_2]}\ar[r,equal]&{[A_1]}+[A_2/A_1]+[A_3/A_2]
\end{tikzcd}
\]
其中两种把左上角 $K$ 类等同于右下角 $K$ 类的方式应当等同。
这种关系正由 @S 中的 $\mathsf{S}_3$ 表达。以此类推，
可知 @S 恰表达了 $K$ 类之间所有的高阶关系，
而 @K 中的 $K$ 理论正是这些关系表现的群。

::: remark
@K 中的群结构看似与上述群结构不同，实则无碍：
由 [[Eckmann–Hilton 论证]]适当的高阶版本，
交换幺半群范畴的幺半群对象还是交换幺半群，
且两个幺半群结构典范地相同；于是只需注意到 $\mathsf{S}$
构造对有限余积有函子性，即可发现 @K
中的群结构与我们想要的群结构相同，且是交换群。
:::

## 性质

本节的主要目标是证明如下万有性质：

::: theorem
$K$ 理论是 Waldhausen 范畴的[[仰范畴|仰]]于
$\iota\colon\mathsf{Wald}\to\mathsf{Ani}$ 下的加性不变量之中初始者。
:::

::: theorem
$K$ 理论是 Waldhausen 范畴的有限加性不变量。换言之：

- $K\colon\mathsf{Wald}\to\mathsf{Sp}_{\ge0}$ 与滤余极限交换。

- $K(0)=0$。

- 对任意 Waldhausen 范畴 $\mathcal{C}$，$\mathsf{S}_2\mathcal{C}$ 到
  $\mathcal{C}$ 的正合函子 $x_{\bullet,\bullet}\mapsto x_{0,1}$
  和 $x_{\bullet,\bullet}\mapsto x_{1,2}$ 在 $K$
  理论上给出的映射
  $$
  K(\mathsf{S}_2\mathcal{C})\to K(\mathcal{C})\times K(\mathcal{C})
  $$
  是同构。

:::

::: proof
前两条为显然，下证最后一条。由于

```math {@0x}
x\mapsto\left(\begin{tikzcd}
    0\ar[r,tail]&0\ar[r,tail]\ar[d]&x\ar[d]\\
    &0\ar[r,tail]&x\ar[d]\\
    &&0
\end{tikzcd}\right)
```

给出 $x_{\bullet,\bullet}\mapsto x_{1,2}$ 的截面，
而 $K$ 理论取值为 $\mathbb{E}_\infty$-群，故只需证
$$
K(\mathcal{C})\to K(\mathsf{S}_2\mathcal{C})\to K(\mathcal{C})
$$
是纤维列，这里第一个箭头由 @0x 给出，第二个箭头由
$x_{\bullet,\bullet}\mapsto x_{0,1}$ 给出。
为此只需证

```math {@几何实现}
|\iota \mathsf{S}_\bullet\mathcal{C}|\to|\iota \mathsf{S}_\bullet \mathsf{S}_2\mathcal{C}|
\to|\iota \mathsf{S}_\bullet\mathcal{C}|
```

是纤维列。注意对任一 Waldhausen 范畴 $\mathcal{D}$，
@0x 和 $x_{\bullet,\bullet}\mapsto x_{0,1}$ 给出的
$$
\iota\mathcal{D}\to\iota \mathsf{S}_2\mathcal{D}\to
\iota\mathcal{D}
$$
都是纤维列；对每个自然数 $n$ 取 $\mathcal{D}=\mathsf{S}_n\mathcal{C}$，
知 @几何实现 逐项是纤维列，即
$$
\iota \mathsf{S}_\bullet\mathcal{C}\to\iota \mathsf{S}_\bullet \mathsf{S}_2\mathcal{C}
\to\iota \mathsf{S}_\bullet\mathcal{C}
$$
是单纯[[生象]]的纤维列。要证明它的余极限还是纤维列。
:::

## 参考文献

```bibliography
Barwick16:
  type: article
  author: 'Barwick, Clark'
  title: On the algebraic $K$-theory of higher categories
  journaltitle: Journal of Topology
  volume: 9
  number: 1
  pages: 245–347
  doi: 10.1112/jtopol/jtv042
  year: 2016
```

```terms
'Waldhausen $\mathsf{S}$ 构造':
  en: 'Waldhausen $\mathsf{S}$-construction'
```
