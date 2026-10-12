---
title: 实数的公理化描述
notices:
  - name: 问题
    items:
      - “(A) Archimedes 公理”一节中命题（$\mathbb{R}$ 包含所有有理数）的证明里，“按照定义，就有 $k=m-n$”一句似乎应为“就有 $m-n=0$，即 $m=n$”。
---

$\mathbb{R}$ 是一个集合，我们假设 $x$、$y$、$z$ 等都是它的元素。

- $\mathbb{R}$ 上面配有两个操作：

  - 加法。$+ \colon \mathbb{R} \times \mathbb{R} \rightarrow \mathbb{R}, (x,y) \mapsto x + y$；

  - 乘法。
    $\cdot \colon \mathbb{R} \times \mathbb{R} \rightarrow \mathbb{R}, (x,y) \mapsto x \cdot y$。

- $\mathbb{R}$ 上面还有一个**序关系** $\leqslant$：$x \leqslant y$（也记为 $y \geqslant x$）。

我们要求四元组 $(\mathbb{R}, +, \cdot, \leqslant)$ 表示满足下面四套公理：

## (F) 域公理：$\mathbb{R}$ 是一个域

- (F1) 加法结合律：$x + (y + z) = (x + y) + z$。

- (F2) 加法交换律：$x + y = y + x$。

- (F3) 存在加法单位元：存在 $0 \in \mathbb{R}$，使得对任意 $x \in \mathbb{R}$，$0 + x = x$ 成立。

- (F4) 加法逆元的存在性：对任意 $x \in \mathbb{R}$，存在 $-x \in \mathbb{R}$，使得 $x + (-x) = 0$。

::: exercise*
证明，加法逆元 $-x$ 是唯一的，即如果 $x' \in \mathbb{R}$ 也满足 $x + x' = 0$，那么 $x' = -x$。
:::

::: remark*
如果假定 (F1)–(F4) 成立，按照通行的代数学的概念，$(\mathbb{R}, +)$ 被称作是一个（交换）群。
我们强调 *$-x$ 目前只是一个记号*。根据俗套的约定，我们把 $x + (-y)$ 简写成 $x - y$。
:::

- (F5) 乘法结合律：$x \cdot (y \cdot z) = (x \cdot y) \cdot z$。

- (F6) 乘法交换律：$x \cdot y = y \cdot x$。

- (F7) 存在乘法单位元：存在 $1 \in \mathbb{R}$，使得 $1 \neq 0$ 并且对任意 $x \in \mathbb{R}$，
  $1 \cdot x = x$ 成立。我们还要求 $1 \neq 0$，从而 $\mathbb{R}$ 中至少有两个元素。

- (F8) 乘法逆元的存在性：对任意 $x\in \mathbb{R}-\{0\}$，存在 $x^{-1} \in \mathbb{R}$，
  使得 $x \cdot x^{-1} = 1$。

::: exercise*
证明，$x \neq 0$ 乘法逆元 $x^{-1}$ 是唯一的，即若 $x'\in \mathbb{R}$ 也满足 $x\cdot x'=1$，
那么 $x' = x^{-1}$。
:::

::: remark*
(F5)–(F8) 这四条公理表明 $(\mathbb{R}^\times \coloneqq \mathbb{R}-\{0\}, \cdot)$ 是一个（交换）群。
我们强调 $x^{-1}$ 只是一个记号。
根据约定，我们把 $x\cdot y^{-1}$ 也记作 $\frac{x}{y}$。
另外，有时候我们还省略掉 $\cdot$ 把 $x\cdot y$ 写成 $xy$。
:::

- (F9) 乘法分配律：$x \cdot (y + z) = x \cdot y + x\cdot z$。

::: remark*
假定 (F1)–(F7) 以及 (F9) 这八条，我们就称 $(\mathbb{R}, +, \cdot)$ 是一个（交换）环；
满足这九条公理的 $(\mathbb{R}, +, \cdot)$ 被称作是一个域。
:::

::: remark* [**空间**的概念]
上面的定义具有下述的模式，首先固定一个集合 $X = \mathbb{R}$，然后在 $X$ 上*加上*额外的*结构*，
比如说加法结构 $+ \colon X \times X \rightarrow X$，当然，我们对这个额外的加法结构也可以做一些要求，
比如说满足(F1)–(F4) 等；
我们还可以加更多的结构，
比如还要求 $X$ 上有乘法结构 $\cdot \colon X \times X \rightarrow X$
并且对这些结构之间的关系也有限定（比如说 (F9)）。
在数学中，所谓的**空间**通常指的是一个配备了某些结构的集合 $X$。
:::

