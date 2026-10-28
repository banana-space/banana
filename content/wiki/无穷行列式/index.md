---
title: 无穷行列式
categories: [线性代数]
---

<problems>
- “性质”一节中引理与定理“Poincaré”缺少证明。
- “性质”一节引理“Poincaré”中的两个不等号方向似乎应为 $\leq$（例如 $a_{12}=a_{21}=1$、其余 $a_{kl}=0$ 时，$D_2=0$ 而 $P_2=4$）。
- “定义”一节中无穷矩阵 $B$ 似乎应写作 $B=\left(b_{mn}\right)$。
- “应用与推广”一节中 Hill 方程、在天体物理中的应用、在积分方程中的应用、泛函行列式各例需要补充内容。
</problems>

## 历史

[[无限维矩阵]]的研究始于1884年。
Poincaré 在两篇不严谨地使用了无限维矩阵和行列式理论的文章后
开始了对这一方面的专门研究。
1906年，Hilbert引入无限二次型（相当于无限维矩阵）
以研究[[积分方程]]，并极大地促进了无限维矩阵的研究。
在此基础上，随着[[算子理论]]的发展，
无限维矩阵也成为了研究函数空间算子的有力工具。

相关的**无穷行列式**概念的产生，
也源于对无穷元无穷线性方程组的研究。
在研究月球轨道近日点之运动的问题时，
首次产生了考察此种方程组和此种行列式的需求。
此项研究是 G. Hill 于1886年引入的，
H. Poincaré 给出了 Hill 方法的严格数学根据。
无穷行列式还有一个在 E. Fredholm（1903）研究线性积分方程的工作中的应用。

## 定义

设$\{b_{mn}\}$是二重实数序列。
用$D_m=\mathrm{Det}\left(B_m\right)$表示方阵
$B_m=\left(b_{kl}\right)$的行列式，
其中脚标$k$和$l$跑遍从$1$到$m$的值。
在此矩阵中，数$b_{kl}$位于第$k$行和第$l$列相交之处，
此矩阵的主对角线由数$b_{kk}$组成，$k=1,\cdots,m$。
我们用$B$代表无穷矩阵$B_m=\left(b_{kl}\right)$，
其中$m,n=1,2,\cdots$。

::: definition [无穷行列式]
若行列式序列$\{D_{m}\}$当$m\rightarrow +\infty$时收敛到数$D$，
则说矩阵$B$的无穷行列式$D=\mathrm{Det}\left(B\right)$收敛到数$D$，
或说它等于$D$。若数列$\{D_{m}\}$发散，则说此行列式发散。
:::

称行列式$D_m$为无穷行列式的部分行列式。
我们引入一些新的记号：
对于矩阵$B$的对角线元素，
置$a_{nn}=b_{nn}-1$。
而若$m\neq n$，则置$a_{mn}=b_{mn}$。

::: definition [无穷行列式的Poincaré优控]
在一切级数$\sum_{n=1}^{\infty}\left|a_{mn}\right|$都收敛且乘积
\[
P=\prod_{m=1}^{\infty}\left(1+\sum_{n=1}^{\infty}
\left|a_{mn}\right|\right)
\]
也收敛的前提下，称无穷乘积$P$为无穷行列式$D$的**Poincaré优控**。
:::

::: definition [部分行列式的Poincaré优控]
有限乘积
\[
P_m=\prod_{k=1}^{m}\left(1+\sum_{l=1}^{m}
\left|a_{kl}\right|\right)
\]
称为行列式$D_m$的**Poincaré优控**。
:::

## 性质

以下是一些关于行列式收敛性的结论：

::: lemma [Poincaré]
对于一切$m\in\mathbb{N}$成立如下估计：

$1)\ \left|D_m\right|\geq P_m$；

$2)\ \left|D_{m+1}-D_m\right|\geq P_{m+1}-P_m$。
:::

::: theorem [Poincaré]
无穷行列式收敛，如果它的对角线元的无穷乘积绝对收敛，
且由非对角线元组成的二重级数绝对收敛。
:::

::: remark
如果无穷行列式中的元素$a_{mn}$是复变量$z$的函数，
则当其Poincaré优控$P$一致收敛时，无穷行列式也一致收敛。
:::

::: remark [双边无穷行列式]
类似的定理对于形如$B=\left(b_{mn}\right),-\infty<m,n<+\infty$
的矩阵$B$的无穷行列式$D$成立。
这里部分行列式$D_m$和部分矩阵$B_m$的形状是
\[
D_m=\mathrm{Det}(B_m),B_m=(b_{kl}),-m<k,l<m.
\]
:::

## 应用与推广

::: definition [Poincaré优控的推广]
设$\left\{ A_n\left( x \right) \right\}$是一个函数列，
而$\left\{ B_n \right\}$是一个数列。设：
1)当$n\rightarrow\infty$时，$B_n\rightarrow B$；
2)对于一切$n\in\mathbb{N}$和每个$x\in D$，
都成立不等式
\[
\left| A_{n+1}\left( x \right)-A_n
\left( x \right) \right|\leq B_{n+1}-B_n.
\]
则称数列$\left\{ B_n \right\}$是函数列
$\left\{ A_n\left( x \right) \right\}$
在集合$D$上的**优控**。
:::

::: example [Koch 定理]
形如
\[
D=\lim_{m\rightarrow \infty}\left|
\begin{array}{ccccc}
  1       &  \alpha_1 & \cdots & 0 & 0 \\
  \beta_1 & 1         & \cdots & 0 & 0 \\
  \vdots  & \vdots    & \ddots & \vdots  & \vdots \\
  0       &  0 & \cdots & 1 & \alpha_m \\
  0 & 0         & \cdots & \beta_m & 1 \\
\end{array}\right|
\]
的无穷行列式$D$绝对收敛的充要条件是级数
$\sum_{n=1}^{\infty}\alpha_n \beta_n$绝对收敛。
此处行列式$D$绝对收敛指的是级数
$\sum_{n=1}^{\infty}\left|D_{m+1}-D_m\right|$绝对收敛。
:::

## 参考文献

```bibliography
阿黑波夫2006:
  type: book
  author: [Г. И. 阿黑波夫, В. А. 萨多夫尼奇, В. Н. 丘巴里阔夫]
  title: 数学分析讲义
  edition: 3
  publisher: 高等教育出版社
  year: 2006
```
