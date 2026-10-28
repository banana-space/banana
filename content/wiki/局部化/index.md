---
title: 局部化
categories: [交换代数]
navboxes: [交换代数]
---

<disambiguation>
本条目介绍的是[[交换环|环]]的局部化。关于其它含义，请参见[[局部化（多义词）]]。
</disambiguation>

<problems>
- “例子”一节中把 $\mathbb{C}(X)$ 在 $\mathfrak{m}_x$ 处的局部化描述为函数芽环，这似乎需要 $X$ 满足一定的分离性（例如完全正则），对一般的拓扑空间不成立。
</problems>

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**局部化**是[[交换代数]]中的常见操作，它把[[环]]里一些元素变得可逆，
是[[分式域]]概念的推广。在[[代数几何]]的观点下，
局部化所得的环是原来的环的某些“局部”，
其[[谱 (交换代数)|谱]]自然地是原来环的谱的子集。
既然如此，局部化的环通常会变得更简单。
我们也常常通过研究环的各个局部化来研究环本身。

## 定义

### 环的局部化

对[[交换环]] $A$ 及其[[乘性子集]] $S$ 而言，
局部化 $S^{-1} A$ 就是在 $A$ 中把 $S$ 的元素都变得可逆，所得的环。

::: definition [局部化]
[[交换环]] $A$ 对[[乘性子集]] $S$ 的**局部化**是环 $S^{-1}A$，
带有[[环同态]] $A\to S^{-1}A$，它把 $S$ 中元素映射到可逆元，
并且是所有这样的环同态中[[始对象|初始]]者。
换言之，其满足如下[[万有性质]]：
对任意环同态 $f\colon A\to B$，如果 $f(S)\subseteq B^\times$，
就存在唯一映射 $f_S\colon S^{-1}A\to B$ 使得如下图表交换：
\[
\begin{tikzcd}
  A\ar[r,"f"]\ar[d]&B\\
  S^{-1}A \rlap{ .} \ar[ur, dashed, "f_S"']
\end{tikzcd}
\]
:::

以上定义的局部化可以具体构造出来。定义环
\[
S^{-1} A =
\left\{ \frac{a}{s} \Bigm| a \in A, \, s \in S \right\} \Big/ {\sim},
\]
其中
\[
\frac{a}{s} \sim \frac{b}{t} \iff
\exists u \in S, \, u (a t - b s) = 0.
\]
$S^{-1}A$ 的加法、乘法定义为
\[
\frac{a}{s} + \frac{b}{t} = \frac{a t + b s}{s t}, \quad
\frac{a}{s} \cdot \frac{b}{t} = \frac{a b}{s t}, \quad
\]
其零元、幺元分别为 $0/1$ 与 $1/1$。
自然映射 $A \to S^{-1} A$ 即 $a \mapsto a/1$。
不难验证其满足以上泛性质。不引起歧义时，也以 $a$ 表示
$a/1 \in S^{-1}A$，这样 $a/s$ 也就是 $s^{-1} a$。

::: definition [常用记号] {@常用记号}
在上述定义中，

- 当 $S = \{1, a, a^2, \ldots\}$ 是一个元素 $a$ 生成的乘性子集时，
  局部化 $S^{-1} A$ 也记作
  \[
  A_a \quad \text{或} \quad
  A [a^{-1}] \quad \text{或} \quad
  A [1/a],
  \]
  称作**对 $a$ 局部化**。

- 当 $S = A \setminus \mathfrak{p}$
  是[[素理想]] $\mathfrak{p}$ 的[[补集]]时，
  $S^{-1}A$ 也记作 $A_{\mathfrak{p}}$，
  称作**在 $\mathfrak{p}$ 处局部化**或**对 $\mathfrak{p}$ 局部化**。

:::

注意此记号与表示 [[$p$ 进数]]的 $\mathbb{Z}_p$ 略有冲突，故
$\mathbb{Z}$ 对一个整数 $a$ 局部化只写作 $\mathbb{Z}[a^{-1}]$ 或 $\mathbb{Z}[1/a]$。

### 模的局部化

局部化一个环时，其上的[[模]]也可作局部化。

::: definition [模局部化]
记号同上，设 $M$ 是 $A$-模。定义 $S^{-1}A$-模
\[
S^{-1} M = \left\{\frac{m}{s} \Bigm| m\in M,\,s\in S\right\}\Big/{\sim},
\]
其中
\[
\frac{m}{s} \sim \frac{n}{t}\iff\exists u\in S,\,u (m t - n s) = 0.
\]
$S^{-1}M$ 的加法、数乘有显然的描述。熟悉[[张量积]]者不难验证
$S^{-1}M\cong M\otimes_AS^{-1}A$。
:::

在 @常用记号 的情形下，
也常用 $M_a$、$M [1/a]$ 或 $M_{\mathfrak{p}}$
表示相应的模局部化。

## 性质

和[[商环]]类似，局部化里的理想是原来环中理想的一部分：

::: proposition
$A$ 是环，$S$ 是其乘性子集。则 $I\mapsto S^{-1}I$，
$J\mapsto J\cap A$ 给出 $A$ 中与 $S$ 无交的理想与
$S^{-1}A$ 中真理想的一一对应，素理想对应于素理想。
于是 $\operatorname{Spec}S^{-1}A$ 自然成为 $\operatorname{Spec}A$
的子集。
:::

在以上对应下，局部化和取商交换：

::: proposition
$A$ 是环，$S$ 是其乘性子集，$I$ 是其理想，满足 $S\cap I=\emptyset$。
则有自然同构 $\bar{S}^{-1}(A/I)\cong S^{-1}A/S^{-1}I$，
其中 $\bar{S}$ 指 $S$ 在 $A/I$ 中的像。
:::

::: proof
二者都是从 $A$ 出发，把 $S$ 打到可逆元，把 $I$ 打到 $0$ 的环同态中初始者。
:::

在素理想处局部化会得到[[局部环]]：

::: proposition
$A$ 是环，$\mathfrak{p}$ 是其素理想。则 $A_{\mathfrak{p}}$
是局部环，极大理想为 $\mathfrak{p}A_{\mathfrak{p}}$。
:::

模局部化是[[正合函子]]：

::: proposition
$S^{-1}\colon A\text{-}\mathsf{Mod}\to S^{-1}A\text{-}\mathsf{Mod}$
保持余极限且正合。如 $M$ 是[[平坦模|平坦]] $A$-模，
则 $S^{-1}M$ 是平坦 $A$-模，也是平坦 $S^{-1}A$-模。
:::

::: proof
$S^{-1}$ 无非就是 $-\otimes_AS^{-1}A$，自然保持余极限。
至于正合，只需证明 $S^{-1}A$ 是平坦 $A$-模，故我们直接证后一句话。
注意
$$
S^{-1}M=\operatornamewithlimits{colim}_{s\in S}M,
$$
其中余极限的指标范畴对象集为 $S$，
$\operatorname{Hom}_{S}(s,t)=\{u\in S\mid t=su\}$，
然后图表每一项都是 $M$，$u\in\operatorname{Hom}(s,t)$
对应的映射就是“乘以 $u$”。于是 $S^{-1}M$ 就是平坦 $A$-模的余极限，
也是平坦 $A$-模。最后，由于对 $S^{-1}A$-模 $M$，$N$，有
$M\otimes_AN=M\otimes_{S^{-1}A}N$，故一个 $S^{-1}A$-模平坦和它作为
$A$-模平坦是一回事。
:::

上面证明了模的平坦性在局部化下保持。此外，还有很多性质在局部化下保持：

- [[整环]]的局部化是整环。

- [[Noether 环]]的局部化是 Noether 环。

- [[唯一分解整环]]的局部化是唯一分解整环。

- [[Dedekind 整环]]的局部化是 Dedekind 整环。

- [[正则环]]的局部化是正则环。

……

还有一些性质，它对一个环成立，
当且仅当对其在每个素理想或每个极大理想处的局部化成立。
此类性质多如繁星，不胜枚举。在此仅叙述几条基本的，余参见主条目[[局部性质]]。
由此可见，局部化是研究环的重要手段。

::: proposition
$A$ 是环，$M$ 是 $A$-模，以下几条等价：

1. $M=0$。

2. 对 $A$ 的任一素理想 $\mathfrak{p}$，$M_\mathfrak{p}=0$。

3. 对 $A$ 的任一极大理想 $\mathfrak{m}$，$M_\mathfrak{m}=0$。

从而如 $f\colon M\to N$ 是 $A$-模同态，
则它单（满）当且仅当它在各个素理想或极大理想处局部化为单（满）。
:::

::: proof
1 推 2 推 3 为显然。如 $M\ne0$，取非零元 $m\in M$，
并取极大理想 $\mathfrak{m}\supseteq\operatorname{Ann}(m)$。
依定义立知 $M_\mathfrak{m}\ne0$。

至于最后一句话，由于局部化是正合函子，保持核与余核，
对 $\ker(f)$ 与 $\operatorname{coker}(f)$ 应用刚才所证，即得结论。
:::

## 例子

- 整环的[[分式域]]是一种局部化，无非是取 $S=A\setminus0$。

- 一般地，取 $S$ 为 $A$ 中所有非零因子的集合，所得局部化
  $S^{-1}A$ 称为 $A$ 的**完全分式环**。

- 局部化未必是单射，最简单的例子是 $(\mathbb{Z}/6)_3=\mathbb{Z}/2$。

- 对[[拓扑空间]] $X$，考虑其复值连续函数环 $\mathbb{C}(X)$。
  对点 $x\in X$，定义
  $$
  \mathfrak{m}_x=\{f\in\mathbb{C}(X)\mid f(x)=0\},
  $$
  这是 $\mathbb{C}(X)$ 的极大理想，[[剩余域]]为 $\mathbb{C}$。
  其局部化可描述如下：
  $$
  \{(U,f)\mid U\subseteq X\,开,\,f\in\mathbb{C}(U)\}/\sim,
  $$
  其中
  $$
  (U,f)\sim(V,g)\iff\exists W\subseteq U\cap V\,开,\,f|_W=g|_W.
  $$
  该局部化称为 $x$ 处的[[函数芽]]环，可记作 $\mathbb{C}(X,x)$。
  这解释了“局部化”一词的几何直观，即在一点局部化所得之环，
  只有该点的局部信息。

## 与范畴局部化的关系

在[[代数–范畴对应]]的观点下，环局部化是一种范畴局部化。

::: proposition
$A$ 是环，$S$ 是其乘性子集。则有范畴等价
$$
(A\text{-}\mathsf{Mod})[S^{-1}]\simeq S^{-1}A\text{-}\mathsf{Mod},
$$
其中左边的 $S$ 指的是所有形如“乘以 $s$”，$s\in S$ 的模自同态在态射范畴中沿余极限生成的那些同态。
:::

```terms
局部化:
  en: [localize, localization]
  en-gb: [localise, localisation]
  de: [lokalisieren, Lokalisierung :f]
  fr: [localiser, localisation :f]
  grc: [ἑντοπίζω, ἑντοπισμός :m]
  la: [localizo, localizatio :f]
```
