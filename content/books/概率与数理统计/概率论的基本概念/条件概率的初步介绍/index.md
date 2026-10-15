---
title: 条件概率的初步介绍
---
## 条件概率的定义*

相当多的随机试验具有阶段性的特点，即整个试验可以分为多个阶段，
而当前阶段执行的后果会依赖于其它一些阶段的执行情况。
对于这种多阶段性的随机试验，我们往往会面临如下两类问题：

1. 对于多阶段的随机试验，
   在试验开始之前我们可能对最终结果有一个粗略的预测，
   但随着试验的进行，每完成一阶段都会获得部分观测信息。
   我们能否用这些观测信息，来修正我们对最终结果的预测？

2. 多阶段的随机试验可能难以一次性进行整体的概率建模，
   但在划分阶段后，我们就可以在已知前$k-1$个阶段执行情况的条件下
   对第$k$个阶段进行建模。那么我们应当如何将这些分阶段的概率模型进行整合，
   从而得到整个随机试验的概率模型？

为解决上述问题，我们需要引入条件概率的概念。
为此我们考虑一个简单的情形：假设已知一个概率大于$0$的事件$F$发生了，
我们希望把原来的概率测度$\mathbb{P}$更新为一个新的概率测度
$\mathbb{P}_F$（暂且将其称为条件概率测度）。
我们要求这个条件概率测度应具有如下性质：

1. $\mathbb{P}_F(F)=1$；

2. 若事件$E_1,E_2\subseteq F$且$\mathbb{P}_F(E_2)>0$，
   则$\mathbb{P}_F(E_1)/\mathbb{P}_F(E_2)=\mathbb{P}(E_1)/\mathbb{P}(E_2)$。

这两个性质直观上看是很自然的：已知$F$发生的情况下自然应当
把$F$的概率更新为$1$，而若事件$E_1$与$E_2$都是$F$的子集，
那么已知$F$发生的情况下$E_1$与$E_2$的条件概率之比应当与之前保持一致。
现任取一事件$E$，则根据第一个性质有
\[
    \mathbb{P}_F(E\cap F^c)\leq \mathbb{P}_F(F^c) = 1-\mathbb{P}_F(F)=0,
\]
从而由概率的可加性可得到
\[
    \mathbb{P}_F(E)=\mathbb{P}_F(E\cap F)+\mathbb{P}_F(E\cap F^c)
    =\mathbb{P}_F(E\cap F),
\]
接下来再根据第二个性质并注意到$E\cap F\subseteq F$，可得
\[
    \frac{\mathbb{P}_F(E\cap F)}{\mathbb{P}_F(F)}
    =\frac{\mathbb{P}(E\cap F)}{\mathbb{P}(F)},
\]
综合以上结果即可算得
\[
    \mathbb{P}_F(E) = \frac{\mathbb{P}(E\cap F)}{\mathbb{P}(F)}.
\]
由此我们做出如下定义：

::: definition {@definition:conditional_probability}
设$E,F$为两个事件，且$\mathbb{P}(F)>0$。
我们把在事件$F$发生的条件下事件$E$的**条件概率**
（conditional probability）定义为

```math {@eq:conditional_prob_defn}
\mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\right) = \frac{\mathbb{P}(E\cap F)}{\mathbb{P}(F)}.
```

:::

需要注意的是，若$\mathbb{P}(F)=0$，
则条件概率$\mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\right)$一般来说是没有定义的。

::: example [古典概型中的条件概率]
设$(\Omega,2^\Omega,\mathbb{P})$给出一古典概型，
事件$F$满足$\mathbb{P}(F)>0$。则对任意事件$E$，有
\[
    \mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\right)
    =\frac{|E\cap F|}{|F|}
    =\sum_{\omega\in E\cap F}\frac{1}{|F|}.
\]
换句话说，$\mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\right)$等于把集合$E$中
不属于$F$的元素取掉以后，剩下的元素在$F$的元素中所占的比例。
这说明对于古典概型，把$F$发生的条件下$E$的条件概率
定义为$\mathbb{P}(E\cap F)/\mathbb{P}(F)$是符合直观的。
:::

