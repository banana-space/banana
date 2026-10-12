---
title: Gödel 可构造宇宙
aliases: [可构造宇宙, 可构造公理, Gödel 可构造层级, Godel 可构造宇宙]
categories: [集合论]
---

[[集合论]]中，**Gödel 可构造宇宙**是 [[ZF 集合论]]中的一个[[类]]，
带有 **Gödel 可构造层级**结构。通常将其记作 $L$ 或 $\textbf{L}$。
Gödel 可构造宇宙是 [[Kurt Gödel]] 于 1938 年引入的，
他以此证明[[选择公理]]、[[强连续统假设]]与 ZF 的相对[[相容性]]。

## 定义

和 [[von Neumann 宇宙]]类似，Gödel 可构造宇宙也是逐层级定义的。
从[[空集]]出发，每一级是对上一级用[[分出公理模式]]可能分出的集合。
为此需先定义这些“可能分出的集合”。

::: definition [可定义子集，不严格] {@thm:定义}
对集合 $A$，称形如
$$
\{x\in A\mid A\models P(x,a_1,\ldots,a_n)\}
$$
的集合为 $A$ 的**可定义子集**，其中 $a_1,\ldots,a_n\in A$，
$P(x,y_1,\ldots,y_n)$ 为只含 $n+1$ 个自由变元的一阶公式。
$A$ 的所有可定义子集组成的集合记作 $\mathcal{D}(A)$，
它是[[幂集]] $\mathcal{P}(A)$ 的子集。
:::

::: definition [Gödel 可构造层级] {@层级}
对[[序数]] $\alpha$ 归纳定义集合 $L_\alpha$ 如下：

- $L_0=\emptyset$。

- $L_{\alpha+1}=\mathcal{D}(L_\alpha)$。

- 对[[极限序数]] $\alpha$，
  $L_\alpha=\bigcup_{\beta<\alpha}L_\beta$。

这些 $L_\alpha$ 称为 **Gödel 可构造层级**。
:::

::: definition [Gödel 可构造宇宙]
定义类 $L=\bigcup_{\alpha\in\textbf{Ord}}L_\alpha$，
称为 **Gödel 可构造宇宙**。
对 $x\in L$，以 $\rho(x)$ 记最小的序数 $\alpha$ 使得
$x\in L_{\alpha+1}$，称为 $x$ 的**可构造层级**。
:::

以上 $\mathcal{D}(A)$ 的定义固然美好，
但由于[[一阶逻辑]]不能量化公式，它并不严格。
所幸有如下办法将其徒手列举。

::: definition [可定义子集，严格] {@严格}
对所有的 $n\in\mathbb{N}$ 同时地，对 $m\in\mathbb{N}$ 归纳定义
$$
\operatorname{En}(m,A,n)=\begin{cases}
  \{x\in A^n\mid x_i=x_j\},
  &m=2^i3^j,\,0\le i,j<n.\\
  \{x\in A^n\mid x_i\in x_j\},
  &m=2^i3^j5,\,0\le i,j<n.\\
  A^n\setminus\operatorname{En}(i,A,n),
  &m=2^i3^j5^2.\\
  \operatorname{En}(i,A,n)\cap\operatorname{En}(j,A,n),
  &m=2^i3^j5^3.\\
  \{\operatorname{pr}_{n+1,n}(X)\mid
  X\in\operatorname{En}(i,A,n+1)\},&m=2^i3^j5^4.\\
  \emptyset,&\textrm{其他.}
\end{cases}
$$
其中 $\operatorname{pr}_{n+1,n}$ 指将
$n+1$ 元组投影到前 $n$ 个变量，
$\operatorname{pr}_{n+1,n}(X)$ 即 $X$ 在此映射下的像。
然后定义
$$
\operatorname{Df}(A,n)=
\{\operatorname{En}(m,A,n)\mid m\in\mathbb{N}\}.
$$
则不难发现 $\operatorname{En}(m,A,n)$ 实为以自然数 $m$
列举带 $n$ 个自由变元的一阶公式然后取出其所定义的子集，而
$\operatorname{Df}(A,n)$ 就是 $A^n$
中由这些公式定义的子集全体。注意这句话是个元定理。显然
$|\operatorname{Df}(A,n)|\le\aleph_0$。

