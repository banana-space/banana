---
title: 分圆域
categories: [域论]
navboxes: [域论]
---

在[[域论]]中，**分圆域**是指在有理数域中添加[[单位根]]
所得到的[[数域]]。

设 $n$ 是正整数，并令
\[
\zeta_n=e^{2\pi\mathrm{i}/n}.
\]
则 $\zeta_n$ 是一个[[本原单位根|本原 $n$ 次单位根]]。由它生成的域
\[
\mathbb{Q}(\zeta_n)
\]
称为第 $n$ 个分圆域。

## 定义

::: definition [分圆域]
设 $n$ 是正整数，$\zeta_n$ 是一个本原 $n$ 次单位根。
域扩张
\[
\mathbb{Q}(\zeta_n)/\mathbb{Q}
\]
称为第 $n$ 个**分圆扩张**，而
$\mathbb{Q}(\zeta_n)$ 称为第 $n$ 个**分圆域**。
:::

不同本原 $n$ 次单位根生成同一个分圆域。事实上，每个本原
$n$ 次单位根都形如
\[
\zeta_n^a,
\qquad
a\in(\mathbb{Z}/n\mathbb{Z})^\times.
\]

## 性质

::: proposition [分圆域的商环表示]
设 $\zeta_n$ 是一个本原 $n$ 次单位根。代入同态
\[
\operatorname{ev}_{\zeta_n}\colon
\mathbb{Q}[x]\longrightarrow\mathbb{Q}(\zeta_n),
\qquad
f(x)\longmapsto f(\zeta_n)
\]
是满射，并且
\[
\ker(\operatorname{ev}_{\zeta_n})
=
(\Phi_n(x)).
\]
这里的$\Phi_n(x)$是[[分圆多项式]]。
因此存在 $\mathbb{Q}$-代数同构
\[
\mathbb{Q}[x]/(\Phi_n(x))
\cong
\mathbb{Q}(\zeta_n).
\]
:::

::: proposition [分裂域]
分圆域 $\mathbb{Q}(\zeta_n)$ 是多项式
\[
x^n-1
\]
在 $\mathbb{Q}$ 上的[[分裂域]]。因此
\[
\mathbb{Q}(\zeta_n)/\mathbb{Q}
\]
是有限 [[Galois 扩张]]。
:::

::: proposition [Galois 群]
每个 $\mathbb{Q}$-自同构
\[
\sigma\colon\mathbb{Q}(\zeta_n)\longrightarrow
\mathbb{Q}(\zeta_n)
\]
都由 $\sigma(\zeta_n)$ 唯一确定，而且存在唯一的
\[
a\in(\mathbb{Z}/n\mathbb{Z})^\times
\]
使得
\[
\sigma(\zeta_n)=\zeta_n^a.
\]
由此得到群同构
\[
\operatorname{Gal}
\bigl(\mathbb{Q}(\zeta_n)/\mathbb{Q}\bigr)
\cong
(\mathbb{Z}/n\mathbb{Z})^\times.
\]
:::

## 例子

::: example
当 $n=1,2$ 时，
\[
\mathbb{Q}(\zeta_n)=\mathbb{Q}.
\]
:::

::: example
当 $n=4$ 时，
\[
\zeta_4=\mathrm{i},
\qquad
\mathbb{Q}(\zeta_4)=\mathbb{Q}(\mathrm{i}).
\]
由于
\[
\Phi_4(x)=x^2+1,
\]
所以
\[
[\mathbb{Q}(\mathrm{i}):\mathbb{Q}]=2.
\]
其 Galois 群由复共轭生成。
:::

::: example
当 $n=3$ 时，
\[
\zeta_3=\frac{-1+\sqrt{-3}}{2},
\]
因而
\[
\mathbb{Q}(\zeta_3)=\mathbb{Q}(\sqrt{-3}).
\]
它是 $\mathbb{Q}$ 的二次扩张。
:::

```terms
分圆域:
  en: cyclotomic field
  de: Kreisteilungskörper
  fr: corps cyclotomique
  la: corpus cyclotomicum
```
