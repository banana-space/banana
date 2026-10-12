---
title: Kőnig 定理
aliases: [König 定理, Konig 定理, Kőnig 不等式, Konig 不等式]
categories: [集合论]
notices:
  - name: 区分
    pages:
      - Kőnig 引理
navboxes: [集合论]
---

**Kőnig 定理**，或称 **Kőnig 不等式**，
是基数运算中的重要结论，大体说的是，如一族基数对应地小于另一族基数，
则其和小于那另一族的乘积。它是[[选择公理]]的一个等价形式，于
1904 年由匈牙利数学家 Gyula Kőnig 提出。

## 陈述与证明

::: theorem [Kőnig] {@Konig}
$I$ 是集合，$\{\kappa_i\}_{i\in I},\{\lambda_i\}_{i\in I}$
是以之为指标集的两族基数，满足对每个 $i\in I$，$\kappa_i<\lambda_i$。那么
$$
\sum_{i\in I}\kappa_i<\prod_{i\in I}\lambda_i.
$$
:::

::: proof
需要证明任意映射
$$
f\colon\bigsqcup_{i\in I}\kappa_i\to\prod_{i\in I}\lambda_i
$$
都不是满射。取一映射如上。对每个 $i\in I$，将其复合上含入映射
$\kappa_i\to\bigsqcup_{j\in I}\kappa_j$ 与投影映射
$\prod_{j\in I}\lambda_j\to\lambda_i$，得一映射 $f_i\colon\kappa_i\to\lambda_i$。
由条件，这不满，故可取一 $x_i\in\lambda_i$ 不在 $f_i$ 的像中。
由选择公理，可对所有的 $i$ 同时取出这样的 $x_i$，构成元素
$(x_i)_{i\in I}\in\prod_{i\in I}\lambda_i$。显然它不在
$f$ 的像中。故 $f$ 不是满射。
:::

::: remark
证明中用到了选择公理。注意如取 $\kappa_i$ 全为 $0$，Kőnig
定理就退化为选择公理。所以它与选择公理等价。
:::

## 推论

结合基数运算的基本事实，Kőnig 定理能框定一些指数运算的大小：

::: corollary
如 $\kappa$ 是无穷基数，则 $\kappa<\kappa^{\operatorname{cf}(\kappa)}$，
其中 $\operatorname{cf}$ 指[[共尾类]]。
:::

::: proof
取一族小于 $\kappa$ 的序数 $\{\alpha_i\}_{i\in\operatorname{cf}(\kappa)}$ 使得
$\sup_{i\in\operatorname{cf}(\kappa)}\alpha_i=\kappa$。
由于对每个 $i$ 皆有 $|\alpha_i|<\kappa$，所以
$$
\sum_{i\in\operatorname{cf}(\kappa)}|\alpha_i|<\kappa^{\operatorname{cf}(\kappa)}.
$$
不难发现左边就是 $\kappa$。
:::

::: corollary
如 $\lambda>1$，$\kappa$ 无穷，则
$\operatorname{cf}(\lambda^\kappa)>\kappa$。
特别地，$\operatorname{cf}(2^{\aleph_0})>\aleph_0$。
:::

::: proof
不然就有 $(\lambda^\kappa)^{\operatorname{cf}(\lambda^\kappa)}
=\lambda^{\kappa\operatorname{cf}(\lambda^\kappa)}
=\lambda^\kappa$，与上一个推论矛盾。
:::

::: corollary [Cantor定理]
对于任意基数$\kappa$，$2^\kappa>\kappa$都成立。
:::

::: proof
因为 $1<2$，所以
$\kappa=\sum_{i\in\kappa}1 < \prod_{i\in\kappa}2$。
:::

::: remark
展开 @Konig 的证明可以发现上述证明和主条目
[[Cantor 定理]]中所述本质相同。由于 $1$ 有一个元素，
$2$ 有两个元素，两个元素去掉一个元素总是只剩一个元素，
这种情形实际上没用到选择公理。
:::

```terms
Kőnig 定理:
  en: Kőnig's theorem
  fr: théorème de Kőnig
  de: Satz von Kőnig
```