最后定义
$$
\mathcal{D}(A)=\{\{x\in A\mid(s,x)\in R\}\mid
n\in\mathbb{N},\,s\in A^n,\,R\in\operatorname{Df}(A,n+1)\},
$$
即由带一个取值在 $A$ 的自由变元和若干个
$A$ 中常元的公式定义出的子集全体。
显然 $\mathcal{D}(A)\subseteq\mathcal{P}(A)$，
$|\mathcal{D}(A)|\le\max\{\aleph_0,|A|\}$。
:::

## 性质

首先是一些初等性质。

::: proposition
对[[传递集合]] $A$，$A\subseteq\mathcal{D}(A)$
且 $\mathcal{D}(A)$ 也传递。于是每个 $L_\alpha$
都是传递集合，且对 $\beta\le\alpha$ 有
$L_\beta\subseteq L_\alpha$。
:::

::: proof
由 $A$ 传递，对任意 $a\in A$ 有
$$
a=\{x\in A\mid x\in a\}\in\mathcal{D}(A),
$$
故 $A\subseteq\mathcal{D}(A)$。这样由于 $\mathcal{D}(A)$
的元素都是 $A$ 的子集，它们也就是 $\mathcal{D}(A)$ 的子集，
于是 $\mathcal{D}(A)$ 传递。

至于后一句话，前半句对 $\alpha$ 归纳，
在极限序数情形利用传递集合之并传递，即知每个 $L_\alpha$
都传递。后半句显然只需证 $L_\beta\subseteq L_{\beta+1}$，
而由前所证 $L_\beta\subseteq\mathcal{D}(L_\beta)
  =L_{\beta+1}$。
:::

::: corollary
对 $x\in L$，$x\in L_\alpha$ 当且仅当 $\rho(x)<\alpha$。
:::

::: proof
显然。
:::

::: proposition
对任意序数 $\alpha$，都有 $L_\alpha\subseteq V_\alpha$，
其中 $V_\alpha$ 是 [[von Neumann 宇宙|von Neumann 层级]]。于是对 $x\in L$，
$\rho(x)\ge\operatorname{rank}(x)$。
:::

::: proof
用归纳法。极限序数情形显然。后继序数情形是由于
$$
L_{\alpha+1}=\mathcal{D}(L_\alpha)\subseteq
\mathcal{P}(L_\alpha)\subseteq\mathcal{P}(V_\alpha),
$$
其中最后一个包含由归纳假设得到。
:::

::: corollary {@序数层级}
对序数 $\alpha$，$\rho(\alpha)=\alpha$。
:::

::: proof
用归纳法。由于
$\rho(\alpha)\ge\operatorname{rank}(\alpha)=\alpha$，
只需证 $\rho(\alpha)\le\alpha$，即
$\alpha\in L_{\alpha+1}$。由[[序数]]的定义，
$x\in\textbf{Ord}$ 是关于 $x$ 的一阶公式，故由归纳假设有
$$
\alpha=\{x\in L_\alpha\mid x\in\textbf{Ord}\}\in
\mathcal{D}(L_\alpha)=L_{\alpha+1}.
$$
:::

::: proposition
对 $\alpha\le\omega$，$L_\alpha=V_\alpha$；
对 $\alpha\ge\omega$，$|L_\alpha|=|\alpha|$。
:::

::: proof
用归纳法。对 $\alpha<\omega$，$V_\alpha$ 都是有限集，
显然有限集每个子集都可定义，所以总有 $L_\alpha=V_\alpha$。
取并即得 $L_\omega=V_\omega$，显然为可数集。
现对 $\alpha\ge\omega$，由
$L_{\alpha+1}=\mathcal{D}(L_\alpha)$，基数为
$\max\{\aleph_0,|L_\alpha|\}=|L_\alpha|=|\alpha|=|\alpha+1|$，
即知后继序数情形。至于极限序数情形，则是因为一方面
$$
|L_\alpha|=\biggl|\bigcup_{\beta<\alpha}L_\beta\biggr|
\le\sum_{\beta<\alpha}|L_\beta|\le|\alpha|^2=|\alpha|,
$$
另一方面由 $\alpha\in L_{\alpha+1}$ 知
$\alpha\subseteq L_\alpha$，于是 $|L_\alpha|\ge|\alpha|$。
:::

