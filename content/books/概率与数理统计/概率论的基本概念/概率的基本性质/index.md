---
title: 概率的基本性质
---
设$(\Omega,\mathcal{F},\mathbb{P})$为一概率空间。
由 @definition:probability_space  可知，
对任意事件$E$，其概率$\mathbb{P}(E)$必定取值于$[0,1]$中；
此外，必然事件$\Omega$的概率为$1$。
不可能事件$\varnothing$的概率可以
从 @definition:probability_space  中概率的可数可加性推得。

::: lemma
$\mathbb{P}(\varnothing)=0$。
:::

::: proof
令$E_i=\varnothing,\,i=1,2,\ldots$，
则有$\bigcup_{i=1}^\infty E_i=\varnothing$以及
$E_i\cap E_j=\varnothing$，则由概率的可数可加性可得
\[
    \mathbb{P}(\varnothing) =
    \mathbb{P}\!\left(\bigcup_{i=1}^\infty E_i\right)
    =\sum_{i=1}^\infty \mathbb{P}(E_i)
    =\sum_{i=1}^\infty \mathbb{P}(\varnothing).
\]
上式成立当且仅当$\mathbb{P}(\varnothing)=0$。
:::

需要注意的是，一般情况下$\mathbb{P}(E)=1$并不意味着
$E$为必然事件，$\mathbb{P}(E)=0$也并不意味着$E$为不可能事件。
若事件$E$满足$\mathbb{P}(E)=1$，我们称$E$是**几乎必然**
（almost surely，缩写为a.s.）发生的。

接下来我们介绍概率的有限可加性，它也同样是可数可加性的推论．

::: proposition [有限可加性]
设$E_1,\ldots,E_n$为有限个事件，
且对任意$i\neq j$均有$E_i\cap E_j=\varnothing$，则
\[
    \mathbb{P}(E_1\cup\cdots\cup E_n)
    =\mathbb{P}(E_1)+\cdots+\mathbb{P}(E_n).
\]
:::

::: proof
令$E_{n+1}=E_{n+2}=\cdots=\varnothing$，
则事件列$E_1,\ldots,E_n,E_{n+1}\ldots$中的事件两两互不相交，
利用概率的可数可加性并注意到
$\bigcup_{i=1}^\infty E_i = E_1\cup\cdots\cup E_n$
以及$\mathbb{P}(\varnothing)=0$即可。
:::

利用概率的可加性，我们可以进一步得到概率的如下性质：

::: proposition
令$E,F$为任意事件，则有

1. $\mathbb{P}(E^c\cap F)=\mathbb{P}(F)-\mathbb{P}(E\cap F)$。
   特别是，当$F=\Omega$时，有$\mathbb{P}(E^c)=1-\mathbb{P}(E)$。

2. 若$E\subseteq F$，则$\mathbb{P}(E)\leq \mathbb{P}(F)$。

3. $\mathbb{P}(E\cup F) = \mathbb{P}(E)+\mathbb{P}(F)
-\mathbb{P}(E\cap F)$。

:::

::: proof
1. 注意到$(E\cap F)\cup (E^c\cap F)=F$
   以及$(E\cap F)\cap (E^c\cap F)=\varnothing$，
   由概率的有限可加性可得
   \[
       \mathbb{P}(F) = \mathbb{P}((E\cap F)\cup (E^c\cap F))
       =\mathbb{P}(E\cap F)+\mathbb{P}(E^c\cap F),
   \]
   再移项即可。

2. 当$E\subseteq F$时，有$E\cap F=E$，
   故由第1条性质以及概率的非负性可得
   \[
       0\leq\mathbb{P}(E^c\cap F) = \mathbb{P}(F)-\mathbb{P}(E\cap F) = \mathbb{P}(F)-\mathbb{P}(E),
   \]
   从而$\mathbb{P}(E)\leq\mathbb{P}(F)$。

3. 注意到
   \[
       E\cup F = E\cup (F\cap E^c),
       \qquad E\cap (F\cap E^c)=\varnothing,
   \]
   故
   \[
       \mathbb{P}(E\cup F) = \mathbb{P}(E)+\mathbb{P}(F\cap E^c),
   \]
   再由第1条性质得
   \[
       \mathbb{P}(E\cup F)
       =\mathbb{P}(E)+\mathbb{P}(F) - \mathbb{P}(E\cap F).
   \]

:::

由等式$\mathbb{P}(E\cup F)=\mathbb{P}(E)+\mathbb{P}(F)
-\mathbb{P}(E\cap F)$以及概率的非负性，可得
\[
    \mathbb{P}(E\cup F)\leq\mathbb{P}(E)+\mathbb{P}(F).
\]
对于有限个事件的情形，则有如下推广的结果：

::: theorem
给定$n$个事件$E_1,\ldots,E_n$，我们有
\[
    \mathbb{P}(E_1\cup\cdots\cup E_n)
    \leq \sum_{i=1}^n \mathbb{P}(E_i),
    \tag{\text{Boole 不等式}}
\]
以及
\[
    \mathbb{P}(E_1\cap\cdots\cap E_n)
    \geq 1-\sum_{i=1}^n(1-\mathbb{P}(E_i)).
    \tag{\text{Bonferroni 不等式}}
\]
:::

::: proof
Boole不等式可对$n$做数学归纳法证得：对于初始情况，
显然有$\mathbb{P}(E_1)\leq \mathbb{P}(E_1)$；
而若$\mathbb{P}\!\left(E_1\cup\cdots E_n\right)
\leq \sum_{i=1}^n \mathbb{P}(E_i)$，则
\[
    \begin{aligned}
    \mathbb{P}\!\left(E_1\cup\cdots \cup E_{n+1}\right)
    & =
    \mathbb{P}\!\left((E_1\cup\cdots \cup E_{n})\cup E_{n+1}\right) \\
    & \leq \mathbb{P}(E_1\cup\dots\cup E_n)+\mathbb{P}(E_{n+1}) \\
    & \leq \mathbb{P}(E_1)+\cdots+\mathbb{P}(E_n)+\mathbb{P}(E_{n+1})
    =\sum_{i=1}^{n+1}\mathbb{P}(E_i),
    \end{aligned}
\]
其中第二部用到了两个事件之并的概率上界，而第三部则用到了归纳假设。

Bonferroni不等式可看成Boole不等式的推论：
\[
    \begin{aligned}
    \mathbb{P}(E_1\cap\cdots\cap E_n)
    & =\mathbb{P}\!\left(\left(E_1^c \cup\cdots\cup E_n^c\right)^c\right) \\
    & =1-\mathbb{P}\!\left(E_1^c \cup\cdots\cup E_n^c\right) \\
    & \geq 1-\sum_{i=1}^n \mathbb{P}(E_i^c)
    =1-\sum_{i=1}^n (1-\mathbb{P}(E_i)),
    \end{aligned}
\]
其中第一步用到了德·摩根律，而第二步以及最后一步用到了
$\mathbb{P}(E^c)=1-\mathbb{P}(E)$。
:::
