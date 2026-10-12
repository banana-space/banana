---
title: 随机映射范畴
categories: [概率论]
navboxes: [概率论]
---

在[[概率论]]中，
**随机映射范畴** $\mathsf{Stoch}$ 是以[[可测空间]]为对象、
以 [[Markov 核]]为态射的[[范畴]]。
它也可以理解为描述随机[[信道]]的范畴。

## 定义

::: definition [随机映射] {@def-stochastic-map}
设 $(X,\Sigma_X)$ 和 $(Y,\Sigma_Y)$ 是[[可测空间]]。
从 $X$ 到 $Y$ 的**随机映射**是一个 [[Markov 核]]
\[
K\colon X\times\Sigma_Y\to[0,1],
\qquad
(x,B)\mapsto K(B\mid x),
\]
满足：

- 对每个 $x\in X$，映射 $B\mapsto K(B\mid x)$
  是 $(Y,\Sigma_Y)$ 上的[[概率测度]]。
- 对每个 $B\in\Sigma_Y$，映射 $x\mapsto K(B\mid x)$
  是[[可测函数]]。

$K(B\mid x)$ 表示给定输入 $x$ 时，
输出落在可测集 $B$ 中的概率。
随机映射也称为**随机信道**，通常记为 $K\colon X\to Y$。
:::

::: definition [随机映射范畴] {@def-stoch-category}
**随机映射范畴** $\mathsf{Stoch}$ 的对象是可测空间，
态射是随机映射。

对于态射
\[
K\colon X\to Y,\qquad L\colon Y\to Z,
\]
其复合定义为
\[
(L\circ K)(C\mid x)
=
\int_Y L(C\mid y)\,K(dy\mid x),
\qquad C\in\Sigma_Z.
\]
对象 $X$ 的恒等态射是
\[
\operatorname{id}_X(B\mid x)=\delta_x(B),
\]
其中 $\delta_x$ 是集中在 $x$ 处的 [[Dirac 测度]]。
:::

## 有限情形

::: definition [有限随机映射范畴]
$\mathsf{Stoch}$ 中由有限集合及其离散 $\sigma$-代数组成的[[全子范畴]]，
称为**有限随机映射范畴**，记为 $\mathsf{FinStoch}$。
:::

在有限情形下，态射 $K\colon X\to Y$
可以用[[随机矩阵]]表示。
记
\[
K(y\mid x)=K(\{y\}\mid x),
\]
则
\[
K(y\mid x)\ge0,
\qquad
\sum_{y\in Y}K(y\mid x)=1.
\]
若将输入 $x$ 编为列、输出 $y$ 编为行，
则矩阵的每一列之和为 $1$。

复合公式化为
\[
(L\circ K)(z\mid x)
=
\sum_{y\in Y}L(z\mid y)K(y\mid x),
\]
即通常的矩阵乘法。

## 幺半结构

### 对象与态射的张量积

对象的张量积定义为可测空间的乘积：
\[
(X,\Sigma_X)\otimes(Y,\Sigma_Y)
=
(X\times Y,\Sigma_X\otimes\Sigma_Y).
\]
这里 $\Sigma_X\otimes\Sigma_Y$
是由所有可测矩形生成的乘积 $\sigma$-代数。

对于信道
\[
K\colon X\to Y,\qquad L\colon X'\to Y',
\]
其张量积是信道
\[
K\otimes L\colon X\times X'\to Y\times Y',
\]
由
\[
(K\otimes L)(B\times B'\mid x,x')
=
K(B\mid x)L(B'\mid x')
\]
确定。
也就是说，对于每个固定输入 $(x,x')$，
输出分布是概率测度 $K(-\mid x)$ 与 $L(-\mid x')$ 的乘积测度。

在有限情形下，这个公式写成
\[
(K\otimes L)(y,y'\mid x,x')
=
K(y\mid x)L(y'\mid x'),
\]
对应随机矩阵的 [[Kronecker 积]]。

### 单位、结合子与对称结构

幺半单位对象是带有唯一可测结构的[[单点集]]
\[
\mathbb{1}=\{*\}.
\]
通常的可测双射
\[
((x,y),z)\mapsto(x,(y,z)),
\]
\[
(*,x)\mapsto x,
\qquad
(x,*)\mapsto x
\]
分别给出结合子、左单位子和右单位子。
交换映射
\[
(x,y)\mapsto(y,x)
\]
给出对称结构。

::: proposition
上述张量积与单位对象使 $\mathsf{Stoch}$ 成为[[对称幺半范畴]]。
$\mathsf{FinStoch}$ 是它的对称幺半子范畴。
:::

## 复制、丢弃与相关性

每个对象 $X$ 都有确定性的**复制信道**
\[
\operatorname{copy}_X\colon X\to X\times X,
\qquad x\mapsto(x,x),
\]
以及**丢弃信道**
\[
\operatorname{discard}_X\colon X\to\mathbb{1}.
\]
后者是从 $X$ 到 $\mathbb{1}$ 的唯一态射，
所以幺半单位对象也是[[终对象]]。

复制与丢弃使每个对象具有相容的交换[[余代数]]结构，
而每个信道都与丢弃相容。
这些结构使 $\mathsf{Stoch}$ 成为[[Markov 范畴]]的基本例子。

## 性质

::: definition [凸充实范畴]
**凸充实范畴**是一个[[充实范畴|充实]]于[[凸空间范畴]]的充实范畴 $\mathcal C$，
其中每个态射集 $\operatorname{Hom}_{\mathcal C}(X,Y)$
都带有[[凸空间]]结构，
并且态射复合分别对每个变量保持凸组合。

具体来说，对任意实数 $0 \leq t \leq 1$，
以及具有相应定义域与陪域的态射，有
\[
h \circ \bigl(tf+(1-t)g\bigr)
=
t(h \circ f)+(1-t)(h \circ g),
\]
以及
\[
\bigl(tf+(1-t)g\bigr)\circ k
=
t(f \circ k)+(1-t)(g \circ k).
\]
:::

::: proposition
随机映射的逐点凸组合使 $\mathsf{Stoch}$
成为[[凸充实范畴|凸充实对称幺半范畴]]。
:::

```terms
随机映射范畴:
  en: category of stochastic maps
有限随机映射范畴:
  en: category of finite stochastic maps
```