对于正整数 $n$，我们还约定
$$
x^n = \underbrace{x\cdot x\cdot \cdots \cdot x}_{n\text{个}},\ nx = \underbrace{x+x+\cdots+x}_{n\text{个}}
$$
类似的，对于 $n\in \mathbb{Z}_{<0}$，我们约定
$$
x^{n} = \underbrace{x^{-1}\cdot x^{-1}\cdot \cdots \cdot x^{-1}}_{|n|\text{个}},\ nx = \underbrace{(-x)+(-x)+\cdots+(-x)}_{|n|\text{个}}
$$
我们规定 $0x = 0$，$x^0 = 1$（去掉 $0^0 = 1$）。
特别地，我们定义了以整数 $n\in \mathbb{Z}$ 为幂的幂函数：
\[
\mathbb{R}^\times(:=\mathbb{R}-\{0\})\rightarrow \mathbb{R}^\times, \ \  x\mapsto x^{n}.
\]

不难验证，对任意的 $m,n \in \mathbb{Z}$，$(n+m)x=nx +m x$，$x^{n+m}=x^n\cdot x^m$。
特别地，$nx+(-n)x=0$，$x^n \cdot x^{-n}=1$。

::: exercise*
- 1\) 证明，对任意的 $x,y$，如果 $b\neq 0$，我们有
  \[
  x+a=y+a\Rightarrow x=y; \ \ x\cdot b =y\cdot b \Rightarrow x=y.
  \]

- 2\) 证明，对任意的 $x,y,z,w$，如果 $y\neq 0$，$w\neq 0$，那么我们有
  \[
  \frac{x}{y}+\frac{z}{w}=\frac{xw+zy}{yw}, \ \frac{x}{y}\cdot \frac{z}{w}=\frac{x\cdot z}{y\cdot w}.
  \]

- 3\) 证明，对任意非零的 $x$ 和 $y$，我们有
  \[
  \left(\frac{x}{y}\right)^{-1}=\frac{y}{x}.
  \]

- 4\) 证明，$(-1)\cdot x =-x$。据此，进一步证明 $(-x)\cdot y= -(xy)$，$(-x)\cdot (-y)=xy$。

  （提示：利用 $x+(-1)\cdot x = 1\cdot x+(-1)\cdot x$）

从此之后，我们可以不计后果地使用这些公式（熟知的公式是**所谓的直观**的一部分）。
:::

## (O) 序公理：$\mathbb{R}$ 是有序域

- (O1) 序的传递性：$x\leqslant y,\ y\leqslant z\Rightarrow x \leqslant z$。

- (O2) 序可以决定元素：$x\leqslant y,\ y\leqslant x\Rightarrow x=y$。

- (O3) 全序关系：对任意的 $x$ 和 $y$，$x\leqslant y$ 或者 $y\leqslant x$，
  二者必居其一（可以都成立）。

::: remark*
我们给出大于号和小于号的定义：如果 $x\leqslant y$ 且 $x\neq y$，我们就说 $x<y$；
类似地，可以定义 $y<x$。
所以任意给定 $x,y\in \mathbb{R}$，那么如下三种情形（这三种情形是互斥的）必居其一：
\[
x<y, \ \ x=y, \ \ x>y.
\]
我们在数学分析中偏爱 $\leqslant$ 和 $\geqslant$，这是因为这两种符号在后来的取极限的运算下是封闭的，
这是后话。

另外，如果 $x>0$，我们就称 $x$ 是**正实数**并且称它的符号是正的，记做 ${\rm sign}(x)=+$；
如果 $x<0$，我们就称 $x$ 是**负实数**并且称它的符号是负的，记做 ${\rm sign}(x)=-$。
换句话说，我们定义了一个映射
\[
{\rm sign}\colon \mathbb{R}^\times \rightarrow \{+,-\}.
\]

