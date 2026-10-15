---
title: 习题选编
---
::: exercise
任给事件$E,F$，定义$E\triangle F$为“$E$与$F$当中发生且仅发生一个”
这一事件。证明
\[
    \mathbb{P}(E\triangle F) = \mathbb{P}(E)+\mathbb{P}(F)-2\,\mathbb{P}(E\cap F).
\]
:::

::: exercise
令$\Omega=\mathbb{N}$以及$\mathcal{F}=2^{\mathbb{N}}$。
证明：不存在定义在$\mathcal{F}$上的概率测度$\mathbb{P}$，
使得对任意$i,j\in\mathbb{N}$，均有
$\mathbb{P}(\{i\})=\mathbb{P}(\{j\})$。
这意味着我们无法以等可能的方式随机取自然数。
:::

::: exercise
设$(\Omega,\mathcal{F},\mathbb{P})$为一概率空间，
事件$F,G$满足$\mathbb{P}(F\cap G)>0$。令
\[
    \mathbb{P}_F(E) = \mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\right),\qquad\forall E\in\mathcal{F}.
\]
@proposition:conditional_prob_is_a_prob_measure
指出$\mathbb{P}_F$为定义在$\mathcal{F}$上的一个概率测度。证明
\[
    \mathbb{P}_F\!\left(E \mkern2mu|\mkern2mu G\right) = \mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\cap G\right),\qquad\forall E\in\mathcal{F}.
\]
:::