以下命题指出，若固定事件$F$并把条件概率
$\mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\right)$看成$E$的函数，
则它的确给出了一个概率测度，且符合本节一开始列出的条件概率测度
应当具备的两条性质。

::: proposition {@proposition:conditional_prob_is_a_prob_measure}
设$(\Omega,\mathcal{F},\mathbb{P})$为一概率空间，
事件$F$满足$\mathbb{P}(F)>0$。令
\[
    \mathbb{P}_F(E) = \mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\right),
    \qquad \forall E\in\mathcal{F},
\]
则$\mathbb{P}_F$给出了事件域$\mathcal{F}$上的一个概率测度，且满足

1. $\mathbb{P}_F(F)=1$；

2. 若$E_1,E_2\subseteq F$且$\mathbb{P}_F(E_2)>0$，
   则$\mathbb{P}_F(E_1)/\mathbb{P}_F(E_2)=
\mathbb{P}(E_1)/\mathbb{P}(E_2)$。

:::

::: proof
显然有$\mathbb{P}_F(\Omega)=1$。现任取事件$E$，
不难由$0\leq \mathbb{P}(E\cap F)\leq \mathbb{P}(F)$
得到$0\leq \mathbb{P}_F(E)\leq 1$。现取$E_1,E_2,\ldots$
为一列两两互斥的事件，则对任意$i\neq j$有
\[
    (E_i\cap F)\cap (E_j\cap F)=(E_i\cap E_j)\cap F=\varnothing,
\]
故
\[
    \begin{aligned}
    \mathbb{P}\!\left(
    \bigcup_{i=1}^n E_i
     \mkern2mu|\mkern2mu F\right)
    ={} &
    \frac{1}{\mathbb{P}(F)}
    \,\mathbb{P}\!\left(
    \left(\bigcup_{i=1}^\infty E_i\right)\cap F
    \right)\\
    ={} &
    \frac{1}{\mathbb{P}(F)}\,\mathbb{P}\!\left(
    \bigcup_{i=1}^\infty (E_i\cap F)\right) \\
    ={} &
    \frac{1}{\mathbb{P}(F)}
    \sum_{i=1}^\infty \mathbb{P}(E_i\cap F) \\
    ={} &
    \frac{1}{\mathbb{P}(F)}
    \sum_{i=1}^\infty \mathbb{P}\!\left(E_i \mkern2mu|\mkern2mu F\right)\,\mathbb{P}(F)
    =\sum_{i=1}^\infty \mathbb{P}\!\left(E_i \mkern2mu|\mkern2mu F\right),
    \end{aligned}
\]
其中第二步利用了并集与交集运算的分配律，
第三步利用了$\mathbb{P}$的可数可加性。

$\mathbb{P}_F$满足的几条性质可直接从条件概率的定义得到。
:::

@proposition:conditional_prob_is_a_prob_measure
意味着，在一个随机试验中，若我们知道某个事件$F$已经发生了
（要求$\mathbb{P}(F)>0$），则可以把原来的概率测度$\mathbb{P}$
替换为条件概率测度$\mathbb{P}\!\left(\cdot \mkern2mu|\mkern2mu F\right)$来帮助我们
修正对随机试验最终结果的预测。

## 乘法公式与全概率公式*

虽然在式 @eq:conditional_prob_defn 中，我们用（非条件）概率
$\mathbb{P}(\cdot)$来定义条件概率
$\mathbb{P}\!\left(\,\cdot \mkern2mu|\mkern2mu F\right)$，但许多情况下
$\mathbb{P}\!\left(\,\cdot \mkern2mu|\mkern2mu F\right)$反而是更容易建模的量，
而（非条件）概率则是需要计算的量，此时下面的两个定理就变得非常有用了。

::: theorem
设事件$F$满足$\mathbb{P}(F)>0$，则对任意事件$E$，有

```math {@eq:conditional_prob_multiply_1}
\mathbb{P}(E\cap F) = \mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\right)\,\mathbb{P}(F).
```

更一般地，设$E_1,\ldots,E_n$为$n$个事件，
且$\mathbb{P}(E_1\cap\cdots\cap E_{n-1})>0$，则