我们在课程中会强调集合之间的映射这个概念。
习惯上我们把正实数，记作 $\mathbb{R}_{>0}$，我们还将 $\geqslant 0$ 的实数称作非负实数，
记作 $\mathbb{R}_{\geqslant 0}$；
类似地，
我们可以定义非正或者负实数并且“望文生义”地定义符号 $\mathbb{R}_{<0}$ 和 $\mathbb{R}_{\leqslant 0}$。
:::

::: remark* [区间的定义（也请参见之后所谓的几何定义）]
假设 $a, b\in \mathbb{R}$，满足 $a<b$。我们定义**开区间**、**闭区间**和**半开半闭的区间**如下
\[
\begin{aligned}
[a,b]\coloneqq\{x\in \mathbb{R} \mid a\leqslant x\leqslant b\}, &\ \ (a,b)\coloneqq\{x\in \mathbb{R}\mid a<x<b\},\\
[a,b)\coloneqq\{x\in \mathbb{R} \mid a\leqslant x<b\}, &\ \ (a,b]\coloneqq\{x\in \mathbb{R} \mid a<x\leqslant b\}.
\end{aligned}
\]

另外，作为约定，我们还采取下面的记号
\[
\begin{aligned}
[a,+\infty)\coloneqq\{x\in \mathbb{R}\mid x\geqslant a\}, &\ \ (a,+\infty)\coloneqq\{x\in \mathbb{R}\mid x> a\},\\
(-\infty,b]\coloneqq\{x\in \mathbb{R}\mid x \leqslant b\}, &\ \ (-\infty,b)\coloneqq\{x\in \mathbb{R}\mid x <b\}.
\end{aligned}
\]
其中，$a$ 和 $b$ 分别被称作是这些区间的**左端点**或者**右端点**。

用数学分析中的黑话来说，符号 $\infty$ 被称作是**无穷**，$\pm \infty$ 被称作是**正／负无穷**，
它们目前完全不具有具体的含义。
:::

- (O4) 与加法相容：$x\leqslant y \Rightarrow x+z\leqslant y+z$。

- (O5) 与乘法相容：$x\geqslant 0,\ y\geqslant 0 \Rightarrow xy\geqslant 0$。

## (A) Archimedes 公理：$\mathbb{R}$ 是 Archimedes 有序域

即对任意 $x>0$ 和 $y$，总存在正整数 $n$，使得 $n\cdot x\geqslant y$。

::: -remark [思考题]
假设 $a>0$，你是否能证明开区间 $(0,a)$ 是非空的。
通过反证法，你就可以看到所谓的 Dedekind 分割的影子。
Dedekind 分割是构造实数的一种手段，我们在后面的课程会讨论。
在思考的过程中你也会发现，真正的困难在于，基于目前的公理，
我们不清楚 $\mathbb{R}$ 中都有什么样子的元素（目前我们只知道 $0,1,-1\in \mathbb{R}$），
所以，能否大量的构造实数是一个很重要的问题。我们课程的一个关键点就是构造 $\sqrt{2}$、$e$ 和 $\pi$，
这听起来有些无聊，
但是中学数学教学从来都没有给出这些数的具体定义（只要求大家必须接受它们的某些性质）。
:::

::: exercise*
- 1\) 证明，$x\geqslant 0$ 等价于 $-x\leqslant 0$；$y>1$ 可以推出 $0<\frac{1}{y}<1$。
  进一步证明，$x\geqslant y$ 等价于 $-x\leqslant -y$。

- 2\) 证明，$1>0$，$-1\neq 1$。（提示：如若不然，那么，$-1>0$，利用 (O5) 就得到了矛盾）

- 3\) 证明，如果 $x\leqslant y$，$a\leqslant 0$，那么 $a\cdot x \geqslant a\cdot y$。

- 4\) 证明，如果 $a \leqslant b$，$x\leqslant y$，
  那么 $a+x\leqslant b+y$ 并且 $=$ 成立当且仅当 $a=b$，$x=y$；
  再证明，如果 $0< a \leqslant b$，$0<x\leqslant y$，
  那么 $ax\leqslant by$ 并且 $=$ 成立当且仅当 $a=b$，$x=y$。

- 5\) 给定 $x,y\in \mathbb{R}$，如果对任意的 $a<x$ 都能推出 $a<y$，证明，$x\leqslant y$。

- 6\) 证明，对任意的 $x\in \mathbb{R}$，我们有 $x^2 \geqslant 0$。

- 7\) 证明，如果 $a^2<a$，那么 $0<a<1$。

