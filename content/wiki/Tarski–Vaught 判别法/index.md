---
title: Tarski–Vaught 判别法
aliases: [Tarski–Vaught 准则, Tarski–Vaught 测试, Tarski-Vaught 判别法]
categories: [模型论]
notices:
  - name: 问题
    items:
      - “定理”一节中 $(2)\Rightarrow(1)$ 的证明表述不清：“反证法证明，假设它是初等子结构”“$\varphi{M}$-赋值映射”含义不明；第二种情形的条件 $(M,\mu)\not\models \varphi$ 似乎应为 $(\mathcal{N},\nu)\not\models\varphi$；下标 $x_{k_n}$、$b_n$ 似乎应为 $x_{k_m}$、$b_m$；“根据初等子结构定义”似乎应为“根据条件 (2)”。
---

**Tarski–Vaught 判别法**是
判定一个[[结构]]是否是另一个结构的[[初等子结构]]的[[充要条件]]。
它是用于构造一个大结构的初等子结构时的有用方法。

## 定理

::: theorem
对于结构$\mathcal{N}=(N,J)$
与其子结构$\mathcal{M}=(M,I)$，
有以下等价：

(1) $\mathcal{M}$是$\mathcal{N}$的初等子结构；

(2) $\mathcal{N}$中以$M$中元素为参数的非空可定义的子集
    都与$M$交非空。

    即对于每一个$\mathcal{N}$的一阶语句
    $\varphi(x,y_1,\ldots,y_n)$，
    当 $(a_1,\ldots,a_n)\in M^n$时，
    若 $\mathcal{N}\models
    \exists x \varphi (x,a_1,\ldots,a_n)$ 成立，
    就存在$b\in M$，
    $\mathcal{N} \models \varphi (b,a_1,\ldots,a_n)$。

:::

::: proof
$(1)\Rightarrow (2)$
考虑一阶语句$\varphi(x,y_1,\cdots, y_n)$
在参数为$(b_1,\ldots,b_n)$的情况下所定义的集合非空，
但与$M$交为空，
那么式子$(\forall x(\neg \varphi)(x,b_1,\ldots,b_n))$
在$\mathcal{M}$中成立，但在$\mathcal{N}$中不成立。
这与初等子结构的定义相违背。

$(2)\Rightarrow (1)$
对于表达式采用归纳法，反证法证明，假设它是初等子结构。

对于任何一个$\mathcal{M}$的赋值映射$\nu$，
有$((\mathcal{M},\nu)\models \varphi)
  \Leftrightarrow
  ((\mathcal{N},\nu)\models \varphi)$。
归纳基础为对于所有常元与变元成立。

对于所有的$\varphi$ 是等值式、谓词式、否定式、蕴涵式时，
应用归纳假设可直接说明其成立。
下考虑全域式的情况，假设$\varphi=(\forall x_i\psi)$。

当$(N,\nu)\models \varphi$时，
根据定义，对于每一个在$\varphi$的自由变元上取值
与$\nu$相同的$\mathcal{M}$上赋值$\mu$，
有$(N,\mu)\models \psi$，
根据归纳假设就是 $(M,\mu)\models \psi$，
根据归纳法成立。

当$(M,\mu)\not\models \varphi$时，
根据定义与归纳假设，
可以找到一个$\varphi{M}$-赋值映射$\mu$，
满足
\[
\mu\equiv_\varphi\nu
且
(\mathcal{N},\mu)\not \models\psi
\]
设$y,x_{k_1},x_{k_2},\ldots,x_{k_m}$是
所有的$\varphi$的自由变元，
（$y$受囿的情况平凡，且证明是无异的）。

考虑表达式$(\neg\psi(x_i,y,x_{k_1},\ldots,x_{k_n}))$。
在$a=\nu(y),b_1=\nu(x_{k_1}),\ldots,
  b_m=\nu(x_{k_m})$为参数下，
该表达式$\neg\psi$所定义的集合非空
（根据假设$(\mathcal{N},\mu)\not \models\psi$）。
所以根据初等子结构定义，它与$M$的交也非空。

这也就是说，存在一个$b\in M$使得
$\neg\psi(b,a,b_1,\ldots,b_n)$成立。
于是我们得到了一个赋值与$\nu$
在$\varphi$的自由变元上都取相等的值，
在$x_i$取值在$M$中
但是仍旧不能得到$\psi$。
因此$(\mathcal{M},\nu)\not\models\varphi$。
:::

## 应用

- 用来判定$(\mathbb{Q},<)$
  是$(\mathbb{R},<)$的一个初等子结构。
  这是因为通过考虑其上的序自同构可以证明，
  所有的可定义集都是有限个端点为有理数的区间的并。

- 可用以证明[[Löwenheim–Skolem 定理]]。

```terms
Tarski–Vaught 判别法:
  en: 'Tarski–Vaught test, criterion'
```
