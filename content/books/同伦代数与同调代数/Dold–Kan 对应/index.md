---
title: Dold–Kan 对应
---

接下来，我们使用同伦代数的工具来研究[[同调代数]]。
我们的目标是将同调代数视为同伦代数的特例。
为此，我们将阐述如何构造链复形的 $\infty$-范畴，
以及如何通过局部化得到 $\infty$-范畴版本的[[导出范畴]]。

在本节中，我们介绍 Dold–Kan 对应。
这是同调代数中的一个经典结论，
它说明 Abel 范畴 $\mathsf{A}$ 中链复形的范畴等价于 $\mathsf{A}$ 中单纯对象的范畴。
具体地说，有（普通）范畴的等价
\[
\mathsf{Ch}(\mathsf{A})_{\geq0}\xrightarrow[\textstyle\sim]{\operatorname{DK}}
\operatorname{Fun}(\mathbb{\Delta}^{\mathrm{op}},\mathsf{A}),
\]
其中 $\mathsf{Ch}(\mathsf{A})_{\geq0} \subset \mathsf{Ch}(\mathsf{A})$
是由在第 $0$ 项或其之前结束的链复形构成的全子范畴。
这一等价将链复形的同伦论与单纯集的同伦论联系起来。

## t 结构

::: definition
设 $\mathsf{C}$ 是三角范畴。
则 $\mathsf{C}$ 上的一个 **[[t 结构]]** 是指两个全子范畴
\[
\mathsf{C}^{\leq0},\ \mathsf{C}^{\geq0}\subset\mathsf{C},
\]
满足以下公理：若记
\[
\mathsf{C}^{\leq n}:=\mathsf{C}^{\leq0}[-n], \qquad
\mathsf{C}^{\geq n}:=\mathsf{C}^{\geq0}[-n],
\]
则

- $\mathsf{C}^{\leq0}$ 和 $\mathsf{C}^{\geq0}$
  关于同构封闭。

- $\mathsf{C}^{\leq0}\subset\mathsf{C}^{\leq1}$，且 $\mathsf{C}^{\geq1}\subset\mathsf{C}^{\geq0}$。

- 若 $X\in\mathsf{C}^{\leq0}$ 且 $Y\in\mathsf{C}^{\geq1}$，则
  $\operatorname{Hom}_{\mathsf{C}}(X,Y)=0$。

- 对每个 $X\in\mathsf{C}$，存在正合三角
  \[
  X^{\leq0} \longrightarrow X \longrightarrow X^{\geq1},
  \]
  其中 $X^{\leq0}\in\mathsf{C}^{\leq0}$ 且 $X^{\geq1}\in\mathsf{C}^{\geq1}$。

:::

例如，若 $\mathsf{C}=\mathsf{Ch}(\mathsf{A})$ 是某 Abel 范畴 $\mathsf{A}$ 中链复形的范畴，
则可取 $\mathsf{C}^{\leq0}$ 为所有满足 $X^n=0$（$n>0$）的链复形构成的范畴，
并类似定义 $\mathsf{C}^{\geq0}$。
前三条公理是显然的；对第四条，我们可取
\[
X^{\leq0}:=\tau^{\leq0}X,\quad X^{\geq1}:=\tau^{\geq1}X,
\]
其中 $\tau^{\leq n}$ 和 $\tau^{\geq n}$ 是截断函子，定义为
\[
\begin{aligned}
  \tau^{\leq n}X&:=\bigl(\cdots\to X^{n-2}\xrightarrow{d_{n-2}}X^{n-1}\xrightarrow{d_{n-1}}
  \operatorname{ker}d_{n}\to0\to\cdots\bigr), \\
  \tau^{\geq n}X&:=\bigl(\cdots\to0\to\operatorname{coker}d_{n-1}\xrightarrow{d_n}X^{n+1}
  \xrightarrow{d_{n+1}}X^{n+2}\to\cdots\bigr).
\end{aligned}
\]