- 8\) 如果非零实数 $x$ 和 $y$ 的符号相同，证明，$(x+y)^2>(x-y)^2$。

:::

::: proposition
$\mathbb{R}$ 包含所有有理数，即存在单射 $\iota \colon \mathbb{Q}\rightarrow \mathbb{R}$，
使得对任意的 $x,y \in \mathbb{Q}$，我们有
\[
\iota(x+_{_\mathbb{Q}}y)=\iota(x)+\iota(y), \  \ \iota(x\cdot_{_\mathbb{Q}}y)=\iota(x)\cdot\iota(y),
\]
其中 $+_{_\mathbb{Q}}$ 和 $\cdot_{_\mathbb{Q}}$ 分别为有理数 $\mathbb{Q}$ 上的加法和乘法。
映射 $\iota\colon \mathbb{Q}\rightarrow \mathbb{R}$ 还保持序关系，即对任意的 $x,y \in \mathbb{Q}$，
如果 $x\leqslant_{_\mathbb{Q}} y$，那么 $\iota(x)\leqslant \iota(y)$，
其中 $\leqslant_{_\mathbb{Q}}$ 是有理数上的序。
:::

::: proof
首先对于整数 $n$ 定义映射 $\iota(n)\in \mathbb{R}$。我们令
\[
\iota(n)=\begin{cases}\overbrace{1+1+\cdots+1}^{n\text{个}}, \ \ &\text{如果}~n>0;\\
0, \ \ &\text{如果}~n=0;\\
\underbrace{(-1)+(-1)+\cdots+(-1)}_{-n\text{个}}, \ \ &\text{如果}~n<0.
\end{cases}
\]
不难验证（请同学参考课堂笔记），对任意的 $m,n \in \mathbb{Z}$，我们都有
\[
\iota(m+_{_\mathbb{Q}}n)=\iota(m)+\iota(n), \ \iota(-n)=-\iota(n), \ \iota(m\cdot_{_\mathbb{Q}}n)=\iota(m)\cdot\iota(n).
\]
据此，为了验证 $\iota$ 是单射，只要说明如果 $\iota(m)=\iota(n)$，则 $m=n$。我们有
\[
\iota(m-n)=\iota(m)+\iota(-n)=\iota(m)-\iota(n)=0,
\]
按照定义，就有 $k=m-n$（因为对任意的 $k>0$，$\underbrace{1+1+\cdots+1}_{k\text{个}}>0$，
$\underbrace{(-1)+(-1)+\cdots+(-1)}_{k\text{个}}<0$）。
对于有理数 $x=\dfrac{p}{q}\in \mathbb{Q}$，其中 $p,q\in \mathbb{Z}$，$q\neq 0$，我们定义
\[
\iota(x)=\frac{\iota(p)}{\iota(q)},
\]
其中，因为 $p$ 和 $q$ 是整数，所以 $\iota(p)$ 和 $\iota(q)$ 已经有了定义。
当然，$x$ 可以表示为其他的整数的商的形式，比如说，$x=\frac{s}{t}$，其中 $s,t\in \mathbb{Z}$，
为了说明 $\iota(x)$ 是良好定义的，我们就要说这两种表示所给出的 $\mathbb{R}$ 中的元素是一样的，即证明
\[
\frac{\iota(p)}{\iota(q)}=\frac{\iota(s)}{\iota(t)}.
\]
根据整数情况已经证明的结论，我们知道上式等价于
\[
\iota(p)\cdot \iota(t)=\iota(q)\cdot \iota(s)\Leftrightarrow \iota(p t) = \iota(q s)\Leftrightarrow pt=qs,
\]
其中最后一个等价性用到了 $\iota$ 在整数集上是单射，所以 $\iota(x)$ 是良好定义的，从而我们得到了映射
\[
\iota\colon \mathbb{Q}\rightarrow \mathbb{R}.
\]
为了说明 $\iota$ 是单射，考虑 $\iota\bigl(\frac{p}{q}\bigr)=\iota\bigl(\frac{s}{t}\bigr)$，
其中 $p,q,s,t$ 是整数。此时，按照定义，我们有
\[
\frac{\iota(p)}{\iota(q)}=\frac{\iota(s)}{\iota(t)}\Rightarrow pt=qs\Rightarrow \frac{p}{q}=\frac{s}{t}.
\]
最后，我们证明 $\iota$ 保持序关系，即说明如果 $ \frac{p}{q}>\frac{s}{t}$，
那么 $\frac{\iota(p)}{\iota(q)}>\frac{\iota(s)}{\iota(t)}$，其中，我们总能假设 $q>0，t>0$。
由于 $\iota(q)>0$，$\iota(t)>0$（因为对任意的 $k>0$，$\underbrace{1+1+\cdots+1}_{k\text{个}}>0$），
所以 $\frac{\iota(p)}{\iota(q)}>\frac{\iota(s)}{\iota(t)}$ 等价于
\[
\iota(p)\cdot \iota(t)>\iota(q)\cdot \iota(s)\Leftrightarrow \iota(pt-qs)>0.
\]
后者是显然的，因为 $pt-qs>0$。
:::

