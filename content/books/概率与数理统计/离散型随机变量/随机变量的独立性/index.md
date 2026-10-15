---
title: 随机变量的独立性
---

::: definition {@definition:independence_random_vars}
设$X_1,\ldots,X_n$为$n$个随机变量。
我们称$X_1,\ldots,X_n$**相互独立**
（mutually independent），若对任意区间
$I_1,\ldots,I_n\subseteq\mathbb{R}$，都有
\[
\mathbb{P}(X_1\in I_1,\ldots,X_n\in I_n)
=\prod_{i=1}^n \mathbb{P}(X_i\in I_i).
\]
:::

利用条件概率的概念，可证明$X_1,\ldots,X_n$相互独立
当且仅当如下条件成立：任取$\{1,\ldots,n\}$的一个非空真子集
$\mathcal{I}$以及区间$I_1,\ldots,I_n\subseteq\mathbb{R}$，
只要
\[
\mathbb{P}\!\left(X_k\in I_k,\,\forall k\notin\mathcal{I}\right)>0,
\]
就有
\[
\mathbb{P}\!\left(X_i\in I_i,\,\forall i\in\mathcal{I} \mkern2mu|\mkern2mu X_k\in I_k,\,\forall k\notin\mathcal{I}\right)
=\mathbb{P}\!\left(X_i\in I_i,\,\forall i\in\mathcal{I}\right).
\]
直观上看，上述条件就是说，从$X_1,\ldots,X_n$当中任意挑出一组随机变量，
则这组随机变量（作为随机向量）取值的统计规律不会受到其它随机变量取值的影响，
而这也就是随机变量独立性的一种直观的理解方式。值得指出，
在对实际问题进行概率建模时，我们往往不是从定义出发来推导/验证随机变量的独立性，
而是从产生这些随机变量的实际背景出发，并根据上述独立性的直观理解方式，
直接判断独立性（或近似独立性）是否得到满足，再利用独立性定义及相关性质
导出其它结论；当基于独立性假定所建立的概率模型与实际现象不符时，
我们再考虑替换掉独立性假设。

接下来我们将重点放在离散型随机变量上。以下定理指出，
两个离散型随机变量的独立性可以根据其联合分布列来判断；
该定理也不难推广到多个离散型随机变量的情况。

::: theorem {@theorem:independence_discrete_pmf}
设$X,Y$为两个离散型随机变量，$p_X,p_Y$为各自的分布列，
则以下三个命题等价：

1. $X,Y$相互独立。

2. $(X,Y)$的联合分布列$p_{X,Y}$满足

   ```math {@eq:independence_discrete_pmf_1}
   p_{X,Y}(x,y)=p_{X}(x)\cdot p_{Y}(y),\qquad\forall (x,y)\in\mathbb{R}^2.
   ```

3. 存在函数$g,h:\mathbb{R}\rightarrow\mathbb{R}$使得

   ```math {@eq:independence_discrete_pmf_2}
   p_{X,Y}(x,y)
   =g(x)\cdot h(y),\qquad\forall (x,y)\in\mathbb{R}^2.
   ```

:::

::: proof
- 命题1 $\Rightarrow$ 命题2：设$X,Y$相互独立。
  则对任意$(x,y)\in\mathbb{R}^2$，
  令$I=[x,x]=\{x\},J=[y,y]=\{y\}$，由独立性定义即得到
  \[
  \begin{aligned}
  p_{X,Y}(x,y)
  & =\mathbb{P}(X\in I,Y\in J) \\
  & =\mathbb{P}(X\in I)\cdot\mathbb{P}(Y\in J) = p_{X}(x)\cdot p_{Y}(y).
  \end{aligned}
  \]
  故式 @eq:independence_discrete_pmf_1 成立。

- 命题2 $\Rightarrow$ 命题1：
  设式 @eq:independence_discrete_pmf_1 成立。
  任取区间$I,J\subseteq\mathbb{R}$，则
  \[
  \begin{aligned}
  \mathbb{P}(X\in I,Y\in J)
  &= \sum_{(x,y)\in I\times J} p_{X,Y}(x,y) \\
  &= \sum_{(x,y)\in I\times J} p_X(x)\cdot p_Y(y) \\
  &= \sum_{x\in I}\sum_{y\in J} p_X(x)\cdot p_Y(y) \\
  &=\sum_{x\in I} p_X(x)\sum_{y\in J}p_Y(y) \\
  &= \mathbb{P}(X\in I)\cdot\mathbb{P}(Y\in J).
  \end{aligned}
  \]
  由区间$I,J$的任意性，可得$X,Y$相互独立。

- 命题2 $\Rightarrow$ 命题3：显然。

- 命题3 $\Rightarrow$ 命题2：
  设式 @eq:independence_discrete_pmf_2 成立。
  两边对$y$求和，并由边缘分布列与联合分布列的关系，可得
  \[
  p_{X}(x) = g(x)\sum_{y}h(y),
  \]
  两边再对$x$求和并利用$\sum_{x}p_{X}(x)=1$可得
  \[
  1=\sum_{x}g(x)\sum_{y}h(y).
  \]
  类似地有
  \[
  p_{Y}(y) = h(y)\sum_{x}g(x),
  \]
  故对任意$(x,y)\in\mathbb{R}^2$，有
  \[
  \begin{aligned}
  p_{X}(x)\cdot p_{Y}(y)
  & =g(x)\, h(y)
  \sum_{x}g(x)\sum_{y}h(y) \\
  & =g(x)\, h(y)
  =p_{X,Y}(x,y).
  \end{aligned}
  \]
  因此式 @eq:independence_discrete_pmf_1 成立。