```math {@eq:conditional_prob_multiply_2}
\begin{aligned}
& \mathbb{P}(E_1\cap \cdots \cap E_n) \\
={} &
\mathbb{P}\!\left(E_n \mkern2mu|\mkern2mu E_1\cap\cdots \cap E_{n-1}\right)
\,
\mathbb{P}\!\left(E_{n-1} \mkern2mu|\mkern2mu E_1\cap\cdots \cap E_{n-2}\right)\cdots
\mathbb{P}\!\left(E_2 \mkern2mu|\mkern2mu E_1\right)\,\mathbb{P}(E_1)
\end{aligned}
```

:::

::: proof
式 @eq:conditional_prob_multiply_1
是条件概率定义的直接推论。而式
@eq:conditional_prob_multiply_2  则可以由
式 @eq:conditional_prob_multiply_1  不断递推得到：
\[
    \begin{aligned}
    & \mathbb{P}(E_1\cap\cdots\cap E_{n}) \\
    ={} & \mathbb{P}\!\left(E_{n} \mkern2mu|\mkern2mu E_1\cap\cdots \cap E_{n-1}\right)
    \, \mathbb{P}(E_1\cap\cdots \cap E_{n-1}) \\
    ={} & \mathbb{P}\!\left(E_{n} \mkern2mu|\mkern2mu E_1\cap\cdots \cap E_{n-1}\right)
    \, \mathbb{P}\!\left(E_{n-1} \mkern2mu|\mkern2mu E_1\cap\cdots \cap E_{n-2}\right)\, \mathbb{P}(E_1\cap\cdots \cap E_{n-2}) \\
    ={} & \cdots \\
    ={} & \mathbb{P}\!\left(E_{n} \mkern2mu|\mkern2mu E_1\cap\cdots \cap E_{n-1}\right)
    \, \mathbb{P}\!\left(E_{n-1} \mkern2mu|\mkern2mu E_1\cap\cdots \cap E_{n-2}\right)
    \cdots \mathbb{P}\!\left(E_2 \mkern2mu|\mkern2mu E_1\right)\,\mathbb{P}(E_1),
    \end{aligned}
\]
其中$\mathbb{P}(E_1\cap\cdots\cap E_i)>0,\,i=1,\ldots,n-2$
可由$\mathbb{P}(E_1\cap\cdots\cap E_{n-1})>0$保证。
:::

::: theorem
设事件$F_1,\ldots,F_n$两两互斥，$\bigcup_{i=1}^n F_i$为必然事件，
且对每个$i=1,\ldots,n$均有$\mathbb{P}(F_i)>0$。
则对任意事件$E$，有

```math {@eq:conditional_prob_total}
\mathbb{P}(E)=\sum_{i=1}^n \mathbb{P}\!\left(E \mkern2mu|\mkern2mu F_i\right)\, \mathbb{P}(F_i).
```

:::

::: proof
由于$F_1,\ldots,F_n$两两互斥，可知$i\neq j$时
$(E\cap F_i)\cap (E\cap F_j)=E\cap (F_i\cap F_j)=\varnothing$，
即$E\cap F_1,\ldots,E\cap F_n$也两两互斥。而由
$F_1\cup\cdots\cup F_n$为必然事件以及并集与交集运算的分配律可得
\[
    E=E\cap \left(F_1\cup \cdots \cup F_n\right)
    =(E\cap F_1)\cup\cdots\cup (E\cap F_n).
\]
故可将概率的可加性用于事件组$E\cap F_1,\ldots,E\cap F_n$并得到
\[
    \mathbb{P}(E)=\sum_{i=1}^n \mathbb{P}(E\cap F_i),
\]
最后由式 @eq:conditional_prob_multiply_1  即得待证等式。
:::

式 @eq:conditional_prob_multiply_1  与
@eq:conditional_prob_multiply_2  被称为条件概率的
**乘法公式**，而式 @eq:conditional_prob_total
则被称为**全概率公式**，它们为解决本节开头提出的第二类问题
（即如何将分阶段的概率模型进行整合）奠定了基础。全概率公式的一个特例是
\[
    \mathbb{P}(E)=\mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\right)\,\mathbb{P}(F)
    +\mathbb{P}\!\left(E \mkern2mu|\mkern2mu F^c\right)\,\mathbb{P}(F^c),
