---
title: 对称双线性型
categories: [线性代数]
notices:
  - name: 问题
    items:
      - “特征 $2$”“分类”各节需要扩充。
navboxes: [线性代数]
---

::: convention
在本文中，

- 所有[[环]]都是[[交换环]]。

:::

**对称双线性型**是满足对任意向量 $u,v$ 都有 $B(u,v)=B(v,u)$
的[[双线性型]]，也就是对称 $(2,0)$-[[张量]]。

## 定义

::: definition [对称双线性型]
设 $k$ 是[[域]]，$V$ 是 $k$-[[线性空间]]。$V$
上**对称双线性型**指的是[[双线性型]] $B\colon
V\times V\to k$，满足对任意 $u,v\in V$ 都有 $B(u,v)=B(v,u)$。
:::

::: definition [正交]
设 $B$ 是 $V$ 上对称双线性型。称 $u,v\in V$ 关于 $B$
**正交**，指的是 $B(u,v)=0$。对子空间 $W\subseteq V$，
$W$ 关于 $B$ 的**正交补**，记作 $W^\perp$，指子空间
$$
\{v\in V\mid\forall u\in W,\,B(u,v)=0\}.
$$
$(V,B)$ 的**根**，又称**核**，指的是 $V^\perp$，
即子空间
$$
\{v\in V\mid\forall u\in V,\,B(u,v)=0\},
$$
其维数称为 $B$ 的**零度**。
称 $B$ 为**非退化**，指其根为 $0$。
这是一般的[[双线性型]]都有的概念，不过在此由于对称，
左右正交补相同。
:::

::: definition [迷向]
设 $V$ 是线性空间，带双线性型 $B$。称 $v\in V$
为**迷向**，指的是 $B(v,v)=0$。称子空间
$W\subseteq V$ 为**迷向**，指的是对任意
$v,w\in W$ 都有 $B(v,w)=0$，即 $W\subseteq W^\perp$。
称 $B$ 为**非迷向**，指其没有非零迷向向量。
:::

