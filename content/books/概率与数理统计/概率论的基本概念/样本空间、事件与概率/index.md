---
title: 样本空间、事件与概率
---
概率论用如下数学对象对某个随机试验进行抽象：

- 我们将随机试验的所有可能结果用一个非空集合$\Omega$表示。
  $\Omega$被称作**样本空间**，其中的每个元素
  $\omega\in \Omega$代表一个可能的试验结果，
  不同的试验结果在同一次试验中不能一同发生。

- 样本空间$\Omega$的（某些）子集被称为$\Omega$中的**事件**。
  在某一次随机试验中，我们称事件$E\subseteq \Omega$发生当且仅当
  该次试验的结果$\omega$是$E$的元素。我们将所有事件构成的集族
  称为**事件域**，它是样本空间幂集$2^\Omega$的子集。

- 对每一个事件$E$，我们指定一个实数$\mathbb{P}(E)$
  作为其**概率**。换句话说，$\mathbb{P}$是将每个事件
  映为其概率的映射，映射$\mathbb{P}$本身被称为**概率测度**。

事件域与概率测度并不能随意指定，它们需要满足如下定义：

::: definition {@definition:sigma_algebra}
设$\Omega$为一个样本空间，
$\mathcal{F}$是幂集$2^\Omega$的子集
（也就是说$\mathcal{F}$的每个元素都是$\Omega$的子集）。
我们称$\mathcal{F}$为$\Omega$上的一个**事件域**，
若如下条件得到满足：

1. $\Omega\in\mathcal{F}$。

2. 对任意$E\in\mathcal{F}$，有
   $E^c=\Omega\backslash E\in \mathcal{F}$。

3. 任取$\mathcal{F}$中的一列集合$E_1,E_2,E_3,\ldots$，
   总有$\bigcup_{i=1}^\infty E_i\in\mathcal{F}$。

:::

::: definition {@definition:probability_space}
设$\Omega$为一样本空间，$\mathcal{F}$为$\Omega$上的事件域。
我们称映射$\mathbb{P}:\mathcal{F}\rightarrow\mathbb{R}$
为$\mathcal{F}$上的一个**概率测度**（probability measure），
若如下条件得到满足：

1. 对任意$E\in\mathcal{F}$，均有$0\leq \mathbb{P}(E)\leq 1$。

2. $\mathbb{P}(\Omega)=1$。

3. （可数可加性）若$E_1,E_2,E_3,\ldots$为$\mathcal{F}$中的
   一列集合，且对任意$i\neq j$均有$E_i\cap E_j=\varnothing$，
   则级数$\sum_{i=1}^\infty \mathbb{P}(E_i)$收敛，且
   \[
       \mathbb{P}\!\left(\bigcup_{i=1}^\infty E_i\right)
       =\sum_{i=1}^\infty \mathbb{P}(E_i).
   \]

我们将样本空间$\Omega$、事件域$\mathcal{F}\subseteq 2^\Omega$、
概率测度$\mathbb{P}:\mathcal{F}\rightarrow\mathbb{R}$构成的
三元组$(\Omega,\mathcal{F},\mathbb{P})$称作一个**概率空间**
（probability space），此时事件域$\mathcal{F}$的元素被称作
**事件**。而对任意事件$E\in\mathcal{F}$，
我们将$\mathbb{P}(E)$称作$E$的**概率**。
:::

上述定义是对现实世界的随机现象与随机试验进行数学抽象，
并加以一定的理论考虑而提出的，它们规定了描述随机试验所需要的数学对象
以及这些数学对象所要满足的理论条件。作为数学理论的概率论，
就是以上述定义为基础发展起来的。概率论主要关心的一些典型问题如下：

*假设已经给定了样本空间$\Omega$、$\Omega$的一族子集$\{E_i,\,i\in\mathcal{I}\}$作为我们所关心的一些事件，以及该族事件中一些简单事件的概率值或者这些概率所满足的关系．则

- 应当如何由简单事件的概率值或概率的关系，计算出$\{E_i,\,i\in\mathcal{I}\}$当中其它事件的概率；

- 在获取到额外信息（例如获知某些事件已经发生）的条件下，应当如何对概率进行修正或更新．*

::: remark
之前说过，理想情况下，我们希望一个事件$E$的概率
$\mathbb{P}(E)$等于试验重复的次数$n$趋于无穷大时频率
$\mathrm{Fr}_n(E)$的极限，但在 @definition:probability_space  当中，
我们并不直接把“概率等于频率的极限”作为概率的原始数学定义，
而是从“概率等于频率的极限”这一理想当中抽象出一些基本性质，
利用这些基本性质来定义$\mathbb{P}$。这种概率的定义方式常被称为
概率的公理化定义，它是数学家柯尔莫哥洛夫(Kolmogorov)在1933年的著作
[@Kolmogorov1933]中总结并提出的，是现代概率论发展的重要里程碑。

