---
title: Witt 定理
categories: [线性代数]
---

**Witt 定理**是[[双线性型]]理论中的一个基本结论，
以 [[Ernst Witt]] 的名字命名。
它描述了双线性型的结构。

## 陈述

Witt 定理的两个常用形式如下。

::: theorem [Witt 延拓定理]
设 $k$ 是[[域]]，$(V, b)$ 是下列两者之一：

- $k$ 上的[[辛向量空间]]，或

- $k$ 上的[[正交向量空间]]，且 $k$
  的[[特征 (代数)|特征]]不为 $2$。

则 $V$ 的任何两个[[线性子空间|子空间]]之间的[[等距同构]]
$f \colon W \to W'$ 都能延拓为 $V$ 的等距自同构。
:::

::: theorem [Witt 消去定理]
设 $k$ 是[[域]]，$(V, b)$、$(V_1, b_1)$、$(V_2, b_2)$
是下列两者之一：

- $k$ 上的三个带有[[交错双线性型]]的有限维[[向量空间]]，或

- $k$ 上的三个带有[[对称双线性型]]的有限维[[向量空间]]，
  且 $k$ 的[[特征 (代数)|特征]]不为 $2$。

假设有等距同构
\[
(V, b) \oplus (V_1, b_1) \simeq
(V, b) \oplus (V_2, b_2) \, .
\]
那么，有等距同构
\[
(V_1, b_1) \simeq (V_2, b_2) \, .
\]
:::

## 证明

我们证明一般形式。以下：

- $k$ 是[[除环]]。

- $*$ 是 $k$ 的对合，即 $a\mapsto a^*$ 是
  $k$ 的反自同构，满足 $a^{**}=a$。

- $\varepsilon\in k$ 满足
  $\varepsilon\varepsilon^*=1$。

- 对 $k$-线性空间 $V$，其上 **$\varepsilon$-Hermite 双线性型**指的是满足
  $$
  B(u,v)=\varepsilon B(v,u)^*
  $$
  且对第一个变量线性的 $B\colon V\times V\to k$。
  这样 $B$ 自然对第二个变量为 $*$-线性。
  称 $B$ 满足**条件 $(\text{T})$**，
  指的是对任一 $v\in V$，存在 $a\in k$ 使得
  $$
  B(v,v)=a+\varepsilon a^*.
  $$

::: remark
取 $k$ 为域，$*=\operatorname{id}$。则：

- 交错双线性型是 $(-1)$-Hermite 双线性型，
  且显然满足条件 $(\text{T})$，因为可取 $a=0$。

- 对称双线性型是 $1$-Hermite 双线性型，
  且在 $\operatorname{char}k\ne2$ 时满足条件
  $(\text{T})$，因为可取 $a=\frac{1}{2}B(v,v)$。

:::

::: theorem [Witt 延拓定理]
设 $V$ 是有限维 $k$-线性空间，$B$ 是其上非退化
$\varepsilon$-Hermite 双线性型，满足条件 $(\text{T})$。
设 $W\subseteq V$ 是子空间，则任一等距嵌入
$i\colon W\to V$ 都可以延拓为 $V$ 的等距自同构。
:::

