---
title: 极限与伴随
---

在无穷范畴中，
同伦等价的对象应该被视作“相同”的对象。
因此，无穷范畴中的（余）极限应该做到不受同伦等价影响，
也就是当我们把图表换成一个与之前同伦等价的图表后，
（余）极限的结果并不改变。
这种（余）极限的概念是**同伦（余）极限**。

同伦（余）极限与普通（余）极限的结果可能是不同的。例如，图表
\[
\begin{tikzcd}
  \{*,*\} \ar[r] \ar[d] \ar[dr,phantom,pos=.75,"\lrcorner"] & \{*\} \ar[d] \\
  \{*\} \ar[r] & S^1
\end{tikzcd}
\]
是拓扑空间的同伦推出，其中 $\{*,*\}$ 代表两个点构成的离散空间。
经过同伦等价，上述图表可以变成一个拓扑空间的普通推出图表：
\[
\begin{tikzcd}
  \{0,1\} \ar[r] \ar[d] \ar[dr,phantom,pos=.75,"\lrcorner"] & {}[0,1] \ar[d] \\
  {}[0,1] \ar[r] & S^1
\end{tikzcd}
\]

同伦（余）极限并没有明显的计算方式。
但在模型范畴中，模型结构会给计算同伦（余）极限提供帮助。
例如，将上述第一个图表变成第二个图表而求普通余极限，
就计算出了第一个图表的同伦余极限。这个计算方法见下面 @thm-6-hpo。

## 余极限与极限

最简单的余极限就是空的余极限，即范畴的始对象。

在普通范畴中，始对象由以下性质刻画：它到任何别的对象都有唯一的态射。
在无穷范畴中，“唯一”应该翻译成，所有选择构成的空间是可缩的。

::: definition
设 $\mathsf{C}$ 是拟范畴。
对象 $x\in\mathsf{C}$ 称为 $\mathsf{C}$ 的**始对象**，
如果对任意 $y\in\mathsf{C}$，态射空间 $\operatorname{Hom}_{\mathsf{C}}(x,y)$ 是可缩的。
:::

其中，$\operatorname{Hom}_{\mathsf{C}}(x,y)$ 可以指下列的任一个：
\[
\operatorname{Hom}_{\mathsf{C}}^\vartriangleleft(x,y),\quad
\operatorname{Hom}_{\mathsf{C}}^\vartriangleright(x,y),\quad
\operatorname{Hom}_{\mathfrak C\mathsf{C}}(x,y),\quad\text{等等,}
\]
它们全都是同伦等价的（@thm-5-h）。

::: remark
$\mathsf{C}$ 的始对象等价于 $\mathsf{hCW}$-充实范畴 $h\mathsf{C}$ 的始对象。
本节以下定义的很多概念也都等价于 $\mathsf{hCW}$-充实范畴中的对应概念。
:::

可以猜到，如果始对象存在，则一定唯一。
但如之前所说，唯一的意思是构成一个可缩空间。

::: lemma
设 $\mathsf{C}$ 是拟范畴，设 $x\in\mathsf{C}$。则映射
\[
\mathsf{C}_{x/}\to\mathsf{C} \quad\text{和}\quad \mathsf{C}_{/x}\to\mathsf{C}
\]
分别是左纤维化和右纤维化。
:::

::: proof
留给读者。
:::

::: proposition
设 $\mathsf{C}$ 是拟范畴。

- 对象 $x\in\mathsf{C}$ 是始对象，当且仅当左纤维化
  \[
  \mathsf{C}_{x/}\to\mathsf{C}
  \]
  是平凡纤维化。

- 由 $\mathsf{C}$ 的所有始对象张成的满子范畴要么是空的，
  要么是一个可缩 Kan 复形。

:::

::: proof
先证明第一条。注意到 $x$ 是始对象等价于映射
$\mathsf{C}_{x/}\to\mathsf{C}$ 的纤维全都可缩。
但左纤维化的纤维可缩当且仅当它是平凡纤维化，
这是一个标准事实 [@HTT, Lemma 2.1.3.4]。

