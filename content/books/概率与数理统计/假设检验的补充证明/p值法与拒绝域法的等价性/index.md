---
title: $p$值法与拒绝域法的等价性
---

首先对假设检验的$p$值法与拒绝域法进行简要回顾。
令$\theta$为未知参数，并考虑如下假设检验问题：

```math {@eq:testing_formulation_appendix}
H_0:\theta\in\Theta_0,\qquad H_1:\theta\in\Theta_1.
```

设$T=\phi(X_1,\ldots,X_n)$为该问题的检验统计量，它满足如下条件：

::: definition (条件) {@condition:hypothesis_testing_H0_identical_distribution}
$T$在原假设$H_0$下的分布是与$\theta\in\Theta_0$的具体取值无关的。
换句话说，对任意$\theta\in\Theta_0$，$T$均服从同一个分布。
:::

令$t=\phi(x_1,\ldots,x_n)$为$T$在代入样本观测值$x_1,\ldots,x_n$
后的取值。则相应的$p$值为

- 单侧检验：$\hat{p}(x_1,\ldots,x_n)=
\mathbb{P}_{H_0}(T\geq t)$；

- 双侧检验：$\hat{p}(x_1,\ldots,x_n)=
2\min\{\mathbb{P}_{H_0}(T\geq t),\mathbb{P}_{H_0}(T\leq t)\}$。

而给定显著性水平$\alpha\in\left]0,1\right[$后，相应的拒绝域
$C_\alpha$为

- 单侧检验：$C_\alpha=\left]c_\alpha,+\infty\right[$，其中

  ```math {@eq:critical_value_one_sided_appendix}
  c_\alpha = \max\left\{c\in\mathbb{R} \mid
  \mathbb{P}_{H_0}(T\geq c)\geq\alpha\right\};
  ```

- 双侧检验：$C_\alpha=\ ]{-\infty},c_\alpha^l[\ \cup\ ]c_\alpha^u,+\infty[$，其中

  ```math {@eq:critical_value_two_sided_appendix}
  \begin{aligned}
  c^u_{\alpha} ={} & \max\left\{
  c\in\mathbb{R} \Bigm\vert
  \mathbb{P}_{H_0}(T\geq c)\geq\frac{\alpha}{2}
  \right\}, \\
  c^l_{\alpha} ={} & \min\left\{
  c\in\mathbb{R} \Bigm\vert
  \mathbb{P}_{H_0}(T\leq c)\geq\frac{\alpha}{2}
  \right\}.
  \end{aligned}
  ```

为使得临界值的表达式 @eq:critical_value_one_sided_appendix
与 @eq:critical_value_two_sided_appendix 有意义，
须要求形如
$\{c\in\mathbb{R}\mid \mathbb{P}_{H_0}(T\geq c)\geq\alpha\}$
的集合非空且有有限的最大值，而这可由如下引理保证：

::: lemma {@lemma:hypothesis_testing_critical_value_well_defined}
设$Y$为任一随机变量，则任取$\alpha\in\left]0,1\right[$，
均存在$y_\alpha\in\mathbb{R}$，使得
\[
\left\{y\in\mathbb{R} \mid \mathbb{P}(Y\geq y)\geq\alpha\right\}
=\left]-\infty,y_\alpha\right].
\]
:::

::: proof
注意到$\mathbb{P}(Y\geq y)$可看成$-Y$的分布函数在$-y$处的取值，
故由分布函数的基本性质，可得 (i) $\mathbb{P}(Y\geq y)$关于
$y$单调递减；(ii) $y\rightarrow+\infty$时
$\mathbb{P}(Y\geq y)\rightarrow 0$，
而$y\rightarrow-\infty$时$\mathbb{P}(Y\geq y)\rightarrow 1$；
(iii) $\mathbb{P}(Y\geq y)$关于$y$左连续。

接下来，记
\[
S_\alpha = \left\{y\in\mathbb{R} \mid
\mathbb{P}(Y\geq y)\geq\alpha\right\}.
\]
由于$\alpha<1$且$y\rightarrow-\infty$时
$\mathbb{P}(Y\geq y)\rightarrow 1$，故集合$S_\alpha$非空。再令
\[
y_\alpha = \sup S_\alpha
=\sup \left\{y\in\mathbb{R} \mid \mathbb{P}(Y\geq y)\geq\alpha\right\}.
\]
则由$\alpha>0$以及$y\rightarrow+\infty$时
$\mathbb{P}(Y\geq y)\rightarrow 0$，可得$y_\alpha<+\infty$。
而由上确界的定义，可知对任意$s<y_\alpha$，均存在$s'>s$使得
$s'\in S_\alpha$，从而
\[
\mathbb{P}(Y\geq s)\geq \mathbb{P}(Y\geq s')
\geq\alpha,
\]
其中第一个不等号来自$\mathbb{P}(Y\geq s)$关于$s$的单调性，
而第二个不等号则是因为$s'\in S_\alpha$。上式意味着$s<y_\alpha$时
必定有$s\in S_\alpha$，从而$S_\alpha$只可能取
$\left]-\infty,y_\alpha\right]$或
$\left]-\infty,y_\alpha\right[$的形式。最后，由
\[
\mathbb{P}(Y\geq s)\geq\alpha,\qquad\forall s<y_\alpha,
\]
令$s$从左侧趋向$y_\alpha$并利用$\mathbb{P}(Y\geq y)$关于$y$的
左连续性，可得
\[
\mathbb{P}(Y\geq y_\alpha)\geq\alpha,
\]
即$y_\alpha\in S_\alpha$，故$S_\alpha=
\left]-\infty,y_\alpha\right]$，引理得证。
:::

