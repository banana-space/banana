---
title: 射流
categories: [微分几何]
notices:
  - name: 问题
    items:
      - “性质”一节最后一个命题中，投影 $J^r(Y)\to Y$ 也记作 $\pi_r$，与同一命题中的 $\pi_r\colon J^r(Y)\to X$ 记号冲突；并且对 $r \geq 2$，该投影似乎不是仿射丛，仿射丛结构似乎应是 $\pi_{r,r-1}\colon J^r(Y)\to J^{r-1}(Y)$。
---

**射流**是[[微分几何]]中的概念，
直观地说，
流形上函数在一点处的第 $r$ 射流
就是在此函数的前 $r$ 次 [[Taylor 展开]]。
这个概念也可以推广到“扭曲”的函数上，
即[[浸没]]的局部截面。

许多微分几何的性质，
例如浸入、浸没等都可以使用射流的语言表述。

## 定义

作为直观，我们先定义函数的射流。

::: definition [函数的射流]
设 $X$ 是[[光滑流形]]，$x \in X$ 是其中一点，
固定自然数 $r$，
定义 $X$ 上的所有光滑函数 $C^\infty(X)$
上的[[等价关系]]为：
两个函数等价当且仅当它们在 $x$ 处的所有前 $r$ 阶[[偏导数]]相等，
则光滑函数 $f$ 在 $x$ 处的
$r$ 阶**射流**为在此关系下的[[等价类]]，记作 $j_x^r f$。
在 $x$ 点处所有射流构成的集合称为**射流空间**。
:::

我们也可以谈论所谓“扭曲的函数”，即[[纤维丛]]
（更一般地，[[浸没]]）的局部截面的射流。
首先我们回顾如下事实：

::: proposition
设 $\pi\colon Y\to X$ 是[[浸没]]
（如[[纤维丛]]、[[向量丛]]），
取 $y \in Y$，$x = \pi(y) \in X$，
则存在 $y$、$x$ 附近的局部坐标 $(x^\mu,y^a)$、$(x^\mu)$，
使得 $\pi$ 的局部表达式为
$\pi\colon (x^\mu,y^a)\to x^\mu$。
由此 $\pi$ 的一个局部截面可写为
$\alpha\colon x^\mu\mapsto y^a(x^\mu)$。
:::

::: definition [局部截面的射流]
对[[浸没]] $Y \to X$，
固定自然数 $r$，
定义 $x$ 附近局部截面的[[等价关系]]为：
两个局部截面等价当且仅当它们在取定局部坐标后相应的函数在
$x$ 处的前 $r$ 阶偏导数等价。
则局部截面 $\alpha$ 的 $r$ 阶射流为它在此等价关系下的[[等价类]]。
所有射流构成的集合称为**射流空间**。

可以证明，此等价关系与局部坐标的选取无关。
:::

取 $Y = X \times \mathbb{R}$ 即得到一开始定义的函数情形。

正如[[切丛]]将所有点的[[切空间]]组合在一起成为一个大的流形，
也可以将所有点的射流组合在一起，称为射流形。

::: definition [射流形]
对[[浸没]] $Y \to X$，$r$ 阶**射流形**
（也称**射流丛**）$J^r(Y)$ 为集合
\[
\{ (x, f) \mid x \in X, f\ 是\ x\ 处
\ r\ 阶射流 \}.
\]
$J^r(Y)$ 可赋予流形结构，
其局部坐标由直到第 $r$ 阶导数的信息给出。
即
\[
j_x^r\alpha\mapsto (x^\mu,y^a(x^\mu),
\partial^\nu y^a(x^\mu))_{|\nu|\leq r}.
\]
:::

由此，任何局部截面 $X \to Y$ 自然给出了局部截面 $X \to J^r(Y)$。

还可以发现，如果 $Y \to X$ 是[[向量丛]]，
$J^r(Y) \to X$ 也可以赋予一个向量丛结构。

## 性质

对于函数（更一般地，向量丛），
射流可以用代数的语言来描述。具体地说有如下两个命题：

::: proposition
对光滑流形 $X$，记它上面所有光滑函数构成的空间为 $C^\infty(X)$；
所有在 $x$ 点处取值为 $0$ 的函数构成的空间为 $\mathfrak{m}_x$
（它是[[环]] $C^\infty(X)$ 的[[极大理想]]），
则对于函数，在点 $x$ 处的 $r$ 阶射流空间同构于
$C^\infty(X)/\mathfrak{m}_x^{r+1}$。
:::

::: proposition
对光滑流形 $X$ 上的向量丛 $E \to X$，
记它的所有截面构成的空间为 $\mathcal{E}$
（它是环 $C^\infty(X)$ 上的模），
则对于此丛，$r$ 次射流空间为
$\mathcal{E}/\mathfrak{m}_x^{r+1}\mathcal{E}$。
:::

不同阶的射流空间（以及射流形）间有自然的投影映射：

::: proposition
设 $Y \to X$ 是[[浸没]]，
存在投影映射 $\pi_r\colon J^r(Y)\to X$
与
$\pi_{r,s}\colon J^r(Y)\to J^s(Y),$
$j_x^r\alpha\mapsto j_x^s\alpha$，
满足交换图
$$
\begin{tikzcd}[column sep=small]
  \cdots\ar[r]&J^r(Y)\ar[r,"{\pi_{r,r-1}}"]
  \ar[d,"\pi_{r}"]
  &J^{r-1}(Y)\ar[r]
  \ar[d,"\pi_{r-1}"]
  &\cdots\ar[r]&J^1(Y)\ar[d,"\pi_1"]
  \ar[r,"{\pi_{1,0}}"]
  &Y\ar[d,"\pi"]\\
  \cdots\ar[r]&X\ar[r,"\mathrm{id}"']
  &X\ar[r,"\mathrm{id}"']
  &\cdots\ar[r]&X\ar[r,"\mathrm{id}"']&X.
\end{tikzcd}
$$

此时投影 $\pi_r\colon J^r(Y)\to Y$（$r \geq 1$）
是[[仿射丛]]，从而 $J^r(Y) \to X$ 也是浸没。
:::

## 例子

- 对浸没 $Y \to X$，
  $x$ 点处的零阶射流空间为此点的逆像，
  零阶射流形即为 $Y$。

- 对于函数，一阶射流形满足[[向量丛]]间的[[正合列]]：
  \[
  0 \to \mathrm{T}^*X \to J^1(X) \to \mathbb{R} \to 0.
  \]
  其中 $\mathrm{T}^*(X)$ 是[[余切丛]]，
  $\mathbb{R}$ 是取值为 $\mathbb{R}$ 的平凡丛。
  对于一般的向量丛 $E \to X$，则有正合列
  \[
  0 \to E \otimes \mathrm{T}^*X
  \to J^1(E) \to E \to 0.
  \]

- 对平凡丛 $Y = X \times F \to X$，
  其一阶射流丛为 $Y$ 上的向量丛
  $\mathrm{T}^*X \boxtimes \mathrm{T}F$。

```terms
射流:
  en: jet
  fr: jet :m
射流形:
  en: jet manifold
  fr: variété des jets
射流丛:
  en: jet bundle
  fr: fibré des jets
```