实际上，把“概率等于频率的极限”作为原始定义来建立概率论会遇到
不少问题，例如我们一开始就需要考察随机试验重复无穷多次的复杂情形，
又如这样的理论中“独立性”的概念在逻辑上似乎有陷入循环论证的风险；
此外，从现代概率论的角度来看，“概率等于频率的极限”也不一定是一个
必然发生的事件。而以概率的公理化定义为基础的现代概率论则能够较好地
规避这些问题。在现代概率论当中，“概率等于频率的极限”成为了概率的
公理化定义以及独立性定义的某种推论，被称为“大数定律”。

概率的公理化定义的另一个特点在于，它将“为什么会有随机现象、
随机现象为什么服从统计规律”这一涉及到具体物理机制的问题从
“如何对随机现象进行数学描述”中剥离出去。
这种剥离一方面使得概率论本身获得了足够的抽象从而成为了一门
独立的数学理论，另一方面也使得我们在应用概率论时可以以
更加唯象的方式入手而无需对随机现象背后的物理机制有特别充分的了解，
这进一步拓展了概率论的应用范围。
:::

## 对事件这一概念的进一步说明*

设$(\Omega,\mathcal{F},\mathbb{P})$为一概率空间。

- 由 @definition:sigma_algebra，
  可知$\Omega$以及$\varnothing=\Omega^c$都是事件。
  我们将$\Omega$称为**必然事件**，
  $\varnothing$称为**不可能事件**。

- 由于事件都是样本空间$\Omega$的子集，
  故而事件之间也可以有包含关系。若事件$E$是事件$F$的子集，
  那么事件$E$发生时事件$F$必然发生。

- 任取两个事件$E$和$F$，其并集$E\cup F$也是一个事件，
  该事件发生当且仅当$E$发生或$F$发生。

  更一般地，对于一列事件$E_1,E_2,\ldots$，
  其并集$\bigcup_{i=1}^\infty E_i$也是一个事件，
  该事件发生当且仅当$E_1,E_2,\ldots$中至少有一个发生。

- 任取两个事件$E$和$F$，其交集$E\cap F$也是一个事件，
  该事件发生当且仅当$E$和$F$都发生。

  更一般地，对于一列事件$E_1,E_2,\ldots$，
  其交集$\bigcap_{i=1}^\infty E_i$也是一个事件，
  该事件发生当且仅当$E_1,E_2,\ldots$这些事件全都发生。

- 若两个事件$E,F$的交$E\cap F$为空集，
  则说事件$E$与事件$F$**互斥**或**互不相容**
  （mutually exclusive）。两个互斥的事件不能在同一次随机试验中都发生。

- 任取事件$E$，其补集$E^c$也是一个事件。
  我们称$E$与$E^c$为**对立事件**。注意到对立事件必为互斥事件。

在本小节的最后，我们对事件域$\mathcal{F}$这一概念的引入进行必要的说明。
一些初等概率论的教材并未明确引入事件域的概念，
而是将事件直接定义为样本空间的子集，
这种做法对于绝大多数实际应用是足够的，但在数学上缺乏一定的严格性。
例如，对于一些样本空间为不可数集的情况，
我们无法构造出一个定义域为$2^\Omega$的概率测度，或者说，
我们无法对每个$\Omega$的子集都赋予相应的概率值[^1]。
概率论应对这个问题的办法是将概率测度$\mathbb{P}$的定义域
缩小到$2^\Omega$的一个子集$\mathcal{F}$（也就是事件域）上，
但仍要求$\mathcal{F}$中的元素经过一些基本的集合运算
（包括补集运算、可数并运算、可数交运算）后依然在$\mathcal{F}$当中，
以保证$\mathcal{F}$能够纳入足够多的$\Omega$的子集作为事件。
通常，当$\Omega$为可数集时，我们几乎总是取事件域$\mathcal{F}$
为幂集$2^\Omega$，即$\Omega$的所有子集都是事件；
当$\Omega$为不可数集时，事件域$\mathcal{F}$的选取则属于
高等概率论的内容，本讲义不对其进行展开。在随后的内容中，
若无特别说明，均假定事件域$\mathcal{F}$随样本空间$\Omega$一同给出。

## 一些随机试验及其样本空间的例子*

下面我们给出一些随机试验以及相应的样本空间$\Omega$的例子．