::: remark
当 $X\in\mathsf{C}^{\leq0}$ 且 $Y\in\mathsf{C}^{\geq1}$ 时，
我们要求 $\operatorname{Hom}_{\mathsf{C}}(X,Y)=0$，
但不要求 $\operatorname{Hom}_{\mathsf{C}}(Y,X)=0$。
这里不能反过来的一个原因如下：
考虑 $\mathsf{C}=\mathsf{Ch}(\mathsf{A})$ 的例子。
此时，从 $Y$ 到 $X$ 的链映射只有零映射，
但可能存在非零的链同伦和高阶链同伦。
:::

::: notation
除了上面使用的上同调标号外，有时可能用同调标号更方便。
为此，我们引入以下记号。
对带 t 结构的三角范畴 $\mathsf{C}$，记
\[
\mathsf{C}_{\geq n}:=\mathsf{C}^{\leq-n},\quad\mathsf{C}_{\leq n}:=\mathsf{C}^{\geq-n}.
\]
我们有 $\mathsf{C}_{\geq n}=\mathsf{C}_{\geq0}[n]$，等等。
:::

::: definition
设 $\mathsf{C}$ 是稳定 $\infty$-范畴。
则 $\mathsf{C}$ 上的 **t 结构**就是指三角范畴 $\operatorname{Ho}(\mathsf{C})$ 上的 t 结构。
:::

t 结构的一个重要性质是，它使 $\mathsf{C}^{\geq n}$ 成为 $\mathsf{C}$ 的一个**局部化**，
即其等价于 $\mathsf{C}[\mathsf{W}^{-1}]$，其中 $\mathsf{W}$ 是 $\mathsf{C}$ 中某些态射的集合。

::: definition
设 $f\colon\mathsf{C}\to\mathsf{D}$ 是 $\infty$-范畴间的函子。
若 $f$ 具有全忠实的右伴随，则称 $f$ 是**局部化函子**。
:::

::: remark
这里的局部化函子的定义比我们之前所说的局部化，
即让 $\mathsf{C}$ 中某些态射变得可逆，要更窄。
实际上，若 $f$ 是上述新意义下的局部化函子，
则 $f$ 是通过使 $\mathsf{C}$ 中所有被映到 $\mathsf{D}$ 中等价的态射变得可逆而得到的。
证明见 [@HTT, 命题 5.2.7.12]。
:::

::: theorem
设 $\mathsf{C}$ 是带 t 结构的稳定 $\infty$-范畴，
$n\in\mathbb Z$。
则存在局部化函子
\[
\tau^{\geq n}\colon\mathsf{C}\longrightarrow\mathsf{C}^{\geq n},
\]
称为**截断函子**，它是含入函子的左伴随。
:::

::: proof
此处略去证明。见 [@HA, 命题 1.2.1.5]。
:::

作为推论，$\mathsf{C}$ 的子范畴 $\mathsf{C}^{\geq n}$
关于 $\mathsf{C}$ 中存在的极限封闭。
对偶地，$\mathsf{C}^{\leq n}$ 关于余极限封闭。

::: remark
我们可能还会希望 $\mathsf{C}$ 是子范畴 $\mathsf{C}_{\geq0}=\mathsf{C}^{\leq0}$ 的稳定化。
然而，根据 @rmk-7-o，这等价于
\[
\mathsf{C}\simeq\lim_{n\to+\infty}\mathsf{C}_{\geq-n}.
\]
例如，这对链复形范畴成立，
但对有界链复形的范畴不成立。
:::

::: definition
设 $\mathsf{C}$ 是带 t 结构的稳定 $\infty$-范畴。
则 $\mathsf{C}$ 的**心**定义为全子范畴
\[
\mathsf{C}^\heartsuit:=\mathsf{C}^{\geq0}\cap\mathsf{C}^{\leq0}\subset\mathsf{C}.
\]
我们还定义一族函子
\[
\pi_n\colon\mathsf{C}\longrightarrow\mathsf{C}^\heartsuit,
\]
定义为 $\pi_0:=\tau^{\geq0}\tau^{\leq0}\simeq\tau^{\leq0}\tau^{\geq0}$，
及 $\pi_n:=\pi_0\circ[-n]$。
:::

关于 $\tau^{\geq0}\tau^{\leq0}\simeq\tau^{\leq0}\tau^{\geq0}$ 的证明，
见 [@HA, 命题 1.2.1.10]。