接下来我们将证明$p$值法与拒绝域法是等价的。

::: theorem
设$T$为假设检验问题 @eq:testing_formulation_appendix
的检验统计量，且@condition:hypothesis_testing_H0_identical_distribution
成立。则对任意样本观测值$x_1,\ldots,x_n$与显著性水平
$\alpha\in\left]0,1\right[$，均有
\[
\hat{p}(x_1,\ldots,x_n)<\alpha\quad\Longleftrightarrow\quad
\phi(x_1,\ldots,x_n)\in C_\alpha.
\]
:::

::: proof
首先考虑单侧检验的情形，我们分别证明等价性的两个方向。

- “$\Longleftarrow$”方向：
  设$\phi(x_1,\ldots,x_n)\in C_\alpha$，也即
  \[
  \phi(x_1,\ldots,x_n)>c_\alpha = \max\left\{c\in\mathbb{R} \mid
  \mathbb{P}_{H_0}(T\geq c)\geq\alpha\right\}.
  \]
  上式意味着$\phi(x_1,\ldots,x_n)\notin \{c\in\mathbb{R} \mid
  \mathbb{P}_{H_0}(T\geq c)\geq\alpha\}$，从而
  \[
  \mathbb{P}_{H_0}(T\geq\phi(x_1,\ldots,x_n))<\alpha,
  \]
  也即$\hat{p}(x_1,\ldots,x_n)<\alpha$。

- “$\Longrightarrow$”方向：设
  $\hat{p}(x_1,\ldots,x_n)<\alpha$，也就是说
  \[
  \mathbb{P}_{H_0}(T\geq\phi(x_1,\ldots,x_n))<\alpha.
  \]
  该不等式意味着
  \[
  \phi(x_1,\ldots,x_n)\notin
  \left\{c\in\mathbb{R} \mid \mathbb{P}_{H_0}(T\geq c)\geq\alpha\right\}.
  \]
  而由 @lemma:hypothesis_testing_critical_value_well_defined
  可得$\{c\in\mathbb{R} \mid \mathbb{P}_{H_0}(T\geq c)\geq\alpha\}
  =\left]-\infty,c_\alpha\right]$，故由上式可得
  \[
  \phi(x_1,\ldots,x_n)>c_\alpha.
  \]

由此我们建立了@condition:hypothesis_testing_H0_identical_distribution
下单侧检验$p$值法与拒绝域法的等价性。

接下来考虑双侧检验。此时由$p$值的定义可得
\[
\begin{aligned}
& \hat{p}(x_1,\ldots,x_n) = 2\min\left\{
\mathbb{P}_{H_0}(T\geq t),\mathbb{P}_{H_0}(T\leq t)
\right\} < \alpha \\
\Longleftrightarrow\quad &
\mathbb{P}_{H_0}(T\geq t)<\frac{\alpha}{2}\ \text{或}\
\mathbb{P}_{H_0}(T\leq t)<\frac{\alpha}{2}.
\end{aligned}
\]
而仿照单侧检验的证明过程，不难得到
\[
\mathbb{P}_{H_0}(T\geq t)<\frac{\alpha}{2}
\quad \Longleftrightarrow\quad
\phi(x_1,\ldots,x_n) > \max\left\{
c\in\mathbb{R} \Bigm\vert
\mathbb{P}_{H_0}(T\geq c)\geq\frac{\alpha}{2}
\right\} = c_\alpha^u
\]
以及
\[
\mathbb{P}_{H_0}(T\leq t)<\frac{\alpha}{2}
\quad \Longleftrightarrow\quad
\phi(x_1,\ldots,x_n) < \min\left\{
c\in\mathbb{R} \Bigm\vert
\mathbb{P}_{H_0}(T\leq c)\geq\frac{\alpha}{2}
\right\} = c_\alpha^l.
\]
综上可得
\[
\hat{p}(x_1,\ldots,x_n)<\alpha\qquad\Longleftrightarrow\qquad
\phi(x_1,\ldots,x_n)>c_\alpha^u\ \text{或}\
\phi(x_1,\ldots,x_n)<c_\alpha^l,
\]
从而对于双侧检验，在@condition:hypothesis_testing_H0_identical_distribution
下$p$值法与拒绝域法也是等价的。
:::
