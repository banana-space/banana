---
title: 双线性型
categories: [线性代数]
---

[[向量空间]] $V$ 上的**双线性型**是指映射
$B \colon V \times V \to k $，
关于两个变量分别线性
（@def-bilinear）。
等价地说，双线性型也就是 $(2,0)$-[[张量]]
（@rem-as-tensor）。

有些文献会把一般的双线性映射 $V \times W \to k$ 也称为双线性型，
但本百科把它称为[[配对]]，而把本条目留给两个线性空间相同的情形。

双线性型的例子包括[[内积]]与[[辛形式]]等。
双线性型能建立向量空间到它的[[对偶空间]]的映射（@def-dual）。
如果此双线性型是非退化的，还可以把它们等同起来（@def-nondegenerate）。

## 定义

::: definition [双线性型] {@def-bilinear}
域 $k$ 上的向量空间 $V$ 上的**双线性型**是指一个[[映射]]
$B\colon V\times V\to k$，
使得对任意 $u, u_1, u_2, v, v_1, v_2 \in V$ 和 $a, b \in k$，有
\[
\begin{gathered}
  B( a u_1 +b u_2, v ) = a B( u_1, v ) + b B( u_2, v )\\
  B( u, a v_1+ b v_2 ) = a B( u, v_1 ) + b B( u, v_2 ).
\end{gathered}
\]
:::

::: remark {@rem-as-tensor}
等价地说，$V$ 上的双线性型就是[[线性映射]]
$B\colon V\otimes V\to k$ 或者说元素
$B\in (V\otimes V)^*$。换言之，有限维向量空间上的双线性型，
也就是其上的 $(2,0)$-[[张量]]。
:::

::: remark
双线性型也可以在一般的环上定义，
即[[交换环]] $R$ 的[[模]] $M$ 上的双线性型是满足双线性的[[映射]]
$M \times M \to R$，
也就是一个 $R$-模同态 $M \otimes_R M \to R$。
:::

由对偶的性质，双线性型对应了向量空间到它的对偶空间的映射。

::: definition [对偶] {@def-dual}
每个双线性型 $B$ 诱导两个映射 $V \to V^*$，分别为
\[
\begin{gathered}
  B_l \colon u \mapsto (v \mapsto B( u, v )) \\
  B_r \colon u \mapsto (v \mapsto B( v, u )).
\end{gathered}
\]
:::

::: definition [非退化] {@def-nondegenerate}
双线性型被称为**非退化**的，如果上述二映射是单射，否则它被称为**退化**的。
:::

正如对 [[Euclid 空间]]可以定义它的子空间的正交补，
对一般的双线性型也可以定义类似概念。

::: definition [正交补]
对双线性型 $B$，向量空间 $V$ 的子空间 $W$
的**左正交补** $^\perp W$ 定义为
\[
\{ u \in V \mid B_l(u)|_W = 0 \} =
\{ u \in V \mid B( u,v ) = 0, \forall v \in W\}.
\]
**右正交补** $W^\perp$为
\[
\{ u \in V \mid B_r(u)|_W = 0 \} =
\{ u \in V \mid B( v,u ) = 0, \forall v \in W\}.
\]
:::

对可能退化的双线性型，可以定义它的退化程度。

::: definition [根]
双线性型 $B$ 的**左根**，或称**左核**，
为全空间 $V$ 的左正交补，即
\[
\{ u \in V \mid B( u, v ) = 0, \forall v \in V\},
\]
**右根**，或称**右核**，为全空间 $V$ 的右正交补，
即
\[
\{ u \in V \mid B( v, u ) = 0, \forall v \in V\}.
\]
对有限维向量空间，左根与右根的维数相同，
称为此双线性型的**零度**。
:::

有时会为双线性型加入对称或反对称的性质。

::: definition [对称、交错]
称域 $k$ 上的双线性型 $B$ 为 **[[对称双线性型]]**，指其满足
\[
B( u,v ) = B( v,u ), \quad \forall u, v \in V;
\]
称其为 **[[交错双线性型]]**，指其满足
\[
B( u,u ) = 0,\quad \forall u\in V.
\]
:::