::: exercise [辛普森悖论，Simpson's paradox]
设事件$A,B,C$满足
\[
    \mathbb{P}\!\left(A \mkern2mu|\mkern2mu B\cap C\right)>\mathbb{P}\!\left(A \mkern2mu|\mkern2mu B^c\cap C\right)
    \quad\text{以及}\quad
    \mathbb{P}\!\left(A \mkern2mu|\mkern2mu B\cap C^c\right)>\mathbb{P}\!\left(A \mkern2mu|\mkern2mu B^c\cap C^c\right),
\]
则是否有$\mathbb{P}\!\left(A \mkern2mu|\mkern2mu B\right)>\mathbb{P}\!\left(A \mkern2mu|\mkern2mu B^c\right)$？
若是请给出证明，若否请给出反例。
:::

::: exercise [后验概率的序贯更新]
设事件$F_1,\ldots,F_n$两两互斥，$\bigcup_{i=1}^n F_i$为必然事件，
且对每个$i=1,\ldots,n$均有$\mathbb{P}(F_i)>0$。
又假设事件$E_1,\ldots,E_T$满足
$E_1\supseteq E_2\supseteq\cdots\supseteq E_T$
以及$\mathbb{P}(E_T)>0$，且在某次试验中，我们观测到
$E_1,E_2,\ldots,E_T$依次发生。令
\[
    P_i(t) = \mathbb{P}\!\left(F_i \mkern2mu|\mkern2mu E_t\right)
\]
表示观测到$E_t$发生时事件$F_i$的后验概率。证明：
对任意$i=1,\ldots,n$与$t=1,\ldots,T-1$，有
\[
    P_{i}(t+1) = \frac{\mathbb{P}\!\left(E_{t+1} \mkern2mu|\mkern2mu F_i \cap E_{t}\right)\,P_i(t)}{
    \sum_{j=1}^n \mathbb{P}\!\left(E_{t+1} \mkern2mu|\mkern2mu F_j\cap E_{t}\right)\,P_j(t)
    }.
\]
:::

::: exercise
设$E,F$为两个事件，证明如下四个命题等价：

1. $\mathbb{P}(E\cap F)=\mathbb{P}(E)\,\mathbb{P}(F)$，即$E$与$F$独立。

2. $\mathbb{P}(E^c\cap F)=\mathbb{P}(E^c)\,\mathbb{P}(F)$，即$E^c$与$F$独立。

3. $\mathbb{P}(E\cap F^c)=\mathbb{P}(E)\,\mathbb{P}(F^c)$，即$E$与$F^c$独立。

4. $\mathbb{P}(E^c\cap F^c)=\mathbb{P}(F^c)\,\mathbb{P}(E^c)$，即$E^c$与$F^c$独立。

:::

::: exercise
设$E_1,\ldots,E_n$为相互独立的事件，证明
\[
    \mathbb{P}(E_1\cup\cdots\cup E_n)
    = 1- \prod_{i=1}^n(1-\mathbb{P}(E_i))
    \geq 1-\exp\!\left(-\sum_{i=1}^n \mathbb{P}(E_i)\right).
\]
:::

::: exercise
有一副去掉大小王的扑克牌共52张，将这52张牌洗牌后发给4个人，
每人13张，则每个人牌中都包含一张A的概率是多少？
:::

::: exercise
设一个班上有$m$位同学出生在2023年，并设这$m$名同学的生日
服从$\Omega=\{(b_1,\ldots,b_m)\mid b_i\in\{1,2,\ldots,365\},\,\forall i\}$
上的古典概型。

1. 试求这$m$位同学中至少有两位生日相同的概率。

2. 当$m$的取值为多少时这个概率大于$1/2$？

:::

::: exercise
设有A、B、C、D四个国家，它们通过两两谈判的方式决定两个国家之间
是否开通双向的直飞航班。设每一对国家谈判成功（即开通双向直飞航班）
的概率为$p$，而谈判破裂的概率为$1-p$。

1. 从D国出发搭乘直飞或中转航线能够到达A国的概率；

2. 在A国与B国间没有直飞航班的条件下，从D国出发搭乘直飞或中转航线
   能够到达A国的条件概率；

3. 在B国与C国间没有直飞航班的条件下，从D国出发搭乘直飞或中转航线
   能够到达A国的条件概率；

4. 在D国与A国间没有直飞航班的条件下，从D国出发搭乘中转航线
   能够到达A国的条件概率。

注：本题改编自[@grimmett2001probability]第1.8节第19题。
:::

::: exercise
设有$k$个罐子，每个罐子当中一开始有$r$个红球和$b$个蓝球。
现从第1个罐子中随机取一个球放入第2个罐子中并搅匀，
再从第2个罐子中随机取一个球放入第3个罐子中并搅匀……
直到从$k-1$个罐子中取出一球放入第$k$个罐子中并搅匀。
则此时从第$k$个罐子中随机取出一球为红球的概率是多少？
:::

::: exercise
设有$N+1$枚不均匀的硬币，其中第$i$枚硬币抛出正面的概率为
$p_i=(i-1)/N$。你从这$N+1$枚硬币中随机选取一枚，
然后重复抛这枚硬币$m$次。假设$N$非常大，试求
这$m$次抛出结果均为正面的条件下，你再抛一次这枚硬币结果为正面的概率。

注：本题改编自[@bertsekas2008introduction]第一章的习题46。
:::

::: exercise [秘书问题，secretary problem]
假设某公司的经理需要从$N$个候选人中招聘一位秘书，招聘的流程如下：
首先用公平抽签的方式决定这$N$个候选人的面试顺序，而后经理按顺序
依次对候选人进行单独面试，每面试一个候选人，经理会根据候选人
作为秘书的资质对其进行打分，而后当场决定是否录用该候选人，
若决定录用则整个招聘流程结束，剩余的候选人也被淘汰；
若决定不录用则继续面试下一个候选人，该候选人直接被淘汰。
直到面试到最后一个候选人，此时这个候选人将直接被录用。
假设这些候选人作为秘书的资质都各不相同。

为了招聘到资质足够高的秘书，经理决定采用如下策略：

- 对于前$M$个候选人均选择不予录用，并记录下这$M$个候选人的最高分。

- 从第$M+1$个候选人开始，若其分数超过前$M$人的最高分则录用该候选人，
  否则淘汰该候选人，直至面试到最后一人。

试求这种策略下，被录用的人在所有候选人中资质最高的概率，
并在$N$非常大的情况下，求出使得该概率（近似）取到最大值的$M$。
:::

::: exercise [赌徒破产问题，gambler's ruin problem]
甲与乙两个人参与了如下游戏过程：总共有$N$张扑克牌，
游戏开始时甲手上有$i$张，乙手上有$N-i$张。随后甲乙两人抛一枚硬币，
若硬币正面朝上则甲从乙那里拿一张扑克牌到自己手里，
若硬币反面朝上则乙从甲那里拿一张扑克牌到自己手里。
甲乙两人重复这个抛硬币—拿扑克牌的过程，
直到一个人手上的扑克牌全都被拿光，则另一个人获胜。
设抛硬币的结果相互独立，硬币正面朝上的概率为$p\in\left(0,1\right)$。
我们希望求出两人各自获胜的概率。

1. 对任意$i\in\{0,\ldots,N\}$，记$P_i$为初始时
   甲手上有$i$张牌的情况下最终甲获胜的概率。证明

   ```math {@eq:gamblers_ruin_eq1}
   P_i = p\cdot P_{i+1} + (1-p)\cdot P_{i-1},\qquad \forall i=1,\ldots,N-1.
   ```

   *提示：* 可以利用如下直观上易接受的事实（不要求严格证明）：
   在第一次抛硬币为正面的条件下，甲赢得游戏的条件概率为$P_{i+1}$；
   在第一次抛硬币为反面的条件下，甲赢得游戏的条件概率为$P_{i-1}$。

2. 证明$(P_{i+1}\!-\!P_i)_{i=0}^{N-1}$构成一等比数列，
   并求出其通项。

3. 求出$P_1$的值。\
   *提示：* 利用$1=P_N\!-\!P_0=\sum_{i=0}^{N-1}(P_{i+1}\!-\!P_i)$。
   注意区分$p=1/2$与$p\neq 1/2$的情形。

4. 求出$1\leq i\leq N-1$时$P_i$的值。

:::

::: exercise
设一架满员的客机开始登机，然而第一位登机的旅客在廊桥上不慎丢失了登机牌，
在不知道座位号码的情况下他随机选了一个位置就坐。接下来登机的旅客
若发现自己的位置已经被别人乘坐，就在剩余的空座位上随机选一个位置就坐，
否则还是坐到自己原定的位置上。试求最后一位登机的乘客
在自己原定位置上就坐的概率。
:::

::: exercise
（${}^\star$）
设$E_1,E_2,E_3,\ldots$为一列事件，且对任意正整数$i$
均有$\mathbb{P}(E_i)=1$。证明
\[
    \mathbb{P}\!\left(\bigcap_{i=1}^\infty E_i\right)=1,
\]
也就是说，可数多个几乎必然发生的事件的交依然是几乎必然发生的。
:::
