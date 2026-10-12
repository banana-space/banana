---
title: Sobolev 空间
categories: [泛函分析]
navboxes: [泛函分析]
---

**Sobolev空间**，是一类具有更弱意义下的导数的函数构成的空间。
一般来说，对于[[$L^p$ 空间]]的函数，我们无法做微分，也无法谈导数的积分性质。
因此，我们介绍更弱意义下的导数，并且研究那些更弱意义的导数仍在$L^p$空间的
函数性质。这一类函数往往在偏微分方程中凭借着$L^p$空间的良好泛函性质有着
重要的应用和结果。

## 定义

::: definition [弱导数] {@弱导数}
令$U$是$\mathbb{R}^n$的开子集并令 $f$ 是属于 $L^1_{\rm{loc}}(U)$的函数。
如果某列 $g_{i} \in L^1_{\rm{loc}}(U)$ 满足
\[
\int_U f(x)\cdot \partial_{x_i}\varphi(x) dx =
 - \int_{U} g_i(x) \cdot \varphi(x) dx, \quad \forall \varphi \in C^\infty_c(U),
\]
那么我们称 $g$ 为 $f$ 的弱导数，并记$\partial_{x_i} f =g_i$。
在本词条中，$\partial_{x_i}f$均表示$f$的弱导数。
:::

::: remark
@弱导数 中，弱导数的定义与[[分布 (泛函分析)|分布]]理论中
的分布导数的定义是一致的。根据分布理论，任意$f\in L^1_{\rm{loc}}$作为一个分布均有
分布导数，但是其分布导数可能只是一个分布，而不是一个函数。这里我们称弱导数存在，
如果其分布导数是一个$L^1_{\rm{loc}}$中的函数。
:::

::: definition [Sobolev 空间]
令$U$是$\mathbb{R}^n$的开子集，$1\le p \le +\infty $。
Sobolev空间$W^{1,p}(U)$定义为：
\[
W^{1,p}(U)\coloneqq \{f \in L^p \mid \partial_{x_i}f \  存在且\
\partial_{x_i}f \in L^p,\ i=1,\dots,n \}
\]
这里$W^{1,p}$角标上$1$代表一阶微分，$p$代表$L^p$函数。
:::

```terms
Sobolev 空间:
  en: Sobolev space
  de: Sobolev-Raum
  fr: espace de Sobolev
```