::: remark
由定义，双线性型的对称与交错和相应张量的对称与交错是相同的。
:::

::: definition [正交补]
对对称双线性型和反对称双线性型，
子空间的左、右正交补相同，统称为**正交补**，
它的左、右根也相同，统称为**根**或**核**。
:::

## 例子

- 零映射是双线性型。

- [[Euclid 空间]]上的[[内积]]是对称、非退化双线性型。

## 性质

### 一般性质

由一般的张量理论，双线性型可以用分量形式表示。
为简便起见，我们假设向量空间是有限维的。

::: proposition [分量表示]
对向量空间 $V$ 双线性型 $B( u,v )$，
固定 $V$ 的一组基 $\{ e_1, \dots, e_n \}$，
定义
\[
B_{ij} = B( e_i, e_j ).
\]
则对 $V$ 中向量 $u = \sum u^i e_i$，$v = \sum v^i e_i$，
有
\[
B( u, v ) = \sum_{i,j} B_{ij} u^i v^j.
\]
:::

::: proposition [矩阵表示]
可以将上述所有分量组合起来写成矩阵的形式，
即令矩阵
\[
B = (B_{ij})_{1\le i,j \le n}.
\]
则对向量 $u = (u^1, \dots, u^n)^t$，$v = (v^1, \dots, v^n)^t$，有
\[
B( u,v ) = u^t B v.
\]
此时，双线性型的 $B$（左、右）核是 $0$ 当且仅当矩阵 $B$ 为（左、右）可逆，
双线性型的零度等于向量空间的维数减矩阵的[[秩 (线性代数)|秩]]。
:::

如一般的张量一般，分量表示在线性空间基的变换下等变。

::: proposition [等变性]
$V$ 是向量空间，$B$ 是其上双线性型。对 $V$ 的两组基
$\{ e_1, \dots, e_n \}$，$\{ e_1', \dots e_n' \}$，
设它们之间的变换矩阵为 $U$，即 $e'_i = \sum U^i_j e_j$，
记 $B_{ij}$，$B'_{ij}$ 为 $B$ 在两组基下的分量形式，则有
\[
B'_{ij} = \sum_{k,l} B_{kl} U_i^k U_j^l.
\]
如使用矩阵的形式，设双线性型相应的矩阵形式为 $B, B'$，则
\[
B' = U^t B U.
\]
:::

双线性型的对称和交错也由矩阵体现：

::: proposition
对 $V$ 的任意一组基，

- 双线性型 $B$ 是对称的，当且仅当对任意 $i,j$ 都有
  $B_{ij} = B_{ji}$，即相应的矩阵是对称阵。

- 双线性型 $B$ 是反对称的，
  当且仅当对任意 $i,j$ 都有 $B_{ij} = - B_{ji}$，
  $B_{ii} = 0$。即相应的矩阵是交错阵。

:::

域的特征不是 $2$ 时，双线性型可分解为对称双线性型和交错双线性型的和：

::: proposition
设 $\operatorname{char}k\ne2$，$V$ 是 $k$-线性空间，
$B$ 是 $V$ 上双线性型。则存在唯一对称双线性型 $B^1$
和交错双线性型 $B^2$，使得
\[
B = B^1 + B^2.
\]
事实上，$B^1$ 与 $B^2$ 定义为：
\[
\begin{gathered}
  B^1(u, v) = \frac{1}{2} (B(u, v) + B(v, u)) \\
  B^2(u, v) = \frac{1}{2} (B(u, v) - B(v, u)).
\end{gathered}
\]
:::

还有一个奇妙性质：对一般双线性型，只要每个子空间的左正交补和右正交补都相同，
那么它都是对称或交错。

::: proposition
$k$ 是[[域]]，$V$ 是 $k$-线性空间，$B$ 是 $V$ 上双线性型。
如对任意 $u,v\in V$ 均有
$$
B(u,v)=0\iff B(v,u)=0,
$$
则 $B$ 为对称或交错。
:::

