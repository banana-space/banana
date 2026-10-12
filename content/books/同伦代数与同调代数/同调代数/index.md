---
title: 同调代数
---

在本节中，我们的研究对象是链复形及其构成的 $\infty$-范畴。
我们将把同伦代数的理论应用到同调代数，
从而以更高的观点来看待同调代数中的一些结论。

## dg 脉

本节介绍 **dg 脉**的构造，
它是一种自然的将 dg 范畴视为 $\infty$-范畴的方法。

::: definition
设 $R$ 是交换环。
则 $R$ 上的 **dg 范畴**是指充实于对称幺半范畴 $(\mathsf{Ch}_R, \otimes)$ 的充实范畴。
:::

这里“dg”是英文“微分分次”的缩写。
链复形也称为 dg 向量空间（或 dg 模）。

::: definition
设 $\mathsf{C}$ 是 $R$ 上的 dg 范畴。

- $\mathsf{C}$ 的**底范畴**由 $\mathsf{C}$ 通过函子
  \[
  Z^0\colon(\mathsf{Ch}_R, \otimes) \to (\mathsf{Set}, \times)
  \]
  而得到，该函子将链复形映至其 $0$-上圈之集，即闭 $0$-上链之集。

- $\mathsf{C}$ 的**同伦范畴**由 $\mathsf{C}$ 通过函子
  \[
  H^0\colon(\mathsf{Ch}_R, \otimes) \to (\mathsf{Set}, \times)
  \]
  而得到，该函子将链复形映至其第 $0$ 阶上同调。

:::

例如，若 $\mathsf{C} = \mathsf{Ch}_R$，
则 $\mathsf{C}$ 充实于自身，如 @eg-1-c 中所述，从而是 $R$ 上的 dg 范畴。
其底范畴即为普通的链复形范畴 $\mathsf{Ch}_R$，
而其同伦范畴即为普通的范畴 $\mathsf{hCh}_R$。

我们现在希望定义拟范畴 $\mathfrak{N}_{\mathrm{dg}}(\mathsf{C})$，
使得其中的同伦是链同伦，高阶同伦是高阶链同伦，如此等等。

一个简单的想法是考虑以下伴随序列：
\[
\begin{tikzcd}[column sep={7em,between origins}]
  \smash{\mathsf{sSet}}\vphantom{|}
  \ar[r,bend left=40,start anchor=north east,end anchor=north west,"\mathfrak{C}"]
  \ar[r,phantom,"\bot"] &
  \smash{\mathsf{Cat}_{\mathsf{sSet}}}\vphantom{|}
  \ar[l,bend left=40,start anchor=south west,end anchor=south east,"\mathfrak{N}"]
  \ar[r,bend left=40,start anchor=north east,end anchor=north west,"\text{free}"]
  \ar[r,phantom,"\bot"] &
  \smash{\mathsf{Cat}_{\mathsf{sMod}_R}}\vphantom{|}
  \ar[l,bend left=40,start anchor=south west,end anchor=south east,"\text{forget}"]
  \ar[r,bend left=40,start anchor=north east,end anchor=north west,"\mathrm{ꓘꓷ}"]
  \ar[r,phantom,"\simeq"] &
  \smash{\mathsf{Cat}_{(\mathsf{Ch}_R)_{\geq0}}}\vphantom{|}
  \ar[l,bend left=40,start anchor=south west,end anchor=south east,"\operatorname{DK}"]
  \ar[r,bend left=40,start anchor=north east,end anchor=north west,"i_{\geq0}"]
  \ar[r,phantom,"\bot"] &
  \smash{\mathsf{Cat}_{\mathsf{Ch}_R}\rlap{\ ,}}\vphantom{|}
  \ar[l,bend left=40,start anchor=south west,end anchor=south east,"\tau_{\geq0}"]
\end{tikzcd}
\]
并定义
\[
\mathfrak{N}_{\mathrm{dg}}:=\mathfrak{N}\circ\text{forget}\circ{\operatorname{DK}}\circ\tau_{\geq0}\colon\mathsf{Cat}_{\mathsf{Ch}_R}\to\mathsf{sSet}.
\]
我们将看到，其像落在 $\mathsf{QsCat}$ 中。

上述构造确实能给出正确的拟范畴，
但该拟范畴还有更直接的构造方法。
我们首先用更直接的方法定义 $\mathfrak{N}_{\mathrm{dg}}$，
然后证明这两种构造是等价的。

::: definition [构造]
设 $\mathsf{C}$ 是 dg 范畴。
则其 **dg 脉**是如下构造的拟范畴 $\mathfrak{N}_{\mathrm{dg}}(\mathsf{C})$：
其 $n$-单形是形如
\[
(\{X_i\}_{i\in[n]},\{f_I\}_{I\subset[n],|I|\geq2})
\]
的二元组，其中

