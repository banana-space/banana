---
title: 事件的独立性
---
::: definition {@definition:independence_two_events}
设$(\Omega,\mathcal{F},\mathbb{P})$为一概率空间，
$E,F$为$\mathcal{F}$中的两个事件。
我们称$E$与$F$相互**独立**(independent)，若
\[
    \mathbb{P}(E\cap F) = \mathbb{P}(E)\,\mathbb{P}(F).
\]
:::

不难看出，当$\mathbb{P}(F)>0$时，
$\mathbb{P}(E\cap F)=\mathbb{P}(E)\,\mathbb{P}(F)$
等价于$\mathbb{P}\!\left(E \mkern2mu|\mkern2mu F\right)=\mathbb{P}(E)$，
因而$E$与$F$相互独立可以直观解释为事件$F$的发生并不影响事件$E$的概率。
同理，当$\mathbb{P}(E)>0$时，$E$与$F$相互独立可以直观解释为
事件$E$的发生并不影响事件$F$的概率。

::: example [古典概型中的独立性] {@example:independence_in_classical_probability}
设一个随机试验总共有两个阶段，其中第一个阶段总共有$m$种可能结果，
第二个阶段总共有$n$种可能的结果，且每种结果的可能性相同。
对于这样的随机试验，我们将第一阶段的结果用$1,\ldots,m$标号，
将第二阶段的结果用$1,\ldots,n$标号，则可以取样本空间为
\[
    \begin{aligned}
    \Omega & = \left\{(\omega_1,\omega_2) \mid
    \omega_1\in\{1,\ldots,m\},\,\omega_2\in\{1,\ldots,n\} \right\} \\
    & =\{1,\ldots,m\}\times \{1,\ldots,n\},
    \end{aligned}
\]
并取$(\Omega,2^\Omega,\mathbb{P})$为古典概型。

现对任意$A\subseteq\{1,\ldots,m\}$与
$B\subseteq\{1,\ldots,n\}$，令
\[
    \begin{aligned}
    E_{1,A} ={} & \left\{(\omega_1,\omega_2) \mid \omega_1\in A \right\}
    = \{\text{第一个阶段的结果属于集合$A$}\},\\
    E_{2,B} ={} & \left\{(\omega_1,\omega_2) \mid \omega_2\in B \right\}
    = \{\text{第二个阶段的结果属于集合$B$}\}.
    \end{aligned}
\]
则
\[
    \mathbb{P}(E_{1,A}\cap E_{2,B})
    =\mathbb{P}(
    \left\{(\omega_1,\omega_2) \mid \omega_1\in A,\omega_2\in B\right\}
    ) = \mathbb{P}(A\times B)
    =\frac{|A|\cdot |B|}{m\cdot n},
\]
而
\[
    \mathbb{P}(E_{1,A}) =  \frac{|A|\cdot n}{m\cdot n}=\frac{|A|}{m}, \qquad
    \mathbb{P}(E_{2,B}) = \frac{m\cdot |B|}{m\cdot n}=\frac{|B|}{n},
\]
故
\[
    \mathbb{P}(E_{1,A}\cap E_{2,B})
    =\mathbb{P}(E_{1,A})\,\mathbb{P}(E_{2,B}).
\]
以上结果可以总结为如下结论：设一个两阶段的随机试验服从古典概型，
且第二阶段可能发生的结果与第一阶段的结果无关，那么当事件$E$发生与否
完全取决于第一阶段的结果，且事件$F$发生与否完全取决于第二阶段的结果时，
$E$与$F$是相互独立的。
:::

接下来我们将独立性这一概念推广到多个事件上。

::: definition {@definition:independence_multi_events}
设$(\Omega,\mathcal{F},\mathbb{P})$为一概率空间，
$\mathcal{I}$为一非空集合，且每个$i\in\mathcal{I}$对应于
一个$\mathcal{F}$中的事件$E_i$。我们称事件族
$\{E_i,\,i\in\mathcal{I}\}$中的事件**相互独立**
（mutually independent），若对任意$\mathcal{I}$的非空有限子集
$\mathcal{J}$，都有
\[
    \mathbb{P}\!\left(\bigcap_{j\in\mathcal{J}}E_{j}\right)
    =\prod_{j\in\mathcal{J}}\mathbb{P}\!\left(E_{j}\right).
\]
:::

例如，设$E,F,G$为三个事件，则这三个事件相互独立的充要条件是
如下四个等式成立：
\[
    \begin{aligned}
    \mathbb{P}(E\cap F) & =\mathbb{P}(E)\,\mathbb{P}(F), & \qquad \mathbb{P}(E\cap G) &=
    \mathbb{P}(E)\,\mathbb{P}(G), \\
    \mathbb{P}(F\cap G) & =\mathbb{P}(F)\,\mathbb{P}(G), & \qquad \mathbb{P}(E\cap F\cap G) &=
    \mathbb{P}(E)\,\mathbb{P}(F)\,\mathbb{P}(G).
    \end{aligned}
\]

