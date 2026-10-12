---
title: 代数对象
categories: [范畴代数]
navboxes: [范畴论, 代数结构]
---

在[[范畴论]]中，
**代数对象**是[[幺半范畴]]中带有乘法和单位的对象，
其乘法满足结合律，单位满足单位律。

例如，在[[向量空间范畴]] $(\mathsf{Vect}_k, \otimes_k, k)$ 中，
代数对象就是通常的含幺[[结合代数]]；
在[[集合范畴]] $(\mathsf{Set}, \times, \{*\})$ 中，
代数对象就是[[幺半群]]。

## 定义

::: definition [代数对象] {@def-algebra-object}
设 $(\mathcal{C}, \otimes, \mathbb{1}, \alpha, l, r)$ 是[[幺半范畴]]。
$\mathcal{C}$ 中的**代数对象**是一个三元组 $(A, m, \iota)$，其中

- $A$ 是 $\mathcal{C}$ 中的对象。

- $m \colon A \otimes A \to A$ 是态射，称为**乘法**。

- $\iota \colon \mathbb{1} \to A$ 是态射，称为**单位态射**。

它们满足以下条件：

- （**结合律**）
  下面的图表交换：
  \[
  \begin{tikzcd}
    {(A \otimes A) \otimes A}
      && {A \otimes (A \otimes A)} \\
    {A \otimes A}
      && {A \otimes A} \\
    & A
    \arrow["{\alpha_{A,A,A}}", from=1-1, to=1-3]
    \arrow["{m \otimes \operatorname{id}_A}"',
      from=1-1, to=2-1]
    \arrow["{\operatorname{id}_A \otimes m}",
      from=1-3, to=2-3]
    \arrow["m"', from=2-1, to=3-2]
    \arrow["m", from=2-3, to=3-2]
  \end{tikzcd}
  \]

- （**单位律**）
  下面的图表交换：
  \[
  \begin{tikzcd}
    & A & \\
    {\mathbf{1} \otimes A}
      & {A \otimes A}
      & {A \otimes \mathbf{1}}
    \arrow["{l_A}", from=2-1, to=1-2]
    \arrow["{\iota \otimes \operatorname{id}_A}"',
      from=2-1, to=2-2]
    \arrow["m"', from=2-2, to=1-2]
    \arrow["{r_A}"', from=2-3, to=1-2]
    \arrow["{\operatorname{id}_A \otimes \iota}",
      from=2-3, to=2-2]
  \end{tikzcd}
  \]

:::

结合律也可以写成
\[
m \circ (m \otimes \operatorname{id}_A)
=
m \circ (\operatorname{id}_A \otimes m) \circ \alpha_{A,A,A},
\]
而单位律可以写成
\[
m \circ (\iota \otimes \operatorname{id}_A) = l_A,
\qquad
m \circ (\operatorname{id}_A \otimes \iota) = r_A.
\]

在一般范畴中，单位由态射 $\iota$ 表示。
当 $\mathcal{C} = \mathsf{Vect}_k$ 时，
这个态射由通常的单位元 $1_A = \iota(1)$ 唯一确定。

::: definition [代数对象的同态]
设 $(A, m_A, \iota_A)$ 和 $(B, m_B, \iota_B)$
是 $\mathcal{C}$ 中的代数对象。
它们之间的**同态**是满足
\[
f \circ m_A = m_B \circ (f \otimes f),
\qquad
f \circ \iota_A = \iota_B
\]
的态射 $f \colon A \to B$。

$\mathcal{C}$ 中的代数对象及其同态构成[[范畴]]，
记为 $\mathsf{Alg}(\mathcal{C})$。
:::

## 例子

::: example [幺半群]
在[[集合范畴]] $(\mathsf{Set}, \times, \{*\})$ 中，代数对象 $(A, m, \iota)$ 包括：

- $A$ 是集合，
- 乘法是映射 $m \colon A \times A \to A$，
- 单位态射 $\{*\} \to A$ 则指定一个元素。

代数对象的公理恰好是[[幺半群]]的公理。
:::

::: example [幺环]
在 $(\mathsf{Ab}, \otimes_{\mathbb{Z}}, \mathbb{Z})$ 中，代数对象恰好等价于幺[[环]]。
见[[Abel 群范畴]]。
:::

::: example [结合代数]
设 $k$ 是[[域]]。
在 $(\mathsf{Vect}_k, \otimes_k, k)$ 中，
线性映射 $m \colon A \otimes_k A \to A$
等价于一个双线性乘法。
因此，其中的代数对象恰好是含幺结合 $k$-代数，
例如[[矩阵代数]] $M_n(k)$ 和[[群代数]] $k[G]$。
:::

更一般地，若 $R$ 是[[交换环]]，
则 $(R\text{-}\mathsf{Mod}, \otimes_R, R)$
中的代数对象是含幺结合 $R$-代数。

设 $G$ 是有限群，$k$ 是域。
[[群表示范畴]] $\mathsf{Rep}_k(G)$ 中的代数对象
是带有 $G$ 作用的含幺结合 $k$-代数 $A$，
其中每个群元素都通过代数自同构作用。
具体地说，
\[
g \cdot (ab) = (g \cdot a)(g \cdot b),
\qquad
g \cdot 1_A = 1_A.
\]

::: example [陪集上的函数代数]
设 $H$ 是 $G$ 的子群。
考虑陪集空间 $G/H$ 上的函数空间
\[
A = k^{G/H} = \{f \colon G/H \to k\}.
\]
定义逐点乘法和群作用
\[
(f_1 f_2)(xH) = f_1(xH)f_2(xH),
\qquad
(g \cdot f)(xH) = f(g^{-1}xH).
\]
单位是常值函数 $1$。
这些运算使 $k^{G/H}$ 成为 $\mathsf{Rep}_k(G)$ 中的代数对象。

若以 $\delta_{xH}$ 表示陪集 $xH$ 的示性函数，群作用置换这些基向量。则
\[
\delta_{xH}\delta_{yH}
=
\begin{cases}
\delta_{xH}, & xH = yH, \\
0, & xH \ne yH,
\end{cases}
\qquad
1_A = \sum_{xH \in G/H} \delta_{xH}.
\]
:::

::: example [微分分次代数]
考虑 $k$-向量空间的上链复形范畴 $\mathsf{Ch}(k)$，
配备通常的复形张量积。
其代数对象就是含幺[[微分分次代数]]。

具体地说，这样的对象具有分次乘法
\[
A^p \otimes_k A^q \to A^{p+q}
\]
和微分 $d \colon A^p \to A^{p+1}$。
乘法是复形态射这一条件恰好给出分次 Leibniz 律：
\[
d(ab) = d(a)b + (-1)^p a\,d(b),
\qquad a \in A^p.
\]
单位属于 $A^0$，并满足 $d(1_A) = 0$。

例如，对光滑流形 $M$，
[[微分形式]]的上链复形
\[
(\Omega^\bullet(M), d)
\]
以[[外代数|外积]]为乘法，以常值函数 $1$ 为单位，
是 $\mathsf{Ch}(\mathbb{R})$ 中的代数对象。
:::

::: example [扭曲群代数]
设 $G$ 是有限[[群]]，
$\omega \colon G \times G \times G \to k^\times$
是正规化的 $3$-[[上闭链]]。
考虑有限维 $G$-[[分次向量空间]]组成的幺半范畴
$\mathsf{Vect}_G^\omega$。

设 $H \le G$，并取函数
$\mu \colon H \times H \to k^\times$，
满足
\[
\mu(e,h) = \mu(h,e) = 1
\]
以及
\[
\mu(g,h)\mu(gh,\ell)
=
\omega(g,h,\ell)\mu(h,\ell)\mu(g,h\ell).
\]
令
\[
A = \bigoplus_{h \in H} k e_h,
\qquad
\deg(e_h) = h,
\]
并定义
\[
m(e_g \otimes e_h) = \mu(g,h)e_{gh},
\qquad
\iota(1) = e_e.
\]
则 $(A,m,\iota)$ 是 $\mathsf{Vect}_G^\omega$ 中的代数对象。
:::

## 交换代数对象

若 $\mathcal{C}$ 还带有[[辫幺半范畴|辫结构]]
\[
c_{X,Y} \colon X \otimes Y \to Y \otimes X,
\]
则可以定义交换性。

::: definition [交换代数对象]
$\mathcal{C}$ 中的代数对象 $(A,m,\iota)$ 称为**交换代数对象**，
如果
\[
m \circ c_{A,A} = m.
\]
:::

在带有通常交换映射的 $\mathsf{Vect}_k$ 中，
这就是通常的交换代数。

在复形范畴中，通常的对称结构带有符号
\[
c(a \otimes b) = (-1)^{pq} b \otimes a,
\qquad a \in A^p,\quad b \in A^q.
\]
因此，交换代数对象的交换律为
\[
ab = (-1)^{pq}ba.
\]
微分形式代数 $\Omega^\bullet(M)$ 就是这样的交换代数对象。

```terms
代数对象:
  en: algebra object
  de: Algebraobjekt
  fr: objet algèbre
幺半群对象:
  en: monoid object
  de: Monoidobjekt
  fr: objet monoïde
```
