---
title: 超群表示范畴
categories: [群表示论]
notices:
  - name: 问题
    items:
      - '定义不够一般且不具启发性。文中讨论的是群的超表示而非超群的表示。应用[[超 Lie 群]]及[[超 Lie 群表示]]的观点重写。'
      - 引言对符号规则的描述意义不明。
      - “有限群的情形”一节中的命题似乎缺少了要证明的性质：对称幺半结构对任意 $G$ 都已成立，而证明论证的是半单性与张量对偶的存在。
navboxes: [群表示论]
---

在[[范畴论]]中，**超群表示范畴**
是由[[群]] $G$ 及其指定的二阶[[中心|中心元]] $z$ 构造的
[[对称幺半范畴]]，记为 $\mathsf{Rep}(G,z)$。

中心元 $z$ 将每个 $G$-[[群表示|表示]]分成偶、奇两个部分，
使其成为[[超向量空间]]。
交换两个表示中的齐次向量时，
若两个向量都是奇的，则引入一个负号。

在具有 [[Fermi 宇称]]的量子系统中，
$z$ 可以解释为 Fermi 宇称算子。
这时，上述符号规则编码了交换两个奇态时的 Fermi 符号。

## 定义

以下所有表示均指有限维复表示。

::: definition [超群表示范畴]
设 $G$ 是群，$z\in Z(G)$ 满足
\[
z^2=e,\qquad z\neq e.
\]
**超群表示范畴** $\mathsf{Rep}(G,z)$ 定义如下：

- 对象是有限维复向量空间 $V$，带有群表示
  \[
  \rho_V\colon G\longrightarrow\operatorname{GL}(V).
  \]

- 态射 $f\colon V\to W$ 是 $G$-等变线性映射，即满足
  \[
  f\rho_V(g)=\rho_W(g)f
  \qquad(g\in G)
  \]
  的线性映射。

其张量积与对称结构由下文给出。
:::

由于 $\rho_V(z)^2=\operatorname{id}_V$，有特征子空间分解
\[
V=V^+\oplus V^-,
\qquad
V^\pm=\{v\in V\mid \rho_V(z)v=\pm v\}.
\]
我们将 $V^+$ 称为偶部分，$V^-$ 称为奇部分，
从而把 $V$ 看作超向量空间。

由于 $z$ 位于中心，
$G$ 的作用保持这一分解。
每个 $G$-等变线性映射也保持这一分解，
因此上述态射都是超向量空间之间的偶线性映射。

对于齐次向量 $v$，记其宇称为
\[
|v|=
\begin{cases}
0,&v\in V^+,\\
1,&v\in V^-.
\end{cases}
\]

这里的宇称由 $z$ 的作用确定，
并不是另外任意选取的分次。

## 幺半结构

### 张量积

对象 $V,W$ 的张量积是通常的向量空间张量积
$V\otimes_{\mathbb C}W$，带有对角的 $G$-作用
\[
g\cdot(v\otimes w)=(g\cdot v)\otimes(g\cdot w).
\]
特别地，
\[
z\cdot(v\otimes w)
=
(-1)^{|v|+|w|}v\otimes w.
\]
因此，张量积的宇称分解为
\[
\begin{aligned}
(V\otimes W)^+
&=(V^+\otimes W^+)\oplus(V^-\otimes W^-),\\
(V\otimes W)^-
&=(V^+\otimes W^-)\oplus(V^-\otimes W^+).
\end{aligned}
\]

态射的张量积由
\[
(f\otimes h)(v\otimes w)=f(v)\otimes h(w)
\]
给出。

单位对象是带有平凡 $G$-作用的 $\mathbb C$，
它是纯偶的。
结合子与左右单位子均采用向量空间的通常同构。

### 对称结构

::: definition [超对称交换]
对齐次向量 $v\in V$、$w\in W$，定义
\[
c_{V,W}\colon V\otimes W\longrightarrow W\otimes V,
\qquad
v\otimes w\longmapsto(-1)^{|v||w|}w\otimes v,
\]
并作线性延拓。
:::

由于 $G$ 的作用保持宇称，
$c_{V,W}$ 是 $G$-等变线性映射。
这些映射给出自然同构，并满足[[辫幺半范畴|六边形公理]]。

此外，
\[
c_{W,V}\circ c_{V,W}=\operatorname{id}_{V\otimes W},
\]
因为交换两次产生的符号为
\[
(-1)^{|v||w|}(-1)^{|w||v|}=1.
\]
因此，$\mathsf{Rep}(G,z)$ 是[[对称幺半范畴]]。

