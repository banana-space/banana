---
title: 域扩张
---

::: definition
$L$是域，$K\subset L$。
如果$K$在$L$的加法和乘法下封闭（即对任意的$a,b\in K$，
有$a+b\in K$和$a\cdot b \in K$）并且$K$对加法逆和乘法逆也封闭（即对任意的$a,b\in K$和$b\neq 0$，
有$-a\in K$和$b^{-1} \in K$），就称$K$为$L$的**子域**。
此时，我们还称$L$是$K$的**扩张**并记作${L/K}$。

如果$K\subset K'\subset L$均为$L$的子域（此时$K$显然为$K'$的子域），
称$K'$为扩张${L/K}$的**中间域**。我们通常用如下类型的交换图表示：
\[
\begin{tikzcd}
 L\arrow[d, dash]  &  & L\arrow[dr, dash] &                             & & &L\arrow[dl, dash]\\
K'\arrow[d, dash]  &  &                           & K'\arrow[dl, dash]  &  & K'\arrow[dr, dash] &\\
K                        & &     K                     &                             & & &K
  \end{tikzcd}
\]
:::

::: exercise
证明，在$L$的加法和乘法下，$K$是域。
如果不加说明，我们总默认在$K$上的乘法与加法均为$L$中的乘法与加法。
:::

