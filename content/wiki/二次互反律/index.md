---
title: 二次互反律
categories: [初等数论, 代数数论]
---

**二次互反律**是数论中一个定理，
描述两个[[素数]]间[[二次剩余]]的关系。

## 定理陈述

首先回忆二次剩余的定义。

::: definition [二次剩余]
设 $p$ 为[[素数]]，$n$ 为与 $p$ 互素的整数。
$n$ 称为模 $p$ 的 **[[二次剩余]]**，
如果存在整数 $m$ 使得
\[
m^2 \equiv n \pmod p
\]
成立，否则称 $n$ 为模 $p$ 的**二次非剩余**。

定义 **[[Legendre 符号]]**
\[
\left( \frac{n}{p} \right) =
\begin{cases}
  1, & 若 \ n \ 是模 \ p \ 的二次剩余, \\
  -1,& 若  \ n \ 是模 \ p \ 的非二次剩余, \\
  0, & 若  \ p \ \mid \ n \ .
\end{cases}
\]
:::

对两个[[奇数|奇]][[素数]]，它们之间的二次剩余情况满足如下关系，
称为**二次互反律**。

::: theorem [二次互反律]
对[[奇数|奇]][[素数]] $p \neq q$，有等式
\[
\left( \frac{p}{q} \right) \left( \frac{q}{p} \right)
= (-1)^{\frac{(p-1)(q-1)}{4}}
\]
:::

与此同时，$2$ 和 $-1$ 在 $p$ 中的二次剩余仅与 $p$
的同余类有关，故也称为二次互反律。

::: theorem
\[
\begin{aligned}
  \left( \frac{-1}{p} \right) &= (-1)^{\frac{p-1}{2}}, \\
  \left( \frac{2}{p} \right) &= (-1)^{\frac{p^2-1}{8}}.
\end{aligned}
\]
:::

可以注意到 $-1$ 模 $p$ 的[[二次剩余]]由二次剩余理论的基本性质可得。

## 证明

### 初等证明

#### Max Eisenstein 的证明（数格点）

我们证明奇数的情形，首先看下面的引理。

::: lemma {@eisenstein}
设 $p$ 是奇素数，$a$ 是不被 $p$ 整除的奇数，
那么$\left( \frac ap \right)=(-1)^T$，
其中$T=\sum_{j=1}^{\frac{p-1}{2}}\lfloor ja/p\rfloor$。
:::

::: proof
考虑$\left\{a,2a,\cdots,\frac{p-1}{2}a\right\}$
这些元素模$p$下的绝对（值）最小剩余
$\{v_1,\cdots,v_t,-u_1,\cdots,-u_s\}$。
容易看出
$\{v_1,\cdots,v_t,u_1,\cdots,u_s\}=\{1,\cdots,\frac{p-1}2\}$，
因为任两者的差与和都不是$p$的倍数。
现在注意到
$\sum_{j=1}^{\frac{p-1}{2}}ja=
  pT+v_1+\cdots+v_t+(p-u_1)+\cdots+(p-u_s)$，
于是左右模$2$立刻得到
$p(T+s)=0$。
我们只需证明$\left( \frac ap \right)=(-1)^s$。

注意到对$v_i,-u_j$取乘积有
$(-1)^sv_1\cdots v_tu_1\cdots u_s=
  \left(\frac{p-1}2\right)!a^{\frac{p-1}{2}}$
而$v_1\cdots v_t u_1\cdots u_s=\left(\frac{p-1}2\right)!$，
引理得证。
:::

::: proof
由 @eisenstein，
注意到 $\sum_{j=1}^{\frac{p-1}{2}}\lfloor jq/p\rfloor,
\sum_{j=1}^{\frac{q-1}{2}}\lfloor jp/q\rfloor$
分别相当于
$\left[1,\frac{p-1}2\right]\times\left[1,\frac{q-1}2\right]$
中的格点在$py=qx$直线下和上者，于是
\[
\left(\frac pq\right)\left(\frac qp\right)=
(-1)^{\sum_{j=1}^{\frac{p-1}{2}}\lfloor jq/p\rfloor+
\sum_{j=1}^{\frac{q-1}{2}}\lfloor jp/q\rfloor}=
(-1)^{\frac{(p-1)(q-1)}{4}}.
\]
这即是二次互反律。
:::

#### George Rousseau 的证明

::: proof
我们证明奇素数的情形，记 $n=pq$，
$G=(\mathbb Z/n)^\times=(\mathbb Z/p)^\times\times(\mathbb Z/q)^\times$。
再记 $H=\{\pm1\}$ 为 $G$ 的二元子群，
下面以两种方法计算 $G/H$ 所有元素的乘积。

第一种方法是选取 $G/H$ 中元素在 $G$ 中代表元为
$$
\left\{(a,b)\biggm|1\le a\le p-1,\,
1\le b\le\frac{q-1}{2}\right\},
$$
分别计算它们在 $(\mathbb Z/p)^\times$、
$(\mathbb Z/q)^\times$ 中的乘积。
由 [[Wilson 定理]]前者是
$(p-1)!^{\frac{q-1}{2}}=(-1)^{\frac{q-1}{2}}$，
后者是 $\left(\left(\frac{q-1}2\right)!\right)^{p-1}
=\left(\left(\left(\frac{q-1}2\right)!\right)^2\right)^{\frac{p-1}{2}}
=\left( (q-1)!(-1)^{\frac{q-1}{2}} \right)^{\frac{p-1}{2}}
=(-1)^{\frac{p-1}{2}}(-1)^{\frac{(p-1)(q-1)}{4}}$。