再证明第二条。设映射 $f\colon\partial\Delta[n]\to\mathsf{C}$
把所有顶点都映到始对象，其中 $n>0$。
我们要证明它可以延拓成 $\Delta[n]\to\mathsf{C}$ 的映射。
在图表
\[
\begin{tikzcd}
  \partial\Delta[n-1] \ar[d,"\mathsf{Cof}\ni"'] \ar[r,"f|_{\Lambda_0[n]}"] &
  \mathsf{C}_{f(0)/} \ar[d,"\in\mathsf{Fib}\cap\mathsf{W}"] \\
  \Delta[n-1] \ar[r,"{f|_{1,\dotsc,n}}"'] \ar[ur,dashed] &
  \mathsf{C}
\end{tikzcd}
\]
中做提升，就能得到想要的延拓。
:::

下面，我们来研究一般的余极限。
但余极限其实就是仰范畴的始对象。

::: definition
设 $\mathsf{C}$ 是拟范畴，
$K$ 是单纯集，$f\colon K\to\mathsf{C}$ 是 $\mathsf{C}$ 中的图表。
则 $f$ 的**余极限**就是仰范畴 $\mathsf{C}_{K/}$ 的始对象。
:::

我们立刻得到以下结论。

::: corollary
设 $\mathsf{C}$ 是拟范畴，
$K$ 是单纯集，$f\colon K\to\mathsf{C}$ 是 $\mathsf{C}$ 中的图表。

- 映射 $\bar f\colon K^\vartriangleright\to\mathsf{C}$
  是 $f$ 的余极限，当且仅当它诱导的左纤维化
  \[
  \mathsf{C}_{K^\vartriangleright/}\to\mathsf{C}_{K/}
  \]
  是平凡纤维化。

- 由 $f$ 的所有余极限构成的范畴
  要么是空的，要么是可缩 Kan 复形。

:::

::: proof
我们有单纯集的同构
\[
\mathsf{C}_{K^\vartriangleright/}\simeq(\mathsf{C}_{K/})_{x/},
\]
其中 $x$ 是 $K^\vartriangleright$ 的顶点的像。
其余都是显然的。
:::

::: remark {@thm-6-c}
自然的映射
\[
\mathsf{C}_{K^\vartriangleright/}\to\mathsf{C}_{x/}
\]
一定是平凡纤维化，
这可以通过验证提升性质，
并对 $K$ 的单形个数用超限归纳法来证明。
细节留给读者。
:::

然而，这样定义出的余极限完全无法计算。
下面，我们来推导一些性质，以使得我们能够计算一些例子。

::: proposition {@thm-6-z}
设 $\mathsf{C}$ 是拟范畴，
$\{x_\alpha\}_{\alpha\in A}$ 是 $\mathsf{C}$ 中一族对象。
则对象 $x\in\mathsf{C}$ 为这些 $x_\alpha$ 的**余积**，
当且仅当对任意 $y\in\mathsf{C}$，诱导的映射
\[
\operatorname{Hom}_{\mathsf{C}}(x,y)\to\prod_\alpha\operatorname{Hom}_{\mathsf{C}}(x_\alpha,y)
\]
都是同伦等价。
:::

::: proof
我们有一个映射 $A\to\mathsf{C}$，$\alpha\mapsto x_\alpha$。
命题中映射的右边等价于
\[
\prod_\alpha{}(\mathsf{C}_{x_\alpha/})_y
\simeq (\mathsf{C}_{A/})_y,
\]
其中下标 $y$ 表示取到 $\mathsf{C}$ 的映射的纤维。
左边等价于
\[
(\mathsf{C}_{x/})_y\simeq((\mathsf{C}_{A/})_{x/})_y,
\]
这是由 @thm-6-c。
然后，观察到 $x$ 是余积当且仅当左纤维化
\[
(\mathsf{C}_{A/})_{x/}\to\mathsf{C}_{A/}
\]
是平凡纤维化，
当且仅当其纤维都可缩，
当且仅当所有的左纤维化
\[
((\mathsf{C}_{A/})_{x/})_y\to(\mathsf{C}_{A/})_y
\]
都是平凡纤维化。
:::

上述关于余积的结论其实有更一般的版本，
我们下面来解释这件事。

设 $\mathsf{K}$ 是充实于 Kan 复形的范畴。
则单纯充实函子构成的范畴
\[
\operatorname{Fun}_{\mathsf{sSet}}(\mathsf{K},\mathsf{sSet})
\]
带有两种模型结构：

- **投射模型结构**，
  其弱等价和纤维化是逐点定义的，
  而余纤维化由提升性质定义。

- **内射模型结构**，
  其弱等价和余纤维化是逐点定义的，
  而纤维化由提升性质定义。

常值函子
\[
\operatorname{const}\colon\mathsf{sSet}\to\operatorname{Fun}_{\mathsf{sSet}}(\mathsf{K},\mathsf{sSet})
\]
关于投射模型结构是右 Quillen 的，
而关于内射模型结构是左 Quillen 的。
因此，余极限函子
\[
\operatorname{colim}\colon\operatorname{Fun}_{\mathsf{sSet}}(\mathsf{K},\mathsf{sSet})\to\mathsf{sSet}
\]
关于投射模型结构是左 Quillen 的，因为它是常值函子的左伴随；
极限函子
\[
\operatorname{lim}\colon\operatorname{Fun}_{\mathsf{sSet}}(\mathsf{K},\mathsf{sSet})\to\mathsf{sSet}
\]
关于内射模型结构是右 Quillen 的，因为它是常值函子的右伴随。

::: definition [单纯集的同伦（余）极限]
设 $\mathsf{K}$ 是充实于 Kan 复形的范畴。

- **同伦余极限**函子
  \[
  \operatorname{hocolim}\colon\operatorname{Ho}(\operatorname{Fun}_{\mathsf{sSet}}(\mathsf{K},\mathsf{sSet}))\to\operatorname{Ho}(\mathsf{sSet})
  \]
  定义为左 Quillen 函子
  \[
  \operatorname{colim}\colon\operatorname{Fun}_{\mathsf{sSet}}(\mathsf{K},\mathsf{sSet})\to\mathsf{sSet},
  \]
  的左导出函子，其中 $\operatorname{Fun}_{\mathsf{sSet}}(\mathsf{K},\mathsf{sSet})$
  带有投射模型结构。

- **同伦极限**函子
  \[
  \operatorname{holim}\colon\operatorname{Ho}(\operatorname{Fun}_{\mathsf{sSet}}(\mathsf{K},\mathsf{sSet}))\to\operatorname{Ho}(\mathsf{sSet})
  \]
  定义为右 Quillen 函子
  \[
  \operatorname{lim}\colon\operatorname{Fun}_{\mathsf{sSet}}(\mathsf{K},\mathsf{sSet})\to\mathsf{sSet},
  \]
  的右导出函子，其中 $\operatorname{Fun}_{\mathsf{sSet}}(\mathsf{K},\mathsf{sSet})$
  带有内射模型结构。

:::

::: example
如本节开头所说，同伦推出
\[
\{*\}\underset{\{*,*\}}{\sqcup}\{*\}
\]
的结果是 $S^1$ 的同伦类。我们稍后再来证明这件事。
:::

有了单纯集的同伦极限的概念，
我们可以用它来定义一般的 Kan 复形充实范畴中的同伦（余）极限。

对 Kan 复形充实范畴 $\mathsf{K}$，
记 $\mathsf{K}^\vartriangleright$ 为在 $\mathsf{K}$ 中添加一个终对象 $\infty$
而得到的 Kan 复形充实范畴，其中有
\[
\operatorname{Hom}_{\mathsf{K}^\vartriangleright}(x,\infty)=\{*\}\quad(x\in\mathsf{K}^\vartriangleright),\quad
\operatorname{Hom}_{\mathsf{K}^\vartriangleright}(\infty,x)=\varnothing\quad(x\in\mathsf{K}).\quad
\]
同理可定义 $\mathsf{K}^\vartriangleleft$。

::: definition [Kan 复形充实范畴中的同伦（余）极限]
设 $\mathsf{C}$ 和 $\mathsf{K}$ 是 Kan 复形充实范畴，
$f\colon\mathsf{K}\to\mathsf{C}$ 是函子。

- $f$ 的一个**同伦余极限**是指函子
  \[
  \bar f\colon\mathsf{K}^\vartriangleright\to\mathsf{C},
  \]
  满足 $\bar f|_{\mathsf{K}}=f$，且对任意 $y\in\mathsf{C}$，诱导的映射
  \[
  \operatorname{Hom}_{\mathsf{C}}(\bar f(\infty),y)\to\mathop{\operatorname{holim}}\limits_{k\in\mathsf{K}}\operatorname{Hom}_{\mathsf{C}}(f(k),y)
  \]
  都是弱同伦等价。

- $f$ 的一个**同伦极限**是指函子
  \[
  \bar f\colon\mathsf{K}^\vartriangleleft\to\mathsf{C},
  \]
  满足 $\bar f|_{\mathsf{K}}=f$，且对任意 $y\in\mathsf{C}$，诱导的映射
  \[
  \operatorname{Hom}_{\mathsf{C}}(y,\bar f(\infty))\to\mathop{\operatorname{holim}}\limits_{k\in\mathsf{K}}\operatorname{Hom}_{\mathsf{C}}(y,f(k))
  \]
  都是弱同伦等价。

:::

上述定义可以看成是 $\infty$-范畴中（余）极限的定义
在 Kan 复形充实范畴的模型中的明确形式。
下面的定理说明了这一点。

::: theorem {@thm-6-x}
设 $\mathsf{C}$ 和 $\mathsf{K}$ 是 Kan 复形充实范畴，
$f\colon\mathsf{K}\to\mathsf{C}$ 是函子。
则拟范畴间的函子
\[
\mathfrak Nf\colon\mathfrak N\mathsf{K}\to\mathfrak N\mathsf{C}
\]
有（余）极限，当且仅当 $f$ 有同伦（余）极限，
并且此时两种（余）极限的概念相同。
:::

见 [@HTT, Theorem 4.2.4.1]。

这也说明，对拟范畴间的函子 $f\colon\mathsf{K}\to\mathsf{C}$ 而言，
它的（余）极限可以通过 Kan 复形充实范畴间的函子
\[
R\mathfrak Cf\colon R\mathfrak C\mathsf{K}\to R\mathfrak C\mathsf{C}
\]
的同伦（余）极限来计算，这里 $R$ 是单纯集的纤维性替换。
这是因为范畴等价保持（余）极限。

::: example
设 $\mathsf{K}=\Lambda_0[2]$。此时有同构
$\mathsf{K}^\vartriangleright\simeq\Delta[1]\times\Delta[1]$。
图表 $\mathsf{K}\to\mathsf{C}$ 的余极限就称为（同伦）**推出**，
它构成 $\mathsf{C}$ 里的一个方块，即映射 $\Delta[1]\times\Delta[1]\to\mathsf{C}$。
我们用通常的记号 $y\sqcup_xz$ 来表示推出。
由上述定理，对任意 $w \in \mathsf{C}$，我们有
\[
\operatorname{Hom}_{\mathsf{C}}\bigl(y\underset{x}{\sqcup}z,w\bigr)\simeq
\operatorname{Hom}_{\mathsf{C}}(y,w)\underset{\operatorname{Hom}_{\mathsf{C}}(x,w)}{\times}\operatorname{Hom}_{\mathsf{C}}(z,w)
\]
其中右边是 Kan 复形的同伦拉回。
:::

作为推论，我们能得到一个说明何时普通推出等于同伦推出的条件。

::: proposition {@thm-6-hpo}
设 $\mathsf{C}$ 是单纯模型范畴。考虑 $\mathsf{C}$ 中的普通推出
\[
\begin{tikzcd}
  x\ar[r]\ar[d]\ar[dr,phantom,pos=.7,"\lrcorner"] & y\ar[d] \\
  z\ar[r] & y\underset{x}{\sqcup}z \rlap{ .}
\end{tikzcd}
\]
如果映射 $x\to y$ 是余纤维化，
那么这个普通推出就等价于同伦推出。
:::

::: proof [证明概要]
证明的关键是说明映射
\[
\operatorname{Hom}_{\mathsf{C}}(y,w) \to \operatorname{Hom}_{\mathsf{C}}(x,w)
\]
是单纯集的纤维化，
因为单纯集有如下性质：沿着纤维化的拉回就等价于同伦拉回。
我们略去细节。
:::

这一命题给我们提供了在单纯模型范畴中计算同伦推出的简便方法。
也就是说，要计算 $y\sqcup_xz$，我们首先找到弱等价 $y\to y'$，
使得复合映射 $x\to y\to y'$ 是余纤维化，
然后再计算普通推出 $y'\sqcup_xz$，
这样得到的就是同伦推出 $y \sqcup_x z$。
例如，在 $\mathsf{Top}$ 中，有同伦推出
\[
\{*\}\underset{X}{\sqcup}\{*\}\simeq\Sigma X.
\]

::: remark
对单纯模型范畴而言，
$\infty$-范畴的（余）极限其实等于普通（余）极限函子的导出函子，
只要后者能够定义，也就是投射模型结构或内射模型结构存在。
:::

最后，我们介绍一个直接计算同伦（余）极限的公式。
它用到了范畴的（余）端的概念，不熟练的读者可以跳过这段。

::: proposition
设 $f\colon\mathsf{K}\to\mathsf{C}$ 是 Kan 复形充实范畴间的函子。
设 $\mathsf{C}$ 是 $\mathsf{sSet}$-张量、余张量的。
例如，当 $\mathsf{C}$ 是单纯模型范畴时，就一定满足这个条件。

- $f$ 的同伦余极限等于单纯充实范畴中的余端
  \[
  \operatorname{hocolim}f\simeq\int^{k\in\mathsf{K}}\mathfrak{N}(\mathsf{K}_{k/})\otimes f(k),
  \]
  其中 $\otimes$ 来自 $\mathsf{C}$ 的 $\mathsf{sSet}$-张量结构。

- $f$ 的同伦极限等于单纯充实范畴中的端
  \[
  \operatorname{holim}f\simeq\int_{k\in\mathsf{K}}f(k)^{\mathfrak{N}(\mathsf{K}_{/k})},
  \]
  其中的幂函子来自 $\mathsf{C}$ 的 $\mathsf{sSet}$-余张量结构。

:::

::: example
设拓扑群 $G$ 作用于拓扑空间 $X$。
则**同伦商** $X/{}^{\mathrm h}G$ 定义为
\[
X/{}^{\mathrm h}G:=(X\times EG)/G,
\]
其中 $EG$ 是 $BG$ 上的万有 $G$-主丛。
在我们的观点下，同伦商就是函子
\[
\mathsf{B}G\to\mathsf{Top},
\]
的同伦余极限，其中 $\mathsf{B}G$ 表示只有一个对象的单纯群胚，
其态射空间是 $\operatorname{Sing}G$。
:::

## 伴随函子

在普通范畴论中，伴随函子是重要的工具。
例如，极限和余极限都可以看成伴随函子的特例。
在 $\infty$-范畴中，也有一种同伦意义下的伴随函子。

::: definition
设 $\mathsf{C},\mathsf{D}$ 是拟范畴，设
\[
F\colon\mathsf{C}\to\mathsf{D},\quad G\colon\mathsf{D}\to\mathsf{C}
\]
为两个函子。称 $F$ 和 $G$ 为一对**伴随函子**，
如果有函子的等价
\[
\operatorname{Hom}_{\mathsf{D}}(F-,-)\simeq\operatorname{Hom}_{\mathsf{C}}(-,G-)\colon\mathsf{C}^{\mathrm{op}}\times\mathsf{D}\to\mathsf{S}.
\]
这句话的准确意思是，函子
\[
\operatorname{Hom}_{\mathfrak C\mathsf{D}}(F-,-)\quad\text{和}\quad\operatorname{Hom}_{\mathfrak C\mathsf{C}}(-,G-)
\]
是范畴
\[
\operatorname{Fun}_{\mathsf{sSet}}(\mathfrak C(\mathsf{C}^{\mathrm{op}}\times\mathsf{D}),\mathsf{sSet}),
\]
中弱等价的对象，这里我们采用投射模型结构。
:::

为理解伴随函子的性质，我们下面叙述两种等价定义。

::: definition
设 $\mathsf{C}$ 是拟范畴。

- 拟范畴
  \[
  \mathscr P(\mathsf{C}):=\operatorname{Fun}(\mathsf{C}^{\mathrm{op}},\mathsf{S})
  \]
  称为 $\mathsf{C}$ 上**预层**的范畴，
  其中 $\mathsf{S}:=\mathfrak N(\mathsf{Kan})$。

- 映射
  \[
  \begin{aligned}
    Y\colon\mathsf{C}&\to\mathscr P(\mathsf{C}),\\
    x&\mapsto h_x:=\operatorname{Hom}_{\mathsf{C}}(-,x)
  \end{aligned}
  \]
  称为 **Yoneda 嵌入**。
  准确地说，这个映射由单纯充实函子
  \[
  \begin{aligned}
    \mathfrak C(\mathsf{C}\times\mathsf{C}^{\mathrm{op}})&\to\mathsf{Kan},\\
    (x,y)&\mapsto R\operatorname{Hom}_{\mathfrak C\mathsf{C}}(y,x)
  \end{aligned}
  \]
  通过伴随 $\mathfrak{C} \dashv \mathfrak{N}$ 给出，
  其中 $R$ 是纤维性替换。

- $\mathsf{C}$ 上的预层称为**可表**的，
  如果它等价于某个 $h_x$，其中 $x\in\mathsf{C}$。

:::

通过 Grothendieck 构造（@thm-5-gc），
$\mathsf{C}$ 上的预层等价于到 $\mathsf{C}$ 的右纤维化：
对 $F\in\mathscr P(\mathsf{C})$，右纤维化
\[
\operatorname{Un}_{\mathsf{C}}F\to\mathsf{C}
\]
于每个 $x\in\mathsf{C}$ 的纤维都等价于 $F(x)$。

::: definition
设 $\mathsf{C}$ 是拟范畴。
右纤维化 $X\to\mathsf{C}$ 称为**可表**的，
如果预层
\[
\operatorname{St}_{\mathsf{C}}X\in\mathscr P(\mathsf{C})
\]
可表。
:::

由定义，可表右纤维化都形如
$\operatorname{Un}_{\mathsf{C}}h_x$。
考察其纤维，我们发现它逐纤维等价于 $\mathsf{C}_{/x}$，
也就是在 $\mathsf{sSet}_{/\mathsf{C}}$ 的
反变模型结构中弱等价（@thm-5-gc）。

::: proposition {@thm-6-rrf}
到 $\mathsf{C}$ 的可表右纤维化都在 $\mathsf{sSet}_{/\mathsf{C}}$
中等价于 $\mathsf{C}_{/x}$，
其中 $x\in\mathsf{C}$ 是将其表出的对象。
:::

::: proposition
设 $\mathsf{C}$ 是拟范畴，
$p\colon\tilde{\mathsf{C}}\to\mathsf{C}$ 是右纤维化。

- $p$ 可表当且仅当 $\tilde{\mathsf{C}}$ 有终对象。

- 对象 $x\in\mathsf{C}$ 将 $p$ 表出，
  当且仅当存在 $\tilde{\mathsf{C}}$ 的终对象 $\tilde x$，
  满足 $p(\tilde x)=x$。

特别地，$\mathsf{C}$ 中所有将 $p$ 表出的对象张成的满子范畴
要么为空，要么是可缩 Kan 复形。
:::

::: proof
只需证明第二条。

设 $x$ 将 $p$ 表出。
则在 $\mathsf{sSet}_{/\mathsf{C}}$ 中 $\tilde{\mathsf{C}}\simeq\mathsf{C}_{/x}$，
而对象 $\mathbb{1}_x\in\mathsf{C}_{/x}$ 就是终对象。

反过来，设这样的 $\tilde{x}$ 存在。
作为练习，读者可以证明映射
\[
\tilde{\mathsf{C}}_{/\tilde{x}} \to \mathsf{C}_{/x}
\]
是单纯集的平凡纤维化。
但 $\tilde{x}$ 是终对象，
因此有平凡纤维化 $\tilde{\mathsf{C}}_{/\tilde{x}}\to\tilde{\mathsf{C}}$，
故有到 $\mathsf{C}$ 的右纤维化的等价
\[
\tilde{\mathsf{C}} \simeq \tilde{\mathsf{C}}_{/\tilde{x}} \simeq \mathsf{C}_{/x}.
\]
因此，$p$ 由 $x$ 表出。
:::

与上述理论对偶，也有可表左纤维化的概念：
称左纤维化 $p\colon X\to\mathsf{C}$ **可表**，
如果右纤维化 $p^{\mathrm{op}}\colon X^{\mathrm{op}}\to\mathsf{C}^{\mathrm{op}}$ 可表。

下面，我们可以给出伴随函子的等价定义了。

::: proposition {@thm-6-d}
设 $\mathsf{C},\mathsf{D}$ 为拟范畴。
则 $\mathsf{C}$ 与 $\mathsf{D}$ 之间的一对伴随函子等价于一个左纤维化
\[
p\colon X\to\mathsf{C}^{\mathrm{op}}\times\mathsf{D},
\]
满足以下条件：

- $p$ **左可表**：
  对任何 $x\in\mathsf{C}$，
  \[
  p|_{x\times\mathsf{D}}\colon p^{-1}(x\times\mathsf{D})\to x\times\mathsf{D}
  \]
  是可表左纤维化。

- $p$ **右可表**：
  对任何 $y\in\mathsf{D}$，
  \[
  p|_{\mathsf{C}^{\mathrm{op}}\times y}\colon p^{-1}(\mathsf{C}^{\mathrm{op}}\times y)\to \mathsf{C}^{\mathrm{op}}\times y
  \]
  是可表左纤维化。

事实上，$p$ 由函子
\[
\operatorname{Hom}_{\mathsf{D}}(F-,-)\simeq\operatorname{Hom}_{\mathsf{C}}(-,G-)\colon\mathsf{C}^{\mathrm{op}}\times\mathsf{D}\to\mathsf{S}
\]
的 Grothendieck 构造给出。
:::

::: proof
如命题中所述，如果有一对伴随函子，就能造出具有上述性质的左纤维化 $p$。

反过来，设有满足这些性质的左纤维化 $p$。
对 $x\in\mathsf{C}$，我们希望把 $Fx$
定义为一个能表出 $p|_{x\times\mathsf{D}}$ 的对象，
也就是 $p^{-1}(x\times\mathsf{D})$ 的一个始对象。
这可以用以下办法做到。
考虑 $X$ 中由所有这样的始对象张成的满子范畴 $Y \subset X$。
可以证明 $Y\to\mathsf{C}^{\mathrm{op}}$ 是平凡纤维化
（证明的方法是用 Grothendieck 构造的性质，读者可以试试），
从而 $F$ 可以取成该平凡纤维化的任一截面。
函子 $G$ 可以同理构造。
:::

::: proposition
设 $\mathsf{C},\mathsf{D}$ 为拟范畴。
则 $\mathsf{C}$ 与 $\mathsf{D}$ 间的一对伴随函子等价于一个拟范畴的映射
\[
p\colon M\to\Delta[1],
\]
满足以下性质：

- 有范畴等价
  $p^{-1}(0)\simeq\mathsf{C}$ 和 $p^{-1}(1)\simeq\mathsf{D}$。

- $p$ 是推出纤维化。

- $p$ 是拉回纤维化。

事实上，$M$ 由 $\mathfrak N\mathsf{M}$ 给出，
其中 $\mathsf{M}$ 是如下定义的 Kan 复形充实范畴：

- 对象：二元组 $(x,0)$，其中 $x\in\mathsf{C}$，及二元组 $(y,1)$，其中 $y\in\mathsf{D}$。

- 态射空间：
  \[
  \begin{aligned}
    \operatorname{Hom}_{\mathsf{M}}((x,0),(y,0)) &:= \operatorname{Hom}_{R\mathfrak C\mathsf{C}}(x,y), \\
    \operatorname{Hom}_{\mathsf{M}}((x,1),(y,1)) &:= \operatorname{Hom}_{R\mathfrak C\mathsf{D}}(x,y), \\
    \operatorname{Hom}_{\mathsf{M}}((x,0),(y,1)) &:= \operatorname{Hom}_{R\mathfrak C\mathsf{D}}(Fx,y)\simeq\operatorname{Hom}_{R\mathfrak C\mathsf{C}}(x,Gy), \\
    \operatorname{Hom}_{\mathsf{M}}((x,1),(y,0)) &:= \varnothing.
  \end{aligned}
  \]

:::

::: proof
从这样的 $M$ 出发不难还原出原来的伴随函子，
因为推出纤维化、拉回纤维化通过 Grothendieck 构造就能给出
$\mathsf{C}$ 与 $\mathsf{D}$ 之间的转移函子。

还需证明，这一过程确实是命题中所述构造 $M$ 的过程的逆过程。
我们略去这些验证。
:::

::: proposition
设 $\mathsf{K},\mathsf{C}$ 为拟范畴。
假设任意函子 $\mathsf{K}\to\mathsf{C}$ 都有余极限。
则常值函子
\[
\operatorname{const}\colon\mathsf{C}\to\operatorname{Fun}(\mathsf{K},\mathsf{C})
\]
具有左伴随，也就是余极限函子。
:::

::: proof
我们用 @thm-6-d 给出的伴随函子的等价定义。
函子 $\operatorname{const}$ 给出一个右可表的左纤维化
\[
X \to \operatorname{Fun}(\mathsf{K},\mathsf{C})^{\mathrm{op}} \times \mathsf{C}.
\]
还需证明它是左可表的。但注意到
\[
X|_{f\times\mathsf{C}} \simeq \mathsf{C}_{f/},
\]
故左可表等价于 $\mathsf{C}_{f/}$ 有始对象，
即 $\mathsf{C}$ 中存在余极限。
:::

::: remark
设 $\mathsf{C},\mathsf{D}$ 为单纯模型范畴，
$(F\dashv G)$ 为它们之间的 Quillen 伴随。
则 $F$ 和 $G$ 也给出拟范畴
$\mathfrak N(\mathsf{C}_{\mathrm{cf}})$ 和
$\mathfrak N(\mathsf{D}_{\mathrm{cf}})$ 之间的伴随函子。
:::