Gödel 可构造宇宙的一大好处是其上有典范[[良序]]。
这可以用来证明如 ZF 相容，则[[选择公理]]也与之相容，见下。

::: theorem
$L$ 上有典范良序 $<_L$，使得每个 $x\in L$ 的前段都是集合。
:::

::: proof
只需对序数 $\alpha$ 归纳作 $L_\alpha$ 的良序，使得
$\alpha<\beta$ 时 $L_\alpha$ 是 $L_\beta$ 的前段。

极限序数不用做。对后继序数 $\alpha+1$，集合
$X\in L_{\alpha+1}=\mathcal{D}(L_\alpha)$，
依 $\mathcal{D}$ 和 $\operatorname{Df}$ 的构造，存在
$n,m\in\mathbb{N}$，$s\in L_\alpha^n$，使得
$$
X=\{x\in L_\alpha\mid(s,x)\in
\operatorname{En}(m,L_\alpha,n+1)\}.
$$
以 $(n_X,m_X,s_X)$ 记满足上式的 $(n,m,s)$ 中字典序最小者，
其中 $s$ 依 $L_\alpha^n$ 的字典序，$L_\alpha$
中良序由归纳假设已经做出。然后定义 $X<_LY$ 为：
$X,Y\in L_\alpha$ 且 $X<_LY$，或者
$X\in L_\alpha$ 但 $Y\notin L_\alpha$，或者
$X,Y\notin L_\alpha$ 且依字典序
$(n_X,m_X,s_X)<(n_Y,m_Y,s_Y)$。
由归纳假设以及良序的字典序还是良序，易知这样作出的 $<_L$
在 $L_{\alpha+1}$ 是良序。
:::

接下来是一些[[模型论]]性质。

::: proposition {@绝对}
@严格 中的函数 $\operatorname{En}$ 与
$\operatorname{Df}$ 对 $\text{ZF}-\text{P}$
即 ZF 去掉[[幂集公理]]的标准传递模型是绝对的。换言之，
如两个[[传递类]] $M\subseteq N$ 满足 $(M,\in)$ 和
$(N,\in)$ 都是 $\text{ZF}-\text{P}$ 的模型，
则对任意 $A\in M$，$m,n\in\mathbb{N}$，
$\operatorname{En}(m,A,n)$ 与 $\operatorname{Df}(A,n)$
在 $M$ 和 $N$ 中定义出同样的东西。
:::

::: proof
由[[外延公理]]、[[分出公理模式]]以及 $\operatorname{En}$，
$\operatorname{Df}$ 的定义不难得到结论。
:::

::: corollary {@L绝对}
$L_\alpha$ 和 $<_L$ 对 $\text{ZF}-\text{P}$
的标准传递模型是绝对的。换言之，如传递类 $M$ 满足
$(M,\in)$ 是 $\text{ZF}-\text{P}$ 的模型，
则对任意序数 $\alpha\in M$，在 $M$ 中依 @严格、@层级 定义的“$L_\alpha$”
就等于 $L_\alpha$，且 $M$ 中定义的“$<_L$”与
$<_L$ 一样；特别地，$L_\alpha\subseteq M$。
:::

::: proof
由 @绝对 立得。
:::

::: theorem {@模型}
$L$ 是包含所有[[序数]]的 $\text{ZF}-\text{P}$
的标准传递模型中最小者，且是 ZFC 的模型。
:::

::: proof
最小性自然来自 @L绝对。需证 $L$ 是 ZFC 的模型。

- **外延公理** 这是因为 $L$ 传递。

- **空集公理** 显然。

- **二元集公理** 显然。

- **并公理** 显然。

- **幂集公理** $\mathcal{P}(x)\cap L$ 就是
  $x$ 在 $L$ 中的幂集。注意如果 $x\in L_\alpha$ 且
  $\mathcal{P}(x)\cap L\subseteq L_\alpha$，就有
  $\mathcal{P}(x)\cap L\in L_{\alpha+1}\subseteq L$。

