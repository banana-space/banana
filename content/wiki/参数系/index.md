---
title: 参数系
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**参数系**是个[[交换代数]]概念。
从几何上看，参数系可视为[[代数簇]]的局部坐标系。

## 定义

::: definition
设$(A,\mathfrak{m})$ 是[[Krull 维数|维数]]为$r$的[[Noether 环|Noether]][[局部环]]，
$M$ 是有限生成$A$-模。

- 若 $A$ 中一组元素
  $a_1,\ldots,a_r$ 生成的理想$(a_1,\ldots, a_r)$是$\mathfrak{m}$-[[准素理想]]，
  则称$a_1,\ldots,a_r$是$A$的一组**参数系**。

- 若 $M$的[[Krull 维数|维数]] $\dim M=s$，且$A$ 中一组元素
  $b_1,\ldots,b_s$使得$\ell (M/(b_1,\ldots,b_s)M) <+\infty$，
  则称$b_1,\ldots,b_s$是$M$的一组**参数系**。这里$\ell$指[[长度 (模论)|长度]]。

:::

根据 [[Noether 环|Noether]] [[局部环]]的[[维数理论 (交换代数)|维数理论]]，参数系总存在。一般而言，
$\dim A\leq \dim_{A/\mathfrak{m}} \mathfrak{m}/\mathfrak{m}^2$；如果该等号成立
即$A$是正则局部环时，$\mathfrak{m}$自己就可以被$\dim A$个元素生成。这种情况下称
生成$\mathfrak{m}$的参数系为**正则参数系**。

## 性质

::: proposition
设$(A,\mathfrak{m})$ 是[[Krull 维数|维数]]为$r$的[[Noether 环|Noether]][[局部环]]。

- 若$x_1,\ldots,x_r$是其参数系，则
  $\dim A/(x_1,\ldots, x_i)A =r-i ~ ~ ~ ~ (1\leq i\leq r).$

- 存在参数系$x_1,\ldots,x_r$，使得其中任意$i$个元素生成理想的[[高度]]都等于$i$。

注意不是所有参数系都满足最后一条性质。
:::

::: proposition
设$(A,\mathfrak{m})$ 是[[Krull 维数|维数]]为$r$的[[正则局部环]]，$x_1,\ldots,x_i$
是$\mathfrak{m}$的元素。以下几条等价：

- $x_1,\ldots,x_i$ 是$A$某个正则参数系的子集。

- $x_1,\ldots,x_i$ 在$A/\mathfrak{m}$-线性空间
  $\mathfrak{m}/\mathfrak{m}^2$中的像是[[线性无关]]的。

- $A/(x_1,\ldots,x_i)$是$r-i$维正则局部环。

:::

::: definition [解析独立]
设$(A,\mathfrak{m})$ 是[[Noether 环|Noether]][[局部环]]。
称一组元素 $y_1, \dotsc, y_n \in \mathfrak{m}$ **解析独立**，如果满足以下条件：

- 若齐次多项式 $F \in A[Y_1,\ldots,Y_n]$
  满足 $F(y_1,\ldots,y_n)=0$，
  则其系数一定属于 $\mathfrak{m}$。

注意到，此时对任何域$k\subset A$以及$k$-系数非零
$n$元齐次多项式$F$，都有$F(y_1,\ldots, y_n)\neq 0$。
:::

::: proposition
设$(A,\mathfrak{m})$ 是[[Krull 维数|维数]]为$r$的[[Noether 环|Noether]][[局部环]]，
$x_1,\ldots,x_r$是其一组参数系，则$x_1,\ldots,x_r$解析独立。
:::

下面定理表明若$A$的剩余类域无限，则可以从任何$\mathfrak{m}$-准素理想中提取参数系。

::: proposition
若$(A,\mathfrak{m})$ 是[[Krull 维数|维数]]为$r$的[[Noether 环|Noether]][[局部环]]，
且其[[剩余类域]]$A/\mathfrak{m}$是无限[[域]]。那么对任何$\mathfrak{m}$-[[准素理想]]
$\mathfrak{q}=(u_1,\ldots,u_s)$，都存在$u_1,\ldots, u_s$的$r$个$A$-线性组合
$$
y_i=\sum_{j=1}^s a_{ij}u_j, ~ ~ (a_{ij}\in A, 1\leq i\leq r)
$$
使得它们生成的理想$(y_1,\ldots, y_r)$是$\mathfrak{q}$的[[理想约简|约简]]，且
$y_1,\ldots, y_r$组成$A$的参数系。
:::

```terms
参数系:
  en: system of parameters
```
