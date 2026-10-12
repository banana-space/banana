---
title: 模对象
categories: [范畴代数]
navboxes: [范畴论, 代数结构]
---

在[[范畴论]]中，
**模对象**是[[幺半范畴]]中带有某个[[代数对象]]作用的对象，
其作用满足结合律和单位律。
它推广了通常的[[模]]与[[群作用]]。

例如，在[[向量空间范畴]]中，
结合代数 $A$ 上的模对象就是通常的 $A$-模；
在[[集合范畴]]中，
幺半群 $A$ 上的模对象就是带有 $A$ 作用的集合。

## 定义

::: definition [左模对象] {@def-left-module-object}
设 $(\mathcal{C},\otimes,\mathbb{1},\alpha,l,r)$ 是[[幺半范畴]]，
$(A,m,\iota)$ 是其中的[[代数对象]]。

$A$ 上的**左模对象**是一个二元组 $(M,\lambda)$，其中

- $M$ 是 $\mathcal{C}$ 中的对象。

- $\lambda\colon A\otimes M\to M$ 是态射，
  称为**作用态射**。

它们满足以下条件：

- （**结合律**）
  下面的图表交换：
  \[
  \begin{tikzcd}
    {(A\otimes A)\otimes M}
      && {A\otimes(A\otimes M)} \\
    {A\otimes M}
      && {A\otimes M} \\
    & M
    \arrow["{\alpha_{A,A,M}}", from=1-1, to=1-3]
    \arrow["{m\otimes\operatorname{id}_M}"',
      from=1-1, to=2-1]
    \arrow["{\operatorname{id}_A\otimes\lambda}",
      from=1-3, to=2-3]
    \arrow["\lambda"', from=2-1, to=3-2]
    \arrow["\lambda", from=2-3, to=3-2]
  \end{tikzcd}
  \]

- （**单位律**）
  下面的图表交换：
  \[
  \begin{tikzcd}
    {\mathbb{1}\otimes M}
      \arrow[r,"{\iota\otimes\operatorname{id}_M}"]
      \arrow[dr,"{l_M}"']
    & {A\otimes M}\arrow[d,"\lambda"] \\
    & M
  \end{tikzcd}
  \]

:::

这两个条件也可以写成
\[
\lambda\circ(m\otimes\operatorname{id}_M)
=
\lambda\circ(\operatorname{id}_A\otimes\lambda)
\circ\alpha_{A,A,M},
\]
以及
\[
\lambda\circ(\iota\otimes\operatorname{id}_M)=l_M.
\]

在向量空间范畴中，若将 $\lambda(a\otimes u)$ 记为 $au$，
这些条件就是通常的模公理
\[
(ab)u=a(bu),
\qquad
1_Au=u.
\]
作用的双线性则已经包含在
$\lambda\colon A\otimes_k M\to M$ 是线性映射这一条件中。

::: definition [模对象的同态]
设 $(M,\lambda_M)$ 和 $(N,\lambda_N)$ 是左 $A$-模对象。
它们之间的**同态**是满足
\[
f\circ\lambda_M
=
\lambda_N\circ(\operatorname{id}_A\otimes f)
\]
的态射 $f\colon M\to N$。

左 $A$-模对象及其同态构成[[范畴]]，
记为
\[
\mathsf{LMod}_A(\mathcal{C}).
\]
:::

在向量空间范畴中，同态条件就是
\[
f(au)=af(u).
\]

## 右模与双模

::: definition [右模对象]
$A$ 上的**右模对象**是对象 $M$，
带有作用态射
\[
\rho\colon M\otimes A\to M,
\]
满足
\[
\rho\circ(\rho\otimes\operatorname{id}_A)
=
\rho\circ(\operatorname{id}_M\otimes m)
\circ\alpha_{M,A,A},
\]
以及
\[
\rho\circ(\operatorname{id}_M\otimes\iota)=r_M.
\]

右模同态是满足
\[
f\circ\rho_M
=
\rho_N\circ(f\otimes\operatorname{id}_A)
\]
的态射。
右 $A$-模对象及其同态构成的范畴记为
$\mathsf{RMod}_A(\mathcal{C})$。
:::

::: definition [双模对象]
设 $A,B$ 是 $\mathcal{C}$ 中的代数对象。
**$(A,B)$-双模对象**是对象 $M$，
同时带有左 $A$-作用 $\lambda$ 和右 $B$-作用 $\rho$，
并满足相容条件
\[
\rho\circ(\lambda\otimes\operatorname{id}_B)
=
\lambda\circ(\operatorname{id}_A\otimes\rho)
\circ\alpha_{A,M,B}.
\]
:::

在向量空间范畴中，这个条件就是
\[
(au)b=a(ub).
\]
双模同态是同时保持左右作用的态射。

## 例子

::: example [幺半群作用]
在 $(\mathsf{Set},\times,\{*\})$ 中，
代数对象是幺半群。

给定幺半群 $A$，左 $A$-模对象是集合 $M$，
带有映射
\[
A\times M\longrightarrow M,
\qquad
(a,u)\longmapsto a\cdot u,
\]
满足
\[
(ab)\cdot u=a\cdot(b\cdot u),
\qquad
e\cdot u=u.
\]
这正是幺半群在集合上的左作用。
模对象的同态就是等变映射。

特别地，若 $A$ 是群，
则左 $A$-模对象就是带有 $A$-[[群作用]]的集合。
这里不要求 $M$ 具有加法。
:::

::: example [环上的模]
在 $(\mathsf{Ab},\otimes_{\mathbb Z},\mathbb Z)$ 中，
代数对象是含幺环 $A$。

左 $A$-模对象是 Abel 群 $M$，
带有群同态
\[
A\otimes_{\mathbb Z}M\longrightarrow M.
\]
这个同态等价于对两个变量分别可加的作用
$A\times M\to M$。
加上作用的结合律和单位律，
得到的恰好是通常的左 $A$-模。
:::

::: example [结合代数上的模]
在 $(\mathsf{Vect}_k,\otimes_k,k)$ 中，
设 $A$ 是含幺结合 $k$-代数。
则左 $A$-模对象就是通常的左 $A$-模。

例如，矩阵代数 $M_n(k)$ 通过矩阵乘法作用在 $k^n$ 上，
使 $k^n$ 成为左 $M_n(k)$-模对象。

对于群代数 $k[G]$，
左 $k[G]$-模对象则等价于 $G$ 的线性表示。
:::

::: example [等变模与陪集上的函数代数]
设 $G$ 是有限群。
在有限维群表示范畴 $\mathsf{Rep}_k(G)$ 中，
代数对象 $A$ 是带有 $G$ 作用的有限维结合代数，
其中 $G$ 通过代数自同构作用。

左 $A$-模对象是有限维 $G$-表示 $M$，
同时带有左 $A$-模结构，满足
\[
g\cdot(au)=(g\cdot a)(g\cdot u).
\]

特别地，设 $H\leq G$，取[[陪集]]上的函数代数
\[
A=k^{G/H}.
\]
令 $\delta_{xH}$ 表示陪集 $xH$ 的示性函数。
由于这些元素是两两正交且和为 $1$ 的幂等元，
每个 $A$-模对象具有分解
\[
M=\bigoplus_{xH\in G/H}M_{xH},
\qquad
M_{xH}:=\delta_{xH}M.
\]
等变条件意味着
\[
g\cdot M_{xH}=M_{gxH}.
\]

因此，可以把 $M$ 看作在每个陪集上放置一个向量空间，
并由 $G$ 的作用将这些空间相互联系起来。
其中 $M_H$ 自然是 $H$-表示。

反过来，给定有限维 $H$-表示 $W$，
[[诱导表示]]
\[
M=k[G]\otimes_{k[H]}W
\]
带有 $A$-作用
\[
f\cdot(g\otimes w)=f(gH)\,g\otimes w.
\]
这两个构造给出范畴等价
\[
\mathsf{LMod}_{k^{G/H}}(\mathsf{Rep}_k(G))
\simeq
\mathsf{Rep}_k(H).
\]
:::

::: example [微分分次模]
在上链复形范畴 $\mathsf{Ch}(k)$ 中，
设 $A$ 是含幺[[微分分次代数]]。
左 $A$-模对象是上链复形 $(M,d_M)$，
带有分次作用
\[
A^p\otimes_k M^q\longrightarrow M^{p+q},
\]
满足通常的作用结合律和单位律，
以及
\[
d_M(au)=d_A(a)u+(-1)^p a\,d_M(u),
\qquad a\in A^p.
\]
最后一个条件恰好表示作用映射
$A\otimes M\to M$ 是复形态射。

这种对象称为左 $A$-[[微分分次模]]。
其同态是保持分次、与微分交换且保持 $A$-作用的线性映射。
:::

## 基本构造

### 正则模

::: example [正则模对象]
代数对象 $A$ 的乘法
\[
m\colon A\otimes A\to A
\]
同时给出 $A$ 上的左作用和右作用。
乘法的结合律保证两个作用相容，
因此 $A$ 自然是 $(A,A)$-双模对象，
称为**正则双模对象**。
:::

### 自由模

::: proposition [自由模对象]
对任意对象 $X\in\mathcal{C}$，
对象 $A\otimes X$ 带有自然的左 $A$-模结构，
其作用为复合
\[
A\otimes(A\otimes X)
\xrightarrow{\alpha^{-1}_{A,A,X}}
(A\otimes A)\otimes X
\xrightarrow{m\otimes\operatorname{id}_X}
A\otimes X.
\]
它称为由 $X$ 生成的**自由左 $A$-模对象**。
:::

这个构造给出函子
\[
F_A\colon\mathcal{C}\longrightarrow\mathsf{LMod}_A(\mathcal{C}),
\qquad
X\longmapsto A\otimes X.
\]

::: proposition
自由模函子 $F_A$ 是遗忘函子
\[
U\colon\mathsf{LMod}_A(\mathcal{C})\longrightarrow\mathcal{C}
\]
的[[左伴随]]。
即存在自然双射
\[
\operatorname{Hom}_{\mathsf{LMod}_A(\mathcal{C})}(A\otimes X,M)
\simeq
\operatorname{Hom}_{\mathcal{C}}(X,U(M)).
\]
:::

::: proof
给定态射 $f\colon X\to U(M)$，
对应的模同态为
\[
A\otimes X
\xrightarrow{\operatorname{id}_A\otimes f}
A\otimes M
\xrightarrow{\lambda_M}
M.
\]
反过来，给定模同态 $h\colon A\otimes X\to M$，
对应的态射为
\[
X\xrightarrow{l_X^{-1}}
\mathbb{1}\otimes X
\xrightarrow{\iota\otimes\operatorname{id}_X}
A\otimes X
\xrightarrow{h}
M.
\]
作用的结合律和单位律保证这两个构造互逆。
:::

## 相对张量积

设 $(M,\rho_M)$ 是右 $A$-模对象，
$(N,\lambda_N)$ 是左 $A$-模对象。
它们的 **[[相对张量积]]** $M\otimes_A N$
由下面一对态射的[[余等子]]定义：
\[
\begin{tikzcd}[column sep=large]
  {(M\otimes A)\otimes N}
  \arrow[r,shift left=1.5,
    "{\rho_M\otimes\operatorname{id}_N}"]
  \arrow[r,shift right=1.5,
    "{(\operatorname{id}_M\otimes\lambda_N)
    \circ\alpha_{M,A,N}}"']
  & {M\otimes N}
  \arrow[r,"q"]
  & {M\otimes_A N}.
\end{tikzcd}
\]
这里要求这个余等子存在。

这个定义使作用在左边的 $A$ 与作用在右边的 $A$
得到相同的结果。
在向量空间范畴中，它就是通常的关系
\[
(ua)\otimes v=u\otimes(av).
\]

::: example [环上的张量积]
在 $\mathsf{Ab}$ 中，
右 $A$-模 $M$ 与左 $A$-模 $N$ 的相对张量积为
\[
M\otimes_A N
=
(M\otimes_{\mathbb Z}N)/
\langle
(ua)\otimes v-u\otimes(av)
\rangle.
\]
这正是通常的[[张量积|模的张量积]]。
:::

## 局部模

设 $\mathcal{C}$ 是[[辫幺半范畴]]，其辫结构记为
\[
c_{X,Y}\colon X\otimes Y\longrightarrow Y\otimes X.
\]
设 $A$ 是 $\mathcal{C}$ 中的[[代数对象|交换代数对象]]，
即其乘法满足
\[
m\circ c_{A,A}=m.
\]

::: definition [局部模]
左 $A$-模对象 $(M,\lambda)$ 称为**局部模**，
如果
\[
\lambda\circ c_{M,A}\circ c_{A,M}=\lambda.
\]
即下面的图表交换：
\[
\begin{tikzcd}
  {A\otimes M}
    \arrow[r,"{c_{A,M}}"]
    \arrow[d,"\lambda"']
  & {M\otimes A}
    \arrow[d,"{c_{M,A}}"] \\
  M
  & {A\otimes M}
    \arrow[l,"\lambda"]
\end{tikzcd}
\]

局部左 $A$-模及其模同态构成
$\mathsf{LMod}_A(\mathcal{C})$ 的全子范畴，
记为
\[
\mathsf{LMod}_A^{\mathrm{loc}}(\mathcal{C}).
\]
:::

直观地说，局部性要求：
先让 $A$ 与 $M$ 交换两次，再施加作用，
与直接施加作用得到相同的结果。

这里并不要求双重交换本身是恒等映射；
只要求它在与作用态射复合之后不改变结果。

### 左右作用的相容

由左作用 $\lambda$，可以通过辫结构定义两种右作用
\[
\rho_+
=
\lambda\circ c_{M,A},
\qquad
\rho_-
=
\lambda\circ c_{A,M}^{-1}.
\]
由于 $A$ 是交换代数对象，
它们分别与原来的左作用组成 $A$-双模结构。

局部模的条件恰好等价于
\[
\rho_+=\rho_-.
\]
也就是说，将右边的 $A$ 移到左边再作用时，
沿两个不同方向交换得到的结果相同。

对于右模 $(M,\rho)$，相应的局部性条件为
\[
\rho\circ c_{A,M}\circ c_{M,A}=\rho.
\]
局部右模范畴常记为 $\mathcal{C}_A^0$。

### 辫结构

::: proposition
假设 $\mathcal{C}$ 具有余等子，
且张量积对每个变量都保持余等子。
则局部左 $A$-模范畴以相对张量积 $\otimes_A$ 为张量积，
以正则模 $A$ 为单位对象，
构成[[辫幺半范畴]]。
:::

这里，在构造 $M\otimes_A N$ 时，
使用局部模 $M$ 上由左作用诱导的右作用。

对于局部模 $M,N$，
原范畴中的辫映射 $c_{M,N}$ 诱导同构
\[
\overline{c}_{M,N}\colon
M\otimes_A N\longrightarrow N\otimes_A M.
\]
若 $q_{M,N}\colon M\otimes N\to M\otimes_A N$
是定义相对张量积的余等子态射，
则该同构由
\[
\overline{c}_{M,N}\circ q_{M,N}
=
q_{N,M}\circ c_{M,N}
\]
确定。

局部性保证交换映射与相对张量积中的关系相容。
对于一般的 $A$-模，
原范畴的辫映射未必能诱导这样的同构。

### 例子

::: example [对称幺半范畴]
若 $\mathcal{C}$ 是[[对称幺半范畴]]，则
\[
c_{M,A}\circ c_{A,M}=\operatorname{id}_{A\otimes M}.
\]
因此，交换代数对象 $A$ 上的每个模都是局部模。

例如，在 $\mathsf{Vect}_k$ 中，
交换代数 $A$ 上的所有模都是局部模。
在 $\mathsf{sVect}_k$ 中，
超交换代数上的所有模对象也都是局部模。
:::

::: example [正则模]
交换代数对象 $A$ 自身是局部模。
事实上，
\[
m\circ c_{A,A}\circ c_{A,A}
=
m\circ c_{A,A}
=
m.
\]
这也解释了为什么局部模范畴的单位对象是 $A$。
:::

```terms
模对象:
  en: module object
  de: Modulobjekt
  fr: objet module
```
