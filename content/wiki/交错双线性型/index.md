---
title: 交错双线性型
aliases: [反对称双线性型]
categories: [线性代数]
navboxes: [线性代数]
---

::: convention
在本文中，

- 所有[[环]]都是[[交换环]]。

:::

**交错双线性型**是满足对任意向量 $v$ 都有 $B(v,v)=0$
的[[双线性型]]，也就是交错 $(2,0)$-[[张量]]。

## 定义

::: definition [交错双线性型]
设 $k$ 是[[域]]，$V$ 是 $k$-[[线性空间]]。$V$
上**交错双线性型**指的是[[双线性型]] $B\colon
  V\times V\to k$，满足对任意 $v\in V$ 都有 $B(v,v)=0$。
:::

::: remark [反对称双线性型]
于是对 $u,v\in V$，展开 $0=B(u+v,u+v)=B(u,u)+B(u,v)
  +B(v,u)+B(v,v)=B(u,v)+B(v,u)$，即 $B(u,v)=-B(v,u)$。
满足 $B(u,v)=-B(v,u)$ 者称为**反对称双线性型**。
这个概念相比交错没那么自然。在 $\operatorname{char}k=2$
时它相当于[[对称双线性型|对称]]，在 $\operatorname{char}k\ne2$
时代入 $u=v$ 知它相当于交错。
:::

::: definition [正交补]
设 $B$ 是 $V$ 上交错双线性型，$W\subseteq V$ 是子空间。
$W$ 关于 $B$ 的**正交补**，记作 $W^\perp$，
指子空间
$$
\{v\in V\mid\forall u\in W,\,B(u,v)=0\}.
$$
$(V,B)$ 的**根**，又称**核**，指的是 $V^\perp$，
即子空间
$$
\{v\in V\mid\forall u\in V,\,B(u,v)=0\}.
$$
称 $B$ 为**非退化**，指其根为 $0$。
这是一般的[[双线性型]]都有的概念，不过在此由于交错，
左右正交补相同。
:::

::: definition [辛形式]
如 $V$ 是有限维线性空间，交错双线性型 $B$ 为非退化，
则称 $B$ 为**辛形式**。
:::

## 性质

有限维线性空间上的交错双线性型都有标准型：

::: theorem
$k$ 是域，$V$ 是有限维 $k$-线性空间，$B$ 是 $V$
上交错双线性型。则 $V$ 存在一组基 $\{u_1,\ldots,u_m;
  v_1,\ldots,v_m;w_1,\ldots,w_n\}$，使得
$B(u_i,v_j)=\delta_{ij}$，即 $i=j$ 时为 $1$，$i\ne j$
时为 $0$，且 $B(u_i,u_j)=B(v_i,v_j)=B(w_i,w_j)
  =B(u_i,w_j)=B(v_i,w_j)=0$，对任意 $i,j$。换言之，$B$
在该基下的矩阵为
$$
\begin{pmatrix}
  0&I_m&0\\
  -I_m&0&0\\
  0&0&0
\end{pmatrix},
$$
其中 $I_m$ 表示 $m$ 阶单位阵。
:::

::: corollary
$k$ 是域，$V,V'$ 是有限维 $k$-线性空间，$B,B'$
分别是 $V,V'$ 上交错双线性型。

- 如 $V,V'$ 维数一样，$B,B'$ 零度一样，则
  $(V,B)\cong(V',B')$。

- 如 $B$ 非退化，则 $\dim V$ 是偶数。

:::

此外，交错双线性型还有同构延拓性质：

::: theorem
$k$ 是域，$V,V'$ 是有限维 $k$-线性空间，$B,B'$
分别是 $V,V'$ 上交错双线性型，满足 $(V,B)\cong(V',B')$。
如有子空间 $W\subseteq V$，$W'\subseteq V'$ 之间同构
$f\colon(W,B)\cong(W',B')$，则其可延拓为同构
$\tilde{f}\colon(V,B)\cong(V',B')$。
:::

## 推广

交错双线性型也可推广到环上。

::: definition
环 $R$ 的模 $M$ 上的**交错双线性型**指的是映射
$B\colon M\times M\to R$，对两个分量都 $R$-线性，
且对任意 $m\in M$ 有 $B(m,m)=0$。称 $B$ 为**非退化**，
指 $M$ 为[[有限生成模|有限生成]][[投射模|投射]]，且 $B$ 在 $R$
的各个[[素理想]][[剩余域]]处非退化。
:::

::: proposition
$R$-模 $M$ 上的交错双线性型相当于 $\Lambda^2M$ 到 $R$
的映射，其中 $\Lambda$ 指[[外积]]。
:::

::: proposition
设 $B$ 是有限生成投射 $R$-模 $M$ 上非退化交错双线性型。
则在 $R$ 的 [[Zariski 局部]]上，$M$ 有一组基
$\{u_1,\ldots,u_m;v_1,\ldots,v_m\}$，使得
$B(u_i,v_j)=\delta_{ij}$，$B(u_i,u_j)=B(v_i,v_j)=0$，
对任意 $i,j$。换言之，$B$ 在该基下的矩阵为
$$
\begin{pmatrix}
  0&I_m\\
  -I_m&0
\end{pmatrix}.
$$
特别地，$M$ 的[[秩 (自由模)|秩]]是偶数。
:::

```terms
交错双线性型:
  en: alternating bilinear form
  de: alternierende Bilinearform
  fr: forme bilinéaire alternée
  grc: ἀλλάττουσα διγραμμικὴ μορφή
  la: forma bilinearis alterna
反对称双线性型:
  en: antisymmetric bilinear form
  de: antisymmetrische Bilinearform
  fr: forme bilinéaire antisymétrique
  grc: ἀντισυμμετρὰ διγραμμικὴ μορφή
  la: forma bilinearis antisymmetrica
辛形式:
  en: symplectic form
  de: symplektische Form
  fr: forme symplectique
  grc: συμπλεκτικὴ μορφή
  la: forma symplectica
```
