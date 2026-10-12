---
title: '充实 $(\infty,1)$-范畴'
categories: [高阶代数, 高阶范畴论]
navboxes: [高阶代数, 高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**充实 $(\infty,1)$-范畴**是[[充实范畴]]的
$(\infty,1)$-范畴论类比。

## 定义

对于幺半范畴 $\mathcal{V}$，
一个 $\mathcal{V}$-充实范畴 $\mathcal{C}$ 大致指的是以下信息：

1. {@1} 对象所构成的生象 $S$，

2. {@2} 对于一对对象 $X,Y \in S$，
   有对象 $\operatorname{\underline{Hom}}_{\mathcal{C}}(X,Y) \in \mathcal{V}$。

3. {@3} 对于每个对象 $X \in S$，
   都存在 $\mathcal{V}$ 中态射
   \[
   \mathbb{1}_{\mathcal{V}} \to \operatorname{\underline{Hom}}_{\mathcal{C}}(X,X),
   \]
   称为恒等态射。

4. {@4} 对于任意三个对象 $X,Y, Z \in S$，
   都存在 $\mathcal{V}$ 中态射
   \[
   \operatorname{\underline{Hom}}_{\mathcal{C}}(Y,Z) \otimes \operatorname{\underline{Hom}}_{\mathcal{C}}(X,Y) \to \operatorname{\underline{Hom}}_{\mathcal{C}}(X,Z),
   \]
   称为复合态射。

且这些态射满足高阶相容性。

和 $1$-范畴论中不同，由于这里需要编码高阶的连贯性，因此相当不平凡。
目前而言，有两种自然的方式定义它。

### 通过 Day 卷积

不难发现，[条件 2](@2) 的信息可写为函子
\[
F \colon S \times S \to \mathcal{V}, \quad (X,Y) \mapsto F(X,Y) \eqqcolon \operatorname{\underline{Hom}}_{\mathcal{C}}(X,Y).
\]
因此，[条件 3](@3) 以及[条件 4](@4) 相当于说：
$F$ 是 $\mathsf{Fun}(S \times S, \mathcal{V})$ 上的结合代数。

考虑如下广义平面算畴 $\mathsf{Assoc}_S$：
对于 $n \geq 0$，
取 $(\mathsf{Assoc}_{S})_{[n]} \coloneqq S^{\times (n+1)}$。

::: definition
令 $\mathcal{V}$ 为幺半范畴，
$S$ 为生象。
记
\[
\mathsf{Quiv}_S(\mathcal{V})^{\otimes} \coloneqq \mathsf{Fun}(\mathsf{Assoc}_S,\mathcal{V})^{\otimes} \to \mathsf{Assoc}^{\otimes}
\]
为由 [[Day 卷积]]所给出的算畴。
:::

具体而言，$\mathsf{Quiv}_S(\mathcal{V})$ 可刻画如下：
- 其底范畴为
  \[
  \mathsf{Quiv}_S(\mathcal{V}) = \mathsf{Fun}(S \times S, \mathcal{V}).
  \]
- 其幺元为函子
  \[
  \mathbb{1}_{\mathsf{Quiv}_S(\mathcal{V})} \colon (X,Y) \mapsto
  \begin{cases}
    \mathbb{1}_{\mathcal{V}}, & 如果 \operatorname{Hom}(X,Y) = *,\\
    \varnothing, & 如果 \operatorname{Hom}(X,Y) = \varnothing.
  \end{cases}
  \]
- 给定 $F, G \colon S \times S \to \mathcal{V}$，
  则它们的张量积可逐点刻画为
  \[
  (F \circledast G)(X,Y) = \coprod_{Z \in S} F(Z,Y) \otimes G(X,Z).
  \]

由此，可定义 $\mathcal{V}$-充实范畴。

::: definition {@定义-通过-Day-卷积}
令 $\mathcal{V}$ 为幺半范畴，$S$ 为生象。
- $S$ 上的 **$\mathcal{V}$-充实预范畴**是指 $\mathsf{Quiv}_S(\mathcal{V})$ 中的结合代数。
- 对于 $\mathcal{V}$-充实预范畴 $\mathcal{C}$，
  如果 $\mathcal{C}^{\simeq} \simeq S$，则称 $\mathcal{C}$ 为 **$\mathcal{V}$-充实范畴**。

:::

### 通过弱充实范畴

另一个比较自然的办法是采用[[弱充实 $(\infty,1)$-范畴]]。
请读者先熟悉该条目，这里将采用其定义与记号。

::: definition {@定义-通过弱充实范畴}
设 $\mathcal{V}$ 是[[幺半 (∞,1)-范畴|幺半范畴]]，
$\mathcal{C}$ 是伪 $\mathcal{V}$-充实范畴。换言之，
$\mathcal{C}$ 是弱 $\mathcal{V}$-充实范畴，且对
$n\in\mathbb{N}$ 以及任意 $V_1,\ldots,V_n\in\mathcal{V}$，
自然映射
$$
\operatorname{Mul}_\mathcal{C}(V_1\otimes\cdots\otimes V_n,X;Y)
\to\operatorname{Mul}_\mathcal{C}(V_1,\ldots,V_n,X;Y)
$$
都是同构。

对 $X,Y\in\mathcal{C}$，定义**态射预层**
$$
\operatorname{\underline{Hom}}_\mathcal{C}(X,Y)=(V\mapsto\operatorname{Mul}_\mathcal{C}
(V,X;Y))\in\mathsf{P}(\mathcal{V}),
$$
其中 $\operatorname{Mul}$ 表示弱充实范畴中的多重态射生象。称
$\mathcal{C}$ 为 **$\mathcal{V}$-充实范畴**，
指其中所有的态射预层都可表。此时定义 $\mathcal{C}$
中两个对象的**态射对象**为表示态射预层的
$\mathcal{V}$ 中对象，仍记作 $\operatorname{\underline{Hom}}_\mathcal{C}(-,-)$。

所有的小 $\mathcal{V}$-充实范畴构成的范畴记作
$\mathsf{Cat}_\mathcal{V}$。一般而言 $\mathsf{Cat}_\mathcal{V}$
并不 $\mathcal{V}$-充实，
正如一般[[环]]的[[左模]]之间的映射不再具有模结构。
:::

::: remark
回忆[[弱充实 $(\infty,1)$-范畴]]条目中的记号约定：$\mathcal{C}$
本来是弱 $\mathcal{V}$-充实范畴 $\mathcal{C}^\otimes
  \to\mathsf{LM}$ 的底范畴。故对 $X,Y\in\mathcal{C}$ 自然有态射生象
$\operatorname{Hom}_\mathcal{C}(X,Y)$。由于 $\mathcal{C}$ 是伪
$\mathcal{V}$-充实范畴，
$$
\operatorname{Hom}_\mathcal{C}(X,Y)=\operatorname{Mul}_\mathcal{C}(X;Y)
=\operatorname{Mul}_\mathcal{C}(\mathbb{1}_{\mathcal{V}},X;Y)=
\operatorname{Hom}_\mathcal{V}(\mathbb{1}_{\mathcal{V}},\operatorname{\underline{Hom}}_\mathcal{C}(X,Y)).
$$
:::

## 性质

::: proposition
令 $\mathcal{V}$ 为幺半范畴，
$\mathcal{C}$ 为 $\mathcal{V}$-弱充实范畴，
则 $\mathcal{C}$ 为 $\mathcal{V}$-充实范畴当且仅当对于任意 $X \in \mathcal{C}$，
函子 $- \otimes X \colon \mathcal{V} \to \mathcal{C}$ 具有右伴随
$\operatorname{\underline{Hom}}_{\mathcal{C}}(X,-)$。
:::

## 例子

- 如 $\mathcal{V}$ 是[[闭幺半 (∞,1)-范畴|左闭幺半范畴]]，
  则它典范充实于自身。

- $(\infty,n+1)$-范畴就是充实于 $(\infty,n)$-范畴的范畴。
  具体地说，对 $n\in\mathbb{N}$，以 $\mathsf{Cat}_{(\infty,n)}$ 记
  $(\infty,n)$-范畴组成的 $(\infty,1)$-范畴，则
  $\mathsf{Cat}_{(\infty,n+1)}=\mathsf{Cat}_{\mathsf{Cat}_{(\infty,n)}}$。
  依赖于所采用的 $(\infty,n)$-范畴的定义，这可能是定义也可能是定理。

```terms
'充实 $(\infty,1)$-范畴':
  en: 'enriched $(\infty,1)$-category'
充实预范畴:
  en: enriched precategory
```
