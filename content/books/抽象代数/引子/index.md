---
title: 引子
---

考虑二次方程
\[
X^2+aX+b=0,
\]
其中，系数$a,b\in {\mathbb{Q}}$。通过代换$X=Y-\frac{a}{2}$（配方），可以消去一次项从而将方程转变为

```math {@eq:quadratic-equation-simple}
X^2+b'=0.
```

这里，$b'$由$a$和$b$通过确定的代数运算所给出。
对于方程 @eq:quadratic-equation-simple，可以使用开方运算来给出它的解。
综合这一系列操作，我们可以给出二次方程的求根公式
\[
X=\frac{-a\pm \sqrt{a^2-4b}}{2}.
\]

对于三次方程
\[
X^3+aX^2+bX+c=0,
\]
其中，系数$a,b,c\in {\mathbb{Q}}$，我们仍可以通过代换$X=Y-\frac{a}{3}$消去二次项。
据此，不妨假设方程形如

```math {@eq:cubic-equation-simple}
X^3+aX+b=0.
```

方程 @eq:cubic-equation-simple 的三个根可以用如下的Cardano[^1]求根公式表达：
\[
\begin{aligned}
x_k=\omega^k\sqrt[3]{-\frac{b}{2}+\sqrt{\left(\frac{a}{3}\right)^3+\left(\frac{b}{2}\right)^2}}+\omega^{2k}\sqrt[3]{-\frac{b}{2}-\sqrt{\left(\frac{a}{3}\right)^3+\left(\frac{b}{2}\right)^2}},
\end{aligned}
\]
其中，$k=0,1,2$，$\omega=e^{\frac{2\pi}{3}i}$。

::: example
考虑方程
\[
X^3-X-6=0.
\]
容易看出，$2$是这个方程的根。直接套用Cardano公式，这个根的表达如下：
\[
\sqrt[3]{3+\frac{11}{9}\sqrt{6}}+\sqrt[3]{3-\frac{11}{9}\sqrt{6}}.
\]
然而，除非做一些详细的计算，要想看出以上表达式实际恰为$2$并不容易。
由此可见，直接应用求根公式可能是效率不太高的代数操作。
:::

::: remark [三次方程求根公式的推导：一种想法]
我们通过增加一个自由度的方式来解方程：令$X=u+v$，即用两个变量$u$和$v$来表示一个变量$X$。
此时，方程 @eq:cubic-equation-simple 可以写成：
\[
u^3+v^3+b +(3uv+a)(u+v)=0.
\]
这个方程有解的一个充分条件是

```math {@eq:cubic-1}
\begin{cases}
&u^3+v^3+b=0,\\
&3uv+a=0.
\end{cases}
```

它自然等价于

```math {@eq:cubic-2}
\begin{cases}
&u^3+v^3=-b,\\
&u^3\cdot v^3=-\frac{a^3}{27}.
\end{cases}
```

根据Vieta公式，$u^3$与$v^3$可被视作是二次方程
\[
Y^2+bY-\frac{a^3}{27}=0
\]
的解，根据二次方程的求根公式，我们可以解出$u^3$与$v^3$并进一步给出$u,v$以及$X=u+v$。
:::

我们还可以进一步研究四次方程
\[
X^4+aX^3+bX^2+cX+d=0,
\]
其中，系数$a,b,c,d\in {\mathbb{Q}}$。
四次方程仍然有求根公式，这是Cardano的学生Ferrari的工作，其关键想法是**凑平方差**，
从而把问题约化为三次方程的求根。

首先，待定一个参数$\xi$，利用$X^2+\frac{a}{2}X+\xi$的平方来代换掉$X^4$与$aX^3$这两个高次项，即
\[
X^4+aX^3-\left(X^2+\frac{a}{2}X+\xi\right)^2=-(2\xi+\frac{a^2}{4})X^2-a\xi X-\xi^2.
\]
从而，
\[
X^4+aX^3+bX^2+cX+d=\left(X^2+\frac{a}{2}X+\xi\right)^2-\big[(2\xi+\frac{a^2}{4}-b)X^2+(a\xi-c) X+(\xi^2-d)\big].
\]
我们**希望**上式右边中括号一项是完全平方式，即

```math {@eq:si-ci}
(2\xi+\frac{a^2}{4}-b)X^2+(a\xi-c) X+(\xi^2-d)=(\alpha X+\beta)^2.
```

在这个假设下，通过因式分解，原来的四次方程等价于
\[
\left(X^2+\frac{a}{2}X+\xi+(\alpha X+\beta)\right)\left(X^2+\frac{a}{2}X+\xi-(\alpha X+\beta)\right)=0.
\]
此时，我们只要求解两个二次方程就可以给出原四次方程的解。
最终，我们写下 @eq:si-ci 为完全平方的条件，即这个二次多项式的判别式为$0$：
\[
(a\xi-c)^2-4(2\xi+\frac{a^2}{4}-b)(\xi^2-d)=0.
\]
这是关于$\xi$的三次方程，所以，我们还需要使用Cardano公式来求解$\xi$。

以上的讨论给出了不超过四次的代数方程的根式解。
然而，Abel在1824年证明了不能通过对方程系数加、减、乘、除和开若干次方的运算来表示五次方程的根，
即五次方程没有求根公式。
1830年，Galois将这项工作推广到了五次及五次以上的方程并给出了具有求根公式的确切判断方式。

我们课程的主旨之一就是理解Galois的工作。

[^1]: $k=0$所对应的求根公式最早由del Ferro发现。
