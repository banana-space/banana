---
title: '形如$\sum_{x\in\mathcal{X}} f(x)$的求和式'
---
本节中，我们将定义形如

```math {@eq:summation_countable_appendix}
\sum_{x\in\mathcal{X}} f(x)
```

的求和式应如何取值。这里$\mathcal{X}$为一可数集，
$f:\mathcal{X}\rightarrow\mathbb{R}$为实值函数[^1]。
该求和式取值的严格定义如下：

- 当$\mathcal{X}$为空集时，定义
  $\sum_{x\in\mathcal{X}} f(x)=0$；
  当$\mathcal{X}$为有限集时，
  $\sum_{x\in\mathcal{X}} f(x)$定义为
  所有$f(x),\,x\in\mathcal{X}$的和。
  这两种情况下，我们总是称$\sum_{x\in\mathcal{X}} f(x)$
  是**收敛**的。

- 当$\mathcal{X}$为可数无限集时，
  则任取一序列$x_1,x_2,x_3,\ldots$使其
  不重复地枚举$\mathcal{X}$的所有元素，
  当级数$\sum_{j=1}^\infty |f(x_j)| $收敛时，
  我们称$\sum_{x\in\mathcal{X}} f(x)$**收敛**，并定义
  \[
      \sum_{x\in\mathcal{X}} f(x) = \sum_{j=1}^\infty f(x_j),
  \]
  否则称$\sum_{x\in\mathcal{X}} f(x)$**发散**．

  由于求和式$\sum_{x\in\mathcal{X}} f(x)$收敛
  要求$\sum_{j=1}^\infty f(x_j)$绝对收敛，
  因此$\sum_{x\in\mathcal{X}} f(x)$的值
  与序列$(x_j)_{j=1}^\infty$的具体取法无关，
  也就是说以上定义是无歧义的。

根据以上定义可知，$\sum_{x\in\mathcal{X}} f(x)$收敛
当且仅当$\sum_{x\in\mathcal{X}} |f(x)|$收敛。

由上述定义及级数收敛的相关知识，不难得到求和式的如下性质：

::: proposition {@proposition:summation_linearity_dominance}
设$\mathcal{X}$为一至多可数集，$f,g$为两个
定义在$\mathcal{X}$上的实值函数。

1. 若$\sum_{x\in\mathcal{X}} f(x)$与
   $\sum_{x\in\mathcal{X}} g(x)$均收敛，
   则对任意$\alpha,\beta\in\mathbb{R}$，
   $\sum_{x\in\mathcal{X}} (\alpha f(x)+\beta g(x))$也收敛，且
   \[
       \sum_{x\in\mathcal{X}} (\alpha f(x)+\beta g(x))
       =\alpha \sum_{x\in\mathcal{X}} f(x)
       +\beta \sum_{x\in\mathcal{X}} g(x).
   \]

2. 若$0\leq f(x)\leq g(x),\,\forall x\in\mathcal{X}$，
   且$\sum_{x\in\mathcal{X}} g(x)$收敛，
   则$\sum_{x\in\mathcal{X}} f(x)$也收敛，且
   \[
       \sum_{x\in\mathcal{X}} f(x)
       \leq \sum_{x\in\mathcal{X}} g(x).
   \]

:::

在涉及到离散随机变量的理论推导当中，
我们经常需要对多重求和式交换求和次序。利用以下定理，
我们可以验证求和次序是否可交换。