::: remark [由子集生成的域]
给定域扩张${L/K}$，$\{K'_i\}_{i\in I}$是一族中间域，
那么$\displaystyle \bigcap_{i\in I}K'_i$也是$L$的中间域。

根据这个性质，给定域扩张${L/K}$和$L$的子集$M$，我们用$K(M)$表示所有包含$M$的中间域的交。
这是包含$M$的最小的[^1]子域，我们把它称作是**由$M$所生成的子域**。
如果$M$是有限集$\{m_1,\cdots,m_k\}$，我们也把$K(M)$记成$K(m_1,\cdots,m_k)$。
如果$L=K(M)$并且$M$是有限集，那么域扩张${L/K}$被称作是**有限型的**或**有限生成的**。
:::

给定域$K$，我们用$K[X_1,X_2,\cdots,X_n]$表示$K$上的所有$n$-元多项式（$n$-个变量的多项式）。
对于$P\in K[X_1,\cdots,X_n]$，它形如
\[
P(X_1,\cdots,X_n)=\sum_{\text{有限个}~\alpha}a_\alpha \cdot X_1^{\alpha_1}X_2^{\alpha_2}\cdots X_n^{\alpha_n}=\sum_{\text{有限个}~\alpha}a_\alpha \cdot X^\alpha,
\]
其中，$a_\alpha\in K$，$\alpha=(\alpha_1,\cdots,\alpha_n)$是一个多重指标，
$\alpha_i\in \mathbb{Z}_{\geqslant 0}$并且
$X^\alpha=X_1^{\alpha_1}X_2^{\alpha_2}\cdots X_n^{\alpha_n}$。

我们强调多项式与多项式函数是不同的代数对象，尽管多项式可以被视作是函数（映射）：
给定域扩张${L/K}$和$P\in K[X_1,\cdots,X_n]$，定义
\[
P\colon L^n\rightarrow L,  \ \ (x_1,\cdots,x_n)\mapsto P(x_1,\cdots,x_n)\coloneqq\sum_{\text{有限个}~\alpha}a_\alpha \cdot x_1^{\alpha_1}x_2^{\alpha_2}\cdots x_n^{\alpha_n}.
\]

::: proposition
给定域扩张${L/K}$，$M\subset L$是子集。
那么，$K(M)$恰为$L$中形如$\dfrac{P(x_1,\cdots,x_n)}{Q(x_1,\cdots,x_n)}$的元素，其中，
$n\geqslant 0$，$P,Q\in K[X_1,\cdots,X_n]$是$K$-系数的$n$元多项式，
$x_1,\cdots,x_n \in M$并且$Q(x_1,\cdots,x_n)\neq 0$。
:::

::: proof
定义$L$的子集
\[
K'=\left\{\dfrac{P(x_1,\cdots,x_n)}{Q(x_1,\cdots,x_n)}\bigm|P, Q\in K[X_1,\cdots,X_n], x_1,\cdots,x_n \in M~\text{并且}~Q(x_1,\cdots,x_n)\neq 0\right\}.
\]
首先证明$K'\subset K(M)$。
由于$x_1,\cdots,x_n \in M\subset K(M)$并且在加减和乘法下$K(M)$是封闭的，所以，
对任意的$P,Q\in K[X_1,\cdots,X_n]$，$P(x_1,\cdots,x_n),Q(x_1,\cdots,x_n)\in K(M)$。
$K(M)$在除法下封闭表明$\dfrac{P(x_1,\cdots,x_n)}{Q(x_1,\cdots,x_n)}\in K(M)$。
从而，$K'\subset K(M)$。

由于$K(M)$是包含$M$的最小的中间域，只要证明$K'$是域即可。
这是显然的，
因为形如$\dfrac{P(x_1,\cdots,x_n)}{Q(x_1,\cdots,x_n)}$的元素在四则运算下仍然可以表达成这种形式。
:::

::: remark [有限性]
对任意的$M\subset L$，我们有
\[
K(M)=\displaystyle\bigcup_{F\subset M\atop F\text{是有限集}}K(F).
\]
实际上，$K(M)$中的每个元素都形如$\dfrac{P(x_1,\cdots,x_n)}{Q(x_1,\cdots,x_n)}$，
它被包含在由$M$中的一个有限集$F=\{x_1,\cdots,x_n\}$所生成的子域中。

类似的，对任意$L$中的子集$M$和$N$，我们有
\[
K(M\cup N)=K(M)(N)=K(N)(M).
\]
:::

::: remark [线性空间结构]
给定域扩张${L/K}$，$L$上的加法和以及$K$中元素与$L$中元素的乘法，给出了$L$的$K$-线性空间结构。

实际上，对任意的$a,b,c\in K$和$x,y,z\in L$，有
\[
a\cdot (x+y)=a\cdot x+a\cdot y, \ a\cdot (b\cdot x)=(ab)\cdot x, \ (a+b)\cdot x= a\cdot x+b\cdot x.
\]
这验证了$L$作为$K$-线性空间的基本公理。

如果$\dim_K L<\infty$，就称$L$是$K$的**有限扩张**。
我们称$\dim_K L$为扩张${L/K}$的**次数**并记作$[L:K]$。

作为$K$-线性空间的一组基$\{e_i\}_{i\in I}\subset L$被称作是${L/K}$的一组基。
:::

::: example
${{\mathbb{C}}/{\mathbb{Q}}}$是域扩张，${\mathbb{R}}$是一个中间域。

${{\mathbb{C}}/{\mathbb{R}}}$是有限扩张并且$[{\mathbb{C}}:{\mathbb{R}}]=2$。
实际上，我们可以选取$\{1,\sqrt{-1}\}$作为该扩张的基。

${{\mathbb{R}}/{\mathbb{Q}}}$不是有限扩张，最简单的证明是观察到${\mathbb{R}}$是不可数集即可。
:::

::: example
选定正整数$D$，$D$不是完全平方数，此时$\sqrt{D}$不是有理数。考虑所有的形如$x+y\sqrt{D}$的数：
\[
\mathbb{Q}(\sqrt{D})=\big\{x+y\sqrt{D}\bigm|x,y\in {\mathbb{Q}}\big\}.
\]
由于$\sqrt{D}\notin {\mathbb{Q}}$，所以，
${\mathbb{Q}} \subsetneq \mathbb{Q}(\sqrt{D})\subset {\mathbb{R}} $。

::: exercise
对于$x+y\sqrt{D}, a+b\sqrt{D}\in \mathbb{Q}(\sqrt{D})$，证明，
$x+y\sqrt{D}=a+b\sqrt{D}$等价于$x=a,y=b$。
:::

我们验证$\mathbb{Q}(\sqrt{D})$在（${\mathbb{C}}$的）四则运算下封闭：

- $\mathbb{Q}(\sqrt{D})$对加减法封闭。

  对$x+y\sqrt{D},a+b\sqrt{D}\in \mathbb{Q}(\sqrt{D})$，我们有
  \[
  (x+y\sqrt{D})\pm(a+b\sqrt{D})=(x\pm a)+(y\pm b)\sqrt{D}\in \mathbb{Q}(\sqrt{D}).
  \]

- $\mathbb{Q}(\sqrt{D})$对乘法封闭。

  对$x+y\sqrt{D},a+b\sqrt{D}\in \mathbb{Q}(\sqrt{D})$，我们有
  \[
  \begin{aligned}
  (x+y\sqrt{D})\cdot (a+b\sqrt{D})&=xa+yb(\sqrt{D})^2+(xb+ya)\sqrt{D}\\
  &=xa+ybD+(xb+ya)\sqrt{D} \in \mathbb{Q}(\sqrt{D}).
  \end{aligned}
  \]

- $\mathbb{Q}(\sqrt{D})$对除法封闭。

  利用乘法封闭性，只要说明若$a+b\sqrt{D}\in \mathbb{Q}(\sqrt{D})$，
  则$\frac{1}{a+b\sqrt{D}}\in \mathbb{Q}(\sqrt{D})$即可：
  \[
  \begin{aligned}
  \frac{1}{a+b\sqrt{D}}&=\frac{a-b\sqrt{D}}{(a+b\sqrt{D})(a-b\sqrt{D})}=\frac{a-b\sqrt{D}}{a^2-b^2D}\\
  &=\frac{a}{a^2-b^2D}-\frac{b}{a^2-b^2D}\sqrt{D}
  \end{aligned}
  \]
  注意到$\frac{a}{a^2-b^2D}$和$-\frac{b}{a^2-b^2D}$是有理数，
  从而$\frac{1}{a+b\sqrt{D}}\in \mathbb{Q}(\sqrt{D})$。

以上证明了$\mathbb{Q}(\sqrt{D})$是${\mathbb{C}}$的子域。
实际上，${\mathbb{Q}(\sqrt{D})/{\mathbb{Q}}}$的次数为$2$，其中，$\{1,\sqrt{D}\}$是一组基。
:::

::: proposition
给定域扩张${L/K}$和${E/L}$，${E/K}$是有限扩张当且仅当${E/L}$和${L/K}$均为有限扩张。
\[
\begin{tikzcd}
 E\arrow[d, dash]   \\
L\arrow[d, dash] \\
K
  \end{tikzcd}
\]
在此前提下，我们还有公式
\[
[E:K]=[E:L][L:K].
\]
:::

::: proof
如果${E/K}$是有限扩张，由于$L$是$E$的$K$-线性子空间，所以${L/K}$是有限扩张；
而对于$E$（作为$K$-线性空间）的一组基$\{v_i\}_{1\leqslant i\leqslant m}$，由于$K\subset L$，
它们的$L$-线性组合显然张成$E$，从而，$E$也是有限维的$L$-线性空间。

现在假设${E/L}$和${L/K}$是有限维的，选取$\{v_i\}_{1\leqslant i\leqslant m}$是${E/L}$的基，
$\{w_j\}_{1\leqslant j\leqslant n}$是${L/K}$的基。
我们只要证明$\{v_i\cdot w_j\}_{1\leqslant i\leqslant m \atop 1\leqslant j\leqslant n}$是${E/K}$
的基即可，其中，$v_i\cdot w_j$是在$E$中相乘：

- $\{v_i\cdot w_j\}_{1\leqslant i\leqslant m \atop 1\leqslant j\leqslant n}$是$K$-线性无关的：
  如果$\{\lambda_{i,j}\}_{1\leqslant i\leqslant m \atop 1\leqslant j\leqslant n}\subset K$，
  使得$\displaystyle\sum_{i,j}\lambda_{i,j} v_i\cdot w_j=0$，通过调整求和顺序，我们有
  \[
  \sum_{i}\big(\sum_{j}\lambda_{i,j} w_j\big)v_i=0 .
  \]
  以上括号中的系数$\sum_{j}\lambda_{i,j} w_j\in L$，
  根据$\{v_i\}_{1\leqslant i\leqslant m}$是${E/L}$的基，对任意的$i$，我们都有
  \[
  \sum_{j}\lambda_{i,j} w_j=0.
  \]
  再利用$\{w_j\}_{1\leqslant j\leqslant n}$是${L/K}$的基，从而对任意的$i,j$，都有$\lambda_{i,j}=0$。
  这证明了线性无关性。

- $\{v_i\cdot w_j\}_{1\leqslant i\leqslant m \atop 1\leqslant j\leqslant n}$张成$E$：实际上，
  对任意的$x\in E$，存在$\{x_i\}_{1\leqslant i\leqslant m}\subset L$，
  使得$\displaystyle \sum_{i} x_iv_i=x$；对每个$i$，
  存在$\{\lambda_{i,j}\}_{1\leqslant j\leqslant n}\in K$，
  使得$\displaystyle\sum_{j} \lambda_{i,j}w_j=x_i$。从而，
  \[
  x=\sum_{i} \big(\sum_{j} \lambda_{i,j}w_j\big)v_i=\sum_{i,j}\lambda_{i,j} v_i\cdot w_j.
  \]
  这表明$\{v_i\cdot w_j\}_{1\leqslant i\leqslant m \atop 1\leqslant j\leqslant n}$张成了$E$。

另外，以上推导自然给出了$[E:K]=[E:L][L:K]$。证毕。
:::

[^1]: 在包含关系下。
