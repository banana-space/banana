---
title: 连续型随机变量的独立性
---
在[第2.4节](/books/概率与数理统计/离散型随机变量/随机变量的独立性/)中，
我们已经给出了随机变量独立性的一般性定义（即 @definition:independence_random_vars），
该定义自然也适用于连续型随机变量。本节只介绍连续型随机变量
相互独立的充要条件：两个连续型随机变量相互独立，当且仅当
其联合概率密度函数可表示为各自（边缘）概率密度函数的乘积；
这个结论与离散情形下的 @theorem:independence_discrete_pmf
相对应。

::: theorem {@theorem:independence_continuous_pdf}
设$X,Y$为两个连续型随机变量，$f_X,f_Y$为各自的概率密度函数。
则以下三个命题等价：

1. $X$与$Y$相互独立。

2. $(X,Y)$为连续型随机向量，且其联合概率密度函数可表示为

   ```math {@eq:independence_continuous_pdf_1}
   f_{X,Y}(x,y) = f_X(x)\cdot f_Y(y),
   \qquad (x,y)\in\mathbb{R}^2.
   ```

3. $(X,Y)$为连续型随机向量，且存在函数
   $g,h:\mathbb{R}\rightarrow\mathbb{R}$使得$(X,Y)$的联合概率密度函数可表示为

   ```math {@eq:independence_continuous_pdf_2}
   f_{X,Y}(x,y) = g(x)\cdot h(y),\qquad (x,y)\in\mathbb{R}^2.
   ```

:::

::: proof
- 命题1 $\Rightarrow$ 命题2：设$X,Y$相互独立。
  任取区间$I,J\subseteq\mathbb{R}$，则有
  \[
      \begin{aligned}
      \mathbb{P}((X,Y)\in I\times J)
      & = \mathbb{P}(X\in I, Y\in J) \\
      & = \mathbb{P}(X\in I)\cdot \mathbb{P}(Y\in J) \\
      & = \int_I f_X(x)\,\mathrm{d} x \int_J f_Y(y)\,\mathrm{d} y \\
      & = \iint_{I\times J} f_X(x)\cdot f_Y(y)\,\mathrm{d} x\mathrm{d} y.
      \end{aligned}
  \]
  将上式与 @definition:continuous_random_vector  对照，
  可得$(X,Y)$为连续型随机向量，且函数
  $(x,y)\mapsto f_X(x)\cdot f_Y(y)$给出了$(X,Y)$的一个
  联合概率密度函数。

- 命题2 $\Rightarrow$ 命题1：
  设 @eq:independence_continuous_pdf_1  成立。
  任取区间$I,J\subseteq\mathbb{R}$，则
  \[
      \begin{aligned}
      \mathbb{P}(X\in I, Y\in J)
      & = \mathbb{P}((X,Y)\in I\times J) \\
      & = \iint_{I\times J} f_{X,Y}(x,y)\,\mathrm{d} x\mathrm{d} y \\
      & = \iint_{I\times J} f_X(x)\cdot f_Y(y)\,\mathrm{d} x\mathrm{d} y \\
      & = \int_I f_X(x)\,\mathrm{d} x\int_J f_Y(y)\,\mathrm{d} y
      = \mathbb{P}(X\in I)\cdot\mathbb{P}(X\in J).
      \end{aligned}
  \]
  由区间$I,J$的任意性可得$X,Y$相互独立。

- 命题2 $\Rightarrow$ 命题3：显然。

- 命题3 $\Rightarrow$ 命题2：证明思路与离散情形相类似，
  具体细节留给读者自行完成。

:::