例如，若 $\mathsf{C}=\mathsf{Ch}(\mathsf{A})$，
则 $\mathsf{C}^\heartsuit\simeq\mathsf{A}$，
且 $\pi_n$ 给出链复形的第 $(-n)$ 上同调群，
即链复形的第 $n$ 同调群。

## Dold–Kan 对应

设 $\mathsf{A}$ 是 Abel 范畴。
在本节中，我们定义 [[Dold–Kan 对应]]函子
\[
\operatorname{DK}\colon\mathsf{Ch}(\mathsf{A})_{\geq0}\longrightarrow\operatorname{Fun}(\mathbb{\Delta}^{\mathrm{op}},\mathsf{A}),
\]
并说明它是范畴等价。

::: definition (构造)
设 $\mathsf{A}$ 是 Abel 范畴，
并设 $X_\bullet\in\mathsf{Ch}(\mathsf{A})_{\geq0}$。
则单纯对象
\[
\operatorname{DK}_\bullet(X)\in\operatorname{Fun}(\mathbb{\Delta}^{\mathrm{op}},\mathsf{A})
\]
的定义如下图所示。

```tikz
\begin{tikzpicture}[>={Straight Barb}, line width=.5pt]
            \node (P0) at (0,0) {};
            \node (P1) at (3.5,-1) {};
            \node (P2) at (5,.2) {};
            \node (P3) at (2.8,3.7) {};
            \node (X0) at (-.3,-.2) {$X_0$};
            \node (X1) at (1.4,-.7) {$X_1$};
            \node (X2) at (2.8,-.4) {\smash{$X_2$}};
            \node (X3) at (2.6,1.1) {$X_3$};
            \node (X4) at (1.6,1.4) {$\cdots$};
            \node at (3.5,-1.3) {$0$};
            \node at (5.3,.2) {$0$};
            \node at (2.8,4) {$0$};
            \node at (4.4,-.6) {$0$};
            \node at (2.2,-.1) {$0$};
            \node at (1.2,2) {$0$};
            \node at (3.3,1.8) {$0$};
            \node at (4.2,2) {$0$};
            \fill (P0) ellipse (.05);
            \fill (P1) ellipse (.05);
            \fill (P2) ellipse (.05);
            \fill (P3) ellipse (.05);
            \draw [->] (X2) to[bend left=40] (X1);
            \draw [line width=5pt, white, shorten <=10pt, shorten >=10pt] (P1) -- (P0);
            \draw [->, shorten <=5pt, shorten >=3pt] (P1) -- (P0);
            \draw [->, shorten <=5pt, shorten >=3pt] (P2) -- (P0);
            \draw [->, shorten <=5pt, shorten >=3pt] (P2) -- (P1);
            \draw [->, shorten <=5pt, shorten >=3pt] (P3) -- (P0);
            \draw [line width=5pt, white, shorten <=5pt, shorten >=5pt] (P3) -- (P1);
            \draw [->, shorten <=5pt, shorten >=3pt] (P3) -- (P1);
            \draw [->, shorten <=5pt, shorten >=3pt] (P3) -- (P2);
            \draw [->] (X1) to[bend left=40] (X0);
            \draw [line width=5pt, white, shorten >=5pt] (X3) to[bend left=20] (X2);
            \draw [->, shorten >=5pt] (X3) to[bend left=20] (X2);
            \draw [->, dashed] (X4) to[bend left=40] (X3);
            \node at (.6,-1.1) {$\scriptstyle d_0=\partial_1$};
            \node at (2.2,-1.1) {$\scriptstyle d_0=\partial_2$};
            \node at (2.45,.4) {$\scriptstyle d_0=\partial_3$};
        \end{tikzpicture}
```

具体地说，我们作如下定义：

- 对每个 $n\geq0$，其 $n$ 维单形的空间为
  \[
  \operatorname{DK}_n(X):=\bigoplus_{\substack{\alpha\colon[n]\to[k]\\\text{满射}}}X_k.
  \]