::: example [抛硬币]
假设我们的随机试验为掷$2$次硬币，
硬币的正反面分别用$\mathrm{H}$和$\mathrm{T}$表示。
则样本空间可以取为
\[
    \begin{aligned}
    \Omega ={} & \left\{(\omega_1,\omega_2) \mid
    \text{对每个 $i=1,2$, $\omega_i$ 均为
    $\mathrm{H}$ 或 $\mathrm{T}$}
    \right\} \\
    ={} & \{(\mathrm{H},\mathrm{H}),(\mathrm{H},\mathrm{T}),
    (\mathrm{T},\mathrm{H}),
    (\mathrm{T},\mathrm{T})\}
    \end{aligned}
\]
以下给出了一些事件的例子：

1. 事件$\{(\mathrm{H},\mathrm{H}),(\mathrm{H},\mathrm{T})\}$
   的含义可写为“第一次抛出的为正面”；

2. 事件$\{(\mathrm{H},\mathrm{T}),(\mathrm{T},\mathrm{H})\}$
   的含义可写为“两次抛硬币的结果不同”；

3. 事件$\{(\mathrm{H},\mathrm{H}),(\mathrm{H},\mathrm{T}),
(\mathrm{T},\mathrm{H})\}$的含义可写为“抛出反面的次数至多为$1$”；

4. 事件$\{(\mathrm{H},\mathrm{H}),(\mathrm{T},\mathrm{H}),
(\mathrm{T},\mathrm{T})\}$的含义可写为“第一次抛出反面，
   或第二次抛出正面”。

更一般地，若随机试验为抛$n$次硬币，则样本空间可以取为
\[
    \Omega = \left\{(\omega_1,\ldots,\omega_n) \mid
    \text{对每个 $i=1,2,\ldots,n$, $\omega_i$ 均为
    $\mathrm{H}$ 或 $\mathrm{T}$}\right\}.
\]
:::

::: example [区间$[0,1]$上的随机数]
假设我们的随机试验是
用随机数生成器生成一个属于$[0,1]$的随机数，
则样本空间可以取为$\Omega=[0,1]$，此时
“随机数落在区间$I\subset[0,1]$当中”这一事件则可直接
用区间$I$本身来表示。
:::

::: example [抛无穷多次硬币]
假设我们的随机试验为抛（可数）无穷多次硬币，
硬币的正反面分别用H和T表示[^2]。则样本空间可以取为
\[
    \Omega = \left\{(\omega_1,\omega_2,\omega_3,\ldots) \mid
    \text{每个 $\omega_i$ 均为 $\mathrm{H}$ 或 $\mathrm{T}$}
    \right\}.
\]
接下来，用$q_n(\omega_1,\ldots,\omega_n)$表示
$\omega_1,\ldots,\omega_n$当中$\mathrm{H}$出现的次数，则事件
\[
    \left\{(\omega_1,\omega_2,\omega_3,\ldots)\in \Omega
    \biggm\vert
    \lim_{n\rightarrow\infty}
    \frac{q_n\!\left(\omega_1,\ldots,\omega_n\right)}{n}
    =\frac{1}{2}\right\}
\]
的含义是“前$n$次抛硬币中抛出正面的频率在$n\rightarrow\infty$时
趋向于$1/2$”。
:::

::: example [悬浮于水中的花粉粒的轨迹]
该随机试验的描述见
@example:Brownian_motion_0。对于该随机试验，
我们通常取样本空间为
\[
    \Omega = \left\{
    \boldsymbol{r}:\left[0,+\infty\right[\rightarrow\mathbb{R}^3
    \bigm\vert \boldsymbol{r}\ \text{在 $\left[0,+\infty\right[$ 上连续}
    \right\}.
\]
注意到该例当中，样本空间$\Omega$似乎取得有些“过大”：
真实实验只能观察长度有限的时间段内有限个时刻
$0\leq t_1<\cdots<t_n\leq T$的花粉位置信息，
而没有办法观察到无穷长时间段$\left[0,+\infty\right[$内的
整条连续时间轨迹。这里$\Omega$的取法带有一定的理想化与抽象的过程，
它的一大优点在于能使我们的模型与观测时刻
$0\leq t_1<\cdots<t_n\leq T$无关，从而具有普适性。
:::

[^1]: 这个结果属于测度论的内容，感兴趣的读者可参阅 [@williams1991probability] 的附录A1.1等相关文献。
[^2]: 这个随机试验并不能在真实世界中实现，然而对它的研究依然具有重要的价值。 一方面，抛$n$次硬币的试验都可以看成是抛无穷多次硬币的一个“子试验”； 另一方面，对抛无穷多次硬币的研究使得我们能更深入地研究抛$n$次硬币 在$n\rightarrow\infty$时的极限行为。
