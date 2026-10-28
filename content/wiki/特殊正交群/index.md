---
title: 特殊正交群
categories: [群论, 线性代数, Lie 理论, 代数群理论]
navboxes: [Lie 群]
---

<problems>
- “基本性质”“表示论”各节需要扩充。
- 命题“紧性”缺少证明。
- “Lie 群结构”一节缺少关于极大环面的内容。
- “例子”一节中 $\operatorname{SO}(3, \mathbb{R})$ 与 $\operatorname{SO}(4, \mathbb{R})$ 两项缺少用四元数实现旋转的具体描述。
</problems>

::: convention
在本文中，

- 所有环均指交换环。

:::

环 $A$ 上**特殊正交群**
由所有同阶行列式为 $1$ 的[[正交方阵]]（即其[[转置]]等于其逆的方阵）组成，
它是重要的一类 [[Lie 群]]。
在 $A = \mathbb{R}$ 时，它是 Euclid 空间所有绕[[原点]]的[[旋转]]构成的群。

特殊正交群一般记作 $\operatorname{SO}(n, A)$ 或 $\operatorname{SO}_n(A)$。

## 定义

::: definition [特殊正交群] {@对角}
设 $2$ 在环 $A$ 中可逆，$n \in \mathbb N_+$，
**特殊正交群** $\operatorname{SO}(n, A)$ 是集合
\[
\{ X \in \mathrm{M}_n(A) \mid X^t X = 1, \det X = 1 \}
\]
配备矩阵乘法得到的群，
即[[正交群]]中行列式为 $1$ 的元素构成的子群。
:::

::: remark
对非交换环无法定义正交群，其原因在于其上没有双线性型理论。
不过在环和它的反环同构时，可以有[[半双线性型]]理论，
从而定义[[酉群]]的类似物。
例如可以基于[[四元数]]定义[[紧辛群]]。
:::

## 性质

### 基本性质

特殊正交群是[[正交群]]的正规子群。

::: proposition
设 $2$ 在环 $A$ 中可逆。则有[[正合列]]
\[
\begin{tikzcd}
  0\ar[r] & \operatorname{SO}(n, A)\ar[r] & \operatorname{O}(n, A)
  \ar[r,"\det"]& _2A^\times \ar[r] & 0.
\end{tikzcd}
\]
其中 $\det$ 表示[[行列式]]运算，$\operatorname{O}$ 表示[[正交群]]，
$_2A^\times$ 表示 $A$ 中所有平方为 $1$ 的元素在乘法下构成的群。
特别地，$\operatorname{SO}(n, A)$ 是[[群同态]]的核，因此是 $\operatorname{O}$ 的[[正规子群]]。
:::

### Lie 群结构

当 $A$ 为 $\mathbb{R}$-代数时，可以为特殊正交群赋予 Lie 群结构，
其中最重要的例子是 $A = \mathbb{R}$ 或 $\mathbb{C}$。

::: proposition
$\operatorname{SO}(n, \mathbb R)$ 和 $\operatorname{SO}(n, \mathbb C)$
可视为 $\mathbb{R}^{n^2}$ 或 $\mathbb{C}^{n^2}$ 中方程的零点集。
这为 $\operatorname{SO}(n, \mathbb R)$ 赋予了[[光滑流形]]结构，
并为 $\operatorname{SO}(n, \mathbb C)$ 赋予了[[复流形]]结构。
此时前者是实 [[Lie 群]]，后者是复 Lie 群。
:::

特殊正交群的 [[Lie 代数]]与正交群相同。

::: proposition [Lie 代数]
特殊正交群 $\operatorname{SO}(n, \Bbbk)$（$\Bbbk = \mathbb{R}$ 或 $\mathbb{C}$）
的 Lie 代数是向量空间
\[
\mathfrak{so}(n, \Bbbk) = \mathfrak{o}(n, \Bbbk) =
\{ X \in \operatorname{M}(n, \Bbbk) \mid X + X^t = 0 \},
\]
配有 [[Lie 括号]] $[X, Y] = XY - YX$。
:::

特殊正交群还有一些拓扑性质。

::: proposition [紧性]
$\operatorname{SO}(n, \mathbb R)$ 是紧群，
但除了 $n = 1$ 的平凡的情况，
$\operatorname{SO}(n, \mathbb C)$ 不[[紧]]，
它的[[极大紧子群]]是 $\operatorname{SO}(n, \mathbb{R})$。
:::

::: proposition [连通性]
$\operatorname{SO}(n, \mathbb R)$ 和 $\operatorname{SO}(n, \mathbb C)$ 都是连通的。
事实上，$\operatorname{SO}(n, \mathbb{R})$ 是 $\operatorname{SO}(n, \mathbb{C})$ 的[[强形变收缩]]。
:::