- 对 $\mathbb{\Delta}$ 中态射 $\beta\colon[n']\to[n]$，
  其诱导的映射
  \[
  \beta^*\colon\operatorname{DK}_{n}(X)\longrightarrow\operatorname{DK}_{n'}(X)
  \]
  由一族映射
  \[
  f_{\alpha,\alpha'}\colon X_k\longrightarrow X_{k'}
  \]
  给出，其中 $\alpha\colon[n]\to[k]$ 和 $\alpha'\colon[n']\to[k']$ 是 $\mathbb{\Delta}$ 中满射，
  且
  \[
  f_{\alpha,\alpha'}:=\begin{cases}
    1_{X_k}, & \text{若 } k'=k \text{ 且}
    \begin{tikzcd}[row sep=1em, column sep=1em]
      \scriptstyle[n']\ar[r]\ar[d] & \scriptstyle[n]\ar[d] \\{}
      \scriptstyle[k']\ar[r] & \scriptstyle[k]
    \end{tikzcd}\text{交换},\\[1em]
    \partial_k, & \text{若 } k'=k-1 \text{ 且}
    \begin{tikzcd}[row sep=1em, column sep=1em]
      \scriptstyle[n']\ar[r]\ar[d] & \scriptstyle[n]\ar[d] \\{}
      \scriptstyle[k']\ar[r,"d^0"] & \scriptstyle[k]
    \end{tikzcd}\text{交换},\\[.5em]
    0, & \text{其他情况},
  \end{cases}
  \]
  其中 $\partial_k\colon X_k\to X_{k-1}$ 是微分，
  $d^0\colon[k-1]\to[k]$ 是将 $i\in[k-1]$ 映到 $i+1\in[k]$ 的态射。

:::

由此构造，$\operatorname{DK} (X)$ 的每个非退化 $n$ 维单形
都可以写成 $X_n$ 的某个非零元素与一个退化 $n$ 维单形之和。

::: example
假设链复形 $X$ 只在第 $n$ 项处有非零元素。
则
\[
\operatorname{DK}_\bullet(X)\simeq
\mathbb{Z}\Delta[n]/\mathbb{Z}\partial\Delta[n],
\]
其中 $\mathbb{Z}(-)\colon\mathsf{sSet}\to\mathsf{sAb}$
是自由函子。
这能从上图直接看出。
:::

下面，我们构造 $\operatorname{DK}$ 的逆函子，
将单纯对象映回其对应的链复形。

::: definition
设 $X$ 是 $\mathsf{A}$ 中的单纯对象。

- $X$ 的**单纯链复形**
  \[
  C_\bullet(X)\in\mathsf{Ch}(\mathsf{A})_{\geq0}
  \]
  定义为
  \[
  C_n(X):=X_n, \qquad \partial_n:=\sum_{i=0}^n(-1)^id_i.
  \]

- $X$ 的**正规链复形**，即**逆 Dold–Kan 构造**，
  \[
  \mathrm{ꓘꓷ}_\bullet(X)\in\mathsf{Ch}(\mathsf{A})_{\geq0},
  \]
  定义为
  \[
  \mathrm{ꓘꓷ}_n(X):=\bigcap_{0<i\leq n}\ker\bigl(d_i\colon X_n\to X_{n-1}\bigr),
  \qquad\partial_n:=d_0.
  \]

:::

这里的 $\mathrm{ꓘꓷ}(X)$ 可能看起来包含的信息比 $X$ 少，
但我们将看到，这些丢失的信息并不重要，
可以从 $X$ 的群结构（指 $\mathsf{A}=\mathsf{Ab}$ 的情况）
中恢复出来。

::: theorem
函子
\[
\begin{tikzcd}
  \smash{\llap{$\mathsf{Ch}(\mathsf{A})_{\geq0}$}}
  \ar[r,shift left=2ex,bend left,"\operatorname{DK}"]
  \ar[r,phantom,"\simeq"] &
  \smash{\rlap{$\operatorname{Fun}(\mathbb{\Delta}^{\mathrm{op}},\mathsf{A})$}}
  \ar[l,shift left=2ex,bend left,"\mathrm{ꓘꓷ}"]
\end{tikzcd}
\]
互为逆函子。
:::

::: proof
不难验证 $\mathrm{ꓘꓷ}\circ\mathrm{DK}=\mathbb{1}$。
我们需要证明 $\mathrm{DK}\circ\mathrm{ꓘꓷ}=\mathbb{1}$。
证明比较初等，也并不是很有意思，
我们在此略过。见 [@HA, 引理 1.2.3.13]。
:::
