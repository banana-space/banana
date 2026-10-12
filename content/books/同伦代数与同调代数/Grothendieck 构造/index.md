---
title: Grothendieck 构造
---

设有范畴间的函子 $f\colon X\to S$。
则对每个 $s \in S$，可以考虑纤维 $X_s = f^{-1}(s)$，
它是 $X$ 的子范畴。
这是一种将 $S$ 的对象映到范畴的操作。
我们可以问，这种操作什么时候给出一个 $S \to \mathsf{Cat}$ 的函子。

事实上，如果 $f$ 是某种“纤维化”（具体见下文），
那么上述构造就能给出函子，
这就称为 **Grothendieck 构造**。
也就是说，有如下的对应关系：
\[
\begin{tikzcd}
  X \ar[d, "\text{纤维化}"'] &
  {} \ar[d, phantom, pos=.4, "\Longleftrightarrow"] &
  \mathsf{Cat} \\
  S & {} & S \ar[u, "\text{取纤维}"']
\end{tikzcd}
\]

在开始之前，
我们先来看一个代数几何中的例子。

::: example {@eg-5-q}
记 $\mathsf{Sch}$ 为概形范畴。
对概形 $X$，记 $\mathsf{QCoh}_X$ 为 $X$ 上拟凝聚层范畴。
这给出了函子
\[
\mathsf{QCoh}_{(-)}\colon\mathsf{Sch}^{\mathrm{op}}\to\mathsf{Cat}.
\]

仔细想想，会发现这实际上并不是函子，
因为复合律
\[
f^*\circ g^*=(g\circ f)^*
\]
只在相差自然同构的意义下成立，
即相差 $\mathsf{Cat}$ 中 $2$-态射的意义下成立。
这样的“函子”称为 **$2$-函子**。

我们可以对这个 $2$-函子使用 Grothendieck 构造，
而得到一个“纤维化”，记为
\[
\mathsf{QCoh}\to\mathsf{Sch}^{\mathrm{op}},
\]
其于 $X\in\mathsf{Sch}^{\mathrm{op}}$ 上的纤维是范畴 $\mathsf{QCoh}_X$。
事实上，我们可以直接构造一个所有拟凝聚层的范畴 $\mathsf{QCoh}$ 如下：

- 其对象为二元组 $(X,\mathscr F)$，
  其中 $X$ 是概形，
  $\mathscr F$ 是 $X$ 上的拟凝聚层。

- 从 $(X,\mathscr F)$ 到 $(Y,\mathscr G)$ 的态射为二元组 $(f, g)$，
  其中 $f\colon Y\to X$ 是概形态射，
  $g$ 是 $\mathscr O_Y$-模同态 $f^*\mathscr F\to\mathscr G$，或等价地说，
  $g$ 是 $\mathscr O_X$-模同态 $\mathscr F\to f_*\mathscr G$。

我们有遗忘函子 $\mathsf{QCoh}\to\mathsf{Sch}^{\mathrm{op}}$，
它就是我们想要构造的“纤维化”。
这就是我们即将定义的**推出纤维化**的一个例子。
:::

我们将研究以下四种纤维化，
它们对应于范畴到 $\mathsf{Cat}$ 的函子，
其中 $\mathsf{Gpd}$ 表示群胚的范畴。

| 纤维化 | 名称 | 函子 |
| :---: | :---: | :---: |
| 左纤维化 $X\to S$ | 群胚余纤维范畴 | $S\to\mathsf{Gpd}$ |
| 右纤维化 $X\to S$ | 群胚纤维范畴 | $S^{\mathrm{op}}\to\mathsf{Gpd}$ |
| 推出纤维化 $X\to S$ | 余纤维范畴 | $S\to\mathsf{Cat}$ |
| 拉回纤维化 $X\to S$ | 纤维范畴 | $S^{\mathrm{op}}\to\mathsf{Cat}$ |

## 群胚纤维范畴

我们先来看左纤维化，也就是群胚余纤维范畴。
此时，对每个 $s \in S$，纤维 $X_s$ 应该是群胚；
对 $S$ 中每个态射 $s \to s'$，
应该有纤维间的转移映射 $X_s \to X_{s'}$。
为了使这些转移映射能够定义，
我们需要映射 $p\colon X\to S$ 满足下列性质：

- **对象的转移**：
  对任何 $x\in X$，及 $S$ 中任何态射 $\alpha\colon s\to s'$，
  其中 $s=p(x)$，
  存在 $X$ 中态射 $\tilde\alpha\colon x\to x'$，使得 $p(\tilde\alpha)=\alpha$。
  画成图表，就是说有提升性质
  \[
  \begin{tikzcd}
    x\ar[d, dotted, dash] & &
    {} \ar[d, phantom, "\Longrightarrow"] &
    x\ar[r, dashed]\ar[d, dotted, dash] & x' \ar[d, dotted, dash] \\
    s \ar[r] & s' &
    {} &
    s \ar[r] & s' \rlap{\,.}
  \end{tikzcd}
  \]

- **态射的转移**：
  有唯一提升性质
  \[
  \begin{tikzcd}
    x\ar[d]\ar[r] & x' &
    {} \ar[dd, phantom, "\Longrightarrow"] &
    x\ar[d]\ar[r] & x'\ar[d,dashed] \\
    y\ar[d,dotted,dash]\ar[r] & y'\ar[d,dotted,dash] & &
    y\ar[d,dotted,dash]\ar[r] & y'\ar[d,dotted,dash] \\
    s \ar[r] & s' & {} &
    s \ar[r] & s' \rlap{\,.}
  \end{tikzcd}
  \]

不难看出，如果满足了上述两条性质，
那么转移映射 $X_s\to X_{s'}$ 就能良好定义，
并且在相差自然同构的意义下是唯一的。
这是因为，我们可以先选择一种转移对象的方式，
然后态射的转移就能唯一确定。

以下定义是上述两条性质的重新叙述。

::: definition
范畴间的函子 $p\colon X\to S$ 称为**左纤维化**，
如果它满足下列性质：

- 有提升性质
  \[
  \begin{tikzcd}
    \Lambda_0[1] \ar[d] \ar[r] & X \ar[d] \\
    \Delta[1] \ar[r] \ar[ur,dashed] & S \rlap{\,.}
  \end{tikzcd}
  \]

- 有唯一提升性质
  \[
  \begin{tikzcd}
    \Lambda_0[2] \ar[d] \ar[r] & X \ar[d] \\
    \Delta[2] \ar[r] \ar[ur,dashed] & S \rlap{\,.}
  \end{tikzcd}
  \]

其中，记号 $\Lambda_0[n]$ 和 $\Delta[n]$
表示它们对应的普通范畴，
准确地说是 $\operatorname{Ho}(\Lambda_0[n])$ 和 $\operatorname{Ho}(\Delta[n])$。
:::

读者可以证明，这一定义等价于前面所述的两条转移性质。

::: remark
第二条公理中的唯一性实际上是
$\Lambda_0[3]$ 的提升性质的推论。
因此，在无穷范畴中，提升的唯一性将会被高阶的提升性质取代。
:::

在上述定义中，若将映射 $\Delta[2]\to S$ 取成 $s \in S$ 处常值映射，
则可发现，纤维 $X_s$ 中的每个态射都有左逆，从而 $X_s$ 必为群胚。

上述讨论总结如下。

::: theorem [Grothendieck 构造]
设 $p \colon X \to S$ 为小范畴间的左纤维化。
则取 $p$ 的纤维给出一个 $2$-函子 $S\to\mathsf{Gpd}$。
反过来，每个 $2$-函子 $S\to\mathsf{Gpd}$
都对应于一个左纤维化 $X\to S$。
:::

::: proof
只需再证明最后一句话。
该构造与 @eg-5-q 的方法相同。
:::

类似地，函子 $p\colon X\to S$ 称为**右纤维化**，
若 $p^{\mathrm{op}}\colon X^{\mathrm{op}}\to S^{\mathrm{op}}$ 为左纤维化。
在 Grothendieck 构造下，
右纤维化对应于 $2$-函子 $S^{\mathrm{op}}\to\mathsf{Gpd}$。

## 群胚纤维无穷范畴

接下来，我们来对无穷范畴定义 Grothendieck 构造。
定义好之后，我们就可以用它来证明，
对拟范畴 $\mathsf{C}$ 中的对象 $x, y$，有同伦等价
\[
\operatorname{Hom}_{\mathsf{C}}^{\vartriangleleft}(x,y) \simeq
\mathfrak C \mathsf{C} (x,y) \simeq
\operatorname{Hom}_{\mathsf{C}}^{\vartriangleright}(x,y)
\]

::: definition
单纯集的映射 $p\colon X\to S$ 称为**左纤维化**，
如果对任何 $0\leq i< n$，都有提升性质
\[
\begin{tikzcd}
  \Lambda_i[n] \ar[d] \ar[r] & X \ar[d] \\
  \Delta[n] \ar[r] \ar[ur,dashed] & S \rlap{\,.}
\end{tikzcd}
\]

类似地，$p$ 称为**右纤维化**，
如果对任何 $0<i\leq n$，都有上述提升性质。
:::

上述定义是普通范畴中相应概念的自然推广。

::: proposition
设 $X$ 是单纯集。
那么，映射 $X\to*$ 是左纤维化当且仅当 $X$ 是 Kan 复形。
:::

::: proof
右边蕴涵左边是显然的，我们来证明另一边。
设 $X\to*$ 是左纤维化。
则 $X$ 是拟范畴，且普通范畴 $\operatorname{Ho}(X)$ 中，每个态射都有左逆，
从而 $\operatorname{Ho}(X)$ 是群胚。
由 @thm-4-j，$X$ 一定是 Kan 复形。
:::

设 $S$ 为单纯集，
记 $\mathsf{sSet}_{/S}$ 为[[俯范畴]]，定义如下：

- 其对象为映射 $X\to S$。

- 从 $X\to S$ 到 $Y\to S$ 的态射为一映射 $X\to Y$，
  使下图交换：
  \[
  \begin{tikzcd}[column sep=.5em]
    X\ar[rr]\ar[dr] && Y\ar[dl] \\
    & S\rlap{\ .}
  \end{tikzcd}
  \]

根据 Lurie [@HTT] 的方法，
我们即将定义一对伴随函子
\[
\begin{tikzcd}[column sep=3em]
  \mathsf{sSet}_{/S}\ar[r,bend left,start anchor=north east,end anchor=north west,"\operatorname{St}"]
  \ar[r,phantom,"\bot"] &
  \mathsf{Fun}_{\mathsf{sSet}}(\mathfrak CS,\mathsf{sSet})\ ,
  \ar[l,bend left,start anchor=south west,end anchor=south east,"\operatorname{Un}"]
\end{tikzcd}
\]
其中 $\mathsf{Fun}_{\mathsf{sSet}}$
表示单纯集充实函子构成的（普通）范畴。
这对伴随函子将会具有以下性质：

- 函子 $\operatorname{St}$ 称为**拉直**（straightening）。
  对于左纤维化而言，该函子将给出其 Grothendieck 构造。

- 函子 $\operatorname{Un}$ 称为**还原**（unstraightening）。
  对于函子 $\mathfrak CS\to\mathsf{Kan}$，
  也就是 $S\to\mathfrak N(\mathsf{Kan})$，
  该函子将给出反向 Grothendieck 构造。

- 在合适的模型结构下，
  伴随函子对 $(\operatorname{St}\dashv\operatorname{Un})$
  将成为 Quillen 等价。

下面，我们开始构造。

::: definition
设 $X,Y$ 为单纯集。其**连结**（join）
为单纯集 $X \star Y$，其 $n$ 维单形为
\[
(X\star Y)_n = \Biggl\{(f,\sigma_0,\sigma_1)\Biggm|
\begin{aligned}
  f&\colon\Delta[n]\to\Delta[1]\\[-3pt]
  \sigma_0&\colon f^{-1}(0)\to X\\[-3pt]
  \sigma_1&\colon f^{-1}(1)\to Y\\[-3pt]
\end{aligned}\Biggr\},
\]
其面映射和退化映射以自然的方式定义。
:::

换言之，$X \star Y$ 就是向 $X\sqcup Y$
添加所有可能的从 $X$ 到 $Y$ 的箭头和高维箭头，而得到的单纯集。
例如，我们有
\[
\Delta[n]\star\Delta[m]\simeq\Delta[n+m+1].
\]

特别地，对单纯集 $X$，
我们分别定义 $X$ 的**右锥**和**左锥**为
\[
\begin{aligned}
  X^\vartriangleright &= X\star\{\infty\}, \\
  X^\vartriangleleft &= \{\infty\}\star X,
\end{aligned}
\]
其中 $\{\infty\}$ 是一个单点集，
点 $\infty$ 称为**锥顶点**。

::: definition [构造]
设 $X\to S$ 为单纯集间的映射。我们如下定义函子
\[
\operatorname{St}_SX\colon\mathfrak CS\to\mathsf{sSet} .
\]
对 $s\in S$，定义
\[
(\operatorname{St}_SX)(s) = \operatorname{Hom}_M(\infty,s),
\]
其中，单纯范畴 $M$ 定义为
\[
M = \mathfrak C\bigl(X^\vartriangleleft\mathop{\sqcup}_XS\bigr).
\]

这一构造过程也可以描述如下：
首先，在 $X$ 的左边添加点 $\infty$，得到 $X^\vartriangleleft$。
接下来，对每个 $s\in S$，将纤维 $X_s$ 压缩成一个点。
这样得到的范畴就是 $M$，它也就是将 $X^\vartriangleleft$ **拉直**得到的范畴。
此时，态射空间 $M (\infty, s)$
保存了关于纤维 $X_s$ 的信息，
因为它由所有从 $\infty$ 到 $X_s$ 的态射构成。
我们将看到，如果 $X\to S$ 是左纤维化，
那么该态射空间就弱同伦等价于 $X_s$。
:::

::: definition [构造]
设 $F\colon\mathfrak CS\to\mathsf{sSet}$ 为单纯范畴之间的函子。
我们来构造左纤维化
\[
\operatorname{Un}_SF\to S,
\]
从而 $\operatorname{Un}_S$ 成为 $\operatorname{St}_S$ 的右伴随。
我们定义
\[
(\operatorname{Un}_SF)_n:=\biggl\{(\sigma,f)\biggm|
\begin{aligned}
  \sigma&\colon\Delta[n]\to S\\[-3pt]
  f&\colon\operatorname{St}_S\sigma\to F\\[-3pt]
\end{aligned}\biggr\},
\]
它带有到 $S$ 的自然映射。

换言之，其 $n$ 维单形也就是
“从 $\Delta[n]$ 到 $F$ 的映射”，
但准确地说，这里 $\Delta[n]$ 应该换成其 Grothendieck 构造，
也就是 $\operatorname{St}_S\Delta[n]$。
这解释了如此构造的原因。
:::

由上述构造，函子 $\operatorname{St}_S$ 与 $\operatorname{Un}_S$
确实构成伴随函子
\[
\begin{tikzcd}[column sep=3em]
  \mathsf{sSet}_{/S}\ar[r,bend left,start anchor=north east,end anchor=north west,"\operatorname{St}_S"]
  \ar[r,phantom,"\bot"] &
  \mathsf{Fun}_{\mathsf{sSet}}(\mathfrak CS,\mathsf{sSet})\ .
  \ar[l,bend left,start anchor=south west,end anchor=south east,"\operatorname{Un}_S"]
\end{tikzcd}
\]
有时，我们也会忽略下标 $S$，直接将这两个函子记为
$\operatorname{St}$ 与 $\operatorname{Un}$。

::: example {@eg-5-pt}
我们来考虑最简单的情况，即 $S=\{*\}$ 的情况。
此时，Grothendieck 构造将到 $\{*\}$ 的纤维化对应于其纤维。
我们猜测，对应关系
\[
\begin{tikzcd}[column sep=3em]
  \mathsf{sSet}\ar[r,bend left,start anchor=north east,end anchor=north west,"\operatorname{St}_{\{*\}}"]
  \ar[r,phantom,"\bot"] &
  \mathsf{sSet}
  \ar[l,bend left,start anchor=south west,end anchor=south east,"\operatorname{Un}_{\{*\}}"]
\end{tikzcd}
\]
应该将每个单纯集对应到与之等价的单纯集。

由定义，我们有
\[
\operatorname{St}_{\{*\}}\Delta[n]\simeq
\bigl( \mathfrak C(\Delta[n]/\Delta[n-1]) \bigr) (0,*),
\]
其中 $\Delta[n-1]\hookrightarrow\Delta[n]$
是后者的第 $0$ 个面 $\{1,\dotsc,n\}$，
而 $\Delta[n]/\Delta[n-1]$ 是在 $\Delta[n]$
中将第 $0$ 个面 $\Delta[n-1]$ 压缩成一个点而得到的单纯集；
我们将这个点记为 $*$。

我们定义 $\mathsf{sSet}$ 中的余单纯对象（即余单纯单纯集）$Q^\bullet$ 如下：
\[
Q^n = \bigl( \mathfrak C(\Delta[n]/\Delta[n-1]) \bigr) (0,*).
\]
则伴随函子
$(\operatorname{St}_{\{*\}}\dashv\operatorname{Un}_{\{*\}})$
在 @con-3-a 的意义下由 $Q^\bullet$ 给出。
经过仔细计算（我们在此忽略，见 [@HTT, Remark 2.2.2.6]），
我们发现有拓扑空间的同胚
\[
|Q^n|\simeq\Delta^n,
\]
并且它与两个余单纯对象的面映射相容（但不与退化映射相容）。
由此可以推出，对任何 $X\in\mathsf{sSet}$，都有同胚
\[
|{\operatorname{St}_{\{*\}}X}|\simeq|X|,
\]
从而 $\operatorname{St}_{\{*\}}X$ 弱等价于 $X$。

该计算也说明
$\operatorname{St}_{\{*\}}$ 保持余纤维化、平凡余纤维化，
从而 $(\operatorname{St}_{\{*\}}\dashv\operatorname{Un}_{\{*\}})$
是 Quillen 等价。
:::

对一般的 $S\in\mathsf{sSet}$，我们有如下结论：

::: theorem {@thm-5-g}
范畴 $\mathsf{sSet}_{/S}$
具有**协变模型结构**（covariant model structure），其中

- $\mathsf{W}$ 的成员是所有映射 $X\to Y$，使得诱导的映射
  \[
  X^\vartriangleleft \mathop{\sqcup}_X S \to
  Y^\vartriangleleft \mathop{\sqcup}_Y S
  \]
  是范畴等价。

- $\mathsf{Cof}=\{\text{单射}\}$。

- $\mathsf{Fib}\subset\{\text{左纤维化}\}$。

- 纤维性对象为 $S$ 上的左纤维化。

范畴 $\mathsf{Fun}_{\mathsf{sSet}}(\mathfrak CS,\mathsf{sSet})$
具有**投射模型结构**（projective model structure），其中

- $\mathsf{W}=\{\text{逐点弱等价}\}$。

- $\mathsf{Fib}=\{\text{逐点纤维化}\}$。

- $\mathsf{Cof}$ 由提升性质确定。

在上述模型结构下，伴随函子对
\[
\begin{tikzcd}[column sep=3em]
  \mathsf{sSet}_{/S}\ar[r,bend left,start anchor=north east,end anchor=north west,"\operatorname{St}_S"]
  \ar[r,phantom,"\bot"] &
  \mathsf{Fun}_{\mathsf{sSet}}(\mathfrak CS,\mathsf{sSet})
  \ar[l,bend left,start anchor=south west,end anchor=south east,"\operatorname{Un}_S"]
\end{tikzcd}
\]
是 Quillen 等价。
:::

见 [@HTT, Theorem 2.2.1.2]。

::: corollary [Grothendieck 构造] {@thm-5-gc}
函子
\[
\begin{tikzcd}
  \smash{\mathsf{LFib}_{/S}}\vphantom{1_1}\ar[r,bend left,start anchor=north east,end anchor=north west,"R\operatorname{St}_S"] &
  \mathsf{Fun}_{\mathsf{sSet}}(\mathfrak CS,\mathsf{Kan})\ar[l,bend left,start anchor=south west,end anchor=south east,"\operatorname{Un}_S"]
\end{tikzcd}
\]
在相差弱等价的意义下互为逆函子，其中

- $R$ 是
  $\mathsf{Fun}_{\mathsf{sSet}}(\mathfrak CS,\mathsf{sSet})$
  的纤维性替换函子。

- $\mathsf{LFib}_{/S}$ 是 $S$ 上左纤维化的范畴，
  它是 $\mathsf{sSet}_{/S}$ 的满子范畴。

- $\mathsf{LFib}_{/S}$ 中的弱等价为逐纤维的同伦等价。

- $\mathsf{Fun}_{\mathsf{sSet}}(\mathfrak CS,\mathsf{Kan})$
  中的弱等价为逐点的同伦等价。

:::

::: proof
设 $X\to S$ 为左纤维化，设 $F\colon\mathfrak CS\to\mathsf{Kan}$ 为函子。
则单位、余单位映射
\[
\operatorname{Un}_SR\operatorname{St}_SX\to X\quad\text{和}\quad
F\to\operatorname{St}_SQ\operatorname{Un}_SF
\]
都是范畴等价（@thm-2-z）。
这里 $Q$ 可取成恒同函子，从而映射
\[
\operatorname{Un}_SR\operatorname{St}_SX\to X\quad\text{和}\quad
F\to R\operatorname{St}_S\operatorname{Un}_SF
\]
都是弱等价。
至于 $\mathsf{LFib}_{/S}$ 中弱等价的描述，
见 [@HTT, Corollary 2.2.3.13]。
:::

::: remark
类似地，对右纤维化而言，在 $\mathsf{sSet}_{/S}$
上有**反变模型结构**（contravariant model structure），
并且有 Quillen 等价
\[
\begin{tikzcd}[column sep=3em]
  \mathsf{sSet}_{/S}\ar[r,bend left,start anchor=north east,end anchor=north west,"\operatorname{St}_S"]
  \ar[r,phantom,"\bot"] &
  \mathsf{Fun}_{\mathsf{sSet}}(\mathfrak CS^{\mathrm{op}},\mathsf{sSet})\ ,
  \ar[l,bend left,start anchor=south west,end anchor=south east,"\operatorname{Un}_S"]
\end{tikzcd}
\]
其中 $\mathsf{Fun}_{\mathsf{sSet}}(\mathfrak CS^{\mathrm{op}},\mathsf{sSet})$
带有投射模型结构。
:::

下面，我们来证明一个我们想要的性质，
也就是左纤维化的 Grothendieck 构造确实给出该纤维化的纤维。

::: proposition {@thm-5-s}
- 设 $X\to S$ 为左纤维化。
  则对每个 $s\in S$，有弱同伦等价
  \[
  (\operatorname{St}_SX)(s)\simeq X_s.
  \]

- 设 $F\colon\mathfrak CS\to\mathsf{Kan}$ 为函子。
  则对每个 $s\in S$，有 Kan 复形的同伦等价
  \[
  (\operatorname{Un}_SF)_s\simeq F(s).
  \]

:::

::: proof
先证明第二部分。由还原函子的定义，有
\[
(\operatorname{Un}_SF)_s \simeq
\operatorname{Un}_{\{s\}}F(s) \simeq F(s),
\]
其中第二个等价使用了 @eg-5-pt。

再证明第一部分。由 @thm-5-gc，
我们有 $S$ 上左纤维化的弱等价
\[
X \mathrel{\rlap{\raisebox{.8ex}{$\mkern2mu\sim$}}{\to}} \operatorname{Un}_S R \operatorname{St}_S X,
\]
也就是逐纤维的同伦等价。
从而，对每个 $s \in S$，有
\[
X_s \simeq (\operatorname{Un}_SR\operatorname{St}_SX)_s.
\]
由第二部分，我们就完成了证明。
:::

下面，我们通过 Grothendieck 构造来研究拟范畴的态射空间。

设 $\mathsf{C}$ 是拟范畴，$K$ 是单纯集。
设 $p\colon K\to\mathsf{C}$ 是单纯集的映射，
我们看作 $\mathsf{C}$ 中的交换图表。

::: definition
**俯范畴** $\mathsf{C}_{/K}$ 是一个拟范畴，其 $n$ 维单形为
\[
(\mathsf{C}_{/K})_n =
\bigl\{\sigma\colon\Delta[n]\star K\to\mathsf{C}\bigm|\sigma|_K=p\bigr\}.
\]
类似地，**仰范畴** $\mathsf{C}_{K/}$ 是一个拟范畴，定义为
\[
(\mathsf{C}_{K/})_n =
\bigl\{\sigma\colon K\star\Delta[n]\to\mathsf{C}\bigm|\sigma|_K=p\bigr\}.
\]
:::

以下是 @thm-5-s 的推论。

::: corollary
设 $\mathsf{C}$ 为拟范畴，设 $x,y\in\mathsf{C}$。则
\[
\operatorname{Hom}_{\mathsf{C}}^\vartriangleleft(x,y)\simeq
(\operatorname{St}_{\mathsf{C}}\mathsf{C}_{x/})(y).
\]
:::

并且，我们还有以下性质。

::: proposition
设 $\mathsf{C}$ 为拟范畴，设 $x,y\in\mathsf{C}$。则
\[
(\operatorname{St}_{\mathsf{C}}\mathsf{C}_{x/})(y)\simeq
\mathfrak C\mathsf{C} (x,y).
\]
:::

::: proof
由拉直函子的定义，有
\[
\mathfrak C\mathsf{C} (x,y) \simeq
(\operatorname{St}_{\mathsf{C}}\{x\})(y).
\]
因此，只需证明函子的映射
\[
\operatorname{St}_{\mathsf{C}}\{x\} \to
\operatorname{St}_{\mathsf{C}}\mathsf{C}_{x/}
\]
是弱等价。事实上，我们可以证明它是平凡余纤维化。
为此，只需证明含入映射
\[
\{x\} \hookrightarrow \mathsf{C}_{x/}
\]
是 $\mathsf{sSet}_{/\mathsf{C}}$ 中的平凡余纤维化，
也就是对左纤维化具有左提升性质。
这是因为，该映射是
\[
\{\infty\} \hookrightarrow (\mathsf{C}_{x/})^\vartriangleleft
\]
的一个收缩（retract），
而此映射具有我们想要的左提升性质，
因为它可以通过不断沿左尖角粘贴单形而得到。
:::

通过上述两个命题，我们得到了弱等价
\[
\operatorname{Hom}_{\mathsf{C}}^\vartriangleleft(x,y)\simeq
\mathfrak C\mathsf{C} (x,y).
\]
类似地，对右纤维化进行同样的论述，
也能得到这种等价。将这些结论组合起来，就证明了下面的定理。

::: theorem {@thm-5-h}
设 $\mathsf{C}$ 为拟范畴，设 $x,y\in\mathsf{C}$。则
\[
\operatorname{Hom}_{\mathsf{C}}^\vartriangleleft(x,y)\simeq
\mathfrak C\mathsf{C} (x,y)\simeq
\operatorname{Hom}_{\mathsf{C}}^\vartriangleright(x,y).
\]
:::

以上就是 Grothendieck 构造的第一个应用。

## 纤维范畴

下面，我们简要介绍四种纤维化中的另两种，
即推出纤维化与拉回纤维化。

设 $p\colon X\to S$ 为普通范畴之间的函子。
$X$ 中态射 $f\colon x\to y$ 称为 **$p$-推出**（$p$-cocartesian morphism），
如果有“推出方块”
\[
\begin{tikzcd}
  x\ar[d,dotted,dash]\ar[r,"f"] & y\ar[d,dotted,dash] \\
  p(x)\ar[r,"p(f)"]\ar[ur,phantom,end anchor=south west,near end,"\urcorner"] & p(y)\rlap{\,.}
\end{tikzcd}
\]
准确地说，态射 $x\to y$ 具有以下泛性质：
对任何实线图表
\[
\begin{tikzcd}[row sep=1em]
  && z\ar[dd,dotted,dash] \\
  x\ar[dd,dotted,dash]\ar[r,"f"']\ar[urr,"g",pos=.4]
  & y\ar[dd,dotted,dash]\ar[ur,dashed,end anchor=south west,"\smash{\exists!\ \tilde h}\vphantom{:}"'] \\
  && p(z) \\
  p(x)\ar[r,"p(f)"']\ar[urr,"p(g)",pos=.4]
  & p(y)\rlap{\,,} \ar[ur,"h"']
\end{tikzcd}
\]
存在唯一的态射 $\tilde h\colon y\to z$，
使得 $\tilde hf=g$ 且 $p(\tilde h)=h$。

这一定义可以重新表述如下。

::: definition
设 $p\colon X\to S$ 为普通范畴间的函子。
$X$ 中态射 $f\colon x\to y$ 称为 **$p$-推出**，
如果在图表
\[
\begin{tikzcd}
  \Lambda_0[2] \ar[d] \ar[r] & X \ar[d] \\
  \Delta[2] \ar[r] \ar[ur,dashed] & S
\end{tikzcd}
\]
中，
只要满足 $\Lambda_0[2]$ 的边 $[0,1]$ 被映到 $X$ 中的边 $f$，
那么图表就有唯一提升。
:::

::: definition
函子 $p\colon X\to S$ 称为**推出纤维化**（cocartesian fibration），
如果 $X$ 具有所有“从 $S$ 出发的推出”：
\[
\begin{tikzcd}
  x\ar[d,dotted,dash] & &
  {} \ar[d,phantom,"\Longrightarrow"] &
  x\ar[r,dashed]\ar[d,dotted,dash] & x'\ar[d,dotted,dash] \\
  s \ar[r] & s' & {} &
  s \ar[r]\ar[ur,phantom,end anchor=south west,very near end,"\urcorner"] & s'\rlap{\,.}
\end{tikzcd}
\]
准确地说，对任何 $x\in X$ 和 $S$ 中任何态射 $\alpha\colon s\to s'$，
其中 $s=p(x)$，
存在 $X$ 中的 $p$-推出 $\tilde\alpha\colon x\to x'$，
使得 $p(\tilde\alpha) = \alpha$。
:::

推出纤维化使得我们可以直接定义纤维间的转移函子（细节留给读者）。
因此，我们就得到了下面的定理。

::: theorem [Grothendieck 构造]
设 $p \colon X \to S$ 为小范畴间的推出纤维化。
则取 $p$ 的纤维给出一个 $2$-函子 $S\to\mathsf{Cat}$。
反过来，每个 $2$-函子 $S\to\mathsf{Cat}$
都对应于一个推出纤维化 $X \to S$。
:::

类似地，函子 $p\colon X\to S$ 称为**拉回纤维化**，
若 $p^{\mathrm{op}}\colon X^{\mathrm{op}}\to S^{\mathrm{op}}$ 为推出纤维化。
在 Grothendieck 构造下，
拉回纤维化对应于 $2$-函子 $S^{\mathrm{op}}\to\mathsf{Cat}$。

## 纤维无穷范畴

上述推出纤维化的定义能够自然地推广到拟范畴上。

::: definition
设 $p\colon X\to S$ 是拟范畴间的函子。
$X$ 中态射 $f\colon x\to y$ 称为 **$p$-推出**，
如果在图表
\[
\begin{tikzcd}
  \Lambda_0[n] \ar[d] \ar[r] & X \ar[d] \\
  \Delta[n] \ar[r] \ar[ur,dashed] & S
\end{tikzcd}
\]
中，
只要满足 $\Lambda_0[n]$ 的边 $[0,1]$ 被映到 $X$ 中的边 $f$，
那么图表就有提升。
:::

与之前一样，对于拟范畴，我们不再要求提升的唯一性，
因为高维（即 $n$ 更大时）的提升性质保证了这一点。

下面，我们来定义拟范畴的推出纤维化。

::: definition
拟范畴间的函子 $p\colon X\to S$ 称为**推出纤维化**，如果

- 对任何 $0<i<n$，我们有提升性质
  \[
  \begin{tikzcd}
    \Lambda_i[n] \ar[d] \ar[r] & X \ar[d] \\
    \Delta[n] \ar[r] \ar[ur,dashed] & S \rlap{\,.}
  \end{tikzcd}
  \]
  也就是说，$p$ 是**内纤维化**（inner fibration）。

- $X$ 具有“从 $S$ 出发的推出”：
  \[
  \begin{tikzcd}
    x\ar[d,dotted,dash] & &
    {} \ar[d,phantom,"\Longrightarrow"] &
    x\ar[r,dashed]\ar[d,dotted,dash] & x'\ar[d,dotted,dash] \\
    s \ar[r] & s' & {} &
    s \ar[r]\ar[ur,phantom,end anchor=south west,very near end,"\urcorner"] & s'\rlap{\,.}
  \end{tikzcd}
  \]
  准确地说，对任何 $x\in X$ 和 $S$ 中任何态射 $\alpha\colon s\to s'$，
  其中 $s=p(x)$，
  存在 $X$ 中的 $p$-推出 $\tilde\alpha\colon x\to x'$，
  使得 $p(\tilde\alpha) = \alpha$。

:::

其中，第一条性质是任何普通范畴间的函子都满足的。
我们需要这一性质，才能保证 $p$ 的纤维都是拟范畴。

::: proposition
态射 $X\to S$ 是左纤维化，
当且仅当它是推出纤维化，
并且 $X$ 的每条边都是 $p$-推出。
:::

为了得到拟范畴的 Grothendieck 构造，
我们需要使用拉直、还原函子的“标记”版本。
这一构造过程简述如下。

::: definition {@def-marked-sset}
**标记单纯集**（marked simplicial set）
指二元组 $(X, E)$，
其中 $X$ 为单纯集，$E \subset X_1$ 为一些**标记边**（marked edge），
使得所有退化边都是标记边。

所有标记单纯集构成的范畴记为 $\mathsf{sSet}^+$，
其中态射要求把标记边都映到标记边。
:::

对单纯集 $X$，记 $X^\sharp$ 为所有边均为标记边的 $X$；
记 $X^\flat$ 为仅标记退化边的 $X$。
我们记 $\mathsf{sSet}^+_{/S} = \mathsf{sSet}^+_{/S^\sharp}$。

::: theorem
在合适的模型结构下，我们有 Quillen 等价
\[
\begin{tikzcd}[column sep=3em]
  \mathsf{sSet}^+_{/S}\ar[r,bend left,start anchor=north east,end anchor=north west,"\operatorname{St}_S^+"]
  \ar[r,phantom,"\bot"] &
  \vphantom{\mathsf{sSet}^+_{/S}}
  \mathsf{Fun}_{\mathsf{sSet}}(\mathfrak CS,\mathsf{sSet}^+)\ .
  \ar[l,bend left,start anchor=south west,end anchor=south east,"\operatorname{Un}_S^+"]
\end{tikzcd}
\]
并且，

- $\operatorname{Un}_S^+$ 将所有到
  $\mathsf{QCat}\simeq(\mathsf{sSet}^+)_{\mathrm{cf}}$
  的函子映到推出纤维化。

- $\operatorname{St}_S^+$ 恢复出推出纤维化的纤维
  （在相差范畴等价的意义下）。

:::

见 [@HTT, Theorem 3.2.0.1]。

::: corollary [Grothendieck 构造]
函子
\[
\begin{tikzcd}
  \smash{\mathsf{CocFib}_{/S}}\vphantom{1_1}\ar[r,bend left,start anchor=north east,end anchor=north west,"R\operatorname{St}_S^+"] &
  \mathsf{Fun}_{\mathsf{sSet}}(\mathfrak CS,\mathsf{QCat})\ar[l,bend left,start anchor=south west,end anchor=south east,"\operatorname{Un}_S^+"]
\end{tikzcd}
\]
在相差弱等价的意义下互为逆函子，其中

- $R$ 是
  $\mathsf{Fun}_{\mathsf{sSet}}(\mathfrak CS,\mathsf{sSet}^+)$
  的纤维性替换函子。

- $\mathsf{CocFib}_{/S}$ 是 $S$ 上推出纤维化的范畴，
  它是 $\mathsf{sSet}_{/S}$ 的满子范畴。

- $\mathsf{CocFib}_{/S}$ 中的弱等价为逐纤维的范畴等价。

- $\mathsf{Fun}_{\mathsf{sSet}}(\mathfrak CS,\mathsf{QCat})$
  中的弱等价为逐点的范畴等价。

:::

::: example
设 $S=\mathsf{QCat}_\infty$ 为拟范畴的拟范畴，
设 $F=(-)^\flat\in\mathsf{Fun}(S,\mathsf{sSet}^+)$
为含入函子。
则推出纤维化
\[
\operatorname{Un}_S^+ (F) = \mathscr Z \to \mathsf{QCat}_\infty
\]
可以看作是**万有纤维化**，因为任何推出纤维化都等价于它的一个拉回。
事实上，对任何推出纤维化 $X\to T$，
我们有**分类映射**（classifying map）
\[
f=\operatorname{St}_T^+ (X) \colon T\to\mathsf{QCat}_\infty,
\]
从而
\[
X\simeq f^*\mathscr Z,
\]
这是因为 $X$ 和 $f^*\mathscr Z$ 都是 $S$ 上的推出纤维化，
并且它们的纤维相同。
:::
