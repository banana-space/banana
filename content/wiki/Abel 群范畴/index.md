---
title: Abel 群范畴
categories: [群论]
navboxes: [群论]
---

**Abel 群范畴**是以 [[Abel 群]]为对象、以[[群同态]]为态射的[[范畴]]，
记为 $\mathsf{Ab}$。
由于 Abel 群可以自然地看作 $\mathbb{Z}$-[[模]]，
$\mathsf{Ab}$ 也可以看作 $\mathbb{Z}$-模的范畴。

Abel 群的运算通常写成加法。
因此，$\mathsf{Ab}$ 中的态射 $f \colon A \to B$ 满足
\[
f(a + a') = f(a) + f(a').
\]
Abel 群之间既可以取[[直和]]，也可以取[[张量积]]。
其中，张量积将两个变量分别可加的映射转化为群同态，
其作用类似于[[向量空间]]的张量积。

## 定义

::: definition [Abel 群范畴] {@def-abelian-group-category}
**Abel 群范畴** $\mathsf{Ab}$ 由以下资料组成：

- 对象是所有 [[Abel 群]]。
- 从 $A$ 到 $B$ 的态射是所有群同态 $A \to B$，
  其集合记为 $\operatorname{Hom}_{\mathbb{Z}}(A,B)$。
- 态射的复合是映射的复合。
- 对象 $A$ 的恒等态射是恒等映射 $\operatorname{id}_A$。

群同态的复合仍然是群同态，
且映射的复合满足结合律和单位律，
因此这些资料构成范畴。
:::

对于 Abel 群 $A$，整数可以通过重复加法作用在 $A$ 上：
\[
na =
\begin{cases}
\underbrace{a + \cdots + a}_{n \text{ 项}}, & n > 0, \\
0, & n = 0, \\
-((-n)a), & n < 0.
\end{cases}
\]
这个作用使 $A$ 成为 $\mathbb{Z}$-模。
每个 Abel 群同态都自动保持这个作用，
因此也就是 $\mathbb{Z}$-模同态。

## 张量积

### 泛性质

设 $A,B,C$ 是 Abel 群。
映射 $f \colon A \times B \to C$ 称为**双加性映射**，
如果它对两个变量分别可加：
\[
\begin{aligned}
f(a+a',b) &= f(a,b)+f(a',b), \\
f(a,b+b') &= f(a,b)+f(a,b').
\end{aligned}
\]
这样的映射也称为 $\mathbb{Z}$-[[双线性映射]]。

::: definition [Abel 群的张量积] {@def-abelian-group-tensor-product}
Abel 群 $A,B$ 的**张量积**是一个 Abel 群
$A\otimes_{\mathbb{Z}}B$，连同双加性映射
\[
\tau \colon A\times B \to A\otimes_{\mathbb{Z}}B,
\qquad
(a,b)\mapsto a\otimes b,
\]
满足以下[[泛性质]]：

对于任意 Abel 群 $C$ 和双加性映射
$f\colon A\times B\to C$，
存在唯一的群同态
\[
\widetilde f\colon A\otimes_{\mathbb{Z}}B\to C
\]
使得
\[
f(a,b)=\widetilde f(a\otimes b).
\]
:::

换言之，存在自然的一一对应
\[
\operatorname{Hom}_{\mathbb{Z}}(A\otimes_{\mathbb{Z}}B,C)
\simeq
\operatorname{Bilin}_{\mathbb{Z}}(A,B;C),
\]
其中右边表示所有双加性映射的集合。

泛性质将张量积确定到唯一的相容同构。
在底环明确时，$A\otimes_{\mathbb{Z}}B$ 也简记为 $A\otimes B$。

### 生成元与关系