::: proof
首先注意，如 $W,W'\subseteq V$ 为两个子空间，
$i\colon W\to V$，$i'\colon W'\to V$
为等距嵌入，满足 $W\cap W'=i(W)\cap i'(W')=0$
且对任意 $w\in W$，$w'\in W'$ 有
$B(w,w')=B(i(w),i'(w'))$，则 $i\oplus i'$
就是从 $W+W'\subseteq V$ 到 $i(W)+i'(W')
\subseteq V$ 的等距同构。接下来：

- 先考虑 $i$ 在 $W$ 的余一维子空间 $U$ 上等于
  $\operatorname{id}$ 的情况。此时如
  $i=\operatorname{id}$ 自不必证；否则观察一维子空间
  $$
  T=\{i(w)-w\mid w\in W\}.
  $$
  如有子空间 $W'\subseteq T^\perp$ 满足
  $W'\cap W=W'\cap i(W)=0$，则可对 $W,W'$ 取
  $i'=\operatorname{id}$ 使用证明开头所注意，
  把 $i$ 延拓到 $W+W'$ 上，且延拓所得嵌入在余一维子空间
  $U+W'\subseteq W+W'$ 上等于 $\operatorname{id}$。
  现在对 $u,v\in W$ 计算
  $$
  B(i(u),i(v)-v)=B(i(u),i(v))-B(i(u),v)
  =B(u,v)-B(i(u),v)=B(u-i(u),v);
  $$
  由此不难看出 $U\subseteq T^\perp$。
  接下来分两种情况：

  - $W\nsubseteq T^\perp$。此时上式表明
    $i(W)\nsubseteq T^\perp$，且
    $W\cap T^\perp=i(W)\cap T^\perp=U$。
    这样，取 $U$ 在 $T^\perp$ 中的补空间 $W'$，
    则它也是 $W$ 在 $V$ 中的补空间。由前所述，$i$
    可以延拓至 $W+W'=V$ 上。

  - $W\subseteq T^\perp$。此时上式表明
    $i(W)\subseteq T^\perp$，于是 $T\subseteq T^\perp$，
    即 $T$ 是迷向子空间。我们先说明，存在子空间
    $W'\subseteq T^\perp$，同时是 $W$ 和 $i(W)$ 在
    $T^\perp$ 中的补空间：如果 $W=i(W)$ 自不必证；
    否则由于 $U=i(U)$ 同时是 $W$ 和 $i(W)$
    的余一维子空间，$W$ 和 $i(W)$ 都是 $W+i(W)$
    的余一维子空间，于是取 $W+i(W)$ 的补空间，
    再加上一个在 $W+i(W)$ 中但不在 $W$ 和 $i(W)$
    中的向量，即得所求。由前所述，$i$ 可以延拓到
    $W+W'=T^\perp$ 上，其像集为
    $i(W)+W'=T^\perp$。

    这样就化归到了 $W=i(W)=T^\perp$ 的情形。
    此时取 $v\notin W$，则 $V=W+kv$。
    由于 $B$ 非退化，存在 $v'\in V$，使得对任意
    $w\in W$ 均有
    $$
    B(i(w),v')=B(w,v).
    $$
    由于 $i(w)\in i(W)=T^\perp$，给 $v'$ 加上 $T$
    中元素不改变上式。于是由以下引理以及条件
    $(\text{T})$，可不妨设 $B(v',v')=B(v,v)$。
    这样就又可以用前述方法，取 $W'=kv$，$i'(v)=v'$，
    把 $i$ 延拓到 $W+kv=V$ 上。

- 一般情况对 $\dim W$ 归纳即可化归为 $i$
  在余一维子空间是 $\operatorname{id}$ 的情况。

:::

::: lemma
设 $V$ 是 $k$-线性空间，$B$ 是其上 $\varepsilon$-Hermite
双线性型，满足条件 $(\text{T})$。设子空间 $T\subseteq V$
为非零、全迷向。则对任一 $v\notin T^\perp$，任一 $a\in k$，
存在 $w\in T$ 使得
$$
B(v+w,v+w)=a+\varepsilon a^*.
$$
:::

::: proof
用条件 $(\text{T})$ 取 $b\in k$ 使得 $B(v,v)=b+
\varepsilon b^*$。由于 $T$ 全迷向，对 $w\in T$，
$$
B(v+w,v+w)=(b+B(w,v))+\varepsilon(b+B(w,v))^*.
$$
由于 $v\notin T^\perp$，$w\mapsto b+B(w,v)$ 是 $T$ 到
$k$ 的非常值仿射映射，由于 $T\ne0$ 这是满射。所以对任一
$a\in k$，存在 $w\in T$ 使得 $b+B(w,v)=a$，即
$$
B(v+w,v+w)=a+\varepsilon a^*.
$$
:::

```terms
Witt 定理:
  en: Witt's theorem
  fr: théorème de Witt
  de: Satz von Witt
Witt 延拓定理:
  en: Witt's extension theorem
  fr: théorème d'extension de Witt
  de: Erweiterungssatz von Witt
Witt 消去定理:
  en: Witt's cancellation theorem
  fr: théorème d'annulation de Witt
  de: Aufhebungssatz von Witt
```
