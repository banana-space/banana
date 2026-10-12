---
title: Lefschetz 原理
categories: [模型论]
notices:
  - name: 问题
    items:
      - “证明”一节中，特征 $0$ 的理论里的 $\neg \exists x (px=0)$ 似乎应为 $\neg \forall x (px=0)$（$x=0$ 总满足 $px=0$）；各处的 $\dashv$ 似乎应为 $\vdash$；$\mathcal{T} \bigcup_{p\leq q} \{\cdots\}$ 中似乎缺少并集符号。
---

**[[Solomon Lefschetz|Lefschetz]] 原理**是说，
对在[[环]]的[[一阶语言]]中的语句
（即可表示为只涉及加法、乘法等运算的语句），
如果对某个[[代数闭域]]正确，
就对所有相同[[特征 (环论)|特征]]的[[代数闭域]]正确。
并且它对特征充分大的特征非 $0$ 代数闭域正确等价于它对特征 $0$
代数闭域正确。

## 定理陈述

::: theorem [Lefschetz 原理]
- 固定特征的代数闭域理论是[[完备 (数理逻辑)|完备]]的，
  即一个在[[环]]的[[一阶语言]]中语句如果对某个[[代数闭域]]正确，
  就对所有相同[[特征 (环论)|特征]]的[[代数闭域]]正确。

- 对[[环]]的[[一阶语言]]中语句 $\phi$，以下三者等价：

  - $\phi$ 对所有特征 $0$ 的代数闭域正确。

  - $\phi$ 对所有特征充分大的代数闭域正确。

  - 存在任意大的素数 $p$，
    使 $\phi$ 对所有以此为特征的代数闭域正确。

:::

## 证明

::: proof
注意到具有相同的势的相同特征的代数闭域同构，由 [[Łoś–Vaught 判别法]]，
第一个命题得证。
对第二个命题，记 $\mathcal{T}$ 为代数闭域的理论，
则特征 $p$ 的代数闭域的理论是
$\mathcal{T}_p=\mathcal{T}\cup \{\forall x (px=0)\}$，
特征 $0$ 的代数闭域的理论是
$\mathcal{T}_0=\mathcal{T}\cup\bigcup_p \{\neg \exists x (px=0)\}$。
由[[紧性定理]]，对
$\mathcal{T}_0 \dashv \phi$，存在素数 $q$，
$\mathcal{T} \bigcup_{p\leq q} \{\neg \exists x (px=0)\}
  \dashv \phi$。
即在特征 $0$ 的代数闭域中正确可以推出在特征充分大的代数闭域中正确。
另一方面，由完备性，如 $\phi$ 在某个特征 $0$ 的代数闭域中不正确，
则 $\mathcal{T}_0 \dashv \neg \phi$。同样由紧性定理，
$\phi$ 对所有特征充分大的代数闭域都不正确。
:::

## 应用

- [[Ax–Grothendieck 定理]]

```terms
Lefschetz 原理:
  en: Lefschetz's principle
  fr: principe de Lefschetz
```