\]
其中需假设$0<\mathbb{P}(F)<1$。

::: example {@example:communication_noisy_channel}
假设有某个传感器需要将其测量数据上传至服务器，
数据以$\mathtt{0}$、$\mathtt{1}$两种符号构成的符号串表示。
设符号串中的每个符号在传输时需要依次经过三个二进制信道，
每个信道在传输符号$\mathtt{0}$时有$0.05$的概率发生错误
变为$\mathtt{1}$，而传输符号$\mathtt{1}$时有$0.1$的概率
发生错误变为$\mathtt{0}$（如图\ref{fig:communication_noisy_channel}）。
则从传感器发出一个符号$\mathtt{0}$能够被服务器正确接收的概率是多少？

我们用$E_i$表示符号$\mathtt{0}$经过$i$个信道传输后
还保持为$\mathtt{0}$，则待求概率为$\mathbb{P}(E_3)$，
而由全概率公式，有
\[
    \begin{aligned}
    \mathbb{P}(E_3) ={} &
    \mathbb{P}\!\left(E_3 \mkern2mu|\mkern2mu E_2\right)\,\mathbb{P}(E_2)
    +\mathbb{P}\!\left(E_3 \mkern2mu|\mkern2mu E_2^c\right)\,\mathbb{P}(E_2^c) \\
    ={} & 0.95\,\mathbb{P}(E_2) + 0.1\,\mathbb{P}(E_2^c).
    \end{aligned}
\]
而对于$\mathbb{P}(E_2)$，同样可由全概率公式得到
\[
    \begin{aligned}
    \mathbb{P}(E_2) ={} &
    \mathbb{P}\!\left(E_2 \mkern2mu|\mkern2mu E_1\right)\,\mathbb{P}(E_1)
    +\mathbb{P}\!\left(E_2 \mkern2mu|\mkern2mu E_1^c\right)\,\mathbb{P}(E_1^c) \\
    ={} & 0.95\,\mathbb{P}(E_1) + 0.1\,\mathbb{P}(E_1^c).
    \end{aligned}
\]
$\mathbb{P}(E_2^c)$则满足
$\mathbb{P}(E_2^c)=1-\mathbb{P}(E_2)$。
再将$\mathbb{P}(E_1)=0.95$，$\mathbb{P}(E_1^c)=0.05$
代入以上几式，即可求得$\mathbb{P}(E_3) = 0.871375$。

同理，可求得传感器发出符号$\mathtt{1}$能被服务器正确接收的概率
是$0.74275$。
:::

```tikz {caption="例\ref{example:communication_noisy_channel} 中的二进制信道图示。"}
\begin{tikzpicture}
\draw[fill=black] (0,0) circle (3pt) node[left, xshift=-5pt] { $\mathtt{0}$};
\draw[fill=black] (0,-3) circle (3pt) node[left, xshift=-5pt] { $\mathtt{1}$};
\draw[fill=black] (5,0) circle (3pt) node[right, xshift=5pt] { $\mathtt{0}$};
\draw[fill=black] (5,-3) circle (3pt) node[right, xshift=5pt] { $\mathtt{1}$};
\draw[-{Latex[length=10pt, width=4pt]}, line width=0.75pt] (0.1,0) -- (4.9,0);
\draw[-{Latex[length=10pt, width=4pt]}, line width=0.75pt] (0.1,0) -- (4.9,-3);
\draw[-{Latex[length=10pt, width=4pt]}, line width=0.75pt] (0.1,-3) -- (4.9,-3);
\draw[-{Latex[length=10pt, width=4pt]}, line width=0.75pt] (0.1,-3) -- (4.9,0);
\node[anchor=south] at (2.5,0) {$0.95$};
\node[anchor=north] at (2.5,-3) {$0.9$};
\node[anchor=north east,xshift=3pt] at (1,-0.6) {$0.05$};
\node[anchor=south east,xshift=3pt] at (1,-2.4) {$0.1$};
\end{tikzpicture}
```

