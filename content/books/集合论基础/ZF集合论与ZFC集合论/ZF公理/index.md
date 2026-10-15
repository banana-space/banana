---
title: ZF公理
---

::: definition [ZF]
这个一阶理论只有两个谓词，$\approx$仍然读作等于，第二个二元谓词$\in$读作属于；没有函数。
公理集是递归可枚举的，列举如下：

1. $\mathrm{(Ext)}$ $\forall x\forall y((\forall z(z\in x\leftrightarrow z\in y))\to x\approx y)$

2. $\mathrm{(Pair)}$
   $\forall x\forall y\exists z(y\in z\wedge x\in z\wedge \forall u(u\in z\to (u\approx x\vee u\approx y)))$

3. $\mathrm{(Union)}$ $\forall x \exists y\forall z((\exists u(z\in u\wedge u\in x))\to z\in y)$

4. $\mathrm{(Pow)}$ $\forall x\exists y\forall z((\forall u(u\in z\to u\in x))\to z\in y)$

5. $\mathrm{(Fund)}$
   $\forall x(\exists y(y\in x)\to\exists y(y\in x\wedge \neg \exists z(z\in y\wedge z\in x)))$

6. $\mathrm{(Inf)}$
   $\exists x(\exists y(y\in x\wedge \neg\exists z(z\in y))\wedge\forall u(u\in x\to \exists v(v\in x\wedge \forall w(w\in v\leftrightarrow(w\in u\vee w\approx u)))))$

7. $\mathrm{(Aus)}_\varphi$
   $\forall v_1...\forall v_p\forall a\exists b\forall x(x\in b\leftrightarrow(x\in a\wedge\varphi(x,v_1,...,v_p)))$

8. $\mathrm{(Rep)}_\varphi$
   $\forall v_1...\forall v_p(\forall x\exists \bar{y}\forall y(y=\bar{y}\leftrightarrow\varphi(x,y,v_1,...,v_p))\to \forall a\exists b\forall z(z\in b\leftrightarrow\exists u(u\in a\wedge\varphi(u,z,v_1,...,v_p))))$

这里$\mathrm{(Aus)}_\varphi$和$\mathrm{(Rep)}_\varphi$要跑遍所有公式$\varphi$，
换言之它们是一种公理模式（schema）。
:::

对柏拉图主义者而言，$\mathrm{ZF}$描述了一个实在的集合宇宙中的一些事实，
因此谈论一个集合就是在谈论一个具体的对象；对形式主义者而言，我们只承认这是一些句子，
换言之我们在讨论一些关于自然数的事实，以避免谈论任何关于客观世界的问题。
但这两种对待集合的态度在我们所要涉及的简单的集合论中不引发冲突，
因此我们不再仔细讨论我们对待集合论的态度。

今后，集合论中的$\approx$将被升级为$=$，以暗示集合的某种实在性。
我们接着定义一些常见的集合论语言中的符号。

::: definition
我们定义以下函数与谓词：

1. $\mathrm{(Ext)+(Aus)+(Pair)}$指出
   $\forall x\forall y\exists z(y\in z\wedge x\in z\wedge \forall u(u\in z\to (u=x\vee u=y)))$，
   我们记这个$z$为$\{x,y\}$。

2. $\mathrm{(Ext)+(Aus)+(Union)}$指出
   $\forall x \exists y\forall z(z\in y\leftrightarrow \exists u(z\in u\wedge u\in x))$，
   我们记这个$y$为$\bigcup x$。

3. $\mathrm{(Ext)+(Aus)+(Pow)}$指出
   $\forall x\exists y\forall z(z\in y\leftrightarrow\forall u(u\in z\to u\in x))$，
   我们记这个$y$为$\wp (x)$。

4. $\mathrm{(Ext)+(Aus)+(Inf)}$指出$\exists x\forall y\neg(y\in x)$，我们记这个$x$为$\varnothing$。

5. 我们将$\{x,x\}$简记为$\{x\}$，将$\bigcup\{x,y\}$记为$x\cup y$。

6. 对$\mathrm{(Aus)_\varphi}$这句话，我们记$b=\{x\in a|\varphi(x,v_1,...,v_p)\}$。

7. 将$\forall x(x\in A\rightarrow x\in B)$简记为$A\subseteq B$，即$A$是$B$的子集或$A$包含于$B$。

8. 将$\forall x(x\in y\rightarrow ...)$简记为$\forall x\in y(...)$，
   将$\exists x(x\in y\wedge ...)$简记为$\exists x\in y(...)$。

9. 令$x\cap y=\{z\in x|z\in y\}$，$x\backslash y=\{z\in x|z\not\in y\}$。

10. 非空的$I$按替换公理模式指示的集合族$\{x_i|i\in I\}$有一个交
    $\bigcap_{i\in I}x_i=\{x\in x_j|\forall i\in I(x\in x_i)\}$，其中$j$是保证$I$非空的那个元素。

11. $I$指示的集合族$\{x_i|i\in I\}$有一个并$\bigcup_{i\in I}x_i=\bigcup\{x_i|i\in I\}$。

:::

但我们有的时候确实想讨论一点不是集合的东西，比如说所有集合。
我们引入一种$\mathrm{ZF}$中的替代记法，它在二阶集合论中称作Church公理模式。

::: definition
对于公式$\varphi(x)$，如果$\forall x\exists y(y\not\in x\wedge\varphi(y))$，
则称$\varphi$定义了一个真类$\mathbf{C}$（或者它是一个真类）。
我们这时也通常将$\varphi(x)$写成$x\in\mathbf{C}$。

特别地，我们将$x=x$定义的真类记为$\mathbf{V}$；它常被称作集合论宇宙。
:::