::: proposition [基本群]
$\operatorname{SO}(2, \mathbb R)$ 的基本群是 $\mathbb Z$；
而 $n \geq 3$ 时，
$\operatorname{SO}(n, \mathbb R)$ 的基本群是 $\mathbb Z / 2$，
它的[[万有覆叠]]是[[旋量群]] $\mathrm{Spin}(n)$。
$\operatorname{SO}(n, \mathbb{C})$ 的基本群与 $\operatorname{SO}(n, \mathbb{R})$ 相同。
:::

特殊正交群是单 Lie 群。

::: proposition [单性]
$\operatorname{SO}(n, \mathbb R)$
和 $\operatorname{SO}(n, \mathbb{C})$（$n = 3$ 或 $n \geq 5$）
是[[单 Lie 群]]。
$n$ 为奇数时，它对应 $\mathrm B$ 型[[根系]]；
$n$ 为偶数时，它对应 $\mathrm D$ 型根系。
:::

而 $\operatorname{SO}(4, \mathbb R)$ 和 $\operatorname{SO}(4, \mathbb{C})$ 是半单 Lie 群。

### 根系

- 对于 $n=5,7$ 以及 $n\ge 8$ 时的 $\mathfrak{o}(n)$，它们对应的根系如下：

  族 $\{\mathfrak{o}(2n+1)\}_{n\ge 2}$ 对应根系 $\{\mathrm{B}_n\}_{n\ge 2}$；
  而族 $\{\mathfrak{o}(2n)\}_{n\ge 4}$ 对应根系 $\{\mathrm{D}_n\}_{n\ge 4}$。
  它们对应的[[Dynkin 图]]如下，下标的正整数 $n$ 表示顶点的数量，或者等价地说，
  $n$ 表示根系的秩（欧氏空间的维数）。

  \[
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
    \begin{scope}[shift={(0, -1)}]
      \node at (-1, 0) {$\mathrm{B}_n$};
      \draw (0, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
        (4.5, .04) -- (5.5, .04) (4.5, -.04) -- (5.5, -.04)
        (4.95, .15) -- (5.1, 0) -- (4.95, -.15);
      \draw[dotted] (2.4, 0) -- (3.1, 0);
      \foreach \x in {0, 1, 2, 3.5, 4.5, 5.5} {
        \draw[fill=white] (\x, 0) circle (.1);
      }
    \end{scope}
    \begin{scope}[shift={(0, -3.2)}]
      \node at (-1, 0) {$\mathrm{D}_n$};
      \draw (0, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
        (4.5, 0) -- (5.366, .5) (4.5, 0) -- (5.366, -.5);
      \draw[dotted] (2.4, 0) -- (3.1, 0);
      \foreach \x in {0, 1, 2, 3.5, 4.5} {
        \draw[fill=white] (\x, 0) circle (.1);
      }
      \foreach \y in {.5, -.5} {
        \draw[fill=white] (5.366, \y) circle (.1);
      }
    \end{scope}
  \end{tikzpicture}
  \]

- 对于退化情况 $\mathfrak o(3)$，我们得到 $\mathrm{B}_1\cong\mathrm{A}_1$，Dynkin 图如下：

  \[
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
    \begin{scope}
      \node at (-1, 0) {$\mathrm{A}_1$};
      \draw[fill=white] (0, 0) circle (.1);
    \end{scope}
  \end{tikzpicture}
  \]

  这给出例外同构 $\mathfrak{o}(3)\cong\mathfrak{sl}(2)$。
  这里 $\mathfrak{sl}$ 是[[特殊线性群]]的 Lie 代数。

- 对于退化情况 $\mathfrak o(4)$，我们得到 $\mathrm{D}_2\cong\mathrm{A}_1\times\mathrm{A}_1$，
  Dynkin 图如下：

  \[
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
    \begin{scope}
      \node at (-1, 0) {$\mathrm{A}_1\times\mathrm{A}_1$};
      \draw[fill=white] (.5, 0) circle (.1);
      \draw[fill=white] (1.5, 0) circle (.1);
    \end{scope}
  \end{tikzpicture}
  \]

  这给出例外同构 $\mathfrak{o}(4)\cong\mathfrak{o}(3)\times\mathfrak{o}(3)$。

- 对于退化情况 $\mathfrak o(6)$，我们得到 $\mathrm{D}_3\cong\mathrm{A}_3$，Dynkin 图如下：

  \[
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
    \begin{scope}
      \node at (-1, 0) {$\mathrm{A}_3$};
      \draw (0, 0) -- (2, 0);
      \draw[fill=white] (0, 0) circle (.1);
      \draw[fill=white] (1, 0) circle (.1);
      \draw[fill=white] (2, 0) circle (.1);
    \end{scope}
  \end{tikzpicture}
  \]

  这给出例外同构 $\mathfrak{o}(6)\cong\mathfrak{sl}(4)$。

这些退化情况的 Lie 代数例外同构给出对应[[典型群]]之间的[[例外同源]]。

### 表示论

## 推广

可以将正交群推广到一般[[概形]]上，成为[[群概形]]。

::: definition
设 $S$ 是概形，$V$ 是其上[[代数向量丛|向量丛]]，
$L$ 是其上[[代数线丛|线丛]]，$q\colon V\to L$
是集合值函子的自然变换，满足 $q$ 在 $S$
的仿射局部上是非退化[[二次型]]。定义 $q$
的**特殊正交群**为 $S$ 上群概形
\[
\mathsf{Sch}_S^{\text{op}} \to \mathsf{Grp},
\quad X \mapsto \{\varphi\in\operatorname{Aut}
_{\mathcal{O}_X}(V_X)\mid q\circ\varphi=q,\,
\det(\varphi)=1\},
\]
记作 $\operatorname{SO}(q)$ 或 $\operatorname{SO}(q,S)$。它是[[约化群概形]]。
:::

::: remark
依[[正交群]]的定义，$\operatorname{SO}(q)=\operatorname{O}(q)\cap\operatorname{SL}(V)$，
即它是正交群与[[特殊线性群]]在[[一般线性群]]中的交。
:::

::: example
对偶数 $n$，考虑 $V=\mathcal{O}_S^{\oplus n}$，
$L=\mathcal{O}_S$，$q(x_1,\ldots,x_n)=
x_1x_2+\cdots+x_{n-1}x_n$。此时 $\operatorname{SO}(q)$
称为**标准分裂特殊正交群**，记作 $\operatorname{SO}_{n,S}$。
注意这并不是 @对角 中的 $\operatorname{SO}(n,A)$。
$n\ge6$ 时，它是[[单群概形]]，对应 $D$ 型 Dynkin 图。
:::

::: example
对奇数 $n$，考虑 $V=\mathcal{O}_S^{\oplus n}$，
$L=\mathcal{O}_S$，$q(x_1,\ldots,x_n)=
x_1x_2+\cdots+x_{n-2}x_{n-1}+x_n^2$。此时 $\operatorname{SO}(q)$
称为**标准分裂特殊正交群**，记作 $\operatorname{SO}_{n,S}$。
注意这并不是 @对角 中 $\operatorname{SO}(n,A)$。
$n\ge3$ 时，它是[[单群概形]]，对应 $B$ 型 Dynkin 图。
:::

## 例子

- $\operatorname{SO}(2, \mathbb{R})$ 同构于圆周 $S^1$，
  它的[[万有覆叠]]为实数域 $\mathbb R$ 的加法群。

  考虑一个 $2$ 阶实矩阵 $X=\begin{pmatrix}a&c\\ b&d\end{pmatrix}$，
  若其满足 $X^tX=1$，则 $\alpha=(a,b),\beta=(c,d)\in\mathbb R^2$ 为欧氏平面 $\mathbb R^2$
  的一组单位正交基（相互正交且模长为 $1$）。
  由平面几何可知 $\beta$ 为 $\alpha$ 顺时针或逆时针旋转 $\frac\pi 2$，
  而 $\det X=1$ 决定了基的定向，表明旋转方向只能取逆时针。

  此时可取辐角参数化 $\alpha=(\cos\theta,\sin\theta)$，
  那么 $\beta=(-\sin\theta,\cos\theta)$ 被唯一决定，由此
  \[
  X=X_\theta=\begin{pmatrix}\cos\theta &-\sin\theta\\ \sin\theta&\cos\theta\end{pmatrix}.
  \]
  由和角公式不难检查 $X_\alpha X_\beta=X_{\alpha+\beta}$，
  于是这给出了同构 $\operatorname{SO}(2, \mathbb{R})\cong \mathbb R/(2\pi\mathbb Z)\cong S^1$。

- $\operatorname{SO}(3, \mathbb{R})$ 是由 $\mathbb{R}^3$ 中[[旋转]]（以及恒等映射）构成的群，
  它的万有覆叠是 $\mathrm{SU}(2)$。

- $\operatorname{SO}(4, \mathbb{R})$ 不是单 Lie 群，而是半单 Lie 群。
  因为
  $\operatorname{SO}(4, \mathbb{R})/\mathbb Z_2\cong \operatorname{SO}(3, \mathbb{R})\times \operatorname{SO}(3, \mathbb{R})$。
  这里子群 $\mathbb Z_2$ 是[[循环群]]。

```terms
特殊正交群:
  en: special orthogonal group
  de: spezielle orthogonale Gruppe
  fr: groupe spécial orthogonal
  grc: εἰδικὴ ὀρθογωνία ὁμάς
  la: caterva specialis orthogonalis
```