\label{fig:communication_noisy_channel}

::: example [Pólya罐子模型]
设一个罐子中一开始有$x$个标号为$1$的球与$y$个标号为$0$的球。
之后我们重复如下过程：从罐子中随机取一个球，记下它的标号，
将这个球放回的同时将$c$个与之标号一样的球加入罐子当中。
则经过$n$轮取球和放球的操作后，罐子中有$x+kc$个标号$1$的球
与$b+(n-k)c$个标号$0$的球的概率是多少？

首先用$E_{n,k}$表示事件“$n$轮过后，
罐子中有$r+kc$个标号$1$的球与$b+(n-k)c$个标号$0$的球”，
并对任意$c_1,\ldots,c_n\in\{0,1\}$，
用$F_{c_1,\ldots,c_n}$表示事件“$n$轮中抽出的球的标号
依次为$c_1,\ldots,c_n$”，则由概率的可加性可得
\[
    \mathbb{P}(E_{n,k})=\sum_{\substack{c_1,\ldots,c_n\in \{0,1\}: \\
    c_1+\cdots+c_n=k}} \mathbb{P}(F_{c_1,\ldots,c_n}).
\]
接下来，设$c_1+\cdots+c_n=k$，我们用乘法公式
计算$\mathbb{P}(F_{c_1,\ldots,c_n})$：
\[
    \begin{aligned}
    \mathbb{P}(F_{c_1,\ldots,c_n})
    ={} &
    \mathbb{P}\!\left(F_{c_1,\ldots,c_n} \mkern2mu|\mkern2mu F_{c_1,\ldots,c_{n-1}}\right)\,
    \mathbb{P}(F_{c_1,\ldots,c_{n-1}}) \\
    ={} &
    \left\{\begin{aligned}
    &\displaystyle\frac{x+(k-1)c}{x+y+(n-1)c}\,\mathbb{P}(F_{c_1,\ldots,c_{n-1}}), && \text{若}\ c_n=1, \\[3pt]
    &\displaystyle\frac{y+(n-k-1)c}{x+y+(n-1)c}\,\mathbb{P}(F_{c_1,\ldots,c_{n-1}}), &&\text{若}\ c_n=0.
    \end{aligned}\right.
    \end{aligned}
\]
我们对上式做一些简单的解释：若$c_n=1$，因$c_1+\cdots+c_n=k$，
故前$n-1$轮中有$k-1$轮抽出了标号为$1$的球，因而
在$F_{c_1,\ldots,c_{n-1}}$的条件下$F_{c_1,\ldots,c_{n}}$的
条件概率即为$x+y+(n-1)c$个球中有$x+(k-1)c$个标号为$1$时
抽出标号为$1$的球的概率；$c_n=0$的情况类似。
利用上式作出若干步递推后不难发现，
$\mathbb{P}(F_{c_1,\ldots,c_n})$的值仅取决于$k$：
\[
    \mathbb{P}(F_{c_1,\ldots,c_n})=\frac{\prod_{i=0}^{k-1}(x+ic)\prod_{i=0}^{n-k-1}(y+ic)}{\prod_{i=0}^{n-1}(x+y+ic)}.
\]
最后可得
\[
    \begin{aligned}
    \mathbb{P}(E_{n,k})
    ={} & \sum_{\substack{c_1,\ldots,c_n\in\{0,1\}: \\
    c_1+\cdots+c_n=k}} \frac{\prod_{i=0}^{k-1}(x+ic)\prod_{i=0}^{n-k-1}(y+ic)}{\prod_{i=0}^{n-1}(x+y+ic)} \\
    ={} & \binom{n}{k} \frac{\prod_{i=0}^{k-1}(x+ic)\prod_{i=0}^{n-k-1}(y+ic)}{\prod_{i=0}^{n-1}(x+y+ic)},
    \end{aligned}
\]
其中最后一步我们利用了这样一个事实：方程$c_1+\cdots+c_n=k$的
满足$c_1,\ldots,c_n\in\{0,1\}$的解总共有
$\displaystyle\binom{n}{k}$组。
:::

## 贝叶斯公式*

::: theorem {@theorem:Bayes_theorem}
设事件$F_1,\ldots,F_n$两两互斥，
$\bigcup_{i=1}^n F_i$为必然事件，
且对每个$i=1,\ldots,n$均有$\mathbb{P}(F_i)>0$。
则对任意概率大于$0$的事件$E$，有

```math {@eq:conditional_prob_Bayes}
\mathbb{P}\!\left(F_i \mkern2mu|\mkern2mu E\right)
=\frac{\mathbb{P}\!\left(E \mkern2mu|\mkern2mu F_i\right)\,\mathbb{P}(F_i)}{
\sum_{j=1}^n \mathbb{P}\!\left(E \mkern2mu|\mkern2mu F_j\right)\,\mathbb{P}(F_j)
},
\qquad\forall i=1,\ldots,n.
```

:::

::: proof
我们有
\[
    \begin{aligned}
    \mathbb{P}\!\left(F_i \mkern2mu|\mkern2mu E\right)
    ={} & \frac{\mathbb{P}(E\cap F_i)}{\mathbb{P}(E)}
    =
    \frac{\mathbb{P}\!\left(E \mkern2mu|\mkern2mu F_i\right)\,\mathbb{P}(F_i)}
    {\sum_{i=1}^n \mathbb{P}\!\left(E \mkern2mu|\mkern2mu F_i\right)\,\mathbb{P}(F_i)},
    \end{aligned}
\]
其中第一步来自于条件概率的定义，而第二步中则代入了条件概率的
乘法公式与全概率公式。
:::

@theorem:Bayes_theorem  通常被称为**贝叶斯定理**（Bayes' theorem），等式
@eq:conditional_prob_Bayes  被称为**贝叶斯公式**或**逆概率公式**，
其中概率$\mathbb{P}(F_i)$通常被称为事件$F_i$的**先验概率**（prior probability），
$\mathbb{P}\!\left(F_i \mkern2mu|\mkern2mu E\right)$则被称为（事件$E$发生后）
$F_i$的**后验概率**（posterior probability）。
贝叶斯公式的一个特例是
\[
    \mathbb{P}\!\left(F \mkern2mu|\mkern2mu E\right)
    =\frac{\mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\right)\,\mathbb{P}(F)}
    {\mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\right)\,\mathbb{P}(F)
    +\mathbb{P}\!\left(E \mkern2mu|\mkern2mu F^c\right)\,\mathbb{P}(F^c)},