:::

::: example [独立离散型随机变量的和] {@example:sum_independent_rv_discrete}
设$X,Y$为相互独立的离散型随机变量，我们考察$Z=X+Y$的分布。
由 @example:function_of_discrete_rv_vec 的结果可知，
$Z$是离散型随机变量，其分布列为
\[
\begin{aligned}
p_Z(z) = \sum_{(x,y)\,:\, x+y=z} p_{X,Y}(x,y)
= \sum_{x} p_{X,Y}(x,z-x)
\end{aligned}
\]
（该式对于$X,Y$不独立的情形也是成立的）。接下来，
利用$X,Y$的独立性与 @theorem:independence_discrete_pmf
即可得到
\[
p_Z(z) = \sum_x p_X(x)\,p_Y(z-x).
\]
同理有
\[
p_Z(z) = \sum_y p_X(z-y)\,p_Y(y).
\]
以上两个计算$p_Z(z)$的公式又被称为**卷积公式**（convolution formula）。
:::

以下定理指出，相互独立的离散型随机变量在经过函数变换后依然保持独立性。

::: theorem {@theorem:functions_of_independent_rv_discrete}
设$n+m$个离散型随机变量$X_1,\ldots,X_n,Y_1,\ldots,Y_m$相互独立，
$f:\mathbb{R}^n\rightarrow\mathbb{R}$与
$g:\mathbb{R}^m\rightarrow\mathbb{R}$为任意函数。
则随机变量$f(X_1,\ldots,X_n)$与$g(Y_1,\ldots,Y_m)$相互独立。
:::

::: proof
为符号上的简洁，我们以$n=2,m=1$的情形为特例给出证明，
但不难将该证明推广到一般情况。

令$U=f(X_1,X_2)$，$V=g(Y_1)$，则$(U,V)$的联合分布列为
\[
\begin{aligned}
p_{U,V}(u,v) ={} &
\mathbb{P}(U=u,V=v) \\
={} &
\sum_{\substack{(x_1,x_2,y_1)\,: \\
f(x_1,x_2)=u,\,
g(y_1)=v}} \mathbb{P}(X_1=x_1,X_2=x_2,Y_1=y_1) \\
={} &
\sum_{\substack{(x_1,x_2)\,: \\
f(x_1,x_2)=u}}
\sum_{y_1\,:\,
g(y_1)=v}
\mathbb{P}(X_1=x_1)\cdot\mathbb{P}(X_2=x_2)\cdot\mathbb{P}(Y_1=y_1) \\
={} &
\sum_{\substack{(x_1,x_2)\,: \\
f(x_1,x_2)=u}} \mathbb{P}(X_1=x_1)\,\mathbb{P}(X_2=x_2)
\cdot
\sum_{y_1\,:\,
g(y_1)=v} \mathbb{P}(Y_1=y_1).
\end{aligned}
\]
令
\[
\begin{aligned}
h_1(u) = \sum_{\substack{(x_1,x_2)\,: \\
f(x_1,x_2)=u}} \mathbb{P}(X_1=x_1)\,\mathbb{P}(X_2=x_2),
\qquad
h_2(v) = \sum_{y_1\,:\,
g(y_1)=v} \mathbb{P}(Y_1=y_1),
\end{aligned}
\]
则有$p_{U,V}(u,v)=h_1(u)\cdot h_2(v)$，
故由 @theorem:independence_discrete_pmf 得$U,V$相互独立。
:::

实际上，@theorem:functions_of_independent_rv_discrete
在$X_1,\ldots,X_n,Y_1,\ldots,Y_m$为一般随机变量
（也就是不全为离散型随机变量）的时候也是成立的，其证明超出本课程的范围，
但直观上可以这样理解：由于$X_1,\ldots,X_n,Y_1,\ldots,Y_m$相互独立，
故$X_1,\ldots,X_n$取值的统计规律不会受到$Y_1,\ldots,Y_m$取值的影响，
而这意味着$f(X_1,\ldots,X_n)$取值的统计规律不会受到$g(Y_1,\ldots,Y_m)$取值的影响，
从而
\[
\mathbb{P}\!\left(f(X_1,\ldots,X_n)\in I_1 \mkern2mu|\mkern2mu g(Y_1,\ldots,Y_m)\in I_2\right)
=\mathbb{P}(f(X_1,\ldots,X_n)\in I_1)
\]
对任意$\mathbb{R}$中的区间$I_1,I_2$均成立（只要条件概率存在）。
接下来由条件概率与独立性的定义即可看出
$f(X_1,\ldots,X_n)$与$g(Y_1,\ldots,Y_m)$相互独立。

最后，我们给出一列（可数无限个）随机变量的独立性的定义。

::: definition
设$X_1,X_2,X_3,\ldots$为一列随机变量。
我们称这列随机变量**相互独立**，若任取大于等于$2$的正整数$n$，
均有$X_1,\ldots,X_n$相互独立。
:::
