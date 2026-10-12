---
title: 凸空间范畴
categories: [凸分析]
---

在[[凸分析]]中，**凸空间范畴**
是以[[凸空间]]为对象、以保持[[凸组合]]的映射为态射的范畴，
记为 $\mathsf{Conv}$。

凸空间范畴具有自然的[[张量积]]，
这个张量积使 $\mathsf{Conv}$ 成为[[对称幺半闭范畴]]。

## 定义

::: definition [仿射映射]
设 $A,B$ 是[[凸空间]]。
映射 $f \colon A \to B$ 称为**仿射映射**，
如果它保持有限凸组合：
\[
f\left(\sum_{i=1}^n p_i a_i\right)
=
\sum_{i=1}^n p_i f(a_i),
\]
其中 $a_i \in A$，$p_i \geq 0$，
且 $\sum_{i=1}^n p_i=1$。

等价地，对任意 $a,a' \in A$ 及 $0 \leq t \leq 1$，有
\[
f\bigl(ta+(1-t)a'\bigr)
=
tf(a)+(1-t)f(a').
\]
:::

::: definition [凸空间范畴]
所有凸空间及其间的仿射映射构成的[[范畴]]，
称为**凸空间范畴**，记为 $\mathsf{Conv}$。
其态射复合与恒等态射由映射的通常复合与恒等映射给出。
:::

空集是 $\mathsf{Conv}$ 的[[始对象]]，
单点集 $1$ 是其[[终对象]]。

## 性质

### 态射空间的凸结构

::: proposition
对于任意凸空间 $A,B$，
态射集 $\operatorname{Hom}_{\mathsf{Conv}}(A,B)$
在逐点凸组合下自然成为凸空间：
\[
\left(\sum_{i=1}^n p_i f_i\right)(a)
=
\sum_{i=1}^n p_i f_i(a).
\]
态射复合分别对每个变量保持凸组合。
:::

因此，如果将凸空间范畴看成[[充实范畴]]，那么它是自充实的。

### 范畴乘积

::: proposition
凸空间 $A,B$ 的[[积 (范畴论)|范畴乘积]]
由集合乘积 $A\times B$ 配备逐分量凸组合给出：
\[
\sum_i p_i(a_i,b_i)
=
\left(\sum_i p_i a_i,\sum_i p_i b_i\right).
\]
:::

::: proof
两个投影映射都是仿射映射。
对于仿射映射 $f\colon C\to A$ 与 $g\colon C\to B$，
唯一的配对映射
\[
(f,g)\colon C\to A\times B
\]
也逐分量保持凸组合，
因而满足乘积的万有性质。
:::

### 张量积

类似定义[[向量空间]]上的张量积前要定义[[双线性映射]]，这里先定义：

::: definition [分别仿射映射]
设 $A,B,C$ 是凸空间。
映射 $b\colon A\times B\to C$
称为**分别仿射映射**，
如果固定任意一个变量后，
它对另一个变量是仿射映射。
:::

凸空间上的张量积满足类似向量空间张量积的[[泛性质]]：

::: definition [凸空间的张量积]
凸空间 $A,B$ 的**张量积**
是凸空间 $A\otimes B$，
带有分别仿射映射
\[
\otimes\colon A\times B\to A\otimes B,
\]
满足如下[[泛性质]]：

对于任意凸空间 $C$ 及分别仿射映射
$b\colon A\times B\to C$，
存在唯一仿射映射
\[
\underline{b}\colon A\otimes B\to C
\]
使得
\[
b = \underline{b} \circ \otimes
\]
:::

::: proposition
张量积使 $\mathsf{Conv}$ 成为[[对称幺半范畴]]，
其单位对象是单点集 $\{*\}$。
:::

::: example [区间的张量积]
区间 $[0,1]$ 是两个元素上的自由凸空间，
所以
\[
[0,1]\otimes[0,1]\simeq\Delta^3.
\]
它是四个顶点构成的三维单纯形，
而范畴乘积 $[0,1]\times[0,1]$ 是正方形。
:::

::: proposition
对于任意凸空间 $A,B,C$，存在自然同构
\[
\operatorname{Hom}_{\mathsf{Conv}}(A\otimes B,C)
\simeq
\operatorname{Hom}_{\mathsf{Conv}}(A,\operatorname{Hom}_{\mathsf{Conv}}(B,C)).
\]
因此，$(\mathsf{Conv},\otimes,1)$ 是[[对称幺半闭范畴]]。
:::