\]
其中需假设$\mathbb{P}(E)>0$以及$0<\mathbb{P}(F)<1$。

贝叶斯公式常用来解决如下一类问题：设某个随机试验分为两个阶段，
第一个阶段当中事件$F_1,\ldots,F_n$有且仅有一个发生，
而第二阶段的试验结果则取决于$F_1,\ldots,F_n$当中具体是哪个事件发生，
现在我们在第二阶段观测到了事件$E$发生，则应当如何用这个第二阶段
获得的信息反过来更新第一阶段中事件$F_1,\ldots,F_n$的（条件）概率。

::: example
假设有一种罕见病，在人群中的发病率为$10^{-5}$。
现在针对这种罕见病开发了一种快速诊断方法，该方法应用在病患身上时
将以$99\%$的概率给出阳性结果，而应用在健康人身上时将以$1\%$的概率
给出阳性结果。现假设在人群中随机选择一人并应用这种诊断方法后
给出了阳性结果，试问这个人患病的概率是多少？

我们用事件$E_+$表示诊断结果为阳性，事件$H$表示随机选择的这个人患病。
则由贝叶斯公式可得
\[
    \begin{aligned}
    \mathbb{P}\!\left(H \mkern2mu|\mkern2mu E_+\right)
    & = \frac{\mathbb{P}\!\left(E_+ \mkern2mu|\mkern2mu H\right)\,\mathbb{P}(H)}{
    \mathbb{P}\!\left(E_+ \mkern2mu|\mkern2mu H\right)\,\mathbb{P}(H)+\mathbb{P}\!\left(E_+ \mkern2mu|\mkern2mu H^c\right)\,\mathbb{P}(H^c)
    } \\
    & =\frac{0.99\cdot 10^{-5}}{0.99\cdot 10^{-5}+0.01\cdot (1-10^{-5})}
    <0.1\%.
    \end{aligned}
\]
以上计算说明，这种快速诊断方法应用在一般人群中误报阳性的几率非常大，
因此是有非常大缺陷的。