::: proof
设 $B$ 不为交错，即存在 $u\in V$ 使得 $B(u,u)\ne0$，
来证明 $B$ 对称，即对任意 $v,w\in V$ 都有 $B(v,w)=B(w,v)$。
我们分如下几步。

- 先对任意 $v\in V$ 证明 $B(u,v)=B(v,u)$。
  $B(u,v)=0$ 时这是条件。否则由 $B(u,u)\ne0$，把 $v$
  减去若干倍的 $u$ 即可化归到 $B(u,v)=0$ 情形。

- 再对任意 $v,w\in V$ 证明 $B(v,w)=B(w,v)$。
  如 $B(u,v)\ne0$，由于已知 $B(u,v)=B(v,u)$，可把
  $w$ 减去若干倍的 $u$，化归到 $B(v,w)=0$ 情形，此即条件。
  如 $B(u,v)=0$，由于已知 $B(u,w)=B(w,u)$，可把 $v$
  加上一个 $u$，即化归到上一句话。

这样就完成了证明。
:::

### 对称双线性型

<see>[[对称双线性型]]</see>

以下列举了一些对称双线性型的性质。详尽的性质参见主条目[[对称双线性型]]。
这一小节中我们假设 $k$ 的特征不是 $2$。

可以把对称双线性型的矩阵表示写成较好的形式，即要求它是对角阵。

::: proposition
对有限维向量空间 $V$ 上的对称双线性型，存在一组基 $\{ e_1, \cdots, e_n \}$ 使得
它的矩阵表示 $A$ 是对角阵 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$。
这些 $\lambda$ 中 $0$ 的个数等于此双线性型的零度。
:::

如果基域 $k$ 具有好的性质，双线性型能表现为更好的形式：

::: proposition
- 如果 $k$ 是[[代数闭域]]（例如[[复数]] $\mathbb{C}$），
  任意对称双线性型有矩阵表示
  $\operatorname{diag}(1, \dots, 1, 0, \dots, 0)$，
  此时 $1, 0$ 的数目被此双线性型唯一决定。

- 如果 $k$ 是[[实闭域]]（例如[[实数]] $\mathbb{R}$），任意对称双线性型有矩阵表示
  $\operatorname{diag}(1, \dots, 1, -1, \dots, -1, 0, \dots, 0)$，
  此时 $1, -1, 0$ 的数目被此双线性型唯一决定。

:::

### 交错双线性型

<see>[[交错双线性型]]</see>

以下列举了一些交错双线性型的基本性质，
详尽性质参见主条目[[交错双线性型]]。

交错双线性型也可以写成较好的形式，
它的矩阵形式可以写成一些“块”的拼合：

::: proposition
对有限维向量空间 $V$ 上的交错双线性型，
存在一组基 $\{ e_1, \cdots, e_n \}$ 使得它的矩阵表示形如
\[
\begin{pmatrix}
  J & 0 & \cdots & 0 & 0 \\
  0 & J & \cdots & 0 & 0 \\
  \vdots & \vdots & \ddots & \vdots & \vdots \\
  0 & 0 & \cdots & J & 0 \\
  0 & 0 & \cdots & 0 & 0
\end{pmatrix}
\]
其中 $0$ 均表示零矩阵，$J$ 是 $2 \times 2$ 矩阵
\[
\begin{pmatrix}
  0 & -1 \\
  1 & 0
\end{pmatrix}.
\]
右下角的零矩阵的阶数即为此双线性型的零度。
:::

```terms
双线性型:
  en: bilinear form
  de: Bilinearform
  fr: forme bilinéaire
  grc: διγραμμικὴ μορφή
  la: forma bilinearis
根:
  en: radical
  fr: radical :f
  grc: ῥιζικόν :n
  la: radical :n
零度:
  en: nullity
  fr: nullité :f
  grc: μηδενία :f
  la: nullitas :f
```
