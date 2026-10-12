---
title: Wedderburn 小定理
categories: [一般环论]
---

Wedderburn 小定理说的是，有限[[除环]]都是[[域]]。

## 定理与证明

::: theorem
有限除环都是域。
:::

::: proof
设 $D$ 是有限除环，$F$ 为其[[中心]]，则 $F$ 是[[有限域]]。
记 $q=|F|$，$n=\dim_FD$，则 $|D|=q^n$，要证 $n=1$。
注意对任一 $x\in D$，
\[
C_D(x)=\{y\in D\mid xy=yx\}
\]
是除环，且 $F\subseteq C_D(x)\subseteq D$，
从而其元素个数必形如 $q^d$，其中 $d\mid n$。写出 $D^\times$
的[[类方程]]
\[
q^n-1=q-1+\sum\frac{q^n-1}{q^d-1},
\]
其中和式对所有非平凡共轭类求。考虑[[分圆多项式]] $\Phi_n(T)$，
则对 $d\mid n$，$d<n$，在 $\mathbb{Z}[T]$ 中有
$\Phi_n(T)\mid\frac{T^n-1}{T^d-1}$，代入 $T=q$ 有
$\Phi_n(q)\mid\frac{q^n-1}{q^d-1}$。这样，类方程就给出
$\Phi_n(q)\mid q-1$。而依定义
\[
\Phi_n(q)=\prod_{\zeta\,为\,n\,次本原单位根}(q-\zeta),
\]
如 $n>1$，易知其模长大于 $q-1$，矛盾！故只有 $n=1$，
$D=F$ 是域。
:::

::: corollary
没有零因子的有限环是域。
:::

::: proof
没有零因子无非就是说，对非零元 $a$，“乘以 $a$”都是单射。
由于有限，单射都是双射，这推出非零元都可逆，于是该环是除环。
由定理它是域。
:::

::: remark
定理相当于说有限域的 [[Brauer 群]]都是 $0$。
这也可以用 [[Chevalley–Warning 定理]]以及[[曾定理]]证明。
:::

```terms
Wedderburn 小定理:
  en: Wedderburn's little theorem
  de: (kleiner) Satz von Wedderburn
  fr: (petit) théorème de Wedderburn
```