第二种方法是，选取代表元为 $\left[1,\frac{pq-1}2\right]$
中与 $p,q$ 均互质元素，同样分别在 $(\mathbb Z/p)^\times$、
$(\mathbb Z/q)^\times$ 中算乘积。前者等于
$\left[1,\frac{pq-1}2\right]$ 去掉 $p$ 的倍数得到的
$1,2,\cdots,p-1;\;p+1,\cdots,2p-1;\;\ldots;\;
\frac{q-1}2p+1,\cdots,\frac{q-1}2p+\frac{p-1}2$
之积除以 $q,2q,\cdots,\frac{p-1}2q$ 之积，即
$\frac{(p-1)!^{\frac{q-1}{2}}\cdot\left(\frac{p-1}2\right)!}
{\left(\frac{p-1}{2}\right)!q^{\frac{p-1}{2}}}
=(-1)^{\frac{q-1}{2}}\left( \frac qp \right)^{-1}$。
同理后者等于 $(-1)^{\frac{p-1}{2}}\left( \frac pq \right)^{-1}$。

所以在 $(\mathbb{Z}/p)^\times\times(\mathbb{Z}/q)^\times$ 中有
\[
\left((-1)^{\frac{q-1}{2}},
(-1)^{\frac{p-1}{2}}(-1)^{\frac{(p-1)(q-1)}{4}}\right)
=\pm\left((-1)^{\frac{q-1}{2}}\left( \frac qp \right),
(-1)^{\frac{p-1}{2}}\left( \frac pq \right)  \right).
\]
简单讨论得知两种情况都符合二次互反律。
:::

### 代数数论证明

::: proof
记 $q^*=(-1)^{\frac{q-1}{2}}q$，则二次互反律相当于
\[
\left(\frac{q^*}{p}\right)=\left(\frac{p}{q}\right).
\]
注意：$q^*$ 是模 $p$ 二次剩余 $\iff$
$x^2 - q^* = 0$ 在 $\mathbb{F}_p$ 中有解 $\iff$
$p$ 在 $\mathbb{Q}(\sqrt{q^*})$ 中分裂 $\iff$
在 $\mathbb{Q}(\sqrt{q^*})$ 中，
$p$ 处的 [[Frobenius 映射]] $\phi$ 是恒等映射。
因此
\[
\frac{\phi(\sqrt{q^*})}{\sqrt{q^*}}
= \left( \frac{q^*}{p} \right).
\]

另一方面，注意到有 [[Gauß 和]]
\[
\sum_{k = 1}^{q - 1} \left( \frac{k}{q} \right)
\zeta_q^k = \sqrt{q^*},
\]
可得
\[
\phi(\sqrt{q^*}) = \sum_{k = 1}^{q - 1}
\left( \frac{k}{q} \right) \zeta_q^{pk}
= \left( \frac{p}{q} \right) \sqrt{q^*}.
\]
所以
\[
\frac{\phi(\sqrt{q^*})}{\sqrt{q^*}} =
\left( \frac{p}{q} \right).
\]
得二次互反律。此外，注意到
\[
2\sqrt{2} = \zeta_8 - \zeta_8^3 - \zeta_8^5 + \zeta_8^7,
\]
通过相同论断即得 $2$ 模 $p$ 的二次剩余情况。
:::

### 用 Hilbert 符号

::: proof
先证明奇素数的情况。考虑 $\mathbb{Q}$ 上（二次）[[Hilbert 符号]]的乘积公式：
\[
\prod_{v \in M_{\mathbb{Q}}} (p, q)_v = 1,
\]
其中 $M_{\mathbb{Q}}$ 是 $\mathbb{Q}$ 的[[位点]]之集。由 $p, q$ 均正知道
$(p, q)_\infty = 1$；由 $\mathbb{Q}$ 上 Hilbert 符号的计算知道若 $\ell$
是不同于 $p, q$ 的奇素数则 $(p, q)_\ell = 1$，
且有
\[
(p, q)_p = \left( \frac{q}{p} \right), (p, q)_q = \left( \frac{p}{q} \right).
\]
于是
\[
\left( \frac{p}{q} \right) \left( \frac{q}{p} \right)
= (p, q)_2 = (-1)^{\frac{p - 1}{2}\frac{q - 1}{2}}.
\]
关于 $\left( \frac{-1}{p} \right)$ 和 $\left( \frac{2}{p} \right)$ 的两式也可类似证明，
分别考虑 $\prod_v (-1, p)_v$ 和 $\prod_v (2, p)_v$ 即可。
:::

## 推广

在更高的观点中，对素数 $p, q$ 而言，
$q$ 对 $p$ 的二次剩余是在描述整数 $\mathbb{Z}$
中素理想 $(p)$ 在扩域 $\mathbb{Q}(\sqrt{q})$
的[[分裂]]情况（如 $p$ 是二次剩余则分裂，否则不分裂）。
而 $p$ 对 $q$ 的二次剩余是仅与 $p$ 的同余类有关的信息。
二次互反律说明了素数的分裂情况仅和其同余类有关。

对一般的域扩张，基域中[[素理想]]在扩域中会有分裂，
由[[类域论]]，
素理想的分裂情况同样仅和素理想所在的同余类有关，
这即是一般的互反律，也称为 [[Artin 互反律]]。

```terms
二次互反律:
  en: quadratic reciprocity law
  de: quadratisches Reziprozitätsgesetz :n
  fr: loi de réciprocité quadratique :f
```