::: definition [正交直和]
设 $(V,B)$ 与 $(V',B')$ 是两个带对称双线性型的 $k$-线性空间。
它们的**正交直和**，记作 $V\oplus V'$ 或 $V⦹V'$，
指的是线性空间 $V\oplus V'$，附带对称双线性型 $B\oplus B'$，
定义为
$$
(B\oplus B')(u,v)=\begin{cases}
  B(u,v),&u,v\in V;\\
  B'(u,v),&u,v\in V';\\
  0,&u\in V,\,v\in V'.
\end{cases}
$$
:::

::: definition [内积]
如 $V$ 是有限维线性空间，对称双线性型 $B$ 为非退化，
则称 $B$ 为 $V$ 上**内积**或**标量积**。
内积有时也用符号
$\left<\cdot,\cdot\right>$ 表示。
:::

## 例子

::: example {@0}
零映射总是对称双线性型。本条目中，我们把 $n$
维线性空间附带零型记作 $0_n$。
:::

::: example
设 $V$ 是 $n$ 维 $k$-线性空间，$e_1,\ldots,e_n$ 是其一组基，
$a_1,\ldots,a_n\in k$。定义
$$
B(e_i,e_j)=\begin{cases}
  a_i,&i=j;\\
  0,&i\ne j;
\end{cases}
$$
则这决定 $V$ 上的对称双线性型 $B$。下面（@对角）将会看到，
只要 $\operatorname{char}k\ne2$，$V$ 上任意双线性型，
在适当取基之后都是这样。如 $a_1=\ldots=a_n=1$，则称
$B$ 为 $k^n$ 上**标准内积**。本条目中，
我们把 $k^n$ 附带标准内积记作 $I_n$。
:::

::: example {@迷向单位}
设 $V$ 是二维 $k$-线性空间，$u,v$ 是其一组基。定义
$B(u,u)=B(v,v)=0$，$B(u,v)=1$，则这决定 $V$ 上非退化对称双线性型
$B$。本条目中，我们把二维空间附带该内积记作 $U$。
:::

## 性质

### 特征非 $2$

本小节设基域 $k$ 的特征不是 $2$。此时对称双线性型与[[二次型]]一一对应。

::: proposition {@极化}
设 $V$ 是 $k$-线性空间。则有一一对应
$$
\{V\,上二次型\,q\}\leftrightarrow
\{V\,上对称双线性型\,B\},
$$
两个方向映射分别为
$q\mapsto B_q(u,v)=q(u+v)-q(u)-q(v)$ 与
$B\mapsto q_B(v)=\frac{1}{2}B(v,v)$。
:::

可以把对称双线性型试图写成像[[交错双线性型]]一样的标准型，
不过这里并没有那么标准，会剩下一个非迷向的型。

::: theorem
设 $V$ 是有限维 $k$-线性空间，$B$ 是其上对称双线性型。
则 $(V,B)$ 可唯一写成 $0_n\oplus U^{\oplus m}\oplus A$
的形式，其中 $0_n$ 如 @0，$U$ 如 @迷向单位，
$A$ 为非迷向。
:::

::: proof
设 $(V,B)$ 的零度为 $n$，则其根自然就是 $0_n$。取其补空间
$W$，则由根的定义当然有 $(V,B)=0_n\oplus(W,B)$，且
$(W,B)$ 非退化。现对 $\dim W$ 归纳。如 $W$ 中没有迷向向量，
我们就已经完成证明。如有迷向向量 $u\in W$，由非退化可取
$w\in W$ 使得 $B(u,w)=1$。令 $v=w-\frac{1}{2}B(w,w)u$，
容易算出 $B(v,v)=0$，$B(u,v)=1$。于是 $u,v$
生成的子空间同构于 @迷向单位 中的 $U$。由 $U$
非退化易知 $U\cap U^\perp=0$，于是由 $W$ 非退化知
$W=U\oplus U^\perp$。对 $U^\perp$ 用归纳假设即得存在性。

唯一性是 [[Witt 定理]]的推论。
:::

此外，对称双线性型都可对角化。

::: theorem {@对角}
$V$ 是有限维 $k$-线性空间，$B$ 是 $V$
上对称双线性型。则 $V$ 存在一组基 $\{v_1,\ldots,v_m\}$，
使得 $i\ne j$ 时 $B(v_i,v_j)=0$，换言之，$B$
在该基下的矩阵为对角。当 $k$ 中每个元素都是平方，比如
$k$ 是[[代数闭域]]时，还可让该矩阵形如
$\operatorname{diag}(1,\ldots,1,0,\ldots,0)$。
:::

此外，对称双线性型还有同构延拓性质，证明参见主条目 [[Witt 定理]]。

::: theorem [Witt 延拓定理]
$V,V'$ 是有限维 $k$-线性空间，$B,B'$
分别是 $V,V'$ 上对称双线性型，满足 $(V,B)\cong(V',B')$。
如有子空间 $W\subseteq V$，$W'\subseteq V'$ 之间同构
$f\colon(W,B)\cong(W',B')$，则其可延拓为同构
$\tilde{f}\colon(V,B)\cong(V',B')$。
:::

### 特征 $2$

## 分类

## 推广

对称双线性型也可推广到环上。

::: definition
环 $R$ 的模 $M$ 上的**对称双线性型**指的是映射
$B\colon M\times M\to R$，对两个分量都 $R$-线性，
且对任意 $m,n\in M$ 有 $B(m,n)=B(n,m)$。称 $B$
为**非退化**，指 $M$ 为[[有限生成模|有限生成]][[投射模|投射]]，
且 $B$ 在 $R$ 的各个[[素理想]][[剩余域]]处非退化。
:::

::: proposition
$R$-模 $M$ 上的对称双线性型相当于 $\operatorname{Sym}^2M$
到 $R$ 的映射，其中 $\operatorname{Sym}$ 指[[对称积]]。
:::

::: proposition
设 $2\in R^\times$，$B$ 是有限生成投射 $R$-模 $M$
上非退化对称双线性型。则在 $R$ 的 [[Zariski 局部]]上，
$M$ 有一组基 $\{v_1,\ldots,v_m\}$，使得 $i\ne j$ 时
$B(v_i,v_j)=0$，换言之，$B$ 在该基下的矩阵为对角。
如到 $R$ 的[[平展局部]]上，则可取基让 $B$ 的矩阵为[[单位阵]]。
:::

```terms
对称双线性型:
  en: symmetric bilinear form
  de: symmetrische Bilinearform
  fr: forme bilinéaire symétrique
  grc: συμμετρὰ διγραμμικὴ μορφή
  la: forma bilinearis symmetrica
内积:
  en: inner product
  de: inneres Produkt
  fr: produit interne
  grc: μονόμετρον γενόμενον
  la: productum internum
标量积:
  en: scalar product
  de: Scalarprodukt
  fr: produit scalaire
  grc: ἐσωτερικὸν γενόμενον
  la: productum scalare
```