@example:independence_in_classical_probability
的结论可推广到多阶段的随机试验中：设一个$r$阶段的随机试验服从古典概型，
且每个阶段可能发生的结果与其它阶段的结果均无关，那么给定一组事件
$E_1,\ldots,E_r$，当各个事件$E_i$发生与否完全取决于
第$i$阶段的结果时，这组事件$E_1,\ldots,E_r$是相互独立的。
该结论的证明留给读者自行完成。

::: example [本例改编自[@bertsekas2008introduction]第一章的习题31.c] {@example:communication_noisy_channel_2}
仍考虑 @example:communication_noisy_channel
中传感器向服务器上传数据的问题，则传感器与服务器之间的信道
可以等效为图\ref{fig:communication_noisy_channel_2} 所示，
其中我们用$p_0$表示符号$\mathtt{0}$传输不出错的概率，
用$p_1$表示符号$\mathtt{1}$传输不出错的概率。
我们进一步假设在依次传输多个符号时，各个符号是否传输错误是相互独立的。
为了提升传输的正确率，我们考虑如下策略：传感器每次都会将同一个符号
连续发送3次，而服务器在收到3个依次传输的符号后，找出其中占多数的符号
作为最终的结果。例如，若服务器收到$\mathtt{010}$，
则认为传感器发送的是符号$\mathtt{0}$。在这种策略下，
符号$\mathtt{0}$能够被正确传输的概率是多少？

用$G$表示服务器最终能正确接收传感器发送的符号$\mathtt{0}$，
用$F_i,\,i=1,2,3$表示符号$\mathtt{0}$在第$i$次传输时没有出现错误，
则有
\[
    G = (F_1\cap F_2\cap F_3) \cup (F_1^c\cap F_2\cap F_3)
    \cup (F_1\cap F_2^c\cap F_3)
    \cup (F_1\cap F_2\cap F_3^c),
\]
从而由概率的有限可加性可得
\[
    \mathbb{P}(F) = \mathbb{P}(F_1\cap F_2\cap F_3)
    + \mathbb{P}(F_1^c\cap F_2\cap F_3)
    + \mathbb{P}(F_1\cap F_2^c\cap F_3)
    + \mathbb{P}(F_1\cap F_2\cap F_3^c).
\]
而由$F_1,F_2,F_3$相互独立，可得
\[
    \mathbb{P}(F_1\cap F_2\cap F_3)
    =\mathbb{P}(F_1)\,\mathbb{P}(F_2)\,\mathbb{P}(F_3)
    =p_0^3,
\]
而
\[
    \mathbb{P}(F_1^c\cap F_2\cap F_3)
    =\mathbb{P}(F_1^c)\cap\mathbb{P}(F_1)\cap\mathbb{P}(F_3)
    =(1-p_0)p_0^2,
\]
且同理有$\mathbb{P}(F_1\cap F_2^c\cap F_3)
=\mathbb{P}(F_1\cap F_2\cap F_3^c) = (1-p_0)p_0^2$。故
\[
    \mathbb{P}(G) = p_0^3 + 3(1-p_0)p_0^2 \approx 0.9546.
\]

同理可得，通过将单个符号重复传输3次，符号$\mathtt{1}$
被正确传输的概率能被提升至$p_1^3+3(1-p_1)p_1^2\approx 0.8355$。
:::

```tikz {caption="例\ref{example:communication_noisy_channel_2} 中的等效信道图示，其中$p_0=0.871375$，$p_1=0.74275$。"}
\begin{tikzpicture}
\draw[fill=black] (0,0) circle (3pt) node[left, xshift=-5pt] { $\mathtt{0}$};
\draw[fill=black] (0,-3) circle (3pt) node[left, xshift=-5pt] { $\mathtt{1}$};
\draw[fill=black] (5,0) circle (3pt) node[right, xshift=5pt] { $\mathtt{0}$};
\draw[fill=black] (5,-3) circle (3pt) node[right, xshift=5pt] { $\mathtt{1}$};
\draw[-{Latex[length=10pt, width=4pt]}, line width=0.75pt] (0.1,0) -- (4.9,0);
\draw[-{Latex[length=10pt, width=4pt]}, line width=0.75pt] (0.1,0) -- (4.9,-3);
\draw[-{Latex[length=10pt, width=4pt]}, line width=0.75pt] (0.1,-3) -- (4.9,-3);
\draw[-{Latex[length=10pt, width=4pt]}, line width=0.75pt] (0.1,-3) -- (4.9,0);
\node[anchor=south] at (2.5,0) {$p_0$};
\node[anchor=north] at (2.5,-3) {$p_1$};
\node[anchor=north east,xshift=3pt] at (1,-0.6) {$1\!-\!p_0$};
\node[anchor=south east,xshift=3pt] at (1,-2.4) {$1\!-\!p_1$};
\end{tikzpicture}
```

\label{fig:communication_noisy_channel_2}