- **分出公理模式** 需对任意 $A,a_1,\ldots,a_n\in L$
  以及公式 $P(x,w_1,\ldots,w_n)$ 证明
  $$
  \{x\in A\mid P(x,a_1,\ldots,a_n)\}\in L.
  $$
  设 $A,a_1,\ldots,a_n\in L_\alpha$。本来 @thm:定义 应使分出公理成立，但这里的问题在于
  $L_\alpha\models P(x,a_1,\ldots,a_n)$ 和
  $L\models P(x,a_1,\ldots,a_n)$ 没有道理等价。
  但由[[反映原理]]，存在 $\beta>\alpha$ 使得对任意
  $x\in L_\alpha$ 都有
  $$
  L_\beta\models P(x,a_1,\ldots,a_n)\iff
  L\models P(x,a_1,\ldots,a_n);
  $$
  这样便有
  $$
  \{x\in A\mid P(x,a_1,\ldots,a_n)\}\in
  L_{\beta+1}\subseteq L.
  $$

- **替换公理模式** 需对任意 $A,a_1,\ldots,a_n\in L$
  以及公式 $Q(x,y,w_1,\ldots,w_n)$ 证明，如对任意 $x$
  都至多有一个 $y$ 使得 $Q(x,y,a_1,\ldots,a_n)$ 成立，
  就存在 $B\in L$ 使得对任意 $y\in L$，$y\in B$
  当且仅当存在 $x\in A$ 使得 $Q(x,y,a_1,\ldots,a_n)$
  成立。由于已经证明分出公理模式，只需取序数 $\alpha$
  使得对满足 $Q(x,y,a_1,\ldots,a_n)$ 的 $x\in A$
  和 $y\in L$ 都有 $y\in L_\alpha$，然后在
  $L_\alpha$ 中分出即可。这显然做得到。

- **良基公理** 显然。

- **无穷公理** $\omega\in L_\omega\subseteq L$。

- **选择公理** 由全局良序 $<_L$ 立得。

:::

::: corollary
如 ZF 相容，则 ZFC 也相容。即
$$
\operatorname{Con}(\text{ZF})\implies
\operatorname{Con}(\text{ZFC}).
$$
:::

::: proof
如 ZF 相容，@模型 说明 $L$ 是 ZFC 的模型，
从而 ZFC 相容。
:::

## 可构造公理

::: definition
**可构造公理**，常记作 $\textbf{V=L}$，指的是公理
$$
\forall x(x\in L).
$$
:::

::: remark
由于 $L$ 是[[真类]]，这里 $x\in L$ 实际上是关于
$x$ 的一阶公式
$$
\exists\alpha(\alpha\in\textbf{Ord}
\wedge x\in L_\alpha).
$$
当然如非要完全形式地写，$\alpha\in\textbf{Ord}$
和 $L_\alpha$ 也应再展开。
:::

::: theorem {@L满足可构造}
$L$ 满足可构造公理。即
$$
L\models(\textbf{V=L}).
$$
:::

::: proof
由 @序数层级，@L绝对，@模型
立得。
:::

::: corollary {@相容}
如 ZF 相容，则可构造公理与之相容。即
$$
\operatorname{Con}(\text{ZF})\implies
\operatorname{Con}(\text{ZF}+(\textbf{V=L})).
$$
:::

::: proof
由 @模型 和 @L满足可构造 立得。
:::

::: remark
Gödel 虽然作出这套理论并以此证明 [[GCH]] 相对
ZF 相容，但他本人并不认为 $\textbf{V=L}$
在他的理想集合论世界中成立。（有谁了解更多历史可以写写。）
:::

## 应用

@相容 在相对相容性证明中很有用，因为很多命题的真假在 ZF
中难以判断，而在 $\text{ZF}+(\textbf{V=L})$ 中可以判断。
这样的命题包括：

- [[选择公理]]
- [[强连续统假设]]
- [[菱形原理]]
- [[方形公理]]
- [[Suslin 假设]]
- [[Whitehead 问题]]

```terms
Gödel 可构造宇宙:
  en: Gödel's constructible universe
Gödel 可构造层级:
  en: Gödel's constructible hierarchy
可构造公理:
  en: axiom of constructibility
```