张量积可以具体构造如下。
先以所有符号 $a\otimes b$ 为生成元构造[[自由 Abel 群]]，
再施加关系
\[
\begin{aligned}
(a+a')\otimes b &= a\otimes b+a'\otimes b, \\
a\otimes(b+b') &= a\otimes b+a\otimes b'.
\end{aligned}
\]
所得商群就是 $A\otimes_{\mathbb{Z}}B$。

这些关系还蕴含
\[
0\otimes b=a\otimes 0=0,
\qquad
(na)\otimes b=a\otimes(nb)=n(a\otimes b)
\]
对任意 $n\in\mathbb{Z}$ 成立。

形如 $a\otimes b$ 的元素称为**纯张量**。
张量积中的每个元素都可以写成有限和
\[
\sum_{i=1}^{r}a_i\otimes b_i,
\]
但一般不能写成单个纯张量，而且这样的求和表示通常不唯一。

### 态射的张量积

若 $f\colon A\to A'$ 和 $g\colon B\to B'$ 是群同态，
则存在唯一的群同态
\[
f\otimes g\colon A\otimes B\to A'\otimes B'
\]
满足
\[
(f\otimes g)(a\otimes b)=f(a)\otimes g(b).
\]
因此，张量积给出[[二元函子]]
\[
{\otimes_{\mathbb{Z}}}\colon\mathsf{Ab}\times\mathsf{Ab}\to\mathsf{Ab}.
\]

### 幺半结构

Abel 群的张量积具有自然同构
\[
\begin{aligned}
\alpha_{A,B,C}\colon
(A\otimes B)\otimes C &\simeq A\otimes(B\otimes C), \\
(a\otimes b)\otimes c &\mapsto a\otimes(b\otimes c),
\end{aligned}
\]
以及
\[
\begin{aligned}
l_A\colon\mathbb{Z}\otimes A &\simeq A,
& n\otimes a &\mapsto na, \\
r_A\colon A\otimes\mathbb{Z} &\simeq A,
& a\otimes n &\mapsto na.
\end{aligned}
\]
所以张量积的单位对象是 $\mathbb{Z}$。

此外，交换两个因子给出自然同构
\[
c_{A,B}\colon A\otimes B\simeq B\otimes A,
\qquad
a\otimes b\mapsto b\otimes a.
\]
这些同构满足相应的相容性公理，
使 $(\mathsf{Ab},\otimes_{\mathbb{Z}},\mathbb{Z})$
成为[[对称幺半范畴]]。

## 例子

::: example [自由 Abel 群的张量积]
设 $A=\mathbb{Z}^m$，$B=\mathbb{Z}^n$，
分别具有标准基 $e_1,\dotsc,e_m$ 和 $f_1,\dotsc,f_n$。
则 $A\otimes B$ 是自由 Abel 群，
以所有 $e_i\otimes f_j$ 为基。
因此
\[
\mathbb{Z}^m\otimes_{\mathbb{Z}}\mathbb{Z}^n
\simeq\mathbb{Z}^{mn}.
\]

这也给出了非纯张量的例子。
在 $\mathbb{Z}^2\otimes\mathbb{Z}^2$ 中，
元素
\[
e_1\otimes e_1+e_2\otimes e_2
\]
不能写成单个 $a\otimes b$。
:::

::: example [与有限循环群的张量积]
设 $A$ 是 Abel 群，$n$ 是正整数。
则存在自然同构
\[
A\otimes_{\mathbb{Z}}(\mathbb{Z}/n\mathbb{Z})
\simeq A/nA,
\qquad
a\otimes\overline r\mapsto ra+nA,
\]
其中 $nA=\set{na\mid a\in A}$。

特别地，对正整数 $m,n$，有
\[
(\mathbb{Z}/m\mathbb{Z})\otimes_{\mathbb{Z}}
(\mathbb{Z}/n\mathbb{Z})
\simeq
\mathbb{Z}/\gcd(m,n)\mathbb{Z}.
\]
例如，
\[
(\mathbb{Z}/2\mathbb{Z})\otimes
(\mathbb{Z}/3\mathbb{Z})=0,
\qquad
(\mathbb{Z}/4\mathbb{Z})\otimes
(\mathbb{Z}/6\mathbb{Z})
\simeq\mathbb{Z}/2\mathbb{Z}.
\]
因此，两个非零 Abel 群的张量积可能为零。
:::

::: example [有理化]
对于 Abel 群 $A$，群
\[
A\otimes_{\mathbb{Z}}\mathbb{Q}
\]
自然地成为 $\mathbb{Q}$-向量空间，
称为 $A$ 的**有理化**。
这里的数乘由
\[
q\cdot(a\otimes r)=a\otimes(qr)
\]
确定。

若 $a\in A$ 是有限阶元素，取正整数 $n$ 使 $na=0$，则
\[
a\otimes q=(na)\otimes(q/n)=0.
\]
因此，有理化会将所有有限阶元素映为零。
特别地，
\[
(\mathbb{Z}/n\mathbb{Z})\otimes\mathbb{Q}=0,
\qquad
\mathbb{Z}^r\otimes\mathbb{Q}\simeq\mathbb{Q}^r.
\]
:::

::: example [张量积不一定保持单射]
乘以 $2$ 给出单射
\[
f\colon\mathbb{Z}\to\mathbb{Z},
\qquad n\mapsto 2n.
\]
但将它与 $\operatorname{id}_{\mathbb{Z}/2\mathbb{Z}}$ 取张量积，
并使用 $\mathbb{Z}\otimes(\mathbb{Z}/2\mathbb{Z})
\simeq\mathbb{Z}/2\mathbb{Z}$，
得到的是零映射
\[
\mathbb{Z}/2\mathbb{Z}\to\mathbb{Z}/2\mathbb{Z}.
\]
所以，与固定 Abel 群取张量积一般不保持单射。
:::

## 其他范畴结构

### 零对象、积与余积

平凡群 $0$ 同时是 $\mathsf{Ab}$ 的[[始对象]]和[[终对象]]，
因而是[[零对象]]。

一族 Abel 群 $(A_i)_{i\in I}$ 的[[积 (范畴论)|积]]
是逐坐标相加的直积
\[
\prod_{i\in I}A_i.
\]
它们的[[余积]]是直和
\[
\bigoplus_{i\in I}A_i,
\]
即直积中只有有限多个非零坐标的元素组成的子群。

对于有限多个对象，直积和直和相同。
特别地，$A\oplus B$ 同时是 $A,B$ 的积和余积，
称为它们的[[双积]]。

::: example [直和与张量积的区别]
对于整数加法群，
\[
\mathbb{Z}\oplus\mathbb{Z}=\mathbb{Z}^2,
\qquad
\mathbb{Z}\otimes_{\mathbb{Z}}\mathbb{Z}\simeq\mathbb{Z}.
\]
直和中的元素是有序对 $(m,n)$，
而张量积中的纯张量满足
\[
m\otimes n=mn(1\otimes1).
\]

直和也给出对称幺半结构 $(\mathsf{Ab},\oplus,0)$，
但它与 $(\mathsf{Ab},\otimes_{\mathbb{Z}},\mathbb{Z})$
是不同的幺半结构。
:::

### 核与余核

对群同态 $f\colon A\to B$，
其[[核]]为
\[
\ker f=\set{a\in A\mid f(a)=0},
\]
配备自然的包含同态 $\ker f\to A$。

其[[余核]]为商群
\[
\operatorname{coker}f=B/\operatorname{im}f,
\]
配备自然的商同态 $B\to B/\operatorname{im}f$。

$\mathsf{Ab}$ 中的[[单态射]]恰好是单射同态，
[[满态射]]恰好是满射同态。
Abel 群范畴是 [[Abel 范畴]]的基本例子。

## 代数对象

::: proposition
幺半范畴 $(\mathsf{Ab},\otimes_{\mathbb{Z}},\mathbb{Z})$ 中的[[代数对象]]恰好是含幺[[环]]，
不要求乘法交换。交换代数对象是交换环。
:::

::: proof
代数对象 $(A,m,\iota)$ 的底层对象 $A$
已经具有 Abel 群的加法结构。
乘法态射
\[
m\colon A\otimes_{\mathbb{Z}}A\to A
\]
等价于双加性乘法
\[
A\times A\to A,\qquad(a,b)\mapsto ab.
\]
双加性恰好给出环的左右分配律。

单位态射
\[
\iota\colon\mathbb{Z}\to A
\]
由元素 $1_A=\iota(1)$ 确定，
并满足 $\iota(n)=n1_A$。
代数对象的结合律和单位律，
则分别给出环乘法的结合律和单位律。

相应地，代数对象之间的同态就是保持单位元的环同态。
这里允许零环。
对于通常的对称结构，交换代数对象恰好是含幺交换环。
:::

::: example [矩阵环作为代数对象]
整数矩阵的加法群 $M_n(\mathbb{Z})$ 是 $\mathsf{Ab}$ 的对象。
矩阵乘法是双加性的，因而诱导群同态
\[
m\colon M_n(\mathbb{Z})\otimes_{\mathbb{Z}}M_n(\mathbb{Z})
\to M_n(\mathbb{Z}),
\qquad
X\otimes Y\mapsto XY.
\]
单位态射为
\[
\iota\colon\mathbb{Z}\to M_n(\mathbb{Z}),
\qquad
r\mapsto rI_n.
\]
这些资料使 $M_n(\mathbb{Z})$ 成为 $\mathsf{Ab}$ 中的代数对象。
当 $n\ge2$ 时，它不是交换代数对象。
:::

::: proposition
设 $R$ 是交换环，将其看作对称幺半范畴
$(\mathsf{Ab},\otimes_{\mathbb{Z}},\mathbb{Z})$
中的交换代数对象。
记 $\mathsf{Ab}_R$ 为左 $R$-[[模对象]]的范畴，
$\mathsf{Ab}_R^0$ 为其中局部模组成的[[全子范畴]]。
则每个 $R$-模对象都自动是[[局部模]]，且有对称幺半范畴的等价
\[
\mathsf{Ab}_R^0=\mathsf{Ab}_R
\simeq (R\text{-}\mathsf{Mod},\otimes_R,R).
\]
特别地，若 $R$ 是域，则
\[
\mathsf{Ab}_R^0\simeq\mathsf{Vect}_R,
\]
其中右边配备通常的张量积 $\otimes_R$，单位对象为 $R$。
:::

::: proof
$\mathsf{Ab}$ 中的左 $R$-模对象是 Abel 群 $M$，
配备作用态射
\[
\rho\colon R\otimes_{\mathbb{Z}}M\to M,
\]
满足模的结合律和单位律。
由张量积的泛性质，$\rho$ 等价于双加性映射
\[
R\times M\to M,\qquad(r,m)\mapsto rm.
\]
双加性给出
\[
(r+s)m=rm+sm,
\qquad
r(m+n)=rm+rn,
\]
而模对象的结合律和单位律分别给出
\[
(rs)m=r(sm),
\qquad
1_Rm=m.
\]
这些恰好是通常的左 $R$-模公理。

两个模对象之间的态射是与作用相容的群同态，
也就是满足
\[
f(rm)=rf(m)
\]
的群同态 $f\colon M\to N$。
因此，模对象及其态射分别对应于通常的 $R$-模和 $R$-模同态，
给出范畴等价
\[
\mathsf{Ab}_R\simeq R\text{-}\mathsf{Mod}.
\]

左 $R$-模对象 $(M,\rho)$ 的局部性条件为
\[
\rho\circ c_{M,R}\circ c_{R,M}=\rho.
\]
由于 $\mathsf{Ab}$ 的辫结构是对称的，
\[
c_{M,R}\circ c_{R,M}
=\operatorname{id}_{R\otimes_{\mathbb{Z}}M},
\]
上述条件自动成立。
所以 $\mathsf{Ab}_R^0=\mathsf{Ab}_R$。

最后，模对象的相对张量积是以下两个作用映射的余等化子：
\[
M\otimes_{\mathbb{Z}}R\otimes_{\mathbb{Z}}N
\rightrightarrows
M\otimes_{\mathbb{Z}}N
\longrightarrow
M\otimes_R N,
\]
其中两个平行映射分别将 $m\otimes r\otimes n$ 送到
$(rm)\otimes n$ 和 $m\otimes(rn)$。
因此，这个余等化子就是通常的模张量积
\[
M\otimes_R N
=
\frac{M\otimes_{\mathbb{Z}}N}
{\left\langle (rm)\otimes n-m\otimes(rn)
\mid r\in R,\ m\in M,\ n\in N\right\rangle}.
\]
单位对象是带有正则作用的 $R$，
结合子、单位子和对称结构也分别对应于通常的自然同构。
故上述等价是对称幺半范畴的等价。

若 $R$ 是域，则 $R$-模恰好是 $R$-向量空间，
从而得到 $\mathsf{Ab}_R^0\simeq\mathsf{Vect}_R$。
:::

```terms
Abel 群范畴:
  en: category of abelian groups
  de: Kategorie der abelschen Gruppen
  fr: catégorie des groupes abéliens
```