## 例子

::: example [超向量空间范畴]
取 $G=\mathbb Z_2=\{e,z\}$。
给定 $G$-表示等价于给定偶、奇分解，
因此有对称幺半等价
\[
\mathsf{Rep}(\mathbb Z_2,z)\simeq\mathsf{sVect}_{\mathbb C},
\]
其中右边表示有限维[[超向量空间]]与偶线性映射构成的范畴。

它有两个简单对象：
纯偶的平凡表示 $\mathbb C$，
以及纯奇的一维表示 $\Pi\mathbb C$。
后者满足
\[
\Pi\mathbb C\otimes\Pi\mathbb C\simeq\mathbb C,
\qquad
c_{\Pi\mathbb C,\Pi\mathbb C}=-\operatorname{id}.
\]
:::

::: example [四阶循环群]
取
\[
G=\mathbb Z_4=\langle g\mid g^4=e\rangle,
\qquad z=g^2.
\]
它有四个一维不可约表示 $\chi_j$，其中
\[
\chi_j(g)=\mathrm{i}^{\,j},
\qquad j=0,1,2,3.
\]
由于
\[
\chi_j(z)=(-1)^j,
\]
$\chi_0,\chi_2$ 是纯偶的，
$\chi_1,\chi_3$ 是纯奇的。

张量积满足
\[
\chi_j\otimes\chi_\ell\simeq\chi_{j+\ell},
\]
下标按模 $4$ 计算。
特别地，纯奇对象 $\chi_1$ 满足
\[
\chi_1\otimes\chi_1\simeq\chi_2\not\simeq\chi_0.
\]
这说明纯奇的一维对象的张量平方不一定是单位对象。
:::

::: example [四元数群]
取[[四元数群]]
\[
Q_8=\{\pm1,\pm i,\pm j,\pm k\},
\qquad z=-1.
\]
其四个一维不可约复表示都将 $-1$ 映到 $1$，
因此都是纯偶的。

另一个不可约表示 $U$ 的维数为 $2$，
其中 $-1$ 作用为 $-\operatorname{id}_U$，
因此 $U$ 是纯奇的。
它满足
\[
U\otimes U\simeq
\chi_0\oplus\chi_1\oplus\chi_2\oplus\chi_3,
\]
其中 $\chi_0,\chi_1,\chi_2,\chi_3$
是上述四个一维表示。

这个范畴具有非零的纯奇对象，
却没有纯奇的一维对象。
:::

## 性质

### 与普通表示范畴的关系

$\mathsf{Rep}(G,z)$ 与 $\mathsf{Rep}(G)$
具有相同的对象、态射、张量积和结合子。
因此，忘掉对称结构后，它们是同一个幺半范畴。

区别在于交换同构：
普通表示范畴使用
\[
v\otimes w\longmapsto w\otimes v,
\]
而超群表示范畴使用
\[
v\otimes w\longmapsto(-1)^{|v||w|}w\otimes v.
\]

忘掉 $G$-作用而保留宇称分解，得到忠实正合的
[[对称幺半函子]]
\[
\mathsf{Rep}(G,z)\longrightarrow\mathsf{sVect}_{\mathbb C}.
\]

### 纯偶部分

::: proposition
$\mathsf{Rep}(G,z)$ 中纯偶对象构成的全子范畴，
与商群 $G/\langle z\rangle$ 的普通表示范畴
对称幺半等价。
:::

::: proof
表示 $V$ 为纯偶，当且仅当 $z$ 在 $V$ 上作用为恒等映射。
这恰好等价于 $G$ 的作用经过商群
$G/\langle z\rangle$ 分解。

纯偶对象之间的交换符号恒为 $1$，
所以其对称结构就是普通表示范畴的对称结构。
:::

纯奇对象也构成全子范畴，
但它一般不对张量积封闭：
两个纯奇对象的张量积是纯偶的。

### 有限群的情形

::: proposition
若 $G$ 是有限群，
则 $\mathsf{Rep}(G,z)$ 是[[对称幺半范畴]]。
:::

::: proof
由 [[Maschke 定理]]，有限维复表示都是半单的，
且不可约表示的同构类只有有限多个。
单位对象是简单对象，
每个表示的对偶表示给出其张量对偶。
结合前述对称结构，即得结论。
:::

每个不可约表示都是纯偶或纯奇的：
否则其偶、奇部分会给出非平凡的子表示分解。
其张量积分解规则与普通表示范畴相同，
但交换同构包含由宇称决定的符号。

```terms
超群表示范畴:
  en: representation category of a group with a central involution
```