接下来假设我们想要对该诊断方法进行改进，使其应用在病患身上时的阳性率
依然保持在$99\%$，但应用在健康人身上时的阳性率下降到$\alpha$。
则此时有
\[
    \mathbb{P}\!\left(H \mkern2mu|\mkern2mu E_+\right)
    =\frac{0.99\cdot 10^{-5}}{0.99\cdot 10^{-5}+\alpha\cdot (1-10^{-5})}
    \approx \frac{10^{-5}}{10^{-5}+\alpha}.
\]
由上式可看出，若要使得$\mathbb{P}\!\left(H \mkern2mu|\mkern2mu E_+\right)$提升到$50\%$以上，
则要求$\alpha\lesssim 10^{-5}$；若要使得
$\mathbb{P}\!\left(H \mkern2mu|\mkern2mu E_+\right)$提升到$95\%$以上，
则要求$\alpha\lesssim 5\times 10^{-7}$。
:::

::: example [三门问题，Monty Hall Problem]
美国曾有一电视游戏节目，在该游戏节目中，参赛者会看见三扇门，
其中一扇门的背后放有一辆汽车，另外两扇门背后则都放着山羊。
参赛者首先选择一扇门，随后节目主持人会随机开启一扇参赛者未选
而背后是山羊的门，并让参赛者决定是否改选另一扇未开启的门。
在参赛者做出最终决定后，若被选的门背后是汽车，则参赛者将赢得这辆汽车，
否则会输掉游戏。那么在这个游戏中，参赛者是否应该改选另一扇未开启的门？

简单起见，假设汽车与山羊均随机放置在门背后。现假设参赛者选择1号门，
而主持人打开了3号门。则
\[
    \begin{aligned}
    & \mathbb{P}\!\left(\text{汽车在 1 号门} \mkern2mu|\mkern2mu \text{主持人打开 3 号门}\right) \\
    ={} & \frac{\mathbb{P}\!\left(\text{主持人打开 3 号门} \mkern2mu|\mkern2mu \text{汽车在 1 号门}\right)\,\mathbb{P}\!\left(\text{汽车在 1 号门}\right)}{
    \sum_{i=1}^3 \mathbb{P}\!\left(\text{主持人打开 3 号门} \mkern2mu|\mkern2mu \text{汽车在 $i$ 号门}\right)\,\mathbb{P}\!\left(\text{汽车在 $i$ 号门}\right)
    } \\
    ={} & \frac{\frac{1}{2}\cdot\frac{1}{3}}{\frac{1}{2}\cdot\frac{1}{3}+1\cdot\frac{1}{3}+0\cdot\frac{1}{3}} = \frac{1}{3},
    \end{aligned}
\]
而
\[
    \begin{aligned}
    & \mathbb{P}\!\left(\text{汽车在 2 号门} \mkern2mu|\mkern2mu \text{主持人打开 3 号门}\right) \\
    ={} & \frac{\mathbb{P}\!\left(\text{主持人打开 3 号门} \mkern2mu|\mkern2mu \text{汽车在 2 号门}\right)\,\mathbb{P}\!\left(\text{汽车在 2 号门}\right)}{
    \sum_{i=1}^3 \mathbb{P}\!\left(\text{主持人打开 3 号门} \mkern2mu|\mkern2mu \text{汽车在 $i$ 号门}\right)\,\mathbb{P}\!\left(\text{汽车在 $i$ 号门}\right)
    } \\
    ={} & \frac{1\cdot\frac{1}{3}}{\frac{1}{2}\cdot\frac{1}{3}+1\cdot\frac{1}{3}+0\cdot\frac{1}{3}} = \frac{2}{3},
    \end{aligned}
\]
故这种情况下参赛者应改选2号门。由问题的对称性可知参赛者
总是应该改选另一扇未开启的门。
:::