::: remark*
我们之后将 $\mathbb{Q}$ 和 $\iota$ 的像等同。
自此往后，我们就在这个意义下认为有理数 $\mathbb{Q}$ 是 $\mathbb{R}$ 的子集。
换句话说，我们用 $n$ 来表示 $\mathbb{R}$ 中的 $\underbrace{1+1+\cdots+1}_{n\text{个}}$，
$\dfrac{p}{q}$ 表示
$\dfrac{\overbrace{1+1+\cdots+1}^{p\text{个}}}{\underbrace{1+1+\cdots+1}_{q\text{个}}}$ 等。
习惯上，
我们将 $\mathbb{R}-\mathbb{Q}$
的元素称为是**无理数**（这是一个在中文世界里被广泛接受的“无理的”术语）。
:::

::: exercise*
有了以上的各种准备和经验，我们就不难证明

- 1\) 证明，利用 $\mathbb{R}$ 中的 $n$ 的定义，我们有 $n\cdot x =nx$。
  （先证明在 $\mathbb{R}$ 中，我们有 $n\cdot x= \underbrace{x+x+\cdots+x}_{n\text{个}}$，
  其中 $n>0$ 是 $\mathbb{R}$ 中的一个自然数）。

- 2\) 证明，对于任意的 $a<b$，$(a,b)$ 有无限多个元素。
  （提示：我们可以考虑 $\frac{1}{2}(a+b)$ 并利用 $0<\frac{1}{2}<1$ 这个事实）

- 3\) 如果 $\mathbb{R}$ 中存在元素 $o>0$，使得对任意的 $x>0$，我们都有 $o<x$，
  我们就称 $o$ 是无穷小元。证明，$\mathbb{R}$ 中没有无穷小元。
  （有一种专门研究含有无穷小的数的分析，叫做非标准分析）

:::

## (I) 区间套公理

给定有限（即要求下面的 $a_n$ 和 $b_n$ 均为实数）闭区间的序列 $\{I_n=[a_n,b_n]\}_{n=1,2,\cdots}$，
如果这个序列是下降的，
即 $I_1\supset I_2\supset I_3\supset \cdots$（等价于对任意的 $n\geqslant 1$ 都有
$a_n\leqslant a_{n+1}$ 并且 $b_{n+1}\leqslant b_n$），那么它们的交集非空，即
\[
\lim_{n\rightarrow \infty}I_n \coloneqq \bigcap_{n\geqslant 1}I_n\neq \varnothing.
\]

::: definition
我们将满足上述四条公理系统 **(F)、(O)、(A)、
(I)** 的四元组 $(\mathbb{R}, +,\cdot,\leqslant)$ 称作是**实数**。
:::

::: remark*
这个定义目前并不是**良好定义的**：我们完全不知道这样的实数理论是不是**唯一的**；
我们甚至没有证明满足四条的四元组 $(\mathbb{R}, +,\cdot,\leqslant)$ 是存在的。
另外，除了有理数之外，我们并没有证明无理数（比如说 $\sqrt{2}$）是存在的。
:::

我们注意到，如果就强行要求 $\mathbb{R}$ 是全体有理数的集合并且配备了 $+$、
$\cdot$ 和 $\leqslant$ 这几种有理数上的结构，我们所得到的四元组是满足 **(F)、(O)、
(A)** 这三条公理系统的，
所以，要想真的得到我们中学所熟悉的实数（比如说存在 $\sqrt{2}$），区间套公理是必不可缺的。