::: theorem {@theorem:summation_interchange}
设$\mathcal{X}$为至多可数集，
函数$f:\mathcal{X}\rightarrow\left[0,+\infty\right[$取值非负，
$\mathcal{I}$为一至多可数集，每个$i\in\mathcal{I}$对应于
一个集合$\mathcal{X}_i\subseteq\mathcal{X}$，且满足
\[
    \bigcup_{i\in\mathcal{I}} \mathcal{X}_i = \mathcal{X}
    \qquad\text{以及}\qquad
    \mathcal{X}_{i}\cap \mathcal{X}_{j}=\varnothing,\quad\forall i\neq j,
\]
则$\sum_{x\in\mathcal{X}} f(x)$收敛当且仅当

1. 对于每个$i\in\mathcal{I}$，
   $\sum_{x\in\mathcal{X}_i} f(x)$均收敛，且

2. $\sum_{i\in\mathcal{I}}s(i)$收敛，其中
   \[
       s(i) = \sum_{x\in\mathcal{X}_i} f(x).
   \]

此外，当$\sum_{x\in\mathcal{X}} f(x)$收敛时有
\[
    \sum_{x\in\mathcal{X}} f(x)
    =\sum_{i\in\mathcal{I}} s(i)
    =\sum_{i\in\mathcal{I}}\Bigg(\sum_{x\in\mathcal{X}_i} f(x)\Bigg).
\]
:::

@theorem:summation_interchange  的证明较长
且涉及到不少数学分析的知识点，我们将它放在
本节最后一小节中作为选读内容。
下面我们给出该定理的一个直接推论：

::: corollary {@corollary:summation_interchange}
设$\mathcal{X},\mathcal{Y}$为两个可数无限集，
$f:\mathcal{X}\times\mathcal{Y}\rightarrow\mathbb{R}$
为一实值函数。若如下求和式中的任意一个收敛：
\[
    \sum_{x\in\mathcal{X}}\Bigg(
    \sum_{y\in\mathcal{Y}}|f(x,y)|
    \Bigg),
    \qquad
    \sum_{y\in\mathcal{Y}}\Bigg(
    \sum_{x\in\mathcal{X}}|f(x,y)|
    \Bigg),
\]
则
\[
    \sum_{x\in\mathcal{X}}\Bigg(
    \sum_{y\in\mathcal{Y}}f(x,y)
    \Bigg)
    \qquad\text{与}\qquad
    \sum_{y\in\mathcal{Y}}\Bigg(
    \sum_{x\in\mathcal{X}}f(x,y)
    \Bigg)
\]
均收敛，且二者的取值相同。
:::

::: proof
（${}^\star$）
令
\[
    \mathcal{U}_x = \{x\}\times\mathcal{Y},\quad
    \forall x\in\mathcal{X}
    \qquad
    \text{以及}
    \qquad
    \mathcal{V}_y = \mathcal{X}\times\{y\},
    \quad \forall y\in\mathcal{Y},
\]
则不难看出
\[
    \bigcup_{x\in \mathcal{X}}\mathcal{U}_x=
    \bigcup_{y\in \mathcal{Y}}\mathcal{V}_y=
    \mathcal{X}\times\mathcal{Y}
\]
以及
\[
    \begin{aligned}
    \mathcal{U}_{x_1}\cap \mathcal{U}_{x_2} & =\varnothing, \quad\forall x_1\neq x_2, \\
    \mathcal{V}_{y_1}\cap \mathcal{V}_{y_2}& =\varnothing, \quad\forall y_1\neq y_2.
    \end{aligned}
\]
令
\[
    f^+(x,y)=\max\left\{f(x,y),0\right\},
    \qquad
    f^-(x,y)=\max\left\{-f(x,y),0\right\},
\]
则有$0\leq f^+(x,y)\leq |f(x,y)|$以及
$0\leq f^-(x,y)\leq |f(x,y)|$。故由待证推论中所设的条件、
@proposition:summation_linearity_dominance  第2部分
以及 @theorem:summation_interchange  可得，
以下三个求和式均收敛且具有相同的取值：
\[
    \sum_{(x,y)\in\mathcal{X}\times\mathcal{Y}}f^+(x,y),
    \qquad
    \sum_{x\in\mathcal{X}}\Bigg(
    \sum_{y\in\mathcal{Y}}f^+(x,y)
    \Bigg),
    \qquad
    \sum_{y\in\mathcal{Y}}\Bigg(
    \sum_{x\in\mathcal{X}}f^+(x,y)
    \Bigg).
\]
同理，以下三个求和式均收敛且具有相同的取值：
\[
    \sum_{(x,y)\in\mathcal{X}\times\mathcal{Y}}f^-(x,y),
    \qquad
    \sum_{x\in\mathcal{X}}\Bigg(
    \sum_{y\in\mathcal{Y}}f^-(x,y)
    \Bigg),
    \qquad
    \sum_{y\in\mathcal{Y}}\Bigg(
    \sum_{x\in\mathcal{X}}f^-(x,y)
    \Bigg).
\]
最后，由$f(x,y)=f^+(x,y)-f^-(x,y)$，以及
@proposition:summation_linearity_dominance  第1部分可得
\[
    \sum_{x\in\mathcal{X}}\Bigg(
    \sum_{y\in\mathcal{Y}} f(x,y)
    \Bigg)
    \qquad\text{与}\qquad
    \sum_{y\in\mathcal{Y}}\Bigg(
    \sum_{x\in\mathcal{X}} f(x,y)
    \Bigg)
\]
均收敛，且二者的取值相同。
:::

@corollary:summation_interchange  又被称为
无限和的Fubini定理。

::: remark
（${}^\star$）
需要注意的是，$\sum_{x\in\mathcal{X}}\left(\sum_{y\in\mathcal{Y}}|f(x,y)|\right)$
收敛仅仅是$\sum_{x\in\mathcal{X}}\left(\sum_{y\in\mathcal{Y}}f(x,y)\right)$
收敛的一个充分条件而非必要条件。由定义，
$\sum_{x\in\mathcal{X}}\left(\sum_{y\in\mathcal{Y}} f(x,y)\right)$
收敛的充要条件是

1. 每个$\sum_{y\in\mathcal{Y}} |f(x,y)|$均收敛，且

2. $\sum_{x\in\mathcal{X}}\left|\sum_{y\in\mathcal{Y}} f(x,y)\right|$收敛。

作为一个例子，我们考虑$\mathcal{X}=\mathcal{Y}=\mathbb{N}$，
\[
    f(x,y) = \begin{cases}
    1, & \text{若}\ y=x, \\
    -1, & \text{若}\ y=x + 1, \\
    0, & \text{其它情况}.
    \end{cases}
\]
则$\sum_{x\in\mathcal{X}}
\left(\sum_{y\in\mathcal{Y}}|f(x,y)|\right)$发散，
但对每个$x\in\mathcal{X}$，均有
\[
    \sum_{y\in\mathcal{Y}}|f(x,y)| = |1|+|-1|= 2,
\]
以及
\[
    \sum_{x\in\mathcal{X}}\Bigg|\sum_{y\in\mathcal{Y}} f(x,y)\Bigg|
    =\sum_{x\in\mathcal{X}}\left|1+(-1)\right| = 0.
\]
因此$\sum_{x\in\mathcal{X}}
\left(\sum_{y\in\mathcal{Y}} f(x,y)\right)$收敛。
注意到该例中的多重求和式不能交换求和次序。
:::

关于求和式$\sum_{x\in\mathcal{X}}f(x)$更详细的内容，
读者可参考[@tao_analysis]第8.2节。

## （${}^\star$）@theorem:summation_interchange  的证明* {@appendix:subsection:summation_interchange_proof}

我们先证明如下引理：

::: lemma {@lemma:summation_supremum}
设$\mathcal{X}$非空，$f(x)\geq 0,\,\forall x\in\mathcal{X}$，
则$\sum_{x\in\mathcal{X}} f(x)$收敛时
\[
    \sum_{x\in\mathcal{X}} f(x) =
    \sup\left\{\sum_{j=1}^n f(x_j)\Biggm\vert
    x_1,\ldots,x_n\in\mathcal{X}\ \text{且互不相同},\,n\in\mathbb{N}_+\right\},
\]
且$\sum_{x\in\mathcal{X}} f(x)$发散当且仅当上式右端为$+\infty$。
:::

::: proof
待证结论在$\mathcal{X}$为有限集时显然成立，
故接下来我们假设$\mathcal{X}$为可数无限集。
令序列$\bar{x}_1,\bar{x}_2,\ldots$为任一
不重复地枚举$\mathcal{X}$的所有元素的序列，并记
\[
    s=\sup\left\{\sum_{j=1}^n f(x_j) \Biggm\vert
    x_1,\ldots,x_n\in\mathcal{X}\ \text{且互不相同},\,n\in\mathbb{N}_+
    \right\}\in[0,+\infty].
\]

先考虑$s=+\infty$的情形。由$s$的定义可知，
对任意正整数$k$，均存在正整数$\ell_k$以及
互不相同的正整数$j(k,1),\ldots,j(k,\ell_k)$使得
\[
    f(\bar{x}_{j(k,1)})
    +\cdots+
    f(\bar{x}_{j(k,\ell_k)})
    >k.
\]
现令$m(k) = \max\{j(k,1),\ldots,j(k,\ell_k)\},\  k\in\mathbb{N}_+$，
则给定任一正整数$k$时，只要取$n\geq m(k)$就有
\[
    \sum_{j=1}^{n} f(\bar{x}_j)
    \geq
    \sum_{j=1}^{m(k)} f(\bar{x}_j)
    \geq f(\bar{x}_{j(k,1)})+\cdots + f(\bar{x}_{j(k,\ell_k)}) > k.
\]
故$\sum_{j=1}^\infty f(\bar{x}_j)$发散，
从而$\sum_{x\in\mathcal{X}} f(x)$发散。

再考虑$s$为有限实数的情形。由$s$的定义可知，对任意正整数$n$，有
\[
    \sum_{j=1}^n f(\bar{x}_j)
    = f(\bar{x}_1)+\cdots + f(\bar{x}_n)
    \leq s,
\]
故$\sum_{j=1}^\infty f(\bar{x}_j)$收敛且
$\sum_{j=1}^\infty f(\bar{x}_j)\leq s$。
现取任一$\epsilon>0$，则由$s$的定义，存在自然数$n_\epsilon$
以及互不相同的正整数$j(1),\ldots,j(n_\epsilon)$使得
\[
    f(\bar{x}_{j(1)})+\cdots
    +f(\bar{x}_{j(n_\epsilon)}) > s-\epsilon.
\]
从而
\[
    \sum_{j=1}^\infty f(\bar{x}_j)
    \geq f(\bar{x}_{j(1)})+\cdots
    +f(\bar{x}_{j(n_\epsilon)})
    >s-\epsilon.
\]
由$\epsilon>0$的任意性可得
$\sum_{j=1}^\infty f(\bar{x}_j)\geq s$。综上，
可得$\sum_{x\in\mathcal{X}}f(x)$收敛且等于$s$。
:::

现在我们开始证明 @theorem:summation_interchange。
为方便起见，我们将指标集$\mathcal{X}$与每个$\mathcal{X}_i$
均扩充为可数无限集，并在扩充出来的指标$x$上定义$f(x)=0$。
不难看出这样的扩充不影响求和式的敛散性以及取值。

首先假设存在某个$\iota\in\mathcal{I}$使得
$\sum_{x\in\mathcal{X}_{\iota}} f(x)$发散。
由 @lemma:summation_supremum  可得
\[
    \begin{aligned}
    & \sup\left\{\sum_{j=1}^n f(x_j) \Biggm\vert
    x_1,\ldots,x_n\in\mathcal{X}\ \text{且互不相同},\,n\in\mathbb{N}_+\right\} \\
    \geq{} & \sup\left\{\sum_{j=1}^n f(x_j) \Biggm\vert
    x_1,\ldots,x_n\in\mathcal{X}_{\iota}\ \text{且互不相同},\,n\in\mathbb{N}_+\right\} \\
    ={} & +\infty,
    \end{aligned}
\]
从而$\sum_{x\in\mathcal{X}} f(x)$发散。

接下来设每个$\sum_{x\in\mathcal{X}_i} f(x)$均收敛
但$\sum_{i\in\mathcal{I}} s(i)$发散。
取$M$为任意正实数，则存在正整数$m_1$以及
$\iota_1,\ldots\iota_{m_1}\in \mathcal{I}$使得
\[
    \sum_{k=1}^{m_1}s(\iota_k) > M.
\]
再取$\epsilon = M/(2m_1)$，
由于每个$\sum_{x\in\mathcal{X}_i} f(x)$均收敛，
根据 @lemma:summation_supremum，
存在正整数$m_2$及如下各元素互不相同的矩阵：
\[
    \begin{bmatrix}
    \tilde{x}(\iota_1,1) & \tilde{x}(\iota_1,2) & \cdots & \tilde{x}(\iota_1,m_2) \\
    \tilde{x}(\iota_2,1) & \tilde{x}(\iota_2,2) & \cdots & \tilde{x}(\iota_2,m_2) \\
    \vdots & \vdots & \ddots & \vdots \\
    \tilde{x}(\iota_{m_1},1) & \tilde{x}(\iota_{m_1},2) & \cdots & \tilde{x}(\iota_{m_1}, m_2) \\
    \end{bmatrix}
    \in\mathcal{X}^{m_1\times m_2},
\]
使得
\[
    \sum_{\ell=1}^{m_2} f(\tilde{x}(\iota_k,\ell))
    > s(\iota_k) - \epsilon,
    \qquad\forall k=1,\ldots,m_1,
\]
从而有
\[
    \begin{aligned}
    & \sup\left\{\sum_{j=1}^n f(x_j) \Biggm\vert
    x_1,\ldots,x_n\in\mathcal{X}\ \text{且互不相同},\,n\in\mathbb{N_+}\right\} \\
    \geq{} &
    \sum_{k=1}^{m_1}\sum_{\ell=1}^{m_2} f(\tilde{x}(\iota_k,\ell))
    > \sum_{k=1}^{m_1} (s(\iota_k)-\epsilon)
    = \sum_{k=1}^{m_1} s(\iota_k)
    -\frac{M}{2} \\
    >{} & \frac{M}{2}.
    \end{aligned}
\]
由$M>0$的任意性可得上式左端为$+\infty$，
再由 @lemma:summation_supremum  可知
$\sum_{x\in\mathcal{X}}f(x)$发散。

最后考虑每个$\sum_{x\in\mathcal{X}_i} f(x)$以及
$\sum_{i\in\mathcal{I}} s(i)$均收敛的情况。
一方面，对任意互不相同的$x_1,\ldots,x_n\in\mathcal{X}$，
存在互不相同的$\iota_1,\ldots,\iota_\kappa\in\mathcal{I}$，
使得对任意$k=1,\ldots,\kappa$，集合
$\mathcal{Z}_k = \mathcal{X}_{\iota_k}\cap \{x_1,\ldots,x_n\}$
为非空有限集，且
$\bigcup_{k=1}^\kappa\mathcal{Z}_k=\{x_1,\ldots,x_n\}$，从而
\[
    \begin{aligned}
    \sum_{j=1}^n f(x_j)
    & = \sum_{k=1}^{\kappa}
    \sum_{x\in \mathcal{Z}_k} f(x)
    \leq \sum_{k=1}^{\kappa} s(\iota_k) \\
    &
    \leq \sup\left\{\sum_{k=1}^n s(i_k) \Biggm\vert
    i_1,\ldots,i_k\in\mathcal{I}\ \text{且互不相同},\ k\in\mathbb{N}_+\right\} \\
    & = \sum_{i\in\mathcal{I}} s(i).
    \end{aligned}
\]
由于$x_1,\ldots,x_n\in\mathcal{X}$任意，可得
\[
    \begin{aligned}
    & \sup\left\{\sum_{j=1}^n f(x_j) \Biggm\vert
    x_1,\ldots,x_n\in\mathcal{X}\ \text{且互不相同},\,n\in\mathbb{N}_+\right\}
    \leq \sum_{i\in\mathcal{I}} s(i),
    \end{aligned}
\]
故$\sum_{x\in\mathcal{X}} f(x)$收敛
且小于等于$\sum_{i\in\mathcal{I}} s(i)$。另一方面，
记$s=\sum_{i\in\mathcal{I}} s(i)$，并任取$\epsilon>0$，
则存在正整数$m_1$以及互不相同的$\iota_1,\ldots,\iota_{m_1}$使得
\[
    \sum_{k=1}^{m_1}s(\iota_k)
    >s-\frac{\epsilon}{2}
\]
而由于每个$\sum_{x\in\mathcal{X}_i} f(x)$均收敛，
可知存在正整数$m_2$及各个元素互不相同的矩阵
\[
    \begin{bmatrix}
    \tilde{x}(\iota_1,1) & \tilde{x}(\iota_1,2) & \cdots & \tilde{x}(\iota_1,m_2) \\
    \tilde{x}(\iota_2,1) & \tilde{x}(\iota_2,2) & \cdots & \tilde{x}(\iota_2,m_2) \\
    \vdots & \vdots & \ddots & \vdots \\
    \tilde{x}(\iota_{m_1},1) & \tilde{x}(\iota_{m_1},2) & \cdots & \tilde{x}(\iota_{m_1}, m_2) \\
    \end{bmatrix}
    \in\mathcal{X}^{m_1\times m_2},
\]
使得
\[
    \sum_{\ell=1}^{m_2}f(\tilde{x}(\iota_k,\ell))
    >s(\iota_k) - \frac{\epsilon}{2m_1},
    \qquad\forall k=1,\ldots,m_1.
\]
从而
\[
    \begin{aligned}
    & \sup\left\{\sum_{j=1}^n f(x_j) \Biggm\vert
    x_1,\ldots,x_n\in\mathcal{X}\ \text{且互不相同},\,n\in\mathbb{N}_+\right\} \\
    \geq{} &
    \sum_{k=1}^{m_1}\sum_{\ell=1}^{m_2} f(\tilde{x}(\iota_k,\ell))
    > \sum_{k=1}^{m_1}
    \left(s(\iota_k)-\frac{\epsilon}{2m_1}\right)
    =\sum_{k=1}^{m_1} s(\iota_k) - \frac{\epsilon}{2} \\
    >{} & s-\epsilon.
    \end{aligned}
\]
由$\epsilon>0$的任意性可得上式左端等于$s$。综合以上结果，最终可得
\[
    \sum_{x\in\mathcal{X}}f(x)=s=\sum_{i\in\mathcal{I}}s(i).
\]

[^1]: 第二章 @remark:summation  中的求和式 @eq:sum_countable_terms  即为 式 @eq:summation_countable_appendix  的特殊情形。 此外，@remark:summation  中还给出了本讲义所采纳的 一些简化记法，这些简化记法对应的取值仍可最终归结于 式 @eq:summation_countable_appendix  的取值。
