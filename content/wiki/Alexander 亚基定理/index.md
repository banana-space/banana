---
title: Alexander 亚基定理
categories: [一般拓扑]
---

**Alexander 亚基定理**是个[[点集拓扑]]定理，
用[[拓扑空间]]的[[亚基]]直接判别其[[紧空间|紧]]性。
它可以用来证明 [[Tikhonov 定理]]。

## 陈述与证明

::: theorem
设 $X$ 是拓扑空间，$\mathcal{B}$ 是其[[亚基]]。
如果任意由 $\mathcal{B}$ 中开集组成的 $X$
的[[开覆盖]]都有有限子覆盖，则 $X$ 是[[紧空间]]。
:::

::: proof
用反证法。设 $X$ 不紧，$X=\bigcup_{i\in I}U_i$
是其开覆盖，没有有限子覆盖。用
[[Zorn 引理]]可不妨设它是这样的开覆盖中极大者。换言之，
如果 $X$ 的开子集 $V$ 和各 $U_i$ 不同，则开覆盖
$X=V\cup\bigcup_{i\in I}U_i$ 有有限子覆盖。记
$$
I'=\{i\in I\mid U_i\in\mathcal{B}\},
$$
则由条件 $\bigcup_{i\in I'}U_i\ne X$，
否则就会得到有限子覆盖。取 $x\in X$，
$x\notin\bigcup_{i\in I'}U_i$。取 $i\in I$，
$x\in U_i$。由 $\mathcal{B}$ 是亚基，可取
$V_1,\ldots,V_n\in\mathcal{B}$ 使得
$x\in\bigcap_{j=1}^nV_j\subseteq U_i$。由 $x$ 的取法，
$V_1,\ldots,V_n$ 都不出现在 $\{U_i\}_{i\in I}$ 中，
于是由前述极大性，开覆盖 $X=\bigcup_{i\in I}U_i$
在加入各 $V_j$ 之后都会出现有限子覆盖。设
$X=V_j\cup U_{i(j,1)}\cup\cdots\cup U_{i(j,n_j)}$，
则由 $\bigcap_{j=1}^nV_j\subseteq U_i$ 知
$$
X=U_i\cup\bigcup_{j,k}U_{i(j,k)},
$$
与 $X=\bigcup_{i\in I}U_i$ 没有有限子覆盖矛盾！定理得证。
:::

```terms
Alexander 亚基定理:
  en: Alexander subbase theorem
  de: Satz von Alexander
  fr: théorème d'Alexander
```