- $X_0,\dotsc,X_n$ 是 $\mathsf{C}$ 的对象。

- 对于 $0\leq i_0<\cdots<i_{m+1}\leq n$，
  \[
  f_{i_0\cdots i_{m+1}}\in\operatorname{Hom}_{\mathsf{C}}(X_{i_0},X_{i_{m+1}})_m,
  \]
  使得
  \[
  df_{i_0\cdots i_{m+1}}=\sum_{j=1}^m(-1)^{m+1-j}
  \bigl(f_{i_0\cdots\widehat{i_j}\cdots i_{m+1}}-f_{i_j\cdots i_{m+1}}\circ f_{i_0\cdots i_j}\bigr).
  \]

例如，

- $0$-单形即为 $\mathsf{C}$ 的对象 $X \in \mathsf{C}$。

- 连接 $X,Y\in\mathsf{C}$ 的 $1$-单形是态射
  \[
  f_{01}\in\operatorname{Hom}_{\mathsf{C}}(X,Y)_0\quad\text{使得}\quad df_{01}=0.
  \]
  换言之，$f_{01}$ 就是 $\mathsf{C}$ 的底范畴中的态射。

- $2$-单形
  \[
  \begin{tikzcd}[column sep=1em]
    & Y\ar[dr,"g"] \\
    X\ar[ur,"f"]\ar[rr,"h"'] && Z
  \end{tikzcd}
  \]
  是链同伦
  \[
  \alpha:=f_{012}\in\operatorname{Hom}_{\mathsf{C}}(X,Z)_1\quad\text{使得}\quad d\alpha=g\circ f-h.
  \]

我们将 $\mathfrak{N}_{\mathrm{dg}}(\mathsf{C})$ 中面映射、退化映射的定义留给读者。
读者可以验证其为拟范畴。
:::

::: proposition
设 $\mathsf{C}$ 是 dg 范畴。则对任意 $X,Y\in\mathsf{C}$，
有单纯集同构
\[
\operatorname{Hom}_{\mathfrak{N}_{\mathrm{dg}}(\mathsf{C})}^{\vartriangleright}(X,Y)\simeq\operatorname{DK}(\tau_{\geq0}\operatorname{Hom}_{\mathsf{C}}(X,Y)).
\]
:::

::: proof
等式两边的 $0$-单形均为底范畴中的态射，即 $\operatorname{Hom}_{\mathsf{C}}(X,Y)_0$。

对 $1$-单形，等式左边的 $1$-单形是形如
\[
\begin{tikzcd}[row sep=.5em]
  X \ar[dd,"\mathbb{1}"'] \ar[dr,"f"] \\
  \ \ar[r,phantom,pos=.3,"\alpha"] & Y \rlap{\ ,} \\
  X \ar[ur,"g"']
\end{tikzcd}
\]
的图表，可以写成求和
\[
\begin{tikzcd}[row sep=.5em]
  X \ar[dd,"\mathbb{1}"'] \ar[dr,"f"] \\
  \ \ar[r,phantom,pos=.3,"0"] & Y \\
  X \ar[ur,"f"']
\end{tikzcd} \quad+\quad \begin{tikzcd}[row sep=.5em]
  X \ar[dd,"0"'] \ar[dr,"0"] \\
  \ \ar[r,phantom,pos=.3,"\alpha"] & Y \rlap{\ ,} \\
  X \ar[ur,"g-f"']
\end{tikzcd}
\]
其中第一部分由 $f$ 确定，第二部分由 $\alpha$ 确定。
由此可得
\[
\begin{aligned}
  \operatorname{Hom}_{\mathfrak{N}_{\mathrm{dg}}(\mathsf{C})}^{\vartriangleright}(X,Y)_1
  &\simeq Z_0\bigl(\operatorname{Hom}_{\mathsf{C}}(X,Y)\bigr) \oplus \operatorname{Hom}_{\mathsf{C}}(X,Y)_1 \\
  &\simeq \operatorname{DK}(\tau_{\geq0}\operatorname{Hom}_{\mathsf{C}}(X,Y))_1.
\end{aligned}
\]

对于更高阶单形，可以类似验证。
细节留给读者。
:::

::: corollary
设 $\mathsf{C}$ 是 dg 范畴。则有范畴等价
\[
\mathfrak{N}_{\mathrm{dg}}(\mathsf{C})\simeq
\mathfrak{N}\circ\mathrm{forget}\circ{\operatorname{DK}}\circ\tau_{\geq0}(\mathsf{C}).
\]
:::

特别地，函子 $\mathfrak{N}_{\mathrm{dg}}$ 是一个右伴随。
事实上，它关于 dg 范畴的范畴上的某个模型结构是右 Quillen 函子。

::: theorem
范畴 $\mathsf{Cat}_{\mathsf{Ch}_R}$ 具有 **Tabuada 模型结构**，其中

- 弱等价是诱导同伦范畴之等价，且在所有态射空间上诱导拟同构的函子。

- 纤维化是诱导同伦范畴之同纤维化（isofibration），且在所有态射空间上诱导（逐次）满射的函子。

函子
\[
\mathfrak{N}_{\mathrm{dg}}\colon\mathsf{Cat}_{\mathsf{Ch}_R}\to\mathsf{sSet}
\]
关于此模型结构和 $\mathsf{sSet}$ 上的 Joyal 模型结构是右 Quillen 函子。
:::

## 链复形的 $\infty$-范畴

::: definition
设 $\mathsf{A}$ 是 Abel 范畴。
则 $\mathfrak{N}_{\mathrm{dg}}(\mathsf{Ch}(\mathsf{A}))$ 称为 $\mathsf{A}$ 中的**链复形的
$\infty$-范畴**，
其中 $\mathsf{Ch}(\mathsf{A})$ 视为 $\mathbb{Z}$ 上的 dg 范畴。
:::

在本节中，我们详细研究此 $\infty$-范畴，
并描述其中的推出和拉回。
我们将证明它是稳定 $\infty$-范畴。

::: proposition {@thm-9-k}
设 $f\colon X\to Y$ 是单纯 Abel 群范畴 $\mathsf{sAb}$ 中的态射。
则 $f$ 是 $\mathsf{sSet}$ 中的纤维化，
当且仅当映射
\[
\mathrm{ꓘꓷ}(f)\colon\mathrm{ꓘꓷ}(X)\to\mathrm{ꓘꓷ}(Y)
\]
是链复形的逐次满射。
:::

::: proof
设 $0\leq i\leq n$。则有分解
\[
\mathrm{ꓘꓷ}(\mathbb{Z}\Delta[n]) \simeq \mathrm{ꓘꓷ}(\mathbb{Z}\Lambda_i[n]) \oplus D^n,
\]
其中
\[
D^n := \Bigl(\cdots\to0\to\mathbb{Z}\xrightarrow{1}\mathbb{Z}\to0\to\cdots\Bigr),
\]
其中两个非零项在（同调指标下）第 $n$ 和 $n-1$ 位置。
以下的提升性质等价：
\[
\begin{tikzcd}
  \Lambda_i[n] \ar[r]\ar[d] & X \ar[d] \\
  \Delta[n]\ar[r]\ar[ur,dashed] & Y
\end{tikzcd} \enspace\iff\enspace \begin{tikzcd}[column sep=2em]
  \mathrm{ꓘꓷ}(\Lambda_i[n]) \ar[r]\ar[d] & \mathrm{ꓘꓷ}(X) \ar[d] \\
  \mathrm{ꓘꓷ}(\Delta[n])\ar[r]\ar[ur,dashed] & \mathrm{ꓘꓷ}(Y)
\end{tikzcd} \enspace\iff\enspace \begin{tikzcd}
  0 \ar[r]\ar[d] & \mathrm{ꓘꓷ}(X) \ar[d] \\
  D^n \ar[r]\ar[ur,dashed] & \mathrm{ꓘꓷ}(Y)\rlap{\ .}
\end{tikzcd}
\]
因为从 $D^n$ 到任何链复形 $C$ 的映射等价于 $C_n$ 中的元素，
所以最后一个图表中的提升性质等价于 $\mathrm{ꓘꓷ}(X)\to\mathrm{ꓘꓷ}(Y)$ 是逐次满射。
:::

::: corollary {@thm-9-s}
每个单纯 Abel 群都是 Kan 复形。
:::

::: corollary {@cor-9-o}
设
\[
\begin{tikzcd}
  X\ar[r,"f"]\ar[d]\ar[dr,phantom,pos=.75,"\lrcorner"] & X'\ar[d] \\
  Y\ar[r] & Y'
\end{tikzcd}
\]
是 $\mathsf{Ch}(\mathsf{A})$ 中的普通推出图表。
若 $f$ 逐次是分裂单射，
则此图表也是同伦推出图表，
即 $\mathfrak{N}_{\mathrm{dg}}(\mathsf{Ch}(\mathsf{A}))$ 中的推出图表。
:::

::: proof
通过函子 ${\operatorname{DK}}\circ\tau_{\geq0}$
将 $\mathsf{Ch}(\mathsf{A})$ 视为单纯范畴。
由 @thm-9-s，它充实于 Kan 复形范畴。
由 @thm-6-x，只需证明对任何 $Z\in\mathsf{Ch}(\mathsf{A})$，图表
\[
\begin{tikzcd}
  \operatorname{Hom}_{\mathsf{Ch}(\mathsf{A})}(Y',Z) \ar[d] \ar[r] \ar[dr,phantom,pos=.25,"\ulcorner"] &
  \operatorname{Hom}_{\mathsf{Ch}(\mathsf{A})}(Y,Z) \ar[d] \\
  \operatorname{Hom}_{\mathsf{Ch}(\mathsf{A})}(X',Z) \ar[r,"f^*"'] &
  \operatorname{Hom}_{\mathsf{Ch}(\mathsf{A})}(X,Z)
\end{tikzcd}
\]
是 Kan 复形的同伦拉回图表。
由于对单纯集而言，我们知道沿纤维化的拉回是同伦拉回，
所以只需证明 $f^*$ 是纤维化。
由 @thm-9-k，只需证明 $f^*$（在作用 Dold–Kan 函子之前）是链复形的逐次满射。
这是因为 $f$ 是分裂单射。
:::

基于上述推论，我们可以直接地描述链复形的同伦余纤维。

对于 $X\in\mathsf{Ch}(\mathsf{A})$，记 $X\otimes D^1$ 为
$\mathsf{Ch}(\mathsf{A})$ 中由
\[
(X\otimes D^1)^n := X^{n+1} \oplus X^n, \qquad
d^n := \begin{pmatrix}
  -d^{n+1} & 0 \\ 1 & d^n
\end{pmatrix}
\]
定义的对象。
这称为 $X$ 的**锥**，它拟同构于 $0$。
事实上，若 $\mathsf{A} = \mathsf{Mod}_R$ 为交换环 $R$ 上的模范畴，
则 $X\otimes D^1$ 是 $X$ 与链复形
\[
D^1 := \Bigl(\cdots\to0\to R\xrightarrow{1}R\to0\to\cdots\Bigr)
\]
的张量积。

::: definition
设 $f\colon X\to Y$ 是 $\mathsf{Ch}(\mathsf{A})$ 中的态射。
$f$ 的**映射锥**是链复形 $\operatorname{cone}(f)$，
定义为普通推出
\[
\begin{tikzcd}
  X\ar[r]\ar[d,"f"']\ar[dr,phantom,pos=.75,"\lrcorner",end anchor={[xshift=-.5em]north}] & X\otimes D^1\ar[d] \\
  Y\ar[r] & \operatorname{cone}(f)\rlap{\ ,}
\end{tikzcd}
\]
它更直接地定义为
\[
\operatorname{cone}(f)^n \simeq X^{n+1} \oplus Y^n, \qquad
d^n := \begin{pmatrix}
  -d^{n+1}_X & 0 \\ f^{n+1} & d^n_Y
\end{pmatrix}.
\]
:::

这个同调代数中的重要构造
现在可以看作是 $\infty$-范畴中一般构造的特例，
即同伦余纤维的特例。

::: theorem
设 $f\colon X\to Y$ 是 $\mathsf{Ch}(\mathsf{A})$ 中的态射。
则 $f$ 的映射锥是 $f$ 的同伦余纤维：
\[
\begin{tikzcd}
  X\ar[r]\ar[d,"f"']\ar[dr,phantom,pos=.75,"\lrcorner",end anchor={[xshift=-.5em]north}] & 0\ar[d] \\
  Y\ar[r] & \operatorname{cone}(f)\rlap{\ .}
\end{tikzcd}
\]
特别地，$X$ 的纬悬同伦等价于其移位 $X[1]$。
换言之，有同伦推出图表
\[
\begin{tikzcd}
  X\ar[r]\ar[d,"f"']\ar[dr,phantom,pos=.75,"\lrcorner",end anchor={[xshift=-.5em]north}] & 0\ar[d] \\
  0\ar[r] & X[1]\rlap{\ .}
\end{tikzcd}
\]
:::

::: proof
这是 @cor-9-o 的推论。
:::

::: corollary
$\mathfrak{N}_{\mathrm{dg}}(\mathsf{Ch}(\mathsf{A}))$ 是稳定 $\infty$-范畴。
:::

::: proof
我们已经知道，纬悬函子 $\Sigma\simeq[1]$ 是可逆的。
由 @thm-7-s，只需验证同伦推出存在。
注意到任何映射 $f\colon X\to Y$ 都等价于逐次分裂单射
$X\hookrightarrow\operatorname{Cyl}(f)$，
其中 $\operatorname{Cyl}(f)$ 是同调代数中的映射柱。
:::
